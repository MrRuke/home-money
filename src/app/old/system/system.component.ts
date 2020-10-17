import {
  Component,
  HostBinding,
} from '@angular/core';

import { fadeStateTrigger } from '@app/old/shared/animations/fade.animation';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  animations: [fadeStateTrigger],
})
export class SystemComponent {
  @HostBinding('@fade')
  public a = true;
}
