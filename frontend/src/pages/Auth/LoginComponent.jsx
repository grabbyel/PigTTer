import React, {useState} from "react";
import loginService from '../../services/login'

const LoginComponent = ({setUser}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleChangeUser = (e) => {
        e.preventDefault(); 
        setUsername(e.target.value);
    }


    const handleChangePass = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }


    const login = async(e) => {
        e.preventDefault();
        const usuario = await loginService.login({ username, password });
        if (usuario) {
            setUser(usuario);
        }
        console.log(usuario);
        
    }


    return (
        <form onSubmit={login}>
            <h2>Iniciar Sesión</h2>

            <label>Nombre de usuario</label>
            <input onChange={handleChangeUser} type="text" />

            <label>Contraseña</label>
            <input onChange={handleChangePass} type="password" />

            <button>Submit</button>
        </form>
    );
};

export default LoginComponent;
