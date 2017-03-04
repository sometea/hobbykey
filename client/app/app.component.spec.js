import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { DebugElement }    from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PostsService } from '../posts/posts.service';

describe('AppComponent', () => {
  let appComponent = {};
  let fixture = {};
  const testPosts = [ { title: 'Badgers.' }];

  beforeAll(()=> {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });

  beforeEach(() => {
    let postsServiceMock = {
      getPosts() {
        return { subscribe(callback) {
            callback(testPosts);
          }
        };
      }
    };

    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      bootstrap: [ AppComponent ],
      imports: [ BrowserModule, HttpModule ],
      providers: [{ provide: PostsService, useValue: postsServiceMock }],
    });

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  it('displays a hello world string', () => {
    fixture.detectChanges();
    let htmlElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(htmlElement.textContent).toContain('Hello World!');
  });

  it('gets some posts from the service', () => {
    appComponent.fetchPosts();
    expect(appComponent.posts).toEqual(testPosts);
  });
});
