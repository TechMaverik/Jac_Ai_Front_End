import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpenseJourneyWrapperComponent } from './expense-journey-wrapper.component';

describe('ExpenseJourneyWrapperComponent', () => {
  let component: ExpenseJourneyWrapperComponent;
  let fixture: ComponentFixture<ExpenseJourneyWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseJourneyWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseJourneyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
