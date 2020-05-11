import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ExportModalComponent } from '../export-modal/export-modal.component';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  
  openExportModal() {
    const exportDialog = new MatDialogConfig;
    exportDialog.disableClose = true;
    exportDialog.autoFocus = true;
    this.dialog.open(ExportModalComponent, exportDialog);
  }


}
