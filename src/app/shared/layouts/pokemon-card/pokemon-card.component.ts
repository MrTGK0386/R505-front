import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent implements OnChanges {
  @Input() pokemon!: Pokemon;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log(this.pokemon);
  }

  getFirstType(){
    if (this.pokemon && this.pokemon.default_variety && this.pokemon.default_variety.types && this.pokemon.default_variety.types.length > 0){
      const index : number = this.pokemon.default_variety.types.length - 1;
      return this.pokemon.default_variety.types[index];
    }
    return null;
  }
}



