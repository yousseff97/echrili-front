import { Component, OnInit } from '@angular/core';
import {User} from '../_models';
import {UserService} from '../_services';
import {FriendRequestService} from '../_services/friend.request.service';
declare var $: any;

@Component({
  selector: 'app-list-friend-requests',
  templateUrl: './list-friend-requests.component.html',
  styleUrls: ['./list-friend-requests.component.css']
})
export class ListFriendRequestsComponent implements OnInit {

  userList: User[] = null;


  constructor(private userService: UserService, private friendRequestService: FriendRequestService) {
  }

  ngOnInit() {
    this.friendRequestService.getAllFriendRequests().subscribe(
      (data: User[]) => {
        this.userList = data;
      }
    );
  }

  onSubmit(i) {
    this.friendRequestService.acceptFriendRequest(this.userList[i].id).subscribe(data => {
      $('#freelancer-' + i).fadeOut('slow');
    });


  }

}
