import React, { useState } from 'react';

const Signup = ({ onSignupSuccess }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        if(username === '' || password === '') {
          return
        }
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username,password})
        })
        .then(response => response.json())
        .then(data => {
          console.log('User added:', data); 
          onSignupSuccess(); 
        })
        .catch(error => {
          console.error('Error adding user:', error); 
        });
    };

    const hello = () => {
      console.log("Hello")
    }

    return (
    <div className="login-container">
      <form>
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
          <a href="login.html" style={{ color: 'rgb(247, 244, 244)' }}>
            LOG IN
          </a>
        </p>
        <button type="submit" onClick={hello}>REGISTER</button>
      </form>
    </div>

        // <div>
        //     <h2>Signup</h2>
        //     <input
        //         type="text"
        //         placeholder="Name"
        //         value={name}
        //         onChange={(e) => setName(e.target.value)}
        //     />
        //     <input
        //         type="text"
        //         placeholder="Username"
        //         value={username}
        //         onChange={(e) => setUsername(e.target.value)}
        //     />
        //     <input
        //         type="password"
        //         placeholder="Password"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //     />
        //     <button onClick={handleSignup}>Signup</button>
        // </div>
    );
};

export default Signup;
