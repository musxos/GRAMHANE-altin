import React, { useState } from 'react';

export function ProfilePage() {
  const [formData, setFormData] = useState({
    adSoyad: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    telefon: '0555 555 55 55',
    adres: 'İstanbul, Türkiye',
    vergiNo: '1234567890',
    vergiDairesi: 'Kadıköy',
    unvan: 'Kuyumcu',
    sifre: '',
    yeniSifre: '',
    yeniSifreTekrar: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Şifre değişikliği ve profil güncelleme işlemleri burada yapılacak
    console.log('Profil güncellendi:', formData);
  };

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Profil Bilgileri</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.adSoyad}
                  onChange={(e) => setFormData({ ...formData, adSoyad: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">E-posta</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Telefon</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.telefon}
                  onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Unvan</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.unvan}
                  onChange={(e) => setFormData({ ...formData, unvan: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Adres</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                value={formData.adres}
                onChange={(e) => setFormData({ ...formData, adres: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Vergi No</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.vergiNo}
                  onChange={(e) => setFormData({ ...formData, vergiNo: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Vergi Dairesi</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.vergiDairesi}
                  onChange={(e) => setFormData({ ...formData, vergiDairesi: e.target.value })}
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-medium mb-4">Şifre Değiştir</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mevcut Şifre</label>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.sifre}
                    onChange={(e) => setFormData({ ...formData, sifre: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Yeni Şifre</label>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.yeniSifre}
                    onChange={(e) => setFormData({ ...formData, yeniSifre: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Yeni Şifre Tekrar</label>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.yeniSifreTekrar}
                    onChange={(e) => setFormData({ ...formData, yeniSifreTekrar: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Değişiklikleri Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 