import React, { useState, useRef, useEffect } from 'react';
import { Edit2, Save, X, User, Mail, MapPin, Hash, Phone } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement>; // Reference to the navbar trigger button
}

export const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose, triggerRef }) => {
  const { user, updateUser, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    address: user?.address || '',
    pincode: user?.pincode || ''
  });
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSave = () => {
    updateUser(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: user?.name || '',
      email: user?.email || '',
      address: user?.address || '',
      pincode: user?.pincode || ''
    });
    setIsEditing(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef?.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen || !user) return null;

  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden"
      style={{ 
        maxHeight: '85vh',
        overflowY: 'auto'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-amber-50 to-orange-50">
        <h2 className="text-lg font-bold text-gray-800">Profile</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        {/* Avatar Section */}
        <div className="text-center mb-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full mx-auto mb-2 shadow-md border-2 border-amber-100"
          />
          <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
            <div className="relative">
              <User className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={isEditing ? editData.name : user.name}
                onChange={(e) => setEditData({...editData, name: e.target.value})}
                disabled={!isEditing}
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 disabled:bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                value={isEditing ? editData.email : user.email || ''}
                onChange={(e) => setEditData({...editData, email: e.target.value})}
                disabled={!isEditing}
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 disabled:bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Mobile</label>
            <div className="relative">
              <Phone className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="tel"
                value={user.mobile}
                disabled
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Address</label>
            <div className="relative">
              <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={isEditing ? editData.address : user.address}
                onChange={(e) => setEditData({...editData, address: e.target.value})}
                disabled={!isEditing}
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 disabled:bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Pincode</label>
            <div className="relative">
              <Hash className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={isEditing ? editData.pincode : user.pincode}
                onChange={(e) => setEditData({...editData, pincode: e.target.value})}
                disabled={!isEditing}
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 disabled:bg-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-2">
          {isEditing ? (
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium text-sm transition-colors flex items-center justify-center"
              >
                <Save className="w-3 h-3 mr-1" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-md font-medium text-sm transition-colors"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md font-medium text-sm transition-colors flex items-center justify-center"
            >
              <Edit2 className="w-3 h-3 mr-1" />
              Edit Profile
            </button>
          )}
          
          <button
            onClick={logout}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};