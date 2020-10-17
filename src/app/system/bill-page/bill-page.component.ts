import {
  Component,
  OnInit,
} from '@angular/core';
import { SubscriberComponent } from 'app/shared/core/subscriber';
import { MetaService } from 'app/shared/services/meta.service';
import { BillPageUseCases } from 'app/system/bill-page/bill-page.usecases';
import { BillPageViewModel } from 'app/system/bill-page/bill-page.viewmodel';

import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss'],
})
export class BillPageComponent extends SubscriberComponent implements OnInit {
  constructor(
    public viewModel: BillPageViewModel,
    private useCases: BillPageUseCases,
    private metaService: MetaService,
  ) {
    super();
    this.metaService.setTitle('Счет');
    this.metaService.addDescription('Страница счета');
    this.metaService.addKeywords('счет');
  }

  public ngOnInit(): void {
    this.subscribe(combineLatest([
      this.useCases.loadBill(),
      this.useCases.loadCurrency(),
    ]));
  }

  public onRefresh(): void {
    this.subscribe(combineLatest([
      this.useCases.loadBill(),
      this.useCases.loadCurrency(),
    ]));
  }
}
