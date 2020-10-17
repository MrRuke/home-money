export interface CategoryRequest {
  name: string;
  capacity: number;
}

export interface Category extends CategoryRequest {
  id: number;
}
