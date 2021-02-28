import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

export class BaseApi {
  private baseUrl = environment.restURL;

  constructor(public http: HttpClient) {
  }

  // tslint:disable-next-line:no-any
  protected get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url))
      // tslint:disable-next-line:no-any
      .pipe(map((response: any) => response));
  }

  // tslint:disable-next-line:no-any
  protected post(url: string = '', data: any = {}): Observable<any> {
    return this.http.post(this.getUrl(url), data)
      // tslint:disable-next-line:no-any
      .pipe(map((response: any) => response));
  }

  // tslint:disable-next-line:no-any
  protected put(url: string = '', data: any = {}): Observable<any> {
    return this.http.put(this.getUrl(url), data)
      // tslint:disable-next-line:no-any
      .pipe(map((response: any) => response));
  }

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }
}
