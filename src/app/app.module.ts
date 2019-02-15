import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { DishModule } from './dish/dish.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    HomeModule,
    DishModule,
    AppRoutingModule,
    HomeRoutingModule
  ],
  providers: [[AuthGuard]],
  bootstrap: [AppComponent]
})
export class AppModule { }
