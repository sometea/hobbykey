import { Component } from '@angular/core';
import { PostsService } from '../posts/posts.service';
declare var require: (filename: string) => any;


@Component({
  selector: 'posts',
  template: require('./posts.template.html'),
})
export class PostsComponent {
  private posts;
  private postsService: PostsService;

  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

  fetchPosts() {
    this.postsService.getPosts().subscribe(posts => { this.posts = posts; });
  }

  ngOnInit() {
    this.fetchPosts();
  }
}
