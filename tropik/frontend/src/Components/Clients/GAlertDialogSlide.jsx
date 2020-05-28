import React ,{Component} from 'react';
import {
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core';
import {Add} from '@material-ui/icons/';
import {connect} from 'react-redux';
import shortid from 'shortid';
import AlertDialogSlideR from './AlertConfirmationReservation';

class GAlertDialogSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      NumClient: '',
      ConditionReservation: '',
      error: false
    }
    this.date1 = this.props.date1;
    this.date2 = this.props.date2;
  
  // var NomChambre = props.NomChambre;
  }
  
  OnChange(e) {
    this.setState({
      NumClient: e.target.value
    });
    // console.log(props.clients)
    const stock = this.props.clients.dataClients.filter(function(h){
      // console.log(h)
      return h.NumClient === e.target.value;
    });
    if(stock.length!==0){
      this.setState({
        error: false
      })
      this.props.updateNameClient(stock[0].NomClient);
    }else{
      this.props.updateNameClient("");
      this.setState({
        error: true
      });
    }
  }

  handleClickOpen() {
    this.setState({
      open: true,
      ConditionReservation: ''
    });
    this.props.updateNameClient("");
  }

  handleClose() {
    this.setState({
      open: false,
      ConditionReservation: ''
    });
    this.date2 = "";
    this.date1 = "";
    this.props.updateNameClient("");
  }

  dataReserver() {
    const StockNumReglement = shortid.generate();
    // const prix = props.chambres.dataChambres.filter(e=>{
    //   return e.NomChambre === NomChambre;
    // })[0].PrixChambre;
    const st = {
  			NumReglement: StockNumReglement,
  			// MontantReglement: parseInt(prix) * (Math.round((date2 - date1) / (1000 * 3600 * 24))),
  			MontantReglement: 0,
  			EtatReglement: "0",
  			AnneeReglement: new Date().getFullYear().toString()
    }
    const stock = {
      NumReservation: shortid.generate(),
      DateDebutReservation: this.formattedDateDatabase(this.props.date1),
      DateFinReservation: this.formattedDateDatabase(this.props.date2),
      NbJourReservation: Math.round((this.props.date2 - this.props.date1) / (1000 * 3600 * 24)),
      ConditionReservation: this.state.ConditionReservation,
      NumClient: this.state.numClient,
      NumReglement: StockNumReglement
    }
    return ([st, stock]);
  }


  formattedDate(d) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return `${day}/${month}/${year}`;
  }

  formattedDateDatabase(d) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return `${year}-${month}-${day}`;
  }
  OnChangeConditionReservation(e) {
    this.setState({
      ConditionReservation: e.target.value
    })
  }

  OnClickAddClient(e){
    var stock = this.props.clients.dataClients.filter(e=>{
      return e.NomClient === this.props.clients.changes.NomClient;
    }).length === 0;
    if(stock){
      this.props.addClients();
      var client = this.props.clients.dataClients.filter(e=>{
        return e.NomClient === this.props.clients.changes.NomClient;
      })[0].NumClient;
      this.setState({
        NumClient: client
      })
    }else{
      alert("name already exist")
    }
  }

  OnChangeNameClients(e){
    this.props.onChangeClient(e.target);
  }
  render() {
    // const Props = this.props;
    // const Transition = React.forwardRef(function Transition(Props,ref) {
    //   return <Slide direction="up" ref={ref} {...Props}/>;
    // });
    return (<span>
      <Fab color='primary' variant="extended" size='small' aria-label="delete" className='addReservation' onClick={this.handleClickOpen.bind(this)}>
        <Add/>
        reserver
      </Fab>{" "}
      <Dialog open={this.state.open} keepMounted={true} onClose={this.handleClose.bind(this)} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="alert-dialog-slide-title">{"Reservation chambres"}</DialogTitle>
        <DialogContent>
          <TextField label="NOM CHAMBRE" placeholder="Example" margin="normal" name="pseudo" value={this.props.NomChambre} style={{width: 140}}/>
          <br/>
          <TextField label="DATE DEBUT" placeholder="Example" margin="normal" name="pseudo" value={this.formattedDate(this.props.date1)} style={{width: 120}}/>{" "}
          <TextField label="DATE FIN" placeholder="Example" margin="normal" name="pseudo" value={this.formattedDate(this.props.date2)} style={{width: 120}}/>
          <TextField
            label="JOURS"
            placeholder="Example"
            margin="normal"
            name="pseudo"
            value={Math.round((this.props.date2 - this.props.date1) / (1000 * 3600 * 24))}
            style={{width: 50, marginLeft: 20}}
          /><br/>
  
          <TextField
            label="N°"
            placeholder="1"
            margin="normal"
            name="NumClient"
            style={{width: 100}}
            value={this.state.NumClient}
            onChange={this.OnChange.bind(this)}
            error={this.state.error}
          />{" "}
          <TextField label="Votre nom" placeholder="persone" margin="normal" name="NomClient" value={this.props.clients.changes.NomClient} onChange={this.OnChangeNameClients.bind(this)}/>{" "}
          <Button
            variant="outlined"
            style={{position: 'relative',top:30, padding:5, minWidth: 35}}
            onClick={this.OnClickAddClient}>
            <Add/>
          </Button>
          <br/>
  
          <TextField id="outlined-multiline-flexible" label="Remarque" multiline={true} rowsMax="4" margin="normal" helperText="votre petit remarque ici ..." variant="outlined" value={this.state.ConditionReservation} onChange={this.OnChangeConditionReservation.bind(this)}/>
          <br/>
  
        </DialogContent>
        <DialogActions>
          <AlertDialogSlideR 
            dataThis={this.handleClose.bind(this)} 
            NomChambre={this.props.NomChambre} 
            dataReserver={this.dataReserver()} 
          />
  
          <Button onClick={this.handleClose.bind(this)} color="primary" variant='outlined'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </span>);
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
      dispatch({type: "ADD_REGLEMENT", data});
    },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GAlertDialogSlide);
