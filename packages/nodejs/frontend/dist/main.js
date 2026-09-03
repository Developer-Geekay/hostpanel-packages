var nx = Object.defineProperty;
var rx = (e, t, n) => t in e ? nx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var zi = (e, t, n) => rx(e, typeof t != "symbol" ? t + "" : t, n);
function ox(e, t) {
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
function ix(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qg = { exports: {} }, Ga = {}, qg = { exports: {} }, je = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qs = Symbol.for("react.element"), sx = Symbol.for("react.portal"), lx = Symbol.for("react.fragment"), ax = Symbol.for("react.strict_mode"), cx = Symbol.for("react.profiler"), ux = Symbol.for("react.provider"), dx = Symbol.for("react.context"), fx = Symbol.for("react.forward_ref"), px = Symbol.for("react.suspense"), mx = Symbol.for("react.memo"), hx = Symbol.for("react.lazy"), Yp = Symbol.iterator;
function gx(e) {
  return e === null || typeof e != "object" ? null : (e = Yp && e[Yp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Zg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Jg = Object.assign, ey = {};
function Pi(e, t, n) {
  this.props = e, this.context = t, this.refs = ey, this.updater = n || Zg;
}
Pi.prototype.isReactComponent = {};
Pi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ty() {
}
ty.prototype = Pi.prototype;
function af(e, t, n) {
  this.props = e, this.context = t, this.refs = ey, this.updater = n || Zg;
}
var cf = af.prototype = new ty();
cf.constructor = af;
Jg(cf, Pi.prototype);
cf.isPureReactComponent = !0;
var Gp = Array.isArray, ny = Object.prototype.hasOwnProperty, uf = { current: null }, ry = { key: !0, ref: !0, __self: !0, __source: !0 };
function oy(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) ny.call(t, r) && !ry.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: qs, type: e, key: i, ref: s, props: o, _owner: uf.current };
}
function yx(e, t) {
  return { $$typeof: qs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function df(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qs;
}
function vx(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Xp = /\/+/g;
function su(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? vx("" + e.key) : t.toString(36);
}
function Yl(e, t, n, r, o) {
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
        case qs:
        case sx:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + su(s, 0) : r, Gp(o) ? (n = "", e != null && (n = e.replace(Xp, "$&/") + "/"), Yl(o, t, n, "", function(c) {
    return c;
  })) : o != null && (df(o) && (o = yx(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Xp, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Gp(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + su(i, l);
    s += Yl(i, t, n, a, o);
  }
  else if (a = gx(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + su(i, l++), s += Yl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function yl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Yl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function xx(e) {
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
var Gt = { current: null }, Gl = { transition: null }, Sx = { ReactCurrentDispatcher: Gt, ReactCurrentBatchConfig: Gl, ReactCurrentOwner: uf };
function iy() {
  throw Error("act(...) is not supported in production builds of React.");
}
je.Children = { map: yl, forEach: function(e, t, n) {
  yl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return yl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return yl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!df(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
je.Component = Pi;
je.Fragment = lx;
je.Profiler = cx;
je.PureComponent = af;
je.StrictMode = ax;
je.Suspense = px;
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sx;
je.act = iy;
je.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Jg({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = uf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) ny.call(t, a) && !ry.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: qs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
je.createContext = function(e) {
  return e = { $$typeof: dx, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ux, _context: e }, e.Consumer = e;
};
je.createElement = oy;
je.createFactory = function(e) {
  var t = oy.bind(null, e);
  return t.type = e, t;
};
je.createRef = function() {
  return { current: null };
};
je.forwardRef = function(e) {
  return { $$typeof: fx, render: e };
};
je.isValidElement = df;
je.lazy = function(e) {
  return { $$typeof: hx, _payload: { _status: -1, _result: e }, _init: xx };
};
je.memo = function(e, t) {
  return { $$typeof: mx, type: e, compare: t === void 0 ? null : t };
};
je.startTransition = function(e) {
  var t = Gl.transition;
  Gl.transition = {};
  try {
    e();
  } finally {
    Gl.transition = t;
  }
};
je.unstable_act = iy;
je.useCallback = function(e, t) {
  return Gt.current.useCallback(e, t);
};
je.useContext = function(e) {
  return Gt.current.useContext(e);
};
je.useDebugValue = function() {
};
je.useDeferredValue = function(e) {
  return Gt.current.useDeferredValue(e);
};
je.useEffect = function(e, t) {
  return Gt.current.useEffect(e, t);
};
je.useId = function() {
  return Gt.current.useId();
};
je.useImperativeHandle = function(e, t, n) {
  return Gt.current.useImperativeHandle(e, t, n);
};
je.useInsertionEffect = function(e, t) {
  return Gt.current.useInsertionEffect(e, t);
};
je.useLayoutEffect = function(e, t) {
  return Gt.current.useLayoutEffect(e, t);
};
je.useMemo = function(e, t) {
  return Gt.current.useMemo(e, t);
};
je.useReducer = function(e, t, n) {
  return Gt.current.useReducer(e, t, n);
};
je.useRef = function(e) {
  return Gt.current.useRef(e);
};
je.useState = function(e) {
  return Gt.current.useState(e);
};
je.useSyncExternalStore = function(e, t, n) {
  return Gt.current.useSyncExternalStore(e, t, n);
};
je.useTransition = function() {
  return Gt.current.useTransition();
};
je.version = "18.3.1";
qg.exports = je;
var m = qg.exports;
const sy = /* @__PURE__ */ ix(m), da = /* @__PURE__ */ ox({
  __proto__: null,
  default: sy
}, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bx = m, wx = Symbol.for("react.element"), Cx = Symbol.for("react.fragment"), kx = Object.prototype.hasOwnProperty, Tx = bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ex = { key: !0, ref: !0, __self: !0, __source: !0 };
function ly(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) kx.call(t, r) && !Ex.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: wx, type: e, key: i, ref: s, props: o, _owner: Tx.current };
}
Ga.Fragment = Cx;
Ga.jsx = ly;
Ga.jsxs = ly;
Qg.exports = Ga;
var f = Qg.exports, ay = { exports: {} }, hn = {}, cy = { exports: {} }, uy = {};
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
  function t(j, z) {
    var D = j.length;
    j.push(z);
    e: for (; 0 < D; ) {
      var W = D - 1 >>> 1, _ = j[W];
      if (0 < o(_, z)) j[W] = z, j[D] = _, D = W;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var z = j[0], D = j.pop();
    if (D !== z) {
      j[0] = D;
      e: for (var W = 0, _ = j.length, Q = _ >>> 1; W < Q; ) {
        var V = 2 * (W + 1) - 1, q = j[V], X = V + 1, G = j[X];
        if (0 > o(q, D)) X < _ && 0 > o(G, q) ? (j[W] = G, j[X] = D, W = X) : (j[W] = q, j[V] = D, W = V);
        else if (X < _ && 0 > o(G, D)) j[W] = G, j[X] = D, W = X;
        else break e;
      }
    }
    return z;
  }
  function o(j, z) {
    var D = j.sortIndex - z.sortIndex;
    return D !== 0 ? D : j.id - z.id;
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
  var a = [], c = [], u = 1, p = null, v = 3, d = !1, x = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S(j) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= j) r(c), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(c);
    }
  }
  function w(j) {
    if (b = !1, S(j), !x) if (n(a) !== null) x = !0, L(E);
    else {
      var z = n(c);
      z !== null && N(w, z.startTime - j);
    }
  }
  function E(j, z) {
    x = !1, b && (b = !1, y(T), T = -1), d = !0;
    var D = v;
    try {
      for (S(z), p = n(a); p !== null && (!(p.expirationTime > z) || j && !I()); ) {
        var W = p.callback;
        if (typeof W == "function") {
          p.callback = null, v = p.priorityLevel;
          var _ = W(p.expirationTime <= z);
          z = e.unstable_now(), typeof _ == "function" ? p.callback = _ : p === n(a) && r(a), S(z);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Q = !0;
      else {
        var V = n(c);
        V !== null && N(w, V.startTime - z), Q = !1;
      }
      return Q;
    } finally {
      p = null, v = D, d = !1;
    }
  }
  var k = !1, R = null, T = -1, A = 5, O = -1;
  function I() {
    return !(e.unstable_now() - O < A);
  }
  function g() {
    if (R !== null) {
      var j = e.unstable_now();
      O = j;
      var z = !0;
      try {
        z = R(!0, j);
      } finally {
        z ? M() : (k = !1, R = null);
      }
    } else k = !1;
  }
  var M;
  if (typeof h == "function") M = function() {
    h(g);
  };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(), $ = P.port2;
    P.port1.onmessage = g, M = function() {
      $.postMessage(null);
    };
  } else M = function() {
    C(g, 0);
  };
  function L(j) {
    R = j, k || (k = !0, M());
  }
  function N(j, z) {
    T = C(function() {
      j(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    x || d || (x = !0, L(E));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(j) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = v;
    }
    var D = v;
    v = z;
    try {
      return j();
    } finally {
      v = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, z) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var D = v;
    v = j;
    try {
      return z();
    } finally {
      v = D;
    }
  }, e.unstable_scheduleCallback = function(j, z, D) {
    var W = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? W + D : W) : D = W, j) {
      case 1:
        var _ = -1;
        break;
      case 2:
        _ = 250;
        break;
      case 5:
        _ = 1073741823;
        break;
      case 4:
        _ = 1e4;
        break;
      default:
        _ = 5e3;
    }
    return _ = D + _, j = { id: u++, callback: z, priorityLevel: j, startTime: D, expirationTime: _, sortIndex: -1 }, D > W ? (j.sortIndex = D, t(c, j), n(a) === null && j === n(c) && (b ? (y(T), T = -1) : b = !0, N(w, D - W))) : (j.sortIndex = _, t(a, j), x || d || (x = !0, L(E))), j;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(j) {
    var z = v;
    return function() {
      var D = v;
      v = z;
      try {
        return j.apply(this, arguments);
      } finally {
        v = D;
      }
    };
  };
})(uy);
cy.exports = uy;
var Rx = cy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Px = m, fn = Rx;
function K(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var dy = /* @__PURE__ */ new Set(), ks = {};
function Mo(e, t) {
  pi(e, t), pi(e + "Capture", t);
}
function pi(e, t) {
  for (ks[e] = t, e = 0; e < t.length; e++) dy.add(t[e]);
}
var xr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ku = Object.prototype.hasOwnProperty, Ix = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Qp = {}, qp = {};
function Mx(e) {
  return Ku.call(qp, e) ? !0 : Ku.call(Qp, e) ? !1 : Ix.test(e) ? qp[e] = !0 : (Qp[e] = !0, !1);
}
function $x(e, t, n, r) {
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
function jx(e, t, n, r) {
  if (t === null || typeof t > "u" || $x(e, t, n, r)) return !0;
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
var Nt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Nt[e] = new Xt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Nt[t] = new Xt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Nt[e] = new Xt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Nt[e] = new Xt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Nt[e] = new Xt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Nt[e] = new Xt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Nt[e] = new Xt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Nt[e] = new Xt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Nt[e] = new Xt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ff = /[\-:]([a-z])/g;
function pf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ff,
    pf
  );
  Nt[t] = new Xt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ff, pf);
  Nt[t] = new Xt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ff, pf);
  Nt[t] = new Xt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Nt[e] = new Xt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Nt.xlinkHref = new Xt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Nt[e] = new Xt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mf(e, t, n, r) {
  var o = Nt.hasOwnProperty(t) ? Nt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jx(t, n, o, r) && (n = null), r || o === null ? Mx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Er = Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vl = Symbol.for("react.element"), Uo = Symbol.for("react.portal"), Ho = Symbol.for("react.fragment"), hf = Symbol.for("react.strict_mode"), Yu = Symbol.for("react.profiler"), fy = Symbol.for("react.provider"), py = Symbol.for("react.context"), gf = Symbol.for("react.forward_ref"), Gu = Symbol.for("react.suspense"), Xu = Symbol.for("react.suspense_list"), yf = Symbol.for("react.memo"), Mr = Symbol.for("react.lazy"), my = Symbol.for("react.offscreen"), Zp = Symbol.iterator;
function Di(e) {
  return e === null || typeof e != "object" ? null : (e = Zp && e[Zp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pt = Object.assign, lu;
function rs(e) {
  if (lu === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    lu = t && t[1] || "";
  }
  return `
` + lu + e;
}
var au = !1;
function cu(e, t) {
  if (!e || au) return "";
  au = !0;
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
    au = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? rs(e) : "";
}
function Ax(e) {
  switch (e.tag) {
    case 5:
      return rs(e.type);
    case 16:
      return rs("Lazy");
    case 13:
      return rs("Suspense");
    case 19:
      return rs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = cu(e.type, !1), e;
    case 11:
      return e = cu(e.type.render, !1), e;
    case 1:
      return e = cu(e.type, !0), e;
    default:
      return "";
  }
}
function Qu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ho:
      return "Fragment";
    case Uo:
      return "Portal";
    case Yu:
      return "Profiler";
    case hf:
      return "StrictMode";
    case Gu:
      return "Suspense";
    case Xu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case py:
      return (e.displayName || "Context") + ".Consumer";
    case fy:
      return (e._context.displayName || "Context") + ".Provider";
    case gf:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case yf:
      return t = e.displayName || null, t !== null ? t : Qu(e.type) || "Memo";
    case Mr:
      t = e._payload, e = e._init;
      try {
        return Qu(e(t));
      } catch {
      }
  }
  return null;
}
function Ox(e) {
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
      return Qu(t);
    case 8:
      return t === hf ? "StrictMode" : "Mode";
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
function Kr(e) {
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
function hy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Lx(e) {
  var t = hy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function xl(e) {
  e._valueTracker || (e._valueTracker = Lx(e));
}
function gy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = hy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function fa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qu(e, t) {
  var n = t.checked;
  return pt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Jp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Kr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function yy(e, t) {
  t = t.checked, t != null && mf(e, "checked", t, !1);
}
function Zu(e, t) {
  yy(e, t);
  var n = Kr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ju(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ju(e, t.type, Kr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function em(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ju(e, t, n) {
  (t !== "number" || fa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var os = Array.isArray;
function oi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Kr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ed(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(K(91));
  return pt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function tm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(K(92));
      if (os(n)) {
        if (1 < n.length) throw Error(K(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Kr(n) };
}
function vy(e, t) {
  var n = Kr(t.value), r = Kr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function nm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function td(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sl, Sy = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Sl = Sl || document.createElement("div"), Sl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ts(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var cs = {
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
}, Nx = ["Webkit", "ms", "Moz", "O"];
Object.keys(cs).forEach(function(e) {
  Nx.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), cs[t] = cs[e];
  });
});
function by(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cs.hasOwnProperty(e) && cs[e] ? ("" + t).trim() : t + "px";
}
function wy(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = by(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var zx = pt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function nd(e, t) {
  if (t) {
    if (zx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(K(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(K(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(K(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(K(62));
  }
}
function rd(e, t) {
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
var od = null;
function vf(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var id = null, ii = null, si = null;
function rm(e) {
  if (e = el(e)) {
    if (typeof id != "function") throw Error(K(280));
    var t = e.stateNode;
    t && (t = Ja(t), id(e.stateNode, e.type, t));
  }
}
function Cy(e) {
  ii ? si ? si.push(e) : si = [e] : ii = e;
}
function ky() {
  if (ii) {
    var e = ii, t = si;
    if (si = ii = null, rm(e), t) for (e = 0; e < t.length; e++) rm(t[e]);
  }
}
function Ty(e, t) {
  return e(t);
}
function Ey() {
}
var uu = !1;
function Ry(e, t, n) {
  if (uu) return e(t, n);
  uu = !0;
  try {
    return Ty(e, t, n);
  } finally {
    uu = !1, (ii !== null || si !== null) && (Ey(), ky());
  }
}
function Es(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ja(n);
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
var sd = !1;
if (xr) try {
  var Bi = {};
  Object.defineProperty(Bi, "passive", { get: function() {
    sd = !0;
  } }), window.addEventListener("test", Bi, Bi), window.removeEventListener("test", Bi, Bi);
} catch {
  sd = !1;
}
function Dx(e, t, n, r, o, i, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var us = !1, pa = null, ma = !1, ld = null, Bx = { onError: function(e) {
  us = !0, pa = e;
} };
function Fx(e, t, n, r, o, i, s, l, a) {
  us = !1, pa = null, Dx.apply(Bx, arguments);
}
function _x(e, t, n, r, o, i, s, l, a) {
  if (Fx.apply(this, arguments), us) {
    if (us) {
      var c = pa;
      us = !1, pa = null;
    } else throw Error(K(198));
    ma || (ma = !0, ld = c);
  }
}
function $o(e) {
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
function Py(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function om(e) {
  if ($o(e) !== e) throw Error(K(188));
}
function Wx(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $o(e), t === null) throw Error(K(188));
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
        if (i === n) return om(o), e;
        if (i === r) return om(o), t;
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
function Iy(e) {
  return e = Wx(e), e !== null ? My(e) : null;
}
function My(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = My(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $y = fn.unstable_scheduleCallback, im = fn.unstable_cancelCallback, Ux = fn.unstable_shouldYield, Hx = fn.unstable_requestPaint, vt = fn.unstable_now, Vx = fn.unstable_getCurrentPriorityLevel, xf = fn.unstable_ImmediatePriority, jy = fn.unstable_UserBlockingPriority, ha = fn.unstable_NormalPriority, Kx = fn.unstable_LowPriority, Ay = fn.unstable_IdlePriority, Xa = null, tr = null;
function Yx(e) {
  if (tr && typeof tr.onCommitFiberRoot == "function") try {
    tr.onCommitFiberRoot(Xa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var _n = Math.clz32 ? Math.clz32 : Qx, Gx = Math.log, Xx = Math.LN2;
function Qx(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Gx(e) / Xx | 0) | 0;
}
var bl = 64, wl = 4194304;
function is(e) {
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
function ga(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = is(l) : (i &= s, i !== 0 && (r = is(i)));
  } else s = n & ~o, s !== 0 ? r = is(s) : i !== 0 && (r = is(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - _n(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function qx(e, t) {
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
function Zx(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - _n(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = qx(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function ad(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Oy() {
  var e = bl;
  return bl <<= 1, !(bl & 4194240) && (bl = 64), e;
}
function du(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zs(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - _n(t), e[t] = n;
}
function Jx(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - _n(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Sf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - _n(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ge = 0;
function Ly(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ny, bf, zy, Dy, By, cd = !1, Cl = [], zr = null, Dr = null, Br = null, Rs = /* @__PURE__ */ new Map(), Ps = /* @__PURE__ */ new Map(), jr = [], eS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function sm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zr = null;
      break;
    case "dragenter":
    case "dragleave":
      Dr = null;
      break;
    case "mouseover":
    case "mouseout":
      Br = null;
      break;
    case "pointerover":
    case "pointerout":
      Rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ps.delete(t.pointerId);
  }
}
function Fi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = el(t), t !== null && bf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function tS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return zr = Fi(zr, e, t, n, r, o), !0;
    case "dragenter":
      return Dr = Fi(Dr, e, t, n, r, o), !0;
    case "mouseover":
      return Br = Fi(Br, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Rs.set(i, Fi(Rs.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ps.set(i, Fi(Ps.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Fy(e) {
  var t = po(e.target);
  if (t !== null) {
    var n = $o(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Py(n), t !== null) {
          e.blockedOn = t, By(e.priority, function() {
            zy(n);
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
function Xl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ud(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      od = r, n.target.dispatchEvent(r), od = null;
    } else return t = el(n), t !== null && bf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function lm(e, t, n) {
  Xl(e) && n.delete(t);
}
function nS() {
  cd = !1, zr !== null && Xl(zr) && (zr = null), Dr !== null && Xl(Dr) && (Dr = null), Br !== null && Xl(Br) && (Br = null), Rs.forEach(lm), Ps.forEach(lm);
}
function _i(e, t) {
  e.blockedOn === t && (e.blockedOn = null, cd || (cd = !0, fn.unstable_scheduleCallback(fn.unstable_NormalPriority, nS)));
}
function Is(e) {
  function t(o) {
    return _i(o, e);
  }
  if (0 < Cl.length) {
    _i(Cl[0], e);
    for (var n = 1; n < Cl.length; n++) {
      var r = Cl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (zr !== null && _i(zr, e), Dr !== null && _i(Dr, e), Br !== null && _i(Br, e), Rs.forEach(t), Ps.forEach(t), n = 0; n < jr.length; n++) r = jr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jr.length && (n = jr[0], n.blockedOn === null); ) Fy(n), n.blockedOn === null && jr.shift();
}
var li = Er.ReactCurrentBatchConfig, ya = !0;
function rS(e, t, n, r) {
  var o = Ge, i = li.transition;
  li.transition = null;
  try {
    Ge = 1, wf(e, t, n, r);
  } finally {
    Ge = o, li.transition = i;
  }
}
function oS(e, t, n, r) {
  var o = Ge, i = li.transition;
  li.transition = null;
  try {
    Ge = 4, wf(e, t, n, r);
  } finally {
    Ge = o, li.transition = i;
  }
}
function wf(e, t, n, r) {
  if (ya) {
    var o = ud(e, t, n, r);
    if (o === null) bu(e, t, r, va, n), sm(e, r);
    else if (tS(o, e, t, n, r)) r.stopPropagation();
    else if (sm(e, r), t & 4 && -1 < eS.indexOf(e)) {
      for (; o !== null; ) {
        var i = el(o);
        if (i !== null && Ny(i), i = ud(e, t, n, r), i === null && bu(e, t, r, va, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else bu(e, t, r, null, n);
  }
}
var va = null;
function ud(e, t, n, r) {
  if (va = null, e = vf(r), e = po(e), e !== null) if (t = $o(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Py(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return va = e, null;
}
function _y(e) {
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
      switch (Vx()) {
        case xf:
          return 1;
        case jy:
          return 4;
        case ha:
        case Kx:
          return 16;
        case Ay:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Or = null, Cf = null, Ql = null;
function Wy() {
  if (Ql) return Ql;
  var e, t = Cf, n = t.length, r, o = "value" in Or ? Or.value : Or.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Ql = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ql(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function kl() {
  return !0;
}
function am() {
  return !1;
}
function gn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? kl : am, this.isPropagationStopped = am, this;
  }
  return pt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = kl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = kl);
  }, persist: function() {
  }, isPersistent: kl }), t;
}
var Ii = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, kf = gn(Ii), Js = pt({}, Ii, { view: 0, detail: 0 }), iS = gn(Js), fu, pu, Wi, Qa = pt({}, Js, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Tf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Wi && (Wi && e.type === "mousemove" ? (fu = e.screenX - Wi.screenX, pu = e.screenY - Wi.screenY) : pu = fu = 0, Wi = e), fu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : pu;
} }), cm = gn(Qa), sS = pt({}, Qa, { dataTransfer: 0 }), lS = gn(sS), aS = pt({}, Js, { relatedTarget: 0 }), mu = gn(aS), cS = pt({}, Ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uS = gn(cS), dS = pt({}, Ii, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), fS = gn(dS), pS = pt({}, Ii, { data: 0 }), um = gn(pS), mS = {
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
}, hS = {
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
}, gS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function yS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gS[e]) ? !!t[e] : !1;
}
function Tf() {
  return yS;
}
var vS = pt({}, Js, { key: function(e) {
  if (e.key) {
    var t = mS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ql(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Tf, charCode: function(e) {
  return e.type === "keypress" ? ql(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), xS = gn(vS), SS = pt({}, Qa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dm = gn(SS), bS = pt({}, Js, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Tf }), wS = gn(bS), CS = pt({}, Ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), kS = gn(CS), TS = pt({}, Qa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ES = gn(TS), RS = [9, 13, 27, 32], Ef = xr && "CompositionEvent" in window, ds = null;
xr && "documentMode" in document && (ds = document.documentMode);
var PS = xr && "TextEvent" in window && !ds, Uy = xr && (!Ef || ds && 8 < ds && 11 >= ds), fm = " ", pm = !1;
function Hy(e, t) {
  switch (e) {
    case "keyup":
      return RS.indexOf(t.keyCode) !== -1;
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
function Vy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Vo = !1;
function IS(e, t) {
  switch (e) {
    case "compositionend":
      return Vy(t);
    case "keypress":
      return t.which !== 32 ? null : (pm = !0, fm);
    case "textInput":
      return e = t.data, e === fm && pm ? null : e;
    default:
      return null;
  }
}
function MS(e, t) {
  if (Vo) return e === "compositionend" || !Ef && Hy(e, t) ? (e = Wy(), Ql = Cf = Or = null, Vo = !1, e) : null;
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
      return Uy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $S = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function mm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$S[e.type] : t === "textarea";
}
function Ky(e, t, n, r) {
  Cy(r), t = xa(t, "onChange"), 0 < t.length && (n = new kf("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var fs = null, Ms = null;
function jS(e) {
  rv(e, 0);
}
function qa(e) {
  var t = Go(e);
  if (gy(t)) return e;
}
function AS(e, t) {
  if (e === "change") return t;
}
var Yy = !1;
if (xr) {
  var hu;
  if (xr) {
    var gu = "oninput" in document;
    if (!gu) {
      var hm = document.createElement("div");
      hm.setAttribute("oninput", "return;"), gu = typeof hm.oninput == "function";
    }
    hu = gu;
  } else hu = !1;
  Yy = hu && (!document.documentMode || 9 < document.documentMode);
}
function gm() {
  fs && (fs.detachEvent("onpropertychange", Gy), Ms = fs = null);
}
function Gy(e) {
  if (e.propertyName === "value" && qa(Ms)) {
    var t = [];
    Ky(t, Ms, e, vf(e)), Ry(jS, t);
  }
}
function OS(e, t, n) {
  e === "focusin" ? (gm(), fs = t, Ms = n, fs.attachEvent("onpropertychange", Gy)) : e === "focusout" && gm();
}
function LS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return qa(Ms);
}
function NS(e, t) {
  if (e === "click") return qa(t);
}
function zS(e, t) {
  if (e === "input" || e === "change") return qa(t);
}
function DS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Un = typeof Object.is == "function" ? Object.is : DS;
function $s(e, t) {
  if (Un(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ku.call(t, o) || !Un(e[o], t[o])) return !1;
  }
  return !0;
}
function ym(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vm(e, t) {
  var n = ym(e);
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
    n = ym(n);
  }
}
function Xy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Qy() {
  for (var e = window, t = fa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fa(e.document);
  }
  return t;
}
function Rf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function BS(e) {
  var t = Qy(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Xy(n.ownerDocument.documentElement, n)) {
    if (r !== null && Rf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = vm(n, i);
        var s = vm(
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
var FS = xr && "documentMode" in document && 11 >= document.documentMode, Ko = null, dd = null, ps = null, fd = !1;
function xm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fd || Ko == null || Ko !== fa(r) || (r = Ko, "selectionStart" in r && Rf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ps && $s(ps, r) || (ps = r, r = xa(dd, "onSelect"), 0 < r.length && (t = new kf("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ko)));
}
function Tl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Yo = { animationend: Tl("Animation", "AnimationEnd"), animationiteration: Tl("Animation", "AnimationIteration"), animationstart: Tl("Animation", "AnimationStart"), transitionend: Tl("Transition", "TransitionEnd") }, yu = {}, qy = {};
xr && (qy = document.createElement("div").style, "AnimationEvent" in window || (delete Yo.animationend.animation, delete Yo.animationiteration.animation, delete Yo.animationstart.animation), "TransitionEvent" in window || delete Yo.transitionend.transition);
function Za(e) {
  if (yu[e]) return yu[e];
  if (!Yo[e]) return e;
  var t = Yo[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in qy) return yu[e] = t[n];
  return e;
}
var Zy = Za("animationend"), Jy = Za("animationiteration"), ev = Za("animationstart"), tv = Za("transitionend"), nv = /* @__PURE__ */ new Map(), Sm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qr(e, t) {
  nv.set(e, t), Mo(t, [e]);
}
for (var vu = 0; vu < Sm.length; vu++) {
  var xu = Sm[vu], _S = xu.toLowerCase(), WS = xu[0].toUpperCase() + xu.slice(1);
  Qr(_S, "on" + WS);
}
Qr(Zy, "onAnimationEnd");
Qr(Jy, "onAnimationIteration");
Qr(ev, "onAnimationStart");
Qr("dblclick", "onDoubleClick");
Qr("focusin", "onFocus");
Qr("focusout", "onBlur");
Qr(tv, "onTransitionEnd");
pi("onMouseEnter", ["mouseout", "mouseover"]);
pi("onMouseLeave", ["mouseout", "mouseover"]);
pi("onPointerEnter", ["pointerout", "pointerover"]);
pi("onPointerLeave", ["pointerout", "pointerover"]);
Mo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), US = new Set("cancel close invalid load scroll toggle".split(" ").concat(ss));
function bm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, _x(r, t, void 0, e), e.currentTarget = null;
}
function rv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, c = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        bm(o, l, c), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, c = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        bm(o, l, c), i = a;
      }
    }
  }
  if (ma) throw e = ld, ma = !1, ld = null, e;
}
function et(e, t) {
  var n = t[yd];
  n === void 0 && (n = t[yd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ov(t, e, 2, !1), n.add(r));
}
function Su(e, t, n) {
  var r = 0;
  t && (r |= 4), ov(n, e, r, t);
}
var El = "_reactListening" + Math.random().toString(36).slice(2);
function js(e) {
  if (!e[El]) {
    e[El] = !0, dy.forEach(function(n) {
      n !== "selectionchange" && (US.has(n) || Su(n, !1, e), Su(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[El] || (t[El] = !0, Su("selectionchange", !1, t));
  }
}
function ov(e, t, n, r) {
  switch (_y(t)) {
    case 1:
      var o = rS;
      break;
    case 4:
      o = oS;
      break;
    default:
      o = wf;
  }
  n = o.bind(null, t, n, e), o = void 0, !sd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function bu(e, t, n, r, o) {
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
        if (s = po(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Ry(function() {
    var c = i, u = vf(n), p = [];
    e: {
      var v = nv.get(e);
      if (v !== void 0) {
        var d = kf, x = e;
        switch (e) {
          case "keypress":
            if (ql(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = xS;
            break;
          case "focusin":
            x = "focus", d = mu;
            break;
          case "focusout":
            x = "blur", d = mu;
            break;
          case "beforeblur":
          case "afterblur":
            d = mu;
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
            d = cm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = lS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = wS;
            break;
          case Zy:
          case Jy:
          case ev:
            d = uS;
            break;
          case tv:
            d = kS;
            break;
          case "scroll":
            d = iS;
            break;
          case "wheel":
            d = ES;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = fS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = dm;
        }
        var b = (t & 4) !== 0, C = !b && e === "scroll", y = b ? v !== null ? v + "Capture" : null : v;
        b = [];
        for (var h = c, S; h !== null; ) {
          S = h;
          var w = S.stateNode;
          if (S.tag === 5 && w !== null && (S = w, y !== null && (w = Es(h, y), w != null && b.push(As(h, w, S)))), C) break;
          h = h.return;
        }
        0 < b.length && (v = new d(v, x, null, n, u), p.push({ event: v, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", v && n !== od && (x = n.relatedTarget || n.fromElement) && (po(x) || x[Sr])) break e;
        if ((d || v) && (v = u.window === u ? u : (v = u.ownerDocument) ? v.defaultView || v.parentWindow : window, d ? (x = n.relatedTarget || n.toElement, d = c, x = x ? po(x) : null, x !== null && (C = $o(x), x !== C || x.tag !== 5 && x.tag !== 6) && (x = null)) : (d = null, x = c), d !== x)) {
          if (b = cm, w = "onMouseLeave", y = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (b = dm, w = "onPointerLeave", y = "onPointerEnter", h = "pointer"), C = d == null ? v : Go(d), S = x == null ? v : Go(x), v = new b(w, h + "leave", d, n, u), v.target = C, v.relatedTarget = S, w = null, po(u) === c && (b = new b(y, h + "enter", x, n, u), b.target = S, b.relatedTarget = C, w = b), C = w, d && x) t: {
            for (b = d, y = x, h = 0, S = b; S; S = zo(S)) h++;
            for (S = 0, w = y; w; w = zo(w)) S++;
            for (; 0 < h - S; ) b = zo(b), h--;
            for (; 0 < S - h; ) y = zo(y), S--;
            for (; h--; ) {
              if (b === y || y !== null && b === y.alternate) break t;
              b = zo(b), y = zo(y);
            }
            b = null;
          }
          else b = null;
          d !== null && wm(p, v, d, b, !1), x !== null && C !== null && wm(p, C, x, b, !0);
        }
      }
      e: {
        if (v = c ? Go(c) : window, d = v.nodeName && v.nodeName.toLowerCase(), d === "select" || d === "input" && v.type === "file") var E = AS;
        else if (mm(v)) if (Yy) E = zS;
        else {
          E = LS;
          var k = OS;
        }
        else (d = v.nodeName) && d.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = NS);
        if (E && (E = E(e, c))) {
          Ky(p, E, n, u);
          break e;
        }
        k && k(e, v, c), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && Ju(v, "number", v.value);
      }
      switch (k = c ? Go(c) : window, e) {
        case "focusin":
          (mm(k) || k.contentEditable === "true") && (Ko = k, dd = c, ps = null);
          break;
        case "focusout":
          ps = dd = Ko = null;
          break;
        case "mousedown":
          fd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fd = !1, xm(p, n, u);
          break;
        case "selectionchange":
          if (FS) break;
        case "keydown":
        case "keyup":
          xm(p, n, u);
      }
      var R;
      if (Ef) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Vo ? Hy(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Uy && n.locale !== "ko" && (Vo || T !== "onCompositionStart" ? T === "onCompositionEnd" && Vo && (R = Wy()) : (Or = u, Cf = "value" in Or ? Or.value : Or.textContent, Vo = !0)), k = xa(c, T), 0 < k.length && (T = new um(T, e, null, n, u), p.push({ event: T, listeners: k }), R ? T.data = R : (R = Vy(n), R !== null && (T.data = R)))), (R = PS ? IS(e, n) : MS(e, n)) && (c = xa(c, "onBeforeInput"), 0 < c.length && (u = new um("onBeforeInput", "beforeinput", null, n, u), p.push({ event: u, listeners: c }), u.data = R));
    }
    rv(p, t);
  });
}
function As(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Es(e, n), i != null && r.unshift(As(e, i, o)), i = Es(e, t), i != null && r.push(As(e, i, o))), e = e.return;
  }
  return r;
}
function zo(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && c !== null && (l = c, o ? (a = Es(n, i), a != null && s.unshift(As(n, a, l))) : o || (a = Es(n, i), a != null && s.push(As(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var HS = /\r\n?/g, VS = /\u0000|\uFFFD/g;
function Cm(e) {
  return (typeof e == "string" ? e : "" + e).replace(HS, `
`).replace(VS, "");
}
function Rl(e, t, n) {
  if (t = Cm(t), Cm(e) !== t && n) throw Error(K(425));
}
function Sa() {
}
var pd = null, md = null;
function hd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var gd = typeof setTimeout == "function" ? setTimeout : void 0, KS = typeof clearTimeout == "function" ? clearTimeout : void 0, km = typeof Promise == "function" ? Promise : void 0, YS = typeof queueMicrotask == "function" ? queueMicrotask : typeof km < "u" ? function(e) {
  return km.resolve(null).then(e).catch(GS);
} : gd;
function GS(e) {
  setTimeout(function() {
    throw e;
  });
}
function wu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Is(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Is(t);
}
function Fr(e) {
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
function Tm(e) {
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
var Mi = Math.random().toString(36).slice(2), Zn = "__reactFiber$" + Mi, Os = "__reactProps$" + Mi, Sr = "__reactContainer$" + Mi, yd = "__reactEvents$" + Mi, XS = "__reactListeners$" + Mi, QS = "__reactHandles$" + Mi;
function po(e) {
  var t = e[Zn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Sr] || n[Zn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Tm(e); e !== null; ) {
        if (n = e[Zn]) return n;
        e = Tm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function el(e) {
  return e = e[Zn] || e[Sr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Go(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(K(33));
}
function Ja(e) {
  return e[Os] || null;
}
var vd = [], Xo = -1;
function qr(e) {
  return { current: e };
}
function tt(e) {
  0 > Xo || (e.current = vd[Xo], vd[Xo] = null, Xo--);
}
function qe(e, t) {
  Xo++, vd[Xo] = e.current, e.current = t;
}
var Yr = {}, Wt = qr(Yr), Zt = qr(!1), bo = Yr;
function mi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Jt(e) {
  return e = e.childContextTypes, e != null;
}
function ba() {
  tt(Zt), tt(Wt);
}
function Em(e, t, n) {
  if (Wt.current !== Yr) throw Error(K(168));
  qe(Wt, t), qe(Zt, n);
}
function iv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(K(108, Ox(e) || "Unknown", o));
  return pt({}, n, r);
}
function wa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yr, bo = Wt.current, qe(Wt, e), qe(Zt, Zt.current), !0;
}
function Rm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(K(169));
  n ? (e = iv(e, t, bo), r.__reactInternalMemoizedMergedChildContext = e, tt(Zt), tt(Wt), qe(Wt, e)) : tt(Zt), qe(Zt, n);
}
var mr = null, ec = !1, Cu = !1;
function sv(e) {
  mr === null ? mr = [e] : mr.push(e);
}
function qS(e) {
  ec = !0, sv(e);
}
function Zr() {
  if (!Cu && mr !== null) {
    Cu = !0;
    var e = 0, t = Ge;
    try {
      var n = mr;
      for (Ge = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      mr = null, ec = !1;
    } catch (o) {
      throw mr !== null && (mr = mr.slice(e + 1)), $y(xf, Zr), o;
    } finally {
      Ge = t, Cu = !1;
    }
  }
  return null;
}
var Qo = [], qo = 0, Ca = null, ka = 0, bn = [], wn = 0, wo = null, gr = 1, yr = "";
function co(e, t) {
  Qo[qo++] = ka, Qo[qo++] = Ca, Ca = e, ka = t;
}
function lv(e, t, n) {
  bn[wn++] = gr, bn[wn++] = yr, bn[wn++] = wo, wo = e;
  var r = gr;
  e = yr;
  var o = 32 - _n(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - _n(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, gr = 1 << 32 - _n(t) + o | n << o | r, yr = i + e;
  } else gr = 1 << i | n << o | r, yr = e;
}
function Pf(e) {
  e.return !== null && (co(e, 1), lv(e, 1, 0));
}
function If(e) {
  for (; e === Ca; ) Ca = Qo[--qo], Qo[qo] = null, ka = Qo[--qo], Qo[qo] = null;
  for (; e === wo; ) wo = bn[--wn], bn[wn] = null, yr = bn[--wn], bn[wn] = null, gr = bn[--wn], bn[wn] = null;
}
var un = null, cn = null, st = !1, Fn = null;
function av(e, t) {
  var n = kn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Pm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, un = e, cn = Fr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, un = e, cn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = wo !== null ? { id: gr, overflow: yr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = kn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, un = e, cn = null, !0) : !1;
    default:
      return !1;
  }
}
function xd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Sd(e) {
  if (st) {
    var t = cn;
    if (t) {
      var n = t;
      if (!Pm(e, t)) {
        if (xd(e)) throw Error(K(418));
        t = Fr(n.nextSibling);
        var r = un;
        t && Pm(e, t) ? av(r, n) : (e.flags = e.flags & -4097 | 2, st = !1, un = e);
      }
    } else {
      if (xd(e)) throw Error(K(418));
      e.flags = e.flags & -4097 | 2, st = !1, un = e;
    }
  }
}
function Im(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  un = e;
}
function Pl(e) {
  if (e !== un) return !1;
  if (!st) return Im(e), st = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hd(e.type, e.memoizedProps)), t && (t = cn)) {
    if (xd(e)) throw cv(), Error(K(418));
    for (; t; ) av(e, t), t = Fr(t.nextSibling);
  }
  if (Im(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(K(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              cn = Fr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      cn = null;
    }
  } else cn = un ? Fr(e.stateNode.nextSibling) : null;
  return !0;
}
function cv() {
  for (var e = cn; e; ) e = Fr(e.nextSibling);
}
function hi() {
  cn = un = null, st = !1;
}
function Mf(e) {
  Fn === null ? Fn = [e] : Fn.push(e);
}
var ZS = Er.ReactCurrentBatchConfig;
function Ui(e, t, n) {
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
function Il(e, t) {
  throw e = Object.prototype.toString.call(t), Error(K(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Mm(e) {
  var t = e._init;
  return t(e._payload);
}
function uv(e) {
  function t(y, h) {
    if (e) {
      var S = y.deletions;
      S === null ? (y.deletions = [h], y.flags |= 16) : S.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), h = h.sibling;
    return null;
  }
  function r(y, h) {
    for (y = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? y.set(h.key, h) : y.set(h.index, h), h = h.sibling;
    return y;
  }
  function o(y, h) {
    return y = Hr(y, h), y.index = 0, y.sibling = null, y;
  }
  function i(y, h, S) {
    return y.index = S, e ? (S = y.alternate, S !== null ? (S = S.index, S < h ? (y.flags |= 2, h) : S) : (y.flags |= 2, h)) : (y.flags |= 1048576, h);
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function l(y, h, S, w) {
    return h === null || h.tag !== 6 ? (h = Mu(S, y.mode, w), h.return = y, h) : (h = o(h, S), h.return = y, h);
  }
  function a(y, h, S, w) {
    var E = S.type;
    return E === Ho ? u(y, h, S.props.children, w, S.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mr && Mm(E) === h.type) ? (w = o(h, S.props), w.ref = Ui(y, h, S), w.return = y, w) : (w = oa(S.type, S.key, S.props, null, y.mode, w), w.ref = Ui(y, h, S), w.return = y, w);
  }
  function c(y, h, S, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== S.containerInfo || h.stateNode.implementation !== S.implementation ? (h = $u(S, y.mode, w), h.return = y, h) : (h = o(h, S.children || []), h.return = y, h);
  }
  function u(y, h, S, w, E) {
    return h === null || h.tag !== 7 ? (h = vo(S, y.mode, w, E), h.return = y, h) : (h = o(h, S), h.return = y, h);
  }
  function p(y, h, S) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Mu("" + h, y.mode, S), h.return = y, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vl:
          return S = oa(h.type, h.key, h.props, null, y.mode, S), S.ref = Ui(y, null, h), S.return = y, S;
        case Uo:
          return h = $u(h, y.mode, S), h.return = y, h;
        case Mr:
          var w = h._init;
          return p(y, w(h._payload), S);
      }
      if (os(h) || Di(h)) return h = vo(h, y.mode, S, null), h.return = y, h;
      Il(y, h);
    }
    return null;
  }
  function v(y, h, S, w) {
    var E = h !== null ? h.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return E !== null ? null : l(y, h, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case vl:
          return S.key === E ? a(y, h, S, w) : null;
        case Uo:
          return S.key === E ? c(y, h, S, w) : null;
        case Mr:
          return E = S._init, v(
            y,
            h,
            E(S._payload),
            w
          );
      }
      if (os(S) || Di(S)) return E !== null ? null : u(y, h, S, w, null);
      Il(y, S);
    }
    return null;
  }
  function d(y, h, S, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return y = y.get(S) || null, l(h, y, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case vl:
          return y = y.get(w.key === null ? S : w.key) || null, a(h, y, w, E);
        case Uo:
          return y = y.get(w.key === null ? S : w.key) || null, c(h, y, w, E);
        case Mr:
          var k = w._init;
          return d(y, h, S, k(w._payload), E);
      }
      if (os(w) || Di(w)) return y = y.get(S) || null, u(h, y, w, E, null);
      Il(h, w);
    }
    return null;
  }
  function x(y, h, S, w) {
    for (var E = null, k = null, R = h, T = h = 0, A = null; R !== null && T < S.length; T++) {
      R.index > T ? (A = R, R = null) : A = R.sibling;
      var O = v(y, R, S[T], w);
      if (O === null) {
        R === null && (R = A);
        break;
      }
      e && R && O.alternate === null && t(y, R), h = i(O, h, T), k === null ? E = O : k.sibling = O, k = O, R = A;
    }
    if (T === S.length) return n(y, R), st && co(y, T), E;
    if (R === null) {
      for (; T < S.length; T++) R = p(y, S[T], w), R !== null && (h = i(R, h, T), k === null ? E = R : k.sibling = R, k = R);
      return st && co(y, T), E;
    }
    for (R = r(y, R); T < S.length; T++) A = d(R, y, T, S[T], w), A !== null && (e && A.alternate !== null && R.delete(A.key === null ? T : A.key), h = i(A, h, T), k === null ? E = A : k.sibling = A, k = A);
    return e && R.forEach(function(I) {
      return t(y, I);
    }), st && co(y, T), E;
  }
  function b(y, h, S, w) {
    var E = Di(S);
    if (typeof E != "function") throw Error(K(150));
    if (S = E.call(S), S == null) throw Error(K(151));
    for (var k = E = null, R = h, T = h = 0, A = null, O = S.next(); R !== null && !O.done; T++, O = S.next()) {
      R.index > T ? (A = R, R = null) : A = R.sibling;
      var I = v(y, R, O.value, w);
      if (I === null) {
        R === null && (R = A);
        break;
      }
      e && R && I.alternate === null && t(y, R), h = i(I, h, T), k === null ? E = I : k.sibling = I, k = I, R = A;
    }
    if (O.done) return n(
      y,
      R
    ), st && co(y, T), E;
    if (R === null) {
      for (; !O.done; T++, O = S.next()) O = p(y, O.value, w), O !== null && (h = i(O, h, T), k === null ? E = O : k.sibling = O, k = O);
      return st && co(y, T), E;
    }
    for (R = r(y, R); !O.done; T++, O = S.next()) O = d(R, y, T, O.value, w), O !== null && (e && O.alternate !== null && R.delete(O.key === null ? T : O.key), h = i(O, h, T), k === null ? E = O : k.sibling = O, k = O);
    return e && R.forEach(function(g) {
      return t(y, g);
    }), st && co(y, T), E;
  }
  function C(y, h, S, w) {
    if (typeof S == "object" && S !== null && S.type === Ho && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case vl:
          e: {
            for (var E = S.key, k = h; k !== null; ) {
              if (k.key === E) {
                if (E = S.type, E === Ho) {
                  if (k.tag === 7) {
                    n(y, k.sibling), h = o(k, S.props.children), h.return = y, y = h;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mr && Mm(E) === k.type) {
                  n(y, k.sibling), h = o(k, S.props), h.ref = Ui(y, k, S), h.return = y, y = h;
                  break e;
                }
                n(y, k);
                break;
              } else t(y, k);
              k = k.sibling;
            }
            S.type === Ho ? (h = vo(S.props.children, y.mode, w, S.key), h.return = y, y = h) : (w = oa(S.type, S.key, S.props, null, y.mode, w), w.ref = Ui(y, h, S), w.return = y, y = w);
          }
          return s(y);
        case Uo:
          e: {
            for (k = S.key; h !== null; ) {
              if (h.key === k) if (h.tag === 4 && h.stateNode.containerInfo === S.containerInfo && h.stateNode.implementation === S.implementation) {
                n(y, h.sibling), h = o(h, S.children || []), h.return = y, y = h;
                break e;
              } else {
                n(y, h);
                break;
              }
              else t(y, h);
              h = h.sibling;
            }
            h = $u(S, y.mode, w), h.return = y, y = h;
          }
          return s(y);
        case Mr:
          return k = S._init, C(y, h, k(S._payload), w);
      }
      if (os(S)) return x(y, h, S, w);
      if (Di(S)) return b(y, h, S, w);
      Il(y, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, h !== null && h.tag === 6 ? (n(y, h.sibling), h = o(h, S), h.return = y, y = h) : (n(y, h), h = Mu(S, y.mode, w), h.return = y, y = h), s(y)) : n(y, h);
  }
  return C;
}
var gi = uv(!0), dv = uv(!1), Ta = qr(null), Ea = null, Zo = null, $f = null;
function jf() {
  $f = Zo = Ea = null;
}
function Af(e) {
  var t = Ta.current;
  tt(Ta), e._currentValue = t;
}
function bd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ai(e, t) {
  Ea = e, $f = Zo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qt = !0), e.firstContext = null);
}
function Rn(e) {
  var t = e._currentValue;
  if ($f !== e) if (e = { context: e, memoizedValue: t, next: null }, Zo === null) {
    if (Ea === null) throw Error(K(308));
    Zo = e, Ea.dependencies = { lanes: 0, firstContext: e };
  } else Zo = Zo.next = e;
  return t;
}
var mo = null;
function Of(e) {
  mo === null ? mo = [e] : mo.push(e);
}
function fv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Of(t)) : (n.next = o.next, o.next = n), t.interleaved = n, br(e, r);
}
function br(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var $r = !1;
function Lf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function pv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function vr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function _r(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Ne & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, br(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Of(r)) : (t.next = o.next, o.next = t), r.interleaved = t, br(e, n);
}
function Zl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Sf(e, n);
  }
}
function $m(e, t) {
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
function Ra(e, t, n, r) {
  var o = e.updateQueue;
  $r = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, c = a.next;
    a.next = null, s === null ? i = c : s.next = c, s = a;
    var u = e.alternate;
    u !== null && (u = u.updateQueue, l = u.lastBaseUpdate, l !== s && (l === null ? u.firstBaseUpdate = c : l.next = c, u.lastBaseUpdate = a));
  }
  if (i !== null) {
    var p = o.baseState;
    s = 0, u = c = a = null, l = i;
    do {
      var v = l.lane, d = l.eventTime;
      if ((r & v) === v) {
        u !== null && (u = u.next = {
          eventTime: d,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var x = e, b = l;
          switch (v = t, d = n, b.tag) {
            case 1:
              if (x = b.payload, typeof x == "function") {
                p = x.call(d, p, v);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = b.payload, v = typeof x == "function" ? x.call(d, p, v) : x, v == null) break e;
              p = pt({}, p, v);
              break e;
            case 2:
              $r = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [l] : v.push(l));
      } else d = { eventTime: d, lane: v, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, u === null ? (c = u = d, a = p) : u = u.next = d, s |= v;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
      }
    } while (!0);
    if (u === null && (a = p), o.baseState = a, o.firstBaseUpdate = c, o.lastBaseUpdate = u, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ko |= s, e.lanes = s, e.memoizedState = p;
  }
}
function jm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(K(191, o));
      o.call(r);
    }
  }
}
var tl = {}, nr = qr(tl), Ls = qr(tl), Ns = qr(tl);
function ho(e) {
  if (e === tl) throw Error(K(174));
  return e;
}
function Nf(e, t) {
  switch (qe(Ns, t), qe(Ls, e), qe(nr, tl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : td(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = td(t, e);
  }
  tt(nr), qe(nr, t);
}
function yi() {
  tt(nr), tt(Ls), tt(Ns);
}
function mv(e) {
  ho(Ns.current);
  var t = ho(nr.current), n = td(t, e.type);
  t !== n && (qe(Ls, e), qe(nr, n));
}
function zf(e) {
  Ls.current === e && (tt(nr), tt(Ls));
}
var ut = qr(0);
function Pa(e) {
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
var ku = [];
function Df() {
  for (var e = 0; e < ku.length; e++) ku[e]._workInProgressVersionPrimary = null;
  ku.length = 0;
}
var Jl = Er.ReactCurrentDispatcher, Tu = Er.ReactCurrentBatchConfig, Co = 0, dt = null, Tt = null, Rt = null, Ia = !1, ms = !1, zs = 0, JS = 0;
function zt() {
  throw Error(K(321));
}
function Bf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Un(e[n], t[n])) return !1;
  return !0;
}
function Ff(e, t, n, r, o, i) {
  if (Co = i, dt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jl.current = e === null || e.memoizedState === null ? rb : ob, e = n(r, o), ms) {
    i = 0;
    do {
      if (ms = !1, zs = 0, 25 <= i) throw Error(K(301));
      i += 1, Rt = Tt = null, t.updateQueue = null, Jl.current = ib, e = n(r, o);
    } while (ms);
  }
  if (Jl.current = Ma, t = Tt !== null && Tt.next !== null, Co = 0, Rt = Tt = dt = null, Ia = !1, t) throw Error(K(300));
  return e;
}
function _f() {
  var e = zs !== 0;
  return zs = 0, e;
}
function Gn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Rt === null ? dt.memoizedState = Rt = e : Rt = Rt.next = e, Rt;
}
function Pn() {
  if (Tt === null) {
    var e = dt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Tt.next;
  var t = Rt === null ? dt.memoizedState : Rt.next;
  if (t !== null) Rt = t, Tt = e;
  else {
    if (e === null) throw Error(K(310));
    Tt = e, e = { memoizedState: Tt.memoizedState, baseState: Tt.baseState, baseQueue: Tt.baseQueue, queue: Tt.queue, next: null }, Rt === null ? dt.memoizedState = Rt = e : Rt = Rt.next = e;
  }
  return Rt;
}
function Ds(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Eu(e) {
  var t = Pn(), n = t.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = e;
  var r = Tt, o = r.baseQueue, i = n.pending;
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
      if ((Co & u) === u) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var p = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (l = a = p, s = r) : a = a.next = p, dt.lanes |= u, ko |= u;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? s = r : a.next = l, Un(r, t.memoizedState) || (qt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, dt.lanes |= i, ko |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ru(e) {
  var t = Pn(), n = t.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Un(i, t.memoizedState) || (qt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function hv() {
}
function gv(e, t) {
  var n = dt, r = Pn(), o = t(), i = !Un(r.memoizedState, o);
  if (i && (r.memoizedState = o, qt = !0), r = r.queue, Wf(xv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Rt !== null && Rt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Bs(9, vv.bind(null, n, r, o, t), void 0, null), It === null) throw Error(K(349));
    Co & 30 || yv(n, t, o);
  }
  return o;
}
function yv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = dt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, dt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function vv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Sv(t) && bv(e);
}
function xv(e, t, n) {
  return n(function() {
    Sv(t) && bv(e);
  });
}
function Sv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Un(e, n);
  } catch {
    return !0;
  }
}
function bv(e) {
  var t = br(e, 1);
  t !== null && Wn(t, e, 1, -1);
}
function Am(e) {
  var t = Gn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ds, lastRenderedState: e }, t.queue = e, e = e.dispatch = nb.bind(null, dt, e), [t.memoizedState, e];
}
function Bs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = dt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, dt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function wv() {
  return Pn().memoizedState;
}
function ea(e, t, n, r) {
  var o = Gn();
  dt.flags |= e, o.memoizedState = Bs(1 | t, n, void 0, r === void 0 ? null : r);
}
function tc(e, t, n, r) {
  var o = Pn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Tt !== null) {
    var s = Tt.memoizedState;
    if (i = s.destroy, r !== null && Bf(r, s.deps)) {
      o.memoizedState = Bs(t, n, i, r);
      return;
    }
  }
  dt.flags |= e, o.memoizedState = Bs(1 | t, n, i, r);
}
function Om(e, t) {
  return ea(8390656, 8, e, t);
}
function Wf(e, t) {
  return tc(2048, 8, e, t);
}
function Cv(e, t) {
  return tc(4, 2, e, t);
}
function kv(e, t) {
  return tc(4, 4, e, t);
}
function Tv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ev(e, t, n) {
  return n = n != null ? n.concat([e]) : null, tc(4, 4, Tv.bind(null, t, e), n);
}
function Uf() {
}
function Rv(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pv(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Iv(e, t, n) {
  return Co & 21 ? (Un(n, t) || (n = Oy(), dt.lanes |= n, ko |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qt = !0), e.memoizedState = n);
}
function eb(e, t) {
  var n = Ge;
  Ge = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Tu.transition;
  Tu.transition = {};
  try {
    e(!1), t();
  } finally {
    Ge = n, Tu.transition = r;
  }
}
function Mv() {
  return Pn().memoizedState;
}
function tb(e, t, n) {
  var r = Ur(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $v(e)) jv(t, n);
  else if (n = fv(e, t, n, r), n !== null) {
    var o = Yt();
    Wn(n, e, r, o), Av(n, t, r);
  }
}
function nb(e, t, n) {
  var r = Ur(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($v(e)) jv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Un(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Of(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = fv(e, t, o, r), n !== null && (o = Yt(), Wn(n, e, r, o), Av(n, t, r));
  }
}
function $v(e) {
  var t = e.alternate;
  return e === dt || t !== null && t === dt;
}
function jv(e, t) {
  ms = Ia = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Av(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Sf(e, n);
  }
}
var Ma = { readContext: Rn, useCallback: zt, useContext: zt, useEffect: zt, useImperativeHandle: zt, useInsertionEffect: zt, useLayoutEffect: zt, useMemo: zt, useReducer: zt, useRef: zt, useState: zt, useDebugValue: zt, useDeferredValue: zt, useTransition: zt, useMutableSource: zt, useSyncExternalStore: zt, useId: zt, unstable_isNewReconciler: !1 }, rb = { readContext: Rn, useCallback: function(e, t) {
  return Gn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Rn, useEffect: Om, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ea(
    4194308,
    4,
    Tv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ea(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ea(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Gn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Gn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = tb.bind(null, dt, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Gn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Am, useDebugValue: Uf, useDeferredValue: function(e) {
  return Gn().memoizedState = e;
}, useTransition: function() {
  var e = Am(!1), t = e[0];
  return e = eb.bind(null, e[1]), Gn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = dt, o = Gn();
  if (st) {
    if (n === void 0) throw Error(K(407));
    n = n();
  } else {
    if (n = t(), It === null) throw Error(K(349));
    Co & 30 || yv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Om(xv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Bs(9, vv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Gn(), t = It.identifierPrefix;
  if (st) {
    var n = yr, r = gr;
    n = (r & ~(1 << 32 - _n(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = zs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = JS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ob = {
  readContext: Rn,
  useCallback: Rv,
  useContext: Rn,
  useEffect: Wf,
  useImperativeHandle: Ev,
  useInsertionEffect: Cv,
  useLayoutEffect: kv,
  useMemo: Pv,
  useReducer: Eu,
  useRef: wv,
  useState: function() {
    return Eu(Ds);
  },
  useDebugValue: Uf,
  useDeferredValue: function(e) {
    var t = Pn();
    return Iv(t, Tt.memoizedState, e);
  },
  useTransition: function() {
    var e = Eu(Ds)[0], t = Pn().memoizedState;
    return [e, t];
  },
  useMutableSource: hv,
  useSyncExternalStore: gv,
  useId: Mv,
  unstable_isNewReconciler: !1
}, ib = { readContext: Rn, useCallback: Rv, useContext: Rn, useEffect: Wf, useImperativeHandle: Ev, useInsertionEffect: Cv, useLayoutEffect: kv, useMemo: Pv, useReducer: Ru, useRef: wv, useState: function() {
  return Ru(Ds);
}, useDebugValue: Uf, useDeferredValue: function(e) {
  var t = Pn();
  return Tt === null ? t.memoizedState = e : Iv(t, Tt.memoizedState, e);
}, useTransition: function() {
  var e = Ru(Ds)[0], t = Pn().memoizedState;
  return [e, t];
}, useMutableSource: hv, useSyncExternalStore: gv, useId: Mv, unstable_isNewReconciler: !1 };
function Dn(e, t) {
  if (e && e.defaultProps) {
    t = pt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wd(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : pt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var nc = { isMounted: function(e) {
  return (e = e._reactInternals) ? $o(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Yt(), o = Ur(e), i = vr(r, o);
  i.payload = t, n != null && (i.callback = n), t = _r(e, i, o), t !== null && (Wn(t, e, o, r), Zl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Yt(), o = Ur(e), i = vr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = _r(e, i, o), t !== null && (Wn(t, e, o, r), Zl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Yt(), r = Ur(e), o = vr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = _r(e, o, r), t !== null && (Wn(t, e, r, n), Zl(t, e, r));
} };
function Lm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !$s(n, r) || !$s(o, i) : !0;
}
function Ov(e, t, n) {
  var r = !1, o = Yr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Rn(i) : (o = Jt(t) ? bo : Wt.current, r = t.contextTypes, i = (r = r != null) ? mi(e, o) : Yr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = nc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Nm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nc.enqueueReplaceState(t, t.state, null);
}
function Cd(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Lf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Rn(i) : (i = Jt(t) ? bo : Wt.current, o.context = mi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (wd(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && nc.enqueueReplaceState(o, o.state, null), Ra(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function vi(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ax(r), r = r.return;
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
function kd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var sb = typeof WeakMap == "function" ? WeakMap : Map;
function Lv(e, t, n) {
  n = vr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ja || (ja = !0, Od = r), kd(e, t);
  }, n;
}
function Nv(e, t, n) {
  n = vr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      kd(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    kd(e, t), typeof r != "function" && (Wr === null ? Wr = /* @__PURE__ */ new Set([this]) : Wr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function zm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sb();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Sb.bind(null, e, t, n), t.then(e, e));
}
function Dm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vr(-1, 1), t.tag = 2, _r(n, t, 1))), n.lanes |= 1), e);
}
var lb = Er.ReactCurrentOwner, qt = !1;
function Ht(e, t, n, r) {
  t.child = e === null ? dv(t, null, n, r) : gi(t, e.child, n, r);
}
function Fm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ai(t, o), r = Ff(e, t, n, r, i, o), n = _f(), e !== null && !qt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wr(e, t, o)) : (st && n && Pf(t), t.flags |= 1, Ht(e, t, r, o), t.child);
}
function _m(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !qf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, zv(e, t, i, r, o)) : (e = oa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $s, n(s, r) && e.ref === t.ref) return wr(e, t, o);
  }
  return t.flags |= 1, e = Hr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function zv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($s(i, r) && e.ref === t.ref) if (qt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (qt = !0);
    else return t.lanes = e.lanes, wr(e, t, o);
  }
  return Td(e, t, n, r, o);
}
function Dv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(ei, sn), sn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, qe(ei, sn), sn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, qe(ei, sn), sn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, qe(ei, sn), sn |= r;
  return Ht(e, t, o, n), t.child;
}
function Bv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Td(e, t, n, r, o) {
  var i = Jt(n) ? bo : Wt.current;
  return i = mi(t, i), ai(t, o), n = Ff(e, t, n, r, i, o), r = _f(), e !== null && !qt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wr(e, t, o)) : (st && r && Pf(t), t.flags |= 1, Ht(e, t, n, o), t.child);
}
function Wm(e, t, n, r, o) {
  if (Jt(n)) {
    var i = !0;
    wa(t);
  } else i = !1;
  if (ai(t, o), t.stateNode === null) ta(e, t), Ov(t, n, r), Cd(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Rn(c) : (c = Jt(n) ? bo : Wt.current, c = mi(t, c));
    var u = n.getDerivedStateFromProps, p = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== c) && Nm(t, s, r, c), $r = !1;
    var v = t.memoizedState;
    s.state = v, Ra(t, r, s, o), a = t.memoizedState, l !== r || v !== a || Zt.current || $r ? (typeof u == "function" && (wd(t, n, u, r), a = t.memoizedState), (l = $r || Lm(t, n, l, r, v, a, c)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = c, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, pv(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Dn(t.type, l), s.props = c, p = t.pendingProps, v = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Rn(a) : (a = Jt(n) ? bo : Wt.current, a = mi(t, a));
    var d = n.getDerivedStateFromProps;
    (u = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || v !== a) && Nm(t, s, r, a), $r = !1, v = t.memoizedState, s.state = v, Ra(t, r, s, o);
    var x = t.memoizedState;
    l !== p || v !== x || Zt.current || $r ? (typeof d == "function" && (wd(t, n, d, r), x = t.memoizedState), (c = $r || Lm(t, n, c, r, v, x, a) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ed(e, t, n, r, i, o);
}
function Ed(e, t, n, r, o, i) {
  Bv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Rm(t, n, !1), wr(e, t, i);
  r = t.stateNode, lb.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = gi(t, e.child, null, i), t.child = gi(t, null, l, i)) : Ht(e, t, l, i), t.memoizedState = r.state, o && Rm(t, n, !0), t.child;
}
function Fv(e) {
  var t = e.stateNode;
  t.pendingContext ? Em(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Em(e, t.context, !1), Nf(e, t.containerInfo);
}
function Um(e, t, n, r, o) {
  return hi(), Mf(o), t.flags |= 256, Ht(e, t, n, r), t.child;
}
var Rd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _v(e, t, n) {
  var r = t.pendingProps, o = ut.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), qe(ut, o & 1), e === null)
    return Sd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = ic(s, r, 0, null), e = vo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Pd(n), t.memoizedState = Rd, e) : Hf(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return ab(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Hr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Hr(l, i) : (i = vo(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Pd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Rd, r;
  }
  return i = e.child, e = i.sibling, r = Hr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Hf(e, t) {
  return t = ic({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ml(e, t, n, r) {
  return r !== null && Mf(r), gi(t, e.child, null, n), e = Hf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ab(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Pu(Error(K(422))), Ml(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ic({ mode: "visible", children: r.children }, o, 0, null), i = vo(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && gi(t, e.child, null, s), t.child.memoizedState = Pd(s), t.memoizedState = Rd, i);
  if (!(t.mode & 1)) return Ml(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(K(419)), r = Pu(i, r, void 0), Ml(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, qt || l) {
    if (r = It, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, br(e, o), Wn(r, e, o, -1));
    }
    return Qf(), r = Pu(Error(K(421))), Ml(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = bb.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, cn = Fr(o.nextSibling), un = t, st = !0, Fn = null, e !== null && (bn[wn++] = gr, bn[wn++] = yr, bn[wn++] = wo, gr = e.id, yr = e.overflow, wo = t), t = Hf(t, r.children), t.flags |= 4096, t);
}
function Hm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bd(e.return, t, n);
}
function Iu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Wv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ht(e, t, r.children, n), r = ut.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Hm(e, n, t);
      else if (e.tag === 19) Hm(e, n, t);
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
  if (qe(ut, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Pa(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Iu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Pa(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Iu(t, !0, n, null, i);
      break;
    case "together":
      Iu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ta(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function wr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ko |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(K(153));
  if (t.child !== null) {
    for (e = t.child, n = Hr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Hr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function cb(e, t, n) {
  switch (t.tag) {
    case 3:
      Fv(t), hi();
      break;
    case 5:
      mv(t);
      break;
    case 1:
      Jt(t.type) && wa(t);
      break;
    case 4:
      Nf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      qe(Ta, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (qe(ut, ut.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? _v(e, t, n) : (qe(ut, ut.current & 1), e = wr(e, t, n), e !== null ? e.sibling : null);
      qe(ut, ut.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Wv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), qe(ut, ut.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dv(e, t, n);
  }
  return wr(e, t, n);
}
var Uv, Id, Hv, Vv;
Uv = function(e, t) {
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
Id = function() {
};
Hv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, ho(nr.current);
    var i = null;
    switch (n) {
      case "input":
        o = qu(e, o), r = qu(e, r), i = [];
        break;
      case "select":
        o = pt({}, o, { value: void 0 }), r = pt({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ed(e, o), r = ed(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Sa);
    }
    nd(n, r);
    var s;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var l = o[c];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ks.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (l = o != null ? o[c] : void 0, r.hasOwnProperty(c) && a !== l && (a != null || l != null)) if (c === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ks.hasOwnProperty(c) ? (a != null && c === "onScroll" && et("scroll", e), i || l === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Vv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hi(e, t) {
  if (!st) switch (e.tailMode) {
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
function Dt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function ub(e, t, n) {
  var r = t.pendingProps;
  switch (If(t), t.tag) {
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
      return Dt(t), null;
    case 1:
      return Jt(t.type) && ba(), Dt(t), null;
    case 3:
      return r = t.stateNode, yi(), tt(Zt), tt(Wt), Df(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Pl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Fn !== null && (zd(Fn), Fn = null))), Id(e, t), Dt(t), null;
    case 5:
      zf(t);
      var o = ho(Ns.current);
      if (n = t.type, e !== null && t.stateNode != null) Hv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(K(166));
          return Dt(t), null;
        }
        if (e = ho(nr.current), Pl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Zn] = t, r[Os] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              et("cancel", r), et("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              et("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ss.length; o++) et(ss[o], r);
              break;
            case "source":
              et("error", r);
              break;
            case "img":
            case "image":
            case "link":
              et(
                "error",
                r
              ), et("load", r);
              break;
            case "details":
              et("toggle", r);
              break;
            case "input":
              Jp(r, i), et("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, et("invalid", r);
              break;
            case "textarea":
              tm(r, i), et("invalid", r);
          }
          nd(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Rl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Rl(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : ks.hasOwnProperty(s) && l != null && s === "onScroll" && et("scroll", r);
          }
          switch (n) {
            case "input":
              xl(r), em(r, i, !0);
              break;
            case "textarea":
              xl(r), nm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Sa);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xy(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Zn] = t, e[Os] = r, Uv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = rd(n, r), n) {
              case "dialog":
                et("cancel", e), et("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                et("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ss.length; o++) et(ss[o], e);
                o = r;
                break;
              case "source":
                et("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                et(
                  "error",
                  e
                ), et("load", e), o = r;
                break;
              case "details":
                et("toggle", e), o = r;
                break;
              case "input":
                Jp(e, r), o = qu(e, r), et("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = pt({}, r, { value: void 0 }), et("invalid", e);
                break;
              case "textarea":
                tm(e, r), o = ed(e, r), et("invalid", e);
                break;
              default:
                o = r;
            }
            nd(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? wy(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Sy(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ts(e, a) : typeof a == "number" && Ts(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ks.hasOwnProperty(i) ? a != null && i === "onScroll" && et("scroll", e) : a != null && mf(e, i, a, s));
            }
            switch (n) {
              case "input":
                xl(e), em(e, r, !1);
                break;
              case "textarea":
                xl(e), nm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Kr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? oi(e, !!r.multiple, i, !1) : r.defaultValue != null && oi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Sa);
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
      return Dt(t), null;
    case 6:
      if (e && t.stateNode != null) Vv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(K(166));
        if (n = ho(Ns.current), ho(nr.current), Pl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Zn] = t, (i = r.nodeValue !== n) && (e = un, e !== null)) switch (e.tag) {
            case 3:
              Rl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Rl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Zn] = t, t.stateNode = r;
      }
      return Dt(t), null;
    case 13:
      if (tt(ut), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (st && cn !== null && t.mode & 1 && !(t.flags & 128)) cv(), hi(), t.flags |= 98560, i = !1;
        else if (i = Pl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(K(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(K(317));
            i[Zn] = t;
          } else hi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Dt(t), i = !1;
        } else Fn !== null && (zd(Fn), Fn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ut.current & 1 ? Et === 0 && (Et = 3) : Qf())), t.updateQueue !== null && (t.flags |= 4), Dt(t), null);
    case 4:
      return yi(), Id(e, t), e === null && js(t.stateNode.containerInfo), Dt(t), null;
    case 10:
      return Af(t.type._context), Dt(t), null;
    case 17:
      return Jt(t.type) && ba(), Dt(t), null;
    case 19:
      if (tt(ut), i = t.memoizedState, i === null) return Dt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Hi(i, !1);
      else {
        if (Et !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Pa(e), s !== null) {
            for (t.flags |= 128, Hi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return qe(ut, ut.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && vt() > xi && (t.flags |= 128, r = !0, Hi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Pa(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !st) return Dt(t), null;
        } else 2 * vt() - i.renderingStartTime > xi && n !== 1073741824 && (t.flags |= 128, r = !0, Hi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = vt(), t.sibling = null, n = ut.current, qe(ut, r ? n & 1 | 2 : n & 1), t) : (Dt(t), null);
    case 22:
    case 23:
      return Xf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? sn & 1073741824 && (Dt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Dt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(K(156, t.tag));
}
function db(e, t) {
  switch (If(t), t.tag) {
    case 1:
      return Jt(t.type) && ba(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return yi(), tt(Zt), tt(Wt), Df(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return zf(t), null;
    case 13:
      if (tt(ut), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(K(340));
        hi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return tt(ut), null;
    case 4:
      return yi(), null;
    case 10:
      return Af(t.type._context), null;
    case 22:
    case 23:
      return Xf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $l = !1, _t = !1, fb = typeof WeakSet == "function" ? WeakSet : Set, te = null;
function Jo(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    mt(e, t, r);
  }
  else n.current = null;
}
function Md(e, t, n) {
  try {
    n();
  } catch (r) {
    mt(e, t, r);
  }
}
var Vm = !1;
function pb(e, t) {
  if (pd = ya, e = Qy(), Rf(e)) {
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
        var s = 0, l = -1, a = -1, c = 0, u = 0, p = e, v = null;
        t: for (; ; ) {
          for (var d; p !== n || o !== 0 && p.nodeType !== 3 || (l = s + o), p !== i || r !== 0 && p.nodeType !== 3 || (a = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (d = p.firstChild) !== null; )
            v = p, p = d;
          for (; ; ) {
            if (p === e) break t;
            if (v === n && ++c === o && (l = s), v === i && ++u === r && (a = s), (d = p.nextSibling) !== null) break;
            p = v, v = p.parentNode;
          }
          p = d;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (md = { focusedElem: e, selectionRange: n }, ya = !1, te = t; te !== null; ) if (t = te, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, te = e;
  else for (; te !== null; ) {
    t = te;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var b = x.memoizedProps, C = x.memoizedState, y = t.stateNode, h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? b : Dn(t.type, b), C);
            y.__reactInternalSnapshotBeforeUpdate = h;
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
      mt(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, te = e;
      break;
    }
    te = t.return;
  }
  return x = Vm, Vm = !1, x;
}
function hs(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Md(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function rc(e, t) {
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
function $d(e) {
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
function Kv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Kv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Zn], delete t[Os], delete t[yd], delete t[XS], delete t[QS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Yv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Km(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function jd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Sa));
  else if (r !== 4 && (e = e.child, e !== null)) for (jd(e, t, n), e = e.sibling; e !== null; ) jd(e, t, n), e = e.sibling;
}
function Ad(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ad(e, t, n), e = e.sibling; e !== null; ) Ad(e, t, n), e = e.sibling;
}
var jt = null, Bn = !1;
function Pr(e, t, n) {
  for (n = n.child; n !== null; ) Gv(e, t, n), n = n.sibling;
}
function Gv(e, t, n) {
  if (tr && typeof tr.onCommitFiberUnmount == "function") try {
    tr.onCommitFiberUnmount(Xa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      _t || Jo(n, t);
    case 6:
      var r = jt, o = Bn;
      jt = null, Pr(e, t, n), jt = r, Bn = o, jt !== null && (Bn ? (e = jt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : jt.removeChild(n.stateNode));
      break;
    case 18:
      jt !== null && (Bn ? (e = jt, n = n.stateNode, e.nodeType === 8 ? wu(e.parentNode, n) : e.nodeType === 1 && wu(e, n), Is(e)) : wu(jt, n.stateNode));
      break;
    case 4:
      r = jt, o = Bn, jt = n.stateNode.containerInfo, Bn = !0, Pr(e, t, n), jt = r, Bn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!_t && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Md(n, t, s), o = o.next;
        } while (o !== r);
      }
      Pr(e, t, n);
      break;
    case 1:
      if (!_t && (Jo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        mt(n, t, l);
      }
      Pr(e, t, n);
      break;
    case 21:
      Pr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (_t = (r = _t) || n.memoizedState !== null, Pr(e, t, n), _t = r) : Pr(e, t, n);
      break;
    default:
      Pr(e, t, n);
  }
}
function Ym(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fb()), t.forEach(function(r) {
      var o = wb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function On(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            jt = l.stateNode, Bn = !1;
            break e;
          case 3:
            jt = l.stateNode.containerInfo, Bn = !0;
            break e;
          case 4:
            jt = l.stateNode.containerInfo, Bn = !0;
            break e;
        }
        l = l.return;
      }
      if (jt === null) throw Error(K(160));
      Gv(i, s, o), jt = null, Bn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (c) {
      mt(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xv(t, e), t = t.sibling;
}
function Xv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (On(t, e), Vn(e), r & 4) {
        try {
          hs(3, e, e.return), rc(3, e);
        } catch (b) {
          mt(e, e.return, b);
        }
        try {
          hs(5, e, e.return);
        } catch (b) {
          mt(e, e.return, b);
        }
      }
      break;
    case 1:
      On(t, e), Vn(e), r & 512 && n !== null && Jo(n, n.return);
      break;
    case 5:
      if (On(t, e), Vn(e), r & 512 && n !== null && Jo(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ts(o, "");
        } catch (b) {
          mt(e, e.return, b);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && yy(o, i), rd(l, s);
          var c = rd(l, i);
          for (s = 0; s < a.length; s += 2) {
            var u = a[s], p = a[s + 1];
            u === "style" ? wy(o, p) : u === "dangerouslySetInnerHTML" ? Sy(o, p) : u === "children" ? Ts(o, p) : mf(o, u, p, c);
          }
          switch (l) {
            case "input":
              Zu(o, i);
              break;
            case "textarea":
              vy(o, i);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var d = i.value;
              d != null ? oi(o, !!i.multiple, d, !1) : v !== !!i.multiple && (i.defaultValue != null ? oi(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : oi(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Os] = i;
        } catch (b) {
          mt(e, e.return, b);
        }
      }
      break;
    case 6:
      if (On(t, e), Vn(e), r & 4) {
        if (e.stateNode === null) throw Error(K(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (b) {
          mt(e, e.return, b);
        }
      }
      break;
    case 3:
      if (On(t, e), Vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Is(t.containerInfo);
      } catch (b) {
        mt(e, e.return, b);
      }
      break;
    case 4:
      On(t, e), Vn(e);
      break;
    case 13:
      On(t, e), Vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Yf = vt())), r & 4 && Ym(e);
      break;
    case 22:
      if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (_t = (c = _t) || u, On(t, e), _t = c) : On(t, e), Vn(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1) for (te = e, u = e.child; u !== null; ) {
          for (p = te = u; te !== null; ) {
            switch (v = te, d = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                hs(4, v, v.return);
                break;
              case 1:
                Jo(v, v.return);
                var x = v.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (b) {
                    mt(r, n, b);
                  }
                }
                break;
              case 5:
                Jo(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Xm(p);
                  continue;
                }
            }
            d !== null ? (d.return = v, te = d) : Xm(p);
          }
          u = u.sibling;
        }
        e: for (u = null, p = e; ; ) {
          if (p.tag === 5) {
            if (u === null) {
              u = p;
              try {
                o = p.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode, a = p.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = by("display", s));
              } catch (b) {
                mt(e, e.return, b);
              }
            }
          } else if (p.tag === 6) {
            if (u === null) try {
              p.stateNode.nodeValue = c ? "" : p.memoizedProps;
            } catch (b) {
              mt(e, e.return, b);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            u === p && (u = null), p = p.return;
          }
          u === p && (u = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      On(t, e), Vn(e), r & 4 && Ym(e);
      break;
    case 21:
      break;
    default:
      On(
        t,
        e
      ), Vn(e);
  }
}
function Vn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yv(n)) {
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
          r.flags & 32 && (Ts(o, ""), r.flags &= -33);
          var i = Km(e);
          Ad(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Km(e);
          jd(e, l, s);
          break;
        default:
          throw Error(K(161));
      }
    } catch (a) {
      mt(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mb(e, t, n) {
  te = e, Qv(e);
}
function Qv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; te !== null; ) {
    var o = te, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || $l;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || _t;
        l = $l;
        var c = _t;
        if ($l = s, (_t = a) && !c) for (te = o; te !== null; ) s = te, a = s.child, s.tag === 22 && s.memoizedState !== null ? Qm(o) : a !== null ? (a.return = s, te = a) : Qm(o);
        for (; i !== null; ) te = i, Qv(i), i = i.sibling;
        te = o, $l = l, _t = c;
      }
      Gm(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, te = i) : Gm(e);
  }
}
function Gm(e) {
  for (; te !== null; ) {
    var t = te;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            _t || rc(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !_t) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Dn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && jm(t, i, r);
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
              jm(t, s, n);
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
                  var p = u.dehydrated;
                  p !== null && Is(p);
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
        _t || t.flags & 512 && $d(t);
      } catch (v) {
        mt(t, t.return, v);
      }
    }
    if (t === e) {
      te = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, te = n;
      break;
    }
    te = t.return;
  }
}
function Xm(e) {
  for (; te !== null; ) {
    var t = te;
    if (t === e) {
      te = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, te = n;
      break;
    }
    te = t.return;
  }
}
function Qm(e) {
  for (; te !== null; ) {
    var t = te;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            rc(4, t);
          } catch (a) {
            mt(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              mt(t, o, a);
            }
          }
          var i = t.return;
          try {
            $d(t);
          } catch (a) {
            mt(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            $d(t);
          } catch (a) {
            mt(t, s, a);
          }
      }
    } catch (a) {
      mt(t, t.return, a);
    }
    if (t === e) {
      te = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, te = l;
      break;
    }
    te = t.return;
  }
}
var hb = Math.ceil, $a = Er.ReactCurrentDispatcher, Vf = Er.ReactCurrentOwner, Tn = Er.ReactCurrentBatchConfig, Ne = 0, It = null, kt = null, Ot = 0, sn = 0, ei = qr(0), Et = 0, Fs = null, ko = 0, oc = 0, Kf = 0, gs = null, Qt = null, Yf = 0, xi = 1 / 0, pr = null, ja = !1, Od = null, Wr = null, jl = !1, Lr = null, Aa = 0, ys = 0, Ld = null, na = -1, ra = 0;
function Yt() {
  return Ne & 6 ? vt() : na !== -1 ? na : na = vt();
}
function Ur(e) {
  return e.mode & 1 ? Ne & 2 && Ot !== 0 ? Ot & -Ot : ZS.transition !== null ? (ra === 0 && (ra = Oy()), ra) : (e = Ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : _y(e.type)), e) : 1;
}
function Wn(e, t, n, r) {
  if (50 < ys) throw ys = 0, Ld = null, Error(K(185));
  Zs(e, n, r), (!(Ne & 2) || e !== It) && (e === It && (!(Ne & 2) && (oc |= n), Et === 4 && Ar(e, Ot)), en(e, r), n === 1 && Ne === 0 && !(t.mode & 1) && (xi = vt() + 500, ec && Zr()));
}
function en(e, t) {
  var n = e.callbackNode;
  Zx(e, t);
  var r = ga(e, e === It ? Ot : 0);
  if (r === 0) n !== null && im(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && im(n), t === 1) e.tag === 0 ? qS(qm.bind(null, e)) : sv(qm.bind(null, e)), YS(function() {
      !(Ne & 6) && Zr();
    }), n = null;
    else {
      switch (Ly(r)) {
        case 1:
          n = xf;
          break;
        case 4:
          n = jy;
          break;
        case 16:
          n = ha;
          break;
        case 536870912:
          n = Ay;
          break;
        default:
          n = ha;
      }
      n = o0(n, qv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function qv(e, t) {
  if (na = -1, ra = 0, Ne & 6) throw Error(K(327));
  var n = e.callbackNode;
  if (ci() && e.callbackNode !== n) return null;
  var r = ga(e, e === It ? Ot : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oa(e, r);
  else {
    t = r;
    var o = Ne;
    Ne |= 2;
    var i = Jv();
    (It !== e || Ot !== t) && (pr = null, xi = vt() + 500, yo(e, t));
    do
      try {
        vb();
        break;
      } catch (l) {
        Zv(e, l);
      }
    while (!0);
    jf(), $a.current = i, Ne = o, kt !== null ? t = 0 : (It = null, Ot = 0, t = Et);
  }
  if (t !== 0) {
    if (t === 2 && (o = ad(e), o !== 0 && (r = o, t = Nd(e, o))), t === 1) throw n = Fs, yo(e, 0), Ar(e, r), en(e, vt()), n;
    if (t === 6) Ar(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !gb(o) && (t = Oa(e, r), t === 2 && (i = ad(e), i !== 0 && (r = i, t = Nd(e, i))), t === 1)) throw n = Fs, yo(e, 0), Ar(e, r), en(e, vt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(K(345));
        case 2:
          uo(e, Qt, pr);
          break;
        case 3:
          if (Ar(e, r), (r & 130023424) === r && (t = Yf + 500 - vt(), 10 < t)) {
            if (ga(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Yt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = gd(uo.bind(null, e, Qt, pr), t);
            break;
          }
          uo(e, Qt, pr);
          break;
        case 4:
          if (Ar(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - _n(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = vt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * hb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = gd(uo.bind(null, e, Qt, pr), r);
            break;
          }
          uo(e, Qt, pr);
          break;
        case 5:
          uo(e, Qt, pr);
          break;
        default:
          throw Error(K(329));
      }
    }
  }
  return en(e, vt()), e.callbackNode === n ? qv.bind(null, e) : null;
}
function Nd(e, t) {
  var n = gs;
  return e.current.memoizedState.isDehydrated && (yo(e, t).flags |= 256), e = Oa(e, t), e !== 2 && (t = Qt, Qt = n, t !== null && zd(t)), e;
}
function zd(e) {
  Qt === null ? Qt = e : Qt.push.apply(Qt, e);
}
function gb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Un(i(), o)) return !1;
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
function Ar(e, t) {
  for (t &= ~Kf, t &= ~oc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - _n(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function qm(e) {
  if (Ne & 6) throw Error(K(327));
  ci();
  var t = ga(e, 0);
  if (!(t & 1)) return en(e, vt()), null;
  var n = Oa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ad(e);
    r !== 0 && (t = r, n = Nd(e, r));
  }
  if (n === 1) throw n = Fs, yo(e, 0), Ar(e, t), en(e, vt()), n;
  if (n === 6) throw Error(K(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, uo(e, Qt, pr), en(e, vt()), null;
}
function Gf(e, t) {
  var n = Ne;
  Ne |= 1;
  try {
    return e(t);
  } finally {
    Ne = n, Ne === 0 && (xi = vt() + 500, ec && Zr());
  }
}
function To(e) {
  Lr !== null && Lr.tag === 0 && !(Ne & 6) && ci();
  var t = Ne;
  Ne |= 1;
  var n = Tn.transition, r = Ge;
  try {
    if (Tn.transition = null, Ge = 1, e) return e();
  } finally {
    Ge = r, Tn.transition = n, Ne = t, !(Ne & 6) && Zr();
  }
}
function Xf() {
  sn = ei.current, tt(ei);
}
function yo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, KS(n)), kt !== null) for (n = kt.return; n !== null; ) {
    var r = n;
    switch (If(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ba();
        break;
      case 3:
        yi(), tt(Zt), tt(Wt), Df();
        break;
      case 5:
        zf(r);
        break;
      case 4:
        yi();
        break;
      case 13:
        tt(ut);
        break;
      case 19:
        tt(ut);
        break;
      case 10:
        Af(r.type._context);
        break;
      case 22:
      case 23:
        Xf();
    }
    n = n.return;
  }
  if (It = e, kt = e = Hr(e.current, null), Ot = sn = t, Et = 0, Fs = null, Kf = oc = ko = 0, Qt = gs = null, mo !== null) {
    for (t = 0; t < mo.length; t++) if (n = mo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    mo = null;
  }
  return e;
}
function Zv(e, t) {
  do {
    var n = kt;
    try {
      if (jf(), Jl.current = Ma, Ia) {
        for (var r = dt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ia = !1;
      }
      if (Co = 0, Rt = Tt = dt = null, ms = !1, zs = 0, Vf.current = null, n === null || n.return === null) {
        Et = 1, Fs = t, kt = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Ot, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, u = l, p = u.tag;
          if (!(u.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = u.alternate;
            v ? (u.updateQueue = v.updateQueue, u.memoizedState = v.memoizedState, u.lanes = v.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var d = Dm(s);
          if (d !== null) {
            d.flags &= -257, Bm(d, s, l, i, t), d.mode & 1 && zm(i, c, t), t = d, a = c;
            var x = t.updateQueue;
            if (x === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              zm(i, c, t), Qf();
              break e;
            }
            a = Error(K(426));
          }
        } else if (st && l.mode & 1) {
          var C = Dm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Bm(C, s, l, i, t), Mf(vi(a, l));
            break e;
          }
        }
        i = a = vi(a, l), Et !== 4 && (Et = 2), gs === null ? gs = [i] : gs.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = Lv(i, a, t);
              $m(i, y);
              break e;
            case 1:
              l = a;
              var h = i.type, S = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (Wr === null || !Wr.has(S)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Nv(i, l, t);
                $m(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      t0(n);
    } catch (E) {
      t = E, kt === n && n !== null && (kt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Jv() {
  var e = $a.current;
  return $a.current = Ma, e === null ? Ma : e;
}
function Qf() {
  (Et === 0 || Et === 3 || Et === 2) && (Et = 4), It === null || !(ko & 268435455) && !(oc & 268435455) || Ar(It, Ot);
}
function Oa(e, t) {
  var n = Ne;
  Ne |= 2;
  var r = Jv();
  (It !== e || Ot !== t) && (pr = null, yo(e, t));
  do
    try {
      yb();
      break;
    } catch (o) {
      Zv(e, o);
    }
  while (!0);
  if (jf(), Ne = n, $a.current = r, kt !== null) throw Error(K(261));
  return It = null, Ot = 0, Et;
}
function yb() {
  for (; kt !== null; ) e0(kt);
}
function vb() {
  for (; kt !== null && !Ux(); ) e0(kt);
}
function e0(e) {
  var t = r0(e.alternate, e, sn);
  e.memoizedProps = e.pendingProps, t === null ? t0(e) : kt = t, Vf.current = null;
}
function t0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = db(n, t), n !== null) {
        n.flags &= 32767, kt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Et = 6, kt = null;
        return;
      }
    } else if (n = ub(n, t, sn), n !== null) {
      kt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      kt = t;
      return;
    }
    kt = t = e;
  } while (t !== null);
  Et === 0 && (Et = 5);
}
function uo(e, t, n) {
  var r = Ge, o = Tn.transition;
  try {
    Tn.transition = null, Ge = 1, xb(e, t, n, r);
  } finally {
    Tn.transition = o, Ge = r;
  }
  return null;
}
function xb(e, t, n, r) {
  do
    ci();
  while (Lr !== null);
  if (Ne & 6) throw Error(K(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(K(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Jx(e, i), e === It && (kt = It = null, Ot = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jl || (jl = !0, o0(ha, function() {
    return ci(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Tn.transition, Tn.transition = null;
    var s = Ge;
    Ge = 1;
    var l = Ne;
    Ne |= 4, Vf.current = null, pb(e, n), Xv(n, e), BS(md), ya = !!pd, md = pd = null, e.current = n, mb(n), Hx(), Ne = l, Ge = s, Tn.transition = i;
  } else e.current = n;
  if (jl && (jl = !1, Lr = e, Aa = o), i = e.pendingLanes, i === 0 && (Wr = null), Yx(n.stateNode), en(e, vt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ja) throw ja = !1, e = Od, Od = null, e;
  return Aa & 1 && e.tag !== 0 && ci(), i = e.pendingLanes, i & 1 ? e === Ld ? ys++ : (ys = 0, Ld = e) : ys = 0, Zr(), null;
}
function ci() {
  if (Lr !== null) {
    var e = Ly(Aa), t = Tn.transition, n = Ge;
    try {
      if (Tn.transition = null, Ge = 16 > e ? 16 : e, Lr === null) var r = !1;
      else {
        if (e = Lr, Lr = null, Aa = 0, Ne & 6) throw Error(K(331));
        var o = Ne;
        for (Ne |= 4, te = e.current; te !== null; ) {
          var i = te, s = i.child;
          if (te.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (te = c; te !== null; ) {
                  var u = te;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hs(8, u, i);
                  }
                  var p = u.child;
                  if (p !== null) p.return = u, te = p;
                  else for (; te !== null; ) {
                    u = te;
                    var v = u.sibling, d = u.return;
                    if (Kv(u), u === c) {
                      te = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = d, te = v;
                      break;
                    }
                    te = d;
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
              te = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, te = s;
          else e: for (; te !== null; ) {
            if (i = te, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                hs(9, i, i.return);
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, te = y;
              break e;
            }
            te = i.return;
          }
        }
        var h = e.current;
        for (te = h; te !== null; ) {
          s = te;
          var S = s.child;
          if (s.subtreeFlags & 2064 && S !== null) S.return = s, te = S;
          else e: for (s = h; te !== null; ) {
            if (l = te, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  rc(9, l);
              }
            } catch (E) {
              mt(l, l.return, E);
            }
            if (l === s) {
              te = null;
              break e;
            }
            var w = l.sibling;
            if (w !== null) {
              w.return = l.return, te = w;
              break e;
            }
            te = l.return;
          }
        }
        if (Ne = o, Zr(), tr && typeof tr.onPostCommitFiberRoot == "function") try {
          tr.onPostCommitFiberRoot(Xa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Ge = n, Tn.transition = t;
    }
  }
  return !1;
}
function Zm(e, t, n) {
  t = vi(n, t), t = Lv(e, t, 1), e = _r(e, t, 1), t = Yt(), e !== null && (Zs(e, 1, t), en(e, t));
}
function mt(e, t, n) {
  if (e.tag === 3) Zm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Zm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wr === null || !Wr.has(r))) {
        e = vi(n, e), e = Nv(t, e, 1), t = _r(t, e, 1), e = Yt(), t !== null && (Zs(t, 1, e), en(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Sb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Yt(), e.pingedLanes |= e.suspendedLanes & n, It === e && (Ot & n) === n && (Et === 4 || Et === 3 && (Ot & 130023424) === Ot && 500 > vt() - Yf ? yo(e, 0) : Kf |= n), en(e, t);
}
function n0(e, t) {
  t === 0 && (e.mode & 1 ? (t = wl, wl <<= 1, !(wl & 130023424) && (wl = 4194304)) : t = 1);
  var n = Yt();
  e = br(e, t), e !== null && (Zs(e, t, n), en(e, n));
}
function bb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), n0(e, n);
}
function wb(e, t) {
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
  r !== null && r.delete(t), n0(e, n);
}
var r0;
r0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Zt.current) qt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qt = !1, cb(e, t, n);
    qt = !!(e.flags & 131072);
  }
  else qt = !1, st && t.flags & 1048576 && lv(t, ka, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ta(e, t), e = t.pendingProps;
      var o = mi(t, Wt.current);
      ai(t, n), o = Ff(null, t, r, e, o, n);
      var i = _f();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Jt(r) ? (i = !0, wa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Lf(t), o.updater = nc, t.stateNode = o, o._reactInternals = t, Cd(t, r, e, n), t = Ed(null, t, r, !0, i, n)) : (t.tag = 0, st && i && Pf(t), Ht(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ta(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = kb(r), e = Dn(r, e), o) {
          case 0:
            t = Td(null, t, r, e, n);
            break e;
          case 1:
            t = Wm(null, t, r, e, n);
            break e;
          case 11:
            t = Fm(null, t, r, e, n);
            break e;
          case 14:
            t = _m(null, t, r, Dn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Dn(r, o), Td(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Dn(r, o), Wm(e, t, r, o, n);
    case 3:
      e: {
        if (Fv(t), e === null) throw Error(K(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, pv(e, t), Ra(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = vi(Error(K(423)), t), t = Um(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = vi(Error(K(424)), t), t = Um(e, t, r, n, o);
          break e;
        } else for (cn = Fr(t.stateNode.containerInfo.firstChild), un = t, st = !0, Fn = null, n = dv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (hi(), r === o) {
            t = wr(e, t, n);
            break e;
          }
          Ht(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return mv(t), e === null && Sd(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, hd(r, o) ? s = null : i !== null && hd(r, i) && (t.flags |= 32), Bv(e, t), Ht(e, t, s, n), t.child;
    case 6:
      return e === null && Sd(t), null;
    case 13:
      return _v(e, t, n);
    case 4:
      return Nf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gi(t, null, r, n) : Ht(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Dn(r, o), Fm(e, t, r, o, n);
    case 7:
      return Ht(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ht(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ht(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, qe(Ta, r._currentValue), r._currentValue = s, i !== null) if (Un(i.value, s)) {
          if (i.children === o.children && !Zt.current) {
            t = wr(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = vr(-1, n & -n), a.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var u = c.pending;
                    u === null ? a.next = a : (a.next = u.next, u.next = a), c.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), bd(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), bd(s, n, t), s = i.sibling;
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
        Ht(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, ai(t, n), o = Rn(o), r = r(o), t.flags |= 1, Ht(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Dn(r, t.pendingProps), o = Dn(r.type, o), _m(e, t, r, o, n);
    case 15:
      return zv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Dn(r, o), ta(e, t), t.tag = 1, Jt(r) ? (e = !0, wa(t)) : e = !1, ai(t, n), Ov(t, r, o), Cd(t, r, o, n), Ed(null, t, r, !0, e, n);
    case 19:
      return Wv(e, t, n);
    case 22:
      return Dv(e, t, n);
  }
  throw Error(K(156, t.tag));
};
function o0(e, t) {
  return $y(e, t);
}
function Cb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function kn(e, t, n, r) {
  return new Cb(e, t, n, r);
}
function qf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function kb(e) {
  if (typeof e == "function") return qf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === gf) return 11;
    if (e === yf) return 14;
  }
  return 2;
}
function Hr(e, t) {
  var n = e.alternate;
  return n === null ? (n = kn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function oa(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") qf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Ho:
      return vo(n.children, o, i, t);
    case hf:
      s = 8, o |= 8;
      break;
    case Yu:
      return e = kn(12, n, t, o | 2), e.elementType = Yu, e.lanes = i, e;
    case Gu:
      return e = kn(13, n, t, o), e.elementType = Gu, e.lanes = i, e;
    case Xu:
      return e = kn(19, n, t, o), e.elementType = Xu, e.lanes = i, e;
    case my:
      return ic(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case fy:
          s = 10;
          break e;
        case py:
          s = 9;
          break e;
        case gf:
          s = 11;
          break e;
        case yf:
          s = 14;
          break e;
        case Mr:
          s = 16, r = null;
          break e;
      }
      throw Error(K(130, e == null ? e : typeof e, ""));
  }
  return t = kn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function vo(e, t, n, r) {
  return e = kn(7, e, r, t), e.lanes = n, e;
}
function ic(e, t, n, r) {
  return e = kn(22, e, r, t), e.elementType = my, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Mu(e, t, n) {
  return e = kn(6, e, null, t), e.lanes = n, e;
}
function $u(e, t, n) {
  return t = kn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Tb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = du(0), this.expirationTimes = du(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = du(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Zf(e, t, n, r, o, i, s, l, a) {
  return e = new Tb(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = kn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lf(i), e;
}
function Eb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Uo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function i0(e) {
  if (!e) return Yr;
  e = e._reactInternals;
  e: {
    if ($o(e) !== e || e.tag !== 1) throw Error(K(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Jt(t.type)) {
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
    if (Jt(n)) return iv(e, n, t);
  }
  return t;
}
function s0(e, t, n, r, o, i, s, l, a) {
  return e = Zf(n, r, !0, e, o, i, s, l, a), e.context = i0(null), n = e.current, r = Yt(), o = Ur(n), i = vr(r, o), i.callback = t ?? null, _r(n, i, o), e.current.lanes = o, Zs(e, o, r), en(e, r), e;
}
function sc(e, t, n, r) {
  var o = t.current, i = Yt(), s = Ur(o);
  return n = i0(n), t.context === null ? t.context = n : t.pendingContext = n, t = vr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _r(o, t, s), e !== null && (Wn(e, o, s, i), Zl(e, o, s)), s;
}
function La(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Jm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Jf(e, t) {
  Jm(e, t), (e = e.alternate) && Jm(e, t);
}
function Rb() {
  return null;
}
var l0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ep(e) {
  this._internalRoot = e;
}
lc.prototype.render = ep.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(K(409));
  sc(e, t, null, null);
};
lc.prototype.unmount = ep.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    To(function() {
      sc(null, e, null, null);
    }), t[Sr] = null;
  }
};
function lc(e) {
  this._internalRoot = e;
}
lc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Dy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jr.length && t !== 0 && t < jr[n].priority; n++) ;
    jr.splice(n, 0, e), n === 0 && Fy(e);
  }
};
function tp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ac(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function eh() {
}
function Pb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = La(s);
        i.call(c);
      };
    }
    var s = s0(t, r, e, 0, null, !1, !1, "", eh);
    return e._reactRootContainer = s, e[Sr] = s.current, js(e.nodeType === 8 ? e.parentNode : e), To(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var c = La(a);
      l.call(c);
    };
  }
  var a = Zf(e, 0, !1, null, null, !1, !1, "", eh);
  return e._reactRootContainer = a, e[Sr] = a.current, js(e.nodeType === 8 ? e.parentNode : e), To(function() {
    sc(t, a, n, r);
  }), a;
}
function cc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = La(s);
        l.call(a);
      };
    }
    sc(t, s, e, o);
  } else s = Pb(n, t, e, o, r);
  return La(s);
}
Ny = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = is(t.pendingLanes);
        n !== 0 && (Sf(t, n | 1), en(t, vt()), !(Ne & 6) && (xi = vt() + 500, Zr()));
      }
      break;
    case 13:
      To(function() {
        var r = br(e, 1);
        if (r !== null) {
          var o = Yt();
          Wn(r, e, 1, o);
        }
      }), Jf(e, 1);
  }
};
bf = function(e) {
  if (e.tag === 13) {
    var t = br(e, 134217728);
    if (t !== null) {
      var n = Yt();
      Wn(t, e, 134217728, n);
    }
    Jf(e, 134217728);
  }
};
zy = function(e) {
  if (e.tag === 13) {
    var t = Ur(e), n = br(e, t);
    if (n !== null) {
      var r = Yt();
      Wn(n, e, t, r);
    }
    Jf(e, t);
  }
};
Dy = function() {
  return Ge;
};
By = function(e, t) {
  var n = Ge;
  try {
    return Ge = e, t();
  } finally {
    Ge = n;
  }
};
id = function(e, t, n) {
  switch (t) {
    case "input":
      if (Zu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ja(r);
            if (!o) throw Error(K(90));
            gy(r), Zu(r, o);
          }
        }
      }
      break;
    case "textarea":
      vy(e, n);
      break;
    case "select":
      t = n.value, t != null && oi(e, !!n.multiple, t, !1);
  }
};
Ty = Gf;
Ey = To;
var Ib = { usingClientEntryPoint: !1, Events: [el, Go, Ja, Cy, ky, Gf] }, Vi = { findFiberByHostInstance: po, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mb = { bundleType: Vi.bundleType, version: Vi.version, rendererPackageName: Vi.rendererPackageName, rendererConfig: Vi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Er.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Iy(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Vi.findFiberByHostInstance || Rb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Al.isDisabled && Al.supportsFiber) try {
    Xa = Al.inject(Mb), tr = Al;
  } catch {
  }
}
hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ib;
hn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!tp(t)) throw Error(K(200));
  return Eb(e, t, null, n);
};
hn.createRoot = function(e, t) {
  if (!tp(e)) throw Error(K(299));
  var n = !1, r = "", o = l0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Zf(e, 1, !1, null, null, n, !1, r, o), e[Sr] = t.current, js(e.nodeType === 8 ? e.parentNode : e), new ep(t);
};
hn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(K(188)) : (e = Object.keys(e).join(","), Error(K(268, e)));
  return e = Iy(t), e = e === null ? null : e.stateNode, e;
};
hn.flushSync = function(e) {
  return To(e);
};
hn.hydrate = function(e, t, n) {
  if (!ac(t)) throw Error(K(200));
  return cc(null, e, t, !0, n);
};
hn.hydrateRoot = function(e, t, n) {
  if (!tp(e)) throw Error(K(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = l0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = s0(t, null, e, 1, n ?? null, o, !1, i, s), e[Sr] = t.current, js(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new lc(t);
};
hn.render = function(e, t, n) {
  if (!ac(t)) throw Error(K(200));
  return cc(null, e, t, !1, n);
};
hn.unmountComponentAtNode = function(e) {
  if (!ac(e)) throw Error(K(40));
  return e._reactRootContainer ? (To(function() {
    cc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Sr] = null;
    });
  }), !0) : !1;
};
hn.unstable_batchedUpdates = Gf;
hn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ac(n)) throw Error(K(200));
  if (e == null || e._reactInternals === void 0) throw Error(K(38));
  return cc(e, t, n, !1, r);
};
hn.version = "18.3.1-next-f1338f8080-20240426";
function a0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a0);
    } catch (e) {
      console.error(e);
    }
}
a0(), ay.exports = hn;
var c0 = ay.exports, u0, th = c0;
u0 = th.createRoot, th.hydrateRoot;
const _s = {
  black: "#000",
  white: "#fff"
}, Do = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Bo = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Fo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, _o = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Wo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Ki = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, $b = {
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
function Cr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const rr = "$$material";
function Dd() {
  return Dd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Dd.apply(null, arguments);
}
function jb(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ab(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ob = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ab(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = jb(o);
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
}(), Ft = "-ms-", Na = "-moz-", Fe = "-webkit-", d0 = "comm", np = "rule", rp = "decl", Lb = "@import", f0 = "@keyframes", Nb = "@layer", zb = Math.abs, uc = String.fromCharCode, Db = Object.assign;
function Bb(e, t) {
  return At(e, 0) ^ 45 ? (((t << 2 ^ At(e, 0)) << 2 ^ At(e, 1)) << 2 ^ At(e, 2)) << 2 ^ At(e, 3) : 0;
}
function p0(e) {
  return e.trim();
}
function Fb(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _e(e, t, n) {
  return e.replace(t, n);
}
function Bd(e, t) {
  return e.indexOf(t);
}
function At(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ws(e, t, n) {
  return e.slice(t, n);
}
function Qn(e) {
  return e.length;
}
function op(e) {
  return e.length;
}
function Ol(e, t) {
  return t.push(e), e;
}
function _b(e, t) {
  return e.map(t).join("");
}
var dc = 1, Si = 1, m0 = 0, rn = 0, Ct = 0, $i = "";
function fc(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: dc, column: Si, length: s, return: "" };
}
function Yi(e, t) {
  return Db(fc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Wb() {
  return Ct;
}
function Ub() {
  return Ct = rn > 0 ? At($i, --rn) : 0, Si--, Ct === 10 && (Si = 1, dc--), Ct;
}
function dn() {
  return Ct = rn < m0 ? At($i, rn++) : 0, Si++, Ct === 10 && (Si = 1, dc++), Ct;
}
function or() {
  return At($i, rn);
}
function ia() {
  return rn;
}
function nl(e, t) {
  return Ws($i, e, t);
}
function Us(e) {
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
function h0(e) {
  return dc = Si = 1, m0 = Qn($i = e), rn = 0, [];
}
function g0(e) {
  return $i = "", e;
}
function sa(e) {
  return p0(nl(rn - 1, Fd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Hb(e) {
  for (; (Ct = or()) && Ct < 33; )
    dn();
  return Us(e) > 2 || Us(Ct) > 3 ? "" : " ";
}
function Vb(e, t) {
  for (; --t && dn() && !(Ct < 48 || Ct > 102 || Ct > 57 && Ct < 65 || Ct > 70 && Ct < 97); )
    ;
  return nl(e, ia() + (t < 6 && or() == 32 && dn() == 32));
}
function Fd(e) {
  for (; dn(); )
    switch (Ct) {
      case e:
        return rn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fd(Ct);
        break;
      case 40:
        e === 41 && Fd(e);
        break;
      case 92:
        dn();
        break;
    }
  return rn;
}
function Kb(e, t) {
  for (; dn() && e + Ct !== 57; )
    if (e + Ct === 84 && or() === 47)
      break;
  return "/*" + nl(t, rn - 1) + "*" + uc(e === 47 ? e : dn());
}
function Yb(e) {
  for (; !Us(or()); )
    dn();
  return nl(e, rn);
}
function Gb(e) {
  return g0(la("", null, null, null, [""], e = h0(e), 0, [0], e));
}
function la(e, t, n, r, o, i, s, l, a) {
  for (var c = 0, u = 0, p = s, v = 0, d = 0, x = 0, b = 1, C = 1, y = 1, h = 0, S = "", w = o, E = i, k = r, R = S; C; )
    switch (x = h, h = dn()) {
      case 40:
        if (x != 108 && At(R, p - 1) == 58) {
          Bd(R += _e(sa(h), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += sa(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Hb(x);
        break;
      case 92:
        R += Vb(ia() - 1, 7);
        continue;
      case 47:
        switch (or()) {
          case 42:
          case 47:
            Ol(Xb(Kb(dn(), ia()), t, n), a);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * b:
        l[c++] = Qn(R) * y;
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0;
          case 59 + u:
            y == -1 && (R = _e(R, /\f/g, "")), d > 0 && Qn(R) - p && Ol(d > 32 ? rh(R + ";", r, n, p - 1) : rh(_e(R, " ", "") + ";", r, n, p - 2), a);
            break;
          case 59:
            R += ";";
          default:
            if (Ol(k = nh(R, t, n, c, u, o, l, S, w = [], E = [], p), i), h === 123)
              if (u === 0)
                la(R, t, k, k, w, i, p, l, E);
              else
                switch (v === 99 && At(R, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    la(e, k, k, r && Ol(nh(e, k, k, 0, 0, o, l, S, o, w = [], p), E), o, E, p, l, r ? w : E);
                    break;
                  default:
                    la(R, k, k, k, [""], E, 0, l, E);
                }
        }
        c = u = d = 0, b = y = 1, S = R = "", p = s;
        break;
      case 58:
        p = 1 + Qn(R), d = x;
      default:
        if (b < 1) {
          if (h == 123)
            --b;
          else if (h == 125 && b++ == 0 && Ub() == 125)
            continue;
        }
        switch (R += uc(h), h * b) {
          case 38:
            y = u > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[c++] = (Qn(R) - 1) * y, y = 1;
            break;
          case 64:
            or() === 45 && (R += sa(dn())), v = or(), u = p = Qn(S = R += Yb(ia())), h++;
            break;
          case 45:
            x === 45 && Qn(R) == 2 && (b = 0);
        }
    }
  return i;
}
function nh(e, t, n, r, o, i, s, l, a, c, u) {
  for (var p = o - 1, v = o === 0 ? i : [""], d = op(v), x = 0, b = 0, C = 0; x < r; ++x)
    for (var y = 0, h = Ws(e, p + 1, p = zb(b = s[x])), S = e; y < d; ++y)
      (S = p0(b > 0 ? v[y] + " " + h : _e(h, /&\f/g, v[y]))) && (a[C++] = S);
  return fc(e, t, n, o === 0 ? np : l, a, c, u);
}
function Xb(e, t, n) {
  return fc(e, t, n, d0, uc(Wb()), Ws(e, 2, -2), 0);
}
function rh(e, t, n, r) {
  return fc(e, t, n, rp, Ws(e, 0, r), Ws(e, r + 1, -1), r);
}
function ui(e, t) {
  for (var n = "", r = op(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Qb(e, t, n, r) {
  switch (e.type) {
    case Nb:
      if (e.children.length) break;
    case Lb:
    case rp:
      return e.return = e.return || e.value;
    case d0:
      return "";
    case f0:
      return e.return = e.value + "{" + ui(e.children, r) + "}";
    case np:
      e.value = e.props.join(",");
  }
  return Qn(n = ui(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function qb(e) {
  var t = op(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function Zb(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function y0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Jb = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = or(), o === 38 && i === 12 && (n[r] = 1), !Us(i); )
    dn();
  return nl(t, rn);
}, ew = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Us(o)) {
      case 0:
        o === 38 && or() === 12 && (n[r] = 1), t[r] += Jb(rn - 1, n, r);
        break;
      case 2:
        t[r] += sa(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = or() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += uc(o);
    }
  while (o = dn());
  return t;
}, tw = function(t, n) {
  return g0(ew(h0(t), n));
}, oh = /* @__PURE__ */ new WeakMap(), nw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !oh.get(r)) && !o) {
      oh.set(t, !0);
      for (var i = [], s = tw(n, i), l = r.props, a = 0, c = 0; a < s.length; a++)
        for (var u = 0; u < l.length; u++, c++)
          t.props[c] = i[a] ? s[a].replace(/&\f/g, l[u]) : l[u] + " " + s[a];
    }
  }
}, rw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function v0(e, t) {
  switch (Bb(e, t)) {
    case 5103:
      return Fe + "print-" + e + e;
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
      return Fe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Fe + e + Na + e + Ft + e + e;
    case 6828:
    case 4268:
      return Fe + e + Ft + e + e;
    case 6165:
      return Fe + e + Ft + "flex-" + e + e;
    case 5187:
      return Fe + e + _e(e, /(\w+).+(:[^]+)/, Fe + "box-$1$2" + Ft + "flex-$1$2") + e;
    case 5443:
      return Fe + e + Ft + "flex-item-" + _e(e, /flex-|-self/, "") + e;
    case 4675:
      return Fe + e + Ft + "flex-line-pack" + _e(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Fe + e + Ft + _e(e, "shrink", "negative") + e;
    case 5292:
      return Fe + e + Ft + _e(e, "basis", "preferred-size") + e;
    case 6060:
      return Fe + "box-" + _e(e, "-grow", "") + Fe + e + Ft + _e(e, "grow", "positive") + e;
    case 4554:
      return Fe + _e(e, /([^-])(transform)/g, "$1" + Fe + "$2") + e;
    case 6187:
      return _e(_e(_e(e, /(zoom-|grab)/, Fe + "$1"), /(image-set)/, Fe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _e(e, /(image-set\([^]*)/, Fe + "$1$`$1");
    case 4968:
      return _e(_e(e, /(.+:)(flex-)?(.*)/, Fe + "box-pack:$3" + Ft + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Fe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _e(e, /(.+)-inline(.+)/, Fe + "$1$2") + e;
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
      if (Qn(e) - 1 - t > 6) switch (At(e, t + 1)) {
        case 109:
          if (At(e, t + 4) !== 45) break;
        case 102:
          return _e(e, /(.+:)(.+)-([^]+)/, "$1" + Fe + "$2-$3$1" + Na + (At(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Bd(e, "stretch") ? v0(_e(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (At(e, t + 1) !== 115) break;
    case 6444:
      switch (At(e, Qn(e) - 3 - (~Bd(e, "!important") && 10))) {
        case 107:
          return _e(e, ":", ":" + Fe) + e;
        case 101:
          return _e(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Fe + (At(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Fe + "$2$3$1" + Ft + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (At(e, t + 11)) {
        case 114:
          return Fe + e + Ft + _e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Fe + e + Ft + _e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Fe + e + Ft + _e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Fe + e + Ft + e + e;
  }
  return e;
}
var ow = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case rp:
      t.return = v0(t.value, t.length);
      break;
    case f0:
      return ui([Yi(t, {
        value: _e(t.value, "@", "@" + Fe)
      })], o);
    case np:
      if (t.length) return _b(t.props, function(i) {
        switch (Fb(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ui([Yi(t, {
              props: [_e(i, /:(read-\w+)/, ":" + Na + "$1")]
            })], o);
          case "::placeholder":
            return ui([Yi(t, {
              props: [_e(i, /:(plac\w+)/, ":" + Fe + "input-$1")]
            }), Yi(t, {
              props: [_e(i, /:(plac\w+)/, ":" + Na + "$1")]
            }), Yi(t, {
              props: [_e(i, /:(plac\w+)/, Ft + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, iw = [ow], sw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var C = b.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || iw, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(b) {
      for (var C = b.getAttribute("data-emotion").split(" "), y = 1; y < C.length; y++)
        i[C[y]] = !0;
      l.push(b);
    }
  );
  var a, c = [nw, rw];
  {
    var u, p = [Qb, Zb(function(b) {
      u.insert(b);
    })], v = qb(c.concat(o, p)), d = function(C) {
      return ui(Gb(C), v);
    };
    a = function(C, y, h, S) {
      u = h, d(C ? C + "{" + y.styles + "}" : y.styles), S && (x.inserted[y.name] = !0);
    };
  }
  var x = {
    key: n,
    sheet: new Ob({
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
}, x0 = { exports: {} }, Xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt = typeof Symbol == "function" && Symbol.for, ip = Mt ? Symbol.for("react.element") : 60103, sp = Mt ? Symbol.for("react.portal") : 60106, pc = Mt ? Symbol.for("react.fragment") : 60107, mc = Mt ? Symbol.for("react.strict_mode") : 60108, hc = Mt ? Symbol.for("react.profiler") : 60114, gc = Mt ? Symbol.for("react.provider") : 60109, yc = Mt ? Symbol.for("react.context") : 60110, lp = Mt ? Symbol.for("react.async_mode") : 60111, vc = Mt ? Symbol.for("react.concurrent_mode") : 60111, xc = Mt ? Symbol.for("react.forward_ref") : 60112, Sc = Mt ? Symbol.for("react.suspense") : 60113, lw = Mt ? Symbol.for("react.suspense_list") : 60120, bc = Mt ? Symbol.for("react.memo") : 60115, wc = Mt ? Symbol.for("react.lazy") : 60116, aw = Mt ? Symbol.for("react.block") : 60121, cw = Mt ? Symbol.for("react.fundamental") : 60117, uw = Mt ? Symbol.for("react.responder") : 60118, dw = Mt ? Symbol.for("react.scope") : 60119;
function yn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ip:
        switch (e = e.type, e) {
          case lp:
          case vc:
          case pc:
          case hc:
          case mc:
          case Sc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case yc:
              case xc:
              case wc:
              case bc:
              case gc:
                return e;
              default:
                return t;
            }
        }
      case sp:
        return t;
    }
  }
}
function S0(e) {
  return yn(e) === vc;
}
Xe.AsyncMode = lp;
Xe.ConcurrentMode = vc;
Xe.ContextConsumer = yc;
Xe.ContextProvider = gc;
Xe.Element = ip;
Xe.ForwardRef = xc;
Xe.Fragment = pc;
Xe.Lazy = wc;
Xe.Memo = bc;
Xe.Portal = sp;
Xe.Profiler = hc;
Xe.StrictMode = mc;
Xe.Suspense = Sc;
Xe.isAsyncMode = function(e) {
  return S0(e) || yn(e) === lp;
};
Xe.isConcurrentMode = S0;
Xe.isContextConsumer = function(e) {
  return yn(e) === yc;
};
Xe.isContextProvider = function(e) {
  return yn(e) === gc;
};
Xe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ip;
};
Xe.isForwardRef = function(e) {
  return yn(e) === xc;
};
Xe.isFragment = function(e) {
  return yn(e) === pc;
};
Xe.isLazy = function(e) {
  return yn(e) === wc;
};
Xe.isMemo = function(e) {
  return yn(e) === bc;
};
Xe.isPortal = function(e) {
  return yn(e) === sp;
};
Xe.isProfiler = function(e) {
  return yn(e) === hc;
};
Xe.isStrictMode = function(e) {
  return yn(e) === mc;
};
Xe.isSuspense = function(e) {
  return yn(e) === Sc;
};
Xe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === pc || e === vc || e === hc || e === mc || e === Sc || e === lw || typeof e == "object" && e !== null && (e.$$typeof === wc || e.$$typeof === bc || e.$$typeof === gc || e.$$typeof === yc || e.$$typeof === xc || e.$$typeof === cw || e.$$typeof === uw || e.$$typeof === dw || e.$$typeof === aw);
};
Xe.typeOf = yn;
x0.exports = Xe;
var fw = x0.exports, b0 = fw, pw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, mw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, w0 = {};
w0[b0.ForwardRef] = pw;
w0[b0.Memo] = mw;
var hw = !0;
function C0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var ap = function(t, n, r) {
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
  hw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, cp = function(t, n, r) {
  ap(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function gw(e) {
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
var yw = {
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
}, vw = /[A-Z]|^ms/g, xw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, k0 = function(t) {
  return t.charCodeAt(1) === 45;
}, ih = function(t) {
  return t != null && typeof t != "boolean";
}, ju = /* @__PURE__ */ y0(function(e) {
  return k0(e) ? e : e.replace(vw, "-$&").toLowerCase();
}), sh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(xw, function(r, o, i) {
          return qn = {
            name: o,
            styles: i,
            next: qn
          }, o;
        });
  }
  return yw[t] !== 1 && !k0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Hs(e, t, n) {
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
        return qn = {
          name: o.name,
          styles: o.styles,
          next: qn
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            qn = {
              name: s.name,
              styles: s.styles,
              next: qn
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return Sw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = qn, c = n(e);
        return qn = a, Hs(e, t, c);
      }
      break;
    }
  }
  var u = n;
  if (t == null)
    return u;
  var p = t[u];
  return p !== void 0 ? p : u;
}
function Sw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Hs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : ih(l) && (r += ju(i) + ":" + sh(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          ih(s[a]) && (r += ju(i) + ":" + sh(i, s[a]) + ";");
      else {
        var c = Hs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += ju(i) + ":" + c + ";";
            break;
          }
          default:
            r += i + "{" + c + "}";
        }
      }
    }
  return r;
}
var lh = /label:\s*([^\s;{]+)\s*(;|$)/g, qn;
function rl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  qn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Hs(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Hs(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  lh.lastIndex = 0;
  for (var c = "", u; (u = lh.exec(o)) !== null; )
    c += "-" + u[1];
  var p = gw(o) + c;
  return {
    name: p,
    styles: o,
    next: qn
  };
}
var bw = function(t) {
  return t();
}, T0 = da.useInsertionEffect ? da.useInsertionEffect : !1, E0 = T0 || bw, ah = T0 || m.useLayoutEffect, R0 = /* @__PURE__ */ m.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ sw({
    key: "css"
  }) : null
);
R0.Provider;
var up = function(t) {
  return /* @__PURE__ */ m.forwardRef(function(n, r) {
    var o = m.useContext(R0);
    return t(n, o, r);
  });
}, ol = /* @__PURE__ */ m.createContext({}), dp = {}.hasOwnProperty, _d = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ww = function(t, n) {
  var r = {};
  for (var o in n)
    dp.call(n, o) && (r[o] = n[o]);
  return r[_d] = t, r;
}, Cw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ap(n, r, o), E0(function() {
    return cp(n, r, o);
  }), null;
}, kw = /* @__PURE__ */ up(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[_d], i = [r], s = "";
  typeof e.className == "string" ? s = C0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = rl(i, void 0, m.useContext(ol));
  s += t.key + "-" + l.name;
  var a = {};
  for (var c in e)
    dp.call(e, c) && c !== "css" && c !== _d && (a[c] = e[c]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Cw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ m.createElement(o, a));
}), Tw = kw, ch = function(t, n) {
  var r = arguments;
  if (n == null || !dp.call(n, "css"))
    return m.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Tw, i[1] = ww(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return m.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ch || (ch = {}));
var Ew = /* @__PURE__ */ up(function(e, t) {
  var n = e.styles, r = rl([n], void 0, m.useContext(ol)), o = m.useRef();
  return ah(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), ah(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && cp(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Vs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return rl(t);
}
function il() {
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
var Rw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Pw = /* @__PURE__ */ y0(
  function(e) {
    return Rw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Iw = Pw, Mw = function(t) {
  return t !== "theme";
}, uh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Iw : Mw;
}, dh = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, $w = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ap(n, r, o), E0(function() {
    return cp(n, r, o);
  }), null;
}, jw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = dh(t, n, r), a = l || uh(o), c = !a("as");
  return function() {
    var u = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      p.push.apply(p, u);
    else {
      var v = u[0];
      p.push(v[0]);
      for (var d = u.length, x = 1; x < d; x++)
        p.push(u[x], v[x]);
    }
    var b = up(function(C, y, h) {
      var S = c && C.as || o, w = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var R in C)
          k[R] = C[R];
        k.theme = m.useContext(ol);
      }
      typeof C.className == "string" ? w = C0(y.registered, E, C.className) : C.className != null && (w = C.className + " ");
      var T = rl(p.concat(E), y.registered, k);
      w += y.key + "-" + T.name, s !== void 0 && (w += " " + s);
      var A = c && l === void 0 ? uh(S) : a, O = {};
      for (var I in C)
        c && I === "as" || A(I) && (O[I] = C[I]);
      return O.className = w, h && (O.ref = h), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($w, {
        cache: y,
        serialized: T,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ m.createElement(S, O));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = p, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(C, y) {
      var h = e(C, Dd({}, n, y, {
        shouldForwardProp: dh(b, y, !0)
      }));
      return h.apply(void 0, p);
    }, b;
  };
}, Aw = [
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
], Wd = jw.bind(null);
Aw.forEach(function(e) {
  Wd[e] = Wd(e);
});
function Ow(e) {
  return e == null || Object.keys(e).length === 0;
}
function P0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Ow(o) ? n : o) : t;
  return /* @__PURE__ */ f.jsx(Ew, {
    styles: r
  });
}
function I0(e, t) {
  return Wd(e, t);
}
function Lw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const fh = [];
function Vr(e) {
  return fh[0] = e, rl(fh);
}
var M0 = { exports: {} }, Qe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fp = Symbol.for("react.transitional.element"), pp = Symbol.for("react.portal"), Cc = Symbol.for("react.fragment"), kc = Symbol.for("react.strict_mode"), Tc = Symbol.for("react.profiler"), Ec = Symbol.for("react.consumer"), Rc = Symbol.for("react.context"), Pc = Symbol.for("react.forward_ref"), Ic = Symbol.for("react.suspense"), Mc = Symbol.for("react.suspense_list"), $c = Symbol.for("react.memo"), jc = Symbol.for("react.lazy"), Nw = Symbol.for("react.view_transition"), zw = Symbol.for("react.client.reference");
function $n(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fp:
        switch (e = e.type, e) {
          case Cc:
          case Tc:
          case kc:
          case Ic:
          case Mc:
          case Nw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Rc:
              case Pc:
              case jc:
              case $c:
                return e;
              case Ec:
                return e;
              default:
                return t;
            }
        }
      case pp:
        return t;
    }
  }
}
Qe.ContextConsumer = Ec;
Qe.ContextProvider = Rc;
Qe.Element = fp;
Qe.ForwardRef = Pc;
Qe.Fragment = Cc;
Qe.Lazy = jc;
Qe.Memo = $c;
Qe.Portal = pp;
Qe.Profiler = Tc;
Qe.StrictMode = kc;
Qe.Suspense = Ic;
Qe.SuspenseList = Mc;
Qe.isContextConsumer = function(e) {
  return $n(e) === Ec;
};
Qe.isContextProvider = function(e) {
  return $n(e) === Rc;
};
Qe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fp;
};
Qe.isForwardRef = function(e) {
  return $n(e) === Pc;
};
Qe.isFragment = function(e) {
  return $n(e) === Cc;
};
Qe.isLazy = function(e) {
  return $n(e) === jc;
};
Qe.isMemo = function(e) {
  return $n(e) === $c;
};
Qe.isPortal = function(e) {
  return $n(e) === pp;
};
Qe.isProfiler = function(e) {
  return $n(e) === Tc;
};
Qe.isStrictMode = function(e) {
  return $n(e) === kc;
};
Qe.isSuspense = function(e) {
  return $n(e) === Ic;
};
Qe.isSuspenseList = function(e) {
  return $n(e) === Mc;
};
Qe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Cc || e === Tc || e === kc || e === Ic || e === Mc || typeof e == "object" && e !== null && (e.$$typeof === jc || e.$$typeof === $c || e.$$typeof === Rc || e.$$typeof === Ec || e.$$typeof === Pc || e.$$typeof === zw || e.getModuleId !== void 0);
};
Qe.typeOf = $n;
M0.exports = Qe;
var $0 = M0.exports;
function hr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function j0(e) {
  if (/* @__PURE__ */ m.isValidElement(e) || $0.isValidElementType(e) || !hr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = j0(e[n]);
  }), t;
}
function Lt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return hr(e) && hr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ m.isValidElement(t[o]) || $0.isValidElementType(t[o]) ? r[o] = t[o] : hr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && hr(e[o]) ? r[o] = Lt(e[o], t[o], n) : n.clone ? r[o] = hr(t[o]) ? j0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Dw = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function A0(e) {
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
  } = e, i = Dw(t), s = Object.keys(i);
  function l(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function a(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function c(d, x) {
    const b = s.indexOf(x);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : x) - r / 100}${n})`;
  }
  function u(d) {
    return s.indexOf(d) + 1 < s.length ? c(d, s[s.indexOf(d) + 1]) : l(d);
  }
  function p(d) {
    const x = s.indexOf(d);
    return x === 0 ? l(s[1]) : x === s.length - 1 ? a(s[x]) : c(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  const v = [];
  for (let d = 0; d < s.length; d += 1)
    v.push(l(s[d]));
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: c,
    only: u,
    not: p,
    unit: n,
    internal_mediaKeys: v,
    ...o
  };
}
const ph = /min-width:\s*([0-9.]+)/;
function mh(e, t) {
  if (!e.containerQueries || !Bw(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(ph)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(ph)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function Bw(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function O0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Fw(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function _w(e) {
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
const Ww = {
  borderRadius: 4
};
function L0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function di(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return Yw(t) ? t : Gw(e) ? bi(t) : n && r ? Vw(e, t) : n !== r ? bi(t) : Xw(e, t);
}
function Uw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = bi(e[t]);
  return r;
}
function Hw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = bi(e[n]));
  return t;
}
function Vw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = bi(t[r]);
  return e;
}
function Kw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Yw(e) {
  return typeof e != "object" || e === null;
}
function Gw(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function bi(e) {
  return Kw(e) ? Array.isArray(e) ? Uw(e) : Hw(e) : e;
}
function Xw(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = di(e[n], t[n]) : e[n] = bi(t[n]));
  return e;
}
const Qw = {}, Ac = {
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
}, za = A0({
  values: Ac
}), qw = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ac[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Gr(e, t, n) {
  const r = {};
  return Oc(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : di(r, l);
  });
}
function Oc(e, t, n, r) {
  if (t ?? (t = Qw), Array.isArray(n)) {
    const o = t.breakpoints ?? za;
    for (let i = 0; i < n.length; i += 1)
      Au(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? za, i = o.values ?? Ac;
    for (const s in n)
      if (O0(o.keys, s)) {
        const l = Fw(t.containerQueries ? t : qw, s);
        l && Au(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        Au(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function Au(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function N0(e = za) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function Ud(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    L0(t[o]) && delete t[o];
  }
  return t;
}
function Zw(e, ...t) {
  const r = [N0(e), ...t].reduce((o, i) => Lt(o, i), {});
  return Ud(e, r);
}
function Jw(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function Ou(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || Jw(t, n), i = Object.keys(o);
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
function eC(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (O0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function ie(e) {
  if (typeof e != "string")
    throw new Error(Cr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function z0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Lc(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Lc(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = hh(e.vars, o, r);
    if (i != null)
      return i;
  }
  return hh(e, o, r);
}
function hh(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : ie(s)}`;
    return r == null ? void 0 : r[l];
  }
  return o;
}
function St(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, c = Lc(a, r) || {};
    return Gr(s, l, (p) => {
      const v = z0(c, o, p, t);
      return n === !1 ? v : {
        [n]: v
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const tC = {
  internal_cache: {}
}, Da = {
  m: "margin",
  p: "padding"
}, gh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, yh = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ks = {};
for (const e in Da)
  Ks[e] = [Da[e]];
for (const e in Da)
  for (const t in gh) {
    const n = Da[e], r = gh[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Ks[e + t] = o;
  }
for (const e in yh)
  Ks[e] = Ks[yh[e]];
const mp = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), hp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...mp, ...hp];
function sl(e, t, n, r) {
  const o = Lc(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Nc(e) {
  return sl(e, "spacing", 8);
}
function Eo(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const vh = [""];
function D0(e, t) {
  var i;
  const n = e.theme ?? tC, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Nc(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = Ks[s] ?? (vh[0] = s, vh), a = e[s];
    Oc(o, e.theme, a, (c, u) => {
      const p = c ? o[c] : o;
      for (let v = 0; v < l.length; v += 1)
        p[l[v]] = Eo(r, u);
    });
  }
  return o;
}
function gp(e) {
  return D0(e, mp);
}
gp.propTypes = {};
gp.filterProps = mp;
const bt = gp;
function yp(e) {
  return D0(e, hp);
}
yp.propTypes = {};
yp.filterProps = hp;
const wt = yp;
function B0(e = 8, t = Nc({
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
function zc(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && di(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Cn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function jn(e, t) {
  return St({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const nC = jn("border", Cn), rC = jn("borderTop", Cn), oC = jn("borderRight", Cn), iC = jn("borderBottom", Cn), sC = jn("borderLeft", Cn), lC = jn("borderColor"), aC = jn("borderTopColor"), cC = jn("borderRightColor"), uC = jn("borderBottomColor"), dC = jn("borderLeftColor"), fC = jn("outline", Cn), pC = jn("outlineColor"), Dc = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = sl(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Eo(t, r)
    });
    return Gr(e, e.borderRadius, n);
  }
  return null;
};
Dc.propTypes = {};
Dc.filterProps = ["borderRadius"];
zc(nC, rC, oC, iC, sC, lC, aC, cC, uC, dC, Dc, fC, pC);
const Bc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = sl(e.theme, "spacing", 8), n = (r) => ({
      gap: Eo(t, r)
    });
    return Gr(e, e.gap, n);
  }
  return null;
};
Bc.propTypes = {};
Bc.filterProps = ["gap"];
const Fc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = sl(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Eo(t, r)
    });
    return Gr(e, e.columnGap, n);
  }
  return null;
};
Fc.propTypes = {};
Fc.filterProps = ["columnGap"];
const _c = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = sl(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Eo(t, r)
    });
    return Gr(e, e.rowGap, n);
  }
  return null;
};
_c.propTypes = {};
_c.filterProps = ["rowGap"];
const mC = St({
  prop: "gridColumn"
}), hC = St({
  prop: "gridRow"
}), gC = St({
  prop: "gridAutoFlow"
}), yC = St({
  prop: "gridAutoColumns"
}), vC = St({
  prop: "gridAutoRows"
}), xC = St({
  prop: "gridTemplateColumns"
}), SC = St({
  prop: "gridTemplateRows"
}), bC = St({
  prop: "gridTemplateAreas"
}), wC = St({
  prop: "gridArea"
});
zc(Bc, Fc, _c, mC, hC, gC, yC, vC, xC, SC, bC, wC);
function fi(e, t) {
  return t === "grey" ? t : e;
}
const CC = St({
  prop: "color",
  themeKey: "palette",
  transform: fi
}), kC = St({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: fi
}), TC = St({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: fi
});
zc(CC, kC, TC);
const EC = Ac;
function an(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const RC = St({
  prop: "width",
  transform: an
}), vp = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || EC[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: an(n)
      };
    };
    return Gr(e, e.maxWidth, t);
  }
  return null;
};
vp.filterProps = ["maxWidth"];
const PC = St({
  prop: "minWidth",
  transform: an
}), IC = St({
  prop: "height",
  transform: an
}), MC = St({
  prop: "maxHeight",
  transform: an
}), $C = St({
  prop: "minHeight",
  transform: an
});
St({
  prop: "size",
  cssProperty: "width",
  transform: an
});
St({
  prop: "size",
  cssProperty: "height",
  transform: an
});
const jC = St({
  prop: "boxSizing"
});
zc(RC, vp, PC, IC, MC, $C, jC);
const Wc = {
  // borders
  border: {
    themeKey: "borders",
    transform: Cn
  },
  borderTop: {
    themeKey: "borders",
    transform: Cn
  },
  borderRight: {
    themeKey: "borders",
    transform: Cn
  },
  borderBottom: {
    themeKey: "borders",
    transform: Cn
  },
  borderLeft: {
    themeKey: "borders",
    transform: Cn
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
    transform: Cn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Dc
  },
  // palette
  color: {
    themeKey: "palette",
    transform: fi
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: fi
  },
  backgroundColor: {
    themeKey: "palette",
    transform: fi
  },
  // spacing
  p: {
    style: wt
  },
  pt: {
    style: wt
  },
  pr: {
    style: wt
  },
  pb: {
    style: wt
  },
  pl: {
    style: wt
  },
  px: {
    style: wt
  },
  py: {
    style: wt
  },
  padding: {
    style: wt
  },
  paddingTop: {
    style: wt
  },
  paddingRight: {
    style: wt
  },
  paddingBottom: {
    style: wt
  },
  paddingLeft: {
    style: wt
  },
  paddingX: {
    style: wt
  },
  paddingY: {
    style: wt
  },
  paddingInline: {
    style: wt
  },
  paddingInlineStart: {
    style: wt
  },
  paddingInlineEnd: {
    style: wt
  },
  paddingBlock: {
    style: wt
  },
  paddingBlockStart: {
    style: wt
  },
  paddingBlockEnd: {
    style: wt
  },
  m: {
    style: bt
  },
  mt: {
    style: bt
  },
  mr: {
    style: bt
  },
  mb: {
    style: bt
  },
  ml: {
    style: bt
  },
  mx: {
    style: bt
  },
  my: {
    style: bt
  },
  margin: {
    style: bt
  },
  marginTop: {
    style: bt
  },
  marginRight: {
    style: bt
  },
  marginBottom: {
    style: bt
  },
  marginLeft: {
    style: bt
  },
  marginX: {
    style: bt
  },
  marginY: {
    style: bt
  },
  marginInline: {
    style: bt
  },
  marginInlineStart: {
    style: bt
  },
  marginInlineEnd: {
    style: bt
  },
  marginBlock: {
    style: bt
  },
  marginBlockStart: {
    style: bt
  },
  marginBlockEnd: {
    style: bt
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
    style: Bc
  },
  rowGap: {
    style: _c
  },
  columnGap: {
    style: Fc
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
    transform: an
  },
  maxWidth: {
    style: vp
  },
  minWidth: {
    transform: an
  },
  height: {
    transform: an
  },
  maxHeight: {
    transform: an
  },
  minHeight: {
    transform: an
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
}, AC = {};
function OC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = AC,
      nested: o
    } = t, i = r.unstable_sxConfig ?? Wc, s = {
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
      const u = r.breakpoints ?? za, p = N0(u);
      for (const v in c) {
        const d = LC(c[v], r);
        if (d != null) {
          if (typeof d != "object") {
            xh(p, v, d, r, i);
            continue;
          }
          if (i[v]) {
            xh(p, v, d, r, i);
            continue;
          }
          eC(u, d) ? Oc(p, t.theme, d, (x, b) => {
            p[x][v] = b;
          }) : (s.sx = d, p[v] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": mh(r, Ud(u, p))
      } : mh(r, Ud(u, p));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const Ro = OC();
function xh(e, t, n, r, o) {
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
    di(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: c
  } = i, u = Lc(r, s);
  Oc(e, r, n, (p, v) => {
    const d = z0(u, c, v, t);
    a === !1 ? di(p ? e[p] : e, d) : p ? e[p][a] = d : e[a] = d;
  });
}
function LC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function NC(e, t) {
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
function Uc(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = A0(n), a = B0(o);
  let c = Lt({
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
      ...Ww,
      ...i
    }
  }, s);
  return c = _w(c), c.applyStyles = NC, c = t.reduce((u, p) => Lt(u, p), c), c.unstable_sxConfig = {
    ...Wc,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, c.unstable_sx = function(p) {
    return Ro({
      sx: p,
      theme: this
    });
  }, c.internal_cache = {}, c;
}
function zC(e) {
  return Object.keys(e).length === 0;
}
function xp(e = null) {
  const t = m.useContext(ol);
  return !t || zC(t) ? e : t;
}
const DC = Uc();
function Hc(e = DC) {
  return xp(e);
}
function Lu(e) {
  const t = Vr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function F0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Hc(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Lu(typeof s == "function" ? s(o) : s)) : i = Lu(i)), /* @__PURE__ */ f.jsx(P0, {
    styles: i
  });
}
const Sh = (e) => e, BC = () => {
  let e = Sh;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Sh;
    }
  };
}, _0 = BC();
function W0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = W0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function J() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = W0(e)) && (r && (r += " "), r += t);
  return r;
}
function FC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = I0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Ro);
  return /* @__PURE__ */ m.forwardRef(function(a, c) {
    const u = Hc(n), {
      className: p,
      component: v = "div",
      ...d
    } = a;
    return /* @__PURE__ */ f.jsx(i, {
      as: v,
      ref: c,
      className: J(p, o ? o(r) : r),
      theme: t && u[t] || u,
      ...d
    });
  });
}
const _C = {
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
function de(e, t, n = "Mui") {
  const r = _C[t];
  return r ? `${n}-${r}` : `${_0.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = de(e, o, n);
  }), r;
}
function U0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Vr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Vr(o.style));
  }), r;
}
const WC = Uc();
function Nu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function go(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function UC(e) {
  return e ? (t, n) => n[e] : null;
}
function HC(e, t, n) {
  e.theme = L0(e.theme) ? n : e.theme[t] || e.theme;
}
function aa(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => aa(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? go(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? go(Vr(s), n) : s;
    }
    return H0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? go(Vr(r.style), n) : r.style : n ? go(Vr(r), n) : r;
}
function H0(e, t, n = [], r = void 0) {
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
    }), n.push(r ? go(Vr(l.style(o)), r) : l.style(o))) : n.push(r ? go(Vr(l.style), r) : l.style);
  }
  return n;
}
function V0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = WC,
    rootShouldForwardProp: r = Nu,
    slotShouldForwardProp: o = Nu
  } = e;
  function i(l) {
    HC(l, t, n);
  }
  return (l, a = {}) => {
    Lw(l, (k) => k.filter((R) => R !== Ro));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: p,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = UC(YC(u)),
      ...x
    } = a, b = c && c.startsWith("Mui") || u ? "components" : "custom", C = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), y = v || !1;
    let h = Nu;
    u === "Root" || u === "root" ? h = r : u ? h = o : KC(l) && (h = void 0);
    const S = I0(l, {
      shouldForwardProp: h,
      label: VC(),
      ...x
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(T) {
          return aa(T, k, T.theme.modularCssLayers ? b : void 0);
        };
      if (hr(k)) {
        const R = U0(k);
        return function(A) {
          return R.variants ? aa(A, R, A.theme.modularCssLayers ? b : void 0) : A.theme.modularCssLayers ? go(R.style, b) : R.style;
        };
      }
      return k;
    }, E = (...k) => {
      const R = [], T = k.map(w), A = [];
      if (R.push(i), c && d && A.push(function(M) {
        var N, j;
        const $ = (j = (N = M.theme.components) == null ? void 0 : N[c]) == null ? void 0 : j.styleOverrides;
        if (!$)
          return null;
        const L = {};
        for (const z in $)
          L[z] = aa(M, $[z], M.theme.modularCssLayers ? "theme" : void 0);
        return d(M, L);
      }), c && !C && A.push(function(M) {
        var L, N;
        const P = M.theme, $ = (N = (L = P == null ? void 0 : P.components) == null ? void 0 : L[c]) == null ? void 0 : N.variants;
        return $ ? H0(M, $, [], M.theme.modularCssLayers ? "theme" : void 0) : null;
      }), y || A.push(Ro), Array.isArray(T[0])) {
        const g = T.shift(), M = new Array(R.length).fill(""), P = new Array(A.length).fill("");
        let $;
        $ = [...M, ...g, ...P], $.raw = [...M, ...g.raw, ...P], R.unshift($);
      }
      const O = [...R, ...T, ...A], I = S(...O);
      return l.muiName && (I.muiName = l.muiName), I;
    };
    return S.withConfig && (E.withConfig = S.withConfig), E;
  };
}
function VC(e, t) {
  return void 0;
}
function KC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function YC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const GC = V0();
function Ys(e, t, n = !1) {
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
              const c = a;
              r[i][c] = Ys(s[c], l[c], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = J(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function XC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Ys(t.components[n].defaultProps, r);
}
function QC(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Hc(r);
  return o && (i = i[o] || i), XC({
    theme: i,
    name: n,
    props: t
  });
}
const ft = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function qC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Sp(e, t = 0, n = 1) {
  return qC(e, t, n);
}
function ZC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xr(ZC(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Cr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(Cr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const JC = (e) => {
  const t = Xr(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ls = (e, t) => {
  try {
    return JC(e);
  } catch {
    return e;
  }
};
function Vc(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function K0(e) {
  e = Xr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (c, u = (c + n / 30) % 12) => o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Vc({
    type: l,
    values: a
  });
}
function Hd(e) {
  e = Xr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Xr(K0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function e2(e, t) {
  const n = Hd(e), r = Hd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Nr(e, t) {
  return e = Xr(e), t = Sp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Vc(e);
}
function no(e, t, n) {
  try {
    return Nr(e, t);
  } catch {
    return e;
  }
}
function Kc(e, t) {
  if (e = Xr(e), t = Sp(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Vc(e);
}
function Ve(e, t, n) {
  try {
    return Kc(e, t);
  } catch {
    return e;
  }
}
function Yc(e, t) {
  if (e = Xr(e), t = Sp(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Vc(e);
}
function Ke(e, t, n) {
  try {
    return Yc(e, t);
  } catch {
    return e;
  }
}
function Vd(e, t = 0.15) {
  return Hd(e) > 0.5 ? Kc(e, t) : Yc(e, t);
}
function Ll(e, t, n) {
  try {
    return Vd(e, t);
  } catch {
    return e;
  }
}
const Y0 = /* @__PURE__ */ m.createContext(null);
function bp() {
  return m.useContext(Y0);
}
const t2 = typeof Symbol == "function" && Symbol.for, n2 = t2 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function r2(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function o2(e) {
  const {
    children: t,
    theme: n
  } = e, r = bp(), o = m.useMemo(() => {
    const i = r === null ? {
      ...n
    } : r2(r, n);
    return i != null && (i[n2] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ f.jsx(Y0.Provider, {
    value: o,
    children: t
  });
}
const G0 = /* @__PURE__ */ m.createContext();
function i2({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ f.jsx(G0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const ll = () => m.useContext(G0) ?? !1, X0 = /* @__PURE__ */ m.createContext(void 0);
function s2({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ f.jsx(X0.Provider, {
    value: e,
    children: t
  });
}
function l2(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Ys(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Ys(o, r, t.components.mergeClassNameAndStyle) : r;
}
function a2({
  props: e,
  name: t
}) {
  const n = m.useContext(X0);
  return l2({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let bh = 0;
function c2(e) {
  const [t, n] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (bh += 1, n(`mui-${bh}`));
  }, [t]), r;
}
const u2 = {
  ...da
}, wh = u2.useId;
function kr(e) {
  if (wh !== void 0) {
    const t = wh();
    return e ?? t;
  }
  return c2(e);
}
function d2(e) {
  const t = xp(), n = kr() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, ft(() => {
    var l, a;
    const i = document.querySelector("head");
    if (!i)
      return;
    const s = i.firstChild;
    if (o) {
      if (s && ((l = s.hasAttribute) != null && l.call(s, "data-mui-layer-order")) && s.getAttribute("data-mui-layer-order") === n)
        return;
      const c = document.createElement("style");
      c.setAttribute("data-mui-layer-order", n), c.textContent = o, i.prepend(c);
    } else
      (a = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || a.remove();
  }, [o, n]), o ? /* @__PURE__ */ f.jsx(F0, {
    styles: o
  }) : null;
}
const Ch = {};
function kh(e, t, n, r = !1) {
  return m.useMemo(() => {
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
function Q0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = xp(Ch), i = bp() || Ch, s = kh(r, o, n), l = kh(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", c = d2(s);
  return /* @__PURE__ */ f.jsx(o2, {
    theme: l,
    children: /* @__PURE__ */ f.jsx(ol.Provider, {
      value: s,
      children: /* @__PURE__ */ f.jsx(i2, {
        value: a,
        children: /* @__PURE__ */ f.jsxs(s2, {
          value: r ? s[r].components : s.components,
          children: [c, t]
        })
      })
    })
  });
}
const Th = {
  theme: void 0
};
function f2(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Th.theme = o.theme, i = U0(e(Th)), t = i, n = o.theme), i;
  };
}
const wp = "mode", Cp = "color-scheme", p2 = "data-color-scheme";
function m2(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = wp,
    colorSchemeStorageKey: i = Cp,
    attribute: s = p2,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let c = "", u = s;
  if (s === "class" && (u = ".%s"), s === "data" && (u = "[data-%s]"), u.startsWith(".")) {
    const v = u.substring(1);
    c += `${l}.classList.remove('${v}'.replace('%s', light), '${v}'.replace('%s', dark));
      ${l}.classList.add('${v}'.replace('%s', colorScheme));`;
  }
  const p = u.match(/\[([^[\]]+)\]/);
  if (p) {
    const [v, d] = p[1].split("=");
    d || (c += `${l}.removeAttribute('${v}'.replace('%s', light));
      ${l}.removeAttribute('${v}'.replace('%s', dark));`), c += `
      ${l}.setAttribute('${v}'.replace('%s', colorScheme), ${d ? `${d}.replace('%s', colorScheme)` : '""'});`;
  } else u !== ".%s" && (c += `${l}.setAttribute('${u}', colorScheme);`);
  return /* @__PURE__ */ f.jsx("script", {
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
function h2() {
}
const g2 = ({
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
      return h2;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function zu() {
}
function Eh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function q0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function y2(e) {
  return q0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function v2(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = wp,
    colorSchemeStorageKey: s = Cp,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = g2,
    noSsr: c = !1
  } = e, u = o.join(","), p = o.length > 1, v = m.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), d = m.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), x = m.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [b, C] = m.useState(() => {
    const T = (v == null ? void 0 : v.get(t)) || t, A = (d == null ? void 0 : d.get(n)) || n, O = (x == null ? void 0 : x.get(r)) || r;
    return {
      mode: T,
      systemMode: Eh(T),
      lightColorScheme: A,
      darkColorScheme: O
    };
  }), [y, h] = m.useState(c || !p);
  m.useEffect(() => {
    h(!0);
  }, []);
  const S = y2(b), w = m.useCallback((T) => {
    C((A) => {
      if (T === A.mode)
        return A;
      const O = T ?? t;
      return v == null || v.set(O), {
        ...A,
        mode: O,
        systemMode: Eh(O)
      };
    });
  }, [v, t]), E = m.useCallback((T) => {
    T ? typeof T == "string" ? T && !u.includes(T) ? console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`) : C((A) => {
      const O = {
        ...A
      };
      return q0(A, (I) => {
        I === "light" && (d == null || d.set(T), O.lightColorScheme = T), I === "dark" && (x == null || x.set(T), O.darkColorScheme = T);
      }), O;
    }) : C((A) => {
      const O = {
        ...A
      }, I = T.light === null ? n : T.light, g = T.dark === null ? r : T.dark;
      return I && (u.includes(I) ? (O.lightColorScheme = I, d == null || d.set(I)) : console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`)), g && (u.includes(g) ? (O.darkColorScheme = g, x == null || x.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), O;
    }) : C((A) => (d == null || d.set(n), x == null || x.set(r), {
      ...A,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [u, d, x, n, r]), k = m.useCallback((T) => {
    b.mode === "system" && C((A) => {
      const O = T != null && T.matches ? "dark" : "light";
      return A.systemMode === O ? A : {
        ...A,
        systemMode: O
      };
    });
  }, [b.mode]), R = m.useRef(k);
  return R.current = k, m.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const T = (...O) => R.current(...O), A = window.matchMedia("(prefers-color-scheme: dark)");
    return A.addListener(T), T(A), () => {
      A.removeListener(T);
    };
  }, [p]), m.useEffect(() => {
    if (p) {
      const T = (v == null ? void 0 : v.subscribe((I) => {
        (!I || ["light", "dark", "system"].includes(I)) && w(I || t);
      })) || zu, A = (d == null ? void 0 : d.subscribe((I) => {
        (!I || u.match(I)) && E({
          light: I
        });
      })) || zu, O = (x == null ? void 0 : x.subscribe((I) => {
        (!I || u.match(I)) && E({
          dark: I
        });
      })) || zu;
      return () => {
        T(), A(), O();
      };
    }
  }, [E, w, u, t, l, p, v, d, x]), {
    ...b,
    mode: y ? b.mode : void 0,
    systemMode: y ? b.systemMode : void 0,
    colorScheme: y ? S : void 0,
    setMode: w,
    setColorScheme: E
  };
}
const x2 = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function S2(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = wp,
    colorSchemeStorageKey: o = Cp,
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
  }, c = /* @__PURE__ */ m.createContext(void 0), u = () => m.useContext(c) || a, p = {}, v = {};
  function d(y) {
    var We, Ce, He, gt;
    const {
      children: h,
      theme: S,
      modeStorageKey: w = r,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: k = i,
      storageManager: R,
      storageWindow: T = typeof window > "u" ? void 0 : window,
      documentNode: A = typeof document > "u" ? void 0 : document,
      colorSchemeNode: O = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: I = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: M = "system",
      forceThemeRerender: P = !1,
      noSsr: $
    } = y, L = m.useRef(!1), N = bp(), j = m.useContext(c), z = !!j && !I, D = m.useMemo(() => S || (typeof n == "function" ? n() : n), [S]), W = D[t], _ = W || D, {
      colorSchemes: Q = p,
      components: V = v,
      cssVarPrefix: q
    } = _, X = Object.keys(Q).filter((oe) => !!Q[oe]).join(","), G = m.useMemo(() => X.split(","), [X]), U = typeof s == "string" ? s : s.light, ne = typeof s == "string" ? s : s.dark, se = Q[U] && Q[ne] ? M : ((Ce = (We = Q[_.defaultColorScheme]) == null ? void 0 : We.palette) == null ? void 0 : Ce.mode) || ((He = _.palette) == null ? void 0 : He.mode), {
      mode: Te,
      setMode: Ee,
      systemMode: he,
      lightColorScheme: ae,
      darkColorScheme: Ae,
      colorScheme: ze,
      setColorScheme: Pe
    } = v2({
      supportedColorSchemes: G,
      defaultLightColorScheme: U,
      defaultDarkColorScheme: ne,
      modeStorageKey: w,
      colorSchemeStorageKey: E,
      defaultMode: se,
      storageManager: R,
      storageWindow: T,
      noSsr: $
    });
    let Le = Te, ue = ze;
    z && (Le = j.mode, ue = j.colorScheme);
    let Oe = ue || _.defaultColorScheme;
    _.vars && !P && (Oe = _.defaultColorScheme);
    const Se = m.useMemo(() => {
      var Be;
      const oe = ((Be = _.generateThemeVars) == null ? void 0 : Be.call(_)) || _.vars, be = {
        ..._,
        components: V,
        colorSchemes: Q,
        cssVarPrefix: q,
        vars: oe
      };
      if (typeof be.generateSpacing == "function" && (be.spacing = be.generateSpacing()), Oe) {
        const lt = Q[Oe];
        lt && typeof lt == "object" && Object.keys(lt).forEach((ke) => {
          lt[ke] && typeof lt[ke] == "object" ? be[ke] = {
            ...be[ke],
            ...lt[ke]
          } : be[ke] = lt[ke];
        });
      }
      return l ? l(be) : be;
    }, [_, Oe, V, Q, q]), ge = _.colorSchemeSelector;
    ft(() => {
      if (ue && O && ge && ge !== "media") {
        const oe = ge;
        let be = ge;
        if (oe === "class" && (be = ".%s"), oe === "data" && (be = "[data-%s]"), oe != null && oe.startsWith("data-") && !oe.includes("%s") && (be = `[${oe}="%s"]`), be.startsWith("."))
          O.classList.remove(...G.map((Be) => be.substring(1).replace("%s", Be))), O.classList.add(be.substring(1).replace("%s", ue));
        else {
          const Be = be.replace("%s", ue).match(/\[([^\]]+)\]/);
          if (Be) {
            const [lt, ke] = Be[1].split("=");
            ke || G.forEach((An) => {
              O.removeAttribute(lt.replace(ue, An));
            }), O.setAttribute(lt, ke ? ke.replace(/"|'/g, "") : "");
          } else
            O.setAttribute(be, ue);
        }
      }
    }, [ue, ge, O, G]), m.useEffect(() => {
      let oe;
      if (k && L.current && A) {
        const be = A.createElement("style");
        be.appendChild(A.createTextNode(x2)), A.head.appendChild(be), window.getComputedStyle(A.body), oe = setTimeout(() => {
          A.head.removeChild(be);
        }, 1);
      }
      return () => {
        clearTimeout(oe);
      };
    }, [ue, k, A]), m.useEffect(() => (L.current = !0, () => {
      L.current = !1;
    }), []);
    const Ie = m.useMemo(() => ({
      allColorSchemes: G,
      colorScheme: ue,
      darkColorScheme: Ae,
      lightColorScheme: ae,
      mode: Le,
      setColorScheme: Pe,
      setMode: Ee,
      systemMode: he
    }), [G, ue, Ae, ae, Le, Pe, Ee, he, Se.colorSchemeSelector]);
    let De = !0;
    (g || _.cssVariables === !1 || z && (N == null ? void 0 : N.cssVarPrefix) === q) && (De = !1);
    const rt = /* @__PURE__ */ f.jsxs(m.Fragment, {
      children: [/* @__PURE__ */ f.jsx(Q0, {
        themeId: W ? t : void 0,
        theme: Se,
        children: h
      }), De && /* @__PURE__ */ f.jsx(P0, {
        styles: ((gt = Se.generateStyleSheets) == null ? void 0 : gt.call(Se)) || []
      })]
    });
    return z ? rt : /* @__PURE__ */ f.jsx(c.Provider, {
      value: Ie,
      children: rt
    });
  }
  const x = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: u,
    getInitColorSchemeScript: (y) => m2({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...y
    })
  };
}
function b2(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const w2 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Rh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (w2.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, C2 = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, k2 = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Du(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return C2(
    e,
    (l, a, c) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const u = `--${n ? `${n}-` : ""}${l.join("-")}`, p = k2(l, a);
        Object.assign(o, {
          [u]: p
        }), Rh(i, l, `var(${u})`, c), Rh(s, l, `var(${u}, ${p})`, c);
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
function T2(e, t = {}) {
  const {
    getSelector: n = y,
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
    css: p,
    varsWithDefaults: v
  } = Du(c, t);
  let d = v;
  const x = {}, {
    [a]: b,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([w, E]) => {
    const {
      vars: k,
      css: R,
      varsWithDefaults: T
    } = Du(E, t);
    d = Lt(d, T), x[w] = {
      css: R,
      vars: k
    };
  }), b) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: k
    } = Du(b, t);
    d = Lt(d, k), x[a] = {
      css: w,
      vars: E
    };
  }
  function y(w, E) {
    var R, T;
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), w) {
      if (k === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((T = (R = s[w]) == null ? void 0 : R.palette) == null ? void 0 : T.mode) || w})`]: {
            ":root": E
          }
        };
      if (k)
        return e.defaultColorScheme === w ? `:root, ${k.replace("%s", String(w))}` : k.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: d,
    generateThemeVars: () => {
      let w = {
        ...u
      };
      return Object.entries(x).forEach(([, {
        vars: E
      }]) => {
        w = Lt(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      var A, O;
      const w = [], E = e.defaultColorScheme || "light";
      function k(I, g) {
        Object.keys(g).length && w.push(typeof I == "string" ? {
          [I]: {
            ...g
          }
        } : I);
      }
      k(n(void 0, {
        ...p
      }), p);
      const {
        [E]: R,
        ...T
      } = x;
      if (R) {
        const {
          css: I
        } = R, g = (O = (A = s[E]) == null ? void 0 : A.palette) == null ? void 0 : O.mode, M = !r && g ? {
          colorScheme: g,
          ...I
        } : {
          ...I
        };
        k(n(E, {
          ...M
        }), M);
      }
      return Object.entries(T).forEach(([I, {
        css: g
      }]) => {
        var $, L;
        const M = (L = ($ = s[I]) == null ? void 0 : $.palette) == null ? void 0 : L.mode, P = !r && M ? {
          colorScheme: M,
          ...g
        } : {
          ...g
        };
        k(n(I, {
          ...P
        }), P);
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
function E2(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function fe(e, t, n = void 0) {
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
function Bu(e, t) {
  var n, r, o;
  return /* @__PURE__ */ m.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const R2 = Uc(), P2 = GC("div", {
  name: "MuiStack",
  slot: "Root"
});
function I2(e) {
  return QC({
    props: e,
    name: "MuiStack",
    defaultTheme: R2
  });
}
function M2(e, t) {
  const n = m.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ m.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const $2 = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], j2 = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Gr({
      theme: t
    }, Ou({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Nc(t), o = Object.keys(t.breakpoints.values).reduce((a, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (a[c] = !0), a), {}), i = Ou({
      values: e.direction,
      base: o
    }), s = Ou({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, c, u) => {
      if (!i[a]) {
        const v = c > 0 ? i[u[c - 1]] : "column";
        i[a] = v;
      }
    }), n = Lt(n, Gr({
      theme: t
    }, s, (a, c) => e.useFlexGap ? {
      gap: Eo(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${$2(c ? i[c] : e.direction)}`]: Eo(r, a)
      }
    }));
  }
  return n = Zw(t.breakpoints, n), n;
};
function A2(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = P2,
    useThemeProps: n = I2,
    componentName: r = "MuiStack"
  } = e, o = () => fe({
    root: ["root"]
  }, (a) => de(r, a), {}), i = t(j2);
  return /* @__PURE__ */ m.forwardRef(function(a, c) {
    const u = n(a), {
      component: p = "div",
      direction: v = "column",
      spacing: d = 0,
      divider: x,
      children: b,
      className: C,
      useFlexGap: y = !1,
      ...h
    } = u, S = {
      direction: v,
      spacing: d,
      useFlexGap: y
    }, w = o();
    return /* @__PURE__ */ f.jsx(i, {
      as: p,
      ownerState: S,
      ref: c,
      className: J(w.root, C),
      ...h,
      children: x ? M2(b, x) : b
    });
  });
}
function Z0() {
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
      paper: _s.white,
      default: _s.white
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
const J0 = Z0();
function e1() {
  return {
    text: {
      primary: _s.white,
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
      active: _s.white,
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
const Kd = e1();
function Ph(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Yc(e.main, o) : t === "dark" && (e.dark = Kc(e.main, i)));
}
function Ih(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function O2(e = "light") {
  return e === "dark" ? {
    main: Fo[200],
    light: Fo[50],
    dark: Fo[400]
  } : {
    main: Fo[700],
    light: Fo[400],
    dark: Fo[800]
  };
}
function L2(e = "light") {
  return e === "dark" ? {
    main: Bo[200],
    light: Bo[50],
    dark: Bo[400]
  } : {
    main: Bo[500],
    light: Bo[300],
    dark: Bo[700]
  };
}
function N2(e = "light") {
  return e === "dark" ? {
    main: Do[500],
    light: Do[300],
    dark: Do[700]
  } : {
    main: Do[700],
    light: Do[400],
    dark: Do[800]
  };
}
function z2(e = "light") {
  return e === "dark" ? {
    main: _o[400],
    light: _o[300],
    dark: _o[700]
  } : {
    main: _o[700],
    light: _o[500],
    dark: _o[900]
  };
}
function D2(e = "light") {
  return e === "dark" ? {
    main: Wo[400],
    light: Wo[300],
    dark: Wo[700]
  } : {
    main: Wo[800],
    light: Wo[500],
    dark: Wo[900]
  };
}
function B2(e = "light") {
  return e === "dark" ? {
    main: Ki[400],
    light: Ki[300],
    dark: Ki[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ki[500],
    dark: Ki[900]
  };
}
function F2(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function kp(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || O2(t), l = e.secondary || L2(t), a = e.error || N2(t), c = e.info || z2(t), u = e.success || D2(t), p = e.warning || B2(t);
  function v(C) {
    return o ? F2(C) : e2(C, Kd.text.primary) >= n ? Kd.text.primary : J0.text.primary;
  }
  const d = ({
    color: C,
    name: y,
    mainShade: h = 500,
    lightShade: S = 300,
    darkShade: w = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[h] && (C.main = C[h]), !C.hasOwnProperty("main"))
      throw new Error(Cr(11, y ? ` (${y})` : "", h));
    if (typeof C.main != "string")
      throw new Error(Cr(12, y ? ` (${y})` : "", JSON.stringify(C.main)));
    return o ? (Ih(o, C, "light", S, r), Ih(o, C, "dark", w, r)) : (Ph(C, "light", S, r), Ph(C, "dark", w, r)), C.contrastText || (C.contrastText = v(C.main)), C;
  };
  let x;
  return t === "light" ? x = Z0() : t === "dark" && (x = e1()), Lt({
    // A collection of common colors.
    common: {
      ..._s
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: $b,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: v,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...x
  }, i);
}
function _2(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function W2(e, t) {
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
function U2(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Mh = {
  textTransform: "uppercase"
}, $h = '"Roboto", "Helvetica", "Arial", sans-serif';
function t1(e, t) {
  const {
    fontFamily: n = $h,
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
    ...p
  } = typeof t == "function" ? t(e) : t, v = r / 14, d = u || ((C) => `${C / a * v}rem`), x = (C, y, h, S, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: d(y),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === $h ? {
      letterSpacing: `${U2(S / y)}em`
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
    button: x(s, 14, 1.75, 0.4, Mh),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, Mh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Lt({
    htmlFontSize: a,
    pxToRem: d,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...b
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const H2 = 0.2, V2 = 0.14, K2 = 0.12;
function it(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${H2})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${V2})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${K2})`].join(",");
}
const Y2 = ["none", it(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), it(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), it(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), it(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), it(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), it(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), it(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), it(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), it(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), it(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), it(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), it(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), it(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), it(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), it(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), it(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), it(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), it(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), it(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), it(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), it(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), it(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), it(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), it(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], G2 = ["all"], X2 = {}, Q2 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, q2 = {
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
function jh(e) {
  return `${Math.round(e)}ms`;
}
function Z2(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function J2(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...Q2,
    ...t.easing
  }, r = {
    ...q2,
    ...t.duration
  }, o = (s = G2, l = X2) => {
    const {
      duration: a = r.standard,
      easing: c = n.easeInOut,
      delay: u = 0,
      ...p
    } = l;
    return (Array.isArray(s) ? s : [s]).map((v) => `${v} ${typeof a == "string" ? a : jh(a)} ${c} ${typeof u == "string" ? u : jh(u)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: Z2,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const ek = {};
function tk(e = ek) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const nk = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function rk(e) {
  return hr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function n1(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !rk(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : hr(l) && (r[s] = {
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
function Ah(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const ok = (e) => {
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
function ik(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Nr(t, ok(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Ah(n)})` : Yc(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Ah(n)})` : Kc(t, n);
    }
  });
}
function Yd(e = {}, ...t) {
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
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Cr(22));
  const v = kp({
    ...i,
    colorSpace: u
  }), d = Uc(e);
  let x = Lt(d, {
    mixins: W2(d.breakpoints, r),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Y2.slice(),
    typography: t1(v, a),
    motion: tk(s),
    transitions: J2(l),
    zIndex: {
      ...nk
    }
  });
  return x = Lt(x, p), x = t.reduce((b, C) => Lt(b, C), x), delete x.transitions.reducedMotion, x.unstable_sxConfig = {
    ...Wc,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, x.unstable_sx = function(C) {
    return Ro({
      sx: C,
      theme: this
    });
  }, x.toRuntimeSource = n1, ik(x), x;
}
function Gd(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const sk = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Gd(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function r1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function o1(e) {
  return e === "dark" ? sk : [];
}
function lk(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = kp({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...r1(s.mode),
      ...n
    },
    overlays: r || o1(s.mode),
    ...i
  };
}
function ak(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const ck = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], uk = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return ck(e.cssVarPrefix).forEach((l) => {
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
function dk(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function as(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : K0(e);
}
function ur(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ls(as(e[t])));
}
function fk(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Kn = (e) => {
  try {
    return e();
  } catch {
  }
}, pk = (e = "mui") => b2(e);
function Fu(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = lk({
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
  } = Yd({
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
      ...r1(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || o1(i)
  }, l;
}
function mk(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = ak,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, p = Object.keys(n)[0], v = r || (n.light && p !== "light" ? "light" : p), d = pk(i), {
    [v]: x,
    light: b,
    dark: C,
    ...y
  } = n, h = {
    ...y
  };
  let S = x;
  if ((v === "dark" && !("dark" in n) || v === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(Cr(21, v));
  let w;
  s && (w = "oklch");
  const E = Fu(w, h, S, u, v);
  b && !h.light && Fu(w, h, b, void 0, "light"), C && !h.dark && Fu(w, h, C, void 0, "dark");
  let k = {
    defaultColorScheme: v,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: d,
    colorSchemes: h,
    font: {
      ..._2(E.typography),
      ...E.font
    },
    spacing: fk(u.spacing)
  };
  Object.keys(k.colorSchemes).forEach((I) => {
    const g = k.colorSchemes[I].palette, M = ($) => {
      const L = $.split("-"), N = L[1], j = L[2];
      return d($, g[N][j]);
    };
    g.mode === "light" && (F(g.common, "background", "#fff"), F(g.common, "onBackground", "#000")), g.mode === "dark" && (F(g.common, "background", "#000"), F(g.common, "onBackground", "#fff"));
    function P($, L, N) {
      if (w) {
        let j;
        return $ === no && (j = `transparent ${((1 - N) * 100).toFixed(0)}%`), $ === Ve && (j = `#000 ${(N * 100).toFixed(0)}%`), $ === Ke && (j = `#fff ${(N * 100).toFixed(0)}%`), `color-mix(in ${w}, ${L}, ${j})`;
      }
      return $(L, N);
    }
    if (dk(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      F(g.Alert, "errorColor", P(Ve, s ? d("palette-error-light") : g.error.light, 0.6)), F(g.Alert, "infoColor", P(Ve, s ? d("palette-info-light") : g.info.light, 0.6)), F(g.Alert, "successColor", P(Ve, s ? d("palette-success-light") : g.success.light, 0.6)), F(g.Alert, "warningColor", P(Ve, s ? d("palette-warning-light") : g.warning.light, 0.6)), F(g.Alert, "errorFilledBg", M("palette-error-main")), F(g.Alert, "infoFilledBg", M("palette-info-main")), F(g.Alert, "successFilledBg", M("palette-success-main")), F(g.Alert, "warningFilledBg", M("palette-warning-main")), F(g.Alert, "errorFilledColor", Kn(() => g.getContrastText(g.error.main))), F(g.Alert, "infoFilledColor", Kn(() => g.getContrastText(g.info.main))), F(g.Alert, "successFilledColor", Kn(() => g.getContrastText(g.success.main))), F(g.Alert, "warningFilledColor", Kn(() => g.getContrastText(g.warning.main))), F(g.Alert, "errorStandardBg", P(Ke, s ? d("palette-error-light") : g.error.light, 0.9)), F(g.Alert, "infoStandardBg", P(Ke, s ? d("palette-info-light") : g.info.light, 0.9)), F(g.Alert, "successStandardBg", P(Ke, s ? d("palette-success-light") : g.success.light, 0.9)), F(g.Alert, "warningStandardBg", P(Ke, s ? d("palette-warning-light") : g.warning.light, 0.9)), F(g.Alert, "errorIconColor", M("palette-error-main")), F(g.Alert, "infoIconColor", M("palette-info-main")), F(g.Alert, "successIconColor", M("palette-success-main")), F(g.Alert, "warningIconColor", M("palette-warning-main")), F(g.AppBar, "defaultBg", M("palette-grey-100")), F(g.Avatar, "defaultBg", M("palette-grey-400")), F(g.Button, "inheritContainedBg", M("palette-grey-300")), F(g.Button, "inheritContainedHoverBg", M("palette-grey-A100")), F(g.Chip, "defaultBorder", M("palette-grey-400")), F(g.Chip, "defaultAvatarColor", M("palette-grey-700")), F(g.Chip, "defaultIconColor", M("palette-grey-700")), F(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(g.LinearProgress, "primaryBg", P(Ke, s ? d("palette-primary-main") : g.primary.main, 0.62)), F(g.LinearProgress, "secondaryBg", P(Ke, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), F(g.LinearProgress, "errorBg", P(Ke, s ? d("palette-error-main") : g.error.main, 0.62)), F(g.LinearProgress, "infoBg", P(Ke, s ? d("palette-info-main") : g.info.main, 0.62)), F(g.LinearProgress, "successBg", P(Ke, s ? d("palette-success-main") : g.success.main, 0.62)), F(g.LinearProgress, "warningBg", P(Ke, s ? d("palette-warning-light") : g.warning.main, 0.62)), F(g.Skeleton, "bg", w ? P(no, s ? d("palette-text-primary") : g.text.primary, 0.11) : `rgba(${M("palette-text-primaryChannel")} / 0.11)`), F(g.Slider, "primaryTrack", P(Ke, s ? d("palette-primary-main") : g.primary.main, 0.62)), F(g.Slider, "secondaryTrack", P(Ke, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), F(g.Slider, "errorTrack", P(Ke, s ? d("palette-error-main") : g.error.main, 0.62)), F(g.Slider, "infoTrack", P(Ke, s ? d("palette-info-main") : g.info.main, 0.62)), F(g.Slider, "successTrack", P(Ke, s ? d("palette-success-main") : g.success.main, 0.62)), F(g.Slider, "warningTrack", P(Ke, s ? d("palette-warning-main") : g.warning.main, 0.62));
      const $ = w ? P(Ve, s ? d("palette-background-default") : g.background.default, 0.6825) : Ll(g.background.default, 0.8);
      F(g.SnackbarContent, "bg", $), F(g.SnackbarContent, "color", Kn(() => w ? Kd.text.primary : g.getContrastText($))), F(g.SpeedDialAction, "fabHoverBg", Ll(g.background.paper, 0.15)), F(g.StepConnector, "border", M("palette-grey-400")), F(g.StepContent, "border", M("palette-grey-400")), F(g.Switch, "defaultColor", M("palette-common-white")), F(g.Switch, "defaultDisabledColor", M("palette-grey-100")), F(g.Switch, "primaryDisabledColor", P(Ke, s ? d("palette-primary-main") : g.primary.main, 0.62)), F(g.Switch, "secondaryDisabledColor", P(Ke, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), F(g.Switch, "errorDisabledColor", P(Ke, s ? d("palette-error-main") : g.error.main, 0.62)), F(g.Switch, "infoDisabledColor", P(Ke, s ? d("palette-info-main") : g.info.main, 0.62)), F(g.Switch, "successDisabledColor", P(Ke, s ? d("palette-success-main") : g.success.main, 0.62)), F(g.Switch, "warningDisabledColor", P(Ke, s ? d("palette-warning-main") : g.warning.main, 0.62)), F(g.TableCell, "border", P(Ke, no(s ? d("palette-divider") : g.divider, 1), 0.88)), F(g.Tooltip, "bg", P(no, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      F(g.Alert, "errorColor", P(Ke, s ? d("palette-error-light") : g.error.light, 0.6)), F(g.Alert, "infoColor", P(Ke, s ? d("palette-info-light") : g.info.light, 0.6)), F(g.Alert, "successColor", P(Ke, s ? d("palette-success-light") : g.success.light, 0.6)), F(g.Alert, "warningColor", P(Ke, s ? d("palette-warning-light") : g.warning.light, 0.6)), F(g.Alert, "errorFilledBg", M("palette-error-dark")), F(g.Alert, "infoFilledBg", M("palette-info-dark")), F(g.Alert, "successFilledBg", M("palette-success-dark")), F(g.Alert, "warningFilledBg", M("palette-warning-dark")), F(g.Alert, "errorFilledColor", Kn(() => g.getContrastText(g.error.dark))), F(g.Alert, "infoFilledColor", Kn(() => g.getContrastText(g.info.dark))), F(g.Alert, "successFilledColor", Kn(() => g.getContrastText(g.success.dark))), F(g.Alert, "warningFilledColor", Kn(() => g.getContrastText(g.warning.dark))), F(g.Alert, "errorStandardBg", P(Ve, s ? d("palette-error-light") : g.error.light, 0.9)), F(g.Alert, "infoStandardBg", P(Ve, s ? d("palette-info-light") : g.info.light, 0.9)), F(g.Alert, "successStandardBg", P(Ve, s ? d("palette-success-light") : g.success.light, 0.9)), F(g.Alert, "warningStandardBg", P(Ve, s ? d("palette-warning-light") : g.warning.light, 0.9)), F(g.Alert, "errorIconColor", M("palette-error-main")), F(g.Alert, "infoIconColor", M("palette-info-main")), F(g.Alert, "successIconColor", M("palette-success-main")), F(g.Alert, "warningIconColor", M("palette-warning-main")), F(g.AppBar, "defaultBg", M("palette-grey-900")), F(g.AppBar, "darkBg", M("palette-background-paper")), F(g.AppBar, "darkColor", M("palette-text-primary")), F(g.Avatar, "defaultBg", M("palette-grey-600")), F(g.Button, "inheritContainedBg", M("palette-grey-800")), F(g.Button, "inheritContainedHoverBg", M("palette-grey-700")), F(g.Chip, "defaultBorder", M("palette-grey-700")), F(g.Chip, "defaultAvatarColor", M("palette-grey-300")), F(g.Chip, "defaultIconColor", M("palette-grey-300")), F(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(g.LinearProgress, "primaryBg", P(Ve, s ? d("palette-primary-main") : g.primary.main, 0.5)), F(g.LinearProgress, "secondaryBg", P(Ve, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), F(g.LinearProgress, "errorBg", P(Ve, s ? d("palette-error-main") : g.error.main, 0.5)), F(g.LinearProgress, "infoBg", P(Ve, s ? d("palette-info-main") : g.info.main, 0.5)), F(g.LinearProgress, "successBg", P(Ve, s ? d("palette-success-main") : g.success.main, 0.5)), F(g.LinearProgress, "warningBg", P(Ve, s ? d("palette-warning-main") : g.warning.main, 0.5)), F(g.Skeleton, "bg", w ? P(no, s ? d("palette-text-primary") : g.text.primary, 0.13) : `rgba(${M("palette-text-primaryChannel")} / 0.13)`), F(g.Slider, "primaryTrack", P(Ve, s ? d("palette-primary-main") : g.primary.main, 0.5)), F(g.Slider, "secondaryTrack", P(Ve, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), F(g.Slider, "errorTrack", P(Ve, s ? d("palette-error-main") : g.error.main, 0.5)), F(g.Slider, "infoTrack", P(Ve, s ? d("palette-info-main") : g.info.main, 0.5)), F(g.Slider, "successTrack", P(Ve, s ? d("palette-success-main") : g.success.main, 0.5)), F(g.Slider, "warningTrack", P(Ve, s ? d("palette-warning-light") : g.warning.main, 0.5));
      const $ = w ? P(Ke, s ? d("palette-background-default") : g.background.default, 0.985) : Ll(g.background.default, 0.98);
      F(g.SnackbarContent, "bg", $), F(g.SnackbarContent, "color", Kn(() => w ? J0.text.primary : g.getContrastText($))), F(g.SpeedDialAction, "fabHoverBg", Ll(g.background.paper, 0.15)), F(g.StepConnector, "border", M("palette-grey-600")), F(g.StepContent, "border", M("palette-grey-600")), F(g.Switch, "defaultColor", M("palette-grey-300")), F(g.Switch, "defaultDisabledColor", M("palette-grey-600")), F(g.Switch, "primaryDisabledColor", P(Ve, s ? d("palette-primary-main") : g.primary.main, 0.55)), F(g.Switch, "secondaryDisabledColor", P(Ve, s ? d("palette-secondary-main") : g.secondary.main, 0.55)), F(g.Switch, "errorDisabledColor", P(Ve, s ? d("palette-error-main") : g.error.main, 0.55)), F(g.Switch, "infoDisabledColor", P(Ve, s ? d("palette-info-main") : g.info.main, 0.55)), F(g.Switch, "successDisabledColor", P(Ve, s ? d("palette-success-main") : g.success.main, 0.55)), F(g.Switch, "warningDisabledColor", P(Ve, s ? d("palette-warning-light") : g.warning.main, 0.55)), F(g.TableCell, "border", P(Ve, no(s ? d("palette-divider") : g.divider, 1), 0.68)), F(g.Tooltip, "bg", P(no, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    s || (ur(g.background, "default"), ur(g.background, "paper"), ur(g.common, "background"), ur(g.common, "onBackground"), ur(g, "divider")), Object.keys(g).forEach(($) => {
      const L = g[$];
      $ !== "tonalOffset" && !s && L && typeof L == "object" && (L.main && F(g[$], "mainChannel", ls(as(L.main))), L.light && F(g[$], "lightChannel", ls(as(L.light))), L.dark && F(g[$], "darkChannel", ls(as(L.dark))), L.contrastText && F(g[$], "contrastTextChannel", ls(as(L.contrastText))), $ === "text" && (ur(g[$], "primary"), ur(g[$], "secondary")), $ === "action" && (L.active && ur(g[$], "active"), L.selected && ur(g[$], "selected")));
    });
  }), k = t.reduce((I, g) => Lt(I, g), k);
  const R = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: uk(k),
    enableContrastVars: s
  }, {
    vars: T,
    generateThemeVars: A,
    generateStyleSheets: O
  } = T2(k, R);
  return k.vars = T, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([I, g]) => {
    k[I] = g;
  }), k.generateThemeVars = A, k.generateStyleSheets = O, k.generateSpacing = function() {
    return B0(u.spacing, Nc(this));
  }, k.getColorSchemeSelector = E2(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Wc,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, k.unstable_sx = function(g) {
    return Ro({
      sx: g,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = n1, k;
}
function Oh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: kp({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Gc(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...s
  } = e, l = i || "light", a = o == null ? void 0 : o[l], c = {
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
      return Yd(e, ...t);
    let u = n;
    "palette" in e || c[l] && (c[l] !== !0 ? u = c[l].palette : l === "dark" && (u = {
      mode: "dark"
    }));
    const p = Yd({
      ...e,
      palette: u
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = c, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...c.light !== !0 && c.light,
      palette: p.palette
    }, Oh(p, "dark", c.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...c.dark !== !0 && c.dark,
      palette: p.palette
    }, Oh(p, "light", c.light)), p;
  }
  return !n && !("light" in c) && l === "light" && (c.light = !0), mk({
    ...s,
    colorSchemes: c,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Ba(e) {
  return typeof e == "string";
}
function al(e, t = 166) {
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
function nt(...e) {
  const t = m.useRef(void 0), n = m.useCallback((r) => {
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
  return m.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function Ze(e) {
  const t = m.useRef(e);
  return ft(() => {
    t.current = e;
  }), m.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function ht(e) {
  return e && e.ownerDocument || document;
}
function pn(e) {
  return ht(e).defaultView || window;
}
function Nl(e) {
  return parseInt(e, 10) || 0;
}
const hk = {
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
function gk(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Lh(e) {
  return gk(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const yk = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: c
  } = m.useRef(l != null), u = m.useRef(null), p = nt(n, u), v = m.useRef(null), d = m.useRef(null), x = m.useCallback(() => {
    const S = u.current, w = d.current;
    if (!S || !w)
      return;
    const k = pn(S).getComputedStyle(S);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = S.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const R = k.boxSizing, T = Nl(k.paddingBottom) + Nl(k.paddingTop), A = Nl(k.borderBottomWidth) + Nl(k.borderTopWidth), O = w.scrollHeight;
    w.value = "x";
    const I = w.scrollHeight;
    let g = O;
    i && (g = Math.max(Number(i) * I, g)), o && (g = Math.min(Number(o) * I, g)), g = Math.max(g, I);
    const M = g + (R === "border-box" ? T + A : 0), P = Math.abs(g - O) <= 1;
    return {
      outerHeightStyle: M,
      overflowing: P
    };
  }, [o, i, t.placeholder]), b = Ze(() => {
    const S = u.current, w = x();
    if (!S || !w || Lh(w))
      return !1;
    const E = w.outerHeightStyle;
    return v.current != null && v.current !== E;
  }), C = m.useCallback(() => {
    const S = u.current, w = x();
    if (!S || !w || Lh(w))
      return;
    const E = w.outerHeightStyle;
    v.current !== E && (v.current = E, S.style.height = `${E}px`), S.style.overflow = w.overflowing ? "hidden" : "";
  }, [x]), y = m.useRef(-1);
  ft(() => {
    const S = al(C), w = u == null ? void 0 : u.current;
    if (!w)
      return;
    const E = pn(w);
    E.addEventListener("resize", S);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(w), cancelAnimationFrame(y.current), C(), y.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      S.clear(), cancelAnimationFrame(y.current), E.removeEventListener("resize", S), k && k.disconnect();
    };
  }, [x, C, b]), ft(() => {
    C();
  });
  const h = (S) => {
    c || C();
    const w = S.target, E = w.value.length, k = w.value.endsWith(`
`), R = w.selectionStart === E;
    k && R && w.setSelectionRange(E, E), r && r(S);
  };
  return /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ f.jsx("textarea", {
      value: l,
      onChange: h,
      ref: p,
      rows: i,
      style: s,
      ...a
    }), /* @__PURE__ */ f.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: d,
      tabIndex: -1,
      style: {
        ...hk.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), cl = /* @__PURE__ */ m.createContext(void 0);
function vk() {
  return m.useContext(cl);
}
function ji({
  props: e,
  states: t
}) {
  const n = m.useContext(cl), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const Tp = Gc();
function ar() {
  const e = Hc(Tp);
  return e[rr] || e;
}
function xk(e) {
  return /* @__PURE__ */ f.jsx(F0, {
    ...e,
    defaultTheme: Tp,
    themeId: rr
  });
}
function i1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const on = (e) => i1(e) && e !== "classes", H = V0({
  themeId: rr,
  defaultTheme: Tp,
  rootShouldForwardProp: on
});
function Sk(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ f.jsx(xk, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const xe = f2;
function pe(e) {
  return a2(e);
}
function Jn(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Nh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Fa(e, t = !1) {
  return e && (Nh(e.value) && e.value !== "" || t && Nh(e.defaultValue) && e.defaultValue !== "");
}
function bk(e) {
  return e.startAdornment;
}
function wk(e) {
  return de("MuiInputBase", e);
}
const ln = ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), Ck = {
  transition: "none"
};
function kk(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Xc = (e) => e.scrollTop, _u = {
  offsetX: 0,
  offsetY: 0
}, s1 = {}, Tk = ["all"], Ek = {}, Rk = {
  matrix: [4, 5],
  matrix3d: [12, 13],
  translate: [0, 1],
  translate3d: [0, 1],
  translateX: [0, null],
  translateY: [null, 0]
};
function Pk(e) {
  const t = parseFloat(e ?? "");
  return Number.isNaN(t) ? 0 : t;
}
function Ik(e) {
  const t = e.match(/^(matrix|matrix3d|translate|translate3d|translateX|translateY)\((.+)\)$/);
  return t ? {
    type: t[1],
    values: t[2].split(",").map(Pk)
  } : null;
}
function zh(e, t) {
  return t === null ? 0 : e[t] || 0;
}
function Mk(e) {
  if (!e || e === "none")
    return _u;
  const t = Ik(e);
  if (!t)
    return _u;
  const {
    type: n,
    values: r
  } = t, o = Rk[n];
  return o ? {
    offsetX: zh(r, o[0]),
    offsetY: zh(r, o[1])
  } : _u;
}
function Pt(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function l1(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function wi(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = s1
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Ep(e, t) {
  var r;
  const n = t ?? Ck;
  return kk((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function xt(e, t = Tk, n = Ek) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = Ep(e);
  if (r === void 0)
    return o ?? s1;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Dh;
const Xd = "mui-auto-fill", _a = "mui-auto-fill-cancel", Qc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ie(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, qc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, $k = (e) => {
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
    readOnly: p,
    size: v,
    startAdornment: d,
    type: x
  } = e, b = {
    root: ["root", `color${ie(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", v && v !== "medium" && `size${ie(v)}`, u && "multiline", d && "adornedStart", i && "adornedEnd", c && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", x === "search" && "inputTypeSearch", p && "readOnly"]
  };
  return fe(b, wk, t);
}, Zc = H("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Qc
})(xe(({
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
  [`&.${ln.disabled}`]: {
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
}))), Jc = H("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: qc
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    ...xt(e, "opacity", {
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
    [`label[data-shrink=false] + .${ln.formControl} &`]: {
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
    [`&.${ln.disabled}`]: {
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
        animationName: _a,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: Xd
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
})), Bh = Sk({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${Xd}`]: {
    from: {
      animationName: Xd
    }
  },
  [`@keyframes ${_a}`]: {
    from: {
      animationName: _a
    }
  }
}), Rp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    disabled: p,
    disableInjectingGlobalStyles: v,
    endAdornment: d,
    error: x,
    fullWidth: b = !1,
    id: C,
    inputComponent: y = "input",
    inputProps: h = {},
    inputRef: S,
    margin: w,
    maxRows: E,
    minRows: k,
    multiline: R = !1,
    name: T,
    onBlur: A,
    onChange: O,
    onClick: I,
    onFocus: g,
    onKeyDown: M,
    onKeyUp: P,
    placeholder: $,
    readOnly: L,
    renderSuffix: N,
    rows: j,
    size: z,
    slotProps: D = {},
    slots: W = {},
    startAdornment: _,
    type: Q = "text",
    value: V,
    ...q
  } = r, X = h.value != null ? h.value : V, {
    current: G
  } = m.useRef(X != null), U = m.useRef(), ne = m.useCallback((oe) => {
  }, []), se = nt(U, S, h.ref, ne), [Te, Ee] = m.useState(!1), [he, ae] = ji({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  he.focused = ae ? ae.focused : Te, m.useEffect(() => {
    !ae && p && Te && (Ee(!1), A && A());
  }, [ae, p, Te, A]);
  const Ae = ae && ae.onFilled, ze = ae && ae.onEmpty, Pe = m.useCallback((oe) => {
    Fa(oe) ? Ae && Ae() : ze && ze();
  }, [Ae, ze]);
  ft(() => {
    G && Pe({
      value: X
    });
  }, [X, Pe, G]), ft(() => {
    if (!l)
      return;
    const oe = U.current;
    if (!oe)
      return;
    const be = ht(oe), Be = Jn(be), lt = Be == null || Be === be.body || Be === be.documentElement;
    oe === Be ? ae && ae.onFocus ? ae.onFocus() : Ee(!0) : lt && oe.focus();
  }, [l]);
  const Le = (oe) => {
    g && g(oe), h.onFocus && h.onFocus(oe), ae && ae.onFocus ? ae.onFocus(oe) : Ee(!0);
  }, ue = (oe) => {
    A && A(oe), h.onBlur && h.onBlur(oe), ae && ae.onBlur ? ae.onBlur(oe) : Ee(!1);
  }, Oe = (oe, ...be) => {
    if (!G) {
      const Be = oe.target || U.current;
      if (Be == null)
        throw new Error(Cr(1));
      Pe({
        value: Be.value
      });
    }
    h.onChange && h.onChange(oe, ...be), O && O(oe, ...be);
  };
  m.useEffect(() => {
    Pe(U.current);
  }, []);
  const Se = (oe) => {
    U.current && oe.currentTarget === oe.target && U.current.focus(), I && I(oe);
  };
  let ge = y, Ie = h;
  R && ge === "input" && (j ? Ie = {
    type: void 0,
    minRows: j,
    maxRows: j,
    ...Ie
  } : Ie = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...Ie
  }, ge = yk);
  const De = (oe) => {
    Pe(oe.animationName === _a ? U.current : {
      value: "x"
    });
  };
  m.useEffect(() => {
    ae && ae.setAdornedStart(!!_);
  }, [ae, _]);
  const rt = {
    ...r,
    color: he.color || "primary",
    disabled: he.disabled,
    endAdornment: d,
    error: he.error,
    focused: he.focused,
    formControl: ae,
    fullWidth: b,
    hiddenLabel: he.hiddenLabel,
    multiline: R,
    size: he.size,
    startAdornment: _,
    type: Q
  }, We = $k(rt), Ce = W.root || Zc, He = D.root || {}, gt = W.input || Jc;
  return Ie = {
    ...Ie,
    ...D.input
  }, /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [!v && typeof Bh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Dh || (Dh = /* @__PURE__ */ f.jsx(Bh, {}))), /* @__PURE__ */ f.jsxs(Ce, {
      ...He,
      ref: n,
      onClick: Se,
      ...q,
      ...!Ba(Ce) && {
        ownerState: {
          ...rt,
          ...He.ownerState
        }
      },
      className: J(We.root, He.className, a, L && "MuiInputBase-readOnly"),
      children: [_, /* @__PURE__ */ f.jsx(cl.Provider, {
        value: null,
        children: /* @__PURE__ */ f.jsx(gt, {
          "aria-invalid": he.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: u,
          disabled: he.disabled,
          id: C,
          onAnimationStart: De,
          name: T,
          placeholder: $,
          readOnly: L,
          required: he.required,
          rows: j,
          value: X,
          onKeyDown: M,
          onKeyUp: P,
          type: Q,
          ...Ie,
          ...!Ba(gt) && {
            as: ge,
            ownerState: {
              ...rt,
              ...Ie.ownerState
            }
          },
          ref: se,
          className: J(We.input, Ie.className, L && "MuiInputBase-readOnly"),
          onBlur: ue,
          onChange: Oe,
          onFocus: Le
        })
      }), d, N ? N({
        ...he,
        startAdornment: _
      }) : null]
    })]
  });
});
function jk(e) {
  return de("MuiFilledInput", e);
}
const ro = {
  ...ln,
  ...ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function Ak(e) {
  return de("MuiFormHelperText", e);
}
const Fh = ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function Ok(e) {
  return de("MuiFormLabel", e);
}
const vs = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function Lk(e) {
  return de("MuiInput", e);
}
const Gi = {
  ...ln,
  ...ce("MuiInput", ["root", "underline", "input"])
};
function Nk(e) {
  return de("MuiMenuItem", e);
}
const Xi = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function zk(e) {
  return de("MuiNativeSelect", e);
}
const Pp = ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function Dk(e) {
  return de("MuiOutlinedInput", e);
}
const Yn = {
  ...ln,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function Bk({
  theme: e,
  ...t
}) {
  const n = rr in e ? e[rr] : void 0;
  return /* @__PURE__ */ f.jsx(Q0, {
    ...t,
    themeId: n ? rr : void 0,
    theme: n || e
  });
}
const zl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Fk
} = S2({
  themeId: rr,
  // @ts-ignore ignore module augmentation tests
  theme: () => Gc({
    cssVariables: !0
  }),
  colorSchemeStorageKey: zl.colorSchemeStorageKey,
  modeStorageKey: zl.modeStorageKey,
  defaultColorScheme: {
    light: zl.defaultLightColorScheme,
    dark: zl.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: t1(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Ro({
        sx: r,
        theme: this
      });
    }, t;
  }
}), _k = Fk;
function Wk({
  theme: e,
  ...t
}) {
  const n = m.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = rr in e ? e[rr] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ f.jsx(Bk, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ f.jsx(_k, {
    theme: e,
    ...t
  });
}
function _h(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Uk(e) {
  return de("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Hk = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ie(t)}`, `fontSize${ie(n)}`]
  };
  return fe(o, Uk, r);
}, Vk = H("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ie(n.color)}`], t[`fontSize${ie(n.fontSize)}`]];
  }
})(xe(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, c, u, p, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...xt(e, "fill", {
      duration: (n = (t = (e.vars ?? e).transitions) == null ? void 0 : t.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (d) => !d.hasSvgAsChild,
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
      ...Object.entries((e.vars ?? e).palette).filter(([, d]) => d && d.main).map(([d]) => {
        var x, b;
        return {
          props: {
            color: d
          },
          style: {
            color: (b = (x = (e.vars ?? e).palette) == null ? void 0 : x[d]) == null ? void 0 : b.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (u = (c = (e.vars ?? e).palette) == null ? void 0 : c.action) == null ? void 0 : u.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (v = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : v.disabled
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
})), Qd = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    titleAccess: p,
    viewBox: v = "0 0 24 24",
    ...d
  } = r, x = /* @__PURE__ */ m.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: u,
    viewBox: v,
    hasSvgAsChild: x
  }, C = {};
  u || (C.viewBox = v);
  const y = Hk(b);
  return /* @__PURE__ */ f.jsxs(Vk, {
    as: l,
    className: J(y.root, i),
    focusable: "false",
    color: c,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...C,
    ...d,
    ...x && o.props,
    ownerState: b,
    children: [x ? o.props.children : o, p ? /* @__PURE__ */ f.jsx("title", {
      children: p
    }) : null]
  });
});
Qd.muiName = "SvgIcon";
function Je(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ f.jsx(Qd, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = Qd.muiName, /* @__PURE__ */ m.memo(/* @__PURE__ */ m.forwardRef(n));
}
function qd(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Zd(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = m.useRef(t !== void 0), [s, l] = m.useState(n), a = i ? t : s, c = m.useCallback((u) => {
    i || l(u);
  }, []);
  return [a, c];
}
function a1(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function c1(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((c) => {
      a1(c, l[c]) && typeof s[c] == "function" && (a[c] = (...u) => {
        s[c](...u), l[c](...u);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, c = J(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), u = n(a, l);
      return {
        ...l,
        ...a,
        ...u,
        ...!!c && {
          className: c
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
  const r = t, o = n(e, r), i = J(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
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
const Wh = {};
function Ip(e, t) {
  const n = m.useRef(Wh);
  return n.current === Wh && (n.current = e(t)), n;
}
function Kk(e) {
  const t = Ip(() => Yk(e)).current;
  return t.next = e, ft(t.effect), t;
}
function Yk(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Uh = sy.createContext(null);
function Gk(e) {
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
function Xk(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = Gk(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function Mp(e) {
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
    nodeRef: p,
    onEnter: v,
    onEntering: d,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: y,
    children: h,
    ...S
  } = e, w = m.useContext(Uh), E = w && !w.isMounting ? r : n, [k, R] = m.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), T = m.useRef(k);
  T.current = k, t && k === "unmounted" && (T.current = "exited", R("exited"));
  const A = m.useRef(t && E), O = m.useRef(!1), I = m.useRef(null), g = m.useRef(k), M = m.useRef(!1), P = m.useRef(c), $ = Kk({
    timeout: l,
    addEndListener: a,
    reduceMotion: c,
    getAutoTimeout: u,
    onEnter: v,
    onEntering: d,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: y,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: p,
    parentGroup: w
  }), L = m.useCallback(() => {
    I.current !== null && (I.current.cancel(), I.current = null);
  }, []), N = m.useCallback((_) => {
    let Q = !0;
    const V = () => {
      Q && (Q = !1, I.current = null, _());
    };
    return V.cancel = () => {
      Q = !1;
    }, I.current = V, V;
  }, []), j = m.useCallback((_, Q) => {
    var ze, Pe;
    let V;
    const q = () => {
      V !== void 0 && (clearTimeout(V), V = void 0);
    }, X = N(() => {
      q(), T.current = _, R(_);
    }), G = X.cancel;
    X.cancel = () => {
      q(), G();
    };
    const U = $.current.nodeRef.current, ne = $.current.addEndListener, se = $.current.getAutoTimeout !== void 0, Te = (Pe = (ze = $.current).getAutoTimeout) == null ? void 0 : Pe.call(ze), Ee = Xk({
      currentStatus: Q,
      isAppearing: M.current,
      timeout: $.current.timeout,
      autoTimeout: Te
    }), he = P.current, ae = Ee ?? (he && se ? 0 : null), Ae = (Le) => {
      V = setTimeout(X, Le);
    };
    if (!U) {
      Ae(0);
      return;
    }
    if (ne) {
      ae != null && Ae(he ? 0 : ae), ne.length >= 2 ? ne(U, X) : ne(X);
      return;
    }
    Ae(he ? 0 : Ee ?? 0);
  }, [N, $]), z = m.useCallback((_) => {
    var q;
    const Q = $.current, V = Q.parentGroup ? Q.parentGroup.isMounting : _;
    if (M.current = V, !_ && !Q.enter) {
      T.current = "entered", R("entered");
      return;
    }
    P.current = Q.reduceMotion, (q = Q.onEnter) == null || q.call(Q, V), T.current = "entering", R("entering");
  }, [$]), D = m.useCallback(() => {
    var Q;
    const _ = $.current;
    if (!_.exit) {
      T.current = "exited", R("exited");
      return;
    }
    P.current = _.reduceMotion, (Q = _.onExit) == null || Q.call(_), T.current = "exiting", R("exiting");
  }, [$]), W = m.useCallback((_, Q) => {
    if (L(), Q === "entering") {
      const V = $.current;
      if (V.mountOnEnter || V.unmountOnExit) {
        const q = V.nodeRef.current;
        q && Xc(q);
      }
      z(_);
    } else
      D();
  }, [L, z, D, $]);
  return ft(() => (O.current = !0, A.current && (A.current = !1, W(!0, "entering")), () => {
    O.current = !1, L();
  }), [L, W]), ft(() => {
    if (!O.current)
      return;
    const _ = T.current;
    t ? _ !== "entering" && _ !== "entered" && W(!1, "entering") : _ === "entering" || _ === "entered" ? W(!1, "exiting") : _ === "exited" && s && (T.current = "unmounted", R("unmounted"));
  }, [t, k, s, W]), ft(() => {
    var q, X, G, U;
    if (k === "unmounted" || g.current === "unmounted") {
      g.current = k;
      return;
    }
    const Q = g.current !== k;
    Q && (g.current = k);
    const V = $.current;
    k === "entering" ? (Q && ((q = V.onEntering) == null || q.call(V, M.current)), I.current === null && T.current === k && j("entered", "entering")) : k === "exiting" ? (Q && ((X = V.onExiting) == null || X.call(V)), I.current === null && T.current === k && j("exited", "exiting")) : k === "entered" && Q ? (G = V.onEntered) == null || G.call(V, M.current) : k === "exited" && Q && ((U = V.onExited) == null || U.call(V));
  }, [$, j, k]), k === "unmounted" ? null : /* @__PURE__ */ f.jsx(Uh.Provider, {
    value: null,
    children: h(k, S)
  });
}
const u1 = "(prefers-reduced-motion: reduce)", Qk = 0, qk = "0ms", Zk = () => {
}, Hh = () => !1, Jk = () => !0, eT = () => Zk;
function tT(e) {
  const [t, n] = m.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), ft(() => {
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
    const i = window.matchMedia(u1), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const nT = {
  ...da
}, d1 = nT.useSyncExternalStore;
function rT(e) {
  const t = e ? Jk : Hh, [n, r] = m.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [Hh, eT];
    const o = window.matchMedia(u1);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return d1(r, n, t);
}
const oT = d1 !== void 0 ? rT : tT;
function ul(e, t) {
  const n = oT(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return m.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: Qk,
        delay: qk
      } : o;
    }
  }), [r]);
}
function f1(e, t, n) {
  return e === void 0 || Ba(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function p1(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Wa(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    a1(n, e[n]) && (t[n] = e[n]);
  return t;
}
function Vh(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function m1(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const d = J(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), x = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, b = {
      ...n,
      ...o,
      ...r
    };
    return d.length > 0 && (b.className = d), Object.keys(x).length > 0 && (b.style = x), {
      props: b,
      internalRef: void 0
    };
  }
  const s = Wa({
    ...o,
    ...r
  }), l = Vh(r), a = Vh(o), c = t(s), u = J(c == null ? void 0 : c.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
    ...c == null ? void 0 : c.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, v = {
    ...c,
    ...n,
    ...a,
    ...l
  };
  return u.length > 0 && (v.className = u), Object.keys(p).length > 0 && (v.style = p), {
    props: v,
    internalRef: c.ref
  };
}
function me(e, t) {
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
    slotProps: p = {
      [e]: void 0
    },
    ...v
  } = i, d = u[e] || r, x = p1(p[e], o), {
    props: {
      component: b,
      ...C
    },
    internalRef: y
  } = m1({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: x
  }), h = nt(y, x == null ? void 0 : x.ref, t.ref), S = e === "root" ? b || c : b, w = f1(d, {
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
  return [d, w];
}
function iT(e) {
  return de("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const sT = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return fe(i, iT, o);
}, lT = H("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(xe(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  ...xt(e, "box-shadow"),
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
}))), sr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var d;
  const r = pe({
    props: t,
    name: "MuiPaper"
  }), o = ar(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: c = "elevation",
    ...u
  } = r, p = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: c
  }, v = sT(p);
  return /* @__PURE__ */ f.jsx(lT, {
    as: s,
    ownerState: p,
    className: J(v.root, i),
    ref: n,
    ...u,
    style: {
      ...c === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (d = o.vars.overlays) == null ? void 0 : d[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Nr("#fff", Gd(l))}, ${Nr("#fff", Gd(l))})`
        }
      },
      ...u.style
    }
  });
});
function Ua(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function aT(e) {
  const {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: i
  } = e, s = r && t !== !1, l = r && t === !1;
  return m.useMemo(() => {
    const c = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(u) {
        n && t && u.key !== "Tab" && u.preventDefault();
      }
    };
    return r || (c.tabIndex = o, !i && n && (c.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (c["aria-disabled"] = n), i && (!t || l) && (c.disabled = n), c;
  }, [r, n, t, s, l, i, o]);
}
const cT = {};
function uT(e) {
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
  } = e, u = m.useRef(null), p = s === !0, v = aT({
    focusableWhenDisabled: p,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), d = m.useCallback(() => {
    const C = u.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), x = m.useMemo(() => {
    const C = p ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, p || (C.disabled = n)) : (C.role = "button", !p && n && (C["aria-disabled"] = n)), p ? {
      ...C,
      ...v
    } : C;
  }, [n, p, v, o, t, i, r]);
  return {
    getButtonProps: m.useCallback((C = cT) => {
      const {
        onClick: y,
        onKeyDown: h,
        onKeyUp: S,
        ...w
      } = C;
      return {
        ...x,
        ...w,
        onClick: (T) => {
          if (l && T.stopPropagation(), n) {
            T.preventDefault();
            return;
          }
          y == null || y(T);
        },
        onKeyDown: (T) => {
          if (p && v.onKeyDown(T), !n && (a == null || a(T), h == null || h(T), !(T.target !== T.currentTarget || d()))) {
            if (T.key === " ") {
              T.preventDefault();
              return;
            }
            T.key === "Enter" && (T.preventDefault(), T.currentTarget.click());
          }
        },
        onKeyUp: (T) => {
          n || (c == null || c(T), S == null || S(T), T.target === T.currentTarget && !d() && T.key === " " && !T.defaultPrevented && T.currentTarget.click());
        }
      };
    }, [x, n, p, v, d, a, c, l]),
    rootRef: u
  };
}
class Ha {
  constructor() {
    zi(this, "mountEffect", () => {
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
    return new Ha();
  }
  static use() {
    const t = Ip(Ha.create).current, [n, r] = m.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, m.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = fT(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function dT() {
  return Ha.use();
}
function fT() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const pT = [];
function h1(e) {
  m.useEffect(e, pT);
}
class eu {
  constructor() {
    zi(this, "currentId", null);
    zi(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    zi(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new eu();
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
function er() {
  const e = Ip(eu.create).current;
  return h1(e.disposeEffect), e;
}
function mT(e) {
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
  } = e, [u, p] = m.useState(!1), v = er(), d = m.useRef(!1), x = m.useRef(a);
  x.current = a;
  const b = a != null, C = J(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, h = J(n.child, u && n.childLeaving, r && n.childPulsate);
  return !l && !u && p(!0), m.useEffect(() => {
    !l && b ? d.current || (d.current = !0, v.start(c, () => {
      var S;
      d.current = !1, (S = x.current) == null || S.call(x);
    })) : (d.current = !1, v.clear());
  }, [v, b, l, c]), /* @__PURE__ */ f.jsx("span", {
    className: C,
    style: y,
    children: /* @__PURE__ */ f.jsx("span", {
      className: h
    })
  });
}
const Vt = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Jd = 550, hT = 80, Dl = {}, Kh = [], gT = () => {
};
function Wu(e, t) {
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
function yT({
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
const vT = il`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, xT = il`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ST = il`
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
function bT(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = Vs`
    &.${Vt.rippleVisible} {
      animation-name: ${vT};
      animation-duration: ${Jd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Vt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Vt.childLeaving} {
      animation-name: ${xT};
      animation-duration: ${Jd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Vt.childPulsate} {
      animation-name: ${ST};
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
const wT = H("span", {
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
}), CT = H(mT, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Vt.rippleVisible} {
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
  & .${Vt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Vt.childLeaving} {
    opacity: 0;
  }

  & .${Vt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => bT(e)}
`, kT = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTouchRipple"
  }), o = ar(), i = ul(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Dl,
    className: a,
    ...c
  } = r, [u, p] = m.useState({
    items: Kh,
    order: Kh
  }), v = u.items, d = m.useRef(0), x = m.useRef(null), b = m.useRef(!1);
  h1(() => (b.current = !0, () => {
    b.current = !1;
  })), m.useEffect(() => {
    x.current && (x.current(), x.current = null);
  }, [v]);
  const C = m.useRef(!1), y = er(), h = m.useRef(null), S = m.useRef(null), w = Ze((I) => {
    b.current && p((g) => {
      const M = g.items.filter(($) => $.key !== I), P = Wu(g.order.filter(($) => $ !== I), M.filter(($) => !$.exiting).map(($) => $.key));
      return {
        items: M,
        order: P
      };
    });
  }), E = Ze((I) => {
    const {
      pulsate: g,
      rippleX: M,
      rippleY: P,
      rippleSize: $,
      cb: L
    } = I, N = d.current;
    d.current += 1, p((j) => {
      const z = [...j.items, {
        key: N,
        pulsate: g,
        rippleX: M,
        rippleY: P,
        rippleSize: $,
        exiting: !1
      }];
      return {
        items: z,
        order: Wu(j.order, z.filter((D) => !D.exiting).map((D) => D.key))
      };
    }), x.current = L;
  }), k = Ze((I = Dl, g = Dl, M = gT) => {
    const {
      pulsate: P = !1,
      center: $ = s || g.pulsate,
      fakeElement: L = !1
      // Used only by tests.
    } = g;
    if ((I == null ? void 0 : I.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    (I == null ? void 0 : I.type) === "touchstart" && (C.current = !0);
    const N = L ? null : S.current, {
      rippleX: j,
      rippleY: z,
      rippleSize: D
    } = yT({
      event: I,
      element: N,
      center: $
    });
    I != null && I.touches ? h.current === null && (h.current = () => {
      E({
        pulsate: P,
        rippleX: j,
        rippleY: z,
        rippleSize: D,
        cb: M
      });
    }, y.start(hT, () => {
      h.current && (h.current(), h.current = null);
    })) : E({
      pulsate: P,
      rippleX: j,
      rippleY: z,
      rippleSize: D,
      cb: M
    });
  }), R = Ze(() => {
    k(Dl, {
      pulsate: !0
    });
  }), T = Ze((I, g) => {
    if (y.clear(), (I == null ? void 0 : I.type) === "touchend" && h.current) {
      h.current(), h.current = null, y.start(0, () => {
        T(I, g);
      });
      return;
    }
    h.current = null, p((M) => {
      const P = M.items.findIndex((L) => !L.exiting);
      if (P === -1)
        return M;
      const $ = M.items.slice();
      return $[P] = {
        ...$[P],
        exiting: !0
      }, {
        items: $,
        order: Wu(M.order, $.filter((L) => !L.exiting).map((L) => L.key))
      };
    }), x.current = g;
  });
  m.useImperativeHandle(n, () => ({
    pulsate: R,
    start: k,
    stop: T
  }), [R, k, T]);
  const A = new Map(v.map((I) => [I.key, I])), O = u.order.map((I) => A.get(I)).filter(Boolean);
  return /* @__PURE__ */ f.jsx(wT, {
    className: J(Vt.root, l.root, a),
    ref: S,
    ...c,
    children: O.map((I) => /* @__PURE__ */ f.jsx(CT, {
      classes: {
        ripple: J(l.ripple, Vt.ripple),
        rippleVisible: J(l.rippleVisible, Vt.rippleVisible),
        ripplePulsate: J(l.ripplePulsate, Vt.ripplePulsate),
        child: J(l.child, Vt.child),
        childLeaving: J(l.childLeaving, Vt.childLeaving),
        childPulsate: J(l.childPulsate, Vt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : Jd,
      pulsate: I.pulsate,
      rippleX: I.rippleX,
      rippleY: I.rippleY,
      rippleSize: I.rippleSize,
      in: !I.exiting,
      onExited: () => w(I.key)
    }, I.key))
  });
});
function TT(e) {
  return de("MuiButtonBase", e);
}
const ET = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), RT = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = fe({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, TT, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, PT = H("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
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
  [`&.${ET.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Po = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    disableTouchRipple: p = !1,
    focusRipple: v = !1,
    focusVisibleClassName: d,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: x,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: b = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: C,
    /* eslint-enable react/prop-types */
    LinkComponent: y = "a",
    nativeButton: h,
    onBlur: S,
    onClick: w,
    onContextMenu: E,
    onDragLeave: k,
    onFocus: R,
    onFocusVisible: T,
    onKeyDown: A,
    onKeyUp: O,
    onMouseDown: I,
    onMouseLeave: g,
    onMouseUp: M,
    onTouchEnd: P,
    onTouchMove: $,
    onTouchStart: L,
    tabIndex: N = 0,
    TouchRippleProps: j,
    touchRippleRef: z,
    type: D,
    ...W
  } = r, _ = !!(W.href || W.to), Q = !!W.formAction;
  let V = a;
  V === "button" && _ && (V = y);
  const X = h ?? (typeof V == "string" ? V === "button" : C ?? !1), G = dT(), U = nt(G.ref, z), [ne, se] = m.useState(!1);
  (c || b) && ne && se(!1);
  const Te = Ze((ke) => {
    v && !ke.repeat && ne && ke.key === " " && G.stop(ke, () => {
      G.start(ke);
    });
  }), Ee = Ze((ke) => {
    v && ke.key === " " && ne && !ke.defaultPrevented && G.stop(ke, () => {
      G.pulsate(ke);
    });
  }), {
    getButtonProps: he,
    rootRef: ae
  } = uT({
    nativeButton: X,
    disabled: c,
    type: D,
    hasFormAction: Q,
    tabIndex: N,
    onBeforeKeyDown: Te,
    onBeforeKeyUp: Ee
  }), {
    onClick: Ae,
    onKeyDown: ze,
    onKeyUp: Pe,
    ...Le
  } = he({
    onClick: w,
    onKeyDown: A,
    onKeyUp: O
  });
  m.useImperativeHandle(o, () => ({
    focusVisible: () => {
      se(!0), ae.current.focus();
    }
  }), [ae]);
  const ue = G.shouldMount && !u && !c;
  m.useEffect(() => {
    ne && v && !u && G.pulsate();
  }, [u, v, ne, G]);
  const Oe = dr(G, "start", I, p), Se = dr(G, "stop", E, p), ge = dr(G, "stop", k, p), Ie = dr(G, "stop", M, p), De = dr(G, "stop", (ke) => {
    ne && ke.preventDefault(), g && g(ke);
  }, p), rt = dr(G, "start", L, p), We = dr(G, "stop", P, p), Ce = dr(G, "stop", $, p), He = dr(G, "stop", (ke) => {
    Ua(ke.target) || se(!1), S && S(ke);
  }, !1), gt = Ze((ke) => {
    ae.current || (ae.current = ke.currentTarget), !b && Ua(ke.target) && (se(!0), T && T(ke)), R && R(ke);
  }), oe = {};
  _ && (oe.tabIndex = c ? -1 : N, c && (oe["aria-disabled"] = c), oe.type = D);
  const be = nt(n, ae), Be = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: c,
    disableRipple: u,
    disableTouchRipple: p,
    focusRipple: v,
    suppressFocusVisible: b,
    tabIndex: N,
    focusVisible: ne
  }, lt = RT(Be);
  return /* @__PURE__ */ f.jsxs(PT, {
    as: V,
    className: J(lt.root, l),
    ownerState: Be,
    onBlur: He,
    onClick: Ae,
    onContextMenu: Se,
    onFocus: gt,
    onKeyDown: ze,
    onKeyUp: Pe,
    onMouseDown: Oe,
    onMouseLeave: De,
    onMouseUp: Ie,
    onDragLeave: ge,
    onTouchEnd: We,
    onTouchMove: Ce,
    onTouchStart: rt,
    ref: be,
    ..._ ? oe : Le,
    ...W,
    children: [s, ue ? /* @__PURE__ */ f.jsx(kT, {
      ref: U,
      center: i,
      ...j
    }) : null]
  });
});
function dr(e, t, n, r = !1) {
  return Ze((o) => (n && n(o), r || e[t](o), !0));
}
function IT(e) {
  return typeof e.main == "string";
}
function MT(e, t = []) {
  if (!IT(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Kt(e = []) {
  return ([, t]) => t && MT(t, e);
}
function $T(e) {
  return de("MuiAlert", e);
}
const Yh = ce("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function jT(e) {
  return de("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Ln = 44, ef = il`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, tf = il`
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
`, AT = typeof ef != "string" ? Vs`
        animation: ${ef} 1.4s linear infinite;
      ` : null, OT = typeof tf != "string" ? Vs`
        animation: ${tf} 1.4s ease-in-out infinite;
      ` : null, LT = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${ie(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return fe(i, jT, t);
}, NT = H("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ie(n.color)}`]];
  }
})(xe(({
  theme: e
}) => {
  const t = Ep(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...xt(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: AT || {
        animation: `${ef} 1.4s linear infinite`
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
})), zT = H("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), DT = H("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(xe(({
  theme: e
}) => {
  const t = Ep(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...xt(e, "stroke-dashoffset")
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
      style: OT || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${tf} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), BT = H("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(xe(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), ti = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    style: p,
    thickness: v = 3.6,
    value: d = r.min ?? 0,
    variant: x = "indeterminate",
    ...b
  } = r, C = a ?? 0, y = c ?? 100, h = {
    ...r,
    color: i,
    disableShrink: s,
    size: u,
    thickness: v,
    value: d,
    variant: x,
    enableTrackSlot: l
  }, S = LT(h), w = {}, E = {}, k = {};
  if (x === "determinate") {
    const R = 2 * Math.PI * ((Ln - v) / 2), T = y - C;
    w.strokeDasharray = R.toFixed(3), w.strokeDashoffset = T > 0 ? `${((y - d) / T * R).toFixed(3)}px` : `${R.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = d, k["aria-valuemin"] = C, k["aria-valuemax"] = y;
  }
  return /* @__PURE__ */ f.jsx(NT, {
    className: J(S.root, o),
    style: {
      width: u,
      height: u,
      ...E,
      ...p
    },
    ownerState: h,
    ref: n,
    role: "progressbar",
    ...k,
    ...b,
    children: /* @__PURE__ */ f.jsxs(zT, {
      className: S.svg,
      ownerState: h,
      viewBox: `${Ln / 2} ${Ln / 2} ${Ln} ${Ln}`,
      children: [l ? /* @__PURE__ */ f.jsx(BT, {
        className: S.track,
        ownerState: h,
        cx: Ln,
        cy: Ln,
        r: (Ln - v) / 2,
        fill: "none",
        strokeWidth: v,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ f.jsx(DT, {
        className: S.circle,
        style: w,
        ownerState: h,
        cx: Ln,
        cy: Ln,
        r: (Ln - v) / 2,
        fill: "none",
        strokeWidth: v
      })]
    })
  });
});
function FT(e) {
  return de("MuiIconButton", e);
}
const Gh = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), _T = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${ie(r)}`, o && `edge${ie(o)}`, `size${ie(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return fe(l, FT, t);
}, WT = H(Po, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ie(n.color)}`], n.edge && t[`edge${ie(n.edge)}`], t[`size${ie(n.size)}`]];
  }
})(xe(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  ...xt(e, "background-color", {
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
})), xe(({
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
}))), UT = H("span", {
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
})), zn = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    id: p,
    loading: v = null,
    loadingIndicator: d,
    ...x
  } = r, b = kr(p), C = d ?? /* @__PURE__ */ f.jsx(ti, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), y = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: c,
    loading: v,
    loadingIndicator: C,
    size: u
  }, h = _T(y);
  return /* @__PURE__ */ f.jsxs(WT, {
    id: v ? b : p,
    className: J(h.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !c,
    disabled: a || v,
    ref: n,
    ...x,
    ownerState: y,
    children: [typeof v == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ f.jsx("span", {
      className: h.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ f.jsx(UT, {
        className: h.loadingIndicator,
        ownerState: y,
        children: v && C
      })
    }), i]
  });
}), HT = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), VT = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), KT = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), YT = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), GT = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), XT = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${ie(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return fe(i, $T, o);
}, QT = H(sr, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, n = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(Kt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${Yh.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Kt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${Yh.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Kt(["dark"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: {
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
})), qT = H("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), ZT = H("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), JT = H("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Xh = {
  success: /* @__PURE__ */ f.jsx(HT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ f.jsx(VT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ f.jsx(KT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ f.jsx(YT, {
    fontSize: "inherit"
  })
}, eE = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    icon: c,
    iconMapping: u = Xh,
    onClose: p,
    role: v = "alert",
    severity: d = "success",
    slotProps: x = {},
    slots: b = {},
    variant: C = "standard",
    ...y
  } = r, h = {
    ...r,
    color: a,
    severity: d,
    variant: C,
    colorSeverity: a || d
  }, S = XT(h), w = {
    slots: b,
    slotProps: x
  }, [E, k] = me("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: J(S.root, s),
    elementType: QT,
    externalForwardedProps: {
      ...w,
      ...y
    },
    ownerState: h,
    additionalProps: {
      role: v,
      elevation: 0
    }
  }), [R, T] = me("icon", {
    className: S.icon,
    elementType: qT,
    externalForwardedProps: w,
    ownerState: h
  }), [A, O] = me("message", {
    className: S.message,
    elementType: ZT,
    externalForwardedProps: w,
    ownerState: h
  }), [I, g] = me("action", {
    className: S.action,
    elementType: JT,
    externalForwardedProps: w,
    ownerState: h
  }), [M, P] = me("closeButton", {
    elementType: zn,
    externalForwardedProps: w,
    ownerState: h
  }), [$, L] = me("closeIcon", {
    elementType: GT,
    externalForwardedProps: w,
    ownerState: h
  });
  return /* @__PURE__ */ f.jsxs(E, {
    ...k,
    children: [c !== !1 ? /* @__PURE__ */ f.jsx(R, {
      ...T,
      children: c || u[d] || Xh[d]
    }) : null, /* @__PURE__ */ f.jsx(A, {
      ...O,
      children: i
    }), o != null ? /* @__PURE__ */ f.jsx(I, {
      ...g,
      children: o
    }) : null, o == null && p ? /* @__PURE__ */ f.jsx(I, {
      ...g,
      children: /* @__PURE__ */ f.jsx(M, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: p,
        ...P,
        children: /* @__PURE__ */ f.jsx($, {
          fontSize: "small",
          ...L
        })
      })
    }) : null]
  });
});
function tE(e) {
  return de("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const nE = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${ie(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return fe(s, tE, i);
}, rE = H("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ie(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(xe(({
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
    })), ...Object.entries(e.palette).filter(Kt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${ie(n)}`
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
})), Qh = {
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
}, $e = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    variantMapping: p = Qh,
    ...v
  } = r, d = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: c,
    variant: u,
    variantMapping: p
  }, x = l || p[u] || Qh[u] || "span", b = nE(d);
  return /* @__PURE__ */ f.jsx(rE, {
    as: x,
    ref: n,
    className: J(b.root, s),
    ...v,
    ownerState: d,
    style: {
      ...i !== "inherit" && {
        "--Typography-textAlign": i
      },
      ...v.style
    }
  });
});
function xo(e, t) {
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
var tn = "top", In = "bottom", Mn = "right", nn = "left", $p = "auto", dl = [tn, In, Mn, nn], Ci = "start", Gs = "end", oE = "clippingParents", g1 = "viewport", Qi = "popper", iE = "reference", qh = /* @__PURE__ */ dl.reduce(function(e, t) {
  return e.concat([t + "-" + Ci, t + "-" + Gs]);
}, []), y1 = /* @__PURE__ */ [].concat(dl, [$p]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ci, t + "-" + Gs]);
}, []), sE = "beforeRead", lE = "read", aE = "afterRead", cE = "beforeMain", uE = "main", dE = "afterMain", fE = "beforeWrite", pE = "write", mE = "afterWrite", hE = [sE, lE, aE, cE, uE, dE, fE, pE, mE];
function lr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function mn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Io(e) {
  var t = mn(e).Element;
  return e instanceof t || e instanceof Element;
}
function En(e) {
  var t = mn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function jp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = mn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function gE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !En(i) || !lr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function yE(e) {
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
      !En(o) || !lr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const vE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: gE,
  effect: yE,
  requires: ["computeStyles"]
};
function ir(e) {
  return e.split("-")[0];
}
var So = Math.max, Va = Math.min, ki = Math.round;
function nf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function v1() {
  return !/^((?!chrome|android).)*safari/i.test(nf());
}
function Ti(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && En(e) && (o = e.offsetWidth > 0 && ki(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ki(r.height) / e.offsetHeight || 1);
  var s = Io(e) ? mn(e) : window, l = s.visualViewport, a = !v1() && n, c = (r.left + (a && l ? l.offsetLeft : 0)) / o, u = (r.top + (a && l ? l.offsetTop : 0)) / i, p = r.width / o, v = r.height / i;
  return {
    width: p,
    height: v,
    top: u,
    right: c + p,
    bottom: u + v,
    left: c,
    x: c,
    y: u
  };
}
function Ap(e) {
  var t = Ti(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function x1(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && jp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Tr(e) {
  return mn(e).getComputedStyle(e);
}
function xE(e) {
  return ["table", "td", "th"].indexOf(lr(e)) >= 0;
}
function Jr(e) {
  return ((Io(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function tu(e) {
  return lr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (jp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Jr(e)
  );
}
function Zh(e) {
  return !En(e) || // https://github.com/popperjs/popper-core/issues/837
  Tr(e).position === "fixed" ? null : e.offsetParent;
}
function SE(e) {
  var t = /firefox/i.test(nf()), n = /Trident/i.test(nf());
  if (n && En(e)) {
    var r = Tr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = tu(e);
  for (jp(o) && (o = o.host); En(o) && ["html", "body"].indexOf(lr(o)) < 0; ) {
    var i = Tr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function fl(e) {
  for (var t = mn(e), n = Zh(e); n && xE(n) && Tr(n).position === "static"; )
    n = Zh(n);
  return n && (lr(n) === "html" || lr(n) === "body" && Tr(n).position === "static") ? t : n || SE(e) || t;
}
function Op(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function xs(e, t, n) {
  return So(e, Va(t, n));
}
function bE(e, t, n) {
  var r = xs(e, t, n);
  return r > n ? n : r;
}
function S1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function b1(e) {
  return Object.assign({}, S1(), e);
}
function w1(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var wE = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, b1(typeof t != "number" ? t : w1(t, dl));
};
function CE(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = ir(n.placement), a = Op(l), c = [nn, Mn].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!i || !s)) {
    var p = wE(o.padding, n), v = Ap(i), d = a === "y" ? tn : nn, x = a === "y" ? In : Mn, b = n.rects.reference[u] + n.rects.reference[a] - s[a] - n.rects.popper[u], C = s[a] - n.rects.reference[a], y = fl(i), h = y ? a === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, S = b / 2 - C / 2, w = p[d], E = h - v[u] - p[x], k = h / 2 - v[u] / 2 + S, R = xs(w, k, E), T = a;
    n.modifiersData[r] = (t = {}, t[T] = R, t.centerOffset = R - k, t);
  }
}
function kE(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || x1(t.elements.popper, o) && (t.elements.arrow = o));
}
const TE = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: CE,
  effect: kE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ei(e) {
  return e.split("-")[1];
}
var EE = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function RE(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ki(n * o) / o || 0,
    y: ki(r * o) / o || 0
  };
}
function Jh(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, p = e.isFixed, v = s.x, d = v === void 0 ? 0 : v, x = s.y, b = x === void 0 ? 0 : x, C = typeof u == "function" ? u({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  d = C.x, b = C.y;
  var y = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), S = nn, w = tn, E = window;
  if (c) {
    var k = fl(n), R = "clientHeight", T = "clientWidth";
    if (k === mn(n) && (k = Jr(n), Tr(k).position !== "static" && l === "absolute" && (R = "scrollHeight", T = "scrollWidth")), k = k, o === tn || (o === nn || o === Mn) && i === Gs) {
      w = In;
      var A = p && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      b -= A - r.height, b *= a ? 1 : -1;
    }
    if (o === nn || (o === tn || o === In) && i === Gs) {
      S = Mn;
      var O = p && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      d -= O - r.width, d *= a ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: l
  }, c && EE), g = u === !0 ? RE({
    x: d,
    y: b
  }, mn(n)) : {
    x: d,
    y: b
  };
  if (d = g.x, b = g.y, a) {
    var M;
    return Object.assign({}, I, (M = {}, M[w] = h ? "0" : "", M[S] = y ? "0" : "", M.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", M));
  }
  return Object.assign({}, I, (t = {}, t[w] = h ? b + "px" : "", t[S] = y ? d + "px" : "", t.transform = "", t));
}
function PE(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: ir(t.placement),
    variation: Ei(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Jh(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Jh(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const IE = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: PE,
  data: {}
};
var Bl = {
  passive: !0
};
function ME(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = mn(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, Bl);
  }), l && a.addEventListener("resize", n.update, Bl), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, Bl);
    }), l && a.removeEventListener("resize", n.update, Bl);
  };
}
const $E = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ME,
  data: {}
};
var jE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ca(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return jE[t];
  });
}
var AE = {
  start: "end",
  end: "start"
};
function eg(e) {
  return e.replace(/start|end/g, function(t) {
    return AE[t];
  });
}
function Lp(e) {
  var t = mn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Np(e) {
  return Ti(Jr(e)).left + Lp(e).scrollLeft;
}
function OE(e, t) {
  var n = mn(e), r = Jr(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = v1();
    (c || !c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Np(e),
    y: a
  };
}
function LE(e) {
  var t, n = Jr(e), r = Lp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = So(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = So(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Np(e), a = -r.scrollTop;
  return Tr(o || n).direction === "rtl" && (l += So(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function zp(e) {
  var t = Tr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function C1(e) {
  return ["html", "body", "#document"].indexOf(lr(e)) >= 0 ? e.ownerDocument.body : En(e) && zp(e) ? e : C1(tu(e));
}
function Ss(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = C1(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = mn(r), s = o ? [i].concat(i.visualViewport || [], zp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ss(tu(s)))
  );
}
function rf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function NE(e, t) {
  var n = Ti(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function tg(e, t, n) {
  return t === g1 ? rf(OE(e, n)) : Io(t) ? NE(t, n) : rf(LE(Jr(e)));
}
function zE(e) {
  var t = Ss(tu(e)), n = ["absolute", "fixed"].indexOf(Tr(e).position) >= 0, r = n && En(e) ? fl(e) : e;
  return Io(r) ? t.filter(function(o) {
    return Io(o) && x1(o, r) && lr(o) !== "body";
  }) : [];
}
function DE(e, t, n, r) {
  var o = t === "clippingParents" ? zE(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, c) {
    var u = tg(e, c, r);
    return a.top = So(u.top, a.top), a.right = Va(u.right, a.right), a.bottom = Va(u.bottom, a.bottom), a.left = So(u.left, a.left), a;
  }, tg(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function k1(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ir(r) : null, i = r ? Ei(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case tn:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case In:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Mn:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case nn:
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
  var c = o ? Op(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case Ci:
        a[c] = a[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Gs:
        a[c] = a[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return a;
}
function Xs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? oE : l, c = n.rootBoundary, u = c === void 0 ? g1 : c, p = n.elementContext, v = p === void 0 ? Qi : p, d = n.altBoundary, x = d === void 0 ? !1 : d, b = n.padding, C = b === void 0 ? 0 : b, y = b1(typeof C != "number" ? C : w1(C, dl)), h = v === Qi ? iE : Qi, S = e.rects.popper, w = e.elements[x ? h : v], E = DE(Io(w) ? w : w.contextElement || Jr(e.elements.popper), a, u, s), k = Ti(e.elements.reference), R = k1({
    reference: k,
    element: S,
    placement: o
  }), T = rf(Object.assign({}, S, R)), A = v === Qi ? T : k, O = {
    top: E.top - A.top + y.top,
    bottom: A.bottom - E.bottom + y.bottom,
    left: E.left - A.left + y.left,
    right: A.right - E.right + y.right
  }, I = e.modifiersData.offset;
  if (v === Qi && I) {
    var g = I[o];
    Object.keys(O).forEach(function(M) {
      var P = [Mn, In].indexOf(M) >= 0 ? 1 : -1, $ = [tn, In].indexOf(M) >= 0 ? "y" : "x";
      O[M] += g[$] * P;
    });
  }
  return O;
}
function BE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? y1 : a, u = Ei(r), p = u ? l ? qh : qh.filter(function(x) {
    return Ei(x) === u;
  }) : dl, v = p.filter(function(x) {
    return c.indexOf(x) >= 0;
  });
  v.length === 0 && (v = p);
  var d = v.reduce(function(x, b) {
    return x[b] = Xs(e, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[ir(b)], x;
  }, {});
  return Object.keys(d).sort(function(x, b) {
    return d[x] - d[b];
  });
}
function FE(e) {
  if (ir(e) === $p)
    return [];
  var t = ca(e);
  return [eg(e), t, eg(t)];
}
function _E(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, c = n.padding, u = n.boundary, p = n.rootBoundary, v = n.altBoundary, d = n.flipVariations, x = d === void 0 ? !0 : d, b = n.allowedAutoPlacements, C = t.options.placement, y = ir(C), h = y === C, S = a || (h || !x ? [ca(C)] : FE(C)), w = [C].concat(S).reduce(function(V, q) {
      return V.concat(ir(q) === $p ? BE(t, {
        placement: q,
        boundary: u,
        rootBoundary: p,
        padding: c,
        flipVariations: x,
        allowedAutoPlacements: b
      }) : q);
    }, []), E = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), T = !0, A = w[0], O = 0; O < w.length; O++) {
      var I = w[O], g = ir(I), M = Ei(I) === Ci, P = [tn, In].indexOf(g) >= 0, $ = P ? "width" : "height", L = Xs(t, {
        placement: I,
        boundary: u,
        rootBoundary: p,
        altBoundary: v,
        padding: c
      }), N = P ? M ? Mn : nn : M ? In : tn;
      E[$] > k[$] && (N = ca(N));
      var j = ca(N), z = [];
      if (i && z.push(L[g] <= 0), l && z.push(L[N] <= 0, L[j] <= 0), z.every(function(V) {
        return V;
      })) {
        A = I, T = !1;
        break;
      }
      R.set(I, z);
    }
    if (T)
      for (var D = x ? 3 : 1, W = function(q) {
        var X = w.find(function(G) {
          var U = R.get(G);
          if (U)
            return U.slice(0, q).every(function(ne) {
              return ne;
            });
        });
        if (X)
          return A = X, "break";
      }, _ = D; _ > 0; _--) {
        var Q = W(_);
        if (Q === "break") break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const WE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _E,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ng(e, t, n) {
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
function rg(e) {
  return [tn, Mn, In, nn].some(function(t) {
    return e[t] >= 0;
  });
}
function UE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Xs(t, {
    elementContext: "reference"
  }), l = Xs(t, {
    altBoundary: !0
  }), a = ng(s, r), c = ng(l, o, i), u = rg(a), p = rg(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": p
  });
}
const HE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: UE
};
function VE(e, t, n) {
  var r = ir(e), o = [nn, tn].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [nn, Mn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function KE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = y1.reduce(function(u, p) {
    return u[p] = VE(p, t.rects, i), u;
  }, {}), l = s[t.placement], a = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
const YE = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: KE
};
function GE(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = k1({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const XE = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: GE,
  data: {}
};
function QE(e) {
  return e === "x" ? "y" : "x";
}
function qE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, c = n.rootBoundary, u = n.altBoundary, p = n.padding, v = n.tether, d = v === void 0 ? !0 : v, x = n.tetherOffset, b = x === void 0 ? 0 : x, C = Xs(t, {
    boundary: a,
    rootBoundary: c,
    padding: p,
    altBoundary: u
  }), y = ir(t.placement), h = Ei(t.placement), S = !h, w = Op(y), E = QE(w), k = t.modifiersData.popperOffsets, R = t.rects.reference, T = t.rects.popper, A = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, O = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, g = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var M, P = w === "y" ? tn : nn, $ = w === "y" ? In : Mn, L = w === "y" ? "height" : "width", N = k[w], j = N + C[P], z = N - C[$], D = d ? -T[L] / 2 : 0, W = h === Ci ? R[L] : T[L], _ = h === Ci ? -T[L] : -R[L], Q = t.elements.arrow, V = d && Q ? Ap(Q) : {
        width: 0,
        height: 0
      }, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : S1(), X = q[P], G = q[$], U = xs(0, R[L], V[L]), ne = S ? R[L] / 2 - D - U - X - O.mainAxis : W - U - X - O.mainAxis, se = S ? -R[L] / 2 + D + U + G + O.mainAxis : _ + U + G + O.mainAxis, Te = t.elements.arrow && fl(t.elements.arrow), Ee = Te ? w === "y" ? Te.clientTop || 0 : Te.clientLeft || 0 : 0, he = (M = I == null ? void 0 : I[w]) != null ? M : 0, ae = N + ne - he - Ee, Ae = N + se - he, ze = xs(d ? Va(j, ae) : j, N, d ? So(z, Ae) : z);
      k[w] = ze, g[w] = ze - N;
    }
    if (l) {
      var Pe, Le = w === "x" ? tn : nn, ue = w === "x" ? In : Mn, Oe = k[E], Se = E === "y" ? "height" : "width", ge = Oe + C[Le], Ie = Oe - C[ue], De = [tn, nn].indexOf(y) !== -1, rt = (Pe = I == null ? void 0 : I[E]) != null ? Pe : 0, We = De ? ge : Oe - R[Se] - T[Se] - rt + O.altAxis, Ce = De ? Oe + R[Se] + T[Se] - rt - O.altAxis : Ie, He = d && De ? bE(We, Oe, Ce) : xs(d ? We : ge, Oe, d ? Ce : Ie);
      k[E] = He, g[E] = He - Oe;
    }
    t.modifiersData[r] = g;
  }
}
const ZE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: qE,
  requiresIfExists: ["offset"]
};
function JE(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function eR(e) {
  return e === mn(e) || !En(e) ? Lp(e) : JE(e);
}
function tR(e) {
  var t = e.getBoundingClientRect(), n = ki(t.width) / e.offsetWidth || 1, r = ki(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function nR(e, t, n) {
  n === void 0 && (n = !1);
  var r = En(t), o = En(t) && tR(t), i = Jr(t), s = Ti(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((lr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  zp(i)) && (l = eR(t)), En(t) ? (a = Ti(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Np(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function rR(e) {
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
function oR(e) {
  var t = rR(e);
  return hE.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function iR(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function sR(e) {
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
var og = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ig() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function lR(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? og : o;
  return function(l, a, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, og, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, p = [], v = !1, d = {
      state: u,
      setOptions: function(y) {
        var h = typeof y == "function" ? y(u.options) : y;
        b(), u.options = Object.assign({}, i, u.options, h), u.scrollParents = {
          reference: Io(l) ? Ss(l) : l.contextElement ? Ss(l.contextElement) : [],
          popper: Ss(a)
        };
        var S = oR(sR([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = S.filter(function(w) {
          return w.enabled;
        }), x(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var y = u.elements, h = y.reference, S = y.popper;
          if (ig(h, S)) {
            u.rects = {
              reference: nR(h, fl(S), u.options.strategy === "fixed"),
              popper: Ap(S)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(O) {
              return u.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var w = 0; w < u.orderedModifiers.length; w++) {
              if (u.reset === !0) {
                u.reset = !1, w = -1;
                continue;
              }
              var E = u.orderedModifiers[w], k = E.fn, R = E.options, T = R === void 0 ? {} : R, A = E.name;
              typeof k == "function" && (u = k({
                state: u,
                options: T,
                name: A,
                instance: d
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: iR(function() {
        return new Promise(function(C) {
          d.forceUpdate(), C(u);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!ig(l, a))
      return d;
    d.setOptions(c).then(function(C) {
      !v && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function x() {
      u.orderedModifiers.forEach(function(C) {
        var y = C.name, h = C.options, S = h === void 0 ? {} : h, w = C.effect;
        if (typeof w == "function") {
          var E = w({
            state: u,
            name: y,
            instance: d,
            options: S
          }), k = function() {
          };
          p.push(E || k);
        }
      });
    }
    function b() {
      p.forEach(function(C) {
        return C();
      }), p = [];
    }
    return d;
  };
}
var aR = [$E, XE, IE, vE, YE, WE, ZE, TE, HE], cR = /* @__PURE__ */ lR({
  defaultModifiers: aR
});
function Ri(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : p1(n, r), {
    props: l,
    internalRef: a
  } = m1({
    ...i,
    externalSlotProps: s
  }), c = nt(a, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return f1(t, {
    ...l,
    ref: c
  }, r);
}
function eo(e) {
  var t;
  return parseInt(m.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function uR(e) {
  return typeof e == "function" ? e() : e;
}
const T1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = m.useState(null), a = nt(/* @__PURE__ */ m.isValidElement(r) ? eo(r) : null, n);
  if (ft(() => {
    i || l(uR(o) || document.body);
  }, [o, i]), ft(() => {
    if (s && !i)
      return qd(n, s), () => {
        qd(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ m.isValidElement(r)) {
      const c = {
        ref: a
      };
      return /* @__PURE__ */ m.cloneElement(r, c);
    }
    return r;
  }
  return s && /* @__PURE__ */ c0.createPortal(r, s);
});
function dR(e) {
  return de("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function fR(e, t) {
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
function E1(e) {
  return typeof e == "function" ? e() : e;
}
function pR(e) {
  return e.nodeType !== void 0;
}
const mR = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, dR, t);
}, hR = {}, gR = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: c,
    popperOptions: u,
    popperRef: p,
    slotProps: v = {},
    slots: d = {},
    TransitionProps: x,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, y = m.useRef(null), h = nt(y, n), S = m.useRef(null), w = nt(S, p), E = m.useRef(w);
  ft(() => {
    E.current = w;
  }, [w]), m.useImperativeHandle(p, () => S.current, []);
  const k = fR(c, i), [R, T] = m.useState(k), A = m.useMemo(() => E1(r), [r]);
  m.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), ft(() => {
    if (!A || !a)
      return;
    const P = (j) => {
      T(j.placement);
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
        state: j
      }) => {
        P(j);
      }
    }];
    l != null && ($ = $.concat(l)), u && u.modifiers != null && ($ = $.concat(u.modifiers));
    const L = cR(A, y.current, {
      placement: k,
      ...u,
      modifiers: $
    });
    E.current(L);
    const N = y.current;
    return () => {
      if (N) {
        const {
          style: j
        } = N, z = j.position, D = j.top, W = j.left, _ = j.transform;
        L.destroy(), j.position = z, j.top = D, j.left = W, j.transform = _;
      } else
        L.destroy();
      E.current(null);
    };
  }, [A, s, l, a, u, k]);
  const O = {
    placement: R
  };
  x !== null && (O.TransitionProps = x);
  const I = mR(t), g = d.root ?? "div", M = Ri({
    elementType: g,
    externalSlotProps: v.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: h
    },
    ownerState: t,
    className: I.root
  });
  return /* @__PURE__ */ f.jsx(g, {
    ...M,
    children: typeof o == "function" ? o(O) : o
  });
}), yR = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: c,
    open: u,
    placement: p = "bottom",
    popperOptions: v = hR,
    popperRef: d,
    style: x,
    transition: b = !1,
    slotProps: C = {},
    slots: y = {},
    ...h
  } = t, [S, w] = m.useState(!0), E = () => {
    w(!1);
  }, k = () => {
    w(!0);
  };
  if (!a && !u && (!b || S))
    return null;
  let R;
  if (i)
    R = i;
  else if (r) {
    const O = E1(r);
    R = O && pR(O) ? ht(O).body : ht(null).body;
  }
  const T = !u && a && (!b || S) ? "none" : void 0, A = b ? {
    in: u,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ f.jsx(T1, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ f.jsx(gR, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: c,
      ref: n,
      open: b ? !S : u,
      placement: p,
      popperOptions: v,
      popperRef: d,
      slotProps: C,
      slots: y,
      ...h,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: T,
        ...x
      },
      TransitionProps: A,
      children: o
    })
  });
}), vR = H(yR, {
  name: "MuiPopper",
  slot: "Root"
})({}), R1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = ll(), o = pe({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: u,
    open: p,
    placement: v,
    popperOptions: d,
    popperRef: x,
    transition: b,
    slots: C,
    slotProps: y,
    ...h
  } = o, S = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: u,
    open: p,
    placement: v,
    popperOptions: d,
    popperRef: x,
    transition: b,
    ...h
  };
  return /* @__PURE__ */ f.jsx(vR, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: y,
    ...S,
    ref: n
  });
}), xR = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function SR(e) {
  return de("MuiChip", e);
}
const Ue = ce("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), bR = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: i,
    clickable: s,
    variant: l
  } = e, a = {
    root: ["root", l, n && "disabled", `size${ie(r)}`, `color${ie(o)}`, s && "clickable", i && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return fe(a, SR, t);
}, wR = H("div", {
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
      [`& .${Ue.avatar}`]: t.avatar
    }, {
      [`& .${Ue.icon}`]: t.icon
    }, {
      [`& .${Ue.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${ie(s)}`], t[`color${ie(r)}`], o && t.clickable, i && t.deletable, t[l]];
  }
})(xe(({
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
    ...xt(e, ["background-color", "box-shadow"]),
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
    [`&.${Ue.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Ue.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Ue.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Ue.deleteIcon}`]: {
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
        [`& .${Ue.avatar}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark
        }
      }
    }, {
      props: {
        color: "secondary"
      },
      style: {
        [`& .${Ue.avatar}`]: {
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
        [`& .${Ue.avatar}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10)
        },
        [`& .${Ue.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Ue.deleteIcon}`]: {
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
        [`& .${Ue.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${Ue.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${Ue.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Ue.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(Kt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${Ue.focusVisible}`]: {
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
        [`&.${Ue.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
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
        [`&:hover, &.${Ue.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[n].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${Ue.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Ue.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Ue.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Ue.icon}`]: {
          marginLeft: 4
        },
        [`& .${Ue.deleteIcon}`]: {
          marginRight: 5
        }
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        [`& .${Ue.avatar}`]: {
          marginLeft: 2
        },
        [`& .${Ue.icon}`]: {
          marginLeft: 2
        },
        [`& .${Ue.deleteIcon}`]: {
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
        [`&.${Ue.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
        },
        [`&.${Ue.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
        },
        [`& .${Ue.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), CR = H("span", {
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
function sg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const qi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    icon: p,
    label: v,
    onClick: d,
    onDelete: x,
    onKeyDown: b,
    onKeyUp: C,
    size: y = "medium",
    variant: h = "filled",
    tabIndex: S,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: E = {},
    slotProps: k = {},
    ...R
  } = r, {
    nativeButton: T,
    ...A
  } = R, O = m.useRef(null), I = nt(O, n), g = (U) => {
    U.stopPropagation(), x(U);
  }, M = (U) => {
    U.currentTarget === U.target && sg(U) && U.preventDefault(), b && b(U);
  }, P = (U) => {
    U.currentTarget === U.target && x && sg(U) && x(U), C && C(U);
  }, $ = s !== !1 && d ? !0 : s, L = $ || x ? Po : a || "div", N = {
    ...r,
    component: L,
    disabled: u,
    size: y,
    color: l,
    iconColor: /* @__PURE__ */ m.isValidElement(p) && p.props.color || l,
    onDelete: !!x,
    clickable: $,
    variant: h
  }, j = bR(N), z = L === Po ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: j.focusVisible,
    ...x && {
      disableRipple: !0
    },
    ...T !== void 0 && {
      nativeButton: T
    }
  } : {};
  let D = null;
  x && (D = c && /* @__PURE__ */ m.isValidElement(c) ? /* @__PURE__ */ m.cloneElement(c, {
    className: J(c.props.className, j.deleteIcon),
    onClick: g
  }) : /* @__PURE__ */ f.jsx(xR, {
    className: j.deleteIcon,
    onClick: g
  }));
  let W = null;
  o && /* @__PURE__ */ m.isValidElement(o) && (W = /* @__PURE__ */ m.cloneElement(o, {
    className: J(j.avatar, o.props.className)
  }));
  let _ = null;
  p && /* @__PURE__ */ m.isValidElement(p) && (_ = /* @__PURE__ */ m.cloneElement(p, {
    className: J(j.icon, p.props.className)
  }));
  const Q = {
    slots: E,
    slotProps: k
  }, [V, q] = me("root", {
    elementType: wR,
    externalForwardedProps: {
      ...Q,
      ...A
    },
    ownerState: N,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: I,
    className: J(j.root, i),
    additionalProps: {
      disabled: $ && u ? !0 : void 0,
      tabIndex: w && u ? -1 : S,
      ...z
    },
    getSlotProps: (U) => ({
      ...U,
      onClick: (ne) => {
        var se;
        (se = U.onClick) == null || se.call(U, ne), d == null || d(ne);
      },
      onKeyDown: (ne) => {
        var se;
        (se = U.onKeyDown) == null || se.call(U, ne), M(ne);
      },
      onKeyUp: (ne) => {
        var se;
        (se = U.onKeyUp) == null || se.call(U, ne), P(ne);
      }
    })
  }), [X, G] = me("label", {
    elementType: CR,
    externalForwardedProps: Q,
    ownerState: N,
    className: j.label
  });
  return /* @__PURE__ */ f.jsxs(V, {
    as: L,
    ...q,
    children: [W || _, /* @__PURE__ */ f.jsx(X, {
      ...G,
      children: v
    }), D]
  });
}), kR = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), TR = {
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
}, ER = {
  opacity: 0,
  visibility: "hidden"
}, P1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = ar(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: c,
    in: u,
    onEnter: p,
    onEntered: v,
    onEntering: d,
    onExit: x,
    onExited: b,
    onExiting: C,
    style: y,
    timeout: h = o,
    ...S
  } = t, w = ul(r.motion.reducedMotion, a), E = m.useRef(null), k = nt(E, eo(l), n), R = Pt(E, d), T = Pt(E, (P, $) => {
    w.shouldReduceMotion || Xc(P);
    const L = wi({
      style: y,
      timeout: h,
      easing: c
    }, {
      mode: "enter"
    }), N = w.getTransitionTiming({
      duration: L.duration,
      delay: L.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: L.easing,
      delay: N.delay
    }), p && p(P, $);
  }), A = Pt(E, v), O = Pt(E, C), I = Pt(E, (P) => {
    const $ = wi({
      style: y,
      timeout: h,
      easing: c
    }, {
      mode: "exit"
    }), L = w.getTransitionTiming({
      duration: $.duration,
      delay: $.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: L.duration,
      easing: $.easing,
      delay: L.delay
    }), x && x(P);
  }), g = Pt(E, (P) => {
    P.style.transition = "", b && b(P);
  }), M = i ? (P) => {
    i(E.current, P);
  } : void 0;
  return /* @__PURE__ */ f.jsx(Mp, {
    appear: s,
    in: u,
    nodeRef: E,
    onEnter: T,
    onEntered: A,
    onEntering: R,
    onExit: I,
    onExited: g,
    onExiting: O,
    addEndListener: M,
    reduceMotion: w.shouldReduceMotion,
    timeout: h,
    ...S,
    children: (P, {
      ownerState: $,
      ...L
    }) => {
      const N = l1(P, u, TR, ER, y, l.props.style);
      return /* @__PURE__ */ m.cloneElement(l, {
        style: N,
        ref: k,
        ...L
      });
    }
  });
});
function RR(e) {
  return de("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const PR = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return fe({
    root: ["root", n && "invisible"]
  }, RR, t);
}, IR = H("div", {
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
}), I1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    transitionDuration: p,
    ...v
  } = r, d = {
    ...r,
    component: s,
    invisible: l
  }, x = PR(d), b = {
    component: s,
    slots: u,
    slotProps: c
  }, [C, y] = me("root", {
    elementType: IR,
    externalForwardedProps: b,
    className: J(x.root, i),
    ownerState: d
  }), [h, S] = me("transition", {
    elementType: P1,
    externalForwardedProps: b,
    ownerState: d
  });
  return /* @__PURE__ */ f.jsx(h, {
    in: a,
    timeout: p,
    ...v,
    ...S,
    children: /* @__PURE__ */ f.jsx(C, {
      ...y,
      ref: n,
      children: o
    })
  });
}), MR = ce("MuiBox", ["root"]), $R = Gc(), Ye = FC({
  themeId: rr,
  defaultTheme: $R,
  defaultClassName: MR.root,
  generateClassName: _0.generate
});
function jR(e) {
  return de("MuiButton", e);
}
const oo = ce("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), AR = /* @__PURE__ */ m.createContext({}), OR = /* @__PURE__ */ m.createContext(void 0), LR = (e) => {
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
    root: ["root", s && "loading", i, `size${ie(o)}`, `color${ie(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${ie(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, u = fe(c, jR, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...u
  };
}, M1 = [{
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
}], NR = H(Po, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ie(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    ...xt(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${oo.disabled}`]: {
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
        [`&.${oo.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${oo.disabled}`]: {
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
        [`&.${oo.disabled}`]: {
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
        [`&.${oo.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${oo.disabled}`]: {
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
        ...xt(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${oo.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), zR = H("span", {
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
      ...xt(e, ["opacity"], {
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
  }, ...M1]
})), DR = H("span", {
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
      ...xt(e, ["opacity"], {
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
  }, ...M1]
})), BR = H("span", {
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
})), lg = H("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Bt = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = m.useContext(AR), o = m.useContext(OR), i = Ys(r, t), s = pe({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: c = "button",
    className: u,
    disabled: p = !1,
    disableElevation: v = !1,
    disableFocusRipple: d = !1,
    endIcon: x,
    focusVisibleClassName: b,
    fullWidth: C = !1,
    id: y,
    loading: h = null,
    loadingIndicator: S,
    loadingPosition: w = "center",
    size: E = "medium",
    startIcon: k,
    type: R,
    variant: T = "text",
    ...A
  } = s, O = kr(y), I = S ?? /* @__PURE__ */ f.jsx(ti, {
    "aria-labelledby": O,
    color: "inherit",
    size: 16
  }), g = {
    ...s,
    color: a,
    component: c,
    disabled: p,
    disableElevation: v,
    disableFocusRipple: d,
    fullWidth: C,
    loading: h,
    loadingIndicator: I,
    loadingPosition: w,
    size: E,
    type: R,
    variant: T
  }, M = LR(g), P = (k || h && w === "start") && /* @__PURE__ */ f.jsx(zR, {
    className: M.startIcon,
    ownerState: g,
    children: k || /* @__PURE__ */ f.jsx(lg, {
      className: M.loadingIconPlaceholder,
      ownerState: g
    })
  }), $ = (x || h && w === "end") && /* @__PURE__ */ f.jsx(DR, {
    className: M.endIcon,
    ownerState: g,
    children: x || /* @__PURE__ */ f.jsx(lg, {
      className: M.loadingIconPlaceholder,
      ownerState: g
    })
  }), L = o || "", N = typeof h == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ f.jsx("span", {
      className: M.loadingWrapper,
      style: {
        display: "contents"
      },
      children: h && /* @__PURE__ */ f.jsx(BR, {
        className: M.loadingIndicator,
        ownerState: g,
        children: I
      })
    })
  ) : null, {
    root: j,
    ...z
  } = M;
  return /* @__PURE__ */ f.jsxs(NR, {
    ownerState: g,
    className: J(r.className, M.root, u, L),
    component: c,
    disabled: p || h,
    focusRipple: !d,
    focusVisibleClassName: J(M.focusVisible, b),
    ref: n,
    internalNativeButton: !0,
    type: R,
    id: h ? O : y,
    ...A,
    classes: z,
    children: [P, w !== "end" && N, l, w === "end" && N, $]
  });
});
function FR(e) {
  return de("MuiCard", e);
}
ce("MuiCard", ["root"]);
const _R = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, FR, t);
}, WR = H(sr, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Zi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1,
    ...s
  } = r, l = {
    ...r,
    raised: i
  }, a = _R(l);
  return /* @__PURE__ */ f.jsx(WR, {
    className: J(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function UR(e) {
  return de("MuiCardContent", e);
}
ce("MuiCardContent", ["root"]);
const HR = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, UR, t);
}, VR = H("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Ji = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = HR(l);
  return /* @__PURE__ */ f.jsx(VR, {
    as: i,
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function ag(e) {
  return e.substring(2).toLowerCase();
}
function KR(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function YR(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, s = m.useRef(!1), l = m.useRef(null), a = m.useRef(!1), c = m.useRef(!1);
  m.useEffect(() => (setTimeout(() => {
    a.current = !0;
  }, 0), () => {
    a.current = !1;
  }), []);
  const u = nt(eo(t), l), p = Ze((x) => {
    const b = c.current;
    c.current = !1;
    const C = ht(l.current);
    if (!a.current || !l.current || "clientX" in x && KR(x, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let y;
    x.composedPath ? y = x.composedPath().includes(l.current) : y = !xo(C.documentElement, x.target) || xo(l.current, x.target), !y && (n || !b) && o(x);
  }), v = (x) => (b) => {
    c.current = !0;
    const C = t.props[x];
    C && C(b);
  }, d = {
    ref: u
  };
  return i !== !1 && (d[i] = v(i)), m.useEffect(() => {
    if (i !== !1) {
      const x = ag(i), b = ht(l.current), C = () => {
        s.current = !0;
      };
      return b.addEventListener(x, p), b.addEventListener("touchmove", C), () => {
        b.removeEventListener(x, p), b.removeEventListener("touchmove", C);
      };
    }
  }, [p, i]), r !== !1 && (d[r] = v(r)), m.useEffect(() => {
    if (r !== !1) {
      const x = ag(r), b = ht(l.current);
      return b.addEventListener(x, p), () => {
        b.removeEventListener(x, p);
      };
    }
  }, [p, r]), /* @__PURE__ */ m.cloneElement(t, d);
}
function $1(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function GR(e) {
  const t = ht(e);
  return e === t.body || e === t.documentElement ? pn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function bs(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function cg(e) {
  return parseFloat(pn(e).getComputedStyle(e).paddingRight) || 0;
}
function XR(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function ug(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !XR(s);
    l && a && bs(s, o);
  });
}
function QR(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = ht(r).body;
    else {
      const s = r.parentElement, l = pn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (GR(i)) {
      const s = $1(pn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${cg(i) + s}px`;
      const l = ht(r).querySelectorAll(".mui-fixed");
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
function qR(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class ZR {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && bs(t.modalRef, !1);
    const o = qR(n);
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
    o.restore || (o.restore = QR(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && bs(t.modalRef, n), ug(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && bs(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Ka = "data-mui-focusable";
function dg(e) {
  return e ? e.hasAttribute(Ka) ? e : e.querySelector(`[${Ka}]`) : null;
}
const JR = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function j1(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function eP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function tP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || eP(e));
}
function nP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(JR)).forEach((r, o) => {
    const i = j1(r);
    i === -1 || !tP(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function rP() {
  return !0;
}
function oP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = nP,
    isEnabled: s = rP,
    open: l
  } = e, a = m.useRef(!1), c = m.useRef(null), u = m.useRef(null), p = m.useRef(null), v = m.useRef(null), d = m.useRef(!1), x = m.useRef(null), b = nt(eo(t), x), C = m.useRef(null);
  m.useEffect(() => {
    !l || !x.current || (d.current = !n);
  }, [n, l]), m.useEffect(() => {
    if (a.current = !1, !l || !x.current)
      return;
    const S = ht(x.current), w = Jn(S), E = dg(x.current) ?? x.current;
    return xo(x.current, w) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), d.current && E.focus()), () => {
      !o && p.current && (a.current = !0, p.current.focus(), p.current = null);
    };
  }, [l]), m.useEffect(() => {
    if (!l || !x.current)
      return;
    const S = ht(x.current), w = (R) => {
      if (C.current = R, r || !s() || R.key !== "Tab")
        return;
      const T = x.current, A = Jn(S);
      if (T === null)
        return;
      const O = dg(T);
      if (A === T || A === O) {
        const g = i(T);
        if (g.length === 0)
          return;
        R.preventDefault(), R.shiftKey ? g[g.length - 1].focus() : g[0].focus();
        return;
      }
      if (xo(T, A)) {
        const g = i(T), M = g.indexOf(A);
        if (M === -1 || !g.some((L) => j1(L) > 0))
          return;
        R.preventDefault();
        let $ = 0;
        R.shiftKey ? $ = M <= 0 ? g.length - 1 : M - 1 : $ = M === g.length - 1 ? 0 : M + 1, g[$].focus();
      }
    }, E = () => {
      var O, I;
      const R = x.current;
      if (R === null)
        return;
      const T = Jn(S);
      if (!S.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (xo(R, T) || r && T !== c.current && T !== u.current)
        return;
      if (T !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!d.current)
        return;
      let A = [];
      if ((T === c.current || T === u.current) && (A = i(x.current)), A.length > 0) {
        const g = !!((O = C.current) != null && O.shiftKey && ((I = C.current) == null ? void 0 : I.key) === "Tab"), M = A[0], P = A[A.length - 1];
        typeof M != "string" && typeof P != "string" && (g ? P.focus() : M.focus());
      } else
        R.focus();
    };
    S.addEventListener("focusin", E), S.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const R = Jn(S);
      R && R.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), S.removeEventListener("focusin", E), S.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const y = (S) => {
    p.current === null && (p.current = S.relatedTarget), d.current = !0, v.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, h = (S) => {
    p.current === null && (p.current = S.relatedTarget), d.current = !0;
  };
  return /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ f.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: h,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ m.cloneElement(t, {
      ref: b,
      onFocus: y
    }), /* @__PURE__ */ f.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: h,
      ref: u,
      "data-testid": "sentinelEnd"
    })]
  });
}
function iP(e) {
  return typeof e == "function" ? e() : e;
}
function sP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const fg = () => {
}, Fl = new ZR();
function lP(e) {
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
  } = e, u = m.useRef({}), p = m.useRef(null), v = m.useRef(null), d = m.useRef(null), x = nt(d, c), [b, C] = m.useState(!a), y = sP(s);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const S = () => ht(p.current), w = () => (u.current.modalRef = d.current, u.current.mount = p.current, u.current), E = () => {
    Fl.mount(w(), {
      disableScrollLock: n
    }), d.current && (d.current.scrollTop = 0);
  }, k = Ze(() => {
    const L = iP(t) || S().body;
    Fl.add(w(), L), d.current && E();
  }), R = () => Fl.isTopModal(w()), T = Ze((L) => {
    p.current = L, L && (v.current = L, a && R() ? E() : d.current && bs(d.current, h));
  }), A = m.useCallback(() => {
    Fl.remove(w(), h);
  }, [h]);
  m.useEffect(() => () => {
    A();
  }, [A]), m.useEffect(() => {
    a ? k() : (!y || !r) && A();
  }, [a, A, y, r, k]);
  const O = (L) => (N) => {
    var j;
    (j = L.onKeyDown) == null || j.call(L, N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !R()) && (N.stopPropagation(), l && l(N, "escapeKeyDown"));
  }, I = (L) => (N) => {
    var j;
    (j = L.onClick) == null || j.call(L, N), N.target === N.currentTarget && l && l(N, "backdropClick");
  }, g = (L = {}) => {
    const N = Wa(e);
    delete N.onTransitionEnter, delete N.onTransitionExited;
    const j = {
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
      ...j,
      onKeyDown: O(j),
      ref: x
    };
  }, M = (L = {}) => {
    const N = L;
    return {
      "aria-hidden": !0,
      ...N,
      onClick: I(N),
      open: a
    };
  }, P = () => {
    const L = () => {
      C(!1), o && o();
    }, N = () => {
      C(!0), i && i(), r && A();
    };
    return {
      onEnter: _h(L, (s == null ? void 0 : s.props.onEnter) ?? fg),
      onExited: _h(N, (s == null ? void 0 : s.props.onExited) ?? fg)
    };
  }, $ = !a && y && !b ? v.current ?? t : t;
  return {
    getRootProps: g,
    getBackdropProps: M,
    getTransitionProps: P,
    rootRef: x,
    portalRef: T,
    portalContainer: $,
    isTopModal: R,
    exited: b,
    hasTransition: y
  };
}
function aP(e) {
  return de("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const cP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return fe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, aP, r);
}, uP = H("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(xe(({
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
}))), dP = H(I1, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Dp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    disableEnforceFocus: p = !1,
    disablePortal: v = !1,
    disableRestoreFocus: d = !1,
    disableScrollLock: x = !1,
    hideBackdrop: b = !1,
    keepMounted: C = !1,
    onClose: y,
    onTransitionEnter: h,
    onTransitionExited: S,
    open: w,
    slotProps: E = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: R,
    ...T
  } = r, A = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: u,
    disableEnforceFocus: p,
    disablePortal: v,
    disableRestoreFocus: d,
    disableScrollLock: x,
    hideBackdrop: b,
    keepMounted: C
  }, {
    getRootProps: O,
    getBackdropProps: I,
    getTransitionProps: g,
    portalRef: M,
    portalContainer: P,
    isTopModal: $,
    exited: L,
    hasTransition: N
  } = lP({
    ...A,
    rootRef: n
  }), j = {
    ...A,
    exited: L
  }, z = cP(j), D = {};
  if (l.props.tabIndex === void 0 && (D.tabIndex = "-1"), N) {
    const {
      onEnter: X,
      onExited: G
    } = g();
    D.onEnter = X, D.onExited = G;
  }
  const W = {
    slots: k,
    slotProps: E
  }, [_, Q] = me("root", {
    ref: n,
    elementType: uP,
    externalForwardedProps: {
      ...W,
      ...T,
      component: c
    },
    getSlotProps: O,
    ownerState: j,
    className: J(i, z == null ? void 0 : z.root, !j.open && j.exited && (z == null ? void 0 : z.hidden))
  }), [V, q] = me("backdrop", {
    elementType: dP,
    externalForwardedProps: W,
    shouldForwardComponentProp: !0,
    getSlotProps: (X) => I({
      ...X,
      onClick: (G) => {
        X != null && X.onClick && X.onClick(G);
      }
    }),
    className: z == null ? void 0 : z.backdrop,
    ownerState: j
  });
  return !C && !w && (!N || L) ? null : /* @__PURE__ */ f.jsx(T1, {
    ref: M,
    container: P,
    disablePortal: v,
    children: /* @__PURE__ */ f.jsxs(_, {
      ...Q,
      children: [b ? null : /* @__PURE__ */ f.jsx(V, {
        ...q
      }), /* @__PURE__ */ f.jsx(oP, {
        disableEnforceFocus: p,
        disableAutoFocus: u,
        disableRestoreFocus: d,
        isEnabled: $,
        open: w,
        children: /* @__PURE__ */ m.cloneElement(l, D)
      })]
    })
  });
});
function fP(e) {
  return de("MuiDialog", e);
}
ce("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const A1 = /* @__PURE__ */ m.createContext({}), pP = H(I1, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), mP = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${ie(n)}`],
    paper: ["paper", `paperWidth${ie(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return fe(s, fP, t);
}, hP = H(Dp, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), gP = H("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${ie(n.scroll)}`]];
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
}), yP = H(sr, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${ie(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(xe(({
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
}))), pg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialog"
  }), o = ar(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: c,
    className: u,
    fullScreen: p = !1,
    fullWidth: v = !1,
    maxWidth: d = "sm",
    onClick: x,
    onClose: b,
    open: C,
    PaperComponent: y = sr,
    role: h = "dialog",
    scroll: S = "paper",
    slots: w = {},
    slotProps: E = {},
    transitionDuration: k = i,
    ...R
  } = r, T = {
    ...r,
    fullScreen: p,
    fullWidth: v,
    maxWidth: d,
    scroll: S
  }, A = mP(T), O = m.useRef(), I = (X) => {
    O.current = X.target === X.currentTarget;
  }, g = (X) => {
    x && x(X), O.current && (O.current = null, b && b(X, "backdropClick"));
  }, M = kr(l), P = m.useMemo(() => ({
    titleId: M
  }), [M]), $ = {
    slots: w,
    slotProps: E
  }, [L, N] = me("root", {
    elementType: hP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    ownerState: T,
    className: J(A.root, u),
    ref: n
  }), [j, z] = me("backdrop", {
    elementType: pP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    ownerState: T,
    className: A.backdrop
  }), [D, W] = me("paper", {
    elementType: yP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    ownerState: T,
    className: A.paper,
    additionalProps: {
      elevation: 24,
      role: h,
      "aria-describedby": s,
      "aria-labelledby": M,
      "aria-modal": a,
      tabIndex: -1,
      [Ka]: ""
    }
  }), [_, Q] = me("container", {
    elementType: gP,
    externalForwardedProps: $,
    ownerState: T,
    className: A.container
  }), [V, q] = me("transition", {
    elementType: P1,
    externalForwardedProps: $,
    ownerState: T,
    additionalProps: {
      appear: !0,
      in: C,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ f.jsx(L, {
    closeAfterTransition: !0,
    slots: {
      backdrop: j
    },
    slotProps: {
      backdrop: {
        transitionDuration: k,
        ...z
      }
    },
    onClose: b,
    open: C,
    onClick: g,
    ...N,
    ...R,
    children: /* @__PURE__ */ f.jsx(V, {
      ...q,
      children: /* @__PURE__ */ f.jsx(_, {
        onMouseDown: I,
        ...Q,
        children: /* @__PURE__ */ f.jsx(D, {
          as: y,
          ...W,
          children: /* @__PURE__ */ f.jsx(A1.Provider, {
            value: P,
            children: c
          })
        })
      })
    })
  });
});
function vP(e) {
  return de("MuiDialogActions", e);
}
ce("MuiDialogActions", ["root", "spacing"]);
const xP = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return fe({
    root: ["root", !n && "spacing"]
  }, vP, t);
}, SP = H("div", {
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
}), mg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, l = {
    ...r,
    disableSpacing: i
  }, a = xP(l);
  return /* @__PURE__ */ f.jsx(SP, {
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function bP(e) {
  return de("MuiDialogContent", e);
}
ce("MuiDialogContent", ["root", "dividers"]);
function wP(e) {
  return de("MuiDialogTitle", e);
}
const CP = ce("MuiDialogTitle", ["root"]), kP = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return fe({
    root: ["root", n && "dividers"]
  }, bP, t);
}, TP = H("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(xe(({
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
      [`.${CP.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), hg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, l = {
    ...r,
    dividers: i
  }, a = kP(l);
  return /* @__PURE__ */ f.jsx(TP, {
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), EP = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, wP, t);
}, RP = H($e, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), gg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = EP(l), {
    titleId: c = i
  } = m.useContext(A1);
  return /* @__PURE__ */ f.jsx(RP, {
    component: "h2",
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? c,
    ...s
  });
});
function PP(e) {
  return de("MuiDivider", e);
}
const yg = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), IP = (e) => {
  const {
    absolute: t,
    children: n,
    classes: r,
    flexItem: o,
    orientation: i,
    textAlign: s,
    variant: l
  } = e;
  return fe({
    root: ["root", t && "absolute", l, i === "vertical" && "vertical", o && "flexItem", n && "withChildren", s === "right" && i !== "vertical" && "textAlignRight", s === "left" && i !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", i === "vertical" && "wrapperVertical"]
  }, PP, r);
}, MP = H("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.absolute && t.absolute, t[n.variant], n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft];
  }
})(xe(({
  theme: e
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin",
  variants: [{
    props: {
      absolute: !0
    },
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }
  }, {
    props: {
      variant: "inset"
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: "middle",
      orientation: "horizontal"
    },
    style: {
      marginLeft: e.spacing(2),
      marginRight: e.spacing(2)
    }
  }, {
    props: {
      variant: "middle",
      orientation: "vertical"
    },
    style: {
      marginTop: e.spacing(1),
      marginBottom: e.spacing(1)
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin"
    }
  }, {
    props: {
      flexItem: !0
    },
    style: {
      alignSelf: "stretch",
      height: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.children,
    style: {
      display: "flex",
      textAlign: "center",
      border: 0,
      borderTopStyle: "solid",
      borderLeftStyle: "solid",
      "&::before, &::after": {
        content: '""',
        alignSelf: "center"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.children && t.orientation !== "vertical",
    style: {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(e.vars || e).palette.divider}`,
        borderTopStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.orientation === "vertical" && t.children,
    style: {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
        borderLeftStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.textAlign === "right" && t.orientation !== "vertical",
    style: {
      "&::before": {
        width: "90%"
      },
      "&::after": {
        width: "10%"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.textAlign === "left" && t.orientation !== "vertical",
    style: {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }
  }]
}))), $P = H("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
  }
})(xe(({
  theme: e
}) => ({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      paddingTop: `calc(${e.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${e.spacing(1)} * 1.2)`
    }
  }]
}))), jP = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: o = !1,
    children: i,
    className: s,
    orientation: l = "horizontal",
    component: a = i || l === "vertical" ? "div" : "hr",
    flexItem: c = !1,
    role: u = a !== "hr" ? "separator" : void 0,
    textAlign: p = "center",
    variant: v = "fullWidth",
    ...d
  } = r, x = {
    ...r,
    absolute: o,
    component: a,
    flexItem: c,
    orientation: l,
    role: u,
    textAlign: p,
    variant: v
  }, b = IP(x);
  return /* @__PURE__ */ f.jsx(MP, {
    as: a,
    className: J(b.root, s),
    role: u,
    ref: n,
    ownerState: x,
    "aria-orientation": u === "separator" && (a !== "hr" || l === "vertical") ? l : void 0,
    ...d,
    children: i ? /* @__PURE__ */ f.jsx($P, {
      className: b.wrapper,
      ownerState: x,
      children: i
    }) : null
  });
}), AP = {
  visibility: "hidden"
}, OP = {};
function LP(e) {
  return typeof e == "string" && /^translate\(.+,\s*.+\)$/.test(e);
}
function NP(e, t, n, r = OP) {
  const {
    resetInlineTransform: o = !0
  } = r, i = n && n.getBoundingClientRect(), s = pn(t);
  let l, a;
  if (o) {
    const p = t.style.transform, v = t.style.transition;
    t.style.transition = "", t.style.transform = "", l = t.getBoundingClientRect(), a = s.getComputedStyle(t).getPropertyValue("transform"), t.style.transform = p, t.style.transition = v;
  } else
    l = t.getBoundingClientRect(), a = s.getComputedStyle(t).getPropertyValue("transform");
  const {
    offsetX: c,
    offsetY: u
  } = Mk(a);
  return e === "left" ? i ? `translateX(${i.right + c - l.left}px)` : `translateX(${s.innerWidth + c - l.left}px)` : e === "right" ? i ? `translateX(-${l.right - i.left - c}px)` : `translateX(-${l.left + l.width - c}px)` : e === "up" ? i ? `translateY(${i.bottom + u - l.top}px)` : `translateY(${s.innerHeight + u - l.top}px)` : i ? `translateY(-${l.top - i.top + l.height - u}px)` : `translateY(-${l.top + l.height - u}px)`;
}
function zP(e) {
  return typeof e == "function" ? e() : e;
}
function _l(e, t, n, r) {
  const o = zP(n), i = NP(e, t, o, r);
  i && (t.style.transform = i);
}
const vg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = ar(), o = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: l = !0,
    children: a,
    container: c,
    disablePrefersReducedMotion: u = !1,
    direction: p = "down",
    easing: v = o,
    in: d,
    onEnter: x,
    onEntered: b,
    onEntering: C,
    onExit: y,
    onExited: h,
    onExiting: S,
    style: w,
    timeout: E = i,
    ...k
  } = t, R = ul(r.motion.reducedMotion, u), T = m.useRef(null), A = m.useRef(!1), O = nt(eo(a), T, n), I = Pt(T, (z, D) => {
    _l(p, z, c), R.shouldReduceMotion || Xc(z), x && x(z, D);
  }), g = Pt(T, (z, D) => {
    const W = wi({
      timeout: E,
      style: w,
      easing: v
    }, {
      mode: "enter"
    }), _ = R.getTransitionTiming({
      duration: W.duration,
      delay: W.delay
    });
    z.style.transition = r.transitions.create("transform", {
      duration: _.duration,
      easing: W.easing,
      delay: _.delay
    }), z.style.transform = "none", C && C(z, D);
  }), M = Pt(T, b), P = Pt(T, S), $ = Pt(T, (z) => {
    const D = wi({
      timeout: E,
      style: w,
      easing: v
    }, {
      mode: "exit"
    }), W = R.getTransitionTiming({
      duration: D.duration,
      delay: D.delay
    });
    z.style.transition = r.transitions.create("transform", {
      duration: W.duration,
      easing: D.easing,
      delay: W.delay
    });
    const _ = LP(z.style.transform);
    A.current = _, _l(p, z, c, {
      resetInlineTransform: !_
    }), y && y(z);
  }), L = Pt(T, (z) => {
    A.current = !1, z.style.transition = "", h && h(z);
  }), N = s ? (z) => {
    s(T.current, z);
  } : void 0, j = m.useCallback(() => {
    T.current && _l(p, T.current, c);
  }, [p, c]);
  return m.useEffect(() => {
    if (d || p === "down" || p === "right")
      return;
    const z = al(() => {
      T.current && _l(p, T.current, c);
    }), D = pn(T.current);
    return D.addEventListener("resize", z), () => {
      z.clear(), D.removeEventListener("resize", z);
    };
  }, [p, d, c]), m.useEffect(() => {
    !d && !A.current && j();
  }, [d, j]), /* @__PURE__ */ f.jsx(Mp, {
    nodeRef: T,
    onEnter: I,
    onEntered: M,
    onEntering: g,
    onExit: $,
    onExited: L,
    onExiting: P,
    addEndListener: N,
    appear: l,
    in: d,
    reduceMotion: R.shouldReduceMotion,
    timeout: E,
    ...k,
    children: (z, {
      ownerState: D,
      ...W
    }) => {
      let _;
      return z === "exited" && !d ? _ = w || a.props.style ? {
        visibility: "hidden",
        ...w,
        ...a.props.style
      } : AP : w && a.props.style ? _ = {
        ...w,
        ...a.props.style
      } : _ = w || a.props.style, /* @__PURE__ */ m.cloneElement(a, {
        ref: O,
        style: _,
        ...W
      });
    }
  });
});
function DP(e) {
  return de("MuiDrawer", e);
}
ce("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "modal"]);
const O1 = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, n.variant === "temporary" && t.modal];
}, BP = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: r
  } = e, o = {
    root: ["root", `anchor${ie(n)}`],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper"]
  };
  return fe(o, DP, t);
}, FP = H(Dp, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: O1
})(xe(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), _P = H("div", {
  shouldForwardProp: on,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: O1
})({
  flex: "0 0 auto"
}), WP = H(sr, {
  name: "MuiDrawer",
  slot: "Paper"
})(xe(({
  theme: e
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "left" && t.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "top" && t.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "right" && t.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "bottom" && t.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(e.vars || e).palette.divider}`
    }
  }]
}))), L1 = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function UP(e) {
  return ["left", "right"].includes(e);
}
function HP({
  direction: e
}, t) {
  return e === "rtl" && UP(t) ? L1[t] : t;
}
const VP = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDrawer"
  }), o = ar(), i = ll(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    children: a,
    className: c,
    elevation: u = 16,
    hideBackdrop: p = !1,
    ModalProps: v = {},
    onClose: d,
    open: x = !1,
    transitionDuration: b = s,
    variant: C = "temporary",
    slots: y = {},
    slotProps: h = {},
    ...S
  } = r, w = m.useRef(!1), E = m.useRef(null), k = nt(n, E);
  m.useEffect(() => {
    w.current = !0;
  }, []);
  const R = m.useCallback(() => E.current, []), T = HP({
    direction: i ? "rtl" : "ltr"
  }, l), O = {
    ...r,
    anchor: l,
    elevation: u,
    open: x,
    variant: C,
    ...S
  }, I = BP(O), g = {
    slots: y,
    slotProps: {
      ...h,
      backdrop: c1(h.backdrop, {
        transitionDuration: b
      })
    }
  }, [M, P] = me("root", {
    ref: k,
    elementType: FP,
    className: J(I.root, I.modal, c),
    shouldForwardComponentProp: !0,
    ownerState: O,
    externalForwardedProps: {
      ...g,
      ...S,
      ...v
    },
    additionalProps: {
      closeAfterTransition: !0,
      open: x,
      onClose: d,
      hideBackdrop: p,
      slots: {
        backdrop: g.slots.backdrop
      },
      slotProps: {
        backdrop: g.slotProps.backdrop
      }
    }
  }), [$, L] = me("paper", {
    elementType: WP,
    shouldForwardComponentProp: !0,
    className: I.paper,
    ownerState: O,
    externalForwardedProps: g,
    additionalProps: {
      elevation: C === "temporary" ? u : 0,
      square: !0,
      ...C === "temporary" && {
        role: "dialog",
        "aria-modal": "true",
        [Ka]: "",
        tabIndex: -1
      }
    }
  }), [N, j] = me("docked", {
    elementType: _P,
    ref: k,
    className: J(I.root, I.docked, c),
    ownerState: O,
    externalForwardedProps: g,
    additionalProps: S
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [z, D] = me("transition", {
    elementType: vg,
    ownerState: O,
    externalForwardedProps: g,
    additionalProps: {
      in: x,
      direction: L1[T],
      timeout: b,
      appear: w.current,
      ...C === "temporary" && (y.transition == null || y.transition === vg) && {
        container: R
      }
    }
  }), W = /* @__PURE__ */ f.jsx($, {
    ...L,
    children: a
  });
  if (C === "permanent")
    return /* @__PURE__ */ f.jsx(N, {
      ...j,
      children: W
    });
  const _ = /* @__PURE__ */ f.jsx(z, {
    ...D,
    children: W
  });
  return C === "persistent" ? /* @__PURE__ */ f.jsx(N, {
    ...j,
    children: _
  }) : /* @__PURE__ */ f.jsx(M, {
    ...P,
    children: _
  });
});
function N1(e) {
  return de("MuiSelect", e);
}
const fo = ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), KP = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: l
  } = e, a = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${ie(i)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, c = fe(a, jk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...c
  };
}, YP = H(Zc, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Qc(e, t), !n.disableUnderline && t.underline];
  }
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    ...xt(e, "background-color", {
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
    [`&.${ro.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${ro.disabled}`]: {
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
          ...xt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${ro.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${ro.error}`]: {
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
          ...xt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${ro.disabled}, .${ro.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${ro.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Kt()).map(([s]) => {
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
        [`&.${fo.root}`]: {
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
})), GP = H(Jc, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: qc
})(xe(({
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
}))), Bp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    slots: p = {},
    type: v = "text",
    ...d
  } = r, x = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: v
  }, b = KP(r), C = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, y = u ? Lt(C, u) : C, h = p.root ?? YP, S = p.input ?? GP;
  return /* @__PURE__ */ f.jsx(Rp, {
    slots: {
      root: h,
      input: S
    },
    slotProps: y,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    ref: n,
    type: v,
    ...d,
    classes: b
  });
});
Bp.muiName = "Input";
function XP(e) {
  return de("MuiFormControl", e);
}
ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const QP = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ie(n)}`, r && "fullWidth"]
  };
  return fe(o, XP, t);
}, qP = H("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${ie(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), ZP = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    fullWidth: p = !1,
    hiddenLabel: v = !1,
    margin: d = "none",
    required: x = !1,
    size: b = "medium",
    variant: C = "outlined",
    ...y
  } = r, h = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    error: c,
    fullWidth: p,
    hiddenLabel: v,
    margin: d,
    required: x,
    size: b,
    variant: C
  }, S = QP(h), [w, E] = m.useState(() => {
    let $ = !1;
    return o && m.Children.forEach(o, (L) => {
      if (!Bu(L, ["Input", "Select"]))
        return;
      const N = Bu(L, ["Select"]) ? L.props.input : L;
      N && bk(N.props) && ($ = !0);
    }), $;
  }), [k, R] = m.useState(() => {
    let $ = !1;
    return o && m.Children.forEach(o, (L) => {
      Bu(L, ["Input", "Select"]) && (Fa(L.props, !0) || Fa(L.props.inputProps, !0)) && ($ = !0);
    }), $;
  }), [T, A] = m.useState(!1);
  a && T && A(!1);
  const O = u !== void 0 && !a ? u : T;
  let I;
  m.useRef(!1);
  const g = m.useCallback(() => {
    R(!0);
  }, []), M = m.useCallback(() => {
    R(!1);
  }, []), P = m.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: c,
    filled: k,
    focused: O,
    fullWidth: p,
    hiddenLabel: v,
    size: b,
    onBlur: () => {
      A(!1);
    },
    onFocus: () => {
      A(!0);
    },
    onEmpty: M,
    onFilled: g,
    registerEffect: I,
    required: x,
    variant: C
  }), [w, s, a, c, k, O, p, v, I, M, g, x, b, C]);
  return /* @__PURE__ */ f.jsx(cl.Provider, {
    value: P,
    children: /* @__PURE__ */ f.jsx(qP, {
      as: l,
      ownerState: h,
      className: J(S.root, i),
      ref: n,
      ...y,
      children: o
    })
  });
});
var xg;
const JP = (e) => {
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
    root: ["root", o && "disabled", i && "error", r && `size${ie(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return fe(c, Ak, t);
}, eI = H("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ie(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(xe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Fh.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Fh.error}`]: {
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
}))), tI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    margin: p,
    required: v,
    variant: d,
    ...x
  } = r, [b] = ji({
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
  const y = JP(C);
  return /* @__PURE__ */ f.jsx(eI, {
    as: s,
    className: J(y.root, i),
    ref: n,
    ...x,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      xg || (xg = /* @__PURE__ */ f.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), nI = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${ie(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return fe(a, Ok, t);
}, rI = H("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(xe(({
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
      [`&.${vs.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${vs.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${vs.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), oI = H("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(xe(({
  theme: e
}) => ({
  [`&.${vs.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), iI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    focused: p,
    required: v,
    ...d
  } = r, [x] = ji({
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
  }, C = nI(b);
  return /* @__PURE__ */ f.jsxs(rI, {
    as: l,
    ownerState: b,
    className: J(C.root, i),
    ref: n,
    ...d,
    children: [o, x.required && /* @__PURE__ */ f.jsxs(oI, {
      ownerState: b,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function ws(e) {
  return `scale(${e}, ${e ** 2})`;
}
const sI = {
  entering: {
    opacity: 1,
    transform: ws(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: ws(0.75)
  },
  exited: {
    opacity: 0,
    transform: ws(0.75)
  }
}, lI = {
  opacity: 0,
  transform: ws(0.75),
  visibility: "hidden"
}, Qs = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: c,
    onEntered: u,
    onEntering: p,
    onExit: v,
    onExited: d,
    onExiting: x,
    style: b,
    timeout: C = "auto",
    ...y
  } = t, h = m.useRef(null), S = ar(), w = ul(S.motion.reducedMotion, s), E = m.useRef(null), k = nt(E, eo(i), n), R = Pt(E, p), T = Pt(E, (P, $) => {
    w.shouldReduceMotion || Xc(P);
    const {
      duration: L,
      delay: N,
      easing: j
    } = wi({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    C === "auto" && !w.shouldReduceMotion ? (z = S.transitions.getAutoHeightDuration(P.clientHeight), h.current = z) : (z = L, h.current = null);
    const D = w.getTransitionTiming({
      duration: z,
      delay: N
    });
    P.style.transition = [S.transitions.create("opacity", {
      duration: D.duration,
      delay: D.delay
    }), S.transitions.create("transform", {
      duration: typeof D.duration == "string" ? D.duration : D.duration * 0.666,
      delay: D.delay,
      easing: j
    })].join(","), c && c(P, $);
  }), A = Pt(E, u), O = Pt(E, x), I = Pt(E, (P) => {
    const {
      duration: $,
      delay: L,
      easing: N
    } = wi({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let j;
    C === "auto" && !w.shouldReduceMotion ? (j = S.transitions.getAutoHeightDuration(P.clientHeight), h.current = j) : (j = $, h.current = null);
    const z = w.getTransitionTiming({
      duration: j,
      delay: L
    });
    P.style.transition = [S.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), S.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: N
    })].join(","), P.style.opacity = 0, P.style.transform = ws(0.75), v && v(P);
  }), g = Pt(E, (P) => {
    P.style.transition = "", d && d(P);
  }), M = r ? (P) => {
    r(E.current, P);
  } : void 0;
  return /* @__PURE__ */ f.jsx(Mp, {
    appear: o,
    in: a,
    nodeRef: E,
    onEnter: T,
    onEntered: A,
    onEntering: R,
    onExit: I,
    onExited: g,
    onExiting: O,
    addEndListener: M,
    getAutoTimeout: C === "auto" ? () => h.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...y,
    children: (P, {
      ownerState: $,
      ...L
    }) => {
      const N = l1(P, a, sI, lI, b, i.props.style);
      return /* @__PURE__ */ m.cloneElement(i, {
        style: N,
        ref: k,
        ...L
      });
    }
  });
});
Qs && (Qs.muiSupportAuto = !0);
function aI(e) {
  return de("MuiInputLabel", e);
}
const cI = ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), uI = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = fe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Lk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, dI = H(Zc, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Qc(e, t), !n.disableUnderline && t.underline];
  }
})(xe(({
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
        [`label + &, .${cI.root} + &`]: {
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
          ...xt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Gi.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Gi.error}`]: {
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
          ...xt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Gi.disabled}, .${Gi.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Gi.disabled}:before`]: {
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
})), fI = H(Jc, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: qc
})({}), Fp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    type: p = "text",
    ...v
  } = r, d = uI(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = c ? Lt(c, b) : b, y = u.root ?? dI, h = u.input ?? fI;
  return /* @__PURE__ */ f.jsx(Rp, {
    slots: {
      root: y,
      input: h
    },
    slotProps: C,
    fullWidth: i,
    inputComponent: s,
    multiline: l,
    ref: n,
    type: p,
    ...v,
    classes: d
  });
});
Fp.muiName = "Input";
function pI(e) {
  return de("MuiInputAdornment", e);
}
const ni = ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var Sg;
const mI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${ie(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, hI = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: s
  } = e, l = {
    root: ["root", n && "disablePointerEvents", o && `position${ie(o)}`, s, r && "hiddenLabel", i && `size${ie(i)}`]
  };
  return fe(l, pI, t);
}, gI = H("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: mI
})(xe(({
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
      [`&.${ni.positionStart}&:not(.${ni.hiddenLabel})`]: {
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
}))), yI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    ...p
  } = r, v = vk() || {};
  let d = u;
  u && v.variant, v && !d && (d = v.variant);
  const x = {
    ...r,
    hiddenLabel: v.hiddenLabel,
    size: v.size,
    disablePointerEvents: l,
    position: c,
    variant: d
  }, b = hI(x);
  return /* @__PURE__ */ f.jsx(cl.Provider, {
    value: null,
    children: /* @__PURE__ */ f.jsx(gI, {
      as: s,
      ownerState: x,
      className: J(b.root, i),
      ref: n,
      ...p,
      children: typeof o == "string" && !a ? /* @__PURE__ */ f.jsx($e, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ f.jsxs(m.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Sg || (Sg = /* @__PURE__ */ f.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), vI = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${ie(r)}`, s],
    asterisk: [l && "asterisk"]
  }, c = fe(a, aI, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...c
  };
}, xI = H(iI, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${vs.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(xe(({
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
      ...xt(e, ["color", "transform", "max-width"], {
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
}))), SI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: l,
    className: a,
    ...c
  } = r, [u, p] = ji({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let v = s;
  typeof v > "u" && p && (v = p.filled || p.focused || p.adornedStart);
  const d = {
    ...r,
    disableAnimation: o,
    formControl: p,
    shrink: v,
    size: u.size,
    variant: u.variant,
    required: u.required,
    focused: u.focused
  }, x = vI(d);
  return /* @__PURE__ */ f.jsx(xI, {
    "data-shrink": v,
    ref: n,
    className: J(x.root, a),
    ...c,
    ownerState: d,
    classes: x
  });
}), of = /* @__PURE__ */ m.createContext({});
function bI(e) {
  return de("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const wI = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return fe({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, bI, t);
}, CI = H("ul", {
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
}), kI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
  } = r, p = m.useMemo(() => ({
    dense: l
  }), [l]), v = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, d = wI(v);
  return /* @__PURE__ */ f.jsx(of.Provider, {
    value: p,
    children: /* @__PURE__ */ f.jsxs(CI, {
      as: s,
      className: J(d.root, i),
      ref: n,
      ownerState: v,
      ...u,
      children: [c, o]
    })
  });
}), bg = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), wg = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), _p = /* @__PURE__ */ m.createContext(void 0);
function z1() {
  const e = m.useContext(_p);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const TI = Object.is;
function EI(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !TI(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const RI = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function D1(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = Cs,
    wrap: s = !0
  } = e, [l, a] = m.useState(t), [c, u] = m.useState(t);
  let p = l;
  t !== c && (u(t), t !== void 0 && t !== l && (p = t, a(t)));
  const v = m.useRef(null), d = m.useRef(/* @__PURE__ */ new Map()), [x, b] = m.useState(0), C = m.useMemo(() => sf(d.current), [x]), y = Cg(p, C, i, n), h = m.useRef(y);
  h.current = y;
  const S = m.useCallback(() => {
    const g = sf(d.current), M = Cg(h.current, g, i, n);
    return W1(g, M);
  }, [n, i]), w = m.useCallback(() => d.current, []), E = Ze((g) => {
    const M = d.current.get(g.id);
    EI(M ?? null, g) || (d.current.set(g.id, g), b((P) => P + 1));
  }), k = Ze((g) => {
    d.current.delete(g) && b((M) => M + 1);
  }), R = Ze((g) => {
    a(g);
  }), T = m.useCallback((g) => h.current === g, []), A = m.useCallback((g, M, P, $) => {
    var j;
    const L = Wl(d.current), N = F1(L, g, M, P, $ ?? i);
    return N ? ((j = N.element) == null || j.focus(), a(N.id), N) : null;
  }, [i]), O = m.useCallback((g, M, P) => ({
    onFocus: (N) => {
      M == null || M(N);
      const j = Wl(d.current), z = H1(j, N.target);
      z !== -1 && a(j[z].id);
    },
    onKeyDown: (N) => {
      if (P == null || P(N), N.defaultPrevented || N.altKey || N.shiftKey || N.ctrlKey || N.metaKey || !RI.includes(N.key))
        return;
      let j = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (j = "ArrowRight", z = "ArrowLeft");
      const D = Wl(d.current), W = Jn(ht(v.current)), _ = W === v.current;
      let Q = kg(D, W, h.current), V = "next";
      switch (N.key) {
        case j:
          V = "previous", N.preventDefault(), _ && (Q = D.length);
          break;
        case z:
          N.preventDefault(), _ && (Q = -1);
          break;
        case "Home":
          N.preventDefault(), Q = -1;
          break;
        case "End":
          N.preventDefault(), V = "previous", Q = D.length;
          break;
        default:
          return;
      }
      A(Q, V, s);
    },
    ref: $I(g, (N) => {
      v.current = N;
    })
  }), [A, o, r, s]), I = m.useCallback((g) => {
    var N;
    const M = Wl(d.current), P = Jn(ht(v.current)), L = P === v.current ? -1 : kg(M, P, h.current);
    return ((N = A(L, "next", !0, g)) == null ? void 0 : N.id) ?? null;
  }, [A]);
  return m.useMemo(() => ({
    activeItemId: y,
    focusNext: I,
    getActiveItem: S,
    getContainerProps: O,
    getItemMap: w,
    isItemActive: T,
    registerItem: E,
    setActiveItemId: R,
    unregisterItem: k
  }), [y, I, S, O, w, T, E, R, k]);
}
function B1(e) {
  const t = z1(), {
    activeItemId: n,
    registerItem: r,
    unregisterItem: o
  } = t, i = m.useRef(null), s = m.useMemo(() => ({
    disabled: e.disabled ?? !1,
    element: null,
    focusableWhenDisabled: e.focusableWhenDisabled ?? !1,
    id: e.id,
    selected: e.selected ?? !1,
    textValue: e.textValue
  }), [e.disabled, e.focusableWhenDisabled, e.id, e.selected, e.textValue]), l = m.useRef(s);
  l.current = s;
  const a = m.useCallback((u) => {
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
  }, [e.id, r, o]), c = nt(e.ref, a);
  return ft(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), ft(() => {
    const u = e.id;
    return () => {
      o(u);
    };
  }, [e.id, o]), {
    ref: c,
    tabIndex: n === e.id ? 0 : -1
  };
}
function Cg(e, t, n, r) {
  return e != null ? PI(e, t, n) : II(t, n, r);
}
function PI(e, t, n) {
  var o;
  const r = U1(t, e);
  return r === -1 ? _1(t, n) : n(t[r]) ? t[r].id : ((o = F1(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function II(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = W1(e, r);
    if (o && t(o))
      return o.id;
  }
  return _1(e, t);
}
function kg(e, t, n) {
  if (t) {
    const r = H1(e, t);
    if (r !== -1)
      return r;
  }
  return U1(e, n);
}
function F1(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = Tg(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const c = e[l];
    if (!c || !o(c))
      l = Tg(l, i, n, r);
    else
      return c;
  }
  return null;
}
function _1(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function W1(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function U1(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function H1(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function sf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(lf).sort((o, i) => MI(o.element, i.element)), r = t.filter((o) => !lf(o));
  return [...n, ...r];
}
function Wl(e) {
  return sf(e).filter(lf);
}
function Tg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function Cs(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function lf(e) {
  return e.element != null && e.element.isConnected;
}
function MI(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function $I(...e) {
  return (t) => {
    e.forEach((n) => {
      qd(n ?? null, t);
    });
  };
}
function V1(e, t) {
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
function jI(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function AI(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function ua(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const K1 = /* @__PURE__ */ m.createContext(null);
function Y1() {
  return m.useContext(K1);
}
const OI = K1.Provider, G1 = /* @__PURE__ */ m.createContext(void 0);
function LI() {
  const e = m.useContext(G1);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function NI(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function X1(e, t) {
  if (t === void 0)
    return !0;
  let n = NI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function zI(e, t) {
  return X1(e, t) ? Cs(e) : !1;
}
function DI(e, t) {
  V1(e, t);
}
const BI = /* @__PURE__ */ m.forwardRef(function(t, n) {
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
    variant: p = "selectedMenu",
    ...v
  } = t, d = m.useRef(null), x = m.useRef(!1), [b, C] = m.useState(!1), y = Y1(), h = m.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), S = m.useCallback(($) => {
    var L, N, j;
    return p === "selectedMenu" ? ((L = $.find((z) => z.selected && Cs(z))) == null ? void 0 : L.id) ?? ((N = $.find((z) => Cs(z))) == null ? void 0 : N.id) ?? null : ((j = $.find((z) => Cs(z))) == null ? void 0 : j.id) ?? null;
  }, [p]), w = D1({
    activeItemId: void 0,
    getDefaultActiveItemId: S,
    orientation: "vertical",
    wrap: !c
  }), {
    activeItemId: E,
    focusNext: k,
    getActiveItem: R,
    getContainerProps: T,
    getItemMap: A
  } = w, O = Ze(($ = !1) => {
    if (!d.current || !$ && x.current)
      return null;
    if (i) {
      const L = R();
      if (L != null && L.element) {
        const N = Array.from(A().values()).some((z) => z.selected), j = p === "menu" && N && !L.selected && y == null;
        return C(j), DI(L.element, y), x.current = !0, L.element;
      }
      return o ? (C(!1), d.current.focus(), d.current) : null;
    }
    return o ? (C(!1), d.current.focus(), x.current = !0, d.current) : (C(!1), null);
  });
  ft(() => {
    if (!o && !i) {
      x.current = !1, C(!1);
      return;
    }
    O();
  }, [E, i, o, O]), m.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: ($, {
      direction: L
    }) => {
      const N = !d.current.style.width;
      if ($.clientHeight < d.current.clientHeight && N) {
        const j = `${$1(pn($))}px`;
        d.current.style[L === "rtl" ? "paddingLeft" : "paddingRight"] = j, d.current.style.width = `calc(100% + ${j})`;
      }
      return d.current;
    },
    focusInitialTarget: () => {
      if (!d.current)
        return null;
      const $ = Jn(ht(d.current));
      return $ && xo(d.current, $) ? $ : O(!0);
    }
  }), [O]);
  const I = T(void 0, v.onFocus), g = nt(d, I.ref, n), M = m.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: b,
    variant: p
  }), [a, b, p]), P = Ze(($) => {
    if (b && C(!1), ($.ctrlKey || $.metaKey || $.altKey) && u) {
      u($);
      return;
    }
    if (I.onKeyDown($), $.key.length === 1) {
      const N = h.current, j = $.key.toLowerCase(), z = performance.now();
      N.keys.length > 0 && (z - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && j !== N.keys[0] && (N.repeating = !1)), N.lastTime = z, N.keys.push(j);
      const D = Jn(ht(d.current)), W = D && !N.repeating && X1(D, N);
      N.previousKeyMatched && (W || k((_) => zI(_, N)) != null) ? $.preventDefault() : N.previousKeyMatched = !1;
    }
    u && u($);
  });
  return /* @__PURE__ */ f.jsx(kI, {
    role: "menu",
    ref: g,
    className: l,
    onKeyDown: P,
    tabIndex: -1,
    ...v,
    onFocus: I.onFocus,
    children: /* @__PURE__ */ f.jsx(G1.Provider, {
      value: M,
      children: /* @__PURE__ */ f.jsx(_p.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function FI(e) {
  return de("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function Eg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Rg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Pg(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ul(e) {
  return typeof e == "function" ? e() : e;
}
const _I = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    paper: ["paper"]
  }, FI, t);
}, WI = H(Dp, {
  name: "MuiPopover",
  slot: "Root"
})({}), Q1 = H(sr, {
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
}), UI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    container: p,
    disableAutoFocus: v = !1,
    elevation: d = 8,
    marginThreshold: x = 16,
    open: b,
    slots: C = {},
    slotProps: y = {},
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: S = "auto",
    disableScrollLock: w = !1,
    ...E
  } = r, k = m.useRef(), R = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: d,
    marginThreshold: x,
    transformOrigin: h,
    transitionDuration: S
  }, T = _I(R), A = m.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const U = Ul(i), se = (U && U.nodeType === 1 ? U : ht(k.current).body).getBoundingClientRect();
    return {
      top: se.top + Eg(se, s.vertical),
      left: se.left + Rg(se, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), O = m.useCallback((U) => ({
    vertical: Eg(U, h.vertical),
    horizontal: Rg(U, h.horizontal)
  }), [h.horizontal, h.vertical]), I = m.useCallback((U) => {
    const ne = {
      width: U.offsetWidth,
      height: U.offsetHeight
    }, se = O(ne);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Pg(se)
      };
    const Te = A();
    let Ee = Te.top - se.vertical, he = Te.left - se.horizontal;
    const ae = Ee + ne.height, Ae = he + ne.width, ze = pn(Ul(i)), Pe = ze.innerHeight - x, Le = ze.innerWidth - x;
    if (x != null && Ee < x) {
      const ue = Ee - x;
      Ee -= ue, se.vertical += ue;
    } else if (x != null && ae > Pe) {
      const ue = ae - Pe;
      Ee -= ue, se.vertical += ue;
    }
    if (x != null && he < x) {
      const ue = he - x;
      he -= ue, se.horizontal += ue;
    } else if (Ae > Le) {
      const ue = Ae - Le;
      he -= ue, se.horizontal += ue;
    }
    return {
      top: `${Math.round(Ee)}px`,
      left: `${Math.round(he)}px`,
      transformOrigin: Pg(se)
    };
  }, [i, a, A, O, x]), [g, M] = m.useState(b), P = m.useCallback(() => {
    const U = k.current;
    if (!U)
      return;
    const ne = I(U);
    ne.top != null && U.style.setProperty("top", ne.top), ne.left != null && (U.style.left = ne.left), U.style.transformOrigin = ne.transformOrigin, M(!0);
  }, [I]);
  m.useEffect(() => (w && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [i, w, P]);
  const $ = () => {
    P();
  }, L = () => {
    M(!1);
  };
  m.useEffect(() => {
    b && P();
  }), m.useImperativeHandle(o, () => b ? {
    updatePosition: () => {
      P();
    }
  } : null, [b, P]), m.useEffect(() => {
    if (!b)
      return;
    const U = al(() => {
      P();
    }), ne = pn(Ul(i));
    return ne.addEventListener("resize", U), () => {
      U.clear(), ne.removeEventListener("resize", U);
    };
  }, [i, b, P]);
  let N = S;
  const j = {
    slots: C,
    slotProps: y
  }, [z, D] = me("transition", {
    elementType: Qs,
    externalForwardedProps: j,
    ownerState: R,
    getSlotProps: (U) => ({
      ...U,
      onEntering: (ne, se) => {
        var Te;
        (Te = U.onEntering) == null || Te.call(U, ne, se), $();
      },
      onExited: (ne) => {
        var se;
        (se = U.onExited) == null || se.call(U, ne), L();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  S === "auto" && !z.muiSupportAuto && (N = void 0);
  const W = p || (i ? ht(Ul(i)).body : void 0), [_, {
    slots: Q,
    slotProps: V,
    ...q
  }] = me("root", {
    ref: n,
    elementType: WI,
    externalForwardedProps: {
      ...j,
      ...E
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: C.backdrop
      },
      slotProps: {
        backdrop: c1(typeof y.backdrop == "function" ? y.backdrop(R) : y.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: b
    },
    ownerState: R,
    className: J(T.root, u)
  }), [X, G] = me("paper", {
    ref: k,
    className: T.paper,
    elementType: Q1,
    externalForwardedProps: j,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: d,
      style: g ? void 0 : {
        opacity: 0
      }
    },
    ownerState: R
  });
  return /* @__PURE__ */ f.jsx(_, {
    ...q,
    ...!Ba(_) && {
      slots: Q,
      slotProps: V,
      disableAutoFocus: v,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ f.jsx(z, {
      ...D,
      timeout: N,
      children: /* @__PURE__ */ f.jsx(X, {
        ...G,
        children: c
      })
    })
  });
});
function HI(e) {
  return de("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const VI = {
  vertical: "top",
  horizontal: "right"
}, KI = {
  vertical: "top",
  horizontal: "left"
}, YI = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, HI, t);
}, GI = H(UI, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), XI = H(Q1, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), QI = H(BI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), qI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    transitionDuration: p = "auto",
    variant: v = "selectedMenu",
    slots: d = {},
    slotProps: x = {},
    ...b
  } = r, C = ll(), y = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: p,
    variant: v
  }, h = YI(y), S = o && c, w = S && !l, E = m.useRef(null), k = ($, L) => {
    var N, j;
    E.current && (E.current.adjustStyleForScrollbar($, {
      direction: C ? "rtl" : "ltr"
    }), S && ((j = (N = E.current).focusInitialTarget) == null || j.call(N)));
  }, R = ($) => {
    $.key === "Tab" && ($.preventDefault(), a && a($, "tabKeyDown"));
  }, T = {
    slots: d,
    slotProps: x
  }, A = Ri({
    elementType: d.root,
    externalSlotProps: x.root,
    ownerState: y,
    className: [h.root, s]
  }), [O, I] = me("paper", {
    className: h.paper,
    elementType: XI,
    externalForwardedProps: T,
    shouldForwardComponentProp: !0,
    ownerState: y
  }), [g, M] = me("list", {
    className: h.list,
    elementType: QI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: T,
    getSlotProps: ($) => ({
      ...$,
      onKeyDown: (L) => {
        var N;
        R(L), (N = $.onKeyDown) == null || N.call($, L);
      }
    }),
    ownerState: y
  }), P = typeof x.transition == "function" ? x.transition(y) : x.transition;
  return /* @__PURE__ */ f.jsx(
    GI,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? VI : KI,
      slots: {
        root: d.root,
        paper: O,
        backdrop: d.backdrop,
        transition: d.transition
      },
      slotProps: {
        root: A,
        paper: I,
        backdrop: typeof x.backdrop == "function" ? x.backdrop(y) : x.backdrop,
        transition: {
          ...P,
          onEntering: (...$) => {
            var L;
            k(...$), (L = P == null ? void 0 : P.onEntering) == null || L.call(P, ...$);
          }
        }
      },
      open: c,
      ref: n,
      transitionDuration: p,
      ownerState: y,
      ...b,
      classes: u,
      children: /* @__PURE__ */ f.jsx(g, {
        actions: E,
        autoFocus: S,
        autoFocusItem: w,
        variant: v,
        ...M,
        children: i
      })
    }
  );
}), ZI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, JI = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = fe({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, Nk, s);
  return {
    ...s,
    ...a
  };
}, eM = H(Po, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: ZI
})(xe(({
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
  [`&.${Xi.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Xi.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Xi.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Xi.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Xi.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${yg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${yg.inset}`]: {
    marginLeft: 52
  },
  [`& .${wg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${wg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${bg.root}`]: {
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
      [`& .${bg.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), xn = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    tabIndex: p,
    className: v,
    ...d
  } = r, b = u === "menuitemcheckbox" || u === "menuitemradio" ? !!r.selected : void 0, C = Y1(), y = m.useContext(of), h = m.useMemo(() => ({
    dense: s || y.dense || !1,
    disableGutters: a
  }), [y.dense, s, a]), S = LI(), w = kr(), E = S.suppressInitialFocusVisible, k = S.itemsFocusableWhenDisabled, R = m.useRef(null);
  ft(() => {
    o && R.current && V1(R.current, C);
  }, [o]);
  const T = {
    ...r,
    dense: h.dense,
    divider: l,
    disableGutters: a
  }, A = JI(r), {
    root: O,
    ...I
  } = A, g = B1({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), M = nt(R, g.ref);
  let P;
  return p !== void 0 ? P = p : S.variant === "selectedMenu" ? P = g.tabIndex : (!r.disabled || k) && (P = -1), /* @__PURE__ */ f.jsx(of.Provider, {
    value: h,
    children: /* @__PURE__ */ f.jsx(eM, {
      ref: M,
      role: u,
      "aria-checked": b,
      tabIndex: P,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: E,
      focusVisibleClassName: J(A.focusVisible, c),
      className: J(A.root, v),
      ...d,
      ownerState: T,
      classes: I
    })
  });
}), tM = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${ie(n)}`, i && "iconOpen", r && "disabled"]
  };
  return fe(l, zk, t);
}, q1 = H("select", {
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
  [`&.${Pp.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${ni.root}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "calc(var(--_caret, 24px) + (var(--_endAdornment, 28px) - 1.5rem)/2)"
    // 1.5rem is the default icon size
  },
  [`.${ln.root}:has(> &)`]: {
    "--_endAdornment": "0px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      [`.${ln.root}:has(> &)`]: {
        "--_caret": "24px"
      },
      [`.${ln.root}:has(> & ~ .${ni.root})`]: {
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
      [`.${ln.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${ln.root}:has(> & ~ .${ni.root})`]: {
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
      [`.${ln.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${ln.root}:has(> & ~ .${ni.root})`]: {
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
})), nM = H(q1, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: on,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Pp.multiple}`]: t.multiple
    }];
  }
})({}), Z1 = H("svg", {
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
  [`&.${Pp.disabled}`]: {
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
})), rM = H(Z1, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ie(n.variant)}`], n.open && t.iconOpen];
  }
})({}), oM = /* @__PURE__ */ m.forwardRef(function(t, n) {
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
  }, p = tM(u);
  return /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ f.jsx(nM, {
      ownerState: u,
      className: J(p.select, r),
      disabled: o,
      ref: l || n,
      ...c
    }), t.multiple ? null : /* @__PURE__ */ f.jsx(rM, {
      as: s,
      ownerState: u,
      className: p.icon
    })]
  });
});
var Ig;
const iM = H("fieldset", {
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
}), sM = H("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: on
})(xe(({
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
      ...xt(e, "width", {
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
      ...xt(e, "max-width", {
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
      ...xt(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function lM(e) {
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
  return /* @__PURE__ */ f.jsx(iM, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ f.jsx(sM, {
      ownerState: a,
      children: l ? /* @__PURE__ */ f.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ig || (Ig = /* @__PURE__ */ f.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const aM = (e) => {
  const {
    classes: t
  } = e, r = fe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Dk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, cM = H(Zc, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Qc
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Yn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Yn.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${Yn.focused} .${Yn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Kt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Yn.focused} .${Yn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${Yn.error} .${Yn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Yn.disabled} .${Yn.notchedOutline}`]: {
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
        [`&.${fo.root}`]: {
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
})), uM = H(lM, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), dM = H(Jc, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: qc
})(xe(({
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
}))), Wp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    type: p = "text",
    ...v
  } = r, d = aM(r), [x, b] = ji({
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
    type: p
  }, y = c.root ?? cM, h = c.input ?? dM, [S, w] = me("notchedOutline", {
    elementType: uM,
    className: d.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: c,
      slotProps: u
    },
    additionalProps: {
      label: s != null && s !== "" && x.required ? /* @__PURE__ */ f.jsxs(m.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ f.jsx(Rp, {
    slots: {
      root: y,
      input: h
    },
    slotProps: u,
    renderSuffix: (E) => /* @__PURE__ */ f.jsx(S, {
      ...w,
      notched: typeof a < "u" ? a : !!(E.startAdornment || E.filled || E.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: l,
    ref: n,
    type: p,
    ...v,
    classes: {
      ...d,
      notchedOutline: null
    }
  });
});
Wp.muiName = "Input";
function fM(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function J1(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return m.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ m.isValidElement(n) && (t += J1(n.props.children));
  }), t;
}
function pM(e, t, n = 0) {
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
function mM(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function hM(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ m.isValidElement(i) || !fM(i) || i.props.disabled)
      continue;
    const s = J1(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && ua(t, i.props.value) && (r = n.length), n.push({
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
var Mg;
const Hl = 2, gM = 400, $g = 200, yM = 750, io = " ", vM = "ArrowUp", xM = "ArrowDown", SM = "Enter";
function jg(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Hl && e.clientX <= r.right + Hl && e.clientY >= r.top - Hl && e.clientY <= r.bottom + Hl;
}
const bM = H(q1, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${fo.select}`]: t.select
      },
      {
        [`&.${fo.select}`]: t[n.variant]
      },
      {
        [`&.${fo.error}`]: t.error
      },
      {
        [`&.${fo.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${fo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), wM = H(Z1, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), CM = H("input", {
  shouldForwardProp: (e) => i1(e) && e !== "classes",
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
}), kM = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e;
  return fe({
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, N1, t);
}, TM = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var Ni, Lo, Hp, Vp;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: c,
    defaultValue: u,
    disabled: p,
    displayEmpty: v,
    error: d = !1,
    IconComponent: x,
    inputRef: b,
    labelId: C,
    MenuProps: y = {},
    multiple: h,
    name: S,
    onBlur: w,
    onChange: E,
    onClose: k,
    onFocus: R,
    // eslint-disable-next-line react/prop-types
    onKeyDown: T,
    // eslint-disable-next-line react/prop-types
    onMouseDown: A,
    onOpen: O,
    open: I,
    readOnly: g,
    renderValue: M,
    required: P,
    SelectDisplayProps: $ = {},
    tabIndex: L,
    // catching `type` from Input which makes no sense for SelectInput
    type: N,
    value: j,
    variant: z = "standard",
    ...D
  } = t, [W, _] = Zd({
    controlled: j,
    default: u,
    name: "Select"
  }), [Q, V] = Zd({
    controlled: I,
    default: c,
    name: "Select"
  }), q = m.useRef(null), X = m.useRef(null), G = m.useRef(null), U = m.useRef(!1), ne = m.useRef(!1), se = m.useRef(null), Te = m.useRef(!1), Ee = m.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), he = m.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), ae = er(), Ae = er(), ze = er(), [Pe, Le] = m.useState(null), {
    current: ue
  } = m.useRef(I != null), [Oe, Se] = m.useState(), [ge, Ie] = m.useState(null), De = nt(n, b), rt = m.useCallback((Y) => {
    X.current = Y, Y && Le(Y);
  }, []), We = Pe == null ? void 0 : Pe.parentNode;
  m.useImperativeHandle(De, () => ({
    focus: () => {
      X.current.focus();
    },
    node: q.current,
    value: W
  }), [W]);
  const Ce = Pe !== null && Q, He = m.useCallback(() => {
    ze.clear(), he.current.buffer = "", he.current.previousSearchIndex = null, he.current.matchedIndex = null;
  }, [ze]);
  ft(() => {
    U.current = Ce, Ce && He();
  }, [Ce, He]);
  const gt = m.useCallback(() => {
    ae.clear(), Ae.clear();
  }, [ae, Ae]), oe = m.useCallback(() => {
    gt(), Te.current = !1, Ee.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [gt]), be = m.useCallback(() => {
    se.current && (se.current(), se.current = null);
  }, []);
  m.useEffect(() => {
    Ce || (oe(), be());
  }, [Ce, oe, be]), m.useEffect(() => () => {
    oe(), be(), He();
  }, [oe, be, He]), m.useEffect(() => {
    if (!Ce || !We || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      Se(We.clientWidth);
    });
    return Y.observe(We), () => {
      Y.disconnect();
    };
  }, [Ce, We, s]), m.useEffect(() => {
    c && Q && Pe && !ue && (Se(s ? null : We.clientWidth), X.current.focus());
  }, [Pe, s]), m.useEffect(() => {
    i && X.current.focus();
  }, [i]), m.useEffect(() => {
    if (!C)
      return;
    const Y = ht(X.current).getElementById(C);
    if (Y) {
      const le = () => {
        getSelection().isCollapsed && X.current.focus();
      };
      return Y.addEventListener("click", le), () => {
        Y.removeEventListener("click", le);
      };
    }
  }, [C]);
  const Be = Ze((Y, le) => {
    Y || (oe(), be()), Y ? (He(), Ie(jI(le)), O && O(le)) : (Ie(null), k && k(le)), ue || (U.current = Y, Se(s ? null : We.clientWidth), V(Y));
  }), lt = () => {
    oe(), ne.current ? Ae.start($g, () => {
      Ee.current.allowUnselectedMouseUp = !0, ae.start($g, () => {
        Ee.current.allowSelectedMouseUp = !0;
      });
    }) : ae.start(gM, () => {
      Ee.current.allowSelectedMouseUp = !0, Ee.current.allowUnselectedMouseUp = !0;
    });
  }, ke = (Y) => {
    if (A == null || A(Y), Y.button !== 0 || (Y.preventDefault(), !X.current))
      return;
    X.current.focus();
    const le = ht(Y.currentTarget);
    lt(), be();
    const Me = (at) => {
      se.current = null, X.current && (jg(at, X.current) || jg(at, G.current) || !U.current && ue || Be(!1, at));
    };
    le.addEventListener("mouseup", Me, {
      capture: !0,
      once: !0
    }), se.current = () => {
      le.removeEventListener("mouseup", Me, !0);
    }, Be(!0, Y);
  }, An = (Y) => {
    Be(!1, Y);
  }, vn = m.Children.toArray(l), B = (Y) => {
    const le = vn.find((Me) => Me.props.value === Y.target.value);
    le !== void 0 && (_(le.props.value), E && E(Y, le));
  }, we = (Y, le, Me) => {
    if (_(Me), E) {
      const at = Y.nativeEvent || Y, Ut = new at.constructor(at.type, at);
      Object.defineProperty(Ut, "target", {
        writable: !0,
        value: {
          value: Me,
          name: S
        }
      }), E(Ut, le);
    }
  }, ee = (Y) => (le) => {
    Te.current = !1;
    let Me;
    if (le.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        Me = Array.isArray(W) ? W.slice() : [];
        const at = W.indexOf(Y.props.value);
        at === -1 ? Me.push(Y.props.value) : Me.splice(at, 1);
      } else
        Me = Y.props.value;
      Y.props.onClick && Y.props.onClick(le), W !== Me && we(le, Y, Me), h || Be(!1, le);
    }
  }, ve = (Y, le) => (Me) => {
    var gl, No;
    if ((No = (gl = Y.props).onMouseUp) == null || No.call(gl, Me), Te.current) {
      Te.current = !1;
      return;
    }
    const at = !Ee.current.allowSelectedMouseUp && le, Ut = !Ee.current.allowUnselectedMouseUp && !le;
    at || Ut || Me.currentTarget.click();
  }, ot = (Y) => {
    var Kp;
    const le = he.current, Me = le.buffer !== "";
    if (Ce || h || p || Y.defaultPrevented || (Kp = Y.nativeEvent) != null && Kp.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === io && !Me)
      return !1;
    Y.key === io && Y.preventDefault();
    const at = le.buffer === "", {
      options: Ut,
      selectedIndex: gl
    } = hM(vn, W);
    if (Ut.length === 0)
      return Y.key !== io && He(), !0;
    at && (le.previousSearchIndex = gl);
    const No = Y.key.toLowerCase();
    le.buffer === No && mM(Ut, No) && (le.buffer = "", le.previousSearchIndex = le.matchedIndex), le.buffer += No, ze.start(yM, He);
    const ou = pM(Ut, le.buffer, (le.previousSearchIndex ?? -1) + 1);
    if (ou !== -1) {
      const iu = Ut[ou];
      return le.matchedIndex = ou, ua(W, iu.value) || we(Y, iu.child, iu.value), !0;
    }
    return Y.key !== io && He(), !0;
  }, pl = (Y) => {
    if (!g) {
      const le = ot(Y), Me = Y.key === io || Y.key === vM || Y.key === xM || Y.key === SM;
      !le && Me && (Y.preventDefault(), Be(!0, Y)), T == null || T(Y);
    }
  }, Ai = (Y) => {
    He(), !Ce && w && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: W,
        name: S
      }
    }), w(Y));
  }, Oi = (Y) => (le) => {
    var Me, at;
    (at = (Me = Y == null ? void 0 : Y.props) == null ? void 0 : Me.onKeyDown) == null || at.call(Me, le), le.key === io && le.target === le.currentTarget && !le.defaultPrevented && (le.preventDefault(), le.repeat || le.currentTarget.click());
  };
  delete D["aria-invalid"];
  let Rr, ml;
  const jo = [];
  let Ao = !1, Oo = !1;
  (Fa({
    value: W
  }) || v) && (M ? Rr = M(W) : Ao = !0);
  const ru = vn.map((Y) => {
    if (!/* @__PURE__ */ m.isValidElement(Y))
      return null;
    let le;
    if (h) {
      if (!Array.isArray(W))
        throw new Error(Cr(2));
      le = W.some((Me) => ua(Me, Y.props.value)), le && Ao && jo.push(Y.props.children);
    } else
      le = ua(W, Y.props.value), le && Ao && (ml = Y.props.children);
    return le && (Oo = !0), /* @__PURE__ */ m.cloneElement(Y, {
      "aria-selected": le ? "true" : "false",
      onMouseDown: (Me) => {
        var at, Ut;
        Te.current = !0, (Ut = (at = Y.props).onMouseDown) == null || Ut.call(at, Me);
      },
      onPointerDown: (Me) => {
        var at, Ut;
        Te.current = !0, (Ut = (at = Y.props).onPointerDown) == null || Ut.call(at, Me);
      },
      onClick: ee(Y),
      onMouseUp: ve(Y, le),
      onKeyUp: (Me) => {
        Me.key === io && Me.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(Me);
      },
      onKeyDown: Oi(Y),
      role: "option",
      selected: le,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  ft(() => {
    ne.current = Oo, !Ce && !h && !Oo && He();
  }, [Oo, h, Ce, He]), Ao && (h ? jo.length === 0 ? Rr = null : Rr = jo.reduce((Y, le, Me) => (Y.push(le), Me < jo.length - 1 && Y.push(", "), Y), []) : Rr = ml);
  let hl = Oe;
  !s && ue && Pe && (hl = We.clientWidth);
  let Li;
  typeof L < "u" ? Li = L : Li = p ? null : 0;
  const re = $.id || (S ? `mui-component-select-${S}` : void 0), Z = {
    ...t,
    variant: z,
    value: W,
    open: Ce,
    error: d
  }, ye = kM(Z), Re = typeof ((Ni = y.slotProps) == null ? void 0 : Ni.paper) == "function" ? y.slotProps.paper(Z) : (Lo = y.slotProps) == null ? void 0 : Lo.paper, yt = nt(Re == null ? void 0 : Re.ref, G), cr = typeof ((Hp = y.slotProps) == null ? void 0 : Hp.list) == "function" ? y.slotProps.list(Z) : (Vp = y.slotProps) == null ? void 0 : Vp.list, Hn = kr(), to = kr();
  return /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ f.jsx(bM, {
      as: "div",
      ref: rt,
      tabIndex: Li,
      role: "combobox",
      "aria-controls": Ce ? Hn : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Ce ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": g ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": P ? "true" : void 0,
      "aria-invalid": d ? "true" : void 0,
      onKeyDown: pl,
      onMouseDown: p || g ? null : ke,
      onBlur: Ai,
      onFocus: R,
      ...$,
      ownerState: Z,
      className: J($.className, ye.select, a),
      id: re,
      children: AI(Rr) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Mg || (Mg = /* @__PURE__ */ f.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Rr
    }), /* @__PURE__ */ f.jsx(CM, {
      "aria-invalid": d,
      value: Array.isArray(W) ? W.join(",") : W,
      name: S,
      ref: q,
      "aria-hidden": !0,
      onChange: B,
      tabIndex: -1,
      disabled: p,
      readOnly: g,
      className: ye.nativeInput,
      autoFocus: i,
      required: P,
      ...D,
      id: D.id ?? to,
      ownerState: Z
    }), /* @__PURE__ */ f.jsx(wM, {
      as: x,
      className: ye.icon,
      ownerState: Z
    }), /* @__PURE__ */ f.jsx(OI, {
      value: ge,
      children: /* @__PURE__ */ f.jsx(qI, {
        id: `menu-${S || ""}`,
        anchorEl: We,
        open: Ce,
        onClose: An,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        ...y,
        slotProps: {
          ...y.slotProps,
          list: {
            "aria-labelledby": C,
            role: "listbox",
            "aria-multiselectable": h ? "true" : void 0,
            disableListWrap: !0,
            id: Hn,
            ...cr
          },
          paper: {
            ...Re,
            ref: yt,
            style: {
              minWidth: hl,
              ...Re == null ? void 0 : Re.style
            }
          }
        },
        children: ru
      })
    })]
  });
}), EM = (e) => {
  const {
    classes: t
  } = e, r = fe({
    root: ["root"]
  }, N1, t);
  return {
    ...t,
    ...r
  };
}, Up = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => on(e) && e !== "variant"
}, RM = H(Fp, Up)(""), PM = H(Wp, Up)(""), IM = H(Bp, Up)(""), ri = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: c = !1,
    IconComponent: u = kR,
    id: p,
    input: v,
    inputProps: d,
    label: x,
    labelId: b,
    MenuProps: C,
    multiple: y = !1,
    native: h = !1,
    onClose: S,
    onOpen: w,
    open: E,
    renderValue: k,
    SelectDisplayProps: R,
    variant: T = "outlined",
    ...A
  } = r, O = h ? oM : TM, [I] = ji({
    props: r,
    states: ["variant", "error"]
  }), g = I.variant || T, M = {
    ...r,
    variant: g,
    classes: s
  }, P = EM(M), {
    root: $,
    ...L
  } = P, N = v || {
    standard: /* @__PURE__ */ f.jsx(RM, {
      ownerState: M
    }),
    outlined: /* @__PURE__ */ f.jsx(PM, {
      label: x,
      ownerState: M
    }),
    filled: /* @__PURE__ */ f.jsx(IM, {
      ownerState: M
    })
  }[g], j = nt(n, eo(N));
  return /* @__PURE__ */ f.jsx(m.Fragment, {
    children: /* @__PURE__ */ m.cloneElement(N, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: O,
      inputProps: {
        children: i,
        error: I.error,
        IconComponent: u,
        variant: g,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: y,
        ...h ? {
          id: p
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
            id: p,
            ...R
          }
        },
        ...d,
        classes: d ? Lt(L, d.classes) : L,
        ...v ? v.props.inputProps : {}
      },
      ...(y && h || c) && g === "outlined" ? {
        notched: !0
      } : {},
      ref: j,
      className: J(N.props.className, l, P.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!v && {
        variant: g
      },
      ...A
    })
  });
});
ri.muiName = "Select";
function MM(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = er();
  m.useEffect(() => {
    if (!o)
      return;
    function y(h) {
      h.defaultPrevented || h.key === "Escape" && (r == null || r(h, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", y), () => {
      document.removeEventListener("keydown", y);
    };
  }, [o, r]);
  const l = Ze((y, h) => {
    r == null || r(y, h);
  }), a = Ze((y) => {
    !r || y == null || s.start(y, () => {
      l(null, "timeout");
    });
  });
  m.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const c = (y) => {
    r == null || r(y, "clickaway");
  }, u = s.clear, p = m.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), v = (y) => (h) => {
    const S = y.onBlur;
    S == null || S(h), p();
  }, d = (y) => (h) => {
    const S = y.onFocus;
    S == null || S(h), u();
  }, x = (y) => (h) => {
    const S = y.onMouseEnter;
    S == null || S(h), u();
  }, b = (y) => (h) => {
    const S = y.onMouseLeave;
    S == null || S(h), p();
  };
  return m.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", p), window.addEventListener("blur", u), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", u);
      };
  }, [n, o, p, u]), {
    getRootProps: (y = {}) => {
      const h = {
        ...Wa(e),
        ...Wa(y)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...y,
        ...h,
        onBlur: v(h),
        onFocus: d(h),
        onMouseEnter: x(h),
        onMouseLeave: b(h)
      };
    },
    onClickAway: c
  };
}
function $M(e) {
  return de("MuiSnackbarContent", e);
}
ce("MuiSnackbarContent", ["root", "message", "action"]);
const jM = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, $M, t);
}, AM = H(sr, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Vd(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Vd(e.palette.background.default, t),
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
})), OM = H("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), LM = H("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), NM = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, c = r, u = jM(c);
  return /* @__PURE__ */ f.jsxs(AM, {
    role: l,
    elevation: 6,
    className: J(u.root, i),
    ownerState: c,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ f.jsx(OM, {
      className: u.message,
      ownerState: c,
      children: s
    }), o ? /* @__PURE__ */ f.jsx(LM, {
      className: u.action,
      ownerState: c,
      children: o
    }) : null]
  });
});
function zM(e) {
  return de("MuiSnackbar", e);
}
ce("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const DM = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${ie(n.vertical)}${ie(n.horizontal)}`]
  };
  return fe(r, zM, t);
}, BM = H("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${ie(n.anchorOrigin.vertical)}${ie(n.anchorOrigin.horizontal)}`]];
  }
})(xe(({
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
}))), FM = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiSnackbar"
  }), o = ar(), i = {
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
    className: p,
    disableWindowBlurListener: v = !1,
    message: d,
    onBlur: x,
    onClose: b,
    onFocus: C,
    onMouseEnter: y,
    onMouseLeave: h,
    open: S,
    resumeHideDuration: w,
    slots: E = {},
    slotProps: k = {},
    transitionDuration: R = i,
    ...T
  } = r, A = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    },
    autoHideDuration: c,
    disableWindowBlurListener: v,
    transitionDuration: R
  }, O = DM(A), {
    getRootProps: I,
    onClickAway: g
  } = MM(A), [M, P] = m.useState(!0), $ = {
    slots: E,
    slotProps: k
  }, [L, N] = me("root", {
    ref: n,
    className: [O.root, p],
    elementType: BM,
    getSlotProps: I,
    externalForwardedProps: {
      ...$,
      ...T
    },
    ownerState: A
  }), [j, {
    ownerState: z,
    ...D
  }] = me("clickAwayListener", {
    elementType: YR,
    externalForwardedProps: $,
    getSlotProps: (q) => ({
      onClickAway: (...X) => {
        var U;
        const G = X[0];
        (U = q.onClickAway) == null || U.call(q, ...X), !(G != null && G.defaultMuiPrevented) && g(...X);
      }
    }),
    ownerState: A
  }), [W, _] = me("content", {
    elementType: NM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    additionalProps: {
      message: d,
      action: s
    },
    ownerState: A
  }), [Q, V] = me("transition", {
    elementType: Qs,
    externalForwardedProps: $,
    getSlotProps: (q) => ({
      onEnter: (...X) => {
        var G;
        (G = q.onEnter) == null || G.call(q, ...X), P(!1);
      },
      onExited: (...X) => {
        var G;
        (G = q.onExited) == null || G.call(q, ...X), P(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: S,
      timeout: R,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: A
  });
  return !S && M ? null : /* @__PURE__ */ f.jsx(j, {
    ...D,
    ...E.clickAwayListener && {
      ownerState: z
    },
    children: /* @__PURE__ */ f.jsx(L, {
      ...N,
      children: /* @__PURE__ */ f.jsx(Q, {
        ...V,
        children: u || /* @__PURE__ */ f.jsx(W, {
          ..._
        })
      })
    })
  });
});
function _M(e) {
  return de("MuiTooltip", e);
}
const Sn = ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function WM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const UM = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${ie(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return fe(s, _M, t);
}, HM = H(R1, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(xe(({
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
      [`&[data-popper-placement*="bottom"] .${Sn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Sn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Sn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Sn.arrow}`]: {
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
}))), VM = H("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ie(n.placement.split("-")[0])}`]];
  }
})(xe(({
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
  [`.${Sn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${Sn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${Sn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Sn.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${WM(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Sn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${Sn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${Sn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${Sn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), KM = H("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(xe(({
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
let Vl = !1;
const Ag = new eu();
let es = {
  x: 0,
  y: 0
};
function Kl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const fr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    disableTouchListener: p = !1,
    enterDelay: v = 100,
    enterNextDelay: d = 0,
    enterTouchDelay: x = 700,
    followCursor: b = !1,
    id: C,
    leaveDelay: y = 0,
    leaveTouchDelay: h = 1500,
    onClose: S,
    onOpen: w,
    open: E,
    placement: k = "bottom",
    slotProps: R = {},
    slots: T = {},
    title: A,
    ...O
  } = r, I = /* @__PURE__ */ m.isValidElement(i) ? i : /* @__PURE__ */ f.jsx("span", {
    children: i
  }), g = ar(), [M, P] = m.useState(), [$, L] = m.useState(null), N = m.useRef(!1), j = u || b, z = er(), D = er(), W = er(), _ = er(), [Q, V] = Zd({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let q = Q;
  const X = kr(C), G = m.useRef(), U = Ze(() => {
    G.current !== void 0 && (document.body.style.WebkitUserSelect = G.current, G.current = void 0), _.clear();
  });
  m.useEffect(() => U, [U]);
  const ne = (ee) => {
    Ag.clear(), Vl = !0, V(!0), w && !q && w(ee);
  }, se = Ze(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ee) => {
      Ag.start(800 + y, () => {
        Vl = !1;
      }), V(!1), S && q && S(ee), z.start(g.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), Te = (ee) => {
    M != null && M.disabled || N.current && ee.type !== "touchstart" || (M && M.removeAttribute("title"), D.clear(), W.clear(), v || Vl && d ? D.start(Vl ? d : v, () => {
      ne(ee);
    }) : ne(ee));
  }, Ee = (ee) => {
    D.clear(), W.start(y, () => {
      se(ee);
    });
  }, [, he] = m.useState(!1), ae = (ee) => {
    const ve = (ee == null ? void 0 : ee.target) ?? M;
    if (!ve || ve.disabled || !Ua(ve)) {
      he(!1);
      const ot = ee ?? new Event("blur");
      !ee && ve && (Object.defineProperty(ot, "target", {
        value: ve
      }), Object.defineProperty(ot, "currentTarget", {
        value: ve
      })), Ee(ot);
    }
  }, Ae = (ee) => {
    if (M || P(ee.currentTarget), Ua(ee.target)) {
      const ve = (ot) => {
        ot.target.disabled && ae(ot), ot.target.removeEventListener("blur", ve);
      };
      ee.target.addEventListener("blur", ve), he(!0), Te(ee);
    }
  }, ze = (ee) => {
    N.current = !0;
    const ve = I.props;
    ve.onTouchStart && ve.onTouchStart(ee);
  }, Pe = (ee) => {
    ze(ee), W.clear(), z.clear(), U(), G.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", _.start(x, () => {
      document.body.style.WebkitUserSelect = G.current, Te(ee);
    });
  }, Le = (ee) => {
    I.props.onTouchEnd && I.props.onTouchEnd(ee), U(), W.start(h, () => {
      se(ee);
    });
  };
  m.useEffect(() => {
    if (!q)
      return;
    function ee(ve) {
      ve.key === "Escape" && se(ve);
    }
    return document.addEventListener("keydown", ee), () => {
      document.removeEventListener("keydown", ee);
    };
  }, [se, q]);
  const ue = nt(eo(I), P, n);
  !A && A !== 0 && (q = !1);
  const Oe = m.useRef(), Se = (ee) => {
    const ve = I.props;
    ve.onMouseMove && ve.onMouseMove(ee), es = {
      x: ee.clientX,
      y: ee.clientY
    }, Oe.current && Oe.current.update();
  }, ge = {}, Ie = typeof A == "string";
  l ? (ge.title = !q && Ie && !c ? A : null, ge["aria-describedby"] = q ? X : null) : (ge["aria-label"] = Ie ? A : null, ge["aria-labelledby"] = q && !Ie ? X : null);
  const De = {
    ...ge,
    ...O,
    ...I.props,
    className: J(O.className, I.props.className),
    onTouchStart: ze,
    ref: ue,
    ...b ? {
      onMouseMove: Se
    } : {}
  }, rt = {};
  p || (De.onTouchStart = Pe, De.onTouchEnd = Le), c || (De.onMouseOver = Kl(Te, De.onMouseOver), De.onMouseLeave = Kl(Ee, De.onMouseLeave), j || (rt.onMouseOver = Te, rt.onMouseLeave = Ee)), a || (De.onFocus = Kl(Ae, De.onFocus), De.onBlur = Kl(ae, De.onBlur), j || (rt.onFocus = Ae, rt.onBlur = ae));
  const We = {
    ...r,
    arrow: o,
    disableInteractive: j,
    placement: k,
    touch: N.current
  }, Ce = typeof R.popper == "function" ? R.popper(We) : R.popper, He = m.useMemo(() => {
    var ve;
    let ee = [{
      name: "arrow",
      enabled: !!$,
      options: {
        element: $,
        padding: 4
      }
    }];
    return (ve = Ce == null ? void 0 : Ce.popperOptions) != null && ve.modifiers && (ee = ee.concat(Ce.popperOptions.modifiers)), {
      ...Ce == null ? void 0 : Ce.popperOptions,
      modifiers: ee
    };
  }, [$, Ce == null ? void 0 : Ce.popperOptions]), gt = UM(We), oe = {
    slots: T,
    slotProps: {
      arrow: R.arrow,
      popper: Ce,
      tooltip: R.tooltip,
      transition: R.transition
    }
  }, [be, Be] = me("popper", {
    elementType: HM,
    externalForwardedProps: oe,
    ownerState: We,
    className: gt.popper
  }), [lt, ke] = me("transition", {
    elementType: Qs,
    externalForwardedProps: oe,
    ownerState: We
  }), [An, vn] = me("tooltip", {
    elementType: VM,
    className: gt.tooltip,
    externalForwardedProps: oe,
    ownerState: We
  }), [B, we] = me("arrow", {
    elementType: KM,
    className: gt.arrow,
    externalForwardedProps: oe,
    ownerState: We,
    ref: L
  });
  return /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ m.cloneElement(I, De), /* @__PURE__ */ f.jsx(be, {
      as: R1,
      placement: k,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: es.y,
          left: es.x,
          right: es.x,
          bottom: es.y,
          width: 0,
          height: 0
        })
      } : M,
      popperRef: Oe,
      open: M ? q : !1,
      id: X,
      transition: !0,
      ...rt,
      ...Be,
      popperOptions: He,
      children: ({
        TransitionProps: ee
      }) => /* @__PURE__ */ f.jsx(lt, {
        timeout: g.transitions.duration.shorter,
        ...ee,
        ...ke,
        children: /* @__PURE__ */ f.jsxs(An, {
          ...vn,
          children: [A, o ? /* @__PURE__ */ f.jsx(B, {
            ...we
          }) : null]
        })
      })
    })]
  });
}), ct = A2({
  createStyledComponent: H("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => pe({
    props: e,
    name: "MuiStack"
  })
});
function YM(e) {
  return de("MuiTab", e);
}
const Nn = ce("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), GM = (e) => {
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
    root: ["root", i && s && "labelIcon", `textColor${ie(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return fe(c, YM, t);
}, XM = H(Po, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${ie(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${Nn.icon}`]: t.icon
    }];
  }
})(xe(({
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
      [`& > .${Nn.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${Nn.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${Nn.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${Nn.icon}`]: {
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
      [`&.${Nn.selected}`]: {
        opacity: 1
      },
      [`&.${Nn.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Nn.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${Nn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Nn.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${Nn.disabled}`]: {
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
}))), ts = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    label: p,
    onChange: v,
    onClick: d,
    onFocus: x,
    // eslint-disable-next-line react/prop-types
    selected: b,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: y = "inherit",
    value: h,
    wrapped: S = !1,
    ...w
  } = r, E = z1(), k = B1({
    id: h,
    ref: n,
    disabled: i,
    selected: b
  }), T = E.getItemMap().size === 0 && b ? 0 : k.tabIndex, A = {
    ...r,
    disabled: i,
    disableFocusRipple: s,
    selected: b,
    icon: !!a,
    iconPosition: c,
    label: !!p,
    fullWidth: l,
    textColor: y,
    wrapped: S
  }, O = GM(A), I = a && p && /* @__PURE__ */ m.isValidElement(a) ? /* @__PURE__ */ m.cloneElement(a, {
    className: J(O.icon, a.props.className)
  }) : a, g = (P) => {
    !b && v && v(P, h), d && d(P);
  }, M = (P) => {
    C && !b && v && v(P, h), x && x(P);
  };
  return /* @__PURE__ */ f.jsxs(XM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: J(O.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": b,
    disabled: i,
    onClick: g,
    onFocus: M,
    tabIndex: T,
    ownerState: A,
    ...w,
    children: [c === "top" || c === "start" ? /* @__PURE__ */ f.jsxs(m.Fragment, {
      children: [I, p]
    }) : /* @__PURE__ */ f.jsxs(m.Fragment, {
      children: [p, I]
    }), u]
  });
}), ex = /* @__PURE__ */ m.createContext();
function QM(e) {
  return de("MuiTable", e);
}
ce("MuiTable", ["root", "stickyHeader"]);
const qM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return fe({
    root: ["root", n && "stickyHeader"]
  }, QM, t);
}, ZM = H("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.stickyHeader && t.stickyHeader];
  }
})(xe(({
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
}))), Og = "table", Lg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = Og,
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
  }, p = qM(u), v = m.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ f.jsx(ex.Provider, {
    value: v,
    children: /* @__PURE__ */ f.jsx(ZM, {
      as: i,
      role: i === Og ? null : "table",
      ref: n,
      className: J(p.root, o),
      ownerState: u,
      ...c
    })
  });
}), nu = /* @__PURE__ */ m.createContext();
function JM(e) {
  return de("MuiTableBody", e);
}
ce("MuiTableBody", ["root"]);
const e5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, JM, t);
}, t5 = H("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), n5 = {
  variant: "body"
}, Ng = "tbody", zg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Ng,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = e5(l);
  return /* @__PURE__ */ f.jsx(nu.Provider, {
    value: n5,
    children: /* @__PURE__ */ f.jsx(t5, {
      className: J(a.root, o),
      as: i,
      ref: n,
      role: i === Ng ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function r5(e) {
  return de("MuiTableCell", e);
}
const o5 = ce("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), i5 = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: o,
    size: i,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${ie(r)}`, o !== "normal" && `padding${ie(o)}`, `size${ie(i)}`]
  };
  return fe(l, r5, t);
}, s5 = H("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ie(n.size)}`], n.padding !== "normal" && t[`padding${ie(n.padding)}`], n.align !== "inherit" && t[`align${ie(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(xe(({
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
      [`&.${o5.paddingCheckbox}`]: {
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
}))), $t = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    variant: p,
    ...v
  } = r, d = m.useContext(ex), x = m.useContext(nu), b = x && x.variant === "head";
  let C;
  s ? C = s : C = b ? "th" : "td";
  let y = a;
  C === "td" ? y = void 0 : !y && b && (y = "col");
  const h = p || x && x.variant, S = {
    ...r,
    align: o,
    component: C,
    padding: l || (d && d.padding ? d.padding : "normal"),
    size: c || (d && d.size ? d.size : "medium"),
    sortDirection: u,
    stickyHeader: h === "head" && d && d.stickyHeader,
    variant: h
  }, w = i5(S);
  let E = null;
  return u && (E = u === "asc" ? "ascending" : "descending"), /* @__PURE__ */ f.jsx(s5, {
    as: C,
    ref: n,
    className: J(w.root, i),
    "aria-sort": E,
    scope: y,
    ownerState: S,
    ...v
  });
});
function l5(e) {
  return de("MuiTableContainer", e);
}
ce("MuiTableContainer", ["root"]);
const a5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, l5, t);
}, c5 = H("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), u5 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTableContainer"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = a5(l);
  return /* @__PURE__ */ f.jsx(c5, {
    ref: n,
    as: i,
    className: J(a.root, o),
    ownerState: l,
    ...s
  });
});
function d5(e) {
  return de("MuiTableHead", e);
}
ce("MuiTableHead", ["root"]);
const f5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, d5, t);
}, p5 = H("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), m5 = {
  variant: "head"
}, Dg = "thead", Bg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Dg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = f5(l);
  return /* @__PURE__ */ f.jsx(nu.Provider, {
    value: m5,
    children: /* @__PURE__ */ f.jsx(p5, {
      as: i,
      className: J(a.root, o),
      ref: n,
      role: i === Dg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), h5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), g5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function y5(e) {
  return de("MuiTableRow", e);
}
const Fg = ce("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), v5 = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return fe({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, y5, t);
}, x5 = H("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.head && t.head, n.footer && t.footer];
  }
})(xe(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${Fg.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Fg.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), _g = "tr", ns = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = _g,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, c = m.useContext(nu), u = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: c && c.variant === "head",
    footer: c && c.variant === "footer"
  }, p = v5(u);
  return /* @__PURE__ */ f.jsx(x5, {
    as: i,
    ref: n,
    className: J(p.root, o),
    role: i === _g ? null : "row",
    ownerState: u,
    ...a
  });
});
function S5(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function b5(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = S5,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let c = !1;
  const u = () => {
    c = !0;
  }, p = (v) => {
    if (c) {
      o(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = v);
    const d = Math.min(1, (v - l) / s);
    if (t[e] = i(d) * (n - a) + a, d >= 1) {
      requestAnimationFrame(() => {
        o(null);
      });
      return;
    }
    requestAnimationFrame(p);
  };
  return a === n ? (o(new Error("Element already at target position")), u) : (requestAnimationFrame(p), u);
}
const w5 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function C5(e) {
  const {
    onChange: t,
    ...n
  } = e, r = m.useRef(), o = m.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return ft(() => {
    const s = al(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = pn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), m.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ f.jsx("div", {
    style: w5,
    ...n,
    ref: o
  });
}
function k5(e) {
  return de("MuiTabScrollButton", e);
}
const T5 = ce("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), E5 = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return fe({
    root: ["root", n, r && "disabled"]
  }, k5, t);
}, R5 = H(Po, {
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
  [`&.${T5.disabled}`]: {
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
}), P5 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    nativeButton: p,
    ...v
  } = u, d = ll(), x = {
    isRtl: d,
    ...r
  }, b = E5(x), C = i.StartScrollButtonIcon ?? h5, y = i.EndScrollButtonIcon ?? g5, h = Ri({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  }), S = Ri({
    elementType: y,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  });
  return /* @__PURE__ */ f.jsx(R5, {
    component: "div",
    className: J(b.root, o),
    ref: n,
    role: null,
    ownerState: x,
    tabIndex: null,
    ...v,
    style: {
      ...v.style,
      ...a === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${d ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ f.jsx(C, {
      ...h
    }) : /* @__PURE__ */ f.jsx(y, {
      ...S
    })
  });
});
function I5(e) {
  return de("MuiTabs", e);
}
const Uu = ce("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), M5 = (e) => {
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
  return fe({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", i && "scrollableY"],
    list: ["list", t && "vertical", s && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [o && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, I5, a);
}, $5 = H("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Uu.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Uu.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(xe(({
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
      [`& .${Uu.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), j5 = H("div", {
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
}), A5 = H("div", {
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
}), O5 = H("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(xe(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  ...xt(e),
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
}))), L5 = H(C5)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Wg = {}, N5 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTabs"
  }), o = ar(), i = ll(), s = ul(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: c,
    centered: u = !1,
    children: p,
    className: v,
    component: d = "div",
    allowScrollButtonsMobile: x = !1,
    indicatorColor: b = "primary",
    onChange: C,
    orientation: y = "horizontal",
    scrollButtons: h = "auto",
    selectionFollowsFocus: S,
    slots: w = {},
    slotProps: E = {},
    textColor: k = "primary",
    value: R,
    variant: T = "standard",
    visibleScrollbar: A = !1,
    ...O
  } = r, I = T === "scrollable", g = y === "vertical", M = g ? "scrollTop" : "scrollLeft", P = g ? "top" : "left", $ = g ? "bottom" : "right", L = g ? "clientHeight" : "clientWidth", N = g ? "height" : "width", j = {
    ...r,
    component: d,
    allowScrollButtonsMobile: x,
    indicatorColor: b,
    orientation: y,
    vertical: g,
    scrollButtons: h,
    textColor: k,
    variant: T,
    visibleScrollbar: A,
    fixed: !I,
    hideScrollbar: I && !A,
    scrollableX: I && !g,
    scrollableY: I && g,
    centered: u && !I,
    scrollButtonsHideMobile: !x
  }, z = M5(j), D = Ri({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: j
  }), W = Ri({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: j
  }), [_, Q] = m.useState(!1), [V, q] = m.useState(Wg), [X, G] = m.useState(!1), [U, ne] = m.useState(!1), [se, Te] = m.useState(!1), Ee = R === !1 ? null : R, [he, ae] = m.useState(!1), [Ae, ze] = m.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Pe = /* @__PURE__ */ new Map(), Le = m.useRef(null), ue = m.useRef(null), Oe = {
    slots: w,
    slotProps: E
  }, Se = () => {
    const re = Le.current;
    let Z;
    if (re) {
      const Re = re.getBoundingClientRect();
      Z = {
        clientWidth: re.clientWidth,
        scrollLeft: re.scrollLeft,
        scrollTop: re.scrollTop,
        scrollWidth: re.scrollWidth,
        top: Re.top,
        bottom: Re.bottom,
        left: Re.left,
        right: Re.right
      };
    }
    let ye;
    if (re && R !== !1) {
      const Re = ue.current.children;
      if (Re.length > 0) {
        const yt = Re[Pe.get(R)];
        ye = yt ? yt.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: Z,
      tabMeta: ye
    };
  }, ge = Ze(() => {
    const {
      tabsMeta: re,
      tabMeta: Z
    } = Se();
    let ye = 0, Re;
    g ? (Re = "top", Z && re && (ye = Z.top - re.top + re.scrollTop)) : (Re = i ? "right" : "left", Z && re && (ye = (i ? -1 : 1) * (Z[Re] - re[Re] + re.scrollLeft)));
    const yt = {
      [Re]: ye,
      // May be wrong until the font is loaded.
      [N]: Z ? Z[N] : 0
    };
    if (typeof V[Re] != "number" || typeof V[N] != "number")
      q(yt);
    else {
      const cr = Math.abs(V[Re] - yt[Re]), Hn = Math.abs(V[N] - yt[N]);
      (cr >= 1 || Hn >= 1) && q(yt);
    }
  }), Ie = (re, {
    animation: Z = !0
  } = {}) => {
    Z && !s.shouldReduceMotion ? b5(M, Le.current, re, {
      duration: o.transitions.duration.standard
    }) : Le.current[M] = re;
  }, De = (re) => {
    let Z = Le.current[M];
    g ? Z += re : Z += re * (i ? -1 : 1), Ie(Z);
  }, rt = () => {
    const re = Le.current[L];
    let Z = 0;
    const ye = Array.from(ue.current.children);
    for (let Re = 0; Re < ye.length; Re += 1) {
      const yt = ye[Re];
      if (Z + yt[L] > re) {
        Re === 0 && (Z = re);
        break;
      }
      Z += yt[L];
    }
    return Z;
  }, We = () => {
    De(-1 * rt());
  }, Ce = () => {
    De(rt());
  }, [He, {
    onChange: gt,
    ...oe
  }] = me("scrollbar", {
    className: J(z.scrollableX, z.hideScrollbar),
    elementType: L5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Oe,
    ownerState: j
  }), be = m.useCallback((re) => {
    gt == null || gt(re), ze({
      overflow: null,
      scrollbarWidth: re
    });
  }, [gt]), [Be, lt] = me("scrollButtons", {
    className: z.scrollButtons,
    elementType: P5,
    externalForwardedProps: Oe,
    ownerState: j,
    additionalProps: {
      orientation: y,
      slots: {
        StartScrollButtonIcon: w.startScrollButtonIcon,
        EndScrollButtonIcon: w.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: D,
        endScrollButtonIcon: W
      }
    }
  }), ke = () => {
    const re = {};
    re.scrollbarSizeListener = I ? /* @__PURE__ */ f.jsx(He, {
      ...oe,
      onChange: be
    }) : null;
    const ye = I && (h === "auto" && (X || U) || h === !0);
    return re.scrollButtonStart = ye ? /* @__PURE__ */ f.jsx(Be, {
      direction: i ? "right" : "left",
      onClick: We,
      disabled: !X,
      ...lt
    }) : null, re.scrollButtonEnd = ye ? /* @__PURE__ */ f.jsx(Be, {
      direction: i ? "left" : "right",
      onClick: Ce,
      disabled: !U,
      ...lt
    }) : null, re;
  }, An = Ze((re) => {
    const {
      tabsMeta: Z,
      tabMeta: ye
    } = Se();
    if (!(!ye || !Z)) {
      if (ye[P] < Z[P]) {
        const Re = Z[M] + (ye[P] - Z[P]);
        Ie(Re, {
          animation: re
        });
      } else if (ye[$] > Z[$]) {
        const Re = Z[M] + (ye[$] - Z[$]);
        Ie(Re, {
          animation: re
        });
      }
    }
  }), vn = Ze(() => {
    I && h !== !1 && Te(!se);
  });
  m.useEffect(() => {
    const re = al(() => {
      Le.current && ge();
    });
    let Z;
    const ye = (cr) => {
      cr.forEach((Hn) => {
        Hn.removedNodes.forEach((to) => {
          Z == null || Z.unobserve(to);
        }), Hn.addedNodes.forEach((to) => {
          Z == null || Z.observe(to);
        });
      }), re(), vn();
    }, Re = pn(Le.current);
    Re.addEventListener("resize", re);
    let yt;
    return typeof ResizeObserver < "u" && (Z = new ResizeObserver(re), Array.from(ue.current.children).forEach((cr) => {
      Z.observe(cr);
    })), typeof MutationObserver < "u" && (yt = new MutationObserver(ye), yt.observe(ue.current, {
      childList: !0
    })), () => {
      re.clear(), Re.removeEventListener("resize", re), yt == null || yt.disconnect(), Z == null || Z.disconnect();
    };
  }, [ge, vn]), m.useEffect(() => {
    const re = Array.from(ue.current.children), Z = re.length;
    if (typeof IntersectionObserver < "u" && Z > 0 && I && h !== !1) {
      const ye = re[0], Re = re[Z - 1], yt = {
        root: Le.current,
        threshold: 0.99
      }, cr = (Lo) => {
        G(!Lo[0].isIntersecting);
      }, Hn = new IntersectionObserver(cr, yt);
      Hn.observe(ye);
      const to = (Lo) => {
        ne(!Lo[0].isIntersecting);
      }, Ni = new IntersectionObserver(to, yt);
      return Ni.observe(Re), () => {
        Hn.disconnect(), Ni.disconnect();
      };
    }
  }, [I, h, se, p == null ? void 0 : p.length]), m.useEffect(() => {
    Q(!0);
  }, []), m.useEffect(() => {
    ge();
  }), m.useEffect(() => {
    An(Wg !== V);
  }, [An, V]), m.useImperativeHandle(c, () => ({
    updateIndicator: ge,
    updateScrollButtons: vn
  }), [ge, vn]);
  const [B, we] = me("indicator", {
    className: z.indicator,
    elementType: O5,
    externalForwardedProps: Oe,
    ownerState: j,
    additionalProps: {
      style: V
    }
  }), ee = /* @__PURE__ */ f.jsx(B, {
    ...we
  }), ve = D1({
    activeItemId: he ? void 0 : Ee,
    orientation: y,
    isRtl: i
  }), ot = ve.getContainerProps(), Ai = m.Children.toArray(p).filter(m.isValidElement).map((re, Z) => {
    const ye = re.props.value === void 0 ? Z : re.props.value;
    return Pe.set(ye, Z), {
      child: re,
      index: Z,
      childValue: ye
    };
  }).map(({
    child: re,
    childValue: Z
  }) => {
    const ye = Z === R;
    return /* @__PURE__ */ m.cloneElement(re, {
      fullWidth: T === "fullWidth",
      indicator: ye && !_ && ee,
      selected: ye,
      selectionFollowsFocus: S,
      onChange: C,
      textColor: k,
      value: Z
    });
  }), Oi = ke(), [Rr, ml] = me("root", {
    ref: n,
    className: J(z.root, v),
    elementType: $5,
    externalForwardedProps: {
      ...Oe,
      ...O,
      component: d
    },
    ownerState: j
  }), [jo, Ao] = me("scroller", {
    ref: Le,
    className: z.scroller,
    elementType: j5,
    externalForwardedProps: Oe,
    ownerState: j,
    additionalProps: {
      style: {
        overflow: Ae.overflow,
        [g ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: A ? void 0 : -Ae.scrollbarWidth
      }
    }
  }), Oo = nt(ot.ref, ue), ru = (re) => {
    const Z = ue.current, ye = Jn(ht(Z));
    (ye == null ? void 0 : ye.getAttribute("role")) === "tab" && ot.onKeyDown(re);
  }, [hl, Li] = me("list", {
    ref: Oo,
    className: z.list,
    elementType: A5,
    externalForwardedProps: Oe,
    ownerState: j,
    getSlotProps: (re) => ({
      ...re,
      onBlur: (Z) => {
        var ye;
        xo(Z.currentTarget, Z.relatedTarget) || ae(!1), (ye = re.onBlur) == null || ye.call(re, Z);
      },
      onKeyDown: (Z) => {
        var ye;
        ru(Z), (ye = re.onKeyDown) == null || ye.call(re, Z);
      },
      onFocus: (Z) => {
        var ye;
        ae(!0), ot.onFocus(Z), (ye = re.onFocus) == null || ye.call(re, Z);
      }
    })
  });
  return /* @__PURE__ */ f.jsxs(Rr, {
    ...ml,
    children: [Oi.scrollButtonStart, Oi.scrollbarSizeListener, /* @__PURE__ */ f.jsxs(jo, {
      ...Ao,
      children: [/* @__PURE__ */ f.jsx(hl, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": y === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Li,
        children: /* @__PURE__ */ f.jsx(_p.Provider, {
          value: ve,
          children: Ai
        })
      }), _ && ee]
    }), Oi.scrollButtonEnd]
  });
});
function z5(e) {
  return de("MuiTextField", e);
}
ce("MuiTextField", ["root"]);
const D5 = {
  standard: Fp,
  filled: Bp,
  outlined: Wp
}, B5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, z5, t);
}, F5 = H(ZP, {
  name: "MuiTextField",
  slot: "Root"
})({}), so = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    error: p = !1,
    fullWidth: v = !1,
    helperText: d,
    id: x,
    inputRef: b,
    label: C,
    maxRows: y,
    minRows: h,
    multiline: S = !1,
    name: w,
    onBlur: E,
    onChange: k,
    onFocus: R,
    placeholder: T,
    required: A = !1,
    rows: O,
    select: I = !1,
    slots: g = {},
    slotProps: M = {},
    type: P,
    value: $,
    variant: L = "outlined",
    ...N
  } = r, j = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: u,
    error: p,
    fullWidth: v,
    multiline: S,
    required: A,
    select: I,
    variant: L
  }, z = B5(j), D = kr(x), W = d && D ? `${D}-helper-text` : void 0, _ = C && D ? `${D}-label` : void 0, Q = D5[L], V = {
    slots: g,
    slotProps: M
  }, [q, X] = me("select", {
    elementType: ri,
    externalForwardedProps: V,
    ownerState: j
  }), G = I && X.native, U = {}, ne = V.slotProps.inputLabel;
  L === "outlined" && (ne && typeof ne.shrink < "u" && (U.notched = ne.shrink), U.label = C), I && (G || (U.id = void 0), U["aria-describedby"] = void 0);
  const [se, Te] = me("root", {
    elementType: F5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...V,
      ...N
    },
    ownerState: j,
    className: J(z.root, l),
    ref: n,
    additionalProps: {
      disabled: u,
      error: p,
      fullWidth: v,
      required: A,
      color: a,
      variant: L
    }
  }), [Ee, he] = me("input", {
    elementType: Q,
    externalForwardedProps: V,
    additionalProps: U,
    ownerState: j
  }), [ae, Ae] = me("inputLabel", {
    elementType: SI,
    externalForwardedProps: V,
    ownerState: j
  }), [ze, Pe] = me("htmlInput", {
    elementType: "input",
    externalForwardedProps: V,
    ownerState: j
  }), [Le, ue] = me("formHelperText", {
    elementType: tI,
    externalForwardedProps: V,
    ownerState: j
  }), Oe = /* @__PURE__ */ f.jsx(Ee, {
    "aria-describedby": W,
    autoComplete: o,
    autoFocus: i,
    defaultValue: c,
    fullWidth: v,
    multiline: S,
    name: w,
    rows: O,
    maxRows: y,
    minRows: h,
    type: P,
    value: $,
    id: D,
    inputRef: b,
    onBlur: E,
    onChange: k,
    onFocus: R,
    placeholder: T,
    inputProps: Pe,
    slots: {
      input: g.htmlInput ? ze : void 0
    },
    ...he
  });
  return /* @__PURE__ */ f.jsxs(se, {
    ...Te,
    children: [C != null && C !== "" && /* @__PURE__ */ f.jsx(ae, {
      htmlFor: I && !G ? void 0 : D,
      id: _,
      ...I && !G && {
        component: "div"
      },
      ...Ae,
      children: C
    }), I ? /* @__PURE__ */ f.jsx(q, {
      "aria-describedby": W,
      id: D,
      labelId: _,
      value: $,
      input: Oe,
      ...X,
      children: s
    }) : Oe, d && /* @__PURE__ */ f.jsx(Le, {
      id: W,
      ...ue,
      children: d
    })]
  });
}), Ug = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), Hu = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), _5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M8 5v14l11-7z"
})), W5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M6 6h12v12H6z"
})), U5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
})), H5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), V5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
})), K5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
})), Hg = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"
})), Y5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M15 9H9v6h6zm-2 4h-2v-2h2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2zm-4 6H7V7h10z"
})), Vg = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"
})), G5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), X5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), Kg = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
})), Q5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), q5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"
})), Yg = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), Xn = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', Ir = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function tx({
  children: e,
  sx: t
}) {
  return /* @__PURE__ */ f.jsx(
    $e,
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
function Vu({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ f.jsxs(sr, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ f.jsxs(
      ct,
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
          typeof e == "string" ? /* @__PURE__ */ f.jsx(tx, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ f.jsx(Ye, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function lo({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ f.jsxs(Ye, { sx: n, children: [
    /* @__PURE__ */ f.jsxs(
      ct,
      {
        direction: "row",
        spacing: 0.75,
        sx: { alignItems: "baseline", mb: 0.75 },
        children: [
          /* @__PURE__ */ f.jsx(
            $e,
            {
              component: "label",
              sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
              children: e
            }
          ),
          t && /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
        ]
      }
    ),
    r
  ] });
}
function ao({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ f.jsxs(Ye, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ f.jsx(tx, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ f.jsx(
      $e,
      {
        sx: {
          fontFamily: n ? Xn : void 0,
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
function Gg({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ f.jsx(
    Ye,
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
function Z5(e, t) {
  switch (t == null ? void 0 : t.kind) {
    case "log":
      return [
        ...e,
        { stream: t.stream ?? "stdout", text: t.line ?? "" }
      ];
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
function Xg({
  lines: e,
  running: t
}) {
  const n = m.useRef(null), r = m.useRef(null), o = m.useRef(!0);
  return m.useEffect(() => {
    const i = r.current;
    if (!i) return;
    const s = () => {
      o.current = i.scrollHeight - i.scrollTop - i.clientHeight < 40;
    };
    return i.addEventListener("scroll", s), () => i.removeEventListener("scroll", s);
  }, []), m.useEffect(() => {
    var i;
    o.current && ((i = n.current) == null || i.scrollIntoView({ block: "end" }));
  }, [e]), !e.length && !t ? /* @__PURE__ */ f.jsx(
    sr,
    {
      sx: {
        bgcolor: Ir.bg,
        borderRadius: "8px",
        px: 2,
        py: 3,
        textAlign: "center",
        fontFamily: Xn,
        fontSize: 12,
        color: Ir.dim
      },
      children: "No log output recorded yet."
    }
  ) : /* @__PURE__ */ f.jsxs(
    sr,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: Ir.bg,
        color: Ir.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "22rem",
        overflowY: "auto",
        fontFamily: Xn,
        fontSize: 12,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ f.jsx(
          Ye,
          {
            sx: {
              color: i.stream === "stderr" ? Ir.err : i.stream === "meta" ? Ir.dim : Ir.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ f.jsx(Ye, { sx: { color: Ir.dim }, children: "▍running…" }),
        /* @__PURE__ */ f.jsx("div", { ref: n })
      ]
    }
  );
}
function J5({ ctx: e }) {
  const t = m.useMemo(
    () => Gc(e.theme ?? {}),
    [e.theme]
  );
  return /* @__PURE__ */ f.jsx(Wk, { theme: t, children: /* @__PURE__ */ f.jsx(e$, { ctx: e }) });
}
function e$({ ctx: e }) {
  const [t, n] = m.useState(0), [r, o] = m.useState(!0), [i, s] = m.useState(null), [l, a] = m.useState([]), [c, u] = m.useState([]), [p, v] = m.useState(""), [d, x] = m.useState(""), [b, C] = m.useState("/opt/hostpanel/data/apps/"), [y, h] = m.useState("20"), [S, w] = m.useState("index.js"), [E, k] = m.useState("0"), [R, T] = m.useState(`NODE_ENV=production
PORT=31000
`), [A, O] = m.useState(!1), [I, g] = m.useState(!1), [M, P] = m.useState("22"), [$, L] = m.useState(!1), [N, j] = m.useState([]), [z, D] = m.useState(!1), [W, _] = m.useState(""), [Q, V] = m.useState(""), [q, X] = m.useState(!1), [G, U] = m.useState(""), [ne, se] = m.useState("all"), [Te] = m.useState(100), [Ee, he] = m.useState([]), [ae] = m.useState(!1), [Ae, ze] = m.useState(null), [Pe, Le] = m.useState(!1), [ue, Oe] = m.useState(null), Se = (B, we = "success") => {
    Oe({ message: B, severity: we });
  }, ge = m.useCallback(
    async (B, we) => {
      const ee = await e.api(B, we), ve = await ee.json().catch(() => ({}));
      if (!ee.ok)
        throw new Error(ve.message || ve.error || `HTTP ${ee.status}`);
      return ve;
    },
    [e]
  ), Ie = m.useCallback(async () => {
    var B, we;
    o(!0);
    try {
      const [ee, ve, ot] = await Promise.allSettled([
        ge("/status"),
        ge("/apps"),
        ge("/runtimes")
      ]);
      ee.status === "fulfilled" && ee.value && s(ee.value), ve.status === "fulfilled" && ((B = ve.value) != null && B.apps) && a(ve.value.apps), ot.status === "fulfilled" && ((we = ot.value) != null && we.runtimes) && u(ot.value.runtimes);
    } catch (ee) {
      Se(ee.message || "Failed to load Node.js service data", "error");
    } finally {
      o(!1);
    }
  }, [ge]);
  m.useEffect(() => {
    Ie();
  }, [Ie]), m.useEffect(() => {
    l.length > 0 && !G && U(l[0].name);
  }, [l, G]);
  const De = m.useCallback(
    async (B, we = 100, ee = "all") => {
      if (B)
        try {
          const ve = await ge(
            `/apps/${encodeURIComponent(B)}/logs?lines=${we}&type=${ee}`
          ), ot = ee === "out" ? ve.stdout : ee === "err" ? ve.stderr : ve.logs, pl = ot ? ot.split(`
`).map((Ai) => ({
            stream: ee === "err" ? "stderr" : "stdout",
            text: Ai
          })) : [];
          he(pl);
        } catch (ve) {
          console.error("Failed to load logs", ve);
        }
    },
    [ge]
  );
  m.useEffect(() => {
    t === 3 && G && De(G, Te, ne);
  }, [t, G, ne, Te, De]);
  const rt = async (B) => {
    try {
      await ge(`/apps/${encodeURIComponent(B)}/start`, { method: "POST" }), Se(`Application '${B}' started`, "success"), Ie();
    } catch (we) {
      Se(we.message || `Failed to start ${B}`, "error");
    }
  }, We = async (B) => {
    try {
      await ge(`/apps/${encodeURIComponent(B)}/stop`, { method: "POST" }), Se(`Application '${B}' stopped`, "info"), Ie();
    } catch (we) {
      Se(we.message || `Failed to stop ${B}`, "error");
    }
  }, Ce = async (B) => {
    try {
      await ge(`/apps/${encodeURIComponent(B)}/restart`, { method: "POST" }), Se(`Application '${B}' restarted`, "success"), Ie();
    } catch (we) {
      Se(we.message || `Failed to restart ${B}`, "error");
    }
  }, He = async () => {
    if (Ae) {
      Le(!0);
      try {
        await ge(`/apps/${encodeURIComponent(Ae)}`, {
          method: "DELETE"
        }), Se(`Application '${Ae}' deleted`, "success"), ze(null), Ie();
      } catch (B) {
        Se(B.message || `Failed to delete ${Ae}`, "error");
      } finally {
        Le(!1);
      }
    }
  }, gt = async (B) => {
    _(B), D(!0), V("");
    try {
      const we = await ge(`/apps/${encodeURIComponent(B)}/env`);
      V(we.env || "");
    } catch (we) {
      Se(we.message || "Failed to load environment variables", "error");
    }
  }, oe = async () => {
    if (W) {
      X(!0);
      try {
        await ge(`/apps/${encodeURIComponent(W)}/env`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ env: Q })
        }), Se(`Environment variables updated for '${W}'`, "success"), D(!1);
      } catch (B) {
        Se(B.message || "Failed to save environment variables", "error");
      } finally {
        X(!1);
      }
    }
  }, be = async (B) => {
    if (B.preventDefault(), !!d) {
      O(!0);
      try {
        const we = b.endsWith("/") ? `${b}${d}` : b, ee = await ge("/apps", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: d.trim().toLowerCase(),
            directory: we.trim(),
            node_version: y,
            script: S.trim() || "index.js",
            port: parseInt(E, 10) || 0
          })
        });
        R.trim() && await ge(`/apps/${encodeURIComponent(d)}/env`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ env: R })
        }).catch(() => {
        }), Se(
          `Application '${d}' deployed on port ${ee.port || "allocated"}!`,
          "success"
        ), x(""), n(0), Ie();
      } catch (we) {
        Se(we.message || "Failed to create application", "error");
      } finally {
        O(!1);
      }
    }
  }, Be = async () => {
    L(!0), j([]);
    try {
      if (e.run)
        for await (const B of e.run("/runtimes/install", {
          method: "POST",
          body: { version: M }
        }))
          j((we) => Z5(we, B));
      else
        await ge("/runtimes/install", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ version: M })
        });
      Se(`Node.js v${M} installed successfully!`, "success"), Ie();
    } catch (B) {
      Se(B.message || `Failed to install Node.js v${M}`, "error");
    } finally {
      L(!1);
    }
  }, lt = async (B) => {
    try {
      await ge(`/runtimes/${encodeURIComponent(B)}`, {
        method: "DELETE"
      }), Se(`Node.js v${B} removed`, "success"), Ie();
    } catch (we) {
      Se(we.message || `Failed to remove Node.js v${B}`, "error");
    }
  }, ke = l.filter(
    (B) => B.name.toLowerCase().includes(p.toLowerCase()) || B.directory.toLowerCase().includes(p.toLowerCase()) || String(B.port).includes(p)
  ), An = l.filter((B) => B.status === "running").length, vn = l.reduce(
    (B, we) => B + (parseFloat(String(we.memory_mb)) || 0),
    0
  );
  return /* @__PURE__ */ f.jsxs(Ye, { sx: { display: "flex", flexDirection: "column", gap: 2.5, pb: 4 }, children: [
    /* @__PURE__ */ f.jsxs(
      ct,
      {
        direction: "row",
        spacing: 2,
        sx: {
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ f.jsxs(Ye, { children: [
            /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ f.jsx($e, { sx: { fontWeight: 700, fontSize: "1.25rem" }, children: "Node.js Application Manager" }),
              /* @__PURE__ */ f.jsx(
                qi,
                {
                  size: "small",
                  icon: /* @__PURE__ */ f.jsx(Gg, { ok: !0, size: 8 }),
                  label: "Daemon Active",
                  variant: "outlined",
                  sx: { fontWeight: 600, fontSize: "0.75rem" }
                }
              )
            ] }),
            /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.8125rem", color: "text.secondary", mt: 0.25 }, children: "Process supervisor, isolated runtimes, reverse proxy port allocator (31000–31999)" })
          ] }),
          /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ f.jsx(fr, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              zn,
              {
                size: "small",
                onClick: Ie,
                disabled: r,
                sx: { border: "1px solid", borderColor: "divider" },
                children: r ? /* @__PURE__ */ f.jsx(ti, { size: 16, color: "inherit" }) : /* @__PURE__ */ f.jsx(Ug, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(fr, { title: "Install Node.js Runtime", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              zn,
              {
                size: "small",
                onClick: () => g(!0),
                sx: { border: "1px solid", borderColor: "divider" },
                children: /* @__PURE__ */ f.jsx(Vg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(
              Bt,
              {
                variant: "contained",
                color: "primary",
                size: "small",
                startIcon: /* @__PURE__ */ f.jsx(Hu, {}),
                onClick: () => n(1),
                sx: { ml: 1, whiteSpace: "nowrap" },
                children: "Deploy Application"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      Ye,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                Ye,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (B) => Nr(B.palette.primary.main, 0.1),
                    color: "primary.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(Q5, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(Ye, { children: [
                /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Node Daemon Status" }),
                /* @__PURE__ */ f.jsx($e, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: i ? "Active · Running" : "Active" })
              ] })
            ] }),
            /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: "Service: hostpanel-nodejsd • User: hp-nodejs" })
          ] }) }),
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                Ye,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (B) => Nr(B.palette.success.main, 0.1),
                    color: "success.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(Hg, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(Ye, { children: [
                /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Running Apps" }),
                /* @__PURE__ */ f.jsxs($e, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  An,
                  " / ",
                  l.length,
                  " Online"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ f.jsxs($e, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: [
              l.length - An,
              " stopped or paused"
            ] })
          ] }) }),
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                Ye,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (B) => Nr(B.palette.warning.main, 0.1),
                    color: "warning.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(q5, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(Ye, { children: [
                /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Runtime Versions" }),
                /* @__PURE__ */ f.jsxs($e, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  c.filter((B) => B.installed).length || 2,
                  " Installed"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: "Node 18, 20 LTS, 22 LTS, 24" })
          ] }) }),
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                Ye,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (B) => Nr(B.palette.secondary.main, 0.1),
                    color: "secondary.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(Y5, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(Ye, { children: [
                /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Total Memory / CPU" }),
                /* @__PURE__ */ f.jsxs($e, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  vn.toFixed(1),
                  " MB"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: "Reverse Proxy Pool: 31000–31999" })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(Vu, { padded: !1, children: [
      /* @__PURE__ */ f.jsx(Ye, { sx: { borderBottom: 1, borderColor: "divider", px: 2 }, children: /* @__PURE__ */ f.jsxs(N5, { value: t, onChange: (B, we) => n(we), children: [
        /* @__PURE__ */ f.jsx(ts, { label: `Applications (${l.length})` }),
        /* @__PURE__ */ f.jsx(ts, { label: "Deploy New App" }),
        /* @__PURE__ */ f.jsx(ts, { label: "Node Runtimes" }),
        /* @__PURE__ */ f.jsx(ts, { label: "Live Console Logs" }),
        /* @__PURE__ */ f.jsx(ts, { label: "Service & Isolation" })
      ] }) }),
      t === 0 && /* @__PURE__ */ f.jsxs(Ye, { sx: { p: 2 }, children: [
        /* @__PURE__ */ f.jsxs(
          ct,
          {
            direction: "row",
            spacing: 2,
            sx: { justifyContent: "space-between", alignItems: "center", mb: 2 },
            children: [
              /* @__PURE__ */ f.jsx(
                so,
                {
                  size: "small",
                  placeholder: "Search apps by name, path, or port...",
                  value: p,
                  onChange: (B) => v(B.target.value),
                  slotProps: {
                    input: {
                      startAdornment: /* @__PURE__ */ f.jsx(yI, { position: "start", children: /* @__PURE__ */ f.jsx(G5, { sx: { fontSize: 18, color: "text.disabled" } }) })
                    }
                  },
                  sx: { width: 340 }
                }
              ),
              /* @__PURE__ */ f.jsx(
                Bt,
                {
                  variant: "contained",
                  size: "small",
                  startIcon: /* @__PURE__ */ f.jsx(Hu, {}),
                  onClick: () => n(1),
                  children: "Deploy Application"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ f.jsx(u5, { children: /* @__PURE__ */ f.jsxs(Lg, { size: "medium", children: [
          /* @__PURE__ */ f.jsx(Bg, { children: /* @__PURE__ */ f.jsxs(ns, { children: [
            /* @__PURE__ */ f.jsx($t, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "App Name & Path" }),
            /* @__PURE__ */ f.jsx($t, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Status" }),
            /* @__PURE__ */ f.jsx($t, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Runtime" }),
            /* @__PURE__ */ f.jsx($t, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Assigned Port" }),
            /* @__PURE__ */ f.jsx($t, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Memory / CPU" }),
            /* @__PURE__ */ f.jsx($t, { align: "right", sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ f.jsx(zg, { children: ke.length === 0 ? /* @__PURE__ */ f.jsx(ns, { children: /* @__PURE__ */ f.jsxs($t, { colSpan: 6, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ f.jsx(Hg, { sx: { fontSize: 40, color: "text.disabled", mb: 1 } }),
            /* @__PURE__ */ f.jsx($e, { sx: { fontWeight: 600, color: "text.secondary" }, children: "No Node.js Applications Deployed" }),
            /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.8125rem", color: "text.disabled", mb: 2 }, children: "Deploy an Express, Next.js, Fastify, or custom Node.js application to get started." }),
            /* @__PURE__ */ f.jsx(Bt, { variant: "outlined", size: "small", onClick: () => n(1), children: "Deploy First App" })
          ] }) }) : ke.map((B) => /* @__PURE__ */ f.jsxs(ns, { hover: !0, children: [
            /* @__PURE__ */ f.jsxs($t, { children: [
              /* @__PURE__ */ f.jsx($e, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: B.name }),
              /* @__PURE__ */ f.jsxs(
                $e,
                {
                  sx: {
                    fontFamily: Xn,
                    fontSize: "0.75rem",
                    color: "text.disabled"
                  },
                  children: [
                    B.directory,
                    "/",
                    B.script
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ f.jsx($t, { children: /* @__PURE__ */ f.jsx(
              qi,
              {
                size: "small",
                icon: /* @__PURE__ */ f.jsx(Gg, { ok: B.status === "running", size: 7 }),
                label: B.status === "running" ? `Running (PID ${B.pid})` : "Stopped",
                color: B.status === "running" ? "success" : "default",
                variant: "outlined",
                sx: { fontWeight: 500 }
              }
            ) }),
            /* @__PURE__ */ f.jsx($t, { children: /* @__PURE__ */ f.jsx(
              qi,
              {
                size: "small",
                label: `Node ${B.node_version}`,
                variant: "outlined",
                sx: { fontFamily: Xn, fontSize: "0.75rem" }
              }
            ) }),
            /* @__PURE__ */ f.jsx($t, { children: /* @__PURE__ */ f.jsx(fr, { title: "Copy local reverse proxy address", children: /* @__PURE__ */ f.jsx(
              qi,
              {
                size: "small",
                label: `http://127.0.0.1:${B.port}`,
                onClick: () => {
                  navigator.clipboard.writeText(`http://127.0.0.1:${B.port}`), Se(`Copied http://127.0.0.1:${B.port}`, "info");
                },
                icon: /* @__PURE__ */ f.jsx(X5, { sx: { fontSize: "13px !important" } }),
                sx: {
                  fontFamily: Xn,
                  fontSize: "0.75rem",
                  cursor: "pointer"
                }
              }
            ) }) }),
            /* @__PURE__ */ f.jsx($t, { sx: { fontFamily: Xn, fontSize: "0.8125rem", color: "text.secondary" }, children: B.status === "running" ? `${B.memory_mb} MB • ${B.cpu_pct}%` : "—" }),
            /* @__PURE__ */ f.jsx($t, { align: "right", children: /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              B.status === "running" ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                /* @__PURE__ */ f.jsx(fr, { title: "Restart Application", children: /* @__PURE__ */ f.jsx(zn, { size: "small", onClick: () => Ce(B.name), children: /* @__PURE__ */ f.jsx(U5, { sx: { fontSize: 18 } }) }) }),
                /* @__PURE__ */ f.jsx(fr, { title: "Stop Application", children: /* @__PURE__ */ f.jsx(zn, { size: "small", color: "warning", onClick: () => We(B.name), children: /* @__PURE__ */ f.jsx(W5, { sx: { fontSize: 18 } }) }) })
              ] }) : /* @__PURE__ */ f.jsx(fr, { title: "Start Application", children: /* @__PURE__ */ f.jsx(zn, { size: "small", color: "success", onClick: () => rt(B.name), children: /* @__PURE__ */ f.jsx(_5, { sx: { fontSize: 18 } }) }) }),
              /* @__PURE__ */ f.jsx(fr, { title: "Environment Variables", children: /* @__PURE__ */ f.jsx(zn, { size: "small", onClick: () => gt(B.name), children: /* @__PURE__ */ f.jsx(K5, { sx: { fontSize: 18 } }) }) }),
              /* @__PURE__ */ f.jsx(fr, { title: "View Logs", children: /* @__PURE__ */ f.jsx(
                zn,
                {
                  size: "small",
                  onClick: () => {
                    U(B.name), n(3);
                  },
                  children: /* @__PURE__ */ f.jsx(V5, { sx: { fontSize: 18 } })
                }
              ) }),
              /* @__PURE__ */ f.jsx(fr, { title: "Delete Application", children: /* @__PURE__ */ f.jsx(
                zn,
                {
                  size: "small",
                  color: "error",
                  onClick: () => ze(B.name),
                  children: /* @__PURE__ */ f.jsx(H5, { sx: { fontSize: 18 } })
                }
              ) })
            ] }) })
          ] }, B.name)) })
        ] }) })
      ] }),
      t === 1 && /* @__PURE__ */ f.jsxs(Ye, { sx: { p: 3, maxWidth: 720 }, children: [
        /* @__PURE__ */ f.jsx($e, { sx: { fontWeight: 700, fontSize: "1.125rem", mb: 0.5 }, children: "Deploy Node.js Application" }),
        /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 3 }, children: "Configure application parameters, runtime version, entrypoint, and isolated reverse proxy port." }),
        /* @__PURE__ */ f.jsxs(Ye, { component: "form", onSubmit: be, sx: { display: "flex", flexDirection: "column", gap: 2.5 }, children: [
          /* @__PURE__ */ f.jsx(lo, { label: "Application Name", hint: "Unique identifier, e.g. 'my-app' or 'api-service'", children: /* @__PURE__ */ f.jsx(
            so,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "e.g. backend-api",
              value: d,
              onChange: (B) => {
                const we = B.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, "");
                x(we), b.startsWith("/opt/hostpanel/data/apps/") && C(`/opt/hostpanel/data/apps/${we}`);
              },
              required: !0
            }
          ) }),
          /* @__PURE__ */ f.jsx(lo, { label: "Application Directory", hint: "Root path containing package.json and entrypoint", children: /* @__PURE__ */ f.jsx(
            so,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "/opt/hostpanel/data/apps/my-app",
              value: b,
              onChange: (B) => C(B.target.value),
              required: !0
            }
          ) }),
          /* @__PURE__ */ f.jsxs(ct, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
            /* @__PURE__ */ f.jsx(lo, { label: "Node.js Version", hint: "Installed runtime", sx: { flex: 1 }, children: /* @__PURE__ */ f.jsxs(
              ri,
              {
                fullWidth: !0,
                size: "small",
                value: y,
                onChange: (B) => h(B.target.value),
                children: [
                  /* @__PURE__ */ f.jsx(xn, { value: "18", children: "Node.js 18 LTS (Hydrogen)" }),
                  /* @__PURE__ */ f.jsx(xn, { value: "20", children: "Node.js 20 LTS (Iron - Recommended)" }),
                  /* @__PURE__ */ f.jsx(xn, { value: "22", children: "Node.js 22 LTS (Jod)" }),
                  /* @__PURE__ */ f.jsx(xn, { value: "24", children: "Node.js 24 (Current)" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.jsx(lo, { label: "Start Script / Entrypoint", hint: "e.g. index.js or dist/server.js", sx: { flex: 1 }, children: /* @__PURE__ */ f.jsx(
              so,
              {
                fullWidth: !0,
                size: "small",
                placeholder: "index.js",
                value: S,
                onChange: (B) => w(B.target.value),
                required: !0
              }
            ) })
          ] }),
          /* @__PURE__ */ f.jsx(lo, { label: "Port Assignment (31000–31999)", hint: "Set to 0 for automatic port allocation", children: /* @__PURE__ */ f.jsx(
            so,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "0 (Auto-allocate next free port in 31000-31999)",
              value: E,
              onChange: (B) => k(B.target.value)
            }
          ) }),
          /* @__PURE__ */ f.jsx(lo, { label: "Environment Variables", hint: "KEY=VALUE format, one per line", children: /* @__PURE__ */ f.jsx(
            so,
            {
              fullWidth: !0,
              multiline: !0,
              rows: 4,
              size: "small",
              value: R,
              onChange: (B) => T(B.target.value),
              slotProps: {
                input: {
                  sx: { fontFamily: Xn, fontSize: "0.8125rem" }
                }
              }
            }
          ) }),
          /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 1.5, sx: { mt: 1 }, children: [
            /* @__PURE__ */ f.jsx(
              Bt,
              {
                type: "submit",
                variant: "contained",
                color: "primary",
                disabled: A || !d,
                startIcon: A ? /* @__PURE__ */ f.jsx(ti, { size: 16 }) : /* @__PURE__ */ f.jsx(Kg, {}),
                children: A ? "Deploying Application…" : "Deploy Application"
              }
            ),
            /* @__PURE__ */ f.jsx(Bt, { variant: "outlined", onClick: () => n(0), children: "Cancel" })
          ] })
        ] })
      ] }),
      t === 2 && /* @__PURE__ */ f.jsxs(Ye, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2.5 }, children: [
          /* @__PURE__ */ f.jsxs(Ye, { children: [
            /* @__PURE__ */ f.jsx($e, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: "Node.js Runtimes Manager" }),
            /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: "Isolated standalone binaries under /opt/hostpanel/runtimes/node/" })
          ] }),
          /* @__PURE__ */ f.jsx(
            Bt,
            {
              variant: "contained",
              size: "small",
              startIcon: /* @__PURE__ */ f.jsx(Hu, {}),
              onClick: () => g(!0),
              children: "Install New Version"
            }
          )
        ] }),
        /* @__PURE__ */ f.jsx(Ye, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }, children: [
          { major: "18", title: "Node.js 18 LTS (Hydrogen)", status: "Active LTS", desc: "Stable for legacy frameworks and LTS maintenance" },
          { major: "20", title: "Node.js 20 LTS (Iron)", status: "Recommended LTS", desc: "Default runtime for HostPanel applications" },
          { major: "22", title: "Node.js 22 LTS (Jod)", status: "Latest LTS", desc: "Modern V8 engine with native WebSocket & fetch" },
          { major: "24", title: "Node.js 24 (Current)", status: "Current", desc: "Cutting edge features and latest ECMAScript syntax" }
        ].map((B) => {
          const we = c.find((ot) => ot.major === B.major), ee = we ? we.installed : !0, ve = l.filter((ot) => ot.node_version === B.major).length;
          return /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2.5 }, children: [
            /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 1.5, sx: { justifyContent: "space-between", alignItems: "flex-start", mb: 1 }, children: [
              /* @__PURE__ */ f.jsxs(Ye, { children: [
                /* @__PURE__ */ f.jsx($e, { sx: { fontWeight: 700, fontSize: "1rem" }, children: B.title }),
                /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.75rem", color: "text.secondary", mt: 0.25 }, children: B.desc })
              ] }),
              /* @__PURE__ */ f.jsx(
                qi,
                {
                  size: "small",
                  label: ee ? "Installed" : "Available",
                  color: ee ? "success" : "default",
                  variant: "outlined"
                }
              )
            ] }),
            /* @__PURE__ */ f.jsx(jP, { sx: { my: 1.5 } }),
            /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 3, sx: { mb: 2 }, children: [
              /* @__PURE__ */ f.jsx(ao, { label: "Binary Path", value: `/opt/hostpanel/runtimes/node/v${B.major}/bin/node` }),
              /* @__PURE__ */ f.jsx(ao, { label: "Active Apps", value: `${ve} Apps`, mono: !1 })
            ] }),
            /* @__PURE__ */ f.jsx(ct, { direction: "row", spacing: 1, children: ee ? /* @__PURE__ */ f.jsx(
              Bt,
              {
                size: "small",
                variant: "outlined",
                color: "error",
                disabled: ve > 0,
                onClick: () => lt(B.major),
                children: ve > 0 ? "In Use by Apps" : "Remove"
              }
            ) : /* @__PURE__ */ f.jsxs(
              Bt,
              {
                size: "small",
                variant: "contained",
                onClick: () => {
                  P(B.major), g(!0);
                },
                children: [
                  "Install v",
                  B.major
                ]
              }
            ) })
          ] }) }, B.major);
        }) })
      ] }),
      t === 3 && /* @__PURE__ */ f.jsxs(Ye, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f.jsxs(
          ct,
          {
            direction: "row",
            spacing: 2,
            sx: {
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
                /* @__PURE__ */ f.jsx($e, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: "Application:" }),
                /* @__PURE__ */ f.jsx(
                  ri,
                  {
                    size: "small",
                    value: G,
                    onChange: (B) => U(B.target.value),
                    sx: { minWidth: 200 },
                    children: l.map((B) => /* @__PURE__ */ f.jsxs(xn, { value: B.name, children: [
                      B.name,
                      " (",
                      B.status,
                      ")"
                    ] }, B.name))
                  }
                ),
                /* @__PURE__ */ f.jsxs(
                  ri,
                  {
                    size: "small",
                    value: ne,
                    onChange: (B) => se(B.target.value),
                    children: [
                      /* @__PURE__ */ f.jsx(xn, { value: "all", children: "All (Stdout + Stderr)" }),
                      /* @__PURE__ */ f.jsx(xn, { value: "out", children: "Stdout Only" }),
                      /* @__PURE__ */ f.jsx(xn, { value: "err", children: "Stderr Only" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 1, children: [
                /* @__PURE__ */ f.jsx(
                  Bt,
                  {
                    size: "small",
                    variant: "outlined",
                    startIcon: /* @__PURE__ */ f.jsx(Ug, {}),
                    onClick: () => De(G, Te, ne),
                    children: "Refresh"
                  }
                ),
                /* @__PURE__ */ f.jsx(
                  Bt,
                  {
                    size: "small",
                    variant: "outlined",
                    color: "secondary",
                    onClick: () => he([]),
                    children: "Clear"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ f.jsx(Xg, { lines: Ee, running: ae })
      ] }),
      t === 4 && /* @__PURE__ */ f.jsxs(Ye, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f.jsx($e, { sx: { fontWeight: 700, fontSize: "1.125rem", mb: 0.5 }, children: "100% HostPanel Isolation Architecture" }),
        /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 3 }, children: "Strict isolation under /opt/hostpanel. No scatter into system /var, /etc, or /tmp." }),
        /* @__PURE__ */ f.jsxs(Ye, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }, children: [
          /* @__PURE__ */ f.jsx(Vu, { label: "Filesystem Sandboxes (/opt/hostpanel)", padded: !1, children: /* @__PURE__ */ f.jsxs(Lg, { size: "small", children: [
            /* @__PURE__ */ f.jsx(Bg, { children: /* @__PURE__ */ f.jsxs(ns, { children: [
              /* @__PURE__ */ f.jsx($t, { sx: { fontWeight: 600, fontSize: "0.75rem" }, children: "Sandbox Purpose" }),
              /* @__PURE__ */ f.jsx($t, { sx: { fontWeight: 600, fontSize: "0.75rem" }, children: "Enforced Path" })
            ] }) }),
            /* @__PURE__ */ f.jsx(zg, { children: [
              { purpose: "Node Runtime Binaries", path: "/opt/hostpanel/runtimes/node/" },
              { purpose: "Application Data & Roots", path: "/opt/hostpanel/data/apps/" },
              { purpose: "Configuration & Env Files", path: "/opt/hostpanel/etc/nodejs/" },
              { purpose: "Application Logs", path: "/opt/hostpanel/logs/nodejs/" },
              { purpose: "Daemon & App PIDs", path: "/opt/hostpanel/run/nodejs/" },
              { purpose: "Reverse Proxy Ports", path: "31000 – 31999 (Allocated)" }
            ].map((B) => /* @__PURE__ */ f.jsxs(ns, { children: [
              /* @__PURE__ */ f.jsx($t, { sx: { fontSize: "0.8125rem" }, children: B.purpose }),
              /* @__PURE__ */ f.jsx($t, { sx: { fontFamily: Xn, fontSize: "0.75rem", color: "text.secondary" }, children: B.path })
            ] }, B.path)) })
          ] }) }),
          /* @__PURE__ */ f.jsx(Vu, { label: "System Daemon & Security Grant", padded: !0, children: /* @__PURE__ */ f.jsxs(ct, { spacing: 2, children: [
            /* @__PURE__ */ f.jsx(ao, { label: "Service Unit", value: "hostpanel-nodejsd.service" }),
            /* @__PURE__ */ f.jsx(ao, { label: "Service Linux User", value: "hp-nodejs (Unprivileged)" }),
            /* @__PURE__ */ f.jsx(ao, { label: "Service Daemon Binding", value: "Isolated Loopback (127.0.0.1)" }),
            /* @__PURE__ */ f.jsx(ao, { label: "Privileged Root Ops Helper", value: "/opt/hostpanel/packages/nodejs/ops/hp-nodejs" }),
            /* @__PURE__ */ f.jsx(ao, { label: "Sudoers Rule", value: "hp-nodejs ALL=(root) NOPASSWD: /opt/hostpanel/packages/nodejs/ops/hp-nodejs *" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(
      VP,
      {
        anchor: "right",
        open: z,
        onClose: () => D(!1),
        slotProps: { paper: { sx: { width: { xs: "100%", sm: 520 }, p: 3 } } },
        children: [
          /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
            /* @__PURE__ */ f.jsxs($e, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
              "Environment Variables: ",
              W
            ] }),
            /* @__PURE__ */ f.jsx(zn, { size: "small", onClick: () => D(!1), children: /* @__PURE__ */ f.jsx(Yg, { sx: { fontSize: 18 } }) })
          ] }),
          /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 2 }, children: "Variables are injected into the application process on startup. Format: KEY=VALUE (one per line)." }),
          /* @__PURE__ */ f.jsx(
            so,
            {
              fullWidth: !0,
              multiline: !0,
              rows: 16,
              value: Q,
              onChange: (B) => V(B.target.value),
              placeholder: `PORT=31000
NODE_ENV=production
DATABASE_URL=mongodb://localhost:27017/app`,
              slotProps: {
                input: {
                  sx: { fontFamily: Xn, fontSize: "0.8125rem" }
                }
              },
              sx: { mb: 3 }
            }
          ),
          /* @__PURE__ */ f.jsxs(ct, { direction: "row", spacing: 1.5, children: [
            /* @__PURE__ */ f.jsx(
              Bt,
              {
                variant: "contained",
                color: "primary",
                onClick: oe,
                disabled: q,
                startIcon: q ? /* @__PURE__ */ f.jsx(ti, { size: 16 }) : /* @__PURE__ */ f.jsx(Kg, {}),
                children: q ? "Saving…" : "Save Variables"
              }
            ),
            /* @__PURE__ */ f.jsx(Bt, { variant: "outlined", onClick: () => D(!1), children: "Cancel" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      pg,
      {
        open: I,
        onClose: () => !$ && g(!1),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsxs(gg, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ f.jsx($e, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: "Install Node.js Runtime Version" }),
            /* @__PURE__ */ f.jsx(zn, { size: "small", onClick: () => g(!1), disabled: $, children: /* @__PURE__ */ f.jsx(Yg, { sx: { fontSize: 18 } }) })
          ] }),
          /* @__PURE__ */ f.jsxs(hg, { dividers: !0, children: [
            /* @__PURE__ */ f.jsx($e, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 2 }, children: "Installs isolated standalone Node.js and NPM binaries into /opt/hostpanel/runtimes/node/." }),
            /* @__PURE__ */ f.jsx(lo, { label: "Select Node.js Version", children: /* @__PURE__ */ f.jsxs(
              ri,
              {
                fullWidth: !0,
                size: "small",
                value: M,
                onChange: (B) => P(B.target.value),
                disabled: $,
                children: [
                  /* @__PURE__ */ f.jsx(xn, { value: "18", children: "Node.js 18 LTS (Hydrogen)" }),
                  /* @__PURE__ */ f.jsx(xn, { value: "20", children: "Node.js 20 LTS (Iron)" }),
                  /* @__PURE__ */ f.jsx(xn, { value: "22", children: "Node.js 22 LTS (Jod)" }),
                  /* @__PURE__ */ f.jsx(xn, { value: "24", children: "Node.js 24 (Current)" })
                ]
              }
            ) }),
            N.length > 0 && /* @__PURE__ */ f.jsx(Ye, { sx: { mt: 2 }, children: /* @__PURE__ */ f.jsx(Xg, { lines: N, running: $ }) })
          ] }),
          /* @__PURE__ */ f.jsxs(mg, { sx: { p: 2 }, children: [
            /* @__PURE__ */ f.jsx(Bt, { onClick: () => g(!1), disabled: $, children: "Close" }),
            /* @__PURE__ */ f.jsx(
              Bt,
              {
                variant: "contained",
                color: "primary",
                onClick: Be,
                disabled: $,
                startIcon: $ ? /* @__PURE__ */ f.jsx(ti, { size: 16 }) : /* @__PURE__ */ f.jsx(Vg, {}),
                children: $ ? "Installing…" : `Install Node ${M}`
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(pg, { open: !!Ae, onClose: () => ze(null), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ f.jsx(gg, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: "Delete Application?" }),
      /* @__PURE__ */ f.jsx(hg, { children: /* @__PURE__ */ f.jsxs($e, { sx: { fontSize: "0.875rem" }, children: [
        "Are you sure you want to stop and delete application ",
        /* @__PURE__ */ f.jsx("strong", { children: Ae }),
        "? This will remove its daemon configuration and process state."
      ] }) }),
      /* @__PURE__ */ f.jsxs(mg, { sx: { p: 2 }, children: [
        /* @__PURE__ */ f.jsx(Bt, { onClick: () => ze(null), disabled: Pe, children: "Cancel" }),
        /* @__PURE__ */ f.jsx(
          Bt,
          {
            variant: "contained",
            color: "error",
            onClick: He,
            disabled: Pe,
            children: Pe ? "Deleting…" : "Delete Application"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f.jsx(
      FM,
      {
        open: !!ue,
        autoHideDuration: 4e3,
        onClose: () => Oe(null),
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        children: ue ? /* @__PURE__ */ f.jsx(eE, { severity: ue.severity, onClose: () => Oe(null), children: ue.message }) : void 0
      }
    )
  ] });
}
let Ya = null;
function t$(e, t) {
  Ya = u0(e), Ya.render(
    /* @__PURE__ */ f.jsx(m.StrictMode, { children: /* @__PURE__ */ f.jsx(J5, { ctx: t }) })
  );
}
function n$() {
  const e = Ya;
  Ya = null, e && queueMicrotask(() => e.unmount());
}
const o$ = { mount: t$, unmount: n$ };
export {
  o$ as default,
  t$ as mount,
  n$ as unmount
};
//# sourceMappingURL=main.js.map
