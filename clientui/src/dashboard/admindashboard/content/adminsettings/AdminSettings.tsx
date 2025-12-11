import { useState } from 'react';
import { toast } from 'react-toastify';

export const AdminSettings = () => {
  const [settings, setSettings] = useState({
    borrowDuration: 14,
    maxBooksPerMember: 5,
    finePerDay: 1,
  });

  const [profile, setProfile] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to backend
    toast.success('Settings updated');
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Update profile
    toast.success('Profile updated');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">System Settings</h2>
          <form onSubmit={handleSettingsSubmit}>
            <div className="form-control">
              <label className="label">Borrow Duration (days)</label>
              <input
                type="number"
                value={settings.borrowDuration}
                onChange={(e) => setSettings({ ...settings, borrowDuration: parseInt(e.target.value) })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">Max Books per Member</label>
              <input
                type="number"
                value={settings.maxBooksPerMember}
                onChange={(e) => setSettings({ ...settings, maxBooksPerMember: parseInt(e.target.value) })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">Fine per Day ($)</label>
              <input
                type="number"
                step="0.01"
                value={settings.finePerDay}
                onChange={(e) => setSettings({ ...settings, finePerDay: parseFloat(e.target.value) })}
                className="input input-bordered"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">Save Settings</button>
          </form>
        </div>

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
              <label className="label">New Password</label>
              <input
                type="password"
                value={profile.password}
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                className="input input-bordered"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};