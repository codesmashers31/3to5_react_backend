import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api/auth";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const registerUser = async () => {
    await axios.post(`${API}/register`, form);
    alert("Registered Successfully");
    nav("/");
  };

  return (
    <div>
      <h2>Register</h2>
      <input name="email" placeholder="Email" onChange={handle} />
      <input name="password" placeholder="Password" onChange={handle} />
      <button onClick={registerUser}>Register</button>
    </div>
  );
}
