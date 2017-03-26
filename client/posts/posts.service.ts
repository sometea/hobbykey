import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  postsUrl = '/api/posts';
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getPosts() {
    return this.http.get(this.postsUrl)
      .map(response => response.json())
      .catch(err => this.handleError(err));
  }

  handleError(error) {
    if (error.status === 401) console.log('Access denied');
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
