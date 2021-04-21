import React from 'react'

const Subscription = () => {
    return (
        <section className="newsletter no-padding-top m-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Suscribite a nuestra Newsletter</h2>
                        <p className="text-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-md-12">
                        <div className="form-holder">
                            <form method="post" action="{{route('subscribers.store')}}">
                                {/* @csrf   CAMBIAR */}
                                <div className="form-row align-items-end">
                                    <div className="col-12 col-md-3">
                                        <label htmlFor="first_name">Nombre</label>
                                        <input type="text" className="form-control form-control-sm" id="first_name" name="first_name" placeholder="Ingrese su nombre ..." defaultValue=""/>

                                        {/* @error('first_name')    CAMBIAR */}
                                            {/* <div className="error"> {{ $errors->first('first_name') }} </div>  CAMBIAR */}
                                        {/* @enderror */}
                                    </div>

                                    <div className="col-12 col-md-3">
                                        <label htmlFor="last_name">Apellido</label>
                                        <input type="text" className="form-control form-control-sm" id="last_name" name="last_name" placeholder="Ingrese su apellido" defaultValue=""/>

                                        {/* @error('last_name')   CAMBIAR */}
                                            {/* <div className="error"> {{ $errors->first('last_name') }} </div>   CAMBIAR */}
                                        {/* @enderror    CAMBIAR */}
                                    </div>

                                    <div className="col-12 col-md-3">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control form-control-sm" id="email" name="email" placeholder="Ingrese su email" defaultValue=""/>

                                        {/* @error('email')    CAMBIAR */}
                                            {/* <div className="error"> {{ $errors->first('email') }} </div>   CAMBIAR */}
                                        {/* @enderror    CAMBIAR */}
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <button type="submit" className="submit mt-4">Suscribirse</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Subscription
