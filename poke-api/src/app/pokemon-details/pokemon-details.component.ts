import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent  {

  pokemons: any[]= [];

  pokemonDataServise: PokeApiService;

  constructor(pokemonDataServise: PokeApiService){
    this.pokemonDataServise = pokemonDataServise
  }
 

}
