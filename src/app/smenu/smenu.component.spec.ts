import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMenuComponent } from './smenu.component';

describe('SMenuComponent', () => {
  let component: SMenuComponent;
  let fixture: ComponentFixture<SMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
