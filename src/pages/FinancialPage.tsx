import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  TrendingUpIcon, 
  TrendingDownIcon, 
  CoinsIcon, 
  CalendarIcon,
  FilterIcon
} from 'lucide-react';
import { mockFinancialSummary, formatCurrency } from '../utils/mockData';
import { DateRange } from '../types';

export const FinancialPage: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>('today');
  const [showCustomDates, setShowCustomDates] = useState(false);
  
  // Financial summary would typically be filtered by the selected date range
  // Here we just use the mock data
  const summary = mockFinancialSummary;
  
  const handleDateRangeChange = (range: DateRange) => {
    setDateRange(range);
    if (range === 'custom') {
      setShowCustomDates(true);
    } else {
      setShowCustomDates(false);
    }
  };
  
  const summaryCards = [
    {
      title: 'Günlük Gelir',
      value: formatCurrency(summary.dailyIncome),
      icon: <TrendingUpIcon className="h-8 w-8 text-success-500" />,
      color: 'bg-success-50',
      textColor: 'text-success-700',
    },
    {
      title: 'Günlük Gider',
      value: formatCurrency(summary.dailyExpense),
      icon: <TrendingDownIcon className="h-8 w-8 text-error-500" />,
      color: 'bg-error-50',
      textColor: 'text-error-700',
    },
    {
      title: 'Aylık Gelir',
      value: formatCurrency(summary.monthlyIncome),
      icon: <TrendingUpIcon className="h-8 w-8 text-success-500" />,
      color: 'bg-success-50',
      textColor: 'text-success-700',
    },
    {
      title: 'Aylık Gider',
      value: formatCurrency(summary.monthlyExpense),
      icon: <TrendingDownIcon className="h-8 w-8 text-error-500" />,
      color: 'bg-error-50',
      textColor: 'text-error-700',
    },
    {
      title: 'Portföy Değeri',
      value: formatCurrency(summary.portfolioValue),
      icon: <CoinsIcon className="h-8 w-8 text-primary-600" />,
      color: 'bg-primary-50',
      textColor: 'text-primary-700',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Finansal Rapor</h1>
          <p className="text-secondary-600">Finansal özet ve raporlar</p>
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant={dateRange === 'today' ? 'primary' : 'outline'}
            onClick={() => handleDateRangeChange('today')}
          >
            Bugün
          </Button>
          <Button
            variant={dateRange === 'thisMonth' ? 'primary' : 'outline'}
            onClick={() => handleDateRangeChange('thisMonth')}
          >
            Bu Ay
          </Button>
          <Button
            variant={dateRange === 'custom' ? 'primary' : 'outline'}
            icon={<CalendarIcon size={20} />}
            onClick={() => handleDateRangeChange('custom')}
          >
            Özel
          </Button>
        </div>
      </div>
      
      {showCustomDates && (
        <Card>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Başlangıç Tarihi
              </label>
              <input
                type="date"
                className="w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Bitiş Tarihi
              </label>
              <input
                type="date"
                className="w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="primary">
              Uygula
            </Button>
          </div>
        </Card>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {summaryCards.map((card, index) => (
          <Card key={index}>
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-secondary-500">{card.title}</p>
              <div className={`p-2 rounded-lg ${card.color}`}>{card.icon}</div>
            </div>
            <p className={`mt-4 text-2xl font-semibold ${card.textColor}`}>
              {card.value}
            </p>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Gelir ve Gider Grafiği" className="h-96">
          <div className="h-80 flex items-center justify-center bg-secondary-50 rounded-lg border border-dashed border-secondary-300">
            <p className="text-secondary-500">Burada gelir ve gider karşılaştırma grafiği olacaktır.</p>
          </div>
        </Card>
        
        <Card title="Aylık Trend Analizi" className="h-96">
          <div className="h-80 flex items-center justify-center bg-secondary-50 rounded-lg border border-dashed border-secondary-300">
            <p className="text-secondary-500">Burada aylık trend analiz grafiği olacaktır.</p>
          </div>
        </Card>
      </div>
    </div>
  );
};