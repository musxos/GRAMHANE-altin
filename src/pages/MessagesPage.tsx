import React, { useState } from 'react';

interface Message {
  id: string;
  gonderen: string;
  konu: string;
  mesaj: string;
  tarih: string;
  okundu: boolean;
  onemli: boolean;
}

export function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      gonderen: 'Ahmet Yılmaz',
      konu: 'Sipariş Durumu',
      mesaj: 'Merhaba, siparişimin durumu hakkında bilgi alabilir miyim?',
      tarih: '2024-03-15 14:30',
      okundu: false,
      onemli: true
    },
    {
      id: '2',
      gonderen: 'Ayşe Demir',
      konu: 'Fatura Talebi',
      mesaj: 'Son satın aldığım ürün için fatura talep ediyorum.',
      tarih: '2024-03-14 10:15',
      okundu: true,
      onemli: false
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    if (!message.okundu) {
      setMessages(messages.map(msg =>
        msg.id === message.id ? { ...msg, okundu: true } : msg
      ));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mesajlar</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Yeni Mesaj
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700">Toplam Mesaj</h3>
          <p className="text-2xl font-bold text-blue-600">{messages.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700">Okunmamış</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {messages.filter(msg => !msg.okundu).length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700">Önemli</h3>
          <p className="text-2xl font-bold text-red-600">
            {messages.filter(msg => msg.onemli).length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Mesaj Ara..."
                  className="p-2 border rounded-md w-full"
                />
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 cursor-pointer hover:bg-gray-50 ${
                    selectedMessage?.id === message.id ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => handleMessageClick(message)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className={`font-medium ${!message.okundu ? 'text-blue-600' : 'text-gray-900'}`}>
                        {message.gonderen}
                      </h4>
                      <p className="text-sm text-gray-600 truncate">{message.konu}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {message.onemli && (
                        <span className="text-red-500">★</span>
                      )}
                      <span className="text-xs text-gray-500">{message.tarih}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          {selectedMessage ? (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{selectedMessage.konu}</h2>
                  <p className="text-sm text-gray-600">Gönderen: {selectedMessage.gonderen}</p>
                  <p className="text-sm text-gray-600">Tarih: {selectedMessage.tarih}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">Yanıtla</button>
                  <button className="text-red-600 hover:text-red-900">Sil</button>
                </div>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.mesaj}</p>
              </div>
              <div className="mt-6 border-t pt-4">
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={4}
                  placeholder="Yanıtınızı yazın..."
                />
                <div className="mt-2 flex justify-end">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Yanıt Gönder
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center">
              <p className="text-gray-500">Mesaj seçilmedi</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 