import "./App.css";
import React from "react";
import NavBar from "./NavBar.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./routes/resume.js";
import Home from "./routes/home.js";
import Contact from "./routes/contact.js";

const App = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/resume" exact component={() => <Resume />} />
				<Route path="/" exact component={() => <Home />} />
				<Route path="/contact" exact component={() => <Contact />} />
			</Switch>
		</Router>
	);
};
export default App;
