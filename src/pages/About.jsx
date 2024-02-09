import '../styles/About.css'

import { Link } from 'react-router-dom'
import resim from '../images/about.jpg'

const About = () => {
	return (
		<section className="about" id="about">
			<h1 className="heading">
				About <span>us</span>
			</h1>

			<div className="row">
				<div className="image">
					<img className="img" src={resim} alt="about" />
				</div>
				<div className="content">
					<h3>What Is The Secret Recipe Of Our Burgers?</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, eligendi! Est quas architecto sunt!
						Perspiciatis in accusamus ullam natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ut
						fuga velit quasi tempora inventore numquam? Amet eum id, molestiae eos pariatur modi sint cupiditate
						laudantium laboriosam, excepturi eligendi minima? Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro sed corrupti maxime iure aliquid optio
						mollitia ratione nobis reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro sed
						corrupti maxime iure aliquid optio mollitia ratione nobis reiciendis.
					</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam velit molestiae porro beatae repellat quis
						quidem eaque. Eius, at pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam velit
						molestiae porro beatae repellat quis quidem eaque.
					</p>
					<Link to="/blogs">
						<button className="btn">Learn More</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default About
