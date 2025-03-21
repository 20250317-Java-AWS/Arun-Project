import { Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [

    {path:'', component: NavbarComponent},

    {path: 'team' , component: TeamComponent},
    
    {path: 'details/:id', component: PokemonDetailsComponent}

];
