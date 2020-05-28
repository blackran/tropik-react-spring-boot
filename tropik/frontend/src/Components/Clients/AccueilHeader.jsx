import React, {Component} from 'react';
import Navigation from './Navigation';
import './styles/header.scss';
import {connect} from 'react-redux';

class AccueilHeader extends Component {
	show = () => {
		setTimeout(() => {
			this.props.opacity1(1);
		}, 1000);
		setTimeout(() => {
			this.props.opacity2(1);
		}, 500);
	}
	componentDidMount() {
		this.show();
  }

	render() {
		const { opacity1, opacity2 } = this.props.states;
		return (
			<header id='header'>
				<div className='flexImageTitleHeader'>
					<img src='static/images/tropikIcon.png' alt='icon tropik' style={{opacity:opacity2}} className='myslide2'/>
					<span className='headerTitle myslide' style={{opacity:opacity1}}
					>__ Le Tropik__ _</span>
				</div>
				<Navigation/>
			</header>
		);
	}
}
const mapStateToProps = state => {
	return {states: state.other}
}

const mapDispatchToProps = dispatch => {
	return {
		opacity1: (data) => {
			dispatch({type: "UPDATE_OPACITY1", data: data});
		},
		opacity2: (data) => {
			dispatch({type: "UPDATE_OPACITY2", data: data});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccueilHeader);
