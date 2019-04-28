import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {User} from '../_models/user';

@Component({
  selector: 'app-list-amis',
  templateUrl: './list-amis.component.html',
  styleUrls: ['./list-amis.component.css']
})
export class ListAmisComponent implements OnInit {

  userList: User[] = null;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getFriends().subscribe(
      (data: User[]) => {
        this.userList = data;
      }
    );

  }


}
