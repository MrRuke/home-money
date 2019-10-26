import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MetaService } from '@app/shared/services/meta.service';
import { HistoryPageUseCases } from '@app/system/history-page/history-page.usecases';
import { HistoryPageViewModel } from '@app/system/history-page/history-page.viewmodel';

import {
  combineLatest,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
})
export class HistoryPageComponent implements OnInit, OnDestroy {
  private sub1: Subscription;

  constructor(
    public readonly viewModel: HistoryPageViewModel,
    private metaService: MetaService,
    private useCases: HistoryPageUseCases,
  ) {
    this.metaService.setTitle('История');
    this.metaService.addDescription('Страница истории');
    this.metaService.addKeywords('история');
  }

  public ngOnInit() {
    this.sub1 = combineLatest([
      this.useCases.loadCategories(),
      this.useCases.loadEvents(),
    ]).subscribe();
  }

  public ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

  private setOriginEvent(): void {
    //  this.filteredEvents = this.events.slice();
  }

  private toggleFilterVisibility(dir: boolean): void {
    //  this.isFilterVisible = dir;
  }

  public openFilter(): void {
    this.toggleFilterVisibility(true);
  }

  public onFilterApply(filterData): void {
    // this.toggleFilterVisibility(false);
    // this.setOriginEvent();
    //
    // const startPeriod = moment().startOf(filterData.period).startOf('d');
    // const endPeriod = moment().endOf(filterData.period).startOf('d');
    //
    // this.filteredEvents = this.filteredEvents
    //   .filter((e) => {
    //     return filterData.types.indexOf(e.type) !== -1;
    //   })
    //   .filter((e) => {
    //     return filterData.categories.indexOf(e.category.toString()) !== -1;
    //   })
    //   .filter((e) => {
    //     const momentDate = moment(e.date, 'DD.MM.YYYY HH:mm:ss');
    //     return momentDate.isBetween(startPeriod, endPeriod);
    //   });

    // this.calculateChartData();
  }

  public onFilterCancel(): void {
    this.toggleFilterVisibility(false);
    this.setOriginEvent();
    // this.calculateChartData();
  }
}
