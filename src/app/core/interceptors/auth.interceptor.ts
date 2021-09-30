import { AuthenticationService } from './../authentication/authentication.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class authInterceptor implements HttpInterceptor{

    // constructor(private auth:AuthenticationService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if(req.headers){
        //     const clone =  req.clone({
        //         setHeaders:{
        //             Authorization:`Bearer ${}`
        //         }
        //     })
        //     return next.handle(clone);
        // }
        throw new Error("Method not implemented.");
    }
    
}