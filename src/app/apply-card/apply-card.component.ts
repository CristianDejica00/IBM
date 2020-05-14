import { Component, OnInit, Input } from "@angular/core";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { ApplyModalComponent } from "../apply-modal/apply-modal.component";
import { Certificate } from "../shared/models/certificate";

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

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openApplyModal(_title: string) {
    this.dialog.open(ApplyModalComponent, {
      data: {
        title: _title,
      },
    });
  }
}
