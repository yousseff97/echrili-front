import { Component, OnInit } from '@angular/core';
import {Post} from '../_models/post';
import {PostService} from '../_services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postList: Post[] = null;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (data: Post[]) => {
        this.postList = data;
      }
    );
  }

}
