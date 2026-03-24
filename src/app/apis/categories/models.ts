export type Category = {
    id: number;
    name: string;
    limit: number;
};

export type CategoryRequest = Omit<Category, 'id'>;