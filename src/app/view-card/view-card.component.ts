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

  openViewModal(_id: string, _req: Request) {
    this.dialog.open(ViewModalComponent, {
      data: {
        id: _id,
        req: _req,
      },
    });
  }

  openEditReqModal(_id: string, _req: Request) {
    this.dialog.open(EditReqModalComponent, {
      data: {
        id: _id,
        req: _req,
      },
    });
  }
}
