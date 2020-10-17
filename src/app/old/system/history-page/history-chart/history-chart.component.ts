import {
  Component,
  Input,
} from '@angular/core';
import { HistoryPageViewModel } from '@app/old/system/history-page/history-page.viewmodel';

@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss'],
})
export class HistoryChartComponent {
  @Input()
  public data: HistoryPageViewModel.ChartData[];
}
