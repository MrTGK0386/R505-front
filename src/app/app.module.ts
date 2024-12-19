import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {provideHttpClient, HttpClientModule} from '@angular/common/http';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './shared/layouts/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { TranslocoRootModule } from './transloco-root.module';
import { LangSelectorComponent } from './shared/layouts/lang-selector/lang-selector.component';
import {formatDate} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/layouts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    LangSelectorComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
