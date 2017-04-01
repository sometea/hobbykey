import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { DebugElement }    from '@angular/core';
import { HttpModule } from "@angular/http";

import { BrowserModule } from '@angular/platform-browser';

import { ReleasesComponent } from './releases.component';
import { ReleasesService } from './releases.service';

describe('ReleasesComponent', () => {
  let releasesComponent: ReleasesComponent;
  let fixture: ComponentFixture<ReleasesComponent>;
  const testReleases = [ { title: 'Release.', description: { html: 'Hi. '}, thumbnail: { url: 'test' }}];

  beforeEach(() => {
    let releasesServiceMock = {
      getItems() {
        return { subscribe(callback) {
            callback(testReleases);
          }
        };
      }
    };

    TestBed.configureTestingModule({
      declarations: [ ReleasesComponent ],
      imports: [ BrowserModule, HttpModule ],
      providers: [{ provide: ReleasesService, useValue: releasesServiceMock }],
    });

    fixture = TestBed.createComponent(ReleasesComponent);
    releasesComponent = fixture.componentInstance;
  });

  it('displays a static template', () => {
    fixture.detectChanges();
    let htmlElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(htmlElement.textContent).toContain('Releases');
  });

  it('fetches some releases', () => {
    releasesComponent.fetchReleases();
    expect(releasesComponent.releases).toEqual(testReleases);
  });
});
