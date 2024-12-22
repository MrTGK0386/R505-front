import { Component } from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Type} from "../../interfaces/type";

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrl: './description-card.component.scss'
})
export class DescriptionCardComponent {
  pokemon!: Pokemon;

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

}
