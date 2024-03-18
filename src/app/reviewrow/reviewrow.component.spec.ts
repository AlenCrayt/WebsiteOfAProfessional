import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewrowComponent } from './reviewrow.component';

describe('ReviewrowComponent', () => {
  let component: ReviewrowComponent;
  let fixture: ComponentFixture<ReviewrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
