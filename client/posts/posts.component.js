import { Component } from '@angular/core';
import { PostsService } from '../posts/posts.service';

import template from './posts.template.html';

@Component({
  selector: 'posts',
  template: template,
})
export class PostsComponent {
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
