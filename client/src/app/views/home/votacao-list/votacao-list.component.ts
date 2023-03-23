import { Component, OnInit } from '@angular/core';
import { Votacao } from 'src/app/shared/model/votacao.model';
import { VotacaoService } from 'src/app/shared/service/votacao.service';

@Component({
  selector: 'app-votacao-list',
  templateUrl: './votacao-list.component.html',
  styleUrls: ['./votacao-list.component.css']
})
export class VotacaoListComponent implements OnInit {

  votacaoList: Votacao[];

  constructor(
    public votacaoService: VotacaoService
  ) { }

  ngOnInit(): void {
    this.getVotacao();
  }

  getVotacao() {
    this.votacaoService.getVotacao().subscribe(data => {
      this.votacaoList = data
    }
    )
  }

}
