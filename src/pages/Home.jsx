import '../styles/Home.css'

import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<section className="home">
			<div className="content">
				<h1>EXPRESS HOME DELIVERY</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quam obcaecati necessitatibus reprehenderit
					placeat sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestiae cum laboriosam,
					culpa repudiandae dicta fugiat quo, ipsum at, itaque saepe obcaecati repellat asperiores debitis expedita
					harum facere odio possimus.
				</p>
				<Link to="/menu">
					<button className="btn">Order Now</button>
				</Link>
			</div>
		</section>
	)
}

export default Home
