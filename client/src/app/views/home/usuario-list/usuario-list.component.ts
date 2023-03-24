import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/shared/model/usuario.model';
import { UsuarioService } from 'src/app/shared/service/usuario.service';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarioList: Usuario[];

  constructor(
    public usuarioService: UsuarioService
  ) { }

  displayedColumns: string[] = ['nome', 'sobrenome', 'genero', 'cidade', 'estado'];
  dataSource = new MatTableDataSource<Usuario>();
  clickedRows = new Set<Usuario>();

  ngOnInit(): void {
    this.getUsuario()
  }

  getUsuario() {
    this.usuarioService.getUsuario().subscribe(data => {
      this.dataSource.data = data
    })
  }
}
