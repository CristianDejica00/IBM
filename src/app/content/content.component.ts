import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { Request } from "../shared/models/request";
import { Certificate } from "../shared/models/certificate";
import { RequestService } from "../shared/services/request.service";
import { CertificateService } from "../shared/services/certificate.service";
import { Users } from "../shared/models/user";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  @ViewChild(NavbarComponent) navData;
  reqData: Request[] = [];
  certData: Certificate[] = [];

  constructor(
    private reqApi: RequestService,
    private certApi: CertificateService
  ) {}

  navRoute: string;

  recieveNav($event) {
    this.navRoute = $event;
    console.log("Recieved " + this.navRoute);
  }

  ngOnInit(): void {
    this.certApi.getCertificates().subscribe((res: any) => {
      this.certData = res;
    });

    this.reqApi.getRequests().subscribe((res: any) => {
      this.reqData = res;
      console.log(this.reqData);
    });
  }
}
