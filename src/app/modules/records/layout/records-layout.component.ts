import { Component } from '@angular/core';
import { CategoryRequest } from '@app/apis/categories/models';
import { RecordsUseCases } from '@app/modules/records/records.usecases';

@Component({
  selector: 'app-records-layout',
  templateUrl: './records-layout.component.html',
  styleUrls: ['./records-layout.component.scss'],
})
export class RecordsLayoutComponent {
  constructor(
    private useCases: RecordsUseCases,
  ) {
  }

  public createCategory(category: CategoryRequest): void {
    this.useCases.createCategory(category).subscribe();
  }
}
