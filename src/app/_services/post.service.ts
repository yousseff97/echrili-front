import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Config} from '../shared/Config';
import {Post} from '../_models/post';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(`${Config.apiUrl}/posts`);
  }

  delete(id: number) {
    let parameters = new HttpParams();
    parameters = parameters.append('id', JSON.stringify(id));
    this.http.get<number>(`${Config.apiUrl}/delete` , {params: parameters});
  }

  add(p: Post) {
    let parameters = new HttpParams();
    parameters = parameters.append('p', JSON.stringify(p));
    this.http.get<Post>(`${Config.apiUrl}/add` , {params: parameters});
  }

}
