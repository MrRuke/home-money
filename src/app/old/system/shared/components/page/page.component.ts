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
  public headerTitle = '';

  @Input()
  // eslint-disable-next-line @typescript-eslint/ban-types
  public actionsTemplate?: TemplateRef<{}>;

  @Input()
  public loading = false;
}
