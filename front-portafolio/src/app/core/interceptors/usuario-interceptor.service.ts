import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioInterceptorService implements HttpInterceptor {

  constructor(private tokenService : TokenServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();
    if(token != null) {
      intReq  = req.clone({headers: req.headers.set('Authorization', `Bearer ${token}`)})
    }
    return next.handle(intReq);
  }
}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptorService, multi: true}];