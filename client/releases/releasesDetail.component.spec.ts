import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { DebugElement }    from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { ReleasesDetailComponent } from './releasesDetail.component';

describe('ReleasesDetailComponent', () => {
  let releasesDetailComponent: ReleasesDetailComponent;
  let fixture: ComponentFixture<ReleasesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasesDetailComponent ],
      imports: [ BrowserModule ],
    });

    fixture = TestBed.createComponent(ReleasesDetailComponent);
    releasesDetailComponent = fixture.componentInstance;
  });
});
