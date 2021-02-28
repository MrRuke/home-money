import {
  Component,
  OnInit,
} from '@angular/core';
import { SubscriberComponent } from '@app/old/shared/core/subscriber';
import { MetaService } from '@app/old/shared/services/meta.service';
import { PlanningPageUseCases } from '@app/old/system/planning-page/planning-page.usecases';
import { PlanningPageViewModel } from '@app/old/system/planning-page/planning-page.viewmodel';

import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss'],
})
export class PlanningPageComponent extends SubscriberComponent implements OnInit {
  constructor(
    public readonly viewModel: PlanningPageViewModel,
    private metaService: MetaService,
    private useCases: PlanningPageUseCases,
  ) {
    super();
    this.metaService.setTitle('Планирование');
    this.metaService.addDescription('Страница планирования');
    this.metaService.addKeywords('планирование');
  }

  public ngOnInit(): void {
    this.subscribe(combineLatest([
      this.useCases.loadBill(),
      this.useCases.loadCategories(),
      this.useCases.loadEvents(),
    ]));
  }
}
