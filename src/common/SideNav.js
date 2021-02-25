import { Component } from 'react';
import Navitem from './Navitem';

class SideNav extends Component {
	// This is all used to highlight what has been clicked
	state = { activeNavItem: '' };

	handleNavItemOnClick = (item) => {
		if (this.state.activeNavItem.length > 0) {
			document
				.getElementById(this.state.activeNavItem)
				.classList.remove('Active');
		}
		this.setState({ activeNavItem: item }, () => {
			document.getElementById(item).classList.add('Active');
		});
	};

	render() {
		return (
			<nav className='sidenav'>
				<ul>
					<Navitem
						item='Home'
						tolink='/'
						handleNavItemOnClick={this.handleNavItemOnClick}
					></Navitem>
					<Navitem
						item='About'
						tolink='/about'
						handleNavItemOnClick={this.handleNavItemOnClick}
					></Navitem>
					<Navitem
						item='Education'
						tolink='/education'
						handleNavItemOnClick={this.handleNavItemOnClick}
					></Navitem>
					<Navitem
						item='Skills'
						tolink='/skills'
						handleNavItemOnClick={this.handleNavItemOnClick}
					></Navitem>
					<Navitem
						item='Contact'
						tolink='/contact'
						handleNavItemOnClick={this.handleNavItemOnClick}
					></Navitem>
				</ul>
			</nav>
		);
	}
}

export default SideNav;
