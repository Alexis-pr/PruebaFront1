import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { GoogleLogin } from '@react-oauth/google'


export default function LoginModal({ close }) {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try{

      const res = await API.post("/auth/login", {
        email,
        password
      });

      login(res.data);
      alert("Login exitoso");
      
      close();
    }catch(e){
      console.log(e);
      alert("Credenciales incorrectas");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {

    console.log(credentialResponse);

    alert("Google Login exitoso");

    /*
      Más adelante:
      enviar credentialResponse.credential
      al backend C#
    */
  };
 
  return (
    <div style={{
      position: "fixed",
      top: 100,
      left: "40%",
      background: "white",
      padding: 20,
      border: "1px solid #ccc"
    }}>

      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Entrar
      </button>

    

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
          alert("Login exitoso");
        }}
        onError={() => {
          console.log('Login Failed')
          alert("Login Failed");
        }}
      />

      <br />
      <button onClick={close}>
          Cerrar
      </button>

    </div>
  );
}