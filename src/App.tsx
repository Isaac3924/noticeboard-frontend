import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Attempting connection to AWS...');

    try {
      const response = await fetch('http://Noticeboard-backend-env.eba-kfcey5wz.us-east-1.elasticbeanstalk.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        setStatus('Success! Authenticated via AWS RDS & Elastic Beanstalk.');
      } else {
        setStatus('Login failed. Check credentials.');
      }
    } catch (error) {
      setStatus('Network Error. (Note: browsers may block cross-origin requests without CORS middleware).');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '50px', fontFamily: 'system-ui, sans-serif', maxWidth: '400px', margin: '40px auto' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>CoBank Noticeboard Portal</h2>
      <div style={{ background: '#f4f6f8', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }} 
          />
          <button type="submit" style={{ padding: '12px', background: '#0056b3', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Authenticate Securely
          </button>
        </form>
        {status && <p style={{ marginTop: '20px', textAlign: 'center', fontWeight: '500', color: '#0056b3' }}>{status}</p>}
      </div>
    </div>
  )
}

export default App