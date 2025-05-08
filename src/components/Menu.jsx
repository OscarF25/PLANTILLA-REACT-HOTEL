import { Link } from 'react-router-dom';

export default function Menu() {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div className="w3-bar w3-white w3-large">
      <Link to="/" className="w3-bar-item w3-button w3-red w3-mobile">
        <i className="fa fa-bed w3-margin-right"></i>Logo
      </Link>
      <Link to="/Rooms" className="w3-bar-item w3-button w3-mobile">Rooms</Link>
      <Link to="/About" className="w3-bar-item w3-button w3-mobile">About</Link>
      <Link to="/Contact" className="w3-bar-item w3-button w3-mobile">Contact</Link>
      
      {!user ? (
        <>
          <Link to="/register" className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">
            Register
          </Link>
          <Link to="/login" className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">
            Login
          </Link>
        </>
      ) : (
        <>
          <button 
            onClick={handleLogout} 
            className="w3-bar-item w3-button w3-right w3-red w3-mobile"
          >
            Cerrar Sesión
          </button>
          <Link to="/LoginPass" className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">
            Mi Cuenta
          </Link>
          <span className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">
            Bienvenido, {user.nombre}
          </span>
        </>
      )}
    </div>
  );
}
