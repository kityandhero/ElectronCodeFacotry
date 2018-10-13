!(function(t) {
	function e(r) {
		if (n[r]) return n[r].exports;
		var o = (n[r] = { exports: {}, id: r, loaded: !1 });
		return t[r].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports;
	}
	var n = {};
	return (e.m = t), (e.c = n), (e.p = ''), e(0);
})([
	function(t, e, n) {
		'use strict';
		var r = n(1),
			o = 'undefined' != typeof window && window._rollbarConfig,
			i = (o && o.globalAlias) || 'Rollbar',
			a =
				'undefined' != typeof window &&
				window[i] &&
				'function' == typeof window[i].shimId &&
				void 0 !== window[i].shimId();
		if (
			('undefined' == typeof window ||
				window._rollbarStartTime ||
				(window._rollbarStartTime = new Date().getTime()),
			!a && o)
		) {
			var s = new r(o);
			window[i] = s;
		} else
			'undefined' != typeof window
				? ((window.rollbar = r), (window._rollbarDidLoad = !0))
				: 'undefined' != typeof self && ((self.rollbar = r), (self._rollbarDidLoad = !0));
		t.exports = r;
	},
	function(t, e, n) {
		'use strict';
		function r(t, e) {
			this.options = c.merge(x, t);
			var n = new l(this.options, h, d);
			this.client = e || new u(this.options, n, p, 'browser');
			var r = ('undefined' != typeof window && window) || ('undefined' != typeof self && self),
				o = 'undefined' != typeof document && document;
			i(this.client.notifier),
				a(this.client.queue),
				(this.options.captureUncaught || this.options.handleUncaughtExceptions) &&
					(f.captureUncaughtExceptions(r, this), f.wrapGlobals(r, this)),
				(this.options.captureUnhandledRejections || this.options.handleUnhandledRejections) &&
					f.captureUnhandledRejections(r, this),
				(this.instrumenter = new w(this.options, this.client.telemeter, this, r, o)),
				this.instrumenter.instrument();
		}
		function o(t) {
			var e = 'Rollbar is not initialized';
			p.error(e), t && t(new Error(e));
		}
		function i(t) {
			t.addTransform(m.handleItemWithError)
				.addTransform(m.ensureItemHasSomethingToSay)
				.addTransform(m.addBaseInfo)
				.addTransform(m.addRequestInfo(window))
				.addTransform(m.addClientInfo(window))
				.addTransform(m.addPluginInfo(window))
				.addTransform(m.addBody)
				.addTransform(g.addMessageWithError)
				.addTransform(g.addTelemetryData)
				.addTransform(g.addConfigToPayload)
				.addTransform(m.scrubPayload)
				.addTransform(g.userTransform(p))
				.addTransform(g.itemToPayload);
		}
		function a(t) {
			t.addPredicate(y.checkLevel)
				.addPredicate(v.checkIgnore)
				.addPredicate(y.userCheckIgnore(p))
				.addPredicate(y.urlIsNotBlacklisted(p))
				.addPredicate(y.urlIsWhitelisted(p))
				.addPredicate(y.messageIsIgnored(p));
		}
		function s(t) {
			for (var e = 0, n = t.length; e < n; ++e) if (c.isFunction(t[e])) return t[e];
		}
		var u = n(2),
			c = n(5),
			l = n(10),
			p = n(12),
			f = n(15),
			h = n(16),
			d = n(17),
			m = n(18),
			g = n(22),
			v = n(23),
			y = n(24),
			b = n(19),
			w = n(25),
			_ = null;
		(r.init = function(t, e) {
			return _ ? _.global(t).configure(t) : (_ = new r(t, e));
		}),
			(r.prototype.global = function(t) {
				return this.client.global(t), this;
			}),
			(r.global = function(t) {
				return _ ? _.global(t) : void o();
			}),
			(r.prototype.configure = function(t, e) {
				var n = this.options,
					r = {};
				return (
					e && (r = { payload: e }),
					(this.options = c.merge(n, t, r)),
					this.client.configure(t, e),
					this.instrumenter.configure(t),
					this
				);
			}),
			(r.configure = function(t, e) {
				return _ ? _.configure(t, e) : void o();
			}),
			(r.prototype.lastError = function() {
				return this.client.lastError;
			}),
			(r.lastError = function() {
				return _ ? _.lastError() : void o();
			}),
			(r.prototype.log = function() {
				var t = this._createItem(arguments),
					e = t.uuid;
				return this.client.log(t), { uuid: e };
			}),
			(r.log = function() {
				if (_) return _.log.apply(_, arguments);
				var t = s(arguments);
				o(t);
			}),
			(r.prototype.debug = function() {
				var t = this._createItem(arguments),
					e = t.uuid;
				return this.client.debug(t), { uuid: e };
			}),
			(r.debug = function() {
				if (_) return _.debug.apply(_, arguments);
				var t = s(arguments);
				o(t);
			}),
			(r.prototype.info = function() {
				var t = this._createItem(arguments),
					e = t.uuid;
				return this.client.info(t), { uuid: e };
			}),
			(r.info = function() {
				if (_) return _.info.apply(_, arguments);
				var t = s(arguments);
				o(t);
			}),
			(r.prototype.warn = function() {
				var t = this._createItem(arguments),
					e = t.uuid;
				return this.client.warn(t), { uuid: e };
			}),
			(r.warn = function() {
				if (_) return _.warn.apply(_, arguments);
				var t = s(arguments);
				o(t);
			}),
			(r.prototype.warning = function() {
				var t = this._createItem(arguments),
					e = t.uuid;
				return this.client.warning(t), { uuid: e };
			}),
			(r.warning = function() {
				if (_) return _.warning.apply(_, arguments);
				var t = s(arguments);
				o(t);
			}),
			(r.prototype.error = function() {
				var t = this._createItem(arguments),
					e = t.uuid;
				return this.client.error(t), { uuid: e };
			}),
			(r.error = function() {
				if (_) return _.error.apply(_, arguments);
				var t = s(arguments);
				o(t);
			}),
			(r.prototype.critical = function() {
				var t = this._createItem(arguments),
					e = t.uuid;
				return this.client.critical(t), { uuid: e };
			}),
			(r.critical = function() {
				if (_) return _.critical.apply(_, arguments);
				var t = s(arguments);
				o(t);
			}),
			(r.prototype.handleUncaughtException = function(t, e, n, r, o, i) {
				var a,
					s = c.makeUnhandledStackInfo(t, e, n, r, o, 'onerror', 'uncaught exception', b);
				c.isError(o)
					? ((a = this._createItem([t, o, i])), (a._unhandledStackInfo = s))
					: c.isError(e)
						? ((a = this._createItem([t, e, i])), (a._unhandledStackInfo = s))
						: ((a = this._createItem([t, i])), (a.stackInfo = s)),
					(a.level = this.options.uncaughtErrorLevel),
					(a._isUncaught = !0),
					this.client.log(a);
			}),
			(r.prototype.handleUnhandledRejection = function(t, e) {
				var n = 'unhandled rejection was null or undefined!';
				n = t ? t.message || String(t) : n;
				var r,
					o = (t && t._rollbarContext) || (e && e._rollbarContext);
				c.isError(t)
					? (r = this._createItem([n, t, o]))
					: ((r = this._createItem([n, t, o])),
					  (r.stackInfo = c.makeUnhandledStackInfo(
							n,
							'',
							0,
							0,
							null,
							'unhandledrejection',
							'',
							b
					  ))),
					(r.level = this.options.uncaughtErrorLevel),
					(r._isUncaught = !0),
					(r._originalArgs = r._originalArgs || []),
					r._originalArgs.push(e),
					this.client.log(r);
			}),
			(r.prototype.wrap = function(t, e, n) {
				try {
					var r;
					if (
						((r = c.isFunction(e)
							? e
							: function() {
									return e || {};
							  }),
						!c.isFunction(t))
					)
						return t;
					if (t._isWrap) return t;
					if (
						!t._rollbar_wrapped &&
						((t._rollbar_wrapped = function() {
							n && c.isFunction(n) && n.apply(this, arguments);
							try {
								return t.apply(this, arguments);
							} catch (n) {
								var e = n;
								throw (e &&
									(c.isType(e, 'string') && (e = new String(e)),
									(e._rollbarContext = r() || {}),
									(e._rollbarContext._wrappedSource = t.toString()),
									(window._rollbarWrappedError = e)),
								e);
							}
						}),
						(t._rollbar_wrapped._isWrap = !0),
						t.hasOwnProperty)
					)
						for (var o in t) t.hasOwnProperty(o) && (t._rollbar_wrapped[o] = t[o]);
					return t._rollbar_wrapped;
				} catch (e) {
					return t;
				}
			}),
			(r.wrap = function(t, e) {
				return _ ? _.wrap(t, e) : void o();
			}),
			(r.prototype.captureEvent = function(t, e) {
				return this.client.captureEvent(t, e);
			}),
			(r.captureEvent = function(t, e) {
				return _ ? _.captureEvent(t, e) : void o();
			}),
			(r.prototype.captureDomContentLoaded = function(t, e) {
				return e || (e = new Date()), this.client.captureDomContentLoaded(e);
			}),
			(r.prototype.captureLoad = function(t, e) {
				return e || (e = new Date()), this.client.captureLoad(e);
			}),
			(r.prototype._createItem = function(t) {
				return c.createItem(t, p, this);
			});
		var x = {
			version: '2.4.1',
			scrubFields: [
				'pw',
				'pass',
				'passwd',
				'password',
				'secret',
				'confirm_password',
				'confirmPassword',
				'password_confirmation',
				'passwordConfirmation',
				'access_token',
				'accessToken',
				'secret_key',
				'secretKey',
				'secretToken',
			],
			logLevel: 'debug',
			reportLevel: 'debug',
			uncaughtErrorLevel: 'error',
			endpoint: 'api.rollbar.com/api/1/item/',
			verbose: !1,
			enabled: !0,
			sendConfig: !1,
			includeItemsInTelemetry: !0,
			captureIp: !0,
		};
		t.exports = r;
	},
	function(t, e, n) {
		'use strict';
		function r(t, e, n, o) {
			(this.options = u.merge(t)),
				(this.logger = n),
				r.rateLimiter.configureGlobal(this.options),
				r.rateLimiter.setPlatformOptions(o, this.options),
				(this.queue = new i(r.rateLimiter, e, n, this.options)),
				(this.notifier = new a(this.queue, this.options)),
				(this.telemeter = new s(this.options)),
				(this.lastError = null);
		}
		var o = n(3),
			i = n(4),
			a = n(8),
			s = n(9),
			u = n(5),
			c = { maxItems: 0, itemsPerMinute: 60 };
		(r.rateLimiter = new o(c)),
			(r.prototype.global = function(t) {
				return r.rateLimiter.configureGlobal(t), this;
			}),
			(r.prototype.configure = function(t, e) {
				this.notifier && this.notifier.configure(t), this.telemeter && this.telemeter.configure(t);
				var n = this.options,
					r = {};
				return (
					e && (r = { payload: e }),
					(this.options = u.merge(n, t, r)),
					this.global(this.options),
					this
				);
			}),
			(r.prototype.log = function(t) {
				var e = this._defaultLogLevel();
				return this._log(e, t);
			}),
			(r.prototype.debug = function(t) {
				this._log('debug', t);
			}),
			(r.prototype.info = function(t) {
				this._log('info', t);
			}),
			(r.prototype.warn = function(t) {
				this._log('warning', t);
			}),
			(r.prototype.warning = function(t) {
				this._log('warning', t);
			}),
			(r.prototype.error = function(t) {
				this._log('error', t);
			}),
			(r.prototype.critical = function(t) {
				this._log('critical', t);
			}),
			(r.prototype.wait = function(t) {
				this.queue.wait(t);
			}),
			(r.prototype.captureEvent = function(t, e) {
				return this.telemeter.captureEvent(t, e);
			}),
			(r.prototype.captureDomContentLoaded = function(t) {
				return this.telemeter.captureDomContentLoaded(t);
			}),
			(r.prototype.captureLoad = function(t) {
				return this.telemeter.captureLoad(t);
			}),
			(r.prototype._log = function(t, e) {
				if (this._sameAsLastError(e)) return void (e.callback && e.callback());
				try {
					var n = null;
					e.callback && ((n = e.callback), delete e.callback),
						(e.level = e.level || t),
						this.telemeter._captureRollbarItem(e),
						(e.telemetryEvents = this.telemeter.copyEvents()),
						this.notifier.log(e, n);
				} catch (t) {
					this.logger.error(t);
				}
			}),
			(r.prototype._defaultLogLevel = function() {
				return this.options.logLevel || 'debug';
			}),
			(r.prototype._sameAsLastError = function(t) {
				return !(!this.lastError || this.lastError !== t.err) || ((this.lastError = t.err), !1);
			}),
			(t.exports = r);
	},
	function(t, e) {
		'use strict';
		function n(t) {
			(this.startTime = new Date().getTime()),
				(this.counter = 0),
				(this.perMinCounter = 0),
				(this.platform = null),
				(this.platformOptions = {}),
				this.configureGlobal(t);
		}
		function r(t, e, n) {
			return !t.ignoreRateLimit && e >= 1 && n > e;
		}
		function o(t, e, n, r, o, a, s) {
			var u = null;
			return (
				n && (n = new Error(n)),
				n || r || (u = i(t, e, o, a, s)),
				{ error: n, shouldSend: r, payload: u }
			);
		}
		function i(t, e, n, r, o) {
			var i,
				a = e.environment || (e.payload && e.payload.environment);
			i = o
				? 'item per minute limit reached, ignoring errors until timeout'
				: 'maxItems has been hit, ignoring errors until reset.';
			var s = {
				body: { message: { body: i, extra: { maxItems: n, itemsPerMinute: r } } },
				language: 'javascript',
				environment: a,
				notifier: { version: (e.notifier && e.notifier.version) || e.version },
			};
			return (
				'browser' === t
					? ((s.platform = 'browser'),
					  (s.framework = 'browser-js'),
					  (s.notifier.name = 'rollbar-browser-js'))
					: 'server' === t
						? ((s.framework = e.framework || 'node-js'), (s.notifier.name = e.notifier.name))
						: 'react-native' === t &&
						  ((s.framework = e.framework || 'react-native'), (s.notifier.name = e.notifier.name)),
				s
			);
		}
		(n.globalSettings = {
			startTime: new Date().getTime(),
			maxItems: void 0,
			itemsPerMinute: void 0,
		}),
			(n.prototype.configureGlobal = function(t) {
				void 0 !== t.startTime && (n.globalSettings.startTime = t.startTime),
					void 0 !== t.maxItems && (n.globalSettings.maxItems = t.maxItems),
					void 0 !== t.itemsPerMinute && (n.globalSettings.itemsPerMinute = t.itemsPerMinute);
			}),
			(n.prototype.shouldSend = function(t, e) {
				(e = e || new Date().getTime()),
					e - this.startTime >= 6e4 && ((this.startTime = e), (this.perMinCounter = 0));
				var i = n.globalSettings.maxItems,
					a = n.globalSettings.itemsPerMinute;
				if (r(t, i, this.counter))
					return o(this.platform, this.platformOptions, i + ' max items reached', !1);
				if (r(t, a, this.perMinCounter))
					return o(this.platform, this.platformOptions, a + ' items per minute reached', !1);
				this.counter++, this.perMinCounter++;
				var s = !r(t, i, this.counter),
					u = s;
				return (
					(s = s && !r(t, a, this.perMinCounter)),
					o(this.platform, this.platformOptions, null, s, i, a, u)
				);
			}),
			(n.prototype.setPlatformOptions = function(t, e) {
				(this.platform = t), (this.platformOptions = e);
			}),
			(t.exports = n);
	},
	function(t, e, n) {
		'use strict';
		function r(t, e, n, r) {
			(this.rateLimiter = t),
				(this.api = e),
				(this.logger = n),
				(this.options = r),
				(this.predicates = []),
				(this.pendingItems = []),
				(this.pendingRequests = []),
				(this.retryQueue = []),
				(this.retryHandle = null),
				(this.waitCallback = null),
				(this.waitIntervalID = null);
		}
		var o = n(5);
		(r.prototype.configure = function(t) {
			this.api && this.api.configure(t);
			var e = this.options;
			return (this.options = o.merge(e, t)), this;
		}),
			(r.prototype.addPredicate = function(t) {
				return o.isFunction(t) && this.predicates.push(t), this;
			}),
			(r.prototype.addPendingItem = function(t) {
				this.pendingItems.push(t);
			}),
			(r.prototype.removePendingItem = function(t) {
				var e = this.pendingItems.indexOf(t);
				e !== -1 && this.pendingItems.splice(e, 1);
			}),
			(r.prototype.addItem = function(t, e, n, r) {
				(e && o.isFunction(e)) || (e = function() {});
				var i = this._applyPredicates(t);
				if (i.stop) return this.removePendingItem(r), void e(i.err);
				this._maybeLog(t, n), this.removePendingItem(r), this.pendingRequests.push(t);
				try {
					this._makeApiRequest(
						t,
						function(n, r) {
							this._dequeuePendingRequest(t), e(n, r);
						}.bind(this)
					);
				} catch (n) {
					this._dequeuePendingRequest(t), e(n);
				}
			}),
			(r.prototype.wait = function(t) {
				o.isFunction(t) &&
					((this.waitCallback = t),
					this._maybeCallWait() ||
						(this.waitIntervalID && (this.waitIntervalID = clearInterval(this.waitIntervalID)),
						(this.waitIntervalID = setInterval(
							function() {
								this._maybeCallWait();
							}.bind(this),
							500
						))));
			}),
			(r.prototype._applyPredicates = function(t) {
				for (var e = null, n = 0, r = this.predicates.length; n < r; n++)
					if (((e = this.predicates[n](t, this.options)), !e || void 0 !== e.err))
						return { stop: !0, err: e.err };
				return { stop: !1, err: null };
			}),
			(r.prototype._makeApiRequest = function(t, e) {
				var n = this.rateLimiter.shouldSend(t);
				n.shouldSend
					? this.api.postItem(
							t,
							function(n, r) {
								n ? this._maybeRetry(n, t, e) : e(n, r);
							}.bind(this)
					  )
					: n.error
						? e(n.error)
						: this.api.postItem(n.payload, e);
			});
		var i = [
			'ECONNRESET',
			'ENOTFOUND',
			'ESOCKETTIMEDOUT',
			'ETIMEDOUT',
			'ECONNREFUSED',
			'EHOSTUNREACH',
			'EPIPE',
			'EAI_AGAIN',
		];
		(r.prototype._maybeRetry = function(t, e, n) {
			var r = !1;
			if (this.options.retryInterval)
				for (var o = 0, a = i.length; o < a; o++)
					if (t.code === i[o]) {
						r = !0;
						break;
					}
			r ? this._retryApiRequest(e, n) : n(t);
		}),
			(r.prototype._retryApiRequest = function(t, e) {
				this.retryQueue.push({ item: t, callback: e }),
					this.retryHandle ||
						(this.retryHandle = setInterval(
							function() {
								for (; this.retryQueue.length; ) {
									var t = this.retryQueue.shift();
									this._makeApiRequest(t.item, t.callback);
								}
							}.bind(this),
							this.options.retryInterval
						));
			}),
			(r.prototype._dequeuePendingRequest = function(t) {
				var e = this.pendingRequests.indexOf(t);
				e !== -1 && (this.pendingRequests.splice(e, 1), this._maybeCallWait());
			}),
			(r.prototype._maybeLog = function(t, e) {
				if (this.logger && this.options.verbose) {
					var n = e;
					if (
						((n = n || o.get(t, 'body.trace.exception.message')),
						(n = n || o.get(t, 'body.trace_chain.0.exception.message')))
					)
						return void this.logger.error(n);
					(n = o.get(t, 'body.message.body')), n && this.logger.log(n);
				}
			}),
			(r.prototype._maybeCallWait = function() {
				return (
					!(
						!o.isFunction(this.waitCallback) ||
						0 !== this.pendingItems.length ||
						0 !== this.pendingRequests.length
					) &&
					(this.waitIntervalID && (this.waitIntervalID = clearInterval(this.waitIntervalID)),
					this.waitCallback(),
					!0)
				);
			}),
			(t.exports = r);
	},
	function(t, e, n) {
		'use strict';
		function r() {
			if (
				!A &&
				((A = !0),
				c(JSON) &&
					(s(JSON.stringify) && (j.stringify = JSON.stringify),
					s(JSON.parse) && (j.parse = JSON.parse)),
				!a(j.stringify) || !a(j.parse))
			) {
				var t = n(7);
				t(j);
			}
		}
		function o(t, e) {
			return e === i(t);
		}
		function i(t) {
			var e = typeof t;
			return 'object' !== e
				? e
				: t
					? t instanceof Error
						? 'error'
						: {}.toString
								.call(t)
								.match(/\s([a-zA-Z]+)/)[1]
								.toLowerCase()
					: 'null';
		}
		function a(t) {
			return o(t, 'function');
		}
		function s(t) {
			var e = /[\\^$.*+?()[\]{}|]/g,
				n = Function.prototype.toString
					.call(Object.prototype.hasOwnProperty)
					.replace(e, '\\$&')
					.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?'),
				r = RegExp('^' + n + '$');
			return u(t) && r.test(t);
		}
		function u(t) {
			var e = typeof t;
			return null != t && ('object' == e || 'function' == e);
		}
		function c(t) {
			return !o(t, 'undefined');
		}
		function l(t) {
			var e = i(t);
			return 'object' === e || 'array' === e;
		}
		function p(t) {
			return o(t, 'error');
		}
		function f(t, e, n) {
			var r,
				i,
				a,
				s = o(t, 'object'),
				u = o(t, 'array'),
				c = [];
			if (s && n.indexOf(t) !== -1) return t;
			if ((n.push(t), s)) for (r in t) Object.prototype.hasOwnProperty.call(t, r) && c.push(r);
			else if (u) for (a = 0; a < t.length; ++a) c.push(a);
			var l = s ? {} : [];
			for (a = 0; a < c.length; ++a) (r = c[a]), (i = t[r]), (l[r] = e(r, i, n));
			return 0 != c.length ? l : t;
		}
		function h() {
			return '********';
		}
		function d() {
			var t = N(),
				e = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(e) {
					var n = (t + 16 * Math.random()) % 16 | 0;
					return (t = Math.floor(t / 16)), ('x' === e ? n : (7 & n) | 8).toString(16);
				});
			return e;
		}
		function m(t) {
			var e = g(t);
			return (
				'' === e.anchor && (e.source = e.source.replace('#', '')),
				(t = e.source.replace('?' + e.query, ''))
			);
		}
		function g(t) {
			if (!o(t, 'string')) throw new Error('received invalid input');
			for (
				var e = D,
					n = e.parser[e.strictMode ? 'strict' : 'loose'].exec(t),
					r = {},
					i = e.key.length;
				i--;

			)
				r[e.key[i]] = n[i] || '';
			return (
				(r[e.q.name] = {}),
				r[e.key[12]].replace(e.q.parser, function(t, n, o) {
					n && (r[e.q.name][n] = o);
				}),
				r
			);
		}
		function v(t, e, n) {
			(n = n || {}), (n.access_token = t);
			var r,
				o = [];
			for (r in n) Object.prototype.hasOwnProperty.call(n, r) && o.push([r, n[r]].join('='));
			var i = '?' + o.sort().join('&');
			(e = e || {}), (e.path = e.path || '');
			var a,
				s = e.path.indexOf('?'),
				u = e.path.indexOf('#');
			s !== -1 && (u === -1 || u > s)
				? ((a = e.path), (e.path = a.substring(0, s) + i + '&' + a.substring(s + 1)))
				: u !== -1
					? ((a = e.path), (e.path = a.substring(0, u) + i + a.substring(u)))
					: (e.path = e.path + i);
		}
		function y(t, e) {
			if (
				((e = e || t.protocol),
				!e && t.port && (80 === t.port ? (e = 'http:') : 443 === t.port && (e = 'https:')),
				(e = e || 'https:'),
				!t.hostname)
			)
				return null;
			var n = e + '//' + t.hostname;
			return t.port && (n = n + ':' + t.port), t.path && (n += t.path), n;
		}
		function b(t, e) {
			var n, r;
			try {
				n = j.stringify(t);
			} catch (o) {
				if (e && a(e))
					try {
						n = e(t);
					} catch (t) {
						r = t;
					}
				else r = o;
			}
			return { error: r, value: n };
		}
		function w(t) {
			var e, n;
			try {
				e = j.parse(t);
			} catch (t) {
				n = t;
			}
			return { error: n, value: e };
		}
		function _(t, e, n, r, o, i, a, s) {
			var u = { url: e || '', line: n, column: r };
			(u.func = s.guessFunctionName(u.url, u.line)), (u.context = s.gatherContext(u.url, u.line));
			var c = document && document.location && document.location.href,
				l = window && window.navigator && window.navigator.userAgent;
			return { mode: i, message: o ? String(o) : t || a, url: c, stack: [u], useragent: l };
		}
		function x(t, e) {
			return function(n, r) {
				try {
					e(n, r);
				} catch (e) {
					t.error(e);
				}
			};
		}
		function k(t, e, n, r, o) {
			for (var a, s, u, c, l, p, f = [], h = 0, m = t.length; h < m; ++h) {
				p = t[h];
				var g = i(p);
				switch (g) {
					case 'undefined':
						break;
					case 'string':
						a ? f.push(p) : (a = p);
						break;
					case 'function':
						c = x(e, p);
						break;
					case 'date':
						f.push(p);
						break;
					case 'error':
					case 'domexception':
						s ? f.push(p) : (s = p);
						break;
					case 'object':
					case 'array':
						if (
							p instanceof Error ||
							('undefined' != typeof DOMException && p instanceof DOMException)
						) {
							s ? f.push(p) : (s = p);
							break;
						}
						if (r && 'object' === g && !l) {
							for (var v = 0, y = r.length; v < y; ++v)
								if (void 0 !== p[r[v]]) {
									l = p;
									break;
								}
							if (l) break;
						}
						u ? f.push(p) : (u = p);
						break;
					default:
						if (
							p instanceof Error ||
							('undefined' != typeof DOMException && p instanceof DOMException)
						) {
							s ? f.push(p) : (s = p);
							break;
						}
						f.push(p);
				}
			}
			f.length > 0 && ((u = R(u)), (u.extraArgs = f));
			var b = { message: a, err: s, custom: u, timestamp: N(), callback: c, uuid: d() };
			return (
				u && void 0 !== u.level && ((b.level = u.level), delete u.level),
				r && l && (b.request = l),
				o && (b.lambdaContext = o),
				(b._originalArgs = t),
				b
			);
		}
		function E(t, e) {
			if (t) {
				var n = e.split('.'),
					r = t;
				try {
					for (var o = 0, i = n.length; o < i; ++o) r = r[n[o]];
				} catch (t) {
					r = void 0;
				}
				return r;
			}
		}
		function I(t, e, n) {
			if (t) {
				var r = e.split('.'),
					o = r.length;
				if (!(o < 1)) {
					if (1 === o) return void (t[r[0]] = n);
					try {
						for (var i = t[r[0]] || {}, a = i, s = 1; s < o - 1; s++)
							(i[r[s]] = i[r[s]] || {}), (i = i[r[s]]);
						(i[r[o - 1]] = n), (t[r[0]] = a);
					} catch (t) {
						return;
					}
				}
			}
		}
		function T(t, e) {
			function n(t, e, n, r, o, i) {
				return e + h(i);
			}
			function r(t) {
				var e;
				if (o(t, 'string')) for (e = 0; e < u.length; ++e) t = t.replace(u[e], n);
				return t;
			}
			function i(t, e) {
				var n;
				for (n = 0; n < s.length; ++n)
					if (s[n].test(t)) {
						e = h(e);
						break;
					}
				return e;
			}
			function a(t, e, n) {
				var s = i(t, e);
				return s === e ? (o(e, 'object') || o(e, 'array') ? f(e, a, n) : r(s)) : s;
			}
			e = e || [];
			var s = S(e),
				u = O(e);
			return f(t, a, []);
		}
		function S(t) {
			for (var e, n = [], r = 0; r < t.length; ++r)
				(e = '^\\[?(%5[bB])?' + t[r] + '\\[?(%5[bB])?\\]?(%5[dD])?$'), n.push(new RegExp(e, 'i'));
			return n;
		}
		function O(t) {
			for (var e, n = [], r = 0; r < t.length; ++r)
				(e = '\\[?(%5[bB])?' + t[r] + '\\[?(%5[bB])?\\]?(%5[dD])?'),
					n.push(new RegExp('(' + e + '=)([^&\\n]+)', 'igm'));
			return n;
		}
		function L(t) {
			var e,
				n,
				r,
				o = [];
			for (e = 0, n = t.length; e < n; e++)
				(r = t[e]),
					'object' == typeof r
						? ((r = b(r)),
						  (r = r.error || r.value),
						  r.length > 500 && (r = r.substr(0, 500) + '...'))
						: 'undefined' == typeof r && (r = 'undefined'),
					o.push(r);
			return o.join(' ');
		}
		function N() {
			return Date.now ? +Date.now() : +new Date();
		}
		function C(t, e) {
			if (t && t.user_ip && e !== !0) {
				var n = t.user_ip;
				if (e)
					try {
						var r;
						if (n.indexOf('.') !== -1) (r = n.split('.')), r.pop(), r.push('0'), (n = r.join('.'));
						else if (n.indexOf(':') !== -1) {
							if (((r = n.split(':')), r.length > 2)) {
								var o = r.slice(0, 3),
									i = o[2].indexOf('/');
								i !== -1 && (o[2] = o[2].substring(0, i));
								var a = '0000:0000:0000:0000:0000';
								n = o.concat(a).join(':');
							}
						} else n = null;
					} catch (t) {
						n = null;
					}
				else n = null;
				t.user_ip = n;
			}
		}
		var R = n(6),
			j = {},
			A = !1;
		r();
		var q = { debug: 0, info: 1, warning: 2, error: 3, critical: 4 },
			D = {
				strictMode: !1,
				key: [
					'source',
					'protocol',
					'authority',
					'userInfo',
					'user',
					'password',
					'host',
					'port',
					'relative',
					'path',
					'directory',
					'file',
					'query',
					'anchor',
				],
				q: { name: 'queryKey', parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
				parser: {
					strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
					loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
				},
			};
		t.exports = {
			isType: o,
			typeName: i,
			isFunction: a,
			isNativeFunction: s,
			isIterable: l,
			isError: p,
			merge: R,
			traverse: f,
			redact: h,
			uuid4: d,
			LEVELS: q,
			sanitizeUrl: m,
			addParamsAndAccessTokenToPath: v,
			formatUrl: y,
			stringify: b,
			jsonParse: w,
			makeUnhandledStackInfo: _,
			createItem: k,
			get: E,
			set: I,
			scrub: T,
			formatArgsAsString: L,
			now: N,
			filterIp: C,
		};
	},
	function(t, e) {
		'use strict';
		function n() {
			var t,
				e,
				r,
				o,
				a,
				s = {},
				u = null,
				c = arguments.length;
			for (t = 0; t < c; t++)
				if (((u = arguments[t]), null != u))
					for (a in u)
						(e = s[a]),
							(r = u[a]),
							s !== r &&
								(r && i(r)
									? ((o = e && i(e) ? e : {}), (s[a] = n(o, r)))
									: 'undefined' != typeof r && (s[a] = r));
			return s;
		}
		var r = Object.prototype.hasOwnProperty,
			o = Object.prototype.toString,
			i = function(t) {
				if (!t || '[object Object]' !== o.call(t)) return !1;
				var e = r.call(t, 'constructor'),
					n =
						t.constructor &&
						t.constructor.prototype &&
						r.call(t.constructor.prototype, 'isPrototypeOf');
				if (t.constructor && !e && !n) return !1;
				var i;
				for (i in t);
				return 'undefined' == typeof i || r.call(t, i);
			};
		t.exports = n;
	},
	function(t, e) {
		var n = function(t) {
			function e(t) {
				return t < 10 ? '0' + t : t;
			}
			function n() {
				return this.valueOf();
			}
			function r(t) {
				return (
					(i.lastIndex = 0),
					i.test(t)
						? '"' +
						  t.replace(i, function(t) {
								var e = u[t];
								return 'string' == typeof e
									? e
									: '\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4);
						  }) +
						  '"'
						: '"' + t + '"'
				);
			}
			function o(t, e) {
				var n,
					i,
					u,
					l,
					p,
					f = a,
					h = e[t];
				switch (
					(h && 'object' == typeof h && 'function' == typeof h.toJSON && (h = h.toJSON(t)),
					'function' == typeof c && (h = c.call(e, t, h)),
					typeof h)
				) {
					case 'string':
						return r(h);
					case 'number':
						return isFinite(h) ? String(h) : 'null';
					case 'boolean':
					case 'null':
						return String(h);
					case 'object':
						if (!h) return 'null';
						if (((a += s), (p = []), '[object Array]' === Object.prototype.toString.apply(h))) {
							for (l = h.length, n = 0; n < l; n += 1) p[n] = o(n, h) || 'null';
							return (
								(u =
									0 === p.length
										? '[]'
										: a
											? '[\n' + a + p.join(',\n' + a) + '\n' + f + ']'
											: '[' + p.join(',') + ']'),
								(a = f),
								u
							);
						}
						if (c && 'object' == typeof c)
							for (l = c.length, n = 0; n < l; n += 1)
								'string' == typeof c[n] &&
									((i = c[n]), (u = o(i, h)), u && p.push(r(i) + (a ? ': ' : ':') + u));
						else
							for (i in h)
								Object.prototype.hasOwnProperty.call(h, i) &&
									((u = o(i, h)), u && p.push(r(i) + (a ? ': ' : ':') + u));
						return (
							(u =
								0 === p.length
									? '{}'
									: a
										? '{\n' + a + p.join(',\n' + a) + '\n' + f + '}'
										: '{' + p.join(',') + '}'),
							(a = f),
							u
						);
				}
			}
			var i = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
			'function' != typeof Date.prototype.toJSON &&
				((Date.prototype.toJSON = function() {
					return isFinite(this.valueOf())
						? this.getUTCFullYear() +
								'-' +
								e(this.getUTCMonth() + 1) +
								'-' +
								e(this.getUTCDate()) +
								'T' +
								e(this.getUTCHours()) +
								':' +
								e(this.getUTCMinutes()) +
								':' +
								e(this.getUTCSeconds()) +
								'Z'
						: null;
				}),
				(Boolean.prototype.toJSON = n),
				(Number.prototype.toJSON = n),
				(String.prototype.toJSON = n));
			var a, s, u, c;
			'function' != typeof t.stringify &&
				((u = {
					'\b': '\\b',
					'\t': '\\t',
					'\n': '\\n',
					'\f': '\\f',
					'\r': '\\r',
					'"': '\\"',
					'\\': '\\\\',
				}),
				(t.stringify = function(t, e, n) {
					var r;
					if (((a = ''), (s = ''), 'number' == typeof n)) for (r = 0; r < n; r += 1) s += ' ';
					else 'string' == typeof n && (s = n);
					if (
						((c = e),
						e && 'function' != typeof e && ('object' != typeof e || 'number' != typeof e.length))
					)
						throw new Error('JSON.stringify');
					return o('', { '': t });
				})),
				'function' != typeof t.parse &&
					(t.parse = (function() {
						function t(t) {
							return t.replace(/\\(?:u(.{4})|([^u]))/g, function(t, e, n) {
								return e ? String.fromCharCode(parseInt(e, 16)) : a[n];
							});
						}
						var e,
							n,
							r,
							o,
							i,
							a = { '\\': '\\', '"': '"', '/': '/', t: '\t', n: '\n', r: '\r', f: '\f', b: '\b' },
							s = {
								go: function() {
									e = 'ok';
								},
								firstokey: function() {
									(o = i), (e = 'colon');
								},
								okey: function() {
									(o = i), (e = 'colon');
								},
								ovalue: function() {
									e = 'ocomma';
								},
								firstavalue: function() {
									e = 'acomma';
								},
								avalue: function() {
									e = 'acomma';
								},
							},
							u = {
								go: function() {
									e = 'ok';
								},
								ovalue: function() {
									e = 'ocomma';
								},
								firstavalue: function() {
									e = 'acomma';
								},
								avalue: function() {
									e = 'acomma';
								},
							},
							c = {
								'{': {
									go: function() {
										n.push({ state: 'ok' }), (r = {}), (e = 'firstokey');
									},
									ovalue: function() {
										n.push({ container: r, state: 'ocomma', key: o }), (r = {}), (e = 'firstokey');
									},
									firstavalue: function() {
										n.push({ container: r, state: 'acomma' }), (r = {}), (e = 'firstokey');
									},
									avalue: function() {
										n.push({ container: r, state: 'acomma' }), (r = {}), (e = 'firstokey');
									},
								},
								'}': {
									firstokey: function() {
										var t = n.pop();
										(i = r), (r = t.container), (o = t.key), (e = t.state);
									},
									ocomma: function() {
										var t = n.pop();
										(r[o] = i), (i = r), (r = t.container), (o = t.key), (e = t.state);
									},
								},
								'[': {
									go: function() {
										n.push({ state: 'ok' }), (r = []), (e = 'firstavalue');
									},
									ovalue: function() {
										n.push({ container: r, state: 'ocomma', key: o }),
											(r = []),
											(e = 'firstavalue');
									},
									firstavalue: function() {
										n.push({ container: r, state: 'acomma' }), (r = []), (e = 'firstavalue');
									},
									avalue: function() {
										n.push({ container: r, state: 'acomma' }), (r = []), (e = 'firstavalue');
									},
								},
								']': {
									firstavalue: function() {
										var t = n.pop();
										(i = r), (r = t.container), (o = t.key), (e = t.state);
									},
									acomma: function() {
										var t = n.pop();
										r.push(i), (i = r), (r = t.container), (o = t.key), (e = t.state);
									},
								},
								':': {
									colon: function() {
										if (Object.hasOwnProperty.call(r, o))
											throw new SyntaxError("Duplicate key '" + o + '"');
										e = 'ovalue';
									},
								},
								',': {
									ocomma: function() {
										(r[o] = i), (e = 'okey');
									},
									acomma: function() {
										r.push(i), (e = 'avalue');
									},
								},
								true: {
									go: function() {
										(i = !0), (e = 'ok');
									},
									ovalue: function() {
										(i = !0), (e = 'ocomma');
									},
									firstavalue: function() {
										(i = !0), (e = 'acomma');
									},
									avalue: function() {
										(i = !0), (e = 'acomma');
									},
								},
								false: {
									go: function() {
										(i = !1), (e = 'ok');
									},
									ovalue: function() {
										(i = !1), (e = 'ocomma');
									},
									firstavalue: function() {
										(i = !1), (e = 'acomma');
									},
									avalue: function() {
										(i = !1), (e = 'acomma');
									},
								},
								null: {
									go: function() {
										(i = null), (e = 'ok');
									},
									ovalue: function() {
										(i = null), (e = 'ocomma');
									},
									firstavalue: function() {
										(i = null), (e = 'acomma');
									},
									avalue: function() {
										(i = null), (e = 'acomma');
									},
								},
							};
						return function(r, o) {
							var a,
								l = /^[\u0020\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;
							(e = 'go'), (n = []);
							try {
								for (;;) {
									if (((a = l.exec(r)), !a)) break;
									a[1] ? c[a[1]][e]() : a[2] ? ((i = +a[2]), u[e]()) : ((i = t(a[3])), s[e]()),
										(r = r.slice(a[0].length));
								}
							} catch (t) {
								e = t;
							}
							if ('ok' !== e || /[^\u0020\t\n\r]/.test(r))
								throw e instanceof SyntaxError ? e : new SyntaxError('JSON');
							return 'function' == typeof o
								? (function t(e, n) {
										var r,
											a,
											s = e[n];
										if (s && 'object' == typeof s)
											for (r in i)
												Object.prototype.hasOwnProperty.call(s, r) &&
													((a = t(s, r)), void 0 !== a ? (s[r] = a) : delete s[r]);
										return o.call(e, n, s);
								  })({ '': i }, '')
								: i;
						};
					})());
		};
		t.exports = n;
	},
	function(t, e, n) {
		'use strict';
		function r(t, e) {
			(this.queue = t), (this.options = e), (this.transforms = []);
		}
		var o = n(5);
		(r.prototype.configure = function(t) {
			this.queue && this.queue.configure(t);
			var e = this.options;
			return (this.options = o.merge(e, t)), this;
		}),
			(r.prototype.addTransform = function(t) {
				return o.isFunction(t) && this.transforms.push(t), this;
			}),
			(r.prototype.log = function(t, e) {
				if (((e && o.isFunction(e)) || (e = function() {}), !this.options.enabled))
					return e(new Error('Rollbar is not enabled'));
				this.queue.addPendingItem(t);
				var n = t.err;
				this._applyTransforms(
					t,
					function(r, o) {
						return r
							? (this.queue.removePendingItem(t), e(r, null))
							: void this.queue.addItem(o, e, n, t);
					}.bind(this)
				);
			}),
			(r.prototype._applyTransforms = function(t, e) {
				var n = -1,
					r = this.transforms.length,
					o = this.transforms,
					i = this.options,
					a = function(t, s) {
						return t ? void e(t, null) : (n++, n === r ? void e(null, s) : void o[n](s, i, a));
					};
				a(null, t);
			}),
			(t.exports = r);
	},
	function(t, e, n) {
		'use strict';
		function r(t) {
			(this.queue = []), (this.options = i.merge(t));
			var e = this.options.maxTelemetryEvents || a;
			this.maxQueueSize = Math.max(0, Math.min(e, a));
		}
		function o(t, e) {
			if (e) return e;
			var n = { error: 'error', manual: 'info' };
			return n[t] || 'info';
		}
		var i = n(5),
			a = 100;
		(r.prototype.configure = function(t) {
			var e = this.options;
			this.options = i.merge(e, t);
			var n = this.options.maxTelemetryEvents || a,
				r = Math.max(0, Math.min(n, a)),
				o = 0;
			this.maxQueueSize > r && (o = this.maxQueueSize - r),
				(this.maxQueueSize = r),
				this.queue.splice(0, o);
		}),
			(r.prototype.copyEvents = function() {
				return Array.prototype.slice.call(this.queue, 0);
			}),
			(r.prototype.capture = function(t, e, n, r, a) {
				var s = { level: o(t, n), type: t, timestamp_ms: a || i.now(), body: e, source: 'client' };
				r && (s.uuid = r);
				try {
					if (i.isFunction(this.options.filterTelemetry) && this.options.filterTelemetry(s))
						return !1;
				} catch (t) {
					this.options.filterTelemetry = null;
				}
				return this.push(s), s;
			}),
			(r.prototype.captureEvent = function(t, e, n) {
				return this.capture('manual', t, e, n);
			}),
			(r.prototype.captureError = function(t, e, n, r) {
				var o = { message: t.message || String(t) };
				return t.stack && (o.stack = t.stack), this.capture('error', o, e, n, r);
			}),
			(r.prototype.captureLog = function(t, e, n, r) {
				return this.capture('log', { message: t }, e, n, r);
			}),
			(r.prototype.captureNetwork = function(t, e, n, r) {
				(e = e || 'xhr'), (t.subtype = t.subtype || e), r && (t.request = r);
				var o = this.levelFromStatus(t.status_code);
				return this.capture('network', t, o, n);
			}),
			(r.prototype.levelFromStatus = function(t) {
				return t >= 200 && t < 400 ? 'info' : 0 === t || t >= 400 ? 'error' : 'info';
			}),
			(r.prototype.captureDom = function(t, e, n, r, o) {
				var i = { subtype: t, element: e };
				return (
					void 0 !== n && (i.value = n),
					void 0 !== r && (i.checked = r),
					this.capture('dom', i, 'info', o)
				);
			}),
			(r.prototype.captureNavigation = function(t, e, n) {
				return this.capture('navigation', { from: t, to: e }, 'info', n);
			}),
			(r.prototype.captureDomContentLoaded = function(t) {
				return this.capture(
					'navigation',
					{ subtype: 'DOMContentLoaded' },
					'info',
					void 0,
					t && t.getTime()
				);
			}),
			(r.prototype.captureLoad = function(t) {
				return this.capture('navigation', { subtype: 'load' }, 'info', void 0, t && t.getTime());
			}),
			(r.prototype.captureConnectivityChange = function(t, e) {
				return this.captureNetwork({ change: t }, 'connectivity', e);
			}),
			(r.prototype._captureRollbarItem = function(t) {
				if (this.options.includeItemsInTelemetry)
					return t.err
						? this.captureError(t.err, t.level, t.uuid, t.timestamp)
						: t.message
							? this.captureLog(t.message, t.level, t.uuid, t.timestamp)
							: t.custom
								? this.capture('log', t.custom, t.level, t.uuid, t.timestamp)
								: void 0;
			}),
			(r.prototype.push = function(t) {
				this.queue.push(t), this.queue.length > this.maxQueueSize && this.queue.shift();
			}),
			(t.exports = r);
	},
	function(t, e, n) {
		'use strict';
		function r(t, e, n, r) {
			(this.options = t),
				(this.transport = e),
				(this.url = n),
				(this.jsonBackup = r),
				(this.accessToken = t.accessToken),
				(this.transportOptions = o(t, n));
		}
		function o(t, e) {
			return a.getTransportFromOptions(t, s, e);
		}
		var i = n(5),
			a = n(11),
			s = {
				hostname: 'api.rollbar.com',
				path: '/api/1/item/',
				search: null,
				version: '1',
				protocol: 'https:',
				port: 443,
			};
		(r.prototype.postItem = function(t, e) {
			var n = a.transportOptions(this.transportOptions, 'POST'),
				r = a.buildPayload(this.accessToken, t, this.jsonBackup);
			this.transport.post(this.accessToken, n, r, e);
		}),
			(r.prototype.configure = function(t) {
				var e = this.oldOptions;
				return (
					(this.options = i.merge(e, t)),
					(this.transportOptions = o(this.options, this.url)),
					void 0 !== this.options.accessToken && (this.accessToken = this.options.accessToken),
					this
				);
			}),
			(t.exports = r);
	},
	function(t, e, n) {
		'use strict';
		function r(t, e, n) {
			if (!s.isType(e.context, 'string')) {
				var r = s.stringify(e.context, n);
				r.error
					? (e.context = "Error: could not serialize 'context'")
					: (e.context = r.value || ''),
					e.context.length > 255 && (e.context = e.context.substr(0, 255));
			}
			return { access_token: t, data: e };
		}
		function o(t, e, n) {
			var r = e.hostname,
				o = e.protocol,
				i = e.port,
				a = e.path,
				s = e.search,
				u = t.proxy;
			if (t.endpoint) {
				var c = n.parse(t.endpoint);
				(r = c.hostname), (o = c.protocol), (i = c.port), (a = c.pathname), (s = c.search);
			}
			return { hostname: r, protocol: o, port: i, path: a, search: s, proxy: u };
		}
		function i(t, e) {
			var n = t.protocol || 'https:',
				r = t.port || ('http:' === n ? 80 : 'https:' === n ? 443 : void 0),
				o = t.hostname,
				i = t.path;
			return (
				t.search && (i += t.search),
				t.proxy &&
					((i = n + '//' + o + i),
					(o = t.proxy.host || t.proxy.hostname),
					(r = t.proxy.port),
					(n = t.proxy.protocol || n)),
				{ protocol: n, hostname: o, path: i, port: r, method: e }
			);
		}
		function a(t, e) {
			var n = /\/$/.test(t),
				r = /^\//.test(e);
			return n && r ? (e = e.substring(1)) : n || r || (e = '/' + e), t + e;
		}
		var s = n(5);
		t.exports = {
			buildPayload: r,
			getTransportFromOptions: o,
			transportOptions: i,
			appendPathToPath: a,
		};
	},
	function(t, e, n) {
		'use strict';
		function r() {
			var t = Array.prototype.slice.call(arguments, 0);
			t.unshift('Rollbar:'),
				a.ieVersion() <= 8
					? console.error(s.formatArgsAsString(t))
					: console.error.apply(console, t);
		}
		function o() {
			var t = Array.prototype.slice.call(arguments, 0);
			t.unshift('Rollbar:'),
				a.ieVersion() <= 8 ? console.info(s.formatArgsAsString(t)) : console.info.apply(console, t);
		}
		function i() {
			var t = Array.prototype.slice.call(arguments, 0);
			t.unshift('Rollbar:'),
				a.ieVersion() <= 8 ? console.log(s.formatArgsAsString(t)) : console.log.apply(console, t);
		}
		n(13);
		var a = n(14),
			s = n(5);
		t.exports = { error: r, info: o, log: i };
	},
	function(t, e) {
		!(function(t) {
			'use strict';
			t.console || (t.console = {});
			for (
				var e,
					n,
					r = t.console,
					o = function() {},
					i = ['memory'],
					a = 'assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn'.split(
						','
					);
				(e = i.pop());

			)
				r[e] || (r[e] = {});
			for (; (n = a.pop()); ) r[n] || (r[n] = o);
		})('undefined' == typeof window ? this : window);
	},
	function(t, e) {
		'use strict';
		function n() {
			var t;
			if (!document) return t;
			for (
				var e = 3, n = document.createElement('div'), r = n.getElementsByTagName('i');
				(n.innerHTML = '<!--[if gt IE ' + ++e + ']><i></i><![endif]-->'), r[0];

			);
			return e > 4 ? e : t;
		}
		var r = { ieVersion: n };
		t.exports = r;
	},
	function(t, e) {
		'use strict';
		function n(t, e, n) {
			if (t) {
				var o;
				'function' == typeof e._rollbarOldOnError
					? (o = e._rollbarOldOnError)
					: t.onerror && !t.onerror.belongsToShim && ((o = t.onerror), (e._rollbarOldOnError = o));
				var i = function() {
					var n = Array.prototype.slice.call(arguments, 0);
					r(t, e, o, n);
				};
				(i.belongsToShim = n), (t.onerror = i);
			}
		}
		function r(t, e, n, r) {
			t._rollbarWrappedError &&
				(r[4] || (r[4] = t._rollbarWrappedError),
				r[5] || (r[5] = t._rollbarWrappedError._rollbarContext),
				(t._rollbarWrappedError = null)),
				e.handleUncaughtException.apply(e, r),
				n && n.apply(t, r);
		}
		function o(t, e, n) {
			if (t) {
				'function' == typeof t._rollbarURH &&
					t._rollbarURH.belongsToShim &&
					t.removeEventListener('unhandledrejection', t._rollbarURH);
				var r = function(t) {
					var n, r, o;
					try {
						n = t.reason;
					} catch (t) {
						n = void 0;
					}
					try {
						r = t.promise;
					} catch (t) {
						r = '[unhandledrejection] error getting `promise` from event';
					}
					try {
						(o = t.detail), !n && o && ((n = o.reason), (r = o.promise));
					} catch (t) {
						o = '[unhandledrejection] error getting `detail` from event';
					}
					n || (n = '[unhandledrejection] error getting `reason` from event'),
						e && e.handleUnhandledRejection && e.handleUnhandledRejection(n, r);
				};
				(r.belongsToShim = n), (t._rollbarURH = r), t.addEventListener('unhandledrejection', r);
			}
		}
		function i(t, e, n) {
			if (t) {
				var r,
					o,
					i = 'EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload'.split(
						','
					);
				for (r = 0; r < i.length; ++r)
					(o = i[r]), t[o] && t[o].prototype && a(e, t[o].prototype, n);
			}
		}
		function a(t, e, n) {
			if (e.hasOwnProperty && e.hasOwnProperty('addEventListener')) {
				for (var r = e.addEventListener; r._rollbarOldAdd && r.belongsToShim; )
					r = r._rollbarOldAdd;
				var o = function(e, n, o) {
					r.call(this, e, t.wrap(n), o);
				};
				(o._rollbarOldAdd = r), (o.belongsToShim = n), (e.addEventListener = o);
				for (var i = e.removeEventListener; i._rollbarOldRemove && i.belongsToShim; )
					i = i._rollbarOldRemove;
				var a = function(t, e, n) {
					i.call(this, t, (e && e._rollbar_wrapped) || e, n);
				};
				(a._rollbarOldRemove = i), (a.belongsToShim = n), (e.removeEventListener = a);
			}
		}
		t.exports = { captureUncaughtExceptions: n, captureUnhandledRejections: o, wrapGlobals: i };
	},
	function(t, e, n) {
		'use strict';
		function r(t, e, n, r, o) {
			(r && l.isFunction(r)) || (r = function() {}), l.addParamsAndAccessTokenToPath(t, e, n);
			var a = 'GET',
				s = l.formatUrl(e);
			i(t, s, a, null, r, o);
		}
		function o(t, e, n, r, o) {
			if (((r && l.isFunction(r)) || (r = function() {}), !n))
				return r(new Error('Cannot send empty request'));
			var a = l.stringify(n);
			if (a.error) return r(a.error);
			var s = a.value,
				u = 'POST',
				c = l.formatUrl(e);
			i(t, c, u, s, r, o);
		}
		function i(t, e, n, r, o, i) {
			var f;
			if (((f = i ? i() : a()), !f)) return o(new Error('No way to send a request'));
			try {
				try {
					var h = function() {
						try {
							if (h && 4 === f.readyState) {
								h = void 0;
								var t = l.jsonParse(f.responseText);
								if (s(f)) return void o(t.error, t.value);
								if (u(f)) {
									if (403 === f.status) {
										var e = t.value && t.value.message;
										p.error(e);
									}
									o(new Error(String(f.status)));
								} else {
									var n = 'XHR response had no status code (likely connection failure)';
									o(c(n));
								}
							}
						} catch (t) {
							var r;
							(r = t && t.stack ? t : new Error(t)), o(r);
						}
					};
					f.open(n, e, !0),
						f.setRequestHeader &&
							(f.setRequestHeader('Content-Type', 'application/json'),
							f.setRequestHeader('X-Rollbar-Access-Token', t)),
						(f.onreadystatechange = h),
						f.send(r);
				} catch (t) {
					if ('undefined' != typeof XDomainRequest) {
						if (!window || !window.location)
							return o(new Error('No window available during request, unknown environment'));
						'http:' === window.location.href.substring(0, 5) &&
							'https' === e.substring(0, 5) &&
							(e = 'http' + e.substring(5));
						var d = new XDomainRequest();
						(d.onprogress = function() {}),
							(d.ontimeout = function() {
								var t = 'Request timed out',
									e = 'ETIMEDOUT';
								o(c(t, e));
							}),
							(d.onerror = function() {
								o(new Error('Error during request'));
							}),
							(d.onload = function() {
								var t = l.jsonParse(d.responseText);
								o(t.error, t.value);
							}),
							d.open(n, e, !0),
							d.send(r);
					} else o(new Error('Cannot find a method to transport a request'));
				}
			} catch (t) {
				o(t);
			}
		}
		function a() {
			var t,
				e,
				n = [
					function() {
						return new XMLHttpRequest();
					},
					function() {
						return new ActiveXObject('Msxml2.XMLHTTP');
					},
					function() {
						return new ActiveXObject('Msxml3.XMLHTTP');
					},
					function() {
						return new ActiveXObject('Microsoft.XMLHTTP');
					},
				],
				r = n.length;
			for (e = 0; e < r; e++)
				try {
					t = n[e]();
					break;
				} catch (t) {}
			return t;
		}
		function s(t) {
			return t && t.status && 200 === t.status;
		}
		function u(t) {
			return t && l.isType(t.status, 'number') && t.status >= 400 && t.status < 600;
		}
		function c(t, e) {
			var n = new Error(t);
			return (n.code = e || 'ENOTFOUND'), n;
		}
		var l = n(5),
			p = n(12);
		t.exports = { get: r, post: o };
	},
	function(t, e) {
		'use strict';
		function n(t) {
			var e,
				n,
				r = {
					protocol: null,
					auth: null,
					host: null,
					path: null,
					hash: null,
					href: t,
					hostname: null,
					port: null,
					pathname: null,
					search: null,
					query: null,
				};
			if (
				((e = t.indexOf('//')),
				e !== -1 ? ((r.protocol = t.substring(0, e)), (n = e + 2)) : (n = 0),
				(e = t.indexOf('@', n)),
				e !== -1 && ((r.auth = t.substring(n, e)), (n = e + 1)),
				(e = t.indexOf('/', n)),
				e === -1)
			) {
				if (((e = t.indexOf('?', n)), e === -1))
					return (
						(e = t.indexOf('#', n)),
						e === -1
							? (r.host = t.substring(n))
							: ((r.host = t.substring(n, e)), (r.hash = t.substring(e))),
						(r.hostname = r.host.split(':')[0]),
						(r.port = r.host.split(':')[1]),
						r.port && (r.port = parseInt(r.port, 10)),
						r
					);
				(r.host = t.substring(n, e)),
					(r.hostname = r.host.split(':')[0]),
					(r.port = r.host.split(':')[1]),
					r.port && (r.port = parseInt(r.port, 10)),
					(n = e);
			} else
				(r.host = t.substring(n, e)),
					(r.hostname = r.host.split(':')[0]),
					(r.port = r.host.split(':')[1]),
					r.port && (r.port = parseInt(r.port, 10)),
					(n = e);
			if (
				((e = t.indexOf('#', n)),
				e === -1
					? (r.path = t.substring(n))
					: ((r.path = t.substring(n, e)), (r.hash = t.substring(e))),
				r.path)
			) {
				var o = r.path.split('?');
				(r.pathname = o[0]), (r.query = o[1]), (r.search = r.query ? '?' + r.query : null);
			}
			return r;
		}
		t.exports = { parse: n };
	},
	function(t, e, n) {
		'use strict';
		function r(t, e, n) {
			if (((t.data = t.data || {}), t.err))
				try {
					t.stackInfo = t.err._savedStackTrace || d.parse(t.err);
				} catch (e) {
					m.error('Error while parsing the error object.', e),
						(t.message = t.err.message || t.err.description || t.message || String(t.err)),
						delete t.err;
				}
			n(null, t);
		}
		function o(t, e, n) {
			t.message ||
				t.stackInfo ||
				t.custom ||
				n(new Error('No message, stack info, or custom data'), null),
				n(null, t);
		}
		function i(t, e, n) {
			var r = (e.payload && e.payload.environment) || e.environment;
			(t.data = h.merge(t.data, {
				environment: r,
				level: t.level,
				endpoint: e.endpoint,
				platform: 'browser',
				framework: 'browser-js',
				language: 'javascript',
				server: {},
				uuid: t.uuid,
				notifier: { name: 'rollbar-browser-js', version: e.version },
			})),
				n(null, t);
		}
		function a(t) {
			return function(e, n, r) {
				if (!t || !t.location) return r(null, e);
				var o = '$remote_ip';
				n.captureIp ? n.captureIp !== !0 && (o += '_anonymize') : (o = null),
					h.set(e, 'data.request', {
						url: t.location.href,
						query_string: t.location.search,
						user_ip: o,
					}),
					r(null, e);
			};
		}
		function s(t) {
			return function(e, n, r) {
				if (!t) return r(null, e);
				var o = t.navigator || {},
					i = t.screen || {};
				h.set(e, 'data.client', {
					runtime_ms: e.timestamp - t._rollbarStartTime,
					timestamp: Math.round(e.timestamp / 1e3),
					javascript: {
						browser: o.userAgent,
						language: o.language,
						cookie_enabled: o.cookieEnabled,
						screen: { width: i.width, height: i.height },
					},
				}),
					r(null, e);
			};
		}
		function u(t) {
			return function(e, n, r) {
				if (!t || !t.navigator) return r(null, e);
				for (var o, i = [], a = t.navigator.plugins || [], s = 0, u = a.length; s < u; ++s)
					(o = a[s]), i.push({ name: o.name, description: o.description });
				h.set(e, 'data.client.javascript.plugins', i), r(null, e);
			};
		}
		function c(t, e, n) {
			t.stackInfo ? p(t, e, n) : l(t, e, n);
		}
		function l(t, e, n) {
			var r = t.message,
				o = t.custom;
			if (!r)
				if (o) {
					var i = e.scrubFields,
						a = h.stringify(h.scrub(o, i));
					r = a.error || a.value || '';
				} else r = '';
			var s = { body: r };
			o && (s.extra = h.merge(o)), h.set(t, 'data.body', { message: s }), n(null, t);
		}
		function p(t, e, n) {
			var r = t.data.description,
				o = t.stackInfo,
				i = t.custom,
				a = d.guessErrorClass(o.message),
				s = o.name || a[0],
				u = a[1],
				c = { exception: { class: s, message: u } };
			r && (c.exception.description = r);
			var p = o.stack;
			if (
				(p &&
					0 === p.length &&
					t._unhandledStackInfo &&
					t._unhandledStackInfo.stack &&
					(p = t._unhandledStackInfo.stack),
				p)
			) {
				0 === p.length &&
					((c.exception.stack = o.rawStack), (c.exception.raw = String(o.rawException)));
				var f, m, g, v, y, b, w, _;
				for (c.frames = [], w = 0; w < p.length; ++w)
					(f = p[w]),
						(m = {
							filename: f.url ? h.sanitizeUrl(f.url) : '(unknown)',
							lineno: f.line || null,
							method: f.func && '?' !== f.func ? f.func : '[anonymous]',
							colno: f.column,
						}),
						(m.method && m.method.endsWith && m.method.endsWith('_rollbar_wrapped')) ||
							((g = v = y = null),
							(b = f.context ? f.context.length : 0),
							b &&
								((_ = Math.floor(b / 2)),
								(v = f.context.slice(0, _)),
								(g = f.context[_]),
								(y = f.context.slice(_))),
							g && (m.code = g),
							(v || y) &&
								((m.context = {}),
								v && v.length && (m.context.pre = v),
								y && y.length && (m.context.post = y)),
							f.args && (m.args = f.args),
							c.frames.push(m));
				c.frames.reverse(),
					i && (c.extra = h.merge(i)),
					h.set(t, 'data.body', { trace: c }),
					n(null, t);
			} else (t.message = s + ': ' + u), l(t, e, n);
		}
		function f(t, e, n) {
			var r = e.scrubFields;
			(t.data = h.scrub(t.data, r)), n(null, t);
		}
		var h = n(5),
			d = n(19),
			m = n(12);
		t.exports = {
			handleItemWithError: r,
			ensureItemHasSomethingToSay: o,
			addBaseInfo: i,
			addRequestInfo: a,
			addClientInfo: s,
			addPluginInfo: u,
			addBody: c,
			scrubPayload: f,
		};
	},
	function(t, e, n) {
		'use strict';
		function r() {
			return l;
		}
		function o() {
			return null;
		}
		function i(t) {
			var e = {};
			return (
				(e._stackFrame = t),
				(e.url = t.fileName),
				(e.line = t.lineNumber),
				(e.func = t.functionName),
				(e.column = t.columnNumber),
				(e.args = t.args),
				(e.context = o(e.url, e.line)),
				e
			);
		}
		function a(t) {
			function e() {
				var e,
					n = [];
				if (t.stack) e = t;
				else
					try {
						throw t;
					} catch (t) {
						e = t;
					}
				try {
					n = c.parse(e);
				} catch (t) {
					n = [];
				}
				for (var r = [], o = 0; o < n.length; o++) r.push(new i(n[o]));
				return r;
			}
			return { stack: e(), message: t.message, name: t.name, rawStack: t.stack, rawException: t };
		}
		function s(t) {
			return new a(t);
		}
		function u(t) {
			if (!t || !t.match) return ['Unknown error. There was no error message to display.', ''];
			var e = t.match(p),
				n = '(unknown)';
			return (
				e &&
					((n = e[e.length - 1]),
					(t = t.replace((e[e.length - 2] || '') + n + ':', '')),
					(t = t.replace(/(^[\s]+|[\s]+$)/g, ''))),
				[n, t]
			);
		}
		var c = n(20),
			l = '?',
			p = new RegExp('^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): ');
		t.exports = {
			guessFunctionName: r,
			guessErrorClass: u,
			gatherContext: o,
			parse: s,
			Stack: a,
			Frame: i,
		};
	},
	function(t, e, n) {
		var r, o, i;
		!(function(a, s) {
			'use strict';
			(o = [n(21)]),
				(r = s),
				(i = 'function' == typeof r ? r.apply(e, o) : r),
				!(void 0 !== i && (t.exports = i));
		})(this, function(t) {
			'use strict';
			function e(t, e, n) {
				if ('function' == typeof Array.prototype.map) return t.map(e, n);
				for (var r = new Array(t.length), o = 0; o < t.length; o++) r[o] = e.call(n, t[o]);
				return r;
			}
			function n(t, e, n) {
				if ('function' == typeof Array.prototype.filter) return t.filter(e, n);
				for (var r = [], o = 0; o < t.length; o++) e.call(n, t[o]) && r.push(t[o]);
				return r;
			}
			var r = /(^|@)\S+\:\d+/,
				o = /^\s*at .*(\S+\:\d+|\(native\))/m,
				i = /^(eval@)?(\[native code\])?$/;
			return {
				parse: function(t) {
					if ('undefined' != typeof t.stacktrace || 'undefined' != typeof t['opera#sourceloc'])
						return this.parseOpera(t);
					if (t.stack && t.stack.match(o)) return this.parseV8OrIE(t);
					if (t.stack) return this.parseFFOrSafari(t);
					throw new Error('Cannot parse given Error object');
				},
				extractLocation: function(t) {
					if (t.indexOf(':') === -1) return [t];
					var e = t.replace(/[\(\)\s]/g, '').split(':'),
						n = e.pop(),
						r = e[e.length - 1];
					if (!isNaN(parseFloat(r)) && isFinite(r)) {
						var o = e.pop();
						return [e.join(':'), o, n];
					}
					return [e.join(':'), n, void 0];
				},
				parseV8OrIE: function(r) {
					var i = n(
						r.stack.split('\n'),
						function(t) {
							return !!t.match(o);
						},
						this
					);
					return e(
						i,
						function(e) {
							e.indexOf('(eval ') > -1 &&
								(e = e.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ''));
							var n = e
									.replace(/^\s+/, '')
									.replace(/\(eval code/g, '(')
									.split(/\s+/)
									.slice(1),
								r = this.extractLocation(n.pop()),
								o = n.join(' ') || void 0,
								i = 'eval' === r[0] ? void 0 : r[0];
							return new t(o, void 0, i, r[1], r[2], e);
						},
						this
					);
				},
				parseFFOrSafari: function(r) {
					var o = n(
						r.stack.split('\n'),
						function(t) {
							return !t.match(i);
						},
						this
					);
					return e(
						o,
						function(e) {
							if (
								(e.indexOf(' > eval') > -1 &&
									(e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1')),
								e.indexOf('@') === -1 && e.indexOf(':') === -1)
							)
								return new t(e);
							var n = e.split('@'),
								r = this.extractLocation(n.pop()),
								o = n.shift() || void 0;
							return new t(o, void 0, r[0], r[1], r[2], e);
						},
						this
					);
				},
				parseOpera: function(t) {
					return !t.stacktrace ||
						(t.message.indexOf('\n') > -1 &&
							t.message.split('\n').length > t.stacktrace.split('\n').length)
						? this.parseOpera9(t)
						: t.stack
							? this.parseOpera11(t)
							: this.parseOpera10(t);
				},
				parseOpera9: function(e) {
					for (
						var n = /Line (\d+).*script (?:in )?(\S+)/i,
							r = e.message.split('\n'),
							o = [],
							i = 2,
							a = r.length;
						i < a;
						i += 2
					) {
						var s = n.exec(r[i]);
						s && o.push(new t(void 0, void 0, s[2], s[1], void 0, r[i]));
					}
					return o;
				},
				parseOpera10: function(e) {
					for (
						var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
							r = e.stacktrace.split('\n'),
							o = [],
							i = 0,
							a = r.length;
						i < a;
						i += 2
					) {
						var s = n.exec(r[i]);
						s && o.push(new t(s[3] || void 0, void 0, s[2], s[1], void 0, r[i]));
					}
					return o;
				},
				parseOpera11: function(o) {
					var i = n(
						o.stack.split('\n'),
						function(t) {
							return !!t.match(r) && !t.match(/^Error created at/);
						},
						this
					);
					return e(
						i,
						function(e) {
							var n,
								r = e.split('@'),
								o = this.extractLocation(r.pop()),
								i = r.shift() || '',
								a =
									i.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') ||
									void 0;
							i.match(/\(([^\)]*)\)/) && (n = i.replace(/^[^\(]+\(([^\)]*)\)$/, '$1'));
							var s = void 0 === n || '[arguments not available]' === n ? void 0 : n.split(',');
							return new t(a, s, o[0], o[1], o[2], e);
						},
						this
					);
				},
			};
		});
	},
	function(t, e, n) {
		var r, o, i;
		!(function(n, a) {
			'use strict';
			(o = []),
				(r = a),
				(i = 'function' == typeof r ? r.apply(e, o) : r),
				!(void 0 !== i && (t.exports = i));
		})(this, function() {
			'use strict';
			function t(t) {
				return !isNaN(parseFloat(t)) && isFinite(t);
			}
			function e(t, e, n, r, o, i) {
				void 0 !== t && this.setFunctionName(t),
					void 0 !== e && this.setArgs(e),
					void 0 !== n && this.setFileName(n),
					void 0 !== r && this.setLineNumber(r),
					void 0 !== o && this.setColumnNumber(o),
					void 0 !== i && this.setSource(i);
			}
			return (
				(e.prototype = {
					getFunctionName: function() {
						return this.functionName;
					},
					setFunctionName: function(t) {
						this.functionName = String(t);
					},
					getArgs: function() {
						return this.args;
					},
					setArgs: function(t) {
						if ('[object Array]' !== Object.prototype.toString.call(t))
							throw new TypeError('Args must be an Array');
						this.args = t;
					},
					getFileName: function() {
						return this.fileName;
					},
					setFileName: function(t) {
						this.fileName = String(t);
					},
					getLineNumber: function() {
						return this.lineNumber;
					},
					setLineNumber: function(e) {
						if (!t(e)) throw new TypeError('Line Number must be a Number');
						this.lineNumber = Number(e);
					},
					getColumnNumber: function() {
						return this.columnNumber;
					},
					setColumnNumber: function(e) {
						if (!t(e)) throw new TypeError('Column Number must be a Number');
						this.columnNumber = Number(e);
					},
					getSource: function() {
						return this.source;
					},
					setSource: function(t) {
						this.source = String(t);
					},
					toString: function() {
						var e = this.getFunctionName() || '{anonymous}',
							n = '(' + (this.getArgs() || []).join(',') + ')',
							r = this.getFileName() ? '@' + this.getFileName() : '',
							o = t(this.getLineNumber()) ? ':' + this.getLineNumber() : '',
							i = t(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
						return e + n + r + o + i;
					},
				}),
				e
			);
		});
	},
	function(t, e, n) {
		'use strict';
		function r(t, e, n) {
			var r = e.payload || {};
			r.body && delete r.body;
			var o = u.merge(t.data, r);
			t._isUncaught && (o._isUncaught = !0),
				t._originalArgs && (o._originalArgs = t._originalArgs),
				n(null, o);
		}
		function o(t, e, n) {
			t.telemetryEvents && u.set(t, 'data.body.telemetry', t.telemetryEvents), n(null, t);
		}
		function i(t, e, n) {
			if (!t.message) return void n(null, t);
			var r = 'data.body.trace_chain.0',
				o = u.get(t, r);
			if ((o || ((r = 'data.body.trace'), (o = u.get(t, r))), o)) {
				if (!o.exception || !o.exception.description)
					return u.set(t, r + '.exception.description', t.message), void n(null, t);
				var i = u.get(t, r + '.extra') || {},
					a = u.merge(i, { message: t.message });
				u.set(t, r + '.extra', a);
			}
			n(null, t);
		}
		function a(t) {
			return function(e, n, r) {
				var o = u.merge(e);
				try {
					u.isFunction(n.transform) && n.transform(o.data);
				} catch (o) {
					return (
						(n.transform = null),
						t.error(
							'Error while calling custom transform() function. Removing custom transform().',
							o
						),
						void r(null, e)
					);
				}
				r(null, o);
			};
		}
		function s(t, e, n) {
			if (!e.sendConfig) return n(null, t);
			var r = '_rollbarConfig',
				o = u.get(t, 'data.custom') || {};
			(o[r] = e), (t.data.custom = o), n(null, t);
		}
		var u = n(5);
		t.exports = {
			itemToPayload: r,
			addTelemetryData: o,
			addMessageWithError: i,
			userTransform: a,
			addConfigToPayload: s,
		};
	},
	function(t, e, n) {
		'use strict';
		function r(t, e) {
			return !o.get(e, 'plugins.jquery.ignoreAjaxErrors') || !o.get(t, 'body.message.extra.isAjax');
		}
		var o = n(5);
		t.exports = { checkIgnore: r };
	},
	function(t, e, n) {
		'use strict';
		function r(t, e) {
			var n = t.level,
				r = c.LEVELS[n] || 0,
				o = e.reportLevel,
				i = c.LEVELS[o] || 0;
			return !(r < i);
		}
		function o(t) {
			return function(e, n) {
				var r = !!e._isUncaught;
				delete e._isUncaught;
				var o = e._originalArgs;
				delete e._originalArgs;
				try {
					c.isFunction(n.onSendCallback) && n.onSendCallback(r, o, e);
				} catch (e) {
					(n.onSendCallback = null), t.error('Error while calling onSendCallback, removing', e);
				}
				try {
					if (c.isFunction(n.checkIgnore) && n.checkIgnore(r, o, e)) return !1;
				} catch (e) {
					(n.checkIgnore = null), t.error('Error while calling custom checkIgnore(), removing', e);
				}
				return !0;
			};
		}
		function i(t) {
			return function(e, n) {
				return !s(e, n, 'blacklist', t);
			};
		}
		function a(t) {
			return function(e, n) {
				return s(e, n, 'whitelist', t);
			};
		}
		function s(t, e, n, r) {
			var o = !1;
			'blacklist' === n && (o = !0);
			var i, a, s, u, l, p, f, h, d, m;
			try {
				if (
					((i = o ? e.hostBlackList : e.hostWhiteList),
					(f = i && i.length),
					(a = c.get(t, 'body.trace')),
					!i || 0 === f)
				)
					return !o;
				if (!a || !a.frames || 0 === a.frames.length) return !o;
				for (l = a.frames.length, d = 0; d < l; d++) {
					if (((s = a.frames[d]), (u = s.filename), !c.isType(u, 'string'))) return !o;
					for (m = 0; m < f; m++) if (((p = i[m]), (h = new RegExp(p)), h.test(u))) return !0;
				}
			} catch (t) {
				o ? (e.hostBlackList = null) : (e.hostWhiteList = null);
				var g = o ? 'hostBlackList' : 'hostWhiteList';
				return (
					r.error(
						"Error while reading your configuration's " + g + ' option. Removing custom ' + g + '.',
						t
					),
					!o
				);
			}
			return !1;
		}
		function u(t) {
			return function(e, n) {
				var r, o, i, a, s, u, l, p, f;
				try {
					if (((s = !1), (i = n.ignoredMessages), !i || 0 === i.length)) return !0;
					if (
						((l = e.body),
						(p = c.get(l, 'trace.exception.message')),
						(f = c.get(l, 'message.body')),
						(r = p || f),
						!r)
					)
						return !0;
					for (a = i.length, o = 0; o < a && ((u = new RegExp(i[o], 'gi')), !(s = u.test(r))); o++);
				} catch (e) {
					(n.ignoredMessages = null),
						t.error(
							"Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages."
						);
				}
				return !s;
			};
		}
		var c = n(5);
		t.exports = {
			checkLevel: r,
			userCheckIgnore: o,
			urlIsNotBlacklisted: i,
			urlIsWhitelisted: a,
			messageIsIgnored: u,
		};
	},
	function(t, e, n) {
		'use strict';
		function r(t, e, n, r, o) {
			var i = t[e];
			(t[e] = n(i)), r && r[o].push([t, e, i]);
		}
		function o(t, e) {
			for (var n; t[e].length; ) (n = t[e].shift()), (n[0][n[1]] = n[2]);
		}
		function i(t, e, n, r, o) {
			var i = t.autoInstrument;
			t.enabled === !1 || i === !1
				? (this.autoInstrument = {})
				: (a.isType(i, 'object') || (i = c), (this.autoInstrument = a.merge(c, i))),
				(this.scrubTelemetryInputs = !!t.scrubTelemetryInputs),
				(this.telemetryScrubber = t.telemetryScrubber),
				(this.telemeter = e),
				(this.rollbar = n),
				(this._window = r || {}),
				(this._document = o || {}),
				(this.replacements = { network: [], log: [], navigation: [], connectivity: [] }),
				(this.eventRemovers = { dom: [], connectivity: [] }),
				(this._location = this._window.location),
				(this._lastHref = this._location && this._location.href);
		}
		var a = n(5),
			s = n(17),
			u = n(26),
			c = {
				network: !0,
				networkResponseHeaders: !1,
				networkResponseBody: !1,
				networkRequestBody: !1,
				log: !0,
				dom: !0,
				navigation: !0,
				connectivity: !0,
			};
		(i.prototype.configure = function(t) {
			var e = t.autoInstrument,
				n = a.merge(this.autoInstrument);
			t.enabled === !1 || e === !1
				? (this.autoInstrument = {})
				: (a.isType(e, 'object') || (e = c), (this.autoInstrument = a.merge(c, e))),
				this.instrument(n),
				void 0 !== t.scrubTelemetryInputs && (this.scrubTelemetryInputs = !!t.scrubTelemetryInputs),
				void 0 !== t.telemetryScrubber && (this.telemetryScrubber = t.telemetryScrubber);
		}),
			(i.prototype.instrument = function(t) {
				!this.autoInstrument.network || (t && t.network)
					? !this.autoInstrument.network && t && t.network && this.deinstrumentNetwork()
					: this.instrumentNetwork(),
					!this.autoInstrument.log || (t && t.log)
						? !this.autoInstrument.log && t && t.log && this.deinstrumentConsole()
						: this.instrumentConsole(),
					!this.autoInstrument.dom || (t && t.dom)
						? !this.autoInstrument.dom && t && t.dom && this.deinstrumentDom()
						: this.instrumentDom(),
					!this.autoInstrument.navigation || (t && t.navigation)
						? !this.autoInstrument.navigation && t && t.navigation && this.deinstrumentNavigation()
						: this.instrumentNavigation(),
					!this.autoInstrument.connectivity || (t && t.connectivity)
						? !this.autoInstrument.connectivity &&
						  t &&
						  t.connectivity &&
						  this.deinstrumentConnectivity()
						: this.instrumentConnectivity();
			}),
			(i.prototype.deinstrumentNetwork = function() {
				o(this.replacements, 'network');
			}),
			(i.prototype.instrumentNetwork = function() {
				function t(t, n) {
					t in n &&
						a.isFunction(n[t]) &&
						r(n, t, function(t) {
							return e.rollbar.wrap(t);
						});
				}
				var e = this;
				if ('XMLHttpRequest' in this._window) {
					var n = this._window.XMLHttpRequest.prototype;
					r(
						n,
						'open',
						function(t) {
							return function(e, n) {
								return (
									a.isType(n, 'string') &&
										(this.__rollbar_xhr = {
											method: e,
											url: n,
											status_code: null,
											start_time_ms: a.now(),
											end_time_ms: null,
										}),
									t.apply(this, arguments)
								);
							};
						},
						this.replacements,
						'network'
					),
						r(
							n,
							'send',
							function(n) {
								return function(o) {
									function i() {
										if (s.__rollbar_xhr && (1 === s.readyState || 4 === s.readyState)) {
											if (null === s.__rollbar_xhr.status_code) {
												s.__rollbar_xhr.status_code = 0;
												var t = null;
												e.autoInstrument.networkRequestBody && (t = o),
													(s.__rollbar_event = e.telemeter.captureNetwork(
														s.__rollbar_xhr,
														'xhr',
														void 0,
														t
													));
											}
											if (1 === s.readyState) s.__rollbar_xhr.start_time_ms = a.now();
											else {
												s.__rollbar_xhr.end_time_ms = a.now();
												var n = null;
												if (e.autoInstrument.networkResponseHeaders) {
													var r = e.autoInstrument.networkResponseHeaders;
													n = {};
													try {
														var i, u;
														if (r === !0) {
															var c = s.getAllResponseHeaders();
															if (c) {
																var l,
																	p,
																	f = c.trim().split(/[\r\n]+/);
																for (u = 0; u < f.length; u++)
																	(l = f[u].split(': ')),
																		(i = l.shift()),
																		(p = l.join(': ')),
																		(n[i] = p);
															}
														} else
															for (u = 0; u < r.length; u++)
																(i = r[u]), (n[i] = s.getResponseHeader(i));
													} catch (t) {}
												}
												var h = null;
												if (e.autoInstrument.networkResponseBody)
													try {
														h = s.responseText;
													} catch (t) {}
												var d = null;
												(h || n) && ((d = {}), h && (d.body = h), n && (d.headers = n)),
													d && (s.__rollbar_xhr.response = d);
											}
											try {
												var m = s.status;
												(m = 1223 === m ? 204 : m),
													(s.__rollbar_xhr.status_code = m),
													(s.__rollbar_event.level = e.telemeter.levelFromStatus(m));
											} catch (t) {}
										}
									}
									var s = this;
									return (
										t('onload', s),
										t('onerror', s),
										t('onprogress', s),
										'onreadystatechange' in s && a.isFunction(s.onreadystatechange)
											? r(s, 'onreadystatechange', function(t) {
													return e.rollbar.wrap(t, void 0, i);
											  })
											: (s.onreadystatechange = i),
										n.apply(this, arguments)
									);
								};
							},
							this.replacements,
							'network'
						);
				}
				'fetch' in this._window &&
					r(
						this._window,
						'fetch',
						function(t) {
							return function(n, r) {
								for (var o = new Array(arguments.length), i = 0, s = o.length; i < s; i++)
									o[i] = arguments[i];
								var u,
									c = o[0],
									l = 'GET';
								a.isType(c, 'string') ? (u = c) : c && ((u = c.url), c.method && (l = c.method)),
									o[1] && o[1].method && (l = o[1].method);
								var p = {
										method: l,
										url: u,
										status_code: null,
										start_time_ms: a.now(),
										end_time_ms: null,
									},
									f = null;
								return (
									e.autoInstrument.networkRequestBody &&
										(o[1] && o[1].body
											? (f = o[1].body)
											: o[0] && !a.isType(o[0], 'string') && o[0].body && (f = o[0].body)),
									e.telemeter.captureNetwork(p, 'fetch', void 0, f),
									t.apply(this, o).then(function(t) {
										(p.end_time_ms = a.now()), (p.status_code = t.status);
										var n = null;
										if (e.autoInstrument.networkResponseHeaders) {
											var r = e.autoInstrument.networkResponseHeaders;
											n = {};
											try {
												if (r === !0);
												else
													for (var o = 0; o < r.length; o++) {
														var i = r[o];
														n[i] = t.headers.get(i);
													}
											} catch (t) {}
										}
										var s = null;
										return n && (s = { headers: n }), s && (p.response = s), t;
									})
								);
							};
						},
						this.replacements,
						'network'
					);
			}),
			(i.prototype.deinstrumentConsole = function() {
				if ('console' in this._window && this._window.console.log)
					for (var t; this.replacements.log.length; )
						(t = this.replacements.log.shift()), (this._window.console[t[0]] = t[1]);
			}),
			(i.prototype.instrumentConsole = function() {
				function t(t) {
					var r = n[t],
						o = n,
						i = 'warn' === t ? 'warning' : t;
					(n[t] = function() {
						var t = Array.prototype.slice.call(arguments),
							n = a.formatArgsAsString(t);
						e.telemeter.captureLog(n, i), r && Function.prototype.apply.call(r, o, t);
					}),
						e.replacements.log.push([t, r]);
				}
				if ('console' in this._window && this._window.console.log)
					for (
						var e = this,
							n = this._window.console,
							r = ['debug', 'info', 'warn', 'error', 'log'],
							o = 0,
							i = r.length;
						o < i;
						o++
					)
						t(r[o]);
			}),
			(i.prototype.deinstrumentDom = function() {
				('addEventListener' in this._window || 'attachEvent' in this._window) &&
					this.removeListeners('dom');
			}),
			(i.prototype.instrumentDom = function() {
				if ('addEventListener' in this._window || 'attachEvent' in this._window) {
					var t = this.handleClick.bind(this),
						e = this.handleBlur.bind(this);
					this.addListener('dom', this._window, 'click', 'onclick', t, !0),
						this.addListener('dom', this._window, 'blur', 'onfocusout', e, !0);
				}
			}),
			(i.prototype.handleClick = function(t) {
				try {
					var e = u.getElementFromEvent(t, this._document),
						n = e && e.tagName,
						r = u.isDescribedElement(e, 'a') || u.isDescribedElement(e, 'button');
					n && (r || u.isDescribedElement(e, 'input', ['button', 'submit']))
						? this.captureDomEvent('click', e)
						: u.isDescribedElement(e, 'input', ['checkbox', 'radio']) &&
						  this.captureDomEvent('input', e, e.value, e.checked);
				} catch (t) {}
			}),
			(i.prototype.handleBlur = function(t) {
				try {
					var e = u.getElementFromEvent(t, this._document);
					e &&
						e.tagName &&
						(u.isDescribedElement(e, 'textarea')
							? this.captureDomEvent('input', e, e.value)
							: u.isDescribedElement(e, 'select') && e.options && e.options.length
								? this.handleSelectInputChanged(e)
								: u.isDescribedElement(e, 'input') &&
								  !u.isDescribedElement(e, 'input', [
										'button',
										'submit',
										'hidden',
										'checkbox',
										'radio',
								  ]) &&
								  this.captureDomEvent('input', e, e.value));
				} catch (t) {}
			}),
			(i.prototype.handleSelectInputChanged = function(t) {
				if (t.multiple)
					for (var e = 0; e < t.options.length; e++)
						t.options[e].selected && this.captureDomEvent('input', t, t.options[e].value);
				else
					t.selectedIndex >= 0 &&
						t.options[t.selectedIndex] &&
						this.captureDomEvent('input', t, t.options[t.selectedIndex].value);
			}),
			(i.prototype.captureDomEvent = function(t, e, n, r) {
				if (void 0 !== n)
					if (this.scrubTelemetryInputs || 'password' === u.getElementType(e)) n = '[scrubbed]';
					else if (this.telemetryScrubber) {
						var o = u.describeElement(e);
						this.telemetryScrubber(o) && (n = '[scrubbed]');
					}
				var i = u.elementArrayToString(u.treeToArray(e));
				this.telemeter.captureDom(t, i, n, r);
			}),
			(i.prototype.deinstrumentNavigation = function() {
				var t = this._window.chrome,
					e = t && t.app && t.app.runtime,
					n = !e && this._window.history && this._window.history.pushState;
				n && o(this.replacements, 'navigation');
			}),
			(i.prototype.instrumentNavigation = function() {
				var t = this._window.chrome,
					e = t && t.app && t.app.runtime,
					n = !e && this._window.history && this._window.history.pushState;
				if (n) {
					var o = this;
					r(
						this._window,
						'onpopstate',
						function(t) {
							return function() {
								var e = o._location.href;
								o.handleUrlChange(o._lastHref, e), t && t.apply(this, arguments);
							};
						},
						this.replacements,
						'navigation'
					),
						r(
							this._window.history,
							'pushState',
							function(t) {
								return function() {
									var e = arguments.length > 2 ? arguments[2] : void 0;
									return e && o.handleUrlChange(o._lastHref, e + ''), t.apply(this, arguments);
								};
							},
							this.replacements,
							'navigation'
						);
				}
			}),
			(i.prototype.handleUrlChange = function(t, e) {
				var n = s.parse(this._location.href),
					r = s.parse(e),
					o = s.parse(t);
				(this._lastHref = e),
					n.protocol === r.protocol && n.host === r.host && (e = r.path + (r.hash || '')),
					n.protocol === o.protocol && n.host === o.host && (t = o.path + (o.hash || '')),
					this.telemeter.captureNavigation(t, e);
			}),
			(i.prototype.deinstrumentConnectivity = function() {
				('addEventListener' in this._window || 'body' in this._document) &&
					(this._window.addEventListener
						? this.removeListeners('connectivity')
						: o(this.replacements, 'connectivity'));
			}),
			(i.prototype.instrumentConnectivity = function() {
				if ('addEventListener' in this._window || 'body' in this._document)
					if (this._window.addEventListener)
						this.addListener(
							'connectivity',
							this._window,
							'online',
							void 0,
							function() {
								this.telemeter.captureConnectivityChange('online');
							}.bind(this),
							!0
						),
							this.addListener(
								'connectivity',
								this._window,
								'offline',
								void 0,
								function() {
									this.telemeter.captureConnectivityChange('offline');
								}.bind(this),
								!0
							);
					else {
						var t = this;
						r(
							this._document.body,
							'ononline',
							function(e) {
								return function() {
									t.telemeter.captureConnectivityChange('online'), e && e.apply(this, arguments);
								};
							},
							this.replacements,
							'connectivity'
						),
							r(
								this._document.body,
								'onoffline',
								function(e) {
									return function() {
										t.telemeter.captureConnectivityChange('offline'), e && e.apply(this, arguments);
									};
								},
								this.replacements,
								'connectivity'
							);
					}
			}),
			(i.prototype.addListener = function(t, e, n, r, o, i) {
				e.addEventListener
					? (e.addEventListener(n, o, i),
					  this.eventRemovers[t].push(function() {
							e.removeEventListener(n, o, i);
					  }))
					: r &&
					  (e.attachEvent(r, o),
					  this.eventRemovers[t].push(function() {
							e.detachEvent(r, o);
					  }));
			}),
			(i.prototype.removeListeners = function(t) {
				for (var e; this.eventRemovers[t].length; ) (e = this.eventRemovers[t].shift())();
			}),
			(t.exports = i);
	},
	function(t, e) {
		'use strict';
		function n(t) {
			return (t.getAttribute('type') || '').toLowerCase();
		}
		function r(t, e, r) {
			if (t.tagName.toLowerCase() !== e.toLowerCase()) return !1;
			if (!r) return !0;
			t = n(t);
			for (var o = 0; o < r.length; o++) if (r[o] === t) return !0;
			return !1;
		}
		function o(t, e) {
			return t.target
				? t.target
				: e && e.elementFromPoint
					? e.elementFromPoint(t.clientX, t.clientY)
					: void 0;
		}
		function i(t) {
			for (var e, n = 5, r = [], o = 0; t && o < n && ((e = u(t)), 'html' !== e.tagName); o++)
				r.unshift(e), (t = t.parentNode);
			return r;
		}
		function a(t) {
			for (
				var e, n, r = 80, o = ' > ', i = o.length, a = [], u = 0, c = t.length - 1;
				c >= 0;
				c--
			) {
				if (((e = s(t[c])), (n = u + a.length * i + e.length), c < t.length - 1 && n >= r + 3)) {
					a.unshift('...');
					break;
				}
				a.unshift(e), (u += e.length);
			}
			return a.join(o);
		}
		function s(t) {
			if (!t || !t.tagName) return '';
			var e = [t.tagName];
			t.id && e.push('#' + t.id), t.classes && e.push('.' + t.classes.join('.'));
			for (var n = 0; n < t.attributes.length; n++)
				e.push('[' + t.attributes[n].key + '="' + t.attributes[n].value + '"]');
			return e.join('');
		}
		function u(t) {
			if (!t || !t.tagName) return null;
			var e,
				n,
				r,
				o,
				i = {};
			(i.tagName = t.tagName.toLowerCase()),
				t.id && (i.id = t.id),
				(e = t.className),
				e && 'string' == typeof e && (i.classes = e.split(/\s+/));
			var a = ['type', 'name', 'title', 'alt'];
			for (i.attributes = [], o = 0; o < a.length; o++)
				(n = a[o]), (r = t.getAttribute(n)), r && i.attributes.push({ key: n, value: r });
			return i;
		}
		t.exports = {
			describeElement: u,
			descriptionToString: s,
			elementArrayToString: a,
			treeToArray: i,
			getElementFromEvent: o,
			isDescribedElement: r,
			getElementType: n,
		};
	},
]);
