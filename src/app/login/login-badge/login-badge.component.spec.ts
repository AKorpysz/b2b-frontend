import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBadgeComponent } from './login-badge.component';

describe('LoginBadgeComponent', () => {
  let component: LoginBadgeComponent;
  let fixture: ComponentFixture<LoginBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
