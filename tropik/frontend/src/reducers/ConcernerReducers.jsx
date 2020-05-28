import {FETCH_CONCERNER, ADD_CONCERNER} from '../actions/typesConcerner';
import axios from 'axios';

const initState = {
	dataConcerner: [
    // {
    //   NumReservation: 0,
    //   NomChambre: 'Acacias'
    // },
    // {
    //   NumReservation: 1,
    //   NomChambre: 'Acacias'
    // },
    // {
    //   NumReservation: 0,
    //   NomChambre: 'Azalée'
    // },
    // {
    //   NumReservation: 3,
    //   NomChambre: 'Tulipe'
    // },
	]
}

const ReserverReducers = (state = initState, action) => {
	switch (action.type) {
		case FETCH_CONCERNER:
			state.dataConcerner = [];
		  state.dataConcerner = [
		    ...action.data
		  ];
		  return Object.assign({}, state, state.dataConcerner);

		case ADD_CONCERNER:
			axios.post(
				"http://localhost/myprojects/tropik/backend/Concerner/post",
				action.data,
				{
						headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/x-www-form-urlencoded'
						}
					}
			).then(h => console.log(h)).catch(err => console.log("error parsing:\n", err));
			state.dataConcerner = [
				...state.dataConcerner, action.data
			];
			return Object.assign({}, state, state.Clients);

		default:
			return state;
	}
}

export default ReserverReducers;
