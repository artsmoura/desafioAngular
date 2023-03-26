import { SelectionModel } from '@angular/cdk/collections';
import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/shared/model/usuario.model';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { VotacaoService } from 'src/app/shared/service/votacao.service';

export interface DialogData {
  id: number,
  titulo: string
}
@Component({
  selector: 'app-voto-dialog',
  templateUrl: './voto-dialog.component.html',
  styleUrls: ['./voto-dialog.component.css']
})
export class VotoDialogComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'nome', 'sobrenome', 'genero', 'cidade', 'estado'];
  dataSource = new MatTableDataSource<Usuario>();
  selection = new SelectionModel<Usuario>(true, []);
  title: string
  usuarioSelect: number

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private usuarioService: UsuarioService,
    public dialogRef: MatDialogRef<VotoDialogComponent>,
    private rest: VotacaoService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }


  ngAfterViewInit() {
    this.getUsuarios()
    this.dataSource.sort = this.sort;
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.dataSource.data = data
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  radiobuttonClick(row: Usuario) {
    this.usuarioSelect = row.id
  }

  computarVoto() {

    let params = {
      'votacao_id': this.data.id,
      'usuario_id': this.usuarioSelect
    }

    this.rest.computarVotacao(params).subscribe()
    this.onClose()
  }

  onClose(): void {
    this.dialogRef.close()
  }
}
