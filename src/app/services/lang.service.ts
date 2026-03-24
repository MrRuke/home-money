import { inject, Injectable } from "@angular/core";
import { APP_LANG_STORAGE_KEY } from "@app/core/constansts";
import { TranslocoService } from "@ngneat/transloco";

@Injectable({
    providedIn: "root",
})
export class LangService {
    private translocoService = inject(TranslocoService);

    public setActiveLang(lang: string): void {
        this.translocoService.setActiveLang(lang);
        localStorage.setItem(APP_LANG_STORAGE_KEY, lang);
    }

    public initLang(): void {
        const saveLang = this.getSavedLang();

        if (saveLang) {
            this.setActiveLang(saveLang);
        }
    }

    private getSavedLang(): string | null {
        return localStorage.getItem(APP_LANG_STORAGE_KEY);
    }
}
