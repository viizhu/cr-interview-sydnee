import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import { AlertsCard } from "./components/cards";
import { TasksCard } from "./components/cards";

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, AlertsCard, TasksCard],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
