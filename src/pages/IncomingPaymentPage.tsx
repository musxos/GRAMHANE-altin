import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IncomingPayment {
  id: string;
  tcNo: string;
  adSoyad: string;
  miktar: number;
  odemeYontemi: string;
  tarih: string;
  durum: 'beklemede' | 'onaylandi' | 'reddedildi';
  aciklama: string;
}

export function IncomingPaymentPage() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    tcNo: '',
    adSoyad: '',
    miktar: '',
    odemeYontemi: '',
    aciklama: ''
  });

  // Demo veriler
  const [payments, setPayments] = useState<IncomingPayment[]>([
    {
      id: '1',
      tcNo: '12345678901',
      adSoyad: 'Ahmet Yılmaz',
      miktar: 5000,
      odemeYontemi: 'Havale',
      tarih: '2024-03-15',
      durum: 'beklemede',
      aciklama: '24 Ayar Altın Bilezik Ödemesi'
    },
    {
      id: '2',
      tcNo: '23456789012',
      adSoyad: 'Ayşe Demir',
      miktar: 3500,
      odemeYontemi: 'EFT',
      tarih: '2024-03-14',
      durum: 'onaylandi',
      aciklama: '22 Ayar Kolye Ödemesi'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPayment: IncomingPayment = {
      id: Date.now().toString(),
      tcNo: formData.tcNo,
      adSoyad: formData.adSoyad,
      miktar: parseFloat(formData.miktar),
      odemeYontemi: formData.odemeYontemi,
      tarih: new Date().toISOString().split('T')[0],
      durum: 'beklemede',
      aciklama: formData.aciklama
    };

    setPayments([newPayment, ...payments]);
    setShowForm(false);
    setFormData({
      tcNo: '',
      adSoyad: '',
      miktar: '',
      odemeYontemi: '',
      aciklama: ''
    });
  };

  const handlePaymentAction = (id: string, action: 'onaylandi' | 'reddedildi') => {
    setPayments(payments.map(payment => 
      payment.id === id ? { ...payment, durum: action } : payment
    ));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gelen Ödemeler</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {showForm ? 'İptal' : 'Yeni Ödeme Ekle'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Yeni Ödeme</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">TC Kimlik No</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.tcNo}
                  onChange={(e) => setFormData({ ...formData, tcNo: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.adSoyad}
                  onChange={(e) => setFormData({ ...formData, adSoyad: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Miktar (₺)</label>
                <input
                  type="number"
                  required
                  step="0.01"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.miktar}
                  onChange={(e) => setFormData({ ...formData, miktar: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Ödeme Yöntemi</label>
                <select
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.odemeYontemi}
                  onChange={(e) => setFormData({ ...formData, odemeYontemi: e.target.value })}
                >
                  <option value="">Seçiniz</option>
                  <option value="Havale">Havale</option>
                  <option value="EFT">EFT</option>
                  <option value="Nakit">Nakit</option>
                  <option value="Kredi Kartı">Kredi Kartı</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Açıklama</label>
              <textarea
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                value={formData.aciklama}
                onChange={(e) => setFormData({ ...formData, aciklama: e.target.value })}
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                İptal
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="TC No veya Müşteri Ara..."
                className="p-2 border rounded-md w-64"
              />
              <select className="p-2 border rounded-md">
                <option value="">Tüm Durumlar</option>
                <option value="beklemede">Beklemede</option>
                <option value="onaylandi">Onaylandı</option>
                <option value="reddedildi">Reddedildi</option>
              </select>
            </div>
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                TC No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Müşteri
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Miktar
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ödeme Yöntemi
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tarih
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Durum
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {payment.tcNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {payment.adSoyad}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₺{payment.miktar.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.odemeYontemi}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.tarih}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    payment.durum === 'onaylandi' 
                      ? 'bg-green-100 text-green-800'
                      : payment.durum === 'reddedildi'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {payment.durum === 'onaylandi' ? 'Onaylandı' : 
                     payment.durum === 'reddedildi' ? 'Reddedildi' : 'Beklemede'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    {payment.durum === 'beklemede' && (
                      <>
                        <button
                          onClick={() => handlePaymentAction(payment.id, 'onaylandi')}
                          className="text-green-600 hover:text-green-900"
                        >
                          Onayla
                        </button>
                        <button
                          onClick={() => handlePaymentAction(payment.id, 'reddedildi')}
                          className="text-red-600 hover:text-red-900"
                        >
                          Reddet
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => navigate(`/sales/new?tcNo=${payment.tcNo}`)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Satış Oluştur
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 