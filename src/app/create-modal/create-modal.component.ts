import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { CertificateService } from "../shared/services/certificate.service";
import { Certificate } from "../shared/models/certificate";

@Component({
  selector: "app-create-modal",
  templateUrl: "./create-modal.component.html",
  styleUrls: ["./create-modal.component.css"],
})
export class CreateModalComponent implements OnInit {
  newCert: Certificate = new Certificate();

  constructor(
    public createDialog: MatDialogRef<CreateModalComponent>,
    private certApi: CertificateService
  ) {}

  addCertificate() {
    console.log(this.newCert);
    this.certApi
      .addCertificate(this.newCert)
      .subscribe((_) => console.log("added new Certificate"));
    this.createDialog.close();
  }

  ngOnInit(): void {}

  close() {
    this.createDialog.close();
  }
}
