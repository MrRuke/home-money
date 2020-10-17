import { Injectable } from '@angular/core';
import {
  Bill,
  Currency,
} from 'app/system/shared/models/bill.model';
import { BillQuery } from 'app/system/shared/stores/bill/query';
import { CurrencyQuery } from 'app/system/shared/stores/currency/query';
import {
  combineLatest,
  Observable,
} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BillPageViewModel {
  public readonly bill = this.selectBill();
  public readonly currency = this.selectCurrency();
  public readonly loading = this.selectLoading();

  constructor(
    private billQuery: BillQuery,
    private currencyQuery: CurrencyQuery,
  ) {
  }

  private selectBill(): Observable<Bill> {
    return this.billQuery.selectBill();
  }

  private selectCurrency(): Observable<Currency> {
    return this.currencyQuery.selectCurrency();
  }

  private selectLoading(): Observable<boolean> {
    return combineLatest([
      this.billQuery.selectLoading(),
      this.currencyQuery.selectLoading(),
    ]).pipe(
      map(loading => loading.some(Boolean)),
    );
  }
}
