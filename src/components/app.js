import { h } from 'preact';
import { Router } from 'preact-router';



// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import About from "../routes/About/index"

const App = () => (
	<div id="app">

		<Router>
			<Home path="/" />
			<About path="/about" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />

		</Router>
	</div>
)

export default App;
