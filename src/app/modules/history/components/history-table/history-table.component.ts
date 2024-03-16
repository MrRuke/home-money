import { Component, Input } from '@angular/core';
import { HistoryElement, HistoryType } from '@app/apis/history/models';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
})
export class HistoryTableComponent {
  @Input()
  public history: HistoryElement[] = [];

  public getTypeIcon = (type: HistoryType): string => type === HistoryType.INCOME ? 'pi-angle-double-up' : 'pi-angle-double-down';
}
