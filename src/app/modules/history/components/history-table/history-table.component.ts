import { Component, Input } from '@angular/core';
import { HistoryElement } from '@app/apis/history/models';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
})
export class HistoryTableComponent {
  @Input()
  public history: HistoryElement[] = [];
}
