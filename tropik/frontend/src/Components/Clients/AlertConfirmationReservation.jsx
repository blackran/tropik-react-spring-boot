import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux';


class AlertDialogSlideR extends React.Component {
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
  
  handleCloseReserver() {
    this.props.addReglement(this.props.dataReserver[0]);
    this.props.addReservation(this.props.dataReserver[1]);
    const stock = [
      {
        'NumReservation': this.props.dataReserver[1].NumReservation,
        'NomChambre': this.props.NomChambre
      }
    ]
    this.props.addConcerner(stock)
    this.handleClose();
    
  }
  render(){
    return(<span>
      <Button variant="contained" onClick={this.handleClickOpen.bind(this)} color="primary">
        Reserver
      </Button>
      <Dialog
        open={this.state.open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose.bind(this)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{minWidth: 80}}
      >
        <DialogTitle id="alert-dialog-slide-title">{"Affirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Acceptez vous cette reservation?<br/>
            Nom du chambre: {this.props.NomChambre}<br/>
            Date debut: {this.props.dataReserver[1].DateDebutReservation}<br/>
            Date fin: {this.props.dataReserver[1].DateDebutReservation}<br/>
            {this.props.dataReserver[1].ConditionReservation!==''?'Condition: ':null} {this.props.dataReserver[1].ConditionReservation}
            {/* Total: {this.props.dataReserver[0].MontantReglement} Ar */}

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <span onClick={this.props.dataThis.bind(this)}>
            <Button onClick={this.handleCloseReserver.bind(this)} color="primary">
              Valider
            </Button>
          </span>
          <Button onClick={this.handleClose.bind(this)} color="primary">
            Refuser
          </Button>
        </DialogActions>
      </Dialog>
    </span>)
    }
  }


  const mapStateToProps = state => {
  	return {clients: state.clients, chambres: state.chambres}
  }

  const mapDispatchToProps = dispatch => {
  	return {
      addClients: () => {
        dispatch({type: "ADD_CLIENTS"});
      },
      onChangeClient: (data) => {
        dispatch({type: "ON_CHANGE_CLIENT", data});
      },
      updateNameClient: (data) => {
        dispatch({type: "UPDATE_NAME_CLIENT", data});
      },
      addReservation: (data) => {
        dispatch({type: "ADD_RESERVER", data});
      },
      addReglement: (data) => {
        dispatch({type: "ADD_REGLEMENTS", data});
      },
      addConcerner: (data) => {
        dispatch({type: "ADD_CONCERNER", data});
      },
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialogSlideR);
