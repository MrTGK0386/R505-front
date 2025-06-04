import { Component } from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon";
import {Ability} from "../../interfaces/ability";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-talents-card',
  templateUrl: './talents-card.component.html',
  styleUrl: './talents-card.component.scss'
})
export class TalentsCardComponent {
  pokemon!: Pokemon;
  abilities!: Ability;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    // Récupération de l'identifiant du Pokémon dans l'URL
    this.route.params.subscribe(params => {
      if (params['pokemon_id']) {
        // Appel de l'API pour récupérer les informations du Pokémon
        this.apiService.requestApi(`/pokemon/${params['pokemon_id']}`)
          .then((response: Pokemon) => {
            this.pokemon = response;
          });
      }
    });
  }

  getPokemonAbilities(pokemonId: number) {
    return this.apiService.requestApi(`/pokemon/${pokemonId}/ability`)
      .then((response: Ability) => {
        this.abilities = response;
      });
  }
}
