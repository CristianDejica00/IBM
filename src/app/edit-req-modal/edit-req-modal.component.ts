import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-req-modal',
  templateUrl: './edit-req-modal.component.html',
  styleUrls: ['./edit-req-modal.component.css']
})
export class EditReqModalComponent implements OnInit {

  constructor(public editReqDialog:MatDialogRef<EditReqModalComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.editReqDialog.close();
  }

}
