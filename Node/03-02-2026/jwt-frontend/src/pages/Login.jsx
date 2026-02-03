import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const API = "http://localhost:5000/api/auth";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const nav = useNavigate();

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const loginUser = async () => {
    try {

    const res = await axios.post(`${API}/login`, form);
    localStorage.setItem("token", res.data.token);
    
    nav("/dashboard");
      
    } catch (error) {

      alert(error.response.data.msg);
      
      
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handle} />
      <input name="password" placeholder="Password" onChange={handle} />
      <button onClick={loginUser}>Login</button>
      <p><Link to="/register">Go to Register</Link></p>
    </div>
  );
}
