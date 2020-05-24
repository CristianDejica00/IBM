import { Component, OnInit, Inject } from "@angular/core";
import { HomeComponent } from "../home/home.component";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RequestService } from "../shared/services/request.service";
import { Request } from "../shared/models/request";

@Component({
  selector: "app-view-modal",
  templateUrl: "./view-modal.component.html",
  styleUrls: ["./view-modal.component.css"],
})
export class ViewModalComponent implements OnInit {
  id: string = "";
  editReq: Request = new Request();

  constructor(
    public viewDialog: MatDialogRef<ViewModalComponent>,
    private reqApi: RequestService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.id = this.data.id;
    this.editReq = this.data.req;
  }

  changeStatus(status: string) {
    this.reqApi
      .changeStatus(this.id, this.editReq, status)
      .subscribe((_) => console.log("rejected request"));
    this.viewDialog.close();
  }

  close() {
    this.viewDialog.close();
  }
}
