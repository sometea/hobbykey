import { Component } from '@angular/core';
declare var require: (filename: string) => any;

@Component({
  selector: 'releases',
  template: require('./releases.template.html'),
})
export class ReleasesComponent {
}
