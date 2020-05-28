import axios from 'axios';
import {
	ADD_REGLEMENTS,
	FETCH_REGLEMENTS,
	UPDATE_REGLEMENTS
} from '../actions/typesReglement';

const initState = {
	dataReglements: [
		// {
		// 	NumReglement:1,
		// 	MontantReglement: 30000,
		// 	EtatReglement: "1",
		// 	AnneeReglement: "2019"
		// }
	]
}

const ReglementsReducers = (state = initState, action) => {
	switch (action.type) {
		case ADD_REGLEMENTS:
			const std = [{
				...action.data
			}]
			console.log(std);

			axios.post(
				"http://localhost/myprojects/tropik/backend/Reglements/post",
				std, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			).then(h =>
				console.log(h)
			).catch(err => console.log("error parsing:\n", err));
			state.dataReglements = [
				...state.dataReglements, std[0]
			];
			return Object.assign({}, state, state.dataReglements);
		case FETCH_REGLEMENTS:
			state.dataReglements = [];
			state.dataReglements = [
				...action.data
			];
			return Object.assign({}, state, state.dataReglements);

		case UPDATE_REGLEMENTS:
			// console.log(action.data)
			if (action.data !== null) {
				const std1 = state.dataReglements.filter(e => {
					return e.NumReglement !== action.data[0].NumReglement;
				});
				const sto1 = action.data;
				state.dataReglements = [
					...std1,
					...sto1
				];

				axios.post("http://localhost/myprojects/tropik/backend/Reglements/put/" + action.data[0].NumReglement,
					sto1, {
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					}).then((e) => {
						console.log(e.status)
						// if(e.status===200){
						// 	state.dataReglements = [
						// 		...std1,
						// 		...sto1
						// 	];
						// }
						return null
					}

				).catch(err => console.log("error parsing:\n", err));
			}


			return Object.assign({}, state, state.dataReglements);

		default:
			return state;
	}
}

export default ReglementsReducers;