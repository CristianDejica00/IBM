import { Component, OnInit, Input } from "@angular/core";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { ApplyModalComponent } from "../apply-modal/apply-modal.component";
import { Certificate } from "../shared/models/certificate";
import { User } from "../shared/models/user";

@Component({
  selector: "app-apply-card",
  templateUrl: "./apply-card.component.html",
  styleUrls: ["./apply-card.component.css"],
})
export class ApplyCardComponent implements OnInit {
  @Input() cert: Certificate = {
    id: "",
    title: "",
    quarter: "",
    category: "",
    cost: null,
    description: "",
  };

  @Input() user: User = {
    id: "",
    email: "",
    name: "",
    password: "",
    role: "",
  };

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openApplyModal(_title: string, _userId: string, _certId: string) {
    this.dialog.open(ApplyModalComponent, {
      data: {
        title: _title,
        userId: _userId,
        certId: _certId,
      },
    });
  }
}
