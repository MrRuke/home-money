import { Component, OnInit } from '@angular/core';
import { AccountElement } from '@app/apis/accounts/models';
import { DashboardUseCases } from '../dashboard.usecases';
import { DashboardViewModel } from '../dashboard.viewmodel';
import { MetaService } from '@app/services/meta.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  public readonly accounts = this.viewModel.selectAccounts();

  constructor(
    private viewModel: DashboardViewModel,
    private useCases: DashboardUseCases,
    metaService: MetaService,
  ) {
    metaService.init({
      title: 'Dashboard',
      description: 'Page of dashboard',
      keywords: 'Dashboard',
    });
  }

  public ngOnInit(): void {
    this.useCases.loadAccounts().subscribe();
  }

  public trackByAccounts(index: number, account: AccountElement): number {
    return account.id;
  }
}
