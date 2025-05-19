import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AppLayout } from './components/layout/AppLayout';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { CustomersPage } from './pages/CustomersPage';
import { SalesPage } from './pages/SalesPage';
import { BuyGoldPage } from './pages/BuyGoldPage';
import { InvoicesPage } from './pages/InvoicesPage';
import { MessagesPage } from './pages/MessagesPage';
import { SaleDetailPage } from './pages/SaleDetailPage';
import { IncomingPaymentPage } from './pages/IncomingPaymentPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route path="sales" element={<SalesPage />} />
            <Route path="sales/new" element={<SaleDetailPage />} />
            <Route path="sales/:id" element={<SaleDetailPage />} />
            <Route path="buy-gold" element={<BuyGoldPage />} />
            <Route path="invoices" element={<InvoicesPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="incoming-payments" element={<IncomingPaymentPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;