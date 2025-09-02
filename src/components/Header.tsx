// import React from 'react';
// import { Menu, ShoppingCart, User, Home, Utensils } from 'lucide-react';
// import { useCart } from '../contexts/CartContext';
// import { useAuth } from '../contexts/AuthContext';

// interface HeaderProps {
//   currentPage: string;
//   onPageChange: (page: string) => void;
// }

// export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
//   const { getTotalItems, setIsCartOpen } = useCart();
//   const { user, setIsLoginOpen } = useAuth();
//   const totalItems = getTotalItems();

//   return (
//     <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Utensils className="w-8 h-8 text-amber-600 mr-2" />
//             <h1 className="text-2xl font-bold text-amber-800">Savory Delights</h1>
//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <button
//               onClick={() => onPageChange('home')}
//               className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                 currentPage === 'home'
//                   ? 'text-amber-600 bg-amber-50'
//                   : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
//               }`}
//             >
//               <Home className="w-4 h-4 mr-2" />
//               Home
//             </button>
//             <button
//               onClick={() => onPageChange('menu')}
//               className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                 currentPage === 'menu'
//                   ? 'text-amber-600 bg-amber-50'
//                   : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
//               }`}
//             >
//               <Menu className="w-4 h-4 mr-2" />
//               Menu
//             </button>
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center space-x-4">
//             {/* Cart */}
//             <button
//               onClick={() => setIsCartOpen(true)}
//               className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors"
//             >
//               <ShoppingCart className="w-6 h-6" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
//                   {totalItems}
//                 </span>
//               )}
//             </button>

//             {/* User */}
//             {user ? (
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={user.avatar}
//                   alt={user.name}
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <span className="hidden sm:block text-sm text-gray-700">{user.name}</span>
//               </div>
//             ) : (
//               <button
//                 onClick={() => setIsLoginOpen(true)}
//                 className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
//               >
//                 <User className="w-4 h-4 mr-2" />
//                 Login
//               </button>
//             )}
//           </div>

//           {/* Mobile Menu */}
//           <div className="md:hidden flex items-center space-x-2">
//             <button
//               onClick={() => onPageChange('home')}
//               className={`p-2 rounded-md ${currentPage === 'home' ? 'text-amber-600' : 'text-gray-700'}`}
//             >
//               <Home className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => onPageChange('menu')}
//               className={`p-2 rounded-md ${currentPage === 'menu' ? 'text-amber-600' : 'text-gray-700'}`}
//             >
//               <Menu className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

import React from 'react';
import { Menu, ShoppingCart, User, Home, Utensils } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const { user, setIsLoginOpen } = useAuth();
  const totalItems = getTotalItems();

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <div className="flex items-center">
            <Utensils className="w-8 h-8 text-amber-600 mr-2" />
            <h1 className="text-2xl font-bold text-amber-800">Savory Delights</h1>
          </div>

          
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onPageChange('home')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </button>
            <button
              onClick={() => onPageChange('menu')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'menu'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              <Menu className="w-4 h-4 mr-2" />
              Menu
            </button>
          </nav>

          
          <div className="flex items-center space-x-4">
           
            {user && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>
            )}

            
            {user ? (
              <div className="flex items-center space-x-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden sm:block text-sm text-gray-700">{user.name}</span>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </button>
            )}
          </div>

          
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => onPageChange('home')}
              className={`p-2 rounded-md ${currentPage === 'home' ? 'text-amber-600' : 'text-gray-700'}`}
            >
              <Home className="w-5 h-5" />
            </button>
            <button
              onClick={() => onPageChange('menu')}
              className={`p-2 rounded-md ${currentPage === 'menu' ? 'text-amber-600' : 'text-gray-700'}`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};