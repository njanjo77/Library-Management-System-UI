import { useState } from 'react';
import { toast } from 'react-toastify';

export const Usersettings = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    phone: '',
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Update profile
    toast.success('Profile updated');
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.new !== password.confirm) {
      toast.error('Passwords do not match');
      return;
    }
    // TODO: Change password
    toast.success('Password changed');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Update Profile</h2>
          <form onSubmit={handleProfileSubmit}>
            <div className="form-control">
              <label className="label">Username</label>
              <input
                type="text"
                value={profile.username}
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">Phone</label>
              <input
                type="text"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="input input-bordered"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">Update Profile</button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Change Password</h2>
          <form onSubmit={handlePasswordSubmit}>
            <div className="form-control">
              <label className="label">Current Password</label>
              <input
                type="password"
                value={password.current}
                onChange={(e) => setPassword({ ...password, current: e.target.value })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">New Password</label>
              <input
                type="password"
                value={password.new}
                onChange={(e) => setPassword({ ...password, new: e.target.value })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">Confirm New Password</label>
              <input
                type="password"
                value={password.confirm}
                onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                className="input input-bordered"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};