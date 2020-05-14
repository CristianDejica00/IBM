import { Component, OnInit, Input } from "@angular/core";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { DeleteModalComponent } from "../delete-modal/delete-modal.component";
import { EditCertModalComponent } from "../edit-cert-modal/edit-cert-modal.component";
import { Certificate } from "../shared/models/certificate";

@Component({
  selector: "app-cert-card",
  templateUrl: "./cert-card.component.html",
  styleUrls: ["./cert-card.component.css"],
})
export class CertCardComponent implements OnInit {
  @Input() cert: Certificate = {
    id: "",
    title: "",
    quarter: "",
    category: "",
    cost: null,
    description: "",
  };

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDeleteModal() {
    const deleteDialog = new MatDialogConfig();
    deleteDialog.disableClose = true;
    deleteDialog.autoFocus = true;
    this.dialog.open(DeleteModalComponent, deleteDialog);
  }

  openEditCertModal() {
    const editCertDialog = new MatDialogConfig();
    editCertDialog.disableClose = true;
    editCertDialog.autoFocus = true;
    this.dialog.open(EditCertModalComponent, editCertDialog);
  }
}
