import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { Subscription } from 'rxjs/Subscription';
import { Unsubscriber } from '../../decorators/unsubscriber';
import { ScreenDetectorService } from '../../services/screen-detector/screen-detector.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
@Unsubscriber
export class SearchComponent  {
  public hints: string[];
  private hintsSubscription: Subscription;
  @Input()
  searchValue = '';

  constructor(private searchService: SearchService, private screenDetector: ScreenDetectorService) {
    this.hintsSubscription = this.searchService.searchHints$.subscribe(x => this.applySearchHints(x));
  }

  private applySearchHints(hints: string[]) {
    this.hints = hints;
  }

  getPrompts(boxValue: string) {
    boxValue = boxValue.trim();
    boxValue = boxValue.toLowerCase();
    this.searchService.sendRequestForData(boxValue);
  }

  clean() {
    this.searchValue = '';
    this.searchService.setFinishedSearch('');
  }

  search() {
    this.searchHint(this.searchValue);
  }

  searchHint(hint: string) {
      this.searchService.setFinishedSearch(hint);
  }

  isMobile() {
    return this.screenDetector.isMobile();
  }
}
