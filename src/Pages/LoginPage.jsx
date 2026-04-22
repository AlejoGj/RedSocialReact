import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom' // el componente solo se podría poner por dentro del return

export default function LoginPage({onLogin}) {

    /*const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const login = (email,password) => {
        if (email === 'holaquehace@gmail.com' && password === 'test'){
            alert('Login correcto')
        } else {
            alert('Login incorrecto')
        }
    }

    const validate = ( password ) => {
        if (password.length < 4 ) return 'Contraseña muy corta';
    }

    const errorMessage = validate ( password );
    */
    
    let { register, handleSubmit, formState : { errors } } = useForm();
    let navigate = useNavigate();

    let onSubmited = async ( data ) => {
        console.log("Datos del formulario");
        console.log(data);

        try {
            
            let respuesta = await axios.post("http://localhost/loginApi/login", data);
            alert("Bienvenido " +respuesta.data.nombre);
            onLogin(respuesta.data.nombre);
            navigate("/Home");
            console.log("Respuesta del servidor");
            console.log(respuesta);

        } catch (error) {
            console.log(error)
            alert("Usuario y/o contraseña incorrecto")
        }

    };



  return (
    <>
        <Navbar/>
        <div className="w3-container w3-content" style={{"maxWidth":"500px", "marginTop":"100px"}}>
            <div className="w3-card-4 w3-round-xlarge w3-white">
                <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
                <h2 className="w3-center">Iniciar sesión</h2>
                </div>
                <form 
                    onSubmit={handleSubmit(onSubmited)}
                    className="w3-container 
                    w3-padding-24"  
                    method="get">
                    <div className="w3-section">
                        <label><i className="fa fa-envelope"></i> Correo electrónico</label>
                        <input 
                            className="w3-input w3-border w3-round" 
                            type="email" 
                            name = "email" 
                            {... register("correo", {required: true})}
                            autoComplete='off' 
                            placeholder="tu@email.com" 
                            />
                        { errors.correo && <p style={{color: "red"}}> Debes escribir un correo </p> }
                    </div>
                    <div className="w3-section">
                        <label><i className="fa fa-lock"></i> Contraseña</label>
                        <input 
                            className="w3-input w3-border w3-round" 
                            type="password" 
                            name="password"
                            {... register("contrasena", {required: true})}
                            placeholder="********" 
                            />
                        { errors.contrasena && <p style={{color: "red"}}> La contraseña es obligatoria</p> }
                    </div>
                    <div className="w3-section">
                        <button className="w3-button w3-theme-d2 w3-round w3-block w3-section" type='submit'><i className="fa fa-sign-in"></i> Acceder</button>
                    </div>
                    <p className="w3-center"><a href="#">¿Olvidaste tu contraseña?</a></p>
                    <p className="w3-center">¿No tienes cuenta? <Link to="/Register">Regístrate aquí</Link>.</p>
                </form>
            </div>
        </div>
        <Footer/>
    </>
  )

  

}
