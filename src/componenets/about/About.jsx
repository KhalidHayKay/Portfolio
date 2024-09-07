import './about.css';
import AboutImg from '../../assets/about.jpg';
import { ReactComponent as FilesSVG } from '../../assets/files.svg';
import CV from '../../assets/Alamutu_Khalid_CV.pdf';
import Info from './Info';

const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section-title'>About Me</h2>
			<span className='section-subtitle'>My Introduction</span>

			<div className='about-container container grid'>
				<img src={AboutImg} alt='about__img' className='about-img' />

				<div className='about-data'>
					<Info />

					<p className='about-description'>
						I am a 21 years old web developer. I develop websites with HTML, CSS,
						Javascript and php. I also use their frameworks to built good interfaces
						and structured backend
					</p>

					<a
						download
						href={CV}
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
