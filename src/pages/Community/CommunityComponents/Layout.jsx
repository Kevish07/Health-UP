import React from 'react';

function Layout({ children }) {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <main className="container mx-auto max-w-7xl">
        {children}
      </main>
    </div>
  );
}

export default Layout;