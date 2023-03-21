import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AdultUsersNamesPipe } from './adult-users-names.pipe';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<any>;
  let element: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, AppComponent, AdultUsersNamesPipe],
    });

    fixture = TestBed.createComponent(AppComponent);
    element = fixture.debugElement.query(By.directive(HighlightDirective));
  });

  it('should add yellow background on mouseenter', () => {
    element.triggerEventHandler('mouseenter');
    expect(element.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should remove background on mouseleave', () => {
    element.triggerEventHandler('mouseenter');
    element.triggerEventHandler('mouseleave');
    expect(element.nativeElement.style.backgroundColor).toBe('transparent');
  });
});
