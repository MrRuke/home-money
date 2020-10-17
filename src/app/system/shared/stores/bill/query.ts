import { Injectable } from '@angular/core';
import { Bill } from 'app/system/shared/models/bill.model';
import { BillState } from 'app/system/shared/stores/bill/model';
import { BillStore } from 'app/system/shared/stores/bill/store';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BillQuery extends Query<BillState> {
  constructor(store: BillStore) {
    super(store);
  }

  public selectBill(): Observable<Bill> {
    return this.select('bill');
  }
}
