import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import style from './style.css';
import axios from "axios"


const Home = () => {

	const [username, setUsername] = useState()
	const [password, setPassword] = useState()
	const [msg, setMsg] = useState()

	const LoginHandler = async (e) => {
		e.preventDefault()
		await axios.post("http://localhost:3001/v1/auth/login", {
			"username": username,
			"password": password
		})
			.then(res => {
				setMsg(res.data.msg)
				console.log(res.data)
			})
			.catch(err => {
				setMsg(err.msg)
			})
	}

	return (
		<div className={style.bodyPage}>
			<div className={style.wrapBoxLogin}>
				<div className={style.wraptitle}>
					<h3>Login Memeber</h3>
				</div>
				<form onSubmit={LoginHandler} className={style.wrapInputBox}>
					<input type="text" onChange={e => setUsername(e.target.value)} />
					<input type="password" onChange={e => setPassword(e.target.value)} />
					<input type="submit" value="Login" />
				</form>
				<div className={style.alertmessage}>
					<p>{msg}</p>
				</div>
			</div>
		</div>
	);

}

export default Home;
