import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AdultUsersNamesPipe } from './adult-users-names.pipe';
import { AppComponent, ShopItem } from './app.component';
import { DiscountService } from './discount.service';

const shopItems: ShopItem[] = [
  {
    name: 'Pants',
    price: 678,
  },
  {
    name: 'T-Shirt',
    price: 123,
  },
  {
    name: 'Shoes',
    price: 765,
  },
];

const discountServiceMock = {
  purchase(): number {
    return 0;
  },
  setDiscountPercent() {},
};

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [AppComponent, AdultUsersNamesPipe],
      providers: [
        {
          provide: DiscountService,
          useValue: discountServiceMock,
        },
      ],
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

    incBtnEl.triggerEventHandler('click');
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

    decBtnEl.triggerEventHandler('click');
    fixture.detectChanges();

    const numberElAfter = fixture.debugElement.query(
      By.css("[data-testId='number']")
    ).nativeElement.innerText;

    // Assert
    expect(numberElAfter).toBe('-1');
  });

  it('should display correct message after purchasing', () => {
    const item = shopItems[0];
    spyOn(discountServiceMock, 'purchase').and.returnValue(610.2);
    component.purchase(item);

    fixture.detectChanges();

    const messageEl = fixture.debugElement.query(
      By.css("[data-testId='purchased-message']")
    );
    const message = messageEl.nativeElement.innerText;

    expect(message).toBe(`${shopItems[0].name} was bought for ${610.2} GEL`);
  });
});
