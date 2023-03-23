import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparemobileComponent } from './comparemobile.component';

describe('ComparemobileComponent', () => {
  let component: ComparemobileComponent;
  let fixture: ComponentFixture<ComparemobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparemobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparemobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
