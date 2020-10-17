export interface AppEvent {
  type: EventType;
  amount: number;
  category: number;
  date: string;
  description: string;
  id?: string;
  catName?: string;
}

export enum EventType {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME',
}
