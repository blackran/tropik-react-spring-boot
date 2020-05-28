import React, {Component} from 'react';
import './styles/GChambres.scss';
import {Fab, Paper} from '@material-ui/core';
import {Create, Check, Delete} from '@material-ui/icons';
import error from './images/404.jpg';
import {connect} from 'react-redux';

class AnnexGChambres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NomChambre: '',
      TelChambre: '',
      EtageChambre: '',
      ChauffeauChambre: '',
      PrixChambre: '',
      NumCategorie: '',
      NumType: '',
      ImageChambre: '',
      error: false,
      hide: false,
      edit: false
    }
  }
  componentDidMount() {
    this.setState({
      NomChambre: this.props.data.NomChambre,
      TelChambre: this.props.data.TelChambre,
      EtageChambre: this.props.data.EtageChambre,
      ChauffeauChambre: this.props.data.ChauffeauChambre,
      PrixChambre: this.props.data.PrixChambre,
      NumCategorie: this.props.data.NumCategorie,
      NumType: this.props.data.NumType,
      ImageChambre: this.props.data.ImageChambre
    })
  }
  OnClickDeleteChambre(id, e) {
    e.preventDefault();
    // eslint-disable-next-line
    if (confirm('Voulez-vous suprimer ?')) {
      this.props.deleteChambres(id);
    }
  }
  OnChangeLoginInputImage = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      // const formData = {file: e.target.result
      this.setState({ImageChambre: e.target.result})
    }
  }
  update(e) {
    var data = {
      NomChambre: this.state.NomChambre,
      TelChambre: this.state.TelChambre,
      EtageChambre: this.state.EtageChambre,
      ChauffeauChambre: this.state.ChauffeauChambre,
      PrixChambre: this.state.PrixChambre,
      NumCategorie: this.state.NumCategorie,
      NumType: this.state.NumType,
      ImageChambre: this.state.ImageChambre
    }
    this.props.upadateChambres(data);
    this.setState({
      edit: !this.state.edit
    })
  }
  onChangeInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (<Paper style={{
        padding: '3px 3px 10px 3px',
        margin: '5px',
        width: 206
      }}>
      <div className='cardChambre animat'>

        {
          !this.state.edit
            ? <div>
                <div style={{width: 200, height: 133, overflow: 'hidden'}}>
                <img src={this.state.ImageChambre !== ''
                    ? this.state.ImageChambre
                    : error} alt={'url'} width='200'/>
                </div>
                <div style={{
                    marginLeft: 10
                  }}>
                  <h1 style={{
                      textAlign: 'center',
                      marginLeft: -10
                    }}>{this.state.NomChambre}</h1>
                  Prix:<span>{this.state.PrixChambre}Ar</span>{" "}
                  Tel:<span>{this.props.data.TelChambre}</span>{" "}
                  Etage:<span>{this.props.data.EtageChambre}</span>{" "}
                  Chauffeau:<span>{this.props.data.ChauffeauChambre}</span>{" "}
                  Categorie:<span>{this.props.data.NumCategorie}</span>{" "}
                  Type:<span>{this.props.data.NumType}</span><br/>
                  <div style={{
                      marginTop: 5
                    }}>
                    {
                      this.state.edit
                        ? <Fab size='small' onClick={() => this.setState({
                              edit: !this.state.edit
                            })}><Check/></Fab>
                        : <Fab size='small' onClick={() => this.setState({
                              edit: !this.state.edit
                            })}><Create/></Fab>

                    }{" "}
                    <Fab size='small' color="secondary" onClick={this.OnClickDeleteChambre.bind(this, this.state.NomChambre)} style={{
                        marginLeft: 10
                      }}><Delete/></Fab>
                  </div>
                </div>
              </div>
            : <div>
              <div style={{width: 200, height: 109, overflow: 'hidden'}}>
              <img src={this.state.ImageChambre !== ''
                  ? this.state.ImageChambre
                  : error} alt={'url'} width='200'/>
              </div>
                <input type="file" onChange={this.OnChangeLoginInputImage.bind(this)} name="ImageChambre" style={{width: 87}}/><br/>
                <div style={{
                    marginLeft: 10
                  }}>
                  <input value={this.state.NomChambre} style={{
                      textAlign: 'center',
                      marginLeft: -10,
                      fontWeight: 'bold',
                      fontSize: 18
                    }} onChange={this.onChangeInput.bind(this)} name="NomChambre"/>
                  Prix:<span><input value={this.state.PrixChambre} style={{ width: 50 }} onChange={this.onChangeInput.bind(this)} name="PrixChambre"/></span>{" "}

                  Tel:<span><input value={this.state.TelChambre} style={{ width: 70 }} onChange={this.onChangeInput.bind(this)} name="TelChambre" /></span>{" "}

                  Etage:<span><input value={this.state.EtageChambre} style={{ width: 15 }} onChange={this.onChangeInput.bind(this)} name="EtageChambre"/></span>{" "}<br/>

                  Chauffeau:<span><input value={this.state.ChauffeauChambre} style={{
                  width: 93
                }} onChange={this.onChangeInput.bind(this)} name="ChauffeauChambre"/></span>{" "}
                  Categorie:<span><input value={this.state.NumCategorie} style={{
                  width: 15
                }} onChange={this.onChangeInput.bind(this)} name="CategorieChambre"/></span>{" "}
                  Type:<span><input value={this.props.data.NumType} style={{
                  width: 15
                }} onChange={this.onChangeInput.bind(this)} name="TypeChambre"/></span><br/>
                  <div style={{
                      marginTop: 5
                    }}>
                    {
                      this.state.edit
                        ? <span><Fab size='small' onClick={this.update.bind(this)}><Check/></Fab>{" "}
                        <Fab size='small' color="secondary"
                          onClick={() => this.setState({
                              edit: !this.state.edit
                            })}
                          style={{
                            marginLeft: 10
                          }}>X</Fab></span>
                        : <span><Fab size='small' onClick={() => this.setState({
                              edit: !this.state.edit
                            })}><Create/></Fab>{" "}
                            <Fab size='small' color="secondary" onClick={this.OnClickDeleteChambre.bind(this, this.state.NomChambre)} style={{
                                marginLeft: 10
                              }}><Delete/></Fab></span>

                    }
                  </div>
                </div>
              </div>
        }
      </div>
    </Paper>);
  }
}
const mapStateToProps = state => {
  return {responsables: state.responsables}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteChambres: (id) => {
      dispatch({type: "DELETE_CHAMBRES", id});
    },
    upadateChambres: (data) => {
      dispatch({type: "UPDATE_CHAMBRES", data: data});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnexGChambres);
