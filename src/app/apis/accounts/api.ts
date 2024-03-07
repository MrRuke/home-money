import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountElement, AccountRequest } from '@app/apis/accounts/models';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseApi } from '../base-api';

@Injectable({ providedIn: 'root' })
export class AccountsApi extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  public addAccount(account: AccountRequest): Observable<AccountElement> {
    return this.post('accounts', account).pipe(delay(400));
  }

  public getAccounts(): Observable<AccountElement[]> {
    return this.get('accounts').pipe(delay(400));
  }

  public updateAccount(account: AccountElement): Observable<AccountElement> {
    return this.put(`accounts/${account.id}`, account).pipe(delay(400));
  }

  public getAccountById(id: number): Observable<AccountElement> {
    return this.get(`accounts/${id}`).pipe(delay(400));
  }

  public deleteAccount(id: number): Observable<void> {
    return this.delete(`accounts/${id}`).pipe(delay(400));
  }
}
