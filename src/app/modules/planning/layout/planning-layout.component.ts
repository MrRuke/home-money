import { Component, OnInit } from '@angular/core';
import { BemModifiers } from '@app/old/shared/core/bem';
import { PlanningUseCases } from '../planning.usecases';
import { PlanningViewModel } from '../planning.viewmodel';
import { MetaService } from '@app/services/meta.service';

@Component({
  selector: 'app-planning-layout',
  templateUrl: './planning-layout.component.html',
  styleUrls: ['./planning-layout.component.scss'],
})
export class PlanningLayoutComponent implements OnInit {
  public readonly planning = this.viewModel.selectPlanning();

  constructor(
    private viewModel: PlanningViewModel,
    private useCases: PlanningUseCases,
    metaService: MetaService,
  ) {
    metaService.init({
      title: 'Planning',
      description: 'Page of planning',
      keywords: 'Planning',
    });
  }

  public ngOnInit(): void {
    this.useCases.loadValues().subscribe();
  }

  public getProgressBarModifiers(percent: number): BemModifiers {
    return {
      low: percent < 60,
      medium: percent > 60 && percent < 100,
      high: percent >= 100,
    };
  }

  public trackByPlanning(index: number): number {
    return index;
  }
}
