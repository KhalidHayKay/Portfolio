import './footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-container container'>
				<h1 className='footer-title'>Khalid</h1>

				<ul className='footer-list'>
					<li>
						<a href='#about' className='footer-link'>
							About
						</a>
					</li>
					<li>
						<a href='#project' className='footer-link'>
							Projects
						</a>
					</li>
					<li>
						<a href='#testimonials' className='footer-link'>
							Testimonials
						</a>
					</li>
				</ul>

				<div className='footer-social'>
					<a
						href='https://alamutukhalid.hashnode.dev'
						target='_blank'
						rel='noreferrer'
						className='footer-social-link'
					>
						<i class='bx bx-pencil'></i>
					</a>
					<a
						href='https://x.com/KhalidHayKay'
						target='_blank'
						rel='noreferrer'
						className='footer-social-link'
					>
						<i className='bx bxl-twitter'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/alamutu-khalid'
						target='_blank'
						rel='noreferrer'
						className='footer-social-link'
					>
						<i className='bx bxl-linkedin'></i>
					</a>
				</div>

				<span className='footer-copy'>&#169; Alamutu Khalid.</span>
			</div>
		</footer>
	);
};

export default Footer;
