import {
  Component,
  OnInit,
} from '@angular/core';
import { BemModifiers } from '@app/old/shared/core/bem';
import { SubscriberComponent } from '@app/old/shared/core/subscriber';
import { MetaService } from '@app/old/shared/services/meta.service';
import { HistoryPageUseCases } from '@app/old/system/history-page/history-page.usecases';
import { HistoryPageViewModel } from '@app/old/system/history-page/history-page.viewmodel';

import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
})
export class HistoryPageComponent extends SubscriberComponent implements OnInit {
  public get modifiers(): BemModifiers {
    return {
      shipCommentVisible2: false,
      shipCommentVisible: true,
    };
  }

  constructor(
    public readonly viewModel: HistoryPageViewModel,
    private metaService: MetaService,
    private useCases: HistoryPageUseCases,
  ) {
    super();
    this.metaService.setTitle('История');
    this.metaService.addDescription('Страница истории');
    this.metaService.addKeywords('история');
  }

  public ngOnInit(): void {
    this.subscribe(combineLatest([
      this.useCases.loadCategories(),
      this.useCases.loadEvents(),
    ]));
  }

  private setOriginEvent(): void {
    //  this.filteredEvents = this.history.slice();
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
