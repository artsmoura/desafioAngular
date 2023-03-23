import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Votacao } from '../model/votacao.model';

@Injectable({
  providedIn: 'root'
})
export class VotacaoService {

  apiUrl = 'http://localhost:8900/votacao'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getVotacao(): Observable<Votacao[]> {
    return this.httpClient.get<Votacao[]>(this.apiUrl)
  }
}
