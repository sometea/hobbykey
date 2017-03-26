import { Component } from '@angular/core';
declare var require: (filename: string) => any;

@Component({
  selector: 'staticpage',
  template: require('./staticpage.template.html')
})
export class StaticPageComponent {
}
