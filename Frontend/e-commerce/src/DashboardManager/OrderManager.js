import React, { useEffect, useState } from "react";

const OrderManager = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Charger toutes les commandes
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5011/api/all-order");
      const data = await res.json();
      setOrders(data.orders || []);
    } catch (err) {
      console.error("Erreur fetch orders:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Mettre à jour le statut
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:5011/api/update-order/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Status: newStatus }),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        setOrders(
          orders.map((o) =>
            o._id === id ? { ...o, Status: newStatus } : o
          )
        );
      }
    } catch (err) {
      console.error("Erreur update:", err);
    }
  };

  // ✅ Supprimer une commande
  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cette commande ?")) return;

    try {
      const res = await fetch(`http://localhost:5011/api/delete-order/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        setOrders(orders.filter((o) => o._id !== id));
      }
    } catch (err) {
      console.error("Erreur suppression:", err);
    }
  };

  if (loading) return <p>Chargement des commandes...</p>;

  return (
    <div className="order-manager">
      <h2>📦 Gestion des commandes</h2>
      {orders.length === 0 ? (
        <p>Aucune commande pour le moment.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Réf</th>
              <th>Client</th>
              <th>Email</th>
              <th>Total</th>
              <th>Status</th>
              <th>Changer statut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.RefOrder}</td>
                <td>{order.UserAnonymous?.UserFullName || "Utilisateur"}</td>
                <td>{order.UserAnonymous?.UserEmail}</td>
                <td>{order.TotalAmount} CFA</td>
                <td>{order.Status}</td>
                <td>
                  <select
                    value={order.Status}
                    onChange={(e) =>
                      handleUpdateStatus(order._id, e.target.value)
                    }
                  >
                    <option value="Not validate">Non validée</option>
                    <option value="validate">Validée</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    style={{ color: "red" }}
                  >
                    🗑️ Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderManager;