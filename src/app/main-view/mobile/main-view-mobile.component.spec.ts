import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewMobileComponent } from './main-view-mobile.component';

describe('MainViewMobileComponent', () => {
  let component: MainViewMobileComponent;
  let fixture: ComponentFixture<MainViewMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
