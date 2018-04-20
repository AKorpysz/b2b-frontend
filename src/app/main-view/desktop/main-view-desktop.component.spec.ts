import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewDesktopComponent } from './main-view-desktop.component';

describe('MainViewDesktopComponent', () => {
  let component: MainViewDesktopComponent;
  let fixture: ComponentFixture<MainViewDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
