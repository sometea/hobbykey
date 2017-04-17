import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GetService {
  protected getUrl = '/api/posts';

  constructor(private http: Http) {
  }

  getItems() {
    return this.http.get(this.getUrl)
      .map(response => response.json())
      .catch(err => this.handleError(err));
  }

  getItem(id: string) {
    return this.http.get(this.getUrl + '/' + id)
      .map(response => response.json())
      .catch(err => this.handleError(err));
  }

  handleError(error) {
    if (error.status === 401) console.log('Access denied');
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}