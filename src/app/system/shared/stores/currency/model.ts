import { Currency } from 'app/system/shared/models/bill.model';
import { InitialState } from 'app/system/shared/stores/initialStore';

export interface CurrencyState extends InitialState {
  currency: Currency;
}
