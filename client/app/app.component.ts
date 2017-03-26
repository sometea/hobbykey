import { Component } from '@angular/core';
declare var require: (filename: string) => any;

@Component({
  selector: 'my-app',
  template: require('./app.template.html'),
})
export class AppComponent {
  name = 'Angular';
}
