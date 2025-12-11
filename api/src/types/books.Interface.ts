export interface Book {
  book_id: number;
  title: string;
  author: string;
  isbn?: string | null;
  genre?: string | null;
  available_copies: number;
  created_at: Date;
  updated_at: Date;
}

export interface BookInput {
  title: string;
  author: string;
  isbn?: string;
  genre?: string;
  available_copies: number;
}

export interface BookUpdateInput {
  title?: string;
  author?: string;
  isbn?: string;
  genre?: string;
  available_copies?: number;
}