import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-modal',
  templateUrl: './apply-modal.component.html',
  styleUrls: ['./apply-modal.component.css']
})
export class ApplyModalComponent implements OnInit {

  constructor(public applyDialog:MatDialogRef<ApplyModalComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.applyDialog.close();
  }

}
