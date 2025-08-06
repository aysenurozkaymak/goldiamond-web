import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("kullaniciAdi");
    navigate("/"); // anasayfaya yönlendir
    window.location.reload(); // Navbar yeniden yüklensin
  }, []);

  return null;
}

export default Logout;
