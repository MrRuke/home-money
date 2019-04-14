import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { BaseApi } from '@app/shared/core/base';
import { User } from '../models/user.model';

@Injectable()

export class UsersService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  public getUsers(): Observable<User[]> {
    return this.get('users');
  }
}
