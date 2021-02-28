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
  public rightHeaderTemplate?: TemplateRef<{}>;
}
