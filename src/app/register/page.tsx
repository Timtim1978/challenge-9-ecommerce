'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(''); // gunakan avatarUrl
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(
        'https://e-commerce-api-production-26ab.up.railway.app/api/auth/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password, avatarUrl }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        router.push('/'); // redirect ke home / dashboard
      } else {
        setError(data.message || 'Register failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className='max-w-md mx-auto mt-20 p-6 bg-gray-100 rounded shadow'>
      <h1 className='text-2xl font-bold mb-4'>Register</h1>
      {error && <p className='text-red-500 mb-2'>{error}</p>}
      <form onSubmit={handleRegister} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Name'
          className='p-2 border rounded'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type='text'
          placeholder='Avatar URL'
          className='p-2 border rounded'
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
        <button
          type='submit'
          className='bg-green-500 text-white p-2 rounded hover:bg-green-600'
        >
          Register
        </button>
      </form>
    </div>
  );
}
