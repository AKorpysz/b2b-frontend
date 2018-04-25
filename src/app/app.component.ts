import { Component, ChangeDetectorRef } from '@angular/core';
import { ScreenDetectorService } from './shared/services/screen-detector/screen-detector.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isMobile() {
    return this.screenDetector.isMobile();
  }

  constructor(private screenDetector: ScreenDetectorService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {
    this.screenDetector.setDetectors(changeDetectorRef, media);
  }
}
