import React from 'react'
import Horario from '../img/horario.png'
import Footer from '../Footer/Footer'

const Horarios = () => {
    

        return (
            
            
            <React.StrictMode>
            <div id="horariodiv1">
            <img id="horariogrande" src={Horario} />
            </div>
            <Footer />
           </React.StrictMode>
        
    );
}

export default Horarios;