import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicErrorComponent } from './basic-error.component';

describe('BasicErrorComponent', () => {
  let component: BasicErrorComponent;
  let fixture: ComponentFixture<BasicErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
