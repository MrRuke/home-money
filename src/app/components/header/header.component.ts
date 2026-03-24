import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideBellRing, LucideChartNoAxesCombined, LucideChevronDown, LucideUser } from '@lucide/angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        LucideBellRing,
        LucideChartNoAxesCombined,
        LucideUser,
        LucideChevronDown,
    ]
})
export class HeaderComponent {
}
