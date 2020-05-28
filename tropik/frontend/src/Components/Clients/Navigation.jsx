import React, {Component} from 'react';
import './styles/Navigation.scss';
import {Link} from 'react-router-dom';

class Navigation extends Component {

	render() {
		return (
			<nav>
				<div className='navigation myslide2' style={{padding: 10}}>
					<a href="#header">Accueil</a>
					<a href="#chambres">Chambres</a>
					<a href="#contacts">Contacts</a>
					<Link to='/Login'>Login</Link>
				</div>
			</nav>
		);
	}
}

export default Navigation;
