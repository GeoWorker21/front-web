import { TokenInterceptorService } from './services/token-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TeamsComponent } from './teams/teams.component';
import { FormsModule } from '@angular/forms';
import { TeamCardComponent } from './teams/team-card/team-card.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TeamComponent } from './team/team.component';
import { SidePanelComponent } from './team/side-panel/side-panel.component';
import { MemberCardComponent } from './team/side-panel/member-card/member-card.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './team/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    TeamsComponent,
    TeamCardComponent,
    TeamComponent,
    SidePanelComponent,
    MemberCardComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
