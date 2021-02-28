import { Component, Input, OnInit } from '@angular/core';
import { HistoryPageViewModel } from '@app/old/system/history-page/history-page.viewmodel';

import { Category } from '@app/old/system/shared/models/category.model';
import { AppEvent, EventType } from '@app/old/system/shared/models/event.model';

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss'],
})
export class HistoryEventsComponent implements OnInit {
  @Input()
  public categories: Category[] = [];

  @Input()
  public events: HistoryPageViewModel.EventView[] = [];

  public searchValue = '';
  public searchPlaceholder = 'Сумма';
  public searchField = 'amount';

  public readonly eventType = EventType;

  public ngOnInit(): void {
    this.events.forEach((e) => {
      // @ts-ignore
      e.catName = this.categories.find(c => c.id === e.category).name;
    });
  }

  // tslint:disable-next-line:no-any
  public getEventClass(e: AppEvent): any {
    return {
      label: true,
      'label-danger': e.type === EventType.OUTCOME,
      'label-success ': e.type === EventType.INCOME,
    };
  }

  public changeCriteria(field: string): void {
    const namesMap = {
      amount: 'Сумма',
      date: 'Дата',
      category: 'Категория',
      type: 'Тип',
    };
    // @ts-ignore
    this.searchPlaceholder = namesMap[field];
    this.searchField = field;
  }

}
