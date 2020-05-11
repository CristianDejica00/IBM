import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-cert-modal',
  templateUrl: './edit-cert-modal.component.html',
  styleUrls: ['./edit-cert-modal.component.css']
})
export class EditCertModalComponent implements OnInit {

  constructor(public editCertDialog:MatDialogRef<EditCertModalComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.editCertDialog.close();
  }

}
