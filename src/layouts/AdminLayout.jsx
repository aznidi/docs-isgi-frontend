import React from "react";
import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <ul className="admin-links">
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
        </ul>
      </aside>
      <main className="admin-content">
        <Outlet /> {/* Rend les pages enfants */}
      </main>
    </div>
  );
};

export default AdminLayout;
