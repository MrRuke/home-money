import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Category } from '@app/system/shared/models/category.model';
import { AppEvent } from '@app/system/shared/models/event.model';

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss'],
})
export class HistoryEventsComponent implements OnInit {
  @Input()
  public categories: Category[] = [];

  @Input()
  public events: AppEvent[] = [];

  public searchValue = '';
  public searchPlaceholder = 'Сумма';
  public searchField = 'amount';

  public ngOnInit() {
    this.events.forEach((e) => {
      e.catName = this.categories.find(c => c.id === e.category).name;
    });
  }

  public getEventClass(e: AppEvent) {
    return {
      'label': true,
      // 'label-danger': e.type === 'outcome',
      // 'label-success ': e.type === 'income',
    };
  }

  public changeCriteria(field: string): void {
    const namesMap = {
      amount: 'Сумма',
      date: 'Дата',
      category: 'Категория',
      type: 'Тип',
    };
    this.searchPlaceholder = namesMap[field];
    this.searchField = field;
  }

}
