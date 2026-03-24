import { Component, EventEmitter, inject, output, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AccountCurrencyTypes } from "@app/apis/accounts/models";
import { AccountFacade } from "@app/stores/account/account.facade";

@Component({
    selector: "app-create-account-dialog",
    templateUrl: "./create-account-dialog.component.html",
    providers: [],
    standalone: false
})
export class CreateAccountDialogComponent {
  private accountFacade = inject(AccountFacade);
  private fb = inject(FormBuilder);

  public readonly formGroup = this.fb.group({
    value: this.fb.control(0, [Validators.required]),
    currency: AccountCurrencyTypes.EUR,
  });

  public closed = output<void>();

  public handleSubmit(): void {
    const { value, currency } = this.formGroup.value;

    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.accountFacade.createNewAccount({
      value: value!,
      currency: currency!,
    });
    this.closed.emit();
  }
}
