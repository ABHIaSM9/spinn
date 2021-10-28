import { LoaderService } from './../services/loader.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root'
})
export class LoaderInterceptor implements HttpInterceptor{
  constructor(public loaderService:LoaderService){ }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);

    return next.handle(req).pipe(
      finalize(
        ()=>{
          this.loaderService.isLoading.next(false);
        }
      )
    )
  }
}
