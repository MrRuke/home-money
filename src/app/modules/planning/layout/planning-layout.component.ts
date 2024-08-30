import { Component, inject, OnInit } from "@angular/core";
import { MetaService } from "@app/services/meta.service";
import { PlanningService } from "../planning.service";
import { finalize, take } from "rxjs/operators";

@Component({
  selector: "app-planning-layout",
  templateUrl: "./planning-layout.component.html",
  styleUrls: ["./planning-layout.component.scss"],
})
export class PlanningLayoutComponent implements OnInit {
  private planningService = inject(PlanningService);
  public readonly planning = this.planningService.selectPlanning();
  public isLoading = false;

  constructor(metaService: MetaService) {
    metaService.init({
      title: "Planning",
      description: "Page of planning",
      keywords: "Planning",
    });
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.planningService
      .loadValues()
      .pipe(
        take(1),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  public getProgressBarModifiers(percent: number): string {
    if (percent < 60) {
      return "app-planning-layout__progress-item-bar--low";
    } else if (percent >= 100) {
      return "app-planning-layout__progress-item-bar--high";
    } else {
      return "app-planning-layout__progress-item-bar--medium";
    }
  }

  public trackByPlanning(index: number): number {
    return index;
  }
}
