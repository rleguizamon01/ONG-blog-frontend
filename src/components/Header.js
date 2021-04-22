import React from 'react'
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'

export const Header = () => {
    return (
        <header className="header">
            {/* <!-- Main Navbar--> */}
            <Navbar expand="lg">
                <Container>
                    {/* <!-- Navbar Brand --> */}
                    <Navbar.Brand href="/">ONG Team</Navbar.Brand>
                    {/* <!-- Toggle Button--> */}
                    <Navbar.Toggle aria-controls="navbarcollapse"/>
                    {/* <!-- Navbar Menu --> */}
                    <Navbar.Collapse id="navbarcollapse">
                        <Nav className="ml-auto">
                            <Nav.Link href="{{ route('welcome') }}"
                                                    className="{{ Route::is('welcome') ? 'active' : '' }}">Inicio
                            </Nav.Link>
                            <Nav.Link href="{{ route('posts.index') }}"
                                                    className="{{ Route::is('posts.index') ? 'active' : '' }}">Posts
                            </Nav.Link>
                            <Nav.Link href="{{ route('volunteers.create') }}"
                                                    className="{{ Route::is('volunteers.create') ? 'active' : '' }}">Voluntariado
                            </Nav.Link>
                            <Nav.Link href="{{ route('donations.create') }}"
                                                    className="{{ Route::is('donations.create') ? 'active' : '' }}">Donar
                            </Nav.Link>
                            {/* <!-- Authentication Links --> */}
                            {/* @guest
                                @if (Route::has('login'))
                                    <Nav.Link href="{{ route('login') }}">{{ __('Ingresar') }}
                                    </Nav.Link>
                                @endif

                                @if (Route::has('register'))
                                    <Nav.Link href="{{ route('register') }}">{{ __('Registrarse') }}
                                    </Nav.Link>
                                @endif
                            @else
                                @if (Auth::user()->isAdmin())
                                    <NavDropdown title="Admin">
                                        <NavDropdown.Item className="{{ Route::is('admin.posts.index') ? 'active' : '' }}"
                                        href=" {{ route('admin.posts.index') }}">Posts</NavDropdown.Item>
                                        <NavDropdown.Item className="{{ Route::is('admin.volunteers.index') ? 'active' : '' }}"
                                        href=" {{ route('admin.volunteers.index') }}">Voluntarios</NavDropdown.Item>
                                        <NavDropdown.Item className="{{ Route::is('admin.comments.index') ? 'active' : '' }}"
                                        href=" {{ route('admin.comments.index') }}">Comentarios</NavDropdown.Item>
                                        <NavDropdown.Item className="{{ Route::is('admin.categories.index') ? 'active' : '' }}"
                                        href=" {{ route('admin.categories.index') }}">Categorías</NavDropdown.Item>
                                        <NavDropdown.Item className="{{ Route::is('admin.subscribers.index') ? 'active' : '' }}"
                                        href=" {{ route('admin.subscribers.index') }}">Suscriptores</NavDropdown.Item>
                                        <NavDropdown.Item className="{{ Route::is('admin.donations.index') ? 'active' : '' }}"
                                        href=" {{ route('admin.donations.index') }}">Donaciones</NavDropdown.Item>
                                    </NavDropdown>
                                @endif
                                <Nav.Link href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                        {{ __('Cerrar sesión') }}

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" className="d-none">
                                        @csrf
                                    </form>
                                </Nav.Link>
                            @endguest */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
