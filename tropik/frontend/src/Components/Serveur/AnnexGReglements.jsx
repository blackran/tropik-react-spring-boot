import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Button, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';

class AnnexGReglements extends Component {
  constructor(props){
    super(props);
    this.state={
      argentAjouter: ''
    }
  }

  UpdateArgentRecu(e, reste){
    var stock = [];
    console.log('argentAjouter:'+parseInt(this.state.argentAjouter) +' reste:'+ parseInt(reste))
    if(parseInt(this.state.argentAjouter) < parseInt(reste)){
      stock = [
        {
          NumReglement:e.NumReglement,
          MontantReglement: parseInt(this.state.argentAjouter) + parseInt(e.MontantReglement),
          EtatReglement: e.EtatReglement,
          AnneeReglement: e.AnneeReglement
        }
      ]

    }else{
      stock = [
        {
          NumReglement:e.NumReglement,
          MontantReglement: parseInt(reste) + parseInt(e.MontantReglement),
          EtatReglement: '1',
          AnneeReglement: e.AnneeReglement
        }
      ]
      if((parseInt(this.state.argentAjouter) - parseInt(reste))>0){
        alert('donner '+(parseInt(this.state.argentAjouter) - parseInt(reste))+'Ar au clients')
      }
    }
    this.props.updateReglements(stock);
    this.setState({
      argentAjouter: ''
    })
  }

  OnChangeUpdateArgentRecu(reste, e){
    // if((parseInt(reste)-parseInt(e.target.value))>=0){
      this.setState({
        argentAjouter: e.target.value
      })
    // }
  }

  MontantReservationReglement(NumReglement){
    var MontantReglement = 0;
    const stock = this.props.reserver.dataReserver.filter(e=>{
      return e.NumReglement === NumReglement;
    });
    if(stock !== null && stock.length !== 0){
      const NameChambres = this.props.concerner.dataConcerner.filter(e=>{
        return e.NumReservation === stock[0].NumReservation
      });

      if(NameChambres !== null && NameChambres.length !== 0){
        var prix = this.props.chambres.dataChambres.filter(e=>{
          return e.NomChambre === NameChambres[0].NomChambre;
        });
        if(prix!==null && prix.length !== 0){
          const date2 = new Date(stock[0].DateFinReservation);
          const date1 = new Date(stock[0].DateDebutReservation);
          MontantReglement = parseInt(prix[0].PrixChambre) * (Math.round((date2 - date1) / (1000 * 3600 * 24)))
        }
        //
      }
    }
    return MontantReglement;
  }
  reservationReglement(NumReglement){
    const stock = this.props.reserver.dataReserver.filter(e=>{
      return e.NumReglement === NumReglement;
    });

    return stock;
  }
  componentDidMount() {
    if (this.props.reserver.dataReserver.length === 0) {
      axios.get("http://localhost:80/myprojects/tropik/backend/Reservation/get").then(res => res.data).then(state => this.props.fetchReserver(state)).catch(err => console.log("error parsing:\n", err));
    }
    if (this.props.concerner.dataConcerner.length === 0) {
      axios.get("http://localhost:80/myprojects/tropik/backend/Concerner/get").then(res => res.data).then(state => this.props.fetchConcerner(state)).catch(err => console.log("error parsing:\n", err));
    }
    if (this.props.chambres.dataChambres.length === 0) {
      axios.get("http://localhost:80/myprojects/tropik/backend/Chambres/get").then(res => res.data).then(state => this.props.fetchchambres(state)).catch(err => console.log("error parsing:\n", err));
    }
  }
  render() {
    const reste = this.MontantReservationReglement(this.props.data.NumReglement) - this.props.data.MontantReglement
    return (
      <div style={{margin: 10, display: 'flex', justifyContent: 'space-between'}}>
        <div>
        Num: {this.props.data.NumReglement}<br/>
        Montant Recu: {this.props.data.MontantReglement}<br/>
        Montant Rest: {reste}<br/>
        Etat: {this.props.data.EtatReglement}<br/>
        Annee: {this.props.data.AnneeReglement}
        {
          this.reservationReglement(this.props.data.NumReglement).map(e=>{
            return <div key={e.NumReservation}>
              Reservation: {e.NumReservation}<br/>
              Client: {e.NumClient}
            </div>;
          })
        }
        </div>
        <div>
          {
            reste!==0?
            <div style={{marginRight: 20}} >
              <TextField type='number' onChange={this.OnChangeUpdateArgentRecu.bind(this, reste)} variant="outlined" value={this.state.argentAjouter} /><br/>
              <Button
                size='small'
                variant="contained"
                style={{marginTop:5, float: 'right'}}
                onClick={()=>this.UpdateArgentRecu(this.props.data, reste)}>
                ajouter
              </Button>
          </div>:<div style={{marginRight: 20}} >
            <Link to = {
              'Facture/' + this.props.data.NumReglement +'/'+this.MontantReservationReglement(this.props.data.NumReglement)+'/'+this.props.data.AnneeReglement
            }>
              <Button
                  size='small'
                  variant="contained"
                  style={{marginTop:5, float: 'right'}}>
                  Facturer
              </Button>
            </Link>
          </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {reserver: state.reserver, chambres: state.chambres, concerner: state.concerner}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchchambres: (data) => {
      dispatch({type: "FETCH_CHAMBRES", data: data});
    },
    fetchReglements: (data) => {
      dispatch({type: "FETCH_REGLEMENTS", data: data});
    },
    fetchReserver: (data) => {
      dispatch({type: "FETCH_RESERVER", data: data});
    },
    fetchConcerner: (data) => {
      dispatch({type: "FETCH_CONCERNER", data: data});
    },
    updateReglements: (data) => {
      dispatch({type: "UPDATE_REGLEMENTS", data: data});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnexGReglements);
