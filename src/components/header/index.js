import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => {

	const OpenNav = () => {
		document.getElementById("Nav").style.width = "250px"
		document.getElementById("content").style.marginLeft = "250px"
	}

	const CloseNav = () => {
		document.getElementById("Nav").style.width = "0px"
		document.getElementById("content").style.marginLeft = "0px"
	}

	return (
		<header class={style.header}>
			<h1>Preact App</h1>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/profile">Me</Link>
				<Link activeClassName={style.active} href="/profile/john">John</Link>
				<Link activeClassName={style.active} href="#" onClick={OpenNav}>|||</Link>
				<Link activeClassName={style.active} href="#" onClick={CloseNav}>|||</Link>
			</nav>
			<div className={style.content} id="content">
				<div className={style.wrapMenu} id="Nav">
					<ul>
						<li><a href="#">HOME</a></li>
						<li><a href="#">PRODUCTS</a></li>
						<li><a href="#">SERVICES</a></li>
						<li><a href="#">ABOUT US</a></li>
						<li><a href="#">CONTACT</a></li>
					</ul>
				</div>

			</div>
		</header>
	);
};

export default Header;
