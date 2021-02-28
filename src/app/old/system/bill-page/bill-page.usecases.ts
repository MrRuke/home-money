import { Injectable } from '@angular/core';
import { BillService } from '@app/old/system/shared/stores/bill/service';
import { CurrencyService } from '@app/old/system/shared/stores/currency/service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BillPageUseCases {
  constructor(
    private billService: BillService,
    private currencyService: CurrencyService,
  ) {
  }

  public loadBill(): Observable<void> {
    return this.billService.loadValue();
  }

  public loadCurrency(): Observable<void> {
    return this.currencyService.loadValue();
  }
}
