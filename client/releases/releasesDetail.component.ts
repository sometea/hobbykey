import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ReleasesService } from './releases.service';

declare var require: (filename: string) => any;

@Component({
  selector: 'release',
  template: require('./releasesDetail.template.html'),
})
export class ReleasesDetailComponent implements OnInit {
  public release: any;

  constructor(
    private route: ActivatedRoute,
    private service: ReleasesService
  ) {
  }

  ngOnInit(): void {
      this.route.params
      .switchMap((params: Params) => this.service.getItem(params['id']))
      .subscribe(release => { 
        this.release = release; 
      });
  }
}
