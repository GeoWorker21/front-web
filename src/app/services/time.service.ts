import { mapTo } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtToken } from '../models/jwt-token';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private urlService: UrlService, private httpClient: HttpClient) {
  }

  setTimeZone(): Observable<boolean> {
    const date = new Date();

    return this.httpClient.post(this.urlService.getUrl() + "/user/time/" + date.getTimezoneOffset(), {}).pipe(mapTo(true));
  }

  getTimeByOffset(offset: number): Date {
    let d: Date = new Date();
    
    d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000 - (offset * 60 * 1000));
    return d;
  }
}
