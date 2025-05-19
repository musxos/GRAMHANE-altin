import React, { useState } from 'react';

export function BuyGoldPage() {
  const [formData, setFormData] = useState({
    altinTuru: '',
    miktar: '',
    birimFiyat: '',
    toplamTutar: '',
    odemeYontemi: '',
    aciklama: ''
  });

  const altinTurleri = [
    { id: 'gram', ad: 'Gram Altın' },
    { id: 'ceyrek', ad: 'Çeyrek Altın' },
    { id: 'yarim', ad: 'Yarım Altın' },
    { id: 'tam', ad: 'Tam Altın' },
    { id: 'besli', ad: 'Beşli Altın' },
    { id: 'ondort', ad: '14 Ayar Altın' },
    { id: 'onsekiz', ad: '18 Ayar Altın' },
    { id: 'yirmidort', ad: '24 Ayar Altın' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Altın alım işlemleri burada yapılacak
    console.log('Altın alımı:', formData);
  };

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Altın Al</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Altın Türü</label>
                <select
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.altinTuru}
                  onChange={(e) => setFormData({ ...formData, altinTuru: e.target.value })}
                >
                  <option value="">Seçiniz</option>
                  {altinTurleri.map((altin) => (
                    <option key={altin.id} value={altin.id}>
                      {altin.ad}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Miktar</label>
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
                <label className="block text-sm font-medium text-gray-700">Birim Fiyat (₺)</label>
                <input
                  type="number"
                  required
                  step="0.01"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.birimFiyat}
                  onChange={(e) => setFormData({ ...formData, birimFiyat: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Toplam Tutar (₺)</label>
                <input
                  type="number"
                  required
                  step="0.01"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.toplamTutar}
                  onChange={(e) => setFormData({ ...formData, toplamTutar: e.target.value })}
                />
              </div>
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
                <option value="nakit">Nakit</option>
                <option value="krediKarti">Kredi Kartı</option>
                <option value="havale">Havale/EFT</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Açıklama</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                value={formData.aciklama}
                onChange={(e) => setFormData({ ...formData, aciklama: e.target.value })}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Altın Al
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 