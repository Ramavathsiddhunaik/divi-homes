import { useState } from 'react';

function AdminLogin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'Asian Elite Services' && password === 'Dubhaclean@0909') {
            onLogin();
        } else {
            setError('Invalid username or password!');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#f0f4f8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Georgia, serif'
        }}>
            <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                width: '100%',
                maxWidth: '400px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.1)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <img src="/Logo.png" alt="logo" style={{ height: '70px', width: '70px', borderRadius: '50%', objectFit: 'cover' }} />
                    <h2 style={{ color: '#1a1a2e', marginTop: '12px', fontSize: '22px' }}>Admin Login</h2>
                    <p style={{ color: '#666', fontSize: '14px' }}>AsianElite Home Cleaning Service</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ fontSize: '13px', color: '#444', fontWeight: '600' }}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginTop: '6px',
                                borderRadius: '8px',
                                border: '1.5px solid #ddd',
                                fontSize: '14px',
                                boxSizing: 'border-box',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ fontSize: '13px', color: '#444', fontWeight: '600' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPass ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    marginTop: '6px',
                                    borderRadius: '8px',
                                    border: '1.5px solid #ddd',
                                    fontSize: '14px',
                                    boxSizing: 'border-box',
                                    outline: 'none'
                                }}
                            />
                            <span
                                onClick={() => setShowPass(!showPass)}
                                style={{ position: 'absolute', right: '12px', top: '18px', cursor: 'pointer', fontSize: '16px' }}
                            >
                                {showPass ? '🙈' : '👁️'}
                            </span>
                        </div>
                    </div>

                    {error && <p style={{ color: 'red', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '14px',
                            background: '#2563eb',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '700',
                            cursor: 'pointer'
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;