import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Request } from "../shared/models/request";
import { RequestService } from "../shared/services/request.service";

@Component({
  selector: "app-edit-req-modal",
  templateUrl: "./edit-req-modal.component.html",
  styleUrls: ["./edit-req-modal.component.css"],
})
export class EditReqModalComponent implements OnInit {
  id: string = "";
  editReq: Request = new Request();

  constructor(
    public editReqDialog: MatDialogRef<EditReqModalComponent>,
    private reqApi: RequestService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.id = this.data.id;
    this.editReq = this.data.req;
  }

  editRequest() {
    this.reqApi
      .updateRequest(this.id, this.editReq)
      .subscribe((_) => console.log("edited with success"));
    this.editReqDialog.close();
  }

  close() {
    this.editReqDialog.close();
  }
}
