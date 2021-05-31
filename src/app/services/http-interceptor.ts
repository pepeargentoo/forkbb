import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
// import { AuthService } from './auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
 
    constructor(
        private router: Router,
        // private authService: AuthService
    ) { 
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //  = localStorage.getItem('token') ?  localStorage.getItem('token') : 't';
        // const token: string = this.authService.token;
        const cors = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            // 'accept': 'text/plain',
            //'authorization': token 
        });

        const modifiedReq = req.clone({
            headers: cors,
        });

        return next.handle(modifiedReq).pipe(
            catchError((err: HttpErrorResponse) => {

                // if (err.status === 401) {
                //     this.router.navigateByUrl('/login');
                // }

                return throwError(err);

            })
        );
    }
}