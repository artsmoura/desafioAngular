import { AfterViewInit, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Votos } from 'src/app/shared/model/votos.model';
import { VotacaoService } from 'src/app/shared/service/votacao.service';

export interface DialogData {
  id: number,
  titulo: string
}

export interface Resultado {
  nome: string,
  sobrenome: string
}

@Component({
  selector: 'app-resultado-dialog',
  templateUrl: './resultado-dialog.component.html',
  styleUrls: ['./resultado-dialog.component.css']
})
export class ResultadoDialogComponent implements AfterViewInit {

  votosList: Resultado[];
  n: number;
  contagem: Resultado;
  resultado: string;

  constructor(
    public dialogRef: MatDialogRef<ResultadoDialogComponent>,
    private votacaoService: VotacaoService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngAfterViewInit(): void {
    this.getResultado(this.data.id)
  }

  getResultado(id: number) {
    this.votacaoService.getResultado(id).subscribe(data => {
      this.votosList = data
      this.n = this.votosList.length
      this.contagem = maxFreq(data, this.n)
      this.resultado = this.contagem.nome + ' ' + this.contagem.sobrenome
    })
  }

}

function maxFreq(arr: [], n: number) {
  var res = 0;
  var count = 1;

  for (var i = 1; i < n; i++) {
    if (arr[i] === arr[res]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      res = i;
      count = 1;
    }
  }
  return arr[res];

}
