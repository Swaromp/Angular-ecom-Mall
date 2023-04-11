import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDeciceComponent } from './add-new-decice.component';

describe('AddNewDeciceComponent', () => {
  let component: AddNewDeciceComponent;
  let fixture: ComponentFixture<AddNewDeciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDeciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDeciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
