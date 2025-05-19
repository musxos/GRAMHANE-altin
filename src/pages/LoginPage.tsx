import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CoinsIcon, UserIcon, LockIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, authState } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      // Hata zaten AuthContext'te gösteriliyor
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <CoinsIcon className="h-16 w-16 text-primary-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-secondary-900">
          GRAMHANE
        </h2>
        <p className="mt-2 text-center text-sm text-secondary-600">
          Kuyumcu İşletme Yönetim Sistemi
        </p>
        <p className="mt-1 text-center text-xs text-secondary-500">
          Geliştirici: Mustafa Sarı
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="py-8 px-4 sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              label="Kullanıcı Adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              leftIcon={<UserIcon size={20} />}
              fullWidth
              error={authState.error ? ' ' : undefined}
            />

            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              label="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<LockIcon size={20} />}
              fullWidth
              error={authState.error}
            />

            <div>
              <Button
                type="submit"
                fullWidth
                isLoading={isLoading}
              >
                Giriş Yap
              </Button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-secondary-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-secondary-500">
                  Demo Hesabı
                </span>
              </div>
            </div>
            
            <div className="mt-4 bg-secondary-50 p-3 rounded-md">
              <p className="text-xs text-secondary-700 text-center">
                <strong>Kullanıcı adı:</strong> demo1
                <br />
                <strong>Şifre:</strong> demo1
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}