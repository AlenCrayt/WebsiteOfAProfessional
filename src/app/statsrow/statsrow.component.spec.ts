import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsrowComponent } from './statsrow.component';

describe('StatsrowComponent', () => {
  let component: StatsrowComponent;
  let fixture: ComponentFixture<StatsrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
