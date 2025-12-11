import { useSelector } from 'react-redux';
import borrowRecordsAPI from '@/borrowrecords/borrowRecordsApi';
import { toast } from 'react-toastify';
import type { RootState } from '@/app/store';

export const Myrecords = () => {
  const { data: recordsData, isLoading, error, refetch } = borrowRecordsAPI.useGetAllBorrowRecordsQuery();
  const [clearRecord] = borrowRecordsAPI.useClearBorrowRecordMutation();

  const user = useSelector((state: RootState) => state.user);

  const allRecords = recordsData?.data || [];
  const myRecords = allRecords.filter((record) => record.user_id === user.user_id);

  const calculateOverdueDays = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    if (now > due) {
      return Math.floor((now.getTime() - due.getTime()) / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateFine = (overdueDays: number) => {
    return overdueDays * 1; // Assume $1 per day
  };

  const handleReturn = async (record: any) => {
    try {
      await clearRecord({
        id: record.borrow_id,
        data: { status: 'Returned', return_date: new Date().toISOString() },
      }).unwrap();
      toast.success('Book returned successfully');
      refetch();
    } catch (error) {
      toast.error('Failed to return book');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Borrow Records</h1>

      {isLoading && <p>Loading records...</p>}
      {error && <p className="text-red-500">Error fetching records</p>}

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Borrow Date</th>
              <th>Due Date</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Overdue Days</th>
              <th>Fine</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myRecords.map((record) => {
              const overdueDays = calculateOverdueDays(record.due_date);
              const fine = calculateFine(overdueDays);
              return (
                <tr key={record.borrow_id}>
                  <td>{record.book_id}</td>
                  <td>{new Date(record.borrow_date).toLocaleDateString()}</td>
                  <td>{new Date(record.due_date).toLocaleDateString()}</td>
                  <td>{record.return_date ? new Date(record.return_date).toLocaleDateString() : 'N/A'}</td>
                  <td>{record.status}</td>
                  <td>{overdueDays}</td>
                  <td>${fine}</td>
                  <td>
                    {record.status === 'Borrowed' && (
                      <button onClick={() => handleReturn(record)} className="btn btn-sm btn-success">
                        Return Request
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};