import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ReleasesComponent } from './releases.component';
import { ReleasesService } from './releases.service';
import { Router } from '@angular/router';
import { async } from "@angular/core/testing";

describe('ReleasesComponent', () => {
  let releasesComponent: ReleasesComponent;
  let fixture: ComponentFixture<ReleasesComponent>;
  const testReleases = [ { title: 'Release.', description: { html: 'Hi. '}, thumbnail: { url: 'test' }}];
  let spy: jasmine.Spy;
  let releasesService: ReleasesService;

  beforeEach(() => {
    const routerMock = {
        navigate(to) {
            return to;
        }
    };

    TestBed.configureTestingModule({
      declarations: [ ReleasesComponent ],
      imports: [ BrowserModule, HttpModule ],
      providers: [ ReleasesService,
                  { provide: Router, useValue: routerMock }],
    });

    fixture = TestBed.createComponent(ReleasesComponent);
    releasesComponent = fixture.componentInstance;
    releasesService = fixture.debugElement.injector.get(ReleasesService);

    spy = spyOn(releasesService, 'getItems').and.returnValue(Observable.of(testReleases));
  });

  it('displays a static template', async(() => {
    fixture.whenStable().then(() => {
      let htmlElement = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(htmlElement.textContent).toContain('Releases');
    });
  }));

  it('fetches some releases', async(() => {
    let releases: any;
    releasesComponent.fetchReleases();
    releasesComponent.releases.subscribe(x => releases = x);
    expect(releases).toEqual(testReleases);
  }));
});
