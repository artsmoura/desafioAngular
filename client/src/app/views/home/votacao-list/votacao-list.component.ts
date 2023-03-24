import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Votacao } from 'src/app/shared/model/votacao.model';
import { VotacaoService } from 'src/app/shared/service/votacao.service';
import { VotoDialogComponent } from '../voto-dialog/voto-dialog.component';

@Component({
  selector: 'app-votacao-list',
  templateUrl: './votacao-list.component.html',
  styleUrls: ['./votacao-list.component.css']
})
export class VotacaoListComponent implements OnInit {

  votacaoList: Votacao[];

  constructor(
    public votacaoService: VotacaoService,
    public dialog: MatDialog
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

  deleteVotacao(votacao: Votacao) {
    this.votacaoList = this.votacaoList.filter((e) => votacao.titulo !== e.titulo)
    this.votacaoService.deleteVotacao(votacao.id).subscribe()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VotoDialogComponent, {
      minWidth: '450px',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })

  }
}
