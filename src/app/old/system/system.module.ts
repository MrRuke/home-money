import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDirective } from '@app/old/system/shared/directives/card.directive';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { HistoryPageComponent } from './history-page/history-page.component';
import { SystemComponent } from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { MomentPipe } from './shared/pipes/moment.pipe';
import { HistoryChartComponent } from './history-page/history-chart/history-chart.component';
import { HistoryEventsComponent } from './history-page/history-events/history-events.component';
import { HistoryDetailComponent } from './history-page/history-detail/history-detail.component';
import { HistoryFilterComponent } from './history-page/history-filter/history-filter.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { UsersService } from './shared/services/users.service';
import { PageComponent } from './shared/components/page/page.component';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    TranslateModule,
  ],
  declarations: [
    HistoryPageComponent,
    SystemComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective,
    MomentPipe,
    HistoryChartComponent,
    HistoryEventsComponent,
    HistoryDetailComponent,
    HistoryFilterComponent,
    FilterPipe,
    PageComponent,
    CardComponent,
    CardDirective,
  ],
  providers: [
    UsersService,
  ],
  exports: [
    MomentPipe,
  ],
})
export class SystemModule {
}
