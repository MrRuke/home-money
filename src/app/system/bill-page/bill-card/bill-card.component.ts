import {
  Component,
  Input,
} from '@angular/core';

import { Bill } from 'app/system/shared/models/bill.model';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
})
export class BillCardComponent {
  @Input()
  public bill: Bill;
}
