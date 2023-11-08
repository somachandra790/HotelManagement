import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, of, ObservableInput, observable, throwError, retry, retryWhen, mergeMap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    console.log(req)

    const started = Date.now();

    return next.handle(req)
      .pipe(
        map(event => {

          console.log(event);
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);

          const myBody = [{
            "id": 1,
            "name": "Demo Hotel",
            "address": "Weikfield IT Citi Info Park, City Infopark Nagar, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014",
            "imgUrl": "../../../assets/Images/fake-hotel.jpg",
            "ratings": 4.4,
            "phoneNo": "02067056000",
            "price": 10620.00
          }];

          if (event instanceof HttpResponse) {
            console.log(event)
            console.log(`Response Received`);
            // if (event.status == 204)
            //   event = event.clone<any>({ body: myBody });
          }

          return event;
        }),
        // retry(3),
        // retryWhen((error) => {
        //   return error.pipe(
        //     mergeMap((error, index) => {
        //       if (index < 2 && error.status == 404) {
        //         return of(error).pipe(delay(1000));
        //       }
        //       throw error;
        //     })
        //   )
        // }
        // ),
        catchError((err) => {
          console.log(err)
          if (err instanceof ErrorEvent) {
            console.log('this is an error from the client side');
          } else {
            console.log('this is an error return by the server');
          }
          return throwError(() => err)
        })

      );


  }
}
