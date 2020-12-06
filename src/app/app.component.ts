import { Component, OnInit} from '@angular/core';
import { Estado } from '../models/Estado'
import { Cidade } from '../models/Cidade'
import { EstadoService } from 'src/service/estado.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  imgPath = "/assets/sc.svg"
  estadoList: Estado[] ;
  estadoSelecionado:Estado  = new Estado(
    2,
    "Santa Catarina",
    10000
  )
  cidade:Cidade  = new  Cidade(1,"Tramandai" ,1000,1); 
  constructor(private estadoService:EstadoService){
    this.estadoList = estadoService.getEstados()
  }
  ngOnInit(): void {
    
  }

  onSelect(e:any) {
    const id =  e.target.value;
    
    console.log(id);
    if(id==2){
      this.imgPath = "/assets/sc.svg"
      // this.cidade.idEstado = id
    }else if (id==1){
      this.imgPath = "/assets/rs.png"
      // this.cidade.idEstado = id
    }else if(id==3){
      this.imgPath = "/assets/pr.svg"
      // this.cidade.idEstado = id
    }
  }
}
