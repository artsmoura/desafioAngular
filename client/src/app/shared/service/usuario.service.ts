import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl = 'http://localhost:8900/usuario'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUsuario(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.apiUrl)
  }

  public postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.apiUrl, usuario, this.httpOptions)
  }

  public deleteUsuario(id: number) {
    return this.httpClient.delete<Usuario>(`${this.apiUrl}/${id}`)
  }
}
