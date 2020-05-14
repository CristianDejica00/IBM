import { Component, OnInit, Input } from "@angular/core";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { EditReqModalComponent } from "../edit-req-modal/edit-req-modal.component";
import { DeleteModalComponent } from "../delete-modal/delete-modal.component";
import { Request } from "../shared/models/request";

@Component({
  selector: "app-edit-card",
  templateUrl: "./edit-card.component.html",
  styleUrls: ["./edit-card.component.css"],
})
export class EditCardComponent implements OnInit {
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

  openDeleteModal() {
    const deleteDialog = new MatDialogConfig();
    deleteDialog.disableClose = true;
    deleteDialog.autoFocus = true;
    this.dialog.open(DeleteModalComponent, deleteDialog);
  }

  openEditReqModal() {
    const editReqDialog = new MatDialogConfig();
    editReqDialog.disableClose = true;
    editReqDialog.autoFocus = true;
    this.dialog.open(EditReqModalComponent, editReqDialog);
  }
}
