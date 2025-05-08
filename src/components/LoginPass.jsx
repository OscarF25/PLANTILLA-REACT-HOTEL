import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function LoginPass() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <Menu />
      <div className="w3-content" style={{ maxWidth: "1532px", marginTop: "50px" }}>
        <div className="w3-container w3-padding-32">
          <div className="w3-container w3-white w3-padding-16" style={{ maxWidth: "500px", margin: "auto" }}>
            <h2 className="w3-center">¡Bienvenido, {user?.nombre}!</h2>
            <div className="w3-padding-16 w3-center">
              <p>Has iniciado sesión correctamente</p>
              <div className="w3-padding-16">
                <Link to="/" className="w3-button w3-black w3-margin-right">
                  Ir al Inicio
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="w3-button w3-red"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPass;
