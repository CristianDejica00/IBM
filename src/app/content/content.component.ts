import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { Request } from "../shared/models/request";
import { Certificate } from "../shared/models/certificate";
import { RequestService } from "../shared/services/request.service";
import { CertificateService } from "../shared/services/certificate.service";
import { User } from "../shared/models/user";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  @ViewChild(NavbarComponent) navData;
  reqData: Request[] = [];
  certData: Certificate[] = [];
  userData: User[] = [];

  user = User[0];

  constructor(
    private reqApi: RequestService,
    private certApi: CertificateService,
    private userApi: UserService
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

    this.userApi.getUsers().subscribe((res: any) => {
      this.userData = res;
      console.log(this.userData);
    });
  }
}
