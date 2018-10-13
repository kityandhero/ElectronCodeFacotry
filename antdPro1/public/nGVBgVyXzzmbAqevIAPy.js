!(function(t, e) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
			? define([], e)
			: 'object' == typeof exports
				? (exports.BizCharts = e())
				: (t.BizCharts = e());
})(this, function() {
	return (function(t) {
		function e(r) {
			if (n[r]) return n[r].exports;
			var i = (n[r] = { i: r, l: !1, exports: {} });
			return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
		}
		var n = {};
		return (
			(e.m = t),
			(e.c = n),
			(e.i = function(t) {
				return t;
			}),
			(e.d = function(t, n, r) {
				e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
			}),
			(e.n = function(t) {
				var n =
					t && t.__esModule
						? function() {
								return t.default;
						  }
						: function() {
								return t;
						  };
				return e.d(n, 'a', n), n;
			}),
			(e.o = function(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e);
			}),
			(e.p = ''),
			e((e.s = 451))
		);
	})([
		function(t, e, n) {
			function r(t, e) {
				for (var n in e)
					e.hasOwnProperty(n) && 'constructor' !== n && void 0 !== e[n] && (t[n] = e[n]);
			}
			function i(t, e, n) {
				n = n || 0;
				for (var r in e)
					if (e.hasOwnProperty(r)) {
						var o = e[r];
						null !== o && u.isPlainObject(o)
							? (u.isPlainObject(t[r]) || (t[r] = {}), s > n ? i(t[r], e[r], n + 1) : (t[r] = e[r]))
							: u.isArray(o)
								? ((t[r] = []), (t[r] = t[r].concat(o)))
								: void 0 !== o && (t[r] = e[r]);
					}
			}
			var o = n(2),
				a = o.CommonUtil,
				s = 5,
				u = a.assign(
					{
						cloneDeep: n(411),
						filter: n(413),
						flatten: n(132),
						groupBy: n(415),
						indexOf: n(416),
						isDate: n(418),
						isEmpty: n(419),
						isEqualWith: n(420),
						isFinite: n(421),
						isNaN: n(424),
						isNull: n(425),
						isPlainObject: n(427),
						lowerFirst: n(430),
						map: n(431),
						maxBy: n(432),
						minBy: n(433),
						pick: n(434),
						reduce: n(436),
						replace: n(437),
						round: n(438),
						union: n(440),
						uniq: n(441),
						upperCase: n(442),
						snapEqual: function(t, e) {
							return 0.001 > Math.abs(t - e);
						},
						fixedBase: function(t, e) {
							var n = '' + e,
								r = n.indexOf('.');
							if (-1 === r) return Math.round(t);
							var i = n.substr(r + 1).length;
							return i > 20 && (i = 20), parseFloat(t.toFixed(i));
						},
						mix: function(t, e, n, i) {
							return e && r(t, e), n && r(t, n), i && r(t, i), t;
						},
						inArray: function(t, e) {
							return t.indexOf(e) >= 0;
						},
						wrapBehavior: function(t, e) {
							if (t['_wrap_' + e]) return t['_wrap_' + e];
							var n = function(n) {
								t[e](n);
							};
							return (t['_wrap_' + e] = n), n;
						},
						getWrapBehavior: function(t, e) {
							return t['_wrap_' + e];
						},
						toAllPadding: function(t) {
							var e = 0,
								n = 0,
								r = 0,
								i = 0;
							return (
								u.isNumber(t) || u.isString(t)
									? (e = n = r = i = t)
									: u.isArray(t)
										? ((e = t[0]),
										  (r = u.isNil(t[1]) ? t[0] : t[1]),
										  (i = u.isNil(t[2]) ? t[0] : t[2]),
										  (n = u.isNil(t[3]) ? r : t[3]))
										: u.isObject(t) &&
										  ((e = t.top || 0),
										  (r = t.right || 0),
										  (i = t.bottom || 0),
										  (n = t.left || 0)),
								[e, r, i, n]
							);
						},
						substitute: function(t, e) {
							return t && e
								? t.replace(/\\?\{([^{}]+)\}/g, function(t, n) {
										return '\\' === t.charAt(0) ? t.slice(1) : void 0 === e[n] ? '' : e[n];
								  })
								: t;
						},
					},
					a
				);
			(u.deepMix = function() {
				for (var t = u.toArray(arguments), e = t[0], n = 1; t.length > n; n++) {
					i(e, t[n]);
				}
				return e;
			}),
				(u.Array = {
					merge: function(t) {
						for (var e = [], n = 0; t.length > n; n++) e = e.concat(t[n]);
						return e;
					},
					values: function(t, e) {
						for (var n = [], r = {}, i = 0; t.length > i; i++) {
							var o = t[i],
								a = o[e];
							u.isNil(a) ||
								(u.isArray(a) || (a = [a]),
								u.each(a, function(t) {
									r[t] || (n.push(t), (r[t] = !0));
								}));
						}
						return n;
					},
					getRange: function(t) {
						if (
							((t = u.filter(t, function(t) {
								return !isNaN(t);
							})),
							!t.length)
						)
							return { min: 0, max: 0 };
						if (u.isArray(t[0])) {
							for (var e = [], n = 0; t.length > n; n++) e = e.concat(t[n]);
							t = e;
						}
						var r = Math.max.apply(null, t);
						return { min: Math.min.apply(null, t), max: r };
					},
					firstValue: function(t, e) {
						for (var n = null, r = 0; t.length > r; r++) {
							var i = t[r],
								o = i[e];
							if (!u.isNil(o)) {
								n = u.isArray(o) ? o[0] : o;
								break;
							}
						}
						return n;
					},
					group: function(t, e) {
						if (!e) return [t];
						var n = u.Array.groupToMap(t, e),
							r = [];
						for (var i in n) r.push(n[i]);
						return r;
					},
					groupToMap: function(t, e) {
						if (!e) return { 0: t };
						if (!u.isFunction(e)) {
							var n = u.isArray(e) ? e : e.replace(/\s+/g, '').split('*');
							e = function(t) {
								for (var e = '_', r = 0, i = n.length; i > r; r++) e += t[n[r]] && '' + t[n[r]];
								return e;
							};
						}
						return u.groupBy(t, e);
					},
					remove: a.remove,
				}),
				(t.exports = u);
		},
		function(t, e, n) {
			function r(t) {
				var e = {};
				(e = i.isObject(t) ? t : -1 !== i.indexOf(Object.keys(o), t) ? o[t] : o.default),
					i.deepMix(a, e);
			}
			var i = n(0),
				o = n(224),
				a = {
					version: '3.1.2',
					trackable: !0,
					animate: !0,
					snapArray: [0, 1, 2, 4, 5, 10],
					snapCountArray: [0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10],
					widthRatio: { column: 0.5, rose: 0.9999999, multiplePie: 1 / 1.3 },
					showSinglePoint: !1,
					connectNulls: !1,
					scales: {},
				};
			r('default'), (a.setTheme = r), (t.exports = a);
		},
		function(t, e, n) {
			!(function(e, n) {
				t.exports = n();
			})(0, function() {
				return (function(t) {
					function e(r) {
						if (n[r]) return n[r].exports;
						var i = (n[r] = { i: r, l: !1, exports: {} });
						return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
					}
					var n = {};
					return (
						(e.m = t),
						(e.c = n),
						(e.d = function(t, n, r) {
							e.o(t, n) ||
								Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
						}),
						(e.n = function(t) {
							var n =
								t && t.__esModule
									? function() {
											return t.default;
									  }
									: function() {
											return t;
									  };
							return e.d(n, 'a', n), n;
						}),
						(e.o = function(t, e) {
							return Object.prototype.hasOwnProperty.call(t, e);
						}),
						(e.p = ''),
						e((e.s = 114))
					);
				})([
					function(t, e, n) {
						var r = n(17),
							i = n(88),
							o = {};
						r.merge(o, r, i, {
							mixin: function(t, e) {
								var n = t.CFG ? 'CFG' : 'ATTRS';
								if (t && e) {
									(t._mixins = e), (t[n] = t[n] || {});
									var r = {};
									o.each(e, function(e) {
										o.augment(t, e);
										var i = e[n];
										i && o.merge(r, i);
									}),
										(t[n] = o.merge(r, t[n]));
								}
							},
						}),
							(t.exports = o);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(91),
							o = n(2),
							a = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(a.ATTRS = {}),
							r.extend(a, i),
							r.augment(a, {
								isShape: !0,
								createPath: function() {},
								afterPath: function() {},
								drawInner: function(t) {
									var e = this,
										n = e.__attrs;
									e.createPath(t);
									var i = t.globalAlpha;
									if (e.hasFill()) {
										var o = n.fillOpacity;
										r.isNil(o) || 1 === o
											? t.fill()
											: ((t.globalAlpha = o), t.fill(), (t.globalAlpha = i));
									}
									if (e.hasStroke()) {
										if (e.__attrs.lineWidth > 0) {
											var a = n.strokeOpacity;
											r.isNil(a) || 1 === a || (t.globalAlpha = a), t.stroke();
										}
									}
									e.afterPath(t);
								},
								isPointInPath: function() {
									return !1;
								},
								isHitBox: function() {
									return !0;
								},
								isHit: function(t, e) {
									var n = this,
										r = [t, e, 1];
									if ((n.invert(r), n.isHitBox())) {
										var i = n.getBBox();
										if (i && !o.box(i.minX, i.maxX, i.minY, i.maxY, r[0], r[1])) return !1;
									}
									var a = n.__attrs.clip;
									return a
										? !!a.inside(t, e) && n.isPointInPath(r[0], r[1])
										: n.isPointInPath(r[0], r[1]);
								},
								calculateBox: function() {
									return null;
								},
								getHitLineWidth: function() {
									var t = this.__attrs,
										e = t.lineAppendWidth || 0;
									return (t.lineWidth || 0) + e;
								},
								clearTotalMatrix: function() {
									(this.__cfg.totalMatrix = null), (this.__cfg.region = null);
								},
								clearBBox: function() {
									(this.__cfg.box = null), (this.__cfg.region = null);
								},
								getBBox: function() {
									var t = this.__cfg.box;
									return (
										t ||
											((t = this.calculateBox()),
											t &&
												((t.x = t.minX),
												(t.y = t.minY),
												(t.width = t.maxX - t.minX),
												(t.height = t.maxY - t.minY)),
											(this.__cfg.box = t)),
										t
									);
								},
							}),
							(t.exports = a);
					},
					function(t, e, n) {
						var r = n(52),
							i = n(53),
							o = n(32),
							a = n(54);
						t.exports = {
							line: function(t, e, n, i, o, a, s) {
								var u = r.box(t, e, n, i, o);
								if (!this.box(u.minX, u.maxX, u.minY, u.maxY, a, s)) return !1;
								var c = r.pointDistance(t, e, n, i, a, s);
								return !isNaN(c) && o / 2 >= c;
							},
							polyline: function(t, e, n, r) {
								var i = t.length - 1;
								if (1 > i) return !1;
								for (var o = 0; i > o; o++) {
									if (this.line(t[o][0], t[o][1], t[o + 1][0], t[o + 1][1], e, n, r)) return !0;
								}
								return !1;
							},
							cubicline: function(t, e, n, r, i, a, s, u, c, l, f) {
								return o.pointDistance(t, e, n, r, i, a, s, u, l, f) <= c / 2;
							},
							quadraticline: function(t, e, n, r, o, a, s, u, c) {
								return i.pointDistance(t, e, n, r, o, a, u, c) <= s / 2;
							},
							arcline: function(t, e, n, r, i, o, s, u, c) {
								return a.pointDistance(t, e, n, r, i, o, u, c) <= s / 2;
							},
							rect: function(t, e, n, r, i, o) {
								return !(t > i || i > t + n || e > o || o > e + r);
							},
							circle: function(t, e, n, r, i) {
								return Math.pow(r - t, 2) + Math.pow(i - e, 2) <= Math.pow(n, 2);
							},
							box: function(t, e, n, r, i, o) {
								return !(t > i || i > e || n > o || o > r);
							},
						};
					},
					function(t, e, n) {
						var r = n(17),
							i = n(231),
							o = n(232),
							a = n(233);
						(a.angle = function(t, e) {
							var n = a.dot(t, e) / (a.length(t) * a.length(e));
							return Math.acos(r.clamp(n, -1, 1));
						}),
							(a.direction = function(t, e) {
								return t[0] * e[1] - e[0] * t[1];
							}),
							(a.angleTo = function(t, e, n) {
								var r = a.angle(t, e),
									i = a.direction(t, e) >= 0;
								return n ? (i ? 2 * Math.PI - r : r) : i ? r : 2 * Math.PI - r;
							}),
							(a.vertical = function(t, e, n) {
								return (
									n ? ((t[0] = e[1]), (t[1] = -1 * e[0])) : ((t[0] = -1 * e[1]), (t[1] = e[0])), t
								);
							}),
							(i.translate = function(t, e, n) {
								var r = Array(9);
								return i.fromTranslation(r, n), i.multiply(t, r, e);
							}),
							(i.rotate = function(t, e, n) {
								var r = Array(9);
								return i.fromRotation(r, n), i.multiply(t, r, e);
							}),
							(i.scale = function(t, e, n) {
								var r = Array(9);
								return i.fromScaling(r, n), i.multiply(t, r, e);
							}),
							(t.exports = {
								mat3: i,
								vec2: a,
								vec3: o,
								transform: function(t, e) {
									return (
										(t = r.clone(t)),
										r.each(e, function(e) {
											switch (e[0]) {
												case 't':
													i.translate(t, t, [e[1], e[2]]);
													break;
												case 's':
													i.scale(t, t, [e[1], e[2]]);
													break;
												case 'r':
													i.rotate(t, t, e[1]);
													break;
												case 'm':
													i.multiply(t, t, e[1]);
													break;
												default:
													return !1;
											}
										}),
										t
									);
								},
							});
					},
					function(t, e) {
						function n(t) {
							return null != t && 'object' == (void 0 === t ? 'undefined' : r(t));
						}
						var r =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function(t) {
										return typeof t;
								  }
								: function(t) {
										return t &&
											'function' == typeof Symbol &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? 'symbol'
											: typeof t;
								  };
						t.exports = n;
					},
					function(t, e, n) {
						var r =
								'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
									? function(t) {
											return typeof t;
									  }
									: function(t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  },
							i = n(57),
							o =
								'object' == ('undefined' == typeof self ? 'undefined' : r(self)) &&
								self &&
								self.Object === Object &&
								self;
						t.exports = i || o || Function('return this')();
					},
					function(t, e) {
						t.exports = Array.isArray;
					},
					function(t, e, n) {
						function r(t) {
							return null == t ? (void 0 === t ? u : s) : c && c in Object(t) ? o(t) : a(t);
						}
						var i = n(11),
							o = n(117),
							a = n(118),
							s = '[object Null]',
							u = '[object Undefined]',
							c = i ? i.toStringTag : void 0;
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							var e = void 0 === t ? 'undefined' : r(t);
							return null != t && ('object' == e || 'function' == e);
						}
						var r =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function(t) {
										return typeof t;
								  }
								: function(t) {
										return t &&
											'function' == typeof Symbol &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? 'symbol'
											: typeof t;
								  };
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							return null != t && o(t.length) && !i(t);
						}
						var i = n(22),
							o = n(62);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e) {
							var n = o(t, e);
							return i(n) ? n : void 0;
						}
						var i = n(125),
							o = n(128);
						t.exports = r;
					},
					function(t, e, n) {
						t.exports = n(5).Symbol;
					},
					function(t, e, n) {
						var r = n(124),
							i = n(33),
							o = n(129),
							a = n(130),
							s = n(131),
							u = n(7),
							c = n(61),
							l = c(r),
							f = c(i),
							h = c(o),
							p = c(a),
							d = c(s),
							g = u;
						((r && '[object DataView]' != g(new r(new ArrayBuffer(1)))) ||
							(i && '[object Map]' != g(new i())) ||
							(o && '[object Promise]' != g(o.resolve())) ||
							(a && '[object Set]' != g(new a())) ||
							(s && '[object WeakMap]' != g(new s()))) &&
							(g = function(t) {
								var e = u(t),
									n = '[object Object]' == e ? t.constructor : void 0,
									r = n ? c(n) : '';
								if (r)
									switch (r) {
										case l:
											return '[object DataView]';
										case f:
											return '[object Map]';
										case h:
											return '[object Promise]';
										case p:
											return '[object Set]';
										case d:
											return '[object WeakMap]';
									}
								return e;
							}),
							(t.exports = g);
					},
					function(t, e, n) {
						function r(t, e, n, r) {
							var a = !n;
							n || (n = {});
							for (var s = -1, u = e.length; ++s < u; ) {
								var c = e[s],
									l = r ? r(n[c], t[c], c, n, t) : void 0;
								void 0 === l && (l = t[c]), a ? o(n, c, l) : i(n, c, l);
							}
							return n;
						}
						var i = n(39),
							o = n(40);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return a(t) ? i(t) : o(t);
						}
						var i = n(67),
							o = n(59),
							a = n(9);
						t.exports = r;
					},
					function(t, e, n) {
						'use strict';
						var r = n(49);
						n.d(e, 'a', function() {
							return r.e;
						}),
							n.d(e, 'f', function() {
								return r.g;
							}),
							n.d(e, 'd', function() {
								return r.f;
							});
						var i = n(250);
						n.d(e, 'e', function() {
							return i.a;
						}),
							n.d(e, 'c', function() {
								return i.b;
							});
						var o = n(251);
						n.d(e, 'b', function() {
							return o.a;
						});
					},
					function(t, e, n) {
						function r(t, e, n, r, i, o) {
							var a = void 0,
								s = void 0,
								d = void 0,
								g = void 0,
								y = void 0,
								v = void 0,
								m = void 0;
							if (!e.fill) {
								var x = e.arrowLength || h,
									b = e.arrowAngle ? (e.arrowAngle * u) / 180 : p;
								(m = f(o - r, i - n)),
									(m -= u),
									(y = e.lineWidth * l(m)),
									(v = e.lineWidth * c(m)),
									(a = i + x * l(m + b / 2)),
									(s = o + x * c(m + b / 2)),
									(d = i + x * l(m - b / 2)),
									(g = o + x * c(m - b / 2)),
									t.beginPath(),
									t.moveTo(a - y, s - v),
									t.lineTo(i - y, o - v),
									t.lineTo(d - y, g - v),
									t.moveTo(i - y, o - v),
									t.lineTo(i + y, o + v),
									t.moveTo(i, o),
									t.stroke();
							}
						}
						function i(t, e, n, r, i, o, u) {
							var c = u.__attrs,
								l = c.symbol,
								f = c.x || i,
								h = c.y || o,
								p = c.r || e.lineWidth;
							s.isFunction(l) || (l = a.Symbols[l || 'triangle']);
							var d = 0,
								g = n - i,
								y = r - o;
							0 === y
								? (d = 0 > g ? Math.PI / 2 : (270 * Math.PI) / 180)
								: g >= 0 && y > 0
									? (d = -Math.atan(g / y))
									: 0 >= g && 0 > y
										? (d = Math.PI - Math.atan(g / y))
										: g > 0 && 0 > y
											? (d = Math.PI + Math.atan(-g / y))
											: 0 > g && y > 0 && (d = Math.atan(g / -y)),
								t.save(),
								t.beginPath(),
								t.translate(f, h),
								t.rotate(d),
								t.translate(-f, -h),
								l(f, h, p, t, u),
								t.setTransform(1, 0, 0, 1, 0, 0),
								(t.fillStyle = u.attr('fill') || t.strokeStyle),
								t.fill(),
								t.restore();
						}
						var o =
								'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
									? function(t) {
											return typeof t;
									  }
									: function(t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  },
							a = n(56),
							s = n(0),
							u = Math.PI,
							c = Math.sin,
							l = Math.cos,
							f = Math.atan2,
							h = 10,
							p = u / 3;
						t.exports = {
							addStartArrow: function(t, e, n, a, s, u) {
								'object' === o(e.startArrow)
									? i(t, e, n, a, s, u, e.startArrow)
									: e.startArrow && r(t, e, n, a, s, u);
							},
							addEndArrow: function(t, e, n, a, s, u) {
								'object' === o(e.endArrow)
									? i(t, e, n, a, s, u, e.endArrow)
									: e.endArrow && r(t, e, n, a, s, u);
							},
						};
					},
					function(t, e, n) {
						var r = Math.PI / 180,
							i = 180 / Math.PI;
						t.exports = {
							isFunction: n(22),
							isObject: n(8),
							isBoolean: n(119),
							isNil: n(120),
							isString: n(58),
							isArray: n(6),
							isNumber: n(121),
							isEmpty: n(122),
							uniqueId: n(135),
							clone: n(138),
							assign: n(181),
							merge: n(189),
							upperFirst: n(196),
							remove: n(202),
							each: n(210),
							isEqual: n(215),
							toArray: n(225),
							extend: function(t, e, n, r) {
								this.isFunction(e) || ((n = e), (e = t), (t = function() {}));
								var i = Object.create
										? function(t, e) {
												return Object.create(t, { constructor: { value: e } });
										  }
										: function(t, e) {
												function n() {}
												n.prototype = t;
												var r = new n();
												return (r.constructor = e), r;
										  },
									o = i(e.prototype, t);
								return (
									(t.prototype = this.merge(o, t.prototype)),
									(t.superclass = i(e.prototype, e)),
									this.merge(o, n),
									this.merge(t, r),
									t
								);
							},
							augment: function(t) {
								for (var e = this.toArray(arguments), n = 1; e.length > n; n++) {
									var r = e[n];
									this.isFunction(r) && (r = r.prototype), this.merge(t.prototype, r);
								}
							},
							isNumberEqual: function(t, e) {
								return 1e-5 > Math.abs(t - e);
							},
							toRadian: function(t) {
								return r * t;
							},
							toDegree: function(t) {
								return i * t;
							},
							mod: function(t, e) {
								return ((t % e) + e) % e;
							},
							clamp: function(t, e, n) {
								return e > t ? e : t > n ? n : t;
							},
						};
					},
					function(t, e) {
						function n(t) {
							var e = t && t.constructor;
							return t === (('function' == typeof e && e.prototype) || r);
						}
						var r = Object.prototype;
						t.exports = n;
					},
					function(t, e, n) {
						(function(t) {
							var r =
									'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
										? function(t) {
												return typeof t;
										  }
										: function(t) {
												return t &&
													'function' == typeof Symbol &&
													t.constructor === Symbol &&
													t !== Symbol.prototype
													? 'symbol'
													: typeof t;
										  },
								i = n(5),
								o = n(133),
								a = 'object' == r(e) && e && !e.nodeType && e,
								s = a && 'object' == r(t) && t && !t.nodeType && t,
								u = s && s.exports === a,
								c = u ? i.Buffer : void 0;
							t.exports = (c ? c.isBuffer : void 0) || o;
						}.call(e, n(35)(t)));
					},
					function(t, e) {
						function n(t, e) {
							return t === e || (t !== t && e !== e);
						}
						t.exports = n;
					},
					function(t, e, n) {
						'use strict';
						function r(t, e) {
							return function(n) {
								return t + n * e;
							};
						}
						function i(t, e, n) {
							return (
								(t = Math.pow(t, n)),
								(e = Math.pow(e, n) - t),
								(n = 1 / n),
								function(r) {
									return Math.pow(t + r * e, n);
								}
							);
						}
						function o(t, e) {
							var n = e - t;
							return n
								? r(t, n > 180 || -180 > n ? n - 360 * Math.round(n / 360) : n)
								: Object(u.a)(isNaN(t) ? e : t);
						}
						function a(t) {
							return 1 == (t = +t)
								? s
								: function(e, n) {
										return n - e ? i(e, n, t) : Object(u.a)(isNaN(e) ? n : e);
								  };
						}
						function s(t, e) {
							var n = e - t;
							return n ? r(t, n) : Object(u.a)(isNaN(t) ? e : t);
						}
						(e.c = o), (e.b = a), (e.a = s);
						var u = n(95);
					},
					function(t, e, n) {
						function r(t) {
							if (!o(t)) return !1;
							var e = i(t);
							return e == s || e == u || e == a || e == c;
						}
						var i = n(7),
							o = n(8),
							a = '[object AsyncFunction]',
							s = '[object Function]',
							u = '[object GeneratorFunction]',
							c = '[object Proxy]';
						t.exports = r;
					},
					function(t, e, n) {
						var r = n(134),
							i = n(24),
							o = n(36),
							a = o && o.isTypedArray;
						t.exports = a ? i(a) : r;
					},
					function(t, e) {
						function n(t) {
							return function(e) {
								return t(e);
							};
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							var e = -1,
								n = null == t ? 0 : t.length;
							for (this.clear(); ++e < n; ) {
								var r = t[e];
								this.set(r[0], r[1]);
							}
						}
						var i = n(140),
							o = n(141),
							a = n(142),
							s = n(143),
							u = n(144);
						(r.prototype.clear = i),
							(r.prototype.delete = o),
							(r.prototype.get = a),
							(r.prototype.has = s),
							(r.prototype.set = u),
							(t.exports = r);
					},
					function(t, e, n) {
						function r(t, e) {
							for (var n = t.length; n--; ) if (i(t[n][0], e)) return n;
							return -1;
						}
						var i = n(20);
						t.exports = r;
					},
					function(t, e, n) {
						t.exports = n(10)(Object, 'create');
					},
					function(t, e, n) {
						function r(t, e) {
							var n = t.__data__;
							return i(e) ? n['string' == typeof e ? 'string' : 'hash'] : n.map;
						}
						var i = n(158);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return a(t) ? i(t, !0) : o(t);
						}
						var i = n(67),
							o = n(165),
							a = n(9);
						t.exports = r;
					},
					function(t, e) {
						function n(t, e) {
							var n = -1,
								r = t.length;
							for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
							return e;
						}
						t.exports = n;
					},
					function(t, e, n) {
						'use strict';
						e.a = function(t, e) {
							return (
								(t = +t),
								(e -= t),
								function(n) {
									return t + e * n;
								}
							);
						};
					},
					function(t, e, n) {
						function r(t, e, n, r, i) {
							var o = 1 - i;
							return o * o * (o * r + 3 * i * n) + i * i * (i * t + 3 * o * e);
						}
						function i(t, e, n, r, i) {
							var o = 1 - i;
							return 3 * (((e - t) * o + 2 * (n - e) * i) * o + (r - n) * i * i);
						}
						function o(t, e, n, i, o, a, s, u, c, f, h) {
							var p = void 0,
								d = 0.005,
								g = 1 / 0,
								y = void 0,
								v = void 0,
								m = void 0,
								x = void 0,
								b = void 0,
								_ = void 0,
								w = void 0,
								S = [c, f];
							for (y = 0; 1 > y; y += 0.05)
								(v = [r(t, n, o, s, y), r(e, i, a, u, y)]),
									(m = l.squaredDistance(S, v)),
									g > m && ((p = y), (g = m));
							g = 1 / 0;
							for (var M = 0; 32 > M && 1e-4 <= d; M++)
								(_ = p - d),
									(w = p + d),
									(v = [r(t, n, o, s, _), r(e, i, a, u, _)]),
									(m = l.squaredDistance(S, v)),
									_ >= 0 && g > m
										? ((p = _), (g = m))
										: ((b = [r(t, n, o, s, w), r(e, i, a, u, w)]),
										  (x = l.squaredDistance(S, b)),
										  1 >= w && g > x ? ((p = w), (g = x)) : (d *= 0.5));
							return h && ((h.x = r(t, n, o, s, p)), (h.y = r(e, i, a, u, p))), Math.sqrt(g);
						}
						function a(t, e, n, r) {
							var i = 3 * t - 9 * e + 9 * n - 3 * r,
								o = 6 * e - 12 * n + 6 * r,
								a = 3 * n - 3 * r,
								s = [],
								u = void 0,
								l = void 0,
								f = void 0;
							if (c.isNumberEqual(i, 0))
								c.isNumberEqual(o, 0) || 0 > (u = -a / o) || u > 1 || s.push(u);
							else {
								var h = o * o - 4 * i * a;
								c.isNumberEqual(h, 0)
									? s.push(-o / (2 * i))
									: h > 0 &&
									  ((f = Math.sqrt(h)),
									  (u = (-o + f) / (2 * i)),
									  (l = (-o - f) / (2 * i)),
									  0 > u || u > 1 || s.push(u),
									  0 > l || l > 1 || s.push(l));
							}
							return s;
						}
						function s(t, e, n, r, i) {
							return (
								t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
							);
						}
						function u(t, e, n, r, i, o, a, u, l) {
							c.isNil(l) && (l = 1), (l = l > 1 ? 1 : 0 > l ? 0 : l);
							for (
								var f = l / 2,
									h = [
										-0.1252,
										0.1252,
										-0.3678,
										0.3678,
										-0.5873,
										0.5873,
										-0.7699,
										0.7699,
										-0.9041,
										0.9041,
										-0.9816,
										0.9816,
									],
									p = [
										0.2491,
										0.2491,
										0.2335,
										0.2335,
										0.2032,
										0.2032,
										0.1601,
										0.1601,
										0.1069,
										0.1069,
										0.0472,
										0.0472,
									],
									d = 0,
									g = 0;
								12 > g;
								g++
							) {
								var y = f * h[g] + f,
									v = s(y, t, n, i, a),
									m = s(y, e, r, o, u),
									x = v * v + m * m;
								d += p[g] * Math.sqrt(x);
							}
							return f * d;
						}
						var c = n(0),
							l = n(3).vec2;
						t.exports = {
							at: r,
							derivativeAt: i,
							projectPoint: function(t, e, n, r, i, a, s, u, c, l) {
								var f = {};
								return o(t, e, n, r, i, a, s, u, c, l, f), f;
							},
							pointDistance: o,
							extrema: a,
							len: u,
						};
					},
					function(t, e, n) {
						t.exports = n(10)(n(5), 'Map');
					},
					function(t, e, n) {
						var r = n(132),
							i = n(4),
							o = Object.prototype,
							a = o.hasOwnProperty,
							s = o.propertyIsEnumerable;
						t.exports = r(
							(function() {
								return arguments;
							})()
						)
							? r
							: function(t) {
									return i(t) && a.call(t, 'callee') && !s.call(t, 'callee');
							  };
					},
					function(t, e) {
						t.exports = function(t) {
							return (
								t.webpackPolyfill ||
									((t.deprecate = function() {}),
									(t.paths = []),
									t.children || (t.children = []),
									Object.defineProperty(t, 'loaded', {
										enumerable: !0,
										get: function() {
											return t.l;
										},
									}),
									Object.defineProperty(t, 'id', {
										enumerable: !0,
										get: function() {
											return t.i;
										},
									}),
									(t.webpackPolyfill = 1)),
								t
							);
						};
					},
					function(t, e, n) {
						(function(t) {
							var r =
									'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
										? function(t) {
												return typeof t;
										  }
										: function(t) {
												return t &&
													'function' == typeof Symbol &&
													t.constructor === Symbol &&
													t !== Symbol.prototype
													? 'symbol'
													: typeof t;
										  },
								i = n(57),
								o = 'object' == r(e) && e && !e.nodeType && e,
								a = o && 'object' == r(t) && t && !t.nodeType && t,
								s = a && a.exports === o,
								u = s && i.process;
							t.exports = (function() {
								try {
									var t = a && a.require && a.require('util').types;
									return t || (u && u.binding && u.binding('util'));
								} catch (t) {}
							})();
						}.call(e, n(35)(t)));
					},
					function(t, e) {
						function n(t, e) {
							for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
								i[n] = e(t[n], n, t);
							return i;
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							this.size = (this.__data__ = new i(t)).size;
						}
						var i = n(25),
							o = n(145),
							a = n(146),
							s = n(147),
							u = n(148),
							c = n(149);
						(r.prototype.clear = o),
							(r.prototype.delete = a),
							(r.prototype.get = s),
							(r.prototype.has = u),
							(r.prototype.set = c),
							(t.exports = r);
					},
					function(t, e, n) {
						function r(t, e, n) {
							var r = t[e];
							(s.call(t, e) && o(r, n) && (void 0 !== n || e in t)) || i(t, e, n);
						}
						var i = n(40),
							o = n(20),
							a = Object.prototype,
							s = a.hasOwnProperty;
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e, n) {
							'__proto__' == e && i
								? i(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
								: (t[e] = n);
						}
						var i = n(66);
						t.exports = r;
					},
					function(t, e, n) {
						var r = n(168),
							i = n(70),
							o = Object.prototype,
							a = o.propertyIsEnumerable,
							s = Object.getOwnPropertySymbols;
						t.exports = s
							? function(t) {
									return null == t
										? []
										: ((t = Object(t)),
										  r(s(t), function(e) {
												return a.call(t, e);
										  }));
							  }
							: i;
					},
					function(t, e, n) {
						t.exports = n(60)(Object.getPrototypeOf, Object);
					},
					function(t, e, n) {
						function r(t) {
							var e = new t.constructor(t.byteLength);
							return new i(e).set(new i(t)), e;
						}
						var i = n(75);
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							return t;
						}
						t.exports = n;
					},
					function(t, e) {
						var n = {};
						(n.EPSILON = 1e-6),
							(n.ARRAY_TYPE = 'undefined' != typeof Float32Array ? Float32Array : Array),
							(n.RANDOM = Math.random),
							(n.ENABLE_SIMD = !1),
							(n.SIMD_AVAILABLE = n.ARRAY_TYPE === Float32Array && 'SIMD' in this),
							(n.USE_SIMD = n.ENABLE_SIMD && n.SIMD_AVAILABLE),
							(n.setMatrixArrayType = function(t) {
								n.ARRAY_TYPE = t;
							});
						var r = Math.PI / 180;
						(n.toRadian = function(t) {
							return t * r;
						}),
							(n.equals = function(t, e) {
								return Math.abs(t - e) <= n.EPSILON * Math.max(1, Math.abs(t), Math.abs(e));
							}),
							(t.exports = n);
					},
					function(t, e, n) {
						var r =
								'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
									? function(t) {
											return typeof t;
									  }
									: function(t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  },
							i = n(17),
							o = '\t\n\v\f\r   ᠎             　\u2028\u2029',
							a = RegExp(
								'([a-z])[' +
									o +
									',]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[' +
									o +
									']*,?[' +
									o +
									']*)+)',
								'ig'
							),
							s = RegExp('(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[' + o + ']*,?[' + o + ']*', 'ig'),
							u = function(t) {
								if (!t) return null;
								if ((void 0 === t ? 'undefined' : r(t)) === r([])) return t;
								var e = {
										a: 7,
										c: 6,
										o: 2,
										h: 1,
										l: 2,
										m: 2,
										r: 4,
										q: 4,
										s: 4,
										t: 2,
										v: 1,
										u: 3,
										z: 0,
									},
									n = [];
								return (
									(t + '').replace(a, function(t, r, i) {
										var o = [],
											a = r.toLowerCase();
										if (
											(i.replace(s, function(t, e) {
												e && o.push(+e);
											}),
											'm' === a &&
												o.length > 2 &&
												(n.push([r].concat(o.splice(0, 2))),
												(a = 'l'),
												(r = 'm' === r ? 'l' : 'L')),
											'o' === a && 1 === o.length && n.push([r, o[0]]),
											'r' === a)
										)
											n.push([r].concat(o));
										else
											for (; o.length >= e[a] && (n.push([r].concat(o.splice(0, e[a]))), e[a]); );
									}),
									n
								);
							},
							c = function(t, e) {
								for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
									var o = [
										{ x: +t[r - 2], y: +t[r - 1] },
										{ x: +t[r], y: +t[r + 1] },
										{ x: +t[r + 2], y: +t[r + 3] },
										{ x: +t[r + 4], y: +t[r + 5] },
									];
									e
										? r
											? i - 4 === r
												? (o[3] = { x: +t[0], y: +t[1] })
												: i - 2 === r &&
												  ((o[2] = { x: +t[0], y: +t[1] }), (o[3] = { x: +t[2], y: +t[3] }))
											: (o[0] = { x: +t[i - 2], y: +t[i - 1] })
										: i - 4 === r
											? (o[3] = o[2])
											: r || (o[0] = { x: +t[r], y: +t[r + 1] }),
										n.push([
											'C',
											(6 * o[1].x - o[0].x + o[2].x) / 6,
											(6 * o[1].y - o[0].y + o[2].y) / 6,
											(o[1].x + 6 * o[2].x - o[3].x) / 6,
											(o[1].y + 6 * o[2].y - o[3].y) / 6,
											o[2].x,
											o[2].y,
										]);
								}
								return n;
							},
							l = function(t, e, n, r, i) {
								var o = [];
								if (
									(null === i && null === r && (r = n),
									(t = +t),
									(e = +e),
									(n = +n),
									(r = +r),
									null !== i)
								) {
									var a = Math.PI / 180,
										s = t + n * Math.cos(-r * a),
										u = t + n * Math.cos(-i * a);
									o = [
										['M', s, e + n * Math.sin(-r * a)],
										['A', n, n, 0, +(i - r > 180), 0, u, e + n * Math.sin(-i * a)],
									];
								} else
									o = [
										['M', t, e],
										['m', 0, -r],
										['a', n, r, 0, 1, 1, 0, 2 * r],
										['a', n, r, 0, 1, 1, 0, -2 * r],
										['z'],
									];
								return o;
							},
							f = function(t) {
								if (!(t = u(t)) || !t.length) return [['M', 0, 0]];
								var e = [],
									n = 0,
									r = 0,
									i = 0,
									o = 0,
									a = 0,
									s = void 0,
									f = void 0;
								'M' === t[0][0] &&
									((n = +t[0][1]), (r = +t[0][2]), (i = n), (o = r), a++, (e[0] = ['M', n, r]));
								for (
									var h,
										p,
										d =
											3 === t.length &&
											'M' === t[0][0] &&
											'R' === t[1][0].toUpperCase() &&
											'Z' === t[2][0].toUpperCase(),
										g = a,
										y = t.length;
									y > g;
									g++
								) {
									if ((e.push((h = [])), (p = t[g]), (s = p[0]) !== s.toUpperCase()))
										switch ((h[0] = s.toUpperCase())) {
											case 'A':
												(h[1] = p[1]),
													(h[2] = p[2]),
													(h[3] = p[3]),
													(h[4] = p[4]),
													(h[5] = p[5]),
													(h[6] = +p[6] + n),
													(h[7] = +p[7] + r);
												break;
											case 'V':
												h[1] = +p[1] + r;
												break;
											case 'H':
												h[1] = +p[1] + n;
												break;
											case 'R':
												f = [n, r].concat(p.slice(1));
												for (var v = 2, m = f.length; m > v; v++)
													(f[v] = +f[v] + n), (f[++v] = +f[v] + r);
												e.pop(), (e = e.concat(c(f, d)));
												break;
											case 'O':
												e.pop(), (f = l(n, r, p[1], p[2])), f.push(f[0]), (e = e.concat(f));
												break;
											case 'U':
												e.pop(),
													(e = e.concat(l(n, r, p[1], p[2], p[3]))),
													(h = ['U'].concat(e[e.length - 1].slice(-2)));
												break;
											case 'M':
												(i = +p[1] + n), (o = +p[2] + r);
												break;
											default:
												for (var x = 1, b = p.length; b > x; x++) h[x] = +p[x] + (x % 2 ? n : r);
										}
									else if ('R' === s)
										(f = [n, r].concat(p.slice(1))),
											e.pop(),
											(e = e.concat(c(f, d))),
											(h = ['R'].concat(p.slice(-2)));
									else if ('O' === s)
										e.pop(), (f = l(n, r, p[1], p[2])), f.push(f[0]), (e = e.concat(f));
									else if ('U' === s)
										e.pop(),
											(e = e.concat(l(n, r, p[1], p[2], p[3]))),
											(h = ['U'].concat(e[e.length - 1].slice(-2)));
									else for (var _ = 0, w = p.length; w > _; _++) h[_] = p[_];
									if ('O' !== (s = s.toUpperCase()))
										switch (h[0]) {
											case 'Z':
												(n = +i), (r = +o);
												break;
											case 'H':
												n = h[1];
												break;
											case 'V':
												r = h[1];
												break;
											case 'M':
												(i = h[h.length - 2]), (o = h[h.length - 1]);
												break;
											default:
												(n = h[h.length - 2]), (r = h[h.length - 1]);
										}
								}
								return e;
							},
							h = function(t, e, n, r) {
								return [t, e, n, r, n, r];
							},
							p = function(t, e, n, r, i, o) {
								return [
									(1 / 3) * t + (2 / 3) * n,
									(1 / 3) * e + (2 / 3) * r,
									(1 / 3) * i + (2 / 3) * n,
									(1 / 3) * o + (2 / 3) * r,
									i,
									o,
								];
							},
							d = function t(e, n, r, i, o, a, s, u, c, l) {
								r === i && (r += 1);
								var f = (120 * Math.PI) / 180,
									h = (Math.PI / 180) * (+o || 0),
									p = [],
									d = void 0,
									g = void 0,
									y = void 0,
									v = void 0,
									m = void 0,
									x = function(t, e, n) {
										return {
											x: t * Math.cos(n) - e * Math.sin(n),
											y: t * Math.sin(n) + e * Math.cos(n),
										};
									};
								if (l) (g = l[0]), (y = l[1]), (v = l[2]), (m = l[3]);
								else {
									(d = x(e, n, -h)),
										(e = d.x),
										(n = d.y),
										(d = x(u, c, -h)),
										(u = d.x),
										(c = d.y),
										e === u && n === c && ((u += 1), (c += 1));
									var b = (e - u) / 2,
										_ = (n - c) / 2,
										w = (b * b) / (r * r) + (_ * _) / (i * i);
									w > 1 && ((w = Math.sqrt(w)), (r *= w), (i *= w));
									var S = r * r,
										M = i * i,
										P =
											(a === s ? -1 : 1) *
											Math.sqrt(
												Math.abs((S * M - S * _ * _ - M * b * b) / (S * _ * _ + M * b * b))
											);
									(v = (P * r * _) / i + (e + u) / 2),
										(m = (P * -i * b) / r + (n + c) / 2),
										(g = Math.asin(((n - m) / i).toFixed(9))),
										(y = Math.asin(((c - m) / i).toFixed(9))),
										(g = v > e ? Math.PI - g : g),
										(y = v > u ? Math.PI - y : y),
										0 > g && (g = 2 * Math.PI + g),
										0 > y && (y = 2 * Math.PI + y),
										s && g > y && (g -= 2 * Math.PI),
										!s && y > g && (y -= 2 * Math.PI);
								}
								var C = y - g;
								if (Math.abs(C) > f) {
									var O = y,
										A = u,
										k = c;
									(y = g + f * (s && y > g ? 1 : -1)),
										(u = v + r * Math.cos(y)),
										(c = m + i * Math.sin(y)),
										(p = t(u, c, r, i, o, 0, s, A, k, [y, O, v, m]));
								}
								C = y - g;
								var I = Math.cos(g),
									T = Math.sin(g),
									E = Math.cos(y),
									j = Math.sin(y),
									L = Math.tan(C / 4),
									D = (4 / 3) * r * L,
									F = (4 / 3) * i * L,
									R = [e, n],
									B = [e + D * T, n - F * I],
									N = [u + D * j, c - F * E],
									z = [u, c];
								if (((B[0] = 2 * R[0] - B[0]), (B[1] = 2 * R[1] - B[1]), l))
									return [B, N, z].concat(p);
								p = [B, N, z]
									.concat(p)
									.join()
									.split(',');
								for (var V = [], G = 0, Y = p.length; Y > G; G++)
									V[G] = G % 2 ? x(p[G - 1], p[G], h).y : x(p[G], p[G + 1], h).x;
								return V;
							},
							g = function(t, e) {
								var n = f(t),
									r = e && f(e),
									i = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
									o = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
									a = [],
									s = [],
									u = '',
									c = '',
									l = void 0,
									g = function(t, e, n) {
										var r = void 0,
											i = void 0;
										if (!t) return ['C', e.x, e.y, e.x, e.y, e.x, e.y];
										switch ((!(t[0] in { T: 1, Q: 1 }) && (e.qx = e.qy = null), t[0])) {
											case 'M':
												(e.X = t[1]), (e.Y = t[2]);
												break;
											case 'A':
												t = ['C'].concat(d.apply(0, [e.x, e.y].concat(t.slice(1))));
												break;
											case 'S':
												'C' === n || 'S' === n
													? ((r = 2 * e.x - e.bx), (i = 2 * e.y - e.by))
													: ((r = e.x), (i = e.y)),
													(t = ['C', r, i].concat(t.slice(1)));
												break;
											case 'T':
												'Q' === n || 'T' === n
													? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
													: ((e.qx = e.x), (e.qy = e.y)),
													(t = ['C'].concat(p(e.x, e.y, e.qx, e.qy, t[1], t[2])));
												break;
											case 'Q':
												(e.qx = t[1]),
													(e.qy = t[2]),
													(t = ['C'].concat(p(e.x, e.y, t[1], t[2], t[3], t[4])));
												break;
											case 'L':
												t = ['C'].concat(h(e.x, e.y, t[1], t[2]));
												break;
											case 'H':
												t = ['C'].concat(h(e.x, e.y, t[1], e.y));
												break;
											case 'V':
												t = ['C'].concat(h(e.x, e.y, e.x, t[1]));
												break;
											case 'Z':
												t = ['C'].concat(h(e.x, e.y, e.X, e.Y));
										}
										return t;
									},
									y = function(t, e) {
										if (t[e].length > 7) {
											t[e].shift();
											for (var i = t[e]; i.length; )
												(a[e] = 'A'),
													r && (s[e] = 'A'),
													t.splice(e++, 0, ['C'].concat(i.splice(0, 6)));
											t.splice(e, 1), (l = Math.max(n.length, (r && r.length) || 0));
										}
									},
									v = function(t, e, i, o, a) {
										t &&
											e &&
											'M' === t[a][0] &&
											'M' !== e[a][0] &&
											(e.splice(a, 0, ['M', o.x, o.y]),
											(i.bx = 0),
											(i.by = 0),
											(i.x = t[a][1]),
											(i.y = t[a][2]),
											(l = Math.max(n.length, (r && r.length) || 0)));
									};
								l = Math.max(n.length, (r && r.length) || 0);
								for (var m = 0; l > m; m++) {
									n[m] && (u = n[m][0]),
										'C' !== u && ((a[m] = u), m && (c = a[m - 1])),
										(n[m] = g(n[m], i, c)),
										'A' !== a[m] && 'C' === u && (a[m] = 'C'),
										y(n, m),
										r &&
											(r[m] && (u = r[m][0]),
											'C' !== u && ((s[m] = u), m && (c = s[m - 1])),
											(r[m] = g(r[m], o, c)),
											'A' !== s[m] && 'C' === u && (s[m] = 'C'),
											y(r, m)),
										v(n, r, i, o, m),
										v(r, n, o, i, m);
									var x = n[m],
										b = r && r[m],
										_ = x.length,
										w = r && b.length;
									(i.x = x[_ - 2]),
										(i.y = x[_ - 1]),
										(i.bx = parseFloat(x[_ - 4]) || i.x),
										(i.by = parseFloat(x[_ - 3]) || i.y),
										(o.bx = r && (parseFloat(b[w - 4]) || o.x)),
										(o.by = r && (parseFloat(b[w - 3]) || o.y)),
										(o.x = r && b[w - 2]),
										(o.y = r && b[w - 1]);
								}
								return r ? [n, r] : n;
							},
							y = /,?([a-z]),?/gi,
							v = function(t) {
								return t.join(',').replace(y, '$1');
							},
							m = function(t, e, n, r, i) {
								return (
									t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) -
									3 * e +
									3 * n
								);
							},
							x = function(t, e, n, r, i, o, a, s, u) {
								null === u && (u = 1), (u = u > 1 ? 1 : 0 > u ? 0 : u);
								for (
									var c = u / 2,
										l = [
											-0.1252,
											0.1252,
											-0.3678,
											0.3678,
											-0.5873,
											0.5873,
											-0.7699,
											0.7699,
											-0.9041,
											0.9041,
											-0.9816,
											0.9816,
										],
										f = [
											0.2491,
											0.2491,
											0.2335,
											0.2335,
											0.2032,
											0.2032,
											0.1601,
											0.1601,
											0.1069,
											0.1069,
											0.0472,
											0.0472,
										],
										h = 0,
										p = 0;
									12 > p;
									p++
								) {
									var d = c * l[p] + c,
										g = m(d, t, n, i, a),
										y = m(d, e, r, o, s),
										v = g * g + y * y;
									h += f[p] * Math.sqrt(v);
								}
								return c * h;
							},
							b = function(t, e, n, r, i, o, a, s) {
								for (
									var u = [], c = [[], []], l = void 0, f = void 0, h = void 0, p = void 0, d = 0;
									2 > d;
									++d
								)
									if (
										(0 === d
											? ((f = 6 * t - 12 * n + 6 * i),
											  (l = -3 * t + 9 * n - 9 * i + 3 * a),
											  (h = 3 * n - 3 * t))
											: ((f = 6 * e - 12 * r + 6 * o),
											  (l = -3 * e + 9 * r - 9 * o + 3 * s),
											  (h = 3 * r - 3 * e)),
										1e-12 > Math.abs(l))
									) {
										if (1e-12 > Math.abs(f)) continue;
										(p = -h / f) > 0 && 1 > p && u.push(p);
									} else {
										var g = f * f - 4 * h * l,
											y = Math.sqrt(g);
										if (g >= 0) {
											var v = (-f + y) / (2 * l);
											v > 0 && 1 > v && u.push(v);
											var m = (-f - y) / (2 * l);
											m > 0 && 1 > m && u.push(m);
										}
									}
								for (var x = u.length, b = x, _ = void 0; x--; )
									(p = u[x]),
										(_ = 1 - p),
										(c[0][x] =
											_ * _ * _ * t + 3 * _ * _ * p * n + 3 * _ * p * p * i + p * p * p * a),
										(c[1][x] =
											_ * _ * _ * e + 3 * _ * _ * p * r + 3 * _ * p * p * o + p * p * p * s);
								return (
									(c[0][b] = t),
									(c[1][b] = e),
									(c[0][b + 1] = a),
									(c[1][b + 1] = s),
									(c[0].length = c[1].length = b + 2),
									{
										min: { x: Math.min.apply(0, c[0]), y: Math.min.apply(0, c[1]) },
										max: { x: Math.max.apply(0, c[0]), y: Math.max.apply(0, c[1]) },
									}
								);
							},
							_ = function(t, e, n, r, i, o, a, s) {
								if (
									!(
										Math.max(t, n) < Math.min(i, a) ||
										Math.min(t, n) > Math.max(i, a) ||
										Math.max(e, r) < Math.min(o, s) ||
										Math.min(e, r) > Math.max(o, s)
									)
								) {
									var u = (t * r - e * n) * (i - a) - (t - n) * (i * s - o * a),
										c = (t * r - e * n) * (o - s) - (e - r) * (i * s - o * a),
										l = (t - n) * (o - s) - (e - r) * (i - a);
									if (l) {
										var f = u / l,
											h = c / l,
											p = +f.toFixed(2),
											d = +h.toFixed(2);
										if (
											!(
												p < +Math.min(t, n).toFixed(2) ||
												p > +Math.max(t, n).toFixed(2) ||
												p < +Math.min(i, a).toFixed(2) ||
												p > +Math.max(i, a).toFixed(2) ||
												d < +Math.min(e, r).toFixed(2) ||
												d > +Math.max(e, r).toFixed(2) ||
												d < +Math.min(o, s).toFixed(2) ||
												d > +Math.max(o, s).toFixed(2)
											)
										)
											return { x: f, y: h };
									}
								}
							},
							w = function(t, e, n) {
								return !(t.x > e || e > t.x + t.width || t.y > n || n > t.y + t.height);
							},
							S = function(t, e, n, r, i) {
								if (i)
									return [
										['M', +t + +i, e],
										['l', n - 2 * i, 0],
										['a', i, i, 0, 0, 1, i, i],
										['l', 0, r - 2 * i],
										['a', i, i, 0, 0, 1, -i, i],
										['l', 2 * i - n, 0],
										['a', i, i, 0, 0, 1, -i, -i],
										['l', 0, 2 * i - r],
										['a', i, i, 0, 0, 1, i, -i],
										['z'],
									];
								var o = [['M', t, e], ['l', n, 0], ['l', 0, r], ['l', -n, 0], ['z']];
								return (o.parsePathArray = v), o;
							},
							M = function(t, e, n, r) {
								return (
									null === t && (t = e = n = r = 0),
									null === e && ((e = t.y), (n = t.width), (r = t.height), (t = t.x)),
									{
										x: t,
										y: e,
										width: n,
										w: n,
										height: r,
										h: r,
										x2: t + n,
										y2: e + r,
										cx: t + n / 2,
										cy: e + r / 2,
										r1: Math.min(n, r) / 2,
										r2: Math.max(n, r) / 2,
										r0: Math.sqrt(n * n + r * r) / 2,
										path: S(t, e, n, r),
										vb: [t, e, n, r].join(' '),
									}
								);
							},
							P = function(t, e) {
								return (
									(t = M(t)),
									(e = M(e)),
									w(e, t.x, t.y) ||
										w(e, t.x2, t.y) ||
										w(e, t.x, t.y2) ||
										w(e, t.x2, t.y2) ||
										w(t, e.x, e.y) ||
										w(t, e.x2, e.y) ||
										w(t, e.x, e.y2) ||
										w(t, e.x2, e.y2) ||
										(((e.x2 > t.x && t.x > e.x) || (t.x2 > e.x && e.x > t.x)) &&
											((e.y2 > t.y && t.y > e.y) || (t.y2 > e.y && e.y > t.y)))
								);
							},
							C = function(t, e, n, r, o, a, s, u) {
								i.isArray(t) || (t = [t, e, n, r, o, a, s, u]);
								var c = b.apply(null, t);
								return M(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y);
							},
							O = function(t, e, n, r, i, o, a, s, u) {
								var c = 1 - u,
									l = Math.pow(c, 3),
									f = Math.pow(c, 2),
									h = u * u,
									p = h * u,
									d = l * t + 3 * f * u * n + 3 * c * u * u * i + p * a,
									g = l * e + 3 * f * u * r + 3 * c * u * u * o + p * s,
									y = t + 2 * u * (n - t) + h * (i - 2 * n + t),
									v = e + 2 * u * (r - e) + h * (o - 2 * r + e),
									m = n + 2 * u * (i - n) + h * (a - 2 * i + n),
									x = r + 2 * u * (o - r) + h * (s - 2 * o + r);
								return {
									x: d,
									y: g,
									m: { x: y, y: v },
									n: { x: m, y: x },
									start: { x: c * t + u * n, y: c * e + u * r },
									end: { x: c * i + u * a, y: c * o + u * s },
									alpha: 90 - (180 * Math.atan2(y - m, v - x)) / Math.PI,
								};
							},
							A = function(t, e, n) {
								var r = C(t),
									i = C(e);
								if (!P(r, i)) return n ? 0 : [];
								for (
									var o = x.apply(0, t),
										a = x.apply(0, e),
										s = ~~(o / 8),
										u = ~~(a / 8),
										c = [],
										l = [],
										f = {},
										h = n ? 0 : [],
										p = 0;
									s + 1 > p;
									p++
								) {
									var d = O.apply(0, t.concat(p / s));
									c.push({ x: d.x, y: d.y, t: p / s });
								}
								for (var g = 0; u + 1 > g; g++) {
									var y = O.apply(0, e.concat(g / u));
									l.push({ x: y.x, y: y.y, t: g / u });
								}
								for (var v = 0; s > v; v++)
									for (var m = 0; u > m; m++) {
										var b = c[v],
											w = c[v + 1],
											S = l[m],
											M = l[m + 1],
											A = 0.001 > Math.abs(w.x - b.x) ? 'y' : 'x',
											k = 0.001 > Math.abs(M.x - S.x) ? 'y' : 'x',
											I = _(b.x, b.y, w.x, w.y, S.x, S.y, M.x, M.y);
										if (I) {
											if (f[I.x.toFixed(4)] === I.y.toFixed(4)) continue;
											f[I.x.toFixed(4)] = I.y.toFixed(4);
											var T = b.t + Math.abs((I[A] - b[A]) / (w[A] - b[A])) * (w.t - b.t),
												E = S.t + Math.abs((I[k] - S[k]) / (M[k] - S[k])) * (M.t - S.t);
											0 > T ||
												T > 1 ||
												0 > E ||
												E > 1 ||
												(n ? h++ : h.push({ x: I.x, y: I.y, t1: T, t2: E }));
										}
									}
								return h;
							},
							k = function(t, e, n) {
								(t = g(t)), (e = g(e));
								for (
									var r = void 0,
										i = void 0,
										o = void 0,
										a = void 0,
										s = void 0,
										u = void 0,
										c = void 0,
										l = void 0,
										f = void 0,
										h = void 0,
										p = n ? 0 : [],
										d = 0,
										y = t.length;
									y > d;
									d++
								) {
									var v = t[d];
									if ('M' === v[0]) (r = s = v[1]), (i = u = v[2]);
									else {
										'C' === v[0]
											? ((f = [r, i].concat(v.slice(1))), (r = f[6]), (i = f[7]))
											: ((f = [r, i, r, i, s, u, s, u]), (r = s), (i = u));
										for (var m = 0, x = e.length; x > m; m++) {
											var b = e[m];
											if ('M' === b[0]) (o = c = b[1]), (a = l = b[2]);
											else {
												'C' === b[0]
													? ((h = [o, a].concat(b.slice(1))), (o = h[6]), (a = h[7]))
													: ((h = [o, a, o, a, c, l, c, l]), (o = c), (a = l));
												var _ = A(f, h, n);
												if (n) p += _;
												else {
													for (var w = 0, S = _.length; S > w; w++)
														(_[w].segment1 = d),
															(_[w].segment2 = m),
															(_[w].bez1 = f),
															(_[w].bez2 = h);
													p = p.concat(_);
												}
											}
										}
									}
								}
								return p;
							};
						t.exports = {
							parsePathString: u,
							parsePathArray: v,
							pathTocurve: g,
							pathToAbsolute: f,
							catmullRomToBezier: c,
							rectPath: S,
							intersection: function(t, e) {
								return k(t, e);
							},
						};
					},
					function(t, e, n) {
						'use strict';
						function r() {
							return b || (S(i), (b = w.now() + _));
						}
						function i() {
							b = 0;
						}
						function o() {
							this._call = this._time = this._next = null;
						}
						function a(t, e, n) {
							var r = new o();
							return r.restart(t, e, n), r;
						}
						function s() {
							r(), ++g;
							for (var t, e = h; e; ) 0 > (t = b - e._time) || e._call.call(null, t), (e = e._next);
							--g;
						}
						function u() {
							(b = (x = w.now()) + _), (g = y = 0);
							try {
								s();
							} finally {
								(g = 0), l(), (b = 0);
							}
						}
						function c() {
							var t = w.now(),
								e = t - x;
							e > m && ((_ -= e), (x = t));
						}
						function l() {
							for (var t, e, n = h, r = 1 / 0; n; )
								n._call
									? (r > n._time && (r = n._time), (t = n), (n = n._next))
									: ((e = n._next), (n._next = null), (n = t ? (t._next = e) : (h = e)));
							(p = t), f(r);
						}
						function f(t) {
							if (!g) {
								y && (y = clearTimeout(y));
								t - b > 24
									? (1 / 0 > t && (y = setTimeout(u, t - w.now() - _)), v && (v = clearInterval(v)))
									: (v || ((x = w.now()), (v = setInterval(c, m))), (g = 1), S(u));
							}
						}
						(e.b = r), (e.a = o), (e.c = a), (e.d = s);
						var h,
							p,
							d =
								'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
									? function(t) {
											return typeof t;
									  }
									: function(t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  },
							g = 0,
							y = 0,
							v = 0,
							m = 1e3,
							x = 0,
							b = 0,
							_ = 0,
							w =
								'object' === ('undefined' == typeof performance ? 'undefined' : d(performance)) &&
								performance.now
									? performance
									: Date,
							S =
								'object' === ('undefined' == typeof window ? 'undefined' : d(window)) &&
								window.requestAnimationFrame
									? window.requestAnimationFrame.bind(window)
									: function(t) {
											setTimeout(t, 17);
									  };
						o.prototype = a.prototype = {
							constructor: o,
							restart: function(t, e, n) {
								if ('function' != typeof t) throw new TypeError('callback is not a function');
								(n = (null == n ? r() : +n) + (null == e ? 0 : +e)),
									this._next || p === this || (p ? (p._next = this) : (h = this), (p = this)),
									(this._call = t),
									(this._time = n),
									f();
							},
							stop: function() {
								this._call && ((this._call = null), (this._time = 1 / 0), f());
							},
						};
					},
					function(t, e, n) {
						'use strict';
						var r = n(15),
							i = n(93),
							o = n(96),
							a = n(97),
							s = n(31),
							u = n(98),
							c = n(99),
							l = n(95),
							f =
								'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
									? function(t) {
											return typeof t;
									  }
									: function(t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  };
						e.a = function(t, e) {
							var n,
								h = void 0 === e ? 'undefined' : f(e);
							return null == e || 'boolean' === h
								? Object(l.a)(e)
								: ('number' === h
										? s.a
										: 'string' === h
											? (n = Object(r.a)(e))
												? ((e = n), i.a)
												: c.a
											: e instanceof r.a
												? i.a
												: e instanceof Date
													? a.a
													: Array.isArray(e)
														? o.a
														: ('function' != typeof e.valueOf && 'function' != typeof e.toString) ||
														  isNaN(e)
															? u.a
															: s.a)(t, e);
						};
					},
					function(t, e, n) {
						'use strict';
						function r() {}
						function i(t) {
							var e;
							return (
								(t = (t + '').trim().toLowerCase()),
								(e = w.exec(t))
									? ((e = parseInt(e[1], 16)),
									  new c(
											((e >> 8) & 15) | ((e >> 4) & 240),
											((e >> 4) & 15) | (240 & e),
											((15 & e) << 4) | (15 & e),
											1
									  ))
									: (e = S.exec(t))
										? o(parseInt(e[1], 16))
										: (e = M.exec(t))
											? new c(e[1], e[2], e[3], 1)
											: (e = P.exec(t))
												? new c((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, 1)
												: (e = C.exec(t))
													? a(e[1], e[2], e[3], e[4])
													: (e = O.exec(t))
														? a((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
														: (e = A.exec(t))
															? f(e[1], e[2] / 100, e[3] / 100, 1)
															: (e = k.exec(t))
																? f(e[1], e[2] / 100, e[3] / 100, e[4])
																: I.hasOwnProperty(t)
																	? o(I[t])
																	: 'transparent' === t
																		? new c(NaN, NaN, NaN, 0)
																		: null
							);
						}
						function o(t) {
							return new c((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
						}
						function a(t, e, n, r) {
							return r > 0 || (t = e = n = NaN), new c(t, e, n, r);
						}
						function s(t) {
							return (
								t instanceof r || (t = i(t)),
								t ? ((t = t.rgb()), new c(t.r, t.g, t.b, t.opacity)) : new c()
							);
						}
						function u(t, e, n, r) {
							return 1 === arguments.length ? s(t) : new c(t, e, n, null == r ? 1 : r);
						}
						function c(t, e, n, r) {
							(this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
						}
						function l(t) {
							return (
								(t = Math.max(0, Math.min(255, Math.round(t) || 0))),
								(16 > t ? '0' : '') + t.toString(16)
							);
						}
						function f(t, e, n, r) {
							return (
								r > 0 ? (n > 0 && 1 > n ? e > 0 || (t = NaN) : (t = e = NaN)) : (t = e = n = NaN),
								new d(t, e, n, r)
							);
						}
						function h(t) {
							if (t instanceof d) return new d(t.h, t.s, t.l, t.opacity);
							if ((t instanceof r || (t = i(t)), !t)) return new d();
							if (t instanceof d) return t;
							t = t.rgb();
							var e = t.r / 255,
								n = t.g / 255,
								o = t.b / 255,
								a = Math.min(e, n, o),
								s = Math.max(e, n, o),
								u = NaN,
								c = s - a,
								l = (s + a) / 2;
							return (
								c
									? ((u =
											e === s
												? (n - o) / c + 6 * (o > n)
												: n === s
													? (o - e) / c + 2
													: (e - n) / c + 4),
									  (c /= 0.5 > l ? s + a : 2 - s - a),
									  (u *= 60))
									: (c = l > 0 && 1 > l ? 0 : u),
								new d(u, c, l, t.opacity)
							);
						}
						function p(t, e, n, r) {
							return 1 === arguments.length ? h(t) : new d(t, e, n, null == r ? 1 : r);
						}
						function d(t, e, n, r) {
							(this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
						}
						function g(t, e, n) {
							return (
								255 *
								(60 > t
									? e + ((n - e) * t) / 60
									: 180 > t
										? n
										: 240 > t
											? e + ((n - e) * (240 - t)) / 60
											: e)
							);
						}
						(e.a = r),
							n.d(e, 'd', function() {
								return v;
							}),
							n.d(e, 'c', function() {
								return m;
							}),
							(e.e = i),
							(e.h = s),
							(e.g = u),
							(e.b = c),
							(e.f = p);
						var y = n(50),
							v = 0.7,
							m = 1 / v,
							x = '\\s*([+-]?\\d+)\\s*',
							b = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
							_ = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
							w = /^#([0-9a-f]{3})$/,
							S = /^#([0-9a-f]{6})$/,
							M = RegExp('^rgb\\(' + [x, x, x] + '\\)$'),
							P = RegExp('^rgb\\(' + [_, _, _] + '\\)$'),
							C = RegExp('^rgba\\(' + [x, x, x, b] + '\\)$'),
							O = RegExp('^rgba\\(' + [_, _, _, b] + '\\)$'),
							A = RegExp('^hsl\\(' + [b, _, _] + '\\)$'),
							k = RegExp('^hsla\\(' + [b, _, _, b] + '\\)$'),
							I = {
								aliceblue: 15792383,
								antiquewhite: 16444375,
								aqua: 65535,
								aquamarine: 8388564,
								azure: 15794175,
								beige: 16119260,
								bisque: 16770244,
								black: 0,
								blanchedalmond: 16772045,
								blue: 255,
								blueviolet: 9055202,
								brown: 10824234,
								burlywood: 14596231,
								cadetblue: 6266528,
								chartreuse: 8388352,
								chocolate: 13789470,
								coral: 16744272,
								cornflowerblue: 6591981,
								cornsilk: 16775388,
								crimson: 14423100,
								cyan: 65535,
								darkblue: 139,
								darkcyan: 35723,
								darkgoldenrod: 12092939,
								darkgray: 11119017,
								darkgreen: 25600,
								darkgrey: 11119017,
								darkkhaki: 12433259,
								darkmagenta: 9109643,
								darkolivegreen: 5597999,
								darkorange: 16747520,
								darkorchid: 10040012,
								darkred: 9109504,
								darksalmon: 15308410,
								darkseagreen: 9419919,
								darkslateblue: 4734347,
								darkslategray: 3100495,
								darkslategrey: 3100495,
								darkturquoise: 52945,
								darkviolet: 9699539,
								deeppink: 16716947,
								deepskyblue: 49151,
								dimgray: 6908265,
								dimgrey: 6908265,
								dodgerblue: 2003199,
								firebrick: 11674146,
								floralwhite: 16775920,
								forestgreen: 2263842,
								fuchsia: 16711935,
								gainsboro: 14474460,
								ghostwhite: 16316671,
								gold: 16766720,
								goldenrod: 14329120,
								gray: 8421504,
								green: 32768,
								greenyellow: 11403055,
								grey: 8421504,
								honeydew: 15794160,
								hotpink: 16738740,
								indianred: 13458524,
								indigo: 4915330,
								ivory: 16777200,
								khaki: 15787660,
								lavender: 15132410,
								lavenderblush: 16773365,
								lawngreen: 8190976,
								lemonchiffon: 16775885,
								lightblue: 11393254,
								lightcoral: 15761536,
								lightcyan: 14745599,
								lightgoldenrodyellow: 16448210,
								lightgray: 13882323,
								lightgreen: 9498256,
								lightgrey: 13882323,
								lightpink: 16758465,
								lightsalmon: 16752762,
								lightseagreen: 2142890,
								lightskyblue: 8900346,
								lightslategray: 7833753,
								lightslategrey: 7833753,
								lightsteelblue: 11584734,
								lightyellow: 16777184,
								lime: 65280,
								limegreen: 3329330,
								linen: 16445670,
								magenta: 16711935,
								maroon: 8388608,
								mediumaquamarine: 6737322,
								mediumblue: 205,
								mediumorchid: 12211667,
								mediumpurple: 9662683,
								mediumseagreen: 3978097,
								mediumslateblue: 8087790,
								mediumspringgreen: 64154,
								mediumturquoise: 4772300,
								mediumvioletred: 13047173,
								midnightblue: 1644912,
								mintcream: 16121850,
								mistyrose: 16770273,
								moccasin: 16770229,
								navajowhite: 16768685,
								navy: 128,
								oldlace: 16643558,
								olive: 8421376,
								olivedrab: 7048739,
								orange: 16753920,
								orangered: 16729344,
								orchid: 14315734,
								palegoldenrod: 15657130,
								palegreen: 10025880,
								paleturquoise: 11529966,
								palevioletred: 14381203,
								papayawhip: 16773077,
								peachpuff: 16767673,
								peru: 13468991,
								pink: 16761035,
								plum: 14524637,
								powderblue: 11591910,
								purple: 8388736,
								rebeccapurple: 6697881,
								red: 16711680,
								rosybrown: 12357519,
								royalblue: 4286945,
								saddlebrown: 9127187,
								salmon: 16416882,
								sandybrown: 16032864,
								seagreen: 3050327,
								seashell: 16774638,
								sienna: 10506797,
								silver: 12632256,
								skyblue: 8900331,
								slateblue: 6970061,
								slategray: 7372944,
								slategrey: 7372944,
								snow: 16775930,
								springgreen: 65407,
								steelblue: 4620980,
								tan: 13808780,
								teal: 32896,
								thistle: 14204888,
								tomato: 16737095,
								turquoise: 4251856,
								violet: 15631086,
								wheat: 16113331,
								white: 16777215,
								whitesmoke: 16119285,
								yellow: 16776960,
								yellowgreen: 10145074,
							};
						Object(y.a)(r, i, {
							displayable: function() {
								return this.rgb().displayable();
							},
							hex: function() {
								return this.rgb().hex();
							},
							toString: function() {
								return this.rgb() + '';
							},
						}),
							Object(y.a)(
								c,
								u,
								Object(y.b)(r, {
									brighter: function(t) {
										return (
											(t = null == t ? m : Math.pow(m, t)),
											new c(this.r * t, this.g * t, this.b * t, this.opacity)
										);
									},
									darker: function(t) {
										return (
											(t = null == t ? v : Math.pow(v, t)),
											new c(this.r * t, this.g * t, this.b * t, this.opacity)
										);
									},
									rgb: function() {
										return this;
									},
									displayable: function() {
										return !(
											0 > this.r ||
											this.r > 255 ||
											0 > this.g ||
											this.g > 255 ||
											0 > this.b ||
											this.b > 255 ||
											0 > this.opacity ||
											this.opacity > 1
										);
									},
									hex: function() {
										return '#' + l(this.r) + l(this.g) + l(this.b);
									},
									toString: function() {
										var t = this.opacity;
										return (
											(t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
											(1 === t ? 'rgb(' : 'rgba(') +
												Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
												', ' +
												Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
												', ' +
												Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
												(1 === t ? ')' : ', ' + t + ')')
										);
									},
								})
							),
							Object(y.a)(
								d,
								p,
								Object(y.b)(r, {
									brighter: function(t) {
										return (
											(t = null == t ? m : Math.pow(m, t)),
											new d(this.h, this.s, this.l * t, this.opacity)
										);
									},
									darker: function(t) {
										return (
											(t = null == t ? v : Math.pow(v, t)),
											new d(this.h, this.s, this.l * t, this.opacity)
										);
									},
									rgb: function() {
										var t = (this.h % 360) + 360 * (0 > this.h),
											e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
											n = this.l,
											r = n + (0.5 > n ? n : 1 - n) * e,
											i = 2 * n - r;
										return new c(
											g(240 > t ? t + 120 : t - 240, i, r),
											g(t, i, r),
											g(120 > t ? t + 240 : t - 120, i, r),
											this.opacity
										);
									},
									displayable: function() {
										return (
											((this.s >= 0 && 1 >= this.s) || isNaN(this.s)) &&
											this.l >= 0 &&
											1 >= this.l &&
											this.opacity >= 0 &&
											1 >= this.opacity
										);
									},
								})
							);
					},
					function(t, e, n) {
						'use strict';
						function r(t, e) {
							var n = Object.create(t.prototype);
							for (var r in e) n[r] = e[r];
							return n;
						}
						(e.b = r),
							(e.a = function(t, e, n) {
								(t.prototype = e.prototype = n), (n.constructor = t);
							});
					},
					function(t, e, n) {
						'use strict';
						function r(t, e, n, r, i) {
							var o = t * t,
								a = o * t;
							return (
								((1 - 3 * t + 3 * o - a) * e +
									(4 - 6 * o + 3 * a) * n +
									(1 + 3 * t + 3 * o - 3 * a) * r +
									a * i) /
								6
							);
						}
						(e.a = r),
							(e.b = function(t) {
								var e = t.length - 1;
								return function(n) {
									var i = n > 0 ? (1 > n ? Math.floor(n * e) : ((n = 1), e - 1)) : (n = 0),
										o = t[i],
										a = t[i + 1];
									return r(
										(n - i / e) * e,
										i > 0 ? t[i - 1] : 2 * o - a,
										o,
										a,
										e - 1 > i ? t[i + 2] : 2 * a - o
									);
								};
							});
					},
					function(t, e, n) {
						var r = n(3).vec2;
						t.exports = {
							at: function(t, e, n) {
								return (e - t) * n + t;
							},
							pointDistance: function(t, e, n, i, o, a) {
								var s = [n - t, i - e];
								if (r.exactEquals(s, [0, 0])) return NaN;
								var u = [-s[1], s[0]];
								r.normalize(u, u);
								var c = [o - t, a - e];
								return Math.abs(r.dot(c, u));
							},
							box: function(t, e, n, r, i) {
								var o = i / 2,
									a = Math.min(t, n),
									s = Math.max(t, n);
								return {
									minX: a - o,
									minY: Math.min(e, r) - o,
									maxX: s + o,
									maxY: Math.max(e, r) + o,
								};
							},
							len: function(t, e, n, r) {
								return Math.sqrt((n - t) * (n - t) + (r - e) * (r - e));
							},
						};
					},
					function(t, e, n) {
						function r(t, e, n, r) {
							var i = 1 - r;
							return i * (i * t + 2 * r * e) + r * r * n;
						}
						function i(t, e, n, i, o, a, u, c, l) {
							var f = void 0,
								h = 0.005,
								p = 1 / 0,
								d = void 0,
								g = void 0,
								y = void 0,
								v = void 0,
								m = void 0,
								x = void 0,
								b = [u, c];
							for (v = 0; 1 > v; v += 0.05)
								(g = [r(t, n, o, v), r(e, i, a, v)]),
									(d = s.squaredDistance(b, g)),
									p > d && ((f = v), (p = d));
							for (p = 1 / 0, x = 0; 32 > x && 1e-4 <= h; x++) {
								var _ = f - h,
									w = f + h;
								(g = [r(t, n, o, _), r(e, i, a, _)]),
									(d = s.squaredDistance(b, g)),
									_ >= 0 && p > d
										? ((f = _), (p = d))
										: ((y = [r(t, n, o, w), r(e, i, a, w)]),
										  (m = s.squaredDistance(b, y)),
										  1 >= w && p > m ? ((f = w), (p = m)) : (h *= 0.5));
							}
							return l && ((l.x = r(t, n, o, f)), (l.y = r(e, i, a, f))), Math.sqrt(p);
						}
						function o(t, e, n) {
							var r = t + n - 2 * e;
							if (a.isNumberEqual(r, 0)) return [0.5];
							var i = (t - e) / r;
							return i > 1 || 0 > i ? [] : [i];
						}
						var a = n(0),
							s = n(3).vec2;
						t.exports = {
							at: r,
							projectPoint: function(t, e, n, r, o, a, s, u) {
								var c = {};
								return i(t, e, n, r, o, a, s, u, c), c;
							},
							pointDistance: i,
							extrema: o,
						};
					},
					function(t, e, n) {
						function r(t, e, n, r) {
							return { x: Math.cos(r) * n + t, y: Math.sin(r) * n + e };
						}
						function i(t, e, n, r) {
							var i = void 0,
								o = void 0;
							return (
								r
									? e > t
										? ((i = e - t), (o = 2 * Math.PI - n + t))
										: t > n && ((i = 2 * Math.PI - t + e), (o = t - n))
									: ((i = t - e), (o = n - t)),
								i > o ? n : e
							);
						}
						function o(t, e, n, r) {
							var o = 0;
							return (
								n - e < 2 * Math.PI || (o = 2 * Math.PI),
								(e = u.mod(e, 2 * Math.PI)),
								(n = u.mod(n, 2 * Math.PI) + o),
								(t = u.mod(t, 2 * Math.PI)),
								r
									? n > e
										? e > t || t > n
											? t
											: i(t, e, n)
										: t > n && e > t
											? t
											: i(t, n, e, !0)
									: e > n
										? t > e || n > t
											? t
											: i(t, n, e)
										: t > e && n > t
											? t
											: i(t, e, n, !0)
							);
						}
						function a(t, e, n, r, i, a, s, u, l) {
							var f = [s, u],
								h = [t, e],
								p = [1, 0],
								d = c.subtract([], f, h),
								g = c.angleTo(p, d);
							g = o(g, r, i, a);
							var y = [n * Math.cos(g) + t, n * Math.sin(g) + e];
							return l && ((l.x = y[0]), (l.y = y[1])), c.distance(y, f);
						}
						function s(t, e, n, i, a, s) {
							var c = Math.PI / 2,
								l = Math.PI,
								f = (3 * Math.PI) / 2,
								h = [],
								p = o(0, i, a, s);
							0 === p && h.push(r(t, e, n, 0)),
								(p = o(c, i, a, s)),
								p === c && h.push(r(t, e, n, c)),
								(p = o(l, i, a, s)),
								p === l && h.push(r(t, e, n, l)),
								(p = o(f, i, a, s)),
								p === f && h.push(r(t, e, n, f)),
								h.push(r(t, e, n, i)),
								h.push(r(t, e, n, a));
							var d = 1 / 0,
								g = -1 / 0,
								y = 1 / 0,
								v = -1 / 0;
							return (
								u.each(h, function(t) {
									d > t.x && (d = t.x),
										t.x > g && (g = t.x),
										y > t.y && (y = t.y),
										t.y > v && (v = t.y);
								}),
								{ minX: d, minY: y, maxX: g, maxY: v }
							);
						}
						var u = n(0),
							c = n(3).vec2;
						t.exports = {
							nearAngle: o,
							projectPoint: function(t, e, n, r, i, o, s, u) {
								var c = {};
								return a(t, e, n, r, i, o, s, u, c), c;
							},
							pointDistance: a,
							box: s,
						};
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(a.ATTRS = { x: 0, y: 0, width: 0, height: 0, radius: 0, lineWidth: 1 }),
							r.extend(a, i),
							r.augment(a, {
								canFill: !0,
								canStroke: !0,
								type: 'rect',
								getDefaultAttrs: function() {
									return { lineWidth: 1, radius: 0 };
								},
								calculateBox: function() {
									var t = this,
										e = t.__attrs,
										n = e.x,
										r = e.y,
										i = e.width,
										o = e.height,
										a = this.getHitLineWidth(),
										s = a / 2;
									return { minX: n - s, minY: r - s, maxX: n + i + s, maxY: r + o + s };
								},
								isPointInPath: function(t, e) {
									var n = this,
										r = n.hasFill(),
										i = n.hasStroke();
									return r && i
										? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e)
										: r
											? n.__isPointInFill(t, e)
											: !!i && n.__isPointInStroke(t, e);
								},
								__isPointInFill: function(t, e) {
									var n = this.get('context');
									return !!n && (this.createPath(), n.isPointInPath(t, e));
								},
								__isPointInStroke: function(t, e) {
									var n = this,
										r = n.__attrs,
										i = r.x,
										a = r.y,
										s = r.width,
										u = r.height,
										c = r.radius,
										l = this.getHitLineWidth();
									if (0 === c) {
										var f = l / 2;
										return (
											o.line(i - f, a, i + s + f, a, l, t, e) ||
											o.line(i + s, a - f, i + s, a + u + f, l, t, e) ||
											o.line(i + s + f, a + u, i - f, a + u, l, t, e) ||
											o.line(i, a + u + f, i, a - f, l, t, e)
										);
									}
									return (
										o.line(i + c, a, i + s - c, a, l, t, e) ||
										o.line(i + s, a + c, i + s, a + u - c, l, t, e) ||
										o.line(i + s - c, a + u, i + c, a + u, l, t, e) ||
										o.line(i, a + u - c, i, a + c, l, t, e) ||
										o.arcline(i + s - c, a + c, c, 1.5 * Math.PI, 2 * Math.PI, !1, l, t, e) ||
										o.arcline(i + s - c, a + u - c, c, 0, 0.5 * Math.PI, !1, l, t, e) ||
										o.arcline(i + c, a + u - c, c, 0.5 * Math.PI, Math.PI, !1, l, t, e) ||
										o.arcline(i + c, a + c, c, Math.PI, 1.5 * Math.PI, !1, l, t, e)
									);
								},
								createPath: function(t) {
									var e = this,
										n = e.__attrs,
										r = n.x,
										i = n.y,
										o = n.width,
										a = n.height,
										s = n.radius;
									(t = t || e.get('context')),
										t.beginPath(),
										0 === s
											? t.rect(r, i, o, a)
											: (t.moveTo(r + s, i),
											  t.lineTo(r + o - s, i),
											  t.arc(r + o - s, i + s, s, -Math.PI / 2, 0, !1),
											  t.lineTo(r + o, i + a - s),
											  t.arc(r + o - s, i + a - s, s, 0, Math.PI / 2, !1),
											  t.lineTo(r + s, i + a),
											  t.arc(r + s, i + a - s, s, Math.PI / 2, Math.PI, !1),
											  t.lineTo(r, i + s),
											  t.arc(r + s, i + s, s, Math.PI, (3 * Math.PI) / 2, !1),
											  t.closePath());
								},
							}),
							(t.exports = a);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(a.Symbols = {
							circle: function(t, e, n, r) {
								r.arc(t, e, n, 0, 2 * Math.PI, !1);
							},
							square: function(t, e, n, r) {
								r.moveTo(t - n, e - n),
									r.lineTo(t + n, e - n),
									r.lineTo(t + n, e + n),
									r.lineTo(t - n, e + n),
									r.closePath();
							},
							diamond: function(t, e, n, r) {
								r.moveTo(t - n, e),
									r.lineTo(t, e - n),
									r.lineTo(t + n, e),
									r.lineTo(t, e + n),
									r.closePath();
							},
							triangle: function(t, e, n, r) {
								var i = n * Math.sin((1 / 3) * Math.PI);
								r.moveTo(t - n, e + i), r.lineTo(t, e - i), r.lineTo(t + n, e + i), r.closePath();
							},
							'triangle-down': function(t, e, n, r) {
								var i = n * Math.sin((1 / 3) * Math.PI);
								r.moveTo(t - n, e - i), r.lineTo(t + n, e - i), r.lineTo(t, e + i), r.closePath();
							},
						}),
							(a.ATTRS = { path: null, lineWidth: 1 }),
							r.extend(a, i),
							r.augment(a, {
								type: 'marker',
								canFill: !0,
								canStroke: !0,
								getDefaultAttrs: function() {
									return { x: 0, y: 0, lineWidth: 1 };
								},
								calculateBox: function() {
									var t = this.__attrs,
										e = t.x,
										n = t.y,
										r = t.radius,
										i = this.getHitLineWidth(),
										o = i / 2 + r;
									return { minX: e - o, minY: n - o, maxX: e + o, maxY: n + o };
								},
								isPointInPath: function(t, e) {
									var n = this.__attrs,
										r = n.x,
										i = n.y,
										a = n.radius,
										s = this.getHitLineWidth();
									return o.circle(r, i, a + s / 2, t, e);
								},
								createPath: function(t) {
									var e = this.__attrs,
										n = e.x,
										i = e.y,
										o = e.radius,
										s = e.symbol || 'circle',
										u = void 0;
									(u = r.isFunction(s) ? s : a.Symbols[s]), t.beginPath(), u(n, i, o, t, this);
								},
							}),
							(t.exports = a);
					},
					function(t, e, n) {
						(function(e) {
							var n =
									'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
										? function(t) {
												return typeof t;
										  }
										: function(t) {
												return t &&
													'function' == typeof Symbol &&
													t.constructor === Symbol &&
													t !== Symbol.prototype
													? 'symbol'
													: typeof t;
										  },
								r =
									'object' == (void 0 === e ? 'undefined' : n(e)) && e && e.Object === Object && e;
							t.exports = r;
						}.call(e, n(116)));
					},
					function(t, e, n) {
						function r(t) {
							return 'string' == typeof t || (!o(t) && a(t) && i(t) == s);
						}
						var i = n(7),
							o = n(6),
							a = n(4),
							s = '[object String]';
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							if (!i(t)) return o(t);
							var e = [];
							for (var n in Object(t)) s.call(t, n) && 'constructor' != n && e.push(n);
							return e;
						}
						var i = n(18),
							o = n(123),
							a = Object.prototype,
							s = a.hasOwnProperty;
						t.exports = r;
					},
					function(t, e) {
						function n(t, e) {
							return function(n) {
								return t(e(n));
							};
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t) {
							if (null != t) {
								try {
									return i.call(t);
								} catch (t) {}
								try {
									return t + '';
								} catch (t) {}
							}
							return '';
						}
						var r = Function.prototype,
							i = r.toString;
						t.exports = n;
					},
					function(t, e) {
						function n(t) {
							return 'number' == typeof t && t > -1 && t % 1 == 0 && r >= t;
						}
						var r = 9007199254740991;
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							return null == t ? '' : i(t);
						}
						var i = n(136);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							var e = -1,
								n = null == t ? 0 : t.length;
							for (this.clear(); ++e < n; ) {
								var r = t[e];
								this.set(r[0], r[1]);
							}
						}
						var i = n(150),
							o = n(157),
							a = n(159),
							s = n(160),
							u = n(161);
						(r.prototype.clear = i),
							(r.prototype.delete = o),
							(r.prototype.get = a),
							(r.prototype.has = s),
							(r.prototype.set = u),
							(t.exports = r);
					},
					function(t, e) {
						function n(t, e) {
							for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t); );
							return t;
						}
						t.exports = n;
					},
					function(t, e, n) {
						var r = n(10);
						t.exports = (function() {
							try {
								var t = r(Object, 'defineProperty');
								return t({}, '', {}), t;
							} catch (t) {}
						})();
					},
					function(t, e, n) {
						function r(t, e) {
							var n = a(t),
								r = !n && o(t),
								l = !n && !r && s(t),
								h = !n && !r && !l && c(t),
								p = n || r || l || h,
								d = p ? i(t.length, String) : [],
								g = d.length;
							for (var y in t)
								(!e && !f.call(t, y)) ||
									(p &&
										('length' == y ||
											(l && ('offset' == y || 'parent' == y)) ||
											(h && ('buffer' == y || 'byteLength' == y || 'byteOffset' == y)) ||
											u(y, g))) ||
									d.push(y);
							return d;
						}
						var i = n(163),
							o = n(34),
							a = n(6),
							s = n(19),
							u = n(68),
							c = n(23),
							l = Object.prototype,
							f = l.hasOwnProperty;
						t.exports = r;
					},
					function(t, e) {
						function n(t, e) {
							var n = void 0 === t ? 'undefined' : r(t);
							return (
								!!(e = null == e ? i : e) &&
								('number' == n || ('symbol' != n && o.test(t))) &&
								t > -1 &&
								t % 1 == 0 &&
								e > t
							);
						}
						var r =
								'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
									? function(t) {
											return typeof t;
									  }
									: function(t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  },
							i = 9007199254740991,
							o = /^(?:0|[1-9]\d*)$/;
						t.exports = n;
					},
					function(t, e, n) {
						(function(t) {
							function r(t, e) {
								if (e) return t.slice();
								var n = t.length,
									r = l ? l(n) : new t.constructor(n);
								return t.copy(r), r;
							}
							var i =
									'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
										? function(t) {
												return typeof t;
										  }
										: function(t) {
												return t &&
													'function' == typeof Symbol &&
													t.constructor === Symbol &&
													t !== Symbol.prototype
													? 'symbol'
													: typeof t;
										  },
								o = n(5),
								a = 'object' == i(e) && e && !e.nodeType && e,
								s = a && 'object' == i(t) && t && !t.nodeType && t,
								u = s && s.exports === a,
								c = u ? o.Buffer : void 0,
								l = c ? c.allocUnsafe : void 0;
							t.exports = r;
						}.call(e, n(35)(t)));
					},
					function(t, e) {
						function n() {
							return [];
						}
						t.exports = n;
					},
					function(t, e, n) {
						var r = n(72),
							i = n(42),
							o = n(41),
							a = n(70);
						t.exports = Object.getOwnPropertySymbols
							? function(t) {
									for (var e = []; t; ) r(e, o(t)), (t = i(t));
									return e;
							  }
							: a;
					},
					function(t, e) {
						function n(t, e) {
							for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
							return t;
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							return i(t, a, o);
						}
						var i = n(74),
							o = n(41),
							a = n(14);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e, n) {
							var r = e(t);
							return o(t) ? r : i(r, n(t));
						}
						var i = n(72),
							o = n(6);
						t.exports = r;
					},
					function(t, e, n) {
						t.exports = n(5).Uint8Array;
					},
					function(t, e, n) {
						function r(t, e) {
							return new t.constructor(e ? i(t.buffer) : t.buffer, t.byteOffset, t.length);
						}
						var i = n(43);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return 'function' != typeof t.constructor || a(t) ? {} : i(o(t));
						}
						var i = n(176),
							o = n(42),
							a = n(18);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return i(function(e, n) {
								var r = -1,
									i = n.length,
									a = i > 1 ? n[i - 1] : void 0,
									s = i > 2 ? n[2] : void 0;
								for (
									a = t.length > 3 && 'function' == typeof a ? (i--, a) : void 0,
										s && o(n[0], n[1], s) && ((a = 3 > i ? void 0 : a), (i = 1)),
										e = Object(e);
									++r < i;

								) {
									var u = n[r];
									u && t(e, u, r, a);
								}
								return e;
							});
						}
						var i = n(79),
							o = n(188);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e) {
							return a(o(t, e, i), t + '');
						}
						var i = n(44),
							o = n(182),
							a = n(184);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e, n) {
							((void 0 === n || o(t[e], n)) && (void 0 !== n || e in t)) || i(t, e, n);
						}
						var i = n(40),
							o = n(20);
						t.exports = r;
					},
					function(t, e, n) {
						t.exports = n(191)();
					},
					function(t, e) {
						function n(t, e) {
							return '__proto__' == e ? void 0 : t[e];
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t) {
							return r.test(t);
						}
						var r = RegExp(
							'[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]'
						);
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							return o(t) ? a(t) : i(t);
						}
						var i = n(200),
							o = n(83),
							a = n(201);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e, n, r, c, l) {
							var f = n & s,
								h = t.length,
								p = e.length;
							if (!(h == p || (f && p > h))) return !1;
							var d = l.get(t);
							if (d && l.get(e)) return d == e;
							var g = -1,
								y = !0,
								v = n & u ? new i() : void 0;
							for (l.set(t, e), l.set(e, t); ++g < h; ) {
								var m = t[g],
									x = e[g];
								if (r) var b = f ? r(x, m, g, e, t, l) : r(m, x, g, t, e, l);
								if (void 0 !== b) {
									if (b) continue;
									y = !1;
									break;
								}
								if (v) {
									if (
										!o(e, function(t, e) {
											if (!a(v, e) && (m === t || c(m, t, n, r, l))) return v.push(e);
										})
									) {
										y = !1;
										break;
									}
								} else if (m !== x && !c(m, x, n, r, l)) {
									y = !1;
									break;
								}
							}
							return l.delete(t), l.delete(e), y;
						}
						var i = n(218),
							o = n(221),
							a = n(222),
							s = 1,
							u = 2;
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							var e = -1,
								n = Array(t.size);
							return (
								t.forEach(function(t, r) {
									n[++e] = [r, t];
								}),
								n
							);
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t) {
							var e = -1,
								n = Array(t.size);
							return (
								t.forEach(function(t) {
									n[++e] = t;
								}),
								n
							);
						}
						t.exports = n;
					},
					function(t, e, n) {
						var r = n(17),
							i = document.createElement('table'),
							o = document.createElement('tr'),
							a = /^\s*<(\w+|!)[^>]*>/,
							s = {
								tr: document.createElement('tbody'),
								tbody: i,
								thead: i,
								tfoot: i,
								td: o,
								th: o,
								'*': document.createElement('div'),
							};
						t.exports = {
							getBoundingClientRect: function(t, e) {
								if (t && t.getBoundingClientRect) {
									var n = t.getBoundingClientRect(),
										r = document.documentElement.clientTop,
										i = document.documentElement.clientLeft;
									return {
										top: n.top - r,
										bottom: n.bottom - r,
										left: n.left - i,
										right: n.right - i,
									};
								}
								return e || null;
							},
							getStyle: function(t, e, n) {
								try {
									return window.getComputedStyle
										? window.getComputedStyle(t, null)[e]
										: t.currentStyle[e];
								} catch (t) {
									return r.isNil(n) ? null : n;
								}
							},
							modifyCSS: function(t, e) {
								if (t) for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
								return t;
							},
							createDom: function(t) {
								var e = a.test(t) && RegExp.$1;
								e in s || (e = '*');
								var n = s[e];
								(t = t.replace(/(^\s*)|(\s*$)/g, '')), (n.innerHTML = '' + t);
								var r = n.childNodes[0];
								return n.removeChild(r), r;
							},
							getRatio: function() {
								return window.devicePixelRatio ? window.devicePixelRatio : 2;
							},
							getWidth: function(t, e) {
								var n = this.getStyle(t, 'width', e);
								return 'auto' === n && (n = t.offsetWidth), parseFloat(n);
							},
							getHeight: function(t, e) {
								var n = this.getStyle(t, 'height', e);
								return 'auto' === n && (n = t.offsetHeight), parseFloat(n);
							},
							getOuterHeight: function(t, e) {
								var n = this.getHeight(t, e),
									r = parseFloat(this.getStyle(t, 'borderTopWidth')) || 0,
									i = parseFloat(this.getStyle(t, 'paddingTop')) || 0,
									o = parseFloat(this.getStyle(t, 'paddingBottom')) || 0;
								return n + r + (parseFloat(this.getStyle(t, 'borderBottomWidth')) || 0) + i + o;
							},
							getOuterWidth: function(t, e) {
								var n = this.getWidth(t, e),
									r = parseFloat(this.getStyle(t, 'borderLeftWidth')) || 0,
									i = parseFloat(this.getStyle(t, 'paddingLeft')) || 0,
									o = parseFloat(this.getStyle(t, 'paddingRight')) || 0;
								return n + r + (parseFloat(this.getStyle(t, 'borderRightWidth')) || 0) + i + o;
							},
							addEventListener: function(t, e, n) {
								if (t) {
									if (t.addEventListener)
										return (
											t.addEventListener(e, n, !1),
											{
												remove: function() {
													t.removeEventListener(e, n, !1);
												},
											}
										);
									if (t.attachEvent)
										return (
											t.attachEvent('on' + e, n),
											{
												remove: function() {
													t.detachEvent('on' + e, n);
												},
											}
										);
								}
							},
							requestAnimationFrame: function(t) {
								return (window.requestAnimationFrame ||
									window.webkitRequestAnimationFrame ||
									function(t) {
										return setTimeout(t, 16);
									})(t);
							},
						};
					},
					function(t, e, n) {
						var r = n(0),
							i = function(t, e, n, r) {
								(this.type = t),
									(this.target = null),
									(this.currentTarget = null),
									(this.bubbles = n),
									(this.cancelable = r),
									(this.timeStamp = new Date().getTime()),
									(this.defaultPrevented = !1),
									(this.propagationStopped = !1),
									(this.removed = !1),
									(this.event = e);
							};
						r.augment(i, {
							preventDefault: function() {
								this.defaultPrevented = this.cancelable && !0;
							},
							stopPropagation: function() {
								this.propagationStopped = !0;
							},
							remove: function() {
								this.remove = !0;
							},
							clone: function() {
								return r.clone(this);
							},
							toString: function() {
								return '[Event (type=' + this.type + ')]';
							},
						}),
							(t.exports = i);
					},
					function(t, e, n) {
						function r(t, e, n) {
							for (var r = void 0, i = t.length - 1; i >= 0; i--) {
								var o = t[i];
								if (
									(o.__cfg.visible &&
										o.__cfg.capture &&
										(o.isGroup ? (r = o.getShape(e, n)) : o.isHit(e, n) && (r = o)),
									r)
								)
									break;
							}
							return r;
						}
						function i(t) {
							return function(e, n) {
								var r = t(e, n);
								return 0 === r ? e[l] - n[l] : r;
							};
						}
						function o(t) {
							if (!t.__cfg && t !== f) {
								var e = t.superclass.constructor;
								e && !e.__cfg && o(e),
									(t.__cfg = {}),
									a.merge(t.__cfg, e.__cfg),
									a.merge(t.__cfg, t.CFG);
							}
						}
						var a = n(0),
							s = n(91),
							u = n(263),
							c = {},
							l = '_INDEX',
							f = function t(e) {
								t.superclass.constructor.call(this, e),
									this.set('children', []),
									this._beforeRenderUI(),
									this._renderUI(),
									this._bindUI();
							};
						a.extend(f, s),
							a.augment(f, {
								isGroup: !0,
								canFill: !0,
								canStroke: !0,
								getDefaultCfg: function() {
									return o(this.constructor), a.merge({}, this.constructor.__cfg);
								},
								_beforeRenderUI: function() {},
								_renderUI: function() {},
								_bindUI: function() {},
								addShape: function(t, e) {
									var n = this.get('canvas');
									e = e || {};
									var r = c[t];
									if ((r || ((r = a.upperFirst(t)), (c[t] = r)), e.attrs)) {
										var i = e.attrs;
										if ('text' === t) {
											var o = n.get('fontFamily');
											o && (i.fontFamily = i.fontFamily ? i.fontFamily : o);
										}
									}
									(e.canvas = n), (e.type = t);
									var s = new u[r](e);
									return this.add(s), s;
								},
								addGroup: function(t, e) {
									var n = this.get('canvas'),
										r = void 0;
									if (((e = a.merge({}, e)), a.isFunction(t)))
										e
											? ((e.canvas = n), (e.parent = this), (r = new t(e)))
											: (r = new t({ canvas: n, parent: this })),
											this.add(r);
									else if (a.isObject(t)) (t.canvas = n), (r = new f(t)), this.add(r);
									else {
										if (void 0 !== t) return !1;
										(r = new f()), this.add(r);
									}
									return r;
								},
								renderBack: function(t, e) {
									var n = this.get('backShape'),
										r = this.getBBox();
									return (
										a.merge(e, {
											x: r.minX - t[3],
											y: r.minY - t[0],
											width: r.width + t[1] + t[3],
											height: r.height + t[0] + t[2],
										}),
										n ? n.attr(e) : (n = this.addShape('rect', { zIndex: -1, attrs: e })),
										this.set('backShape', n),
										this.sort(),
										n
									);
								},
								removeChild: function(t, e) {
									if (arguments.length < 2) {
										if (1 === arguments.length) {
											if (!a.isBoolean(t)) return this.contain(t) && t.remove(!0), this;
											e = t;
										}
										0 === arguments.length && (e = !0), f.superclass.remove.call(this, e);
									} else this.contain(t) && t.remove(e);
									return this;
								},
								add: function(t) {
									var e = this,
										n = e.get('children');
									if (a.isArray(t))
										a.each(t, function(t) {
											var n = t.get('parent');
											n && n.removeChild(t, !1), e.__setEvn(t);
										}),
											n.push.apply(n, t);
									else {
										var r = t,
											i = r.get('parent');
										i && i.removeChild(r, !1), e.__setEvn(r), n.push(r);
									}
									return e;
								},
								contain: function(t) {
									return this.get('children').indexOf(t) > -1;
								},
								getChildByIndex: function(t) {
									return this.get('children')[t];
								},
								getFirst: function() {
									return this.getChildByIndex(0);
								},
								getLast: function() {
									return this.getChildByIndex(this.get('children').length - 1);
								},
								__setEvn: function(t) {
									var e = this;
									(t.__cfg.parent = e),
										(t.__cfg.context = e.__cfg.context),
										(t.__cfg.canvas = e.__cfg.canvas);
									var n = t.__attrs.clip;
									n && (n.setSilent('parent', e), n.setSilent('context', e.get('context')));
									var r = t.__cfg.children;
									r &&
										a.each(r, function(e) {
											t.__setEvn(e);
										});
								},
								getBBox: function() {
									var t = this,
										e = 1 / 0,
										n = -1 / 0,
										r = 1 / 0,
										i = -1 / 0,
										o = t.get('children');
									a.each(o, function(t) {
										if (t.get('visible')) {
											var o = t.getBBox();
											if (!o) return !0;
											var a = [o.minX, o.minY, 1],
												s = [o.minX, o.maxY, 1],
												u = [o.maxX, o.minY, 1],
												c = [o.maxX, o.maxY, 1];
											t.apply(a), t.apply(s), t.apply(u), t.apply(c);
											var l = Math.min(a[0], s[0], u[0], c[0]),
												f = Math.max(a[0], s[0], u[0], c[0]),
												h = Math.min(a[1], s[1], u[1], c[1]),
												p = Math.max(a[1], s[1], u[1], c[1]);
											e > l && (e = l), f > n && (n = f), r > h && (r = h), p > i && (i = p);
										}
									});
									var s = { minX: e, minY: r, maxX: n, maxY: i };
									return (
										(s.x = s.minX),
										(s.y = s.minY),
										(s.width = s.maxX - s.minX),
										(s.height = s.maxY - s.minY),
										s
									);
								},
								drawInner: function(t) {
									for (var e = this.get('children'), n = 0; e.length > n; n++) {
										e[n].draw(t);
									}
									return this;
								},
								getCount: function() {
									return this.get('children').length;
								},
								sort: function() {
									var t = this.get('children');
									return (
										a.each(t, function(t, e) {
											return (t[l] = e), t;
										}),
										t.sort(
											i(function(t, e) {
												return t.get('zIndex') - e.get('zIndex');
											})
										),
										this
									);
								},
								find: function(t) {
									return this.findBy(function(e) {
										return e.get('id') === t;
									});
								},
								findBy: function(t) {
									var e = this.get('children'),
										n = null;
									return (
										a.each(e, function(e) {
											if ((t(e) ? (n = e) : e.findBy && (n = e.findBy(t)), n)) return !1;
										}),
										n
									);
								},
								findAllBy: function(t) {
									var e = this.get('children'),
										n = [],
										r = [];
									return (
										a.each(e, function(e) {
											t(e) && n.push(e), e.findAllBy && ((r = e.findAllBy(t)), (n = n.concat(r)));
										}),
										n
									);
								},
								getShape: function(t, e) {
									var n = this,
										i = n.__attrs.clip,
										o = n.__cfg.children,
										a = void 0;
									return i ? i.inside(t, e) && (a = r(o, t, e)) : (a = r(o, t, e)), a;
								},
								clearTotalMatrix: function() {
									if (this.get('totalMatrix')) {
										this.setSilent('totalMatrix', null);
										for (var t = this.__cfg.children, e = 0; t.length > e; e++)
											t[e].clearTotalMatrix();
									}
								},
								clear: function() {
									for (var t = this.get('children'); 0 !== t.length; ) t[t.length - 1].remove();
									return this;
								},
								destroy: function() {
									this.get('destroyed') || (this.clear(), f.superclass.destroy.call(this));
								},
							}),
							(t.exports = f);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(229),
							o = n(230),
							a = n(234),
							s = n(100),
							u = n(262),
							c = [
								'fillStyle',
								'font',
								'globalAlpha',
								'lineCap',
								'lineWidth',
								'lineJoin',
								'miterLimit',
								'shadowBlur',
								'shadowColor',
								'shadowOffsetX',
								'shadowOffsetY',
								'strokeStyle',
								'textAlign',
								'textBaseline',
								'lineDash',
								'lineDashOffset',
							],
							l = function(t) {
								(this.__cfg = { zIndex: 0, capture: !0, visible: !0, destroyed: !1 }),
									r.assign(this.__cfg, this.getDefaultCfg(), t),
									this.initAttrs(this.__cfg.attrs),
									this.initTransform(),
									this.init();
							};
						(l.CFG = {
							id: null,
							zIndex: 0,
							canvas: null,
							parent: null,
							capture: !0,
							context: null,
							visible: !0,
							destroyed: !1,
						}),
							r.augment(l, i, o, u, a, {
								init: function() {
									this.setSilent('animable', !0), this.setSilent('animating', !1);
									var t = this.__attrs;
									t && t.rotate && this.rotateAtStart(t.rotate);
								},
								getParent: function() {
									return this.get('parent');
								},
								getDefaultCfg: function() {
									return {};
								},
								set: function(t, e) {
									var n = '__set' + r.upperFirst(t);
									return this[n] && (e = this[n](e)), (this.__cfg[t] = e), this;
								},
								setSilent: function(t, e) {
									this.__cfg[t] = e;
								},
								get: function(t) {
									return this.__cfg[t];
								},
								draw: function(t) {
									this.get('destroyed') ||
										(this.get('visible') &&
											(this.setContext(t), this.drawInner(t), this.restoreContext(t)));
								},
								setContext: function(t) {
									var e = this.__attrs.clip;
									t.save(),
										e && (e.resetTransform(t), e.createPath(t), t.clip()),
										this.resetContext(t),
										this.resetTransform(t);
								},
								restoreContext: function(t) {
									t.restore();
								},
								resetContext: function(t) {
									var e = this.__attrs;
									if (!this.isGroup)
										for (var n in e)
											if (c.indexOf(n) > -1) {
												var i = e[n];
												'fillStyle' === n && (i = s.parseStyle(i, this)),
													'strokeStyle' === n && (i = s.parseStyle(i, this)),
													'lineDash' === n && t.setLineDash
														? r.isArray(i)
															? t.setLineDash(i)
															: r.isString(i) && t.setLineDash(i.split(' '))
														: (t[n] = i);
											}
								},
								drawInner: function() {},
								show: function() {
									return this.set('visible', !0), this;
								},
								hide: function() {
									return this.set('visible', !1), this;
								},
								remove: function(t) {
									if ((void 0 === t && (t = !0), this.get('parent'))) {
										var e = this.get('parent'),
											n = e.get('children');
										r.remove(n, this);
									}
									return t && this.destroy(), this;
								},
								destroy: function() {
									if (!this.get('destroyed')) {
										if (this.get('animating')) {
											var t = this.get('animateTimer');
											t && t.stop();
										}
										(this.__cfg = {}),
											(this.__attrs = null),
											this.removeEvent(),
											this.set('destroyed', !0);
									}
								},
								__setZIndex: function(t) {
									return (
										(this.__cfg.zIndex = t),
										r.isNil(this.get('parent')) || this.get('parent').sort(),
										t
									);
								},
								__setAttrs: function(t) {
									return this.attr(t), t;
								},
								setZIndex: function(t) {
									return (this.__cfg.zIndex = t), t;
								},
								clone: function() {
									return r.clone(this);
								},
								getBBox: function() {
									return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
								},
							}),
							(t.exports = l);
					},
					function(t, e, n) {
						'use strict';
						n.d(e, 'a', function() {
							return r;
						}),
							n.d(e, 'b', function() {
								return i;
							});
						var r = Math.PI / 180,
							i = 180 / Math.PI;
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return function(e) {
								var n,
									r,
									o = e.length,
									a = Array(o),
									s = Array(o),
									u = Array(o);
								for (n = 0; o > n; ++n)
									(r = Object(i.f)(e[n])), (a[n] = r.r || 0), (s[n] = r.g || 0), (u[n] = r.b || 0);
								return (
									(a = t(a)),
									(s = t(s)),
									(u = t(u)),
									(r.opacity = 1),
									function(t) {
										return (r.r = a(t)), (r.g = s(t)), (r.b = u(t)), r + '';
									}
								);
							};
						}
						n.d(e, 'b', function() {
							return u;
						}),
							n.d(e, 'c', function() {
								return c;
							});
						var i = n(15),
							o = n(51),
							a = n(94),
							s = n(21);
						e.a = (function t(e) {
							function n(t, e) {
								var n = r((t = Object(i.f)(t)).r, (e = Object(i.f)(e)).r),
									o = r(t.g, e.g),
									a = r(t.b, e.b),
									u = Object(s.a)(t.opacity, e.opacity);
								return function(e) {
									return (t.r = n(e)), (t.g = o(e)), (t.b = a(e)), (t.opacity = u(e)), t + '';
								};
							}
							var r = Object(s.b)(e);
							return (n.gamma = t), n;
						})(1);
						var u = r(o.b),
							c = r(a.a);
					},
					function(t, e, n) {
						'use strict';
						var r = n(51);
						e.a = function(t) {
							var e = t.length;
							return function(n) {
								var i = Math.floor((0 > (n %= 1) ? ++n : n) * e),
									o = t[(i + e - 1) % e],
									a = t[i % e],
									s = t[(i + 1) % e],
									u = t[(i + 2) % e];
								return Object(r.a)((n - i / e) * e, o, a, s, u);
							};
						};
					},
					function(t, e, n) {
						'use strict';
						e.a = function(t) {
							return function() {
								return t;
							};
						};
					},
					function(t, e, n) {
						'use strict';
						var r = n(48);
						e.a = function(t, e) {
							var n,
								i = e ? e.length : 0,
								o = t ? Math.min(i, t.length) : 0,
								a = Array(o),
								s = Array(i);
							for (n = 0; o > n; ++n) a[n] = Object(r.a)(t[n], e[n]);
							for (; i > n; ++n) s[n] = e[n];
							return function(t) {
								for (n = 0; o > n; ++n) s[n] = a[n](t);
								return s;
							};
						};
					},
					function(t, e, n) {
						'use strict';
						e.a = function(t, e) {
							var n = new Date();
							return (
								(t = +t),
								(e -= t),
								function(r) {
									return n.setTime(t + e * r), n;
								}
							);
						};
					},
					function(t, e, n) {
						'use strict';
						var r = n(48),
							i =
								'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
									? function(t) {
											return typeof t;
									  }
									: function(t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  };
						e.a = function(t, e) {
							var n,
								o = {},
								a = {};
							(null !== t && 'object' === (void 0 === t ? 'undefined' : i(t))) || (t = {}),
								(null !== e && 'object' === (void 0 === e ? 'undefined' : i(e))) || (e = {});
							for (n in e) n in t ? (o[n] = Object(r.a)(t[n], e[n])) : (a[n] = e[n]);
							return function(t) {
								for (n in o) a[n] = o[n](t);
								return a;
							};
						};
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return function() {
								return t;
							};
						}
						function i(t) {
							return function(e) {
								return t(e) + '';
							};
						}
						var o = n(31),
							a = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
							s = RegExp(a.source, 'g');
						e.a = function(t, e) {
							var n,
								u,
								c,
								l = (a.lastIndex = s.lastIndex = 0),
								f = -1,
								h = [],
								p = [];
							for (t += '', e += ''; (n = a.exec(t)) && (u = s.exec(e)); )
								(c = u.index) > l && ((c = e.slice(l, c)), h[f] ? (h[f] += c) : (h[++f] = c)),
									(n = n[0]) === (u = u[0])
										? h[f]
											? (h[f] += u)
											: (h[++f] = u)
										: ((h[++f] = null), p.push({ i: f, x: Object(o.a)(n, u) })),
									(l = s.lastIndex);
							return (
								e.length > l && ((c = e.slice(l)), h[f] ? (h[f] += c) : (h[++f] = c)),
								2 > h.length
									? p[0]
										? i(p[0].x)
										: r(e)
									: ((e = p.length),
									  function(t) {
											for (var n, r = 0; e > r; ++r) h[(n = p[r]).i] = n.x(t);
											return h.join('');
									  })
							);
						};
					},
					function(t, e, n) {
						function r(t, e) {
							var n = t.match(p);
							s.each(n, function(t) {
								(t = t.split(':')), e.addColorStop(t[0], t[1]);
							});
						}
						function i(t, e) {
							var n = l.exec(t),
								i = s.mod(s.toRadian(parseFloat(n[1])), 2 * Math.PI),
								o = n[2],
								a = e.getBBox(),
								u = void 0,
								c = void 0;
							i >= 0 && i < 0.5 * Math.PI
								? ((u = { x: a.minX, y: a.minY }), (c = { x: a.maxX, y: a.maxY }))
								: 0.5 * Math.PI <= i && i < Math.PI
									? ((u = { x: a.maxX, y: a.minY }), (c = { x: a.minX, y: a.maxY }))
									: Math.PI <= i && i < 1.5 * Math.PI
										? ((u = { x: a.maxX, y: a.maxY }), (c = { x: a.minX, y: a.minY }))
										: ((u = { x: a.minX, y: a.maxY }), (c = { x: a.maxX, y: a.minY }));
							var f = Math.tan(i),
								h = f * f,
								p = (c.x - u.x + f * (c.y - u.y)) / (h + 1) + u.x,
								d = (f * (c.x - u.x + f * (c.y - u.y))) / (h + 1) + u.y,
								g = e.get('context'),
								y = g.createLinearGradient(u.x, u.y, p, d);
							return r(o, y), y;
						}
						function o(t, e) {
							var n = f.exec(t),
								i = parseFloat(n[1]),
								o = parseFloat(n[2]),
								a = parseFloat(n[3]),
								s = n[4],
								u = e.getBBox(),
								c = e.get('context'),
								l = u.maxX - u.minX,
								h = u.maxY - u.minY,
								p = Math.sqrt(l * l + h * h) / 2,
								d = c.createRadialGradient(
									u.minX + l * i,
									u.minY + h * o,
									a * p,
									u.minX + l / 2,
									u.minY + h / 2,
									p
								);
							return r(s, d), d;
						}
						function a(t, e) {
							function n() {
								var n = e.get('context');
								(r = n.createPattern(i, a)),
									e.setSilent('pattern', r),
									e.setSilent('patternSource', t);
							}
							if (e.get('patternSource') && e.get('patternSource') === t) return e.get('pattern');
							var r = void 0,
								i = void 0,
								o = h.exec(t),
								a = o[1],
								s = o[2];
							switch (a) {
								case 'a':
									a = 'repeat';
									break;
								case 'x':
									a = 'repeat-x';
									break;
								case 'y':
									a = 'repeat-y';
									break;
								case 'n':
									a = 'no-repeat';
									break;
								default:
									a = 'no-repeat';
							}
							return (
								(i = new Image()),
								s.match(/^data:/i) || (i.crossOrigin = 'Anonymous'),
								(i.src = s),
								i.complete ? n() : ((i.onload = n), (i.src = i.src)),
								r
							);
						}
						var s = n(0),
							u = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
							c = /[^\s\,]+/gi,
							l = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
							f = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
							h = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,
							p = /[\d.]+:(#[^\s]+|[^\)]+\))/gi,
							d = {};
						t.exports = {
							parsePath: function(t) {
								return (
									(t = t || []),
									s.isArray(t)
										? t
										: s.isString(t)
											? ((t = t.match(u)),
											  s.each(t, function(e, n) {
													if (((e = e.match(c)), e[0].length > 1)) {
														var r = e[0].charAt(0);
														e.splice(1, 0, e[0].substr(1)), (e[0] = r);
													}
													s.each(e, function(t, n) {
														isNaN(t) || (e[n] = +t);
													}),
														(t[n] = e);
											  }),
											  t)
											: void 0
								);
							},
							parseStyle: function(t, e) {
								if (s.isString(t)) {
									if ('(' === t[1] || '(' === t[2]) {
										if ('l' === t[0]) return i(t, e);
										if ('r' === t[0]) return o(t, e);
										if ('p' === t[0]) return a(t, e);
									}
									return t;
								}
							},
							numberToColor: function(t) {
								var e = d[t];
								if (!e) {
									for (var n = t.toString(16), r = n.length; 6 > r; r++) n = '0' + n;
									(e = '#' + n), (d[t] = e);
								}
								return e;
							},
						};
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(a.ATTRS = { x: 0, y: 0, r: 0, lineWidth: 1 }),
							r.extend(a, i),
							r.augment(a, {
								canFill: !0,
								canStroke: !0,
								type: 'circle',
								getDefaultAttrs: function() {
									return { lineWidth: 1 };
								},
								calculateBox: function() {
									var t = this.__attrs,
										e = t.x,
										n = t.y,
										r = t.r,
										i = this.getHitLineWidth(),
										o = i / 2 + r;
									return { minX: e - o, minY: n - o, maxX: e + o, maxY: n + o };
								},
								isPointInPath: function(t, e) {
									var n = this.hasFill(),
										r = this.hasStroke();
									return n && r
										? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e)
										: n
											? this.__isPointInFill(t, e)
											: !!r && this.__isPointInStroke(t, e);
								},
								__isPointInFill: function(t, e) {
									var n = this.__attrs;
									return o.circle(n.x, n.y, n.r, t, e);
								},
								__isPointInStroke: function(t, e) {
									var n = this.__attrs,
										r = n.x,
										i = n.y,
										a = n.r,
										s = this.getHitLineWidth();
									return o.arcline(r, i, a, 0, 2 * Math.PI, !1, s, t, e);
								},
								createPath: function(t) {
									var e = this.__attrs,
										n = e.x,
										r = e.y,
										i = e.r;
									(t = t || self.get('context')), t.beginPath(), t.arc(n, r, i, 0, 2 * Math.PI, !1);
								},
							}),
							(t.exports = a);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = n(3).mat3,
							s = n(3).vec3,
							u = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(u.ATTRS = { x: 0, y: 0, rx: 1, ry: 1, lineWidth: 1 }),
							r.extend(u, i),
							r.augment(u, {
								canFill: !0,
								canStroke: !0,
								type: 'ellipse',
								getDefaultAttrs: function() {
									return { lineWidth: 1 };
								},
								calculateBox: function() {
									var t = this.__attrs,
										e = t.x,
										n = t.y,
										r = t.rx,
										i = t.ry,
										o = this.getHitLineWidth(),
										a = r + o / 2,
										s = i + o / 2;
									return { minX: e - a, minY: n - s, maxX: e + a, maxY: n + s };
								},
								isPointInPath: function(t, e) {
									var n = this.hasFill(),
										r = this.hasStroke();
									return n && r
										? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e)
										: n
											? this.__isPointInFill(t, e)
											: !!r && this.__isPointInStroke(t, e);
								},
								__isPointInFill: function(t, e) {
									var n = this.__attrs,
										r = n.x,
										i = n.y,
										u = n.rx,
										c = n.ry,
										l = u > c ? u : c,
										f = u > c ? 1 : u / c,
										h = u > c ? c / u : 1,
										p = [t, e, 1],
										d = [1, 0, 0, 0, 1, 0, 0, 0, 1];
									a.scale(d, d, [f, h]), a.translate(d, d, [r, i]);
									var g = a.invert([], d);
									return s.transformMat3(p, p, g), o.circle(0, 0, l, p[0], p[1]);
								},
								__isPointInStroke: function(t, e) {
									var n = this.__attrs,
										r = n.x,
										i = n.y,
										u = n.rx,
										c = n.ry,
										l = this.getHitLineWidth(),
										f = u > c ? u : c,
										h = u > c ? 1 : u / c,
										p = u > c ? c / u : 1,
										d = [t, e, 1],
										g = [1, 0, 0, 0, 1, 0, 0, 0, 1];
									a.scale(g, g, [h, p]), a.translate(g, g, [r, i]);
									var y = a.invert([], g);
									return (
										s.transformMat3(d, d, y), o.arcline(0, 0, f, 0, 2 * Math.PI, !1, l, d[0], d[1])
									);
								},
								createPath: function(t) {
									var e = this.__attrs,
										n = e.x,
										r = e.y,
										i = e.rx,
										o = e.ry;
									t = t || self.get('context');
									var s = i > o ? i : o,
										u = i > o ? 1 : i / o,
										c = i > o ? o / i : 1,
										l = [1, 0, 0, 0, 1, 0, 0, 0, 1];
									a.scale(l, l, [u, c]),
										a.translate(l, l, [n, r]),
										t.beginPath(),
										t.save(),
										t.transform(l[0], l[1], l[3], l[4], l[6], l[7]),
										t.arc(0, 0, s, 0, 2 * Math.PI),
										t.restore(),
										t.closePath();
								},
							}),
							(t.exports = u);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(104),
							a = n(100),
							s = n(16),
							u = n(46),
							c = n(32),
							l = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(l.ATTRS = {
							path: null,
							lineWidth: 1,
							curve: null,
							tCache: null,
							startArrow: !1,
							endArrow: !1,
						}),
							r.extend(l, i),
							r.augment(l, {
								canFill: !0,
								canStroke: !0,
								type: 'path',
								getDefaultAttrs: function() {
									return { lineWidth: 1, startArrow: !1, endArrow: !1 };
								},
								__afterSetAttrPath: function(t) {
									var e = this;
									if (r.isNil(t))
										return e.setSilent('segments', null), void e.setSilent('box', void 0);
									var n = a.parsePath(t),
										i = void 0,
										s = [];
									if (r.isArray(n) && 0 !== n.length && ('M' === n[0][0] || 'm' === n[0][0])) {
										for (var u = n.length, c = 0; n.length > c; c++) {
											(i = new o(n[c], i, c === u - 1)), s.push(i);
										}
										e.setSilent('segments', s), e.set('tCache', null), this.setSilent('box', null);
									}
								},
								__afterSetAttrAll: function(t) {
									t.path && this.__afterSetAttrPath(t.path);
								},
								calculateBox: function() {
									var t = this,
										e = t.get('segments');
									if (!e) return null;
									var n = this.getHitLineWidth(),
										i = 1 / 0,
										o = -1 / 0,
										a = 1 / 0,
										s = -1 / 0;
									return (
										r.each(e, function(t) {
											t.getBBox(n);
											var e = t.box;
											e &&
												(i > e.minX && (i = e.minX),
												e.maxX > o && (o = e.maxX),
												a > e.minY && (a = e.minY),
												e.maxY > s && (s = e.maxY));
										}),
										{ minX: i, minY: a, maxX: o, maxY: s }
									);
								},
								isPointInPath: function(t, e) {
									var n = this,
										r = n.hasFill(),
										i = n.hasStroke();
									return r && i
										? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e)
										: r
											? n.__isPointInFill(t, e)
											: !!i && n.__isPointInStroke(t, e);
								},
								__isPointInFill: function(t, e) {
									var n = this,
										r = n.get('context');
									if (r) return n.createPath(), r.isPointInPath(t, e);
								},
								__isPointInStroke: function(t, e) {
									var n = this,
										i = n.get('segments');
									if (!r.isEmpty(i))
										for (var o = n.getHitLineWidth(), a = 0, s = i.length; s > a; a++)
											if (i[a].isInside(t, e, o)) return !0;
									return !1;
								},
								__setTcache: function() {
									var t = 0,
										e = 0,
										n = [],
										i = void 0,
										o = void 0,
										a = void 0,
										s = void 0,
										u = this.curve;
									u &&
										(r.each(u, function(e, n) {
											(a = u[n + 1]),
												(s = e.length),
												a && (t += c.len(e[s - 2], e[s - 1], a[1], a[2], a[3], a[4], a[5], a[6]));
										}),
										r.each(u, function(r, l) {
											(a = u[l + 1]),
												(s = r.length),
												a &&
													((i = []),
													(i[0] = e / t),
													(o = c.len(r[s - 2], r[s - 1], a[1], a[2], a[3], a[4], a[5], a[6])),
													(e += o),
													(i[1] = e / t),
													n.push(i));
										}),
										(this.tCache = n));
								},
								__calculateCurve: function() {
									this.curve = u.pathTocurve(this.__attrs.path);
								},
								getPoint: function(t) {
									var e = this.tCache,
										n = void 0,
										i = void 0;
									e || (this.__calculateCurve(), this.__setTcache(), (e = this.tCache));
									var o = this.curve;
									if (!e) return o ? { x: o[0][1], y: o[0][2] } : null;
									r.each(e, function(e, r) {
										e[0] > t || t > e[1] || ((n = (t - e[0]) / (e[1] - e[0])), (i = r));
									});
									var a = o[i];
									if (r.isNil(a) || r.isNil(i)) return null;
									var s = a.length,
										u = o[i + 1];
									return {
										x: c.at(a[s - 2], u[1], u[3], u[5], 1 - n),
										y: c.at(a[s - 1], u[2], u[4], u[6], 1 - n),
									};
								},
								createPath: function(t) {
									var e = this,
										n = e.get('segments');
									if (r.isArray(n)) {
										(t = t || e.get('context')), t.beginPath();
										for (var i = n.length, o = 0; i > o; o++) n[o].draw(t);
									}
								},
								_addArrow: function(t, e, n, i, o) {
									var a = this.__attrs;
									if (r.isFunction(n)) {
										var u = n();
										o
											? s.addStartArrow(i, a, t.x - u[0], t.y - u[1], t.x, t.y)
											: s.addEndArrow(i, a, e.x - u[0], e.y - u[1], e.x, e.y);
									} else
										o
											? s.addStartArrow(i, a, e.x, e.y, t.x, t.y)
											: s.addEndArrow(i, a, t.x, t.y, e.x, e.y);
								},
								afterPath: function(t) {
									var e = this,
										n = e.__attrs,
										i = e.get('segments'),
										o = n.path;
									if (
										((t = t || e.get('context')),
										r.isArray(i) &&
											(n.startArrow || n.endArrow) &&
											'z' !== o[o.length - 1] &&
											'Z' !== o[o.length - 1] &&
											!n.fill)
									) {
										var a = i.length;
										a > 1 && e._addArrow(i[0].endPoint, i[1].endPoint, i[1].startTangent, t, !0),
											a > 1 &&
												e._addArrow(
													i[a - 2].endPoint,
													i[a - 1].endPoint,
													i[a - 1].endTangent,
													t,
													!1
												);
									}
								},
							}),
							(t.exports = l);
					},
					function(t, e, n) {
						function r(t, e, n) {
							return { x: n.x + t, y: n.y + e };
						}
						function i(t, e) {
							return { x: e.x + (e.x - t.x), y: e.y + (e.y - t.y) };
						}
						function o(t) {
							return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
						}
						function a(t, e) {
							return (t[0] * e[0] + t[1] * e[1]) / (o(t) * o(e));
						}
						function s(t, e) {
							return (t[1] * e[0] > t[0] * e[1] ? -1 : 1) * Math.acos(a(t, e));
						}
						function u(t, e, n, r, i, o, a) {
							var u = c.mod(c.toRadian(a), 2 * Math.PI),
								l = t.x,
								f = t.y,
								h = e.x,
								p = e.y,
								d = (Math.cos(u) * (l - h)) / 2 + (Math.sin(u) * (f - p)) / 2,
								g = (-1 * Math.sin(u) * (l - h)) / 2 + (Math.cos(u) * (f - p)) / 2,
								y = (d * d) / (i * i) + (g * g) / (o * o);
							y > 1 && ((i *= Math.sqrt(y)), (o *= Math.sqrt(y)));
							var v = i * i * (g * g) + o * o * (d * d),
								m = Math.sqrt((i * i * (o * o) - v) / v);
							n === r && (m *= -1), isNaN(m) && (m = 0);
							var x = (m * i * g) / o,
								b = (m * -o * d) / i,
								_ = (l + h) / 2 + Math.cos(u) * x - Math.sin(u) * b,
								w = (f + p) / 2 + Math.sin(u) * x + Math.cos(u) * b,
								S = s([1, 0], [(d - x) / i, (g - b) / o]),
								M = [(d - x) / i, (g - b) / o],
								P = [(-1 * d - x) / i, (-1 * g - b) / o],
								C = s(M, P);
							return (
								0 === r && C > 0 && (C -= 2 * Math.PI),
								1 === r && 0 > C && (C += 2 * Math.PI),
								[t, _, w, i, o, S, C, u, r]
							);
						}
						var c = n(0),
							l = n(2),
							f = n(32),
							h = n(53),
							p = n(264),
							d = n(3).vec3,
							g = n(3).mat3,
							y = ['m', 'l', 'c', 'a', 'q', 'h', 'v', 't', 's', 'z'],
							v = function(t, e, n) {
								(this.preSegment = e), (this.isLast = n), this.init(t, e);
							};
						c.augment(v, {
							init: function(t, e) {
								var n = t[0];
								e = e || { endPoint: { x: 0, y: 0 } };
								var o = y.indexOf(n) >= 0,
									a = o ? n.toUpperCase() : n,
									s = t,
									l = void 0,
									f = void 0,
									h = void 0,
									p = void 0,
									d = e.endPoint,
									g = s[1],
									v = s[2];
								switch (a) {
									default:
										break;
									case 'M':
										(p = o ? r(g, v, d) : { x: g, y: v }),
											(this.command = 'M'),
											(this.params = [d, p]),
											(this.subStart = p),
											(this.endPoint = p);
										break;
									case 'L':
										(p = o ? r(g, v, d) : { x: g, y: v }),
											(this.command = 'L'),
											(this.params = [d, p]),
											(this.subStart = e.subStart),
											(this.endPoint = p),
											(this.endTangent = function() {
												return [p.x - d.x, p.y - d.y];
											}),
											(this.startTangent = function() {
												return [d.x - p.x, d.y - p.y];
											});
										break;
									case 'H':
										(p = o ? r(g, 0, d) : { x: g, y: d.y }),
											(this.command = 'L'),
											(this.params = [d, p]),
											(this.subStart = e.subStart),
											(this.endPoint = p),
											(this.endTangent = function() {
												return [p.x - d.x, p.y - d.y];
											}),
											(this.startTangent = function() {
												return [d.x - p.x, d.y - p.y];
											});
										break;
									case 'V':
										(p = o ? r(0, g, d) : { x: d.x, y: g }),
											(this.command = 'L'),
											(this.params = [d, p]),
											(this.subStart = e.subStart),
											(this.endPoint = p),
											(this.endTangent = function() {
												return [p.x - d.x, p.y - d.y];
											}),
											(this.startTangent = function() {
												return [d.x - p.x, d.y - p.y];
											});
										break;
									case 'Q':
										o
											? ((l = r(g, v, d)), (f = r(s[3], s[4], d)))
											: ((l = { x: g, y: v }), (f = { x: s[3], y: s[4] })),
											(this.command = 'Q'),
											(this.params = [d, l, f]),
											(this.subStart = e.subStart),
											(this.endPoint = f),
											(this.endTangent = function() {
												return [f.x - l.x, f.y - l.y];
											}),
											(this.startTangent = function() {
												return [d.x - l.x, d.y - l.y];
											});
										break;
									case 'T':
										(f = o ? r(g, v, d) : { x: g, y: v }),
											'Q' === e.command
												? ((l = i(e.params[1], d)),
												  (this.command = 'Q'),
												  (this.params = [d, l, f]),
												  (this.subStart = e.subStart),
												  (this.endPoint = f),
												  (this.endTangent = function() {
														return [f.x - l.x, f.y - l.y];
												  }),
												  (this.startTangent = function() {
														return [d.x - l.x, d.y - l.y];
												  }))
												: ((this.command = 'TL'),
												  (this.params = [d, f]),
												  (this.subStart = e.subStart),
												  (this.endPoint = f),
												  (this.endTangent = function() {
														return [f.x - d.x, f.y - d.y];
												  }),
												  (this.startTangent = function() {
														return [d.x - f.x, d.y - f.y];
												  }));
										break;
									case 'C':
										o
											? ((l = r(g, v, d)), (f = r(s[3], s[4], d)), (h = r(s[5], s[6], d)))
											: ((l = { x: g, y: v }),
											  (f = { x: s[3], y: s[4] }),
											  (h = { x: s[5], y: s[6] })),
											(this.command = 'C'),
											(this.params = [d, l, f, h]),
											(this.subStart = e.subStart),
											(this.endPoint = h),
											(this.endTangent = function() {
												return [h.x - f.x, h.y - f.y];
											}),
											(this.startTangent = function() {
												return [d.x - l.x, d.y - l.y];
											});
										break;
									case 'S':
										o
											? ((f = r(g, v, d)), (h = r(s[3], s[4], d)))
											: ((f = { x: g, y: v }), (h = { x: s[3], y: s[4] })),
											'C' === e.command
												? ((l = i(e.params[2], d)),
												  (this.command = 'C'),
												  (this.params = [d, l, f, h]),
												  (this.subStart = e.subStart),
												  (this.endPoint = h),
												  (this.endTangent = function() {
														return [h.x - f.x, h.y - f.y];
												  }),
												  (this.startTangent = function() {
														return [d.x - l.x, d.y - l.y];
												  }))
												: ((this.command = 'SQ'),
												  (this.params = [d, f, h]),
												  (this.subStart = e.subStart),
												  (this.endPoint = h),
												  (this.endTangent = function() {
														return [h.x - f.x, h.y - f.y];
												  }),
												  (this.startTangent = function() {
														return [d.x - f.x, d.y - f.y];
												  }));
										break;
									case 'A':
										var m = g,
											x = v,
											b = s[3],
											_ = s[4],
											w = s[5];
										(p = o ? r(s[6], s[7], d) : { x: s[6], y: s[7] }), (this.command = 'A');
										var S = u(d, p, _, w, m, x, b);
										this.params = S;
										var M = e.subStart;
										(this.subStart = M), (this.endPoint = p);
										var P = S[5] % (2 * Math.PI);
										c.isNumberEqual(P, 2 * Math.PI) && (P = 0);
										var C = S[6] % (2 * Math.PI);
										c.isNumberEqual(C, 2 * Math.PI) && (C = 0);
										var O = 0.001;
										(this.startTangent = function() {
											0 === w && (O *= -1);
											var t = S[3] * Math.cos(P - O) + S[1],
												e = S[4] * Math.sin(P - O) + S[2];
											return [t - M.x, e - M.y];
										}),
											(this.endTangent = function() {
												var t = S[6];
												1e-4 > t - 2 * Math.PI && (t = 0);
												var e = S[3] * Math.cos(P + t + O) + S[1],
													n = S[4] * Math.sin(P + t - O) + S[2];
												return [d.x - e, d.y - n];
											});
										break;
									case 'Z':
										(this.command = 'Z'),
											(this.params = [d, e.subStart]),
											(this.subStart = e.subStart),
											(this.endPoint = e.subStart);
								}
							},
							isInside: function(t, e, n) {
								var r = this,
									i = r.command,
									o = r.params,
									a = r.box;
								if (a && !l.box(a.minX, a.maxX, a.minY, a.maxY, t, e)) return !1;
								switch (i) {
									default:
										break;
									case 'M':
										return !1;
									case 'TL':
									case 'L':
									case 'Z':
										return l.line(o[0].x, o[0].y, o[1].x, o[1].y, n, t, e);
									case 'SQ':
									case 'Q':
										return l.quadraticline(o[0].x, o[0].y, o[1].x, o[1].y, o[2].x, o[2].y, n, t, e);
									case 'C':
										return l.cubicline(
											o[0].x,
											o[0].y,
											o[1].x,
											o[1].y,
											o[2].x,
											o[2].y,
											o[3].x,
											o[3].y,
											n,
											t,
											e
										);
									case 'A':
										var s = o,
											u = s[1],
											c = s[2],
											f = s[3],
											h = s[4],
											p = s[5],
											y = s[6],
											v = s[7],
											m = s[8],
											x = f > h ? f : h,
											b = f > h ? 1 : f / h,
											_ = f > h ? h / f : 1;
										s = [t, e, 1];
										var w = [1, 0, 0, 0, 1, 0, 0, 0, 1];
										return (
											g.translate(w, w, [-u, -c]),
											g.rotate(w, w, -v),
											g.scale(w, w, [1 / b, 1 / _]),
											d.transformMat3(s, s, w),
											l.arcline(0, 0, x, p, p + y, 1 - m, n, s[0], s[1])
										);
								}
								return !1;
							},
							draw: function(t) {
								var e = this.command,
									n = this.params,
									r = void 0,
									i = void 0,
									o = void 0;
								switch (e) {
									default:
										break;
									case 'M':
										t.moveTo(n[1].x, n[1].y);
										break;
									case 'TL':
									case 'L':
										t.lineTo(n[1].x, n[1].y);
										break;
									case 'SQ':
									case 'Q':
										(r = n[1]), (i = n[2]), t.quadraticCurveTo(r.x, r.y, i.x, i.y);
										break;
									case 'C':
										(r = n[1]),
											(i = n[2]),
											(o = n[3]),
											t.bezierCurveTo(r.x, r.y, i.x, i.y, o.x, o.y);
										break;
									case 'A':
										var a = n,
											s = a[1],
											u = a[2],
											c = s,
											l = u,
											f = a[3],
											h = a[4],
											p = a[5],
											d = a[6],
											g = a[7],
											y = a[8],
											v = f > h ? f : h,
											m = f > h ? 1 : f / h,
											x = f > h ? h / f : 1;
										t.translate(c, l),
											t.rotate(g),
											t.scale(m, x),
											t.arc(0, 0, v, p, p + d, 1 - y),
											t.scale(1 / m, 1 / x),
											t.rotate(-g),
											t.translate(-c, -l);
										break;
									case 'Z':
										t.closePath();
								}
							},
							getBBox: function(t) {
								var e = t / 2,
									n = this.params,
									r = void 0,
									i = void 0,
									o = void 0,
									a = void 0;
								switch (this.command) {
									default:
									case 'M':
									case 'Z':
										break;
									case 'TL':
									case 'L':
										this.box = {
											minX: Math.min(n[0].x, n[1].x) - e,
											maxX: Math.max(n[0].x, n[1].x) + e,
											minY: Math.min(n[0].y, n[1].y) - e,
											maxY: Math.max(n[0].y, n[1].y) + e,
										};
										break;
									case 'SQ':
									case 'Q':
										for (i = h.extrema(n[0].x, n[1].x, n[2].x), o = 0, a = i.length; a > o; o++)
											i[o] = h.at(n[0].x, n[1].x, n[2].x, i[o]);
										for (
											i.push(n[0].x, n[2].x),
												r = h.extrema(n[0].y, n[1].y, n[2].y),
												o = 0,
												a = r.length;
											a > o;
											o++
										)
											r[o] = h.at(n[0].y, n[1].y, n[2].y, r);
										r.push(n[0].y, n[2].y),
											(this.box = {
												minX: Math.min.apply(Math, i) - e,
												maxX: Math.max.apply(Math, i) + e,
												minY: Math.min.apply(Math, r) - e,
												maxY: Math.max.apply(Math, r) + e,
											});
										break;
									case 'C':
										for (
											i = f.extrema(n[0].x, n[1].x, n[2].x, n[3].x), o = 0, a = i.length;
											a > o;
											o++
										)
											i[o] = f.at(n[0].x, n[1].x, n[2].x, n[3].x, i[o]);
										for (
											r = f.extrema(n[0].y, n[1].y, n[2].y, n[3].y), o = 0, a = r.length;
											a > o;
											o++
										)
											r[o] = f.at(n[0].y, n[1].y, n[2].y, n[3].y, r[o]);
										i.push(n[0].x, n[3].x),
											r.push(n[0].y, n[3].y),
											(this.box = {
												minX: Math.min.apply(Math, i) - e,
												maxX: Math.max.apply(Math, i) + e,
												minY: Math.min.apply(Math, r) - e,
												maxY: Math.max.apply(Math, r) + e,
											});
										break;
									case 'A':
										var s = n,
											u = s[1],
											c = s[2],
											l = s[3],
											d = s[4],
											g = s[5],
											y = s[6],
											v = s[7],
											m = s[8],
											x = g,
											b = g + y,
											_ = p.xExtrema(v, l, d),
											w = 1 / 0,
											S = -1 / 0,
											M = [x, b];
										for (o = 2 * -Math.PI; o <= 2 * Math.PI; o += Math.PI) {
											var P = _ + o;
											1 === m ? P > x && b > P && M.push(P) : P > b && x > P && M.push(P);
										}
										for (o = 0, a = M.length; a > o; o++) {
											var C = p.xAt(v, l, d, u, M[o]);
											w > C && (w = C), C > S && (S = C);
										}
										var O = p.yExtrema(v, l, d),
											A = 1 / 0,
											k = -1 / 0,
											I = [x, b];
										for (o = 2 * -Math.PI; o <= 2 * Math.PI; o += Math.PI) {
											var T = O + o;
											1 === m ? T > x && b > T && I.push(T) : T > b && x > T && I.push(T);
										}
										for (o = 0, a = I.length; a > o; o++) {
											var E = p.yAt(v, l, d, c, I[o]);
											A > E && (A = E), E > k && (k = E);
										}
										this.box = { minX: w - e, maxX: S + e, minY: A - e, maxY: k + e };
								}
							},
						}),
							(t.exports = v);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(a.ATTRS = {
							x: 0,
							y: 0,
							text: null,
							fontSize: 12,
							fontFamily: 'sans-serif',
							fontStyle: 'normal',
							fontWeight: 'normal',
							fontVariant: 'normal',
							textAlign: 'start',
							textBaseline: 'bottom',
							lineHeight: null,
							textArr: null,
						}),
							r.extend(a, i),
							r.augment(a, {
								canFill: !0,
								canStroke: !0,
								type: 'text',
								getDefaultAttrs: function() {
									return {
										lineWidth: 1,
										lineCount: 1,
										fontSize: 12,
										fontFamily: 'sans-serif',
										fontStyle: 'normal',
										fontWeight: 'normal',
										fontVariant: 'normal',
										textAlign: 'start',
										textBaseline: 'bottom',
									};
								},
								initTransform: function() {
									this.attr('matrix', [1, 0, 0, 0, 1, 0, 0, 0, 1]);
									var t = this.__attrs.fontSize;
									t &&
										12 > +t &&
										this.transform([
											['t', -1 * this.__attrs.x, -1 * this.__attrs.y],
											['s', +t / 12, +t / 12],
											['t', this.__attrs.x, this.__attrs.y],
										]);
								},
								__assembleFont: function() {
									var t = this.__attrs;
									t.font = [
										t.fontStyle,
										t.fontVariant,
										t.fontWeight,
										t.fontSize + 'px',
										t.fontFamily,
									].join(' ');
								},
								__afterSetAttrFontSize: function() {
									this.__assembleFont();
								},
								__afterSetAttrFontFamily: function() {
									this.__assembleFont();
								},
								__afterSetAttrFontWeight: function() {
									this.__assembleFont();
								},
								__afterSetAttrFontStyle: function() {
									this.__assembleFont();
								},
								__afterSetAttrFontVariant: function() {
									this.__assembleFont();
								},
								__afterSetAttrFont: function() {},
								__afterSetAttrText: function() {
									var t = this.__attrs,
										e = t.text,
										n = void 0;
									if (r.isString(e) && -1 !== e.indexOf('\n')) {
										n = e.split('\n');
										(t.lineCount = n.length), (t.textArr = n);
									}
								},
								__getTextHeight: function() {
									var t = this.__attrs,
										e = t.lineCount,
										n = 1 * t.fontSize;
									if (e > 1) {
										return n * e + this.__getSpaceingY() * (e - 1);
									}
									return n;
								},
								__afterSetAttrAll: function(t) {
									var e = this;
									('fontSize' in t ||
										'fontWeight' in t ||
										'fontStyle' in t ||
										'fontVariant' in t ||
										'fontFamily' in t) &&
										e.__assembleFont(),
										'text' in t && e.__afterSetAttrText(t.text);
								},
								isHitBox: function() {
									return !1;
								},
								calculateBox: function() {
									var t = this,
										e = t.__attrs,
										n = e.x,
										r = e.y,
										i = t.measureText();
									if (!i) return { minX: n, minY: r, maxX: n, maxY: r };
									var o = t.__getTextHeight(),
										a = e.textAlign,
										s = e.textBaseline,
										u = t.getHitLineWidth(),
										c = { x: n, y: r - o };
									a &&
										('end' === a || 'right' === a ? (c.x -= i) : 'center' === a && (c.x -= i / 2)),
										s && ('top' === s ? (c.y += o) : 'middle' === s && (c.y += o / 2)),
										this.set('startPoint', c);
									var l = u / 2;
									return { minX: c.x - l, minY: c.y - l, maxX: c.x + i + l, maxY: c.y + o + l };
								},
								__getSpaceingY: function() {
									var t = this.__attrs,
										e = t.lineHeight,
										n = 1 * t.fontSize;
									return e ? e - n : 0.14 * n;
								},
								isPointInPath: function(t, e) {
									var n = this,
										r = n.getBBox();
									if (n.hasFill() || n.hasStroke())
										return o.box(r.minX, r.maxX, r.minY, r.maxY, t, e);
								},
								drawInner: function(t) {
									var e = this,
										n = e.__attrs,
										i = n.text;
									if (i) {
										var o = n.textArr,
											a = n.x,
											s = n.y;
										if (
											(t.beginPath(),
											e.hasStroke() && (o ? e.__drawTextArr(t, !1) : t.strokeText(i, a, s)),
											e.hasFill())
										) {
											var u = n.fillOpacity;
											r.isNil(u) || 1 === u || (t.globalAlpha = u),
												o ? e.__drawTextArr(t, !0) : t.fillText(i, a, s);
										}
									}
								},
								__drawTextArr: function(t, e) {
									var n = this.__attrs.textArr,
										i = this.__attrs.textBaseline,
										o = 1 * this.__attrs.fontSize,
										a = this.__getSpaceingY(),
										s = this.__attrs.x,
										u = this.__attrs.y,
										c = this.getBBox(),
										l = c.maxY - c.minY,
										f = void 0;
									r.each(n, function(n, r) {
										(f = u + r * (a + o) - l + o),
											'middle' === i && (f += l - o - (l - o) / 2),
											'top' === i && (f += l - o),
											e ? t.fillText(n, s, f) : t.strokeText(n, s, f);
									});
								},
								measureText: function() {
									var t = this,
										e = t.__attrs,
										n = e.text,
										i = e.font,
										o = e.textArr,
										a = void 0,
										s = 0;
									if (!r.isNil(n)) {
										var u = document.createElement('canvas').getContext('2d');
										return (
											u.save(),
											(u.font = i),
											o
												? r.each(o, function(t) {
														(a = u.measureText(t).width), a > s && (s = a), u.restore();
												  })
												: ((s = u.measureText(n).width), u.restore()),
											s
										);
									}
								},
							}),
							(t.exports = a);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = n(16),
							s = n(52),
							u = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(u.ATTRS = { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1, startArrow: !1, endArrow: !1 }),
							r.extend(u, i),
							r.augment(u, {
								canStroke: !0,
								type: 'line',
								getDefaultAttrs: function() {
									return { lineWidth: 1, startArrow: !1, endArrow: !1 };
								},
								calculateBox: function() {
									var t = this.__attrs,
										e = t.x1,
										n = t.y1,
										r = t.x2,
										i = t.y2,
										o = this.getHitLineWidth();
									return s.box(e, n, r, i, o);
								},
								isPointInPath: function(t, e) {
									var n = this.__attrs,
										r = n.x1,
										i = n.y1,
										a = n.x2,
										s = n.y2,
										u = this.getHitLineWidth();
									return !!this.hasStroke() && o.line(r, i, a, s, u, t, e);
								},
								createPath: function(t) {
									var e = this.__attrs,
										n = e.x1,
										r = e.y1,
										i = e.x2,
										o = e.y2;
									(t = t || self.get('context')), t.beginPath(), t.moveTo(n, r), t.lineTo(i, o);
								},
								afterPath: function(t) {
									var e = this.__attrs,
										n = e.x1,
										r = e.y1,
										i = e.x2,
										o = e.y2;
									(t = t || this.get('context')),
										e.startArrow && a.addStartArrow(t, e, i, o, n, r),
										e.endArrow && a.addEndArrow(t, e, n, r, i, o);
								},
								getPoint: function(t) {
									var e = this.__attrs;
									return { x: s.at(e.x1, e.x2, t), y: s.at(e.y1, e.y2, t) };
								},
							}),
							(t.exports = u);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(a.ATTRS = {
							x: 0,
							y: 0,
							img: void 0,
							width: 0,
							height: 0,
							sx: null,
							sy: null,
							swidth: null,
							sheight: null,
						}),
							r.extend(a, i),
							r.augment(a, {
								type: 'image',
								__afterSetAttrImg: function(t) {
									this.__setAttrImg(t);
								},
								__afterSetAttrAll: function(t) {
									t.img && this.__setAttrImg(t.img);
								},
								isHitBox: function() {
									return !1;
								},
								calculateBox: function() {
									var t = this.__attrs,
										e = t.x,
										n = t.y;
									return { minX: e, minY: n, maxX: e + t.width, maxY: n + t.height };
								},
								isPointInPath: function(t, e) {
									var n = this.__attrs;
									return (
										!(this.get('toDraw') || !n.img) && o.rect(n.x, n.y, n.width, n.height, t, e)
									);
								},
								__setLoading: function(t) {
									var e = this.get('canvas');
									return (
										!1 === t && !0 === this.get('toDraw') && ((this.__cfg.loading = !1), e.draw()),
										t
									);
								},
								__setAttrImg: function(t) {
									var e = this,
										n = e.__attrs;
									if (!r.isString(t))
										return t instanceof Image
											? (n.width || e.attr('width', t.width),
											  n.height || e.attr('height', t.height),
											  t)
											: t instanceof HTMLElement &&
											  r.isString(t.nodeName) &&
											  'CANVAS' === t.nodeName.toUpperCase()
												? (n.width || e.attr('width', +t.getAttribute('width')),
												  n.height || e.attr('height', +t.getAttribute('height')),
												  t)
												: t instanceof ImageData
													? (n.width || e.attr('width', t.width),
													  n.height || e.attr('height', t.height),
													  t)
													: null;
									var i = new Image();
									(i.onload = function() {
										if (e.get('destroyed')) return !1;
										e.attr('imgSrc', t), e.attr('img', i);
										var n = e.get('callback');
										n && n.call(e), e.set('loading', !1);
									}),
										(i.src = t),
										e.set('loading', !0);
								},
								drawInner: function(t) {
									if (this.get('loading')) return void this.set('toDraw', !0);
									this.__drawImage(t);
								},
								__drawImage: function(t) {
									var e = this.__attrs,
										n = e.x,
										i = e.y,
										o = e.img,
										a = e.width,
										s = e.height,
										u = e.sx,
										c = e.sy,
										l = e.swidth,
										f = e.sheight;
									if (
										(this.set('toDraw', !1),
										o instanceof Image ||
											(o instanceof HTMLElement &&
												r.isString(o.nodeName) &&
												'CANVAS' === o.nodeName.toUpperCase()))
									) {
										if (r.isNil(u) || r.isNil(c) || r.isNil(l) || r.isNil(f))
											return void t.drawImage(o, n, i, a, s);
										if (!(r.isNil(u) || r.isNil(c) || r.isNil(l) || r.isNil(f)))
											return void t.drawImage(o, u, c, l, f, n, i, a, s);
									} else if (o instanceof ImageData)
										return void t.putImageData(o, n, i, u || 0, c || 0, l || a, f || s);
								},
							}),
							(t.exports = a);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(a.ATTRS = { points: null, lineWidth: 1 }),
							r.extend(a, i),
							r.augment(a, {
								canFill: !0,
								canStroke: !0,
								type: 'polygon',
								getDefaultAttrs: function() {
									return { lineWidth: 1 };
								},
								calculateBox: function() {
									var t = this,
										e = t.__attrs,
										n = e.points,
										i = this.getHitLineWidth();
									if (!n || 0 === n.length) return null;
									var o = 1 / 0,
										a = 1 / 0,
										s = -1 / 0,
										u = -1 / 0;
									r.each(n, function(t) {
										var e = t[0],
											n = t[1];
										o > e && (o = e), e > s && (s = e), a > n && (a = n), n > u && (u = n);
									});
									var c = i / 2;
									return { minX: o - c, minY: a - c, maxX: s + c, maxY: u + c };
								},
								isPointInPath: function(t, e) {
									var n = this,
										r = n.hasFill(),
										i = n.hasStroke();
									return r && i
										? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e)
										: r
											? n.__isPointInFill(t, e)
											: !!i && n.__isPointInStroke(t, e);
								},
								__isPointInFill: function(t, e) {
									var n = this,
										r = n.get('context');
									return n.createPath(), r.isPointInPath(t, e);
								},
								__isPointInStroke: function(t, e) {
									var n = this,
										r = n.__attrs,
										i = r.points;
									if (2 > i.length) return !1;
									var a = this.getHitLineWidth(),
										s = i.slice(0);
									return 3 > i.length || s.push(i[0]), o.polyline(s, a, t, e);
								},
								createPath: function(t) {
									var e = this,
										n = e.__attrs,
										i = n.points;
									2 > i.length ||
										((t = t || e.get('context')),
										t.beginPath(),
										r.each(i, function(e, n) {
											0 === n ? t.moveTo(e[0], e[1]) : t.lineTo(e[0], e[1]);
										}),
										t.closePath());
								},
							}),
							(t.exports = a);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = n(16),
							s = n(52),
							u = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(u.ATTRS = { points: null, lineWidth: 1, startArrow: !1, endArrow: !1, tCache: null }),
							r.extend(u, i),
							r.augment(u, {
								canStroke: !0,
								type: 'polyline',
								tCache: null,
								getDefaultAttrs: function() {
									return { lineWidth: 1, startArrow: !1, endArrow: !1 };
								},
								calculateBox: function() {
									var t = this,
										e = t.__attrs,
										n = this.getHitLineWidth(),
										i = e.points;
									if (!i || 0 === i.length) return null;
									var o = 1 / 0,
										a = 1 / 0,
										s = -1 / 0,
										u = -1 / 0;
									r.each(i, function(t) {
										var e = t[0],
											n = t[1];
										o > e && (o = e), e > s && (s = e), a > n && (a = n), n > u && (u = n);
									});
									var c = n / 2;
									return { minX: o - c, minY: a - c, maxX: s + c, maxY: u + c };
								},
								__setTcache: function() {
									var t = this,
										e = t.__attrs,
										n = e.points,
										i = 0,
										o = 0,
										a = [],
										u = void 0,
										c = void 0;
									n &&
										0 !== n.length &&
										(r.each(n, function(t, e) {
											n[e + 1] && (i += s.len(t[0], t[1], n[e + 1][0], n[e + 1][1]));
										}),
										i > 0 &&
											(r.each(n, function(t, e) {
												n[e + 1] &&
													((u = []),
													(u[0] = o / i),
													(c = s.len(t[0], t[1], n[e + 1][0], n[e + 1][1])),
													(o += c),
													(u[1] = o / i),
													a.push(u));
											}),
											(this.tCache = a)));
								},
								isPointInPath: function(t, e) {
									var n = this,
										r = n.__attrs;
									if (n.hasStroke()) {
										var i = r.points;
										if (2 > i.length) return !1;
										return o.polyline(i, r.lineWidth, t, e);
									}
									return !1;
								},
								createPath: function(t) {
									var e = this,
										n = e.__attrs,
										r = n.points,
										i = void 0,
										o = void 0;
									if (r.length >= 2) {
										for (
											t = t || e.get('context'),
												t.beginPath(),
												t.moveTo(r[0][0], r[0][1]),
												o = 1,
												i = r.length - 1;
											i > o;
											o++
										)
											t.lineTo(r[o][0], r[o][1]);
										t.lineTo(r[i][0], r[i][1]);
									}
								},
								afterPath: function(t) {
									var e = this,
										n = e.__attrs,
										r = n.points,
										i = r.length - 1;
									(t = t || e.get('context')),
										n.startArrow && a.addStartArrow(t, n, r[1][0], r[1][1], r[0][0], r[0][1]),
										n.endArrow && a.addEndArrow(t, n, r[i - 1][0], r[i - 1][1], r[i][0], r[i][1]);
								},
								getPoint: function(t) {
									var e = this.__attrs,
										n = e.points,
										i = this.tCache,
										o = void 0,
										a = void 0;
									return (
										i || (this.__setTcache(), (i = this.tCache)),
										r.each(i, function(e, n) {
											e[0] > t || t > e[1] || ((o = (t - e[0]) / (e[1] - e[0])), (a = n));
										}),
										{ x: s.at(n[a][0], n[a + 1][0], o), y: s.at(n[a][1], n[a + 1][1], o) }
									);
								},
							}),
							(t.exports = u);
					},
					function(t, e, n) {
						function r(t, e, n) {
							return t + e * Math.cos(n);
						}
						function i(t, e, n) {
							return t + e * Math.sin(n);
						}
						var o = n(0),
							a = n(1),
							s = n(2),
							u = n(54),
							c = n(16),
							l = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(l.ATTRS = {
							x: 0,
							y: 0,
							r: 0,
							startAngle: 0,
							endAngle: 0,
							clockwise: !1,
							lineWidth: 1,
							startArrow: !1,
							endArrow: !1,
						}),
							o.extend(l, a),
							o.augment(l, {
								canStroke: !0,
								type: 'arc',
								getDefaultAttrs: function() {
									return {
										x: 0,
										y: 0,
										r: 0,
										startAngle: 0,
										endAngle: 0,
										clockwise: !1,
										lineWidth: 1,
										startArrow: !1,
										endArrow: !1,
									};
								},
								calculateBox: function() {
									var t = this.__attrs,
										e = t.x,
										n = t.y,
										r = t.r,
										i = t.startAngle,
										o = t.endAngle,
										a = t.clockwise,
										s = this.getHitLineWidth(),
										c = s / 2,
										l = u.box(e, n, r, i, o, a);
									return (l.minX -= c), (l.minY -= c), (l.maxX += c), (l.maxY += c), l;
								},
								isPointInPath: function(t, e) {
									var n = this.__attrs,
										r = n.x,
										i = n.y,
										o = n.r,
										a = n.startAngle,
										u = n.endAngle,
										c = n.clockwise,
										l = this.getHitLineWidth();
									return !!this.hasStroke() && s.arcline(r, i, o, a, u, c, l, t, e);
								},
								createPath: function(t) {
									var e = this.__attrs,
										n = e.x,
										r = e.y,
										i = e.r,
										o = e.startAngle,
										a = e.endAngle,
										s = e.clockwise;
									(t = t || self.get('context')), t.beginPath(), t.arc(n, r, i, o, a, s);
								},
								afterPath: function(t) {
									var e = this.__attrs,
										n = e.x,
										o = e.y,
										a = e.r,
										s = e.startAngle,
										u = e.endAngle,
										l = e.clockwise;
									t = t || this.get('context');
									var f = void 0,
										h = void 0,
										p = void 0,
										d = void 0,
										g = void 0;
									e.startArrow &&
										((f = Math.PI / 180),
										l && (f *= -1),
										(h = r(n, a, s + f)),
										(p = i(o, a, s + f)),
										(d = r(n, a, s)),
										(g = i(o, a, s)),
										c.addStartArrow(t, e, h, p, d, g)),
										e.endArrow &&
											((f = Math.PI / 180),
											l && (f *= -1),
											(h = r(n, a, u + f)),
											(p = i(o, a, u + f)),
											(d = r(n, a, u)),
											(g = i(o, a, u)),
											c.addEndArrow(t, e, d, g, h, p));
								},
							}),
							(t.exports = l);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = n(54),
							s = n(3).vec2,
							u = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(u.ATTRS = {
							x: 0,
							y: 0,
							rs: 0,
							re: 0,
							startAngle: 0,
							endAngle: 0,
							clockwise: !1,
							lineWidth: 1,
						}),
							r.extend(u, i),
							r.augment(u, {
								canFill: !0,
								canStroke: !0,
								type: 'fan',
								getDefaultAttrs: function() {
									return { clockwise: !1, lineWidth: 1, rs: 0, re: 0 };
								},
								calculateBox: function() {
									var t = this,
										e = t.__attrs,
										n = e.x,
										r = e.y,
										i = e.rs,
										o = e.re,
										s = e.startAngle,
										u = e.endAngle,
										c = e.clockwise,
										l = this.getHitLineWidth(),
										f = a.box(n, r, i, s, u, c),
										h = a.box(n, r, o, s, u, c),
										p = Math.min(f.minX, h.minX),
										d = Math.min(f.minY, h.minY),
										g = Math.max(f.maxX, h.maxX),
										y = Math.max(f.maxY, h.maxY),
										v = l / 2;
									return { minX: p - v, minY: d - v, maxX: g + v, maxY: y + v };
								},
								isPointInPath: function(t, e) {
									var n = this.hasFill(),
										r = this.hasStroke();
									return n && r
										? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e)
										: n
											? this.__isPointInFill(t, e)
											: !!r && this.__isPointInStroke(t, e);
								},
								__isPointInFill: function(t, e) {
									var n = this.__attrs,
										i = n.x,
										o = n.y,
										u = n.rs,
										c = n.re,
										l = n.startAngle,
										f = n.endAngle,
										h = n.clockwise,
										p = [1, 0],
										d = [t - i, e - o],
										g = s.angleTo(p, d),
										y = a.nearAngle(g, l, f, h);
									if (r.isNumberEqual(g, y)) {
										var v = s.squaredLength(d);
										if (v >= u * u && c * c >= v) return !0;
									}
									return !1;
								},
								__isPointInStroke: function(t, e) {
									var n = this.__attrs,
										r = n.x,
										i = n.y,
										a = n.rs,
										s = n.re,
										u = n.startAngle,
										c = n.endAngle,
										l = n.clockwise,
										f = this.getHitLineWidth(),
										h = { x: Math.cos(u) * a + r, y: Math.sin(u) * a + i },
										p = { x: Math.cos(u) * s + r, y: Math.sin(u) * s + i },
										d = { x: Math.cos(c) * a + r, y: Math.sin(c) * a + i },
										g = { x: Math.cos(c) * s + r, y: Math.sin(c) * s + i };
									return (
										!!o.line(h.x, h.y, p.x, p.y, f, t, e) ||
										(!!o.line(d.x, d.y, g.x, g.y, f, t, e) ||
											(!!o.arcline(r, i, a, u, c, l, f, t, e) ||
												!!o.arcline(r, i, s, u, c, l, f, t, e)))
									);
								},
								createPath: function(t) {
									var e = this.__attrs,
										n = e.x,
										r = e.y,
										i = e.rs,
										o = e.re,
										a = e.startAngle,
										s = e.endAngle,
										u = e.clockwise,
										c = { x: Math.cos(a) * i + n, y: Math.sin(a) * i + r },
										l = { x: Math.cos(a) * o + n, y: Math.sin(a) * o + r },
										f = { x: Math.cos(s) * i + n, y: Math.sin(s) * i + r };
									(t = t || self.get('context')),
										t.beginPath(),
										t.moveTo(c.x, c.y),
										t.lineTo(l.x, l.y),
										t.arc(n, r, o, a, s, u),
										t.lineTo(f.x, f.y),
										t.arc(n, r, i, s, a, !u),
										t.closePath();
								},
							}),
							(t.exports = u);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = n(16),
							s = n(32),
							u = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(u.ATTRS = {
							p1: null,
							p2: null,
							p3: null,
							p4: null,
							lineWidth: 1,
							startArrow: !1,
							endArrow: !1,
						}),
							r.extend(u, i),
							r.augment(u, {
								canStroke: !0,
								type: 'cubic',
								getDefaultAttrs: function() {
									return { lineWidth: 1, startArrow: !1, endArrow: !1 };
								},
								calculateBox: function() {
									var t = this.__attrs,
										e = t.p1,
										n = t.p2,
										i = t.p3,
										o = t.p4,
										a = this.getHitLineWidth(),
										u = void 0,
										c = void 0;
									if (r.isNil(e) || r.isNil(n) || r.isNil(i) || r.isNil(o)) return null;
									var l = a / 2,
										f = s.extrema(e[0], n[0], i[0], o[0]);
									for (u = 0, c = f.length; c > u; u++) f[u] = s.at(e[0], n[0], i[0], o[0], f[u]);
									var h = s.extrema(e[1], n[1], i[1], o[1]);
									for (u = 0, c = h.length; c > u; u++) h[u] = s.at(e[1], n[1], i[1], o[1], h[u]);
									return (
										f.push(e[0], o[0]),
										h.push(e[1], o[1]),
										{
											minX: Math.min.apply(Math, f) - l,
											maxX: Math.max.apply(Math, f) + l,
											minY: Math.min.apply(Math, h) - l,
											maxY: Math.max.apply(Math, h) + l,
										}
									);
								},
								isPointInPath: function(t, e) {
									var n = this.__attrs,
										r = n.p1,
										i = n.p2,
										a = n.p3,
										s = n.p4,
										u = this.getHitLineWidth();
									return o.cubicline(r[0], r[1], i[0], i[1], a[0], a[1], s[0], s[1], u, t, e);
								},
								createPath: function(t) {
									var e = this.__attrs,
										n = e.p1,
										i = e.p2,
										o = e.p3,
										a = e.p4;
									(t = t || self.get('context')),
										r.isNil(n) ||
											r.isNil(i) ||
											r.isNil(o) ||
											r.isNil(a) ||
											(t.beginPath(),
											t.moveTo(n[0], n[1]),
											t.bezierCurveTo(i[0], i[1], o[0], o[1], a[0], a[1]));
								},
								afterPath: function(t) {
									var e = this.__attrs,
										n = e.p1,
										r = e.p2,
										i = e.p3,
										o = e.p4;
									(t = t || this.get('context')),
										e.startArrow && a.addStartArrow(t, e, r[0], r[1], n[0], n[1]),
										e.endArrow && a.addEndArrow(t, e, i[0], i[1], o[0], o[1]);
								},
								getPoint: function(t) {
									var e = this.__attrs;
									return {
										x: s.at(e.p4[0], e.p3[0], e.p2[0], e.p1[0], t),
										y: s.at(e.p4[1], e.p3[1], e.p2[1], e.p1[1], t),
									};
								},
							}),
							(t.exports = u);
					},
					function(t, e, n) {
						var r = n(0),
							i = n(1),
							o = n(2),
							a = n(16),
							s = n(53),
							u = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(u.ATTRS = {
							p1: null,
							p2: null,
							p3: null,
							lineWidth: 1,
							startArrow: !1,
							endArrow: !1,
						}),
							r.extend(u, i),
							r.augment(u, {
								canStroke: !0,
								type: 'quadratic',
								getDefaultAttrs: function() {
									return { lineWidth: 1, startArrow: !1, endArrow: !1 };
								},
								calculateBox: function() {
									var t = this,
										e = t.__attrs,
										n = e.p1,
										i = e.p2,
										o = e.p3,
										a = this.getHitLineWidth(),
										u = void 0,
										c = void 0;
									if (r.isNil(n) || r.isNil(i) || r.isNil(o)) return null;
									var l = a / 2,
										f = s.extrema(n[0], i[0], o[0]);
									for (u = 0, c = f.length; c > u; u++) f[u] = s.at(n[0], i[0], o[0], f[u]);
									f.push(n[0], o[0]);
									var h = s.extrema(n[1], i[1], o[1]);
									for (u = 0, c = h.length; c > u; u++) h[u] = s.at(n[1], i[1], o[1], h[u]);
									return (
										h.push(n[1], o[1]),
										{
											minX: Math.min.apply(Math, f) - l,
											maxX: Math.max.apply(Math, f) + l,
											minY: Math.min.apply(Math, h) - l,
											maxY: Math.max.apply(Math, h) + l,
										}
									);
								},
								isPointInPath: function(t, e) {
									var n = this,
										r = n.__attrs,
										i = r.p1,
										a = r.p2,
										s = r.p3,
										u = this.getHitLineWidth();
									return o.quadraticline(i[0], i[1], a[0], a[1], s[0], s[1], u, t, e);
								},
								createPath: function(t) {
									var e = this,
										n = e.__attrs,
										i = n.p1,
										o = n.p2,
										a = n.p3;
									r.isNil(i) ||
										r.isNil(o) ||
										r.isNil(a) ||
										((t = t || e.get('context')),
										t.beginPath(),
										t.moveTo(i[0], i[1]),
										t.quadraticCurveTo(o[0], o[1], a[0], a[1]));
								},
								afterPath: function(t) {
									var e = this,
										n = e.__attrs,
										r = n.p1,
										i = n.p2,
										o = n.p3;
									(t = t || e.get('context')),
										n.startArrow && a.addStartArrow(t, n, i[0], i[1], r[0], r[1]),
										n.endArrow && a.addEndArrow(t, n, i[0], i[1], o[0], o[1]);
								},
								getPoint: function(t) {
									var e = this.__attrs;
									return {
										x: s.at(e.p1[0], e.p2[0], e.p3[0], t),
										y: s.at(e.p1[1], e.p2[1], e.p3[1], t),
									};
								},
							}),
							(t.exports = u);
					},
					function(t, e, n) {
						t.exports = {
							Canvas: n(115),
							Group: n(90),
							Shape: n(1),
							Rect: n(55),
							Circle: n(101),
							Ellipse: n(102),
							Path: n(103),
							Text: n(105),
							Line: n(106),
							Image: n(107),
							Polygon: n(108),
							Polyline: n(109),
							Arc: n(110),
							Fan: n(111),
							Cubic: n(112),
							Quadratic: n(113),
							Marker: n(56),
							PathUtil: n(46),
							PathSegment: n(104),
							MatrixUtil: n(3),
							CommonUtil: n(17),
							DomUtil: n(88),
							Event: n(89),
							version: '2.0.7-beta.6',
						};
					},
					function(t, e, n) {
						var r = n(0),
							i = n(89),
							o = n(90),
							a = function t(e) {
								t.superclass.constructor.call(this, e);
							};
						(a.CFG = {
							eventEnable: !0,
							width: null,
							height: null,
							widthCanvas: null,
							heightCanvas: null,
							widthStyle: null,
							heightStyle: null,
							containerDOM: null,
							canvasDOM: null,
							pixelRatio: null,
						}),
							r.extend(a, o),
							r.augment(a, {
								init: function() {
									a.superclass.init.call(this),
										this._setGlobalParam(),
										this._setDOM(),
										this._setInitSize(),
										this._setCanvas(),
										this._scale(),
										this.get('eventEnable') && this._registEvents();
								},
								getEmitter: function(t, e) {
									if (t) {
										if (!r.isEmpty(t._getEvents())) return t;
										var n = t.get('parent');
										if (n && !e.propagationStopped) return this.getEmitter(n, e);
									}
								},
								_getEventObj: function(t, e, n, r) {
									var o = new i(t, e, !0, !0);
									return (
										(o.x = n.x),
										(o.y = n.y),
										(o.clientX = e.clientX),
										(o.clientY = e.clientY),
										(o.currentTarget = r),
										(o.target = r),
										o
									);
								},
								_triggerEvent: function(t, e) {
									var n = this.getPointByClient(e.clientX, e.clientY),
										r = this.getShape(n.x, n.y),
										i = void 0;
									if ('mousemove' === t) {
										this.emit('mousemove', this._getEventObj('mousemove', e, n, this));
										var o = this.get('preShape');
										if (o && o !== r) {
											var a = this._getEventObj('mouseleave', e, n, o);
											(i = this.getEmitter(o, e)), i && i.emit('mouseleave', a);
										}
										if (r) {
											var s = this._getEventObj('mousemove', e, n, r);
											if (((i = this.getEmitter(r, e)), i && i.emit('mousemove', s), o !== r)) {
												var u = this._getEventObj('mouseenter', e, n, r);
												i && i.emit('mouseenter', u, e);
											}
										}
										this.set('preShape', r);
									} else {
										var c = this._getEventObj(t, e, n, r || this);
										(i = this.getEmitter(r, e)), i && i !== this && i.emit(t, c), this.emit(t, c);
									}
									var l = this.get('el');
									r && !r.get('destroyed') && (l.style.cursor = r.attr('cursor') || 'default');
								},
								_registEvents: function() {
									var t = this,
										e = t.get('el');
									e.addEventListener(
										'mouseout',
										function(e) {
											t._triggerEvent('mouseleave', e);
										},
										!1
									),
										e.addEventListener(
											'mouseover',
											function(e) {
												t._triggerEvent('mouseenter', e);
											},
											!1
										),
										e.addEventListener(
											'mousemove',
											function(e) {
												t._triggerEvent('mousemove', e);
											},
											!1
										),
										e.addEventListener(
											'mousedown',
											function(e) {
												t._triggerEvent('mousedown', e);
											},
											!1
										),
										e.addEventListener(
											'mouseup',
											function(e) {
												t._triggerEvent('mouseup', e);
											},
											!1
										),
										e.addEventListener(
											'click',
											function(e) {
												t._triggerEvent('click', e);
											},
											!1
										),
										e.addEventListener(
											'dblclick',
											function(e) {
												t._triggerEvent('dblclick', e);
											},
											!1
										),
										e.addEventListener(
											'touchstart',
											function(e) {
												r.isEmpty(e.touches) || t._triggerEvent('touchstart', e.touches[0]);
											},
											!1
										),
										e.addEventListener(
											'touchmove',
											function(e) {
												r.isEmpty(e.touches) || t._triggerEvent('touchmove', e.touches[0]);
											},
											!1
										),
										e.addEventListener(
											'touchend',
											function(e) {
												r.isEmpty(e.changedTouches) ||
													t._triggerEvent('touchend', e.changedTouches[0]);
											},
											!1
										);
								},
								_scale: function() {
									var t = this.get('pixelRatio');
									this.scale(t, t);
								},
								_setCanvas: function() {
									var t = this.get('canvasDOM');
									this.set('el', t),
										this.set('context', t.getContext('2d')),
										this.set('canvas', this);
								},
								_setGlobalParam: function() {
									this.get('pixelRatio') || this.set('pixelRatio', r.getRatio());
								},
								_setDOM: function() {
									this._setContainer(), this._setLayer();
								},
								_setContainer: function() {
									var t = this.get('containerId'),
										e = this.get('containerDOM');
									e || ((e = document.getElementById(t)), this.set('containerDOM', e)),
										r.modifyCSS(e, { position: 'relative' });
								},
								_setLayer: function() {
									var t = this.get('containerDOM'),
										e = r.uniqueId('canvas_');
									if (t) {
										var n = r.createDom('<canvas id="' + e + '"></canvas>');
										t.appendChild(n), this.set('canvasDOM', n);
									}
								},
								_setInitSize: function() {
									this.changeSize(this.get('width'), this.get('height'));
								},
								_reSize: function() {
									var t = this.get('canvasDOM'),
										e = this.get('widthCanvas'),
										n = this.get('heightCanvas'),
										r = this.get('widthStyle'),
										i = this.get('heightStyle');
									(t.style.width = r),
										(t.style.height = i),
										t.setAttribute('width', e),
										t.setAttribute('height', n);
								},
								getWidth: function() {
									var t = this.get('pixelRatio');
									return this.get('width') * t;
								},
								getHeight: function() {
									var t = this.get('pixelRatio');
									return this.get('height') * t;
								},
								changeSize: function(t, e) {
									var n = this.get('pixelRatio'),
										r = t * n,
										i = e * n;
									this.set('widthCanvas', r),
										this.set('heightCanvas', i),
										this.set('widthStyle', t + 'px'),
										this.set('heightStyle', e + 'px'),
										this.set('width', t),
										this.set('height', e),
										this._reSize();
								},
								getPointByClient: function(t, e) {
									var n = this.get('el'),
										r = n.getBoundingClientRect();
									return {
										x: (n.width / (r.right - r.left)) * (t - r.left),
										y: (n.height / (r.bottom - r.top)) * (e - r.top),
									};
								},
								getClientByPoint: function(t, e) {
									var n = this.get('el'),
										r = n.getBoundingClientRect();
									return {
										clientX: t / (n.width / (r.right - r.left)) + r.left,
										clientY: e / (n.height / (r.bottom - r.top)) + r.top,
									};
								},
								beforeDraw: function() {
									var t = this.get('context'),
										e = this.get('el');
									t && t.clearRect(0, 0, e.width, e.height);
								},
								_beginDraw: function() {
									this.setSilent('toDraw', !0);
								},
								_endDraw: function() {
									this.setSilent('toDraw', !1);
								},
								draw: function() {
									function t() {
										e.setSilent(
											'animateHandler',
											r.requestAnimationFrame(function() {
												e.setSilent('animateHandler', void 0), e.get('toDraw') && t();
											})
										),
											e.beforeDraw();
										try {
											var n = e.get('context');
											a.superclass.draw.call(e, n);
										} catch (t) {
											console.warn('error in draw canvas, detail as:'),
												console.warn(t),
												e._endDraw();
										}
										e._endDraw();
									}
									var e = this;
									e.get('destroyed') || (e.get('animateHandler') ? this._beginDraw() : t());
								},
								destroy: function() {
									var t = this.get('containerDOM'),
										e = this.get('canvasDOM');
									e && t && t.removeChild(e), a.superclass.destroy.call(this);
								},
							}),
							(t.exports = a);
					},
					function(t, e) {
						var n,
							r =
								'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
									? function(t) {
											return typeof t;
									  }
									: function(t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  };
						n = (function() {
							return this;
						})();
						try {
							n = n || Function('return this')() || (0, eval)('this');
						} catch (t) {
							'object' === ('undefined' == typeof window ? 'undefined' : r(window)) && (n = window);
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							var e = a.call(t, u),
								n = t[u];
							try {
								t[u] = void 0;
								var r = !0;
							} catch (t) {}
							var i = s.call(t);
							return r && (e ? (t[u] = n) : delete t[u]), i;
						}
						var i = n(11),
							o = Object.prototype,
							a = o.hasOwnProperty,
							s = o.toString,
							u = i ? i.toStringTag : void 0;
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							return i.call(t);
						}
						var r = Object.prototype,
							i = r.toString;
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							return !0 === t || !1 === t || (o(t) && i(t) == a);
						}
						var i = n(7),
							o = n(4),
							a = '[object Boolean]';
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							return null == t;
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							return 'number' == typeof t || (o(t) && i(t) == a);
						}
						var i = n(7),
							o = n(4),
							a = '[object Number]';
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							if (null == t) return !0;
							if (
								u(t) &&
								(s(t) ||
									'string' == typeof t ||
									'function' == typeof t.splice ||
									c(t) ||
									f(t) ||
									a(t))
							)
								return !t.length;
							var e = o(t);
							if (e == h || e == p) return !t.size;
							if (l(t)) return !i(t).length;
							for (var n in t) if (g.call(t, n)) return !1;
							return !0;
						}
						var i = n(59),
							o = n(12),
							a = n(34),
							s = n(6),
							u = n(9),
							c = n(19),
							l = n(18),
							f = n(23),
							h = '[object Map]',
							p = '[object Set]',
							d = Object.prototype,
							g = d.hasOwnProperty;
						t.exports = r;
					},
					function(t, e, n) {
						t.exports = n(60)(Object.keys, Object);
					},
					function(t, e, n) {
						t.exports = n(10)(n(5), 'DataView');
					},
					function(t, e, n) {
						function r(t) {
							return !(!a(t) || o(t)) && (i(t) ? d : c).test(s(t));
						}
						var i = n(22),
							o = n(126),
							a = n(8),
							s = n(61),
							u = /[\\^$.*+?()[\]{}|]/g,
							c = /^\[object .+?Constructor\]$/,
							l = Function.prototype,
							f = Object.prototype,
							h = l.toString,
							p = f.hasOwnProperty,
							d = RegExp(
								'^' +
									h
										.call(p)
										.replace(u, '\\$&')
										.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
									'$'
							);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return !!o && o in t;
						}
						var i = n(127),
							o = (function() {
								var t = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || '');
								return t ? 'Symbol(src)_1.' + t : '';
							})();
						t.exports = r;
					},
					function(t, e, n) {
						t.exports = n(5)['__core-js_shared__'];
					},
					function(t, e) {
						function n(t, e) {
							return null == t ? void 0 : t[e];
						}
						t.exports = n;
					},
					function(t, e, n) {
						t.exports = n(10)(n(5), 'Promise');
					},
					function(t, e, n) {
						t.exports = n(10)(n(5), 'Set');
					},
					function(t, e, n) {
						t.exports = n(10)(n(5), 'WeakMap');
					},
					function(t, e, n) {
						function r(t) {
							return o(t) && i(t) == a;
						}
						var i = n(7),
							o = n(4),
							a = '[object Arguments]';
						t.exports = r;
					},
					function(t, e) {
						function n() {
							return !1;
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							return a(t) && o(t.length) && !!s[i(t)];
						}
						var i = n(7),
							o = n(62),
							a = n(4),
							s = {};
						(s['[object Float32Array]'] = s['[object Float64Array]'] = s['[object Int8Array]'] = s[
							'[object Int16Array]'
						] = s['[object Int32Array]'] = s['[object Uint8Array]'] = s[
							'[object Uint8ClampedArray]'
						] = s['[object Uint16Array]'] = s['[object Uint32Array]'] = !0),
							(s['[object Arguments]'] = s['[object Array]'] = s['[object ArrayBuffer]'] = s[
								'[object Boolean]'
							] = s['[object DataView]'] = s['[object Date]'] = s['[object Error]'] = s[
								'[object Function]'
							] = s['[object Map]'] = s['[object Number]'] = s['[object Object]'] = s[
								'[object RegExp]'
							] = s['[object Set]'] = s['[object String]'] = s['[object WeakMap]'] = !1),
							(t.exports = r);
					},
					function(t, e, n) {
						function r(t) {
							var e = ++o;
							return i(t) + e;
						}
						var i = n(63),
							o = 0;
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							if ('string' == typeof t) return t;
							if (a(t)) return o(t, r) + '';
							if (s(t)) return l ? l.call(t) : '';
							var e = t + '';
							return '0' == e && 1 / t == -u ? '-0' : e;
						}
						var i = n(11),
							o = n(37),
							a = n(6),
							s = n(137),
							u = 1 / 0,
							c = i ? i.prototype : void 0,
							l = c ? c.toString : void 0;
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return 'symbol' == (void 0 === t ? 'undefined' : i(t)) || (a(t) && o(t) == s);
						}
						var i =
								'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
									? function(t) {
											return typeof t;
									  }
									: function(t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  },
							o = n(7),
							a = n(4),
							s = '[object Symbol]';
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return i(t, o);
						}
						var i = n(139),
							o = 4;
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e, n, j, L, D) {
							var F,
								R = e & P,
								B = e & C,
								N = e & O;
							if ((n && (F = L ? n(t, j, L, D) : n(t)), void 0 !== F)) return F;
							if (!w(t)) return t;
							var z = x(t);
							if (z) {
								if (((F = y(t)), !R)) return l(t, F);
							} else {
								var V = g(t),
									G = V == k || V == I;
								if (b(t)) return c(t, R);
								if (V == T || V == A || (G && !L)) {
									if (((F = B || G ? {} : m(t)), !R)) return B ? h(t, u(F, t)) : f(t, s(F, t));
								} else {
									if (!E[V]) return L ? t : {};
									F = v(t, V, R);
								}
							}
							D || (D = new i());
							var Y = D.get(t);
							if (Y) return Y;
							if ((D.set(t, F), S(t)))
								return (
									t.forEach(function(i) {
										F.add(r(i, e, n, i, t, D));
									}),
									F
								);
							if (_(t))
								return (
									t.forEach(function(i, o) {
										F.set(o, r(i, e, n, o, t, D));
									}),
									F
								);
							var W = N ? (B ? d : p) : B ? keysIn : M,
								q = z ? void 0 : W(t);
							return (
								o(q || t, function(i, o) {
									q && ((o = i), (i = t[o])), a(F, o, r(i, e, n, o, t, D));
								}),
								F
							);
						}
						var i = n(38),
							o = n(65),
							a = n(39),
							s = n(162),
							u = n(164),
							c = n(69),
							l = n(30),
							f = n(167),
							h = n(169),
							p = n(73),
							d = n(170),
							g = n(12),
							y = n(171),
							v = n(172),
							m = n(77),
							x = n(6),
							b = n(19),
							_ = n(177),
							w = n(8),
							S = n(179),
							M = n(14),
							P = 1,
							C = 2,
							O = 4,
							A = '[object Arguments]',
							k = '[object Function]',
							I = '[object GeneratorFunction]',
							T = '[object Object]',
							E = {};
						(E[A] = E['[object Array]'] = E['[object ArrayBuffer]'] = E['[object DataView]'] = E[
							'[object Boolean]'
						] = E['[object Date]'] = E['[object Float32Array]'] = E['[object Float64Array]'] = E[
							'[object Int8Array]'
						] = E['[object Int16Array]'] = E['[object Int32Array]'] = E['[object Map]'] = E[
							'[object Number]'
						] = E[T] = E['[object RegExp]'] = E['[object Set]'] = E['[object String]'] = E[
							'[object Symbol]'
						] = E['[object Uint8Array]'] = E['[object Uint8ClampedArray]'] = E[
							'[object Uint16Array]'
						] = E['[object Uint32Array]'] = !0),
							(E['[object Error]'] = E[k] = E['[object WeakMap]'] = !1),
							(t.exports = r);
					},
					function(t, e) {
						function n() {
							(this.__data__ = []), (this.size = 0);
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							var e = this.__data__,
								n = i(e, t);
							return n >= 0 && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0);
						}
						var i = n(26),
							o = Array.prototype,
							a = o.splice;
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							var e = this.__data__,
								n = i(e, t);
							return 0 > n ? void 0 : e[n][1];
						}
						var i = n(26);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return i(this.__data__, t) > -1;
						}
						var i = n(26);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e) {
							var n = this.__data__,
								r = i(n, t);
							return 0 > r ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
						}
						var i = n(26);
						t.exports = r;
					},
					function(t, e, n) {
						function r() {
							(this.__data__ = new i()), (this.size = 0);
						}
						var i = n(25);
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							var e = this.__data__,
								n = e.delete(t);
							return (this.size = e.size), n;
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t) {
							return this.__data__.get(t);
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t) {
							return this.__data__.has(t);
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t, e) {
							var n = this.__data__;
							if (n instanceof i) {
								var r = n.__data__;
								if (!o || s - 1 > r.length) return r.push([t, e]), (this.size = ++n.size), this;
								n = this.__data__ = new a(r);
							}
							return n.set(t, e), (this.size = n.size), this;
						}
						var i = n(25),
							o = n(33),
							a = n(64),
							s = 200;
						t.exports = r;
					},
					function(t, e, n) {
						function r() {
							(this.size = 0),
								(this.__data__ = { hash: new i(), map: new (a || o)(), string: new i() });
						}
						var i = n(151),
							o = n(25),
							a = n(33);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							var e = -1,
								n = null == t ? 0 : t.length;
							for (this.clear(); ++e < n; ) {
								var r = t[e];
								this.set(r[0], r[1]);
							}
						}
						var i = n(152),
							o = n(153),
							a = n(154),
							s = n(155),
							u = n(156);
						(r.prototype.clear = i),
							(r.prototype.delete = o),
							(r.prototype.get = a),
							(r.prototype.has = s),
							(r.prototype.set = u),
							(t.exports = r);
					},
					function(t, e, n) {
						function r() {
							(this.__data__ = i ? i(null) : {}), (this.size = 0);
						}
						var i = n(27);
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							var e = this.has(t) && delete this.__data__[t];
							return (this.size -= e ? 1 : 0), e;
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							var e = this.__data__;
							if (i) {
								var n = e[t];
								return n === o ? void 0 : n;
							}
							return s.call(e, t) ? e[t] : void 0;
						}
						var i = n(27),
							o = '__lodash_hash_undefined__',
							a = Object.prototype,
							s = a.hasOwnProperty;
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							var e = this.__data__;
							return i ? void 0 !== e[t] : a.call(e, t);
						}
						var i = n(27),
							o = Object.prototype,
							a = o.hasOwnProperty;
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e) {
							var n = this.__data__;
							return (this.size += this.has(t) ? 0 : 1), (n[t] = i && void 0 === e ? o : e), this;
						}
						var i = n(27),
							o = '__lodash_hash_undefined__';
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							var e = i(this, t).delete(t);
							return (this.size -= e ? 1 : 0), e;
						}
						var i = n(28);
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							var e = void 0 === t ? 'undefined' : r(t);
							return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
								? '__proto__' !== t
								: null === t;
						}
						var r =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function(t) {
										return typeof t;
								  }
								: function(t) {
										return t &&
											'function' == typeof Symbol &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? 'symbol'
											: typeof t;
								  };
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							return i(this, t).get(t);
						}
						var i = n(28);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return i(this, t).has(t);
						}
						var i = n(28);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e) {
							var n = i(this, t),
								r = n.size;
							return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
						}
						var i = n(28);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e) {
							return t && i(e, o(e), t);
						}
						var i = n(13),
							o = n(14);
						t.exports = r;
					},
					function(t, e) {
						function n(t, e) {
							for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
							return r;
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t, e) {
							return t && i(e, o(e), t);
						}
						var i = n(13),
							o = n(29);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							if (!i(t)) return a(t);
							var e = o(t),
								n = [];
							for (var r in t) ('constructor' != r || (!e && u.call(t, r))) && n.push(r);
							return n;
						}
						var i = n(8),
							o = n(18),
							a = n(166),
							s = Object.prototype,
							u = s.hasOwnProperty;
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							var e = [];
							if (null != t) for (var n in Object(t)) e.push(n);
							return e;
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t, e) {
							return i(t, o(t), e);
						}
						var i = n(13),
							o = n(41);
						t.exports = r;
					},
					function(t, e) {
						function n(t, e) {
							for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
								var a = t[n];
								e(a, n, t) && (o[i++] = a);
							}
							return o;
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t, e) {
							return i(t, o(t), e);
						}
						var i = n(13),
							o = n(71);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return i(t, a, o);
						}
						var i = n(74),
							o = n(71),
							a = n(29);
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							var e = t.length,
								n = new t.constructor(e);
							return (
								e &&
									'string' == typeof t[0] &&
									i.call(t, 'index') &&
									((n.index = t.index), (n.input = t.input)),
								n
							);
						}
						var r = Object.prototype,
							i = r.hasOwnProperty;
						t.exports = n;
					},
					function(t, e, n) {
						function r(t, e, n) {
							var r = t.constructor;
							switch (e) {
								case v:
									return i(t);
								case c:
								case l:
									return new r(+t);
								case m:
									return o(t, n);
								case x:
								case b:
								case _:
								case w:
								case S:
								case M:
								case P:
								case C:
								case O:
									return u(t, n);
								case f:
									return new r();
								case h:
								case g:
									return new r(t);
								case p:
									return a(t);
								case d:
									return new r();
								case y:
									return s(t);
							}
						}
						var i = n(43),
							o = n(173),
							a = n(174),
							s = n(175),
							u = n(76),
							c = '[object Boolean]',
							l = '[object Date]',
							f = '[object Map]',
							h = '[object Number]',
							p = '[object RegExp]',
							d = '[object Set]',
							g = '[object String]',
							y = '[object Symbol]',
							v = '[object ArrayBuffer]',
							m = '[object DataView]',
							x = '[object Float32Array]',
							b = '[object Float64Array]',
							_ = '[object Int8Array]',
							w = '[object Int16Array]',
							S = '[object Int32Array]',
							M = '[object Uint8Array]',
							P = '[object Uint8ClampedArray]',
							C = '[object Uint16Array]',
							O = '[object Uint32Array]';
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e) {
							return new t.constructor(e ? i(t.buffer) : t.buffer, t.byteOffset, t.byteLength);
						}
						var i = n(43);
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							var e = new t.constructor(t.source, r.exec(t));
							return (e.lastIndex = t.lastIndex), e;
						}
						var r = /\w*$/;
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							return a ? Object(a.call(t)) : {};
						}
						var i = n(11),
							o = i ? i.prototype : void 0,
							a = o ? o.valueOf : void 0;
						t.exports = r;
					},
					function(t, e, n) {
						var r = n(8),
							i = Object.create;
						t.exports = (function() {
							function t() {}
							return function(e) {
								if (!r(e)) return {};
								if (i) return i(e);
								t.prototype = e;
								var n = new t();
								return (t.prototype = void 0), n;
							};
						})();
					},
					function(t, e, n) {
						var r = n(178),
							i = n(24),
							o = n(36),
							a = o && o.isMap;
						t.exports = a ? i(a) : r;
					},
					function(t, e, n) {
						function r(t) {
							return o(t) && i(t) == a;
						}
						var i = n(12),
							o = n(4),
							a = '[object Map]';
						t.exports = r;
					},
					function(t, e, n) {
						var r = n(180),
							i = n(24),
							o = n(36),
							a = o && o.isSet;
						t.exports = a ? i(a) : r;
					},
					function(t, e, n) {
						function r(t) {
							return o(t) && i(t) == a;
						}
						var i = n(12),
							o = n(4),
							a = '[object Set]';
						t.exports = r;
					},
					function(t, e, n) {
						var r = n(39),
							i = n(13),
							o = n(78),
							a = n(9),
							s = n(18),
							u = n(14),
							c = Object.prototype,
							l = c.hasOwnProperty;
						t.exports = o(function(t, e) {
							if (s(e) || a(e)) return void i(e, u(e), t);
							for (var n in e) l.call(e, n) && r(t, n, e[n]);
						});
					},
					function(t, e, n) {
						function r(t, e, n) {
							return (
								(e = o(void 0 === e ? t.length - 1 : e, 0)),
								function() {
									for (var r = arguments, a = -1, s = o(r.length - e, 0), u = Array(s); ++a < s; )
										u[a] = r[e + a];
									a = -1;
									for (var c = Array(e + 1); ++a < e; ) c[a] = r[a];
									return (c[e] = n(u)), i(t, this, c);
								}
							);
						}
						var i = n(183),
							o = Math.max;
						t.exports = r;
					},
					function(t, e) {
						function n(t, e, n) {
							switch (n.length) {
								case 0:
									return t.call(e);
								case 1:
									return t.call(e, n[0]);
								case 2:
									return t.call(e, n[0], n[1]);
								case 3:
									return t.call(e, n[0], n[1], n[2]);
							}
							return t.apply(e, n);
						}
						t.exports = n;
					},
					function(t, e, n) {
						var r = n(185);
						t.exports = n(187)(r);
					},
					function(t, e, n) {
						var r = n(186),
							i = n(66),
							o = n(44);
						t.exports = i
							? function(t, e) {
									return i(t, 'toString', {
										configurable: !0,
										enumerable: !1,
										value: r(e),
										writable: !0,
									});
							  }
							: o;
					},
					function(t, e) {
						function n(t) {
							return function() {
								return t;
							};
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t) {
							var e = 0,
								n = 0;
							return function() {
								var a = o(),
									s = i - (a - n);
								if (((n = a), s > 0)) {
									if (++e >= r) return arguments[0];
								} else e = 0;
								return t.apply(void 0, arguments);
							};
						}
						var r = 800,
							i = 16,
							o = Date.now;
						t.exports = n;
					},
					function(t, e, n) {
						function r(t, e, n) {
							if (!u(n)) return !1;
							var r = void 0 === e ? 'undefined' : i(e);
							return (
								!!('number' == r ? a(n) && s(e, n.length) : 'string' == r && e in n) && o(n[e], t)
							);
						}
						var i =
								'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
									? function(t) {
											return typeof t;
									  }
									: function(t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  },
							o = n(20),
							a = n(9),
							s = n(68),
							u = n(8);
						t.exports = r;
					},
					function(t, e, n) {
						var r = n(190);
						t.exports = n(78)(function(t, e, n) {
							r(t, e, n);
						});
					},
					function(t, e, n) {
						function r(t, e, n, f, h) {
							t !== e &&
								a(
									e,
									function(a, c) {
										if (u(a)) h || (h = new i()), s(t, e, c, n, r, f, h);
										else {
											var p = f ? f(l(t, c), a, c + '', t, e, h) : void 0;
											void 0 === p && (p = a), o(t, c, p);
										}
									},
									c
								);
						}
						var i = n(38),
							o = n(80),
							a = n(81),
							s = n(192),
							u = n(8),
							c = n(29),
							l = n(82);
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							return function(e, n, r) {
								for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
									var u = a[t ? s : ++i];
									if (!1 === n(o[u], u, o)) break;
								}
								return e;
							};
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t, e, n, r, x, b, _) {
							var w = v(t, n),
								S = v(e, n),
								M = _.get(S);
							if (M) return void i(t, n, M);
							var P = b ? b(w, S, n + '', t, e, _) : void 0,
								C = void 0 === P;
							if (C) {
								var O = l(S),
									A = !O && h(S),
									k = !O && !A && y(S);
								(P = S),
									O || A || k
										? l(w)
											? (P = w)
											: f(w)
												? (P = s(w))
												: A
													? ((C = !1), (P = o(S, !0)))
													: k
														? ((C = !1), (P = a(S, !0)))
														: (P = [])
										: g(S) || c(S)
											? ((P = w), c(w) ? (P = m(w)) : (!d(w) || (r && p(w))) && (P = u(S)))
											: (C = !1);
							}
							C && (_.set(S, P), x(P, S, r, b, _), _.delete(S)), i(t, n, P);
						}
						var i = n(80),
							o = n(69),
							a = n(76),
							s = n(30),
							u = n(77),
							c = n(34),
							l = n(6),
							f = n(193),
							h = n(19),
							p = n(22),
							d = n(8),
							g = n(194),
							y = n(23),
							v = n(82),
							m = n(195);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return o(t) && i(t);
						}
						var i = n(9),
							o = n(4);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							if (!a(t) || i(t) != s) return !1;
							var e = o(t);
							if (null === e) return !0;
							var n = f.call(e, 'constructor') && e.constructor;
							return 'function' == typeof n && n instanceof n && l.call(n) == h;
						}
						var i = n(7),
							o = n(42),
							a = n(4),
							s = '[object Object]',
							u = Function.prototype,
							c = Object.prototype,
							l = u.toString,
							f = c.hasOwnProperty,
							h = l.call(Object);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return i(t, o(t));
						}
						var i = n(13),
							o = n(29);
						t.exports = r;
					},
					function(t, e, n) {
						t.exports = n(197)('toUpperCase');
					},
					function(t, e, n) {
						function r(t) {
							return function(e) {
								e = s(e);
								var n = o(e) ? a(e) : void 0,
									r = n ? n[0] : e.charAt(0),
									u = n ? i(n, 1).join('') : e.slice(1);
								return r[t]() + u;
							};
						}
						var i = n(198),
							o = n(83),
							a = n(84),
							s = n(63);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e, n) {
							var r = t.length;
							return (n = void 0 === n ? r : n), e || r > n ? i(t, e, n) : t;
						}
						var i = n(199);
						t.exports = r;
					},
					function(t, e) {
						function n(t, e, n) {
							var r = -1,
								i = t.length;
							0 > e && (e = -e > i ? 0 : i + e),
								(n = n > i ? i : n),
								0 > n && (n += i),
								(i = e > n ? 0 : (n - e) >>> 0),
								(e >>>= 0);
							for (var o = Array(i); ++r < i; ) o[r] = t[r + e];
							return o;
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t) {
							return t.split('');
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t) {
							return t.match(i) || [];
						}
						var r = '\\ud83c[\\udffb-\\udfff]',
							i = RegExp(
								r +
									'(?=' +
									r +
									')|(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*',
								'g'
							);
						t.exports = n;
					},
					function(t, e, n) {
						t.exports = n(79)(n(203));
					},
					function(t, e, n) {
						function r(t, e) {
							return t && t.length && e && e.length ? i(t, e) : t;
						}
						var i = n(204);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e, n, r) {
							var c = r ? a : o,
								f = -1,
								h = e.length,
								p = t;
							for (t === e && (e = u(e)), n && (p = i(t, s(n))); ++f < h; )
								for (var d = 0, g = e[f], y = n ? n(g) : g; (d = c(p, y, d, r)) > -1; )
									p !== t && l.call(p, d, 1), l.call(t, d, 1);
							return t;
						}
						var i = n(37),
							o = n(205),
							a = n(209),
							s = n(24),
							u = n(30),
							c = Array.prototype,
							l = c.splice;
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e, n) {
							return e === e ? a(t, e, n) : i(t, o, n);
						}
						var i = n(206),
							o = n(207),
							a = n(208);
						t.exports = r;
					},
					function(t, e) {
						function n(t, e, n, r) {
							for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
								if (e(t[o], o, t)) return o;
							return -1;
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t) {
							return t !== t;
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t, e, n) {
							for (var r = n - 1, i = t.length; ++r < i; ) if (t[r] === e) return r;
							return -1;
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t, e, n, r) {
							for (var i = n - 1, o = t.length; ++i < o; ) if (r(t[i], e)) return i;
							return -1;
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t, e) {
							return (s(t) ? i : o)(t, a(e));
						}
						var i = n(65),
							o = n(211),
							a = n(214),
							s = n(6);
						t.exports = r;
					},
					function(t, e, n) {
						var r = n(212);
						t.exports = n(213)(r);
					},
					function(t, e, n) {
						function r(t, e) {
							return t && i(t, e, o);
						}
						var i = n(81),
							o = n(14);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e) {
							return function(n, r) {
								if (null == n) return n;
								if (!i(n)) return t(n, r);
								for (
									var o = n.length, a = e ? o : -1, s = Object(n);
									(e ? a-- : ++a < o) && !1 !== r(s[a], a, s);

								);
								return n;
							};
						}
						var i = n(9);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							return 'function' == typeof t ? t : i;
						}
						var i = n(44);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e) {
							return i(t, e);
						}
						var i = n(216);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e, n, a, s) {
							return (
								t === e ||
								(null == t || null == e || (!o(t) && !o(e))
									? t !== t && e !== e
									: i(t, e, n, a, r, s))
							);
						}
						var i = n(217),
							o = n(4);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e, n, r, y, m) {
							var x = c(t),
								b = c(e),
								_ = x ? d : u(t),
								w = b ? d : u(e);
							(_ = _ == p ? g : _), (w = w == p ? g : w);
							var S = _ == g,
								M = w == g,
								P = _ == w;
							if (P && l(t)) {
								if (!l(e)) return !1;
								(x = !0), (S = !1);
							}
							if (P && !S)
								return m || (m = new i()), x || f(t) ? o(t, e, n, r, y, m) : a(t, e, _, n, r, y, m);
							if (!(n & h)) {
								var C = S && v.call(t, '__wrapped__'),
									O = M && v.call(e, '__wrapped__');
								if (C || O) {
									var A = C ? t.value() : t,
										k = O ? e.value() : e;
									return m || (m = new i()), y(A, k, n, r, m);
								}
							}
							return !!P && (m || (m = new i()), s(t, e, n, r, y, m));
						}
						var i = n(38),
							o = n(85),
							a = n(223),
							s = n(224),
							u = n(12),
							c = n(6),
							l = n(19),
							f = n(23),
							h = 1,
							p = '[object Arguments]',
							d = '[object Array]',
							g = '[object Object]',
							y = Object.prototype,
							v = y.hasOwnProperty;
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							var e = -1,
								n = null == t ? 0 : t.length;
							for (this.__data__ = new i(); ++e < n; ) this.add(t[e]);
						}
						var i = n(64),
							o = n(219),
							a = n(220);
						(r.prototype.add = r.prototype.push = o), (r.prototype.has = a), (t.exports = r);
					},
					function(t, e) {
						function n(t) {
							return this.__data__.set(t, r), this;
						}
						var r = '__lodash_hash_undefined__';
						t.exports = n;
					},
					function(t, e) {
						function n(t) {
							return this.__data__.has(t);
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t, e) {
							for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
								if (e(t[n], n, t)) return !0;
							return !1;
						}
						t.exports = n;
					},
					function(t, e) {
						function n(t, e) {
							return t.has(e);
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t, e, n, r, i, S, P) {
							switch (n) {
								case w:
									if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
									(t = t.buffer), (e = e.buffer);
								case _:
									return !(t.byteLength != e.byteLength || !S(new o(t), new o(e)));
								case h:
								case p:
								case y:
									return a(+t, +e);
								case d:
									return t.name == e.name && t.message == e.message;
								case v:
								case x:
									return t == e + '';
								case g:
									var C = u;
								case m:
									var O = r & l;
									if ((C || (C = c), t.size != e.size && !O)) return !1;
									var A = P.get(t);
									if (A) return A == e;
									(r |= f), P.set(t, e);
									var k = s(C(t), C(e), r, i, S, P);
									return P.delete(t), k;
								case b:
									if (M) return M.call(t) == M.call(e);
							}
							return !1;
						}
						var i = n(11),
							o = n(75),
							a = n(20),
							s = n(85),
							u = n(86),
							c = n(87),
							l = 1,
							f = 2,
							h = '[object Boolean]',
							p = '[object Date]',
							d = '[object Error]',
							g = '[object Map]',
							y = '[object Number]',
							v = '[object RegExp]',
							m = '[object Set]',
							x = '[object String]',
							b = '[object Symbol]',
							_ = '[object ArrayBuffer]',
							w = '[object DataView]',
							S = i ? i.prototype : void 0,
							M = S ? S.valueOf : void 0;
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e, n, r, a, u) {
							var c = n & o,
								l = i(t),
								f = l.length;
							if (f != i(e).length && !c) return !1;
							for (var h = f; h--; ) {
								var p = l[h];
								if (!(c ? p in e : s.call(e, p))) return !1;
							}
							var d = u.get(t);
							if (d && u.get(e)) return d == e;
							var g = !0;
							u.set(t, e), u.set(e, t);
							for (var y = c; ++h < f; ) {
								p = l[h];
								var v = t[p],
									m = e[p];
								if (r) var x = c ? r(m, v, p, e, t, u) : r(v, m, p, t, e, u);
								if (!(void 0 === x ? v === m || a(v, m, n, r, u) : x)) {
									g = !1;
									break;
								}
								y || (y = 'constructor' == p);
							}
							if (g && !y) {
								var b = t.constructor,
									_ = e.constructor;
								b != _ &&
									'constructor' in t &&
									'constructor' in e &&
									!(
										'function' == typeof b &&
										b instanceof b &&
										'function' == typeof _ &&
										_ instanceof _
									) &&
									(g = !1);
							}
							return u.delete(t), u.delete(e), g;
						}
						var i = n(73),
							o = 1,
							a = Object.prototype,
							s = a.hasOwnProperty;
						t.exports = r;
					},
					function(t, e, n) {
						function r(t) {
							if (!t) return [];
							if (s(t)) return u(t) ? h(t) : o(t);
							if (y && t[y]) return c(t[y]());
							var e = a(t);
							return (e == d ? l : e == g ? f : p)(t);
						}
						var i = n(11),
							o = n(30),
							a = n(12),
							s = n(9),
							u = n(58),
							c = n(226),
							l = n(86),
							f = n(87),
							h = n(84),
							p = n(227),
							d = '[object Map]',
							g = '[object Set]',
							y = i ? i.iterator : void 0;
						t.exports = r;
					},
					function(t, e) {
						function n(t) {
							for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
							return n;
						}
						t.exports = n;
					},
					function(t, e, n) {
						function r(t) {
							return null == t ? [] : i(t, o(t));
						}
						var i = n(228),
							o = n(14);
						t.exports = r;
					},
					function(t, e, n) {
						function r(t, e) {
							return i(e, function(e) {
								return t[e];
							});
						}
						var i = n(37);
						t.exports = r;
					},
					function(t, e, n) {
						var r = n(0),
							i = ['strokeStyle', 'fillStyle', 'globalAlpha'],
							o = ['circle', 'ellipse', 'fan', 'polygon', 'rect', 'path'],
							a = {
								r: 'R',
								opacity: 'Opacity',
								lineWidth: 'LineWidth',
								clip: 'Clip',
								stroke: 'Stroke',
								fill: 'Fill',
								strokeOpacity: 'Stroke',
								fillOpacity: 'Fill',
								x: 'X',
								y: 'Y',
								rx: 'Rx',
								ry: 'Ry',
								re: 'Re',
								rs: 'Rs',
								width: 'Width',
								height: 'Height',
								img: 'Img',
								x1: 'X1',
								x2: 'X2',
								y1: 'Y1',
								y2: 'Y2',
								points: 'Points',
								p1: 'P1',
								p2: 'P2',
								p3: 'P3',
								p4: 'P4',
								text: 'Text',
								radius: 'Radius',
								textAlign: 'TextAlign',
								textBaseline: 'TextBaseline',
								font: 'Font',
								fontSize: 'FontSize',
								fontStyle: 'FontStyle',
								fontVariant: 'FontVariant',
								fontWeight: 'FontWeight',
								fontFamily: 'FontFamily',
								clockwise: 'Clockwise',
								startAngle: 'StartAngle',
								endAngle: 'EndAngle',
								path: 'Path',
							},
							s = { stroke: 'strokeStyle', fill: 'fillStyle', opacity: 'globalAlpha' };
						t.exports = {
							canFill: !1,
							canStroke: !1,
							initAttrs: function(t) {
								return (
									(this.__attrs = { opacity: 1, fillOpacity: 1, strokeOpacity: 1 }),
									this.attr(r.assign(this.getDefaultAttrs(), t)),
									this
								);
							},
							getDefaultAttrs: function() {
								return {};
							},
							attr: function(t, e) {
								var n = this;
								if (0 === arguments.length) return n.__attrs;
								if (r.isObject(t)) {
									for (var o in t)
										if (-1 === i.indexOf(o)) {
											var s = t[o];
											n._setAttr(o, s);
										}
									return n.__afterSetAttrAll && n.__afterSetAttrAll(t), n.clearBBox(), n;
								}
								if (2 === arguments.length) {
									if (!1 !== n._setAttr(t, e)) {
										var u = '__afterSetAttr' + a[t];
										n[u] && n[u](e);
									}
									return n.clearBBox(), n;
								}
								return n._getAttr(t);
							},
							clearBBox: function() {
								this.setSilent('box', null);
							},
							__afterSetAttrAll: function() {},
							_getAttr: function(t) {
								return this.__attrs[t];
							},
							_setAttr: function(t, e) {
								var n = this;
								if ('clip' === t) n.__setAttrClip(e), (n.__attrs.clip = e);
								else if ('transform' === t) n.__setAttrTrans(e);
								else {
									n.__attrs[t] = e;
									var r = s[t];
									r && (n.__attrs[r] = e);
								}
								return n;
							},
							hasFill: function() {
								return this.canFill && this.__attrs.fillStyle;
							},
							hasStroke: function() {
								return this.canStroke && this.__attrs.strokeStyle;
							},
							__setAttrOpacity: function(t) {
								return (this.__attrs.globalAlpha = t), t;
							},
							__setAttrClip: function(t) {
								var e = this;
								return t && o.indexOf(t.type) > -1
									? (null === t.get('canvas') && (t = r.clone(t)),
									  t.set('parent', e.get('parent')),
									  t.set('context', e.get('context')),
									  (t.inside = function(n, r) {
											var i = [n, r, 1];
											return t.invert(i, e.get('canvas')), t.__isPointInFill(i[0], i[1]);
									  }),
									  t)
									: null;
							},
							__setAttrTrans: function(t) {
								return this.transform(t);
							},
						};
					},
					function(t, e, n) {
						function r(t) {
							return (
								1 === t[0] && 0 === t[1] && 0 === t[3] && 1 === t[4] && 0 === t[6] && 0 === t[7]
							);
						}
						function i(t) {
							return 0 === t[1] && 0 === t[3] && 0 === t[6] && 0 === t[7];
						}
						function o(t, e) {
							r(e) || (i(e) ? ((t[0] *= e[0]), (t[4] *= e[4])) : s.multiply(t, t, e));
						}
						var a = n(0),
							s = n(3).mat3,
							u = n(3).vec3;
						t.exports = {
							initTransform: function() {
								this.attr('matrix', [1, 0, 0, 0, 1, 0, 0, 0, 1]);
							},
							translate: function(t, e) {
								var n = this.attr('matrix');
								return (
									s.translate(n, n, [t, e]), this.clearTotalMatrix(), this.attr('matrix', n), this
								);
							},
							rotate: function(t) {
								var e = this.attr('matrix');
								return s.rotate(e, e, t), this.clearTotalMatrix(), this.attr('matrix', e), this;
							},
							scale: function(t, e) {
								var n = this.attr('matrix');
								return s.scale(n, n, [t, e]), this.clearTotalMatrix(), this.attr('matrix', n), this;
							},
							rotateAtStart: function(t) {
								var e = this.attr('x'),
									n = this.attr('y');
								Math.abs(t) > 2 * Math.PI && (t = (t / 180) * Math.PI),
									this.transform([['t', -e, -n], ['r', t], ['t', e, n]]);
							},
							move: function(t, e) {
								this.translate(t - (this.get('x') || 0), e - (this.get('y') || 0)),
									this.set('x', t),
									this.set('y', e);
							},
							transform: function(t) {
								var e = this,
									n = e.attr('matrix');
								return (
									a.each(t, function(t) {
										switch (t[0]) {
											case 't':
												e.translate(t[1], t[2]);
												break;
											case 's':
												e.scale(t[1], t[2]);
												break;
											case 'r':
												e.rotate(t[1]);
												break;
											case 'm':
												e.attr('matrix', s.multiply([], n, t[1])), e.clearTotalMatrix();
										}
									}),
									e
								);
							},
							setTransform: function(t) {
								return this.attr('matrix', [1, 0, 0, 0, 1, 0, 0, 0, 1]), this.transform(t);
							},
							getMatrix: function() {
								return this.attr('matrix');
							},
							setMatrix: function(t) {
								return this.attr('matrix', t), this.clearTotalMatrix(), this;
							},
							apply: function(t, e) {
								var n = void 0;
								return (
									(n = e ? this._getMatrixByRoot(e) : this.attr('matrix')),
									u.transformMat3(t, t, n),
									this
								);
							},
							_getMatrixByRoot: function(t) {
								var e = this;
								t = t || e;
								for (var n = e, r = []; n !== t; ) r.unshift(n), (n = n.get('parent'));
								r.unshift(n);
								var i = [1, 0, 0, 0, 1, 0, 0, 0, 1];
								return (
									a.each(r, function(t) {
										s.multiply(i, t.attr('matrix'), i);
									}),
									i
								);
							},
							getTotalMatrix: function() {
								var t = this.__cfg.totalMatrix;
								if (!t) {
									t = [1, 0, 0, 0, 1, 0, 0, 0, 1];
									var e = this.__cfg.parent;
									if (e) {
										o(t, e.getTotalMatrix());
									}
									o(t, this.attr('matrix')), (this.__cfg.totalMatrix = t);
								}
								return t;
							},
							clearTotalMatrix: function() {},
							invert: function(t) {
								var e = this.getTotalMatrix();
								if (i(e)) (t[0] /= e[0]), (t[1] /= e[4]);
								else {
									var n = s.invert([], e);
									n && u.transformMat3(t, t, n);
								}
								return this;
							},
							resetTransform: function(t) {
								var e = this.attr('matrix');
								r(e) || t.transform(e[0], e[1], e[3], e[4], e[6], e[7]);
							},
						};
					},
					function(t, e, n) {
						var r = n(45),
							i = {};
						(i.create = function() {
							var t = new r.ARRAY_TYPE(9);
							return (
								(t[0] = 1),
								(t[1] = 0),
								(t[2] = 0),
								(t[3] = 0),
								(t[4] = 1),
								(t[5] = 0),
								(t[6] = 0),
								(t[7] = 0),
								(t[8] = 1),
								t
							);
						}),
							(i.fromMat4 = function(t, e) {
								return (
									(t[0] = e[0]),
									(t[1] = e[1]),
									(t[2] = e[2]),
									(t[3] = e[4]),
									(t[4] = e[5]),
									(t[5] = e[6]),
									(t[6] = e[8]),
									(t[7] = e[9]),
									(t[8] = e[10]),
									t
								);
							}),
							(i.clone = function(t) {
								var e = new r.ARRAY_TYPE(9);
								return (
									(e[0] = t[0]),
									(e[1] = t[1]),
									(e[2] = t[2]),
									(e[3] = t[3]),
									(e[4] = t[4]),
									(e[5] = t[5]),
									(e[6] = t[6]),
									(e[7] = t[7]),
									(e[8] = t[8]),
									e
								);
							}),
							(i.copy = function(t, e) {
								return (
									(t[0] = e[0]),
									(t[1] = e[1]),
									(t[2] = e[2]),
									(t[3] = e[3]),
									(t[4] = e[4]),
									(t[5] = e[5]),
									(t[6] = e[6]),
									(t[7] = e[7]),
									(t[8] = e[8]),
									t
								);
							}),
							(i.fromValues = function(t, e, n, i, o, a, s, u, c) {
								var l = new r.ARRAY_TYPE(9);
								return (
									(l[0] = t),
									(l[1] = e),
									(l[2] = n),
									(l[3] = i),
									(l[4] = o),
									(l[5] = a),
									(l[6] = s),
									(l[7] = u),
									(l[8] = c),
									l
								);
							}),
							(i.set = function(t, e, n, r, i, o, a, s, u, c) {
								return (
									(t[0] = e),
									(t[1] = n),
									(t[2] = r),
									(t[3] = i),
									(t[4] = o),
									(t[5] = a),
									(t[6] = s),
									(t[7] = u),
									(t[8] = c),
									t
								);
							}),
							(i.identity = function(t) {
								return (
									(t[0] = 1),
									(t[1] = 0),
									(t[2] = 0),
									(t[3] = 0),
									(t[4] = 1),
									(t[5] = 0),
									(t[6] = 0),
									(t[7] = 0),
									(t[8] = 1),
									t
								);
							}),
							(i.transpose = function(t, e) {
								if (t === e) {
									var n = e[1],
										r = e[2],
										i = e[5];
									(t[1] = e[3]), (t[2] = e[6]), (t[3] = n), (t[5] = e[7]), (t[6] = r), (t[7] = i);
								} else
									(t[0] = e[0]),
										(t[1] = e[3]),
										(t[2] = e[6]),
										(t[3] = e[1]),
										(t[4] = e[4]),
										(t[5] = e[7]),
										(t[6] = e[2]),
										(t[7] = e[5]),
										(t[8] = e[8]);
								return t;
							}),
							(i.invert = function(t, e) {
								var n = e[0],
									r = e[1],
									i = e[2],
									o = e[3],
									a = e[4],
									s = e[5],
									u = e[6],
									c = e[7],
									l = e[8],
									f = l * a - s * c,
									h = -l * o + s * u,
									p = c * o - a * u,
									d = n * f + r * h + i * p;
								return d
									? ((d = 1 / d),
									  (t[0] = f * d),
									  (t[1] = (-l * r + i * c) * d),
									  (t[2] = (s * r - i * a) * d),
									  (t[3] = h * d),
									  (t[4] = (l * n - i * u) * d),
									  (t[5] = (-s * n + i * o) * d),
									  (t[6] = p * d),
									  (t[7] = (-c * n + r * u) * d),
									  (t[8] = (a * n - r * o) * d),
									  t)
									: null;
							}),
							(i.adjoint = function(t, e) {
								var n = e[0],
									r = e[1],
									i = e[2],
									o = e[3],
									a = e[4],
									s = e[5],
									u = e[6],
									c = e[7],
									l = e[8];
								return (
									(t[0] = a * l - s * c),
									(t[1] = i * c - r * l),
									(t[2] = r * s - i * a),
									(t[3] = s * u - o * l),
									(t[4] = n * l - i * u),
									(t[5] = i * o - n * s),
									(t[6] = o * c - a * u),
									(t[7] = r * u - n * c),
									(t[8] = n * a - r * o),
									t
								);
							}),
							(i.determinant = function(t) {
								var e = t[0],
									n = t[1],
									r = t[2],
									i = t[3],
									o = t[4],
									a = t[5],
									s = t[6],
									u = t[7],
									c = t[8];
								return e * (c * o - a * u) + n * (-c * i + a * s) + r * (u * i - o * s);
							}),
							(i.multiply = function(t, e, n) {
								var r = e[0],
									i = e[1],
									o = e[2],
									a = e[3],
									s = e[4],
									u = e[5],
									c = e[6],
									l = e[7],
									f = e[8],
									h = n[0],
									p = n[1],
									d = n[2],
									g = n[3],
									y = n[4],
									v = n[5],
									m = n[6],
									x = n[7],
									b = n[8];
								return (
									(t[0] = h * r + p * a + d * c),
									(t[1] = h * i + p * s + d * l),
									(t[2] = h * o + p * u + d * f),
									(t[3] = g * r + y * a + v * c),
									(t[4] = g * i + y * s + v * l),
									(t[5] = g * o + y * u + v * f),
									(t[6] = m * r + x * a + b * c),
									(t[7] = m * i + x * s + b * l),
									(t[8] = m * o + x * u + b * f),
									t
								);
							}),
							(i.mul = i.multiply),
							(i.translate = function(t, e, n) {
								var r = e[0],
									i = e[1],
									o = e[2],
									a = e[3],
									s = e[4],
									u = e[5],
									c = e[6],
									l = e[7],
									f = e[8],
									h = n[0],
									p = n[1];
								return (
									(t[0] = r),
									(t[1] = i),
									(t[2] = o),
									(t[3] = a),
									(t[4] = s),
									(t[5] = u),
									(t[6] = h * r + p * a + c),
									(t[7] = h * i + p * s + l),
									(t[8] = h * o + p * u + f),
									t
								);
							}),
							(i.rotate = function(t, e, n) {
								var r = e[0],
									i = e[1],
									o = e[2],
									a = e[3],
									s = e[4],
									u = e[5],
									c = e[6],
									l = e[7],
									f = e[8],
									h = Math.sin(n),
									p = Math.cos(n);
								return (
									(t[0] = p * r + h * a),
									(t[1] = p * i + h * s),
									(t[2] = p * o + h * u),
									(t[3] = p * a - h * r),
									(t[4] = p * s - h * i),
									(t[5] = p * u - h * o),
									(t[6] = c),
									(t[7] = l),
									(t[8] = f),
									t
								);
							}),
							(i.scale = function(t, e, n) {
								var r = n[0],
									i = n[1];
								return (
									(t[0] = r * e[0]),
									(t[1] = r * e[1]),
									(t[2] = r * e[2]),
									(t[3] = i * e[3]),
									(t[4] = i * e[4]),
									(t[5] = i * e[5]),
									(t[6] = e[6]),
									(t[7] = e[7]),
									(t[8] = e[8]),
									t
								);
							}),
							(i.fromTranslation = function(t, e) {
								return (
									(t[0] = 1),
									(t[1] = 0),
									(t[2] = 0),
									(t[3] = 0),
									(t[4] = 1),
									(t[5] = 0),
									(t[6] = e[0]),
									(t[7] = e[1]),
									(t[8] = 1),
									t
								);
							}),
							(i.fromRotation = function(t, e) {
								var n = Math.sin(e),
									r = Math.cos(e);
								return (
									(t[0] = r),
									(t[1] = n),
									(t[2] = 0),
									(t[3] = -n),
									(t[4] = r),
									(t[5] = 0),
									(t[6] = 0),
									(t[7] = 0),
									(t[8] = 1),
									t
								);
							}),
							(i.fromScaling = function(t, e) {
								return (
									(t[0] = e[0]),
									(t[1] = 0),
									(t[2] = 0),
									(t[3] = 0),
									(t[4] = e[1]),
									(t[5] = 0),
									(t[6] = 0),
									(t[7] = 0),
									(t[8] = 1),
									t
								);
							}),
							(i.fromMat2d = function(t, e) {
								return (
									(t[0] = e[0]),
									(t[1] = e[1]),
									(t[2] = 0),
									(t[3] = e[2]),
									(t[4] = e[3]),
									(t[5] = 0),
									(t[6] = e[4]),
									(t[7] = e[5]),
									(t[8] = 1),
									t
								);
							}),
							(i.fromQuat = function(t, e) {
								var n = e[0],
									r = e[1],
									i = e[2],
									o = e[3],
									a = n + n,
									s = r + r,
									u = i + i,
									c = n * a,
									l = r * a,
									f = r * s,
									h = i * a,
									p = i * s,
									d = i * u,
									g = o * a,
									y = o * s,
									v = o * u;
								return (
									(t[0] = 1 - f - d),
									(t[3] = l - v),
									(t[6] = h + y),
									(t[1] = l + v),
									(t[4] = 1 - c - d),
									(t[7] = p - g),
									(t[2] = h - y),
									(t[5] = p + g),
									(t[8] = 1 - c - f),
									t
								);
							}),
							(i.normalFromMat4 = function(t, e) {
								var n = e[0],
									r = e[1],
									i = e[2],
									o = e[3],
									a = e[4],
									s = e[5],
									u = e[6],
									c = e[7],
									l = e[8],
									f = e[9],
									h = e[10],
									p = e[11],
									d = e[12],
									g = e[13],
									y = e[14],
									v = e[15],
									m = n * s - r * a,
									x = n * u - i * a,
									b = n * c - o * a,
									_ = r * u - i * s,
									w = r * c - o * s,
									S = i * c - o * u,
									M = l * g - f * d,
									P = l * y - h * d,
									C = l * v - p * d,
									O = f * y - h * g,
									A = f * v - p * g,
									k = h * v - p * y,
									I = m * k - x * A + b * O + _ * C - w * P + S * M;
								return I
									? ((I = 1 / I),
									  (t[0] = (s * k - u * A + c * O) * I),
									  (t[1] = (u * C - a * k - c * P) * I),
									  (t[2] = (a * A - s * C + c * M) * I),
									  (t[3] = (i * A - r * k - o * O) * I),
									  (t[4] = (n * k - i * C + o * P) * I),
									  (t[5] = (r * C - n * A - o * M) * I),
									  (t[6] = (g * S - y * w + v * _) * I),
									  (t[7] = (y * b - d * S - v * x) * I),
									  (t[8] = (d * w - g * b + v * m) * I),
									  t)
									: null;
							}),
							(i.str = function(t) {
								return (
									'mat3(' +
									t[0] +
									', ' +
									t[1] +
									', ' +
									t[2] +
									', ' +
									t[3] +
									', ' +
									t[4] +
									', ' +
									t[5] +
									', ' +
									t[6] +
									', ' +
									t[7] +
									', ' +
									t[8] +
									')'
								);
							}),
							(i.frob = function(t) {
								return Math.sqrt(
									Math.pow(t[0], 2) +
										Math.pow(t[1], 2) +
										Math.pow(t[2], 2) +
										Math.pow(t[3], 2) +
										Math.pow(t[4], 2) +
										Math.pow(t[5], 2) +
										Math.pow(t[6], 2) +
										Math.pow(t[7], 2) +
										Math.pow(t[8], 2)
								);
							}),
							(i.add = function(t, e, n) {
								return (
									(t[0] = e[0] + n[0]),
									(t[1] = e[1] + n[1]),
									(t[2] = e[2] + n[2]),
									(t[3] = e[3] + n[3]),
									(t[4] = e[4] + n[4]),
									(t[5] = e[5] + n[5]),
									(t[6] = e[6] + n[6]),
									(t[7] = e[7] + n[7]),
									(t[8] = e[8] + n[8]),
									t
								);
							}),
							(i.subtract = function(t, e, n) {
								return (
									(t[0] = e[0] - n[0]),
									(t[1] = e[1] - n[1]),
									(t[2] = e[2] - n[2]),
									(t[3] = e[3] - n[3]),
									(t[4] = e[4] - n[4]),
									(t[5] = e[5] - n[5]),
									(t[6] = e[6] - n[6]),
									(t[7] = e[7] - n[7]),
									(t[8] = e[8] - n[8]),
									t
								);
							}),
							(i.sub = i.subtract),
							(i.multiplyScalar = function(t, e, n) {
								return (
									(t[0] = e[0] * n),
									(t[1] = e[1] * n),
									(t[2] = e[2] * n),
									(t[3] = e[3] * n),
									(t[4] = e[4] * n),
									(t[5] = e[5] * n),
									(t[6] = e[6] * n),
									(t[7] = e[7] * n),
									(t[8] = e[8] * n),
									t
								);
							}),
							(i.multiplyScalarAndAdd = function(t, e, n, r) {
								return (
									(t[0] = e[0] + n[0] * r),
									(t[1] = e[1] + n[1] * r),
									(t[2] = e[2] + n[2] * r),
									(t[3] = e[3] + n[3] * r),
									(t[4] = e[4] + n[4] * r),
									(t[5] = e[5] + n[5] * r),
									(t[6] = e[6] + n[6] * r),
									(t[7] = e[7] + n[7] * r),
									(t[8] = e[8] + n[8] * r),
									t
								);
							}),
							(i.exactEquals = function(t, e) {
								return (
									t[0] === e[0] &&
									t[1] === e[1] &&
									t[2] === e[2] &&
									t[3] === e[3] &&
									t[4] === e[4] &&
									t[5] === e[5] &&
									t[6] === e[6] &&
									t[7] === e[7] &&
									t[8] === e[8]
								);
							}),
							(i.equals = function(t, e) {
								var n = t[0],
									i = t[1],
									o = t[2],
									a = t[3],
									s = t[4],
									u = t[5],
									c = t[6],
									l = t[7],
									f = t[8],
									h = e[0],
									p = e[1],
									d = e[2],
									g = e[3],
									y = e[4],
									v = e[5],
									m = t[6],
									x = e[7],
									b = e[8];
								return !(
									Math.abs(n - h) > r.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) ||
									Math.abs(i - p) > r.EPSILON * Math.max(1, Math.abs(i), Math.abs(p)) ||
									Math.abs(o - d) > r.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) ||
									Math.abs(a - g) > r.EPSILON * Math.max(1, Math.abs(a), Math.abs(g)) ||
									Math.abs(s - y) > r.EPSILON * Math.max(1, Math.abs(s), Math.abs(y)) ||
									Math.abs(u - v) > r.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) ||
									Math.abs(c - m) > r.EPSILON * Math.max(1, Math.abs(c), Math.abs(m)) ||
									Math.abs(l - x) > r.EPSILON * Math.max(1, Math.abs(l), Math.abs(x)) ||
									Math.abs(f - b) > r.EPSILON * Math.max(1, Math.abs(f), Math.abs(b))
								);
							}),
							(t.exports = i);
					},
					function(t, e, n) {
						var r = n(45),
							i = {};
						(i.create = function() {
							var t = new r.ARRAY_TYPE(3);
							return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
						}),
							(i.clone = function(t) {
								var e = new r.ARRAY_TYPE(3);
								return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
							}),
							(i.fromValues = function(t, e, n) {
								var i = new r.ARRAY_TYPE(3);
								return (i[0] = t), (i[1] = e), (i[2] = n), i;
							}),
							(i.copy = function(t, e) {
								return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
							}),
							(i.set = function(t, e, n, r) {
								return (t[0] = e), (t[1] = n), (t[2] = r), t;
							}),
							(i.add = function(t, e, n) {
								return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), (t[2] = e[2] + n[2]), t;
							}),
							(i.subtract = function(t, e, n) {
								return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), (t[2] = e[2] - n[2]), t;
							}),
							(i.sub = i.subtract),
							(i.multiply = function(t, e, n) {
								return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), (t[2] = e[2] * n[2]), t;
							}),
							(i.mul = i.multiply),
							(i.divide = function(t, e, n) {
								return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), (t[2] = e[2] / n[2]), t;
							}),
							(i.div = i.divide),
							(i.ceil = function(t, e) {
								return (
									(t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), (t[2] = Math.ceil(e[2])), t
								);
							}),
							(i.floor = function(t, e) {
								return (
									(t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), (t[2] = Math.floor(e[2])), t
								);
							}),
							(i.min = function(t, e, n) {
								return (
									(t[0] = Math.min(e[0], n[0])),
									(t[1] = Math.min(e[1], n[1])),
									(t[2] = Math.min(e[2], n[2])),
									t
								);
							}),
							(i.max = function(t, e, n) {
								return (
									(t[0] = Math.max(e[0], n[0])),
									(t[1] = Math.max(e[1], n[1])),
									(t[2] = Math.max(e[2], n[2])),
									t
								);
							}),
							(i.round = function(t, e) {
								return (
									(t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), (t[2] = Math.round(e[2])), t
								);
							}),
							(i.scale = function(t, e, n) {
								return (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t;
							}),
							(i.scaleAndAdd = function(t, e, n, r) {
								return (
									(t[0] = e[0] + n[0] * r), (t[1] = e[1] + n[1] * r), (t[2] = e[2] + n[2] * r), t
								);
							}),
							(i.distance = function(t, e) {
								var n = e[0] - t[0],
									r = e[1] - t[1],
									i = e[2] - t[2];
								return Math.sqrt(n * n + r * r + i * i);
							}),
							(i.dist = i.distance),
							(i.squaredDistance = function(t, e) {
								var n = e[0] - t[0],
									r = e[1] - t[1],
									i = e[2] - t[2];
								return n * n + r * r + i * i;
							}),
							(i.sqrDist = i.squaredDistance),
							(i.length = function(t) {
								var e = t[0],
									n = t[1],
									r = t[2];
								return Math.sqrt(e * e + n * n + r * r);
							}),
							(i.len = i.length),
							(i.squaredLength = function(t) {
								var e = t[0],
									n = t[1],
									r = t[2];
								return e * e + n * n + r * r;
							}),
							(i.sqrLen = i.squaredLength),
							(i.negate = function(t, e) {
								return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
							}),
							(i.inverse = function(t, e) {
								return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
							}),
							(i.normalize = function(t, e) {
								var n = e[0],
									r = e[1],
									i = e[2],
									o = n * n + r * r + i * i;
								return (
									o > 0 &&
										((o = 1 / Math.sqrt(o)),
										(t[0] = e[0] * o),
										(t[1] = e[1] * o),
										(t[2] = e[2] * o)),
									t
								);
							}),
							(i.dot = function(t, e) {
								return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
							}),
							(i.cross = function(t, e, n) {
								var r = e[0],
									i = e[1],
									o = e[2],
									a = n[0],
									s = n[1],
									u = n[2];
								return (t[0] = i * u - o * s), (t[1] = o * a - r * u), (t[2] = r * s - i * a), t;
							}),
							(i.lerp = function(t, e, n, r) {
								var i = e[0],
									o = e[1],
									a = e[2];
								return (
									(t[0] = i + r * (n[0] - i)),
									(t[1] = o + r * (n[1] - o)),
									(t[2] = a + r * (n[2] - a)),
									t
								);
							}),
							(i.hermite = function(t, e, n, r, i, o) {
								var a = o * o,
									s = a * (2 * o - 3) + 1,
									u = a * (o - 2) + o,
									c = a * (o - 1),
									l = a * (3 - 2 * o);
								return (
									(t[0] = e[0] * s + n[0] * u + r[0] * c + i[0] * l),
									(t[1] = e[1] * s + n[1] * u + r[1] * c + i[1] * l),
									(t[2] = e[2] * s + n[2] * u + r[2] * c + i[2] * l),
									t
								);
							}),
							(i.bezier = function(t, e, n, r, i, o) {
								var a = 1 - o,
									s = a * a,
									u = o * o,
									c = s * a,
									l = 3 * o * s,
									f = 3 * u * a,
									h = u * o;
								return (
									(t[0] = e[0] * c + n[0] * l + r[0] * f + i[0] * h),
									(t[1] = e[1] * c + n[1] * l + r[1] * f + i[1] * h),
									(t[2] = e[2] * c + n[2] * l + r[2] * f + i[2] * h),
									t
								);
							}),
							(i.random = function(t, e) {
								e = e || 1;
								var n = 2 * r.RANDOM() * Math.PI,
									i = 2 * r.RANDOM() - 1,
									o = Math.sqrt(1 - i * i) * e;
								return (t[0] = Math.cos(n) * o), (t[1] = Math.sin(n) * o), (t[2] = i * e), t;
							}),
							(i.transformMat4 = function(t, e, n) {
								var r = e[0],
									i = e[1],
									o = e[2],
									a = n[3] * r + n[7] * i + n[11] * o + n[15];
								return (
									(a = a || 1),
									(t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a),
									(t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a),
									(t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a),
									t
								);
							}),
							(i.transformMat3 = function(t, e, n) {
								var r = e[0],
									i = e[1],
									o = e[2];
								return (
									(t[0] = r * n[0] + i * n[3] + o * n[6]),
									(t[1] = r * n[1] + i * n[4] + o * n[7]),
									(t[2] = r * n[2] + i * n[5] + o * n[8]),
									t
								);
							}),
							(i.transformQuat = function(t, e, n) {
								var r = e[0],
									i = e[1],
									o = e[2],
									a = n[0],
									s = n[1],
									u = n[2],
									c = n[3],
									l = c * r + s * o - u * i,
									f = c * i + u * r - a * o,
									h = c * o + a * i - s * r,
									p = -a * r - s * i - u * o;
								return (
									(t[0] = l * c + p * -a + f * -u - h * -s),
									(t[1] = f * c + p * -s + h * -a - l * -u),
									(t[2] = h * c + p * -u + l * -s - f * -a),
									t
								);
							}),
							(i.rotateX = function(t, e, n, r) {
								var i = [],
									o = [];
								return (
									(i[0] = e[0] - n[0]),
									(i[1] = e[1] - n[1]),
									(i[2] = e[2] - n[2]),
									(o[0] = i[0]),
									(o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r)),
									(o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r)),
									(t[0] = o[0] + n[0]),
									(t[1] = o[1] + n[1]),
									(t[2] = o[2] + n[2]),
									t
								);
							}),
							(i.rotateY = function(t, e, n, r) {
								var i = [],
									o = [];
								return (
									(i[0] = e[0] - n[0]),
									(i[1] = e[1] - n[1]),
									(i[2] = e[2] - n[2]),
									(o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r)),
									(o[1] = i[1]),
									(o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r)),
									(t[0] = o[0] + n[0]),
									(t[1] = o[1] + n[1]),
									(t[2] = o[2] + n[2]),
									t
								);
							}),
							(i.rotateZ = function(t, e, n, r) {
								var i = [],
									o = [];
								return (
									(i[0] = e[0] - n[0]),
									(i[1] = e[1] - n[1]),
									(i[2] = e[2] - n[2]),
									(o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r)),
									(o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r)),
									(o[2] = i[2]),
									(t[0] = o[0] + n[0]),
									(t[1] = o[1] + n[1]),
									(t[2] = o[2] + n[2]),
									t
								);
							}),
							(i.forEach = (function() {
								var t = i.create();
								return function(e, n, r, i, o, a) {
									var s, u;
									for (
										n || (n = 3),
											r || (r = 0),
											u = i ? Math.min(i * n + r, e.length) : e.length,
											s = r;
										u > s;
										s += n
									)
										(t[0] = e[s]),
											(t[1] = e[s + 1]),
											(t[2] = e[s + 2]),
											o(t, t, a),
											(e[s] = t[0]),
											(e[s + 1] = t[1]),
											(e[s + 2] = t[2]);
									return e;
								};
							})()),
							(i.angle = function(t, e) {
								var n = i.fromValues(t[0], t[1], t[2]),
									r = i.fromValues(e[0], e[1], e[2]);
								i.normalize(n, n), i.normalize(r, r);
								var o = i.dot(n, r);
								return o > 1 ? 0 : Math.acos(o);
							}),
							(i.str = function(t) {
								return 'vec3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')';
							}),
							(i.exactEquals = function(t, e) {
								return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
							}),
							(i.equals = function(t, e) {
								var n = t[0],
									i = t[1],
									o = t[2],
									a = e[0],
									s = e[1],
									u = e[2];
								return (
									Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) &&
									Math.abs(i - s) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) &&
									Math.abs(o - u) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(u))
								);
							}),
							(t.exports = i);
					},
					function(t, e, n) {
						var r = n(45),
							i = {};
						(i.create = function() {
							var t = new r.ARRAY_TYPE(2);
							return (t[0] = 0), (t[1] = 0), t;
						}),
							(i.clone = function(t) {
								var e = new r.ARRAY_TYPE(2);
								return (e[0] = t[0]), (e[1] = t[1]), e;
							}),
							(i.fromValues = function(t, e) {
								var n = new r.ARRAY_TYPE(2);
								return (n[0] = t), (n[1] = e), n;
							}),
							(i.copy = function(t, e) {
								return (t[0] = e[0]), (t[1] = e[1]), t;
							}),
							(i.set = function(t, e, n) {
								return (t[0] = e), (t[1] = n), t;
							}),
							(i.add = function(t, e, n) {
								return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
							}),
							(i.subtract = function(t, e, n) {
								return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
							}),
							(i.sub = i.subtract),
							(i.multiply = function(t, e, n) {
								return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
							}),
							(i.mul = i.multiply),
							(i.divide = function(t, e, n) {
								return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
							}),
							(i.div = i.divide),
							(i.ceil = function(t, e) {
								return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), t;
							}),
							(i.floor = function(t, e) {
								return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), t;
							}),
							(i.min = function(t, e, n) {
								return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t;
							}),
							(i.max = function(t, e, n) {
								return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t;
							}),
							(i.round = function(t, e) {
								return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), t;
							}),
							(i.scale = function(t, e, n) {
								return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
							}),
							(i.scaleAndAdd = function(t, e, n, r) {
								return (t[0] = e[0] + n[0] * r), (t[1] = e[1] + n[1] * r), t;
							}),
							(i.distance = function(t, e) {
								var n = e[0] - t[0],
									r = e[1] - t[1];
								return Math.sqrt(n * n + r * r);
							}),
							(i.dist = i.distance),
							(i.squaredDistance = function(t, e) {
								var n = e[0] - t[0],
									r = e[1] - t[1];
								return n * n + r * r;
							}),
							(i.sqrDist = i.squaredDistance),
							(i.length = function(t) {
								var e = t[0],
									n = t[1];
								return Math.sqrt(e * e + n * n);
							}),
							(i.len = i.length),
							(i.squaredLength = function(t) {
								var e = t[0],
									n = t[1];
								return e * e + n * n;
							}),
							(i.sqrLen = i.squaredLength),
							(i.negate = function(t, e) {
								return (t[0] = -e[0]), (t[1] = -e[1]), t;
							}),
							(i.inverse = function(t, e) {
								return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t;
							}),
							(i.normalize = function(t, e) {
								var n = e[0],
									r = e[1],
									i = n * n + r * r;
								return i > 0 && ((i = 1 / Math.sqrt(i)), (t[0] = e[0] * i), (t[1] = e[1] * i)), t;
							}),
							(i.dot = function(t, e) {
								return t[0] * e[0] + t[1] * e[1];
							}),
							(i.cross = function(t, e, n) {
								var r = e[0] * n[1] - e[1] * n[0];
								return (t[0] = t[1] = 0), (t[2] = r), t;
							}),
							(i.lerp = function(t, e, n, r) {
								var i = e[0],
									o = e[1];
								return (t[0] = i + r * (n[0] - i)), (t[1] = o + r * (n[1] - o)), t;
							}),
							(i.random = function(t, e) {
								e = e || 1;
								var n = 2 * r.RANDOM() * Math.PI;
								return (t[0] = Math.cos(n) * e), (t[1] = Math.sin(n) * e), t;
							}),
							(i.transformMat2 = function(t, e, n) {
								var r = e[0],
									i = e[1];
								return (t[0] = n[0] * r + n[2] * i), (t[1] = n[1] * r + n[3] * i), t;
							}),
							(i.transformMat2d = function(t, e, n) {
								var r = e[0],
									i = e[1];
								return (t[0] = n[0] * r + n[2] * i + n[4]), (t[1] = n[1] * r + n[3] * i + n[5]), t;
							}),
							(i.transformMat3 = function(t, e, n) {
								var r = e[0],
									i = e[1];
								return (t[0] = n[0] * r + n[3] * i + n[6]), (t[1] = n[1] * r + n[4] * i + n[7]), t;
							}),
							(i.transformMat4 = function(t, e, n) {
								var r = e[0],
									i = e[1];
								return (
									(t[0] = n[0] * r + n[4] * i + n[12]), (t[1] = n[1] * r + n[5] * i + n[13]), t
								);
							}),
							(i.forEach = (function() {
								var t = i.create();
								return function(e, n, r, i, o, a) {
									var s, u;
									for (
										n || (n = 2),
											r || (r = 0),
											u = i ? Math.min(i * n + r, e.length) : e.length,
											s = r;
										u > s;
										s += n
									)
										(t[0] = e[s]), (t[1] = e[s + 1]), o(t, t, a), (e[s] = t[0]), (e[s + 1] = t[1]);
									return e;
								};
							})()),
							(i.str = function(t) {
								return 'vec2(' + t[0] + ', ' + t[1] + ')';
							}),
							(i.exactEquals = function(t, e) {
								return t[0] === e[0] && t[1] === e[1];
							}),
							(i.equals = function(t, e) {
								var n = t[0],
									i = t[1],
									o = e[0],
									a = e[1];
								return (
									Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) &&
									Math.abs(i - a) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(a))
								);
							}),
							(t.exports = i);
					},
					function(t, e, n) {
						var r = n(3),
							i = n(46),
							o = n(0),
							a = n(235),
							s = n(246),
							u = n(249),
							c = u.interpolate,
							l = u.interpolateArray,
							f = { delay: 'delay' };
						t.exports = {
							stopAnimate: function() {
								var t = this,
									e = t.get('canvas');
								if (!t.get('destroyed') && t.get('animating')) {
									var n = t.attr('clip');
									n && n.get('animating') && n.stopAnimate();
									var r = t.get('animateTimer');
									r && (r.stop(), t.setSilent('animateTimer', null));
									var i = t.get('animateCfg');
									i &&
										(t.attr(i.toAttrs),
										i.toM && t.setMatrix(i.toM),
										i.callback && i.callback(),
										t.setSilent('animateCfg', null)),
										t.setSilent('animating', !1),
										e.draw();
								}
							},
							animate: function(t, e, n, u) {
								function h(t) {
									var r = (t % e) / e;
									(r = a[n](r)), d(r);
								}
								function p(t) {
									var r = t / e;
									1 > r
										? ((r = a[n](r)), d(r))
										: (d(1),
										  u && u(),
										  y.setSilent('animating', !1),
										  y.setSilent('animateCfg', null),
										  y.setSilent('animateTimer', null),
										  M.stop());
								}
								function d(t) {
									var e = {};
									if (!y.get('destroyed')) {
										var n = void 0;
										for (var r in x)
											if (!o.isEqual(_[r], x[r]))
												if ('path' === r) {
													var a = i.parsePathString(x[r]),
														s = i.parsePathString(_[r]);
													e[r] = [];
													for (var u = 0; a.length > u; u++) {
														for (var f = a[u], h = s[u], p = [], d = 0; f.length > d; d++)
															o.isNumber(f[d]) && h
																? ((n = c(h[d], f[d])), p.push(n(t)))
																: p.push(f[d]);
														e[r].push(p);
													}
												} else (n = c(_[r], x[r])), (e[r] = n(t));
										if (b) {
											var g = l(w, b),
												m = g(t);
											y.setMatrix(m);
										}
										y.attr(e), v.draw();
									}
								}
								var g = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
									y = this,
									v = y.get('canvas'),
									m = (function(t) {
										var e = { M: null, attrs: {} };
										for (var n in t)
											'transform' === n
												? (e.M = r.transform(y.getMatrix(), t[n]))
												: 'matrix' === n
													? (e.M = t[n])
													: f[n] || (e.attrs[n] = t[n]);
										return e;
									})(t),
									x = m.attrs,
									b = m.M,
									_ = (function(t) {
										var e = {};
										for (var n in t) e[n] = y.attr(n);
										return e;
									})(x),
									w = o.clone(y.getMatrix()),
									S = t.repeat,
									M = y.get('animateTimer');
								M && M.stop(),
									o.isNumber(u) && ((g = u), (u = null)),
									o.isFunction(n) ? ((u = n), (n = 'easeLinear')) : (n = n || 'easeLinear'),
									y.setSilent('animating', !0),
									y.setSilent('animateCfg', { toAttrs: x, toM: b, callback: u }),
									(M = s.timer(function(t) {
										S ? h(t) : p(t);
									}, g)),
									y.setSilent('animateTimer', M);
							},
						};
					},
					function(t, e, n) {
						'use strict';
						Object.defineProperty(e, '__esModule', { value: !0 });
						var r = n(236);
						n.d(e, 'easeLinear', function() {
							return r.a;
						});
						var i = n(237);
						n.d(e, 'easeQuad', function() {
							return i.b;
						}),
							n.d(e, 'easeQuadIn', function() {
								return i.a;
							}),
							n.d(e, 'easeQuadOut', function() {
								return i.c;
							}),
							n.d(e, 'easeQuadInOut', function() {
								return i.b;
							});
						var o = n(238);
						n.d(e, 'easeCubic', function() {
							return o.b;
						}),
							n.d(e, 'easeCubicIn', function() {
								return o.a;
							}),
							n.d(e, 'easeCubicOut', function() {
								return o.c;
							}),
							n.d(e, 'easeCubicInOut', function() {
								return o.b;
							});
						var a = n(239);
						n.d(e, 'easePoly', function() {
							return a.b;
						}),
							n.d(e, 'easePolyIn', function() {
								return a.a;
							}),
							n.d(e, 'easePolyOut', function() {
								return a.c;
							}),
							n.d(e, 'easePolyInOut', function() {
								return a.b;
							});
						var s = n(240);
						n.d(e, 'easeSin', function() {
							return s.b;
						}),
							n.d(e, 'easeSinIn', function() {
								return s.a;
							}),
							n.d(e, 'easeSinOut', function() {
								return s.c;
							}),
							n.d(e, 'easeSinInOut', function() {
								return s.b;
							});
						var u = n(241);
						n.d(e, 'easeExp', function() {
							return u.b;
						}),
							n.d(e, 'easeExpIn', function() {
								return u.a;
							}),
							n.d(e, 'easeExpOut', function() {
								return u.c;
							}),
							n.d(e, 'easeExpInOut', function() {
								return u.b;
							});
						var c = n(242);
						n.d(e, 'easeCircle', function() {
							return c.b;
						}),
							n.d(e, 'easeCircleIn', function() {
								return c.a;
							}),
							n.d(e, 'easeCircleOut', function() {
								return c.c;
							}),
							n.d(e, 'easeCircleInOut', function() {
								return c.b;
							});
						var l = n(243);
						n.d(e, 'easeBounce', function() {
							return l.c;
						}),
							n.d(e, 'easeBounceIn', function() {
								return l.a;
							}),
							n.d(e, 'easeBounceOut', function() {
								return l.c;
							}),
							n.d(e, 'easeBounceInOut', function() {
								return l.b;
							});
						var f = n(244);
						n.d(e, 'easeBack', function() {
							return f.b;
						}),
							n.d(e, 'easeBackIn', function() {
								return f.a;
							}),
							n.d(e, 'easeBackOut', function() {
								return f.c;
							}),
							n.d(e, 'easeBackInOut', function() {
								return f.b;
							});
						var h = n(245);
						n.d(e, 'easeElastic', function() {
							return h.c;
						}),
							n.d(e, 'easeElasticIn', function() {
								return h.a;
							}),
							n.d(e, 'easeElasticOut', function() {
								return h.c;
							}),
							n.d(e, 'easeElasticInOut', function() {
								return h.b;
							});
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return +t;
						}
						e.a = r;
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return t * t;
						}
						function i(t) {
							return t * (2 - t);
						}
						function o(t) {
							return ((t *= 2) > 1 ? --t * (2 - t) + 1 : t * t) / 2;
						}
						(e.a = r), (e.c = i), (e.b = o);
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return t * t * t;
						}
						function i(t) {
							return --t * t * t + 1;
						}
						function o(t) {
							return ((t *= 2) > 1 ? (t -= 2) * t * t + 2 : t * t * t) / 2;
						}
						(e.a = r), (e.c = i), (e.b = o);
					},
					function(t, e, n) {
						'use strict';
						n.d(e, 'a', function() {
							return r;
						}),
							n.d(e, 'c', function() {
								return i;
							}),
							n.d(e, 'b', function() {
								return o;
							});
						var r = (function t(e) {
								function n(t) {
									return Math.pow(t, e);
								}
								return (e = +e), (n.exponent = t), n;
							})(3),
							i = (function t(e) {
								function n(t) {
									return 1 - Math.pow(1 - t, e);
								}
								return (e = +e), (n.exponent = t), n;
							})(3),
							o = (function t(e) {
								function n(t) {
									return ((t *= 2) > 1 ? 2 - Math.pow(2 - t, e) : Math.pow(t, e)) / 2;
								}
								return (e = +e), (n.exponent = t), n;
							})(3);
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return 1 - Math.cos(t * s);
						}
						function i(t) {
							return Math.sin(t * s);
						}
						function o(t) {
							return (1 - Math.cos(a * t)) / 2;
						}
						(e.a = r), (e.c = i), (e.b = o);
						var a = Math.PI,
							s = a / 2;
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return Math.pow(2, 10 * t - 10);
						}
						function i(t) {
							return 1 - Math.pow(2, -10 * t);
						}
						function o(t) {
							return ((t *= 2) > 1 ? 2 - Math.pow(2, 10 - 10 * t) : Math.pow(2, 10 * t - 10)) / 2;
						}
						(e.a = r), (e.c = i), (e.b = o);
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return 1 - Math.sqrt(1 - t * t);
						}
						function i(t) {
							return Math.sqrt(1 - --t * t);
						}
						function o(t) {
							return (
								((t *= 2) > 1 ? Math.sqrt(1 - (t -= 2) * t) + 1 : 1 - Math.sqrt(1 - t * t)) / 2
							);
						}
						(e.a = r), (e.c = i), (e.b = o);
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return 1 - i(1 - t);
						}
						function i(t) {
							return (t = +t) < a
								? g * t * t
								: u > t
									? g * (t -= s) * t + c
									: f > t
										? g * (t -= l) * t + h
										: g * (t -= p) * t + d;
						}
						function o(t) {
							return ((t *= 2) > 1 ? i(t - 1) + 1 : 1 - i(1 - t)) / 2;
						}
						(e.a = r), (e.c = i), (e.b = o);
						var a = 4 / 11,
							s = 6 / 11,
							u = 8 / 11,
							c = 0.75,
							l = 9 / 11,
							f = 10 / 11,
							h = 0.9375,
							p = 21 / 22,
							d = 63 / 64,
							g = 1 / a / a;
					},
					function(t, e, n) {
						'use strict';
						n.d(e, 'a', function() {
							return r;
						}),
							n.d(e, 'c', function() {
								return i;
							}),
							n.d(e, 'b', function() {
								return o;
							});
						var r = (function t(e) {
								function n(t) {
									return t * t * ((e + 1) * t - e);
								}
								return (e = +e), (n.overshoot = t), n;
							})(1.70158),
							i = (function t(e) {
								function n(t) {
									return --t * t * ((e + 1) * t + e) + 1;
								}
								return (e = +e), (n.overshoot = t), n;
							})(1.70158),
							o = (function t(e) {
								function n(t) {
									return (
										(1 > (t *= 2)
											? t * t * ((e + 1) * t - e)
											: (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
									);
								}
								return (e = +e), (n.overshoot = t), n;
							})(1.70158);
					},
					function(t, e, n) {
						'use strict';
						n.d(e, 'a', function() {
							return i;
						}),
							n.d(e, 'c', function() {
								return o;
							}),
							n.d(e, 'b', function() {
								return a;
							});
						var r = 2 * Math.PI,
							i = (function t(e, n) {
								function i(t) {
									return e * Math.pow(2, 10 * --t) * Math.sin((o - t) / n);
								}
								var o = Math.asin(1 / (e = Math.max(1, e))) * (n /= r);
								return (
									(i.amplitude = function(e) {
										return t(e, n * r);
									}),
									(i.period = function(n) {
										return t(e, n);
									}),
									i
								);
							})(1, 0.3),
							o = (function t(e, n) {
								function i(t) {
									return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + o) / n);
								}
								var o = Math.asin(1 / (e = Math.max(1, e))) * (n /= r);
								return (
									(i.amplitude = function(e) {
										return t(e, n * r);
									}),
									(i.period = function(n) {
										return t(e, n);
									}),
									i
								);
							})(1, 0.3),
							a = (function t(e, n) {
								function i(t) {
									return (
										(0 > (t = 2 * t - 1)
											? e * Math.pow(2, 10 * t) * Math.sin((o - t) / n)
											: 2 - e * Math.pow(2, -10 * t) * Math.sin((o + t) / n)) / 2
									);
								}
								var o = Math.asin(1 / (e = Math.max(1, e))) * (n /= r);
								return (
									(i.amplitude = function(e) {
										return t(e, n * r);
									}),
									(i.period = function(n) {
										return t(e, n);
									}),
									i
								);
							})(1, 0.3);
					},
					function(t, e, n) {
						'use strict';
						Object.defineProperty(e, '__esModule', { value: !0 });
						var r = n(47);
						n.d(e, 'now', function() {
							return r.b;
						}),
							n.d(e, 'timer', function() {
								return r.c;
							}),
							n.d(e, 'timerFlush', function() {
								return r.d;
							});
						var i = n(247);
						n.d(e, 'timeout', function() {
							return i.a;
						});
						var o = n(248);
						n.d(e, 'interval', function() {
							return o.a;
						});
					},
					function(t, e, n) {
						'use strict';
						var r = n(47);
						e.a = function(t, e, n) {
							var i = new r.a();
							return (
								(e = null == e ? 0 : +e),
								i.restart(
									function(n) {
										i.stop(), t(n + e);
									},
									e,
									n
								),
								i
							);
						};
					},
					function(t, e, n) {
						'use strict';
						var r = n(47);
						e.a = function(t, e, n) {
							var i = new r.a(),
								o = e;
							return null == e
								? (i.restart(t, e, n), i)
								: ((e = +e),
								  (n = null == n ? Object(r.b)() : +n),
								  i.restart(
										function r(a) {
											(a += o), i.restart(r, (o += e), n), t(a);
										},
										e,
										n
								  ),
								  i);
						};
					},
					function(t, e, n) {
						'use strict';
						Object.defineProperty(e, '__esModule', { value: !0 });
						var r = n(48);
						n.d(e, 'interpolate', function() {
							return r.a;
						});
						var i = n(96);
						n.d(e, 'interpolateArray', function() {
							return i.a;
						});
						var o = n(51);
						n.d(e, 'interpolateBasis', function() {
							return o.b;
						});
						var a = n(94);
						n.d(e, 'interpolateBasisClosed', function() {
							return a.a;
						});
						var s = n(97);
						n.d(e, 'interpolateDate', function() {
							return s.a;
						});
						var u = n(31);
						n.d(e, 'interpolateNumber', function() {
							return u.a;
						});
						var c = n(98);
						n.d(e, 'interpolateObject', function() {
							return c.a;
						});
						var l = n(252);
						n.d(e, 'interpolateRound', function() {
							return l.a;
						});
						var f = n(99);
						n.d(e, 'interpolateString', function() {
							return f.a;
						});
						var h = n(253);
						n.d(e, 'interpolateTransformCss', function() {
							return h.a;
						}),
							n.d(e, 'interpolateTransformSvg', function() {
								return h.b;
							});
						var p = n(256);
						n.d(e, 'interpolateZoom', function() {
							return p.a;
						});
						var d = n(93);
						n.d(e, 'interpolateRgb', function() {
							return d.a;
						}),
							n.d(e, 'interpolateRgbBasis', function() {
								return d.b;
							}),
							n.d(e, 'interpolateRgbBasisClosed', function() {
								return d.c;
							});
						var g = n(257);
						n.d(e, 'interpolateHsl', function() {
							return g.a;
						}),
							n.d(e, 'interpolateHslLong', function() {
								return g.b;
							});
						var y = n(258);
						n.d(e, 'interpolateLab', function() {
							return y.a;
						});
						var v = n(259);
						n.d(e, 'interpolateHcl', function() {
							return v.a;
						}),
							n.d(e, 'interpolateHclLong', function() {
								return v.b;
							});
						var m = n(260);
						n.d(e, 'interpolateCubehelix', function() {
							return m.b;
						}),
							n.d(e, 'interpolateCubehelixLong', function() {
								return m.a;
							});
						var x = n(261);
						n.d(e, 'quantize', function() {
							return x.a;
						});
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							if (t instanceof o) return new o(t.l, t.a, t.b, t.opacity);
							if (t instanceof h) {
								if (isNaN(t.h)) return new o(t.l, 0, 0, t.opacity);
								var e = t.h * g.a;
								return new o(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
							}
							t instanceof d.b || (t = Object(d.h)(t));
							var n,
								r,
								i = c(t.r),
								s = c(t.g),
								u = c(t.b),
								l = a((0.2225045 * i + 0.7168786 * s + 0.0606169 * u) / v);
							return (
								i === s && s === u
									? (n = r = l)
									: ((n = a((0.4360747 * i + 0.3850649 * s + 0.1430804 * u) / y)),
									  (r = a((0.0139322 * i + 0.0971045 * s + 0.7141733 * u) / m))),
								new o(116 * l - 16, 500 * (n - l), 200 * (l - r), t.opacity)
							);
						}
						function i(t, e, n, i) {
							return 1 === arguments.length ? r(t) : new o(t, e, n, null == i ? 1 : i);
						}
						function o(t, e, n, r) {
							(this.l = +t), (this.a = +e), (this.b = +n), (this.opacity = +r);
						}
						function a(t) {
							return t > w ? Math.pow(t, 1 / 3) : t / _ + x;
						}
						function s(t) {
							return t > b ? t * t * t : _ * (t - x);
						}
						function u(t) {
							return 255 * (t > 0.0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055 : 12.92 * t);
						}
						function c(t) {
							return (t /= 255) > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
						}
						function l(t) {
							if (t instanceof h) return new h(t.h, t.c, t.l, t.opacity);
							if ((t instanceof o || (t = r(t)), 0 === t.a && 0 === t.b))
								return new h(NaN, 0, t.l, t.opacity);
							var e = Math.atan2(t.b, t.a) * g.b;
							return new h(0 > e ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
						}
						function f(t, e, n, r) {
							return 1 === arguments.length ? l(t) : new h(t, e, n, null == r ? 1 : r);
						}
						function h(t, e, n, r) {
							(this.h = +t), (this.c = +e), (this.l = +n), (this.opacity = +r);
						}
						(e.a = i), (e.b = f);
						var p = n(50),
							d = n(49),
							g = n(92),
							y = 0.96422,
							v = 1,
							m = 0.82521,
							x = 4 / 29,
							b = 6 / 29,
							_ = 3 * b * b,
							w = b * b * b;
						Object(p.a)(
							o,
							i,
							Object(p.b)(d.a, {
								brighter: function(t) {
									return new o(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
								},
								darker: function(t) {
									return new o(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
								},
								rgb: function() {
									var t = (this.l + 16) / 116,
										e = isNaN(this.a) ? t : t + this.a / 500,
										n = isNaN(this.b) ? t : t - this.b / 200;
									return (
										(e = y * s(e)),
										(t = v * s(t)),
										(n = m * s(n)),
										new d.b(
											u(3.1338561 * e - 1.6168667 * t - 0.4906146 * n),
											u(-0.9787684 * e + 1.9161415 * t + 0.033454 * n),
											u(0.0719453 * e - 0.2289914 * t + 1.4052427 * n),
											this.opacity
										)
									);
								},
							})
						),
							Object(p.a)(
								h,
								f,
								Object(p.b)(d.a, {
									brighter: function(t) {
										return new h(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
									},
									darker: function(t) {
										return new h(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
									},
									rgb: function() {
										return r(this).rgb();
									},
								})
							);
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							if (t instanceof o) return new o(t.h, t.s, t.l, t.opacity);
							t instanceof s.b || (t = Object(s.h)(t));
							var e = t.r / 255,
								n = t.g / 255,
								r = t.b / 255,
								i = (y * r + d * e - g * n) / (y + d - g),
								a = r - i,
								c = (p * (n - i) - f * a) / h,
								l = Math.sqrt(c * c + a * a) / (p * i * (1 - i)),
								v = l ? Math.atan2(c, a) * u.b - 120 : NaN;
							return new o(0 > v ? v + 360 : v, l, i, t.opacity);
						}
						function i(t, e, n, i) {
							return 1 === arguments.length ? r(t) : new o(t, e, n, null == i ? 1 : i);
						}
						function o(t, e, n, r) {
							(this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
						}
						e.a = i;
						var a = n(50),
							s = n(49),
							u = n(92),
							c = -0.14861,
							l = 1.78277,
							f = -0.29227,
							h = -0.90649,
							p = 1.97294,
							d = p * h,
							g = p * l,
							y = l * f - h * c;
						Object(a.a)(
							o,
							i,
							Object(a.b)(s.a, {
								brighter: function(t) {
									return (
										(t = null == t ? s.c : Math.pow(s.c, t)),
										new o(this.h, this.s, this.l * t, this.opacity)
									);
								},
								darker: function(t) {
									return (
										(t = null == t ? s.d : Math.pow(s.d, t)),
										new o(this.h, this.s, this.l * t, this.opacity)
									);
								},
								rgb: function() {
									var t = isNaN(this.h) ? 0 : (this.h + 120) * u.a,
										e = +this.l,
										n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
										r = Math.cos(t),
										i = Math.sin(t);
									return new s.b(
										255 * (e + n * (c * r + l * i)),
										255 * (e + n * (f * r + h * i)),
										255 * (e + n * (p * r)),
										this.opacity
									);
								},
							})
						);
					},
					function(t, e, n) {
						'use strict';
						e.a = function(t, e) {
							return (
								(t = +t),
								(e -= t),
								function(n) {
									return Math.round(t + e * n);
								}
							);
						};
					},
					function(t, e, n) {
						'use strict';
						function r(t, e, n, r) {
							function o(t) {
								return t.length ? t.pop() + ' ' : '';
							}
							function a(t, r, o, a, s, u) {
								if (t !== o || r !== a) {
									var c = s.push('translate(', null, e, null, n);
									u.push({ i: c - 4, x: Object(i.a)(t, o) }, { i: c - 2, x: Object(i.a)(r, a) });
								} else (o || a) && s.push('translate(' + o + e + a + n);
							}
							function s(t, e, n, a) {
								t !== e
									? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
									  a.push({ i: n.push(o(n) + 'rotate(', null, r) - 2, x: Object(i.a)(t, e) }))
									: e && n.push(o(n) + 'rotate(' + e + r);
							}
							function u(t, e, n, a) {
								t !== e
									? a.push({ i: n.push(o(n) + 'skewX(', null, r) - 2, x: Object(i.a)(t, e) })
									: e && n.push(o(n) + 'skewX(' + e + r);
							}
							function c(t, e, n, r, a, s) {
								if (t !== n || e !== r) {
									var u = a.push(o(a) + 'scale(', null, ',', null, ')');
									s.push({ i: u - 4, x: Object(i.a)(t, n) }, { i: u - 2, x: Object(i.a)(e, r) });
								} else (1 === n && 1 === r) || a.push(o(a) + 'scale(' + n + ',' + r + ')');
							}
							return function(e, n) {
								var r = [],
									i = [];
								return (
									(e = t(e)),
									(n = t(n)),
									a(e.translateX, e.translateY, n.translateX, n.translateY, r, i),
									s(e.rotate, n.rotate, r, i),
									u(e.skewX, n.skewX, r, i),
									c(e.scaleX, e.scaleY, n.scaleX, n.scaleY, r, i),
									(e = n = null),
									function(t) {
										for (var e, n = -1, o = i.length; ++n < o; ) r[(e = i[n]).i] = e.x(t);
										return r.join('');
									}
								);
							};
						}
						n.d(e, 'a', function() {
							return a;
						}),
							n.d(e, 'b', function() {
								return s;
							});
						var i = n(31),
							o = n(254),
							a = r(o.a, 'px, ', 'px)', 'deg)'),
							s = r(o.b, ', ', ')', ')');
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return 'none' === t
								? c.b
								: (o ||
										((o = document.createElement('DIV')),
										(a = document.documentElement),
										(s = document.defaultView)),
								  (o.style.transform = t),
								  (t = s.getComputedStyle(a.appendChild(o), null).getPropertyValue('transform')),
								  a.removeChild(o),
								  (t = t.slice(7, -1).split(',')),
								  Object(c.a)(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
						}
						function i(t) {
							return null == t
								? c.b
								: (u || (u = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
								  u.setAttribute('transform', t),
								  (t = u.transform.baseVal.consolidate())
										? ((t = t.matrix), Object(c.a)(t.a, t.b, t.c, t.d, t.e, t.f))
										: c.b);
						}
						(e.a = r), (e.b = i);
						var o,
							a,
							s,
							u,
							c = n(255);
					},
					function(t, e, n) {
						'use strict';
						n.d(e, 'b', function() {
							return i;
						});
						var r = 180 / Math.PI,
							i = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
						e.a = function(t, e, n, i, o, a) {
							var s, u, c;
							return (
								(s = Math.sqrt(t * t + e * e)) && ((t /= s), (e /= s)),
								(c = t * n + e * i) && ((n -= t * c), (i -= e * c)),
								(u = Math.sqrt(n * n + i * i)) && ((n /= u), (i /= u), (c /= u)),
								e * n > t * i && ((t = -t), (e = -e), (c = -c), (s = -s)),
								{
									translateX: o,
									translateY: a,
									rotate: Math.atan2(e, t) * r,
									skewX: Math.atan(c) * r,
									scaleX: s,
									scaleY: u,
								}
							);
						};
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return ((t = Math.exp(t)) + 1 / t) / 2;
						}
						function i(t) {
							return ((t = Math.exp(t)) - 1 / t) / 2;
						}
						function o(t) {
							return ((t = Math.exp(2 * t)) - 1) / (t + 1);
						}
						var a = Math.SQRT2;
						e.a = function(t, e) {
							var n,
								s,
								u = t[0],
								c = t[1],
								l = t[2],
								f = e[0],
								h = e[1],
								p = e[2],
								d = f - u,
								g = h - c,
								y = d * d + g * g;
							if (1e-12 > y)
								(s = Math.log(p / l) / a),
									(n = function(t) {
										return [u + t * d, c + t * g, l * Math.exp(a * t * s)];
									});
							else {
								var v = Math.sqrt(y),
									m = (p * p - l * l + 4 * y) / (2 * l * 2 * v),
									x = (p * p - l * l - 4 * y) / (2 * p * 2 * v),
									b = Math.log(Math.sqrt(m * m + 1) - m),
									_ = Math.log(Math.sqrt(x * x + 1) - x);
								(s = (_ - b) / a),
									(n = function(t) {
										var e = t * s,
											n = r(b),
											f = (l / (2 * v)) * (n * o(a * e + b) - i(b));
										return [u + f * d, c + f * g, (l * n) / r(a * e + b)];
									});
							}
							return (n.duration = 1e3 * s), n;
						};
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return function(e, n) {
								var r = t((e = Object(i.d)(e)).h, (n = Object(i.d)(n)).h),
									a = Object(o.a)(e.s, n.s),
									s = Object(o.a)(e.l, n.l),
									u = Object(o.a)(e.opacity, n.opacity);
								return function(t) {
									return (e.h = r(t)), (e.s = a(t)), (e.l = s(t)), (e.opacity = u(t)), e + '';
								};
							};
						}
						n.d(e, 'b', function() {
							return a;
						});
						var i = n(15),
							o = n(21);
						e.a = r(o.c);
						var a = r(o.a);
					},
					function(t, e, n) {
						'use strict';
						function r(t, e) {
							var n = Object(o.a)((t = Object(i.e)(t)).l, (e = Object(i.e)(e)).l),
								r = Object(o.a)(t.a, e.a),
								a = Object(o.a)(t.b, e.b),
								s = Object(o.a)(t.opacity, e.opacity);
							return function(e) {
								return (t.l = n(e)), (t.a = r(e)), (t.b = a(e)), (t.opacity = s(e)), t + '';
							};
						}
						e.a = r;
						var i = n(15),
							o = n(21);
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return function(e, n) {
								var r = t((e = Object(i.c)(e)).h, (n = Object(i.c)(n)).h),
									a = Object(o.a)(e.c, n.c),
									s = Object(o.a)(e.l, n.l),
									u = Object(o.a)(e.opacity, n.opacity);
								return function(t) {
									return (e.h = r(t)), (e.c = a(t)), (e.l = s(t)), (e.opacity = u(t)), e + '';
								};
							};
						}
						n.d(e, 'b', function() {
							return a;
						});
						var i = n(15),
							o = n(21);
						e.a = r(o.c);
						var a = r(o.a);
					},
					function(t, e, n) {
						'use strict';
						function r(t) {
							return (function e(n) {
								function r(e, r) {
									var a = t((e = Object(i.b)(e)).h, (r = Object(i.b)(r)).h),
										s = Object(o.a)(e.s, r.s),
										u = Object(o.a)(e.l, r.l),
										c = Object(o.a)(e.opacity, r.opacity);
									return function(t) {
										return (
											(e.h = a(t)),
											(e.s = s(t)),
											(e.l = u(Math.pow(t, n))),
											(e.opacity = c(t)),
											e + ''
										);
									};
								}
								return (n = +n), (r.gamma = e), r;
							})(1);
						}
						n.d(e, 'a', function() {
							return a;
						});
						var i = n(15),
							o = n(21);
						e.b = r(o.c);
						var a = r(o.a);
					},
					function(t, e, n) {
						'use strict';
						e.a = function(t, e) {
							for (var n = Array(e), r = 0; e > r; ++r) n[r] = t(r / (e - 1));
							return n;
						};
					},
					function(t, e, n) {
						var r,
							i =
								'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
									? function(t) {
											return typeof t;
									  }
									: function(t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  };
						!(function(e) {
							'use strict';
							function o() {}
							function a(t, e) {
								for (var n = t.length; n--; ) if (t[n].listener === e) return n;
								return -1;
							}
							function s(t) {
								return function() {
									return this[t].apply(this, arguments);
								};
							}
							function u(t) {
								return (
									'function' == typeof t ||
									t instanceof RegExp ||
									(!(!t || 'object' !== (void 0 === t ? 'undefined' : i(t))) && u(t.listener))
								);
							}
							var c = o.prototype,
								l = e.EventEmitter;
							(c.getListeners = function(t) {
								var e,
									n,
									r = this._getEvents();
								if (t instanceof RegExp) {
									e = {};
									for (n in r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
								} else e = r[t] || (r[t] = []);
								return e;
							}),
								(c.flattenListeners = function(t) {
									var e,
										n = [];
									for (e = 0; t.length > e; e += 1) n.push(t[e].listener);
									return n;
								}),
								(c.getListenersAsObject = function(t) {
									var e,
										n = this.getListeners(t);
									return n instanceof Array && ((e = {}), (e[t] = n)), e || n;
								}),
								(c.addListener = function(t, e) {
									if (!u(e)) throw new TypeError('listener must be a function');
									var n,
										r = this.getListenersAsObject(t),
										o = 'object' === (void 0 === e ? 'undefined' : i(e));
									for (n in r)
										r.hasOwnProperty(n) &&
											-1 === a(r[n], e) &&
											r[n].push(o ? e : { listener: e, once: !1 });
									return this;
								}),
								(c.on = s('addListener')),
								(c.addOnceListener = function(t, e) {
									return this.addListener(t, { listener: e, once: !0 });
								}),
								(c.once = s('addOnceListener')),
								(c.defineEvent = function(t) {
									return this.getListeners(t), this;
								}),
								(c.defineEvents = function(t) {
									for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
									return this;
								}),
								(c.removeListener = function(t, e) {
									var n,
										r,
										i = this.getListenersAsObject(t);
									for (r in i) i.hasOwnProperty(r) && -1 !== (n = a(i[r], e)) && i[r].splice(n, 1);
									return this;
								}),
								(c.off = s('removeListener')),
								(c.addListeners = function(t, e) {
									return this.manipulateListeners(!1, t, e);
								}),
								(c.removeListeners = function(t, e) {
									return this.manipulateListeners(!0, t, e);
								}),
								(c.manipulateListeners = function(t, e, n) {
									var r,
										o,
										a = t ? this.removeListener : this.addListener,
										s = t ? this.removeListeners : this.addListeners;
									if ('object' !== (void 0 === e ? 'undefined' : i(e)) || e instanceof RegExp)
										for (r = n.length; r--; ) a.call(this, e, n[r]);
									else
										for (r in e)
											e.hasOwnProperty(r) &&
												(o = e[r]) &&
												('function' == typeof o ? a.call(this, r, o) : s.call(this, r, o));
									return this;
								}),
								(c.removeEvent = function(t) {
									var e,
										n = void 0 === t ? 'undefined' : i(t),
										r = this._getEvents();
									if ('string' === n) delete r[t];
									else if (t instanceof RegExp)
										for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
									else delete this._events;
									return this;
								}),
								(c.removeAllListeners = s('removeEvent')),
								(c.emitEvent = function(t, e) {
									var n,
										r,
										i,
										o,
										a = this.getListenersAsObject(t);
									for (o in a)
										if (a.hasOwnProperty(o))
											for (n = a[o].slice(0), i = 0; n.length > i; i++)
												(r = n[i]),
													!0 === r.once && this.removeListener(t, r.listener),
													r.listener.apply(this, e || []) === this._getOnceReturnValue() &&
														this.removeListener(t, r.listener);
									return this;
								}),
								(c.trigger = s('emitEvent')),
								(c.emit = function(t) {
									return this.emitEvent(t, Array.prototype.slice.call(arguments, 1));
								}),
								(c.setOnceReturnValue = function(t) {
									return (this._onceReturnValue = t), this;
								}),
								(c._getOnceReturnValue = function() {
									return !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue;
								}),
								(c._getEvents = function() {
									return this._events || (this._events = {});
								}),
								(o.noConflict = function() {
									return (e.EventEmitter = l), o;
								}),
								void 0 !==
									(r = function() {
										return o;
									}.call(e, n, e, t)) && (t.exports = r);
						})(this || {});
					},
					function(t, e, n) {
						var r = n(1);
						(r.Rect = n(55)),
							(r.Rect = n(55)),
							(r.Circle = n(101)),
							(r.Ellipse = n(102)),
							(r.Path = n(103)),
							(r.Text = n(105)),
							(r.Line = n(106)),
							(r.Image = n(107)),
							(r.Polygon = n(108)),
							(r.Polyline = n(109)),
							(r.Arc = n(110)),
							(r.Fan = n(111)),
							(r.Cubic = n(112)),
							(r.Quadratic = n(113)),
							(r.Marker = n(56)),
							(t.exports = r);
					},
					function(t, e) {
						t.exports = {
							xAt: function(t, e, n, r, i) {
								return e * Math.cos(t) * Math.cos(i) - n * Math.sin(t) * Math.sin(i) + r;
							},
							yAt: function(t, e, n, r, i) {
								return e * Math.sin(t) * Math.cos(i) + n * Math.cos(t) * Math.sin(i) + r;
							},
							xExtrema: function(t, e, n) {
								return Math.atan((-n / e) * Math.tan(t));
							},
							yExtrema: function(t, e, n) {
								return Math.atan(n / (e * Math.tan(t)));
							},
						};
					},
				]);
			});
		},
		function(t, e) {
			t.exports = Array.isArray;
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function a(t) {
				return l.isArray(t) ? t : l.isString(t) ? t.split('*') : [t];
			}
			function s(t) {
				return (
					(l.isString(t) || l.isPlainObject(t)) && (t = [t]),
					l.each(t, function(e, n) {
						l.isObject(e) || (t[n] = { type: e });
					}),
					t
				);
			}
			var u = n(44),
				c = n(73),
				l = n(0),
				f = n(1),
				h = n(188),
				p = n(197),
				d = n(5),
				g = n(202),
				y = n(200),
				v = n(201),
				m = ['color', 'shape', 'size'];
			t.exports = (function(t) {
				function e(n) {
					r(this, e);
					var o = i(this, t.call(this, n));
					return (
						l.assign(o, g, y, v), o.get('container') && o._initContainer(), o._initOptions(), o
					);
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						return {
							_id: null,
							type: 'base',
							coord: null,
							attrs: {},
							view: null,
							data: [],
							scales: {},
							container: null,
							labelContainer: null,
							shapeContainer: null,
							attrOptions: {},
							styleOptions: null,
							selectedOptions: null,
							activedOptions: null,
							hasDefaultAdjust: !1,
							adjusts: null,
							shapeType: null,
							generatePoints: !1,
							sortable: !1,
							labelCfg: null,
							shareTooltip: !0,
							tooltipCfg: null,
							animate: !0,
							animateCfg: null,
							visible: !0,
						};
					}),
					(e.prototype._initOptions = function() {
						var t = this.get('adjusts');
						t && ((t = s(t)), this.set('adjusts', t));
					}),
					(e.prototype._createScale = function(t, e) {
						var n = this.get('scales'),
							r = n[t];
						return r || ((r = this.get('view').createScale(t, e)), (n[t] = r)), r;
					}),
					(e.prototype._setAttrOptions = function(t, e) {
						this.get('attrOptions')[t] = e;
					}),
					(e.prototype._createAttrOption = function(t, e, n, r) {
						var i = {};
						(i.field = e),
							n
								? l.isFunction(n)
									? (i.callback = n)
									: (i.values = n)
								: 'color' !== t && (i.values = r),
							this._setAttrOptions(t, i);
					}),
					(e.prototype.position = function(t) {
						return this._setAttrOptions('position', { field: t }), this;
					}),
					(e.prototype.color = function(t, e) {
						return this._createAttrOption('color', t, e, f.colors), this;
					}),
					(e.prototype.size = function(t, e) {
						return this._createAttrOption('size', t, e, f.sizes), this;
					}),
					(e.prototype.shape = function(t, e) {
						var n = this.get('type');
						return this._createAttrOption('shape', t, e, f.shapes[n] || []), this;
					}),
					(e.prototype.opacity = function(t, e) {
						return this._createAttrOption('opacity', t, e, f.opacities), this;
					}),
					(e.prototype.style = function(t, e) {
						var n = this.get('styleOptions');
						n || ((n = {}), this.set('styleOptions', n)), l.isObject(t) && ((e = t), (t = null));
						var r = void 0;
						return t && (r = a(t)), (n.fields = r), (n.style = e), this;
					}),
					(e.prototype.label = function(t, e, n) {
						var r = this,
							i = r.get('labelCfg');
						i || ((i = {}), r.set('labelCfg', i));
						var o = void 0;
						return (
							t && (o = a(t)),
							(i.fields = o),
							l.isFunction(e) ? (n || (n = {}), (n.content = e)) : l.isObject(e) && (n = e),
							(i.cfg = n),
							this
						);
					}),
					(e.prototype.tooltip = function(t, e) {
						var n = this.get('tooltipCfg');
						if ((n || (n = {}), !1 === t)) this.set('tooltipCfg', !1);
						else {
							var r = void 0;
							t && (r = a(t)), (n.fields = r), (n.cfg = e);
						}
						return this.set('tooltipCfg', n), this;
					}),
					(e.prototype.animate = function(t) {
						return this.set('animateCfg', t), this;
					}),
					(e.prototype.active = function(t, e) {
						return (
							!1 === t
								? this.set('allowActive', !1)
								: l.isObject(t)
									? (this.set('allowActive', !0), this.set('activedOptions', t))
									: (this.set('allowActive', !0), this.set('activedOptions', e)),
							this
						);
					}),
					(e.prototype.adjust = function(t) {
						return this.get('hasDefaultAdjust') || (t && (t = s(t)), this.set('adjusts', t)), this;
					}),
					(e.prototype.select = function(t, e) {
						return (
							!1 === t
								? this.set('allowSelect', !1)
								: l.isObject(t)
									? (this.set('allowSelect', !0), this.set('selectedOptions', t))
									: (this.set('allowSelect', !0), this.set('selectedOptions', e)),
							this
						);
					}),
					(e.prototype.hasAdjust = function(t) {
						var e = this,
							n = e.get('adjusts');
						if (!t) return !1;
						var r = !1;
						return (
							l.each(n, function(e) {
								if (e.type === t) return (r = !0), !1;
							}),
							r
						);
					}),
					(e.prototype.hasStack = function() {
						var t = this.get('isStacked');
						return l.isNil(t) && ((t = this.hasAdjust('stack')), this.set('isStacked', t)), t;
					}),
					(e.prototype.isInCircle = function() {
						var t = this.get('coord');
						return t && t.isPolar;
					}),
					(e.prototype._initContainer = function() {
						var t = this,
							e = t.get('shapeContainer');
						if (!e) {
							var n = t.get('container'),
								r = t.get('view');
							(e = n.addGroup({ viewId: r && r.get('_id'), visible: t.get('visible') })),
								t.set('shapeContainer', e);
						}
					}),
					(e.prototype.init = function() {
						var t = this;
						if (
							(t._initContainer(),
							t._initAttrs(),
							t.get('tooltipCfg') && t.get('tooltipCfg').fields)
						) {
							var e = t.get('tooltipCfg').fields;
							l.each(e, function(e) {
								t._createScale(e);
							});
						}
						var n = t._processData();
						t.get('adjusts') && t._adjust(n), t.set('dataArray', n);
					}),
					(e.prototype._initAttrs = function() {
						var t = this,
							e = this.get('attrs'),
							n = this.get('attrOptions'),
							r = t.get('coord'),
							i = !1;
						for (var o in n)
							if (n.hasOwnProperty(o)) {
								var s = n[o],
									u = l.upperFirst(o),
									h = a(s.field);
								'position' === o &&
									((s.coord = r),
									1 === h.length && 'theta' === r.type && (h.unshift('1'), (i = !0)));
								for (var p = [], d = 0; h.length > d; d++) {
									var g = h[d],
										y = t._createScale(g);
									'color' === o &&
										l.isNil(s.values) &&
										((s.values =
											y.values.length > 8
												? y.values.length > 16
													? f.colors_24
													: i
														? f.colors_pie_16
														: f.colors_16
												: i
													? f.colors_pie
													: f.colors),
										l.isNil(s.values) && (s.values = f.colors)),
										p.push(y);
								}
								if ('theta' === r.type && 'position' === o && p.length > 1) {
									var v = p[1];
									v.change({ nice: !1, min: 0, max: Math.max.apply(null, v.values) });
								}
								s.scales = p;
								var m = new c[u](s);
								e[o] = m;
							}
					}),
					(e.prototype._processData = function() {
						for (
							var t = this, e = this.get('data'), n = [], r = this._groupData(e), i = 0;
							r.length > i;
							i++
						) {
							var o = r[i],
								a = t._saveOrigin(o);
							t._numberic(a), n.push(a);
						}
						return n;
					}),
					(e.prototype._groupData = function(t) {
						var e = this._getGroupScales(),
							n = e.map(function(t) {
								return t.field;
							});
						return l.Array.group(t, n);
					}),
					(e.prototype._saveOrigin = function(t) {
						for (var e = [], n = 0; t.length > n; n++) {
							var r = t[n],
								i = {};
							for (var o in r) i[o] = r[o];
							(i._origin = r), e.push(i);
						}
						return e;
					}),
					(e.prototype._numberic = function(t) {
						for (var e = this.getAttr('position'), n = e.scales, r = 0; t.length > r; r++)
							for (var i = t[r], o = 0; o < Math.min(2, n.length); o++) {
								var a = n[o];
								if (a.isCategory) {
									var s = a.field;
									i[s] = a.translate(i[s]);
								}
							}
					}),
					(e.prototype._getGroupScales = function() {
						var t = this,
							e = t.get('groupScales');
						if (!e) {
							e = [];
							var n = t.get('attrs');
							l.each(n, function(t) {
								if (-1 !== m.indexOf(t.type)) {
									l.each(t.scales, function(t) {
										t.isCategory && -1 === l.indexOf(e, t) && e.push(t);
									});
								}
							}),
								t.set('groupScales', e);
						}
						return e;
					}),
					(e.prototype._updateStackRange = function(t, e, n) {
						for (var r = l.Array.merge(n), i = e.min, o = e.max, a = 0; r.length > a; a++) {
							var s = r[a],
								u = Math.min.apply(null, s[t]),
								c = Math.max.apply(null, s[t]);
							i > u && (i = u), c > o && (o = c);
						}
						(e.min > i || o > e.max) && e.change({ min: i, max: o });
					}),
					(e.prototype._adjust = function(t) {
						var e = this,
							n = e.get('adjusts'),
							r = e.getYScale(),
							i = e.getXScale(),
							o = i.field,
							a = r ? r.field : null;
						l.each(n, function(n) {
							var s = l.mix({ xField: o, yField: a }, n),
								u = l.upperFirst(n.type);
							if ('Dodge' === u) {
								var c = [];
								if (i.isCategory || i.isIdentity) c.push('x');
								else {
									if (r)
										throw Error(
											'dodge is not support linear attribute, please use category attribute!'
										);
									c.push('y');
								}
								s.adjustNames = c;
							} else if ('Stack' === u) {
								var f = e.get('coord');
								if (!r) {
									s.height = f.getHeight();
									var p = e.getDefaultValue('size') || 3;
									s.size = p;
								}
								!f.isTransposed && l.isNil(s.reverseOrder) && (s.reverseOrder = !0);
							}
							new h[u](s).processAdjust(t), 'Stack' === u && r && e._updateStackRange(a, r, t);
						});
					}),
					(e.prototype.setCoord = function(t) {
						this.set('coord', t);
						var e = this.getAttr('position');
						this.get('shapeContainer').setMatrix(t.matrix), e && (e.coord = t);
					}),
					(e.prototype.paint = function() {
						var t = this,
							e = t.get('dataArray'),
							n = [],
							r = t.getShapeFactory();
						r.setCoord(t.get('coord'));
						var i = t.get('shapeContainer');
						t._beforeMapping(e);
						for (var o = 0; e.length > o; o++) {
							var a = e[o],
								s = o;
							(a = t._mapping(a)), n.push(a), t.draw(a, i, r, s);
						}
						t.get('labelCfg') && t._addLabels(l.union.apply(null, n)),
							t.get('sortable') ? t.set('dataArray', n) : t._sort(n);
					}),
					(e.prototype._sort = function(t) {
						var e = this,
							n = e.getXScale(),
							r = n.field;
						l.each(t, function(t) {
							t.sort(function(t, e) {
								return n.translate(t._origin[r]) - n.translate(e._origin[r]);
							});
						}),
							e.set('dataArray', t);
					}),
					(e.prototype._beforeMapping = function(t) {
						var e = this;
						if (e.get('sortable')) {
							var n = e.getXScale(),
								r = n.field;
							l.each(t, function(t) {
								t.sort(function(t, e) {
									return n.translate(t[r]) - n.translate(e[r]);
								});
							});
						}
						e.get('generatePoints') &&
							(l.each(t, function(t) {
								e._generatePoints(t);
							}),
							l.each(t, function(e, n) {
								var r = t[n + 1];
								r && (e[0].nextPoints = r[0].points);
							}));
					}),
					(e.prototype._addLabels = function(t) {
						var e = this,
							n = e.get('type'),
							r = e.get('coord'),
							i = p.getLabelsClass(r.type, n),
							o = e.get('container'),
							a = l.map(e.get('labelCfg').fields, function(t) {
								return e._createScale(t);
							}),
							s = o.addGroup(i, {
								_id: this.get('_id'),
								labelCfg: l.mix({ scales: a }, e.get('labelCfg')),
								coord: r,
								geom: e,
								geomType: n,
								visible: e.get('visible'),
							});
						s.showLabels(t), e.set('labelContainer', s);
					}),
					(e.prototype.getShapeFactory = function() {
						var t = this.get('shapeFactory');
						if (!t) {
							var e = this.get('shapeType');
							(t = d.getShapeFactory(e)), this.set('shapeFactory', t);
						}
						return t;
					}),
					(e.prototype._generatePoints = function(t) {
						for (
							var e = this, n = e.getShapeFactory(), r = e.getAttr('shape'), i = 0;
							t.length > i;
							i++
						) {
							var o = t[i],
								a = e.createShapePointsCfg(o);
							o.points = n.getShapePoints(r ? e._getAttrValues(r, o) : null, a);
						}
					}),
					(e.prototype.createShapePointsCfg = function(t) {
						var e = this.getXScale(),
							n = this.getYScale(),
							r = this._normalizeValues(t[e.field], e),
							i = void 0;
						return (
							(i = n ? this._normalizeValues(t[n.field], n) : t.y ? t.y : 0.1),
							{ x: r, y: i, y0: n ? n.scale(this.getYMinValue()) : void 0 }
						);
					}),
					(e.prototype.getYMinValue = function() {
						var t = this.getYScale(),
							e = t.min;
						return 0 > e ? 0 : e;
					}),
					(e.prototype._normalizeValues = function(t, e) {
						var n = [];
						if (l.isArray(t))
							for (var r = 0; t.length > r; r++) {
								var i = t[r];
								n.push(e.scale(i));
							}
						else n = e.scale(t);
						return n;
					}),
					(e.prototype._mapping = function(t) {
						for (var e = this, n = e.get('attrs'), r = [], i = 0; t.length > i; i++) {
							var o = t[i],
								a = {};
							(a._origin = o._origin), (a.points = o.points), (a.nextPoints = o.nextPoints);
							for (var s in n)
								if (n.hasOwnProperty(s)) {
									var u = n[s],
										c = u.names,
										f = e._getAttrValues(u, o);
									if (c.length > 1)
										for (var h = 0; f.length > h; h++) {
											var p = f[h],
												d = c[h];
											a[d] = l.isArray(p) && 1 === p.length ? p[0] : p;
										}
									else a[c[0]] = 1 === f.length ? f[0] : f;
								}
							r.push(a);
						}
						return r;
					}),
					(e.prototype._getAttrValues = function(t, e) {
						for (var n = t.scales, r = [], i = 0; n.length > i; i++) {
							var o = n[i],
								a = o.field;
							r.push('identity' === o.type ? o.value : e[a]);
						}
						return t.mapping.apply(t, r);
					}),
					(e.prototype.getAttrValue = function(t, e) {
						var n = this.getAttr(t),
							r = null;
						if (n) {
							r = this._getAttrValues(n, e)[0];
						}
						return r;
					}),
					(e.prototype.getDefaultValue = function(t) {
						var e = this.get(t),
							n = this.getAttr(t);
						if (n) {
							var r = n.getScale(t);
							'identity' === r.type && (e = r.value);
						}
						return e;
					}),
					(e.prototype.draw = function(t, e, n, r) {
						for (var i = this, o = 0; t.length > o; o++) {
							i.drawPoint(t[o], e, n, r + o);
						}
					}),
					(e.prototype.getCallbackCfg = function(t, e, n) {
						if (!t) return e;
						var r = {},
							i = t.map(function(t) {
								return n[t];
							});
						return (
							l.each(e, function(t, e) {
								r[e] = l.isFunction(t) ? t.apply(null, i) : t;
							}),
							r
						);
					}),
					(e.prototype._getShapeId = function(t) {
						var e = this.get('_id'),
							n = this.get('keyFields');
						if (n && n.length > 0)
							l.each(n, function(n) {
								e += '-' + t[n];
							});
						else {
							var r = this.get('type'),
								i = this.getXScale(),
								o = this.getYScale(),
								a = i.field || 'x',
								s = o.field || 'y',
								u = t[s],
								c = void 0;
							(c = i.isIdentity ? i.value : t[a]),
								(e +=
									'interval' === r || 'schema' === r
										? '-' + c
										: 'line' === r || 'area' === r || 'path' === r
											? '-' + r
											: '-' + c + '-' + u);
							var f = this._getGroupScales();
							l.isEmpty(f) ||
								l.each(f, function(n) {
									var r = n.field;
									'identity' !== n.type && (e += '-' + t[r]);
								});
						}
						return e;
					}),
					(e.prototype.getDrawCfg = function(t) {
						var e = this,
							n = {
								origin: t,
								x: t.x,
								y: t.y,
								color: t.color,
								size: t.size,
								shape: t.shape,
								isInCircle: e.isInCircle(),
								opacity: t.opacity,
							},
							r = e.get('styleOptions');
						return (
							r && r.style && (n.style = e.getCallbackCfg(r.fields, r.style, t._origin)),
							this.get('generatePoints') && ((n.points = t.points), (n.nextPoints = t.nextPoints)),
							this.get('animate') && (n._id = e._getShapeId(t._origin)),
							n
						);
					}),
					(e.prototype.appendShapeInfo = function(t, e) {
						t &&
							(t.setSilent('index', e),
							t.setSilent('coord', this.get('coord')),
							this.get('animate') &&
								this.get('animateCfg') &&
								t.setSilent('animateCfg', this.get('animateCfg')));
					}),
					(e.prototype.drawPoint = function(t, e, n, r) {
						this.appendShapeInfo(n.drawShape(t.shape, this.getDrawCfg(t), e), r);
					}),
					(e.prototype.getAttr = function(t) {
						return this.get('attrs')[t];
					}),
					(e.prototype.getXScale = function() {
						return this.getAttr('position').scales[0];
					}),
					(e.prototype.getYScale = function() {
						return this.getAttr('position').scales[1];
					}),
					(e.prototype.getShapes = function() {
						var t = [],
							e = this.get('shapeContainer'),
							n = e.get('children');
						return (
							l.each(n, function(e) {
								e.get('origin') && t.push(e);
							}),
							t
						);
					}),
					(e.prototype.getAttrsForLegend = function() {
						var t = this.get('attrs'),
							e = [];
						return (
							l.each(t, function(t) {
								-1 !== m.indexOf(t.type) && e.push(t);
							}),
							e
						);
					}),
					(e.prototype.getFieldsForLegend = function() {
						var t = [],
							e = this.get('attrOptions');
						return (
							l.each(m, function(n) {
								var r = e[n];
								r && r.field && l.isString(r.field) && (t = t.concat(r.field.split('*')));
							}),
							l.uniq(t)
						);
					}),
					(e.prototype.changeVisible = function(t, e) {
						this.set('visible', t);
						var n = this.get('shapeContainer');
						n && n.set('visible', t);
						var r = this.get('labelContainer');
						if ((r && r.set('visible', t), !e && n)) {
							n.get('canvas').draw();
						}
					}),
					(e.prototype.reset = function() {
						this.set('attrOptions', {}), this.clearInner();
					}),
					(e.prototype.clearInner = function() {
						this.clearActivedShapes(), this.clearSelected();
						var t = this.get('shapeContainer');
						t && t.clear();
						var e = this.get('labelContainer');
						e && e.remove(),
							this.set('attrs', {}),
							this.set('groupScales', null),
							this.set('labelContainer', null),
							this.set('xDistance', null),
							this.set('isStacked', null);
					}),
					(e.prototype.clear = function() {
						this.clearInner(), this.set('scales', {});
					}),
					(e.prototype.destroy = function() {
						this.clear();
						var e = this.get('shapeContainer');
						e && e.remove(), this.offEvents(), t.prototype.destroy.call(this);
					}),
					(e.prototype.bindEvents = function() {
						this.get('view') && (this._bindActiveAction(), this._bindSelectedAction());
					}),
					(e.prototype.offEvents = function() {
						this.get('view') && (this._offActiveAction(), this._offSelectedAction());
					}),
					e
				);
			})(u);
		},
		function(t, e, n) {
			var r = n(0),
				i = n(13),
				o = n(2).PathUtil,
				a = {},
				s = {
					_coord: null,
					draw: function(t, e) {
						return this.drawShape ? this.drawShape(t, e) : null;
					},
					setCoord: function(t) {
						this._coord = t;
					},
					parsePath: function(t, e) {
						var n = this._coord;
						return (
							(t = o.parsePathString(t)),
							(t = n.isPolar && !1 !== e ? i.convertPolarPath(n, t) : i.convertNormalPath(n, t))
						);
					},
					parsePoint: function(t) {
						return this._coord.convertPoint(t);
					},
					parsePoints: function(t) {
						var e = this._coord,
							n = [];
						return (
							r.each(t, function(t) {
								n.push(e.convertPoint(t));
							}),
							n
						);
					},
				},
				u = {
					defaultShapeType: null,
					setCoord: function(t) {
						this._coord = t;
					},
					getShape: function(t) {
						var e = this;
						r.isArray(t) && (t = t[0]);
						var n = e[t] || e[e.defaultShapeType];
						return (n._coord = e._coord), n;
					},
					getShapePoints: function(t, e) {
						var n = this.getShape(t);
						return (n.getPoints || n.getShapePoints || this.getDefaultPoints)(e);
					},
					getDefaultPoints: function() {
						return [];
					},
					getMarkerCfg: function(t, e) {
						var n = this.getShape(t);
						if (!n.getMarkerCfg) {
							n = this.getShape(this.defaultShapeType);
						}
						return n.getMarkerCfg(e);
					},
					getSelectedCfg: function() {
						return {};
					},
					drawShape: function(t, e, n) {
						var r = this.getShape(t),
							i = r.draw(e, n);
						return (
							i &&
								(i.setSilent('origin', e.origin),
								(i._id = e.yIndex ? e._id + e.yIndex : e._id),
								(i.name = this.name)),
							i
						);
					},
				};
			(a.registerFactory = function(t, e) {
				var n = r.upperFirst(t),
					i = r.assign({}, u, e);
				return (a[n] = i), (i.name = t), i;
			}),
				(a.registerShape = function(t, e, n) {
					var i = r.upperFirst(t),
						o = a[i],
						u = r.assign({}, s, n);
					return (o[e] = u), u;
				}),
				(a.getShapeFactory = function(t) {
					var e = this;
					return (t = t || 'point'), e[r.upperFirst(t)];
				}),
				(t.exports = a);
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				(this._groups = t), (this._parents = e);
			}
			function i() {
				return new r([[document.documentElement]], D);
			}
			n.d(e, 'c', function() {
				return D;
			}),
				(e.b = r);
			var o = n(287),
				a = n(288),
				s = n(276),
				u = n(270),
				c = n(100),
				l = n(275),
				f = n(280),
				h = n(283),
				p = n(290),
				d = n(267),
				g = n(282),
				y = n(281),
				v = n(289),
				m = n(274),
				x = n(273),
				b = n(266),
				_ = n(102),
				w = n(284),
				S = n(268),
				M = n(291),
				P = n(277),
				C = n(285),
				O = n(279),
				A = n(265),
				k = n(278),
				I = n(286),
				T = n(269),
				E = n(271),
				j = n(53),
				L = n(272),
				D = [null];
			(r.prototype = i.prototype = {
				constructor: r,
				select: o.a,
				selectAll: a.a,
				filter: s.a,
				data: u.a,
				enter: c.a,
				exit: l.a,
				merge: f.a,
				order: h.a,
				sort: p.a,
				call: d.a,
				nodes: g.a,
				node: y.a,
				size: v.a,
				empty: m.a,
				each: x.a,
				attr: b.a,
				style: _.b,
				property: w.a,
				classed: S.a,
				text: M.a,
				html: P.a,
				raise: C.a,
				lower: O.a,
				append: A.a,
				insert: k.a,
				remove: I.a,
				clone: T.a,
				datum: E.a,
				on: j.c,
				dispatch: L.a,
			}),
				(e.a = i);
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				var n = o(t, e);
				if (n.state > f) throw Error('too late; already scheduled');
				return n;
			}
			function i(t, e) {
				var n = o(t, e);
				if (n.state > p) throw Error('too late; already started');
				return n;
			}
			function o(t, e) {
				var n = t.__transition;
				if (!n || !(n = n[e])) throw Error('transition not found');
				return n;
			}
			function a(t, e, r) {
				function i(t) {
					(r.state = h), r.timer.restart(o, r.delay, r.time), r.delay > t || o(t - r.delay);
				}
				function o(i) {
					var f, y, m, x;
					if (r.state !== h) return s();
					for (f in l)
						if (((x = l[f]), x.name === r.name)) {
							if (x.state === d) return n.i(u.b)(o);
							x.state === g
								? ((x.state = v),
								  x.timer.stop(),
								  x.on.call('interrupt', t, t.__data__, x.index, x.group),
								  delete l[f])
								: e > +f && ((x.state = v), x.timer.stop(), delete l[f]);
						}
					if (
						(n.i(u.b)(function() {
							r.state === d && ((r.state = g), r.timer.restart(a, r.delay, r.time), a(i));
						}),
						(r.state = p),
						r.on.call('start', t, t.__data__, r.index, r.group),
						r.state === p)
					) {
						for (r.state = d, c = Array((m = r.tween.length)), f = 0, y = -1; m > f; ++f)
							(x = r.tween[f].value.call(t, t.__data__, r.index, r.group)) && (c[++y] = x);
						c.length = y + 1;
					}
				}
				function a(e) {
					for (
						var n =
								r.duration > e
									? r.ease.call(null, e / r.duration)
									: (r.timer.restart(s), (r.state = y), 1),
							i = -1,
							o = c.length;
						++i < o;

					)
						c[i].call(null, n);
					r.state === y && (r.on.call('end', t, t.__data__, r.index, r.group), s());
				}
				function s() {
					(r.state = v), r.timer.stop(), delete l[e];
					for (var n in l) return;
					delete t.__transition;
				}
				var c,
					l = t.__transition;
				(l[e] = r), (r.timer = n.i(u.a)(i, 0, r.time));
			}
			n.d(e, 'd', function() {
				return h;
			}),
				n.d(e, 'a', function() {
					return p;
				}),
				n.d(e, 'b', function() {
					return y;
				}),
				n.d(e, 'c', function() {
					return v;
				}),
				(e.g = r),
				(e.e = i),
				(e.f = o);
			var s = n(247),
				u = n(104),
				c = n.i(s.a)('start', 'end', 'interrupt'),
				l = [],
				f = 0,
				h = 1,
				p = 2,
				d = 3,
				g = 4,
				y = 5,
				v = 6;
			e.h = function(t, e, n, r, i, o) {
				var s = t.__transition;
				if (s) {
					if (n in s) return;
				} else t.__transition = {};
				a(t, n, {
					name: e,
					index: r,
					group: i,
					on: c,
					tween: l,
					time: o.time,
					delay: o.delay,
					duration: o.duration,
					ease: o.ease,
					timer: null,
					state: f,
				});
			};
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var r = n(261);
			n.d(e, 'create', function() {
				return r.a;
			});
			var i = n(29);
			n.d(e, 'creator', function() {
				return i.a;
			});
			var o = n(262);
			n.d(e, 'local', function() {
				return o.a;
			});
			var a = n(98);
			n.d(e, 'matcher', function() {
				return a.a;
			});
			var s = n(263);
			n.d(e, 'mouse', function() {
				return s.a;
			});
			var u = n(51);
			n.d(e, 'namespace', function() {
				return u.a;
			});
			var c = n(52);
			n.d(e, 'namespaces', function() {
				return c.a;
			});
			var l = n(30);
			n.d(e, 'clientPoint', function() {
				return l.a;
			});
			var f = n(99);
			n.d(e, 'select', function() {
				return f.a;
			});
			var h = n(264);
			n.d(e, 'selectAll', function() {
				return h.a;
			});
			var p = n(6);
			n.d(e, 'selection', function() {
				return p.a;
			});
			var d = n(54);
			n.d(e, 'selector', function() {
				return d.a;
			});
			var g = n(103);
			n.d(e, 'selectorAll', function() {
				return g.a;
			});
			var y = n(102);
			n.d(e, 'style', function() {
				return y.a;
			});
			var v = n(292);
			n.d(e, 'touch', function() {
				return v.a;
			});
			var m = n(293);
			n.d(e, 'touches', function() {
				return m.a;
			});
			var x = n(56);
			n.d(e, 'window', function() {
				return x.a;
			});
			var b = n(53);
			n.d(e, 'event', function() {
				return b.a;
			}),
				n.d(e, 'customEvent', function() {
					return b.b;
				});
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function i(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function a(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function s(t) {
				var e = (function(e) {
					function n(e) {
						return i(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
					}
					return (
						a(n, e),
						u(n, [
							{
								key: 'getChildContext',
								value: function() {
									return {
										addElement: this.context.addElement,
										updateElement: this.context.updateElement,
										deleteElement: this.context.deleteElement,
										createId: this.context.createId,
										getParentInfo: this.getParentInfo,
										getViewId: this.context.getViewId,
									};
								},
							},
						]),
						n
					);
				})(p);
				return (
					(e.contextTypes = {
						addElement: h.default.func,
						updateElement: h.default.func,
						deleteElement: h.default.func,
						createId: h.default.func,
						getParentInfo: h.default.func,
						getViewId: h.default.func,
					}),
					(e.childContextTypes = {
						addElement: h.default.func,
						updateElement: h.default.func,
						deleteElement: h.default.func,
						createId: h.default.func,
						getParentInfo: h.default.func,
						getViewId: h.default.func,
					}),
					e
				);
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var u = (function() {
					function t(t, e) {
						for (var n = 0; e.length > n; n++) {
							var r = e[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(t, r.key, r);
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e;
					};
				})(),
				c = n(41),
				l = r(c),
				f = n(11),
				h = r(f),
				p = (function(t) {
					function e(t, n) {
						i(this, e);
						var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
						return (
							(r.getParentInfo = function() {
								return { id: r.id, name: r.name };
							}),
							(r.name = n),
							r
						);
					}
					return (
						a(e, t),
						u(e, [
							{
								key: 'getChildContext',
								value: function() {
									return {
										addElement: this.context.addElement,
										updateElement: this.context.updateElement,
										deleteElement: this.context.deleteElement,
										createId: this.context.createId,
										getParentInfo: this.getParentInfo,
										getViewId: this.context.getViewId,
									};
								},
							},
							{
								key: 'componentWillMount',
								value: function() {
									var t = this.context;
									(this.id = t.createId()),
										t.addElement(this.name, this.id, this.props, t.getParentInfo(), t.getViewId());
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function(t) {
									this.context.updateElement(
										this.name,
										this.id,
										t,
										this.context.getParentInfo(),
										this.context.getViewId()
									);
								},
							},
							{
								key: 'componentWillUnmount',
								value: function() {
									this.context.deleteElement(this.name, this.id);
								},
							},
							{
								key: 'render',
								value: function() {
									var t = this.props.children;
									return (
										t ? t.length && (t = l.default.createElement('div', null, t)) : (t = null), t
									);
								},
							},
						]),
						e
					);
				})(c.Component);
			(p.contextTypes = {
				addElement: h.default.func,
				updateElement: h.default.func,
				deleteElement: h.default.func,
				createId: h.default.func,
				getParentInfo: h.default.func,
				getViewId: h.default.func,
			}),
				(p.childContextTypes = {
					addElement: h.default.func,
					updateElement: h.default.func,
					deleteElement: h.default.func,
					createId: h.default.func,
					getParentInfo: h.default.func,
					getViewId: h.default.func,
				}),
				(p.generateBaseTypedComponent = s),
				(e.default = p);
		},
		function(t, e, n) {
			'use strict';
			function r(t, e, n, r) {
				(this._groups = t), (this._parents = e), (this._name = n), (this._id = r);
			}
			function i(t) {
				return n
					.i(a.selection)()
					.transition(t);
			}
			function o() {
				return ++M;
			}
			(e.b = r), (e.a = i), (e.c = o);
			var a = n(8),
				s = n(312),
				u = n(313),
				c = n(314),
				l = n(315),
				f = n(316),
				h = n(317),
				p = n(318),
				d = n(319),
				g = n(320),
				y = n(321),
				v = n(322),
				m = n(323),
				x = n(324),
				b = n(325),
				_ = n(326),
				w = n(327),
				S = n(32),
				M = 0,
				P = a.selection.prototype;
			r.prototype = i.prototype = {
				constructor: r,
				select: y.a,
				selectAll: v.a,
				filter: h.a,
				merge: p.a,
				selection: m.a,
				transition: w.a,
				call: P.call,
				nodes: P.nodes,
				node: P.node,
				size: P.size,
				empty: P.empty,
				each: P.each,
				on: d.a,
				attr: s.a,
				attrTween: u.a,
				style: x.a,
				styleTween: b.a,
				text: _.a,
				remove: g.a,
				tween: S.a,
				delay: c.a,
				duration: l.a,
				ease: f.a,
			};
		},
		function(t, e, n) {
			t.exports = n(445)();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t) {
				var e = void 0;
				return (
					o.each(t, function(t) {
						if (t) return (e = t), !1;
					}),
					e
				);
			}
			var o = n(0),
				a = ['min', 'max', 'median'];
			t.exports = (function() {
				function t(e) {
					r(this, t);
					var n = this.getDefaultCfg();
					(e = o.deepMix({}, n, e)), o.mix(this, e);
				}
				return (
					(t.prototype.getDefaultCfg = function() {
						return { zIndex: 1, xScales: null, yScales: null, el: null };
					}),
					(t.prototype._getNormalizedValue = function(t, e) {
						var n = void 0;
						if (-1 !== o.indexOf(a, t)) {
							var r = void 0;
							'median' === t
								? ((r = e.isCategory ? (e.values.length - 1) / 2 : (e.min + e.max) / 2),
								  (n = e.scale(r)))
								: ((r = e.isCategory ? ('min' === t ? 0 : e.values.length - 1) : e[t]),
								  (n = e.scale(r)));
						} else n = e.scale(t);
						return n;
					}),
					(t.prototype.parsePoint = function(t, e) {
						var n = this,
							r = n.xScales,
							a = n.yScales;
						o.isFunction(e) && (e = e(r, a));
						var s = void 0,
							u = void 0;
						if (o.isArray(e) && o.isString(e[0]) && -1 !== e[0].indexOf('%'))
							return this.parsePercentPoint(t, e);
						if (o.isArray(e))
							(s = n._getNormalizedValue(e[0], i(r))), (u = n._getNormalizedValue(e[1], i(a)));
						else
							for (var c in e) {
								var l = e[c];
								r[c] && (s = n._getNormalizedValue(l, r[c])),
									a[c] && (u = n._getNormalizedValue(l, a[c]));
							}
						return o.isNil(s) || o.isNil(u) ? void 0 : t.convert({ x: s, y: u });
					}),
					(t.prototype.parsePercentPoint = function(t, e) {
						var n = parseFloat(e[0]) / 100,
							r = parseFloat(e[1]) / 100,
							i = t.start,
							o = t.end,
							a = { x: Math.min(i.x, o.x), y: Math.min(i.y, o.y) };
						return { x: t.width * n + a.x, y: t.height * r + a.y };
					}),
					(t.prototype.setVisible = function(t) {
						var e = this.el;
						e && (e.set ? e.set('visible', t) : (e.style.display = t ? '' : 'none'));
					}),
					(t.prototype.render = function() {}),
					(t.prototype.remove = function() {
						var t = this,
							e = t.el;
						e && e.remove();
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!t.length) return [];
				for (var n = [], r = 0, i = t.length; i > r; r++) {
					var o = t[r];
					n.push(0 === r ? ['M', o.x, o.y] : ['L', o.x, o.y]);
				}
				return e && n.push(['Z']), n;
			}
			function i(t, e) {
				var n = t.getCenter();
				return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
			}
			function o(t, e) {
				for (var n = t.length, r = [t[0]], i = 1; n > i; i += 2) {
					var o = e.convertPoint({ x: t[i], y: t[i + 1] });
					r.push(o.x, o.y);
				}
				return r;
			}
			function a(t, e, n) {
				var r = n.isTransposed,
					o = n.startAngle,
					a = n.endAngle,
					s = { x: t[1], y: t[2] },
					u = { x: e[1], y: e[2] },
					c = [],
					l = r ? 'y' : 'x',
					f = Math.abs(u[l] - s[l]) * (a - o),
					h = s[l] > u[l] ? 0 : 1,
					p = f > Math.PI ? 1 : 0,
					d = n.convertPoint(u),
					g = i(n, d);
				if (g >= 0.5)
					if (f === 2 * Math.PI) {
						var y = { x: (u.x + s.x) / 2, y: (u.y + s.y) / 2 },
							v = n.convertPoint(y);
						c.push(['A', g, g, 0, p, h, v.x, v.y]), c.push(['A', g, g, 0, p, h, d.x, d.y]);
					} else c.push(['A', g, g, 0, p, h, d.x, d.y]);
				return c;
			}
			function s(t) {
				u.each(t, function(e, n) {
					if ('a' === e[0].toLowerCase()) {
						var r = t[n - 1],
							i = t[n + 1];
						i && 'a' === i[0].toLowerCase()
							? r && 'l' === r[0].toLowerCase() && (r[0] = 'M')
							: r && 'a' === r[0].toLowerCase() && i && 'l' === i[0].toLowerCase() && (i[0] = 'M');
					}
				});
			}
			var u = n(0),
				c = n(214),
				l = {
					getLinePath: function(t, e) {
						return r(t, e);
					},
					getSplinePath: function(t, e, n) {
						var r = [],
							i = t[0],
							o = null;
						if (2 >= t.length) return l.getLinePath(t, e);
						u.each(t, function(t) {
							(o && o.x === t.x && o.y === t.y) || (r.push(t.x), r.push(t.y), (o = t));
						}),
							(n = n || [[0, 0], [1, 1]]);
						var a = c.catmullRom2bezier(r, e, n);
						return a.unshift(['M', i.x, i.y]), a;
					},
					getPointRadius: function(t, e) {
						return i(t, e);
					},
					getPointAngle: function(t, e) {
						var n = t.getCenter();
						return Math.atan2(e.y - n.y, e.x - n.x);
					},
					convertNormalPath: function(t, e) {
						var n = [];
						return (
							u.each(e, function(e) {
								switch (e[0].toLowerCase()) {
									case 'm':
									case 'l':
									case 'c':
										n.push(o(e, t));
										break;
									case 'z':
									default:
										n.push(e);
								}
							}),
							n
						);
					},
					convertPolarPath: function(t, e) {
						var n = [],
							r = void 0,
							i = void 0,
							c = void 0,
							l = void 0;
						return (
							u.each(e, function(s, u) {
								switch (s[0].toLowerCase()) {
									case 'm':
									case 'c':
									case 'q':
										n.push(o(s, t));
										break;
									case 'l':
										(r = e[u - 1]),
											(i = s),
											(c = t.isTransposed),
											(l = c ? r[r.length - 2] === i[1] : r[r.length - 1] === i[2]),
											l ? (n = n.concat(a(r, i, t))) : n.push(o(s, t));
										break;
									case 'z':
									default:
										n.push(s);
								}
							}),
							s(n),
							n
						);
					},
				};
			t.exports = l;
		},
		function(t, e, n) {
			'use strict';
			var r = n(49);
			n.d(e, 'a', function() {
				return r.a;
			}),
				n.d(e, 'f', function() {
					return r.h;
				}),
				n.d(e, 'e', function() {
					return r.g;
				});
			var i = n(246);
			n.d(e, 'd', function() {
				return i.b;
			}),
				n.d(e, 'c', function() {
					return i.a;
				});
			var o = n(245);
			n.d(e, 'b', function() {
				return o.a;
			});
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				return o.isString(e) ? e : t.invert(t.scale(e));
			}
			var o = n(0);
			t.exports = (function() {
				function t(e) {
					r(this, t),
						(this.type = 'base'),
						(this.name = null),
						(this.method = null),
						(this.values = []),
						(this.scales = []),
						(this.linear = null),
						o.mix(this, e);
				}
				return (
					(t.prototype.get = function(t) {
						return this[t];
					}),
					(t.prototype.set = function(t, e) {
						this[t] = e;
					}),
					(t.prototype._getAttrValue = function(t, e) {
						var n = this.values;
						if (t.isCategory && !this.linear) {
							return n[t.translate(e) % n.length];
						}
						return this.getLinearValue(t.scale(e));
					}),
					(t.prototype.getLinearValue = function(t) {
						var e = this.values,
							n = e.length - 1,
							r = Math.floor(n * t),
							i = n * t - r,
							o = e[r];
						return o + ((r === n ? o : e[r + 1]) - o) * i;
					}),
					(t.prototype.callback = function(t) {
						var e = this,
							n = e.scales[0];
						return 'identity' === n.type ? n.value : e._getAttrValue(n, t);
					}),
					(t.prototype.getNames = function() {
						for (
							var t = this.scales, e = this.names, n = Math.min(t.length, e.length), r = [], i = 0;
							n > i;
							i++
						)
							r.push(e[i]);
						return r;
					}),
					(t.prototype.getFields = function() {
						var t = this.scales,
							e = [];
						return (
							o.each(t, function(t) {
								e.push(t.field);
							}),
							e
						);
					}),
					(t.prototype.getScale = function(t) {
						return this.scales[this.names.indexOf(t)];
					}),
					(t.prototype.mapping = function() {
						for (
							var t = this.scales, e = this.callback, n = arguments.length, r = Array(n), i = 0;
							n > i;
							i++
						)
							r[i] = arguments[i];
						var a = r;
						if (e) {
							for (var s = 0; r.length > s; s++) r[s] = this._toOriginParam(r[s], t[s]);
							a = e.apply(this, r);
						}
						return o.isArray(a) || (a = [a]), a;
					}),
					(t.prototype._toOriginParam = function(t, e) {
						var n = t;
						if (!e.isLinear)
							if (o.isArray(t)) {
								n = [];
								for (var r = 0; t.length > r; r++) n.push(i(e, t[r]));
							} else n = i(e, t);
						return n;
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t) {
				return 'function' == typeof t
					? t
					: null == t
						? a
						: 'object' == typeof t
							? s(t)
								? o(t[0], t[1])
								: i(t)
							: u(t);
			}
			var i = n(360),
				o = n(361),
				a = n(134),
				s = n(3),
				u = n(435);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			var i = n(0);
			t.exports = (function() {
				function t(e) {
					r(this, t);
					var n = this.getDefaultCfg();
					i.assign(this, n, e);
				}
				return (
					(t.prototype.getDefaultCfg = function() {
						return { xField: null, yField: null, adjustNames: ['x', 'y'], groupFields: null };
					}),
					(t.prototype.isAdjust = function(t) {
						return this.adjustNames.indexOf(t) >= 0;
					}),
					(t.prototype.processAdjust = function(t) {
						var e = this,
							n = i.Array.merge(t);
						(e.adjDataArray = t),
							(e.mergeData = n),
							e.adjustData(t, n),
							(e.adjFrames = null),
							(e.mergeData = null);
					}),
					(t.prototype._getDimValues = function(t) {
						var e = this,
							n = {},
							r = [];
						if (
							(e.xField && e.isAdjust('x') && r.push(e.xField),
							e.yField && e.isAdjust('y') && r.push(e.yField),
							i.each(r, function(e) {
								var r = i.Array.values(t, e);
								r.sort(function(t, e) {
									return t - e;
								}),
									(n[e] = r);
							}),
							!e.yField && e.isAdjust('y'))
						) {
							n.y = [0, 1];
						}
						return n;
					}),
					(t.prototype.adjustData = function(t, e) {
						var n = this,
							r = n._getDimValues(e);
						i.each(t, function(e, o) {
							i.each(r, function(r, i) {
								n.adjustDim(i, r, e, t.length, o);
							});
						});
					}),
					(t.prototype.adjustDim = function() {}),
					(t.prototype.getAdjustRange = function(t, e, n) {
						var r = this,
							i = n.indexOf(e),
							o = n.length,
							a = void 0,
							s = void 0;
						return (
							!r.yField && r.isAdjust('y')
								? ((a = 0), (s = 1))
								: o > 1
									? ((a = 0 === i ? n[0] : n[i - 1]),
									  (s = i === o - 1 ? n[o - 1] : n[i + 1]),
									  0 !== i ? (a += (e - a) / 2) : (a -= (s - e) / 2),
									  i !== o - 1 ? (s -= (s - e) / 2) : (s += (e - n[o - 2]) / 2))
									: ((a = 0 === e ? 0 : e - 0.5), (s = 0 === e ? 1 : e + 0.5)),
							{ pre: a, next: s }
						);
					}),
					(t.prototype.groupData = function(t, e) {
						var n = {};
						return (
							i.each(t, function(t) {
								var r = t[e];
								void 0 === r && (r = t[e] = 0), n[r] || (n[r] = []), n[r].push(t);
							}),
							n
						);
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t !== t && e !== e;
			}
			function i(t) {
				return a.Util.isArray(t) ? t.length : a.Util.isObject(t) ? Object.keys(t).length : 0;
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var o =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function(t) {
								return typeof t;
						  }
						: function(t) {
								return t &&
									'function' == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  },
				a = n(45);
			e.default = a.Util.mix({}, a.Util, {
				shallowEqual: function(t, e) {
					if (r(t, e)) return !0;
					if (
						'object' !== (void 0 === t ? 'undefined' : o(t)) ||
						null === t ||
						'object' !== (void 0 === e ? 'undefined' : o(e)) ||
						null === e
					)
						return !1;
					if (a.Util.isArray(t) !== a.Util.isArray(e)) return !1;
					if (i(t) !== i(e)) return !1;
					var n = !0;
					return (
						a.Util.each(t, function(t, i) {
							return !!r(t, e[i]) || (n = !1);
						}),
						n
					);
				},
				without: function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
						n = {};
					return (
						a.Util.each(t, function(t, r) {
							-1 === a.Util.indexOf(e, r) && (n[r] = t);
						}),
						n
					);
				},
				length: i,
			});
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				return function(n) {
					return t + n * e;
				};
			}
			function i(t, e, n) {
				return (
					(t = Math.pow(t, n)),
					(e = Math.pow(e, n) - t),
					(n = 1 / n),
					function(r) {
						return Math.pow(t + r * e, n);
					}
				);
			}
			function o(t, e) {
				var i = e - t;
				return i
					? r(t, i > 180 || -180 > i ? i - 360 * Math.round(i / 360) : i)
					: n.i(u.a)(isNaN(t) ? e : t);
			}
			function a(t) {
				return 1 == (t = +t)
					? s
					: function(e, r) {
							return r - e ? i(e, r, t) : n.i(u.a)(isNaN(e) ? r : e);
					  };
			}
			function s(t, e) {
				var i = e - t;
				return i ? r(t, i) : n.i(u.a)(isNaN(t) ? e : t);
			}
			(e.b = o), (e.c = a), (e.a = s);
			var u = n(107);
		},
		function(t, e) {
			function n(t) {
				return t;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				var e = typeof t;
				return null != t && ('object' == e || 'function' == e);
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				return null != t && 'object' == typeof t;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				return t;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(76),
				u = s.LabelsRenderer,
				c = n(2),
				l = c.Group,
				f = n(157),
				h = n(1),
				p = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							return {
								_id: null,
								zIndex: 4,
								ticks: null,
								line: null,
								tickLine: null,
								subTickCount: 0,
								subTickLine: null,
								grid: null,
								label: { textStyle: {}, autoRotate: !0, formatter: null },
								title: { autoRotate: !0, textStyle: {} },
								autoPaint: !0,
								alignWithLabel: !1,
							};
						}),
						(e.prototype._beforeRenderUI = function() {
							var t = this.get('title'),
								e = this.get('label'),
								n = this.get('grid');
							t &&
								this.setSilent(
									'title',
									a.deepMix(
										{
											autoRotate: !0,
											textStyle: {
												fontSize: 12,
												fill: '#ccc',
												textBaseline: 'middle',
												fontFamily: h.fontFamily,
												textAlign: 'center',
											},
											offset: 48,
										},
										t
									)
								),
								e &&
									this.setSilent(
										'label',
										a.deepMix(
											{
												autoRotate: !0,
												textStyle: {
													fontSize: 12,
													fill: '#ccc',
													textBaseline: 'middle',
													fontFamily: h.fontFamily,
												},
												offset: 10,
											},
											e
										)
									),
								n &&
									this.setSilent(
										'grid',
										a.deepMix({ lineStyle: { lineWidth: 1, stroke: '#C0D0E0' } }, n)
									);
						}),
						(e.prototype._renderUI = function() {
							this.get('label') && this.renderLabels(),
								this.get('autoPaint') && this.paint(),
								a.isNil(this.get('title')) || this.renderTitle(),
								this.sort();
						}),
						(e.prototype._parseTicks = function(t) {
							t = t || [];
							for (var e = t.length, n = 0; e > n; n++) {
								var r = t[n];
								a.isObject(r) || (t[n] = this.parseTick(r, n, e));
							}
							return this.set('ticks', t), t;
						}),
						(e.prototype._addTickItem = function(t, e, n) {
							var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '',
								i = this.get('tickItems'),
								o = this.get('subTickItems'),
								a = this.getTickEnd(e, n, t),
								s = { x1: e.x, y1: e.y, x2: a.x, y2: a.y };
							i || (i = []),
								o || (o = []),
								'sub' === r ? o.push(s) : i.push(s),
								this.set('tickItems', i),
								this.set('subTickItems', o);
						}),
						(e.prototype._renderLine = function() {
							var t = this.get('line'),
								e = void 0;
							if (t) {
								(e = this.getLinePath()), (t = a.mix({ path: e }, t));
								var n = this.addShape('path', { attrs: t });
								(n.name = 'axis-line'),
									this.get('appendInfo') && n.setSilent('appendInfo', this.get('appendInfo')),
									this.set('lineShape', n);
							}
						}),
						(e.prototype._processCatTicks = function() {
							var t = this,
								e = t.get('label'),
								n = t.get('tickLine'),
								r = t.get('ticks');
							r = t._parseTicks(r);
							var i = 0;
							r.length > 1 && (i = (r[1].value - r[0].value) / 2),
								a.each(r, function(r, o) {
									var a = t.getTickPoint(r.value, o),
										s = t.getTickPoint(r.value - i, o),
										u = t.getTickPoint(r.value + i, o);
									n && (t._addTickItem(o, s, n.length), t._addTickItem(o, u, n.length)),
										e && t.addLabel(r, a, o);
								});
						}),
						(e.prototype._processTicks = function() {
							var t = this,
								e = t.get('label'),
								n = t.get('subTickCount'),
								r = t.get('tickLine'),
								i = t.get('ticks');
							if (
								((i = t._parseTicks(i)),
								a.each(i, function(n, i) {
									var o = t.getTickPoint(n.value, i);
									r && t._addTickItem(i, o, r.length), e && t.addLabel(n, o, i);
								}),
								n)
							) {
								var o = t.get('subTickLine');
								a.each(i, function(e, a) {
									if (a > 0) {
										var s = e.value - i[a - 1].value;
										s /= t.get('subTickCount') + 1;
										for (var u = 1; n >= u; u++) {
											var c = { text: '', value: a ? i[a - 1].value + u * s : u * s },
												l = t.getTickPoint(c.value),
												f = void 0;
											(f = o && o.length ? o.length : parseInt(0.6 * r.length, 10)),
												t._addTickItem(u - 1, l, f, 'sub');
										}
									}
								});
							}
						}),
						(e.prototype._addTickLine = function(t, e) {
							var n = this,
								r = a.mix({}, e),
								i = [];
							a.each(t, function(t) {
								i.push(['M', t.x1, t.y1]), i.push(['L', t.x2, t.y2]);
							}),
								delete r.length,
								(r.path = i);
							var o = n.addShape('path', { attrs: r });
							(o.name = 'axis-ticks'),
								(o._id = n.get('_id') + '-ticks'),
								o.set('coord', n.get('coord')),
								n.get('appendInfo') && o.setSilent('appendInfo', n.get('appendInfo'));
						}),
						(e.prototype._renderTicks = function() {
							var t = this,
								e = t.get('tickItems'),
								n = t.get('subTickItems');
							if (!a.isEmpty(e)) {
								t._addTickLine(e, t.get('tickLine'));
							}
							if (!a.isEmpty(n)) {
								t._addTickLine(n, t.get('subTickLine') || t.get('tickLine'));
							}
						}),
						(e.prototype._renderGrid = function() {
							var t = this.get('grid');
							t &&
								((t.coord = this.get('coord')),
								(t.appendInfo = this.get('appendInfo')),
								this.set('gridGroup', this.addGroup(f, t)));
						}),
						(e.prototype.paint = function() {
							this._renderLine();
							var t = this.get('type');
							'cat' === t || 'timecat' === t ? this._processCatTicks() : this._processTicks(),
								this._renderTicks(),
								this._renderGrid();
							var e = this.get('label');
							e && e.autoRotate && this.autoRotateLabels();
						}),
						(e.prototype.parseTick = function(t, e, n) {
							return { text: t, value: e / (n - 1) };
						}),
						(e.prototype.getTextAnchor = function(t) {
							var e = Math.abs(t[1] / t[0]);
							return 1 > e ? (t[0] > 0 ? 'start' : 'end') : 'center';
						}),
						(e.prototype.getMaxLabelWidth = function(t) {
							var e = t.get('children'),
								n = 0;
							return (
								a.each(e, function(t) {
									var e = t.getBBox(),
										r = e.width;
									r > n && (n = r);
								}),
								n
							);
						}),
						(e.prototype.remove = function() {
							t.prototype.remove.call(this);
							var e = this.get('gridGroup');
							e && e.remove(), this.removeLabels();
						}),
						(e.prototype.autoRotateLabels = function() {}),
						(e.prototype.renderTitle = function() {}),
						(e.prototype.getLinePath = function() {}),
						(e.prototype.getTickPoint = function() {}),
						(e.prototype.getTickEnd = function() {}),
						(e.prototype.getSideVector = function() {}),
						e
					);
				})(l);
			a.assign(p.prototype, u, {
				addLabel: function(t, e, n) {
					var r = this.get('labelsGroup'),
						i = {},
						o = void 0;
					if (r) {
						var s = this.get('_labelOffset');
						a.isNil(this.get('label').offset) || (s = this.get('label').offset);
						var u = this.getSideVector(s, e, n);
						(e = { x: e.x + u[0], y: e.y + u[1] }),
							(i.text = t.text),
							(i.x = e.x),
							(i.y = e.y),
							(i.textAlign = this.getTextAnchor(u)),
							(o = r.addLabel(i)),
							o &&
								((o.name = 'axis-label'),
								(o._id = this.get('_id') + '-' + t.tickValue),
								o.set('coord', this.get('coord')),
								this.get('appendInfo') && o.setSilent('appendInfo', this.get('appendInfo')));
					}
					return o;
				},
			}),
				(t.exports = p);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			var i = n(0),
				o = n(2).MatrixUtil,
				a = o.mat3,
				s = o.vec3;
			t.exports = (function() {
				function t(e) {
					r(this, t);
					var n = this.getDefaultCfg();
					i.mix(this, n, e), this.init();
				}
				return (
					(t.prototype.getDefaultCfg = function() {
						return { isTransposed: !1, matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1] };
					}),
					(t.prototype.init = function() {
						var t = this.start,
							e = this.end;
						(this.center = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 }),
							(this.width = Math.abs(e.x - t.x)),
							(this.height = Math.abs(e.y - t.y));
					}),
					(t.prototype._swapDim = function(t) {
						var e = this[t];
						if (e) {
							var n = e.start;
							(e.start = e.end), (e.end = n);
						}
					}),
					(t.prototype.getCenter = function() {
						return this.center;
					}),
					(t.prototype.getWidth = function() {
						return this.width;
					}),
					(t.prototype.getHeight = function() {
						return this.height;
					}),
					(t.prototype.convertDim = function(t, e) {
						var n = this[e],
							r = n.start;
						return r + t * (n.end - r);
					}),
					(t.prototype.invertDim = function(t, e) {
						var n = this[e],
							r = n.start;
						return (t - r) / (n.end - r);
					}),
					(t.prototype.convertPoint = function(t) {
						return t;
					}),
					(t.prototype.invertPoint = function(t) {
						return t;
					}),
					(t.prototype.applyMatrix = function(t, e) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
							r = this.matrix,
							i = [t, e, n];
						return s.transformMat3(i, i, r), i;
					}),
					(t.prototype.invertMatrix = function(t, e) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
							r = this.matrix,
							i = a.invert([], r),
							o = [t, e, n];
						return s.transformMat3(o, o, i), o;
					}),
					(t.prototype.convert = function(t) {
						var e = this.convertPoint(t),
							n = e.x,
							r = e.y,
							i = this.applyMatrix(n, r, 1);
						return { x: i[0], y: i[1] };
					}),
					(t.prototype.invert = function(t) {
						var e = this.invertMatrix(t.x, t.y, 1);
						return this.invertPoint({ x: e[0], y: e[1] });
					}),
					(t.prototype.rotate = function(t) {
						var e = this.matrix,
							n = this.center;
						return (
							a.translate(e, e, [-n.x, -n.y]),
							a.rotate(e, e, t),
							a.translate(e, e, [n.x, n.y]),
							this
						);
					}),
					(t.prototype.reflect = function(t) {
						switch (t) {
							case 'x':
								this._swapDim('x');
								break;
							case 'y':
								this._swapDim('y');
								break;
							default:
								this._swapDim('y');
						}
						return this;
					}),
					(t.prototype.scale = function(t, e) {
						var n = this.matrix,
							r = this.center;
						return (
							a.translate(n, n, [-r.x, -r.y]),
							a.scale(n, n, [t, e]),
							a.translate(n, n, [r.x, r.y]),
							this
						);
					}),
					(t.prototype.translate = function(t, e) {
						var n = this.matrix;
						return a.translate(n, n, [t, e]), this;
					}),
					(t.prototype.transpose = function() {
						return (this.isTransposed = !this.isTransposed), this;
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			var i = n(1),
				o = n(0),
				a = o.assign,
				s = o.isNil,
				u = o.isArray,
				c = o.cloneDeep,
				l = o.wrapBehavior,
				f = o.getWrapBehavior;
			t.exports = (function() {
				function t(e) {
					r(this, t);
					var n = this.getDefaultCfg();
					a(this, n, e), this.init();
				}
				return (
					(t.prototype.getDefaultCfg = function() {
						return {
							chart: null,
							group: null,
							showTitle: !0,
							autoSetAxis: !0,
							padding: 10,
							eachView: null,
							fields: [],
							colTitle: {
								offsetY: -15,
								style: {
									fontSize: 14,
									textAlign: 'center',
									fill: '#666',
									fontFamily: i.fontFamily,
								},
							},
							rowTitle: {
								offsetX: 15,
								style: {
									fontSize: 14,
									textAlign: 'center',
									rotate: 90,
									fill: '#666',
									fontFamily: i.fontFamily,
								},
							},
						};
					}),
					(t.prototype.init = function() {
						if (!this.chart) throw Error('Facets Error: please specify the chart!');
						this._bindEvent(), this.initContainer(), this.chart.get('data') && this.initViews();
					}),
					(t.prototype.initContainer = function() {
						this.group = this.chart.get('frontPlot').addGroup();
					}),
					(t.prototype.initViews = function() {
						for (
							var t = this.chart,
								e = t.get('data'),
								n = this.eachView,
								r = this.generateFacets(e),
								i = 0;
							r.length > i;
							i++
						) {
							var o = r[i],
								a = o.region,
								s = t.view({ start: a.start, end: a.end, padding: this.padding });
							s.source(o.data),
								this.beforeProcessView(s, o),
								n && n(s, o),
								this.afterProcessView(s, o),
								(o.view = s);
						}
						this.facets = r;
					}),
					(t.prototype.beforeProcessView = function() {}),
					(t.prototype.afterProcessView = function(t, e) {
						this.autoSetAxis && this.processAxis(t, e);
					}),
					(t.prototype.processAxis = function(t, e) {
						var n = t.get('options'),
							r = t.get('geoms');
						if ((!n.coord.type || 'rect' === n.coord.type) && r.length) {
							var i = r[0].get('attrOptions').position.field,
								o = u(i)
									? i
									: i.split('*').map(function(t) {
											return t.trim();
									  }),
								a = o[0],
								c = o[1];
							s(n.axes) && (n.axes = {});
							var l = n.axes;
							!1 !== l &&
								(a && !1 !== l[a] && ((l[a] = l[a] || {}), this.setXAxis(a, l, e)),
								c && !1 !== l[c] && ((l[c] = l[c] || {}), this.setYAxis(c, l, e)));
						}
					}),
					(t.prototype.setXAxis = function() {}),
					(t.prototype.setYAxis = function() {}),
					(t.prototype.renderTitle = function(t, e) {
						this.drawColTitle(t, e);
					}),
					(t.prototype.getScaleText = function(t, e, n) {
						var r = void 0;
						if (t) {
							var i = n.get('scales'),
								o = i[t];
							o || (o = n.createScale(t)), (r = o.getText(e));
						} else r = e;
						return r;
					}),
					(t.prototype.drawColTitle = function(t, e) {
						var n = this.getScaleText(e.colField, e.colValue, t),
							r = a({ position: ['50%', '0%'], content: n }, this.colTitle);
						t.guide().text(r);
					}),
					(t.prototype.drawRowTitle = function(t, e) {
						var n = this.getScaleText(e.rowField, e.rowValue, t),
							r = a({ position: ['100%', '50%'], content: n }, c(this.rowTitle));
						t.guide().text(r);
					}),
					(t.prototype.getFilter = function(t) {
						return function(e) {
							var n = !0;
							return (
								t.forEach(function(t) {
									var r = t.field,
										i = t.value,
										o = !0;
									!s(i) && r && (o = e[r] === i), (n = n && o);
								}),
								n
							);
						};
					}),
					(t.prototype.getFieldValues = function(t, e) {
						for (var n = [], r = {}, i = 0; e.length > i; i++) {
							var o = e[i],
								a = o[t];
							s(a) || r[a] || (n.push(a), (r[a] = !0));
						}
						return n;
					}),
					(t.prototype.getRegion = function(t, e, n, r) {
						var i = 1 / e,
							o = 1 / t,
							a = { x: i * n, y: o * r };
						return { start: a, end: { x: a.x + i, y: a.y + o } };
					}),
					(t.prototype.generateFacets = function() {
						return [];
					}),
					(t.prototype._bindEvent = function() {
						var t = this.chart;
						t.on('afterchangedata', l(this, 'onDataChange')),
							t.on('beforeclear', l(this, 'onClear')),
							t.on('beforedestroy', l(this, 'destroy')),
							t.on('beforepaint', l(this, 'onPaint')),
							t.on('setdata', l(this, 'onDataChange'));
					}),
					(t.prototype._clearEvent = function() {
						var t = this.chart;
						t &&
							(t.off('afterchangedata', f(this, 'onDataChange')),
							t.off('beforeclear', f(this, 'onClear')),
							t.off('beforedestroy', f(this, 'destroy')),
							t.off('beforepaint', f(this, 'onPaint')),
							t.off('setdata', f(this, 'onDataChange')));
					}),
					(t.prototype._clearFacets = function() {
						var t = this.facets,
							e = this.chart;
						if (t)
							for (var n = 0; t.length > n; n++) {
								var r = t[n];
								e.removeView(r.view);
							}
						this.facets = null;
					}),
					(t.prototype.onClear = function() {
						this.onRemove();
					}),
					(t.prototype.onPaint = function() {
						if (this.showTitle)
							for (var t = this.facets, e = 0; t.length > e; e++) {
								var n = t[e],
									r = n.view;
								this.renderTitle(r, n);
							}
					}),
					(t.prototype.onDataChange = function() {
						this._clearFacets(), this.initViews();
					}),
					(t.prototype.onRemove = function() {
						this._clearFacets(),
							this._clearEvent(),
							this.group && this.group.remove(),
							(this.chart = null),
							(this.facets = null),
							(this.group = null);
					}),
					(t.prototype.destroy = function() {
						this.onRemove(), (this.destroyed = !0);
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			var i = n(0);
			t.exports = (function() {
				function t(e) {
					r(this, t);
					var n = this.getDefaultCfg();
					i.mix(this, n, e), this.init();
				}
				return (
					(t.prototype.getDefaultCfg = function() {
						return { type: 'base', formatter: null, range: [0, 1], ticks: null, values: [] };
					}),
					(t.prototype.init = function() {}),
					(t.prototype.getTicks = function() {
						var t = this,
							e = t.ticks,
							n = [];
						return (
							i.each(e, function(e) {
								var r = void 0;
								(r = i.isObject(e) ? e : { text: t.getText(e), tickValue: e, value: t.scale(e) }),
									n.push(r);
							}),
							n
						);
					}),
					(t.prototype.getText = function(t) {
						var e = this.formatter;
						return (t = e ? e(t) : t), (!i.isNil(t) && t.toString) || (t = ''), '' + t;
					}),
					(t.prototype.rangeMin = function() {
						return this.range[0];
					}),
					(t.prototype.rangeMax = function() {
						var t = this.range;
						return t[t.length - 1];
					}),
					(t.prototype.invert = function(t) {
						return t;
					}),
					(t.prototype.translate = function(t) {
						return t;
					}),
					(t.prototype.scale = function(t) {
						return t;
					}),
					(t.prototype.clone = function() {
						var t = this,
							e = t.constructor,
							n = {};
						return (
							i.each(t, function(e, r) {
								n[r] = t[r];
							}),
							new e(n)
						);
					}),
					(t.prototype.change = function(t) {
						return (this.ticks = null), i.mix(this, t), this.init(), this;
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(27),
				s = n(0),
				u = n(216);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return s.mix({}, e, {
							type: 'linear',
							isLinear: !0,
							min: null,
							minLimit: null,
							max: null,
							maxLimit: null,
							nice: !1,
							tickCount: null,
							tickInterval: null,
							snapArray: null,
						});
					}),
					(e.prototype.init = function() {
						var t = this;
						if (t.ticks) {
							var e = t.ticks,
								n = t.translate(e[0]),
								r = t.translate(e[e.length - 1]);
							(s.isNil(t.min) || t.min > n) && (t.min = n),
								(s.isNil(t.max) || r > t.max) && (t.max = r);
						} else (t.min = t.translate(t.min)), (t.max = t.translate(t.max)), t.initTicks();
					}),
					(e.prototype.calculateTicks = function() {
						var t = this,
							e = t.min,
							n = t.max,
							r = t.tickCount,
							i = t.tickInterval;
						if (e > n) throw Error('max: ' + n + ' should not be less than min: ' + e);
						return u({
							min: e,
							max: n,
							minLimit: t.minLimit,
							maxLimit: t.maxLimit,
							minCount: r,
							maxCount: r,
							interval: i,
							snapArray: this.snapArray,
						}).ticks;
					}),
					(e.prototype.initTicks = function() {
						var t = this,
							e = t.calculateTicks();
						if (t.nice) (t.ticks = e), (t.min = e[0]), (t.max = e[e.length - 1]);
						else {
							var n = [];
							s.each(e, function(e) {
								t.min > e || e > t.max || n.push(e);
							}),
								n.length || (n.push(t.min), n.push(t.max)),
								(t.ticks = n);
						}
					}),
					(e.prototype.scale = function(t) {
						if (null === t || void 0 === t) return NaN;
						var e = this.max,
							n = this.min;
						if (e === n) return 0;
						var r = (t - n) / (e - n),
							i = this.rangeMin();
						return i + r * (this.rangeMax() - i);
					}),
					(e.prototype.invert = function(t) {
						return (
							this.min +
							((t - this.rangeMin()) / (this.rangeMax() - this.rangeMin())) * (this.max - this.min)
						);
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function() {
					var e = this.ownerDocument,
						n = this.namespaceURI;
					return n === a.b && e.documentElement.namespaceURI === a.b
						? e.createElement(t)
						: e.createElementNS(n, t);
				};
			}
			function i(t) {
				return function() {
					return this.ownerDocument.createElementNS(t.space, t.local);
				};
			}
			var o = n(51),
				a = n(52);
			e.a = function(t) {
				var e = n.i(o.a)(t);
				return (e.local ? i : r)(e);
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function(t, e) {
				var n = t.ownerSVGElement || t;
				if (n.createSVGPoint) {
					var r = n.createSVGPoint();
					return (
						(r.x = e.clientX),
						(r.y = e.clientY),
						(r = r.matrixTransform(t.getScreenCTM().inverse())),
						[r.x, r.y]
					);
				}
				var i = t.getBoundingClientRect();
				return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function(t, e) {
				return (
					(t = +t),
					(e -= t),
					function(n) {
						return t + e * n;
					}
				);
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				var r, i;
				return function() {
					var o = n.i(a.e)(this, t),
						s = o.tween;
					if (s !== r) {
						i = r = s;
						for (var u = 0, c = i.length; c > u; ++u)
							if (i[u].name === e) {
								(i = i.slice()), i.splice(u, 1);
								break;
							}
					}
					o.tween = i;
				};
			}
			function i(t, e, r) {
				var i, o;
				if ('function' != typeof r) throw Error();
				return function() {
					var s = n.i(a.e)(this, t),
						u = s.tween;
					if (u !== i) {
						o = (i = u).slice();
						for (var c = { name: e, value: r }, l = 0, f = o.length; f > l; ++l)
							if (o[l].name === e) {
								o[l] = c;
								break;
							}
						l === f && o.push(c);
					}
					s.tween = o;
				};
			}
			function o(t, e, r) {
				var i = t._id;
				return (
					t.each(function() {
						var t = n.i(a.e)(this, i);
						(t.value || (t.value = {}))[e] = r.apply(this, arguments);
					}),
					function(t) {
						return n.i(a.f)(t, i).value[e];
					}
				);
			}
			e.b = o;
			var a = n(7);
			e.a = function(t, e) {
				var o = this._id;
				if (((t += ''), 2 > arguments.length)) {
					for (var s, u = n.i(a.f)(this.node(), o).tween, c = 0, l = u.length; l > c; ++c)
						if ((s = u[c]).name === t) return s.value;
					return null;
				}
				return this.each((null == e ? r : i)(o, t, e));
			};
		},
		function(t, e, n) {
			function r(t, e) {
				for (var n = t.length; n--; ) if (i(t[n][0], e)) return n;
				return -1;
			}
			var i = n(131);
			t.exports = r;
		},
		function(t, e, n) {
			var r = n(351);
			t.exports = n(377)(r);
		},
		function(t, e) {
			function n(t) {
				return i.call(t);
			}
			var r = Object.prototype,
				i = r.toString;
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e) {
				return i(t) ? t : o(t, e) ? [t] : a(s(t));
			}
			var i = n(3),
				o = n(68),
				a = n(408),
				s = n(23);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n, r) {
				var a = !n;
				n || (n = {});
				for (var s = -1, u = e.length; ++s < u; ) {
					var c = e[s],
						l = r ? r(n[c], t[c], c, n, t) : void 0;
					void 0 === l && (l = t[c]), a ? o(n, c, l) : i(n, c, l);
				}
				return n;
			}
			var i = n(62),
				o = n(63);
			t.exports = r;
		},
		function(t, e) {
			function n(t, e) {
				return function(n) {
					return t(e(n));
				};
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				return null != t && o(t.length) && !i(t);
			}
			var i = n(422),
				o = n(135);
			t.exports = r;
		},
		function(t, e, n) {
			t.exports = n(38)(Object.keys, Object);
		},
		function(t, e, n) {
			'use strict';
			t.exports = n(447);
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			var i = n(45),
				o = r(i),
				a = n(18),
				s = r(a),
				u = n(244),
				c = r(u),
				l = n(238),
				f = (function(t) {
					if (t && t.__esModule) return t;
					var e = {};
					if (null != t)
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					return (e.default = t), e;
				})(l),
				h = s.default.mix(f, {
					G2: o.default,
					Util: s.default,
					Shape: i.Shape,
					Animate: i.Animate,
					PathUtil: i.PathUtil,
					track: function() {
						o.default.track(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]);
					},
					setTheme: function(t) {
						var e = t;
						'string' == typeof t && c.default[t] && (e = c.default[t]),
							o.default.Global.setTheme(e);
					},
				});
			(e.default = h), (t.exports = h);
		},
		function(t, e, n) {
			function r() {
				var t = document.createElement('i');
				return (
					(t.title = 'Web Colour Picker'),
					(t.style.display = 'none'),
					document.body.appendChild(t),
					t
				);
			}
			function i(t, e, n, r) {
				return t[r] + (e[r] - t[r]) * n;
			}
			function o(t) {
				return '#' + a(t[0]) + a(t[1]) + a(t[2]);
			}
			function a(t) {
				return (t = Math.round(t)), (t = t.toString(16)), 1 === t.length && (t = '0' + t), t;
			}
			function s(t, e) {
				(!c.isNaN(e) && c.isNumber(e)) || (e = 0);
				var n = t.length - 1,
					r = Math.floor(n * e),
					a = n * e - r,
					s = t[r],
					u = r === n ? s : t[r + 1];
				return o([i(s, u, a, 0), i(s, u, a, 1), i(s, u, a, 2)]);
			}
			function u(t) {
				var e = [];
				return (
					e.push(parseInt(t.substr(1, 2), 16)),
					e.push(parseInt(t.substr(3, 2), 16)),
					e.push(parseInt(t.substr(5, 2), 16)),
					e
				);
			}
			var c = n(0),
				l = /rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,
				f = {},
				h = null,
				p = {
					toRGB: function(t) {
						if ('#' === t[0] && 7 === t.length) return t;
						h || (h = r());
						var e = void 0;
						if (f[t]) e = f[t];
						else {
							(h.style.color = t),
								(e = document.defaultView.getComputedStyle(h, '').getPropertyValue('color'));
							var n = l.exec(e);
							n.shift(), (e = o(n)), (f[t] = e);
						}
						return e;
					},
					rgb2arr: u,
					gradient: function(t) {
						var e = [];
						return (
							c.isString(t) && (t = t.split('-')),
							c.each(t, function(t) {
								-1 === t.indexOf('#') && (t = p.toRGB(t)), e.push(u(t));
							}),
							function(t) {
								return s(e, t);
							}
						);
					},
				};
			t.exports = p;
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(450),
				s = n(0);
			t.exports = (function(t) {
				function e(n) {
					r(this, e);
					var o = i(this, t.call(this)),
						a = { visible: !0 },
						u = o.getDefaultCfg();
					return (o._attrs = a), s.assign(a, u, n), o;
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						return {};
					}),
					(e.prototype.get = function(t) {
						return this._attrs[t];
					}),
					(e.prototype.set = function(t, e) {
						this._attrs[t] = e;
					}),
					(e.prototype.show = function() {
						this.get('visible') || (this.set('visible', !0), this.changeVisible(!0));
					}),
					(e.prototype.hide = function() {
						this.get('visible') && (this.set('visible', !1), this.changeVisible(!1));
					}),
					(e.prototype.changeVisible = function() {}),
					(e.prototype.destroy = function() {
						(this._attrs = {}), this.removeAllListeners(), (this.destroyed = !0);
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			var r = n(2),
				i = n(72),
				o = n(74),
				a = n(1),
				s = n(91),
				u = n(5),
				c = n(0),
				l = {
					version: a.version,
					Animate: i,
					Chart: o,
					Global: a,
					Scale: s,
					Shape: u,
					Util: c,
					G: r,
					DomUtil: r.DomUtil,
					MatrixUtil: r.MatrixUtil,
					PathUtil: r.PathUtil,
				};
			(l.track = function(t) {
				a.trackable = t;
			}),
				n(225),
				'undefined' != typeof window &&
					(window.G2
						? console.warn(
								'There are multiple versions of G2. Version ' +
									l.version +
									"'s reference is 'window.G2_3'"
						  )
						: (window.G2 = l)),
				(t.exports = l);
		},
		function(t, e, n) {
			var r = n(0);
			t.exports = {
				splitPoints: function(t) {
					var e = [],
						n = t.x,
						i = t.y;
					return (
						(i = r.isArray(i) ? i : [i]),
						r.each(i, function(t, i) {
							var o = { x: r.isArray(n) ? n[i] : n, y: t };
							e.push(o);
						}),
						e
					);
				},
			};
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var r = {
				Chart: 'deleteChart',
				Coord: 'deleteCoord',
				Geom: 'deleteGeom',
				Axis: 'deleteAxis',
				Tooltip: 'deleteTooltip',
				Legend: 'deleteLegend',
				Label: 'deleteLabel',
				View: 'deleteView',
				Guide: 'deleteGuide',
				GuideLine: 'deleteTypedGuide',
				GuideImage: 'deleteTypedGuide',
				GuideText: 'deleteTypedGuide',
				GuideRegion: 'deleteTypedGuide',
				GuideHtml: 'deleteTypedGuide',
				GuideArc: 'deleteTypedGuide',
				Facet: 'deleteFacet',
			};
			e.default = {
				merge: function(t, e, n, r) {
					this.mergeDelete(t, e, n), this.mergeUpdate(t, r);
				},
				mergeDelete: function(t, e, n) {
					var i = this;
					Object.keys(e).forEach(function(e) {
						var o = r[n[e].name],
							a = t;
						n[e].viewId && (a = t.views[n[e].viewId]), i[o] && i[o](a, e, n[e].parentInfo.id);
					});
				},
				deleteAxis: function(t, e) {
					t && delete t.axises[e];
				},
				deleteTooltip: function(t) {
					t && delete t.tooltip;
				},
				deleteCoord: function(t) {
					t && delete t.coord;
				},
				deleteLegend: function(t, e) {
					t && delete t.legends[e];
				},
				deleteGuide: function(t) {
					t && delete t.guide;
				},
				deleteGeom: function(t, e) {
					t && t.geoms && delete t.geoms[e];
				},
				deleteLabel: function(t, e, n) {
					t && t.geoms && t.geoms[n] && delete t.geoms[n].label;
				},
				deleteFacet: function(t) {
					t && delete t.facet;
				},
				deleteTypedGuide: function(t, e) {
					t && t.guide && delete t.guide.elements[e];
				},
				deleteView: function(t, e) {
					t && delete t.views[e];
				},
				mergeUpdate: function(t, e) {
					this.mergeChart(t, e),
						this.mergeAxises(t, e),
						this.mergeCoord(t, e),
						this.mergeGeoms(t.geoms, e),
						this.mergeLegends(t.legends, e),
						this.mergeTooltip(t, e),
						this.mergeViews(t.views, e);
				},
				mergeChart: function(t, e) {
					t.chart && t.chart.updateProps && (t.chart.props = t.chart.updateProps),
						e && delete t.chart.g2Instance;
				},
				mergeAxises: function(t, e) {
					var n = t.axises;
					if (null != !n)
						for (var r in n)
							n[r] && n[r].updateProps && (n[r].props = n[r].updateProps),
								e && delete n[r].g2Instance;
				},
				mergeTooltip: function(t, e) {
					t.tooltip &&
						(e && delete t.tooltip.g2Instance,
						t.tooltip.updateProps && (t.tooltip.props = t.tooltip.updateProps));
				},
				mergeCoord: function(t, e) {
					t.coord &&
						(e && delete t.coord.g2Instance,
						t.coord.updateProps && (t.coord.props = t.coord.updateProps));
				},
				mergeLegends: function(t, e) {
					if (t)
						for (var n in t)
							if (t[n]) {
								var r = t[n];
								e && delete r.g2Instance, r.updateProps && (r.props = r.updateProps);
							}
				},
				mergeGeoms: function(t, e) {
					if (null != t)
						for (var n in t)
							t[n] &&
								(e &&
									(delete t[n].g2Instance,
									t[n].label && t[n].label.g2Instance && delete t[n].label.g2Instance),
								t[n].updateProps && (t[n].props = t[n].updateProps));
				},
				mergeGuide: function(t, e) {
					if (null != t) {
						var n = t.elements;
						for (var r in n)
							n[r] &&
								(e && delete n[r].g2Instance, n[r].updateProps && (n[r].props = n[r].updateProps));
					}
				},
				mergeView: function(t, e) {
					t &&
						(e && t.g2Instance && delete t.g2Instance,
						t.updateProps && (t.props = t.updateProps),
						this.mergeCoord(t, e),
						this.mergeAxises(t, e),
						this.mergeGeoms(t.geoms, e),
						this.mergeGuide(t.guide, e));
				},
				mergeViews: function(t, e) {
					if (null != t) for (var n in t) t[n] && this.mergeView(t[n], e);
				},
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.Prop = e.Util = void 0);
			var i = n(18),
				o = r(i),
				a = n(243),
				s = r(a);
			(e.Util = o.default), (e.Prop = s.default);
		},
		function(t, e, n) {
			'use strict';
			function r() {}
			function i(t) {
				var e;
				return (
					(t = (t + '').trim().toLowerCase()),
					(e = w.exec(t))
						? ((e = parseInt(e[1], 16)),
						  new c(
								((e >> 8) & 15) | ((e >> 4) & 240),
								((e >> 4) & 15) | (240 & e),
								((15 & e) << 4) | (15 & e),
								1
						  ))
						: (e = S.exec(t))
							? o(parseInt(e[1], 16))
							: (e = M.exec(t))
								? new c(e[1], e[2], e[3], 1)
								: (e = P.exec(t))
									? new c((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, 1)
									: (e = C.exec(t))
										? a(e[1], e[2], e[3], e[4])
										: (e = O.exec(t))
											? a((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
											: (e = A.exec(t))
												? f(e[1], e[2] / 100, e[3] / 100, 1)
												: (e = k.exec(t))
													? f(e[1], e[2] / 100, e[3] / 100, e[4])
													: I.hasOwnProperty(t)
														? o(I[t])
														: 'transparent' === t
															? new c(NaN, NaN, NaN, 0)
															: null
				);
			}
			function o(t) {
				return new c((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
			}
			function a(t, e, n, r) {
				return r > 0 || (t = e = n = NaN), new c(t, e, n, r);
			}
			function s(t) {
				return (
					t instanceof r || (t = i(t)),
					t ? ((t = t.rgb()), new c(t.r, t.g, t.b, t.opacity)) : new c()
				);
			}
			function u(t, e, n, r) {
				return 1 === arguments.length ? s(t) : new c(t, e, n, null == r ? 1 : r);
			}
			function c(t, e, n, r) {
				(this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
			}
			function l(t) {
				return (
					(t = Math.max(0, Math.min(255, Math.round(t) || 0))), (16 > t ? '0' : '') + t.toString(16)
				);
			}
			function f(t, e, n, r) {
				return (
					r > 0 ? (n > 0 && 1 > n ? e > 0 || (t = NaN) : (t = e = NaN)) : (t = e = n = NaN),
					new d(t, e, n, r)
				);
			}
			function h(t) {
				if (t instanceof d) return new d(t.h, t.s, t.l, t.opacity);
				if ((t instanceof r || (t = i(t)), !t)) return new d();
				if (t instanceof d) return t;
				t = t.rgb();
				var e = t.r / 255,
					n = t.g / 255,
					o = t.b / 255,
					a = Math.min(e, n, o),
					s = Math.max(e, n, o),
					u = NaN,
					c = s - a,
					l = (s + a) / 2;
				return (
					c
						? ((u =
								e === s ? (n - o) / c + 6 * (o > n) : n === s ? (o - e) / c + 2 : (e - n) / c + 4),
						  (c /= 0.5 > l ? s + a : 2 - s - a),
						  (u *= 60))
						: (c = l > 0 && 1 > l ? 0 : u),
					new d(u, c, l, t.opacity)
				);
			}
			function p(t, e, n, r) {
				return 1 === arguments.length ? h(t) : new d(t, e, n, null == r ? 1 : r);
			}
			function d(t, e, n, r) {
				(this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
			}
			function g(t, e, n) {
				return (
					255 *
					(60 > t
						? e + ((n - e) * t) / 60
						: 180 > t
							? n
							: 240 > t
								? e + ((n - e) * (240 - t)) / 60
								: e)
				);
			}
			(e.d = r),
				n.d(e, 'f', function() {
					return v;
				}),
				n.d(e, 'e', function() {
					return m;
				}),
				(e.a = i),
				(e.c = s),
				(e.h = u),
				(e.b = c),
				(e.g = p);
			var y = n(50),
				v = 0.7,
				m = 1 / v,
				x = '\\s*([+-]?\\d+)\\s*',
				b = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
				_ = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
				w = /^#([0-9a-f]{3})$/,
				S = /^#([0-9a-f]{6})$/,
				M = RegExp('^rgb\\(' + [x, x, x] + '\\)$'),
				P = RegExp('^rgb\\(' + [_, _, _] + '\\)$'),
				C = RegExp('^rgba\\(' + [x, x, x, b] + '\\)$'),
				O = RegExp('^rgba\\(' + [_, _, _, b] + '\\)$'),
				A = RegExp('^hsl\\(' + [b, _, _] + '\\)$'),
				k = RegExp('^hsla\\(' + [b, _, _, b] + '\\)$'),
				I = {
					aliceblue: 15792383,
					antiquewhite: 16444375,
					aqua: 65535,
					aquamarine: 8388564,
					azure: 15794175,
					beige: 16119260,
					bisque: 16770244,
					black: 0,
					blanchedalmond: 16772045,
					blue: 255,
					blueviolet: 9055202,
					brown: 10824234,
					burlywood: 14596231,
					cadetblue: 6266528,
					chartreuse: 8388352,
					chocolate: 13789470,
					coral: 16744272,
					cornflowerblue: 6591981,
					cornsilk: 16775388,
					crimson: 14423100,
					cyan: 65535,
					darkblue: 139,
					darkcyan: 35723,
					darkgoldenrod: 12092939,
					darkgray: 11119017,
					darkgreen: 25600,
					darkgrey: 11119017,
					darkkhaki: 12433259,
					darkmagenta: 9109643,
					darkolivegreen: 5597999,
					darkorange: 16747520,
					darkorchid: 10040012,
					darkred: 9109504,
					darksalmon: 15308410,
					darkseagreen: 9419919,
					darkslateblue: 4734347,
					darkslategray: 3100495,
					darkslategrey: 3100495,
					darkturquoise: 52945,
					darkviolet: 9699539,
					deeppink: 16716947,
					deepskyblue: 49151,
					dimgray: 6908265,
					dimgrey: 6908265,
					dodgerblue: 2003199,
					firebrick: 11674146,
					floralwhite: 16775920,
					forestgreen: 2263842,
					fuchsia: 16711935,
					gainsboro: 14474460,
					ghostwhite: 16316671,
					gold: 16766720,
					goldenrod: 14329120,
					gray: 8421504,
					green: 32768,
					greenyellow: 11403055,
					grey: 8421504,
					honeydew: 15794160,
					hotpink: 16738740,
					indianred: 13458524,
					indigo: 4915330,
					ivory: 16777200,
					khaki: 15787660,
					lavender: 15132410,
					lavenderblush: 16773365,
					lawngreen: 8190976,
					lemonchiffon: 16775885,
					lightblue: 11393254,
					lightcoral: 15761536,
					lightcyan: 14745599,
					lightgoldenrodyellow: 16448210,
					lightgray: 13882323,
					lightgreen: 9498256,
					lightgrey: 13882323,
					lightpink: 16758465,
					lightsalmon: 16752762,
					lightseagreen: 2142890,
					lightskyblue: 8900346,
					lightslategray: 7833753,
					lightslategrey: 7833753,
					lightsteelblue: 11584734,
					lightyellow: 16777184,
					lime: 65280,
					limegreen: 3329330,
					linen: 16445670,
					magenta: 16711935,
					maroon: 8388608,
					mediumaquamarine: 6737322,
					mediumblue: 205,
					mediumorchid: 12211667,
					mediumpurple: 9662683,
					mediumseagreen: 3978097,
					mediumslateblue: 8087790,
					mediumspringgreen: 64154,
					mediumturquoise: 4772300,
					mediumvioletred: 13047173,
					midnightblue: 1644912,
					mintcream: 16121850,
					mistyrose: 16770273,
					moccasin: 16770229,
					navajowhite: 16768685,
					navy: 128,
					oldlace: 16643558,
					olive: 8421376,
					olivedrab: 7048739,
					orange: 16753920,
					orangered: 16729344,
					orchid: 14315734,
					palegoldenrod: 15657130,
					palegreen: 10025880,
					paleturquoise: 11529966,
					palevioletred: 14381203,
					papayawhip: 16773077,
					peachpuff: 16767673,
					peru: 13468991,
					pink: 16761035,
					plum: 14524637,
					powderblue: 11591910,
					purple: 8388736,
					rebeccapurple: 6697881,
					red: 16711680,
					rosybrown: 12357519,
					royalblue: 4286945,
					saddlebrown: 9127187,
					salmon: 16416882,
					sandybrown: 16032864,
					seagreen: 3050327,
					seashell: 16774638,
					sienna: 10506797,
					silver: 12632256,
					skyblue: 8900331,
					slateblue: 6970061,
					slategray: 7372944,
					slategrey: 7372944,
					snow: 16775930,
					springgreen: 65407,
					steelblue: 4620980,
					tan: 13808780,
					teal: 32896,
					thistle: 14204888,
					tomato: 16737095,
					turquoise: 4251856,
					violet: 15631086,
					wheat: 16113331,
					white: 16777215,
					whitesmoke: 16119285,
					yellow: 16776960,
					yellowgreen: 10145074,
				};
			n.i(y.a)(r, i, {
				displayable: function() {
					return this.rgb().displayable();
				},
				hex: function() {
					return this.rgb().hex();
				},
				toString: function() {
					return this.rgb() + '';
				},
			}),
				n.i(y.a)(
					c,
					u,
					n.i(y.b)(r, {
						brighter: function(t) {
							return (
								(t = null == t ? m : Math.pow(m, t)),
								new c(this.r * t, this.g * t, this.b * t, this.opacity)
							);
						},
						darker: function(t) {
							return (
								(t = null == t ? v : Math.pow(v, t)),
								new c(this.r * t, this.g * t, this.b * t, this.opacity)
							);
						},
						rgb: function() {
							return this;
						},
						displayable: function() {
							return !(
								0 > this.r ||
								this.r > 255 ||
								0 > this.g ||
								this.g > 255 ||
								0 > this.b ||
								this.b > 255 ||
								0 > this.opacity ||
								this.opacity > 1
							);
						},
						hex: function() {
							return '#' + l(this.r) + l(this.g) + l(this.b);
						},
						toString: function() {
							var t = this.opacity;
							return (
								(t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
								(1 === t ? 'rgb(' : 'rgba(') +
									Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
									', ' +
									Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
									', ' +
									Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
									(1 === t ? ')' : ', ' + t + ')')
							);
						},
					})
				),
				n.i(y.a)(
					d,
					p,
					n.i(y.b)(r, {
						brighter: function(t) {
							return (
								(t = null == t ? m : Math.pow(m, t)),
								new d(this.h, this.s, this.l * t, this.opacity)
							);
						},
						darker: function(t) {
							return (
								(t = null == t ? v : Math.pow(v, t)),
								new d(this.h, this.s, this.l * t, this.opacity)
							);
						},
						rgb: function() {
							var t = (this.h % 360) + 360 * (0 > this.h),
								e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
								n = this.l,
								r = n + (0.5 > n ? n : 1 - n) * e,
								i = 2 * n - r;
							return new c(
								g(240 > t ? t + 120 : t - 240, i, r),
								g(t, i, r),
								g(120 > t ? t + 240 : t - 120, i, r),
								this.opacity
							);
						},
						displayable: function() {
							return (
								((this.s >= 0 && 1 >= this.s) || isNaN(this.s)) &&
								this.l >= 0 &&
								1 >= this.l &&
								this.opacity >= 0 &&
								1 >= this.opacity
							);
						},
					})
				);
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				var n = Object.create(t.prototype);
				for (var r in e) n[r] = e[r];
				return n;
			}
			(e.b = r),
				(e.a = function(t, e, n) {
					(t.prototype = e.prototype = n), (n.constructor = t);
				});
		},
		function(t, e, n) {
			'use strict';
			var r = n(52);
			e.a = function(t) {
				var e = (t += ''),
					n = e.indexOf(':');
				return (
					0 > n || 'xmlns' === (e = t.slice(0, n)) || (t = t.slice(n + 1)),
					r.a.hasOwnProperty(e) ? { space: r.a[e], local: t } : t
				);
			};
		},
		function(t, e, n) {
			'use strict';
			n.d(e, 'b', function() {
				return r;
			});
			var r = 'http://www.w3.org/1999/xhtml';
			e.a = {
				svg: 'http://www.w3.org/2000/svg',
				xhtml: r,
				xlink: 'http://www.w3.org/1999/xlink',
				xml: 'http://www.w3.org/XML/1998/namespace',
				xmlns: 'http://www.w3.org/2000/xmlns/',
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e, n) {
				return (
					(t = i(t, e, n)),
					function(e) {
						var n = e.relatedTarget;
						(n && (n === this || 8 & n.compareDocumentPosition(this))) || t.call(this, e);
					}
				);
			}
			function i(t, e, n) {
				return function(r) {
					var i = l;
					l = r;
					try {
						t.call(this, this.__data__, e, n);
					} finally {
						l = i;
					}
				};
			}
			function o(t) {
				return t
					.trim()
					.split(/^|\s+/)
					.map(function(t) {
						var e = '',
							n = t.indexOf('.');
						return 0 > n || ((e = t.slice(n + 1)), (t = t.slice(0, n))), { type: t, name: e };
					});
			}
			function a(t) {
				return function() {
					var e = this.__on;
					if (e) {
						for (var n, r = 0, i = -1, o = e.length; o > r; ++r)
							(n = e[r]),
								(t.type && n.type !== t.type) || n.name !== t.name
									? (e[++i] = n)
									: this.removeEventListener(n.type, n.listener, n.capture);
						++i ? (e.length = i) : delete this.__on;
					}
				};
			}
			function s(t, e, n) {
				var o = c.hasOwnProperty(t.type) ? r : i;
				return function(r, i, a) {
					var s,
						u = this.__on,
						c = o(e, i, a);
					if (u)
						for (var l = 0, f = u.length; f > l; ++l)
							if ((s = u[l]).type === t.type && s.name === t.name)
								return (
									this.removeEventListener(s.type, s.listener, s.capture),
									this.addEventListener(s.type, (s.listener = c), (s.capture = n)),
									void (s.value = e)
								);
					this.addEventListener(t.type, c, n),
						(s = { type: t.type, name: t.name, value: e, listener: c, capture: n }),
						u ? u.push(s) : (this.__on = [s]);
				};
			}
			function u(t, e, n, r) {
				var i = l;
				(t.sourceEvent = l), (l = t);
				try {
					return e.apply(n, r);
				} finally {
					l = i;
				}
			}
			n.d(e, 'a', function() {
				return l;
			}),
				(e.b = u);
			var c = {},
				l = null;
			if ('undefined' != typeof document) {
				'onmouseenter' in document.documentElement ||
					(c = { mouseenter: 'mouseover', mouseleave: 'mouseout' });
			}
			e.c = function(t, e, n) {
				var r,
					i,
					u = o(t + ''),
					c = u.length;
				{
					if (arguments.length >= 2) {
						for (l = e ? s : a, null == n && (n = !1), r = 0; c > r; ++r) this.each(l(u[r], e, n));
						return this;
					}
					var l = this.node().__on;
					if (l)
						for (var f, h = 0, p = l.length; p > h; ++h)
							for (r = 0, f = l[h]; c > r; ++r)
								if ((i = u[r]).type === f.type && i.name === f.name) return f.value;
				}
			};
		},
		function(t, e, n) {
			'use strict';
			function r() {}
			e.a = function(t) {
				return null == t
					? r
					: function() {
							return this.querySelector(t);
					  };
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(53);
			e.a = function() {
				for (var t, e = r.a; (t = e.sourceEvent); ) e = t;
				return e;
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function(t) {
				return (
					(t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView
				);
			};
		},
		function(t, e, n) {
			'use strict';
			function r() {
				return x || (w(i), (x = _.now() + b));
			}
			function i() {
				x = 0;
			}
			function o() {
				this._call = this._time = this._next = null;
			}
			function a(t, e, n) {
				var r = new o();
				return r.restart(t, e, n), r;
			}
			function s() {
				r(), ++d;
				for (var t, e = h; e; ) 0 > (t = x - e._time) || e._call.call(null, t), (e = e._next);
				--d;
			}
			function u() {
				(x = (m = _.now()) + b), (d = g = 0);
				try {
					s();
				} finally {
					(d = 0), l(), (x = 0);
				}
			}
			function c() {
				var t = _.now(),
					e = t - m;
				e > v && ((b -= e), (m = t));
			}
			function l() {
				for (var t, e, n = h, r = 1 / 0; n; )
					n._call
						? (r > n._time && (r = n._time), (t = n), (n = n._next))
						: ((e = n._next), (n._next = null), (n = t ? (t._next = e) : (h = e)));
				(p = t), f(r);
			}
			function f(t) {
				if (!d) {
					g && (g = clearTimeout(g));
					t - x > 24
						? (1 / 0 > t && (g = setTimeout(u, t - _.now() - b)), y && (y = clearInterval(y)))
						: (y || ((m = _.now()), (y = setInterval(c, v))), (d = 1), w(u));
				}
			}
			(e.c = r), (e.b = o), (e.a = a);
			var h,
				p,
				d = 0,
				g = 0,
				y = 0,
				v = 1e3,
				m = 0,
				x = 0,
				b = 0,
				_ = 'object' == typeof performance && performance.now ? performance : Date,
				w =
					'object' == typeof window && window.requestAnimationFrame
						? window.requestAnimationFrame.bind(window)
						: function(t) {
								setTimeout(t, 17);
						  };
			o.prototype = a.prototype = {
				constructor: o,
				restart: function(t, e, n) {
					if ('function' != typeof t) throw new TypeError('callback is not a function');
					(n = (null == n ? r() : +n) + (null == e ? 0 : +e)),
						this._next || p === this || (p ? (p._next = this) : (h = this), (p = this)),
						(this._call = t),
						(this._time = n),
						f();
				},
				stop: function() {
					this._call && ((this._call = null), (this._time = 1 / 0), f());
				},
			};
		},
		function(t, e, n) {
			'use strict';
			var r = (n(60), n(105), n(59), n(106), n(108), n(31));
			n.d(e, 'b', function() {
				return r.a;
			});
			var i = (n(109), n(303), n(111));
			n.d(e, 'd', function() {
				return i.a;
			});
			var o = n(305);
			n.d(e, 'a', function() {
				return o.a;
			}),
				n.d(e, 'e', function() {
					return o.b;
				});
			var a = (n(307), n(110));
			n.d(e, 'c', function() {
				return a.a;
			});
			n(299), n(300), n(298), n(297), n(301), n(302);
		},
		function(t, e, n) {
			'use strict';
			function r(t, e, n, r, i) {
				var o = t * t,
					a = o * t;
				return (
					((1 - 3 * t + 3 * o - a) * e +
						(4 - 6 * o + 3 * a) * n +
						(1 + 3 * t + 3 * o - 3 * a) * r +
						a * i) /
					6
				);
			}
			(e.b = r),
				(e.a = function(t) {
					var e = t.length - 1;
					return function(n) {
						var i = n > 0 ? (1 > n ? Math.floor(n * e) : ((n = 1), e - 1)) : (n = 0),
							o = t[i],
							a = t[i + 1];
						return r(
							(n - i / e) * e,
							i > 0 ? t[i - 1] : 2 * o - a,
							o,
							a,
							e - 1 > i ? t[i + 2] : 2 * a - o
						);
					};
				});
		},
		function(t, e, n) {
			'use strict';
			var r = n(14),
				i = n(110),
				o = n(105),
				a = n(108),
				s = n(31),
				u = n(109),
				c = n(111),
				l = n(107);
			e.a = function(t, e) {
				var f,
					h = typeof e;
				return null == e || 'boolean' === h
					? n.i(l.a)(e)
					: ('number' === h
							? s.a
							: 'string' === h
								? (f = n.i(r.a)(e))
									? ((e = f), i.a)
									: c.a
								: e instanceof r.a
									? i.a
									: e instanceof Date
										? a.a
										: Array.isArray(e)
											? o.a
											: ('function' != typeof e.valueOf && 'function' != typeof e.toString) ||
											  isNaN(e)
												? u.a
												: s.a)(t, e);
			};
		},
		function(t, e, n) {
			function r(t) {
				var e = -1,
					n = null == t ? 0 : t.length;
				for (this.clear(); ++e < n; ) {
					var r = t[e];
					this.set(r[0], r[1]);
				}
			}
			var i = n(399),
				o = n(400),
				a = n(401),
				s = n(402),
				u = n(403);
			(r.prototype.clear = i),
				(r.prototype.delete = o),
				(r.prototype.get = a),
				(r.prototype.has = s),
				(r.prototype.set = u),
				(t.exports = r);
		},
		function(t, e, n) {
			function r(t, e, n) {
				var r = t[e];
				(s.call(t, e) && o(r, n) && (void 0 !== n || e in t)) || i(t, e, n);
			}
			var i = n(63),
				o = n(131),
				a = Object.prototype,
				s = a.hasOwnProperty;
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n) {
				'__proto__' == e && i
					? i(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
					: (t[e] = n);
			}
			var i = n(383);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				e = i(e, t);
				for (var n = 0, r = e.length; null != t && r > n; ) t = t[o(e[n++])];
				return n && n == r ? t : void 0;
			}
			var i = n(36),
				o = n(20);
			t.exports = r;
		},
		function(t, e) {
			function n(t, e, n) {
				for (var r = n - 1, i = t.length; ++r < i; ) if (t[r] === e) return r;
				return -1;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e, n, a, s) {
				return (
					t === e ||
					(null == t || null == e || (!o(t) && !o(e)) ? t !== t && e !== e : i(t, e, n, a, r, s))
				);
			}
			var i = n(355),
				o = n(22);
			t.exports = r;
		},
		function(t, e) {
			function n(t) {
				return i.call(t);
			}
			var r = Object.prototype,
				i = r.toString;
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e) {
				if (i(t)) return !1;
				var n = typeof t;
				return (
					!('number' != n && 'symbol' != n && 'boolean' != n && null != t && !o(t)) ||
					(s.test(t) || !a.test(t) || (null != e && t in Object(e)))
				);
			}
			var i = n(3),
				o = n(136),
				a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
				s = /^\w*$/;
			t.exports = r;
		},
		function(t, e, n) {
			var r = n(121),
				i = 'object' == typeof self && self && self.Object === Object && self;
			t.exports = r || i || Function('return this')();
		},
		function(t, e) {
			function n() {
				return !1;
			}
			t.exports = n;
		},
		function(t, e) {
			function n() {
				return !1;
			}
			t.exports = n;
		},
		function(t, e, n) {
			var r = n(0),
				i = n(141),
				o = {
					appear: { duration: 450, easing: 'easeQuadOut' },
					update: { duration: 450, easing: 'easeQuadInOut' },
					enter: { duration: 400, easing: 'easeQuadInOut', delay: 100 },
					leave: { duration: 350, easing: 'easeQuadIn' },
				},
				a = {
					line: {
						appear: function() {
							return i.appear.clipIn;
						},
						enter: function() {
							return i.enter.clipIn;
						},
						leave: function() {
							return i.leave.lineWidthOut;
						},
					},
					path: {
						appear: function() {
							return i.appear.clipIn;
						},
						enter: function() {
							return i.enter.clipIn;
						},
						leave: function() {
							return i.leave.lineWidthOut;
						},
					},
					area: {
						appear: function() {
							return i.appear.clipIn;
						},
						enter: function() {
							return i.enter.fadeIn;
						},
						leave: function() {
							return i.leave.fadeOut;
						},
						cfg: {
							appear: { duration: 500, easing: 'easeQuadOut' },
							update: { duration: 450, easing: 'easeQuadInOut' },
							enter: { duration: 600, delay: 150, easing: 'easeQuadInOut' },
							leave: { easing: 'easeQuadOut', duration: 350 },
						},
					},
					polygon: {
						appear: function() {
							return i.appear.zoomIn;
						},
						enter: function() {
							return i.enter.zoomIn;
						},
						leave: function() {
							return i.leave.zoomOut;
						},
					},
					edge: {
						appear: function() {
							return i.appear.pathIn;
						},
						enter: function() {
							return i.enter.pathIn;
						},
						leave: function() {
							return i.leave.pathOut;
						},
					},
					interval: {
						appear: function(t) {
							var e = void 0;
							return (
								t.isPolar
									? ((e = i.appear.zoomIn),
									  (t.isTransposed || 'theta' === t.type) && (e = i.appear.fanIn))
									: (e = t.isRect
											? t.isTransposed
												? i.appear.scaleInX
												: i.appear.scaleInY
											: i.appear.zoomIn),
								e
							);
						},
						enter: function(t) {
							return t.isRect || t.isTransposed || 'theta' === t.type
								? i.enter.fadeIn
								: i.enter.zoomIn;
						},
						leave: function() {
							return i.leave.fadeOut;
						},
						update: function(t) {
							if ('theta' === t.type) return i.update.fanIn;
						},
					},
					point: {
						appear: function() {
							return i.appear.zoomIn;
						},
						enter: function() {
							return i.enter.zoomIn;
						},
						leave: function() {
							return i.leave.zoomOut;
						},
					},
					schema: {
						appear: function() {
							return i.appear.clipIn;
						},
						enter: function() {
							return i.enter.clipIn;
						},
						leave: function() {
							return i.leave.lineWidthOut;
						},
					},
					contour: null,
					heatmap: null,
					label: {
						appear: function() {
							return i.appear.fadeIn;
						},
						enter: function() {
							return i.enter.fadeIn;
						},
						leave: function() {
							return i.leave.fadeOut;
						},
						cfg: { appear: { duration: 900 } },
					},
					'axis-label': {
						enter: function() {
							return i.appear.fadeIn;
						},
						leave: function() {
							return i.leave.fadeOut;
						},
						update: function(t) {
							if (t.isPolar) return i.appear.fadeIn;
						},
					},
					'axis-ticks': {
						enter: function() {
							return i.appear.fadeIn;
						},
						leave: function() {
							return i.leave.fadeOut;
						},
						update: function(t) {
							if (t.isPolar) return i.appear.fadeIn;
						},
					},
					'axis-grid': {
						enter: function() {
							return i.appear.fadeIn;
						},
						leave: function() {
							return i.leave.fadeOut;
						},
						update: function(t) {
							if (t.isPolar) return i.appear.fadeIn;
						},
					},
					'axis-grid-rect': {
						enter: function() {
							return i.appear.fadeIn;
						},
						leave: function() {
							return i.leave.fadeOut;
						},
						update: function() {
							return i.leave.fadeIn;
						},
					},
					labelLine: {
						appear: function() {
							return i.appear.pathIn;
						},
						enter: function() {
							return i.enter.pathIn;
						},
						leave: function() {
							return i.leave.pathOut;
						},
					},
				};
			(a.Action = i),
				(a.defaultCfg = o),
				(a.getAnimation = function(t, e, n) {
					var i = this[t];
					if (i) {
						var o = i[n];
						if (r.isFunction(o)) return o(e);
					}
					return !1;
				}),
				(a.getAnimateCfg = function(t, e) {
					var n = o[e];
					return this[t] && this[t].cfg && this[t].cfg[e] ? r.deepMix({}, n, this[t].cfg[e]) : n;
				}),
				(a.registerAnimation = function(t, e, n) {
					this.Action[t] || (this.Action[t] = {}), (this.Action[t][e] = n);
				}),
				(t.exports = a);
		},
		function(t, e, n) {
			var r = n(15);
			(r.Color = n(143)),
				(r.Size = n(147)),
				(r.Opacity = n(144)),
				(r.Shape = n(146)),
				(r.Position = n(145)),
				(t.exports = r);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function a(t, e) {
				var n = !1;
				return (
					c.each(t, function(t) {
						var r = [].concat(t.values),
							i = [].concat(e.values);
						if (t.type === e.type && t.field === e.field && '' + r.sort() == '' + i.sort())
							return void (n = !0);
					}),
					n
				);
			}
			function s(t, e) {
				return {
					minX: Math.min(t.minX, e.minX),
					minY: Math.min(t.minY, e.minY),
					maxX: Math.max(t.maxX, e.maxX),
					maxY: Math.max(t.maxY, e.maxY),
				};
			}
			function u(t, e) {
				return c.isEqualWith(t, e, function(t, e) {
					return t === e;
				});
			}
			var c = n(0),
				l = n(155),
				f = n(2),
				h = f.Canvas,
				p = f.DomUtil,
				d = n(176),
				g = n(75),
				y = n(1);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return c.mix(e, {
							id: null,
							forceFit: !1,
							container: null,
							wrapperEl: null,
							canvas: null,
							width: 500,
							height: 500,
							pixelRatio: null,
							padding: y.plotCfg.padding,
							backPlot: null,
							frontPlot: null,
							plotBackground: null,
							background: null,
							autoPaddingAppend: 5,
							views: [],
						});
					}),
					(e.prototype.init = function() {
						this._initCanvas(),
							this._initPlot(),
							this._initEvents(),
							t.prototype.init.call(this),
							this.set('tooltipController', new g.Tooltip({ chart: this, options: {} })),
							this.set('legendController', new g.Legend({ chart: this })),
							this.set('_id', 'chart'),
							this.emit('afterinit');
					}),
					(e.prototype._isAutoPadding = function() {
						var t = this.get('padding');
						return c.isArray(t) ? -1 !== t.indexOf('auto') : 'auto' === t;
					}),
					(e.prototype._getAutoPadding = function() {
						for (
							var t = this.get('padding'),
								e = this.get('frontPlot'),
								n = e.getBBox(),
								r = this.get('backPlot'),
								i = r.getBBox(),
								o = s(n, i),
								a = [
									0 - o.minY,
									o.maxX - this.get('width'),
									o.maxY - this.get('height'),
									0 - o.minX,
								],
								u = c.toAllPadding(t),
								l = 0;
							u.length > l;
							l++
						)
							if ('auto' === u[l]) {
								var f = Math.max(0, a[l]);
								u[l] = f + this.get('autoPaddingAppend');
							}
						return u;
					}),
					(e.prototype._initCanvas = function() {
						var t = this.get('container'),
							e = this.get('id');
						!t && e && ((t = e), this.set('container', e));
						var n = this.get('width'),
							r = this.get('height');
						if (c.isString(t)) {
							if (!(t = document.getElementById(t)))
								throw Error('Please specify the container for the chart!');
							this.set('container', t);
						}
						var i = p.createDom('<div style="position:relative;"></div>');
						t.appendChild(i),
							this.set('wrapperEl', i),
							this.get('forceFit') && ((n = p.getWidth(t, n)), this.set('width', n)),
							this.set(
								'canvas',
								new h({ containerDOM: i, width: n, height: r, pixelRatio: this.get('pixelRatio') })
							);
					}),
					(e.prototype._initPlot = function() {
						this._initPlotBack();
						var t = this.get('canvas'),
							e = t.addGroup({ zIndex: 1 }),
							n = t.addGroup({ zIndex: 2 }),
							r = t.addGroup({ zIndex: 3 });
						this.set('backPlot', e), this.set('middlePlot', n), this.set('frontPlot', r);
					}),
					(e.prototype._initPlotBack = function() {
						var t = this.get('canvas'),
							e = t.addGroup(d, {
								padding: this.get('padding'),
								plotBackground: c.mix({}, y.plotBackground, this.get('plotBackground')),
								background: c.mix({}, y.background, this.get('background')),
							});
						this.set('plot', e), this.set('plotRange', e.get('plotRange'));
					}),
					(e.prototype._initEvents = function() {
						this.get('forceFit') &&
							window.addEventListener('resize', c.wrapBehavior(this, '_initForceFitEvent'));
					}),
					(e.prototype._initForceFitEvent = function() {
						var t = setTimeout(c.wrapBehavior(this, 'forceFit'), 200);
						clearTimeout(this.get('resizeTimer')), this.set('resizeTimer', t);
					}),
					(e.prototype._renderLegends = function() {
						var t = this.get('options'),
							e = t.legends;
						if (c.isNil(e) || !1 !== e) {
							var n = this.get('legendController');
							if (((n.options = e || {}), (n.plotRange = this.get('plotRange')), e && e.custom))
								n.addCustomLegend();
							else {
								var r = this.getAllGeoms(),
									i = [];
								c.each(r, function(t) {
									var e = t.get('view'),
										r = t.getAttrsForLegend();
									c.each(r, function(r) {
										var o = r.type,
											s = r.getScale(o);
										if (s.field && 'identity' !== s.type && !a(i, s)) {
											i.push(s);
											var u = e.getFilteredValues(s.field);
											n.addLegend(s, r, t, u);
										}
									});
								});
							}
							n.alignLegends();
						}
					}),
					(e.prototype._renderTooltips = function() {
						var t = this.get('options');
						if (c.isNil(t.tooltip) || !1 !== t.tooltip) {
							var e = this.get('tooltipController');
							(e.options = t.tooltip || {}), e.renderTooltip();
						}
					}),
					(e.prototype.getAllGeoms = function() {
						var t = [];
						t = t.concat(this.get('geoms'));
						var e = this.get('views');
						return (
							c.each(e, function(e) {
								t = t.concat(e.get('geoms'));
							}),
							t
						);
					}),
					(e.prototype.forceFit = function() {
						var t = this;
						if (t && !t.destroyed) {
							var e = t.get('container'),
								n = t.get('width'),
								r = p.getWidth(e, n);
							if (0 !== r && r !== n) {
								t.changeSize(r, t.get('height'));
							}
							return t;
						}
					}),
					(e.prototype.resetPlot = function() {
						var t = this.get('plot'),
							e = this.get('padding');
						u(e, t.get('padding')) || (t.set('padding', e), t.repaint());
					}),
					(e.prototype.changeSize = function(t, e) {
						var n = this;
						n.get('canvas').changeSize(t, e);
						var r = this.get('plot');
						return (
							n.set('width', t),
							n.set('height', e),
							r.repaint(),
							this.set('keepPadding', !0),
							n.repaint(),
							this.set('keepPadding', !1),
							this.emit('afterchangesize'),
							n
						);
					}),
					(e.prototype.changeWidth = function(t) {
						return this.changeSize(t, this.get('height'));
					}),
					(e.prototype.changeHeight = function(t) {
						return this.changeSize(this.get('width'), t);
					}),
					(e.prototype.view = function(t) {
						(t = t || {}),
							(t.parent = this),
							(t.backPlot = this.get('backPlot')),
							(t.middlePlot = this.get('middlePlot')),
							(t.frontPlot = this.get('frontPlot')),
							(t.canvas = this.get('canvas')),
							c.isNil(t.animate) && (t.animate = this.get('animate')),
							(t.options = c.mix({}, this._getSharedOptions(), t.options));
						var e = new l(t);
						return (
							e.set('_id', 'view' + this.get('views').length),
							this.get('views').push(e),
							this.emit('addview', { view: e }),
							e
						);
					}),
					(e.prototype.removeView = function(t) {
						var e = this.get('views');
						c.Array.remove(e, t), t.destroy();
					}),
					(e.prototype._getSharedOptions = function() {
						var t = this.get('options'),
							e = {};
						return (
							c.each(['scales', 'coord', 'axes'], function(n) {
								e[n] = c.cloneDeep(t[n]);
							}),
							e
						);
					}),
					(e.prototype.getViewRegion = function() {
						var t = this.get('plotRange');
						return { start: t.bl, end: t.tr };
					}),
					(e.prototype.legend = function(t, e) {
						var n = this.get('options');
						n.legends || (n.legends = {});
						var r = {};
						return (
							!1 === t
								? (n.legends = !1)
								: c.isObject(t)
									? (r = t)
									: c.isString(t)
										? (r[t] = e)
										: (r = e),
							c.mix(n.legends, r),
							this
						);
					}),
					(e.prototype.tooltip = function(t, e) {
						var n = this.get('options');
						return (
							n.tooltip || (n.tooltip = {}),
							!1 === t
								? (n.tooltip = !1)
								: c.isObject(t)
									? c.mix(n.tooltip, t)
									: c.mix(n.tooltip, e),
							this
						);
					}),
					(e.prototype.clear = function() {
						this.emit('beforeclear');
						for (var e = this.get('views'); e.length > 0; ) {
							e.shift().destroy();
						}
						t.prototype.clear.call(this);
						var n = this.get('canvas');
						return this.resetPlot(), n.draw(), this.emit('afterclear'), this;
					}),
					(e.prototype.clearInner = function() {
						var e = this.get('views');
						c.each(e, function(t) {
							t.clearInner();
						});
						var n = this.get('tooltipController');
						if ((n && n.clear(), !this.get('keepLegend'))) {
							var r = this.get('legendController');
							r && r.clear();
						}
						t.prototype.clearInner.call(this);
					}),
					(e.prototype.drawComponents = function() {
						t.prototype.drawComponents.call(this), this.get('keepLegend') || this._renderLegends();
					}),
					(e.prototype.render = function() {
						if (!this.get('keepPadding') && this._isAutoPadding()) {
							this.beforeRender(), this.drawComponents();
							var e = this._getAutoPadding(),
								n = this.get('plot');
							u(n.get('padding'), e) || (n.set('padding', e), n.repaint());
						}
						t.prototype.render.call(this), this._renderTooltips();
					}),
					(e.prototype.repaint = function() {
						this.get('keepPadding') || this.resetPlot(), t.prototype.repaint.call(this);
					}),
					(e.prototype.changeVisible = function(t) {
						this.get('wrapperEl').style.display = t ? '' : 'none';
					}),
					(e.prototype.toDataURL = function() {
						return this.get('canvas')
							.get('el')
							.toDataURL('image/png');
					}),
					(e.prototype.downloadImage = function(t) {
						var e = this.toDataURL(),
							n = document.createElement('a');
						if (window.Blob && window.URL) {
							for (
								var r = e.split(','),
									i = r[0].match(/:(.*?);/)[1],
									o = atob(r[1]),
									a = o.length,
									s = new Uint8Array(a);
								a--;

							)
								s[a] = o.charCodeAt(a);
							var u = new Blob([s], { type: i });
							window.navigator.msSaveBlob
								? window.navigator.msSaveBlob(u, (t || 'chart') + '.png')
								: n.addEventListener('click', function() {
										(n.download = (t || 'chart') + '.png'),
											(n.href = window.URL.createObjectURL(u));
								  });
						} else
							n.addEventListener('click', function() {
								(n.download = (t || 'chart') + '.png'),
									(n.href = e.replace('image/png', 'image/octet-stream'));
							});
						var c = document.createEvent('MouseEvents');
						return c.initEvent('click', !1, !1), n.dispatchEvent(c), e;
					}),
					(e.prototype.showTooltip = function(t) {
						var e = this.getViewsByPoint(t);
						if (e.length) {
							this.get('tooltipController').showTooltip(t, e);
						}
						return this;
					}),
					(e.prototype.hideTooltip = function() {
						return this.get('tooltipController').hideTooltip(), this;
					}),
					(e.prototype.getTooltipItems = function(t) {
						var e = this,
							n = e.getViewsByPoint(t),
							r = [];
						return (
							c.each(n, function(e) {
								var n = e.get('geoms');
								c.each(n, function(e) {
									var n = e.get('dataArray'),
										i = [];
									c.each(n, function(n) {
										var r = e.findPoint(t, n);
										if (r) {
											var o = e.getTipItems(r);
											i = i.concat(o);
										}
									}),
										(r = r.concat(i));
								});
							}),
							r
						);
					}),
					(e.prototype.destroy = function() {
						this.emit('beforedestroy'), clearTimeout(this.get('resizeTimer'));
						var e = this.get('canvas'),
							n = this.get('wrapperEl');
						n.parentNode.removeChild(n),
							t.prototype.destroy.call(this),
							e.destroy(),
							window.removeEventListener('resize', c.getWrapBehavior(this, '_initForceFitEvent')),
							this.emit('afterdestroy');
					}),
					e
				);
			})(l);
		},
		function(t, e, n) {
			t.exports = {
				Scale: n(153),
				Coord: n(149),
				Axis: n(148),
				Guide: n(151),
				Legend: n(152),
				Tooltip: n(154),
				Event: n(150),
			};
		},
		function(t, e, n) {
			var r = n(77);
			(r.LabelsRenderer = n(170)), (t.exports = r);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(2),
				u = s.DomUtil,
				c = s.Group;
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						return {
							zIndex: 6,
							items: null,
							textStyle: null,
							formatter: null,
							htmlTemplate: null,
							_containerTpl: '<div class="g-labels" style="position:absolute;top:0;left:0;"></div>',
							_itemTpl: '<div class="g-label" style="position:absolute;">{text}</div>',
						};
					}),
					(e.prototype._renderUI = function() {
						this._drawLabels();
					}),
					(e.prototype._drawLabels = function() {
						var t = this,
							e = t.get('items');
						a.each(e, function(e, n) {
							t._addLabel(e, n);
						});
					}),
					(e.prototype._addLabel = function(t, e) {
						return this._createText(this._getLabelCfg(t, e));
					}),
					(e.prototype._getLabelCfg = function(t, e) {
						var n = this.get('textStyle') || {},
							r = this.get('formatter'),
							i = this.get('htmlTemplate');
						if (!a.isObject(t)) {
							var o = t;
							(t = {}), (t.text = o);
						}
						return (
							a.isFunction(n) && (n = n(t.text, t, e)),
							r && (t.text = r(t.text, t, e)),
							a.isFunction(i) && (t.text = i(t.text, t, e)),
							a.isNil(t.text) && (t.text = ''),
							(t.text = t.text + ''),
							a.mix({}, t, n, { x: t.x || 0, y: t.y || 0 })
						);
					}),
					(e.prototype._createText = function(t) {
						var e = this.get('htmlTemplate'),
							n = this.get('customDiv'),
							r = void 0;
						if (!e) {
							var i = t.point;
							return (
								delete t.point,
								(r = this.addShape('text', { attrs: t })),
								r.setSilent('origin', i),
								(r.name = 'label'),
								this.get('appendInfo') && r.setSilent('appendInfo', this.get('appendInfo')),
								r
							);
						}
						if (!n) {
							var o = this.get('_containerTpl'),
								a = this.get('canvas').get('el').parentNode;
							(n = u.createDom(o)),
								(a.style.position = 'relative'),
								a.appendChild(n),
								this.set('customDiv', n);
						}
						var s = this._createDom(t);
						n.appendChild(s), this._setCustomPosition(t, s);
					}),
					(e.prototype._setCustomPosition = function(t, e) {
						var n = t.textAlign || 'left',
							r = t.y,
							i = t.x,
							o = u.getOuterWidth(e);
						(r -= u.getOuterHeight(e) / 2),
							'center' === n ? (i -= o / 2) : 'right' === n && (i -= o),
							(e.style.top = parseInt(r, 10) + 'px'),
							(e.style.left = parseInt(i, 10) + 'px');
					}),
					(e.prototype._createDom = function(t) {
						var e = this.get('_itemTpl'),
							n = this.get('htmlTemplate');
						a.isString(n) && (t.text = a.substitute(n, { text: t.text }));
						var r = a.substitute(e, { text: t.text });
						return u.createDom(r);
					}),
					(e.prototype.getLabels = function() {
						var t = this.get('customDiv');
						return t ? a.toArray(t.childNodes) : this.get('children');
					}),
					(e.prototype.addLabel = function(t) {
						var e = this.get('items'),
							n = e.length;
						return e.push(t), this._addLabel(t, n);
					}),
					(e.prototype.changeLabel = function(t, e) {
						if (t) {
							var n = this.get('htmlTemplate'),
								r = a.indexOf(this.getLabels(), t),
								i = this._getLabelCfg(e, r);
							if (n) {
								(t.innerHTML = this._createDom(i).innerHTML), this._setCustomPosition(i, t);
							} else if (
								((t._id = e._id),
								t.attr('text', i.text),
								t.attr('x') !== i.x || t.attr('y') !== i.y)
							) {
								var o = t.get('attrs').rotate;
								o ? (t.rotateAtStart(-o), t.attr(i), t.rotateAtStart(o)) : t.attr(i);
							}
						}
					}),
					(e.prototype.clear = function() {
						var e = this.get('customDiv');
						e && (e.innerHTML = ''), t.prototype.clear.call(this);
					}),
					(e.prototype.setItems = function(t) {
						this.clear(), this.set('items', t), this._drawLabels();
					}),
					(e.prototype.remove = function() {
						var e = this.get('customDiv');
						e && e.parentNode.removeChild(e), t.prototype.remove.call(this);
					}),
					e
				);
			})(c);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(1),
				u = n(2),
				c = u.Group;
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						return {
							title: { fill: '#333', textBaseline: 'middle' },
							itemFormatter: null,
							useHtml: !1,
							inPlot: !1,
							hoverable: !0,
						};
					}),
					(e.prototype._beforeRenderUI = function() {
						var t = this.addGroup();
						t.set('viewId', this.get('viewId')), this.set('itemsGroup', t);
					}),
					(e.prototype._renderUI = function() {
						this._renderTitle();
					}),
					(e.prototype._renderTitle = function() {
						var t = this.get('title');
						if (t && t.text) {
							var e = this.addShape('text', {
								attrs: a.mix(
									{ x: 0, y: 0, fill: '#333', textBaseline: 'middle', fontFamily: s.fontFamily },
									t
								),
							});
							(e.name = 'legend-title'),
								this.get('appendInfo') && e.setSilent('appendInfo', this.get('appendInfo')),
								this.set('titleShape', e);
						}
					}),
					(e.prototype.getCheckedCount = function() {
						var t = this.get('itemsGroup'),
							e = t.get('children');
						return a.filter(e, function(t) {
							return t.get('checked');
						}).length;
					}),
					(e.prototype.setItems = function(t) {
						this.set('items', t), this.clearItems(), this._renderUI();
					}),
					(e.prototype.addItem = function(t) {
						this.get('items').push(t), this.clearItems(), this._renderUI();
					}),
					(e.prototype.clearItems = function() {
						this.get('itemsGroup').clear();
					}),
					(e.prototype.getWidth = function() {
						return this.getBBox().width;
					}),
					(e.prototype.getHeight = function() {
						return this.getBBox().height;
					}),
					e
				);
			})(c);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function a(t, e) {
				return t.getElementsByClassName(e)[0];
			}
			function s(t, e) {
				var n = t.className;
				return (
					(n = n.split(' ')),
					n.indexOf(e) > -1
						? t
						: t.parentNode
							? t.parentNode.className === v
								? t.parentNode
								: s(t.parentNode, e)
							: null
				);
			}
			function u(t, e) {
				var n = null,
					r = e instanceof g ? e.get('value') : e;
				return (
					l.each(t, function(t) {
						if (t.value === r) return (n = t), !1;
					}),
					n
				);
			}
			function c(t, e) {
				return t.findBy(function(t) {
					return t.name === e;
				});
			}
			var l = n(0),
				f = n(78),
				h = n(2),
				p = h.DomUtil,
				d = h.Event,
				g = h.Group,
				y = n(1),
				v = 'g2-legend',
				m = 'g2-legend-list',
				x = 'g2-legend-list-item',
				b = 'g2-legend-marker';
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return l.mix({}, e, {
							type: 'category-legend',
							items: null,
							itemGap: 5,
							titleGap: 15,
							itemMarginBottom: 8,
							itemsGroup: null,
							layout: 'horizontal',
							allowAllCanceled: !1,
							backPadding: [0, 0, 0, 0],
							checkable: !0,
							unCheckColor: '#ccc',
							background: { fill: '#fff', fillOpacity: 0 },
							itemWidth: null,
							textStyle: {
								fill: '#333',
								fontSize: 12,
								textAlign: 'start',
								textBaseline: 'middle',
								fontFamily: y.fontFamily,
							},
							_wordSpaceing: 8,
							useHtml: !1,
							autoPosition: !0,
							container: null,
							containerTpl:
								'<div class="' +
								v +
								'"><h4 class="g2-legend-title"></h4><ul class="' +
								m +
								'"></ul></div>',
							_defaultItemTpl:
								'<li class="' +
								x +
								' item-{index} {checked}" data-color="{originColor}" data-value="{originValue}"><i class="' +
								b +
								'" style="background-color:{color};"></i><span class="g2-legend-text">{value}</span></li>',
							itemTpl: null,
							clickable: !0,
							selectedMode: 'multiple',
							reversed: !1,
							autoWrap: !0,
						});
					}),
					(e.prototype._beforeRenderUI = function() {
						t.prototype._beforeRenderUI.call(this);
					}),
					(e.prototype._renderUI = function() {
						this.get('useHtml')
							? this._renderHTML()
							: (t.prototype._renderUI.call(this),
							  this._renderItems(),
							  this.get('autoWrap') && this._adjustItems(),
							  this._renderBack());
					}),
					(e.prototype._bindUI = function() {
						this.get('hoverable') &&
							(this.on('mousemove', l.wrapBehavior(this, '_onMousemove')),
							this.on('mouseleave', l.wrapBehavior(this, '_onMouseleave'))),
							this.get('clickable') && this.on('click', l.wrapBehavior(this, '_onClick'));
					}),
					(e.prototype._getLegendItem = function(t) {
						var e = t.get('parent');
						return e && 'legendGroup' === e.name ? e : null;
					}),
					(e.prototype._onMousemove = function(t) {
						var e = this._getLegendItem(t.currentTarget);
						if (e && e.get('checked')) {
							var n = this.get('items'),
								r = new d('itemhover', t, !0, !0);
							(r.item = u(n, e)), (r.checked = e.get('checked')), this.emit('itemhover', r);
						} else e || this.emit('itemunhover', t);
					}),
					(e.prototype._onMouseleave = function(t) {
						this.emit('itemunhover', t);
					}),
					(e.prototype._onClick = function(t) {
						var e = this._getLegendItem(t.currentTarget),
							n = this.get('items');
						if (e && !e.get('destroyed')) {
							var r = e.get('checked');
							if (!this.get('allowAllCanceled') && r && 1 === this.getCheckedCount()) return;
							var i = this.get('selectedMode'),
								o = u(n, e),
								a = new d('itemclick', t, !0, !0);
							(a.item = o), (a.currentTarget = e), (a.checked = 'single' === i || !r);
							var s = this.get('unCheckColor'),
								f = this.get('textStyle').fill,
								h = void 0,
								p = void 0,
								g = void 0;
							if ('single' === i) {
								var y = this.get('itemsGroup'),
									v = y.get('children');
								l.each(v, function(t) {
									(h = c(t, 'legend-marker')),
										(p = c(t, 'legend-text')),
										(g = c(t, 'legend-item')),
										t !== e
											? (h.attr('fill') && h.attr('fill', s),
											  h.attr('stroke') && h.attr('stroke', s),
											  p.attr('fill', s),
											  h.setSilent('checked', !1),
											  p.setSilent('checked', !1),
											  g.setSilent('checked', !1),
											  t.setSilent('checked', !1))
											: (h.attr('fill') && h.attr('fill', o.marker.fill),
											  h.attr('stroke') && h.attr('stroke', o.marker.stroke),
											  p.attr('fill', f),
											  h.setSilent('checked', !0),
											  p.setSilent('checked', !0),
											  g.setSilent('checked', !0),
											  t.setSilent('checked', !0));
								});
							} else
								(h = c(e, 'legend-marker')),
									(p = c(e, 'legend-text')),
									(g = c(e, 'legend-item')),
									h.attr('fill') && h.attr('fill', r ? s : o.marker.fill),
									h.attr('stroke') && h.attr('stroke', r ? s : o.marker.stroke),
									p.attr('fill', r ? s : f),
									e.setSilent('checked', !r),
									h.setSilent('checked', !r),
									p.setSilent('checked', !r),
									g.setSilent('checked', !r);
							this.emit('itemclick', a);
						}
					}),
					(e.prototype._renderHTML = function() {
						var t = this,
							e = this,
							n = e.get('canvas'),
							r = n.get('el').parentNode,
							i = this.get('title'),
							o = e.get('containerTpl'),
							c = p.createDom(o),
							f = a(c, 'g2-legend-title'),
							h = a(c, m),
							d = e.get('unCheckColor'),
							g = e.get('selectedMode'),
							_ = y.legend.html,
							w = e.get('container');
						if (/^\#/.test(w)) {
							var S = w.replace('#', '');
							(w = document.getElementById(S)), w.appendChild(c);
						} else {
							var M = e.get('position'),
								P = e.get('canvas'),
								C = {};
							(C =
								'left' === M || 'right' === M
									? { maxHeight: (e.get('maxLength') || P.get('height')) + 'px' }
									: { maxWidth: (e.get('maxLength') || P.get('width')) + 'px' }),
								p.modifyCSS(c, l.mix({}, _[v], C, e.get(v))),
								r.appendChild(c);
						}
						p.modifyCSS(h, l.mix({}, _[m], e.get(m))),
							f &&
								(i && i.text
									? ((f.innerHTML = i.text),
									  p.modifyCSS(f, l.mix({}, _['g2-legend-title'], e.get('g2-legend-title'))))
									: c.removeChild(f));
						var O = e.get('items'),
							A = e.get('_defaultItemTpl'),
							k = e.get('itemTpl');
						k && k !== A && (A = k), e.get('reversed') && O.reverse();
						var I = e.get('position'),
							T = l.mix(
								{},
								_[x],
								{ display: 'right' === I || 'left' === I ? 'block' : 'inline-block' },
								e.get(x)
							),
							E = l.mix({}, _[b], e.get(b));
						if (
							(l.each(O, function(t, n) {
								var r = t.checked,
									i = e._formatItemValue(t.value),
									o = t.marker.fill || t.marker.stroke,
									s = r ? o : d,
									u = void 0;
								u = l.isFunction(A) ? A(i, s, r, n) : A;
								var c = l.substitute(u, {
										index: n,
										checked: r ? 'checked' : 'unChecked',
										value: i,
										color: s,
										originColor: o,
										originValue: t.value,
									}),
									f = p.createDom(c),
									g = a(f, b);
								p.modifyCSS(f, T),
									g && p.modifyCSS(g, E),
									r || ((f.style.color = d), g && (g.style.backgroundColor = d)),
									h.appendChild(f);
							}),
							e.get('clickable'))
						) {
							var j = h.childNodes;
							c.onclick = function(n) {
								var r = n.target,
									i = r.className;
								if (((i = i.split(' ')), -1 >= i.indexOf(v) && -1 >= i.indexOf(m))) {
									var o = s(r, x),
										c = a(o, 'g2-legend-text'),
										f = a(o, b),
										h = u(O, o.getAttribute('data-value'));
									if (h) {
										var p = o.className,
											y = o.getAttribute('data-color');
										if ('single' === g)
											(h.checked = !0),
												l.each(j, function(t) {
													if (t !== o) {
														(a(t, b).style.backgroundColor = d),
															(t.className = l.replace(t.className, 'checked', 'unChecked')),
															(t.style.color = d);
														u(O, t.getAttribute('data-value')).checked = !1;
													} else c && (c.style.color = e.get('textStyle').fill), f && (f.style.backgroundColor = y), (o.className = l.replace(p, 'unChecked', 'checked'));
												});
										else {
											var _ = p.includes('checked'),
												w = 0;
											if (
												(l.each(j, function(t) {
													t.className.includes('checked') && w++;
												}),
												!t.get('allowAllCanceled') && _ && 1 === w)
											)
												return;
											(h.checked = !h.checked),
												_
													? (f && (f.style.backgroundColor = d),
													  (o.className = l.replace(p, 'checked', 'unChecked')),
													  (o.style.color = d))
													: (f && (f.style.backgroundColor = y),
													  (o.className = l.replace(p, 'unChecked', 'checked')),
													  (o.style.color = e.get('textStyle').fill));
										}
										e.emit('itemclick', {
											item: h,
											currentTarget: o,
											checked: 'single' === g || h.checked,
										});
									}
								}
							};
						}
						e.get('hoverable') &&
							((c.onmousemove = function(t) {
								var n = t.target,
									r = n.className;
								if (((r = r.split(' ')), -1 >= r.indexOf(v) && -1 >= r.indexOf(m))) {
									var i = s(n, x),
										o = i.className,
										a = u(O, i.getAttribute('data-value'));
									a && o.includes('checked')
										? e.emit('itemhover', { item: a, currentTarget: i, checked: a.checked })
										: a || e.emit('itemunhover', t);
								}
							}),
							(c.onmouseout = function(t) {
								e.emit('itemunhover', t);
							})),
							e.set('legendWrapper', c);
					}),
					(e.prototype._renderItems = function() {
						var t = this,
							e = t.get('items');
						t.get('reversed') && e.reverse(),
							l.each(e, function(e, n) {
								t._addItem(e, n);
							});
					}),
					(e.prototype._renderBack = function() {
						this.renderBack(this.get('backPadding'), this.get('background'));
					}),
					(e.prototype._formatItemValue = function(t) {
						var e = this.get('itemFormatter');
						return e && (t = e.call(this, t)), t;
					}),
					(e.prototype._getNextX = function() {
						var t = this.get('layout'),
							e = this.get('itemGap'),
							n = this.get('itemsGroup'),
							r = this.get('itemWidth'),
							i = n.get('children'),
							o = 0;
						return (
							'horizontal' === t &&
								l.each(i, function(t) {
									o += (r || t.getBBox().width) + e;
								}),
							o
						);
					}),
					(e.prototype._getNextY = function() {
						var t = this.get('itemMarginBottom'),
							e = this.get('titleShape') ? this.get('titleGap') : 0,
							n = this.get('layout'),
							r = this.get('itemsGroup'),
							i = this.get('titleShape'),
							o = r.get('children'),
							a = e;
						return (
							i && (a += i.getBBox().height),
							'vertical' === n &&
								l.each(o, function(e) {
									a += e.getBBox().height + t;
								}),
							a
						);
					}),
					(e.prototype._addItem = function(t) {
						var e = this.get('itemsGroup'),
							n = this._getNextX(),
							r = this._getNextY(),
							i = this.get('unCheckColor'),
							o = e.addGroup({ x: n, y: r, value: t.value, checked: t.checked });
						o.set('viewId', e.get('viewId'));
						var a = this.get('textStyle'),
							s = this.get('_wordSpaceing'),
							u = 0;
						if (t.marker) {
							var c = l.mix({}, t.marker, { x: t.marker.radius + n, y: r });
							t.checked || (c.fill && (c.fill = i), c.stroke && (c.stroke = i));
							var f = o.addShape('marker', { type: 'marker', attrs: c });
							f.attr('cursor', 'pointer'), (f.name = 'legend-marker'), (u += f.getBBox().width + s);
						}
						var h = l.mix({}, a, { x: u + n, y: r, text: this._formatItemValue(t.value) });
						t.checked || l.mix(h, { fill: i });
						var p = o.addShape('text', { attrs: h });
						p.attr('cursor', 'pointer'),
							(p.name = 'legend-text'),
							this.get('appendInfo') && p.setSilent('appendInfo', this.get('appendInfo'));
						var d = o.getBBox(),
							g = this.get('itemWidth'),
							y = o.addShape('rect', {
								attrs: {
									x: n,
									y: r - d.height / 2,
									fill: '#fff',
									fillOpacity: 0,
									width: g || d.width,
									height: d.height,
								},
							});
						return (
							y.attr('cursor', 'pointer'),
							y.setSilent('origin', t),
							(y.name = 'legend-item'),
							this.get('appendInfo') && y.setSilent('appendInfo', this.get('appendInfo')),
							(o.name = 'legendGroup'),
							o
						);
					}),
					(e.prototype._adjustHorizontal = function() {
						var t = this.get('itemsGroup'),
							e = t.get('children'),
							n = this.get('maxLength'),
							r = this.get('itemGap'),
							i = this.get('itemMarginBottom'),
							o = this.get('titleShape') ? this.get('titleGap') : 0,
							a = 0,
							s = 0,
							u = void 0,
							c = void 0,
							f = void 0,
							h = this.get('itemWidth');
						t.getBBox().width > n &&
							l.each(e, function(t) {
								(f = t.getBBox()),
									(u = h || f.width),
									(c = f.height + i),
									u > n - s && (a++, (s = 0)),
									t.move(s, a * c + o),
									(s += u + r);
							});
					}),
					(e.prototype._adjustVertical = function() {
						var t = this.get('itemsGroup'),
							e = this.get('titleShape'),
							n = t.get('children'),
							r = this.get('maxLength'),
							i = this.get('itemGap'),
							o = this.get('itemMarginBottom'),
							a = this.get('titleGap'),
							s = e ? e.getBBox().height + a : 0,
							u = this.get('itemWidth'),
							c = s,
							f = void 0,
							h = void 0,
							p = void 0,
							d = 0,
							g = 0;
						t.getBBox().height > r &&
							l.each(n, function(t) {
								(p = t.getBBox()),
									(f = p.width),
									(h = p.height),
									u ? (d = u + i) : f > d && (d = f + i),
									h > r - c ? ((c = s), (g += d), t.move(g, s)) : t.move(g, c),
									(c += h + o);
							});
					}),
					(e.prototype._adjustItems = function() {
						'horizontal' === this.get('layout') ? this._adjustHorizontal() : this._adjustVertical();
					}),
					(e.prototype.getWidth = function() {
						return this.get('useHtml')
							? p.getOuterWidth(this.get('legendWrapper'))
							: t.prototype.getWidth.call(this);
					}),
					(e.prototype.getHeight = function() {
						return this.get('useHtml')
							? p.getOuterHeight(this.get('legendWrapper'))
							: t.prototype.getHeight.call(this);
					}),
					(e.prototype.move = function(e, n) {
						this.get('useHtml') && !/^\#/.test(this.get('container'))
							? p.modifyCSS(this.get('legendWrapper'), { left: e + 'px', top: n + 'px' })
							: t.prototype.move.call(this, e, n);
					}),
					(e.prototype.remove = function() {
						if (this.get('useHtml')) {
							var e = this.get('legendWrapper');
							e && e.parentNode && e.parentNode.removeChild(e);
						}
						t.prototype.remove.call(this);
					}),
					e
				);
			})(f);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(1),
				u = n(78),
				c = n(2),
				l = c.Event,
				f = c.Group,
				h = n(174);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'continuous-legend',
							items: null,
							layout: 'vertical',
							width: 156,
							height: 20,
							titleGap: 22,
							textStyle: {
								fill: '#333',
								textAlign: 'center',
								textBaseline: 'middle',
								fontFamily: s.fontFamily,
							},
							slidable: !0,
							inRange: { fill: '#4E7CCC' },
							_range: [0, 100],
							middleAttr: { fill: '#fff', fillOpacity: 0 },
							outRangeStyle: { fill: '#D9D9D9' },
							numberFormatter: null,
							labelOffset: 10,
						});
					}),
					(e.prototype._calStartPoint = function() {
						var t = { x: 0, y: this.get('titleGap') - 12 },
							e = this.get('titleShape');
						if (e) {
							t.y += e.getBBox().height;
						}
						return t;
					}),
					(e.prototype._beforeRenderUI = function() {
						var e = this.get('items');
						a.isArray(e) &&
							!a.isEmpty(e) &&
							(t.prototype._beforeRenderUI.call(this),
							this.set('firstItem', e[0]),
							this.set('lastItem', e[e.length - 1]));
					}),
					(e.prototype._formatItemValue = function(t) {
						var e = this.get('numberFormatter');
						e && (t = e(t));
						var n = this.get('itemFormatter');
						return n && (t = n.call(this, t)), t;
					}),
					(e.prototype._renderUI = function() {
						t.prototype._renderUI.call(this),
							this.get('slidable') ? this._renderSlider() : this._renderBackground();
					}),
					(e.prototype._renderSlider = function() {
						var t = new f(),
							e = new f(),
							n = new f(),
							r = this._calStartPoint(),
							i = this.addGroup(h, {
								minHandleElement: t,
								maxHandleElement: e,
								backgroundElement: n,
								middleAttr: this.get('middleAttr'),
								layout: this.get('layout'),
								range: this.get('_range'),
								width: this.get('width'),
								height: this.get('height'),
							});
						i.translate(r.x, r.y),
							this.set('slider', i),
							this._renderSliderShape().attr('clip', i.get('middleHandleElement')),
							this._renderTrigger();
					}),
					(e.prototype._addBackground = function(t, e, n) {
						return (
							t.addShape(e, { attrs: a.mix({}, n, this.get('outRangeStyle')) }),
							t.addShape(e, { attrs: n })
						);
					}),
					(e.prototype._renderTrigger = function() {
						var t = this.get('firstItem'),
							e = this.get('lastItem'),
							n = this.get('layout'),
							r = this.get('textStyle'),
							i = this.get('inRange'),
							o = this.get('type'),
							s = void 0,
							u = void 0;
						'color-legend' === o
							? ((s = { fill: t.attrValue }), (u = { fill: e.attrValue }))
							: ((s = a.mix({}, i)), (u = a.mix({}, i)));
						var c = a.mix({ text: this._formatItemValue(t.value) + '' }, r),
							l = a.mix({ text: this._formatItemValue(e.value) + '' }, r);
						'vertical' === n
							? (this._addVerticalTrigger('min', s, c), this._addVerticalTrigger('max', u, l))
							: (this._addHorizontalTrigger('min', s, c), this._addHorizontalTrigger('max', u, l));
					}),
					(e.prototype._addVerticalTrigger = function(t, e, n) {
						var r = this.get('slider'),
							i = r.get(t + 'HandleElement'),
							o = this.get('width'),
							s = i.addShape('polygon', {
								attrs: a.mix(
									{
										points: [[o / 2 + 12, 0], [o / 2 + 1, 0], [o / 2 + 12, 'min' === t ? 12 : -12]],
									},
									e
								),
							}),
							u = i.addShape('text', {
								attrs: a.mix(n, {
									x: o + 8,
									y: 'max' === t ? -4 : 4,
									textAlign: 'start',
									lineHeight: 1,
									textBaseline: 'middle',
								}),
							}),
							c = this.get('layout'),
							l = 'vertical' === c ? 'ns-resize' : 'ew-resize';
						s.attr('cursor', l),
							u.attr('cursor', l),
							this.set(t + 'ButtonElement', s),
							this.set(t + 'TextElement', u);
					}),
					(e.prototype._addHorizontalTrigger = function(t, e, n) {
						var r = this.get('slider'),
							i = r.get(t + 'HandleElement'),
							o = i.addShape('polygon', {
								attrs: a.mix({ points: [[0, 0], [0, 12], ['min' === t ? -12 : 12, 12]] }, e),
							}),
							s = i.addShape('text', {
								attrs: a.mix(n, {
									x: 'min' === t ? -16 : 16,
									y: 6,
									textAlign: 'min' === t ? 'end' : 'start',
									textBaseline: 'middle',
								}),
							}),
							u = this.get('layout'),
							c = 'vertical' === u ? 'ns-resize' : 'ew-resize';
						o.attr('cursor', c),
							s.attr('cursor', c),
							this.set(t + 'ButtonElement', o),
							this.set(t + 'TextElement', s);
					}),
					(e.prototype._bindUI = function() {
						var t = this;
						if (t.get('slidable')) {
							t.get('slider').on('sliderchange', function(e) {
								var n = e.range,
									r = 1 * t.get('firstItem').value,
									i = 1 * t.get('lastItem').value,
									o = r + (n[0] / 100) * (i - r),
									a = r + (n[1] / 100) * (i - r);
								t._updateElement(o, a);
								var s = new l('itemfilter', e, !0, !0);
								(s.range = [o, a]), t.emit('itemfilter', s);
							});
						}
					}),
					(e.prototype._updateElement = function(t, e) {
						var n = this.get('minTextElement'),
							r = this.get('maxTextElement');
						if (
							(e > 1 && ((t = parseInt(t, 10)), (e = parseInt(e, 10))),
							n.attr('text', this._formatItemValue(t) + ''),
							r.attr('text', this._formatItemValue(e) + ''),
							'color-legend' === this.get('type') && this.get('attr'))
						) {
							var i = this.get('attr'),
								o = this.get('minButtonElement'),
								a = this.get('maxButtonElement');
							o.attr('fill', i.mapping(t).join('')), a.attr('fill', i.mapping(e).join(''));
						}
					}),
					e
				);
			})(u);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(26);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return (e.type = 'list'), (e.cols = null), e;
					}),
					(e.prototype.generateFacets = function(t) {
						var e = this,
							n = e.fields,
							r = n[0];
						if (!r) throw 'Please specify for the field for facet!';
						var i = e.getFieldValues(r, t),
							o = i.length,
							a = e.cols || o,
							s = parseInt((o + a - 1) / a),
							u = [];
						return (
							i.forEach(function(n, c) {
								var l = parseInt(c / a),
									f = c % a,
									h = [{ field: r, value: n, values: i }],
									p = e.getFilter(h),
									d = t.filter(p),
									g = {
										type: e.type,
										count: o,
										colValue: n,
										colField: r,
										rowField: null,
										rowValue: n,
										colIndex: f,
										rowIndex: l,
										cols: a,
										rows: s,
										data: d,
										region: e.getRegion(s, a, f, l),
									};
								u.push(g);
							}),
							u
						);
					}),
					(e.prototype.setXAxis = function(t, e, n) {
						n.rowIndex === n.rows - 1 ||
							n.cols * n.rowIndex + n.colIndex + 1 + n.cols > n.count ||
							((e[t].label = null), (e[t].title = null));
					}),
					(e.prototype.setYAxis = function(t, e, n) {
						0 !== n.colIndex && ((e[t].title = null), (e[t].label = null));
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(26);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return (e.type = 'rect'), e;
					}),
					(e.prototype.generateFacets = function(t) {
						var e = this,
							n = e.fields,
							r = [],
							i = 1,
							o = 1,
							a = n[0],
							s = n[1],
							u = [''],
							c = [''];
						return (
							a && ((u = e.getFieldValues(a, t)), (o = u.length)),
							s && ((c = e.getFieldValues(s, t)), (i = c.length)),
							u.forEach(function(n, l) {
								c.forEach(function(f, h) {
									var p = [{ field: a, value: n, values: u }, { field: s, value: f, values: c }],
										d = e.getFilter(p),
										g = t.filter(d),
										y = {
											type: e.type,
											colValue: n,
											rowValue: f,
											colField: a,
											rowField: s,
											colIndex: l,
											rowIndex: h,
											cols: o,
											rows: i,
											data: g,
											region: e.getRegion(i, o, l, h),
										};
									r.push(y);
								});
							}),
							r
						);
					}),
					(e.prototype.setXAxis = function(t, e, n) {
						n.rowIndex !== n.rows - 1
							? ((e[t].title = null), (e[t].label = null))
							: n.colIndex !== parseInt((n.cols - 1) / 2) && (e[t].title = null);
					}),
					(e.prototype.setYAxis = function(t, e, n) {
						0 !== n.colIndex
							? ((e[t].title = null), (e[t].label = null))
							: n.rowIndex !== parseInt((n.rows - 1) / 2) && (e[t].title = null);
					}),
					(e.prototype.renderTitle = function(t, e) {
						0 === e.rowIndex && this.drawColTitle(t, e),
							e.colIndex === e.cols - 1 && this.drawRowTitle(t, e);
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function a(t) {
				var e = 0;
				return (
					f.each(t, function(t) {
						e += t;
					}),
					e / t.length
				);
			}
			var s = n(2),
				u = s.Group,
				c = n(76),
				l = n(1),
				f = n(0),
				h = ['line', 'point', 'path'],
				p = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							return { label: l.label, labelCfg: null, coord: null, geomType: null, zIndex: 6 };
						}),
						(e.prototype._renderUI = function() {
							t.prototype._renderUI.call(this), this.initLabelsCfg(), this.renderLabels();
						}),
						(e.prototype._getLabelValue = function(t) {
							var e = this,
								n = t._origin,
								r = e.get('labelCfg'),
								i = r.scales,
								o = r.cfg && r.cfg.content,
								a = void 0;
							if (o) {
								var s = [];
								f.each(i, function(t) {
									s.push(n[t.field]);
								}),
									(a = o.apply(null, s));
							} else {
								var u = i[0];
								if (((a = n[u.field]), f.isArray(a))) {
									var c = [];
									f.each(a, function(t) {
										c.push(u.getText(t));
									}),
										(a = c);
								} else a = u.getText(a);
							}
							return a;
						}),
						(e.prototype.initLabelsCfg = function() {
							var t = this,
								e = t.getDefaultLabelCfg(),
								n = t.get('labelCfg');
							f.deepMix(e, n.cfg), t.set('label', e);
						}),
						(e.prototype.getDefaultLabelCfg = function() {
							var t = this,
								e = t.get('labelCfg').cfg,
								n = t.get('geomType');
							return 'polygon' === n || (e && 0 > e.offset && -1 === f.indexOf(h, n))
								? f.deepMix({}, t.get('label'), l.innerLabels)
								: f.deepMix({}, l.label, t.get('label'));
						}),
						(e.prototype.getLabelsItems = function(t) {
							var e = this,
								n = [],
								r = e.get('label'),
								i = e.get('geom'),
								o = void 0;
							return (
								f.each(t, function(t) {
									o = t._origin;
									var a = e._getLabelValue(t);
									f.isArray(a) || (a = [a]);
									var s = a.length;
									f.each(a, function(u, c) {
										var l = e.getLabelPoint(a, t, c);
										if (l && !f.isNil(l.text) && '' !== l.text) {
											l = f.mix({}, o, l);
											var h = void 0;
											(h =
												r && r.label && r.label.textAlign
													? r.label.textAlign
													: e.getLabelAlign(l, c, s)),
												(l.textAlign = h),
												i && (l._id = i._getShapeId(o) + '-glabel-' + c + '-' + l.text),
												(l.coord = e.get('coord')),
												n.push(l);
										}
									});
								}),
								n
							);
						}),
						(e.prototype.adjustItems = function(t) {
							return t;
						}),
						(e.prototype.drawLines = function(t, e) {
							var n = this;
							n.getDefaultOffset() > 0 &&
								f.each(t, function(t) {
									n.lineToLabel(t, e);
								});
						}),
						(e.prototype.lineToLabel = function(t, e) {
							var n = this,
								r = n.get('coord'),
								i = { x: t.x - t._offset.x, y: t.y - t._offset.y },
								o = { x: (i.x + t.x) / 2, y: (i.y + t.y) / 2 },
								a = n.get('lineGroup');
							a || ((a = n.addGroup({ elCls: 'x-line-group' })), n.set('lineGroup', a));
							var s = a.addShape('path', {
								attrs: f.mix(
									{
										path: ['M' + i.x, i.y + ' Q' + o.x, o.y + ' ' + t.x, t.y].join(','),
										fill: null,
										stroke: t.color,
									},
									e
								),
							});
							(s.name = 'labelLine'),
								(s._id = t._id && t._id.replace('glabel', 'glabelline')),
								s.set('coord', r);
						}),
						(e.prototype.getLabelPoint = function(t, e, n) {
							function r(e, n) {
								return (
									f.isArray(e) &&
										(e = 1 === t.length ? (e.length > 2 ? a(e) : e[e.length - 1]) : e[n]),
									e
								);
							}
							var i = this,
								o = i.get('coord'),
								s = { x: r(e.x, n), y: r(e.y, n), text: t[n] };
							if (e && e.nextPoints && ('funnel' === e.shape || 'pyramid' === e.shape)) {
								var u = -1 / 0;
								e.nextPoints.forEach(function(t) {
									(t = o.convert(t)), t.x > u && (u = t.x);
								}),
									(s.x = (s.x + u) / 2);
							}
							'pyramid' === e.shape &&
								!e.nextPoints &&
								e.points &&
								e.points.forEach(function(t) {
									(t = o.convert(t)),
										((f.isArray(t.x) && -1 === e.x.indexOf(t.x)) ||
											(f.isNumber(t.x) && e.x !== t.x)) &&
											(s.x = (s.x + t.x) / 2);
								});
							var c = i.getLabelOffset(s, n, t.length);
							return (
								i.transLabelPoint(s),
								(s.x += c.x),
								(s.y += c.y),
								(s.color = e.color),
								(s._offset = c),
								s
							);
						}),
						(e.prototype.transLabelPoint = function(t) {
							var e = this,
								n = e.get('coord'),
								r = n.applyMatrix(t.x, t.y, 1);
							(t.x = r[0]), (t.y = r[1]);
						}),
						(e.prototype.getOffsetVector = function() {
							var t = this,
								e = t.get('label'),
								n = e.offset || 0,
								r = t.get('coord');
							return r.isTransposed ? r.applyMatrix(n, 0) : r.applyMatrix(0, n);
						}),
						(e.prototype.getDefaultOffset = function() {
							var t = this,
								e = t.get('coord'),
								n = t.getOffsetVector();
							return e.isTransposed ? n[0] : n[1];
						}),
						(e.prototype.getLabelOffset = function(t, e, n) {
							var r = this,
								i = r.getDefaultOffset(),
								o = r.get('coord'),
								a = o.isTransposed,
								s = a ? 'x' : 'y',
								u = a ? 1 : -1,
								c = { x: 0, y: 0 };
							return (c[s] = e > 0 || 1 === n ? i * u : i * u * -1), c;
						}),
						(e.prototype.getLabelAlign = function(t, e, n) {
							var r = this,
								i = 'center';
							if (r.get('coord').isTransposed) {
								var o = r.getDefaultOffset();
								(i = 0 > o ? 'right' : 0 === o ? 'center' : 'left'),
									n > 1 &&
										0 === e &&
										('right' === i ? (i = 'left') : 'left' === i && (i = 'right'));
							}
							return i;
						}),
						(e.prototype.showLabels = function(t) {
							var e = this,
								n = e.getLabelsItems(t),
								r = e.get('label');
							(n = e.adjustItems(n)), e.resetLabels(n), r.labelLine && e.drawLines(n, r.labelLine);
						}),
						(e.prototype.destroy = function() {
							this.removeLabels(), t.prototype.destroy.call(this);
						}),
						e
					);
				})(u);
			f.assign(p.prototype, c.LabelsRenderer), (t.exports = p);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(83),
				s = n(13),
				u = n(0);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getPointRauis = function(t, e) {
						return s.getPointRadius(t, e);
					}),
					(e.prototype.getCirclePoint = function(t, e, n) {
						var r = this,
							i = r.get('coord'),
							o = i.getCenter(),
							a = r._isEmitLabels(),
							s = r.getPointRauis(i, n);
						if (i.isTransposed && s > e && !a) {
							t += 2 * Math.asin(e / (2 * s));
						} else s += e;
						return { x: o.x + s * Math.cos(t), y: o.y + s * Math.sin(t), angle: t, r: s };
					}),
					(e.prototype.getArcPoint = function(t, e) {
						var n = this,
							r = void 0;
						return (
							(e = e || 0),
							(r =
								u.isArray(t.x) || u.isArray(t.y)
									? { x: u.isArray(t.x) ? t.x[e] : t.x, y: u.isArray(t.y) ? t.y[e] : t.y }
									: t),
							n.transLabelPoint(r),
							r
						);
					}),
					(e.prototype.getPointAngle = function(t) {
						var e = this,
							n = e.get('coord');
						return s.getPointAngle(n, t);
					}),
					(e.prototype.getMiddlePoint = function(t) {
						var e = this,
							n = e.get('coord'),
							r = t.length,
							i = { x: 0, y: 0 };
						return (
							u.each(t, function(t) {
								(i.x += t.x), (i.y += t.y);
							}),
							(i.x /= r),
							(i.y /= r),
							(i = n.convert(i))
						);
					}),
					(e.prototype._isToMiddle = function(t) {
						return t.x.length > 2;
					}),
					(e.prototype.getLabelPoint = function(t, e, n) {
						var r = this,
							i = t[n],
							o = 1,
							a = void 0;
						r._isToMiddle(e)
							? (a = r.getMiddlePoint(e.points))
							: (1 === t.length && 0 === n ? (n = 1) : 0 === n && (o = -1),
							  (a = r.getArcPoint(e, n)));
						var s = r.getDefaultOffset();
						s *= o;
						var u = r.getPointAngle(a),
							c = r.getCirclePoint(u, s, a);
						return (
							(c.text = i),
							(c.angle = u),
							(c.color = e.color),
							(c.rotate = r.getLabelRotate(u, s, e)),
							c
						);
					}),
					(e.prototype._isEmitLabels = function() {
						return this.get('label').labelEmit;
					}),
					(e.prototype.getLabelRotate = function(t) {
						var e = this,
							n = void 0;
						return (
							(n = (180 * t) / Math.PI),
							(n += 90),
							e._isEmitLabels() && (n -= 90),
							n && (n > 90 ? (n -= 180) : -90 > n && (n += 180)),
							(n / 180) * Math.PI
						);
					}),
					(e.prototype.getLabelAlign = function(t) {
						var e = this,
							n = e.get('coord'),
							r = void 0;
						if (e._isEmitLabels())
							r = t.angle <= Math.PI / 2 && t.angle > -Math.PI / 2 ? 'left' : 'right';
						else if (n.isTransposed) {
							var i = n.getCenter(),
								o = e.getDefaultOffset();
							r =
								1 > Math.abs(t.x - i.x)
									? 'center'
									: t.angle > Math.PI || 0 >= t.angle
										? o > 0
											? 'left'
											: 'right'
										: o > 0
											? 'right'
											: 'left';
						} else r = 'center';
						return r;
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				var n = t.length;
				o.isString(t[0]) &&
					(t = t.map(function(t) {
						return e.translate(t);
					}));
				for (var r = t[1] - t[0], i = 2; n > i; i++) {
					var a = t[i] - t[i - 1];
					r > a && (r = a);
				}
				return r;
			}
			var i = n(1),
				o = n(0);
			t.exports = {
				getDefalutSize: function() {
					var t = this.get('defaultSize');
					if (!t) {
						var e = this.get('coord'),
							n = this.getXScale(),
							o = n.values,
							a = this.get('dataArray'),
							s = void 0;
						if (n.isLinear && o.length > 1) {
							o.sort();
							(s = (n.max - n.min) / r(o, n)), o.length > s && (s = o.length);
						} else s = o.length;
						var u = n.range,
							c = 1 / s,
							l = 1;
						if (
							(this.isInCircle()
								? (l = e.isTransposed && s > 1 ? i.widthRatio.multiplePie : i.widthRatio.rose)
								: (n.isLinear && (c *= u[1] - u[0]), (l = i.widthRatio.column)),
							(c *= l),
							this.hasAdjust('dodge'))
						) {
							c /= this._getDodgeCount(a);
						}
						(t = c), this.set('defaultSize', t);
					}
					return t;
				},
				_getDodgeCount: function(t) {
					var e = this.get('adjusts'),
						n = void 0,
						r = t.length;
					if (
						(o.each(e, function(t) {
							'dodge' === t.type && (n = t.dodgeBy);
						}),
						n)
					) {
						var i = o.Array.merge(t);
						r = o.Array.values(i, n).length;
					}
					return r;
				},
				getDimWidth: function(t) {
					var e = this.get('coord'),
						n = e.convertPoint({ x: 0, y: 0 }),
						r = e.convertPoint({ x: 'x' === t ? 1 : 0, y: 'x' === t ? 0 : 1 }),
						i = 0;
					return n && r && (i = Math.sqrt(Math.pow(r.x - n.x, 2) + Math.pow(r.y - n.y, 2))), i;
				},
				_getWidth: function() {
					var t = this.get('coord');
					return this.isInCircle() && !t.isTransposed
						? (t.endAngle - t.startAngle) * t.radius
						: this.getDimWidth('x');
				},
				_toNormalizedSize: function(t) {
					return t / this._getWidth();
				},
				_toCoordSize: function(t) {
					return this._getWidth() * t;
				},
				getNormalizedSize: function(t) {
					var e = this.getAttrValue('size', t);
					return (e = o.isNil(e) ? this.getDefalutSize() : this._toNormalizedSize(e));
				},
				getSize: function(t) {
					var e = this.getAttrValue('size', t);
					if (o.isNil(e)) {
						e = this._toCoordSize(this.getDefalutSize());
					}
					return e;
				},
			};
		},
		function(t, e, n) {
			var r = n(0),
				i = n(1);
			t.exports = {
				splitData: function(t) {
					if (!t.length) return [];
					var e = [],
						n = [],
						o = this.getYScale(),
						a = o.field,
						s = void 0;
					return (
						r.each(t, function(t) {
							(s = t._origin ? t._origin[a] : t[a]),
								i.connectNulls
									? r.isNil(s) || n.push(t)
									: (r.isArray(s) && r.isNil(s[0])) || r.isNil(s)
										? n.length && (e.push(n), (n = []))
										: n.push(t);
						}),
						n.length && e.push(n),
						e
					);
				},
			};
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(4),
				s = n(86),
				u = n(0),
				c = (function(t) {
					function e(n) {
						r(this, e);
						var o = i(this, t.call(this, n));
						return u.assign(o, s), o;
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.type = 'path'), (e.shapeType = 'line'), e;
						}),
						(e.prototype.getDrawCfg = function(e) {
							var n = t.prototype.getDrawCfg.call(this, e);
							return (n.isStack = this.hasStack()), n;
						}),
						(e.prototype.draw = function(t, e, n, r) {
							var i = this,
								o = this.splitData(t),
								a = this.getDrawCfg(t[0]);
							(a.origin = t),
								u.each(o, function(t, o) {
									if (!u.isEmpty(t)) {
										(a.splitedIndex = o), (a.points = t);
										var s = n.drawShape(a.shape, a, e);
										i.appendShapeInfo(s, r + o);
									}
								});
						}),
						e
					);
				})(a);
			(a.Path = c), (t.exports = c);
		},
		function(t, e, n) {
			function r(t) {
				var e = [];
				return (
					o.each(t, function(t) {
						o.isArray(t) ? (e = e.concat(t)) : e.push(t);
					}),
					e
				);
			}
			function i(t, e) {
				var n = void 0;
				for (n = e; n > 0 && t % n != 0; n--);
				if (1 === n) for (n = e; n > 0 && (t - 1) % n != 0; n--);
				return n;
			}
			var o = n(0);
			t.exports = function(t) {
				var e = {},
					n = [],
					o = t.maxCount || 8,
					a = r(t.data),
					s = a.length,
					u = i(s - 1, o - 1) + 1;
				2 === u ? (u = o) : o - 4 > u && (u = o - 4);
				var c = parseInt(s / (u - 1), 10),
					l = a
						.map(function(t, e) {
							return e % c == 0 ? a.slice(e, e + c) : null;
						})
						.filter(function(t) {
							return t;
						});
				a.length && n.push(a[0]);
				for (var f = 1; l.length > f && s - c > f * c; f++) n.push(l[f][0]);
				if (a.length) {
					var h = a[s - 1];
					-1 === n.indexOf(h) && n.push(h);
				}
				return (e.categories = a), (e.ticks = n), e;
			};
		},
		function(t, e) {
			function n(t) {
				var e = 1;
				if (t === 1 / 0 || t === -1 / 0) throw Error('Not support Infinity!');
				if (1 > t) {
					for (var n = 0; 1 > t; ) (e /= 10), (t *= 10), n++;
					('' + e).length > o && (e = parseFloat(e.toFixed(n)));
				} else for (; t > 10; ) (e *= 10), (t /= 10);
				return e;
			}
			function r(t, e) {
				var n = t.length;
				if (0 === n) return NaN;
				var r = t[0];
				if (t[0] > e) return NaN;
				if (e >= t[n - 1]) return t[n - 1];
				for (var i = 1; t.length > i && t[i] <= e; i++) r = t[i];
				return r;
			}
			function i(t, e) {
				var n = t.length;
				if (0 === n) return NaN;
				var r = void 0;
				if (e > t[n - 1]) return NaN;
				if (t[0] > e) return t[0];
				for (var i = 1; t.length > i; i++)
					if (t[i] >= e) {
						r = t[i];
						break;
					}
				return r;
			}
			var o = 12,
				a = {
					snapFactorTo: function(t, e, r) {
						if (isNaN(t)) return NaN;
						var i = 1;
						if (0 !== t) {
							0 > t && (i = -1), (t *= i);
							var s = n(t);
							(i *= s), (t /= s);
						}
						t =
							'floor' === r
								? a.snapFloor(e, t)
								: 'ceil' === r
									? a.snapCeiling(e, t)
									: a.snapTo(e, t);
						var u = t * i;
						if (1 > Math.abs(i) && ('' + u).length > o) {
							u = (t / parseInt(1 / i)) * (i > 0 ? 1 : -1);
						}
						return u;
					},
					snapMultiple: function(t, e, n) {
						return (
							('ceil' === n
								? Math.ceil(t / e)
								: 'floor' === n
									? Math.floor(t / e)
									: Math.round(t / e)) * e
						);
					},
					snapTo: function(t, e) {
						var n = r(t, e),
							o = i(t, e);
						if (isNaN(n) || isNaN(o)) {
							if (t[0] >= e) return t[0];
							var a = t[t.length - 1];
							if (e >= a) return a;
						}
						return Math.abs(e - n) < Math.abs(o - e) ? n : o;
					},
					snapFloor: function(t, e) {
						return r(t, e);
					},
					snapCeiling: function(t, e) {
						return i(t, e);
					},
				};
			t.exports = a;
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(27),
				s = n(0),
				u = n(88);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return s.mix({}, e, { type: 'cat', tickCount: null, isCategory: !0 });
					}),
					(e.prototype.init = function() {
						var t = this,
							e = t.values,
							n = t.tickCount;
						if (
							(s.each(e, function(t, n) {
								e[n] = '' + t;
							}),
							!t.ticks)
						) {
							var r = e;
							if (n) {
								r = u({ maxCount: n, data: e }).ticks;
							}
							this.ticks = r;
						}
					}),
					(e.prototype.getText = function(e) {
						return (
							-1 === this.values.indexOf(e) && s.isNumber(e) && (e = this.values[Math.round(e)]),
							t.prototype.getText.call(this, e)
						);
					}),
					(e.prototype.translate = function(t) {
						var e = this.values.indexOf(t);
						return -1 === e && s.isNumber(t) ? (e = t) : -1 === e && (e = NaN), e;
					}),
					(e.prototype.scale = function(t) {
						var e = this.rangeMin(),
							n = this.rangeMax(),
							r = void 0;
						return (
							(s.isString(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)),
							(r = this.values.length > 1 ? t / (this.values.length - 1) : t),
							e + r * (n - e)
						);
					}),
					(e.prototype.invert = function(t) {
						if (s.isString(t)) return t;
						var e = this.rangeMin(),
							n = this.rangeMax();
						e > t && (t = e), t > n && (t = n);
						var r = (t - e) / (n - e),
							i = Math.round(r * (this.values.length - 1)) % this.values.length;
						return (i = i || 0), this.values[i];
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			var r = n(0),
				i = n(27);
			(i.Linear = n(28)),
				(i.Identity = n(218)),
				(i.Cat = n(90)),
				(i.Time = n(222)),
				(i.TimeCat = n(221)),
				(i.Log = n(219)),
				(i.Pow = n(220));
			for (var o in i)
				!(function(t) {
					if (i.hasOwnProperty(t)) {
						var e = r.lowerFirst(t);
						i[e] = function(e) {
							return new i[t](e);
						};
					}
				})(o);
			var a = ['cat', 'timeCat'];
			(i.isCategory = function(t) {
				return a.indexOf(t) >= 0;
			}),
				(t.exports = i);
		},
		function(t, e, n) {
			var r = n(0);
			t.exports = {
				toTimeStamp: function(t) {
					return (
						r.isString(t) &&
							(t =
								t.indexOf('T') > 0
									? new Date(t).getTime()
									: new Date(t.replace(/-/gi, '/')).getTime()),
						r.isDate(t) && (t = t.getTime()),
						t
					);
				},
			};
		},
		function(t, e) {
			var n,
				r,
				i = [
					'#1890FF',
					'#2FC25B',
					'#FACC14',
					'#223273',
					'#8543E0',
					'#13C2C2',
					'#3436C7',
					'#F04864',
				],
				o = [
					'#1890FF',
					'#41D9C7',
					'#2FC25B',
					'#FACC14',
					'#E6965C',
					'#223273',
					'#7564CC',
					'#8543E0',
					'#5C8EE6',
					'#13C2C2',
					'#5CA3E6',
					'#3436C7',
					'#B381E6',
					'#F04864',
					'#D598D9',
				],
				a = [
					'#1890FF',
					'#66B5FF',
					'#41D9C7',
					'#2FC25B',
					'#6EDB8F',
					'#9AE65C',
					'#FACC14',
					'#E6965C',
					'#57AD71',
					'#223273',
					'#738AE6',
					'#7564CC',
					'#8543E0',
					'#A877ED',
					'#5C8EE6',
					'#13C2C2',
					'#70E0E0',
					'#5CA3E6',
					'#3436C7',
					'#8082FF',
					'#DD81E6',
					'#F04864',
					'#FA7D92',
					'#D598D9',
				],
				s = [
					'#1890FF',
					'#13C2C2',
					'#2FC25B',
					'#FACC14',
					'#F04864',
					'#8543E0',
					'#3436C7',
					'#223273',
				],
				u = [
					'#1890FF',
					'#73C9E6',
					'#13C2C2',
					'#6CD9B3',
					'#2FC25B',
					'#9DD96C',
					'#FACC14',
					'#E6965C',
					'#F04864',
					'#D66BCA',
					'#8543E0',
					'#8E77ED',
					'#3436C7',
					'#737EE6',
					'#223273',
					'#7EA2E6',
				],
				c =
					'"-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, "sans-serif"';
			t.exports = {
				defaultColor: '#1890FF',
				plotCfg: { padding: [20, 20, 95, 80] },
				fontFamily: c,
				defaultLegendPosition: 'bottom',
				colors: i,
				colors_16: o,
				colors_24: a,
				colors_pie: s,
				colors_pie_16: u,
				shapes: {
					point: [
						'hollowCircle',
						'hollowSquare',
						'hollowDiamond',
						'hollowBowtie',
						'hollowTriangle',
						'hollowHexagon',
						'cross',
						'tick',
						'plus',
						'hyphen',
						'line',
					],
					line: ['line', 'dash', 'dot'],
					area: ['area'],
				},
				sizes: [1, 10],
				opacities: [0.1, 0.9],
				axis: {
					top: {
						position: 'top',
						title: null,
						label: {
							offset: 14,
							textStyle: {
								fill: '#545454',
								fontSize: 12,
								lineHeight: 20,
								textBaseline: 'middle',
								fontFamily: c,
							},
							autoRotate: !0,
						},
						line: { lineWidth: 1, stroke: '#BFBFBF' },
						tickLine: { lineWidth: 1, stroke: '#BFBFBF', length: 4 },
					},
					bottom: {
						position: 'bottom',
						title: null,
						label: {
							offset: 22,
							autoRotate: !0,
							textStyle: {
								fill: '#545454',
								fontSize: 12,
								lineHeight: 20,
								textBaseline: 'middle',
								fontFamily: c,
							},
						},
						line: { lineWidth: 1, stroke: '#BFBFBF' },
						tickLine: { lineWidth: 1, stroke: '#BFBFBF', length: 4 },
					},
					left: {
						position: 'left',
						title: null,
						label: {
							offset: 12,
							autoRotate: !0,
							textStyle: {
								fill: '#545454',
								fontSize: 12,
								lineHeight: 20,
								textBaseline: 'middle',
								fontFamily: c,
							},
						},
						line: null,
						tickLine: null,
						grid: {
							zIndex: -1,
							lineStyle: { stroke: '#E9E9E9', lineWidth: 1, lineDash: [3, 3] },
							hideFirstLine: !0,
						},
					},
					right: {
						position: 'right',
						title: null,
						label: {
							offset: 12,
							autoRotate: !0,
							textStyle: {
								fill: '#545454',
								fontSize: 12,
								lineHeight: 20,
								textBaseline: 'middle',
								fontFamily: c,
							},
						},
						line: null,
						tickLine: null,
						grid: {
							lineStyle: { stroke: '#E9E9E9', lineWidth: 1, lineDash: [3, 3] },
							hideFirstLine: !0,
						},
					},
					circle: {
						zIndex: 1,
						title: null,
						label: {
							offset: 12,
							textStyle: { fill: '#545454', fontSize: 12, lineHeight: 20, fontFamily: c },
						},
						line: { lineWidth: 1, stroke: '#BFBFBF' },
						tickLine: { lineWidth: 1, stroke: '#BFBFBF', length: 4 },
						grid: {
							lineStyle: { stroke: '#E9E9E9', lineWidth: 1, lineDash: [3, 3] },
							hideFirstLine: !0,
						},
					},
					radius: {
						zIndex: 0,
						label: {
							offset: 12,
							textStyle: {
								fill: '#545454',
								fontSize: 12,
								textBaseline: 'middle',
								lineHeight: 20,
								fontFamily: c,
							},
						},
						line: { lineWidth: 1, stroke: '#BFBFBF' },
						tickLine: { lineWidth: 1, stroke: '#BFBFBF', length: 4 },
						grid: {
							lineStyle: { stroke: '#E9E9E9', lineWidth: 1, lineDash: [3, 3] },
							type: 'circle',
						},
					},
					helix: {
						grid: null,
						label: null,
						title: null,
						line: { lineWidth: 1, stroke: '#BFBFBF' },
						tickLine: { lineWidth: 1, length: 4, stroke: '#BFBFBF' },
					},
				},
				label: {
					offset: 20,
					textStyle: { fill: '#545454', fontSize: 12, textBaseline: 'middle', fontFamily: c },
				},
				treemapLabels: {
					offset: 10,
					textStyle: {
						fill: '#fff',
						fontSize: 12,
						textBaseline: 'top',
						fontStyle: 'bold',
						fontFamily: c,
					},
				},
				innerLabels: {
					textStyle: { fill: '#fff', fontSize: 12, textBaseline: 'middle', fontFamily: c },
				},
				thetaLabels: { labelLine: { lineWidth: 1 }, labelHeight: 14, offset: 30 },
				legend: {
					right: {
						position: 'right',
						layout: 'vertical',
						itemMarginBottom: 8,
						width: 16,
						height: 156,
						title: null,
						textStyle: {
							fill: '#8C8C8C',
							fontSize: 12,
							textAlign: 'start',
							textBaseline: 'middle',
							lineHeight: 20,
							fontFamily: c,
						},
						unCheckColor: '#bfbfbf',
					},
					left: {
						position: 'left',
						layout: 'vertical',
						itemMarginBottom: 8,
						width: 16,
						height: 156,
						title: null,
						textStyle: {
							fill: '#8C8C8C',
							fontSize: 12,
							textAlign: 'start',
							textBaseline: 'middle',
							lineHeight: 20,
							fontFamily: c,
						},
						unCheckColor: '#bfbfbf',
					},
					top: {
						position: 'top',
						offset: 6,
						layout: 'horizontal',
						title: null,
						itemGap: 10,
						width: 156,
						height: 16,
						textStyle: {
							fill: '#8C8C8C',
							fontSize: 12,
							textAlign: 'start',
							textBaseline: 'middle',
							lineHeight: 20,
							fontFamily: c,
						},
						unCheckColor: '#bfbfbf',
					},
					bottom: {
						position: 'bottom',
						offset: 6,
						layout: 'horizontal',
						title: null,
						itemGap: 10,
						width: 156,
						height: 16,
						textStyle: {
							fill: '#8C8C8C',
							fontSize: 12,
							textAlign: 'start',
							textBaseline: 'middle',
							lineHeight: 20,
							fontFamily: c,
						},
						unCheckColor: '#bfbfbf',
					},
					html: ((n = {}),
					(n['g2-legend'] = {
						height: 'auto',
						width: 'auto',
						position: 'absolute',
						overflow: 'auto',
						fontSize: '12px',
						fontFamily: c,
						lineHeight: '20px',
						color: '#8C8C8C',
					}),
					(n['g2-legend-title'] = { marginBottom: '4px' }),
					(n['g2-legend-list'] = { listStyleType: 'none', margin: 0, padding: 0 }),
					(n['g2-legend-list-item'] = {
						cursor: 'pointer',
						marginBottom: '5px',
						marginRight: '24px',
					}),
					(n['g2-legend-marker'] = {
						width: '9px',
						height: '9px',
						borderRadius: '50%',
						display: 'inline-block',
						marginRight: '8px',
						verticalAlign: 'middle',
					}),
					n),
					gradient: {
						textStyle: {
							fill: '#8C8C8C',
							fontSize: 12,
							textAlign: 'center',
							textBaseline: 'middle',
							lineHeight: 20,
							fontFamily: c,
						},
						lineStyle: { lineWidth: 1, stroke: '#fff' },
						unCheckColor: '#bfbfbf',
					},
					margin: [0, 20, 24, 5],
					legendMargin: 24,
				},
				tooltip: ((r = { crosshairs: !1, offset: 15 }),
				(r['g2-tooltip'] = {
					position: 'absolute',
					visibility: 'hidden',
					whiteSpace: 'nowrap',
					zIndex: 8,
					transition:
						'visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
					backgroundColor: 'rgba(0, 0, 0, 0.65)',
					borderRadius: '4px',
					color: 'rgb(255, 255, 255)',
					fontSize: '12px',
					fontFamily: c,
					lineHeight: '20px',
					padding: '10px 10px 6px 10px',
				}),
				(r['g2-tooltip-title'] = { marginBottom: '4px' }),
				(r['g2-tooltip-list'] = { margin: 0, listStyleType: 'none', padding: 0 }),
				(r['g2-tooltip-list-item'] = { marginBottom: '4px' }),
				(r['g2-tooltip-marker'] = {
					width: '7px',
					height: '7px',
					borderRadius: '50%',
					border: '1px solid #fff',
					display: 'inline-block',
					marginRight: '8px',
				}),
				r),
				tooltipMarker: {
					symbol: function(t, e, n, r, i) {
						var o = i.get('color');
						(r.fillStyle = o),
							(r.lineWidth = 1),
							(r.strokeStyle = '#fff'),
							r.beginPath(),
							r.arc(t, e, n, 0, 2 * Math.PI, !1),
							r.fill(),
							r.stroke(),
							r.save(),
							r.beginPath(),
							(r.fillStyle = '#fff'),
							(r.strokeStyle = o),
							(r.globalAlpha = 0.2),
							(r.lineWidth = 3),
							r.arc(t, e, 6, 0, 2 * Math.PI, !1),
							r.stroke(),
							r.restore();
					},
					radius: 4,
				},
				tooltipCrosshairsRect: { type: 'rect', style: { fill: '#CCD6EC', opacity: 0.3 } },
				tooltipCrosshairsLine: { style: { stroke: 'rgba(0, 0, 0, 0.25)', lineWidth: 1 } },
				shape: {
					point: { lineWidth: 1, fill: '#1890FF', radius: 4 },
					hollowPoint: { fill: '#fff', lineWidth: 1, stroke: '#1890FF', radius: 3 },
					interval: { lineWidth: 0, fill: '#1890FF', fillOpacity: 0.85 },
					hollowInterval: { fill: '#fff', stroke: '#1890FF', fillOpacity: 0, lineWidth: 2 },
					area: { lineWidth: 0, fill: '#1890FF', fillOpacity: 0.3 },
					polygon: { lineWidth: 0, fill: '#1890FF', fillOpacity: 1 },
					hollowPolygon: { fill: '#fff', stroke: '#1890FF', fillOpacity: 0, lineWidth: 2 },
					hollowArea: { fill: '#fff', stroke: '#1890FF', fillOpacity: 0, lineWidth: 2 },
					line: { stroke: '#1890FF', lineWidth: 2, fill: null },
					edge: { stroke: '#1890FF', lineWidth: 1, fill: null },
					schema: { stroke: '#1890FF', lineWidth: 1, fill: null },
				},
				guide: {
					line: {
						lineStyle: { stroke: '#1890FF', lineDash: [0, 2, 2], lineWidth: 1 },
						text: {
							position: 'end',
							autoRotate: !0,
							style: { fill: '#545454', fontSize: 12, textAlign: 'center', fontFamily: c },
						},
					},
					text: {
						style: {
							fill: '#545454',
							fontSize: 12,
							textBaseline: 'middle',
							textAlign: 'start',
							fontFamily: c,
						},
					},
					region: { style: { lineWidth: 0, fill: '#000', fillOpacity: 0.04 } },
					html: { alignX: 'middle', alignY: 'middle' },
				},
				pixelRatio: null,
			};
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }),
				(e.default = {
					COORD_FUNC_PROPS: ['rotate', 'scale', 'reflect', 'transpose'],
					GEOM_FUNC_PROPS: [
						'position',
						'color',
						'size',
						'shape',
						'opacity',
						'tooltip',
						'style',
						'animate',
						'active',
						'select',
					],
				});
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function i() {
				return [
					{ prop: 'onMouseEnter', event: 'mouseenter' },
					{ prop: 'onMouseMove', event: 'mousemove' },
					{ prop: 'onMouseLeave', event: 'mouseleave' },
					{ prop: 'onClick', event: 'click' },
					{ prop: 'onDblClick', event: 'dblclick' },
					{ prop: 'onMouseDown', event: 'mousedown' },
					{ prop: 'onMouseUp', event: 'mouseup' },
					{ prop: 'onTouchStart', event: 'touchstart' },
					{ prop: 'onTouchMove', event: 'touchmove' },
					{ prop: 'onTouchEnd', event: 'touchend' },
				];
			}
			function o(t) {
				var e = i();
				return (
					g.default.map(e, function(e) {
						return (e.event = t + ':' + e.event), e;
					}),
					e
				);
			}
			function a(t) {
				var e = arguments[2];
				g.default.each(
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					function(n) {
						var r = n.prop,
							i = n.event,
							o = e[r];
						if (g.default.isFunction(o)) t.on(i, o);
						else if (g.default.isObject(o))
							for (var a in o) void 0 !== o[a] && t.on(a + ':' + i, o[a]);
					}
				);
			}
			function s(t, e) {
				a(t, P, e);
			}
			function u(t) {
				var e = arguments[2],
					n = arguments[3];
				g.default.each(
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					function(r) {
						var i = r.prop,
							o = r.event,
							a = e[i],
							s = n[i],
							u = void 0;
						if (!g.default.shallowEqual(a, s))
							if (g.default.isFunction(a) && g.default.isFunction(s)) t.off(o, a), t.on(o, s);
							else if (g.default.isObject(a) && g.default.isObject(s)) {
								for (u in a) Object.prototype.hasOwnProperty.call(a, u) && t.off(u + ':' + o, a[u]);
								for (u in s) Object.prototype.hasOwnProperty.call(s, u) && t.on(u + ':' + o, s[u]);
							}
					}
				);
			}
			function c(t, e, n) {
				u(t, P, e, n);
			}
			function l(t) {
				var e = arguments[2];
				g.default.each(
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					function(n) {
						var r = n.prop,
							i = n.event,
							o = e[r];
						if (g.default.isFunction(o)) t.off(i, o);
						else if (g.default.isObject(o))
							for (var a in o)
								Object.prototype.hasOwnProperty.call(o, a) && t.off(a + ':' + i, o[a]);
					}
				);
			}
			function f(t, e) {
				l(t, P, e);
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			for (
				var h = n(11),
					p = r(h),
					d = n(18),
					g = r(d),
					y = [
						{ prop: 'onPlotMove', event: 'plotmove' },
						{ prop: 'onPlotEnter', event: 'plotenter' },
						{ prop: 'onPlotLeave', event: 'plotleave' },
						{ prop: 'onPlotClick', event: 'plotclick' },
						{ prop: 'onPlotDblClick', event: 'plotdblclick' },
						{ prop: 'onItemSelected', event: 'itemselected' },
						{ prop: 'onItemUnselected', event: 'itemunselected' },
						{ prop: 'onItemSelectedChange', event: 'itemselectedchange' },
						{ prop: 'onTooltipChange', event: 'tooltip:change' },
						{ prop: 'onTooltipShow', event: 'tooltip:show' },
						{ prop: 'onTooltipHide', event: 'tooltip:hide' },
					],
					v = [
						'mouseenter',
						'mousemove',
						'mouseleave',
						'click',
						'dblclick',
						'mousedown',
						'mouseup',
						'touchstart',
						'touchmove',
						'touchend',
					],
					m = [
						'Mouseenter',
						'Mousemove',
						'Mouseleave',
						'Click',
						'Dblclick',
						'Mousedown',
						'Mouseup',
						'Touchstart',
						'Touchmove',
						'Touchend',
					],
					x = [
						'point',
						'area',
						'line',
						'path',
						'interval',
						'schema',
						'polygon',
						'edge',
						'axis-title',
						'axis-label',
						'axis-ticks',
						'axis-line',
						'axis-grid',
						'legend-title',
						'legend-item',
						'legend-marker',
						'legend-text',
						'guide-text',
						'guide-region',
						'guide-line',
						'guide-image',
						'label',
					],
					b = [
						'onPoint',
						'onArea',
						'onLine',
						'onPath',
						'onInterval',
						'onSchema',
						'onPolygon',
						'onEdge',
						'onAxisTitle',
						'onAxisLabel',
						'onAxisTicks',
						'onAxisLine',
						'onAxisGrid',
						'onLegendTitle',
						'onLegendItem',
						'onLegendMarker',
						'onLegendText',
						'onGuideText',
						'onGuideRegion',
						'onGuideLine',
						'onGuideImage',
						'onLabel',
					],
					_ = [],
					w = 0;
				22 > w;
				w += 1
			)
				for (var S = 0; 10 > S; S += 1)
					_.push({ prop: '' + b[w] + m[S], event: x[w] + ':' + v[S] });
			var M = y.concat(_),
				P = i();
			e.default = {
				baseEventObjectTypes: {
					onMouseEnter: p.default.object,
					onMouseMove: p.default.object,
					onMouseLeave: p.default.object,
					onClick: p.default.oneOfType([p.default.object, p.default.func]),
					onDblClick: p.default.object,
					onMouseDown: p.default.object,
					onMouseUp: p.default.object,
					onTouchStart: p.default.object,
					onTouchMove: p.default.object,
					onTouchEnd: p.default.object,
				},
				baseEventFuncTypes: {
					onMouseEnter: p.default.func,
					onMouseMove: p.default.func,
					onMouseLeave: p.default.func,
					onClick: p.default.func,
					onDblClick: p.default.func,
					onMouseDown: p.default.func,
					onMouseUp: p.default.func,
					onTouchStart: p.default.func,
					onTouchMove: p.default.func,
					onTouchEnd: p.default.func,
				},
				genBaseEvents: i,
				genItemBaseEvents: o,
				bindEvents: a,
				bindBaseEvents: s,
				updateEvents: u,
				updateBaseEvents: c,
				unbindEvents: l,
				unbindBaseEvents: f,
				chartEvents: M,
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function i(t) {
				if (Array.isArray(t)) {
					for (var e = 0, n = Array(t.length); t.length > e; e++) n[e] = t[e];
					return n;
				}
				return Array.from(t);
			}
			function o(t, e) {
				var n = {};
				for (var r in t)
					0 > e.indexOf(r) && Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
				return n;
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var a =
					Object.assign ||
					function(t) {
						for (var e = 1; arguments.length > e; e++) {
							var n = arguments[e];
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
						}
						return t;
					},
				s = n(45),
				u = (function(t) {
					if (t && t.__esModule) return t;
					var e = {};
					if (null != t)
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					return (e.default = t), e;
				})(s),
				c = n(48),
				l = n(94),
				f = r(l),
				h = n(95),
				p = r(h),
				d = n(47),
				g = r(d),
				y = f.default.COORD_FUNC_PROPS,
				v = f.default.GEOM_FUNC_PROPS;
			e.default = {
				createChart: function(t) {
					var e = t.chart,
						n = new u.Chart(e.props);
					return (e.g2Instance = n), n;
				},
				executeChartConfig: function(t, e) {
					var n = e.chart,
						r = n.props;
					t.coord('rect', {}),
						t.source(r.data, r.scale),
						((e.facet || r.axis) && e.facet && !1 !== r.axis) || t.axis(!1),
						t.legend(!1),
						t.tooltip(!1),
						r.filter &&
							r.filter.forEach(function(e) {
								t.filter(e[0], e[1]);
							}),
						p.default.bindEvents(t, p.default.chartEvents, r),
						p.default.bindBaseEvents(t, r);
				},
				coord: function(t, e) {
					var n = e.coord;
					if (n && !n.g2Instance) {
						var r = n.props,
							a = r.type,
							s = o(r, ['type']),
							u = t.coord(a || 'rect', c.Util.without(s, y));
						c.Prop.init(y, s, function(t, e) {
							u[e].apply(u, i(t));
						}),
							(n.g2Instance = u);
					}
				},
				createLabel: function(t, e) {
					if (e && !e.g2Instance) {
						var n = e.props,
							r = n.content,
							i = o(n, ['content']);
						r && (e.g2Instance = c.Util.isArray(r) ? t.label(r[0], r[1], i) : t.label(r, i));
					}
				},
				createGeom: function(t, e) {
					if (e.g2Instance) return void (e.label && this.createLabel(e.g2Instance, e.label));
					var n = e.props,
						r = t[n.type || 'interval']();
					n.adjust && r.adjust(n.adjust),
						c.Prop.init(v, n, function(t, e) {
							r[e].apply(r, i(t));
						}),
						(e.g2Instance = r),
						this.createLabel(r, e.label);
				},
				geoms: function(t, e) {
					var n = e.geoms;
					if (n)
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && this.createGeom(t, n[r]);
				},
				legends: function(t, e) {
					var n = e.legends;
					for (var r in n)
						if (n[r]) {
							var a = n[r];
							if (a.g2Instance) return;
							var s = a.props,
								u = s.name,
								c = s.visible,
								l = o(s, ['name', 'visible']),
								f = c;
							Object.prototype.hasOwnProperty.call(a.props, 'visible') || (f = !0);
							var h = f ? l : f;
							a.g2Instance = t.legend.apply(t, i(u ? [u, h] : [h]));
						}
				},
				tooltip: function(t, e) {
					var n = e.tooltip;
					n && !n.g2Instance && (n.g2Instance = t.tooltip(a({}, n.props)));
				},
				createAxis: function(t, e) {
					if (!e.g2Instance) {
						var n = e.props,
							r = n.name,
							i = n.visible,
							a = o(n, ['name', 'visible']);
						e.g2Instance =
							i || !Object.prototype.hasOwnProperty.call(e.props, 'visible')
								? t.axis(r, a)
								: t.axis(r, !1);
					}
				},
				axises: function(t, e) {
					var n = e.axises;
					for (var r in n) n[r] && this.createAxis(t, n[r]);
				},
				views: function(t, e) {
					var n = e.views;
					for (var r in n) n[r] && this.createView(t, n[r]);
				},
				createView: function(t, e) {
					if ('Facet' !== e.parentInfo.name) {
						if (e.g2Instance)
							return (
								e.filter &&
									e.filter.forEach(function(t) {
										e.g2Instance.filter(t[0], t[1]);
									}),
								this.coord(e.g2Instance, e),
								this.axises(e.g2Instance, e),
								this.geoms(e.g2Instance, e),
								void this.guide(e.g2Instance, e.guide)
							);
						var n = e.props,
							r = n.scale,
							i = n.data,
							s = n.instance,
							u = n.axis,
							c = n.filter,
							l = o(n, ['scale', 'data', 'instance', 'axis', 'filter', 'geoms']),
							f = void 0;
						(f = s || t.view(a({}, l))),
							i && f.source(i, r),
							r && f.scale(r),
							c &&
								c.forEach(function(t) {
									f.filter(t[0], t[1]);
								}),
							!0 === u || s || f.axis(!1),
							(e.g2Instance = f),
							this.coord(f, e),
							this.axises(f, e),
							this.geoms(f, e),
							this.guide(f, e.guide);
					}
				},
				facetView: function(t, e) {
					var n = e.props,
						r = n.scale,
						i = n.data,
						a = n.axis;
					o(n, ['scale', 'data', 'axis', 'geoms']);
					i && t.source(i, r),
						r && t.scale(r),
						!1 === a && t.axis(!1),
						this.coord(t, e),
						this.axises(t, e),
						this.geoms(t, e),
						this.guide(t, e.guide),
						g.default.mergeView(e, !0);
				},
				guide: function(t, e) {
					if (e) {
						var n = e.elements;
						for (var r in n)
							if (n[r]) {
								var i = n[r];
								if (!i.g2Instance) {
									var a = i.props,
										s = o(a, ['type']);
									i.g2Instance = t.guide()[i.type](s);
								}
							}
					}
				},
				facet: function(t, e) {
					var n = this,
						r = e.facet;
					if (r && !r.g2Instance) {
						var i = r.props,
							a = i.children,
							s = i.type,
							u = o(i, ['children', 'type']);
						if (!a) return void t.facet(s, u);
						var c = e.views,
							l = null;
						for (var f in c)
							if (c[f] && 'Facet' === c[f].parentInfo.name && c[f].parentInfo.id === r.id) {
								l = c[f];
								break;
							}
						l &&
							(g.default.mergeView(l, !0),
							(u.eachView = function(t) {
								n.facetView(t, l);
							}),
							t.facet(s, u));
					}
				},
				synchronizeG2Add: function(t, e) {
					this.coord(t, e),
						this.axises(t, e),
						this.legends(t, e),
						this.tooltip(t, e),
						this.geoms(t, e),
						this.facet(t, e),
						this.views(t, e),
						this.guide(t, e.guide);
				},
				synchronizeG2Views: function(t, e) {
					var n = e.views;
					for (var r in n) n[r] && this.synchronizeG2View(n[r].g2Instance, n[r]);
				},
				synchronizeG2View: function(t, e) {
					t.clear(), this.clearViewG2Instance(e);
					var n = e.props,
						r = n.scale,
						i = n.data,
						a = n.instance,
						s = n.axis;
					o(n, ['scale', 'data', 'instance', 'axis', 'geoms']);
					i && t.source(i, r),
						r && t.scale(r),
						!0 === s || a || t.axis(!1),
						this.coord(t, e),
						this.axises(t, e),
						this.geoms(t, e),
						this.guide(t, e.guide);
				},
				clearViewG2Instance: function(t) {
					t.coord && delete t.coord.g2Instance,
						t.axises &&
							Object.keys(t.axises).forEach(function(e) {
								delete t.axises[e].g2Instance;
							}),
						t.geoms &&
							Object.keys(t.geoms).forEach(function(e) {
								delete t.geoms[e].g2Instance,
									t.geoms[e].label && delete t.geoms[e].label.g2Instance;
							}),
						t.guide &&
							t.guide.elements &&
							Object.keys(t.guide.elements).forEach(function(e) {
								delete t.guide.elements[e].g2Instance;
							});
				},
			};
		},
		function(t, e, n) {
			'use strict';
			n.d(e, 'b', function() {
				return r;
			}),
				n.d(e, 'a', function() {
					return i;
				});
			var r = Math.PI / 180,
				i = 180 / Math.PI;
		},
		function(t, e, n) {
			'use strict';
			var r = function(t) {
				return function() {
					return this.matches(t);
				};
			};
			if ('undefined' != typeof document) {
				var i = document.documentElement;
				if (!i.matches) {
					var o =
						i.webkitMatchesSelector ||
						i.msMatchesSelector ||
						i.mozMatchesSelector ||
						i.oMatchesSelector;
					r = function(t) {
						return function() {
							return o.call(this, t);
						};
					};
				}
			}
			e.a = r;
		},
		function(t, e, n) {
			'use strict';
			var r = n(6);
			e.a = function(t) {
				return 'string' == typeof t
					? new r.b([[document.querySelector(t)]], [document.documentElement])
					: new r.b([[t]], r.c);
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				(this.ownerDocument = t.ownerDocument),
					(this.namespaceURI = t.namespaceURI),
					(this._next = null),
					(this._parent = t),
					(this.__data__ = e);
			}
			e.b = r;
			var i = n(101),
				o = n(6);
			(e.a = function() {
				return new o.b(this._enter || this._groups.map(i.a), this._parents);
			}),
				(r.prototype = {
					constructor: r,
					appendChild: function(t) {
						return this._parent.insertBefore(t, this._next);
					},
					insertBefore: function(t, e) {
						return this._parent.insertBefore(t, e);
					},
					querySelector: function(t) {
						return this._parent.querySelector(t);
					},
					querySelectorAll: function(t) {
						return this._parent.querySelectorAll(t);
					},
				});
		},
		function(t, e, n) {
			'use strict';
			e.a = function(t) {
				return Array(t.length);
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function() {
					this.style.removeProperty(t);
				};
			}
			function i(t, e, n) {
				return function() {
					this.style.setProperty(t, e, n);
				};
			}
			function o(t, e, n) {
				return function() {
					var r = e.apply(this, arguments);
					null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
				};
			}
			function a(t, e) {
				return (
					t.style.getPropertyValue(e) ||
					n
						.i(s.a)(t)
						.getComputedStyle(t, null)
						.getPropertyValue(e)
				);
			}
			e.a = a;
			var s = n(56);
			e.b = function(t, e, n) {
				return arguments.length > 1
					? this.each((null == e ? r : 'function' == typeof e ? o : i)(t, e, null == n ? '' : n))
					: a(this.node(), t);
			};
		},
		function(t, e, n) {
			'use strict';
			function r() {
				return [];
			}
			e.a = function(t) {
				return null == t
					? r
					: function() {
							return this.querySelectorAll(t);
					  };
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(57);
			n.d(e, 'c', function() {
				return r.c;
			}),
				n.d(e, 'a', function() {
					return r.a;
				});
			var i = n(295);
			n.d(e, 'b', function() {
				return i.a;
			});
			n(294);
		},
		function(t, e, n) {
			'use strict';
			var r = n(60);
			e.a = function(t, e) {
				var i,
					o = e ? e.length : 0,
					a = t ? Math.min(o, t.length) : 0,
					s = Array(a),
					u = Array(o);
				for (i = 0; a > i; ++i) s[i] = n.i(r.a)(t[i], e[i]);
				for (; o > i; ++i) u[i] = e[i];
				return function(t) {
					for (i = 0; a > i; ++i) u[i] = s[i](t);
					return u;
				};
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(59);
			e.a = function(t) {
				var e = t.length;
				return function(i) {
					var o = Math.floor((0 > (i %= 1) ? ++i : i) * e),
						a = t[(o + e - 1) % e],
						s = t[o % e],
						u = t[(o + 1) % e],
						c = t[(o + 2) % e];
					return n.i(r.b)((i - o / e) * e, a, s, u, c);
				};
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function(t) {
				return function() {
					return t;
				};
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function(t, e) {
				var n = new Date();
				return (
					(t = +t),
					(e -= t),
					function(r) {
						return n.setTime(t + e * r), n;
					}
				);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(60);
			e.a = function(t, e) {
				var i,
					o = {},
					a = {};
				(null !== t && 'object' == typeof t) || (t = {}),
					(null !== e && 'object' == typeof e) || (e = {});
				for (i in e) i in t ? (o[i] = n.i(r.a)(t[i], e[i])) : (a[i] = e[i]);
				return function(t) {
					for (i in o) a[i] = o[i](t);
					return a;
				};
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function(e) {
					var r,
						o,
						a = e.length,
						s = Array(a),
						u = Array(a),
						c = Array(a);
					for (r = 0; a > r; ++r)
						(o = n.i(i.f)(e[r])), (s[r] = o.r || 0), (u[r] = o.g || 0), (c[r] = o.b || 0);
					return (
						(s = t(s)),
						(u = t(u)),
						(c = t(c)),
						(o.opacity = 1),
						function(t) {
							return (o.r = s(t)), (o.g = u(t)), (o.b = c(t)), o + '';
						}
					);
				};
			}
			var i = n(14),
				o = n(59),
				a = n(106),
				s = n(19);
			e.a = (function t(e) {
				function r(t, e) {
					var r = o((t = n.i(i.f)(t)).r, (e = n.i(i.f)(e)).r),
						a = o(t.g, e.g),
						u = o(t.b, e.b),
						c = n.i(s.a)(t.opacity, e.opacity);
					return function(e) {
						return (t.r = r(e)), (t.g = a(e)), (t.b = u(e)), (t.opacity = c(e)), t + '';
					};
				}
				var o = n.i(s.c)(e);
				return (r.gamma = t), r;
			})(1);
			r(o.a), r(a.a);
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function() {
					return t;
				};
			}
			function i(t) {
				return function(e) {
					return t(e) + '';
				};
			}
			var o = n(31),
				a = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
				s = RegExp(a.source, 'g');
			e.a = function(t, e) {
				var u,
					c,
					l,
					f = (a.lastIndex = s.lastIndex = 0),
					h = -1,
					p = [],
					d = [];
				for (t += '', e += ''; (u = a.exec(t)) && (c = s.exec(e)); )
					(l = c.index) > f && ((l = e.slice(f, l)), p[h] ? (p[h] += l) : (p[++h] = l)),
						(u = u[0]) === (c = c[0])
							? p[h]
								? (p[h] += c)
								: (p[++h] = c)
							: ((p[++h] = null), d.push({ i: h, x: n.i(o.a)(u, c) })),
						(f = s.lastIndex);
				return (
					e.length > f && ((l = e.slice(f)), p[h] ? (p[h] += l) : (p[++h] = l)),
					2 > p.length
						? d[0]
							? i(d[0].x)
							: r(e)
						: ((e = d.length),
						  function(t) {
								for (var n, r = 0; e > r; ++r) p[(n = d[r]).i] = n.x(t);
								return p.join('');
						  })
				);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(7);
			e.a = function(t, e) {
				var n,
					i,
					o,
					a = t.__transition,
					s = !0;
				if (a) {
					e = null == e ? null : e + '';
					for (o in a)
						(n = a[o]).name === e
							? ((i = n.state > r.a && r.b > n.state),
							  (n.state = r.c),
							  n.timer.stop(),
							  i && n.on.call('interrupt', t, t.__data__, n.index, n.group),
							  delete a[o])
							: (s = !1);
					s && delete t.__transition;
				}
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(14),
				i = n(58);
			e.a = function(t, e) {
				var o;
				return ('number' == typeof e
					? i.b
					: e instanceof r.a
						? i.c
						: (o = n.i(r.a)(e))
							? ((e = o), i.c)
							: i.d)(t, e);
			};
		},
		function(t, e, n) {
			var r;
			!(function(i) {
				'use strict';
				function o(t, e) {
					for (var n = [], r = 0, i = t.length; i > r; r++) n.push(t[r].substr(0, e));
					return n;
				}
				function a(t) {
					return function(e, n, r) {
						var i = r[t].indexOf(n.charAt(0).toUpperCase() + n.substr(1).toLowerCase());
						~i && (e.month = i);
					};
				}
				function s(t, e) {
					for (t += '', e = e || 2; e > t.length; ) t = '0' + t;
					return t;
				}
				var u = {},
					c = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
					l = /\d\d?/,
					f = /\d{3}/,
					h = /\d{4}/,
					p = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
					d = /\[([^]*?)\]/gm,
					g = function() {},
					y = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
					v = [
						'January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
						'August',
						'September',
						'October',
						'November',
						'December',
					],
					m = o(v, 3),
					x = o(y, 3);
				u.i18n = {
					dayNamesShort: x,
					dayNames: y,
					monthNamesShort: m,
					monthNames: v,
					amPm: ['am', 'pm'],
					DoFn: function(t) {
						return t + ['th', 'st', 'nd', 'rd'][t % 10 > 3 ? 0 : ((t - (t % 10) != 10) * t) % 10];
					},
				};
				var b = {
						D: function(t) {
							return t.getDate();
						},
						DD: function(t) {
							return s(t.getDate());
						},
						Do: function(t, e) {
							return e.DoFn(t.getDate());
						},
						d: function(t) {
							return t.getDay();
						},
						dd: function(t) {
							return s(t.getDay());
						},
						ddd: function(t, e) {
							return e.dayNamesShort[t.getDay()];
						},
						dddd: function(t, e) {
							return e.dayNames[t.getDay()];
						},
						M: function(t) {
							return t.getMonth() + 1;
						},
						MM: function(t) {
							return s(t.getMonth() + 1);
						},
						MMM: function(t, e) {
							return e.monthNamesShort[t.getMonth()];
						},
						MMMM: function(t, e) {
							return e.monthNames[t.getMonth()];
						},
						YY: function(t) {
							return (t.getFullYear() + '').substr(2);
						},
						YYYY: function(t) {
							return s(t.getFullYear(), 4);
						},
						h: function(t) {
							return t.getHours() % 12 || 12;
						},
						hh: function(t) {
							return s(t.getHours() % 12 || 12);
						},
						H: function(t) {
							return t.getHours();
						},
						HH: function(t) {
							return s(t.getHours());
						},
						m: function(t) {
							return t.getMinutes();
						},
						mm: function(t) {
							return s(t.getMinutes());
						},
						s: function(t) {
							return t.getSeconds();
						},
						ss: function(t) {
							return s(t.getSeconds());
						},
						S: function(t) {
							return Math.round(t.getMilliseconds() / 100);
						},
						SS: function(t) {
							return s(Math.round(t.getMilliseconds() / 10), 2);
						},
						SSS: function(t) {
							return s(t.getMilliseconds(), 3);
						},
						a: function(t, e) {
							return 12 > t.getHours() ? e.amPm[0] : e.amPm[1];
						},
						A: function(t, e) {
							return 12 > t.getHours() ? e.amPm[0].toUpperCase() : e.amPm[1].toUpperCase();
						},
						ZZ: function(t) {
							var e = t.getTimezoneOffset();
							return (
								(e > 0 ? '-' : '+') + s(100 * Math.floor(Math.abs(e) / 60) + (Math.abs(e) % 60), 4)
							);
						},
					},
					_ = {
						D: [
							l,
							function(t, e) {
								t.day = e;
							},
						],
						Do: [
							RegExp(l.source + p.source),
							function(t, e) {
								t.day = parseInt(e, 10);
							},
						],
						M: [
							l,
							function(t, e) {
								t.month = e - 1;
							},
						],
						YY: [
							l,
							function(t, e) {
								var n = new Date(),
									r = +('' + n.getFullYear()).substr(0, 2);
								t.year = '' + (e > 68 ? r - 1 : r) + e;
							},
						],
						h: [
							l,
							function(t, e) {
								t.hour = e;
							},
						],
						m: [
							l,
							function(t, e) {
								t.minute = e;
							},
						],
						s: [
							l,
							function(t, e) {
								t.second = e;
							},
						],
						YYYY: [
							h,
							function(t, e) {
								t.year = e;
							},
						],
						S: [
							/\d/,
							function(t, e) {
								t.millisecond = 100 * e;
							},
						],
						SS: [
							/\d{2}/,
							function(t, e) {
								t.millisecond = 10 * e;
							},
						],
						SSS: [
							f,
							function(t, e) {
								t.millisecond = e;
							},
						],
						d: [l, g],
						ddd: [p, g],
						MMM: [p, a('monthNamesShort')],
						MMMM: [p, a('monthNames')],
						a: [
							p,
							function(t, e, n) {
								var r = e.toLowerCase();
								r === n.amPm[0] ? (t.isPm = !1) : r === n.amPm[1] && (t.isPm = !0);
							},
						],
						ZZ: [
							/([\+\-]\d\d:?\d\d|Z)/,
							function(t, e) {
								'Z' === e && (e = '+00:00');
								var n,
									r = (e + '').match(/([\+\-]|\d\d)/gi);
								r &&
									((n = 60 * r[1] + parseInt(r[2], 10)),
									(t.timezoneOffset = '+' === r[0] ? n : -n));
							},
						],
					};
				(_.dd = _.d),
					(_.dddd = _.ddd),
					(_.DD = _.D),
					(_.mm = _.m),
					(_.hh = _.H = _.HH = _.h),
					(_.MM = _.M),
					(_.ss = _.s),
					(_.A = _.a),
					(u.masks = {
						default: 'ddd MMM DD YYYY HH:mm:ss',
						shortDate: 'M/D/YY',
						mediumDate: 'MMM D, YYYY',
						longDate: 'MMMM D, YYYY',
						fullDate: 'dddd, MMMM D, YYYY',
						shortTime: 'HH:mm',
						mediumTime: 'HH:mm:ss',
						longTime: 'HH:mm:ss.SSS',
					}),
					(u.format = function(t, e, n) {
						var r = n || u.i18n;
						if (
							('number' == typeof t && (t = new Date(t)),
							'[object Date]' !== Object.prototype.toString.call(t) || isNaN(t.getTime()))
						)
							throw Error('Invalid Date in fecha.format');
						e = u.masks[e] || e || u.masks.default;
						var i = [];
						return (
							(e = e.replace(d, function(t, e) {
								return i.push(e), '??';
							})),
							(e = e.replace(c, function(e) {
								return e in b ? b[e](t, r) : e.slice(1, e.length - 1);
							})),
							e.replace(/\?\?/g, function() {
								return i.shift();
							})
						);
					}),
					(u.parse = function(t, e, n) {
						var r = n || u.i18n;
						if ('string' != typeof e) throw Error('Invalid format in fecha.parse');
						if (((e = u.masks[e] || e), t.length > 1e3)) return !1;
						var i = !0,
							o = {};
						if (
							(e.replace(c, function(e) {
								if (_[e]) {
									var n = _[e],
										a = t.search(n[0]);
									~a
										? t.replace(n[0], function(e) {
												return n[1](o, e, r), (t = t.substr(a + e.length)), e;
										  })
										: (i = !1);
								}
								return _[e] ? '' : e.slice(1, e.length - 1);
							}),
							!i)
						)
							return !1;
						var a = new Date();
						!0 === o.isPm && null != o.hour && 12 != +o.hour
							? (o.hour = +o.hour + 12)
							: !1 === o.isPm && 12 == +o.hour && (o.hour = 0);
						var s;
						return (
							null != o.timezoneOffset
								? ((o.minute = +(o.minute || 0) - +o.timezoneOffset),
								  (s = new Date(
										Date.UTC(
											o.year || a.getFullYear(),
											o.month || 0,
											o.day || 1,
											o.hour || 0,
											o.minute || 0,
											o.second || 0,
											o.millisecond || 0
										)
								  )))
								: (s = new Date(
										o.year || a.getFullYear(),
										o.month || 0,
										o.day || 1,
										o.hour || 0,
										o.minute || 0,
										o.second || 0,
										o.millisecond || 0
								  )),
							s
						);
					}),
					void 0 !== t && t.exports
						? (t.exports = u)
						: void 0 !==
								(r = function() {
									return u;
								}.call(e, n, e, t)) && (t.exports = r);
			})();
		},
		function(t, e, n) {
			function r() {
				if (!arguments.length) return [];
				var t = arguments[0];
				return i(t) ? t : [t];
			}
			var i = n(3);
			t.exports = r;
		},
		function(t, e) {
			function n(t, e, n, r) {
				var i = -1,
					o = null == t ? 0 : t.length;
				for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
				return n;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e, n) {
				for (var r = -1, o = t.length; ++r < o; ) {
					var a = t[r],
						s = e(a);
					if (null != s && (void 0 === u ? s === s && !i(s) : n(s, u)))
						var u = s,
							c = a;
				}
				return c;
			}
			var i = n(136);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n, a, s) {
				var u = -1,
					c = t.length;
				for (n || (n = o), s || (s = []); ++u < c; ) {
					var l = t[u];
					e > 0 && n(l) ? (e > 1 ? r(l, e - 1, n, a, s) : i(s, l)) : a || (s[s.length] = l);
				}
				return s;
			}
			var i = n(340),
				o = n(398);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n) {
				var r = -1,
					f = o,
					h = t.length,
					p = !0,
					d = [],
					g = d;
				if (n) (p = !1), (f = a);
				else if (h < l) g = e ? [] : d;
				else {
					var y = e ? null : u(t);
					if (y) return c(y);
					(p = !1), (f = s), (g = new i());
				}
				t: for (; ++r < h; ) {
					var v = t[r],
						m = e ? e(v) : v;
					if (((v = n || 0 !== v ? v : 0), p && m === m)) {
						for (var x = g.length; x--; ) if (g[x] === m) continue t;
						e && g.push(m), d.push(v);
					} else f(g, m, n) || (g !== d && g.push(m), d.push(v));
				}
				return d;
			}
			var i = n(115),
				o = n(337),
				a = n(338),
				s = n(120),
				u = n(382),
				c = n(406),
				l = 200;
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				return !!(null == t ? 0 : t.length) && i(t, e, 0) > -1;
			}
			var i = n(65);
			t.exports = r;
		},
		function(t, e, n) {
			(function(e) {
				var n = 'object' == typeof e && e && e.Object === Object && e;
				t.exports = n;
			}.call(e, n(449)));
		},
		function(t, e, n) {
			t.exports = n(38)(Object.keys, Object);
		},
		function(t, e, n) {
			t.exports = n(38)(Object.getPrototypeOf, Object);
		},
		function(t, e) {
			function n() {
				return !1;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t, e) {
				var n = typeof t;
				return (
					!!(e = null == e ? r : e) &&
					('number' == n || ('symbol' != n && i.test(t))) &&
					t > -1 &&
					t % 1 == 0 &&
					e > t
				);
			}
			var r = 9007199254740991,
				i = /^(?:0|[1-9]\d*)$/;
			t.exports = n;
		},
		function(t, e) {
			function n() {
				return !1;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				return t === t && !i(t);
			}
			var i = n(21);
			t.exports = r;
		},
		function(t, e) {
			function n(t, e) {
				return function(n) {
					return null != n && (n[t] === e && (void 0 !== e || t in Object(n)));
				};
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e, n) {
				return (
					(e = o(void 0 === e ? t.length - 1 : e, 0)),
					function() {
						for (var r = arguments, a = -1, s = o(r.length - e, 0), u = Array(s); ++a < s; )
							u[a] = r[e + a];
						a = -1;
						for (var c = Array(e + 1); ++a < e; ) c[a] = r[a];
						return (c[e] = n(u)), i(t, this, c);
					}
				);
			}
			var i = n(333),
				o = Math.max;
			t.exports = r;
		},
		function(t, e) {
			function n(t) {
				return t;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t, e) {
				return t === e || (t !== t && e !== e);
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				return (null == t ? 0 : t.length) ? i(t, 1) : [];
			}
			var i = n(118);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				return null != t && o(t, e, i);
			}
			var i = n(353),
				o = n(393);
			t.exports = r;
		},
		function(t, e) {
			function n(t) {
				return t;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				return 'number' == typeof t && t > -1 && t % 1 == 0 && r >= t;
			}
			var r = 9007199254740991;
			t.exports = n;
		},
		function(t, e) {
			function n() {
				return !1;
			}
			t.exports = n;
		},
		function(t, e) {
			function n() {
				return !1;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				return t;
			}
			t.exports = n;
		},
		function(t, e, n) {
			'use strict';
			var r = function() {};
			t.exports = r;
		},
		function(t, e) {
			t.exports = function(t) {
				return (
					t.webpackPolyfill ||
						((t.deprecate = function() {}),
						(t.paths = []),
						t.children || (t.children = []),
						Object.defineProperty(t, 'loaded', {
							enumerable: !0,
							get: function() {
								return t.l;
							},
						}),
						Object.defineProperty(t, 'id', {
							enumerable: !0,
							get: function() {
								return t.i;
							},
						}),
						(t.webpackPolyfill = 1)),
					t
				);
			};
		},
		function(t, e, n) {
			function r(t) {
				var e = t.start,
					n = t.end,
					r = t.getWidth(),
					i = t.getHeight(),
					o = void 0,
					a = void 0,
					s = void 0,
					u = void 0,
					c = void 0;
				return (
					t.isPolar
						? ((u = t.getRadius()),
						  (s = t.getCenter()),
						  (o = t.startAngle),
						  (a = t.endAngle),
						  (c = new x.Fan({
								attrs: { x: s.x, y: s.y, rs: 0, re: u + 200, startAngle: o, endAngle: o },
						  })),
						  (c.endState = { endAngle: a }))
						: ((c = new x.Rect({
								attrs: {
									x: e.x - 200,
									y: n.y - 200,
									width: t.isTransposed ? r + 400 : 0,
									height: t.isTransposed ? 0 : i + 400,
								},
						  })),
						  (c.endState = t.isTransposed ? { height: i + 400 } : { width: r + 400 })),
					(c.isClip = !0),
					c
				);
			}
			function i(t) {
				if (m.isEmpty(t)) return null;
				var e = t[0].x,
					n = t[0].x,
					r = t[0].y,
					i = t[0].y;
				return (
					m.each(t, function(t) {
						(e = e > t.x ? t.x : e),
							(n = t.x > n ? t.x : n),
							(r = r > t.y ? t.y : r),
							(i = t.y > i ? t.y : i);
					}),
					{ minX: e, maxX: n, minY: r, maxY: i, centerX: (e + n) / 2, centerY: (r + i) / 2 }
				);
			}
			function o(t, e) {
				var n = t.points || t.get('origin').points,
					r = i(n),
					o = void 0,
					a = void 0,
					s = e.startAngle,
					u = e.endAngle,
					c = u - s;
				return (
					e.isTransposed
						? ((o = r.maxY * c), (a = r.minY * c))
						: ((o = r.maxX * c), (a = r.minX * c)),
					(o += s),
					(a += s),
					{ startAngle: a, endAngle: o }
				);
			}
			function a(t, e, n) {
				var r = {};
				return (
					t.delay && (r.delay = m.isFunction(t.delay) ? t.delay(e, n) : t.delay),
					(r.easing = m.isFunction(t.easing) ? t.easing(e, n) : t.easing),
					(r.duration = m.isFunction(t.duration) ? t.duration(e, n) : t.duration),
					(r.callback = t.callback),
					r
				);
			}
			function s(t, e) {
				var n = t._id,
					r = t.get('index'),
					i = t.getBBox(),
					o = t.get('origin').points,
					s = (i.minX + i.maxX) / 2,
					u = void 0;
				(u = o[0].y - o[1].y > 0 ? i.minY : i.maxY),
					t.apply([s, u, 1]),
					t.attr('transform', [['t', -s, -u], ['s', 1, 0.01], ['t', s, u]]);
				var c = { transform: [['t', -s, -u], ['s', 1, 100], ['t', s, u]] },
					l = a(e, r, n, c);
				t.animate(c, l.duration, l.easing, l.callback, l.delay);
			}
			function u(t, e) {
				var n = t._id,
					r = t.get('index'),
					i = t.getBBox(),
					o = t.get('origin').points,
					s = void 0,
					u = (i.minY + i.maxY) / 2;
				(s = o[0].y - o[1].y > 0 ? i.maxX : i.minX),
					t.apply([s, u, 1]),
					t.attr({ transform: [['t', -s, -u], ['s', 0.01, 1], ['t', s, u]] });
				var c = { transform: [['t', -s, -u], ['s', 100, 1], ['t', s, u]] },
					l = a(e, r, n, c);
				t.animate(c, l.duration, l.easing, l.callback, l.delay);
			}
			function c(t, e) {
				var n = { lineWidth: 0, opacity: 0 },
					r = t._id,
					i = t.get('index'),
					o = a(e, i, r, n);
				t.animate(
					n,
					o.duration,
					o.easing,
					function() {
						t.remove();
					},
					o.delay
				);
			}
			function l(t, e, n) {
				var r = t._id,
					i = t.get('index'),
					o = void 0,
					s = void 0;
				if (n.isPolar && 'point' !== t.name) (o = n.getCenter().x), (s = n.getCenter().y);
				else {
					var u = t.getBBox();
					(o = (u.minX + u.maxX) / 2), (s = (u.minY + u.maxY) / 2);
				}
				t.apply([o, s, 1]), t.attr({ transform: [['t', -o, -s], ['s', 0.01, 0.01], ['t', o, s]] });
				var c = { transform: [['t', -o, -s], ['s', 100, 100], ['t', o, s]] },
					l = a(e, i, r, c);
				t.animate(c, l.duration, l.easing, l.callback, l.delay);
			}
			function f(t, e, n) {
				var r = t._id,
					i = t.get('index'),
					o = void 0,
					s = void 0;
				if (n.isPolar && 'point' !== t.name) (o = n.getCenter().x), (s = n.getCenter().y);
				else {
					var u = t.getBBox();
					(o = (u.minX + u.maxX) / 2), (s = (u.minY + u.maxY) / 2);
				}
				t.apply([o, s, 1]);
				var c = { transform: [['t', -o, -s], ['s', 0.01, 0.01], ['t', o, s]] },
					l = a(e, i, r, c);
				t.animate(
					c,
					l.duration,
					l.easing,
					function() {
						t.remove();
					},
					l.delay
				);
			}
			function h(t, e) {
				if ('path' === t.get('type')) {
					var n = t._id,
						r = t.get('index'),
						i = b.pathToAbsolute(t.attr('path'));
					t.attr('path', [i[0]]);
					var o = { path: i },
						s = a(e, r, n, o);
					t.animate(o, s.duration, s.easing, s.callback, s.delay);
				}
			}
			function p(t, e) {
				if ('path' === t.get('type')) {
					var n = t._id,
						r = t.get('index'),
						i = b.pathToAbsolute(t.attr('path')),
						o = { path: [i[0]] },
						s = a(e, r, n, o);
					t.animate(
						o,
						s.duration,
						s.easing,
						function() {
							t.remove();
						},
						s.delay
					);
				}
			}
			function d(t, e, n, i, o) {
				var s = r(n),
					u = t.get('canvas'),
					c = t._id,
					l = t.get('index'),
					f = void 0;
				i
					? (s.attr('startAngle', i), s.attr('endAngle', i), (f = { endAngle: o }))
					: (f = s.endState),
					s.set('canvas', u),
					t.attr('clip', s),
					t.setSilent('animating', !0);
				var h = a(e, l, c, f);
				s.animate(
					f,
					h.duration,
					h.easing,
					function() {
						t &&
							!t.get('destroyed') &&
							(t.attr('clip', null),
							t.setSilent('cacheShape', null),
							t.setSilent('animating', !1),
							s.remove());
					},
					h.delay
				);
			}
			function g(t, e) {
				var n = t._id,
					r = t.get('index'),
					i = m.isNil(t.attr('fillOpacity')) ? 1 : t.attr('fillOpacity'),
					o = m.isNil(t.attr('strokeOpacity')) ? 1 : t.attr('strokeOpacity');
				t.attr('fillOpacity', 0), t.attr('strokeOpacity', 0);
				var s = { fillOpacity: i, strokeOpacity: o },
					u = a(e, r, n, s);
				t.animate(s, u.duration, u.easing, u.callback, u.delay);
			}
			function y(t, e) {
				var n = t._id,
					r = t.get('index'),
					i = { fillOpacity: 0, strokeOpacity: 0 },
					o = a(e, r, n, i);
				t.animate(
					i,
					o.duration,
					o.easing,
					function() {
						t.remove();
					},
					o.delay
				);
			}
			function v(t, e, n) {
				var r = o(t, n);
				d(t, e, n, r.startAngle, r.endAngle);
			}
			var m = n(0),
				x = n(2),
				b = x.PathUtil;
			t.exports = {
				enter: { clipIn: d, zoomIn: l, pathIn: h, scaleInY: s, scaleInX: u, fanIn: v, fadeIn: g },
				leave: { lineWidthOut: c, zoomOut: f, pathOut: p, fadeOut: y },
				appear: { clipIn: d, zoomIn: l, pathIn: h, scaleInY: s, scaleInX: u, fanIn: v, fadeIn: g },
				update: { fadeIn: g, fanIn: v },
			};
		},
		function(t, e, n) {
			function r(t, e) {
				var n = [];
				if (!1 === t.get('animate')) return [];
				var i = t.get('children');
				return (
					u.each(i, function(t) {
						if (t.isGroup) n = n.concat(r(t, e));
						else if (t.isShape && t._id) {
							var i = t._id;
							(i = i.split('-')[0]), i === e && n.push(t);
						}
					}),
					n
				);
			}
			function i(t) {
				var e = {};
				return (
					u.each(t, function(t) {
						if (t._id && !t.isClip) {
							var n = t._id;
							e[n] = {
								_id: n,
								type: t.get('type'),
								attrs: u.cloneDeep(t.__attrs),
								name: t.name,
								index: t.get('index'),
								animateCfg: t.get('animateCfg'),
								coord: t.get('coord'),
							};
						}
					}),
					e
				);
			}
			function o(t, e, n, r) {
				return r ? c.Action[n][r] : c.getAnimation(t, e, n);
			}
			function a(t, e, n) {
				var r = c.getAnimateCfg(t, e);
				return n && n[e] ? u.deepMix({}, r, n[e]) : r;
			}
			function s(t, e, n, r) {
				var i = void 0,
					s = void 0,
					c = !1;
				if (r) {
					var l = [],
						f = [];
					u.each(e, function(e) {
						var n = t[e._id];
						n ? (e.setSilent('cacheShape', n), l.push(e), delete t[e._id]) : f.push(e);
					}),
						u.each(t, function(t) {
							var e = t.name,
								r = t.coord,
								l = t._id,
								f = t.attrs,
								p = t.index,
								d = t.type;
							if (
								((s = a(e, 'leave', t.animateCfg)),
								(i = o(e, r, 'leave', s.animation)),
								u.isFunction(i))
							) {
								var g = n.addShape(d, { attrs: f, index: p });
								if (((g._id = l), (g.name = e), r && 'label' !== e)) {
									var y = g.getMatrix();
									g.setMatrix(h.multiply([], y, r.matrix));
								}
								(c = !0), i(g, s, r);
							}
						}),
						u.each(l, function(t) {
							var e = t.name,
								n = t.get('coord'),
								r = t.get('cacheShape').attrs;
							if (!u.isEqual(r, t.__attrs)) {
								if (
									((s = a(e, 'update', t.get('animateCfg'))),
									(i = o(e, n, 'update', s.animation)),
									u.isFunction(i))
								)
									i(t, s, n);
								else {
									var l = u.cloneDeep(t.__attrs);
									t.attr(r),
										t.animate(l, s.duration, s.easing, function() {
											t.setSilent('cacheShape', null);
										});
								}
								c = !0;
							}
						}),
						u.each(f, function(t) {
							var e = t.name,
								n = t.get('coord');
							(s = a(e, 'enter', t.get('animateCfg'))),
								(i = o(e, n, 'enter', s.animation)),
								u.isFunction(i) && (i(t, s, n), (c = !0));
						});
				} else
					u.each(e, function(t) {
						var e = t.name,
							n = t.get('coord');
						(s = a(e, 'appear', t.get('animateCfg'))),
							(i = o(e, n, 'appear', s.animation)),
							u.isFunction(i) && (i(t, s, n), (c = !0));
					});
				return c;
			}
			var u = n(0),
				c = n(72),
				l = n(2),
				f = l.MatrixUtil,
				h = f.mat3;
			t.exports = {
				execAnimation: function(t, e) {
					var n = t.get('middlePlot'),
						o = t.get('backPlot'),
						a = t.get('_id'),
						u = t.get('canvas'),
						c = u.get(a + 'caches') || [];
					0 === c.length && (e = !1);
					var l = r(n, a),
						f = r(o, a),
						h = l.concat(f);
					u.setSilent(a + 'caches', i(h));
					var p = void 0;
					(p = e ? s(c, h, u, e) : s(c, l, u, e)) || u.draw();
				},
			};
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(43),
				s = n(15),
				u = n(0);
			t.exports = (function(t) {
				function e(n) {
					r(this, e);
					var o = i(this, t.call(this, n));
					return (
						(o.names = ['color']),
						(o.type = 'color'),
						(o.gradient = null),
						u.isString(o.values) && (o.linear = !0),
						o
					);
				}
				return (
					o(e, t),
					(e.prototype.getLinearValue = function(t) {
						var e = this.gradient;
						if (!e) {
							(e = a.gradient(this.values)), (this.gradient = e);
						}
						return e(t);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(15);
			t.exports = (function(t) {
				function e(n) {
					r(this, e);
					var o = i(this, t.call(this, n));
					return (o.names = ['opacity']), (o.type = 'opacity'), (o.gradient = null), o;
				}
				return o(e, t), e;
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(15);
			t.exports = (function(t) {
				function e(n) {
					r(this, e);
					var o = i(this, t.call(this, n));
					return (o.names = ['x', 'y']), (o.type = 'position'), o;
				}
				return (
					o(e, t),
					(e.prototype.mapping = function(t, e) {
						var n = this.scales,
							r = this.coord,
							i = n[0],
							o = n[1],
							s = void 0,
							u = void 0,
							c = void 0;
						if (a.isNil(t) || a.isNil(e)) return [];
						if (a.isArray(e) && a.isArray(t)) {
							(s = []), (u = []);
							for (var l = 0, f = 0; t.length > l && e.length > f; l++, f++)
								(c = r.convertPoint({ x: i.scale(t[l]), y: o.scale(e[f]) })),
									s.push(c.x),
									u.push(c.y);
						} else if (a.isArray(e))
							(t = i.scale(t)),
								(u = []),
								a.each(e, function(e) {
									(e = o.scale(e)),
										(c = r.convertPoint({ x: t, y: e })),
										s && s !== c.x ? (a.isArray(s) || (s = [s]), s.push(c.x)) : (s = c.x),
										u.push(c.y);
								});
						else if (a.isArray(t))
							(e = o.scale(e)),
								(s = []),
								a.each(t, function(t) {
									(t = i.scale(t)),
										(c = r.convertPoint({ x: t, y: e })),
										u && u !== c.y ? (a.isArray(u) || (u = [u]), u.push(c.y)) : (u = c.y),
										s.push(c.x);
								});
						else {
							(t = i.scale(t)), (e = o.scale(e));
							var h = r.convertPoint({ x: t, y: e });
							(s = h.x), (u = h.y);
						}
						return [s, u];
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(15);
			t.exports = (function(t) {
				function e(n) {
					r(this, e);
					var o = i(this, t.call(this, n));
					return (o.names = ['shape']), (o.type = 'shape'), (o.gradient = null), o;
				}
				return (
					o(e, t),
					(e.prototype.getLinearValue = function(t) {
						var e = this.values;
						return e[Math.round((e.length - 1) * t)];
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(15);
			t.exports = (function(t) {
				function e(n) {
					r(this, e);
					var o = i(this, t.call(this, n));
					return (o.names = ['size']), (o.type = 'size'), (o.gradient = null), o;
				}
				return o(e, t), e;
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t) {
				var e = [];
				if (t.length > 0) {
					e = t.slice(0);
					var n = e[0],
						r = e[e.length - 1];
					0 !== n.value && e.unshift({ value: 0 }), 1 !== r.value && e.push({ value: 1 });
				}
				return e;
			}
			function o(t, e, n) {
				var r = [];
				return 1 > t.length
					? r
					: (t.length >= 2 && e && n && r.push({ text: '', tickValue: '', value: 0 }),
					  0 !== t[0].value && r.push({ text: '', tickValue: '', value: 0 }),
					  (r = r.concat(t)),
					  1 !== r[r.length - 1].value && r.push({ text: '', tickValue: '', value: 1 }),
					  r);
			}
			var a = n(0),
				s = n(159),
				u = n(2).MatrixUtil.vec2,
				c = n(1);
			t.exports = (function() {
				function t(e) {
					r(this, t),
						(this.visible = !0),
						(this.container = null),
						(this.coord = null),
						(this.options = null),
						(this.axes = []),
						a.mix(this, e);
				}
				return (
					(t.prototype._isHide = function(t) {
						var e = this.options;
						return !(!e || !1 !== e[t]);
					}),
					(t.prototype._getMiddleValue = function(t, e, n, r) {
						if (0 === t && !r) return 0;
						if (1 === t) return 1;
						var i = e[n + 1].value;
						return r || 1 !== i ? (t + i) / 2 : 1;
					}),
					(t.prototype._getLineRange = function(t, e, n, r) {
						var i = void 0,
							o = void 0,
							a = void 0,
							s = e.field,
							u = this.options,
							c = '';
						return (
							u[s] && u[s].position && (c = u[s].position),
							'x' === n
								? ((i = { x: 0, y: 'top' === c ? 1 : 0 }),
								  (o = { x: 1, y: 'top' === c ? 1 : 0 }),
								  (a = !1))
								: (r
										? ((i = { x: 'left' === c ? 0 : 1, y: 0 }),
										  (o = { x: 'left' === c ? 0 : 1, y: 1 }))
										: ((i = { x: 'right' === c ? 1 : 0, y: 0 }),
										  (o = { x: 'right' === c ? 1 : 0, y: 1 })),
								  (a = !0)),
							(i = t.convert(i)),
							(o = t.convert(o)),
							{ start: i, end: o, isVertical: a }
						);
					}),
					(t.prototype._getLineCfg = function(t, e, n, r) {
						var i = void 0,
							o = this._getLineRange(t, e, n, r),
							a = o.isVertical,
							s = o.start,
							u = o.end,
							c = t.center;
						return (
							t.isTransposed && (a = !a),
							(i = (a && s.x > c.x) || (!a && s.y > c.y) ? 1 : -1),
							{ isVertical: a, factor: i, start: s, end: u }
						);
					}),
					(t.prototype._getCircleCfg = function(t) {
						var e = {},
							n = t.x,
							r = t.y,
							i = r.start > r.end,
							o = void 0;
						(o = t.isTransposed ? { x: i ? 0 : 1, y: 0 } : { x: 0, y: i ? 0 : 1 }),
							(o = t.convert(o));
						var a = t.circleCentre,
							s = [o.x - a.x, o.y - a.y],
							c = [1, 0],
							l = void 0;
						l = o.y > a.y ? u.angle(s, c) : -1 * u.angle(s, c);
						var f = l + (n.end - n.start);
						return (
							(e.startAngle = l),
							(e.endAngle = f),
							(e.center = a),
							(e.radius = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2))),
							(e.inner = t.innerRadius || 0),
							e
						);
					}),
					(t.prototype._getRadiusCfg = function(t) {
						var e = t.x.start,
							n = 0 > e ? -1 : 1,
							r = void 0,
							i = void 0;
						return (
							t.isTransposed
								? ((r = { x: 0, y: 0 }), (i = { x: 1, y: 0 }))
								: ((r = { x: 0, y: 0 }), (i = { x: 0, y: 1 })),
							{ factor: n, start: t.convert(r), end: t.convert(i) }
						);
					}),
					(t.prototype._getAxisPosition = function(t, e, n, r) {
						var i = '',
							o = this.options;
						if (o[r] && o[r].position) i = o[r].position;
						else {
							var a = t.type;
							t.isRect
								? 'x' === e
									? (i = 'bottom')
									: 'y' === e && (i = n ? 'right' : 'left')
								: (i =
										'helix' === a
											? 'helix'
											: 'x' === e
												? t.isTransposed
													? 'radius'
													: 'circle'
												: t.isTransposed
													? 'circle'
													: 'radius');
						}
						return i;
					}),
					(t.prototype._getAxisDefaultCfg = function(t, e, n, r) {
						var i = this,
							o = {},
							s = i.options,
							u = e.field;
						return (
							(o = a.deepMix({}, c.axis[r], o, s[u])),
							o.title && a.deepMix(o, { title: { text: e.alias || u } }),
							(o.ticks = e.getTicks()),
							t.isPolar &&
								!e.isCategory &&
								'x' === n &&
								Math.abs(t.endAngle - t.startAngle) === 2 * Math.PI &&
								o.ticks.pop(),
							(o.coord = t),
							o.label && a.isNil(o.label.autoRotate) && (o.label.autoRotate = !0),
							s.hasOwnProperty('xField') &&
								s.xField.hasOwnProperty('grid') &&
								'left' === o.position &&
								a.deepMix(o, s.xField),
							o
						);
					}),
					(t.prototype._getAxisCfg = function(t, e, n, r) {
						var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
							u = arguments[5],
							c = this,
							l = c._getAxisPosition(t, r, s, e.field),
							f = c._getAxisDefaultCfg(t, e, r, l);
						if (!a.isEmpty(f.grid) && n) {
							var h = [],
								p = [],
								d = i(n.getTicks());
							if (d.length) {
								var g = o(f.ticks, e.isLinear, 'center' === f.grid.align);
								a.each(g, function(n, i) {
									p.push(n.tickValue);
									var o = [],
										l = n.value;
									if (
										('center' === f.grid.align && (l = c._getMiddleValue(l, g, i, e.isLinear)),
										!a.isNil(l))
									) {
										var y = t.x,
											v = t.y;
										a.each(d, function(e) {
											var n = 'x' === r ? l : e.value,
												i = 'x' === r ? e.value : l,
												a = t.convert({ x: n, y: i });
											if (t.isPolar) {
												var s = t.circleCentre;
												v.start > v.end && (i = 1 - i),
													(a.flag = y.start > y.end ? 0 : 1),
													(a.radius = Math.sqrt(Math.pow(a.x - s.x, 2) + Math.pow(a.y - s.y, 2)));
											}
											o.push(a);
										}),
											h.push({ _id: u + '-' + r + s + '-grid-' + n.tickValue, points: o });
									}
								});
							}
							(f.grid.items = h), (f.grid.tickValues = p);
						}
						return (f.type = e.type), f;
					}),
					(t.prototype._getHelixCfg = function(t) {
						for (
							var e = {}, n = t.a, r = t.startAngle, i = t.endAngle, o = [], a = 0;
							100 >= a;
							a++
						) {
							var s = t.convert({ x: a / 100, y: 0 });
							o.push(s.x), o.push(s.y);
						}
						var u = t.convert({ x: 0, y: 0 });
						return (
							(e.a = n),
							(e.startAngle = r),
							(e.endAngle = i),
							(e.crp = o),
							(e.axisStart = u),
							(e.center = t.center),
							(e.inner = t.y.start),
							e
						);
					}),
					(t.prototype._drawAxis = function(t, e, n, r, i, o, u) {
						var c = this.container,
							l = void 0,
							f = void 0;
						'cartesian' === t.type
							? ((l = s.Line), (f = this._getLineCfg(t, e, r, u)))
							: 'helix' === t.type && 'x' === r
								? ((l = s.Helix), (f = this._getHelixCfg(t)))
								: 'x' === r
									? ((l = s.Circle), (f = this._getCircleCfg(t)))
									: ((l = s.Line), (f = this._getRadiusCfg(t)));
						var h = this._getAxisCfg(t, e, n, r, u, i);
						(h = a.mix({}, h, f)),
							'y' === r && o && 'circle' === o.get('type') && (h.circle = o),
							(h._id = i + '-' + r),
							a.isNil(u) || (h._id = i + '-' + r + u);
						var p = c.addGroup(l, h);
						return this.axes.push(p), p;
					}),
					(t.prototype.createAxis = function(t, e, n) {
						var r = this,
							i = this.coord,
							o = i.type;
						if ('theta' !== o && ('polar' !== o || !i.isTransposed)) {
							var s = void 0;
							t && !r._isHide(t.field) && (s = r._drawAxis(i, t, e[0], 'x', n)),
								a.isEmpty(e) ||
									'helix' === o ||
									a.each(e, function(e, o) {
										r._isHide(e.field) || r._drawAxis(i, e, t, 'y', n, s, o);
									});
						}
					}),
					(t.prototype.changeVisible = function(t) {
						a.each(this.axes, function(e) {
							e.set('visible', t);
						});
					}),
					(t.prototype.clear = function() {
						a.each(this.axes, function(t) {
							t.remove();
						}),
							(this.axes = []);
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			var i = n(0),
				o = n(180);
			t.exports = (function() {
				function t(e) {
					r(this, t),
						(this.type = 'rect'),
						(this.actions = []),
						(this.cfg = {}),
						i.mix(this, e),
						(this.option = e || {});
				}
				return (
					(t.prototype.reset = function(t) {
						return (
							(this.actions = t.actions || []),
							(this.type = t.type),
							(this.cfg = t.cfg),
							(this.option.actions = this.actions),
							(this.option.type = this.type),
							(this.option.cfg = this.cfg),
							this
						);
					}),
					(t.prototype._execActions = function(t) {
						i.each(this.actions, function(e) {
							t[e[0]](e[1], e[2]);
						});
					}),
					(t.prototype.hasAction = function(t) {
						var e = this.actions,
							n = !1;
						return (
							i.each(e, function(e) {
								if (t === e[0]) return (n = !0), !1;
							}),
							n
						);
					}),
					(t.prototype.createCoord = function(t, e) {
						var n = this,
							r = n.type,
							a = n.cfg,
							s = void 0,
							u = void 0,
							c = i.mix({ start: t, end: e }, a);
						return (
							'theta' === r
								? ((s = o.Polar),
								  n.hasAction('transpose') || n.transpose(),
								  (u = new s(c)),
								  (u.type = r))
								: ((s = o[i.upperFirst(r)] || o.Rect), (u = new s(c))),
							n._execActions(u),
							u
						);
					}),
					(t.prototype.rotate = function(t) {
						return (t = (t * Math.PI) / 180), this.actions.push(['rotate', t]), this;
					}),
					(t.prototype.reflect = function(t) {
						return this.actions.push(['reflect', t]), this;
					}),
					(t.prototype.scale = function(t, e) {
						return this.actions.push(['scale', t, e]), this;
					}),
					(t.prototype.transpose = function() {
						return this.actions.push(['transpose']), this;
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (a.isNil(t) || a.isNil(e)) return !1;
				var n = t.get('origin'),
					r = e.get('origin');
				return a.isNil(n) && a.isNil(r) ? a.isEqual(t, e) : a.isEqual(n, r);
			}
			function o(t) {
				t.shape && t.shape.get('origin') && (t.data = t.shape.get('origin'));
			}
			var a = n(0);
			t.exports = (function() {
				function t(e) {
					r(this, t), (this.view = null), (this.canvas = null), a.assign(this, e), this._init();
				}
				return (
					(t.prototype._init = function() {
						this.pixelRatio = this.canvas.get('pixelRatio');
					}),
					(t.prototype._getShapeEventObj = function(t) {
						return {
							x: t.x / this.pixelRatio,
							y: t.y / this.pixelRatio,
							target: t.target,
							toElement: t.event.toElement || t.event.relatedTarget,
						};
					}),
					(t.prototype._getShape = function(t, e) {
						return this.view.get('canvas').getShape(t, e);
					}),
					(t.prototype._getPointInfo = function(t) {
						var e = this.view,
							n = { x: t.x / this.pixelRatio, y: t.y / this.pixelRatio };
						return (n.views = e.getViewsByPoint(n)), n;
					}),
					(t.prototype._getEventObj = function(t, e, n) {
						return {
							x: e.x,
							y: e.y,
							target: t.target,
							toElement: t.event.toElement || t.event.relatedTarget,
							views: n,
						};
					}),
					(t.prototype.bindEvents = function() {
						var t = this.canvas;
						t.on('mousedown', a.wrapBehavior(this, 'onDown')),
							t.on('mousemove', a.wrapBehavior(this, 'onMove')),
							t.on('mouseleave', a.wrapBehavior(this, 'onOut')),
							t.on('mouseup', a.wrapBehavior(this, 'onUp')),
							t.on('click', a.wrapBehavior(this, 'onClick')),
							t.on('dblclick', a.wrapBehavior(this, 'onClick')),
							t.on('touchstart', a.wrapBehavior(this, 'onTouchstart')),
							t.on('touchmove', a.wrapBehavior(this, 'onTouchmove')),
							t.on('touchend', a.wrapBehavior(this, 'onTouchend'));
					}),
					(t.prototype._triggerShapeEvent = function(t, e, n) {
						if (t && t.name && !t.get('destroyed')) {
							var r = this.view;
							if (r.isShapeInView(t)) {
								var i = t.name + ':' + e;
								(n.view = r), (n.appendInfo = t.get('appendInfo')), r.emit(i, n);
								var o = r.get('parent');
								o && o.emit(i, n);
							}
						}
					}),
					(t.prototype.onDown = function(t) {
						var e = this.view,
							n = this._getShapeEventObj(t);
						(n.shape = this.currentShape),
							o(n),
							e.emit('mousedown', n),
							this._triggerShapeEvent(this.currentShape, 'mousedown', n);
					}),
					(t.prototype.onMove = function(t) {
						var e = this,
							n = e.view,
							r = e.currentShape;
						r && r.get('destroyed') && ((r = null), (e.currentShape = null));
						var a = e._getShape(t.x, t.y),
							s = e._getShapeEventObj(t);
						if (
							((s.shape = a),
							o(s),
							n.emit('mousemove', s),
							e._triggerShapeEvent(a, 'mousemove', s),
							r && !i(r, a))
						) {
							var u = e._getShapeEventObj(t);
							(u.shape = r), (u.toShape = a), o(u), e._triggerShapeEvent(r, 'mouseleave', u);
						}
						if (a && !i(r, a)) {
							var c = e._getShapeEventObj(t);
							(c.shape = a), (c.fromShape = r), o(c), e._triggerShapeEvent(a, 'mouseenter', c);
						}
						e.currentShape = a;
						var l = e._getPointInfo(t);
						0 === (e.curViews || []).length &&
							l.views.length &&
							n.emit('plotenter', e._getEventObj(t, l, l.views)),
							l.views.length &&
								((s = e._getEventObj(t, l, l.views)), (s.shape = a), o(s), n.emit('plotmove', s)),
							(e.curViews = l.views);
					}),
					(t.prototype.onOut = function(t) {
						var e = this,
							n = e.view,
							r = e._getPointInfo(t),
							i = e.curViews || [],
							o = e._getEventObj(t, r, i);
						0 !== r.views.length ||
							(o.toElement && 'CANVAS' === o.toElement.tagName) ||
							n.emit('plotleave', o);
					}),
					(t.prototype.onUp = function(t) {
						var e = this.view,
							n = this._getShapeEventObj(t);
						(n.shape = this.currentShape),
							e.emit('mouseup', n),
							this._triggerShapeEvent(this.currentShape, 'mouseup', n);
					}),
					(t.prototype.onClick = function(t) {
						var e = this,
							n = e.view,
							r = e._getShape(t.x, t.y),
							i = e._getShapeEventObj(t);
						(i.shape = r),
							o(i),
							n.emit('click', i),
							e._triggerShapeEvent(r, t.type, i),
							(e.currentShape = r);
						var s = e._getPointInfo(t),
							u = s.views;
						if (!a.isEmpty(u)) {
							var c = e._getEventObj(t, s, u);
							if (e.currentShape) {
								(c.shape = e.currentShape), o(c);
							}
							n.emit('plotclick', c),
								'dblclick' === t.type && (n.emit('plotdblclick', c), n.emit('dblclick', i));
						}
					}),
					(t.prototype.onTouchstart = function(t) {
						var e = this.view,
							n = this._getShape(t.x, t.y),
							r = this._getShapeEventObj(t);
						(r.shape = n),
							o(r),
							e.emit('touchstart', r),
							this._triggerShapeEvent(n, 'touchstart', r),
							(this.currentShape = n);
					}),
					(t.prototype.onTouchmove = function(t) {
						var e = this.view,
							n = this._getShape(t.x, t.y),
							r = this._getShapeEventObj(t);
						(r.shape = n),
							o(r),
							e.emit('touchmove', r),
							this._triggerShapeEvent(n, 'touchmove', r),
							(this.currentShape = n);
					}),
					(t.prototype.onTouchend = function(t) {
						var e = this.view,
							n = this._getShapeEventObj(t);
						(n.shape = this.currentShape),
							o(n),
							e.emit('touchend', n),
							this._triggerShapeEvent(this.currentShape, 'touchend', n);
					}),
					(t.prototype.clearEvents = function() {
						var t = this.canvas;
						t.off('mousemove', a.getWrapBehavior(this, 'onMove')),
							t.off('mouseleave', a.getWrapBehavior(this, 'onOut')),
							t.off('mousedown', a.getWrapBehavior(this, 'onDown')),
							t.off('mouseup', a.getWrapBehavior(this, 'onUp')),
							t.off('click', a.getWrapBehavior(this, 'onClick')),
							t.off('dblclick', a.getWrapBehavior(this, 'onClick')),
							t.off('touchstart', a.getWrapBehavior(this, 'onTouchstart')),
							t.off('touchmove', a.getWrapBehavior(this, 'onTouchmove')),
							t.off('touchend', a.getWrapBehavior(this, 'onTouchend'));
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			var i = n(0),
				o = n(165),
				a = n(1);
			t.exports = (function() {
				function t(e) {
					r(this, t),
						(this.guides = []),
						(this.options = []),
						(this.xScales = null),
						(this.yScales = null),
						(this.view = null),
						(this.frontGroup = null),
						(this.backGroup = null),
						i.mix(this, e);
				}
				return (
					(t.prototype._creatGuides = function() {
						var t = this,
							e = this.options,
							n = this.xScales,
							r = this.yScales,
							s = this.view;
						return (
							this.backContainer &&
								s &&
								(this.backGroup = this.backContainer.addGroup({ viewId: s.get('_id') })),
							this.frontContainer &&
								s &&
								(this.frontGroup = this.frontContainer.addGroup({ viewId: s.get('_id') })),
							e.forEach(function(e) {
								var u = e.type,
									c = i.deepMix({ xScales: n, yScales: r, view: s }, a.guide[u], e);
								u = i.upperFirst(u);
								var l = new o[u](c);
								t.guides.push(l);
							}),
							t.guides
						);
					}),
					(t.prototype.line = function() {
						return (
							this.options.push(
								i.mix(
									{ type: 'line' },
									arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
								)
							),
							this
						);
					}),
					(t.prototype.arc = function() {
						return (
							this.options.push(
								i.mix(
									{ type: 'arc' },
									arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
								)
							),
							this
						);
					}),
					(t.prototype.text = function() {
						return (
							this.options.push(
								i.mix(
									{ type: 'text' },
									arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
								)
							),
							this
						);
					}),
					(t.prototype.image = function() {
						return (
							this.options.push(
								i.mix(
									{ type: 'image' },
									arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
								)
							),
							this
						);
					}),
					(t.prototype.region = function() {
						return (
							this.options.push(
								i.mix(
									{ type: 'region' },
									arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
								)
							),
							this
						);
					}),
					(t.prototype.regionFilter = function() {
						return (
							this.options.push(
								i.mix(
									{ type: 'regionFilter' },
									arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
								)
							),
							this
						);
					}),
					(t.prototype.html = function() {
						return (
							this.options.push(
								i.mix(
									{ type: 'html' },
									arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
								)
							),
							this
						);
					}),
					(t.prototype.render = function(t) {
						var e = this,
							n = this,
							r = n._creatGuides(),
							o = n.backGroup || this.backContainer;
						i.each(r, function(r) {
							r.top && (o = n.frontGroup || e.frontContainer), r.render(t, o);
						});
					}),
					(t.prototype.clear = function() {
						(this.options = []), this.reset();
					}),
					(t.prototype.changeVisible = function(t) {
						i.each(this.guides, function(e) {
							e.setVisible(t);
						});
					}),
					(t.prototype.reset = function() {
						i.each(this.guides, function(t) {
							t.remove();
						}),
							(this.guides = []),
							this.backGroup && this.backGroup.remove(),
							this.frontGroup && this.frontGroup.remove();
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e, n) {
				return (
					!a.isNil(n) &&
					((t = n.translate(t)),
					(e = n.translate(e)),
					n.isCategory ? t === e : 1 >= Math.abs(t - e))
				);
			}
			function o(t, e) {
				var n = void 0;
				return (
					a.each(t, function(t) {
						if (t.get('visible')) {
							if (t.getYScale().field === e) return void (n = t);
						}
					}),
					n
				);
			}
			var a = n(0),
				s = n(1),
				u = n(172),
				c = n(5),
				l =
					window.requestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.msRequestAnimationFrame;
			t.exports = (function() {
				function t(e) {
					r(this, t), (this.options = {}), a.mix(this, e), this.clear();
					var n = this.chart;
					(this.container = n.get('frontPlot')), (this.plotRange = n.get('plotRange'));
				}
				return (
					(t.prototype.clear = function() {
						var t = this.legends;
						(this.backRange = null),
							a.each(t, function(t) {
								a.each(t, function(t) {
									t.remove();
								});
							}),
							(this.legends = {});
					}),
					(t.prototype.getBackRange = function() {
						var t = this.backRange;
						if (!t) {
							if (((t = this.chart.get('backPlot').getBBox()), t.minX === 1 / 0)) {
								var e = this.plotRange;
								t = { minX: e.tl.x, minY: e.tl.y, maxX: e.br.x, maxY: e.br.y };
							}
							this.backRange = t;
						}
						return t;
					}),
					(t.prototype._isFieldInView = function(t, e, n) {
						var r = !1,
							i = n.get('scales'),
							o = i[t];
						return o && o.values && (r = a.inArray(o.values, e)), r;
					}),
					(t.prototype._bindClickEvent = function(t, e, n) {
						var r = this,
							i = r.chart,
							o = i.get('views'),
							s = e.field,
							u = r.options;
						t.on('itemclick', function(e) {
							if (u.onClick) u.onClick(e);
							else {
								var c = e.item,
									l = e.checked,
									f = 'single' === t.get('selectedMode'),
									h = c.dataValue;
								l
									? (n.push(h),
									  r._isFieldInView(s, h, i) &&
											i.filter(s, function(t) {
												return f ? t === h : a.inArray(n, t);
											}),
									  a.each(o, function(t) {
											r._isFieldInView(s, h, t) &&
												t.filter(s, function(t) {
													return f ? t === h : a.inArray(n, t);
												});
									  }))
									: f ||
									  (a.Array.remove(n, h),
									  r._isFieldInView(s, h, i) &&
											i.filter(s, function(t) {
												return a.inArray(n, t);
											}),
									  a.each(o, function(t) {
											r._isFieldInView(s, h, t) &&
												t.filter(s, function(t) {
													return a.inArray(n, t);
												});
									  })),
									i.set('keepLegend', !0),
									i.set('keepPadding', !0),
									i.repaint(),
									i.set('keepPadding', !1),
									i.set('keepLegend', !1);
							}
						});
					}),
					(t.prototype._filterLabels = function(t, e, n) {
						if (t.get('gLabel')) t.get('gLabel').set('visible', n);
						else {
							var r = e.get('labelCfg');
							if (r && r.fields && r.fields.length > 0) {
								var i = e.getXScale(),
									o = e.getYScale(),
									s = i.field,
									u = o.field,
									c = t.get('origin')._origin,
									l = e.get('labelContainer'),
									f = l.get('labelsGroup').get('children');
								a.each(f, function(e) {
									var r = e.get('origin') || [];
									r[s] === c[s] && r[u] === c[u] && (e.set('visible', n), t.set('gLabel', e));
								});
							}
						}
					}),
					(t.prototype._bindFilterEvent = function(t, e) {
						var n = this,
							r = this.chart,
							i = e.field;
						t.on('itemfilter', function(t) {
							var e = t.range;
							r.filterShape(function(t, r, o) {
								if (t[i]) {
									var a = t[i] >= e[0] && e[1] >= t[i];
									return n._filterLabels(r, o, a), a;
								}
								return !0;
							});
							for (var o = r.getAllGeoms() || [], a = 0; o.length > a; a++)
								!(function(t) {
									var n = o[t];
									'heatmap' === n.get('type') &&
										l(function() {
											n.drawWithRange(e);
										});
								})(a);
						});
					}),
					(t.prototype._getShapeData = function(t) {
						var e = t.get('origin');
						return a.isArray(e) && (e = e[0]), e._origin;
					}),
					(t.prototype._bindHoverEvent = function(t, e) {
						var n = this,
							r = n.chart,
							o = r.getAllGeoms(),
							s = n.options,
							u = r.get('canvas');
						t.on('itemhover', function(t) {
							var r = t.item.value,
								c = n.pre;
							if (c) {
								if (c === r) return;
							} else
								a.each(o, function(o) {
									var c = o.get('shapeContainer'),
										l = o.getShapes(),
										f = [];
									if (e) {
										var h = o.get('scales')[e];
										a.each(l, function(t) {
											var o = n._getShapeData(t);
											o && i(o[e], r, h) && f.push(t);
										});
									} else o.getYScale().field === r && (f = l);
									a.isEmpty(f) ||
										((t.shapes = f),
										(t.geom = o),
										s.onHover ? (s.onHover(t), c.sort(), u.draw()) : o.setShapesActived(f));
								}),
									(n.pre = r);
						}),
							t.on('itemunhover', function() {
								(n.pre = null),
									a.each(o, function(t) {
										t.get('activeShapes') && (t.clearActivedShapes(), u.draw());
									});
							});
					}),
					(t.prototype._isFiltered = function(t, e, n) {
						if (!t.isCategory) return !0;
						var r = !1;
						return (
							(n = t.invert(n)),
							a.each(e, function(e) {
								if ((r = r || t.getText(e) === t.getText(n))) return !1;
							}),
							r
						);
					}),
					(t.prototype._alignLegend = function(t, e, n, r) {
						var i = this,
							o = i.container,
							a = o.get('canvas'),
							u = a.get('width'),
							c = a.get('height'),
							l = i.totalRegion,
							f = i.plotRange,
							h = i.getBackRange(),
							p = t.get('offsetX') || 0,
							d = t.get('offsetY') || 0,
							g = t.getHeight(),
							y = t.getWidth(),
							v = s.legend.margin,
							m = s.legend.legendMargin,
							x = i.legends[r].length,
							b = r.split('-'),
							_ = 0,
							w = 0,
							S = x > 1 ? l : n;
						if ('left' === b[0] || 'right' === b[0])
							(c = f.br.y),
								(_ = i._getXAlign(b[0], u, n, h, y, v)),
								(w = e
									? e.get('y') + e.getHeight() + m
									: i._getYAlignVertical(b[1], c, S, h, 0, v, a.get('height')));
						else if ('top' === b[0] || 'bottom' === b[0])
							if (((w = i._getYAlignHorizontal(b[0], c, n, h, g, v)), e)) {
								var M = e.getWidth();
								_ = e.get('x') + M + m;
							} else
								(_ = i._getXAlign(b[1], u, S, h, 0, v)),
									'right' === b[1] && (_ = f.br.x - S.totalWidth);
						t.move(_ + p, w + d);
					}),
					(t.prototype._getXAlign = function(t, e, n, r, i, o) {
						var a = 'left' === t ? r.minX - i - o[3] : r.maxX + o[1];
						return 'center' === t && (a = (e - n.totalWidth) / 2), a;
					}),
					(t.prototype._getYAlignHorizontal = function(t, e, n, r, i, o) {
						return 'top' === t ? r.minY - i - o[0] : r.maxY + o[2];
					}),
					(t.prototype._getYAlignVertical = function(t, e, n, r, i, o, a) {
						var s = 'top' === t ? r.minY - i - o[0] : e - n.totalHeight;
						return 'center' === t && (s = (a - n.totalHeight) / 2), s;
					}),
					(t.prototype._getSubRegion = function(t) {
						var e = 0,
							n = 0,
							r = 0,
							i = 0;
						return (
							a.each(t, function(t) {
								var o = t.getWidth(),
									a = t.getHeight();
								o > e && (e = o), (r += o), a > n && (n = a), (i += a);
							}),
							{ maxWidth: e, totalWidth: r, maxHeight: n, totalHeight: i }
						);
					}),
					(t.prototype._getRegion = function() {
						var t = this,
							e = t.legends,
							n = s.legend.legendMargin,
							r = [],
							i = 0,
							o = 0;
						return (
							a.each(e, function(e) {
								var a = t._getSubRegion(e);
								r.push(a), (i += a.totalWidth + n), (o += a.totalHeight + n);
							}),
							{ totalWidth: i, totalHeight: o, subs: r }
						);
					}),
					(t.prototype._addCategroyLegend = function(t, e, n, r, i) {
						var o = this,
							l = t.field,
							f = o.options,
							h = o.legends;
						h[i] = h[i] || [];
						var p = o.container,
							d = [],
							g = t.getTicks(),
							y = !0,
							v = n.get('shapeType') || 'point',
							m = n.getDefaultValue('shape') || 'circle';
						f[l] && f[l].marker
							? ((m = f[l].marker), (v = 'point'), (y = !1))
							: f.marker && ((m = f.marker), (v = 'point'), (y = !1));
						var x = o.chart,
							b = x.get('canvas'),
							_ = o.plotRange,
							w = i.split('-'),
							S = 'right' === w[0] || 'left' === w[0] ? _.bl.y - _.tr.y : b.get('width');
						a.each(g, function(e) {
							var i = e.text,
								u = i,
								l = e.value,
								f = t.invert(l),
								h = { isInCircle: n.isInCircle() },
								p = !r || o._isFiltered(t, r, l),
								g = n.getAttr('color'),
								x = n.getAttr('shape');
							if (g)
								if (g.callback && g.callback.length > 1) {
									var b = Array(g.callback.length - 1).fill('');
									h.color = g.mapping.apply(g, [f].concat(b)).join('') || s.defaultColor;
								} else h.color = g.mapping(f).join('') || s.defaultColor;
							if (y && x)
								if (x.callback && x.callback.length > 1) {
									var _ = Array(x.callback.length - 1).fill('');
									m = x.mapping.apply(x, [f].concat(_)).join('');
								} else m = x.mapping(f).join('');
							var w = c.getShapeFactory(v),
								S = w.getMarkerCfg(m, h);
							a.isFunction(m) && (S.symbol = m),
								d.push({ value: u, dataValue: f, checked: p, marker: S });
						});
						var M = a.deepMix({}, s.legend[w[0]], f[l] || f, {
							viewId: x.get('_id'),
							maxLength: S,
							items: d,
						});
						M.title && a.deepMix(M, { title: { text: t.alias || t.field } });
						var P = void 0;
						return (
							o._isTailLegend(f, n)
								? ((M.chart = o.chart), (M.geom = n), (P = p.addGroup(u.Tail, M)))
								: (P = p.addGroup(u.Category, M)),
							o._bindClickEvent(P, t, r),
							h[i].push(P),
							P
						);
					}),
					(t.prototype._addContinuousLegend = function(t, e, n) {
						var r = this,
							i = r.legends;
						i[n] = i[n] || [];
						var o = r.container,
							c = t.field,
							l = t.getTicks(),
							f = [],
							h = void 0,
							p = void 0,
							d = void 0;
						a.each(l, function(n) {
							var r = n.value,
								i = t.invert(r),
								o = e.mapping(i).join('');
							f.push({ value: n.tickValue, attrValue: o, scaleValue: r }),
								0 === r && (p = !0),
								1 === r && (d = !0);
						}),
							p || f.push({ value: t.min, attrValue: e.mapping(0).join(''), scaleValue: 0 }),
							d || f.push({ value: t.max, attrValue: e.mapping(1).join(''), scaleValue: 1 });
						var g = r.options,
							y = n.split('-'),
							v = s.legend[y[0]];
						((g && !1 === g.slidable) || (g[c] && !1 === g[c].slidable)) &&
							(v = a.mix({}, v, s.legend.gradient));
						var m = a.deepMix({}, v, g[c] || g, {
							items: f,
							attr: e,
							numberFormatter: t.formatter,
						});
						return (
							m.title && a.deepMix(m, { title: { text: t.alias || t.field } }),
							'color' === e.type
								? (h = o.addGroup(u.Color, m))
								: 'size' === e.type && (h = o.addGroup(u.Size, m)),
							r._bindFilterEvent(h, t),
							i[n].push(h),
							h
						);
					}),
					(t.prototype._isTailLegend = function(t, e) {
						if (t.hasOwnProperty('attachLast') && t.attachLast) {
							var n = e.get('type');
							if ('line' === n || 'lineStack' === n || 'area' === n || 'areaStack' === n) return !0;
						}
						return !1;
					}),
					(t.prototype._adjustPosition = function(t, e) {
						var n = void 0;
						if (e) n = 'right-top';
						else if (a.isArray(t)) n = t[0] + '-' + t[1];
						else {
							var r = t.split('-');
							1 === r.length
								? ('left' === r[0] && (n = 'left-bottom'),
								  'right' === r[0] && (n = 'right-bottom'),
								  'top' === r[0] && (n = 'top-center'),
								  'bottom' === r[0] && (n = 'bottom-center'))
								: (n = t);
						}
						return n;
					}),
					(t.prototype.addLegend = function(t, e, n, r) {
						var i = this,
							o = i.options,
							a = t.field,
							u = o[a];
						if (!1 === u) return null;
						if (u && u.custom) i.addCustomLegend(a);
						else {
							var c = o.position || s.defaultLegendPosition;
							(c = i._adjustPosition(c, i._isTailLegend(o, n))),
								u && u.position && (c = u.position);
							var l = void 0;
							(l = t.isLinear
								? i._addContinuousLegend(t, e, c)
								: i._addCategroyLegend(t, e, n, r, c)),
								i._bindHoverEvent(l, a);
						}
					}),
					(t.prototype.addCustomLegend = function(t) {
						var e = this,
							n = e.chart,
							r = e.container,
							i = e.options;
						t && (i = i[t]);
						var c = i.position || s.defaultLegendPosition;
						c = e._adjustPosition(c);
						var l = e.legends;
						l[c] = l[c] || [];
						var f = i.items;
						if (f) {
							var h = n.getAllGeoms();
							a.each(f, function(t) {
								var e = o(h, t.value);
								a.isObject(t.marker)
									? (t.marker.radius = t.marker.radius || 4.5)
									: (t.marker = {
											symbol: t.marker ? t.marker : 'circle',
											fill: t.fill,
											radius: 4.5,
									  }),
									(t.checked = !!a.isNil(t.checked) || t.checked),
									(t.geom = e);
							});
							var p = n.get('canvas'),
								d = e.plotRange,
								g = c.split('-'),
								y = 'right' === g[0] || 'left' === g[0] ? d.bl.y - d.tr.y : p.get('width'),
								v = a.deepMix({}, s.legend[g[0]], i, { maxLength: y, items: f }),
								m = r.addGroup(u.Category, v);
							l[c].push(m),
								m.on('itemclick', function(t) {
									i.onClick && i.onClick(t);
								}),
								e._bindHoverEvent(m);
						}
					}),
					(t.prototype.alignLegends = function() {
						var t = this,
							e = t.legends,
							n = t._getRegion(e);
						t.totalRegion = n;
						var r = 0;
						return (
							a.each(e, function(e, i) {
								var o = n.subs[r];
								a.each(e, function(n, r) {
									var a = e[r - 1];
									(n.get('useHtml') && !n.get('autoPosition')) || t._alignLegend(n, a, o, i);
								}),
									r++;
							}),
							this
						);
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			var i = n(0),
				o = n(1),
				a = n(91),
				s = /^(?:(?!0000)[0-9]{4}([-\/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-\/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/;
			t.exports = (function() {
				function t(e) {
					r(this, t), (this.defs = {}), i.assign(this, e);
				}
				return (
					(t.prototype._getDef = function(t) {
						var e = this.defs,
							n = null;
						return (
							(o.scales[t] || e[t]) &&
								((n = i.mix({}, o.scales[t])),
								i.each(e[t], function(t, e) {
									i.isNil(t) ? delete n[e] : (n[e] = t);
								})),
							n
						);
					}),
					(t.prototype._getDefaultType = function(t, e) {
						var n = 'linear',
							r = i.Array.firstValue(e, t);
						return (
							i.isArray(r) && (r = r[0]), s.test(r) ? (n = 'time') : i.isString(r) && (n = 'cat'), n
						);
					}),
					(t.prototype._getScaleCfg = function(t, e, n) {
						var r = { field: e },
							o = i.Array.values(n, e);
						if (((r.values = o), !a.isCategory(t) && 'time' !== t)) {
							var s = i.Array.getRange(o);
							(r.min = s.min), (r.max = s.max), (r.nice = !0);
						}
						return 'time' === t && (r.nice = !1), r;
					}),
					(t.prototype.createScale = function(t, e) {
						var n = this,
							r = n._getDef(t),
							o = void 0;
						if (!e || !e.length)
							return (o =
								r && r.type ? a[r.type](r) : a.identity({ value: t, field: '' + t, values: [t] }));
						var s = i.Array.firstValue(e, t);
						if (i.isNumber(t) || (i.isNil(s) && !r))
							o = a.identity({ value: t, field: '' + t, values: [t] });
						else {
							var u = void 0;
							r && (u = r.type), (u = u || n._getDefaultType(t, e));
							var c = n._getScaleCfg(u, t, e);
							r && i.mix(c, r), (o = a[u](c));
						}
						return o;
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				var n = -1;
				return (
					u.each(t, function(t, r) {
						var i = !0;
						for (var o in e)
							if (
								e.hasOwnProperty(o) &&
								-1 === g.indexOf(o) &&
								!u.isObject(e[o]) &&
								e[o] !== t[o]
							) {
								i = !1;
								break;
							}
						if (i) return (n = r), !1;
					}),
					n
				);
			}
			function o(t, e) {
				if (!t) return !1;
				var n = '';
				return (
					!!t.className &&
					((n = u.isNil(t.className.baseVal) ? t.className : t.className.baseVal),
					-1 !== n.indexOf(e))
				);
			}
			function a(t, e) {
				for (var n = t.parentNode, r = !1; n && n !== document.body; ) {
					if (o(n, e)) {
						r = !0;
						break;
					}
					n = n.parentNode;
				}
				return r;
			}
			function s(t) {
				var e = [];
				return (
					u.each(t, function(t) {
						var n = i(e, t);
						-1 === n ? e.push(t) : (e[n] = t);
					}),
					e
				);
			}
			var u = n(0),
				c = n(1),
				l = n(177),
				f = n(2).MatrixUtil,
				h = f.vec2,
				p = ['line', 'area', 'path', 'areaStack'],
				d = ['line', 'area'],
				g = ['marker', 'showMarker'];
			t.exports = (function() {
				function t(e) {
					r(this, t), u.assign(this, e), (this.timeStamp = 0);
				}
				return (
					(t.prototype._normalizeEvent = function(t) {
						var e = this.chart,
							n = this._getCanvas(),
							r = n.getPointByClient(t.clientX, t.clientY),
							i = n.get('pixelRatio');
						return (r.x = r.x / i), (r.y = r.y / i), (r.views = e.getViewsByPoint(r)), r;
					}),
					(t.prototype._getCanvas = function() {
						return this.chart.get('canvas');
					}),
					(t.prototype._getTriggerEvent = function() {
						var t = this.options,
							e = t.triggerOn,
							n = void 0;
						return (
							e && 'mousemove' !== e
								? 'click' === e
									? (n = 'plotclick')
									: 'none' === e && (n = null)
								: (n = 'plotmove'),
							n
						);
					}),
					(t.prototype._getDefaultTooltipCfg = function() {
						var t = this,
							e = t.options,
							n = u.mix({}, c.tooltip),
							r = t.chart,
							i = r.getAllGeoms().filter(function(t) {
								return t.get('visible');
							}),
							o = [];
						u.each(i, function(t) {
							var e = t.get('type'),
								n = t.get('adjusts'),
								r = !1;
							n &&
								u.each(n, function(t) {
									if ('symmetric' === t.type || 'Symmetric' === t.type) return (r = !0), !1;
								}),
								-1 !== u.indexOf(o, e) || r || o.push(e);
						});
						var a = void 0;
						return (
							i.length &&
								i[0].get('coord') &&
								'cartesian' === i[0].get('coord').type &&
								1 === o.length &&
								('interval' === o[0] && !1 !== e.shared
									? (a = { zIndex: 0, crosshairs: c.tooltipCrosshairsRect })
									: u.indexOf(d, o[0]) > -1 && (a = { crosshairs: c.tooltipCrosshairsLine })),
							u.mix(n, a, {
								isTransposed: !(!i.length || !i[0].get('coord')) && i[0].get('coord').isTransposed,
							})
						);
					}),
					(t.prototype._bindEvent = function() {
						var t = this.chart,
							e = this._getTriggerEvent();
						e &&
							(t.on(e, u.wrapBehavior(this, 'onMouseMove')),
							t.on('plotleave', u.wrapBehavior(this, 'onMouseOut')));
					}),
					(t.prototype._offEvent = function() {
						var t = this.chart,
							e = this._getTriggerEvent();
						e &&
							(t.off(e, u.getWrapBehavior(this, 'onMouseMove')),
							t.off('plotleave', u.getWrapBehavior(this, 'onMouseOut')));
					}),
					(t.prototype._setTooltip = function(t, e, n, r) {
						var i = this,
							o = i.tooltip,
							a = i.prePoint;
						if (!a || a.x !== t.x || a.y !== t.y) {
							(e = s(e)), (i.prePoint = t);
							var l = i.chart,
								f = u.isArray(t.x) ? t.x[t.x.length - 1] : t.x,
								h = u.isArray(t.y) ? t.y[t.y.length - 1] : t.y;
							o.get('visible') || l.emit('tooltip:show', { x: f, y: h, tooltip: o });
							var p = e[0],
								d = p.title || p.name;
							o.isContentChange(d, e) &&
								(l.emit('tooltip:change', { tooltip: o, x: f, y: h, items: e }),
								(d = e[0].title || e[0].name),
								o.setContent(d, e),
								u.isEmpty(n)
									? o.clearMarkers()
									: !0 === i.options.hideMarkers
										? o.set('markerItems', n)
										: o.setMarkers(n, c.tooltipMarker)),
								o.setPosition(f, h, r),
								o.show();
						}
					}),
					(t.prototype.hideTooltip = function() {
						var t = this.tooltip,
							e = this.chart,
							n = this._getCanvas();
						(this.prePoint = null), t.hide(), e.emit('tooltip:hide', { tooltip: t }), n.draw();
					}),
					(t.prototype.onMouseMove = function(t) {
						if (!u.isEmpty(t.views)) {
							var e = this.timeStamp,
								n = +new Date(),
								r = { x: t.x, y: t.y };
							if (n - e > 16) {
								var i = void 0;
								t.shape &&
									u.inArray(['point', 'interval', 'polygon', 'schema'], t.shape.name) &&
									(i = t.shape),
									this.showTooltip(r, t.views, i),
									(this.timeStamp = n);
							}
						}
					}),
					(t.prototype.onMouseOut = function(t) {
						var e = this.tooltip,
							n = this._getCanvas();
						e.get('visible') &&
							((t && t.target !== n) ||
								(t &&
									t.toElement &&
									(o(t.toElement, 'g2-tooltip') || a(t.toElement, 'g2-tooltip'))) ||
								this.hideTooltip());
					}),
					(t.prototype.renderTooltip = function() {
						var t = this;
						if (!t.tooltip) {
							var e = t.chart,
								n = t._getCanvas(),
								r = t._getDefaultTooltipCfg(),
								i = t.options;
							(i = u.deepMix(
								{
									plotRange: e.get('plotRange'),
									capture: !1,
									canvas: n,
									frontPlot: e.get('frontPlot'),
									backPlot: e.get('backPlot'),
								},
								r,
								i
							)),
								i.crosshairs && 'rect' === i.crosshairs.type && (i.zIndex = 0),
								(i.visible = !1),
								!1 === i.shared && u.isNil(i.position) && (i.position = 'top');
							var o = new l(i);
							t.tooltip = o;
							var a = t._getTriggerEvent();
							if (!o.get('enterable') && 'plotmove' === a) {
								var s = o.get('container');
								s &&
									(s.onmousemove = function(n) {
										var r = t._normalizeEvent(n);
										e.emit(a, r);
									});
							}
							t._bindEvent();
						}
					}),
					(t.prototype.showTooltip = function(t, e, n) {
						var r = this;
						if (!u.isEmpty(e) && t) {
							this.tooltip || this.renderTooltip();
							var i = r.options,
								o = [],
								a = [];
							if (
								(u.each(e, function(e) {
									if (!e.get('tooltipEnable')) return !0;
									var n = e.get('geoms'),
										r = e.get('coord');
									u.each(n, function(e) {
										var n = e.get('type');
										if (e.get('visible') && !1 !== e.get('tooltipCfg')) {
											var s = e.get('dataArray');
											if (
												e.isShareTooltip() ||
												(!1 === i.shared && u.inArray(['area', 'line', 'path'], n))
											)
												u.each(s, function(s) {
													var c = e.findPoint(t, s);
													if (c) {
														var l = e.getTipItems(c, i.title);
														-1 !== u.indexOf(p, n) &&
															u.each(l, function(t) {
																var e = t.point;
																if (e && e.x && e.y) {
																	var n = u.isArray(e.x) ? e.x[e.x.length - 1] : e.x,
																		i = u.isArray(e.y) ? e.y[e.y.length - 1] : e.y;
																	(e = r.applyMatrix(n, i, 1)),
																		(t.x = e[0]),
																		(t.y = e[1]),
																		(t.showMarker = !0),
																		o.push(t);
																}
															}),
															(a = a.concat(l));
													}
												});
											else {
												var c = e.get('shapeContainer'),
													l = c.get('canvas'),
													f = l.get('pixelRatio'),
													h = c.getShape(t.x * f, t.y * f);
												h &&
													h.get('visible') &&
													h.get('origin') &&
													(a = e.getTipItems(h.get('origin'), i.title));
											}
										}
									}),
										u.each(a, function(t) {
											var e = t.point,
												n = u.isArray(e.x) ? e.x[e.x.length - 1] : e.x,
												i = u.isArray(e.y) ? e.y[e.y.length - 1] : e.y;
											(e = r.applyMatrix(n, i, 1)), (t.x = e[0]), (t.y = e[1]);
										});
								}),
								a.length)
							) {
								var s = a[0];
								if (
									!a.every(function(t) {
										return t.title === s.title;
									})
								) {
									var c = s,
										l = 1 / 0;
									a.forEach(function(e) {
										var n = h.distance([t.x, t.y], [e.x, e.y]);
										l > n && ((l = n), (c = e));
									}),
										(a = a.filter(function(t) {
											return t.title === c.title;
										})),
										(o = o.filter(function(t) {
											return t.title === c.title;
										}));
								}
								if (!1 === i.shared && a.length > 1) {
									var f = a[0],
										d = Math.abs(t.y - f.y);
									u.each(a, function(e) {
										Math.abs(t.y - e.y) > d || ((f = e), (d = Math.abs(t.y - e.y)));
									}),
										f && f.x && f.y && (o = [f]),
										(a = [f]);
								}
								r._setTooltip(t, a, o, n);
							} else r.hideTooltip();
						}
					}),
					(t.prototype.clear = function() {
						var t = this.tooltip;
						t && t.destroy(), (this.tooltip = null), (this.prePoint = null), this._offEvent();
					}),
					t
				);
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function a(t) {
				var e = t.startAngle,
					n = t.endAngle;
				return !(!f.isNil(e) && !f.isNil(n) && n - e < 2 * Math.PI);
			}
			function s(t, e, n) {
				var r = (t - e) / (n - e);
				return r >= 0 && 1 >= r;
			}
			function u(t, e) {
				var n = !1;
				if (t) {
					if ('theta' === t.type) {
						var r = t.start,
							i = t.end;
						n = s(e.x, r.x, i.x) && s(e.y, r.y, i.y);
					} else {
						var o = t.invert(e);
						n = !(0 > o.x || 0 > o.y || o.x > 1 || o.y > 1);
					}
				}
				return n;
			}
			var c = n(44),
				l = n(4),
				f = n(0),
				h = n(75),
				p = n(1),
				d = n(142),
				g = {};
			f.each(l, function(t, e) {
				var n = f.lowerFirst(e);
				g[n] = function(e) {
					var n = new t(e);
					return this.addGeom(n), n;
				};
			}),
				(t.exports = (function(t) {
					function e(n) {
						r(this, e);
						var o = i(this, t.call(this, n)),
							a = o;
						return (
							f.each(l, function(t, e) {
								var n = f.lowerFirst(e);
								a[n] = function(e) {
									var n = new t(e);
									return a.addGeom(n), n;
								};
							}),
							o.init(),
							o
						);
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							return {
								viewContainer: null,
								coord: null,
								start: { x: 0, y: 0 },
								end: { x: 1, y: 1 },
								geoms: [],
								scales: {},
								options: {},
								scaleController: null,
								padding: 0,
								parent: null,
								tooltipEnable: !0,
								animate: !0,
								visible: !0,
							};
						}),
						(e.prototype.init = function() {
							this._initViewPlot(),
								this.get('data') && this._initData(this.get('data')),
								this._initOptions(),
								this._initControllers(),
								this._bindEvents();
						}),
						(e.prototype._initOptions = function() {
							var t = this,
								e = f.mix({}, t.get('options'));
							e.scales || (e.scales = {}),
								e.coord || (e.coord = {}),
								!1 === e.animate && this.set('animate', !1),
								(!1 === e.tooltip || f.isNull(e.tooltip)) && this.set('tooltipEnable', !1),
								e.geoms &&
									e.geoms.length &&
									f.each(e.geoms, function(e) {
										t._createGeom(e);
									});
							var n = t.get('scaleController');
							n && (n.defs = e.scales);
							var r = t.get('coordController');
							r && r.reset(e.coord), this.set('options', e);
						}),
						(e.prototype._createGeom = function(t) {
							var e = t.type,
								n = void 0;
							this[e] &&
								((n = this[e]()),
								f.each(t, function(t, e) {
									if (n[e])
										if (f.isObject(t) && t.field)
											if ('label' === t) n[e](t.field, t.callback, t.cfg);
											else {
												var r = void 0;
												f.each(t, function(t, e) {
													'field' !== e && (r = t);
												}),
													n[e](t.field, r);
											}
										else n[e](t);
								}));
						}),
						(e.prototype._initControllers = function() {
							var t = this.get('options'),
								e = new h.Scale({ defs: t.scales }),
								n = new h.Coord(t.coord);
							this.set('scaleController', e),
								this.set('coordController', n),
								this.set('axisController', new h.Axis()),
								this.set('guideController', new h.Guide({ options: t.guides || [] }));
						}),
						(e.prototype._initViewPlot = function() {
							this.get('viewContainer') || this.set('viewContainer', this.get('middlePlot'));
						}),
						(e.prototype._initGeoms = function() {
							for (
								var t = this.get('geoms'),
									e = this.get('filteredData'),
									n = this.get('coord'),
									r = this.get('_id'),
									i = 0;
								t.length > i;
								i++
							) {
								var o = t[i];
								o.set('data', e),
									o.set('coord', n),
									o.set('_id', r + '-geom' + i),
									o.set('keyFields', this.get('keyFields')),
									o.init();
							}
						}),
						(e.prototype._clearGeoms = function() {
							for (var t = this, e = t.get('geoms'), n = 0; e.length > n; n++) {
								e[n].clear();
							}
						}),
						(e.prototype._removeGeoms = function() {
							for (var t = this, e = t.get('geoms'); e.length > 0; ) {
								e.shift().destroy();
							}
						}),
						(e.prototype._drawGeoms = function() {
							for (var t = this.get('geoms'), e = this.get('coord'), n = 0; t.length > n; n++) {
								var r = t[n];
								r.setCoord(e), r.paint();
							}
						}),
						(e.prototype.isShapeInView = function(t) {
							var e = this.get('_id'),
								n = t._id;
							return n ? n.split('-')[0] === e : t.get('parent').get('viewId') === e;
						}),
						(e.prototype.getViewRegion = function() {
							var t = this,
								e = t.get('parent'),
								n = void 0,
								r = void 0;
							if (e) {
								var i = e.getViewRegion(),
									o = t._getViewRegion(i.start, i.end);
								(n = o.start), (r = o.end);
							} else (n = t.get('start')), (r = t.get('end'));
							return { start: n, end: r };
						}),
						(e.prototype._getViewRegion = function(t, e) {
							var n = this.get('start'),
								r = this.get('end'),
								i = n.x,
								o = 1 - r.y,
								a = r.x,
								s = 1 - n.y,
								u = this.get('padding'),
								c = f.toAllPadding(u);
							return {
								start: { x: i * (e.x - t.x) + t.x + c[3], y: o * (e.y - t.y) + t.y - c[2] },
								end: { x: a * (e.x - t.x) + t.x - c[1], y: s * (e.y - t.y) + t.y + c[0] },
							};
						}),
						(e.prototype._createCoord = function() {
							var t = this.get('coordController'),
								e = this.getViewRegion();
							this.set('coord', t.createCoord(e.start, e.end));
						}),
						(e.prototype._renderAxes = function() {
							var t = this.get('options'),
								e = t.axes;
							if (!1 !== e) {
								var n = this.get('axisController');
								(n.container = this.get('backPlot')),
									(n.coord = this.get('coord')),
									(n.options = e || {});
								n.createAxis(this.getXScale(), this.getYScales(), this.get('_id'));
							}
						}),
						(e.prototype._renderGuides = function() {
							var t = this.get('guideController');
							if (!f.isEmpty(t.options)) {
								var e = this.get('coord');
								(t.view = this),
									(t.backContainer = this.get('backPlot')),
									(t.frontContainer = this.get('frontPlot')),
									(t.xScales = this._getScales('x')),
									(t.yScales = this._getScales('y')),
									t.render(e);
							}
						}),
						(e.prototype._bindEvents = function() {
							var t = new h.Event({ view: this, canvas: this.get('canvas') });
							t.bindEvents(), this.set('eventController', t);
						}),
						(e.prototype._clearEvents = function() {
							var t = this.get('eventController');
							t && t.clearEvents();
						}),
						(e.prototype._getScales = function(t) {
							for (var e = this.get('geoms'), n = {}, r = 0; e.length > r; r++) {
								var i = e[r],
									o = 'x' === t ? i.getXScale() : i.getYScale();
								o && !n[o.field] && (n[o.field] = o);
							}
							return n;
						}),
						(e.prototype._adjustScale = function() {
							this._setCatScalesRange();
							for (
								var t = this.get('geoms'), e = this.get('scaleController'), n = e.defs, r = 0;
								t.length > r;
								r++
							) {
								var i = t[r];
								if ('interval' === i.get('type')) {
									var o = i.getYScale(),
										a = o.field;
									(n[a] && n[a].min) || 0 >= o.min || 'time' === o.type || o.change({ min: 0 });
								}
							}
						}),
						(e.prototype._setCatScalesRange = function() {
							var t = this,
								e = t.get('coord'),
								n = t.getXScale(),
								r = t.getYScales(),
								i = [];
							n && i.push(n), (i = i.concat(r));
							var o = e.isPolar && a(e),
								s = t.get('scaleController'),
								u = s.defs;
							f.each(i, function(t) {
								if (
									(t.isCategory || t.isIdentity) &&
									t.values &&
									(!u[t.field] || !u[t.field].range)
								) {
									var n = t.values.length,
										r = void 0;
									if (1 === n) r = [0.5, 1];
									else {
										var i = 1,
											a = 0;
										o
											? e.isTransposed
												? ((i = p.widthRatio.multiplePie),
												  (a = (1 / n) * i),
												  (r = [a / 2, 1 - a / 2]))
												: (r = [0, 1 - 1 / n])
											: ((a = ((1 / n) * 1) / 2), (r = [a, 1 - a]));
									}
									t.range = r;
								}
							});
						}),
						(e.prototype.getXScale = function() {
							var t = this.get('geoms'),
								e = null;
							return f.isEmpty(t) || (e = t[0].getXScale()), e;
						}),
						(e.prototype.getYScales = function() {
							for (var t = this.get('geoms'), e = [], n = 0; t.length > n; n++) {
								var r = t[n],
									i = r.getYScale();
								i && -1 === f.indexOf(e, i) && e.push(i);
							}
							return e;
						}),
						(e.prototype.getXY = function(t) {
							var e = this,
								n = e.get('coord'),
								r = e._getScales('x'),
								i = e._getScales('y'),
								o = void 0,
								a = void 0;
							for (var s in t) r[s] && (o = r[s].scale(t[s])), i[s] && (a = i[s].scale(t[s]));
							return f.isNil(o) || f.isNil(a) ? null : n.convert({ x: o, y: a });
						}),
						(e.prototype.getSnapRecords = function(t) {
							var e = this,
								n = e.get('geoms'),
								r = [];
							return (
								f.each(n, function(e) {
									var n = e.get('dataArray'),
										i = void 0;
									f.each(n, function(n) {
										(i = e.findPoint(t, n)) && r.push(i);
									});
								}),
								r
							);
						}),
						(e.prototype.addGeom = function(t) {
							var e = this;
							e.get('geoms').push(t),
								t.set('view', e),
								t.set('container', e.get('viewContainer')),
								t.set('animate', e.get('animate')),
								t.bindEvents();
						}),
						(e.prototype.removeGeom = function(t) {
							var e = this.get('geoms');
							f.Array.remove(e, t), t.destroy();
						}),
						(e.prototype.createScale = function(t, e) {
							var n = this.get('scales'),
								r = this.get('parent'),
								i = n[t];
							if (!e) {
								var o = this.get('filteredData'),
									a = this._getFieldsForLegend();
								e = o.length && -1 === a.indexOf(t) ? o : this.get('data');
							}
							var s = this.get('scaleController');
							if (i) {
								if (i.sync) {
									var u = s.createScale(t, e);
									this._syncScale(i, u);
								}
							} else {
								if (((i = s.createScale(t, e)), i.sync && r)) {
									i = this._getSyncScale(r.createScale(t, e), i);
								}
								n[t] = i;
							}
							return i;
						}),
						(e.prototype._getFieldsForLegend = function() {
							var t = [],
								e = this.get('geoms');
							return (
								f.each(e, function(e) {
									var n = e.getFieldsForLegend();
									t = t.concat(n);
								}),
								f.uniq(t)
							);
						}),
						(e.prototype._getSyncScale = function(t, e) {
							return t.type !== e.type ? e : (this._syncScale(t, e), t);
						}),
						(e.prototype._syncScale = function(t, e) {
							var n = f.union(t.values, e.values);
							if (e.isLinear) {
								var r = Math.max(t.max, e.max),
									i = Math.min(t.min, e.min);
								(t.max === r && t.min === i) || t.change({ min: i, max: r, values: n });
							}
							n.length !== t.values.length && t.change({ values: n });
						}),
						(e.prototype.getFilteredValues = function(t) {
							var e = this.get('scales')[t],
								n = e.values,
								r = this._getFilters();
							return r && r[t] ? n.filter(r[t]) : n.slice(0);
						}),
						(e.prototype.filter = function(t, e) {
							var n = this.get('options');
							n.filters || (n.filters = {}), (n.filters[t] = e);
						}),
						(e.prototype._getFilters = function() {
							return this.get('options').filters;
						}),
						(e.prototype.execFilter = function(t) {
							var e = this,
								n = e._getFilters();
							return (
								n &&
									(t = t.filter(function(t) {
										var e = !0;
										return (
											f.each(n, function(n, r) {
												if (n && !(e = n(t[r], t))) return !1;
											}),
											e
										);
									})),
								t
							);
						}),
						(e.prototype.axis = function(t, e) {
							var n = this.get('options');
							if (!1 === t) n.axes = !1;
							else {
								n.axes || (n.axes = {});
								n.axes[t] = e;
							}
							return this;
						}),
						(e.prototype.guide = function() {
							return this.get('guideController');
						}),
						(e.prototype._getKeyFields = function(t) {
							var e = [];
							f.each(t, function(t, n) {
								t.key && e.push(n);
							}),
								this.set('keyFields', e);
						}),
						(e.prototype.scale = function(t, e) {
							var n = this.get('options'),
								r = n.scales;
							return f.isObject(t) ? f.mix(r, t) : (r[t] = e), this._getKeyFields(r), this;
						}),
						(e.prototype.tooltip = function(t) {
							return this.set('tooltipEnable', t), this;
						}),
						(e.prototype.animate = function(t) {
							return (this.get('options').animate = t), this.set('animate', t), this;
						}),
						(e.prototype.changeOptions = function(t) {
							return this.set('options', t), this._initOptions(t), this;
						}),
						(e.prototype.getViewsByPoint = function(t) {
							var e = [],
								n = this.get('views');
							return (
								u(this.get('coord'), t) && e.push(this),
								f.each(n, function(n) {
									n.get('visible') && u(n.get('coord'), t) && e.push(n);
								}),
								e
							);
						}),
						(e.prototype.eachShape = function(t) {
							var e = this,
								n = e.get('views'),
								r = e.get('canvas');
							f.each(n, function(e) {
								e.eachShape(t);
							});
							var i = this.get('geoms');
							return (
								f.each(i, function(n) {
									var r = n.getShapes();
									f.each(r, function(r) {
										var i = r.get('origin');
										if (f.isArray(i)) {
											var o = i.map(function(t) {
												return t._origin;
											});
											t(o, r, n, e);
										} else {
											t(i._origin, r, n, e);
										}
									});
								}),
								r.draw(),
								this
							);
						}),
						(e.prototype.filterShape = function(t) {
							return (
								this.eachShape(function(e, n, r, i) {
									t(e, n, r, i) ? n.set('visible', !0) : n.set('visible', !1);
								}),
								this
							);
						}),
						(e.prototype.clearInner = function() {
							this.set('scales', {}),
								(this.get('options').geoms = null),
								this._clearGeoms(),
								this.get('guideController') && this.get('guideController').reset(),
								this.get('axisController') && this.get('axisController').clear();
						}),
						(e.prototype.clear = function() {
							return (
								(this.get('options').filters = null),
								this._removeGeoms(),
								this.clearInner(),
								this.get('guideController') && this.get('guideController').clear(),
								this.set('isUpdate', !1),
								this.set('keyFields', []),
								this
							);
						}),
						(e.prototype.coord = function(t, e) {
							var n = this.get('coordController');
							return n.reset({ type: t, cfg: e }), n;
						}),
						(e.prototype.resetCoord = function() {
							this._createCoord();
						}),
						(e.prototype.source = function(t, e) {
							return this._initData(t), e && this.scale(e), this.emit('setdata'), this;
						}),
						(e.prototype.changeData = function(t) {
							return (
								this.emit('beforechangedata'),
								this._initData(t),
								this.emit('afterchangedata'),
								this.repaint(),
								this
							);
						}),
						(e.prototype._initData = function(t) {
							var e = this.get('dataView');
							e &&
								(e.off('change', f.getWrapBehavior(this, '_onViewChange')),
								this.set('dataView', null)),
								t &&
									t.isDataView &&
									(t.on('change', f.wrapBehavior(this, '_onViewChange')),
									this.set('dataView', t),
									(t = t.rows)),
								this.set('data', t);
						}),
						(e.prototype._onViewChange = function() {
							this.emit('beforechangedata'),
								this.set('data', this.get('dataView').rows),
								this.emit('afterchangedata'),
								this.repaint();
						}),
						(e.prototype.beforeRender = function() {
							var t = this.get('views');
							f.each(t, function(t) {
								t.beforeRender();
							}),
								this.initView();
						}),
						(e.prototype.drawComponents = function() {
							var t = this.get('views');
							f.each(t, function(t) {
								t.drawComponents();
							}),
								this._renderAxes(),
								this._renderGuides();
						}),
						(e.prototype.drawCanvas = function(t) {
							if (!t) {
								var e = this.get('views');
								this.get('backPlot').sort();
								var n = this.get('canvas');
								if (this.get('animate')) {
									var r = this.get('isUpdate');
									f.each(e, function(t) {
										d.execAnimation(t, r);
									}),
										d.execAnimation(this, r);
								} else n.draw();
							}
						}),
						(e.prototype.render = function(t) {
							return (
								this.clearInner(),
								this.emit('beforerender'),
								this.beforeRender(),
								this.emit('beforepaint'),
								this.drawComponents(),
								this.paint(),
								this.emit('afterpaint'),
								this.drawCanvas(t),
								this.emit('afterrender'),
								this.set('rendered', !0),
								this
							);
						}),
						(e.prototype.initView = function() {
							this.set('filteredData', this.execFilter(this.get('data') || [])),
								this._createCoord(),
								this._initGeoms(),
								this._adjustScale();
						}),
						(e.prototype.paint = function() {
							var t = this.get('views');
							f.each(t, function(t) {
								t.paint();
							});
							var e = this.get('data');
							f.isEmpty(e) || this._drawGeoms(), this.get('visible') || this.changeVisible(!1, !0);
						}),
						(e.prototype.changeVisible = function(t, e) {
							var n = this.get('geoms');
							if (
								(f.each(n, function(e) {
									e.changeVisible(t, !0);
								}),
								this.get('axisController') && this.get('axisController').changeVisible(t),
								this.get('guideController') && this.get('guideController').changeVisible(t),
								!e)
							) {
								this.get('canvas').draw();
							}
						}),
						(e.prototype.repaint = function() {
							this.set('isUpdate', !0), this.clearInner(), this.render();
						}),
						(e.prototype.destroy = function() {
							this._clearEvents();
							var e = this.get('dataView');
							e && e.off('change', f.getWrapBehavior(this, '_onViewChange')),
								this.clear(),
								t.prototype.destroy.call(this);
						}),
						e
					);
				})(c));
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(24),
				u = n(2).MatrixUtil.vec2;
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'circle',
							tickInterval: null,
							startAngle: -Math.PI / 2,
							endAngle: (3 * Math.PI) / 2,
							line: { lineWidth: 1, stroke: '#C0D0E0' },
							tickLine: { lineWidth: 1, stroke: '#C0D0E0', length: 5 },
							_labelOffset: 5,
						});
					}),
					(e.prototype.parseTick = function(t, e, n) {
						return { text: t, value: e / n };
					}),
					(e.prototype._getCirclePoint = function(t, e) {
						var n = this,
							r = n.get('center');
						return (
							(e = e || n.get('radius')), { x: r.x + Math.cos(t) * e, y: r.y + Math.sin(t) * e }
						);
					}),
					(e.prototype.getTickPoint = function(t) {
						var e = this,
							n = e.get('startAngle');
						return e._getCirclePoint(n + (e.get('endAngle') - n) * t);
					}),
					(e.prototype.getSideVector = function(t, e) {
						var n = this,
							r = n.get('center'),
							i = [e.x - r.x, e.y - r.y];
						if (!a.isNil(t)) {
							var o = u.length(i);
							u.scale(i, i, t / o);
						}
						return i;
					}),
					(e.prototype.getSidePoint = function(t, e) {
						var n = this,
							r = n.getSideVector(e, t);
						return { x: t.x + r[0], y: t.y + r[1] };
					}),
					(e.prototype.getTickEnd = function(t, e) {
						var n = this,
							r = n.get('tickLine');
						return (e = e || r.length), n.getSidePoint(t, e);
					}),
					(e.prototype.getTextAnchor = function(t) {
						var e = void 0;
						return (
							a.snapEqual(t[0], 0)
								? (e = 'center')
								: t[0] > 0
									? (e = 'left')
									: 0 > t[0] && (e = 'right'),
							e
						);
					}),
					(e.prototype.getLinePath = function() {
						var t = this,
							e = t.get('center'),
							n = e.x,
							r = e.y,
							i = t.get('radius'),
							o = i,
							a = t.get('startAngle'),
							s = t.get('endAngle'),
							u = t.get('inner'),
							c = [];
						if (Math.abs(s - a) === 2 * Math.PI)
							c = [
								['M', n, r],
								['m', 0, -o],
								['a', i, o, 0, 1, 1, 0, 2 * o],
								['a', i, o, 0, 1, 1, 0, -2 * o],
								['z'],
							];
						else {
							var l = t._getCirclePoint(a),
								f = t._getCirclePoint(s),
								h = Math.abs(s - a) > Math.PI ? 1 : 0,
								p = a > s ? 0 : 1;
							if (u) {
								var d = t.getSideVector(u * i, l),
									g = t.getSideVector(u * i, f),
									y = { x: d[0] + n, y: d[1] + r },
									v = { x: g[0] + n, y: g[1] + r };
								c = [
									['M', y.x, y.y],
									['L', l.x, l.y],
									['A', i, o, 0, h, p, f.x, f.y],
									['L', v.x, v.y],
									['A', i * u, o * u, 0, h, Math.abs(p - 1), y.x, y.y],
								];
							} else
								c = [['M', n, r], ['L', l.x, l.y], ['A', i, o, 0, h, p, f.x, f.y], ['L', n, r]];
						}
						return c;
					}),
					(e.prototype.addLabel = function(e, n, r) {
						var i = this;
						(n = i.getSidePoint(n, i.get('label').offset || i.get('_labelOffset') || 0.001)),
							t.prototype.addLabel.call(this, e, n, r);
					}),
					(e.prototype.autoRotateLabels = function() {
						var t = this,
							e = t.get('ticks'),
							n = t.get('labelsGroup');
						if (n && e.length > 12) {
							var r = t.get('radius'),
								i = t.get('startAngle'),
								o = t.get('endAngle'),
								s = o - i,
								u = s / (e.length - 1),
								c = Math.sin(u / 2) * r * 2,
								l = t.getMaxLabelWidth(n);
							a.each(n.get('children'), function(t, n) {
								var r = e[n],
									o = r.value * s + i,
									a = o % (2 * Math.PI);
								c > l
									? (a > 0 || (o += Math.PI),
									  a > Math.PI && (o -= Math.PI),
									  (o -= Math.PI / 2),
									  t.attr('textAlign', 'center'))
									: a > Math.PI / 2
										? (o -= Math.PI)
										: a < (Math.PI / 2) * -1 && (o += Math.PI),
									t.rotateAtStart(o);
							});
						}
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(2),
				s = a.Group,
				u = n(0);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						return {
							zIndex: 1,
							type: 'line',
							lineStyle: null,
							items: null,
							alternateColor: null,
							matrix: null,
							hideFirstLine: !1,
							hideLastLine: !1,
							hightLightZero: !0,
							zeroLineStyle: { stroke: '#000', lineDash: [0, 0] },
						};
					}),
					(e.prototype._renderUI = function() {
						t.prototype._renderUI.call(this), this._drawLines();
					}),
					(e.prototype._drawLines = function() {
						var t = this,
							e = t.get('lineStyle'),
							n = t.get('items');
						n && n.length && (t._precessItems(n), t._drawGridLines(n, e));
					}),
					(e.prototype._precessItems = function(t) {
						var e = this,
							n = void 0;
						u.each(t, function(t, r) {
							n && e.get('alternateColor') && e._drawAlternativeBg(t, n, r), (n = t);
						});
					}),
					(e.prototype._drawGridLines = function(t, e) {
						var n = this,
							r = this.get('type'),
							i = void 0,
							o = void 0,
							a = void 0,
							s = void 0,
							c = t.length;
						'line' === r || 'polygon' === r
							? u.each(t, function(t, l) {
									(n.get('hideFirstLine') && 0 === l) ||
										(n.get('hideLastLine') && l === c - 1) ||
										((s = t.points),
										(o = []),
										'line' === r
											? (o.push(['M', s[0].x, s[0].y]),
											  o.push(['L', s[s.length - 1].x, s[s.length - 1].y]))
											: u.each(s, function(t, e) {
													o.push(0 === e ? ['M', t.x, t.y] : ['L', t.x, t.y]);
											  }),
										(a = n._drawZeroLine(r, l)
											? u.mix({}, n.get('zeroLineStyle'), { path: o })
											: u.mix({}, e, { path: o })),
										(i = n.addShape('path', { attrs: a })),
										(i.name = 'axis-grid'),
										(i._id = t._id),
										i.set('coord', n.get('coord')),
										n.get('appendInfo') && i.setSilent('appendInfo', n.get('appendInfo')));
							  })
							: u.each(t, function(t, r) {
									(n.get('hideFirstLine') && 0 === r) ||
										(n.get('hideLastLine') && r === c - 1) ||
										((s = t.points),
										(o = []),
										u.each(s, function(t, e) {
											var n = t.radius;
											o.push(0 === e ? ['M', t.x, t.y] : ['A', n, n, 0, 0, t.flag, t.x, t.y]);
										}),
										(a = u.mix({}, e, { path: o })),
										(i = n.addShape('path', { attrs: a })),
										(i.name = 'axis-grid'),
										(i._id = t._id),
										i.set('coord', n.get('coord')),
										n.get('appendInfo') && i.setSilent('appendInfo', n.get('appendInfo')));
							  });
					}),
					(e.prototype._drawZeroLine = function(t, e) {
						var n = this,
							r = n.get('tickValues');
						return !('line' !== t || !r || 0 !== r[e] || !n.get('hightLightZero'));
					}),
					(e.prototype._drawAlternativeBg = function(t, e, n) {
						var r = this,
							i = r.get('alternateColor'),
							o = void 0,
							a = void 0,
							s = void 0;
						u.isString(i) ? (a = i) : u.isArray(i) && ((a = i[0]), (s = i[1])),
							n % 2 == 0
								? s && (o = r._getBackItem(e.points, t.points, s))
								: a && (o = r._getBackItem(e.points, t.points, a));
						var c = r.addShape('Path', { attrs: o });
						(c.name = 'axis-grid-rect'),
							(c._id = t._id && t._id.replace('grid', 'grid-rect')),
							c.set('coord', r.get('coord')),
							r.get('appendInfo') && c.setSilent('appendInfo', r.get('appendInfo'));
					}),
					(e.prototype._getBackItem = function(t, e, n) {
						var r = [],
							i = this.get('type');
						if ('line' === i)
							r.push(['M', t[0].x, t[0].y]),
								r.push(['L', t[t.length - 1].x, t[t.length - 1].y]),
								r.push(['L', e[e.length - 1].x, e[e.length - 1].y]),
								r.push(['L', e[0].x, e[0].y]),
								r.push(['Z']);
						else if ('polygon' === i) {
							u.each(t, function(t, e) {
								r.push(0 === e ? ['M', t.x, t.y] : ['L', t.x, t.y]);
							});
							for (var o = e.length - 1; o >= 0; o--) r.push(['L', e[o].x, e[o].y]);
							r.push(['Z']);
						} else {
							var a = t[0].flag;
							u.each(t, function(t, e) {
								var n = t.radius;
								r.push(0 === e ? ['M', t.x, t.y] : ['A', n, n, 0, 0, t.flag, t.x, t.y]);
							});
							for (var s = e.length - 1; s >= 0; s--) {
								var c = e[s],
									l = c.radius;
								r.push(
									s === e.length - 1
										? ['M', c.x, c.y]
										: ['A', l, l, 0, 0, 1 === a ? 0 : 1, c.x, c.y]
								);
							}
						}
						return { fill: n, path: r };
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(24),
				u = n(2),
				c = u.MatrixUtil,
				l = u.PathUtil,
				f = c.vec2;
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'helix',
							line: { lineWidth: 1, stroke: '#C0D0E0' },
							tickLine: { lineWidth: 1, stroke: '#C0D0E0', length: 5 },
							startAngle: 1.25 * Math.PI,
							endAngle: 7.25 * Math.PI,
							a: 0,
							center: null,
							axisStart: null,
							crp: [],
						});
					}),
					(e.prototype.getLinePath = function() {
						var t = this,
							e = t.get('crp'),
							n = t.get('axisStart'),
							r = l.catmullRomToBezier(e);
						return r.unshift(['M', n.x, n.y]), r;
					}),
					(e.prototype.getTickPoint = function(t) {
						var e = this,
							n = e.get('startAngle');
						return e._getHelixPoint(n + (e.get('endAngle') - n) * t);
					}),
					(e.prototype._getHelixPoint = function(t) {
						var e = this,
							n = e.get('center'),
							r = e.get('a'),
							i = r * t + e.get('inner');
						return { x: n.x + Math.cos(t) * i, y: n.y + Math.sin(t) * i };
					}),
					(e.prototype.getSideVector = function(t, e) {
						var n = this,
							r = n.get('center'),
							i = [e.x - r.x, e.y - r.y];
						if (t) {
							var o = f.length(i);
							f.scale(i, i, t / o);
						}
						return i;
					}),
					(e.prototype.getSidePoint = function(t, e) {
						var n = this,
							r = n.getSideVector(e, t);
						return { x: t.x + r[0], y: t.y + r[1] };
					}),
					(e.prototype.getTickEnd = function(t, e) {
						var n = this,
							r = n.get('tickLine');
						return (e = e || r.length), n.getSidePoint(t, e);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			t.exports = { Line: n(160), Circle: n(156), Helix: n(158), PolyLine: n(161) };
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(24),
				s = n(0),
				u = n(2),
				c = u.MatrixUtil,
				l = c.vec2;
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return s.mix({}, e, {
							x: null,
							y: null,
							line: { lineWidth: 1, stroke: '#C0D0E0' },
							tickLine: { lineWidth: 1, stroke: '#C0D0E0', length: 5 },
							isVertical: !1,
							start: null,
							end: null,
						});
					}),
					(e.prototype._getAvgLabelLength = function(t) {
						var e = t.get('children');
						return e[1].attr('x') - e[0].attr('x');
					}),
					(e.prototype.getSideVector = function(t) {
						var e = this,
							n = e.get('factor'),
							r = e.get('isVertical'),
							i = e.get('start'),
							o = e.get('end'),
							a = e.getAxisVector(),
							s = l.normalize([], a),
							u = !1;
						((r && o.y > i.y) || (!r && i.x > o.x)) && (u = !0);
						var c = l.vertical([], s, u);
						return l.scale([], c, t * n);
					}),
					(e.prototype.getAxisVector = function() {
						var t = this.get('start'),
							e = this.get('end');
						return [e.x - t.x, e.y - t.y];
					}),
					(e.prototype.getLinePath = function() {
						var t = this,
							e = t.get('start'),
							n = t.get('end'),
							r = [];
						return r.push(['M', e.x, e.y]), r.push(['L', n.x, n.y]), r;
					}),
					(e.prototype.getTickEnd = function(t, e) {
						var n = this,
							r = n.getSideVector(e);
						return { x: t.x + r[0], y: t.y + r[1] };
					}),
					(e.prototype.getTickPoint = function(t) {
						var e = this,
							n = e.get('start'),
							r = e.get('end');
						return { x: n.x + (r.x - n.x) * t, y: n.y + (r.y - n.y) * t };
					}),
					(e.prototype.renderTitle = function() {
						var t = this,
							e = t.get('title'),
							n = t.getTickPoint(0.5),
							r = e.offset;
						if (s.isNil(r)) {
							r = 20;
							var i = t.get('labelsGroup');
							if (i) {
								r += t.getMaxLabelWidth(i) + (t.get('label').offset || t.get('_labelOffset'));
							}
						}
						var o = e.textStyle,
							a = s.mix({}, o);
						if (e.text) {
							var u = t.getAxisVector();
							if (e.autoRotate && s.isNil(o.rotate)) {
								var c = 0;
								if (!s.snapEqual(u[1], 0)) {
									c = l.angleTo([u[0], u[1]], [1, 0], !0);
								}
								a.rotate = c * (180 / Math.PI);
							} else s.isNil(o.rotate) || (a.rotate = (o.rotate / 180) * Math.PI);
							var f = t.getSideVector(r),
								h = void 0,
								p = e.position;
							(h =
								'start' === p
									? { x: this.get('start').x + f[0], y: this.get('start').y + f[1] }
									: 'end' === p
										? { x: this.get('end').x + f[0], y: this.get('end').y + f[1] }
										: { x: n.x + f[0], y: n.y + f[1] }),
								(a.x = h.x),
								(a.y = h.y),
								(a.text = e.text);
							var d = t.addShape('Text', { zIndex: 2, attrs: a });
							(d.name = 'axis-title'),
								t.get('appendInfo') && d.setSilent('appendInfo', t.get('appendInfo'));
						}
					}),
					(e.prototype.autoRotateLabels = function() {
						var t = this,
							e = t.get('labelsGroup'),
							n = t.get('title');
						if (e) {
							var r = t.get('label').offset,
								i = n ? n.offset : 48;
							if (0 > i) return;
							var o = t.getAxisVector(),
								a = void 0,
								u = void 0;
							if (s.snapEqual(o[0], 0) && n && n.text)
								(u = t.getMaxLabelWidth(e)) > i - r - 12 && (a = -1 * Math.acos((i - r - 12) / u));
							else if (s.snapEqual(o[1], 0) && e.getCount() > 1) {
								var c = Math.abs(t._getAvgLabelLength(e));
								(u = t.getMaxLabelWidth(e)), u > c && (a = Math.asin((1.25 * (i - r - 12)) / u));
							}
							if (a) {
								var l = t.get('factor');
								s.each(e.get('children'), function(t) {
									t.rotateAtStart(a),
										s.snapEqual(o[1], 0) &&
											(l > 0 ? t.attr('textAlign', 'left') : t.attr('textAlign', 'right'));
								});
							}
						}
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(24),
				u = n(2),
				c = u.MatrixUtil,
				l = u.PathUtil,
				f = c.vec2;
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, { type: 'polyline' });
					}),
					(e.prototype.getLinePath = function() {
						var t = this,
							e = t.get('tickPoints'),
							n = t.get('start'),
							r = t.get('end'),
							i = [];
						i.push(n.x),
							i.push(n.y),
							a.each(e, function(t) {
								i.push(t.x), i.push(t.y);
							}),
							i.push(r.x),
							i.push(r.y);
						var o = l.catmullRomToBezier(i);
						return o.unshift(['M', n.x, n.y]), o;
					}),
					(e.prototype.getTickPoint = function(t, e) {
						return this.get('tickPoints')[e];
					}),
					(e.prototype.getTickEnd = function(t, e, n) {
						var r = this,
							i = r.get('tickLine'),
							o = e || i.length,
							a = r.getSideVector(o, t, n);
						return { x: t.x + a[0], y: t.y + a[1] };
					}),
					(e.prototype.getSideVector = function(t, e, n) {
						var r = this,
							i = void 0;
						if (0 === n) i = r.get('start');
						else {
							i = r.get('tickPoints')[n - 1];
						}
						var o = [e.x - i.x, e.y - i.y],
							a = f.normalize([], o),
							s = f.vertical([], a, !1);
						return f.scale([], s, t);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(12);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'arc',
							start: null,
							end: null,
							style: { stroke: '#999', lineWidth: 1 },
						});
					}),
					(e.prototype.render = function(t, e) {
						var n = this,
							r = n.parsePoint(t, n.start),
							i = n.parsePoint(t, n.end),
							o = t.getCenter(),
							s = Math.sqrt((r.x - o.x) * (r.x - o.x) + (r.y - o.y) * (r.y - o.y)),
							u = Math.atan2(r.y - o.y, r.x - o.x),
							c = Math.atan2(i.y - o.y, i.x - o.x),
							l = e.addShape('arc', {
								zIndex: n.zIndex,
								attrs: a.mix({ x: o.x, y: o.y, r: s, startAngle: u, endAngle: c }, n.style),
							});
						(l.name = 'guide-arc'),
							n.appendInfo && l.setSilent('appendInfo', n.appendInfo),
							(n.el = l);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(2),
				u = s.DomUtil,
				c = n(12);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'html',
							zIndex: 7,
							position: null,
							alignX: 'middle',
							alignY: 'middle',
							offsetX: null,
							offsetY: null,
							html: null,
						});
					}),
					(e.prototype.render = function(t, e) {
						var n = this,
							r = n.parsePoint(t, n.position),
							i = e.get('canvas').get('el').parentNode,
							o = u.createDom('<div class="g-guide"></div>');
						i.appendChild(o);
						var s = n.html;
						a.isFunction(s) && (s = s(n.xScales, n.yScales));
						var c = u.createDom(s);
						o.appendChild(c), n._setDomPosition(o, c, r), (n.el = o);
					}),
					(e.prototype._setDomPosition = function(t, e, n) {
						var r = this,
							i = r.alignX,
							o = r.alignY,
							s = u.getOuterWidth(e),
							c = u.getOuterHeight(e),
							l = { x: n.x, y: n.y };
						'middle' === i && 'top' === o
							? (l.x -= a.round(s / 2))
							: 'middle' === i && 'bottom' === o
								? ((l.x -= a.round(s / 2)), (l.y -= a.round(c)))
								: 'left' === i && 'bottom' === o
									? (l.y -= a.round(c))
									: 'left' === i && 'middle' === o
										? (l.y -= a.round(c / 2))
										: 'left' === i && 'top' === o
											? ((l.x = n.x), (l.y = n.y))
											: 'right' === i && 'bottom' === o
												? ((l.x -= a.round(s)), (l.y -= a.round(c)))
												: 'right' === i && 'middle' === o
													? ((l.x -= a.round(s)), (l.y -= a.round(c / 2)))
													: 'right' === i && 'top' === o
														? (l.x -= a.round(s))
														: ((l.x -= a.round(s / 2)), (l.y -= a.round(c / 2))),
							r.offsetX && (l.x += r.offsetX),
							r.offsetY && (l.y += r.offsetY),
							u.modifyCSS(t, {
								position: 'absolute',
								top: Math.round(l.y) + 'px',
								left: Math.round(l.x) + 'px',
								visibility: 'visible',
								zIndex: r.zIndex,
							});
					}),
					(e.prototype.remove = function() {
						var t = this,
							e = t.el;
						e && e.parentNode.removeChild(e);
					}),
					e
				);
			})(c);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(12);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'image',
							zIndex: 1,
							start: null,
							end: null,
							src: null,
							offsetX: null,
							offsetY: null,
						});
					}),
					(e.prototype.render = function(t, e) {
						var n = this,
							r = n.parsePoint(t, n.start),
							i = { x: r.x, y: r.y };
						if (((i.img = n.src), n.end)) {
							var o = n.parsePoint(t, n.end);
							(i.width = o.x - r.x), (i.height = o.y - r.y);
						} else n.width && (i.width = n.width), n.height && (i.height = n.height);
						n.offsetX && (i.x += n.offsetX), n.offsetY && (i.y += n.offsetY);
						var a = e.addShape('Image', { zIndex: 1, attrs: i });
						(a.name = 'guide-image'),
							n.appendInfo && a.setSilent('appendInfo', n.appendInfo),
							(n.el = a);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			t.exports = {
				Line: n(166),
				Text: n(169),
				Image: n(164),
				Region: n(168),
				RegionFilter: n(167),
				Html: n(163),
				Arc: n(162),
			};
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(12),
				u = n(2).MatrixUtil.vec2;
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'line',
							start: null,
							end: null,
							lineStyle: { stroke: '#000', lineWidth: 1 },
							text: {
								position: 'end',
								autoRotate: !0,
								style: { fill: '#999', fontSize: 12, fontWeight: 500, fontFamily: 'sans-serif' },
								content: null,
							},
						});
					}),
					(e.prototype.render = function(t, e) {
						var n = this,
							r = n.parsePoint(t, n.start),
							i = n.parsePoint(t, n.end),
							o = e.addGroup();
						n._drawLines(r, i, o),
							this.text && this.text.content && n._drawText(r, i, o),
							(n.el = o);
					}),
					(e.prototype._drawLines = function(t, e, n) {
						var r = [['M', t.x, t.y], ['L', e.x, e.y]],
							i = n.addShape('Path', { attrs: a.mix({ path: r }, this.lineStyle) });
						(i.name = 'guide-line'), this.appendInfo && i.setSilent('appendInfo', this.appendInfo);
					}),
					(e.prototype._drawText = function(t, e, n) {
						var r = this.text,
							i = r.position,
							o = r.style,
							s = void 0;
						((s =
							'start' === i
								? 0
								: 'center' === i
									? 0.5
									: a.isString(i) && -1 !== i.indexOf('%')
										? parseInt(i, 10) / 100
										: a.isNumber(i)
											? i
											: 1) > 1 ||
							0 > s) &&
							(s = 1);
						var c = { x: t.x + (e.x - t.x) * s, y: t.y + (e.y - t.y) * s };
						if (
							(r.offsetX && (c.x += r.offsetX),
							r.offsetY && (c.y += r.offsetY),
							(c.text = r.content),
							(c = a.mix({}, c, o)),
							r.autoRotate && a.isNil(o.rotate))
						) {
							c.rotate = u.angleTo([e.x - t.x, e.y - t.y], [1, 0], 1);
						} else a.isNil(o.rotate) || (c.rotate = (o.rotate * Math.PI) / 180);
						var l = n.addShape('Text', { attrs: c });
						(l.name = 'guide-line-text'),
							this.appendInfo && l.setSilent('appendInfo', this.appendInfo);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(12);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'regionFilter',
							zIndex: 1,
							top: !0,
							start: null,
							end: null,
							color: null,
							style: { opacity: 1 },
						});
					}),
					(e.prototype.render = function(t, e) {
						var n = this,
							r = n.view,
							i = e.addGroup();
						r.once('afterpaint', function() {
							n._drawShapes(r, i);
							var o = n._drawClip(t, e);
							i.attr({ clip: o });
						}),
							n.appendInfo && i.setSilent('appendInfo', n.appendInfo),
							(n.el = i);
					}),
					(e.prototype._drawShapes = function(t, e) {
						var n = this,
							r = [];
						return (
							t.getAllGeoms().map(function(t) {
								return (
									t.getShapes().map(function(t) {
										var i = t.type,
											o = a.cloneDeep(t.get('attrs'));
										n._adjustDisplay(o);
										var s = e.addShape(i, { attrs: o });
										return r.push(s), t;
									}),
									t
								);
							}),
							r
						);
					}),
					(e.prototype._drawClip = function(t, e) {
						var n = this,
							r = n.parsePoint(t, n.start),
							i = n.parsePoint(t, n.end);
						return e.addShape('rect', {
							attrs: { x: r.x, y: r.y, width: i.x - r.x, height: i.y - r.y, opacity: 1 },
						});
					}),
					(e.prototype._adjustDisplay = function(t) {
						var e = this,
							n = e.color;
						t.fill && (t.fill = n), (t.stroke = n);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(12);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'region',
							zIndex: 1,
							start: null,
							end: null,
							style: { lineWidth: 0, fill: '#CCD7EB', opacity: 0.4 },
						});
					}),
					(e.prototype.render = function(t, e) {
						var n = this,
							r = n.style,
							i = n._getPath(t),
							o = e.addShape('path', { zIndex: n.zIndex, attrs: a.mix({ path: i }, r) });
						(o.name = 'guide-region'),
							n.appendInfo && o.setSilent('appendInfo', n.appendInfo),
							(n.el = o);
					}),
					(e.prototype._getPath = function(t) {
						var e = this,
							n = e.parsePoint(t, e.start),
							r = e.parsePoint(t, e.end),
							i = [];
						return (
							i.push(['M', n.x, n.y]),
							i.push(['L', r.x, n.y]),
							i.push(['L', r.x, r.y]),
							i.push(['L', n.x, r.y]),
							i.push(['z']),
							i
						);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(12);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'text',
							position: null,
							content: null,
							style: { fill: '#999', fontSize: 12, fontWeight: 500, textAlign: 'center' },
							offsetX: null,
							offsetY: null,
							top: !0,
						});
					}),
					(e.prototype.render = function(t, e) {
						var n = this,
							r = n.position,
							i = n.parsePoint(t, r),
							o = a.mix({}, this.style);
						n.offsetX && (i.x += n.offsetX),
							n.offsetY && (i.y += n.offsetY),
							o.rotate && (o.rotate = (o.rotate * Math.PI) / 180);
						var s = e.addShape('Text', {
							zIndex: n.zIndex,
							attrs: a.mix({ text: n.content }, o, i),
						});
						(s.name = 'guide-text'),
							n.appendInfo && s.setSilent('appendInfo', n.appendInfo),
							(n.el = s);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			var r = n(0),
				i = n(77);
			t.exports = {
				renderLabels: function() {
					var t = this.get('label');
					if (!r.isNil(t)) {
						r.isNil(t.items) && (t.items = []);
						this.set('labelsGroup', this.addGroup(i, t));
					}
				},
				resetLabels: function(t) {
					var e = this,
						n = e.get('label');
					if (n) {
						var i = e.get('labelsGroup'),
							o = i.getLabels(),
							a = o.length;
						(t = t || n.items),
							r.each(t, function(t, n) {
								if (a > n) {
									i.changeLabel(o[n], t);
								} else {
									var r = e.addLabel(t.text, t);
									r && ((r._id = t._id), r.set('coord', t.coord));
								}
							});
						for (var s = a - 1; s >= t.length; s--) o[s].remove();
					}
				},
				addLabel: function(t, e) {
					var n = this,
						r = n.get('labelsGroup'),
						i = {},
						o = void 0;
					return (
						r &&
							((i.text = t),
							(i.x = e.x),
							(i.y = e.y),
							(i.point = e),
							(i.textAlign = e.textAlign),
							e.rotate && (i.rotate = e.rotate),
							(o = r.addLabel(i))),
						o
					);
				},
				removeLabels: function() {
					var t = this.get('labelsGroup');
					t && t.remove(), this.set('labelsGroup', null);
				},
			};
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(80),
				u = n(43);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'color-legend',
							layout: 'vertical',
							labelOffset: 15,
							lineStyle: { lineWidth: 1, stroke: '#fff' },
						});
					}),
					(e.prototype._renderSliderShape = function() {
						var t = this.get('slider'),
							e = t.get('backgroundElement'),
							n = this.get('width'),
							r = this.get('height'),
							i = this.get('layout'),
							o = this.get('items'),
							s = '',
							c = void 0;
						return (
							'vertical' === i
								? ((s += 'l (90) '),
								  a.each(o, function(t) {
										(c = u.toRGB(t.attrValue)), (s += 1 - t.scaleValue + ':' + c + ' ');
								  }))
								: ((s += 'l (0) '),
								  a.each(o, function(t) {
										(c = u.toRGB(t.attrValue)), (s += t.scaleValue + ':' + c + ' ');
								  })),
							this._addBackground(e, 'Rect', {
								x: 0,
								y: 0,
								width: n,
								height: r,
								fill: s,
								strokeOpacity: 0,
							})
						);
					}),
					(e.prototype._renderBackground = function() {
						var t = this,
							e = this.get('titleShape'),
							n = this.get('titleGap');
						n = e ? e.getBBox().height + n : n;
						var r = this.get('width'),
							i = this.get('height'),
							o = this.get('layout'),
							s = this.get('items'),
							c = '',
							l = void 0,
							f = [],
							h = this.addGroup();
						'vertical' === o
							? ((c += 'l (90) '),
							  a.each(s, function(e, n) {
									0 !== n &&
										n !== s.length - 1 &&
										(f.push(['M', 0, i - e.scaleValue * i]),
										f.push(['L', r, i - e.scaleValue * i])),
										(l = u.toRGB(e.attrValue)),
										(c += 1 - e.scaleValue + ':' + l + ' '),
										h.addShape('text', {
											attrs: a.mix(
												{},
												{
													x: r + t.get('labelOffset') / 2,
													y: i - e.scaleValue * i,
													text: t._formatItemValue(e.value) + '',
												},
												t.get('textStyle'),
												{ textAlign: 'start' }
											),
										});
							  }))
							: ((c += 'l (0) '),
							  a.each(s, function(e, n) {
									0 !== n &&
										n !== s.length - 1 &&
										(f.push(['M', e.scaleValue * r, 0]), f.push(['L', e.scaleValue * r, i])),
										(l = u.toRGB(e.attrValue)),
										(c += e.scaleValue + ':' + l + ' '),
										h.addShape('text', {
											attrs: a.mix(
												{},
												{
													x: e.scaleValue * r,
													y: i + t.get('labelOffset'),
													text: t._formatItemValue(e.value) + '',
												},
												t.get('textStyle')
											),
										});
							  })),
							h.addShape('rect', {
								attrs: { x: 0, y: 0, width: r, height: i, fill: c, strokeOpacity: 0 },
							}),
							h.addShape('path', { attrs: a.mix({ path: f }, this.get('lineStyle')) }),
							h.move(0, n);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			t.exports = { Category: n(79), Tail: n(175), Color: n(171), Size: n(173) };
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(1),
				u = n(80);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							type: 'size-legend',
							width: 100,
							height: 200,
							_circleStyle: { stroke: '#4E7CCC', fill: '#fff', fillOpacity: 0 },
							textStyle: {
								fill: '#333',
								textAlign: 'start',
								textBaseline: 'middle',
								fontFamily: s.fontFamily,
							},
						});
					}),
					(e.prototype._renderSliderShape = function() {
						var t = this.get('slider'),
							e = t.get('backgroundElement'),
							n = this.get('width'),
							r = this.get('height'),
							i = this.get('inRange'),
							o = this.get('layout');
						return this._addBackground(
							e,
							'Polygon',
							a.mix(
								{ points: 'vertical' === o ? [[0, 0], [n, 0], [n, r]] : [[0, r], [n, 0], [n, r]] },
								i
							)
						);
					}),
					(e.prototype._addCircle = function(t, e, n, r, i) {
						var o = this.addGroup(),
							s = this.get('_circleStyle'),
							u = this.get('textStyle'),
							c = this.get('titleShape'),
							l = this.get('titleGap');
						c && (l += c.getBBox().height),
							o.addShape('circle', { attrs: a.mix({ x: t, y: e + l, r: 0 === n ? 1 : n }, s) }),
							o.addShape('text', {
								attrs: a.mix({ x: i + 5, y: e + l, text: 0 === r ? '0' : r }, u),
							});
					}),
					(e.prototype._renderBackground = function() {
						var t = this,
							e = 1 * this.get('firstItem').attrValue,
							n = 1 * this.get('lastItem').attrValue,
							r = (e + n) / 2;
						t._addCircle(n, n, n, r, 2 * n),
							t._addCircle(n, 2 * n + 8 + r, r, (e + r) / 2, 2 * n),
							t._addCircle(n, 2 * (n + 8 + r) + e, e, e, 2 * n);
					}),
					e
				);
			})(u);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(2),
				u = s.Group,
				c = s.DomUtil;
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						return {
							range: null,
							middleAttr: null,
							backgroundElement: null,
							minHandleElement: null,
							maxHandleElement: null,
							middleHandleElement: null,
							currentTarget: null,
							layout: 'vertical',
							width: null,
							height: null,
							pageX: null,
							pageY: null,
						};
					}),
					(e.prototype._beforeRenderUI = function() {
						var t = this.get('layout'),
							e = this.get('backgroundElement'),
							n = this.get('minHandleElement'),
							r = this.get('maxHandleElement'),
							i = this.addShape('rect', { attrs: this.get('middleAttr') }),
							o = 'vertical' === t ? 'ns-resize' : 'ew-resize';
						this.add([e, n, r]),
							this.set('middleHandleElement', i),
							e.set('zIndex', 0),
							i.set('zIndex', 1),
							n.set('zIndex', 2),
							r.set('zIndex', 2),
							i.attr('cursor', o),
							n.attr('cursor', o),
							r.attr('cursor', o),
							this.sort();
					}),
					(e.prototype._renderUI = function() {
						'horizontal' === this.get('layout') ? this._renderHorizontal() : this._renderVertical();
					}),
					(e.prototype._transform = function(t) {
						var e = this.get('range'),
							n = e[0] / 100,
							r = e[1] / 100,
							i = this.get('width'),
							o = this.get('height'),
							a = this.get('minHandleElement'),
							s = this.get('maxHandleElement'),
							u = this.get('middleHandleElement');
						a.initTransform(),
							s.initTransform(),
							'horizontal' === t
								? (u.attr({ x: i * n, y: 0, width: (r - n) * i, height: o }),
								  a.translate(n * i, o),
								  s.translate(r * i, o))
								: (u.attr({ x: 0, y: o * (1 - r), width: i, height: (r - n) * o }),
								  a.translate(i / 2, (1 - n) * o),
								  s.translate(i / 2, (1 - r) * o));
					}),
					(e.prototype._renderHorizontal = function() {
						this._transform('horizontal');
					}),
					(e.prototype._renderVertical = function() {
						this._transform('vertical');
					}),
					(e.prototype._bindUI = function() {
						this.on('mousedown', a.wrapBehavior(this, '_onMouseDown'));
					}),
					(e.prototype._isElement = function(t, e) {
						var n = this.get(e);
						if (t === n) return !0;
						if (n.isGroup) {
							return n.get('children').indexOf(t) > -1;
						}
						return !1;
					}),
					(e.prototype._getRange = function(t, e) {
						var n = t + e;
						return (n = n > 100 ? 100 : n), (n = 0 > n ? 0 : n);
					}),
					(e.prototype._updateStatus = function(t, e) {
						var n = this.get('x' === t ? 'width' : 'height');
						t = a.upperFirst(t);
						var r = this.get('range'),
							i = this.get('page' + t),
							o = this.get('currentTarget'),
							s = this.get('rangeStash'),
							u = this.get('layout'),
							c = 'vertical' === u ? -1 : 1,
							l = e['page' + t],
							f = l - i,
							h = (f / n) * 100 * c,
							p = void 0;
						r[1] > r[0]
							? (this._isElement(o, 'minHandleElement') && (r[0] = this._getRange(h, r[0])),
							  this._isElement(o, 'maxHandleElement') && (r[1] = this._getRange(h, r[1])))
							: (this._isElement(o, 'minHandleElement') ||
									this._isElement(o, 'maxHandleElement')) &&
							  ((r[0] = this._getRange(h, r[0])), (r[1] = this._getRange(h, r[0]))),
							this._isElement(o, 'middleHandleElement') &&
								((p = s[1] - s[0]),
								(r[0] = this._getRange(h, r[0])),
								(r[1] = r[0] + p) > 100 && ((r[1] = 100), (r[0] = r[1] - p))),
							this.emit('sliderchange', { range: r }),
							this.set('page' + t, l),
							this._renderUI(),
							this.get('canvas').draw();
					}),
					(e.prototype._onMouseDown = function(t) {
						var e = t.currentTarget,
							n = t.event,
							r = this.get('range');
						n.stopPropagation(),
							n.preventDefault(),
							this.set('pageX', n.pageX),
							this.set('pageY', n.pageY),
							this.set('currentTarget', e),
							this.set('rangeStash', [r[0], r[1]]),
							this._bindCanvasEvents();
					}),
					(e.prototype._bindCanvasEvents = function() {
						var t = this.get('canvas').get('containerDOM');
						(this.onMouseMoveListener = c.addEventListener(
							t,
							'mousemove',
							a.wrapBehavior(this, '_onCanvasMouseMove')
						)),
							(this.onMouseUpListener = c.addEventListener(
								t,
								'mouseup',
								a.wrapBehavior(this, '_onCanvasMouseUp')
							));
					}),
					(e.prototype._onCanvasMouseMove = function(t) {
						'horizontal' === this.get('layout')
							? this._updateStatus('x', t)
							: this._updateStatus('y', t);
					}),
					(e.prototype._onCanvasMouseUp = function() {
						this._removeDocumentEvents();
					}),
					(e.prototype._removeDocumentEvents = function() {
						this.onMouseMoveListener.remove(), this.onMouseUpListener.remove();
					}),
					e
				);
			})(u);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(79);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, { type: 'tail-legend', layout: 'vertical' });
					}),
					(e.prototype._addItemMarker = function(t, e) {
						var n = this.get('unCheckColor'),
							r = a.mix({}, t.marker, { x: t.marker.radius, y: 0 });
						t.checked || (r.fill && (r.fill = n), r.stroke && (r.stroke = n));
						var i = e.addShape('marker', { type: 'marker', attrs: r });
						return i.attr('cursor', 'pointer'), (i.name = 'legend-marker'), i;
					}),
					(e.prototype._addItemText = function(t, e, n) {
						var r = this,
							i = r.get('unCheckColor'),
							o = r.get('textStyle'),
							s = a.mix({}, o, { x: n, y: 0, text: r._formatItemValue(t.value) });
						t.checked || a.mix(s, { fill: i });
						var u = e.addShape('text', { attrs: s });
						u.attr('cursor', 'pointer'),
							(u.name = 'legend-text'),
							r.get('appendInfo') && u.setSilent('appendInfo', this.get('appendInfo'));
					}),
					(e.prototype._addItemWrapper = function(t, e, n, r) {
						var i = this,
							o = e.getBBox(),
							a = i.get('itemWidth'),
							s = e.addShape('rect', {
								attrs: {
									x: n,
									y: r - o.height / 2,
									fill: '#fff',
									fillOpacity: 0,
									width: a || o.width,
									height: o.height,
								},
							});
						s.attr('cursor', 'pointer'),
							s.setSilent('origin', t),
							(s.name = 'legend-item'),
							this.get('appendInfo') && s.setSilent('appendInfo', this.get('appendInfo'));
					}),
					(e.prototype._addItem = function(t) {
						var e = this,
							n = e.get('itemsGroup'),
							r = n.addGroup({
								x: 0,
								y: 0,
								value: t.value,
								scaleValue: t.scaleValue,
								checked: t.checked,
							});
						r.translate(0, 0), r.setSilent('viewId', n.get('viewId'));
						var i = this.get('_wordSpaceing'),
							o = 0;
						if (t.marker) {
							o += e._addItemMarker(t, r).getBBox().width + i;
						}
						return (
							e._addItemText(t, r, o), e._addItemWrapper(t, r, 0, 0), (r.name = 'legendGroup'), r
						);
					}),
					(e.prototype._adjust = function() {
						var t = this;
						if (t.get('geom')) {
							var e = t.get('geom').get('dataArray'),
								n = this.get('itemsGroup').get('children'),
								r = 0;
							a.each(n, function(t) {
								var n = e[r],
									i = n[n.length - 1].y;
								a.isArray(i) && (i = i[1]);
								var o = t.getBBox().height;
								t.translate(t.get('x'), i - o), r++;
							});
						}
					}),
					(e.prototype._renderUI = function() {
						var t = this;
						t.get('useHtml')
							? t._renderHTML()
							: (t._renderItems(), t.get('autoWrap') && t._adjustItems(), t._renderBack()),
							t.get('chart').once('afterpaint', function() {
								t._adjust();
							});
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(2),
				u = s.Group;
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						return {
							type: 'plotBack',
							padding: null,
							background: null,
							plotRange: null,
							plotBackground: null,
						};
					}),
					(e.prototype._beforeRenderUI = function() {
						this._calculateRange();
					}),
					(e.prototype._renderUI = function() {
						this._renderBackground(), this._renderPlotBackground();
					}),
					(e.prototype._renderBackground = function() {
						var t = this,
							e = t.get('background');
						if (e) {
							var n = this.get('canvas'),
								r = t.get('width') || n.get('width'),
								i = t.get('height') || n.get('height'),
								o = { x: 0, y: 0, width: r, height: i },
								s = t.get('backgroundShape');
							s
								? s.attr(o)
								: ((s = this.addShape('rect', { attrs: a.mix(o, e) })),
								  this.set('backgroundShape', s));
						}
					}),
					(e.prototype._renderPlotBackground = function() {
						var t = this,
							e = t.get('plotBackground');
						if (e) {
							var n = t.get('plotRange'),
								r = n.br.x - n.bl.x,
								i = n.br.y - n.tr.y,
								o = n.tl,
								s = { x: o.x, y: o.y, width: r, height: i },
								u = t.get('plotBackShape');
							u
								? u.attr(s)
								: (e.image
										? ((s.img = e.image), (u = t.addShape('image', { attrs: s })))
										: (a.mix(s, e), (u = t.addShape('rect', { attrs: s }))),
								  t.set('plotBackShape', u));
						}
					}),
					(e.prototype._convert = function(t, e) {
						if (a.isString(t))
							if ('auto' === t) t = 0;
							else if (-1 !== t.indexOf('%')) {
								var n = this.get('canvas'),
									r = this.get('width') || n.get('width'),
									i = this.get('height') || n.get('height');
								(t = parseInt(t, 10) / 100), (t = e ? t * r : t * i);
							}
						return t;
					}),
					(e.prototype._calculateRange = function() {
						var t = this,
							e = t.get('plotRange');
						a.isNil(e) && (e = {});
						var n = t.get('padding'),
							r = this.get('canvas'),
							i = t.get('width') || r.get('width'),
							o = t.get('height') || r.get('height'),
							s = a.toAllPadding(n),
							u = t._convert(s[0], !1),
							c = t._convert(s[1], !0),
							l = t._convert(s[2], !1),
							f = t._convert(s[3], !0),
							h = Math.min(f, i - c),
							p = Math.max(f, i - c),
							d = Math.min(o - l, u),
							g = Math.max(o - l, u);
						(e.tl = { x: h, y: d }),
							(e.tr = { x: p, y: d }),
							(e.bl = { x: h, y: g }),
							(e.br = { x: p, y: g }),
							(e.cc = { x: (p + h) / 2, y: (g + d) / 2 }),
							this.set('plotRange', e);
					}),
					(e.prototype.repaint = function() {
						return (
							this._calculateRange(), this._renderBackground(), this._renderPlotBackground(), this
						);
					}),
					e
				);
			})(u);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function a(t, e) {
				return t.getElementsByClassName(e)[0];
			}
			function s(t, e, n, r, i) {
				var o = n.clientWidth,
					a = n.clientHeight;
				return (
					t + o + 20 > r ? ((t -= o + 20), (t = 0 > t ? 0 : t)) : (t += 20),
					e + a + 20 > i ? ((e -= a + 20), (e = 0 > t ? 0 : e)) : (e += 20),
					[t, e]
				);
			}
			function u(t, e, n, r, i) {
				var o = r.clientWidth,
					a = r.clientHeight,
					s = 0,
					u = 0,
					c = 20;
				if (i) {
					var l = i.getBBox();
					(s = l.width), (u = l.height), (t = l.x), (e = l.y), (c = 5);
				}
				switch (n) {
					case 'inside':
						(t = t + s / 2 - o / 2), (e = e + u / 2 - a / 2);
						break;
					case 'top':
						(t = t + s / 2 - o / 2), (e = e - a - c);
						break;
					case 'left':
						(t = t - o - c), (e = e + u / 2 - a / 2);
						break;
					case 'right':
						(t = t + s + c), (e = e + u / 2 - a / 2);
						break;
					case 'bottom':
					default:
						(t = t + s / 2 - o / 2), (e = e + u + c);
				}
				return [t, e];
			}
			function c(t, e, n, r) {
				var i = n.clientWidth,
					o = n.clientHeight;
				return (
					t + i > r.tr.x && (t -= i + 40),
					r.tl.x > t && (t = r.tl.x),
					e + o > r.bl.y && (e -= o + 40),
					r.tl.y > e && (e = r.tl.y),
					[t, e]
				);
			}
			var l = n(0),
				f = n(44),
				h = n(1),
				p = n(2),
				d = p.DomUtil;
			t.exports = (function(t) {
				function e(n) {
					r(this, e);
					var o = i(this, t.call(this, n));
					return o._init(), o.get('items') && o._renderTooltip(), o._renderCrosshairs(), o;
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						return {
							x: 0,
							y: 0,
							items: null,
							showTitle: !0,
							crosshairs: null,
							plotRange: null,
							offset: 10,
							timeStamp: 0,
							containerTpl:
								'<div class="g2-tooltip"><div class="g2-tooltip-title"></div><ul class="g2-tooltip-list"></ul></div>',
							itemTpl:
								'<li data-index={index}><span style="background-color:{color};" class=g2-tooltip-marker></span>{name}: {value}</li>',
							inPlot: !0,
							follow: !0,
							enterable: !1,
						};
					}),
					(e.prototype._initTooltipWrapper = function() {
						var t = this,
							e = t.get('containerTpl'),
							n = t.get('canvas').get('el').parentNode,
							r = void 0;
						if (/^\#/.test(e)) {
							var i = e.replace('#', '');
							r = document.getElementById(i);
						} else
							(r = d.createDom(e)),
								d.modifyCSS(r, t.get('g2-tooltip')),
								n.appendChild(r),
								(n.style.position = 'relative');
						t.set('container', r);
					}),
					(e.prototype._init = function() {
						var t = this.get('crosshairs'),
							e = this.get('frontPlot'),
							n = this.get('backPlot'),
							r = void 0;
						t &&
							('rect' === t.type
								? (this.set('crosshairs', l.deepMix({}, h.tooltipCrosshairsRect, t)),
								  (r = n.addGroup({ zIndex: 0 })))
								: (this.set('crosshairs', l.deepMix({}, h.tooltipCrosshairsLine, t)),
								  (r = e.addGroup()))),
							this.set('crosshairsGroup', r),
							this._initTooltipWrapper();
					}),
					(e.prototype._clearDom = function() {
						var t = this.get('container'),
							e = a(t, 'g2-tooltip-title'),
							n = a(t, 'g2-tooltip-list');
						e && (e.innerHTML = ''), n && (n.innerHTML = '');
					}),
					(e.prototype._addItem = function(t, e) {
						var n = this.get('itemTpl'),
							r = l.substitute(n, l.mix({ index: e }, t)),
							i = d.createDom(r);
						d.modifyCSS(i, this.get('g2-tooltip-list-item'));
						var o = a(i, 'g2-tooltip-marker');
						return o && d.modifyCSS(o, this.get('g2-tooltip-marker')), i;
					}),
					(e.prototype._renderTooltip = function() {
						var t = this,
							e = t.get('showTitle'),
							n = t.get('titleContent'),
							r = t.get('container'),
							i = a(r, 'g2-tooltip-title'),
							o = a(r, 'g2-tooltip-list'),
							s = t.get('items');
						t._clearDom(),
							i && e && (d.modifyCSS(i, t.get('g2-tooltip-title')), (i.innerHTML = n)),
							o &&
								(d.modifyCSS(o, t.get('g2-tooltip-list')),
								l.each(s, function(e, n) {
									o.appendChild(t._addItem(e, n));
								}));
					}),
					(e.prototype._clearCrosshairsGroup = function() {
						var t = this.get('crosshairsGroup');
						this.set('crossLineShapeX', null),
							this.set('crossLineShapeY', null),
							this.set('crosshairsRectShape', null),
							t.clear();
					}),
					(e.prototype._renderCrosshairs = function() {
						var t = this.get('crosshairs'),
							e = this.get('canvas'),
							n = this.get('plotRange'),
							r = this.get('isTransposed');
						if (t)
							switch ((this._clearCrosshairsGroup(), t.type)) {
								case 'x':
									this._renderHorizontalLine(e, n);
									break;
								case 'y':
									this._renderVerticalLine(e, n);
									break;
								case 'cross':
									this._renderHorizontalLine(e, n), this._renderVerticalLine(e, n);
									break;
								case 'rect':
									this._renderBackground(e, n);
									break;
								default:
									r ? this._renderHorizontalLine(e, n) : this._renderVerticalLine(e, n);
							}
					}),
					(e.prototype._addCrossLineShape = function(t, e) {
						var n = this.get('crosshairsGroup'),
							r = n.addShape('line', { capture: !1, attrs: t });
						return r.hide(), this.set('crossLineShape' + e, r), r;
					}),
					(e.prototype._renderVerticalLine = function(t, e) {
						var n = this.get('crosshairs'),
							r = n.style;
						this._addCrossLineShape(
							l.mix({ x1: 0, y1: e ? e.bl.y : t.get('height'), x2: 0, y2: e ? e.tl.y : 0 }, r),
							'Y'
						);
					}),
					(e.prototype._renderHorizontalLine = function(t, e) {
						var n = this.get('crosshairs'),
							r = n.style;
						this._addCrossLineShape(
							l.mix({ x1: e ? e.bl.x : t.get('width'), y1: 0, x2: e ? e.br.x : 0, y2: 0 }, r),
							'X'
						);
					}),
					(e.prototype._renderBackground = function(t, e) {
						var n = this.get('crosshairs'),
							r = n.style,
							i = this.get('crosshairsGroup'),
							o = l.mix(
								{
									x: e ? e.tl.x : 0,
									y: e ? e.tl.y : t.get('height'),
									width: e ? e.br.x - e.bl.x : t.get('width'),
									height: e ? Math.abs(e.tl.y - e.bl.y) : t.get('height'),
								},
								r
							),
							a = i.addShape('rect', { attrs: o });
						return a.hide(), this.set('crosshairsRectShape', a), a;
					}),
					(e.prototype.isContentChange = function(t, e) {
						var n = this.get('titleContent'),
							r = this.get('items'),
							i = !(t === n && r.length === e.length);
						return (
							i ||
								l.each(e, function(t, e) {
									var n = r[e];
									for (var o in t)
										if (t.hasOwnProperty(o) && !l.isObject(t[o]) && t[o] !== n[o]) {
											i = !0;
											break;
										}
									if (i) return !1;
								}),
							i
						);
					}),
					(e.prototype.setContent = function(t, e) {
						var n = +new Date();
						return (
							this.set('items', e),
							this.set('titleContent', t),
							this.set('timeStamp', n),
							this._renderTooltip(),
							this
						);
					}),
					(e.prototype.setMarkers = function(t, e) {
						var n = this,
							r = n.get('markerGroup'),
							i = n.get('frontPlot');
						r ? r.clear() : ((r = i.addGroup({ zIndex: 1, capture: !1 })), n.set('markerGroup', r)),
							l.each(t, function(t) {
								r.addShape('marker', { color: t.color, attrs: l.mix({}, e, { x: t.x, y: t.y }) });
							}),
							this.set('markerItems', t);
					}),
					(e.prototype.clearMarkers = function() {
						var t = this.get('markerGroup');
						t && t.clear();
					}),
					(e.prototype.setPosition = function(t, e, n) {
						var r = this.get('container'),
							i = this.get('crossLineShapeX'),
							o = this.get('crossLineShapeY'),
							a = this.get('crosshairsRectShape'),
							f = t,
							h = e,
							p = this.get('canvas').get('el'),
							g = d.getWidth(p),
							y = d.getHeight(p),
							v = this.get('offset'),
							m = void 0;
						if (
							(this.get('position')
								? ((m = u(t, e, this.get('position'), r, n)), (t = m[0]), (e = m[1]))
								: this.get('position') || ((m = s(t, e, r, g, y)), (t = m[0]), (e = m[1])),
							this.get('inPlot'))
						) {
							(m = c(t, e, r, this.get('plotRange'))), (t = m[0]), (e = m[1]);
						}
						if (this.get('x') !== t || this.get('y') !== e) {
							var x = this.get('markerItems');
							if (
								(l.isEmpty(x) || ((f = x[0].x), (h = x[0].y)),
								o && o.move(f, 0),
								i && i.move(0, h),
								a)
							) {
								var b = this.get('isTransposed'),
									_ = this.get('items'),
									w = _[0],
									S = _[_.length - 1],
									M = b ? 'y' : 'x',
									P = b ? 'height' : 'width',
									C = w[M];
								if ((_.length > 1 && w[M] > S[M] && (C = S[M]), this.get('crosshairs').width))
									a.attr(M, C - this.get('crosshairs').width / 2),
										a.attr(P, this.get('crosshairs').width);
								else if (l.isArray(w.point[M]) && !w.size) {
									var O = w.point[M][1] - w.point[M][0];
									a.attr(M, w.point[M][0]), a.attr(P, O);
								} else
									(v = (3 * w.size) / 4),
										a.attr(M, C - v),
										1 === _.length
											? a.attr(P, (3 * w.size) / 2)
											: a.attr(P, Math.abs(S[M] - w[M]) + 2 * v);
							}
							var A = this.get('follow');
							(r.style.left = A ? t + 'px' : 0), (r.style.top = A ? e + 'px' : 0);
						}
					}),
					(e.prototype.show = function() {
						var e = this.get('crossLineShapeX'),
							n = this.get('crossLineShapeY'),
							r = this.get('crosshairsRectShape'),
							i = this.get('markerGroup'),
							o = this.get('container'),
							a = this.get('canvas');
						e && e.show(),
							n && n.show(),
							r && r.show(),
							i && i.show(),
							t.prototype.show.call(this),
							(o.style.visibility = 'visible'),
							a.draw();
					}),
					(e.prototype.hide = function() {
						var e = this,
							n = e.get('container'),
							r = e.get('crossLineShapeX'),
							i = e.get('crossLineShapeY'),
							o = this.get('crosshairsRectShape'),
							a = e.get('markerGroup'),
							s = e.get('canvas');
						(n.style.visibility = 'hidden'),
							r && r.hide(),
							i && i.hide(),
							o && o.hide(),
							a && a.hide(),
							t.prototype.hide.call(this),
							s.draw();
					}),
					(e.prototype.destroy = function() {
						var e = this,
							n = e.get('crossLineShapeX'),
							r = e.get('crossLineShapeY'),
							i = e.get('markerGroup'),
							o = e.get('crosshairsRectShape'),
							a = e.get('container'),
							s = e.get('containerTpl');
						a && !/^\#/.test(s) && a.parentNode.removeChild(a),
							n && n.remove(),
							r && r.remove(),
							i && i.remove(),
							o && o.remove(),
							t.prototype.destroy.call(this);
					}),
					e
				);
			})(f);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(25);
			t.exports = (function(t) {
				function e(n) {
					r(this, e);
					var o = i(this, t.call(this, n));
					return o._init(), o;
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							start: { x: 0, y: 0 },
							end: { x: 0, y: 0 },
							type: 'cartesian',
							isRect: !0,
						});
					}),
					(e.prototype._init = function() {
						var t = this.start,
							e = this.end,
							n = { start: t.x, end: e.x },
							r = { start: t.y, end: e.y };
						(this.x = n), (this.y = r);
					}),
					(e.prototype.convertPoint = function(t) {
						var e = void 0,
							n = void 0;
						return (
							this.isTransposed ? ((e = t.y), (n = t.x)) : ((e = t.x), (n = t.y)),
							{ x: this.convertDim(e, 'x'), y: this.convertDim(n, 'y') }
						);
					}),
					(e.prototype.invertPoint = function(t) {
						var e = this.invertDim(t.x, 'x'),
							n = this.invertDim(t.y, 'y');
						return this.isTransposed ? { x: n, y: e } : { x: e, y: n };
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(25),
				u = n(2).MatrixUtil,
				c = u.vec2;
			t.exports = (function(t) {
				function e(n) {
					r(this, e);
					var o = i(this, t.call(this, n));
					return o._init(), o;
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							startAngle: 1.25 * Math.PI,
							endAngle: 7.25 * Math.PI,
							innerRadius: 0,
							type: 'helix',
							isHelix: !0,
						});
					}),
					(e.prototype._init = function() {
						var t = this.width,
							e = this.height,
							n = this.radius,
							r = this.innerRadius,
							i = this.startAngle,
							o = this.endAngle,
							a = (o - i) / (2 * Math.PI) + 1,
							s = Math.min(t, e) / 2;
						!n || 0 > n || n > 1 || (s *= n);
						var u = Math.floor((s * (1 - r)) / a),
							c = u / (2 * Math.PI),
							l = { start: i, end: o },
							f = { start: r * s, end: r * s + 0.99 * u };
						(this.a = c), (this.d = u), (this.x = l), (this.y = f);
					}),
					(e.prototype.getCenter = function() {
						return this.center;
					}),
					(e.prototype.convertPoint = function(t) {
						var e = this.a,
							n = this.center,
							r = void 0,
							i = void 0;
						this.isTransposed ? ((r = t.y), (i = t.x)) : ((r = t.x), (i = t.y));
						var o = this.convertDim(r, 'x'),
							a = e * o,
							s = this.convertDim(i, 'y');
						return { x: n.x + Math.cos(o) * (a + s), y: n.y + Math.sin(o) * (a + s) };
					}),
					(e.prototype.invertPoint = function(t) {
						var e = this.center,
							n = this.a,
							r = this.d + this.y.start,
							i = c.subtract([], [t.x, t.y], [e.x, e.y]),
							o = c.angleTo(i, [1, 0], !0),
							s = o * n;
						c.length(i) < s && (s = c.length(i)),
							(o = 2 * Math.floor((c.length(i) - s) / r) * Math.PI + o);
						var u = n * o,
							l = c.length(i) - u;
						l = a.snapEqual(l, 0) ? 0 : l;
						var f = this.invertDim(o, 'x'),
							h = this.invertDim(l, 'y');
						(f = a.snapEqual(f, 0) ? 0 : f), (h = a.snapEqual(h, 0) ? 0 : h);
						var p = {};
						return (p.x = this.isTransposed ? h : f), (p.y = this.isTransposed ? f : h), p;
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			var r = n(25);
			(r.Cartesian = n(178)),
				(r.Rect = r.Cartesian),
				(r.Polar = n(181)),
				(r.Helix = n(179)),
				(t.exports = r);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(25),
				u = n(2).MatrixUtil,
				c = u.mat3,
				l = u.vec2,
				f = u.vec3;
			t.exports = (function(t) {
				function e(n) {
					r(this, e);
					var o = i(this, t.call(this, n));
					return o._init(), o;
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.mix({}, e, {
							startAngle: -Math.PI / 2,
							endAngle: (3 * Math.PI) / 2,
							innerRadius: 0,
							type: 'polar',
							isPolar: !0,
						});
					}),
					(e.prototype._init = function() {
						var t = this.radius,
							e = this.innerRadius,
							n = this.startAngle,
							r = this.endAngle,
							i = this.center,
							o = this.getOneBox(),
							a = o.maxX - o.minX,
							s = o.maxY - o.minY,
							u = Math.abs(o.minX) / a,
							c = Math.abs(o.minY) / s,
							l = this.width,
							f = this.height,
							h = void 0,
							p = void 0;
						f / s > l / a
							? ((h = l / a), (p = { x: i.x - (0.5 - u) * l, y: i.y - (0.5 - c) * h * s }))
							: ((h = f / s), (p = { x: i.x - (0.5 - u) * h * a, y: i.y - (0.5 - c) * f })),
							t ? (t > 0 && 1 >= t ? (t *= h) : (t > 0 && h >= t) || (t = h)) : (t = h);
						var d = { start: n, end: r },
							g = { start: e * t, end: t };
						(this.x = d),
							(this.y = g),
							(this.radius = t),
							(this.circleCentre = p),
							(this.center = p);
					}),
					(e.prototype.getCenter = function() {
						return this.circleCentre;
					}),
					(e.prototype.getOneBox = function() {
						var t = this.startAngle,
							e = this.endAngle;
						if (e - t >= 2 * Math.PI) return { minX: -1, maxX: 1, minY: -1, maxY: 1 };
						for (
							var n = [0, Math.cos(t), Math.cos(e)],
								r = [0, Math.sin(t), Math.sin(e)],
								i = (5 * -Math.PI) / 2;
							i < (3 * Math.PI) / 2;
							i += Math.PI / 2
						)
							t > i || i > e || (n.push(Math.cos(i)), r.push(Math.sin(i)));
						return {
							minX: Math.min.apply(Math, n),
							maxX: Math.max.apply(Math, n),
							minY: Math.min.apply(Math, r),
							maxY: Math.max.apply(Math, r),
						};
					}),
					(e.prototype.getRadius = function() {
						return this.radius;
					}),
					(e.prototype.convertPoint = function(t) {
						var e = this.getCenter(),
							n = this.isTransposed ? t.y : t.x,
							r = this.isTransposed ? t.x : t.y;
						return (
							(n = this.convertDim(n, 'x')),
							(r = this.convertDim(r, 'y')),
							{ x: e.x + Math.cos(n) * r, y: e.y + Math.sin(n) * r }
						);
					}),
					(e.prototype.invertPoint = function(t) {
						var e = this.getCenter(),
							n = [t.x - e.x, t.y - e.y],
							r = this.x,
							i = [1, 0, 0, 0, 1, 0, 0, 0, 1];
						c.rotate(i, i, r.start);
						var o = [1, 0, 0];
						f.transformMat3(o, o, i), (o = [o[0], o[1]]);
						var s = l.angleTo(o, n, r.start > r.end);
						a.snapEqual(s, 2 * Math.PI) && (s = 0);
						var u = l.length(n),
							h = s / (r.end - r.start);
						h = r.end - r.start > 0 ? h : -h;
						var p = this.invertDim(u, 'y'),
							d = {};
						return (d.x = this.isTransposed ? p : h), (d.y = this.isTransposed ? h : p), d;
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function a(t, e, n) {
				return { x: t.x + e * Math.cos(n), y: t.y + e * Math.sin(n) };
			}
			var s = n(26);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return (e.type = 'circle'), e;
					}),
					(e.prototype.getRegion = function(t, e) {
						var n = (2 * Math.PI) / t,
							r = (-1 * Math.PI) / 2 + n * e,
							i = 0.5 / (1 + 1 / Math.sin(n / 2)),
							o = { x: 0.5, y: 0.5 },
							s = a(o, 0.5 - i, r),
							u = (5 * Math.PI) / 4,
							c = (1 * Math.PI) / 4;
						return { start: a(s, i, u), end: a(s, i, c) };
					}),
					(e.prototype.generateFacets = function(t) {
						var e = this,
							n = e.fields,
							r = n[0];
						if (!r) throw 'Please specify for the field for facet!';
						var i = e.getFieldValues(r, t),
							o = i.length,
							a = [];
						return (
							i.forEach(function(n, s) {
								var u = [{ field: r, value: n, values: i }],
									c = e.getFilter(u),
									l = t.filter(c),
									f = {
										type: e.type,
										colValue: n,
										colField: r,
										colIndex: s,
										cols: o,
										rows: 1,
										rowIndex: 0,
										data: l,
										region: e.getRegion(o, s),
									};
								a.push(f);
							}),
							a
						);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			var r = n(0),
				i = n(74),
				o = {};
			(o.Rect = n(82)),
				(o.List = n(81)),
				(o.Circle = n(182)),
				(o.Tree = n(186)),
				(o.Mirror = n(185)),
				(o.Matrix = n(184)),
				(i.prototype.facet = function(t, e) {
					var n = o[r.upperFirst(t)];
					if (!n) throw Error('Not support such type of facets as: ' + t);
					var i = this.get('facets');
					i && i.destroy(), (e.chart = this), this.set('facets', new n(e));
				}),
				(t.exports = o);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(82);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return (e.type = 'matrix'), (e.showTitle = !1), e;
					}),
					(e.prototype.generateFacets = function(t) {
						for (var e = this, n = e.fields, r = n.length, i = r, o = [], a = 0; i > a; a++)
							for (var s = n[a], u = 0; r > u; u++) {
								var c = n[u],
									l = {
										type: e.type,
										colValue: s,
										rowValue: c,
										colField: s,
										rowField: c,
										colIndex: a,
										rowIndex: u,
										cols: i,
										rows: r,
										data: t,
										region: e.getRegion(r, i, a, u),
									};
								o.push(l);
							}
						return o;
					}),
					(e.prototype.setXAxis = function(t, e, n) {
						n.rowIndex !== n.rows - 1 && ((e[t].title = null), (e[t].label = null));
					}),
					(e.prototype.setYAxis = function(t, e, n) {
						0 !== n.colIndex && ((e[t].title = null), (e[t].label = null));
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(81);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return (e.type = 'mirror'), (this.transpose = !1), e;
					}),
					(e.prototype.init = function() {
						var e = this;
						e.transpose ? ((e.cols = 2), (e.rows = 1)) : ((e.cols = 1), (e.rows = 2)),
							t.prototype.init.call(this);
					}),
					(e.prototype.beforeProcessView = function(t, e) {
						this.transpose
							? e.colIndex % 2 == 0
								? t
										.coord()
										.transpose()
										.scale(-1, 1)
								: t.coord().transpose()
							: e.rowIndex % 2 != 0 && t.coord().scale(1, -1);
					}),
					(e.prototype.renderTitle = function(t, e) {
						this.transpose ? this.drawColTitle(t, e) : this.drawRowTitle(t, e);
					}),
					(e.prototype.setXAxis = function(t, e, n) {
						(1 !== n.colIndex && 1 !== n.rowIndex) || ((e[t].label = null), (e[t].title = null));
					}),
					(e.prototype.setYAxis = function() {}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(26),
				s = n(0),
				u = s.assign;
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return (
							(e.type = 'tree'), (e.line = { lineWidth: 1, stroke: '#ddd' }), (e.lineSmooth = !1), e
						);
					}),
					(e.prototype.generateFacets = function(t) {
						var e = this;
						if (!e.fields.length) throw 'Please specify for the fields for facet!';
						var n = [],
							r = e.getRootFacet(t);
						return n.push(r), (r.children = e.getChildFacets(t, 1, n)), e.setRegion(n), n;
					}),
					(e.prototype.getRootFacet = function(t) {
						var e = this;
						return {
							type: e.type,
							rows: e.getRows(),
							rowIndex: 0,
							colIndex: 0,
							colValue: e.rootTitle,
							data: t,
						};
					}),
					(e.prototype.getRows = function() {
						return this.fields.length + 1;
					}),
					(e.prototype.getChildFacets = function(t, e, n) {
						var r = this,
							i = r.fields;
						if (i.length >= e) {
							var o = [],
								a = i[e - 1],
								s = r.getFieldValues(a, t);
							return (
								s.forEach(function(i, u) {
									var c = [{ field: a, value: i, values: s }],
										l = r.getFilter(c),
										f = t.filter(l);
									if (f.length) {
										var h = {
											type: r.type,
											colValue: i,
											colField: a,
											colIndex: u,
											rows: r.getRows(),
											rowIndex: e,
											data: f,
											children: r.getChildFacets(f, e + 1, n),
										};
										o.push(h), n.push(h);
									}
								}),
								o
							);
						}
					}),
					(e.prototype.setRegion = function(t) {
						var e = this;
						e.forceColIndex(t),
							t.forEach(function(t) {
								t.region = e.getRegion(t.rows, t.cols, t.colIndex, t.rowIndex);
							});
					}),
					(e.prototype.forceColIndex = function(t) {
						var e = this,
							n = [],
							r = 0;
						t.forEach(function(t) {
							e.isLeaf(t) && (n.push(t), (t.colIndex = r), r++);
						}),
							n.forEach(function(t) {
								t.cols = n.length;
							});
						for (var i = e.fields.length, o = i - 1; o >= 0; o--)
							for (var a = e.getFacetsByLevel(t, o), s = 0; a.length > s; s++) {
								var u = a[s];
								e.isLeaf(u) ||
									((u.originColIndex = u.colIndex),
									(u.colIndex = e.getRegionIndex(u.children)),
									(u.cols = n.length));
							}
					}),
					(e.prototype.getFacetsByLevel = function(t, e) {
						var n = [];
						return (
							t.forEach(function(t) {
								t.rowIndex === e && n.push(t);
							}),
							n
						);
					}),
					(e.prototype.getRegion = function(t, e, n, r) {
						var i = 1 / e,
							o = 1 / t,
							a = { x: i * n, y: o * r };
						return { start: a, end: { x: a.x + i, y: a.y + (2 * o) / 3 } };
					}),
					(e.prototype.getRegionIndex = function(t) {
						var e = t[0];
						return (t[t.length - 1].colIndex - e.colIndex) / 2 + e.colIndex;
					}),
					(e.prototype.isLeaf = function(t) {
						return !t.children || !t.children.length;
					}),
					(e.prototype.setXAxis = function(t, e, n) {
						n.rowIndex !== n.rows - 1 && ((e[t].label = null), (e[t].title = null));
					}),
					(e.prototype.setYAxis = function(t, e, n) {
						0 !== n.originColIndex &&
							0 !== n.colIndex &&
							((e[t].title = null), (e[t].label = null));
					}),
					(e.prototype.onPaint = function() {
						t.prototype.onPaint.call(this),
							this.group.clear(),
							this.facets && this.line && this.drawLines(this.facets, this.group);
					}),
					(e.prototype.drawLines = function(t, e) {
						var n = this,
							r = e.addGroup();
						t.forEach(function(t) {
							if (!n.isLeaf(t)) {
								n._addFacetLines(t, t.children, r);
							}
						});
					}),
					(e.prototype._addFacetLines = function(t, e, n) {
						var r = this,
							i = t.view,
							o = i.getViewRegion(),
							a = { x: o.start.x + (o.end.x - o.start.x) / 2, y: o.start.y };
						e.forEach(function(t) {
							var e = t.view.getViewRegion(),
								i = { x: e.start.x + (e.end.x - e.start.x) / 2, y: e.end.y },
								o = { x: a.x, y: a.y + (i.y - a.y) / 2 };
							r._drawLine([a, o, { x: i.x, y: o.y }, i], n);
						});
					}),
					(e.prototype._getPath = function(t) {
						var e = this,
							n = [];
						return (
							e.lineSmooth
								? (n.push(['M', t[0].x, t[0].y]),
								  n.push(['C', t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y]))
								: t.forEach(function(t, e) {
										n.push(0 === e ? ['M', t.x, t.y] : ['L', t.x, t.y]);
								  }),
							n
						);
					}),
					(e.prototype._drawLine = function(t, e) {
						var n = this,
							r = n._getPath(t);
						e.addShape('path', { attrs: u({ path: r }, n.line) });
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(17),
				u = n(1);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.assign(e, {
							marginRatio: 0.5,
							dodgeRatio: u.widthRatio.column,
							dodgeBy: null,
						});
					}),
					(e.prototype.processAdjust = function(t) {
						var e = this,
							n = a.Array.merge(t),
							r = e.dodgeBy,
							i = t;
						r && (i = a.Array.group(n, r)),
							(e.cacheMap = {}),
							(e.adjDataArray = i),
							(e.mergeData = n),
							e.adjustData(i, n),
							(e.adjDataArray = null),
							(e.mergeData = null);
					}),
					(e.prototype.getDistribution = function(t) {
						var e = this,
							n = e.adjDataArray,
							r = e.cacheMap,
							i = r[t];
						return (
							i ||
								((i = {}),
								a.each(n, function(e, n) {
									var r = a.Array.values(e, t);
									r.length || r.push(0),
										a.each(r, function(t) {
											i[t] || (i[t] = []), i[t].push(n);
										});
								}),
								(r[t] = i)),
							i
						);
					}),
					(e.prototype.adjustDim = function(t, e, n, r, i) {
						var o = this,
							s = o.getDistribution(t),
							u = o.groupData(n, t);
						a.each(u, function(n, r) {
							r = parseFloat(r);
							var u = void 0;
							(u = 1 === e.length ? { pre: e[0] - 1, next: e[0] + 1 } : o.getAdjustRange(t, r, e)),
								a.each(n, function(e) {
									var n = e[t],
										r = s[n],
										a = r.indexOf(i);
									e[t] = o.getDodgeOffset(u, a, r.length);
								});
						});
					}),
					(e.prototype.getDodgeOffset = function(t, e, n) {
						var r = this,
							i = t.pre,
							o = t.next,
							a = o - i,
							s = r.dodgeRatio,
							u = (a * s) / n,
							c = r.marginRatio * u;
						return (
							(i + o) / 2 +
							(0.5 * (a - n * u - (n - 1) * c) + ((e + 1) * u + e * c) - 0.5 * u - 0.5 * a)
						);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			var r = n(17);
			(r.Stack = n(190)),
				(r.Jitter = n(189)),
				(r.Symmetric = n(191)),
				(r.Dodge = n(187)),
				(t.exports = r);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(17);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getAdjustOffset = function(t, e) {
						var n = Math.random(),
							r = e - t;
						return t + 0.05 * r + 0.9 * r * n;
					}),
					(e.prototype._adjustGroup = function(t, e, n, r) {
						var i = this,
							o = i.getAdjustRange(e, n, r);
						a.each(t, function(t) {
							t[e] = i.getAdjustOffset(o.pre, o.next);
						});
					}),
					(e.prototype.adjustDim = function(t, e, n) {
						var r = this,
							i = r.groupData(n, t);
						a.each(i, function(n, i) {
							(i = parseFloat(i)), r._adjustGroup(n, t, i, e);
						});
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(17);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.assign(e, { height: null, size: 10, reverseOrder: !1, adjustNames: ['y'] });
					}),
					(e.prototype.processOneDimStack = function(t) {
						var e = this,
							n = e.xField,
							r = e.yField || 'y',
							i = e.height,
							o = {};
						e.reverseOrder && (t = t.slice(0).reverse());
						for (var a = 0; t.length > a; a++)
							for (var s = t[a], u = 0; s.length > u; u++) {
								var c = s[u],
									l = c.size || e.size,
									f = (2 * l) / i,
									h = c[n];
								o[h] || (o[h] = f / 2), (c[r] = o[h]), (o[h] += f);
							}
					}),
					(e.prototype.processAdjust = function(t) {
						var e = this;
						e.yField ? e.processStack(t) : e.processOneDimStack(t);
					}),
					(e.prototype.processStack = function(t) {
						var e = this,
							n = e.xField,
							r = e.yField,
							i = t.length,
							o = { positive: {}, negative: {} };
						e.reverseOrder && (t = t.slice(0).reverse());
						for (var s = 0; i > s; s++)
							for (var u = t[s], c = 0; u.length > c; c++) {
								var l = u[c],
									f = l[n] || 0,
									h = l[r] || 0,
									p = '' + f;
								h = a.isArray(h) ? h[1] : h;
								var d = 0 > h ? 'negative' : 'positive';
								o[d][p] || (o[d][p] = 0), (l[r] = [o[d][p], h + o[d][p]]), (o[d][p] += h);
							}
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(0),
				s = n(17);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return a.assign(e, { cacheMax: null, adjustNames: ['y'] });
					}),
					(e.prototype._getMax = function(t) {
						var e = this,
							n = e.mergeData,
							r = a.maxBy(n, function(e) {
								var n = e[t];
								return a.isArray(n) ? Math.max.apply(null, n) : n;
							}),
							i = r[t];
						return a.isArray(i) ? Math.max.apply(null, i) : i;
					}),
					(e.prototype._getXValuesMax = function() {
						var t = this,
							e = t.yField,
							n = t.xField,
							r = {};
						return (
							a.each(t.mergeData, function(t) {
								var i = t[n],
									o = t[e],
									s = a.isArray(o) ? Math.max.apply(null, o) : o;
								(r[i] = r[i] || 0), s > r[i] && (r[i] = s);
							}),
							r
						);
					}),
					(e.prototype.processAdjust = function(t) {
						var e = this;
						(e.mergeData = a.Array.merge(t)), e._processSymmetric(t), (e.mergeData = null);
					}),
					(e.prototype._processSymmetric = function(t) {
						var e = this,
							n = e.xField,
							r = e.yField,
							i = e._getMax(r),
							o = t[0][0],
							s = void 0;
						o && a.isArray(o[r]) && (s = e._getXValuesMax()),
							a.each(t, function(t) {
								a.each(t, function(t) {
									var e = t[r],
										o = void 0;
									if (a.isArray(e)) {
										o = (i - s[t[n]]) / 2;
										var u = [];
										a.each(e, function(t) {
											u.push(o + t);
										}),
											(t[r] = u);
									} else (o = (i - e) / 2), (t[r] = [o, e + o]);
								});
							});
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(4),
				s = n(86),
				u = n(0);
			n(206);
			var c = (function(t) {
					function e(n) {
						r(this, e);
						var o = i(this, t.call(this, n));
						return u.assign(o, s), o;
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (
								(e.type = 'area'),
								(e.shapeType = 'area'),
								(e.generatePoints = !0),
								(e.sortable = !0),
								e
							);
						}),
						(e.prototype.draw = function(t, e, n, r) {
							var i = this,
								o = this.getDrawCfg(t[0]),
								a = this.splitData(t);
							(o.origin = t),
								u.each(a, function(t, a) {
									o.splitedIndex = a;
									var s = t.map(function(t) {
										return t.points;
									});
									o.points = s;
									var u = n.drawShape(o.shape, o, e);
									i.appendShapeInfo(u, r + a);
								});
						}),
						e
					);
				})(a),
				l = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.hasDefaultAdjust = !0), (e.adjusts = [{ type: 'stack' }]), e;
						}),
						e
					);
				})(c);
			(c.Stack = l), (a.Area = c), (a.AreaStack = l), (t.exports = c);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(4);
			n(207);
			var s = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return (e.type = 'edge'), (e.shapeType = 'edge'), (e.generatePoints = !0), e;
					}),
					e
				);
			})(a);
			(a.Edge = s), (t.exports = s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(4),
				s = n(43),
				u = n(0),
				c = {},
				l = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.type = 'heatmap'), e;
						}),
						(e.prototype._prepareRange = function() {
							var t = this,
								e = t.get('mappedData'),
								n = t.getAttr('color'),
								r = n.field,
								i = 1 / 0,
								o = -1 / 0;
							e.forEach(function(t) {
								var e = t._origin[r];
								e > o && (o = e), i > e && (i = e);
							}),
								i === o && (i = o - 1),
								t.set('valueRange', [i, o]);
						}),
						(e.prototype._prepareSize = function() {
							var t = this,
								e = t.getDefaultValue('size');
							u.isNumber(e) || (e = t._getDefaultSize());
							var n = t.get('styleOptions'),
								r = n && u.isObject(n.style) ? n.style.blur : null;
							u.isFinite(r) || (r = e / 2), t.set('heatmapSize', { blur: r, radius: e });
						}),
						(e.prototype._getDefaultSize = function() {
							var t = this,
								e = t.getAttr('position'),
								n = t.get('coord');
							return Math.min(
								n.width / (4 * e.scales[0].ticks.length),
								n.height / (4 * e.scales[1].ticks.length)
							);
						}),
						(e.prototype._colorize = function(t) {
							for (var e = this, n = e.getAttr('color'), r = t.data, i = 3; r.length > i; i += 4) {
								var o = r[i];
								if (o) {
									var a = void 0;
									c[o] ? (a = c[o]) : ((a = s.rgb2arr(n.gradient(o / 256))), (c[o] = a)),
										(r[i - 3] = a[0]),
										(r[i - 2] = a[1]),
										(r[i - 1] = a[2]),
										(r[i] = o);
								}
							}
						}),
						(e.prototype._prepareGreyScaleBlurredCircle = function(t, e) {
							var n = this,
								r = n.get('grayScaleBlurredCanvas');
							r || ((r = document.createElement('canvas')), n.set('grayScaleBlurredCanvas', r));
							var i = t + e,
								o = r.getContext('2d');
							(r.width = r.height = 2 * i),
								o.clearRect(0, 0, r.width, r.height),
								(o.shadowOffsetX = o.shadowOffsetY = 2 * i),
								(o.shadowBlur = e),
								(o.shadowColor = 'black'),
								o.beginPath(),
								o.arc(-i, -i, t, 0, 2 * Math.PI, !0),
								o.closePath(),
								o.fill();
						}),
						(e.prototype._drawGrayScaleBlurredCircle = function(t, e, n, r, i) {
							var o = this,
								a = o.get('grayScaleBlurredCanvas');
							(i.globalAlpha = r), i.drawImage(a, t - n, e - n);
						}),
						(e.prototype._getShadowCanvasCtx = function() {
							var t = this,
								e = t.get('shadowCanvas');
							e || ((e = document.createElement('canvas')), t.set('shadowCanvas', e));
							var n = t.get('coord'),
								r = n.width,
								i = n.height;
							return (e.width = r), (e.height = i), e.getContext('2d');
						}),
						(e.prototype._clearShadowCanvasCtx = function() {
							var t = this._getShadowCanvasCtx();
							t.clearRect(0, 0, t.canvas.width, t.canvas.height);
						}),
						(e.prototype._getImageShape = function() {
							var t = this,
								e = t.get('imageShape');
							return (
								e || ((e = t.get('container').addShape('Image', {})), t.set('imageShape', e), e)
							);
						}),
						(e.prototype.drawWithRange = function(t) {
							var e = this,
								n = e.get('coord'),
								r = n.start,
								i = n.end,
								o = n.width,
								a = n.height,
								s = e.getAttr('color').field,
								u = e.get('heatmapSize');
							e._clearShadowCanvasCtx();
							var c = e._getShadowCanvasCtx(),
								l = e.get('mappedData');
							t &&
								(l = l.filter(function(e) {
									return t[1] >= e._origin[s] && e._origin[s] >= t[0];
								}));
							for (var f = e._getScale(s), h = 0; l.length > h; h++) {
								var p = l[h],
									d = e.getDrawCfg(p);
								e._drawGrayScaleBlurredCircle(
									d.x - r.x,
									d.y - i.y,
									u.radius + u.blur,
									f.scale(p._origin[s]),
									c
								);
							}
							var g = c.getImageData(0, 0, o, a);
							e._clearShadowCanvasCtx(), e._colorize(g), c.putImageData(g, 0, 0);
							var y = e._getImageShape();
							y.attr('x', r.x),
								y.attr('y', i.y),
								y.attr('width', o),
								y.attr('height', a),
								y.attr('img', c.canvas);
						}),
						(e.prototype.draw = function(t) {
							var e = this;
							e.set('mappedData', t), e._prepareRange(), e._prepareSize();
							var n = e.get('heatmapSize');
							e._prepareGreyScaleBlurredCircle(n.radius, n.blur),
								e.drawWithRange(e.get('valueRange'));
						}),
						e
					);
				})(a);
			(a.Heatmap = l), (t.exports = l);
		},
		function(t, e, n) {
			var r = n(4);
			(r.Point = n(203)),
				(r.PointJitter = r.Point.Jitter),
				(r.PointStack = r.Point.Stack),
				(r.Path = n(87)),
				(r.Line = n(199)),
				(r.LineStack = r.Line.Stack),
				(r.Interval = n(196)),
				(r.IntervalStack = r.Interval.Stack),
				(r.IntervalDodge = r.Interval.Dodge),
				(r.IntervalSymmetric = r.Interval.Symmetric),
				(r.Area = n(192)),
				(r.AreaStack = r.Area.Stack),
				(r.Polygon = n(204)),
				(r.Schema = n(205)),
				(r.SchemaDodge = r.Schema.Dodge),
				(r.Edge = n(193)),
				(r.Heatmap = n(194)),
				(r.Venn = n(215)),
				(t.exports = r);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(4),
				s = n(0),
				u = n(85);
			n(208);
			var c = (function(t) {
					function e(n) {
						r(this, e);
						var o = i(this, t.call(this, n));
						return s.assign(o, u), o;
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.type = 'interval'), (e.shapeType = 'interval'), (e.generatePoints = !0), e;
						}),
						(e.prototype.createShapePointsCfg = function(e) {
							var n = t.prototype.createShapePointsCfg.call(this, e);
							return (n.size = this.getNormalizedSize(e)), n;
						}),
						(e.prototype.clearInner = function() {
							t.prototype.clearInner.call(this), this.set('defaultSize', null);
						}),
						e
					);
				})(a),
				l = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.hasDefaultAdjust = !0), (e.adjusts = [{ type: 'stack' }]), e;
						}),
						e
					);
				})(c),
				f = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.hasDefaultAdjust = !0), (e.adjusts = [{ type: 'dodge' }]), e;
						}),
						e
					);
				})(c),
				h = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.hasDefaultAdjust = !0), (e.adjusts = [{ type: 'symmetric' }]), e;
						}),
						e
					);
				})(c);
			(c.Stack = l),
				(c.Dodge = f),
				(c.Symmetric = h),
				(a.Interval = c),
				(a.IntervalStack = l),
				(a.IntervalDodge = f),
				(a.IntervalSymmetric = h),
				(t.exports = c);
		},
		function(t, e, n) {
			var r = n(83),
				i = n(84),
				o = n(198);
			t.exports = {
				getLabelsClass: function(t) {
					var e = r;
					return 'polar' === t ? (e = i) : 'theta' === t && (e = o), e;
				},
			};
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function a(t, e, n) {
				return { x: t.x + n * Math.cos(e), y: t.y + n * Math.sin(e) };
			}
			function s(t, e, n, r, i) {
				var o = !0,
					a = n.start,
					s = n.end,
					u = Math.min(a.y, s.y),
					c = Math.abs(a.y - s.y),
					l = void 0,
					f = 0,
					h = Number.MIN_VALUE,
					p = t.map(function(t) {
						return t.y > f && (f = t.y), h > t.y && (h = t.y), { size: e, targets: [t.y - u] };
					});
				for (h -= u, f - u > c && (c = f - u); o; )
					for (
						p.forEach(function(t) {
							var e = (Math.min.apply(h, t.targets) + Math.max.apply(h, t.targets)) / 2;
							t.pos = Math.min(Math.max(h, e - t.size / 2), c - t.size);
						}),
							o = !1,
							l = p.length;
						l--;

					)
						if (l > 0) {
							var d = p[l - 1],
								g = p[l];
							d.pos + d.size > g.pos &&
								((d.size += g.size),
								(d.targets = d.targets.concat(g.targets)),
								d.pos + d.size > c && (d.pos = c - d.size),
								p.splice(l, 1),
								(o = !0));
						}
				(l = 0),
					p.forEach(function(n) {
						var r = u + e / 2;
						n.targets.forEach(function() {
							(t[l].y = n.pos + r), (r += e), l++;
						});
					}),
					t.forEach(function(t) {
						var e = t.r * t.r,
							n = Math.pow(Math.abs(t.y - r.y), 2);
						if (n > e) t.x = r.x;
						else {
							var o = Math.sqrt(e - n);
							t.x = i ? r.x + o : r.x - o;
						}
					});
			}
			var u = n(0),
				c = n(84),
				l = n(13),
				f = n(1);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						return { label: f.thetaLabels };
					}),
					(e.prototype.getDefaultOffset = function() {
						return this.get('label').offset || 0;
					}),
					(e.prototype.adjustItems = function(t) {
						var e = this,
							n = e.getDefaultOffset();
						return n > 0 && (t = e._distribute(t, n)), t;
					}),
					(e.prototype._distribute = function(t, e) {
						var n = this,
							r = n.get('coord'),
							i = r.getRadius(),
							o = n.get('label').labelHeight,
							a = r.getCenter(),
							u = i + e,
							c = 2 * u + 2 * o,
							l = { start: r.start, end: r.end },
							f = n.get('geom');
						if (f) {
							var h = f.get('view');
							l = h.getViewRegion();
						}
						var p = [[], []];
						return (
							t.forEach(function(t) {
								'right' === t.textAlign ? p[0].push(t) : p[1].push(t);
							}),
							p.forEach(function(t, e) {
								var n = parseInt(c / o, 10);
								t.length > n &&
									(t.sort(function(t, e) {
										return e['..percent'] - t['..percent'];
									}),
									t.splice(n, t.length - n)),
									t.sort(function(t, e) {
										return t.y - e.y;
									}),
									s(t, o, l, a, e);
							}),
							p[0].concat(p[1])
						);
					}),
					(e.prototype.lineToLabel = function(t, e) {
						var n = this,
							r = n.get('coord'),
							i = r.getRadius(),
							o = n.getDefaultOffset(),
							s = t.orignAngle || t.angle,
							c = r.getCenter(),
							l = a(c, s, i + 2.5),
							f = a(c, s, i + o / 2),
							h = n.get('lineGroup');
						h || ((h = n.addGroup({ elCls: 'x-line-group' })), n.set('lineGroup', h));
						var p = h.addShape('path', {
							attrs: u.mix(
								{
									path: ['M' + l.x, l.y + ' Q' + f.x, f.y + ' ' + t.x, t.y].join(','),
									fill: null,
									stroke: t.color,
								},
								e
							),
						});
						(p.name = 'labelLine'),
							(p._id = t._id && t._id.replace('glabel', 'glabelline')),
							p.set('coord', r);
					}),
					(e.prototype.getLabelRotate = function(t, e) {
						var n = void 0;
						return (
							0 > e && ((n = (180 * t) / Math.PI), n > 90 && (n -= 180), -90 > n && (n += 180)),
							(n / 180) * Math.PI
						);
					}),
					(e.prototype.getLabelAlign = function(t) {
						var e = this,
							n = e.get('coord'),
							r = n.getCenter(),
							i = void 0;
						return (
							(i = t.angle > Math.PI / 2 || r.x > t.x ? 'right' : 'left'),
							e.getDefaultOffset() > 0 || (i = 'right' === i ? 'left' : 'right'),
							i
						);
					}),
					(e.prototype.getArcPoint = function(t) {
						return t;
					}),
					(e.prototype.getPointAngle = function(t) {
						var e = this,
							n = e.get('coord'),
							r = { x: u.isArray(t.x) ? t.x[0] : t.x, y: t.y[0] };
						e.transLabelPoint(r);
						var i = { x: u.isArray(t.x) ? t.x[1] : t.x, y: t.y[1] };
						e.transLabelPoint(i);
						var o = void 0,
							a = l.getPointAngle(n, r);
						if (t.points && t.points[0].y === t.points[1].y) o = a;
						else {
							var s = l.getPointAngle(n, i);
							s > a || (s += 2 * Math.PI), (o = a + (s - a) / 2);
						}
						return o;
					}),
					(e.prototype.getCirclePoint = function(t, e) {
						var n = this,
							r = n.get('coord'),
							i = r.getCenter(),
							o = r.getRadius() + e,
							s = a(i, t, o);
						return (s.angle = t), (s.r = o), s;
					}),
					e
				);
			})(c);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(4),
				s = n(87);
			n(209);
			var u = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.type = 'line'), (e.sortable = !0), e;
						}),
						e
					);
				})(s),
				c = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.hasDefaultAdjust = !0), (e.adjusts = [{ type: 'stack' }]), e;
						}),
						e
					);
				})(u);
			(u.Stack = c), (a.Line = u), (a.LineStack = c), (t.exports = u);
		},
		function(t, e, n) {
			function r(t, e) {
				if (a.isNil(t) || a.isNil(e)) return !1;
				var n = t.get('origin'),
					r = e.get('origin');
				return a.isEqual(n, r);
			}
			function i(t, e) {
				if (!t) return !0;
				if (t.length !== e.length) return !0;
				var n = !1;
				return (
					a.each(e, function(e, i) {
						if (!r(e, t[i])) return (n = !0), !1;
					}),
					n
				);
			}
			function o(t, e) {
				var n = {};
				return (
					a.each(t, function(t, r) {
						var i = e.__attrs[r];
						a.isArray(i) && (i = a.cloneDeep(i)), (n[r] = i);
					}),
					n
				);
			}
			var a = n(0);
			t.exports = {
				_isAllowActive: function() {
					var t = this.get('allowActive');
					if (!a.isNil(t)) return t;
					var e = this.get('view'),
						n = this.isShareTooltip();
					return !1 === e.get('options').tooltip || !n;
				},
				_onMouseenter: function(t) {
					var e = this,
						n = t.shape,
						r = e.get('shapeContainer');
					n && r.contain(n) && e._isAllowActive() && e.setShapesActived(n);
				},
				_onMouseleave: function() {
					var t = this,
						e = t.get('view'),
						n = e.get('canvas');
					t.get('activeShapes') && (t.clearActivedShapes(), n.draw());
				},
				_bindActiveAction: function() {
					var t = this,
						e = t.get('view'),
						n = t.get('type');
					e.on(n + ':mouseenter', a.wrapBehavior(t, '_onMouseenter')),
						e.on(n + ':mouseleave', a.wrapBehavior(t, '_onMouseleave'));
				},
				_offActiveAction: function() {
					var t = this,
						e = t.get('view'),
						n = t.get('type');
					e.off(n + ':mouseenter', a.getWrapBehavior(t, '_onMouseenter')),
						e.off(n + ':mouseleave', a.getWrapBehavior(t, '_onMouseleave'));
				},
				_setActiveShape: function(t) {
					var e = this,
						n = e.get('activedOptions') || {},
						r = t.get('origin'),
						i = r.shape || e.getDefaultValue('shape');
					a.isArray(i) && (i = i[0]);
					var s = e.get('shapeFactory'),
						u = a.mix({}, t.__attrs, { origin: r }),
						c = s.getActiveCfg(i, u);
					n.style && a.mix(c, n.style),
						t.setSilent('_originAttrs', o(c, t)),
						n.animate ? t.animate(c, 300) : t.attr(c),
						t.setZIndex(1);
				},
				setShapesActived: function(t) {
					var e = this;
					a.isArray(t) || (t = [t]);
					var n = e.get('activeShapes');
					if (i(n, t)) {
						var r = e.get('view'),
							o = r.get('canvas'),
							s = e.get('shapeContainer'),
							u = e.get('activedOptions');
						u && u.highlight
							? (a.each(t, function(t) {
									t.get('animating') && t.stopAnimate();
							  }),
							  e.highlightShapes(t))
							: (n && e.clearActivedShapes(),
							  a.each(t, function(t) {
									t.get('animating') && t.stopAnimate(),
										t.get('visible') && !t.get('selected') && e._setActiveShape(t);
							  })),
							e.set('activeShapes', t),
							s.sort(),
							o.draw();
					}
				},
				clearActivedShapes: function() {
					var t = this,
						e = t.get('shapeContainer'),
						n = t.get('activedOptions'),
						r = n && n.animate;
					if (e && !e.get('destroyed')) {
						var i = t.get('activeShapes');
						a.each(i, function(t) {
							if (!t.get('selected')) {
								var e = t.get('_originAttrs');
								r ? (t.stopAnimate(), t.animate(e, 300)) : t.attr(e),
									t.setZIndex(0),
									t.set('_originAttrs', null);
							}
						});
						if (t.get('preHighlightShapes')) {
							var o = e.get('children');
							a.each(o, function(t) {
								if (!t.get('selected')) {
									var e = t.get('_originAttrs');
									e &&
										(r ? (t.stopAnimate(), t.animate(e, 300)) : t.attr(e),
										t.setZIndex(0),
										t.set('_originAttrs', null));
								}
							});
						}
						e.get('children').sort(function(t, e) {
							return t._INDEX - e._INDEX;
						}),
							t.set('activeShapes', null),
							t.set('preHighlightShapes', null);
					}
				},
				getGroupShapesByPoint: function(t) {
					var e = this,
						n = e.get('shapeContainer'),
						r = [];
					if (n) {
						var i = e.getXScale().field,
							o = e.getShapes(),
							s = e._getOriginByPoint(t);
						a.each(o, function(t) {
							var e = t.get('origin');
							if (t.get('visible') && e) {
								e._origin[i] === s[i] && r.push(t);
							}
						});
					}
					return r;
				},
				getSingleShapeByPoint: function(t) {
					var e = this,
						n = e.get('shapeContainer'),
						r = n.get('canvas'),
						i = r.get('pixelRatio'),
						o = void 0;
					if ((n && (o = n.getShape(t.x * i, t.y * i)), o && o.get('origin'))) return o;
				},
				highlightShapes: function(t, e) {
					var n = this;
					a.isArray(t) || (t = [t]);
					var r = n.get('activeShapes');
					if (i(r, t)) {
						r && n.clearActivedShapes();
						var s = n.getShapes(),
							u = n.get('activedOptions'),
							c = u && u.animate,
							l = u && u.style;
						a.each(s, function(n) {
							var r = {};
							n.stopAnimate(),
								-1 !== a.indexOf(t, n)
									? (a.mix(r, l, e), n.setZIndex(1))
									: (a.mix(r, { fillOpacity: 0.3 }), n.setZIndex(0)),
								n.setSilent('_originAttrs', o(r, n)),
								c ? n.animate(r, 300) : n.attr(r);
						}),
							n.set('preHighlightShapes', t),
							n.set('activeShapes', t);
					}
				},
			};
		},
		function(t, e, n) {
			function r(t, e) {
				if (o.isNil(t) || o.isNil(e)) return !1;
				var n = t.get('origin'),
					r = e.get('origin');
				return o.isEqual(n, r);
			}
			function i(t, e) {
				var n = {};
				return (
					o.each(t, function(t, r) {
						'transform' === r && (r = 'matrix');
						var i = e.__attrs[r];
						o.isArray(i) && (i = o.cloneDeep(i)), (n[r] = i);
					}),
					n
				);
			}
			var o = n(0);
			t.exports = {
				_isAllowSelect: function() {
					var t = this.get('allowSelect');
					if (!o.isNil(t)) return t;
					var e = this.get('type'),
						n = this.get('coord'),
						r = n && n.type;
					return 'interval' === e && 'theta' === r;
				},
				_onClick: function(t) {
					var e = this;
					if (e._isAllowSelect()) {
						e.clearActivedShapes();
						var n = t.shape,
							r = e.get('shapeContainer');
						n && !n.get('animating') && r.contain(n) && e.setShapeSelected(n);
					}
				},
				_bindSelectedAction: function() {
					var t = this;
					t.get('view').on(t.get('type') + ':click', o.wrapBehavior(t, '_onClick'));
				},
				_offSelectedAction: function() {
					var t = this;
					t.get('view').off(t.get('type') + ':click', o.getWrapBehavior(t, '_onClick'));
				},
				_setShapeStatus: function(t, e) {
					var n = this,
						r = n.get('view'),
						a = n.get('selectedOptions') || {},
						s = !1 !== a.animate,
						u = r.get('canvas');
					t.set('selected', e);
					var c = t.get('origin');
					if (e) {
						var l = c.shape || n.getDefaultValue('shape');
						o.isArray(l) && (l = l[0]);
						var f = n.get('shapeFactory'),
							h = o.mix({ geom: n, point: c }, a),
							p = f.getSelectedCfg(l, h);
						o.mix(p, h.style),
							t.get('_originAttrs') ||
								(t.get('animating') && t.stopAnimate(), t.set('_originAttrs', i(p, t))),
							s ? t.animate(p, 300) : (t.attr(p), u.draw());
					} else {
						var d = t.get('_originAttrs');
						t.set('_originAttrs', null), s ? t.animate(d, 300) : (t.attr(d), u.draw());
					}
				},
				setShapeSelected: function(t) {
					var e = this,
						n = e._getSelectedShapes(),
						i = e.get('selectedOptions') || {},
						a = !1 !== i.cancelable;
					if ('multiple' === i.mode)
						-1 === o.indexOf(n, t)
							? (n.push(t), e._setShapeStatus(t, !0))
							: a && (o.Array.remove(n, t), e._setShapeStatus(t, !1));
					else {
						var s = n[0];
						a && (t = r(s, t) ? null : t),
							r(s, t) || (s && e._setShapeStatus(s, !1), t && e._setShapeStatus(t, !0));
					}
				},
				clearSelected: function() {
					var t = this,
						e = t.get('shapeContainer');
					if (e && !e.get('destroyed')) {
						var n = t._getSelectedShapes();
						o.each(n, function(e) {
							t._setShapeStatus(e, !1), e.set('_originAttrs', null);
						});
					}
				},
				setSelected: function(t) {
					var e = this,
						n = e.getShapes();
					return (
						o.each(n, function(n) {
							var r = n.get('origin');
							r && r._origin === t && e.setShapeSelected(n);
						}),
						this
					);
				},
				_getSelectedShapes: function() {
					var t = this,
						e = t.getShapes(),
						n = [];
					return (
						o.each(e, function(t) {
							t.get('selected') && n.push(t);
						}),
						t.set('selectedShapes', n),
						n
					);
				},
			};
		},
		function(t, e, n) {
			function r(t) {
				return t.alias || t.field;
			}
			var i = n(0),
				o = n(1),
				a = o.defaultColor;
			t.exports = {
				_getIntervalSize: function(t) {
					var e = null,
						n = this.get('type'),
						r = this.get('coord');
					if (r.isRect && ('interval' === n || 'schema' === n)) {
						e = this.getSize(t._origin);
						var o = r.isTransposed ? 'y' : 'x';
						if (i.isArray(t[o])) {
							e = Math.abs(t[o][1] - t[o][0]) > e ? null : e;
						}
					}
					return e;
				},
				_snapEqual: function(t, e, n) {
					return (
						(t = n.translate(t)), (e = n.translate(e)), n.isCategory ? t === e : i.snapEqual(t, e)
					);
				},
				_getScaleValueByPoint: function(t) {
					var e = 0,
						n = this.get('coord'),
						r = this.getXScale(),
						i = n.invert(t),
						o = i.x;
					return (
						this.isInCircle() && o > (1 + r.rangeMax()) / 2 && (o = r.rangeMin()),
						(e = r.invert(o)),
						r.isCategory && (e = r.translate(e)),
						e
					);
				},
				_getOriginByPoint: function(t) {
					var e = this.getXScale(),
						n = this.getYScale(),
						r = e.field,
						i = n.field,
						o = this.get('coord'),
						a = o.invert(t),
						s = e.invert(a.x),
						u = n.invert(a.y),
						c = {};
					return (c[r] = s), (c[i] = u), c;
				},
				_getScale: function(t) {
					var e = this,
						n = e.get('scales'),
						r = null;
					return (
						i.each(n, function(e) {
							if (e.field === t) return (r = e), !1;
						}),
						r
					);
				},
				_getTipValueScale: function() {
					var t = this.getAttrsForLegend(),
						e = void 0;
					i.each(t, function(t) {
						var n = t.getScale(t.type);
						if (n.isLinear) return (e = n), !1;
					});
					var n = this.getXScale(),
						r = this.getYScale();
					return !e && r && '..y' === r.field ? n : e || r || n;
				},
				_getTipTitleScale: function(t) {
					var e = this;
					if (t) return e._getScale(t);
					var n = e.getAttr('position'),
						r = n.getFields(),
						o = void 0;
					return (
						i.each(r, function(t) {
							if (-1 === t.indexOf('..')) return (o = t), !1;
						}),
						e._getScale(o)
					);
				},
				_filterValue: function(t, e) {
					var n = this.get('coord'),
						r = this.getYScale(),
						o = r.field,
						a = n.invert(e),
						s = a.y;
					s = r.invert(s);
					var u = t[t.length - 1];
					return (
						i.each(t, function(t) {
							var e = t._origin;
							if (s >= e[o][0] && e[o][1] >= s) return (u = t), !1;
						}),
						u
					);
				},
				getXDistance: function() {
					var t = this,
						e = t.get('xDistance');
					if (!e) {
						var n = t.getXScale();
						if (n.isCategory) e = 1;
						else {
							var r = n.values,
								o = n.translate(r[0]),
								a = o;
							i.each(r, function(t) {
								(t = n.translate(t)), o > t && (o = t), t > a && (a = t);
							});
							e = (a - o) / (r.length - 1);
						}
						t.set('xDistance', e);
					}
					return e;
				},
				findPoint: function(t, e) {
					var n = this,
						r = n.get('type'),
						o = n.getXScale(),
						a = n.getYScale(),
						s = o.field,
						u = a.field,
						c = null;
					if (i.indexOf(['heatmap'], r) > -1) {
						var l = n.get('coord'),
							f = l.invert(t),
							h = o.invert(f.x),
							p = a.invert(f.y),
							d = 1 / 0;
						return (
							i.each(e, function(t) {
								var e = Math.pow(t._origin[s] - h, 2) + Math.pow(t._origin[u] - p, 2);
								d > e && ((d = e), (c = t));
							}),
							c
						);
					}
					var g = e[0],
						y = e[e.length - 1];
					if (!g) return c;
					var v = n._getScaleValueByPoint(t),
						m = g._origin[s],
						x = g._origin[u],
						b = y._origin[s],
						_ = a.isLinear && i.isArray(x);
					if (i.isArray(m))
						i.each(e, function(t) {
							var e = t._origin;
							if (o.translate(e[s][0]) <= v && o.translate(e[s][1]) >= v) {
								if (!_) return (c = t), !1;
								i.isArray(c) || (c = []), c.push(t);
							}
						}),
							i.isArray(c) && (c = this._filterValue(c, t));
					else {
						var w = void 0;
						if (o.isLinear || 'timeCat' === o.type) {
							if ((v > o.translate(b) || v < o.translate(m)) && (v > o.max || o.min > v))
								return null;
							for (var S = 0, M = e.length - 1, P = void 0; M >= S; ) {
								P = Math.floor((S + M) / 2);
								var C = e[P]._origin[s];
								if (n._snapEqual(C, v, o)) return e[P];
								o.translate(C) > o.translate(v)
									? (0 === M && (y = e[0]), (M = P - 1))
									: ((S = P + 1), (y = e[P]), (w = e[P + 1]));
							}
						} else
							i.each(e, function(t, r) {
								var a = t._origin;
								if (n._snapEqual(a[s], v, o)) {
									if (!_) return (c = t), !1;
									i.isArray(c) || (c = []), c.push(t);
								} else o.translate(a[s]) > v || ((y = t), (w = e[r + 1]));
							}),
								i.isArray(c) && (c = this._filterValue(c, t));
						y &&
							w &&
							Math.abs(o.translate(y._origin[s]) - v) > Math.abs(o.translate(w._origin[s]) - v) &&
							(y = w);
					}
					var O = n.getXDistance();
					return c || Math.abs(o.translate(y._origin[s]) - v) > O / 2 || (c = y), c;
				},
				getTipTitle: function(t, e) {
					var n = '',
						r = this._getTipTitleScale(e);
					if (r) {
						n = r.getText(t[r.field]);
					} else if ('heatmap' === this.get('type')) {
						var i = this.getXScale(),
							o = this.getYScale(),
							a = i.getText(t[i.field]),
							s = o.getText(t[o.field]);
						n = '( ' + a + ', ' + s + ' )';
					}
					return n;
				},
				getTipValue: function(t, e) {
					var n = void 0;
					if (((n = t[e.field]), i.isArray(n))) {
						var r = [];
						i.each(n, function(t) {
							r.push(e.getText(t));
						}),
							(n = r.join('-'));
					} else n = e.getText(n);
					return n;
				},
				getTipName: function(t) {
					var e = void 0,
						n = void 0,
						o = this._getGroupScales();
					if (
						(o.length &&
							i.each(o, function(t) {
								return (n = t), !1;
							}),
						n)
					) {
						e = n.getText(t[n.field]);
					} else {
						e = r(this._getTipValueScale());
					}
					return e;
				},
				getTipItems: function(t, e) {
					function n(e, n, r) {
						if (!i.isNil(n) && '' !== n) {
							var s = {
								title: u,
								point: t,
								name: e || u,
								value: n,
								color: t.color || a,
								marker: !0,
							};
							(s.size = o._getIntervalSize(t)), l.push(i.mix({}, s, r));
						}
					}
					var o = this,
						s = t._origin,
						u = o.getTipTitle(s, e),
						c = o.get('tooltipCfg'),
						l = [],
						f = void 0,
						h = void 0;
					if (c) {
						var p = c.fields,
							d = c.cfg,
							g = [];
						if (
							(i.each(p, function(t) {
								g.push(s[t]);
							}),
							d)
						) {
							i.isFunction(d) && (d = d.apply(null, g));
							var y = i.mix({}, { point: t, title: u, color: t.color || a, marker: !0 }, d);
							(y.size = o._getIntervalSize(t)), l.push(y);
						} else
							i.each(p, function(t) {
								if (!i.isNil(s[t])) {
									var e = o._getScale(t);
									(f = r(e)), (h = e.getText(s[t])), n(f, h);
								}
							});
					} else {
						var v = o._getTipValueScale();
						i.isNil(s[v.field]) || ((h = o.getTipValue(s, v)), (f = o.getTipName(s)), n(f, h));
					}
					return l;
				},
				isShareTooltip: function() {
					var t = this.get('shareTooltip'),
						e = this.get('type'),
						n = this.get('view'),
						r = void 0;
					if (
						((r = n.get('parent') ? n.get('parent').get('options') : n.get('options')),
						'interval' === e)
					) {
						var o = this.get('coord'),
							a = o.type;
						('theta' === a || ('polar' === a && o.isTransposed)) && (t = !1);
					} else
						(this.getYScale() && !i.inArray(['contour', 'point', 'polygon', 'edge'], e)) ||
							(t = !1);
					return r.tooltip && i.isBoolean(r.tooltip.shared) && (t = r.tooltip.shared), t;
				},
			};
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(4),
				s = n(0);
			n(210);
			var u = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.type = 'point'), (e.shapeType = 'point'), (e.generatePoints = !0), e;
						}),
						(e.prototype.drawPoint = function(t, e, n, r) {
							var i = this,
								o = t.shape,
								a = i.getDrawCfg(t),
								u = void 0;
							if (s.isArray(t.y)) {
								var c = i.hasStack();
								s.each(t.y, function(t, s) {
									(a.y = t),
										(a.yIndex = s),
										(c && 0 === s) || ((u = n.drawShape(o, a, e)), i.appendShapeInfo(u, r + s));
								});
							} else s.isNil(t.y) || ((u = n.drawShape(o, a, e)), i.appendShapeInfo(u, r));
						}),
						e
					);
				})(a),
				c = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.hasDefaultAdjust = !0), (e.adjusts = [{ type: 'jitter' }]), e;
						}),
						e
					);
				})(u),
				l = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.hasDefaultAdjust = !0), (e.adjusts = [{ type: 'stack' }]), e;
						}),
						e
					);
				})(u);
			(u.Jitter = c),
				(u.Stack = l),
				(a.Point = u),
				(a.PointJitter = c),
				(a.PointStack = l),
				(t.exports = u);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(4),
				s = n(0);
			n(211);
			var u = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return (e.type = 'polygon'), (e.shapeType = 'polygon'), (e.generatePoints = !0), e;
					}),
					(e.prototype.createShapePointsCfg = function(e) {
						var n = t.prototype.createShapePointsCfg.call(this, e),
							r = this,
							i = n.x,
							o = n.y,
							a = void 0;
						if (!s.isArray(i) || !s.isArray(o)) {
							var u = r.getXScale(),
								c = r.getYScale(),
								l = u.values ? u.values.length : u.ticks.length,
								f = c.values ? c.values.length : c.ticks.length,
								h = 0.5 / l,
								p = 0.5 / f;
							u.isCategory && c.isCategory
								? ((i = [i - h, i - h, i + h, i + h]), (o = [o - p, o + p, o + p, o - p]))
								: s.isArray(i)
									? ((a = i),
									  (i = [a[0], a[0], a[1], a[1]]),
									  (o = [o - p / 2, o + p / 2, o + p / 2, o - p / 2]))
									: s.isArray(o) &&
									  ((a = o),
									  (o = [a[0], a[1], a[1], a[0]]),
									  (i = [i - h / 2, i - h / 2, i + h / 2, i + h / 2])),
								(n.x = i),
								(n.y = o);
						}
						return n;
					}),
					e
				);
			})(a);
			(a.Polygon = u), (t.exports = u);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(4),
				s = n(0),
				u = n(85);
			n(212);
			var c = (function(t) {
					function e(n) {
						r(this, e);
						var o = i(this, t.call(this, n));
						return s.assign(o, u), o;
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.type = 'schema'), (e.shapeType = 'schema'), (e.generatePoints = !0), e;
						}),
						(e.prototype.createShapePointsCfg = function(e) {
							var n = t.prototype.createShapePointsCfg.call(this, e);
							return (n.size = this.getNormalizedSize(e)), n;
						}),
						e
					);
				})(a),
				l = (function(t) {
					function e() {
						return r(this, e), i(this, t.apply(this, arguments));
					}
					return (
						o(e, t),
						(e.prototype.getDefaultCfg = function() {
							var e = t.prototype.getDefaultCfg.call(this);
							return (e.hasDefaultAdjust = !0), (e.adjusts = [{ type: 'dodge' }]), e;
						}),
						e
					);
				})(c);
			(c.Dodge = l), (a.Schema = c), (a.SchemaDodge = l), (t.exports = c);
		},
		function(t, e, n) {
			function r(t) {
				return c.mix(
					{},
					h.shape.hollowArea,
					{ stroke: t.color, lineWidth: t.size, strokeOpacity: t.opacity },
					t.style
				);
			}
			function i(t) {
				return c.mix(
					{},
					h.shape.area,
					{ fill: t.color, stroke: t.color, lineWidth: t.size, fillOpacity: t.opacity },
					t.style
				);
			}
			function o(t, e, n) {
				var r = [],
					i = [],
					o = [],
					a = [],
					s = t.isInCircle;
				return (
					c.each(t.points, function(t) {
						o.push(t[1]), a.push(t[0]);
					}),
					(a = a.reverse()),
					i.push(o, a),
					c.each(i, function(i, o) {
						var a = [];
						i = n.parsePoints(i);
						var u = i[0];
						s && i.push({ x: u.x, y: u.y }),
							(a = e ? f.getSplinePath(i, !1, t.constraint) : f.getLinePath(i, !1)),
							o > 0 && (a[0][0] = 'L'),
							(r = r.concat(a));
					}),
					r.push(['Z']),
					r
				);
			}
			function a(t) {
				return {
					symbol: function(t, e, n, r) {
						r.save(),
							(r.lineWidth = 2),
							(r.strokeStyle = r.fillStyle),
							r.moveTo(t - 5.5, e - 4),
							r.lineTo(t + 5.5, e - 4),
							r.stroke(),
							r.restore(),
							r.moveTo(t - 5.5, e - 4),
							r.lineTo(t + 5.5, e - 4),
							r.lineTo(t + 5.5, e + 4),
							r.lineTo(t - 5.5, e + 4),
							r.closePath();
					},
					radius: 5,
					fill: t.color,
					fillOpacity: 0.3,
				};
			}
			function s(t, e) {
				if ('line' === t || 'smoothLine' === t) {
					return { lineWidth: (e.lineWidth || 0) + 1 };
				}
				var n = e.fillOpacity || e.opacity || 1;
				return { fillOpacity: n - 0.15, strokeOpacity: n - 0.15 };
			}
			function u(t, e, n) {
				var r = t._coord,
					i = r.convertPoint(e.points[0][1]);
				return n.addShape('circle', {
					attrs: c.mix({ x: i.x, y: i.y, r: 2, fill: e.color }, e.style),
				});
			}
			var c = n(0),
				l = n(5),
				f = n(13),
				h = n(1),
				p = l.registerFactory('area', {
					defaultShapeType: 'area',
					getDefaultPoints: function(t) {
						var e = [],
							n = t.x,
							r = t.y,
							i = t.y0;
						return (
							(r = c.isArray(r) ? r : [i, r]),
							c.each(r, function(t) {
								e.push({ x: n, y: t });
							}),
							e
						);
					},
					getActiveCfg: function(t, e) {
						return s(t, e);
					},
					drawShape: function(t, e, n) {
						var r = this.getShape(t),
							i = void 0;
						return (
							(i = 1 === e.points.length && h.showSinglePoint ? u(this, e, n) : r.draw(e, n)),
							i &&
								(i.set('origin', e.origin),
								(i._id = e.splitedIndex ? e._id + e.splitedIndex : e._id),
								(i.name = this.name)),
							i
						);
					},
					getSelectedCfg: function(t, e) {
						return e && e.style ? e.style : this.getActiveCfg(t, e);
					},
				});
			l.registerShape('area', 'area', {
				draw: function(t, e) {
					var n = i(t),
						r = o(t, !1, this);
					return e.addShape('path', { attrs: c.mix(n, { path: r }) });
				},
				getMarkerCfg: function(t) {
					return a(t);
				},
			}),
				l.registerShape('area', 'smooth', {
					draw: function(t, e) {
						var n = i(t),
							r = this._coord;
						t.constraint = [[r.start.x, r.end.y], [r.end.x, r.start.y]];
						var a = o(t, !0, this);
						return e.addShape('path', { attrs: c.mix(n, { path: a }) });
					},
					getMarkerCfg: function(t) {
						return a(t);
					},
				}),
				l.registerShape('area', 'line', {
					draw: function(t, e) {
						var n = r(t),
							i = o(t, !1, this);
						return e.addShape('path', { attrs: c.mix(n, { path: i }) });
					},
					getMarkerCfg: function(t) {
						return a(t);
					},
				}),
				l.registerShape('area', 'smoothLine', {
					draw: function(t, e) {
						var n = r(t),
							i = o(t, !0, this);
						return e.addShape('path', { attrs: c.mix(n, { path: i }) });
					},
					getMarkerCfg: function(t) {
						return a(t);
					},
				}),
				(p.spline = p.smooth),
				(t.exports = p);
		},
		function(t, e, n) {
			function r(t) {
				return l.mix(
					{},
					p.shape.edge,
					{ stroke: t.color, lineWidth: t.size, strokeOpacity: t.opacity, opacity: t.opacity },
					t.style
				);
			}
			function i(t, e) {
				var n = [];
				n.push({ x: t.x, y: 0.5 * t.y + (1 * e.y) / 2 }),
					n.push({ y: 0.5 * t.y + (1 * e.y) / 2, x: e.x }),
					n.push(e);
				var r = ['C'];
				return (
					l.each(n, function(t) {
						r.push(t.x, t.y);
					}),
					r
				);
			}
			function o(t, e) {
				var n = [];
				n.push({ x: e.x, y: e.y }), n.push(t);
				var r = ['Q'];
				return (
					l.each(n, function(t) {
						r.push(t.x, t.y);
					}),
					r
				);
			}
			function a(t, e) {
				var n = i(t, e),
					r = [['M', t.x, t.y]];
				return r.push(n), r;
			}
			function s(t, e, n) {
				var r = o(e, n),
					i = [['M', t.x, t.y]];
				return i.push(r), i;
			}
			function u(t, e) {
				var n = o(t[1], e),
					r = o(t[3], e),
					i = [['M', t[0].x, t[0].y]];
				return (
					i.push(r),
					i.push(['L', t[3].x, t[3].y]),
					i.push(['L', t[2].x, t[2].y]),
					i.push(n),
					i.push(['L', t[1].x, t[1].y]),
					i.push(['L', t[0].x, t[0].y]),
					i.push(['Z']),
					i
				);
			}
			function c(t, e) {
				var n = [];
				n.push({ y: t.y * (1 - g) + e.y * g, x: t.x }),
					n.push({ y: t.y * (1 - g) + e.y * g, x: e.x }),
					n.push(e);
				var r = [['M', t.x, t.y]];
				return (
					l.each(n, function(t) {
						r.push(['L', t.x, t.y]);
					}),
					r
				);
			}
			var l = n(0),
				f = n(5),
				h = n(46),
				p = n(1),
				d = n(13),
				g = 1 / 3,
				y = f.registerFactory('edge', {
					defaultShapeType: 'line',
					getDefaultPoints: function(t) {
						return h.splitPoints(t);
					},
					getActiveCfg: function(t, e) {
						return { lineWidth: (e.lineWidth || 0) + 1 };
					},
				});
			f.registerShape('edge', 'line', {
				draw: function(t, e) {
					var n = this.parsePoints(t.points),
						i = r(t),
						o = d.getLinePath(n);
					return e.addShape('path', { attrs: l.mix(i, { path: o }) });
				},
				getMarkerCfg: function(t) {
					return l.mix({ symbol: 'circle', radius: 4.5 }, r(t));
				},
			}),
				f.registerShape('edge', 'vhv', {
					draw: function(t, e) {
						var n = t.points,
							i = r(t),
							o = c(n[0], n[1]);
						return (o = this.parsePath(o)), e.addShape('path', { attrs: l.mix(i, { path: o }) });
					},
					getMarkerCfg: function(t) {
						return l.mix({ symbol: 'circle', radius: 4.5 }, r(t));
					},
				}),
				f.registerShape('edge', 'smooth', {
					draw: function(t, e) {
						var n = t.points,
							i = r(t),
							o = a(n[0], n[1]);
						return (o = this.parsePath(o)), e.addShape('path', { attrs: l.mix(i, { path: o }) });
					},
					getMarkerCfg: function(t) {
						return l.mix({ symbol: 'circle', radius: 4.5 }, r(t));
					},
				}),
				f.registerShape('edge', 'arc', {
					draw: function(t, e) {
						var n = t.points,
							o = n.length > 2 ? 'weight' : 'normal',
							a = r(t),
							c = void 0,
							f = void 0;
						if (t.isInCircle) {
							var h = { x: 0, y: 1 };
							'normal' === o ? (f = s(n[0], n[1], h)) : ((a.fill = a.stroke), (f = u(n, h))),
								(f = this.parsePath(f)),
								(c = e.addShape('path', { attrs: l.mix(a, { path: f }) }));
						} else if ('normal' === o)
							(n = this.parsePoints(n)),
								(c = e.addShape('arc', {
									attrs: l.mix(a, {
										x: (n[1].x + n[0].x) / 2,
										y: n[0].y,
										r: Math.abs(n[1].x - n[0].x) / 2,
										startAngle: Math.PI,
										endAngle: 2 * Math.PI,
									}),
								}));
						else {
							f = [['M', n[0].x, n[0].y], ['L', n[1].x, n[1].y]];
							var p = i(n[1], n[3]),
								d = i(n[2], n[0]);
							f.push(p),
								f.push(['L', n[3].x, n[3].y]),
								f.push(['L', n[2].x, n[2].y]),
								f.push(d),
								f.push(['Z']),
								(f = this.parsePath(f)),
								(a.fill = a.stroke),
								(c = e.addShape('path', { attrs: l.mix(a, { path: f }) }));
						}
						return c;
					},
					getMarkerCfg: function(t) {
						return l.mix({ symbol: 'circle', radius: 4.5 }, r(t));
					},
				}),
				(t.exports = y);
		},
		function(t, e, n) {
			function r(t, e) {
				var n = t.x,
					r = t.y,
					i = t.y0,
					o = t.size,
					a = i,
					s = r;
				y.isArray(r) && ((s = r[1]), (a = r[0]));
				var u = void 0,
					c = void 0;
				y.isArray(n) ? ((u = n[0]), (c = n[1])) : ((u = n - o / 2), (c = n + o / 2));
				var l = [];
				return (
					l.push({ x: u, y: a }, { x: u, y: s }),
					e ? l.push({ x: c, y: (s + a) / 2 }) : l.push({ x: c, y: s }, { x: c, y: a }),
					l
				);
			}
			function i(t) {
				for (var e = [], n = 0; t.length > n; n++) {
					var r = t[n];
					if (r) {
						e.push([0 === n ? 'M' : 'L', r.x, r.y]);
					}
				}
				var i = t[0];
				return e.push(['L', i.x, i.y]), e.push(['z']), e;
			}
			function o(t) {
				var e = t.x,
					n = t.y,
					r = t.y0,
					i = [];
				return (
					y.isArray(n)
						? y.each(n, function(t, n) {
								i.push({ x: y.isArray(e) ? e[n] : e, y: t });
						  })
						: i.push({ x: e, y: n }, { x: e, y: r }),
					i
				);
			}
			function a(t) {
				var e = t.x,
					n = y.isArray(t.y) ? t.y[1] : t.y,
					r = y.isArray(t.y) ? t.y[0] : t.y0,
					i = t.size,
					o = [];
				return (
					o.push(
						{ x: e - i / 2, y: n },
						{ x: e + i / 2, y: n },
						{ x: e, y: n },
						{ x: e, y: r },
						{ x: e - i / 2, y: r },
						{ x: e + i / 2, y: r }
					),
					o
				);
			}
			function s(t) {
				var e = [];
				return (
					e.push(
						['M', t[0].x, t[0].y],
						['L', t[1].x, t[1].y],
						['M', t[2].x, t[2].y],
						['L', t[3].x, t[3].y],
						['M', t[4].x, t[4].y],
						['L', t[5].x, t[5].y]
					),
					e
				);
			}
			function u(t) {
				return y.mix(
					{},
					b.shape.interval,
					{ fill: t.color, stroke: t.color, fillOpacity: t.opacity },
					t.style
				);
			}
			function c(t) {
				return y.mix(
					{},
					b.shape.hollowInterval,
					{ stroke: t.color, strokeOpacity: t.opacity },
					t.style
				);
			}
			function l(t, e) {
				var n = [],
					r = t.points,
					i = t.nextPoints;
				return (
					y.isNil(i)
						? e
							? n.push(
									['M', r[0].x, r[0].y],
									['L', r[1].x, r[1].y],
									['L', r[2].x, r[2].y],
									['L', r[3].x, r[3].y],
									['Z']
							  )
							: n.push(
									['M', r[0].x, r[0].y],
									['L', r[1].x, r[1].y],
									['L', r[2].x, r[2].y],
									['L', r[2].x, r[2].y],
									['Z']
							  )
						: n.push(
								['M', r[0].x, r[0].y],
								['L', r[1].x, r[1].y],
								['L', i[1].x, i[1].y],
								['L', i[0].x, i[0].y],
								['Z']
						  ),
					n
				);
			}
			function f(t, e) {
				var n = e.getRadius(),
					r = e.innerRadius,
					i = void 0,
					o = void 0,
					a = n * r,
					s = void 0,
					u = void 0;
				return (
					!y.isArray(t.x) && y.isArray(t.y) && (t.x = [t.x, t.x]),
					y.isArray(t.x)
						? ((s = { x: t.x[0], y: t.y[0] }),
						  (u = { x: t.x[1], y: t.y[1] }),
						  (i = m.getPointAngle(e, s)),
						  (o = m.getPointAngle(e, u)) > i || (o += 2 * Math.PI))
						: ((u = t), (i = e.startAngle), (o = m.getPointAngle(e, u))),
					{ r: n, ir: a, startAngle: i, endAngle: o }
				);
			}
			function h(t, e) {
				var n = e.geom,
					r = n.get('coord'),
					i = e.point,
					o = void 0;
				if (r && 'theta' === r.type) {
					var a = f(i, r),
						s = (a.endAngle - a.startAngle) / 2 + a.startAngle;
					o = { transform: [['t', 7.5 * Math.cos(s), 7.5 * Math.sin(s)]] };
				}
				return y.mix({}, o);
			}
			function p(t, e, n, r) {
				return 0 === e
					? [[t + (0.5 * n) / Math.PI / 2, r / 2], [t + (0.5 * n) / Math.PI, r], [t + n / 4, r]]
					: 1 === e
						? [
								[t + ((0.5 * n) / Math.PI / 2) * (Math.PI - 2), r],
								[t + ((0.5 * n) / Math.PI / 2) * (Math.PI - 1), r / 2],
								[t + n / 4, 0],
						  ]
						: 2 === e
							? [
									[t + (0.5 * n) / Math.PI / 2, -r / 2],
									[t + (0.5 * n) / Math.PI, -r],
									[t + n / 4, -r],
							  ]
							: [
									[t + ((0.5 * n) / Math.PI / 2) * (Math.PI - 2), -r],
									[t + ((0.5 * n) / Math.PI / 2) * (Math.PI - 1), -r / 2],
									[t + n / 4, 0],
							  ];
			}
			function d(t, e, n, r, i, o, a) {
				for (var s = 2 * Math.ceil(((2 * t) / n) * 4), u = []; r < 2 * -Math.PI; ) r += 2 * Math.PI;
				for (; r > 0; ) r -= 2 * Math.PI;
				r = (r / Math.PI / 2) * n;
				var c = o - t + r - 2 * t;
				u.push(['M', c, e]);
				for (var l = 0, f = 0; s > f; ++f) {
					var h = f % 4,
						d = p((f * n) / 4, h, n, i);
					u.push([
						'C',
						d[0][0] + c,
						-d[0][1] + e,
						d[1][0] + c,
						-d[1][1] + e,
						d[2][0] + c,
						-d[2][1] + e,
					]),
						f === s - 1 && (l = d[2][0]);
				}
				return u.push(['L', l + c, a + t]), u.push(['L', c, a + t]), u.push(['L', c, e]), u;
			}
			function g(t, e, n, r, i, o, a, s) {
				for (var u = a.getBBox(), c = u.maxX - u.minX, l = u.maxY - u.minY, f = 0; r > f; f++) {
					o.addShape('path', {
						attrs: { path: d(s, u.minY + l * n, c / 4, 0, c / 64, t, e), fill: i[f], clip: a },
					}).animate({ transform: [['t', c / 2, 0]], repeat: !0 }, 5e3 - 300 * f);
				}
			}
			var y = n(0),
				v = n(5),
				m = n(13),
				x = n(2).PathUtil,
				b = n(1),
				_ = v.registerFactory('interval', {
					defaultShapeType: 'rect',
					getActiveCfg: function(t, e) {
						if (!t || y.inArray(['rect', 'funnel', 'pyramid'], t)) {
							return { fillOpacity: (e.fillOpacity || e.opacity || 1) - 0.15 };
						}
						return { lineWidth: (e.lineWidth || 0) + 1 };
					},
					getDefaultPoints: function(t) {
						return r(t);
					},
					getSelectedCfg: function(t, e) {
						return h(t, e);
					},
				});
			v.registerShape('interval', 'rect', {
				draw: function(t, e) {
					var n = u(t),
						r = i(t.points);
					return (r = this.parsePath(r)), e.addShape('path', { attrs: y.mix(n, { path: r }) });
				},
				getMarkerCfg: function(t) {
					var e = u(t),
						n = t.isInCircle;
					return y.mix({ symbol: n ? 'circle' : 'square', radius: n ? 4.5 : 4 }, e);
				},
			}),
				v.registerShape('interval', 'hollowRect', {
					draw: function(t, e) {
						var n = c(t),
							r = i(t.points);
						return (r = this.parsePath(r)), e.addShape('path', { attrs: y.mix(n, { path: r }) });
					},
					getMarkerCfg: function(t) {
						var e = c(t),
							n = t.isInCircle;
						return y.mix({ symbol: n ? 'circle' : 'square', radius: n ? 4.5 : 4 }, e);
					},
				}),
				v.registerShape('interval', 'line', {
					getPoints: function(t) {
						return o(t);
					},
					draw: function(t, e) {
						var n = c(t);
						n.lineWidth = t.size || 1;
						var r = i(t.points);
						return (r = this.parsePath(r)), e.addShape('path', { attrs: y.mix(n, { path: r }) });
					},
					getMarkerCfg: function(t) {
						var e = c(t);
						return y.mix({ symbol: 'line', radius: 5 }, e);
					},
				}),
				v.registerShape('interval', 'tick', {
					getPoints: function(t) {
						return a(t);
					},
					draw: function(t, e) {
						var n = c(t),
							r = s(t.points);
						return (r = this.parsePath(r)), e.addShape('path', { attrs: y.mix(n, { path: r }) });
					},
					getMarkerCfg: function(t) {
						var e = c(t);
						return y.mix({ symbol: 'tick', radius: 5 }, e);
					},
				}),
				v.registerShape('interval', 'funnel', {
					getPoints: function(t) {
						return (t.size = 2 * t.size), r(t);
					},
					draw: function(t, e) {
						var n = u(t),
							r = l(t, !0);
						return (r = this.parsePath(r)), e.addShape('path', { attrs: y.mix(n, { path: r }) });
					},
					getMarkerCfg: function(t) {
						var e = u(t);
						return y.mix({ symbol: 'square', radius: 4 }, e);
					},
				}),
				v.registerShape('interval', 'pyramid', {
					getPoints: function(t) {
						return (t.size = 2 * t.size), r(t, !0);
					},
					draw: function(t, e) {
						var n = u(t),
							r = l(t, !1);
						return (r = this.parsePath(r)), e.addShape('path', { attrs: y.mix(n, { path: r }) });
					},
					getMarkerCfg: function(t) {
						var e = u(t);
						return y.mix({ symbol: 'square', radius: 4 }, e);
					},
				}),
				v.registerShape('interval', 'liquid-fill-gauge', {
					draw: function(t, e) {
						var n = this,
							r = 0,
							i = 1 / 0;
						y.each(t.points, function(t) {
							i > t.x && (i = t.x), (r += t.x);
						});
						var o = r / t.points.length,
							a = n.parsePoint({ x: o, y: 0.5 }),
							s = n.parsePoint({ x: i, y: 0.5 }),
							l = a.x - s.x,
							f = Math.min(l, s.y);
						return (
							g(
								a.x,
								a.y,
								t.y / (2 * a.y),
								1,
								[u(t).fill],
								e,
								e.addShape('circle', { attrs: { x: a.x, y: a.y, r: f } }),
								4 * f
							),
							e.addShape('circle', { attrs: y.mix(c(t), { x: a.x, y: a.y, r: f + f / 8 }) })
						);
					},
				});
			var w = {};
			v.registerShape('interval', 'liquid-fill-path', {
				draw: function(t, e) {
					var n = this,
						r = y.mix({}, u(t)),
						i = t.shape[1],
						o = 0,
						a = 1 / 0;
					y.each(t.points, function(t) {
						a > t.x && (a = t.x), (o += t.x);
					});
					var s = o / t.points.length,
						l = n.parsePoint({ x: s, y: 0.5 }),
						f = n.parsePoint({ x: a, y: 0.5 }),
						h = l.x - f.x,
						p = Math.min(h, f.y),
						d = void 0;
					if (w[i]) d = w[i];
					else {
						var v = x.parsePathString(i);
						w[i] = d = { segments: v };
					}
					var m = [];
					r.rotate && (m.push(['r', (r.rotate / 180) * Math.PI]), delete r.rotate);
					var b = e.addShape('path', { attrs: y.mix(r, { fillOpacity: 0, path: d.segments }) }),
						_ = y.cloneDeep(b.getBBox()),
						S = _.maxX - _.minX,
						M = _.maxY - _.minY,
						P = Math.max(S, M),
						C = (2 * p) / P;
					b.transform(m.concat([['s', C, C]]));
					var O = (C * S) / 2,
						A = (C * M) / 2;
					b.transform([['t', l.x - O, l.y - A]]),
						g(l.x, l.y, t.y / (2 * l.y), 1, [r.fill], e, b, 4 * f.y);
					var k = e.addShape('path', { attrs: y.mix(c(t), { path: d.segments }) });
					return k.transform(m.concat([['s', C, C], ['t', l.x - O, l.y - A]])), k;
				},
			}),
				v.registerShape('interval', 'top-line', {
					draw: function(t, e) {
						var n = u(t),
							r = t.style || {},
							o = [['M', t.points[1].x, t.points[1].y], ['L', t.points[2].x, t.points[2].y]],
							a = {
								stroke: r.stroke || 'white',
								lineWidth: r.lineWidth || 1,
								path: this.parsePath(o),
							},
							s = i(t.points);
						(s = this.parsePath(s)), delete n.stroke;
						var c = e.addShape('path', { attrs: y.mix(n, { zIndex: 0, path: s }) });
						return e.addShape('path', { zIndex: 1, attrs: a }), c;
					},
					getMarkerCfg: function(t) {
						var e = u(t),
							n = t.isInCircle;
						return y.mix({ symbol: n ? 'circle' : 'square', radius: n ? 4.5 : 4 }, e);
					},
				}),
				(t.exports = _);
		},
		function(t, e, n) {
			function r(t) {
				return y.mix(
					{},
					b.shape.line,
					{ stroke: t.color, lineWidth: t.size, strokeOpacity: t.opacity, opacity: t.opacity },
					t.style
				);
			}
			function i(t) {
				return y.mix(
					{},
					b.shape.line,
					{
						stroke: t.color,
						lineWidth: 2,
						strokeOpacity: t.opacity,
						opacity: t.opacity,
						radius: 6,
					},
					t.style
				);
			}
			function o(t, e, n, r) {
				for (var i = [], o = r.isStack, s = [], u = 0; t.length > u; u++) {
					var c = t[u],
						l = m.splitPoints(c);
					s.push(l[0]), i.push(l[1]);
				}
				var f = a(i, e, n, r),
					h = a(s, e, n, r);
				return o ? f : f.concat(h);
			}
			function a(t, e, n, r) {
				var i = void 0;
				if (e) {
					var o = r.constraint;
					n && t.length && t.push({ x: t[0].x, y: t[0].y }), (i = v.getSplinePath(t, !1, o));
				} else (i = v.getLinePath(t, !1)), n && i.push(['Z']);
				return i;
			}
			function s(t, e) {
				var n = t.points,
					r = t.isInCircle;
				return y.isArray(n[0].y) ? o(n, e, r, t) : a(n, e, r, t);
			}
			function u(t, e) {
				var n = [];
				return (
					y.each(t, function(r, i) {
						var o = t[i + 1];
						n.push(r), o && (n = n.concat(e(r, o)));
					}),
					n
				);
			}
			function c(t) {
				var e = [];
				return (
					y.each(t, function(t, n) {
						e.push(0 === n ? ['M', t.x, t.y] : ['L', t.x, t.y]);
					}),
					e
				);
			}
			function l(t, e) {
				return c(u(t.points, e));
			}
			function f(t, e, n, r) {
				r.moveTo(t - n, e), r.lineTo(t + n, e);
			}
			function h(t, e, n, r) {
				r.moveTo(t - n, e),
					r.arcTo(t - n / 2, e - n / 2, t, e, n / 2),
					r.lineTo(t, e),
					r.arcTo(t + n / 2, e + n / 2, t + n, e - n / 2, n / 2);
			}
			function p(t, e) {
				return y.mix({ symbol: e ? h : f }, i(t));
			}
			function d(t, e) {
				return y.mix({ symbol: e }, i(t));
			}
			function g(t, e, n) {
				var r = e.points[0];
				return n.addShape('circle', {
					attrs: y.mix({ x: r.x, y: r.y, r: 2, fill: e.color }, e.style),
				});
			}
			var y = n(0),
				v = n(13),
				m = n(46),
				x = n(5),
				b = n(1),
				_ = [1, 1],
				w = [5.5, 1],
				S = x.registerFactory('line', {
					defaultShapeType: 'line',
					getActiveCfg: function(t, e) {
						return { lineWidth: (e.lineWidth || 0) + 1 };
					},
					getDefaultPoints: function(t) {
						return m.splitPoints(t);
					},
					drawShape: function(t, e, n) {
						var r = this.getShape(t),
							i = void 0;
						return (
							(i = 1 === e.points.length && b.showSinglePoint ? g(this, e, n) : r.draw(e, n)),
							i &&
								(i.set('origin', e.origin),
								(i._id = e.splitedIndex ? e._id + e.splitedIndex : e._id),
								(i.name = this.name)),
							i
						);
					},
				});
			x.registerShape('line', 'line', {
				draw: function(t, e) {
					var n = r(t),
						i = s(t, !1);
					return e.addShape('path', { attrs: y.mix(n, { path: i }) });
				},
				getMarkerCfg: function(t) {
					return p(t);
				},
			}),
				x.registerShape('line', 'dot', {
					draw: function(t, e) {
						var n = r(t),
							i = s(t, !1);
						return e.addShape('path', { attrs: y.mix(n, { path: i, lineDash: _ }) });
					},
					getMarkerCfg: function(t) {
						var e = p(t, !1);
						return (e.lineDash = _), e;
					},
				}),
				x.registerShape('line', 'dash', {
					draw: function(t, e) {
						var n = r(t),
							i = s(t, !1);
						return e.addShape('path', { attrs: y.mix({ path: i, lineDash: w }, n) });
					},
					getMarkerCfg: function(t) {
						var e = p(t, !1);
						return (e.lineDash = e.lineDash || w), e;
					},
				}),
				x.registerShape('line', 'smooth', {
					draw: function(t, e) {
						var n = r(t),
							i = this._coord;
						t.constraint = [[i.start.x, i.end.y], [i.end.x, i.start.y]];
						var o = s(t, !0);
						return e.addShape('path', { attrs: y.mix(n, { path: o }) });
					},
					getMarkerCfg: function(t) {
						return p(t, !0);
					},
				}),
				x.registerShape('line', 'hv', {
					draw: function(t, e) {
						var n = r(t),
							i = l(t, function(t, e) {
								var n = [];
								return n.push({ x: e.x, y: t.y }), n;
							});
						return e.addShape('path', { attrs: y.mix(n, { path: i }) });
					},
					getMarkerCfg: function(t) {
						return d(t, function(t, e, n, r) {
							r.moveTo(t - n - 1, e - 2.5),
								r.lineTo(t, e - 2.5),
								r.lineTo(t, e + 2.5),
								r.lineTo(t + n + 1, e + 2.5);
						});
					},
				}),
				x.registerShape('line', 'vh', {
					draw: function(t, e) {
						var n = r(t),
							i = l(t, function(t, e) {
								var n = [];
								return n.push({ x: t.x, y: e.y }), n;
							});
						return e.addShape('path', { attrs: y.mix(n, { path: i }) });
					},
					getMarkerCfg: function(t) {
						return d(t, function(t, e, n, r) {
							r.moveTo(t - n - 1, e + 2.5),
								r.lineTo(t, e + 2.5),
								r.lineTo(t, e - 2.5),
								r.lineTo(t + n + 1, e - 2.5);
						});
					},
				}),
				x.registerShape('line', 'hvh', {
					draw: function(t, e) {
						var n = r(t),
							i = l(t, function(t, e) {
								var n = [],
									r = (e.x - t.x) / 2 + t.x;
								return n.push({ x: r, y: t.y }), n.push({ x: r, y: e.y }), n;
							});
						return e.addShape('path', { attrs: y.mix(n, { path: i }) });
					},
					getMarkerCfg: function(t) {
						return d(t, function(t, e, n, r) {
							r.moveTo(t - (n + 1), e + 2.5),
								r.lineTo(t - n / 2, e + 2.5),
								r.lineTo(t - n / 2, e - 2.5),
								r.lineTo(t + n / 2, e - 2.5),
								r.lineTo(t + n / 2, e + 2.5),
								r.lineTo(t + n + 1, e + 2.5);
						});
					},
				}),
				x.registerShape('line', 'vhv', {
					draw: function(t, e) {
						var n = r(t),
							i = l(t, function(t, e) {
								var n = [],
									r = (e.y - t.y) / 2 + t.y;
								return n.push({ x: t.x, y: r }), n.push({ x: e.x, y: r }), n;
							});
						return e.addShape('path', { attrs: y.mix(n, { path: i }) });
					},
					getMarkerCfg: function(t) {
						return d(t, function(t, e, n, r) {
							r.moveTo(t - 5, e + 2.5),
								r.lineTo(t - 5, e),
								r.lineTo(t, e),
								r.lineTo(t, e - 3),
								r.lineTo(t, e + 3),
								r.lineTo(t + 6.5, e + 3);
						});
					},
				}),
				(S.spline = S.smooth),
				(t.exports = S);
		},
		function(t, e, n) {
			function r(t) {
				return a.mix(
					{},
					u.shape.point,
					{ fill: t.color, fillOpacity: t.opacity, radius: t.size },
					t.style
				);
			}
			function i(t) {
				return a.mix(
					{},
					u.shape.hollowPoint,
					{ stroke: t.color, strokeOpacity: t.opacity, radius: t.size },
					t.style
				);
			}
			function o(t) {
				var e = t.points[0].x,
					n = t.points[0].y,
					r = t.size[0],
					i = t.size[1];
				return [
					['M', e - 0.5 * r, n - 0.5 * i],
					['L', e + 0.5 * r, n - 0.5 * i],
					['L', e + 0.5 * r, n + 0.5 * i],
					['L', e - 0.5 * r, n + 0.5 * i],
					['z'],
				];
			}
			var a = n(0),
				s = n(46),
				u = n(1),
				c = n(5),
				l = n(2),
				f = l.Marker,
				h = l.PathUtil,
				p = ['circle', 'square', 'bowtie', 'diamond', 'hexagon', 'triangle', 'triangle-down'],
				d = ['cross', 'tick', 'plus', 'hyphen', 'line', 'pointerLine', 'pointerArrow'],
				g = Math.sqrt(3);
			a.mix(f.Symbols, {
				hexagon: function(t, e, n, r) {
					var i = (n / 2) * g;
					r.moveTo(t, e - n),
						r.lineTo(t + i, e - n / 2),
						r.lineTo(t + i, e + n / 2),
						r.lineTo(t, e + n),
						r.lineTo(t - i, e + n / 2),
						r.lineTo(t - i, e - n / 2),
						r.closePath();
				},
				bowtie: function(t, e, n, r) {
					var i = n - 1.5;
					r.moveTo(t - n, e - i),
						r.lineTo(t + n, e + i),
						r.lineTo(t + n, e - i),
						r.lineTo(t - n, e + i),
						r.closePath();
				},
				cross: function(t, e, n, r) {
					r.moveTo(t - n, e - n),
						r.lineTo(t + n, e + n),
						r.moveTo(t + n, e - n),
						r.lineTo(t - n, e + n);
				},
				tick: function(t, e, n, r) {
					r.moveTo(t - n / 2, e - n),
						r.lineTo(t + n / 2, e - n),
						r.moveTo(t, e - n),
						r.lineTo(t, e + n),
						r.moveTo(t - n / 2, e + n),
						r.lineTo(t + n / 2, e + n);
				},
				plus: function(t, e, n, r) {
					r.moveTo(t - n, e), r.lineTo(t + n, e), r.moveTo(t, e - n), r.lineTo(t, e + n);
				},
				hyphen: function(t, e, n, r) {
					r.moveTo(t - n, e), r.lineTo(t + n, e);
				},
				line: function(t, e, n, r) {
					r.moveTo(t, e - n), r.lineTo(t, e + n);
				},
			});
			var y = c.registerFactory('point', {
				defaultShapeType: 'hollowCircle',
				getActiveCfg: function(t, e) {
					var n = e.radius,
						r = void 0;
					return (
						(r =
							(t && (0 === t.indexOf('hollow') || -1 !== a.indexOf(d, t))) || !t
								? e.stroke || e.strokeStyle
								: e.fill || e.fillStyle),
						{
							radius: n + 1,
							shadowBlur: n,
							shadowColor: r,
							stroke: r,
							strokeOpacity: 1,
							lineWidth: 1,
						}
					);
				},
				getDefaultPoints: function(t) {
					return s.splitPoints(t);
				},
			});
			c.registerShape('point', 'rect', {
				draw: function(t, e) {
					var n = r(t),
						i = o(t);
					return (i = this.parsePath(i)), e.addShape('path', { attrs: a.mix(n, { path: i }) });
				},
				getMarkerCfg: function(t) {
					var e = r(t);
					return (e.symbol = 'rect'), (e.radius = 4.5), e;
				},
			}),
				a.each(p, function(t) {
					c.registerShape('point', t, {
						draw: function(e, n) {
							var i = r(e);
							return n.addShape('Marker', { attrs: a.mix(i, { symbol: t, x: e.x, y: e.y }) });
						},
						getMarkerCfg: function(e) {
							var n = r(e);
							return (n.symbol = t), (n.radius = 4.5), n;
						},
					}),
						c.registerShape('point', 'hollow' + a.upperFirst(t), {
							draw: function(e, n) {
								var r = i(e);
								return n.addShape('Marker', { attrs: a.mix(r, { symbol: t, x: e.x, y: e.y }) });
							},
							getMarkerCfg: function(e) {
								var n = i(e);
								return (n.symbol = t), (n.radius = 4.5), n;
							},
						});
				}),
				a.each(d, function(t) {
					c.registerShape('point', t, {
						draw: function(e, n) {
							var r = i(e);
							return n.addShape('Marker', { attrs: a.mix(r, { symbol: t, x: e.x, y: e.y }) });
						},
						getMarkerCfg: function(e) {
							var n = i(e);
							return (n.symbol = t), (n.radius = 4.5), n;
						},
					});
				}),
				c.registerShape('point', 'image', {
					draw: function(t, e) {
						return (
							(t.points = this.parsePoints(t.points)),
							e.addShape('image', {
								attrs: {
									x: t.points[0].x - t.size / 2,
									y: t.points[0].y - t.size,
									width: t.size,
									height: t.size,
									img: t.shape[1],
								},
							})
						);
					},
				});
			var v = {};
			c.registerShape('point', 'path', {
				draw: function(t, e) {
					var n = a.mix({}, i(t), r(t)),
						o = t.shape[1],
						s = t.size || 10,
						u = void 0;
					if (v[o]) u = v[o];
					else {
						var c = h.parsePathString(o),
							l = a.flatten(c).filter(function(t) {
								return a.isNumber(t);
							});
						v[o] = u = { range: Math.max.apply(null, l) - Math.min.apply(null, l), segments: c };
					}
					var f = s / u.range,
						p = [];
					n.rotate && (p.push(['r', (n.rotate / 180) * Math.PI]), delete n.rotate);
					var d = e.addShape('path', { attrs: a.mix(n, { path: u.segments }) });
					return p.push(['s', f, f], ['t', t.x, t.y]), d.transform(p), d;
				},
			}),
				(t.exports = y);
		},
		function(t, e, n) {
			function r(t) {
				return a.mix(
					{},
					u.shape.polygon,
					{ stroke: t.color, fill: t.color, fillOpacity: t.opacity },
					t.style
				);
			}
			function i(t) {
				return a.mix(
					{},
					u.shape.hollowPolygon,
					{ stroke: t.color, strokeOpacity: t.opacity },
					t.style
				);
			}
			function o(t) {
				for (var e = t[0], n = 1, r = [['M', e.x, e.y]]; t.length > n; ) {
					var i = t[n];
					(i.x === t[n - 1].x && i.y === t[n - 1].y) ||
						(r.push(['L', i.x, i.y]),
						i.x === e.x &&
							i.y === e.y &&
							t.length - 1 > n &&
							((e = t[n + 1]), r.push(['Z']), r.push(['M', e.x, e.y]), n++)),
						n++;
				}
				return a.isEqual(r[r.length - 1], e) || r.push(['L', e.x, e.y]), r.push(['Z']), r;
			}
			var a = n(0),
				s = n(5),
				u = n(1),
				c = s.registerFactory('polygon', {
					defaultShapeType: 'polygon',
					getDefaultPoints: function(t) {
						var e = [];
						return (
							a.each(t.x, function(n, r) {
								e.push({ x: n, y: t.y[r] });
							}),
							e
						);
					},
					getActiveCfg: function(t, e) {
						var n = e.lineWidth || 1;
						return 'hollow' === t
							? { lineWidth: n + 1 }
							: { fillOpacity: (e.fillOpacity || e.opacity || 1) - 0.08 };
					},
					getSelectedCfg: function(t, e) {
						return e && e.style ? e.style : this.getActiveCfg(t, e);
					},
				});
			s.registerShape('polygon', 'polygon', {
				draw: function(t, e) {
					if (!a.isEmpty(t.points)) {
						var n = r(t),
							i = o(t.points);
						return (i = this.parsePath(i)), e.addShape('path', { attrs: a.mix(n, { path: i }) });
					}
				},
				getMarkerCfg: function(t) {
					return a.mix({ symbol: 'square', radius: 4 }, r(t));
				},
			}),
				s.registerShape('polygon', 'hollow', {
					draw: function(t, e) {
						if (!a.isEmpty(t.points)) {
							var n = i(t),
								r = o(t.points);
							return (r = this.parsePath(r)), e.addShape('path', { attrs: a.mix(n, { path: r }) });
						}
					},
					getMarkerCfg: function(t) {
						return a.mix({ symbol: 'square', radius: 4 }, r(t));
					},
				}),
				(t.exports = c);
		},
		function(t, e, n) {
			function r(t) {
				h.isArray(t) || (t = [t]);
				var e = t[0],
					n = t[t.length - 1],
					r = t.length > 1 ? t[1] : e;
				return {
					min: e,
					max: n,
					min1: r,
					max1: t.length > 3 ? t[3] : n,
					median: t.length > 2 ? t[2] : r,
				};
			}
			function i(t, e) {
				h.each(t, function(t) {
					e.push({ x: t[0], y: t[1] });
				});
			}
			function o(t) {
				return h.mix({}, d.shape.schema, { stroke: t.color, strokeOpacity: t.opacity }, t.style);
			}
			function a(t) {
				return h.mix(
					{},
					d.shape.schema,
					{ fill: t.color, stroke: t.color, fillOpacity: t.opacity },
					t.style
				);
			}
			function s(t, e, n) {
				var o = [],
					a = void 0,
					s = void 0;
				return (
					h.isArray(e)
						? ((s = r(e)),
						  (a = [
								[t - n / 2, s.max],
								[t + n / 2, s.max],
								[t, s.max],
								[t, s.max1],
								[t - n / 2, s.min1],
								[t - n / 2, s.max1],
								[t + n / 2, s.max1],
								[t + n / 2, s.min1],
								[t, s.min1],
								[t, s.min],
								[t - n / 2, s.min],
								[t + n / 2, s.min],
								[t - n / 2, s.median],
								[t + n / 2, s.median],
						  ]))
						: ((e = e || 0.5),
						  (s = r(t)),
						  (a = [
								[s.min, e - n / 2],
								[s.min, e + n / 2],
								[s.min, e],
								[s.min1, e],
								[s.min1, e - n / 2],
								[s.min1, e + n / 2],
								[s.max1, e + n / 2],
								[s.max1, e - n / 2],
								[s.max1, e],
								[s.max, e],
								[s.max, e - n / 2],
								[s.max, e + n / 2],
								[s.median, e - n / 2],
								[s.median, e + n / 2],
						  ])),
					i(a, o),
					o
				);
			}
			function u(t) {
				h.isArray(t) || (t = [t]);
				var e = t.sort(function(t, e) {
						return e > t ? 1 : -1;
					}),
					n = e.length;
				if (4 > n) for (var r = e[n - 1], i = 0; 4 - n > i; i++) e.push(r);
				return e;
			}
			function c(t, e, n) {
				var r = u(e);
				return [
					{ x: t, y: r[0] },
					{ x: t, y: r[1] },
					{ x: t - n / 2, y: r[2] },
					{ x: t - n / 2, y: r[1] },
					{ x: t + n / 2, y: r[1] },
					{ x: t + n / 2, y: r[2] },
					{ x: t, y: r[2] },
					{ x: t, y: r[3] },
				];
			}
			function l(t) {
				return [
					['M', t[0].x, t[0].y],
					['L', t[1].x, t[1].y],
					['M', t[2].x, t[2].y],
					['L', t[3].x, t[3].y],
					['M', t[4].x, t[4].y],
					['L', t[5].x, t[5].y],
					['L', t[6].x, t[6].y],
					['L', t[7].x, t[7].y],
					['L', t[4].x, t[4].y],
					['Z'],
					['M', t[8].x, t[8].y],
					['L', t[9].x, t[9].y],
					['M', t[10].x, t[10].y],
					['L', t[11].x, t[11].y],
					['M', t[12].x, t[12].y],
					['L', t[13].x, t[13].y],
				];
			}
			function f(t) {
				return [
					['M', t[0].x, t[0].y],
					['L', t[1].x, t[1].y],
					['M', t[2].x, t[2].y],
					['L', t[3].x, t[3].y],
					['L', t[4].x, t[4].y],
					['L', t[5].x, t[5].y],
					['Z'],
					['M', t[6].x, t[6].y],
					['L', t[7].x, t[7].y],
				];
			}
			var h = n(0),
				p = n(5),
				d = n(1),
				g = p.registerFactory('schema', {
					defaultShapeType: '',
					getActiveCfg: function(t, e) {
						if ('box' === t) {
							return { lineWidth: (e.lineWidth || 1) + 1 };
						}
						var n = e.fillOpacity || e.opacity || 1;
						return { fillOpacity: n - 0.15, strokeOpacity: n - 0.15 };
					},
					getSelectedCfg: function(t, e) {
						return e && e.style ? e.style : this.getActiveCfg(t, e);
					},
				});
			p.registerShape('schema', 'box', {
				getPoints: function(t) {
					return s(t.x, t.y, t.size);
				},
				draw: function(t, e) {
					var n = o(t),
						r = l(t.points);
					return (r = this.parsePath(r)), e.addShape('path', { attrs: h.mix(n, { path: r }) });
				},
				getMarkerCfg: function(t) {
					return {
						symbol: function(t, e, n, r) {
							var i = [e - 6, e - 3, e, e + 3, e + 6],
								o = s(t, i, n);
							r.moveTo(o[0].x + 1, o[0].y),
								r.lineTo(o[1].x - 1, o[1].y),
								r.moveTo(o[2].x, o[2].y),
								r.lineTo(o[3].x, o[3].y),
								r.moveTo(o[4].x, o[4].y),
								r.lineTo(o[5].x, o[5].y),
								r.lineTo(o[6].x, o[6].y),
								r.lineTo(o[7].x, o[7].y),
								r.lineTo(o[4].x, o[4].y),
								r.closePath(),
								r.moveTo(o[8].x, o[8].y),
								r.lineTo(o[9].x, o[9].y),
								r.moveTo(o[10].x + 1, o[10].y),
								r.lineTo(o[11].x - 1, o[11].y),
								r.moveTo(o[12].x, o[12].y),
								r.lineTo(o[13].x, o[13].y);
						},
						radius: 6,
						lineWidth: 1,
						stroke: t.color,
					};
				},
			}),
				p.registerShape('schema', 'candle', {
					getPoints: function(t) {
						return c(t.x, t.y, t.size);
					},
					draw: function(t, e) {
						var n = a(t),
							r = f(t.points);
						return (r = this.parsePath(r)), e.addShape('path', { attrs: h.mix(n, { path: r }) });
					},
					getMarkerCfg: function(t) {
						return {
							symbol: function(t, e, n, r) {
								e = [e + 7.5, e + 3, e - 3, e - 7.5];
								var i = c(t, e, n);
								r.moveTo(i[0].x, i[0].y),
									r.lineTo(i[1].x, i[1].y),
									r.moveTo(i[2].x, i[2].y),
									r.lineTo(i[3].x, i[3].y),
									r.lineTo(i[4].x, i[4].y),
									r.lineTo(i[5].x, i[5].y),
									r.closePath(),
									r.moveTo(i[6].x, i[6].y),
									r.lineTo(i[7].x, i[7].y);
							},
							lineWidth: 1,
							stroke: t.color,
							fill: t.color,
							radius: 6,
						};
					},
				}),
				(t.exports = g);
		},
		function(t, e, n) {
			function r(t) {
				return o.mix(
					{},
					s.shape.venn,
					{ stroke: t.color, fill: t.color, fillOpacity: t.opacity },
					t.style
				);
			}
			function i(t) {
				return o.mix(
					{},
					s.shape.hollowVenn,
					{ stroke: t.color, strokeOpacity: t.opacity },
					t.style
				);
			}
			var o = n(0),
				a = n(5),
				s = n(1),
				u = n(2),
				c = u.PathUtil,
				l = a.registerFactory('venn', {
					defaultShapeType: 'venn',
					getDefaultPoints: function(t) {
						var e = [];
						return (
							o.each(t.x, function(n, r) {
								e.push({ x: n, y: t.y[r] });
							}),
							e
						);
					},
					getActiveCfg: function(t, e) {
						var n = e.lineWidth || 1;
						return 'hollow' === t
							? { lineWidth: n + 1 }
							: { fillOpacity: (e.fillOpacity || e.opacity || 1) - 0.08 };
					},
					getSelectedCfg: function(t, e) {
						return e && e.style ? e.style : this.getActiveCfg(t, e);
					},
				});
			a.registerShape('venn', 'venn', {
				draw: function(t, e) {
					var n = t.origin._origin,
						i = n.path,
						a = r(t),
						s = c.parsePathString(i);
					return e.addShape('path', { attrs: o.mix(a, { path: s }) });
				},
				getMarkerCfg: function(t) {
					return o.mix({ symbol: 'circle', radius: 4 }, r(t));
				},
			}),
				a.registerShape('venn', 'hollow', {
					draw: function(t, e) {
						var n = t.origin._origin,
							r = n.path,
							a = i(t),
							s = c.parsePathString(r);
						return e.addShape('path', { attrs: o.mix(a, { path: s }) });
					},
					getMarkerCfg: function(t) {
						return o.mix({ symbol: 'circle', radius: 4 }, r(t));
					},
				}),
				(t.exports = l);
		},
		function(t, e, n) {
			function r(t, e, n, r) {
				var i = [],
					o = void 0,
					s = void 0,
					u = !!r,
					c = void 0,
					l = void 0;
				if (u) {
					(c = [1 / 0, 1 / 0]), (l = [-1 / 0, -1 / 0]);
					for (var f = 0, h = t.length; h > f; f++) {
						var p = t[f];
						(c = a.min([], c, p)), (l = a.max([], l, p));
					}
					(c = a.min([], c, r[0])), (l = a.max([], l, r[1]));
				}
				for (var d = 0, g = t.length; g > d; d++) {
					var y = t[d];
					if (n) (o = t[d ? d - 1 : g - 1]), (s = t[(d + 1) % g]);
					else {
						if (0 === d || d === g - 1) {
							i.push(y);
							continue;
						}
						(o = t[d - 1]), (s = t[d + 1]);
					}
					var v = [];
					(v = a.sub(v, s, o)), (v = a.scale(v, v, e));
					var m = a.distance(y, o),
						x = a.distance(y, s),
						b = m + x;
					0 !== b && ((m /= b), (x /= b));
					var _ = a.scale([], v, -m),
						w = a.scale([], v, x),
						S = a.add([], y, _),
						M = a.add([], y, w);
					u &&
						((S = a.max([], S, c)),
						(S = a.min([], S, l)),
						(M = a.max([], M, c)),
						(M = a.min([], M, l))),
						i.push(S),
						i.push(M);
				}
				return n && i.push(i.shift()), i;
			}
			function i(t, e, n) {
				for (var i = !!e, o = [], a = 0, s = t.length; s > a; a += 2) o.push([t[a], t[a + 1]]);
				for (
					var u = r(o, 0.4, i, n), c = o.length, l = [], f = void 0, h = void 0, p = void 0, d = 0;
					c - 1 > d;
					d++
				)
					(f = u[2 * d]),
						(h = u[2 * d + 1]),
						(p = o[d + 1]),
						l.push(['C', f[0], f[1], h[0], h[1], p[0], p[1]]);
				return (
					i &&
						((f = u[c]),
						(h = u[c + 1]),
						(p = o[0]),
						l.push(['C', f[0], f[1], h[0], h[1], p[0], p[1]])),
					l
				);
			}
			var o = n(2).MatrixUtil,
				a = o.vec2;
			t.exports = { catmullRom2bezier: i };
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function a(t) {
				return l.isArray(t) ? t : l.isString(t) ? t.split('*') : [t];
			}
			var s = n(4),
				u = n(73),
				c = n(1),
				l = n(0),
				f = n(448),
				h = f.venn,
				p = f.scaleSolution,
				d = f.circlePath,
				g = f.intersectionAreaPath,
				y = f.computeTextCentres;
			n(213);
			var v = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return (e.type = 'venn'), (e.shapeType = 'venn'), (e.generatePoints = !0), e;
					}),
					(e.prototype._initAttrs = function() {
						var t = this,
							e = t.get('view'),
							n = this.get('attrs'),
							r = t.get('attrOptions'),
							i = t.get('labelCfg'),
							o = t.get('data'),
							s = r.size ? r.size.field : 'size',
							f = i ? i.fields[0] : 'sets';
						t.set('labelCfg', null),
							o.forEach(function(t) {
								(t.sets = t[f]), (t.size = t[s]);
							});
						var v = h(o),
							m = t.get('coord'),
							x = [Math.min(m.x.end, m.x.start), Math.max(m.x.end, m.x.start)],
							b = [Math.min(m.y.end, m.y.start), Math.max(m.y.end, m.y.start)],
							_ = x[1] - x[0],
							w = b[1] - b[0],
							S = t.get('styleOptions'),
							M = S && l.isObject(S.style) ? S.style.padding : 0;
						l.isFinite(M) || (M = 0);
						var P = p(v, _, w, M),
							C = y(P, o);
						o.forEach(function(t) {
							var e = t.sets,
								n = e.join(',');
							if (((t.id = n), 1 === e.length)) {
								var r = P[n];
								(t.path = d(r.x, r.y, r.radius)), l.assign(t, r);
							} else {
								var i = e.map(function(t) {
										return P[t];
									}),
									o = g(i);
								/[zZ]$/.test(o) || (o += 'Z'), (t.path = o);
								l.assign(t, C[n] || { x: 0, y: 0 });
							}
						}),
							e.set('data', o),
							t.set('data', o),
							t.set('dataArray', o),
							t.position('x*y');
						for (var O in r)
							if (r.hasOwnProperty(O)) {
								var A = r[O],
									k = l.upperFirst(O),
									I = a(A.field);
								'position' === O && (A.coord = m);
								for (var T = [], E = 0; I.length > E; E++) {
									var j = I[E],
										L = t._createScale(j, o);
									'color' === O &&
										l.isNil(A.values) &&
										((A.values =
											L.values.length > 8
												? L.values.length > 16
													? c.colors_24
													: c.colors_16
												: c.colors),
										l.isNil(A.values) && (A.values = c.colors)),
										T.push(L);
								}
								'position' === O &&
									(T[0].change({ nice: !1, min: x[0], max: x[1] }),
									T[1].change({ nice: !1, min: b[0], max: b[1] })),
									(A.scales = T);
								var D = new u[k](A);
								n[O] = D;
							}
					}),
					(e.prototype.paint = function() {
						t.prototype.paint.call(this);
						var e = this,
							n = e.get('dataArray'),
							r = e.get('shapeContainer');
						n.forEach(function(t) {
							var n = e.getDrawCfg(t[0]),
								i = n.origin._origin;
							r.addShape('text', {
								attrs: l.mix(
									{},
									{
										x: i.x,
										y: i.y,
										text: i.label || '',
										fontSize: 18,
										fill: 'hollow' === n.shape ? n.color : '#666',
										textAlign: 'center',
										textBaseline: 'middle',
									},
									n.style ? n.style.textStyle : {}
								),
							});
						});
					}),
					e
				);
			})(s);
			(s.Venn = v), (t.exports = v);
		},
		function(t, e, n) {
			var r = n(0),
				i = n(89),
				o = n(1);
			t.exports = function(t) {
				var e = t.min,
					n = t.max,
					a = t.interval,
					s = [],
					u = t.minCount || 5,
					c = t.maxCount || 7,
					l = u === c,
					f = r.isNil(t.minLimit) ? -1 / 0 : t.minLimit,
					h = r.isNil(t.maxLimit) ? 1 / 0 : t.maxLimit,
					p = (u + c) / 2,
					d = p,
					g = t.snapArray ? t.snapArray : l ? o.snapCountArray : o.snapArray;
				if (
					(e === f && n === h && l && (a = (n - e) / (d - 1)),
					r.isNil(e) && (e = 0),
					r.isNil(n) && (n = 0),
					n === e &&
						(0 === e ? (n = 1) : e > 0 ? (e = 0) : (n = 0),
						n - e >= 5 || a || 1 > n - e || (a = 1)),
					r.isNil(a))
				) {
					(a = i.snapFactorTo((n - e) / (p - 1), g, 'ceil')),
						c !== u &&
							((d = parseInt((n - e) / a, 10)),
							d > c && (d = c),
							u > d && (d = u),
							(a = i.snapFactorTo((n - e) / (d - 1), g, 'floor')));
				}
				if (t.interval || c !== u)
					(n = Math.min(i.snapMultiple(n, a, 'ceil'), h)),
						(e = Math.max(i.snapMultiple(e, a, 'floor'), f)),
						(d = Math.round((n - e) / a)),
						(e = r.fixedBase(e, a)),
						(n = r.fixedBase(n, a));
				else {
					p = parseInt(p, 10);
					var y = (n + e) / 2,
						v = i.snapMultiple(y, a, 'ceil'),
						m = Math.floor((p - 2) / 2),
						x = v + m * a,
						b = void 0;
					(b = p % 2 == 0 ? v - m * a : v - (m + 1) * a),
						n > x && (x += a),
						b > e && (b -= a),
						(n = r.fixedBase(x, a)),
						(e = r.fixedBase(b, a));
				}
				(n = Math.min(n, h)), (e = Math.max(e, f)), s.push(e);
				for (var _ = 1; d > _; _++) {
					var w = r.fixedBase(a * _ + e, a);
					n > w && s.push(w);
				}
				return (
					n > s[s.length - 1] && s.push(n), { min: e, max: n, interval: a, count: d, ticks: s }
				);
			};
		},
		function(t, e, n) {
			function r(t) {
				return new Date(t).getFullYear();
			}
			function i(t) {
				return new Date(t, 0, 1).getTime();
			}
			function o(t) {
				return new Date(t).getMonth();
			}
			function a(t, e) {
				var n = r(t),
					i = r(e),
					a = o(t);
				return 12 * (i - n) + ((o(e) - a) % 12);
			}
			function s(t, e) {
				return new Date(t, e, 1).getTime();
			}
			function u(t, e) {
				return Math.ceil((e - t) / g);
			}
			function c(t, e) {
				return Math.ceil((e - t) / d);
			}
			function l(t, e) {
				return Math.ceil((e - t) / 6e4);
			}
			var f = n(0),
				h = n(89),
				p = [1, 2, 4, 6, 8, 12],
				d = 36e5,
				g = 864e5;
			t.exports = function(t) {
				var e = t.minInterval,
					n = [],
					y = t.min,
					v = t.max,
					m = t.interval,
					x = void 0;
				if ((v === y && (v = y + g), f.isNil(m))) {
					var b = v - y,
						_ = g,
						w = 365 * _;
					(m = parseInt(b / (t.maxCount || 6), 10)), e && e > m && (m = e);
					var S = m / w,
						M = r(y);
					if (S > 0.51) {
						for (var P = Math.ceil(S), C = r(v), O = M; C + P >= O; O += P) n.push(i(O));
						m = null;
					} else if (S > 0.0834) {
						for (var A = Math.ceil(S / 0.0834), k = o(y), I = a(y, v), T = 0; I + A >= T; T += A)
							n.push(s(M, T + k));
						m = null;
					} else if (m > 0.5 * _) {
						var E = new Date(y),
							j = E.getFullYear(),
							L = E.getMonth(y),
							D = E.getDate(),
							F = Math.ceil(m / _),
							R = u(y, v);
						m = F * _;
						for (var B = 0; R + F > B; B += F) n.push(new Date(j, L, D + B).getTime());
					} else if (m > d) {
						var N = new Date(y),
							z = N.getFullYear(),
							V = N.getMonth(y),
							G = N.getDate(),
							Y = N.getHours(),
							W = h.snapTo(p, Math.ceil(m / d)),
							q = c(y, v);
						m = W * d;
						for (var X = 0; q + W >= X; X += W) n.push(new Date(z, V, G, Y + X).getTime());
					} else if (m > 6e4) {
						var H = l(y, v),
							U = Math.ceil(m / 6e4);
						m = 6e4 * U;
						for (var $ = 0; H + U >= $; $ += U) n.push(y + 6e4 * $);
					} else {
						1e3 > m && (m = 1e3), (y = 1e3 * Math.floor(y / 1e3));
						var Z = Math.ceil((v - y) / 1e3),
							Q = Math.ceil(m / 1e3);
						m = 1e3 * Q;
						for (var J = 0; Z + Q > J; J += Q) n.push(y + 1e3 * J);
					}
				}
				if (!n.length) {
					(y = 1e3 * Math.floor(y / 1e3)), (v = 1e3 * Math.ceil(v / 1e3)), (x = (v - y) / m);
					for (var K = 0; x >= K; K++) n.push(f.fixedBase(m * K + y, m));
				}
				return { max: v, min: y, interval: m, ticks: n, count: n.length };
			};
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(27),
				s = n(0);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return s.mix({}, e, { isIdentity: !0, type: 'identity', value: null });
					}),
					(e.prototype.getText = function() {
						return '' + this.value;
					}),
					(e.prototype.scale = function(t) {
						return this.value !== t && s.isNumber(t) ? t : this.range[0];
					}),
					(e.prototype.invert = function() {
						return this.value;
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function a(t, e) {
				return 1 === t ? 1 : Math.log(e) / Math.log(t);
			}
			var s = n(28),
				u = n(0);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return u.mix({}, e, { type: 'log', base: 2, tickCount: 10, _minTick: null });
					}),
					(e.prototype.calculateTicks = function() {
						var t = this,
							e = t.base,
							n = void 0;
						if (0 > t.min) throw Error('The minimum value must be greater than zero!');
						var r = a(e, t.max);
						if (t.min > 0) n = Math.floor(a(e, t.min));
						else {
							var i = t.values,
								o = t.max;
							u.each(i, function(t) {
								t > 0 && o > t && (o = t);
							}),
								o === t.max && (o = t.max / e),
								o > 1 && (o = 1),
								(n = Math.floor(a(e, o))),
								(t._minTick = n),
								(t.positiveMin = o);
						}
						for (
							var s = r - n, c = t.tickCount, l = Math.ceil(s / c), f = [], h = n;
							r + l > h;
							h += l
						)
							f.push(Math.pow(e, h));
						return 0 === t.min && f.unshift(0), f;
					}),
					(e.prototype._getScalePercent = function(t) {
						var e = this.max,
							n = this.min;
						if (e === n) return 0;
						if (0 >= t) return 0;
						var r = this.base,
							i = this.positiveMin;
						i && (n = (1 * i) / r);
						return i > t ? t / i / (a(r, e) - a(r, n)) : (a(r, t) - a(r, n)) / (a(r, e) - a(r, n));
					}),
					(e.prototype.scale = function(t) {
						var e = this._getScalePercent(t),
							n = this.rangeMin();
						return n + e * (this.rangeMax() - n);
					}),
					(e.prototype.invert = function(t) {
						var e = this.base,
							n = a(e, this.max),
							r = this.rangeMin(),
							i = this.rangeMax() - r,
							o = void 0,
							s = this.positiveMin;
						if (s) {
							if (0 === t) return 0;
							o = a(e, s / e);
							var u = (1 / (n - o)) * i;
							if (u > t) return (t / u) * s;
						} else o = a(e, this.min);
						var c = (t - r) / i,
							l = c * (n - o) + o;
						return Math.pow(e, l);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function a(t, e) {
				var n = Math.E;
				return Math.pow(n, Math.log(e) / t);
			}
			var s = n(28),
				u = n(0);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return u.mix({}, e, { type: 'pow', exponent: 2, tickCount: 10 });
					}),
					(e.prototype.calculateTicks = function() {
						var t = this,
							e = t.exponent,
							n = void 0,
							r = Math.ceil(a(e, t.max));
						if ((n = 0 > t.min ? 0 : Math.floor(a(e, t.min))) > r) {
							var i = r;
							(r = n), (n = i);
						}
						for (
							var o = r - n, s = t.tickCount, u = Math.ceil(o / s), c = [], l = n;
							r + u > l;
							l += u
						)
							c.push(Math.pow(l, e));
						return c;
					}),
					(e.prototype._getScalePercent = function(t) {
						var e = this.max,
							n = this.min;
						if (e === n) return 0;
						var r = this.exponent;
						return (a(r, t) - a(r, n)) / (a(r, e) - a(r, n));
					}),
					(e.prototype.scale = function(t) {
						var e = this._getScalePercent(t),
							n = this.rangeMin();
						return n + e * (this.rangeMax() - n);
					}),
					(e.prototype.invert = function(t) {
						var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin()),
							n = this.exponent,
							r = a(n, this.max),
							i = a(n, this.min),
							o = e * (r - i) + i;
						return Math.pow(o, n);
					}),
					e
				);
			})(s);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(90),
				s = n(0),
				u = n(114),
				c = n(88),
				l = n(92);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return s.mix({}, e, { type: 'timeCat', mask: 'YYYY-MM-DD', tickCount: 7 });
					}),
					(e.prototype.init = function() {
						var t = this,
							e = this.values;
						s.each(e, function(n, r) {
							e[r] = t._toTimeStamp(n);
						}),
							e.sort(function(t, e) {
								return t - e;
							}),
							t.ticks || (t.ticks = this.calculateTicks(!1));
					}),
					(e.prototype.calculateTicks = function(t) {
						var e = this,
							n = e.tickCount,
							r = void 0;
						if (n) {
							var i = c({ maxCount: n, data: e.values });
							r = i.ticks;
						} else r = e.values;
						return (
							t &&
								s.each(r, function(t, n) {
									r[n] = u.format(t, e.mask);
								}),
							r
						);
					}),
					(e.prototype.translate = function(t) {
						t = this._toTimeStamp(t);
						var e = this.values.indexOf(t);
						return -1 === e && (e = s.isNumber(t) && this.values.length > t ? t : NaN), e;
					}),
					(e.prototype.scale = function(t) {
						var e = this.rangeMin(),
							n = this.rangeMax(),
							r = this.translate(t),
							i = void 0;
						return (
							(i = 1 === this.values.length ? r : r > -1 ? r / (this.values.length - 1) : 0),
							e + i * (n - e)
						);
					}),
					(e.prototype.getText = function(t) {
						var e = '',
							n = this.translate(t);
						e = n > -1 ? this.values[n] : t;
						var r = this.formatter;
						return (e = parseInt(e, 10)), (e = r ? r(e) : u.format(e, this.mask));
					}),
					(e.prototype.getTicks = function() {
						var t = this,
							e = this.ticks,
							n = [];
						return (
							s.each(e, function(e) {
								var r = void 0;
								(r = s.isObject(e)
									? e
									: { text: s.isString(e) ? e : t.getText(e), tickValue: e, value: t.scale(e) }),
									n.push(r);
							}),
							n
						);
					}),
					(e.prototype._toTimeStamp = function(t) {
						return l.toTimeStamp(t);
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function o(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			var a = n(28),
				s = n(0),
				u = n(217),
				c = n(114),
				l = n(92);
			t.exports = (function(t) {
				function e() {
					return r(this, e), i(this, t.apply(this, arguments));
				}
				return (
					o(e, t),
					(e.prototype.getDefaultCfg = function() {
						var e = t.prototype.getDefaultCfg.call(this);
						return s.mix({}, e, { type: 'time', mask: 'YYYY-MM-DD' });
					}),
					(e.prototype.init = function() {
						var e = this,
							n = e.values;
						if (n && n.length) {
							var r = [],
								i = 1 / 0,
								o = i,
								a = 0;
							s.each(n, function(t) {
								var n = e._toTimeStamp(t);
								if (isNaN(n)) throw new TypeError('Invalid Time: ' + t);
								i > n ? ((o = i), (i = n)) : o > n && (o = n), n > a && (a = n), r.push(n);
							}),
								n.length > 1 && (e.minTickInterval = o - i),
								(s.isNil(e.min) || e._toTimeStamp(e.min) > i) && (e.min = i),
								(s.isNil(e.max) || e._toTimeStamp(e.max) < a) && (e.max = a);
						}
						t.prototype.init.call(this);
					}),
					(e.prototype.calculateTicks = function() {
						var t = this,
							e = t.min,
							n = t.max,
							r = t.tickCount;
						return u({
							min: e,
							max: n,
							minCount: r,
							maxCount: r,
							interval: t.tickInterval,
							minInterval: t.minTickInterval,
						}).ticks;
					}),
					(e.prototype.getText = function(t) {
						var e = this.formatter;
						return (t = this.translate(t)), (t = e ? e(t) : c.format(t, this.mask));
					}),
					(e.prototype.scale = function(e) {
						return s.isString(e) && (e = this.translate(e)), t.prototype.scale.call(this, e);
					}),
					(e.prototype.translate = function(t) {
						return this._toTimeStamp(t);
					}),
					(e.prototype._toTimeStamp = function(t) {
						return l.toTimeStamp(t);
					}),
					e
				);
			})(a);
		},
		function(t, e, n) {
			var r, i;
			t.exports = n(0).deepMix({}, n(93), {
				background: { fill: '#1F1F1F', radius: 2 },
				plotBackground: { fill: '#1F1F1F' },
				axis: {
					top: {
						label: { textStyle: { fill: '#A6A6A6' } },
						line: { stroke: '#737373' },
						tickLine: { stroke: '#737373' },
					},
					bottom: {
						label: { textStyle: { fill: '#A6A6A6' } },
						line: { stroke: '#737373' },
						tickLine: { stroke: '#737373' },
					},
					left: {
						label: { textStyle: { fill: '#A6A6A6' } },
						grid: { lineStyle: { stroke: '#404040' } },
					},
					right: {
						label: { textStyle: { fill: '#A6A6A6' } },
						grid: { lineStyle: { stroke: '#404040' } },
					},
					circle: {
						label: { textStyle: { fill: '#A6A6A6' } },
						line: { stroke: '#737373' },
						tickLine: { stroke: '#737373' },
						grid: { lineStyle: { stroke: '#404040' } },
					},
					radius: {
						label: { textStyle: { fill: '#A6A6A6' } },
						line: { stroke: '#737373' },
						tickLine: { stroke: '#737373' },
						grid: { lineStyle: { stroke: '#404040' } },
					},
					helix: { line: { stroke: '#737373' }, tickLine: { stroke: '#737373' } },
				},
				label: { textStyle: { fill: '#A6A6A6' } },
				legend: {
					right: { textStyle: { fill: '#737373' }, unCheckColor: '#bfbfbf' },
					left: { textStyle: { fill: '#737373' }, unCheckColor: '#bfbfbf' },
					top: { textStyle: { fill: '#737373' }, unCheckColor: '#bfbfbf' },
					bottom: { textStyle: { fill: '#737373' }, unCheckColor: '#bfbfbf' },
					html: ((r = {}), (r['g2-legend'] = { color: '#D9D9D9' }), r),
					gradient: { textStyle: { fill: '#D9D9D9' }, lineStyle: { stroke: '#404040' } },
				},
				tooltip: ((i = {}), (i['g2-tooltip'] = { color: '#D9D9D9' }), i),
				tooltipCrosshairsRect: { type: 'rect', style: { fill: '#fff', opacity: 0.1 } },
				tooltipCrosshairsLine: { style: { stroke: 'rgba(255, 255, 255, 0.45)' } },
				guide: {
					line: { text: { style: { fill: '#A6A6A6' } } },
					text: { style: { fill: '#A6A6A6' } },
					region: { style: { lineWidth: 0, fill: '#000', fillOpacity: 0.04 } },
				},
			});
		},
		function(t, e, n) {
			t.exports = { default: n(93), dark: n(223) };
		},
		function(t, e, n) {
			var r = n(1);
			setTimeout(function() {
				if (r.trackable) {
					var t = new Image(),
						e = {
							pg: document.URL,
							r: new Date().getTime(),
							g2: !0,
							version: r.version,
							page_type: 'syslog',
						};
					t.src =
						'https://kcart.alipay.com/web/bi.do?BIProfile=merge&d=' +
						encodeURIComponent(JSON.stringify([e]));
				}
			}, 3e3);
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var r = n(9);
			e.default = (function(t) {
				return t && t.__esModule ? t : { default: t };
			})(r).default.generateBaseTypedComponent('Axis');
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function i(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function a(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var s = (function() {
					function t(t, e) {
						for (var n = 0; e.length > n; n++) {
							var r = e[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(t, r.key, r);
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e;
					};
				})(),
				u = n(41),
				c = r(u),
				l = n(11),
				f = r(l);
			(0, r(n(139)).default)(c.default.PureComponent, '`React.PureComponent` needs React >=15.3.0');
			var h = (function(t) {
				function e() {
					return (
						i(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					);
				}
				return (
					a(e, t),
					s(e, [
						{
							key: 'render',
							value: function() {
								var t = this.props;
								return c.default.createElement(
									'div',
									{ style: { width: t.width, height: t.height } },
									t.placeholder
								);
							},
						},
					]),
					e
				);
			})(c.default.PureComponent || c.default.Component);
			(h.propTypes = {
				width: f.default.oneOfType([f.default.string, f.default.number]),
				height: f.default.oneOfType([f.default.string, f.default.number]),
				placeholder: f.default.node,
			}),
				(h.defaultProps = {
					width: '100%',
					placeholder: c.default.createElement(
						'div',
						{ style: { position: 'relative', top: '48%', textAlign: 'center' } },
						'暂无数据'
					),
				}),
				(e.default = h);
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function i(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function a(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			function s(t) {
				var e = !0;
				return (null != t && 0 !== t.length) || (e = !1), !!e;
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var u =
					Object.assign ||
					function(t) {
						for (var e = 1; arguments.length > e; e++) {
							var n = arguments[e];
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
						}
						return t;
					},
				c = (function() {
					function t(t, e) {
						for (var n = 0; e.length > n; n++) {
							var r = e[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(t, r.key, r);
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e;
					};
				})(),
				l = n(41),
				f = r(l),
				h = n(18),
				p = (r(h), n(229)),
				d = r(p),
				g = n(227),
				y = r(g),
				v = n(11);
			r(v);
			e.default = (function(t) {
				function e() {
					var t, n, r, a;
					i(this, e);
					for (var u = arguments.length, c = Array(u), l = 0; u > l; l++) c[l] = arguments[l];
					return (
						(n = r = o(
							this,
							(t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(c))
						)),
						(r._refCallback = function(t) {
							t && (r.chart = t.getG2Instance());
						}),
						(r.hasViewSource = function() {
							var t = !1;
							return (
								f.default.Children.map(r.props.children, function(e) {
									!t &&
										'function' == typeof e.type &&
										'View' === e.type.name &&
										e.props.data &&
										s(e.props.data) &&
										(t = !0);
								}),
								t
							);
						}),
						(a = n),
						o(r, a)
					);
				}
				return (
					a(e, t),
					c(e, [
						{
							key: 'getG2Instance',
							value: function() {
								return this.chart;
							},
						},
						{
							key: 'render',
							value: function() {
								var t = this.props,
									e = t.data,
									n = t.width,
									r = t.height,
									i = t.placeholder;
								return f.default.createElement(
									'div',
									{ className: t.className, style: t.style },
									s(e) || this.hasViewSource() || !i
										? f.default.createElement(d.default, u({ ref: this._refCallback }, this.props))
										: f.default.createElement(y.default, {
												width: n,
												height: r,
												placeholder: !0 === i ? void 0 : i,
										  })
								);
							},
						},
					]),
					e
				);
			})(f.default.PureComponent || f.default.Component);
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function i(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function a(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var s =
					Object.assign ||
					function(t) {
						for (var e = 1; arguments.length > e; e++) {
							var n = arguments[e];
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
						}
						return t;
					},
				u = (function() {
					function t(t, e) {
						for (var n = 0; e.length > n; n++) {
							var r = e[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(t, r.key, r);
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e;
					};
				})(),
				c = n(41),
				l = r(c),
				f = n(11),
				h = r(f),
				p = n(242),
				d = r(p),
				g = (function(t) {
					function e(t) {
						i(this, e);
						var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
						return (
							y.call(n),
							(n.name = 'Chart'),
							(n.gId = 0),
							(n.id = n.createId()),
							(n.g2Processor = new d.default()),
							n
						);
					}
					return (
						a(e, t),
						u(e, [
							{
								key: 'getChildContext',
								value: function() {
									return {
										addElement: this.addElement,
										updateElement: this.updateElement,
										deleteElement: this.deleteElement,
										createId: this.createId,
										getParentInfo: this.getParentInfo,
										getViewId: this.getViewId,
									};
								},
							},
							{
								key: 'componentDidMount',
								value: function() {
									this.addElement(
										this.name,
										this.id,
										s({}, this.props, { container: this.containerWrap })
									),
										(this.chart = this.g2Processor.createG2Instance()),
										this.notifyG2Instance();
								},
							},
							{
								key: 'componentDidUpdate',
								value: function() {
									this.updateElement(
										this.name,
										this.id,
										s({}, this.props, { container: this.containerWrap })
									);
									var t = this.g2Processor.batchedUpdate();
									this.chart !== t && ((this.chart = t), this.notifyG2Instance());
								},
							},
							{
								key: 'componentWillUnmount',
								value: function() {
									this.g2Processor.destory(), (this.chart = null), (this.containerWrap = null);
								},
							},
							{
								key: 'getG2Instance',
								value: function() {
									return this.chart;
								},
							},
							{
								key: 'notifyG2Instance',
								value: function() {
									this.props.onGetG2Instance && this.props.onGetG2Instance(this.chart);
								},
							},
							{
								key: 'render',
								value: function() {
									return l.default.createElement(
										'div',
										{ ref: this.refHandle },
										this.props.children
									);
								},
							},
						]),
						e
					);
				})(c.Component);
			(g.propTypes = {
				data: h.default.oneOfType([h.default.arrayOf(h.default.object), h.default.object]),
				scale: h.default.oneOfType([h.default.object, h.default.array]),
				animate: h.default.bool,
				width: h.default.number,
				height: h.default.number.isRequired,
				onGetG2Instance: h.default.func,
			}),
				(g.childContextTypes = {
					addElement: h.default.func,
					updateElement: h.default.func,
					deleteElement: h.default.func,
					createId: h.default.func,
					getParentInfo: h.default.func,
					getViewId: h.default.func,
				});
			var y = function() {
				var t = this;
				(this.getViewId = function() {}),
					(this.getParentInfo = function() {
						return { id: t.id, name: t.name };
					}),
					(this.createId = function() {
						return (t.gId += 1);
					}),
					(this.addElement = function(e, n, r, i, o) {
						return t.g2Processor.addElement(e, n, r, i, o);
					}),
					(this.updateElement = function(e, n, r, i, o) {
						t.g2Processor.updateElement(e, n, r, i, o);
					}),
					(this.deleteElement = function(e, n, r) {
						t.g2Processor.deleteElement(e, n, r);
					}),
					(this.refHandle = function(e) {
						t.containerWrap || (t.containerWrap = e);
					});
			};
			e.default = g;
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var r = n(9);
			e.default = (function(t) {
				return t && t.__esModule ? t : { default: t };
			})(r).default.generateBaseTypedComponent('Coord');
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), n(183);
			var r = n(9);
			e.default = (function(t) {
				return t && t.__esModule ? t : { default: t };
			})(r).default.generateBaseTypedComponent('Facet');
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), n(195);
			var r = n(9);
			e.default = (function(t) {
				return t && t.__esModule ? t : { default: t };
			})(r).default.generateBaseTypedComponent('Geom');
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var r = n(9),
				i = (function(t) {
					return t && t.__esModule ? t : { default: t };
				})(r),
				o = i.default.generateBaseTypedComponent('Guide');
			(o.Line = i.default.generateBaseTypedComponent('GuideLine')),
				(o.Image = i.default.generateBaseTypedComponent('GuideImage')),
				(o.Text = i.default.generateBaseTypedComponent('GuideText')),
				(o.Region = i.default.generateBaseTypedComponent('GuideRegion')),
				(o.Html = i.default.generateBaseTypedComponent('GuideHtml')),
				(o.Arc = i.default.generateBaseTypedComponent('GuideArc')),
				(e.default = o);
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function i(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function a(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var s = (function() {
					function t(t, e) {
						for (var n = 0; e.length > n; n++) {
							var r = e[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(t, r.key, r);
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e;
					};
				})(),
				u = n(331),
				c = r(u),
				l = n(9),
				f = r(l),
				h = n(11),
				p = r(h),
				d = (function(t) {
					function e(t) {
						return (
							i(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 'Label'))
						);
					}
					return (
						a(e, t),
						s(e, [
							{
								key: 'componentWillMount',
								value: function() {
									var t = this.context.getParentInfo();
									(0, c.default)('Geom' === t.name, '`<Label />` must be wrapped in `<Geom />`'),
										(this.id = this.context.createId()),
										this.context.addElement(
											this.name,
											this.id,
											this.props,
											this.context.getParentInfo(),
											this.context.getViewId()
										);
								},
							},
						]),
						e
					);
				})(f.default);
			(d.contextTypes = {
				addElement: p.default.func,
				updateElement: p.default.func,
				deleteElement: p.default.func,
				createId: p.default.func,
				getParentInfo: p.default.func,
				getViewId: p.default.func,
			}),
				(d.childContextTypes = {
					addElement: p.default.func,
					updateElement: p.default.func,
					deleteElement: p.default.func,
					createId: p.default.func,
					getParentInfo: p.default.func,
					getViewId: p.default.func,
				}),
				(e.default = d);
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function i(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function a(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var s = n(9),
				u = r(s),
				c = n(11),
				l = r(c),
				f = (function(t) {
					function e(t) {
						return (
							i(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 'Legend'))
						);
					}
					return a(e, t), e;
				})(u.default);
			(f.contextTypes = {
				addElement: l.default.func,
				updateElement: l.default.func,
				deleteElement: l.default.func,
				createId: l.default.func,
				getParentInfo: l.default.func,
				getViewId: l.default.func,
			}),
				(f.childContextTypes = {
					addElement: l.default.func,
					updateElement: l.default.func,
					deleteElement: l.default.func,
					createId: l.default.func,
					getParentInfo: l.default.func,
					getViewId: l.default.func,
				}),
				(f.defaultProps = { visible: !0 }),
				(e.default = f);
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var r = n(9);
			e.default = (function(t) {
				return t && t.__esModule ? t : { default: t };
			})(r).default.generateBaseTypedComponent('Tooltip');
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function i(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
			}
			function a(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function, not ' + typeof e
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				})),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var s = (function() {
					function t(t, e) {
						for (var n = 0; e.length > n; n++) {
							var r = e[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(t, r.key, r);
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e;
					};
				})(),
				u = n(9),
				c = r(u),
				l = n(11),
				f = r(l),
				h = (function(t) {
					function e(t) {
						i(this, e);
						var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 'View'));
						return (
							(n.getViewId = function() {
								return n.id;
							}),
							n
						);
					}
					return (
						a(e, t),
						s(e, [
							{
								key: 'getChildContext',
								value: function() {
									return {
										addElement: this.context.addElement,
										updateElement: this.context.updateElement,
										deleteElement: this.context.deleteElement,
										createId: this.context.createId,
										getParentInfo: this.getParentInfo,
										getViewId: this.getViewId,
									};
								},
							},
						]),
						e
					);
				})(c.default);
			(h.contextTypes = {
				addElement: f.default.func,
				updateElement: f.default.func,
				deleteElement: f.default.func,
				createId: f.default.func,
				getParentInfo: f.default.func,
				getViewId: f.default.func,
			}),
				(h.childContextTypes = {
					addElement: f.default.func,
					updateElement: f.default.func,
					deleteElement: f.default.func,
					createId: f.default.func,
					getParentInfo: f.default.func,
					getViewId: f.default.func,
				}),
				(e.default = h);
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			Object.defineProperty(e, '__esModule', { value: !0 }),
				(e.Facet = e.Label = e.Guide = e.View = e.Geom = e.Tooltip = e.Legend = e.Axis = e.Coord = e.Chart = void 0);
			var i = n(228),
				o = r(i),
				a = n(230),
				s = r(a),
				u = n(226),
				c = r(u),
				l = n(235),
				f = r(l),
				h = n(236),
				p = r(h),
				d = n(232),
				g = r(d),
				y = n(237),
				v = r(y),
				m = n(233),
				x = r(m),
				b = n(234),
				_ = r(b),
				w = n(231),
				S = r(w);
			(e.Chart = o.default),
				(e.Coord = s.default),
				(e.Axis = c.default),
				(e.Legend = f.default),
				(e.Tooltip = p.default),
				(e.Geom = g.default),
				(e.View = v.default),
				(e.Guide = x.default),
				(e.Label = _.default),
				(e.Facet = S.default);
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var r = {
				Chart: 'addChart',
				Coord: 'addCoord',
				Geom: 'addGeom',
				Axis: 'addAxis',
				Tooltip: 'addTooltip',
				Legend: 'addLegend',
				Label: 'addLabel',
				View: 'addView',
				Guide: 'addGuide',
				GuideLine: 'addGuideLine',
				GuideImage: 'addGuideImage',
				GuideText: 'addGuideText',
				GuideRegion: 'addGuideRegion',
				GuideHtml: 'addGuideHtml',
				GuideArc: 'addGuideArc',
				Facet: 'addFacet',
			};
			e.default = {
				addElement: function(t, e, n) {
					this[r[t]](e, n, n.id, n.viewId, n.parentInfo);
				},
				getConfigContainer: function(t, e) {
					return (
						e && (t.views || (t.views = {}), (t = t.views[e]) || ((t = {}), (t.views[e] = t))), t
					);
				},
				addUniqueElement: function(t, e, n, r, i) {
					var o = this.getConfigContainer(t, i);
					return (o[e] = n), r;
				},
				addChart: function(t, e, n) {
					return this.addUniqueElement(t, 'chart', e, n, null);
				},
				addView: function(t, e, n) {
					return t.views || (t.views = {}), (t.views[n] = e), n;
				},
				addAxis: function(t, e, n, r) {
					var i = this.getConfigContainer(t, r);
					return i.axises || (i.axises = {}), (i.axises[n] = e), n;
				},
				addCoord: function(t, e, n, r) {
					return this.addUniqueElement(t, 'coord', e, n, r);
				},
				addGeom: function(t, e, n, r, i) {
					var o = this.getConfigContainer(t, r);
					return (
						o.geoms || (o.geoms = {}),
						o.geoms[n]
							? i
								? (o.geoms[n].label = e.label)
								: (o.geoms[n].label || console.log('geom label error'),
								  (e.label = o.geoms[n].label),
								  (o.geoms[n] = e))
							: (o.geoms[n] = e),
						n
					);
				},
				addLabel: function(t, e, n, r, i) {
					var o = this.getConfigContainer(t, r);
					return o.geoms || (o.geoms = {}), this.addGeom(t, { label: e }, i.id, r, !0), n;
				},
				addTooltip: function(t, e, n, r) {
					return this.addUniqueElement(t, 'tooltip', e, n, r);
				},
				addFacet: function(t, e, n, r) {
					return this.addUniqueElement(t, 'facet', e, n, r);
				},
				addLegend: function(t, e, n, r) {
					var i = this.getConfigContainer(t, r);
					return i.legends || (i.legends = {}), (i.legends[n] = e), n;
				},
				addGuide: function(t, e, n, r) {
					return this.addUniqueElement(t, 'guide', e, n, r);
				},
				addTypedGuide: function(t, e, n, r, i, o) {
					var a = this.getConfigContainer(t, i),
						s = a.guide;
					return (
						s || (this.addUniqueElement('guide', {}, o.id, i), (s = a.guide)),
						s.elements || (s.elements = {}),
						(n.type = e),
						(s.elements[r] = n),
						r
					);
				},
				addGuideLine: function(t, e, n, r, i) {
					this.addTypedGuide(t, 'line', e, n, r, i);
				},
				addGuideImage: function(t, e, n, r, i) {
					this.addTypedGuide(t, 'image', e, n, r, i);
				},
				addGuideText: function(t, e, n, r, i) {
					this.addTypedGuide(t, 'text', e, n, r, i);
				},
				addGuideRegion: function(t, e, n, r, i) {
					this.addTypedGuide(t, 'region', e, n, r, i);
				},
				addGuideHtml: function(t, e, n, r, i) {
					this.addTypedGuide(t, 'html', e, n, r, i);
				},
				addGuideArc: function(t, e, n, r, i) {
					this.addTypedGuide(t, 'arc', e, n, r, i);
				},
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				if (Array.isArray(t)) {
					for (var e = 0, n = Array(t.length); t.length > e; e++) n[e] = t[e];
					return n;
				}
				return Array.from(t);
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var i = {
					Chart: 'deleteChart',
					Coord: 'deleteCoord',
					Geom: 'deleteGeom',
					Axis: 'deleteAxis',
					Tooltip: 'deleteTooltip',
					Legend: 'deleteLegend',
					Label: 'deleteLabel',
					View: 'deleteView',
					Guide: 'deleteGuide',
					GuideLine: 'deleteTypedGuide',
					GuideImage: 'deleteTypedGuide',
					GuideText: 'deleteTypedGuide',
					GuideRegion: 'deleteTypedGuide',
					GuideHtml: 'deleteTypedGuide',
					GuideArc: 'deleteTypedGuide',
					Facet: 'deleteFacet',
				},
				o = { Geom: !0, Label: !0, Facet: !0 };
			e.default = {
				deleteAxis: function(t, e, n) {
					t.axis(e.axises[n].props.name, !1);
				},
				deleteTooltip: function(t) {
					t.tooltip(!1);
				},
				deleteCoord: function(t) {
					t.coord('rect', {});
				},
				deleteLegend: function(t, e, n) {
					var i = e.legends[n].props;
					t.legend.apply(t, r(i.name ? [i.name, !1] : [!1]));
				},
				deleteGuide: function(t) {
					t.guide().clear();
				},
				deleteView: function(t, e, n) {
					e.views[n].g2Instance &&
						(t.removeView(e.views[n].g2Instance), delete e.views[n].g2Instance);
				},
				deleteViewElement: function(t, e, n, r) {
					var a = this;
					Object.keys(n).forEach(function(t) {
						var n = r[t],
							s = n.viewId;
						s &&
							(o[n.name]
								? (e.views[s].needReExecute = !0)
								: e.views[s].g2Instance &&
								  a[i[n.name]] &&
								  a[i[n.name]](e.views[s].g2Instance, e.views[s], n.id));
					});
				},
				needReExecute: function(t, e) {
					for (var n in t) if (o[e[n].name] && !e[n].viewId) return !0;
					return !1;
				},
				synchronizeG2Delete: function(t, e, n, r) {
					var o = this;
					Object.keys(n).forEach(function(n) {
						var a = i[r[n].name];
						o[a] && !r[n].viewId && o[a](t, e, n);
					}),
						this.deleteViewElement(t, e, n, r);
				},
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function i(t) {
				if (Array.isArray(t)) {
					for (var e = 0, n = Array(t.length); t.length > e; e++) n[e] = t[e];
					return n;
				}
				return Array.from(t);
			}
			function o(t, e) {
				var n = {};
				for (var r in t)
					0 > e.indexOf(r) && Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
				return n;
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var a =
					Object.assign ||
					function(t) {
						for (var e = 1; arguments.length > e; e++) {
							var n = arguments[e];
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
						}
						return t;
					},
				s = n(139),
				u = r(s),
				c = n(48),
				l = n(94),
				f = r(l),
				h = n(96),
				p = r(h),
				d = n(47),
				g = r(d),
				y = n(95),
				v = r(y),
				m = f.default.COORD_FUNC_PROPS,
				x = f.default.GEOM_FUNC_PROPS;
			e.default = {
				needRebuildChart: function(t) {
					if (null == t.chart.props || null == t.chart.updateProps) return !1;
					var e = t.chart.props,
						n = t.chart.updateProps;
					return !(
						c.Util.shallowEqual(e.padding, n.padding) &&
						c.Util.shallowEqual(e.background, n.background) &&
						c.Util.shallowEqual(e.plotBackground, n.plotBackground) &&
						c.Util.shallowEqual(e.pixelRatio, n.pixelRatio)
					);
				},
				needReExecute: function(t) {
					var e = t.geoms;
					if (null == e) return !1;
					for (var n in e)
						if (
							e[n].props &&
							e[n].updateProps &&
							(e[n].props.type !== e[n].updateProps.type ||
								(e[n].props.color && !e[n].updateProps.color) ||
								(e[n].props.size && !e[n].updateProps.size) ||
								(e[n].props.shape && !e[n].updateProps.shape))
						)
							return !0;
					return !1;
				},
				synchronizeG2Update: function(t, e) {
					this.updateChart(t, e.chart),
						this.updateAxises(t, e.axises),
						this.updateTooltip(t, e),
						this.updateCoord(t, e),
						this.updateLegends(t, e.legends),
						this.updateGeoms(t, e.geoms),
						this.updateGuide(t, e.guide),
						this.updateFacet(t, e),
						this.updateViews(t, e);
				},
				updateChart: function(t, e) {
					if (e) {
						var n = e.props,
							r = e.updateProps,
							i = n.width,
							o = n.height,
							a = n.animate,
							s = n.data,
							u = n.scale,
							l = r.width,
							f = r.height,
							h = r.animate,
							p = r.data,
							d = r.scale;
						s !== p && t.changeData(p),
							c.Util.shallowEqual(u, d) || (c.Util.isArray(d) ? t.scale(d[0], d[1]) : t.scale(d)),
							a !== h && t.animate(h),
							i !== l && o !== f
								? t.changeSize(l, f)
								: i !== l
									? t.changeWidth(l)
									: o !== f && t.changeHeight(f),
							v.default.updateEvents(t, v.default.chartEvents, e.props, r),
							v.default.updateBaseEvents(t, e.updateProps, r);
					}
				},
				updateAxis: function(t, e) {
					var n = e.props,
						r = n.name,
						i = n.visible,
						a = o(n, ['name', 'visible']),
						s = e.updateProps,
						l = s.name,
						f = s.visible,
						h = o(s, ['name', 'visible']);
					(0, u.default)(r === l, '`name` propertry should not be changed in `<Axis />`'),
						i !== f && t.axis(r, !!f),
						c.Util.shallowEqual(a, h) || t.axis(r, h);
				},
				updateAxises: function(t, e) {
					if (e)
						for (var n in e) e[n] && e[n].props && e[n].updateProps && this.updateAxis(t, e[n]);
				},
				updateTooltip: function(t, e) {
					if (e.tooltip) {
						var n = e.tooltip.props,
							r = e.tooltip.updateProps;
						(null == n && null == r) || c.Util.shallowEqual(n, r) || t.tooltip(a({}, r));
					}
				},
				updateCoord: function(t, e) {
					var n = e.coord;
					if (n) {
						var r = n.props,
							o = n.updateProps;
						if (null != r && null != o) {
							var a = c.Util.without(o, m.concat(['type']));
							if (!c.Util.shallowEqual(r, o)) {
								var s = t.coord(o.type, a);
								(n.g2Instance = s),
									c.Prop.init(m, o, function(t, e) {
										s[e].apply(s, i(t));
									});
							}
						}
					}
				},
				updateLegend: function(t, e) {
					var n = e.props,
						r = e.updateProps;
					if (r && !c.Util.shallowEqual(n, r)) {
						var a = r.name,
							s = r.visible,
							u = o(r, ['name', 'visible']),
							l = s ? u : s;
						t.legend.apply(t, i(a ? [a, l] : [l]));
					}
				},
				updateLegends: function(t, e) {
					if (null != e) for (var n in e) e[n] && this.updateLegend(t, e[n]);
				},
				updateLabel: function(t, e, n) {
					if (null != e && null != n) {
						var r = e.content,
							i = o(e, ['content']),
							a = n.content,
							s = o(n, ['content']);
						(c.Util.shallowEqual(i, s) && c.Util.shallowEqual(r, a)) ||
							(c.Util.isArray(a) ? t.label(a[0], a[1], s) : t.label(a, s));
					}
				},
				updateGeom: function(t, e) {
					var n = e.props,
						r = e.updateProps;
					if (n && r && n.type === r.type) {
						var a = e.g2Instance;
						if (c.Util.shallowEqual(n, r))
							return void (e.label && this.updateLabel(a, e.label.props, e.label.updateProps));
						var s = n.adjust,
							u = o(n, ['adjust']),
							l = r.adjust,
							f = o(r, ['adjust']);
						(s || l) && a.adjust(l),
							c.Prop.update(x, u, f, function(t, e) {
								a[e].apply(a, i(t));
							}),
							e.label && this.updateLabel(a, e.label.props, e.label.updateProps);
					}
				},
				updateGeoms: function(t, e) {
					if (null == e) return !1;
					for (var n in e) e[n] && this.updateGeom(t, e[n]);
					return !1;
				},
				isTypedGuideChanged: function(t) {
					return !c.Util.shallowEqual(t.props, t.updateProps);
				},
				updateGuide: function(t, e) {
					if (e && e.elements) {
						var n = e.elements,
							r = !1;
						for (var i in n)
							if (n[i] && (n[i].updateProps || this.isTypedGuideChanged(n[i]))) {
								r = !0;
								break;
							}
						r && (g.default.mergeGuide(e, !0), t.guide().clear(), p.default.guide(t, e));
					}
				},
				updateView: function(t, e) {
					if (e && e.props && e.updateProps && 'Facet' !== e.parentInfo.name) {
						var n = e.g2Instance,
							r = e.props,
							i = e.updateProps,
							o = r.scale,
							a = r.data,
							s = r.animate,
							u = r.axis,
							l = r.filter,
							f = i.scale,
							h = i.animate,
							p = i.data,
							d = i.axis,
							g = i.filter;
						s !== h && n.animate(h),
							a !== p && n.changeData(p),
							c.Util.shallowEqual(o, f) || n.scale(f),
							c.Util.shallowEqual(l, g) ||
								g.forEach(function(t) {
									n.filter(t[0], t[1]);
								}),
							u !== d && n.axis(d),
							this.updateCoord(n, e),
							this.updateAxises(n, e.axises),
							this.updateGeoms(n, e.geoms),
							this.updateGuide(n, e.guide);
					}
				},
				updateViews: function(t, e) {
					var n = e.views;
					if (n)
						for (var r in n) {
							var i = n[r];
							i && (i.needReExecute || this.needReExecute(i))
								? (p.default.synchronizeG2View(i.g2Instance, i), (n[r].needReExecute = !1))
								: this.updateView(t, i);
						}
				},
				updateFacet: function(t, e) {
					var n = e.facet;
					if (n) {
						var r = n.props,
							i = n.updateProps;
						if (null != r && null != i) {
							var a = r.type,
								s = o(r, ['type']),
								u = i.type,
								l = o(i, ['type']);
							(a === u && c.Util.shallowEqual(s, l)) || ((n.props = i), p.default.facet(t, e));
						}
					}
				},
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function i(t, e) {
				var n = {};
				for (var r in t)
					0 > e.indexOf(r) && Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
				return n;
			}
			function o(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			Object.defineProperty(e, '__esModule', { value: !0 });
			var a =
					Object.assign ||
					function(t) {
						for (var e = 1; arguments.length > e; e++) {
							var n = arguments[e];
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
						}
						return t;
					},
				s = (function() {
					function t(t, e) {
						for (var n = 0; e.length > n; n++) {
							var r = e[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(t, r.key, r);
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e;
					};
				})(),
				u = n(239),
				c = r(u),
				l = n(47),
				f = r(l),
				h = n(241),
				p = r(h),
				d = n(240),
				g = r(d),
				y = n(96),
				v = r(y),
				m = n(48);
			e.default = (function() {
				function t() {
					o(this, t),
						(this.config = {}),
						(this.elementInfos = {}),
						(this.added = !1),
						(this.initedG2 = !1),
						(this.updated = !1),
						(this.deleted = !1),
						(this.deleteInfos = {});
				}
				return (
					s(t, [
						{
							key: 'calUpdateFlag',
							value: function(t, e) {
								var n = this.elementInfos[e].props,
									r = i(n, ['children']),
									o = this.elementInfos[e].updateProps,
									a = i(o, ['children']);
								if ('Chart' === t) {
									var s = r.data,
										u = i(r, ['data']),
										c = a.data,
										l = i(a, ['data']);
									(s === c && m.Util.isEqual(u, l)) || (this.updated = !0);
								} else m.Util.isEqual(r, a) || (this.updated = !0);
							},
						},
						{
							key: 'addElement',
							value: function(t, e, n, r, i) {
								(!this.chart && this.initedG2) ||
									((this.added = !0),
									(this.elementInfos[e] = {
										id: e,
										viewId: i,
										parentInfo: r,
										name: t,
										props: a({}, n),
									}),
									r &&
										!this.elementInfos[r.id] &&
										(this.elementInfos[r.id] = { id: r.id, name: r.name }),
									c.default.addElement(t, this.config, this.elementInfos[e]));
							},
						},
						{
							key: 'updateElement',
							value: function(t, e, n) {
								(this.elementInfos[e].updateProps = a({}, n)), this.calUpdateFlag(t, e);
							},
						},
						{
							key: 'deleteElement',
							value: function(t, e) {
								this.chart && ((this.deleteInfos[e] = e), (this.deleted = !0));
							},
						},
						{
							key: 'createG2Instance',
							value: function() {
								var t = this.config,
									e = v.default.createChart(t, this.elementInfos);
								return (
									v.default.executeChartConfig(e, t, this.elementInfos),
									v.default.synchronizeG2Add(e, t, this.elementInfos),
									e.render(),
									(this.chart = e),
									(this.initedG2 = !0),
									this.resetStates(),
									e
								);
							},
						},
						{
							key: 'destory',
							value: function() {
								this.chart.destroy(), (this.chart = null);
							},
						},
						{
							key: 'resetStates',
							value: function() {
								var t = this.elementInfos;
								for (var e in t)
									t[e].updateProps && delete t[e].updateProps, this.deleteInfos[e] && delete t[e];
								(this.added = !1), (this.updated = !1), (this.deleteInfos = {});
							},
						},
						{
							key: 'reExecuteChart',
							value: function() {
								return (
									this.chart.clear(),
									f.default.merge(this.config, this.deleteInfos, this.elementInfos, !0),
									v.default.executeChartConfig(this.chart, this.config, this.elementInfos),
									v.default.synchronizeG2Add(this.chart, this.config, this.elementInfos),
									this.chart.repaint(),
									this.resetStates(),
									this.chart
								);
							},
						},
						{
							key: 'batchedUpdate',
							value: function() {
								return null == this.chart
									? null
									: p.default.needRebuildChart(this.config)
										? (f.default.merge(this.config, this.deleteInfos, this.elementInfos, !0),
										  this.chart.destroy(),
										  (this.chart = 'destroy'),
										  this.createG2Instance())
										: g.default.needReExecute(this.deleteInfos, this.elementInfos) ||
										  p.default.needReExecute(this.config)
											? (this.reExecuteChart(), this.chart)
											: (this.deleted &&
													(g.default.synchronizeG2Delete(
														this.chart,
														this.config,
														this.deleteInfos,
														this.elementInfos
													),
													f.default.mergeDelete(this.config, this.deleteInfos, this.elementInfos)),
											  this.added && v.default.synchronizeG2Add(this.chart, this.config),
											  this.updated && p.default.synchronizeG2Update(this.chart, this.config),
											  (this.added || this.deleted || this.updated) && this.chart.repaint(),
											  f.default.mergeUpdate(this.config, !1),
											  this.resetStates(),
											  this.chart);
							},
						},
					]),
					t
				);
			})();
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var r = n(18),
				i = (function(t) {
					return t && t.__esModule ? t : { default: t };
				})(r);
			e.default = {
				init: function() {
					var t = arguments[1],
						e = arguments[2];
					i.default.each(
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						function(n) {
							var r = t[n];
							void 0 !== r && (i.default.isArray(r) || (r = [r]), e(r, n));
						}
					);
				},
				update: function(t, e, n, r) {
					var o = void 0,
						a = void 0;
					i.default.each(t, function(t) {
						(o = e[t]),
							(a = n[t]),
							i.default.shallowEqual(a, o) || (i.default.isArray(a) || (a = [a]), r(a, t));
					});
				},
			};
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = {});
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				if (t instanceof o) return new o(t.h, t.s, t.l, t.opacity);
				t instanceof s.b || (t = n.i(s.c)(t));
				var e = t.r / 255,
					r = t.g / 255,
					i = t.b / 255,
					a = (y * i + d * e - g * r) / (y + d - g),
					c = i - a,
					l = (p * (r - a) - f * c) / h,
					v = Math.sqrt(l * l + c * c) / (p * a * (1 - a)),
					m = v ? Math.atan2(l, c) * u.a - 120 : NaN;
				return new o(0 > m ? m + 360 : m, v, a, t.opacity);
			}
			function i(t, e, n, i) {
				return 1 === arguments.length ? r(t) : new o(t, e, n, null == i ? 1 : i);
			}
			function o(t, e, n, r) {
				(this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
			}
			e.a = i;
			var a = n(50),
				s = n(49),
				u = n(97),
				c = -0.14861,
				l = 1.78277,
				f = -0.29227,
				h = -0.90649,
				p = 1.97294,
				d = p * h,
				g = p * l,
				y = l * f - h * c;
			n.i(a.a)(
				o,
				i,
				n.i(a.b)(s.d, {
					brighter: function(t) {
						return (
							(t = null == t ? s.e : Math.pow(s.e, t)),
							new o(this.h, this.s, this.l * t, this.opacity)
						);
					},
					darker: function(t) {
						return (
							(t = null == t ? s.f : Math.pow(s.f, t)),
							new o(this.h, this.s, this.l * t, this.opacity)
						);
					},
					rgb: function() {
						var t = isNaN(this.h) ? 0 : (this.h + 120) * u.b,
							e = +this.l,
							n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
							r = Math.cos(t),
							i = Math.sin(t);
						return new s.b(
							255 * (e + n * (c * r + l * i)),
							255 * (e + n * (f * r + h * i)),
							255 * (e + n * (p * r)),
							this.opacity
						);
					},
				})
			);
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				if (t instanceof o) return new o(t.l, t.a, t.b, t.opacity);
				if (t instanceof h) {
					if (isNaN(t.h)) return new o(t.l, 0, 0, t.opacity);
					var e = t.h * g.b;
					return new o(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
				}
				t instanceof d.b || (t = n.i(d.c)(t));
				var r,
					i,
					s = c(t.r),
					u = c(t.g),
					l = c(t.b),
					f = a((0.2225045 * s + 0.7168786 * u + 0.0606169 * l) / v);
				return (
					s === u && u === l
						? (r = i = f)
						: ((r = a((0.4360747 * s + 0.3850649 * u + 0.1430804 * l) / y)),
						  (i = a((0.0139322 * s + 0.0971045 * u + 0.7141733 * l) / m))),
					new o(116 * f - 16, 500 * (r - f), 200 * (f - i), t.opacity)
				);
			}
			function i(t, e, n, i) {
				return 1 === arguments.length ? r(t) : new o(t, e, n, null == i ? 1 : i);
			}
			function o(t, e, n, r) {
				(this.l = +t), (this.a = +e), (this.b = +n), (this.opacity = +r);
			}
			function a(t) {
				return t > w ? Math.pow(t, 1 / 3) : t / _ + x;
			}
			function s(t) {
				return t > b ? t * t * t : _ * (t - x);
			}
			function u(t) {
				return 255 * (t > 0.0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055 : 12.92 * t);
			}
			function c(t) {
				return (t /= 255) > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
			}
			function l(t) {
				if (t instanceof h) return new h(t.h, t.c, t.l, t.opacity);
				if ((t instanceof o || (t = r(t)), 0 === t.a && 0 === t.b))
					return new h(NaN, 0, t.l, t.opacity);
				var e = Math.atan2(t.b, t.a) * g.a;
				return new h(0 > e ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
			}
			function f(t, e, n, r) {
				return 1 === arguments.length ? l(t) : new h(t, e, n, null == r ? 1 : r);
			}
			function h(t, e, n, r) {
				(this.h = +t), (this.c = +e), (this.l = +n), (this.opacity = +r);
			}
			(e.b = i), (e.a = f);
			var p = n(50),
				d = n(49),
				g = n(97),
				y = 0.96422,
				v = 1,
				m = 0.82521,
				x = 4 / 29,
				b = 6 / 29,
				_ = 3 * b * b,
				w = b * b * b;
			n.i(p.a)(
				o,
				i,
				n.i(p.b)(d.d, {
					brighter: function(t) {
						return new o(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
					},
					darker: function(t) {
						return new o(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
					},
					rgb: function() {
						var t = (this.l + 16) / 116,
							e = isNaN(this.a) ? t : t + this.a / 500,
							n = isNaN(this.b) ? t : t - this.b / 200;
						return (
							(e = y * s(e)),
							(t = v * s(t)),
							(n = m * s(n)),
							new d.b(
								u(3.1338561 * e - 1.6168667 * t - 0.4906146 * n),
								u(-0.9787684 * e + 1.9161415 * t + 0.033454 * n),
								u(0.0719453 * e - 0.2289914 * t + 1.4052427 * n),
								this.opacity
							)
						);
					},
				})
			),
				n.i(p.a)(
					h,
					f,
					n.i(p.b)(d.d, {
						brighter: function(t) {
							return new h(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
						},
						darker: function(t) {
							return new h(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
						},
						rgb: function() {
							return r(this).rgb();
						},
					})
				);
		},
		function(t, e, n) {
			'use strict';
			var r = n(248);
			n.d(e, 'a', function() {
				return r.a;
			});
		},
		function(t, e, n) {
			'use strict';
			function r() {
				for (var t, e = 0, n = arguments.length, r = {}; n > e; ++e) {
					if (!(t = arguments[e] + '') || t in r) throw Error('illegal type: ' + t);
					r[t] = [];
				}
				return new i(r);
			}
			function i(t) {
				this._ = t;
			}
			function o(t, e) {
				return t
					.trim()
					.split(/^|\s+/)
					.map(function(t) {
						var n = '',
							r = t.indexOf('.');
						if ((0 > r || ((n = t.slice(r + 1)), (t = t.slice(0, r))), t && !e.hasOwnProperty(t)))
							throw Error('unknown type: ' + t);
						return { type: t, name: n };
					});
			}
			function a(t, e) {
				for (var n, r = 0, i = t.length; i > r; ++r) if ((n = t[r]).name === e) return n.value;
			}
			function s(t, e, n) {
				for (var r = 0, i = t.length; i > r; ++r)
					if (t[r].name === e) {
						(t[r] = u), (t = t.slice(0, r).concat(t.slice(r + 1)));
						break;
					}
				return null != n && t.push({ name: e, value: n }), t;
			}
			var u = { value: function() {} };
			(i.prototype = r.prototype = {
				constructor: i,
				on: function(t, e) {
					var n,
						r = this._,
						i = o(t + '', r),
						u = -1,
						c = i.length;
					{
						if (arguments.length >= 2) {
							if (null != e && 'function' != typeof e) throw Error('invalid callback: ' + e);
							for (; ++u < c; )
								if ((n = (t = i[u]).type)) r[n] = s(r[n], t.name, e);
								else if (null == e) for (n in r) r[n] = s(r[n], t.name, null);
							return this;
						}
						for (; ++u < c; ) if ((n = (t = i[u]).type) && (n = a(r[n], t.name))) return n;
					}
				},
				copy: function() {
					var t = {},
						e = this._;
					for (var n in e) t[n] = e[n].slice();
					return new i(t);
				},
				call: function(t, e) {
					if ((n = arguments.length - 2) > 0)
						for (var n, r, i = Array(n), o = 0; n > o; ++o) i[o] = arguments[o + 2];
					if (!this._.hasOwnProperty(t)) throw Error('unknown type: ' + t);
					for (r = this._[t], o = 0, n = r.length; n > o; ++o) r[o].value.apply(e, i);
				},
				apply: function(t, e, n) {
					if (!this._.hasOwnProperty(t)) throw Error('unknown type: ' + t);
					for (var r = this._[t], i = 0, o = r.length; o > i; ++i) r[i].value.apply(e, n);
				},
			}),
				(e.a = r);
		},
		function(t, e, n) {
			'use strict';
			var r = (n(256), n(258), n(253));
			n.d(e, 'a', function() {
				return r.a;
			});
			n(257), n(259), n(255), n(252), n(251), n(250), n(254);
		},
		function(t, e, n) {
			'use strict';
			(function t(e) {
				function n(t) {
					return t * t * ((e + 1) * t - e);
				}
				return (e = +e), (n.overshoot = t), n;
			})(1.70158),
				(function t(e) {
					function n(t) {
						return --t * t * ((e + 1) * t + e) + 1;
					}
					return (e = +e), (n.overshoot = t), n;
				})(1.70158),
				(function t(e) {
					function n(t) {
						return (
							(1 > (t *= 2) ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
						);
					}
					return (e = +e), (n.overshoot = t), n;
				})(1.70158);
		},
		function(t, e, n) {
			'use strict';
		},
		function(t, e, n) {
			'use strict';
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return ((t *= 2) > 1 ? (t -= 2) * t * t + 2 : t * t * t) / 2;
			}
			e.a = r;
		},
		function(t, e, n) {
			'use strict';
			var r = 2 * Math.PI;
			(function t(e, n) {
				function i(t) {
					return e * Math.pow(2, 10 * --t) * Math.sin((o - t) / n);
				}
				var o = Math.asin(1 / (e = Math.max(1, e))) * (n /= r);
				return (
					(i.amplitude = function(e) {
						return t(e, n * r);
					}),
					(i.period = function(n) {
						return t(e, n);
					}),
					i
				);
			})(1, 0.3),
				(function t(e, n) {
					function i(t) {
						return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + o) / n);
					}
					var o = Math.asin(1 / (e = Math.max(1, e))) * (n /= r);
					return (
						(i.amplitude = function(e) {
							return t(e, n * r);
						}),
						(i.period = function(n) {
							return t(e, n);
						}),
						i
					);
				})(1, 0.3),
				(function t(e, n) {
					function i(t) {
						return (
							(0 > (t = 2 * t - 1)
								? e * Math.pow(2, 10 * t) * Math.sin((o - t) / n)
								: 2 - e * Math.pow(2, -10 * t) * Math.sin((o + t) / n)) / 2
						);
					}
					var o = Math.asin(1 / (e = Math.max(1, e))) * (n /= r);
					return (
						(i.amplitude = function(e) {
							return t(e, n * r);
						}),
						(i.period = function(n) {
							return t(e, n);
						}),
						i
					);
				})(1, 0.3);
		},
		function(t, e, n) {
			'use strict';
		},
		function(t, e, n) {
			'use strict';
		},
		function(t, e, n) {
			'use strict';
			(function t(e) {
				function n(t) {
					return Math.pow(t, e);
				}
				return (e = +e), (n.exponent = t), n;
			})(3),
				(function t(e) {
					function n(t) {
						return 1 - Math.pow(1 - t, e);
					}
					return (e = +e), (n.exponent = t), n;
				})(3),
				(function t(e) {
					function n(t) {
						return ((t *= 2) > 1 ? 2 - Math.pow(2 - t, e) : Math.pow(t, e)) / 2;
					}
					return (e = +e), (n.exponent = t), n;
				})(3);
		},
		function(t, e, n) {
			'use strict';
		},
		function(t, e, n) {
			'use strict';
			Math;
		},
		function(t, e, n) {
			'use strict';
			e.a = function(t) {
				return function() {
					return t;
				};
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(29),
				i = n(99);
			e.a = function(t) {
				return n.i(i.a)(
					n
						.i(r.a)(t)
						.call(document.documentElement)
				);
			};
		},
		function(t, e, n) {
			'use strict';
			function r() {
				return new i();
			}
			function i() {
				this._ = '@' + (++o).toString(36);
			}
			e.a = r;
			var o = 0;
			i.prototype = r.prototype = {
				constructor: i,
				get: function(t) {
					for (var e = this._; !(e in t); ) if (!(t = t.parentNode)) return;
					return t[e];
				},
				set: function(t, e) {
					return (t[this._] = e);
				},
				remove: function(t) {
					return this._ in t && delete t[this._];
				},
				toString: function() {
					return this._;
				},
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(55),
				i = n(30);
			e.a = function(t) {
				var e = n.i(r.a)();
				return e.changedTouches && (e = e.changedTouches[0]), n.i(i.a)(t, e);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(6);
			e.a = function(t) {
				return 'string' == typeof t
					? new r.b([document.querySelectorAll(t)], [document.documentElement])
					: new r.b([null == t ? [] : t], r.c);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(29);
			e.a = function(t) {
				var e = 'function' == typeof t ? t : n.i(r.a)(t);
				return this.select(function() {
					return this.appendChild(e.apply(this, arguments));
				});
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function() {
					this.removeAttribute(t);
				};
			}
			function i(t) {
				return function() {
					this.removeAttributeNS(t.space, t.local);
				};
			}
			function o(t, e) {
				return function() {
					this.setAttribute(t, e);
				};
			}
			function a(t, e) {
				return function() {
					this.setAttributeNS(t.space, t.local, e);
				};
			}
			function s(t, e) {
				return function() {
					var n = e.apply(this, arguments);
					null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
				};
			}
			function u(t, e) {
				return function() {
					var n = e.apply(this, arguments);
					null == n
						? this.removeAttributeNS(t.space, t.local)
						: this.setAttributeNS(t.space, t.local, n);
				};
			}
			var c = n(51);
			e.a = function(t, e) {
				var l = n.i(c.a)(t);
				if (2 > arguments.length) {
					var f = this.node();
					return l.local ? f.getAttributeNS(l.space, l.local) : f.getAttribute(l);
				}
				return this.each(
					(null == e
						? l.local
							? i
							: r
						: 'function' == typeof e
							? l.local
								? u
								: s
							: l.local
								? a
								: o)(l, e)
				);
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function() {
				var t = arguments[0];
				return (arguments[0] = this), t.apply(null, arguments), this;
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return t.trim().split(/^|\s+/);
			}
			function i(t) {
				return t.classList || new o(t);
			}
			function o(t) {
				(this._node = t), (this._names = r(t.getAttribute('class') || ''));
			}
			function a(t, e) {
				for (var n = i(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
			}
			function s(t, e) {
				for (var n = i(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
			}
			function u(t) {
				return function() {
					a(this, t);
				};
			}
			function c(t) {
				return function() {
					s(this, t);
				};
			}
			function l(t, e) {
				return function() {
					(e.apply(this, arguments) ? a : s)(this, t);
				};
			}
			(o.prototype = {
				add: function(t) {
					0 > this._names.indexOf(t) &&
						(this._names.push(t), this._node.setAttribute('class', this._names.join(' ')));
				},
				remove: function(t) {
					var e = this._names.indexOf(t);
					0 > e ||
						(this._names.splice(e, 1), this._node.setAttribute('class', this._names.join(' ')));
				},
				contains: function(t) {
					return this._names.indexOf(t) >= 0;
				},
			}),
				(e.a = function(t, e) {
					var n = r(t + '');
					if (2 > arguments.length) {
						for (var o = i(this.node()), a = -1, s = n.length; ++a < s; )
							if (!o.contains(n[a])) return !1;
						return !0;
					}
					return this.each(('function' == typeof e ? l : e ? u : c)(n, e));
				});
		},
		function(t, e, n) {
			'use strict';
			function r() {
				return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
			}
			function i() {
				return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
			}
			e.a = function(t) {
				return this.select(t ? i : r);
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e, n, r, i, o) {
				for (var s, u = 0, c = e.length, l = o.length; l > u; ++u)
					(s = e[u]) ? ((s.__data__ = o[u]), (r[u] = s)) : (n[u] = new a.b(t, o[u]));
				for (; c > u; ++u) (s = e[u]) && (i[u] = s);
			}
			function i(t, e, n, r, i, o, s) {
				var c,
					l,
					f,
					h = {},
					p = e.length,
					d = o.length,
					g = Array(p);
				for (c = 0; p > c; ++c)
					(l = e[c]) &&
						((g[c] = f = u + s.call(l, l.__data__, c, e)), f in h ? (i[c] = l) : (h[f] = l));
				for (c = 0; d > c; ++c)
					(f = u + s.call(t, o[c], c, o)),
						(l = h[f])
							? ((r[c] = l), (l.__data__ = o[c]), (h[f] = null))
							: (n[c] = new a.b(t, o[c]));
				for (c = 0; p > c; ++c) (l = e[c]) && h[g[c]] === l && (i[c] = l);
			}
			var o = n(6),
				a = n(100),
				s = n(260),
				u = '$';
			e.a = function(t, e) {
				if (!t)
					return (
						(m = Array(this.size())),
						(d = -1),
						this.each(function(t) {
							m[++d] = t;
						}),
						m
					);
				var a = e ? i : r,
					u = this._parents,
					c = this._groups;
				'function' != typeof t && (t = n.i(s.a)(t));
				for (var l = c.length, f = Array(l), h = Array(l), p = Array(l), d = 0; l > d; ++d) {
					var g = u[d],
						y = c[d],
						v = y.length,
						m = t.call(g, g && g.__data__, d, u),
						x = m.length,
						b = (h[d] = Array(x)),
						_ = (f[d] = Array(x));
					a(g, y, b, _, (p[d] = Array(v)), m, e);
					for (var w, S, M = 0, P = 0; x > M; ++M)
						if ((w = b[M])) {
							for (P > M || (P = M + 1); !(S = _[P]) && ++P < x; );
							w._next = S || null;
						}
				}
				return (f = new o.b(f, u)), (f._enter = h), (f._exit = p), f;
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function(t) {
				return arguments.length ? this.property('__data__', t) : this.node().__data__;
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e, r) {
				var i = n.i(a.a)(t),
					o = i.CustomEvent;
				'function' == typeof o
					? (o = new o(e, r))
					: ((o = i.document.createEvent('Event')),
					  r
							? (o.initEvent(e, r.bubbles, r.cancelable), (o.detail = r.detail))
							: o.initEvent(e, !1, !1)),
					t.dispatchEvent(o);
			}
			function i(t, e) {
				return function() {
					return r(this, t, e);
				};
			}
			function o(t, e) {
				return function() {
					return r(this, t, e.apply(this, arguments));
				};
			}
			var a = n(56);
			e.a = function(t, e) {
				return this.each(('function' == typeof e ? o : i)(t, e));
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function(t) {
				for (var e = this._groups, n = 0, r = e.length; r > n; ++n)
					for (var i, o = e[n], a = 0, s = o.length; s > a; ++a)
						(i = o[a]) && t.call(i, i.__data__, a, o);
				return this;
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function() {
				return !this.node();
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(101),
				i = n(6);
			e.a = function() {
				return new i.b(this._exit || this._groups.map(r.a), this._parents);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(6),
				i = n(98);
			e.a = function(t) {
				'function' != typeof t && (t = n.i(i.a)(t));
				for (var e = this._groups, o = e.length, a = Array(o), s = 0; o > s; ++s)
					for (var u, c = e[s], l = c.length, f = (a[s] = []), h = 0; l > h; ++h)
						(u = c[h]) && t.call(u, u.__data__, h, c) && f.push(u);
				return new r.b(a, this._parents);
			};
		},
		function(t, e, n) {
			'use strict';
			function r() {
				this.innerHTML = '';
			}
			function i(t) {
				return function() {
					this.innerHTML = t;
				};
			}
			function o(t) {
				return function() {
					var e = t.apply(this, arguments);
					this.innerHTML = null == e ? '' : e;
				};
			}
			e.a = function(t) {
				return arguments.length
					? this.each(null == t ? r : ('function' == typeof t ? o : i)(t))
					: this.node().innerHTML;
			};
		},
		function(t, e, n) {
			'use strict';
			function r() {
				return null;
			}
			var i = n(29),
				o = n(54);
			e.a = function(t, e) {
				var a = 'function' == typeof t ? t : n.i(i.a)(t),
					s = null == e ? r : 'function' == typeof e ? e : n.i(o.a)(e);
				return this.select(function() {
					return this.insertBefore(a.apply(this, arguments), s.apply(this, arguments) || null);
				});
			};
		},
		function(t, e, n) {
			'use strict';
			function r() {
				this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
			}
			e.a = function() {
				return this.each(r);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(6);
			e.a = function(t) {
				for (
					var e = this._groups,
						n = t._groups,
						i = e.length,
						o = n.length,
						a = Math.min(i, o),
						s = Array(i),
						u = 0;
					a > u;
					++u
				)
					for (var c, l = e[u], f = n[u], h = l.length, p = (s[u] = Array(h)), d = 0; h > d; ++d)
						(c = l[d] || f[d]) && (p[d] = c);
				for (; i > u; ++u) s[u] = e[u];
				return new r.b(s, this._parents);
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function() {
				for (var t = this._groups, e = 0, n = t.length; n > e; ++e)
					for (var r = t[e], i = 0, o = r.length; o > i; ++i) {
						var a = r[i];
						if (a) return a;
					}
				return null;
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function() {
				var t = Array(this.size()),
					e = -1;
				return (
					this.each(function() {
						t[++e] = this;
					}),
					t
				);
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function() {
				for (var t = this._groups, e = -1, n = t.length; ++e < n; )
					for (var r, i = t[e], o = i.length - 1, a = i[o]; --o >= 0; )
						(r = i[o]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a), (a = r));
				return this;
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function() {
					delete this[t];
				};
			}
			function i(t, e) {
				return function() {
					this[t] = e;
				};
			}
			function o(t, e) {
				return function() {
					var n = e.apply(this, arguments);
					null == n ? delete this[t] : (this[t] = n);
				};
			}
			e.a = function(t, e) {
				return arguments.length > 1
					? this.each((null == e ? r : 'function' == typeof e ? o : i)(t, e))
					: this.node()[t];
			};
		},
		function(t, e, n) {
			'use strict';
			function r() {
				this.nextSibling && this.parentNode.appendChild(this);
			}
			e.a = function() {
				return this.each(r);
			};
		},
		function(t, e, n) {
			'use strict';
			function r() {
				var t = this.parentNode;
				t && t.removeChild(this);
			}
			e.a = function() {
				return this.each(r);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(6),
				i = n(54);
			e.a = function(t) {
				'function' != typeof t && (t = n.i(i.a)(t));
				for (var e = this._groups, o = e.length, a = Array(o), s = 0; o > s; ++s)
					for (var u, c, l = e[s], f = l.length, h = (a[s] = Array(f)), p = 0; f > p; ++p)
						(u = l[p]) &&
							(c = t.call(u, u.__data__, p, l)) &&
							('__data__' in u && (c.__data__ = u.__data__), (h[p] = c));
				return new r.b(a, this._parents);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(6),
				i = n(103);
			e.a = function(t) {
				'function' != typeof t && (t = n.i(i.a)(t));
				for (var e = this._groups, o = e.length, a = [], s = [], u = 0; o > u; ++u)
					for (var c, l = e[u], f = l.length, h = 0; f > h; ++h)
						(c = l[h]) && (a.push(t.call(c, c.__data__, h, l)), s.push(c));
				return new r.b(a, s);
			};
		},
		function(t, e, n) {
			'use strict';
			e.a = function() {
				var t = 0;
				return (
					this.each(function() {
						++t;
					}),
					t
				);
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				return e > t ? -1 : t > e ? 1 : e > t ? NaN : 0;
			}
			var i = n(6);
			e.a = function(t) {
				function e(e, n) {
					return e && n ? t(e.__data__, n.__data__) : !e - !n;
				}
				t || (t = r);
				for (var n = this._groups, o = n.length, a = Array(o), s = 0; o > s; ++s) {
					for (var u, c = n[s], l = c.length, f = (a[s] = Array(l)), h = 0; l > h; ++h)
						(u = c[h]) && (f[h] = u);
					f.sort(e);
				}
				return new i.b(a, this._parents).order();
			};
		},
		function(t, e, n) {
			'use strict';
			function r() {
				this.textContent = '';
			}
			function i(t) {
				return function() {
					this.textContent = t;
				};
			}
			function o(t) {
				return function() {
					var e = t.apply(this, arguments);
					this.textContent = null == e ? '' : e;
				};
			}
			e.a = function(t) {
				return arguments.length
					? this.each(null == t ? r : ('function' == typeof t ? o : i)(t))
					: this.node().textContent;
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(55),
				i = n(30);
			e.a = function(t, e, o) {
				3 > arguments.length && ((o = e), (e = n.i(r.a)().changedTouches));
				for (var a, s = 0, u = e ? e.length : 0; u > s; ++s)
					if ((a = e[s]).identifier === o) return n.i(i.a)(t, a);
				return null;
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(55),
				i = n(30);
			e.a = function(t, e) {
				null == e && (e = n.i(r.a)().touches);
				for (var o = 0, a = e ? e.length : 0, s = Array(a); a > o; ++o) s[o] = n.i(i.a)(t, e[o]);
				return s;
			};
		},
		function(t, e, n) {
			'use strict';
			n(57);
		},
		function(t, e, n) {
			'use strict';
			var r = n(57);
			e.a = function(t, e, n) {
				var i = new r.b();
				return (
					(e = null == e ? 0 : +e),
					i.restart(
						function(n) {
							i.stop(), t(n + e);
						},
						e,
						n
					),
					i
				);
			};
		},
		function(t, e, n) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var r = (n(309), n(10));
			n.d(e, 'transition', function() {
				return r.a;
			});
			var i = n(308);
			n.d(e, 'active', function() {
				return i.a;
			});
			var o = n(112);
			n.d(e, 'interrupt', function() {
				return o.a;
			});
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return (function e(r) {
					function a(e, a) {
						var s = t((e = n.i(i.b)(e)).h, (a = n.i(i.b)(a)).h),
							u = n.i(o.a)(e.s, a.s),
							c = n.i(o.a)(e.l, a.l),
							l = n.i(o.a)(e.opacity, a.opacity);
						return function(t) {
							return (
								(e.h = s(t)), (e.s = u(t)), (e.l = c(Math.pow(t, r))), (e.opacity = l(t)), e + ''
							);
						};
					}
					return (r = +r), (a.gamma = e), a;
				})(1);
			}
			var i = n(14),
				o = n(19);
			r(o.b), r(o.a);
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function(e, r) {
					var a = t((e = n.i(i.c)(e)).h, (r = n.i(i.c)(r)).h),
						s = n.i(o.a)(e.c, r.c),
						u = n.i(o.a)(e.l, r.l),
						c = n.i(o.a)(e.opacity, r.opacity);
					return function(t) {
						return (e.h = a(t)), (e.c = s(t)), (e.l = u(t)), (e.opacity = c(t)), e + '';
					};
				};
			}
			var i = n(14),
				o = n(19);
			r(o.b), r(o.a);
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function(e, r) {
					var a = t((e = n.i(i.e)(e)).h, (r = n.i(i.e)(r)).h),
						s = n.i(o.a)(e.s, r.s),
						u = n.i(o.a)(e.l, r.l),
						c = n.i(o.a)(e.opacity, r.opacity);
					return function(t) {
						return (e.h = a(t)), (e.s = s(t)), (e.l = u(t)), (e.opacity = c(t)), e + '';
					};
				};
			}
			var i = n(14),
				o = n(19);
			r(o.b), r(o.a);
		},
		function(t, e, n) {
			'use strict';
			n(14), n(19);
		},
		function(t, e, n) {
			'use strict';
		},
		function(t, e, n) {
			'use strict';
		},
		function(t, e, n) {
			'use strict';
		},
		function(t, e, n) {
			'use strict';
			n.d(e, 'a', function() {
				return i;
			});
			var r = 180 / Math.PI,
				i = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
			e.b = function(t, e, n, i, o, a) {
				var s, u, c;
				return (
					(s = Math.sqrt(t * t + e * e)) && ((t /= s), (e /= s)),
					(c = t * n + e * i) && ((n -= t * c), (i -= e * c)),
					(u = Math.sqrt(n * n + i * i)) && ((n /= u), (i /= u), (c /= u)),
					e * n > t * i && ((t = -t), (e = -e), (c = -c), (s = -s)),
					{
						translateX: o,
						translateY: a,
						rotate: Math.atan2(e, t) * r,
						skewX: Math.atan(c) * r,
						scaleX: s,
						scaleY: u,
					}
				);
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e, r, o) {
				function a(t) {
					return t.length ? t.pop() + ' ' : '';
				}
				function s(t, o, a, s, u, c) {
					if (t !== a || o !== s) {
						var l = u.push('translate(', null, e, null, r);
						c.push({ i: l - 4, x: n.i(i.a)(t, a) }, { i: l - 2, x: n.i(i.a)(o, s) });
					} else (a || s) && u.push('translate(' + a + e + s + r);
				}
				function u(t, e, r, s) {
					t !== e
						? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
						  s.push({ i: r.push(a(r) + 'rotate(', null, o) - 2, x: n.i(i.a)(t, e) }))
						: e && r.push(a(r) + 'rotate(' + e + o);
				}
				function c(t, e, r, s) {
					t !== e
						? s.push({ i: r.push(a(r) + 'skewX(', null, o) - 2, x: n.i(i.a)(t, e) })
						: e && r.push(a(r) + 'skewX(' + e + o);
				}
				function l(t, e, r, o, s, u) {
					if (t !== r || e !== o) {
						var c = s.push(a(s) + 'scale(', null, ',', null, ')');
						u.push({ i: c - 4, x: n.i(i.a)(t, r) }, { i: c - 2, x: n.i(i.a)(e, o) });
					} else (1 === r && 1 === o) || s.push(a(s) + 'scale(' + r + ',' + o + ')');
				}
				return function(e, n) {
					var r = [],
						i = [];
					return (
						(e = t(e)),
						(n = t(n)),
						s(e.translateX, e.translateY, n.translateX, n.translateY, r, i),
						u(e.rotate, n.rotate, r, i),
						c(e.skewX, n.skewX, r, i),
						l(e.scaleX, e.scaleY, n.scaleX, n.scaleY, r, i),
						(e = n = null),
						function(t) {
							for (var e, n = -1, o = i.length; ++n < o; ) r[(e = i[n]).i] = e.x(t);
							return r.join('');
						}
					);
				};
			}
			n.d(e, 'a', function() {
				return a;
			}),
				n.d(e, 'b', function() {
					return s;
				});
			var i = n(31),
				o = n(306),
				a = r(o.a, 'px, ', 'px)', 'deg)'),
				s = r(o.b, ', ', ')', ')');
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return 'none' === t
					? c.a
					: (o ||
							((o = document.createElement('DIV')),
							(a = document.documentElement),
							(s = document.defaultView)),
					  (o.style.transform = t),
					  (t = s.getComputedStyle(a.appendChild(o), null).getPropertyValue('transform')),
					  a.removeChild(o),
					  (t = t.slice(7, -1).split(',')),
					  n.i(c.b)(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
			}
			function i(t) {
				return null == t
					? c.a
					: (u || (u = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
					  u.setAttribute('transform', t),
					  (t = u.transform.baseVal.consolidate())
							? ((t = t.matrix), n.i(c.b)(t.a, t.b, t.c, t.d, t.e, t.f))
							: c.a);
			}
			(e.a = r), (e.b = i);
			var o,
				a,
				s,
				u,
				c = n(304);
		},
		function(t, e, n) {
			'use strict';
			Math;
		},
		function(t, e, n) {
			'use strict';
			var r = n(10),
				i = n(7),
				o = [null];
			e.a = function(t, e) {
				var n,
					a,
					s = t.__transition;
				if (s) {
					e = null == e ? null : e + '';
					for (a in s) if ((n = s[a]).state > i.d && n.name === e) return new r.b([[t]], o, e, +a);
				}
				return null;
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(8),
				i = n(310),
				o = n(311);
			(r.selection.prototype.interrupt = i.a), (r.selection.prototype.transition = o.a);
		},
		function(t, e, n) {
			'use strict';
			var r = n(112);
			e.a = function(t) {
				return this.each(function() {
					n.i(r.a)(this, t);
				});
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				for (var r; !(r = t.__transition) || !(r = r[e]); )
					if (!(t = t.parentNode)) return (u.time = n.i(s.c)()), u;
				return r;
			}
			var i = n(10),
				o = n(7),
				a = n(249),
				s = n(104),
				u = { time: null, delay: 0, duration: 250, ease: a.a };
			e.a = function(t) {
				var e, a;
				t instanceof i.b
					? ((e = t._id), (t = t._name))
					: ((e = n.i(i.c)()), ((a = u).time = n.i(s.c)()), (t = null == t ? null : t + ''));
				for (var c = this._groups, l = c.length, f = 0; l > f; ++f)
					for (var h, p = c[f], d = p.length, g = 0; d > g; ++g)
						(h = p[g]) && n.i(o.h)(h, t, e, g, p, a || r(h, e));
				return new i.b(c, this._parents, t, e);
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function() {
					this.removeAttribute(t);
				};
			}
			function i(t) {
				return function() {
					this.removeAttributeNS(t.space, t.local);
				};
			}
			function o(t, e, n) {
				var r, i;
				return function() {
					var o = this.getAttribute(t);
					return o === n ? null : o === r ? i : (i = e((r = o), n));
				};
			}
			function a(t, e, n) {
				var r, i;
				return function() {
					var o = this.getAttributeNS(t.space, t.local);
					return o === n ? null : o === r ? i : (i = e((r = o), n));
				};
			}
			function s(t, e, n) {
				var r, i, o;
				return function() {
					var a,
						s = n(this);
					return null == s
						? void this.removeAttribute(t)
						: ((a = this.getAttribute(t)),
						  a === s ? null : a === r && s === i ? o : (o = e((r = a), (i = s))));
				};
			}
			function u(t, e, n) {
				var r, i, o;
				return function() {
					var a,
						s = n(this);
					return null == s
						? void this.removeAttributeNS(t.space, t.local)
						: ((a = this.getAttributeNS(t.space, t.local)),
						  a === s ? null : a === r && s === i ? o : (o = e((r = a), (i = s))));
				};
			}
			var c = n(58),
				l = n(8),
				f = n(32),
				h = n(113);
			e.a = function(t, e) {
				var p = n.i(l.namespace)(t),
					d = 'transform' === p ? c.e : h.a;
				return this.attrTween(
					t,
					'function' == typeof e
						? (p.local ? u : s)(p, d, n.i(f.b)(this, 'attr.' + t, e))
						: null == e
							? (p.local ? i : r)(p)
							: (p.local ? a : o)(p, d, e + '')
				);
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				function n() {
					var n = this,
						r = e.apply(n, arguments);
					return (
						r &&
						function(e) {
							n.setAttributeNS(t.space, t.local, r(e));
						}
					);
				}
				return (n._value = e), n;
			}
			function i(t, e) {
				function n() {
					var n = this,
						r = e.apply(n, arguments);
					return (
						r &&
						function(e) {
							n.setAttribute(t, r(e));
						}
					);
				}
				return (n._value = e), n;
			}
			var o = n(8);
			e.a = function(t, e) {
				var a = 'attr.' + t;
				if (2 > arguments.length) return (a = this.tween(a)) && a._value;
				if (null == e) return this.tween(a, null);
				if ('function' != typeof e) throw Error();
				var s = n.i(o.namespace)(t);
				return this.tween(a, (s.local ? r : i)(s, e));
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				return function() {
					n.i(o.g)(this, t).delay = +e.apply(this, arguments);
				};
			}
			function i(t, e) {
				return (
					(e = +e),
					function() {
						n.i(o.g)(this, t).delay = e;
					}
				);
			}
			var o = n(7);
			e.a = function(t) {
				var e = this._id;
				return arguments.length
					? this.each(('function' == typeof t ? r : i)(e, t))
					: n.i(o.f)(this.node(), e).delay;
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				return function() {
					n.i(o.e)(this, t).duration = +e.apply(this, arguments);
				};
			}
			function i(t, e) {
				return (
					(e = +e),
					function() {
						n.i(o.e)(this, t).duration = e;
					}
				);
			}
			var o = n(7);
			e.a = function(t) {
				var e = this._id;
				return arguments.length
					? this.each(('function' == typeof t ? r : i)(e, t))
					: n.i(o.f)(this.node(), e).duration;
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				if ('function' != typeof e) throw Error();
				return function() {
					n.i(i.e)(this, t).ease = e;
				};
			}
			var i = n(7);
			e.a = function(t) {
				var e = this._id;
				return arguments.length ? this.each(r(e, t)) : n.i(i.f)(this.node(), e).ease;
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(8),
				i = n(10);
			e.a = function(t) {
				'function' != typeof t && (t = n.i(r.matcher)(t));
				for (var e = this._groups, o = e.length, a = Array(o), s = 0; o > s; ++s)
					for (var u, c = e[s], l = c.length, f = (a[s] = []), h = 0; l > h; ++h)
						(u = c[h]) && t.call(u, u.__data__, h, c) && f.push(u);
				return new i.b(a, this._parents, this._name, this._id);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(10);
			e.a = function(t) {
				if (t._id !== this._id) throw Error();
				for (
					var e = this._groups,
						n = t._groups,
						i = e.length,
						o = n.length,
						a = Math.min(i, o),
						s = Array(i),
						u = 0;
					a > u;
					++u
				)
					for (var c, l = e[u], f = n[u], h = l.length, p = (s[u] = Array(h)), d = 0; h > d; ++d)
						(c = l[d] || f[d]) && (p[d] = c);
				for (; i > u; ++u) s[u] = e[u];
				return new r.b(s, this._parents, this._name, this._id);
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return (t + '')
					.trim()
					.split(/^|\s+/)
					.every(function(t) {
						var e = t.indexOf('.');
						return 0 > e || (t = t.slice(0, e)), !t || 'start' === t;
					});
			}
			function i(t, e, n) {
				var i,
					a,
					s = r(e) ? o.g : o.e;
				return function() {
					var r = s(this, t),
						o = r.on;
					o !== i && (a = (i = o).copy()).on(e, n), (r.on = a);
				};
			}
			var o = n(7);
			e.a = function(t, e) {
				var r = this._id;
				return 2 > arguments.length
					? n
							.i(o.f)(this.node(), r)
							.on.on(t)
					: this.each(i(r, t, e));
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function() {
					var e = this.parentNode;
					for (var n in this.__transition) if (+n !== t) return;
					e && e.removeChild(this);
				};
			}
			e.a = function() {
				return this.on('end.remove', r(this._id));
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(8),
				i = n(10),
				o = n(7);
			e.a = function(t) {
				var e = this._name,
					a = this._id;
				'function' != typeof t && (t = n.i(r.selector)(t));
				for (var s = this._groups, u = s.length, c = Array(u), l = 0; u > l; ++l)
					for (var f, h, p = s[l], d = p.length, g = (c[l] = Array(d)), y = 0; d > y; ++y)
						(f = p[y]) &&
							(h = t.call(f, f.__data__, y, p)) &&
							('__data__' in f && (h.__data__ = f.__data__),
							(g[y] = h),
							n.i(o.h)(g[y], e, a, y, g, n.i(o.f)(f, a)));
				return new i.b(c, this._parents, e, a);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(8),
				i = n(10),
				o = n(7);
			e.a = function(t) {
				var e = this._name,
					a = this._id;
				'function' != typeof t && (t = n.i(r.selectorAll)(t));
				for (var s = this._groups, u = s.length, c = [], l = [], f = 0; u > f; ++f)
					for (var h, p = s[f], d = p.length, g = 0; d > g; ++g)
						if ((h = p[g])) {
							for (
								var y, v = t.call(h, h.__data__, g, p), m = n.i(o.f)(h, a), x = 0, b = v.length;
								b > x;
								++x
							)
								(y = v[x]) && n.i(o.h)(y, e, a, x, v, m);
							c.push(v), l.push(h);
						}
				return new i.b(c, l, e, a);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(8),
				i = r.selection.prototype.constructor;
			e.a = function() {
				return new i(this._groups, this._parents);
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e) {
				var r, i, o;
				return function() {
					var a = n.i(u.style)(this, t),
						s = (this.style.removeProperty(t), n.i(u.style)(this, t));
					return a === s ? null : a === r && s === i ? o : (o = e((r = a), (i = s)));
				};
			}
			function i(t) {
				return function() {
					this.style.removeProperty(t);
				};
			}
			function o(t, e, r) {
				var i, o;
				return function() {
					var a = n.i(u.style)(this, t);
					return a === r ? null : a === i ? o : (o = e((i = a), r));
				};
			}
			function a(t, e, r) {
				var i, o, a;
				return function() {
					var s = n.i(u.style)(this, t),
						c = r(this);
					return (
						null == c && (this.style.removeProperty(t), (c = n.i(u.style)(this, t))),
						s === c ? null : s === i && c === o ? a : (a = e((i = s), (o = c)))
					);
				};
			}
			var s = n(58),
				u = n(8),
				c = n(32),
				l = n(113);
			e.a = function(t, e, u) {
				var f = 'transform' == (t += '') ? s.a : l.a;
				return null == e
					? this.styleTween(t, r(t, f)).on('end.style.' + t, i(t))
					: this.styleTween(
							t,
							'function' == typeof e ? a(t, f, n.i(c.b)(this, 'style.' + t, e)) : o(t, f, e + ''),
							u
					  );
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t, e, n) {
				function r() {
					var r = this,
						i = e.apply(r, arguments);
					return (
						i &&
						function(e) {
							r.style.setProperty(t, i(e), n);
						}
					);
				}
				return (r._value = e), r;
			}
			e.a = function(t, e, n) {
				var i = 'style.' + (t += '');
				if (2 > arguments.length) return (i = this.tween(i)) && i._value;
				if (null == e) return this.tween(i, null);
				if ('function' != typeof e) throw Error();
				return this.tween(i, r(t, e, null == n ? '' : n));
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function() {
					this.textContent = t;
				};
			}
			function i(t) {
				return function() {
					var e = t(this);
					this.textContent = null == e ? '' : e;
				};
			}
			var o = n(32);
			e.a = function(t) {
				return this.tween(
					'text',
					'function' == typeof t ? i(n.i(o.b)(this, 'text', t)) : r(null == t ? '' : t + '')
				);
			};
		},
		function(t, e, n) {
			'use strict';
			var r = n(10),
				i = n(7);
			e.a = function() {
				for (
					var t = this._name, e = this._id, o = n.i(r.c)(), a = this._groups, s = a.length, u = 0;
					s > u;
					++u
				)
					for (var c, l = a[u], f = l.length, h = 0; f > h; ++h)
						if ((c = l[h])) {
							var p = n.i(i.f)(c, e);
							n.i(i.h)(c, t, o, h, l, {
								time: p.time + p.delay + p.duration,
								delay: 0,
								duration: p.duration,
								ease: p.ease,
							});
						}
				return new r.b(a, this._parents, t, o);
			};
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				return function() {
					return t;
				};
			}
			var i = function() {};
			(i.thatReturns = r),
				(i.thatReturnsFalse = r(!1)),
				(i.thatReturnsTrue = r(!0)),
				(i.thatReturnsNull = r(null)),
				(i.thatReturnsThis = function() {
					return this;
				}),
				(i.thatReturnsArgument = function(t) {
					return t;
				}),
				(t.exports = i);
		},
		function(t, e, n) {
			'use strict';
			var r = {};
			t.exports = r;
		},
		function(t, e, n) {
			'use strict';
			function r(t, e, n, r, o, a, s, u) {
				if ((i(e), !t)) {
					var c;
					if (void 0 === e)
						c = Error(
							'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
						);
					else {
						var l = [n, r, o, a, s, u],
							f = 0;
						(c = Error(
							e.replace(/%s/g, function() {
								return l[f++];
							})
						)),
							(c.name = 'Invariant Violation');
					}
					throw ((c.framesToPop = 1), c);
				}
			}
			var i = function(t) {};
			t.exports = r;
		},
		function(t, e, n) {
			'use strict';
			t.exports = function(t, e, n, r, i, o, a, s) {
				if (!t) {
					var u;
					if (void 0 === e)
						u = Error(
							'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
						);
					else {
						var c = [n, r, i, o, a, s],
							l = 0;
						(u = Error(
							e.replace(/%s/g, function() {
								return c[l++];
							})
						)),
							(u.name = 'Invariant Violation');
					}
					throw ((u.framesToPop = 1), u);
				}
			};
		},
		function(t, e, n) {
			t.exports = n(69).Symbol;
		},
		function(t, e) {
			function n(t, e, n) {
				switch (n.length) {
					case 0:
						return t.call(e);
					case 1:
						return t.call(e, n[0]);
					case 2:
						return t.call(e, n[0], n[1]);
					case 3:
						return t.call(e, n[0], n[1], n[2]);
				}
				return t.apply(e, n);
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t, e, n, r) {
				for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
					var a = t[i];
					e(r, a, n(a), t);
				}
				return r;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t, e) {
				for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t); );
				return t;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t, e) {
				for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
					var a = t[n];
					e(a, n, t) && (o[i++] = a);
				}
				return o;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e) {
				return !!(null == t ? 0 : t.length) && i(t, e, 0) > -1;
			}
			var i = n(65);
			t.exports = r;
		},
		function(t, e) {
			function n(t, e, n) {
				for (var r = -1, i = null == t ? 0 : t.length; ++r < i; ) if (n(e, t[r])) return !0;
				return !1;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t, e) {
				for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
					i[n] = e(t[n], n, t);
				return i;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t, e) {
				for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
				return t;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t, e) {
				for (var n = -1, r = null == t ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
				return !1;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				return t.split('');
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				return t.match(r) || [];
			}
			var r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e, n, r) {
				return (
					i(t, function(t, i, o) {
						e(r, t, n(t), o);
					}),
					r
				);
			}
			var i = n(34);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				return t && i(e, o(e), t);
			}
			var i = n(37),
				o = n(40);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				return t && i(e, o(e), t);
			}
			var i = n(37),
				o = n(429);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n, j, L, D) {
				var F,
					R = e & P,
					B = e & C,
					N = e & O;
				if ((n && (F = L ? n(t, j, L, D) : n(t)), void 0 !== F)) return F;
				if (!w(t)) return t;
				var z = x(t);
				if (z) {
					if (((F = y(t)), !R)) return l(t, F);
				} else {
					var V = g(t),
						G = V == k || V == I;
					if (b(t)) return c(t, R);
					if (V == T || V == A || (G && !L)) {
						if (((F = B || G ? {} : m(t)), !R)) return B ? h(t, u(F, t)) : f(t, s(F, t));
					} else {
						if (!E[V]) return L ? t : {};
						F = v(t, V, R);
					}
				}
				D || (D = new i());
				var Y = D.get(t);
				if (Y) return Y;
				if ((D.set(t, F), S(t)))
					return (
						t.forEach(function(i) {
							F.add(r(i, e, n, i, t, D));
						}),
						F
					);
				if (_(t))
					return (
						t.forEach(function(i, o) {
							F.set(o, r(i, e, n, o, t, D));
						}),
						F
					);
				var W = N ? (B ? d : p) : B ? keysIn : M,
					q = z ? void 0 : W(t);
				return (
					o(q || t, function(i, o) {
						q && ((o = i), (i = t[o])), a(F, o, r(i, e, n, o, t, D));
					}),
					F
				);
			}
			var i = n(61),
				o = n(335),
				a = n(62),
				s = n(345),
				u = n(346),
				c = n(372),
				l = n(373),
				f = n(374),
				h = n(375),
				p = n(122),
				d = n(388),
				g = n(67),
				y = n(395),
				v = n(396),
				m = n(397),
				x = n(3),
				b = n(71),
				_ = n(423),
				w = n(21),
				S = n(428),
				M = n(40),
				P = 1,
				C = 2,
				O = 4,
				A = '[object Arguments]',
				k = '[object Function]',
				I = '[object GeneratorFunction]',
				T = '[object Object]',
				E = {};
			(E[A] = E['[object Array]'] = E['[object ArrayBuffer]'] = E['[object DataView]'] = E[
				'[object Boolean]'
			] = E['[object Date]'] = E['[object Float32Array]'] = E['[object Float64Array]'] = E[
				'[object Int8Array]'
			] = E['[object Int16Array]'] = E['[object Int32Array]'] = E['[object Map]'] = E[
				'[object Number]'
			] = E[T] = E['[object RegExp]'] = E['[object Set]'] = E['[object String]'] = E[
				'[object Symbol]'
			] = E['[object Uint8Array]'] = E['[object Uint8ClampedArray]'] = E[
				'[object Uint16Array]'
			] = E['[object Uint32Array]'] = !0),
				(E['[object Error]'] = E[k] = E['[object WeakMap]'] = !1),
				(t.exports = r);
		},
		function(t, e, n) {
			var r = n(21),
				i = Object.create;
			t.exports = (function() {
				function t() {}
				return function(e) {
					if (!r(e)) return {};
					if (i) return i(e);
					t.prototype = e;
					var n = new t();
					return (t.prototype = void 0), n;
				};
			})();
		},
		function(t, e, n) {
			function r(t, e) {
				var n = [];
				return (
					i(t, function(t, r, i) {
						e(t, r, i) && n.push(t);
					}),
					n
				);
			}
			var i = n(34);
			t.exports = r;
		},
		function(t, e, n) {
			t.exports = n(378)();
		},
		function(t, e, n) {
			function r(t, e) {
				return t && i(t, e, o);
			}
			var i = n(350),
				o = n(40);
			t.exports = r;
		},
		function(t, e) {
			function n(t, e) {
				return t > e;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t, e) {
				return null != t && e in Object(t);
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				return o(t) && i(t) == a;
			}
			var i = n(35),
				o = n(22),
				a = '[object Date]';
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n, r, y, m) {
				var x = c(t),
					b = c(e),
					_ = x ? d : u(t),
					w = b ? d : u(e);
				(_ = _ == p ? g : _), (w = w == p ? g : w);
				var S = _ == g,
					M = w == g,
					P = _ == w;
				if (P && l(t)) {
					if (!l(e)) return !1;
					(x = !0), (S = !1);
				}
				if (P && !S)
					return m || (m = new i()), x || f(t) ? o(t, e, n, r, y, m) : a(t, e, _, n, r, y, m);
				if (!(n & h)) {
					var C = S && v.call(t, '__wrapped__'),
						O = M && v.call(e, '__wrapped__');
					if (C || O) {
						var A = C ? t.value() : t,
							k = O ? e.value() : e;
						return m || (m = new i()), y(A, k, n, r, m);
					}
				}
				return !!P && (m || (m = new i()), s(t, e, n, r, y, m));
			}
			var i = n(61),
				o = n(384),
				a = n(385),
				s = n(386),
				u = n(67),
				c = n(3),
				l = n(71),
				f = n(137),
				h = 1,
				p = '[object Arguments]',
				d = '[object Array]',
				g = '[object Object]',
				y = Object.prototype,
				v = y.hasOwnProperty;
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n, r) {
				var u = n.length,
					c = u,
					l = !r;
				if (null == t) return !c;
				for (t = Object(t); u--; ) {
					var f = n[u];
					if (l && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1;
				}
				for (; ++u < c; ) {
					f = n[u];
					var h = f[0],
						p = t[h],
						d = f[1];
					if (l && f[2]) {
						if (void 0 === p && !(h in t)) return !1;
					} else {
						var g = new i();
						if (r) var y = r(p, d, h, t, e, g);
						if (!(void 0 === y ? o(d, p, a | s, r, g) : y)) return !1;
					}
				}
				return !0;
			}
			var i = n(61),
				o = n(66),
				a = 1,
				s = 2;
			t.exports = r;
		},
		function(t, e, n) {
			t.exports = n(38)(Object.keys, Object);
		},
		function(t, e) {
			function n(t, e) {
				return e > t;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e) {
				var n = -1,
					r = o(t) ? Array(t.length) : [];
				return (
					i(t, function(t, i, o) {
						r[++n] = e(t, i, o);
					}),
					r
				);
			}
			var i = n(34),
				o = n(39);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t) {
				var e = o(t);
				return 1 == e.length && e[0][2]
					? a(e[0][0], e[0][1])
					: function(n) {
							return n === t || i(n, t, e);
					  };
			}
			var i = n(356),
				o = n(389),
				a = n(128);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				return s(t) && u(e)
					? c(l(t), e)
					: function(n) {
							var r = o(n, t);
							return void 0 === r && r === e ? a(n, t) : i(e, r, f | h);
					  };
			}
			var i = n(66),
				o = n(414),
				a = n(133),
				s = n(68),
				u = n(127),
				c = n(128),
				l = n(20),
				f = 1,
				h = 2;
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				return i(t, e, function(e, n) {
					return o(t, n);
				});
			}
			var i = n(363),
				o = n(133);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n) {
				for (var r = -1, s = e.length, u = {}; ++r < s; ) {
					var c = e[r],
						l = i(t, c);
					n(l, c) && o(u, a(c, t), l);
				}
				return u;
			}
			var i = n(64),
				o = n(368),
				a = n(36);
			t.exports = r;
		},
		function(t, e) {
			function n(t) {
				return function(e) {
					return null == e ? void 0 : e[t];
				};
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				return function(e) {
					return i(e, t);
				};
			}
			var i = n(64);
			t.exports = r;
		},
		function(t, e) {
			function n(t, e, n, r, i) {
				return (
					i(t, function(t, i, o) {
						n = r ? ((r = !1), t) : e(n, t, i, o);
					}),
					n
				);
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e) {
				return a(o(t, e, i), t + '');
			}
			var i = n(134),
				o = n(129),
				a = n(130);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n, r) {
				if (!s(t)) return t;
				e = o(e, t);
				for (var c = -1, l = e.length, f = l - 1, h = t; null != h && ++c < l; ) {
					var p = u(e[c]),
						d = n;
					if (c != f) {
						var g = h[p];
						(d = r ? r(g, p, h) : void 0), void 0 === d && (d = s(g) ? g : a(e[c + 1]) ? [] : {});
					}
					i(h, p, d), (h = h[p]);
				}
				return t;
			}
			var i = n(62),
				o = n(36),
				a = n(125),
				s = n(21),
				u = n(20);
			t.exports = r;
		},
		function(t, e) {
			function n(t, e, n) {
				var r = -1,
					i = t.length;
				0 > e && (e = -e > i ? 0 : i + e),
					(n = n > i ? i : n),
					0 > n && (n += i),
					(i = e > n ? 0 : (n - e) >>> 0),
					(e >>>= 0);
				for (var o = Array(i); ++r < i; ) o[r] = t[r + e];
				return o;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				return function(e) {
					return t(e);
				};
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e, n) {
				var r = t.length;
				return (n = void 0 === n ? r : n), e || r > n ? i(t, e, n) : t;
			}
			var i = n(369);
			t.exports = r;
		},
		function(t, e, n) {
			(function(t) {
				function r(t, e) {
					if (e) return t.slice();
					var n = t.length,
						r = c ? c(n) : new t.constructor(n);
					return t.copy(r), r;
				}
				var i = n(69),
					o = 'object' == typeof e && e && !e.nodeType && e,
					a = o && 'object' == typeof t && t && !t.nodeType && t,
					s = a && a.exports === o,
					u = s ? i.Buffer : void 0,
					c = u ? u.allocUnsafe : void 0;
				t.exports = r;
			}.call(e, n(140)(t)));
		},
		function(t, e) {
			function n(t, e) {
				var n = -1,
					r = t.length;
				for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
				return e;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e) {
				return i(t, o(t), e);
			}
			var i = n(37),
				o = n(391);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				return i(t, o(t), e);
			}
			var i = n(37),
				o = n(392);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				return function(n, r) {
					var u = s(n) ? i : o,
						c = e ? e() : {};
					return u(n, t, a(r, 2), c);
				};
			}
			var i = n(334),
				o = n(344),
				a = n(16),
				s = n(3);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				return function(n, r) {
					if (null == n) return n;
					if (!i(n)) return t(n, r);
					for (
						var o = n.length, a = e ? o : -1, s = Object(n);
						(e ? a-- : ++a < o) && !1 !== r(s[a], a, s);

					);
					return n;
				};
			}
			var i = n(39);
			t.exports = r;
		},
		function(t, e) {
			function n(t) {
				return function(e, n, r) {
					for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
						var u = a[t ? s : ++i];
						if (!1 === n(o[u], u, o)) break;
					}
					return e;
				};
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				return function(e) {
					e = s(e);
					var n = o(e) ? a(e) : void 0,
						r = n ? n[0] : e.charAt(0),
						u = n ? i(n, 1).join('') : e.slice(1);
					return r[t]() + u;
				};
			}
			var i = n(371),
				o = n(124),
				a = n(407),
				s = n(23);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t) {
				return function(e) {
					return i(a(o(e).replace(s, '')), t, '');
				};
			}
			var i = n(116),
				o = n(412),
				a = n(443),
				s = RegExp("['’]", 'g');
			t.exports = r;
		},
		function(t, e, n) {
			function r(t) {
				var e = Math[t];
				return function(t, n) {
					if (((t = o(t)), (n = null == n ? 0 : s(i(n), 292)))) {
						var r = (a(t) + 'e').split('e'),
							u = e(r[0] + 'e' + (+r[1] + n));
						return (r = (a(u) + 'e').split('e')), +(r[0] + 'e' + (+r[1] - n));
					}
					return e(t);
				};
			}
			var i = n(138),
				o = n(439),
				a = n(23),
				s = Math.min;
			t.exports = r;
		},
		function(t, e) {
			function n() {}
			t.exports = n;
		},
		function(t, e, n) {
			var r = n(390);
			t.exports = (function() {
				try {
					var t = r(Object, 'defineProperty');
					return t({}, '', {}), t;
				} catch (t) {}
			})();
		},
		function(t, e, n) {
			function r(t, e, n, r, c, l) {
				var f = n & s,
					h = t.length,
					p = e.length;
				if (!(h == p || (f && p > h))) return !1;
				var d = l.get(t);
				if (d && l.get(e)) return d == e;
				var g = -1,
					y = !0,
					v = n & u ? new i() : void 0;
				for (l.set(t, e), l.set(e, t); ++g < h; ) {
					var m = t[g],
						x = e[g];
					if (r) var b = f ? r(x, m, g, e, t, l) : r(m, x, g, t, e, l);
					if (void 0 !== b) {
						if (b) continue;
						y = !1;
						break;
					}
					if (v) {
						if (
							!o(e, function(t, e) {
								if (!a(v, e) && (m === t || c(m, t, n, r, l))) return v.push(e);
							})
						) {
							y = !1;
							break;
						}
					} else if (m !== x && !c(m, x, n, r, l)) {
						y = !1;
						break;
					}
				}
				return l.delete(t), l.delete(e), y;
			}
			var i = n(115),
				o = n(341),
				a = n(120),
				s = 1,
				u = 2;
			t.exports = r;
		},
		function(t, e) {
			function n(t, e) {
				return t === e || (t !== t && e !== e);
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e, n, r, a, u) {
				var c = n & o,
					l = i(t),
					f = l.length;
				if (f != i(e).length && !c) return !1;
				for (var h = f; h--; ) {
					var p = l[h];
					if (!(c ? p in e : s.call(e, p))) return !1;
				}
				var d = u.get(t);
				if (d && u.get(e)) return d == e;
				var g = !0;
				u.set(t, e), u.set(e, t);
				for (var y = c; ++h < f; ) {
					p = l[h];
					var v = t[p],
						m = e[p];
					if (r) var x = c ? r(m, v, p, e, t, u) : r(v, m, p, t, e, u);
					if (!(void 0 === x ? v === m || a(v, m, n, r, u) : x)) {
						g = !1;
						break;
					}
					y || (y = 'constructor' == p);
				}
				if (g && !y) {
					var b = t.constructor,
						_ = e.constructor;
					b != _ &&
						'constructor' in t &&
						'constructor' in e &&
						!(
							'function' == typeof b &&
							b instanceof b &&
							'function' == typeof _ &&
							_ instanceof _
						) &&
						(g = !1);
				}
				return u.delete(t), u.delete(e), g;
			}
			var i = n(122),
				o = 1,
				a = Object.prototype,
				s = a.hasOwnProperty;
			t.exports = r;
		},
		function(t, e, n) {
			function r(t) {
				return a(o(t, void 0, i), t + '');
			}
			var i = n(132),
				o = n(129),
				a = n(130);
			t.exports = r;
		},
		function(t, e) {
			function n(t) {
				var e = [];
				if (null != t) for (var n in Object(t)) e.push(n);
				return e;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				for (var e = o(t), n = e.length; n--; ) {
					var r = e[n],
						a = t[r];
					e[n] = [r, a, i(a)];
				}
				return e;
			}
			var i = n(127),
				o = n(40);
			t.exports = r;
		},
		function(t, e) {
			function n(t, e) {
				return null == t ? void 0 : t[e];
			}
			t.exports = n;
		},
		function(t, e) {
			function n() {
				return [];
			}
			t.exports = n;
		},
		function(t, e) {
			function n() {
				return [];
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e, n) {
				e = i(e, t);
				for (var r = -1, l = e.length, f = !1; ++r < l; ) {
					var h = c(e[r]);
					if (!(f = null != t && n(t, h))) break;
					t = t[h];
				}
				return f || ++r != l
					? f
					: !!(l = null == t ? 0 : t.length) && u(l) && s(h, l) && (a(t) || o(t));
			}
			var i = n(36),
				o = n(70),
				a = n(3),
				s = n(125),
				u = n(135),
				c = n(20);
			t.exports = r;
		},
		function(t, e) {
			function n() {
				return !1;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				var e = t.length,
					n = new t.constructor(e);
				return (
					e &&
						'string' == typeof t[0] &&
						i.call(t, 'index') &&
						((n.index = t.index), (n.input = t.input)),
					n
				);
			}
			var r = Object.prototype,
				i = r.hasOwnProperty;
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				return t;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				return 'function' != typeof t.constructor || a(t) ? {} : i(o(t));
			}
			var i = n(348),
				o = n(123),
				a = n(126);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t) {
				return a(t) || o(t) || !!(s && t && t[s]);
			}
			var i = n(332),
				o = n(70),
				a = n(3),
				s = i ? i.isConcatSpreadable : void 0;
			t.exports = r;
		},
		function(t, e) {
			function n() {
				(this.__data__ = []), (this.size = 0);
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				var e = this.__data__,
					n = i(e, t);
				return n >= 0 && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0);
			}
			var i = n(33),
				o = Array.prototype,
				a = o.splice;
			t.exports = r;
		},
		function(t, e, n) {
			function r(t) {
				var e = this.__data__,
					n = i(e, t);
				return 0 > n ? void 0 : e[n][1];
			}
			var i = n(33);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t) {
				return i(this.__data__, t) > -1;
			}
			var i = n(33);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				var n = this.__data__,
					r = i(n, t);
				return 0 > r ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
			}
			var i = n(33);
			t.exports = r;
		},
		function(t, e) {
			function n(t) {
				return t;
			}
			t.exports = n;
		},
		function(t, e, n) {
			(function(t) {
				var r = n(121),
					i = 'object' == typeof e && e && !e.nodeType && e,
					o = i && 'object' == typeof t && t && !t.nodeType && t,
					a = o && o.exports === i,
					s = a && r.process;
				t.exports = (function() {
					try {
						var t = o && o.require && o.require('util').types;
						return t || (s && s.binding && s.binding('util'));
					} catch (t) {}
				})();
			}.call(e, n(140)(t)));
		},
		function(t, e) {
			function n() {
				return [];
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				return o(t) ? a(t) : i(t);
			}
			var i = n(342),
				o = n(124),
				a = n(409);
			t.exports = r;
		},
		function(t, e, n) {
			var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
				i = /\\(\\)?/g;
			t.exports = n(404)(function(t) {
				var e = [];
				return (
					46 === t.charCodeAt(0) && e.push(''),
					t.replace(r, function(t, n, r, o) {
						e.push(r ? o.replace(i, '$1') : n || t);
					}),
					e
				);
			});
		},
		function(t, e) {
			function n(t) {
				return t.split('');
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				return t.match(r) || [];
			}
			var r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				return i(t, o | a);
			}
			var i = n(347),
				o = 1,
				a = 4;
			t.exports = r;
		},
		function(t, e) {
			function n(t) {
				return t;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t, e) {
				return (s(t) ? i : o)(t, a(e, 3));
			}
			var i = n(336),
				o = n(349),
				a = n(16),
				s = n(3);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n) {
				var r = null == t ? void 0 : i(t, e);
				return void 0 === r ? n : r;
			}
			var i = n(64);
			t.exports = r;
		},
		function(t, e, n) {
			var r = n(63),
				i = n(376),
				o = Object.prototype,
				a = o.hasOwnProperty;
			t.exports = i(function(t, e, n) {
				a.call(t, n) ? t[n].push(e) : r(t, n, [e]);
			});
		},
		function(t, e, n) {
			function r(t, e, n) {
				var r = null == t ? 0 : t.length;
				if (!r) return -1;
				var s = null == n ? 0 : o(n);
				return 0 > s && (s = a(r + s, 0)), i(t, e, s);
			}
			var i = n(65),
				o = n(138),
				a = Math.max;
			t.exports = r;
		},
		function(t, e, n) {
			function r(t) {
				return o(t) && i(t);
			}
			var i = n(39),
				o = n(22);
			t.exports = r;
		},
		function(t, e, n) {
			var r = n(354),
				i = n(370),
				o = n(405),
				a = o && o.isDate;
			t.exports = a ? i(a) : r;
		},
		function(t, e, n) {
			function r(t) {
				if (null == t) return !0;
				if (
					u(t) &&
					(s(t) || 'string' == typeof t || 'function' == typeof t.splice || c(t) || f(t) || a(t))
				)
					return !t.length;
				var e = o(t);
				if (e == h || e == p) return !t.size;
				if (l(t)) return !i(t).length;
				for (var n in t) if (g.call(t, n)) return !1;
				return !0;
			}
			var i = n(357),
				o = n(67),
				a = n(70),
				s = n(3),
				u = n(39),
				c = n(71),
				l = n(126),
				f = n(137),
				h = '[object Map]',
				p = '[object Set]',
				d = Object.prototype,
				g = d.hasOwnProperty;
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n) {
				n = 'function' == typeof n ? n : void 0;
				var r = n ? n(t, e) : void 0;
				return void 0 === r ? i(t, e, void 0, n) : !!r;
			}
			var i = n(66);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t) {
				return 'number' == typeof t && o(t);
			}
			var i = n(69),
				o = i.isFinite;
			t.exports = r;
		},
		function(t, e, n) {
			function r(t) {
				if (!o(t)) return !1;
				var e = i(t);
				return e == s || e == u || e == a || e == c;
			}
			var i = n(35),
				o = n(21),
				a = '[object AsyncFunction]',
				s = '[object Function]',
				u = '[object GeneratorFunction]',
				c = '[object Proxy]';
			t.exports = r;
		},
		function(t, e) {
			function n() {
				return !1;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				return i(t) && t != +t;
			}
			var i = n(426);
			t.exports = r;
		},
		function(t, e) {
			function n(t) {
				return null === t;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function r(t) {
				return 'number' == typeof t || (o(t) && i(t) == a);
			}
			var i = n(35),
				o = n(22),
				a = '[object Number]';
			t.exports = r;
		},
		function(t, e, n) {
			function r(t) {
				if (!a(t) || i(t) != s) return !1;
				var e = o(t);
				if (null === e) return !0;
				var n = f.call(e, 'constructor') && e.constructor;
				return 'function' == typeof n && n instanceof n && l.call(n) == h;
			}
			var i = n(35),
				o = n(123),
				a = n(22),
				s = '[object Object]',
				u = Function.prototype,
				c = Object.prototype,
				l = u.toString,
				f = c.hasOwnProperty,
				h = l.call(Object);
			t.exports = r;
		},
		function(t, e) {
			function n() {
				return !1;
			}
			t.exports = n;
		},
		function(t, e) {
			function n(t) {
				var e = [];
				if (null != t) for (var n in Object(t)) e.push(n);
				return e;
			}
			t.exports = n;
		},
		function(t, e, n) {
			t.exports = n(379)('toLowerCase');
		},
		function(t, e, n) {
			function r(t, e) {
				return (s(t) ? i : a)(t, o(e, 3));
			}
			var i = n(339),
				o = n(16),
				a = n(359),
				s = n(3);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				return t && t.length ? i(t, a(e, 2), o) : void 0;
			}
			var i = n(117),
				o = n(352),
				a = n(16);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e) {
				return t && t.length ? i(t, o(e, 2), a) : void 0;
			}
			var i = n(117),
				o = n(16),
				a = n(358);
			t.exports = r;
		},
		function(t, e, n) {
			var r = n(362);
			t.exports = n(387)(function(t, e) {
				return null == t ? {} : r(t, e);
			});
		},
		function(t, e, n) {
			function r(t) {
				return a(t) ? i(s(t)) : o(t);
			}
			var i = n(364),
				o = n(365),
				a = n(68),
				s = n(20);
			t.exports = r;
		},
		function(t, e, n) {
			function r(t, e, n) {
				var r = u(t) ? i : s,
					c = 3 > arguments.length;
				return r(t, a(e, 4), n, c, o);
			}
			var i = n(116),
				o = n(34),
				a = n(16),
				s = n(366),
				u = n(3);
			t.exports = r;
		},
		function(t, e, n) {
			function r() {
				var t = arguments,
					e = i(t[0]);
				return 3 > t.length ? e : e.replace(t[1], t[2]);
			}
			var i = n(23);
			t.exports = r;
		},
		function(t, e, n) {
			t.exports = n(381)('round');
		},
		function(t, e) {
			function n(t) {
				return t;
			}
			t.exports = n;
		},
		function(t, e, n) {
			var r = n(118),
				i = n(367),
				o = n(119),
				a = n(417);
			t.exports = i(function(t) {
				return o(r(t, 1, a, !0));
			});
		},
		function(t, e, n) {
			function r(t) {
				return t && t.length ? i(t) : [];
			}
			var i = n(119);
			t.exports = r;
		},
		function(t, e, n) {
			t.exports = n(380)(function(t, e, n) {
				return t + (n ? ' ' : '') + e.toUpperCase();
			});
		},
		function(t, e, n) {
			function r(t, e, n) {
				return (
					(t = a(t)), (e = n ? void 0 : e), void 0 === e ? (o(t) ? s(t) : i(t)) : t.match(e) || []
				);
			}
			var i = n(343),
				o = n(394),
				a = n(23),
				s = n(410);
			t.exports = r;
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				if (null === t || void 0 === t)
					throw new TypeError('Object.assign cannot be called with null or undefined');
				return Object(t);
			}
			var i = Object.getOwnPropertySymbols,
				o = Object.prototype.hasOwnProperty,
				a = Object.prototype.propertyIsEnumerable;
			t.exports = (function() {
				try {
					if (!Object.assign) return !1;
					var t = new String('abc');
					if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1;
					for (var e = {}, n = 0; 10 > n; n++) e['_' + String.fromCharCode(n)] = n;
					if (
						'0123456789' !==
						Object.getOwnPropertyNames(e)
							.map(function(t) {
								return e[t];
							})
							.join('')
					)
						return !1;
					var r = {};
					return (
						'abcdefghijklmnopqrst'.split('').forEach(function(t) {
							r[t] = t;
						}),
						'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
					);
				} catch (t) {
					return !1;
				}
			})()
				? Object.assign
				: function(t, e) {
						for (var n, s, u = r(t), c = 1; arguments.length > c; c++) {
							n = Object(arguments[c]);
							for (var l in n) o.call(n, l) && (u[l] = n[l]);
							if (i) {
								s = i(n);
								for (var f = 0; s.length > f; f++) a.call(n, s[f]) && (u[s[f]] = n[s[f]]);
							}
						}
						return u;
				  };
		},
		function(t, e, n) {
			'use strict';
			function r() {}
			var i = n(446);
			t.exports = function() {
				function t(t, e, n, r, o, a) {
					if (a !== i) {
						var s = Error(
							'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
						);
						throw ((s.name = 'Invariant Violation'), s);
					}
				}
				function e() {
					return t;
				}
				t.isRequired = t;
				var n = {
					array: t,
					bool: t,
					func: t,
					number: t,
					object: t,
					string: t,
					symbol: t,
					any: t,
					arrayOf: e,
					element: t,
					instanceOf: e,
					node: t,
					objectOf: e,
					oneOf: e,
					oneOfType: e,
					shape: e,
					exact: e,
				};
				return (n.checkPropTypes = r), (n.PropTypes = n), n;
			};
		},
		function(t, e, n) {
			'use strict';
			t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
		},
		function(t, e, n) {
			'use strict';
			function r(t) {
				for (
					var e = arguments.length - 1,
						n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
						r = 0;
					e > r;
					r++
				)
					n += '&args[]=' + encodeURIComponent(arguments[r + 1]);
				m(
					!1,
					'Minified React error #' +
						t +
						'; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
					n
				);
			}
			function i(t, e, n) {
				(this.props = t), (this.context = e), (this.refs = x), (this.updater = n || E);
			}
			function o() {}
			function a(t, e, n) {
				(this.props = t), (this.context = e), (this.refs = x), (this.updater = n || E);
			}
			function s(t, e, n) {
				var r = void 0,
					i = {},
					o = null,
					a = null;
				if (null != e)
					for (r in (void 0 !== e.ref && (a = e.ref), void 0 !== e.key && (o = '' + e.key), e))
						D.call(e, r) && !F.hasOwnProperty(r) && (i[r] = e[r]);
				var s = arguments.length - 2;
				if (1 === s) i.children = n;
				else if (s > 1) {
					for (var u = Array(s), c = 0; s > c; c++) u[c] = arguments[c + 2];
					i.children = u;
				}
				if (t && t.defaultProps) for (r in (s = t.defaultProps)) void 0 === i[r] && (i[r] = s[r]);
				return { $$typeof: w, type: t, key: o, ref: a, props: i, _owner: L.current };
			}
			function u(t) {
				return 'object' == typeof t && null !== t && t.$$typeof === w;
			}
			function c(t) {
				var e = { '=': '=0', ':': '=2' };
				return (
					'$' +
					('' + t).replace(/[=:]/g, function(t) {
						return e[t];
					})
				);
			}
			function l(t, e, n, r) {
				if (B.length) {
					var i = B.pop();
					return (i.result = t), (i.keyPrefix = e), (i.func = n), (i.context = r), (i.count = 0), i;
				}
				return { result: t, keyPrefix: e, func: n, context: r, count: 0 };
			}
			function f(t) {
				(t.result = null),
					(t.keyPrefix = null),
					(t.func = null),
					(t.context = null),
					(t.count = 0),
					10 > B.length && B.push(t);
			}
			function h(t, e, n, i) {
				var o = typeof t;
				('undefined' !== o && 'boolean' !== o) || (t = null);
				var a = !1;
				if (null === t) a = !0;
				else
					switch (o) {
						case 'string':
						case 'number':
							a = !0;
							break;
						case 'object':
							switch (t.$$typeof) {
								case w:
								case S:
									a = !0;
							}
					}
				if (a) return n(i, t, '' === e ? '.' + p(t, 0) : e), 1;
				if (((a = 0), (e = '' === e ? '.' : e + ':'), Array.isArray(t)))
					for (var s = 0; t.length > s; s++) {
						o = t[s];
						var u = e + p(o, s);
						a += h(o, u, n, i);
					}
				else if (
					(null === t || void 0 === t
						? (u = null)
						: ((u = (T && t[T]) || t['@@iterator']), (u = 'function' == typeof u ? u : null)),
					'function' == typeof u)
				)
					for (t = u.call(t), s = 0; !(o = t.next()).done; )
						(o = o.value), (u = e + p(o, s++)), (a += h(o, u, n, i));
				else
					'object' === o &&
						((n = '' + t),
						r(
							'31',
							'[object Object]' === n ? 'object with keys {' + Object.keys(t).join(', ') + '}' : n,
							''
						));
				return a;
			}
			function p(t, e) {
				return 'object' == typeof t && null !== t && null != t.key ? c(t.key) : e.toString(36);
			}
			function d(t, e) {
				t.func.call(t.context, e, t.count++);
			}
			function g(t, e, n) {
				var r = t.result,
					i = t.keyPrefix;
				(t = t.func.call(t.context, e, t.count++)),
					Array.isArray(t)
						? y(t, r, n, b.thatReturnsArgument)
						: null != t &&
						  (u(t) &&
								((e =
									i +
									(!t.key || (e && e.key === t.key) ? '' : ('' + t.key).replace(R, '$&/') + '/') +
									n),
								(t = {
									$$typeof: w,
									type: t.type,
									key: e,
									ref: t.ref,
									props: t.props,
									_owner: t._owner,
								})),
						  r.push(t));
			}
			function y(t, e, n, r, i) {
				var o = '';
				null != n && (o = ('' + n).replace(R, '$&/') + '/'),
					(e = l(e, o, r, i)),
					null == t || h(t, '', g, e),
					f(e);
			}
			var v = n(444),
				m = n(330),
				x = n(329),
				b = n(328),
				_ = 'function' == typeof Symbol && Symbol.for,
				w = _ ? Symbol.for('react.element') : 60103,
				S = _ ? Symbol.for('react.portal') : 60106,
				M = _ ? Symbol.for('react.fragment') : 60107,
				P = _ ? Symbol.for('react.strict_mode') : 60108,
				C = _ ? Symbol.for('react.profiler') : 60114,
				O = _ ? Symbol.for('react.provider') : 60109,
				A = _ ? Symbol.for('react.context') : 60110,
				k = _ ? Symbol.for('react.async_mode') : 60111,
				I = _ ? Symbol.for('react.forward_ref') : 60112;
			_ && Symbol.for('react.timeout');
			var T = 'function' == typeof Symbol && Symbol.iterator,
				E = {
					isMounted: function() {
						return !1;
					},
					enqueueForceUpdate: function() {},
					enqueueReplaceState: function() {},
					enqueueSetState: function() {},
				};
			(i.prototype.isReactComponent = {}),
				(i.prototype.setState = function(t, e) {
					'object' != typeof t && 'function' != typeof t && null != t && r('85'),
						this.updater.enqueueSetState(this, t, e, 'setState');
				}),
				(i.prototype.forceUpdate = function(t) {
					this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
				}),
				(o.prototype = i.prototype);
			var j = (a.prototype = new o());
			(j.constructor = a), v(j, i.prototype), (j.isPureReactComponent = !0);
			var L = { current: null },
				D = Object.prototype.hasOwnProperty,
				F = { key: !0, ref: !0, __self: !0, __source: !0 },
				R = /\/+/g,
				B = [],
				N = {
					Children: {
						map: function(t, e, n) {
							if (null == t) return t;
							var r = [];
							return y(t, r, null, e, n), r;
						},
						forEach: function(t, e, n) {
							if (null == t) return t;
							(e = l(null, null, e, n)), null == t || h(t, '', d, e), f(e);
						},
						count: function(t) {
							return null == t ? 0 : h(t, '', b.thatReturnsNull, null);
						},
						toArray: function(t) {
							var e = [];
							return y(t, e, null, b.thatReturnsArgument), e;
						},
						only: function(t) {
							return u(t) || r('143'), t;
						},
					},
					createRef: function() {
						return { current: null };
					},
					Component: i,
					PureComponent: a,
					createContext: function(t, e) {
						return (
							void 0 === e && (e = null),
							(t = {
								$$typeof: A,
								_calculateChangedBits: e,
								_defaultValue: t,
								_currentValue: t,
								_currentValue2: t,
								_changedBits: 0,
								_changedBits2: 0,
								Provider: null,
								Consumer: null,
							}),
							(t.Provider = { $$typeof: O, _context: t }),
							(t.Consumer = t)
						);
					},
					forwardRef: function(t) {
						return { $$typeof: I, render: t };
					},
					Fragment: M,
					StrictMode: P,
					unstable_AsyncMode: k,
					unstable_Profiler: C,
					createElement: s,
					cloneElement: function(t, e, n) {
						(null === t || void 0 === t) && r('267', t);
						var i = void 0,
							o = v({}, t.props),
							a = t.key,
							s = t.ref,
							u = t._owner;
						if (null != e) {
							void 0 !== e.ref && ((s = e.ref), (u = L.current)),
								void 0 !== e.key && (a = '' + e.key);
							var c = void 0;
							t.type && t.type.defaultProps && (c = t.type.defaultProps);
							for (i in e)
								D.call(e, i) &&
									!F.hasOwnProperty(i) &&
									(o[i] = void 0 === e[i] && void 0 !== c ? c[i] : e[i]);
						}
						if (1 === (i = arguments.length - 2)) o.children = n;
						else if (i > 1) {
							c = Array(i);
							for (var l = 0; i > l; l++) c[l] = arguments[l + 2];
							o.children = c;
						}
						return { $$typeof: w, type: t.type, key: a, ref: s, props: o, _owner: u };
					},
					createFactory: function(t) {
						var e = s.bind(null, t);
						return (e.type = t), e;
					},
					isValidElement: u,
					version: '16.4.1',
					__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: L, assign: v },
				},
				z = { default: N },
				V = (z && N) || z;
			t.exports = V.default ? V.default : V;
		},
		function(t, e, n) {
			!(function(t, r) {
				r(e, n(8), n(296));
			})(0, function(t, e, n) {
				'use strict';
				function r(t, e) {
					var n,
						r = o(t),
						u = r.filter(function(e) {
							return i(e, t);
						}),
						c = 0,
						f = 0,
						h = [];
					if (u.length > 1) {
						var p = l(u);
						for (n = 0; u.length > n; ++n) {
							var d = u[n];
							d.angle = Math.atan2(d.x - p.x, d.y - p.y);
						}
						u.sort(function(t, e) {
							return e.angle - t.angle;
						});
						var g = u[u.length - 1];
						for (n = 0; u.length > n; ++n) {
							var y = u[n];
							f += (g.x + y.x) * (y.y - g.y);
							for (
								var v = { x: (y.x + g.x) / 2, y: (y.y + g.y) / 2 }, m = null, x = 0;
								y.parentIndex.length > x;
								++x
							)
								if (g.parentIndex.indexOf(y.parentIndex[x]) > -1) {
									var b = t[y.parentIndex[x]],
										_ = Math.atan2(y.x - b.x, y.y - b.y),
										w = Math.atan2(g.x - b.x, g.y - b.y),
										S = w - _;
									0 > S && (S += 2 * Math.PI);
									var M = w - S / 2,
										P = s(v, { x: b.x + b.radius * Math.sin(M), y: b.y + b.radius * Math.cos(M) });
									P > 2 * b.radius && (P = 2 * b.radius),
										(null === m || m.width > P) && (m = { circle: b, width: P, p1: y, p2: g });
								}
							null !== m && (h.push(m), (c += a(m.circle.radius, m.width)), (g = y));
						}
					} else {
						var C = t[0];
						for (n = 1; t.length > n; ++n) C.radius > t[n].radius && (C = t[n]);
						var O = !1;
						for (n = 0; t.length > n; ++n)
							if (s(t[n], C) > Math.abs(C.radius - t[n].radius)) {
								O = !0;
								break;
							}
						O
							? (c = f = 0)
							: ((c = C.radius * C.radius * Math.PI),
							  h.push({
									circle: C,
									p1: { x: C.x, y: C.y + C.radius },
									p2: { x: C.x - q, y: C.y + C.radius },
									width: 2 * C.radius,
							  }));
					}
					return (
						(f /= 2),
						e &&
							((e.area = c + f),
							(e.arcArea = c),
							(e.polygonArea = f),
							(e.arcs = h),
							(e.innerPoints = u),
							(e.intersectionPoints = r)),
						c + f
					);
				}
				function i(t, e) {
					for (var n = 0; e.length > n; ++n) if (s(t, e[n]) > e[n].radius + q) return !1;
					return !0;
				}
				function o(t) {
					for (var e = [], n = 0; t.length > n; ++n)
						for (var r = n + 1; t.length > r; ++r)
							for (var i = c(t[n], t[r]), o = 0; i.length > o; ++o) {
								var a = i[o];
								(a.parentIndex = [n, r]), e.push(a);
							}
					return e;
				}
				function a(t, e) {
					return t * t * Math.acos(1 - e / t) - (t - e) * Math.sqrt(e * (2 * t - e));
				}
				function s(t, e) {
					return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y));
				}
				function u(t, e, n) {
					if (n >= t + e) return 0;
					if (n <= Math.abs(t - e)) return Math.PI * Math.min(t, e) * Math.min(t, e);
					var r = t - (n * n - e * e + t * t) / (2 * n),
						i = e - (n * n - t * t + e * e) / (2 * n);
					return a(t, r) + a(e, i);
				}
				function c(t, e) {
					var n = s(t, e),
						r = t.radius,
						i = e.radius;
					if (n >= r + i || n <= Math.abs(r - i)) return [];
					var o = (r * r - i * i + n * n) / (2 * n),
						a = Math.sqrt(r * r - o * o),
						u = t.x + (o * (e.x - t.x)) / n,
						c = t.y + (o * (e.y - t.y)) / n,
						l = (a / n) * -(e.y - t.y),
						f = (a / n) * -(e.x - t.x);
					return [{ x: u + l, y: c - f }, { x: u - l, y: c + f }];
				}
				function l(t) {
					for (var e = { x: 0, y: 0 }, n = 0; t.length > n; ++n) (e.x += t[n].x), (e.y += t[n].y);
					return (e.x /= t.length), (e.y /= t.length), e;
				}
				function f(t, e, n, r) {
					r = r || {};
					var i = r.maxIterations || 100,
						o = r.tolerance || 1e-10,
						a = t(e),
						s = t(n),
						u = n - e;
					if (a * s > 0) throw 'Initial bisect points must have opposite signs';
					if (0 === a) return e;
					if (0 === s) return n;
					for (var c = 0; i > c; ++c) {
						u /= 2;
						var l = e + u,
							f = t(l);
						if ((0 > f * a || (e = l), Math.abs(u) < o || 0 === f)) return l;
					}
					return e + u;
				}
				function h(t) {
					for (var e = Array(t), n = 0; t > n; ++n) e[n] = 0;
					return e;
				}
				function p(t, e) {
					return h(t).map(function() {
						return h(e);
					});
				}
				function d(t, e) {
					for (var n = 0, r = 0; t.length > r; ++r) n += t[r] * e[r];
					return n;
				}
				function g(t) {
					return Math.sqrt(d(t, t));
				}
				function y(t, e, n) {
					for (var r = 0; e.length > r; ++r) t[r] = e[r] * n;
				}
				function v(t, e, n, r, i) {
					for (var o = 0; t.length > o; ++o) t[o] = e * n[o] + r * i[o];
				}
				function m(t, e, n) {
					function r(t) {
						for (var e = 0; t.length > e; e++) g[d][e] = t[e];
						g[d].fx = t.fx;
					}
					n = n || {};
					var i,
						o = n.maxIterations || 200 * e.length,
						a = n.nonZeroDelta || 1.05,
						s = n.zeroDelta || 0.001,
						u = n.minErrorDelta || 1e-6,
						c = n.minErrorDelta || 1e-5,
						l = void 0 !== n.rho ? n.rho : 1,
						f = void 0 !== n.chi ? n.chi : 2,
						h = void 0 !== n.psi ? n.psi : -0.5,
						p = void 0 !== n.sigma ? n.sigma : 0.5,
						d = e.length,
						g = Array(d + 1);
					(g[0] = e), (g[0].fx = t(e)), (g[0].id = 0);
					for (var y = 0; d > y; ++y) {
						var m = e.slice();
						(m[y] = m[y] ? m[y] * a : s),
							(g[y + 1] = m),
							(g[y + 1].fx = t(m)),
							(g[y + 1].id = y + 1);
					}
					for (
						var x = function(t, e) {
								return t.fx - e.fx;
							},
							b = e.slice(),
							_ = e.slice(),
							w = e.slice(),
							S = e.slice(),
							M = 0;
						o > M;
						++M
					) {
						if ((g.sort(x), n.history)) {
							var P = g.map(function(t) {
								var e = t.slice();
								return (e.fx = t.fx), (e.id = t.id), e;
							});
							P.sort(function(t, e) {
								return t.id - e.id;
							}),
								n.history.push({ x: g[0].slice(), fx: g[0].fx, simplex: P });
						}
						for (i = 0, y = 0; d > y; ++y) i = Math.max(i, Math.abs(g[0][y] - g[1][y]));
						if (Math.abs(g[0].fx - g[d].fx) < u && c > i) break;
						for (y = 0; d > y; ++y) {
							b[y] = 0;
							for (var C = 0; d > C; ++C) b[y] += g[C][y];
							b[y] /= d;
						}
						var O = g[d];
						if ((v(_, 1 + l, b, -l, O), (_.fx = t(_)), g[0].fx > _.fx))
							v(S, 1 + f, b, -f, O), (S.fx = t(S)), r(_.fx > S.fx ? S : _);
						else if (_.fx < g[d - 1].fx) r(_);
						else {
							var A = !1;
							if (
								(_.fx > O.fx
									? (v(w, 1 + h, b, -h, O), (w.fx = t(w)), O.fx > w.fx ? r(w) : (A = !0))
									: (v(w, 1 - h * l, b, h * l, O), (w.fx = t(w)), _.fx > w.fx ? r(w) : (A = !0)),
								A)
							) {
								if (p >= 1) break;
								for (y = 1; g.length > y; ++y) v(g[y], 1 - p, g[0], p, g[y]), (g[y].fx = t(g[y]));
							}
						}
					}
					return g.sort(x), { fx: g[0].fx, x: g[0] };
				}
				function x(t, e, n, r, i, o, a) {
					function s(s, f, p) {
						for (var g = 0; 16 > g; ++g)
							if (
								((i = (s + f) / 2),
								v(r.x, 1, n.x, i, e),
								(l = r.fx = t(r.x, r.fxprime)),
								(h = d(r.fxprime, e)),
								l > u + o * i * c || l >= p)
							)
								f = i;
							else {
								if (Math.abs(h) <= -a * c) return i;
								0 > h * (f - s) || (f = s), (s = i), (p = l);
							}
						return 0;
					}
					var u = n.fx,
						c = d(n.fxprime, e),
						l = u,
						f = u,
						h = c,
						p = 0;
					(i = i || 1), (o = o || 1e-6), (a = a || 0.1);
					for (var g = 0; 10 > g; ++g) {
						if (
							(v(r.x, 1, n.x, i, e),
							(l = r.fx = t(r.x, r.fxprime)),
							(h = d(r.fxprime, e)),
							l > u + o * i * c || (g && l >= f))
						)
							return s(p, i, f);
						if (Math.abs(h) <= -a * c) return i;
						if (h >= 0) return s(i, p, l);
						(f = l), (p = i), (i *= 2);
					}
					return i;
				}
				function b(t, e, n) {
					var r,
						i,
						o,
						a = { x: e.slice(), fx: 0, fxprime: e.slice() },
						s = { x: e.slice(), fx: 0, fxprime: e.slice() },
						u = e.slice(),
						c = 1;
					(n = n || {}),
						(o = n.maxIterations || 20 * e.length),
						(a.fx = t(a.x, a.fxprime)),
						(r = a.fxprime.slice()),
						y(r, a.fxprime, -1);
					for (var l = 0; o > l; ++l) {
						if (
							((c = x(t, r, a, s, c)),
							n.history &&
								n.history.push({ x: a.x.slice(), fx: a.fx, fxprime: a.fxprime.slice(), alpha: c }),
							c)
						) {
							v(u, 1, s.fxprime, -1, a.fxprime);
							var f = d(a.fxprime, a.fxprime);
							v(r, Math.max(0, d(u, s.fxprime) / f), r, -1, s.fxprime), (i = a), (a = s), (s = i);
						} else y(r, a.fxprime, -1);
						if (1e-5 >= g(a.fxprime)) break;
					}
					return (
						n.history &&
							n.history.push({ x: a.x.slice(), fx: a.fx, fxprime: a.fxprime.slice(), alpha: c }),
						a
					);
				}
				function _(t, e) {
					(e = e || {}), (e.maxIterations = e.maxIterations || 500);
					var n = e.initialLayout || C,
						r = e.lossFunction || k;
					t = S(t);
					var i,
						o = n(t, e),
						a = [],
						s = [];
					for (i in o) o.hasOwnProperty(i) && (a.push(o[i].x), a.push(o[i].y), s.push(i));
					for (
						var u = m(
								function(e) {
									for (var n = {}, i = 0; s.length > i; ++i) {
										var a = s[i];
										n[a] = { x: e[2 * i], y: e[2 * i + 1], radius: o[a].radius };
									}
									return r(n, t);
								},
								a,
								e
							),
							c = u.x,
							l = 0;
						s.length > l;
						++l
					)
						(i = s[l]), (o[i].x = c[2 * l]), (o[i].y = c[2 * l + 1]);
					return o;
				}
				function w(t, e, n) {
					return Math.min(t, e) * Math.min(t, e) * Math.PI > n + X
						? f(
								function(r) {
									return u(t, e, r) - n;
								},
								0,
								t + e
						  )
						: Math.abs(t - e);
				}
				function S(t) {
					t = t.slice();
					var e,
						n,
						r,
						i,
						o = [],
						a = {};
					for (e = 0; t.length > e; ++e) {
						var s = t[e];
						1 == s.sets.length
							? o.push(s.sets[0])
							: 2 == s.sets.length &&
							  ((r = s.sets[0]), (i = s.sets[1]), (a[[r, i]] = !0), (a[[i, r]] = !0));
					}
					for (
						o.sort(function(t, e) {
							return t > e;
						}),
							e = 0;
						o.length > e;
						++e
					)
						for (r = o[e], n = e + 1; o.length > n; ++n)
							(i = o[n]), [r, i] in a || t.push({ sets: [r, i], size: 0 });
					return t;
				}
				function M(t, e, n) {
					var r = p(e.length, e.length),
						i = p(e.length, e.length);
					return (
						t
							.filter(function(t) {
								return 2 == t.sets.length;
							})
							.map(function(t) {
								var o = n[t.sets[0]],
									a = n[t.sets[1]],
									s = Math.sqrt(e[o].size / Math.PI),
									u = Math.sqrt(e[a].size / Math.PI),
									c = w(s, u, t.size);
								r[o][a] = r[a][o] = c;
								var l = 0;
								t.size + 1e-10 < Math.min(e[o].size, e[a].size)
									? t.size > 1e-10 || (l = -1)
									: (l = 1),
									(i[o][a] = i[a][o] = l);
							}),
						{ distances: r, constraints: i }
					);
				}
				function P(t, e, n, r) {
					var i,
						o = 0;
					for (i = 0; e.length > i; ++i) e[i] = 0;
					for (i = 0; n.length > i; ++i)
						for (var a = t[2 * i], s = t[2 * i + 1], u = i + 1; n.length > u; ++u) {
							var c = t[2 * u],
								l = t[2 * u + 1],
								f = n[i][u],
								h = r[i][u],
								p = (c - a) * (c - a) + (l - s) * (l - s),
								d = Math.sqrt(p),
								g = p - f * f;
							(h > 0 && f >= d) ||
								(0 > h && d >= f) ||
								((o += 2 * g * g),
								(e[2 * i] += 4 * g * (a - c)),
								(e[2 * i + 1] += 4 * g * (s - l)),
								(e[2 * u] += 4 * g * (c - a)),
								(e[2 * u + 1] += 4 * g * (l - s)));
						}
					return o;
				}
				function C(t, e) {
					var n = A(t, e),
						r = e.lossFunction || k;
					if (t.length >= 8) {
						var i = O(t, e),
							o = r(i, t);
						r(n, t) > o + 1e-8 && (n = i);
					}
					return n;
				}
				function O(t, e) {
					e = e || {};
					var n,
						r = e.restarts || 10,
						i = [],
						o = {};
					for (n = 0; t.length > n; ++n) {
						var a = t[n];
						1 == a.sets.length && ((o[a.sets[0]] = i.length), i.push(a));
					}
					var s = M(t, i, o),
						u = s.distances,
						c = s.constraints,
						l = g(u.map(g)) / u.length;
					u = u.map(function(t) {
						return t.map(function(t) {
							return t / l;
						});
					});
					var f,
						p,
						d = function(t, e) {
							return P(t, e, u, c);
						};
					for (n = 0; r > n; ++n) {
						(p = b(d, h(2 * u.length).map(Math.random), e)), (f && p.fx >= f.fx) || (f = p);
					}
					var v = f.x,
						m = {};
					for (n = 0; i.length > n; ++n) {
						var x = i[n];
						m[x.sets[0]] = {
							x: v[2 * n] * l,
							y: v[2 * n + 1] * l,
							radius: Math.sqrt(x.size / Math.PI),
						};
					}
					if (e.history) for (n = 0; e.history.length > n; ++n) y(e.history[n].x, l);
					return m;
				}
				function A(t, e) {
					function n(t, e) {
						return e.size - t.size;
					}
					function r(t) {
						return t.set in m;
					}
					function i(t, e) {
						(s[e].x = t.x), (s[e].y = t.y), (m[e] = !0);
					}
					for (
						var o, a = e && e.lossFunction ? e.lossFunction : k, s = {}, u = {}, l = 0;
						t.length > l;
						++l
					) {
						var f = t[l];
						1 == f.sets.length &&
							((o = f.sets[0]),
							(s[o] = {
								x: 1e10,
								y: 1e10,
								rowid: s.length,
								size: f.size,
								radius: Math.sqrt(f.size / Math.PI),
							}),
							(u[o] = []));
					}
					for (
						t = t.filter(function(t) {
							return 2 == t.sets.length;
						}),
							l = 0;
						t.length > l;
						++l
					) {
						var h = t[l],
							p = h.hasOwnProperty('weight') ? h.weight : 1,
							d = h.sets[0],
							g = h.sets[1];
						h.size + X < Math.min(s[d].size, s[g].size) || (p = 0),
							u[d].push({ set: g, size: h.size, weight: p }),
							u[g].push({ set: d, size: h.size, weight: p });
					}
					var y = [];
					for (o in u)
						if (u.hasOwnProperty(o)) {
							var v = 0;
							for (l = 0; u[o].length > l; ++l) v += u[o][l].size * u[o][l].weight;
							y.push({ set: o, size: v });
						}
					y.sort(n);
					var m = {};
					for (i({ x: 0, y: 0 }, y[0].set), l = 1; y.length > l; ++l) {
						var x = y[l].set,
							b = u[x].filter(r);
						if (((o = s[x]), b.sort(n), 0 === b.length))
							throw 'ERROR: missing pairwise overlap information';
						for (var _ = [], S = 0; b.length > S; ++S) {
							var M = s[b[S].set],
								P = w(o.radius, M.radius, b[S].size);
							_.push({ x: M.x + P, y: M.y }),
								_.push({ x: M.x - P, y: M.y }),
								_.push({ y: M.y + P, x: M.x }),
								_.push({ y: M.y - P, x: M.x });
							for (var C = S + 1; b.length > C; ++C)
								for (
									var O = s[b[C].set],
										A = w(o.radius, O.radius, b[C].size),
										I = c({ x: M.x, y: M.y, radius: P }, { x: O.x, y: O.y, radius: A }),
										T = 0;
									I.length > T;
									++T
								)
									_.push(I[T]);
						}
						var E = 1e50,
							j = _[0];
						for (S = 0; _.length > S; ++S) {
							(s[x].x = _[S].x), (s[x].y = _[S].y);
							var L = a(s, t);
							E > L && ((E = L), (j = _[S]));
						}
						i(j, x);
					}
					return s;
				}
				function k(t, e) {
					for (var n = 0, i = 0; e.length > i; ++i) {
						var o,
							a = e[i];
						if (1 != a.sets.length) {
							if (2 == a.sets.length) {
								var c = t[a.sets[0]],
									l = t[a.sets[1]];
								o = u(c.radius, l.radius, s(c, l));
							} else
								o = r(
									(function(e) {
										return e.map(function(e) {
											return t[e];
										});
									})(a.sets)
								);
							n += (a.hasOwnProperty('weight') ? a.weight : 1) * (o - a.size) * (o - a.size);
						}
					}
					return n;
				}
				function I(t, e, n) {
					t.sort(
						null === n
							? function(t, e) {
									return e.radius - t.radius;
							  }
							: n
					);
					var r;
					if (t.length > 0) {
						var i = t[0].x,
							o = t[0].y;
						for (r = 0; t.length > r; ++r) (t[r].x -= i), (t[r].y -= o);
					}
					if (2 == t.length) {
						s(t[0], t[1]) < Math.abs(t[1].radius - t[0].radius) &&
							((t[1].x = t[0].x + t[0].radius - t[1].radius - 1e-10), (t[1].y = t[0].y));
					}
					if (t.length > 1) {
						var a,
							u,
							c = Math.atan2(t[1].x, t[1].y) - e,
							l = Math.cos(c),
							f = Math.sin(c);
						for (r = 0; t.length > r; ++r)
							(a = t[r].x), (u = t[r].y), (t[r].x = l * a - f * u), (t[r].y = f * a + l * u);
					}
					if (t.length > 2) {
						for (var h = Math.atan2(t[2].x, t[2].y) - e; 0 > h; ) h += 2 * Math.PI;
						for (; h > 2 * Math.PI; ) h -= 2 * Math.PI;
						if (h > Math.PI) {
							var p = t[1].y / (1e-10 + t[1].x);
							for (r = 0; t.length > r; ++r) {
								var d = (t[r].x + p * t[r].y) / (1 + p * p);
								(t[r].x = 2 * d - t[r].x), (t[r].y = 2 * d * p - t[r].y);
							}
						}
					}
				}
				function T(t) {
					function e(t) {
						return t.parent !== t && (t.parent = e(t.parent)), t.parent;
					}
					t.map(function(t) {
						t.parent = t;
					});
					for (var n = 0; t.length > n; ++n)
						for (var r = n + 1; t.length > r; ++r) {
							var i = t[n].radius + t[r].radius;
							s(t[n], t[r]) + 1e-10 < i &&
								(function(t, n) {
									e(t).parent = e(n);
								})(t[r], t[n]);
						}
					var o,
						a = {};
					for (n = 0; t.length > n; ++n)
						(o = e(t[n]).parent.setid), o in a || (a[o] = []), a[o].push(t[n]);
					t.map(function(t) {
						delete t.parent;
					});
					var u = [];
					for (o in a) a.hasOwnProperty(o) && u.push(a[o]);
					return u;
				}
				function E(t) {
					var e = function(e) {
						return {
							max: Math.max.apply(
								null,
								t.map(function(t) {
									return t[e] + t.radius;
								})
							),
							min: Math.min.apply(
								null,
								t.map(function(t) {
									return t[e] - t.radius;
								})
							),
						};
					};
					return { xRange: e('x'), yRange: e('y') };
				}
				function j(t, e, n) {
					function r(t, e, n) {
						if (t) {
							var r,
								i,
								o,
								s = t.bounds;
							e
								? (r = l.xRange.max - s.xRange.min + f)
								: ((r = l.xRange.max - s.xRange.max),
								  0 > (o = (s.xRange.max - s.xRange.min) / 2 - (l.xRange.max - l.xRange.min) / 2) &&
										(r += o)),
								n
									? (i = l.yRange.max - s.yRange.min + f)
									: ((i = l.yRange.max - s.yRange.max),
									  0 >
											(o = (s.yRange.max - s.yRange.min) / 2 - (l.yRange.max - l.yRange.min) / 2) &&
											(i += o));
							for (var u = 0; t.length > u; ++u) (t[u].x += r), (t[u].y += i), a.push(t[u]);
						}
					}
					null === e && (e = Math.PI / 2);
					var i,
						o,
						a = [];
					for (o in t)
						if (t.hasOwnProperty(o)) {
							var s = t[o];
							a.push({ x: s.x, y: s.y, radius: s.radius, setid: o });
						}
					var u = T(a);
					for (i = 0; u.length > i; ++i) {
						I(u[i], e, n);
						var c = E(u[i]);
						(u[i].size = (c.xRange.max - c.xRange.min) * (c.yRange.max - c.yRange.min)),
							(u[i].bounds = c);
					}
					u.sort(function(t, e) {
						return e.size - t.size;
					}),
						(a = u[0]);
					for (var l = a.bounds, f = (l.xRange.max - l.xRange.min) / 50, h = 1; u.length > h; )
						r(u[h], !0, !1), r(u[h + 1], !1, !0), r(u[h + 2], !0, !0), (h += 3), (l = E(a));
					var p = {};
					for (i = 0; a.length > i; ++i) p[a[i].setid] = a[i];
					return p;
				}
				function L(t, e, n, r) {
					var i = [],
						o = [];
					for (var a in t) t.hasOwnProperty(a) && (o.push(a), i.push(t[a]));
					(e -= 2 * r), (n -= 2 * r);
					var s = E(i),
						u = s.xRange,
						c = s.yRange;
					if (u.max == u.min || c.max == c.min)
						return console.log('not scaling solution: zero size detected'), t;
					for (
						var l = e / (u.max - u.min),
							f = n / (c.max - c.min),
							h = Math.min(f, l),
							p = (e - (u.max - u.min) * h) / 2,
							d = (n - (c.max - c.min) * h) / 2,
							g = {},
							y = 0;
						i.length > y;
						++y
					) {
						var v = i[y];
						g[o[y]] = {
							radius: h * v.radius,
							x: r + p + (v.x - u.min) * h,
							y: r + d + (v.y - c.min) * h,
						};
					}
					return g;
				}
				function D() {
					function t(t) {
						function h(t) {
							return t.sets in _ ? _[t.sets] : 1 == t.sets.length ? '' + t.sets[0] : void 0;
						}
						var p = t.datum(),
							d = {};
						p.forEach(function(t) {
							0 == t.size && 1 == t.sets.length && (d[t.sets[0]] = 1);
						}),
							(p = p.filter(function(t) {
								return !t.sets.some(function(t) {
									return t in d;
								});
							}));
						var m = {},
							x = {};
						if (p.length > 0) {
							var b = y(p, { lossFunction: v });
							s && (b = j(b, a, f)), (m = L(b, n, r, i)), (x = z(m, p));
						}
						var _ = {};
						p.forEach(function(t) {
							t.label && (_[t.sets] = t.label);
						}),
							t
								.selectAll('svg')
								.data([m])
								.enter()
								.append('svg');
						var w = t
								.select('svg')
								.attr('width', n)
								.attr('height', r),
							S = {},
							M = !1;
						w.selectAll('.venn-area path').each(function(t) {
							var n = e.select(this).attr('d');
							1 == t.sets.length && n && ((M = !0), (S[t.sets[0]] = Y(n)));
						});
						var P = function(t) {
								return function(e) {
									return W(
										t.sets.map(function(t) {
											var i = S[t],
												o = m[t];
											return (
												i || (i = { x: n / 2, y: r / 2, radius: 1 }),
												o || (o = { x: n / 2, y: r / 2, radius: 1 }),
												{
													x: i.x * (1 - e) + o.x * e,
													y: i.y * (1 - e) + o.y * e,
													radius: i.radius * (1 - e) + o.radius * e,
												}
											);
										})
									);
								};
							},
							C = w.selectAll('.venn-area').data(p, function(t) {
								return t.sets;
							}),
							O = C.enter()
								.append('g')
								.attr('class', function(t) {
									return 'venn-area venn-' + (1 == t.sets.length ? 'circle' : 'intersection');
								})
								.attr('data-venn-sets', function(t) {
									return t.sets.join('_');
								}),
							A = O.append('path'),
							k = O.append('text')
								.attr('class', 'label')
								.text(function(t) {
									return h(t);
								})
								.attr('text-anchor', 'middle')
								.attr('dy', '.35em')
								.attr('x', n / 2)
								.attr('y', r / 2);
						c &&
							(A.style('fill-opacity', '0')
								.filter(function(t) {
									return 1 == t.sets.length;
								})
								.style('fill', function(t) {
									return g(t.sets);
								})
								.style('fill-opacity', '.25'),
							k.style('fill', function(t) {
								return 1 == t.sets.length ? g(t.sets) : '#444';
							}));
						var I = t;
						M
							? ((I = t.transition('venn').duration(o)), I.selectAll('path').attrTween('d', P))
							: I.selectAll('path').attr('d', function(t) {
									return W(
										t.sets.map(function(t) {
											return m[t];
										})
									);
							  });
						var T = I.selectAll('text')
							.filter(function(t) {
								return t.sets in x;
							})
							.text(function(t) {
								return h(t);
							})
							.attr('x', function(t) {
								return Math.floor(x[t.sets].x);
							})
							.attr('y', function(t) {
								return Math.floor(x[t.sets].y);
							});
						u &&
							(M ? ('on' in T ? T.on('end', F(m, h)) : T.each('end', F(m, h))) : T.each(F(m, h)));
						var E = C.exit()
							.transition('venn')
							.duration(o)
							.remove();
						E.selectAll('path').attrTween('d', P);
						var D = E.selectAll('text')
							.attr('x', n / 2)
							.attr('y', r / 2);
						return (
							null !== l &&
								(k.style('font-size', '0px'), T.style('font-size', l), D.style('font-size', '0px')),
							{ circles: m, textCentres: x, nodes: C, enter: O, update: I, exit: E }
						);
					}
					var n = 600,
						r = 350,
						i = 15,
						o = 1e3,
						a = Math.PI / 2,
						s = !0,
						u = !0,
						c = !0,
						l = null,
						f = null,
						h = {},
						p = [
							'#1f77b4',
							'#ff7f0e',
							'#2ca02c',
							'#d62728',
							'#9467bd',
							'#8c564b',
							'#e377c2',
							'#7f7f7f',
							'#bcbd22',
							'#17becf',
						],
						d = 0,
						g = function(t) {
							if (t in h) return h[t];
							var e = (h[t] = p[d]);
							return (d += 1), 10 > d || (d = 0), e;
						},
						y = _,
						v = k;
					return (
						(t.wrap = function(e) {
							return arguments.length ? ((u = e), t) : u;
						}),
						(t.width = function(e) {
							return arguments.length ? ((n = e), t) : n;
						}),
						(t.height = function(e) {
							return arguments.length ? ((r = e), t) : r;
						}),
						(t.padding = function(e) {
							return arguments.length ? ((i = e), t) : i;
						}),
						(t.colours = function(e) {
							return arguments.length ? ((g = e), t) : g;
						}),
						(t.fontSize = function(e) {
							return arguments.length ? ((l = e), t) : l;
						}),
						(t.duration = function(e) {
							return arguments.length ? ((o = e), t) : o;
						}),
						(t.layoutFunction = function(e) {
							return arguments.length ? ((y = e), t) : y;
						}),
						(t.normalize = function(e) {
							return arguments.length ? ((s = e), t) : s;
						}),
						(t.styled = function(e) {
							return arguments.length ? ((c = e), t) : c;
						}),
						(t.orientation = function(e) {
							return arguments.length ? ((a = e), t) : a;
						}),
						(t.orientationOrder = function(e) {
							return arguments.length ? ((f = e), t) : f;
						}),
						(t.lossFunction = function(e) {
							return arguments.length ? ((v = e), t) : v;
						}),
						t
					);
				}
				function F(t, n) {
					return function() {
						for (
							var r,
								i = e.select(this),
								o = i.datum(),
								a = t[o.sets[0]].radius || 50,
								s = n(o) || '',
								u = s.split(/\s+/).reverse(),
								c = (s.length + u.length) / 3,
								l = u.pop(),
								f = [l],
								h = 0,
								p = i
									.text(null)
									.append('tspan')
									.text(l);
							;

						) {
							if (!(l = u.pop())) break;
							f.push(l),
								(r = f.join(' ')),
								p.text(r),
								r.length > c &&
									p.node().getComputedTextLength() > a &&
									(f.pop(), p.text(f.join(' ')), (f = [l]), (p = i.append('tspan').text(l)), h++);
						}
						var d = 0.35 - (1.1 * h) / 2,
							g = i.attr('x'),
							y = i.attr('y');
						i.selectAll('tspan')
							.attr('x', g)
							.attr('y', y)
							.attr('dy', function(t, e) {
								return d + 1.1 * e + 'em';
							});
					};
				}
				function R(t, e, n) {
					var r,
						i,
						o = e[0].radius - s(e[0], t);
					for (r = 1; e.length > r; ++r) (i = e[r].radius - s(e[r], t)) > o || (o = i);
					for (r = 0; n.length > r; ++r) (i = s(n[r], t) - n[r].radius) > o || (o = i);
					return o;
				}
				function B(t, e) {
					var n,
						i = [];
					for (n = 0; t.length > n; ++n) {
						var o = t[n];
						i.push({ x: o.x, y: o.y }),
							i.push({ x: o.x + o.radius / 2, y: o.y }),
							i.push({ x: o.x - o.radius / 2, y: o.y }),
							i.push({ x: o.x, y: o.y + o.radius / 2 }),
							i.push({ x: o.x, y: o.y - o.radius / 2 });
					}
					var a = i[0],
						u = R(i[0], t, e);
					for (n = 1; i.length > n; ++n) {
						var c = R(i[n], t, e);
						u > c || ((a = i[n]), (u = c));
					}
					var f = m(
							function(n) {
								return -1 * R({ x: n[0], y: n[1] }, t, e);
							},
							[a.x, a.y],
							{ maxIterations: 500, minErrorDelta: 1e-10 }
						).x,
						h = { x: f[0], y: f[1] },
						p = !0;
					for (n = 0; t.length > n; ++n)
						if (s(h, t[n]) > t[n].radius) {
							p = !1;
							break;
						}
					for (n = 0; e.length > n; ++n)
						if (s(h, e[n]) < e[n].radius) {
							p = !1;
							break;
						}
					if (!p)
						if (1 == t.length) h = { x: t[0].x, y: t[0].y };
						else {
							var d = {};
							r(t, d),
								(h =
									0 === d.arcs.length
										? { x: 0, y: -1e3, disjoint: !0 }
										: 1 == d.arcs.length
											? { x: d.arcs[0].circle.x, y: d.arcs[0].circle.y }
											: e.length
												? B(t, [])
												: l(
														d.arcs.map(function(t) {
															return t.p1;
														})
												  ));
						}
					return h;
				}
				function N(t) {
					var e = {},
						n = [];
					for (var r in t) n.push(r), (e[r] = []);
					for (var i = 0; n.length > i; i++)
						for (var o = t[n[i]], a = i + 1; n.length > a; ++a) {
							var u = t[n[a]],
								c = s(o, u);
							c + u.radius > o.radius + 1e-10
								? c + o.radius > u.radius + 1e-10 || e[n[i]].push(n[a])
								: e[n[a]].push(n[i]);
						}
					return e;
				}
				function z(t, e) {
					for (var n = {}, r = N(t), i = 0; e.length > i; ++i) {
						for (var o = e[i].sets, a = {}, s = {}, u = 0; o.length > u; ++u) {
							a[o[u]] = !0;
							for (var c = r[o[u]], l = 0; c.length > l; ++l) s[c[l]] = !0;
						}
						var f = [],
							h = [];
						for (var p in t) p in a ? f.push(t[p]) : p in s || h.push(t[p]);
						var d = B(f, h);
						(n[o] = d),
							d.disjoint &&
								e[i].size > 0 &&
								console.log('WARNING: area ' + o + ' not represented on screen');
					}
					return n;
				}
				function V(t, e) {
					function n(t) {
						for (var e = 0; t.length > e; ++e) if (!(t[e] in i)) return !1;
						return !0;
					}
					for (var r = N(t.selectAll('svg').datum()), i = {}, o = 0; e.sets.length > o; ++o) {
						var a = e.sets[o];
						for (var s in r)
							for (var u = r[s], c = 0; u.length > c; ++c)
								if (u[c] == a) {
									i[s] = !0;
									break;
								}
					}
					t.selectAll('g').sort(function(t, r) {
						return t.sets.length != r.sets.length
							? t.sets.length - r.sets.length
							: t == e
								? n(r.sets)
									? -1
									: 1
								: r == e
									? n(t.sets)
										? 1
										: -1
									: r.size - t.size;
					});
				}
				function G(t, e, n) {
					var r = [];
					return (
						r.push('\nM', t, e),
						r.push('\nm', -n, 0),
						r.push('\na', n, n, 0, 1, 0, 2 * n, 0),
						r.push('\na', n, n, 0, 1, 0, 2 * -n, 0),
						r.join(' ')
					);
				}
				function Y(t) {
					var e = t.split(' ');
					return { x: parseFloat(e[1]), y: parseFloat(e[2]), radius: -parseFloat(e[4]) };
				}
				function W(t) {
					var e = {};
					r(t, e);
					var n = e.arcs;
					if (0 === n.length) return 'M 0 0';
					if (1 == n.length) {
						var i = n[0].circle;
						return G(i.x, i.y, i.radius);
					}
					for (var o = ['\nM', n[0].p2.x, n[0].p2.y], a = 0; n.length > a; ++a) {
						var s = n[a],
							u = s.circle.radius;
						o.push('\nA', u, u, 0, s.width > u ? 1 : 0, 1, s.p1.x, s.p1.y);
					}
					return o.join(' ');
				}
				var q = 1e-10,
					X = 1e-10;
				(t.intersectionArea = r),
					(t.circleCircleIntersection = c),
					(t.circleOverlap = u),
					(t.circleArea = a),
					(t.distance = s),
					(t.venn = _),
					(t.greedyLayout = A),
					(t.scaleSolution = L),
					(t.normalizeSolution = j),
					(t.bestInitialLayout = C),
					(t.lossFunction = k),
					(t.disjointCluster = T),
					(t.distanceFromIntersectArea = w),
					(t.VennDiagram = D),
					(t.wrapText = F),
					(t.computeTextCentres = z),
					(t.computeTextCentre = B),
					(t.sortAreas = V),
					(t.circlePath = G),
					(t.circleFromPath = Y),
					(t.intersectionAreaPath = W),
					Object.defineProperty(t, '__esModule', { value: !0 });
			});
		},
		function(t, e) {
			var n;
			n = (function() {
				return this;
			})();
			try {
				n = n || Function('return this')() || (0, eval)('this');
			} catch (t) {
				'object' == typeof window && (n = window);
			}
			t.exports = n;
		},
		function(t, e, n) {
			var r;
			!(function(e) {
				'use strict';
				function i() {}
				function o(t, e) {
					for (var n = t.length; n--; ) if (t[n].listener === e) return n;
					return -1;
				}
				function a(t) {
					return function() {
						return this[t].apply(this, arguments);
					};
				}
				function s(t) {
					return (
						'function' == typeof t ||
						t instanceof RegExp ||
						(!(!t || 'object' != typeof t) && s(t.listener))
					);
				}
				var u = i.prototype,
					c = e.EventEmitter;
				(u.getListeners = function(t) {
					var e,
						n,
						r = this._getEvents();
					if (t instanceof RegExp) {
						e = {};
						for (n in r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
					} else e = r[t] || (r[t] = []);
					return e;
				}),
					(u.flattenListeners = function(t) {
						var e,
							n = [];
						for (e = 0; t.length > e; e += 1) n.push(t[e].listener);
						return n;
					}),
					(u.getListenersAsObject = function(t) {
						var e,
							n = this.getListeners(t);
						return n instanceof Array && ((e = {}), (e[t] = n)), e || n;
					}),
					(u.addListener = function(t, e) {
						if (!s(e)) throw new TypeError('listener must be a function');
						var n,
							r = this.getListenersAsObject(t),
							i = 'object' == typeof e;
						for (n in r)
							r.hasOwnProperty(n) &&
								-1 === o(r[n], e) &&
								r[n].push(i ? e : { listener: e, once: !1 });
						return this;
					}),
					(u.on = a('addListener')),
					(u.addOnceListener = function(t, e) {
						return this.addListener(t, { listener: e, once: !0 });
					}),
					(u.once = a('addOnceListener')),
					(u.defineEvent = function(t) {
						return this.getListeners(t), this;
					}),
					(u.defineEvents = function(t) {
						for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
						return this;
					}),
					(u.removeListener = function(t, e) {
						var n,
							r,
							i = this.getListenersAsObject(t);
						for (r in i) i.hasOwnProperty(r) && -1 !== (n = o(i[r], e)) && i[r].splice(n, 1);
						return this;
					}),
					(u.off = a('removeListener')),
					(u.addListeners = function(t, e) {
						return this.manipulateListeners(!1, t, e);
					}),
					(u.removeListeners = function(t, e) {
						return this.manipulateListeners(!0, t, e);
					}),
					(u.manipulateListeners = function(t, e, n) {
						var r,
							i,
							o = t ? this.removeListener : this.addListener,
							a = t ? this.removeListeners : this.addListeners;
						if ('object' != typeof e || e instanceof RegExp)
							for (r = n.length; r--; ) o.call(this, e, n[r]);
						else
							for (r in e)
								e.hasOwnProperty(r) &&
									(i = e[r]) &&
									('function' == typeof i ? o.call(this, r, i) : a.call(this, r, i));
						return this;
					}),
					(u.removeEvent = function(t) {
						var e,
							n = typeof t,
							r = this._getEvents();
						if ('string' === n) delete r[t];
						else if (t instanceof RegExp)
							for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
						else delete this._events;
						return this;
					}),
					(u.removeAllListeners = a('removeEvent')),
					(u.emitEvent = function(t, e) {
						var n,
							r,
							i,
							o,
							a = this.getListenersAsObject(t);
						for (o in a)
							if (a.hasOwnProperty(o))
								for (n = a[o].slice(0), i = 0; n.length > i; i++)
									(r = n[i]),
										!0 === r.once && this.removeListener(t, r.listener),
										r.listener.apply(this, e || []) === this._getOnceReturnValue() &&
											this.removeListener(t, r.listener);
						return this;
					}),
					(u.trigger = a('emitEvent')),
					(u.emit = function(t) {
						return this.emitEvent(t, Array.prototype.slice.call(arguments, 1));
					}),
					(u.setOnceReturnValue = function(t) {
						return (this._onceReturnValue = t), this;
					}),
					(u._getOnceReturnValue = function() {
						return !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue;
					}),
					(u._getEvents = function() {
						return this._events || (this._events = {});
					}),
					(i.noConflict = function() {
						return (e.EventEmitter = c), i;
					}),
					void 0 !==
						(r = function() {
							return i;
						}.call(e, n, e, t)) && (t.exports = r);
			})(this || {});
		},
		function(t, e, n) {
			n(42), (t.exports = n(42));
		},
	]);
});
