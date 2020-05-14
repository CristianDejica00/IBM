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

  openDeleteModal(_id: string) {
    this.dialog.open(DeleteModalComponent, {
      data: {
        id: _id,
      },
    });
  }

  openEditCertModal(_id: string, _cert: Certificate) {
    this.dialog.open(EditCertModalComponent, {
      data: {
        id: _id,
        cert: _cert,
      },
    });
  }
}
