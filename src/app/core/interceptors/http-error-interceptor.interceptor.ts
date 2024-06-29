import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        let errorMsg = '';

        if (typeof error?.error?.errors === 'undefined' || error?.error?.errors.length === 0) {
          this.toastr.error(error?.error.message)
        } else {
          for (var key in error?.error?.errors) {
            var obj = error?.error?.errors[key];
            this.toastr.error(obj);
          }
        }
        return throwError(errorMsg);
      })
    );
  }
}
