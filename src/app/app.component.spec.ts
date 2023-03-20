import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should be zero by default', () => {
    // Act
    const numberEl = fixture.debugElement.query(
      By.css("[data-testId='number']")
    );
    const number = numberEl.nativeElement.innerText;

    // Assert
    expect(number).toBe('0');
  });

  it('should be increased by one', () => {
    // Act
    const incBtnEl = fixture.debugElement.query(
      By.css("[data-testId='inc-btn']")
    );

    incBtnEl.triggerEventHandler('click', null);
    fixture.detectChanges();

    const numberElAfter = fixture.debugElement.query(
      By.css("[data-testId='number']")
    ).nativeElement.innerText;

    // Assert
    expect(numberElAfter).toBe('1');
  });

  it('should be decreased by one', () => {
    // Act
    const decBtnEl = fixture.debugElement.query(
      By.css("[data-testId='dec-btn']")
    );

    decBtnEl.triggerEventHandler('click', null);
    fixture.detectChanges();

    const numberElAfter = fixture.debugElement.query(
      By.css("[data-testId='number']")
    ).nativeElement.innerText;

    // Assert
    expect(numberElAfter).toBe('-1');
  });
});
