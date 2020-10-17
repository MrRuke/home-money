import { Injectable } from '@angular/core';
import { CurrencyState } from '@app/old/system/shared/stores/currency/model';
import { InitialState } from '@app/old/system/shared/stores/initialStore';
import {
  Store,
  StoreConfig,
} from '@datorama/akita';

@StoreConfig({ name: 'Currency' })
@Injectable({ providedIn: 'root' })
export class CurrencyStore extends Store<CurrencyState> {
  constructor() {
    super(InitialState);
  }
}
