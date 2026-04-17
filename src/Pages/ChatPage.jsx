import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ChatPage() {
  return (
    <>
    <Navbar/>
        <div className="w3-container w3-content" style={{"maxWidth":"1200px", "marginTop":"80px"}}>
            <div className="w3-row">
                {/*<!-- Lista de chats -->*/}
                <div className="w3-col m4">
                <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding-16 w3-theme-d2">
                    <h4><i className="fa fa-comments"></i> Conversaciones</h4>
                    <div className="w3-section">
                        <input className="w3-input w3-border w3-round" type="text" placeholder="Buscar mensajes..."/>
                    </div>
                    </div>
                    <ul className="w3-ul w3-hoverable">
                    <li className="w3-padding-16">
                        <img src="https://www.w3schools.com/w3images/avatar5.png" className="w3-left w3-circle w3-margin-right" style={{"width":"50px"}}/>
                        <span className="w3-large">Jane Doe</span><br/>
                        <span className="w3-opacity">Hola, ¿cómo estás?</span>
                        <span className="w3-right w3-small w3-text-theme">10:30</span>
                    </li>
                    <li className="w3-padding-16">
                        <img src="https://www.w3schools.com/w3images/avatar6.png" className="w3-left w3-circle w3-margin-right" style={{"width":"50px"}}/>
                        <span className="w3-large">Angie Jane</span><br/>
                        <span className="w3-opacity">¿Viste el nuevo proyecto?</span>
                        <span className="w3-right w3-small w3-text-theme">Ayer</span>
                    </li>
                    <li className="w3-padding-16 w3-theme-l4">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-left w3-circle w3-margin-right" style={{"width":"50px"}}/>
                        <span className="w3-large">John Doe</span><br/>
                        <span className="w3-opacity">¡Claro! Quedó genial.</span>
                        <span className="w3-right w3-small w3-text-theme">Ayer</span>
                    </li>
                    </ul>
                </div>
                </div>

                {/*<!-- Ventana de chat activa -->*/}
                <div className="w3-col m8">
                <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding-16 w3-theme-d2 w3-round-large">
                    <h4><img src="https://www.w3schools.com/w3images/avatar5.png" className="w3-circle" style={{"width":"40px", "verticalAlign":"middle"}}/> Jane Doe <span className="w3-opacity w3-medium"> · Activa ahora</span></h4>
                    </div>
                    <div className="w3-container w3-padding-16" style={{"height":"400px", "overflowY":"scroll"}}>
                    <div className="w3-panel w3-leftbar w3-border-blue w3-theme-l5 w3-round-large" style={{"maxWidth":"80%"}}>
                        <p><strong>Jane Doe</strong> <span className="w3-opacity">10:28</span></p>
                        <p>¡Hola! ¿Cómo va el diseño?</p>
                    </div>
                    <div className="w3-panel w3-rightbar w3-border-green w3-theme-l4 w3-round-large w3-right" style={{"maxWidth":"80%"}}>
                        <p><strong>Tú</strong> <span className="w3-opacity">10:30</span></p>
                        <p>Muy bien, casi terminado. ¿Te gustó la última versión?</p>
                    </div>
                    <div className="w3-panel w3-leftbar w3-border-blue w3-theme-l5 w3-round-large" style={{"maxWidth":"80%"}}>
                        <p><strong>Jane Doe</strong> <span className="w3-opacity">10:32</span></p>
                        <p>Sí, está genial. Solo unos ajustes en los colores.</p>
                    </div>
                    </div>
                    <div className="w3-container w3-padding-16 w3-border-top">
                    <div className="w3-row">
                        <div className="w3-col s9">
                        <input className="w3-input w3-border w3-round" type="text" placeholder="Escribe un mensaje..."/>
                        </div>
                        <div className="w3-col s3">
                        <button className="w3-button w3-theme-d2 w3-round w3-block"><i className="fa fa-paper-plane"></i> Enviar</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
