import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link, Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Header from './components/header/Header'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Review from './pages/Review'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Link to="/" exact element={<Home />} />
				<Link to="/about" element={<About />} />
				<Link to="/menu" element={<Menu />} />
				<Link to="/blogs" element={<Blogs />} />
				<Link to="/contact" element={<Contact />} />
				<Link to="/review" element={<Review />} />
			</Routes>
		</>
	)
}

export default App
