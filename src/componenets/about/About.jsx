import './about.css';
import AboutImg from '../../assets/about.jpg';
import { ReactComponent as FilesSVG } from '../../assets/files.svg';
import CV from "../../assets/Alamutu_Khalid's_CV.pdf";
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
						I'm a 21-year-old web developer passionate about crafting interactive
						websites. Using HTML, CSS, JavaScript, PHP and modern frameworks, I build
						appealing frontends and structured backends.
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
