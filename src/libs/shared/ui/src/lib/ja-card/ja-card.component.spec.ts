import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JaCardComponent } from './ja-card.component';

describe('JaCardComponent', () => {
  let component: JaCardComponent;
  let fixture: ComponentFixture<JaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JaCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
