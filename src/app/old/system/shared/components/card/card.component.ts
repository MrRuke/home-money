import {
  Component,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public cardTitle = '';

  @Input()
  // eslint-disable-next-line @typescript-eslint/ban-types
  public rightHeaderTemplate?: TemplateRef<{}>;
}
