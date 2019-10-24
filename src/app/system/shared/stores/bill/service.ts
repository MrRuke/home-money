import { Injectable } from '@angular/core';
import { BillApi } from '@app/system/shared/api/bill-api';
import { BillStore } from '@app/system/shared/stores/bill/store';
import { Observable } from 'rxjs';
import {
  mapTo,
  tap,
} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BillService {
  constructor(
    private api: BillApi,
    private store: BillStore,
  ) {
  }

  public loadValue(): Observable<void> {
    this.store.setLoading(true);
    return this.api.getBill().pipe(
      tap(bill => this.store.update({ bill })),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }
}
