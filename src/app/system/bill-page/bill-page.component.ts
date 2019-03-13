import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from "../shared/services/bill.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';
import {Subscription} from "rxjs/Subscription";
import {Bill} from "../shared/models/bill.model";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  sub2: Subscription;
  currency: any;
  bill: Bill;
  isLoaded = false;

  constructor(private billService: BillService,
              private title: Title,
              private meta: Meta) {
    title.setTitle('Счет');
    meta.addTags([
      {name: 'keywords', content: 'счет'},
      {name: 'description', content: 'Страница счета'}
    ])
  }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency('EUR')
    ).subscribe((data: [Bill, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    })
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

  onRefresh() {
    this.isLoaded = false;
    this.sub2 = this.billService.getCurrency('EUR')
      .subscribe((currency: any) => {
        this.isLoaded = true;
      });
  }
}
