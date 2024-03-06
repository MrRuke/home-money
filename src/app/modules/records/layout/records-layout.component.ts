import { Component, OnInit } from '@angular/core';
import { CategoryRequest } from '@app/apis/categories/models';
import { HistoryRequest } from '@app/apis/history/models';
import { SubscriberComponent } from '@app/core/subscriber';
import { MetaService } from '@app/services/meta.service';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-records-layout',
  templateUrl: './records-layout.component.html',
  styleUrls: ['./records-layout.component.scss'],
})
export class RecordsLayoutComponent extends SubscriberComponent implements OnInit {
  public readonly categories = this.recordsService.selectCategories();

  constructor(
    private recordsService: RecordsService,
    metaService: MetaService,
  ) {
    super();
    metaService.init({
      title: 'Records',
      description: 'Page of records',
      keywords: 'Records',
    });
  }

  public ngOnInit(): void {
    this.subscribe(this.recordsService.loadCategories());
  }

  public createCategory(category: CategoryRequest): void {
    this.subscribe(this.recordsService.createCategory(category));
  }

  public addHistoryElement(event: HistoryRequest): void {
    this.subscribe(this.recordsService.addHistoryElement(event));
  }
}
