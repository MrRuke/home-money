import { Component, OnInit } from '@angular/core';
import { HistoryElement } from '@app/apis/history/models';

import { HistoryUseCases } from '../history.usecases';
import { HistoryViewModel } from '../history.viewmodel';
import { MetaService } from '@app/services/meta.service';

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
    metaService: MetaService,
  ) {
    metaService.init({
      title: 'History',
      description: 'Page of history',
      keywords: 'History',
    });
  }

  public ngOnInit(): void {
    this.useCases.loadHistory().subscribe();
  }

  public trackByHistory(index: number, history: HistoryElement): string {
    return history.id;
  }
}
