import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-apply-modal",
  templateUrl: "./apply-modal.component.html",
  styleUrls: ["./apply-modal.component.css"],
})
export class ApplyModalComponent implements OnInit {
  title: string;
  userId: string;
  certId: string;

  constructor(
    public applyDialog: MatDialogRef<ApplyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
  }

  close() {
    this.applyDialog.close();
  }
}
