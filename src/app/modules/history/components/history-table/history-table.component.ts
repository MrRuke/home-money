import { Component, Input, OnInit } from '@angular/core';
import { HistoryElement, HistoryType } from '@app/apis/history/models';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
})
export class HistoryTableComponent implements OnInit {
  @Input()
  public history: HistoryElement[] = [];

  public readonly HistoryType = HistoryType;
  public readonly columns: string[] = ['No', 'Amount', 'Date', 'Type'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
