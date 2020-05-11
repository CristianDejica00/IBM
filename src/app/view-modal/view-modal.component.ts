import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent implements OnInit {

  constructor(public viewDialog:MatDialogRef<ViewModalComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.viewDialog.close();
  }

}
