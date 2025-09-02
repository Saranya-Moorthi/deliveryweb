// import React from 'react';
// import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
// import { useCart } from '../contexts/CartContext';
// import { useAuth } from '../contexts/AuthContext';

// interface CartProps {
//   onCheckout: () => void;
// }

// export const Cart: React.FC<CartProps> = ({ onCheckout }) => {
//   const { cartItems, isCartOpen, setIsCartOpen, addToCart, removeFromCart, getTotalAmount } = useCart();
//   const { user, setIsLoginOpen } = useAuth();

//   const handleCheckout = () => {
//     if (!user) {
//       setIsLoginOpen(true);
//       return;
//     }
//     setIsCartOpen(false);
//     onCheckout();
//   };

//   return (
//     <>
//       {/* Overlay */}
//       {isCartOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
//           onClick={() => setIsCartOpen(false)}
//         />
//       )}

//       {/* Cart Panel */}
//       <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
//         isCartOpen ? 'translate-x-0' : 'translate-x-full'
//       }`}>
//         <div className="flex flex-col h-full">
//           {/* Header */}
//           <div className="flex items-center justify-between p-6 border-b border-gray-200">
//             <h2 className="text-xl font-bold text-gray-800 flex items-center">
//               <ShoppingBag className="w-6 h-6 mr-2 text-amber-600" />
//               Your Cart
//             </h2>
//             <button
//               onClick={() => setIsCartOpen(false)}
//               className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <X className="w-6 h-6 text-gray-600" />
//             </button>
//           </div>

//           {/* Cart Items */}
//           <div className="flex-1 overflow-y-auto p-6">
//             {cartItems.length === 0 ? (
//               <div className="text-center py-12">
//                 <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                 <p className="text-gray-500">Your cart is empty</p>
//                 <p className="text-sm text-gray-400 mt-2">Add some delicious items to get started</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {cartItems.map(item => (
//                   <div key={item.product.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
//                     <img
//                       src={item.product.image}
//                       alt={item.product.name}
//                       className="w-16 h-16 object-cover rounded-md"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
//                       <p className="text-amber-600 font-bold">${item.product.price}</p>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <button
//                         onClick={() => removeFromCart(item.product.id)}
//                         className="w-8 h-8 bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center justify-center transition-colors"
//                       >
//                         <Minus className="w-4 h-4" />
//                       </button>
//                       <span className="font-semibold text-gray-800 min-w-[20px] text-center">
//                         {item.quantity}
//                       </span>
//                       <button
//                         onClick={() => addToCart(item.product)}
//                         className="w-8 h-8 bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center justify-center transition-colors"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Footer */}
//           {cartItems.length > 0 && (
//             <div className="border-t border-gray-200 p-6 space-y-4">
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-semibold text-gray-800">Total:</span>
//                 <span className="text-2xl font-bold text-amber-600">${getTotalAmount().toFixed(2)}</span>
//               </div>
//               <button
//                 onClick={handleCheckout}
//                 className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
//               >
//                 {user ? 'Proceed to Checkout' : 'Login to Checkout'}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

interface CartProps {
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ onCheckout }) => {
  const { cartItems, isCartOpen, setIsCartOpen, addToCart, removeFromCart, getTotalAmount } = useCart();
  const { user, setIsLoginOpen } = useAuth();

  const handleCheckout = () => {
    if (!user) {
      setIsLoginOpen(true);
      return;
    }
    setIsCartOpen(false);
    onCheckout();
  };

  // Only render cart if user is logged in
  if (!user) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <ShoppingBag className="w-6 h-6 mr-2 text-amber-600" />
              Your Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
                <p className="text-sm text-gray-400 mt-2">Add some delicious items to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.product.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
                      <p className="text-amber-600 font-bold">${item.product.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="w-8 h-8 bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-semibold text-gray-800 min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => addToCart(item.product)}
                        className="w-8 h-8 bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-amber-600">${getTotalAmount().toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};