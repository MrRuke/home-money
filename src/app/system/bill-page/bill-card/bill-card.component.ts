import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Bill } from '@app/system/shared/models/bill.model';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
})
export class BillCardComponent implements OnInit {
  @Input()
  public bill: Bill;

  @Input()
  public currency: any;

  public dollar: number;
  public euro: number;
  public rub: number;

  public ngOnInit() {
    const { rates } = this.currency;
    this.rub = this.bill.value;
    this.euro = this.bill.value / rates['RUB'];
    this.dollar = this.euro * rates['USD'];
  }
}
