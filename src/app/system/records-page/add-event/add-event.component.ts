import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/mergeMap';
import * as moment from 'moment';

import { Message } from '@app/shared/models/message.model';
import { Category } from '@app/system/shared/models/category.model';
import { AppEvent } from '@app/system/shared/models/event.model';
import { EventsService } from '@app/system/shared/services/events.service';
import { BillService } from '@app/system/shared/services/bill.service';
import { Bill } from '@app/system/shared/models/bill.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit, OnDestroy {
  @Input()
  public categories: Category[] = [];

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
  public message: Message;

  private sub1: Subscription;
  private sub2: Subscription;

  constructor(
    private eventsService: EventsService,
    private billService: BillService,
  ) {
  }

  public ngOnInit() {
    this.message = new Message('', 'alert-danger');
  }

  public ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

  public onSubmit(form: NgForm): void {
    const { description, category, type } = form.value;
    let { amount } = form.value;
    if (amount < 0) {
      amount *= -1;
    }

    const event = new AppEvent(
      type, amount, +category, moment().format('DD.MM.YYYY HH:mm:ss'), description,
    );

    this.sub1 = this.billService.getBill()
      .subscribe((bill: Bill) => {
        let value = 0;
        if (type === 'outcome') {
          if (amount > bill.value) {
            this.showMessage(`На счету недостаточно средств. Вам не хватает ${amount - bill.value} рублей.`);
            return;
          } else {
            value = bill.value - amount;
            this.showMessage('Событие создано', 'alert-success');
          }
        } else {
          value = bill.value + amount;
          this.showMessage('Событие создано', 'alert-success');
        }
        this.sub2 = this.billService.updateBill({
            value,
            currency: bill.currency,
          })
          .mergeMap(() => this.eventsService.addEvent(event))
          .subscribe(() => {
            form.setValue({
              amount: 1,
              description: ' ',
              category: 1,
              type: 'outcome',
            });
          });
      });
  }

  private showMessage(text: string, type: string = 'alert-danger'): void {
    this.message.text = text;
    this.message.type = type;
    window.setTimeout(() => this.message.text = '', 3000);
  }
}
