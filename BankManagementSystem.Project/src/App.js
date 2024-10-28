import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import Transfer from './Transfer';
import AccountDetails from './AccountDetails';

const App = () => {
    const [view, setView] = useState('login'); 
    const [user, setUser] = useState(null); 

    const handleLoginSuccess = (userData) => {
        setUser(userData);
        setView('dashboard');
    };

    const handleLogout = () => {
        setUser(null);
        setView('login');
    };

    return (
        <div className="App">
            <header>
                <h1>Bank Management System</h1>
                <nav>
                    {user && (
                        <>
                            <button onClick={() => setView('dashboard')} aria-label="Dashboard">Dashboard</button>
                            <button onClick={() => setView('transfer')} aria-label="Transfer">Transfer</button>
                            <button onClick={() => setView('accountDetails')} aria-label="Account Details">Account Details</button>
                            <button onClick={handleLogout} aria-label="Logout">Logout</button>
                        </>
                    )}
                </nav>
            </header>

            {view === 'login' && <Login onLoginSuccess={handleLoginSuccess} />}
            {view === 'signup' && <Signup onSignupSuccess={() => setView('login')} />}
            {view === 'dashboard' && user && <Dashboard user={user} />}
            {view === 'transfer' && user && <Transfer user={user} setUser={setUser} />}
            {view === 'accountDetails' && user && <AccountDetails user={user} />}
        </div>
    );
};

export default App;
