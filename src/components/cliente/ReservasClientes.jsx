import React, { useState } from 'react';

export const ReservasClientes = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaReserva, setFechaReserva] = useState('');
  const [numPersonas, setNumPersonas] = useState('');
  const [reservas, setReservas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar los datos en la tabla de reservas
    const nuevaReserva = {
      nombre,
      email,
      telefono,
      fechaReserva,
      numPersonas,
    };
    setReservas([...reservas, nuevaReserva]);

    // Limpiar los campos después de enviar la reserva
    setNombre('');
    setEmail('');
    setTelefono('');
    setFechaReserva('');
    setNumPersonas('');
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Reserva para Clientes</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaReserva" className="form-label">Fecha de Reserva</label>
          <input
            type="date"
            className="form-control"
            id="fechaReserva"
            value={fechaReserva}
            onChange={(e) => setFechaReserva(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numPersonas" className="form-label">Número de Personas</label>
          <input
            type="number"
            className="form-control"
            id="numPersonas"
            value={numPersonas}
            onChange={(e) => setNumPersonas(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Reservar</button>
      </form>

      {/* Tabla para mostrar las reservas */}
      {reservas.length > 0 && (
        <div className="mt-4">
          <h2>Reservas Guardadas</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Fecha Reserva</th>
                <th>Número de Personas</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((reserva, index) => (
                <tr key={index}>
                  <td>{reserva.nombre}</td>
                  <td>{reserva.email}</td>
                  <td>{reserva.telefono}</td>
                  <td>{reserva.fechaReserva}</td>
                  <td>{reserva.numPersonas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
