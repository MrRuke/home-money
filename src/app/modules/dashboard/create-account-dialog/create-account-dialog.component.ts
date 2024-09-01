import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AccountCurrencyTypes } from "@app/apis/accounts/models";
import { AccountFacade } from "@app/stores/account/account.facade";

@Component({
  selector: "app-create-account-dialog",
  templateUrl: "./create-account-dialog.component.html",
  providers: [],
})
export class CreateAccountDialogComponent {
  private accountFacade = inject(AccountFacade);
  private fb = inject(FormBuilder);

  public readonly formGroup = this.fb.group({
    value: 0,
    currency: AccountCurrencyTypes.EUR,
  });

  @Output()
  public closed = new EventEmitter();

  public handleSubmit(): void {
    const { value, currency } = this.formGroup.value;
    console.log('c', currency);

    if (!value || !currency) {
      // TODO: Validation
      return;
    }

    this.accountFacade.createNewAccount({
      value,
      currency,
    });
    this.closed.emit();
  }
}
