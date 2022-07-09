import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="" style={{"height":"100vh"}}>
		<Navbar/>
		<div className="container-fluid row m-0 p-0">
        <Jumbotron/>
		<h1 className="text-center mt-a">Las Flores Más Lindas</h1>
		<div className="d-flex justify-content-around px-5">
		<Card titulo="Rosas" img="https://www.florespedia.com/Minis/ramo-de-rosas-rojas.jpg" mensaje="El género Rosa está compuesto por un conocido grupo de arbustos generalmente espinosos y floridos representantes principales de la familia de las rosáceas. Se denomina rosa a la flor de los miembros de este género y rosal a la planta."/>
		<Card titulo="Girasoles" img="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/06/significado-de-los-girasoles-estu-flor-favorita.jpg" mensaje="Helianthus annuus, también llamado comúnmente girasol, maravilla, mirasol, maíz de teja, acahual​ es una planta herbácea anual de la familia de las asteráceas originaria de Centro y Norteamérica y cultivada como alimenticia, oleaginosa y ornamental en todo el mundo." />
		<Card titulo="Tulipanes" img="https://www.hogarmania.com/archivos/202105/caracteristicas-cuidados-del-tulipan-1280x720x80xX.jpg" mensaje="Tulipa es un género de plantas perennes y bulbosas perteneciente a la familia Liliaceae, en el que se incluyen los populares tulipanes, nombre común con el que se designa a todas las especies, híbridos y cultivares de este género." />
		</div>
		</div>
		<Footer/>
		</div>
	);
};

export default Home;
