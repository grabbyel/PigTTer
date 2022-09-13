import React from 'react';
import { Link } from 'react-router-dom';
import fondo404 from '../../assets/dino-error.gif'

const ErrorComponent = () => {
    return (
        <div className='mt-2 text-center' >
            <h2 className='mt-3'>Error 404 - Página no encontrada</h2>
            <img className='mt-3 mb-5' src={fondo404} alt="cerdo" width="100%" />
            <span className='text-dark fs-5  d-inline'>Ve a </span>
            <Link to="/" className="px-0 d-inline">
                <span className='text-dark fs-5 d-inline'>pigtear </span>
            </Link>
        </div>
    );
}

export default ErrorComponent;