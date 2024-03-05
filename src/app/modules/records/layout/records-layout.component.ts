import { Component, OnInit } from '@angular/core';
import { CategoryRequest } from '@app/apis/categories/models';
import { HistoryRequest } from '@app/apis/history/models';
import { RecordsUseCases } from '@app/modules/records/records.usecases';

@Component({
  selector: 'app-records-layout',
  templateUrl: './records-layout.component.html',
  styleUrls: ['./records-layout.component.scss'],
})
export class RecordsLayoutComponent implements OnInit {
  public readonly categories = this.useCases.selectCategories();

  constructor(
    private useCases: RecordsUseCases,
  ) {
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
