import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GetService } from "../common/get.service";

@Injectable()
export class ReleasesService extends GetService {
  protected getUrl = '/api/releases';

  constructor(http: Http) {
    super(http);
  }
}