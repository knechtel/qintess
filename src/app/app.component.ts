import { Component, OnInit } from '@angular/core';
import { Estado } from '../models/Estado'
import { Cidade } from '../models/Cidade'
import { EstadoService } from 'src/service/estado.service';
import { CidadeService } from '../service/cidade.service'
import { FormGroup, FormControl, NgForm, ReactiveFormsModule, FormBuilder } from '@angular/forms';


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
  cidade: Cidade = new Cidade("Tramandai", 1000, 1);
  form1: FormGroup;

  constructor(private estadoService: EstadoService, fb: FormBuilder, private cidadeService: CidadeService) {
    this.estadoList = estadoService.getEstados()
    this.form1 = fb.group({
      nome: new FormControl(''),
      populacao: new FormControl('')
    });

  }
  ngOnInit(): void {
    this.cidadeService.getCidade().subscribe(res => {
      this.cidadeList = res;
    })
  }
  onSelect(e: any) {
    const id = e.target.value;
    this.id = id;
    console.log(id);
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
  }

  async doSave(form1: NgForm) {
    this.cidade.idEstado = this.id
    console.log("populacao - >" + this.cidade.populacao)
    await this.cidadeService.postCidade(this.cidade).toPromise();
    console.log("mandei")
  }
}
