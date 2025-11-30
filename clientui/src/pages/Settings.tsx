import React from "react";







export const SettingsForm = () => {
    const [settings, setSettings] = React.useState({
        libraryName: '',
        maxBooksPerUser: 5,
        loanDurationDays: 14,
        notificationsEnabled: true,
        autoRenewEnabled: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Settings saved:', settings);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Library Name:</label>
                <input
                    type="text"
                    name="libraryName"
                    value={settings.libraryName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Max Books Per User:</label>
                <input
                    type="number"
                    name="maxBooksPerUser"
                    value={settings.maxBooksPerUser}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Loan Duration (days):</label>
                <input
                    type="number"
                    name="loanDurationDays"
                    value={settings.loanDurationDays}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="notificationsEnabled"
                        checked={settings.notificationsEnabled}
                        onChange={handleChange}
                    />
                    Enable Notifications
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="autoRenewEnabled"
                        checked={settings.autoRenewEnabled}
                        onChange={handleChange}
                    />
                    Auto-Renew Books
                </label>
            </div>
            <button type="submit">Save Settings</button>
        </form>
    );
};