import { Component, OnInit } from '@angular/core';
import { AccountElement } from '@app/apis/accounts/models';
import { HistoryElement } from '@app/apis/history/models';
import { DashboardUseCases } from '../dashboard.usecases';
import { DashboardViewModel } from '../dashboard.viewmodel';

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
  ) {

  }

  public ngOnInit(): void {
    this.useCases.loadAccounts().subscribe();
  }

  public trackByAccounts(index: number, account: AccountElement): number {
    return account.id;
  }
}
