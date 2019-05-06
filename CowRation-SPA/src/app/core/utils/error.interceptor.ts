import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpHandler,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError, map } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            return throwError(error.statusText);
          }
          const message = error.headers.get("Application-Error");
          if (message) {
            console.error(message);
            return throwError(message);
          }
          const serverError = error.error;
          let modalStateErrors = "";
          if (serverError && typeof serverError === "object") {
            for (const key in serverError) {
              if (typeof serverError[key] === "object") {
                for (const k in serverError[key]) {
                  if (serverError[key][k]) {
                    modalStateErrors += serverError[key][k] + "\n";
                  }
                }
              }
            }
          }
          return throwError(modalStateErrors || serverError || "Server Error");
        }
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
