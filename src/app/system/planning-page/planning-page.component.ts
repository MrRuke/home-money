import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MetaService } from '@app/shared/services/meta.service';
import { PlanningPageUseCases } from '@app/system/planning-page/planning-page.usecases';
import { PlanningPageViewModel } from '@app/system/planning-page/planning-page.viewmodel';

import {
  combineLatest,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss'],
})
export class PlanningPageComponent implements OnInit, OnDestroy {
  private sub1: Subscription;

  constructor(
    public readonly viewModel: PlanningPageViewModel,
    private metaService: MetaService,
    private useCases: PlanningPageUseCases,
  ) {
    this.metaService.setTitle('Планирование');
    this.metaService.addDescription('Страница планирования');
    this.metaService.addKeywords('планирование');
  }

  public ngOnInit() {
    this.sub1 = combineLatest([
      this.useCases.loadBill(),
      this.useCases.loadCategories(),
      this.useCases.loadEvents(),
    ]).subscribe();
  }

  public ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
