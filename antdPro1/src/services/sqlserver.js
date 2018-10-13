import { evil } from '../utils/utils';

function loginDatabase(params) {
	return new Promise(resolve => {
		// setTimeout() 模拟异步请求，成功后执行 resolve() 方法
		setTimeout(() => {
			const param = JSON.stringify(params);
			const dataJson = window.dboperator.logondb(param);
			const data = evil(`(${dataJson})`);
			// console.dir(data);
			resolve(data);
		}, 800);
	});
}

function openDatabase(params) {
	return new Promise(resolve => {
		// setTimeout() 模拟异步请求，成功后执行 resolve() 方法
		setTimeout(() => {
			const param = JSON.stringify(params);
			const dataJson = window.dboperator.opendb(param);
			const data = evil(`(${dataJson})`);
			// console.dir(data);
			resolve(data);
		}, 800);
	});
}

export async function queryDatabaseList(params) {
	if (process.env.NODE_ENV === 'development') {
		let result = {};
		await new Promise(resolve => {
			setTimeout(() => {
				resolve({
					message: '',
					error: 0,
					data: [
						{
							name: 'Secretary20160430',
							dataBaseType: 'SqlServer',
							conn:
								'server=47.92.75.204,4243;uid=wd;pwd=w2015d0711$;database=Secretary20160430;Connect Timeout=3000',
							tag: '9088f8b27ddb23a1a48552e206be736f',
						},
					],
				});
			}, 800);
		}).then(data => {
			result = data;
		});

		return result;
	} else {
		// var param = JSON.stringify(params);
		// // console.dir(param);
		// var dataJson = window.dboperator.logondb(param);
		// var data = eval("(" + dataJson + ")");
		// console.dir(dataJson);
		// return data;
		let result = {};
		await loginDatabase(params).then(data => {
			result = data;
		});
		// console.dir(result);
		return result;
	}
}

export async function queryDataEntityList(params) {
	if (process.env.NODE_ENV === 'development') {
		return {
			message: '',
			error: 0,
			data: {
				dataTable: {
					list: [
						{
							name: 'g.ActivityDraw',
							schema: 'g',
							dataEntityType: 0,
							rowNumber: 1,
						},
						{
							name: 'g.AliSMS',
							schema: 'g',
							dataEntityType: 0,
							rowNumber: 2,
						},
						{
							name: 'g.AppPlatforms',
							schema: 'g',
							dataEntityType: 0,
							rowNumber: 3,
						},
						{
							name: 'g.Apps',
							schema: 'g',
							dataEntityType: 0,
							rowNumber: 4,
						},
						{
							name: 'g.Areas',
							schema: 'g',
							dataEntityType: 0,
							rowNumber: 5,
						},
						{
							name: 'g.AreasTemp',
							schema: 'g',
							dataEntityType: 0,
							rowNumber: 6,
						},
						{
							name: 'g.Article',
							schema: 'g',
							dataEntityType: 0,
							rowNumber: 7,
						},
						{
							name: 'g.ArticleTag',
							schema: 'g',
							dataEntityType: 0,
							rowNumber: 8,
						},
						{
							name: 'g.ArticleTagRelation',
							schema: 'g',
							dataEntityType: 0,
							rowNumber: 9,
						},
						{
							name: 'g.Bank',
							schema: 'g',
							dataEntityType: 0,
							rowNumber: 10,
						},
					],
					pageNo: 1,
					pageSize: 10,
					total: 525,
				},
				dataView: {
					list: [
						{
							name: 'V_rand',
							schema: 'dbo',
							dataEntityType: 1,
						},
						{
							name: 'v_ShopTag',
							schema: 'dbo',
							dataEntityType: 1,
						},
					],
				},
			},
		};
	} else {
		// var param = JSON.stringify(params);
		// console.dir(param);
		// var dataJson = window.dboperator.opendb(param);
		// var data = eval("(" + dataJson + ")");
		// console.dir(dataJson);

		// return data;
		let result = {};
		await openDatabase(params).then(data => {
			result = data;
		});
		// console.dir(result);
		return result;
	}
}
