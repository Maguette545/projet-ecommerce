import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Contexte/AuthContext';


import Acceuil from "./Pages/Acceuil";
import Boutique from "./Pages/Boutique";
import APropos from "./Pages/APropos";
import FAQ from "./Pages/FAQ";
import Politique from './Pages/Politique';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Panier from './Pages/Panier';
import Commande from './Pages/Commande';
import DashBoard from './Pages/DashBoard'
import AdminRouer from './Routers/Admin';
import UserProfil from './Pages/UserProfil';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar/>
             {/* Routage */}
             <main style={{ width:"100%", height:"100%", paddingTop:"70px"}}>
              <Routes>
                  <Route path="/" element={<Acceuil/>}/>
                  <Route path="/Boutique" element={<Boutique/>}/>
                  <Route path="/APropos" element={<APropos/>}/>
                  <Route path="/FAQ" element={<FAQ/>}/>
                  <Route path="/Politique" element={<Politique/>}/>
                  <Route path="/Login" element={<Login/>}/>
                  <Route path="/SingnUp" element={<SignUp/>}/>
                  <Route path="/Panier" element={<Panier/>}/>
                  <Route path="/Commande" element={<Commande/>}/>
                  <Route path="/Admin" element={ <AdminRouer> <DashBoard/> </AdminRouer>}/>
                  <Route path="/Userprofil" element={<UserProfil/>}/>
              </Routes>
              </main>

              <Footer/>
        </BrowserRouter>
        </AuthProvider>
      <Outlet/>
    </div>
  );
}

export default App;


