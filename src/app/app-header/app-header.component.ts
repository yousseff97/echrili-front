import {Component, OnInit} from '@angular/core';
import {User} from '../_models/user';
import {AuthenticationService} from '../_services/authentication.service';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';
import Notification from '../_models/notification';
import notification from '../_models/notification';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  currentUser: User = null;
  notifications: Notification[] = null;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      if (this.currentUser) {
        setTimeout(this.getNotifications, 1000);
      }

    });
  }

  getNotifications = () => {
    this.userService.getNotifications().subscribe(notifications => this.notifications = notifications);

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  deleteNotifications() {
    console.log('waaaa');

    this.userService.deleteNotifications().subscribe(next => this.notifications = []);
  }
}
