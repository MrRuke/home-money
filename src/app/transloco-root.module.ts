import { NgModule } from '@angular/core';
import {
    provideTransloco,
    TranslocoModule
} from '@ngneat/transloco';
import { environment } from '../environments/environment.prod';
import { TranslocoHttpLoader } from './transloco-loader';

@NgModule({
    exports: [ TranslocoModule ],
    providers: [
        provideTransloco({
            config: {
                availableLangs: ['en', 'ru', 'de', 'fr', 'es'],
                defaultLang: 'en',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: environment.production,
            },
            loader: TranslocoHttpLoader
        }),
    ],
})
export class TranslocoRootModule {}
