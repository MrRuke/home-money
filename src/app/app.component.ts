import { Component, OnInit } from "@angular/core";
import { ThemeService } from "./services/theme.service";
import { LangService } from "./services/lang.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private langService: LangService,
  ) {}

  public ngOnInit(): void {
    this.themeService.initTheme();
    this.langService.initLang();
  }
}
