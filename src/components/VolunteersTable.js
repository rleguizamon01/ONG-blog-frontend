import React from 'react';
import Table from 'react-bootstrap/Table'
import VolunteersFilterForm from './VolunteersFilterForm'

const VolunteerTable = ({volunteers}) => {

  return (
    <div className="m-4">
        <h2>
        Listado de Voluntarios
        </h2>
        <VolunteersFilterForm/>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {volunteers.map(volunteer =>
          <tr key={volunteer.id}>
            <td>{volunteer.first_name}</td>
            <td>{volunteer.last_name}</td>
            <td>{volunteer.email}</td> 
            <td>{volunteer.phone_number}</td>
            <td>{volunteer.status}</td>
            
  {{ accepted: <td><i class="fas fa-trash-alt"></i></td>,
     rejected: <td><i class="fas fa-check"></i></td>,
     pending:<td><i class="fas fa-trash-alt"></i> <i class="fas fa-check"></i></td>
  }[volunteer.status]}

          </tr>
        )}
        </tbody>
      </Table>
    </div>
    );
};
export default VolunteerTable
