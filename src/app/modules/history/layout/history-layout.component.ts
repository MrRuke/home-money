import { Component, inject, OnInit } from "@angular/core";
import { HistoryElement } from "@app/apis/history/models";

import { MetaService } from "@app/services/meta.service";
import { HistoryService } from "@app/stores/history/history.service";
import { Store } from "@ngrx/store";
import { selectHistory } from "@app/stores/history/history.selectors";
import { finalize, take, tap } from "rxjs";
import { HistoryActions } from "@app/stores/history/history.actions";
import { ConfirmationService, MessageService } from "primeng/api";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "app-history-layout",
  templateUrl: "./history-layout.component.html",
  styleUrls: ["./history-layout.component.scss"],
  providers: [ConfirmationService, MessageService],
})
export class HistoryLayoutComponent implements OnInit {
  private historyService = inject(HistoryService);
  private store = inject(Store);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private translocoService = inject(TranslocoService);

  public readonly history = this.store.select(selectHistory);
  public isLoading = false;

  constructor(metaService: MetaService) {
    metaService.init({
      title: "History",
      description: "Page of history",
      keywords: "History",
    });
  }

  public ngOnInit(): void {
    this.isLoading = true;

    this.historyService
      .load()
      .pipe(
        take(1),
        tap((res) => {
          this.store.dispatch(
            HistoryActions.retrievedHistoryList({ history: res })
          );
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  public onRemove(eventId: string): void {
    this.confirmationService.confirm({
      message: this.translocoService.translate("DELETE_CONFIRMATION.MESSAGE"),
      header: this.translocoService.translate("DELETE_CONFIRMATION.TITLE"),
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      accept: () => {
        this.historyService
          .delete(eventId)
          .pipe(
            take(1),
            tap(() => {
              this.store.dispatch(
                HistoryActions.removeHistory({ historyId: eventId })
              );
              this.messageService.add({
                severity: "success",
                summary: this.translocoService.translate(
                  "TOASTS.DELETE_SUCCESS.TITLE"
                ),
                detail: this.translocoService.translate(
                  "TOASTS.DELETE_SUCCESS.MESSAGE"
                ),
              });
            })
          )
          .subscribe();
      },
    });
  }

  public trackByHistory(index: number, history: HistoryElement): string {
    return history.id;
  }
}
