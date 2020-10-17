import { Injectable } from '@angular/core';
import { Currency } from '@app/old/system/shared/models/bill.model';
import { CurrencyState } from '@app/old/system/shared/stores/currency/model';
import { CurrencyStore } from '@app/old/system/shared/stores/currency/store';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyQuery extends Query<CurrencyState> {
  constructor(store: CurrencyStore) {
    super(store);
  }

  public selectCurrency(): Observable<Currency> {
    return this.select('currency');
  }
}
