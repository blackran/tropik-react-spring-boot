import React, {Component} from 'react';
import './styles/Chambres.scss';
import ChambreCard from './ChambreCard';
import {Paper} from '@material-ui/core';
import {connect} from 'react-redux';
import axios from 'axios';

class Chambres extends Component {
  componentDidMount() {
		if (this.props.types.dataTypes.length===0) {
			axios.get("http://localhost/myprojects/tropik/backend/Type/get").then(res => res.data).then(state => this.props.fetchtypes(state)).catch(err => console.log("error parsing:\n", err));
		}
	}
  render() {
    return (<div className='Chambres' id='chambres'>
      <h1 className='textAligne'>LES CHAMBRES DISPONIBLES</h1>
      <div className='list'>
        {
          this.props.types.dataTypes.length!==0? this.props.types.dataTypes.map((e)=>{
            return (
              <Paper key={e.NomType}>
                <ChambreCard url={e.ImagesType} nomCategorie={e.NomType} numCategorie={e.NumType}/>
      				</Paper>
            )
          }): <p>desole, il n'y a pas de chambres disponibles</p>
        }
      </div>
    </div>);
  }
}

const mapStateToProps = state => {
	return {types: state.types}
}

const mapDispatchToProps = dispatch => {
	return {
    updateOne: (data) => {
      dispatch({type: "UPDATE_ONE", data});
    },
		updateEroor: (data) => {
			dispatch({type: "UPDATE_EROOR", data: data});
		},
		fetchtypes: (data) => {
			dispatch({type: "FETCH_TYPES", data: data});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Chambres);
