import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';

import { ReleasesComponent } from './releases.component';
import { ReleasesService } from './releases.service';
import { Router } from '@angular/router';

describe('ReleasesComponent', () => {
  let releasesComponent: ReleasesComponent;
  let fixture: ComponentFixture<ReleasesComponent>;
  const testReleases = [ { title: 'Release.', description: { html: 'Hi. '}, thumbnail: { url: 'test' }}];

  beforeEach(() => {
    const releasesServiceMock = {
      getItems() {
        return { subscribe(callback) {
            callback(testReleases);
          }
        };
      }
    };

    const routerMock = {
        navigate(to) {
            return to;
        }
    };

    TestBed.configureTestingModule({
      declarations: [ ReleasesComponent ],
      imports: [ BrowserModule, HttpModule ],
      providers: [{ provide: ReleasesService, useValue: releasesServiceMock },
                  { provide: Router, useValue: routerMock }],
    });

    fixture = TestBed.createComponent(ReleasesComponent);
    releasesComponent = fixture.componentInstance;
  });

  it('displays a static template', () => {
    fixture.detectChanges();
    let htmlElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(htmlElement.textContent).toContain('Releases');
    expect(true).toBeTruthy();
  });

  it('fetches some releases', () => {
    let releases: any;
    releasesComponent.fetchReleases();
    releasesComponent.releases.subscribe(x => releases = x);
    expect(releases).toEqual(testReleases);
  });
});
