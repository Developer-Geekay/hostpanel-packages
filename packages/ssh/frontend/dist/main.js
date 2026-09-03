var y1 = Object.defineProperty;
var v1 = (e, t, n) => t in e ? y1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var oi = (e, t, n) => v1(e, typeof t != "symbol" ? t + "" : t, n);
function x1(e, t) {
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
function S1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lg = { exports: {} }, da = {}, ag = { exports: {} }, de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ds = Symbol.for("react.element"), w1 = Symbol.for("react.portal"), b1 = Symbol.for("react.fragment"), C1 = Symbol.for("react.strict_mode"), k1 = Symbol.for("react.profiler"), T1 = Symbol.for("react.provider"), E1 = Symbol.for("react.context"), R1 = Symbol.for("react.forward_ref"), P1 = Symbol.for("react.suspense"), $1 = Symbol.for("react.memo"), I1 = Symbol.for("react.lazy"), vp = Symbol.iterator;
function M1(e) {
  return e === null || typeof e != "object" ? null : (e = vp && e[vp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ug = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, cg = Object.assign, dg = {};
function qo(e, t, n) {
  this.props = e, this.context = t, this.refs = dg, this.updater = n || ug;
}
qo.prototype.isReactComponent = {};
qo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
qo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fg() {
}
fg.prototype = qo.prototype;
function Ed(e, t, n) {
  this.props = e, this.context = t, this.refs = dg, this.updater = n || ug;
}
var Rd = Ed.prototype = new fg();
Rd.constructor = Ed;
cg(Rd, qo.prototype);
Rd.isPureReactComponent = !0;
var xp = Array.isArray, pg = Object.prototype.hasOwnProperty, Pd = { current: null }, mg = { key: !0, ref: !0, __self: !0, __source: !0 };
function hg(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) pg.call(t, r) && !mg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: ds, type: e, key: i, ref: s, props: o, _owner: Pd.current };
}
function O1(e, t) {
  return { $$typeof: ds, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function $d(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ds;
}
function A1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Sp = /\/+/g;
function Mu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? A1("" + e.key) : t.toString(36);
}
function ll(e, t, n, r, o) {
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
        case ds:
        case w1:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Mu(s, 0) : r, xp(o) ? (n = "", e != null && (n = e.replace(Sp, "$&/") + "/"), ll(o, t, n, "", function(u) {
    return u;
  })) : o != null && ($d(o) && (o = O1(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Sp, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", xp(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + Mu(i, l);
    s += ll(i, t, n, a, o);
  }
  else if (a = M1(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + Mu(i, l++), s += ll(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function $s(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return ll(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function N1(e) {
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
var _t = { current: null }, al = { transition: null }, L1 = { ReactCurrentDispatcher: _t, ReactCurrentBatchConfig: al, ReactCurrentOwner: Pd };
function gg() {
  throw Error("act(...) is not supported in production builds of React.");
}
de.Children = { map: $s, forEach: function(e, t, n) {
  $s(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return $s(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return $s(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!$d(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
de.Component = qo;
de.Fragment = b1;
de.Profiler = k1;
de.PureComponent = Ed;
de.StrictMode = C1;
de.Suspense = P1;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L1;
de.act = gg;
de.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = cg({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Pd.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) pg.call(t, a) && !mg.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ds, type: e.type, key: o, ref: i, props: r, _owner: s };
};
de.createContext = function(e) {
  return e = { $$typeof: E1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: T1, _context: e }, e.Consumer = e;
};
de.createElement = hg;
de.createFactory = function(e) {
  var t = hg.bind(null, e);
  return t.type = e, t;
};
de.createRef = function() {
  return { current: null };
};
de.forwardRef = function(e) {
  return { $$typeof: R1, render: e };
};
de.isValidElement = $d;
de.lazy = function(e) {
  return { $$typeof: I1, _payload: { _status: -1, _result: e }, _init: N1 };
};
de.memo = function(e, t) {
  return { $$typeof: $1, type: e, compare: t === void 0 ? null : t };
};
de.startTransition = function(e) {
  var t = al.transition;
  al.transition = {};
  try {
    e();
  } finally {
    al.transition = t;
  }
};
de.unstable_act = gg;
de.useCallback = function(e, t) {
  return _t.current.useCallback(e, t);
};
de.useContext = function(e) {
  return _t.current.useContext(e);
};
de.useDebugValue = function() {
};
de.useDeferredValue = function(e) {
  return _t.current.useDeferredValue(e);
};
de.useEffect = function(e, t) {
  return _t.current.useEffect(e, t);
};
de.useId = function() {
  return _t.current.useId();
};
de.useImperativeHandle = function(e, t, n) {
  return _t.current.useImperativeHandle(e, t, n);
};
de.useInsertionEffect = function(e, t) {
  return _t.current.useInsertionEffect(e, t);
};
de.useLayoutEffect = function(e, t) {
  return _t.current.useLayoutEffect(e, t);
};
de.useMemo = function(e, t) {
  return _t.current.useMemo(e, t);
};
de.useReducer = function(e, t, n) {
  return _t.current.useReducer(e, t, n);
};
de.useRef = function(e) {
  return _t.current.useRef(e);
};
de.useState = function(e) {
  return _t.current.useState(e);
};
de.useSyncExternalStore = function(e, t, n) {
  return _t.current.useSyncExternalStore(e, t, n);
};
de.useTransition = function() {
  return _t.current.useTransition();
};
de.version = "18.3.1";
ag.exports = de;
var x = ag.exports;
const yg = /* @__PURE__ */ S1(x), El = /* @__PURE__ */ x1({
  __proto__: null,
  default: yg
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _1 = x, z1 = Symbol.for("react.element"), F1 = Symbol.for("react.fragment"), B1 = Object.prototype.hasOwnProperty, j1 = _1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function vg(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) B1.call(t, r) && !D1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: z1, type: e, key: i, ref: s, props: o, _owner: j1.current };
}
da.Fragment = F1;
da.jsx = vg;
da.jsxs = vg;
lg.exports = da;
var T = lg.exports, xg = { exports: {} }, tn = {}, Sg = { exports: {} }, wg = {};
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
  function t(I, z) {
    var j = I.length;
    I.push(z);
    e: for (; 0 < j; ) {
      var W = j - 1 >>> 1, D = I[W];
      if (0 < o(D, z)) I[W] = z, I[j] = D, j = W;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var z = I[0], j = I.pop();
    if (j !== z) {
      I[0] = j;
      e: for (var W = 0, D = I.length, G = D >>> 1; W < G; ) {
        var Y = 2 * (W + 1) - 1, Q = I[Y], H = Y + 1, te = I[H];
        if (0 > o(Q, j)) H < D && 0 > o(te, Q) ? (I[W] = te, I[H] = j, W = H) : (I[W] = Q, I[Y] = j, W = Y);
        else if (H < D && 0 > o(te, j)) I[W] = te, I[H] = j, W = H;
        else break e;
      }
    }
    return z;
  }
  function o(I, z) {
    var j = I.sortIndex - z.sortIndex;
    return j !== 0 ? j : I.id - z.id;
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
  var a = [], u = [], d = 1, f = null, m = 3, c = !1, y = !1, w = !1, b = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(I) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= I) r(u), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(u);
    }
  }
  function S(I) {
    if (w = !1, v(I), !y) if (n(a) !== null) y = !0, M(k);
    else {
      var z = n(u);
      z !== null && L(S, z.startTime - I);
    }
  }
  function k(I, z) {
    y = !1, w && (w = !1, g(R), R = -1), c = !0;
    var j = m;
    try {
      for (v(z), f = n(a); f !== null && (!(f.expirationTime > z) || I && !P()); ) {
        var W = f.callback;
        if (typeof W == "function") {
          f.callback = null, m = f.priorityLevel;
          var D = W(f.expirationTime <= z);
          z = e.unstable_now(), typeof D == "function" ? f.callback = D : f === n(a) && r(a), v(z);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var G = !0;
      else {
        var Y = n(u);
        Y !== null && L(S, Y.startTime - z), G = !1;
      }
      return G;
    } finally {
      f = null, m = j, c = !1;
    }
  }
  var C = !1, E = null, R = -1, N = 5, _ = -1;
  function P() {
    return !(e.unstable_now() - _ < N);
  }
  function A() {
    if (E !== null) {
      var I = e.unstable_now();
      _ = I;
      var z = !0;
      try {
        z = E(!0, I);
      } finally {
        z ? h() : (C = !1, E = null);
      }
    } else C = !1;
  }
  var h;
  if (typeof p == "function") h = function() {
    p(A);
  };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(), $ = O.port2;
    O.port1.onmessage = A, h = function() {
      $.postMessage(null);
    };
  } else h = function() {
    b(A, 0);
  };
  function M(I) {
    E = I, C || (C = !0, h());
  }
  function L(I, z) {
    R = b(function() {
      I(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    y || c || (y = !0, M(k));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(I) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = m;
    }
    var j = m;
    m = z;
    try {
      return I();
    } finally {
      m = j;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, z) {
    switch (I) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        I = 3;
    }
    var j = m;
    m = I;
    try {
      return z();
    } finally {
      m = j;
    }
  }, e.unstable_scheduleCallback = function(I, z, j) {
    var W = e.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? W + j : W) : j = W, I) {
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
    return D = j + D, I = { id: d++, callback: z, priorityLevel: I, startTime: j, expirationTime: D, sortIndex: -1 }, j > W ? (I.sortIndex = j, t(u, I), n(a) === null && I === n(u) && (w ? (g(R), R = -1) : w = !0, L(S, j - W))) : (I.sortIndex = D, t(a, I), y || c || (y = !0, M(k))), I;
  }, e.unstable_shouldYield = P, e.unstable_wrapCallback = function(I) {
    var z = m;
    return function() {
      var j = m;
      m = z;
      try {
        return I.apply(this, arguments);
      } finally {
        m = j;
      }
    };
  };
})(wg);
Sg.exports = wg;
var U1 = Sg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1 = x, Jt = U1;
function U(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var bg = /* @__PURE__ */ new Set(), Bi = {};
function no(e, t) {
  zo(e, t), zo(e + "Capture", t);
}
function zo(e, t) {
  for (Bi[e] = t, e = 0; e < t.length; e++) bg.add(t[e]);
}
var Zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pc = Object.prototype.hasOwnProperty, V1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wp = {}, bp = {};
function H1(e) {
  return pc.call(bp, e) ? !0 : pc.call(wp, e) ? !1 : V1.test(e) ? bp[e] = !0 : (wp[e] = !0, !1);
}
function K1(e, t, n, r) {
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
function Y1(e, t, n, r) {
  if (t === null || typeof t > "u" || K1(e, t, n, r)) return !0;
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
function zt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var wt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  wt[e] = new zt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  wt[t] = new zt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  wt[e] = new zt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  wt[e] = new zt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  wt[e] = new zt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  wt[e] = new zt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  wt[e] = new zt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  wt[e] = new zt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  wt[e] = new zt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Id = /[\-:]([a-z])/g;
function Md(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Id,
    Md
  );
  wt[t] = new zt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Id, Md);
  wt[t] = new zt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Id, Md);
  wt[t] = new zt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  wt[e] = new zt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
wt.xlinkHref = new zt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  wt[e] = new zt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Od(e, t, n, r) {
  var o = wt.hasOwnProperty(t) ? wt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Y1(t, n, o, r) && (n = null), r || o === null ? H1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ir = W1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Is = Symbol.for("react.element"), ho = Symbol.for("react.portal"), go = Symbol.for("react.fragment"), Ad = Symbol.for("react.strict_mode"), mc = Symbol.for("react.profiler"), Cg = Symbol.for("react.provider"), kg = Symbol.for("react.context"), Nd = Symbol.for("react.forward_ref"), hc = Symbol.for("react.suspense"), gc = Symbol.for("react.suspense_list"), Ld = Symbol.for("react.memo"), lr = Symbol.for("react.lazy"), Tg = Symbol.for("react.offscreen"), Cp = Symbol.iterator;
function ii(e) {
  return e === null || typeof e != "object" ? null : (e = Cp && e[Cp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ye = Object.assign, Ou;
function vi(e) {
  if (Ou === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ou = t && t[1] || "";
  }
  return `
` + Ou + e;
}
var Au = !1;
function Nu(e, t) {
  if (!e || Au) return "";
  Au = !0;
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
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
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
    Au = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? vi(e) : "";
}
function G1(e) {
  switch (e.tag) {
    case 5:
      return vi(e.type);
    case 16:
      return vi("Lazy");
    case 13:
      return vi("Suspense");
    case 19:
      return vi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Nu(e.type, !1), e;
    case 11:
      return e = Nu(e.type.render, !1), e;
    case 1:
      return e = Nu(e.type, !0), e;
    default:
      return "";
  }
}
function yc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case go:
      return "Fragment";
    case ho:
      return "Portal";
    case mc:
      return "Profiler";
    case Ad:
      return "StrictMode";
    case hc:
      return "Suspense";
    case gc:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case kg:
      return (e.displayName || "Context") + ".Consumer";
    case Cg:
      return (e._context.displayName || "Context") + ".Provider";
    case Nd:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ld:
      return t = e.displayName || null, t !== null ? t : yc(e.type) || "Memo";
    case lr:
      t = e._payload, e = e._init;
      try {
        return yc(e(t));
      } catch {
      }
  }
  return null;
}
function Q1(e) {
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
      return yc(t);
    case 8:
      return t === Ad ? "StrictMode" : "Mode";
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
function br(e) {
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
function Eg(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function X1(e) {
  var t = Eg(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ms(e) {
  e._valueTracker || (e._valueTracker = X1(e));
}
function Rg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Eg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Rl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vc(e, t) {
  var n = t.checked;
  return Ye({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function kp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = br(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Pg(e, t) {
  t = t.checked, t != null && Od(e, "checked", t, !1);
}
function xc(e, t) {
  Pg(e, t);
  var n = br(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Sc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Sc(e, t.type, br(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Tp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Sc(e, t, n) {
  (t !== "number" || Rl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xi = Array.isArray;
function Ro(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + br(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function wc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return Ye({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ep(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(U(92));
      if (xi(n)) {
        if (1 < n.length) throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: br(n) };
}
function $g(e, t) {
  var n = br(t.value), r = br(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Rp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ig(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function bc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ig(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Os, Mg = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Os = Os || document.createElement("div"), Os.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Os.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ji(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ki = {
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
}, q1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ki).forEach(function(e) {
  q1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ki[t] = ki[e];
  });
});
function Og(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ki.hasOwnProperty(e) && ki[e] ? ("" + t).trim() : t + "px";
}
function Ag(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Og(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Z1 = Ye({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Cc(e, t) {
  if (t) {
    if (Z1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function kc(e, t) {
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
var Tc = null;
function _d(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ec = null, Po = null, $o = null;
function Pp(e) {
  if (e = ms(e)) {
    if (typeof Ec != "function") throw Error(U(280));
    var t = e.stateNode;
    t && (t = ga(t), Ec(e.stateNode, e.type, t));
  }
}
function Ng(e) {
  Po ? $o ? $o.push(e) : $o = [e] : Po = e;
}
function Lg() {
  if (Po) {
    var e = Po, t = $o;
    if ($o = Po = null, Pp(e), t) for (e = 0; e < t.length; e++) Pp(t[e]);
  }
}
function _g(e, t) {
  return e(t);
}
function zg() {
}
var Lu = !1;
function Fg(e, t, n) {
  if (Lu) return e(t, n);
  Lu = !0;
  try {
    return _g(e, t, n);
  } finally {
    Lu = !1, (Po !== null || $o !== null) && (zg(), Lg());
  }
}
function Di(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ga(n);
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
  if (n && typeof n != "function") throw Error(U(231, t, typeof n));
  return n;
}
var Rc = !1;
if (Zn) try {
  var si = {};
  Object.defineProperty(si, "passive", { get: function() {
    Rc = !0;
  } }), window.addEventListener("test", si, si), window.removeEventListener("test", si, si);
} catch {
  Rc = !1;
}
function J1(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Ti = !1, Pl = null, $l = !1, Pc = null, ex = { onError: function(e) {
  Ti = !0, Pl = e;
} };
function tx(e, t, n, r, o, i, s, l, a) {
  Ti = !1, Pl = null, J1.apply(ex, arguments);
}
function nx(e, t, n, r, o, i, s, l, a) {
  if (tx.apply(this, arguments), Ti) {
    if (Ti) {
      var u = Pl;
      Ti = !1, Pl = null;
    } else throw Error(U(198));
    $l || ($l = !0, Pc = u);
  }
}
function ro(e) {
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
function Bg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function $p(e) {
  if (ro(e) !== e) throw Error(U(188));
}
function rx(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ro(e), t === null) throw Error(U(188));
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
        if (i === n) return $p(o), e;
        if (i === r) return $p(o), t;
        i = i.sibling;
      }
      throw Error(U(188));
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
        if (!s) throw Error(U(189));
      }
    }
    if (n.alternate !== r) throw Error(U(190));
  }
  if (n.tag !== 3) throw Error(U(188));
  return n.stateNode.current === n ? e : t;
}
function jg(e) {
  return e = rx(e), e !== null ? Dg(e) : null;
}
function Dg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Dg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ug = Jt.unstable_scheduleCallback, Ip = Jt.unstable_cancelCallback, ox = Jt.unstable_shouldYield, ix = Jt.unstable_requestPaint, Je = Jt.unstable_now, sx = Jt.unstable_getCurrentPriorityLevel, zd = Jt.unstable_ImmediatePriority, Wg = Jt.unstable_UserBlockingPriority, Il = Jt.unstable_NormalPriority, lx = Jt.unstable_LowPriority, Vg = Jt.unstable_IdlePriority, fa = null, Ln = null;
function ax(e) {
  if (Ln && typeof Ln.onCommitFiberRoot == "function") try {
    Ln.onCommitFiberRoot(fa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Tn = Math.clz32 ? Math.clz32 : dx, ux = Math.log, cx = Math.LN2;
function dx(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ux(e) / cx | 0) | 0;
}
var As = 64, Ns = 4194304;
function Si(e) {
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
function Ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = Si(l) : (i &= s, i !== 0 && (r = Si(i)));
  } else s = n & ~o, s !== 0 ? r = Si(s) : i !== 0 && (r = Si(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Tn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function fx(e, t) {
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
function px(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Tn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = fx(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function $c(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Hg() {
  var e = As;
  return As <<= 1, !(As & 4194240) && (As = 64), e;
}
function _u(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fs(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Tn(t), e[t] = n;
}
function mx(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Tn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Fd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Tn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var $e = 0;
function Kg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Yg, Bd, Gg, Qg, Xg, Ic = !1, Ls = [], pr = null, mr = null, hr = null, Ui = /* @__PURE__ */ new Map(), Wi = /* @__PURE__ */ new Map(), ur = [], hx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Mp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pr = null;
      break;
    case "dragenter":
    case "dragleave":
      mr = null;
      break;
    case "mouseover":
    case "mouseout":
      hr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ui.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wi.delete(t.pointerId);
  }
}
function li(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = ms(t), t !== null && Bd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function gx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return pr = li(pr, e, t, n, r, o), !0;
    case "dragenter":
      return mr = li(mr, e, t, n, r, o), !0;
    case "mouseover":
      return hr = li(hr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ui.set(i, li(Ui.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Wi.set(i, li(Wi.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function qg(e) {
  var t = Br(e.target);
  if (t !== null) {
    var n = ro(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Bg(n), t !== null) {
          e.blockedOn = t, Xg(e.priority, function() {
            Gg(n);
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
function ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Tc = r, n.target.dispatchEvent(r), Tc = null;
    } else return t = ms(n), t !== null && Bd(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Op(e, t, n) {
  ul(e) && n.delete(t);
}
function yx() {
  Ic = !1, pr !== null && ul(pr) && (pr = null), mr !== null && ul(mr) && (mr = null), hr !== null && ul(hr) && (hr = null), Ui.forEach(Op), Wi.forEach(Op);
}
function ai(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ic || (Ic = !0, Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority, yx)));
}
function Vi(e) {
  function t(o) {
    return ai(o, e);
  }
  if (0 < Ls.length) {
    ai(Ls[0], e);
    for (var n = 1; n < Ls.length; n++) {
      var r = Ls[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (pr !== null && ai(pr, e), mr !== null && ai(mr, e), hr !== null && ai(hr, e), Ui.forEach(t), Wi.forEach(t), n = 0; n < ur.length; n++) r = ur[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ur.length && (n = ur[0], n.blockedOn === null); ) qg(n), n.blockedOn === null && ur.shift();
}
var Io = ir.ReactCurrentBatchConfig, Ol = !0;
function vx(e, t, n, r) {
  var o = $e, i = Io.transition;
  Io.transition = null;
  try {
    $e = 1, jd(e, t, n, r);
  } finally {
    $e = o, Io.transition = i;
  }
}
function xx(e, t, n, r) {
  var o = $e, i = Io.transition;
  Io.transition = null;
  try {
    $e = 4, jd(e, t, n, r);
  } finally {
    $e = o, Io.transition = i;
  }
}
function jd(e, t, n, r) {
  if (Ol) {
    var o = Mc(e, t, n, r);
    if (o === null) Ku(e, t, r, Al, n), Mp(e, r);
    else if (gx(o, e, t, n, r)) r.stopPropagation();
    else if (Mp(e, r), t & 4 && -1 < hx.indexOf(e)) {
      for (; o !== null; ) {
        var i = ms(o);
        if (i !== null && Yg(i), i = Mc(e, t, n, r), i === null && Ku(e, t, r, Al, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ku(e, t, r, null, n);
  }
}
var Al = null;
function Mc(e, t, n, r) {
  if (Al = null, e = _d(r), e = Br(e), e !== null) if (t = ro(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Bg(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Al = e, null;
}
function Zg(e) {
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
      switch (sx()) {
        case zd:
          return 1;
        case Wg:
          return 4;
        case Il:
        case lx:
          return 16;
        case Vg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dr = null, Dd = null, cl = null;
function Jg() {
  if (cl) return cl;
  var e, t = Dd, n = t.length, r, o = "value" in dr ? dr.value : dr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return cl = o.slice(e, 1 < r ? 1 - r : void 0);
}
function dl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _s() {
  return !0;
}
function Ap() {
  return !1;
}
function nn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _s : Ap, this.isPropagationStopped = Ap, this;
  }
  return Ye(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _s);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _s);
  }, persist: function() {
  }, isPersistent: _s }), t;
}
var Zo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ud = nn(Zo), ps = Ye({}, Zo, { view: 0, detail: 0 }), Sx = nn(ps), zu, Fu, ui, pa = Ye({}, ps, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ui && (ui && e.type === "mousemove" ? (zu = e.screenX - ui.screenX, Fu = e.screenY - ui.screenY) : Fu = zu = 0, ui = e), zu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fu;
} }), Np = nn(pa), wx = Ye({}, pa, { dataTransfer: 0 }), bx = nn(wx), Cx = Ye({}, ps, { relatedTarget: 0 }), Bu = nn(Cx), kx = Ye({}, Zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Tx = nn(kx), Ex = Ye({}, Zo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Rx = nn(Ex), Px = Ye({}, Zo, { data: 0 }), Lp = nn(Px), $x = {
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
}, Ix = {
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
}, Mx = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ox(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Mx[e]) ? !!t[e] : !1;
}
function Wd() {
  return Ox;
}
var Ax = Ye({}, ps, { key: function(e) {
  if (e.key) {
    var t = $x[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = dl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ix[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wd, charCode: function(e) {
  return e.type === "keypress" ? dl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? dl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Nx = nn(Ax), Lx = Ye({}, pa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _p = nn(Lx), _x = Ye({}, ps, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wd }), zx = nn(_x), Fx = Ye({}, Zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bx = nn(Fx), jx = Ye({}, pa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Dx = nn(jx), Ux = [9, 13, 27, 32], Vd = Zn && "CompositionEvent" in window, Ei = null;
Zn && "documentMode" in document && (Ei = document.documentMode);
var Wx = Zn && "TextEvent" in window && !Ei, ey = Zn && (!Vd || Ei && 8 < Ei && 11 >= Ei), zp = " ", Fp = !1;
function ty(e, t) {
  switch (e) {
    case "keyup":
      return Ux.indexOf(t.keyCode) !== -1;
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
function ny(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yo = !1;
function Vx(e, t) {
  switch (e) {
    case "compositionend":
      return ny(t);
    case "keypress":
      return t.which !== 32 ? null : (Fp = !0, zp);
    case "textInput":
      return e = t.data, e === zp && Fp ? null : e;
    default:
      return null;
  }
}
function Hx(e, t) {
  if (yo) return e === "compositionend" || !Vd && ty(e, t) ? (e = Jg(), cl = Dd = dr = null, yo = !1, e) : null;
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
      return ey && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kx = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Bp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kx[e.type] : t === "textarea";
}
function ry(e, t, n, r) {
  Ng(r), t = Nl(t, "onChange"), 0 < t.length && (n = new Ud("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ri = null, Hi = null;
function Yx(e) {
  my(e, 0);
}
function ma(e) {
  var t = So(e);
  if (Rg(t)) return e;
}
function Gx(e, t) {
  if (e === "change") return t;
}
var oy = !1;
if (Zn) {
  var ju;
  if (Zn) {
    var Du = "oninput" in document;
    if (!Du) {
      var jp = document.createElement("div");
      jp.setAttribute("oninput", "return;"), Du = typeof jp.oninput == "function";
    }
    ju = Du;
  } else ju = !1;
  oy = ju && (!document.documentMode || 9 < document.documentMode);
}
function Dp() {
  Ri && (Ri.detachEvent("onpropertychange", iy), Hi = Ri = null);
}
function iy(e) {
  if (e.propertyName === "value" && ma(Hi)) {
    var t = [];
    ry(t, Hi, e, _d(e)), Fg(Yx, t);
  }
}
function Qx(e, t, n) {
  e === "focusin" ? (Dp(), Ri = t, Hi = n, Ri.attachEvent("onpropertychange", iy)) : e === "focusout" && Dp();
}
function Xx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ma(Hi);
}
function qx(e, t) {
  if (e === "click") return ma(t);
}
function Zx(e, t) {
  if (e === "input" || e === "change") return ma(t);
}
function Jx(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Rn = typeof Object.is == "function" ? Object.is : Jx;
function Ki(e, t) {
  if (Rn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!pc.call(t, o) || !Rn(e[o], t[o])) return !1;
  }
  return !0;
}
function Up(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wp(e, t) {
  var n = Up(e);
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
    n = Up(n);
  }
}
function sy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ly() {
  for (var e = window, t = Rl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Rl(e.document);
  }
  return t;
}
function Hd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function eS(e) {
  var t = ly(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && sy(n.ownerDocument.documentElement, n)) {
    if (r !== null && Hd(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Wp(n, i);
        var s = Wp(
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
var tS = Zn && "documentMode" in document && 11 >= document.documentMode, vo = null, Oc = null, Pi = null, Ac = !1;
function Vp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ac || vo == null || vo !== Rl(r) || (r = vo, "selectionStart" in r && Hd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Pi && Ki(Pi, r) || (Pi = r, r = Nl(Oc, "onSelect"), 0 < r.length && (t = new Ud("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vo)));
}
function zs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var xo = { animationend: zs("Animation", "AnimationEnd"), animationiteration: zs("Animation", "AnimationIteration"), animationstart: zs("Animation", "AnimationStart"), transitionend: zs("Transition", "TransitionEnd") }, Uu = {}, ay = {};
Zn && (ay = document.createElement("div").style, "AnimationEvent" in window || (delete xo.animationend.animation, delete xo.animationiteration.animation, delete xo.animationstart.animation), "TransitionEvent" in window || delete xo.transitionend.transition);
function ha(e) {
  if (Uu[e]) return Uu[e];
  if (!xo[e]) return e;
  var t = xo[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ay) return Uu[e] = t[n];
  return e;
}
var uy = ha("animationend"), cy = ha("animationiteration"), dy = ha("animationstart"), fy = ha("transitionend"), py = /* @__PURE__ */ new Map(), Hp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Er(e, t) {
  py.set(e, t), no(t, [e]);
}
for (var Wu = 0; Wu < Hp.length; Wu++) {
  var Vu = Hp[Wu], nS = Vu.toLowerCase(), rS = Vu[0].toUpperCase() + Vu.slice(1);
  Er(nS, "on" + rS);
}
Er(uy, "onAnimationEnd");
Er(cy, "onAnimationIteration");
Er(dy, "onAnimationStart");
Er("dblclick", "onDoubleClick");
Er("focusin", "onFocus");
Er("focusout", "onBlur");
Er(fy, "onTransitionEnd");
zo("onMouseEnter", ["mouseout", "mouseover"]);
zo("onMouseLeave", ["mouseout", "mouseover"]);
zo("onPointerEnter", ["pointerout", "pointerover"]);
zo("onPointerLeave", ["pointerout", "pointerover"]);
no("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
no("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
no("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
no("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
no("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
no("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), oS = new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));
function Kp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, nx(r, t, void 0, e), e.currentTarget = null;
}
function my(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Kp(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Kp(o, l, u), i = a;
      }
    }
  }
  if ($l) throw e = Pc, $l = !1, Pc = null, e;
}
function Fe(e, t) {
  var n = t[Fc];
  n === void 0 && (n = t[Fc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (hy(t, e, 2, !1), n.add(r));
}
function Hu(e, t, n) {
  var r = 0;
  t && (r |= 4), hy(n, e, r, t);
}
var Fs = "_reactListening" + Math.random().toString(36).slice(2);
function Yi(e) {
  if (!e[Fs]) {
    e[Fs] = !0, bg.forEach(function(n) {
      n !== "selectionchange" && (oS.has(n) || Hu(n, !1, e), Hu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fs] || (t[Fs] = !0, Hu("selectionchange", !1, t));
  }
}
function hy(e, t, n, r) {
  switch (Zg(t)) {
    case 1:
      var o = vx;
      break;
    case 4:
      o = xx;
      break;
    default:
      o = jd;
  }
  n = o.bind(null, t, n, e), o = void 0, !Rc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ku(e, t, n, r, o) {
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
        if (s = Br(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Fg(function() {
    var u = i, d = _d(n), f = [];
    e: {
      var m = py.get(e);
      if (m !== void 0) {
        var c = Ud, y = e;
        switch (e) {
          case "keypress":
            if (dl(n) === 0) break e;
          case "keydown":
          case "keyup":
            c = Nx;
            break;
          case "focusin":
            y = "focus", c = Bu;
            break;
          case "focusout":
            y = "blur", c = Bu;
            break;
          case "beforeblur":
          case "afterblur":
            c = Bu;
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
            c = Np;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            c = bx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            c = zx;
            break;
          case uy:
          case cy:
          case dy:
            c = Tx;
            break;
          case fy:
            c = Bx;
            break;
          case "scroll":
            c = Sx;
            break;
          case "wheel":
            c = Dx;
            break;
          case "copy":
          case "cut":
          case "paste":
            c = Rx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            c = _p;
        }
        var w = (t & 4) !== 0, b = !w && e === "scroll", g = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var S = v.stateNode;
          if (v.tag === 5 && S !== null && (v = S, g !== null && (S = Di(p, g), S != null && w.push(Gi(p, S, v)))), b) break;
          p = p.return;
        }
        0 < w.length && (m = new c(m, y, null, n, d), f.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", m && n !== Tc && (y = n.relatedTarget || n.fromElement) && (Br(y) || y[Jn])) break e;
        if ((c || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, c ? (y = n.relatedTarget || n.toElement, c = u, y = y ? Br(y) : null, y !== null && (b = ro(y), y !== b || y.tag !== 5 && y.tag !== 6) && (y = null)) : (c = null, y = u), c !== y)) {
          if (w = Np, S = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = _p, S = "onPointerLeave", g = "onPointerEnter", p = "pointer"), b = c == null ? m : So(c), v = y == null ? m : So(y), m = new w(S, p + "leave", c, n, d), m.target = b, m.relatedTarget = v, S = null, Br(d) === u && (w = new w(g, p + "enter", y, n, d), w.target = v, w.relatedTarget = b, S = w), b = S, c && y) t: {
            for (w = c, g = y, p = 0, v = w; v; v = so(v)) p++;
            for (v = 0, S = g; S; S = so(S)) v++;
            for (; 0 < p - v; ) w = so(w), p--;
            for (; 0 < v - p; ) g = so(g), v--;
            for (; p--; ) {
              if (w === g || g !== null && w === g.alternate) break t;
              w = so(w), g = so(g);
            }
            w = null;
          }
          else w = null;
          c !== null && Yp(f, m, c, w, !1), y !== null && b !== null && Yp(f, b, y, w, !0);
        }
      }
      e: {
        if (m = u ? So(u) : window, c = m.nodeName && m.nodeName.toLowerCase(), c === "select" || c === "input" && m.type === "file") var k = Gx;
        else if (Bp(m)) if (oy) k = Zx;
        else {
          k = Xx;
          var C = Qx;
        }
        else (c = m.nodeName) && c.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (k = qx);
        if (k && (k = k(e, u))) {
          ry(f, k, n, d);
          break e;
        }
        C && C(e, m, u), e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && Sc(m, "number", m.value);
      }
      switch (C = u ? So(u) : window, e) {
        case "focusin":
          (Bp(C) || C.contentEditable === "true") && (vo = C, Oc = u, Pi = null);
          break;
        case "focusout":
          Pi = Oc = vo = null;
          break;
        case "mousedown":
          Ac = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ac = !1, Vp(f, n, d);
          break;
        case "selectionchange":
          if (tS) break;
        case "keydown":
        case "keyup":
          Vp(f, n, d);
      }
      var E;
      if (Vd) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else yo ? ty(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (ey && n.locale !== "ko" && (yo || R !== "onCompositionStart" ? R === "onCompositionEnd" && yo && (E = Jg()) : (dr = d, Dd = "value" in dr ? dr.value : dr.textContent, yo = !0)), C = Nl(u, R), 0 < C.length && (R = new Lp(R, e, null, n, d), f.push({ event: R, listeners: C }), E ? R.data = E : (E = ny(n), E !== null && (R.data = E)))), (E = Wx ? Vx(e, n) : Hx(e, n)) && (u = Nl(u, "onBeforeInput"), 0 < u.length && (d = new Lp("onBeforeInput", "beforeinput", null, n, d), f.push({ event: d, listeners: u }), d.data = E));
    }
    my(f, t);
  });
}
function Gi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Nl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Di(e, n), i != null && r.unshift(Gi(e, i, o)), i = Di(e, t), i != null && r.push(Gi(e, i, o))), e = e.return;
  }
  return r;
}
function so(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = Di(n, i), a != null && s.unshift(Gi(n, a, l))) : o || (a = Di(n, i), a != null && s.push(Gi(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var iS = /\r\n?/g, sS = /\u0000|\uFFFD/g;
function Gp(e) {
  return (typeof e == "string" ? e : "" + e).replace(iS, `
`).replace(sS, "");
}
function Bs(e, t, n) {
  if (t = Gp(t), Gp(e) !== t && n) throw Error(U(425));
}
function Ll() {
}
var Nc = null, Lc = null;
function _c(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var zc = typeof setTimeout == "function" ? setTimeout : void 0, lS = typeof clearTimeout == "function" ? clearTimeout : void 0, Qp = typeof Promise == "function" ? Promise : void 0, aS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qp < "u" ? function(e) {
  return Qp.resolve(null).then(e).catch(uS);
} : zc;
function uS(e) {
  setTimeout(function() {
    throw e;
  });
}
function Yu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Vi(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Vi(t);
}
function gr(e) {
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
function Xp(e) {
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
var Jo = Math.random().toString(36).slice(2), Nn = "__reactFiber$" + Jo, Qi = "__reactProps$" + Jo, Jn = "__reactContainer$" + Jo, Fc = "__reactEvents$" + Jo, cS = "__reactListeners$" + Jo, dS = "__reactHandles$" + Jo;
function Br(e) {
  var t = e[Nn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Jn] || n[Nn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Xp(e); e !== null; ) {
        if (n = e[Nn]) return n;
        e = Xp(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ms(e) {
  return e = e[Nn] || e[Jn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function So(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function ga(e) {
  return e[Qi] || null;
}
var Bc = [], wo = -1;
function Rr(e) {
  return { current: e };
}
function Be(e) {
  0 > wo || (e.current = Bc[wo], Bc[wo] = null, wo--);
}
function Le(e, t) {
  wo++, Bc[wo] = e.current, e.current = t;
}
var Cr = {}, It = Rr(Cr), Dt = Rr(!1), Kr = Cr;
function Fo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Cr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ut(e) {
  return e = e.childContextTypes, e != null;
}
function _l() {
  Be(Dt), Be(It);
}
function qp(e, t, n) {
  if (It.current !== Cr) throw Error(U(168));
  Le(It, t), Le(Dt, n);
}
function gy(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(U(108, Q1(e) || "Unknown", o));
  return Ye({}, n, r);
}
function zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Cr, Kr = It.current, Le(It, e), Le(Dt, Dt.current), !0;
}
function Zp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(U(169));
  n ? (e = gy(e, t, Kr), r.__reactInternalMemoizedMergedChildContext = e, Be(Dt), Be(It), Le(It, e)) : Be(Dt), Le(Dt, n);
}
var Hn = null, ya = !1, Gu = !1;
function yy(e) {
  Hn === null ? Hn = [e] : Hn.push(e);
}
function fS(e) {
  ya = !0, yy(e);
}
function Pr() {
  if (!Gu && Hn !== null) {
    Gu = !0;
    var e = 0, t = $e;
    try {
      var n = Hn;
      for ($e = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Hn = null, ya = !1;
    } catch (o) {
      throw Hn !== null && (Hn = Hn.slice(e + 1)), Ug(zd, Pr), o;
    } finally {
      $e = t, Gu = !1;
    }
  }
  return null;
}
var bo = [], Co = 0, Fl = null, Bl = 0, ln = [], an = 0, Yr = null, Yn = 1, Gn = "";
function Lr(e, t) {
  bo[Co++] = Bl, bo[Co++] = Fl, Fl = e, Bl = t;
}
function vy(e, t, n) {
  ln[an++] = Yn, ln[an++] = Gn, ln[an++] = Yr, Yr = e;
  var r = Yn;
  e = Gn;
  var o = 32 - Tn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Tn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Yn = 1 << 32 - Tn(t) + o | n << o | r, Gn = i + e;
  } else Yn = 1 << i | n << o | r, Gn = e;
}
function Kd(e) {
  e.return !== null && (Lr(e, 1), vy(e, 1, 0));
}
function Yd(e) {
  for (; e === Fl; ) Fl = bo[--Co], bo[Co] = null, Bl = bo[--Co], bo[Co] = null;
  for (; e === Yr; ) Yr = ln[--an], ln[an] = null, Gn = ln[--an], ln[an] = null, Yn = ln[--an], ln[an] = null;
}
var qt = null, Xt = null, Ue = !1, kn = null;
function xy(e, t) {
  var n = dn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Jp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qt = e, Xt = gr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qt = e, Xt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Yr !== null ? { id: Yn, overflow: Gn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = dn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qt = e, Xt = null, !0) : !1;
    default:
      return !1;
  }
}
function jc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Dc(e) {
  if (Ue) {
    var t = Xt;
    if (t) {
      var n = t;
      if (!Jp(e, t)) {
        if (jc(e)) throw Error(U(418));
        t = gr(n.nextSibling);
        var r = qt;
        t && Jp(e, t) ? xy(r, n) : (e.flags = e.flags & -4097 | 2, Ue = !1, qt = e);
      }
    } else {
      if (jc(e)) throw Error(U(418));
      e.flags = e.flags & -4097 | 2, Ue = !1, qt = e;
    }
  }
}
function em(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  qt = e;
}
function js(e) {
  if (e !== qt) return !1;
  if (!Ue) return em(e), Ue = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_c(e.type, e.memoizedProps)), t && (t = Xt)) {
    if (jc(e)) throw Sy(), Error(U(418));
    for (; t; ) xy(e, t), t = gr(t.nextSibling);
  }
  if (em(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xt = gr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Xt = null;
    }
  } else Xt = qt ? gr(e.stateNode.nextSibling) : null;
  return !0;
}
function Sy() {
  for (var e = Xt; e; ) e = gr(e.nextSibling);
}
function Bo() {
  Xt = qt = null, Ue = !1;
}
function Gd(e) {
  kn === null ? kn = [e] : kn.push(e);
}
var pS = ir.ReactCurrentBatchConfig;
function ci(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(U(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(U(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(U(284));
    if (!n._owner) throw Error(U(290, e));
  }
  return e;
}
function Ds(e, t) {
  throw e = Object.prototype.toString.call(t), Error(U(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function tm(e) {
  var t = e._init;
  return t(e._payload);
}
function wy(e) {
  function t(g, p) {
    if (e) {
      var v = g.deletions;
      v === null ? (g.deletions = [p], g.flags |= 16) : v.push(p);
    }
  }
  function n(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), p = p.sibling;
    return null;
  }
  function r(g, p) {
    for (g = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? g.set(p.key, p) : g.set(p.index, p), p = p.sibling;
    return g;
  }
  function o(g, p) {
    return g = Sr(g, p), g.index = 0, g.sibling = null, g;
  }
  function i(g, p, v) {
    return g.index = v, e ? (v = g.alternate, v !== null ? (v = v.index, v < p ? (g.flags |= 2, p) : v) : (g.flags |= 2, p)) : (g.flags |= 1048576, p);
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, p, v, S) {
    return p === null || p.tag !== 6 ? (p = tc(v, g.mode, S), p.return = g, p) : (p = o(p, v), p.return = g, p);
  }
  function a(g, p, v, S) {
    var k = v.type;
    return k === go ? d(g, p, v.props.children, S, v.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === lr && tm(k) === p.type) ? (S = o(p, v.props), S.ref = ci(g, p, v), S.return = g, S) : (S = vl(v.type, v.key, v.props, null, g.mode, S), S.ref = ci(g, p, v), S.return = g, S);
  }
  function u(g, p, v, S) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = nc(v, g.mode, S), p.return = g, p) : (p = o(p, v.children || []), p.return = g, p);
  }
  function d(g, p, v, S, k) {
    return p === null || p.tag !== 7 ? (p = Vr(v, g.mode, S, k), p.return = g, p) : (p = o(p, v), p.return = g, p);
  }
  function f(g, p, v) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = tc("" + p, g.mode, v), p.return = g, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Is:
          return v = vl(p.type, p.key, p.props, null, g.mode, v), v.ref = ci(g, null, p), v.return = g, v;
        case ho:
          return p = nc(p, g.mode, v), p.return = g, p;
        case lr:
          var S = p._init;
          return f(g, S(p._payload), v);
      }
      if (xi(p) || ii(p)) return p = Vr(p, g.mode, v, null), p.return = g, p;
      Ds(g, p);
    }
    return null;
  }
  function m(g, p, v, S) {
    var k = p !== null ? p.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return k !== null ? null : l(g, p, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Is:
          return v.key === k ? a(g, p, v, S) : null;
        case ho:
          return v.key === k ? u(g, p, v, S) : null;
        case lr:
          return k = v._init, m(
            g,
            p,
            k(v._payload),
            S
          );
      }
      if (xi(v) || ii(v)) return k !== null ? null : d(g, p, v, S, null);
      Ds(g, v);
    }
    return null;
  }
  function c(g, p, v, S, k) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return g = g.get(v) || null, l(p, g, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Is:
          return g = g.get(S.key === null ? v : S.key) || null, a(p, g, S, k);
        case ho:
          return g = g.get(S.key === null ? v : S.key) || null, u(p, g, S, k);
        case lr:
          var C = S._init;
          return c(g, p, v, C(S._payload), k);
      }
      if (xi(S) || ii(S)) return g = g.get(v) || null, d(p, g, S, k, null);
      Ds(p, S);
    }
    return null;
  }
  function y(g, p, v, S) {
    for (var k = null, C = null, E = p, R = p = 0, N = null; E !== null && R < v.length; R++) {
      E.index > R ? (N = E, E = null) : N = E.sibling;
      var _ = m(g, E, v[R], S);
      if (_ === null) {
        E === null && (E = N);
        break;
      }
      e && E && _.alternate === null && t(g, E), p = i(_, p, R), C === null ? k = _ : C.sibling = _, C = _, E = N;
    }
    if (R === v.length) return n(g, E), Ue && Lr(g, R), k;
    if (E === null) {
      for (; R < v.length; R++) E = f(g, v[R], S), E !== null && (p = i(E, p, R), C === null ? k = E : C.sibling = E, C = E);
      return Ue && Lr(g, R), k;
    }
    for (E = r(g, E); R < v.length; R++) N = c(E, g, R, v[R], S), N !== null && (e && N.alternate !== null && E.delete(N.key === null ? R : N.key), p = i(N, p, R), C === null ? k = N : C.sibling = N, C = N);
    return e && E.forEach(function(P) {
      return t(g, P);
    }), Ue && Lr(g, R), k;
  }
  function w(g, p, v, S) {
    var k = ii(v);
    if (typeof k != "function") throw Error(U(150));
    if (v = k.call(v), v == null) throw Error(U(151));
    for (var C = k = null, E = p, R = p = 0, N = null, _ = v.next(); E !== null && !_.done; R++, _ = v.next()) {
      E.index > R ? (N = E, E = null) : N = E.sibling;
      var P = m(g, E, _.value, S);
      if (P === null) {
        E === null && (E = N);
        break;
      }
      e && E && P.alternate === null && t(g, E), p = i(P, p, R), C === null ? k = P : C.sibling = P, C = P, E = N;
    }
    if (_.done) return n(
      g,
      E
    ), Ue && Lr(g, R), k;
    if (E === null) {
      for (; !_.done; R++, _ = v.next()) _ = f(g, _.value, S), _ !== null && (p = i(_, p, R), C === null ? k = _ : C.sibling = _, C = _);
      return Ue && Lr(g, R), k;
    }
    for (E = r(g, E); !_.done; R++, _ = v.next()) _ = c(E, g, R, _.value, S), _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? R : _.key), p = i(_, p, R), C === null ? k = _ : C.sibling = _, C = _);
    return e && E.forEach(function(A) {
      return t(g, A);
    }), Ue && Lr(g, R), k;
  }
  function b(g, p, v, S) {
    if (typeof v == "object" && v !== null && v.type === go && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Is:
          e: {
            for (var k = v.key, C = p; C !== null; ) {
              if (C.key === k) {
                if (k = v.type, k === go) {
                  if (C.tag === 7) {
                    n(g, C.sibling), p = o(C, v.props.children), p.return = g, g = p;
                    break e;
                  }
                } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === lr && tm(k) === C.type) {
                  n(g, C.sibling), p = o(C, v.props), p.ref = ci(g, C, v), p.return = g, g = p;
                  break e;
                }
                n(g, C);
                break;
              } else t(g, C);
              C = C.sibling;
            }
            v.type === go ? (p = Vr(v.props.children, g.mode, S, v.key), p.return = g, g = p) : (S = vl(v.type, v.key, v.props, null, g.mode, S), S.ref = ci(g, p, v), S.return = g, g = S);
          }
          return s(g);
        case ho:
          e: {
            for (C = v.key; p !== null; ) {
              if (p.key === C) if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                n(g, p.sibling), p = o(p, v.children || []), p.return = g, g = p;
                break e;
              } else {
                n(g, p);
                break;
              }
              else t(g, p);
              p = p.sibling;
            }
            p = nc(v, g.mode, S), p.return = g, g = p;
          }
          return s(g);
        case lr:
          return C = v._init, b(g, p, C(v._payload), S);
      }
      if (xi(v)) return y(g, p, v, S);
      if (ii(v)) return w(g, p, v, S);
      Ds(g, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, p !== null && p.tag === 6 ? (n(g, p.sibling), p = o(p, v), p.return = g, g = p) : (n(g, p), p = tc(v, g.mode, S), p.return = g, g = p), s(g)) : n(g, p);
  }
  return b;
}
var jo = wy(!0), by = wy(!1), jl = Rr(null), Dl = null, ko = null, Qd = null;
function Xd() {
  Qd = ko = Dl = null;
}
function qd(e) {
  var t = jl.current;
  Be(jl), e._currentValue = t;
}
function Uc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Mo(e, t) {
  Dl = e, Qd = ko = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (jt = !0), e.firstContext = null);
}
function mn(e) {
  var t = e._currentValue;
  if (Qd !== e) if (e = { context: e, memoizedValue: t, next: null }, ko === null) {
    if (Dl === null) throw Error(U(308));
    ko = e, Dl.dependencies = { lanes: 0, firstContext: e };
  } else ko = ko.next = e;
  return t;
}
var jr = null;
function Zd(e) {
  jr === null ? jr = [e] : jr.push(e);
}
function Cy(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Zd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, er(e, r);
}
function er(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ar = !1;
function Jd(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ky(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function qn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Se & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, er(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Zd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, er(e, n);
}
function fl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fd(e, n);
  }
}
function nm(e, t) {
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
function Ul(e, t, n, r) {
  var o = e.updateQueue;
  ar = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var f = o.baseState;
    s = 0, d = u = a = null, l = i;
    do {
      var m = l.lane, c = l.eventTime;
      if ((r & m) === m) {
        d !== null && (d = d.next = {
          eventTime: c,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var y = e, w = l;
          switch (m = t, c = n, w.tag) {
            case 1:
              if (y = w.payload, typeof y == "function") {
                f = y.call(c, f, m);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = w.payload, m = typeof y == "function" ? y.call(c, f, m) : y, m == null) break e;
              f = Ye({}, f, m);
              break e;
            case 2:
              ar = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [l] : m.push(l));
      } else c = { eventTime: c, lane: m, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (u = d = c, a = f) : d = d.next = c, s |= m;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        m = l, l = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Qr |= s, e.lanes = s, e.memoizedState = f;
  }
}
function rm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(U(191, o));
      o.call(r);
    }
  }
}
var hs = {}, _n = Rr(hs), Xi = Rr(hs), qi = Rr(hs);
function Dr(e) {
  if (e === hs) throw Error(U(174));
  return e;
}
function ef(e, t) {
  switch (Le(qi, t), Le(Xi, e), Le(_n, hs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : bc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = bc(t, e);
  }
  Be(_n), Le(_n, t);
}
function Do() {
  Be(_n), Be(Xi), Be(qi);
}
function Ty(e) {
  Dr(qi.current);
  var t = Dr(_n.current), n = bc(t, e.type);
  t !== n && (Le(Xi, e), Le(_n, n));
}
function tf(e) {
  Xi.current === e && (Be(_n), Be(Xi));
}
var He = Rr(0);
function Wl(e) {
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
var Qu = [];
function nf() {
  for (var e = 0; e < Qu.length; e++) Qu[e]._workInProgressVersionPrimary = null;
  Qu.length = 0;
}
var pl = ir.ReactCurrentDispatcher, Xu = ir.ReactCurrentBatchConfig, Gr = 0, Ke = null, at = null, pt = null, Vl = !1, $i = !1, Zi = 0, mS = 0;
function kt() {
  throw Error(U(321));
}
function rf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Rn(e[n], t[n])) return !1;
  return !0;
}
function of(e, t, n, r, o, i) {
  if (Gr = i, Ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, pl.current = e === null || e.memoizedState === null ? vS : xS, e = n(r, o), $i) {
    i = 0;
    do {
      if ($i = !1, Zi = 0, 25 <= i) throw Error(U(301));
      i += 1, pt = at = null, t.updateQueue = null, pl.current = SS, e = n(r, o);
    } while ($i);
  }
  if (pl.current = Hl, t = at !== null && at.next !== null, Gr = 0, pt = at = Ke = null, Vl = !1, t) throw Error(U(300));
  return e;
}
function sf() {
  var e = Zi !== 0;
  return Zi = 0, e;
}
function Mn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return pt === null ? Ke.memoizedState = pt = e : pt = pt.next = e, pt;
}
function hn() {
  if (at === null) {
    var e = Ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = at.next;
  var t = pt === null ? Ke.memoizedState : pt.next;
  if (t !== null) pt = t, at = e;
  else {
    if (e === null) throw Error(U(310));
    at = e, e = { memoizedState: at.memoizedState, baseState: at.baseState, baseQueue: at.baseQueue, queue: at.queue, next: null }, pt === null ? Ke.memoizedState = pt = e : pt = pt.next = e;
  }
  return pt;
}
function Ji(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qu(e) {
  var t = hn(), n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = at, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var l = s = null, a = null, u = i;
    do {
      var d = u.lane;
      if ((Gr & d) === d) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = f, s = r) : a = a.next = f, Ke.lanes |= d, Qr |= d;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, Rn(r, t.memoizedState) || (jt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ke.lanes |= i, Qr |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zu(e) {
  var t = hn(), n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Rn(i, t.memoizedState) || (jt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Ey() {
}
function Ry(e, t) {
  var n = Ke, r = hn(), o = t(), i = !Rn(r.memoizedState, o);
  if (i && (r.memoizedState = o, jt = !0), r = r.queue, lf(Iy.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || pt !== null && pt.memoizedState.tag & 1) {
    if (n.flags |= 2048, es(9, $y.bind(null, n, r, o, t), void 0, null), mt === null) throw Error(U(349));
    Gr & 30 || Py(n, t, o);
  }
  return o;
}
function Py(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function $y(e, t, n, r) {
  t.value = n, t.getSnapshot = r, My(t) && Oy(e);
}
function Iy(e, t, n) {
  return n(function() {
    My(t) && Oy(e);
  });
}
function My(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rn(e, n);
  } catch {
    return !0;
  }
}
function Oy(e) {
  var t = er(e, 1);
  t !== null && En(t, e, 1, -1);
}
function om(e) {
  var t = Mn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ji, lastRenderedState: e }, t.queue = e, e = e.dispatch = yS.bind(null, Ke, e), [t.memoizedState, e];
}
function es(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ay() {
  return hn().memoizedState;
}
function ml(e, t, n, r) {
  var o = Mn();
  Ke.flags |= e, o.memoizedState = es(1 | t, n, void 0, r === void 0 ? null : r);
}
function va(e, t, n, r) {
  var o = hn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (at !== null) {
    var s = at.memoizedState;
    if (i = s.destroy, r !== null && rf(r, s.deps)) {
      o.memoizedState = es(t, n, i, r);
      return;
    }
  }
  Ke.flags |= e, o.memoizedState = es(1 | t, n, i, r);
}
function im(e, t) {
  return ml(8390656, 8, e, t);
}
function lf(e, t) {
  return va(2048, 8, e, t);
}
function Ny(e, t) {
  return va(4, 2, e, t);
}
function Ly(e, t) {
  return va(4, 4, e, t);
}
function _y(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function zy(e, t, n) {
  return n = n != null ? n.concat([e]) : null, va(4, 4, _y.bind(null, t, e), n);
}
function af() {
}
function Fy(e, t) {
  var n = hn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function By(e, t) {
  var n = hn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function jy(e, t, n) {
  return Gr & 21 ? (Rn(n, t) || (n = Hg(), Ke.lanes |= n, Qr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, jt = !0), e.memoizedState = n);
}
function hS(e, t) {
  var n = $e;
  $e = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Xu.transition;
  Xu.transition = {};
  try {
    e(!1), t();
  } finally {
    $e = n, Xu.transition = r;
  }
}
function Dy() {
  return hn().memoizedState;
}
function gS(e, t, n) {
  var r = xr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Uy(e)) Wy(t, n);
  else if (n = Cy(e, t, n, r), n !== null) {
    var o = Lt();
    En(n, e, r, o), Vy(n, t, r);
  }
}
function yS(e, t, n) {
  var r = xr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Uy(e)) Wy(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Rn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Zd(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Cy(e, t, o, r), n !== null && (o = Lt(), En(n, e, r, o), Vy(n, t, r));
  }
}
function Uy(e) {
  var t = e.alternate;
  return e === Ke || t !== null && t === Ke;
}
function Wy(e, t) {
  $i = Vl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Vy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fd(e, n);
  }
}
var Hl = { readContext: mn, useCallback: kt, useContext: kt, useEffect: kt, useImperativeHandle: kt, useInsertionEffect: kt, useLayoutEffect: kt, useMemo: kt, useReducer: kt, useRef: kt, useState: kt, useDebugValue: kt, useDeferredValue: kt, useTransition: kt, useMutableSource: kt, useSyncExternalStore: kt, useId: kt, unstable_isNewReconciler: !1 }, vS = { readContext: mn, useCallback: function(e, t) {
  return Mn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: mn, useEffect: im, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ml(
    4194308,
    4,
    _y.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ml(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ml(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Mn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Mn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = gS.bind(null, Ke, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Mn();
  return e = { current: e }, t.memoizedState = e;
}, useState: om, useDebugValue: af, useDeferredValue: function(e) {
  return Mn().memoizedState = e;
}, useTransition: function() {
  var e = om(!1), t = e[0];
  return e = hS.bind(null, e[1]), Mn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ke, o = Mn();
  if (Ue) {
    if (n === void 0) throw Error(U(407));
    n = n();
  } else {
    if (n = t(), mt === null) throw Error(U(349));
    Gr & 30 || Py(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, im(Iy.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, es(9, $y.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Mn(), t = mt.identifierPrefix;
  if (Ue) {
    var n = Gn, r = Yn;
    n = (r & ~(1 << 32 - Tn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = mS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, xS = {
  readContext: mn,
  useCallback: Fy,
  useContext: mn,
  useEffect: lf,
  useImperativeHandle: zy,
  useInsertionEffect: Ny,
  useLayoutEffect: Ly,
  useMemo: By,
  useReducer: qu,
  useRef: Ay,
  useState: function() {
    return qu(Ji);
  },
  useDebugValue: af,
  useDeferredValue: function(e) {
    var t = hn();
    return jy(t, at.memoizedState, e);
  },
  useTransition: function() {
    var e = qu(Ji)[0], t = hn().memoizedState;
    return [e, t];
  },
  useMutableSource: Ey,
  useSyncExternalStore: Ry,
  useId: Dy,
  unstable_isNewReconciler: !1
}, SS = { readContext: mn, useCallback: Fy, useContext: mn, useEffect: lf, useImperativeHandle: zy, useInsertionEffect: Ny, useLayoutEffect: Ly, useMemo: By, useReducer: Zu, useRef: Ay, useState: function() {
  return Zu(Ji);
}, useDebugValue: af, useDeferredValue: function(e) {
  var t = hn();
  return at === null ? t.memoizedState = e : jy(t, at.memoizedState, e);
}, useTransition: function() {
  var e = Zu(Ji)[0], t = hn().memoizedState;
  return [e, t];
}, useMutableSource: Ey, useSyncExternalStore: Ry, useId: Dy, unstable_isNewReconciler: !1 };
function bn(e, t) {
  if (e && e.defaultProps) {
    t = Ye({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ye({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xa = { isMounted: function(e) {
  return (e = e._reactInternals) ? ro(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Lt(), o = xr(e), i = qn(r, o);
  i.payload = t, n != null && (i.callback = n), t = yr(e, i, o), t !== null && (En(t, e, o, r), fl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Lt(), o = xr(e), i = qn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = yr(e, i, o), t !== null && (En(t, e, o, r), fl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Lt(), r = xr(e), o = qn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = yr(e, o, r), t !== null && (En(t, e, r, n), fl(t, e, r));
} };
function sm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ki(n, r) || !Ki(o, i) : !0;
}
function Hy(e, t, n) {
  var r = !1, o = Cr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = mn(i) : (o = Ut(t) ? Kr : It.current, r = t.contextTypes, i = (r = r != null) ? Fo(e, o) : Cr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = xa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function lm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && xa.enqueueReplaceState(t, t.state, null);
}
function Vc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Jd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = mn(i) : (i = Ut(t) ? Kr : It.current, o.context = Fo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Wc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && xa.enqueueReplaceState(o, o.state, null), Ul(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Uo(e, t) {
  try {
    var n = "", r = t;
    do
      n += G1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ju(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var wS = typeof WeakMap == "function" ? WeakMap : Map;
function Ky(e, t, n) {
  n = qn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Yl || (Yl = !0, td = r), Hc(e, t);
  }, n;
}
function Yy(e, t, n) {
  n = qn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Hc(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Hc(e, t), typeof r != "function" && (vr === null ? vr = /* @__PURE__ */ new Set([this]) : vr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function am(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = LS.bind(null, e, t, n), t.then(e, e));
}
function um(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qn(-1, 1), t.tag = 2, yr(n, t, 1))), n.lanes |= 1), e);
}
var bS = ir.ReactCurrentOwner, jt = !1;
function At(e, t, n, r) {
  t.child = e === null ? by(t, null, n, r) : jo(t, e.child, n, r);
}
function dm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Mo(t, o), r = of(e, t, n, r, i, o), n = sf(), e !== null && !jt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, tr(e, t, o)) : (Ue && n && Kd(t), t.flags |= 1, At(e, t, r, o), t.child);
}
function fm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !gf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Gy(e, t, i, r, o)) : (e = vl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ki, n(s, r) && e.ref === t.ref) return tr(e, t, o);
  }
  return t.flags |= 1, e = Sr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Gy(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ki(i, r) && e.ref === t.ref) if (jt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (jt = !0);
    else return t.lanes = e.lanes, tr(e, t, o);
  }
  return Kc(e, t, n, r, o);
}
function Qy(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Le(Eo, Yt), Yt |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Le(Eo, Yt), Yt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Le(Eo, Yt), Yt |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Le(Eo, Yt), Yt |= r;
  return At(e, t, o, n), t.child;
}
function Xy(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Kc(e, t, n, r, o) {
  var i = Ut(n) ? Kr : It.current;
  return i = Fo(t, i), Mo(t, o), n = of(e, t, n, r, i, o), r = sf(), e !== null && !jt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, tr(e, t, o)) : (Ue && r && Kd(t), t.flags |= 1, At(e, t, n, o), t.child);
}
function pm(e, t, n, r, o) {
  if (Ut(n)) {
    var i = !0;
    zl(t);
  } else i = !1;
  if (Mo(t, o), t.stateNode === null) hl(e, t), Hy(t, n, r), Vc(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = mn(u) : (u = Ut(n) ? Kr : It.current, u = Fo(t, u));
    var d = n.getDerivedStateFromProps, f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && lm(t, s, r, u), ar = !1;
    var m = t.memoizedState;
    s.state = m, Ul(t, r, s, o), a = t.memoizedState, l !== r || m !== a || Dt.current || ar ? (typeof d == "function" && (Wc(t, n, d, r), a = t.memoizedState), (l = ar || sm(t, n, l, r, m, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, ky(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : bn(t.type, l), s.props = u, f = t.pendingProps, m = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = mn(a) : (a = Ut(n) ? Kr : It.current, a = Fo(t, a));
    var c = n.getDerivedStateFromProps;
    (d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || m !== a) && lm(t, s, r, a), ar = !1, m = t.memoizedState, s.state = m, Ul(t, r, s, o);
    var y = t.memoizedState;
    l !== f || m !== y || Dt.current || ar ? (typeof c == "function" && (Wc(t, n, c, r), y = t.memoizedState), (u = ar || sm(t, n, u, r, m, y, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Yc(e, t, n, r, i, o);
}
function Yc(e, t, n, r, o, i) {
  Xy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Zp(t, n, !1), tr(e, t, i);
  r = t.stateNode, bS.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = jo(t, e.child, null, i), t.child = jo(t, null, l, i)) : At(e, t, l, i), t.memoizedState = r.state, o && Zp(t, n, !0), t.child;
}
function qy(e) {
  var t = e.stateNode;
  t.pendingContext ? qp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qp(e, t.context, !1), ef(e, t.containerInfo);
}
function mm(e, t, n, r, o) {
  return Bo(), Gd(o), t.flags |= 256, At(e, t, n, r), t.child;
}
var Gc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zy(e, t, n) {
  var r = t.pendingProps, o = He.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Le(He, o & 1), e === null)
    return Dc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = ba(s, r, 0, null), e = Vr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Qc(n), t.memoizedState = Gc, e) : uf(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return CS(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Sr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Sr(l, i) : (i = Vr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Qc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Gc, r;
  }
  return i = e.child, e = i.sibling, r = Sr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function uf(e, t) {
  return t = ba({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Us(e, t, n, r) {
  return r !== null && Gd(r), jo(t, e.child, null, n), e = uf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function CS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ju(Error(U(422))), Us(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ba({ mode: "visible", children: r.children }, o, 0, null), i = Vr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && jo(t, e.child, null, s), t.child.memoizedState = Qc(s), t.memoizedState = Gc, i);
  if (!(t.mode & 1)) return Us(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(U(419)), r = Ju(i, r, void 0), Us(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, jt || l) {
    if (r = mt, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, er(e, o), En(r, e, o, -1));
    }
    return hf(), r = Ju(Error(U(421))), Us(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = _S.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Xt = gr(o.nextSibling), qt = t, Ue = !0, kn = null, e !== null && (ln[an++] = Yn, ln[an++] = Gn, ln[an++] = Yr, Yn = e.id, Gn = e.overflow, Yr = t), t = uf(t, r.children), t.flags |= 4096, t);
}
function hm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Uc(e.return, t, n);
}
function ec(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Jy(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (At(e, t, r.children, n), r = He.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && hm(e, n, t);
      else if (e.tag === 19) hm(e, n, t);
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
  if (Le(He, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Wl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ec(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Wl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      ec(t, !0, n, null, i);
      break;
    case "together":
      ec(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function hl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function tr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Qr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(U(153));
  if (t.child !== null) {
    for (e = t.child, n = Sr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Sr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function kS(e, t, n) {
  switch (t.tag) {
    case 3:
      qy(t), Bo();
      break;
    case 5:
      Ty(t);
      break;
    case 1:
      Ut(t.type) && zl(t);
      break;
    case 4:
      ef(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Le(jl, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Le(He, He.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Zy(e, t, n) : (Le(He, He.current & 1), e = tr(e, t, n), e !== null ? e.sibling : null);
      Le(He, He.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Jy(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Le(He, He.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Qy(e, t, n);
  }
  return tr(e, t, n);
}
var ev, Xc, tv, nv;
ev = function(e, t) {
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
Xc = function() {
};
tv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Dr(_n.current);
    var i = null;
    switch (n) {
      case "input":
        o = vc(e, o), r = vc(e, r), i = [];
        break;
      case "select":
        o = Ye({}, o, { value: void 0 }), r = Ye({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = wc(e, o), r = wc(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ll);
    }
    Cc(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Bi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Bi.hasOwnProperty(u) ? (a != null && u === "onScroll" && Fe("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
nv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function di(e, t) {
  if (!Ue) switch (e.tailMode) {
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
function Tt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function TS(e, t, n) {
  var r = t.pendingProps;
  switch (Yd(t), t.tag) {
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
      return Tt(t), null;
    case 1:
      return Ut(t.type) && _l(), Tt(t), null;
    case 3:
      return r = t.stateNode, Do(), Be(Dt), Be(It), nf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (js(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, kn !== null && (od(kn), kn = null))), Xc(e, t), Tt(t), null;
    case 5:
      tf(t);
      var o = Dr(qi.current);
      if (n = t.type, e !== null && t.stateNode != null) tv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166));
          return Tt(t), null;
        }
        if (e = Dr(_n.current), js(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Nn] = t, r[Qi] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Fe("cancel", r), Fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Fe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < wi.length; o++) Fe(wi[o], r);
              break;
            case "source":
              Fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Fe(
                "error",
                r
              ), Fe("load", r);
              break;
            case "details":
              Fe("toggle", r);
              break;
            case "input":
              kp(r, i), Fe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Fe("invalid", r);
              break;
            case "textarea":
              Ep(r, i), Fe("invalid", r);
          }
          Cc(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Bs(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Bs(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Bi.hasOwnProperty(s) && l != null && s === "onScroll" && Fe("scroll", r);
          }
          switch (n) {
            case "input":
              Ms(r), Tp(r, i, !0);
              break;
            case "textarea":
              Ms(r), Rp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ll);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ig(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Nn] = t, e[Qi] = r, ev(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = kc(n, r), n) {
              case "dialog":
                Fe("cancel", e), Fe("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Fe("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < wi.length; o++) Fe(wi[o], e);
                o = r;
                break;
              case "source":
                Fe("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Fe(
                  "error",
                  e
                ), Fe("load", e), o = r;
                break;
              case "details":
                Fe("toggle", e), o = r;
                break;
              case "input":
                kp(e, r), o = vc(e, r), Fe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ye({}, r, { value: void 0 }), Fe("invalid", e);
                break;
              case "textarea":
                Ep(e, r), o = wc(e, r), Fe("invalid", e);
                break;
              default:
                o = r;
            }
            Cc(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Ag(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Mg(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ji(e, a) : typeof a == "number" && ji(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Bi.hasOwnProperty(i) ? a != null && i === "onScroll" && Fe("scroll", e) : a != null && Od(e, i, a, s));
            }
            switch (n) {
              case "input":
                Ms(e), Tp(e, r, !1);
                break;
              case "textarea":
                Ms(e), Rp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + br(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Ro(e, !!r.multiple, i, !1) : r.defaultValue != null && Ro(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ll);
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
      return Tt(t), null;
    case 6:
      if (e && t.stateNode != null) nv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(U(166));
        if (n = Dr(qi.current), Dr(_n.current), js(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Nn] = t, (i = r.nodeValue !== n) && (e = qt, e !== null)) switch (e.tag) {
            case 3:
              Bs(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Bs(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Nn] = t, t.stateNode = r;
      }
      return Tt(t), null;
    case 13:
      if (Be(He), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ue && Xt !== null && t.mode & 1 && !(t.flags & 128)) Sy(), Bo(), t.flags |= 98560, i = !1;
        else if (i = js(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(U(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(U(317));
            i[Nn] = t;
          } else Bo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Tt(t), i = !1;
        } else kn !== null && (od(kn), kn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || He.current & 1 ? ut === 0 && (ut = 3) : hf())), t.updateQueue !== null && (t.flags |= 4), Tt(t), null);
    case 4:
      return Do(), Xc(e, t), e === null && Yi(t.stateNode.containerInfo), Tt(t), null;
    case 10:
      return qd(t.type._context), Tt(t), null;
    case 17:
      return Ut(t.type) && _l(), Tt(t), null;
    case 19:
      if (Be(He), i = t.memoizedState, i === null) return Tt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) di(i, !1);
      else {
        if (ut !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Wl(e), s !== null) {
            for (t.flags |= 128, di(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Le(He, He.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Je() > Wo && (t.flags |= 128, r = !0, di(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Wl(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), di(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ue) return Tt(t), null;
        } else 2 * Je() - i.renderingStartTime > Wo && n !== 1073741824 && (t.flags |= 128, r = !0, di(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Je(), t.sibling = null, n = He.current, Le(He, r ? n & 1 | 2 : n & 1), t) : (Tt(t), null);
    case 22:
    case 23:
      return mf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Yt & 1073741824 && (Tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function ES(e, t) {
  switch (Yd(t), t.tag) {
    case 1:
      return Ut(t.type) && _l(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Do(), Be(Dt), Be(It), nf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return tf(t), null;
    case 13:
      if (Be(He), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(U(340));
        Bo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Be(He), null;
    case 4:
      return Do(), null;
    case 10:
      return qd(t.type._context), null;
    case 22:
    case 23:
      return mf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ws = !1, Pt = !1, RS = typeof WeakSet == "function" ? WeakSet : Set, X = null;
function To(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Qe(e, t, r);
  }
  else n.current = null;
}
function qc(e, t, n) {
  try {
    n();
  } catch (r) {
    Qe(e, t, r);
  }
}
var gm = !1;
function PS(e, t) {
  if (Nc = Ol, e = ly(), Hd(e)) {
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
        var s = 0, l = -1, a = -1, u = 0, d = 0, f = e, m = null;
        t: for (; ; ) {
          for (var c; f !== n || o !== 0 && f.nodeType !== 3 || (l = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (c = f.firstChild) !== null; )
            m = f, f = c;
          for (; ; ) {
            if (f === e) break t;
            if (m === n && ++u === o && (l = s), m === i && ++d === r && (a = s), (c = f.nextSibling) !== null) break;
            f = m, m = f.parentNode;
          }
          f = c;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Lc = { focusedElem: e, selectionRange: n }, Ol = !1, X = t; X !== null; ) if (t = X, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, X = e;
  else for (; X !== null; ) {
    t = X;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var w = y.memoizedProps, b = y.memoizedState, g = t.stateNode, p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? w : bn(t.type, w), b);
            g.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var v = t.stateNode.containerInfo;
          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(U(163));
      }
    } catch (S) {
      Qe(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, X = e;
      break;
    }
    X = t.return;
  }
  return y = gm, gm = !1, y;
}
function Ii(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && qc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Sa(e, t) {
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
function Zc(e) {
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
function rv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, rv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nn], delete t[Qi], delete t[Fc], delete t[cS], delete t[dS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ov(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ym(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ov(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Jc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ll));
  else if (r !== 4 && (e = e.child, e !== null)) for (Jc(e, t, n), e = e.sibling; e !== null; ) Jc(e, t, n), e = e.sibling;
}
function ed(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ed(e, t, n), e = e.sibling; e !== null; ) ed(e, t, n), e = e.sibling;
}
var vt = null, Cn = !1;
function sr(e, t, n) {
  for (n = n.child; n !== null; ) iv(e, t, n), n = n.sibling;
}
function iv(e, t, n) {
  if (Ln && typeof Ln.onCommitFiberUnmount == "function") try {
    Ln.onCommitFiberUnmount(fa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Pt || To(n, t);
    case 6:
      var r = vt, o = Cn;
      vt = null, sr(e, t, n), vt = r, Cn = o, vt !== null && (Cn ? (e = vt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : vt.removeChild(n.stateNode));
      break;
    case 18:
      vt !== null && (Cn ? (e = vt, n = n.stateNode, e.nodeType === 8 ? Yu(e.parentNode, n) : e.nodeType === 1 && Yu(e, n), Vi(e)) : Yu(vt, n.stateNode));
      break;
    case 4:
      r = vt, o = Cn, vt = n.stateNode.containerInfo, Cn = !0, sr(e, t, n), vt = r, Cn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Pt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && qc(n, t, s), o = o.next;
        } while (o !== r);
      }
      sr(e, t, n);
      break;
    case 1:
      if (!Pt && (To(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        Qe(n, t, l);
      }
      sr(e, t, n);
      break;
    case 21:
      sr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Pt = (r = Pt) || n.memoizedState !== null, sr(e, t, n), Pt = r) : sr(e, t, n);
      break;
    default:
      sr(e, t, n);
  }
}
function vm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new RS()), t.forEach(function(r) {
      var o = zS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Sn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            vt = l.stateNode, Cn = !1;
            break e;
          case 3:
            vt = l.stateNode.containerInfo, Cn = !0;
            break e;
          case 4:
            vt = l.stateNode.containerInfo, Cn = !0;
            break e;
        }
        l = l.return;
      }
      if (vt === null) throw Error(U(160));
      iv(i, s, o), vt = null, Cn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      Qe(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sv(t, e), t = t.sibling;
}
function sv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Sn(t, e), Pn(e), r & 4) {
        try {
          Ii(3, e, e.return), Sa(3, e);
        } catch (w) {
          Qe(e, e.return, w);
        }
        try {
          Ii(5, e, e.return);
        } catch (w) {
          Qe(e, e.return, w);
        }
      }
      break;
    case 1:
      Sn(t, e), Pn(e), r & 512 && n !== null && To(n, n.return);
      break;
    case 5:
      if (Sn(t, e), Pn(e), r & 512 && n !== null && To(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ji(o, "");
        } catch (w) {
          Qe(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && Pg(o, i), kc(l, s);
          var u = kc(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], f = a[s + 1];
            d === "style" ? Ag(o, f) : d === "dangerouslySetInnerHTML" ? Mg(o, f) : d === "children" ? ji(o, f) : Od(o, d, f, u);
          }
          switch (l) {
            case "input":
              xc(o, i);
              break;
            case "textarea":
              $g(o, i);
              break;
            case "select":
              var m = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var c = i.value;
              c != null ? Ro(o, !!i.multiple, c, !1) : m !== !!i.multiple && (i.defaultValue != null ? Ro(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Ro(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Qi] = i;
        } catch (w) {
          Qe(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Sn(t, e), Pn(e), r & 4) {
        if (e.stateNode === null) throw Error(U(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (w) {
          Qe(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Sn(t, e), Pn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Vi(t.containerInfo);
      } catch (w) {
        Qe(e, e.return, w);
      }
      break;
    case 4:
      Sn(t, e), Pn(e);
      break;
    case 13:
      Sn(t, e), Pn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ff = Je())), r & 4 && vm(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Pt = (u = Pt) || d, Sn(t, e), Pt = u) : Sn(t, e), Pn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (X = e, d = e.child; d !== null; ) {
          for (f = X = d; X !== null; ) {
            switch (m = X, c = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ii(4, m, m.return);
                break;
              case 1:
                To(m, m.return);
                var y = m.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (w) {
                    Qe(r, n, w);
                  }
                }
                break;
              case 5:
                To(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Sm(f);
                  continue;
                }
            }
            c !== null ? (c.return = m, X = c) : Sm(f);
          }
          d = d.sibling;
        }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Og("display", s));
              } catch (w) {
                Qe(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (d === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (w) {
              Qe(e, e.return, w);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), f = f.return;
          }
          d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      Sn(t, e), Pn(e), r & 4 && vm(e);
      break;
    case 21:
      break;
    default:
      Sn(
        t,
        e
      ), Pn(e);
  }
}
function Pn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ov(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(U(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ji(o, ""), r.flags &= -33);
          var i = ym(e);
          ed(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = ym(e);
          Jc(e, l, s);
          break;
        default:
          throw Error(U(161));
      }
    } catch (a) {
      Qe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $S(e, t, n) {
  X = e, lv(e);
}
function lv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; X !== null; ) {
    var o = X, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ws;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Pt;
        l = Ws;
        var u = Pt;
        if (Ws = s, (Pt = a) && !u) for (X = o; X !== null; ) s = X, a = s.child, s.tag === 22 && s.memoizedState !== null ? wm(o) : a !== null ? (a.return = s, X = a) : wm(o);
        for (; i !== null; ) X = i, lv(i), i = i.sibling;
        X = o, Ws = l, Pt = u;
      }
      xm(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, X = i) : xm(e);
  }
}
function xm(e) {
  for (; X !== null; ) {
    var t = X;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Pt || Sa(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Pt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : bn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && rm(t, i, r);
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
              rm(t, s, n);
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
              var u = t.alternate;
              if (u !== null) {
                var d = u.memoizedState;
                if (d !== null) {
                  var f = d.dehydrated;
                  f !== null && Vi(f);
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
            throw Error(U(163));
        }
        Pt || t.flags & 512 && Zc(t);
      } catch (m) {
        Qe(t, t.return, m);
      }
    }
    if (t === e) {
      X = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, X = n;
      break;
    }
    X = t.return;
  }
}
function Sm(e) {
  for (; X !== null; ) {
    var t = X;
    if (t === e) {
      X = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, X = n;
      break;
    }
    X = t.return;
  }
}
function wm(e) {
  for (; X !== null; ) {
    var t = X;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Sa(4, t);
          } catch (a) {
            Qe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Qe(t, o, a);
            }
          }
          var i = t.return;
          try {
            Zc(t);
          } catch (a) {
            Qe(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Zc(t);
          } catch (a) {
            Qe(t, s, a);
          }
      }
    } catch (a) {
      Qe(t, t.return, a);
    }
    if (t === e) {
      X = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, X = l;
      break;
    }
    X = t.return;
  }
}
var IS = Math.ceil, Kl = ir.ReactCurrentDispatcher, cf = ir.ReactCurrentOwner, fn = ir.ReactCurrentBatchConfig, Se = 0, mt = null, st = null, St = 0, Yt = 0, Eo = Rr(0), ut = 0, ts = null, Qr = 0, wa = 0, df = 0, Mi = null, Bt = null, ff = 0, Wo = 1 / 0, Vn = null, Yl = !1, td = null, vr = null, Vs = !1, fr = null, Gl = 0, Oi = 0, nd = null, gl = -1, yl = 0;
function Lt() {
  return Se & 6 ? Je() : gl !== -1 ? gl : gl = Je();
}
function xr(e) {
  return e.mode & 1 ? Se & 2 && St !== 0 ? St & -St : pS.transition !== null ? (yl === 0 && (yl = Hg()), yl) : (e = $e, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zg(e.type)), e) : 1;
}
function En(e, t, n, r) {
  if (50 < Oi) throw Oi = 0, nd = null, Error(U(185));
  fs(e, n, r), (!(Se & 2) || e !== mt) && (e === mt && (!(Se & 2) && (wa |= n), ut === 4 && cr(e, St)), Wt(e, r), n === 1 && Se === 0 && !(t.mode & 1) && (Wo = Je() + 500, ya && Pr()));
}
function Wt(e, t) {
  var n = e.callbackNode;
  px(e, t);
  var r = Ml(e, e === mt ? St : 0);
  if (r === 0) n !== null && Ip(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ip(n), t === 1) e.tag === 0 ? fS(bm.bind(null, e)) : yy(bm.bind(null, e)), aS(function() {
      !(Se & 6) && Pr();
    }), n = null;
    else {
      switch (Kg(r)) {
        case 1:
          n = zd;
          break;
        case 4:
          n = Wg;
          break;
        case 16:
          n = Il;
          break;
        case 536870912:
          n = Vg;
          break;
        default:
          n = Il;
      }
      n = hv(n, av.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function av(e, t) {
  if (gl = -1, yl = 0, Se & 6) throw Error(U(327));
  var n = e.callbackNode;
  if (Oo() && e.callbackNode !== n) return null;
  var r = Ml(e, e === mt ? St : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ql(e, r);
  else {
    t = r;
    var o = Se;
    Se |= 2;
    var i = cv();
    (mt !== e || St !== t) && (Vn = null, Wo = Je() + 500, Wr(e, t));
    do
      try {
        AS();
        break;
      } catch (l) {
        uv(e, l);
      }
    while (!0);
    Xd(), Kl.current = i, Se = o, st !== null ? t = 0 : (mt = null, St = 0, t = ut);
  }
  if (t !== 0) {
    if (t === 2 && (o = $c(e), o !== 0 && (r = o, t = rd(e, o))), t === 1) throw n = ts, Wr(e, 0), cr(e, r), Wt(e, Je()), n;
    if (t === 6) cr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !MS(o) && (t = Ql(e, r), t === 2 && (i = $c(e), i !== 0 && (r = i, t = rd(e, i))), t === 1)) throw n = ts, Wr(e, 0), cr(e, r), Wt(e, Je()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          _r(e, Bt, Vn);
          break;
        case 3:
          if (cr(e, r), (r & 130023424) === r && (t = ff + 500 - Je(), 10 < t)) {
            if (Ml(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Lt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = zc(_r.bind(null, e, Bt, Vn), t);
            break;
          }
          _r(e, Bt, Vn);
          break;
        case 4:
          if (cr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Tn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * IS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = zc(_r.bind(null, e, Bt, Vn), r);
            break;
          }
          _r(e, Bt, Vn);
          break;
        case 5:
          _r(e, Bt, Vn);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return Wt(e, Je()), e.callbackNode === n ? av.bind(null, e) : null;
}
function rd(e, t) {
  var n = Mi;
  return e.current.memoizedState.isDehydrated && (Wr(e, t).flags |= 256), e = Ql(e, t), e !== 2 && (t = Bt, Bt = n, t !== null && od(t)), e;
}
function od(e) {
  Bt === null ? Bt = e : Bt.push.apply(Bt, e);
}
function MS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Rn(i(), o)) return !1;
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
function cr(e, t) {
  for (t &= ~df, t &= ~wa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Tn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function bm(e) {
  if (Se & 6) throw Error(U(327));
  Oo();
  var t = Ml(e, 0);
  if (!(t & 1)) return Wt(e, Je()), null;
  var n = Ql(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $c(e);
    r !== 0 && (t = r, n = rd(e, r));
  }
  if (n === 1) throw n = ts, Wr(e, 0), cr(e, t), Wt(e, Je()), n;
  if (n === 6) throw Error(U(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, _r(e, Bt, Vn), Wt(e, Je()), null;
}
function pf(e, t) {
  var n = Se;
  Se |= 1;
  try {
    return e(t);
  } finally {
    Se = n, Se === 0 && (Wo = Je() + 500, ya && Pr());
  }
}
function Xr(e) {
  fr !== null && fr.tag === 0 && !(Se & 6) && Oo();
  var t = Se;
  Se |= 1;
  var n = fn.transition, r = $e;
  try {
    if (fn.transition = null, $e = 1, e) return e();
  } finally {
    $e = r, fn.transition = n, Se = t, !(Se & 6) && Pr();
  }
}
function mf() {
  Yt = Eo.current, Be(Eo);
}
function Wr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, lS(n)), st !== null) for (n = st.return; n !== null; ) {
    var r = n;
    switch (Yd(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && _l();
        break;
      case 3:
        Do(), Be(Dt), Be(It), nf();
        break;
      case 5:
        tf(r);
        break;
      case 4:
        Do();
        break;
      case 13:
        Be(He);
        break;
      case 19:
        Be(He);
        break;
      case 10:
        qd(r.type._context);
        break;
      case 22:
      case 23:
        mf();
    }
    n = n.return;
  }
  if (mt = e, st = e = Sr(e.current, null), St = Yt = t, ut = 0, ts = null, df = wa = Qr = 0, Bt = Mi = null, jr !== null) {
    for (t = 0; t < jr.length; t++) if (n = jr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    jr = null;
  }
  return e;
}
function uv(e, t) {
  do {
    var n = st;
    try {
      if (Xd(), pl.current = Hl, Vl) {
        for (var r = Ke.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Vl = !1;
      }
      if (Gr = 0, pt = at = Ke = null, $i = !1, Zi = 0, cf.current = null, n === null || n.return === null) {
        ut = 1, ts = t, st = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = St, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, d = l, f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var c = um(s);
          if (c !== null) {
            c.flags &= -257, cm(c, s, l, i, t), c.mode & 1 && am(i, u, t), t = c, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              am(i, u, t), hf();
              break e;
            }
            a = Error(U(426));
          }
        } else if (Ue && l.mode & 1) {
          var b = um(s);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), cm(b, s, l, i, t), Gd(Uo(a, l));
            break e;
          }
        }
        i = a = Uo(a, l), ut !== 4 && (ut = 2), Mi === null ? Mi = [i] : Mi.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var g = Ky(i, a, t);
              nm(i, g);
              break e;
            case 1:
              l = a;
              var p = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (vr === null || !vr.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = Yy(i, l, t);
                nm(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      fv(n);
    } catch (k) {
      t = k, st === n && n !== null && (st = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function cv() {
  var e = Kl.current;
  return Kl.current = Hl, e === null ? Hl : e;
}
function hf() {
  (ut === 0 || ut === 3 || ut === 2) && (ut = 4), mt === null || !(Qr & 268435455) && !(wa & 268435455) || cr(mt, St);
}
function Ql(e, t) {
  var n = Se;
  Se |= 2;
  var r = cv();
  (mt !== e || St !== t) && (Vn = null, Wr(e, t));
  do
    try {
      OS();
      break;
    } catch (o) {
      uv(e, o);
    }
  while (!0);
  if (Xd(), Se = n, Kl.current = r, st !== null) throw Error(U(261));
  return mt = null, St = 0, ut;
}
function OS() {
  for (; st !== null; ) dv(st);
}
function AS() {
  for (; st !== null && !ox(); ) dv(st);
}
function dv(e) {
  var t = mv(e.alternate, e, Yt);
  e.memoizedProps = e.pendingProps, t === null ? fv(e) : st = t, cf.current = null;
}
function fv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ES(n, t), n !== null) {
        n.flags &= 32767, st = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ut = 6, st = null;
        return;
      }
    } else if (n = TS(n, t, Yt), n !== null) {
      st = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      st = t;
      return;
    }
    st = t = e;
  } while (t !== null);
  ut === 0 && (ut = 5);
}
function _r(e, t, n) {
  var r = $e, o = fn.transition;
  try {
    fn.transition = null, $e = 1, NS(e, t, n, r);
  } finally {
    fn.transition = o, $e = r;
  }
  return null;
}
function NS(e, t, n, r) {
  do
    Oo();
  while (fr !== null);
  if (Se & 6) throw Error(U(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(U(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (mx(e, i), e === mt && (st = mt = null, St = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Vs || (Vs = !0, hv(Il, function() {
    return Oo(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = fn.transition, fn.transition = null;
    var s = $e;
    $e = 1;
    var l = Se;
    Se |= 4, cf.current = null, PS(e, n), sv(n, e), eS(Lc), Ol = !!Nc, Lc = Nc = null, e.current = n, $S(n), ix(), Se = l, $e = s, fn.transition = i;
  } else e.current = n;
  if (Vs && (Vs = !1, fr = e, Gl = o), i = e.pendingLanes, i === 0 && (vr = null), ax(n.stateNode), Wt(e, Je()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Yl) throw Yl = !1, e = td, td = null, e;
  return Gl & 1 && e.tag !== 0 && Oo(), i = e.pendingLanes, i & 1 ? e === nd ? Oi++ : (Oi = 0, nd = e) : Oi = 0, Pr(), null;
}
function Oo() {
  if (fr !== null) {
    var e = Kg(Gl), t = fn.transition, n = $e;
    try {
      if (fn.transition = null, $e = 16 > e ? 16 : e, fr === null) var r = !1;
      else {
        if (e = fr, fr = null, Gl = 0, Se & 6) throw Error(U(331));
        var o = Se;
        for (Se |= 4, X = e.current; X !== null; ) {
          var i = X, s = i.child;
          if (X.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (X = u; X !== null; ) {
                  var d = X;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ii(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) f.return = d, X = f;
                  else for (; X !== null; ) {
                    d = X;
                    var m = d.sibling, c = d.return;
                    if (rv(d), d === u) {
                      X = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = c, X = m;
                      break;
                    }
                    X = c;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var b = w.sibling;
                    w.sibling = null, w = b;
                  } while (w !== null);
                }
              }
              X = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, X = s;
          else e: for (; X !== null; ) {
            if (i = X, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Ii(9, i, i.return);
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, X = g;
              break e;
            }
            X = i.return;
          }
        }
        var p = e.current;
        for (X = p; X !== null; ) {
          s = X;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) v.return = s, X = v;
          else e: for (s = p; X !== null; ) {
            if (l = X, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Sa(9, l);
              }
            } catch (k) {
              Qe(l, l.return, k);
            }
            if (l === s) {
              X = null;
              break e;
            }
            var S = l.sibling;
            if (S !== null) {
              S.return = l.return, X = S;
              break e;
            }
            X = l.return;
          }
        }
        if (Se = o, Pr(), Ln && typeof Ln.onPostCommitFiberRoot == "function") try {
          Ln.onPostCommitFiberRoot(fa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      $e = n, fn.transition = t;
    }
  }
  return !1;
}
function Cm(e, t, n) {
  t = Uo(n, t), t = Ky(e, t, 1), e = yr(e, t, 1), t = Lt(), e !== null && (fs(e, 1, t), Wt(e, t));
}
function Qe(e, t, n) {
  if (e.tag === 3) Cm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Cm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vr === null || !vr.has(r))) {
        e = Uo(n, e), e = Yy(t, e, 1), t = yr(t, e, 1), e = Lt(), t !== null && (fs(t, 1, e), Wt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function LS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Lt(), e.pingedLanes |= e.suspendedLanes & n, mt === e && (St & n) === n && (ut === 4 || ut === 3 && (St & 130023424) === St && 500 > Je() - ff ? Wr(e, 0) : df |= n), Wt(e, t);
}
function pv(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ns, Ns <<= 1, !(Ns & 130023424) && (Ns = 4194304)) : t = 1);
  var n = Lt();
  e = er(e, t), e !== null && (fs(e, t, n), Wt(e, n));
}
function _S(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), pv(e, n);
}
function zS(e, t) {
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
      throw Error(U(314));
  }
  r !== null && r.delete(t), pv(e, n);
}
var mv;
mv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Dt.current) jt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return jt = !1, kS(e, t, n);
    jt = !!(e.flags & 131072);
  }
  else jt = !1, Ue && t.flags & 1048576 && vy(t, Bl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      hl(e, t), e = t.pendingProps;
      var o = Fo(t, It.current);
      Mo(t, n), o = of(null, t, r, e, o, n);
      var i = sf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ut(r) ? (i = !0, zl(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Jd(t), o.updater = xa, t.stateNode = o, o._reactInternals = t, Vc(t, r, e, n), t = Yc(null, t, r, !0, i, n)) : (t.tag = 0, Ue && i && Kd(t), At(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (hl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = BS(r), e = bn(r, e), o) {
          case 0:
            t = Kc(null, t, r, e, n);
            break e;
          case 1:
            t = pm(null, t, r, e, n);
            break e;
          case 11:
            t = dm(null, t, r, e, n);
            break e;
          case 14:
            t = fm(null, t, r, bn(r.type, e), n);
            break e;
        }
        throw Error(U(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bn(r, o), Kc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bn(r, o), pm(e, t, r, o, n);
    case 3:
      e: {
        if (qy(t), e === null) throw Error(U(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, ky(e, t), Ul(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Uo(Error(U(423)), t), t = mm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Uo(Error(U(424)), t), t = mm(e, t, r, n, o);
          break e;
        } else for (Xt = gr(t.stateNode.containerInfo.firstChild), qt = t, Ue = !0, kn = null, n = by(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Bo(), r === o) {
            t = tr(e, t, n);
            break e;
          }
          At(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ty(t), e === null && Dc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, _c(r, o) ? s = null : i !== null && _c(r, i) && (t.flags |= 32), Xy(e, t), At(e, t, s, n), t.child;
    case 6:
      return e === null && Dc(t), null;
    case 13:
      return Zy(e, t, n);
    case 4:
      return ef(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = jo(t, null, r, n) : At(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bn(r, o), dm(e, t, r, o, n);
    case 7:
      return At(e, t, t.pendingProps, n), t.child;
    case 8:
      return At(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return At(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Le(jl, r._currentValue), r._currentValue = s, i !== null) if (Rn(i.value, s)) {
          if (i.children === o.children && !Dt.current) {
            t = tr(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = qn(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Uc(
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
            if (s = i.return, s === null) throw Error(U(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Uc(s, n, t), s = i.sibling;
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
        At(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Mo(t, n), o = mn(o), r = r(o), t.flags |= 1, At(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = bn(r, t.pendingProps), o = bn(r.type, o), fm(e, t, r, o, n);
    case 15:
      return Gy(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bn(r, o), hl(e, t), t.tag = 1, Ut(r) ? (e = !0, zl(t)) : e = !1, Mo(t, n), Hy(t, r, o), Vc(t, r, o, n), Yc(null, t, r, !0, e, n);
    case 19:
      return Jy(e, t, n);
    case 22:
      return Qy(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function hv(e, t) {
  return Ug(e, t);
}
function FS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function dn(e, t, n, r) {
  return new FS(e, t, n, r);
}
function gf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function BS(e) {
  if (typeof e == "function") return gf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Nd) return 11;
    if (e === Ld) return 14;
  }
  return 2;
}
function Sr(e, t) {
  var n = e.alternate;
  return n === null ? (n = dn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function vl(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") gf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case go:
      return Vr(n.children, o, i, t);
    case Ad:
      s = 8, o |= 8;
      break;
    case mc:
      return e = dn(12, n, t, o | 2), e.elementType = mc, e.lanes = i, e;
    case hc:
      return e = dn(13, n, t, o), e.elementType = hc, e.lanes = i, e;
    case gc:
      return e = dn(19, n, t, o), e.elementType = gc, e.lanes = i, e;
    case Tg:
      return ba(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Cg:
          s = 10;
          break e;
        case kg:
          s = 9;
          break e;
        case Nd:
          s = 11;
          break e;
        case Ld:
          s = 14;
          break e;
        case lr:
          s = 16, r = null;
          break e;
      }
      throw Error(U(130, e == null ? e : typeof e, ""));
  }
  return t = dn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Vr(e, t, n, r) {
  return e = dn(7, e, r, t), e.lanes = n, e;
}
function ba(e, t, n, r) {
  return e = dn(22, e, r, t), e.elementType = Tg, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function tc(e, t, n) {
  return e = dn(6, e, null, t), e.lanes = n, e;
}
function nc(e, t, n) {
  return t = dn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function jS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _u(0), this.expirationTimes = _u(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _u(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function yf(e, t, n, r, o, i, s, l, a) {
  return e = new jS(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = dn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Jd(i), e;
}
function DS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ho, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function gv(e) {
  if (!e) return Cr;
  e = e._reactInternals;
  e: {
    if (ro(e) !== e || e.tag !== 1) throw Error(U(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ut(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(U(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ut(n)) return gy(e, n, t);
  }
  return t;
}
function yv(e, t, n, r, o, i, s, l, a) {
  return e = yf(n, r, !0, e, o, i, s, l, a), e.context = gv(null), n = e.current, r = Lt(), o = xr(n), i = qn(r, o), i.callback = t ?? null, yr(n, i, o), e.current.lanes = o, fs(e, o, r), Wt(e, r), e;
}
function Ca(e, t, n, r) {
  var o = t.current, i = Lt(), s = xr(o);
  return n = gv(n), t.context === null ? t.context = n : t.pendingContext = n, t = qn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yr(o, t, s), e !== null && (En(e, o, s, i), fl(e, o, s)), s;
}
function Xl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function km(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function vf(e, t) {
  km(e, t), (e = e.alternate) && km(e, t);
}
function US() {
  return null;
}
var vv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function xf(e) {
  this._internalRoot = e;
}
ka.prototype.render = xf.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(U(409));
  Ca(e, t, null, null);
};
ka.prototype.unmount = xf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xr(function() {
      Ca(null, e, null, null);
    }), t[Jn] = null;
  }
};
function ka(e) {
  this._internalRoot = e;
}
ka.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Qg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ur.length && t !== 0 && t < ur[n].priority; n++) ;
    ur.splice(n, 0, e), n === 0 && qg(e);
  }
};
function Sf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ta(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Tm() {
}
function WS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Xl(s);
        i.call(u);
      };
    }
    var s = yv(t, r, e, 0, null, !1, !1, "", Tm);
    return e._reactRootContainer = s, e[Jn] = s.current, Yi(e.nodeType === 8 ? e.parentNode : e), Xr(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Xl(a);
      l.call(u);
    };
  }
  var a = yf(e, 0, !1, null, null, !1, !1, "", Tm);
  return e._reactRootContainer = a, e[Jn] = a.current, Yi(e.nodeType === 8 ? e.parentNode : e), Xr(function() {
    Ca(t, a, n, r);
  }), a;
}
function Ea(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = Xl(s);
        l.call(a);
      };
    }
    Ca(t, s, e, o);
  } else s = WS(n, t, e, o, r);
  return Xl(s);
}
Yg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Si(t.pendingLanes);
        n !== 0 && (Fd(t, n | 1), Wt(t, Je()), !(Se & 6) && (Wo = Je() + 500, Pr()));
      }
      break;
    case 13:
      Xr(function() {
        var r = er(e, 1);
        if (r !== null) {
          var o = Lt();
          En(r, e, 1, o);
        }
      }), vf(e, 1);
  }
};
Bd = function(e) {
  if (e.tag === 13) {
    var t = er(e, 134217728);
    if (t !== null) {
      var n = Lt();
      En(t, e, 134217728, n);
    }
    vf(e, 134217728);
  }
};
Gg = function(e) {
  if (e.tag === 13) {
    var t = xr(e), n = er(e, t);
    if (n !== null) {
      var r = Lt();
      En(n, e, t, r);
    }
    vf(e, t);
  }
};
Qg = function() {
  return $e;
};
Xg = function(e, t) {
  var n = $e;
  try {
    return $e = e, t();
  } finally {
    $e = n;
  }
};
Ec = function(e, t, n) {
  switch (t) {
    case "input":
      if (xc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ga(r);
            if (!o) throw Error(U(90));
            Rg(r), xc(r, o);
          }
        }
      }
      break;
    case "textarea":
      $g(e, n);
      break;
    case "select":
      t = n.value, t != null && Ro(e, !!n.multiple, t, !1);
  }
};
_g = pf;
zg = Xr;
var VS = { usingClientEntryPoint: !1, Events: [ms, So, ga, Ng, Lg, pf] }, fi = { findFiberByHostInstance: Br, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, HS = { bundleType: fi.bundleType, version: fi.version, rendererPackageName: fi.rendererPackageName, rendererConfig: fi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ir.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = jg(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: fi.findFiberByHostInstance || US, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hs.isDisabled && Hs.supportsFiber) try {
    fa = Hs.inject(HS), Ln = Hs;
  } catch {
  }
}
tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VS;
tn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Sf(t)) throw Error(U(200));
  return DS(e, t, null, n);
};
tn.createRoot = function(e, t) {
  if (!Sf(e)) throw Error(U(299));
  var n = !1, r = "", o = vv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = yf(e, 1, !1, null, null, n, !1, r, o), e[Jn] = t.current, Yi(e.nodeType === 8 ? e.parentNode : e), new xf(t);
};
tn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(U(188)) : (e = Object.keys(e).join(","), Error(U(268, e)));
  return e = jg(t), e = e === null ? null : e.stateNode, e;
};
tn.flushSync = function(e) {
  return Xr(e);
};
tn.hydrate = function(e, t, n) {
  if (!Ta(t)) throw Error(U(200));
  return Ea(null, e, t, !0, n);
};
tn.hydrateRoot = function(e, t, n) {
  if (!Sf(e)) throw Error(U(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = vv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = yv(t, null, e, 1, n ?? null, o, !1, i, s), e[Jn] = t.current, Yi(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new ka(t);
};
tn.render = function(e, t, n) {
  if (!Ta(t)) throw Error(U(200));
  return Ea(null, e, t, !1, n);
};
tn.unmountComponentAtNode = function(e) {
  if (!Ta(e)) throw Error(U(40));
  return e._reactRootContainer ? (Xr(function() {
    Ea(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Jn] = null;
    });
  }), !0) : !1;
};
tn.unstable_batchedUpdates = pf;
tn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ta(n)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return Ea(e, t, n, !1, r);
};
tn.version = "18.3.1-next-f1338f8080-20240426";
function xv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv);
    } catch (e) {
      console.error(e);
    }
}
xv(), xg.exports = tn;
var Sv = xg.exports, wv, Em = Sv;
wv = Em.createRoot, Em.hydrateRoot;
const ns = {
  black: "#000",
  white: "#fff"
}, lo = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, ao = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, uo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, co = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, fo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, pi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, KS = {
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
function nr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const zn = "$$material";
function id() {
  return id = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, id.apply(null, arguments);
}
function YS(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function GS(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var QS = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(GS(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = YS(o);
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
}(), Rt = "-ms-", ql = "-moz-", be = "-webkit-", bv = "comm", wf = "rule", bf = "decl", XS = "@import", Cv = "@keyframes", qS = "@layer", ZS = Math.abs, Ra = String.fromCharCode, JS = Object.assign;
function ew(e, t) {
  return xt(e, 0) ^ 45 ? (((t << 2 ^ xt(e, 0)) << 2 ^ xt(e, 1)) << 2 ^ xt(e, 2)) << 2 ^ xt(e, 3) : 0;
}
function kv(e) {
  return e.trim();
}
function tw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ce(e, t, n) {
  return e.replace(t, n);
}
function sd(e, t) {
  return e.indexOf(t);
}
function xt(e, t) {
  return e.charCodeAt(t) | 0;
}
function rs(e, t, n) {
  return e.slice(t, n);
}
function On(e) {
  return e.length;
}
function Cf(e) {
  return e.length;
}
function Ks(e, t) {
  return t.push(e), e;
}
function nw(e, t) {
  return e.map(t).join("");
}
var Pa = 1, Vo = 1, Tv = 0, Kt = 0, it = 0, ei = "";
function $a(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Pa, column: Vo, length: s, return: "" };
}
function mi(e, t) {
  return JS($a("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function rw() {
  return it;
}
function ow() {
  return it = Kt > 0 ? xt(ei, --Kt) : 0, Vo--, it === 10 && (Vo = 1, Pa--), it;
}
function Zt() {
  return it = Kt < Tv ? xt(ei, Kt++) : 0, Vo++, it === 10 && (Vo = 1, Pa++), it;
}
function Fn() {
  return xt(ei, Kt);
}
function xl() {
  return Kt;
}
function gs(e, t) {
  return rs(ei, e, t);
}
function os(e) {
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
function Ev(e) {
  return Pa = Vo = 1, Tv = On(ei = e), Kt = 0, [];
}
function Rv(e) {
  return ei = "", e;
}
function Sl(e) {
  return kv(gs(Kt - 1, ld(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function iw(e) {
  for (; (it = Fn()) && it < 33; )
    Zt();
  return os(e) > 2 || os(it) > 3 ? "" : " ";
}
function sw(e, t) {
  for (; --t && Zt() && !(it < 48 || it > 102 || it > 57 && it < 65 || it > 70 && it < 97); )
    ;
  return gs(e, xl() + (t < 6 && Fn() == 32 && Zt() == 32));
}
function ld(e) {
  for (; Zt(); )
    switch (it) {
      case e:
        return Kt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ld(it);
        break;
      case 40:
        e === 41 && ld(e);
        break;
      case 92:
        Zt();
        break;
    }
  return Kt;
}
function lw(e, t) {
  for (; Zt() && e + it !== 57; )
    if (e + it === 84 && Fn() === 47)
      break;
  return "/*" + gs(t, Kt - 1) + "*" + Ra(e === 47 ? e : Zt());
}
function aw(e) {
  for (; !os(Fn()); )
    Zt();
  return gs(e, Kt);
}
function uw(e) {
  return Rv(wl("", null, null, null, [""], e = Ev(e), 0, [0], e));
}
function wl(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, d = 0, f = s, m = 0, c = 0, y = 0, w = 1, b = 1, g = 1, p = 0, v = "", S = o, k = i, C = r, E = v; b; )
    switch (y = p, p = Zt()) {
      case 40:
        if (y != 108 && xt(E, f - 1) == 58) {
          sd(E += Ce(Sl(p), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Sl(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += iw(y);
        break;
      case 92:
        E += sw(xl() - 1, 7);
        continue;
      case 47:
        switch (Fn()) {
          case 42:
          case 47:
            Ks(cw(lw(Zt(), xl()), t, n), a);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * w:
        l[u++] = On(E) * g;
      case 125 * w:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            b = 0;
          case 59 + d:
            g == -1 && (E = Ce(E, /\f/g, "")), c > 0 && On(E) - f && Ks(c > 32 ? Pm(E + ";", r, n, f - 1) : Pm(Ce(E, " ", "") + ";", r, n, f - 2), a);
            break;
          case 59:
            E += ";";
          default:
            if (Ks(C = Rm(E, t, n, u, d, o, l, v, S = [], k = [], f), i), p === 123)
              if (d === 0)
                wl(E, t, C, C, S, i, f, l, k);
              else
                switch (m === 99 && xt(E, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    wl(e, C, C, r && Ks(Rm(e, C, C, 0, 0, o, l, v, o, S = [], f), k), o, k, f, l, r ? S : k);
                    break;
                  default:
                    wl(E, C, C, C, [""], k, 0, l, k);
                }
        }
        u = d = c = 0, w = g = 1, v = E = "", f = s;
        break;
      case 58:
        f = 1 + On(E), c = y;
      default:
        if (w < 1) {
          if (p == 123)
            --w;
          else if (p == 125 && w++ == 0 && ow() == 125)
            continue;
        }
        switch (E += Ra(p), p * w) {
          case 38:
            g = d > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            l[u++] = (On(E) - 1) * g, g = 1;
            break;
          case 64:
            Fn() === 45 && (E += Sl(Zt())), m = Fn(), d = f = On(v = E += aw(xl())), p++;
            break;
          case 45:
            y === 45 && On(E) == 2 && (w = 0);
        }
    }
  return i;
}
function Rm(e, t, n, r, o, i, s, l, a, u, d) {
  for (var f = o - 1, m = o === 0 ? i : [""], c = Cf(m), y = 0, w = 0, b = 0; y < r; ++y)
    for (var g = 0, p = rs(e, f + 1, f = ZS(w = s[y])), v = e; g < c; ++g)
      (v = kv(w > 0 ? m[g] + " " + p : Ce(p, /&\f/g, m[g]))) && (a[b++] = v);
  return $a(e, t, n, o === 0 ? wf : l, a, u, d);
}
function cw(e, t, n) {
  return $a(e, t, n, bv, Ra(rw()), rs(e, 2, -2), 0);
}
function Pm(e, t, n, r) {
  return $a(e, t, n, bf, rs(e, 0, r), rs(e, r + 1, -1), r);
}
function Ao(e, t) {
  for (var n = "", r = Cf(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function dw(e, t, n, r) {
  switch (e.type) {
    case qS:
      if (e.children.length) break;
    case XS:
    case bf:
      return e.return = e.return || e.value;
    case bv:
      return "";
    case Cv:
      return e.return = e.value + "{" + Ao(e.children, r) + "}";
    case wf:
      e.value = e.props.join(",");
  }
  return On(n = Ao(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function fw(e) {
  var t = Cf(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function pw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Pv(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var mw = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Fn(), o === 38 && i === 12 && (n[r] = 1), !os(i); )
    Zt();
  return gs(t, Kt);
}, hw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (os(o)) {
      case 0:
        o === 38 && Fn() === 12 && (n[r] = 1), t[r] += mw(Kt - 1, n, r);
        break;
      case 2:
        t[r] += Sl(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Fn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Ra(o);
    }
  while (o = Zt());
  return t;
}, gw = function(t, n) {
  return Rv(hw(Ev(t), n));
}, $m = /* @__PURE__ */ new WeakMap(), yw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !$m.get(r)) && !o) {
      $m.set(t, !0);
      for (var i = [], s = gw(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + " " + s[a];
    }
  }
}, vw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function $v(e, t) {
  switch (ew(e, t)) {
    case 5103:
      return be + "print-" + e + e;
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
      return be + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return be + e + ql + e + Rt + e + e;
    case 6828:
    case 4268:
      return be + e + Rt + e + e;
    case 6165:
      return be + e + Rt + "flex-" + e + e;
    case 5187:
      return be + e + Ce(e, /(\w+).+(:[^]+)/, be + "box-$1$2" + Rt + "flex-$1$2") + e;
    case 5443:
      return be + e + Rt + "flex-item-" + Ce(e, /flex-|-self/, "") + e;
    case 4675:
      return be + e + Rt + "flex-line-pack" + Ce(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return be + e + Rt + Ce(e, "shrink", "negative") + e;
    case 5292:
      return be + e + Rt + Ce(e, "basis", "preferred-size") + e;
    case 6060:
      return be + "box-" + Ce(e, "-grow", "") + be + e + Rt + Ce(e, "grow", "positive") + e;
    case 4554:
      return be + Ce(e, /([^-])(transform)/g, "$1" + be + "$2") + e;
    case 6187:
      return Ce(Ce(Ce(e, /(zoom-|grab)/, be + "$1"), /(image-set)/, be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ce(e, /(image-set\([^]*)/, be + "$1$`$1");
    case 4968:
      return Ce(Ce(e, /(.+:)(flex-)?(.*)/, be + "box-pack:$3" + Rt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + be + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ce(e, /(.+)-inline(.+)/, be + "$1$2") + e;
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
      if (On(e) - 1 - t > 6) switch (xt(e, t + 1)) {
        case 109:
          if (xt(e, t + 4) !== 45) break;
        case 102:
          return Ce(e, /(.+:)(.+)-([^]+)/, "$1" + be + "$2-$3$1" + ql + (xt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~sd(e, "stretch") ? $v(Ce(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (xt(e, t + 1) !== 115) break;
    case 6444:
      switch (xt(e, On(e) - 3 - (~sd(e, "!important") && 10))) {
        case 107:
          return Ce(e, ":", ":" + be) + e;
        case 101:
          return Ce(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + be + (xt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + be + "$2$3$1" + Rt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (xt(e, t + 11)) {
        case 114:
          return be + e + Rt + Ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return be + e + Rt + Ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return be + e + Rt + Ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return be + e + Rt + e + e;
  }
  return e;
}
var xw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case bf:
      t.return = $v(t.value, t.length);
      break;
    case Cv:
      return Ao([mi(t, {
        value: Ce(t.value, "@", "@" + be)
      })], o);
    case wf:
      if (t.length) return nw(t.props, function(i) {
        switch (tw(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ao([mi(t, {
              props: [Ce(i, /:(read-\w+)/, ":" + ql + "$1")]
            })], o);
          case "::placeholder":
            return Ao([mi(t, {
              props: [Ce(i, /:(plac\w+)/, ":" + be + "input-$1")]
            }), mi(t, {
              props: [Ce(i, /:(plac\w+)/, ":" + ql + "$1")]
            }), mi(t, {
              props: [Ce(i, /:(plac\w+)/, Rt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Sw = [xw], ww = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(w) {
      var b = w.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Sw, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(w) {
      for (var b = w.getAttribute("data-emotion").split(" "), g = 1; g < b.length; g++)
        i[b[g]] = !0;
      l.push(w);
    }
  );
  var a, u = [yw, vw];
  {
    var d, f = [dw, pw(function(w) {
      d.insert(w);
    })], m = fw(u.concat(o, f)), c = function(b) {
      return Ao(uw(b), m);
    };
    a = function(b, g, p, v) {
      d = p, c(b ? b + "{" + g.styles + "}" : g.styles), v && (y.inserted[g.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new QS({
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
  return y.sheet.hydrate(l), y;
}, Iv = { exports: {} }, Ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt = typeof Symbol == "function" && Symbol.for, kf = yt ? Symbol.for("react.element") : 60103, Tf = yt ? Symbol.for("react.portal") : 60106, Ia = yt ? Symbol.for("react.fragment") : 60107, Ma = yt ? Symbol.for("react.strict_mode") : 60108, Oa = yt ? Symbol.for("react.profiler") : 60114, Aa = yt ? Symbol.for("react.provider") : 60109, Na = yt ? Symbol.for("react.context") : 60110, Ef = yt ? Symbol.for("react.async_mode") : 60111, La = yt ? Symbol.for("react.concurrent_mode") : 60111, _a = yt ? Symbol.for("react.forward_ref") : 60112, za = yt ? Symbol.for("react.suspense") : 60113, bw = yt ? Symbol.for("react.suspense_list") : 60120, Fa = yt ? Symbol.for("react.memo") : 60115, Ba = yt ? Symbol.for("react.lazy") : 60116, Cw = yt ? Symbol.for("react.block") : 60121, kw = yt ? Symbol.for("react.fundamental") : 60117, Tw = yt ? Symbol.for("react.responder") : 60118, Ew = yt ? Symbol.for("react.scope") : 60119;
function rn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case kf:
        switch (e = e.type, e) {
          case Ef:
          case La:
          case Ia:
          case Oa:
          case Ma:
          case za:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Na:
              case _a:
              case Ba:
              case Fa:
              case Aa:
                return e;
              default:
                return t;
            }
        }
      case Tf:
        return t;
    }
  }
}
function Mv(e) {
  return rn(e) === La;
}
Ie.AsyncMode = Ef;
Ie.ConcurrentMode = La;
Ie.ContextConsumer = Na;
Ie.ContextProvider = Aa;
Ie.Element = kf;
Ie.ForwardRef = _a;
Ie.Fragment = Ia;
Ie.Lazy = Ba;
Ie.Memo = Fa;
Ie.Portal = Tf;
Ie.Profiler = Oa;
Ie.StrictMode = Ma;
Ie.Suspense = za;
Ie.isAsyncMode = function(e) {
  return Mv(e) || rn(e) === Ef;
};
Ie.isConcurrentMode = Mv;
Ie.isContextConsumer = function(e) {
  return rn(e) === Na;
};
Ie.isContextProvider = function(e) {
  return rn(e) === Aa;
};
Ie.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === kf;
};
Ie.isForwardRef = function(e) {
  return rn(e) === _a;
};
Ie.isFragment = function(e) {
  return rn(e) === Ia;
};
Ie.isLazy = function(e) {
  return rn(e) === Ba;
};
Ie.isMemo = function(e) {
  return rn(e) === Fa;
};
Ie.isPortal = function(e) {
  return rn(e) === Tf;
};
Ie.isProfiler = function(e) {
  return rn(e) === Oa;
};
Ie.isStrictMode = function(e) {
  return rn(e) === Ma;
};
Ie.isSuspense = function(e) {
  return rn(e) === za;
};
Ie.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ia || e === La || e === Oa || e === Ma || e === za || e === bw || typeof e == "object" && e !== null && (e.$$typeof === Ba || e.$$typeof === Fa || e.$$typeof === Aa || e.$$typeof === Na || e.$$typeof === _a || e.$$typeof === kw || e.$$typeof === Tw || e.$$typeof === Ew || e.$$typeof === Cw);
};
Ie.typeOf = rn;
Iv.exports = Ie;
var Rw = Iv.exports, Ov = Rw, Pw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, $w = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Av = {};
Av[Ov.ForwardRef] = Pw;
Av[Ov.Memo] = $w;
var Iw = !0;
function Nv(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Rf = function(t, n, r) {
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
  Iw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Pf = function(t, n, r) {
  Rf(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Mw(e) {
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
var Ow = {
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
}, Aw = /[A-Z]|^ms/g, Nw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Lv = function(t) {
  return t.charCodeAt(1) === 45;
}, Im = function(t) {
  return t != null && typeof t != "boolean";
}, rc = /* @__PURE__ */ Pv(function(e) {
  return Lv(e) ? e : e.replace(Aw, "-$&").toLowerCase();
}), Mm = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Nw, function(r, o, i) {
          return An = {
            name: o,
            styles: i,
            next: An
          }, o;
        });
  }
  return Ow[t] !== 1 && !Lv(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function is(e, t, n) {
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
        return An = {
          name: o.name,
          styles: o.styles,
          next: An
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            An = {
              name: s.name,
              styles: s.styles,
              next: An
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return Lw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = An, u = n(e);
        return An = a, is(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var f = t[d];
  return f !== void 0 ? f : d;
}
function Lw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += is(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : Im(l) && (r += rc(i) + ":" + Mm(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          Im(s[a]) && (r += rc(i) + ":" + Mm(i, s[a]) + ";");
      else {
        var u = is(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += rc(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var Om = /label:\s*([^\s;{]+)\s*(;|$)/g, An;
function ys(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  An = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += is(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += is(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  Om.lastIndex = 0;
  for (var u = "", d; (d = Om.exec(o)) !== null; )
    u += "-" + d[1];
  var f = Mw(o) + u;
  return {
    name: f,
    styles: o,
    next: An
  };
}
var _w = function(t) {
  return t();
}, _v = El.useInsertionEffect ? El.useInsertionEffect : !1, zv = _v || _w, Am = _v || x.useLayoutEffect, Fv = /* @__PURE__ */ x.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ww({
    key: "css"
  }) : null
);
Fv.Provider;
var $f = function(t) {
  return /* @__PURE__ */ x.forwardRef(function(n, r) {
    var o = x.useContext(Fv);
    return t(n, o, r);
  });
}, vs = /* @__PURE__ */ x.createContext({}), If = {}.hasOwnProperty, ad = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", zw = function(t, n) {
  var r = {};
  for (var o in n)
    If.call(n, o) && (r[o] = n[o]);
  return r[ad] = t, r;
}, Fw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Rf(n, r, o), zv(function() {
    return Pf(n, r, o);
  }), null;
}, Bw = /* @__PURE__ */ $f(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[ad], i = [r], s = "";
  typeof e.className == "string" ? s = Nv(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = ys(i, void 0, x.useContext(vs));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e)
    If.call(e, u) && u !== "css" && u !== ad && (a[u] = e[u]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(Fw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ x.createElement(o, a));
}), jw = Bw, Nm = function(t, n) {
  var r = arguments;
  if (n == null || !If.call(n, "css"))
    return x.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = jw, i[1] = zw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return x.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Nm || (Nm = {}));
var Dw = /* @__PURE__ */ $f(function(e, t) {
  var n = e.styles, r = ys([n], void 0, x.useContext(vs)), o = x.useRef();
  return Am(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), Am(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Pf(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function ss() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ys(t);
}
function xs() {
  var e = ss.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Uw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ww = /* @__PURE__ */ Pv(
  function(e) {
    return Uw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Vw = Ww, Hw = function(t) {
  return t !== "theme";
}, Lm = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Vw : Hw;
}, _m = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Kw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Rf(n, r, o), zv(function() {
    return Pf(n, r, o);
  }), null;
}, Yw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = _m(t, n, r), a = l || Lm(o), u = !a("as");
  return function() {
    var d = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      var m = d[0];
      f.push(m[0]);
      for (var c = d.length, y = 1; y < c; y++)
        f.push(d[y], m[y]);
    }
    var w = $f(function(b, g, p) {
      var v = u && b.as || o, S = "", k = [], C = b;
      if (b.theme == null) {
        C = {};
        for (var E in b)
          C[E] = b[E];
        C.theme = x.useContext(vs);
      }
      typeof b.className == "string" ? S = Nv(g.registered, k, b.className) : b.className != null && (S = b.className + " ");
      var R = ys(f.concat(k), g.registered, C);
      S += g.key + "-" + R.name, s !== void 0 && (S += " " + s);
      var N = u && l === void 0 ? Lm(v) : a, _ = {};
      for (var P in b)
        u && P === "as" || N(P) && (_[P] = b[P]);
      return _.className = S, p && (_.ref = p), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(Kw, {
        cache: g,
        serialized: R,
        isStringTag: typeof v == "string"
      }), /* @__PURE__ */ x.createElement(v, _));
    });
    return w.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = o, w.__emotion_styles = f, w.__emotion_forwardProp = l, Object.defineProperty(w, "toString", {
      value: function() {
        return "." + s;
      }
    }), w.withComponent = function(b, g) {
      var p = e(b, id({}, n, g, {
        shouldForwardProp: _m(w, g, !0)
      }));
      return p.apply(void 0, f);
    }, w;
  };
}, Gw = [
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
], ud = Yw.bind(null);
Gw.forEach(function(e) {
  ud[e] = ud(e);
});
function Qw(e) {
  return e == null || Object.keys(e).length === 0;
}
function Bv(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Qw(o) ? n : o) : t;
  return /* @__PURE__ */ T.jsx(Dw, {
    styles: r
  });
}
function jv(e, t) {
  return ud(e, t);
}
function Xw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const zm = [];
function wr(e) {
  return zm[0] = e, ys(zm);
}
var Dv = { exports: {} }, Oe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mf = Symbol.for("react.transitional.element"), Of = Symbol.for("react.portal"), ja = Symbol.for("react.fragment"), Da = Symbol.for("react.strict_mode"), Ua = Symbol.for("react.profiler"), Wa = Symbol.for("react.consumer"), Va = Symbol.for("react.context"), Ha = Symbol.for("react.forward_ref"), Ka = Symbol.for("react.suspense"), Ya = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Qa = Symbol.for("react.lazy"), qw = Symbol.for("react.view_transition"), Zw = Symbol.for("react.client.reference");
function vn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Mf:
        switch (e = e.type, e) {
          case ja:
          case Ua:
          case Da:
          case Ka:
          case Ya:
          case qw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Va:
              case Ha:
              case Qa:
              case Ga:
                return e;
              case Wa:
                return e;
              default:
                return t;
            }
        }
      case Of:
        return t;
    }
  }
}
Oe.ContextConsumer = Wa;
Oe.ContextProvider = Va;
Oe.Element = Mf;
Oe.ForwardRef = Ha;
Oe.Fragment = ja;
Oe.Lazy = Qa;
Oe.Memo = Ga;
Oe.Portal = Of;
Oe.Profiler = Ua;
Oe.StrictMode = Da;
Oe.Suspense = Ka;
Oe.SuspenseList = Ya;
Oe.isContextConsumer = function(e) {
  return vn(e) === Wa;
};
Oe.isContextProvider = function(e) {
  return vn(e) === Va;
};
Oe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mf;
};
Oe.isForwardRef = function(e) {
  return vn(e) === Ha;
};
Oe.isFragment = function(e) {
  return vn(e) === ja;
};
Oe.isLazy = function(e) {
  return vn(e) === Qa;
};
Oe.isMemo = function(e) {
  return vn(e) === Ga;
};
Oe.isPortal = function(e) {
  return vn(e) === Of;
};
Oe.isProfiler = function(e) {
  return vn(e) === Ua;
};
Oe.isStrictMode = function(e) {
  return vn(e) === Da;
};
Oe.isSuspense = function(e) {
  return vn(e) === Ka;
};
Oe.isSuspenseList = function(e) {
  return vn(e) === Ya;
};
Oe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ja || e === Ua || e === Da || e === Ka || e === Ya || typeof e == "object" && e !== null && (e.$$typeof === Qa || e.$$typeof === Ga || e.$$typeof === Va || e.$$typeof === Wa || e.$$typeof === Ha || e.$$typeof === Zw || e.getModuleId !== void 0);
};
Oe.typeOf = vn;
Dv.exports = Oe;
var Uv = Dv.exports;
function Kn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Wv(e) {
  if (/* @__PURE__ */ x.isValidElement(e) || Uv.isValidElementType(e) || !Kn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Wv(e[n]);
  }), t;
}
function ht(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Kn(e) && Kn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ x.isValidElement(t[o]) || Uv.isValidElementType(t[o]) ? r[o] = t[o] : Kn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Kn(e[o]) ? r[o] = ht(e[o], t[o], n) : n.clone ? r[o] = Kn(t[o]) ? Wv(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Jw = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Vv(e) {
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
  } = e, i = Jw(t), s = Object.keys(i);
  function l(c) {
    return `@media (min-width:${typeof t[c] == "number" ? t[c] : c}${n})`;
  }
  function a(c) {
    return `@media (max-width:${(typeof t[c] == "number" ? t[c] : c) - r / 100}${n})`;
  }
  function u(c, y) {
    const w = s.indexOf(y);
    return `@media (min-width:${typeof t[c] == "number" ? t[c] : c}${n}) and (max-width:${(w !== -1 && typeof t[s[w]] == "number" ? t[s[w]] : y) - r / 100}${n})`;
  }
  function d(c) {
    return s.indexOf(c) + 1 < s.length ? u(c, s[s.indexOf(c) + 1]) : l(c);
  }
  function f(c) {
    const y = s.indexOf(c);
    return y === 0 ? l(s[1]) : y === s.length - 1 ? a(s[y]) : u(c, s[s.indexOf(c) + 1]).replace("@media", "@media not all and");
  }
  const m = [];
  for (let c = 0; c < s.length; c += 1)
    m.push(l(s[c]));
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: u,
    only: d,
    not: f,
    unit: n,
    internal_mediaKeys: m,
    ...o
  };
}
const Fm = /min-width:\s*([0-9.]+)/;
function Bm(e, t) {
  if (!e.containerQueries || !eb(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(Fm)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(Fm)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function eb(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function Hv(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function tb(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function nb(e) {
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
const rb = {
  borderRadius: 4
};
function Kv(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function No(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return ab(t) ? t : ub(e) ? Ho(t) : n && r ? sb(e, t) : n !== r ? Ho(t) : cb(e, t);
}
function ob(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Ho(e[t]);
  return r;
}
function ib(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Ho(e[n]));
  return t;
}
function sb(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Ho(t[r]);
  return e;
}
function lb(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function ab(e) {
  return typeof e != "object" || e === null;
}
function ub(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Ho(e) {
  return lb(e) ? Array.isArray(e) ? ob(e) : ib(e) : e;
}
function cb(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = No(e[n], t[n]) : e[n] = Ho(t[n]));
  return e;
}
const db = {}, Xa = {
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
}, Zl = Vv({
  values: Xa
}), fb = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Xa[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function kr(e, t, n) {
  const r = {};
  return qa(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : No(r, l);
  });
}
function qa(e, t, n, r) {
  if (t ?? (t = db), Array.isArray(n)) {
    const o = t.breakpoints ?? Zl;
    for (let i = 0; i < n.length; i += 1)
      oc(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? Zl, i = o.values ?? Xa;
    for (const s in n)
      if (Hv(o.keys, s)) {
        const l = tb(t.containerQueries ? t : fb, s);
        l && oc(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        oc(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function oc(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function Yv(e = Zl) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function cd(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    Kv(t[o]) && delete t[o];
  }
  return t;
}
function pb(e, ...t) {
  const r = [Yv(e), ...t].reduce((o, i) => ht(o, i), {});
  return cd(e, r);
}
function mb(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function ic(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || mb(t, n), i = Object.keys(o);
  if (i.length === 0)
    return t;
  let s;
  return i.reduce((l, a, u) => {
    if (Array.isArray(t))
      l[a] = t[u] != null ? t[u] : t[s], s = u;
    else if (typeof t == "object" && t) {
      const d = t;
      l[a] = d[a] != null ? d[a] : d[s], s = a;
    } else
      l[a] = t;
    return l;
  }, {});
}
function hb(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (Hv(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function re(e) {
  if (typeof e != "string")
    throw new Error(nr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Gv(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Za(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Za(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = jm(e.vars, o, r);
    if (i != null)
      return i;
  }
  return jm(e, o, r);
}
function jm(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : re(s)}`;
    return r == null ? void 0 : r[l];
  }
  return o;
}
function et(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, u = Za(a, r) || {};
    return kr(s, l, (f) => {
      const m = Gv(u, o, f, t);
      return n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const gb = {
  internal_cache: {}
}, Jl = {
  m: "margin",
  p: "padding"
}, Dm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Um = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ls = {};
for (const e in Jl)
  ls[e] = [Jl[e]];
for (const e in Jl)
  for (const t in Dm) {
    const n = Jl[e], r = Dm[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    ls[e + t] = o;
  }
for (const e in Um)
  ls[e] = ls[Um[e]];
const Af = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Nf = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...Af, ...Nf];
function Ss(e, t, n, r) {
  const o = Za(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Ja(e) {
  return Ss(e, "spacing", 8);
}
function qr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Wm = [""];
function Qv(e, t) {
  var i;
  const n = e.theme ?? gb, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Ja(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = ls[s] ?? (Wm[0] = s, Wm), a = e[s];
    qa(o, e.theme, a, (u, d) => {
      const f = u ? o[u] : o;
      for (let m = 0; m < l.length; m += 1)
        f[l[m]] = qr(r, d);
    });
  }
  return o;
}
function Lf(e) {
  return Qv(e, Af);
}
Lf.propTypes = {};
Lf.filterProps = Af;
const rt = Lf;
function _f(e) {
  return Qv(e, Nf);
}
_f.propTypes = {};
_f.filterProps = Nf;
const ot = _f;
function Xv(e = 8, t = Ja({
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
function eu(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && No(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function un(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function xn(e, t) {
  return et({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const yb = xn("border", un), vb = xn("borderTop", un), xb = xn("borderRight", un), Sb = xn("borderBottom", un), wb = xn("borderLeft", un), bb = xn("borderColor"), Cb = xn("borderTopColor"), kb = xn("borderRightColor"), Tb = xn("borderBottomColor"), Eb = xn("borderLeftColor"), Rb = xn("outline", un), Pb = xn("outlineColor"), tu = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ss(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: qr(t, r)
    });
    return kr(e, e.borderRadius, n);
  }
  return null;
};
tu.propTypes = {};
tu.filterProps = ["borderRadius"];
eu(yb, vb, xb, Sb, wb, bb, Cb, kb, Tb, Eb, tu, Rb, Pb);
const nu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ss(e.theme, "spacing", 8), n = (r) => ({
      gap: qr(t, r)
    });
    return kr(e, e.gap, n);
  }
  return null;
};
nu.propTypes = {};
nu.filterProps = ["gap"];
const ru = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ss(e.theme, "spacing", 8), n = (r) => ({
      columnGap: qr(t, r)
    });
    return kr(e, e.columnGap, n);
  }
  return null;
};
ru.propTypes = {};
ru.filterProps = ["columnGap"];
const ou = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ss(e.theme, "spacing", 8), n = (r) => ({
      rowGap: qr(t, r)
    });
    return kr(e, e.rowGap, n);
  }
  return null;
};
ou.propTypes = {};
ou.filterProps = ["rowGap"];
const $b = et({
  prop: "gridColumn"
}), Ib = et({
  prop: "gridRow"
}), Mb = et({
  prop: "gridAutoFlow"
}), Ob = et({
  prop: "gridAutoColumns"
}), Ab = et({
  prop: "gridAutoRows"
}), Nb = et({
  prop: "gridTemplateColumns"
}), Lb = et({
  prop: "gridTemplateRows"
}), _b = et({
  prop: "gridTemplateAreas"
}), zb = et({
  prop: "gridArea"
});
eu(nu, ru, ou, $b, Ib, Mb, Ob, Ab, Nb, Lb, _b, zb);
function Lo(e, t) {
  return t === "grey" ? t : e;
}
const Fb = et({
  prop: "color",
  themeKey: "palette",
  transform: Lo
}), Bb = et({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Lo
}), jb = et({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Lo
});
eu(Fb, Bb, jb);
const Db = Xa;
function Qt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ub = et({
  prop: "width",
  transform: Qt
}), zf = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || Db[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Qt(n)
      };
    };
    return kr(e, e.maxWidth, t);
  }
  return null;
};
zf.filterProps = ["maxWidth"];
const Wb = et({
  prop: "minWidth",
  transform: Qt
}), Vb = et({
  prop: "height",
  transform: Qt
}), Hb = et({
  prop: "maxHeight",
  transform: Qt
}), Kb = et({
  prop: "minHeight",
  transform: Qt
});
et({
  prop: "size",
  cssProperty: "width",
  transform: Qt
});
et({
  prop: "size",
  cssProperty: "height",
  transform: Qt
});
const Yb = et({
  prop: "boxSizing"
});
eu(Ub, zf, Wb, Vb, Hb, Kb, Yb);
const iu = {
  // borders
  border: {
    themeKey: "borders",
    transform: un
  },
  borderTop: {
    themeKey: "borders",
    transform: un
  },
  borderRight: {
    themeKey: "borders",
    transform: un
  },
  borderBottom: {
    themeKey: "borders",
    transform: un
  },
  borderLeft: {
    themeKey: "borders",
    transform: un
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
    transform: un
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: tu
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Lo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Lo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Lo
  },
  // spacing
  p: {
    style: ot
  },
  pt: {
    style: ot
  },
  pr: {
    style: ot
  },
  pb: {
    style: ot
  },
  pl: {
    style: ot
  },
  px: {
    style: ot
  },
  py: {
    style: ot
  },
  padding: {
    style: ot
  },
  paddingTop: {
    style: ot
  },
  paddingRight: {
    style: ot
  },
  paddingBottom: {
    style: ot
  },
  paddingLeft: {
    style: ot
  },
  paddingX: {
    style: ot
  },
  paddingY: {
    style: ot
  },
  paddingInline: {
    style: ot
  },
  paddingInlineStart: {
    style: ot
  },
  paddingInlineEnd: {
    style: ot
  },
  paddingBlock: {
    style: ot
  },
  paddingBlockStart: {
    style: ot
  },
  paddingBlockEnd: {
    style: ot
  },
  m: {
    style: rt
  },
  mt: {
    style: rt
  },
  mr: {
    style: rt
  },
  mb: {
    style: rt
  },
  ml: {
    style: rt
  },
  mx: {
    style: rt
  },
  my: {
    style: rt
  },
  margin: {
    style: rt
  },
  marginTop: {
    style: rt
  },
  marginRight: {
    style: rt
  },
  marginBottom: {
    style: rt
  },
  marginLeft: {
    style: rt
  },
  marginX: {
    style: rt
  },
  marginY: {
    style: rt
  },
  marginInline: {
    style: rt
  },
  marginInlineStart: {
    style: rt
  },
  marginInlineEnd: {
    style: rt
  },
  marginBlock: {
    style: rt
  },
  marginBlockStart: {
    style: rt
  },
  marginBlockEnd: {
    style: rt
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
    style: nu
  },
  rowGap: {
    style: ou
  },
  columnGap: {
    style: ru
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
    transform: Qt
  },
  maxWidth: {
    style: zf
  },
  minWidth: {
    transform: Qt
  },
  height: {
    transform: Qt
  },
  maxHeight: {
    transform: Qt
  },
  minHeight: {
    transform: Qt
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
}, Gb = {};
function Qb() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = Gb,
      nested: o
    } = t, i = r.unstable_sxConfig ?? iu, s = {
      sx: null,
      theme: r,
      nested: !0
    };
    function l(a) {
      let u = a;
      if (typeof a == "function")
        u = a(r);
      else if (typeof a != "object")
        return a;
      if (!u)
        return null;
      const d = r.breakpoints ?? Zl, f = Yv(d);
      for (const m in u) {
        const c = Xb(u[m], r);
        if (c != null) {
          if (typeof c != "object") {
            Vm(f, m, c, r, i);
            continue;
          }
          if (i[m]) {
            Vm(f, m, c, r, i);
            continue;
          }
          hb(d, c) ? qa(f, t.theme, c, (y, w) => {
            f[y][m] = w;
          }) : (s.sx = c, f[m] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": Bm(r, cd(d, f))
      } : Bm(r, cd(d, f));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const Zr = Qb();
function Vm(e, t, n, r, o) {
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
    No(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: u
  } = i, d = Za(r, s);
  qa(e, r, n, (f, m) => {
    const c = Gv(d, u, m, t);
    a === !1 ? No(f ? e[f] : e, c) : f ? e[f][a] = c : e[a] = c;
  });
}
function Xb(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qb(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let o = n.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function su(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = Vv(n), a = Xv(o);
  let u = ht({
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
      ...rb,
      ...i
    }
  }, s);
  return u = nb(u), u.applyStyles = qb, u = t.reduce((d, f) => ht(d, f), u), u.unstable_sxConfig = {
    ...iu,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return Zr({
      sx: f,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function Zb(e) {
  return Object.keys(e).length === 0;
}
function Ff(e = null) {
  const t = x.useContext(vs);
  return !t || Zb(t) ? e : t;
}
const Jb = su();
function lu(e = Jb) {
  return Ff(e);
}
function sc(e) {
  const t = wr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function qv({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = lu(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => sc(typeof s == "function" ? s(o) : s)) : i = sc(i)), /* @__PURE__ */ T.jsx(Bv, {
    styles: i
  });
}
const Hm = (e) => e, eC = () => {
  let e = Hm;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Hm;
    }
  };
}, Zv = eC();
function Jv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Jv(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function oe() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Jv(e)) && (r && (r += " "), r += t);
  return r;
}
function tC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = jv("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Zr);
  return /* @__PURE__ */ x.forwardRef(function(a, u) {
    const d = lu(n), {
      className: f,
      component: m = "div",
      ...c
    } = a;
    return /* @__PURE__ */ T.jsx(i, {
      as: m,
      ref: u,
      className: oe(f, o ? o(r) : r),
      theme: t && d[t] || d,
      ...c
    });
  });
}
const nC = {
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
function fe(e, t, n = "Mui") {
  const r = nC[t];
  return r ? `${n}-${r}` : `${Zv.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = fe(e, o, n);
  }), r;
}
function e0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: wr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = wr(o.style));
  }), r;
}
const rC = su();
function lc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ur(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function oC(e) {
  return e ? (t, n) => n[e] : null;
}
function iC(e, t, n) {
  e.theme = Kv(e.theme) ? n : e.theme[t] || e.theme;
}
function bl(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => bl(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? Ur(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? Ur(wr(s), n) : s;
    }
    return t0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? Ur(wr(r.style), n) : r.style : n ? Ur(wr(r), n) : r;
}
function t0(e, t, n = [], r = void 0) {
  var i;
  let o;
  e: for (let s = 0; s < t.length; s += 1) {
    const l = t[s];
    if (typeof l.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !l.props(o))
        continue;
    } else
      for (const a in l.props)
        if (e[a] !== l.props[a] && ((i = e.ownerState) == null ? void 0 : i[a]) !== l.props[a])
          continue e;
    typeof l.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(r ? Ur(wr(l.style(o)), r) : l.style(o))) : n.push(r ? Ur(wr(l.style), r) : l.style);
  }
  return n;
}
function n0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = rC,
    rootShouldForwardProp: r = lc,
    slotShouldForwardProp: o = lc
  } = e;
  function i(l) {
    iC(l, t, n);
  }
  return (l, a = {}) => {
    Xw(l, (C) => C.filter((E) => E !== Zr));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: f,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: c = oC(aC(d)),
      ...y
    } = a, w = u && u.startsWith("Mui") || d ? "components" : "custom", b = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), g = m || !1;
    let p = lc;
    d === "Root" || d === "root" ? p = r : d ? p = o : lC(l) && (p = void 0);
    const v = jv(l, {
      shouldForwardProp: p,
      label: sC(),
      ...y
    }), S = (C) => {
      if (C.__emotion_real === C)
        return C;
      if (typeof C == "function")
        return function(R) {
          return bl(R, C, R.theme.modularCssLayers ? w : void 0);
        };
      if (Kn(C)) {
        const E = e0(C);
        return function(N) {
          return E.variants ? bl(N, E, N.theme.modularCssLayers ? w : void 0) : N.theme.modularCssLayers ? Ur(E.style, w) : E.style;
        };
      }
      return C;
    }, k = (...C) => {
      const E = [], R = C.map(S), N = [];
      if (E.push(i), u && c && N.push(function(h) {
        var L, I;
        const $ = (I = (L = h.theme.components) == null ? void 0 : L[u]) == null ? void 0 : I.styleOverrides;
        if (!$)
          return null;
        const M = {};
        for (const z in $)
          M[z] = bl(h, $[z], h.theme.modularCssLayers ? "theme" : void 0);
        return c(h, M);
      }), u && !b && N.push(function(h) {
        var M, L;
        const O = h.theme, $ = (L = (M = O == null ? void 0 : O.components) == null ? void 0 : M[u]) == null ? void 0 : L.variants;
        return $ ? t0(h, $, [], h.theme.modularCssLayers ? "theme" : void 0) : null;
      }), g || N.push(Zr), Array.isArray(R[0])) {
        const A = R.shift(), h = new Array(E.length).fill(""), O = new Array(N.length).fill("");
        let $;
        $ = [...h, ...A, ...O], $.raw = [...h, ...A.raw, ...O], E.unshift($);
      }
      const _ = [...E, ...R, ...N], P = v(..._);
      return l.muiName && (P.muiName = l.muiName), P;
    };
    return v.withConfig && (k.withConfig = v.withConfig), k;
  };
}
function sC(e, t) {
  return void 0;
}
function lC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function aC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const uC = n0();
function Ko(e, t, n = !1) {
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
              const u = a, d = s[u], f = l[u];
              typeof d == "function" || typeof f == "function" ? r[i][u] = (...m) => Ko((typeof d == "function" ? d(...m) : d) ?? {}, (typeof f == "function" ? f(...m) : f) ?? {}, n) : r[i][u] = Ko(d ?? {}, f ?? {}, n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = oe(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function cC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Ko(t.components[n].defaultProps, r);
}
function dC(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = lu(r);
  return o && (i = i[o] || i), cC({
    theme: i,
    name: n,
    props: t
  });
}
const ct = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function fC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Bf(e, t = 0, n = 1) {
  return fC(e, t, n);
}
function pC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Tr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Tr(pC(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(nr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(nr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const mC = (e) => {
  const t = Tr(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, bi = (e, t) => {
  try {
    return mC(e);
  } catch {
    return e;
  }
};
function au(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function r0(e) {
  e = Tr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, d = (u + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), au({
    type: l,
    values: a
  });
}
function dd(e) {
  e = Tr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Tr(r0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function hC(e, t) {
  const n = dd(e), r = dd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ea(e, t) {
  return e = Tr(e), t = Bf(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, au(e);
}
function Mr(e, t, n) {
  try {
    return ea(e, t);
  } catch {
    return e;
  }
}
function uu(e, t) {
  if (e = Tr(e), t = Bf(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return au(e);
}
function Re(e, t, n) {
  try {
    return uu(e, t);
  } catch {
    return e;
  }
}
function cu(e, t) {
  if (e = Tr(e), t = Bf(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return au(e);
}
function Pe(e, t, n) {
  try {
    return cu(e, t);
  } catch {
    return e;
  }
}
function gC(e, t = 0.15) {
  return dd(e) > 0.5 ? uu(e, t) : cu(e, t);
}
function Ys(e, t, n) {
  try {
    return gC(e, t);
  } catch {
    return e;
  }
}
const o0 = /* @__PURE__ */ x.createContext(null);
function jf() {
  return x.useContext(o0);
}
const yC = typeof Symbol == "function" && Symbol.for, vC = yC ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function xC(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function SC(e) {
  const {
    children: t,
    theme: n
  } = e, r = jf(), o = x.useMemo(() => {
    const i = r === null ? {
      ...n
    } : xC(r, n);
    return i != null && (i[vC] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ T.jsx(o0.Provider, {
    value: o,
    children: t
  });
}
const i0 = /* @__PURE__ */ x.createContext();
function wC({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ T.jsx(i0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const s0 = () => x.useContext(i0) ?? !1, l0 = /* @__PURE__ */ x.createContext(void 0);
function bC({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ T.jsx(l0.Provider, {
    value: e,
    children: t
  });
}
function CC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Ko(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Ko(o, r, t.components.mergeClassNameAndStyle) : r;
}
function kC({
  props: e,
  name: t
}) {
  const n = x.useContext(l0);
  return CC({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Km = 0;
function TC(e) {
  const [t, n] = x.useState(e), r = e || t;
  return x.useEffect(() => {
    t == null && (Km += 1, n(`mui-${Km}`));
  }, [t]), r;
}
const EC = {
  ...El
}, Ym = EC.useId;
function Jr(e) {
  if (Ym !== void 0) {
    const t = Ym();
    return e ?? t;
  }
  return TC(e);
}
function RC(e) {
  const t = Ff(), n = Jr() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, ct(() => {
    var l, a;
    const i = document.querySelector("head");
    if (!i)
      return;
    const s = i.firstChild;
    if (o) {
      if (s && ((l = s.hasAttribute) != null && l.call(s, "data-mui-layer-order")) && s.getAttribute("data-mui-layer-order") === n)
        return;
      const u = document.createElement("style");
      u.setAttribute("data-mui-layer-order", n), u.textContent = o, i.prepend(u);
    } else
      (a = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || a.remove();
  }, [o, n]), o ? /* @__PURE__ */ T.jsx(qv, {
    styles: o
  }) : null;
}
const Gm = {};
function Qm(e, t, n, r = !1) {
  return x.useMemo(() => {
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
function a0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Ff(Gm), i = jf() || Gm, s = Qm(r, o, n), l = Qm(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", u = RC(s);
  return /* @__PURE__ */ T.jsx(SC, {
    theme: l,
    children: /* @__PURE__ */ T.jsx(vs.Provider, {
      value: s,
      children: /* @__PURE__ */ T.jsx(wC, {
        value: a,
        children: /* @__PURE__ */ T.jsxs(bC, {
          value: r ? s[r].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const Xm = {
  theme: void 0
};
function PC(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Xm.theme = o.theme, i = e0(e(Xm)), t = i, n = o.theme), i;
  };
}
const Df = "mode", Uf = "color-scheme", $C = "data-color-scheme";
function IC(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Df,
    colorSchemeStorageKey: i = Uf,
    attribute: s = $C,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let u = "", d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const m = d.substring(1);
    u += `${l}.classList.remove('${m}'.replace('%s', light), '${m}'.replace('%s', dark));
      ${l}.classList.add('${m}'.replace('%s', colorScheme));`;
  }
  const f = d.match(/\[([^[\]]+)\]/);
  if (f) {
    const [m, c] = f[1].split("=");
    c || (u += `${l}.removeAttribute('${m}'.replace('%s', light));
      ${l}.removeAttribute('${m}'.replace('%s', dark));`), u += `
      ${l}.setAttribute('${m}'.replace('%s', colorScheme), ${c ? `${c}.replace('%s', colorScheme)` : '""'});`;
  } else d !== ".%s" && (u += `${l}.setAttribute('${d}', colorScheme);`);
  return /* @__PURE__ */ T.jsx("script", {
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
    ${u}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function MC() {
}
const OC = ({
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
      return MC;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function ac() {
}
function qm(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function u0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function AC(e) {
  return u0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function NC(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Df,
    colorSchemeStorageKey: s = Uf,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = OC,
    noSsr: u = !1
  } = e, d = o.join(","), f = o.length > 1, m = x.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), c = x.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), y = x.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [w, b] = x.useState(() => {
    const R = (m == null ? void 0 : m.get(t)) || t, N = (c == null ? void 0 : c.get(n)) || n, _ = (y == null ? void 0 : y.get(r)) || r;
    return {
      mode: R,
      systemMode: qm(R),
      lightColorScheme: N,
      darkColorScheme: _
    };
  }), [g, p] = x.useState(u || !f);
  x.useEffect(() => {
    p(!0);
  }, []);
  const v = AC(w), S = x.useCallback((R) => {
    b((N) => {
      if (R === N.mode)
        return N;
      const _ = R ?? t;
      return m == null || m.set(_), {
        ...N,
        mode: _,
        systemMode: qm(_)
      };
    });
  }, [m, t]), k = x.useCallback((R) => {
    R ? typeof R == "string" ? R && !d.includes(R) ? console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`) : b((N) => {
      const _ = {
        ...N
      };
      return u0(N, (P) => {
        P === "light" && (c == null || c.set(R), _.lightColorScheme = R), P === "dark" && (y == null || y.set(R), _.darkColorScheme = R);
      }), _;
    }) : b((N) => {
      const _ = {
        ...N
      }, P = R.light === null ? n : R.light, A = R.dark === null ? r : R.dark;
      return P && (d.includes(P) ? (_.lightColorScheme = P, c == null || c.set(P)) : console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`)), A && (d.includes(A) ? (_.darkColorScheme = A, y == null || y.set(A)) : console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`)), _;
    }) : b((N) => (c == null || c.set(n), y == null || y.set(r), {
      ...N,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [d, c, y, n, r]), C = x.useCallback((R) => {
    w.mode === "system" && b((N) => {
      const _ = R != null && R.matches ? "dark" : "light";
      return N.systemMode === _ ? N : {
        ...N,
        systemMode: _
      };
    });
  }, [w.mode]), E = x.useRef(C);
  return E.current = C, x.useEffect(() => {
    if (typeof window.matchMedia != "function" || !f)
      return;
    const R = (..._) => E.current(..._), N = window.matchMedia("(prefers-color-scheme: dark)");
    return N.addListener(R), R(N), () => {
      N.removeListener(R);
    };
  }, [f]), x.useEffect(() => {
    if (f) {
      const R = (m == null ? void 0 : m.subscribe((P) => {
        (!P || ["light", "dark", "system"].includes(P)) && S(P || t);
      })) || ac, N = (c == null ? void 0 : c.subscribe((P) => {
        (!P || d.match(P)) && k({
          light: P
        });
      })) || ac, _ = (y == null ? void 0 : y.subscribe((P) => {
        (!P || d.match(P)) && k({
          dark: P
        });
      })) || ac;
      return () => {
        R(), N(), _();
      };
    }
  }, [k, S, d, t, l, f, m, c, y]), {
    ...w,
    mode: g ? w.mode : void 0,
    systemMode: g ? w.systemMode : void 0,
    colorScheme: g ? v : void 0,
    setMode: S,
    setColorScheme: k
  };
}
const LC = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function _C(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Df,
    colorSchemeStorageKey: o = Uf,
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
  }, u = /* @__PURE__ */ x.createContext(void 0), d = () => x.useContext(u) || a, f = {}, m = {};
  function c(g) {
    var _e, ke, ge, Ct;
    const {
      children: p,
      theme: v,
      modeStorageKey: S = r,
      colorSchemeStorageKey: k = o,
      disableTransitionOnChange: C = i,
      storageManager: E,
      storageWindow: R = typeof window > "u" ? void 0 : window,
      documentNode: N = typeof document > "u" ? void 0 : document,
      colorSchemeNode: _ = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: P = !1,
      disableStyleSheetGeneration: A = !1,
      defaultMode: h = "system",
      forceThemeRerender: O = !1,
      noSsr: $
    } = g, M = x.useRef(!1), L = jf(), I = x.useContext(u), z = !!I && !P, j = x.useMemo(() => v || (typeof n == "function" ? n() : n), [v]), W = j[t], D = W || j, {
      colorSchemes: G = f,
      components: Y = m,
      cssVarPrefix: Q
    } = D, H = Object.keys(G).filter((J) => !!G[J]).join(","), te = x.useMemo(() => H.split(","), [H]), B = typeof s == "string" ? s : s.light, ee = typeof s == "string" ? s : s.dark, Z = G[B] && G[ee] ? h : ((ke = (_e = G[D.defaultColorScheme]) == null ? void 0 : _e.palette) == null ? void 0 : ke.mode) || ((ge = D.palette) == null ? void 0 : ge.mode), {
      mode: ve,
      setMode: me,
      systemMode: le,
      lightColorScheme: se,
      darkColorScheme: Ee,
      colorScheme: Ae,
      setColorScheme: we
    } = NC({
      supportedColorSchemes: te,
      defaultLightColorScheme: B,
      defaultDarkColorScheme: ee,
      modeStorageKey: S,
      colorSchemeStorageKey: k,
      defaultMode: Z,
      storageManager: E,
      storageWindow: R,
      noSsr: $
    });
    let Ge = ve, ae = Ae;
    z && (Ge = I.mode, ae = I.colorScheme);
    let je = ae || D.defaultColorScheme;
    D.vars && !O && (je = D.defaultColorScheme);
    const tt = x.useMemo(() => {
      var ze;
      const J = ((ze = D.generateThemeVars) == null ? void 0 : ze.call(D)) || D.vars, ne = {
        ...D,
        components: Y,
        colorSchemes: G,
        cssVarPrefix: Q,
        vars: J
      };
      if (typeof ne.generateSpacing == "function" && (ne.spacing = ne.generateSpacing()), je) {
        const Ze = G[je];
        Ze && typeof Ze == "object" && Object.keys(Ze).forEach((nt) => {
          Ze[nt] && typeof Ze[nt] == "object" ? ne[nt] = {
            ...ne[nt],
            ...Ze[nt]
          } : ne[nt] = Ze[nt];
        });
      }
      return l ? l(ne) : ne;
    }, [D, je, Y, G, Q]), ft = D.colorSchemeSelector;
    ct(() => {
      if (ae && _ && ft && ft !== "media") {
        const J = ft;
        let ne = ft;
        if (J === "class" && (ne = ".%s"), J === "data" && (ne = "[data-%s]"), J != null && J.startsWith("data-") && !J.includes("%s") && (ne = `[${J}="%s"]`), ne.startsWith("."))
          _.classList.remove(...te.map((ze) => ne.substring(1).replace("%s", ze))), _.classList.add(ne.substring(1).replace("%s", ae));
        else {
          const ze = ne.replace("%s", ae).match(/\[([^\]]+)\]/);
          if (ze) {
            const [Ze, nt] = ze[1].split("=");
            nt || te.forEach((Ne) => {
              _.removeAttribute(Ze.replace(ae, Ne));
            }), _.setAttribute(Ze, nt ? nt.replace(/"|'/g, "") : "");
          } else
            _.setAttribute(ne, ae);
        }
      }
    }, [ae, ft, _, te]), x.useEffect(() => {
      let J;
      if (C && M.current && N) {
        const ne = N.createElement("style");
        ne.appendChild(N.createTextNode(LC)), N.head.appendChild(ne), window.getComputedStyle(N.body), J = setTimeout(() => {
          N.head.removeChild(ne);
        }, 1);
      }
      return () => {
        clearTimeout(J);
      };
    }, [ae, C, N]), x.useEffect(() => (M.current = !0, () => {
      M.current = !1;
    }), []);
    const qe = x.useMemo(() => ({
      allColorSchemes: te,
      colorScheme: ae,
      darkColorScheme: Ee,
      lightColorScheme: se,
      mode: Ge,
      setColorScheme: we,
      setMode: me,
      systemMode: le
    }), [te, ae, Ee, se, Ge, we, me, le, tt.colorSchemeSelector]);
    let bt = !0;
    (A || D.cssVariables === !1 || z && (L == null ? void 0 : L.cssVarPrefix) === Q) && (bt = !1);
    const Mt = /* @__PURE__ */ T.jsxs(x.Fragment, {
      children: [/* @__PURE__ */ T.jsx(a0, {
        themeId: W ? t : void 0,
        theme: tt,
        children: p
      }), bt && /* @__PURE__ */ T.jsx(Bv, {
        styles: ((Ct = tt.generateStyleSheets) == null ? void 0 : Ct.call(tt)) || []
      })]
    });
    return z ? Mt : /* @__PURE__ */ T.jsx(u.Provider, {
      value: qe,
      children: Mt
    });
  }
  const y = typeof s == "string" ? s : s.light, w = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: c,
    useColorScheme: d,
    getInitColorSchemeScript: (g) => IC({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: y,
      defaultDarkColorScheme: w,
      modeStorageKey: r,
      ...g
    })
  };
}
function zC(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const FC = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Zm = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (FC.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, BC = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, jC = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function uc(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return BC(
    e,
    (l, a, u) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, f = jC(l, a);
        Object.assign(o, {
          [d]: f
        }), Zm(i, l, `var(${d})`, u), Zm(s, l, `var(${d}, ${f})`, u);
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
function DC(e, t = {}) {
  const {
    getSelector: n = g,
    disableCssColorScheme: r,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: l,
    defaultColorScheme: a = "light",
    ...u
  } = e, {
    vars: d,
    css: f,
    varsWithDefaults: m
  } = uc(u, t);
  let c = m;
  const y = {}, {
    [a]: w,
    ...b
  } = s;
  if (Object.entries(b || {}).forEach(([S, k]) => {
    const {
      vars: C,
      css: E,
      varsWithDefaults: R
    } = uc(k, t);
    c = ht(c, R), y[S] = {
      css: E,
      vars: C
    };
  }), w) {
    const {
      css: S,
      vars: k,
      varsWithDefaults: C
    } = uc(w, t);
    c = ht(c, C), y[a] = {
      css: S,
      vars: k
    };
  }
  function g(S, k) {
    var E, R;
    let C = o;
    if (o === "class" && (C = ".%s"), o === "data" && (C = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (C = `[${o}="%s"]`), S) {
      if (C === "media")
        return e.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((R = (E = s[S]) == null ? void 0 : E.palette) == null ? void 0 : R.mode) || S})`]: {
            ":root": k
          }
        };
      if (C)
        return e.defaultColorScheme === S ? `:root, ${C.replace("%s", String(S))}` : C.replace("%s", String(S));
    }
    return ":root";
  }
  return {
    vars: c,
    generateThemeVars: () => {
      let S = {
        ...d
      };
      return Object.entries(y).forEach(([, {
        vars: k
      }]) => {
        S = ht(S, k);
      }), S;
    },
    generateStyleSheets: () => {
      var N, _;
      const S = [], k = e.defaultColorScheme || "light";
      function C(P, A) {
        Object.keys(A).length && S.push(typeof P == "string" ? {
          [P]: {
            ...A
          }
        } : P);
      }
      C(n(void 0, {
        ...f
      }), f);
      const {
        [k]: E,
        ...R
      } = y;
      if (E) {
        const {
          css: P
        } = E, A = (_ = (N = s[k]) == null ? void 0 : N.palette) == null ? void 0 : _.mode, h = !r && A ? {
          colorScheme: A,
          ...P
        } : {
          ...P
        };
        C(n(k, {
          ...h
        }), h);
      }
      return Object.entries(R).forEach(([P, {
        css: A
      }]) => {
        var $, M;
        const h = (M = ($ = s[P]) == null ? void 0 : $.palette) == null ? void 0 : M.mode, O = !r && h ? {
          colorScheme: h,
          ...A
        } : {
          ...A
        };
        C(n(P, {
          ...O
        }), O);
      }), i && S.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), S;
    }
  };
}
function UC(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function pe(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "", l = !0;
    for (let a = 0; a < i.length; a += 1) {
      const u = i[a];
      u && (s += (l === !0 ? "" : " ") + t(u), l = !1, n && n[u] && (s += " " + n[u]));
    }
    r[o] = s;
  }
  return r;
}
function cc(e, t) {
  var n, r, o;
  return /* @__PURE__ */ x.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const WC = su(), VC = uC("div", {
  name: "MuiStack",
  slot: "Root"
});
function HC(e) {
  return dC({
    props: e,
    name: "MuiStack",
    defaultTheme: WC
  });
}
function KC(e, t) {
  const n = x.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ x.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const YC = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], GC = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...kr({
      theme: t
    }, ic({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Ja(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = ic({
      values: e.direction,
      base: o
    }), s = ic({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, d) => {
      if (!i[a]) {
        const m = u > 0 ? i[d[u - 1]] : "column";
        i[a] = m;
      }
    }), n = ht(n, kr({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: qr(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${YC(u ? i[u] : e.direction)}`]: qr(r, a)
      }
    }));
  }
  return n = pb(t.breakpoints, n), n;
};
function QC(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = VC,
    useThemeProps: n = HC,
    componentName: r = "MuiStack"
  } = e, o = () => pe({
    root: ["root"]
  }, (a) => fe(r, a), {}), i = t(GC);
  return /* @__PURE__ */ x.forwardRef(function(a, u) {
    const d = n(a), {
      component: f = "div",
      direction: m = "column",
      spacing: c = 0,
      divider: y,
      children: w,
      className: b,
      useFlexGap: g = !1,
      ...p
    } = d, v = {
      direction: m,
      spacing: c,
      useFlexGap: g
    }, S = o();
    return /* @__PURE__ */ T.jsx(i, {
      as: f,
      ownerState: v,
      ref: u,
      className: oe(S.root, b),
      ...p,
      children: y ? KC(w, y) : w
    });
  });
}
function c0() {
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
      paper: ns.white,
      default: ns.white
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
const d0 = c0();
function f0() {
  return {
    text: {
      primary: ns.white,
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
      active: ns.white,
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
const fd = f0();
function Jm(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = cu(e.main, o) : t === "dark" && (e.dark = uu(e.main, i)));
}
function eh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function XC(e = "light") {
  return e === "dark" ? {
    main: uo[200],
    light: uo[50],
    dark: uo[400]
  } : {
    main: uo[700],
    light: uo[400],
    dark: uo[800]
  };
}
function qC(e = "light") {
  return e === "dark" ? {
    main: ao[200],
    light: ao[50],
    dark: ao[400]
  } : {
    main: ao[500],
    light: ao[300],
    dark: ao[700]
  };
}
function ZC(e = "light") {
  return e === "dark" ? {
    main: lo[500],
    light: lo[300],
    dark: lo[700]
  } : {
    main: lo[700],
    light: lo[400],
    dark: lo[800]
  };
}
function JC(e = "light") {
  return e === "dark" ? {
    main: co[400],
    light: co[300],
    dark: co[700]
  } : {
    main: co[700],
    light: co[500],
    dark: co[900]
  };
}
function ek(e = "light") {
  return e === "dark" ? {
    main: fo[400],
    light: fo[300],
    dark: fo[700]
  } : {
    main: fo[800],
    light: fo[500],
    dark: fo[900]
  };
}
function tk(e = "light") {
  return e === "dark" ? {
    main: pi[400],
    light: pi[300],
    dark: pi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: pi[500],
    dark: pi[900]
  };
}
function nk(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Wf(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || XC(t), l = e.secondary || qC(t), a = e.error || ZC(t), u = e.info || JC(t), d = e.success || ek(t), f = e.warning || tk(t);
  function m(b) {
    return o ? nk(b) : hC(b, fd.text.primary) >= n ? fd.text.primary : d0.text.primary;
  }
  const c = ({
    color: b,
    name: g,
    mainShade: p = 500,
    lightShade: v = 300,
    darkShade: S = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[p] && (b.main = b[p]), !b.hasOwnProperty("main"))
      throw new Error(nr(11, g ? ` (${g})` : "", p));
    if (typeof b.main != "string")
      throw new Error(nr(12, g ? ` (${g})` : "", JSON.stringify(b.main)));
    return o ? (eh(o, b, "light", v, r), eh(o, b, "dark", S, r)) : (Jm(b, "light", v, r), Jm(b, "dark", S, r)), b.contrastText || (b.contrastText = m(b.main)), b;
  };
  let y;
  return t === "light" ? y = c0() : t === "dark" && (y = f0()), ht({
    // A collection of common colors.
    common: {
      ...ns
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: c({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: c({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: c({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: c({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: c({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: c({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: KS,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: c,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...y
  }, i);
}
const du = "--_focusVisible-offset", Vf = "--_focusVisible-behavior", p0 = "--_focusVisible-shadow", rk = `var(${du}, 1)`, ok = `var(${Vf}, )`, m0 = {
  [du]: 1,
  [Vf]: "initial"
  // reverts the var to guaranteed-invalid so `var(--_focusVisible-behavior, )` falls back to empty — there is no explicit `outset` keyword.
};
function ik(e) {
  return {
    [p0]: e
  };
}
function h0(e, t) {
  return t.reduce((n, r) => r && "focusVisible" in r ? ht(n, {
    focusVisible: r.focusVisible
  }) : n, {
    focusVisible: e
  }).focusVisible;
}
function sk(e) {
  return e != null && typeof e == "object" && typeof e.outlineOffset == "string" && e.outlineOffset.includes(du);
}
function Hf(e, t) {
  return lk({
    outlineStyle: "solid",
    outlineColor: t,
    outlineWidth: 2,
    outlineOffset: 2,
    // invisible shadow for parent component with solid background (AppBar, Snackbar, Alert) can control the ring color.
    boxShadow: `var(${p0}, 0 0)`,
    ...e === !0 ? null : e
  });
}
function lk(e) {
  const t = e.outlineOffset ?? 0;
  if (typeof t != "string" || !t.includes(du)) {
    const r = typeof t == "number" ? `${t}px` : t;
    e.outlineOffset = `calc(${rk} * ${r})`;
  }
  const n = /* @__PURE__ */ new Set(["none", "initial", "inherit", "unset", "revert", "revert-layer"]);
  return typeof e.boxShadow == "string" && !n.has(e.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e.boxShadow) && !e.boxShadow.includes(Vf) && (e.boxShadow = `${ok} ${e.boxShadow}`), e;
}
function ak(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function uk(e, t) {
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
function ck(e) {
  return Math.round(e * 1e5) / 1e5;
}
const th = {
  textTransform: "uppercase"
}, nh = '"Roboto", "Helvetica", "Arial", sans-serif';
function g0(e, t) {
  const {
    fontFamily: n = nh,
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
    allVariants: u,
    pxToRem: d,
    ...f
  } = typeof t == "function" ? t(e) : t, m = r / 14, c = d || ((b) => `${b / a * m}rem`), y = (b, g, p, v, S) => ({
    fontFamily: n,
    fontWeight: b,
    fontSize: c(g),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: p,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === nh ? {
      letterSpacing: `${ck(v / g)}em`
    } : {},
    ...S,
    ...u
  }), w = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(s, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(s, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(s, 14, 1.75, 0.4, th),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, th),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ht({
    htmlFontSize: a,
    pxToRem: c,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...w
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const dk = 0.2, fk = 0.14, pk = 0.12;
function De(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${dk})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${fk})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${pk})`].join(",");
}
const mk = ["none", De(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), De(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), De(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), De(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), De(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), De(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), De(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), De(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), De(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), De(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), De(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), De(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), De(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), De(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), De(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), De(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), De(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), De(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), De(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), De(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), De(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), De(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), De(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), De(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], hk = ["all"], gk = {}, yk = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, vk = {
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
function rh(e) {
  return `${Math.round(e)}ms`;
}
function xk(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Sk(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...yk,
    ...t.easing
  }, r = {
    ...vk,
    ...t.duration
  }, o = (s = hk, l = gk) => {
    const {
      duration: a = r.standard,
      easing: u = n.easeInOut,
      delay: d = 0,
      ...f
    } = l;
    return (Array.isArray(s) ? s : [s]).map((m) => `${m} ${typeof a == "string" ? a : rh(a)} ${u} ${typeof d == "string" ? d : rh(d)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: xk,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const wk = {};
function bk(e = wk) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const Ck = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function kk(e) {
  return Kn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function y0(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !kk(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : Kn(l) && (r[s] = {
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
function oh(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Tk = (e) => {
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
function Ek(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : ea(t, Tk(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${oh(n)})` : cu(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${oh(n)})` : uu(t, n);
    }
  });
}
function pd(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    motion: s = {},
    transitions: l = {},
    typography: a = {},
    shape: u,
    colorSpace: d,
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(nr(22));
  const m = Wf({
    ...i,
    colorSpace: d
  }), c = su(e);
  let y = ht(c, {
    mixins: uk(c.breakpoints, r),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: mk.slice(),
    typography: g0(m, a),
    motion: bk(s),
    transitions: Sk(l),
    zIndex: {
      ...Ck
    }
  });
  return y = ht(y, f), y = t.reduce((w, b) => ht(w, b), y), delete y.transitions.reducedMotion, y.focusVisible != null && y.focusVisible !== !1 && (y.focusVisible = Hf(y.focusVisible, y.palette.primary.main)), y.unstable_sxConfig = {
    ...iu,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, y.unstable_sx = function(b) {
    return Zr({
      sx: b,
      theme: this
    });
  }, y.toRuntimeSource = y0, Ek(y), y;
}
function md(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Rk = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = md(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function v0(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function x0(e) {
  return e === "dark" ? Rk : [];
}
function Pk(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = Wf({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...v0(s.mode),
      ...n
    },
    overlays: r || x0(s.mode),
    ...i
  };
}
function $k(e) {
  var t;
  return e[0] === "motion" || // Keep `focusVisible` inline: its values reference the per-component private vars
  // (`--_focusVisible-offset`/`-behavior`). Hoisted to a `:root` var they resolve where those
  // vars are unset, silently breaking the inner-ring inset.
  e[0] === "focusVisible" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ik = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Mk = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Ik(e.cssVarPrefix).forEach((l) => {
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
function Ok(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Ci(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : r0(e);
}
function Un(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = bi(Ci(e[t])));
}
function Ak(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const $n = (e) => {
  try {
    return e();
  } catch {
  }
}, Nk = (e = "mui") => zC(e);
function dc(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = Pk({
      ...n,
      palette: {
        mode: i,
        ...n == null ? void 0 : n.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...l
  } = pd({
    ...r,
    palette: {
      mode: i,
      ...n == null ? void 0 : n.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...n,
    palette: s,
    opacity: {
      ...v0(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || x0(i)
  }, l;
}
function Lk(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = $k,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, f = Object.keys(n)[0], m = r || (n.light && f !== "light" ? "light" : f), c = Nk(i), {
    [m]: y,
    light: w,
    dark: b,
    ...g
  } = n, p = {
    ...g
  };
  let v = y;
  if ((m === "dark" && !("dark" in n) || m === "light" && !("light" in n)) && (v = !0), !v)
    throw new Error(nr(21, m));
  let S;
  s && (S = "oklch");
  const k = dc(S, p, v, d, m);
  w && !p.light && dc(S, p, w, void 0, "light"), b && !p.dark && dc(S, p, b, void 0, "dark");
  let C = {
    defaultColorScheme: m,
    ...k,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: c,
    colorSchemes: p,
    font: {
      ...ak(k.typography),
      ...k.font
    },
    spacing: Ak(d.spacing)
  };
  Object.keys(C.colorSchemes).forEach((A) => {
    const h = C.colorSchemes[A].palette, O = (M) => {
      const L = M.split("-"), I = L[1], z = L[2];
      return c(M, h[I][z]);
    };
    h.mode === "light" && (F(h.common, "background", "#fff"), F(h.common, "onBackground", "#000")), h.mode === "dark" && (F(h.common, "background", "#000"), F(h.common, "onBackground", "#fff"));
    function $(M, L, I) {
      if (S) {
        let z;
        return M === Mr && (z = `transparent ${((1 - I) * 100).toFixed(0)}%`), M === Re && (z = `#000 ${(I * 100).toFixed(0)}%`), M === Pe && (z = `#fff ${(I * 100).toFixed(0)}%`), `color-mix(in ${S}, ${L}, ${z})`;
      }
      return M(L, I);
    }
    if (Ok(h, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), h.mode === "light") {
      F(h.Alert, "errorColor", $(Re, s ? c("palette-error-light") : h.error.light, 0.6)), F(h.Alert, "infoColor", $(Re, s ? c("palette-info-light") : h.info.light, 0.6)), F(h.Alert, "successColor", $(Re, s ? c("palette-success-light") : h.success.light, 0.6)), F(h.Alert, "warningColor", $(Re, s ? c("palette-warning-light") : h.warning.light, 0.6)), F(h.Alert, "errorFilledBg", O("palette-error-main")), F(h.Alert, "infoFilledBg", O("palette-info-main")), F(h.Alert, "successFilledBg", O("palette-success-main")), F(h.Alert, "warningFilledBg", O("palette-warning-main")), F(h.Alert, "errorFilledColor", $n(() => h.getContrastText(h.error.main))), F(h.Alert, "infoFilledColor", $n(() => h.getContrastText(h.info.main))), F(h.Alert, "successFilledColor", $n(() => h.getContrastText(h.success.main))), F(h.Alert, "warningFilledColor", $n(() => h.getContrastText(h.warning.main))), F(h.Alert, "errorStandardBg", $(Pe, s ? c("palette-error-light") : h.error.light, 0.9)), F(h.Alert, "infoStandardBg", $(Pe, s ? c("palette-info-light") : h.info.light, 0.9)), F(h.Alert, "successStandardBg", $(Pe, s ? c("palette-success-light") : h.success.light, 0.9)), F(h.Alert, "warningStandardBg", $(Pe, s ? c("palette-warning-light") : h.warning.light, 0.9)), F(h.Alert, "errorIconColor", O("palette-error-main")), F(h.Alert, "infoIconColor", O("palette-info-main")), F(h.Alert, "successIconColor", O("palette-success-main")), F(h.Alert, "warningIconColor", O("palette-warning-main")), F(h.AppBar, "defaultBg", O("palette-grey-100")), F(h.Avatar, "defaultBg", O("palette-grey-400")), F(h.Button, "inheritContainedBg", O("palette-grey-300")), F(h.Button, "inheritContainedHoverBg", O("palette-grey-A100")), F(h.Chip, "defaultBorder", O("palette-grey-400")), F(h.Chip, "defaultAvatarColor", O("palette-grey-700")), F(h.Chip, "defaultIconColor", O("palette-grey-700")), F(h.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(h.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(h.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(h.LinearProgress, "primaryBg", $(Pe, s ? c("palette-primary-main") : h.primary.main, 0.62)), F(h.LinearProgress, "secondaryBg", $(Pe, s ? c("palette-secondary-main") : h.secondary.main, 0.62)), F(h.LinearProgress, "errorBg", $(Pe, s ? c("palette-error-main") : h.error.main, 0.62)), F(h.LinearProgress, "infoBg", $(Pe, s ? c("palette-info-main") : h.info.main, 0.62)), F(h.LinearProgress, "successBg", $(Pe, s ? c("palette-success-main") : h.success.main, 0.62)), F(h.LinearProgress, "warningBg", $(Pe, s ? c("palette-warning-light") : h.warning.main, 0.62)), F(h.Skeleton, "bg", S ? $(Mr, s ? c("palette-text-primary") : h.text.primary, 0.11) : `rgba(${O("palette-text-primaryChannel")} / 0.11)`), F(h.Slider, "primaryTrack", $(Pe, s ? c("palette-primary-main") : h.primary.main, 0.62)), F(h.Slider, "secondaryTrack", $(Pe, s ? c("palette-secondary-main") : h.secondary.main, 0.62)), F(h.Slider, "errorTrack", $(Pe, s ? c("palette-error-main") : h.error.main, 0.62)), F(h.Slider, "infoTrack", $(Pe, s ? c("palette-info-main") : h.info.main, 0.62)), F(h.Slider, "successTrack", $(Pe, s ? c("palette-success-main") : h.success.main, 0.62)), F(h.Slider, "warningTrack", $(Pe, s ? c("palette-warning-main") : h.warning.main, 0.62));
      const M = S ? $(Re, s ? c("palette-background-default") : h.background.default, 0.6825) : Ys(h.background.default, 0.8);
      F(h.SnackbarContent, "bg", M), F(h.SnackbarContent, "color", $n(() => S ? fd.text.primary : h.getContrastText(M))), F(h.SpeedDialAction, "fabHoverBg", Ys(h.background.paper, 0.15)), F(h.StepConnector, "border", O("palette-grey-400")), F(h.StepContent, "border", O("palette-grey-400")), F(h.Switch, "defaultColor", O("palette-common-white")), F(h.Switch, "defaultDisabledColor", O("palette-grey-100")), F(h.Switch, "primaryDisabledColor", $(Pe, s ? c("palette-primary-main") : h.primary.main, 0.62)), F(h.Switch, "secondaryDisabledColor", $(Pe, s ? c("palette-secondary-main") : h.secondary.main, 0.62)), F(h.Switch, "errorDisabledColor", $(Pe, s ? c("palette-error-main") : h.error.main, 0.62)), F(h.Switch, "infoDisabledColor", $(Pe, s ? c("palette-info-main") : h.info.main, 0.62)), F(h.Switch, "successDisabledColor", $(Pe, s ? c("palette-success-main") : h.success.main, 0.62)), F(h.Switch, "warningDisabledColor", $(Pe, s ? c("palette-warning-main") : h.warning.main, 0.62)), F(h.TableCell, "border", $(Pe, Mr(s ? c("palette-divider") : h.divider, 1), 0.88)), F(h.Tooltip, "bg", $(Mr, s ? c("palette-grey-700") : h.grey[700], 0.92));
    }
    if (h.mode === "dark") {
      F(h.Alert, "errorColor", $(Pe, s ? c("palette-error-light") : h.error.light, 0.6)), F(h.Alert, "infoColor", $(Pe, s ? c("palette-info-light") : h.info.light, 0.6)), F(h.Alert, "successColor", $(Pe, s ? c("palette-success-light") : h.success.light, 0.6)), F(h.Alert, "warningColor", $(Pe, s ? c("palette-warning-light") : h.warning.light, 0.6)), F(h.Alert, "errorFilledBg", O("palette-error-dark")), F(h.Alert, "infoFilledBg", O("palette-info-dark")), F(h.Alert, "successFilledBg", O("palette-success-dark")), F(h.Alert, "warningFilledBg", O("palette-warning-dark")), F(h.Alert, "errorFilledColor", $n(() => h.getContrastText(h.error.dark))), F(h.Alert, "infoFilledColor", $n(() => h.getContrastText(h.info.dark))), F(h.Alert, "successFilledColor", $n(() => h.getContrastText(h.success.dark))), F(h.Alert, "warningFilledColor", $n(() => h.getContrastText(h.warning.dark))), F(h.Alert, "errorStandardBg", $(Re, s ? c("palette-error-light") : h.error.light, 0.9)), F(h.Alert, "infoStandardBg", $(Re, s ? c("palette-info-light") : h.info.light, 0.9)), F(h.Alert, "successStandardBg", $(Re, s ? c("palette-success-light") : h.success.light, 0.9)), F(h.Alert, "warningStandardBg", $(Re, s ? c("palette-warning-light") : h.warning.light, 0.9)), F(h.Alert, "errorIconColor", O("palette-error-main")), F(h.Alert, "infoIconColor", O("palette-info-main")), F(h.Alert, "successIconColor", O("palette-success-main")), F(h.Alert, "warningIconColor", O("palette-warning-main")), F(h.AppBar, "defaultBg", O("palette-grey-900")), F(h.AppBar, "darkBg", O("palette-background-paper")), F(h.AppBar, "darkColor", O("palette-text-primary")), F(h.Avatar, "defaultBg", O("palette-grey-600")), F(h.Button, "inheritContainedBg", O("palette-grey-800")), F(h.Button, "inheritContainedHoverBg", O("palette-grey-700")), F(h.Chip, "defaultBorder", O("palette-grey-700")), F(h.Chip, "defaultAvatarColor", O("palette-grey-300")), F(h.Chip, "defaultIconColor", O("palette-grey-300")), F(h.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(h.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(h.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(h.LinearProgress, "primaryBg", $(Re, s ? c("palette-primary-main") : h.primary.main, 0.5)), F(h.LinearProgress, "secondaryBg", $(Re, s ? c("palette-secondary-main") : h.secondary.main, 0.5)), F(h.LinearProgress, "errorBg", $(Re, s ? c("palette-error-main") : h.error.main, 0.5)), F(h.LinearProgress, "infoBg", $(Re, s ? c("palette-info-main") : h.info.main, 0.5)), F(h.LinearProgress, "successBg", $(Re, s ? c("palette-success-main") : h.success.main, 0.5)), F(h.LinearProgress, "warningBg", $(Re, s ? c("palette-warning-main") : h.warning.main, 0.5)), F(h.Skeleton, "bg", S ? $(Mr, s ? c("palette-text-primary") : h.text.primary, 0.13) : `rgba(${O("palette-text-primaryChannel")} / 0.13)`), F(h.Slider, "primaryTrack", $(Re, s ? c("palette-primary-main") : h.primary.main, 0.5)), F(h.Slider, "secondaryTrack", $(Re, s ? c("palette-secondary-main") : h.secondary.main, 0.5)), F(h.Slider, "errorTrack", $(Re, s ? c("palette-error-main") : h.error.main, 0.5)), F(h.Slider, "infoTrack", $(Re, s ? c("palette-info-main") : h.info.main, 0.5)), F(h.Slider, "successTrack", $(Re, s ? c("palette-success-main") : h.success.main, 0.5)), F(h.Slider, "warningTrack", $(Re, s ? c("palette-warning-light") : h.warning.main, 0.5));
      const M = S ? $(Pe, s ? c("palette-background-default") : h.background.default, 0.985) : Ys(h.background.default, 0.98);
      F(h.SnackbarContent, "bg", M), F(h.SnackbarContent, "color", $n(() => S ? d0.text.primary : h.getContrastText(M))), F(h.SpeedDialAction, "fabHoverBg", Ys(h.background.paper, 0.15)), F(h.StepConnector, "border", O("palette-grey-600")), F(h.StepContent, "border", O("palette-grey-600")), F(h.Switch, "defaultColor", O("palette-grey-300")), F(h.Switch, "defaultDisabledColor", O("palette-grey-600")), F(h.Switch, "primaryDisabledColor", $(Re, s ? c("palette-primary-main") : h.primary.main, 0.55)), F(h.Switch, "secondaryDisabledColor", $(Re, s ? c("palette-secondary-main") : h.secondary.main, 0.55)), F(h.Switch, "errorDisabledColor", $(Re, s ? c("palette-error-main") : h.error.main, 0.55)), F(h.Switch, "infoDisabledColor", $(Re, s ? c("palette-info-main") : h.info.main, 0.55)), F(h.Switch, "successDisabledColor", $(Re, s ? c("palette-success-main") : h.success.main, 0.55)), F(h.Switch, "warningDisabledColor", $(Re, s ? c("palette-warning-light") : h.warning.main, 0.55)), F(h.TableCell, "border", $(Re, Mr(s ? c("palette-divider") : h.divider, 1), 0.68)), F(h.Tooltip, "bg", $(Mr, s ? c("palette-grey-700") : h.grey[700], 0.92));
    }
    s || (Un(h.background, "default"), Un(h.background, "paper"), Un(h.common, "background"), Un(h.common, "onBackground"), Un(h, "divider")), Object.keys(h).forEach((M) => {
      const L = h[M];
      M !== "tonalOffset" && !s && L && typeof L == "object" && (L.main && F(h[M], "mainChannel", bi(Ci(L.main))), L.light && F(h[M], "lightChannel", bi(Ci(L.light))), L.dark && F(h[M], "darkChannel", bi(Ci(L.dark))), L.contrastText && F(h[M], "contrastTextChannel", bi(Ci(L.contrastText))), M === "text" && (Un(h[M], "primary"), Un(h[M], "secondary")), M === "action" && (L.active && Un(h[M], "active"), L.selected && Un(h[M], "selected")));
    });
  }), C = t.reduce((A, h) => ht(A, h), C);
  const E = h0(e.focusVisible, t);
  E != null && E !== !1 && (C.focusVisible = Hf(E, c("palette-primary-main")));
  const R = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: Mk(C),
    enableContrastVars: s
  }, {
    vars: N,
    generateThemeVars: _,
    generateStyleSheets: P
  } = DC(C, R);
  return C.vars = N, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([A, h]) => {
    C[A] = h;
  }), C.generateThemeVars = _, C.generateStyleSheets = P, C.generateSpacing = function() {
    return Xv(d.spacing, Ja(this));
  }, C.getColorSchemeSelector = UC(a), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = l, C.unstable_sxConfig = {
    ...iu,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, C.unstable_sx = function(h) {
    return Zr({
      sx: h,
      theme: this
    });
  }, C.internal_cache = {}, C.toRuntimeSource = y0, C;
}
function ih(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Wf({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function fu(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...s
  } = e, l = i || "light", a = o == null ? void 0 : o[l], u = {
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
      return pd(e, ...t);
    let d = n;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const f = pd({
      ...e,
      palette: d
    }, ...t);
    if (f.defaultColorScheme = l, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, ih(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, ih(f, "light", u.light)), f.focusVisible != null && f.focusVisible !== !1) {
      let m = f.focusVisible;
      const c = h0(e.focusVisible, t), y = c && typeof c == "object" ? c.outlineColor : void 0;
      if (!y || sk(c) && y === f.palette.primary.main) {
        const {
          outlineColor: w,
          ...b
        } = m;
        m = b;
      }
      Object.keys(f.colorSchemes).forEach((w) => {
        var g, p;
        const b = (p = (g = f.colorSchemes) == null ? void 0 : g[w]) == null ? void 0 : p.palette;
        b != null && b.primary && (f.colorSchemes[w].focusVisible = Hf(m, b.primary.main));
      });
    }
    return f;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), Lk({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function ta(e) {
  return typeof e == "string";
}
function S0(e, t = 166) {
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
function dt(...e) {
  const t = x.useRef(void 0), n = x.useCallback((r) => {
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
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return x.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function lt(e) {
  const t = x.useRef(e);
  return ct(() => {
    t.current = e;
  }), x.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function gt(e) {
  return e && e.ownerDocument || document;
}
function rr(e) {
  return gt(e).defaultView || window;
}
function Gs(e) {
  return parseInt(e, 10) || 0;
}
const _k = {
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
function zk(e) {
  for (const t in e)
    return !1;
  return !0;
}
function sh(e) {
  return zk(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Fk = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: u
  } = x.useRef(l != null), d = x.useRef(null), f = dt(n, d), m = x.useRef(null), c = x.useRef(null), y = x.useCallback(() => {
    const v = d.current, S = c.current;
    if (!v || !S)
      return;
    const C = rr(v).getComputedStyle(v);
    if (C.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    S.style.width = C.width, S.value = v.value || t.placeholder || "x", S.value.slice(-1) === `
` && (S.value += " ");
    const E = C.boxSizing, R = Gs(C.paddingBottom) + Gs(C.paddingTop), N = Gs(C.borderBottomWidth) + Gs(C.borderTopWidth), _ = S.scrollHeight;
    S.value = "x";
    const P = S.scrollHeight;
    let A = _;
    i && (A = Math.max(Number(i) * P, A)), o && (A = Math.min(Number(o) * P, A)), A = Math.max(A, P);
    const h = A + (E === "border-box" ? R + N : 0), O = Math.abs(A - _) <= 1;
    return {
      outerHeightStyle: h,
      overflowing: O
    };
  }, [o, i, t.placeholder]), w = lt(() => {
    const v = d.current, S = y();
    if (!v || !S || sh(S))
      return !1;
    const k = S.outerHeightStyle;
    return m.current != null && m.current !== k;
  }), b = x.useCallback(() => {
    const v = d.current, S = y();
    if (!v || !S || sh(S))
      return;
    const k = S.outerHeightStyle;
    m.current !== k && (m.current = k, v.style.height = `${k}px`), v.style.overflow = S.overflowing ? "hidden" : "";
  }, [y]), g = x.useRef(-1);
  ct(() => {
    const v = S0(b), S = d == null ? void 0 : d.current;
    if (!S)
      return;
    const k = rr(S);
    k.addEventListener("resize", v);
    let C;
    return typeof ResizeObserver < "u" && (C = new ResizeObserver(() => {
      w() && (C.unobserve(S), cancelAnimationFrame(g.current), b(), g.current = requestAnimationFrame(() => {
        C.observe(S);
      }));
    }), C.observe(S)), () => {
      v.clear(), cancelAnimationFrame(g.current), k.removeEventListener("resize", v), C && C.disconnect();
    };
  }, [y, b, w]), ct(() => {
    b();
  });
  const p = (v) => {
    u || b();
    const S = v.target, k = S.value.length, C = S.value.endsWith(`
`), E = S.selectionStart === k;
    C && E && S.setSelectionRange(k, k), r && r(v);
  };
  return /* @__PURE__ */ T.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ T.jsx("textarea", {
      value: l,
      onChange: p,
      ref: f,
      rows: i,
      style: s,
      ...a
    }), /* @__PURE__ */ T.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: c,
      tabIndex: -1,
      style: {
        ..._k.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), pu = /* @__PURE__ */ x.createContext(void 0);
function Bk() {
  return x.useContext(pu);
}
function ti({
  props: e,
  states: t
}) {
  const n = x.useContext(pu), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const Kf = fu();
function ws() {
  const e = lu(Kf);
  return e[zn] || e;
}
function jk(e) {
  return /* @__PURE__ */ T.jsx(qv, {
    ...e,
    defaultTheme: Kf,
    themeId: zn
  });
}
function w0(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const on = (e) => w0(e) && e !== "classes", K = n0({
  themeId: zn,
  defaultTheme: Kf,
  rootShouldForwardProp: on
});
function Dk(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ T.jsx(jk, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const he = PC;
function ye(e) {
  return kC(e);
}
function Qn(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function lh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function na(e, t = !1) {
  return e && (lh(e.value) && e.value !== "" || t && lh(e.defaultValue) && e.defaultValue !== "");
}
function Uk(e) {
  return e.startAdornment;
}
function Wk(e) {
  return fe("MuiInputBase", e);
}
const Gt = ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), Vk = {
  transition: "none"
};
function Hk(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Yf = (e) => e.scrollTop, b0 = {}, Kk = ["all"], Yk = {};
function cn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function C0(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function ra(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = b0
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Gf(e, t) {
  var r;
  const n = t ?? Vk;
  return Hk((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function Xe(e, t = Kk, n = Yk) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = Gf(e);
  if (r === void 0)
    return o ?? b0;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var ah;
const hd = "mui-auto-fill", oa = "mui-auto-fill-cancel", mu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${re(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, hu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, Gk = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: i,
    focused: s,
    formControl: l,
    fullWidth: a,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: m,
    startAdornment: c,
    type: y
  } = e, w = {
    root: ["root", `color${re(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", m && m !== "medium" && `size${re(m)}`, d && "multiline", c && "adornedStart", i && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", y === "search" && "inputTypeSearch", f && "readOnly"]
  };
  return pe(w, Wk, t);
}, gu = K("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: mu
})(he(({
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
  [`&.${Gt.disabled}`]: {
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
}))), yu = K("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: hu
})(he(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    ...Xe(e, "opacity", {
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
    [`label[data-shrink=false] + .${Gt.formControl} &`]: {
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
    [`&.${Gt.disabled}`]: {
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
        animationName: oa,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: hd
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
})), uh = Dk({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${hd}`]: {
    from: {
      animationName: hd
    }
  },
  [`@keyframes ${oa}`]: {
    from: {
      animationName: oa
    }
  }
}), Qf = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    "aria-label": i,
    autoComplete: s,
    autoFocus: l,
    className: a,
    color: u,
    defaultValue: d,
    disabled: f,
    disableInjectingGlobalStyles: m,
    endAdornment: c,
    error: y,
    fullWidth: w = !1,
    id: b,
    inputComponent: g = "input",
    inputProps: p = {},
    inputRef: v,
    margin: S,
    maxRows: k,
    minRows: C,
    multiline: E = !1,
    name: R,
    onBlur: N,
    onChange: _,
    onClick: P,
    onFocus: A,
    onKeyDown: h,
    onKeyUp: O,
    placeholder: $,
    readOnly: M,
    renderSuffix: L,
    rows: I,
    size: z,
    slotProps: j = {},
    slots: W = {},
    startAdornment: D,
    type: G = "text",
    value: Y,
    ...Q
  } = r, H = p.value != null ? p.value : Y, {
    current: te
  } = x.useRef(H != null), B = x.useRef(), ee = x.useCallback((J) => {
  }, []), Z = dt(B, v, p.ref, ee), [ve, me] = x.useState(!1), [le, se] = ti({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  le.focused = se ? se.focused : ve, x.useEffect(() => {
    !se && f && ve && (me(!1), N && N());
  }, [se, f, ve, N]);
  const Ee = se && se.onFilled, Ae = se && se.onEmpty, we = x.useCallback((J) => {
    na(J) ? Ee && Ee() : Ae && Ae();
  }, [Ee, Ae]);
  ct(() => {
    te && we({
      value: H
    });
  }, [H, we, te]), ct(() => {
    if (!l)
      return;
    const J = B.current;
    if (!J)
      return;
    const ne = gt(J), ze = Qn(ne), Ze = ze == null || ze === ne.body || ze === ne.documentElement;
    J === ze ? se && se.onFocus ? se.onFocus() : me(!0) : Ze && J.focus();
  }, [l]);
  const Ge = (J) => {
    A && A(J), p.onFocus && p.onFocus(J), se && se.onFocus ? se.onFocus(J) : me(!0);
  }, ae = (J) => {
    N && N(J), p.onBlur && p.onBlur(J), se && se.onBlur ? se.onBlur(J) : me(!1);
  }, je = (J, ...ne) => {
    if (!te) {
      const ze = J.target || B.current;
      if (ze == null)
        throw new Error(nr(1));
      we({
        value: ze.value
      });
    }
    p.onChange && p.onChange(J, ...ne), _ && _(J, ...ne);
  };
  x.useEffect(() => {
    we(B.current);
  }, []);
  const tt = (J) => {
    B.current && J.currentTarget === J.target && B.current.focus(), P && P(J);
  };
  let ft = g, qe = p;
  E && ft === "input" && (I ? qe = {
    type: void 0,
    minRows: I,
    maxRows: I,
    ...qe
  } : qe = {
    type: void 0,
    maxRows: k,
    minRows: C,
    ...qe
  }, ft = Fk);
  const bt = (J) => {
    we(J.animationName === oa ? B.current : {
      value: "x"
    });
  };
  x.useEffect(() => {
    se && se.setAdornedStart(!!D);
  }, [se, D]);
  const Mt = {
    ...r,
    color: le.color || "primary",
    disabled: le.disabled,
    endAdornment: c,
    error: le.error,
    focused: le.focused,
    formControl: se,
    fullWidth: w,
    hiddenLabel: le.hiddenLabel,
    multiline: E,
    size: le.size,
    startAdornment: D,
    type: G
  }, _e = Gk(Mt), ke = W.root || gu, ge = j.root || {}, Ct = W.input || yu;
  return qe = {
    ...qe,
    ...j.input
  }, /* @__PURE__ */ T.jsxs(x.Fragment, {
    children: [!m && typeof uh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (ah || (ah = /* @__PURE__ */ T.jsx(uh, {}))), /* @__PURE__ */ T.jsxs(ke, {
      ...ge,
      ref: n,
      onClick: tt,
      ...Q,
      ...!ta(ke) && {
        ownerState: {
          ...Mt,
          ...ge.ownerState
        }
      },
      className: oe(_e.root, ge.className, a, M && "MuiInputBase-readOnly"),
      children: [D, /* @__PURE__ */ T.jsx(pu.Provider, {
        value: null,
        children: /* @__PURE__ */ T.jsx(Ct, {
          "aria-invalid": le.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: d,
          disabled: le.disabled,
          id: b,
          onAnimationStart: bt,
          name: R,
          placeholder: $,
          readOnly: M,
          required: le.required,
          rows: I,
          value: H,
          onKeyDown: h,
          onKeyUp: O,
          type: G,
          ...qe,
          ...!ta(Ct) && {
            as: ft,
            ownerState: {
              ...Mt,
              ...qe.ownerState
            }
          },
          ref: Z,
          className: oe(_e.input, qe.className, M && "MuiInputBase-readOnly"),
          onBlur: ae,
          onChange: je,
          onFocus: Ge
        })
      }), c, L ? L({
        ...le,
        startAdornment: D
      }) : null]
    })]
  });
});
function Qk(e) {
  return fe("MuiFilledInput", e);
}
const Or = {
  ...Gt,
  ...ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function Xk(e) {
  return fe("MuiFormHelperText", e);
}
const ch = ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function qk(e) {
  return fe("MuiFormLabel", e);
}
const Ai = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function Zk(e) {
  return fe("MuiInput", e);
}
const hi = {
  ...Gt,
  ...ce("MuiInput", ["root", "underline", "input"])
};
function Jk(e) {
  return fe("MuiNativeSelect", e);
}
const Xf = ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function e2(e) {
  return fe("MuiOutlinedInput", e);
}
const In = {
  ...Gt,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function t2({
  theme: e,
  ...t
}) {
  const n = zn in e ? e[zn] : void 0;
  return /* @__PURE__ */ T.jsx(a0, {
    ...t,
    themeId: n ? zn : void 0,
    theme: n || e
  });
}
const Qs = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: n2
} = _C({
  themeId: zn,
  // @ts-ignore ignore module augmentation tests
  theme: () => fu({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Qs.colorSchemeStorageKey,
  modeStorageKey: Qs.modeStorageKey,
  defaultColorScheme: {
    light: Qs.defaultLightColorScheme,
    dark: Qs.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: g0(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Zr({
        sx: r,
        theme: this
      });
    }, t;
  }
}), r2 = n2;
function o2({
  theme: e,
  ...t
}) {
  const n = x.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = zn in e ? e[zn] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ T.jsx(t2, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ T.jsx(r2, {
    theme: e,
    ...t
  });
}
function dh(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function i2(e) {
  return fe("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const s2 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${re(t)}`, `fontSize${re(n)}`]
  };
  return pe(o, i2, r);
}, l2 = K("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${re(n.color)}`], t[`fontSize${re(n.fontSize)}`]];
  }
})(he(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, u, d, f, m;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...Xe(e, "fill", {
      duration: (n = (t = (e.vars ?? e).transitions) == null ? void 0 : t.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (c) => !c.hasSvgAsChild,
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
          fontSize: ((o = (r = e.typography) == null ? void 0 : r.pxToRem) == null ? void 0 : o.call(r, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : s.call(i, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((a = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : a.call(l, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, c]) => c && c.main).map(([c]) => {
        var y, w;
        return {
          props: {
            color: c
          },
          style: {
            color: (w = (y = (e.vars ?? e).palette) == null ? void 0 : y[c]) == null ? void 0 : w.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (d = (u = (e.vars ?? e).palette) == null ? void 0 : u.action) == null ? void 0 : d.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (m = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : m.disabled
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
  };
})), gd = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: a = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: m = "0 0 24 24",
    ...c
  } = r, y = /* @__PURE__ */ x.isValidElement(o) && o.type === "svg", w = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: m,
    hasSvgAsChild: y
  }, b = {};
  d || (b.viewBox = m);
  const g = s2(w);
  return /* @__PURE__ */ T.jsxs(l2, {
    as: l,
    className: oe(g.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n,
    ...b,
    ...c,
    ...y && o.props,
    ownerState: w,
    children: [y ? o.props.children : o, f ? /* @__PURE__ */ T.jsx("title", {
      children: f
    }) : null]
  });
});
gd.muiName = "SvgIcon";
function Dn(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ T.jsx(gd, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = gd.muiName, /* @__PURE__ */ x.memo(/* @__PURE__ */ x.forwardRef(n));
}
function yd(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function ia(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = x.useRef(t !== void 0), [s, l] = x.useState(n), a = i ? t : s, u = x.useCallback((d) => {
    i || l(d);
  }, []);
  return [a, u];
}
function k0(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function T0(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((u) => {
      k0(u, l[u]) && typeof s[u] == "function" && (a[u] = (...d) => {
        s[u](...d), l[u](...d);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, u = oe(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), d = n(a, l);
      return {
        ...l,
        ...a,
        ...d,
        ...!!u && {
          className: u
        },
        ...(l == null ? void 0 : l.style) && (a == null ? void 0 : a.style) && {
          style: {
            ...l.style,
            ...a.style
          }
        },
        ...(l == null ? void 0 : l.sx) && (a == null ? void 0 : a.sx) && {
          sx: [...Array.isArray(l.sx) ? l.sx : [l.sx], ...Array.isArray(a.sx) ? a.sx : [a.sx]]
        }
      };
    };
  const r = t, o = n(e, r), i = oe(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...o,
    ...!!i && {
      className: i
    },
    ...(r == null ? void 0 : r.style) && (e == null ? void 0 : e.style) && {
      style: {
        ...r.style,
        ...e.style
      }
    },
    ...(r == null ? void 0 : r.sx) && (e == null ? void 0 : e.sx) && {
      sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
const fh = {};
function qf(e, t) {
  const n = x.useRef(fh);
  return n.current === fh && (n.current = e(t)), n;
}
function a2(e) {
  const t = qf(() => u2(e)).current;
  return t.next = e, ct(t.effect), t;
}
function u2(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const ph = yg.createContext(null);
function c2(e) {
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
function d2(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = c2(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function E0(e) {
  const {
    in: t = !1,
    appear: n = !1,
    enter: r = !0,
    exit: o = !0,
    mountOnEnter: i = !1,
    unmountOnExit: s = !1,
    timeout: l,
    addEndListener: a,
    reduceMotion: u = !1,
    getAutoTimeout: d,
    nodeRef: f,
    onEnter: m,
    onEntering: c,
    onEntered: y,
    onExit: w,
    onExiting: b,
    onExited: g,
    children: p,
    ...v
  } = e, S = x.useContext(ph), k = S && !S.isMounting ? r : n, [C, E] = x.useState(() => t ? k ? "exited" : "entered" : i || s ? "unmounted" : "exited"), R = x.useRef(C);
  R.current = C, t && C === "unmounted" && (R.current = "exited", E("exited"));
  const N = x.useRef(t && k), _ = x.useRef(!1), P = x.useRef(null), A = x.useRef(C), h = x.useRef(!1), O = x.useRef(u), $ = a2({
    timeout: l,
    addEndListener: a,
    reduceMotion: u,
    getAutoTimeout: d,
    onEnter: m,
    onEntering: c,
    onEntered: y,
    onExit: w,
    onExiting: b,
    onExited: g,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: f,
    parentGroup: S
  }), M = x.useCallback(() => {
    P.current !== null && (P.current.cancel(), P.current = null);
  }, []), L = x.useCallback((D) => {
    let G = !0;
    const Y = () => {
      G && (G = !1, P.current = null, D());
    };
    return Y.cancel = () => {
      G = !1;
    }, P.current = Y, Y;
  }, []), I = x.useCallback((D, G) => {
    var Ae, we;
    let Y;
    const Q = () => {
      Y !== void 0 && (clearTimeout(Y), Y = void 0);
    }, H = L(() => {
      Q(), R.current = D, E(D);
    }), te = H.cancel;
    H.cancel = () => {
      Q(), te();
    };
    const B = $.current.nodeRef.current, ee = $.current.addEndListener, Z = $.current.getAutoTimeout !== void 0, ve = (we = (Ae = $.current).getAutoTimeout) == null ? void 0 : we.call(Ae), me = d2({
      currentStatus: G,
      isAppearing: h.current,
      timeout: $.current.timeout,
      autoTimeout: ve
    }), le = O.current, se = me ?? (le && Z ? 0 : null), Ee = (Ge) => {
      Y = setTimeout(H, Ge);
    };
    if (!B) {
      Ee(0);
      return;
    }
    if (ee) {
      se != null && Ee(le ? 0 : se), ee.length >= 2 ? ee(B, H) : ee(H);
      return;
    }
    Ee(le ? 0 : me ?? 0);
  }, [L, $]), z = x.useCallback((D) => {
    var Q;
    const G = $.current, Y = G.parentGroup ? G.parentGroup.isMounting : D;
    if (h.current = Y, !D && !G.enter) {
      R.current = "entered", E("entered");
      return;
    }
    O.current = G.reduceMotion, (Q = G.onEnter) == null || Q.call(G, Y), R.current = "entering", E("entering");
  }, [$]), j = x.useCallback(() => {
    var G;
    const D = $.current;
    if (!D.exit) {
      R.current = "exited", E("exited");
      return;
    }
    O.current = D.reduceMotion, (G = D.onExit) == null || G.call(D), R.current = "exiting", E("exiting");
  }, [$]), W = x.useCallback((D, G) => {
    if (M(), G === "entering") {
      const Y = $.current;
      if (Y.mountOnEnter || Y.unmountOnExit) {
        const Q = Y.nodeRef.current;
        Q && Yf(Q);
      }
      z(D);
    } else
      j();
  }, [M, z, j, $]);
  return ct(() => (_.current = !0, N.current && (N.current = !1, W(!0, "entering")), () => {
    _.current = !1, M();
  }), [M, W]), ct(() => {
    if (!_.current)
      return;
    const D = R.current;
    t ? D !== "entering" && D !== "entered" && W(!1, "entering") : D === "entering" || D === "entered" ? W(!1, "exiting") : D === "exited" && s && (R.current = "unmounted", E("unmounted"));
  }, [t, C, s, W]), ct(() => {
    var Q, H, te, B;
    if (C === "unmounted" || A.current === "unmounted") {
      A.current = C;
      return;
    }
    const G = A.current !== C;
    G && (A.current = C);
    const Y = $.current;
    C === "entering" ? (G && ((Q = Y.onEntering) == null || Q.call(Y, h.current)), P.current === null && R.current === C && I("entered", "entering")) : C === "exiting" ? (G && ((H = Y.onExiting) == null || H.call(Y)), P.current === null && R.current === C && I("exited", "exiting")) : C === "entered" && G ? (te = Y.onEntered) == null || te.call(Y, h.current) : C === "exited" && G && ((B = Y.onExited) == null || B.call(Y));
  }, [$, I, C]), C === "unmounted" ? null : /* @__PURE__ */ T.jsx(ph.Provider, {
    value: null,
    children: p(C, v)
  });
}
const R0 = "(prefers-reduced-motion: reduce)", f2 = 0, p2 = "0ms", m2 = () => {
}, mh = () => !1, h2 = () => !0, g2 = () => m2;
function y2(e) {
  const [t, n] = x.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), ct(() => {
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
    const i = window.matchMedia(R0), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const v2 = {
  ...El
}, P0 = v2.useSyncExternalStore;
function x2(e) {
  const t = e ? h2 : mh, [n, r] = x.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [mh, g2];
    const o = window.matchMedia(R0);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return P0(r, n, t);
}
const S2 = P0 !== void 0 ? x2 : y2;
function Zf(e, t) {
  const n = S2(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return x.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: f2,
        delay: p2
      } : o;
    }
  }), [r]);
}
function $0(e, t, n) {
  return e === void 0 || ta(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function I0(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function M0(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    k0(n, e[n]) && (t[n] = e[n]);
  return t;
}
function hh(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function O0(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const c = oe(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), y = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, w = {
      ...n,
      ...o,
      ...r
    };
    return c.length > 0 && (w.className = c), Object.keys(y).length > 0 && (w.style = y), {
      props: w,
      internalRef: void 0
    };
  }
  const s = M0({
    ...o,
    ...r
  }), l = hh(r), a = hh(o), u = t(s), d = oe(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), f = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, m = {
    ...u,
    ...n,
    ...a,
    ...l
  };
  return d.length > 0 && (m.className = d), Object.keys(f).length > 0 && (m.style = f), {
    props: m,
    internalRef: u.ref
  };
}
function xe(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: l = !1,
    ...a
  } = t, {
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    },
    ...m
  } = i, c = d[e] || r, y = I0(f[e], o), {
    props: {
      component: w,
      ...b
    },
    internalRef: g
  } = O0({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? m : void 0,
    externalSlotProps: y
  }), p = dt(g, y == null ? void 0 : y.ref, t.ref), v = e === "root" ? w || u : w, S = $0(c, {
    ...e === "root" && !u && !d[e] && s,
    ...e !== "root" && !d[e] && s,
    ...b,
    ...v && !l && {
      as: v
    },
    ...v && l && {
      component: v
    },
    ref: p
  }, o);
  return [c, S];
}
function w2(e) {
  return fe("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const b2 = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return pe(i, w2, o);
}, C2 = K("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(he(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  ...Xe(e, "box-shadow"),
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
}))), vu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var c;
  const r = ye({
    props: t,
    name: "MuiPaper"
  }), o = ws(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: u = "elevation",
    ...d
  } = r, f = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: u
  }, m = b2(f);
  return /* @__PURE__ */ T.jsx(C2, {
    as: s,
    ownerState: f,
    className: oe(m.root, i),
    ref: n,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (c = o.vars.overlays) == null ? void 0 : c[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${ea("#fff", md(l))}, ${ea("#fff", md(l))})`
        }
      },
      ...d.style
    }
  });
});
function sa(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function k2(e) {
  const {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: i
  } = e, s = r && t !== !1, l = r && t === !1;
  return x.useMemo(() => {
    const u = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(d) {
        n && t && d.key !== "Tab" && d.preventDefault();
      }
    };
    return r || (u.tabIndex = o, !i && n && (u.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (u["aria-disabled"] = n), i && (!t || l) && (u.disabled = n), u;
  }, [r, n, t, s, l, i, o]);
}
const T2 = {};
function E2(e) {
  const {
    nativeButton: t,
    disabled: n,
    type: r,
    hasFormAction: o = !1,
    tabIndex: i = 0,
    focusableWhenDisabled: s,
    stopEventPropagation: l = !1,
    onBeforeKeyDown: a,
    onBeforeKeyUp: u
  } = e, d = x.useRef(null), f = s === !0, m = k2({
    focusableWhenDisabled: f,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), c = x.useCallback(() => {
    const b = d.current;
    return b == null ? t : b.tagName === "BUTTON" ? !0 : !!(b.tagName === "A" && b.href);
  }, [t]), y = x.useMemo(() => {
    const b = f ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (b.type = r === void 0 && !o ? "button" : r, f || (b.disabled = n)) : (b.role = "button", !f && n && (b["aria-disabled"] = n)), f ? {
      ...b,
      ...m
    } : b;
  }, [n, f, m, o, t, i, r]);
  return {
    getButtonProps: x.useCallback((b = T2) => {
      const {
        onClick: g,
        onKeyDown: p,
        onKeyUp: v,
        ...S
      } = b;
      return {
        ...y,
        ...S,
        onClick: (R) => {
          if (l && R.stopPropagation(), n) {
            R.preventDefault();
            return;
          }
          g == null || g(R);
        },
        onKeyDown: (R) => {
          if (f && m.onKeyDown(R), !n && (a == null || a(R), p == null || p(R), !(R.target !== R.currentTarget || c()))) {
            if (R.key === " ") {
              R.preventDefault();
              return;
            }
            R.key === "Enter" && (R.preventDefault(), R.currentTarget.click());
          }
        },
        onKeyUp: (R) => {
          n || (u == null || u(R), v == null || v(R), R.target === R.currentTarget && !c() && R.key === " " && !R.defaultPrevented && R.currentTarget.click());
        }
      };
    }, [y, n, f, m, c, a, u, l]),
    rootRef: d
  };
}
class la {
  constructor() {
    oi(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new la();
  }
  static use() {
    const t = qf(la.create).current, [n, r] = x.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, x.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = P2(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function R2() {
  return la.use();
}
function P2() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const $2 = [];
function A0(e) {
  x.useEffect(e, $2);
}
class xu {
  constructor() {
    oi(this, "currentId", null);
    oi(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    oi(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new xu();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Xn() {
  const e = qf(xu.create).current;
  return A0(e.disposeEffect), e;
}
function I2(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: a,
    timeout: u
  } = e, [d, f] = x.useState(!1), m = Xn(), c = x.useRef(!1), y = x.useRef(a);
  y.current = a;
  const w = a != null, b = oe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, p = oe(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && f(!0), x.useEffect(() => {
    !l && w ? c.current || (c.current = !0, m.start(u, () => {
      var v;
      c.current = !1, (v = y.current) == null || v.call(y);
    })) : (c.current = !1, m.clear());
  }, [m, w, l, u]), /* @__PURE__ */ T.jsx("span", {
    className: b,
    style: g,
    children: /* @__PURE__ */ T.jsx("span", {
      className: p
    })
  });
}
const Nt = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), vd = 550, M2 = 80, Xs = {}, gh = [], O2 = () => {
};
function fc(e, t) {
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
function A2({
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
const N2 = xs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, L2 = xs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, _2 = xs`
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
function z2(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = ss`
    &.${Nt.rippleVisible} {
      animation-name: ${N2};
      animation-duration: ${vd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Nt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Nt.childLeaving} {
      animation-name: ${L2};
      animation-duration: ${vd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Nt.childPulsate} {
      animation-name: ${_2};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? ss`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const F2 = K("span", {
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
}), B2 = K(I2, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Nt.rippleVisible} {
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
  & .${Nt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Nt.childLeaving} {
    opacity: 0;
  }

  & .${Nt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => z2(e)}
`, j2 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTouchRipple"
  }), o = ws(), i = Zf(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Xs,
    className: a,
    ...u
  } = r, [d, f] = x.useState({
    items: gh,
    order: gh
  }), m = d.items, c = x.useRef(0), y = x.useRef(null), w = x.useRef(!1);
  A0(() => (w.current = !0, () => {
    w.current = !1;
  })), x.useEffect(() => {
    y.current && (y.current(), y.current = null);
  }, [m]);
  const b = x.useRef(!1), g = Xn(), p = x.useRef(null), v = x.useRef(null), S = lt((P) => {
    w.current && f((A) => {
      const h = A.items.filter(($) => $.key !== P), O = fc(A.order.filter(($) => $ !== P), h.filter(($) => !$.exiting).map(($) => $.key));
      return {
        items: h,
        order: O
      };
    });
  }), k = lt((P) => {
    const {
      pulsate: A,
      rippleX: h,
      rippleY: O,
      rippleSize: $,
      cb: M
    } = P, L = c.current;
    c.current += 1, f((I) => {
      const z = [...I.items, {
        key: L,
        pulsate: A,
        rippleX: h,
        rippleY: O,
        rippleSize: $,
        exiting: !1
      }];
      return {
        items: z,
        order: fc(I.order, z.filter((j) => !j.exiting).map((j) => j.key))
      };
    }), y.current = M;
  }), C = lt((P = Xs, A = Xs, h = O2) => {
    const {
      pulsate: O = !1,
      center: $ = s || A.pulsate,
      fakeElement: M = !1
      // Used only by tests.
    } = A;
    if ((P == null ? void 0 : P.type) === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    (P == null ? void 0 : P.type) === "touchstart" && (b.current = !0);
    const L = M ? null : v.current, {
      rippleX: I,
      rippleY: z,
      rippleSize: j
    } = A2({
      event: P,
      element: L,
      center: $
    });
    P != null && P.touches ? p.current === null && (p.current = () => {
      k({
        pulsate: O,
        rippleX: I,
        rippleY: z,
        rippleSize: j,
        cb: h
      });
    }, g.start(M2, () => {
      p.current && (p.current(), p.current = null);
    })) : k({
      pulsate: O,
      rippleX: I,
      rippleY: z,
      rippleSize: j,
      cb: h
    });
  }), E = lt(() => {
    C(Xs, {
      pulsate: !0
    });
  }), R = lt((P, A) => {
    if (g.clear(), (P == null ? void 0 : P.type) === "touchend" && p.current) {
      p.current(), p.current = null, g.start(0, () => {
        R(P, A);
      });
      return;
    }
    p.current = null, f((h) => {
      const O = h.items.findIndex((M) => !M.exiting);
      if (O === -1)
        return h;
      const $ = h.items.slice();
      return $[O] = {
        ...$[O],
        exiting: !0
      }, {
        items: $,
        order: fc(h.order, $.filter((M) => !M.exiting).map((M) => M.key))
      };
    }), y.current = A;
  });
  x.useImperativeHandle(n, () => ({
    pulsate: E,
    start: C,
    stop: R
  }), [E, C, R]);
  const N = new Map(m.map((P) => [P.key, P])), _ = d.order.map((P) => N.get(P)).filter(Boolean);
  return /* @__PURE__ */ T.jsx(F2, {
    className: oe(Nt.root, l.root, a),
    ref: v,
    ...u,
    children: _.map((P) => /* @__PURE__ */ T.jsx(B2, {
      classes: {
        ripple: oe(l.ripple, Nt.ripple),
        rippleVisible: oe(l.rippleVisible, Nt.rippleVisible),
        ripplePulsate: oe(l.ripplePulsate, Nt.ripplePulsate),
        child: oe(l.child, Nt.child),
        childLeaving: oe(l.childLeaving, Nt.childLeaving),
        childPulsate: oe(l.childPulsate, Nt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : vd,
      pulsate: P.pulsate,
      rippleX: P.rippleX,
      rippleY: P.rippleY,
      rippleSize: P.rippleSize,
      in: !P.exiting,
      onExited: () => S(P.key)
    }, P.key))
  });
});
function D2(e) {
  return fe("MuiButtonBase", e);
}
const xd = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), U2 = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = pe({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, D2, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, W2 = K("button", {
  name: "MuiButtonBase",
  slot: "Root"
})(he(({
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
  [`&.${xd.disabled}`]: {
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
      ...m0,
      [`&.${xd.focusVisible}`]: e.focusVisible
    }
  }]
}))), as = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: a = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: m = !1,
    focusVisibleClassName: c,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: y,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: w = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: b,
    // private prop to let a parent (like SwitchBase) control its own focus visible style
    internalDisabledThemeFocusVisible: g = !1,
    /* eslint-enable react/prop-types */
    LinkComponent: p = "a",
    nativeButton: v,
    onBlur: S,
    onClick: k,
    onContextMenu: C,
    onDragLeave: E,
    onFocus: R,
    onFocusVisible: N,
    onKeyDown: _,
    onKeyUp: P,
    onMouseDown: A,
    onMouseLeave: h,
    onMouseUp: O,
    onTouchEnd: $,
    onTouchMove: M,
    onTouchStart: L,
    tabIndex: I = 0,
    TouchRippleProps: z,
    touchRippleRef: j,
    type: W,
    ...D
  } = r, G = !!(D.href || D.to), Y = !!D.formAction;
  let Q = a;
  Q === "button" && G && (Q = p);
  const te = v ?? (typeof Q == "string" ? Q === "button" : b ?? !1), B = R2(), ee = dt(B.ref, j), [Z, ve] = x.useState(!1);
  (u || w) && Z && ve(!1);
  const me = lt((Ne) => {
    m && !Ne.repeat && Z && Ne.key === " " && B.stop(Ne, () => {
      B.start(Ne);
    });
  }), le = lt((Ne) => {
    m && Ne.key === " " && Z && !Ne.defaultPrevented && B.stop(Ne, () => {
      B.pulsate(Ne);
    });
  }), {
    getButtonProps: se,
    rootRef: Ee
  } = E2({
    nativeButton: te,
    disabled: u,
    type: W,
    hasFormAction: Y,
    tabIndex: I,
    onBeforeKeyDown: me,
    onBeforeKeyUp: le
  }), {
    onClick: Ae,
    onKeyDown: we,
    onKeyUp: Ge,
    ...ae
  } = se({
    onClick: k,
    onKeyDown: _,
    onKeyUp: P
  });
  x.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ve(!0), Ee.current.focus();
    }
  }), [Ee]);
  const je = B.shouldMount && !d && !u;
  x.useEffect(() => {
    Z && m && !d && B.pulsate();
  }, [d, m, Z, B]);
  const tt = Wn(B, "start", A, f), ft = Wn(B, "stop", C, f), qe = Wn(B, "stop", E, f), bt = Wn(B, "stop", O, f), Mt = Wn(B, "stop", (Ne) => {
    Z && Ne.preventDefault(), h && h(Ne);
  }, f), _e = Wn(B, "start", L, f), ke = Wn(B, "stop", $, f), ge = Wn(B, "stop", M, f), Ct = Wn(B, "stop", (Ne) => {
    sa(Ne.target) || ve(!1), S && S(Ne);
  }, !1), J = lt((Ne) => {
    Ee.current || (Ee.current = Ne.currentTarget), !w && sa(Ne.target) && (ve(!0), N && N(Ne)), R && R(Ne);
  }), ne = {};
  G && (ne.tabIndex = u ? -1 : I, u && (ne["aria-disabled"] = u), ne.type = W);
  const ze = dt(n, Ee), Ze = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: m,
    suppressFocusVisible: w,
    tabIndex: I,
    focusVisible: Z,
    internalDisabledThemeFocusVisible: g
  }, nt = U2(Ze);
  return /* @__PURE__ */ T.jsxs(W2, {
    as: Q,
    className: oe(nt.root, l),
    ownerState: Ze,
    onBlur: Ct,
    onClick: Ae,
    onContextMenu: ft,
    onFocus: J,
    onKeyDown: we,
    onKeyUp: Ge,
    onMouseDown: tt,
    onMouseLeave: Mt,
    onMouseUp: bt,
    onDragLeave: qe,
    onTouchEnd: ke,
    onTouchMove: ge,
    onTouchStart: _e,
    ref: ze,
    ...G ? ne : ae,
    ...D,
    children: [s, je ? /* @__PURE__ */ T.jsx(j2, {
      ref: ee,
      center: i,
      ...z
    }) : null]
  });
});
function Wn(e, t, n, r = !1) {
  return lt((o) => (n && n(o), r || e[t](o), !0));
}
function V2(e) {
  return typeof e.main == "string";
}
function H2(e, t = []) {
  if (!V2(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function $t(e = []) {
  return ([, t]) => t && H2(t, e);
}
function K2(e) {
  return fe("MuiAlert", e);
}
const yh = ce("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function Y2(e) {
  return fe("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const wn = 44, Sd = xs`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, wd = xs`
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
`, G2 = typeof Sd != "string" ? ss`
        animation: ${Sd} 1.4s linear infinite;
      ` : null, Q2 = typeof wd != "string" ? ss`
        animation: ${wd} 1.4s ease-in-out infinite;
      ` : null, X2 = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${re(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return pe(i, Y2, t);
}, q2 = K("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${re(n.color)}`]];
  }
})(he(({
  theme: e
}) => {
  const t = Gf(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...Xe(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: G2 || {
        animation: `${Sd} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter($t()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), Z2 = K("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), J2 = K("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(he(({
  theme: e
}) => {
  const t = Gf(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...Xe(e, "stroke-dashoffset")
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
      style: Q2 || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${wd} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), eT = K("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(he(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), N0 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    enableTrackSlot: l = !1,
    min: a,
    max: u,
    size: d = 40,
    style: f,
    thickness: m = 3.6,
    value: c = r.min ?? 0,
    variant: y = "indeterminate",
    ...w
  } = r, b = a ?? 0, g = u ?? 100, p = {
    ...r,
    color: i,
    disableShrink: s,
    size: d,
    thickness: m,
    value: c,
    variant: y,
    enableTrackSlot: l
  }, v = X2(p), S = {}, k = {}, C = {};
  if (y === "determinate") {
    const E = 2 * Math.PI * ((wn - m) / 2), R = g - b;
    S.strokeDasharray = E.toFixed(3), S.strokeDashoffset = R > 0 ? `${((g - c) / R * E).toFixed(3)}px` : `${E.toFixed(3)}px`, k.transform = "rotate(-90deg)", C["aria-valuenow"] = c, C["aria-valuemin"] = b, C["aria-valuemax"] = g;
  }
  return /* @__PURE__ */ T.jsx(q2, {
    className: oe(v.root, o),
    style: {
      width: d,
      height: d,
      ...k,
      ...f
    },
    ownerState: p,
    ref: n,
    role: "progressbar",
    ...C,
    ...w,
    children: /* @__PURE__ */ T.jsxs(Z2, {
      className: v.svg,
      ownerState: p,
      viewBox: `${wn / 2} ${wn / 2} ${wn} ${wn}`,
      children: [l ? /* @__PURE__ */ T.jsx(eT, {
        className: v.track,
        ownerState: p,
        cx: wn,
        cy: wn,
        r: (wn - m) / 2,
        fill: "none",
        strokeWidth: m,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ T.jsx(J2, {
        className: v.circle,
        style: S,
        ownerState: p,
        cx: wn,
        cy: wn,
        r: (wn - m) / 2,
        fill: "none",
        strokeWidth: m
      })]
    })
  });
});
function tT(e) {
  return fe("MuiIconButton", e);
}
const vh = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), nT = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${re(r)}`, o && `edge${re(o)}`, `size${re(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return pe(l, tT, t);
}, rT = K(as, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${re(n.color)}`], n.edge && t[`edge${re(n.edge)}`], t[`size${re(n.size)}`]];
  }
})(he(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  ...Xe(e, "background-color", {
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
})), he(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter($t()).map(([t]) => ({
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
  [`&.${vh.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${vh.loading}`]: {
    color: "transparent"
  }
}))), oT = K("span", {
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
})), L0 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: l = "default",
    disabled: a = !1,
    disableFocusRipple: u = !1,
    size: d = "medium",
    id: f,
    loading: m = null,
    loadingIndicator: c,
    ...y
  } = r, w = Jr(f), b = c ?? /* @__PURE__ */ T.jsx(N0, {
    "aria-labelledby": w,
    color: "inherit",
    size: 16
  }), g = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: u,
    loading: m,
    loadingIndicator: b,
    size: d
  }, p = nT(g);
  return /* @__PURE__ */ T.jsxs(rT, {
    id: m ? w : f,
    className: oe(p.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !u,
    disabled: a || m,
    ref: n,
    ...y,
    ownerState: g,
    children: [typeof m == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ T.jsx("span", {
      className: p.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ T.jsx(oT, {
        className: p.loadingIndicator,
        ownerState: g,
        children: m && b
      })
    }), i]
  });
}), iT = Dn(/* @__PURE__ */ T.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), sT = Dn(/* @__PURE__ */ T.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), lT = Dn(/* @__PURE__ */ T.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), aT = Dn(/* @__PURE__ */ T.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), uT = Dn(/* @__PURE__ */ T.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), cT = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${re(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return pe(i, K2, o);
}, dT = K(vu, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})(he(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, n = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter($t(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${yh.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter($t(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${yh.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter($t(["dark"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: {
        ...e.focusVisible && ik(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
        fontWeight: e.typography.fontWeightMedium,
        ...e.vars ? {
          color: e.vars.palette.Alert[`${r}FilledColor`],
          backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
        } : {
          backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
          color: e.palette.getContrastText(e.palette[r].main)
        }
      }
    }))]
  };
})), fT = K("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), pT = K("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), mT = K("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), xh = {
  success: /* @__PURE__ */ T.jsx(iT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ T.jsx(sT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ T.jsx(lT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ T.jsx(aT, {
    fontSize: "inherit"
  })
}, hT = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    icon: u,
    iconMapping: d = xh,
    onClose: f,
    role: m = "alert",
    severity: c = "success",
    slotProps: y = {},
    slots: w = {},
    variant: b = "standard",
    ...g
  } = r, p = {
    ...r,
    color: a,
    severity: c,
    variant: b,
    colorSeverity: a || c
  }, v = cT(p), S = {
    slots: w,
    slotProps: y
  }, [k, C] = xe("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: oe(v.root, s),
    elementType: dT,
    externalForwardedProps: {
      ...S,
      ...g
    },
    ownerState: p,
    additionalProps: {
      role: m,
      elevation: 0
    }
  }), [E, R] = xe("icon", {
    className: v.icon,
    elementType: fT,
    externalForwardedProps: S,
    ownerState: p
  }), [N, _] = xe("message", {
    className: v.message,
    elementType: pT,
    externalForwardedProps: S,
    ownerState: p
  }), [P, A] = xe("action", {
    className: v.action,
    elementType: mT,
    externalForwardedProps: S,
    ownerState: p
  }), [h, O] = xe("closeButton", {
    elementType: L0,
    externalForwardedProps: S,
    ownerState: p
  }), [$, M] = xe("closeIcon", {
    elementType: uT,
    externalForwardedProps: S,
    ownerState: p
  });
  return /* @__PURE__ */ T.jsxs(k, {
    ...C,
    children: [u !== !1 ? /* @__PURE__ */ T.jsx(E, {
      ...R,
      children: u || d[c] || xh[c]
    }) : null, /* @__PURE__ */ T.jsx(N, {
      ..._,
      children: i
    }), o != null ? /* @__PURE__ */ T.jsx(P, {
      ...A,
      children: o
    }) : null, o == null && f ? /* @__PURE__ */ T.jsx(P, {
      ...A,
      children: /* @__PURE__ */ T.jsx(h, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: f,
        ...O,
        children: /* @__PURE__ */ T.jsx($, {
          fontSize: "small",
          ...M
        })
      })
    }) : null]
  });
});
function gT(e) {
  return fe("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const yT = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${re(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return pe(s, gT, i);
}, vT = K("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${re(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(he(({
  theme: e
}) => {
  var t;
  return {
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
    }, ...Object.entries(e.typography).filter(([n, r]) => n !== "inherit" && r && typeof r == "object").map(([n, r]) => ({
      props: {
        variant: n
      },
      style: r
    })), ...Object.entries(e.palette).filter($t()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${re(n)}`
      },
      style: {
        color: (e.vars || e).palette.text[n]
      }
    })), {
      props: ({
        ownerState: n
      }) => n.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }]
  };
})), Sh = {
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
}, _o = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTypography"
  }), {
    color: o,
    align: i = "inherit",
    className: s,
    component: l,
    gutterBottom: a = !1,
    noWrap: u = !1,
    variant: d = "body1",
    variantMapping: f = Sh,
    ...m
  } = r, c = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: u,
    variant: d,
    variantMapping: f
  }, y = l || f[d] || Sh[d] || "span", w = yT(c);
  return /* @__PURE__ */ T.jsx(vT, {
    as: y,
    ref: n,
    className: oe(w.root, s),
    ...m,
    ownerState: c,
    style: {
      ...i !== "inherit" && {
        "--Typography-textAlign": i
      },
      ...m.style
    }
  });
});
function Cl(e, t) {
  var r;
  if (!e || !t)
    return !1;
  if (e.contains(t))
    return !0;
  const n = (r = t.getRootNode) == null ? void 0 : r.call(t);
  if (n && n instanceof ShadowRoot) {
    let o = t;
    for (; o; ) {
      if (e === o)
        return !0;
      o = o.parentNode ?? o.host ?? null;
    }
  }
  return !1;
}
var Vt = "top", gn = "bottom", yn = "right", Ht = "left", Jf = "auto", bs = [Vt, gn, yn, Ht], Yo = "start", us = "end", xT = "clippingParents", _0 = "viewport", gi = "popper", ST = "reference", wh = /* @__PURE__ */ bs.reduce(function(e, t) {
  return e.concat([t + "-" + Yo, t + "-" + us]);
}, []), z0 = /* @__PURE__ */ [].concat(bs, [Jf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Yo, t + "-" + us]);
}, []), wT = "beforeRead", bT = "read", CT = "afterRead", kT = "beforeMain", TT = "main", ET = "afterMain", RT = "beforeWrite", PT = "write", $T = "afterWrite", IT = [wT, bT, CT, kT, TT, ET, RT, PT, $T];
function jn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function en(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function eo(e) {
  var t = en(e).Element;
  return e instanceof t || e instanceof Element;
}
function pn(e) {
  var t = en(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ep(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = en(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function MT(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !pn(i) || !jn(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function OT(e) {
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
      var o = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(a, u) {
        return a[u] = "", a;
      }, {});
      !pn(o) || !jn(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const AT = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: MT,
  effect: OT,
  requires: ["computeStyles"]
};
function Bn(e) {
  return e.split("-")[0];
}
var Hr = Math.max, aa = Math.min, Go = Math.round;
function bd() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function F0() {
  return !/^((?!chrome|android).)*safari/i.test(bd());
}
function Qo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && pn(e) && (o = e.offsetWidth > 0 && Go(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Go(r.height) / e.offsetHeight || 1);
  var s = eo(e) ? en(e) : window, l = s.visualViewport, a = !F0() && n, u = (r.left + (a && l ? l.offsetLeft : 0)) / o, d = (r.top + (a && l ? l.offsetTop : 0)) / i, f = r.width / o, m = r.height / i;
  return {
    width: f,
    height: m,
    top: d,
    right: u + f,
    bottom: d + m,
    left: u,
    x: u,
    y: d
  };
}
function tp(e) {
  var t = Qo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function B0(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ep(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function or(e) {
  return en(e).getComputedStyle(e);
}
function NT(e) {
  return ["table", "td", "th"].indexOf(jn(e)) >= 0;
}
function $r(e) {
  return ((eo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Su(e) {
  return jn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ep(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $r(e)
  );
}
function bh(e) {
  return !pn(e) || // https://github.com/popperjs/popper-core/issues/837
  or(e).position === "fixed" ? null : e.offsetParent;
}
function LT(e) {
  var t = /firefox/i.test(bd()), n = /Trident/i.test(bd());
  if (n && pn(e)) {
    var r = or(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Su(e);
  for (ep(o) && (o = o.host); pn(o) && ["html", "body"].indexOf(jn(o)) < 0; ) {
    var i = or(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Cs(e) {
  for (var t = en(e), n = bh(e); n && NT(n) && or(n).position === "static"; )
    n = bh(n);
  return n && (jn(n) === "html" || jn(n) === "body" && or(n).position === "static") ? t : n || LT(e) || t;
}
function np(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ni(e, t, n) {
  return Hr(e, aa(t, n));
}
function _T(e, t, n) {
  var r = Ni(e, t, n);
  return r > n ? n : r;
}
function j0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function D0(e) {
  return Object.assign({}, j0(), e);
}
function U0(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var zT = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, D0(typeof t != "number" ? t : U0(t, bs));
};
function FT(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Bn(n.placement), a = np(l), u = [Ht, yn].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var f = zT(o.padding, n), m = tp(i), c = a === "y" ? Vt : Ht, y = a === "y" ? gn : yn, w = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], b = s[a] - n.rects.reference[a], g = Cs(i), p = g ? a === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = w / 2 - b / 2, S = f[c], k = p - m[d] - f[y], C = p / 2 - m[d] / 2 + v, E = Ni(S, C, k), R = a;
    n.modifiersData[r] = (t = {}, t[R] = E, t.centerOffset = E - C, t);
  }
}
function BT(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || B0(t.elements.popper, o) && (t.elements.arrow = o));
}
const jT = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: FT,
  effect: BT,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Xo(e) {
  return e.split("-")[1];
}
var DT = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function UT(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Go(n * o) / o || 0,
    y: Go(r * o) / o || 0
  };
}
function Ch(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, m = s.x, c = m === void 0 ? 0 : m, y = s.y, w = y === void 0 ? 0 : y, b = typeof d == "function" ? d({
    x: c,
    y: w
  }) : {
    x: c,
    y: w
  };
  c = b.x, w = b.y;
  var g = s.hasOwnProperty("x"), p = s.hasOwnProperty("y"), v = Ht, S = Vt, k = window;
  if (u) {
    var C = Cs(n), E = "clientHeight", R = "clientWidth";
    if (C === en(n) && (C = $r(n), or(C).position !== "static" && l === "absolute" && (E = "scrollHeight", R = "scrollWidth")), C = C, o === Vt || (o === Ht || o === yn) && i === us) {
      S = gn;
      var N = f && C === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[E]
      );
      w -= N - r.height, w *= a ? 1 : -1;
    }
    if (o === Ht || (o === Vt || o === gn) && i === us) {
      v = yn;
      var _ = f && C === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[R]
      );
      c -= _ - r.width, c *= a ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: l
  }, u && DT), A = d === !0 ? UT({
    x: c,
    y: w
  }, en(n)) : {
    x: c,
    y: w
  };
  if (c = A.x, w = A.y, a) {
    var h;
    return Object.assign({}, P, (h = {}, h[S] = p ? "0" : "", h[v] = g ? "0" : "", h.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + w + "px)" : "translate3d(" + c + "px, " + w + "px, 0)", h));
  }
  return Object.assign({}, P, (t = {}, t[S] = p ? w + "px" : "", t[v] = g ? c + "px" : "", t.transform = "", t));
}
function WT(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, u = {
    placement: Bn(t.placement),
    variation: Xo(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ch(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ch(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const VT = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: WT,
  data: {}
};
var qs = {
  passive: !0
};
function HT(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = en(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, qs);
  }), l && a.addEventListener("resize", n.update, qs), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, qs);
    }), l && a.removeEventListener("resize", n.update, qs);
  };
}
const KT = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: HT,
  data: {}
};
var YT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function kl(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return YT[t];
  });
}
var GT = {
  start: "end",
  end: "start"
};
function kh(e) {
  return e.replace(/start|end/g, function(t) {
    return GT[t];
  });
}
function rp(e) {
  var t = en(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function op(e) {
  return Qo($r(e)).left + rp(e).scrollLeft;
}
function QT(e, t) {
  var n = en(e), r = $r(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = F0();
    (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + op(e),
    y: a
  };
}
function XT(e) {
  var t, n = $r(e), r = rp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Hr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Hr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + op(e), a = -r.scrollTop;
  return or(o || n).direction === "rtl" && (l += Hr(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function ip(e) {
  var t = or(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function W0(e) {
  return ["html", "body", "#document"].indexOf(jn(e)) >= 0 ? e.ownerDocument.body : pn(e) && ip(e) ? e : W0(Su(e));
}
function Li(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = W0(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = en(r), s = o ? [i].concat(i.visualViewport || [], ip(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Li(Su(s)))
  );
}
function Cd(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function qT(e, t) {
  var n = Qo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Th(e, t, n) {
  return t === _0 ? Cd(QT(e, n)) : eo(t) ? qT(t, n) : Cd(XT($r(e)));
}
function ZT(e) {
  var t = Li(Su(e)), n = ["absolute", "fixed"].indexOf(or(e).position) >= 0, r = n && pn(e) ? Cs(e) : e;
  return eo(r) ? t.filter(function(o) {
    return eo(o) && B0(o, r) && jn(o) !== "body";
  }) : [];
}
function JT(e, t, n, r) {
  var o = t === "clippingParents" ? ZT(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, u) {
    var d = Th(e, u, r);
    return a.top = Hr(d.top, a.top), a.right = aa(d.right, a.right), a.bottom = aa(d.bottom, a.bottom), a.left = Hr(d.left, a.left), a;
  }, Th(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function V0(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Bn(r) : null, i = r ? Xo(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case Vt:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case gn:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case yn:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Ht:
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
  var u = o ? np(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Yo:
        a[u] = a[u] - (t[d] / 2 - n[d] / 2);
        break;
      case us:
        a[u] = a[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return a;
}
function cs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? xT : l, u = n.rootBoundary, d = u === void 0 ? _0 : u, f = n.elementContext, m = f === void 0 ? gi : f, c = n.altBoundary, y = c === void 0 ? !1 : c, w = n.padding, b = w === void 0 ? 0 : w, g = D0(typeof b != "number" ? b : U0(b, bs)), p = m === gi ? ST : gi, v = e.rects.popper, S = e.elements[y ? p : m], k = JT(eo(S) ? S : S.contextElement || $r(e.elements.popper), a, d, s), C = Qo(e.elements.reference), E = V0({
    reference: C,
    element: v,
    placement: o
  }), R = Cd(Object.assign({}, v, E)), N = m === gi ? R : C, _ = {
    top: k.top - N.top + g.top,
    bottom: N.bottom - k.bottom + g.bottom,
    left: k.left - N.left + g.left,
    right: N.right - k.right + g.right
  }, P = e.modifiersData.offset;
  if (m === gi && P) {
    var A = P[o];
    Object.keys(_).forEach(function(h) {
      var O = [yn, gn].indexOf(h) >= 0 ? 1 : -1, $ = [Vt, gn].indexOf(h) >= 0 ? "y" : "x";
      _[h] += A[$] * O;
    });
  }
  return _;
}
function eE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? z0 : a, d = Xo(r), f = d ? l ? wh : wh.filter(function(y) {
    return Xo(y) === d;
  }) : bs, m = f.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  m.length === 0 && (m = f);
  var c = m.reduce(function(y, w) {
    return y[w] = cs(e, {
      placement: w,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[Bn(w)], y;
  }, {});
  return Object.keys(c).sort(function(y, w) {
    return c[y] - c[w];
  });
}
function tE(e) {
  if (Bn(e) === Jf)
    return [];
  var t = kl(e);
  return [kh(e), t, kh(t)];
}
function nE(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, m = n.altBoundary, c = n.flipVariations, y = c === void 0 ? !0 : c, w = n.allowedAutoPlacements, b = t.options.placement, g = Bn(b), p = g === b, v = a || (p || !y ? [kl(b)] : tE(b)), S = [b].concat(v).reduce(function(Y, Q) {
      return Y.concat(Bn(Q) === Jf ? eE(t, {
        placement: Q,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: w
      }) : Q);
    }, []), k = t.rects.reference, C = t.rects.popper, E = /* @__PURE__ */ new Map(), R = !0, N = S[0], _ = 0; _ < S.length; _++) {
      var P = S[_], A = Bn(P), h = Xo(P) === Yo, O = [Vt, gn].indexOf(A) >= 0, $ = O ? "width" : "height", M = cs(t, {
        placement: P,
        boundary: d,
        rootBoundary: f,
        altBoundary: m,
        padding: u
      }), L = O ? h ? yn : Ht : h ? gn : Vt;
      k[$] > C[$] && (L = kl(L));
      var I = kl(L), z = [];
      if (i && z.push(M[A] <= 0), l && z.push(M[L] <= 0, M[I] <= 0), z.every(function(Y) {
        return Y;
      })) {
        N = P, R = !1;
        break;
      }
      E.set(P, z);
    }
    if (R)
      for (var j = y ? 3 : 1, W = function(Q) {
        var H = S.find(function(te) {
          var B = E.get(te);
          if (B)
            return B.slice(0, Q).every(function(ee) {
              return ee;
            });
        });
        if (H)
          return N = H, "break";
      }, D = j; D > 0; D--) {
        var G = W(D);
        if (G === "break") break;
      }
    t.placement !== N && (t.modifiersData[r]._skip = !0, t.placement = N, t.reset = !0);
  }
}
const rE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: nE,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Eh(e, t, n) {
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
function Rh(e) {
  return [Vt, yn, gn, Ht].some(function(t) {
    return e[t] >= 0;
  });
}
function oE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = cs(t, {
    elementContext: "reference"
  }), l = cs(t, {
    altBoundary: !0
  }), a = Eh(s, r), u = Eh(l, o, i), d = Rh(a), f = Rh(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": f
  });
}
const iE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: oE
};
function sE(e, t, n) {
  var r = Bn(e), o = [Ht, Vt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [Ht, yn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function lE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = z0.reduce(function(d, f) {
    return d[f] = sE(f, t.rects, i), d;
  }, {}), l = s[t.placement], a = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const aE = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: lE
};
function uE(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = V0({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const cE = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: uE,
  data: {}
};
function dE(e) {
  return e === "x" ? "y" : "x";
}
function fE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, m = n.tether, c = m === void 0 ? !0 : m, y = n.tetherOffset, w = y === void 0 ? 0 : y, b = cs(t, {
    boundary: a,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), g = Bn(t.placement), p = Xo(t.placement), v = !p, S = np(g), k = dE(S), C = t.modifiersData.popperOffsets, E = t.rects.reference, R = t.rects.popper, N = typeof w == "function" ? w(Object.assign({}, t.rects, {
    placement: t.placement
  })) : w, _ = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (C) {
    if (i) {
      var h, O = S === "y" ? Vt : Ht, $ = S === "y" ? gn : yn, M = S === "y" ? "height" : "width", L = C[S], I = L + b[O], z = L - b[$], j = c ? -R[M] / 2 : 0, W = p === Yo ? E[M] : R[M], D = p === Yo ? -R[M] : -E[M], G = t.elements.arrow, Y = c && G ? tp(G) : {
        width: 0,
        height: 0
      }, Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : j0(), H = Q[O], te = Q[$], B = Ni(0, E[M], Y[M]), ee = v ? E[M] / 2 - j - B - H - _.mainAxis : W - B - H - _.mainAxis, Z = v ? -E[M] / 2 + j + B + te + _.mainAxis : D + B + te + _.mainAxis, ve = t.elements.arrow && Cs(t.elements.arrow), me = ve ? S === "y" ? ve.clientTop || 0 : ve.clientLeft || 0 : 0, le = (h = P == null ? void 0 : P[S]) != null ? h : 0, se = L + ee - le - me, Ee = L + Z - le, Ae = Ni(c ? aa(I, se) : I, L, c ? Hr(z, Ee) : z);
      C[S] = Ae, A[S] = Ae - L;
    }
    if (l) {
      var we, Ge = S === "x" ? Vt : Ht, ae = S === "x" ? gn : yn, je = C[k], tt = k === "y" ? "height" : "width", ft = je + b[Ge], qe = je - b[ae], bt = [Vt, Ht].indexOf(g) !== -1, Mt = (we = P == null ? void 0 : P[k]) != null ? we : 0, _e = bt ? ft : je - E[tt] - R[tt] - Mt + _.altAxis, ke = bt ? je + E[tt] + R[tt] - Mt - _.altAxis : qe, ge = c && bt ? _T(_e, je, ke) : Ni(c ? _e : ft, je, c ? ke : qe);
      C[k] = ge, A[k] = ge - je;
    }
    t.modifiersData[r] = A;
  }
}
const pE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: fE,
  requiresIfExists: ["offset"]
};
function mE(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function hE(e) {
  return e === en(e) || !pn(e) ? rp(e) : mE(e);
}
function gE(e) {
  var t = e.getBoundingClientRect(), n = Go(t.width) / e.offsetWidth || 1, r = Go(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function yE(e, t, n) {
  n === void 0 && (n = !1);
  var r = pn(t), o = pn(t) && gE(t), i = $r(t), s = Qo(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((jn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ip(i)) && (l = hE(t)), pn(t) ? (a = Qo(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = op(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function vE(e) {
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
function xE(e) {
  var t = vE(e);
  return IT.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function SE(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function wE(e) {
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
var Ph = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function $h() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function bE(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? Ph : o;
  return function(l, a, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ph, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, f = [], m = !1, c = {
      state: d,
      setOptions: function(g) {
        var p = typeof g == "function" ? g(d.options) : g;
        w(), d.options = Object.assign({}, i, d.options, p), d.scrollParents = {
          reference: eo(l) ? Li(l) : l.contextElement ? Li(l.contextElement) : [],
          popper: Li(a)
        };
        var v = xE(wE([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = v.filter(function(S) {
          return S.enabled;
        }), y(), c.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var g = d.elements, p = g.reference, v = g.popper;
          if ($h(p, v)) {
            d.rects = {
              reference: yE(p, Cs(v), d.options.strategy === "fixed"),
              popper: tp(v)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(_) {
              return d.modifiersData[_.name] = Object.assign({}, _.data);
            });
            for (var S = 0; S < d.orderedModifiers.length; S++) {
              if (d.reset === !0) {
                d.reset = !1, S = -1;
                continue;
              }
              var k = d.orderedModifiers[S], C = k.fn, E = k.options, R = E === void 0 ? {} : E, N = k.name;
              typeof C == "function" && (d = C({
                state: d,
                options: R,
                name: N,
                instance: c
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: SE(function() {
        return new Promise(function(b) {
          c.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        w(), m = !0;
      }
    };
    if (!$h(l, a))
      return c;
    c.setOptions(u).then(function(b) {
      !m && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function y() {
      d.orderedModifiers.forEach(function(b) {
        var g = b.name, p = b.options, v = p === void 0 ? {} : p, S = b.effect;
        if (typeof S == "function") {
          var k = S({
            state: d,
            name: g,
            instance: c,
            options: v
          }), C = function() {
          };
          f.push(k || C);
        }
      });
    }
    function w() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return c;
  };
}
var CE = [KT, cE, VT, AT, aE, rE, pE, jT, iE], kE = /* @__PURE__ */ bE({
  defaultModifiers: CE
});
function H0(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : I0(n, r), {
    props: l,
    internalRef: a
  } = O0({
    ...i,
    externalSlotProps: s
  }), u = dt(a, s == null ? void 0 : s.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return $0(t, {
    ...l,
    ref: u
  }, r);
}
function ni(e) {
  var t;
  return parseInt(x.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function TE(e) {
  return typeof e == "function" ? e() : e;
}
const K0 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = x.useState(null), a = dt(/* @__PURE__ */ x.isValidElement(r) ? ni(r) : null, n);
  if (ct(() => {
    i || l(TE(o) || document.body);
  }, [o, i]), ct(() => {
    if (s && !i)
      return yd(n, s), () => {
        yd(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ x.isValidElement(r)) {
      const u = {
        ref: a
      };
      return /* @__PURE__ */ x.cloneElement(r, u);
    }
    return r;
  }
  return s && /* @__PURE__ */ Sv.createPortal(r, s);
});
function EE(e) {
  return fe("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function RE(e, t) {
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
function Y0(e) {
  return typeof e == "function" ? e() : e;
}
function PE(e) {
  return e.nodeType !== void 0;
}
const $E = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, EE, t);
}, IE = {}, ME = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: u,
    popperOptions: d,
    popperRef: f,
    slotProps: m = {},
    slots: c = {},
    TransitionProps: y,
    // @ts-ignore internal logic
    ownerState: w,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...b
  } = t, g = x.useRef(null), p = dt(g, n), v = x.useRef(null), S = dt(v, f), k = x.useRef(S);
  ct(() => {
    k.current = S;
  }, [S]), x.useImperativeHandle(f, () => v.current, []);
  const C = RE(u, i), [E, R] = x.useState(C), N = x.useMemo(() => Y0(r), [r]);
  x.useEffect(() => {
    v.current && v.current.forceUpdate();
  }), ct(() => {
    if (!N || !a)
      return;
    const O = (I) => {
      R(I.placement);
    };
    let $ = [{
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
        state: I
      }) => {
        O(I);
      }
    }];
    l != null && ($ = $.concat(l)), d && d.modifiers != null && ($ = $.concat(d.modifiers));
    const M = kE(N, g.current, {
      placement: C,
      ...d,
      modifiers: $
    });
    k.current(M);
    const L = g.current;
    return () => {
      if (L) {
        const {
          style: I
        } = L, z = I.position, j = I.top, W = I.left, D = I.transform;
        M.destroy(), I.position = z, I.top = j, I.left = W, I.transform = D;
      } else
        M.destroy();
      k.current(null);
    };
  }, [N, s, l, a, d, C]);
  const _ = {
    placement: E
  };
  y !== null && (_.TransitionProps = y);
  const P = $E(t), A = c.root ?? "div", h = H0({
    elementType: A,
    externalSlotProps: m.root,
    externalForwardedProps: b,
    additionalProps: {
      role: "tooltip",
      ref: p
    },
    ownerState: t,
    className: P.root
  });
  return /* @__PURE__ */ T.jsx(A, {
    ...h,
    children: typeof o == "function" ? o(_) : o
  });
}), OE = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: u,
    open: d,
    placement: f = "bottom",
    popperOptions: m = IE,
    popperRef: c,
    style: y,
    transition: w = !1,
    slotProps: b = {},
    slots: g = {},
    ...p
  } = t, [v, S] = x.useState(!0), k = () => {
    S(!1);
  }, C = () => {
    S(!0);
  };
  if (!a && !d && (!w || v))
    return null;
  let E;
  if (i)
    E = i;
  else if (r) {
    const _ = Y0(r);
    E = _ && PE(_) ? gt(_).body : gt(null).body;
  }
  const R = !d && a && (!w || v) ? "none" : void 0, N = w ? {
    in: d,
    onEnter: k,
    onExited: C
  } : void 0;
  return /* @__PURE__ */ T.jsx(K0, {
    disablePortal: l,
    container: E,
    children: /* @__PURE__ */ T.jsx(ME, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: w ? !v : d,
      placement: f,
      popperOptions: m,
      popperRef: c,
      slotProps: b,
      slots: g,
      ...p,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: R,
        ...y
      },
      TransitionProps: N,
      children: o
    })
  });
}), AE = K(OE, {
  name: "MuiPopper",
  slot: "Root"
})({}), G0 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = s0(), o = ye({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: d,
    open: f,
    placement: m,
    popperOptions: c,
    popperRef: y,
    transition: w,
    slots: b,
    slotProps: g,
    ...p
  } = o, v = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: d,
    open: f,
    placement: m,
    popperOptions: c,
    popperRef: y,
    transition: w,
    ...p
  };
  return /* @__PURE__ */ T.jsx(AE, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: b,
    slotProps: g,
    ...v,
    ref: n
  });
}), NE = Dn(/* @__PURE__ */ T.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function LE(e) {
  return fe("MuiChip", e);
}
const Te = ce("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), _E = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: i,
    clickable: s,
    variant: l
  } = e, a = {
    root: ["root", l, n && "disabled", `size${re(r)}`, `color${re(o)}`, s && "clickable", i && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return pe(a, LE, t);
}, zE = K("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => on(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
      [`& .${Te.avatar}`]: t.avatar
    }, {
      [`& .${Te.icon}`]: t.icon
    }, {
      [`& .${Te.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${re(s)}`], t[`color${re(r)}`], o && t.clickable, i && t.deletable, t[l]];
  }
})(he(({
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
    ...Xe(e, ["background-color", "box-shadow"]),
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
    [`&.${Te.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Te.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Te.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Te.deleteIcon}`]: {
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
        [`& .${Te.avatar}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark
        }
      }
    }, {
      props: {
        color: "secondary"
      },
      style: {
        [`& .${Te.avatar}`]: {
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
        [`& .${Te.avatar}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10)
        },
        [`& .${Te.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Te.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter($t(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${Te.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${Te.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${Te.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: !e.focusVisible && {
        [`&.${Te.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter($t(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: !e.focusVisible && {
        [`&.${Te.focusVisible}`]: {
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
          [`&.${Te.focusVisible}`]: {
            backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter($t(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        "&:hover": {
          backgroundColor: (e.vars || e).palette[n].dark
        },
        ...!e.focusVisible && {
          [`&.${Te.focusVisible}`]: {
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
        [`&.${Te.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        ...!e.focusVisible && {
          [`&.${Te.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus
          }
        },
        [`& .${Te.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Te.icon}`]: {
          marginLeft: 4
        },
        [`& .${Te.deleteIcon}`]: {
          marginRight: 5
        }
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        [`& .${Te.avatar}`]: {
          marginLeft: 2
        },
        [`& .${Te.icon}`]: {
          marginLeft: 2
        },
        [`& .${Te.deleteIcon}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter($t()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.alpha((e.vars || e).palette[n].main, 0.7)}`,
        [`&.${Te.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
        },
        ...!e.focusVisible && {
          [`&.${Te.focusVisible}`]: {
            backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
          }
        },
        [`& .${Te.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), FE = K("span", {
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
function Ih(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const BE = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: s,
    color: l = "default",
    component: a,
    deleteIcon: u,
    disabled: d = !1,
    icon: f,
    label: m,
    onClick: c,
    onDelete: y,
    onKeyDown: w,
    onKeyUp: b,
    size: g = "medium",
    variant: p = "filled",
    tabIndex: v,
    skipFocusWhenDisabled: S = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: k = {},
    slotProps: C = {},
    ...E
  } = r, {
    nativeButton: R,
    ...N
  } = E, _ = x.useRef(null), P = dt(_, n), A = (B) => {
    B.stopPropagation(), y(B);
  }, h = (B) => {
    B.currentTarget === B.target && Ih(B) && B.preventDefault(), w && w(B);
  }, O = (B) => {
    B.currentTarget === B.target && y && Ih(B) && y(B), b && b(B);
  }, $ = s !== !1 && c ? !0 : s, M = $ || y ? as : a || "div", L = {
    ...r,
    component: M,
    disabled: d,
    size: g,
    color: l,
    iconColor: /* @__PURE__ */ x.isValidElement(f) && f.props.color || l,
    onDelete: !!y,
    clickable: $,
    variant: p
  }, I = _E(L), z = M === as ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: I.focusVisible,
    ...y && {
      disableRipple: !0
    },
    ...R !== void 0 && {
      nativeButton: R
    }
  } : {};
  let j = null;
  y && (j = u && /* @__PURE__ */ x.isValidElement(u) ? /* @__PURE__ */ x.cloneElement(u, {
    className: oe(u.props.className, I.deleteIcon),
    onClick: A
  }) : /* @__PURE__ */ T.jsx(NE, {
    className: I.deleteIcon,
    onClick: A
  }));
  let W = null;
  o && /* @__PURE__ */ x.isValidElement(o) && (W = /* @__PURE__ */ x.cloneElement(o, {
    className: oe(I.avatar, o.props.className)
  }));
  let D = null;
  f && /* @__PURE__ */ x.isValidElement(f) && (D = /* @__PURE__ */ x.cloneElement(f, {
    className: oe(I.icon, f.props.className)
  }));
  const G = {
    slots: k,
    slotProps: C
  }, [Y, Q] = xe("root", {
    elementType: zE,
    externalForwardedProps: {
      ...G,
      ...N
    },
    ownerState: L,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: P,
    className: oe(I.root, i),
    additionalProps: {
      disabled: $ && d ? !0 : void 0,
      tabIndex: S && d ? -1 : v,
      ...z
    },
    getSlotProps: (B) => ({
      ...B,
      onClick: (ee) => {
        var Z;
        (Z = B.onClick) == null || Z.call(B, ee), c == null || c(ee);
      },
      onKeyDown: (ee) => {
        var Z;
        (Z = B.onKeyDown) == null || Z.call(B, ee), h(ee);
      },
      onKeyUp: (ee) => {
        var Z;
        (Z = B.onKeyUp) == null || Z.call(B, ee), O(ee);
      }
    })
  }), [H, te] = xe("label", {
    elementType: FE,
    externalForwardedProps: G,
    ownerState: L,
    className: I.label
  });
  return /* @__PURE__ */ T.jsxs(Y, {
    as: M,
    ...Q,
    children: [W || D, /* @__PURE__ */ T.jsx(H, {
      ...te,
      children: m
    }), j]
  });
}), jE = Dn(/* @__PURE__ */ T.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), DE = {
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
}, UE = {
  opacity: 0,
  visibility: "hidden"
}, WE = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ws(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: u,
    in: d,
    onEnter: f,
    onEntered: m,
    onEntering: c,
    onExit: y,
    onExited: w,
    onExiting: b,
    style: g,
    timeout: p = o,
    ...v
  } = t, S = Zf(r.motion.reducedMotion, a), k = x.useRef(null), C = dt(k, ni(l), n), E = cn(k, c), R = cn(k, (O, $) => {
    S.shouldReduceMotion || Yf(O);
    const M = ra({
      style: g,
      timeout: p,
      easing: u
    }, {
      mode: "enter"
    }), L = S.getTransitionTiming({
      duration: M.duration,
      delay: M.delay
    });
    O.style.transition = r.transitions.create("opacity", {
      duration: L.duration,
      easing: M.easing,
      delay: L.delay
    }), f && f(O, $);
  }), N = cn(k, m), _ = cn(k, b), P = cn(k, (O) => {
    const $ = ra({
      style: g,
      timeout: p,
      easing: u
    }, {
      mode: "exit"
    }), M = S.getTransitionTiming({
      duration: $.duration,
      delay: $.delay
    });
    O.style.transition = r.transitions.create("opacity", {
      duration: M.duration,
      easing: $.easing,
      delay: M.delay
    }), y && y(O);
  }), A = cn(k, (O) => {
    O.style.transition = "", w && w(O);
  }), h = i ? (O) => {
    i(k.current, O);
  } : void 0;
  return /* @__PURE__ */ T.jsx(E0, {
    appear: s,
    in: d,
    nodeRef: k,
    onEnter: R,
    onEntered: N,
    onEntering: E,
    onExit: P,
    onExited: A,
    onExiting: _,
    addEndListener: h,
    reduceMotion: S.shouldReduceMotion,
    timeout: p,
    ...v,
    children: (O, {
      ownerState: $,
      ...M
    }) => {
      const L = C0(O, d, DE, UE, g, l.props.style);
      return /* @__PURE__ */ x.cloneElement(l, {
        style: L,
        ref: C,
        ...M
      });
    }
  });
});
function VE(e) {
  return fe("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const HE = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return pe({
    root: ["root", n && "invisible"]
  }, VE, t);
}, KE = K("div", {
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
}), YE = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: l = !1,
    open: a,
    slotProps: u = {},
    slots: d = {},
    transitionDuration: f,
    ...m
  } = r, c = {
    ...r,
    component: s,
    invisible: l
  }, y = HE(c), w = {
    component: s,
    slots: d,
    slotProps: u
  }, [b, g] = xe("root", {
    elementType: KE,
    externalForwardedProps: w,
    className: oe(y.root, i),
    ownerState: c
  }), [p, v] = xe("transition", {
    elementType: WE,
    externalForwardedProps: w,
    ownerState: c
  });
  return /* @__PURE__ */ T.jsx(p, {
    in: a,
    timeout: f,
    ...m,
    ...v,
    children: /* @__PURE__ */ T.jsx(b, {
      ...g,
      ref: n,
      children: o
    })
  });
}), GE = ce("MuiBox", ["root"]), QE = fu(), to = tC({
  themeId: zn,
  defaultTheme: QE,
  defaultClassName: GE.root,
  generateClassName: Zv.generate
});
function XE(e) {
  return fe("MuiButton", e);
}
const Ar = ce("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), qE = /* @__PURE__ */ x.createContext({}), ZE = /* @__PURE__ */ x.createContext(void 0), JE = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    loading: s,
    loadingPosition: l,
    classes: a
  } = e, u = {
    root: ["root", s && "loading", i, `size${re(o)}`, `color${re(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${re(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = pe(u, XE, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, Q0 = [{
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
}], eR = K(as, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${re(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(he(({
  theme: e
}) => {
  var r, o;
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    ...Xe(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Ar.disabled}`]: {
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
        [`&.${Ar.focusVisible}`]: {
          ...e.focusVisible,
          boxShadow: (r = e.focusVisible) != null && r.boxShadow ? `${(e.vars || e).shadows[6]}, ${e.focusVisible.boxShadow}` : (e.vars || e).shadows[6]
        },
        [`&.${Ar.disabled}`]: {
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
        [`&.${Ar.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter($t()).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[i].main,
        "--variant-outlinedColor": (e.vars || e).palette[i].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[i].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[i].contrastText,
        "--variant-containedBg": (e.vars || e).palette[i].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[i].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[i].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[i].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[i].main, (e.vars || e).palette.action.hoverOpacity)
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
        [`&.${Ar.focusVisible}`]: {
          boxShadow: ((o = e.focusVisible) == null ? void 0 : o.boxShadow) ?? "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Ar.disabled}`]: {
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
        ...Xe(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Ar.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), tR = K("span", {
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
      ...Xe(e, ["opacity"], {
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
  }, ...Q0]
})), nR = K("span", {
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
      ...Xe(e, ["opacity"], {
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
  }, ...Q0]
})), rR = K("span", {
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
})), Mh = K("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Oh = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = x.useContext(qE), o = x.useContext(ZE), i = Ko(r, t), s = ye({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
    disableElevation: m = !1,
    disableFocusRipple: c = !1,
    endIcon: y,
    focusVisibleClassName: w,
    fullWidth: b = !1,
    id: g,
    loading: p = null,
    loadingIndicator: v,
    loadingPosition: S = "center",
    size: k = "medium",
    startIcon: C,
    type: E,
    variant: R = "text",
    ...N
  } = s, _ = Jr(g), P = v ?? /* @__PURE__ */ T.jsx(N0, {
    "aria-labelledby": _,
    color: "inherit",
    size: 16
  }), A = {
    ...s,
    color: a,
    component: u,
    disabled: f,
    disableElevation: m,
    disableFocusRipple: c,
    fullWidth: b,
    loading: p,
    loadingIndicator: P,
    loadingPosition: S,
    size: k,
    type: E,
    variant: R
  }, h = JE(A), O = (C || p && S === "start") && /* @__PURE__ */ T.jsx(tR, {
    className: h.startIcon,
    ownerState: A,
    children: C || /* @__PURE__ */ T.jsx(Mh, {
      className: h.loadingIconPlaceholder,
      ownerState: A
    })
  }), $ = (y || p && S === "end") && /* @__PURE__ */ T.jsx(nR, {
    className: h.endIcon,
    ownerState: A,
    children: y || /* @__PURE__ */ T.jsx(Mh, {
      className: h.loadingIconPlaceholder,
      ownerState: A
    })
  }), M = o || "", L = typeof p == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ T.jsx("span", {
      className: h.loadingWrapper,
      style: {
        display: "contents"
      },
      children: p && /* @__PURE__ */ T.jsx(rR, {
        className: h.loadingIndicator,
        ownerState: A,
        children: P
      })
    })
  ) : null, {
    root: I,
    ...z
  } = h;
  return /* @__PURE__ */ T.jsxs(eR, {
    ownerState: A,
    className: oe(r.className, h.root, d, M),
    component: u,
    disabled: f || p,
    focusRipple: !c,
    focusVisibleClassName: oe(h.focusVisible, w),
    ref: n,
    internalNativeButton: !0,
    type: E,
    id: p ? _ : g,
    ...N,
    classes: z,
    children: [O, S !== "end" && L, l, S === "end" && L, $]
  });
});
function oR(e) {
  return fe("PrivateSwitchBase", e);
}
ce("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const iR = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: o
  } = e, i = {
    root: ["root", n && "checked", r && "disabled", o && `edge${re(o)}`],
    input: ["input"]
  };
  return pe(i, oR, t);
}, sR = K(as, {
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
}), lR = K("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: on
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
}), aR = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: o,
    checkedIcon: i,
    defaultChecked: s,
    disabled: l,
    disableFocusRipple: a = !1,
    edge: u = !1,
    icon: d,
    id: f,
    name: m,
    onBlur: c,
    onChange: y,
    onFocus: w,
    readOnly: b,
    required: g = !1,
    tabIndex: p,
    type: v,
    value: S,
    slots: k = {},
    slotProps: C = {},
    ...E
  } = t, {
    nativeButton: R,
    ...N
  } = E, [_, P] = ia({
    controlled: o,
    default: !!s,
    name: "SwitchBase",
    state: "checked"
  }), A = Bk(), h = (Q) => {
    w && w(Q), A && A.onFocus && A.onFocus(Q);
  }, O = (Q) => {
    c && c(Q), A && A.onBlur && A.onBlur(Q);
  }, $ = (Q) => {
    if (Q.nativeEvent.defaultPrevented || b)
      return;
    const H = Q.target.checked;
    P(H), y && y(Q, H);
  };
  let M = l;
  A && typeof M > "u" && (M = A.disabled);
  const L = v === "checkbox" || v === "radio", I = {
    ...t,
    checked: _,
    disabled: M,
    disableFocusRipple: a,
    edge: u
  }, z = iR(I), j = {
    slots: k,
    slotProps: C
  }, [W, D] = xe("root", {
    ref: n,
    elementType: sR,
    className: z.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...j,
      component: "span",
      ...N
    },
    getSlotProps: (Q) => ({
      ...Q,
      onFocus: (H) => {
        var te;
        (te = Q.onFocus) == null || te.call(Q, H), h(H);
      },
      onBlur: (H) => {
        var te;
        (te = Q.onBlur) == null || te.call(Q, H), O(H);
      }
    }),
    ownerState: I,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !a,
      role: void 0,
      tabIndex: null,
      internalDisabledThemeFocusVisible: !0
    }
  }), [G, Y] = xe("input", {
    elementType: lR,
    className: z.input,
    externalForwardedProps: j,
    getSlotProps: (Q) => ({
      ...Q,
      onChange: (H) => {
        var te;
        (te = Q.onChange) == null || te.call(Q, H), $(H);
      }
    }),
    ownerState: I,
    additionalProps: {
      autoFocus: r,
      checked: o,
      defaultChecked: s,
      disabled: M,
      id: L ? f : void 0,
      name: m,
      readOnly: b,
      required: g,
      tabIndex: p,
      type: v,
      ...v === "checkbox" && S === void 0 ? {} : {
        value: S
      }
    }
  });
  return /* @__PURE__ */ T.jsxs(W, {
    ...D,
    children: [/* @__PURE__ */ T.jsx(G, {
      ...Y
    }), _ ? i : d]
  });
});
function X0(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function uR(e) {
  const t = gt(e);
  return e === t.body || e === t.documentElement ? rr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function _i(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ah(e) {
  return parseFloat(rr(e).getComputedStyle(e).paddingRight) || 0;
}
function cR(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Nh(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !cR(s);
    l && a && _i(s, o);
  });
}
function dR(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = gt(r).body;
    else {
      const s = r.parentElement, l = rr(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (uR(i)) {
      const s = X0(rr(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${Ah(i) + s}px`;
      const l = gt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${Ah(a) + s}px`;
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
function fR(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class pR {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && _i(t.modalRef, !1);
    const o = fR(n);
    Nh(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = dR(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && _i(t.modalRef, n), Nh(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && _i(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Lh = "data-mui-focusable";
function _h(e) {
  return e ? e.hasAttribute(Lh) ? e : e.querySelector(`[${Lh}]`) : null;
}
const mR = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function q0(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function hR(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function gR(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || hR(e));
}
function yR(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(mR)).forEach((r, o) => {
    const i = q0(r);
    i === -1 || !gR(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function vR() {
  return !0;
}
function xR(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = yR,
    isEnabled: s = vR,
    open: l
  } = e, a = x.useRef(!1), u = x.useRef(null), d = x.useRef(null), f = x.useRef(null), m = x.useRef(null), c = x.useRef(!1), y = x.useRef(null), w = dt(ni(t), y), b = x.useRef(null);
  x.useEffect(() => {
    !l || !y.current || (c.current = !n);
  }, [n, l]), x.useEffect(() => {
    if (a.current = !1, !l || !y.current)
      return;
    const v = gt(y.current), S = Qn(v), k = _h(y.current) ?? y.current;
    return Cl(y.current, S) || (k.hasAttribute("tabIndex") || k.setAttribute("tabIndex", "-1"), c.current && k.focus()), () => {
      !o && f.current && (a.current = !0, f.current.focus(), f.current = null);
    };
  }, [l]), x.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = gt(y.current), S = (E) => {
      if (b.current = E, r || !s() || E.key !== "Tab")
        return;
      const R = y.current, N = Qn(v);
      if (R === null)
        return;
      const _ = _h(R);
      if (N === R || N === _) {
        const A = i(R);
        if (A.length === 0)
          return;
        E.preventDefault(), E.shiftKey ? A[A.length - 1].focus() : A[0].focus();
        return;
      }
      if (Cl(R, N)) {
        const A = i(R), h = A.indexOf(N);
        if (h === -1 || !A.some((M) => q0(M) > 0))
          return;
        E.preventDefault();
        let $ = 0;
        E.shiftKey ? $ = h <= 0 ? A.length - 1 : h - 1 : $ = h === A.length - 1 ? 0 : h + 1, A[$].focus();
      }
    }, k = () => {
      var _, P;
      const E = y.current;
      if (E === null)
        return;
      const R = Qn(v);
      if (!v.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (Cl(E, R) || r && R !== u.current && R !== d.current)
        return;
      if (R !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!c.current)
        return;
      let N = [];
      if ((R === u.current || R === d.current) && (N = i(y.current)), N.length > 0) {
        const A = !!((_ = b.current) != null && _.shiftKey && ((P = b.current) == null ? void 0 : P.key) === "Tab"), h = N[0], O = N[N.length - 1];
        typeof h != "string" && typeof O != "string" && (A ? O.focus() : h.focus());
      } else
        E.focus();
    };
    v.addEventListener("focusin", k), v.addEventListener("keydown", S, !0);
    const C = setInterval(() => {
      const E = Qn(v);
      E && E.tagName === "BODY" && k();
    }, 50);
    return () => {
      clearInterval(C), v.removeEventListener("focusin", k), v.removeEventListener("keydown", S, !0);
    };
  }, [n, r, o, s, l, i]);
  const g = (v) => {
    f.current === null && (f.current = v.relatedTarget), c.current = !0, m.current = v.target;
    const S = t.props.onFocus;
    S && S(v);
  }, p = (v) => {
    f.current === null && (f.current = v.relatedTarget), c.current = !0;
  };
  return /* @__PURE__ */ T.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ T.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ x.cloneElement(t, {
      ref: w,
      onFocus: g
    }), /* @__PURE__ */ T.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
function SR(e) {
  return typeof e == "function" ? e() : e;
}
function wR(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const zh = () => {
}, Zs = new pR();
function bR(e) {
  const {
    container: t,
    disableScrollLock: n = !1,
    closeAfterTransition: r = !1,
    onTransitionEnter: o,
    onTransitionExited: i,
    children: s,
    onClose: l,
    open: a,
    rootRef: u
  } = e, d = x.useRef({}), f = x.useRef(null), m = x.useRef(null), c = x.useRef(null), y = dt(c, u), [w, b] = x.useState(!a), g = wR(s);
  let p = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (p = !1);
  const v = () => gt(f.current), S = () => (d.current.modalRef = c.current, d.current.mount = f.current, d.current), k = () => {
    Zs.mount(S(), {
      disableScrollLock: n
    }), c.current && (c.current.scrollTop = 0);
  }, C = lt(() => {
    const M = SR(t) || v().body;
    Zs.add(S(), M), c.current && k();
  }), E = () => Zs.isTopModal(S()), R = lt((M) => {
    f.current = M, M && (m.current = M, a && E() ? k() : c.current && _i(c.current, p));
  }), N = x.useCallback(() => {
    Zs.remove(S(), p);
  }, [p]);
  x.useEffect(() => () => {
    N();
  }, [N]), x.useEffect(() => {
    a ? C() : (!g || !r) && N();
  }, [a, N, g, r, C]);
  const _ = (M) => (L) => {
    var I;
    (I = M.onKeyDown) == null || I.call(M, L), !(L.key !== "Escape" || L.which === 229 || // Wait until IME is settled.
    !E()) && (L.stopPropagation(), l && l(L, "escapeKeyDown"));
  }, P = (M) => (L) => {
    var I;
    (I = M.onClick) == null || I.call(M, L), L.target === L.currentTarget && l && l(L, "backdropClick");
  }, A = (M = {}) => {
    const L = M0(e);
    delete L.onTransitionEnter, delete L.onTransitionExited;
    const I = {
      ...L,
      ...M
    };
    return {
      /*
       * Marking an element with the role presentation indicates to assistive technology
       * that this element should be ignored; it exists to support the web application and
       * is not meant for humans to interact with directly.
       * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
       */
      role: "presentation",
      ...I,
      onKeyDown: _(I),
      ref: y
    };
  }, h = (M = {}) => {
    const L = M;
    return {
      "aria-hidden": !0,
      ...L,
      onClick: P(L),
      open: a
    };
  }, O = () => {
    const M = () => {
      b(!1), o && o();
    }, L = () => {
      b(!0), i && i(), r && N();
    };
    return {
      onEnter: dh(M, (s == null ? void 0 : s.props.onEnter) ?? zh),
      onExited: dh(L, (s == null ? void 0 : s.props.onExited) ?? zh)
    };
  }, $ = !a && g && !w ? m.current ?? t : t;
  return {
    getRootProps: A,
    getBackdropProps: h,
    getTransitionProps: O,
    rootRef: y,
    portalRef: R,
    portalContainer: $,
    isTopModal: E,
    exited: w,
    hasTransition: g
  };
}
function CR(e) {
  return fe("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const kR = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return pe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, CR, r);
}, TR = K("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(he(({
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
}))), ER = K(YE, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), RR = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    name: "MuiModal",
    props: t
  }), {
    classes: o,
    className: i,
    closeAfterTransition: s = !1,
    children: l,
    container: a,
    component: u,
    disableAutoFocus: d = !1,
    disableEnforceFocus: f = !1,
    disablePortal: m = !1,
    disableRestoreFocus: c = !1,
    disableScrollLock: y = !1,
    hideBackdrop: w = !1,
    keepMounted: b = !1,
    onClose: g,
    onTransitionEnter: p,
    onTransitionExited: v,
    open: S,
    slotProps: k = {},
    slots: C = {},
    // eslint-disable-next-line react/prop-types
    theme: E,
    ...R
  } = r, N = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: d,
    disableEnforceFocus: f,
    disablePortal: m,
    disableRestoreFocus: c,
    disableScrollLock: y,
    hideBackdrop: w,
    keepMounted: b
  }, {
    getRootProps: _,
    getBackdropProps: P,
    getTransitionProps: A,
    portalRef: h,
    portalContainer: O,
    isTopModal: $,
    exited: M,
    hasTransition: L
  } = bR({
    ...N,
    rootRef: n
  }), I = {
    ...N,
    exited: M
  }, z = kR(I), j = {};
  if (l.props.tabIndex === void 0 && (j.tabIndex = "-1"), L) {
    const {
      onEnter: H,
      onExited: te
    } = A();
    j.onEnter = H, j.onExited = te;
  }
  const W = {
    slots: C,
    slotProps: k
  }, [D, G] = xe("root", {
    ref: n,
    elementType: TR,
    externalForwardedProps: {
      ...W,
      ...R,
      component: u
    },
    getSlotProps: _,
    ownerState: I,
    className: oe(i, z == null ? void 0 : z.root, !I.open && I.exited && (z == null ? void 0 : z.hidden))
  }), [Y, Q] = xe("backdrop", {
    elementType: ER,
    externalForwardedProps: W,
    shouldForwardComponentProp: !0,
    getSlotProps: (H) => P({
      ...H,
      onClick: (te) => {
        H != null && H.onClick && H.onClick(te);
      }
    }),
    className: z == null ? void 0 : z.backdrop,
    ownerState: I
  });
  return !b && !S && (!L || M) ? null : /* @__PURE__ */ T.jsx(K0, {
    ref: h,
    container: O,
    disablePortal: m,
    children: /* @__PURE__ */ T.jsxs(D, {
      ...G,
      children: [w ? null : /* @__PURE__ */ T.jsx(Y, {
        ...Q
      }), /* @__PURE__ */ T.jsx(xR, {
        disableEnforceFocus: f,
        disableAutoFocus: d,
        disableRestoreFocus: c,
        isEnabled: $,
        open: S,
        children: /* @__PURE__ */ x.cloneElement(l, j)
      })]
    })
  });
});
function Z0(e) {
  return fe("MuiSelect", e);
}
const zr = ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), PR = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: l
  } = e, a = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${re(i)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = pe(a, Qk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, $R = K(gu, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...mu(e, t), !n.disableUnderline && t.underline];
  }
})(he(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    ...Xe(e, "background-color", {
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
    [`&.${Or.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Or.disabled}`]: {
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
          ...Xe(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Or.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Or.error}`]: {
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
          ...Xe(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Or.disabled}, .${Or.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Or.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter($t()).map(([s]) => {
      var l;
      return {
        props: {
          disableUnderline: !1,
          color: s
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(l = (e.vars || e).palette[s]) == null ? void 0 : l.main}`
          }
        }
      };
    }), {
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
        [`&.${zr.root}`]: {
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
})), IR = K(yu, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: hu
})(he(({
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
}))), sp = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: o = !1,
    fullWidth: i = !1,
    hiddenLabel: s,
    // declare here to prevent spreading to DOM
    inputComponent: l = "input",
    multiline: a = !1,
    notched: u,
    // declare here to prevent spreading to DOM
    slotProps: d,
    slots: f = {},
    type: m = "text",
    ...c
  } = r, y = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: m
  }, w = PR(r), b = {
    root: {
      ownerState: y
    },
    input: {
      ownerState: y
    }
  }, g = d ? ht(b, d) : b, p = f.root ?? $R, v = f.input ?? IR;
  return /* @__PURE__ */ T.jsx(Qf, {
    slots: {
      root: p,
      input: v
    },
    slotProps: g,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    ref: n,
    type: m,
    ...c,
    classes: w
  });
});
sp.muiName = "Input";
function MR(e) {
  return fe("MuiFormControl", e);
}
ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const OR = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${re(n)}`, r && "fullWidth"]
  };
  return pe(o, MR, t);
}, AR = K("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${re(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), NR = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: l = "div",
    disabled: a = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: m = !1,
    margin: c = "none",
    required: y = !1,
    size: w = "medium",
    variant: b = "outlined",
    ...g
  } = r, p = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    error: u,
    fullWidth: f,
    hiddenLabel: m,
    margin: c,
    required: y,
    size: w,
    variant: b
  }, v = OR(p), [S, k] = x.useState(() => {
    let $ = !1;
    return o && x.Children.forEach(o, (M) => {
      if (!cc(M, ["Input", "Select"]))
        return;
      const L = cc(M, ["Select"]) ? M.props.input : M;
      L && Uk(L.props) && ($ = !0);
    }), $;
  }), [C, E] = x.useState(() => {
    let $ = !1;
    return o && x.Children.forEach(o, (M) => {
      cc(M, ["Input", "Select"]) && (na(M.props, !0) || na(M.props.inputProps, !0)) && ($ = !0);
    }), $;
  }), [R, N] = x.useState(!1);
  a && R && N(!1);
  const _ = d !== void 0 && !a ? d : R;
  let P;
  x.useRef(!1);
  const A = x.useCallback(() => {
    E(!0);
  }, []), h = x.useCallback(() => {
    E(!1);
  }, []), O = x.useMemo(() => ({
    adornedStart: S,
    setAdornedStart: k,
    color: s,
    disabled: a,
    error: u,
    filled: C,
    focused: _,
    fullWidth: f,
    hiddenLabel: m,
    size: w,
    onBlur: () => {
      N(!1);
    },
    onFocus: () => {
      N(!0);
    },
    onEmpty: h,
    onFilled: A,
    registerEffect: P,
    required: y,
    variant: b
  }), [S, s, a, u, C, _, f, m, P, h, A, y, w, b]);
  return /* @__PURE__ */ T.jsx(pu.Provider, {
    value: O,
    children: /* @__PURE__ */ T.jsx(AR, {
      as: l,
      ownerState: p,
      className: oe(v.root, i),
      ref: n,
      ...g,
      children: o
    })
  });
});
var Fh;
const LR = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: i,
    filled: s,
    focused: l,
    required: a
  } = e, u = {
    root: ["root", o && "disabled", i && "error", r && `size${re(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return pe(u, Xk, t);
}, _R = K("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${re(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(he(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${ch.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${ch.error}`]: {
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
}))), zR = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: s = "p",
    disabled: l,
    error: a,
    filled: u,
    focused: d,
    margin: f,
    required: m,
    variant: c,
    ...y
  } = r, [w] = ti({
    props: r,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), b = {
    ...r,
    component: s,
    contained: w.variant === "filled" || w.variant === "outlined",
    variant: w.variant,
    size: w.size,
    disabled: w.disabled,
    error: w.error,
    filled: w.filled,
    focused: w.focused,
    required: w.required
  };
  delete b.ownerState;
  const g = LR(b);
  return /* @__PURE__ */ T.jsx(_R, {
    as: s,
    className: oe(g.root, i),
    ref: n,
    ...y,
    ownerState: b,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Fh || (Fh = /* @__PURE__ */ T.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), FR = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${re(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return pe(a, qk, t);
}, BR = K("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(he(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter($t()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ai.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Ai.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Ai.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), jR = K("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(he(({
  theme: e
}) => ({
  [`&.${Ai.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), DR = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    color: s,
    component: l = "label",
    disabled: a,
    error: u,
    filled: d,
    focused: f,
    required: m,
    ...c
  } = r, [y] = ti({
    props: r,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), w = {
    ...r,
    color: y.color || "primary",
    component: l,
    disabled: y.disabled,
    error: y.error,
    filled: y.filled,
    focused: y.focused,
    required: y.required
  }, b = FR(w);
  return /* @__PURE__ */ T.jsxs(BR, {
    as: l,
    ownerState: w,
    className: oe(b.root, i),
    ref: n,
    ...c,
    children: [o, y.required && /* @__PURE__ */ T.jsxs(jR, {
      ownerState: w,
      "aria-hidden": !0,
      className: b.asterisk,
      children: [" ", "*"]
    })]
  });
});
function zi(e) {
  return `scale(${e}, ${e ** 2})`;
}
const UR = {
  entering: {
    opacity: 1,
    transform: zi(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: zi(0.75)
  },
  exited: {
    opacity: 0,
    transform: zi(0.75)
  }
}, WR = {
  opacity: 0,
  transform: zi(0.75),
  visibility: "hidden"
}, ua = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: u,
    onEntered: d,
    onEntering: f,
    onExit: m,
    onExited: c,
    onExiting: y,
    style: w,
    timeout: b = "auto",
    ...g
  } = t, p = x.useRef(null), v = ws(), S = Zf(v.motion.reducedMotion, s), k = x.useRef(null), C = dt(k, ni(i), n), E = cn(k, f), R = cn(k, (O, $) => {
    S.shouldReduceMotion || Yf(O);
    const {
      duration: M,
      delay: L,
      easing: I
    } = ra({
      style: w,
      timeout: b,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    b === "auto" && !S.shouldReduceMotion ? (z = v.transitions.getAutoHeightDuration(O.clientHeight), p.current = z) : (z = M, p.current = null);
    const j = S.getTransitionTiming({
      duration: z,
      delay: L
    });
    O.style.transition = [v.transitions.create("opacity", {
      duration: j.duration,
      delay: j.delay
    }), v.transitions.create("transform", {
      duration: typeof j.duration == "string" ? j.duration : j.duration * 0.666,
      delay: j.delay,
      easing: I
    })].join(","), u && u(O, $);
  }), N = cn(k, d), _ = cn(k, y), P = cn(k, (O) => {
    const {
      duration: $,
      delay: M,
      easing: L
    } = ra({
      style: w,
      timeout: b,
      easing: l
    }, {
      mode: "exit"
    });
    let I;
    b === "auto" && !S.shouldReduceMotion ? (I = v.transitions.getAutoHeightDuration(O.clientHeight), p.current = I) : (I = $, p.current = null);
    const z = S.getTransitionTiming({
      duration: I,
      delay: M
    });
    O.style.transition = [v.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), v.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: L
    })].join(","), O.style.opacity = 0, O.style.transform = zi(0.75), m && m(O);
  }), A = cn(k, (O) => {
    O.style.transition = "", c && c(O);
  }), h = r ? (O) => {
    r(k.current, O);
  } : void 0;
  return /* @__PURE__ */ T.jsx(E0, {
    appear: o,
    in: a,
    nodeRef: k,
    onEnter: R,
    onEntered: N,
    onEntering: E,
    onExit: P,
    onExited: A,
    onExiting: _,
    addEndListener: h,
    getAutoTimeout: b === "auto" ? () => p.current : void 0,
    reduceMotion: S.shouldReduceMotion,
    timeout: b === "auto" ? null : b,
    ...g,
    children: (O, {
      ownerState: $,
      ...M
    }) => {
      const L = C0(O, a, UR, WR, w, i.props.style);
      return /* @__PURE__ */ x.cloneElement(i, {
        style: L,
        ref: C,
        ...M
      });
    }
  });
});
ua && (ua.muiSupportAuto = !0);
function VR(e) {
  return fe("MuiInputLabel", e);
}
const HR = ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), KR = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = pe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Zk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, YR = K(gu, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...mu(e, t), !n.disableUnderline && t.underline];
  }
})(he(({
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
        [`label + &, .${HR.root} + &`]: {
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
          ...Xe(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${hi.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${hi.error}`]: {
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
          ...Xe(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${hi.disabled}, .${hi.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${hi.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter($t()).map(([r]) => ({
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
})), GR = K(yu, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: hu
})({}), lp = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: o = !1,
    fullWidth: i = !1,
    inputComponent: s = "input",
    multiline: l = !1,
    notched: a,
    // declare here to prevent spreading to DOM
    slotProps: u,
    slots: d = {},
    type: f = "text",
    ...m
  } = r, c = KR(r), w = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, b = u ? ht(u, w) : w, g = d.root ?? YR, p = d.input ?? GR;
  return /* @__PURE__ */ T.jsx(Qf, {
    slots: {
      root: g,
      input: p
    },
    slotProps: b,
    fullWidth: i,
    inputComponent: s,
    multiline: l,
    ref: n,
    type: f,
    ...m,
    classes: c
  });
});
lp.muiName = "Input";
const Js = ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), QR = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${re(r)}`, s],
    asterisk: [l && "asterisk"]
  }, u = pe(a, VR, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, XR = K(DR, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Ai.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(he(({
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
      ...Xe(e, ["color", "transform", "max-width"], {
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
}))), qR = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: l,
    className: a,
    ...u
  } = r, [d, f] = ti({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let m = s;
  typeof m > "u" && f && (m = f.filled || f.focused || f.adornedStart);
  const c = {
    ...r,
    disableAnimation: o,
    formControl: f,
    shrink: m,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }, y = QR(c);
  return /* @__PURE__ */ T.jsx(XR, {
    "data-shrink": m,
    ref: n,
    className: oe(y.root, a),
    ...u,
    ownerState: c,
    classes: y
  });
}), ZR = /* @__PURE__ */ x.createContext({});
function JR(e) {
  return fe("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const eP = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return pe({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, JR, t);
}, tP = K("ul", {
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
}), nP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: l = !1,
    disablePadding: a = !1,
    subheader: u,
    ...d
  } = r, f = x.useMemo(() => ({
    dense: l
  }), [l]), m = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, c = eP(m);
  return /* @__PURE__ */ T.jsx(ZR.Provider, {
    value: f,
    children: /* @__PURE__ */ T.jsxs(tP, {
      as: s,
      className: oe(c.root, i),
      ref: n,
      ownerState: m,
      ...d,
      children: [u, o]
    })
  });
}), rP = /* @__PURE__ */ x.createContext(void 0), oP = Object.is;
function iP(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !oP(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const sP = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function lP(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = Fi,
    wrap: s = !0
  } = e, [l, a] = x.useState(t), [u, d] = x.useState(t);
  let f = l;
  t !== u && (d(t), t !== void 0 && t !== l && (f = t, a(t)));
  const m = x.useRef(null), c = x.useRef(/* @__PURE__ */ new Map()), [y, w] = x.useState(0), b = x.useMemo(() => kd(c.current), [y]), g = Bh(f, b, i, n), p = x.useRef(g);
  p.current = g;
  const v = x.useCallback(() => {
    const A = kd(c.current), h = Bh(p.current, A, i, n);
    return t1(A, h);
  }, [n, i]), S = x.useCallback(() => c.current, []), k = lt((A) => {
    const h = c.current.get(A.id);
    iP(h ?? null, A) || (c.current.set(A.id, A), w((O) => O + 1));
  }), C = lt((A) => {
    c.current.delete(A) && w((h) => h + 1);
  }), E = lt((A) => {
    a(A);
  }), R = x.useCallback((A) => p.current === A, []), N = x.useCallback((A, h, O, $) => {
    var I;
    const M = el(c.current), L = J0(M, A, h, O, $ ?? i);
    return L ? ((I = L.element) == null || I.focus(), a(L.id), L) : null;
  }, [i]), _ = x.useCallback((A, h, O) => ({
    onFocus: (L) => {
      h == null || h(L);
      const I = el(c.current), z = r1(I, L.target);
      z !== -1 && a(I[z].id);
    },
    onKeyDown: (L) => {
      if (O == null || O(L), L.defaultPrevented || L.altKey || L.shiftKey || L.ctrlKey || L.metaKey || !sP.includes(L.key))
        return;
      let I = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (I = "ArrowRight", z = "ArrowLeft");
      const j = el(c.current), W = Qn(gt(m.current)), D = W === m.current;
      let G = jh(j, W, p.current), Y = "next";
      switch (L.key) {
        case I:
          Y = "previous", L.preventDefault(), D && (G = j.length);
          break;
        case z:
          L.preventDefault(), D && (G = -1);
          break;
        case "Home":
          L.preventDefault(), G = -1;
          break;
        case "End":
          L.preventDefault(), Y = "previous", G = j.length;
          break;
        default:
          return;
      }
      N(G, Y, s);
    },
    ref: dP(A, (L) => {
      m.current = L;
    })
  }), [N, o, r, s]), P = x.useCallback((A) => {
    var L;
    const h = el(c.current), O = Qn(gt(m.current)), M = O === m.current ? -1 : jh(h, O, p.current);
    return ((L = N(M, "next", !0, A)) == null ? void 0 : L.id) ?? null;
  }, [N]);
  return x.useMemo(() => ({
    activeItemId: g,
    focusNext: P,
    getActiveItem: v,
    getContainerProps: _,
    getItemMap: S,
    isItemActive: R,
    registerItem: k,
    setActiveItemId: E,
    unregisterItem: C
  }), [g, P, v, _, S, R, k, E, C]);
}
function Bh(e, t, n, r) {
  return e != null ? aP(e, t, n) : uP(t, n, r);
}
function aP(e, t, n) {
  var o;
  const r = n1(t, e);
  return r === -1 ? e1(t, n) : n(t[r]) ? t[r].id : ((o = J0(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function uP(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = t1(e, r);
    if (o && t(o))
      return o.id;
  }
  return e1(e, t);
}
function jh(e, t, n) {
  if (t) {
    const r = r1(e, t);
    if (r !== -1)
      return r;
  }
  return n1(e, n);
}
function J0(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = Dh(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[l];
    if (!u || !o(u))
      l = Dh(l, i, n, r);
    else
      return u;
  }
  return null;
}
function e1(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function t1(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function n1(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function r1(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function kd(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(Td).sort((o, i) => cP(o.element, i.element)), r = t.filter((o) => !Td(o));
  return [...n, ...r];
}
function el(e) {
  return kd(e).filter(Td);
}
function Dh(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function Fi(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function Td(e) {
  return e.element != null && e.element.isConnected;
}
function cP(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function dP(...e) {
  return (t) => {
    e.forEach((n) => {
      yd(n ?? null, t);
    });
  };
}
function fP(e, t) {
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
function pP(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function mP(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function Tl(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const o1 = /* @__PURE__ */ x.createContext(null);
function hP() {
  return x.useContext(o1);
}
const gP = o1.Provider, yP = /* @__PURE__ */ x.createContext(void 0);
function vP(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function i1(e, t) {
  if (t === void 0)
    return !0;
  let n = vP(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function xP(e, t) {
  return i1(e, t) ? Fi(e) : !1;
}
function SP(e, t) {
  fP(e, t);
}
const wP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: s,
    className: l,
    disabledItemsFocusable: a = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu",
    ...m
  } = t, c = x.useRef(null), y = x.useRef(!1), [w, b] = x.useState(!1), g = hP(), p = x.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), v = x.useCallback(($) => {
    var M, L, I;
    return f === "selectedMenu" ? ((M = $.find((z) => z.selected && Fi(z))) == null ? void 0 : M.id) ?? ((L = $.find((z) => Fi(z))) == null ? void 0 : L.id) ?? null : ((I = $.find((z) => Fi(z))) == null ? void 0 : I.id) ?? null;
  }, [f]), S = lP({
    activeItemId: void 0,
    getDefaultActiveItemId: v,
    orientation: "vertical",
    wrap: !u
  }), {
    activeItemId: k,
    focusNext: C,
    getActiveItem: E,
    getContainerProps: R,
    getItemMap: N
  } = S, _ = lt(($ = !1) => {
    if (!c.current || !$ && y.current)
      return null;
    if (i) {
      const M = E();
      if (M != null && M.element) {
        const L = Array.from(N().values()).some((z) => z.selected), I = f === "menu" && L && !M.selected && g == null;
        return b(I), SP(M.element, g), y.current = !0, M.element;
      }
      return o ? (b(!1), c.current.focus(), c.current) : null;
    }
    return o ? (b(!1), c.current.focus(), y.current = !0, c.current) : (b(!1), null);
  });
  ct(() => {
    if (!o && !i) {
      y.current = !1, b(!1);
      return;
    }
    _();
  }, [k, i, o, _]), x.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: ($, {
      direction: M
    }) => {
      const L = !c.current.style.width;
      if ($.clientHeight < c.current.clientHeight && L) {
        const I = rr($), z = X0(I);
        if (z > 0) {
          const j = `${z}px`, W = M === "rtl" ? "paddingLeft" : "paddingRight", D = parseFloat(I.getComputedStyle(c.current)[W]) || 0;
          c.current.style[W] = `${D + z}px`, c.current.style.width = `calc(100% + ${j})`;
        }
      }
      return c.current;
    },
    focusInitialTarget: () => {
      if (!c.current)
        return null;
      const $ = Qn(gt(c.current));
      return $ && Cl(c.current, $) ? $ : _(!0);
    }
  }), [_]);
  const P = R(void 0, m.onFocus), A = dt(c, P.ref, n), h = x.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: w,
    variant: f
  }), [a, w, f]), O = lt(($) => {
    if (w && b(!1), ($.ctrlKey || $.metaKey || $.altKey) && d) {
      d($);
      return;
    }
    if (P.onKeyDown($), $.key.length === 1) {
      const L = p.current, I = $.key.toLowerCase(), z = performance.now();
      L.keys.length > 0 && (z - L.lastTime > 500 ? (L.keys = [], L.repeating = !0, L.previousKeyMatched = !0) : L.repeating && I !== L.keys[0] && (L.repeating = !1)), L.lastTime = z, L.keys.push(I);
      const j = Qn(gt(c.current)), W = j && !L.repeating && i1(j, L);
      L.previousKeyMatched && (W || C((D) => xP(D, L)) != null) ? $.preventDefault() : L.previousKeyMatched = !1;
    }
    d && d($);
  });
  return /* @__PURE__ */ T.jsx(nP, {
    role: "menu",
    ref: A,
    className: l,
    onKeyDown: O,
    tabIndex: -1,
    ...m,
    onFocus: P.onFocus,
    children: /* @__PURE__ */ T.jsx(yP.Provider, {
      value: h,
      children: /* @__PURE__ */ T.jsx(rP.Provider, {
        value: S,
        children: s
      })
    })
  });
});
function bP(e) {
  return fe("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function Uh(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Wh(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Vh(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function tl(e) {
  return typeof e == "function" ? e() : e;
}
const CP = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"]
  }, bP, t);
}, kP = K(RR, {
  name: "MuiPopover",
  slot: "Root"
})({}), s1 = K(vu, {
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
}), TP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
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
    children: u,
    className: d,
    container: f,
    disableAutoFocus: m = !1,
    elevation: c = 8,
    marginThreshold: y = 16,
    open: w,
    slots: b = {},
    slotProps: g = {},
    transformOrigin: p = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: v = "auto",
    disableScrollLock: S = !1,
    ...k
  } = r, C = x.useRef(), E = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: c,
    marginThreshold: y,
    transformOrigin: p,
    transitionDuration: v
  }, R = CP(E), N = x.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const B = tl(i), Z = (B && B.nodeType === 1 ? B : gt(C.current).body).getBoundingClientRect();
    return {
      top: Z.top + Uh(Z, s.vertical),
      left: Z.left + Wh(Z, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), _ = x.useCallback((B) => ({
    vertical: Uh(B, p.vertical),
    horizontal: Wh(B, p.horizontal)
  }), [p.horizontal, p.vertical]), P = x.useCallback((B) => {
    const ee = {
      width: B.offsetWidth,
      height: B.offsetHeight
    }, Z = _(ee);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Vh(Z)
      };
    const ve = N();
    let me = ve.top - Z.vertical, le = ve.left - Z.horizontal;
    const se = me + ee.height, Ee = le + ee.width, Ae = rr(tl(i)), we = Ae.innerHeight - y, Ge = Ae.innerWidth - y;
    if (y != null && me < y) {
      const ae = me - y;
      me -= ae, Z.vertical += ae;
    } else if (y != null && se > we) {
      const ae = se - we;
      me -= ae, Z.vertical += ae;
    }
    if (y != null && le < y) {
      const ae = le - y;
      le -= ae, Z.horizontal += ae;
    } else if (Ee > Ge) {
      const ae = Ee - Ge;
      le -= ae, Z.horizontal += ae;
    }
    return {
      top: `${Math.round(me)}px`,
      left: `${Math.round(le)}px`,
      transformOrigin: Vh(Z)
    };
  }, [i, a, N, _, y]), [A, h] = x.useState(w), O = x.useCallback(() => {
    const B = C.current;
    if (!B)
      return;
    const ee = P(B);
    ee.top != null && B.style.setProperty("top", ee.top), ee.left != null && (B.style.left = ee.left), B.style.transformOrigin = ee.transformOrigin, h(!0);
  }, [P]);
  x.useEffect(() => (S && window.addEventListener("scroll", O), () => window.removeEventListener("scroll", O)), [i, S, O]);
  const $ = () => {
    O();
  }, M = () => {
    h(!1);
  };
  x.useEffect(() => {
    w && O();
  }), x.useImperativeHandle(o, () => w ? {
    updatePosition: () => {
      O();
    }
  } : null, [w, O]), x.useEffect(() => {
    if (!w)
      return;
    const B = S0(() => {
      O();
    }), ee = rr(tl(i));
    return ee.addEventListener("resize", B), () => {
      B.clear(), ee.removeEventListener("resize", B);
    };
  }, [i, w, O]);
  let L = v;
  const I = {
    slots: b,
    slotProps: g
  }, [z, j] = xe("transition", {
    elementType: ua,
    externalForwardedProps: I,
    ownerState: E,
    getSlotProps: (B) => ({
      ...B,
      onEntering: (ee, Z) => {
        var ve;
        (ve = B.onEntering) == null || ve.call(B, ee, Z), $();
      },
      onExited: (ee) => {
        var Z;
        (Z = B.onExited) == null || Z.call(B, ee), M();
      }
    }),
    additionalProps: {
      appear: !0,
      in: w
    }
  });
  v === "auto" && !z.muiSupportAuto && (L = void 0);
  const W = f || (i ? gt(tl(i)).body : void 0), [D, {
    slots: G,
    slotProps: Y,
    ...Q
  }] = xe("root", {
    ref: n,
    elementType: kP,
    externalForwardedProps: {
      ...I,
      ...k
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: b.backdrop
      },
      slotProps: {
        backdrop: T0(typeof g.backdrop == "function" ? g.backdrop(E) : g.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: w
    },
    ownerState: E,
    className: oe(R.root, d)
  }), [H, te] = xe("paper", {
    ref: C,
    className: R.paper,
    elementType: s1,
    externalForwardedProps: I,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: c,
      style: A ? void 0 : {
        opacity: 0
      }
    },
    ownerState: E
  });
  return /* @__PURE__ */ T.jsx(D, {
    ...Q,
    ...!ta(D) && {
      slots: G,
      slotProps: Y,
      disableAutoFocus: m,
      disableScrollLock: S
    },
    children: /* @__PURE__ */ T.jsx(z, {
      ...j,
      timeout: L,
      children: /* @__PURE__ */ T.jsx(H, {
        ...te,
        children: u
      })
    })
  });
});
function EP(e) {
  return fe("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const RP = {
  vertical: "top",
  horizontal: "right"
}, PP = {
  vertical: "top",
  horizontal: "left"
}, $P = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, EP, t);
}, IP = K(TP, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), MP = K(s1, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), OP = K(wP, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), AP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: i,
    className: s,
    disableAutoFocusItem: l = !1,
    onClose: a,
    open: u,
    PopoverClasses: d,
    transitionDuration: f = "auto",
    variant: m = "selectedMenu",
    slots: c = {},
    slotProps: y = {},
    ...w
  } = r, b = s0(), g = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: f,
    variant: m
  }, p = $P(g), v = o && u, S = v && !l, k = x.useRef(null), C = ($, M) => {
    var L, I;
    k.current && (k.current.adjustStyleForScrollbar($, {
      direction: b ? "rtl" : "ltr"
    }), v && ((I = (L = k.current).focusInitialTarget) == null || I.call(L)));
  }, E = ($) => {
    $.key === "Tab" && ($.preventDefault(), a && a($, "tabKeyDown"));
  }, R = {
    slots: c,
    slotProps: y
  }, N = H0({
    elementType: c.root,
    externalSlotProps: y.root,
    ownerState: g,
    className: [p.root, s]
  }), [_, P] = xe("paper", {
    className: p.paper,
    elementType: MP,
    externalForwardedProps: R,
    shouldForwardComponentProp: !0,
    ownerState: g
  }), [A, h] = xe("list", {
    className: p.list,
    elementType: OP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: R,
    getSlotProps: ($) => ({
      ...$,
      onKeyDown: (M) => {
        var L;
        E(M), (L = $.onKeyDown) == null || L.call($, M);
      }
    }),
    ownerState: g
  }), O = typeof y.transition == "function" ? y.transition(g) : y.transition;
  return /* @__PURE__ */ T.jsx(
    IP,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: b ? "right" : "left"
      },
      transformOrigin: b ? RP : PP,
      slots: {
        root: c.root,
        paper: _,
        backdrop: c.backdrop,
        transition: c.transition
      },
      slotProps: {
        root: N,
        paper: P,
        backdrop: typeof y.backdrop == "function" ? y.backdrop(g) : y.backdrop,
        transition: {
          ...O,
          onEntering: (...$) => {
            var M;
            C(...$), (M = O == null ? void 0 : O.onEntering) == null || M.call(O, ...$);
          }
        }
      },
      open: u,
      ref: n,
      transitionDuration: f,
      ownerState: g,
      ...w,
      classes: d,
      children: /* @__PURE__ */ T.jsx(A, {
        actions: k,
        autoFocus: v,
        autoFocusItem: S,
        variant: m,
        ...h,
        children: i
      })
    }
  );
}), NP = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${re(n)}`, i && "iconOpen", r && "disabled"]
  };
  return pe(l, Jk, t);
}, l1 = K("select", {
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
  [`&.${Xf.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${Js.root}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "calc(var(--_caret, 24px) + (var(--_endAdornment, 28px) - 1.5rem)/2)"
    // 1.5rem is the default icon size
  },
  [`.${Gt.root}:has(> &)`]: {
    "--_endAdornment": "0px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      [`.${Gt.root}:has(> &)`]: {
        "--_caret": "24px"
      },
      [`.${Gt.root}:has(> & ~ .${Js.root})`]: {
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
      [`.${Gt.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${Gt.root}:has(> & ~ .${Js.root})`]: {
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
      [`.${Gt.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${Gt.root}:has(> & ~ .${Js.root})`]: {
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
})), LP = K(l1, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: on,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Xf.multiple}`]: t.multiple
    }];
  }
})({}), a1 = K("svg", {
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
  [`&.${Xf.disabled}`]: {
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
})), _P = K(a1, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${re(n.variant)}`], n.open && t.iconOpen];
  }
})({}), zP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: s,
    inputRef: l,
    variant: a = "standard",
    ...u
  } = t, d = {
    ...t,
    disabled: o,
    variant: a,
    error: i
  }, f = NP(d);
  return /* @__PURE__ */ T.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ T.jsx(LP, {
      ownerState: d,
      className: oe(f.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ T.jsx(_P, {
      as: s,
      ownerState: d,
      className: f.icon
    })]
  });
});
var Hh;
const FP = K("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: on
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
}), BP = K("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: on
})(he(({
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
      ...Xe(e, "width", {
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
      ...Xe(e, "max-width", {
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
      ...Xe(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function jP(e) {
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
  return /* @__PURE__ */ T.jsx(FP, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ T.jsx(BP, {
      ownerState: a,
      children: l ? /* @__PURE__ */ T.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Hh || (Hh = /* @__PURE__ */ T.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const DP = (e) => {
  const {
    classes: t
  } = e, r = pe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, e2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, UP = K(gu, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: mu
})(he(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${In.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${In.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${In.focused} .${In.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter($t()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${In.focused} .${In.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${In.error} .${In.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${In.disabled} .${In.notchedOutline}`]: {
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
        [`&.${zr.root}`]: {
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
})), WP = K(jP, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(he(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), VP = K(yu, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: hu
})(he(({
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
}))), ap = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    fullWidth: o = !1,
    inputComponent: i = "input",
    label: s,
    multiline: l = !1,
    notched: a,
    slots: u = {},
    slotProps: d = {},
    type: f = "text",
    ...m
  } = r, c = DP(r), [y, w] = ti({
    props: r,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), b = {
    ...r,
    color: y.color || "primary",
    disabled: y.disabled,
    error: y.error,
    focused: y.focused,
    formControl: w,
    fullWidth: o,
    hiddenLabel: y.hiddenLabel,
    multiline: l,
    size: y.size,
    type: f
  }, g = u.root ?? UP, p = u.input ?? VP, [v, S] = xe("notchedOutline", {
    elementType: WP,
    className: c.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: b,
    externalForwardedProps: {
      slots: u,
      slotProps: d
    },
    additionalProps: {
      label: s != null && s !== "" && y.required ? /* @__PURE__ */ T.jsxs(x.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ T.jsx(Qf, {
    slots: {
      root: g,
      input: p
    },
    slotProps: d,
    renderSuffix: (k) => /* @__PURE__ */ T.jsx(v, {
      ...S,
      notched: typeof a < "u" ? a : !!(k.startAdornment || k.filled || k.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: l,
    ref: n,
    type: f,
    ...m,
    classes: {
      ...c,
      notchedOutline: null
    }
  });
});
ap.muiName = "Input";
function HP(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function u1(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return x.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ x.isValidElement(n) && (t += u1(n.props.children));
  }), t;
}
function KP(e, t, n = 0) {
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
function YP(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function GP(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ x.isValidElement(i) || !HP(i) || i.props.disabled)
      continue;
    const s = u1(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && Tl(t, i.props.value) && (r = n.length), n.push({
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
var Kh;
const nl = 2, QP = 400, Yh = 200, XP = 750, Nr = " ", qP = "ArrowUp", ZP = "ArrowDown", JP = "Enter";
function Gh(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - nl && e.clientX <= r.right + nl && e.clientY >= r.top - nl && e.clientY <= r.bottom + nl;
}
const e$ = K(l1, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${zr.select}`]: t.select
      },
      {
        [`&.${zr.select}`]: t[n.variant]
      },
      {
        [`&.${zr.error}`]: t.error
      },
      {
        [`&.${zr.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${zr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), t$ = K(a1, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), n$ = K("input", {
  shouldForwardProp: (e) => w0(e) && e !== "classes",
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
}), r$ = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e;
  return pe({
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, Z0, t);
}, o$ = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var pp, mp, hp, gp;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: u,
    defaultValue: d,
    disabled: f,
    displayEmpty: m,
    error: c = !1,
    IconComponent: y,
    inputRef: w,
    labelId: b,
    MenuProps: g = {},
    multiple: p,
    name: v,
    onBlur: S,
    onChange: k,
    onClose: C,
    onFocus: E,
    // eslint-disable-next-line react/prop-types
    onKeyDown: R,
    // eslint-disable-next-line react/prop-types
    onMouseDown: N,
    onOpen: _,
    open: P,
    readOnly: A,
    renderValue: h,
    required: O,
    SelectDisplayProps: $ = {},
    tabIndex: M,
    // catching `type` from Input which makes no sense for SelectInput
    type: L,
    value: I,
    variant: z = "standard",
    ...j
  } = t, [W, D] = ia({
    controlled: I,
    default: d,
    name: "Select"
  }), [G, Y] = ia({
    controlled: P,
    default: u,
    name: "Select"
  }), Q = x.useRef(null), H = x.useRef(null), te = x.useRef(null), B = x.useRef(!1), ee = x.useRef(!1), Z = x.useRef(null), ve = x.useRef(!1), me = x.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), le = x.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), se = Xn(), Ee = Xn(), Ae = Xn(), [we, Ge] = x.useState(null), {
    current: ae
  } = x.useRef(P != null), [je, tt] = x.useState(), [ft, qe] = x.useState(null), bt = dt(n, w), Mt = x.useCallback((V) => {
    H.current = V, V && Ge(V);
  }, []), _e = we == null ? void 0 : we.parentNode;
  x.useImperativeHandle(bt, () => ({
    focus: () => {
      H.current.focus();
    },
    node: Q.current,
    value: W
  }), [W]);
  const ke = we !== null && G, ge = x.useCallback(() => {
    Ae.clear(), le.current.buffer = "", le.current.previousSearchIndex = null, le.current.matchedIndex = null;
  }, [Ae]);
  ct(() => {
    B.current = ke, ke && ge();
  }, [ke, ge]);
  const Ct = x.useCallback(() => {
    se.clear(), Ee.clear();
  }, [se, Ee]), J = x.useCallback(() => {
    Ct(), ve.current = !1, me.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [Ct]), ne = x.useCallback(() => {
    Z.current && (Z.current(), Z.current = null);
  }, []);
  x.useEffect(() => {
    ke || (J(), ne());
  }, [ke, J, ne]), x.useEffect(() => () => {
    J(), ne(), ge();
  }, [J, ne, ge]), x.useEffect(() => {
    if (!ke || !_e || s || typeof ResizeObserver > "u")
      return;
    const V = new ResizeObserver(() => {
      tt(_e.clientWidth);
    });
    return V.observe(_e), () => {
      V.disconnect();
    };
  }, [ke, _e, s]), x.useEffect(() => {
    u && G && we && !ae && (tt(s ? null : _e.clientWidth), H.current.focus());
  }, [we, s]), x.useEffect(() => {
    i && H.current.focus();
  }, [i]), x.useEffect(() => {
    if (!b)
      return;
    const V = gt(H.current).getElementById(b);
    if (V) {
      const q = () => {
        getSelection().isCollapsed && H.current.focus();
      };
      return V.addEventListener("click", q), () => {
        V.removeEventListener("click", q);
      };
    }
  }, [b]);
  const ze = lt((V, q) => {
    V || (J(), ne()), V ? (ge(), qe(pP(q)), _ && _(q)) : (qe(null), C && C(q)), ae || (B.current = V, tt(s ? null : _e.clientWidth), Y(V));
  }), Ze = () => {
    J(), ee.current ? Ee.start(Yh, () => {
      me.current.allowUnselectedMouseUp = !0, se.start(Yh, () => {
        me.current.allowSelectedMouseUp = !0;
      });
    }) : se.start(QP, () => {
      me.current.allowSelectedMouseUp = !0, me.current.allowUnselectedMouseUp = !0;
    });
  }, nt = (V) => {
    if (N == null || N(V), V.button !== 0 || (V.preventDefault(), !H.current))
      return;
    H.current.focus();
    const q = gt(V.currentTarget);
    Ze(), ne();
    const ue = (Ve) => {
      Z.current = null, H.current && (Gh(Ve, H.current) || Gh(Ve, te.current) || !B.current && ae || ze(!1, Ve));
    };
    q.addEventListener("mouseup", ue, {
      capture: !0,
      once: !0
    }), Z.current = () => {
      q.removeEventListener("mouseup", ue, !0);
    }, ze(!0, V);
  }, Ne = (V) => {
    ze(!1, V);
  }, ri = x.Children.toArray(l), bu = (V) => {
    const q = ri.find((ue) => ue.props.value === V.target.value);
    q !== void 0 && (D(q.props.value), k && k(V, q));
  }, ks = (V, q, ue) => {
    if (D(ue), k) {
      const Ve = V.nativeEvent || V, Ot = new Ve.constructor(Ve.type, Ve);
      Object.defineProperty(Ot, "target", {
        writable: !0,
        value: {
          value: ue,
          name: v
        }
      }), k(Ot, q);
    }
  }, Cu = (V) => (q) => {
    ve.current = !1;
    let ue;
    if (q.currentTarget.hasAttribute("tabindex")) {
      if (p) {
        ue = Array.isArray(W) ? W.slice() : [];
        const Ve = W.indexOf(V.props.value);
        Ve === -1 ? ue.push(V.props.value) : ue.splice(Ve, 1);
      } else
        ue = V.props.value;
      V.props.onClick && V.props.onClick(q), W !== ue && ks(q, V, ue), p || ze(!1, q);
    }
  }, ku = (V, q) => (ue) => {
    var Ps, io;
    if ((io = (Ps = V.props).onMouseUp) == null || io.call(Ps, ue), ve.current) {
      ve.current = !1;
      return;
    }
    const Ve = !me.current.allowSelectedMouseUp && q, Ot = !me.current.allowUnselectedMouseUp && !q;
    Ve || Ot || ue.currentTarget.click();
  }, Tu = (V) => {
    var yp;
    const q = le.current, ue = q.buffer !== "";
    if (ke || p || f || V.defaultPrevented || (yp = V.nativeEvent) != null && yp.isComposing || V.key.length !== 1 || V.ctrlKey || V.metaKey || V.altKey || V.key === Nr && !ue)
      return !1;
    V.key === Nr && V.preventDefault();
    const Ve = q.buffer === "", {
      options: Ot,
      selectedIndex: Ps
    } = GP(ri, W);
    if (Ot.length === 0)
      return V.key !== Nr && ge(), !0;
    Ve && (q.previousSearchIndex = Ps);
    const io = V.key.toLowerCase();
    q.buffer === io && YP(Ot, io) && (q.buffer = "", q.previousSearchIndex = q.matchedIndex), q.buffer += io, Ae.start(XP, ge);
    const $u = KP(Ot, q.buffer, (q.previousSearchIndex ?? -1) + 1);
    if ($u !== -1) {
      const Iu = Ot[$u];
      return q.matchedIndex = $u, Tl(W, Iu.value) || ks(V, Iu.child, Iu.value), !0;
    }
    return V.key !== Nr && ge(), !0;
  }, Eu = (V) => {
    if (!A) {
      const q = Tu(V), ue = V.key === Nr || V.key === qP || V.key === ZP || V.key === JP;
      !q && ue && (V.preventDefault(), ze(!0, V)), R == null || R(V);
    }
  }, ie = (V) => {
    ge(), !ke && S && (Object.defineProperty(V, "target", {
      writable: !0,
      value: {
        value: W,
        name: v
      }
    }), S(V));
  }, We = (V) => (q) => {
    var ue, Ve;
    (Ve = (ue = V == null ? void 0 : V.props) == null ? void 0 : ue.onKeyDown) == null || Ve.call(ue, q), q.key === Nr && q.target === q.currentTarget && !q.defaultPrevented && (q.preventDefault(), q.repeat || q.currentTarget.click());
  };
  delete j["aria-invalid"];
  let Ft, cp;
  const Ts = [];
  let Es = !1, Rs = !1;
  (na({
    value: W
  }) || m) && (h ? Ft = h(W) : Es = !0);
  const f1 = ri.map((V) => {
    if (!/* @__PURE__ */ x.isValidElement(V))
      return null;
    let q;
    if (p) {
      if (!Array.isArray(W))
        throw new Error(nr(2));
      q = W.some((ue) => Tl(ue, V.props.value)), q && Es && Ts.push(V.props.children);
    } else
      q = Tl(W, V.props.value), q && Es && (cp = V.props.children);
    return q && (Rs = !0), /* @__PURE__ */ x.cloneElement(V, {
      "aria-selected": q ? "true" : "false",
      onMouseDown: (ue) => {
        var Ve, Ot;
        ve.current = !0, (Ot = (Ve = V.props).onMouseDown) == null || Ot.call(Ve, ue);
      },
      onPointerDown: (ue) => {
        var Ve, Ot;
        ve.current = !0, (Ot = (Ve = V.props).onPointerDown) == null || Ot.call(Ve, ue);
      },
      onClick: Cu(V),
      onMouseUp: ku(V, q),
      onKeyUp: (ue) => {
        ue.key === Nr && ue.preventDefault(), V.props.onKeyUp && V.props.onKeyUp(ue);
      },
      onKeyDown: We(V),
      role: "option",
      selected: q,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": V.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  ct(() => {
    ee.current = Rs, !ke && !p && !Rs && ge();
  }, [Rs, p, ke, ge]), Es && (p ? Ts.length === 0 ? Ft = null : Ft = Ts.reduce((V, q, ue) => (V.push(q), ue < Ts.length - 1 && V.push(", "), V), []) : Ft = cp);
  let dp = je;
  !s && ae && we && (dp = _e.clientWidth);
  let Ru;
  typeof M < "u" ? Ru = M : Ru = f ? null : 0;
  const p1 = $.id || (v ? `mui-component-select-${v}` : void 0), oo = {
    ...t,
    variant: z,
    value: W,
    open: ke,
    error: c
  }, Pu = r$(oo), Ir = typeof ((pp = g.slotProps) == null ? void 0 : pp.paper) == "function" ? g.slotProps.paper(oo) : (mp = g.slotProps) == null ? void 0 : mp.paper, m1 = dt(Ir == null ? void 0 : Ir.ref, te), h1 = typeof ((hp = g.slotProps) == null ? void 0 : hp.list) == "function" ? g.slotProps.list(oo) : (gp = g.slotProps) == null ? void 0 : gp.list, fp = Jr(), g1 = Jr();
  return /* @__PURE__ */ T.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ T.jsx(e$, {
      as: "div",
      ref: Mt,
      tabIndex: Ru,
      role: "combobox",
      "aria-controls": ke ? fp : void 0,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": ke ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": A ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": b,
      "aria-describedby": r,
      "aria-required": O ? "true" : void 0,
      "aria-invalid": c ? "true" : void 0,
      onKeyDown: Eu,
      onMouseDown: f || A ? null : nt,
      onBlur: ie,
      onFocus: E,
      ...$,
      ownerState: oo,
      className: oe($.className, Pu.select, a),
      id: p1,
      children: mP(Ft) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Kh || (Kh = /* @__PURE__ */ T.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Ft
    }), /* @__PURE__ */ T.jsx(n$, {
      "aria-invalid": c,
      value: Array.isArray(W) ? W.join(",") : W,
      name: v,
      ref: Q,
      "aria-hidden": !0,
      onChange: bu,
      tabIndex: -1,
      disabled: f,
      readOnly: A,
      className: Pu.nativeInput,
      autoFocus: i,
      required: O,
      ...j,
      id: j.id ?? g1,
      ownerState: oo
    }), /* @__PURE__ */ T.jsx(t$, {
      as: y,
      className: Pu.icon,
      ownerState: oo
    }), /* @__PURE__ */ T.jsx(gP, {
      value: ft,
      children: /* @__PURE__ */ T.jsx(AP, {
        id: `menu-${v || ""}`,
        anchorEl: _e,
        open: ke,
        onClose: Ne,
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
            "aria-labelledby": b,
            role: "listbox",
            "aria-multiselectable": p ? "true" : void 0,
            disableListWrap: !0,
            id: fp,
            ...h1
          },
          paper: {
            ...Ir,
            ref: m1,
            style: {
              minWidth: dp,
              ...Ir == null ? void 0 : Ir.style
            }
          }
        },
        children: f1
      })
    })]
  });
}), i$ = (e) => {
  const {
    classes: t
  } = e, r = pe({
    root: ["root"]
  }, Z0, t);
  return {
    ...t,
    ...r
  };
}, up = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => on(e) && e !== "variant"
}, s$ = K(lp, up)(""), l$ = K(ap, up)(""), a$ = K(sp, up)(""), c1 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: u = !1,
    IconComponent: d = jE,
    id: f,
    input: m,
    inputProps: c,
    label: y,
    labelId: w,
    MenuProps: b,
    multiple: g = !1,
    native: p = !1,
    onClose: v,
    onOpen: S,
    open: k,
    renderValue: C,
    SelectDisplayProps: E,
    variant: R = "outlined",
    ...N
  } = r, _ = p ? zP : o$, [P] = ti({
    props: r,
    states: ["variant", "error"]
  }), A = P.variant || R, h = {
    ...r,
    variant: A,
    classes: s
  }, O = i$(h), {
    root: $,
    ...M
  } = O, L = m || {
    standard: /* @__PURE__ */ T.jsx(s$, {
      ownerState: h
    }),
    outlined: /* @__PURE__ */ T.jsx(l$, {
      label: y,
      ownerState: h
    }),
    filled: /* @__PURE__ */ T.jsx(a$, {
      ownerState: h
    })
  }[A], I = dt(n, ni(L));
  return /* @__PURE__ */ T.jsx(x.Fragment, {
    children: /* @__PURE__ */ x.cloneElement(L, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: _,
      inputProps: {
        children: i,
        error: P.error,
        IconComponent: d,
        variant: A,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: g,
        ...p ? {
          id: f
        } : {
          autoWidth: o,
          defaultOpen: a,
          displayEmpty: u,
          labelId: w,
          MenuProps: b,
          onClose: v,
          onOpen: S,
          open: k,
          renderValue: C,
          SelectDisplayProps: {
            id: f,
            ...E
          }
        },
        ...c,
        classes: c ? ht(M, c.classes) : M,
        ...m ? m.props.inputProps : {}
      },
      ...(g && p || u) && A === "outlined" ? {
        notched: !0
      } : {},
      ref: I,
      className: oe(L.props.className, l, O.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!m && {
        variant: A
      },
      ...N
    })
  });
});
c1.muiName = "Select";
function u$(e) {
  return fe("MuiTooltip", e);
}
const sn = ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function c$(e) {
  return Math.round(e * 1e5) / 1e5;
}
const d$ = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${re(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return pe(s, u$, t);
}, f$ = K(G0, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(he(({
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
      [`&[data-popper-placement*="bottom"] .${sn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${sn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${sn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${sn.arrow}`]: {
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
}))), p$ = K("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${re(n.placement.split("-")[0])}`]];
  }
})(he(({
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
  [`.${sn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${sn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${sn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${sn.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${c$(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${sn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${sn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${sn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${sn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), m$ = K("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(he(({
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
let rl = !1;
const Qh = new xu();
let yi = {
  x: 0,
  y: 0
};
function ol(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const h$ = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: i,
    classes: s,
    describeChild: l = !1,
    disableFocusListener: a = !1,
    disableHoverListener: u = !1,
    disableInteractive: d = !1,
    disableTouchListener: f = !1,
    enterDelay: m = 100,
    enterNextDelay: c = 0,
    enterTouchDelay: y = 700,
    followCursor: w = !1,
    id: b,
    leaveDelay: g = 0,
    leaveTouchDelay: p = 1500,
    onClose: v,
    onOpen: S,
    open: k,
    placement: C = "bottom",
    slotProps: E = {},
    slots: R = {},
    title: N,
    ..._
  } = r, P = /* @__PURE__ */ x.isValidElement(i) ? i : /* @__PURE__ */ T.jsx("span", {
    children: i
  }), A = ws(), [h, O] = x.useState(), [$, M] = x.useState(null), L = x.useRef(!1), I = x.useRef(!1), z = d || w, j = Xn(), W = Xn(), D = Xn(), G = Xn(), [Y, Q] = ia({
    controlled: k,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let H = Y;
  const {
    current: te
  } = x.useRef(k !== void 0), B = Jr(b), ee = x.useRef(), Z = lt(() => {
    ee.current !== void 0 && (document.body.style.WebkitUserSelect = ee.current, ee.current = void 0), G.clear();
  });
  x.useEffect(() => Z, [Z]);
  const ve = (ie) => {
    Qh.clear(), rl = !0, Q(!0), S && !H && S(ie);
  }, me = lt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ie) => {
      I.current = !1, Qh.start(800 + g, () => {
        rl = !1;
      }), Q(!1), v && H && v(ie), j.start(A.transitions.duration.shortest, () => {
        L.current = !1;
      });
    }
  ), le = (ie) => {
    L.current && ie.type !== "touchstart" || (h && h.removeAttribute("title"), W.clear(), D.clear(), m || rl && c ? W.start(rl ? c : m, () => {
      ve(ie);
    }) : ve(ie));
  }, se = (ie) => {
    if (h != null && h.disabled && !te) {
      if (H && !I.current)
        return;
      I.current = !0;
    } else
      I.current = !1;
    le(ie);
  }, Ee = (ie) => {
    h != null && h.disabled && !te && !I.current || le(ie);
  }, Ae = (ie) => {
    W.clear(), D.start(g, () => {
      me(ie);
    });
  }, [, we] = x.useState(!1), Ge = (ie) => {
    const We = (ie == null ? void 0 : ie.target) ?? h;
    if (!We || We.disabled || !sa(We)) {
      we(!1);
      const Ft = ie ?? new Event("blur");
      !ie && We && (Object.defineProperty(Ft, "target", {
        value: We
      }), Object.defineProperty(Ft, "currentTarget", {
        value: We
      })), Ae(Ft);
    }
  }, ae = (ie) => {
    if (h || O(ie.currentTarget), I.current = !1, sa(ie.target)) {
      const We = (Ft) => {
        Ft.target.disabled && Ge(Ft), Ft.target.removeEventListener("blur", We);
      };
      ie.target.addEventListener("blur", We), we(!0), le(ie);
    }
  }, je = (ie) => {
    L.current = !0;
    const We = P.props;
    We.onTouchStart && We.onTouchStart(ie);
  }, tt = (ie) => {
    je(ie), D.clear(), j.clear(), Z(), ee.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", G.start(y, () => {
      document.body.style.WebkitUserSelect = ee.current, se(ie);
    });
  }, ft = (ie) => {
    P.props.onTouchEnd && P.props.onTouchEnd(ie), Z(), D.start(p, () => {
      me(ie);
    });
  };
  x.useEffect(() => {
    if (!H)
      return;
    function ie(We) {
      We.key === "Escape" && me(We);
    }
    return document.addEventListener("keydown", ie), () => {
      document.removeEventListener("keydown", ie);
    };
  }, [me, H]);
  const qe = dt(ni(P), O, n);
  !N && N !== 0 && (H = !1);
  const bt = x.useRef(), Mt = (ie) => {
    const We = P.props;
    We.onMouseMove && We.onMouseMove(ie), yi = {
      x: ie.clientX,
      y: ie.clientY
    }, bt.current && bt.current.update();
  }, _e = {}, ke = typeof N == "string";
  l ? (_e.title = !H && ke && !u ? N : null, _e["aria-describedby"] = H ? B : null) : (_e["aria-label"] = ke ? N : null, _e["aria-labelledby"] = H && !ke ? B : null);
  const ge = {
    ..._e,
    ..._,
    ...P.props,
    className: oe(_.className, P.props.className),
    onTouchStart: je,
    ref: qe,
    ...w ? {
      onMouseMove: Mt
    } : {}
  }, Ct = {};
  f || (ge.onTouchStart = tt, ge.onTouchEnd = ft), u || (ge.onMouseOver = ol(se, ge.onMouseOver), ge.onMouseLeave = ol(Ae, ge.onMouseLeave), z || (Ct.onMouseOver = Ee, Ct.onMouseLeave = Ae)), a || (ge.onFocus = ol(ae, ge.onFocus), ge.onBlur = ol(Ge, ge.onBlur), z || (Ct.onFocus = ae, Ct.onBlur = Ge));
  const J = {
    ...r,
    arrow: o,
    disableInteractive: z,
    placement: C,
    touch: L.current
  }, ne = typeof E.popper == "function" ? E.popper(J) : E.popper, ze = x.useMemo(() => {
    var We;
    let ie = [{
      name: "arrow",
      enabled: !!$,
      options: {
        element: $,
        padding: 4
      }
    }];
    return (We = ne == null ? void 0 : ne.popperOptions) != null && We.modifiers && (ie = ie.concat(ne.popperOptions.modifiers)), {
      ...ne == null ? void 0 : ne.popperOptions,
      modifiers: ie
    };
  }, [$, ne == null ? void 0 : ne.popperOptions]), Ze = d$(J), nt = {
    slots: R,
    slotProps: {
      arrow: E.arrow,
      popper: ne,
      tooltip: E.tooltip,
      transition: E.transition
    }
  }, [Ne, ri] = xe("popper", {
    elementType: f$,
    externalForwardedProps: nt,
    ownerState: J,
    className: Ze.popper
  }), [bu, ks] = xe("transition", {
    elementType: ua,
    externalForwardedProps: nt,
    ownerState: J
  }), [Cu, ku] = xe("tooltip", {
    elementType: p$,
    className: Ze.tooltip,
    externalForwardedProps: nt,
    ownerState: J
  }), [Tu, Eu] = xe("arrow", {
    elementType: m$,
    className: Ze.arrow,
    externalForwardedProps: nt,
    ownerState: J,
    ref: M
  });
  return /* @__PURE__ */ T.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ x.cloneElement(P, ge), /* @__PURE__ */ T.jsx(Ne, {
      as: G0,
      placement: C,
      anchorEl: w ? {
        getBoundingClientRect: () => ({
          top: yi.y,
          left: yi.x,
          right: yi.x,
          bottom: yi.y,
          width: 0,
          height: 0
        })
      } : h,
      popperRef: bt,
      open: h ? H : !1,
      id: B,
      transition: !0,
      ...Ct,
      ...ri,
      popperOptions: ze,
      children: ({
        TransitionProps: ie
      }) => /* @__PURE__ */ T.jsx(bu, {
        timeout: A.transitions.duration.shorter,
        ...ie,
        ...ks,
        children: /* @__PURE__ */ T.jsxs(Cu, {
          ...ku,
          children: [N, o ? /* @__PURE__ */ T.jsx(Tu, {
            ...Eu
          }) : null]
        })
      })
    })]
  });
}), Fr = QC({
  createStyledComponent: K("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => ye({
    props: e,
    name: "MuiStack"
  })
});
function g$(e) {
  return fe("MuiSwitch", e);
}
const Me = ce("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), y$ = (e) => {
  const {
    classes: t,
    edge: n,
    size: r,
    color: o,
    checked: i,
    disabled: s
  } = e, l = {
    root: ["root", n && `edge${re(n)}`, `size${re(r)}`],
    switchBase: ["switchBase", `color${re(o)}`, i && "checked", s && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, a = pe(l, g$, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...a
  };
}, v$ = K("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.edge && t[`edge${re(n.edge)}`], t[`size${re(n.size)}`]];
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
      [`& .${Me.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${Me.switchBase}`]: {
        padding: 4,
        [`&.${Me.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), x$ = K(aR, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.switchBase, {
      [`& .${Me.input}`]: t.input
    }, n.color !== "default" && t[`color${re(n.color)}`]];
  }
})(he(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
  ...Xe(e, ["left", "transform"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${Me.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${Me.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  ...e.focusVisible ? {
    // when focusVisible is enabled, the styles must not rely on `opacity` so that the ring is visible on the track slot.
    [`&.${xd.focusVisible} ~ .${Me.track}`]: {
      ...m0,
      ...e.focusVisible
    },
    // mirrors the non-focusVisible `opacity: 0.5`; must stay BEFORE the disabled rule so
    // disabled wins the checked+disabled combination at equal specificity.
    [`&.${Me.checked} + .${Me.track}`]: {
      backgroundColor: e.alpha(e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`, 0.5)
    },
    [`&.${Me.disabled} + .${Me.track}`]: {
      backgroundColor: e.alpha(e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`, e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`)
    }
  } : {
    [`&.${Me.checked} + .${Me.track}`]: {
      opacity: 0.5
    },
    [`&.${Me.disabled} + .${Me.track}`]: {
      opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
    }
  },
  [`& .${Me.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), he(({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter($t(["light"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Me.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${Me.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${Me.checked} + .${Me.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      },
      ...e.focusVisible && {
        [`&.${Me.checked} + .${Me.track}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, 0.5)
        },
        [`&.${Me.disabled} + .${Me.track}`]: {
          backgroundColor: e.alpha(e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`, e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`)
        },
        [`&.${Me.checked}.${Me.disabled} + .${Me.track}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`)
        }
      }
    }
  }))]
}))), S$ = K("span", {
  name: "MuiSwitch",
  slot: "Track"
})(he(({
  theme: e
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  ...Xe(e, ["opacity", "background-color"], {
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
}))), w$ = K("span", {
  name: "MuiSwitch",
  slot: "Thumb"
})(he(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  boxSizing: "border-box",
  border: "1px solid transparent",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), b$ = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiSwitch"
  }), {
    className: o,
    color: i = "primary",
    edge: s = !1,
    size: l = "medium",
    sx: a,
    slots: u = {},
    slotProps: d = {},
    ...f
  } = r, m = {
    ...r,
    color: i,
    edge: s,
    size: l
  }, c = y$(m), y = d.input, w = {
    slots: u,
    slotProps: d
  }, [b, g] = xe("root", {
    className: oe(c.root, o),
    elementType: v$,
    externalForwardedProps: w,
    ownerState: m,
    additionalProps: {
      sx: a
    }
  }), [p, v] = xe("thumb", {
    className: c.thumb,
    elementType: w$,
    externalForwardedProps: w,
    ownerState: m
  }), S = /* @__PURE__ */ T.jsx(p, {
    ...v
  }), [k, C] = xe("track", {
    className: c.track,
    elementType: S$,
    externalForwardedProps: w,
    ownerState: m
  });
  return /* @__PURE__ */ T.jsxs(b, {
    ...g,
    children: [/* @__PURE__ */ T.jsx(x$, {
      type: "checkbox",
      icon: S,
      checkedIcon: S,
      ref: n,
      ownerState: m,
      ...f,
      classes: {
        ...c,
        root: c.switchBase
      },
      slots: {
        ...u.switchBase && {
          root: u.switchBase
        },
        ...u.input && {
          input: u.input
        }
      },
      slotProps: {
        ...d.switchBase && {
          root: typeof d.switchBase == "function" ? d.switchBase(m) : d.switchBase
        },
        input: T0(typeof y == "function" ? y(m) : y, {
          role: "switch"
        })
      }
    }), /* @__PURE__ */ T.jsx(k, {
      ...C
    })]
  });
}), d1 = /* @__PURE__ */ x.createContext();
function C$(e) {
  return fe("MuiTable", e);
}
ce("MuiTable", ["root", "stickyHeader"]);
const k$ = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return pe({
    root: ["root", n && "stickyHeader"]
  }, C$, t);
}, T$ = K("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.stickyHeader && t.stickyHeader];
  }
})(he(({
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
}))), Xh = "table", qh = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = Xh,
    padding: s = "normal",
    size: l = "medium",
    stickyHeader: a = !1,
    ...u
  } = r, d = {
    ...r,
    component: i,
    padding: s,
    size: l,
    stickyHeader: a
  }, f = k$(d), m = x.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ T.jsx(d1.Provider, {
    value: m,
    children: /* @__PURE__ */ T.jsx(T$, {
      as: i,
      role: i === Xh ? null : "table",
      ref: n,
      className: oe(f.root, o),
      ownerState: d,
      ...u
    })
  });
}), wu = /* @__PURE__ */ x.createContext();
function E$(e) {
  return fe("MuiTableBody", e);
}
ce("MuiTableBody", ["root"]);
const R$ = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, E$, t);
}, P$ = K("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), $$ = {
  variant: "body"
}, Zh = "tbody", Jh = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Zh,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = R$(l);
  return /* @__PURE__ */ T.jsx(wu.Provider, {
    value: $$,
    children: /* @__PURE__ */ T.jsx(P$, {
      className: oe(a.root, o),
      as: i,
      ref: n,
      role: i === Zh ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function I$(e) {
  return fe("MuiTableCell", e);
}
const M$ = ce("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), O$ = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: o,
    size: i,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${re(r)}`, o !== "normal" && `padding${re(o)}`, `size${re(i)}`]
  };
  return pe(l, I$, t);
}, A$ = K("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${re(n.size)}`], n.padding !== "normal" && t[`padding${re(n.padding)}`], n.align !== "inherit" && t[`align${re(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(he(({
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
      [`&.${M$.paddingCheckbox}`]: {
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
}))), Et = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTableCell"
  }), {
    align: o = "inherit",
    className: i,
    component: s,
    padding: l,
    scope: a,
    size: u,
    sortDirection: d,
    variant: f,
    ...m
  } = r, c = x.useContext(d1), y = x.useContext(wu), w = y && y.variant === "head";
  let b;
  s ? b = s : b = w ? "th" : "td";
  let g = a;
  b === "td" ? g = void 0 : !g && w && (g = "col");
  const p = f || y && y.variant, v = {
    ...r,
    align: o,
    component: b,
    padding: l || (c && c.padding ? c.padding : "normal"),
    size: u || (c && c.size ? c.size : "medium"),
    sortDirection: d,
    stickyHeader: p === "head" && c && c.stickyHeader,
    variant: p
  }, S = O$(v);
  let k = null;
  return d && (k = d === "asc" ? "ascending" : "descending"), /* @__PURE__ */ T.jsx(A$, {
    as: b,
    ref: n,
    className: oe(S.root, i),
    "aria-sort": k,
    scope: g,
    ownerState: v,
    ...m
  });
});
function N$(e) {
  return fe("MuiTableContainer", e);
}
ce("MuiTableContainer", ["root"]);
const L$ = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, N$, t);
}, _$ = K("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), eg = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTableContainer"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = L$(l);
  return /* @__PURE__ */ T.jsx(_$, {
    ref: n,
    as: i,
    className: oe(a.root, o),
    ownerState: l,
    ...s
  });
});
function z$(e) {
  return fe("MuiTableHead", e);
}
ce("MuiTableHead", ["root"]);
const F$ = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, z$, t);
}, B$ = K("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), j$ = {
  variant: "head"
}, tg = "thead", ng = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = tg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = F$(l);
  return /* @__PURE__ */ T.jsx(wu.Provider, {
    value: j$,
    children: /* @__PURE__ */ T.jsx(B$, {
      as: i,
      className: oe(a.root, o),
      ref: n,
      role: i === tg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function D$(e) {
  return fe("MuiTableRow", e);
}
const rg = ce("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), U$ = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return pe({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, D$, t);
}, W$ = K("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.head && t.head, n.footer && t.footer];
  }
})(he(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${rg.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${rg.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), og = "tr", il = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = og,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, u = x.useContext(wu), d = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: u && u.variant === "head",
    footer: u && u.variant === "footer"
  }, f = U$(d);
  return /* @__PURE__ */ T.jsx(W$, {
    as: i,
    ref: n,
    className: oe(f.root, o),
    role: i === og ? null : "row",
    ownerState: d,
    ...a
  });
});
function V$(e) {
  return fe("MuiTextField", e);
}
ce("MuiTextField", ["root"]);
const H$ = {
  standard: lp,
  filled: sp,
  outlined: ap
}, K$ = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, V$, t);
}, Y$ = K(NR, {
  name: "MuiTextField",
  slot: "Root"
})({}), ig = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: i = !1,
    children: s,
    className: l,
    color: a = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: f = !1,
    fullWidth: m = !1,
    helperText: c,
    id: y,
    inputRef: w,
    label: b,
    maxRows: g,
    minRows: p,
    multiline: v = !1,
    name: S,
    onBlur: k,
    onChange: C,
    onFocus: E,
    placeholder: R,
    required: N = !1,
    rows: _,
    select: P = !1,
    slots: A = {},
    slotProps: h = {},
    type: O,
    value: $,
    variant: M = "outlined",
    ...L
  } = r, I = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: d,
    error: f,
    fullWidth: m,
    multiline: v,
    required: N,
    select: P,
    variant: M
  }, z = K$(I), j = Jr(y), W = c && j ? `${j}-helper-text` : void 0, D = b && j ? `${j}-label` : void 0, G = H$[M], Y = {
    slots: A,
    slotProps: h
  }, [Q, H] = xe("select", {
    elementType: c1,
    externalForwardedProps: Y,
    ownerState: I
  }), te = P && H.native, B = {}, ee = Y.slotProps.inputLabel;
  M === "outlined" && (ee && typeof ee.shrink < "u" && (B.notched = ee.shrink), B.label = b), P && (te || (B.id = void 0), B["aria-describedby"] = void 0);
  const [Z, ve] = xe("root", {
    elementType: Y$,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...Y,
      ...L
    },
    ownerState: I,
    className: oe(z.root, l),
    ref: n,
    additionalProps: {
      disabled: d,
      error: f,
      fullWidth: m,
      required: N,
      color: a,
      variant: M
    }
  }), [me, le] = xe("input", {
    elementType: G,
    externalForwardedProps: Y,
    additionalProps: B,
    ownerState: I
  }), [se, Ee] = xe("inputLabel", {
    elementType: qR,
    externalForwardedProps: Y,
    ownerState: I
  }), [Ae, we] = xe("htmlInput", {
    elementType: "input",
    externalForwardedProps: Y,
    ownerState: I
  }), [Ge, ae] = xe("formHelperText", {
    elementType: zR,
    externalForwardedProps: Y,
    ownerState: I
  }), je = /* @__PURE__ */ T.jsx(me, {
    "aria-describedby": W,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: m,
    multiline: v,
    name: S,
    rows: _,
    maxRows: g,
    minRows: p,
    type: O,
    value: $,
    id: j,
    inputRef: w,
    onBlur: k,
    onChange: C,
    onFocus: E,
    placeholder: R,
    inputProps: we,
    slots: {
      input: A.htmlInput ? Ae : void 0
    },
    ...le
  });
  return /* @__PURE__ */ T.jsxs(Z, {
    ...ve,
    children: [b != null && b !== "" && /* @__PURE__ */ T.jsx(se, {
      htmlFor: P && !te ? void 0 : j,
      id: D,
      ...P && !te && {
        component: "div"
      },
      ...Ee,
      children: b
    }), P ? /* @__PURE__ */ T.jsx(Q, {
      "aria-describedby": W,
      id: j,
      labelId: D,
      value: $,
      input: je,
      ...H,
      children: s
    }) : je, c && /* @__PURE__ */ T.jsx(Ge, {
      id: W,
      ...ae,
      children: c
    })]
  });
}), G$ = Dn(/* @__PURE__ */ T.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), Q$ = Dn(/* @__PURE__ */ T.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), X$ = Dn(/* @__PURE__ */ T.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), mo = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', po = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function q$({ children: e, sx: t }) {
  return /* @__PURE__ */ T.jsx(
    _o,
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
function sl({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ T.jsxs(vu, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ T.jsxs(
      Fr,
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
          typeof e == "string" ? /* @__PURE__ */ T.jsx(q$, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ T.jsx(to, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function sg({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ T.jsxs(to, { sx: n, children: [
    /* @__PURE__ */ T.jsxs(Fr, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ T.jsx(
        _o,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ T.jsx(_o, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function Z$({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ T.jsx(
    to,
    {
      sx: {
        width: t,
        height: t,
        borderRadius: "50%",
        flexShrink: 0,
        bgcolor: e ? "success.main" : "error.main"
      }
    }
  );
}
function J$(e, t) {
  switch (t == null ? void 0 : t.kind) {
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
function eI({ lines: e, running: t }) {
  const n = x.useRef(null), r = x.useRef(null), o = x.useRef(!0);
  return x.useEffect(() => {
    const i = r.current;
    if (!i) return;
    const s = () => {
      o.current = i.scrollHeight - i.scrollTop - i.clientHeight < 40;
    };
    return i.addEventListener("scroll", s), () => i.removeEventListener("scroll", s);
  }, []), x.useEffect(() => {
    var i;
    o.current && ((i = n.current) == null || i.scrollIntoView({ block: "end" }));
  }, [e]), !e.length && !t ? null : /* @__PURE__ */ T.jsxs(
    vu,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: po.bg,
        color: po.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: mo,
        fontSize: 12,
        lineHeight: 1.55,
        // Preserve the script's own spacing: bash output is aligned with spaces,
        // and collapsing them turns readable output into a wall of text.
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ T.jsx(
          to,
          {
            sx: {
              color: i.stream === "stderr" ? po.err : i.stream === "meta" ? po.dim : po.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ T.jsx(to, { sx: { color: po.dim }, children: "▍running…" }),
        /* @__PURE__ */ T.jsx("div", { ref: n })
      ]
    }
  );
}
function tI({ ctx: e }) {
  const t = x.useMemo(() => fu(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ T.jsx(o2, { theme: t, children: /* @__PURE__ */ T.jsx(nI, { ctx: e }) });
}
function nI({ ctx: e }) {
  const [t, n] = x.useState(""), [r, o] = x.useState(null), [i, s] = x.useState([]), [l, a] = x.useState(null), [u, d] = x.useState([]), [f, m] = x.useState(""), [c, y] = x.useState(null), [w, b] = x.useState([]), [g, p] = x.useState(!1), v = x.useRef(null);
  x.useEffect(() => () => {
    var P;
    return (P = v.current) == null ? void 0 : P.abort();
  }, []);
  const S = x.useCallback(
    async (P, A) => {
      const h = await e.api(P, A), O = await h.json().catch(() => ({}));
      if (!h.ok) throw new Error(O.message ?? `HTTP ${h.status}`);
      return O;
    },
    [e]
  ), k = x.useCallback(() => {
    S("/ssh/sessions").then((P) => d(P.sessions ?? [])).catch(() => {
    });
  }, [S]);
  x.useEffect(() => {
    k();
    const P = setInterval(k, 15e3);
    return () => clearInterval(P);
  }, [k]);
  const C = x.useCallback(
    async (P) => {
      y(null);
      try {
        const [A, h] = await Promise.all([
          S(`/ssh/${encodeURIComponent(P)}/keys`),
          S(`/ssh/${encodeURIComponent(P)}/password-auth`).catch(() => null)
        ]);
        s(A.keys ?? []), a(h && h.password_auth !== null ? !!h.password_auth : null), o(P);
      } catch (A) {
        y(A instanceof Error ? A.message : String(A)), o(null);
      }
    },
    [S]
  );
  async function E(P, A, h) {
    p(!0), b([]), y(null);
    const O = new AbortController();
    v.current = O;
    try {
      for await (const $ of e.run(P, { method: A, body: h, signal: O.signal }))
        b((M) => J$(M, $));
    } catch ($) {
      O.signal.aborted || b((M) => [...M, { stream: "stderr", text: String($) }]);
    } finally {
      p(!1), v.current = null, r && C(r);
    }
  }
  async function R(P) {
    P.preventDefault(), r && (await E(`/ssh/${encodeURIComponent(r)}/keys`, "POST", { key: f }), m(""));
  }
  async function N(P) {
    r && await E(`/ssh/${encodeURIComponent(r)}/keys/remove`, "POST", {
      fingerprint: P
    });
  }
  async function _(P) {
    r && (a(P), await E(`/ssh/${encodeURIComponent(r)}/password-auth`, "PUT", { enabled: P }));
  }
  return /* @__PURE__ */ T.jsxs(Fr, { spacing: 2, children: [
    c && /* @__PURE__ */ T.jsx(hT, { severity: "error", children: c }),
    /* @__PURE__ */ T.jsx(sl, { label: "Account", children: /* @__PURE__ */ T.jsxs(
      Fr,
      {
        component: "form",
        direction: { xs: "column", sm: "row" },
        spacing: 1.5,
        sx: { alignItems: { sm: "flex-end" } },
        onSubmit: (P) => {
          P.preventDefault(), t && C(t);
        },
        children: [
          /* @__PURE__ */ T.jsx(sg, { label: "Linux username", sx: { flex: 1, maxWidth: 320 }, children: /* @__PURE__ */ T.jsx(
            ig,
            {
              value: t,
              onChange: (P) => n(P.target.value),
              placeholder: "webdev",
              fullWidth: !0,
              required: !0
            }
          ) }),
          /* @__PURE__ */ T.jsx(Oh, { type: "submit", variant: "contained", startIcon: /* @__PURE__ */ T.jsx(X$, { sx: { fontSize: 14 } }), children: "Load" })
        ]
      }
    ) }),
    (w.length > 0 || g) && /* @__PURE__ */ T.jsx(eI, { lines: w, running: g }),
    r && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
      /* @__PURE__ */ T.jsxs(
        sl,
        {
          label: `Authorized keys · ${r}`,
          action: l !== null && /* @__PURE__ */ T.jsxs(Fr, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ T.jsx(_o, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: "Password auth" }),
            /* @__PURE__ */ T.jsx(
              b$,
              {
                size: "small",
                checked: l,
                disabled: g,
                onChange: (P) => _(P.target.checked)
              }
            )
          ] }),
          padded: !1,
          children: [
            !i.length && /* @__PURE__ */ T.jsx(_o, { variant: "body2", sx: { p: 2, color: "text.disabled" }, children: "No keys installed. This account cannot log in by key." }),
            i.length > 0 && /* @__PURE__ */ T.jsx(eg, { sx: { overflowX: "auto" }, children: /* @__PURE__ */ T.jsxs(qh, { size: "small", children: [
              /* @__PURE__ */ T.jsx(ng, { children: /* @__PURE__ */ T.jsxs(il, { children: [
                /* @__PURE__ */ T.jsx(Et, { children: "Type" }),
                /* @__PURE__ */ T.jsx(Et, { children: "Fingerprint" }),
                /* @__PURE__ */ T.jsx(Et, { children: "Comment" }),
                /* @__PURE__ */ T.jsx(Et, { align: "right", children: "Actions" })
              ] }) }),
              /* @__PURE__ */ T.jsx(Jh, { children: i.map((P) => /* @__PURE__ */ T.jsxs(il, { hover: !0, children: [
                /* @__PURE__ */ T.jsx(Et, { children: /* @__PURE__ */ T.jsx(
                  BE,
                  {
                    size: "small",
                    variant: "filled",
                    color: "primary",
                    label: `${P.type}${P.bits ? ` ${P.bits}` : ""}`
                  }
                ) }),
                /* @__PURE__ */ T.jsx(Et, { sx: { fontFamily: mo, fontSize: "0.7rem" }, children: P.fingerprint }),
                /* @__PURE__ */ T.jsx(Et, { sx: { color: "text.secondary" }, children: P.comment || "—" }),
                /* @__PURE__ */ T.jsx(Et, { align: "right", children: /* @__PURE__ */ T.jsx(h$, { title: "Remove key", arrow: !0, children: /* @__PURE__ */ T.jsx("span", { children: /* @__PURE__ */ T.jsx(
                  L0,
                  {
                    color: "error",
                    disabled: g,
                    onClick: () => N(P.fingerprint),
                    children: /* @__PURE__ */ T.jsx(Q$, { sx: { fontSize: 15 } })
                  }
                ) }) }) })
              ] }, P.fingerprint)) })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ T.jsx(sl, { label: "Add a public key", children: /* @__PURE__ */ T.jsxs(Fr, { component: "form", spacing: 1.5, onSubmit: R, children: [
        /* @__PURE__ */ T.jsx(
          sg,
          {
            label: "Public key",
            hint: "the contents of a .pub file — never a private key",
            children: /* @__PURE__ */ T.jsx(
              ig,
              {
                value: f,
                onChange: (P) => m(P.target.value),
                placeholder: "ssh-ed25519 AAAAC3Nza… user@laptop",
                fullWidth: !0,
                required: !0,
                multiline: !0,
                minRows: 2,
                slotProps: { input: { sx: { fontFamily: mo, fontSize: "0.72rem" } } }
              }
            )
          }
        ),
        /* @__PURE__ */ T.jsx(to, { children: /* @__PURE__ */ T.jsx(
          Oh,
          {
            type: "submit",
            variant: "contained",
            disabled: g || !f.trim(),
            startIcon: /* @__PURE__ */ T.jsx(G$, { sx: { fontSize: 14 } }),
            children: g ? "Working…" : "Add key"
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ T.jsxs(sl, { label: `Active sessions · ${u.length}`, padded: !1, children: [
      !u.length && /* @__PURE__ */ T.jsx(_o, { variant: "body2", sx: { p: 2, color: "text.disabled" }, children: "No active SSH sessions." }),
      u.length > 0 && /* @__PURE__ */ T.jsx(eg, { sx: { overflowX: "auto" }, children: /* @__PURE__ */ T.jsxs(qh, { size: "small", children: [
        /* @__PURE__ */ T.jsx(ng, { children: /* @__PURE__ */ T.jsxs(il, { children: [
          /* @__PURE__ */ T.jsx(Et, { children: "User" }),
          /* @__PURE__ */ T.jsx(Et, { children: "From" }),
          /* @__PURE__ */ T.jsx(Et, { children: "TTY" }),
          /* @__PURE__ */ T.jsx(Et, { children: "Since" })
        ] }) }),
        /* @__PURE__ */ T.jsx(Jh, { children: u.map((P, A) => /* @__PURE__ */ T.jsxs(il, { hover: !0, children: [
          /* @__PURE__ */ T.jsx(Et, { children: /* @__PURE__ */ T.jsxs(Fr, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ T.jsx(Z$, { ok: !0 }),
            /* @__PURE__ */ T.jsx(to, { sx: { fontFamily: mo }, children: P.user })
          ] }) }),
          /* @__PURE__ */ T.jsx(Et, { sx: { fontFamily: mo }, children: P.from || "—" }),
          /* @__PURE__ */ T.jsx(Et, { sx: { fontFamily: mo }, children: P.tty || "—" }),
          /* @__PURE__ */ T.jsx(Et, { sx: { color: "text.secondary" }, children: P.login_time || "—" })
        ] }, `${P.user}-${P.tty}-${A}`)) })
      ] }) })
    ] })
  ] });
}
let ca = null;
function rI(e, t) {
  ca = wv(e), ca.render(
    /* @__PURE__ */ T.jsx(x.StrictMode, { children: /* @__PURE__ */ T.jsx(tI, { ctx: t }) })
  );
}
function oI() {
  const e = ca;
  ca = null, e && queueMicrotask(() => e.unmount());
}
const sI = { mount: rI, unmount: oI };
export {
  sI as default,
  rI as mount,
  oI as unmount
};
//# sourceMappingURL=main.js.map
