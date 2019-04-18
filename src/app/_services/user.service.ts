import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import {Config} from '../shared/Config';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getFriends() {
        return this.http.get<User[]>(`${Config.apiUrl}/users/friends`);
    }
}
