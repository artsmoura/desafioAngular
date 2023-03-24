import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VotacaoFormDialogComponent } from './views/home/votacao-form-dialog/votacao-form-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(VotacaoFormDialogComponent, {
      minWidth: '450px',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })

  }

  opened = false
}
