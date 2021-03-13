import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { ItemDataService } from '../services/item-data.service';
import { takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  
  filterControl = new FormControl('');

  constructor(private itemDataService: ItemDataService) { }

  ngOnInit(): void {
    this.filterControl.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(c => {
      this.itemDataService.updateFilter(c);
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
