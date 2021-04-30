import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import Header from "../../components/header/"
import style from './style.css';

const Home = () => {

	const [Text, setText] = useState();

	return (
		<div class={style.home}>
			<Header />
			<h1>Home</h1>
			<p>This is the About Us component.</p>
			<input onInput={e => setText(e.target.value)} />
			<h3 align="center">{Text}</h3>


		</div>
	);

}

export default Home;
