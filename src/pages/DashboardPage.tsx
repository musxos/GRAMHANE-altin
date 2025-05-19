import React, { useEffect, useState } from 'react';
import { Card } from '../components/ui/Card';
import { TrendingUpIcon, TrendingDownIcon, CoinsIcon, BarChart3Icon, ReceiptIcon } from 'lucide-react';
import { mockFinancialSummary, formatCurrency } from '../utils/mockData';
import { useAuth } from '../contexts/AuthContext';
import { GoldPrice, getGoldPrices } from '../services/goldPriceService';

// Son ödemeler için örnek veri
const mockPayments = [
  {
    id: 1,
    customerName: 'Ahmet Yılmaz',
    amount: 15000,
    date: '2024-05-20',
    status: 'completed',
    type: 'altın'
  },
  {
    id: 2,
    customerName: 'Mehmet Demir',
    amount: 8500,
    date: '2024-05-19',
    status: 'completed',
    type: 'gümüş'
  },
  {
    id: 3,
    customerName: 'Ayşe Kaya',
    amount: 25000,
    date: '2024-05-18',
    status: 'completed',
    type: 'altın'
  }
];

export function DashboardPage() {
  const { authState } = useAuth();
  const [goldPrices, setGoldPrices] = useState<GoldPrice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const prices = await getGoldPrices();
        if (prices.length === 0) {
          setError('Altın fiyatları alınamadı');
        } else {
          setGoldPrices(prices);
        }
      } catch (error) {
        console.error('Altın fiyatları alınamadı:', error);
        setError('Altın fiyatları alınırken bir hata oluştu');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Her dakika güncelle

    return () => clearInterval(interval);
  }, []);

  const getPriceCard = (price: GoldPrice) => (
    <div key={price.key} className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-700">{price.key}</h3>
        <div className={`p-2 rounded-lg ${price.arrow === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {price.arrow === 'up' ? <TrendingUpIcon size={20} /> : <TrendingDownIcon size={20} />}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Alış</p>
          <p className="text-lg font-bold text-gray-900">{price.buy} ₺</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Satış</p>
          <p className="text-lg font-bold text-gray-900">{price.sell} ₺</p>
        </div>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <p className="text-xs text-gray-500">Son güncelleme: {price.last_update}</p>
        <p className={`text-sm font-medium ${price.arrow === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {price.percent}%
        </p>
      </div>
    </div>
  );

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

      <div>
        <h2 className="text-xl font-bold mb-4">Piyasa Değerleri</h2>
        {isLoading ? (
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500">Yükleniyor...</p>
          </div>
        ) : error ? (
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-red-500">{error}</p>
          </div>
        ) : goldPrices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {goldPrices.map(getPriceCard)}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500">Fiyat bilgisi bulunamadı.</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Son İşlemler</h3>
          <div className="space-y-4">
            <p className="text-gray-500">Henüz işlem bulunmuyor.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Son Ödemeler</h3>
          <div className="space-y-4">
            {mockPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <ReceiptIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{payment.customerName}</p>
                    <p className="text-sm text-gray-500">{payment.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{formatCurrency(payment.amount)}</p>
                  <p className="text-sm text-gray-500">{payment.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}