import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SalesPage() {
  const navigate = useNavigate();

  // Demo satış verileri
  const sales = [
    {
      id: 1,
      faturaNo: 'F2024001',
      tarih: '15.03.2024',
      tcNo: '12345678901',
      adSoyad: 'Ahmet Yılmaz',
      vergiNo: '1234567890',
      urunDetay: '24 Ayar Altın Bilezik',
      miktar: '50 gr',
      birimFiyat: '₺2.450',
      toplamTutar: '₺122.500',
      odemeDurumu: 'Ödendi',
      odemeYontemi: 'Havale'
    },
    {
      id: 2,
      faturaNo: 'F2024002',
      tarih: '15.03.2024',
      tcNo: '23456789012',
      adSoyad: 'Ayşe Demir',
      vergiNo: '2345678901',
      urunDetay: '22 Ayar Altın Kolye',
      miktar: '30 gr',
      birimFiyat: '₺2.350',
      toplamTutar: '₺70.500',
      odemeDurumu: 'Beklemede',
      odemeYontemi: 'Kredi Kartı'
    },
    {
      id: 3,
      faturaNo: 'F2024003',
      tarih: '14.03.2024',
      tcNo: '34567890123',
      adSoyad: 'Mehmet Kaya',
      vergiNo: '3456789012',
      urunDetay: '18 Ayar Altın Yüzük',
      miktar: '15 gr',
      birimFiyat: '₺2.150',
      toplamTutar: '₺32.250',
      odemeDurumu: 'İptal',
      odemeYontemi: 'Nakit'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Satışlar</h1>
        <div className="flex space-x-4">
          <button 
            onClick={() => navigate('/sales/new')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Yeni Satış
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Rapor Al
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700">Günlük Satış</h3>
          <p className="text-2xl font-bold text-green-600">₺225.250</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700">Bekleyen Ödemeler</h3>
          <p className="text-2xl font-bold text-yellow-600">₺70.500</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700">Toplam Satış</h3>
          <p className="text-2xl font-bold text-blue-600">₺225.250</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Fatura No veya Müşteri Ara..."
                className="p-2 border rounded-md w-64"
              />
              <select className="p-2 border rounded-md">
                <option value="">Tüm Durumlar</option>
                <option value="paid">Ödendi</option>
                <option value="pending">Beklemede</option>
                <option value="cancelled">İptal</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 border rounded-md hover:bg-gray-50">
                <span className="text-sm">Tarih: Son 7 Gün</span>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fatura No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tarih
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Müşteri Bilgileri
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ürün Detayı
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Miktar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Birim Fiyat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Toplam Tutar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ödeme Durumu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sales.map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sale.faturaNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sale.tarih}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{sale.adSoyad}</div>
                    <div className="text-xs">TC: {sale.tcNo}</div>
                    <div className="text-xs">VKN: {sale.vergiNo}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sale.urunDetay}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sale.miktar}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sale.birimFiyat}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {sale.toplamTutar}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      sale.odemeDurumu === 'Ödendi' 
                        ? 'bg-green-100 text-green-800'
                        : sale.odemeDurumu === 'Beklemede'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {sale.odemeDurumu}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => navigate(`/sales/${sale.id}`)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Düzenle
                      </button>
                      <button className="text-green-600 hover:text-green-900">Fatura</button>
                      <button className="text-red-600 hover:text-red-900">İptal</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Toplam {sales.length} satış
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Önceki</button>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Sonraki</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}