import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', canActivate: [AuthGuard], children: [
    {path: 'teams', component: TeamsComponent },
    {path: 'team/:name', component: TeamComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
