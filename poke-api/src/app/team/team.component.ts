import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit{

  pokemons: any[]= [];

  pokeApiService: PokeApiService;

  constructor(pokeApiService: PokeApiService){
  this.pokeApiService = pokeApiService;

}
  ngOnInit(): void {
    
    this.pokeApiService.getData()
    .subscribe((response:any) =>{
      response.results.forEach((result: any)=>{
        this.pokeApiService.getDetails(result.name)
        .subscribe((DetailResponse:any)=>{
          this.pokemons.push(DetailResponse);
          console.log(this.pokemons);
        })
      })
    })
  }
  

}
