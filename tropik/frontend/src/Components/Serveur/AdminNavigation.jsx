import './styles/AdminNavigation.scss';

import {Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {PowerSettingsNew, PriorityHighOutlined} from '@material-ui/icons';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AdminNavigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleClickOpen() {
    this.setState({
      open: true
    })
  }

  handleClose() {
    this.setState({
      open: false
    })
  }

  handleAffirmeClose() {
    this.setState({
      open: false
    })
    this.props.history.push("/")
  }

  render() {
    return (
      <Paper className='AdminNavigation'>
        <h1 style={{fontSize: 25}}>GESTION D'HOTEL</h1>

        <ul>
          <Link to='/GChambres'><li>CHAMBRES</li></Link>
          <Link to='/GReservation'><li>RESERVATIONS</li></Link>
          <Link to='/GClients'><li>CLIENTS</li></Link>
          <Link to='/GResponsables'><li>RESPONSABLES</li></Link>
          <Link to='/GReglements'><li>REGLEMENTS</li></Link>
        </ul>

        <span>
          <p  variant="contained" onClick={this.handleClickOpen.bind(this)} className='logout'>
          <PowerSettingsNew/>{"  "}
          <span style={{position: 'relative', top: '-5px'}}>Logout</span>
          </p>
          <Dialog
            open={this.state.open}
            keepMounted
            onClose={this.handleClose.bind(this)}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            style={{minWidth: 80}}
          >
            <DialogTitle id="alert-dialog-slide-title"><span style={{ padding: '15px 9px 5px', border: '2px solid #202020', borderRadius: '100%'}}><PriorityHighOutlined/></span> <span style={{position: 'relative',bottom: 3, fontWeight: 'bold', fontSize: 22}}>{"Affirmation"}</span></DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Vous voulez quitter?<br/>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleAffirmeClose.bind(this)} color="primary">
                Quitter
              </Button>
              <Button onClick={this.handleClose.bind(this)} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </span>
      </Paper>
    );
  }
}

export default AdminNavigation;
