import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CreateModalComponent } from '../create-modal/create-modal.component';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  
  openCreateModal() {
    const createDialog = new MatDialogConfig;
    createDialog.disableClose = true;
    createDialog.autoFocus = true;
    this.dialog.open(CreateModalComponent, createDialog);
  }

}
