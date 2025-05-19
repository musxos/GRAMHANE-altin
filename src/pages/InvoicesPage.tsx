import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Invoice {
  id: string;
  faturaNo: string;
  tarih: string;
  musteriAdi: string;
  tcNo: string;
  vergiNo: string;
  toplamTutar: number;
  odemeDurumu: 'odendi' | 'beklemede' | 'iptal';
  odemeYontemi: string;
}

export function InvoicesPage() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: '1',
      faturaNo: 'F2024001',
      tarih: '2024-03-15',
      musteriAdi: 'Ahmet Yılmaz',
      tcNo: '12345678901',
      vergiNo: '1234567890',
      toplamTutar: 122500,
      odemeDurumu: 'odendi',
      odemeYontemi: 'Havale'
    },
    {
      id: '2',
      faturaNo: 'F2024002',
      tarih: '2024-03-14',
      musteriAdi: 'Ayşe Demir',
      tcNo: '23456789012',
      vergiNo: '2345678901',
      toplamTutar: 70500,
      odemeDurumu: 'beklemede',
      odemeYontemi: 'Kredi Kartı'
    }
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Faturalar</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Yeni Fatura
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Rapor Al
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700">Toplam Fatura</h3>
          <p className="text-2xl font-bold text-blue-600">
            ₺{invoices.reduce((acc, inv) => acc + inv.toplamTutar, 0).toLocaleString('tr-TR')}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700">Bekleyen Ödemeler</h3>
          <p className="text-2xl font-bold text-yellow-600">
            ₺{invoices
              .filter(inv => inv.odemeDurumu === 'beklemede')
              .reduce((acc, inv) => acc + inv.toplamTutar, 0)
              .toLocaleString('tr-TR')}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700">Ödenen Faturalar</h3>
          <p className="text-2xl font-bold text-green-600">
            ₺{invoices
              .filter(inv => inv.odemeDurumu === 'odendi')
              .reduce((acc, inv) => acc + inv.toplamTutar, 0)
              .toLocaleString('tr-TR')}
          </p>
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
                <option value="odendi">Ödendi</option>
                <option value="beklemede">Beklemede</option>
                <option value="iptal">İptal</option>
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
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {invoice.faturaNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.tarih}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{invoice.musteriAdi}</div>
                    <div className="text-xs">TC: {invoice.tcNo}</div>
                    <div className="text-xs">VKN: {invoice.vergiNo}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ₺{invoice.toplamTutar.toLocaleString('tr-TR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      invoice.odemeDurumu === 'odendi' 
                        ? 'bg-green-100 text-green-800'
                        : invoice.odemeDurumu === 'beklemede'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {invoice.odemeDurumu === 'odendi' ? 'Ödendi' : 
                       invoice.odemeDurumu === 'beklemede' ? 'Beklemede' : 'İptal'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => navigate(`/sales/${invoice.id}`)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Görüntüle
                      </button>
                      <button className="text-green-600 hover:text-green-900">PDF</button>
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
              Toplam {invoices.length} fatura
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