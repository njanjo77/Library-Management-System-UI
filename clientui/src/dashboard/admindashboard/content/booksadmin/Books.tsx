import { useState } from 'react';
import { booksAPI } from '@/books/booksApi';
import type { TBook } from '@/books/booksApi';
import { toast } from 'react-toastify';

export const Books = () => {
  const { data: booksData, isLoading: booksLoading, error: booksError, refetch } = booksAPI.useGetAllBooksQuery();
  const [createBook] = booksAPI.useCreateBookMutation();
  const [updateBook] = booksAPI.useUpdateBookMutation();
  const [deleteBook] = booksAPI.useDeleteBookMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<TBook | null>(null);
  const [formData, setFormData] = useState<Partial<TBook>>({});

  const books = booksData?.data || [];

  const handleAdd = () => {
    setEditingBook(null);
    setFormData({});
    setIsModalOpen(true);
  };

  const handleEdit = (book: TBook) => {
    setEditingBook(book);
    setFormData(book);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id).unwrap();
        toast.success('Book deleted successfully');
        refetch();
      } catch (error) {
        toast.error('Failed to delete book');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingBook) {
        await updateBook({ id: editingBook.book_id!, data: formData }).unwrap();
        toast.success('Book updated successfully');
      } else {
        await createBook(formData).unwrap();
        toast.success('Book created successfully');
      }
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      toast.error('Failed to save book');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Books Management</h1>
        <button onClick={handleAdd} className="btn btn-primary">Add Book</button>
      </div>

      {booksLoading && <p>Loading books...</p>}
      {booksError && <p className="text-red-500">Error fetching books</p>}

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Genre</th>
              <th>Available Copies</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.book_id}>
                <td>{book.book_id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.genre}</td>
                <td>{book.available_copies}</td>
                <td>
                  <button onClick={() => handleEdit(book)} className="btn btn-sm btn-warning mr-2">Edit</button>
                  <button onClick={() => handleDelete(book.book_id!)} className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{editingBook ? 'Edit Book' : 'Add Book'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">Title</label>
                <input
                  type="text"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Author</label>
                <input
                  type="text"
                  value={formData.author || ''}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">ISBN</label>
                <input
                  type="text"
                  value={formData.isbn || ''}
                  onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">Genre</label>
                <input
                  type="text"
                  value={formData.genre || ''}
                  onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">Available Copies</label>
                <input
                  type="number"
                  value={formData.available_copies || ''}
                  onChange={(e) => setFormData({ ...formData, available_copies: parseInt(e.target.value) })}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="modal-action">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn">Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
