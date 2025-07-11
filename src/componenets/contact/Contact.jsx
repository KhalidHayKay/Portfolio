import './contact.css';
import Send from '../../assets/send.svg?react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const emailJsData = {
		serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
		templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
		publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
	};

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(emailJsData.serviceId, emailJsData.templateId, form.current, {
				publicKey: emailJsData.publicKey,
			})
			.then(
				() => {
					console.log('SUCCESS!');
					e.target.reset();
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<div className='contact section' id='contact'>
			<h2 className='section-title'>Get In Touch</h2>
			<span className='section-subtitle'>Contact Me</span>

			<div className='contact-container container grid'>
				<div className='contact-content'>
					<h3 className='contact-title'>Talk to me</h3>

					<div className='contact-info'>
						<div className='contact-card'>
							<i className='bx bx-mail-send contact-card-icon'></i>

							<h3 className='contact-card-title'>Email</h3>
							<span className='contact-card-data'>alamutukhalid@gmail.com</span>

							<a
								href='mailto:alamutukhalid@gmail.com'
								target='_blank'
								rel='noreferrer'
								className='contact-button'
							>
								Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i>
							</a>
						</div>

						<div className='contact-card'>
							<i className='bx bxl-whatsapp contact-card-icon'></i>

							<h3 className='contact-card-title'>Whatapp</h3>
							<span className='contact-card-data'>+2348089721775</span>

							<a
								href='https://api.whatsapp.com/send?phone=+2348089721775&text=Hello'
								target='_blank'
								rel='noreferrer'
								className='contact-button'
							>
								Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i>
							</a>
						</div>

						<div className='contact-card'>
							<i className='bx bxl-messenger contact-card-icon'></i>

							<h3 className='contact-card-title'>Messenger</h3>
							<span className='contact-card-data'>khalidhaykay.alamutu</span>

							<a
								href='https://m.me/khalidhaykay.alamutu'
								target='_blank'
								rel='noreferrer'
								className='contact-button'
							>
								Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i>
							</a>
						</div>
					</div>
				</div>

				<div className='contact-content'>
					<h3 className='contact-title'>Write Me Your Project</h3>

					<form ref={form} onSubmit={sendEmail} className='contact-form'>
						<div className='contact-form-div'>
							<label htmlFor='name' className='contact-form-tag'>
								Name
							</label>
							<input
								type='text'
								name='name'
								id='name'
								className='contact-form-input'
								placeholder='Insert your name'
							/>
						</div>

						<div className='contact-form-div'>
							<label htmlFor='email' className='contact-form-tag'>
								Mail
							</label>
							<input
								type='email'
								name='email'
								id='email'
								className='contact-form-input'
								placeholder='Insert your email'
							/>
						</div>

						<div className='contact-form-div contact-form-area'>
							<label htmlFor='project' className='contact-form-tag'>
								Project
							</label>
							<textarea
								name='project'
								id='project'
								rows='10'
								cols='30'
								className='contact-form-input'
								placeholder='Write Project'
							></textarea>
						</div>

						<button className='button button-flex'>
							Send Message <Send />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
