import './Header.css'

import { BsSearch } from 'react-icons/bs'
import Nav from 'react-bootstrap/Nav'
import logo from './logo.png'

const Header = () => {
	return (
		<div className="header">
			<header>
				<img className="logo" src={logo}></img>
			</header>
			<Nav className="navs" variant="underline">
				<Nav.Item>
					<Nav.Link className="nav" href="/">
						Home
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className="nav" href="/about">
						About
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className="nav" href="/menu">
						Menu
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className="nav" href="/blogs">
						Blogs
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className="nav" href="/contact">
						Contact
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className="nav" href="/review">
						Review
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<div className="search">
				<i className="BsSearch">
					<BsSearch />
				</i>
				<input type="text" placeholder="Search here..." />
			</div>
		</div>
	)
}

export default Header
