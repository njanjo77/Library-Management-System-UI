import { Plus, Edit, Trash2 } from 'lucide-react';

// Dummy data for demonstration
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    isbn: "9780743273565",
    status: "Available",
    cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    publisher: "Scribner"
  },
  {
    id: 2,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    isbn: "9780553380163",
    status: "Checked Out",
    cover: "https://covers.openlibrary.org/b/id/240726-L.jpg",
    publisher: "Bantam"
  }
];

export const Books = () => {
    return (
        <>i
        

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 ">
          <div>
            <h2 className="text-3xl font-bold text-red-700">Books</h2>
            <p className="text-base-content/70 mt-1">Manage your book collection here.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn btn-primary bg-red-700 hover:bg-red-800 text-white">
              <Plus className="w-4 h-4 mr-2" /> Add New Book
            </button>
          </div>
        </div>

        {/* Book Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Book List</h3>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search books..."
                className="input input-bordered w-full max-w-xs"
                />
              <select className="select select-bordered">
                <option>All Categories</option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>Science</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* Table header */}
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>ISBN</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={book.cover} alt={book.title} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{book.title}</div>
                          <div className="text-sm opacity-50">{book.publisher}</div>
                        </div>
                      </div>
                    </td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>{book.isbn}</td>
                    <td>
                      <span className={`badge ${book.status === 'Available' ? 'badge-success' : 'badge-warning'}`}>
                        {book.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <button className="btn btn-sm btn-square btn-ghost">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="btn btn-sm btn-square btn-ghost">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
  );
};