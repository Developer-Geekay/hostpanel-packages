function Zx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Jx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dg = { exports: {} }, Va = {}, _g = { exports: {} }, Ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs = Symbol.for("react.element"), e1 = Symbol.for("react.portal"), t1 = Symbol.for("react.fragment"), n1 = Symbol.for("react.strict_mode"), r1 = Symbol.for("react.profiler"), o1 = Symbol.for("react.provider"), i1 = Symbol.for("react.context"), s1 = Symbol.for("react.forward_ref"), l1 = Symbol.for("react.suspense"), a1 = Symbol.for("react.memo"), c1 = Symbol.for("react.lazy"), Xp = Symbol.iterator;
function u1(e) {
  return e === null || typeof e != "object" ? null : (e = Xp && e[Xp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Wg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ug = Object.assign, Vg = {};
function Ai(e, t, n) {
  this.props = e, this.context = t, this.refs = Vg, this.updater = n || Wg;
}
Ai.prototype.isReactComponent = {};
Ai.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ai.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hg() {
}
Hg.prototype = Ai.prototype;
function df(e, t, n) {
  this.props = e, this.context = t, this.refs = Vg, this.updater = n || Wg;
}
var ff = df.prototype = new Hg();
ff.constructor = df;
Ug(ff, Ai.prototype);
ff.isPureReactComponent = !0;
var Qp = Array.isArray, Kg = Object.prototype.hasOwnProperty, pf = { current: null }, Yg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gg(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Kg.call(t, r) && !Yg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Qs, type: e, key: i, ref: s, props: o, _owner: pf.current };
}
function d1(e, t) {
  return { $$typeof: Qs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qs;
}
function f1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var qp = /\/+/g;
function iu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? f1("" + e.key) : t.toString(36);
}
function _l(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Qs:
        case e1:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + iu(s, 0) : r, Qp(o) ? (n = "", e != null && (n = e.replace(qp, "$&/") + "/"), _l(o, t, n, "", function(c) {
    return c;
  })) : o != null && (mf(o) && (o = d1(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(qp, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Qp(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + iu(i, l);
    s += _l(i, t, n, a, o);
  }
  else if (a = u1(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + iu(i, l++), s += _l(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function ul(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return _l(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function p1(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Gt = { current: null }, Wl = { transition: null }, m1 = { ReactCurrentDispatcher: Gt, ReactCurrentBatchConfig: Wl, ReactCurrentOwner: pf };
function Xg() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ce.Children = { map: ul, forEach: function(e, t, n) {
  ul(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ul(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ul(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!mf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Ce.Component = Ai;
Ce.Fragment = t1;
Ce.Profiler = r1;
Ce.PureComponent = df;
Ce.StrictMode = n1;
Ce.Suspense = l1;
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m1;
Ce.act = Xg;
Ce.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ug({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = pf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Kg.call(t, a) && !Yg.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Qs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Ce.createContext = function(e) {
  return e = { $$typeof: i1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: o1, _context: e }, e.Consumer = e;
};
Ce.createElement = Gg;
Ce.createFactory = function(e) {
  var t = Gg.bind(null, e);
  return t.type = e, t;
};
Ce.createRef = function() {
  return { current: null };
};
Ce.forwardRef = function(e) {
  return { $$typeof: s1, render: e };
};
Ce.isValidElement = mf;
Ce.lazy = function(e) {
  return { $$typeof: c1, _payload: { _status: -1, _result: e }, _init: p1 };
};
Ce.memo = function(e, t) {
  return { $$typeof: a1, type: e, compare: t === void 0 ? null : t };
};
Ce.startTransition = function(e) {
  var t = Wl.transition;
  Wl.transition = {};
  try {
    e();
  } finally {
    Wl.transition = t;
  }
};
Ce.unstable_act = Xg;
Ce.useCallback = function(e, t) {
  return Gt.current.useCallback(e, t);
};
Ce.useContext = function(e) {
  return Gt.current.useContext(e);
};
Ce.useDebugValue = function() {
};
Ce.useDeferredValue = function(e) {
  return Gt.current.useDeferredValue(e);
};
Ce.useEffect = function(e, t) {
  return Gt.current.useEffect(e, t);
};
Ce.useId = function() {
  return Gt.current.useId();
};
Ce.useImperativeHandle = function(e, t, n) {
  return Gt.current.useImperativeHandle(e, t, n);
};
Ce.useInsertionEffect = function(e, t) {
  return Gt.current.useInsertionEffect(e, t);
};
Ce.useLayoutEffect = function(e, t) {
  return Gt.current.useLayoutEffect(e, t);
};
Ce.useMemo = function(e, t) {
  return Gt.current.useMemo(e, t);
};
Ce.useReducer = function(e, t, n) {
  return Gt.current.useReducer(e, t, n);
};
Ce.useRef = function(e) {
  return Gt.current.useRef(e);
};
Ce.useState = function(e) {
  return Gt.current.useState(e);
};
Ce.useSyncExternalStore = function(e, t, n) {
  return Gt.current.useSyncExternalStore(e, t, n);
};
Ce.useTransition = function() {
  return Gt.current.useTransition();
};
Ce.version = "18.3.1";
_g.exports = Ce;
var p = _g.exports;
const Qg = /* @__PURE__ */ Jx(p), ia = /* @__PURE__ */ Zx({
  __proto__: null,
  default: Qg
}, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h1 = p, g1 = Symbol.for("react.element"), y1 = Symbol.for("react.fragment"), v1 = Object.prototype.hasOwnProperty, x1 = h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function qg(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) v1.call(t, r) && !S1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: g1, type: e, key: i, ref: s, props: o, _owner: x1.current };
}
Va.Fragment = y1;
Va.jsx = qg;
Va.jsxs = qg;
Dg.exports = Va;
var d = Dg.exports, Zg = { exports: {} }, yn = {}, Jg = { exports: {} }, ey = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(M, z) {
    var B = M.length;
    M.push(z);
    e: for (; 0 < B; ) {
      var U = B - 1 >>> 1, D = M[U];
      if (0 < o(D, z)) M[U] = z, M[B] = D, B = U;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var z = M[0], B = M.pop();
    if (B !== z) {
      M[0] = B;
      e: for (var U = 0, D = M.length, Q = D >>> 1; U < Q; ) {
        var X = 2 * (U + 1) - 1, G = M[X], H = X + 1, he = M[H];
        if (0 > o(G, B)) H < D && 0 > o(he, G) ? (M[U] = he, M[H] = B, U = H) : (M[U] = G, M[X] = B, U = X);
        else if (H < D && 0 > o(he, B)) M[U] = he, M[H] = B, U = H;
        else break e;
      }
    }
    return z;
  }
  function o(M, z) {
    var B = M.sortIndex - z.sortIndex;
    return B !== 0 ? B : M.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var a = [], c = [], u = 1, m = null, y = 3, f = !1, x = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S(M) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= M) r(c), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(c);
    }
  }
  function w(M) {
    if (b = !1, S(M), !x) if (n(a) !== null) x = !0, L(E);
    else {
      var z = n(c);
      z !== null && N(w, z.startTime - M);
    }
  }
  function E(M, z) {
    x = !1, b && (b = !1, g(P), P = -1), f = !0;
    var B = y;
    try {
      for (S(z), m = n(a); m !== null && (!(m.expirationTime > z) || M && !$()); ) {
        var U = m.callback;
        if (typeof U == "function") {
          m.callback = null, y = m.priorityLevel;
          var D = U(m.expirationTime <= z);
          z = e.unstable_now(), typeof D == "function" ? m.callback = D : m === n(a) && r(a), S(z);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var Q = !0;
      else {
        var X = n(c);
        X !== null && N(w, X.startTime - z), Q = !1;
      }
      return Q;
    } finally {
      m = null, y = B, f = !1;
    }
  }
  var k = !1, T = null, P = -1, I = 5, A = -1;
  function $() {
    return !(e.unstable_now() - A < I);
  }
  function j() {
    if (T !== null) {
      var M = e.unstable_now();
      A = M;
      var z = !0;
      try {
        z = T(!0, M);
      } finally {
        z ? v() : (k = !1, T = null);
      }
    } else k = !1;
  }
  var v;
  if (typeof h == "function") v = function() {
    h(j);
  };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(), R = O.port2;
    O.port1.onmessage = j, v = function() {
      R.postMessage(null);
    };
  } else v = function() {
    C(j, 0);
  };
  function L(M) {
    T = M, k || (k = !0, v());
  }
  function N(M, z) {
    P = C(function() {
      M(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    x || f || (x = !0, L(E));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(M) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = y;
    }
    var B = y;
    y = z;
    try {
      return M();
    } finally {
      y = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, z) {
    switch (M) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        M = 3;
    }
    var B = y;
    y = M;
    try {
      return z();
    } finally {
      y = B;
    }
  }, e.unstable_scheduleCallback = function(M, z, B) {
    var U = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? U + B : U) : B = U, M) {
      case 1:
        var D = -1;
        break;
      case 2:
        D = 250;
        break;
      case 5:
        D = 1073741823;
        break;
      case 4:
        D = 1e4;
        break;
      default:
        D = 5e3;
    }
    return D = B + D, M = { id: u++, callback: z, priorityLevel: M, startTime: B, expirationTime: D, sortIndex: -1 }, B > U ? (M.sortIndex = B, t(c, M), n(a) === null && M === n(c) && (b ? (g(P), P = -1) : b = !0, N(w, B - U))) : (M.sortIndex = D, t(a, M), x || f || (x = !0, L(E))), M;
  }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(M) {
    var z = y;
    return function() {
      var B = y;
      y = z;
      try {
        return M.apply(this, arguments);
      } finally {
        y = B;
      }
    };
  };
})(ey);
Jg.exports = ey;
var b1 = Jg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w1 = p, hn = b1;
function K(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ty = /* @__PURE__ */ new Set(), Cs = {};
function Bo(e, t) {
  xi(e, t), xi(e + "Capture", t);
}
function xi(e, t) {
  for (Cs[e] = t, e = 0; e < t.length; e++) ty.add(t[e]);
}
var Tr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = Object.prototype.hasOwnProperty, C1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Zp = {}, Jp = {};
function k1(e) {
  return Xu.call(Jp, e) ? !0 : Xu.call(Zp, e) ? !1 : C1.test(e) ? Jp[e] = !0 : (Zp[e] = !0, !1);
}
function E1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function T1(e, t, n, r) {
  if (t === null || typeof t > "u" || E1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Xt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var zt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  zt[e] = new Xt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  zt[t] = new Xt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  zt[e] = new Xt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  zt[e] = new Xt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  zt[e] = new Xt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  zt[e] = new Xt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  zt[e] = new Xt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  zt[e] = new Xt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  zt[e] = new Xt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hf = /[\-:]([a-z])/g;
function gf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    hf,
    gf
  );
  zt[t] = new Xt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(hf, gf);
  zt[t] = new Xt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(hf, gf);
  zt[t] = new Xt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  zt[e] = new Xt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
zt.xlinkHref = new Xt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  zt[e] = new Xt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yf(e, t, n, r) {
  var o = zt.hasOwnProperty(t) ? zt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (T1(t, n, o, r) && (n = null), r || o === null ? k1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jr = w1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dl = Symbol.for("react.element"), Qo = Symbol.for("react.portal"), qo = Symbol.for("react.fragment"), vf = Symbol.for("react.strict_mode"), Qu = Symbol.for("react.profiler"), ny = Symbol.for("react.provider"), ry = Symbol.for("react.context"), xf = Symbol.for("react.forward_ref"), qu = Symbol.for("react.suspense"), Zu = Symbol.for("react.suspense_list"), Sf = Symbol.for("react.memo"), zr = Symbol.for("react.lazy"), oy = Symbol.for("react.offscreen"), em = Symbol.iterator;
function Bi(e) {
  return e === null || typeof e != "object" ? null : (e = em && e[em] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ct = Object.assign, su;
function ts(e) {
  if (su === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    su = t && t[1] || "";
  }
  return `
` + su + e;
}
var lu = !1;
function au(e, t) {
  if (!e || lu) return "";
  lu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var o = c.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; ) l--;
      for (; 1 <= s && 0 <= l; s--, l--) if (o[s] !== i[l]) {
        if (s !== 1 || l !== 1)
          do
            if (s--, l--, 0 > l || o[s] !== i[l]) {
              var a = `
` + o[s].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= s && 0 <= l);
        break;
      }
    }
  } finally {
    lu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ts(e) : "";
}
function P1(e) {
  switch (e.tag) {
    case 5:
      return ts(e.type);
    case 16:
      return ts("Lazy");
    case 13:
      return ts("Suspense");
    case 19:
      return ts("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = au(e.type, !1), e;
    case 11:
      return e = au(e.type.render, !1), e;
    case 1:
      return e = au(e.type, !0), e;
    default:
      return "";
  }
}
function Ju(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qo:
      return "Fragment";
    case Qo:
      return "Portal";
    case Qu:
      return "Profiler";
    case vf:
      return "StrictMode";
    case qu:
      return "Suspense";
    case Zu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ry:
      return (e.displayName || "Context") + ".Consumer";
    case ny:
      return (e._context.displayName || "Context") + ".Provider";
    case xf:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Sf:
      return t = e.displayName || null, t !== null ? t : Ju(e.type) || "Memo";
    case zr:
      t = e._payload, e = e._init;
      try {
        return Ju(e(t));
      } catch {
      }
  }
  return null;
}
function R1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ju(t);
    case 8:
      return t === vf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function iy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function I1(e) {
  var t = iy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function fl(e) {
  e._valueTracker || (e._valueTracker = I1(e));
}
function sy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = iy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function sa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ed(e, t) {
  var n = t.checked;
  return ct({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function tm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Zr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ly(e, t) {
  t = t.checked, t != null && yf(e, "checked", t, !1);
}
function td(e, t) {
  ly(e, t);
  var n = Zr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? nd(e, t.type, n) : t.hasOwnProperty("defaultValue") && nd(e, t.type, Zr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function nm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function nd(e, t, n) {
  (t !== "number" || sa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ns = Array.isArray;
function ui(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function rd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(K(91));
  return ct({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function rm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(K(92));
      if (ns(n)) {
        if (1 < n.length) throw Error(K(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Zr(n) };
}
function ay(e, t) {
  var n = Zr(t.value), r = Zr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function om(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function cy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function od(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? cy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var pl, uy = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (pl = pl || document.createElement("div"), pl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = pl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ks(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var as = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, M1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(as).forEach(function(e) {
  M1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), as[t] = as[e];
  });
});
function dy(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || as.hasOwnProperty(e) && as[e] ? ("" + t).trim() : t + "px";
}
function fy(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = dy(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var $1 = ct({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function id(e, t) {
  if (t) {
    if ($1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(K(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(K(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(K(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(K(62));
  }
}
function sd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ld = null;
function bf(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ad = null, di = null, fi = null;
function im(e) {
  if (e = Js(e)) {
    if (typeof ad != "function") throw Error(K(280));
    var t = e.stateNode;
    t && (t = Xa(t), ad(e.stateNode, e.type, t));
  }
}
function py(e) {
  di ? fi ? fi.push(e) : fi = [e] : di = e;
}
function my() {
  if (di) {
    var e = di, t = fi;
    if (fi = di = null, im(e), t) for (e = 0; e < t.length; e++) im(t[e]);
  }
}
function hy(e, t) {
  return e(t);
}
function gy() {
}
var cu = !1;
function yy(e, t, n) {
  if (cu) return e(t, n);
  cu = !0;
  try {
    return hy(e, t, n);
  } finally {
    cu = !1, (di !== null || fi !== null) && (gy(), my());
  }
}
function Es(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(K(231, t, typeof n));
  return n;
}
var cd = !1;
if (Tr) try {
  var Di = {};
  Object.defineProperty(Di, "passive", { get: function() {
    cd = !0;
  } }), window.addEventListener("test", Di, Di), window.removeEventListener("test", Di, Di);
} catch {
  cd = !1;
}
function O1(e, t, n, r, o, i, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var cs = !1, la = null, aa = !1, ud = null, j1 = { onError: function(e) {
  cs = !0, la = e;
} };
function A1(e, t, n, r, o, i, s, l, a) {
  cs = !1, la = null, O1.apply(j1, arguments);
}
function L1(e, t, n, r, o, i, s, l, a) {
  if (A1.apply(this, arguments), cs) {
    if (cs) {
      var c = la;
      cs = !1, la = null;
    } else throw Error(K(198));
    aa || (aa = !0, ud = c);
  }
}
function Do(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function vy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function sm(e) {
  if (Do(e) !== e) throw Error(K(188));
}
function N1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Do(e), t === null) throw Error(K(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return sm(o), e;
        if (i === r) return sm(o), t;
        i = i.sibling;
      }
      throw Error(K(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          s = !0, n = o, r = i;
          break;
        }
        if (l === r) {
          s = !0, r = o, n = i;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (l === r) {
            s = !0, r = i, n = o;
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(K(189));
      }
    }
    if (n.alternate !== r) throw Error(K(190));
  }
  if (n.tag !== 3) throw Error(K(188));
  return n.stateNode.current === n ? e : t;
}
function xy(e) {
  return e = N1(e), e !== null ? Sy(e) : null;
}
function Sy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Sy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var by = hn.unstable_scheduleCallback, lm = hn.unstable_cancelCallback, z1 = hn.unstable_shouldYield, F1 = hn.unstable_requestPaint, gt = hn.unstable_now, B1 = hn.unstable_getCurrentPriorityLevel, wf = hn.unstable_ImmediatePriority, wy = hn.unstable_UserBlockingPriority, ca = hn.unstable_NormalPriority, D1 = hn.unstable_LowPriority, Cy = hn.unstable_IdlePriority, Ha = null, sr = null;
function _1(e) {
  if (sr && typeof sr.onCommitFiberRoot == "function") try {
    sr.onCommitFiberRoot(Ha, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Vn = Math.clz32 ? Math.clz32 : V1, W1 = Math.log, U1 = Math.LN2;
function V1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (W1(e) / U1 | 0) | 0;
}
var ml = 64, hl = 4194304;
function rs(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ua(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = rs(l) : (i &= s, i !== 0 && (r = rs(i)));
  } else s = n & ~o, s !== 0 ? r = rs(s) : i !== 0 && (r = rs(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Vn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function H1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function K1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Vn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = H1(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function dd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ky() {
  var e = ml;
  return ml <<= 1, !(ml & 4194240) && (ml = 64), e;
}
function uu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qs(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Vn(t), e[t] = n;
}
function Y1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Vn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Cf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Vn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var We = 0;
function Ey(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ty, kf, Py, Ry, Iy, fd = !1, gl = [], Ur = null, Vr = null, Hr = null, Ts = /* @__PURE__ */ new Map(), Ps = /* @__PURE__ */ new Map(), Br = [], G1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function am(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ur = null;
      break;
    case "dragenter":
    case "dragleave":
      Vr = null;
      break;
    case "mouseover":
    case "mouseout":
      Hr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ts.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ps.delete(t.pointerId);
  }
}
function _i(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Js(t), t !== null && kf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function X1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Ur = _i(Ur, e, t, n, r, o), !0;
    case "dragenter":
      return Vr = _i(Vr, e, t, n, r, o), !0;
    case "mouseover":
      return Hr = _i(Hr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ts.set(i, _i(Ts.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ps.set(i, _i(Ps.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function My(e) {
  var t = Co(e.target);
  if (t !== null) {
    var n = Do(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = vy(n), t !== null) {
          e.blockedOn = t, Iy(e.priority, function() {
            Py(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ld = r, n.target.dispatchEvent(r), ld = null;
    } else return t = Js(n), t !== null && kf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function cm(e, t, n) {
  Ul(e) && n.delete(t);
}
function Q1() {
  fd = !1, Ur !== null && Ul(Ur) && (Ur = null), Vr !== null && Ul(Vr) && (Vr = null), Hr !== null && Ul(Hr) && (Hr = null), Ts.forEach(cm), Ps.forEach(cm);
}
function Wi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, fd || (fd = !0, hn.unstable_scheduleCallback(hn.unstable_NormalPriority, Q1)));
}
function Rs(e) {
  function t(o) {
    return Wi(o, e);
  }
  if (0 < gl.length) {
    Wi(gl[0], e);
    for (var n = 1; n < gl.length; n++) {
      var r = gl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ur !== null && Wi(Ur, e), Vr !== null && Wi(Vr, e), Hr !== null && Wi(Hr, e), Ts.forEach(t), Ps.forEach(t), n = 0; n < Br.length; n++) r = Br[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Br.length && (n = Br[0], n.blockedOn === null); ) My(n), n.blockedOn === null && Br.shift();
}
var pi = jr.ReactCurrentBatchConfig, da = !0;
function q1(e, t, n, r) {
  var o = We, i = pi.transition;
  pi.transition = null;
  try {
    We = 1, Ef(e, t, n, r);
  } finally {
    We = o, pi.transition = i;
  }
}
function Z1(e, t, n, r) {
  var o = We, i = pi.transition;
  pi.transition = null;
  try {
    We = 4, Ef(e, t, n, r);
  } finally {
    We = o, pi.transition = i;
  }
}
function Ef(e, t, n, r) {
  if (da) {
    var o = pd(e, t, n, r);
    if (o === null) Su(e, t, r, fa, n), am(e, r);
    else if (X1(o, e, t, n, r)) r.stopPropagation();
    else if (am(e, r), t & 4 && -1 < G1.indexOf(e)) {
      for (; o !== null; ) {
        var i = Js(o);
        if (i !== null && Ty(i), i = pd(e, t, n, r), i === null && Su(e, t, r, fa, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Su(e, t, r, null, n);
  }
}
var fa = null;
function pd(e, t, n, r) {
  if (fa = null, e = bf(r), e = Co(e), e !== null) if (t = Do(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = vy(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return fa = e, null;
}
function $y(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (B1()) {
        case wf:
          return 1;
        case wy:
          return 4;
        case ca:
        case D1:
          return 16;
        case Cy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _r = null, Tf = null, Vl = null;
function Oy() {
  if (Vl) return Vl;
  var e, t = Tf, n = t.length, r, o = "value" in _r ? _r.value : _r.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Vl = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Hl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function yl() {
  return !0;
}
function um() {
  return !1;
}
function vn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? yl : um, this.isPropagationStopped = um, this;
  }
  return ct(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yl);
  }, persist: function() {
  }, isPersistent: yl }), t;
}
var Li = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Pf = vn(Li), Zs = ct({}, Li, { view: 0, detail: 0 }), J1 = vn(Zs), du, fu, Ui, Ka = ct({}, Zs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Rf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ui && (Ui && e.type === "mousemove" ? (du = e.screenX - Ui.screenX, fu = e.screenY - Ui.screenY) : fu = du = 0, Ui = e), du);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : fu;
} }), dm = vn(Ka), eS = ct({}, Ka, { dataTransfer: 0 }), tS = vn(eS), nS = ct({}, Zs, { relatedTarget: 0 }), pu = vn(nS), rS = ct({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oS = vn(rS), iS = ct({}, Li, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), sS = vn(iS), lS = ct({}, Li, { data: 0 }), fm = vn(lS), aS = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, cS = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, uS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function dS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = uS[e]) ? !!t[e] : !1;
}
function Rf() {
  return dS;
}
var fS = ct({}, Zs, { key: function(e) {
  if (e.key) {
    var t = aS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Hl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Rf, charCode: function(e) {
  return e.type === "keypress" ? Hl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Hl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), pS = vn(fS), mS = ct({}, Ka, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pm = vn(mS), hS = ct({}, Zs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Rf }), gS = vn(hS), yS = ct({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vS = vn(yS), xS = ct({}, Ka, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), SS = vn(xS), bS = [9, 13, 27, 32], If = Tr && "CompositionEvent" in window, us = null;
Tr && "documentMode" in document && (us = document.documentMode);
var wS = Tr && "TextEvent" in window && !us, jy = Tr && (!If || us && 8 < us && 11 >= us), mm = " ", hm = !1;
function Ay(e, t) {
  switch (e) {
    case "keyup":
      return bS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ly(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Zo = !1;
function CS(e, t) {
  switch (e) {
    case "compositionend":
      return Ly(t);
    case "keypress":
      return t.which !== 32 ? null : (hm = !0, mm);
    case "textInput":
      return e = t.data, e === mm && hm ? null : e;
    default:
      return null;
  }
}
function kS(e, t) {
  if (Zo) return e === "compositionend" || !If && Ay(e, t) ? (e = Oy(), Vl = Tf = _r = null, Zo = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return jy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ES = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function gm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ES[e.type] : t === "textarea";
}
function Ny(e, t, n, r) {
  py(r), t = pa(t, "onChange"), 0 < t.length && (n = new Pf("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ds = null, Is = null;
function TS(e) {
  Yy(e, 0);
}
function Ya(e) {
  var t = ti(e);
  if (sy(t)) return e;
}
function PS(e, t) {
  if (e === "change") return t;
}
var zy = !1;
if (Tr) {
  var mu;
  if (Tr) {
    var hu = "oninput" in document;
    if (!hu) {
      var ym = document.createElement("div");
      ym.setAttribute("oninput", "return;"), hu = typeof ym.oninput == "function";
    }
    mu = hu;
  } else mu = !1;
  zy = mu && (!document.documentMode || 9 < document.documentMode);
}
function vm() {
  ds && (ds.detachEvent("onpropertychange", Fy), Is = ds = null);
}
function Fy(e) {
  if (e.propertyName === "value" && Ya(Is)) {
    var t = [];
    Ny(t, Is, e, bf(e)), yy(TS, t);
  }
}
function RS(e, t, n) {
  e === "focusin" ? (vm(), ds = t, Is = n, ds.attachEvent("onpropertychange", Fy)) : e === "focusout" && vm();
}
function IS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ya(Is);
}
function MS(e, t) {
  if (e === "click") return Ya(t);
}
function $S(e, t) {
  if (e === "input" || e === "change") return Ya(t);
}
function OS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Kn = typeof Object.is == "function" ? Object.is : OS;
function Ms(e, t) {
  if (Kn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Xu.call(t, o) || !Kn(e[o], t[o])) return !1;
  }
  return !0;
}
function xm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Sm(e, t) {
  var n = xm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = xm(n);
  }
}
function By(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? By(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Dy() {
  for (var e = window, t = sa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = sa(e.document);
  }
  return t;
}
function Mf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function jS(e) {
  var t = Dy(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && By(n.ownerDocument.documentElement, n)) {
    if (r !== null && Mf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Sm(n, i);
        var s = Sm(
          n,
          r
        );
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var AS = Tr && "documentMode" in document && 11 >= document.documentMode, Jo = null, md = null, fs = null, hd = !1;
function bm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hd || Jo == null || Jo !== sa(r) || (r = Jo, "selectionStart" in r && Mf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fs && Ms(fs, r) || (fs = r, r = pa(md, "onSelect"), 0 < r.length && (t = new Pf("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Jo)));
}
function vl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ei = { animationend: vl("Animation", "AnimationEnd"), animationiteration: vl("Animation", "AnimationIteration"), animationstart: vl("Animation", "AnimationStart"), transitionend: vl("Transition", "TransitionEnd") }, gu = {}, _y = {};
Tr && (_y = document.createElement("div").style, "AnimationEvent" in window || (delete ei.animationend.animation, delete ei.animationiteration.animation, delete ei.animationstart.animation), "TransitionEvent" in window || delete ei.transitionend.transition);
function Ga(e) {
  if (gu[e]) return gu[e];
  if (!ei[e]) return e;
  var t = ei[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in _y) return gu[e] = t[n];
  return e;
}
var Wy = Ga("animationend"), Uy = Ga("animationiteration"), Vy = Ga("animationstart"), Hy = Ga("transitionend"), Ky = /* @__PURE__ */ new Map(), wm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ro(e, t) {
  Ky.set(e, t), Bo(t, [e]);
}
for (var yu = 0; yu < wm.length; yu++) {
  var vu = wm[yu], LS = vu.toLowerCase(), NS = vu[0].toUpperCase() + vu.slice(1);
  ro(LS, "on" + NS);
}
ro(Wy, "onAnimationEnd");
ro(Uy, "onAnimationIteration");
ro(Vy, "onAnimationStart");
ro("dblclick", "onDoubleClick");
ro("focusin", "onFocus");
ro("focusout", "onBlur");
ro(Hy, "onTransitionEnd");
xi("onMouseEnter", ["mouseout", "mouseover"]);
xi("onMouseLeave", ["mouseout", "mouseover"]);
xi("onPointerEnter", ["pointerout", "pointerover"]);
xi("onPointerLeave", ["pointerout", "pointerover"]);
Bo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var os = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), zS = new Set("cancel close invalid load scroll toggle".split(" ").concat(os));
function Cm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, L1(r, t, void 0, e), e.currentTarget = null;
}
function Yy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, c = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Cm(o, l, c), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, c = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Cm(o, l, c), i = a;
      }
    }
  }
  if (aa) throw e = ud, aa = !1, ud = null, e;
}
function Je(e, t) {
  var n = t[Sd];
  n === void 0 && (n = t[Sd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Gy(t, e, 2, !1), n.add(r));
}
function xu(e, t, n) {
  var r = 0;
  t && (r |= 4), Gy(n, e, r, t);
}
var xl = "_reactListening" + Math.random().toString(36).slice(2);
function $s(e) {
  if (!e[xl]) {
    e[xl] = !0, ty.forEach(function(n) {
      n !== "selectionchange" && (zS.has(n) || xu(n, !1, e), xu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xl] || (t[xl] = !0, xu("selectionchange", !1, t));
  }
}
function Gy(e, t, n, r) {
  switch ($y(t)) {
    case 1:
      var o = q1;
      break;
    case 4:
      o = Z1;
      break;
    default:
      o = Ef;
  }
  n = o.bind(null, t, n, e), o = void 0, !cd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Su(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var l = r.stateNode.containerInfo;
      if (l === o || l.nodeType === 8 && l.parentNode === o) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var a = s.tag;
        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        s = s.return;
      }
      for (; l !== null; ) {
        if (s = Co(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  yy(function() {
    var c = i, u = bf(n), m = [];
    e: {
      var y = Ky.get(e);
      if (y !== void 0) {
        var f = Pf, x = e;
        switch (e) {
          case "keypress":
            if (Hl(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = pS;
            break;
          case "focusin":
            x = "focus", f = pu;
            break;
          case "focusout":
            x = "blur", f = pu;
            break;
          case "beforeblur":
          case "afterblur":
            f = pu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = dm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = tS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = gS;
            break;
          case Wy:
          case Uy:
          case Vy:
            f = oS;
            break;
          case Hy:
            f = vS;
            break;
          case "scroll":
            f = J1;
            break;
          case "wheel":
            f = SS;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = sS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = pm;
        }
        var b = (t & 4) !== 0, C = !b && e === "scroll", g = b ? y !== null ? y + "Capture" : null : y;
        b = [];
        for (var h = c, S; h !== null; ) {
          S = h;
          var w = S.stateNode;
          if (S.tag === 5 && w !== null && (S = w, g !== null && (w = Es(h, g), w != null && b.push(Os(h, w, S)))), C) break;
          h = h.return;
        }
        0 < b.length && (y = new f(y, x, null, n, u), m.push({ event: y, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", y && n !== ld && (x = n.relatedTarget || n.fromElement) && (Co(x) || x[Pr])) break e;
        if ((f || y) && (y = u.window === u ? u : (y = u.ownerDocument) ? y.defaultView || y.parentWindow : window, f ? (x = n.relatedTarget || n.toElement, f = c, x = x ? Co(x) : null, x !== null && (C = Do(x), x !== C || x.tag !== 5 && x.tag !== 6) && (x = null)) : (f = null, x = c), f !== x)) {
          if (b = dm, w = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (b = pm, w = "onPointerLeave", g = "onPointerEnter", h = "pointer"), C = f == null ? y : ti(f), S = x == null ? y : ti(x), y = new b(w, h + "leave", f, n, u), y.target = C, y.relatedTarget = S, w = null, Co(u) === c && (b = new b(g, h + "enter", x, n, u), b.target = S, b.relatedTarget = C, w = b), C = w, f && x) t: {
            for (b = f, g = x, h = 0, S = b; S; S = Vo(S)) h++;
            for (S = 0, w = g; w; w = Vo(w)) S++;
            for (; 0 < h - S; ) b = Vo(b), h--;
            for (; 0 < S - h; ) g = Vo(g), S--;
            for (; h--; ) {
              if (b === g || g !== null && b === g.alternate) break t;
              b = Vo(b), g = Vo(g);
            }
            b = null;
          }
          else b = null;
          f !== null && km(m, y, f, b, !1), x !== null && C !== null && km(m, C, x, b, !0);
        }
      }
      e: {
        if (y = c ? ti(c) : window, f = y.nodeName && y.nodeName.toLowerCase(), f === "select" || f === "input" && y.type === "file") var E = PS;
        else if (gm(y)) if (zy) E = $S;
        else {
          E = IS;
          var k = RS;
        }
        else (f = y.nodeName) && f.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (E = MS);
        if (E && (E = E(e, c))) {
          Ny(m, E, n, u);
          break e;
        }
        k && k(e, y, c), e === "focusout" && (k = y._wrapperState) && k.controlled && y.type === "number" && nd(y, "number", y.value);
      }
      switch (k = c ? ti(c) : window, e) {
        case "focusin":
          (gm(k) || k.contentEditable === "true") && (Jo = k, md = c, fs = null);
          break;
        case "focusout":
          fs = md = Jo = null;
          break;
        case "mousedown":
          hd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          hd = !1, bm(m, n, u);
          break;
        case "selectionchange":
          if (AS) break;
        case "keydown":
        case "keyup":
          bm(m, n, u);
      }
      var T;
      if (If) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Zo ? Ay(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (jy && n.locale !== "ko" && (Zo || P !== "onCompositionStart" ? P === "onCompositionEnd" && Zo && (T = Oy()) : (_r = u, Tf = "value" in _r ? _r.value : _r.textContent, Zo = !0)), k = pa(c, P), 0 < k.length && (P = new fm(P, e, null, n, u), m.push({ event: P, listeners: k }), T ? P.data = T : (T = Ly(n), T !== null && (P.data = T)))), (T = wS ? CS(e, n) : kS(e, n)) && (c = pa(c, "onBeforeInput"), 0 < c.length && (u = new fm("onBeforeInput", "beforeinput", null, n, u), m.push({ event: u, listeners: c }), u.data = T));
    }
    Yy(m, t);
  });
}
function Os(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Es(e, n), i != null && r.unshift(Os(e, i, o)), i = Es(e, t), i != null && r.push(Os(e, i, o))), e = e.return;
  }
  return r;
}
function Vo(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function km(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && c !== null && (l = c, o ? (a = Es(n, i), a != null && s.unshift(Os(n, a, l))) : o || (a = Es(n, i), a != null && s.push(Os(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var FS = /\r\n?/g, BS = /\u0000|\uFFFD/g;
function Em(e) {
  return (typeof e == "string" ? e : "" + e).replace(FS, `
`).replace(BS, "");
}
function Sl(e, t, n) {
  if (t = Em(t), Em(e) !== t && n) throw Error(K(425));
}
function ma() {
}
var gd = null, yd = null;
function vd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xd = typeof setTimeout == "function" ? setTimeout : void 0, DS = typeof clearTimeout == "function" ? clearTimeout : void 0, Tm = typeof Promise == "function" ? Promise : void 0, _S = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tm < "u" ? function(e) {
  return Tm.resolve(null).then(e).catch(WS);
} : xd;
function WS(e) {
  setTimeout(function() {
    throw e;
  });
}
function bu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Rs(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Rs(t);
}
function Kr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ni = Math.random().toString(36).slice(2), rr = "__reactFiber$" + Ni, js = "__reactProps$" + Ni, Pr = "__reactContainer$" + Ni, Sd = "__reactEvents$" + Ni, US = "__reactListeners$" + Ni, VS = "__reactHandles$" + Ni;
function Co(e) {
  var t = e[rr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Pr] || n[rr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Pm(e); e !== null; ) {
        if (n = e[rr]) return n;
        e = Pm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Js(e) {
  return e = e[rr] || e[Pr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ti(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(K(33));
}
function Xa(e) {
  return e[js] || null;
}
var bd = [], ni = -1;
function oo(e) {
  return { current: e };
}
function et(e) {
  0 > ni || (e.current = bd[ni], bd[ni] = null, ni--);
}
function qe(e, t) {
  ni++, bd[ni] = e.current, e.current = t;
}
var Jr = {}, Wt = oo(Jr), tn = oo(!1), $o = Jr;
function Si(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function nn(e) {
  return e = e.childContextTypes, e != null;
}
function ha() {
  et(tn), et(Wt);
}
function Rm(e, t, n) {
  if (Wt.current !== Jr) throw Error(K(168));
  qe(Wt, t), qe(tn, n);
}
function Xy(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(K(108, R1(e) || "Unknown", o));
  return ct({}, n, r);
}
function ga(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jr, $o = Wt.current, qe(Wt, e), qe(tn, tn.current), !0;
}
function Im(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(K(169));
  n ? (e = Xy(e, t, $o), r.__reactInternalMemoizedMergedChildContext = e, et(tn), et(Wt), qe(Wt, e)) : et(tn), qe(tn, n);
}
var br = null, Qa = !1, wu = !1;
function Qy(e) {
  br === null ? br = [e] : br.push(e);
}
function HS(e) {
  Qa = !0, Qy(e);
}
function io() {
  if (!wu && br !== null) {
    wu = !0;
    var e = 0, t = We;
    try {
      var n = br;
      for (We = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      br = null, Qa = !1;
    } catch (o) {
      throw br !== null && (br = br.slice(e + 1)), by(wf, io), o;
    } finally {
      We = t, wu = !1;
    }
  }
  return null;
}
var ri = [], oi = 0, ya = null, va = 0, Cn = [], kn = 0, Oo = null, Cr = 1, kr = "";
function xo(e, t) {
  ri[oi++] = va, ri[oi++] = ya, ya = e, va = t;
}
function qy(e, t, n) {
  Cn[kn++] = Cr, Cn[kn++] = kr, Cn[kn++] = Oo, Oo = e;
  var r = Cr;
  e = kr;
  var o = 32 - Vn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Vn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Cr = 1 << 32 - Vn(t) + o | n << o | r, kr = i + e;
  } else Cr = 1 << i | n << o | r, kr = e;
}
function $f(e) {
  e.return !== null && (xo(e, 1), qy(e, 1, 0));
}
function Of(e) {
  for (; e === ya; ) ya = ri[--oi], ri[oi] = null, va = ri[--oi], ri[oi] = null;
  for (; e === Oo; ) Oo = Cn[--kn], Cn[kn] = null, kr = Cn[--kn], Cn[kn] = null, Cr = Cn[--kn], Cn[kn] = null;
}
var pn = null, fn = null, nt = !1, Un = null;
function Zy(e, t) {
  var n = Rn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Mm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, pn = e, fn = Kr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, pn = e, fn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Oo !== null ? { id: Cr, overflow: kr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Rn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, pn = e, fn = null, !0) : !1;
    default:
      return !1;
  }
}
function wd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cd(e) {
  if (nt) {
    var t = fn;
    if (t) {
      var n = t;
      if (!Mm(e, t)) {
        if (wd(e)) throw Error(K(418));
        t = Kr(n.nextSibling);
        var r = pn;
        t && Mm(e, t) ? Zy(r, n) : (e.flags = e.flags & -4097 | 2, nt = !1, pn = e);
      }
    } else {
      if (wd(e)) throw Error(K(418));
      e.flags = e.flags & -4097 | 2, nt = !1, pn = e;
    }
  }
}
function $m(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  pn = e;
}
function bl(e) {
  if (e !== pn) return !1;
  if (!nt) return $m(e), nt = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !vd(e.type, e.memoizedProps)), t && (t = fn)) {
    if (wd(e)) throw Jy(), Error(K(418));
    for (; t; ) Zy(e, t), t = Kr(t.nextSibling);
  }
  if ($m(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(K(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              fn = Kr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      fn = null;
    }
  } else fn = pn ? Kr(e.stateNode.nextSibling) : null;
  return !0;
}
function Jy() {
  for (var e = fn; e; ) e = Kr(e.nextSibling);
}
function bi() {
  fn = pn = null, nt = !1;
}
function jf(e) {
  Un === null ? Un = [e] : Un.push(e);
}
var KS = jr.ReactCurrentBatchConfig;
function Vi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(K(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(K(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(K(284));
    if (!n._owner) throw Error(K(290, e));
  }
  return e;
}
function wl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(K(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Om(e) {
  var t = e._init;
  return t(e._payload);
}
function ev(e) {
  function t(g, h) {
    if (e) {
      var S = g.deletions;
      S === null ? (g.deletions = [h], g.flags |= 16) : S.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), h = h.sibling;
    return null;
  }
  function r(g, h) {
    for (g = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
    return g;
  }
  function o(g, h) {
    return g = Qr(g, h), g.index = 0, g.sibling = null, g;
  }
  function i(g, h, S) {
    return g.index = S, e ? (S = g.alternate, S !== null ? (S = S.index, S < h ? (g.flags |= 2, h) : S) : (g.flags |= 2, h)) : (g.flags |= 1048576, h);
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, S, w) {
    return h === null || h.tag !== 6 ? (h = Iu(S, g.mode, w), h.return = g, h) : (h = o(h, S), h.return = g, h);
  }
  function a(g, h, S, w) {
    var E = S.type;
    return E === qo ? u(g, h, S.props.children, w, S.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === zr && Om(E) === h.type) ? (w = o(h, S.props), w.ref = Vi(g, h, S), w.return = g, w) : (w = Zl(S.type, S.key, S.props, null, g.mode, w), w.ref = Vi(g, h, S), w.return = g, w);
  }
  function c(g, h, S, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== S.containerInfo || h.stateNode.implementation !== S.implementation ? (h = Mu(S, g.mode, w), h.return = g, h) : (h = o(h, S.children || []), h.return = g, h);
  }
  function u(g, h, S, w, E) {
    return h === null || h.tag !== 7 ? (h = Ro(S, g.mode, w, E), h.return = g, h) : (h = o(h, S), h.return = g, h);
  }
  function m(g, h, S) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Iu("" + h, g.mode, S), h.return = g, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case dl:
          return S = Zl(h.type, h.key, h.props, null, g.mode, S), S.ref = Vi(g, null, h), S.return = g, S;
        case Qo:
          return h = Mu(h, g.mode, S), h.return = g, h;
        case zr:
          var w = h._init;
          return m(g, w(h._payload), S);
      }
      if (ns(h) || Bi(h)) return h = Ro(h, g.mode, S, null), h.return = g, h;
      wl(g, h);
    }
    return null;
  }
  function y(g, h, S, w) {
    var E = h !== null ? h.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return E !== null ? null : l(g, h, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case dl:
          return S.key === E ? a(g, h, S, w) : null;
        case Qo:
          return S.key === E ? c(g, h, S, w) : null;
        case zr:
          return E = S._init, y(
            g,
            h,
            E(S._payload),
            w
          );
      }
      if (ns(S) || Bi(S)) return E !== null ? null : u(g, h, S, w, null);
      wl(g, S);
    }
    return null;
  }
  function f(g, h, S, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return g = g.get(S) || null, l(h, g, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case dl:
          return g = g.get(w.key === null ? S : w.key) || null, a(h, g, w, E);
        case Qo:
          return g = g.get(w.key === null ? S : w.key) || null, c(h, g, w, E);
        case zr:
          var k = w._init;
          return f(g, h, S, k(w._payload), E);
      }
      if (ns(w) || Bi(w)) return g = g.get(S) || null, u(h, g, w, E, null);
      wl(h, w);
    }
    return null;
  }
  function x(g, h, S, w) {
    for (var E = null, k = null, T = h, P = h = 0, I = null; T !== null && P < S.length; P++) {
      T.index > P ? (I = T, T = null) : I = T.sibling;
      var A = y(g, T, S[P], w);
      if (A === null) {
        T === null && (T = I);
        break;
      }
      e && T && A.alternate === null && t(g, T), h = i(A, h, P), k === null ? E = A : k.sibling = A, k = A, T = I;
    }
    if (P === S.length) return n(g, T), nt && xo(g, P), E;
    if (T === null) {
      for (; P < S.length; P++) T = m(g, S[P], w), T !== null && (h = i(T, h, P), k === null ? E = T : k.sibling = T, k = T);
      return nt && xo(g, P), E;
    }
    for (T = r(g, T); P < S.length; P++) I = f(T, g, P, S[P], w), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? P : I.key), h = i(I, h, P), k === null ? E = I : k.sibling = I, k = I);
    return e && T.forEach(function($) {
      return t(g, $);
    }), nt && xo(g, P), E;
  }
  function b(g, h, S, w) {
    var E = Bi(S);
    if (typeof E != "function") throw Error(K(150));
    if (S = E.call(S), S == null) throw Error(K(151));
    for (var k = E = null, T = h, P = h = 0, I = null, A = S.next(); T !== null && !A.done; P++, A = S.next()) {
      T.index > P ? (I = T, T = null) : I = T.sibling;
      var $ = y(g, T, A.value, w);
      if ($ === null) {
        T === null && (T = I);
        break;
      }
      e && T && $.alternate === null && t(g, T), h = i($, h, P), k === null ? E = $ : k.sibling = $, k = $, T = I;
    }
    if (A.done) return n(
      g,
      T
    ), nt && xo(g, P), E;
    if (T === null) {
      for (; !A.done; P++, A = S.next()) A = m(g, A.value, w), A !== null && (h = i(A, h, P), k === null ? E = A : k.sibling = A, k = A);
      return nt && xo(g, P), E;
    }
    for (T = r(g, T); !A.done; P++, A = S.next()) A = f(T, g, P, A.value, w), A !== null && (e && A.alternate !== null && T.delete(A.key === null ? P : A.key), h = i(A, h, P), k === null ? E = A : k.sibling = A, k = A);
    return e && T.forEach(function(j) {
      return t(g, j);
    }), nt && xo(g, P), E;
  }
  function C(g, h, S, w) {
    if (typeof S == "object" && S !== null && S.type === qo && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case dl:
          e: {
            for (var E = S.key, k = h; k !== null; ) {
              if (k.key === E) {
                if (E = S.type, E === qo) {
                  if (k.tag === 7) {
                    n(g, k.sibling), h = o(k, S.props.children), h.return = g, g = h;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === zr && Om(E) === k.type) {
                  n(g, k.sibling), h = o(k, S.props), h.ref = Vi(g, k, S), h.return = g, g = h;
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            S.type === qo ? (h = Ro(S.props.children, g.mode, w, S.key), h.return = g, g = h) : (w = Zl(S.type, S.key, S.props, null, g.mode, w), w.ref = Vi(g, h, S), w.return = g, g = w);
          }
          return s(g);
        case Qo:
          e: {
            for (k = S.key; h !== null; ) {
              if (h.key === k) if (h.tag === 4 && h.stateNode.containerInfo === S.containerInfo && h.stateNode.implementation === S.implementation) {
                n(g, h.sibling), h = o(h, S.children || []), h.return = g, g = h;
                break e;
              } else {
                n(g, h);
                break;
              }
              else t(g, h);
              h = h.sibling;
            }
            h = Mu(S, g.mode, w), h.return = g, g = h;
          }
          return s(g);
        case zr:
          return k = S._init, C(g, h, k(S._payload), w);
      }
      if (ns(S)) return x(g, h, S, w);
      if (Bi(S)) return b(g, h, S, w);
      wl(g, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, h !== null && h.tag === 6 ? (n(g, h.sibling), h = o(h, S), h.return = g, g = h) : (n(g, h), h = Iu(S, g.mode, w), h.return = g, g = h), s(g)) : n(g, h);
  }
  return C;
}
var wi = ev(!0), tv = ev(!1), xa = oo(null), Sa = null, ii = null, Af = null;
function Lf() {
  Af = ii = Sa = null;
}
function Nf(e) {
  var t = xa.current;
  et(xa), e._currentValue = t;
}
function kd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function mi(e, t) {
  Sa = e, Af = ii = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (en = !0), e.firstContext = null);
}
function $n(e) {
  var t = e._currentValue;
  if (Af !== e) if (e = { context: e, memoizedValue: t, next: null }, ii === null) {
    if (Sa === null) throw Error(K(308));
    ii = e, Sa.dependencies = { lanes: 0, firstContext: e };
  } else ii = ii.next = e;
  return t;
}
var ko = null;
function zf(e) {
  ko === null ? ko = [e] : ko.push(e);
}
function nv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, zf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Rr(e, r);
}
function Rr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Fr = !1;
function Ff(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function rv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Er(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Yr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Oe & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Rr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, zf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Rr(e, n);
}
function Kl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cf(e, n);
  }
}
function jm(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ba(e, t, n, r) {
  var o = e.updateQueue;
  Fr = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, c = a.next;
    a.next = null, s === null ? i = c : s.next = c, s = a;
    var u = e.alternate;
    u !== null && (u = u.updateQueue, l = u.lastBaseUpdate, l !== s && (l === null ? u.firstBaseUpdate = c : l.next = c, u.lastBaseUpdate = a));
  }
  if (i !== null) {
    var m = o.baseState;
    s = 0, u = c = a = null, l = i;
    do {
      var y = l.lane, f = l.eventTime;
      if ((r & y) === y) {
        u !== null && (u = u.next = {
          eventTime: f,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var x = e, b = l;
          switch (y = t, f = n, b.tag) {
            case 1:
              if (x = b.payload, typeof x == "function") {
                m = x.call(f, m, y);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = b.payload, y = typeof x == "function" ? x.call(f, m, y) : x, y == null) break e;
              m = ct({}, m, y);
              break e;
            case 2:
              Fr = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, y = o.effects, y === null ? o.effects = [l] : y.push(l));
      } else f = { eventTime: f, lane: y, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, u === null ? (c = u = f, a = m) : u = u.next = f, s |= y;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        y = l, l = y.next, y.next = null, o.lastBaseUpdate = y, o.shared.pending = null;
      }
    } while (!0);
    if (u === null && (a = m), o.baseState = a, o.firstBaseUpdate = c, o.lastBaseUpdate = u, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Ao |= s, e.lanes = s, e.memoizedState = m;
  }
}
function Am(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(K(191, o));
      o.call(r);
    }
  }
}
var el = {}, lr = oo(el), As = oo(el), Ls = oo(el);
function Eo(e) {
  if (e === el) throw Error(K(174));
  return e;
}
function Bf(e, t) {
  switch (qe(Ls, t), qe(As, e), qe(lr, el), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : od(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = od(t, e);
  }
  et(lr), qe(lr, t);
}
function Ci() {
  et(lr), et(As), et(Ls);
}
function ov(e) {
  Eo(Ls.current);
  var t = Eo(lr.current), n = od(t, e.type);
  t !== n && (qe(As, e), qe(lr, n));
}
function Df(e) {
  As.current === e && (et(lr), et(As));
}
var it = oo(0);
function wa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Cu = [];
function _f() {
  for (var e = 0; e < Cu.length; e++) Cu[e]._workInProgressVersionPrimary = null;
  Cu.length = 0;
}
var Yl = jr.ReactCurrentDispatcher, ku = jr.ReactCurrentBatchConfig, jo = 0, st = null, kt = null, It = null, Ca = !1, ps = !1, Ns = 0, YS = 0;
function Ft() {
  throw Error(K(321));
}
function Wf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Kn(e[n], t[n])) return !1;
  return !0;
}
function Uf(e, t, n, r, o, i) {
  if (jo = i, st = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yl.current = e === null || e.memoizedState === null ? qS : ZS, e = n(r, o), ps) {
    i = 0;
    do {
      if (ps = !1, Ns = 0, 25 <= i) throw Error(K(301));
      i += 1, It = kt = null, t.updateQueue = null, Yl.current = JS, e = n(r, o);
    } while (ps);
  }
  if (Yl.current = ka, t = kt !== null && kt.next !== null, jo = 0, It = kt = st = null, Ca = !1, t) throw Error(K(300));
  return e;
}
function Vf() {
  var e = Ns !== 0;
  return Ns = 0, e;
}
function er() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return It === null ? st.memoizedState = It = e : It = It.next = e, It;
}
function On() {
  if (kt === null) {
    var e = st.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = kt.next;
  var t = It === null ? st.memoizedState : It.next;
  if (t !== null) It = t, kt = e;
  else {
    if (e === null) throw Error(K(310));
    kt = e, e = { memoizedState: kt.memoizedState, baseState: kt.baseState, baseQueue: kt.baseQueue, queue: kt.queue, next: null }, It === null ? st.memoizedState = It = e : It = It.next = e;
  }
  return It;
}
function zs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Eu(e) {
  var t = On(), n = t.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = e;
  var r = kt, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var l = s = null, a = null, c = i;
    do {
      var u = c.lane;
      if ((jo & u) === u) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (l = a = m, s = r) : a = a.next = m, st.lanes |= u, Ao |= u;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? s = r : a.next = l, Kn(r, t.memoizedState) || (en = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, st.lanes |= i, Ao |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Tu(e) {
  var t = On(), n = t.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Kn(i, t.memoizedState) || (en = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function iv() {
}
function sv(e, t) {
  var n = st, r = On(), o = t(), i = !Kn(r.memoizedState, o);
  if (i && (r.memoizedState = o, en = !0), r = r.queue, Hf(cv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || It !== null && It.memoizedState.tag & 1) {
    if (n.flags |= 2048, Fs(9, av.bind(null, n, r, o, t), void 0, null), Mt === null) throw Error(K(349));
    jo & 30 || lv(n, t, o);
  }
  return o;
}
function lv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = st.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, st.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function av(e, t, n, r) {
  t.value = n, t.getSnapshot = r, uv(t) && dv(e);
}
function cv(e, t, n) {
  return n(function() {
    uv(t) && dv(e);
  });
}
function uv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Kn(e, n);
  } catch {
    return !0;
  }
}
function dv(e) {
  var t = Rr(e, 1);
  t !== null && Hn(t, e, 1, -1);
}
function Lm(e) {
  var t = er();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: zs, lastRenderedState: e }, t.queue = e, e = e.dispatch = QS.bind(null, st, e), [t.memoizedState, e];
}
function Fs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = st.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, st.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fv() {
  return On().memoizedState;
}
function Gl(e, t, n, r) {
  var o = er();
  st.flags |= e, o.memoizedState = Fs(1 | t, n, void 0, r === void 0 ? null : r);
}
function qa(e, t, n, r) {
  var o = On();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (kt !== null) {
    var s = kt.memoizedState;
    if (i = s.destroy, r !== null && Wf(r, s.deps)) {
      o.memoizedState = Fs(t, n, i, r);
      return;
    }
  }
  st.flags |= e, o.memoizedState = Fs(1 | t, n, i, r);
}
function Nm(e, t) {
  return Gl(8390656, 8, e, t);
}
function Hf(e, t) {
  return qa(2048, 8, e, t);
}
function pv(e, t) {
  return qa(4, 2, e, t);
}
function mv(e, t) {
  return qa(4, 4, e, t);
}
function hv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function gv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qa(4, 4, hv.bind(null, t, e), n);
}
function Kf() {
}
function yv(e, t) {
  var n = On();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function vv(e, t) {
  var n = On();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function xv(e, t, n) {
  return jo & 21 ? (Kn(n, t) || (n = ky(), st.lanes |= n, Ao |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, en = !0), e.memoizedState = n);
}
function GS(e, t) {
  var n = We;
  We = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ku.transition;
  ku.transition = {};
  try {
    e(!1), t();
  } finally {
    We = n, ku.transition = r;
  }
}
function Sv() {
  return On().memoizedState;
}
function XS(e, t, n) {
  var r = Xr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, bv(e)) wv(t, n);
  else if (n = nv(e, t, n, r), n !== null) {
    var o = Yt();
    Hn(n, e, r, o), Cv(n, t, r);
  }
}
function QS(e, t, n) {
  var r = Xr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bv(e)) wv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Kn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, zf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = nv(e, t, o, r), n !== null && (o = Yt(), Hn(n, e, r, o), Cv(n, t, r));
  }
}
function bv(e) {
  var t = e.alternate;
  return e === st || t !== null && t === st;
}
function wv(e, t) {
  ps = Ca = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Cv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cf(e, n);
  }
}
var ka = { readContext: $n, useCallback: Ft, useContext: Ft, useEffect: Ft, useImperativeHandle: Ft, useInsertionEffect: Ft, useLayoutEffect: Ft, useMemo: Ft, useReducer: Ft, useRef: Ft, useState: Ft, useDebugValue: Ft, useDeferredValue: Ft, useTransition: Ft, useMutableSource: Ft, useSyncExternalStore: Ft, useId: Ft, unstable_isNewReconciler: !1 }, qS = { readContext: $n, useCallback: function(e, t) {
  return er().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: $n, useEffect: Nm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Gl(
    4194308,
    4,
    hv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Gl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Gl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = er();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = er();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = XS.bind(null, st, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = er();
  return e = { current: e }, t.memoizedState = e;
}, useState: Lm, useDebugValue: Kf, useDeferredValue: function(e) {
  return er().memoizedState = e;
}, useTransition: function() {
  var e = Lm(!1), t = e[0];
  return e = GS.bind(null, e[1]), er().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = st, o = er();
  if (nt) {
    if (n === void 0) throw Error(K(407));
    n = n();
  } else {
    if (n = t(), Mt === null) throw Error(K(349));
    jo & 30 || lv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Nm(cv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Fs(9, av.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = er(), t = Mt.identifierPrefix;
  if (nt) {
    var n = kr, r = Cr;
    n = (r & ~(1 << 32 - Vn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ns++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = YS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ZS = {
  readContext: $n,
  useCallback: yv,
  useContext: $n,
  useEffect: Hf,
  useImperativeHandle: gv,
  useInsertionEffect: pv,
  useLayoutEffect: mv,
  useMemo: vv,
  useReducer: Eu,
  useRef: fv,
  useState: function() {
    return Eu(zs);
  },
  useDebugValue: Kf,
  useDeferredValue: function(e) {
    var t = On();
    return xv(t, kt.memoizedState, e);
  },
  useTransition: function() {
    var e = Eu(zs)[0], t = On().memoizedState;
    return [e, t];
  },
  useMutableSource: iv,
  useSyncExternalStore: sv,
  useId: Sv,
  unstable_isNewReconciler: !1
}, JS = { readContext: $n, useCallback: yv, useContext: $n, useEffect: Hf, useImperativeHandle: gv, useInsertionEffect: pv, useLayoutEffect: mv, useMemo: vv, useReducer: Tu, useRef: fv, useState: function() {
  return Tu(zs);
}, useDebugValue: Kf, useDeferredValue: function(e) {
  var t = On();
  return kt === null ? t.memoizedState = e : xv(t, kt.memoizedState, e);
}, useTransition: function() {
  var e = Tu(zs)[0], t = On().memoizedState;
  return [e, t];
}, useMutableSource: iv, useSyncExternalStore: sv, useId: Sv, unstable_isNewReconciler: !1 };
function _n(e, t) {
  if (e && e.defaultProps) {
    t = ct({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ed(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ct({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Za = { isMounted: function(e) {
  return (e = e._reactInternals) ? Do(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Yt(), o = Xr(e), i = Er(r, o);
  i.payload = t, n != null && (i.callback = n), t = Yr(e, i, o), t !== null && (Hn(t, e, o, r), Kl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Yt(), o = Xr(e), i = Er(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Yr(e, i, o), t !== null && (Hn(t, e, o, r), Kl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Yt(), r = Xr(e), o = Er(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Yr(e, o, r), t !== null && (Hn(t, e, r, n), Kl(t, e, r));
} };
function zm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ms(n, r) || !Ms(o, i) : !0;
}
function kv(e, t, n) {
  var r = !1, o = Jr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = $n(i) : (o = nn(t) ? $o : Wt.current, r = t.contextTypes, i = (r = r != null) ? Si(e, o) : Jr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Za, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Fm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Za.enqueueReplaceState(t, t.state, null);
}
function Td(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Ff(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = $n(i) : (i = nn(t) ? $o : Wt.current, o.context = Si(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ed(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Za.enqueueReplaceState(o, o.state, null), ba(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ki(e, t) {
  try {
    var n = "", r = t;
    do
      n += P1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Pu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var eb = typeof WeakMap == "function" ? WeakMap : Map;
function Ev(e, t, n) {
  n = Er(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ta || (Ta = !0, zd = r), Pd(e, t);
  }, n;
}
function Tv(e, t, n) {
  n = Er(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Pd(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Pd(e, t), typeof r != "function" && (Gr === null ? Gr = /* @__PURE__ */ new Set([this]) : Gr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Bm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new eb();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = mb.bind(null, e, t, n), t.then(e, e));
}
function Dm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _m(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Er(-1, 1), t.tag = 2, Yr(n, t, 1))), n.lanes |= 1), e);
}
var tb = jr.ReactCurrentOwner, en = !1;
function Vt(e, t, n, r) {
  t.child = e === null ? tv(t, null, n, r) : wi(t, e.child, n, r);
}
function Wm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return mi(t, o), r = Uf(e, t, n, r, i, o), n = Vf(), e !== null && !en ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ir(e, t, o)) : (nt && n && $f(t), t.flags |= 1, Vt(e, t, r, o), t.child);
}
function Um(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ep(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Pv(e, t, i, r, o)) : (e = Zl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ms, n(s, r) && e.ref === t.ref) return Ir(e, t, o);
  }
  return t.flags |= 1, e = Qr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Pv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ms(i, r) && e.ref === t.ref) if (en = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (en = !0);
    else return t.lanes = e.lanes, Ir(e, t, o);
  }
  return Rd(e, t, n, r, o);
}
function Rv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(li, cn), cn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, qe(li, cn), cn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, qe(li, cn), cn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, qe(li, cn), cn |= r;
  return Vt(e, t, o, n), t.child;
}
function Iv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Rd(e, t, n, r, o) {
  var i = nn(n) ? $o : Wt.current;
  return i = Si(t, i), mi(t, o), n = Uf(e, t, n, r, i, o), r = Vf(), e !== null && !en ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ir(e, t, o)) : (nt && r && $f(t), t.flags |= 1, Vt(e, t, n, o), t.child);
}
function Vm(e, t, n, r, o) {
  if (nn(n)) {
    var i = !0;
    ga(t);
  } else i = !1;
  if (mi(t, o), t.stateNode === null) Xl(e, t), kv(t, n, r), Td(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = $n(c) : (c = nn(n) ? $o : Wt.current, c = Si(t, c));
    var u = n.getDerivedStateFromProps, m = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== c) && Fm(t, s, r, c), Fr = !1;
    var y = t.memoizedState;
    s.state = y, ba(t, r, s, o), a = t.memoizedState, l !== r || y !== a || tn.current || Fr ? (typeof u == "function" && (Ed(t, n, u, r), a = t.memoizedState), (l = Fr || zm(t, n, l, r, y, a, c)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = c, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, rv(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : _n(t.type, l), s.props = c, m = t.pendingProps, y = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = $n(a) : (a = nn(n) ? $o : Wt.current, a = Si(t, a));
    var f = n.getDerivedStateFromProps;
    (u = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== m || y !== a) && Fm(t, s, r, a), Fr = !1, y = t.memoizedState, s.state = y, ba(t, r, s, o);
    var x = t.memoizedState;
    l !== m || y !== x || tn.current || Fr ? (typeof f == "function" && (Ed(t, n, f, r), x = t.memoizedState), (c = Fr || zm(t, n, c, r, y, x, a) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Id(e, t, n, r, i, o);
}
function Id(e, t, n, r, o, i) {
  Iv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Im(t, n, !1), Ir(e, t, i);
  r = t.stateNode, tb.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = wi(t, e.child, null, i), t.child = wi(t, null, l, i)) : Vt(e, t, l, i), t.memoizedState = r.state, o && Im(t, n, !0), t.child;
}
function Mv(e) {
  var t = e.stateNode;
  t.pendingContext ? Rm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rm(e, t.context, !1), Bf(e, t.containerInfo);
}
function Hm(e, t, n, r, o) {
  return bi(), jf(o), t.flags |= 256, Vt(e, t, n, r), t.child;
}
var Md = { dehydrated: null, treeContext: null, retryLane: 0 };
function $d(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $v(e, t, n) {
  var r = t.pendingProps, o = it.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), qe(it, o & 1), e === null)
    return Cd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = tc(s, r, 0, null), e = Ro(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = $d(n), t.memoizedState = Md, e) : Yf(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return nb(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Qr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Qr(l, i) : (i = Ro(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? $d(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Md, r;
  }
  return i = e.child, e = i.sibling, r = Qr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Yf(e, t) {
  return t = tc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Cl(e, t, n, r) {
  return r !== null && jf(r), wi(t, e.child, null, n), e = Yf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function nb(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Pu(Error(K(422))), Cl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = tc({ mode: "visible", children: r.children }, o, 0, null), i = Ro(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && wi(t, e.child, null, s), t.child.memoizedState = $d(s), t.memoizedState = Md, i);
  if (!(t.mode & 1)) return Cl(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(K(419)), r = Pu(i, r, void 0), Cl(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, en || l) {
    if (r = Mt, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Rr(e, o), Hn(r, e, o, -1));
    }
    return Jf(), r = Pu(Error(K(421))), Cl(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hb.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, fn = Kr(o.nextSibling), pn = t, nt = !0, Un = null, e !== null && (Cn[kn++] = Cr, Cn[kn++] = kr, Cn[kn++] = Oo, Cr = e.id, kr = e.overflow, Oo = t), t = Yf(t, r.children), t.flags |= 4096, t);
}
function Km(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), kd(e.return, t, n);
}
function Ru(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Ov(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Vt(e, t, r.children, n), r = it.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Km(e, n, t);
      else if (e.tag === 19) Km(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (qe(it, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && wa(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ru(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && wa(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Ru(t, !0, n, null, i);
      break;
    case "together":
      Ru(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Xl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ir(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ao |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(K(153));
  if (t.child !== null) {
    for (e = t.child, n = Qr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Qr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function rb(e, t, n) {
  switch (t.tag) {
    case 3:
      Mv(t), bi();
      break;
    case 5:
      ov(t);
      break;
    case 1:
      nn(t.type) && ga(t);
      break;
    case 4:
      Bf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      qe(xa, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (qe(it, it.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? $v(e, t, n) : (qe(it, it.current & 1), e = Ir(e, t, n), e !== null ? e.sibling : null);
      qe(it, it.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ov(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), qe(it, it.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Rv(e, t, n);
  }
  return Ir(e, t, n);
}
var jv, Od, Av, Lv;
jv = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Od = function() {
};
Av = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Eo(lr.current);
    var i = null;
    switch (n) {
      case "input":
        o = ed(e, o), r = ed(e, r), i = [];
        break;
      case "select":
        o = ct({}, o, { value: void 0 }), r = ct({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = rd(e, o), r = rd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ma);
    }
    id(n, r);
    var s;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var l = o[c];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Cs.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (l = o?.[c], r.hasOwnProperty(c) && a !== l && (a != null || l != null)) if (c === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Cs.hasOwnProperty(c) ? (a != null && c === "onScroll" && Je("scroll", e), i || l === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Lv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hi(e, t) {
  if (!nt) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Bt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function ob(e, t, n) {
  var r = t.pendingProps;
  switch (Of(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Bt(t), null;
    case 1:
      return nn(t.type) && ha(), Bt(t), null;
    case 3:
      return r = t.stateNode, Ci(), et(tn), et(Wt), _f(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (bl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Un !== null && (Dd(Un), Un = null))), Od(e, t), Bt(t), null;
    case 5:
      Df(t);
      var o = Eo(Ls.current);
      if (n = t.type, e !== null && t.stateNode != null) Av(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(K(166));
          return Bt(t), null;
        }
        if (e = Eo(lr.current), bl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[rr] = t, r[js] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Je("cancel", r), Je("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Je("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < os.length; o++) Je(os[o], r);
              break;
            case "source":
              Je("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Je(
                "error",
                r
              ), Je("load", r);
              break;
            case "details":
              Je("toggle", r);
              break;
            case "input":
              tm(r, i), Je("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Je("invalid", r);
              break;
            case "textarea":
              rm(r, i), Je("invalid", r);
          }
          id(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Sl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Sl(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Cs.hasOwnProperty(s) && l != null && s === "onScroll" && Je("scroll", r);
          }
          switch (n) {
            case "input":
              fl(r), nm(r, i, !0);
              break;
            case "textarea":
              fl(r), om(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ma);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = cy(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[rr] = t, e[js] = r, jv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = sd(n, r), n) {
              case "dialog":
                Je("cancel", e), Je("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Je("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < os.length; o++) Je(os[o], e);
                o = r;
                break;
              case "source":
                Je("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Je(
                  "error",
                  e
                ), Je("load", e), o = r;
                break;
              case "details":
                Je("toggle", e), o = r;
                break;
              case "input":
                tm(e, r), o = ed(e, r), Je("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ct({}, r, { value: void 0 }), Je("invalid", e);
                break;
              case "textarea":
                rm(e, r), o = rd(e, r), Je("invalid", e);
                break;
              default:
                o = r;
            }
            id(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? fy(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && uy(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ks(e, a) : typeof a == "number" && ks(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Cs.hasOwnProperty(i) ? a != null && i === "onScroll" && Je("scroll", e) : a != null && yf(e, i, a, s));
            }
            switch (n) {
              case "input":
                fl(e), nm(e, r, !1);
                break;
              case "textarea":
                fl(e), om(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ui(e, !!r.multiple, i, !1) : r.defaultValue != null && ui(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ma);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Bt(t), null;
    case 6:
      if (e && t.stateNode != null) Lv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(K(166));
        if (n = Eo(Ls.current), Eo(lr.current), bl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rr] = t, (i = r.nodeValue !== n) && (e = pn, e !== null)) switch (e.tag) {
            case 3:
              Sl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Sl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rr] = t, t.stateNode = r;
      }
      return Bt(t), null;
    case 13:
      if (et(it), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (nt && fn !== null && t.mode & 1 && !(t.flags & 128)) Jy(), bi(), t.flags |= 98560, i = !1;
        else if (i = bl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(K(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(K(317));
            i[rr] = t;
          } else bi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Bt(t), i = !1;
        } else Un !== null && (Dd(Un), Un = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || it.current & 1 ? Et === 0 && (Et = 3) : Jf())), t.updateQueue !== null && (t.flags |= 4), Bt(t), null);
    case 4:
      return Ci(), Od(e, t), e === null && $s(t.stateNode.containerInfo), Bt(t), null;
    case 10:
      return Nf(t.type._context), Bt(t), null;
    case 17:
      return nn(t.type) && ha(), Bt(t), null;
    case 19:
      if (et(it), i = t.memoizedState, i === null) return Bt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Hi(i, !1);
      else {
        if (Et !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = wa(e), s !== null) {
            for (t.flags |= 128, Hi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return qe(it, it.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && gt() > Ei && (t.flags |= 128, r = !0, Hi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = wa(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !nt) return Bt(t), null;
        } else 2 * gt() - i.renderingStartTime > Ei && n !== 1073741824 && (t.flags |= 128, r = !0, Hi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = gt(), t.sibling = null, n = it.current, qe(it, r ? n & 1 | 2 : n & 1), t) : (Bt(t), null);
    case 22:
    case 23:
      return Zf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? cn & 1073741824 && (Bt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Bt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(K(156, t.tag));
}
function ib(e, t) {
  switch (Of(t), t.tag) {
    case 1:
      return nn(t.type) && ha(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ci(), et(tn), et(Wt), _f(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Df(t), null;
    case 13:
      if (et(it), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(K(340));
        bi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return et(it), null;
    case 4:
      return Ci(), null;
    case 10:
      return Nf(t.type._context), null;
    case 22:
    case 23:
      return Zf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var kl = !1, _t = !1, sb = typeof WeakSet == "function" ? WeakSet : Set, J = null;
function si(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    pt(e, t, r);
  }
  else n.current = null;
}
function jd(e, t, n) {
  try {
    n();
  } catch (r) {
    pt(e, t, r);
  }
}
var Ym = !1;
function lb(e, t) {
  if (gd = da, e = Dy(), Mf(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, l = -1, a = -1, c = 0, u = 0, m = e, y = null;
        t: for (; ; ) {
          for (var f; m !== n || o !== 0 && m.nodeType !== 3 || (l = s + o), m !== i || r !== 0 && m.nodeType !== 3 || (a = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (f = m.firstChild) !== null; )
            y = m, m = f;
          for (; ; ) {
            if (m === e) break t;
            if (y === n && ++c === o && (l = s), y === i && ++u === r && (a = s), (f = m.nextSibling) !== null) break;
            m = y, y = m.parentNode;
          }
          m = f;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yd = { focusedElem: e, selectionRange: n }, da = !1, J = t; J !== null; ) if (t = J, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, J = e;
  else for (; J !== null; ) {
    t = J;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var b = x.memoizedProps, C = x.memoizedState, g = t.stateNode, h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? b : _n(t.type, b), C);
            g.__reactInternalSnapshotBeforeUpdate = h;
          }
          break;
        case 3:
          var S = t.stateNode.containerInfo;
          S.nodeType === 1 ? S.textContent = "" : S.nodeType === 9 && S.documentElement && S.removeChild(S.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(K(163));
      }
    } catch (w) {
      pt(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, J = e;
      break;
    }
    J = t.return;
  }
  return x = Ym, Ym = !1, x;
}
function ms(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && jd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ja(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ad(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Nv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Nv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rr], delete t[js], delete t[Sd], delete t[US], delete t[VS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function zv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gm(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || zv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ld(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ma));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ld(e, t, n), e = e.sibling; e !== null; ) Ld(e, t, n), e = e.sibling;
}
function Nd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Nd(e, t, n), e = e.sibling; e !== null; ) Nd(e, t, n), e = e.sibling;
}
var At = null, Wn = !1;
function Lr(e, t, n) {
  for (n = n.child; n !== null; ) Fv(e, t, n), n = n.sibling;
}
function Fv(e, t, n) {
  if (sr && typeof sr.onCommitFiberUnmount == "function") try {
    sr.onCommitFiberUnmount(Ha, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      _t || si(n, t);
    case 6:
      var r = At, o = Wn;
      At = null, Lr(e, t, n), At = r, Wn = o, At !== null && (Wn ? (e = At, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : At.removeChild(n.stateNode));
      break;
    case 18:
      At !== null && (Wn ? (e = At, n = n.stateNode, e.nodeType === 8 ? bu(e.parentNode, n) : e.nodeType === 1 && bu(e, n), Rs(e)) : bu(At, n.stateNode));
      break;
    case 4:
      r = At, o = Wn, At = n.stateNode.containerInfo, Wn = !0, Lr(e, t, n), At = r, Wn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!_t && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && jd(n, t, s), o = o.next;
        } while (o !== r);
      }
      Lr(e, t, n);
      break;
    case 1:
      if (!_t && (si(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        pt(n, t, l);
      }
      Lr(e, t, n);
      break;
    case 21:
      Lr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (_t = (r = _t) || n.memoizedState !== null, Lr(e, t, n), _t = r) : Lr(e, t, n);
      break;
    default:
      Lr(e, t, n);
  }
}
function Xm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sb()), t.forEach(function(r) {
      var o = gb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function zn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            At = l.stateNode, Wn = !1;
            break e;
          case 3:
            At = l.stateNode.containerInfo, Wn = !0;
            break e;
          case 4:
            At = l.stateNode.containerInfo, Wn = !0;
            break e;
        }
        l = l.return;
      }
      if (At === null) throw Error(K(160));
      Fv(i, s, o), At = null, Wn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (c) {
      pt(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Bv(t, e), t = t.sibling;
}
function Bv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (zn(t, e), qn(e), r & 4) {
        try {
          ms(3, e, e.return), Ja(3, e);
        } catch (b) {
          pt(e, e.return, b);
        }
        try {
          ms(5, e, e.return);
        } catch (b) {
          pt(e, e.return, b);
        }
      }
      break;
    case 1:
      zn(t, e), qn(e), r & 512 && n !== null && si(n, n.return);
      break;
    case 5:
      if (zn(t, e), qn(e), r & 512 && n !== null && si(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ks(o, "");
        } catch (b) {
          pt(e, e.return, b);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && ly(o, i), sd(l, s);
          var c = sd(l, i);
          for (s = 0; s < a.length; s += 2) {
            var u = a[s], m = a[s + 1];
            u === "style" ? fy(o, m) : u === "dangerouslySetInnerHTML" ? uy(o, m) : u === "children" ? ks(o, m) : yf(o, u, m, c);
          }
          switch (l) {
            case "input":
              td(o, i);
              break;
            case "textarea":
              ay(o, i);
              break;
            case "select":
              var y = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var f = i.value;
              f != null ? ui(o, !!i.multiple, f, !1) : y !== !!i.multiple && (i.defaultValue != null ? ui(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : ui(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[js] = i;
        } catch (b) {
          pt(e, e.return, b);
        }
      }
      break;
    case 6:
      if (zn(t, e), qn(e), r & 4) {
        if (e.stateNode === null) throw Error(K(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (b) {
          pt(e, e.return, b);
        }
      }
      break;
    case 3:
      if (zn(t, e), qn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Rs(t.containerInfo);
      } catch (b) {
        pt(e, e.return, b);
      }
      break;
    case 4:
      zn(t, e), qn(e);
      break;
    case 13:
      zn(t, e), qn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Qf = gt())), r & 4 && Xm(e);
      break;
    case 22:
      if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (_t = (c = _t) || u, zn(t, e), _t = c) : zn(t, e), qn(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1) for (J = e, u = e.child; u !== null; ) {
          for (m = J = u; J !== null; ) {
            switch (y = J, f = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ms(4, y, y.return);
                break;
              case 1:
                si(y, y.return);
                var x = y.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (b) {
                    pt(r, n, b);
                  }
                }
                break;
              case 5:
                si(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  qm(m);
                  continue;
                }
            }
            f !== null ? (f.return = y, J = f) : qm(m);
          }
          u = u.sibling;
        }
        e: for (u = null, m = e; ; ) {
          if (m.tag === 5) {
            if (u === null) {
              u = m;
              try {
                o = m.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = m.stateNode, a = m.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = dy("display", s));
              } catch (b) {
                pt(e, e.return, b);
              }
            }
          } else if (m.tag === 6) {
            if (u === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (b) {
              pt(e, e.return, b);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            u === m && (u = null), m = m.return;
          }
          u === m && (u = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      zn(t, e), qn(e), r & 4 && Xm(e);
      break;
    case 21:
      break;
    default:
      zn(
        t,
        e
      ), qn(e);
  }
}
function qn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(K(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ks(o, ""), r.flags &= -33);
          var i = Gm(e);
          Nd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Gm(e);
          Ld(e, l, s);
          break;
        default:
          throw Error(K(161));
      }
    } catch (a) {
      pt(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ab(e, t, n) {
  J = e, Dv(e);
}
function Dv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; J !== null; ) {
    var o = J, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || kl;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || _t;
        l = kl;
        var c = _t;
        if (kl = s, (_t = a) && !c) for (J = o; J !== null; ) s = J, a = s.child, s.tag === 22 && s.memoizedState !== null ? Zm(o) : a !== null ? (a.return = s, J = a) : Zm(o);
        for (; i !== null; ) J = i, Dv(i), i = i.sibling;
        J = o, kl = l, _t = c;
      }
      Qm(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, J = i) : Qm(e);
  }
}
function Qm(e) {
  for (; J !== null; ) {
    var t = J;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            _t || Ja(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !_t) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : _n(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Am(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Am(t, s, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var u = c.memoizedState;
                if (u !== null) {
                  var m = u.dehydrated;
                  m !== null && Rs(m);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(K(163));
        }
        _t || t.flags & 512 && Ad(t);
      } catch (y) {
        pt(t, t.return, y);
      }
    }
    if (t === e) {
      J = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, J = n;
      break;
    }
    J = t.return;
  }
}
function qm(e) {
  for (; J !== null; ) {
    var t = J;
    if (t === e) {
      J = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, J = n;
      break;
    }
    J = t.return;
  }
}
function Zm(e) {
  for (; J !== null; ) {
    var t = J;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ja(4, t);
          } catch (a) {
            pt(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              pt(t, o, a);
            }
          }
          var i = t.return;
          try {
            Ad(t);
          } catch (a) {
            pt(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ad(t);
          } catch (a) {
            pt(t, s, a);
          }
      }
    } catch (a) {
      pt(t, t.return, a);
    }
    if (t === e) {
      J = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, J = l;
      break;
    }
    J = t.return;
  }
}
var cb = Math.ceil, Ea = jr.ReactCurrentDispatcher, Gf = jr.ReactCurrentOwner, In = jr.ReactCurrentBatchConfig, Oe = 0, Mt = null, wt = null, Nt = 0, cn = 0, li = oo(0), Et = 0, Bs = null, Ao = 0, ec = 0, Xf = 0, hs = null, Jt = null, Qf = 0, Ei = 1 / 0, xr = null, Ta = !1, zd = null, Gr = null, El = !1, Wr = null, Pa = 0, gs = 0, Fd = null, Ql = -1, ql = 0;
function Yt() {
  return Oe & 6 ? gt() : Ql !== -1 ? Ql : Ql = gt();
}
function Xr(e) {
  return e.mode & 1 ? Oe & 2 && Nt !== 0 ? Nt & -Nt : KS.transition !== null ? (ql === 0 && (ql = ky()), ql) : (e = We, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $y(e.type)), e) : 1;
}
function Hn(e, t, n, r) {
  if (50 < gs) throw gs = 0, Fd = null, Error(K(185));
  qs(e, n, r), (!(Oe & 2) || e !== Mt) && (e === Mt && (!(Oe & 2) && (ec |= n), Et === 4 && Dr(e, Nt)), rn(e, r), n === 1 && Oe === 0 && !(t.mode & 1) && (Ei = gt() + 500, Qa && io()));
}
function rn(e, t) {
  var n = e.callbackNode;
  K1(e, t);
  var r = ua(e, e === Mt ? Nt : 0);
  if (r === 0) n !== null && lm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && lm(n), t === 1) e.tag === 0 ? HS(Jm.bind(null, e)) : Qy(Jm.bind(null, e)), _S(function() {
      !(Oe & 6) && io();
    }), n = null;
    else {
      switch (Ey(r)) {
        case 1:
          n = wf;
          break;
        case 4:
          n = wy;
          break;
        case 16:
          n = ca;
          break;
        case 536870912:
          n = Cy;
          break;
        default:
          n = ca;
      }
      n = Gv(n, _v.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function _v(e, t) {
  if (Ql = -1, ql = 0, Oe & 6) throw Error(K(327));
  var n = e.callbackNode;
  if (hi() && e.callbackNode !== n) return null;
  var r = ua(e, e === Mt ? Nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ra(e, r);
  else {
    t = r;
    var o = Oe;
    Oe |= 2;
    var i = Uv();
    (Mt !== e || Nt !== t) && (xr = null, Ei = gt() + 500, Po(e, t));
    do
      try {
        fb();
        break;
      } catch (l) {
        Wv(e, l);
      }
    while (!0);
    Lf(), Ea.current = i, Oe = o, wt !== null ? t = 0 : (Mt = null, Nt = 0, t = Et);
  }
  if (t !== 0) {
    if (t === 2 && (o = dd(e), o !== 0 && (r = o, t = Bd(e, o))), t === 1) throw n = Bs, Po(e, 0), Dr(e, r), rn(e, gt()), n;
    if (t === 6) Dr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !ub(o) && (t = Ra(e, r), t === 2 && (i = dd(e), i !== 0 && (r = i, t = Bd(e, i))), t === 1)) throw n = Bs, Po(e, 0), Dr(e, r), rn(e, gt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(K(345));
        case 2:
          So(e, Jt, xr);
          break;
        case 3:
          if (Dr(e, r), (r & 130023424) === r && (t = Qf + 500 - gt(), 10 < t)) {
            if (ua(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Yt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = xd(So.bind(null, e, Jt, xr), t);
            break;
          }
          So(e, Jt, xr);
          break;
        case 4:
          if (Dr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Vn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = gt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = xd(So.bind(null, e, Jt, xr), r);
            break;
          }
          So(e, Jt, xr);
          break;
        case 5:
          So(e, Jt, xr);
          break;
        default:
          throw Error(K(329));
      }
    }
  }
  return rn(e, gt()), e.callbackNode === n ? _v.bind(null, e) : null;
}
function Bd(e, t) {
  var n = hs;
  return e.current.memoizedState.isDehydrated && (Po(e, t).flags |= 256), e = Ra(e, t), e !== 2 && (t = Jt, Jt = n, t !== null && Dd(t)), e;
}
function Dd(e) {
  Jt === null ? Jt = e : Jt.push.apply(Jt, e);
}
function ub(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Kn(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Dr(e, t) {
  for (t &= ~Xf, t &= ~ec, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Vn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Jm(e) {
  if (Oe & 6) throw Error(K(327));
  hi();
  var t = ua(e, 0);
  if (!(t & 1)) return rn(e, gt()), null;
  var n = Ra(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = dd(e);
    r !== 0 && (t = r, n = Bd(e, r));
  }
  if (n === 1) throw n = Bs, Po(e, 0), Dr(e, t), rn(e, gt()), n;
  if (n === 6) throw Error(K(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, So(e, Jt, xr), rn(e, gt()), null;
}
function qf(e, t) {
  var n = Oe;
  Oe |= 1;
  try {
    return e(t);
  } finally {
    Oe = n, Oe === 0 && (Ei = gt() + 500, Qa && io());
  }
}
function Lo(e) {
  Wr !== null && Wr.tag === 0 && !(Oe & 6) && hi();
  var t = Oe;
  Oe |= 1;
  var n = In.transition, r = We;
  try {
    if (In.transition = null, We = 1, e) return e();
  } finally {
    We = r, In.transition = n, Oe = t, !(Oe & 6) && io();
  }
}
function Zf() {
  cn = li.current, et(li);
}
function Po(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, DS(n)), wt !== null) for (n = wt.return; n !== null; ) {
    var r = n;
    switch (Of(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ha();
        break;
      case 3:
        Ci(), et(tn), et(Wt), _f();
        break;
      case 5:
        Df(r);
        break;
      case 4:
        Ci();
        break;
      case 13:
        et(it);
        break;
      case 19:
        et(it);
        break;
      case 10:
        Nf(r.type._context);
        break;
      case 22:
      case 23:
        Zf();
    }
    n = n.return;
  }
  if (Mt = e, wt = e = Qr(e.current, null), Nt = cn = t, Et = 0, Bs = null, Xf = ec = Ao = 0, Jt = hs = null, ko !== null) {
    for (t = 0; t < ko.length; t++) if (n = ko[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    ko = null;
  }
  return e;
}
function Wv(e, t) {
  do {
    var n = wt;
    try {
      if (Lf(), Yl.current = ka, Ca) {
        for (var r = st.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ca = !1;
      }
      if (jo = 0, It = kt = st = null, ps = !1, Ns = 0, Gf.current = null, n === null || n.return === null) {
        Et = 1, Bs = t, wt = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Nt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, u = l, m = u.tag;
          if (!(u.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var y = u.alternate;
            y ? (u.updateQueue = y.updateQueue, u.memoizedState = y.memoizedState, u.lanes = y.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var f = Dm(s);
          if (f !== null) {
            f.flags &= -257, _m(f, s, l, i, t), f.mode & 1 && Bm(i, c, t), t = f, a = c;
            var x = t.updateQueue;
            if (x === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Bm(i, c, t), Jf();
              break e;
            }
            a = Error(K(426));
          }
        } else if (nt && l.mode & 1) {
          var C = Dm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), _m(C, s, l, i, t), jf(ki(a, l));
            break e;
          }
        }
        i = a = ki(a, l), Et !== 4 && (Et = 2), hs === null ? hs = [i] : hs.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var g = Ev(i, a, t);
              jm(i, g);
              break e;
            case 1:
              l = a;
              var h = i.type, S = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (Gr === null || !Gr.has(S)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Tv(i, l, t);
                jm(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hv(n);
    } catch (E) {
      t = E, wt === n && n !== null && (wt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Uv() {
  var e = Ea.current;
  return Ea.current = ka, e === null ? ka : e;
}
function Jf() {
  (Et === 0 || Et === 3 || Et === 2) && (Et = 4), Mt === null || !(Ao & 268435455) && !(ec & 268435455) || Dr(Mt, Nt);
}
function Ra(e, t) {
  var n = Oe;
  Oe |= 2;
  var r = Uv();
  (Mt !== e || Nt !== t) && (xr = null, Po(e, t));
  do
    try {
      db();
      break;
    } catch (o) {
      Wv(e, o);
    }
  while (!0);
  if (Lf(), Oe = n, Ea.current = r, wt !== null) throw Error(K(261));
  return Mt = null, Nt = 0, Et;
}
function db() {
  for (; wt !== null; ) Vv(wt);
}
function fb() {
  for (; wt !== null && !z1(); ) Vv(wt);
}
function Vv(e) {
  var t = Yv(e.alternate, e, cn);
  e.memoizedProps = e.pendingProps, t === null ? Hv(e) : wt = t, Gf.current = null;
}
function Hv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ib(n, t), n !== null) {
        n.flags &= 32767, wt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Et = 6, wt = null;
        return;
      }
    } else if (n = ob(n, t, cn), n !== null) {
      wt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      wt = t;
      return;
    }
    wt = t = e;
  } while (t !== null);
  Et === 0 && (Et = 5);
}
function So(e, t, n) {
  var r = We, o = In.transition;
  try {
    In.transition = null, We = 1, pb(e, t, n, r);
  } finally {
    In.transition = o, We = r;
  }
  return null;
}
function pb(e, t, n, r) {
  do
    hi();
  while (Wr !== null);
  if (Oe & 6) throw Error(K(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(K(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Y1(e, i), e === Mt && (wt = Mt = null, Nt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || El || (El = !0, Gv(ca, function() {
    return hi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = In.transition, In.transition = null;
    var s = We;
    We = 1;
    var l = Oe;
    Oe |= 4, Gf.current = null, lb(e, n), Bv(n, e), jS(yd), da = !!gd, yd = gd = null, e.current = n, ab(n), F1(), Oe = l, We = s, In.transition = i;
  } else e.current = n;
  if (El && (El = !1, Wr = e, Pa = o), i = e.pendingLanes, i === 0 && (Gr = null), _1(n.stateNode), rn(e, gt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ta) throw Ta = !1, e = zd, zd = null, e;
  return Pa & 1 && e.tag !== 0 && hi(), i = e.pendingLanes, i & 1 ? e === Fd ? gs++ : (gs = 0, Fd = e) : gs = 0, io(), null;
}
function hi() {
  if (Wr !== null) {
    var e = Ey(Pa), t = In.transition, n = We;
    try {
      if (In.transition = null, We = 16 > e ? 16 : e, Wr === null) var r = !1;
      else {
        if (e = Wr, Wr = null, Pa = 0, Oe & 6) throw Error(K(331));
        var o = Oe;
        for (Oe |= 4, J = e.current; J !== null; ) {
          var i = J, s = i.child;
          if (J.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (J = c; J !== null; ) {
                  var u = J;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ms(8, u, i);
                  }
                  var m = u.child;
                  if (m !== null) m.return = u, J = m;
                  else for (; J !== null; ) {
                    u = J;
                    var y = u.sibling, f = u.return;
                    if (Nv(u), u === c) {
                      J = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = f, J = y;
                      break;
                    }
                    J = f;
                  }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var b = x.child;
                if (b !== null) {
                  x.child = null;
                  do {
                    var C = b.sibling;
                    b.sibling = null, b = C;
                  } while (b !== null);
                }
              }
              J = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, J = s;
          else e: for (; J !== null; ) {
            if (i = J, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ms(9, i, i.return);
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, J = g;
              break e;
            }
            J = i.return;
          }
        }
        var h = e.current;
        for (J = h; J !== null; ) {
          s = J;
          var S = s.child;
          if (s.subtreeFlags & 2064 && S !== null) S.return = s, J = S;
          else e: for (s = h; J !== null; ) {
            if (l = J, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Ja(9, l);
              }
            } catch (E) {
              pt(l, l.return, E);
            }
            if (l === s) {
              J = null;
              break e;
            }
            var w = l.sibling;
            if (w !== null) {
              w.return = l.return, J = w;
              break e;
            }
            J = l.return;
          }
        }
        if (Oe = o, io(), sr && typeof sr.onPostCommitFiberRoot == "function") try {
          sr.onPostCommitFiberRoot(Ha, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      We = n, In.transition = t;
    }
  }
  return !1;
}
function eh(e, t, n) {
  t = ki(n, t), t = Ev(e, t, 1), e = Yr(e, t, 1), t = Yt(), e !== null && (qs(e, 1, t), rn(e, t));
}
function pt(e, t, n) {
  if (e.tag === 3) eh(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      eh(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gr === null || !Gr.has(r))) {
        e = ki(n, e), e = Tv(t, e, 1), t = Yr(t, e, 1), e = Yt(), t !== null && (qs(t, 1, e), rn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function mb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Yt(), e.pingedLanes |= e.suspendedLanes & n, Mt === e && (Nt & n) === n && (Et === 4 || Et === 3 && (Nt & 130023424) === Nt && 500 > gt() - Qf ? Po(e, 0) : Xf |= n), rn(e, t);
}
function Kv(e, t) {
  t === 0 && (e.mode & 1 ? (t = hl, hl <<= 1, !(hl & 130023424) && (hl = 4194304)) : t = 1);
  var n = Yt();
  e = Rr(e, t), e !== null && (qs(e, t, n), rn(e, n));
}
function hb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Kv(e, n);
}
function gb(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(K(314));
  }
  r !== null && r.delete(t), Kv(e, n);
}
var Yv;
Yv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || tn.current) en = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return en = !1, rb(e, t, n);
    en = !!(e.flags & 131072);
  }
  else en = !1, nt && t.flags & 1048576 && qy(t, va, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Xl(e, t), e = t.pendingProps;
      var o = Si(t, Wt.current);
      mi(t, n), o = Uf(null, t, r, e, o, n);
      var i = Vf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, nn(r) ? (i = !0, ga(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ff(t), o.updater = Za, t.stateNode = o, o._reactInternals = t, Td(t, r, e, n), t = Id(null, t, r, !0, i, n)) : (t.tag = 0, nt && i && $f(t), Vt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Xl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = vb(r), e = _n(r, e), o) {
          case 0:
            t = Rd(null, t, r, e, n);
            break e;
          case 1:
            t = Vm(null, t, r, e, n);
            break e;
          case 11:
            t = Wm(null, t, r, e, n);
            break e;
          case 14:
            t = Um(null, t, r, _n(r.type, e), n);
            break e;
        }
        throw Error(K(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), Rd(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), Vm(e, t, r, o, n);
    case 3:
      e: {
        if (Mv(t), e === null) throw Error(K(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, rv(e, t), ba(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = ki(Error(K(423)), t), t = Hm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = ki(Error(K(424)), t), t = Hm(e, t, r, n, o);
          break e;
        } else for (fn = Kr(t.stateNode.containerInfo.firstChild), pn = t, nt = !0, Un = null, n = tv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (bi(), r === o) {
            t = Ir(e, t, n);
            break e;
          }
          Vt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ov(t), e === null && Cd(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, vd(r, o) ? s = null : i !== null && vd(r, i) && (t.flags |= 32), Iv(e, t), Vt(e, t, s, n), t.child;
    case 6:
      return e === null && Cd(t), null;
    case 13:
      return $v(e, t, n);
    case 4:
      return Bf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = wi(t, null, r, n) : Vt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), Wm(e, t, r, o, n);
    case 7:
      return Vt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Vt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Vt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, qe(xa, r._currentValue), r._currentValue = s, i !== null) if (Kn(i.value, s)) {
          if (i.children === o.children && !tn.current) {
            t = Ir(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Er(-1, n & -n), a.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var u = c.pending;
                    u === null ? a.next = a : (a.next = u.next, u.next = a), c.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), kd(
                  i.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(K(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), kd(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        Vt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, mi(t, n), o = $n(o), r = r(o), t.flags |= 1, Vt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = _n(r, t.pendingProps), o = _n(r.type, o), Um(e, t, r, o, n);
    case 15:
      return Pv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), Xl(e, t), t.tag = 1, nn(r) ? (e = !0, ga(t)) : e = !1, mi(t, n), kv(t, r, o), Td(t, r, o, n), Id(null, t, r, !0, e, n);
    case 19:
      return Ov(e, t, n);
    case 22:
      return Rv(e, t, n);
  }
  throw Error(K(156, t.tag));
};
function Gv(e, t) {
  return by(e, t);
}
function yb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Rn(e, t, n, r) {
  return new yb(e, t, n, r);
}
function ep(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function vb(e) {
  if (typeof e == "function") return ep(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === xf) return 11;
    if (e === Sf) return 14;
  }
  return 2;
}
function Qr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Rn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Zl(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") ep(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case qo:
      return Ro(n.children, o, i, t);
    case vf:
      s = 8, o |= 8;
      break;
    case Qu:
      return e = Rn(12, n, t, o | 2), e.elementType = Qu, e.lanes = i, e;
    case qu:
      return e = Rn(13, n, t, o), e.elementType = qu, e.lanes = i, e;
    case Zu:
      return e = Rn(19, n, t, o), e.elementType = Zu, e.lanes = i, e;
    case oy:
      return tc(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ny:
          s = 10;
          break e;
        case ry:
          s = 9;
          break e;
        case xf:
          s = 11;
          break e;
        case Sf:
          s = 14;
          break e;
        case zr:
          s = 16, r = null;
          break e;
      }
      throw Error(K(130, e == null ? e : typeof e, ""));
  }
  return t = Rn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ro(e, t, n, r) {
  return e = Rn(7, e, r, t), e.lanes = n, e;
}
function tc(e, t, n, r) {
  return e = Rn(22, e, r, t), e.elementType = oy, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Iu(e, t, n) {
  return e = Rn(6, e, null, t), e.lanes = n, e;
}
function Mu(e, t, n) {
  return t = Rn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function xb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uu(0), this.expirationTimes = uu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function tp(e, t, n, r, o, i, s, l, a) {
  return e = new xb(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Rn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ff(i), e;
}
function Sb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Qo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Xv(e) {
  if (!e) return Jr;
  e = e._reactInternals;
  e: {
    if (Do(e) !== e || e.tag !== 1) throw Error(K(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (nn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(K(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (nn(n)) return Xy(e, n, t);
  }
  return t;
}
function Qv(e, t, n, r, o, i, s, l, a) {
  return e = tp(n, r, !0, e, o, i, s, l, a), e.context = Xv(null), n = e.current, r = Yt(), o = Xr(n), i = Er(r, o), i.callback = t ?? null, Yr(n, i, o), e.current.lanes = o, qs(e, o, r), rn(e, r), e;
}
function nc(e, t, n, r) {
  var o = t.current, i = Yt(), s = Xr(o);
  return n = Xv(n), t.context === null ? t.context = n : t.pendingContext = n, t = Er(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Yr(o, t, s), e !== null && (Hn(e, o, s, i), Kl(e, o, s)), s;
}
function Ia(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function th(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function np(e, t) {
  th(e, t), (e = e.alternate) && th(e, t);
}
function bb() {
  return null;
}
var qv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function rp(e) {
  this._internalRoot = e;
}
rc.prototype.render = rp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(K(409));
  nc(e, t, null, null);
};
rc.prototype.unmount = rp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lo(function() {
      nc(null, e, null, null);
    }), t[Pr] = null;
  }
};
function rc(e) {
  this._internalRoot = e;
}
rc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ry();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Br.length && t !== 0 && t < Br[n].priority; n++) ;
    Br.splice(n, 0, e), n === 0 && My(e);
  }
};
function op(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function oc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function nh() {
}
function wb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = Ia(s);
        i.call(c);
      };
    }
    var s = Qv(t, r, e, 0, null, !1, !1, "", nh);
    return e._reactRootContainer = s, e[Pr] = s.current, $s(e.nodeType === 8 ? e.parentNode : e), Lo(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var c = Ia(a);
      l.call(c);
    };
  }
  var a = tp(e, 0, !1, null, null, !1, !1, "", nh);
  return e._reactRootContainer = a, e[Pr] = a.current, $s(e.nodeType === 8 ? e.parentNode : e), Lo(function() {
    nc(t, a, n, r);
  }), a;
}
function ic(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = Ia(s);
        l.call(a);
      };
    }
    nc(t, s, e, o);
  } else s = wb(n, t, e, o, r);
  return Ia(s);
}
Ty = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = rs(t.pendingLanes);
        n !== 0 && (Cf(t, n | 1), rn(t, gt()), !(Oe & 6) && (Ei = gt() + 500, io()));
      }
      break;
    case 13:
      Lo(function() {
        var r = Rr(e, 1);
        if (r !== null) {
          var o = Yt();
          Hn(r, e, 1, o);
        }
      }), np(e, 1);
  }
};
kf = function(e) {
  if (e.tag === 13) {
    var t = Rr(e, 134217728);
    if (t !== null) {
      var n = Yt();
      Hn(t, e, 134217728, n);
    }
    np(e, 134217728);
  }
};
Py = function(e) {
  if (e.tag === 13) {
    var t = Xr(e), n = Rr(e, t);
    if (n !== null) {
      var r = Yt();
      Hn(n, e, t, r);
    }
    np(e, t);
  }
};
Ry = function() {
  return We;
};
Iy = function(e, t) {
  var n = We;
  try {
    return We = e, t();
  } finally {
    We = n;
  }
};
ad = function(e, t, n) {
  switch (t) {
    case "input":
      if (td(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Xa(r);
            if (!o) throw Error(K(90));
            sy(r), td(r, o);
          }
        }
      }
      break;
    case "textarea":
      ay(e, n);
      break;
    case "select":
      t = n.value, t != null && ui(e, !!n.multiple, t, !1);
  }
};
hy = qf;
gy = Lo;
var Cb = { usingClientEntryPoint: !1, Events: [Js, ti, Xa, py, my, qf] }, Ki = { findFiberByHostInstance: Co, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, kb = { bundleType: Ki.bundleType, version: Ki.version, rendererPackageName: Ki.rendererPackageName, rendererConfig: Ki.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: jr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = xy(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ki.findFiberByHostInstance || bb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tl.isDisabled && Tl.supportsFiber) try {
    Ha = Tl.inject(kb), sr = Tl;
  } catch {
  }
}
yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cb;
yn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!op(t)) throw Error(K(200));
  return Sb(e, t, null, n);
};
yn.createRoot = function(e, t) {
  if (!op(e)) throw Error(K(299));
  var n = !1, r = "", o = qv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = tp(e, 1, !1, null, null, n, !1, r, o), e[Pr] = t.current, $s(e.nodeType === 8 ? e.parentNode : e), new rp(t);
};
yn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(K(188)) : (e = Object.keys(e).join(","), Error(K(268, e)));
  return e = xy(t), e = e === null ? null : e.stateNode, e;
};
yn.flushSync = function(e) {
  return Lo(e);
};
yn.hydrate = function(e, t, n) {
  if (!oc(t)) throw Error(K(200));
  return ic(null, e, t, !0, n);
};
yn.hydrateRoot = function(e, t, n) {
  if (!op(e)) throw Error(K(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = qv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Qv(t, null, e, 1, n ?? null, o, !1, i, s), e[Pr] = t.current, $s(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new rc(t);
};
yn.render = function(e, t, n) {
  if (!oc(t)) throw Error(K(200));
  return ic(null, e, t, !1, n);
};
yn.unmountComponentAtNode = function(e) {
  if (!oc(e)) throw Error(K(40));
  return e._reactRootContainer ? (Lo(function() {
    ic(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Pr] = null;
    });
  }), !0) : !1;
};
yn.unstable_batchedUpdates = qf;
yn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!oc(n)) throw Error(K(200));
  if (e == null || e._reactInternals === void 0) throw Error(K(38));
  return ic(e, t, n, !1, r);
};
yn.version = "18.3.1-next-f1338f8080-20240426";
function Zv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv);
    } catch (e) {
      console.error(e);
    }
}
Zv(), Zg.exports = yn;
var Jv = Zg.exports, e0, rh = Jv;
e0 = rh.createRoot, rh.hydrateRoot;
const Ds = {
  black: "#000",
  white: "#fff"
}, Ho = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ko = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Yo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Go = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Xo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Yi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Eb = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Mr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const ar = "$$material";
function _d() {
  return _d = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _d.apply(null, arguments);
}
function Tb(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Pb(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Rb = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Pb(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Tb(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Dt = "-ms-", Ma = "-moz-", Ae = "-webkit-", t0 = "comm", ip = "rule", sp = "decl", Ib = "@import", n0 = "@keyframes", Mb = "@layer", $b = Math.abs, sc = String.fromCharCode, Ob = Object.assign;
function jb(e, t) {
  return Lt(e, 0) ^ 45 ? (((t << 2 ^ Lt(e, 0)) << 2 ^ Lt(e, 1)) << 2 ^ Lt(e, 2)) << 2 ^ Lt(e, 3) : 0;
}
function r0(e) {
  return e.trim();
}
function Ab(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Le(e, t, n) {
  return e.replace(t, n);
}
function Wd(e, t) {
  return e.indexOf(t);
}
function Lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function _s(e, t, n) {
  return e.slice(t, n);
}
function tr(e) {
  return e.length;
}
function lp(e) {
  return e.length;
}
function Pl(e, t) {
  return t.push(e), e;
}
function Lb(e, t) {
  return e.map(t).join("");
}
var lc = 1, Ti = 1, o0 = 0, ln = 0, bt = 0, zi = "";
function ac(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: lc, column: Ti, length: s, return: "" };
}
function Gi(e, t) {
  return Ob(ac("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Nb() {
  return bt;
}
function zb() {
  return bt = ln > 0 ? Lt(zi, --ln) : 0, Ti--, bt === 10 && (Ti = 1, lc--), bt;
}
function mn() {
  return bt = ln < o0 ? Lt(zi, ln++) : 0, Ti++, bt === 10 && (Ti = 1, lc++), bt;
}
function cr() {
  return Lt(zi, ln);
}
function Jl() {
  return ln;
}
function tl(e, t) {
  return _s(zi, e, t);
}
function Ws(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function i0(e) {
  return lc = Ti = 1, o0 = tr(zi = e), ln = 0, [];
}
function s0(e) {
  return zi = "", e;
}
function ea(e) {
  return r0(tl(ln - 1, Ud(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fb(e) {
  for (; (bt = cr()) && bt < 33; )
    mn();
  return Ws(e) > 2 || Ws(bt) > 3 ? "" : " ";
}
function Bb(e, t) {
  for (; --t && mn() && !(bt < 48 || bt > 102 || bt > 57 && bt < 65 || bt > 70 && bt < 97); )
    ;
  return tl(e, Jl() + (t < 6 && cr() == 32 && mn() == 32));
}
function Ud(e) {
  for (; mn(); )
    switch (bt) {
      case e:
        return ln;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ud(bt);
        break;
      case 40:
        e === 41 && Ud(e);
        break;
      case 92:
        mn();
        break;
    }
  return ln;
}
function Db(e, t) {
  for (; mn() && e + bt !== 57; )
    if (e + bt === 84 && cr() === 47)
      break;
  return "/*" + tl(t, ln - 1) + "*" + sc(e === 47 ? e : mn());
}
function _b(e) {
  for (; !Ws(cr()); )
    mn();
  return tl(e, ln);
}
function Wb(e) {
  return s0(ta("", null, null, null, [""], e = i0(e), 0, [0], e));
}
function ta(e, t, n, r, o, i, s, l, a) {
  for (var c = 0, u = 0, m = s, y = 0, f = 0, x = 0, b = 1, C = 1, g = 1, h = 0, S = "", w = o, E = i, k = r, T = S; C; )
    switch (x = h, h = mn()) {
      case 40:
        if (x != 108 && Lt(T, m - 1) == 58) {
          Wd(T += Le(ea(h), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += ea(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Fb(x);
        break;
      case 92:
        T += Bb(Jl() - 1, 7);
        continue;
      case 47:
        switch (cr()) {
          case 42:
          case 47:
            Pl(Ub(Db(mn(), Jl()), t, n), a);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * b:
        l[c++] = tr(T) * g;
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0;
          case 59 + u:
            g == -1 && (T = Le(T, /\f/g, "")), f > 0 && tr(T) - m && Pl(f > 32 ? ih(T + ";", r, n, m - 1) : ih(Le(T, " ", "") + ";", r, n, m - 2), a);
            break;
          case 59:
            T += ";";
          default:
            if (Pl(k = oh(T, t, n, c, u, o, l, S, w = [], E = [], m), i), h === 123)
              if (u === 0)
                ta(T, t, k, k, w, i, m, l, E);
              else
                switch (y === 99 && Lt(T, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ta(e, k, k, r && Pl(oh(e, k, k, 0, 0, o, l, S, o, w = [], m), E), o, E, m, l, r ? w : E);
                    break;
                  default:
                    ta(T, k, k, k, [""], E, 0, l, E);
                }
        }
        c = u = f = 0, b = g = 1, S = T = "", m = s;
        break;
      case 58:
        m = 1 + tr(T), f = x;
      default:
        if (b < 1) {
          if (h == 123)
            --b;
          else if (h == 125 && b++ == 0 && zb() == 125)
            continue;
        }
        switch (T += sc(h), h * b) {
          case 38:
            g = u > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[c++] = (tr(T) - 1) * g, g = 1;
            break;
          case 64:
            cr() === 45 && (T += ea(mn())), y = cr(), u = m = tr(S = T += _b(Jl())), h++;
            break;
          case 45:
            x === 45 && tr(T) == 2 && (b = 0);
        }
    }
  return i;
}
function oh(e, t, n, r, o, i, s, l, a, c, u) {
  for (var m = o - 1, y = o === 0 ? i : [""], f = lp(y), x = 0, b = 0, C = 0; x < r; ++x)
    for (var g = 0, h = _s(e, m + 1, m = $b(b = s[x])), S = e; g < f; ++g)
      (S = r0(b > 0 ? y[g] + " " + h : Le(h, /&\f/g, y[g]))) && (a[C++] = S);
  return ac(e, t, n, o === 0 ? ip : l, a, c, u);
}
function Ub(e, t, n) {
  return ac(e, t, n, t0, sc(Nb()), _s(e, 2, -2), 0);
}
function ih(e, t, n, r) {
  return ac(e, t, n, sp, _s(e, 0, r), _s(e, r + 1, -1), r);
}
function gi(e, t) {
  for (var n = "", r = lp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Vb(e, t, n, r) {
  switch (e.type) {
    case Mb:
      if (e.children.length) break;
    case Ib:
    case sp:
      return e.return = e.return || e.value;
    case t0:
      return "";
    case n0:
      return e.return = e.value + "{" + gi(e.children, r) + "}";
    case ip:
      e.value = e.props.join(",");
  }
  return tr(n = gi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Hb(e) {
  var t = lp(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function Kb(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function l0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Yb = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = cr(), o === 38 && i === 12 && (n[r] = 1), !Ws(i); )
    mn();
  return tl(t, ln);
}, Gb = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ws(o)) {
      case 0:
        o === 38 && cr() === 12 && (n[r] = 1), t[r] += Yb(ln - 1, n, r);
        break;
      case 2:
        t[r] += ea(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = cr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += sc(o);
    }
  while (o = mn());
  return t;
}, Xb = function(t, n) {
  return s0(Gb(i0(t), n));
}, sh = /* @__PURE__ */ new WeakMap(), Qb = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !sh.get(r)) && !o) {
      sh.set(t, !0);
      for (var i = [], s = Xb(n, i), l = r.props, a = 0, c = 0; a < s.length; a++)
        for (var u = 0; u < l.length; u++, c++)
          t.props[c] = i[a] ? s[a].replace(/&\f/g, l[u]) : l[u] + " " + s[a];
    }
  }
}, qb = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function a0(e, t) {
  switch (jb(e, t)) {
    case 5103:
      return Ae + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ae + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ae + e + Ma + e + Dt + e + e;
    case 6828:
    case 4268:
      return Ae + e + Dt + e + e;
    case 6165:
      return Ae + e + Dt + "flex-" + e + e;
    case 5187:
      return Ae + e + Le(e, /(\w+).+(:[^]+)/, Ae + "box-$1$2" + Dt + "flex-$1$2") + e;
    case 5443:
      return Ae + e + Dt + "flex-item-" + Le(e, /flex-|-self/, "") + e;
    case 4675:
      return Ae + e + Dt + "flex-line-pack" + Le(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ae + e + Dt + Le(e, "shrink", "negative") + e;
    case 5292:
      return Ae + e + Dt + Le(e, "basis", "preferred-size") + e;
    case 6060:
      return Ae + "box-" + Le(e, "-grow", "") + Ae + e + Dt + Le(e, "grow", "positive") + e;
    case 4554:
      return Ae + Le(e, /([^-])(transform)/g, "$1" + Ae + "$2") + e;
    case 6187:
      return Le(Le(Le(e, /(zoom-|grab)/, Ae + "$1"), /(image-set)/, Ae + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Le(e, /(image-set\([^]*)/, Ae + "$1$`$1");
    case 4968:
      return Le(Le(e, /(.+:)(flex-)?(.*)/, Ae + "box-pack:$3" + Dt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ae + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Le(e, /(.+)-inline(.+)/, Ae + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (tr(e) - 1 - t > 6) switch (Lt(e, t + 1)) {
        case 109:
          if (Lt(e, t + 4) !== 45) break;
        case 102:
          return Le(e, /(.+:)(.+)-([^]+)/, "$1" + Ae + "$2-$3$1" + Ma + (Lt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Wd(e, "stretch") ? a0(Le(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Lt(e, t + 1) !== 115) break;
    case 6444:
      switch (Lt(e, tr(e) - 3 - (~Wd(e, "!important") && 10))) {
        case 107:
          return Le(e, ":", ":" + Ae) + e;
        case 101:
          return Le(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ae + (Lt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ae + "$2$3$1" + Dt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Lt(e, t + 11)) {
        case 114:
          return Ae + e + Dt + Le(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ae + e + Dt + Le(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ae + e + Dt + Le(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ae + e + Dt + e + e;
  }
  return e;
}
var Zb = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case sp:
      t.return = a0(t.value, t.length);
      break;
    case n0:
      return gi([Gi(t, {
        value: Le(t.value, "@", "@" + Ae)
      })], o);
    case ip:
      if (t.length) return Lb(t.props, function(i) {
        switch (Ab(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return gi([Gi(t, {
              props: [Le(i, /:(read-\w+)/, ":" + Ma + "$1")]
            })], o);
          case "::placeholder":
            return gi([Gi(t, {
              props: [Le(i, /:(plac\w+)/, ":" + Ae + "input-$1")]
            }), Gi(t, {
              props: [Le(i, /:(plac\w+)/, ":" + Ma + "$1")]
            }), Gi(t, {
              props: [Le(i, /:(plac\w+)/, Dt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Jb = [Zb], ew = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var C = b.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Jb, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(b) {
      for (var C = b.getAttribute("data-emotion").split(" "), g = 1; g < C.length; g++)
        i[C[g]] = !0;
      l.push(b);
    }
  );
  var a, c = [Qb, qb];
  {
    var u, m = [Vb, Kb(function(b) {
      u.insert(b);
    })], y = Hb(c.concat(o, m)), f = function(C) {
      return gi(Wb(C), y);
    };
    a = function(C, g, h, S) {
      u = h, f(C ? C + "{" + g.styles + "}" : g.styles), S && (x.inserted[g.name] = !0);
    };
  }
  var x = {
    key: n,
    sheet: new Rb({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: a
  };
  return x.sheet.hydrate(l), x;
}, c0 = { exports: {} }, Ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot = typeof Symbol == "function" && Symbol.for, ap = Ot ? Symbol.for("react.element") : 60103, cp = Ot ? Symbol.for("react.portal") : 60106, cc = Ot ? Symbol.for("react.fragment") : 60107, uc = Ot ? Symbol.for("react.strict_mode") : 60108, dc = Ot ? Symbol.for("react.profiler") : 60114, fc = Ot ? Symbol.for("react.provider") : 60109, pc = Ot ? Symbol.for("react.context") : 60110, up = Ot ? Symbol.for("react.async_mode") : 60111, mc = Ot ? Symbol.for("react.concurrent_mode") : 60111, hc = Ot ? Symbol.for("react.forward_ref") : 60112, gc = Ot ? Symbol.for("react.suspense") : 60113, tw = Ot ? Symbol.for("react.suspense_list") : 60120, yc = Ot ? Symbol.for("react.memo") : 60115, vc = Ot ? Symbol.for("react.lazy") : 60116, nw = Ot ? Symbol.for("react.block") : 60121, rw = Ot ? Symbol.for("react.fundamental") : 60117, ow = Ot ? Symbol.for("react.responder") : 60118, iw = Ot ? Symbol.for("react.scope") : 60119;
function xn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ap:
        switch (e = e.type, e) {
          case up:
          case mc:
          case cc:
          case dc:
          case uc:
          case gc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case pc:
              case hc:
              case vc:
              case yc:
              case fc:
                return e;
              default:
                return t;
            }
        }
      case cp:
        return t;
    }
  }
}
function u0(e) {
  return xn(e) === mc;
}
Ue.AsyncMode = up;
Ue.ConcurrentMode = mc;
Ue.ContextConsumer = pc;
Ue.ContextProvider = fc;
Ue.Element = ap;
Ue.ForwardRef = hc;
Ue.Fragment = cc;
Ue.Lazy = vc;
Ue.Memo = yc;
Ue.Portal = cp;
Ue.Profiler = dc;
Ue.StrictMode = uc;
Ue.Suspense = gc;
Ue.isAsyncMode = function(e) {
  return u0(e) || xn(e) === up;
};
Ue.isConcurrentMode = u0;
Ue.isContextConsumer = function(e) {
  return xn(e) === pc;
};
Ue.isContextProvider = function(e) {
  return xn(e) === fc;
};
Ue.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ap;
};
Ue.isForwardRef = function(e) {
  return xn(e) === hc;
};
Ue.isFragment = function(e) {
  return xn(e) === cc;
};
Ue.isLazy = function(e) {
  return xn(e) === vc;
};
Ue.isMemo = function(e) {
  return xn(e) === yc;
};
Ue.isPortal = function(e) {
  return xn(e) === cp;
};
Ue.isProfiler = function(e) {
  return xn(e) === dc;
};
Ue.isStrictMode = function(e) {
  return xn(e) === uc;
};
Ue.isSuspense = function(e) {
  return xn(e) === gc;
};
Ue.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === cc || e === mc || e === dc || e === uc || e === gc || e === tw || typeof e == "object" && e !== null && (e.$$typeof === vc || e.$$typeof === yc || e.$$typeof === fc || e.$$typeof === pc || e.$$typeof === hc || e.$$typeof === rw || e.$$typeof === ow || e.$$typeof === iw || e.$$typeof === nw);
};
Ue.typeOf = xn;
c0.exports = Ue;
var sw = c0.exports, d0 = sw, lw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, aw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, f0 = {};
f0[d0.ForwardRef] = lw;
f0[d0.Memo] = aw;
var cw = !0;
function p0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var dp = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  cw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, fp = function(t, n, r) {
  dp(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function uw(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var dw = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, fw = /[A-Z]|^ms/g, pw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, m0 = function(t) {
  return t.charCodeAt(1) === 45;
}, lh = function(t) {
  return t != null && typeof t != "boolean";
}, $u = /* @__PURE__ */ l0(function(e) {
  return m0(e) ? e : e.replace(fw, "-$&").toLowerCase();
}), ah = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(pw, function(r, o, i) {
          return nr = {
            name: o,
            styles: i,
            next: nr
          }, o;
        });
  }
  return dw[t] !== 1 && !m0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Us(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return nr = {
          name: o.name,
          styles: o.styles,
          next: nr
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            nr = {
              name: s.name,
              styles: s.styles,
              next: nr
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return mw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = nr, c = n(e);
        return nr = a, Us(e, t, c);
      }
      break;
    }
  }
  var u = n;
  if (t == null)
    return u;
  var m = t[u];
  return m !== void 0 ? m : u;
}
function mw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Us(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : lh(l) && (r += $u(i) + ":" + ah(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          lh(s[a]) && (r += $u(i) + ":" + ah(i, s[a]) + ";");
      else {
        var c = Us(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += $u(i) + ":" + c + ";";
            break;
          }
          default:
            r += i + "{" + c + "}";
        }
      }
    }
  return r;
}
var ch = /label:\s*([^\s;{]+)\s*(;|$)/g, nr;
function nl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  nr = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Us(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Us(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  ch.lastIndex = 0;
  for (var c = "", u; (u = ch.exec(o)) !== null; )
    c += "-" + u[1];
  var m = uw(o) + c;
  return {
    name: m,
    styles: o,
    next: nr
  };
}
var hw = function(t) {
  return t();
}, h0 = ia.useInsertionEffect ? ia.useInsertionEffect : !1, g0 = h0 || hw, uh = h0 || p.useLayoutEffect, y0 = /* @__PURE__ */ p.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ew({
    key: "css"
  }) : null
);
y0.Provider;
var pp = function(t) {
  return /* @__PURE__ */ p.forwardRef(function(n, r) {
    var o = p.useContext(y0);
    return t(n, o, r);
  });
}, rl = /* @__PURE__ */ p.createContext({}), mp = {}.hasOwnProperty, Vd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", gw = function(t, n) {
  var r = {};
  for (var o in n)
    mp.call(n, o) && (r[o] = n[o]);
  return r[Vd] = t, r;
}, yw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return dp(n, r, o), g0(function() {
    return fp(n, r, o);
  }), null;
}, vw = /* @__PURE__ */ pp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Vd], i = [r], s = "";
  typeof e.className == "string" ? s = p0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = nl(i, void 0, p.useContext(rl));
  s += t.key + "-" + l.name;
  var a = {};
  for (var c in e)
    mp.call(e, c) && c !== "css" && c !== Vd && (a[c] = e[c]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(yw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ p.createElement(o, a));
}), xw = vw, dh = function(t, n) {
  var r = arguments;
  if (n == null || !mp.call(n, "css"))
    return p.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = xw, i[1] = gw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return p.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(dh || (dh = {}));
var Sw = /* @__PURE__ */ pp(function(e, t) {
  var n = e.styles, r = nl([n], void 0, p.useContext(rl)), o = p.useRef();
  return uh(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), uh(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && fp(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Vs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return nl(t);
}
function ol() {
  var e = Vs.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var bw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ww = /* @__PURE__ */ l0(
  function(e) {
    return bw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Cw = ww, kw = function(t) {
  return t !== "theme";
}, fh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Cw : kw;
}, ph = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Ew = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return dp(n, r, o), g0(function() {
    return fp(n, r, o);
  }), null;
}, Tw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = ph(t, n, r), a = l || fh(o), c = !a("as");
  return function() {
    var u = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      m.push.apply(m, u);
    else {
      var y = u[0];
      m.push(y[0]);
      for (var f = u.length, x = 1; x < f; x++)
        m.push(u[x], y[x]);
    }
    var b = pp(function(C, g, h) {
      var S = c && C.as || o, w = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var T in C)
          k[T] = C[T];
        k.theme = p.useContext(rl);
      }
      typeof C.className == "string" ? w = p0(g.registered, E, C.className) : C.className != null && (w = C.className + " ");
      var P = nl(m.concat(E), g.registered, k);
      w += g.key + "-" + P.name, s !== void 0 && (w += " " + s);
      var I = c && l === void 0 ? fh(S) : a, A = {};
      for (var $ in C)
        c && $ === "as" || I($) && (A[$] = C[$]);
      return A.className = w, h && (A.ref = h), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(Ew, {
        cache: g,
        serialized: P,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ p.createElement(S, A));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = m, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(C, g) {
      var h = e(C, _d({}, n, g, {
        shouldForwardProp: ph(b, g, !0)
      }));
      return h.apply(void 0, m);
    }, b;
  };
}, Pw = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Hd = Tw.bind(null);
Pw.forEach(function(e) {
  Hd[e] = Hd(e);
});
function Rw(e) {
  return e == null || Object.keys(e).length === 0;
}
function v0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Rw(o) ? n : o) : t;
  return /* @__PURE__ */ d.jsx(Sw, {
    styles: r
  });
}
function x0(e, t) {
  return Hd(e, t);
}
function Iw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const mh = [];
function qr(e) {
  return mh[0] = e, nl(mh);
}
var S0 = { exports: {} }, Ye = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hp = Symbol.for("react.transitional.element"), gp = Symbol.for("react.portal"), xc = Symbol.for("react.fragment"), Sc = Symbol.for("react.strict_mode"), bc = Symbol.for("react.profiler"), wc = Symbol.for("react.consumer"), Cc = Symbol.for("react.context"), kc = Symbol.for("react.forward_ref"), Ec = Symbol.for("react.suspense"), Tc = Symbol.for("react.suspense_list"), Pc = Symbol.for("react.memo"), Rc = Symbol.for("react.lazy"), Mw = Symbol.for("react.view_transition"), $w = Symbol.for("react.client.reference");
function Ln(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case hp:
        switch (e = e.type, e) {
          case xc:
          case bc:
          case Sc:
          case Ec:
          case Tc:
          case Mw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Cc:
              case kc:
              case Rc:
              case Pc:
                return e;
              case wc:
                return e;
              default:
                return t;
            }
        }
      case gp:
        return t;
    }
  }
}
Ye.ContextConsumer = wc;
Ye.ContextProvider = Cc;
Ye.Element = hp;
Ye.ForwardRef = kc;
Ye.Fragment = xc;
Ye.Lazy = Rc;
Ye.Memo = Pc;
Ye.Portal = gp;
Ye.Profiler = bc;
Ye.StrictMode = Sc;
Ye.Suspense = Ec;
Ye.SuspenseList = Tc;
Ye.isContextConsumer = function(e) {
  return Ln(e) === wc;
};
Ye.isContextProvider = function(e) {
  return Ln(e) === Cc;
};
Ye.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hp;
};
Ye.isForwardRef = function(e) {
  return Ln(e) === kc;
};
Ye.isFragment = function(e) {
  return Ln(e) === xc;
};
Ye.isLazy = function(e) {
  return Ln(e) === Rc;
};
Ye.isMemo = function(e) {
  return Ln(e) === Pc;
};
Ye.isPortal = function(e) {
  return Ln(e) === gp;
};
Ye.isProfiler = function(e) {
  return Ln(e) === bc;
};
Ye.isStrictMode = function(e) {
  return Ln(e) === Sc;
};
Ye.isSuspense = function(e) {
  return Ln(e) === Ec;
};
Ye.isSuspenseList = function(e) {
  return Ln(e) === Tc;
};
Ye.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === xc || e === bc || e === Sc || e === Ec || e === Tc || typeof e == "object" && e !== null && (e.$$typeof === Rc || e.$$typeof === Pc || e.$$typeof === Cc || e.$$typeof === wc || e.$$typeof === kc || e.$$typeof === $w || e.getModuleId !== void 0);
};
Ye.typeOf = Ln;
S0.exports = Ye;
var b0 = S0.exports;
function wr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function w0(e) {
  if (/* @__PURE__ */ p.isValidElement(e) || b0.isValidElementType(e) || !wr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = w0(e[n]);
  }), t;
}
function $t(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return wr(e) && wr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ p.isValidElement(t[o]) || b0.isValidElementType(t[o]) ? r[o] = t[o] : wr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && wr(e[o]) ? r[o] = $t(e[o], t[o], n) : n.clone ? r[o] = wr(t[o]) ? w0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Ow = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function C0(e) {
  const {
    values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: n = "px",
    step: r = 5,
    ...o
  } = e, i = Ow(t), s = Object.keys(i);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function a(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function c(f, x) {
    const b = s.indexOf(x);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : x) - r / 100}${n})`;
  }
  function u(f) {
    return s.indexOf(f) + 1 < s.length ? c(f, s[s.indexOf(f) + 1]) : l(f);
  }
  function m(f) {
    const x = s.indexOf(f);
    return x === 0 ? l(s[1]) : x === s.length - 1 ? a(s[x]) : c(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  const y = [];
  for (let f = 0; f < s.length; f += 1)
    y.push(l(s[f]));
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: c,
    only: u,
    not: m,
    unit: n,
    internal_mediaKeys: y,
    ...o
  };
}
const hh = /min-width:\s*([0-9.]+)/;
function gh(e, t) {
  if (!e.containerQueries || !jw(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => +(o.match(hh)?.[1] || 0) - +(i.match(hh)?.[1] || 0));
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function jw(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function k0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Aw(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Lw(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    i.up = (...l) => t(e.breakpoints.up(...l), s), i.down = (...l) => t(e.breakpoints.down(...l), s), i.between = (...l) => t(e.breakpoints.between(...l), s), i.only = (...l) => t(e.breakpoints.only(...l), s), i.not = (...l) => {
      const a = t(e.breakpoints.not(...l), s);
      return a.includes("not all and") ? a.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : a;
    };
  }
  const r = {}, o = (i) => (n(r, i), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const Nw = {
  borderRadius: 4
};
function E0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function yi(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return _w(t) ? t : Ww(e) ? Pi(t) : n && r ? Bw(e, t) : n !== r ? Pi(t) : Uw(e, t);
}
function zw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Pi(e[t]);
  return r;
}
function Fw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Pi(e[n]));
  return t;
}
function Bw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Pi(t[r]);
  return e;
}
function Dw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function _w(e) {
  return typeof e != "object" || e === null;
}
function Ww(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Pi(e) {
  return Dw(e) ? Array.isArray(e) ? zw(e) : Fw(e) : e;
}
function Uw(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = yi(e[n], t[n]) : e[n] = Pi(t[n]));
  return e;
}
const Vw = {}, Ic = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, $a = C0({
  values: Ic
}), Hw = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ic[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function eo(e, t, n) {
  const r = {};
  return Mc(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : yi(r, l);
  });
}
function Mc(e, t, n, r) {
  if (t ??= Vw, Array.isArray(n)) {
    const o = t.breakpoints ?? $a;
    for (let i = 0; i < n.length; i += 1)
      Ou(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? $a, i = o.values ?? Ic;
    for (const s in n)
      if (k0(o.keys, s)) {
        const l = Aw(t.containerQueries ? t : Hw, s);
        l && Ou(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        Ou(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function Ou(e, t, n, r, o) {
  e[t] ??= {}, o(t, n, r);
}
function T0(e = $a) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function Kd(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    E0(t[o]) && delete t[o];
  }
  return t;
}
function Kw(e, ...t) {
  const r = [T0(e), ...t].reduce((o, i) => $t(o, i), {});
  return Kd(e, r);
}
function Yw(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function ju(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || Yw(t, n), i = Object.keys(o);
  if (i.length === 0)
    return t;
  let s;
  return i.reduce((l, a, c) => {
    if (Array.isArray(t))
      l[a] = t[c] != null ? t[c] : t[s], s = c;
    else if (typeof t == "object" && t) {
      const u = t;
      l[a] = u[a] != null ? u[a] : u[s], s = a;
    } else
      l[a] = t;
    return l;
  }, {});
}
function Gw(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (k0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function q(e) {
  if (typeof e != "string")
    throw new Error(Mr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function P0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = $c(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function $c(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = yh(e.vars, o, r);
    if (i != null)
      return i;
  }
  return yh(e, o, r);
}
function yh(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : q(s)}`;
    return r?.[l];
  }
  return o;
}
function yt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, c = $c(a, r) || {};
    return eo(s, l, (m) => {
      const y = P0(c, o, m, t);
      return n === !1 ? y : {
        [n]: y
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const Xw = {
  internal_cache: {}
}, Oa = {
  m: "margin",
  p: "padding"
}, vh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, xh = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Hs = {};
for (const e in Oa)
  Hs[e] = [Oa[e]];
for (const e in Oa)
  for (const t in vh) {
    const n = Oa[e], r = vh[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Hs[e + t] = o;
  }
for (const e in xh)
  Hs[e] = Hs[xh[e]];
const yp = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), vp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...yp, ...vp];
function il(e, t, n, r) {
  const o = $c(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Oc(e) {
  return il(e, "spacing", 8);
}
function No(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Sh = [""];
function R0(e, t) {
  const n = e.theme ?? Xw, r = n?.internal_cache?.unarySpacing ?? Oc(n), o = {};
  for (const i in e) {
    if (!t.has(i))
      continue;
    const s = Hs[i] ?? (Sh[0] = i, Sh), l = e[i];
    Mc(o, e.theme, l, (a, c) => {
      const u = a ? o[a] : o;
      for (let m = 0; m < s.length; m += 1)
        u[s[m]] = No(r, c);
    });
  }
  return o;
}
function xp(e) {
  return R0(e, yp);
}
xp.propTypes = {};
xp.filterProps = yp;
const xt = xp;
function Sp(e) {
  return R0(e, vp);
}
Sp.propTypes = {};
Sp.filterProps = vp;
const St = Sp;
function I0(e = 8, t = Oc({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function jc(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && yi(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function En(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Nn(e, t) {
  return yt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Qw = Nn("border", En), qw = Nn("borderTop", En), Zw = Nn("borderRight", En), Jw = Nn("borderBottom", En), eC = Nn("borderLeft", En), tC = Nn("borderColor"), nC = Nn("borderTopColor"), rC = Nn("borderRightColor"), oC = Nn("borderBottomColor"), iC = Nn("borderLeftColor"), sC = Nn("outline", En), lC = Nn("outlineColor"), Ac = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = il(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: No(t, r)
    });
    return eo(e, e.borderRadius, n);
  }
  return null;
};
Ac.propTypes = {};
Ac.filterProps = ["borderRadius"];
jc(Qw, qw, Zw, Jw, eC, tC, nC, rC, oC, iC, Ac, sC, lC);
const Lc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = il(e.theme, "spacing", 8), n = (r) => ({
      gap: No(t, r)
    });
    return eo(e, e.gap, n);
  }
  return null;
};
Lc.propTypes = {};
Lc.filterProps = ["gap"];
const Nc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = il(e.theme, "spacing", 8), n = (r) => ({
      columnGap: No(t, r)
    });
    return eo(e, e.columnGap, n);
  }
  return null;
};
Nc.propTypes = {};
Nc.filterProps = ["columnGap"];
const zc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = il(e.theme, "spacing", 8), n = (r) => ({
      rowGap: No(t, r)
    });
    return eo(e, e.rowGap, n);
  }
  return null;
};
zc.propTypes = {};
zc.filterProps = ["rowGap"];
const aC = yt({
  prop: "gridColumn"
}), cC = yt({
  prop: "gridRow"
}), uC = yt({
  prop: "gridAutoFlow"
}), dC = yt({
  prop: "gridAutoColumns"
}), fC = yt({
  prop: "gridAutoRows"
}), pC = yt({
  prop: "gridTemplateColumns"
}), mC = yt({
  prop: "gridTemplateRows"
}), hC = yt({
  prop: "gridTemplateAreas"
}), gC = yt({
  prop: "gridArea"
});
jc(Lc, Nc, zc, aC, cC, uC, dC, fC, pC, mC, hC, gC);
function vi(e, t) {
  return t === "grey" ? t : e;
}
const yC = yt({
  prop: "color",
  themeKey: "palette",
  transform: vi
}), vC = yt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: vi
}), xC = yt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: vi
});
jc(yC, vC, xC);
const SC = Ic;
function dn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const bC = yt({
  prop: "width",
  transform: dn
}), bp = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      const r = e.theme?.breakpoints?.values?.[n] || SC[n];
      return r ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: dn(n)
      };
    };
    return eo(e, e.maxWidth, t);
  }
  return null;
};
bp.filterProps = ["maxWidth"];
const wC = yt({
  prop: "minWidth",
  transform: dn
}), CC = yt({
  prop: "height",
  transform: dn
}), kC = yt({
  prop: "maxHeight",
  transform: dn
}), EC = yt({
  prop: "minHeight",
  transform: dn
});
yt({
  prop: "size",
  cssProperty: "width",
  transform: dn
});
yt({
  prop: "size",
  cssProperty: "height",
  transform: dn
});
const TC = yt({
  prop: "boxSizing"
});
jc(bC, bp, wC, CC, kC, EC, TC);
const Fc = {
  // borders
  border: {
    themeKey: "borders",
    transform: En
  },
  borderTop: {
    themeKey: "borders",
    transform: En
  },
  borderRight: {
    themeKey: "borders",
    transform: En
  },
  borderBottom: {
    themeKey: "borders",
    transform: En
  },
  borderLeft: {
    themeKey: "borders",
    transform: En
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: En
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ac
  },
  // palette
  color: {
    themeKey: "palette",
    transform: vi
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: vi
  },
  backgroundColor: {
    themeKey: "palette",
    transform: vi
  },
  // spacing
  p: {
    style: St
  },
  pt: {
    style: St
  },
  pr: {
    style: St
  },
  pb: {
    style: St
  },
  pl: {
    style: St
  },
  px: {
    style: St
  },
  py: {
    style: St
  },
  padding: {
    style: St
  },
  paddingTop: {
    style: St
  },
  paddingRight: {
    style: St
  },
  paddingBottom: {
    style: St
  },
  paddingLeft: {
    style: St
  },
  paddingX: {
    style: St
  },
  paddingY: {
    style: St
  },
  paddingInline: {
    style: St
  },
  paddingInlineStart: {
    style: St
  },
  paddingInlineEnd: {
    style: St
  },
  paddingBlock: {
    style: St
  },
  paddingBlockStart: {
    style: St
  },
  paddingBlockEnd: {
    style: St
  },
  m: {
    style: xt
  },
  mt: {
    style: xt
  },
  mr: {
    style: xt
  },
  mb: {
    style: xt
  },
  ml: {
    style: xt
  },
  mx: {
    style: xt
  },
  my: {
    style: xt
  },
  margin: {
    style: xt
  },
  marginTop: {
    style: xt
  },
  marginRight: {
    style: xt
  },
  marginBottom: {
    style: xt
  },
  marginLeft: {
    style: xt
  },
  marginX: {
    style: xt
  },
  marginY: {
    style: xt
  },
  marginInline: {
    style: xt
  },
  marginInlineStart: {
    style: xt
  },
  marginInlineEnd: {
    style: xt
  },
  marginBlock: {
    style: xt
  },
  marginBlockStart: {
    style: xt
  },
  marginBlockEnd: {
    style: xt
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Lc
  },
  rowGap: {
    style: zc
  },
  columnGap: {
    style: Nc
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: dn
  },
  maxWidth: {
    style: bp
  },
  minWidth: {
    transform: dn
  },
  height: {
    transform: dn
  },
  maxHeight: {
    transform: dn
  },
  minHeight: {
    transform: dn
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, PC = {};
function RC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = PC,
      nested: o
    } = t, i = r.unstable_sxConfig ?? Fc, s = {
      sx: null,
      theme: r,
      nested: !0
    };
    function l(a) {
      let c = a;
      if (typeof a == "function")
        c = a(r);
      else if (typeof a != "object")
        return a;
      if (!c)
        return null;
      const u = r.breakpoints ?? $a, m = T0(u);
      for (const y in c) {
        const f = IC(c[y], r);
        if (f != null) {
          if (typeof f != "object") {
            bh(m, y, f, r, i);
            continue;
          }
          if (i[y]) {
            bh(m, y, f, r, i);
            continue;
          }
          Gw(u, f) ? Mc(m, t.theme, f, (x, b) => {
            m[x][y] = b;
          }) : (s.sx = f, m[y] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": gh(r, Kd(u, m))
      } : gh(r, Kd(u, m));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const zo = RC();
function bh(e, t, n, r, o) {
  const i = o[t];
  if (!i) {
    e[t] = n;
    return;
  }
  if (n == null)
    return;
  const {
    themeKey: s
  } = i;
  if (s === "typography" && n === "inherit") {
    e[t] = n;
    return;
  }
  const {
    style: l
  } = i;
  if (l) {
    yi(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: c
  } = i, u = $c(r, s);
  Mc(e, r, n, (m, y) => {
    const f = P0(u, c, y, t);
    a === !1 ? yi(m ? e[m] : e, f) : m ? e[m][a] = f : e[a] = f;
  });
}
function IC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function MC(e, t) {
  const n = this;
  if (n.vars) {
    if (!n.colorSchemes?.[e] || typeof n.getColorSchemeSelector != "function")
      return {};
    let r = n.getColorSchemeSelector(e);
    return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), {
      [r]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Bc(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = C0(n), a = I0(o);
  let c = $t({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: a,
    shape: {
      ...Nw,
      ...i
    }
  }, s);
  return c = Lw(c), c.applyStyles = MC, c = t.reduce((u, m) => $t(u, m), c), c.unstable_sxConfig = {
    ...Fc,
    ...s?.unstable_sxConfig
  }, c.unstable_sx = function(m) {
    return zo({
      sx: m,
      theme: this
    });
  }, c.internal_cache = {}, c;
}
function $C(e) {
  return Object.keys(e).length === 0;
}
function wp(e = null) {
  const t = p.useContext(rl);
  return !t || $C(t) ? e : t;
}
const OC = Bc();
function Dc(e = OC) {
  return wp(e);
}
function Au(e) {
  const t = qr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function M0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Dc(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Au(typeof s == "function" ? s(o) : s)) : i = Au(i)), /* @__PURE__ */ d.jsx(v0, {
    styles: i
  });
}
const wh = (e) => e, jC = () => {
  let e = wh;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = wh;
    }
  };
}, $0 = jC();
function O0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = O0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Z() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = O0(e)) && (r && (r += " "), r += t);
  return r;
}
function AC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = x0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(zo);
  return /* @__PURE__ */ p.forwardRef(function(a, c) {
    const u = Dc(n), {
      className: m,
      component: y = "div",
      ...f
    } = a;
    return /* @__PURE__ */ d.jsx(i, {
      as: y,
      ref: c,
      className: Z(m, o ? o(r) : r),
      theme: t && u[t] || u,
      ...f
    });
  });
}
const LC = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ue(e, t, n = "Mui") {
  const r = LC[t];
  return r ? `${n}-${r}` : `${$0.generate(e)}-${t}`;
}
function se(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ue(e, o, n);
  }), r;
}
function j0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: qr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = qr(o.style));
  }), r;
}
const NC = Bc();
function Lu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function To(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function zC(e) {
  return e ? (t, n) => n[e] : null;
}
function FC(e, t, n) {
  e.theme = E0(e.theme) ? n : e.theme[t] || e.theme;
}
function na(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => na(e, o, n));
  if (Array.isArray(r?.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? To(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? To(qr(s), n) : s;
    }
    return A0(e, r.variants, [o], n);
  }
  return r?.isProcessed ? n ? To(qr(r.style), n) : r.style : n ? To(qr(r), n) : r;
}
function A0(e, t, n = [], r = void 0) {
  let o;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !s.props(o))
        continue;
    } else
      for (const l in s.props)
        if (e[l] !== s.props[l] && e.ownerState?.[l] !== s.props[l])
          continue e;
    typeof s.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, n.push(r ? To(qr(s.style(o)), r) : s.style(o))) : n.push(r ? To(qr(s.style), r) : s.style);
  }
  return n;
}
function L0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = NC,
    rootShouldForwardProp: r = Lu,
    slotShouldForwardProp: o = Lu
  } = e;
  function i(l) {
    FC(l, t, n);
  }
  return (l, a = {}) => {
    Iw(l, (k) => k.filter((T) => T !== zo));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: m,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = zC(_C(u)),
      ...x
    } = a, b = c && c.startsWith("Mui") || u ? "components" : "custom", C = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), g = y || !1;
    let h = Lu;
    u === "Root" || u === "root" ? h = r : u ? h = o : DC(l) && (h = void 0);
    const S = x0(l, {
      shouldForwardProp: h,
      label: BC(),
      ...x
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(P) {
          return na(P, k, P.theme.modularCssLayers ? b : void 0);
        };
      if (wr(k)) {
        const T = j0(k);
        return function(I) {
          return T.variants ? na(I, T, I.theme.modularCssLayers ? b : void 0) : I.theme.modularCssLayers ? To(T.style, b) : T.style;
        };
      }
      return k;
    }, E = (...k) => {
      const T = [], P = k.map(w), I = [];
      if (T.push(i), c && f && I.push(function(v) {
        const R = v.theme.components?.[c]?.styleOverrides;
        if (!R)
          return null;
        const L = {};
        for (const N in R)
          L[N] = na(v, R[N], v.theme.modularCssLayers ? "theme" : void 0);
        return f(v, L);
      }), c && !C && I.push(function(v) {
        const R = v.theme?.components?.[c]?.variants;
        return R ? A0(v, R, [], v.theme.modularCssLayers ? "theme" : void 0) : null;
      }), g || I.push(zo), Array.isArray(P[0])) {
        const j = P.shift(), v = new Array(T.length).fill(""), O = new Array(I.length).fill("");
        let R;
        R = [...v, ...j, ...O], R.raw = [...v, ...j.raw, ...O], T.unshift(R);
      }
      const A = [...T, ...P, ...I], $ = S(...A);
      return l.muiName && ($.muiName = l.muiName), $;
    };
    return S.withConfig && (E.withConfig = S.withConfig), E;
  };
}
function BC(e, t) {
  return void 0;
}
function DC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function _C(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const WC = L0();
function Ri(e, t, n = !1) {
  const r = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        r[i] = {
          ...e[i],
          ...r[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const s = e[i], l = t[i];
        if (!l)
          r[i] = s || {};
        else if (!s)
          r[i] = l;
        else {
          r[i] = {
            ...l
          };
          for (const a in s)
            if (Object.prototype.hasOwnProperty.call(s, a)) {
              const c = a, u = s[c], m = l[c];
              typeof u == "function" || typeof m == "function" ? r[i][c] = (...y) => Ri((typeof u == "function" ? u(...y) : u) ?? {}, (typeof m == "function" ? m(...y) : m) ?? {}, n) : r[i][c] = Ri(u ?? {}, m ?? {}, n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = Z(e?.className, t?.className) : i === "style" && n && t.style ? r.style = {
        ...e?.style,
        ...t?.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function UC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Ri(t.components[n].defaultProps, r);
}
function VC(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Dc(r);
  return o && (i = i[o] || i), UC({
    theme: i,
    name: n,
    props: t
  });
}
const lt = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
function HC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Cp(e, t = 0, n = 1) {
  return HC(e, t, n);
}
function KC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function to(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return to(KC(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Mr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(Mr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const YC = (e) => {
  const t = to(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, is = (e, t) => {
  try {
    return YC(e);
  } catch {
    return e;
  }
};
function _c(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function N0(e) {
  e = to(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (c, u = (c + n / 30) % 12) => o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), _c({
    type: l,
    values: a
  });
}
function Yd(e) {
  e = to(e);
  let t = e.type === "hsl" || e.type === "hsla" ? to(N0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function GC(e, t) {
  const n = Yd(e), r = Yd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ja(e, t) {
  return e = to(e), t = Cp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, _c(e);
}
function fo(e, t, n) {
  try {
    return ja(e, t);
  } catch {
    return e;
  }
}
function Wc(e, t) {
  if (e = to(e), t = Cp(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return _c(e);
}
function De(e, t, n) {
  try {
    return Wc(e, t);
  } catch {
    return e;
  }
}
function Uc(e, t) {
  if (e = to(e), t = Cp(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return _c(e);
}
function _e(e, t, n) {
  try {
    return Uc(e, t);
  } catch {
    return e;
  }
}
function Gd(e, t = 0.15) {
  return Yd(e) > 0.5 ? Wc(e, t) : Uc(e, t);
}
function Rl(e, t, n) {
  try {
    return Gd(e, t);
  } catch {
    return e;
  }
}
const z0 = /* @__PURE__ */ p.createContext(null);
function kp() {
  return p.useContext(z0);
}
const XC = typeof Symbol == "function" && Symbol.for, QC = XC ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function qC(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function ZC(e) {
  const {
    children: t,
    theme: n
  } = e, r = kp(), o = p.useMemo(() => {
    const i = r === null ? {
      ...n
    } : qC(r, n);
    return i != null && (i[QC] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ d.jsx(z0.Provider, {
    value: o,
    children: t
  });
}
const F0 = /* @__PURE__ */ p.createContext();
function JC({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(F0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const Vc = () => p.useContext(F0) ?? !1, B0 = /* @__PURE__ */ p.createContext(void 0);
function ek({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ d.jsx(B0.Provider, {
    value: e,
    children: t
  });
}
function tk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Ri(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Ri(o, r, t.components.mergeClassNameAndStyle) : r;
}
function nk({
  props: e,
  name: t
}) {
  const n = p.useContext(B0);
  return tk({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Ch = 0;
function rk(e) {
  const [t, n] = p.useState(e), r = e || t;
  return p.useEffect(() => {
    t == null && (Ch += 1, n(`mui-${Ch}`));
  }, [t]), r;
}
const ok = {
  ...ia
}, kh = ok.useId;
function $r(e) {
  if (kh !== void 0) {
    const t = kh();
    return e ?? t;
  }
  return rk(e);
}
function ik(e) {
  const t = wp(), n = $r() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, lt(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const s = i.firstChild;
    if (o) {
      if (s && s.hasAttribute?.("data-mui-layer-order") && s.getAttribute("data-mui-layer-order") === n)
        return;
      const l = document.createElement("style");
      l.setAttribute("data-mui-layer-order", n), l.textContent = o, i.prepend(l);
    } else
      i.querySelector(`style[data-mui-layer-order="${n}"]`)?.remove();
  }, [o, n]), o ? /* @__PURE__ */ d.jsx(M0, {
    styles: o
  }) : null;
}
const Eh = {};
function Th(e, t, n, r = !1) {
  return p.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), s = e ? {
        ...t,
        [e]: i
      } : i;
      return r ? () => s : s;
    }
    return e ? {
      ...t,
      [e]: n
    } : {
      ...t,
      ...n
    };
  }, [e, t, n, r]);
}
function D0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = wp(Eh), i = kp() || Eh, s = Th(r, o, n), l = Th(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", c = ik(s);
  return /* @__PURE__ */ d.jsx(ZC, {
    theme: l,
    children: /* @__PURE__ */ d.jsx(rl.Provider, {
      value: s,
      children: /* @__PURE__ */ d.jsx(JC, {
        value: a,
        children: /* @__PURE__ */ d.jsxs(ek, {
          value: r ? s[r].components : s.components,
          children: [c, t]
        })
      })
    })
  });
}
const Ph = {
  theme: void 0
};
function sk(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Ph.theme = o.theme, i = j0(e(Ph)), t = i, n = o.theme), i;
  };
}
const Ep = "mode", Tp = "color-scheme", lk = "data-color-scheme";
function ak(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Ep,
    colorSchemeStorageKey: i = Tp,
    attribute: s = lk,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let c = "", u = s;
  if (s === "class" && (u = ".%s"), s === "data" && (u = "[data-%s]"), u.startsWith(".")) {
    const y = u.substring(1);
    c += `${l}.classList.remove('${y}'.replace('%s', light), '${y}'.replace('%s', dark));
      ${l}.classList.add('${y}'.replace('%s', colorScheme));`;
  }
  const m = u.match(/\[([^[\]]+)\]/);
  if (m) {
    const [y, f] = m[1].split("=");
    f || (c += `${l}.removeAttribute('${y}'.replace('%s', light));
      ${l}.removeAttribute('${y}'.replace('%s', dark));`), c += `
      ${l}.setAttribute('${y}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
  } else u !== ".%s" && (c += `${l}.setAttribute('${u}', colorScheme);`);
  return /* @__PURE__ */ d.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? a : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${r}';
  const light = localStorage.getItem('${i}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${c}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function ck() {
}
const uk = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(n) {
    if (typeof window > "u")
      return;
    if (!t)
      return n;
    let r;
    try {
      r = t.localStorage.getItem(e);
    } catch {
    }
    return r || n;
  },
  set: (n) => {
    if (t)
      try {
        t.localStorage.setItem(e, n);
      } catch {
      }
  },
  subscribe: (n) => {
    if (!t)
      return ck;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function Nu() {
}
function Rh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function _0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function dk(e) {
  return _0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function fk(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Ep,
    colorSchemeStorageKey: s = Tp,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = uk,
    noSsr: c = !1
  } = e, u = o.join(","), m = o.length > 1, y = p.useMemo(() => a?.({
    key: i,
    storageWindow: l
  }), [a, i, l]), f = p.useMemo(() => a?.({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), x = p.useMemo(() => a?.({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [b, C] = p.useState(() => {
    const P = y?.get(t) || t, I = f?.get(n) || n, A = x?.get(r) || r;
    return {
      mode: P,
      systemMode: Rh(P),
      lightColorScheme: I,
      darkColorScheme: A
    };
  }), [g, h] = p.useState(c || !m);
  p.useEffect(() => {
    h(!0);
  }, []);
  const S = dk(b), w = p.useCallback((P) => {
    C((I) => {
      if (P === I.mode)
        return I;
      const A = P ?? t;
      return y?.set(A), {
        ...I,
        mode: A,
        systemMode: Rh(A)
      };
    });
  }, [y, t]), E = p.useCallback((P) => {
    P ? typeof P == "string" ? P && !u.includes(P) ? console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`) : C((I) => {
      const A = {
        ...I
      };
      return _0(I, ($) => {
        $ === "light" && (f?.set(P), A.lightColorScheme = P), $ === "dark" && (x?.set(P), A.darkColorScheme = P);
      }), A;
    }) : C((I) => {
      const A = {
        ...I
      }, $ = P.light === null ? n : P.light, j = P.dark === null ? r : P.dark;
      return $ && (u.includes($) ? (A.lightColorScheme = $, f?.set($)) : console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`)), j && (u.includes(j) ? (A.darkColorScheme = j, x?.set(j)) : console.error(`\`${j}\` does not exist in \`theme.colorSchemes\`.`)), A;
    }) : C((I) => (f?.set(n), x?.set(r), {
      ...I,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [u, f, x, n, r]), k = p.useCallback((P) => {
    b.mode === "system" && C((I) => {
      const A = P?.matches ? "dark" : "light";
      return I.systemMode === A ? I : {
        ...I,
        systemMode: A
      };
    });
  }, [b.mode]), T = p.useRef(k);
  return T.current = k, p.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const P = (...A) => T.current(...A), I = window.matchMedia("(prefers-color-scheme: dark)");
    return I.addListener(P), P(I), () => {
      I.removeListener(P);
    };
  }, [m]), p.useEffect(() => {
    if (m) {
      const P = y?.subscribe(($) => {
        (!$ || ["light", "dark", "system"].includes($)) && w($ || t);
      }) || Nu, I = f?.subscribe(($) => {
        (!$ || u.match($)) && E({
          light: $
        });
      }) || Nu, A = x?.subscribe(($) => {
        (!$ || u.match($)) && E({
          dark: $
        });
      }) || Nu;
      return () => {
        P(), I(), A();
      };
    }
  }, [E, w, u, t, l, m, y, f, x]), {
    ...b,
    mode: g ? b.mode : void 0,
    systemMode: g ? b.systemMode : void 0,
    colorScheme: g ? S : void 0,
    setMode: w,
    setColorScheme: E
  };
}
const pk = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function mk(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Ep,
    colorSchemeStorageKey: o = Tp,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: s,
    resolveTheme: l
  } = e, a = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, c = /* @__PURE__ */ p.createContext(void 0), u = () => p.useContext(c) || a, m = {}, y = {};
  function f(g) {
    const {
      children: h,
      theme: S,
      modeStorageKey: w = r,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: k = i,
      storageManager: T,
      storageWindow: P = typeof window > "u" ? void 0 : window,
      documentNode: I = typeof document > "u" ? void 0 : document,
      colorSchemeNode: A = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: $ = !1,
      disableStyleSheetGeneration: j = !1,
      defaultMode: v = "system",
      forceThemeRerender: O = !1,
      noSsr: R
    } = g, L = p.useRef(!1), N = kp(), M = p.useContext(c), z = !!M && !$, B = p.useMemo(() => S || (typeof n == "function" ? n() : n), [S]), U = B[t], D = U || B, {
      colorSchemes: Q = m,
      components: X = y,
      cssVarPrefix: G
    } = D, H = Object.keys(Q).filter((be) => !!Q[be]).join(","), he = p.useMemo(() => H.split(","), [H]), W = typeof s == "string" ? s : s.light, re = typeof s == "string" ? s : s.dark, ae = Q[W] && Q[re] ? v : Q[D.defaultColorScheme]?.palette?.mode || D.palette?.mode, {
      mode: we,
      setMode: Se,
      systemMode: ye,
      lightColorScheme: ce,
      darkColorScheme: ke,
      colorScheme: Be,
      setColorScheme: je
    } = fk({
      supportedColorSchemes: he,
      defaultLightColorScheme: W,
      defaultDarkColorScheme: re,
      modeStorageKey: w,
      colorSchemeStorageKey: E,
      defaultMode: ae,
      storageManager: T,
      storageWindow: P,
      noSsr: R
    });
    let Te = we, le = Be;
    z && (Te = M.mode, le = M.colorScheme);
    let Ie = le || D.defaultColorScheme;
    D.vars && !O && (Ie = D.defaultColorScheme);
    const Ge = p.useMemo(() => {
      const be = D.generateThemeVars?.() || D.vars, ie = {
        ...D,
        components: X,
        colorSchemes: Q,
        cssVarPrefix: G,
        vars: be
      };
      if (typeof ie.generateSpacing == "function" && (ie.spacing = ie.generateSpacing()), Ie) {
        const fe = Q[Ie];
        fe && typeof fe == "object" && Object.keys(fe).forEach((Ne) => {
          fe[Ne] && typeof fe[Ne] == "object" ? ie[Ne] = {
            ...ie[Ne],
            ...fe[Ne]
          } : ie[Ne] = fe[Ne];
        });
      }
      return l ? l(ie) : ie;
    }, [D, Ie, X, Q, G]), Xe = D.colorSchemeSelector;
    lt(() => {
      if (le && A && Xe && Xe !== "media") {
        const be = Xe;
        let ie = Xe;
        if (be === "class" && (ie = ".%s"), be === "data" && (ie = "[data-%s]"), be?.startsWith("data-") && !be.includes("%s") && (ie = `[${be}="%s"]`), ie.startsWith("."))
          A.classList.remove(...he.map((fe) => ie.substring(1).replace("%s", fe))), A.classList.add(ie.substring(1).replace("%s", le));
        else {
          const fe = ie.replace("%s", le).match(/\[([^\]]+)\]/);
          if (fe) {
            const [Ne, ee] = fe[1].split("=");
            ee || he.forEach((xe) => {
              A.removeAttribute(Ne.replace(le, xe));
            }), A.setAttribute(Ne, ee ? ee.replace(/"|'/g, "") : "");
          } else
            A.setAttribute(ie, le);
        }
      }
    }, [le, Xe, A, he]), p.useEffect(() => {
      let be;
      if (k && L.current && I) {
        const ie = I.createElement("style");
        ie.appendChild(I.createTextNode(pk)), I.head.appendChild(ie), window.getComputedStyle(I.body), be = setTimeout(() => {
          I.head.removeChild(ie);
        }, 1);
      }
      return () => {
        clearTimeout(be);
      };
    }, [le, k, I]), p.useEffect(() => (L.current = !0, () => {
      L.current = !1;
    }), []);
    const Ve = p.useMemo(() => ({
      allColorSchemes: he,
      colorScheme: le,
      darkColorScheme: ke,
      lightColorScheme: ce,
      mode: Te,
      setColorScheme: je,
      setMode: Se,
      systemMode: ye
    }), [he, le, ke, ce, Te, je, Se, ye, Ge.colorSchemeSelector]);
    let ht = !0;
    (j || D.cssVariables === !1 || z && N?.cssVarPrefix === G) && (ht = !1);
    const ft = /* @__PURE__ */ d.jsxs(p.Fragment, {
      children: [/* @__PURE__ */ d.jsx(D0, {
        themeId: U ? t : void 0,
        theme: Ge,
        children: h
      }), ht && /* @__PURE__ */ d.jsx(v0, {
        styles: Ge.generateStyleSheets?.() || []
      })]
    });
    return z ? ft : /* @__PURE__ */ d.jsx(c.Provider, {
      value: Ve,
      children: ft
    });
  }
  const x = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: u,
    getInitColorSchemeScript: (g) => ak({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...g
    })
  };
}
function hk(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const gk = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Ih = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (gk.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, yk = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, vk = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function zu(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return yk(
    e,
    (l, a, c) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const u = `--${n ? `${n}-` : ""}${l.join("-")}`, m = vk(l, a);
        Object.assign(o, {
          [u]: m
        }), Ih(i, l, `var(${u})`, c), Ih(s, l, `var(${u}, ${m})`, c);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function xk(e, t = {}) {
  const {
    getSelector: n = g,
    disableCssColorScheme: r,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: l,
    defaultColorScheme: a = "light",
    ...c
  } = e, {
    vars: u,
    css: m,
    varsWithDefaults: y
  } = zu(c, t);
  let f = y;
  const x = {}, {
    [a]: b,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([w, E]) => {
    const {
      vars: k,
      css: T,
      varsWithDefaults: P
    } = zu(E, t);
    f = $t(f, P), x[w] = {
      css: T,
      vars: k
    };
  }), b) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: k
    } = zu(b, t);
    f = $t(f, k), x[a] = {
      css: w,
      vars: E
    };
  }
  function g(w, E) {
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), w) {
      if (k === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${s[w]?.palette?.mode || w})`]: {
            ":root": E
          }
        };
      if (k)
        return e.defaultColorScheme === w ? `:root, ${k.replace("%s", String(w))}` : k.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let w = {
        ...u
      };
      return Object.entries(x).forEach(([, {
        vars: E
      }]) => {
        w = $t(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      const w = [], E = e.defaultColorScheme || "light";
      function k(I, A) {
        Object.keys(A).length && w.push(typeof I == "string" ? {
          [I]: {
            ...A
          }
        } : I);
      }
      k(n(void 0, {
        ...m
      }), m);
      const {
        [E]: T,
        ...P
      } = x;
      if (T) {
        const {
          css: I
        } = T, A = s[E]?.palette?.mode, $ = !r && A ? {
          colorScheme: A,
          ...I
        } : {
          ...I
        };
        k(n(E, {
          ...$
        }), $);
      }
      return Object.entries(P).forEach(([I, {
        css: A
      }]) => {
        const $ = s[I]?.palette?.mode, j = !r && $ ? {
          colorScheme: $,
          ...A
        } : {
          ...A
        };
        k(n(I, {
          ...j
        }), j);
      }), i && w.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), w;
    }
  };
}
function Sk(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function de(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "", l = !0;
    for (let a = 0; a < i.length; a += 1) {
      const c = i[a];
      c && (s += (l === !0 ? "" : " ") + t(c), l = !1, n && n[c] && (s += " " + n[c]));
    }
    r[o] = s;
  }
  return r;
}
function Fu(e, t) {
  return /* @__PURE__ */ p.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? e.type?._payload?.value?.muiName
  ) !== -1;
}
const bk = Bc(), wk = WC("div", {
  name: "MuiStack",
  slot: "Root"
});
function Ck(e) {
  return VC({
    props: e,
    name: "MuiStack",
    defaultTheme: bk
  });
}
function kk(e, t) {
  const n = p.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ p.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const Ek = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Tk = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...eo({
      theme: t
    }, ju({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Oc(t), o = Object.keys(t.breakpoints.values).reduce((a, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (a[c] = !0), a), {}), i = ju({
      values: e.direction,
      base: o
    }), s = ju({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, c, u) => {
      if (!i[a]) {
        const y = c > 0 ? i[u[c - 1]] : "column";
        i[a] = y;
      }
    }), n = $t(n, eo({
      theme: t
    }, s, (a, c) => e.useFlexGap ? {
      gap: No(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Ek(c ? i[c] : e.direction)}`]: No(r, a)
      }
    }));
  }
  return n = Kw(t.breakpoints, n), n;
};
function Pk(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = wk,
    useThemeProps: n = Ck,
    componentName: r = "MuiStack"
  } = e, o = () => de({
    root: ["root"]
  }, (a) => ue(r, a), {}), i = t(Tk);
  return /* @__PURE__ */ p.forwardRef(function(a, c) {
    const u = n(a), {
      component: m = "div",
      direction: y = "column",
      spacing: f = 0,
      divider: x,
      children: b,
      className: C,
      useFlexGap: g = !1,
      ...h
    } = u, S = {
      direction: y,
      spacing: f,
      useFlexGap: g
    }, w = o();
    return /* @__PURE__ */ d.jsx(i, {
      as: m,
      ownerState: S,
      ref: c,
      className: Z(w.root, C),
      ...h,
      children: x ? kk(b, x) : b
    });
  });
}
function W0() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Ds.white,
      default: Ds.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const U0 = W0();
function V0() {
  return {
    text: {
      primary: Ds.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Ds.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Xd = V0();
function Mh(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Uc(e.main, o) : t === "dark" && (e.dark = Wc(e.main, i)));
}
function $h(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Rk(e = "light") {
  return e === "dark" ? {
    main: Yo[200],
    light: Yo[50],
    dark: Yo[400]
  } : {
    main: Yo[700],
    light: Yo[400],
    dark: Yo[800]
  };
}
function Ik(e = "light") {
  return e === "dark" ? {
    main: Ko[200],
    light: Ko[50],
    dark: Ko[400]
  } : {
    main: Ko[500],
    light: Ko[300],
    dark: Ko[700]
  };
}
function Mk(e = "light") {
  return e === "dark" ? {
    main: Ho[500],
    light: Ho[300],
    dark: Ho[700]
  } : {
    main: Ho[700],
    light: Ho[400],
    dark: Ho[800]
  };
}
function $k(e = "light") {
  return e === "dark" ? {
    main: Go[400],
    light: Go[300],
    dark: Go[700]
  } : {
    main: Go[700],
    light: Go[500],
    dark: Go[900]
  };
}
function Ok(e = "light") {
  return e === "dark" ? {
    main: Xo[400],
    light: Xo[300],
    dark: Xo[700]
  } : {
    main: Xo[800],
    light: Xo[500],
    dark: Xo[900]
  };
}
function jk(e = "light") {
  return e === "dark" ? {
    main: Yi[400],
    light: Yi[300],
    dark: Yi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Yi[500],
    dark: Yi[900]
  };
}
function Ak(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Pp(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || Rk(t), l = e.secondary || Ik(t), a = e.error || Mk(t), c = e.info || $k(t), u = e.success || Ok(t), m = e.warning || jk(t);
  function y(C) {
    return o ? Ak(C) : GC(C, Xd.text.primary) >= n ? Xd.text.primary : U0.text.primary;
  }
  const f = ({
    color: C,
    name: g,
    mainShade: h = 500,
    lightShade: S = 300,
    darkShade: w = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[h] && (C.main = C[h]), !C.hasOwnProperty("main"))
      throw new Error(Mr(11, g ? ` (${g})` : "", h));
    if (typeof C.main != "string")
      throw new Error(Mr(12, g ? ` (${g})` : "", JSON.stringify(C.main)));
    return o ? ($h(o, C, "light", S, r), $h(o, C, "dark", w, r)) : (Mh(C, "light", S, r), Mh(C, "dark", w, r)), C.contrastText || (C.contrastText = y(C.main)), C;
  };
  let x;
  return t === "light" ? x = W0() : t === "dark" && (x = V0()), $t({
    // A collection of common colors.
    common: {
      ...Ds
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Eb,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...x
  }, i);
}
const sl = "--_focusVisible-offset", Hc = "--_focusVisible-behavior", H0 = "--_focusVisible-shadow", Lk = `var(${sl}, 1)`, Nk = `var(${Hc}, )`, Rp = {
  [sl]: 1,
  [Hc]: "initial"
  // reverts the var to guaranteed-invalid so `var(--_focusVisible-behavior, )` falls back to empty — there is no explicit `outset` keyword.
};
function zk(e) {
  return {
    [H0]: e
  };
}
function K0(e) {
  return {
    [sl]: -e,
    [Hc]: "inset"
  };
}
function Y0(e, t) {
  return t.reduce((n, r) => r && "focusVisible" in r ? $t(n, {
    focusVisible: r.focusVisible
  }) : n, {
    focusVisible: e
  }).focusVisible;
}
function Fk(e) {
  return e != null && typeof e == "object" && typeof e.outlineOffset == "string" && e.outlineOffset.includes(sl);
}
function Ip(e, t) {
  return Bk({
    outlineStyle: "solid",
    outlineColor: t,
    outlineWidth: 2,
    outlineOffset: 2,
    // invisible shadow for parent component with solid background (AppBar, Snackbar, Alert) can control the ring color.
    boxShadow: `var(${H0}, 0 0)`,
    ...e === !0 ? null : e
  });
}
function Bk(e) {
  const t = e.outlineOffset ?? 0;
  if (typeof t != "string" || !t.includes(sl)) {
    const r = typeof t == "number" ? `${t}px` : t;
    e.outlineOffset = `calc(${Lk} * ${r})`;
  }
  const n = /* @__PURE__ */ new Set(["none", "initial", "inherit", "unset", "revert", "revert-layer"]);
  return typeof e.boxShadow == "string" && !n.has(e.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e.boxShadow) && !e.boxShadow.includes(Hc) && (e.boxShadow = `${Nk} ${e.boxShadow}`), e;
}
function Dk(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function _k(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Wk(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Oh = {
  textTransform: "uppercase"
}, jh = '"Roboto", "Helvetica", "Arial", sans-serif';
function G0(e, t) {
  const {
    fontFamily: n = jh,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: a = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: u,
    ...m
  } = typeof t == "function" ? t(e) : t, y = r / 14, f = u || ((C) => `${C / a * y}rem`), x = (C, g, h, S, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: f(g),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === jh ? {
      letterSpacing: `${Wk(S / g)}em`
    } : {},
    ...w,
    ...c
  }), b = {
    h1: x(o, 96, 1.167, -1.5),
    h2: x(o, 60, 1.2, -0.5),
    h3: x(i, 48, 1.167, 0),
    h4: x(i, 34, 1.235, 0.25),
    h5: x(i, 24, 1.334, 0),
    h6: x(s, 20, 1.6, 0.15),
    subtitle1: x(i, 16, 1.75, 0.15),
    subtitle2: x(s, 14, 1.57, 0.1),
    body1: x(i, 16, 1.5, 0.15),
    body2: x(i, 14, 1.43, 0.15),
    button: x(s, 14, 1.75, 0.4, Oh),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, Oh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return $t({
    htmlFontSize: a,
    pxToRem: f,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...b
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Uk = 0.2, Vk = 0.14, Hk = 0.12;
function tt(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Uk})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Vk})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Hk})`].join(",");
}
const Kk = ["none", tt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), tt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), tt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), tt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), tt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), tt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), tt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), tt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), tt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), tt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), tt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), tt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), tt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), tt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), tt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), tt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), tt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), tt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), tt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), tt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), tt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), tt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), tt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), tt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Yk = ["all"], Gk = {}, Xk = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Qk = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Ah(e) {
  return `${Math.round(e)}ms`;
}
function qk(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Zk(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...Xk,
    ...t.easing
  }, r = {
    ...Qk,
    ...t.duration
  }, o = (s = Yk, l = Gk) => {
    const {
      duration: a = r.standard,
      easing: c = n.easeInOut,
      delay: u = 0,
      ...m
    } = l;
    return (Array.isArray(s) ? s : [s]).map((y) => `${y} ${typeof a == "string" ? a : Ah(a)} ${c} ${typeof u == "string" ? u : Ah(u)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: qk,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const Jk = {};
function e2(e = Jk) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const t2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function n2(e) {
  return wr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function X0(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !n2(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : wr(l) && (r[s] = {
        ...l
      }, n(r[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Lh(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const r2 = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let n = 0;
  for (let r = 0; r < t.length; r += 1)
    n += +t[r];
  return n;
};
function o2(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : ja(t, r2(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Lh(n)})` : Uc(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Lh(n)})` : Wc(t, n);
    }
  });
}
function Qd(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    motion: s = {},
    transitions: l = {},
    typography: a = {},
    shape: c,
    colorSpace: u,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Mr(22));
  const y = Pp({
    ...i,
    colorSpace: u
  }), f = Bc(e);
  let x = $t(f, {
    mixins: _k(f.breakpoints, r),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Kk.slice(),
    typography: G0(y, a),
    motion: e2(s),
    transitions: Zk(l),
    zIndex: {
      ...t2
    }
  });
  return x = $t(x, m), x = t.reduce((b, C) => $t(b, C), x), delete x.transitions.reducedMotion, x.focusVisible != null && x.focusVisible !== !1 && (x.focusVisible = Ip(x.focusVisible, x.palette.primary.main)), x.unstable_sxConfig = {
    ...Fc,
    ...m?.unstable_sxConfig
  }, x.unstable_sx = function(C) {
    return zo({
      sx: C,
      theme: this
    });
  }, x.toRuntimeSource = X0, o2(x), x;
}
function qd(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const i2 = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = qd(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Q0(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function q0(e) {
  return e === "dark" ? i2 : [];
}
function s2(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = Pp({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...Q0(s.mode),
      ...n
    },
    overlays: r || q0(s.mode),
    ...i
  };
}
function l2(e) {
  return e[0] === "motion" || // Keep `focusVisible` inline: its values reference the per-component private vars
  // (`--_focusVisible-offset`/`-behavior`). Hoisted to a `:root` var they resolve where those
  // vars are unset, silently breaking the inner-ring inset.
  e[0] === "focusVisible" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const a2 = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], c2 = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return a2(e.cssVarPrefix).forEach((l) => {
        s[l] = n[l], delete n[l];
      }), i === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${r}, ${i.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${r}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return r;
};
function u2(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function ss(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : N0(e);
}
function yr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = is(ss(e[t])));
}
function d2(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Zn = (e) => {
  try {
    return e();
  } catch {
  }
}, f2 = (e = "mui") => hk(e);
function Bu(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = s2({
      ...n,
      palette: {
        mode: i,
        ...n?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...l
  } = Qd({
    ...r,
    palette: {
      mode: i,
      ...n?.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...n,
    palette: s,
    opacity: {
      ...Q0(i),
      ...n?.opacity
    },
    overlays: n?.overlays || q0(i)
  }, l;
}
function p2(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = l2,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, m = Object.keys(n)[0], y = r || (n.light && m !== "light" ? "light" : m), f = f2(i), {
    [y]: x,
    light: b,
    dark: C,
    ...g
  } = n, h = {
    ...g
  };
  let S = x;
  if ((y === "dark" && !("dark" in n) || y === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(Mr(21, y));
  let w;
  s && (w = "oklch");
  const E = Bu(w, h, S, u, y);
  b && !h.light && Bu(w, h, b, void 0, "light"), C && !h.dark && Bu(w, h, C, void 0, "dark");
  let k = {
    defaultColorScheme: y,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: f,
    colorSchemes: h,
    font: {
      ...Dk(E.typography),
      ...E.font
    },
    spacing: d2(u.spacing)
  };
  Object.keys(k.colorSchemes).forEach((j) => {
    const v = k.colorSchemes[j].palette, O = (L) => {
      const N = L.split("-"), M = N[1], z = N[2];
      return f(L, v[M][z]);
    };
    v.mode === "light" && (F(v.common, "background", "#fff"), F(v.common, "onBackground", "#000")), v.mode === "dark" && (F(v.common, "background", "#000"), F(v.common, "onBackground", "#fff"));
    function R(L, N, M) {
      if (w) {
        let z;
        return L === fo && (z = `transparent ${((1 - M) * 100).toFixed(0)}%`), L === De && (z = `#000 ${(M * 100).toFixed(0)}%`), L === _e && (z = `#fff ${(M * 100).toFixed(0)}%`), `color-mix(in ${w}, ${N}, ${z})`;
      }
      return L(N, M);
    }
    if (u2(v, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), v.mode === "light") {
      F(v.Alert, "errorColor", R(De, s ? f("palette-error-light") : v.error.light, 0.6)), F(v.Alert, "infoColor", R(De, s ? f("palette-info-light") : v.info.light, 0.6)), F(v.Alert, "successColor", R(De, s ? f("palette-success-light") : v.success.light, 0.6)), F(v.Alert, "warningColor", R(De, s ? f("palette-warning-light") : v.warning.light, 0.6)), F(v.Alert, "errorFilledBg", O("palette-error-main")), F(v.Alert, "infoFilledBg", O("palette-info-main")), F(v.Alert, "successFilledBg", O("palette-success-main")), F(v.Alert, "warningFilledBg", O("palette-warning-main")), F(v.Alert, "errorFilledColor", Zn(() => v.getContrastText(v.error.main))), F(v.Alert, "infoFilledColor", Zn(() => v.getContrastText(v.info.main))), F(v.Alert, "successFilledColor", Zn(() => v.getContrastText(v.success.main))), F(v.Alert, "warningFilledColor", Zn(() => v.getContrastText(v.warning.main))), F(v.Alert, "errorStandardBg", R(_e, s ? f("palette-error-light") : v.error.light, 0.9)), F(v.Alert, "infoStandardBg", R(_e, s ? f("palette-info-light") : v.info.light, 0.9)), F(v.Alert, "successStandardBg", R(_e, s ? f("palette-success-light") : v.success.light, 0.9)), F(v.Alert, "warningStandardBg", R(_e, s ? f("palette-warning-light") : v.warning.light, 0.9)), F(v.Alert, "errorIconColor", O("palette-error-main")), F(v.Alert, "infoIconColor", O("palette-info-main")), F(v.Alert, "successIconColor", O("palette-success-main")), F(v.Alert, "warningIconColor", O("palette-warning-main")), F(v.AppBar, "defaultBg", O("palette-grey-100")), F(v.Avatar, "defaultBg", O("palette-grey-400")), F(v.Button, "inheritContainedBg", O("palette-grey-300")), F(v.Button, "inheritContainedHoverBg", O("palette-grey-A100")), F(v.Chip, "defaultBorder", O("palette-grey-400")), F(v.Chip, "defaultAvatarColor", O("palette-grey-700")), F(v.Chip, "defaultIconColor", O("palette-grey-700")), F(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(v.LinearProgress, "primaryBg", R(_e, s ? f("palette-primary-main") : v.primary.main, 0.62)), F(v.LinearProgress, "secondaryBg", R(_e, s ? f("palette-secondary-main") : v.secondary.main, 0.62)), F(v.LinearProgress, "errorBg", R(_e, s ? f("palette-error-main") : v.error.main, 0.62)), F(v.LinearProgress, "infoBg", R(_e, s ? f("palette-info-main") : v.info.main, 0.62)), F(v.LinearProgress, "successBg", R(_e, s ? f("palette-success-main") : v.success.main, 0.62)), F(v.LinearProgress, "warningBg", R(_e, s ? f("palette-warning-light") : v.warning.main, 0.62)), F(v.Skeleton, "bg", w ? R(fo, s ? f("palette-text-primary") : v.text.primary, 0.11) : `rgba(${O("palette-text-primaryChannel")} / 0.11)`), F(v.Slider, "primaryTrack", R(_e, s ? f("palette-primary-main") : v.primary.main, 0.62)), F(v.Slider, "secondaryTrack", R(_e, s ? f("palette-secondary-main") : v.secondary.main, 0.62)), F(v.Slider, "errorTrack", R(_e, s ? f("palette-error-main") : v.error.main, 0.62)), F(v.Slider, "infoTrack", R(_e, s ? f("palette-info-main") : v.info.main, 0.62)), F(v.Slider, "successTrack", R(_e, s ? f("palette-success-main") : v.success.main, 0.62)), F(v.Slider, "warningTrack", R(_e, s ? f("palette-warning-main") : v.warning.main, 0.62));
      const L = w ? R(De, s ? f("palette-background-default") : v.background.default, 0.6825) : Rl(v.background.default, 0.8);
      F(v.SnackbarContent, "bg", L), F(v.SnackbarContent, "color", Zn(() => w ? Xd.text.primary : v.getContrastText(L))), F(v.SpeedDialAction, "fabHoverBg", Rl(v.background.paper, 0.15)), F(v.StepConnector, "border", O("palette-grey-400")), F(v.StepContent, "border", O("palette-grey-400")), F(v.Switch, "defaultColor", O("palette-common-white")), F(v.Switch, "defaultDisabledColor", O("palette-grey-100")), F(v.Switch, "primaryDisabledColor", R(_e, s ? f("palette-primary-main") : v.primary.main, 0.62)), F(v.Switch, "secondaryDisabledColor", R(_e, s ? f("palette-secondary-main") : v.secondary.main, 0.62)), F(v.Switch, "errorDisabledColor", R(_e, s ? f("palette-error-main") : v.error.main, 0.62)), F(v.Switch, "infoDisabledColor", R(_e, s ? f("palette-info-main") : v.info.main, 0.62)), F(v.Switch, "successDisabledColor", R(_e, s ? f("palette-success-main") : v.success.main, 0.62)), F(v.Switch, "warningDisabledColor", R(_e, s ? f("palette-warning-main") : v.warning.main, 0.62)), F(v.TableCell, "border", R(_e, fo(s ? f("palette-divider") : v.divider, 1), 0.88)), F(v.Tooltip, "bg", R(fo, s ? f("palette-grey-700") : v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      F(v.Alert, "errorColor", R(_e, s ? f("palette-error-light") : v.error.light, 0.6)), F(v.Alert, "infoColor", R(_e, s ? f("palette-info-light") : v.info.light, 0.6)), F(v.Alert, "successColor", R(_e, s ? f("palette-success-light") : v.success.light, 0.6)), F(v.Alert, "warningColor", R(_e, s ? f("palette-warning-light") : v.warning.light, 0.6)), F(v.Alert, "errorFilledBg", O("palette-error-dark")), F(v.Alert, "infoFilledBg", O("palette-info-dark")), F(v.Alert, "successFilledBg", O("palette-success-dark")), F(v.Alert, "warningFilledBg", O("palette-warning-dark")), F(v.Alert, "errorFilledColor", Zn(() => v.getContrastText(v.error.dark))), F(v.Alert, "infoFilledColor", Zn(() => v.getContrastText(v.info.dark))), F(v.Alert, "successFilledColor", Zn(() => v.getContrastText(v.success.dark))), F(v.Alert, "warningFilledColor", Zn(() => v.getContrastText(v.warning.dark))), F(v.Alert, "errorStandardBg", R(De, s ? f("palette-error-light") : v.error.light, 0.9)), F(v.Alert, "infoStandardBg", R(De, s ? f("palette-info-light") : v.info.light, 0.9)), F(v.Alert, "successStandardBg", R(De, s ? f("palette-success-light") : v.success.light, 0.9)), F(v.Alert, "warningStandardBg", R(De, s ? f("palette-warning-light") : v.warning.light, 0.9)), F(v.Alert, "errorIconColor", O("palette-error-main")), F(v.Alert, "infoIconColor", O("palette-info-main")), F(v.Alert, "successIconColor", O("palette-success-main")), F(v.Alert, "warningIconColor", O("palette-warning-main")), F(v.AppBar, "defaultBg", O("palette-grey-900")), F(v.AppBar, "darkBg", O("palette-background-paper")), F(v.AppBar, "darkColor", O("palette-text-primary")), F(v.Avatar, "defaultBg", O("palette-grey-600")), F(v.Button, "inheritContainedBg", O("palette-grey-800")), F(v.Button, "inheritContainedHoverBg", O("palette-grey-700")), F(v.Chip, "defaultBorder", O("palette-grey-700")), F(v.Chip, "defaultAvatarColor", O("palette-grey-300")), F(v.Chip, "defaultIconColor", O("palette-grey-300")), F(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(v.LinearProgress, "primaryBg", R(De, s ? f("palette-primary-main") : v.primary.main, 0.5)), F(v.LinearProgress, "secondaryBg", R(De, s ? f("palette-secondary-main") : v.secondary.main, 0.5)), F(v.LinearProgress, "errorBg", R(De, s ? f("palette-error-main") : v.error.main, 0.5)), F(v.LinearProgress, "infoBg", R(De, s ? f("palette-info-main") : v.info.main, 0.5)), F(v.LinearProgress, "successBg", R(De, s ? f("palette-success-main") : v.success.main, 0.5)), F(v.LinearProgress, "warningBg", R(De, s ? f("palette-warning-main") : v.warning.main, 0.5)), F(v.Skeleton, "bg", w ? R(fo, s ? f("palette-text-primary") : v.text.primary, 0.13) : `rgba(${O("palette-text-primaryChannel")} / 0.13)`), F(v.Slider, "primaryTrack", R(De, s ? f("palette-primary-main") : v.primary.main, 0.5)), F(v.Slider, "secondaryTrack", R(De, s ? f("palette-secondary-main") : v.secondary.main, 0.5)), F(v.Slider, "errorTrack", R(De, s ? f("palette-error-main") : v.error.main, 0.5)), F(v.Slider, "infoTrack", R(De, s ? f("palette-info-main") : v.info.main, 0.5)), F(v.Slider, "successTrack", R(De, s ? f("palette-success-main") : v.success.main, 0.5)), F(v.Slider, "warningTrack", R(De, s ? f("palette-warning-light") : v.warning.main, 0.5));
      const L = w ? R(_e, s ? f("palette-background-default") : v.background.default, 0.985) : Rl(v.background.default, 0.98);
      F(v.SnackbarContent, "bg", L), F(v.SnackbarContent, "color", Zn(() => w ? U0.text.primary : v.getContrastText(L))), F(v.SpeedDialAction, "fabHoverBg", Rl(v.background.paper, 0.15)), F(v.StepConnector, "border", O("palette-grey-600")), F(v.StepContent, "border", O("palette-grey-600")), F(v.Switch, "defaultColor", O("palette-grey-300")), F(v.Switch, "defaultDisabledColor", O("palette-grey-600")), F(v.Switch, "primaryDisabledColor", R(De, s ? f("palette-primary-main") : v.primary.main, 0.55)), F(v.Switch, "secondaryDisabledColor", R(De, s ? f("palette-secondary-main") : v.secondary.main, 0.55)), F(v.Switch, "errorDisabledColor", R(De, s ? f("palette-error-main") : v.error.main, 0.55)), F(v.Switch, "infoDisabledColor", R(De, s ? f("palette-info-main") : v.info.main, 0.55)), F(v.Switch, "successDisabledColor", R(De, s ? f("palette-success-main") : v.success.main, 0.55)), F(v.Switch, "warningDisabledColor", R(De, s ? f("palette-warning-light") : v.warning.main, 0.55)), F(v.TableCell, "border", R(De, fo(s ? f("palette-divider") : v.divider, 1), 0.68)), F(v.Tooltip, "bg", R(fo, s ? f("palette-grey-700") : v.grey[700], 0.92));
    }
    s || (yr(v.background, "default"), yr(v.background, "paper"), yr(v.common, "background"), yr(v.common, "onBackground"), yr(v, "divider")), Object.keys(v).forEach((L) => {
      const N = v[L];
      L !== "tonalOffset" && !s && N && typeof N == "object" && (N.main && F(v[L], "mainChannel", is(ss(N.main))), N.light && F(v[L], "lightChannel", is(ss(N.light))), N.dark && F(v[L], "darkChannel", is(ss(N.dark))), N.contrastText && F(v[L], "contrastTextChannel", is(ss(N.contrastText))), L === "text" && (yr(v[L], "primary"), yr(v[L], "secondary")), L === "action" && (N.active && yr(v[L], "active"), N.selected && yr(v[L], "selected")));
    });
  }), k = t.reduce((j, v) => $t(j, v), k);
  const T = Y0(e.focusVisible, t);
  T != null && T !== !1 && (k.focusVisible = Ip(T, f("palette-primary-main")));
  const P = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: c2(k),
    enableContrastVars: s
  }, {
    vars: I,
    generateThemeVars: A,
    generateStyleSheets: $
  } = xk(k, P);
  return k.vars = I, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([j, v]) => {
    k[j] = v;
  }), k.generateThemeVars = A, k.generateStyleSheets = $, k.generateSpacing = function() {
    return I0(u.spacing, Oc(this));
  }, k.getColorSchemeSelector = Sk(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Fc,
    ...u?.unstable_sxConfig
  }, k.unstable_sx = function(v) {
    return zo({
      sx: v,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = X0, k;
}
function Nh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Pp({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Kc(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n?.mode,
    ...s
  } = e, l = i || "light", a = o?.[l], c = {
    ...o,
    ...n ? {
      [l]: {
        ...typeof a != "boolean" && a,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Qd(e, ...t);
    let u = n;
    "palette" in e || c[l] && (c[l] !== !0 ? u = c[l].palette : l === "dark" && (u = {
      mode: "dark"
    }));
    const m = Qd({
      ...e,
      palette: u
    }, ...t);
    if (m.defaultColorScheme = l, m.colorSchemes = c, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...c.light !== !0 && c.light,
      palette: m.palette
    }, Nh(m, "dark", c.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...c.dark !== !0 && c.dark,
      palette: m.palette
    }, Nh(m, "light", c.light)), m.focusVisible != null && m.focusVisible !== !1) {
      let y = m.focusVisible;
      const f = Y0(e.focusVisible, t), x = f && typeof f == "object" ? f.outlineColor : void 0;
      if (!x || Fk(f) && x === m.palette.primary.main) {
        const {
          outlineColor: b,
          ...C
        } = y;
        y = C;
      }
      Object.keys(m.colorSchemes).forEach((b) => {
        const C = m.colorSchemes?.[b]?.palette;
        C?.primary && (m.colorSchemes[b].focusVisible = Ip(y, C.primary.main));
      });
    }
    return m;
  }
  return !n && !("light" in c) && l === "light" && (c.light = !0), p2({
    ...s,
    colorSchemes: c,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function m2(e) {
  return ue("MuiCheckbox", e);
}
const Du = se("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]);
function Aa(e) {
  return typeof e == "string";
}
function Yc(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function ut(...e) {
  const t = p.useRef(void 0), n = p.useCallback((r) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const s = i, l = s(r);
        return typeof l == "function" ? l : () => {
          s(null);
        };
      }
      return i.current = r, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i?.());
    };
  }, e);
  return p.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function Ze(e) {
  const t = p.useRef(e);
  return lt(() => {
    t.current = e;
  }), p.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function mt(e) {
  return e && e.ownerDocument || document;
}
function Yn(e) {
  return mt(e).defaultView || window;
}
function Il(e) {
  return parseInt(e, 10) || 0;
}
const h2 = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function g2(e) {
  for (const t in e)
    return !1;
  return !0;
}
function zh(e) {
  return g2(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const y2 = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: c
  } = p.useRef(l != null), u = p.useRef(null), m = ut(n, u), y = p.useRef(null), f = p.useRef(null), x = p.useCallback(() => {
    const S = u.current, w = f.current;
    if (!S || !w)
      return;
    const k = Yn(S).getComputedStyle(S);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = S.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const T = k.boxSizing, P = Il(k.paddingBottom) + Il(k.paddingTop), I = Il(k.borderBottomWidth) + Il(k.borderTopWidth), A = w.scrollHeight;
    w.value = "x";
    const $ = w.scrollHeight;
    let j = A;
    i && (j = Math.max(Number(i) * $, j)), o && (j = Math.min(Number(o) * $, j)), j = Math.max(j, $);
    const v = j + (T === "border-box" ? P + I : 0), O = Math.abs(j - A) <= 1;
    return {
      outerHeightStyle: v,
      overflowing: O
    };
  }, [o, i, t.placeholder]), b = Ze(() => {
    const S = u.current, w = x();
    if (!S || !w || zh(w))
      return !1;
    const E = w.outerHeightStyle;
    return y.current != null && y.current !== E;
  }), C = p.useCallback(() => {
    const S = u.current, w = x();
    if (!S || !w || zh(w))
      return;
    const E = w.outerHeightStyle;
    y.current !== E && (y.current = E, S.style.height = `${E}px`), S.style.overflow = w.overflowing ? "hidden" : "";
  }, [x]), g = p.useRef(-1);
  lt(() => {
    const S = Yc(C), w = u?.current;
    if (!w)
      return;
    const E = Yn(w);
    E.addEventListener("resize", S);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(w), cancelAnimationFrame(g.current), C(), g.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      S.clear(), cancelAnimationFrame(g.current), E.removeEventListener("resize", S), k && k.disconnect();
    };
  }, [x, C, b]), lt(() => {
    C();
  });
  const h = (S) => {
    c || C();
    const w = S.target, E = w.value.length, k = w.value.endsWith(`
`), T = w.selectionStart === E;
    k && T && w.setSelectionRange(E, E), r && r(S);
  };
  return /* @__PURE__ */ d.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ d.jsx("textarea", {
      value: l,
      onChange: h,
      ref: m,
      rows: i,
      style: s,
      ...a
    }), /* @__PURE__ */ d.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: f,
      tabIndex: -1,
      style: {
        ...h2.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), ll = /* @__PURE__ */ p.createContext(void 0);
function Z0() {
  return p.useContext(ll);
}
function _o({
  props: e,
  states: t
}) {
  const n = p.useContext(ll), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const Mp = Kc();
function so() {
  const e = Dc(Mp);
  return e[ar] || e;
}
function v2(e) {
  return /* @__PURE__ */ d.jsx(M0, {
    ...e,
    defaultTheme: Mp,
    themeId: ar
  });
}
function J0(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Qt = (e) => J0(e) && e !== "classes", V = L0({
  themeId: ar,
  defaultTheme: Mp,
  rootShouldForwardProp: Qt
});
function x2(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ d.jsx(v2, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const ge = sk;
function me(e) {
  return nk(e);
}
function or(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Fh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function La(e, t = !1) {
  return e && (Fh(e.value) && e.value !== "" || t && Fh(e.defaultValue) && e.defaultValue !== "");
}
function S2(e) {
  return e.startAdornment;
}
function b2(e) {
  return ue("MuiInputBase", e);
}
const un = se("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), w2 = {
  transition: "none"
};
function C2(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const $p = (e) => e.scrollTop, ex = {}, k2 = ["all"], E2 = {};
function Tn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function tx(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function Na(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = ex
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Op(e, t) {
  const n = t ?? w2;
  return C2(e.motion?.reducedMotion, n);
}
function at(e, t = k2, n = E2) {
  const r = e.transitions?.create?.(t, n), o = Op(e);
  if (r === void 0)
    return o ?? ex;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Bh;
const Zd = "mui-auto-fill", za = "mui-auto-fill-cancel", Gc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${q(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Xc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, T2 = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: i,
    focused: s,
    formControl: l,
    fullWidth: a,
    hiddenLabel: c,
    multiline: u,
    readOnly: m,
    size: y,
    startAdornment: f,
    type: x
  } = e, b = {
    root: ["root", `color${q(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", y && y !== "medium" && `size${q(y)}`, u && "multiline", f && "adornedStart", i && "adornedEnd", c && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", x === "search" && "inputTypeSearch", m && "readOnly"]
  };
  return de(b, b2, t);
}, Qc = V("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Gc
})(ge(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${un.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: n
    }) => t.multiline && n === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), qc = V("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Xc
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    ...at(e, "opacity", {
      duration: e.transitions.duration.shorter
    })
  }, r = {
    opacity: "0 !important"
  }, o = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": n,
    "&::-moz-placeholder": n,
    // Firefox 19+
    "&::-ms-input-placeholder": n,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${un.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": o,
      "&:focus::-moz-placeholder": o,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": o
      // Edge
    },
    [`&.${un.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: i
      }) => !i.disableInjectingGlobalStyles,
      style: {
        animationName: za,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: Zd
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: i
      }) => i.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), Dh = x2({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${Zd}`]: {
    from: {
      animationName: Zd
    }
  },
  [`@keyframes ${za}`]: {
    from: {
      animationName: za
    }
  }
}), jp = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    "aria-label": i,
    autoComplete: s,
    autoFocus: l,
    className: a,
    color: c,
    defaultValue: u,
    disabled: m,
    disableInjectingGlobalStyles: y,
    endAdornment: f,
    error: x,
    fullWidth: b = !1,
    id: C,
    inputComponent: g = "input",
    inputProps: h = {},
    inputRef: S,
    margin: w,
    maxRows: E,
    minRows: k,
    multiline: T = !1,
    name: P,
    onBlur: I,
    onChange: A,
    onClick: $,
    onFocus: j,
    onKeyDown: v,
    onKeyUp: O,
    placeholder: R,
    readOnly: L,
    renderSuffix: N,
    rows: M,
    size: z,
    slotProps: B = {},
    slots: U = {},
    startAdornment: D,
    type: Q = "text",
    value: X,
    ...G
  } = r, H = h.value != null ? h.value : X, {
    current: he
  } = p.useRef(H != null), W = p.useRef(), re = p.useCallback((ee) => {
  }, []), ae = ut(W, S, h.ref, re), [we, Se] = p.useState(!1), [ye, ce] = _o({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ye.focused = ce ? ce.focused : we, p.useEffect(() => {
    !ce && m && we && (Se(!1), I && I());
  }, [ce, m, we, I]);
  const ke = ce && ce.onFilled, Be = ce && ce.onEmpty, je = p.useCallback((ee) => {
    La(ee) ? ke && ke() : Be && Be();
  }, [ke, Be]);
  lt(() => {
    he && je({
      value: H
    });
  }, [H, je, he]), lt(() => {
    if (!l)
      return;
    const ee = W.current;
    if (!ee)
      return;
    const xe = mt(ee), rt = or(xe), jt = rt == null || rt === xe.body || rt === xe.documentElement;
    ee === rt ? ce && ce.onFocus ? ce.onFocus() : Se(!0) : jt && ee.focus();
  }, [l]);
  const Te = (ee) => {
    j && j(ee), h.onFocus && h.onFocus(ee), ce && ce.onFocus ? ce.onFocus(ee) : Se(!0);
  }, le = (ee) => {
    I && I(ee), h.onBlur && h.onBlur(ee), ce && ce.onBlur ? ce.onBlur(ee) : Se(!1);
  }, Ie = (ee, ...xe) => {
    if (!he) {
      const rt = ee.target || W.current;
      if (rt == null)
        throw new Error(Mr(1));
      je({
        value: rt.value
      });
    }
    h.onChange && h.onChange(ee, ...xe), A && A(ee, ...xe);
  };
  p.useEffect(() => {
    je(W.current);
  }, []);
  const Ge = (ee) => {
    W.current && ee.currentTarget === ee.target && W.current.focus(), $ && $(ee);
  };
  let Xe = g, Ve = h;
  T && Xe === "input" && (M ? Ve = {
    type: void 0,
    minRows: M,
    maxRows: M,
    ...Ve
  } : Ve = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...Ve
  }, Xe = y2);
  const ht = (ee) => {
    je(ee.animationName === za ? W.current : {
      value: "x"
    });
  };
  p.useEffect(() => {
    ce && ce.setAdornedStart(!!D);
  }, [ce, D]);
  const ft = {
    ...r,
    color: ye.color || "primary",
    disabled: ye.disabled,
    endAdornment: f,
    error: ye.error,
    focused: ye.focused,
    formControl: ce,
    fullWidth: b,
    hiddenLabel: ye.hiddenLabel,
    multiline: T,
    size: ye.size,
    startAdornment: D,
    type: Q
  }, be = T2(ft), ie = U.root || Qc, fe = B.root || {}, Ne = U.input || qc;
  return Ve = {
    ...Ve,
    ...B.input
  }, /* @__PURE__ */ d.jsxs(p.Fragment, {
    children: [!y && typeof Dh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Bh || (Bh = /* @__PURE__ */ d.jsx(Dh, {}))), /* @__PURE__ */ d.jsxs(ie, {
      ...fe,
      ref: n,
      onClick: Ge,
      ...G,
      ...!Aa(ie) && {
        ownerState: {
          ...ft,
          ...fe.ownerState
        }
      },
      className: Z(be.root, fe.className, a, L && "MuiInputBase-readOnly"),
      children: [D, /* @__PURE__ */ d.jsx(ll.Provider, {
        value: null,
        children: /* @__PURE__ */ d.jsx(Ne, {
          "aria-invalid": ye.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: u,
          disabled: ye.disabled,
          id: C,
          onAnimationStart: ht,
          name: P,
          placeholder: R,
          readOnly: L,
          required: ye.required,
          rows: M,
          value: H,
          onKeyDown: v,
          onKeyUp: O,
          type: Q,
          ...Ve,
          ...!Aa(Ne) && {
            as: Xe,
            ownerState: {
              ...ft,
              ...Ve.ownerState
            }
          },
          ref: ae,
          className: Z(be.input, Ve.className, L && "MuiInputBase-readOnly"),
          onBlur: le,
          onChange: Ie,
          onFocus: Te
        })
      }), f, N ? N({
        ...ye,
        startAdornment: D
      }) : null]
    })]
  });
});
function P2(e) {
  return ue("MuiFilledInput", e);
}
const po = {
  ...un,
  ...se("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function R2(e) {
  return ue("MuiFormControlLabel", e);
}
const ls = se("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementEnd", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function I2(e) {
  return ue("MuiFormHelperText", e);
}
const _h = se("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function M2(e) {
  return ue("MuiFormLabel", e);
}
const ys = se("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function $2(e) {
  return ue("MuiInput", e);
}
const Xi = {
  ...un,
  ...se("MuiInput", ["root", "underline", "input"])
};
function O2(e) {
  return ue("MuiMenuItem", e);
}
const Qi = se("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function j2(e) {
  return ue("MuiNativeSelect", e);
}
const Ap = se("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function A2(e) {
  return ue("MuiOutlinedInput", e);
}
const Jn = {
  ...un,
  ...se("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function L2({
  theme: e,
  ...t
}) {
  const n = ar in e ? e[ar] : void 0;
  return /* @__PURE__ */ d.jsx(D0, {
    ...t,
    themeId: n ? ar : void 0,
    theme: n || e
  });
}
const Ml = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: N2
} = mk({
  themeId: ar,
  // @ts-ignore ignore module augmentation tests
  theme: () => Kc({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ml.colorSchemeStorageKey,
  modeStorageKey: Ml.modeStorageKey,
  defaultColorScheme: {
    light: Ml.defaultLightColorScheme,
    dark: Ml.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: G0(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return zo({
        sx: r,
        theme: this
      });
    }, t;
  }
}), z2 = N2;
function F2({
  theme: e,
  ...t
}) {
  const n = p.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = ar in e ? e[ar] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ d.jsx(L2, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ d.jsx(z2, {
    theme: e,
    ...t
  });
}
function Wh(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function B2(e) {
  return ue("MuiSvgIcon", e);
}
se("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const D2 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${q(t)}`, `fontSize${q(n)}`]
  };
  return de(o, B2, r);
}, _2 = V("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${q(n.color)}`], t[`fontSize${q(n.fontSize)}`]];
  }
})(ge(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  ...at(e, "fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (t) => !t.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), Jd = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: a = "medium",
    htmlColor: c,
    inheritViewBox: u = !1,
    titleAccess: m,
    viewBox: y = "0 0 24 24",
    ...f
  } = r, x = /* @__PURE__ */ p.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: u,
    viewBox: y,
    hasSvgAsChild: x
  }, C = {};
  u || (C.viewBox = y);
  const g = D2(b);
  return /* @__PURE__ */ d.jsxs(_2, {
    as: l,
    className: Z(g.root, i),
    focusable: "false",
    color: c,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...C,
    ...f,
    ...x && o.props,
    ownerState: b,
    children: [x ? o.props.children : o, m ? /* @__PURE__ */ d.jsx("title", {
      children: m
    }) : null]
  });
});
Jd.muiName = "SvgIcon";
function dt(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ d.jsx(Jd, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = Jd.muiName, /* @__PURE__ */ p.memo(/* @__PURE__ */ p.forwardRef(n));
}
function ef(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Fa(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = p.useRef(t !== void 0), [s, l] = p.useState(n), a = i ? t : s, c = p.useCallback((u) => {
    i || l(u);
  }, []);
  return [a, c];
}
function nx(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Lp(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((c) => {
      nx(c, l[c]) && typeof s[c] == "function" && (a[c] = (...u) => {
        s[c](...u), l[c](...u);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, c = Z(s?.className, l?.className, a?.className), u = n(a, l);
      return {
        ...l,
        ...a,
        ...u,
        ...!!c && {
          className: c
        },
        ...l?.style && a?.style && {
          style: {
            ...l.style,
            ...a.style
          }
        },
        ...l?.sx && a?.sx && {
          sx: [...Array.isArray(l.sx) ? l.sx : [l.sx], ...Array.isArray(a.sx) ? a.sx : [a.sx]]
        }
      };
    };
  const r = t, o = n(e, r), i = Z(r?.className, e?.className);
  return {
    ...t,
    ...e,
    ...o,
    ...!!i && {
      className: i
    },
    ...r?.style && e?.style && {
      style: {
        ...r.style,
        ...e.style
      }
    },
    ...r?.sx && e?.sx && {
      sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
const Uh = {};
function Np(e, t) {
  const n = p.useRef(Uh);
  return n.current === Uh && (n.current = e(t)), n;
}
function W2(e) {
  const t = Np(() => U2(e)).current;
  return t.next = e, lt(t.effect), t;
}
function U2(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Vh = Qg.createContext(null);
function V2(e) {
  if (e == null)
    return {
      appear: void 0,
      enter: void 0,
      exit: void 0
    };
  if (typeof e == "number")
    return {
      appear: e,
      enter: e,
      exit: e
    };
  const t = e.enter, n = e.exit;
  return {
    appear: e.appear !== void 0 ? e.appear : t,
    enter: t,
    exit: n
  };
}
function H2(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = V2(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function rx(e) {
  const {
    in: t = !1,
    appear: n = !1,
    enter: r = !0,
    exit: o = !0,
    mountOnEnter: i = !1,
    unmountOnExit: s = !1,
    timeout: l,
    addEndListener: a,
    reduceMotion: c = !1,
    getAutoTimeout: u,
    nodeRef: m,
    onEnter: y,
    onEntering: f,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: g,
    children: h,
    ...S
  } = e, w = p.useContext(Vh), E = w && !w.isMounting ? r : n, [k, T] = p.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), P = p.useRef(k);
  P.current = k, t && k === "unmounted" && (P.current = "exited", T("exited"));
  const I = p.useRef(t && E), A = p.useRef(!1), $ = p.useRef(null), j = p.useRef(k), v = p.useRef(!1), O = p.useRef(c), R = W2({
    timeout: l,
    addEndListener: a,
    reduceMotion: c,
    getAutoTimeout: u,
    onEnter: y,
    onEntering: f,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: g,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: m,
    parentGroup: w
  }), L = p.useCallback(() => {
    $.current !== null && ($.current.cancel(), $.current = null);
  }, []), N = p.useCallback((D) => {
    let Q = !0;
    const X = () => {
      Q && (Q = !1, $.current = null, D());
    };
    return X.cancel = () => {
      Q = !1;
    }, $.current = X, X;
  }, []), M = p.useCallback((D, Q) => {
    let X;
    const G = () => {
      X !== void 0 && (clearTimeout(X), X = void 0);
    }, H = N(() => {
      G(), P.current = D, T(D);
    }), he = H.cancel;
    H.cancel = () => {
      G(), he();
    };
    const W = R.current.nodeRef.current, re = R.current.addEndListener, ae = R.current.getAutoTimeout !== void 0, we = R.current.getAutoTimeout?.(), Se = H2({
      currentStatus: Q,
      isAppearing: v.current,
      timeout: R.current.timeout,
      autoTimeout: we
    }), ye = O.current, ce = Se ?? (ye && ae ? 0 : null), ke = (Be) => {
      X = setTimeout(H, Be);
    };
    if (!W) {
      ke(0);
      return;
    }
    if (re) {
      ce != null && ke(ye ? 0 : ce), re.length >= 2 ? re(W, H) : re(H);
      return;
    }
    ke(ye ? 0 : Se ?? 0);
  }, [N, R]), z = p.useCallback((D) => {
    const Q = R.current, X = Q.parentGroup ? Q.parentGroup.isMounting : D;
    if (v.current = X, !D && !Q.enter) {
      P.current = "entered", T("entered");
      return;
    }
    O.current = Q.reduceMotion, Q.onEnter?.(X), P.current = "entering", T("entering");
  }, [R]), B = p.useCallback(() => {
    const D = R.current;
    if (!D.exit) {
      P.current = "exited", T("exited");
      return;
    }
    O.current = D.reduceMotion, D.onExit?.(), P.current = "exiting", T("exiting");
  }, [R]), U = p.useCallback((D, Q) => {
    if (L(), Q === "entering") {
      const X = R.current;
      if (X.mountOnEnter || X.unmountOnExit) {
        const G = X.nodeRef.current;
        G && $p(G);
      }
      z(D);
    } else
      B();
  }, [L, z, B, R]);
  return lt(() => (A.current = !0, I.current && (I.current = !1, U(!0, "entering")), () => {
    A.current = !1, L();
  }), [L, U]), lt(() => {
    if (!A.current)
      return;
    const D = P.current;
    t ? D !== "entering" && D !== "entered" && U(!1, "entering") : D === "entering" || D === "entered" ? U(!1, "exiting") : D === "exited" && s && (P.current = "unmounted", T("unmounted"));
  }, [t, k, s, U]), lt(() => {
    if (k === "unmounted" || j.current === "unmounted") {
      j.current = k;
      return;
    }
    const Q = j.current !== k;
    Q && (j.current = k);
    const X = R.current;
    k === "entering" ? (Q && X.onEntering?.(v.current), $.current === null && P.current === k && M("entered", "entering")) : k === "exiting" ? (Q && X.onExiting?.(), $.current === null && P.current === k && M("exited", "exiting")) : k === "entered" && Q ? X.onEntered?.(v.current) : k === "exited" && Q && X.onExited?.();
  }, [R, M, k]), k === "unmounted" ? null : /* @__PURE__ */ d.jsx(Vh.Provider, {
    value: null,
    children: h(k, S)
  });
}
const ox = "(prefers-reduced-motion: reduce)", K2 = 0, Y2 = "0ms", G2 = () => {
}, Hh = () => !1, X2 = () => !0, Q2 = () => G2;
function q2(e) {
  const [t, n] = p.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), lt(() => {
    const o = (l) => {
      n((a) => a.enabled === e && a.matches === l ? a : {
        enabled: e,
        matches: l
      });
    };
    if (!e) {
      t.enabled && o(!1);
      return;
    }
    if (typeof window > "u" || typeof window.matchMedia != "function") {
      o(!1);
      return;
    }
    const i = window.matchMedia(ox), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const Z2 = {
  ...ia
}, ix = Z2.useSyncExternalStore;
function J2(e) {
  const t = e ? X2 : Hh, [n, r] = p.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [Hh, Q2];
    const o = window.matchMedia(ox);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return ix(r, n, t);
}
const eE = ix !== void 0 ? J2 : q2;
function Zc(e, t) {
  const n = eE(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return p.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: K2,
        delay: Y2
      } : o;
    }
  }), [r]);
}
function sx(e, t, n) {
  return e === void 0 || Aa(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function lx(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ba(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    nx(n, e[n]) && (t[n] = e[n]);
  return t;
}
function Kh(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ax(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const f = Z(n?.className, i, o?.className, r?.className), x = {
      ...n?.style,
      ...o?.style,
      ...r?.style
    }, b = {
      ...n,
      ...o,
      ...r
    };
    return f.length > 0 && (b.className = f), Object.keys(x).length > 0 && (b.style = x), {
      props: b,
      internalRef: void 0
    };
  }
  const s = Ba({
    ...o,
    ...r
  }), l = Kh(r), a = Kh(o), c = t(s), u = Z(c?.className, n?.className, i, o?.className, r?.className), m = {
    ...c?.style,
    ...n?.style,
    ...o?.style,
    ...r?.style
  }, y = {
    ...c,
    ...n,
    ...a,
    ...l
  };
  return u.length > 0 && (y.className = u), Object.keys(m).length > 0 && (y.style = m), {
    props: y,
    internalRef: c.ref
  };
}
function ve(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: l = !1,
    ...a
  } = t, {
    component: c,
    slots: u = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...y
  } = i, f = u[e] || r, x = lx(m[e], o), {
    props: {
      component: b,
      ...C
    },
    internalRef: g
  } = ax({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? y : void 0,
    externalSlotProps: x
  }), h = ut(g, x?.ref, t.ref), S = e === "root" ? b || c : b, w = sx(f, {
    ...e === "root" && !c && !u[e] && s,
    ...e !== "root" && !u[e] && s,
    ...C,
    ...S && !l && {
      as: S
    },
    ...S && l && {
      component: S
    },
    ref: h
  }, o);
  return [f, w];
}
function tE(e) {
  return ue("MuiPaper", e);
}
se("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const nE = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return de(i, tE, o);
}, rE = V("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(ge(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  ...at(e, "box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), Pn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiPaper"
  }), o = so(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: c = "elevation",
    ...u
  } = r, m = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: c
  }, y = nE(m);
  return /* @__PURE__ */ d.jsx(rE, {
    as: s,
    ownerState: m,
    className: Z(y.root, i),
    ref: n,
    ...u,
    style: {
      ...c === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": o.vars.overlays?.[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${ja("#fff", qd(l))}, ${ja("#fff", qd(l))})`
        }
      },
      ...u.style
    }
  });
});
function Da(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function oE(e) {
  const {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: i
  } = e, s = r && t !== !1, l = r && t === !1;
  return p.useMemo(() => {
    const c = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(u) {
        n && t && u.key !== "Tab" && u.preventDefault();
      }
    };
    return r || (c.tabIndex = o, !i && n && (c.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (c["aria-disabled"] = n), i && (!t || l) && (c.disabled = n), c;
  }, [r, n, t, s, l, i, o]);
}
const iE = {};
function sE(e) {
  const {
    nativeButton: t,
    disabled: n,
    type: r,
    hasFormAction: o = !1,
    tabIndex: i = 0,
    focusableWhenDisabled: s,
    stopEventPropagation: l = !1,
    onBeforeKeyDown: a,
    onBeforeKeyUp: c
  } = e, u = p.useRef(null), m = s === !0, y = oE({
    focusableWhenDisabled: m,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), f = p.useCallback(() => {
    const C = u.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), x = p.useMemo(() => {
    const C = m ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, m || (C.disabled = n)) : (C.role = "button", !m && n && (C["aria-disabled"] = n)), m ? {
      ...C,
      ...y
    } : C;
  }, [n, m, y, o, t, i, r]);
  return {
    getButtonProps: p.useCallback((C = iE) => {
      const {
        onClick: g,
        onKeyDown: h,
        onKeyUp: S,
        ...w
      } = C;
      return {
        ...x,
        ...w,
        onClick: (P) => {
          if (l && P.stopPropagation(), n) {
            P.preventDefault();
            return;
          }
          g?.(P);
        },
        onKeyDown: (P) => {
          if (m && y.onKeyDown(P), !n && (a?.(P), h?.(P), !(P.target !== P.currentTarget || f()))) {
            if (P.key === " ") {
              P.preventDefault();
              return;
            }
            P.key === "Enter" && (P.preventDefault(), P.currentTarget.click());
          }
        },
        onKeyUp: (P) => {
          n || (c?.(P), S?.(P), P.target === P.currentTarget && !f() && P.key === " " && !P.defaultPrevented && P.currentTarget.click());
        }
      };
    }, [x, n, m, y, f, a, c, l]),
    rootRef: u
  };
}
class _a {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new _a();
  }
  static use() {
    const t = Np(_a.create).current, [n, r] = p.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, p.useEffect(t.mountEffect, [n]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = aE(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function lE() {
  return _a.use();
}
function aE() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const cE = [];
function cx(e) {
  p.useEffect(e, cE);
}
class Jc {
  static create() {
    return new Jc();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function ir() {
  const e = Np(Jc.create).current;
  return cx(e.disposeEffect), e;
}
function uE(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: a,
    timeout: c
  } = e, [u, m] = p.useState(!1), y = ir(), f = p.useRef(!1), x = p.useRef(a);
  x.current = a;
  const b = a != null, C = Z(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, h = Z(n.child, u && n.childLeaving, r && n.childPulsate);
  return !l && !u && m(!0), p.useEffect(() => {
    !l && b ? f.current || (f.current = !0, y.start(c, () => {
      f.current = !1, x.current?.();
    })) : (f.current = !1, y.clear());
  }, [y, b, l, c]), /* @__PURE__ */ d.jsx("span", {
    className: C,
    style: g,
    children: /* @__PURE__ */ d.jsx("span", {
      className: h
    })
  });
}
const Ht = se("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), tf = 550, dE = 80, $l = {}, Yh = [], fE = () => {
};
function _u(e, t) {
  const n = new Set(t), r = /* @__PURE__ */ new Map();
  let o = [];
  for (const s of e)
    n.has(s) ? o.length > 0 && (r.set(s, o), o = []) : o.push(s);
  const i = [];
  for (const s of t) {
    const l = r.get(s);
    l && i.push(...l), i.push(s);
  }
  return i.push(...o), i;
}
function pE({
  event: e,
  element: t,
  center: n
}) {
  const r = t ? t.getBoundingClientRect() : {
    width: 0,
    height: 0,
    left: 0,
    top: 0
  };
  let o, i;
  if (n || e === void 0 || e.clientX === 0 && e.clientY === 0 || !e.clientX && !e.touches)
    o = Math.round(r.width / 2), i = Math.round(r.height / 2);
  else {
    const {
      clientX: l,
      clientY: a
    } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
    o = Math.round(l - r.left), i = Math.round(a - r.top);
  }
  let s;
  if (n)
    s = Math.sqrt((2 * r.width ** 2 + r.height ** 2) / 3), s % 2 === 0 && (s += 1);
  else {
    const l = Math.max(Math.abs((t ? t.clientWidth : 0) - o), o) * 2 + 2, a = Math.max(Math.abs((t ? t.clientHeight : 0) - i), i) * 2 + 2;
    s = Math.sqrt(l ** 2 + a ** 2);
  }
  return {
    rippleX: o,
    rippleY: i,
    rippleSize: s
  };
}
const mE = ol`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, hE = ol`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, gE = ol`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
function yE(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = Vs`
    &.${Ht.rippleVisible} {
      animation-name: ${mE};
      animation-duration: ${tf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Ht.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Ht.childLeaving} {
      animation-name: ${hE};
      animation-duration: ${tf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Ht.childPulsate} {
      animation-name: ${gE};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? Vs`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const vE = V("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), xE = V(uE, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ht.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${Ht.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ht.childLeaving} {
    opacity: 0;
  }

  & .${Ht.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => yE(e)}
`, SE = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTouchRipple"
  }), o = so(), i = Zc(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = $l,
    className: a,
    ...c
  } = r, [u, m] = p.useState({
    items: Yh,
    order: Yh
  }), y = u.items, f = p.useRef(0), x = p.useRef(null), b = p.useRef(!1);
  cx(() => (b.current = !0, () => {
    b.current = !1;
  })), p.useEffect(() => {
    x.current && (x.current(), x.current = null);
  }, [y]);
  const C = p.useRef(!1), g = ir(), h = p.useRef(null), S = p.useRef(null), w = Ze(($) => {
    b.current && m((j) => {
      const v = j.items.filter((R) => R.key !== $), O = _u(j.order.filter((R) => R !== $), v.filter((R) => !R.exiting).map((R) => R.key));
      return {
        items: v,
        order: O
      };
    });
  }), E = Ze(($) => {
    const {
      pulsate: j,
      rippleX: v,
      rippleY: O,
      rippleSize: R,
      cb: L
    } = $, N = f.current;
    f.current += 1, m((M) => {
      const z = [...M.items, {
        key: N,
        pulsate: j,
        rippleX: v,
        rippleY: O,
        rippleSize: R,
        exiting: !1
      }];
      return {
        items: z,
        order: _u(M.order, z.filter((B) => !B.exiting).map((B) => B.key))
      };
    }), x.current = L;
  }), k = Ze(($ = $l, j = $l, v = fE) => {
    const {
      pulsate: O = !1,
      center: R = s || j.pulsate,
      fakeElement: L = !1
      // Used only by tests.
    } = j;
    if ($?.type === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    $?.type === "touchstart" && (C.current = !0);
    const N = L ? null : S.current, {
      rippleX: M,
      rippleY: z,
      rippleSize: B
    } = pE({
      event: $,
      element: N,
      center: R
    });
    $?.touches ? h.current === null && (h.current = () => {
      E({
        pulsate: O,
        rippleX: M,
        rippleY: z,
        rippleSize: B,
        cb: v
      });
    }, g.start(dE, () => {
      h.current && (h.current(), h.current = null);
    })) : E({
      pulsate: O,
      rippleX: M,
      rippleY: z,
      rippleSize: B,
      cb: v
    });
  }), T = Ze(() => {
    k($l, {
      pulsate: !0
    });
  }), P = Ze(($, j) => {
    if (g.clear(), $?.type === "touchend" && h.current) {
      h.current(), h.current = null, g.start(0, () => {
        P($, j);
      });
      return;
    }
    h.current = null, m((v) => {
      const O = v.items.findIndex((L) => !L.exiting);
      if (O === -1)
        return v;
      const R = v.items.slice();
      return R[O] = {
        ...R[O],
        exiting: !0
      }, {
        items: R,
        order: _u(v.order, R.filter((L) => !L.exiting).map((L) => L.key))
      };
    }), x.current = j;
  });
  p.useImperativeHandle(n, () => ({
    pulsate: T,
    start: k,
    stop: P
  }), [T, k, P]);
  const I = new Map(y.map(($) => [$.key, $])), A = u.order.map(($) => I.get($)).filter(Boolean);
  return /* @__PURE__ */ d.jsx(vE, {
    className: Z(Ht.root, l.root, a),
    ref: S,
    ...c,
    children: A.map(($) => /* @__PURE__ */ d.jsx(xE, {
      classes: {
        ripple: Z(l.ripple, Ht.ripple),
        rippleVisible: Z(l.rippleVisible, Ht.rippleVisible),
        ripplePulsate: Z(l.ripplePulsate, Ht.ripplePulsate),
        child: Z(l.child, Ht.child),
        childLeaving: Z(l.childLeaving, Ht.childLeaving),
        childPulsate: Z(l.childPulsate, Ht.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : tf,
      pulsate: $.pulsate,
      rippleX: $.rippleX,
      rippleY: $.rippleY,
      rippleSize: $.rippleSize,
      in: !$.exiting,
      onExited: () => w($.key)
    }, $.key))
  });
});
function bE(e) {
  return ue("MuiButtonBase", e);
}
const Ks = se("MuiButtonBase", ["root", "disabled", "focusVisible"]), wE = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = de({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, bE, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, CE = V("button", {
  name: "MuiButtonBase",
  slot: "Root"
})(ge(({
  theme: e
}) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Ks.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [{
    props: {
      internalDisabledThemeFocusVisible: !1
    },
    style: e.focusVisible && {
      ...Rp,
      [`&.${Ks.focusVisible}`]: e.focusVisible
    }
  }]
}))), no = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: a = "button",
    disabled: c = !1,
    disableRipple: u = !1,
    disableTouchRipple: m = !1,
    focusRipple: y = !1,
    focusVisibleClassName: f,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: x,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: b = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: C,
    // private prop to let a parent (like SwitchBase) control its own focus visible style
    internalDisabledThemeFocusVisible: g = !1,
    /* eslint-enable react/prop-types */
    LinkComponent: h = "a",
    nativeButton: S,
    onBlur: w,
    onClick: E,
    onContextMenu: k,
    onDragLeave: T,
    onFocus: P,
    onFocusVisible: I,
    onKeyDown: A,
    onKeyUp: $,
    onMouseDown: j,
    onMouseLeave: v,
    onMouseUp: O,
    onTouchEnd: R,
    onTouchMove: L,
    onTouchStart: N,
    tabIndex: M = 0,
    TouchRippleProps: z,
    touchRippleRef: B,
    type: U,
    ...D
  } = r, Q = !!(D.href || D.to), X = !!D.formAction;
  let G = a;
  G === "button" && Q && (G = h);
  const he = S ?? (typeof G == "string" ? G === "button" : C ?? !1), W = lE(), re = ut(W.ref, B), [ae, we] = p.useState(!1);
  (c || b) && ae && we(!1);
  const Se = Ze((Pe) => {
    y && !Pe.repeat && ae && Pe.key === " " && W.stop(Pe, () => {
      W.start(Pe);
    });
  }), ye = Ze((Pe) => {
    y && Pe.key === " " && ae && !Pe.defaultPrevented && W.stop(Pe, () => {
      W.pulsate(Pe);
    });
  }), {
    getButtonProps: ce,
    rootRef: ke
  } = sE({
    nativeButton: he,
    disabled: c,
    type: U,
    hasFormAction: X,
    tabIndex: M,
    onBeforeKeyDown: Se,
    onBeforeKeyUp: ye
  }), {
    onClick: Be,
    onKeyDown: je,
    onKeyUp: Te,
    ...le
  } = ce({
    onClick: E,
    onKeyDown: A,
    onKeyUp: $
  });
  p.useImperativeHandle(o, () => ({
    focusVisible: () => {
      we(!0), ke.current.focus();
    }
  }), [ke]);
  const Ie = W.shouldMount && !u && !c;
  p.useEffect(() => {
    ae && y && !u && W.pulsate();
  }, [u, y, ae, W]);
  const Ge = vr(W, "start", j, m), Xe = vr(W, "stop", k, m), Ve = vr(W, "stop", T, m), ht = vr(W, "stop", O, m), ft = vr(W, "stop", (Pe) => {
    ae && Pe.preventDefault(), v && v(Pe);
  }, m), be = vr(W, "start", N, m), ie = vr(W, "stop", R, m), fe = vr(W, "stop", L, m), Ne = vr(W, "stop", (Pe) => {
    Da(Pe.target) || we(!1), w && w(Pe);
  }, !1), ee = Ze((Pe) => {
    ke.current || (ke.current = Pe.currentTarget), !b && Da(Pe.target) && (we(!0), I && I(Pe)), P && P(Pe);
  }), xe = {};
  Q && (xe.tabIndex = c ? -1 : M, c && (xe["aria-disabled"] = c), xe.type = U);
  const rt = ut(n, ke), jt = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: c,
    disableRipple: u,
    disableTouchRipple: m,
    focusRipple: y,
    suppressFocusVisible: b,
    tabIndex: M,
    focusVisible: ae,
    internalDisabledThemeFocusVisible: g
  }, qt = wE(jt);
  return /* @__PURE__ */ d.jsxs(CE, {
    as: G,
    className: Z(qt.root, l),
    ownerState: jt,
    onBlur: Ne,
    onClick: Be,
    onContextMenu: Xe,
    onFocus: ee,
    onKeyDown: je,
    onKeyUp: Te,
    onMouseDown: Ge,
    onMouseLeave: ft,
    onMouseUp: ht,
    onDragLeave: Ve,
    onTouchEnd: ie,
    onTouchMove: fe,
    onTouchStart: be,
    ref: rt,
    ...Q ? xe : le,
    ...D,
    children: [s, Ie ? /* @__PURE__ */ d.jsx(SE, {
      ref: re,
      center: i,
      ...z
    }) : null]
  });
});
function vr(e, t, n, r = !1) {
  return Ze((o) => (n && n(o), r || e[t](o), !0));
}
function kE(e) {
  return typeof e.main == "string";
}
function EE(e, t = []) {
  if (!kE(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Kt(e = []) {
  return ([, t]) => t && EE(t, e);
}
function TE(e) {
  return ue("MuiCircularProgress", e);
}
se("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Fn = 44, nf = ol`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, rf = ol`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, PE = typeof nf != "string" ? Vs`
        animation: ${nf} 1.4s linear infinite;
      ` : null, RE = typeof rf != "string" ? Vs`
        animation: ${rf} 1.4s ease-in-out infinite;
      ` : null, IE = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${q(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return de(i, TE, t);
}, ME = V("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${q(n.color)}`]];
  }
})(ge(({
  theme: e
}) => {
  const t = Op(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...at(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: PE || {
        animation: `${nf} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Kt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), $E = V("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), OE = V("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(ge(({
  theme: e
}) => {
  const t = Op(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...at(e, "stroke-dashoffset")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: {
        // Some default value that looks fine while waiting for the animation to kick in.
        strokeDasharray: "80px, 200px",
        strokeDashoffset: 0
        // Add the unit to fix a Edge 16 and below bug.
      }
    }, {
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: RE || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${rf} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), jE = V("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(ge(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), bo = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    enableTrackSlot: l = !1,
    min: a,
    max: c,
    size: u = 40,
    style: m,
    thickness: y = 3.6,
    value: f = r.min ?? 0,
    variant: x = "indeterminate",
    ...b
  } = r, C = a ?? 0, g = c ?? 100, h = {
    ...r,
    color: i,
    disableShrink: s,
    size: u,
    thickness: y,
    value: f,
    variant: x,
    enableTrackSlot: l
  }, S = IE(h), w = {}, E = {}, k = {};
  if (x === "determinate") {
    const T = 2 * Math.PI * ((Fn - y) / 2), P = g - C;
    w.strokeDasharray = T.toFixed(3), w.strokeDashoffset = P > 0 ? `${((g - f) / P * T).toFixed(3)}px` : `${T.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = f, k["aria-valuemin"] = C, k["aria-valuemax"] = g;
  }
  return /* @__PURE__ */ d.jsx(ME, {
    className: Z(S.root, o),
    style: {
      width: u,
      height: u,
      ...E,
      ...m
    },
    ownerState: h,
    ref: n,
    role: "progressbar",
    ...k,
    ...b,
    children: /* @__PURE__ */ d.jsxs($E, {
      className: S.svg,
      ownerState: h,
      viewBox: `${Fn / 2} ${Fn / 2} ${Fn} ${Fn}`,
      children: [l ? /* @__PURE__ */ d.jsx(jE, {
        className: S.track,
        ownerState: h,
        cx: Fn,
        cy: Fn,
        r: (Fn - y) / 2,
        fill: "none",
        strokeWidth: y,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ d.jsx(OE, {
        className: S.circle,
        style: w,
        ownerState: h,
        cx: Fn,
        cy: Fn,
        r: (Fn - y) / 2,
        fill: "none",
        strokeWidth: y
      })]
    })
  });
});
function AE(e) {
  return ue("MuiIconButton", e);
}
const Gh = se("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), LE = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${q(r)}`, o && `edge${q(o)}`, `size${q(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return de(l, AE, t);
}, NE = V(no, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${q(n.color)}`], n.edge && t[`edge${q(n.edge)}`], t[`size${q(n.size)}`]];
  }
})(ge(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  ...at(e, "background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), ge(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Kt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main,
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Gh.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Gh.loading}`]: {
    color: "transparent"
  }
}))), zE = V("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), mo = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: l = "default",
    disabled: a = !1,
    disableFocusRipple: c = !1,
    size: u = "medium",
    id: m,
    loading: y = null,
    loadingIndicator: f,
    ...x
  } = r, b = $r(m), C = f ?? /* @__PURE__ */ d.jsx(bo, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), g = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: c,
    loading: y,
    loadingIndicator: C,
    size: u
  }, h = LE(g);
  return /* @__PURE__ */ d.jsxs(NE, {
    id: y ? b : m,
    className: Z(h.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !c,
    disabled: a || y,
    ref: n,
    ...x,
    ownerState: g,
    children: [typeof y == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ d.jsx("span", {
      className: h.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ d.jsx(zE, {
        className: h.loadingIndicator,
        ownerState: g,
        children: y && C
      })
    }), i]
  });
});
function FE(e) {
  return ue("MuiTypography", e);
}
se("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const BE = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${q(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return de(s, FE, i);
}, DE = V("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${q(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(ge(({
  theme: e
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(e.typography).filter(([t, n]) => t !== "inherit" && n && typeof n == "object").map(([t, n]) => ({
    props: {
      variant: t
    },
    style: n
  })), ...Object.entries(e.palette).filter(Kt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
    props: {
      color: `text${q(t)}`
    },
    style: {
      color: (e.vars || e).palette.text[t]
    }
  })), {
    props: ({
      ownerState: t
    }) => t.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }]
}))), Xh = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Fe = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTypography"
  }), {
    color: o,
    align: i = "inherit",
    className: s,
    component: l,
    gutterBottom: a = !1,
    noWrap: c = !1,
    variant: u = "body1",
    variantMapping: m = Xh,
    ...y
  } = r, f = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: c,
    variant: u,
    variantMapping: m
  }, x = l || m[u] || Xh[u] || "span", b = BE(f);
  return /* @__PURE__ */ d.jsx(DE, {
    as: x,
    ref: n,
    className: Z(b.root, s),
    ...y,
    ownerState: f,
    style: {
      ...i !== "inherit" && {
        "--Typography-textAlign": i
      },
      ...y.style
    }
  });
});
function Io(e, t) {
  if (!e || !t)
    return !1;
  if (e.contains(t))
    return !0;
  const n = t.getRootNode?.();
  if (n && n instanceof ShadowRoot) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode ?? r.host ?? null;
    }
  }
  return !1;
}
var on = "top", jn = "bottom", An = "right", sn = "left", zp = "auto", al = [on, jn, An, sn], Ii = "start", Ys = "end", _E = "clippingParents", ux = "viewport", qi = "popper", WE = "reference", Qh = /* @__PURE__ */ al.reduce(function(e, t) {
  return e.concat([t + "-" + Ii, t + "-" + Ys]);
}, []), dx = /* @__PURE__ */ [].concat(al, [zp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ii, t + "-" + Ys]);
}, []), UE = "beforeRead", VE = "read", HE = "afterRead", KE = "beforeMain", YE = "main", GE = "afterMain", XE = "beforeWrite", QE = "write", qE = "afterWrite", ZE = [UE, VE, HE, KE, YE, GE, XE, QE, qE];
function dr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function gn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Fo(e) {
  var t = gn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Mn(e) {
  var t = gn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Fp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = gn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function JE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Mn(i) || !dr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function eT(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !Mn(o) || !dr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const tT = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: JE,
  effect: eT,
  requires: ["computeStyles"]
};
function ur(e) {
  return e.split("-")[0];
}
var Mo = Math.max, Wa = Math.min, Mi = Math.round;
function of() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function fx() {
  return !/^((?!chrome|android).)*safari/i.test(of());
}
function $i(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Mn(e) && (o = e.offsetWidth > 0 && Mi(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Mi(r.height) / e.offsetHeight || 1);
  var s = Fo(e) ? gn(e) : window, l = s.visualViewport, a = !fx() && n, c = (r.left + (a && l ? l.offsetLeft : 0)) / o, u = (r.top + (a && l ? l.offsetTop : 0)) / i, m = r.width / o, y = r.height / i;
  return {
    width: m,
    height: y,
    top: u,
    right: c + m,
    bottom: u + y,
    left: c,
    x: c,
    y: u
  };
}
function Bp(e) {
  var t = $i(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function px(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Fp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Or(e) {
  return gn(e).getComputedStyle(e);
}
function nT(e) {
  return ["table", "td", "th"].indexOf(dr(e)) >= 0;
}
function lo(e) {
  return ((Fo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function eu(e) {
  return dr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Fp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    lo(e)
  );
}
function qh(e) {
  return !Mn(e) || // https://github.com/popperjs/popper-core/issues/837
  Or(e).position === "fixed" ? null : e.offsetParent;
}
function rT(e) {
  var t = /firefox/i.test(of()), n = /Trident/i.test(of());
  if (n && Mn(e)) {
    var r = Or(e);
    if (r.position === "fixed")
      return null;
  }
  var o = eu(e);
  for (Fp(o) && (o = o.host); Mn(o) && ["html", "body"].indexOf(dr(o)) < 0; ) {
    var i = Or(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function cl(e) {
  for (var t = gn(e), n = qh(e); n && nT(n) && Or(n).position === "static"; )
    n = qh(n);
  return n && (dr(n) === "html" || dr(n) === "body" && Or(n).position === "static") ? t : n || rT(e) || t;
}
function Dp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vs(e, t, n) {
  return Mo(e, Wa(t, n));
}
function oT(e, t, n) {
  var r = vs(e, t, n);
  return r > n ? n : r;
}
function mx() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function hx(e) {
  return Object.assign({}, mx(), e);
}
function gx(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var iT = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, hx(typeof t != "number" ? t : gx(t, al));
};
function sT(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = ur(n.placement), a = Dp(l), c = [sn, An].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!i || !s)) {
    var m = iT(o.padding, n), y = Bp(i), f = a === "y" ? on : sn, x = a === "y" ? jn : An, b = n.rects.reference[u] + n.rects.reference[a] - s[a] - n.rects.popper[u], C = s[a] - n.rects.reference[a], g = cl(i), h = g ? a === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, S = b / 2 - C / 2, w = m[f], E = h - y[u] - m[x], k = h / 2 - y[u] / 2 + S, T = vs(w, k, E), P = a;
    n.modifiersData[r] = (t = {}, t[P] = T, t.centerOffset = T - k, t);
  }
}
function lT(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || px(t.elements.popper, o) && (t.elements.arrow = o));
}
const aT = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: sT,
  effect: lT,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Oi(e) {
  return e.split("-")[1];
}
var cT = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function uT(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Mi(n * o) / o || 0,
    y: Mi(r * o) / o || 0
  };
}
function Zh(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, m = e.isFixed, y = s.x, f = y === void 0 ? 0 : y, x = s.y, b = x === void 0 ? 0 : x, C = typeof u == "function" ? u({
    x: f,
    y: b
  }) : {
    x: f,
    y: b
  };
  f = C.x, b = C.y;
  var g = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), S = sn, w = on, E = window;
  if (c) {
    var k = cl(n), T = "clientHeight", P = "clientWidth";
    if (k === gn(n) && (k = lo(n), Or(k).position !== "static" && l === "absolute" && (T = "scrollHeight", P = "scrollWidth")), k = k, o === on || (o === sn || o === An) && i === Ys) {
      w = jn;
      var I = m && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      b -= I - r.height, b *= a ? 1 : -1;
    }
    if (o === sn || (o === on || o === jn) && i === Ys) {
      S = An;
      var A = m && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[P]
      );
      f -= A - r.width, f *= a ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: l
  }, c && cT), j = u === !0 ? uT({
    x: f,
    y: b
  }, gn(n)) : {
    x: f,
    y: b
  };
  if (f = j.x, b = j.y, a) {
    var v;
    return Object.assign({}, $, (v = {}, v[w] = h ? "0" : "", v[S] = g ? "0" : "", v.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + b + "px)" : "translate3d(" + f + "px, " + b + "px, 0)", v));
  }
  return Object.assign({}, $, (t = {}, t[w] = h ? b + "px" : "", t[S] = g ? f + "px" : "", t.transform = "", t));
}
function dT(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: ur(t.placement),
    variation: Oi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Zh(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Zh(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const fT = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: dT,
  data: {}
};
var Ol = {
  passive: !0
};
function pT(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = gn(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, Ol);
  }), l && a.addEventListener("resize", n.update, Ol), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, Ol);
    }), l && a.removeEventListener("resize", n.update, Ol);
  };
}
const mT = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: pT,
  data: {}
};
var hT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ra(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return hT[t];
  });
}
var gT = {
  start: "end",
  end: "start"
};
function Jh(e) {
  return e.replace(/start|end/g, function(t) {
    return gT[t];
  });
}
function _p(e) {
  var t = gn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Wp(e) {
  return $i(lo(e)).left + _p(e).scrollLeft;
}
function yT(e, t) {
  var n = gn(e), r = lo(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = fx();
    (c || !c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Wp(e),
    y: a
  };
}
function vT(e) {
  var t, n = lo(e), r = _p(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Mo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Mo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Wp(e), a = -r.scrollTop;
  return Or(o || n).direction === "rtl" && (l += Mo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Up(e) {
  var t = Or(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function yx(e) {
  return ["html", "body", "#document"].indexOf(dr(e)) >= 0 ? e.ownerDocument.body : Mn(e) && Up(e) ? e : yx(eu(e));
}
function xs(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = yx(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = gn(r), s = o ? [i].concat(i.visualViewport || [], Up(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(xs(eu(s)))
  );
}
function sf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function xT(e, t) {
  var n = $i(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function eg(e, t, n) {
  return t === ux ? sf(yT(e, n)) : Fo(t) ? xT(t, n) : sf(vT(lo(e)));
}
function ST(e) {
  var t = xs(eu(e)), n = ["absolute", "fixed"].indexOf(Or(e).position) >= 0, r = n && Mn(e) ? cl(e) : e;
  return Fo(r) ? t.filter(function(o) {
    return Fo(o) && px(o, r) && dr(o) !== "body";
  }) : [];
}
function bT(e, t, n, r) {
  var o = t === "clippingParents" ? ST(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, c) {
    var u = eg(e, c, r);
    return a.top = Mo(u.top, a.top), a.right = Wa(u.right, a.right), a.bottom = Wa(u.bottom, a.bottom), a.left = Mo(u.left, a.left), a;
  }, eg(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function vx(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ur(r) : null, i = r ? Oi(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case on:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case jn:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case An:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case sn:
      a = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      a = {
        x: t.x,
        y: t.y
      };
  }
  var c = o ? Dp(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case Ii:
        a[c] = a[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Ys:
        a[c] = a[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return a;
}
function Gs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? _E : l, c = n.rootBoundary, u = c === void 0 ? ux : c, m = n.elementContext, y = m === void 0 ? qi : m, f = n.altBoundary, x = f === void 0 ? !1 : f, b = n.padding, C = b === void 0 ? 0 : b, g = hx(typeof C != "number" ? C : gx(C, al)), h = y === qi ? WE : qi, S = e.rects.popper, w = e.elements[x ? h : y], E = bT(Fo(w) ? w : w.contextElement || lo(e.elements.popper), a, u, s), k = $i(e.elements.reference), T = vx({
    reference: k,
    element: S,
    placement: o
  }), P = sf(Object.assign({}, S, T)), I = y === qi ? P : k, A = {
    top: E.top - I.top + g.top,
    bottom: I.bottom - E.bottom + g.bottom,
    left: E.left - I.left + g.left,
    right: I.right - E.right + g.right
  }, $ = e.modifiersData.offset;
  if (y === qi && $) {
    var j = $[o];
    Object.keys(A).forEach(function(v) {
      var O = [An, jn].indexOf(v) >= 0 ? 1 : -1, R = [on, jn].indexOf(v) >= 0 ? "y" : "x";
      A[v] += j[R] * O;
    });
  }
  return A;
}
function wT(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? dx : a, u = Oi(r), m = u ? l ? Qh : Qh.filter(function(x) {
    return Oi(x) === u;
  }) : al, y = m.filter(function(x) {
    return c.indexOf(x) >= 0;
  });
  y.length === 0 && (y = m);
  var f = y.reduce(function(x, b) {
    return x[b] = Gs(e, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[ur(b)], x;
  }, {});
  return Object.keys(f).sort(function(x, b) {
    return f[x] - f[b];
  });
}
function CT(e) {
  if (ur(e) === zp)
    return [];
  var t = ra(e);
  return [Jh(e), t, Jh(t)];
}
function kT(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, c = n.padding, u = n.boundary, m = n.rootBoundary, y = n.altBoundary, f = n.flipVariations, x = f === void 0 ? !0 : f, b = n.allowedAutoPlacements, C = t.options.placement, g = ur(C), h = g === C, S = a || (h || !x ? [ra(C)] : CT(C)), w = [C].concat(S).reduce(function(X, G) {
      return X.concat(ur(G) === zp ? wT(t, {
        placement: G,
        boundary: u,
        rootBoundary: m,
        padding: c,
        flipVariations: x,
        allowedAutoPlacements: b
      }) : G);
    }, []), E = t.rects.reference, k = t.rects.popper, T = /* @__PURE__ */ new Map(), P = !0, I = w[0], A = 0; A < w.length; A++) {
      var $ = w[A], j = ur($), v = Oi($) === Ii, O = [on, jn].indexOf(j) >= 0, R = O ? "width" : "height", L = Gs(t, {
        placement: $,
        boundary: u,
        rootBoundary: m,
        altBoundary: y,
        padding: c
      }), N = O ? v ? An : sn : v ? jn : on;
      E[R] > k[R] && (N = ra(N));
      var M = ra(N), z = [];
      if (i && z.push(L[j] <= 0), l && z.push(L[N] <= 0, L[M] <= 0), z.every(function(X) {
        return X;
      })) {
        I = $, P = !1;
        break;
      }
      T.set($, z);
    }
    if (P)
      for (var B = x ? 3 : 1, U = function(G) {
        var H = w.find(function(he) {
          var W = T.get(he);
          if (W)
            return W.slice(0, G).every(function(re) {
              return re;
            });
        });
        if (H)
          return I = H, "break";
      }, D = B; D > 0; D--) {
        var Q = U(D);
        if (Q === "break") break;
      }
    t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const ET = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: kT,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function tg(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function ng(e) {
  return [on, An, jn, sn].some(function(t) {
    return e[t] >= 0;
  });
}
function TT(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Gs(t, {
    elementContext: "reference"
  }), l = Gs(t, {
    altBoundary: !0
  }), a = tg(s, r), c = tg(l, o, i), u = ng(a), m = ng(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": m
  });
}
const PT = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: TT
};
function RT(e, t, n) {
  var r = ur(e), o = [sn, on].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [sn, An].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function IT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = dx.reduce(function(u, m) {
    return u[m] = RT(m, t.rects, i), u;
  }, {}), l = s[t.placement], a = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
const MT = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: IT
};
function $T(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = vx({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const OT = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: $T,
  data: {}
};
function jT(e) {
  return e === "x" ? "y" : "x";
}
function AT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, c = n.rootBoundary, u = n.altBoundary, m = n.padding, y = n.tether, f = y === void 0 ? !0 : y, x = n.tetherOffset, b = x === void 0 ? 0 : x, C = Gs(t, {
    boundary: a,
    rootBoundary: c,
    padding: m,
    altBoundary: u
  }), g = ur(t.placement), h = Oi(t.placement), S = !h, w = Dp(g), E = jT(w), k = t.modifiersData.popperOffsets, T = t.rects.reference, P = t.rects.popper, I = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, A = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var v, O = w === "y" ? on : sn, R = w === "y" ? jn : An, L = w === "y" ? "height" : "width", N = k[w], M = N + C[O], z = N - C[R], B = f ? -P[L] / 2 : 0, U = h === Ii ? T[L] : P[L], D = h === Ii ? -P[L] : -T[L], Q = t.elements.arrow, X = f && Q ? Bp(Q) : {
        width: 0,
        height: 0
      }, G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : mx(), H = G[O], he = G[R], W = vs(0, T[L], X[L]), re = S ? T[L] / 2 - B - W - H - A.mainAxis : U - W - H - A.mainAxis, ae = S ? -T[L] / 2 + B + W + he + A.mainAxis : D + W + he + A.mainAxis, we = t.elements.arrow && cl(t.elements.arrow), Se = we ? w === "y" ? we.clientTop || 0 : we.clientLeft || 0 : 0, ye = (v = $?.[w]) != null ? v : 0, ce = N + re - ye - Se, ke = N + ae - ye, Be = vs(f ? Wa(M, ce) : M, N, f ? Mo(z, ke) : z);
      k[w] = Be, j[w] = Be - N;
    }
    if (l) {
      var je, Te = w === "x" ? on : sn, le = w === "x" ? jn : An, Ie = k[E], Ge = E === "y" ? "height" : "width", Xe = Ie + C[Te], Ve = Ie - C[le], ht = [on, sn].indexOf(g) !== -1, ft = (je = $?.[E]) != null ? je : 0, be = ht ? Xe : Ie - T[Ge] - P[Ge] - ft + A.altAxis, ie = ht ? Ie + T[Ge] + P[Ge] - ft - A.altAxis : Ve, fe = f && ht ? oT(be, Ie, ie) : vs(f ? be : Xe, Ie, f ? ie : Ve);
      k[E] = fe, j[E] = fe - Ie;
    }
    t.modifiersData[r] = j;
  }
}
const LT = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: AT,
  requiresIfExists: ["offset"]
};
function NT(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function zT(e) {
  return e === gn(e) || !Mn(e) ? _p(e) : NT(e);
}
function FT(e) {
  var t = e.getBoundingClientRect(), n = Mi(t.width) / e.offsetWidth || 1, r = Mi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function BT(e, t, n) {
  n === void 0 && (n = !1);
  var r = Mn(t), o = Mn(t) && FT(t), i = lo(t), s = $i(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((dr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Up(i)) && (l = zT(t)), Mn(t) ? (a = $i(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Wp(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function DT(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var a = t.get(l);
        a && o(a);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function _T(e) {
  var t = DT(e);
  return ZE.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function WT(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function UT(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var rg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function og() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function VT(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? rg : o;
  return function(l, a, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, rg, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, m = [], y = !1, f = {
      state: u,
      setOptions: function(g) {
        var h = typeof g == "function" ? g(u.options) : g;
        b(), u.options = Object.assign({}, i, u.options, h), u.scrollParents = {
          reference: Fo(l) ? xs(l) : l.contextElement ? xs(l.contextElement) : [],
          popper: xs(a)
        };
        var S = _T(UT([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = S.filter(function(w) {
          return w.enabled;
        }), x(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var g = u.elements, h = g.reference, S = g.popper;
          if (og(h, S)) {
            u.rects = {
              reference: BT(h, cl(S), u.options.strategy === "fixed"),
              popper: Bp(S)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(A) {
              return u.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var w = 0; w < u.orderedModifiers.length; w++) {
              if (u.reset === !0) {
                u.reset = !1, w = -1;
                continue;
              }
              var E = u.orderedModifiers[w], k = E.fn, T = E.options, P = T === void 0 ? {} : T, I = E.name;
              typeof k == "function" && (u = k({
                state: u,
                options: P,
                name: I,
                instance: f
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: WT(function() {
        return new Promise(function(C) {
          f.forceUpdate(), C(u);
        });
      }),
      destroy: function() {
        b(), y = !0;
      }
    };
    if (!og(l, a))
      return f;
    f.setOptions(c).then(function(C) {
      !y && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function x() {
      u.orderedModifiers.forEach(function(C) {
        var g = C.name, h = C.options, S = h === void 0 ? {} : h, w = C.effect;
        if (typeof w == "function") {
          var E = w({
            state: u,
            name: g,
            instance: f,
            options: S
          }), k = function() {
          };
          m.push(E || k);
        }
      });
    }
    function b() {
      m.forEach(function(C) {
        return C();
      }), m = [];
    }
    return f;
  };
}
var HT = [mT, OT, fT, tT, MT, ET, LT, aT, PT], KT = /* @__PURE__ */ VT({
  defaultModifiers: HT
});
function ji(e) {
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : lx(n, r), {
    props: l,
    internalRef: a
  } = ax({
    ...i,
    externalSlotProps: s
  }), c = ut(a, s?.ref, e.additionalProps?.ref);
  return sx(t, {
    ...l,
    ref: c
  }, r);
}
function Wo(e) {
  return parseInt(p.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
function YT(e) {
  return typeof e == "function" ? e() : e;
}
const xx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = p.useState(null), a = ut(/* @__PURE__ */ p.isValidElement(r) ? Wo(r) : null, n);
  if (lt(() => {
    i || l(YT(o) || document.body);
  }, [o, i]), lt(() => {
    if (s && !i)
      return ef(n, s), () => {
        ef(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ p.isValidElement(r)) {
      const c = {
        ref: a
      };
      return /* @__PURE__ */ p.cloneElement(r, c);
    }
    return r;
  }
  return s && /* @__PURE__ */ Jv.createPortal(r, s);
});
function GT(e) {
  return ue("MuiPopper", e);
}
se("MuiPopper", ["root"]);
function XT(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Sx(e) {
  return typeof e == "function" ? e() : e;
}
function QT(e) {
  return e.nodeType !== void 0;
}
const qT = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, GT, t);
}, ZT = {}, JT = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: c,
    popperOptions: u,
    popperRef: m,
    slotProps: y = {},
    slots: f = {},
    TransitionProps: x,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, g = p.useRef(null), h = ut(g, n), S = p.useRef(null), w = ut(S, m), E = p.useRef(w);
  lt(() => {
    E.current = w;
  }, [w]), p.useImperativeHandle(m, () => S.current, []);
  const k = XT(c, i), [T, P] = p.useState(k), I = p.useMemo(() => Sx(r), [r]);
  p.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), lt(() => {
    if (!I || !a)
      return;
    const O = (M) => {
      P(M.placement);
    };
    let R = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: M
      }) => {
        O(M);
      }
    }];
    l != null && (R = R.concat(l)), u && u.modifiers != null && (R = R.concat(u.modifiers));
    const L = KT(I, g.current, {
      placement: k,
      ...u,
      modifiers: R
    });
    E.current(L);
    const N = g.current;
    return () => {
      if (N) {
        const {
          style: M
        } = N, z = M.position, B = M.top, U = M.left, D = M.transform;
        L.destroy(), M.position = z, M.top = B, M.left = U, M.transform = D;
      } else
        L.destroy();
      E.current(null);
    };
  }, [I, s, l, a, u, k]);
  const A = {
    placement: T
  };
  x !== null && (A.TransitionProps = x);
  const $ = qT(t), j = f.root ?? "div", v = ji({
    elementType: j,
    externalSlotProps: y.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: h
    },
    ownerState: t,
    className: $.root
  });
  return /* @__PURE__ */ d.jsx(j, {
    ...v,
    children: typeof o == "function" ? o(A) : o
  });
}), eP = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: c,
    open: u,
    placement: m = "bottom",
    popperOptions: y = ZT,
    popperRef: f,
    style: x,
    transition: b = !1,
    slotProps: C = {},
    slots: g = {},
    ...h
  } = t, [S, w] = p.useState(!0), E = () => {
    w(!1);
  }, k = () => {
    w(!0);
  };
  if (!a && !u && (!b || S))
    return null;
  let T;
  if (i)
    T = i;
  else if (r) {
    const A = Sx(r);
    T = A && QT(A) ? mt(A).body : mt(null).body;
  }
  const P = !u && a && (!b || S) ? "none" : void 0, I = b ? {
    in: u,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ d.jsx(xx, {
    disablePortal: l,
    container: T,
    children: /* @__PURE__ */ d.jsx(JT, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: c,
      ref: n,
      open: b ? !S : u,
      placement: m,
      popperOptions: y,
      popperRef: f,
      slotProps: C,
      slots: g,
      ...h,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: P,
        ...x
      },
      TransitionProps: I,
      children: o
    })
  });
}), tP = V(eP, {
  name: "MuiPopper",
  slot: "Root"
})({}), bx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = Vc(), o = me({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: u,
    open: m,
    placement: y,
    popperOptions: f,
    popperRef: x,
    transition: b,
    slots: C,
    slotProps: g,
    ...h
  } = o, S = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: u,
    open: m,
    placement: y,
    popperOptions: f,
    popperRef: x,
    transition: b,
    ...h
  };
  return /* @__PURE__ */ d.jsx(tP, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: g,
    ...S,
    ref: n
  });
}), nP = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function rP(e) {
  return ue("MuiChip", e);
}
const ze = se("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), oP = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: i,
    clickable: s,
    variant: l
  } = e, a = {
    root: ["root", l, n && "disabled", `size${q(r)}`, `color${q(o)}`, s && "clickable", i && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return de(a, rP, t);
}, iP = V("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => Qt(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      clickable: o,
      onDelete: i,
      size: s,
      variant: l
    } = n;
    return [{
      [`& .${ze.avatar}`]: t.avatar
    }, {
      [`& .${ze.icon}`]: t.icon
    }, {
      [`& .${ze.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${q(s)}`], t[`color${q(r)}`], o && t.clickable, i && t.deletable, t[l]];
  }
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    lineHeight: 1.5,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    ...at(e, ["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${ze.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ze.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${ze.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${ze.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.alpha((e.vars || e).palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.alpha((e.vars || e).palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        color: "primary"
      },
      style: {
        [`& .${ze.avatar}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark
        }
      }
    }, {
      props: {
        color: "secondary"
      },
      style: {
        [`& .${ze.avatar}`]: {
          color: (e.vars || e).palette.secondary.contrastText,
          backgroundColor: (e.vars || e).palette.secondary.dark
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${ze.avatar}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10)
        },
        [`& .${ze.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${ze.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Kt(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${ze.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${ze.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${ze.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: !e.focusVisible && {
        [`&.${ze.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(Kt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: !e.focusVisible && {
        [`&.${ze.focusVisible}`]: {
          background: (e.vars || e).palette[n].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
        },
        ...!e.focusVisible && {
          [`&.${ze.focusVisible}`]: {
            backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Kt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        "&:hover": {
          backgroundColor: (e.vars || e).palette[n].dark
        },
        ...!e.focusVisible && {
          [`&.${ze.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette[n].dark
          }
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${ze.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        ...!e.focusVisible && {
          [`&.${ze.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus
          }
        },
        [`& .${ze.avatar}`]: {
          marginLeft: 4
        },
        [`& .${ze.icon}`]: {
          marginLeft: 4
        },
        [`& .${ze.deleteIcon}`]: {
          marginRight: 5
        }
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        [`& .${ze.avatar}`]: {
          marginLeft: 2
        },
        [`& .${ze.icon}`]: {
          marginLeft: 2
        },
        [`& .${ze.deleteIcon}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Kt()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.alpha((e.vars || e).palette[n].main, 0.7)}`,
        [`&.${ze.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
        },
        ...!e.focusVisible && {
          [`&.${ze.focusVisible}`]: {
            backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
          }
        },
        [`& .${ze.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), sP = V("span", {
  name: "MuiChip",
  slot: "Label"
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function ig(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Zi = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: s,
    color: l = "default",
    component: a,
    deleteIcon: c,
    disabled: u = !1,
    icon: m,
    label: y,
    onClick: f,
    onDelete: x,
    onKeyDown: b,
    onKeyUp: C,
    size: g = "medium",
    variant: h = "filled",
    tabIndex: S,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: E = {},
    slotProps: k = {},
    ...T
  } = r, {
    nativeButton: P,
    ...I
  } = T, A = p.useRef(null), $ = ut(A, n), j = (W) => {
    W.stopPropagation(), x(W);
  }, v = (W) => {
    W.currentTarget === W.target && ig(W) && W.preventDefault(), b && b(W);
  }, O = (W) => {
    W.currentTarget === W.target && x && ig(W) && x(W), C && C(W);
  }, R = s !== !1 && f ? !0 : s, L = R || x ? no : a || "div", N = {
    ...r,
    component: L,
    disabled: u,
    size: g,
    color: l,
    iconColor: /* @__PURE__ */ p.isValidElement(m) && m.props.color || l,
    onDelete: !!x,
    clickable: R,
    variant: h
  }, M = oP(N), z = L === no ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: M.focusVisible,
    ...x && {
      disableRipple: !0
    },
    ...P !== void 0 && {
      nativeButton: P
    }
  } : {};
  let B = null;
  x && (B = c && /* @__PURE__ */ p.isValidElement(c) ? /* @__PURE__ */ p.cloneElement(c, {
    className: Z(c.props.className, M.deleteIcon),
    onClick: j
  }) : /* @__PURE__ */ d.jsx(nP, {
    className: M.deleteIcon,
    onClick: j
  }));
  let U = null;
  o && /* @__PURE__ */ p.isValidElement(o) && (U = /* @__PURE__ */ p.cloneElement(o, {
    className: Z(M.avatar, o.props.className)
  }));
  let D = null;
  m && /* @__PURE__ */ p.isValidElement(m) && (D = /* @__PURE__ */ p.cloneElement(m, {
    className: Z(M.icon, m.props.className)
  }));
  const Q = {
    slots: E,
    slotProps: k
  }, [X, G] = ve("root", {
    elementType: iP,
    externalForwardedProps: {
      ...Q,
      ...I
    },
    ownerState: N,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: $,
    className: Z(M.root, i),
    additionalProps: {
      disabled: R && u ? !0 : void 0,
      tabIndex: w && u ? -1 : S,
      ...z
    },
    getSlotProps: (W) => ({
      ...W,
      onClick: (re) => {
        W.onClick?.(re), f?.(re);
      },
      onKeyDown: (re) => {
        W.onKeyDown?.(re), v(re);
      },
      onKeyUp: (re) => {
        W.onKeyUp?.(re), O(re);
      }
    })
  }), [H, he] = ve("label", {
    elementType: sP,
    externalForwardedProps: Q,
    ownerState: N,
    className: M.label
  });
  return /* @__PURE__ */ d.jsxs(X, {
    as: L,
    ...G,
    children: [U || D, /* @__PURE__ */ d.jsx(H, {
      ...he,
      children: y
    }), B]
  });
}), lP = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), aP = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
}, cP = {
  opacity: 0,
  visibility: "hidden"
}, wx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = so(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: c,
    in: u,
    onEnter: m,
    onEntered: y,
    onEntering: f,
    onExit: x,
    onExited: b,
    onExiting: C,
    style: g,
    timeout: h = o,
    ...S
  } = t, w = Zc(r.motion.reducedMotion, a), E = p.useRef(null), k = ut(E, Wo(l), n), T = Tn(E, f), P = Tn(E, (O, R) => {
    w.shouldReduceMotion || $p(O);
    const L = Na({
      style: g,
      timeout: h,
      easing: c
    }, {
      mode: "enter"
    }), N = w.getTransitionTiming({
      duration: L.duration,
      delay: L.delay
    });
    O.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: L.easing,
      delay: N.delay
    }), m && m(O, R);
  }), I = Tn(E, y), A = Tn(E, C), $ = Tn(E, (O) => {
    const R = Na({
      style: g,
      timeout: h,
      easing: c
    }, {
      mode: "exit"
    }), L = w.getTransitionTiming({
      duration: R.duration,
      delay: R.delay
    });
    O.style.transition = r.transitions.create("opacity", {
      duration: L.duration,
      easing: R.easing,
      delay: L.delay
    }), x && x(O);
  }), j = Tn(E, (O) => {
    O.style.transition = "", b && b(O);
  }), v = i ? (O) => {
    i(E.current, O);
  } : void 0;
  return /* @__PURE__ */ d.jsx(rx, {
    appear: s,
    in: u,
    nodeRef: E,
    onEnter: P,
    onEntered: I,
    onEntering: T,
    onExit: $,
    onExited: j,
    onExiting: A,
    addEndListener: v,
    reduceMotion: w.shouldReduceMotion,
    timeout: h,
    ...S,
    children: (O, {
      ownerState: R,
      ...L
    }) => {
      const N = tx(O, u, aP, cP, g, l.props.style);
      return /* @__PURE__ */ p.cloneElement(l, {
        style: N,
        ref: k,
        ...L
      });
    }
  });
});
function uP(e) {
  return ue("MuiBackdrop", e);
}
se("MuiBackdrop", ["root", "invisible"]);
const dP = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return de({
    root: ["root", n && "invisible"]
  }, uP, t);
}, fP = V("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), Cx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: l = !1,
    open: a,
    slotProps: c = {},
    slots: u = {},
    transitionDuration: m,
    ...y
  } = r, f = {
    ...r,
    component: s,
    invisible: l
  }, x = dP(f), b = {
    component: s,
    slots: u,
    slotProps: c
  }, [C, g] = ve("root", {
    elementType: fP,
    externalForwardedProps: b,
    className: Z(x.root, i),
    ownerState: f
  }), [h, S] = ve("transition", {
    elementType: wx,
    externalForwardedProps: b,
    ownerState: f
  });
  return /* @__PURE__ */ d.jsx(h, {
    in: a,
    timeout: m,
    ...y,
    ...S,
    children: /* @__PURE__ */ d.jsx(C, {
      ...g,
      ref: n,
      children: o
    })
  });
}), pP = se("MuiBox", ["root"]), mP = Kc(), ot = AC({
  themeId: ar,
  defaultTheme: mP,
  defaultClassName: pP.root,
  generateClassName: $0.generate
});
function hP(e) {
  return ue("MuiButton", e);
}
const ho = se("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), gP = /* @__PURE__ */ p.createContext({}), yP = /* @__PURE__ */ p.createContext(void 0), vP = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    loading: s,
    loadingPosition: l,
    classes: a
  } = e, c = {
    root: ["root", s && "loading", i, `size${q(o)}`, `color${q(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${q(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, u = de(c, hP, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...u
  };
}, kx = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], xP = V(no, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${q(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    ...at(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${ho.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${ho.focusVisible}`]: {
          ...e.focusVisible,
          boxShadow: e.focusVisible?.boxShadow ? `${(e.vars || e).shadows[6]}, ${e.focusVisible.boxShadow}` : (e.vars || e).shadows[6]
        },
        [`&.${ho.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${ho.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Kt()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
            "--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${ho.focusVisible}`]: {
          boxShadow: e.focusVisible?.boxShadow ?? "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${ho.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        ...at(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${ho.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), SP = V("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  alignItems: "center",
  marginRight: 8,
  marginLeft: -4,
  "&::before": {
    content: '"\\200b"',
    width: 0,
    overflow: "hidden"
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      ...at(e, ["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...kx]
})), bP = V("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      ...at(e, ["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...kx]
})), wP = V("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), sg = V("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), bn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = p.useContext(gP), o = p.useContext(yP), i = Ri(r, t), s = me({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: c = "button",
    className: u,
    disabled: m = !1,
    disableElevation: y = !1,
    disableFocusRipple: f = !1,
    endIcon: x,
    focusVisibleClassName: b,
    fullWidth: C = !1,
    id: g,
    loading: h = null,
    loadingIndicator: S,
    loadingPosition: w = "center",
    size: E = "medium",
    startIcon: k,
    type: T,
    variant: P = "text",
    ...I
  } = s, A = $r(g), $ = S ?? /* @__PURE__ */ d.jsx(bo, {
    "aria-labelledby": A,
    color: "inherit",
    size: 16
  }), j = {
    ...s,
    color: a,
    component: c,
    disabled: m,
    disableElevation: y,
    disableFocusRipple: f,
    fullWidth: C,
    loading: h,
    loadingIndicator: $,
    loadingPosition: w,
    size: E,
    type: T,
    variant: P
  }, v = vP(j), O = (k || h && w === "start") && /* @__PURE__ */ d.jsx(SP, {
    className: v.startIcon,
    ownerState: j,
    children: k || /* @__PURE__ */ d.jsx(sg, {
      className: v.loadingIconPlaceholder,
      ownerState: j
    })
  }), R = (x || h && w === "end") && /* @__PURE__ */ d.jsx(bP, {
    className: v.endIcon,
    ownerState: j,
    children: x || /* @__PURE__ */ d.jsx(sg, {
      className: v.loadingIconPlaceholder,
      ownerState: j
    })
  }), L = o || "", N = typeof h == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ d.jsx("span", {
      className: v.loadingWrapper,
      style: {
        display: "contents"
      },
      children: h && /* @__PURE__ */ d.jsx(wP, {
        className: v.loadingIndicator,
        ownerState: j,
        children: $
      })
    })
  ) : null, {
    root: M,
    ...z
  } = v;
  return /* @__PURE__ */ d.jsxs(xP, {
    ownerState: j,
    className: Z(r.className, v.root, u, L),
    component: c,
    disabled: m || h,
    focusRipple: !f,
    focusVisibleClassName: Z(v.focusVisible, b),
    ref: n,
    internalNativeButton: !0,
    type: T,
    id: h ? A : g,
    ...I,
    classes: z,
    children: [O, w !== "end" && N, l, w === "end" && N, R]
  });
});
function CP(e) {
  return ue("MuiCard", e);
}
se("MuiCard", ["root"]);
const kP = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, CP, t);
}, EP = V(Pn, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), jl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1,
    ...s
  } = r, l = {
    ...r,
    raised: i
  }, a = kP(l);
  return /* @__PURE__ */ d.jsx(EP, {
    className: Z(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function TP(e) {
  return ue("MuiCardContent", e);
}
se("MuiCardContent", ["root"]);
const PP = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, TP, t);
}, RP = V("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Al = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = PP(l);
  return /* @__PURE__ */ d.jsx(RP, {
    as: i,
    className: Z(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function IP(e) {
  return ue("PrivateSwitchBase", e);
}
se("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const MP = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: o
  } = e, i = {
    root: ["root", n && "checked", r && "disabled", o && `edge${q(o)}`],
    input: ["input"]
  };
  return de(i, IP, t);
}, $P = V(no, {
  name: "MuiSwitchBase"
})({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "start" && t.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "end" && t.size !== "small",
    style: {
      marginRight: -12
    }
  }]
}), OP = V("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: Qt
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), Ex = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: o,
    checkedIcon: i,
    defaultChecked: s,
    disabled: l,
    disableFocusRipple: a = !1,
    edge: c = !1,
    icon: u,
    id: m,
    name: y,
    onBlur: f,
    onChange: x,
    onFocus: b,
    readOnly: C,
    required: g = !1,
    tabIndex: h,
    type: S,
    value: w,
    slots: E = {},
    slotProps: k = {},
    ...T
  } = t, {
    nativeButton: P,
    ...I
  } = T, [A, $] = Fa({
    controlled: o,
    default: !!s,
    name: "SwitchBase",
    state: "checked"
  }), j = Z0(), v = (G) => {
    b && b(G), j && j.onFocus && j.onFocus(G);
  }, O = (G) => {
    f && f(G), j && j.onBlur && j.onBlur(G);
  }, R = (G) => {
    if (G.nativeEvent.defaultPrevented || C)
      return;
    const H = G.target.checked;
    $(H), x && x(G, H);
  };
  let L = l;
  j && typeof L > "u" && (L = j.disabled);
  const N = S === "checkbox" || S === "radio", M = {
    ...t,
    checked: A,
    disabled: L,
    disableFocusRipple: a,
    edge: c
  }, z = MP(M), B = {
    slots: E,
    slotProps: k
  }, [U, D] = ve("root", {
    ref: n,
    elementType: $P,
    className: z.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...B,
      component: "span",
      ...I
    },
    getSlotProps: (G) => ({
      ...G,
      onFocus: (H) => {
        G.onFocus?.(H), v(H);
      },
      onBlur: (H) => {
        G.onBlur?.(H), O(H);
      }
    }),
    ownerState: M,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !a,
      role: void 0,
      tabIndex: null,
      internalDisabledThemeFocusVisible: !0
    }
  }), [Q, X] = ve("input", {
    elementType: OP,
    className: z.input,
    externalForwardedProps: B,
    getSlotProps: (G) => ({
      ...G,
      onChange: (H) => {
        G.onChange?.(H), R(H);
      }
    }),
    ownerState: M,
    additionalProps: {
      autoFocus: r,
      checked: o,
      defaultChecked: s,
      disabled: L,
      id: N ? m : void 0,
      name: y,
      readOnly: C,
      required: g,
      tabIndex: h,
      type: S,
      ...S === "checkbox" && w === void 0 ? {} : {
        value: w
      }
    }
  });
  return /* @__PURE__ */ d.jsxs(U, {
    ...D,
    children: [/* @__PURE__ */ d.jsx(Q, {
      ...X
    }), A ? i : u]
  });
}), jP = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
})), AP = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
})), LP = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
})), NP = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: o
  } = e, i = {
    root: ["root", n && "indeterminate", `color${q(r)}`, `size${q(o)}`]
  }, s = de(i, m2, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...s
  };
}, zP = V(Ex, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${q(n.size)}`], n.color !== "default" && t[`color${q(n.color)}`]];
  }
})(ge(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.focusVisible && {
    [`&.${Ks.focusVisible} svg:first-of-type`]: {
      ...Rp,
      borderRadius: (e.vars || e).shape.borderRadius,
      ...e.focusVisible
    }
  },
  variants: [{
    props: {
      color: "default",
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Kt()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Kt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Du.checked}, &.${Du.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Du.disabled}`]: {
        color: (e.vars || e).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
}))), FP = /* @__PURE__ */ d.jsx(AP, {}), BP = /* @__PURE__ */ d.jsx(jP, {}), DP = /* @__PURE__ */ d.jsx(LP, {}), lg = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: o = FP,
    color: i = "primary",
    icon: s = BP,
    indeterminate: l = !1,
    indeterminateIcon: a = DP,
    size: c = "medium",
    disableRipple: u = !1,
    className: m,
    slots: y = {},
    slotProps: f = {},
    ...x
  } = r, b = l ? a : s, C = l ? a : o, g = {
    ...r,
    disableRipple: u,
    color: i,
    indeterminate: l,
    size: c
  }, h = NP(g), S = f.input, [w, E] = ve("root", {
    ref: n,
    elementType: zP,
    className: Z(h.root, m),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: y,
      slotProps: f,
      ...x
    },
    ownerState: g,
    additionalProps: {
      type: "checkbox",
      icon: /* @__PURE__ */ p.cloneElement(b, {
        fontSize: b.props.fontSize ?? c
      }),
      checkedIcon: /* @__PURE__ */ p.cloneElement(C, {
        fontSize: C.props.fontSize ?? c
      }),
      // Forward the raw prop so an unset value stays `undefined` and ButtonBase resolves its
      // own default — letting a global `MuiButtonBase.defaultProps.disableRipple` apply here.
      disableRipple: r.disableRipple,
      slots: y,
      slotProps: {
        input: Lp(typeof S == "function" ? S(g) : S, {
          "data-indeterminate": l,
          "aria-checked": l ? "mixed" : void 0
        })
      }
    }
  });
  return /* @__PURE__ */ d.jsx(w, {
    ...E,
    classes: h
  });
});
function ag(e) {
  return e.substring(2).toLowerCase();
}
function _P(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function WP(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, s = p.useRef(!1), l = p.useRef(null), a = p.useRef(!1), c = p.useRef(!1);
  p.useEffect(() => (setTimeout(() => {
    a.current = !0;
  }, 0), () => {
    a.current = !1;
  }), []);
  const u = ut(Wo(t), l), m = Ze((x) => {
    const b = c.current;
    c.current = !1;
    const C = mt(l.current);
    if (!a.current || !l.current || "clientX" in x && _P(x, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let g;
    x.composedPath ? g = x.composedPath().includes(l.current) : g = !Io(C.documentElement, x.target) || Io(l.current, x.target), !g && (n || !b) && o(x);
  }), y = (x) => (b) => {
    c.current = !0;
    const C = t.props[x];
    C && C(b);
  }, f = {
    ref: u
  };
  return i !== !1 && (f[i] = y(i)), p.useEffect(() => {
    if (i !== !1) {
      const x = ag(i), b = mt(l.current), C = () => {
        s.current = !0;
      };
      return b.addEventListener(x, m), b.addEventListener("touchmove", C), () => {
        b.removeEventListener(x, m), b.removeEventListener("touchmove", C);
      };
    }
  }, [m, i]), r !== !1 && (f[r] = y(r)), p.useEffect(() => {
    if (r !== !1) {
      const x = ag(r), b = mt(l.current);
      return b.addEventListener(x, m), () => {
        b.removeEventListener(x, m);
      };
    }
  }, [m, r]), /* @__PURE__ */ p.cloneElement(t, f);
}
function Tx(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function UP(e) {
  const t = mt(e);
  return e === t.body || e === t.documentElement ? Yn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ss(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function cg(e) {
  return parseFloat(Yn(e).getComputedStyle(e).paddingRight) || 0;
}
function VP(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function ug(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !VP(s);
    l && a && Ss(s, o);
  });
}
function HP(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = mt(r).body;
    else {
      const s = r.parentElement, l = Yn(r);
      i = s?.nodeName === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (UP(i)) {
      const s = Tx(Yn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${cg(i) + s}px`;
      const l = mt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${cg(a) + s}px`;
      });
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: l
    }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l);
    });
  };
}
function KP(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class YP {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Ss(t.modalRef, !1);
    const o = KP(n);
    ug(n, t.mount, t.modalRef, o, !0);
    const i = this.containers.findIndex((s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = this.containers.findIndex((i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = HP(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Ss(t.modalRef, n), ug(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Ss(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const lf = "data-mui-focusable";
function dg(e) {
  return e ? e.hasAttribute(lf) ? e : e.querySelector(`[${lf}]`) : null;
}
const GP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Px(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function XP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function QP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || XP(e));
}
function qP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(GP)).forEach((r, o) => {
    const i = Px(r);
    i === -1 || !QP(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function ZP() {
  return !0;
}
function JP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = qP,
    isEnabled: s = ZP,
    open: l
  } = e, a = p.useRef(!1), c = p.useRef(null), u = p.useRef(null), m = p.useRef(null), y = p.useRef(null), f = p.useRef(!1), x = p.useRef(null), b = ut(Wo(t), x), C = p.useRef(null);
  p.useEffect(() => {
    !l || !x.current || (f.current = !n);
  }, [n, l]), p.useEffect(() => {
    if (a.current = !1, !l || !x.current)
      return;
    const S = mt(x.current), w = or(S), E = dg(x.current) ?? x.current;
    return Io(x.current, w) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), f.current && E.focus()), () => {
      !o && m.current && (a.current = !0, m.current.focus(), m.current = null);
    };
  }, [l]), p.useEffect(() => {
    if (!l || !x.current)
      return;
    const S = mt(x.current), w = (T) => {
      if (C.current = T, r || !s() || T.key !== "Tab")
        return;
      const P = x.current, I = or(S);
      if (P === null)
        return;
      const A = dg(P);
      if (I === P || I === A) {
        const j = i(P);
        if (j.length === 0)
          return;
        T.preventDefault(), T.shiftKey ? j[j.length - 1].focus() : j[0].focus();
        return;
      }
      if (Io(P, I)) {
        const j = i(P), v = j.indexOf(I);
        if (v === -1 || !j.some((L) => Px(L) > 0))
          return;
        T.preventDefault();
        let R = 0;
        T.shiftKey ? R = v <= 0 ? j.length - 1 : v - 1 : R = v === j.length - 1 ? 0 : v + 1, j[R].focus();
      }
    }, E = () => {
      const T = x.current;
      if (T === null)
        return;
      const P = or(S);
      if (!S.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (Io(T, P) || r && P !== c.current && P !== u.current)
        return;
      if (P !== y.current)
        y.current = null;
      else if (y.current !== null)
        return;
      if (!f.current)
        return;
      let I = [];
      if ((P === c.current || P === u.current) && (I = i(x.current)), I.length > 0) {
        const A = !!(C.current?.shiftKey && C.current?.key === "Tab"), $ = I[0], j = I[I.length - 1];
        typeof $ != "string" && typeof j != "string" && (A ? j.focus() : $.focus());
      } else
        T.focus();
    };
    S.addEventListener("focusin", E), S.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const T = or(S);
      T && T.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), S.removeEventListener("focusin", E), S.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const g = (S) => {
    m.current === null && (m.current = S.relatedTarget), f.current = !0, y.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, h = (S) => {
    m.current === null && (m.current = S.relatedTarget), f.current = !0;
  };
  return /* @__PURE__ */ d.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ d.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: h,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ p.cloneElement(t, {
      ref: b,
      onFocus: g
    }), /* @__PURE__ */ d.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: h,
      ref: u,
      "data-testid": "sentinelEnd"
    })]
  });
}
function eR(e) {
  return typeof e == "function" ? e() : e;
}
function tR(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const fg = () => {
}, Ll = new YP();
function nR(e) {
  const {
    container: t,
    disableScrollLock: n = !1,
    closeAfterTransition: r = !1,
    onTransitionEnter: o,
    onTransitionExited: i,
    children: s,
    onClose: l,
    open: a,
    rootRef: c
  } = e, u = p.useRef({}), m = p.useRef(null), y = p.useRef(null), f = p.useRef(null), x = ut(f, c), [b, C] = p.useState(!a), g = tR(s);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const S = () => mt(m.current), w = () => (u.current.modalRef = f.current, u.current.mount = m.current, u.current), E = () => {
    Ll.mount(w(), {
      disableScrollLock: n
    }), f.current && (f.current.scrollTop = 0);
  }, k = Ze(() => {
    const L = eR(t) || S().body;
    Ll.add(w(), L), f.current && E();
  }), T = () => Ll.isTopModal(w()), P = Ze((L) => {
    m.current = L, L && (y.current = L, a && T() ? E() : f.current && Ss(f.current, h));
  }), I = p.useCallback(() => {
    Ll.remove(w(), h);
  }, [h]);
  p.useEffect(() => () => {
    I();
  }, [I]), p.useEffect(() => {
    a ? k() : (!g || !r) && I();
  }, [a, I, g, r, k]);
  const A = (L) => (N) => {
    L.onKeyDown?.(N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !T()) && (N.stopPropagation(), l && l(N, "escapeKeyDown"));
  }, $ = (L) => (N) => {
    L.onClick?.(N), N.target === N.currentTarget && l && l(N, "backdropClick");
  }, j = (L = {}) => {
    const N = Ba(e);
    delete N.onTransitionEnter, delete N.onTransitionExited;
    const M = {
      ...N,
      ...L
    };
    return {
      /*
       * Marking an element with the role presentation indicates to assistive technology
       * that this element should be ignored; it exists to support the web application and
       * is not meant for humans to interact with directly.
       * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
       */
      role: "presentation",
      ...M,
      onKeyDown: A(M),
      ref: x
    };
  }, v = (L = {}) => {
    const N = L;
    return {
      "aria-hidden": !0,
      ...N,
      onClick: $(N),
      open: a
    };
  }, O = () => {
    const L = () => {
      C(!1), o && o();
    }, N = () => {
      C(!0), i && i(), r && I();
    };
    return {
      onEnter: Wh(L, s?.props.onEnter ?? fg),
      onExited: Wh(N, s?.props.onExited ?? fg)
    };
  }, R = !a && g && !b ? y.current ?? t : t;
  return {
    getRootProps: j,
    getBackdropProps: v,
    getTransitionProps: O,
    rootRef: x,
    portalRef: P,
    portalContainer: R,
    isTopModal: T,
    exited: b,
    hasTransition: g
  };
}
function rR(e) {
  return ue("MuiModal", e);
}
se("MuiModal", ["root", "hidden", "backdrop"]);
const oR = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return de({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, rR, r);
}, iR = V("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(ge(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), sR = V(Cx, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Rx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    name: "MuiModal",
    props: t
  }), {
    classes: o,
    className: i,
    closeAfterTransition: s = !1,
    children: l,
    container: a,
    component: c,
    disableAutoFocus: u = !1,
    disableEnforceFocus: m = !1,
    disablePortal: y = !1,
    disableRestoreFocus: f = !1,
    disableScrollLock: x = !1,
    hideBackdrop: b = !1,
    keepMounted: C = !1,
    onClose: g,
    onTransitionEnter: h,
    onTransitionExited: S,
    open: w,
    slotProps: E = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: T,
    ...P
  } = r, I = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: u,
    disableEnforceFocus: m,
    disablePortal: y,
    disableRestoreFocus: f,
    disableScrollLock: x,
    hideBackdrop: b,
    keepMounted: C
  }, {
    getRootProps: A,
    getBackdropProps: $,
    getTransitionProps: j,
    portalRef: v,
    portalContainer: O,
    isTopModal: R,
    exited: L,
    hasTransition: N
  } = nR({
    ...I,
    rootRef: n
  }), M = {
    ...I,
    exited: L
  }, z = oR(M), B = {};
  if (l.props.tabIndex === void 0 && (B.tabIndex = "-1"), N) {
    const {
      onEnter: H,
      onExited: he
    } = j();
    B.onEnter = H, B.onExited = he;
  }
  const U = {
    slots: k,
    slotProps: E
  }, [D, Q] = ve("root", {
    ref: n,
    elementType: iR,
    externalForwardedProps: {
      ...U,
      ...P,
      component: c
    },
    getSlotProps: A,
    ownerState: M,
    className: Z(i, z?.root, !M.open && M.exited && z?.hidden)
  }), [X, G] = ve("backdrop", {
    elementType: sR,
    externalForwardedProps: U,
    shouldForwardComponentProp: !0,
    getSlotProps: (H) => $({
      ...H,
      onClick: (he) => {
        H?.onClick && H.onClick(he);
      }
    }),
    className: z?.backdrop,
    ownerState: M
  });
  return !C && !w && (!N || L) ? null : /* @__PURE__ */ d.jsx(xx, {
    ref: v,
    container: O,
    disablePortal: y,
    children: /* @__PURE__ */ d.jsxs(D, {
      ...Q,
      children: [b ? null : /* @__PURE__ */ d.jsx(X, {
        ...G
      }), /* @__PURE__ */ d.jsx(JP, {
        disableEnforceFocus: m,
        disableAutoFocus: u,
        disableRestoreFocus: f,
        isEnabled: R,
        open: w,
        children: /* @__PURE__ */ p.cloneElement(l, B)
      })]
    })
  });
});
function lR(e) {
  return ue("MuiDialog", e);
}
se("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const Ix = /* @__PURE__ */ p.createContext({}), aR = V(Cx, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), cR = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${q(n)}`],
    paper: ["paper", `paperWidth${q(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return de(s, lR, t);
}, uR = V(Rx, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), dR = V("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${q(n.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), fR = V(Pn, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${q(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(ge(({
  theme: e
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`
    }
  }, {
    props: {
      maxWidth: "xs",
      scroll: "body"
    },
    style: {
      [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
        maxWidth: "calc(100% - 64px)"
      }
    }
  }, ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
    props: {
      maxWidth: t
    },
    style: {
      maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`
    }
  })), ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
    props: {
      maxWidth: t,
      scroll: "body"
    },
    style: {
      [e.breakpoints.down(e.breakpoints.values[t] + 32 * 2)]: {
        maxWidth: "calc(100% - 64px)"
      }
    }
  })), {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullScreen && t.scroll === "body",
    style: {
      margin: 0,
      maxWidth: "100%"
    }
  }]
}))), Wu = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialog"
  }), o = so(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: c,
    className: u,
    fullScreen: m = !1,
    fullWidth: y = !1,
    maxWidth: f = "sm",
    onClick: x,
    onClose: b,
    open: C,
    PaperComponent: g = Pn,
    role: h = "dialog",
    scroll: S = "paper",
    slots: w = {},
    slotProps: E = {},
    transitionDuration: k = i,
    ...T
  } = r, P = {
    ...r,
    fullScreen: m,
    fullWidth: y,
    maxWidth: f,
    scroll: S
  }, I = cR(P), A = p.useRef(), $ = (H) => {
    A.current = H.target === H.currentTarget;
  }, j = (H) => {
    x && x(H), A.current && (A.current = null, b && b(H, "backdropClick"));
  }, v = $r(l), O = p.useMemo(() => ({
    titleId: v
  }), [v]), R = {
    slots: w,
    slotProps: E
  }, [L, N] = ve("root", {
    elementType: uR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: R,
    ownerState: P,
    className: Z(I.root, u),
    ref: n
  }), [M, z] = ve("backdrop", {
    elementType: aR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: R,
    ownerState: P,
    className: I.backdrop
  }), [B, U] = ve("paper", {
    elementType: fR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: R,
    ownerState: P,
    className: I.paper,
    additionalProps: {
      elevation: 24,
      role: h,
      "aria-describedby": s,
      "aria-labelledby": v,
      "aria-modal": a,
      tabIndex: -1,
      [lf]: ""
    }
  }), [D, Q] = ve("container", {
    elementType: dR,
    externalForwardedProps: R,
    ownerState: P,
    className: I.container
  }), [X, G] = ve("transition", {
    elementType: wx,
    externalForwardedProps: R,
    ownerState: P,
    additionalProps: {
      appear: !0,
      in: C,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ d.jsx(L, {
    closeAfterTransition: !0,
    slots: {
      backdrop: M
    },
    slotProps: {
      backdrop: {
        transitionDuration: k,
        ...z
      }
    },
    onClose: b,
    open: C,
    onClick: j,
    ...N,
    ...T,
    children: /* @__PURE__ */ d.jsx(X, {
      ...G,
      children: /* @__PURE__ */ d.jsx(D, {
        onMouseDown: $,
        ...Q,
        children: /* @__PURE__ */ d.jsx(B, {
          as: g,
          ...U,
          children: /* @__PURE__ */ d.jsx(Ix.Provider, {
            value: O,
            children: c
          })
        })
      })
    })
  });
});
function pR(e) {
  return ue("MuiDialogActions", e);
}
se("MuiDialogActions", ["root", "spacing"]);
const mR = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return de({
    root: ["root", !n && "spacing"]
  }, pR, t);
}, hR = V("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), Uu = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, l = {
    ...r,
    disableSpacing: i
  }, a = mR(l);
  return /* @__PURE__ */ d.jsx(hR, {
    className: Z(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function gR(e) {
  return ue("MuiDialogContent", e);
}
se("MuiDialogContent", ["root", "dividers"]);
function yR(e) {
  return ue("MuiDialogTitle", e);
}
const vR = se("MuiDialogTitle", ["root"]), xR = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return de({
    root: ["root", n && "dividers"]
  }, gR, t);
}, SR = V("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(ge(({
  theme: e
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: t
    }) => t.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(e.vars || e).palette.divider}`,
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dividers,
    style: {
      [`.${vR.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Vu = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, l = {
    ...r,
    dividers: i
  }, a = xR(l);
  return /* @__PURE__ */ d.jsx(SR, {
    className: Z(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), bR = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, yR, t);
}, wR = V(Fe, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Hu = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = bR(l), {
    titleId: c = i
  } = p.useContext(Ix);
  return /* @__PURE__ */ d.jsx(wR, {
    component: "h2",
    className: Z(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? c,
    ...s
  });
}), pg = se("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function Mx(e) {
  return ue("MuiSelect", e);
}
const wo = se("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), CR = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: l
  } = e, a = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${q(i)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, c = de(a, P2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...c
  };
}, kR = V(Qc, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Gc(e, t), !n.disableUnderline && t.underline];
  }
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    ...at(e, "background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${po.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${po.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          ...at(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${po.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${po.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline) : n}`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          ...at(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${po.disabled}, .${po.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${po.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Kt()).map(([s]) => ({
      props: {
        disableUnderline: !1,
        color: s
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[s]?.main}`
        }
      }
    })), {
      props: ({
        ownerState: s
      }) => s.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.endAdornment,
      style: {
        // use CSS variable to keep specificity
        "--_trailingPad": "12px",
        paddingRight: "var(--_trailingPad)",
        [`&.${wo.root}`]: {
          "--_trailingPad": "0px"
        }
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: s,
        size: l
      }) => s.multiline && l === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel && s.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), ER = V(qc, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Xc
})(ge(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  "&:-webkit-autofill": {
    ...!e.vars && {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff"
    },
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
    ...e.vars && e.applyStyles("dark", {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    })
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), Vp = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: o = !1,
    fullWidth: i = !1,
    hiddenLabel: s,
    // declare here to prevent spreading to DOM
    inputComponent: l = "input",
    multiline: a = !1,
    notched: c,
    // declare here to prevent spreading to DOM
    slotProps: u,
    slots: m = {},
    type: y = "text",
    ...f
  } = r, x = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: y
  }, b = CR(r), C = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, g = u ? $t(C, u) : C, h = m.root ?? kR, S = m.input ?? ER;
  return /* @__PURE__ */ d.jsx(jp, {
    slots: {
      root: h,
      input: S
    },
    slotProps: g,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    ref: n,
    type: y,
    ...f,
    classes: b
  });
});
Vp.muiName = "Input";
function TR(e) {
  return ue("MuiFormControl", e);
}
se("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const PR = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${q(n)}`, r && "fullWidth"]
  };
  return de(o, TR, t);
}, RR = V("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${q(n.margin)}`], n.fullWidth && t.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), IR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: l = "div",
    disabled: a = !1,
    error: c = !1,
    focused: u,
    fullWidth: m = !1,
    hiddenLabel: y = !1,
    margin: f = "none",
    required: x = !1,
    size: b = "medium",
    variant: C = "outlined",
    ...g
  } = r, h = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    error: c,
    fullWidth: m,
    hiddenLabel: y,
    margin: f,
    required: x,
    size: b,
    variant: C
  }, S = PR(h), [w, E] = p.useState(() => {
    let R = !1;
    return o && p.Children.forEach(o, (L) => {
      if (!Fu(L, ["Input", "Select"]))
        return;
      const N = Fu(L, ["Select"]) ? L.props.input : L;
      N && S2(N.props) && (R = !0);
    }), R;
  }), [k, T] = p.useState(() => {
    let R = !1;
    return o && p.Children.forEach(o, (L) => {
      Fu(L, ["Input", "Select"]) && (La(L.props, !0) || La(L.props.inputProps, !0)) && (R = !0);
    }), R;
  }), [P, I] = p.useState(!1);
  a && P && I(!1);
  const A = u !== void 0 && !a ? u : P;
  let $;
  p.useRef(!1);
  const j = p.useCallback(() => {
    T(!0);
  }, []), v = p.useCallback(() => {
    T(!1);
  }, []), O = p.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: c,
    filled: k,
    focused: A,
    fullWidth: m,
    hiddenLabel: y,
    size: b,
    onBlur: () => {
      I(!1);
    },
    onFocus: () => {
      I(!0);
    },
    onEmpty: v,
    onFilled: j,
    registerEffect: $,
    required: x,
    variant: C
  }), [w, s, a, c, k, A, m, y, $, v, j, x, b, C]);
  return /* @__PURE__ */ d.jsx(ll.Provider, {
    value: O,
    children: /* @__PURE__ */ d.jsx(RR, {
      as: l,
      ownerState: h,
      className: Z(S.root, i),
      ref: n,
      ...g,
      children: o
    })
  });
}), MR = (e) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: r,
    error: o,
    required: i
  } = e, s = {
    root: ["root", n && "disabled", `labelPlacement${q(r)}`, o && "error", i && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", o && "error"]
  };
  return de(s, R2, t);
}, $R = V("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ls.label}`]: t.label
    }, t.root, t[`labelPlacement${q(n.labelPlacement)}`]];
  }
})(ge(({
  theme: e
}) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${ls.disabled}`]: {
    cursor: "default"
  },
  [`& .${ls.label}`]: {
    [`&.${ls.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  },
  variants: [{
    props: {
      labelPlacement: "start"
    },
    style: {
      flexDirection: "row-reverse",
      marginRight: -11
    }
  }, {
    props: {
      labelPlacement: "top"
    },
    style: {
      flexDirection: "column-reverse"
    }
  }, {
    props: {
      labelPlacement: "bottom"
    },
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      labelPlacement: t
    }) => t === "start" || t === "top" || t === "bottom",
    style: {
      marginLeft: 16
      // used for row presentation of radio/checkbox
    }
  }]
}))), OR = V("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(ge(({
  theme: e
}) => ({
  [`&.${ls.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), mg = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: o,
    className: i,
    control: s,
    disabled: l,
    disableTypography: a,
    inputRef: c,
    label: u,
    labelPlacement: m = "end",
    name: y,
    onChange: f,
    required: x,
    slots: b = {},
    slotProps: C = {},
    value: g,
    ...h
  } = r, [S, w] = _o({
    props: r,
    states: ["error"]
  }), E = l ?? s.props.disabled ?? w?.disabled, k = x ?? s.props.required, T = {
    disabled: E,
    required: k
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((O) => {
    typeof s.props[O] > "u" && typeof r[O] < "u" && (T[O] = r[O]);
  });
  const P = {
    ...r,
    disabled: E,
    labelPlacement: m,
    required: k,
    error: S.error
  }, I = MR(P), A = {
    slots: b,
    slotProps: C
  }, [$, j] = ve("typography", {
    elementType: Fe,
    externalForwardedProps: A,
    ownerState: P
  });
  let v = u;
  return v != null && v.type !== Fe && !a && (v = /* @__PURE__ */ d.jsx($, {
    component: "span",
    ...j,
    className: Z(I.label, j?.className),
    children: v
  })), /* @__PURE__ */ d.jsxs($R, {
    className: Z(I.root, i),
    ownerState: P,
    ref: n,
    ...h,
    children: [/* @__PURE__ */ p.cloneElement(s, T), k ? /* @__PURE__ */ d.jsxs("div", {
      children: [v, /* @__PURE__ */ d.jsxs(OR, {
        ownerState: P,
        "aria-hidden": !0,
        className: I.asterisk,
        children: [" ", "*"]
      })]
    }) : v]
  });
});
var hg;
const jR = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: i,
    filled: s,
    focused: l,
    required: a
  } = e, c = {
    root: ["root", o && "disabled", i && "error", r && `size${q(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return de(c, I2, t);
}, AR = V("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${q(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(ge(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${_h.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${_h.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), LR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: s = "p",
    disabled: l,
    error: a,
    filled: c,
    focused: u,
    margin: m,
    required: y,
    variant: f,
    ...x
  } = r, [b] = _o({
    props: r,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), C = {
    ...r,
    component: s,
    contained: b.variant === "filled" || b.variant === "outlined",
    variant: b.variant,
    size: b.size,
    disabled: b.disabled,
    error: b.error,
    filled: b.filled,
    focused: b.focused,
    required: b.required
  };
  delete C.ownerState;
  const g = jR(C);
  return /* @__PURE__ */ d.jsx(AR, {
    as: s,
    className: Z(g.root, i),
    ref: n,
    ...x,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      hg || (hg = /* @__PURE__ */ d.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), NR = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${q(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return de(a, M2, t);
}, zR = V("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(ge(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Kt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${ys.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${ys.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${ys.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), FR = V("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(ge(({
  theme: e
}) => ({
  [`&.${ys.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), BR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    color: s,
    component: l = "label",
    disabled: a,
    error: c,
    filled: u,
    focused: m,
    required: y,
    ...f
  } = r, [x] = _o({
    props: r,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), b = {
    ...r,
    color: x.color || "primary",
    component: l,
    disabled: x.disabled,
    error: x.error,
    filled: x.filled,
    focused: x.focused,
    required: x.required
  }, C = NR(b);
  return /* @__PURE__ */ d.jsxs(zR, {
    as: l,
    ownerState: b,
    className: Z(C.root, i),
    ref: n,
    ...f,
    children: [o, x.required && /* @__PURE__ */ d.jsxs(FR, {
      ownerState: b,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function bs(e) {
  return `scale(${e}, ${e ** 2})`;
}
const DR = {
  entering: {
    opacity: 1,
    transform: bs(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: bs(0.75)
  },
  exited: {
    opacity: 0,
    transform: bs(0.75)
  }
}, _R = {
  opacity: 0,
  transform: bs(0.75),
  visibility: "hidden"
}, Xs = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: c,
    onEntered: u,
    onEntering: m,
    onExit: y,
    onExited: f,
    onExiting: x,
    style: b,
    timeout: C = "auto",
    ...g
  } = t, h = p.useRef(null), S = so(), w = Zc(S.motion.reducedMotion, s), E = p.useRef(null), k = ut(E, Wo(i), n), T = Tn(E, m), P = Tn(E, (O, R) => {
    w.shouldReduceMotion || $p(O);
    const {
      duration: L,
      delay: N,
      easing: M
    } = Na({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    C === "auto" && !w.shouldReduceMotion ? (z = S.transitions.getAutoHeightDuration(O.clientHeight), h.current = z) : (z = L, h.current = null);
    const B = w.getTransitionTiming({
      duration: z,
      delay: N
    });
    O.style.transition = [S.transitions.create("opacity", {
      duration: B.duration,
      delay: B.delay
    }), S.transitions.create("transform", {
      duration: typeof B.duration == "string" ? B.duration : B.duration * 0.666,
      delay: B.delay,
      easing: M
    })].join(","), c && c(O, R);
  }), I = Tn(E, u), A = Tn(E, x), $ = Tn(E, (O) => {
    const {
      duration: R,
      delay: L,
      easing: N
    } = Na({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let M;
    C === "auto" && !w.shouldReduceMotion ? (M = S.transitions.getAutoHeightDuration(O.clientHeight), h.current = M) : (M = R, h.current = null);
    const z = w.getTransitionTiming({
      duration: M,
      delay: L
    });
    O.style.transition = [S.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), S.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: N
    })].join(","), O.style.opacity = 0, O.style.transform = bs(0.75), y && y(O);
  }), j = Tn(E, (O) => {
    O.style.transition = "", f && f(O);
  }), v = r ? (O) => {
    r(E.current, O);
  } : void 0;
  return /* @__PURE__ */ d.jsx(rx, {
    appear: o,
    in: a,
    nodeRef: E,
    onEnter: P,
    onEntered: I,
    onEntering: T,
    onExit: $,
    onExited: j,
    onExiting: A,
    addEndListener: v,
    getAutoTimeout: C === "auto" ? () => h.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...g,
    children: (O, {
      ownerState: R,
      ...L
    }) => {
      const N = tx(O, a, DR, _R, b, i.props.style);
      return /* @__PURE__ */ p.cloneElement(i, {
        style: N,
        ref: k,
        ...L
      });
    }
  });
});
Xs && (Xs.muiSupportAuto = !0);
function WR(e) {
  return ue("MuiInputLabel", e);
}
const UR = se("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), VR = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = de({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, $2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, HR = V(Qc, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Gc(e, t), !n.disableUnderline && t.underline];
  }
})(ge(({
  theme: e
}) => {
  let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (n = e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline)), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: r
      }) => r.formControl,
      style: {
        [`label + &, .${UR.root} + &`]: {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => !r.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          ...at(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Xi.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Xi.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${n}`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          ...at(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Xi.disabled}, .${Xi.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Xi.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Kt()).map(([r]) => ({
      props: {
        color: r,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    }))]
  };
})), KR = V(qc, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Xc
})({}), Hp = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: o = !1,
    fullWidth: i = !1,
    inputComponent: s = "input",
    multiline: l = !1,
    notched: a,
    // declare here to prevent spreading to DOM
    slotProps: c,
    slots: u = {},
    type: m = "text",
    ...y
  } = r, f = VR(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = c ? $t(c, b) : b, g = u.root ?? HR, h = u.input ?? KR;
  return /* @__PURE__ */ d.jsx(jp, {
    slots: {
      root: g,
      input: h
    },
    slotProps: C,
    fullWidth: i,
    inputComponent: s,
    multiline: l,
    ref: n,
    type: m,
    ...y,
    classes: f
  });
});
Hp.muiName = "Input";
function YR(e) {
  return ue("MuiInputAdornment", e);
}
const ai = se("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var gg;
const GR = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${q(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, XR = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: s
  } = e, l = {
    root: ["root", n && "disablePointerEvents", o && `position${q(o)}`, s, r && "hiddenLabel", i && `size${q(i)}`]
  };
  return de(l, YR, t);
}, QR = V("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: GR
})(ge(({
  theme: e
}) => ({
  display: "flex",
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active,
  variants: [{
    props: {
      variant: "filled"
    },
    style: {
      [`&.${ai.positionStart}&:not(.${ai.hiddenLabel})`]: {
        marginTop: 16
      }
    }
  }, {
    props: {
      position: "start"
    },
    style: {
      marginRight: 8
    }
  }, {
    props: {
      position: "end"
    },
    style: {
      marginLeft: 8
    }
  }, {
    props: {
      disablePointerEvents: !0
    },
    style: {
      pointerEvents: "none"
    }
  }]
}))), qR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: i,
    component: s = "div",
    disablePointerEvents: l = !1,
    disableTypography: a = !1,
    position: c,
    variant: u,
    ...m
  } = r, y = Z0() || {};
  let f = u;
  u && y.variant, y && !f && (f = y.variant);
  const x = {
    ...r,
    hiddenLabel: y.hiddenLabel,
    size: y.size,
    disablePointerEvents: l,
    position: c,
    variant: f
  }, b = XR(x);
  return /* @__PURE__ */ d.jsx(ll.Provider, {
    value: null,
    children: /* @__PURE__ */ d.jsx(QR, {
      as: s,
      ownerState: x,
      className: Z(b.root, i),
      ref: n,
      ...m,
      children: typeof o == "string" && !a ? /* @__PURE__ */ d.jsx(Fe, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ d.jsxs(p.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          gg || (gg = /* @__PURE__ */ d.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), ZR = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${q(r)}`, s],
    asterisk: [l && "asterisk"]
  }, c = de(a, WR, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...c
  };
}, JR = V(BR, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ys.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(ge(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input` small size style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      ...at(e, ["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "filled" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n,
      size: r
    }) => t === "filled" && n.shrink && r === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "outlined" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), eI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: l,
    className: a,
    ...c
  } = r, [u, m] = _o({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let y = s;
  typeof y > "u" && m && (y = m.filled || m.focused || m.adornedStart);
  const f = {
    ...r,
    disableAnimation: o,
    formControl: m,
    shrink: y,
    size: u.size,
    variant: u.variant,
    required: u.required,
    focused: u.focused
  }, x = ZR(f);
  return /* @__PURE__ */ d.jsx(JR, {
    "data-shrink": y,
    ref: n,
    className: Z(x.root, a),
    ...c,
    ownerState: f,
    classes: x
  });
}), af = /* @__PURE__ */ p.createContext({});
function tI(e) {
  return ue("MuiList", e);
}
se("MuiList", ["root", "padding", "dense", "subheader"]);
const nI = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return de({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, tI, t);
}, rI = V("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0,
      isolation: "isolate"
      // Prevent overlap with iOS overlay scrollbars.
    }
  }]
}), oI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: l = !1,
    disablePadding: a = !1,
    subheader: c,
    ...u
  } = r, m = p.useMemo(() => ({
    dense: l
  }), [l]), y = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, f = nI(y);
  return /* @__PURE__ */ d.jsx(af.Provider, {
    value: m,
    children: /* @__PURE__ */ d.jsxs(rI, {
      as: s,
      className: Z(f.root, i),
      ref: n,
      ownerState: y,
      ...u,
      children: [c, o]
    })
  });
}), yg = se("MuiListItemIcon", ["root", "alignItemsFlexStart"]), vg = se("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Kp = /* @__PURE__ */ p.createContext(void 0);
function $x() {
  const e = p.useContext(Kp);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const iI = Object.is;
function sI(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !iI(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const lI = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function Ox(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = ws,
    wrap: s = !0
  } = e, [l, a] = p.useState(t), [c, u] = p.useState(t);
  let m = l;
  t !== c && (u(t), t !== void 0 && t !== l && (m = t, a(t)));
  const y = p.useRef(null), f = p.useRef(/* @__PURE__ */ new Map()), [x, b] = p.useState(0), C = p.useMemo(() => cf(f.current), [x]), g = xg(m, C, i, n), h = p.useRef(g);
  h.current = g;
  const S = p.useCallback(() => {
    const j = cf(f.current), v = xg(h.current, j, i, n);
    return Nx(j, v);
  }, [n, i]), w = p.useCallback(() => f.current, []), E = Ze((j) => {
    const v = f.current.get(j.id);
    sI(v ?? null, j) || (f.current.set(j.id, j), b((O) => O + 1));
  }), k = Ze((j) => {
    f.current.delete(j) && b((v) => v + 1);
  }), T = Ze((j) => {
    a(j);
  }), P = p.useCallback((j) => h.current === j, []), I = p.useCallback((j, v, O, R) => {
    const L = Nl(f.current), N = Ax(L, j, v, O, R ?? i);
    return N ? (N.element?.focus(), a(N.id), N) : null;
  }, [i]), A = p.useCallback((j, v, O) => ({
    onFocus: (N) => {
      v?.(N);
      const M = Nl(f.current), z = Fx(M, N.target);
      z !== -1 && a(M[z].id);
    },
    onKeyDown: (N) => {
      if (O?.(N), N.defaultPrevented || N.altKey || N.shiftKey || N.ctrlKey || N.metaKey || !lI.includes(N.key))
        return;
      let M = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (M = "ArrowRight", z = "ArrowLeft");
      const B = Nl(f.current), U = or(mt(y.current)), D = U === y.current;
      let Q = Sg(B, U, h.current), X = "next";
      switch (N.key) {
        case M:
          X = "previous", N.preventDefault(), D && (Q = B.length);
          break;
        case z:
          N.preventDefault(), D && (Q = -1);
          break;
        case "Home":
          N.preventDefault(), Q = -1;
          break;
        case "End":
          N.preventDefault(), X = "previous", Q = B.length;
          break;
        default:
          return;
      }
      I(Q, X, s);
    },
    ref: dI(j, (N) => {
      y.current = N;
    })
  }), [I, o, r, s]), $ = p.useCallback((j) => {
    const v = Nl(f.current), O = or(mt(y.current)), L = O === y.current ? -1 : Sg(v, O, h.current);
    return I(L, "next", !0, j)?.id ?? null;
  }, [I]);
  return p.useMemo(() => ({
    activeItemId: g,
    focusNext: $,
    getActiveItem: S,
    getContainerProps: A,
    getItemMap: w,
    isItemActive: P,
    registerItem: E,
    setActiveItemId: T,
    unregisterItem: k
  }), [g, $, S, A, w, P, E, T, k]);
}
function jx(e) {
  const t = $x(), {
    activeItemId: n,
    registerItem: r,
    unregisterItem: o
  } = t, i = p.useRef(null), s = p.useMemo(() => ({
    disabled: e.disabled ?? !1,
    element: null,
    focusableWhenDisabled: e.focusableWhenDisabled ?? !1,
    id: e.id,
    selected: e.selected ?? !1,
    textValue: e.textValue
  }), [e.disabled, e.focusableWhenDisabled, e.id, e.selected, e.textValue]), l = p.useRef(s);
  l.current = s;
  const a = p.useCallback((u) => {
    if (i.current = u, u == null) {
      queueMicrotask(() => {
        i.current == null && o(e.id);
      });
      return;
    }
    r({
      ...l.current,
      element: u
    });
  }, [e.id, r, o]), c = ut(e.ref, a);
  return lt(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), lt(() => {
    const u = e.id;
    return () => {
      o(u);
    };
  }, [e.id, o]), {
    ref: c,
    tabIndex: n === e.id ? 0 : -1
  };
}
function xg(e, t, n, r) {
  return e != null ? aI(e, t, n) : cI(t, n, r);
}
function aI(e, t, n) {
  const r = zx(t, e);
  return r === -1 ? Lx(t, n) : n(t[r]) ? t[r].id : Ax(t, r, "next", !1, n)?.id ?? null;
}
function cI(e, t, n) {
  const r = n?.(e);
  if (r != null) {
    const o = Nx(e, r);
    if (o && t(o))
      return o.id;
  }
  return Lx(e, t);
}
function Sg(e, t, n) {
  if (t) {
    const r = Fx(e, t);
    if (r !== -1)
      return r;
  }
  return zx(e, n);
}
function Ax(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = bg(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const c = e[l];
    if (!c || !o(c))
      l = bg(l, i, n, r);
    else
      return c;
  }
  return null;
}
function Lx(e, t) {
  return e.find((n) => t(n))?.id ?? null;
}
function Nx(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function zx(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function Fx(e, t) {
  return t ? e.findIndex((n) => n.element === t || n.element?.contains(t)) : -1;
}
function cf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(uf).sort((o, i) => uI(o.element, i.element)), r = t.filter((o) => !uf(o));
  return [...n, ...r];
}
function Nl(e) {
  return cf(e).filter(uf);
}
function bg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function ws(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function uf(e) {
  return e.element != null && e.element.isConnected;
}
function uI(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function dI(...e) {
  return (t) => {
    e.forEach((n) => {
      ef(n ?? null, t);
    });
  };
}
function Bx(e, t) {
  if (t == null) {
    e.focus();
    return;
  }
  try {
    e.focus({
      focusVisible: t === "keyboard"
    });
  } catch {
    e.focus();
  }
}
function fI(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function pI(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function oa(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Dx = /* @__PURE__ */ p.createContext(null);
function _x() {
  return p.useContext(Dx);
}
const mI = Dx.Provider, Wx = /* @__PURE__ */ p.createContext(void 0);
function hI() {
  const e = p.useContext(Wx);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function gI(e) {
  const t = e?.element ?? e;
  if (!t)
    return "";
  if (e?.textValue !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function Ux(e, t) {
  if (t === void 0)
    return !0;
  let n = gI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function yI(e, t) {
  return Ux(e, t) ? ws(e) : !1;
}
function vI(e, t) {
  Bx(e, t);
}
const xI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: s,
    className: l,
    disabledItemsFocusable: a = !1,
    disableListWrap: c = !1,
    onKeyDown: u,
    variant: m = "selectedMenu",
    ...y
  } = t, f = p.useRef(null), x = p.useRef(!1), [b, C] = p.useState(!1), g = _x(), h = p.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), S = p.useCallback((R) => m === "selectedMenu" ? R.find((L) => L.selected && ws(L))?.id ?? R.find((L) => ws(L))?.id ?? null : R.find((L) => ws(L))?.id ?? null, [m]), w = Ox({
    activeItemId: void 0,
    getDefaultActiveItemId: S,
    orientation: "vertical",
    wrap: !c
  }), {
    activeItemId: E,
    focusNext: k,
    getActiveItem: T,
    getContainerProps: P,
    getItemMap: I
  } = w, A = Ze((R = !1) => {
    if (!f.current || !R && x.current)
      return null;
    if (i) {
      const L = T();
      if (L?.element) {
        const N = Array.from(I().values()).some((z) => z.selected), M = m === "menu" && N && !L.selected && g == null;
        return C(M), vI(L.element, g), x.current = !0, L.element;
      }
      return o ? (C(!1), f.current.focus(), f.current) : null;
    }
    return o ? (C(!1), f.current.focus(), x.current = !0, f.current) : (C(!1), null);
  });
  lt(() => {
    if (!o && !i) {
      x.current = !1, C(!1);
      return;
    }
    A();
  }, [E, i, o, A]), p.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (R, {
      direction: L
    }) => {
      const N = !f.current.style.width;
      if (R.clientHeight < f.current.clientHeight && N) {
        const M = Yn(R), z = Tx(M);
        if (z > 0) {
          const B = `${z}px`, U = L === "rtl" ? "paddingLeft" : "paddingRight", D = parseFloat(M.getComputedStyle(f.current)[U]) || 0;
          f.current.style[U] = `${D + z}px`, f.current.style.width = `calc(100% + ${B})`;
        }
      }
      return f.current;
    },
    focusInitialTarget: () => {
      if (!f.current)
        return null;
      const R = or(mt(f.current));
      return R && Io(f.current, R) ? R : A(!0);
    }
  }), [A]);
  const $ = P(void 0, y.onFocus), j = ut(f, $.ref, n), v = p.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: b,
    variant: m
  }), [a, b, m]), O = Ze((R) => {
    if (b && C(!1), (R.ctrlKey || R.metaKey || R.altKey) && u) {
      u(R);
      return;
    }
    if ($.onKeyDown(R), R.key.length === 1) {
      const N = h.current, M = R.key.toLowerCase(), z = performance.now();
      N.keys.length > 0 && (z - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && M !== N.keys[0] && (N.repeating = !1)), N.lastTime = z, N.keys.push(M);
      const B = or(mt(f.current)), U = B && !N.repeating && Ux(B, N);
      N.previousKeyMatched && (U || k((D) => yI(D, N)) != null) ? R.preventDefault() : N.previousKeyMatched = !1;
    }
    u && u(R);
  });
  return /* @__PURE__ */ d.jsx(oI, {
    role: "menu",
    ref: j,
    className: l,
    onKeyDown: O,
    tabIndex: -1,
    ...y,
    onFocus: $.onFocus,
    children: /* @__PURE__ */ d.jsx(Wx.Provider, {
      value: v,
      children: /* @__PURE__ */ d.jsx(Kp.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function SI(e) {
  return ue("MuiPopover", e);
}
se("MuiPopover", ["root", "paper"]);
function wg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Cg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function kg(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function zl(e) {
  return typeof e == "function" ? e() : e;
}
const bI = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"],
    paper: ["paper"]
  }, SI, t);
}, wI = V(Rx, {
  name: "MuiPopover",
  slot: "Root"
})({}), Vx = V(Pn, {
  name: "MuiPopover",
  slot: "Paper"
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), CI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: i,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: a = "anchorEl",
    children: c,
    className: u,
    container: m,
    disableAutoFocus: y = !1,
    elevation: f = 8,
    marginThreshold: x = 16,
    open: b,
    slots: C = {},
    slotProps: g = {},
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: S = "auto",
    disableScrollLock: w = !1,
    ...E
  } = r, k = p.useRef(), T = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: f,
    marginThreshold: x,
    transformOrigin: h,
    transitionDuration: S
  }, P = bI(T), I = p.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const W = zl(i), ae = (W && W.nodeType === 1 ? W : mt(k.current).body).getBoundingClientRect();
    return {
      top: ae.top + wg(ae, s.vertical),
      left: ae.left + Cg(ae, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), A = p.useCallback((W) => ({
    vertical: wg(W, h.vertical),
    horizontal: Cg(W, h.horizontal)
  }), [h.horizontal, h.vertical]), $ = p.useCallback((W) => {
    const re = {
      width: W.offsetWidth,
      height: W.offsetHeight
    }, ae = A(re);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: kg(ae)
      };
    const we = I();
    let Se = we.top - ae.vertical, ye = we.left - ae.horizontal;
    const ce = Se + re.height, ke = ye + re.width, Be = Yn(zl(i)), je = Be.innerHeight - x, Te = Be.innerWidth - x;
    if (x != null && Se < x) {
      const le = Se - x;
      Se -= le, ae.vertical += le;
    } else if (x != null && ce > je) {
      const le = ce - je;
      Se -= le, ae.vertical += le;
    }
    if (x != null && ye < x) {
      const le = ye - x;
      ye -= le, ae.horizontal += le;
    } else if (ke > Te) {
      const le = ke - Te;
      ye -= le, ae.horizontal += le;
    }
    return {
      top: `${Math.round(Se)}px`,
      left: `${Math.round(ye)}px`,
      transformOrigin: kg(ae)
    };
  }, [i, a, I, A, x]), [j, v] = p.useState(b), O = p.useCallback(() => {
    const W = k.current;
    if (!W)
      return;
    const re = $(W);
    re.top != null && W.style.setProperty("top", re.top), re.left != null && (W.style.left = re.left), W.style.transformOrigin = re.transformOrigin, v(!0);
  }, [$]);
  p.useEffect(() => (w && window.addEventListener("scroll", O), () => window.removeEventListener("scroll", O)), [i, w, O]);
  const R = () => {
    O();
  }, L = () => {
    v(!1);
  };
  p.useEffect(() => {
    b && O();
  }), p.useImperativeHandle(o, () => b ? {
    updatePosition: () => {
      O();
    }
  } : null, [b, O]), p.useEffect(() => {
    if (!b)
      return;
    const W = Yc(() => {
      O();
    }), re = Yn(zl(i));
    return re.addEventListener("resize", W), () => {
      W.clear(), re.removeEventListener("resize", W);
    };
  }, [i, b, O]);
  let N = S;
  const M = {
    slots: C,
    slotProps: g
  }, [z, B] = ve("transition", {
    elementType: Xs,
    externalForwardedProps: M,
    ownerState: T,
    getSlotProps: (W) => ({
      ...W,
      onEntering: (re, ae) => {
        W.onEntering?.(re, ae), R();
      },
      onExited: (re) => {
        W.onExited?.(re), L();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  S === "auto" && !z.muiSupportAuto && (N = void 0);
  const U = m || (i ? mt(zl(i)).body : void 0), [D, {
    slots: Q,
    slotProps: X,
    ...G
  }] = ve("root", {
    ref: n,
    elementType: wI,
    externalForwardedProps: {
      ...M,
      ...E
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: C.backdrop
      },
      slotProps: {
        backdrop: Lp(typeof g.backdrop == "function" ? g.backdrop(T) : g.backdrop, {
          invisible: !0
        })
      },
      container: U,
      open: b
    },
    ownerState: T,
    className: Z(P.root, u)
  }), [H, he] = ve("paper", {
    ref: k,
    className: P.paper,
    elementType: Vx,
    externalForwardedProps: M,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: f,
      style: j ? void 0 : {
        opacity: 0
      }
    },
    ownerState: T
  });
  return /* @__PURE__ */ d.jsx(D, {
    ...G,
    ...!Aa(D) && {
      slots: Q,
      slotProps: X,
      disableAutoFocus: y,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ d.jsx(z, {
      ...B,
      timeout: N,
      children: /* @__PURE__ */ d.jsx(H, {
        ...he,
        children: c
      })
    })
  });
});
function kI(e) {
  return ue("MuiMenu", e);
}
se("MuiMenu", ["root", "paper", "list"]);
const EI = {
  vertical: "top",
  horizontal: "right"
}, TI = {
  vertical: "top",
  horizontal: "left"
}, PI = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, kI, t);
}, RI = V(CI, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), II = V(Vx, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), MI = V(xI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), $I = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: i,
    className: s,
    disableAutoFocusItem: l = !1,
    onClose: a,
    open: c,
    PopoverClasses: u,
    transitionDuration: m = "auto",
    variant: y = "selectedMenu",
    slots: f = {},
    slotProps: x = {},
    ...b
  } = r, C = Vc(), g = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: m,
    variant: y
  }, h = PI(g), S = o && c, w = S && !l, E = p.useRef(null), k = (R, L) => {
    E.current && (E.current.adjustStyleForScrollbar(R, {
      direction: C ? "rtl" : "ltr"
    }), S && E.current.focusInitialTarget?.());
  }, T = (R) => {
    R.key === "Tab" && (R.preventDefault(), a && a(R, "tabKeyDown"));
  }, P = {
    slots: f,
    slotProps: x
  }, I = ji({
    elementType: f.root,
    externalSlotProps: x.root,
    ownerState: g,
    className: [h.root, s]
  }), [A, $] = ve("paper", {
    className: h.paper,
    elementType: II,
    externalForwardedProps: P,
    shouldForwardComponentProp: !0,
    ownerState: g
  }), [j, v] = ve("list", {
    className: h.list,
    elementType: MI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    getSlotProps: (R) => ({
      ...R,
      onKeyDown: (L) => {
        T(L), R.onKeyDown?.(L);
      }
    }),
    ownerState: g
  }), O = typeof x.transition == "function" ? x.transition(g) : x.transition;
  return /* @__PURE__ */ d.jsx(
    RI,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? EI : TI,
      slots: {
        root: f.root,
        paper: A,
        backdrop: f.backdrop,
        transition: f.transition
      },
      slotProps: {
        root: I,
        paper: $,
        backdrop: typeof x.backdrop == "function" ? x.backdrop(g) : x.backdrop,
        transition: {
          ...O,
          onEntering: (...R) => {
            k(...R), O?.onEntering?.(...R);
          }
        }
      },
      open: c,
      ref: n,
      transitionDuration: m,
      ownerState: g,
      ...b,
      classes: u,
      children: /* @__PURE__ */ d.jsx(j, {
        actions: E,
        autoFocus: S,
        autoFocusItem: w,
        variant: y,
        ...v,
        children: i
      })
    }
  );
}), OI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, jI = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = de({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, O2, s);
  return {
    ...s,
    ...a
  };
}, AI = V(no, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: OI
})(ge(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Qi.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    ...!e.focusVisible && {
      [`&.${Qi.focusVisible}`]: {
        backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
      }
    }
  },
  [`&.${Qi.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  ...e.focusVisible ? (
    // Inset the ring: a scrolling Menu/MenuList clips an outset ring.
    K0(1)
  ) : {
    [`&.${Qi.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    }
  },
  [`&.${Qi.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${pg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${pg.inset}`]: {
    marginLeft: 52
  },
  [`& .${vg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${vg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${yg.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${yg.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), an = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: i = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: a = !1,
    focusVisibleClassName: c,
    role: u = "menuitem",
    tabIndex: m,
    className: y,
    ...f
  } = r, b = u === "menuitemcheckbox" || u === "menuitemradio" ? !!r.selected : void 0, C = _x(), g = p.useContext(af), h = p.useMemo(() => ({
    dense: s || g.dense || !1,
    disableGutters: a
  }), [g.dense, s, a]), S = hI(), w = $r(), E = S.suppressInitialFocusVisible, k = S.itemsFocusableWhenDisabled, T = p.useRef(null);
  lt(() => {
    o && T.current && Bx(T.current, C);
  }, [o]);
  const P = {
    ...r,
    dense: h.dense,
    divider: l,
    disableGutters: a
  }, I = jI(r), {
    root: A,
    ...$
  } = I, j = jx({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), v = ut(T, j.ref);
  let O;
  return m !== void 0 ? O = m : S.variant === "selectedMenu" ? O = j.tabIndex : (!r.disabled || k) && (O = -1), /* @__PURE__ */ d.jsx(af.Provider, {
    value: h,
    children: /* @__PURE__ */ d.jsx(AI, {
      ref: v,
      role: u,
      "aria-checked": b,
      tabIndex: O,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: E,
      focusVisibleClassName: Z(I.focusVisible, c),
      className: Z(I.root, y),
      ...f,
      ownerState: P,
      classes: $
    })
  });
}), LI = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${q(n)}`, i && "iconOpen", r && "disabled"]
  };
  return de(l, j2, t);
}, Hx = V("select", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${Ap.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${ai.root}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "calc(var(--_caret, 24px) + (var(--_endAdornment, 28px) - 1.5rem)/2)"
    // 1.5rem is the default icon size
  },
  [`.${un.root}:has(> &)`]: {
    "--_endAdornment": "0px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      [`.${un.root}:has(> &)`]: {
        "--_caret": "24px"
      },
      [`.${un.root}:has(> & ~ .${ai.root})`]: {
        "--_endAdornment": "28px"
      },
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: "calc(var(--_caret, 24px) + var(--_endAdornment, 0px))",
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      [`.${un.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${un.root}:has(> & ~ .${ai.root})`]: {
        "--_endAdornment": "28px"
      },
      "&&&": {
        paddingRight: "calc(var(--_caret, 32px) + var(--_endAdornment, 0px))"
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      [`.${un.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${un.root}:has(> & ~ .${ai.root})`]: {
        "--_endAdornment": "28px"
      },
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: "calc(var(--_caret, 32px) + var(--_endAdornment, 0px))"
      }
    }
  }]
})), NI = V(Hx, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Qt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Ap.multiple}`]: t.multiple
    }];
  }
})({}), Kx = V("svg", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${Ap.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), zI = V(Kx, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${q(n.variant)}`], n.open && t.iconOpen];
  }
})({}), FI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: s,
    inputRef: l,
    variant: a = "standard",
    ...c
  } = t, u = {
    ...t,
    disabled: o,
    variant: a,
    error: i
  }, m = LI(u);
  return /* @__PURE__ */ d.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ d.jsx(NI, {
      ownerState: u,
      className: Z(m.select, r),
      disabled: o,
      ref: l || n,
      ...c
    }), t.multiple ? null : /* @__PURE__ */ d.jsx(zI, {
      as: s,
      ownerState: u,
      className: m.icon
    })]
  });
});
var Eg;
const BI = V("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Qt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), DI = V("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Qt
})(ge(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      ...at(e, "width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      ...at(e, "max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      ...at(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function _I(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: o,
    notched: i,
    ...s
  } = e, l = o != null && o !== "", a = {
    ...e,
    notched: i,
    withLabel: l
  };
  return /* @__PURE__ */ d.jsx(BI, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ d.jsx(DI, {
      ownerState: a,
      children: l ? /* @__PURE__ */ d.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Eg || (Eg = /* @__PURE__ */ d.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const WI = (e) => {
  const {
    classes: t
  } = e, r = de({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, A2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, UI = V(Qc, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Gc
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Jn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Jn.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${Jn.focused} .${Jn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Kt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Jn.focused} .${Jn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${Jn.error} .${Jn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Jn.disabled} .${Jn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.endAdornment,
      style: {
        // use CSS variable to keep specificity
        "--_trailingPad": "14px",
        paddingRight: "var(--_trailingPad)",
        [`&.${wo.root}`]: {
          "--_trailingPad": "0px"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: n,
        size: r
      }) => n.multiline && r === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), VI = V(_I, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), HI = V(qc, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Xc
})(ge(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  "&:-webkit-autofill": {
    ...!e.vars && {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff"
    },
    borderRadius: "inherit",
    ...e.vars && e.applyStyles("dark", {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    })
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), Yp = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    fullWidth: o = !1,
    inputComponent: i = "input",
    label: s,
    multiline: l = !1,
    notched: a,
    slots: c = {},
    slotProps: u = {},
    type: m = "text",
    ...y
  } = r, f = WI(r), [x, b] = _o({
    props: r,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...r,
    color: x.color || "primary",
    disabled: x.disabled,
    error: x.error,
    focused: x.focused,
    formControl: b,
    fullWidth: o,
    hiddenLabel: x.hiddenLabel,
    multiline: l,
    size: x.size,
    type: m
  }, g = c.root ?? UI, h = c.input ?? HI, [S, w] = ve("notchedOutline", {
    elementType: VI,
    className: f.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: c,
      slotProps: u
    },
    additionalProps: {
      label: s != null && s !== "" && x.required ? /* @__PURE__ */ d.jsxs(p.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ d.jsx(jp, {
    slots: {
      root: g,
      input: h
    },
    slotProps: u,
    renderSuffix: (E) => /* @__PURE__ */ d.jsx(S, {
      ...w,
      notched: typeof a < "u" ? a : !!(E.startAdornment || E.filled || E.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: l,
    ref: n,
    type: m,
    ...y,
    classes: {
      ...f,
      notchedOutline: null
    }
  });
});
Yp.muiName = "Input";
function KI(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function Yx(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return p.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ p.isValidElement(n) && (t += Yx(n.props.children));
  }), t;
}
function YI(e, t, n = 0) {
  if (e.length === 0)
    return -1;
  const r = (n % e.length + e.length) % e.length;
  for (let o = 0; o < e.length; o += 1) {
    const i = (r + o) % e.length;
    if (e[i].label.startsWith(t))
      return i;
  }
  return -1;
}
function GI(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function XI(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ p.isValidElement(i) || !KI(i) || i.props.disabled)
      continue;
    const s = Yx(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && oa(t, i.props.value) && (r = n.length), n.push({
      child: i,
      label: s,
      value: i.props.value
    }));
  }
  return {
    options: n,
    selectedIndex: r
  };
}
var Tg;
const Fl = 2, QI = 400, Pg = 200, qI = 750, go = " ", ZI = "ArrowUp", JI = "ArrowDown", eM = "Enter";
function Rg(e, t) {
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || e.target?.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Fl && e.clientX <= r.right + Fl && e.clientY >= r.top - Fl && e.clientY <= r.bottom + Fl;
}
const tM = V(Hx, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${wo.select}`]: t.select
      },
      {
        [`&.${wo.select}`]: t[n.variant]
      },
      {
        [`&.${wo.error}`]: t.error
      },
      {
        [`&.${wo.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${wo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), nM = V(Kx, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), rM = V("input", {
  shouldForwardProp: (e) => J0(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput"
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
}), oM = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e;
  return de({
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, Mx, t);
}, iM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: c,
    defaultValue: u,
    disabled: m,
    displayEmpty: y,
    error: f = !1,
    IconComponent: x,
    inputRef: b,
    labelId: C,
    MenuProps: g = {},
    multiple: h,
    name: S,
    onBlur: w,
    onChange: E,
    onClose: k,
    onFocus: T,
    // eslint-disable-next-line react/prop-types
    onKeyDown: P,
    // eslint-disable-next-line react/prop-types
    onMouseDown: I,
    onOpen: A,
    open: $,
    readOnly: j,
    renderValue: v,
    required: O,
    SelectDisplayProps: R = {},
    tabIndex: L,
    // catching `type` from Input which makes no sense for SelectInput
    type: N,
    value: M,
    variant: z = "standard",
    ...B
  } = t, [U, D] = Fa({
    controlled: M,
    default: u,
    name: "Select"
  }), [Q, X] = Fa({
    controlled: $,
    default: c,
    name: "Select"
  }), G = p.useRef(null), H = p.useRef(null), he = p.useRef(null), W = p.useRef(!1), re = p.useRef(!1), ae = p.useRef(null), we = p.useRef(!1), Se = p.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ye = p.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), ce = ir(), ke = ir(), Be = ir(), [je, Te] = p.useState(null), {
    current: le
  } = p.useRef($ != null), [Ie, Ge] = p.useState(), [Xe, Ve] = p.useState(null), ht = ut(n, b), ft = p.useCallback((Y) => {
    H.current = Y, Y && Te(Y);
  }, []), be = je?.parentNode;
  p.useImperativeHandle(ht, () => ({
    focus: () => {
      H.current.focus();
    },
    node: G.current,
    value: U
  }), [U]);
  const ie = je !== null && Q, fe = p.useCallback(() => {
    Be.clear(), ye.current.buffer = "", ye.current.previousSearchIndex = null, ye.current.matchedIndex = null;
  }, [Be]);
  lt(() => {
    W.current = ie, ie && fe();
  }, [ie, fe]);
  const Ne = p.useCallback(() => {
    ce.clear(), ke.clear();
  }, [ce, ke]), ee = p.useCallback(() => {
    Ne(), we.current = !1, Se.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [Ne]), xe = p.useCallback(() => {
    ae.current && (ae.current(), ae.current = null);
  }, []);
  p.useEffect(() => {
    ie || (ee(), xe());
  }, [ie, ee, xe]), p.useEffect(() => () => {
    ee(), xe(), fe();
  }, [ee, xe, fe]), p.useEffect(() => {
    if (!ie || !be || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      Ge(be.clientWidth);
    });
    return Y.observe(be), () => {
      Y.disconnect();
    };
  }, [ie, be, s]), p.useEffect(() => {
    c && Q && je && !le && (Ge(s ? null : be.clientWidth), H.current.focus());
  }, [je, s]), p.useEffect(() => {
    i && H.current.focus();
  }, [i]), p.useEffect(() => {
    if (!C)
      return;
    const Y = mt(H.current).getElementById(C);
    if (Y) {
      const ne = () => {
        getSelection().isCollapsed && H.current.focus();
      };
      return Y.addEventListener("click", ne), () => {
        Y.removeEventListener("click", ne);
      };
    }
  }, [C]);
  const rt = Ze((Y, ne) => {
    Y || (ee(), xe()), Y ? (fe(), Ve(fI(ne)), A && A(ne)) : (Ve(null), k && k(ne)), le || (W.current = Y, Ge(s ? null : be.clientWidth), X(Y));
  }), jt = () => {
    ee(), re.current ? ke.start(Pg, () => {
      Se.current.allowUnselectedMouseUp = !0, ce.start(Pg, () => {
        Se.current.allowSelectedMouseUp = !0;
      });
    }) : ce.start(QI, () => {
      Se.current.allowSelectedMouseUp = !0, Se.current.allowUnselectedMouseUp = !0;
    });
  }, qt = (Y) => {
    if (I?.(Y), Y.button !== 0 || (Y.preventDefault(), !H.current))
      return;
    H.current.focus();
    const ne = mt(Y.currentTarget);
    jt(), xe();
    const $e = (Zt) => {
      ae.current = null, H.current && (Rg(Zt, H.current) || Rg(Zt, he.current) || !W.current && le || rt(!1, Zt));
    };
    ne.addEventListener("mouseup", $e, {
      capture: !0,
      once: !0
    }), ae.current = () => {
      ne.removeEventListener("mouseup", $e, !0);
    }, rt(!0, Y);
  }, Pe = (Y) => {
    rt(!1, Y);
  }, Sn = p.Children.toArray(l), ao = (Y) => {
    const ne = Sn.find(($e) => $e.props.value === Y.target.value);
    ne !== void 0 && (D(ne.props.value), E && E(Y, ne));
  }, Gn = (Y, ne, $e) => {
    if (D($e), E) {
      const Zt = Y.nativeEvent || Y, gr = new Zt.constructor(Zt.type, Zt);
      Object.defineProperty(gr, "target", {
        writable: !0,
        value: {
          value: $e,
          name: S
        }
      }), E(gr, ne);
    }
  }, fr = (Y) => (ne) => {
    we.current = !1;
    let $e;
    if (ne.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        $e = Array.isArray(U) ? U.slice() : [];
        const Zt = U.indexOf(Y.props.value);
        Zt === -1 ? $e.push(Y.props.value) : $e.splice(Zt, 1);
      } else
        $e = Y.props.value;
      Y.props.onClick && Y.props.onClick(ne), U !== $e && Gn(ne, Y, $e), h || rt(!1, ne);
    }
  }, Ar = (Y, ne) => ($e) => {
    if (Y.props.onMouseUp?.($e), we.current) {
      we.current = !1;
      return;
    }
    const Zt = !Se.current.allowSelectedMouseUp && ne, gr = !Se.current.allowUnselectedMouseUp && !ne;
    Zt || gr || $e.currentTarget.click();
  }, pr = (Y) => {
    const ne = ye.current, $e = ne.buffer !== "";
    if (ie || h || m || Y.defaultPrevented || Y.nativeEvent?.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === go && !$e)
      return !1;
    Y.key === go && Y.preventDefault();
    const Zt = ne.buffer === "", {
      options: gr,
      selectedIndex: qx
    } = XI(Sn, U);
    if (gr.length === 0)
      return Y.key !== go && fe(), !0;
    Zt && (ne.previousSearchIndex = qx);
    const nu = Y.key.toLowerCase();
    ne.buffer === nu && GI(gr, nu) && (ne.buffer = "", ne.previousSearchIndex = ne.matchedIndex), ne.buffer += nu, Be.start(qI, fe);
    const ru = YI(gr, ne.buffer, (ne.previousSearchIndex ?? -1) + 1);
    if (ru !== -1) {
      const ou = gr[ru];
      return ne.matchedIndex = ru, oa(U, ou.value) || Gn(Y, ou.child, ou.value), !0;
    }
    return Y.key !== go && fe(), !0;
  }, Uo = (Y) => {
    if (!j) {
      const ne = pr(Y), $e = Y.key === go || Y.key === ZI || Y.key === JI || Y.key === eM;
      !ne && $e && (Y.preventDefault(), rt(!0, Y)), P?.(Y);
    }
  }, pe = (Y) => {
    fe(), !ie && w && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: U,
        name: S
      }
    }), w(Y));
  }, Qe = (Y) => (ne) => {
    Y?.props?.onKeyDown?.(ne), ne.key === go && ne.target === ne.currentTarget && !ne.defaultPrevented && (ne.preventDefault(), ne.repeat || ne.currentTarget.click());
  };
  delete B["aria-invalid"];
  let vt, co;
  const Xn = [];
  let _ = !1, Ee = !1;
  (La({
    value: U
  }) || y) && (v ? vt = v(U) : _ = !0);
  const Tt = Sn.map((Y) => {
    if (!/* @__PURE__ */ p.isValidElement(Y))
      return null;
    let ne;
    if (h) {
      if (!Array.isArray(U))
        throw new Error(Mr(2));
      ne = U.some(($e) => oa($e, Y.props.value)), ne && _ && Xn.push(Y.props.children);
    } else
      ne = oa(U, Y.props.value), ne && _ && (co = Y.props.children);
    return ne && (Ee = !0), /* @__PURE__ */ p.cloneElement(Y, {
      "aria-selected": ne ? "true" : "false",
      onMouseDown: ($e) => {
        we.current = !0, Y.props.onMouseDown?.($e);
      },
      onPointerDown: ($e) => {
        we.current = !0, Y.props.onPointerDown?.($e);
      },
      onClick: fr(Y),
      onMouseUp: Ar(Y, ne),
      onKeyUp: ($e) => {
        $e.key === go && $e.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp($e);
      },
      onKeyDown: Qe(Y),
      role: "option",
      selected: ne,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  lt(() => {
    re.current = Ee, !ie && !h && !Ee && fe();
  }, [Ee, h, ie, fe]), _ && (h ? Xn.length === 0 ? vt = null : vt = Xn.reduce((Y, ne, $e) => (Y.push(ne), $e < Xn.length - 1 && Y.push(", "), Y), []) : vt = co);
  let mr = Ie;
  !s && le && je && (mr = be.clientWidth);
  let Fi;
  typeof L < "u" ? Fi = L : Fi = m ? null : 0;
  const oe = R.id || (S ? `mui-component-select-${S}` : void 0), te = {
    ...t,
    variant: z,
    value: U,
    open: ie,
    error: f
  }, Me = oM(te), Re = typeof g.slotProps?.paper == "function" ? g.slotProps.paper(te) : g.slotProps?.paper, Ct = ut(Re?.ref, he), hr = typeof g.slotProps?.list == "function" ? g.slotProps.list(te) : g.slotProps?.list, Qn = $r(), uo = $r();
  return /* @__PURE__ */ d.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ d.jsx(tM, {
      as: "div",
      ref: ft,
      tabIndex: Fi,
      role: "combobox",
      "aria-controls": ie ? Qn : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": ie ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": j ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": O ? "true" : void 0,
      "aria-invalid": f ? "true" : void 0,
      onKeyDown: Uo,
      onMouseDown: m || j ? null : qt,
      onBlur: pe,
      onFocus: T,
      ...R,
      ownerState: te,
      className: Z(R.className, Me.select, a),
      id: oe,
      children: pI(vt) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Tg || (Tg = /* @__PURE__ */ d.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : vt
    }), /* @__PURE__ */ d.jsx(rM, {
      "aria-invalid": f,
      value: Array.isArray(U) ? U.join(",") : U,
      name: S,
      ref: G,
      "aria-hidden": !0,
      onChange: ao,
      tabIndex: -1,
      disabled: m,
      readOnly: j,
      className: Me.nativeInput,
      autoFocus: i,
      required: O,
      ...B,
      id: B.id ?? uo,
      ownerState: te
    }), /* @__PURE__ */ d.jsx(nM, {
      as: x,
      className: Me.icon,
      ownerState: te
    }), /* @__PURE__ */ d.jsx(mI, {
      value: Xe,
      children: /* @__PURE__ */ d.jsx($I, {
        id: `menu-${S || ""}`,
        anchorEl: be,
        open: ie,
        onClose: Pe,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        ...g,
        slotProps: {
          ...g.slotProps,
          list: {
            "aria-labelledby": C,
            role: "listbox",
            "aria-multiselectable": h ? "true" : void 0,
            disableListWrap: !0,
            id: Qn,
            ...hr
          },
          paper: {
            ...Re,
            ref: Ct,
            style: {
              minWidth: mr,
              ...Re?.style
            }
          }
        },
        children: Tt
      })
    })]
  });
}), sM = (e) => {
  const {
    classes: t
  } = e, r = de({
    root: ["root"]
  }, Mx, t);
  return {
    ...t,
    ...r
  };
}, Gp = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Qt(e) && e !== "variant"
}, lM = V(Hp, Gp)(""), aM = V(Yp, Gp)(""), cM = V(Vp, Gp)(""), ci = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: c = !1,
    IconComponent: u = lP,
    id: m,
    input: y,
    inputProps: f,
    label: x,
    labelId: b,
    MenuProps: C,
    multiple: g = !1,
    native: h = !1,
    onClose: S,
    onOpen: w,
    open: E,
    renderValue: k,
    SelectDisplayProps: T,
    variant: P = "outlined",
    ...I
  } = r, A = h ? FI : iM, [$] = _o({
    props: r,
    states: ["variant", "error"]
  }), j = $.variant || P, v = {
    ...r,
    variant: j,
    classes: s
  }, O = sM(v), {
    root: R,
    ...L
  } = O, N = y || {
    standard: /* @__PURE__ */ d.jsx(lM, {
      ownerState: v
    }),
    outlined: /* @__PURE__ */ d.jsx(aM, {
      label: x,
      ownerState: v
    }),
    filled: /* @__PURE__ */ d.jsx(cM, {
      ownerState: v
    })
  }[j], M = ut(n, Wo(N));
  return /* @__PURE__ */ d.jsx(p.Fragment, {
    children: /* @__PURE__ */ p.cloneElement(N, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: A,
      inputProps: {
        children: i,
        error: $.error,
        IconComponent: u,
        variant: j,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: g,
        ...h ? {
          id: m
        } : {
          autoWidth: o,
          defaultOpen: a,
          displayEmpty: c,
          labelId: b,
          MenuProps: C,
          onClose: S,
          onOpen: w,
          open: E,
          renderValue: k,
          SelectDisplayProps: {
            id: m,
            ...T
          }
        },
        ...f,
        classes: f ? $t(L, f.classes) : L,
        ...y ? y.props.inputProps : {}
      },
      ...(g && h || c) && j === "outlined" ? {
        notched: !0
      } : {},
      ref: M,
      className: Z(N.props.className, l, O.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!y && {
        variant: j
      },
      ...I
    })
  });
});
ci.muiName = "Select";
function uM(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = ir();
  p.useEffect(() => {
    if (!o)
      return;
    function g(h) {
      h.defaultPrevented || h.key === "Escape" && r?.(h, "escapeKeyDown");
    }
    return document.addEventListener("keydown", g), () => {
      document.removeEventListener("keydown", g);
    };
  }, [o, r]);
  const l = Ze((g, h) => {
    r?.(g, h);
  }), a = Ze((g) => {
    !r || g == null || s.start(g, () => {
      l(null, "timeout");
    });
  });
  p.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const c = (g) => {
    r?.(g, "clickaway");
  }, u = s.clear, m = p.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), y = (g) => (h) => {
    const S = g.onBlur;
    S?.(h), m();
  }, f = (g) => (h) => {
    const S = g.onFocus;
    S?.(h), u();
  }, x = (g) => (h) => {
    const S = g.onMouseEnter;
    S?.(h), u();
  }, b = (g) => (h) => {
    const S = g.onMouseLeave;
    S?.(h), m();
  };
  return p.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", m), window.addEventListener("blur", u), () => {
        window.removeEventListener("focus", m), window.removeEventListener("blur", u);
      };
  }, [n, o, m, u]), {
    getRootProps: (g = {}) => {
      const h = {
        ...Ba(e),
        ...Ba(g)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...g,
        ...h,
        onBlur: y(h),
        onFocus: f(h),
        onMouseEnter: x(h),
        onMouseLeave: b(h)
      };
    },
    onClickAway: c
  };
}
function dM(e) {
  return ue("MuiSnackbarContent", e);
}
se("MuiSnackbarContent", ["root", "message", "action"]);
const fM = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, dM, t);
}, pM = V(Pn, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.focusVisible && zk(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Gd(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Gd(e.palette.background.default, t),
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    flexGrow: 1,
    [e.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  };
})), mM = V("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), hM = V("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), gM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, c = r, u = fM(c);
  return /* @__PURE__ */ d.jsxs(pM, {
    role: l,
    elevation: 6,
    className: Z(u.root, i),
    ownerState: c,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ d.jsx(mM, {
      className: u.message,
      ownerState: c,
      children: s
    }), o ? /* @__PURE__ */ d.jsx(hM, {
      className: u.action,
      ownerState: c,
      children: o
    }) : null]
  });
});
function yM(e) {
  return ue("MuiSnackbar", e);
}
se("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const vM = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${q(n.vertical)}${q(n.horizontal)}`]
  };
  return de(r, yM, t);
}, xM = V("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${q(n.anchorOrigin.vertical)}${q(n.anchorOrigin.horizontal)}`]];
  }
})(ge(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.snackbar,
  position: "fixed",
  display: "flex",
  left: 8,
  right: 8,
  justifyContent: "center",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top",
    style: {
      top: 8,
      [e.breakpoints.up("sm")]: {
        top: 24
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical !== "top",
    style: {
      bottom: 8,
      [e.breakpoints.up("sm")]: {
        bottom: 24
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "left",
    style: {
      justifyContent: "flex-start",
      [e.breakpoints.up("sm")]: {
        left: 24,
        right: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "right",
    style: {
      justifyContent: "flex-end",
      [e.breakpoints.up("sm")]: {
        right: 24,
        left: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "center",
    style: {
      [e.breakpoints.up("sm")]: {
        left: "50%",
        right: "auto",
        transform: "translateX(-50%)"
      }
    }
  }]
}))), SM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiSnackbar"
  }), o = so(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    action: s,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration: c = null,
    children: u,
    className: m,
    disableWindowBlurListener: y = !1,
    message: f,
    onBlur: x,
    onClose: b,
    onFocus: C,
    onMouseEnter: g,
    onMouseLeave: h,
    open: S,
    resumeHideDuration: w,
    slots: E = {},
    slotProps: k = {},
    transitionDuration: T = i,
    ...P
  } = r, I = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    },
    autoHideDuration: c,
    disableWindowBlurListener: y,
    transitionDuration: T
  }, A = vM(I), {
    getRootProps: $,
    onClickAway: j
  } = uM(I), [v, O] = p.useState(!0), R = {
    slots: E,
    slotProps: k
  }, [L, N] = ve("root", {
    ref: n,
    className: [A.root, m],
    elementType: xM,
    getSlotProps: $,
    externalForwardedProps: {
      ...R,
      ...P
    },
    ownerState: I
  }), [M, {
    ownerState: z,
    ...B
  }] = ve("clickAwayListener", {
    elementType: WP,
    externalForwardedProps: R,
    getSlotProps: (G) => ({
      onClickAway: (...H) => {
        const he = H[0];
        G.onClickAway?.(...H), !he?.defaultMuiPrevented && j(...H);
      }
    }),
    ownerState: I
  }), [U, D] = ve("content", {
    elementType: gM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: R,
    additionalProps: {
      message: f,
      action: s
    },
    ownerState: I
  }), [Q, X] = ve("transition", {
    elementType: Xs,
    externalForwardedProps: R,
    getSlotProps: (G) => ({
      onEnter: (...H) => {
        G.onEnter?.(...H), O(!1);
      },
      onExited: (...H) => {
        G.onExited?.(...H), O(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: S,
      timeout: T,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: I
  });
  return !S && v ? null : /* @__PURE__ */ d.jsx(M, {
    ...B,
    ...E.clickAwayListener && {
      ownerState: z
    },
    children: /* @__PURE__ */ d.jsx(L, {
      ...N,
      children: /* @__PURE__ */ d.jsx(Q, {
        ...X,
        children: u || /* @__PURE__ */ d.jsx(U, {
          ...D
        })
      })
    })
  });
});
function bM(e) {
  return ue("MuiTooltip", e);
}
const wn = se("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function wM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const CM = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${q(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return de(s, bM, t);
}, kM = V(bx, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(ge(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t,
      open: n
    }) => n && !t.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${wn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${wn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${wn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${wn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineEnd: 0,
        marginInlineEnd: "-0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }]
}))), EM = V("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${q(n.placement.split("-")[0])}`]];
  }
})(ge(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${wn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${wn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${wn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${wn.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      position: "relative",
      marginBlock: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${wM(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${wn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${wn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${wn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${wn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), TM = V("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(ge(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let Bl = !1;
const Ig = new Jc();
let Ji = {
  x: 0,
  y: 0
};
function Dl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const yo = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: i,
    classes: s,
    describeChild: l = !1,
    disableFocusListener: a = !1,
    disableHoverListener: c = !1,
    disableInteractive: u = !1,
    disableTouchListener: m = !1,
    enterDelay: y = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: x = 700,
    followCursor: b = !1,
    id: C,
    leaveDelay: g = 0,
    leaveTouchDelay: h = 1500,
    onClose: S,
    onOpen: w,
    open: E,
    placement: k = "bottom",
    slotProps: T = {},
    slots: P = {},
    title: I,
    ...A
  } = r, $ = /* @__PURE__ */ p.isValidElement(i) ? i : /* @__PURE__ */ d.jsx("span", {
    children: i
  }), j = so(), [v, O] = p.useState(), [R, L] = p.useState(null), N = p.useRef(!1), M = p.useRef(!1), z = u || b, B = ir(), U = ir(), D = ir(), Q = ir(), [X, G] = Fa({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let H = X;
  const {
    current: he
  } = p.useRef(E !== void 0), W = $r(C), re = p.useRef(), ae = Ze(() => {
    re.current !== void 0 && (document.body.style.WebkitUserSelect = re.current, re.current = void 0), Q.clear();
  });
  p.useEffect(() => ae, [ae]);
  const we = (pe) => {
    Ig.clear(), Bl = !0, G(!0), w && !H && w(pe);
  }, Se = Ze(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (pe) => {
      M.current = !1, Ig.start(800 + g, () => {
        Bl = !1;
      }), G(!1), S && H && S(pe), B.start(j.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), ye = (pe) => {
    N.current && pe.type !== "touchstart" || (v && v.removeAttribute("title"), U.clear(), D.clear(), y || Bl && f ? U.start(Bl ? f : y, () => {
      we(pe);
    }) : we(pe));
  }, ce = (pe) => {
    if (v?.disabled && !he) {
      if (H && !M.current)
        return;
      M.current = !0;
    } else
      M.current = !1;
    ye(pe);
  }, ke = (pe) => {
    v?.disabled && !he && !M.current || ye(pe);
  }, Be = (pe) => {
    U.clear(), D.start(g, () => {
      Se(pe);
    });
  }, [, je] = p.useState(!1), Te = (pe) => {
    const Qe = pe?.target ?? v;
    if (!Qe || Qe.disabled || !Da(Qe)) {
      je(!1);
      const vt = pe ?? new Event("blur");
      !pe && Qe && (Object.defineProperty(vt, "target", {
        value: Qe
      }), Object.defineProperty(vt, "currentTarget", {
        value: Qe
      })), Be(vt);
    }
  }, le = (pe) => {
    if (v || O(pe.currentTarget), M.current = !1, Da(pe.target)) {
      const Qe = (vt) => {
        vt.target.disabled && Te(vt), vt.target.removeEventListener("blur", Qe);
      };
      pe.target.addEventListener("blur", Qe), je(!0), ye(pe);
    }
  }, Ie = (pe) => {
    N.current = !0;
    const Qe = $.props;
    Qe.onTouchStart && Qe.onTouchStart(pe);
  }, Ge = (pe) => {
    Ie(pe), D.clear(), B.clear(), ae(), re.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(x, () => {
      document.body.style.WebkitUserSelect = re.current, ce(pe);
    });
  }, Xe = (pe) => {
    $.props.onTouchEnd && $.props.onTouchEnd(pe), ae(), D.start(h, () => {
      Se(pe);
    });
  };
  p.useEffect(() => {
    if (!H)
      return;
    function pe(Qe) {
      Qe.key === "Escape" && Se(Qe);
    }
    return document.addEventListener("keydown", pe), () => {
      document.removeEventListener("keydown", pe);
    };
  }, [Se, H]);
  const Ve = ut(Wo($), O, n);
  !I && I !== 0 && (H = !1);
  const ht = p.useRef(), ft = (pe) => {
    const Qe = $.props;
    Qe.onMouseMove && Qe.onMouseMove(pe), Ji = {
      x: pe.clientX,
      y: pe.clientY
    }, ht.current && ht.current.update();
  }, be = {}, ie = typeof I == "string";
  l ? (be.title = !H && ie && !c ? I : null, be["aria-describedby"] = H ? W : null) : (be["aria-label"] = ie ? I : null, be["aria-labelledby"] = H && !ie ? W : null);
  const fe = {
    ...be,
    ...A,
    ...$.props,
    className: Z(A.className, $.props.className),
    onTouchStart: Ie,
    ref: Ve,
    ...b ? {
      onMouseMove: ft
    } : {}
  }, Ne = {};
  m || (fe.onTouchStart = Ge, fe.onTouchEnd = Xe), c || (fe.onMouseOver = Dl(ce, fe.onMouseOver), fe.onMouseLeave = Dl(Be, fe.onMouseLeave), z || (Ne.onMouseOver = ke, Ne.onMouseLeave = Be)), a || (fe.onFocus = Dl(le, fe.onFocus), fe.onBlur = Dl(Te, fe.onBlur), z || (Ne.onFocus = le, Ne.onBlur = Te));
  const ee = {
    ...r,
    arrow: o,
    disableInteractive: z,
    placement: k,
    touch: N.current
  }, xe = typeof T.popper == "function" ? T.popper(ee) : T.popper, rt = p.useMemo(() => {
    let pe = [{
      name: "arrow",
      enabled: !!R,
      options: {
        element: R,
        padding: 4
      }
    }];
    return xe?.popperOptions?.modifiers && (pe = pe.concat(xe.popperOptions.modifiers)), {
      ...xe?.popperOptions,
      modifiers: pe
    };
  }, [R, xe?.popperOptions]), jt = CM(ee), qt = {
    slots: P,
    slotProps: {
      arrow: T.arrow,
      popper: xe,
      tooltip: T.tooltip,
      transition: T.transition
    }
  }, [Pe, Sn] = ve("popper", {
    elementType: kM,
    externalForwardedProps: qt,
    ownerState: ee,
    className: jt.popper
  }), [ao, Gn] = ve("transition", {
    elementType: Xs,
    externalForwardedProps: qt,
    ownerState: ee
  }), [fr, Ar] = ve("tooltip", {
    elementType: EM,
    className: jt.tooltip,
    externalForwardedProps: qt,
    ownerState: ee
  }), [pr, Uo] = ve("arrow", {
    elementType: TM,
    className: jt.arrow,
    externalForwardedProps: qt,
    ownerState: ee,
    ref: L
  });
  return /* @__PURE__ */ d.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ p.cloneElement($, fe), /* @__PURE__ */ d.jsx(Pe, {
      as: bx,
      placement: k,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: Ji.y,
          left: Ji.x,
          right: Ji.x,
          bottom: Ji.y,
          width: 0,
          height: 0
        })
      } : v,
      popperRef: ht,
      open: v ? H : !1,
      id: W,
      transition: !0,
      ...Ne,
      ...Sn,
      popperOptions: rt,
      children: ({
        TransitionProps: pe
      }) => /* @__PURE__ */ d.jsx(ao, {
        timeout: j.transitions.duration.shorter,
        ...pe,
        ...Gn,
        children: /* @__PURE__ */ d.jsxs(fr, {
          ...Ar,
          children: [I, o ? /* @__PURE__ */ d.jsx(pr, {
            ...Uo
          }) : null]
        })
      })
    })]
  });
}), He = Pk({
  createStyledComponent: V("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => me({
    props: e,
    name: "MuiStack"
  })
});
function PM(e) {
  return ue("MuiSwitch", e);
}
const Ke = se("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), RM = (e) => {
  const {
    classes: t,
    edge: n,
    size: r,
    color: o,
    checked: i,
    disabled: s
  } = e, l = {
    root: ["root", n && `edge${q(n)}`, `size${q(r)}`],
    switchBase: ["switchBase", `color${q(o)}`, i && "checked", s && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, a = de(l, PM, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...a
  };
}, IM = V("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.edge && t[`edge${q(n.edge)}`], t[`size${q(n.size)}`]];
  }
})({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [{
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${Ke.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${Ke.switchBase}`]: {
        padding: 4,
        [`&.${Ke.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), MM = V(Ex, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.switchBase, {
      [`& .${Ke.input}`]: t.input
    }, n.color !== "default" && t[`color${q(n.color)}`]];
  }
})(ge(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
  ...at(e, ["left", "transform"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${Ke.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${Ke.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  ...e.focusVisible ? {
    // when focusVisible is enabled, the styles must not rely on `opacity` so that the ring is visible on the track slot.
    [`&.${Ks.focusVisible} ~ .${Ke.track}`]: {
      ...Rp,
      ...e.focusVisible
    },
    // mirrors the non-focusVisible `opacity: 0.5`; must stay BEFORE the disabled rule so
    // disabled wins the checked+disabled combination at equal specificity.
    [`&.${Ke.checked} + .${Ke.track}`]: {
      backgroundColor: e.alpha(e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`, 0.5)
    },
    [`&.${Ke.disabled} + .${Ke.track}`]: {
      backgroundColor: e.alpha(e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`, e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`)
    }
  } : {
    [`&.${Ke.checked} + .${Ke.track}`]: {
      opacity: 0.5
    },
    [`&.${Ke.disabled} + .${Ke.track}`]: {
      opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
    }
  },
  [`& .${Ke.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), ge(({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(Kt(["light"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ke.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${Ke.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${Ke.checked} + .${Ke.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      },
      ...e.focusVisible && {
        [`&.${Ke.checked} + .${Ke.track}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, 0.5)
        },
        [`&.${Ke.disabled} + .${Ke.track}`]: {
          backgroundColor: e.alpha(e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`, e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`)
        },
        [`&.${Ke.checked}.${Ke.disabled} + .${Ke.track}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`)
        }
      }
    }
  }))]
}))), $M = V("span", {
  name: "MuiSwitch",
  slot: "Track"
})(ge(({
  theme: e
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  ...at(e, ["opacity", "background-color"], {
    duration: e.transitions.duration.shortest
  }),
  "@media (forced-colors: active)": {
    boxSizing: "border-box",
    border: "1px solid ButtonBorder"
  },
  ...e.focusVisible ? {
    backgroundColor: e.alpha(e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`, e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}`)
  } : {
    backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
    opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}`
  }
}))), OM = V("span", {
  name: "MuiSwitch",
  slot: "Thumb"
})(ge(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  boxSizing: "border-box",
  border: "1px solid transparent",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), jM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiSwitch"
  }), {
    className: o,
    color: i = "primary",
    edge: s = !1,
    size: l = "medium",
    sx: a,
    slots: c = {},
    slotProps: u = {},
    ...m
  } = r, y = {
    ...r,
    color: i,
    edge: s,
    size: l
  }, f = RM(y), x = u.input, b = {
    slots: c,
    slotProps: u
  }, [C, g] = ve("root", {
    className: Z(f.root, o),
    elementType: IM,
    externalForwardedProps: b,
    ownerState: y,
    additionalProps: {
      sx: a
    }
  }), [h, S] = ve("thumb", {
    className: f.thumb,
    elementType: OM,
    externalForwardedProps: b,
    ownerState: y
  }), w = /* @__PURE__ */ d.jsx(h, {
    ...S
  }), [E, k] = ve("track", {
    className: f.track,
    elementType: $M,
    externalForwardedProps: b,
    ownerState: y
  });
  return /* @__PURE__ */ d.jsxs(C, {
    ...g,
    children: [/* @__PURE__ */ d.jsx(MM, {
      type: "checkbox",
      icon: w,
      checkedIcon: w,
      ref: n,
      ownerState: y,
      ...m,
      classes: {
        ...f,
        root: f.switchBase
      },
      slots: {
        ...c.switchBase && {
          root: c.switchBase
        },
        ...c.input && {
          input: c.input
        }
      },
      slotProps: {
        ...u.switchBase && {
          root: typeof u.switchBase == "function" ? u.switchBase(y) : u.switchBase
        },
        input: Lp(typeof x == "function" ? x(y) : x, {
          role: "switch"
        })
      }
    }), /* @__PURE__ */ d.jsx(E, {
      ...k
    })]
  });
});
function AM(e) {
  return ue("MuiTab", e);
}
const Bn = se("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), LM = (e) => {
  const {
    classes: t,
    textColor: n,
    fullWidth: r,
    wrapped: o,
    icon: i,
    label: s,
    selected: l,
    disabled: a
  } = e, c = {
    root: ["root", i && s && "labelIcon", `textColor${q(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return de(c, AM, t);
}, NM = V(no, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${q(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${Bn.icon}`]: t.icon
    }];
  }
})(ge(({
  theme: e
}) => ({
  ...e.typography.button,
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center",
  lineHeight: 1.25,
  // Inset the ring: the Tabs scroller clips an outset ring.
  ...e.focusVisible && K0(3),
  variants: [{
    props: ({
      ownerState: t
    }) => t.label && (t.iconPosition === "top" || t.iconPosition === "bottom"),
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.label && t.iconPosition !== "top" && t.iconPosition !== "bottom",
    style: {
      flexDirection: "row"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.icon && t.label,
    style: {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "top",
    style: {
      [`& > .${Bn.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${Bn.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${Bn.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${Bn.icon}`]: {
        marginLeft: e.spacing(1)
      }
    }
  }, {
    props: {
      textColor: "inherit"
    },
    style: {
      color: "inherit",
      opacity: 0.6,
      // same opacity as theme.palette.text.secondary
      [`&.${Bn.selected}`]: {
        opacity: 1
      },
      ...e.focusVisible && {
        [`&.${Ks.focusVisible}`]: {
          opacity: 1
        }
      },
      [`&.${Bn.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Bn.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${Bn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Bn.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${Bn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.wrapped,
    style: {
      fontSize: e.typography.pxToRem(12)
    }
  }]
}))), es = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTab"
  }), {
    className: o,
    disabled: i = !1,
    disableFocusRipple: s = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: l,
    icon: a,
    iconPosition: c = "top",
    // eslint-disable-next-line react/prop-types
    indicator: u,
    label: m,
    onChange: y,
    onClick: f,
    onFocus: x,
    // eslint-disable-next-line react/prop-types
    selected: b,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: g = "inherit",
    value: h,
    wrapped: S = !1,
    ...w
  } = r, E = $x(), k = jx({
    id: h,
    ref: n,
    disabled: i,
    selected: b
  }), P = E.getItemMap().size === 0 && b ? 0 : k.tabIndex, I = {
    ...r,
    disabled: i,
    disableFocusRipple: s,
    selected: b,
    icon: !!a,
    iconPosition: c,
    label: !!m,
    fullWidth: l,
    textColor: g,
    wrapped: S
  }, A = LM(I), $ = a && m && /* @__PURE__ */ p.isValidElement(a) ? /* @__PURE__ */ p.cloneElement(a, {
    className: Z(A.icon, a.props.className)
  }) : a, j = (O) => {
    !b && y && y(O, h), f && f(O);
  }, v = (O) => {
    C && !b && y && y(O, h), x && x(O);
  };
  return /* @__PURE__ */ d.jsxs(NM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: Z(A.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": b,
    disabled: i,
    onClick: j,
    onFocus: v,
    tabIndex: P,
    ownerState: I,
    ...w,
    children: [c === "top" || c === "start" ? /* @__PURE__ */ d.jsxs(p.Fragment, {
      children: [$, m]
    }) : /* @__PURE__ */ d.jsxs(p.Fragment, {
      children: [m, $]
    }), u]
  });
}), Gx = /* @__PURE__ */ p.createContext();
function zM(e) {
  return ue("MuiTable", e);
}
se("MuiTable", ["root", "stickyHeader"]);
const FM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return de({
    root: ["root", n && "stickyHeader"]
  }, zM, t);
}, BM = V("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.stickyHeader && t.stickyHeader];
  }
})(ge(({
  theme: e
}) => ({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  "& caption": {
    ...e.typography.body2,
    padding: e.spacing(2),
    color: (e.vars || e).palette.text.secondary,
    textAlign: "left",
    captionSide: "bottom"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.stickyHeader,
    style: {
      borderCollapse: "separate"
    }
  }]
}))), Mg = "table", DM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = Mg,
    padding: s = "normal",
    size: l = "medium",
    stickyHeader: a = !1,
    ...c
  } = r, u = {
    ...r,
    component: i,
    padding: s,
    size: l,
    stickyHeader: a
  }, m = FM(u), y = p.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ d.jsx(Gx.Provider, {
    value: y,
    children: /* @__PURE__ */ d.jsx(BM, {
      as: i,
      role: i === Mg ? null : "table",
      ref: n,
      className: Z(m.root, o),
      ownerState: u,
      ...c
    })
  });
}), tu = /* @__PURE__ */ p.createContext();
function _M(e) {
  return ue("MuiTableBody", e);
}
se("MuiTableBody", ["root"]);
const WM = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, _M, t);
}, UM = V("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), VM = {
  variant: "body"
}, $g = "tbody", HM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = $g,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = WM(l);
  return /* @__PURE__ */ d.jsx(tu.Provider, {
    value: VM,
    children: /* @__PURE__ */ d.jsx(UM, {
      className: Z(a.root, o),
      as: i,
      ref: n,
      role: i === $g ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function KM(e) {
  return ue("MuiTableCell", e);
}
const YM = se("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), GM = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: o,
    size: i,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${q(r)}`, o !== "normal" && `padding${q(o)}`, `size${q(i)}`]
  };
  return de(l, KM, t);
}, XM = V("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${q(n.size)}`], n.padding !== "normal" && t[`padding${q(n.padding)}`], n.align !== "inherit" && t[`align${q(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(ge(({
  theme: e
}) => ({
  ...e.typography.body2,
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? e.lighten(e.alpha(e.palette.divider, 1), 0.88) : e.darken(e.alpha(e.palette.divider, 1), 0.68)}`,
  textAlign: "left",
  padding: 16,
  variants: [{
    props: {
      variant: "head"
    },
    style: {
      color: (e.vars || e).palette.text.primary,
      lineHeight: e.typography.pxToRem(24),
      fontWeight: e.typography.fontWeightMedium
    }
  }, {
    props: {
      variant: "body"
    },
    style: {
      color: (e.vars || e).palette.text.primary
    }
  }, {
    props: {
      variant: "footer"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      lineHeight: e.typography.pxToRem(21),
      fontSize: e.typography.pxToRem(12)
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: "6px 16px",
      [`&.${YM.paddingCheckbox}`]: {
        width: 24,
        // prevent the checkbox column from growing
        padding: "0 12px 0 16px",
        "& > *": {
          padding: 0
        }
      }
    }
  }, {
    props: {
      padding: "checkbox"
    },
    style: {
      width: 48,
      // prevent the checkbox column from growing
      padding: "0 0 0 4px"
    }
  }, {
    props: {
      padding: "none"
    },
    style: {
      padding: 0
    }
  }, {
    props: {
      align: "left"
    },
    style: {
      textAlign: "left"
    }
  }, {
    props: {
      align: "center"
    },
    style: {
      textAlign: "center"
    }
  }, {
    props: {
      align: "right"
    },
    style: {
      textAlign: "right",
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      align: "justify"
    },
    style: {
      textAlign: "justify"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.stickyHeader,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 2,
      backgroundColor: (e.vars || e).palette.background.default
    }
  }]
}))), Dn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableCell"
  }), {
    align: o = "inherit",
    className: i,
    component: s,
    padding: l,
    scope: a,
    size: c,
    sortDirection: u,
    variant: m,
    ...y
  } = r, f = p.useContext(Gx), x = p.useContext(tu), b = x && x.variant === "head";
  let C;
  s ? C = s : C = b ? "th" : "td";
  let g = a;
  C === "td" ? g = void 0 : !g && b && (g = "col");
  const h = m || x && x.variant, S = {
    ...r,
    align: o,
    component: C,
    padding: l || (f && f.padding ? f.padding : "normal"),
    size: c || (f && f.size ? f.size : "medium"),
    sortDirection: u,
    stickyHeader: h === "head" && f && f.stickyHeader,
    variant: h
  }, w = GM(S);
  let E = null;
  return u && (E = u === "asc" ? "ascending" : "descending"), /* @__PURE__ */ d.jsx(XM, {
    as: C,
    ref: n,
    className: Z(w.root, i),
    "aria-sort": E,
    scope: g,
    ownerState: S,
    ...y
  });
});
function QM(e) {
  return ue("MuiTableContainer", e);
}
se("MuiTableContainer", ["root"]);
const qM = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, QM, t);
}, ZM = V("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), JM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableContainer"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = qM(l);
  return /* @__PURE__ */ d.jsx(ZM, {
    ref: n,
    as: i,
    className: Z(a.root, o),
    ownerState: l,
    ...s
  });
});
function e$(e) {
  return ue("MuiTableHead", e);
}
se("MuiTableHead", ["root"]);
const t$ = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, e$, t);
}, n$ = V("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), r$ = {
  variant: "head"
}, Og = "thead", o$ = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Og,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = t$(l);
  return /* @__PURE__ */ d.jsx(tu.Provider, {
    value: r$,
    children: /* @__PURE__ */ d.jsx(n$, {
      as: i,
      className: Z(a.root, o),
      ref: n,
      role: i === Og ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), i$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), s$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function l$(e) {
  return ue("MuiTableRow", e);
}
const jg = se("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), a$ = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return de({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, l$, t);
}, c$ = V("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.head && t.head, n.footer && t.footer];
  }
})(ge(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${jg.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${jg.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Ag = "tr", Ku = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Ag,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, c = p.useContext(tu), u = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: c && c.variant === "head",
    footer: c && c.variant === "footer"
  }, m = a$(u);
  return /* @__PURE__ */ d.jsx(c$, {
    as: i,
    ref: n,
    className: Z(m.root, o),
    role: i === Ag ? null : "row",
    ownerState: u,
    ...a
  });
});
function u$(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function d$(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = u$,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let c = !1;
  const u = () => {
    c = !0;
  }, m = (y) => {
    if (c) {
      o(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = y);
    const f = Math.min(1, (y - l) / s);
    if (t[e] = i(f) * (n - a) + a, f >= 1) {
      requestAnimationFrame(() => {
        o(null);
      });
      return;
    }
    requestAnimationFrame(m);
  };
  return a === n ? (o(new Error("Element already at target position")), u) : (requestAnimationFrame(m), u);
}
const f$ = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function p$(e) {
  const {
    onChange: t,
    ...n
  } = e, r = p.useRef(), o = p.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return lt(() => {
    const s = Yc(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = Yn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), p.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ d.jsx("div", {
    style: f$,
    ...n,
    ref: o
  });
}
function m$(e) {
  return ue("MuiTabScrollButton", e);
}
const h$ = se("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), g$ = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return de({
    root: ["root", n, r && "disabled"]
  }, m$, t);
}, y$ = V(no, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.orientation && t[n.orientation]];
  }
})({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${h$.disabled}`]: {
    opacity: 0
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      width: "100%",
      height: 40,
      "& svg": {
        transform: "var(--TabScrollButton-svgRotate)"
      }
    }
  }]
}), v$ = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: o,
    slots: i = {},
    slotProps: s = {},
    direction: l,
    orientation: a,
    disabled: c,
    ...u
  } = r, {
    nativeButton: m,
    ...y
  } = u, f = Vc(), x = {
    isRtl: f,
    ...r
  }, b = g$(x), C = i.StartScrollButtonIcon ?? i$, g = i.EndScrollButtonIcon ?? s$, h = ji({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  }), S = ji({
    elementType: g,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  });
  return /* @__PURE__ */ d.jsx(y$, {
    component: "div",
    className: Z(b.root, o),
    ref: n,
    role: null,
    ownerState: x,
    tabIndex: null,
    ...y,
    style: {
      ...y.style,
      ...a === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${f ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ d.jsx(C, {
      ...h
    }) : /* @__PURE__ */ d.jsx(g, {
      ...S
    })
  });
});
function x$(e) {
  return ue("MuiTabs", e);
}
const Yu = se("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), S$ = (e) => {
  const {
    vertical: t,
    fixed: n,
    hideScrollbar: r,
    scrollableX: o,
    scrollableY: i,
    centered: s,
    scrollButtonsHideMobile: l,
    classes: a
  } = e;
  return de({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", i && "scrollableY"],
    list: ["list", t && "vertical", s && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [o && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, x$, a);
}, b$ = V("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Yu.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Yu.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(ge(({
  theme: e
}) => ({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex",
  variants: [{
    props: ({
      ownerState: t
    }) => t.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.scrollButtonsHideMobile,
    style: {
      [`& .${Yu.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), w$ = V("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.scroller, n.fixed && t.fixed, n.hideScrollbar && t.hideScrollbar, n.scrollableX && t.scrollableX, n.scrollableY && t.scrollableY];
  }
})({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap",
  variants: [{
    props: ({
      ownerState: e
    }) => e.fixed,
    style: {
      overflowX: "hidden",
      width: "100%"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.hideScrollbar,
    style: {
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableX,
    style: {
      overflowX: "auto",
      overflowY: "hidden"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableY,
    style: {
      overflowY: "auto",
      overflowX: "hidden"
    }
  }]
}), C$ = V("div", {
  name: "MuiTabs",
  slot: "List",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.list, n.centered && t.centered];
  }
})({
  display: "flex",
  variants: [{
    props: ({
      ownerState: e
    }) => e.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.centered,
    style: {
      justifyContent: "center"
    }
  }]
}), k$ = V("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(ge(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  ...at(e),
  variants: [{
    props: {
      indicatorColor: "primary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      indicatorColor: "secondary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.secondary.main
    }
  }, {
    props: ({
      ownerState: t
    }) => t.vertical,
    style: {
      height: "100%",
      width: 2,
      right: 0
    }
  }]
}))), E$ = V(p$)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Lg = {}, T$ = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTabs"
  }), o = so(), i = Vc(), s = Zc(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: c,
    centered: u = !1,
    children: m,
    className: y,
    component: f = "div",
    allowScrollButtonsMobile: x = !1,
    indicatorColor: b = "primary",
    onChange: C,
    orientation: g = "horizontal",
    scrollButtons: h = "auto",
    selectionFollowsFocus: S,
    slots: w = {},
    slotProps: E = {},
    textColor: k = "primary",
    value: T,
    variant: P = "standard",
    visibleScrollbar: I = !1,
    ...A
  } = r, $ = P === "scrollable", j = g === "vertical", v = j ? "scrollTop" : "scrollLeft", O = j ? "top" : "left", R = j ? "bottom" : "right", L = j ? "clientHeight" : "clientWidth", N = j ? "height" : "width", M = {
    ...r,
    component: f,
    allowScrollButtonsMobile: x,
    indicatorColor: b,
    orientation: g,
    vertical: j,
    scrollButtons: h,
    textColor: k,
    variant: P,
    visibleScrollbar: I,
    fixed: !$,
    hideScrollbar: $ && !I,
    scrollableX: $ && !j,
    scrollableY: $ && j,
    centered: u && !$,
    scrollButtonsHideMobile: !x
  }, z = S$(M), B = ji({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: M
  }), U = ji({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: M
  }), [D, Q] = p.useState(!1), [X, G] = p.useState(Lg), [H, he] = p.useState(!1), [W, re] = p.useState(!1), [ae, we] = p.useState(!1), Se = T === !1 ? null : T, [ye, ce] = p.useState(!1), [ke, Be] = p.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), je = /* @__PURE__ */ new Map(), Te = p.useRef(null), le = p.useRef(null), Ie = {
    slots: w,
    slotProps: E
  }, Ge = () => {
    const oe = Te.current;
    let te;
    if (oe) {
      const Re = oe.getBoundingClientRect();
      te = {
        clientWidth: oe.clientWidth,
        scrollLeft: oe.scrollLeft,
        scrollTop: oe.scrollTop,
        scrollWidth: oe.scrollWidth,
        top: Re.top,
        bottom: Re.bottom,
        left: Re.left,
        right: Re.right
      };
    }
    let Me;
    if (oe && T !== !1) {
      const Re = le.current.children;
      if (Re.length > 0) {
        const Ct = Re[je.get(T)];
        Me = Ct ? Ct.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: te,
      tabMeta: Me
    };
  }, Xe = Ze(() => {
    const {
      tabsMeta: oe,
      tabMeta: te
    } = Ge();
    let Me = 0, Re;
    j ? (Re = "top", te && oe && (Me = te.top - oe.top + oe.scrollTop)) : (Re = i ? "right" : "left", te && oe && (Me = (i ? -1 : 1) * (te[Re] - oe[Re] + oe.scrollLeft)));
    const Ct = {
      [Re]: Me,
      // May be wrong until the font is loaded.
      [N]: te ? te[N] : 0
    };
    if (typeof X[Re] != "number" || typeof X[N] != "number")
      G(Ct);
    else {
      const hr = Math.abs(X[Re] - Ct[Re]), Qn = Math.abs(X[N] - Ct[N]);
      (hr >= 1 || Qn >= 1) && G(Ct);
    }
  }), Ve = (oe, {
    animation: te = !0
  } = {}) => {
    te && !s.shouldReduceMotion ? d$(v, Te.current, oe, {
      duration: o.transitions.duration.standard
    }) : Te.current[v] = oe;
  }, ht = (oe) => {
    let te = Te.current[v];
    j ? te += oe : te += oe * (i ? -1 : 1), Ve(te);
  }, ft = () => {
    const oe = Te.current[L];
    let te = 0;
    const Me = Array.from(le.current.children);
    for (let Re = 0; Re < Me.length; Re += 1) {
      const Ct = Me[Re];
      if (te + Ct[L] > oe) {
        Re === 0 && (te = oe);
        break;
      }
      te += Ct[L];
    }
    return te;
  }, be = () => {
    ht(-1 * ft());
  }, ie = () => {
    ht(ft());
  }, [fe, {
    onChange: Ne,
    ...ee
  }] = ve("scrollbar", {
    className: Z(z.scrollableX, z.hideScrollbar),
    elementType: E$,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Ie,
    ownerState: M
  }), xe = p.useCallback((oe) => {
    Ne?.(oe), Be({
      overflow: null,
      scrollbarWidth: oe
    });
  }, [Ne]), [rt, jt] = ve("scrollButtons", {
    className: z.scrollButtons,
    elementType: v$,
    externalForwardedProps: Ie,
    ownerState: M,
    additionalProps: {
      orientation: g,
      slots: {
        StartScrollButtonIcon: w.startScrollButtonIcon,
        EndScrollButtonIcon: w.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: B,
        endScrollButtonIcon: U
      }
    }
  }), qt = () => {
    const oe = {};
    oe.scrollbarSizeListener = $ ? /* @__PURE__ */ d.jsx(fe, {
      ...ee,
      onChange: xe
    }) : null;
    const Me = $ && (h === "auto" && (H || W) || h === !0);
    return oe.scrollButtonStart = Me ? /* @__PURE__ */ d.jsx(rt, {
      direction: i ? "right" : "left",
      onClick: be,
      disabled: !H,
      ...jt
    }) : null, oe.scrollButtonEnd = Me ? /* @__PURE__ */ d.jsx(rt, {
      direction: i ? "left" : "right",
      onClick: ie,
      disabled: !W,
      ...jt
    }) : null, oe;
  }, Pe = Ze((oe) => {
    const {
      tabsMeta: te,
      tabMeta: Me
    } = Ge();
    if (!(!Me || !te)) {
      if (Me[O] < te[O]) {
        const Re = te[v] + (Me[O] - te[O]);
        Ve(Re, {
          animation: oe
        });
      } else if (Me[R] > te[R]) {
        const Re = te[v] + (Me[R] - te[R]);
        Ve(Re, {
          animation: oe
        });
      }
    }
  }), Sn = Ze(() => {
    $ && h !== !1 && we(!ae);
  });
  p.useEffect(() => {
    const oe = Yc(() => {
      Te.current && Xe();
    });
    let te;
    const Me = (hr) => {
      hr.forEach((Qn) => {
        Qn.removedNodes.forEach((uo) => {
          te?.unobserve(uo);
        }), Qn.addedNodes.forEach((uo) => {
          te?.observe(uo);
        });
      }), oe(), Sn();
    }, Re = Yn(Te.current);
    Re.addEventListener("resize", oe);
    let Ct;
    return typeof ResizeObserver < "u" && (te = new ResizeObserver(oe), Array.from(le.current.children).forEach((hr) => {
      te.observe(hr);
    })), typeof MutationObserver < "u" && (Ct = new MutationObserver(Me), Ct.observe(le.current, {
      childList: !0
    })), () => {
      oe.clear(), Re.removeEventListener("resize", oe), Ct?.disconnect(), te?.disconnect();
    };
  }, [Xe, Sn]), p.useEffect(() => {
    const oe = Array.from(le.current.children), te = oe.length;
    if (typeof IntersectionObserver < "u" && te > 0 && $ && h !== !1) {
      const Me = oe[0], Re = oe[te - 1], Ct = {
        root: Te.current,
        threshold: 0.99
      }, hr = (ne) => {
        he(!ne[0].isIntersecting);
      }, Qn = new IntersectionObserver(hr, Ct);
      Qn.observe(Me);
      const uo = (ne) => {
        re(!ne[0].isIntersecting);
      }, Y = new IntersectionObserver(uo, Ct);
      return Y.observe(Re), () => {
        Qn.disconnect(), Y.disconnect();
      };
    }
  }, [$, h, ae, m?.length]), p.useEffect(() => {
    Q(!0);
  }, []), p.useEffect(() => {
    Xe();
  }), p.useEffect(() => {
    Pe(Lg !== X);
  }, [Pe, X]), p.useImperativeHandle(c, () => ({
    updateIndicator: Xe,
    updateScrollButtons: Sn
  }), [Xe, Sn]);
  const [ao, Gn] = ve("indicator", {
    className: z.indicator,
    elementType: k$,
    externalForwardedProps: Ie,
    ownerState: M,
    additionalProps: {
      style: X
    }
  }), fr = /* @__PURE__ */ d.jsx(ao, {
    ...Gn
  }), Ar = Ox({
    activeItemId: ye ? void 0 : Se,
    orientation: g,
    isRtl: i
  }), pr = Ar.getContainerProps(), pe = p.Children.toArray(m).filter(p.isValidElement).map((oe, te) => {
    const Me = oe.props.value === void 0 ? te : oe.props.value;
    return je.set(Me, te), {
      child: oe,
      index: te,
      childValue: Me
    };
  }).map(({
    child: oe,
    childValue: te
  }) => {
    const Me = te === T;
    return /* @__PURE__ */ p.cloneElement(oe, {
      fullWidth: P === "fullWidth",
      indicator: Me && !D && fr,
      selected: Me,
      selectionFollowsFocus: S,
      onChange: C,
      textColor: k,
      value: te
    });
  }), Qe = qt(), [vt, co] = ve("root", {
    ref: n,
    className: Z(z.root, y),
    elementType: b$,
    externalForwardedProps: {
      ...Ie,
      ...A,
      component: f
    },
    ownerState: M
  }), [Xn, _] = ve("scroller", {
    ref: Te,
    className: z.scroller,
    elementType: w$,
    externalForwardedProps: Ie,
    ownerState: M,
    additionalProps: {
      style: {
        overflow: ke.overflow,
        [j ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: I ? void 0 : -ke.scrollbarWidth
      }
    }
  }), Ee = ut(pr.ref, le), Tt = (oe) => {
    const te = le.current;
    or(mt(te))?.getAttribute("role") === "tab" && pr.onKeyDown(oe);
  }, [mr, Fi] = ve("list", {
    ref: Ee,
    className: z.list,
    elementType: C$,
    externalForwardedProps: Ie,
    ownerState: M,
    getSlotProps: (oe) => ({
      ...oe,
      onBlur: (te) => {
        Io(te.currentTarget, te.relatedTarget) || ce(!1), oe.onBlur?.(te);
      },
      onKeyDown: (te) => {
        Tt(te), oe.onKeyDown?.(te);
      },
      onFocus: (te) => {
        ce(!0), pr.onFocus(te), oe.onFocus?.(te);
      }
    })
  });
  return /* @__PURE__ */ d.jsxs(vt, {
    ...co,
    children: [Qe.scrollButtonStart, Qe.scrollbarSizeListener, /* @__PURE__ */ d.jsxs(Xn, {
      ..._,
      children: [/* @__PURE__ */ d.jsx(mr, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": g === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Fi,
        children: /* @__PURE__ */ d.jsx(Kp.Provider, {
          value: Ar,
          children: pe
        })
      }), D && fr]
    }), Qe.scrollButtonEnd]
  });
});
function P$(e) {
  return ue("MuiTextField", e);
}
se("MuiTextField", ["root"]);
const R$ = {
  standard: Hp,
  filled: Vp,
  outlined: Yp
}, I$ = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, P$, t);
}, M$ = V(IR, {
  name: "MuiTextField",
  slot: "Root"
})({}), Nr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: i = !1,
    children: s,
    className: l,
    color: a = "primary",
    defaultValue: c,
    disabled: u = !1,
    error: m = !1,
    fullWidth: y = !1,
    helperText: f,
    id: x,
    inputRef: b,
    label: C,
    maxRows: g,
    minRows: h,
    multiline: S = !1,
    name: w,
    onBlur: E,
    onChange: k,
    onFocus: T,
    placeholder: P,
    required: I = !1,
    rows: A,
    select: $ = !1,
    slots: j = {},
    slotProps: v = {},
    type: O,
    value: R,
    variant: L = "outlined",
    ...N
  } = r, M = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: u,
    error: m,
    fullWidth: y,
    multiline: S,
    required: I,
    select: $,
    variant: L
  }, z = I$(M), B = $r(x), U = f && B ? `${B}-helper-text` : void 0, D = C && B ? `${B}-label` : void 0, Q = R$[L], X = {
    slots: j,
    slotProps: v
  }, [G, H] = ve("select", {
    elementType: ci,
    externalForwardedProps: X,
    ownerState: M
  }), he = $ && H.native, W = {}, re = X.slotProps.inputLabel;
  L === "outlined" && (re && typeof re.shrink < "u" && (W.notched = re.shrink), W.label = C), $ && (he || (W.id = void 0), W["aria-describedby"] = void 0);
  const [ae, we] = ve("root", {
    elementType: M$,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...X,
      ...N
    },
    ownerState: M,
    className: Z(z.root, l),
    ref: n,
    additionalProps: {
      disabled: u,
      error: m,
      fullWidth: y,
      required: I,
      color: a,
      variant: L
    }
  }), [Se, ye] = ve("input", {
    elementType: Q,
    externalForwardedProps: X,
    additionalProps: W,
    ownerState: M
  }), [ce, ke] = ve("inputLabel", {
    elementType: eI,
    externalForwardedProps: X,
    ownerState: M
  }), [Be, je] = ve("htmlInput", {
    elementType: "input",
    externalForwardedProps: X,
    ownerState: M
  }), [Te, le] = ve("formHelperText", {
    elementType: LR,
    externalForwardedProps: X,
    ownerState: M
  }), Ie = /* @__PURE__ */ d.jsx(Se, {
    "aria-describedby": U,
    autoComplete: o,
    autoFocus: i,
    defaultValue: c,
    fullWidth: y,
    multiline: S,
    name: w,
    rows: A,
    maxRows: g,
    minRows: h,
    type: O,
    value: R,
    id: B,
    inputRef: b,
    onBlur: E,
    onChange: k,
    onFocus: T,
    placeholder: P,
    inputProps: je,
    slots: {
      input: j.htmlInput ? Be : void 0
    },
    ...ye
  });
  return /* @__PURE__ */ d.jsxs(ae, {
    ...we,
    children: [C != null && C !== "" && /* @__PURE__ */ d.jsx(ce, {
      htmlFor: $ && !he ? void 0 : B,
      id: D,
      ...$ && !he && {
        component: "div"
      },
      ...ke,
      children: C
    }), $ ? /* @__PURE__ */ d.jsx(G, {
      "aria-describedby": U,
      id: B,
      labelId: D,
      value: R,
      input: Ie,
      ...H,
      children: s
    }) : Ie, f && /* @__PURE__ */ d.jsx(Te, {
      id: U,
      ...le,
      children: f
    })]
  });
}), $$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), Ng = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6m6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26"
})), O$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
})), Gu = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"
})), j$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), A$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), zg = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"
})), L$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
})), N$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
})), z$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
})), F$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12z"
})), Fg = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), B$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), D$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"
})), _$ = dt(/* @__PURE__ */ d.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"
})), W$ = dt([/* @__PURE__ */ d.jsx("path", {
  d: "M12 5.99 19.53 19H4.47zM12 2 1 21h22z"
}, "0"), /* @__PURE__ */ d.jsx("path", {
  d: "M13 16h-2v2h2zm0-6h-2v5h2z"
}, "1")]), Pt = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', Rt = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function Sr({ children: e, sx: t }) {
  return /* @__PURE__ */ d.jsx(
    Fe,
    {
      sx: {
        fontSize: "0.6875rem",
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "text.disabled",
        ...t
      },
      children: e
    }
  );
}
function Bg({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ d.jsxs(Pn, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ d.jsxs(
      He,
      {
        direction: "row",
        sx: {
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.25,
          borderBottom: "1px solid",
          borderColor: "divider"
        },
        children: [
          typeof e == "string" ? /* @__PURE__ */ d.jsx(Sr, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ d.jsx(ot, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function vo({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ d.jsxs(ot, { sx: n, children: [
    /* @__PURE__ */ d.jsxs(He, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ d.jsx(
        Fe,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ d.jsx(Fe, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function Ut({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ d.jsxs(ot, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ d.jsx(Sr, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ d.jsx(
      Fe,
      {
        sx: {
          fontFamily: n ? Pt : void 0,
          fontSize: n ? "0.75rem" : "0.8125rem",
          fontWeight: 500,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: t
      }
    )
  ] });
}
function U$(e, t) {
  switch (t?.kind) {
    case "log":
      return [...e, { stream: t.stream ?? "stdout", text: t.line ?? "" }];
    case "error":
      return [...e, { stream: "stderr", text: t.message ?? "failed" }];
    case "result":
      return [
        ...e,
        {
          stream: "meta",
          text: t.ok ? `✓ completed (${t.code})` : `✗ ${t.code}: ${t.message ?? "failed"}` + (t.exit_code !== void 0 ? ` [exit ${t.exit_code}]` : "")
        }
      ];
    default:
      return e;
  }
}
function V$({ lines: e, running: t }) {
  const n = p.useRef(null), r = p.useRef(null), o = p.useRef(!0);
  return p.useEffect(() => {
    const i = r.current;
    if (!i) return;
    const s = () => {
      o.current = i.scrollHeight - i.scrollTop - i.clientHeight < 40;
    };
    return i.addEventListener("scroll", s), () => i.removeEventListener("scroll", s);
  }, []), p.useEffect(() => {
    o.current && n.current?.scrollIntoView({ block: "end" });
  }, [e]), !e.length && !t ? null : /* @__PURE__ */ d.jsxs(
    Pn,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: Rt.bg,
        color: Rt.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: Pt,
        fontSize: 12,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ d.jsx(
          ot,
          {
            sx: {
              color: i.stream === "stderr" ? Rt.err : i.stream === "meta" ? Rt.dim : Rt.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ d.jsx(ot, { sx: { color: Rt.dim }, children: "▍issuing / communicating with ACME…" }),
        /* @__PURE__ */ d.jsx("div", { ref: n })
      ]
    }
  );
}
function H$({ ctx: e }) {
  const t = p.useMemo(() => Kc(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ d.jsx(F2, { theme: t, children: /* @__PURE__ */ d.jsx(K$, { ctx: e }) });
}
function K$({ ctx: e }) {
  const [t, n] = p.useState("certs"), [r, o] = p.useState(null), [i, s] = p.useState(!1), [l, a] = p.useState(!1), [c, u] = p.useState([]), [m, y] = p.useState(""), [f, x] = p.useState("all"), [b, C] = p.useState(""), [g, h] = p.useState(""), [S, w] = p.useState("http-01"), [E, k] = p.useState(!1), [T, P] = p.useState(!0), [I, A] = p.useState(!1), [$, j] = p.useState([]), [v, O] = p.useState(""), [R, L] = p.useState(""), [N, M] = p.useState(""), [z, B] = p.useState(""), [U, D] = p.useState(!1), [Q, X] = p.useState(!1), [G, H] = p.useState(null), [he, W] = p.useState(!1), [re, ae] = p.useState(!1), [we, Se] = p.useState(""), [ye, ce] = p.useState(!1), [ke, Be] = p.useState(null), [je, Te] = p.useState(!1), [le, Ie] = p.useState(null), [Ge, Xe] = p.useState("acme"), [Ve, ht] = p.useState([]), [ft, be] = p.useState(50), [ie, fe] = p.useState(!1), [Ne, ee] = p.useState(null), xe = p.useCallback(
    async (_, Ee = {}) => {
      const Tt = await e.api(_, Ee);
      if (!Tt.ok) {
        const mr = await Tt.json().catch(() => ({ detail: Tt.statusText }));
        throw new Error(mr.detail || mr.message || `Request failed with status ${Tt.status}`);
      }
      return Tt.json();
    },
    [e]
  ), rt = p.useCallback(async () => {
    try {
      s(!0);
      const _ = await xe("/engine/status");
      _ && _.ok && o(_);
    } catch {
      o(null);
    } finally {
      s(!1);
    }
  }, [xe]), jt = p.useCallback(async () => {
    try {
      const _ = await xe("/certs");
      _ && _.ok && Array.isArray(_.certs) && u(_.certs);
    } catch {
      u([]);
    }
  }, [xe]), qt = p.useCallback(async () => {
    fe(!0);
    try {
      const _ = await xe(`/engine/logs?lines=${ft}&log_type=${Ge}`);
      _ && _.ok && Array.isArray(_.lines) && ht(_.lines);
    } catch (_) {
      ee(_.message);
    } finally {
      fe(!1);
    }
  }, [xe, ft, Ge]), Pe = p.useCallback(async () => {
    await Promise.all([rt(), jt()]);
  }, [rt, jt]);
  p.useEffect(() => {
    Pe();
  }, [Pe]), p.useEffect(() => {
    t === "logs" && qt();
  }, [t, qt]);
  const Sn = async () => {
    a(!0);
    try {
      await xe("/certs/renew", { method: "POST" }), ee("ACME auto-renewal check completed for all certificates."), await Pe();
    } catch (_) {
      ee(`Renew all failed: ${_.message}`);
    } finally {
      a(!1);
    }
  }, ao = async (_) => {
    a(!0);
    try {
      await xe(`/certs/${encodeURIComponent(_)}/renew`, { method: "POST" }), ee(`Certificate for ${_} renewed successfully.`), await jt();
    } catch (Ee) {
      ee(`Renew failed: ${Ee.message}`);
    } finally {
      a(!1);
    }
  }, Gn = (_) => {
    Se(_), ce(!1), ae(!0);
  }, fr = (_) => `    #ssl start
    ssl_certificate     /opt/hostpanel/etc/ssl/certs/${_}.crt;
    ssl_certificate_key /opt/hostpanel/etc/ssl/private/${_}.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    add_header Strict-Transport-Security "max-age=31536000" always;
    #ssl end`, Ar = async (_) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText)
        await navigator.clipboard.writeText(_);
      else {
        const Ee = document.createElement("textarea");
        Ee.value = _, document.body.appendChild(Ee), Ee.select(), document.execCommand("copy"), document.body.removeChild(Ee);
      }
      ce(!0), ee("Nginx SSL directives copied to clipboard!"), setTimeout(() => ce(!1), 2500);
    } catch {
      ee("Failed to copy to clipboard.");
    }
  }, pr = async (_) => {
    H(_), X(!0), W(!0);
    try {
      const Ee = await xe(`/certs/${encodeURIComponent(_.domain)}`);
      Ee && Ee.ok && H((Tt) => Tt ? { ...Tt, ...Ee } : Ee);
    } catch {
    } finally {
      W(!1);
    }
  }, Uo = async () => {
    if (le)
      try {
        await xe(`/certs/${encodeURIComponent(le)}`, { method: "DELETE" }), ee(`Certificate for ${le} deleted.`), Te(!1), Ie(null), await Pe();
      } catch (_) {
        ee(`Delete failed: ${_.message}`);
      }
  }, pe = async () => {
    if (!b.trim()) {
      ee("Domain name is required.");
      return;
    }
    if (!T) {
      ee("You must agree to Let's Encrypt Subscriber Agreement.");
      return;
    }
    A(!0), j([]);
    const _ = {
      domain: b.trim(),
      email: g.trim() || void 0,
      challenge_type: S,
      staging: E,
      agree_tos: T
    };
    try {
      if (e.run)
        for await (const Ee of e.run("/certs/issue", {
          method: "POST",
          body: _
        }))
          j((Tt) => U$(Tt, Ee));
      else
        (await xe("/certs/issue", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(_)
        })).ok && j([
          { stream: "stdout", text: `✓ Certificate issued for ${b}` },
          { stream: "meta", text: "✓ completed" }
        ]);
      ee(`Let's Encrypt certificate issued for ${b}!`), Be(b.trim()), await Pe();
    } catch (Ee) {
      j((Tt) => [
        ...Tt,
        { stream: "stderr", text: `Error: ${Ee.message}` }
      ]), ee(`Issuance failed: ${Ee.message}`);
    } finally {
      A(!1);
    }
  }, Qe = async () => {
    if (!v.trim() || !R.trim() || !N.trim()) {
      ee("Domain, Certificate PEM, and Private Key PEM are required.");
      return;
    }
    D(!0);
    try {
      await xe("/certs/custom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          domain: v.trim(),
          cert_pem: R,
          key_pem: N,
          ca_bundle: z.trim() || void 0
        })
      }), ee(`Custom SSL certificate for ${v} installed successfully!`), O(""), L(""), M(""), B(""), n("certs"), await Pe();
    } catch (_) {
      ee(`Upload failed: ${_.message}`);
    } finally {
      D(!1);
    }
  }, vt = !!(r?.active ?? !0), co = p.useMemo(() => c.filter((_) => !m || _.domain.toLowerCase().includes(m.toLowerCase()) || _.issuer.toLowerCase().includes(m.toLowerCase()) ? f === "letsencrypt" ? _.issuer.toLowerCase().includes("encrypt") : f === "custom" ? !_.issuer.toLowerCase().includes("encrypt") : f === "expiring" ? _.days_left <= 30 : !0 : !1), [c, m, f]), Xn = p.useMemo(
    () => c.filter((_) => _.days_left <= 30).length,
    [c]
  );
  return /* @__PURE__ */ d.jsxs(ot, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ d.jsxs(
      He,
      {
        direction: { xs: "column", sm: "row" },
        spacing: 1.5,
        sx: { justifyContent: "space-between", alignItems: { sm: "center" } },
        children: [
          /* @__PURE__ */ d.jsxs(He, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ d.jsx(
              Zi,
              {
                size: "small",
                label: vt ? "RUNNING" : "STOPPED",
                color: vt ? "success" : "error",
                sx: { fontWeight: 700, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ d.jsx(Fe, { variant: "body2", sx: { color: "text.secondary" }, children: "hostpanel-ssld.service • User hp-ssl • Isolation /opt/hostpanel/etc/ssl" })
          ] }),
          /* @__PURE__ */ d.jsxs(He, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ d.jsx(yo, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(
              mo,
              {
                size: "small",
                onClick: Pe,
                disabled: i,
                sx: { border: "1px solid", borderColor: "divider" },
                children: i ? /* @__PURE__ */ d.jsx(bo, { size: 16, color: "inherit" }) : /* @__PURE__ */ d.jsx(Fg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ d.jsx(yo, { title: "Renew All Expiring Certificates", arrow: !0, children: /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(
              mo,
              {
                size: "small",
                color: "warning",
                onClick: Sn,
                disabled: l,
                sx: { border: "1px solid", borderColor: "divider" },
                children: /* @__PURE__ */ d.jsx(Ng, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ d.jsx(yo, { title: "Upload Custom Certificate", arrow: !0, children: /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(
              mo,
              {
                size: "small",
                onClick: () => n("custom"),
                sx: { border: "1px solid", borderColor: "divider" },
                children: /* @__PURE__ */ d.jsx(zg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ d.jsx(
              bn,
              {
                variant: "contained",
                color: "primary",
                size: "small",
                startIcon: /* @__PURE__ */ d.jsx(D$, {}),
                onClick: () => n("issue"),
                sx: { ml: 1, whiteSpace: "nowrap" },
                children: "Issue Let's Encrypt"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ d.jsxs(He, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
      /* @__PURE__ */ d.jsx(jl, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ d.jsxs(Al, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ d.jsx(Sr, { children: "SSL DAEMON STATUS" }),
        /* @__PURE__ */ d.jsx(Fe, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: vt ? "Online" : "Offline" }),
        /* @__PURE__ */ d.jsx(Fe, { variant: "caption", sx: { color: "text.secondary" }, children: r?.version || "OpenSSL Core" })
      ] }) }),
      /* @__PURE__ */ d.jsx(jl, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ d.jsxs(Al, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ d.jsx(Sr, { children: "ACTIVE CERTIFICATES" }),
        /* @__PURE__ */ d.jsxs(Fe, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
          c.length,
          " Installed"
        ] }),
        /* @__PURE__ */ d.jsxs(Fe, { variant: "caption", sx: { color: "text.secondary" }, children: [
          c.filter((_) => _.issuer.includes("Encrypt")).length,
          " Let's Encrypt /",
          " ",
          c.filter((_) => !_.issuer.includes("Encrypt")).length,
          " Custom"
        ] })
      ] }) }),
      /* @__PURE__ */ d.jsx(jl, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ d.jsxs(Al, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ d.jsx(Sr, { children: "EXPIRING SOON (< 30 DAYS)" }),
        /* @__PURE__ */ d.jsxs(He, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
          /* @__PURE__ */ d.jsx(Fe, { variant: "h6", sx: { fontWeight: 700 }, children: Xn }),
          Xn > 0 && /* @__PURE__ */ d.jsx(
            Zi,
            {
              size: "small",
              label: "Attention Needed",
              color: "warning",
              icon: /* @__PURE__ */ d.jsx(W$, { sx: { fontSize: "14px !important" } }),
              sx: { height: 20, fontSize: "0.6875rem", fontWeight: 700 }
            }
          )
        ] }),
        /* @__PURE__ */ d.jsx(Fe, { variant: "caption", sx: { color: "text.secondary" }, children: Xn === 0 ? "All certificates healthy" : "Certificates need renewal" })
      ] }) }),
      /* @__PURE__ */ d.jsx(jl, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ d.jsxs(Al, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ d.jsx(Sr, { children: "ACME AUTO-RENEWAL" }),
        /* @__PURE__ */ d.jsx(Fe, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, color: "success.main" }, children: "Active" }),
        /* @__PURE__ */ d.jsx(Fe, { variant: "caption", sx: { color: "text.secondary" }, children: "Automated Daily Cron Checks" })
      ] }) })
    ] }),
    /* @__PURE__ */ d.jsxs(Pn, { sx: { border: "1px solid", borderColor: "divider" }, children: [
      /* @__PURE__ */ d.jsxs(
        T$,
        {
          value: t,
          onChange: (_, Ee) => n(Ee),
          sx: {
            borderBottom: "1px solid",
            borderColor: "divider",
            px: 1,
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600, minHeight: 44, fontSize: "0.8125rem" }
          },
          children: [
            /* @__PURE__ */ d.jsx(es, { label: `Certificates (${c.length})`, value: "certs" }),
            /* @__PURE__ */ d.jsx(es, { label: "Issue Let's Encrypt", value: "issue" }),
            /* @__PURE__ */ d.jsx(es, { label: "Upload Custom Cert", value: "custom" }),
            /* @__PURE__ */ d.jsx(es, { label: "Live Logs", value: "logs" }),
            /* @__PURE__ */ d.jsx(es, { label: "Service & Isolation", value: "service" })
          ]
        }
      ),
      /* @__PURE__ */ d.jsxs(ot, { sx: { p: 2.25 }, children: [
        t === "certs" && /* @__PURE__ */ d.jsxs(He, { spacing: 2, children: [
          /* @__PURE__ */ d.jsxs(
            He,
            {
              direction: { xs: "column", sm: "row" },
              spacing: 1.5,
              sx: { justifyContent: "space-between", alignItems: { sm: "center" } },
              children: [
                /* @__PURE__ */ d.jsxs(He, { direction: "row", spacing: 1.5, sx: { flex: 1, maxWidth: { sm: 480 } }, children: [
                  /* @__PURE__ */ d.jsx(
                    Nr,
                    {
                      size: "small",
                      placeholder: "Search by domain or issuer...",
                      value: m,
                      onChange: (_) => y(_.target.value),
                      fullWidth: !0,
                      slotProps: {
                        input: {
                          startAdornment: /* @__PURE__ */ d.jsx(qR, { position: "start", children: /* @__PURE__ */ d.jsx(B$, { sx: { fontSize: 18, color: "text.secondary" } }) })
                        }
                      }
                    }
                  ),
                  /* @__PURE__ */ d.jsxs(
                    ci,
                    {
                      size: "small",
                      value: f,
                      onChange: (_) => x(_.target.value),
                      sx: { minWidth: 140 },
                      children: [
                        /* @__PURE__ */ d.jsx(an, { value: "all", children: "All Issuers" }),
                        /* @__PURE__ */ d.jsx(an, { value: "letsencrypt", children: "Let's Encrypt" }),
                        /* @__PURE__ */ d.jsx(an, { value: "custom", children: "Custom Certs" }),
                        /* @__PURE__ */ d.jsx(an, { value: "expiring", children: "Expiring Soon" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ d.jsx(He, { direction: "row", spacing: 1, children: /* @__PURE__ */ d.jsx(
                  bn,
                  {
                    variant: "contained",
                    size: "small",
                    startIcon: /* @__PURE__ */ d.jsx($$, {}),
                    onClick: () => n("issue"),
                    children: "Issue New Cert"
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ d.jsx(JM, { component: Pn, variant: "outlined", children: /* @__PURE__ */ d.jsxs(DM, { size: "small", children: [
            /* @__PURE__ */ d.jsx(o$, { children: /* @__PURE__ */ d.jsxs(Ku, { children: [
              /* @__PURE__ */ d.jsx(Dn, { children: "Domain" }),
              /* @__PURE__ */ d.jsx(Dn, { children: "Issuer" }),
              /* @__PURE__ */ d.jsx(Dn, { children: "Valid Until" }),
              /* @__PURE__ */ d.jsx(Dn, { children: "Auto-Renew" }),
              /* @__PURE__ */ d.jsx(Dn, { align: "right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ d.jsx(HM, { children: co.length === 0 ? /* @__PURE__ */ d.jsx(Ku, { children: /* @__PURE__ */ d.jsxs(Dn, { colSpan: 5, align: "center", sx: { py: 5, color: "text.secondary" }, children: [
              /* @__PURE__ */ d.jsx(F$, { sx: { fontSize: 32, mb: 1, color: "text.disabled", display: "block", mx: "auto" } }),
              "No SSL certificates found. Issue a free Let's Encrypt cert or upload a custom certificate."
            ] }) }) : co.map((_) => {
              const Ee = _.issuer.toLowerCase().includes("encrypt"), Tt = _.days_left <= 30 && _.days_left > 0, mr = _.days_left <= 0;
              return /* @__PURE__ */ d.jsxs(Ku, { hover: !0, children: [
                /* @__PURE__ */ d.jsx(Dn, { sx: { fontFamily: Pt, fontWeight: 600 }, children: /* @__PURE__ */ d.jsxs(He, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
                  /* @__PURE__ */ d.jsx(z$, { sx: { fontSize: 16, color: "success.main" } }),
                  /* @__PURE__ */ d.jsx("span", { children: _.domain })
                ] }) }),
                /* @__PURE__ */ d.jsx(Dn, { children: /* @__PURE__ */ d.jsx(
                  Zi,
                  {
                    size: "small",
                    label: _.issuer,
                    color: Ee ? "primary" : "default",
                    icon: Ee ? /* @__PURE__ */ d.jsx(_$, { sx: { fontSize: "12px !important" } }) : void 0,
                    sx: { height: 22, fontSize: "0.6875rem" }
                  }
                ) }),
                /* @__PURE__ */ d.jsx(Dn, { children: /* @__PURE__ */ d.jsxs(He, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
                  /* @__PURE__ */ d.jsx(Fe, { variant: "caption", sx: { fontFamily: Pt, color: "text.secondary" }, children: _.valid_to || "90 days" }),
                  /* @__PURE__ */ d.jsx(
                    Zi,
                    {
                      size: "small",
                      label: `${_.days_left}d left`,
                      color: mr ? "error" : Tt ? "warning" : "success",
                      sx: { height: 18, fontSize: "0.625rem", fontWeight: 700 }
                    }
                  )
                ] }) }),
                /* @__PURE__ */ d.jsx(Dn, { children: /* @__PURE__ */ d.jsx(
                  jM,
                  {
                    size: "small",
                    checked: _.auto_renew,
                    disabled: !Ee
                  }
                ) }),
                /* @__PURE__ */ d.jsx(Dn, { align: "right", children: /* @__PURE__ */ d.jsxs(He, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
                  /* @__PURE__ */ d.jsx(yo, { title: "Nginx SSL Directives", children: /* @__PURE__ */ d.jsx(mo, { size: "small", color: "primary", onClick: () => Gn(_.domain), children: /* @__PURE__ */ d.jsx(Gu, { sx: { fontSize: 16 } }) }) }),
                  /* @__PURE__ */ d.jsx(yo, { title: "View Certificate Details", children: /* @__PURE__ */ d.jsx(mo, { size: "small", onClick: () => pr(_), children: /* @__PURE__ */ d.jsx(N$, { sx: { fontSize: 16 } }) }) }),
                  Ee && /* @__PURE__ */ d.jsx(yo, { title: "Renew Now", children: /* @__PURE__ */ d.jsx(mo, { size: "small", color: "primary", onClick: () => ao(_.domain), children: /* @__PURE__ */ d.jsx(Ng, { sx: { fontSize: 16 } }) }) }),
                  /* @__PURE__ */ d.jsx(yo, { title: "Delete Certificate", children: /* @__PURE__ */ d.jsx(
                    mo,
                    {
                      size: "small",
                      color: "error",
                      onClick: () => {
                        Ie(_.domain), Te(!0);
                      },
                      children: /* @__PURE__ */ d.jsx(A$, { sx: { fontSize: 16 } })
                    }
                  ) })
                ] }) })
              ] }, _.domain);
            }) })
          ] }) })
        ] }),
        t === "issue" && /* @__PURE__ */ d.jsxs(He, { spacing: 2.5, sx: { maxWidth: 720 }, children: [
          /* @__PURE__ */ d.jsxs(ot, { children: [
            /* @__PURE__ */ d.jsx(Fe, { variant: "subtitle1", sx: { fontWeight: 700 }, children: "Issue Let's Encrypt Certificate" }),
            /* @__PURE__ */ d.jsx(Fe, { variant: "caption", sx: { color: "text.secondary" }, children: "Automated ACME issuance. Certificates are valid for 90 days and auto-renewed automatically." })
          ] }),
          /* @__PURE__ */ d.jsx(vo, { label: "Domain Name", hint: "e.g. example.com or api.example.com", children: /* @__PURE__ */ d.jsx(
            Nr,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "example.com",
              value: b,
              onChange: (_) => C(_.target.value),
              disabled: I,
              slotProps: { htmlInput: { style: { fontFamily: Pt, fontSize: "0.875rem" } } }
            }
          ) }),
          /* @__PURE__ */ d.jsx(vo, { label: "Notification Email", hint: "For certificate expiration notices", children: /* @__PURE__ */ d.jsx(
            Nr,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "admin@example.com",
              value: g,
              onChange: (_) => h(_.target.value),
              disabled: I
            }
          ) }),
          /* @__PURE__ */ d.jsx(vo, { label: "ACME Challenge Type", children: /* @__PURE__ */ d.jsxs(
            ci,
            {
              size: "small",
              value: S,
              onChange: (_) => w(_.target.value),
              fullWidth: !0,
              disabled: I,
              children: [
                /* @__PURE__ */ d.jsx(an, { value: "http-01", children: "HTTP-01 Challenge (Webroot /.well-known/acme-challenge)" }),
                /* @__PURE__ */ d.jsx(an, { value: "dns-01", children: "DNS-01 Challenge (DNS TXT Record validation)" })
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsxs(He, { spacing: 1, children: [
            /* @__PURE__ */ d.jsx(
              mg,
              {
                control: /* @__PURE__ */ d.jsx(
                  lg,
                  {
                    size: "small",
                    checked: E,
                    onChange: (_) => k(_.target.checked),
                    disabled: I
                  }
                ),
                label: /* @__PURE__ */ d.jsx(Fe, { variant: "body2", children: "Use Let's Encrypt Staging Environment (for testing / dry-run to avoid rate limits)" })
              }
            ),
            /* @__PURE__ */ d.jsx(
              mg,
              {
                control: /* @__PURE__ */ d.jsx(
                  lg,
                  {
                    size: "small",
                    checked: T,
                    onChange: (_) => P(_.target.checked),
                    disabled: I
                  }
                ),
                label: /* @__PURE__ */ d.jsx(Fe, { variant: "body2", children: "I agree to the Let's Encrypt Subscriber Agreement Terms of Service" })
              }
            )
          ] }),
          /* @__PURE__ */ d.jsx(ot, { children: /* @__PURE__ */ d.jsx(
            bn,
            {
              variant: "contained",
              color: "primary",
              onClick: pe,
              disabled: I || !T || !b.trim(),
              startIcon: I ? /* @__PURE__ */ d.jsx(bo, { size: 16, color: "inherit" }) : /* @__PURE__ */ d.jsx(L$, {}),
              children: I ? "Issuing Certificate..." : "Issue Free Certificate"
            }
          ) }),
          ke && /* @__PURE__ */ d.jsxs(
            Pn,
            {
              variant: "outlined",
              sx: {
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "rgba(34, 197, 94, 0.08)",
                borderColor: "success.main"
              },
              children: [
                /* @__PURE__ */ d.jsxs(ot, { children: [
                  /* @__PURE__ */ d.jsxs(Fe, { variant: "subtitle2", sx: { fontWeight: 700, color: "success.main" }, children: [
                    "Certificate ready for ",
                    ke,
                    "!"
                  ] }),
                  /* @__PURE__ */ d.jsx(Fe, { variant: "caption", sx: { color: "text.secondary" }, children: "Copy the Nginx SSL directives to enable HTTPS in your web server configuration." })
                ] }),
                /* @__PURE__ */ d.jsx(
                  bn,
                  {
                    variant: "contained",
                    size: "small",
                    color: "success",
                    startIcon: /* @__PURE__ */ d.jsx(Gu, {}),
                    onClick: () => Gn(ke),
                    children: "View Nginx Directives"
                  }
                )
              ]
            }
          ),
          $.length > 0 && /* @__PURE__ */ d.jsxs(ot, { sx: { mt: 2 }, children: [
            /* @__PURE__ */ d.jsx(Sr, { sx: { mb: 1 }, children: "ACME ISSUANCE STREAM" }),
            /* @__PURE__ */ d.jsx(V$, { lines: $, running: I })
          ] })
        ] }),
        t === "custom" && /* @__PURE__ */ d.jsxs(He, { spacing: 2.5, sx: { maxWidth: 720 }, children: [
          /* @__PURE__ */ d.jsxs(ot, { children: [
            /* @__PURE__ */ d.jsx(Fe, { variant: "subtitle1", sx: { fontWeight: 700 }, children: "Upload Custom SSL / TLS Certificate" }),
            /* @__PURE__ */ d.jsx(Fe, { variant: "caption", sx: { color: "text.secondary" }, children: "Install commercial SSL certificates (Comodo, DigiCert, Sectigo, Cloudflare Custom, etc.) with OpenSSL key-pair validation." })
          ] }),
          /* @__PURE__ */ d.jsx(vo, { label: "Domain Name", hint: "required", children: /* @__PURE__ */ d.jsx(
            Nr,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "example.com",
              value: v,
              onChange: (_) => O(_.target.value),
              slotProps: { htmlInput: { style: { fontFamily: Pt } } }
            }
          ) }),
          /* @__PURE__ */ d.jsx(vo, { label: "Certificate PEM (.crt / .pem)", hint: "-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----", children: /* @__PURE__ */ d.jsx(
            Nr,
            {
              multiline: !0,
              fullWidth: !0,
              minRows: 6,
              maxRows: 12,
              placeholder: `-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----`,
              value: R,
              onChange: (_) => L(_.target.value),
              slotProps: {
                htmlInput: {
                  style: { fontFamily: Pt, fontSize: "0.75rem", backgroundColor: Rt.bg, color: Rt.fg }
                }
              }
            }
          ) }),
          /* @__PURE__ */ d.jsx(vo, { label: "Private Key PEM (.key)", hint: "Stored with 0600 permissions in /opt/hostpanel/etc/ssl/private/", children: /* @__PURE__ */ d.jsx(
            Nr,
            {
              multiline: !0,
              fullWidth: !0,
              minRows: 6,
              maxRows: 12,
              placeholder: `-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----`,
              value: N,
              onChange: (_) => M(_.target.value),
              slotProps: {
                htmlInput: {
                  style: { fontFamily: Pt, fontSize: "0.75rem", backgroundColor: Rt.bg, color: Rt.fg }
                }
              }
            }
          ) }),
          /* @__PURE__ */ d.jsx(vo, { label: "CA Intermediate Bundle PEM (Optional)", hint: "Intermediate / Chain certificates", children: /* @__PURE__ */ d.jsx(
            Nr,
            {
              multiline: !0,
              fullWidth: !0,
              minRows: 4,
              maxRows: 8,
              placeholder: `-----BEGIN CERTIFICATE-----
... (Intermediate CA)
-----END CERTIFICATE-----`,
              value: z,
              onChange: (_) => B(_.target.value),
              slotProps: {
                htmlInput: {
                  style: { fontFamily: Pt, fontSize: "0.75rem", backgroundColor: Rt.bg, color: Rt.fg }
                }
              }
            }
          ) }),
          /* @__PURE__ */ d.jsx(ot, { children: /* @__PURE__ */ d.jsx(
            bn,
            {
              variant: "contained",
              color: "primary",
              onClick: Qe,
              disabled: U || !v.trim() || !R.trim() || !N.trim(),
              startIcon: U ? /* @__PURE__ */ d.jsx(bo, { size: 16, color: "inherit" }) : /* @__PURE__ */ d.jsx(zg, {}),
              children: U ? "Validating & Installing..." : "Validate & Install Certificate"
            }
          ) })
        ] }),
        t === "logs" && /* @__PURE__ */ d.jsxs(He, { spacing: 2, children: [
          /* @__PURE__ */ d.jsxs(
            He,
            {
              direction: "row",
              spacing: 2,
              sx: { alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1.5 },
              children: [
                /* @__PURE__ */ d.jsxs(He, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
                  /* @__PURE__ */ d.jsxs(
                    ci,
                    {
                      size: "small",
                      value: Ge,
                      onChange: (_) => Xe(_.target.value),
                      sx: { minWidth: 140 },
                      children: [
                        /* @__PURE__ */ d.jsx(an, { value: "acme", children: "ACME Issuance Log" }),
                        /* @__PURE__ */ d.jsx(an, { value: "renewal", children: "Auto-Renewal Log" }),
                        /* @__PURE__ */ d.jsx(an, { value: "ssl", children: "SSL Daemon Log" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ d.jsxs(
                    ci,
                    {
                      size: "small",
                      value: ft,
                      onChange: (_) => be(Number(_.target.value)),
                      sx: { minWidth: 100 },
                      children: [
                        /* @__PURE__ */ d.jsx(an, { value: 50, children: "50 lines" }),
                        /* @__PURE__ */ d.jsx(an, { value: 100, children: "100 lines" }),
                        /* @__PURE__ */ d.jsx(an, { value: 200, children: "200 lines" }),
                        /* @__PURE__ */ d.jsx(an, { value: 500, children: "500 lines" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ d.jsx(
                  bn,
                  {
                    variant: "outlined",
                    size: "small",
                    startIcon: /* @__PURE__ */ d.jsx(Fg, {}),
                    onClick: qt,
                    disabled: ie,
                    children: ie ? "Refreshing..." : "Refresh"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ d.jsx(
            Pn,
            {
              sx: {
                p: 2,
                bgcolor: Rt.bg,
                color: Rt.fg,
                fontFamily: Pt,
                fontSize: "0.75rem",
                lineHeight: 1.55,
                borderRadius: "8px",
                maxHeight: 480,
                overflowY: "auto",
                whiteSpace: "pre-wrap"
              },
              children: ie ? /* @__PURE__ */ d.jsx(ot, { sx: { display: "grid", placeItems: "center", py: 4 }, children: /* @__PURE__ */ d.jsx(bo, { size: 20 }) }) : Ve.length === 0 ? /* @__PURE__ */ d.jsxs(
                Fe,
                {
                  variant: "body2",
                  sx: { color: "text.secondary", fontStyle: "italic", textAlign: "center", py: 3 },
                  children: [
                    "No recent log entries in /opt/hostpanel/logs/ssl/",
                    Ge,
                    ".log"
                  ]
                }
              ) : Ve.map((_, Ee) => /* @__PURE__ */ d.jsx("div", { style: { lineHeight: 1.55 }, children: _ }, Ee))
            }
          )
        ] }),
        t === "service" && /* @__PURE__ */ d.jsxs(He, { spacing: 2, children: [
          /* @__PURE__ */ d.jsxs(Bg, { label: "100% ISOLATION STRUCTURE", padded: !0, children: [
            /* @__PURE__ */ d.jsxs(Fe, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
              "All SSL certificates, private keys, ACME challenges, logs, and PID locks reside strictly under",
              " ",
              /* @__PURE__ */ d.jsx("code", { style: { fontFamily: Pt }, children: "/opt/hostpanel" }),
              "."
            ] }),
            /* @__PURE__ */ d.jsxs(He, { spacing: 1.5, children: [
              /* @__PURE__ */ d.jsx(Ut, { label: "CONFIGURATION ROOT", value: "/opt/hostpanel/etc/ssl" }),
              /* @__PURE__ */ d.jsx(Ut, { label: "CERTIFICATES REPOSITORY", value: "/opt/hostpanel/etc/ssl/certs" }),
              /* @__PURE__ */ d.jsx(Ut, { label: "PRIVATE KEYS REPOSITORY", value: "/opt/hostpanel/etc/ssl/private (mode 0700/0600)" }),
              /* @__PURE__ */ d.jsx(Ut, { label: "ACME WORKING & CHALLENGE ROOT", value: "/opt/hostpanel/data/acme" }),
              /* @__PURE__ */ d.jsx(Ut, { label: "LOGS DIRECTORY", value: "/opt/hostpanel/logs/ssl" }),
              /* @__PURE__ */ d.jsx(Ut, { label: "RUN & SOCKETS", value: "/opt/hostpanel/run/ssl" })
            ] })
          ] }),
          /* @__PURE__ */ d.jsx(Bg, { label: "SYSTEM SERVICE & CREDENTIALS", padded: !0, children: /* @__PURE__ */ d.jsxs(He, { spacing: 1.5, children: [
            /* @__PURE__ */ d.jsx(Ut, { label: "SYSTEMD SERVICE UNIT", value: "hostpanel-ssld.service" }),
            /* @__PURE__ */ d.jsx(Ut, { label: "SERVICE USER ACCOUNT", value: "hp-ssl" }),
            /* @__PURE__ */ d.jsx(Ut, { label: "INTERNAL API BINDING", value: "Isolated Loopback (127.0.0.1)" }),
            /* @__PURE__ */ d.jsx(Ut, { label: "OPS HELPER SCRIPT", value: "/opt/hostpanel/packages/ssl/ops/hp-ssl" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs(
      Wu,
      {
        open: Q,
        onClose: () => X(!1),
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ d.jsxs(Hu, { sx: { pb: 1, fontWeight: 600 }, children: [
            "Certificate Details: ",
            G?.domain
          ] }),
          /* @__PURE__ */ d.jsx(Vu, { dividers: !0, sx: { p: 2.5 }, children: he ? /* @__PURE__ */ d.jsx(ot, { sx: { display: "grid", placeItems: "center", py: 4 }, children: /* @__PURE__ */ d.jsx(bo, { size: 24 }) }) : G ? /* @__PURE__ */ d.jsxs(He, { spacing: 2, children: [
            /* @__PURE__ */ d.jsxs(He, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
              /* @__PURE__ */ d.jsx(ot, { sx: { flex: 1 }, children: /* @__PURE__ */ d.jsx(Ut, { label: "DOMAIN / COMMON NAME", value: G.domain }) }),
              /* @__PURE__ */ d.jsx(ot, { sx: { flex: 1 }, children: /* @__PURE__ */ d.jsx(Ut, { label: "ISSUER", value: G.issuer, mono: !1 }) })
            ] }),
            /* @__PURE__ */ d.jsxs(He, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
              /* @__PURE__ */ d.jsx(ot, { sx: { flex: 1 }, children: /* @__PURE__ */ d.jsx(Ut, { label: "VALID FROM", value: G.valid_from || "N/A" }) }),
              /* @__PURE__ */ d.jsx(ot, { sx: { flex: 1 }, children: /* @__PURE__ */ d.jsx(Ut, { label: "VALID UNTIL", value: G.valid_to || "N/A" }) }),
              /* @__PURE__ */ d.jsx(ot, { sx: { flex: 1 }, children: /* @__PURE__ */ d.jsx(Ut, { label: "DAYS REMAINING", value: `${G.days_left} days` }) })
            ] }),
            /* @__PURE__ */ d.jsxs(ot, { children: [
              /* @__PURE__ */ d.jsx(Sr, { sx: { mb: 0.5 }, children: "SUBJECT ALTERNATIVE NAMES (SAN)" }),
              /* @__PURE__ */ d.jsx(He, { direction: "row", spacing: 0.75, sx: { flexWrap: "wrap", gap: 0.5 }, children: (G.san || [G.domain]).map((_) => /* @__PURE__ */ d.jsx(Zi, { label: _, size: "small", sx: { fontFamily: Pt, fontSize: "0.75rem" } }, _)) })
            ] }),
            G.cert_pem && /* @__PURE__ */ d.jsxs(ot, { children: [
              /* @__PURE__ */ d.jsx(Sr, { sx: { mb: 0.5 }, children: "CERTIFICATE PEM" }),
              /* @__PURE__ */ d.jsx(
                Nr,
                {
                  multiline: !0,
                  fullWidth: !0,
                  minRows: 6,
                  maxRows: 10,
                  value: G.cert_pem,
                  slotProps: {
                    htmlInput: {
                      readOnly: !0,
                      style: { fontFamily: Pt, fontSize: "0.6875rem", backgroundColor: Rt.bg, color: Rt.fg }
                    }
                  }
                }
              )
            ] })
          ] }) : null }),
          /* @__PURE__ */ d.jsxs(Uu, { sx: { p: 2, justifyContent: "space-between" }, children: [
            G ? /* @__PURE__ */ d.jsx(
              bn,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ d.jsx(Gu, {}),
                onClick: () => Gn(G.domain),
                children: "Nginx SSL Directives"
              }
            ) : /* @__PURE__ */ d.jsx(ot, {}),
            /* @__PURE__ */ d.jsx(bn, { onClick: () => X(!1), color: "inherit", children: "Close" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ d.jsxs(
      Wu,
      {
        open: re,
        onClose: () => ae(!1),
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ d.jsxs(Hu, { sx: { pb: 1, fontWeight: 600 }, children: [
            "Nginx SSL Directives: ",
            we
          ] }),
          /* @__PURE__ */ d.jsx(Vu, { dividers: !0, sx: { p: 2.5 }, children: /* @__PURE__ */ d.jsxs(He, { spacing: 2, children: [
            /* @__PURE__ */ d.jsxs(Fe, { variant: "body2", sx: { color: "text.secondary" }, children: [
              "To enable SSL in Nginx, paste this block inside your existing",
              " ",
              /* @__PURE__ */ d.jsx("code", { style: { fontFamily: Pt, color: "#38bdf8" }, children: "server { ... }" }),
              " block in ",
              /* @__PURE__ */ d.jsxs("code", { style: { fontFamily: Pt }, children: [
                "/opt/hostpanel/etc/nginx/vhosts/",
                we,
                ".conf"
              ] }),
              " and change",
              " ",
              /* @__PURE__ */ d.jsx("code", { style: { fontFamily: Pt, color: "#eab308" }, children: "listen 80;" }),
              " to",
              " ",
              /* @__PURE__ */ d.jsx("code", { style: { fontFamily: Pt, color: "#22c55e" }, children: "listen 443 ssl;" }),
              "."
            ] }),
            /* @__PURE__ */ d.jsx(
              Pn,
              {
                sx: {
                  p: 2,
                  bgcolor: Rt.bg,
                  color: Rt.fg,
                  fontFamily: Pt,
                  fontSize: "0.8125rem",
                  lineHeight: 1.6,
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  whiteSpace: "pre",
                  overflowX: "auto"
                },
                children: fr(we)
              }
            )
          ] }) }),
          /* @__PURE__ */ d.jsxs(Uu, { sx: { p: 2, justifyContent: "space-between" }, children: [
            /* @__PURE__ */ d.jsx(
              bn,
              {
                variant: "contained",
                color: "primary",
                startIcon: ye ? /* @__PURE__ */ d.jsx(O$, {}) : /* @__PURE__ */ d.jsx(j$, {}),
                onClick: () => Ar(fr(we)),
                children: ye ? "Copied!" : "Copy Snippet"
              }
            ),
            /* @__PURE__ */ d.jsx(bn, { onClick: () => ae(!1), color: "inherit", children: "Close" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ d.jsxs(
      Wu,
      {
        open: je,
        onClose: () => Te(!1),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ d.jsx(Hu, { sx: { fontWeight: 600 }, children: "Delete SSL Certificate" }),
          /* @__PURE__ */ d.jsx(Vu, { sx: { py: 2 }, children: /* @__PURE__ */ d.jsxs(Fe, { variant: "body2", children: [
            "Are you sure you want to permanently delete the SSL certificate and private key for",
            " ",
            /* @__PURE__ */ d.jsx("strong", { children: le }),
            "?"
          ] }) }),
          /* @__PURE__ */ d.jsxs(Uu, { sx: { p: 2 }, children: [
            /* @__PURE__ */ d.jsx(bn, { onClick: () => Te(!1), color: "inherit", children: "Cancel" }),
            /* @__PURE__ */ d.jsx(bn, { variant: "contained", color: "error", onClick: Uo, children: "Delete" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx(
      SM,
      {
        open: !!Ne,
        autoHideDuration: 4e3,
        onClose: () => ee(null),
        message: Ne,
        anchorOrigin: { vertical: "bottom", horizontal: "right" }
      }
    )
  ] });
}
let Ua = null;
function Xx(e, t) {
  return Ua = e0(e), Ua.render(
    /* @__PURE__ */ d.jsx(p.StrictMode, { children: /* @__PURE__ */ d.jsx(H$, { ctx: t }) })
  ), () => {
    Qx();
  };
}
function Qx() {
  const e = Ua;
  Ua = null, e && queueMicrotask(() => e.unmount());
}
typeof window < "u" && (window.HostPanelPackage = { mount: Xx });
const Y$ = { mount: Xx, unmount: Qx };
export {
  Y$ as default,
  Xx as mount,
  Qx as unmount
};
//# sourceMappingURL=main.js.map
