import {
  Component,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  @Input()
  public title = '';

  @Input()
  public actionsTemplate?: TemplateRef<{}>;

  @Input()
  public loading = false;
}
