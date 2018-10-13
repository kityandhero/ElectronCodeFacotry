function openCodeFolder() {
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

export async function queryOpenCodeFolder() {
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
		await openCodeFolder().then(data => {
			result = data;
		});
		return result;
	}
}
