import '../styles/Menu.css'

import Card from '../components/card/Card'

const Menu = () => {
	return (
		<section className="menu" id="menu">
			<h1 className="heading">
				our <span>menu</span>
			</h1>

			<div className="box-container">
				<Card />
			</div>
		</section>
	)
}

export default Menu
