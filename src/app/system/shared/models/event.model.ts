export interface AppEvent {
  type: string;
  amount: number;
  category: number;
  date: string;
  description: string;
  id?: string;
  catName?: string;
}
