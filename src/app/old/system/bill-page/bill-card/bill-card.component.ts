import {
  Component,
  Input,
} from '@angular/core';

import { Bill } from '@app/old/system/shared/models/bill.model';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
})
export class BillCardComponent {
  @Input()
  // @ts-expect-error legacy
  public bill: Bill;
}
