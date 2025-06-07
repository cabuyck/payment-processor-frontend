import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PaymentPage from './pages/PaymentPage';
import SuccessPage from './pages/SuccessPage';
import CancelPage from './pages/CancelPage';
import AdminDashboard from './pages/AdminDashboard';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PaymentPage />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="cancel" element={<CancelPage />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
