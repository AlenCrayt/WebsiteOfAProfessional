import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedjobsrowComponent } from './completedjobsrow.component';

describe('CompletedjobsrowComponent', () => {
  let component: CompletedjobsrowComponent;
  let fixture: ComponentFixture<CompletedjobsrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedjobsrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedjobsrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
