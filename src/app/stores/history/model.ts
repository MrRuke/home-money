import { HistoryElement } from '@app/apis/history/models';
import { EntityState } from '@datorama/akita';

export interface HistoryState extends EntityState<HistoryElement> {
}
