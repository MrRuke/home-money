import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Bill} from "../models/bill.model";
import {BaseApi} from "../../../shared/core/base";

@Injectable()

export class BillService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  getCurrency(base: string = 'EUR'): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=6367d4cea90bd5d899c0ab78ea0498af&format=1&symbols=USD,EUR,RUB&base=${base}`)
      .map((response: any) => response)
  }
}
