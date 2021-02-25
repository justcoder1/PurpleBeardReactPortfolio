import { Link } from 'react-router-dom';

function Navitem(props) {
	return (
		<div id={props.item} className='navitem'>
			<Link
				className='navitem-text'
				to={props.tolink}
				onClick={() => {
					props.handleNavItemOnClick(props.item);
				}}
			>
				{props.item}
			</Link>
		</div>
	);
}

export default Navitem;
