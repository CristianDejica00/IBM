import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  selected: string = "";

  @Output() navbarEvent = new EventEmitter<string>();

  constructor() {}

  showCertifications() {
    this.selected = "Certificates";
    this.navbarEvent.emit(this.selected);
    console.log(this.selected);
  }

  showRequests() {
    this.selected = "Requests";
    this.navbarEvent.emit(this.selected);
    console.log(this.selected);
  }

  ngOnInit(): void {}
}
