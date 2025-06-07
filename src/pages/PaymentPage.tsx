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
      const amt = Number(amount);
      let fee = 0;
      if (branding) {
        if (branding.feeFlat !== null && branding.feeFlat !== undefined) {
          fee = branding.feeFlat;
        } else if (branding.feePercent !== null && branding.feePercent !== undefined) {
          fee = (amt * branding.feePercent) / 100;
        }
      }
      const total = amt + fee;
      const url = await createCheckoutSession({ amount: total, email });
      window.location.href = url;
    } catch (err) {
      console.error(err);
      navigate('/cancel');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        {branding?.logoUrl && (
          <img
            src={branding.logoUrl}
            alt={branding.businessName}
            className="h-12 mx-auto mb-4"
          />
        )}
        <h2 className="text-2xl font-semibold text-center mb-4">
          {branding ? `Pay ${branding.businessName}` : 'Make a Payment'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          {amount && (
            <div className="text-sm text-gray-700">
              {(() => {
                const amt = Number(amount);
                let fee = 0;
                if (branding) {
                  if (branding.feeFlat !== null && branding.feeFlat !== undefined) {
                    fee = branding.feeFlat;
                  } else if (branding.feePercent !== null && branding.feePercent !== undefined) {
                    fee = (amt * branding.feePercent) / 100;
                  }
                }
                const total = amt + fee;
                return (
                  <>
                    <p>Processing Fee: {fee.toFixed(2)}</p>
                    <p className="font-medium">Total: {total.toFixed(2)}</p>
                  </>
                );
              })()}
            </div>
          )}
          <button
            type="submit"
            disabled={processing}
            className="w-full py-2 px-4 rounded text-white font-semibold"
            style={{ backgroundColor: branding?.primaryColor || '#3b82f6' }}
          >
            {processing ? 'Processing...' : 'Pay'}
          </button>
        </form>
      </div>
    </main>
  );
}

export default PaymentPage;
