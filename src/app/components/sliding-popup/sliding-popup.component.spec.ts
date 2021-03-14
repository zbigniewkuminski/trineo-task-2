import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingPopupComponent } from './sliding-popup.component';

describe('SlidingPopupComponent', () => {
  let component: SlidingPopupComponent;
  let fixture: ComponentFixture<SlidingPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
