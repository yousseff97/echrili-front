import { Component, OnInit } from '@angular/core';
import {Post} from '../_models/post';
import {PostService} from '../_services/post.service';
import {NgForm} from '@angular/forms';

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

  deletePost(id: number) {
    this.postService.delete(id);
  }

  addPost(f: NgForm) {
    if(this.postList == null){
      this.postList = [];
    }

    const p = new Post();
    p.id = this.postList.length + 1;
    p.description = "loubou fix baliz";//f['description'];
    p.price = 10;//f['price'];
    console.log(p);
    this.postList.concat(p);
    this.postService.add(p);
  }

}
