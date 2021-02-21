import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  public readonly menuList: MainMenuItem[] = [
    {
      title: 'Home',
      href: '/',
      icon: 'home',
    },
    {
      title: 'History',
      href: 'history',
      icon: 'history',
    },
    {
      title: 'Planning',
      href: 'planning',
      icon: 'archive',
    },
    {
      title: 'Records',
      href: 'records',
      icon: 'mode',
    },
  ];

  constructor(
    private router: Router,
  ) {
  }

  public trackByMenu(index: number): number {
    return index;
  }

  public isActive(url: string): boolean {
    return this.router.isActive(url, true);
  }
}

export interface MainMenuItem {
  title: string;
  href: string;
  icon: string;
}
