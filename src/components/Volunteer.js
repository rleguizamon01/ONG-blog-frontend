import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export const Volunteer = () => {
    return(
      <Container>
      <div className="m-4">
        <div className="mb-3">
          <h3>Unirse al voluntariado</h3>
        </div>
        <Form action method="POST">
          {/* Name */}
          <Form.Group>
            <Form.Label htmlFor="first_name">Nombre</Form.Label>
            <Form.Control type="text" id="first_name" name="first_name" placeholder="Nombre" defaultValue="" />
          </Form.Group>
          {/* Last name */}
          <Form.Group>
            <Form.Label htmlFor="last_name">Apellido</Form.Label>
            <Form.Control type="text" id="last_name" name="last_name" placeholder="Apellido" defaultValue="" />
          </Form.Group>
          {/* Email */}
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" id="email" name="email" placeholder="Email" defaultValue="" />
          </Form.Group>
          {/* Password */}
          <Form.Group>
            <Form.Label htmlFor="password">Contraseña</Form.Label>
            <Form.Control type="password" id="password" name="password" placeholder="Contraseña" defaultValue="" />
          </Form.Group>
          {/* Phone number */}
          <Form.Group>
            <Form.Label htmlFor="phone_number">Número de teléfono</Form.Label>
            <Form.Control type="tel" id="phone_number" name="phone_number" placeholder="Número de teléfono" defaultValue="" />
          </Form.Group>
          {/* Birth date */}
          <Form.Group>
            <Form.Label htmlFor="birthdate">Fecha de nacimiento</Form.Label>
            <Form.Control type="date" id="birthdate" name="birthdate" defaultValue="" />
          </Form.Group>
          {/* Body */}
          <Form.Group>
            <Form.Label htmlFor="body">Contanos cómo conociste la ONG y por qué querés unirte al voluntariado</Form.Label>
            <Form.Control as="textarea" id="body" name="body" rows={3} defaultValue={" "} />
          </Form.Group>
          <Button type="submit" className="mt-2">Ingresar</Button>
        </Form>
      </div>
    </Container>
    ); 
}
