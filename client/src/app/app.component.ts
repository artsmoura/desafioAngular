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

  constructor() { }

  opened = false
}
