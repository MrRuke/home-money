export enum HistoryType {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME',
}

export interface HistoryRequest {
  type: HistoryType;
  amount: number;
  category: number;
  date: string;
  description: string;
}

export interface History extends HistoryRequest {
  id: string;
  catName: string;
}
