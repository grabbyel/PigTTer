import React, {useState} from "react";
import registerService from '../../services/user'

const RegisterComponent = () => {

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


    const register = async(e) => {
        e.preventDefault();
        console.log({ username, password });
        const usuario = await registerService.register({ username, password })
        console.log(usuario);
        
    }


    return (
        <form onSubmit={register}>
            <h2>Registro</h2>

            <label>Nombre de usuario</label>
            <input onChange={handleChangeUser} type="text" />

            <label>Contraseña</label>
            <input onChange={handleChangePass} type="password" />

            <button>Submit</button>
        </form>
    );
};

export default RegisterComponent;
