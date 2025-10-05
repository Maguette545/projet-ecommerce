import { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/UserManager.css";

function UserManager() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Erreur chargement utilisateurs :", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await axios.put(`/api/users/${editingUser._id}`, formData);
        alert("✅ Utilisateur modifié !");
      } else {
        await axios.post("/api/users", formData);
        alert("✅ Utilisateur ajouté !");
      }
      setFormData({ name: "", email: "", phone: "" });
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      console.error("Erreur ajout/modification utilisateur :", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("❌ Supprimer cet utilisateur ?")) {
      try {
        await axios.delete(`/api/users/${id}`);
        fetchUsers();
      } catch (err) {
        console.error("Erreur suppression utilisateur :", err);
      }
    }
  };

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email, phone: user.phone });
    setEditingUser(user);
  };

  return (
    <div className="user-manager">
      <h2 className="manager-title">Gestion des Utilisateurs</h2>
      <div className="user-manager-grid">
        {/* Formulaire */}
        <div className="user-form-card">
          <h4>{editingUser ? "Modifier un utilisateur" : "Ajouter un utilisateur"}</h4>
          <form className="user-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nom"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="form-input"
            />
            <input
              type="text"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="form-input"
            />
            <button type="submit" className="submit-btn">
              {editingUser ? "Modifier" : "Ajouter"}
            </button>
            {editingUser && (
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setEditingUser(null);
                  setFormData({ name: "", email: "", phone: "" });
                }}
              >
                Annuler
              </button>
            )}
          </form>
        </div>

        {/* Table utilisateur */}
        <div className="user-table-card">
          <h4>Liste des utilisateurs</h4>
          <table className="user-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(user)}>Modifier</button>
                    <button className="delete-btn" onClick={() => handleDelete(user._id)}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserManager;
