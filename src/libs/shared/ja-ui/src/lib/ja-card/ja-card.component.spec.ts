import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JaCardComponent } from './ja-card.component';
import { CardModule } from 'primeng/card'

describe('JaCardComponent', () => {
  let component: JaCardComponent;
  let fixture: ComponentFixture<JaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JaCardComponent],
      imports: [
        CardModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
