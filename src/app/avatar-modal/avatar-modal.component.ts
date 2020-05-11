import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-avatar-modal',
  templateUrl: './avatar-modal.component.html',
  styleUrls: ['./avatar-modal.component.css']
})
export class AvatarModalComponent implements OnInit {

  constructor(public avatarDialog:MatDialogRef<AvatarModalComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.avatarDialog.close();
  }

}
