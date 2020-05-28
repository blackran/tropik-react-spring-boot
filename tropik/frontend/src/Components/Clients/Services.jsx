import React, {Component} from 'react';
import './styles/Services.scss';
import restaurant from './images/services/restaurant.png';
import wifi from './images/services/wifi.png';
import chambres from './images/services/chambres.png';

class Services extends Component {
  render() {
    return (<div className='Services' id='service'>
      <h1>SERVICES</h1>
      <div className="listServices">
        <div>
          <img src={chambres} alt='chambres'/>
          <h1 style={{fontWeight: 'bold', fontSize:20, marginBottom: 10}}>CHAMBRES</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
        </div>
        <div>
          <img src={restaurant} alt='restaurant'/>
          <h1 style={{fontWeight: 'bold', fontSize:20, marginBottom: 10}}>RESTAURANT</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
        </div>
        <div>
          <img src={wifi} alt='wifi'/>
          <h1 style={{fontWeight: 'bold', fontSize:20, marginBottom: 10}}>WIFI</h1>
					<p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>);
  }
}

export default Services;
