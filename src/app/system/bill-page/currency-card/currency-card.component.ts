import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currency: any;
  currencies: string[] = ['USD', 'EURO'];
  rate: any[] = [];
  constructor() {
  }

  ngOnInit() {
    const {rates} = this.currency;
    this.rate.RUB =  1;
    this.rate.EURO = 1 / rates['RUB'];
    this.rate.USD = this.rate.EURO * rates['USD'];
  }

}
