import { Data } from './Data';
import Work from './Work';
import './works.css';

const Works = () => {
	return (
		<section className='work section' id='portfolio'>
			<h2 className='section-title'>Portfolio</h2>
			<span className='section-subtitle'>My most recent works</span>

			<div className='works-container container grid'>
				{[...Data]
					.sort((a, b) => a.id - b.id) // ascending order
					.map((item) => (
						<Work item={item} key={item.id} />
					))}
			</div>
		</section>
	);
};

export default Works;
