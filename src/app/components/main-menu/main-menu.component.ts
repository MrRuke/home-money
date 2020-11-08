import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  public readonly menuList: MainMenuItem[] = [
    {
      title: 'Home',
      href: '#',
      icon: '',
    },
    {
      title: 'History',
      href: 'history',
      icon: '',
    },
    {
      title: 'Planning',
      href: 'planning',
      icon: '',
    },
    {
      title: 'Records',
      href: 'records',
      icon: '',
    },
  ];

  public trackByMenu(index: number): number {
    return index;
  }
}

export interface MainMenuItem {
  title: string;
  href: string;
  icon: string;
}
