import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SubscriberComponent } from "@app/core/subscriber";
import { ThemeService } from "@app/services/theme.service";
import { TranslocoService } from "@ngneat/transloco";
import { MenuItem } from "primeng/api";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MainMenuComponent extends SubscriberComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor(
    private router: Router,
    private translocoService: TranslocoService,
    private themeService: ThemeService,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subscribe(
      this.translocoService.selectTranslate('PAGES.DASHBOARD').pipe(
        tap(() => {
          this.items = [
            {
              label: this.translocoService.translate('PAGES.DASHBOARD'),
              icon: "pi pi-fw pi-home",
              routerLink: ["/"],
            },
            {
              label: this.translocoService.translate('PAGES.HISTORY'),
              icon: "pi pi-fw pi-history",
              routerLink: ["/history"],
            },
            {
              label: this.translocoService.translate('PAGES.PLANNING'),
              icon: "pi pi-fw pi-book",
              routerLink: ["/planning"],
            },
            {
              label: this.translocoService.translate('PAGES.RECORDS'),
              icon: "pi pi-fw pi-pencil",
              routerLink: ["/records"],
            },
          ];
        })
      )
    );
  }

  public changeTheme(theme: string): void {
    this.themeService.switchTheme(theme);
  }

  public changeLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
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
