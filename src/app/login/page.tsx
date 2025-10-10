'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(
        'https://e-commerce-api-production-26ab.up.railway.app/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        // simpan token di localStorage (untuk testing)
        localStorage.setItem('token', data.token);
        router.push('/'); // redirect ke home / dashboard
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className='max-w-md mx-auto mt-20 p-6 bg-gray-100 rounded shadow'>
      <h1 className='text-2xl font-bold mb-4'>Login</h1>
      {error && <p className='text-red-500 mb-2'>{error}</p>}
      <form onSubmit={handleLogin} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          className='p-2 border rounded'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          className='p-2 border rounded'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
        >
          Login
        </button>
      </form>
    </div>
  );
}
