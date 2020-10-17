import { Bill } from '@app/old/system/shared/models/bill.model';
import { InitialState } from '@app/old/system/shared/stores/initialStore';

export interface BillState extends InitialState {
  bill: Bill;
}
