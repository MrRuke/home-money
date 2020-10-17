import { Bill } from 'app/system/shared/models/bill.model';
import { InitialState } from 'app/system/shared/stores/initialStore';

export interface BillState extends InitialState {
  bill: Bill;
}
