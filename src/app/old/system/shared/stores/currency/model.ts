import { Currency } from '@app/old/system/shared/models/bill.model';
import { InitialState } from '@app/old/system/shared/stores/initialStore';

export interface CurrencyState extends InitialState {
  currency: Currency;
}
