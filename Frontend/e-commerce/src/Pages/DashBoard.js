import React, { useState } from "react";
import ProductManager from "../DashboardManager/ProductManager";
import UserManager from "../DashboardManager/UserManager";
import OrderManager from "../DashboardManager/OrderManager";
import "../Styles/Dashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Tableau de Bord Admin</h1>

      <nav className="dashboard-nav">
        <button
          className={`tab-btn ${activeTab === "products" ? "active" : ""}`}
          onClick={() => setActiveTab("products")}
        >
          Produits
        </button>
        <button
          className={`tab-btn ${activeTab === "users" ? "active" : ""}`}
          onClick={() => setActiveTab("users")}
        >
          Utilisateurs
        </button>
        <button
          className={`tab-btn ${activeTab === "orders" ? "active" : ""}`}
          onClick={() => setActiveTab("orders")}
        >
          Commandes
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === "products" && <ProductManager />}
        {activeTab === "users" && <UserManager />}
        {activeTab === "orders" && <OrderManager />}
      </div>
    </div>
  );
};

export default AdminDashboard;
