import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService{

  base_url = 'https://pokeapi.co/api/v2/pokemon';

  client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client
   }

  getData(): Observable<object> {
    return this.client.get(this.base_url + "?limit=10");
  }

  getDetails(name: string){
    return this.client.get(this.base_url + "/" + name);
  }
}
