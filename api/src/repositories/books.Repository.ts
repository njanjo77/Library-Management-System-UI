import { Op } from 'sequelize';
import { Book } from '../models';
import { Book as BookInterface } from '../types/books.Interface.js';

export const findAll = async (filters: {
  title?: string;
  author?: string;
  genre?: string;
}): Promise<BookInterface[]> => {
  const where: any = {};
  if (filters.title) {
    where.title = { [Op.like]: `%${filters.title}%` };
  }
  if (filters.author) {
    where.author = { [Op.like]: `%${filters.author}%` };
  }
  if (filters.genre) {
    where.genre = { [Op.like]: `%${filters.genre}%` };
  }

  const books = await Book.findAll({
    where,
    order: [['title', 'ASC']],
  });
  return books.map(b => b.toJSON() as BookInterface);
};

export const findById = async (id: number): Promise<BookInterface | null> => {
  const book = await Book.findByPk(id);
  return book ? book.toJSON() as BookInterface : null;
};

export const create = async (
  title: string,
  author: string,
  isbn?: string,
  genre?: string,
  available_copies: number = 1
): Promise<BookInterface> => {
  const book = await Book.create({
    title,
    author,
    isbn,
    genre,
    available_copies,
  });
  return book.toJSON() as BookInterface;
};

export const update = async (
  id: number,
  title?: string,
  author?: string,
  isbn?: string,
  genre?: string,
  available_copies?: number
): Promise<BookInterface | null> => {
  const [affectedCount] = await Book.update(
    {
      ...(title !== undefined && { title }),
      ...(author !== undefined && { author }),
      ...(isbn !== undefined && { isbn }),
      ...(genre !== undefined && { genre }),
      ...(available_copies !== undefined && { available_copies }),
      updated_at: new Date(),
    },
    { where: { book_id: id } }
  );
  if (affectedCount > 0) {
    const updatedBook = await Book.findByPk(id);
    return updatedBook ? updatedBook.toJSON() as BookInterface : null;
  }
  return null;
};

export const remove = async (id: number): Promise<boolean> => {
  const deletedCount = await Book.destroy({ where: { book_id: id } });
  return deletedCount > 0;
};

export const countBorrowRecordsForBook = async (bookId: number): Promise<number> => {
  const count = await Book.sequelize!.models.BorrowRecord.count({
    where: {
      book_id: bookId,
      status: { [Op.in]: ['Borrowed', 'Overdue'] },
    },
  });
  return count;
};