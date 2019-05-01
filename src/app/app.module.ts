import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import {APP_BASE_HREF} from '@angular/common';
import { ListAmisComponent } from './list-amis/list-amis.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import {ProfileComponent} from './Profile/Profile.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule ,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListAmisComponent,
    AppHeaderComponent,
    ProfileComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
