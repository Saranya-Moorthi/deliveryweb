import React, { useState, useEffect } from 'react';
import { Utensils } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8 animate-bounce">
          <Utensils className="w-16 h-16 text-amber-600 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold text-amber-800 mb-4">Savory Delights</h1>
        <p className="text-amber-600 mb-8">Preparing your culinary journey...</p>
        
        <div className="w-64 h-2 bg-amber-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-amber-600 mt-4 text-sm">{progress}%</p>
      </div>
    </div>
  );
};