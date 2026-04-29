import { useState } from 'react';
import AdminLogin from './AdminLogin';

const BOOKINGS_KEY = 'asianelite_bookings';

function AdminPanel() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [newPassword, setNewPassword] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('');

    const getBookings = () => {
        const data = localStorage.getItem(BOOKINGS_KEY);
        return data ? JSON.parse(data) : [];
    };

    const bookings = getBookings();
    const total = bookings.length;
    const pending = bookings.filter(b => b.status === 'Pending').length;
    const completed = bookings.filter(b => b.status === 'Completed').length;
    const today = bookings.filter(b => b.date === new Date().toLocaleDateString()).length;

    const updateStatus = (id, status) => {
        const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
        localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
        window.location.reload();
    };

    const deleteBooking = (id) => {
        const updated = bookings.filter(b => b.id !== id);
        localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
        window.location.reload();
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPasswordMsg('Password updated! Please remember new password!');
        setNewPassword('');
    };

    if (!isLoggedIn) return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;

    return (
        <div style={{ minHeight: '100vh', background: '#f0f4f8', fontFamily: 'Georgia, serif' }}>

            {/* Header */}
            <div style={{
                background: '#1a1a2e',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src="/Logo.png" alt="logo" style={{ height: '40px', width: '40px', borderRadius: '50%' }} />
                    <span style={{ color: 'white', fontWeight: '700', fontSize: '18px' }}>Admin Panel</span>
                </div>
                <button
                    onClick={() => setIsLoggedIn(false)}
                    style={{
                        background: '#e74c3c',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600'
                    }}
                >
                    Logout
                </button>
            </div>

            {/* Tabs */}
            <div style={{ background: 'white', padding: '0 24px', borderBottom: '1px solid #eee', display: 'flex', gap: '24px' }}>
                {['dashboard', 'bookings', 'settings'].map(tab => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '14px 0',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '14px',
                            color: activeTab === tab ? '#2563eb' : '#666',
                            borderBottom: activeTab === tab ? '2px solid #2563eb' : '2px solid transparent',
                            textTransform: 'capitalize'
                        }}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <div style={{ padding: '24px' }}>

                {/* Dashboard Tab */}
                {activeTab === 'dashboard' && (
                    <div>
                        <h2 style={{ marginBottom: '20px', color: '#1a1a2e' }}>Dashboard</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                            {[
                                { label: 'Total Bookings', value: total, color: '#2563eb' },
                                { label: "Today's Bookings", value: today, color: '#27ae60' },
                                { label: 'Pending', value: pending, color: '#e67e22' },
                                { label: 'Completed', value: completed, color: '#8e44ad' },
                            ].map(card => (
                                <div key={card.label} style={{
                                    background: 'white',
                                    borderRadius: '12px',
                                    padding: '20px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                                    borderLeft: `4px solid ${card.color}`
                                }}>
                                    <p style={{ color: '#666', fontSize: '13px', margin: '0 0 8px' }}>{card.label}</p>
                                    <p style={{ fontSize: '32px', fontWeight: '700', color: card.color, margin: 0 }}>{card.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Recent Bookings */}
                        <h3 style={{ color: '#1a1a2e', marginBottom: '12px' }}>Recent Bookings</h3>
                        {bookings.length === 0 ? (
                            <div style={{ background: 'white', borderRadius: '12px', padding: '40px', textAlign: 'center', color: '#999' }}>
                                No bookings yet!
                            </div>
                        ) : (
                            bookings.slice(-5).reverse().map(b => (
                                <div key={b.id} style={{
                                    background: 'white',
                                    borderRadius: '12px',
                                    padding: '16px',
                                    marginBottom: '12px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <p style={{ fontWeight: '600', margin: '0 0 4px' }}>{b.name}</p>
                                        <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>{b.service} • {b.location}</p>
                                    </div>
                                    <span style={{
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        background: b.status === 'Completed' ? '#d5f5e3' : '#fdebd0',
                                        color: b.status === 'Completed' ? '#27ae60' : '#e67e22'
                                    }}>{b.status}</span>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* Bookings Tab */}
                {activeTab === 'bookings' && (
                    <div>
                        <h2 style={{ marginBottom: '20px', color: '#1a1a2e' }}>All Bookings ({total})</h2>
                        {bookings.length === 0 ? (
                            <div style={{ background: 'white', borderRadius: '12px', padding: '40px', textAlign: 'center', color: '#999' }}>
                                No bookings yet!
                            </div>
                        ) : (
                            bookings.reverse().map(b => (
                                <div key={b.id} style={{
                                    background: 'white',
                                    borderRadius: '12px',
                                    padding: '20px',
                                    marginBottom: '12px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                                        <div>
                                            <p style={{ fontWeight: '700', fontSize: '16px', margin: '0 0 6px' }}>{b.name}</p>
                                            <p style={{ color: '#555', margin: '0 0 4px', fontSize: '14px' }}>📞 {b.mobile}</p>
                                            <p style={{ color: '#555', margin: '0 0 4px', fontSize: '14px' }}>🧹 {b.service}</p>
                                            <p style={{ color: '#555', margin: '0 0 4px', fontSize: '14px' }}>📍 {b.location}</p>
                                            <p style={{ color: '#999', margin: 0, fontSize: '12px' }}>📅 {b.date}</p>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <span style={{
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                background: b.status === 'Completed' ? '#d5f5e3' : '#fdebd0',
                                                color: b.status === 'Completed' ? '#27ae60' : '#e67e22',
                                                textAlign: 'center'
                                            }}>{b.status}</span>
                                            <button
                                                onClick={() => updateStatus(b.id, b.status === 'Pending' ? 'Completed' : 'Pending')}
                                                style={{
                                                    padding: '6px 12px',
                                                    background: '#2563eb',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '6px',
                                                    cursor: 'pointer',
                                                    fontSize: '12px'
                                                }}
                                            >
                                                {b.status === 'Pending' ? 'Mark Done' : 'Mark Pending'}
                                            </button>
                                            <button
                                                onClick={() => deleteBooking(b.id)}
                                                style={{
                                                    padding: '6px 12px',
                                                    background: '#e74c3c',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '6px',
                                                    cursor: 'pointer',
                                                    fontSize: '12px'
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                    <div>
                        <h2 style={{ marginBottom: '20px', color: '#1a1a2e' }}>Settings</h2>
                        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', maxWidth: '400px' }}>
                            <h3 style={{ marginBottom: '16px' }}>Change Password</h3>
                            <form onSubmit={handlePasswordChange}>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        border: '1.5px solid #ddd',
                                        fontSize: '14px',
                                        boxSizing: 'border-box',
                                        marginBottom: '12px'
                                    }}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: '#2563eb',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: '600'
                                    }}
                                >
                                    Update Password
                                </button>
                                {passwordMsg && <p style={{ color: 'green', marginTop: '10px', fontSize: '13px' }}>{passwordMsg}</p>}
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminPanel;