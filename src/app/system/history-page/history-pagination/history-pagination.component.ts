import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-history-pagination',
  templateUrl: './history-pagination.component.html',
  styleUrls: ['./history-pagination.component.scss']
})
export class HistoryPaginationComponent {
  @Input() public currencyPage: number | string = 1;
  @Input() public maxPage: number | string = 1;
  @Output() public changePage = new EventEmitter<number>();

  private errorPage = false;

  public onChange({value}) {
    return this.checkValue(value);
  }

  private checkValue(value) {
    if (value.match(/[^-0-9]/) || value > this.maxPage || value < 0) {
      this.errorPage = true;
      return false;
    } else {
      this.changePage.emit(value);
      this.errorPage = false;
      return this.currencyPage = value;
    }
  }
  public pageTransition(status = false) {
    return status ? this.checkValue(+this.currencyPage + 1) : this.checkValue(+this.currencyPage - 1);
  }

}
