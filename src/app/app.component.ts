import { Component } from '@angular/core';
import { locales } from '@app/shared/i18n/ru';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    translateService: TranslateService,
  ) {
    translateService.setDefaultLang('ru');
    translateService.use('ru');
    translateService.setTranslation('ru', locales);
  }
}
