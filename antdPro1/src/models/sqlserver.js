// import { message } from 'antd';
import { queryDatabaseList, queryDataEntityList } from '../services/sqlserver';

export default {
	namespace: 'sqlserver',

	state: {
		statisticExist: [],
	},

	effects: {
		*open({ payload }, { call, put }) {
			const response = yield call(queryDatabaseList, payload);
			yield put({
				type: 'handleopen',
				payload: response,
			});
		},
		*getlist({ payload }, { call, put }) {
			const response = yield call(queryDataEntityList, payload);
			yield put({
				type: 'handlelist',
				payload: response,
			});
		},
	},

	reducers: {
		handleopen(state, action) {
			let d = action.payload;
			if (d === undefined) {
				d = {};
			}

			return {
				...state,
				data: d,
			};
		},
		handlelist(state, action) {
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
