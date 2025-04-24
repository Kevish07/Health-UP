import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { ChevronRight } from 'lucide-react';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer"
      >
        <ChevronRight className={`h-6 w-6 text-gray-600 transform transition-transform duration-200 ${showSidebar ? 'rotate-180' : ''}`} />
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30`}>
        <Sidebar />
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-emerald-50 ">
        <main className="flex-1 overflow-y-auto">
          <Dashboard SidebarToggle={toggleSidebar}/>
        </main>
      </div>
    </div>
  );
}

export default App;