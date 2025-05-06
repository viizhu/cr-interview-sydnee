export class AlertsCard {
  @Input() auth: any = {}
  
  public hasAlerts: boolean = false;
  
  ngOnChanges(changes: simpleChanges) {
    if (changes.meta && changes.meta.currentValue) {
      this.hasAlerts = this.meta.breachedAccounts;
    }  
  }
  
  onDismissAlerts() {
    this.meta.breachedAccounts = false;
    this.hasAlerts = false;
  }
}