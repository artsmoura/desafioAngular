import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Votacao } from '../model/votacao.model';
import { Votos } from '../model/votos.model';

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

  public getVotacoes(): Observable<Votacao[]> {
    return this.httpClient.get<Votacao[]>(this.apiUrl)
  }

  public postVotacao(votacao: any): Observable<Votacao> {
    return this.httpClient.post<any>(this.apiUrl, votacao, this.httpOptions);
  }

  public deleteVotacao(id: number) {
    return this.httpClient.delete<Votacao>(`${this.apiUrl}/${id}`)
  }

  public computarVotacao(voto: Votos) {
    return this.httpClient.post<Votos>(`${this.apiUrl}/vote`, voto, this.httpOptions)
  }

  public getResultado(id: number) {
    return this.httpClient.get<any>(`${this.apiUrl}/results/${id}`)
  }

  public getVotacao(id: number): Observable<Votacao[]> {
    return this.httpClient.get<Votacao[]>(`${this.apiUrl}/${id}`)
  }

  public updateVotacao(id: number, votacao: Votacao): Observable<Votacao[]> {
    return this.httpClient.put<Votacao[]>(`${this.apiUrl}/${id}`, votacao)
  }

}
