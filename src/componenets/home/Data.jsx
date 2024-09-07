import { ReactComponent as Hand } from '../../assets/hand.svg';
import { ReactComponent as Send } from '../../assets/send.svg';

const Data = () => {
	return (
		<div className='home-data'>
			<h1 className='home-title'>
				Alamutu Khalid <Hand />
			</h1>
			<h3 className='home-subtitle'>Web Developer</h3>
			<p className='home-description'>
				I'm a creative Web Developer based in Lagos, Nigeria, and I'm very
				passionate and dedicated to my work.
			</p>

			<a href='#contact' className='button button-flex'>
				Say Hello <Send />
			</a>
		</div>
	);
};

export default Data;
