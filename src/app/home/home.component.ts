import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import {Router} from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    users: User[] = [];

    constructor(private userService: UserService,  private router: Router,
                private authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
