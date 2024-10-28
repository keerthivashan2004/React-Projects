import React, { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [credential, setcredential] = useState('');
    const [passcode, setpasscode] = useState('');
    const [toggle, setToggle] = useState(false)

    const handleSignup = () => {
      if(username === '' || password === '') {
        return
      }
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username,email,password})
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('User created:', data);
        setToggle(e => !e)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleLogin = () => {
    fetch('http://localhost:5000/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                const mockUser = {
                    name: user.username,
                    balance: 1000,
                    accountNumber: '50123678940'
                };
                onLoginSuccess(mockUser);
            } else {
                console.error('Invalid username or password');
               
            }
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
};

    return (
        <>
    { toggle ?
    <div className="login-container">
      <div>
        <h4>LOGIN</h4>
        <label>Username</label>
        <input type="username" value={username}
         onChange={(e) => setUsername(e.target.value)} name="username" placeholder="username" required />
        <label>Password</label>
        <input type="password" value={password}
        onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" required />
        <p style={{ color: 'aliceblue' }}>
          Don't have an account?{' '}
          <a onClick={() => setToggle(prev => !prev)} style={{ color: 'rgb(236, 241, 241)' }}>
            Create New Account
          </a>
        </p>
        <button onClick={handleLogin}>Submit</button>
      </div>
    </div>
:
<div className="login-container">
<div>
  <h4>Sign-Up</h4>
  <label style={{ color: '#f4f5f1' }}>Username</label>
  <input type="text" value={username}
  onChange={(e) => setUsername(e.target.value)} name="username" required />
  <p></p>
  <label>Email</label>
  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required />
  <p></p>
  <label>Password</label>
  <input type="password" value={password}
  onChange={(e) => setPassword(e.target.value)} name="password" required />
  <p></p>
  <p style={{ color: 'rgb(246, 244, 244)', fontFamily: 'Trebuchet MS' }}>
    Already have an account?{' '}
    <a onClick={() => setToggle(prev => !prev)} style={{ color: 'rgb(247, 244, 244)' }}>
      LOG IN
    </a>
  </p>
  <button onClick={handleSignup} type="submit">REGISTER</button>
</div>
</div>
    }
    </>
    );
};

export default Login;