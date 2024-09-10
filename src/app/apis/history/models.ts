export enum HistoryType {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME",
}

export type HistoryElement = {
  id: string;
  type: HistoryType;
  amount: number;
  category: number;
  date: string;
  description: string;
};

export type HistoryRequest = Omit<HistoryElement, "id">;
