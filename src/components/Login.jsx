import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Menu from './Menu';
import Footer from './Footer';

function Login() {
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/loginApi/login', formData);
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/');
      }
    } catch (error) {
      setError('Credenciales inválidas');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Menu />
      <div className="w3-content" style={{ maxWidth: "1532px", marginTop: "50px" }}>
        <div className="w3-container w3-padding-32">
          <div className="w3-container w3-white w3-padding-16" style={{ maxWidth: "500px", margin: "auto" }}>
            <h2 className="w3-center">Iniciar Sesión</h2>
            {error && <p className="w3-text-red w3-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="w3-padding-16">
                <label><i className="fa fa-envelope"></i> Email:</label>
                <input
                  className="w3-input w3-border"
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w3-padding-16">
                <label><i className="fa fa-key"></i> Contraseña:</label>
                <input
                  className="w3-input w3-border"
                  type="password"
                  name="contrasena"
                  value={formData.contrasena}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="w3-button w3-block w3-black w3-padding-large">
                Iniciar Sesión
              </button>
            </form>
            <p className="w3-center w3-padding-16">
              ¿No tienes una cuenta? <Link to="/register" className="w3-text-blue">Regístrate aquí</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
