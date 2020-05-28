import axios from 'axios';
import {ADD_CHAMBRES, DELETE_CHAMBRES, UPDATE_CHAMBRES, FETCH_CHAMBRES, UPDATE_ONE, ON_CHANGE_CHAMBRES, ON_CHANGE_SLIDER, NEW_DATA_CHAMBRES} from '../actions/typesChambres';

const initState = {
	dataChambres: [
		// {
		// 	NomChambre:"Acacias",
		// 	TelChambre:"0340022211",
		// 	EtageChambre: "2",
		// 	ChauffeauChambre: "ELECTRIQUE",
		// 	PrixChambre: 30000,
		// 	NumCategorie: 1,
		// 	NumType: 1
		// },
		// {
		// 	NomChambre:"Arum",
		// 	TelChambre:"0349354341",
		// 	EtageChambre: "2",
		// 	ChauffeauChambre: "GAZ",
		// 	PrixChambre: 20000,
		// 	NumCategorie: 1,
		// 	NumType: 1
		// }
	],
	mocksChambres: '',
	one: true,
	submitReusit: true,
	changes : {
		NomChambre: "",
		TelChambre: "",
		EtageChambre: "",
		ChauffeauChambre: "",
		PrixChambre: "",
		NumCategorie: "",
		NumType: ""
	},
	slide: 0,
	dateNow: '',
	newDataChambres: []
}

const ChambresReducers = (state = initState, action) => {
	switch (action.type) {
		case ADD_CHAMBRES:

			axios.post("http://localhost/myprojects/tropik/backend/Chambres/post", action.data,{
					headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(h => console.log(h)).catch(err => console.log("error parsing:\n", err));
			state.dataChambres = [
				...state.dataChambres, ...action.data
			];
			return Object.assign({}, state, state.dataChambres);

		case DELETE_CHAMBRES:
			const st = state.dataChambres.filter(e => {
				return e.NomChambre !== action.id;
			});
			state.dataChambres = [...st];
			axios.delete("http://localhost/myprojects/tropik/backend/Chambres/delete/" + action.id,{
					headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then((e) => console.log(e)).catch(err => console.log("error parsing:\n", err));
			return Object.assign({}, state, state.dataChambres);

		case UPDATE_CHAMBRES:
			const std1 = state.dataChambres.filter(e => {
				return e.NomChambre !== action.data.NomChambre;
			});
			const sto1 = action.data;
			state.dataChambres = [
				...std1,
				sto1
			];
			axios.put("http://localhost/myprojects/tropik/backend/Chambres/put/" + action.id, [sto1]).then((e) => console.log(e)).catch(err => console.log("error parsing:\n", err));

			return Object.assign({}, state, state.dataChambres);

		case FETCH_CHAMBRES:
			state.dataChambres = [];
			state.newDataChambres = [];
		  state.dataChambres = [
		    ...action.data
		  ];

			state.dataChambres.map((e)=>{
				if(e.PrixChambre >= state.slide){
					state.slide = e.PrixChambre;
				}
				return null;
			})
			const date = new Date();
			const years = date.getFullYear();
			const mounth = ((parseInt(date.getMonth())<10)?'0':'') + date.getMonth();
			const days = ((parseInt(date.getDate())<10)?'0':'')+date.getDate();
			state.dateNow= years +"-"+mounth+"-"+days
		  return Object.assign({}, state, state.dataChambres);

		case UPDATE_ONE:
			state.one = action.data;
			return Object.assign({}, state, state.one);

		case ON_CHANGE_CHAMBRES:
			state.changes[action.data.name] = action.data.value;
			return Object.assign({}, state, state.changes);

		case ON_CHANGE_SLIDER:
			state.slide = action.data;
			return Object.assign({}, state, state.slide);

		case NEW_DATA_CHAMBRES:
			state.newDataChambres = []
			state.newDataChambres = action.data;
			return Object.assign({}, state, state.newdataChambres);

		default:
			return state;
	}
}

export default ChambresReducers;
