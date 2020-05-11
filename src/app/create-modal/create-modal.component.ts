import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  constructor(public createDialog:MatDialogRef<CreateModalComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.createDialog.close();
  }

}
