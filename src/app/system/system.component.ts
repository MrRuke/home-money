import {
  Component,
  HostBinding,
} from '@angular/core';

import { fadeStateTrigger } from 'app/shared/animations/fade.animation';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  animations: [fadeStateTrigger],
})
export class SystemComponent {
  @HostBinding('@fade')
  public a = true;
}
