import { useState } from 'react';
import { useSelector } from 'react-redux';
import { booksAPI } from '@/books/booksApi';
import borrowRecordsAPI from '@/borrowrecords/borrowRecordsApi';
import { toast } from 'react-toastify';
import type { TBook } from '@/books/booksApi';
import type { RootState } from '@/app/store';

export const UserBooks = () => {
  const { data: booksData, isLoading, error } = booksAPI.useGetAllBooksQuery();
  const [createBorrowRecord] = borrowRecordsAPI.useCreateBorrowRecordMutation();

  const user = useSelector((state: RootState) => state.user);

  const [filters, setFilters] = useState({
    title: '',
    author: '',
    category_id: '',
  });

  const books = booksData?.data || [];

  const filteredBooks = books.filter((book) => {
    if (filters.title && !book.title.toLowerCase().includes(filters.title.toLowerCase())) return false;
    if (filters.author && !book.author.toLowerCase().includes(filters.author.toLowerCase())) return false;
    if (filters.category_id && book.genre !== filters.category_id) return false;
    return book.available_copies > 0;
  });

  const handleBorrow = async (book: TBook) => {
    if (!user.user_id) {
      toast.error('User not logged in');
      return;
    }
    try {
      await createBorrowRecord({
        user_id: user.user_id,
        book_id: book.book_id,
        borrow_date: new Date().toISOString(),
        due_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days
        status: 'Borrowed',
      }).unwrap();
      toast.success('Book borrowed successfully');
    } catch (error) {
      toast.error('Failed to borrow book');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Books</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title"
          value={filters.title}
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          className="input input-bordered"
        />
        <input
          type="text"
          placeholder="Search by author"
          value={filters.author}
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
          className="input input-bordered"
        />
        <input
          type="text"
          placeholder="Category ID"
          value={filters.category_id}
          onChange={(e) => setFilters({ ...filters, category_id: e.target.value })}
          className="input input-bordered"
        />
      </div>

      {isLoading && <p>Loading books...</p>}
      {error && <p className="text-red-500">Error fetching books</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <div key={book.book_id} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Available: {book.available_copies}</p>
            <div className="card-actions justify-end">
              <button onClick={() => handleBorrow(book)} className="btn btn-primary">Borrow</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};