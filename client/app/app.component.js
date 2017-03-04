import { Component } from '@angular/core';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World!</h1>
    <div *ngFor="let post of posts">{{ post.title }}</div>
  `
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
