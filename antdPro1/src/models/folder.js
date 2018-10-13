import { queryOpenCodeFolder } from '../services/folder';

export default {
	namespace: 'folder',

	state: {},

	effects: {
		*opencodefolder({ payload }, { call, put }) {
			const response = yield call(queryOpenCodeFolder, payload);
			yield put({
				type: 'handleOpenCodeFolder',
				payload: response,
			});
		},
	},

	reducers: {
		handleOpenCodeFolder(state, action) {
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
