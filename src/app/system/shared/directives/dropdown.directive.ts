import {
  Directive,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})

export class DropdownDirective {
  @HostBinding('class.open')
  public isOpen = false;

  @HostListener('click')
  public onClick() {
    this.isOpen = !this.isOpen;
  }
}
