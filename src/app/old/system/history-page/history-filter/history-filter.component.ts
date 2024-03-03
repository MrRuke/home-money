import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Category } from '@app/old/system/shared/models/category.model';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss'],
})
export class HistoryFilterComponent {
  @Input()
  public categories: Category[] = [];

  @Output()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public filterCancel = new EventEmitter<any>();

  @Output()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public filterApply = new EventEmitter<any>();

  public timePeriods = [
    {
      type: 'd',
      label: 'День',
    },
    {
      type: 'w',
      label: 'Неделя',
    },
    {
      type: 'M',
      label: 'Месяц',
    },
  ];
  public types = [
    {
      type: 'income',
      label: 'Доход',
    },
    {
      type: 'outcome',
      label: 'Расход',
    },
  ];
  public selectedPeriod = 'd';
  public selectedTypes = ['income', 'outcome'];
  public selectedCategories = [];

  public closeFilter(): void {
    this.selectedTypes = ['income', 'outcome'];
    this.selectedCategories = [];
    this.selectedPeriod = 'd';
    this.filterCancel.emit();
  }

  public applyFilter(): void {
    this.filterApply.emit({
      types: this.selectedTypes,
      categories: this.selectedCategories,
      period: this.selectedPeriod,
    });
  }

  // @ts-expect-error legacy
  public handlerChangeType({ checked, value }): void {
    this.calculateInputParams('selectedTypes', checked, value);
  }

  // @ts-expect-error legacy
  public handlerChangeCategory({ checked, value }): void {
    this.calculateInputParams('selectedCategories', checked, value);
  }

  private calculateInputParams(field: string, checked: boolean, value: string): void {
    if (checked) {
      // @ts-expect-error legacy
      if (this[field].indexOf(value) === -1) {
        // @ts-expect-error legacy
        this[field].push(value);
      }
      return;
    }
    // @ts-expect-error legacy
    this[field] = this[field].filter(i => i !== value);
  }
}
