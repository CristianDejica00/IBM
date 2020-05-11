import { Component, OnInit } from '@angular/core';
import { AvatarModalComponent } from '../avatar-modal/avatar-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  
  openAvatarModal() {
    const avatarDialog = new MatDialogConfig;
    avatarDialog.disableClose = true;
    avatarDialog.autoFocus = true;
    this.dialog.open(AvatarModalComponent, avatarDialog);
  }

}
