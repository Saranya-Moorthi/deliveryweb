// import React from 'react';
// import { Star, Clock, MapPin, Phone } from 'lucide-react';

// export const Home: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-black/20 z-10" />
//         <div 
//           className="absolute inset-0 bg-cover bg-center animate-pulse"
//           style={{
//             backgroundImage: 'url("https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg")'
//           }}
//         />
//         <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
//             Welcome to
//             <span className="block text-amber-300">Savory Delights</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
//             Experience authentic flavors crafted with passion and served with love
//           </p>
//           <button
//             onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
//             className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600"
//           >
//             Discover Our Story
//           </button>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6 animate-fade-in-left">
//               <h2 className="text-4xl font-bold text-amber-800">Our Story</h2>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 For over two decades, Savory Delights has been serving exceptional cuisine that brings families together. 
//                 Our master chefs blend traditional recipes with contemporary techniques to create unforgettable dining experiences.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Every dish is prepared with the finest ingredients, sourced locally and crafted with the utmost care. 
//                 From our signature curries to our delectable desserts, each bite tells a story of passion and perfection.
//               </p>
//               <div className="flex items-center space-x-6">
//                 <div className="flex items-center text-amber-600">
//                   <Star className="w-5 h-5 mr-2 fill-current" />
//                   <span className="font-semibold">4.8/5 Rating</span>
//                 </div>
//                 <div className="flex items-center text-amber-600">
//                   <Clock className="w-5 h-5 mr-2" />
//                   <span className="font-semibold">Est. 2001</span>
//                 </div>
//               </div>
//             </div>
//             <div className="relative animate-fade-in-right">
//               <img
//                 src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
//                 alt="Restaurant interior"
//                 className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
//                 <h3 className="font-bold text-amber-800">20+ Years</h3>
//                 <p className="text-gray-600">of Excellence</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center text-amber-800 mb-16">Why Choose Us</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '🍳',
//                 title: 'Fresh Ingredients',
//                 description: 'We source the finest, freshest ingredients daily to ensure quality in every dish.'
//               },
//               {
//                 icon: '👨‍🍳',
//                 title: 'Expert Chefs',
//                 description: 'Our experienced chefs bring decades of culinary expertise to your table.'
//               },
//               {
//                 icon: '🚚',
//                 title: 'Fast Delivery',
//                 description: 'Quick and reliable delivery service to bring our delicious food to your doorstep.'
//               }
//             ].map((feature, index) => (
//               <div 
//                 key={index} 
//                 className="text-center p-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-bold text-amber-800 mb-4">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-gradient-to-r from-amber-100 to-orange-100">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-amber-800 mb-4">Visit Us</h2>
//             <p className="text-lg text-gray-700">Experience our hospitality in person</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//               <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
//               <h3 className="font-bold text-amber-800 mb-2">Address</h3>
//               <p className="text-gray-600">123 Culinary Street<br />Food District, City 12345</p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//               <Phone className="w-8 h-8 text-amber-600 mx-auto mb-4" />
//               <h3 className="font-bold text-amber-800 mb-2">Phone</h3>
//               <p className="text-gray-600">+1 (555) 123-4567</p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//               <Clock className="w-8 h-8 text-amber-600 mx-auto mb-4" />
//               <h3 className="font-bold text-amber-800 mb-2">Hours</h3>
//               <p className="text-gray-600">Mon-Sun: 11:00 AM - 10:00 PM</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import { Star, Clock, MapPin, Phone, ChefHat, Award, Users } from 'lucide-react';

