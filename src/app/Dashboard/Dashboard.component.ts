import {Component, Injectable, OnInit} from '@angular/core';
import {User} from '../_models/user';
import {AuthenticationService} from '../_services/authentication.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './Dashboard.component.html'
})

@Injectable({providedIn: 'root'})
export class DashboardComponent {
  private user: User;

  constructor(private authenticationService: AuthenticationService) {
    authenticationService.currentUser.subscribe(x => this.user = x);

  }
}
