import { Component } from '@angular/core';
import { PostsService } from '../posts/posts.service';
declare var require: (filename: string) => any;


@Component({
  selector: 'posts',
  template: require('./posts.template.html'),
})
export class PostsComponent {
  public posts;

  constructor(private postsService: PostsService) {
  }

  fetchPosts() {
    this.posts = this.postsService.getItems();
  }

  ngOnInit() {
    this.fetchPosts();
  }
}
