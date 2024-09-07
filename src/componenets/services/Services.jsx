import { useState } from 'react';
import './services.css';

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	return (
		<section className='services section' id='services'>
			<h2 className='section-title'>Services</h2>
			<span className='section-subtitle'>What I Offer</span>

			<div className='services-container container grid'>
				<div className='services-content'>
					<div>
						<i className='uil uil-web-grid services-icon'></i>
						<h3 className='services-title'>
							UI/UX Design
							<br /> Implementation
						</h3>
					</div>

					<span className='services-button' onClick={() => setToggleState(1)}>
						View more <i className='uil uil-arrow-right services-button-icon'></i>
					</span>

					<div
						className={
							toggleState === 1 ? 'services-modal active-modal' : 'services-modal'
						}
					>
						<div className='services-modal-content'>
							<i
								className='uil uil-times services-modal-close'
								onClick={() => setToggleState(0)}
							></i>

							<h3 className='services-modal-title'>Web Development</h3>
							<p className='services-modal-description'>
								Service with more than 3 years of experience.Providing quality work to
								clients and companies.
							</p>

							<ul className='services-modal-services grid'>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>I develop the user Interface</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Web page development.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>
										I create ux element interactions.
									</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>I position your company brand.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>
										Design and mockups of products for companies.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='services-content'>
					<div>
						<i className='uil uil-link services-icon'></i>
						<h3 className='services-title'>
							API Development
							<br /> & Integration
						</h3>
					</div>

					<span className='services-button' onClick={() => setToggleState(2)}>
						View more <i className='uil uil-arrow-right services-button-icon'></i>
					</span>

					<div
						className={
							toggleState === 2 ? 'services-modal active-modal' : 'services-modal'
						}
					>
						<div className='services-modal-content'>
							<i
								className='uil uil-times services-modal-close'
								onClick={() => setToggleState(0)}
							></i>

							<h3 className='services-modal-title'>API Development Integration</h3>
							<p className='services-modal-description'>
								Creating and integrating RESTful APIs, connecting applications with
								third-party services or other systems.
							</p>

							<ul className='services-modal-services grid'>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>I develop the user Interface</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Web page development.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>
										I create ux element interactions.
									</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>I position your company brand.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>
										Design and mockups of products for companies.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='services-content'>
					<div>
						<i className='uil uil-wrench services-icon'></i>
						<h3 className='services-title'>
							Maintenance
							<br /> & Support
						</h3>
					</div>

					<span className='services-button' onClick={() => setToggleState(3)}>
						View more <i className='uil uil-arrow-right services-button-icon'></i>
					</span>

					<div
						className={
							toggleState === 3 ? 'services-modal active-modal' : 'services-modal'
						}
					>
						<div className='services-modal-content'>
							<i
								className='uil uil-times services-modal-close'
								onClick={() => setToggleState(0)}
							></i>

							<h3 className='services-modal-title'>Maintenance & Support</h3>
							<p className='services-modal-description'>
								Offering ongoing support and maintenance for web applications to ensure
								they remain up-to-date, secure, and functional.
							</p>

							<ul className='services-modal-services grid'>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>I develop the user Interface</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Web page development.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>
										I create ux element interactions.
									</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>I position your company brand.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>
										Design and mockups of products for companies.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
