import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CertificateService } from "../shared/services/certificate.service";

@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrls: ["./delete-modal.component.css"],
})
export class DeleteModalComponent implements OnInit {
  id: string = "";

  constructor(
    public deleteDialog: MatDialogRef<DeleteModalComponent>,
    private certApi: CertificateService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.id = this.data.id;
  }

  delete() {
    this.certApi
      .deleteCertificate(this.id)
      .subscribe((_) => console.log("deleted with succces"));
    this.deleteDialog.close();
  }

  close() {
    this.deleteDialog.close();
  }
}
