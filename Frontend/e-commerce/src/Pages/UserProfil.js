import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Récupération du user connecté (stocké au login dans localStorage)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser.user); // car tu stockes {user, token}
    }
  }, []);

  if (!user) return <p>Veuillez vous connecter pour voir votre profil.</p>;

  return (
    <div className="profile-container">
      <h2>Mon Profil</h2>

      <p><strong>Nom :</strong> {user.FullName}</p>
      <p><strong>Email :</strong> {user.Email}</p>
      <p><strong>Téléphone :</strong> {user.Telephone}</p>
      <p><strong>Adresse :</strong> {user.Adresse}</p>
      <p><strong>Rôle :</strong> {user.Role}</p>
    </div>
  );
};

export default UserProfile;
