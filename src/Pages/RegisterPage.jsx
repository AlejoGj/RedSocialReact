import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function RegisterPage() {

    let { register, handleSubmit, watch, formState : { errors } } = useForm(); // verificar en tiempo real lo que se escribe
    let contra = watch("contrasena");
    let navigate = useNavigate();

    let onSubmited = async ( data ) => {
        console.log("Datos del formulario");
        console.log(data);

        try {
            
            let respuesta = await axios.post("http://localhost/loginApi/register", {
                nombre : data.nombre,
                correo : data.correo,
                contrasena : data.contrasena
            });
            alert(respuesta.data.message);
            navigate("/");
            console.log("Respuesta del servidor");
            console.log(respuesta);

        } catch (error) {
            console.log(error)
        }
        



    };



  return (
    <>
        <Navbar/>
        <div className="w3-container w3-content" style={{"maxWidth":"600px", "marginTop":"100px"}}>
            <div className="w3-card-4 w3-round-xlarge w3-white">
                <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
                <h2 className="w3-center">Crear cuenta</h2>
                </div>
                <form 
                    onSubmit={handleSubmit(onSubmited)}
                    className="w3-container w3-padding-24" method="get">
                <div className="w3-section">
                    <label><i className="fa fa-user"></i> Nombre completo</label>
                    <input 
                    className="w3-input w3-border w3-round" 
                    type="text" 
                    {...register("nombre",{required: true})}
                    placeholder="Juan Pérez" 
                    />
                    {errors.nombre && <p style={{color:"red"}}> Debes escribir un nombre</p>}
                </div>
                <div className="w3-section">
                    <label><i className="fa fa-envelope"></i> Correo electrónico</label>
                    <input className="w3-input w3-border w3-round" 
                    type="email" 
                    {...register("correo",{required: true})}
                    placeholder="tu@email.com" 
                    />
                    {errors.correo && <p style={{color:"red"}}> Debes escribir un correo</p>}
                </div>
                <div className="w3-section">
                    <label><i className="fa fa-lock"></i> Contraseña</label>
                    <input className="w3-input w3-border w3-round" 
                    type="password"
                    {...register("contrasena",{required: true})} 
                    placeholder="********" 
                    />
                    {errors.contrasena && <p style={{color:"red"}}> Debes escribir una contraseña</p>}
                </div>
                <div className="w3-section">
                    <label><i className="fa fa-lock"></i> Confirmar Contraseña</label>
                    <input className="w3-input w3-border w3-round" 
                    type="password"
                    {...register("confirmar_contrasena",
                        {required: "Por favor digita una contraseña",
                            validate: ( value ) => value == contra || "La contraseña no coincide"
                        })
                    
                    } 
                    placeholder="********" 
                    />
                    {errors.confirmar_contrasena && <p style={{color:"red"}}> {errors.confirmar_contrasena.message} </p>}
                </div>
                <div className="w3-section">
                    <label><i className="fa fa-calendar"></i> Fecha de nacimiento</label>
                    <input className="w3-input w3-border w3-round" type="date"/>
                </div>
                <div className="w3-section">
                    <label><i className="fa fa-venus-mars"></i> Género</label>
                    <select className="w3-select w3-border w3-round">
                    <option value="" disabled selected>Selecciona</option>
                    <option>Hombre</option>
                    <option>Mujer</option>
                    <option>Otro</option>
                    </select>
                </div>
                <div className="w3-section">
                    <button className="w3-button w3-theme-d2 w3-round w3-block w3-section"><i className="fa fa-user-plus"></i> Registrarse</button>
                </div>
                <p className="w3-center">¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>.</p>
                </form>
            </div>
        </div>
        <Footer/>
    </>
  )
}
