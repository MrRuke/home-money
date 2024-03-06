import { Component, OnInit } from '@angular/core';
import { MetaService } from '@app/services/meta.service';
import { SubscriberComponent } from '@app/core/subscriber';
import { PlanningService } from '../planning.service';

@Component({
  selector: 'app-planning-layout',
  templateUrl: './planning-layout.component.html',
  styleUrls: ['./planning-layout.component.scss'],
})
export class PlanningLayoutComponent extends SubscriberComponent implements OnInit {
  public readonly planning = this.planningService.selectPlanning();

  constructor(
    private planningService: PlanningService,
    metaService: MetaService,
  ) {
    super();
    metaService.init({
      title: 'Planning',
      description: 'Page of planning',
      keywords: 'Planning',
    });
  }

  public ngOnInit(): void {
    this.subscribe(this.planningService.loadValues());
  }

  public getProgressBarModifiers(percent: number): string {
    if (percent < 60) {
      return 'app-planning-layout__progress-item-bar--low';
    } else if (percent >= 100) {
      return 'app-planning-layout__progress-item-bar--high';
    } else {
      return 'app-planning-layout__progress-item-bar--medium';
    }
  }

  public trackByPlanning(index: number): number {
    return index;
  }
}
