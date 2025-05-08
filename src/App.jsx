import React, { useState } from "react";
import SidebarDemo from "./components/sidebar-demo";

function App({ children }) {
  return (
    <div className="flex bg-gray-50">
      <div className="h-screen">
        <SidebarDemo />
      </div>

      <main className="flex-1 flex flex-col bg-emerald-100 min-h-screen h-fit ">
        {children}
      </main>
    </div>
  );
}

export default App;
