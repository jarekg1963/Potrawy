import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';

const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ]
  })
export class AppRoutingModule { }
