import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HistoryElement, HistoryType } from '@app/apis/history/models';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
})
export class HistoryTableComponent {
  @Input()
  public history: HistoryElement[] = [];

  @Output()
  public remove = new EventEmitter<string>();

  public getTypeIcon = (type: HistoryType): string => type === HistoryType.INCOME ? 'pi-angle-double-up' : 'pi-angle-double-down';

  public handleRemove(eventId: string) {
    this.remove.emit(eventId);
  }
}
