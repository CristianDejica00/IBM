import { Component, OnInit, Input } from "@angular/core";
import { AvatarModalComponent } from "../avatar-modal/avatar-modal.component";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.css"],
})
export class AvatarComponent implements OnInit {
  navRole: string;

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.navRole = this.router.url;
  }

  openAvatarModal() {
    const avatarDialog = new MatDialogConfig();
    avatarDialog.disableClose = true;
    avatarDialog.autoFocus = true;
    this.dialog.open(AvatarModalComponent, avatarDialog);
  }
}
