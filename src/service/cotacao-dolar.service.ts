import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CotacaoDTO } from '../models/CotacaoDTO';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CotacaoDolarService {
  url: string = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http:HttpClient) { }
   getCotacao(): Observable<CotacaoDTO> {
    return   this.http.post<CotacaoDTO>(this.url + '/api/moeda/getCotacao',  this.httpOptions);
  }
}
