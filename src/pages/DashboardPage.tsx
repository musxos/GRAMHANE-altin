import React from 'react';
import { Card } from '../components/ui/Card';
import { TrendingUpIcon, TrendingDownIcon, CoinsIcon, BarChart3Icon } from 'lucide-react';
import { mockFinancialSummary, formatCurrency } from '../utils/mockData';
import { useAuth } from '../contexts/AuthContext';

export function DashboardPage() {
  const { authState } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hoş Geldiniz, {authState.user?.username}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">Günlük Gelir</h3>
          <p className="text-2xl font-bold text-blue-600">
            {formatCurrency(mockFinancialSummary.dailyIncome)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">Aylık Gelir</h3>
          <p className="text-2xl font-bold text-green-600">
            {formatCurrency(mockFinancialSummary.monthlyIncome)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">Günlük Gider</h3>
          <p className="text-2xl font-bold text-red-600">
            {formatCurrency(mockFinancialSummary.dailyExpense)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">Portföy Değeri</h3>
          <p className="text-2xl font-bold text-purple-600">
            {formatCurrency(mockFinancialSummary.portfolioValue)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Son İşlemler</h3>
          <div className="space-y-4">
            <p className="text-gray-500">Henüz işlem bulunmuyor.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Bekleyen Ödemeler</h3>
          <div className="space-y-4">
            <p className="text-gray-500">Bekleyen ödeme bulunmuyor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}