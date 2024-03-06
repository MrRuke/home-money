import { Component, OnInit } from '@angular/core';
import { AccountElement } from '@app/apis/accounts/models';
import { MetaService } from '@app/services/meta.service';
import { SubscriberComponent } from '@app/core/subscriber';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent extends SubscriberComponent implements OnInit {
  public readonly accounts = this.dashboardService.selectAccounts();

  constructor(
    private dashboardService: DashboardService,
    metaService: MetaService,
  ) {
    super();
    metaService.init({
      title: 'Dashboard',
      description: 'Page of dashboard',
      keywords: 'Dashboard',
    });
  }

  public ngOnInit(): void {
    this.subscribe(this.dashboardService.loadAccounts());
  }

  public trackByAccounts(index: number, account: AccountElement): number {
    return account.id;
  }
}
