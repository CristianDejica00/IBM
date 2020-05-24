import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  loginManager(): void {
    this.router.navigateByUrl("/manager-home");
  }

  loginUser() {
    this.router.navigateByUrl("/home");
  }

  ngOnInit(): void {}

  toRegister() {
    this.router.navigate(["/register"]);
  }
}
