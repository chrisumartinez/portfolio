import "./App.css";
import React from "react";
import NavBar from "./NavBar.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./routes/resume.js";
import Home from "./routes/home.js";

const App = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/resume" exact component={() => <Resume />} />
				<Route path="/" exact component={() => <Home />} />
			</Switch>
		</Router>
	);
};
export default App;
