import { AccountElement } from '@app/apis/accounts/models';
import { EntityState } from '@datorama/akita';

export interface AccountsState extends EntityState<AccountElement> {
}
