import { Component, Input } from "@angular/core";

@Component({
  selector: "Dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
  @Input() data;

}
