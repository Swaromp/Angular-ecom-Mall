import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToKartComponent } from './add-to-kart.component';

describe('AddToKartComponent', () => {
  let component: AddToKartComponent;
  let fixture: ComponentFixture<AddToKartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToKartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
