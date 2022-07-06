import React from 'react'

function Card () {
    return (
    <div className="card mx-4" style={{"width": "18rem"}}>
    <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
      <hr size="1px"/>
      <a href="#" className="btn btn-primary">Find Out More!</a>
    </div>
  </div>
  );
}

export default Card;

