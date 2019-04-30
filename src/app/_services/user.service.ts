import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../_models/user';
import {Config} from '../shared/Config';
import Notification from '../_models/notification';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getFriends() {

    return this.http.get<User[]>(`${Config.apiUrl}/users/friends`);
  }


  getNotifications() {
    return this.http.get<Notification[]>(`${Config.apiUrl}/notification`);
  }

  deleteNotifications() {
    return this.http.delete(`${Config.apiUrl}/notification`);
  }
}
