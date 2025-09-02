import React, { useState, useEffect } from 'react';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Cart } from './components/Cart';
import { Login } from './components/Login';
import { UserProfile } from './components/UserProfile';
import { Checkout } from './components/Checkout';
import { LoadingScreen } from './components/LoadingScreen';
import { Utensils } from 'lucide-react';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  const handleCheckout = () => {
    setCurrentPage('checkout');
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="min-h-screen">
          {currentPage !== 'checkout' && (
            <>
              <Header 
                currentPage={currentPage} 
                onPageChange={setCurrentPage} 
              />
              
              
              {user && currentPage !== 'checkout' && (
                <button
                  onClick={() => setIsProfileOpen(true)}
                  className="fixed top-20 right-4 z-30 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 transform hover:scale-110"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                </button>
              )}
            </>
          )}

         
          <main className="transition-all duration-500 ease-in-out">
            {currentPage === 'home' && <Home />}
            {currentPage === 'menu' && <Menu />}
            {currentPage === 'checkout' && <Checkout onBack={() => setCurrentPage('menu')} />}
          </main>

          
          <Cart onCheckout={handleCheckout} />
          <Login />
          <UserProfile 
            isOpen={isProfileOpen} 
            onClose={() => setIsProfileOpen(false)} 
          />
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;