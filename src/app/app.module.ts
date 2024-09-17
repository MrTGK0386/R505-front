import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {provideHttpClient} from '@angular/common/http';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './shared/layouts/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
