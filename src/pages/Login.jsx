// import React from 'react'
// import { Navbar } from '../pages/Navbar'
// export const Login = () => {
//   return (
//     <>
//       <Navbar />{/* eliminar y reemplzar por otro navbar */}
//       <section className='container'>
//         <h1 className='text-center'>Login</h1>
//         <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptates quasi ipsam corrupti consequatur facere animi perspiciatis itaque similique consectetur deleniti, culpa ab quos alias aperiam, aut iure fuga dolorem!</p>
//       </section>
    
//     </>
    
//   )
// }
import React, { useState } from 'react';

import { Link } from 'react-router-dom'

// const navigate = useNavigate();

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulamos una verificación de inicio de sesión de un empleado
    if (email === 'empleado@gmail.com' && password === 'contraseña') {
      handleLogin();
    } else {
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Porfavor inicia sesion!</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>

                    <p className="small mb-5 pb-lg-2"><a href="#!" className="text-white-50">Olvidaste tu contraseña?</a></p>

                    <Link type='submit' className="btn btn-outline-light btn-lg px-5" to='/recepcionista'>Login</Link>
                  </form>
                </div>

                <div>
                  <p className="mb-13">No tienes una cuenta? <a href="#!" className="text-white-50 fw-bold">Registrarse</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    // navigate('/index');
    // Aquí podrías redirigir a otra página o realizar acciones después del inicio de sesión exitoso.
  };

  return (
    <>
      
      <section>
        {loggedIn ? (
          <div className="container text-center mt-5">
          <h1 className="display-4 fw-bold">Bienvenido</h1>
          <p className="lead">¡Has iniciado sesión correctamente!</p>
          <p className="text-muted">¡Disfruta tu experiencia en nuestro sitio!</p>
        </div>
        ) : (
          <LoginForm handleLogin={handleLogin} />
        )}
      </section>
    </>
  );
};







