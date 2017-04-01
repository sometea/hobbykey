import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GetService } from "../common/get.service";

@Injectable()
export class PostsService extends GetService {
  protected getUrl = '/api/releases';

  constructor(http: Http) {
    super(http);
  }
}