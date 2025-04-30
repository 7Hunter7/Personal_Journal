import './Sidebar.scss';

function Sidebar({children}) {
	return (
		<button className='sidebar'>
			{children}
		</button>
	);
}

export default Sidebar;
