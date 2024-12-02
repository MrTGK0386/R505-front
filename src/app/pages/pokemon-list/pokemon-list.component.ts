import { Component } from '@angular/core';
import {ApiService} from "../../shared/services/api.service";
import {Paginate} from "../../shared/interfaces/paginate";
import {Pokemon} from "../../shared/interfaces/pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  pokemonList?: Paginate<Pokemon>;
  pageNumber: number = 1;
  allPokemonLoaded: boolean = false;

  constructor(public apiService: ApiService, ) {  }

  ngOnInit() {
    this.loadPokemonPage(this.pageNumber);
  }

  // Fonction pour charger la page suivante des pokemons
  loadPokemonPage(page: number) {
    // On crée le numéro de la page à charger
    if (this.pokemonList){
      page = this.pokemonList.current_page + 1;
    }

    // On charge la page si elle n'existe pas ou si on n'a pas atteint la dernière
    if (!this.pokemonList || page <= this.pokemonList.last_page) {
      this.apiService.requestApi('/pokemon', 'GET', {page: page}).then((pokemons: Paginate<Pokemon>) => {
        // On ajoute les pokemons à la liste
        if (!this.pokemonList){
          this.pokemonList = pokemons;
        }else{
          let datas = this.pokemonList.data.concat(pokemons.data);
          this.pokemonList = {...pokemons, data: datas};
        }
      });
    }
  }

  loadNewPokemonPage(){
    console.log("Chargement de la prochaine page");
    console.log(this.pageNumber);
    this.loadPokemonPage(this.pageNumber);
  }

}
