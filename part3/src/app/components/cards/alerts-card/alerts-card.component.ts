import { Component, Input } from "@angular/core";

@Component({
  selector: "AlertsCard",
  styleUrls: ["./alerts-card.component.scss"],
  templateUrl: "./alerts-card.component.html"
})

export class AlertsCard {
  @Input() metaData;
 
}
