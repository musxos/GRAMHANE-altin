import React, { useState } from 'react';

export function SettingsPage() {
  const [settings, setSettings] = useState({
    firmaAdi: 'Gramhane Kuyumculuk',
    vergiNo: '1234567890',
    vergiDairesi: 'Kadıköy',
    adres: 'İstanbul, Türkiye',
    telefon: '0212 555 55 55',
    email: 'info@gramhane.com',
    website: 'www.gramhane.com',
    paraBirimi: 'TRY',
    dil: 'tr',
    saatDilimi: 'Europe/Istanbul',
    bildirimler: {
      email: true,
      sms: false,
      push: true
    },
    otomatikFatura: true,
    faturaSeriNo: 'A',
    faturaBaslangicNo: '1',
    iscilikOranlari: [
      { id: '1', oran: '1%', aciklama: 'Standart İşçilik' },
      { id: '2', oran: '2%', aciklama: 'Özel Tasarım' },
      { id: '3', oran: '3%', aciklama: 'El İşçiliği' },
      { id: '4', oran: '4%', aciklama: 'Özel Model' },
      { id: '5', oran: '5%', aciklama: 'Lüks Tasarım' }
    ]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ayarları kaydetme işlemleri burada yapılacak
    console.log('Ayarlar güncellendi:', settings);
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Sistem Ayarları</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Firma Adı</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={settings.firmaAdi}
                  onChange={(e) => setSettings({ ...settings, firmaAdi: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Vergi No</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={settings.vergiNo}
                  onChange={(e) => setSettings({ ...settings, vergiNo: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Vergi Dairesi</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={settings.vergiDairesi}
                  onChange={(e) => setSettings({ ...settings, vergiDairesi: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Telefon</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={settings.telefon}
                  onChange={(e) => setSettings({ ...settings, telefon: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Adres</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                value={settings.adres}
                onChange={(e) => setSettings({ ...settings, adres: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">E-posta</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={settings.email}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Website</label>
                <input
                  type="url"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={settings.website}
                  onChange={(e) => setSettings({ ...settings, website: e.target.value })}
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-medium mb-4">Sistem Ayarları</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Para Birimi</label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={settings.paraBirimi}
                    onChange={(e) => setSettings({ ...settings, paraBirimi: e.target.value })}
                  >
                    <option value="TRY">Türk Lirası (₺)</option>
                    <option value="USD">Amerikan Doları ($)</option>
                    <option value="EUR">Euro (€)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Dil</label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={settings.dil}
                    onChange={(e) => setSettings({ ...settings, dil: e.target.value })}
                  >
                    <option value="tr">Türkçe</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Saat Dilimi</label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={settings.saatDilimi}
                    onChange={(e) => setSettings({ ...settings, saatDilimi: e.target.value })}
                  >
                    <option value="Europe/Istanbul">İstanbul (UTC+3)</option>
                    <option value="Europe/London">Londra (UTC+0)</option>
                    <option value="America/New_York">New York (UTC-5)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-medium mb-4">Bildirim Ayarları</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="emailNotifications"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={settings.bildirimler.email}
                    onChange={(e) => setSettings({
                      ...settings,
                      bildirimler: { ...settings.bildirimler, email: e.target.checked }
                    })}
                  />
                  <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-900">
                    E-posta Bildirimleri
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="smsNotifications"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={settings.bildirimler.sms}
                    onChange={(e) => setSettings({
                      ...settings,
                      bildirimler: { ...settings.bildirimler, sms: e.target.checked }
                    })}
                  />
                  <label htmlFor="smsNotifications" className="ml-2 block text-sm text-gray-900">
                    SMS Bildirimleri
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="pushNotifications"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={settings.bildirimler.push}
                    onChange={(e) => setSettings({
                      ...settings,
                      bildirimler: { ...settings.bildirimler, push: e.target.checked }
                    })}
                  />
                  <label htmlFor="pushNotifications" className="ml-2 block text-sm text-gray-900">
                    Push Bildirimleri
                  </label>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-medium mb-4">Fatura Ayarları</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fatura Seri No</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={settings.faturaSeriNo}
                    onChange={(e) => setSettings({ ...settings, faturaSeriNo: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fatura Başlangıç No</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={settings.faturaBaslangicNo}
                    onChange={(e) => setSettings({ ...settings, faturaBaslangicNo: e.target.value })}
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="autoInvoice"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={settings.otomatikFatura}
                    onChange={(e) => setSettings({ ...settings, otomatikFatura: e.target.checked })}
                  />
                  <label htmlFor="autoInvoice" className="ml-2 block text-sm text-gray-900">
                    Otomatik Fatura Oluştur
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Ayarları Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 