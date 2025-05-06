import { Component } from "@angular/core";

@Component({
  selector: "Dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
  //   since i cannot figure out the type error i will just focus on dismissing
  // not sure how events work either omg
  constructor(){
    // set onLoginSucces to this loginSucces
  }
  dismissAlert(){
    onLoginSuccess.meta.suggestPassword = false;
  }

}
