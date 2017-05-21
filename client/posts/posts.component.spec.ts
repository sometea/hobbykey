import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { PostsComponent } from './posts.component';
import { PostsService } from '../posts/posts.service';

describe('postsComponent', () => {
  let postsComponent: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  const testPosts = [ { title: 'Badgers.', body: { html: 'Hi. '}, }];
  let spy: jasmine.Spy;
  let postsService: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      imports: [ BrowserModule, HttpModule ],
      providers: [ PostsService ],
    });

    fixture = TestBed.createComponent(PostsComponent);
    postsComponent = fixture.componentInstance;
    postsService = fixture.debugElement.injector.get(PostsService);

    spy = spyOn(postsService, 'getItems').and.returnValue(Observable.of(testPosts));
  });

  it('gets some posts from the service', async(() => {
    let posts: any;
    postsComponent.fetchPosts();
    postsComponent.posts.subscribe(x => posts = x);
    expect(posts).toEqual(testPosts);
  }));

  it('displays the posts in the template', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let htmlElement = fixture.debugElement.query(By.css('p')).nativeElement;
      expect(htmlElement.textContent).toEqual('Badgers.');
    })
  }))
});
