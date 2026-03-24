import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";

export class BaseApi {
    public http = inject(HttpClient);

    private baseUrl = environment.restURL;

    protected get<R>(url: string = ""): Observable<R> {
        return this.http
            .get<R>(this.getUrl(url))
            .pipe(map((response: R) => response));
    }

    protected post<T, R>(url: string = "", data?: T): Observable<R> {
        return this.http
            .post<R>(this.getUrl(url), data ?? {})
            .pipe(map((response: R) => response));
    }

    protected put<T, R>(url: string = "", data?: T): Observable<R> {
        return this.http
            .put<R>(this.getUrl(url), data ?? {})
            .pipe(map((response: R) => response));
    }

    protected delete<T>(url: string = "", data?: T): Observable<void> {
        return this.http
            .delete<void>(this.getUrl(url), data ?? {})
            .pipe(map(() => {}));
    }

    private getUrl(url: string = ""): string {
        return this.baseUrl + url;
    }
}
