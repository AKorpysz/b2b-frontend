import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from './search.component';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from '../../services/search/search.service';
import { SearchServiceMock } from '../../../mocks/search.mock.service';
import { ScreenDetectorService } from '../../services/screen-detector/screen-detector.service';
import { ScreenDetectorMock } from '../../../mocks/screen-detector.mock.service';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [MaterialModule, FormsModule,  BrowserAnimationsModule ],
      providers: [
        { provide: SearchService, useClass: SearchServiceMock },
        { provide: ScreenDetectorService, useClass: ScreenDetectorMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send request for search prompts', () => {
    fail();
  });

  it('should clean search after click', () => {
    fail();
  });

  it('should search after writing text', () => {
    fail();
  });

  it('should search after passing hint', () => {
    fail();
  });
});
