import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Routes } from 'react-router-dom'

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
				<Route path="/" exact element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/review" element={<Review />} />
			</Routes>
		</>
	)
}

export default App
