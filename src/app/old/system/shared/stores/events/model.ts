import { AppEvent } from '@app/old/system/shared/models/event.model';
import { EntityState } from '@datorama/akita';

export interface EventsState extends EntityState<AppEvent> {
}
