import React, { useState } from 'react';
import { X, Phone, User, Mail, MapPin, Hash } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Login: React.FC = () => {
  const { isLoginOpen, setIsLoginOpen, login, register } = useAuth();
  const [step, setStep] = useState<'phone' | 'otp' | 'register'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    pincode: ''
  });

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.some((user: any) => user.mobile === phone);
    
    if (userExists) {
      setStep('otp');
    } else {
      setUserData({ ...userData, mobile: phone });
      setStep('register');
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(phone, otp);
    if (success) {
      setIsLoginOpen(false);
      resetForm();
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await register(userData);
    if (success) {
      setIsLoginOpen(false);
      resetForm();
    }
  };

  const resetForm = () => {
    setStep('phone');
    setPhone('');
    setOtp('');
    setUserData({ name: '', mobile: '', email: '', address: '', pincode: '' });
  };

  if (!isLoginOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">
            {step === 'phone' ? 'Login / Sign Up' : step === 'otp' ? 'Verify OTP' : 'Complete Registration'}
          </h2>
          <button
            onClick={() => {
              setIsLoginOpen(false);
              resetForm();
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {step === 'phone' && (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your mobile number"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Continue
              </button>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter OTP sent to {phone}
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-center text-lg tracking-widest"
                  maxLength={6}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Verify & Login
              </button>
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="w-full text-amber-600 hover:text-amber-700 py-2 transition-colors"
              >
                Change Number
              </button>
            </form>
          )}

          {step === 'register' && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={userData.address}
                    onChange={(e) => setUserData({...userData, address: e.target.value})}
                    placeholder="Enter your address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={userData.pincode}
                    onChange={(e) => setUserData({...userData, pincode: e.target.value})}
                    placeholder="Enter pincode"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Create Account
              </button>
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="w-full text-amber-600 hover:text-amber-700 py-2 transition-colors"
              >
                Back
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};