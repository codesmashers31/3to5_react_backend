import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api/auth";

export default function Dashboard() {
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
   if (!token) return nav("/")

    const getDashboard = async () => {
      const res = await axios.get(`${API}/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMsg(res.data.message);
    };

    setTimeout(()=>{ getDashboard();},100000)
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    nav("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p><strong>Token:</strong> {token}</p>
      <p>{msg}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
