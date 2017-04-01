import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GetService } from '../common/get.service';

@Injectable()
export class PostsService extends GetService {
  protected getUrl = '/api/posts';

  constructor(http: Http) {
    super(http);
  }
}
