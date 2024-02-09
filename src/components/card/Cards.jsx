import { AiFillStar } from 'react-icons/ai'
import avatar1 from '../../images/avatar-1.png'
import avatar2 from '../../images/avatar-2.png'
import avatar3 from '../../images/avatar-3.png'
import quote from '../../images/quote.png'

const Cards = () => {
	return (
		<>
			<div className="box">
				<img className="img1" src={quote} alt="quote" />
				<p className="p1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint exercitationem quas recusandae. Eaque iure
					quos, eos veritatis beatae, sequi qui rerum sint harum molestias impedit nobis nemo placeat temporibus.
				</p>
				<hr></hr>

				<img src={avatar1} className="user" />
				<h3>Jennifer Becker</h3>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</div>
			<div className="box">
				<img className="img1" src={quote} alt="quote" />
				<p className="p1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint exercitationem quas recusandae. Eaque iure
					quos, eos veritatis beatae, sequi qui rerum sint harum molestias impedit nobis nemo placeat temporibus.
				</p>
				<hr></hr>

				<img src={avatar2} className="user" />
				<h3>John Doe</h3>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</div>
			<div className="box">
				<img className="img1" src={quote} alt="quote" />
				<p className="p1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint exercitationem quas recusandae. Eaque iure
					quos, eos veritatis beatae, sequi qui rerum sint harum molestias impedit nobis nemo placeat temporibus.
				</p>
				<hr></hr>

				<img src={avatar3} className="user" />
				<h3>Lisa Arambula</h3>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</div>
		</>
	)
}

export default Cards
