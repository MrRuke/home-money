import { Component, inject, OnInit } from "@angular/core";
import { ThemeService } from "./services/theme.service";
import { LangService } from "./services/lang.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
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
