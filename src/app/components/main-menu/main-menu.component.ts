import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainMenuComponent {
  public readonly items: MenuItem[] = [
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/']
    },
    {
        label: 'History',
        icon: 'pi pi-fw pi-history',
        routerLink: ['/history']
    },
    {
        label: 'Planning',
        icon: 'pi pi-fw pi-book',
        routerLink: ['/planning']
    },
    {
        label: 'Records',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['/records']
    }
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
