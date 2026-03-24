import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    OnInit,
    ViewEncapsulation,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { LangService } from "@app/services/lang.service";
import { ThemeService } from "@app/services/theme.service";
import { TranslocoService } from "@ngneat/transloco";
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
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, RouterLinkActive]
})
export class MainMenuComponent implements OnInit {
    private router = inject(Router);
    private translocoService = inject(TranslocoService);
    private themeService = inject(ThemeService);
    private langService = inject(LangService);
    private destroyRef = inject(DestroyRef);

    public items: {
        label: string;
        icon: string;
        routerLink: string[];
    }[] = [];

    public readonly languages: Language[] = [
        { name: "English", code: "en" },
        { name: "Русский", code: "ru" },
        { name: "Deutsch", code: "de" },
        { name: "Français", code: "fr" },
        { name: "Español", code: "es" },
    ];
    public readonly themes = [
        "md-light-indigo",
        "bootstrap4-light-blue",
        "bootstrap4-dark-blue",
    ];

    public selectedLanguage: Language | undefined;
    public selectedTheme: string | undefined;

    public ngOnInit(): void {
        this.translocoService
            .selectTranslate("PAGES.DASHBOARD")
            .pipe(
                takeUntilDestroyed(this.destroyRef),
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
            .subscribe();
    }

    public changeLanguage(event: { value: Language }): void {
        this.langService.setActiveLang((event.value as Language).code);
    }

    public changeTheme(event: { value: string }): void {
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
