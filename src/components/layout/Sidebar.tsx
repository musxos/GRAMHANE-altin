import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon,
  UsersIcon,
  ShoppingCartIcon,
  CurrencyIcon,
  FileTextIcon,
  MessageSquareIcon,
  TrendingUpIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const menuItems = [
  { path: '/dashboard', icon: HomeIcon, label: 'Ana Sayfa' },
  { path: '/customers', icon: UsersIcon, label: 'Müşteriler' },
  { path: '/sales', icon: ShoppingCartIcon, label: 'Satışlar' },
  { path: '/buy-gold', icon: CurrencyIcon, label: 'Altın Al' },
  { path: '/invoices', icon: FileTextIcon, label: 'Faturalar' },
  { path: '/messages', icon: MessageSquareIcon, label: 'Mesajlar' },
  { path: '/incoming-payments', icon: TrendingUpIcon, label: 'Gelen Ödemeler' },
  { path: '/profile', icon: UserIcon, label: 'Profil' },
  { path: '/settings', icon: SettingsIcon, label: 'Ayarlar' }
];

export function Sidebar() {
  const { authState, logout } = useAuth();
  
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-white border-r border-secondary-200">
        <div className="flex items-center h-16 px-4 border-b border-secondary-200">
          <div className="flex items-center space-x-2">
            <CurrencyIcon className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-secondary-900">GRAMHANE</span>
          </div>
        </div>
        
        <div className="flex flex-col justify-between h-0 flex-1 overflow-y-auto pt-5 pb-4">
          <div className="px-2 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </NavLink>
            ))}
          </div>
          
          <div className="px-2 mt-6">
            <div className="flex items-center px-4 py-3 bg-secondary-50 rounded-md">
              <div className="flex-shrink-0">
                <div className="bg-primary-100 text-primary-700 rounded-full h-10 w-10 flex items-center justify-center">
                  {authState.user?.username.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-secondary-700">
                  {authState.user?.username}
                </p>
                <p className="text-xs text-secondary-500">
                  {authState.user?.branchName}
                </p>
              </div>
            </div>
            
            <button
              onClick={logout}
              className="flex items-center w-full px-3 py-2 mt-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors"
            >
              <LogOutIcon className="w-5 h-5 mr-3" />
              Çıkış Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}