import { Component } from "@angular/core";

@Component({
  selector: "Dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html"
})
// https://docs.angularjs.org/api/ng/input/input%5Bdate%5D
export class DashboardComponent {
  @Input() auth: any = {}
}
