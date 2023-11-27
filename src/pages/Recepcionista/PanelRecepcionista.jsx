import React from 'react';
import { Navbar } from '../Navbar';
import { Link } from 'react-router-dom';

export const PanelRecepcionista = () => {
  return (
    <>
      <Navbar />
      <section className="vh-100 gradient-custom d-flex align-items-center justify-content-center">
        <div className="card bg-dark text-white" style={{ borderRadius: '1rem', width: '400px' }}>
          <div className="card-body p-5 text-center">
            <h1 className='text-center mb-4'>Panel de Recepcionista</h1>
            <div className='card-body'>
              <h4 className='card-title text-center'>Gestión de Clientes</h4>
              <div className='text-center mb-4'>
                <Link type='submit' className="btn btn-outline-light btn-lg px-5" to='/reserva'>Reservas</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-dark text-white ms-4" style={{ borderRadius: '1rem', width: '400px' }}>
          <div className="card-body p-5 text-center">
            <h1 className='text-center mb-4'>Panel de Auxiliar de aseo</h1>
            <div className='card-body'>
              <h4 className='card-title text-center'>Vistas de habitaciones</h4>
              <div className='text-center mb-4'>
                <Link type='submit' className="btn btn-outline-light btn-lg px-5" to='/aseo'>Habitaciones</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
