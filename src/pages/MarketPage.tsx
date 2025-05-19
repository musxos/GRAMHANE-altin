import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { RefreshCwIcon, TrendingUpIcon, TrendingDownIcon, EditIcon } from 'lucide-react';
import { mockMarketRates, formatCurrency, formatDate } from '../utils/mockData';

interface MarketCardProps {
  title: string;
  value: number;
  change: number;
  lastUpdated: string;
  onEdit: () => void;
}

const MarketCard: React.FC<MarketCardProps> = ({ 
  title, 
  value, 
  change, 
  lastUpdated,
  onEdit 
}) => {
  const isPositive = change >= 0;

  return (
    <Card className="overflow-hidden">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-medium text-secondary-900">{title}</h3>
        <Button 
          variant="ghost" 
          size="sm"
          icon={<EditIcon size={16} />}
          onClick={onEdit}
        >
          Düzenle
        </Button>
      </div>
      
      <div className="mt-4 flex justify-between items-end">
        <div>
          <p className="text-3xl font-bold text-secondary-900">
            {formatCurrency(value)}
          </p>
          <div className="flex items-center mt-2">
            {isPositive ? (
              <TrendingUpIcon className="w-4 h-4 text-success-500 mr-1" />
            ) : (
              <TrendingDownIcon className="w-4 h-4 text-error-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${isPositive ? 'text-success-600' : 'text-error-600'}`}>
              {isPositive ? '+' : ''}{change}%
            </span>
          </div>
        </div>
        
        <p className="text-xs text-secondary-500">
          Son güncelleme: {formatDate(lastUpdated)}
        </p>
      </div>
    </Card>
  );
};

export const MarketPage: React.FC = () => {
  const [marketRates, setMarketRates] = useState(mockMarketRates);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<number>(0);
  
  const handleEdit = (id: string, currentValue: number) => {
    setIsEditing(id);
    setEditValue(currentValue);
  };
  
  const handleSave = (id: string) => {
    setMarketRates(
      marketRates.map((rate) =>
        rate.id === id
          ? {
              ...rate,
              value: editValue,
              lastUpdated: new Date().toISOString(),
            }
          : rate
      )
    );
    setIsEditing(null);
  };
  
  const handleCancel = () => {
    setIsEditing(null);
  };
  
  const handleRefresh = () => {
    // In a real app, this would fetch current rates from an API
    alert('Gerçek bir uygulamada, bu kurları bir API\'den güncelleyecektir.');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Altın & Gümüş Borsa</h1>
          <p className="text-secondary-600">Güncel piyasa değerlerini görüntüleyin ve yönetin</p>
        </div>
        <Button
          variant="outline"
          icon={<RefreshCwIcon size={20} />}
          onClick={handleRefresh}
        >
          Kurları Güncelle
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketRates.map((rate) => (
          <div key={rate.id}>
            {isEditing === rate.id ? (
              <Card>
                <h3 className="text-lg font-medium text-secondary-900 mb-4">{rate.name}</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Yeni Değer (TL)
                  </label>
                  <input
                    type="number"
                    value={editValue}
                    onChange={(e) => setEditValue(Number(e.target.value))}
                    className="w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleCancel}
                  >
                    İptal
                  </Button>
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={() => handleSave(rate.id)}
                  >
                    Kaydet
                  </Button>
                </div>
              </Card>
            ) : (
              <MarketCard
                title={rate.name}
                value={rate.value}
                change={rate.change}
                lastUpdated={rate.lastUpdated}
                onEdit={() => handleEdit(rate.id, rate.value)}
              />
            )}
          </div>
        ))}
      </div>
      
      <Card title="Kur Geçmişi" className="mt-8">
        <div className="h-80 flex items-center justify-center bg-secondary-50 rounded-lg border border-dashed border-secondary-300">
          <p className="text-secondary-500">Burada altın ve gümüş kurlarının zaman içindeki değişimini gösteren grafikler olacaktır.</p>
        </div>
      </Card>
    </div>
  );
};