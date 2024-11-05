import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Subject} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {User} from "../interfaces/user"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _token?: string;
  isInit: boolean = false;
  initEvent: Subject<boolean> = new Subject<boolean>();

  get token(): string | undefined {
    return this._token;
  }
  private set token(value: string | undefined) {
    this._token = value;
  }

  private _user?: User;
  get user(): User | undefined {
    return this._user;
  }
  private set user(value: User | undefined) {
    this._user = value;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.init();
  }

  public async init(){
    // Récupère le code dans l'url
    let urlParams = new URLSearchParams(window.location.search);

    // S'il y a un code dans l'url, on effectue une requête pour récupérer le token
    if(urlParams.has('code')){
      let code = urlParams.get('code') as string;

      // Effectue la requête sur le callback de l'API
      let res = await this.requestApi('/auth/callback', 'GET', {code});
      if(res && res.token){
        this.savTokens(res.token);
        await this.getUser();
        this.router.navigate(['/']);
      }
    }else{
      // Sinon on récupère le token dans le localstorage s'il existe et on le stocke dans la variable token
      this.token = localStorage.getItem('apiToken') ? JSON.parse(localStorage.getItem('apiToken') as string).token : undefined;
      if(this.token){
        await this.getUser();
      }
    }

    // On indique que l'initialisation est terminée
    this.isInit = true;
    this.initEvent.next(true);
  }

  public async requestApi(action: string, method: string = 'GET', datas: any = {}, form?: FormGroup, httpOptions: any = {}): Promise<any> {

    const methodWanted = method.toLowerCase();
    let route = environment.apiUrl + action;

    //définition de la variable de requête
    var req: Observable<any>;

    //ajout du header si il n'existe pas, on demande du json
    if (httpOptions.headers === undefined) {
      httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
    }

    // création de la requête en fonction de la méthode
    switch (methodWanted) {
      case 'post':
        req = this.http.post(route, datas, httpOptions);
        break;
      case 'patch':
        req = this.http.post(route, datas, httpOptions);
        break;
      case 'put':
        req = this.http.put(route, datas, httpOptions);
        break;
      case 'delete':
        route = this.applyQueryParams(route, datas);
        req = this.http.delete(route, httpOptions);
        break;
      default:
        route = this.applyQueryParams(route, datas);
        req = this.http.get(route, httpOptions);
        break;
    }

    //si le formulaire est passé en paramètre on le met en pending
    if(form){
      form.markAsPending();
    }

    //on retourne une promesse
    return new Promise((resolve, reject) => {
      req.subscribe({
        //si la requête est un succès
        next: (data) => {
          if (form){
            form.enable();
            if(data.message){
              this.setFormAlert(form, data.message, 'success');
            }
          }
          resolve(data);
          return data;
        },
        //si la requête est un échec
        error : (error: HttpErrorResponse) => {

          console.log('Http Error : ', error);
          if(form){
            form.enable();
            if (error.error.message) {
              this.setFormAlert(form, error.error.message, 'error');

              if(error.error.errors){
                // On parcourt les erreurs pour les affecter aux champs du formulaire concernés
                Object.entries(error.error.errors).forEach((entry: [string, any]) => {
                  const [key, value] = entry;
                  const keys = key.split('.');
                  let control: any = form;

                  for (let j = 0; j < keys.length; j++) {
                    control = control.controls[keys[j]];
                  }

                  if(control) {
                    if(typeof value === 'string'){
                      control.setErrors({serverError: value});
                    }else{
                      for (let i = 0; i < value.length; i++) {
                        control.setErrors({serverError: value[i]});
                      }
                    }
                  }
                });
              }
            } else if (error.error) {
              if (typeof error.error === 'string') {
                this.setFormAlert(form, error.error, 'error');
              }
            } else {
              this.setFormAlert(form, error.message, 'error');
            }
          }
          reject(error);
          return error;
        }
      })
    });
  }

  savTokens(apiToken: string){

    // Enregistre le token dans le localstorage
    localStorage.setItem('apiToken', JSON.stringify({
      token: apiToken,
    }));

    this.token = apiToken;

  }

  async getUser() {
    await this.requestApi('/user').then((data: User) => {
      this.user = data;
    });
  }

  isLogged(): boolean{
    return this.token !== undefined;
  }

  //fonction pour ajouter les paramètres à une url
  applyQueryParams(url: string, datas: any){
    return url + '?' + Object.keys(datas).map((key) => {
      return key + '=' + datas[key];
    }).join('&');
  }

  //fonction pour afficher une alerte sur un formulaire
  setFormAlert(form: FormGroup, message: string, status: 'success' | 'error' | 'warning' | 'info' = 'success'){
    form.setErrors({
      serverError : {
        status: status,
        message: message
      }
    })
  }
}
