import { useState } from 'react';
import { usersAPI } from '@/auth/usersAPI';
import type { TUser } from '@/auth/usersAPI';
import { toast } from 'react-toastify';

export const Members = () => {
  const { data: membersData, isLoading, error, refetch } = usersAPI.useGetMembersQuery();
  const [createUser] = usersAPI.useCreateUsersMutation();
  const [deleteUser] = usersAPI.useDeleteUserMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<TUser>>({ role: 'Member' });

  const members = membersData?.data || [];

  const handleAdd = () => {
    setFormData({ role: 'Member' });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this member?')) {
      try {
        await deleteUser(id).unwrap();
        toast.success('Member deleted successfully');
        refetch();
      } catch (error) {
        toast.error('Failed to delete member');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(formData).unwrap();
      toast.success('Member created successfully');
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      toast.error('Failed to create member');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Members Management</h1>
        <button onClick={handleAdd} className="btn btn-primary">Add Member</button>
      </div>

      {isLoading && <p>Loading members...</p>}
      {error && <p className="text-red-500">Error fetching members</p>}

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.user_id}>
                <td>{member.user_id}</td>
                <td>{member.username}</td>
                <td>{member.email}</td>
                <td>{member.role}</td>
                <td>{new Date(member.created_at).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleDelete(member.user_id!)} className="btn btn-sm btn-error">Delete</button>
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
            <h3 className="font-bold text-lg">Add Member</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">Username</label>
                <input
                  type="text"
                  value={formData.username || ''}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Email</label>
                <input
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Password</label>
                <input
                  type="password"
                  value={formData.password || ''}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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