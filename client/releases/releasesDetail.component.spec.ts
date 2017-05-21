import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { DebugElement }    from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ReleasesDetailComponent } from './releasesDetail.component';
import { ReleasesService } from './releases.service';

describe('ReleasesDetailComponent', () => {
  let releasesDetailComponent: ReleasesDetailComponent;
  let fixture: ComponentFixture<ReleasesDetailComponent>;
  let spy: jasmine.Spy;
  const testRelease = { title: 'TestRelease' };
  const activatedRouteMock = { params: Observable.of({ id: 0 })};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasesDetailComponent ],
      imports: [ BrowserModule, HttpModule ],
      providers: [ ReleasesService,
                   { provide: ActivatedRoute, useValue: activatedRouteMock }],
    });
    fixture = TestBed.createComponent(ReleasesDetailComponent);
    releasesDetailComponent = fixture.componentInstance;
    spy = spyOn(fixture.debugElement.injector.get(ReleasesService), 'getItem').and.returnValue(Observable.of(testRelease));
  });

  it('renders a release once it has received one from the service', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let htmlElement = fixture.debugElement.query(By.css('p')).nativeElement;
      expect(htmlElement.textContent).toContain('TestRelease');
    });
  }));
});
