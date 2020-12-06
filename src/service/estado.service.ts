import { Injectable } from '@angular/core';
import { Estado } from '../models/Estado'
@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }


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
