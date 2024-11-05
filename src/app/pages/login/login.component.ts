import { Component } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  providerRedirect: string = environment.apiUrl + "/auth/redirect" ;
}
