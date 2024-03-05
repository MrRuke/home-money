import { Component, OnInit } from '@angular/core';
import { CategoryRequest } from '@app/apis/categories/models';
import { HistoryRequest } from '@app/apis/history/models';
import { RecordsUseCases } from '@app/modules/records/records.usecases';
import { MetaService } from '@app/services/meta.service';

@Component({
  selector: 'app-records-layout',
  templateUrl: './records-layout.component.html',
  styleUrls: ['./records-layout.component.scss'],
})
export class RecordsLayoutComponent implements OnInit {
  public readonly categories = this.useCases.selectCategories();

  constructor(
    private useCases: RecordsUseCases,
    metaService: MetaService,
  ) {
    metaService.init({
      title: 'Records',
      description: 'Page of records',
      keywords: 'Records',
    });
  }

  public ngOnInit(): void {
    this.useCases.loadCategories().subscribe();
  }

  public createCategory(category: CategoryRequest): void {
    this.useCases.createCategory(category).subscribe();
  }

  public addHistoryElement(event: HistoryRequest): void {
    this.useCases.addHistoryElement(event).subscribe();
  }
}
