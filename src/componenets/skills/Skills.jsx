import './skills.css';
import Backend from './Backend';
import Frontend from './Frontend';

const Skills = () => {
	return (
		<section className='skills section' id='skills'>
			<h2 className='section-title'>Skills</h2>
			<span className='section-subtitle'>My Techinical Level</span>

			<div className='skills-container container grid'>
				<Frontend />
				<Backend />
			</div>
		</section>
	);
};

export default Skills;
