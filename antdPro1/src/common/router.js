import React, { createElement } from 'react';
import { Spin } from 'antd';
import pathToRegexp from 'path-to-regexp';
import Loadable from 'react-loadable';
import { getMenuData } from './menu';

let routerDataCache;

const modelNotExisted = (app, model) =>
	// eslint-disable-next-line
	!app._models.some(({ namespace }) => {
		return namespace === model.substring(model.lastIndexOf('/') + 1);
	});

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => {
	// register models
	models.forEach(model => {
		if (modelNotExisted(app, model)) {
			// eslint-disable-next-line
			app.model(require(`../models/${model}`).default);
		}
	});

	// () => require('module')
	// transformed by babel-plugin-dynamic-import-node-sync
	if (component.toString().indexOf('.then(') < 0) {
		return props => {
			if (!routerDataCache) {
				routerDataCache = getRouterData(app);
			}
			return createElement(component().default, {
				...props,
				routerData: routerDataCache,
			});
		};
	}
	// () => import('module')
	return Loadable({
		loader: () => {
			if (!routerDataCache) {
				routerDataCache = getRouterData(app);
			}
			return component().then(raw => {
				const Component = raw.default || raw;
				return props =>
					createElement(Component, {
						...props,
						routerData: routerDataCache,
					});
			});
		},
		loading: () => {
			return <Spin size="large" className="global-spin" />;
		},
	});
};

function getFlatMenuData(menus) {
	let keys = {};
	menus.forEach(item => {
		if (item.children) {
			keys[item.path] = { ...item };
			keys = { ...keys, ...getFlatMenuData(item.children) };
		} else {
			keys[item.path] = { ...item };
		}
	});
	return keys;
}

