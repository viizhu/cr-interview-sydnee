export interface BreachAccount {
  addedDate: string;
  name: string;
}

export interface Auth {
  compromisedAccount?: boolean;
  breachedAccounts?: BreachAccount[];
}