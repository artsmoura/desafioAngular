import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { VotacaoService } from 'src/app/shared/service/votacao.service';

@Component({
  selector: 'app-votacao-form-dialog',
  templateUrl: './votacao-form-dialog.component.html',
  styleUrls: ['./votacao-form-dialog.component.css']
})
export class VotacaoFormDialogComponent implements OnInit {

  public votacaoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: VotacaoService,
    public dialogRef: MatDialogRef<VotacaoFormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.votacaoForm = this.fb.group({
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
    });
  }

  createVotacao() {
    this.rest.postVotacao(this.votacaoForm.value).subscribe(result => { })
    this.dialogRef.close()
    this.votacaoForm.reset()
  }

  onClose(): void {
    this.dialogRef.close()
    this.votacaoForm.reset()
  }

}
