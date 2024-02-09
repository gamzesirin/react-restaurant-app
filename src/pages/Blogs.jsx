import '../styles/Blog.css'

import { Link } from 'react-router-dom'
import blog from '../images/blog-1.jpg'
import blogg from '../images/blog-2.jpg'
import bloggg from '../images/blog-3.jpg'

const Blogs = () => {
	return (
		<section>
			<h1 className="heading">BLOGS</h1>

			<div className="images">
				<img src={blog}></img>
				<img src={blogg}></img>
				<img src={bloggg}></img>
			</div>
			<p className="p">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quam obcaecati necessitatibus reprehenderit
				placeat sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestiae cum laboriosam, culpa
				repudiandae dicta fugiat quo, ipsum at, itaque saepe obcaecati repellat asperiores debitis expedita harum facere
				odio possimus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quam obcaecati necessitatibus
				reprehenderit placeat sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestiae cum
				laboriosam, culpa repudiandae dicta fugiat quo, ipsum at, itaque saepe obcaecati repellat asperiores debitis
				expedita harum facere odio possimus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quam
				obcaecati necessitatibus reprehenderit placeat sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Nesciunt molestiae cum laboriosam, culpa repudiandae dicta fugiat quo, ipsum at, itaque saepe obcaecati repellat
				asperiores debitis expedita harum facere odio possimus.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Illo quam obcaecati necessitatibus reprehenderit placeat sunt. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Nesciunt molestiae cum laboriosam, culpa repudiandae dicta fugiat quo, ipsum at, itaque saepe
				obcaecati repellat asperiores debitis expedita harum facere odio possimus.Lorem ipsum dolor sit amet
				consectetur, adipisicing elit. Illo quam obcaecati necessitatibus reprehenderit placeat sunt. Lorem ipsum dolor
				sit.
			</p>
			<Link to="/contact">
				<button className="btn2">Contact Us</button>
			</Link>
		</section>
	)
}

export default Blogs
