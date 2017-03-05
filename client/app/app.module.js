import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PostsService } from '../posts/posts.service';
import { PostsComponent } from '../posts/posts.component';
import { ReleasesComponent } from '../releases/releases.component';
import { StaticPageComponent } from '../staticpage/staticpage.component';

import { routing } from '../router';

@NgModule({
  imports: [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, PostsComponent, ReleasesComponent, StaticPageComponent ],
  bootstrap: [ AppComponent ],
  providers: [ PostsService ],
})
export class AppModule { }
