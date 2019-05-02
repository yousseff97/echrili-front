import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../_models/user';
import {Config} from '../shared/Config';
import Notification from '../_models/notification';
import Review from '../_models/review';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getFriends() {
    return this.http.get<User[]>(`${Config.apiUrl}/users/friends`);
  }

  register(user: User) {
    return this.http.post(`${Config.apiUrl}/users/signup`, user);
  }


  addTrustedUser(id: number) {
    return this.http.post(`${Config.apiUrl}/trusted/users/add/` + id, {});
  }

  getNotifications() {
    return this.http.get<Notification[]>(`${Config.apiUrl}/notification`);
  }

  deleteNotifications() {
    return this.http.delete(`${Config.apiUrl}/notification`);
  }

  addReview(review: Review) {
    return this.http.post(`${Config.apiUrl}/review`, review);

  }

  updateUser(user : User)
  {
    return this.http.post(`${Config.apiUrl}/users/update`, user);
  }


}
