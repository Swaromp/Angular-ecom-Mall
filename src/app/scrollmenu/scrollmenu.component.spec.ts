import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollmenuComponent } from './scrollmenu.component';

describe('ScrollmenuComponent', () => {
  let component: ScrollmenuComponent;
  let fixture: ComponentFixture<ScrollmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
