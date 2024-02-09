import '../styles/Reviews.css'

import Cards from '../components/card/Cards'

const Review = () => {
	return (
		<section className="review" id="review">
			<h1 className="heading">
				customers <span>review</span>
			</h1>
			<div className="box-container">
				<Cards />
			</div>
		</section>
	)
}

export default Review
