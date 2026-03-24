import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatToolbar, MatIconButton, MatIcon, TranslocoPipe]
})
export class HeaderComponent {
}
