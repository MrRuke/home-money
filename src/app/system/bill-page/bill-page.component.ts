import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MetaService } from '@app/shared/services/meta.service';
import { BillPageUseCases } from '@app/system/bill-page/bill-page.usecases';
import { BillPageViewModel } from '@app/system/bill-page/bill-page.viewmodel';

import {
  combineLatest,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss'],
})
export class BillPageComponent implements OnInit, OnDestroy {
  private sub1: Subscription;
  private sub2: Subscription;

  constructor(
    public viewModel: BillPageViewModel,
    private useCases: BillPageUseCases,
    private metaService: MetaService,
  ) {
    this.metaService.setTitle('Счет');
    this.metaService.addDescription('Страница счета');
    this.metaService.addKeywords('счет');
  }

  public ngOnInit() {
    this.sub1 = combineLatest([
      this.useCases.loadBill(),
      this.useCases.loadCurrency(),
    ]).subscribe();
  }

  public ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

  public onRefresh(): void {
    this.sub2 = combineLatest([
      this.useCases.loadBill(),
      this.useCases.loadCurrency(),
    ]).subscribe();
  }
}
