import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { DebugElement }    from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { StaticPageComponent } from './staticpage.component';

describe('StaticPageComponent', () => {
  let staticPageComponent: StaticPageComponent;
  let fixture: ComponentFixture<StaticPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticPageComponent ],
      imports: [ BrowserModule ],
    });

    fixture = TestBed.createComponent(StaticPageComponent);
    staticPageComponent = fixture.componentInstance;
  });

  it('displays a static template', () => {
    fixture.detectChanges();
    let htmlElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(htmlElement.textContent).toContain('Freude');
  });
});
