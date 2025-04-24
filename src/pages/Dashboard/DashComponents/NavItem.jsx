import React from 'react';


const NavItem = ({ icon, label, active = false }) => {
  return (
    <div className={`nav-item ${active ? 'active' : ''}`}>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default NavItem;