import { mapTo, map } from 'rxjs/operators';
import { Observable, ObservableLike } from 'rxjs';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Team } from '../models/team';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private urlService: UrlService, private httpClient: HttpClient) { }

  create(name: string, logo: string): Observable<boolean> {
    const body = { name, logo };

    return this.httpClient.post(this.urlService.getUrl() + "/team/create", body, 
    { headers: new HttpHeaders({ "Content-Type": "application/json"})})
  .pipe(mapTo(true));
  }

  getTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.urlService.getUrl() + "/team/my");
  }

  getMembersTeam(teamName: string): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.urlService.getUrl() + "/team/members/" + teamName);
  }
}
