import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Sample from "./pages/Sample/Sample";
import Contact from "./pages/Contact/Contact";


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/project" element={<Portfolio />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/sample" element={<Sample />} />
			</Routes>
		</Router>
	);
}

export default App;
