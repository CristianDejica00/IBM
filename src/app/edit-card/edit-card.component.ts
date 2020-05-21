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

  openDeleteModal(_id: string) {
    this.dialog.open(DeleteModalComponent, {
      data: {
        id: _id,
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
