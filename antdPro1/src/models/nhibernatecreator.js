import { queryCreateCode, queryOpenfolder } from '../services/nhibernatecreator';

export default {
	namespace: 'nhibernatecreator',

	state: {},

	effects: {
		*createcode({ payload }, { call, put }) {
			const response = yield call(queryCreateCode, payload);
			yield put({
				type: 'handlecreatecode',
				payload: response,
			});
		},
		*openfolder({ payload }, { call, put }) {
			const response = yield call(queryOpenfolder, payload);
			yield put({
				type: 'handleopenfolder',
				payload: response,
			});
		},
	},

	reducers: {
		handlecreatecode(state, action) {
			let d = action.payload;
			if (d === undefined) {
				d = {};
			}

			return {
				...state,
				data: d,
			};
		},
		handleopenfolder(state, action) {
			let d = action.payload;
			if (d === undefined) {
				d = {};
			}

			return {
				...state,
				data: d,
			};
		},
	},
};
