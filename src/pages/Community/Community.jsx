import React, { useState, useEffect, useCallback } from 'react';
import Layout from "./CommunityComponents/Layout";
import SearchBar from './CommunityComponents/SearchBar';
import FiltersPanel from './CommunityComponents/FiltersPanel';
import UserCard from './CommunityComponents/UserCard';
import UserStats from './CommunityComponents/UserStats';
import { users, userStats } from './data/users';

function Community() {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [connectedUsers, setConnectedUsers] = useState(new Set());
  const [activeFilters, setActiveFilters] = useState({
    workoutType: 'All Types',
    location: 'All Locations',
    experienceLevel: 'All Levels',
  });

  const filterUsers = useCallback(() => {
    setLoading(true);
    
    setTimeout(() => {
      let result = [...users];
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(user => 
          user.name.toLowerCase().includes(query) ||
          user.specialty.toLowerCase().includes(query) ||
          user.location.toLowerCase().includes(query)
        );
      }
      
      if (activeFilters.workoutType !== 'All Types') {
        result = result.filter(user => 
          user.specialty.toLowerCase().includes(activeFilters.workoutType.toLowerCase())
        );
      }
      
      if (activeFilters.location !== 'All Locations') {
        result = result.filter(user => user.location === activeFilters.location);
      }
      
      if (activeFilters.experienceLevel !== 'All Levels') {
        result = result.filter(user => {
          if (activeFilters.experienceLevel === 'Pro') {
            return user.specialty.includes('Pro');
          }
          return user.specialty.includes(activeFilters.experienceLevel);
        });
      }
      
      setFilteredUsers(result);
      setLoading(false);
    }, 800);
  }, [searchQuery, activeFilters]);

  useEffect(() => {
    filterUsers();
  }, [filterUsers]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters);
  };

  const handleConnect = (userId) => {
    setConnectedUsers(prev => new Set([...prev, userId]));
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            Find your perfect workout partner
        </h1>
        <SearchBar onSearch={handleSearch} isSearching={loading} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : filteredUsers.length > 0 ? (
            <div>
              {filteredUsers.map((user) => (
                <UserCard 
                  key={user.id} 
                  user={user} 
                  onConnect={handleConnect}
                  isConnected={connectedUsers.has(user.id)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center">
              <h3 className="text-xl font-semibold mb-2">No matches found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search query to find fitness buddies.
              </p>
            </div>
          )}
        </div>
        
        <div className="space-y-8">
          <FiltersPanel onApplyFilters={handleApplyFilters} />
          <UserStats stats={{
            ...userStats,
            connectedUsers: connectedUsers.size,
          }} />
        </div>
      </div>
    </Layout>
  );
}

export default Community;