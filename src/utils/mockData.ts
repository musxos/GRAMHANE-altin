import { BankTransaction, MarketRate, FinancialSummary, User } from '../types';

// Mock users data
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'demo1',
    branchId: 'branch1',
    branchName: 'İstanbul Şubesi',
    role: 'manager',
  },
  {
    id: '2',
    username: 'demo2',
    branchId: 'branch2',
    branchName: 'Ankara Şubesi',
    role: 'employee',
  },
];

// Mock bank transactions data
export const mockBankTransactions: BankTransaction[] = [
  {
    id: '1',
    senderName: 'Ahmet Yılmaz',
    tcNumber: '12345678901',
    amount: 5000,
    date: '2025-05-01T10:30:00',
    invoiceIssued: true,
    invoiceType: 'e',
    branchId: 'branch1',
  },
  {
    id: '2',
    senderName: 'Mehmet Kaya',
    tcNumber: '12345678902',
    amount: 3500,
    date: '2025-05-01T14:15:00',
    invoiceIssued: false,
    branchId: 'branch1',
  },
  {
    id: '3',
    senderName: 'Ayşe Demir',
    tcNumber: '12345678903',
    amount: -2000,
    date: '2025-05-01T16:45:00',
    invoiceIssued: true,
    invoiceType: 'pre',
    branchId: 'branch1',
  },
  {
    id: '4',
    senderName: 'Fatma Çelik',
    tcNumber: '12345678904',
    amount: 7800,
    date: '2025-04-30T09:20:00',
    invoiceIssued: true,
    invoiceType: 'e',
    branchId: 'branch1',
  },
  {
    id: '5',
    senderName: 'Mustafa Şahin',
    tcNumber: '12345678905',
    amount: -1500,
    date: '2025-04-29T11:10:00',
    invoiceIssued: false,
    branchId: 'branch1',
  },
];

// Mock market rates data
export const mockMarketRates: MarketRate[] = [
  {
    id: '1',
    name: 'Gram Altın',
    value: 2150.75,
    change: 1.2,
    lastUpdated: '2025-05-01T16:00:00',
  },
  {
    id: '2',
    name: 'Gram Gümüş',
    value: 25.45,
    change: 0.5,
    lastUpdated: '2025-05-01T16:00:00',
  },
  {
    id: '3',
    name: 'Çeyrek Altın',
    value: 3575.25,
    change: 0.9,
    lastUpdated: '2025-05-01T16:00:00',
  },
  {
    id: '4',
    name: 'Tam Altın',
    value: 14250.50,
    change: 1.4,
    lastUpdated: '2025-05-01T16:00:00',
  },
];

// Mock financial summary data
export const mockFinancialSummary = {
  dailyIncome: 15000,
  monthlyIncome: 450000,
  dailyExpense: 5000,
  portfolioValue: 2500000,
};

// Function to get transactions filtered by branch
export const getTransactionsByBranch = (branchId: string): BankTransaction[] => {
  return mockBankTransactions.filter(transaction => transaction.branchId === branchId);
};

// Function to authenticate user
export const authenticateUser = (username: string, password: string): User | null => {
  if (username === 'demo1' && password === 'demo1') {
    return mockUsers[0];
  }
  return null;
};

// Function to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  }).format(amount);
};

// Function to format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};