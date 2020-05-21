import { Component, OnInit, Input } from "@angular/core";
import { AvatarModalComponent } from "../avatar-modal/avatar-modal.component";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { User } from "../shared/models/user";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.css"],
})
export class AvatarComponent implements OnInit {
  @Input() user: User = {
    id: "",
    email: "",
    name: "",
    password: "",
    role: "",
  };

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openAvatarModal() {
    const avatarDialog = new MatDialogConfig();
    avatarDialog.disableClose = true;
    avatarDialog.autoFocus = true;
    this.dialog.open(AvatarModalComponent, avatarDialog);
  }
}
