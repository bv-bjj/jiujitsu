import React from "react";
import Tarjeta from './Tarjeta';


class Programas extends React.Component {
  constructor() {
    super();
    this.state = {
      tarjetas: [
        {
          titulo: "Martin",
          imagenUrl: "https://avatars2.githubusercontent.com/u/10574326?v=3&s=460",
          descripcion: "lorem ipsum soleriei`rofpiokj"
        },
        {
          titulo: "Diego",
          imagenUrl: "https://avatars2.githubusercontent.com/u/10574326?v=3&s=460",
          descripcion: "lorem ipsum soleriei`rofpiokj"
        },
        {
          titulo: "Joise",
          imagenUrl: "https://avatars2.githubusercontent.com/u/10574326?v=3&s=460",
          descripcion: "lorem ipsum soleriei`rofpiokj"
        },
      ]
    }
  }
  render(){
    return(
      <div className="Container">
        {this.state.tarjetas.map((tarjeta) => (
          <Tarjeta imagenUrl={tarjeta.imagenUrl}
            titulo={tarjeta.titulo}
            descripcion={tarjeta.descripcion}/>
        ))}
      </div>
    )
  }
}


export default Programas;


