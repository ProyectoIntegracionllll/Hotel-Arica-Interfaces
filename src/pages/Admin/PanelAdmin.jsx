// import React, { useEffect } from 'react'
// import { Navbar } from '../Navbar'
// import { getAllUsuarios } from '../../api/usuario.api'
// export const PanelAdmin = () => {
//   // useEffect(() => { // esto es para probar la api
    
//   //   async function cargarUsuarios () {
//   //     const res = await getAllUsuarios()
//   //     console.log(res.data)
//   //   }
//   //   cargarUsuarios
//   // })
//   return (
//     <>
//       <Navbar />{/* eliminar y reemplzar por otro navbar */}
//       <main className='container'>
//         <h1 className='text-center'>PanelAdmin</h1>
//         <strong className='text-center'>Este es el panel de admin donde iras todas las opciones que tiene</strong>
//         <p>Gestion Usuarios</p>
//         <p>Gestion Habitaciones</p>
//         <p>Infomracion</p>
//       </main>
//     </>
    
//   )
// }

import React, { useEffect } from 'react';
import { Navbar } from '../Navbar';
import { getAllUsuarios } from '../../api/usuario.api';

export const PanelAdmin = () => {
  useEffect(() => {
    // Esto es para probar la API
    async function cargarUsuarios() {
      const res = await getAllUsuarios();
      console.log(res.data);
    }
    cargarUsuarios();
  }, []);

  return (
    <>
      <Navbar /> {/* Eliminar y reemplazar por otro navbar */}
      <main className='container mt-4'>
        <h1 className='text-center mb-4'>Panel de Administración</h1>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div className='card mb-4'>
              <div className='card-body'>
                <h5 className='card-title text-center'>Gestión de Usuarios</h5>
                <p className='card-text text-center'>Administra y gestiona usuarios.</p>
                <div className='text-center'>
                  <button className='btn btn-primary' id="botonpanel">Ir a Usuarios</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-4'>
              <div className='card-body'>
                <h5 className='card-title text-center'>Gestión de Habitaciones</h5>
                <p className='card-text text-center'>Administra y gestiona habitaciones.</p>
                <div className='text-center'>
                  <button className='btn btn-primary'>Ir a Habitaciones</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-4'>
              <div className='card-body'>
                <h5 className='card-title text-center'>Información</h5>
                <p className='card-text text-center'>Visualiza información relevante.</p>
                <div className='text-center'>
                  <button className='btn btn-primary'>Ver Información</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
