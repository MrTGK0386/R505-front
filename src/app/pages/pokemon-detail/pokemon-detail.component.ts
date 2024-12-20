import { Component } from '@angular/core';
import {Pokemon} from "../../shared/interfaces/pokemon";
import {ApiService} from "../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Type} from "../../shared/interfaces/type";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {

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
  getFirstType(){
    if (this.pokemon && this.pokemon.default_variety && this.pokemon.default_variety.types && this.pokemon.default_variety.types.length > 0){
      const index : number = this.pokemon.default_variety.types.length - 1;
      return this.pokemon.default_variety.types[index];
    }
    return null;
  }

  reorderTypes(array :Type[] | undefined): Type[] | undefined {
    if (array){
      return array.slice().reverse();
    }
    return;
  }

  getTypeName(typeColor :String | undefined): String | undefined {
    let typeName :String = "No Type";
    if (typeColor){
      switch (typeColor){

        case "#919AA2":
          typeName = "Normal";
          break

        case "#CE416B":
          typeName = "Fighting";
          break

        case "#89AAE3":
          typeName = "Fly";
          break

        case "#C699E5":
          typeName = "Poison";
          break

        case "#DB9E6E":
          typeName = "Ground";
          break

        case "#C5B78C":
          typeName = "Rock";
          break

        case "#95BD43":
          typeName = "Bug";
          break

        case "#5269AD":
          typeName = "Ghost";
          break

        case "#5A8EA2":
          typeName = "Steel";
          break

        case "#FF9D55":
          typeName = "Fire";
          break

        case "#71B1FF":
          typeName = "Water";
          break

        case "#9CDB8D":
          typeName = "Grass";
          break

        case "#F4D23C":
          typeName = "Elek";
          break

        case "#D76088":
          typeName = "Psy";
          break

        case "#73CEC0":
          typeName = "Ice";
          break

        case "#0B6DC3":
          typeName = "Dragon";
          break

        case "#7B6C8F":
          typeName = "Dark";
          break

        case "#FFA3E5":
          typeName = "Fairy";
          break
      }

    }
    return typeName;
  }


}
