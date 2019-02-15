import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DishComponent } from '../dish/dish.component';
import { ProductComponent } from '../product/product.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/auth.guard';

const HOME_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent,  children: [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard', canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'dish', component: DishComponent, canActivate: [AuthGuard]},
    { path: 'product', component: ProductComponent, canActivate: [AuthGuard]}
  ]},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
