import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('voter');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    if (username && password) {
      // Redirect based on role
      if (role === 'admin') {
        history.push('/admin-dashboard');
      } else if (role === 'candidate') {
        history.push('/candidate-dashboard');
      } else {
        history.push('/voter-dashboard');
      }
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="voter">Voter</option>
            <option value="candidate">Candidate</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;