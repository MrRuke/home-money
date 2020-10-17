import {
  Component,
  OnInit,
} from '@angular/core';
import { SubscriberComponent } from '@app/old/shared/core/subscriber';
import { MetaService } from '@app/old/shared/services/meta.service';
import { RecordsPageUseCases } from '@app/old/system/records-page/records-page.usecases';
import { RecordsPageViewModel } from '@app/old/system/records-page/records-page.viewmodel';
import { AppEvent } from '@app/old/system/shared/models/event.model';
import { combineLatest } from 'rxjs';

import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss'],
})
export class RecordsPageComponent  extends SubscriberComponent implements OnInit {
  constructor(
    public readonly viewModel: RecordsPageViewModel,
    private useCases: RecordsPageUseCases,
    private metaService: MetaService,
  ) {
    super();
    this.metaService.setTitle('Запись');
    this.metaService.addDescription('Страница записи');
    this.metaService.addKeywords('запись');
  }

  public ngOnInit(): void {
    this.subscribe(combineLatest([
      this.useCases.loadCategories(),
      this.useCases.loadEvents(),
    ]));
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
