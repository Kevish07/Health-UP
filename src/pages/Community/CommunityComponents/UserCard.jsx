import React, { useState } from 'react';
import Button from './Button';
import { MapPin, Award, Plus, Check } from 'lucide-react';

function UserCard({ user, onConnect, isConnected = false }) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [connected, setConnected] = useState(isConnected);
  
  const handleConnect = () => {
    if (connected) return;
    setIsConnecting(true);
    setTimeout(() => {
      onConnect(user.id);
      setConnected(true);
      setIsConnecting(false);
    }, 600);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm p-6 mb-6 animate-fade-in hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative overflow-hidden rounded-full w-16 h-16 transition-all duration-500">
            <img
              src={user.profileImage}
              alt={user.name}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.specialty}</p>
            <div className="flex items-center gap-4 mt-2">
              <div className="inline-flex items-center gap-1.5 text-gray-600">
                <MapPin size={16} />
                <span>{user.location}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-gray-600">
                <Award size={16} />
                <span>{user.achievements} Achievements</span>
              </div>
            </div>
          </div>
        </div>
        <Button 
          variant={connected ? "ghost" : "outline"}
          icon={connected ? <Check size={18} /> : <Plus size={18} />}
          isLoading={isConnecting}
          onClick={handleConnect}
          disabled={connected}
          className={connected ? "text-[#2ECC71]! hover:bg-[#2ECC71]/10!" : ""}
        >
          {connected ? "Connected" : "Connect"}
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {user.stats.map((stat, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-2xl font-bold mb-1">{stat.value}{stat.unit ? ` ${stat.unit}` : ''}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCard;