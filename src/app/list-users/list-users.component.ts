import {Component, OnInit} from '@angular/core';
import {User} from '../_models';
import {UserService} from '../_services';
import {FriendRequestService} from '../_services/friend.request.service';
declare var $: any;

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  userList: User[] = null;


  constructor(private userService: UserService, private friendRequestService: FriendRequestService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        this.userList = data;
      }
    );
  }

  onSubmit(i) {
    this.friendRequestService.sendFriendRequest(this.userList[i].id).subscribe(data => {
      $('#freelancer-' + i).fadeOut('slow');
    });


  }
}
