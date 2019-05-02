import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {User} from '../_models/user';
import {routing} from '../app.routing';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Config} from '../shared/Config';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './Profile.component.html',
})
export class ProfileComponent implements OnInit {

  currentUser: User = null;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService, private userService: UserService) {

  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }


  private updateInfo() {

    this.userService.updateUser(this.currentUser).subscribe(x => {


      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));


    });
  }
}
