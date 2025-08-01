import './about.css';
import FilesSVG from '../../assets/files.svg?react';
import Info from './Info';

const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section-title'>About Me</h2>
			<span className='section-subtitle'>My Introduction</span>

			<div className='about-container container grid'>
				<img
					src='https://cdn.jsdelivr.net/gh/KhalidHayKay/Assets@e5ea5f78ba4bcf002e161181ab53eaba331f7ec7/Portfolio/about_img.jpg'
					alt='about__img'
					className='about-img'
				/>

				<div className='about-data'>
					<Info />

					<p className='about-description'>
						I'm a {2025 - 2003}-year-old fullstack developer helping founders and
						small teams build and launch web products fast.<br></br> I use tools like
						React, Next.js, Laravel, Tailwind, and MySQL to create responsive UIs and
						clean backend logic. From MVPs to APIs to bug fixes, I move quickly and
						communicate clearly.
					</p>

					<a
						download
						href='https://cdn.jsdelivr.net/gh/KhalidHayKay/Assets@e28212aaef3b22a5c20e74232538152f4fcef793/Portfolio/Alamutu_Khalid_FullStack_CV.pdf'
						target='_blank'
						rel='noreferrer'
						className='button button-flex'
					>
						Download CV <FilesSVG />
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
