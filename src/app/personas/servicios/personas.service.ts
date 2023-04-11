import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/personas.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private apiUrl:string='https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  listaPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiUrl);
  }
}
