import { Component } from '@angular/core';
import { PostsService } from '../posts/posts.service';

import template from './app.template.html';

@Component({
  selector: 'my-app',
  template: template,
})
export class AppComponent {
  name = 'Angular';

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
