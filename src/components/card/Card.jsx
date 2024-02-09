import { Link } from 'react-router-dom'
import men from '../../images/menu-2.png'
import menu from '../../images/menu-1.png'
import menuu from '../../images/menu-3.png'

const Card = () => {
	return (
		<>
			<div className="box">
				<div className="box-head">
					<img src={menu} alt="menu" />
					<span className="menu-category">PIZZA</span>
					<h3>6 Mini Pizzas</h3>
					<div className="price">
						$104.99 <span>119.99</span>
					</div>
				</div>
				<div className="box-bottom">
					<Link to="/review">
						<button className="btn">Show Reviews</button>
					</Link>
				</div>
			</div>
			<div className="box">
				<div className="box-head">
					<img src={men} alt="menu" />
					<span className="menu-category">burger</span>
					<h3>HAMBURGER</h3>
					<div className="price">
						$99.99 <span>100.99</span>
					</div>
				</div>
				<div className="box-bottom">
					<Link to="/review">
						<button className="btn">Show Reviews</button>
					</Link>
				</div>
			</div>
			<div className="box">
				<div className="box-head">
					<img src={menuu} alt="menu" />
					<span className="menu-category">PIZZA</span>
					<h3>Big Pizzas</h3>
					<div className="price">
						$204.99 <span>339.99</span>
					</div>
				</div>
				<div className="box-bottom">
					<Link to="/review">
						<button className="btn">Show Reviews</button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Card
