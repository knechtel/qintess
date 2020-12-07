import { Injectable } from '@angular/core';
import { Estado } from '../models/Estado'
import { CustoPopulacional } from '../models/CustoPopulacional'
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  url: string = 'http://localhost:8080';
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getCustoPopulacional(custoPopulacional:CustoPopulacional){
    return this.http.post<CustoPopulacional>(this.url + '/api/estado/getValor', JSON.stringify(custoPopulacional), this.httpOptions);
  }

  getEstados():Estado[]{
    return  [new Estado(
        1,
        'Rio grande do Sul',
        10000
    ),
    new Estado(
      2,
      "Santa Catarina",
      10000
  ),
  new Estado(
    3,
    "Paraná",
    10000
  )
     ]
    }
}
