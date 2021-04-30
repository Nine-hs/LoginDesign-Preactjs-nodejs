import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	const [Text, setText] = useState();

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div class={style.profile}>
			<h1>Profile: {user}</h1>
			<p>This is the user profile for a user named {user}.</p>
			<input onChange={e => setText(e.target.value)} />
			<div>Current time: {new Date(time).toLocaleString()}</div>


			<p>
				<button onClick={() => setCount((count) => count + 1)}>Click Me</button>
				{' '}
				Clicked {count} times.
			</p>
			<h3 align="center">{Text}</h3>
		</div>
	);
}

export default Profile;
