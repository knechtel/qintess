import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Cidade } from 'src/models/Cidade';
import { CidadeService } from 'src/service/cidade.service';
@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {
  cidade: Cidade = new Cidade("", 1000, 1);
  cidadeList: Cidade[];
  constructor(private route: ActivatedRoute,  
    private router: Router,
    private cidadeService:CidadeService) { }

  async ngOnInit() {
    const id =Number(this.route.snapshot.paramMap.get('id'));
    this.cidadeList = await this.cidadeService.getCidade().toPromise();
    this.cidade=this.cidadeList.find(cidade => cidade.id === id)!;
    
  }

}
