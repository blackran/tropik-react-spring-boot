import React, {Component} from 'react';
import './styles/Contacts.scss';
import localisation from './images/contacts/localisation.png';
import mail from './images/contacts/mail.png';
import phone from './images/contacts/phone2.png';
import {ArrowLeft} from '@material-ui/icons';

class Mocks extends Component {
  render() {
    return (<div className='Mocks' id='contacts'>
      <div className='listContacts'>
        <div className='listContactsItems'>
          <img src={localisation} alt='localisation'/>
          <div>
            <ArrowLeft/>
            <span className='containtes'>
              <h1>Localisation</h1>
              <p>Ambalavao, a cote de soalandy</p>
            </span>
          </div>
        </div>
        <div className='listContactsItems'>
          <img src={mail} alt='mail'/>
          <div>
            <ArrowLeft/>
            <span className='containtes'>
              <h1>E-mail</h1>
              <p>tropik-hotel@gmail.com</p>
            </span>
          </div>
        </div>
        <div className='listContactsItems'>
          <img src={phone} alt='phone'/>
          <div>
            <ArrowLeft/>
            <span className='containtes'>
              <h1>Contacts</h1>
              <p>0343949863</p>
            </span>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Mocks;
