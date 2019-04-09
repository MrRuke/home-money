import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  Meta,
  Title,
} from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { Subscription } from 'rxjs/Subscription';

import { BillService } from '../shared/services/bill.service';
import { Bill } from '../shared/models/bill.model';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss'],
})
export class BillPageComponent implements OnInit, OnDestroy {
  public currency: any;
  public bill: Bill;
  public isLoaded = false;
  private sub1: Subscription;
  private sub2: Subscription;

  constructor(
    private billService: BillService,
    private title: Title,
    private meta: Meta,
  ) {
    title.setTitle('Счет');
    meta.addTags([
      {
        name: 'keywords',
        content: 'счет',
      },
      {
        name: 'description',
        content: 'Страница счета',
      },
    ]);
  }

  public ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency('EUR'),
    ).subscribe((data: [Bill, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });
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
    this.isLoaded = false;
    this.sub2 = this.billService.getCurrency('EUR')
      .subscribe((currency: any) => {
        this.isLoaded = true;
      });
  }
}
