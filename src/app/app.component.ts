import { Component, OnInit } from '@angular/core';
import { Estado } from '../models/Estado'
import { Cidade } from '../models/Cidade'
import { EstadoService } from 'src/service/estado.service';
import { CidadeService } from '../service/cidade.service'
import { FormGroup, FormControl, NgForm, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  id = 2;
  imgPath = "/assets/sc.svg"
  cidadeList: Cidade[];
  estadoList: Estado[];
  estadoSelecionado: Estado = new Estado(
    2,
    "Santa Catarina",
    10000
  )
  public cadSucesso:boolean = false
  cidade: Cidade = new Cidade("", 1000, 1);
  form1: FormGroup;

  constructor(private alertConfig: NgbAlertConfig,private estadoService: EstadoService, fb: FormBuilder, private cidadeService: CidadeService) {
    this.estadoList = estadoService.getEstados()
    this.form1 = fb.group({
      nome: new FormControl(''),
      populacao: new FormControl('')
    });
    this.alertConfig.dismissible=true
    
  }
  async ngOnInit() {
    this.cidadeList = await this.cidadeService.getCidadeByEstado(this.estadoSelecionado).toPromise();
  }

  async onSelect(e: any) {
    const id = e.target.value;
    this.id = id;
    console.log(id);
    this.estadoSelecionado.id=id;
    if (this.id == 2) {
      this.imgPath = "/assets/sc.svg"
      // this.cidade.idEstado = id
    } else if (this.id == 1) {
      this.imgPath = "/assets/rs.png"
      // this.cidade.idEstado = id
    } else if (this.id == 3) {
      this.imgPath = "/assets/pr.svg"
      // this.cidade.idEstado = id
    }
    this.cidadeList = await this.cidadeService.getCidadeByEstado(this.estadoSelecionado).toPromise();
  }

  async doSave(form1: NgForm) {
    this.cidade.idEstado = this.id; 
    await this.cidadeService.postCidade(this.cidade).toPromise();
    this.cidade.nome = ''
    this.cidade.populacao = 0;
    this.cidadeList = await this.cidadeService.getCidadeByEstado(this.estadoSelecionado).toPromise();
    this.alertConfig.type = 'success';
    this.alertConfig.dismissible = false;  
    this.cadSucesso = true
    await this.delay(3000);
    this.cadSucesso = false
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
