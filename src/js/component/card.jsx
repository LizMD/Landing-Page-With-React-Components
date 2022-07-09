import React from 'react'
import PropTypes from 'prop-types';

function Card (props) {
    return (
    <div className="row d-flex justify content-center mt-4" style={{"width": "18rem"}}>
    <img src={props.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title content-center">{props.titulo}</h5>
      <p className="card-text content-center">{props.mensaje}</p>
      <hr size="1px"/>
      <a href="#" className="btn btn-primary" onClick={()=>{
            props.mensaje(props.titulo)
        }} >Precio!</a>
    </div>
  </div>
  );
}

Card.propTypes = {
  img:  PropTypes.string,
  titulo:  PropTypes.string,
  mensaje:  PropTypes.func,
 };

export default Card;