export const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, customers: 0, dishes: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes deliveryJourney {
        0% { 
          transform: translateX(0px); 
        }
        100% { 
          transform: translateX(calc(100vw - 400px)); 
        }
      }
      
      @keyframes chefCooking {
        0%, 100% { transform: rotate(0deg) scale(1); }
        25% { transform: rotate(-2deg) scale(1.02); }
        50% { transform: rotate(2deg) scale(1.04); }
        75% { transform: rotate(-2deg) scale(1.02); }
      }
      
      @keyframes customerEating {
        0%, 100% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.05) rotate(1deg); }
      }
      
      @keyframes packageBounce {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
      }
      
      @keyframes smokeTrail {
        0%, 100% { opacity: 0.7; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      
      @keyframes foodFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-8px) rotate(180deg); }
      }
      
      @keyframes heartPop {
        0% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 1; transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
    
   
    const animateCounters = () => {
      const targets = { years: 23, customers: 50000, dishes: 500 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          years: Math.floor(targets.years * progress),
          customers: Math.floor(targets.customers * progress),
          dishes: Math.floor(targets.dishes * progress)
        });
        
        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);
    };

    const timeout = setTimeout(animateCounters, 1000);
    
    return () => {
      clearTimeout(timeout);
      document.head.removeChild(style);
    };
  }, []);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
    
      <section className="py-12 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-8 relative">
            From Kitchen to Your Doorstep
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"></div>
          </h2>
          
       
          <div className="relative h-48 mb-8 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 rounded-2xl overflow-hidden border-2 border-amber-200 shadow-lg">
            
            <div className="absolute bottom-16 left-0 right-0 h-3 bg-gray-300 opacity-40 rounded-full"></div>
            <div className="absolute bottom-16 left-0 right-0 h-1 bg-yellow-400 opacity-60">
              <div className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500 animate-pulse"></div>
            </div>
            
           
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-center z-20">
              <div 
                className="text-4xl mb-1"
                style={{ animation: 'chefCooking 2.5s infinite ease-in-out' }}
              >👨‍🍳</div>
              <div className="text-2xl animate-pulse" style={{ animationDelay: '0.3s', animationDuration: '1.5s' }}>🍳</div>
              <div className="text-xs font-semibold text-amber-800 mt-1">Expert Chef</div>
            </div>
            
           
            <div className="absolute left-16 top-4 text-3xl animate-pulse z-10" style={{ animationDuration: '2s' }}>🏪</div>
            
            
            <div className="absolute bottom-12 left-10 w-full h-10 overflow-hidden">
             
              <div 
                className="relative inline-block"
                style={{
                  animation: 'deliveryJourney 6s infinite linear'
                }}
              >
                
                <div className="text-3xl relative inline-block transform scale-x-[-1]">🛵</div>
                
                
                <div 
                  className="absolute text-xl top-[-3px] left-[-5px]"
                  style={{ animation: 'packageBounce 0.6s infinite ease-in-out' }}
                >
                  📦
                </div>
                
                
                <div 
                  className="text-3xl relative inline-block transform scale-x-[-1] top-[2px] left-[-70px]"

                >
                  💨
                </div>
              </div>
            </div>
            

            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-center z-20">
              <div 
                className="text-4xl mb-1"
                style={{ animation: 'customerEating 3s infinite ease-in-out', animationDelay: '4s' }}
              >😋</div>
              <div className="text-2xl animate-pulse" style={{ animationDelay: '4.5s', animationDuration: '1.5s' }}>🍽️</div>
              <div className="text-xs font-semibold text-amber-800 mt-1">Happy Customer</div>
            </div>
            
          
            <div className="absolute right-16 top-4 text-3xl animate-pulse z-10" style={{ animationDuration: '2s', animationDelay: '1s' }}>🏠</div>
            
          
            <div className="absolute top-2 left-1/4 text-xl opacity-60" 
                 style={{ animation: 'foodFloat 4s infinite ease-in-out', animationDelay: '0s' }}>🍕</div>
            <div className="absolute top-3 left-1/2 text-xl opacity-60" 
                 style={{ animation: 'foodFloat 4s infinite ease-in-out', animationDelay: '1.3s' }}>🍔</div>
            <div className="absolute top-2 right-1/4 text-xl opacity-60" 
                 style={{ animation: 'foodFloat 4s infinite ease-in-out', animationDelay: '2.6s' }}>🍜</div>
            
          
            <div className="absolute right-10 bottom-6 text-lg opacity-0 animate-pulse" 
                 style={{ 
                   animationDelay: '7s', 
                   animationDuration: '1s',
                   animationFillMode: 'forwards'
                 }}>❤️</div>
            <div className="absolute right-14 bottom-8 text-sm opacity-0 animate-pulse" 
                 style={{ 
                   animationDelay: '7.5s', 
                   animationDuration: '1s',
                   animationFillMode: 'forwards'
                 }}>💖</div>
            
           
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold z-30">
              <span className="animate-pulse">⚡ 30 mins delivery</span>
            </div>
            
           
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" 
                   style={{ 
                     animation: 'deliveryMove 8s infinite linear',
                     width: '20px',
                     transform: 'translateX(-20px)'
                   }}></div>
            </div>
          </div>
        </div>
      </section>

      
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-20 left-10 w-4 h-4 bg-amber-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-orange-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-amber-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-60 right-10 w-5 h-5 bg-orange-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
      </div>

      
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-in-out"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg")',
            transform: isVisible ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        
       
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-orange-500/20 animate-pulse z-15"></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="inline-block animate-pulse">Welcome to</span>
              <span className="block text-amber-300 transform hover:scale-105 transition-transform duration-300 cursor-default">
                Savory Delights
              </span>
            </h1>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl md:text-2xl mb-8 opacity-90 hover:opacity-100 transition-opacity duration-300">
              Experience authentic flavors crafted with passion and served with love
            </p>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={scrollToNext}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 active:scale-95 group relative overflow-hidden"
            >
              <span className="relative z-10">Discover Our Story</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-amber-100">{counters.years}+</div>
              <p className="text-lg opacity-90">Years of Excellence</p>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-amber-100">{counters.customers.toLocaleString()}+</div>
              <p className="text-lg opacity-90">Happy Customers</p>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-amber-100">{counters.dishes}+</div>
              <p className="text-lg opacity-90">Menu Items</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 transform hover:translate-x-2 transition-transform duration-500">
              <h2 className="text-4xl font-bold text-amber-800 relative">
                Our Story
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"></div>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                For over two decades, Savory Delights has been serving exceptional cuisine that brings families together. 
                Our master chefs blend traditional recipes with contemporary techniques to create unforgettable dining experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                Every dish is prepared with the finest ingredients, sourced locally and crafted with the utmost care. 
                From our signature curries to our delectable desserts, each bite tells a story of passion and perfection.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-amber-600 hover:text-amber-700 transition-colors duration-300 group">
                  <Star className="w-5 h-5 mr-2 fill-current group-hover:animate-spin" />
                  <span className="font-semibold">4.8/5 Rating</span>
                </div>
                <div className="flex items-center text-amber-600 hover:text-amber-700 transition-colors duration-300 group">
                  <Clock className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  <span className="font-semibold">Est. 2001</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 hover:shadow-amber-200"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="font-bold text-amber-800">23+ Years</h3>
                <p className="text-gray-600">of Excellence</p>
              </div>
              
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-300 rounded-full opacity-20 group-hover:animate-ping"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-400 rounded-full opacity-20 group-hover:animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

     
     
      <section className="py-20 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-800 mb-16 relative">
            Why Choose Us
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                emoji: '👨‍🍳',
                title: 'Expert Chefs',
                description: 'Our master chefs prepare each dish with passion and decades of culinary expertise.',
                color: 'from-blue-400 to-blue-600'
              },
              {
                icon: Users,
                emoji: '🛵',
                title: 'Fast Delivery',
                description: 'Lightning-fast delivery service ensures your hot, fresh food reaches you in 30 minutes.',
                color: 'from-green-400 to-green-600'
              },
              {
                icon: Award,
                emoji: '😋',
                title: 'Happy Customers',
                description: 'Over 50,000 satisfied customers enjoy our delicious food and exceptional service.',
                color: 'from-purple-400 to-purple-600'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="relative text-center p-8 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group bg-white border border-amber-100 hover:border-amber-300"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    transform: `translateY(${index % 2 === 0 ? '0' : '20px'})`
                  }}
                >
                 
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`}></div>
                  
                
                  <div className="relative mb-6">
                    <div className="text-5xl mb-2 group-hover:animate-bounce">{feature.emoji}</div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <IconComponent className={`w-12 h-12 text-transparent bg-gradient-to-r ${feature.color} bg-clip-text`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-amber-800 mb-4 group-hover:text-amber-900 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{feature.description}</p>
                  
                 
                  <div className="absolute top-4 right-4 w-2 h-2 bg-amber-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-2 border-amber-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 relative overflow-hidden">
       
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-amber-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-orange-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-500">
            <h2 className="text-4xl font-bold text-amber-800 mb-4 relative">
              Visit Us
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-700 hover:text-gray-800 transition-colors duration-300">Experience our hospitality in person</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Address', content: '123 Culinary Street\nFood District, City 12345', color: 'from-red-400 to-red-600' },
              { icon: Phone, title: 'Phone', content: '+1 (555) 123-4567', color: 'from-green-400 to-green-600' },
              { icon: Clock, title: 'Hours', content: 'Mon-Sun: 11:00 AM - 10:00 PM', color: 'from-blue-400 to-blue-600' }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 group relative overflow-hidden"
                >
                 
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="relative mb-4">
                      <IconComponent className="w-8 h-8 text-amber-600 mx-auto group-hover:animate-bounce transition-all duration-300" />
                      <div className="absolute inset-0 rounded-full bg-amber-100 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-bold text-amber-800 mb-2 group-hover:text-amber-900 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 whitespace-pre-line">{item.content}</p>
                  </div>
                  
                  
                  <div className="absolute top-2 right-2 w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};