import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Votacao } from 'src/app/shared/model/votacao.model';
import { VotacaoService } from 'src/app/shared/service/votacao.service';

@Component({
  selector: 'app-votacao-form-dialog',
  templateUrl: './votacao-form-dialog.component.html',
  styleUrls: ['./votacao-form-dialog.component.css']
})
export class VotacaoFormDialogComponent implements OnInit {

  public votacaoForm: FormGroup;
  votacao: any = {};
  tipoModal: string

  constructor(
    private fb: FormBuilder,
    private votacaoService: VotacaoService,
    public dialogRef: MatDialogRef<VotacaoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Votacao
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    if (this.data !== null) {
      this.votacaoService.getVotacao(this.data.id).subscribe(res => {
        console.log(res);
        this.votacao = res[0]
        this.updateForm(this.votacao)
      })
      this.tipoModal = 'editar'
    } else {
      this.tipoModal = 'criar'
    }

    this.votacaoForm = this.fb.group({
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
    });
  }

  updateForm(votacao: Votacao) {
    this.votacaoForm.patchValue({
      titulo: votacao.titulo,
      descricao: votacao.descricao
    })
  }

  createVotacao() {
    this.votacaoService.postVotacao(this.votacaoForm.value).subscribe(result => { })
    this.dialogRef.close()
    this.votacaoForm.reset()
    this.refresh()
  }

  updateVotacao() {
    this.votacaoService.updateVotacao(this.votacao.id, this.votacaoForm.value).subscribe()
    this.dialogRef.close()
    this.votacaoForm.reset()
    this.refresh()
  }



  onClose(): void {
    this.dialogRef.close()
    this.votacaoForm.reset()
  }

  refresh(): void {
    window.location.reload();
  }

}
