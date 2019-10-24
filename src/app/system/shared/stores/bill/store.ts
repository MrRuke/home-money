import { Injectable } from '@angular/core';
import { BillState } from '@app/system/shared/stores/bill/model';
import { InitialState } from '@app/system/shared/stores/initialStore';
import {
  Store,
  StoreConfig,
} from '@datorama/akita';

@StoreConfig({ name: 'bill' })
@Injectable({ providedIn: 'root' })
export class BillStore extends Store<BillState> {
  constructor() {
    super(InitialState);
  }
}
