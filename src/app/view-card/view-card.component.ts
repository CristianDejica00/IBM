import { Component, OnInit, Input } from "@angular/core";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { ViewModalComponent } from "../view-modal/view-modal.component";
import { EditReqModalComponent } from "../edit-req-modal/edit-req-modal.component";
import { Request } from "../shared/models/request";

@Component({
  selector: "app-view-card",
  templateUrl: "./view-card.component.html",
  styleUrls: ["./view-card.component.css"],
})
export class ViewCardComponent implements OnInit {
  @Input() req: Request = {
    id: "",
    price: null,
    userName: "",
    certificationTitle: "",
    status: "",
    certificateQuarter: "",
    justificationText: "",
  };
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openViewModal() {
    const viewDialog = new MatDialogConfig();
    viewDialog.disableClose = true;
    viewDialog.autoFocus = true;
    this.dialog.open(ViewModalComponent, viewDialog);
  }

  openEditReqModal() {
    const editReqDialog = new MatDialogConfig();
    editReqDialog.disableClose = true;
    editReqDialog.autoFocus = true;
    this.dialog.open(EditReqModalComponent, editReqDialog);
  }
}
