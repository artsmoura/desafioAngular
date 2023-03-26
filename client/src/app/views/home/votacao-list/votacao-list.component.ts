import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Votacao } from 'src/app/shared/model/votacao.model';
import { VotacaoService } from 'src/app/shared/service/votacao.service';
import { ResultadoDialogComponent } from '../resultado-dialog/resultado-dialog.component';
import { VotacaoFormDialogComponent } from '../votacao-form-dialog/votacao-form-dialog.component';
import { VotoDialogComponent } from '../voto-dialog/voto-dialog.component';

@Component({
  selector: 'app-votacao-list',
  templateUrl: './votacao-list.component.html',
  styleUrls: ['./votacao-list.component.css']
})
export class VotacaoListComponent implements OnInit {

  votacaoList: Votacao[];
  panelOpenState = false;
  hasVotacao = false;

  constructor(
    public votacaoService: VotacaoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getVotacoes();
  }

  getVotacoes() {
    this.votacaoService.getVotacoes().subscribe(data => {
      this.votacaoList = data
      if (this.votacaoList.length > 0) {
        this.hasVotacao = true
      }
    }
    )
  }

  deleteVotacao(votacao: Votacao) {
    this.votacaoList = this.votacaoList.filter((e) => votacao.titulo !== e.titulo)
    this.votacaoService.deleteVotacao(votacao.id).subscribe()
    this.refresh()
  }

  openDialog(votacao: Votacao): void {

    const dialogRef = this.dialog.open(VotoDialogComponent, {
      width: 'calc(100vh - 30px)',
      data: {
        id: votacao.id,
        titulo: votacao.titulo
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })

  }

  openCriaVoto(): void {
    const dialogRef = this.dialog.open(VotacaoFormDialogComponent, {
      minWidth: '450px',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })

  }

  openVerResultado(votacao: Votacao): void {
    const dialogRef = this.dialog.open(ResultadoDialogComponent, {
      minWidth: '450px',
      data: {
        id: votacao.id,
        titulo: votacao.titulo
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })

  }

  editarVotacao(votacao: Votacao) {
    const dialogRef = this.dialog.open(VotacaoFormDialogComponent, {
      minWidth: '450px',
      data: {
        id: votacao.id
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

  refresh(): void {
    window.location.reload();
  }

}
