import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HistoryElement, HistoryType } from "@app/apis/history/models";

@Component({
  selector: "app-history-table",
  templateUrl: "./history-table.component.html",
  styleUrls: ["./history-table.component.scss"],
})
export class HistoryTableComponent {
  @Input()
  public history: HistoryElement[] = [];

  @Output()
  public remove = new EventEmitter<string>();

  public getTypeIcon = (type: HistoryType): string =>
    this.isIncome(type) ? "pi-angle-double-up" : "pi-angle-double-down";

  public isIncome = (type: HistoryType): boolean => type === HistoryType.INCOME;

  public getTypeText = (type: HistoryType): string =>
    this.isIncome(type) ? "HISTORY.TYPE_INCOME" : "HISTORY.TYPE_OUTCOME";

  public handleRemove(eventId: string) {
    this.remove.emit(eventId);
  }
}
