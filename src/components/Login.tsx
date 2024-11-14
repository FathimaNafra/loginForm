// Login.tsx
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Manually call loginWithRedirect with the email/password if you are using a custom login form
      await loginWithRedirect({
        email,
        password,
      });
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {isAuthenticated ? (
        <>
          <p>Welcome! You are logged in.</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <button type="submit">Log In</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}
    </div>
  );
};

export default Login;
