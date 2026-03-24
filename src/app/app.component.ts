import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { LangService } from "./services/lang.service";
import { ThemeService } from "./services/theme.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AppComponent implements OnInit {
    private themeService = inject(ThemeService);
    private langService = inject(LangService);

    public ngOnInit(): void {
        this.themeService.initTheme();
        this.langService.initLang();
    }
}
