import { useContext, useState } from "react";
import Home from "./pages/Home";
import LoginModal from "./components/LoginModal";
import { AuthContext } from "./context/AuthContext";

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const {user,logout} = useContext(AuthContext);

  return (
    <div>

      {/* NAV */}
      <nav style={{ padding: 10, background: "#111", color: "white" }}>
        <h2>🎟️ Portal de Eventos</h2>

         {!user ? (
          <button onClick={() => setShowLogin(true)}>
            Login
          </button>
        ) : (
          <button onClick={logout}>
            Logout
          </button>
        )}
        
      </nav>

      {/* HOME */}
      <Home openLogin={() => setShowLogin(true)} />

      {/* LOGIN MODAL */}
      {showLogin && (
        <LoginModal close={() => setShowLogin(false)} />
      )}

    </div>
  );
}

export default App;