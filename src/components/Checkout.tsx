import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, CreditCard, Truck } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

interface CheckoutProps {
  onBack: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onBack }) => {
  const { cartItems, getTotalAmount, clearCart } = useCart();
  const { user } = useAuth();
  const [deliveryTime, setDeliveryTime] = useState('30-45');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const deliveryFee = 2.99;
  const tax = getTotalAmount() * 0.08;
  const totalAmount = getTotalAmount() + deliveryFee + tax;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 mb-6">Your delicious meal is being prepared and will be delivered soon.</p>
          <p className="text-sm text-gray-500 mb-6">Order ID: #SD{Date.now().toString().slice(-6)}</p>
          <button
            onClick={onBack}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-4xl mx-auto p-4">
        
        <div className="flex items-center mb-8 pt-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white rounded-full transition-colors mr-4"
          >
            <ArrowLeft className="w-6 h-6 text-amber-600" />
          </button>
          <h1 className="text-2xl font-bold text-amber-800">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
           
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                Delivery Address
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">{user?.name}</p>
                <p className="text-gray-600">{user?.address}</p>
                <p className="text-gray-600">{user?.pincode}</p>
                <p className="text-gray-600">{user?.mobile}</p>
              </div>
            </div>

           
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-amber-600" />
                Delivery Time
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {['30-45', '60-75'].map(time => (
                  <button
                    key={time}
                    onClick={() => setDeliveryTime(time)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      deliveryTime === time
                        ? 'border-amber-600 bg-amber-50 text-amber-600'
                        : 'border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    <div className="font-semibold">{time} mins</div>
                    <div className="text-sm text-gray-500">
                      {time === '30-45' ? 'Express' : 'Standard'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-amber-600" />
                Payment Method
              </h3>
              <div className="space-y-3">
                {[
                  { id: 'cash', label: 'Cash on Delivery', icon: Truck },
                  { id: 'card', label: 'Credit/Debit Card', icon: CreditCard }
                ].map(method => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all flex items-center ${
                      paymentMethod === method.id
                        ? 'border-amber-600 bg-amber-50 text-amber-600'
                        : 'border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    <method.icon className="w-5 h-5 mr-3" />
                    {method.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                {cartItems.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{item.product.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-gray-800">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">${getTotalAmount().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="text-gray-800">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-800">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                  <span className="text-gray-800">Total</span>
                  <span className="text-amber-600">${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-bold text-lg mt-6 transition-all duration-200 transform hover:scale-105"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};