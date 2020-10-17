import {
  Component,
  Input,
} from '@angular/core';
import {
  Currency,
  CurrencyValue,
} from 'app/system/shared/models/bill.model';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
})
export class CurrencyCardComponent {
  @Input()
  public currency: Currency;

  public readonly currencies = Object.values(CurrencyValue);
}
