import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/shared/model/usuario.model';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { UsuarioFormDialogComponent } from '../usuario-form-dialog/usuario-form-dialog.component';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarioList: Usuario[];

  constructor(
    public usuarioService: UsuarioService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['nome', 'sobrenome', 'genero', 'cidade', 'estado'];
  dataSource = new MatTableDataSource<Usuario>();

  ngOnInit(): void {
    this.getUsuarios()
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.dataSource.data = data
    })
  }

  openCriaUsuario(): void {
    const dialogRef = this.dialog.open(UsuarioFormDialogComponent, {
      minWidth: '450px',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })

  }

  getUsuario(id: number) {
    this.usuarioService.getUsuario(id).subscribe(data => {
      this.dataSource.data = data
    })
  }

  clickRow(usuarioClick: Usuario) {
    const dialogRef = this.dialog.open(UsuarioFormDialogComponent, {
      minWidth: '450px',
      data: usuarioClick
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

}
