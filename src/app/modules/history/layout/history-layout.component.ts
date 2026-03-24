import { Component, inject, OnInit } from "@angular/core";
import { HistoryElement } from "@app/apis/history/models";

import { MetaService } from "@app/services/meta.service";
import { HistoryFacade } from "@app/stores/history/history.facade";
import { TranslocoService } from "@ngneat/transloco";

@Component({
    selector: "app-history-layout",
    templateUrl: "./history-layout.component.html",
    standalone: false
})
export class HistoryLayoutComponent implements OnInit {
    private translocoService = inject(TranslocoService);
    private historyFacade = inject(HistoryFacade);

    public readonly history = this.historyFacade.history;
    public readonly isLoading = this.historyFacade.isLoading;

    constructor(metaService: MetaService) {
        metaService.init({
            title: "History",
            description: "Page of history",
            keywords: "History",
        });
    }

    public ngOnInit(): void {
        this.historyFacade.loadHistory();
        setTimeout(() => {
            console.log('test', this.history());
        }, 2000);
    }

    public onRemove(eventId: string): void {
        console.log('eventId', eventId);
    // this.confirmationService.confirm({
    //   message: this.translocoService.translate("DELETE_CONFIRMATION.MESSAGE"),
    //   header: this.translocoService.translate("DELETE_CONFIRMATION.TITLE"),
    //   icon: "pi pi-info-circle",
    //   acceptButtonStyleClass: "p-button-danger p-button-text",
    //   rejectButtonStyleClass: "p-button-text p-button-text",
    //   accept: () => {
    //     this.historyFacade.removeHistory(eventId);
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

    public trackByHistory(index: number, history: HistoryElement): string {
        return history.id;
    }
}
