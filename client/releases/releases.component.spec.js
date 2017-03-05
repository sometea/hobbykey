import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { DebugElement }    from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { ReleasesComponent } from './releases.component';

describe('ReleasesComponent', () => {
  let releasesComponent = {};
  let fixture = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasesComponent ],
      imports: [ BrowserModule ],
    });

    fixture = TestBed.createComponent(ReleasesComponent);
    releasesComponent = fixture.componentInstance;
  });

  it('displays a static template', () => {
    fixture.detectChanges();
    let htmlElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(htmlElement.textContent).toContain('Releases');
  });
});
