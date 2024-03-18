import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaserowComponent } from './showcaserow.component';

describe('ShowcaserowComponent', () => {
  let component: ShowcaserowComponent;
  let fixture: ComponentFixture<ShowcaserowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaserowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowcaserowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
