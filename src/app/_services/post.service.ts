import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Config} from '../shared/Config';
import {Post} from '../_models/post';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(`${Config.apiUrl}/posts`);
  }
}
