/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import './styles/Accueil.scss';
import AccueilHeader from './AccueilHeader';
import Services from './Services';
import Chambres from './Chambres';
import Contacts from './Contacts';
import Footer from './Footer';
import {HomeOutlined, RoomServiceRounded, HotelRounded, LocalPhone} from '@material-ui/icons';

import NavigationText from './NavigationText';

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: true
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 180) {
        this.setState({opacity: false})
      } else {
        this.setState({opacity: true})
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (<div>
      <div
         className={this.state.opacity?'navigationLeft opacityZero animat':'navigationLeft animat'}
         style={{zIndex: 1000}}
      >
        <NavigationText url='#header' icon={<HomeOutlined/>}/>
        <NavigationText url='#service' icon={<RoomServiceRounded/>}/>
        <NavigationText url='#chambres' icon={<HotelRounded/>}/>
        <NavigationText url='#contacts' icon={<LocalPhone/>}/>
      </div>
      <AccueilHeader/>
      <Services/>
      <Chambres/>
      <Contacts/>
      <Footer/>
    </div>);
  }
}

export default Accueil;
