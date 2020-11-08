import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountRequest } from '@app/apis/accounts/models';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseApi } from '../base-api';

@Injectable({ providedIn: 'root' })
export class AccountsApi extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  public addAccount(account: AccountRequest): Observable<Account> {
    return this.post('accounts', account).pipe(delay(400));
  }

  public getAccounts(): Observable<Account[]> {
    return this.get('accounts').pipe(delay(400));
  }

  public updateAccount(account: Account): Observable<Account> {
    return this.put(`accounts/${account.id}`, account).pipe(delay(400));
  }

  public getAccountById(id: number): Observable<Account> {
    return this.get(`accounts/${id}`).pipe(delay(400));
  }
}
