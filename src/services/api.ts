import { API_BASE_URL } from '../config';

interface CheckoutPayload {
  amount: number;
  email: string;
}

export async function createCheckoutSession(payload: CheckoutPayload): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error('Failed to create session');
  }
  const data: { url: string } = await res.json();
  return data.url;
}

export async function fetchBranding(): Promise<import('../types').Branding> {
  const res = await fetch(`${API_BASE_URL}/branding`);
  if (!res.ok) {
    throw new Error('Failed to load branding');
  }
  return res.json();
}
