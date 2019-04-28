import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../_models';
import {Config} from '../shared/Config';

@Injectable({providedIn: 'root'})
export class FriendRequestService {
  constructor(private http: HttpClient) {
  }


  sendFriendRequest(userId) {
    return this.http.get(`${Config.apiUrl}/request/friend/add/` + userId);
  }

  getAllFriendRequests() {
    return this.http.get(`${Config.apiUrl}/request/friend`);

  }

  acceptFriendRequest(id: number) {
    return this.http.get(`${Config.apiUrl}/request/friend/accept/` + id);

  }
}
