import { Component, OnInit } from '@angular/core';
import { HistoryElement, HistoryType } from '@app/apis/history/models';

import { HistoryUseCases } from '../history.usecases';
import { HistoryViewModel } from '../history.viewmodel';

@Component({
  selector: 'app-history-layout',
  templateUrl: './history-layout.component.html',
  styleUrls: ['./history-layout.component.scss'],
})
export class HistoryLayoutComponent implements OnInit {
  public readonly history = this.viewModel.selectHistory();

  constructor(
    private viewModel: HistoryViewModel,
    private useCases: HistoryUseCases,
  ) {
  }

  public ngOnInit(): void {
    this.useCases.loadHistory().subscribe();
  }

  public trackByHistory(index: number, history: HistoryElement): string {
    return history.id;
  }
}
