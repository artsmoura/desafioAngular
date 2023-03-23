import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VotacaoFormDialogComponent } from './votacao-form-dialog/votacao-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(VotacaoFormDialogComponent, {
      width: '250px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })

  }
}
