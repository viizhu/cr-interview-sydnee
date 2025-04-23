import { Component, Input } from '@angular/core'
import { Auth } from '../../model.ts'

@Component({
  selector: "alerts",
  styleUrls: ["./alerts.component.scss"],
  templateUrl: "./lalerts.component.html"
})

export class AlertsComponent {
  @Input() auth:Auth
  
  dismiss() {
    this.auth.compromisedAccount = false
  }
}