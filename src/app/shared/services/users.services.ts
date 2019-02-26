import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";

@Injectable()

export class UsersServices {
  constructor(private http: HttpClient) {
  }


  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users?email=${email}`)
      .map((response: any) => response)
      .map((user: User[]) => user[0] ? user[0] : undefined);
  }
}
