import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from "@angular/core";
import { AccountElement } from "@app/apis/accounts/models";
import { MetaService } from "@app/services/meta.service";
import { AccountFacade } from "@app/stores/account/account.facade";
import { TranslocoService } from "@ngneat/transloco";
import { CustomButtonComponent } from "../../../components/custom-button/custom-button.component";
import { CreateAccountDialogComponent } from "../create-account-dialog/create-account-dialog.component";
import { AppCostPipe } from "../../../services/cost.pipe";

@Component({
    selector: "app-dashboard-layout",
    templateUrl: "./dashboard-layout.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CustomButtonComponent, CreateAccountDialogComponent, AppCostPipe]
})
export class DashboardLayoutComponent implements OnInit {
    private translocoService = inject(TranslocoService);
    private accountFacade = inject(AccountFacade);

    public isCreateDialogVisible = signal(false);
    public readonly accounts = this.accountFacade.accounts;
    public readonly isLoading = this.accountFacade.isLoading;

    constructor() {
        const metaService = inject(MetaService);

        metaService.init({
            title: "Dashboard",
            description: "Page of dashboard",
            keywords: "Dashboard",
        });
    }

    public ngOnInit(): void {
        this.accountFacade.loadAccounts();
        console.log('t', this.accounts());
    }

    public onRemove(event: Event, accountId: number): void {
        console.log(event, accountId);
    // this.confirmationService.confirm({
    //   target: event.target as EventTarget,
    //   message: this.translocoService.translate("DELETE_CONFIRMATION.MESSAGE"),
    //   header: this.translocoService.translate("DELETE_CONFIRMATION.TITLE"),
    //   icon: "pi pi-info-circle",
    //   acceptButtonStyleClass: "p-button-danger p-button-text",
    //   rejectButtonStyleClass: "p-button-text p-button-text",
    //   accept: () => {
    //     this.accountFacade.removeAccount(accountId);
    //     this.messageService.add({
    //       severity: "success",
    //       summary: this.translocoService.translate(
    //         "TOASTS.DELETE_SUCCESS.TITLE"
    //       ),
    //       detail: this.translocoService.translate(
    //         "TOASTS.DELETE_SUCCESS.MESSAGE"
    //       ),
    //     });
    //   },
    // });
    }

    public onClose(): void {
        this.isCreateDialogVisible.set(false);
    }

    public handleOpenCreateDialog(): void {
        this.isCreateDialogVisible.set(true);
    }

    public trackByAccounts(index: number, account: AccountElement): string {
        return account.id;
    }
}
