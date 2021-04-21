import React from 'react'
import {Link, NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            {/* <!-- Main Navbar--> */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {/* <!-- Navbar Brand --> */}
                    <div className="navbar-header d-flex align-items-center justify-content-between">
                        {/* <!-- Navbar Brand --> */}
                        <Link to="/" className="navbar-brand">ONG Team</Link>
                        {/* <!-- Toggle Button--> */}
                        <button type="button" data-toggle="collapse" data-target="#navbarcollapse"
                                aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation"
                                className="navbar-toggler"><span></span><span></span><span></span></button>
                    </div>
                    {/* <!-- Navbar Menu --> */}
                    <div id="navbarcollapse" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/posts" className="nav-link">Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/volunteers/create" className="nav-link">Voluntariado</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/donations/create" className="nav-link">Donar</NavLink>
                            </li>
                            {/* <!-- Authentication Links --> */}
                            {/* @guest
                                @if (Route::has('login'))
                                    <li className="nav-item">
                                        <a className="nav-link" href="{{ route('login') }}">{{ __('Ingresar') }}</a>
                                    </li>
                                @endif

                                @if (Route::has('register'))
                                    <li className="nav-item">
                                        <a className="nav-link" href="{{ route('register') }}">{{ __('Registrarse') }}</a>
                                    </li>
                                @endif
                            @else
                                @if (Auth::user()->isAdmin())
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Admin
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item {{ Route::is('admin.posts.index') ? 'active' : '' }}"
                                            href=" {{ route('admin.posts.index') }}">Posts</a>
                                            <a className="dropdown-item {{ Route::is('admin.volunteers.index') ? 'active' : '' }}"
                                            href=" {{ route('admin.volunteers.index') }}">Voluntarios</a>
                                            <a className="dropdown-item {{ Route::is('admin.comments.index') ? 'active' : '' }}"
                                            href=" {{ route('admin.comments.index') }}">Comentarios</a>
                                            <a className="dropdown-item {{ Route::is('admin.categories.index') ? 'active' : '' }}"
                                            href=" {{ route('admin.categories.index') }}">Categorías</a>
                                            <a className="dropdown-item {{ Route::is('admin.subscribers.index') ? 'active' : '' }}"
                                            href=" {{ route('admin.subscribers.index') }}">Suscriptores</a>
                                            <a className="dropdown-item {{ Route::is('admin.donations.index') ? 'active' : '' }}"
                                            href=" {{ route('admin.donations.index') }}">Donaciones</a>
                                        </div>
                                    </li>
                                @endif
                                <li className="nav-item">
                                    <a href="{{ route('logout') }}"
                                    className="nav-link"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                        {{ __('Cerrar sesión') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" className="d-none">
                                        @csrf
                                    </form>
                                </li>
                            @endguest */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
