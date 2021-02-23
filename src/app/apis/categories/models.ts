export interface CategoryRequest {
  name: string;
  limit: number;
}

export interface Category extends CategoryRequest {
  id: number;
}
