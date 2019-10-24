import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appCard]',
})

export class CardDirective {
  @HostBinding('class') get getCard() {
    return 'col col-xs-12 col-sm-12 col-md-6 col-xl-6';
  }
}
