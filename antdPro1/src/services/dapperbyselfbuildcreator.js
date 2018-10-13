import { evil } from '../utils/utils';

function createCode(params) {
	return new Promise(resolve => {
		// setTimeout() 模拟异步请求，成功后执行 resolve() 方法
		setTimeout(() => {
			const param = JSON.stringify(params);
			const dataJson = window.codecreator.create(param);
			const data = evil(`(${dataJson})`);
			resolve(data);
		}, 800);
	});
}

function openFolder() {
	return new Promise(resolve => {
		// setTimeout() 模拟异步请求，成功后执行 resolve() 方法
		setTimeout(() => {
			window.folderopener.open();
			resolve({
				message: '',
				error: 0,
				data: null,
			});
		}, 800);
	});
}

export async function queryCreateCode(params) {
	if (process.env.NODE_ENV === 'development') {
		let result = {};
		await new Promise(resolve => {
			setTimeout(() => {
				resolve({
					message: '',
					error: 0,
					data: null,
				});
			}, 800);
		}).then(data => {
			result = data;
		});
		return result;
	} else {
		let result = {};
		await createCode(params).then(data => {
			result = data;
		});
		return result;
	}
}

export async function queryOpenfolder() {
	if (process.env.NODE_ENV === 'development') {
		let result = {};
		await new Promise(resolve => {
			setTimeout(() => {
				resolve({
					message: '',
					error: 0,
					data: null,
				});
			}, 800);
		}).then(data => {
			result = data;
		});
		return result;
	} else {
		let result = {};
		await openFolder().then(data => {
			result = data;
		});
		return result;
	}
}
