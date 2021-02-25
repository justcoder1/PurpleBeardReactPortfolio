export default function Widecard(props) {
	return (
		<div className='widecard'>
			<h2>{props.title}</h2>
			<h4>{props.desc}</h4>
			<h3>
				{props.from} - {props.dto}
			</h3>
		</div>
	);
}
