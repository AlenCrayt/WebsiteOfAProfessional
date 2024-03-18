import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterrowComponent } from './footerrow.component';

describe('FooterrowComponent', () => {
  let component: FooterrowComponent;
  let fixture: ComponentFixture<FooterrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
