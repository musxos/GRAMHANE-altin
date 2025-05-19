import React, { useState } from 'react';
import { 
  PlusIcon, 
  SearchIcon, 
  CheckCircleIcon, 
  XCircleIcon, 
  FileTextIcon, 
  FilterIcon 
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Table } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { BankTransaction } from '../types';
import { mockBankTransactions, formatCurrency, formatDate } from '../utils/mockData';
import { useAuth } from '../contexts/AuthContext';

export const TransactionsPage: React.FC = () => {
  const { authState } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter transactions by branch
  const branchTransactions = mockBankTransactions.filter(
    (transaction) => transaction.branchId === authState.user?.branchId
  );
  
  // Filter transactions by search term
  const filteredTransactions = searchTerm
    ? branchTransactions.filter(
        (transaction) =>
          transaction.senderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.tcNumber.includes(searchTerm)
      )
    : branchTransactions;
  
  const columns = [
    {
      key: 'senderName',
      title: 'Gönderen Adı',
    },
    {
      key: 'tcNumber',
      title: 'T.C. Kimlik No',
    },
    {
      key: 'amount',
      title: 'Tutar',
      render: (transaction: BankTransaction) => (
        <span className={transaction.amount >= 0 ? 'text-success-600' : 'text-error-600'}>
          {transaction.amount >= 0 ? '+' : ''}{formatCurrency(transaction.amount)}
        </span>
      ),
    },
    {
      key: 'date',
      title: 'Tarih',
      render: (transaction: BankTransaction) => formatDate(transaction.date),
    },
    {
      key: 'invoiceIssued',
      title: 'Fatura Durumu',
      render: (transaction: BankTransaction) => (
        <div className="flex items-center">
          {transaction.invoiceIssued ? (
            <>
              <CheckCircleIcon className="w-4 h-4 text-success-500 mr-1" />
              <Badge variant="success" size="sm">
                {transaction.invoiceType === 'pre' ? 'Ön Fatura' : 'E-Fatura'}
              </Badge>
            </>
          ) : (
            <>
              <XCircleIcon className="w-4 h-4 text-secondary-400 mr-1" />
              <Badge size="sm">Fatura Yok</Badge>
            </>
          )}
        </div>
      ),
    },
    {
      key: 'actions',
      title: 'İşlemler',
      render: (transaction: BankTransaction) => (
        <div className="flex space-x-2">
          {!transaction.invoiceIssued && (
            <>
              <Button
                variant="outline"
                size="sm"
                icon={<FileTextIcon size={16} />}
              >
                Ön Fatura
              </Button>
              <Button
                variant="primary"
                size="sm"
                icon={<FileTextIcon size={16} />}
              >
                E-Fatura
              </Button>
            </>
          )}
          {transaction.invoiceIssued && (
            <Button
              variant="secondary"
              size="sm"
              icon={<FileTextIcon size={16} />}
            >
              Görüntüle
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Banka İşlemleri</h1>
          <p className="text-secondary-600">Tüm banka işlemlerinizi yönetin</p>
        </div>
        <Button
          variant="primary"
          icon={<PlusIcon size={20} />}
        >
          Yeni İşlem Ekle
        </Button>
      </div>
      
      <Card>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <Input
            placeholder="İsim veya TC No ile ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            leftIcon={<SearchIcon size={20} />}
            className="w-full sm:w-80"
          />
          
          <Button
            variant="outline"
            icon={<FilterIcon size={20} />}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filtrele
          </Button>
        </div>
        
        {showFilters && (
          <div className="mb-6 p-4 bg-secondary-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Tarih Aralığı
                </label>
                <select className="w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                  <option>Tüm Tarihler</option>
                  <option>Bugün</option>
                  <option>Bu Hafta</option>
                  <option>Bu Ay</option>
                  <option>Özel</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Fatura Durumu
                </label>
                <select className="w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                  <option>Tümü</option>
                  <option>Fatura Kesilmiş</option>
                  <option>Fatura Kesilmemiş</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  İşlem Türü
                </label>
                <select className="w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                  <option>Tümü</option>
                  <option>Gelen Ödemeler</option>
                  <option>Giden Ödemeler</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button variant="secondary" className="mr-2">
                Sıfırla
              </Button>
              <Button variant="primary">
                Uygula
              </Button>
            </div>
          </div>
        )}
        
        <Table
          columns={columns}
          data={filteredTransactions}
          emptyMessage="İşlem bulunamadı"
        />
      </Card>
    </div>
  );
};