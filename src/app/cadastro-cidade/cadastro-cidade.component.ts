import { Component, OnInit } from '@angular/core';
import { Estado } from '../../models/Estado';
import { Cidade } from '../../models/Cidade';
import { CustoPopulacional } from '../../models/CustoPopulacional';
import { EstadoService } from 'src/service/estado.service';
import { CidadeService } from '../../service/cidade.service';
import { CotacaoDolarService } from '../../service/cotacao-dolar.service'
import { FormGroup, FormControl, NgForm, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CotacaoDTO } from 'src/models/CotacaoDTO';
@Component({
  selector: 'app-root',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent implements OnInit {
  id = 2;
  imgPath = "/assets/sc.svg"
  cidadeList!: Cidade[];
  estadoList: Estado[];
  cotacaoDolar!:CotacaoDTO;
  estadoSelecionado: Estado = new Estado(
    2,
    "Santa Catarina",
    10000
  )
  custoPopulacional: CustoPopulacional = new CustoPopulacional(2,1.00);
  public cadSucesso:boolean = false
  public cadRepitido:boolean = false
  cidade: Cidade = new Cidade("", 1000, 1);
  form1: FormGroup;

  constructor(private router: Router,
              private alertConfig: NgbAlertConfig,
              private estadoService: EstadoService, 
              fb: FormBuilder, 
              private cidadeService: CidadeService,
              private cotacaoDolarService:CotacaoDolarService) {
    this.estadoList = estadoService.getEstados()
    this.form1 = fb.group({
      nome: new FormControl(''),
      populacao: new FormControl('')
    });
    this.alertConfig.dismissible=true
    
  }
  async ngOnInit() {
    this.cotacaoDolar = await this.cotacaoDolarService.getCotacao().toPromise();
    this.cidadeList = await this.cidadeService.getCidadeByEstado(this.estadoSelecionado).toPromise();
    this.custoPopulacional = await this.estadoService.getCustoPopulacional(this.custoPopulacional).toPromise();
    this.custoPopulacional.custo = this.custoPopulacional.custo*this.cotacaoDolar.real;
  }

  async onSelect(e: any) {
    const id = e.target.value;
    this.id = id;
    console.log(id);
    this.estadoSelecionado.id = id;
    this.custoPopulacional.idEstado = id
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
    this.custoPopulacional = await this.estadoService.getCustoPopulacional(this.custoPopulacional).toPromise();
  }

  async doSave(form1: NgForm) {
    window.scroll(0,0);
    this.cidade.idEstado = this.id; 
    this.cidade = await this.cidadeService.postCidade(this.cidade).toPromise();
  
    this.cidadeList = await this.cidadeService.getCidadeByEstado(this.estadoSelecionado).toPromise();
    this.alertConfig.type = 'success';
    this.alertConfig.dismissible = false;  
    if(this.cidade.id==null){
      this.cadRepitido = true
      await this.delay(9000);
      this.cadRepitido = false
    }else{
      this.cadSucesso = true
      await this.delay(8000);
      this.cadSucesso = false
      this.cidade.nome = ''
      this.cidade.populacao = 0;
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
