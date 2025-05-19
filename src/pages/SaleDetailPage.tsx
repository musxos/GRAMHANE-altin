import React, { useState } from 'react';

interface SaleDetailProps {
  saleId?: string;
}

export function SaleDetailPage({ saleId }: SaleDetailProps) {
  const [formData, setFormData] = useState({
    musteriBilgileri: {
      tcNo: '',
      adSoyad: '',
      telefon: '',
      email: '',
      adres: '',
      vergiNo: '',
      vergiDairesi: ''
    },
    urunBilgileri: {
      urunTuru: '',
      altinAyar: '',
      miktar: '',
      birimFiyat: '',
      iscilikOrani: '1',
      iscilikTutari: '',
      toplamTutar: ''
    },
    odemeBilgileri: {
      odemeYontemi: '',
      peşinat: '',
      kalanTutar: '',
      vadeTarihi: ''
    }
  });

  const iscilikOranlari = [
    { id: '1', oran: '1%', aciklama: 'Standart İşçilik' },
    { id: '2', oran: '2%', aciklama: 'Özel Tasarım' },
    { id: '3', oran: '3%', aciklama: 'El İşçiliği' },
    { id: '4', oran: '4%', aciklama: 'Özel Model' },
    { id: '5', oran: '5%', aciklama: 'Lüks Tasarım' }
  ];

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));

    // Otomatik hesaplamalar
    if (section === 'urunBilgileri') {
      if (field === 'miktar' || field === 'birimFiyat' || field === 'iscilikOrani') {
        const miktar = parseFloat(formData.urunBilgileri.miktar) || 0;
        const birimFiyat = parseFloat(formData.urunBilgileri.birimFiyat) || 0;
        const iscilikOrani = parseFloat(formData.urunBilgileri.iscilikOrani) || 0;

        const hamTutar = miktar * birimFiyat;
        const iscilikTutari = (hamTutar * iscilikOrani) / 100;
        const toplamTutar = hamTutar + iscilikTutari;

        setFormData(prev => ({
          ...prev,
          urunBilgileri: {
            ...prev.urunBilgileri,
            iscilikTutari: iscilikTutari.toFixed(2),
            toplamTutar: toplamTutar.toFixed(2)
          }
        }));
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Yeni Satış</h1>
        <div className="flex space-x-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
            İptal
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Fatura Kes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Müşteri Bilgileri */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Müşteri Bilgileri</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">TC Kimlik No</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.musteriBilgileri.tcNo}
                onChange={(e) => handleInputChange('musteriBilgileri', 'tcNo', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.musteriBilgileri.adSoyad}
                onChange={(e) => handleInputChange('musteriBilgileri', 'adSoyad', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Telefon</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.musteriBilgileri.telefon}
                  onChange={(e) => handleInputChange('musteriBilgileri', 'telefon', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">E-posta</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.musteriBilgileri.email}
                  onChange={(e) => handleInputChange('musteriBilgileri', 'email', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Adres</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                value={formData.musteriBilgileri.adres}
                onChange={(e) => handleInputChange('musteriBilgileri', 'adres', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Vergi No</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.musteriBilgileri.vergiNo}
                  onChange={(e) => handleInputChange('musteriBilgileri', 'vergiNo', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Vergi Dairesi</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.musteriBilgileri.vergiDairesi}
                  onChange={(e) => handleInputChange('musteriBilgileri', 'vergiDairesi', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ürün Bilgileri */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Ürün Bilgileri</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Ürün Türü</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.urunBilgileri.urunTuru}
                onChange={(e) => handleInputChange('urunBilgileri', 'urunTuru', e.target.value)}
              >
                <option value="">Seçiniz</option>
                <option value="bilezik">Bilezik</option>
                <option value="kolye">Kolye</option>
                <option value="yuzuk">Yüzük</option>
                <option value="kup">Küpe</option>
                <option value="set">Set</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Altın Ayarı</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.urunBilgileri.altinAyar}
                onChange={(e) => handleInputChange('urunBilgileri', 'altinAyar', e.target.value)}
              >
                <option value="">Seçiniz</option>
                <option value="24">24 Ayar</option>
                <option value="22">22 Ayar</option>
                <option value="18">18 Ayar</option>
                <option value="14">14 Ayar</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Miktar (gr)</label>
                <input
                  type="number"
                  step="0.01"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.urunBilgileri.miktar}
                  onChange={(e) => handleInputChange('urunBilgileri', 'miktar', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Birim Fiyat (₺)</label>
                <input
                  type="number"
                  step="0.01"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.urunBilgileri.birimFiyat}
                  onChange={(e) => handleInputChange('urunBilgileri', 'birimFiyat', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">İşçilik Oranı</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.urunBilgileri.iscilikOrani}
                onChange={(e) => handleInputChange('urunBilgileri', 'iscilikOrani', e.target.value)}
              >
                {iscilikOranlari.map((oran) => (
                  <option key={oran.id} value={oran.id}>
                    {oran.oran} - {oran.aciklama}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">İşçilik Tutarı</p>
                  <p className="text-lg font-semibold">₺{formData.urunBilgileri.iscilikTutari}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Toplam Tutar</p>
                  <p className="text-lg font-semibold text-blue-600">₺{formData.urunBilgileri.toplamTutar}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ödeme Bilgileri */}
        <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Ödeme Bilgileri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Ödeme Yöntemi</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.odemeBilgileri.odemeYontemi}
                onChange={(e) => handleInputChange('odemeBilgileri', 'odemeYontemi', e.target.value)}
              >
                <option value="">Seçiniz</option>
                <option value="nakit">Nakit</option>
                <option value="krediKarti">Kredi Kartı</option>
                <option value="havale">Havale/EFT</option>
                <option value="taksit">Taksitli Ödeme</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Peşinat</label>
              <input
                type="number"
                step="0.01"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.odemeBilgileri.peşinat}
                onChange={(e) => handleInputChange('odemeBilgileri', 'peşinat', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Kalan Tutar</label>
              <input
                type="number"
                step="0.01"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.odemeBilgileri.kalanTutar}
                onChange={(e) => handleInputChange('odemeBilgileri', 'kalanTutar', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Vade Tarihi</label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.odemeBilgileri.vadeTarihi}
                onChange={(e) => handleInputChange('odemeBilgileri', 'vadeTarihi', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 