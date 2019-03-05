import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Category} from "../../shared/models/category.model";
import {NgForm} from "@angular/forms";
import * as moment from 'moment';
import {AppEvent} from "../../shared/models/event.model";
import {EventsService} from "../../shared/services/events.service";
import {BillService} from "../../shared/services/bill.service";
import {Bill} from "../../shared/models/bill.model";
import 'rxjs/add/operator/mergeMap';
import {Message} from "../../../shared/models/message.model";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit, OnDestroy {

  @Input() categories: Category[] = [];

  sub1: Subscription;
  sub2: Subscription;

  types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];

  message: Message;

  constructor(private eventsService: EventsService,
              private billService: BillService) {
  }

  ngOnInit() {
    this.message = new Message('', 'alert-danger')
  }
  ngOnDestroy() {
    if(this.sub1) this.sub1.unsubscribe();
    if(this.sub2) this.sub2.unsubscribe();
  }

  private showMessage (text: string, type: string = 'alert-danger'){
    this.message.text = text;
    this.message.type = type;
    window.setTimeout(() => this.message.text = '', 3000)
  }

  onSubmit(form: NgForm) {
    let {amount, description, category, type} = form.value;
    if (amount < 0) amount *= -1;

    const event = new AppEvent(
      type, amount, +category, moment().format('DD.MM.YYYY HH:mm:ss'), description
    );

    this.sub1 = this.billService.getBill()
      .subscribe((bill: Bill) => {
        let value = 0;
        if (type === 'outcome') {
          if (amount > bill.value) {
            this.showMessage(`На счету недостаточно средств. Вам не хватает ${amount-bill.value} рублей.`);
            return;
          } else {
            value = bill.value - amount;
            this.showMessage('Событие создано', 'alert-success');
          }
        } else {
          value = bill.value + amount;
          this.showMessage('Событие создано', 'alert-success');
        }
        this.sub2 = this.billService.updateBill({value, currency: bill.currency})
          .mergeMap(() => this.eventsService.addEvent(event))
          .subscribe(() => {
            form.setValue({
              amount: 1,
              description: ' ',
              category: 1,
              type: 'outcome'
            });
          })
      });
  }

}
