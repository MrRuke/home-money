import { Component, OnInit } from '@angular/core';
import { PlanningUseCases } from '../planning.usecases';
import { PlanningViewModel } from '../planning.viewmodel';

@Component({
  selector: 'app-planning-layout',
  templateUrl: './planning-layout.component.html',
  styleUrls: ['./planning-layout.component.scss']
})
export class PlanningLayoutComponent implements OnInit {
  public readonly planning = this.viewModel.selectPlanning();

  constructor(
    private viewModel: PlanningViewModel,
    private useCases: PlanningUseCases,
  ) { }

  public ngOnInit(): void {
    this.useCases.loadValues().subscribe();
  }
}
