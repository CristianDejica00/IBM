import { Component, OnInit } from "@angular/core";
import { User } from "../shared/models/user";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  userData: User[] = [];

  constructor(private userApi: UserService) {}

  ngOnInit(): void {
    this.userApi.getUsers().subscribe((res: any) => {
      this.userData = res;
    });
    console.log("fetched users");
  }
}