export const getRouterData = app => {
	const routerConfig = {
		'/': {
			component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
		},
		'/dashboard/analysis': {
			component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),
		},
		'/dashboard/monitor': {
			component: dynamicWrapper(app, ['monitor'], () => import('../routes/Dashboard/Monitor')),
		},
		'/dashboard/workplace': {
			component: dynamicWrapper(app, ['project', 'activities', 'chart'], () =>
				import('../routes/Dashboard/Workplace')
			),
			// hideInBreadcrumb: true,
			// name: '工作台',
			// authority: 'admin',
		},
		'/database/sqlserver': {
			component: dynamicWrapper(
				app,
				['sqlserver', 'nhibernatecreator', 'dapperbyselfbuildcreator', 'folder'],
				() => import('../routes/SqlServer/OperationPlate')
			),
		},
		'/personinformation/basiclist': {
			component: dynamicWrapper(app, ['personinformation'], () =>
				import('../routes/PersonInformation/BasicList')
			),
		},
		'/familyinformation/details': {
			name: '家庭信息',
			component: dynamicWrapper(app, ['familyinformation'], () =>
				import('../routes/FamilyInformation/Details')
			),
		},
		'/familyinformation/details/basicinfo': {
			name: '基本信息',
			component: dynamicWrapper(app, ['familyinformation'], () =>
				import('../routes/FamilyInformation/Details/BasicInfo')
			),
		},
		'/familyinformation/details/memberinfo': {
			name: '家庭成员',
			component: dynamicWrapper(app, ['familyinformation'], () =>
				import('../routes/FamilyInformation/Details/MemberInfo')
			),
		},
		'/familyinformation/details/incomeexpenditureinfo': {
			name: '收支状况',
			component: dynamicWrapper(app, ['incomeexpenditure'], () =>
				import('../routes/FamilyInformation/Details/IncomeExpenditureInfo')
			),
		},
		'/incomeexpenditureprice/:type/:category': {
			component: dynamicWrapper(app, ['incomeexpenditureprice'], () =>
				import('../routes/IncomeExpenditurePrice/Standard')
			),
		},
		'/povertyalleviationagency/list': {
			component: dynamicWrapper(app, ['povertyalleviationagency'], () =>
				import('../routes/PovertyAlleviationAgency/List')
			),
		},
		'/form/basic-form': {
			component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/BasicForm')),
		},
		'/form/step-form': {
			component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm')),
		},
		'/form/step-form/info': {
			name: '分步表单（填写转账信息）',
			component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step1')),
		},
		'/form/step-form/confirm': {
			name: '分步表单（确认转账信息）',
			component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step2')),
		},
		'/form/step-form/result': {
			name: '分步表单（完成）',
			component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step3')),
		},
		'/form/advanced-form': {
			component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/AdvancedForm')),
		},
		'/list/table-list': {
			component: dynamicWrapper(app, ['rule'], () => import('../routes/List/TableList')),
		},
		'/list/basic-list': {
			component: dynamicWrapper(app, ['list'], () => import('../routes/List/BasicList')),
		},
		'/list/card-list': {
			component: dynamicWrapper(app, ['list'], () => import('../routes/List/CardList')),
		},
		'/list/search': {
			component: dynamicWrapper(app, ['list'], () => import('../routes/List/List')),
		},
		'/list/search/projects': {
			component: dynamicWrapper(app, ['list'], () => import('../routes/List/Projects')),
		},
		'/list/search/applications': {
			component: dynamicWrapper(app, ['list'], () => import('../routes/List/Applications')),
		},
		'/list/search/articles': {
			component: dynamicWrapper(app, ['list'], () => import('../routes/List/Articles')),
		},
		'/profile/basic': {
			component: dynamicWrapper(app, ['profile'], () => import('../routes/Profile/BasicProfile')),
		},
		'/profile/advanced': {
			component: dynamicWrapper(app, ['profile'], () =>
				import('../routes/Profile/AdvancedProfile')
			),
		},
		'/result/success': {
			component: dynamicWrapper(app, [], () => import('../routes/Result/Success')),
		},
		'/result/fail': {
			component: dynamicWrapper(app, [], () => import('../routes/Result/Error')),
		},
		'/exception/403': {
			component: dynamicWrapper(app, [], () => import('../routes/Exception/403')),
		},
		'/exception/404': {
			component: dynamicWrapper(app, [], () => import('../routes/Exception/404')),
		},
		'/exception/500': {
			component: dynamicWrapper(app, [], () => import('../routes/Exception/500')),
		},
		'/exception/trigger': {
			component: dynamicWrapper(app, ['error'], () =>
				import('../routes/Exception/triggerException')
			),
		},
		'/user': {
			component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
		},
		'/user/login': {
			component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
		},
		'/user/register': {
			component: dynamicWrapper(app, ['register'], () => import('../routes/User/Register')),
		},
		'/user/register-result': {
			component: dynamicWrapper(app, [], () => import('../routes/User/RegisterResult')),
		},
		// '/user/:id': {
		//   component: dynamicWrapper(app, [], () => import('../routes/User/SomeComponent')),
		// },
		'/systemconfig/log/errorlog/list': {
			component: dynamicWrapper(app, ['errorlog'], () => import('../routes/ErrorLog/List')),
		},
		'/systemconfig/log/errorlog/details/:errorLogId': {
			component: dynamicWrapper(app, ['errorlog'], () => import('../routes/ErrorLog/Details')),
		},
		'/systemconfig/log/errorlog/details/:errorLogId/basicinfo': {
			component: dynamicWrapper(app, ['errorlog'], () =>
				import('../routes/ErrorLog/Details/BasicInfo')
			),
		},
		'/systemconfig/log/errorlog/details/:errorLogId/paraminfo': {
			component: dynamicWrapper(app, ['errorlog'], () =>
				import('../routes/ErrorLog/Details/ParamInfo')
			),
		},
		'/systemconfig/log/informationchangelog/list': {
			component: dynamicWrapper(app, ['informationchangelog'], () =>
				import('../routes/InformationChangeLog/List')
			),
		},
		'/systemconfig/log/povertyalleviationagencyuserloginlog/list': {
			component: dynamicWrapper(app, ['povertyalleviationagencyuserloginlog'], () =>
				import('../routes/PovertyAlleviationAgencyUserLoginLog/List')
			),
		},
		'/systemconfig/excelimporthistory/list': {
			component: dynamicWrapper(app, ['excelimporthistory'], () =>
				import('../routes/ExcelImportHistory/List')
			),
		},
		'/systemconfig/account/povertyalleviationagencyuser/list': {
			component: dynamicWrapper(app, ['povertyalleviationagencyuser'], () =>
				import('../routes/PovertyAlleviationAgencyUser/List')
			),
		},
		// '/systemconfig/account/povertyalleviationagencyuser/listforcurrentpovertyalleviationagency': {
		//   component: dynamicWrapper(app, ['povertyalleviationagencyuser'], () =>
		//     import('../routes/PovertyAlleviationAgencyUser/ListForCurrentPovertyAlleviationAgency')
		//   ),
		// },
		'/systemconfig/povertyalleviationagency/detailscurrent/:op': {
			name: '当前机构信息',
			component: dynamicWrapper(app, ['povertyalleviationagency'], () =>
				import('../routes/PovertyAlleviationAgency/DetailsCurrent')
			),
		},
		'/systemconfig/povertyalleviationagency/detailscurrent/:op/basicinfo': {
			name: '基本信息',
			component: dynamicWrapper(app, ['povertyalleviationagency'], () =>
				import('../routes/PovertyAlleviationAgency/DetailsCurrent/BasicInfo')
			),
		},
		'/systemconfig/povertyalleviationagency/detailscurrent/:op/contentinfo': {
			name: '详情信息',
			component: dynamicWrapper(app, ['povertyalleviationagency'], () =>
				import('../routes/PovertyAlleviationAgency/DetailsCurrent/ContentInfo')
			),
		},
		'/systemconfig/povertyalleviationagency/detailscurrent/:op/informationchangeloglist': {
			name: '操作记录',
			component: dynamicWrapper(app, ['informationchangelog'], () =>
				import('../routes/PovertyAlleviationAgency/DetailsCurrent/InformationChangeLogList')
			),
		},
		'/systemconfig/povertyalleviationagency/detailscurrent/:op/povertyalleviationagencyuserloginloglist': {
			name: '登陆日志',
			component: dynamicWrapper(app, ['povertyalleviationagencyuserloginlog'], () =>
				import('../routes/PovertyAlleviationAgency/DetailsCurrent/PovertyAlleviationAgencyUserLoginLogList')
			),
		},
		'/systemconfig/povertyalleviationagencyuser/detailscurrent/:op': {
			name: '当前账户信息',
			component: dynamicWrapper(app, ['povertyalleviationagencyuser'], () =>
				import('../routes/PovertyAlleviationAgencyUser/DetailsCurrent')
			),
		},
		'/systemconfig/povertyalleviationagencyuser/detailscurrent/:op/basicinfo': {
			name: '基本信息',
			component: dynamicWrapper(app, ['povertyalleviationagencyuser'], () =>
				import('../routes/PovertyAlleviationAgencyUser/DetailsCurrent/BasicInfo')
			),
		},
		'/systemconfig/povertyalleviationagencyuser/detailscurrent/:op/avatarinfo': {
			name: '设置头像',
			component: dynamicWrapper(app, ['povertyalleviationagencyuser'], () =>
				import('../routes/PovertyAlleviationAgencyUser/DetailsCurrent/AvatarInfo')
			),
		},
		'/systemconfig/povertyalleviationagencyuser/detailscurrent/:op/passwordinfo': {
			name: '重置密码',
			component: dynamicWrapper(app, ['povertyalleviationagencyuser'], () =>
				import('../routes/PovertyAlleviationAgencyUser/DetailsCurrent/PasswordInfo')
			),
		},
		'/systemconfig/povertyalleviationagencyuser/detailscurrent/:op/informationchangeloglist': {
			name: '操作记录',
			component: dynamicWrapper(app, ['informationchangelog'], () =>
				import('../routes/PovertyAlleviationAgencyUser/DetailsCurrent/InformationChangeLogList')
			),
		},
		'/systemconfig/povertyalleviationagencyuser/detailscurrent/:op/povertyalleviationagencyuserloginloglist': {
			name: '登陆日志',
			component: dynamicWrapper(app, ['povertyalleviationagencyuserloginlog'], () =>
				import('../routes/PovertyAlleviationAgencyUser/DetailsCurrent/PovertyAlleviationAgencyUserLoginLogList')
			),
		},
	};
	// Get name from ./menu.js or just set it in the router data.
	const menuData = getFlatMenuData(getMenuData());

	// Route configuration data
	// eg. {name,authority ...routerConfig }
	const routerData = {};
	// The route matches the menu
	Object.keys(routerConfig).forEach(path => {
		// Regular match item name
		// eg.  router /user/:id === /user/chen
		const pathRegexp = pathToRegexp(path);
		const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`${key}`));
		let menuItem = {};
		// If menuKey is not empty
		if (menuKey) {
			menuItem = menuData[menuKey];
		}
		let router = routerConfig[path];
		// If you need to configure complex parameter routing,
		// https://github.com/ant-design/ant-design-pro-site/blob/master/docs/router-and-nav.md#%E5%B8%A6%E5%8F%82%E6%95%B0%E7%9A%84%E8%B7%AF%E7%94%B1%E8%8F%9C%E5%8D%95
		// eg . /list/:type/user/info/:id
		router = {
			...router,
			name: router.name || menuItem.name,
			authority: router.authority || menuItem.authority,
			hideInBreadcrumb: router.hideInBreadcrumb || menuItem.hideInBreadcrumb,
		};
		routerData[path] = router;
	});
	return routerData;
};
