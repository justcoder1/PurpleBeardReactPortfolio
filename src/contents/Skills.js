export default function Skills() {
	const myskills = ['HTML', 'CSS', 'JS'];
	return (
		<div className='skills'>
			<h1>Skills</h1>
			<br />
			<ul>
				{myskills.map((skill) => {
					return <li>{skill}</li>;
				})}
			</ul>
		</div>
	);
}
