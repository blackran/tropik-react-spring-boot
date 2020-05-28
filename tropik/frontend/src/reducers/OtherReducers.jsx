import {UPDATE_OPACITY1, UPDATE_OPACITY2} from '../actions/typesOther';

const initState = {
	opacity1: 0,
	opacity2: 0
}

const OtherReducers = (state = initState, action) => {
	switch (action.type) {
		case UPDATE_OPACITY1:
			state.opacity1 = action.data;
			return Object.assign({}, state, state.opacity1);

		case UPDATE_OPACITY2:
			state.opacity2 = action.data;
			return Object.assign({}, state, state.opacity2);

		default:
			return state;
	}
}

export default OtherReducers;
