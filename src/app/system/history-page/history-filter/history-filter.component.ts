import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Category } from '@app/system/shared/models/category.model';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss'],
})
export class HistoryFilterComponent {
  @Input()
  public categories: Category[] = [];

  @Output()
  public filterCancel = new EventEmitter<any>();

  @Output()
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
    this.onFilterCancel.emit();
  }

  public applyFilter(): void {
    this.onFilterApply.emit({
      types: this.selectedTypes,
      categories: this.selectedCategories,
      period: this.selectedPeriod,
    });
  }

  public handlerChangeType({ checked, value }) {
    this.calculateInputParams('selectedTypes', checked, value);
  }

  public handlerChangeCategory({ checked, value }) {
    this.calculateInputParams('selectedCategories', checked, value);
  }

  private calculateInputParams(field: string, checked: boolean, value: string) {
    if (checked) {
      this[field].indexOf(value) === -1
        ? this[field].push(value)
        : null;
    } else {
      this[field] = this[field].filter(i => i !== value);
    }
  }
}
