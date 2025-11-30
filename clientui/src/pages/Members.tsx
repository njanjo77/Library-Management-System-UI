
import { Edit, Trash2 } from "lucide-react";

// Dummy members data for demonstration
const members = [
  {
    id: 1,
    name: "John Doe",
    memberId: "M001",
    email: "john@example.com",
    phone: "123-456-7890",
    status: "Active",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    memberId: "M002",
    email: "jane@example.com",
    phone: "987-654-3210",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
];

export const Members = () => {
    return (
        <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-red-700">Members</h2>
            <p className="text-base-content/70 mt-1">Manage your library members here.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn btn-primary bg-red-700 hover:bg-red-800 text-white">
              Add New Member
            </button>
          </div>
        </div>

        {/* Members Table */}
        <div className="card bg-base-100 shadow-xl">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={member.avatar} alt="Avatar" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{member.name}</div>
                          <div className="text-sm opacity-50">{member.memberId}</div>
                        </div>
                      </div>
                    </td>
<td>{member.phone}</td>
                    <td>
                      <span className={`badge ${member.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>
                        {member.status}
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
    );
};