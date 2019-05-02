import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})


export class SideBarComponent {
  constructor(
    private router: Router,
    private Auth: AuthenticationService
  ) {}
  navigListTasks() {
    this.router.navigate(['/task/list']);
  }
  navigAddTasks() {
    this.router.navigate(['/task/add']);
  }
  navigTasks() {
    this.router.navigate(['/task/my']);
  }
  logout() {
    this.Auth.logout();
    this.router.navigate(['']);
  }
}
