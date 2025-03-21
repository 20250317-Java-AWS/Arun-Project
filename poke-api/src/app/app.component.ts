import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PokeApiService } from './poke-api.service';
import { NavbarComponent } from "./navbar/navbar.component";
import { TeamComponent } from "./team/team.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  title = 'poke-api'


}
