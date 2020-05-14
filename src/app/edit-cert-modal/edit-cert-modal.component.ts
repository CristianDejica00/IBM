import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CertificateService } from "../shared/services/certificate.service";
import { Certificate } from "../shared/models/certificate";

@Component({
  selector: "app-edit-cert-modal",
  templateUrl: "./edit-cert-modal.component.html",
  styleUrls: ["./edit-cert-modal.component.css"],
})
export class EditCertModalComponent implements OnInit {
  id: string = "";
  editCert: Certificate = new Certificate();
  constructor(
    public editCertDialog: MatDialogRef<EditCertModalComponent>,
    private certApi: CertificateService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.id = this.data.id;
    this.editCert = this.data.cert;
  }

  editCertificate() {
    this.certApi
      .updateCertificate(this.id, this.editCert)
      .subscribe((_) => console.log("edited with success"));
  }

  close() {
    this.editCertDialog.close();
  }
}
