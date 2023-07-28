import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesApiMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  obtenerTodosLosPersonajes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/character`);
  }

  obtenerDatosSiguientePagina(paginaUrl: string): Observable<any> {
    return this.http.get<any>(paginaUrl);
  }

  obtenerUnPersonaje(id:string): Observable<any>{
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }

  obtenerLosEspisodios(episodioURL:string):Observable<any>{
    return this.http.get<any>(`${episodioURL}`);
  }
}
