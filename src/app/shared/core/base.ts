import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable()
export class BaseApi {
  private baseUrl = environment.restURL;
  constructor(public http: HttpClient){}

  private getUrl(url: string = '') : string {
    return this.baseUrl + url;
  }

  public get(url: string = '') : Observable<any>{
    return this.http.get(this.getUrl(url))
      .pipe(map((response: any) => response));
  }
  public post(url: string = '', data: any = {}) : Observable<any>{
    return this.http.post(this.getUrl(url), data)
      .pipe(map((response: any) => response));
  }
  public put(url: string = '', data: any = {}) : Observable<any>{
    return this.http.put(this.getUrl(url), data)
      .pipe(map((response: any) => response));
  }
}
