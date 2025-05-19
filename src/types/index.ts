// User related types
export interface User {
  id: string;
  username: string;
  branchId: string;
  branchName: string;
  role: string;
}

// Authentication related types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Bank transaction related types
export interface BankTransaction {
  id: string;
  senderName: string;
  tcNumber: string;
  amount: number;
  date: string;
  invoiceIssued: boolean;
  invoiceType?: 'pre' | 'e' | null;
  branchId: string;
}

// Market rates related types
export interface MarketRate {
  id: string;
  name: string;
  value: number;
  change: number;
  lastUpdated: string;
}

// Financial summary related types
export interface FinancialSummary {
  dailyIncome: number;
  monthlyIncome: number;
  dailyExpense: number;
  monthlyExpense: number;
  portfolioValue: number;
}

// Date range filter type
export type DateRange = 'today' | 'thisMonth' | 'custom';

export interface DateFilter {
  range: DateRange;
  startDate?: string;
  endDate?: string;
}