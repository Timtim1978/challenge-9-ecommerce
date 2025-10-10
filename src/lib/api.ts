// src/lib/api.ts

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQwLCJpYXQiOjE3NTk4MTA4NzMsImV4cCI6MTc2MDQxNTY3M30.pEAEthC41q4E32NuD77jJn7XPhw4fW_f59ZRGZ-VCSc';

export const API_BASE =
  'https://e-commerce-api-production-26ab.up.railway.app/api';

export async function fetchWithAuth(
  endpoint: string,
  options: RequestInit = {}
) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
    ...options.headers,
  };

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status}`);
  }
  return res.json();
}
