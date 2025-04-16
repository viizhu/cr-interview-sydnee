import { Component } from "@angular/core";

@Component({
  selector: "#root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public auth: {
    token: "";
    user: {};
    meta: {};
  };

  constructor() {
    this.auth = {
      token: "",
      user: {},
      meta: {}
    };
  }

  onLoginSuccess(auth: any) {
    this.auth = auth;
  }

  onLogOut() {
    this.auth = {
      token: "",
      user: {},
      meta: {}
    };
  }
}