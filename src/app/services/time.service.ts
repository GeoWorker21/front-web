import {Injectable} from '@angular/core';
import {UrlService} from './url.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtToken} from '../models/jwt-token';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private urlService: UrlService, private httpClient: HttpClient) {
  }

  setTimeZone(): void {
    const date = new Date();

    const jwtToken = localStorage.getItem("JWT_TOKEN");
    this.httpClient.post<JwtToken>(this.urlService.getUrl() + "/user/location/" + date.getTimezoneOffset(), {},
      { headers: new HttpHeaders({ Authorization: "" + jwtToken})
      }).subscribe(
      data => {
      },
      error => {
      }
    );
  }

  getTimeByOffset(offset: number): String {
    let d: Date = new Date();
    d.setTime( d.getTime() + d.getTimezoneOffset() * 60 * 1000 - (offset * 60 * 1000));
    let ret: String = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    return ret;
  }

  }
