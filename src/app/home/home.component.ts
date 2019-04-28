import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import {AuthenticationService} from '../_services/authentication.service';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';

@Component({templateUrl: 'home.component.html' })
export class HomeComponent {
    users: User[] = [];

    constructor(private userService: UserService,  private router: Router,
                private authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
