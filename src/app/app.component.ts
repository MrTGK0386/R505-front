import { Component } from '@angular/core';
import {ApiService} from "./shared/services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './pages/app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokedex - Etienne';

  constructor(
    public apiService: ApiService,
  ) {
    this.apiService.requestApi('/pokemon').then((pokemons) => {
      //console.log(pokemons);
    });
  }
}
