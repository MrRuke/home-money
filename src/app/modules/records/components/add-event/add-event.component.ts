import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Category } from '@app/apis/categories/models';
import { HistoryRequest, HistoryType } from '@app/apis/history/models';
import * as moment from 'moment';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent {
  public readonly amountControl = this.fb.control(1, [
    Validators.required,
  ]);
  public readonly categoryControl = this.fb.control(null, [
    Validators.required,
  ]);
  public readonly formGroup = this.fb.group({
    category: this.categoryControl,
    type: this.fb.control(HistoryType.INCOME, Validators.required),
    amount: this.amountControl,
    description: null,
  });

  public readonly types = Object.values(HistoryType);

  @Input()
  public categories: Category[] = [];

  @Output()
  public eventSubmitted = new EventEmitter<HistoryRequest>();

  constructor(
    private fb: UntypedFormBuilder,
  ) {
  }

  public isIncome = (type: HistoryType): boolean => type === HistoryType.INCOME;

  public getTypeText = (type: HistoryType): string =>
    this.isIncome(type) ? "HISTORY.TYPE_INCOME" : "HISTORY.TYPE_OUTCOME";

  public handleSubmit(): void {
    if (this.formGroup.invalid) {
      return;
    }

    this.eventSubmitted.emit({
      ...this.formGroup.value,
      amount: Number(this.formGroup.value.amount),
      category: this.formGroup.value.category.id,
      description: '',
      date: moment().format('DD.MM.YYYY HH:mm:ss'),
    });
    // TODO
    this.formGroup.reset();
  }
}
