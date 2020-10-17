import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  delay,
  map,
} from 'rxjs/operators';

import { BaseApi } from '@app/old/shared/core/base';
import {
  Bill,
  Currency,
} from '../models/bill.model';

@Injectable({ providedIn: 'root' })

export class BillApi extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  public getBill(): Observable<Bill> {
    return this.get('bill').pipe(delay(400));
  }

  public updateBill(bill: Bill): Observable<Bill> {
    return this.put('bill', bill);
  }

  public getCurrency(base: string = 'EUR'): Observable<Currency> {
    return this.http.get(
      `http://data.fixer.io/api/latest?access_key=6367d4cea90bd5d899c0ab78ea0498af&format=1&symbols=USD,EUR,RUB&base=${base}`)
      .pipe(map((response: Currency) => response));
  }
}
