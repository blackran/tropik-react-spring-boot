// eslint-disable-next-line no-unused-vars
import React from 'react';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import error404 from './Components/error/error404';
import Login from './Components/Serveur/Login';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Accueil from './Components/Clients/Accueil';
import ChambresDetails from './Components/Clients/ChambresDetails';

import GChambres from './Components/Serveur/GChambres';
import GReservation from './Components/Serveur/GReservation';
import GClients from './Components/Serveur/GClients';
import GResponsables from './Components/Serveur/GResponsables';
import GReglements from './Components/Serveur/GReglements';
import Facture from './Components/Serveur/Facture';

const theme = createMuiTheme({
  palette:{
    primary: blue
  }
});

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Accueil}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/GChambres" component={GChambres}/>
            <Route exact path="/GReservation" component={GReservation}/>
            <Route exact path="/GClients" component={GClients}/>
            <Route exact path="/GResponsables" component={GResponsables}/>
            <Route path="/Chambre/:types/:nom" component={ChambresDetails}/>
            <Route exact path="/GReglements" component={GReglements}/>
            <Route path="/Facture/:id/:client"
              component = {
                Facture
              }
            />
            <Route component={error404} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
