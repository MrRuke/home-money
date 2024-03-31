import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SubscriberComponent } from "@app/core/subscriber";
import { LangService } from "@app/services/lang.service";
import { ThemeService } from "@app/services/theme.service";
import { TranslocoService } from "@ngneat/transloco";
import { MenuItem } from "primeng/api";
import { DropdownChangeEvent } from "primeng/dropdown";
import { tap } from "rxjs/operators";

interface Language {
  name: string;
  code: string;
}

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MainMenuComponent extends SubscriberComponent implements OnInit {
  public items: MenuItem[] = [];

  public readonly languages: Language[] = [
    { name: "English", code: "en" },
    { name: "Русский", code: "ru" },
  ];
  public readonly themes = [
    "md-light-indigo",
    "bootstrap4-light-blue",
    "bootstrap4-dark-blue",
  ];

  public selectedLanguage: Language | undefined;
  public selectedTheme: string | undefined;

  constructor(
    private router: Router,
    private translocoService: TranslocoService,
    private themeService: ThemeService,
    private langService: LangService,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subscribe(
      this.translocoService.selectTranslate("PAGES.DASHBOARD").pipe(
        tap(() => {
          this.items = [
            {
              label: this.translocoService.translate("PAGES.DASHBOARD"),
              icon: "pi pi-fw pi-home",
              routerLink: ["/"],
            },
            {
              label: this.translocoService.translate("PAGES.HISTORY"),
              icon: "pi pi-fw pi-history",
              routerLink: ["/history"],
            },
            {
              label: this.translocoService.translate("PAGES.PLANNING"),
              icon: "pi pi-fw pi-book",
              routerLink: ["/planning"],
            },
            {
              label: this.translocoService.translate("PAGES.RECORDS"),
              icon: "pi pi-fw pi-pencil",
              routerLink: ["/records"],
            },
          ];
        })
      )
    );
  }

  public changeLanguage(event: DropdownChangeEvent): void {
    this.langService.setActiveLang((event.value as Language).code);
  }

  public changeTheme(event: DropdownChangeEvent): void {
    this.themeService.switchTheme(event.value as string);
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
