import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCheckoutSession, fetchBranding } from '../services/api';
import { Branding } from '../types';

function PaymentPage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  const [branding, setBranding] = useState<Branding | null>(null);

  useEffect(() => {
    fetchBranding()
      .then(setBranding)
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    try {
      const url = await createCheckoutSession({ amount: Number(amount), email });
      window.location.href = url;
    } catch (err) {
      console.error(err);
      navigate('/cancel');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <main>
      <h2>{branding ? `Pay ${branding.businessName}` : 'Make a Payment'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={processing}>
          {processing ? 'Processing...' : 'Pay'}
        </button>
      </form>
    </main>
  );
}

export default PaymentPage;
