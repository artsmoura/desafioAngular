import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/shared/model/usuario.model';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
  selector: 'app-usuario-form-dialog',
  templateUrl: './usuario-form-dialog.component.html',
  styleUrls: ['./usuario-form-dialog.component.css']
})
export class UsuarioFormDialogComponent implements OnInit {
  public usuarioForm: FormGroup;
  usuario: any = {};
  tipoModal: string
  generos: any[] = [
    { value: 0, viewValue: 'Feminino' },
    { value: 1, viewValue: 'Masculino' },
  ];

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    public dialogRef: MatDialogRef<UsuarioFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) { }

  ngOnInit(): void {
    if (this.data !== null) {
      this.usuarioService.getUsuario(this.data.id).subscribe(res => {
        this.usuario = res[0]
        this.updateForm(this.usuario)
      })
      this.tipoModal = 'editar'
    } else {
      this.tipoModal = 'criar'
    }

    this.usuarioForm = this.fb.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    })
  }

  updateForm(usuario: Usuario) {
    this.usuarioForm.patchValue({
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      genero: usuario.genero,
      cidade: usuario.cidade,
      estado: usuario.estado
    })
  }

  createUsuario() {
    this.usuarioService.postUsuario(this.usuarioForm.value).subscribe();
    this.dialogRef.close()
    this.usuarioForm.reset()
    this.refresh()
  }

  updateUsuario() {
    this.usuarioService.updateUsuario(this.usuario.id, this.usuarioForm.value).subscribe()
    this.dialogRef.close()
    this.usuarioForm.reset()
    this.refresh()
  }

  onClose(): void {
    this.dialogRef.close()
    this.usuarioForm.reset()
  }

  refresh(): void {
    window.location.reload();
  }

}
