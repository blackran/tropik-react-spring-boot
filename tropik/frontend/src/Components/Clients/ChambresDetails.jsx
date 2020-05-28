import './styles/Chambres.scss';
import 'date-fns';

import money from './images/money.png';
import DateFnsUtils from '@date-io/date-fns';
import {Fab, Grid, Paper} from '@material-ui/core';
import {KeyboardArrowLeft, Lock, PanoramaFishEyeOutlined} from '@material-ui/icons';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import axios from 'axios';
import React, {lazy, Component, Suspense} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const AnnexChambresDetails = lazy(() => import('./AnnexChambresDetails'));

class ChambresDetails extends Component {
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  OnChangeSlider = async e => {
    e.preventDefault();
    // await this.sleep(5000);
    this.props.updateSlide(e.target.value);
  }

  componentDidMount() {
    if (this.props.chambres.dataChambres.length === 0) {
      axios.get("http://localhost:80/myprojects/tropik/backend/Chambres/get").then(res => res.data).then(state => this.props.fetchchambres(state, this.props.match.params.types)).catch(err => console.log("error parsing:\n", err));
      this.props.updateOne(!this.props.chambres.one);
    }
    if (this.props.clients.dataClients.length === 0) {
      axios.get("http://localhost/myprojects/tropik/backend/Clients/get").then(res => res.data).then(state => this.props.fetchClients(state)).catch(err => console.log("error parsing:\n", err));
      this.props.updateOne(!this.props.clients.one);
    }
  }


  handleDateChange1 = (date) => {
    const dateNow = new Date();
    const dateNowf = new Date(this.props.reserver.date2);
    const newDate = date;
    const value1 = newDate - dateNow;
    const value2 = dateNowf - newDate
    if (value1 >= 0) {
      if (value2 >= 0) {
        this.props.updateDate1(date)
      } else {
        this.props.updateDate1(new Date(dateNowf.setDate(dateNowf.getDate() - 1)));
      }
    } else {
      this.props.updateDate1(dateNow);
    }
  }

  handleDateChange2 = (date) => {
    const dateNow = new Date(this.props.reserver.date1);
    const newDate = date;
    const value = newDate - dateNow;
    if (value >= 0) {
      this.props.updateDate2(date);
    } else {
      this.props.updateDate2(new Date(dateNow.setDate(dateNow.getDate() + 1)));
    }
  }

  render() {
    const {slide} = this.props.chambres;

    return (<div style={{
        padding: 10,
        backgroundColor: '#a3d393',
        minHeight: '100vh'
      }}>
      <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <div className='btnMarginRigth'>
          <Link to='/'>
            <Fab color='primary' variant="extended" size='small' aria-label="delete" className='addReservation'>
              <KeyboardArrowLeft/>
              Accueil
            </Fab>
          </Link>

        </div>
        <div className='btnMarginLeft'>
          <Link to='/Login'>
            <Fab color='default' variant="extended" size='small' aria-label="delete" className='addReservation'>
              <Lock/>
              Admin<span style={{
        width: 10
      }}></span>
            </Fab>
          </Link>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div style={{
          paddingLeft: 50,
          display: 'flex'
        }}>

        <Paper style={{
            padding: '30px 10px 10px 10px'
          }}>
          <div className="slidecontainer" style={{
              width: 300
            }}>
            <img src={money} alt='money icon' width='30' height='30'/>
            <span style={{
                position: 'relative',
                top: '-8px'
              }}>{slide} Ar</span><br/>
            <input type="range" min="0" max="100000" value={slide} step={100} className="slider" onChange={this.OnChangeSlider.bind(this)}/>
          </div>{" "}
        </Paper>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container={true} justify="space-around">
            <Paper style={{
                padding: 10
              }}>
              <KeyboardDatePicker margin="normal" id="date-picker-dialog" label="Date debut" format="dd/MM/yyyy" value={this.props.reserver.date1} onChange={this.handleDateChange1.bind(this)} KeyboardButtonProps={{
                  'aria-label' : 'change date'
                }}/>
            </Paper>
            <Paper style={{
                padding: 10
              }}>
              <KeyboardDatePicker margin="normal" id="date-picker-dialog" label="Date fin" format="dd/MM/yyyy" value={this.props.reserver.date2} onChange={this.handleDateChange2.bind(this)} KeyboardButtonProps={{
                  'aria-label' : 'change date'
                }}/>
            </Paper>
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
      <br/>
      <div>
        <Suspense fallback={<div style = {{position: 'relative', top: 100}} > <PanoramaFishEyeOutlined className="loading"/></div>}>
          <AnnexChambresDetails types={this.props.match.params.types}/>
        </Suspense>
      </div>
    </div>);
  }
}
const mapStateToProps = state => {
  return {chambres: state.chambres, reserver: state.reserver, concerner: state.concerner, clients: state.clients}
}

const mapDispatchToProps = dispatch => {
  return {
    updateOne: (data) => {
      dispatch({type: "UPDATE_ONE", data});
    },
    updateEroor: (data) => {
      dispatch({type: "UPDATE_EROOR", data: data});
    },
    fetchchambres: (data,types) => {
      dispatch({type: "FETCH_CHAMBRES", data: data, types: types});
    },
    updateSlide: (data) => {
      dispatch({type: "ON_CHANGE_SLIDER", data: data});
    },
    updateDate1: (data) => {
      dispatch({type: "UPDATE_DATE_1", data: data});
    },
    updateDate2: (data) => {
      dispatch({type: "UPDATE_DATE_2", data: data});
    },
    fetchClients: (data) => {
      dispatch({type: "FETCH_CLIENTS", data: data});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChambresDetails);
