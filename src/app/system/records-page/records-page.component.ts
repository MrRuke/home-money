import {
  Component,
  OnInit,
} from '@angular/core';
import { MetaService } from '@app/shared/services/meta.service';
import { RecordsPageUseCases } from '@app/system/records-page/records-page.usecases';
import { RecordsPageViewModel } from '@app/system/records-page/records-page.viewmodel';
import { AppEvent } from '@app/system/shared/models/event.model';
import { combineLatest } from 'rxjs';

import { Category } from '../shared/models/category.model';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss'],
})
export class RecordsPageComponent implements OnInit {
  constructor(
    public readonly viewModel: RecordsPageViewModel,
    private categoriesService: CategoriesService,
    private useCases: RecordsPageUseCases,
    private metaService: MetaService,
  ) {
    this.metaService.setTitle('Запись');
    this.metaService.addDescription('Страница записи');
    this.metaService.addKeywords('запись');
  }

  public ngOnInit() {
    combineLatest([
      this.useCases.loadCategories(),
      this.useCases.loadEvents(),
    ]).subscribe();
  }

  public addCategory(category: Category): void {
    this.useCases.addCategory(category).subscribe();
  }

  public updateCategory(category: Category): void {
    this.useCases.updateCategory(category).subscribe();
  }

  public addEvent(event: AppEvent): void {
    this.useCases.addEvent(event).subscribe();
  }
}
