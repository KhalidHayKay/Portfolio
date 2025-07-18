import Hand from '../../assets/hand.svg?react';
import Send from '../../assets/send.svg?react';

const Info = () => {
	return (
		<div className='home-info'>
			<h1 className='home-title'>
				Alamutu Khalid <Hand />
			</h1>
			<h3 className='home-subtitle'>Fullstack Web Developer</h3>
			<p className='home-description'>
				Based in Lagos — I’m passionate about turning ideas into fast, reliable
				software.
				<br />I help startups build and ship clean, functional web products using
				React, Next.js and Laravel.
			</p>

			<a href='#contact' className='button button-flex'>
				Say Hello <Send />
			</a>
		</div>
	);
};

export default Info;
