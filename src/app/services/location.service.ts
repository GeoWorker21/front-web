import { mapTo, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private urlService: UrlService, private httpClient: HttpClient) { }

  setLocation(countryCode: string): Observable<boolean> {

    return this.httpClient.post(this.urlService.getUrl() + "/user/country_code/" + countryCode, {}).pipe(mapTo(true));
  }

  SetLocationByIp(): Observable<boolean> {
    console.log("location");
    return this.httpClient.get("http://ipinfo.io/geo")
    .pipe(tap((res: any) => { this.setLocation(res.country).toPromise() }), mapTo(true));
  }
}
