import './modal.css';

const Modal = ({ item, workIndex }) => {
	return (
		<div className={workIndex.value === item.id ? 'active-modal modal' : 'modal'}>
			<div className='modal-content'>
				<i
					className='uil uil-times modal-close'
					onClick={() => workIndex.set(0)}
				></i>

				<h3 className='modal-title'>{item.title}</h3>
				<p className='modal-description'>{item.description}</p>

				<div className='work-stacks-container'>
					<h3 className='work-stacks-heading'>Technologies</h3>

					<ul className='work-stacks'>
						{item.stacks.split(' ').map((stack) => (
							<li className='work-stack' key={stack}>
								<i className='uil uil-check-circle work-stack-icon'></i>
								<p className='work-stack-title'>{stack}</p>
							</li>
						))}
					</ul>
				</div>

				<div className='modal-link-container'>
					<h3 className='modal-link-heading'>Check it Out</h3>

					<div className='modal-links'>
						<a
							href={item.github}
							target='_blank'
							rel='noreferrer'
							className='modal-link'
						>
							<span className='modal-link-title'>Github</span>
							<i className='bx bxl-github modal-link-icon'></i>
						</a>
						{item.website && (
							<a
								href={item.website}
								target='_blank'
								rel='noreferrer'
								className='modal-link'
							>
								<span className='modal-link-title'>Preview</span>
								<i className='bx bx-show-alt modal-link-icon'></i>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
