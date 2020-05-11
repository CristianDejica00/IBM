import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-export-modal',
  templateUrl: './export-modal.component.html',
  styleUrls: ['./export-modal.component.css']
})
export class ExportModalComponent implements OnInit {

  constructor(public exportDialog:MatDialogRef<ExportModalComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.exportDialog.close();
  }

}
