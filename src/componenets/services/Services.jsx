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

							<h3 className='services-modal-title'>UI/UX Design Implementation</h3>
							<p className='services-modal-description'>
								Translating design prototypes into functional web pages with a focus on
								usability and aesthetics.
							</p>

							<ul className='services-modal-services grid'>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Pixel-perfect Conversion.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Responsive Design.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Interactive Elements.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Optimized Performance.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Accessibility Compliance.</p>
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
									<p className='services-modal-info'>Custom API Development.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Third-party API Integration.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Secure Data Transfer.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Efficient Data Handling.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Error Handling & Documentation.</p>
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
									<p className='services-modal-info'>Bug Fixes & Updates.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Performance Optimization.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Security Enhancements.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>Version Control & Upgrades.</p>
								</li>
								<li className='services-modal-service'>
									<i className='uil uil-check-circle service-modal-icon'></i>
									<p className='services-modal-info'>24/7 Support.</p>
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
