import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export function Header() {
  const { authState } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                {authState.user?.branchName}
              </h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  {authState.user?.username}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}