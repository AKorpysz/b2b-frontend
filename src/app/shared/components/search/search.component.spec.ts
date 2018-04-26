import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from '../../services/search/search.service';
import { SearchServiceMock } from '../../../mocks/search.mock.service';
import { ScreenDetectorService } from '../../services/screen-detector/screen-detector.service';
import { ScreenDetectorMock } from '../../../mocks/screen-detector.mock.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [MaterialModule,   BrowserAnimationsModule ],
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
});
