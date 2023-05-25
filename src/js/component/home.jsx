
//include images into your bundle
import React from "react";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
             <Cards title={"Card title"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta numquam ut atque fuga aut laudantium!"} buttonDescription={"Find out more!"}/>
		</div>
	);
};

export default Home;
