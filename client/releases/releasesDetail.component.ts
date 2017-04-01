import { Component } from '@angular/core';
declare var require: (filename: string) => any;

@Component({
  selector: 'release',
  template: require('./releasesDetail.template.html'),
})
export class ReleasesDetailComponent {

  public release: any;

  constructor() {
  }
}
