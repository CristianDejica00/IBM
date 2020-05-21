import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RequestService } from "../shared/services/request.service";
import { Request } from "../shared/models/request";

@Component({
  selector: "app-apply-modal",
  templateUrl: "./apply-modal.component.html",
  styleUrls: ["./apply-modal.component.css"],
})
export class ApplyModalComponent implements OnInit {
  title: string;
  userId: string;
  certId: string;

  newReq: Request = new Request();

  constructor(
    private reqApi: RequestService,
    public applyDialog: MatDialogRef<ApplyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
    this.userId = this.data.userId;
    this.certId = this.data.certId;
  }

  addRequest() {
    this.reqApi
      .addRequest(this.newReq, this.userId, this.certId)
      .subscribe((_) => console.log("added new request"));
    this.applyDialog.close();
  }

  close() {
    this.applyDialog.close();
  }
}
