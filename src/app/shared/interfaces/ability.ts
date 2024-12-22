import {PokemonVariety} from "./pokemon-variety";

export interface Ability {
  id: number;
  abilityId: number;
  pokemon_variety_id: PokemonVariety;
  is_hidden: boolean;
  slot: number;
  created_at: string;
  updated_at: string;
}
