import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Checkbox, Alert, Icon } from 'antd';
import Login from 'components/Login';
import styles from './Login.less';

// const { Tab, UserName, Password, Mobile, Captcha, ImageCaptcha, Submit } = Login;
const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

@connect(({ login, loading }) => ({
	login,
	submitting: loading.effects['login/login'],
}))
class LoginPage extends Component {
	state = {
		type: 'account',
		autoLogin: true,
	};

	onTabChange = type => {
		this.setState({ type });
	};

	handleSubmit = (err, values) => {
		const { type } = this.state;
		const { dispatch } = this.props;
		if (!err) {
			dispatch({
				type: 'login/login',
				payload: {
					...values,
					type,
				},
			});
		}
	};

	changeAutoLogin = e => {
		this.setState({
			autoLogin: e.target.checked,
		});
	};

	renderMessage = content => {
		return <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />;
	};

	render() {
		const { login, submitting } = this.props;
		const { type, autoLogin } = this.state;
		return (
			<div className={styles.main}>
				<Login defaultActiveKey={type} onTabChange={this.onTabChange} onSubmit={this.handleSubmit}>
					<Tab key="account" tab="账户密码登录">
						{login.status === 'error' &&
							login.type === 'account' &&
							!submitting &&
							this.renderMessage('账户或密码错误（admin/888888）')}
						<UserName name="loginName" placeholder="请输入用户名" />
						<Password name="password" placeholder="请输入登陆密码" />
						{/* <ImageCaptcha name="captcha" src="http://sys.pa.com/Account/Captcha" /> */}
					</Tab>
					<Tab key="mobile" tab="手机号登录">
						{login.status === 'error' &&
							login.type === 'mobile' &&
							!submitting &&
							this.renderMessage('验证码错误')}
						<Mobile name="mobile" />
						<Captcha name="captcha" />
					</Tab>
					<div>
						<Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
							自动登录
						</Checkbox>
						<a style={{ float: 'right' }} href="">
							忘记密码
						</a>
					</div>
					<Submit loading={submitting}>登录</Submit>
					<div className={styles.other}>
						其他登录方式
						<Icon className={styles.icon} type="alipay-circle" />
						<Icon className={styles.icon} type="taobao-circle" />
						<Icon className={styles.icon} type="weibo-circle" />
						<Link className={styles.register} to="/user/register">
							注册账户
						</Link>
					</div>
				</Login>
			</div>
		);
	}
}

export default LoginPage;
