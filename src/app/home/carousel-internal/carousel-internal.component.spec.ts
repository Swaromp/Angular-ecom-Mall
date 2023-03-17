import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselInternalComponent } from './carousel-internal.component';

describe('CarouselInternalComponent', () => {
  let component: CarouselInternalComponent;
  let fixture: ComponentFixture<CarouselInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselInternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
