import { Component } from "@angular/core";

@Component({
  selector: "Dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
  suggestPasswordChange = true;
  breachedAccounts = [
    {name: "Bolt"},
    {name: "Elance"}
  ];
}
