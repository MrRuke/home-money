import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.module";
@Injectable()

export class UsersServices {
  constructor(private http: HttpClient) {
  }

  /*getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .map((response: Response) => response.json());
  }*/

  getUserByEmail(email: string) : Observable<User> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .pipe(map((response: Response) => response.json()));
    /*return this.http.get(`http://localhost:3000/users?email=${email}`)
      .map((response: Response) => response.json());
    return this.http.get('https://reqres.in/api/users').pipe(map(res => res.data)).subscribe(res => console.log(res));*/
  }
}
