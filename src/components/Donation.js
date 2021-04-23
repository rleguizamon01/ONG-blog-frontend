import React from 'react';

const Donation = () => {
    return (
        <div className="container">
            <div className="m-4">
                <div className="mb-3">
                    <h3>Realizar donación</h3>
                </div>
                {/* <!-- Success message --> */}
                {/* @if(session('success'))
                        <div className="alert alert-success mb-3 small"> {{ session('success') }}</div>
                @endif */}

                <form action="{{ route('donations.store') }}" method="POST">
                    {/* @csrf */}

                    {/* <!-- Email --> */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" defaultValue=""/>

                        {/* @error('email')
                            <div className="alert alert-danger mt-3 small p-2"> {{ $errors->first('email') }} </div>
                        @enderror */}
                    </div>

                    {/* <!-- Amount --> */}
                    <div className="form-group">
                        <label htmlFor="amount">Monto</label>
                        <input type="number" step="any" className="form-control" id="amount" name="amount" placeholder="Monto" defaultValue=""/>

                        {/* @error('amount')
                            <div className="alert alert-danger mt-3 small p-2"> {{ $errors->first('amount') }} </div>
                        @enderror */}
                    </div>

                    <button type="submit" className="btn btn-primary">Donar</button>
                </form>
            </div>
        </div>
    )
}

export default Donation


