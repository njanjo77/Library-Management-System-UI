import { useState } from 'react';
import borrowRecordsAPI from '@/borrowrecords/borrowRecordsApi';
import type { TBorrowRecord } from '@/borrowrecords/borrowRecordsApi';
import { toast } from 'react-toastify';

export const Borrorrecords = () => {
  const { data: recordsData, isLoading, error, refetch } = borrowRecordsAPI.useGetAllBorrowRecordsQuery();
  const [updateRecord] = borrowRecordsAPI.useUpdateBorrowRecordMutation();
  const [clearRecord] = borrowRecordsAPI.useClearBorrowRecordMutation();

  const [filters, setFilters] = useState({
    user_id: '',
    book_id: '',
    status: '',
    start_date: '',
    end_date: '',
  });

  const records = recordsData?.data || [];

  const filteredRecords = records.filter((record) => {
    if (filters.user_id && record.user_id !== parseInt(filters.user_id)) return false;
    if (filters.book_id && record.book_id !== parseInt(filters.book_id)) return false;
    if (filters.status && record.status !== filters.status) return false;
    if (filters.start_date && new Date(record.borrow_date) < new Date(filters.start_date)) return false;
    if (filters.end_date && new Date(record.borrow_date) > new Date(filters.end_date)) return false;
    return true;
  });

  const handleMarkReturned = async (record: TBorrowRecord) => {
    try {
      await clearRecord({
        id: record.borrow_id!,
        data: { status: 'Returned', return_date: new Date().toISOString() },
      }).unwrap();
      toast.success('Record marked as returned');
      refetch();
    } catch (error) {
      toast.error('Failed to update record');
    }
  };

  const isOverdue = (record: TBorrowRecord) => {
    return new Date(record.due_date) < new Date() && !record.return_date;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Borrow Records Management</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
        <input
          type="text"
          placeholder="User ID"
          value={filters.user_id}
          onChange={(e) => setFilters({ ...filters, user_id: e.target.value })}
          className="input input-bordered"
        />
        <input
          type="text"
          placeholder="Book ID"
          value={filters.book_id}
          onChange={(e) => setFilters({ ...filters, book_id: e.target.value })}
          className="input input-bordered"
        />
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="select select-bordered"
        >
          <option value="">All Status</option>
          <option value="Borrowed">Borrowed</option>
          <option value="Overdue">Overdue</option>
          <option value="Returned">Returned</option>
        </select>
        <input
          type="date"
          value={filters.start_date}
          onChange={(e) => setFilters({ ...filters, start_date: e.target.value })}
          className="input input-bordered"
        />
        <input
          type="date"
          value={filters.end_date}
          onChange={(e) => setFilters({ ...filters, end_date: e.target.value })}
          className="input input-bordered"
        />
      </div>

      {isLoading && <p>Loading records...</p>}
      {error && <p className="text-red-500">Error fetching records</p>}

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Book ID</th>
              <th>Borrow Date</th>
              <th>Due Date</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr key={record.borrow_id} className={isOverdue(record) ? 'bg-red-100' : ''}>
                <td>{record.borrow_id}</td>
                <td>{record.user_id}</td>
                <td>{record.book_id}</td>
                <td>{new Date(record.borrow_date).toLocaleDateString()}</td>
                <td>{new Date(record.due_date).toLocaleDateString()}</td>
                <td>{record.return_date ? new Date(record.return_date).toLocaleDateString() : 'N/A'}</td>
                <td>{record.status}</td>
                <td>
                  {record.status === 'Borrowed' && (
                    <button
                      onClick={() => handleMarkReturned(record)}
                      className="btn btn-sm btn-success"
                    >
                      Mark Returned
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};