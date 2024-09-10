import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { APP_THEME_STORAGE_KEY } from "@app/core/constansts";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public switchTheme(theme: string): void {
    const themeLink = this.document.getElementById(
      "app-theme"
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + ".css";
      localStorage.setItem(APP_THEME_STORAGE_KEY, theme);
    }
  }

  public initTheme(): void {
    const savedTheme = this.getSavedTheme();

    if (savedTheme) {
      this.switchTheme(savedTheme);
    }
  }

  private getSavedTheme(): string | null {
    return localStorage.getItem(APP_THEME_STORAGE_KEY);
  }
}
