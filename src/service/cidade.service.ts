import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cidade } from '../models/Cidade'
import { Estado } from '../models/Estado';
@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  url: string = 'http://localhost:8080';
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  postCidade(cidade: Cidade): Observable<Cidade> {
    return this.http.post<Cidade>(this.url + '/api/cidade/create/', JSON.stringify(cidade), this.httpOptions)
      .pipe(

      )
  }
  getCidade(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.url + '/api/cidade/findAll');
  }
  getCidadeByEstado(estado:Estado): Observable<Cidade[]> {
    return this.http.post<Cidade[]>(this.url + '/api/cidade/findByEstado', JSON.stringify(estado), this.httpOptions);
  }
}
