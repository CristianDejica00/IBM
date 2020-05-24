import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { Request } from "../shared/models/request";
import { Certificate } from "../shared/models/certificate";
import { RequestService } from "../shared/services/request.service";
import { CertificateService } from "../shared/services/certificate.service";
import { User } from "../shared/models/user";
import { UserService } from "../shared/services/user.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";
import { filter, map } from "rxjs/operators";
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
    private certApi: CertificateService,
    public router: Router
  ) {}

  navRoute: string;
  navRole: string;

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
    });

    this.navRole = this.router.url;
  }
}
