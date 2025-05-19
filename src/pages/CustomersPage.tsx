import React from 'react';
import { Card } from '../components/ui/Card';

export function CustomersPage() {
  // Demo müşteri verileri
  const customers = [
    {
      id: 1,
      tcNo: '12345678901',
      adSoyad: 'Ahmet Yılmaz',
      telefon: '0532 123 4567',
      email: 'ahmet.yilmaz@email.com',
      adres: 'Atatürk Mah. Cumhuriyet Cad. No:123 Kadıköy/İstanbul',
      vergiNo: '1234567890',
      toplamHarcama: '₺45.750',
      sonIslem: '15.03.2024',
      durum: 'Aktif'
    },
    {
      id: 2,
      tcNo: '23456789012',
      adSoyad: 'Ayşe Demir',
      telefon: '0533 234 5678',
      email: 'ayse.demir@email.com',
      adres: 'Bahçelievler Mah. Gül Sok. No:45 Beşiktaş/İstanbul',
      vergiNo: '2345678901',
      toplamHarcama: '₺32.500',
      sonIslem: '14.03.2024',
      durum: 'Aktif'
    },
    {
      id: 3,
      tcNo: '34567890123',
      adSoyad: 'Mehmet Kaya',
      telefon: '0535 345 6789',
      email: 'mehmet.kaya@email.com',
      adres: 'Çankaya Mah. İstiklal Cad. No:67 Ankara',
      vergiNo: '3456789012',
      toplamHarcama: '₺28.900',
      sonIslem: '13.03.2024',
      durum: 'Pasif'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Müşteriler</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Yeni Müşteri Ekle
        </button>
      </div>

      <Card>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Müşteri Ara..."
                className="p-2 border rounded-md w-64"
              />
              <select className="p-2 border rounded-md">
                <option value="">Tüm Durumlar</option>
                <option value="active">Aktif</option>
                <option value="passive">Pasif</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TC No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ad Soyad
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    İletişim
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vergi No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Toplam Harcama
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Son İşlem
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
                {customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.tcNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.adSoyad}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{customer.telefon}</div>
                      <div>{customer.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.vergiNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.toplamHarcama}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.sonIslem}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        customer.durum === 'Aktif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {customer.durum}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">Düzenle</button>
                        <button className="text-red-600 hover:text-red-900">Sil</button>
                        <button className="text-green-600 hover:text-green-900">Detay</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Toplam {customers.length} müşteri
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Önceki</button>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Sonraki</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}