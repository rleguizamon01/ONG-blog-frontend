import React from 'react';

class Volunteers extends React.Component {
    render(){
      return(
        <div className="container">
        <div className="m-4">
          <div className="mb-3">
            <h3>Unirse al voluntariado</h3>
          </div>
          <form action="#" method="POST">
            {/* Name */}
            <div className="form-group">
              <label htmlFor="first_name">Nombre</label>
              <input type="text" className="form-control" id="first_name" name="first_name" placeholder="Nombre" defaultValue="" />
            </div>
            {/* Last name */}
            <div className="form-group">
              <label htmlFor="last_name">Apellido</label>
              <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Apellido" defaultValue="" />
            </div>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Email" defaultValue="" />
            </div>
            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="Contraseña" defaultValue="" />
            </div>
            {/* Phone number */}
            <div className="form-group">
              <label htmlFor="phone_number">Número de teléfono</label>
              <input type="tel" className="form-control" id="phone_number" name="phone_number" placeholder="Número de teléfono" defaultValue="" />
            </div>
            {/* Birth date */}
            <div className="form-group">
              <label htmlFor="birthdate">Fecha de nacimiento</label>
              <input type="date" className="form-control" id="birthdate" name="birthdate" defaultValue="" />
            </div>
            {/* Body */}
            <div className="form-group">
              <label htmlFor="body">Contanos cómo conociste la ONG y por qué querés unirte al voluntariado</label>
              <textarea className="form-control" id="body" name="body" defaultValue={" "} />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Ingresar</button>
          </form>
        </div>
      </div>
      
      ); 
    }
}

export default Volunteers;