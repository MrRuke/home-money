import { Component, EventEmitter, inject, Output } from "@angular/core";
import { AccountCurrencyTypes } from "@app/apis/accounts/models";
import { AccountFacade } from "@app/stores/account/account.facade";

@Component({
  selector: "app-create-account-dialog",
  templateUrl: "./create-account-dialog.component.html",
  providers: [],
})
export class CreateAccountDialogComponent {
  private accountFacade = inject(AccountFacade);

  @Output()
  public closed = new EventEmitter();

  public onSubmit(): void {
    this.accountFacade.createNewAccount({
      value: 1200,
      currency: AccountCurrencyTypes.RUB,
    });
    this.closed.emit();
  }
}
