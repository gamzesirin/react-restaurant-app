import '../styles/Contact.css'

import { BsTelephoneFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<h1 className="heading">
				contact <span>us</span>
			</h1>

			<div className="row">
				<iframe
					className="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.849355292086!2d28.974791956110277!3d41.03701747684848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCDFnmVoaXQgTXVodGFyLCAzNDQzNSBCZXlvxJ9sdS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1688366081831!5m2!1str!2str"
					loading="lazy"
				></iframe>
				<form className="form">
					<h3>Get In Touch</h3>
					<div className="inputBox">
						<FaUserAlt />
						<input type="text" placeholder="name" />
					</div>
					<div className="inputBox">
						<GrMail />
						<input type="email" placeholder="email" />
					</div>
					<div className="inputBox">
						<BsTelephoneFill />
						<input type="text" placeholder="+90" />
					</div>
					<input type="submit" className="btn" value="Contact Now" />
				</form>
			</div>
		</section>
	)
}

export default Contact
