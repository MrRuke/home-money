import { Injectable } from '@angular/core';
import { BillApi } from '@app/old/system/shared/api/bill-api';
import { CurrencyStore } from '@app/old/system/shared/stores/currency/store';
import { Observable } from 'rxjs';
import {
  mapTo,
  tap,
} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  constructor(
    private api: BillApi,
    private store: CurrencyStore,
  ) {
  }

  public loadValue(): Observable<void> {
    this.store.setLoading(true);
    return this.api.getCurrency().pipe(
      tap(currency => this.store.update({ currency })),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }
}
