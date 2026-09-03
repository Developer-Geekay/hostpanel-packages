var Kx = Object.defineProperty;
var Yx = (e, t, n) => t in e ? Kx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $i = (e, t, n) => Yx(e, typeof t != "symbol" ? t + "" : t, n);
function Gx(e, t) {
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
function Qx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wg = { exports: {} }, Ga = {}, Ug = { exports: {} }, Pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vs = Symbol.for("react.element"), Xx = Symbol.for("react.portal"), qx = Symbol.for("react.fragment"), Zx = Symbol.for("react.strict_mode"), Jx = Symbol.for("react.profiler"), e1 = Symbol.for("react.provider"), t1 = Symbol.for("react.context"), n1 = Symbol.for("react.forward_ref"), r1 = Symbol.for("react.suspense"), o1 = Symbol.for("react.memo"), i1 = Symbol.for("react.lazy"), Jp = Symbol.iterator;
function s1(e) {
  return e === null || typeof e != "object" ? null : (e = Jp && e[Jp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Hg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Vg = Object.assign, Kg = {};
function wi(e, t, n) {
  this.props = e, this.context = t, this.refs = Kg, this.updater = n || Hg;
}
wi.prototype.isReactComponent = {};
wi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
wi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yg() {
}
Yg.prototype = wi.prototype;
function pf(e, t, n) {
  this.props = e, this.context = t, this.refs = Kg, this.updater = n || Hg;
}
var mf = pf.prototype = new Yg();
mf.constructor = pf;
Vg(mf, wi.prototype);
mf.isPureReactComponent = !0;
var em = Array.isArray, Gg = Object.prototype.hasOwnProperty, hf = { current: null }, Qg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xg(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Gg.call(t, r) && !Qg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Vs, type: e, key: i, ref: s, props: o, _owner: hf.current };
}
function l1(e, t) {
  return { $$typeof: Vs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function gf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vs;
}
function a1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var tm = /\/+/g;
function uc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? a1("" + e.key) : t.toString(36);
}
function Kl(e, t, n, r, o) {
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
        case Vs:
        case Xx:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + uc(s, 0) : r, em(o) ? (n = "", e != null && (n = e.replace(tm, "$&/") + "/"), Kl(o, t, n, "", function(u) {
    return u;
  })) : o != null && (gf(o) && (o = l1(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(tm, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", em(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + uc(i, l);
    s += Kl(i, t, n, a, o);
  }
  else if (a = s1(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + uc(i, l++), s += Kl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function sl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Kl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function u1(e) {
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
var Vt = { current: null }, Yl = { transition: null }, c1 = { ReactCurrentDispatcher: Vt, ReactCurrentBatchConfig: Yl, ReactCurrentOwner: hf };
function qg() {
  throw Error("act(...) is not supported in production builds of React.");
}
Pe.Children = { map: sl, forEach: function(e, t, n) {
  sl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return sl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return sl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!gf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Pe.Component = wi;
Pe.Fragment = qx;
Pe.Profiler = Jx;
Pe.PureComponent = pf;
Pe.StrictMode = Zx;
Pe.Suspense = r1;
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c1;
Pe.act = qg;
Pe.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Vg({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = hf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Gg.call(t, a) && !Qg.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Vs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Pe.createContext = function(e) {
  return e = { $$typeof: t1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: e1, _context: e }, e.Consumer = e;
};
Pe.createElement = Xg;
Pe.createFactory = function(e) {
  var t = Xg.bind(null, e);
  return t.type = e, t;
};
Pe.createRef = function() {
  return { current: null };
};
Pe.forwardRef = function(e) {
  return { $$typeof: n1, render: e };
};
Pe.isValidElement = gf;
Pe.lazy = function(e) {
  return { $$typeof: i1, _payload: { _status: -1, _result: e }, _init: u1 };
};
Pe.memo = function(e, t) {
  return { $$typeof: o1, type: e, compare: t === void 0 ? null : t };
};
Pe.startTransition = function(e) {
  var t = Yl.transition;
  Yl.transition = {};
  try {
    e();
  } finally {
    Yl.transition = t;
  }
};
Pe.unstable_act = qg;
Pe.useCallback = function(e, t) {
  return Vt.current.useCallback(e, t);
};
Pe.useContext = function(e) {
  return Vt.current.useContext(e);
};
Pe.useDebugValue = function() {
};
Pe.useDeferredValue = function(e) {
  return Vt.current.useDeferredValue(e);
};
Pe.useEffect = function(e, t) {
  return Vt.current.useEffect(e, t);
};
Pe.useId = function() {
  return Vt.current.useId();
};
Pe.useImperativeHandle = function(e, t, n) {
  return Vt.current.useImperativeHandle(e, t, n);
};
Pe.useInsertionEffect = function(e, t) {
  return Vt.current.useInsertionEffect(e, t);
};
Pe.useLayoutEffect = function(e, t) {
  return Vt.current.useLayoutEffect(e, t);
};
Pe.useMemo = function(e, t) {
  return Vt.current.useMemo(e, t);
};
Pe.useReducer = function(e, t, n) {
  return Vt.current.useReducer(e, t, n);
};
Pe.useRef = function(e) {
  return Vt.current.useRef(e);
};
Pe.useState = function(e) {
  return Vt.current.useState(e);
};
Pe.useSyncExternalStore = function(e, t, n) {
  return Vt.current.useSyncExternalStore(e, t, n);
};
Pe.useTransition = function() {
  return Vt.current.useTransition();
};
Pe.version = "18.3.1";
Ug.exports = Pe;
var h = Ug.exports;
const Zg = /* @__PURE__ */ Qx(h), ca = /* @__PURE__ */ Gx({
  __proto__: null,
  default: Zg
}, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d1 = h, f1 = Symbol.for("react.element"), p1 = Symbol.for("react.fragment"), m1 = Object.prototype.hasOwnProperty, h1 = d1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jg(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) m1.call(t, r) && !g1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: f1, type: e, key: i, ref: s, props: o, _owner: h1.current };
}
Ga.Fragment = p1;
Ga.jsx = Jg;
Ga.jsxs = Jg;
Wg.exports = Ga;
var f = Wg.exports, ey = { exports: {} }, fn = {}, ty = { exports: {} }, ny = {};
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
    var B = j.length;
    j.push(z);
    e: for (; 0 < B; ) {
      var W = B - 1 >>> 1, F = j[W];
      if (0 < o(F, z)) j[W] = z, j[B] = F, B = W;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var z = j[0], B = j.pop();
    if (B !== z) {
      j[0] = B;
      e: for (var W = 0, F = j.length, X = F >>> 1; W < X; ) {
        var U = 2 * (W + 1) - 1, q = j[U], G = U + 1, Q = j[G];
        if (0 > o(q, B)) G < F && 0 > o(Q, q) ? (j[W] = Q, j[G] = B, W = G) : (j[W] = q, j[U] = B, W = U);
        else if (G < F && 0 > o(Q, B)) j[W] = Q, j[G] = B, W = G;
        else break e;
      }
    }
    return z;
  }
  function o(j, z) {
    var B = j.sortIndex - z.sortIndex;
    return B !== 0 ? B : j.id - z.id;
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
  var a = [], u = [], c = 1, p = null, v = 3, d = !1, x = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S(j) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= j) r(u), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(u);
    }
  }
  function w(j) {
    if (b = !1, S(j), !x) if (n(a) !== null) x = !0, L(T);
    else {
      var z = n(u);
      z !== null && A(w, z.startTime - j);
    }
  }
  function T(j, z) {
    x = !1, b && (b = !1, y(E), E = -1), d = !0;
    var B = v;
    try {
      for (S(z), p = n(a); p !== null && (!(p.expirationTime > z) || j && !$()); ) {
        var W = p.callback;
        if (typeof W == "function") {
          p.callback = null, v = p.priorityLevel;
          var F = W(p.expirationTime <= z);
          z = e.unstable_now(), typeof F == "function" ? p.callback = F : p === n(a) && r(a), S(z);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var X = !0;
      else {
        var U = n(u);
        U !== null && A(w, U.startTime - z), X = !1;
      }
      return X;
    } finally {
      p = null, v = B, d = !1;
    }
  }
  var k = !1, R = null, E = -1, M = 5, N = -1;
  function $() {
    return !(e.unstable_now() - N < M);
  }
  function g() {
    if (R !== null) {
      var j = e.unstable_now();
      N = j;
      var z = !0;
      try {
        z = R(!0, j);
      } finally {
        z ? O() : (k = !1, R = null);
      }
    } else k = !1;
  }
  var O;
  if (typeof m == "function") O = function() {
    m(g);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), P = I.port2;
    I.port1.onmessage = g, O = function() {
      P.postMessage(null);
    };
  } else O = function() {
    C(g, 0);
  };
  function L(j) {
    R = j, k || (k = !0, O());
  }
  function A(j, z) {
    E = C(function() {
      j(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    x || d || (x = !0, L(T));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < j ? Math.floor(1e3 / j) : 5;
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
    var B = v;
    v = z;
    try {
      return j();
    } finally {
      v = B;
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
    var B = v;
    v = j;
    try {
      return z();
    } finally {
      v = B;
    }
  }, e.unstable_scheduleCallback = function(j, z, B) {
    var W = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? W + B : W) : B = W, j) {
      case 1:
        var F = -1;
        break;
      case 2:
        F = 250;
        break;
      case 5:
        F = 1073741823;
        break;
      case 4:
        F = 1e4;
        break;
      default:
        F = 5e3;
    }
    return F = B + F, j = { id: c++, callback: z, priorityLevel: j, startTime: B, expirationTime: F, sortIndex: -1 }, B > W ? (j.sortIndex = B, t(u, j), n(a) === null && j === n(u) && (b ? (y(E), E = -1) : b = !0, A(w, B - W))) : (j.sortIndex = F, t(a, j), x || d || (x = !0, L(T))), j;
  }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(j) {
    var z = v;
    return function() {
      var B = v;
      v = z;
      try {
        return j.apply(this, arguments);
      } finally {
        v = B;
      }
    };
  };
})(ny);
ty.exports = ny;
var y1 = ty.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v1 = h, cn = y1;
function H(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ry = /* @__PURE__ */ new Set(), ys = {};
function ko(e, t) {
  ai(e, t), ai(e + "Capture", t);
}
function ai(e, t) {
  for (ys[e] = t, e = 0; e < t.length; e++) ry.add(t[e]);
}
var mr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xc = Object.prototype.hasOwnProperty, x1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, nm = {}, rm = {};
function S1(e) {
  return Xc.call(rm, e) ? !0 : Xc.call(nm, e) ? !1 : x1.test(e) ? rm[e] = !0 : (nm[e] = !0, !1);
}
function b1(e, t, n, r) {
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
function w1(e, t, n, r) {
  if (t === null || typeof t > "u" || b1(e, t, n, r)) return !0;
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
function Kt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var jt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  jt[e] = new Kt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  jt[t] = new Kt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  jt[e] = new Kt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  jt[e] = new Kt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  jt[e] = new Kt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  jt[e] = new Kt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  jt[e] = new Kt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  jt[e] = new Kt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  jt[e] = new Kt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yf = /[\-:]([a-z])/g;
function vf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    yf,
    vf
  );
  jt[t] = new Kt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(yf, vf);
  jt[t] = new Kt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(yf, vf);
  jt[t] = new Kt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  jt[e] = new Kt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
jt.xlinkHref = new Kt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  jt[e] = new Kt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xf(e, t, n, r) {
  var o = jt.hasOwnProperty(t) ? jt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (w1(t, n, o, r) && (n = null), r || o === null ? S1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wr = v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ll = Symbol.for("react.element"), Do = Symbol.for("react.portal"), Wo = Symbol.for("react.fragment"), Sf = Symbol.for("react.strict_mode"), qc = Symbol.for("react.profiler"), oy = Symbol.for("react.provider"), iy = Symbol.for("react.context"), bf = Symbol.for("react.forward_ref"), Zc = Symbol.for("react.suspense"), Jc = Symbol.for("react.suspense_list"), wf = Symbol.for("react.memo"), Rr = Symbol.for("react.lazy"), sy = Symbol.for("react.offscreen"), om = Symbol.iterator;
function ji(e) {
  return e === null || typeof e != "object" ? null : (e = om && e[om] || e["@@iterator"], typeof e == "function" ? e : null);
}
var it = Object.assign, cc;
function Qi(e) {
  if (cc === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    cc = t && t[1] || "";
  }
  return `
` + cc + e;
}
var dc = !1;
function fc(e, t) {
  if (!e || dc) return "";
  dc = !0;
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
    dc = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Qi(e) : "";
}
function C1(e) {
  switch (e.tag) {
    case 5:
      return Qi(e.type);
    case 16:
      return Qi("Lazy");
    case 13:
      return Qi("Suspense");
    case 19:
      return Qi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = fc(e.type, !1), e;
    case 11:
      return e = fc(e.type.render, !1), e;
    case 1:
      return e = fc(e.type, !0), e;
    default:
      return "";
  }
}
function ed(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wo:
      return "Fragment";
    case Do:
      return "Portal";
    case qc:
      return "Profiler";
    case Sf:
      return "StrictMode";
    case Zc:
      return "Suspense";
    case Jc:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case iy:
      return (e.displayName || "Context") + ".Consumer";
    case oy:
      return (e._context.displayName || "Context") + ".Provider";
    case bf:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case wf:
      return t = e.displayName || null, t !== null ? t : ed(e.type) || "Memo";
    case Rr:
      t = e._payload, e = e._init;
      try {
        return ed(e(t));
      } catch {
      }
  }
  return null;
}
function k1(e) {
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
      return ed(t);
    case 8:
      return t === Sf ? "StrictMode" : "Mode";
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
function Wr(e) {
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
function ly(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function T1(e) {
  var t = ly(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function al(e) {
  e._valueTracker || (e._valueTracker = T1(e));
}
function ay(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ly(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function da(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function td(e, t) {
  var n = t.checked;
  return it({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function im(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Wr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function uy(e, t) {
  t = t.checked, t != null && xf(e, "checked", t, !1);
}
function nd(e, t) {
  uy(e, t);
  var n = Wr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? rd(e, t.type, n) : t.hasOwnProperty("defaultValue") && rd(e, t.type, Wr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function sm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function rd(e, t, n) {
  (t !== "number" || da(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xi = Array.isArray;
function Jo(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function od(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return it({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function lm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(H(92));
      if (Xi(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Wr(n) };
}
function cy(e, t) {
  var n = Wr(t.value), r = Wr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function am(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function dy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function id(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? dy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ul, fy = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ul = ul || document.createElement("div"), ul.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ul.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function vs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ts = {
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
}, E1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ts).forEach(function(e) {
  E1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ts[t] = ts[e];
  });
});
function py(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ts.hasOwnProperty(e) && ts[e] ? ("" + t).trim() : t + "px";
}
function my(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = py(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var R1 = it({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function sd(e, t) {
  if (t) {
    if (R1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(H(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(H(62));
  }
}
function ld(e, t) {
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
var ad = null;
function Cf(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ud = null, ei = null, ti = null;
function um(e) {
  if (e = Gs(e)) {
    if (typeof ud != "function") throw Error(H(280));
    var t = e.stateNode;
    t && (t = Ja(t), ud(e.stateNode, e.type, t));
  }
}
function hy(e) {
  ei ? ti ? ti.push(e) : ti = [e] : ei = e;
}
function gy() {
  if (ei) {
    var e = ei, t = ti;
    if (ti = ei = null, um(e), t) for (e = 0; e < t.length; e++) um(t[e]);
  }
}
function yy(e, t) {
  return e(t);
}
function vy() {
}
var pc = !1;
function xy(e, t, n) {
  if (pc) return e(t, n);
  pc = !0;
  try {
    return yy(e, t, n);
  } finally {
    pc = !1, (ei !== null || ti !== null) && (vy(), gy());
  }
}
function xs(e, t) {
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
  if (n && typeof n != "function") throw Error(H(231, t, typeof n));
  return n;
}
var cd = !1;
if (mr) try {
  var Oi = {};
  Object.defineProperty(Oi, "passive", { get: function() {
    cd = !0;
  } }), window.addEventListener("test", Oi, Oi), window.removeEventListener("test", Oi, Oi);
} catch {
  cd = !1;
}
function P1(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ns = !1, fa = null, pa = !1, dd = null, I1 = { onError: function(e) {
  ns = !0, fa = e;
} };
function M1(e, t, n, r, o, i, s, l, a) {
  ns = !1, fa = null, P1.apply(I1, arguments);
}
function $1(e, t, n, r, o, i, s, l, a) {
  if (M1.apply(this, arguments), ns) {
    if (ns) {
      var u = fa;
      ns = !1, fa = null;
    } else throw Error(H(198));
    pa || (pa = !0, dd = u);
  }
}
function To(e) {
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
function Sy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function cm(e) {
  if (To(e) !== e) throw Error(H(188));
}
function j1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = To(e), t === null) throw Error(H(188));
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
        if (i === n) return cm(o), e;
        if (i === r) return cm(o), t;
        i = i.sibling;
      }
      throw Error(H(188));
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
        if (!s) throw Error(H(189));
      }
    }
    if (n.alternate !== r) throw Error(H(190));
  }
  if (n.tag !== 3) throw Error(H(188));
  return n.stateNode.current === n ? e : t;
}
function by(e) {
  return e = j1(e), e !== null ? wy(e) : null;
}
function wy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cy = cn.unstable_scheduleCallback, dm = cn.unstable_cancelCallback, O1 = cn.unstable_shouldYield, A1 = cn.unstable_requestPaint, pt = cn.unstable_now, N1 = cn.unstable_getCurrentPriorityLevel, kf = cn.unstable_ImmediatePriority, ky = cn.unstable_UserBlockingPriority, ma = cn.unstable_NormalPriority, L1 = cn.unstable_LowPriority, Ty = cn.unstable_IdlePriority, Qa = null, Zn = null;
function z1(e) {
  if (Zn && typeof Zn.onCommitFiberRoot == "function") try {
    Zn.onCommitFiberRoot(Qa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var zn = Math.clz32 ? Math.clz32 : F1, _1 = Math.log, B1 = Math.LN2;
function F1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (_1(e) / B1 | 0) | 0;
}
var cl = 64, dl = 4194304;
function qi(e) {
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
function ha(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = qi(l) : (i &= s, i !== 0 && (r = qi(i)));
  } else s = n & ~o, s !== 0 ? r = qi(s) : i !== 0 && (r = qi(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - zn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function D1(e, t) {
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
function W1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - zn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = D1(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function fd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ey() {
  var e = cl;
  return cl <<= 1, !(cl & 4194240) && (cl = 64), e;
}
function mc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ks(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - zn(t), e[t] = n;
}
function U1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - zn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Tf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - zn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Be = 0;
function Ry(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Py, Ef, Iy, My, $y, pd = !1, fl = [], Or = null, Ar = null, Nr = null, Ss = /* @__PURE__ */ new Map(), bs = /* @__PURE__ */ new Map(), Ir = [], H1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function fm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Or = null;
      break;
    case "dragenter":
    case "dragleave":
      Ar = null;
      break;
    case "mouseover":
    case "mouseout":
      Nr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ss.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bs.delete(t.pointerId);
  }
}
function Ai(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Gs(t), t !== null && Ef(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function V1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Or = Ai(Or, e, t, n, r, o), !0;
    case "dragenter":
      return Ar = Ai(Ar, e, t, n, r, o), !0;
    case "mouseover":
      return Nr = Ai(Nr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ss.set(i, Ai(Ss.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, bs.set(i, Ai(bs.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function jy(e) {
  var t = so(e.target);
  if (t !== null) {
    var n = To(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Sy(n), t !== null) {
          e.blockedOn = t, $y(e.priority, function() {
            Iy(n);
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
function Gl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = md(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ad = r, n.target.dispatchEvent(r), ad = null;
    } else return t = Gs(n), t !== null && Ef(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function pm(e, t, n) {
  Gl(e) && n.delete(t);
}
function K1() {
  pd = !1, Or !== null && Gl(Or) && (Or = null), Ar !== null && Gl(Ar) && (Ar = null), Nr !== null && Gl(Nr) && (Nr = null), Ss.forEach(pm), bs.forEach(pm);
}
function Ni(e, t) {
  e.blockedOn === t && (e.blockedOn = null, pd || (pd = !0, cn.unstable_scheduleCallback(cn.unstable_NormalPriority, K1)));
}
function ws(e) {
  function t(o) {
    return Ni(o, e);
  }
  if (0 < fl.length) {
    Ni(fl[0], e);
    for (var n = 1; n < fl.length; n++) {
      var r = fl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Or !== null && Ni(Or, e), Ar !== null && Ni(Ar, e), Nr !== null && Ni(Nr, e), Ss.forEach(t), bs.forEach(t), n = 0; n < Ir.length; n++) r = Ir[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ir.length && (n = Ir[0], n.blockedOn === null); ) jy(n), n.blockedOn === null && Ir.shift();
}
var ni = wr.ReactCurrentBatchConfig, ga = !0;
function Y1(e, t, n, r) {
  var o = Be, i = ni.transition;
  ni.transition = null;
  try {
    Be = 1, Rf(e, t, n, r);
  } finally {
    Be = o, ni.transition = i;
  }
}
function G1(e, t, n, r) {
  var o = Be, i = ni.transition;
  ni.transition = null;
  try {
    Be = 4, Rf(e, t, n, r);
  } finally {
    Be = o, ni.transition = i;
  }
}
function Rf(e, t, n, r) {
  if (ga) {
    var o = md(e, t, n, r);
    if (o === null) kc(e, t, r, ya, n), fm(e, r);
    else if (V1(o, e, t, n, r)) r.stopPropagation();
    else if (fm(e, r), t & 4 && -1 < H1.indexOf(e)) {
      for (; o !== null; ) {
        var i = Gs(o);
        if (i !== null && Py(i), i = md(e, t, n, r), i === null && kc(e, t, r, ya, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else kc(e, t, r, null, n);
  }
}
var ya = null;
function md(e, t, n, r) {
  if (ya = null, e = Cf(r), e = so(e), e !== null) if (t = To(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Sy(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ya = e, null;
}
function Oy(e) {
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
      switch (N1()) {
        case kf:
          return 1;
        case ky:
          return 4;
        case ma:
        case L1:
          return 16;
        case Ty:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $r = null, Pf = null, Ql = null;
function Ay() {
  if (Ql) return Ql;
  var e, t = Pf, n = t.length, r, o = "value" in $r ? $r.value : $r.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Ql = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Xl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function pl() {
  return !0;
}
function mm() {
  return !1;
}
function pn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? pl : mm, this.isPropagationStopped = mm, this;
  }
  return it(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pl);
  }, persist: function() {
  }, isPersistent: pl }), t;
}
var Ci = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, If = pn(Ci), Ys = it({}, Ci, { view: 0, detail: 0 }), Q1 = pn(Ys), hc, gc, Li, Xa = it({}, Ys, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Mf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Li && (Li && e.type === "mousemove" ? (hc = e.screenX - Li.screenX, gc = e.screenY - Li.screenY) : gc = hc = 0, Li = e), hc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : gc;
} }), hm = pn(Xa), X1 = it({}, Xa, { dataTransfer: 0 }), q1 = pn(X1), Z1 = it({}, Ys, { relatedTarget: 0 }), yc = pn(Z1), J1 = it({}, Ci, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), eS = pn(J1), tS = it({}, Ci, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), nS = pn(tS), rS = it({}, Ci, { data: 0 }), gm = pn(rS), oS = {
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
}, iS = {
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
}, sS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function lS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sS[e]) ? !!t[e] : !1;
}
function Mf() {
  return lS;
}
var aS = it({}, Ys, { key: function(e) {
  if (e.key) {
    var t = oS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Xl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? iS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Mf, charCode: function(e) {
  return e.type === "keypress" ? Xl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Xl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), uS = pn(aS), cS = it({}, Xa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ym = pn(cS), dS = it({}, Ys, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Mf }), fS = pn(dS), pS = it({}, Ci, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), mS = pn(pS), hS = it({}, Xa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), gS = pn(hS), yS = [9, 13, 27, 32], $f = mr && "CompositionEvent" in window, rs = null;
mr && "documentMode" in document && (rs = document.documentMode);
var vS = mr && "TextEvent" in window && !rs, Ny = mr && (!$f || rs && 8 < rs && 11 >= rs), vm = " ", xm = !1;
function Ly(e, t) {
  switch (e) {
    case "keyup":
      return yS.indexOf(t.keyCode) !== -1;
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
function zy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Uo = !1;
function xS(e, t) {
  switch (e) {
    case "compositionend":
      return zy(t);
    case "keypress":
      return t.which !== 32 ? null : (xm = !0, vm);
    case "textInput":
      return e = t.data, e === vm && xm ? null : e;
    default:
      return null;
  }
}
function SS(e, t) {
  if (Uo) return e === "compositionend" || !$f && Ly(e, t) ? (e = Ay(), Ql = Pf = $r = null, Uo = !1, e) : null;
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
      return Ny && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Sm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bS[e.type] : t === "textarea";
}
function _y(e, t, n, r) {
  hy(r), t = va(t, "onChange"), 0 < t.length && (n = new If("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var os = null, Cs = null;
function wS(e) {
  Qy(e, 0);
}
function qa(e) {
  var t = Ko(e);
  if (ay(t)) return e;
}
function CS(e, t) {
  if (e === "change") return t;
}
var By = !1;
if (mr) {
  var vc;
  if (mr) {
    var xc = "oninput" in document;
    if (!xc) {
      var bm = document.createElement("div");
      bm.setAttribute("oninput", "return;"), xc = typeof bm.oninput == "function";
    }
    vc = xc;
  } else vc = !1;
  By = vc && (!document.documentMode || 9 < document.documentMode);
}
function wm() {
  os && (os.detachEvent("onpropertychange", Fy), Cs = os = null);
}
function Fy(e) {
  if (e.propertyName === "value" && qa(Cs)) {
    var t = [];
    _y(t, Cs, e, Cf(e)), xy(wS, t);
  }
}
function kS(e, t, n) {
  e === "focusin" ? (wm(), os = t, Cs = n, os.attachEvent("onpropertychange", Fy)) : e === "focusout" && wm();
}
function TS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return qa(Cs);
}
function ES(e, t) {
  if (e === "click") return qa(t);
}
function RS(e, t) {
  if (e === "input" || e === "change") return qa(t);
}
function PS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Bn = typeof Object.is == "function" ? Object.is : PS;
function ks(e, t) {
  if (Bn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Xc.call(t, o) || !Bn(e[o], t[o])) return !1;
  }
  return !0;
}
function Cm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function km(e, t) {
  var n = Cm(e);
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
    n = Cm(n);
  }
}
function Dy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Dy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Wy() {
  for (var e = window, t = da(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = da(e.document);
  }
  return t;
}
function jf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function IS(e) {
  var t = Wy(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Dy(n.ownerDocument.documentElement, n)) {
    if (r !== null && jf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = km(n, i);
        var s = km(
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
var MS = mr && "documentMode" in document && 11 >= document.documentMode, Ho = null, hd = null, is = null, gd = !1;
function Tm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  gd || Ho == null || Ho !== da(r) || (r = Ho, "selectionStart" in r && jf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), is && ks(is, r) || (is = r, r = va(hd, "onSelect"), 0 < r.length && (t = new If("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ho)));
}
function ml(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vo = { animationend: ml("Animation", "AnimationEnd"), animationiteration: ml("Animation", "AnimationIteration"), animationstart: ml("Animation", "AnimationStart"), transitionend: ml("Transition", "TransitionEnd") }, Sc = {}, Uy = {};
mr && (Uy = document.createElement("div").style, "AnimationEvent" in window || (delete Vo.animationend.animation, delete Vo.animationiteration.animation, delete Vo.animationstart.animation), "TransitionEvent" in window || delete Vo.transitionend.transition);
function Za(e) {
  if (Sc[e]) return Sc[e];
  if (!Vo[e]) return e;
  var t = Vo[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Uy) return Sc[e] = t[n];
  return e;
}
var Hy = Za("animationend"), Vy = Za("animationiteration"), Ky = Za("animationstart"), Yy = Za("transitionend"), Gy = /* @__PURE__ */ new Map(), Em = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Kr(e, t) {
  Gy.set(e, t), ko(t, [e]);
}
for (var bc = 0; bc < Em.length; bc++) {
  var wc = Em[bc], $S = wc.toLowerCase(), jS = wc[0].toUpperCase() + wc.slice(1);
  Kr($S, "on" + jS);
}
Kr(Hy, "onAnimationEnd");
Kr(Vy, "onAnimationIteration");
Kr(Ky, "onAnimationStart");
Kr("dblclick", "onDoubleClick");
Kr("focusin", "onFocus");
Kr("focusout", "onBlur");
Kr(Yy, "onTransitionEnd");
ai("onMouseEnter", ["mouseout", "mouseover"]);
ai("onMouseLeave", ["mouseout", "mouseover"]);
ai("onPointerEnter", ["pointerout", "pointerover"]);
ai("onPointerLeave", ["pointerout", "pointerover"]);
ko("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ko("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ko("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ko("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ko("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ko("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Zi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), OS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));
function Rm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, $1(r, t, void 0, e), e.currentTarget = null;
}
function Qy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Rm(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Rm(o, l, u), i = a;
      }
    }
  }
  if (pa) throw e = dd, pa = !1, dd = null, e;
}
function qe(e, t) {
  var n = t[bd];
  n === void 0 && (n = t[bd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Xy(t, e, 2, !1), n.add(r));
}
function Cc(e, t, n) {
  var r = 0;
  t && (r |= 4), Xy(n, e, r, t);
}
var hl = "_reactListening" + Math.random().toString(36).slice(2);
function Ts(e) {
  if (!e[hl]) {
    e[hl] = !0, ry.forEach(function(n) {
      n !== "selectionchange" && (OS.has(n) || Cc(n, !1, e), Cc(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hl] || (t[hl] = !0, Cc("selectionchange", !1, t));
  }
}
function Xy(e, t, n, r) {
  switch (Oy(t)) {
    case 1:
      var o = Y1;
      break;
    case 4:
      o = G1;
      break;
    default:
      o = Rf;
  }
  n = o.bind(null, t, n, e), o = void 0, !cd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function kc(e, t, n, r, o) {
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
        if (s = so(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  xy(function() {
    var u = i, c = Cf(n), p = [];
    e: {
      var v = Gy.get(e);
      if (v !== void 0) {
        var d = If, x = e;
        switch (e) {
          case "keypress":
            if (Xl(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = uS;
            break;
          case "focusin":
            x = "focus", d = yc;
            break;
          case "focusout":
            x = "blur", d = yc;
            break;
          case "beforeblur":
          case "afterblur":
            d = yc;
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
            d = hm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = q1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = fS;
            break;
          case Hy:
          case Vy:
          case Ky:
            d = eS;
            break;
          case Yy:
            d = mS;
            break;
          case "scroll":
            d = Q1;
            break;
          case "wheel":
            d = gS;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = nS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = ym;
        }
        var b = (t & 4) !== 0, C = !b && e === "scroll", y = b ? v !== null ? v + "Capture" : null : v;
        b = [];
        for (var m = u, S; m !== null; ) {
          S = m;
          var w = S.stateNode;
          if (S.tag === 5 && w !== null && (S = w, y !== null && (w = xs(m, y), w != null && b.push(Es(m, w, S)))), C) break;
          m = m.return;
        }
        0 < b.length && (v = new d(v, x, null, n, c), p.push({ event: v, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", v && n !== ad && (x = n.relatedTarget || n.fromElement) && (so(x) || x[hr])) break e;
        if ((d || v) && (v = c.window === c ? c : (v = c.ownerDocument) ? v.defaultView || v.parentWindow : window, d ? (x = n.relatedTarget || n.toElement, d = u, x = x ? so(x) : null, x !== null && (C = To(x), x !== C || x.tag !== 5 && x.tag !== 6) && (x = null)) : (d = null, x = u), d !== x)) {
          if (b = hm, w = "onMouseLeave", y = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (b = ym, w = "onPointerLeave", y = "onPointerEnter", m = "pointer"), C = d == null ? v : Ko(d), S = x == null ? v : Ko(x), v = new b(w, m + "leave", d, n, c), v.target = C, v.relatedTarget = S, w = null, so(c) === u && (b = new b(y, m + "enter", x, n, c), b.target = S, b.relatedTarget = C, w = b), C = w, d && x) t: {
            for (b = d, y = x, m = 0, S = b; S; S = Oo(S)) m++;
            for (S = 0, w = y; w; w = Oo(w)) S++;
            for (; 0 < m - S; ) b = Oo(b), m--;
            for (; 0 < S - m; ) y = Oo(y), S--;
            for (; m--; ) {
              if (b === y || y !== null && b === y.alternate) break t;
              b = Oo(b), y = Oo(y);
            }
            b = null;
          }
          else b = null;
          d !== null && Pm(p, v, d, b, !1), x !== null && C !== null && Pm(p, C, x, b, !0);
        }
      }
      e: {
        if (v = u ? Ko(u) : window, d = v.nodeName && v.nodeName.toLowerCase(), d === "select" || d === "input" && v.type === "file") var T = CS;
        else if (Sm(v)) if (By) T = RS;
        else {
          T = TS;
          var k = kS;
        }
        else (d = v.nodeName) && d.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (T = ES);
        if (T && (T = T(e, u))) {
          _y(p, T, n, c);
          break e;
        }
        k && k(e, v, u), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && rd(v, "number", v.value);
      }
      switch (k = u ? Ko(u) : window, e) {
        case "focusin":
          (Sm(k) || k.contentEditable === "true") && (Ho = k, hd = u, is = null);
          break;
        case "focusout":
          is = hd = Ho = null;
          break;
        case "mousedown":
          gd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gd = !1, Tm(p, n, c);
          break;
        case "selectionchange":
          if (MS) break;
        case "keydown":
        case "keyup":
          Tm(p, n, c);
      }
      var R;
      if ($f) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else Uo ? Ly(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Ny && n.locale !== "ko" && (Uo || E !== "onCompositionStart" ? E === "onCompositionEnd" && Uo && (R = Ay()) : ($r = c, Pf = "value" in $r ? $r.value : $r.textContent, Uo = !0)), k = va(u, E), 0 < k.length && (E = new gm(E, e, null, n, c), p.push({ event: E, listeners: k }), R ? E.data = R : (R = zy(n), R !== null && (E.data = R)))), (R = vS ? xS(e, n) : SS(e, n)) && (u = va(u, "onBeforeInput"), 0 < u.length && (c = new gm("onBeforeInput", "beforeinput", null, n, c), p.push({ event: c, listeners: u }), c.data = R));
    }
    Qy(p, t);
  });
}
function Es(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function va(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = xs(e, n), i != null && r.unshift(Es(e, i, o)), i = xs(e, t), i != null && r.push(Es(e, i, o))), e = e.return;
  }
  return r;
}
function Oo(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = xs(n, i), a != null && s.unshift(Es(n, a, l))) : o || (a = xs(n, i), a != null && s.push(Es(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var AS = /\r\n?/g, NS = /\u0000|\uFFFD/g;
function Im(e) {
  return (typeof e == "string" ? e : "" + e).replace(AS, `
`).replace(NS, "");
}
function gl(e, t, n) {
  if (t = Im(t), Im(e) !== t && n) throw Error(H(425));
}
function xa() {
}
var yd = null, vd = null;
function xd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Sd = typeof setTimeout == "function" ? setTimeout : void 0, LS = typeof clearTimeout == "function" ? clearTimeout : void 0, Mm = typeof Promise == "function" ? Promise : void 0, zS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mm < "u" ? function(e) {
  return Mm.resolve(null).then(e).catch(_S);
} : Sd;
function _S(e) {
  setTimeout(function() {
    throw e;
  });
}
function Tc(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), ws(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ws(t);
}
function Lr(e) {
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
function $m(e) {
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
var ki = Math.random().toString(36).slice(2), Qn = "__reactFiber$" + ki, Rs = "__reactProps$" + ki, hr = "__reactContainer$" + ki, bd = "__reactEvents$" + ki, BS = "__reactListeners$" + ki, FS = "__reactHandles$" + ki;
function so(e) {
  var t = e[Qn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[hr] || n[Qn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = $m(e); e !== null; ) {
        if (n = e[Qn]) return n;
        e = $m(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Gs(e) {
  return e = e[Qn] || e[hr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ko(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function Ja(e) {
  return e[Rs] || null;
}
var wd = [], Yo = -1;
function Yr(e) {
  return { current: e };
}
function Ze(e) {
  0 > Yo || (e.current = wd[Yo], wd[Yo] = null, Yo--);
}
function Qe(e, t) {
  Yo++, wd[Yo] = e.current, e.current = t;
}
var Ur = {}, zt = Yr(Ur), Qt = Yr(!1), ho = Ur;
function ui(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ur;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Xt(e) {
  return e = e.childContextTypes, e != null;
}
function Sa() {
  Ze(Qt), Ze(zt);
}
function jm(e, t, n) {
  if (zt.current !== Ur) throw Error(H(168));
  Qe(zt, t), Qe(Qt, n);
}
function qy(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, k1(e) || "Unknown", o));
  return it({}, n, r);
}
function ba(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ur, ho = zt.current, Qe(zt, e), Qe(Qt, Qt.current), !0;
}
function Om(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n ? (e = qy(e, t, ho), r.__reactInternalMemoizedMergedChildContext = e, Ze(Qt), Ze(zt), Qe(zt, e)) : Ze(Qt), Qe(Qt, n);
}
var ar = null, eu = !1, Ec = !1;
function Zy(e) {
  ar === null ? ar = [e] : ar.push(e);
}
function DS(e) {
  eu = !0, Zy(e);
}
function Gr() {
  if (!Ec && ar !== null) {
    Ec = !0;
    var e = 0, t = Be;
    try {
      var n = ar;
      for (Be = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ar = null, eu = !1;
    } catch (o) {
      throw ar !== null && (ar = ar.slice(e + 1)), Cy(kf, Gr), o;
    } finally {
      Be = t, Ec = !1;
    }
  }
  return null;
}
var Go = [], Qo = 0, wa = null, Ca = 0, yn = [], vn = 0, go = null, dr = 1, fr = "";
function ro(e, t) {
  Go[Qo++] = Ca, Go[Qo++] = wa, wa = e, Ca = t;
}
function Jy(e, t, n) {
  yn[vn++] = dr, yn[vn++] = fr, yn[vn++] = go, go = e;
  var r = dr;
  e = fr;
  var o = 32 - zn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - zn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, dr = 1 << 32 - zn(t) + o | n << o | r, fr = i + e;
  } else dr = 1 << i | n << o | r, fr = e;
}
function Of(e) {
  e.return !== null && (ro(e, 1), Jy(e, 1, 0));
}
function Af(e) {
  for (; e === wa; ) wa = Go[--Qo], Go[Qo] = null, Ca = Go[--Qo], Go[Qo] = null;
  for (; e === go; ) go = yn[--vn], yn[vn] = null, fr = yn[--vn], yn[vn] = null, dr = yn[--vn], yn[vn] = null;
}
var an = null, ln = null, et = !1, Ln = null;
function ev(e, t) {
  var n = bn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Am(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, an = e, ln = Lr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, an = e, ln = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = go !== null ? { id: dr, overflow: fr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = bn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, an = e, ln = null, !0) : !1;
    default:
      return !1;
  }
}
function Cd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function kd(e) {
  if (et) {
    var t = ln;
    if (t) {
      var n = t;
      if (!Am(e, t)) {
        if (Cd(e)) throw Error(H(418));
        t = Lr(n.nextSibling);
        var r = an;
        t && Am(e, t) ? ev(r, n) : (e.flags = e.flags & -4097 | 2, et = !1, an = e);
      }
    } else {
      if (Cd(e)) throw Error(H(418));
      e.flags = e.flags & -4097 | 2, et = !1, an = e;
    }
  }
}
function Nm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  an = e;
}
function yl(e) {
  if (e !== an) return !1;
  if (!et) return Nm(e), et = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xd(e.type, e.memoizedProps)), t && (t = ln)) {
    if (Cd(e)) throw tv(), Error(H(418));
    for (; t; ) ev(e, t), t = Lr(t.nextSibling);
  }
  if (Nm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ln = Lr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ln = null;
    }
  } else ln = an ? Lr(e.stateNode.nextSibling) : null;
  return !0;
}
function tv() {
  for (var e = ln; e; ) e = Lr(e.nextSibling);
}
function ci() {
  ln = an = null, et = !1;
}
function Nf(e) {
  Ln === null ? Ln = [e] : Ln.push(e);
}
var WS = wr.ReactCurrentBatchConfig;
function zi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(H(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(H(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(H(284));
    if (!n._owner) throw Error(H(290, e));
  }
  return e;
}
function vl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(H(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Lm(e) {
  var t = e._init;
  return t(e._payload);
}
function nv(e) {
  function t(y, m) {
    if (e) {
      var S = y.deletions;
      S === null ? (y.deletions = [m], y.flags |= 16) : S.push(m);
    }
  }
  function n(y, m) {
    if (!e) return null;
    for (; m !== null; ) t(y, m), m = m.sibling;
    return null;
  }
  function r(y, m) {
    for (y = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? y.set(m.key, m) : y.set(m.index, m), m = m.sibling;
    return y;
  }
  function o(y, m) {
    return y = Fr(y, m), y.index = 0, y.sibling = null, y;
  }
  function i(y, m, S) {
    return y.index = S, e ? (S = y.alternate, S !== null ? (S = S.index, S < m ? (y.flags |= 2, m) : S) : (y.flags |= 2, m)) : (y.flags |= 1048576, m);
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function l(y, m, S, w) {
    return m === null || m.tag !== 6 ? (m = Oc(S, y.mode, w), m.return = y, m) : (m = o(m, S), m.return = y, m);
  }
  function a(y, m, S, w) {
    var T = S.type;
    return T === Wo ? c(y, m, S.props.children, w, S.key) : m !== null && (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Rr && Lm(T) === m.type) ? (w = o(m, S.props), w.ref = zi(y, m, S), w.return = y, w) : (w = ra(S.type, S.key, S.props, null, y.mode, w), w.ref = zi(y, m, S), w.return = y, w);
  }
  function u(y, m, S, w) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== S.containerInfo || m.stateNode.implementation !== S.implementation ? (m = Ac(S, y.mode, w), m.return = y, m) : (m = o(m, S.children || []), m.return = y, m);
  }
  function c(y, m, S, w, T) {
    return m === null || m.tag !== 7 ? (m = fo(S, y.mode, w, T), m.return = y, m) : (m = o(m, S), m.return = y, m);
  }
  function p(y, m, S) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = Oc("" + m, y.mode, S), m.return = y, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ll:
          return S = ra(m.type, m.key, m.props, null, y.mode, S), S.ref = zi(y, null, m), S.return = y, S;
        case Do:
          return m = Ac(m, y.mode, S), m.return = y, m;
        case Rr:
          var w = m._init;
          return p(y, w(m._payload), S);
      }
      if (Xi(m) || ji(m)) return m = fo(m, y.mode, S, null), m.return = y, m;
      vl(y, m);
    }
    return null;
  }
  function v(y, m, S, w) {
    var T = m !== null ? m.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return T !== null ? null : l(y, m, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ll:
          return S.key === T ? a(y, m, S, w) : null;
        case Do:
          return S.key === T ? u(y, m, S, w) : null;
        case Rr:
          return T = S._init, v(
            y,
            m,
            T(S._payload),
            w
          );
      }
      if (Xi(S) || ji(S)) return T !== null ? null : c(y, m, S, w, null);
      vl(y, S);
    }
    return null;
  }
  function d(y, m, S, w, T) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return y = y.get(S) || null, l(m, y, "" + w, T);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ll:
          return y = y.get(w.key === null ? S : w.key) || null, a(m, y, w, T);
        case Do:
          return y = y.get(w.key === null ? S : w.key) || null, u(m, y, w, T);
        case Rr:
          var k = w._init;
          return d(y, m, S, k(w._payload), T);
      }
      if (Xi(w) || ji(w)) return y = y.get(S) || null, c(m, y, w, T, null);
      vl(m, w);
    }
    return null;
  }
  function x(y, m, S, w) {
    for (var T = null, k = null, R = m, E = m = 0, M = null; R !== null && E < S.length; E++) {
      R.index > E ? (M = R, R = null) : M = R.sibling;
      var N = v(y, R, S[E], w);
      if (N === null) {
        R === null && (R = M);
        break;
      }
      e && R && N.alternate === null && t(y, R), m = i(N, m, E), k === null ? T = N : k.sibling = N, k = N, R = M;
    }
    if (E === S.length) return n(y, R), et && ro(y, E), T;
    if (R === null) {
      for (; E < S.length; E++) R = p(y, S[E], w), R !== null && (m = i(R, m, E), k === null ? T = R : k.sibling = R, k = R);
      return et && ro(y, E), T;
    }
    for (R = r(y, R); E < S.length; E++) M = d(R, y, E, S[E], w), M !== null && (e && M.alternate !== null && R.delete(M.key === null ? E : M.key), m = i(M, m, E), k === null ? T = M : k.sibling = M, k = M);
    return e && R.forEach(function($) {
      return t(y, $);
    }), et && ro(y, E), T;
  }
  function b(y, m, S, w) {
    var T = ji(S);
    if (typeof T != "function") throw Error(H(150));
    if (S = T.call(S), S == null) throw Error(H(151));
    for (var k = T = null, R = m, E = m = 0, M = null, N = S.next(); R !== null && !N.done; E++, N = S.next()) {
      R.index > E ? (M = R, R = null) : M = R.sibling;
      var $ = v(y, R, N.value, w);
      if ($ === null) {
        R === null && (R = M);
        break;
      }
      e && R && $.alternate === null && t(y, R), m = i($, m, E), k === null ? T = $ : k.sibling = $, k = $, R = M;
    }
    if (N.done) return n(
      y,
      R
    ), et && ro(y, E), T;
    if (R === null) {
      for (; !N.done; E++, N = S.next()) N = p(y, N.value, w), N !== null && (m = i(N, m, E), k === null ? T = N : k.sibling = N, k = N);
      return et && ro(y, E), T;
    }
    for (R = r(y, R); !N.done; E++, N = S.next()) N = d(R, y, E, N.value, w), N !== null && (e && N.alternate !== null && R.delete(N.key === null ? E : N.key), m = i(N, m, E), k === null ? T = N : k.sibling = N, k = N);
    return e && R.forEach(function(g) {
      return t(y, g);
    }), et && ro(y, E), T;
  }
  function C(y, m, S, w) {
    if (typeof S == "object" && S !== null && S.type === Wo && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ll:
          e: {
            for (var T = S.key, k = m; k !== null; ) {
              if (k.key === T) {
                if (T = S.type, T === Wo) {
                  if (k.tag === 7) {
                    n(y, k.sibling), m = o(k, S.props.children), m.return = y, y = m;
                    break e;
                  }
                } else if (k.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Rr && Lm(T) === k.type) {
                  n(y, k.sibling), m = o(k, S.props), m.ref = zi(y, k, S), m.return = y, y = m;
                  break e;
                }
                n(y, k);
                break;
              } else t(y, k);
              k = k.sibling;
            }
            S.type === Wo ? (m = fo(S.props.children, y.mode, w, S.key), m.return = y, y = m) : (w = ra(S.type, S.key, S.props, null, y.mode, w), w.ref = zi(y, m, S), w.return = y, y = w);
          }
          return s(y);
        case Do:
          e: {
            for (k = S.key; m !== null; ) {
              if (m.key === k) if (m.tag === 4 && m.stateNode.containerInfo === S.containerInfo && m.stateNode.implementation === S.implementation) {
                n(y, m.sibling), m = o(m, S.children || []), m.return = y, y = m;
                break e;
              } else {
                n(y, m);
                break;
              }
              else t(y, m);
              m = m.sibling;
            }
            m = Ac(S, y.mode, w), m.return = y, y = m;
          }
          return s(y);
        case Rr:
          return k = S._init, C(y, m, k(S._payload), w);
      }
      if (Xi(S)) return x(y, m, S, w);
      if (ji(S)) return b(y, m, S, w);
      vl(y, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, m !== null && m.tag === 6 ? (n(y, m.sibling), m = o(m, S), m.return = y, y = m) : (n(y, m), m = Oc(S, y.mode, w), m.return = y, y = m), s(y)) : n(y, m);
  }
  return C;
}
var di = nv(!0), rv = nv(!1), ka = Yr(null), Ta = null, Xo = null, Lf = null;
function zf() {
  Lf = Xo = Ta = null;
}
function _f(e) {
  var t = ka.current;
  Ze(ka), e._currentValue = t;
}
function Td(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ri(e, t) {
  Ta = e, Lf = Xo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Gt = !0), e.firstContext = null);
}
function Tn(e) {
  var t = e._currentValue;
  if (Lf !== e) if (e = { context: e, memoizedValue: t, next: null }, Xo === null) {
    if (Ta === null) throw Error(H(308));
    Xo = e, Ta.dependencies = { lanes: 0, firstContext: e };
  } else Xo = Xo.next = e;
  return t;
}
var lo = null;
function Bf(e) {
  lo === null ? lo = [e] : lo.push(e);
}
function ov(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Bf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, gr(e, r);
}
function gr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Pr = !1;
function Ff(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function iv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function pr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function zr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, $e & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, gr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Bf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, gr(e, n);
}
function ql(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Tf(e, n);
  }
}
function zm(e, t) {
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
function Ea(e, t, n, r) {
  var o = e.updateQueue;
  Pr = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var p = o.baseState;
    s = 0, c = u = a = null, l = i;
    do {
      var v = l.lane, d = l.eventTime;
      if ((r & v) === v) {
        c !== null && (c = c.next = {
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
              p = it({}, p, v);
              break e;
            case 2:
              Pr = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [l] : v.push(l));
      } else d = { eventTime: d, lane: v, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = d, a = p) : c = c.next = d, s |= v;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = p), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    vo |= s, e.lanes = s, e.memoizedState = p;
  }
}
function _m(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(H(191, o));
      o.call(r);
    }
  }
}
var Qs = {}, Jn = Yr(Qs), Ps = Yr(Qs), Is = Yr(Qs);
function ao(e) {
  if (e === Qs) throw Error(H(174));
  return e;
}
function Df(e, t) {
  switch (Qe(Is, t), Qe(Ps, e), Qe(Jn, Qs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : id(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = id(t, e);
  }
  Ze(Jn), Qe(Jn, t);
}
function fi() {
  Ze(Jn), Ze(Ps), Ze(Is);
}
function sv(e) {
  ao(Is.current);
  var t = ao(Jn.current), n = id(t, e.type);
  t !== n && (Qe(Ps, e), Qe(Jn, n));
}
function Wf(e) {
  Ps.current === e && (Ze(Jn), Ze(Ps));
}
var nt = Yr(0);
function Ra(e) {
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
var Rc = [];
function Uf() {
  for (var e = 0; e < Rc.length; e++) Rc[e]._workInProgressVersionPrimary = null;
  Rc.length = 0;
}
var Zl = wr.ReactCurrentDispatcher, Pc = wr.ReactCurrentBatchConfig, yo = 0, rt = null, Ct = null, Tt = null, Pa = !1, ss = !1, Ms = 0, US = 0;
function Ot() {
  throw Error(H(321));
}
function Hf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Bn(e[n], t[n])) return !1;
  return !0;
}
function Vf(e, t, n, r, o, i) {
  if (yo = i, rt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Zl.current = e === null || e.memoizedState === null ? YS : GS, e = n(r, o), ss) {
    i = 0;
    do {
      if (ss = !1, Ms = 0, 25 <= i) throw Error(H(301));
      i += 1, Tt = Ct = null, t.updateQueue = null, Zl.current = QS, e = n(r, o);
    } while (ss);
  }
  if (Zl.current = Ia, t = Ct !== null && Ct.next !== null, yo = 0, Tt = Ct = rt = null, Pa = !1, t) throw Error(H(300));
  return e;
}
function Kf() {
  var e = Ms !== 0;
  return Ms = 0, e;
}
function Kn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Tt === null ? rt.memoizedState = Tt = e : Tt = Tt.next = e, Tt;
}
function En() {
  if (Ct === null) {
    var e = rt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ct.next;
  var t = Tt === null ? rt.memoizedState : Tt.next;
  if (t !== null) Tt = t, Ct = e;
  else {
    if (e === null) throw Error(H(310));
    Ct = e, e = { memoizedState: Ct.memoizedState, baseState: Ct.baseState, baseQueue: Ct.baseQueue, queue: Ct.queue, next: null }, Tt === null ? rt.memoizedState = Tt = e : Tt = Tt.next = e;
  }
  return Tt;
}
function $s(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ic(e) {
  var t = En(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = Ct, o = r.baseQueue, i = n.pending;
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
      var c = u.lane;
      if ((yo & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = p, s = r) : a = a.next = p, rt.lanes |= c, vo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, Bn(r, t.memoizedState) || (Gt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, rt.lanes |= i, vo |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Mc(e) {
  var t = En(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Bn(i, t.memoizedState) || (Gt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function lv() {
}
function av(e, t) {
  var n = rt, r = En(), o = t(), i = !Bn(r.memoizedState, o);
  if (i && (r.memoizedState = o, Gt = !0), r = r.queue, Yf(dv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Tt !== null && Tt.memoizedState.tag & 1) {
    if (n.flags |= 2048, js(9, cv.bind(null, n, r, o, t), void 0, null), Et === null) throw Error(H(349));
    yo & 30 || uv(n, t, o);
  }
  return o;
}
function uv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = rt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, rt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function cv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, fv(t) && pv(e);
}
function dv(e, t, n) {
  return n(function() {
    fv(t) && pv(e);
  });
}
function fv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Bn(e, n);
  } catch {
    return !0;
  }
}
function pv(e) {
  var t = gr(e, 1);
  t !== null && _n(t, e, 1, -1);
}
function Bm(e) {
  var t = Kn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: $s, lastRenderedState: e }, t.queue = e, e = e.dispatch = KS.bind(null, rt, e), [t.memoizedState, e];
}
function js(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = rt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, rt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function mv() {
  return En().memoizedState;
}
function Jl(e, t, n, r) {
  var o = Kn();
  rt.flags |= e, o.memoizedState = js(1 | t, n, void 0, r === void 0 ? null : r);
}
function tu(e, t, n, r) {
  var o = En();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ct !== null) {
    var s = Ct.memoizedState;
    if (i = s.destroy, r !== null && Hf(r, s.deps)) {
      o.memoizedState = js(t, n, i, r);
      return;
    }
  }
  rt.flags |= e, o.memoizedState = js(1 | t, n, i, r);
}
function Fm(e, t) {
  return Jl(8390656, 8, e, t);
}
function Yf(e, t) {
  return tu(2048, 8, e, t);
}
function hv(e, t) {
  return tu(4, 2, e, t);
}
function gv(e, t) {
  return tu(4, 4, e, t);
}
function yv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function vv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, tu(4, 4, yv.bind(null, t, e), n);
}
function Gf() {
}
function xv(e, t) {
  var n = En();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Sv(e, t) {
  var n = En();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function bv(e, t, n) {
  return yo & 21 ? (Bn(n, t) || (n = Ey(), rt.lanes |= n, vo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Gt = !0), e.memoizedState = n);
}
function HS(e, t) {
  var n = Be;
  Be = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Pc.transition;
  Pc.transition = {};
  try {
    e(!1), t();
  } finally {
    Be = n, Pc.transition = r;
  }
}
function wv() {
  return En().memoizedState;
}
function VS(e, t, n) {
  var r = Br(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Cv(e)) kv(t, n);
  else if (n = ov(e, t, n, r), n !== null) {
    var o = Ht();
    _n(n, e, r, o), Tv(n, t, r);
  }
}
function KS(e, t, n) {
  var r = Br(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cv(e)) kv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Bn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Bf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = ov(e, t, o, r), n !== null && (o = Ht(), _n(n, e, r, o), Tv(n, t, r));
  }
}
function Cv(e) {
  var t = e.alternate;
  return e === rt || t !== null && t === rt;
}
function kv(e, t) {
  ss = Pa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Tv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Tf(e, n);
  }
}
var Ia = { readContext: Tn, useCallback: Ot, useContext: Ot, useEffect: Ot, useImperativeHandle: Ot, useInsertionEffect: Ot, useLayoutEffect: Ot, useMemo: Ot, useReducer: Ot, useRef: Ot, useState: Ot, useDebugValue: Ot, useDeferredValue: Ot, useTransition: Ot, useMutableSource: Ot, useSyncExternalStore: Ot, useId: Ot, unstable_isNewReconciler: !1 }, YS = { readContext: Tn, useCallback: function(e, t) {
  return Kn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Tn, useEffect: Fm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Jl(
    4194308,
    4,
    yv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Jl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Jl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Kn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Kn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = VS.bind(null, rt, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Kn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Bm, useDebugValue: Gf, useDeferredValue: function(e) {
  return Kn().memoizedState = e;
}, useTransition: function() {
  var e = Bm(!1), t = e[0];
  return e = HS.bind(null, e[1]), Kn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = rt, o = Kn();
  if (et) {
    if (n === void 0) throw Error(H(407));
    n = n();
  } else {
    if (n = t(), Et === null) throw Error(H(349));
    yo & 30 || uv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Fm(dv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, js(9, cv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Kn(), t = Et.identifierPrefix;
  if (et) {
    var n = fr, r = dr;
    n = (r & ~(1 << 32 - zn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ms++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = US++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, GS = {
  readContext: Tn,
  useCallback: xv,
  useContext: Tn,
  useEffect: Yf,
  useImperativeHandle: vv,
  useInsertionEffect: hv,
  useLayoutEffect: gv,
  useMemo: Sv,
  useReducer: Ic,
  useRef: mv,
  useState: function() {
    return Ic($s);
  },
  useDebugValue: Gf,
  useDeferredValue: function(e) {
    var t = En();
    return bv(t, Ct.memoizedState, e);
  },
  useTransition: function() {
    var e = Ic($s)[0], t = En().memoizedState;
    return [e, t];
  },
  useMutableSource: lv,
  useSyncExternalStore: av,
  useId: wv,
  unstable_isNewReconciler: !1
}, QS = { readContext: Tn, useCallback: xv, useContext: Tn, useEffect: Yf, useImperativeHandle: vv, useInsertionEffect: hv, useLayoutEffect: gv, useMemo: Sv, useReducer: Mc, useRef: mv, useState: function() {
  return Mc($s);
}, useDebugValue: Gf, useDeferredValue: function(e) {
  var t = En();
  return Ct === null ? t.memoizedState = e : bv(t, Ct.memoizedState, e);
}, useTransition: function() {
  var e = Mc($s)[0], t = En().memoizedState;
  return [e, t];
}, useMutableSource: lv, useSyncExternalStore: av, useId: wv, unstable_isNewReconciler: !1 };
function An(e, t) {
  if (e && e.defaultProps) {
    t = it({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ed(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : it({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var nu = { isMounted: function(e) {
  return (e = e._reactInternals) ? To(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ht(), o = Br(e), i = pr(r, o);
  i.payload = t, n != null && (i.callback = n), t = zr(e, i, o), t !== null && (_n(t, e, o, r), ql(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ht(), o = Br(e), i = pr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = zr(e, i, o), t !== null && (_n(t, e, o, r), ql(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ht(), r = Br(e), o = pr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = zr(e, o, r), t !== null && (_n(t, e, r, n), ql(t, e, r));
} };
function Dm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ks(n, r) || !ks(o, i) : !0;
}
function Ev(e, t, n) {
  var r = !1, o = Ur, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Tn(i) : (o = Xt(t) ? ho : zt.current, r = t.contextTypes, i = (r = r != null) ? ui(e, o) : Ur), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = nu, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Wm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nu.enqueueReplaceState(t, t.state, null);
}
function Rd(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Ff(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Tn(i) : (i = Xt(t) ? ho : zt.current, o.context = ui(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ed(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && nu.enqueueReplaceState(o, o.state, null), Ea(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function pi(e, t) {
  try {
    var n = "", r = t;
    do
      n += C1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function $c(e, t, n) {
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
var XS = typeof WeakMap == "function" ? WeakMap : Map;
function Rv(e, t, n) {
  n = pr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    $a || ($a = !0, _d = r), Pd(e, t);
  }, n;
}
function Pv(e, t, n) {
  n = pr(-1, n), n.tag = 3;
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
    Pd(e, t), typeof r != "function" && (_r === null ? _r = /* @__PURE__ */ new Set([this]) : _r.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Um(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new XS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = cb.bind(null, e, t, n), t.then(e, e));
}
function Hm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pr(-1, 1), t.tag = 2, zr(n, t, 1))), n.lanes |= 1), e);
}
var qS = wr.ReactCurrentOwner, Gt = !1;
function Wt(e, t, n, r) {
  t.child = e === null ? rv(t, null, n, r) : di(t, e.child, n, r);
}
function Km(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ri(t, o), r = Vf(e, t, n, r, i, o), n = Kf(), e !== null && !Gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, yr(e, t, o)) : (et && n && Of(t), t.flags |= 1, Wt(e, t, r, o), t.child);
}
function Ym(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !np(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Iv(e, t, i, r, o)) : (e = ra(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ks, n(s, r) && e.ref === t.ref) return yr(e, t, o);
  }
  return t.flags |= 1, e = Fr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Iv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ks(i, r) && e.ref === t.ref) if (Gt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Gt = !0);
    else return t.lanes = e.lanes, yr(e, t, o);
  }
  return Id(e, t, n, r, o);
}
function Mv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qe(Zo, rn), rn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Qe(Zo, rn), rn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Qe(Zo, rn), rn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Qe(Zo, rn), rn |= r;
  return Wt(e, t, o, n), t.child;
}
function $v(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Id(e, t, n, r, o) {
  var i = Xt(n) ? ho : zt.current;
  return i = ui(t, i), ri(t, o), n = Vf(e, t, n, r, i, o), r = Kf(), e !== null && !Gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, yr(e, t, o)) : (et && r && Of(t), t.flags |= 1, Wt(e, t, n, o), t.child);
}
function Gm(e, t, n, r, o) {
  if (Xt(n)) {
    var i = !0;
    ba(t);
  } else i = !1;
  if (ri(t, o), t.stateNode === null) ea(e, t), Ev(t, n, r), Rd(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Tn(u) : (u = Xt(n) ? ho : zt.current, u = ui(t, u));
    var c = n.getDerivedStateFromProps, p = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Wm(t, s, r, u), Pr = !1;
    var v = t.memoizedState;
    s.state = v, Ea(t, r, s, o), a = t.memoizedState, l !== r || v !== a || Qt.current || Pr ? (typeof c == "function" && (Ed(t, n, c, r), a = t.memoizedState), (l = Pr || Dm(t, n, l, r, v, a, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, iv(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : An(t.type, l), s.props = u, p = t.pendingProps, v = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Tn(a) : (a = Xt(n) ? ho : zt.current, a = ui(t, a));
    var d = n.getDerivedStateFromProps;
    (c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || v !== a) && Wm(t, s, r, a), Pr = !1, v = t.memoizedState, s.state = v, Ea(t, r, s, o);
    var x = t.memoizedState;
    l !== p || v !== x || Qt.current || Pr ? (typeof d == "function" && (Ed(t, n, d, r), x = t.memoizedState), (u = Pr || Dm(t, n, u, r, v, x, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Md(e, t, n, r, i, o);
}
function Md(e, t, n, r, o, i) {
  $v(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Om(t, n, !1), yr(e, t, i);
  r = t.stateNode, qS.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = di(t, e.child, null, i), t.child = di(t, null, l, i)) : Wt(e, t, l, i), t.memoizedState = r.state, o && Om(t, n, !0), t.child;
}
function jv(e) {
  var t = e.stateNode;
  t.pendingContext ? jm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && jm(e, t.context, !1), Df(e, t.containerInfo);
}
function Qm(e, t, n, r, o) {
  return ci(), Nf(o), t.flags |= 256, Wt(e, t, n, r), t.child;
}
var $d = { dehydrated: null, treeContext: null, retryLane: 0 };
function jd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ov(e, t, n) {
  var r = t.pendingProps, o = nt.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Qe(nt, o & 1), e === null)
    return kd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = iu(s, r, 0, null), e = fo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = jd(n), t.memoizedState = $d, e) : Qf(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return ZS(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Fr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Fr(l, i) : (i = fo(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? jd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = $d, r;
  }
  return i = e.child, e = i.sibling, r = Fr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Qf(e, t) {
  return t = iu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function xl(e, t, n, r) {
  return r !== null && Nf(r), di(t, e.child, null, n), e = Qf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ZS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = $c(Error(H(422))), xl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = iu({ mode: "visible", children: r.children }, o, 0, null), i = fo(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && di(t, e.child, null, s), t.child.memoizedState = jd(s), t.memoizedState = $d, i);
  if (!(t.mode & 1)) return xl(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(H(419)), r = $c(i, r, void 0), xl(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, Gt || l) {
    if (r = Et, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, gr(e, o), _n(r, e, o, -1));
    }
    return tp(), r = $c(Error(H(421))), xl(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = db.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, ln = Lr(o.nextSibling), an = t, et = !0, Ln = null, e !== null && (yn[vn++] = dr, yn[vn++] = fr, yn[vn++] = go, dr = e.id, fr = e.overflow, go = t), t = Qf(t, r.children), t.flags |= 4096, t);
}
function Xm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Td(e.return, t, n);
}
function jc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Av(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Wt(e, t, r.children, n), r = nt.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Xm(e, n, t);
      else if (e.tag === 19) Xm(e, n, t);
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
  if (Qe(nt, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ra(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), jc(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ra(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      jc(t, !0, n, null, i);
      break;
    case "together":
      jc(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ea(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function yr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), vo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (e = t.child, n = Fr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Fr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function JS(e, t, n) {
  switch (t.tag) {
    case 3:
      jv(t), ci();
      break;
    case 5:
      sv(t);
      break;
    case 1:
      Xt(t.type) && ba(t);
      break;
    case 4:
      Df(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Qe(ka, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Qe(nt, nt.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ov(e, t, n) : (Qe(nt, nt.current & 1), e = yr(e, t, n), e !== null ? e.sibling : null);
      Qe(nt, nt.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Av(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Qe(nt, nt.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Mv(e, t, n);
  }
  return yr(e, t, n);
}
var Nv, Od, Lv, zv;
Nv = function(e, t) {
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
Lv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, ao(Jn.current);
    var i = null;
    switch (n) {
      case "input":
        o = td(e, o), r = td(e, r), i = [];
        break;
      case "select":
        o = it({}, o, { value: void 0 }), r = it({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = od(e, o), r = od(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xa);
    }
    sd(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ys.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ys.hasOwnProperty(u) ? (a != null && u === "onScroll" && qe("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
zv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _i(e, t) {
  if (!et) switch (e.tailMode) {
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
function At(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function eb(e, t, n) {
  var r = t.pendingProps;
  switch (Af(t), t.tag) {
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
      return At(t), null;
    case 1:
      return Xt(t.type) && Sa(), At(t), null;
    case 3:
      return r = t.stateNode, fi(), Ze(Qt), Ze(zt), Uf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (yl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ln !== null && (Dd(Ln), Ln = null))), Od(e, t), At(t), null;
    case 5:
      Wf(t);
      var o = ao(Is.current);
      if (n = t.type, e !== null && t.stateNode != null) Lv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return At(t), null;
        }
        if (e = ao(Jn.current), yl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Qn] = t, r[Rs] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              qe("cancel", r), qe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              qe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Zi.length; o++) qe(Zi[o], r);
              break;
            case "source":
              qe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              qe(
                "error",
                r
              ), qe("load", r);
              break;
            case "details":
              qe("toggle", r);
              break;
            case "input":
              im(r, i), qe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, qe("invalid", r);
              break;
            case "textarea":
              lm(r, i), qe("invalid", r);
          }
          sd(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && gl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && gl(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : ys.hasOwnProperty(s) && l != null && s === "onScroll" && qe("scroll", r);
          }
          switch (n) {
            case "input":
              al(r), sm(r, i, !0);
              break;
            case "textarea":
              al(r), am(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = xa);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = dy(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Qn] = t, e[Rs] = r, Nv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = ld(n, r), n) {
              case "dialog":
                qe("cancel", e), qe("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                qe("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Zi.length; o++) qe(Zi[o], e);
                o = r;
                break;
              case "source":
                qe("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                qe(
                  "error",
                  e
                ), qe("load", e), o = r;
                break;
              case "details":
                qe("toggle", e), o = r;
                break;
              case "input":
                im(e, r), o = td(e, r), qe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = it({}, r, { value: void 0 }), qe("invalid", e);
                break;
              case "textarea":
                lm(e, r), o = od(e, r), qe("invalid", e);
                break;
              default:
                o = r;
            }
            sd(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? my(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && fy(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && vs(e, a) : typeof a == "number" && vs(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ys.hasOwnProperty(i) ? a != null && i === "onScroll" && qe("scroll", e) : a != null && xf(e, i, a, s));
            }
            switch (n) {
              case "input":
                al(e), sm(e, r, !1);
                break;
              case "textarea":
                al(e), am(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Jo(e, !!r.multiple, i, !1) : r.defaultValue != null && Jo(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = xa);
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
      return At(t), null;
    case 6:
      if (e && t.stateNode != null) zv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (n = ao(Is.current), ao(Jn.current), yl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Qn] = t, (i = r.nodeValue !== n) && (e = an, e !== null)) switch (e.tag) {
            case 3:
              gl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Qn] = t, t.stateNode = r;
      }
      return At(t), null;
    case 13:
      if (Ze(nt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (et && ln !== null && t.mode & 1 && !(t.flags & 128)) tv(), ci(), t.flags |= 98560, i = !1;
        else if (i = yl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(H(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(H(317));
            i[Qn] = t;
          } else ci(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          At(t), i = !1;
        } else Ln !== null && (Dd(Ln), Ln = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || nt.current & 1 ? kt === 0 && (kt = 3) : tp())), t.updateQueue !== null && (t.flags |= 4), At(t), null);
    case 4:
      return fi(), Od(e, t), e === null && Ts(t.stateNode.containerInfo), At(t), null;
    case 10:
      return _f(t.type._context), At(t), null;
    case 17:
      return Xt(t.type) && Sa(), At(t), null;
    case 19:
      if (Ze(nt), i = t.memoizedState, i === null) return At(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) _i(i, !1);
      else {
        if (kt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Ra(e), s !== null) {
            for (t.flags |= 128, _i(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Qe(nt, nt.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && pt() > mi && (t.flags |= 128, r = !0, _i(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ra(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _i(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !et) return At(t), null;
        } else 2 * pt() - i.renderingStartTime > mi && n !== 1073741824 && (t.flags |= 128, r = !0, _i(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = pt(), t.sibling = null, n = nt.current, Qe(nt, r ? n & 1 | 2 : n & 1), t) : (At(t), null);
    case 22:
    case 23:
      return ep(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? rn & 1073741824 && (At(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : At(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function tb(e, t) {
  switch (Af(t), t.tag) {
    case 1:
      return Xt(t.type) && Sa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return fi(), Ze(Qt), Ze(zt), Uf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Wf(t), null;
    case 13:
      if (Ze(nt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(H(340));
        ci();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Ze(nt), null;
    case 4:
      return fi(), null;
    case 10:
      return _f(t.type._context), null;
    case 22:
    case 23:
      return ep(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sl = !1, Lt = !1, nb = typeof WeakSet == "function" ? WeakSet : Set, J = null;
function qo(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ut(e, t, r);
  }
  else n.current = null;
}
function Ad(e, t, n) {
  try {
    n();
  } catch (r) {
    ut(e, t, r);
  }
}
var qm = !1;
function rb(e, t) {
  if (yd = ga, e = Wy(), jf(e)) {
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
        var s = 0, l = -1, a = -1, u = 0, c = 0, p = e, v = null;
        t: for (; ; ) {
          for (var d; p !== n || o !== 0 && p.nodeType !== 3 || (l = s + o), p !== i || r !== 0 && p.nodeType !== 3 || (a = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (d = p.firstChild) !== null; )
            v = p, p = d;
          for (; ; ) {
            if (p === e) break t;
            if (v === n && ++u === o && (l = s), v === i && ++c === r && (a = s), (d = p.nextSibling) !== null) break;
            p = v, v = p.parentNode;
          }
          p = d;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vd = { focusedElem: e, selectionRange: n }, ga = !1, J = t; J !== null; ) if (t = J, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, J = e;
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
            var b = x.memoizedProps, C = x.memoizedState, y = t.stateNode, m = y.getSnapshotBeforeUpdate(t.elementType === t.type ? b : An(t.type, b), C);
            y.__reactInternalSnapshotBeforeUpdate = m;
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
          throw Error(H(163));
      }
    } catch (w) {
      ut(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, J = e;
      break;
    }
    J = t.return;
  }
  return x = qm, qm = !1, x;
}
function ls(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Ad(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ru(e, t) {
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
function Nd(e) {
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
function _v(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, _v(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Qn], delete t[Rs], delete t[bd], delete t[BS], delete t[FS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Bv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zm(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bv(e.return)) return null;
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xa));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ld(e, t, n), e = e.sibling; e !== null; ) Ld(e, t, n), e = e.sibling;
}
function zd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (zd(e, t, n), e = e.sibling; e !== null; ) zd(e, t, n), e = e.sibling;
}
var Pt = null, Nn = !1;
function Tr(e, t, n) {
  for (n = n.child; n !== null; ) Fv(e, t, n), n = n.sibling;
}
function Fv(e, t, n) {
  if (Zn && typeof Zn.onCommitFiberUnmount == "function") try {
    Zn.onCommitFiberUnmount(Qa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Lt || qo(n, t);
    case 6:
      var r = Pt, o = Nn;
      Pt = null, Tr(e, t, n), Pt = r, Nn = o, Pt !== null && (Nn ? (e = Pt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pt.removeChild(n.stateNode));
      break;
    case 18:
      Pt !== null && (Nn ? (e = Pt, n = n.stateNode, e.nodeType === 8 ? Tc(e.parentNode, n) : e.nodeType === 1 && Tc(e, n), ws(e)) : Tc(Pt, n.stateNode));
      break;
    case 4:
      r = Pt, o = Nn, Pt = n.stateNode.containerInfo, Nn = !0, Tr(e, t, n), Pt = r, Nn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Lt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Ad(n, t, s), o = o.next;
        } while (o !== r);
      }
      Tr(e, t, n);
      break;
    case 1:
      if (!Lt && (qo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        ut(n, t, l);
      }
      Tr(e, t, n);
      break;
    case 21:
      Tr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Lt = (r = Lt) || n.memoizedState !== null, Tr(e, t, n), Lt = r) : Tr(e, t, n);
      break;
    default:
      Tr(e, t, n);
  }
}
function Jm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nb()), t.forEach(function(r) {
      var o = fb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function $n(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Pt = l.stateNode, Nn = !1;
            break e;
          case 3:
            Pt = l.stateNode.containerInfo, Nn = !0;
            break e;
          case 4:
            Pt = l.stateNode.containerInfo, Nn = !0;
            break e;
        }
        l = l.return;
      }
      if (Pt === null) throw Error(H(160));
      Fv(i, s, o), Pt = null, Nn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      ut(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Dv(t, e), t = t.sibling;
}
function Dv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ($n(t, e), Un(e), r & 4) {
        try {
          ls(3, e, e.return), ru(3, e);
        } catch (b) {
          ut(e, e.return, b);
        }
        try {
          ls(5, e, e.return);
        } catch (b) {
          ut(e, e.return, b);
        }
      }
      break;
    case 1:
      $n(t, e), Un(e), r & 512 && n !== null && qo(n, n.return);
      break;
    case 5:
      if ($n(t, e), Un(e), r & 512 && n !== null && qo(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          vs(o, "");
        } catch (b) {
          ut(e, e.return, b);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && uy(o, i), ld(l, s);
          var u = ld(l, i);
          for (s = 0; s < a.length; s += 2) {
            var c = a[s], p = a[s + 1];
            c === "style" ? my(o, p) : c === "dangerouslySetInnerHTML" ? fy(o, p) : c === "children" ? vs(o, p) : xf(o, c, p, u);
          }
          switch (l) {
            case "input":
              nd(o, i);
              break;
            case "textarea":
              cy(o, i);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var d = i.value;
              d != null ? Jo(o, !!i.multiple, d, !1) : v !== !!i.multiple && (i.defaultValue != null ? Jo(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Jo(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Rs] = i;
        } catch (b) {
          ut(e, e.return, b);
        }
      }
      break;
    case 6:
      if ($n(t, e), Un(e), r & 4) {
        if (e.stateNode === null) throw Error(H(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (b) {
          ut(e, e.return, b);
        }
      }
      break;
    case 3:
      if ($n(t, e), Un(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ws(t.containerInfo);
      } catch (b) {
        ut(e, e.return, b);
      }
      break;
    case 4:
      $n(t, e), Un(e);
      break;
    case 13:
      $n(t, e), Un(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Zf = pt())), r & 4 && Jm(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Lt = (u = Lt) || c, $n(t, e), Lt = u) : $n(t, e), Un(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (J = e, c = e.child; c !== null; ) {
          for (p = J = c; J !== null; ) {
            switch (v = J, d = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ls(4, v, v.return);
                break;
              case 1:
                qo(v, v.return);
                var x = v.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (b) {
                    ut(r, n, b);
                  }
                }
                break;
              case 5:
                qo(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  th(p);
                  continue;
                }
            }
            d !== null ? (d.return = v, J = d) : th(p);
          }
          c = c.sibling;
        }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                o = p.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode, a = p.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = py("display", s));
              } catch (b) {
                ut(e, e.return, b);
              }
            }
          } else if (p.tag === 6) {
            if (c === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (b) {
              ut(e, e.return, b);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), p = p.return;
          }
          c === p && (c = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      $n(t, e), Un(e), r & 4 && Jm(e);
      break;
    case 21:
      break;
    default:
      $n(
        t,
        e
      ), Un(e);
  }
}
function Un(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(H(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (vs(o, ""), r.flags &= -33);
          var i = Zm(e);
          zd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Zm(e);
          Ld(e, l, s);
          break;
        default:
          throw Error(H(161));
      }
    } catch (a) {
      ut(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ob(e, t, n) {
  J = e, Wv(e);
}
function Wv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; J !== null; ) {
    var o = J, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Sl;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Lt;
        l = Sl;
        var u = Lt;
        if (Sl = s, (Lt = a) && !u) for (J = o; J !== null; ) s = J, a = s.child, s.tag === 22 && s.memoizedState !== null ? nh(o) : a !== null ? (a.return = s, J = a) : nh(o);
        for (; i !== null; ) J = i, Wv(i), i = i.sibling;
        J = o, Sl = l, Lt = u;
      }
      eh(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, J = i) : eh(e);
  }
}
function eh(e) {
  for (; J !== null; ) {
    var t = J;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Lt || ru(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Lt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : An(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && _m(t, i, r);
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
              _m(t, s, n);
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
                var c = u.memoizedState;
                if (c !== null) {
                  var p = c.dehydrated;
                  p !== null && ws(p);
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
            throw Error(H(163));
        }
        Lt || t.flags & 512 && Nd(t);
      } catch (v) {
        ut(t, t.return, v);
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
function th(e) {
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
function nh(e) {
  for (; J !== null; ) {
    var t = J;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ru(4, t);
          } catch (a) {
            ut(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ut(t, o, a);
            }
          }
          var i = t.return;
          try {
            Nd(t);
          } catch (a) {
            ut(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Nd(t);
          } catch (a) {
            ut(t, s, a);
          }
      }
    } catch (a) {
      ut(t, t.return, a);
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
var ib = Math.ceil, Ma = wr.ReactCurrentDispatcher, Xf = wr.ReactCurrentOwner, Cn = wr.ReactCurrentBatchConfig, $e = 0, Et = null, bt = null, Mt = 0, rn = 0, Zo = Yr(0), kt = 0, Os = null, vo = 0, ou = 0, qf = 0, as = null, Yt = null, Zf = 0, mi = 1 / 0, lr = null, $a = !1, _d = null, _r = null, bl = !1, jr = null, ja = 0, us = 0, Bd = null, ta = -1, na = 0;
function Ht() {
  return $e & 6 ? pt() : ta !== -1 ? ta : ta = pt();
}
function Br(e) {
  return e.mode & 1 ? $e & 2 && Mt !== 0 ? Mt & -Mt : WS.transition !== null ? (na === 0 && (na = Ey()), na) : (e = Be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Oy(e.type)), e) : 1;
}
function _n(e, t, n, r) {
  if (50 < us) throw us = 0, Bd = null, Error(H(185));
  Ks(e, n, r), (!($e & 2) || e !== Et) && (e === Et && (!($e & 2) && (ou |= n), kt === 4 && Mr(e, Mt)), qt(e, r), n === 1 && $e === 0 && !(t.mode & 1) && (mi = pt() + 500, eu && Gr()));
}
function qt(e, t) {
  var n = e.callbackNode;
  W1(e, t);
  var r = ha(e, e === Et ? Mt : 0);
  if (r === 0) n !== null && dm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && dm(n), t === 1) e.tag === 0 ? DS(rh.bind(null, e)) : Zy(rh.bind(null, e)), zS(function() {
      !($e & 6) && Gr();
    }), n = null;
    else {
      switch (Ry(r)) {
        case 1:
          n = kf;
          break;
        case 4:
          n = ky;
          break;
        case 16:
          n = ma;
          break;
        case 536870912:
          n = Ty;
          break;
        default:
          n = ma;
      }
      n = Xv(n, Uv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Uv(e, t) {
  if (ta = -1, na = 0, $e & 6) throw Error(H(327));
  var n = e.callbackNode;
  if (oi() && e.callbackNode !== n) return null;
  var r = ha(e, e === Et ? Mt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oa(e, r);
  else {
    t = r;
    var o = $e;
    $e |= 2;
    var i = Vv();
    (Et !== e || Mt !== t) && (lr = null, mi = pt() + 500, co(e, t));
    do
      try {
        ab();
        break;
      } catch (l) {
        Hv(e, l);
      }
    while (!0);
    zf(), Ma.current = i, $e = o, bt !== null ? t = 0 : (Et = null, Mt = 0, t = kt);
  }
  if (t !== 0) {
    if (t === 2 && (o = fd(e), o !== 0 && (r = o, t = Fd(e, o))), t === 1) throw n = Os, co(e, 0), Mr(e, r), qt(e, pt()), n;
    if (t === 6) Mr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !sb(o) && (t = Oa(e, r), t === 2 && (i = fd(e), i !== 0 && (r = i, t = Fd(e, i))), t === 1)) throw n = Os, co(e, 0), Mr(e, r), qt(e, pt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          oo(e, Yt, lr);
          break;
        case 3:
          if (Mr(e, r), (r & 130023424) === r && (t = Zf + 500 - pt(), 10 < t)) {
            if (ha(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ht(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Sd(oo.bind(null, e, Yt, lr), t);
            break;
          }
          oo(e, Yt, lr);
          break;
        case 4:
          if (Mr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - zn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = pt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ib(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Sd(oo.bind(null, e, Yt, lr), r);
            break;
          }
          oo(e, Yt, lr);
          break;
        case 5:
          oo(e, Yt, lr);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return qt(e, pt()), e.callbackNode === n ? Uv.bind(null, e) : null;
}
function Fd(e, t) {
  var n = as;
  return e.current.memoizedState.isDehydrated && (co(e, t).flags |= 256), e = Oa(e, t), e !== 2 && (t = Yt, Yt = n, t !== null && Dd(t)), e;
}
function Dd(e) {
  Yt === null ? Yt = e : Yt.push.apply(Yt, e);
}
function sb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Bn(i(), o)) return !1;
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
function Mr(e, t) {
  for (t &= ~qf, t &= ~ou, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - zn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function rh(e) {
  if ($e & 6) throw Error(H(327));
  oi();
  var t = ha(e, 0);
  if (!(t & 1)) return qt(e, pt()), null;
  var n = Oa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fd(e);
    r !== 0 && (t = r, n = Fd(e, r));
  }
  if (n === 1) throw n = Os, co(e, 0), Mr(e, t), qt(e, pt()), n;
  if (n === 6) throw Error(H(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, oo(e, Yt, lr), qt(e, pt()), null;
}
function Jf(e, t) {
  var n = $e;
  $e |= 1;
  try {
    return e(t);
  } finally {
    $e = n, $e === 0 && (mi = pt() + 500, eu && Gr());
  }
}
function xo(e) {
  jr !== null && jr.tag === 0 && !($e & 6) && oi();
  var t = $e;
  $e |= 1;
  var n = Cn.transition, r = Be;
  try {
    if (Cn.transition = null, Be = 1, e) return e();
  } finally {
    Be = r, Cn.transition = n, $e = t, !($e & 6) && Gr();
  }
}
function ep() {
  rn = Zo.current, Ze(Zo);
}
function co(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, LS(n)), bt !== null) for (n = bt.return; n !== null; ) {
    var r = n;
    switch (Af(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Sa();
        break;
      case 3:
        fi(), Ze(Qt), Ze(zt), Uf();
        break;
      case 5:
        Wf(r);
        break;
      case 4:
        fi();
        break;
      case 13:
        Ze(nt);
        break;
      case 19:
        Ze(nt);
        break;
      case 10:
        _f(r.type._context);
        break;
      case 22:
      case 23:
        ep();
    }
    n = n.return;
  }
  if (Et = e, bt = e = Fr(e.current, null), Mt = rn = t, kt = 0, Os = null, qf = ou = vo = 0, Yt = as = null, lo !== null) {
    for (t = 0; t < lo.length; t++) if (n = lo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    lo = null;
  }
  return e;
}
function Hv(e, t) {
  do {
    var n = bt;
    try {
      if (zf(), Zl.current = Ia, Pa) {
        for (var r = rt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Pa = !1;
      }
      if (yo = 0, Tt = Ct = rt = null, ss = !1, Ms = 0, Xf.current = null, n === null || n.return === null) {
        kt = 1, Os = t, bt = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Mt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = l, p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = c.alternate;
            v ? (c.updateQueue = v.updateQueue, c.memoizedState = v.memoizedState, c.lanes = v.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var d = Hm(s);
          if (d !== null) {
            d.flags &= -257, Vm(d, s, l, i, t), d.mode & 1 && Um(i, u, t), t = d, a = u;
            var x = t.updateQueue;
            if (x === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Um(i, u, t), tp();
              break e;
            }
            a = Error(H(426));
          }
        } else if (et && l.mode & 1) {
          var C = Hm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Vm(C, s, l, i, t), Nf(pi(a, l));
            break e;
          }
        }
        i = a = pi(a, l), kt !== 4 && (kt = 2), as === null ? as = [i] : as.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = Rv(i, a, t);
              zm(i, y);
              break e;
            case 1:
              l = a;
              var m = i.type, S = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (_r === null || !_r.has(S)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Pv(i, l, t);
                zm(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Yv(n);
    } catch (T) {
      t = T, bt === n && n !== null && (bt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Vv() {
  var e = Ma.current;
  return Ma.current = Ia, e === null ? Ia : e;
}
function tp() {
  (kt === 0 || kt === 3 || kt === 2) && (kt = 4), Et === null || !(vo & 268435455) && !(ou & 268435455) || Mr(Et, Mt);
}
function Oa(e, t) {
  var n = $e;
  $e |= 2;
  var r = Vv();
  (Et !== e || Mt !== t) && (lr = null, co(e, t));
  do
    try {
      lb();
      break;
    } catch (o) {
      Hv(e, o);
    }
  while (!0);
  if (zf(), $e = n, Ma.current = r, bt !== null) throw Error(H(261));
  return Et = null, Mt = 0, kt;
}
function lb() {
  for (; bt !== null; ) Kv(bt);
}
function ab() {
  for (; bt !== null && !O1(); ) Kv(bt);
}
function Kv(e) {
  var t = Qv(e.alternate, e, rn);
  e.memoizedProps = e.pendingProps, t === null ? Yv(e) : bt = t, Xf.current = null;
}
function Yv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = tb(n, t), n !== null) {
        n.flags &= 32767, bt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        kt = 6, bt = null;
        return;
      }
    } else if (n = eb(n, t, rn), n !== null) {
      bt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      bt = t;
      return;
    }
    bt = t = e;
  } while (t !== null);
  kt === 0 && (kt = 5);
}
function oo(e, t, n) {
  var r = Be, o = Cn.transition;
  try {
    Cn.transition = null, Be = 1, ub(e, t, n, r);
  } finally {
    Cn.transition = o, Be = r;
  }
  return null;
}
function ub(e, t, n, r) {
  do
    oi();
  while (jr !== null);
  if ($e & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(H(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (U1(e, i), e === Et && (bt = Et = null, Mt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || bl || (bl = !0, Xv(ma, function() {
    return oi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Cn.transition, Cn.transition = null;
    var s = Be;
    Be = 1;
    var l = $e;
    $e |= 4, Xf.current = null, rb(e, n), Dv(n, e), IS(vd), ga = !!yd, vd = yd = null, e.current = n, ob(n), A1(), $e = l, Be = s, Cn.transition = i;
  } else e.current = n;
  if (bl && (bl = !1, jr = e, ja = o), i = e.pendingLanes, i === 0 && (_r = null), z1(n.stateNode), qt(e, pt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if ($a) throw $a = !1, e = _d, _d = null, e;
  return ja & 1 && e.tag !== 0 && oi(), i = e.pendingLanes, i & 1 ? e === Bd ? us++ : (us = 0, Bd = e) : us = 0, Gr(), null;
}
function oi() {
  if (jr !== null) {
    var e = Ry(ja), t = Cn.transition, n = Be;
    try {
      if (Cn.transition = null, Be = 16 > e ? 16 : e, jr === null) var r = !1;
      else {
        if (e = jr, jr = null, ja = 0, $e & 6) throw Error(H(331));
        var o = $e;
        for ($e |= 4, J = e.current; J !== null; ) {
          var i = J, s = i.child;
          if (J.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (J = u; J !== null; ) {
                  var c = J;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ls(8, c, i);
                  }
                  var p = c.child;
                  if (p !== null) p.return = c, J = p;
                  else for (; J !== null; ) {
                    c = J;
                    var v = c.sibling, d = c.return;
                    if (_v(c), c === u) {
                      J = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = d, J = v;
                      break;
                    }
                    J = d;
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
                ls(9, i, i.return);
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, J = y;
              break e;
            }
            J = i.return;
          }
        }
        var m = e.current;
        for (J = m; J !== null; ) {
          s = J;
          var S = s.child;
          if (s.subtreeFlags & 2064 && S !== null) S.return = s, J = S;
          else e: for (s = m; J !== null; ) {
            if (l = J, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  ru(9, l);
              }
            } catch (T) {
              ut(l, l.return, T);
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
        if ($e = o, Gr(), Zn && typeof Zn.onPostCommitFiberRoot == "function") try {
          Zn.onPostCommitFiberRoot(Qa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Be = n, Cn.transition = t;
    }
  }
  return !1;
}
function oh(e, t, n) {
  t = pi(n, t), t = Rv(e, t, 1), e = zr(e, t, 1), t = Ht(), e !== null && (Ks(e, 1, t), qt(e, t));
}
function ut(e, t, n) {
  if (e.tag === 3) oh(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      oh(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_r === null || !_r.has(r))) {
        e = pi(n, e), e = Pv(t, e, 1), t = zr(t, e, 1), e = Ht(), t !== null && (Ks(t, 1, e), qt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function cb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ht(), e.pingedLanes |= e.suspendedLanes & n, Et === e && (Mt & n) === n && (kt === 4 || kt === 3 && (Mt & 130023424) === Mt && 500 > pt() - Zf ? co(e, 0) : qf |= n), qt(e, t);
}
function Gv(e, t) {
  t === 0 && (e.mode & 1 ? (t = dl, dl <<= 1, !(dl & 130023424) && (dl = 4194304)) : t = 1);
  var n = Ht();
  e = gr(e, t), e !== null && (Ks(e, t, n), qt(e, n));
}
function db(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Gv(e, n);
}
function fb(e, t) {
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
      throw Error(H(314));
  }
  r !== null && r.delete(t), Gv(e, n);
}
var Qv;
Qv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Qt.current) Gt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Gt = !1, JS(e, t, n);
    Gt = !!(e.flags & 131072);
  }
  else Gt = !1, et && t.flags & 1048576 && Jy(t, Ca, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ea(e, t), e = t.pendingProps;
      var o = ui(t, zt.current);
      ri(t, n), o = Vf(null, t, r, e, o, n);
      var i = Kf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xt(r) ? (i = !0, ba(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ff(t), o.updater = nu, t.stateNode = o, o._reactInternals = t, Rd(t, r, e, n), t = Md(null, t, r, !0, i, n)) : (t.tag = 0, et && i && Of(t), Wt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ea(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = mb(r), e = An(r, e), o) {
          case 0:
            t = Id(null, t, r, e, n);
            break e;
          case 1:
            t = Gm(null, t, r, e, n);
            break e;
          case 11:
            t = Km(null, t, r, e, n);
            break e;
          case 14:
            t = Ym(null, t, r, An(r.type, e), n);
            break e;
        }
        throw Error(H(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : An(r, o), Id(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : An(r, o), Gm(e, t, r, o, n);
    case 3:
      e: {
        if (jv(t), e === null) throw Error(H(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, iv(e, t), Ea(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = pi(Error(H(423)), t), t = Qm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = pi(Error(H(424)), t), t = Qm(e, t, r, n, o);
          break e;
        } else for (ln = Lr(t.stateNode.containerInfo.firstChild), an = t, et = !0, Ln = null, n = rv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ci(), r === o) {
            t = yr(e, t, n);
            break e;
          }
          Wt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return sv(t), e === null && kd(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, xd(r, o) ? s = null : i !== null && xd(r, i) && (t.flags |= 32), $v(e, t), Wt(e, t, s, n), t.child;
    case 6:
      return e === null && kd(t), null;
    case 13:
      return Ov(e, t, n);
    case 4:
      return Df(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = di(t, null, r, n) : Wt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : An(r, o), Km(e, t, r, o, n);
    case 7:
      return Wt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Wt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Wt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Qe(ka, r._currentValue), r._currentValue = s, i !== null) if (Bn(i.value, s)) {
          if (i.children === o.children && !Qt.current) {
            t = yr(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = pr(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Td(
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
            if (s = i.return, s === null) throw Error(H(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Td(s, n, t), s = i.sibling;
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
        Wt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, ri(t, n), o = Tn(o), r = r(o), t.flags |= 1, Wt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = An(r, t.pendingProps), o = An(r.type, o), Ym(e, t, r, o, n);
    case 15:
      return Iv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : An(r, o), ea(e, t), t.tag = 1, Xt(r) ? (e = !0, ba(t)) : e = !1, ri(t, n), Ev(t, r, o), Rd(t, r, o, n), Md(null, t, r, !0, e, n);
    case 19:
      return Av(e, t, n);
    case 22:
      return Mv(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function Xv(e, t) {
  return Cy(e, t);
}
function pb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function bn(e, t, n, r) {
  return new pb(e, t, n, r);
}
function np(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function mb(e) {
  if (typeof e == "function") return np(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === bf) return 11;
    if (e === wf) return 14;
  }
  return 2;
}
function Fr(e, t) {
  var n = e.alternate;
  return n === null ? (n = bn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ra(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") np(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Wo:
      return fo(n.children, o, i, t);
    case Sf:
      s = 8, o |= 8;
      break;
    case qc:
      return e = bn(12, n, t, o | 2), e.elementType = qc, e.lanes = i, e;
    case Zc:
      return e = bn(13, n, t, o), e.elementType = Zc, e.lanes = i, e;
    case Jc:
      return e = bn(19, n, t, o), e.elementType = Jc, e.lanes = i, e;
    case sy:
      return iu(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case oy:
          s = 10;
          break e;
        case iy:
          s = 9;
          break e;
        case bf:
          s = 11;
          break e;
        case wf:
          s = 14;
          break e;
        case Rr:
          s = 16, r = null;
          break e;
      }
      throw Error(H(130, e == null ? e : typeof e, ""));
  }
  return t = bn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function fo(e, t, n, r) {
  return e = bn(7, e, r, t), e.lanes = n, e;
}
function iu(e, t, n, r) {
  return e = bn(22, e, r, t), e.elementType = sy, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Oc(e, t, n) {
  return e = bn(6, e, null, t), e.lanes = n, e;
}
function Ac(e, t, n) {
  return t = bn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function hb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mc(0), this.expirationTimes = mc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mc(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function rp(e, t, n, r, o, i, s, l, a) {
  return e = new hb(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = bn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ff(i), e;
}
function gb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Do, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function qv(e) {
  if (!e) return Ur;
  e = e._reactInternals;
  e: {
    if (To(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(H(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xt(n)) return qy(e, n, t);
  }
  return t;
}
function Zv(e, t, n, r, o, i, s, l, a) {
  return e = rp(n, r, !0, e, o, i, s, l, a), e.context = qv(null), n = e.current, r = Ht(), o = Br(n), i = pr(r, o), i.callback = t ?? null, zr(n, i, o), e.current.lanes = o, Ks(e, o, r), qt(e, r), e;
}
function su(e, t, n, r) {
  var o = t.current, i = Ht(), s = Br(o);
  return n = qv(n), t.context === null ? t.context = n : t.pendingContext = n, t = pr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = zr(o, t, s), e !== null && (_n(e, o, s, i), ql(e, o, s)), s;
}
function Aa(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ih(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function op(e, t) {
  ih(e, t), (e = e.alternate) && ih(e, t);
}
function yb() {
  return null;
}
var Jv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ip(e) {
  this._internalRoot = e;
}
lu.prototype.render = ip.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  su(e, t, null, null);
};
lu.prototype.unmount = ip.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xo(function() {
      su(null, e, null, null);
    }), t[hr] = null;
  }
};
function lu(e) {
  this._internalRoot = e;
}
lu.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = My();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ir.length && t !== 0 && t < Ir[n].priority; n++) ;
    Ir.splice(n, 0, e), n === 0 && jy(e);
  }
};
function sp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function au(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function sh() {
}
function vb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Aa(s);
        i.call(u);
      };
    }
    var s = Zv(t, r, e, 0, null, !1, !1, "", sh);
    return e._reactRootContainer = s, e[hr] = s.current, Ts(e.nodeType === 8 ? e.parentNode : e), xo(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Aa(a);
      l.call(u);
    };
  }
  var a = rp(e, 0, !1, null, null, !1, !1, "", sh);
  return e._reactRootContainer = a, e[hr] = a.current, Ts(e.nodeType === 8 ? e.parentNode : e), xo(function() {
    su(t, a, n, r);
  }), a;
}
function uu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = Aa(s);
        l.call(a);
      };
    }
    su(t, s, e, o);
  } else s = vb(n, t, e, o, r);
  return Aa(s);
}
Py = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qi(t.pendingLanes);
        n !== 0 && (Tf(t, n | 1), qt(t, pt()), !($e & 6) && (mi = pt() + 500, Gr()));
      }
      break;
    case 13:
      xo(function() {
        var r = gr(e, 1);
        if (r !== null) {
          var o = Ht();
          _n(r, e, 1, o);
        }
      }), op(e, 1);
  }
};
Ef = function(e) {
  if (e.tag === 13) {
    var t = gr(e, 134217728);
    if (t !== null) {
      var n = Ht();
      _n(t, e, 134217728, n);
    }
    op(e, 134217728);
  }
};
Iy = function(e) {
  if (e.tag === 13) {
    var t = Br(e), n = gr(e, t);
    if (n !== null) {
      var r = Ht();
      _n(n, e, t, r);
    }
    op(e, t);
  }
};
My = function() {
  return Be;
};
$y = function(e, t) {
  var n = Be;
  try {
    return Be = e, t();
  } finally {
    Be = n;
  }
};
ud = function(e, t, n) {
  switch (t) {
    case "input":
      if (nd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ja(r);
            if (!o) throw Error(H(90));
            ay(r), nd(r, o);
          }
        }
      }
      break;
    case "textarea":
      cy(e, n);
      break;
    case "select":
      t = n.value, t != null && Jo(e, !!n.multiple, t, !1);
  }
};
yy = Jf;
vy = xo;
var xb = { usingClientEntryPoint: !1, Events: [Gs, Ko, Ja, hy, gy, Jf] }, Bi = { findFiberByHostInstance: so, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sb = { bundleType: Bi.bundleType, version: Bi.version, rendererPackageName: Bi.rendererPackageName, rendererConfig: Bi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: wr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = by(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Bi.findFiberByHostInstance || yb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber) try {
    Qa = wl.inject(Sb), Zn = wl;
  } catch {
  }
}
fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xb;
fn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sp(t)) throw Error(H(200));
  return gb(e, t, null, n);
};
fn.createRoot = function(e, t) {
  if (!sp(e)) throw Error(H(299));
  var n = !1, r = "", o = Jv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = rp(e, 1, !1, null, null, n, !1, r, o), e[hr] = t.current, Ts(e.nodeType === 8 ? e.parentNode : e), new ip(t);
};
fn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(H(188)) : (e = Object.keys(e).join(","), Error(H(268, e)));
  return e = by(t), e = e === null ? null : e.stateNode, e;
};
fn.flushSync = function(e) {
  return xo(e);
};
fn.hydrate = function(e, t, n) {
  if (!au(t)) throw Error(H(200));
  return uu(null, e, t, !0, n);
};
fn.hydrateRoot = function(e, t, n) {
  if (!sp(e)) throw Error(H(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Jv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Zv(t, null, e, 1, n ?? null, o, !1, i, s), e[hr] = t.current, Ts(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new lu(t);
};
fn.render = function(e, t, n) {
  if (!au(t)) throw Error(H(200));
  return uu(null, e, t, !1, n);
};
fn.unmountComponentAtNode = function(e) {
  if (!au(e)) throw Error(H(40));
  return e._reactRootContainer ? (xo(function() {
    uu(null, null, e, !1, function() {
      e._reactRootContainer = null, e[hr] = null;
    });
  }), !0) : !1;
};
fn.unstable_batchedUpdates = Jf;
fn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!au(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return uu(e, t, n, !1, r);
};
fn.version = "18.3.1-next-f1338f8080-20240426";
function e0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e0);
    } catch (e) {
      console.error(e);
    }
}
e0(), ey.exports = fn;
var t0 = ey.exports, n0, lh = t0;
n0 = lh.createRoot, lh.hydrateRoot;
const As = {
  black: "#000",
  white: "#fff"
}, Ao = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, No = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Lo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, zo = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, _o = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Fi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, bb = {
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
function vr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const er = "$$material";
function Wd() {
  return Wd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wd.apply(null, arguments);
}
function wb(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Cb(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var kb = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Cb(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = wb(o);
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
}(), Nt = "-ms-", Na = "-moz-", je = "-webkit-", r0 = "comm", lp = "rule", ap = "decl", Tb = "@import", o0 = "@keyframes", Eb = "@layer", Rb = Math.abs, cu = String.fromCharCode, Pb = Object.assign;
function Ib(e, t) {
  return It(e, 0) ^ 45 ? (((t << 2 ^ It(e, 0)) << 2 ^ It(e, 1)) << 2 ^ It(e, 2)) << 2 ^ It(e, 3) : 0;
}
function i0(e) {
  return e.trim();
}
function Mb(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Oe(e, t, n) {
  return e.replace(t, n);
}
function Ud(e, t) {
  return e.indexOf(t);
}
function It(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ns(e, t, n) {
  return e.slice(t, n);
}
function Yn(e) {
  return e.length;
}
function up(e) {
  return e.length;
}
function Cl(e, t) {
  return t.push(e), e;
}
function $b(e, t) {
  return e.map(t).join("");
}
var du = 1, hi = 1, s0 = 0, en = 0, St = 0, Ti = "";
function fu(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: du, column: hi, length: s, return: "" };
}
function Di(e, t) {
  return Pb(fu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function jb() {
  return St;
}
function Ob() {
  return St = en > 0 ? It(Ti, --en) : 0, hi--, St === 10 && (hi = 1, du--), St;
}
function un() {
  return St = en < s0 ? It(Ti, en++) : 0, hi++, St === 10 && (hi = 1, du++), St;
}
function tr() {
  return It(Ti, en);
}
function oa() {
  return en;
}
function Xs(e, t) {
  return Ns(Ti, e, t);
}
function Ls(e) {
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
function l0(e) {
  return du = hi = 1, s0 = Yn(Ti = e), en = 0, [];
}
function a0(e) {
  return Ti = "", e;
}
function ia(e) {
  return i0(Xs(en - 1, Hd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ab(e) {
  for (; (St = tr()) && St < 33; )
    un();
  return Ls(e) > 2 || Ls(St) > 3 ? "" : " ";
}
function Nb(e, t) {
  for (; --t && un() && !(St < 48 || St > 102 || St > 57 && St < 65 || St > 70 && St < 97); )
    ;
  return Xs(e, oa() + (t < 6 && tr() == 32 && un() == 32));
}
function Hd(e) {
  for (; un(); )
    switch (St) {
      case e:
        return en;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Hd(St);
        break;
      case 40:
        e === 41 && Hd(e);
        break;
      case 92:
        un();
        break;
    }
  return en;
}
function Lb(e, t) {
  for (; un() && e + St !== 57; )
    if (e + St === 84 && tr() === 47)
      break;
  return "/*" + Xs(t, en - 1) + "*" + cu(e === 47 ? e : un());
}
function zb(e) {
  for (; !Ls(tr()); )
    un();
  return Xs(e, en);
}
function _b(e) {
  return a0(sa("", null, null, null, [""], e = l0(e), 0, [0], e));
}
function sa(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, c = 0, p = s, v = 0, d = 0, x = 0, b = 1, C = 1, y = 1, m = 0, S = "", w = o, T = i, k = r, R = S; C; )
    switch (x = m, m = un()) {
      case 40:
        if (x != 108 && It(R, p - 1) == 58) {
          Ud(R += Oe(ia(m), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += ia(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Ab(x);
        break;
      case 92:
        R += Nb(oa() - 1, 7);
        continue;
      case 47:
        switch (tr()) {
          case 42:
          case 47:
            Cl(Bb(Lb(un(), oa()), t, n), a);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * b:
        l[u++] = Yn(R) * y;
      case 125 * b:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            C = 0;
          case 59 + c:
            y == -1 && (R = Oe(R, /\f/g, "")), d > 0 && Yn(R) - p && Cl(d > 32 ? uh(R + ";", r, n, p - 1) : uh(Oe(R, " ", "") + ";", r, n, p - 2), a);
            break;
          case 59:
            R += ";";
          default:
            if (Cl(k = ah(R, t, n, u, c, o, l, S, w = [], T = [], p), i), m === 123)
              if (c === 0)
                sa(R, t, k, k, w, i, p, l, T);
              else
                switch (v === 99 && It(R, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    sa(e, k, k, r && Cl(ah(e, k, k, 0, 0, o, l, S, o, w = [], p), T), o, T, p, l, r ? w : T);
                    break;
                  default:
                    sa(R, k, k, k, [""], T, 0, l, T);
                }
        }
        u = c = d = 0, b = y = 1, S = R = "", p = s;
        break;
      case 58:
        p = 1 + Yn(R), d = x;
      default:
        if (b < 1) {
          if (m == 123)
            --b;
          else if (m == 125 && b++ == 0 && Ob() == 125)
            continue;
        }
        switch (R += cu(m), m * b) {
          case 38:
            y = c > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[u++] = (Yn(R) - 1) * y, y = 1;
            break;
          case 64:
            tr() === 45 && (R += ia(un())), v = tr(), c = p = Yn(S = R += zb(oa())), m++;
            break;
          case 45:
            x === 45 && Yn(R) == 2 && (b = 0);
        }
    }
  return i;
}
function ah(e, t, n, r, o, i, s, l, a, u, c) {
  for (var p = o - 1, v = o === 0 ? i : [""], d = up(v), x = 0, b = 0, C = 0; x < r; ++x)
    for (var y = 0, m = Ns(e, p + 1, p = Rb(b = s[x])), S = e; y < d; ++y)
      (S = i0(b > 0 ? v[y] + " " + m : Oe(m, /&\f/g, v[y]))) && (a[C++] = S);
  return fu(e, t, n, o === 0 ? lp : l, a, u, c);
}
function Bb(e, t, n) {
  return fu(e, t, n, r0, cu(jb()), Ns(e, 2, -2), 0);
}
function uh(e, t, n, r) {
  return fu(e, t, n, ap, Ns(e, 0, r), Ns(e, r + 1, -1), r);
}
function ii(e, t) {
  for (var n = "", r = up(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Fb(e, t, n, r) {
  switch (e.type) {
    case Eb:
      if (e.children.length) break;
    case Tb:
    case ap:
      return e.return = e.return || e.value;
    case r0:
      return "";
    case o0:
      return e.return = e.value + "{" + ii(e.children, r) + "}";
    case lp:
      e.value = e.props.join(",");
  }
  return Yn(n = ii(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Db(e) {
  var t = up(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function Wb(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function u0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ub = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = tr(), o === 38 && i === 12 && (n[r] = 1), !Ls(i); )
    un();
  return Xs(t, en);
}, Hb = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ls(o)) {
      case 0:
        o === 38 && tr() === 12 && (n[r] = 1), t[r] += Ub(en - 1, n, r);
        break;
      case 2:
        t[r] += ia(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = tr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += cu(o);
    }
  while (o = un());
  return t;
}, Vb = function(t, n) {
  return a0(Hb(l0(t), n));
}, ch = /* @__PURE__ */ new WeakMap(), Kb = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ch.get(r)) && !o) {
      ch.set(t, !0);
      for (var i = [], s = Vb(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var c = 0; c < l.length; c++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[c]) : l[c] + " " + s[a];
    }
  }
}, Yb = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function c0(e, t) {
  switch (Ib(e, t)) {
    case 5103:
      return je + "print-" + e + e;
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
      return je + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return je + e + Na + e + Nt + e + e;
    case 6828:
    case 4268:
      return je + e + Nt + e + e;
    case 6165:
      return je + e + Nt + "flex-" + e + e;
    case 5187:
      return je + e + Oe(e, /(\w+).+(:[^]+)/, je + "box-$1$2" + Nt + "flex-$1$2") + e;
    case 5443:
      return je + e + Nt + "flex-item-" + Oe(e, /flex-|-self/, "") + e;
    case 4675:
      return je + e + Nt + "flex-line-pack" + Oe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return je + e + Nt + Oe(e, "shrink", "negative") + e;
    case 5292:
      return je + e + Nt + Oe(e, "basis", "preferred-size") + e;
    case 6060:
      return je + "box-" + Oe(e, "-grow", "") + je + e + Nt + Oe(e, "grow", "positive") + e;
    case 4554:
      return je + Oe(e, /([^-])(transform)/g, "$1" + je + "$2") + e;
    case 6187:
      return Oe(Oe(Oe(e, /(zoom-|grab)/, je + "$1"), /(image-set)/, je + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Oe(e, /(image-set\([^]*)/, je + "$1$`$1");
    case 4968:
      return Oe(Oe(e, /(.+:)(flex-)?(.*)/, je + "box-pack:$3" + Nt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + je + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Oe(e, /(.+)-inline(.+)/, je + "$1$2") + e;
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
      if (Yn(e) - 1 - t > 6) switch (It(e, t + 1)) {
        case 109:
          if (It(e, t + 4) !== 45) break;
        case 102:
          return Oe(e, /(.+:)(.+)-([^]+)/, "$1" + je + "$2-$3$1" + Na + (It(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Ud(e, "stretch") ? c0(Oe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (It(e, t + 1) !== 115) break;
    case 6444:
      switch (It(e, Yn(e) - 3 - (~Ud(e, "!important") && 10))) {
        case 107:
          return Oe(e, ":", ":" + je) + e;
        case 101:
          return Oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + je + (It(e, 14) === 45 ? "inline-" : "") + "box$3$1" + je + "$2$3$1" + Nt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (It(e, t + 11)) {
        case 114:
          return je + e + Nt + Oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return je + e + Nt + Oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return je + e + Nt + Oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return je + e + Nt + e + e;
  }
  return e;
}
var Gb = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ap:
      t.return = c0(t.value, t.length);
      break;
    case o0:
      return ii([Di(t, {
        value: Oe(t.value, "@", "@" + je)
      })], o);
    case lp:
      if (t.length) return $b(t.props, function(i) {
        switch (Mb(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ii([Di(t, {
              props: [Oe(i, /:(read-\w+)/, ":" + Na + "$1")]
            })], o);
          case "::placeholder":
            return ii([Di(t, {
              props: [Oe(i, /:(plac\w+)/, ":" + je + "input-$1")]
            }), Di(t, {
              props: [Oe(i, /:(plac\w+)/, ":" + Na + "$1")]
            }), Di(t, {
              props: [Oe(i, /:(plac\w+)/, Nt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Qb = [Gb], Xb = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var C = b.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Qb, i = {}, s, l = [];
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
  var a, u = [Kb, Yb];
  {
    var c, p = [Fb, Wb(function(b) {
      c.insert(b);
    })], v = Db(u.concat(o, p)), d = function(C) {
      return ii(_b(C), v);
    };
    a = function(C, y, m, S) {
      c = m, d(C ? C + "{" + y.styles + "}" : y.styles), S && (x.inserted[y.name] = !0);
    };
  }
  var x = {
    key: n,
    sheet: new kb({
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
}, d0 = { exports: {} }, Fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt = typeof Symbol == "function" && Symbol.for, cp = Rt ? Symbol.for("react.element") : 60103, dp = Rt ? Symbol.for("react.portal") : 60106, pu = Rt ? Symbol.for("react.fragment") : 60107, mu = Rt ? Symbol.for("react.strict_mode") : 60108, hu = Rt ? Symbol.for("react.profiler") : 60114, gu = Rt ? Symbol.for("react.provider") : 60109, yu = Rt ? Symbol.for("react.context") : 60110, fp = Rt ? Symbol.for("react.async_mode") : 60111, vu = Rt ? Symbol.for("react.concurrent_mode") : 60111, xu = Rt ? Symbol.for("react.forward_ref") : 60112, Su = Rt ? Symbol.for("react.suspense") : 60113, qb = Rt ? Symbol.for("react.suspense_list") : 60120, bu = Rt ? Symbol.for("react.memo") : 60115, wu = Rt ? Symbol.for("react.lazy") : 60116, Zb = Rt ? Symbol.for("react.block") : 60121, Jb = Rt ? Symbol.for("react.fundamental") : 60117, ew = Rt ? Symbol.for("react.responder") : 60118, tw = Rt ? Symbol.for("react.scope") : 60119;
function mn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case cp:
        switch (e = e.type, e) {
          case fp:
          case vu:
          case pu:
          case hu:
          case mu:
          case Su:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case yu:
              case xu:
              case wu:
              case bu:
              case gu:
                return e;
              default:
                return t;
            }
        }
      case dp:
        return t;
    }
  }
}
function f0(e) {
  return mn(e) === vu;
}
Fe.AsyncMode = fp;
Fe.ConcurrentMode = vu;
Fe.ContextConsumer = yu;
Fe.ContextProvider = gu;
Fe.Element = cp;
Fe.ForwardRef = xu;
Fe.Fragment = pu;
Fe.Lazy = wu;
Fe.Memo = bu;
Fe.Portal = dp;
Fe.Profiler = hu;
Fe.StrictMode = mu;
Fe.Suspense = Su;
Fe.isAsyncMode = function(e) {
  return f0(e) || mn(e) === fp;
};
Fe.isConcurrentMode = f0;
Fe.isContextConsumer = function(e) {
  return mn(e) === yu;
};
Fe.isContextProvider = function(e) {
  return mn(e) === gu;
};
Fe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cp;
};
Fe.isForwardRef = function(e) {
  return mn(e) === xu;
};
Fe.isFragment = function(e) {
  return mn(e) === pu;
};
Fe.isLazy = function(e) {
  return mn(e) === wu;
};
Fe.isMemo = function(e) {
  return mn(e) === bu;
};
Fe.isPortal = function(e) {
  return mn(e) === dp;
};
Fe.isProfiler = function(e) {
  return mn(e) === hu;
};
Fe.isStrictMode = function(e) {
  return mn(e) === mu;
};
Fe.isSuspense = function(e) {
  return mn(e) === Su;
};
Fe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === pu || e === vu || e === hu || e === mu || e === Su || e === qb || typeof e == "object" && e !== null && (e.$$typeof === wu || e.$$typeof === bu || e.$$typeof === gu || e.$$typeof === yu || e.$$typeof === xu || e.$$typeof === Jb || e.$$typeof === ew || e.$$typeof === tw || e.$$typeof === Zb);
};
Fe.typeOf = mn;
d0.exports = Fe;
var nw = d0.exports, p0 = nw, rw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ow = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, m0 = {};
m0[p0.ForwardRef] = rw;
m0[p0.Memo] = ow;
var iw = !0;
function h0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var pp = function(t, n, r) {
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
  iw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, mp = function(t, n, r) {
  pp(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function sw(e) {
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
var lw = {
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
}, aw = /[A-Z]|^ms/g, uw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, g0 = function(t) {
  return t.charCodeAt(1) === 45;
}, dh = function(t) {
  return t != null && typeof t != "boolean";
}, Nc = /* @__PURE__ */ u0(function(e) {
  return g0(e) ? e : e.replace(aw, "-$&").toLowerCase();
}), fh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(uw, function(r, o, i) {
          return Gn = {
            name: o,
            styles: i,
            next: Gn
          }, o;
        });
  }
  return lw[t] !== 1 && !g0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function zs(e, t, n) {
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
        return Gn = {
          name: o.name,
          styles: o.styles,
          next: Gn
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Gn = {
              name: s.name,
              styles: s.styles,
              next: Gn
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return cw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = Gn, u = n(e);
        return Gn = a, zs(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null)
    return c;
  var p = t[c];
  return p !== void 0 ? p : c;
}
function cw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += zs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : dh(l) && (r += Nc(i) + ":" + fh(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          dh(s[a]) && (r += Nc(i) + ":" + fh(i, s[a]) + ";");
      else {
        var u = zs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Nc(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var ph = /label:\s*([^\s;{]+)\s*(;|$)/g, Gn;
function qs(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Gn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += zs(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += zs(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  ph.lastIndex = 0;
  for (var u = "", c; (c = ph.exec(o)) !== null; )
    u += "-" + c[1];
  var p = sw(o) + u;
  return {
    name: p,
    styles: o,
    next: Gn
  };
}
var dw = function(t) {
  return t();
}, y0 = ca.useInsertionEffect ? ca.useInsertionEffect : !1, v0 = y0 || dw, mh = y0 || h.useLayoutEffect, x0 = /* @__PURE__ */ h.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Xb({
    key: "css"
  }) : null
);
x0.Provider;
var hp = function(t) {
  return /* @__PURE__ */ h.forwardRef(function(n, r) {
    var o = h.useContext(x0);
    return t(n, o, r);
  });
}, Zs = /* @__PURE__ */ h.createContext({}), gp = {}.hasOwnProperty, Vd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", fw = function(t, n) {
  var r = {};
  for (var o in n)
    gp.call(n, o) && (r[o] = n[o]);
  return r[Vd] = t, r;
}, pw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return pp(n, r, o), v0(function() {
    return mp(n, r, o);
  }), null;
}, mw = /* @__PURE__ */ hp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Vd], i = [r], s = "";
  typeof e.className == "string" ? s = h0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = qs(i, void 0, h.useContext(Zs));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e)
    gp.call(e, u) && u !== "css" && u !== Vd && (a[u] = e[u]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(pw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ h.createElement(o, a));
}), hw = mw, hh = function(t, n) {
  var r = arguments;
  if (n == null || !gp.call(n, "css"))
    return h.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = hw, i[1] = fw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return h.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(hh || (hh = {}));
var gw = /* @__PURE__ */ hp(function(e, t) {
  var n = e.styles, r = qs([n], void 0, h.useContext(Zs)), o = h.useRef();
  return mh(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), mh(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && mp(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function _s() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return qs(t);
}
function Js() {
  var e = _s.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var yw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, vw = /* @__PURE__ */ u0(
  function(e) {
    return yw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), xw = vw, Sw = function(t) {
  return t !== "theme";
}, gh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? xw : Sw;
}, yh = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, bw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return pp(n, r, o), v0(function() {
    return mp(n, r, o);
  }), null;
}, ww = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = yh(t, n, r), a = l || gh(o), u = !a("as");
  return function() {
    var c = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      p.push.apply(p, c);
    else {
      var v = c[0];
      p.push(v[0]);
      for (var d = c.length, x = 1; x < d; x++)
        p.push(c[x], v[x]);
    }
    var b = hp(function(C, y, m) {
      var S = u && C.as || o, w = "", T = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var R in C)
          k[R] = C[R];
        k.theme = h.useContext(Zs);
      }
      typeof C.className == "string" ? w = h0(y.registered, T, C.className) : C.className != null && (w = C.className + " ");
      var E = qs(p.concat(T), y.registered, k);
      w += y.key + "-" + E.name, s !== void 0 && (w += " " + s);
      var M = u && l === void 0 ? gh(S) : a, N = {};
      for (var $ in C)
        u && $ === "as" || M($) && (N[$] = C[$]);
      return N.className = w, m && (N.ref = m), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(bw, {
        cache: y,
        serialized: E,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ h.createElement(S, N));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = p, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(C, y) {
      var m = e(C, Wd({}, n, y, {
        shouldForwardProp: yh(b, y, !0)
      }));
      return m.apply(void 0, p);
    }, b;
  };
}, Cw = [
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
], Kd = ww.bind(null);
Cw.forEach(function(e) {
  Kd[e] = Kd(e);
});
function kw(e) {
  return e == null || Object.keys(e).length === 0;
}
function S0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(kw(o) ? n : o) : t;
  return /* @__PURE__ */ f.jsx(gw, {
    styles: r
  });
}
function b0(e, t) {
  return Kd(e, t);
}
function Tw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const vh = [];
function Dr(e) {
  return vh[0] = e, qs(vh);
}
var w0 = { exports: {} }, Ye = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yp = Symbol.for("react.transitional.element"), vp = Symbol.for("react.portal"), Cu = Symbol.for("react.fragment"), ku = Symbol.for("react.strict_mode"), Tu = Symbol.for("react.profiler"), Eu = Symbol.for("react.consumer"), Ru = Symbol.for("react.context"), Pu = Symbol.for("react.forward_ref"), Iu = Symbol.for("react.suspense"), Mu = Symbol.for("react.suspense_list"), $u = Symbol.for("react.memo"), ju = Symbol.for("react.lazy"), Ew = Symbol.for("react.view_transition"), Rw = Symbol.for("react.client.reference");
function In(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case yp:
        switch (e = e.type, e) {
          case Cu:
          case Tu:
          case ku:
          case Iu:
          case Mu:
          case Ew:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ru:
              case Pu:
              case ju:
              case $u:
                return e;
              case Eu:
                return e;
              default:
                return t;
            }
        }
      case vp:
        return t;
    }
  }
}
Ye.ContextConsumer = Eu;
Ye.ContextProvider = Ru;
Ye.Element = yp;
Ye.ForwardRef = Pu;
Ye.Fragment = Cu;
Ye.Lazy = ju;
Ye.Memo = $u;
Ye.Portal = vp;
Ye.Profiler = Tu;
Ye.StrictMode = ku;
Ye.Suspense = Iu;
Ye.SuspenseList = Mu;
Ye.isContextConsumer = function(e) {
  return In(e) === Eu;
};
Ye.isContextProvider = function(e) {
  return In(e) === Ru;
};
Ye.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yp;
};
Ye.isForwardRef = function(e) {
  return In(e) === Pu;
};
Ye.isFragment = function(e) {
  return In(e) === Cu;
};
Ye.isLazy = function(e) {
  return In(e) === ju;
};
Ye.isMemo = function(e) {
  return In(e) === $u;
};
Ye.isPortal = function(e) {
  return In(e) === vp;
};
Ye.isProfiler = function(e) {
  return In(e) === Tu;
};
Ye.isStrictMode = function(e) {
  return In(e) === ku;
};
Ye.isSuspense = function(e) {
  return In(e) === Iu;
};
Ye.isSuspenseList = function(e) {
  return In(e) === Mu;
};
Ye.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Cu || e === Tu || e === ku || e === Iu || e === Mu || typeof e == "object" && e !== null && (e.$$typeof === ju || e.$$typeof === $u || e.$$typeof === Ru || e.$$typeof === Eu || e.$$typeof === Pu || e.$$typeof === Rw || e.getModuleId !== void 0);
};
Ye.typeOf = In;
w0.exports = Ye;
var C0 = w0.exports;
function cr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function k0(e) {
  if (/* @__PURE__ */ h.isValidElement(e) || C0.isValidElementType(e) || !cr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = k0(e[n]);
  }), t;
}
function $t(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return cr(e) && cr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ h.isValidElement(t[o]) || C0.isValidElementType(t[o]) ? r[o] = t[o] : cr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && cr(e[o]) ? r[o] = $t(e[o], t[o], n) : n.clone ? r[o] = cr(t[o]) ? k0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Pw = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function T0(e) {
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
  } = e, i = Pw(t), s = Object.keys(i);
  function l(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function a(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function u(d, x) {
    const b = s.indexOf(x);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : x) - r / 100}${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : l(d);
  }
  function p(d) {
    const x = s.indexOf(d);
    return x === 0 ? l(s[1]) : x === s.length - 1 ? a(s[x]) : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  const v = [];
  for (let d = 0; d < s.length; d += 1)
    v.push(l(s[d]));
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: u,
    only: c,
    not: p,
    unit: n,
    internal_mediaKeys: v,
    ...o
  };
}
const xh = /min-width:\s*([0-9.]+)/;
function Sh(e, t) {
  if (!e.containerQueries || !Iw(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(xh)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(xh)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function Iw(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function E0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Mw(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function $w(e) {
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
const jw = {
  borderRadius: 4
};
function R0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function si(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return zw(t) ? t : _w(e) ? gi(t) : n && r ? Nw(e, t) : n !== r ? gi(t) : Bw(e, t);
}
function Ow(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = gi(e[t]);
  return r;
}
function Aw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = gi(e[n]));
  return t;
}
function Nw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = gi(t[r]);
  return e;
}
function Lw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function zw(e) {
  return typeof e != "object" || e === null;
}
function _w(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function gi(e) {
  return Lw(e) ? Array.isArray(e) ? Ow(e) : Aw(e) : e;
}
function Bw(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = si(e[n], t[n]) : e[n] = gi(t[n]));
  return e;
}
const Fw = {}, Ou = {
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
}, La = T0({
  values: Ou
}), Dw = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ou[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Hr(e, t, n) {
  const r = {};
  return Au(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : si(r, l);
  });
}
function Au(e, t, n, r) {
  if (t ?? (t = Fw), Array.isArray(n)) {
    const o = t.breakpoints ?? La;
    for (let i = 0; i < n.length; i += 1)
      Lc(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? La, i = o.values ?? Ou;
    for (const s in n)
      if (E0(o.keys, s)) {
        const l = Mw(t.containerQueries ? t : Dw, s);
        l && Lc(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        Lc(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function Lc(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function P0(e = La) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function Yd(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    R0(t[o]) && delete t[o];
  }
  return t;
}
function Ww(e, ...t) {
  const r = [P0(e), ...t].reduce((o, i) => $t(o, i), {});
  return Yd(e, r);
}
function Uw(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function zc(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || Uw(t, n), i = Object.keys(o);
  if (i.length === 0)
    return t;
  let s;
  return i.reduce((l, a, u) => {
    if (Array.isArray(t))
      l[a] = t[u] != null ? t[u] : t[s], s = u;
    else if (typeof t == "object" && t) {
      const c = t;
      l[a] = c[a] != null ? c[a] : c[s], s = a;
    } else
      l[a] = t;
    return l;
  }, {});
}
function Hw(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (E0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function ce(e) {
  if (typeof e != "string")
    throw new Error(vr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function I0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Nu(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Nu(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = bh(e.vars, o, r);
    if (i != null)
      return i;
  }
  return bh(e, o, r);
}
function bh(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : ce(s)}`;
    return r == null ? void 0 : r[l];
  }
  return o;
}
function ht(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, u = Nu(a, r) || {};
    return Hr(s, l, (p) => {
      const v = I0(u, o, p, t);
      return n === !1 ? v : {
        [n]: v
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const Vw = {
  internal_cache: {}
}, za = {
  m: "margin",
  p: "padding"
}, wh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ch = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Bs = {};
for (const e in za)
  Bs[e] = [za[e]];
for (const e in za)
  for (const t in wh) {
    const n = za[e], r = wh[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Bs[e + t] = o;
  }
for (const e in Ch)
  Bs[e] = Bs[Ch[e]];
const xp = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Sp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...xp, ...Sp];
function el(e, t, n, r) {
  const o = Nu(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Lu(e) {
  return el(e, "spacing", 8);
}
function So(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const kh = [""];
function M0(e, t) {
  var i;
  const n = e.theme ?? Vw, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Lu(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = Bs[s] ?? (kh[0] = s, kh), a = e[s];
    Au(o, e.theme, a, (u, c) => {
      const p = u ? o[u] : o;
      for (let v = 0; v < l.length; v += 1)
        p[l[v]] = So(r, c);
    });
  }
  return o;
}
function bp(e) {
  return M0(e, xp);
}
bp.propTypes = {};
bp.filterProps = xp;
const yt = bp;
function wp(e) {
  return M0(e, Sp);
}
wp.propTypes = {};
wp.filterProps = Sp;
const vt = wp;
function $0(e = 8, t = Lu({
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
function zu(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && si(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function xn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Mn(e, t) {
  return ht({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Kw = Mn("border", xn), Yw = Mn("borderTop", xn), Gw = Mn("borderRight", xn), Qw = Mn("borderBottom", xn), Xw = Mn("borderLeft", xn), qw = Mn("borderColor"), Zw = Mn("borderTopColor"), Jw = Mn("borderRightColor"), eC = Mn("borderBottomColor"), tC = Mn("borderLeftColor"), nC = Mn("outline", xn), rC = Mn("outlineColor"), _u = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = el(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: So(t, r)
    });
    return Hr(e, e.borderRadius, n);
  }
  return null;
};
_u.propTypes = {};
_u.filterProps = ["borderRadius"];
zu(Kw, Yw, Gw, Qw, Xw, qw, Zw, Jw, eC, tC, _u, nC, rC);
const Bu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = el(e.theme, "spacing", 8), n = (r) => ({
      gap: So(t, r)
    });
    return Hr(e, e.gap, n);
  }
  return null;
};
Bu.propTypes = {};
Bu.filterProps = ["gap"];
const Fu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = el(e.theme, "spacing", 8), n = (r) => ({
      columnGap: So(t, r)
    });
    return Hr(e, e.columnGap, n);
  }
  return null;
};
Fu.propTypes = {};
Fu.filterProps = ["columnGap"];
const Du = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = el(e.theme, "spacing", 8), n = (r) => ({
      rowGap: So(t, r)
    });
    return Hr(e, e.rowGap, n);
  }
  return null;
};
Du.propTypes = {};
Du.filterProps = ["rowGap"];
const oC = ht({
  prop: "gridColumn"
}), iC = ht({
  prop: "gridRow"
}), sC = ht({
  prop: "gridAutoFlow"
}), lC = ht({
  prop: "gridAutoColumns"
}), aC = ht({
  prop: "gridAutoRows"
}), uC = ht({
  prop: "gridTemplateColumns"
}), cC = ht({
  prop: "gridTemplateRows"
}), dC = ht({
  prop: "gridTemplateAreas"
}), fC = ht({
  prop: "gridArea"
});
zu(Bu, Fu, Du, oC, iC, sC, lC, aC, uC, cC, dC, fC);
function li(e, t) {
  return t === "grey" ? t : e;
}
const pC = ht({
  prop: "color",
  themeKey: "palette",
  transform: li
}), mC = ht({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: li
}), hC = ht({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: li
});
zu(pC, mC, hC);
const gC = Ou;
function sn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const yC = ht({
  prop: "width",
  transform: sn
}), Cp = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || gC[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: sn(n)
      };
    };
    return Hr(e, e.maxWidth, t);
  }
  return null;
};
Cp.filterProps = ["maxWidth"];
const vC = ht({
  prop: "minWidth",
  transform: sn
}), xC = ht({
  prop: "height",
  transform: sn
}), SC = ht({
  prop: "maxHeight",
  transform: sn
}), bC = ht({
  prop: "minHeight",
  transform: sn
});
ht({
  prop: "size",
  cssProperty: "width",
  transform: sn
});
ht({
  prop: "size",
  cssProperty: "height",
  transform: sn
});
const wC = ht({
  prop: "boxSizing"
});
zu(yC, Cp, vC, xC, SC, bC, wC);
const Wu = {
  // borders
  border: {
    themeKey: "borders",
    transform: xn
  },
  borderTop: {
    themeKey: "borders",
    transform: xn
  },
  borderRight: {
    themeKey: "borders",
    transform: xn
  },
  borderBottom: {
    themeKey: "borders",
    transform: xn
  },
  borderLeft: {
    themeKey: "borders",
    transform: xn
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
    transform: xn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: _u
  },
  // palette
  color: {
    themeKey: "palette",
    transform: li
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: li
  },
  backgroundColor: {
    themeKey: "palette",
    transform: li
  },
  // spacing
  p: {
    style: vt
  },
  pt: {
    style: vt
  },
  pr: {
    style: vt
  },
  pb: {
    style: vt
  },
  pl: {
    style: vt
  },
  px: {
    style: vt
  },
  py: {
    style: vt
  },
  padding: {
    style: vt
  },
  paddingTop: {
    style: vt
  },
  paddingRight: {
    style: vt
  },
  paddingBottom: {
    style: vt
  },
  paddingLeft: {
    style: vt
  },
  paddingX: {
    style: vt
  },
  paddingY: {
    style: vt
  },
  paddingInline: {
    style: vt
  },
  paddingInlineStart: {
    style: vt
  },
  paddingInlineEnd: {
    style: vt
  },
  paddingBlock: {
    style: vt
  },
  paddingBlockStart: {
    style: vt
  },
  paddingBlockEnd: {
    style: vt
  },
  m: {
    style: yt
  },
  mt: {
    style: yt
  },
  mr: {
    style: yt
  },
  mb: {
    style: yt
  },
  ml: {
    style: yt
  },
  mx: {
    style: yt
  },
  my: {
    style: yt
  },
  margin: {
    style: yt
  },
  marginTop: {
    style: yt
  },
  marginRight: {
    style: yt
  },
  marginBottom: {
    style: yt
  },
  marginLeft: {
    style: yt
  },
  marginX: {
    style: yt
  },
  marginY: {
    style: yt
  },
  marginInline: {
    style: yt
  },
  marginInlineStart: {
    style: yt
  },
  marginInlineEnd: {
    style: yt
  },
  marginBlock: {
    style: yt
  },
  marginBlockStart: {
    style: yt
  },
  marginBlockEnd: {
    style: yt
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
    style: Bu
  },
  rowGap: {
    style: Du
  },
  columnGap: {
    style: Fu
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
    transform: sn
  },
  maxWidth: {
    style: Cp
  },
  minWidth: {
    transform: sn
  },
  height: {
    transform: sn
  },
  maxHeight: {
    transform: sn
  },
  minHeight: {
    transform: sn
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
}, CC = {};
function kC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = CC,
      nested: o
    } = t, i = r.unstable_sxConfig ?? Wu, s = {
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
      const c = r.breakpoints ?? La, p = P0(c);
      for (const v in u) {
        const d = TC(u[v], r);
        if (d != null) {
          if (typeof d != "object") {
            Th(p, v, d, r, i);
            continue;
          }
          if (i[v]) {
            Th(p, v, d, r, i);
            continue;
          }
          Hw(c, d) ? Au(p, t.theme, d, (x, b) => {
            p[x][v] = b;
          }) : (s.sx = d, p[v] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": Sh(r, Yd(c, p))
      } : Sh(r, Yd(c, p));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const bo = kC();
function Th(e, t, n, r, o) {
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
    si(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: u
  } = i, c = Nu(r, s);
  Au(e, r, n, (p, v) => {
    const d = I0(c, u, v, t);
    a === !1 ? si(p ? e[p] : e, d) : p ? e[p][a] = d : e[a] = d;
  });
}
function TC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function EC(e, t) {
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
function Uu(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = T0(n), a = $0(o);
  let u = $t({
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
      ...jw,
      ...i
    }
  }, s);
  return u = $w(u), u.applyStyles = EC, u = t.reduce((c, p) => $t(c, p), u), u.unstable_sxConfig = {
    ...Wu,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(p) {
    return bo({
      sx: p,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function RC(e) {
  return Object.keys(e).length === 0;
}
function kp(e = null) {
  const t = h.useContext(Zs);
  return !t || RC(t) ? e : t;
}
const PC = Uu();
function Hu(e = PC) {
  return kp(e);
}
function _c(e) {
  const t = Dr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function j0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Hu(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => _c(typeof s == "function" ? s(o) : s)) : i = _c(i)), /* @__PURE__ */ f.jsx(S0, {
    styles: i
  });
}
const Eh = (e) => e, IC = () => {
  let e = Eh;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Eh;
    }
  };
}, O0 = IC();
function A0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = A0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function te() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = A0(e)) && (r && (r += " "), r += t);
  return r;
}
function MC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = b0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(bo);
  return /* @__PURE__ */ h.forwardRef(function(a, u) {
    const c = Hu(n), {
      className: p,
      component: v = "div",
      ...d
    } = a;
    return /* @__PURE__ */ f.jsx(i, {
      as: v,
      ref: u,
      className: te(p, o ? o(r) : r),
      theme: t && c[t] || c,
      ...d
    });
  });
}
const $C = {
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
function me(e, t, n = "Mui") {
  const r = $C[t];
  return r ? `${n}-${r}` : `${O0.generate(e)}-${t}`;
}
function de(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = me(e, o, n);
  }), r;
}
function N0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Dr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Dr(o.style));
  }), r;
}
const jC = Uu();
function Bc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function uo(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function OC(e) {
  return e ? (t, n) => n[e] : null;
}
function AC(e, t, n) {
  e.theme = R0(e.theme) ? n : e.theme[t] || e.theme;
}
function la(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => la(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? uo(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? uo(Dr(s), n) : s;
    }
    return L0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? uo(Dr(r.style), n) : r.style : n ? uo(Dr(r), n) : r;
}
function L0(e, t, n = [], r = void 0) {
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
    }), n.push(r ? uo(Dr(l.style(o)), r) : l.style(o))) : n.push(r ? uo(Dr(l.style), r) : l.style);
  }
  return n;
}
function z0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = jC,
    rootShouldForwardProp: r = Bc,
    slotShouldForwardProp: o = Bc
  } = e;
  function i(l) {
    AC(l, t, n);
  }
  return (l, a = {}) => {
    Tw(l, (k) => k.filter((R) => R !== bo));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: p,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = OC(zC(c)),
      ...x
    } = a, b = u && u.startsWith("Mui") || c ? "components" : "custom", C = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), y = v || !1;
    let m = Bc;
    c === "Root" || c === "root" ? m = r : c ? m = o : LC(l) && (m = void 0);
    const S = b0(l, {
      shouldForwardProp: m,
      label: NC(),
      ...x
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(E) {
          return la(E, k, E.theme.modularCssLayers ? b : void 0);
        };
      if (cr(k)) {
        const R = N0(k);
        return function(M) {
          return R.variants ? la(M, R, M.theme.modularCssLayers ? b : void 0) : M.theme.modularCssLayers ? uo(R.style, b) : R.style;
        };
      }
      return k;
    }, T = (...k) => {
      const R = [], E = k.map(w), M = [];
      if (R.push(i), u && d && M.push(function(O) {
        var A, j;
        const P = (j = (A = O.theme.components) == null ? void 0 : A[u]) == null ? void 0 : j.styleOverrides;
        if (!P)
          return null;
        const L = {};
        for (const z in P)
          L[z] = la(O, P[z], O.theme.modularCssLayers ? "theme" : void 0);
        return d(O, L);
      }), u && !C && M.push(function(O) {
        var L, A;
        const I = O.theme, P = (A = (L = I == null ? void 0 : I.components) == null ? void 0 : L[u]) == null ? void 0 : A.variants;
        return P ? L0(O, P, [], O.theme.modularCssLayers ? "theme" : void 0) : null;
      }), y || M.push(bo), Array.isArray(E[0])) {
        const g = E.shift(), O = new Array(R.length).fill(""), I = new Array(M.length).fill("");
        let P;
        P = [...O, ...g, ...I], P.raw = [...O, ...g.raw, ...I], R.unshift(P);
      }
      const N = [...R, ...E, ...M], $ = S(...N);
      return l.muiName && ($.muiName = l.muiName), $;
    };
    return S.withConfig && (T.withConfig = S.withConfig), T;
  };
}
function NC(e, t) {
  return void 0;
}
function LC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function zC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const _C = z0();
function Fs(e, t, n = !1) {
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
              const u = a;
              r[i][u] = Fs(s[u], l[u], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = te(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function BC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Fs(t.components[n].defaultProps, r);
}
function FC(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Hu(r);
  return o && (i = i[o] || i), BC({
    theme: i,
    name: n,
    props: t
  });
}
const ot = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
function DC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Tp(e, t = 0, n = 1) {
  return DC(e, t, n);
}
function WC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Vr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Vr(WC(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(vr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(vr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const UC = (e) => {
  const t = Vr(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, Ji = (e, t) => {
  try {
    return UC(e);
  } catch {
    return e;
  }
};
function Vu(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function _0(e) {
  e = Vr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Vu({
    type: l,
    values: a
  });
}
function Gd(e) {
  e = Vr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Vr(_0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function HC(e, t) {
  const n = Gd(e), r = Gd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ds(e, t) {
  return e = Vr(e), t = Tp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Vu(e);
}
function Zr(e, t, n) {
  try {
    return Ds(e, t);
  } catch {
    return e;
  }
}
function Ku(e, t) {
  if (e = Vr(e), t = Tp(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Vu(e);
}
function ze(e, t, n) {
  try {
    return Ku(e, t);
  } catch {
    return e;
  }
}
function Yu(e, t) {
  if (e = Vr(e), t = Tp(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Vu(e);
}
function _e(e, t, n) {
  try {
    return Yu(e, t);
  } catch {
    return e;
  }
}
function Qd(e, t = 0.15) {
  return Gd(e) > 0.5 ? Ku(e, t) : Yu(e, t);
}
function kl(e, t, n) {
  try {
    return Qd(e, t);
  } catch {
    return e;
  }
}
const B0 = /* @__PURE__ */ h.createContext(null);
function Ep() {
  return h.useContext(B0);
}
const VC = typeof Symbol == "function" && Symbol.for, KC = VC ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function YC(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function GC(e) {
  const {
    children: t,
    theme: n
  } = e, r = Ep(), o = h.useMemo(() => {
    const i = r === null ? {
      ...n
    } : YC(r, n);
    return i != null && (i[KC] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ f.jsx(B0.Provider, {
    value: o,
    children: t
  });
}
const F0 = /* @__PURE__ */ h.createContext();
function QC({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ f.jsx(F0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const Gu = () => h.useContext(F0) ?? !1, D0 = /* @__PURE__ */ h.createContext(void 0);
function XC({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ f.jsx(D0.Provider, {
    value: e,
    children: t
  });
}
function qC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Fs(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Fs(o, r, t.components.mergeClassNameAndStyle) : r;
}
function ZC({
  props: e,
  name: t
}) {
  const n = h.useContext(D0);
  return qC({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Rh = 0;
function JC(e) {
  const [t, n] = h.useState(e), r = e || t;
  return h.useEffect(() => {
    t == null && (Rh += 1, n(`mui-${Rh}`));
  }, [t]), r;
}
const ek = {
  ...ca
}, Ph = ek.useId;
function xr(e) {
  if (Ph !== void 0) {
    const t = Ph();
    return e ?? t;
  }
  return JC(e);
}
function tk(e) {
  const t = kp(), n = xr() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, ot(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ f.jsx(j0, {
    styles: o
  }) : null;
}
const Ih = {};
function Mh(e, t, n, r = !1) {
  return h.useMemo(() => {
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
function W0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = kp(Ih), i = Ep() || Ih, s = Mh(r, o, n), l = Mh(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", u = tk(s);
  return /* @__PURE__ */ f.jsx(GC, {
    theme: l,
    children: /* @__PURE__ */ f.jsx(Zs.Provider, {
      value: s,
      children: /* @__PURE__ */ f.jsx(QC, {
        value: a,
        children: /* @__PURE__ */ f.jsxs(XC, {
          value: r ? s[r].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const $h = {
  theme: void 0
};
function nk(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && ($h.theme = o.theme, i = N0(e($h)), t = i, n = o.theme), i;
  };
}
const Rp = "mode", Pp = "color-scheme", rk = "data-color-scheme";
function ok(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Rp,
    colorSchemeStorageKey: i = Pp,
    attribute: s = rk,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let u = "", c = s;
  if (s === "class" && (c = ".%s"), s === "data" && (c = "[data-%s]"), c.startsWith(".")) {
    const v = c.substring(1);
    u += `${l}.classList.remove('${v}'.replace('%s', light), '${v}'.replace('%s', dark));
      ${l}.classList.add('${v}'.replace('%s', colorScheme));`;
  }
  const p = c.match(/\[([^[\]]+)\]/);
  if (p) {
    const [v, d] = p[1].split("=");
    d || (u += `${l}.removeAttribute('${v}'.replace('%s', light));
      ${l}.removeAttribute('${v}'.replace('%s', dark));`), u += `
      ${l}.setAttribute('${v}'.replace('%s', colorScheme), ${d ? `${d}.replace('%s', colorScheme)` : '""'});`;
  } else c !== ".%s" && (u += `${l}.setAttribute('${c}', colorScheme);`);
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
    ${u}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function ik() {
}
const sk = ({
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
      return ik;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function Fc() {
}
function jh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function U0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function lk(e) {
  return U0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function ak(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Rp,
    colorSchemeStorageKey: s = Pp,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = sk,
    noSsr: u = !1
  } = e, c = o.join(","), p = o.length > 1, v = h.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), d = h.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), x = h.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [b, C] = h.useState(() => {
    const E = (v == null ? void 0 : v.get(t)) || t, M = (d == null ? void 0 : d.get(n)) || n, N = (x == null ? void 0 : x.get(r)) || r;
    return {
      mode: E,
      systemMode: jh(E),
      lightColorScheme: M,
      darkColorScheme: N
    };
  }), [y, m] = h.useState(u || !p);
  h.useEffect(() => {
    m(!0);
  }, []);
  const S = lk(b), w = h.useCallback((E) => {
    C((M) => {
      if (E === M.mode)
        return M;
      const N = E ?? t;
      return v == null || v.set(N), {
        ...M,
        mode: N,
        systemMode: jh(N)
      };
    });
  }, [v, t]), T = h.useCallback((E) => {
    E ? typeof E == "string" ? E && !c.includes(E) ? console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`) : C((M) => {
      const N = {
        ...M
      };
      return U0(M, ($) => {
        $ === "light" && (d == null || d.set(E), N.lightColorScheme = E), $ === "dark" && (x == null || x.set(E), N.darkColorScheme = E);
      }), N;
    }) : C((M) => {
      const N = {
        ...M
      }, $ = E.light === null ? n : E.light, g = E.dark === null ? r : E.dark;
      return $ && (c.includes($) ? (N.lightColorScheme = $, d == null || d.set($)) : console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`)), g && (c.includes(g) ? (N.darkColorScheme = g, x == null || x.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), N;
    }) : C((M) => (d == null || d.set(n), x == null || x.set(r), {
      ...M,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [c, d, x, n, r]), k = h.useCallback((E) => {
    b.mode === "system" && C((M) => {
      const N = E != null && E.matches ? "dark" : "light";
      return M.systemMode === N ? M : {
        ...M,
        systemMode: N
      };
    });
  }, [b.mode]), R = h.useRef(k);
  return R.current = k, h.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const E = (...N) => R.current(...N), M = window.matchMedia("(prefers-color-scheme: dark)");
    return M.addListener(E), E(M), () => {
      M.removeListener(E);
    };
  }, [p]), h.useEffect(() => {
    if (p) {
      const E = (v == null ? void 0 : v.subscribe(($) => {
        (!$ || ["light", "dark", "system"].includes($)) && w($ || t);
      })) || Fc, M = (d == null ? void 0 : d.subscribe(($) => {
        (!$ || c.match($)) && T({
          light: $
        });
      })) || Fc, N = (x == null ? void 0 : x.subscribe(($) => {
        (!$ || c.match($)) && T({
          dark: $
        });
      })) || Fc;
      return () => {
        E(), M(), N();
      };
    }
  }, [T, w, c, t, l, p, v, d, x]), {
    ...b,
    mode: y ? b.mode : void 0,
    systemMode: y ? b.systemMode : void 0,
    colorScheme: y ? S : void 0,
    setMode: w,
    setColorScheme: T
  };
}
const uk = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function ck(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Rp,
    colorSchemeStorageKey: o = Pp,
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
  }, u = /* @__PURE__ */ h.createContext(void 0), c = () => h.useContext(u) || a, p = {}, v = {};
  function d(y) {
    var We, Se, Ke, wt;
    const {
      children: m,
      theme: S,
      modeStorageKey: w = r,
      colorSchemeStorageKey: T = o,
      disableTransitionOnChange: k = i,
      storageManager: R,
      storageWindow: E = typeof window > "u" ? void 0 : window,
      documentNode: M = typeof document > "u" ? void 0 : document,
      colorSchemeNode: N = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: $ = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: O = "system",
      forceThemeRerender: I = !1,
      noSsr: P
    } = y, L = h.useRef(!1), A = Ep(), j = h.useContext(u), z = !!j && !$, B = h.useMemo(() => S || (typeof n == "function" ? n() : n), [S]), W = B[t], F = W || B, {
      colorSchemes: X = p,
      components: U = v,
      cssVarPrefix: q
    } = F, G = Object.keys(X).filter((oe) => !!X[oe]).join(","), Q = h.useMemo(() => G.split(","), [G]), D = typeof s == "string" ? s : s.light, ne = typeof s == "string" ? s : s.dark, ie = X[D] && X[ne] ? O : ((Se = (We = X[F.defaultColorScheme]) == null ? void 0 : We.palette) == null ? void 0 : Se.mode) || ((Ke = F.palette) == null ? void 0 : Ke.mode), {
      mode: Ee,
      setMode: be,
      systemMode: fe,
      lightColorScheme: re,
      darkColorScheme: Y,
      colorScheme: se,
      setColorScheme: ue
    } = ak({
      supportedColorSchemes: Q,
      defaultLightColorScheme: D,
      defaultDarkColorScheme: ne,
      modeStorageKey: w,
      colorSchemeStorageKey: T,
      defaultMode: ie,
      storageManager: R,
      storageWindow: E,
      noSsr: P
    });
    let ve = Ee, le = se;
    z && (ve = j.mode, le = j.colorScheme);
    let Ie = le || F.defaultColorScheme;
    F.vars && !I && (Ie = F.defaultColorScheme);
    const Ue = h.useMemo(() => {
      var Le;
      const oe = ((Le = F.generateThemeVars) == null ? void 0 : Le.call(F)) || F.vars, xe = {
        ...F,
        components: U,
        colorSchemes: X,
        cssVarPrefix: q,
        vars: oe
      };
      if (typeof xe.generateSpacing == "function" && (xe.spacing = xe.generateSpacing()), Ie) {
        const dt = X[Ie];
        dt && typeof dt == "object" && Object.keys(dt).forEach((Ce) => {
          dt[Ce] && typeof dt[Ce] == "object" ? xe[Ce] = {
            ...xe[Ce],
            ...dt[Ce]
          } : xe[Ce] = dt[Ce];
        });
      }
      return l ? l(xe) : xe;
    }, [F, Ie, U, X, q]), De = F.colorSchemeSelector;
    ot(() => {
      if (le && N && De && De !== "media") {
        const oe = De;
        let xe = De;
        if (oe === "class" && (xe = ".%s"), oe === "data" && (xe = "[data-%s]"), oe != null && oe.startsWith("data-") && !oe.includes("%s") && (xe = `[${oe}="%s"]`), xe.startsWith("."))
          N.classList.remove(...Q.map((Le) => xe.substring(1).replace("%s", Le))), N.classList.add(xe.substring(1).replace("%s", le));
        else {
          const Le = xe.replace("%s", le).match(/\[([^\]]+)\]/);
          if (Le) {
            const [dt, Ce] = Le[1].split("=");
            Ce || Q.forEach((Cr) => {
              N.removeAttribute(dt.replace(le, Cr));
            }), N.setAttribute(dt, Ce ? Ce.replace(/"|'/g, "") : "");
          } else
            N.setAttribute(xe, le);
        }
      }
    }, [le, De, N, Q]), h.useEffect(() => {
      let oe;
      if (k && L.current && M) {
        const xe = M.createElement("style");
        xe.appendChild(M.createTextNode(uk)), M.head.appendChild(xe), window.getComputedStyle(M.body), oe = setTimeout(() => {
          M.head.removeChild(xe);
        }, 1);
      }
      return () => {
        clearTimeout(oe);
      };
    }, [le, k, M]), h.useEffect(() => (L.current = !0, () => {
      L.current = !1;
    }), []);
    const He = h.useMemo(() => ({
      allColorSchemes: Q,
      colorScheme: le,
      darkColorScheme: Y,
      lightColorScheme: re,
      mode: ve,
      setColorScheme: ue,
      setMode: be,
      systemMode: fe
    }), [Q, le, Y, re, ve, ue, be, fe, Ue.colorSchemeSelector]);
    let Ve = !0;
    (g || F.cssVariables === !1 || z && (A == null ? void 0 : A.cssVarPrefix) === q) && (Ve = !1);
    const lt = /* @__PURE__ */ f.jsxs(h.Fragment, {
      children: [/* @__PURE__ */ f.jsx(W0, {
        themeId: W ? t : void 0,
        theme: Ue,
        children: m
      }), Ve && /* @__PURE__ */ f.jsx(S0, {
        styles: ((wt = Ue.generateStyleSheets) == null ? void 0 : wt.call(Ue)) || []
      })]
    });
    return z ? lt : /* @__PURE__ */ f.jsx(u.Provider, {
      value: He,
      children: lt
    });
  }
  const x = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: c,
    getInitColorSchemeScript: (y) => ok({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...y
    })
  };
}
function dk(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const fk = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Oh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (fk.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, pk = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, mk = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Dc(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return pk(
    e,
    (l, a, u) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const c = `--${n ? `${n}-` : ""}${l.join("-")}`, p = mk(l, a);
        Object.assign(o, {
          [c]: p
        }), Oh(i, l, `var(${c})`, u), Oh(s, l, `var(${c}, ${p})`, u);
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
function hk(e, t = {}) {
  const {
    getSelector: n = y,
    disableCssColorScheme: r,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: l,
    defaultColorScheme: a = "light",
    ...u
  } = e, {
    vars: c,
    css: p,
    varsWithDefaults: v
  } = Dc(u, t);
  let d = v;
  const x = {}, {
    [a]: b,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([w, T]) => {
    const {
      vars: k,
      css: R,
      varsWithDefaults: E
    } = Dc(T, t);
    d = $t(d, E), x[w] = {
      css: R,
      vars: k
    };
  }), b) {
    const {
      css: w,
      vars: T,
      varsWithDefaults: k
    } = Dc(b, t);
    d = $t(d, k), x[a] = {
      css: w,
      vars: T
    };
  }
  function y(w, T) {
    var R, E;
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), w) {
      if (k === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((E = (R = s[w]) == null ? void 0 : R.palette) == null ? void 0 : E.mode) || w})`]: {
            ":root": T
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
        ...c
      };
      return Object.entries(x).forEach(([, {
        vars: T
      }]) => {
        w = $t(w, T);
      }), w;
    },
    generateStyleSheets: () => {
      var M, N;
      const w = [], T = e.defaultColorScheme || "light";
      function k($, g) {
        Object.keys(g).length && w.push(typeof $ == "string" ? {
          [$]: {
            ...g
          }
        } : $);
      }
      k(n(void 0, {
        ...p
      }), p);
      const {
        [T]: R,
        ...E
      } = x;
      if (R) {
        const {
          css: $
        } = R, g = (N = (M = s[T]) == null ? void 0 : M.palette) == null ? void 0 : N.mode, O = !r && g ? {
          colorScheme: g,
          ...$
        } : {
          ...$
        };
        k(n(T, {
          ...O
        }), O);
      }
      return Object.entries(E).forEach(([$, {
        css: g
      }]) => {
        var P, L;
        const O = (L = (P = s[$]) == null ? void 0 : P.palette) == null ? void 0 : L.mode, I = !r && O ? {
          colorScheme: O,
          ...g
        } : {
          ...g
        };
        k(n($, {
          ...I
        }), I);
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
function gk(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function he(e, t, n = void 0) {
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
function Wc(e, t) {
  var n, r, o;
  return /* @__PURE__ */ h.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const yk = Uu(), vk = _C("div", {
  name: "MuiStack",
  slot: "Root"
});
function xk(e) {
  return FC({
    props: e,
    name: "MuiStack",
    defaultTheme: yk
  });
}
function Sk(e, t) {
  const n = h.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ h.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const bk = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], wk = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Hr({
      theme: t
    }, zc({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Lu(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = zc({
      values: e.direction,
      base: o
    }), s = zc({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, c) => {
      if (!i[a]) {
        const v = u > 0 ? i[c[u - 1]] : "column";
        i[a] = v;
      }
    }), n = $t(n, Hr({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: So(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${bk(u ? i[u] : e.direction)}`]: So(r, a)
      }
    }));
  }
  return n = Ww(t.breakpoints, n), n;
};
function Ck(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = vk,
    useThemeProps: n = xk,
    componentName: r = "MuiStack"
  } = e, o = () => he({
    root: ["root"]
  }, (a) => me(r, a), {}), i = t(wk);
  return /* @__PURE__ */ h.forwardRef(function(a, u) {
    const c = n(a), {
      component: p = "div",
      direction: v = "column",
      spacing: d = 0,
      divider: x,
      children: b,
      className: C,
      useFlexGap: y = !1,
      ...m
    } = c, S = {
      direction: v,
      spacing: d,
      useFlexGap: y
    }, w = o();
    return /* @__PURE__ */ f.jsx(i, {
      as: p,
      ownerState: S,
      ref: u,
      className: te(w.root, C),
      ...m,
      children: x ? Sk(b, x) : b
    });
  });
}
function H0() {
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
      paper: As.white,
      default: As.white
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
const V0 = H0();
function K0() {
  return {
    text: {
      primary: As.white,
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
      active: As.white,
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
const Xd = K0();
function Ah(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Yu(e.main, o) : t === "dark" && (e.dark = Ku(e.main, i)));
}
function Nh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function kk(e = "light") {
  return e === "dark" ? {
    main: Lo[200],
    light: Lo[50],
    dark: Lo[400]
  } : {
    main: Lo[700],
    light: Lo[400],
    dark: Lo[800]
  };
}
function Tk(e = "light") {
  return e === "dark" ? {
    main: No[200],
    light: No[50],
    dark: No[400]
  } : {
    main: No[500],
    light: No[300],
    dark: No[700]
  };
}
function Ek(e = "light") {
  return e === "dark" ? {
    main: Ao[500],
    light: Ao[300],
    dark: Ao[700]
  } : {
    main: Ao[700],
    light: Ao[400],
    dark: Ao[800]
  };
}
function Rk(e = "light") {
  return e === "dark" ? {
    main: zo[400],
    light: zo[300],
    dark: zo[700]
  } : {
    main: zo[700],
    light: zo[500],
    dark: zo[900]
  };
}
function Pk(e = "light") {
  return e === "dark" ? {
    main: _o[400],
    light: _o[300],
    dark: _o[700]
  } : {
    main: _o[800],
    light: _o[500],
    dark: _o[900]
  };
}
function Ik(e = "light") {
  return e === "dark" ? {
    main: Fi[400],
    light: Fi[300],
    dark: Fi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Fi[500],
    dark: Fi[900]
  };
}
function Mk(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Ip(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || kk(t), l = e.secondary || Tk(t), a = e.error || Ek(t), u = e.info || Rk(t), c = e.success || Pk(t), p = e.warning || Ik(t);
  function v(C) {
    return o ? Mk(C) : HC(C, Xd.text.primary) >= n ? Xd.text.primary : V0.text.primary;
  }
  const d = ({
    color: C,
    name: y,
    mainShade: m = 500,
    lightShade: S = 300,
    darkShade: w = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[m] && (C.main = C[m]), !C.hasOwnProperty("main"))
      throw new Error(vr(11, y ? ` (${y})` : "", m));
    if (typeof C.main != "string")
      throw new Error(vr(12, y ? ` (${y})` : "", JSON.stringify(C.main)));
    return o ? (Nh(o, C, "light", S, r), Nh(o, C, "dark", w, r)) : (Ah(C, "light", S, r), Ah(C, "dark", w, r)), C.contrastText || (C.contrastText = v(C.main)), C;
  };
  let x;
  return t === "light" ? x = H0() : t === "dark" && (x = K0()), $t({
    // A collection of common colors.
    common: {
      ...As
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
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: c,
      name: "success"
    }),
    // The grey colors.
    grey: bb,
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
function $k(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function jk(e, t) {
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
function Ok(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Lh = {
  textTransform: "uppercase"
}, zh = '"Roboto", "Helvetica", "Arial", sans-serif';
function Y0(e, t) {
  const {
    fontFamily: n = zh,
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
    pxToRem: c,
    ...p
  } = typeof t == "function" ? t(e) : t, v = r / 14, d = c || ((C) => `${C / a * v}rem`), x = (C, y, m, S, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: d(y),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: m,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === zh ? {
      letterSpacing: `${Ok(S / y)}em`
    } : {},
    ...w,
    ...u
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
    button: x(s, 14, 1.75, 0.4, Lh),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, Lh),
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
const Ak = 0.2, Nk = 0.14, Lk = 0.12;
function Je(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ak})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Nk})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Lk})`].join(",");
}
const zk = ["none", Je(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Je(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Je(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Je(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Je(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Je(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Je(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Je(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Je(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Je(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Je(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Je(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Je(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Je(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Je(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Je(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Je(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Je(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Je(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Je(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Je(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Je(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Je(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Je(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], _k = ["all"], Bk = {}, Fk = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Dk = {
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
function _h(e) {
  return `${Math.round(e)}ms`;
}
function Wk(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Uk(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...Fk,
    ...t.easing
  }, r = {
    ...Dk,
    ...t.duration
  }, o = (s = _k, l = Bk) => {
    const {
      duration: a = r.standard,
      easing: u = n.easeInOut,
      delay: c = 0,
      ...p
    } = l;
    return (Array.isArray(s) ? s : [s]).map((v) => `${v} ${typeof a == "string" ? a : _h(a)} ${u} ${typeof c == "string" ? c : _h(c)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: Wk,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const Hk = {};
function Vk(e = Hk) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const Kk = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Yk(e) {
  return cr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function G0(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !Yk(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : cr(l) && (r[s] = {
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
function Bh(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Gk = (e) => {
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
function Qk(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Ds(t, Gk(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Bh(n)})` : Yu(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Bh(n)})` : Ku(t, n);
    }
  });
}
function qd(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    motion: s = {},
    transitions: l = {},
    typography: a = {},
    shape: u,
    colorSpace: c,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(vr(22));
  const v = Ip({
    ...i,
    colorSpace: c
  }), d = Uu(e);
  let x = $t(d, {
    mixins: jk(d.breakpoints, r),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: zk.slice(),
    typography: Y0(v, a),
    motion: Vk(s),
    transitions: Uk(l),
    zIndex: {
      ...Kk
    }
  });
  return x = $t(x, p), x = t.reduce((b, C) => $t(b, C), x), delete x.transitions.reducedMotion, x.unstable_sxConfig = {
    ...Wu,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, x.unstable_sx = function(C) {
    return bo({
      sx: C,
      theme: this
    });
  }, x.toRuntimeSource = G0, Qk(x), x;
}
function Zd(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Xk = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Zd(t);
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
function X0(e) {
  return e === "dark" ? Xk : [];
}
function qk(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = Ip({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...Q0(s.mode),
      ...n
    },
    overlays: r || X0(s.mode),
    ...i
  };
}
function Zk(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Jk = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], e2 = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Jk(e.cssVarPrefix).forEach((l) => {
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
function t2(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function _(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function es(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : _0(e);
}
function ir(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ji(es(e[t])));
}
function n2(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Hn = (e) => {
  try {
    return e();
  } catch {
  }
}, r2 = (e = "mui") => dk(e);
function Uc(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = qk({
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
  } = qd({
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
      ...Q0(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || X0(i)
  }, l;
}
function o2(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = Zk,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...c
  } = e, p = Object.keys(n)[0], v = r || (n.light && p !== "light" ? "light" : p), d = r2(i), {
    [v]: x,
    light: b,
    dark: C,
    ...y
  } = n, m = {
    ...y
  };
  let S = x;
  if ((v === "dark" && !("dark" in n) || v === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(vr(21, v));
  let w;
  s && (w = "oklch");
  const T = Uc(w, m, S, c, v);
  b && !m.light && Uc(w, m, b, void 0, "light"), C && !m.dark && Uc(w, m, C, void 0, "dark");
  let k = {
    defaultColorScheme: v,
    ...T,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: d,
    colorSchemes: m,
    font: {
      ...$k(T.typography),
      ...T.font
    },
    spacing: n2(c.spacing)
  };
  Object.keys(k.colorSchemes).forEach(($) => {
    const g = k.colorSchemes[$].palette, O = (P) => {
      const L = P.split("-"), A = L[1], j = L[2];
      return d(P, g[A][j]);
    };
    g.mode === "light" && (_(g.common, "background", "#fff"), _(g.common, "onBackground", "#000")), g.mode === "dark" && (_(g.common, "background", "#000"), _(g.common, "onBackground", "#fff"));
    function I(P, L, A) {
      if (w) {
        let j;
        return P === Zr && (j = `transparent ${((1 - A) * 100).toFixed(0)}%`), P === ze && (j = `#000 ${(A * 100).toFixed(0)}%`), P === _e && (j = `#fff ${(A * 100).toFixed(0)}%`), `color-mix(in ${w}, ${L}, ${j})`;
      }
      return P(L, A);
    }
    if (t2(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      _(g.Alert, "errorColor", I(ze, s ? d("palette-error-light") : g.error.light, 0.6)), _(g.Alert, "infoColor", I(ze, s ? d("palette-info-light") : g.info.light, 0.6)), _(g.Alert, "successColor", I(ze, s ? d("palette-success-light") : g.success.light, 0.6)), _(g.Alert, "warningColor", I(ze, s ? d("palette-warning-light") : g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", O("palette-error-main")), _(g.Alert, "infoFilledBg", O("palette-info-main")), _(g.Alert, "successFilledBg", O("palette-success-main")), _(g.Alert, "warningFilledBg", O("palette-warning-main")), _(g.Alert, "errorFilledColor", Hn(() => g.getContrastText(g.error.main))), _(g.Alert, "infoFilledColor", Hn(() => g.getContrastText(g.info.main))), _(g.Alert, "successFilledColor", Hn(() => g.getContrastText(g.success.main))), _(g.Alert, "warningFilledColor", Hn(() => g.getContrastText(g.warning.main))), _(g.Alert, "errorStandardBg", I(_e, s ? d("palette-error-light") : g.error.light, 0.9)), _(g.Alert, "infoStandardBg", I(_e, s ? d("palette-info-light") : g.info.light, 0.9)), _(g.Alert, "successStandardBg", I(_e, s ? d("palette-success-light") : g.success.light, 0.9)), _(g.Alert, "warningStandardBg", I(_e, s ? d("palette-warning-light") : g.warning.light, 0.9)), _(g.Alert, "errorIconColor", O("palette-error-main")), _(g.Alert, "infoIconColor", O("palette-info-main")), _(g.Alert, "successIconColor", O("palette-success-main")), _(g.Alert, "warningIconColor", O("palette-warning-main")), _(g.AppBar, "defaultBg", O("palette-grey-100")), _(g.Avatar, "defaultBg", O("palette-grey-400")), _(g.Button, "inheritContainedBg", O("palette-grey-300")), _(g.Button, "inheritContainedHoverBg", O("palette-grey-A100")), _(g.Chip, "defaultBorder", O("palette-grey-400")), _(g.Chip, "defaultAvatarColor", O("palette-grey-700")), _(g.Chip, "defaultIconColor", O("palette-grey-700")), _(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), _(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), _(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), _(g.LinearProgress, "primaryBg", I(_e, s ? d("palette-primary-main") : g.primary.main, 0.62)), _(g.LinearProgress, "secondaryBg", I(_e, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), _(g.LinearProgress, "errorBg", I(_e, s ? d("palette-error-main") : g.error.main, 0.62)), _(g.LinearProgress, "infoBg", I(_e, s ? d("palette-info-main") : g.info.main, 0.62)), _(g.LinearProgress, "successBg", I(_e, s ? d("palette-success-main") : g.success.main, 0.62)), _(g.LinearProgress, "warningBg", I(_e, s ? d("palette-warning-light") : g.warning.main, 0.62)), _(g.Skeleton, "bg", w ? I(Zr, s ? d("palette-text-primary") : g.text.primary, 0.11) : `rgba(${O("palette-text-primaryChannel")} / 0.11)`), _(g.Slider, "primaryTrack", I(_e, s ? d("palette-primary-main") : g.primary.main, 0.62)), _(g.Slider, "secondaryTrack", I(_e, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), _(g.Slider, "errorTrack", I(_e, s ? d("palette-error-main") : g.error.main, 0.62)), _(g.Slider, "infoTrack", I(_e, s ? d("palette-info-main") : g.info.main, 0.62)), _(g.Slider, "successTrack", I(_e, s ? d("palette-success-main") : g.success.main, 0.62)), _(g.Slider, "warningTrack", I(_e, s ? d("palette-warning-main") : g.warning.main, 0.62));
      const P = w ? I(ze, s ? d("palette-background-default") : g.background.default, 0.6825) : kl(g.background.default, 0.8);
      _(g.SnackbarContent, "bg", P), _(g.SnackbarContent, "color", Hn(() => w ? Xd.text.primary : g.getContrastText(P))), _(g.SpeedDialAction, "fabHoverBg", kl(g.background.paper, 0.15)), _(g.StepConnector, "border", O("palette-grey-400")), _(g.StepContent, "border", O("palette-grey-400")), _(g.Switch, "defaultColor", O("palette-common-white")), _(g.Switch, "defaultDisabledColor", O("palette-grey-100")), _(g.Switch, "primaryDisabledColor", I(_e, s ? d("palette-primary-main") : g.primary.main, 0.62)), _(g.Switch, "secondaryDisabledColor", I(_e, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), _(g.Switch, "errorDisabledColor", I(_e, s ? d("palette-error-main") : g.error.main, 0.62)), _(g.Switch, "infoDisabledColor", I(_e, s ? d("palette-info-main") : g.info.main, 0.62)), _(g.Switch, "successDisabledColor", I(_e, s ? d("palette-success-main") : g.success.main, 0.62)), _(g.Switch, "warningDisabledColor", I(_e, s ? d("palette-warning-main") : g.warning.main, 0.62)), _(g.TableCell, "border", I(_e, Zr(s ? d("palette-divider") : g.divider, 1), 0.88)), _(g.Tooltip, "bg", I(Zr, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      _(g.Alert, "errorColor", I(_e, s ? d("palette-error-light") : g.error.light, 0.6)), _(g.Alert, "infoColor", I(_e, s ? d("palette-info-light") : g.info.light, 0.6)), _(g.Alert, "successColor", I(_e, s ? d("palette-success-light") : g.success.light, 0.6)), _(g.Alert, "warningColor", I(_e, s ? d("palette-warning-light") : g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", O("palette-error-dark")), _(g.Alert, "infoFilledBg", O("palette-info-dark")), _(g.Alert, "successFilledBg", O("palette-success-dark")), _(g.Alert, "warningFilledBg", O("palette-warning-dark")), _(g.Alert, "errorFilledColor", Hn(() => g.getContrastText(g.error.dark))), _(g.Alert, "infoFilledColor", Hn(() => g.getContrastText(g.info.dark))), _(g.Alert, "successFilledColor", Hn(() => g.getContrastText(g.success.dark))), _(g.Alert, "warningFilledColor", Hn(() => g.getContrastText(g.warning.dark))), _(g.Alert, "errorStandardBg", I(ze, s ? d("palette-error-light") : g.error.light, 0.9)), _(g.Alert, "infoStandardBg", I(ze, s ? d("palette-info-light") : g.info.light, 0.9)), _(g.Alert, "successStandardBg", I(ze, s ? d("palette-success-light") : g.success.light, 0.9)), _(g.Alert, "warningStandardBg", I(ze, s ? d("palette-warning-light") : g.warning.light, 0.9)), _(g.Alert, "errorIconColor", O("palette-error-main")), _(g.Alert, "infoIconColor", O("palette-info-main")), _(g.Alert, "successIconColor", O("palette-success-main")), _(g.Alert, "warningIconColor", O("palette-warning-main")), _(g.AppBar, "defaultBg", O("palette-grey-900")), _(g.AppBar, "darkBg", O("palette-background-paper")), _(g.AppBar, "darkColor", O("palette-text-primary")), _(g.Avatar, "defaultBg", O("palette-grey-600")), _(g.Button, "inheritContainedBg", O("palette-grey-800")), _(g.Button, "inheritContainedHoverBg", O("palette-grey-700")), _(g.Chip, "defaultBorder", O("palette-grey-700")), _(g.Chip, "defaultAvatarColor", O("palette-grey-300")), _(g.Chip, "defaultIconColor", O("palette-grey-300")), _(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), _(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), _(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), _(g.LinearProgress, "primaryBg", I(ze, s ? d("palette-primary-main") : g.primary.main, 0.5)), _(g.LinearProgress, "secondaryBg", I(ze, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), _(g.LinearProgress, "errorBg", I(ze, s ? d("palette-error-main") : g.error.main, 0.5)), _(g.LinearProgress, "infoBg", I(ze, s ? d("palette-info-main") : g.info.main, 0.5)), _(g.LinearProgress, "successBg", I(ze, s ? d("palette-success-main") : g.success.main, 0.5)), _(g.LinearProgress, "warningBg", I(ze, s ? d("palette-warning-main") : g.warning.main, 0.5)), _(g.Skeleton, "bg", w ? I(Zr, s ? d("palette-text-primary") : g.text.primary, 0.13) : `rgba(${O("palette-text-primaryChannel")} / 0.13)`), _(g.Slider, "primaryTrack", I(ze, s ? d("palette-primary-main") : g.primary.main, 0.5)), _(g.Slider, "secondaryTrack", I(ze, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), _(g.Slider, "errorTrack", I(ze, s ? d("palette-error-main") : g.error.main, 0.5)), _(g.Slider, "infoTrack", I(ze, s ? d("palette-info-main") : g.info.main, 0.5)), _(g.Slider, "successTrack", I(ze, s ? d("palette-success-main") : g.success.main, 0.5)), _(g.Slider, "warningTrack", I(ze, s ? d("palette-warning-light") : g.warning.main, 0.5));
      const P = w ? I(_e, s ? d("palette-background-default") : g.background.default, 0.985) : kl(g.background.default, 0.98);
      _(g.SnackbarContent, "bg", P), _(g.SnackbarContent, "color", Hn(() => w ? V0.text.primary : g.getContrastText(P))), _(g.SpeedDialAction, "fabHoverBg", kl(g.background.paper, 0.15)), _(g.StepConnector, "border", O("palette-grey-600")), _(g.StepContent, "border", O("palette-grey-600")), _(g.Switch, "defaultColor", O("palette-grey-300")), _(g.Switch, "defaultDisabledColor", O("palette-grey-600")), _(g.Switch, "primaryDisabledColor", I(ze, s ? d("palette-primary-main") : g.primary.main, 0.55)), _(g.Switch, "secondaryDisabledColor", I(ze, s ? d("palette-secondary-main") : g.secondary.main, 0.55)), _(g.Switch, "errorDisabledColor", I(ze, s ? d("palette-error-main") : g.error.main, 0.55)), _(g.Switch, "infoDisabledColor", I(ze, s ? d("palette-info-main") : g.info.main, 0.55)), _(g.Switch, "successDisabledColor", I(ze, s ? d("palette-success-main") : g.success.main, 0.55)), _(g.Switch, "warningDisabledColor", I(ze, s ? d("palette-warning-light") : g.warning.main, 0.55)), _(g.TableCell, "border", I(ze, Zr(s ? d("palette-divider") : g.divider, 1), 0.68)), _(g.Tooltip, "bg", I(Zr, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    s || (ir(g.background, "default"), ir(g.background, "paper"), ir(g.common, "background"), ir(g.common, "onBackground"), ir(g, "divider")), Object.keys(g).forEach((P) => {
      const L = g[P];
      P !== "tonalOffset" && !s && L && typeof L == "object" && (L.main && _(g[P], "mainChannel", Ji(es(L.main))), L.light && _(g[P], "lightChannel", Ji(es(L.light))), L.dark && _(g[P], "darkChannel", Ji(es(L.dark))), L.contrastText && _(g[P], "contrastTextChannel", Ji(es(L.contrastText))), P === "text" && (ir(g[P], "primary"), ir(g[P], "secondary")), P === "action" && (L.active && ir(g[P], "active"), L.selected && ir(g[P], "selected")));
    });
  }), k = t.reduce(($, g) => $t($, g), k);
  const R = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: e2(k),
    enableContrastVars: s
  }, {
    vars: E,
    generateThemeVars: M,
    generateStyleSheets: N
  } = hk(k, R);
  return k.vars = E, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([$, g]) => {
    k[$] = g;
  }), k.generateThemeVars = M, k.generateStyleSheets = N, k.generateSpacing = function() {
    return $0(c.spacing, Lu(this));
  }, k.getColorSchemeSelector = gk(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Wu,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, k.unstable_sx = function(g) {
    return bo({
      sx: g,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = G0, k;
}
function Fh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Ip({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Qu(e = {}, ...t) {
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
      return qd(e, ...t);
    let c = n;
    "palette" in e || u[l] && (u[l] !== !0 ? c = u[l].palette : l === "dark" && (c = {
      mode: "dark"
    }));
    const p = qd({
      ...e,
      palette: c
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: p.palette
    }, Fh(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: p.palette
    }, Fh(p, "light", u.light)), p;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), o2({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function _a(e) {
  return typeof e == "string";
}
function Xu(e, t = 166) {
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
function st(...e) {
  const t = h.useRef(void 0), n = h.useCallback((r) => {
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
  return h.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function Xe(e) {
  const t = h.useRef(e);
  return ot(() => {
    t.current = e;
  }), h.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function ct(e) {
  return e && e.ownerDocument || document;
}
function Fn(e) {
  return ct(e).defaultView || window;
}
function Tl(e) {
  return parseInt(e, 10) || 0;
}
const i2 = {
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
function s2(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Dh(e) {
  return s2(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const l2 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: u
  } = h.useRef(l != null), c = h.useRef(null), p = st(n, c), v = h.useRef(null), d = h.useRef(null), x = h.useCallback(() => {
    const S = c.current, w = d.current;
    if (!S || !w)
      return;
    const k = Fn(S).getComputedStyle(S);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = S.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const R = k.boxSizing, E = Tl(k.paddingBottom) + Tl(k.paddingTop), M = Tl(k.borderBottomWidth) + Tl(k.borderTopWidth), N = w.scrollHeight;
    w.value = "x";
    const $ = w.scrollHeight;
    let g = N;
    i && (g = Math.max(Number(i) * $, g)), o && (g = Math.min(Number(o) * $, g)), g = Math.max(g, $);
    const O = g + (R === "border-box" ? E + M : 0), I = Math.abs(g - N) <= 1;
    return {
      outerHeightStyle: O,
      overflowing: I
    };
  }, [o, i, t.placeholder]), b = Xe(() => {
    const S = c.current, w = x();
    if (!S || !w || Dh(w))
      return !1;
    const T = w.outerHeightStyle;
    return v.current != null && v.current !== T;
  }), C = h.useCallback(() => {
    const S = c.current, w = x();
    if (!S || !w || Dh(w))
      return;
    const T = w.outerHeightStyle;
    v.current !== T && (v.current = T, S.style.height = `${T}px`), S.style.overflow = w.overflowing ? "hidden" : "";
  }, [x]), y = h.useRef(-1);
  ot(() => {
    const S = Xu(C), w = c == null ? void 0 : c.current;
    if (!w)
      return;
    const T = Fn(w);
    T.addEventListener("resize", S);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(w), cancelAnimationFrame(y.current), C(), y.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      S.clear(), cancelAnimationFrame(y.current), T.removeEventListener("resize", S), k && k.disconnect();
    };
  }, [x, C, b]), ot(() => {
    C();
  });
  const m = (S) => {
    u || C();
    const w = S.target, T = w.value.length, k = w.value.endsWith(`
`), R = w.selectionStart === T;
    k && R && w.setSelectionRange(T, T), r && r(S);
  };
  return /* @__PURE__ */ f.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ f.jsx("textarea", {
      value: l,
      onChange: m,
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
        ...i2.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), Mp = /* @__PURE__ */ h.createContext(void 0);
function Ei({
  props: e,
  states: t
}) {
  const n = h.useContext(Mp), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const $p = Qu();
function Qr() {
  const e = Hu($p);
  return e[er] || e;
}
function a2(e) {
  return /* @__PURE__ */ f.jsx(j0, {
    ...e,
    defaultTheme: $p,
    themeId: er
  });
}
function q0(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const hn = (e) => q0(e) && e !== "classes", K = z0({
  themeId: er,
  defaultTheme: $p,
  rootShouldForwardProp: hn
});
function u2(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ f.jsx(a2, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const Te = nk;
function ye(e) {
  return ZC(e);
}
function Xn(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Wh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ba(e, t = !1) {
  return e && (Wh(e.value) && e.value !== "" || t && Wh(e.defaultValue) && e.defaultValue !== "");
}
function c2(e) {
  return e.startAdornment;
}
function d2(e) {
  return me("MuiInputBase", e);
}
const on = de("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), f2 = {
  transition: "none"
};
function p2(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const jp = (e) => e.scrollTop, Z0 = {}, m2 = ["all"], h2 = {};
function Sn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function J0(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function Fa(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = Z0
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Op(e, t) {
  var r;
  const n = t ?? f2;
  return p2((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function mt(e, t = m2, n = h2) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = Op(e);
  if (r === void 0)
    return o ?? Z0;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Uh;
const Jd = "mui-auto-fill", Da = "mui-auto-fill-cancel", qu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ce(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Zu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, g2 = (e) => {
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
    multiline: c,
    readOnly: p,
    size: v,
    startAdornment: d,
    type: x
  } = e, b = {
    root: ["root", `color${ce(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", v && v !== "medium" && `size${ce(v)}`, c && "multiline", d && "adornedStart", i && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", x === "search" && "inputTypeSearch", p && "readOnly"]
  };
  return he(b, d2, t);
}, Ju = K("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: qu
})(Te(({
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
  [`&.${on.disabled}`]: {
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
}))), ec = K("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Zu
})(Te(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    ...mt(e, "opacity", {
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
    [`label[data-shrink=false] + .${on.formControl} &`]: {
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
    [`&.${on.disabled}`]: {
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
        animationName: Da,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: Jd
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
})), Hh = u2({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${Jd}`]: {
    from: {
      animationName: Jd
    }
  },
  [`@keyframes ${Da}`]: {
    from: {
      animationName: Da
    }
  }
}), Ap = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    defaultValue: c,
    disabled: p,
    disableInjectingGlobalStyles: v,
    endAdornment: d,
    error: x,
    fullWidth: b = !1,
    id: C,
    inputComponent: y = "input",
    inputProps: m = {},
    inputRef: S,
    margin: w,
    maxRows: T,
    minRows: k,
    multiline: R = !1,
    name: E,
    onBlur: M,
    onChange: N,
    onClick: $,
    onFocus: g,
    onKeyDown: O,
    onKeyUp: I,
    placeholder: P,
    readOnly: L,
    renderSuffix: A,
    rows: j,
    size: z,
    slotProps: B = {},
    slots: W = {},
    startAdornment: F,
    type: X = "text",
    value: U,
    ...q
  } = r, G = m.value != null ? m.value : U, {
    current: Q
  } = h.useRef(G != null), D = h.useRef(), ne = h.useCallback((oe) => {
  }, []), ie = st(D, S, m.ref, ne), [Ee, be] = h.useState(!1), [fe, re] = Ei({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fe.focused = re ? re.focused : Ee, h.useEffect(() => {
    !re && p && Ee && (be(!1), M && M());
  }, [re, p, Ee, M]);
  const Y = re && re.onFilled, se = re && re.onEmpty, ue = h.useCallback((oe) => {
    Ba(oe) ? Y && Y() : se && se();
  }, [Y, se]);
  ot(() => {
    Q && ue({
      value: G
    });
  }, [G, ue, Q]), ot(() => {
    if (!l)
      return;
    const oe = D.current;
    if (!oe)
      return;
    const xe = ct(oe), Le = Xn(xe), dt = Le == null || Le === xe.body || Le === xe.documentElement;
    oe === Le ? re && re.onFocus ? re.onFocus() : be(!0) : dt && oe.focus();
  }, [l]);
  const ve = (oe) => {
    g && g(oe), m.onFocus && m.onFocus(oe), re && re.onFocus ? re.onFocus(oe) : be(!0);
  }, le = (oe) => {
    M && M(oe), m.onBlur && m.onBlur(oe), re && re.onBlur ? re.onBlur(oe) : be(!1);
  }, Ie = (oe, ...xe) => {
    if (!Q) {
      const Le = oe.target || D.current;
      if (Le == null)
        throw new Error(vr(1));
      ue({
        value: Le.value
      });
    }
    m.onChange && m.onChange(oe, ...xe), N && N(oe, ...xe);
  };
  h.useEffect(() => {
    ue(D.current);
  }, []);
  const Ue = (oe) => {
    D.current && oe.currentTarget === oe.target && D.current.focus(), $ && $(oe);
  };
  let De = y, He = m;
  R && De === "input" && (j ? He = {
    type: void 0,
    minRows: j,
    maxRows: j,
    ...He
  } : He = {
    type: void 0,
    maxRows: T,
    minRows: k,
    ...He
  }, De = l2);
  const Ve = (oe) => {
    ue(oe.animationName === Da ? D.current : {
      value: "x"
    });
  };
  h.useEffect(() => {
    re && re.setAdornedStart(!!F);
  }, [re, F]);
  const lt = {
    ...r,
    color: fe.color || "primary",
    disabled: fe.disabled,
    endAdornment: d,
    error: fe.error,
    focused: fe.focused,
    formControl: re,
    fullWidth: b,
    hiddenLabel: fe.hiddenLabel,
    multiline: R,
    size: fe.size,
    startAdornment: F,
    type: X
  }, We = g2(lt), Se = W.root || Ju, Ke = B.root || {}, wt = W.input || ec;
  return He = {
    ...He,
    ...B.input
  }, /* @__PURE__ */ f.jsxs(h.Fragment, {
    children: [!v && typeof Hh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Uh || (Uh = /* @__PURE__ */ f.jsx(Hh, {}))), /* @__PURE__ */ f.jsxs(Se, {
      ...Ke,
      ref: n,
      onClick: Ue,
      ...q,
      ...!_a(Se) && {
        ownerState: {
          ...lt,
          ...Ke.ownerState
        }
      },
      className: te(We.root, Ke.className, a, L && "MuiInputBase-readOnly"),
      children: [F, /* @__PURE__ */ f.jsx(Mp.Provider, {
        value: null,
        children: /* @__PURE__ */ f.jsx(wt, {
          "aria-invalid": fe.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: c,
          disabled: fe.disabled,
          id: C,
          onAnimationStart: Ve,
          name: E,
          placeholder: P,
          readOnly: L,
          required: fe.required,
          rows: j,
          value: G,
          onKeyDown: O,
          onKeyUp: I,
          type: X,
          ...He,
          ...!_a(wt) && {
            as: De,
            ownerState: {
              ...lt,
              ...He.ownerState
            }
          },
          ref: ie,
          className: te(We.input, He.className, L && "MuiInputBase-readOnly"),
          onBlur: le,
          onChange: Ie,
          onFocus: ve
        })
      }), d, A ? A({
        ...fe,
        startAdornment: F
      }) : null]
    })]
  });
});
function y2(e) {
  return me("MuiFilledInput", e);
}
const Jr = {
  ...on,
  ...de("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function v2(e) {
  return me("MuiFormHelperText", e);
}
const Vh = de("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function x2(e) {
  return me("MuiFormLabel", e);
}
const cs = de("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function S2(e) {
  return me("MuiInput", e);
}
const Wi = {
  ...on,
  ...de("MuiInput", ["root", "underline", "input"])
};
function b2(e) {
  return me("MuiMenuItem", e);
}
const Ui = de("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function w2(e) {
  return me("MuiNativeSelect", e);
}
const Np = de("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function C2(e) {
  return me("MuiOutlinedInput", e);
}
const Vn = {
  ...on,
  ...de("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function k2({
  theme: e,
  ...t
}) {
  const n = er in e ? e[er] : void 0;
  return /* @__PURE__ */ f.jsx(W0, {
    ...t,
    themeId: n ? er : void 0,
    theme: n || e
  });
}
const El = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: T2
} = ck({
  themeId: er,
  // @ts-ignore ignore module augmentation tests
  theme: () => Qu({
    cssVariables: !0
  }),
  colorSchemeStorageKey: El.colorSchemeStorageKey,
  modeStorageKey: El.modeStorageKey,
  defaultColorScheme: {
    light: El.defaultLightColorScheme,
    dark: El.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: Y0(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return bo({
        sx: r,
        theme: this
      });
    }, t;
  }
}), E2 = T2;
function R2({
  theme: e,
  ...t
}) {
  const n = h.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = er in e ? e[er] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ f.jsx(k2, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ f.jsx(E2, {
    theme: e,
    ...t
  });
}
function Kh(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function P2(e) {
  return me("MuiSvgIcon", e);
}
de("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const I2 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ce(t)}`, `fontSize${ce(n)}`]
  };
  return he(o, P2, r);
}, M2 = K("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ce(n.color)}`], t[`fontSize${ce(n.fontSize)}`]];
  }
})(Te(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, u, c, p, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...mt(e, "fill", {
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
          color: (c = (u = (e.vars ?? e).palette) == null ? void 0 : u.action) == null ? void 0 : c.active
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
})), ef = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    inheritViewBox: c = !1,
    titleAccess: p,
    viewBox: v = "0 0 24 24",
    ...d
  } = r, x = /* @__PURE__ */ h.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: v,
    hasSvgAsChild: x
  }, C = {};
  c || (C.viewBox = v);
  const y = I2(b);
  return /* @__PURE__ */ f.jsxs(M2, {
    as: l,
    className: te(y.root, i),
    focusable: "false",
    color: u,
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
ef.muiName = "SvgIcon";
function gt(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ f.jsx(ef, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = ef.muiName, /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(n));
}
function tf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function nf(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = h.useRef(t !== void 0), [s, l] = h.useState(n), a = i ? t : s, u = h.useCallback((c) => {
    i || l(c);
  }, []);
  return [a, u];
}
function ex(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function $2(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((u) => {
      ex(u, l[u]) && typeof s[u] == "function" && (a[u] = (...c) => {
        s[u](...c), l[u](...c);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, u = te(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), c = n(a, l);
      return {
        ...l,
        ...a,
        ...c,
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
  const r = t, o = n(e, r), i = te(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
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
const Yh = {};
function Lp(e, t) {
  const n = h.useRef(Yh);
  return n.current === Yh && (n.current = e(t)), n;
}
function j2(e) {
  const t = Lp(() => O2(e)).current;
  return t.next = e, ot(t.effect), t;
}
function O2(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Gh = Zg.createContext(null);
function A2(e) {
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
function N2(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = A2(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function tx(e) {
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
    getAutoTimeout: c,
    nodeRef: p,
    onEnter: v,
    onEntering: d,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: y,
    children: m,
    ...S
  } = e, w = h.useContext(Gh), T = w && !w.isMounting ? r : n, [k, R] = h.useState(() => t ? T ? "exited" : "entered" : i || s ? "unmounted" : "exited"), E = h.useRef(k);
  E.current = k, t && k === "unmounted" && (E.current = "exited", R("exited"));
  const M = h.useRef(t && T), N = h.useRef(!1), $ = h.useRef(null), g = h.useRef(k), O = h.useRef(!1), I = h.useRef(u), P = j2({
    timeout: l,
    addEndListener: a,
    reduceMotion: u,
    getAutoTimeout: c,
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
  }), L = h.useCallback(() => {
    $.current !== null && ($.current.cancel(), $.current = null);
  }, []), A = h.useCallback((F) => {
    let X = !0;
    const U = () => {
      X && (X = !1, $.current = null, F());
    };
    return U.cancel = () => {
      X = !1;
    }, $.current = U, U;
  }, []), j = h.useCallback((F, X) => {
    var se, ue;
    let U;
    const q = () => {
      U !== void 0 && (clearTimeout(U), U = void 0);
    }, G = A(() => {
      q(), E.current = F, R(F);
    }), Q = G.cancel;
    G.cancel = () => {
      q(), Q();
    };
    const D = P.current.nodeRef.current, ne = P.current.addEndListener, ie = P.current.getAutoTimeout !== void 0, Ee = (ue = (se = P.current).getAutoTimeout) == null ? void 0 : ue.call(se), be = N2({
      currentStatus: X,
      isAppearing: O.current,
      timeout: P.current.timeout,
      autoTimeout: Ee
    }), fe = I.current, re = be ?? (fe && ie ? 0 : null), Y = (ve) => {
      U = setTimeout(G, ve);
    };
    if (!D) {
      Y(0);
      return;
    }
    if (ne) {
      re != null && Y(fe ? 0 : re), ne.length >= 2 ? ne(D, G) : ne(G);
      return;
    }
    Y(fe ? 0 : be ?? 0);
  }, [A, P]), z = h.useCallback((F) => {
    var q;
    const X = P.current, U = X.parentGroup ? X.parentGroup.isMounting : F;
    if (O.current = U, !F && !X.enter) {
      E.current = "entered", R("entered");
      return;
    }
    I.current = X.reduceMotion, (q = X.onEnter) == null || q.call(X, U), E.current = "entering", R("entering");
  }, [P]), B = h.useCallback(() => {
    var X;
    const F = P.current;
    if (!F.exit) {
      E.current = "exited", R("exited");
      return;
    }
    I.current = F.reduceMotion, (X = F.onExit) == null || X.call(F), E.current = "exiting", R("exiting");
  }, [P]), W = h.useCallback((F, X) => {
    if (L(), X === "entering") {
      const U = P.current;
      if (U.mountOnEnter || U.unmountOnExit) {
        const q = U.nodeRef.current;
        q && jp(q);
      }
      z(F);
    } else
      B();
  }, [L, z, B, P]);
  return ot(() => (N.current = !0, M.current && (M.current = !1, W(!0, "entering")), () => {
    N.current = !1, L();
  }), [L, W]), ot(() => {
    if (!N.current)
      return;
    const F = E.current;
    t ? F !== "entering" && F !== "entered" && W(!1, "entering") : F === "entering" || F === "entered" ? W(!1, "exiting") : F === "exited" && s && (E.current = "unmounted", R("unmounted"));
  }, [t, k, s, W]), ot(() => {
    var q, G, Q, D;
    if (k === "unmounted" || g.current === "unmounted") {
      g.current = k;
      return;
    }
    const X = g.current !== k;
    X && (g.current = k);
    const U = P.current;
    k === "entering" ? (X && ((q = U.onEntering) == null || q.call(U, O.current)), $.current === null && E.current === k && j("entered", "entering")) : k === "exiting" ? (X && ((G = U.onExiting) == null || G.call(U)), $.current === null && E.current === k && j("exited", "exiting")) : k === "entered" && X ? (Q = U.onEntered) == null || Q.call(U, O.current) : k === "exited" && X && ((D = U.onExited) == null || D.call(U));
  }, [P, j, k]), k === "unmounted" ? null : /* @__PURE__ */ f.jsx(Gh.Provider, {
    value: null,
    children: m(k, S)
  });
}
const nx = "(prefers-reduced-motion: reduce)", L2 = 0, z2 = "0ms", _2 = () => {
}, Qh = () => !1, B2 = () => !0, F2 = () => _2;
function D2(e) {
  const [t, n] = h.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), ot(() => {
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
    const i = window.matchMedia(nx), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const W2 = {
  ...ca
}, rx = W2.useSyncExternalStore;
function U2(e) {
  const t = e ? B2 : Qh, [n, r] = h.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [Qh, F2];
    const o = window.matchMedia(nx);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return rx(r, n, t);
}
const H2 = rx !== void 0 ? U2 : D2;
function tc(e, t) {
  const n = H2(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return h.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: L2,
        delay: z2
      } : o;
    }
  }), [r]);
}
function ox(e, t, n) {
  return e === void 0 || _a(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function ix(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Wa(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    ex(n, e[n]) && (t[n] = e[n]);
  return t;
}
function Xh(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function sx(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const d = te(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), x = {
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
  }), l = Xh(r), a = Xh(o), u = t(s), c = te(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, v = {
    ...u,
    ...n,
    ...a,
    ...l
  };
  return c.length > 0 && (v.className = c), Object.keys(p).length > 0 && (v.style = p), {
    props: v,
    internalRef: u.ref
  };
}
function Re(e, t) {
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
    slots: c = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...v
  } = i, d = c[e] || r, x = ix(p[e], o), {
    props: {
      component: b,
      ...C
    },
    internalRef: y
  } = sx({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: x
  }), m = st(y, x == null ? void 0 : x.ref, t.ref), S = e === "root" ? b || u : b, w = ox(d, {
    ...e === "root" && !u && !c[e] && s,
    ...e !== "root" && !c[e] && s,
    ...C,
    ...S && !l && {
      as: S
    },
    ...S && l && {
      component: S
    },
    ref: m
  }, o);
  return [d, w];
}
function V2(e) {
  return me("MuiPaper", e);
}
de("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const K2 = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return he(i, V2, o);
}, Y2 = K("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Te(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  ...mt(e, "box-shadow"),
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
}))), Sr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var d;
  const r = ye({
    props: t,
    name: "MuiPaper"
  }), o = Qr(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: u = "elevation",
    ...c
  } = r, p = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: u
  }, v = K2(p);
  return /* @__PURE__ */ f.jsx(Y2, {
    as: s,
    ownerState: p,
    className: te(v.root, i),
    ref: n,
    ...c,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (d = o.vars.overlays) == null ? void 0 : d[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ds("#fff", Zd(l))}, ${Ds("#fff", Zd(l))})`
        }
      },
      ...c.style
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
function G2(e) {
  const {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: i
  } = e, s = r && t !== !1, l = r && t === !1;
  return h.useMemo(() => {
    const u = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(c) {
        n && t && c.key !== "Tab" && c.preventDefault();
      }
    };
    return r || (u.tabIndex = o, !i && n && (u.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (u["aria-disabled"] = n), i && (!t || l) && (u.disabled = n), u;
  }, [r, n, t, s, l, i, o]);
}
const Q2 = {};
function X2(e) {
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
  } = e, c = h.useRef(null), p = s === !0, v = G2({
    focusableWhenDisabled: p,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), d = h.useCallback(() => {
    const C = c.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), x = h.useMemo(() => {
    const C = p ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, p || (C.disabled = n)) : (C.role = "button", !p && n && (C["aria-disabled"] = n)), p ? {
      ...C,
      ...v
    } : C;
  }, [n, p, v, o, t, i, r]);
  return {
    getButtonProps: h.useCallback((C = Q2) => {
      const {
        onClick: y,
        onKeyDown: m,
        onKeyUp: S,
        ...w
      } = C;
      return {
        ...x,
        ...w,
        onClick: (E) => {
          if (l && E.stopPropagation(), n) {
            E.preventDefault();
            return;
          }
          y == null || y(E);
        },
        onKeyDown: (E) => {
          if (p && v.onKeyDown(E), !n && (a == null || a(E), m == null || m(E), !(E.target !== E.currentTarget || d()))) {
            if (E.key === " ") {
              E.preventDefault();
              return;
            }
            E.key === "Enter" && (E.preventDefault(), E.currentTarget.click());
          }
        },
        onKeyUp: (E) => {
          n || (u == null || u(E), S == null || S(E), E.target === E.currentTarget && !d() && E.key === " " && !E.defaultPrevented && E.currentTarget.click());
        }
      };
    }, [x, n, p, v, d, a, u, l]),
    rootRef: c
  };
}
class Ha {
  constructor() {
    $i(this, "mountEffect", () => {
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
    const t = Lp(Ha.create).current, [n, r] = h.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, h.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Z2(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function q2() {
  return Ha.use();
}
function Z2() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const J2 = [];
function lx(e) {
  h.useEffect(e, J2);
}
class nc {
  constructor() {
    $i(this, "currentId", null);
    $i(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    $i(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new nc();
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
function qn() {
  const e = Lp(nc.create).current;
  return lx(e.disposeEffect), e;
}
function eT(e) {
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
  } = e, [c, p] = h.useState(!1), v = qn(), d = h.useRef(!1), x = h.useRef(a);
  x.current = a;
  const b = a != null, C = te(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, m = te(n.child, c && n.childLeaving, r && n.childPulsate);
  return !l && !c && p(!0), h.useEffect(() => {
    !l && b ? d.current || (d.current = !0, v.start(u, () => {
      var S;
      d.current = !1, (S = x.current) == null || S.call(x);
    })) : (d.current = !1, v.clear());
  }, [v, b, l, u]), /* @__PURE__ */ f.jsx("span", {
    className: C,
    style: y,
    children: /* @__PURE__ */ f.jsx("span", {
      className: m
    })
  });
}
const Ut = de("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), rf = 550, tT = 80, Rl = {}, qh = [], nT = () => {
};
function Hc(e, t) {
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
function rT({
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
const oT = Js`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, iT = Js`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, sT = Js`
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
function lT(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = _s`
    &.${Ut.rippleVisible} {
      animation-name: ${oT};
      animation-duration: ${rf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Ut.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Ut.childLeaving} {
      animation-name: ${iT};
      animation-duration: ${rf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Ut.childPulsate} {
      animation-name: ${sT};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? _s`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const aT = K("span", {
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
}), uT = K(eT, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ut.rippleVisible} {
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
  & .${Ut.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ut.childLeaving} {
    opacity: 0;
  }

  & .${Ut.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => lT(e)}
`, cT = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTouchRipple"
  }), o = Qr(), i = tc(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Rl,
    className: a,
    ...u
  } = r, [c, p] = h.useState({
    items: qh,
    order: qh
  }), v = c.items, d = h.useRef(0), x = h.useRef(null), b = h.useRef(!1);
  lx(() => (b.current = !0, () => {
    b.current = !1;
  })), h.useEffect(() => {
    x.current && (x.current(), x.current = null);
  }, [v]);
  const C = h.useRef(!1), y = qn(), m = h.useRef(null), S = h.useRef(null), w = Xe(($) => {
    b.current && p((g) => {
      const O = g.items.filter((P) => P.key !== $), I = Hc(g.order.filter((P) => P !== $), O.filter((P) => !P.exiting).map((P) => P.key));
      return {
        items: O,
        order: I
      };
    });
  }), T = Xe(($) => {
    const {
      pulsate: g,
      rippleX: O,
      rippleY: I,
      rippleSize: P,
      cb: L
    } = $, A = d.current;
    d.current += 1, p((j) => {
      const z = [...j.items, {
        key: A,
        pulsate: g,
        rippleX: O,
        rippleY: I,
        rippleSize: P,
        exiting: !1
      }];
      return {
        items: z,
        order: Hc(j.order, z.filter((B) => !B.exiting).map((B) => B.key))
      };
    }), x.current = L;
  }), k = Xe(($ = Rl, g = Rl, O = nT) => {
    const {
      pulsate: I = !1,
      center: P = s || g.pulsate,
      fakeElement: L = !1
      // Used only by tests.
    } = g;
    if (($ == null ? void 0 : $.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    ($ == null ? void 0 : $.type) === "touchstart" && (C.current = !0);
    const A = L ? null : S.current, {
      rippleX: j,
      rippleY: z,
      rippleSize: B
    } = rT({
      event: $,
      element: A,
      center: P
    });
    $ != null && $.touches ? m.current === null && (m.current = () => {
      T({
        pulsate: I,
        rippleX: j,
        rippleY: z,
        rippleSize: B,
        cb: O
      });
    }, y.start(tT, () => {
      m.current && (m.current(), m.current = null);
    })) : T({
      pulsate: I,
      rippleX: j,
      rippleY: z,
      rippleSize: B,
      cb: O
    });
  }), R = Xe(() => {
    k(Rl, {
      pulsate: !0
    });
  }), E = Xe(($, g) => {
    if (y.clear(), ($ == null ? void 0 : $.type) === "touchend" && m.current) {
      m.current(), m.current = null, y.start(0, () => {
        E($, g);
      });
      return;
    }
    m.current = null, p((O) => {
      const I = O.items.findIndex((L) => !L.exiting);
      if (I === -1)
        return O;
      const P = O.items.slice();
      return P[I] = {
        ...P[I],
        exiting: !0
      }, {
        items: P,
        order: Hc(O.order, P.filter((L) => !L.exiting).map((L) => L.key))
      };
    }), x.current = g;
  });
  h.useImperativeHandle(n, () => ({
    pulsate: R,
    start: k,
    stop: E
  }), [R, k, E]);
  const M = new Map(v.map(($) => [$.key, $])), N = c.order.map(($) => M.get($)).filter(Boolean);
  return /* @__PURE__ */ f.jsx(aT, {
    className: te(Ut.root, l.root, a),
    ref: S,
    ...u,
    children: N.map(($) => /* @__PURE__ */ f.jsx(uT, {
      classes: {
        ripple: te(l.ripple, Ut.ripple),
        rippleVisible: te(l.rippleVisible, Ut.rippleVisible),
        ripplePulsate: te(l.ripplePulsate, Ut.ripplePulsate),
        child: te(l.child, Ut.child),
        childLeaving: te(l.childLeaving, Ut.childLeaving),
        childPulsate: te(l.childPulsate, Ut.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : rf,
      pulsate: $.pulsate,
      rippleX: $.rippleX,
      rippleY: $.rippleY,
      rippleSize: $.rippleSize,
      in: !$.exiting,
      onExited: () => w($.key)
    }, $.key))
  });
});
function dT(e) {
  return me("MuiButtonBase", e);
}
const fT = de("MuiButtonBase", ["root", "disabled", "focusVisible"]), pT = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = he({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, dT, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, mT = K("button", {
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
  [`&.${fT.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), wo = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disableRipple: c = !1,
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
    nativeButton: m,
    onBlur: S,
    onClick: w,
    onContextMenu: T,
    onDragLeave: k,
    onFocus: R,
    onFocusVisible: E,
    onKeyDown: M,
    onKeyUp: N,
    onMouseDown: $,
    onMouseLeave: g,
    onMouseUp: O,
    onTouchEnd: I,
    onTouchMove: P,
    onTouchStart: L,
    tabIndex: A = 0,
    TouchRippleProps: j,
    touchRippleRef: z,
    type: B,
    ...W
  } = r, F = !!(W.href || W.to), X = !!W.formAction;
  let U = a;
  U === "button" && F && (U = y);
  const G = m ?? (typeof U == "string" ? U === "button" : C ?? !1), Q = q2(), D = st(Q.ref, z), [ne, ie] = h.useState(!1);
  (u || b) && ne && ie(!1);
  const Ee = Xe((Ce) => {
    v && !Ce.repeat && ne && Ce.key === " " && Q.stop(Ce, () => {
      Q.start(Ce);
    });
  }), be = Xe((Ce) => {
    v && Ce.key === " " && ne && !Ce.defaultPrevented && Q.stop(Ce, () => {
      Q.pulsate(Ce);
    });
  }), {
    getButtonProps: fe,
    rootRef: re
  } = X2({
    nativeButton: G,
    disabled: u,
    type: B,
    hasFormAction: X,
    tabIndex: A,
    onBeforeKeyDown: Ee,
    onBeforeKeyUp: be
  }), {
    onClick: Y,
    onKeyDown: se,
    onKeyUp: ue,
    ...ve
  } = fe({
    onClick: w,
    onKeyDown: M,
    onKeyUp: N
  });
  h.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ie(!0), re.current.focus();
    }
  }), [re]);
  const le = Q.shouldMount && !c && !u;
  h.useEffect(() => {
    ne && v && !c && Q.pulsate();
  }, [c, v, ne, Q]);
  const Ie = sr(Q, "start", $, p), Ue = sr(Q, "stop", T, p), De = sr(Q, "stop", k, p), He = sr(Q, "stop", O, p), Ve = sr(Q, "stop", (Ce) => {
    ne && Ce.preventDefault(), g && g(Ce);
  }, p), lt = sr(Q, "start", L, p), We = sr(Q, "stop", I, p), Se = sr(Q, "stop", P, p), Ke = sr(Q, "stop", (Ce) => {
    Ua(Ce.target) || ie(!1), S && S(Ce);
  }, !1), wt = Xe((Ce) => {
    re.current || (re.current = Ce.currentTarget), !b && Ua(Ce.target) && (ie(!0), E && E(Ce)), R && R(Ce);
  }), oe = {};
  F && (oe.tabIndex = u ? -1 : A, u && (oe["aria-disabled"] = u), oe.type = B);
  const xe = st(n, re), Le = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: p,
    focusRipple: v,
    suppressFocusVisible: b,
    tabIndex: A,
    focusVisible: ne
  }, dt = pT(Le);
  return /* @__PURE__ */ f.jsxs(mT, {
    as: U,
    className: te(dt.root, l),
    ownerState: Le,
    onBlur: Ke,
    onClick: Y,
    onContextMenu: Ue,
    onFocus: wt,
    onKeyDown: se,
    onKeyUp: ue,
    onMouseDown: Ie,
    onMouseLeave: Ve,
    onMouseUp: He,
    onDragLeave: De,
    onTouchEnd: We,
    onTouchMove: Se,
    onTouchStart: lt,
    ref: xe,
    ...F ? oe : ve,
    ...W,
    children: [s, le ? /* @__PURE__ */ f.jsx(cT, {
      ref: D,
      center: i,
      ...j
    }) : null]
  });
});
function sr(e, t, n, r = !1) {
  return Xe((o) => (n && n(o), r || e[t](o), !0));
}
function hT(e) {
  return typeof e.main == "string";
}
function gT(e, t = []) {
  if (!hT(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function wn(e = []) {
  return ([, t]) => t && gT(t, e);
}
function yT(e) {
  return me("MuiCircularProgress", e);
}
de("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const jn = 44, of = Js`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, sf = Js`
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
`, vT = typeof of != "string" ? _s`
        animation: ${of} 1.4s linear infinite;
      ` : null, xT = typeof sf != "string" ? _s`
        animation: ${sf} 1.4s ease-in-out infinite;
      ` : null, ST = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${ce(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return he(i, yT, t);
}, bT = K("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ce(n.color)}`]];
  }
})(Te(({
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
        ...mt(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: vT || {
        animation: `${of} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(wn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), wT = K("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), CT = K("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(Te(({
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
        ...mt(e, "stroke-dashoffset")
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
      style: xT || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${sf} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), kT = K("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(Te(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), ds = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    size: c = 40,
    style: p,
    thickness: v = 3.6,
    value: d = r.min ?? 0,
    variant: x = "indeterminate",
    ...b
  } = r, C = a ?? 0, y = u ?? 100, m = {
    ...r,
    color: i,
    disableShrink: s,
    size: c,
    thickness: v,
    value: d,
    variant: x,
    enableTrackSlot: l
  }, S = ST(m), w = {}, T = {}, k = {};
  if (x === "determinate") {
    const R = 2 * Math.PI * ((jn - v) / 2), E = y - C;
    w.strokeDasharray = R.toFixed(3), w.strokeDashoffset = E > 0 ? `${((y - d) / E * R).toFixed(3)}px` : `${R.toFixed(3)}px`, T.transform = "rotate(-90deg)", k["aria-valuenow"] = d, k["aria-valuemin"] = C, k["aria-valuemax"] = y;
  }
  return /* @__PURE__ */ f.jsx(bT, {
    className: te(S.root, o),
    style: {
      width: c,
      height: c,
      ...T,
      ...p
    },
    ownerState: m,
    ref: n,
    role: "progressbar",
    ...k,
    ...b,
    children: /* @__PURE__ */ f.jsxs(wT, {
      className: S.svg,
      ownerState: m,
      viewBox: `${jn / 2} ${jn / 2} ${jn} ${jn}`,
      children: [l ? /* @__PURE__ */ f.jsx(kT, {
        className: S.track,
        ownerState: m,
        cx: jn,
        cy: jn,
        r: (jn - v) / 2,
        fill: "none",
        strokeWidth: v,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ f.jsx(CT, {
        className: S.circle,
        style: w,
        ownerState: m,
        cx: jn,
        cy: jn,
        r: (jn - v) / 2,
        fill: "none",
        strokeWidth: v
      })]
    })
  });
});
function TT(e) {
  return me("MuiIconButton", e);
}
const Zh = de("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), ET = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${ce(r)}`, o && `edge${ce(o)}`, `size${ce(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return he(l, TT, t);
}, RT = K(wo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ce(n.color)}`], n.edge && t[`edge${ce(n.edge)}`], t[`size${ce(n.size)}`]];
  }
})(Te(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  ...mt(e, "background-color", {
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
})), Te(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(wn()).map(([t]) => ({
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
  [`&.${Zh.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Zh.loading}`]: {
    color: "transparent"
  }
}))), PT = K("span", {
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
})), Er = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    size: c = "medium",
    id: p,
    loading: v = null,
    loadingIndicator: d,
    ...x
  } = r, b = xr(p), C = d ?? /* @__PURE__ */ f.jsx(ds, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), y = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: u,
    loading: v,
    loadingIndicator: C,
    size: c
  }, m = ET(y);
  return /* @__PURE__ */ f.jsxs(RT, {
    id: v ? b : p,
    className: te(m.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !u,
    disabled: a || v,
    ref: n,
    ...x,
    ownerState: y,
    children: [typeof v == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ f.jsx("span", {
      className: m.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ f.jsx(PT, {
        className: m.loadingIndicator,
        ownerState: y,
        children: v && C
      })
    }), i]
  });
});
function IT(e) {
  return me("MuiTypography", e);
}
de("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const MT = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${ce(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return he(s, IT, i);
}, $T = K("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ce(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(Te(({
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
    })), ...Object.entries(e.palette).filter(wn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${ce(n)}`
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
})), Jh = {
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
}, Me = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    variant: c = "body1",
    variantMapping: p = Jh,
    ...v
  } = r, d = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: u,
    variant: c,
    variantMapping: p
  }, x = l || p[c] || Jh[c] || "span", b = MT(d);
  return /* @__PURE__ */ f.jsx($T, {
    as: x,
    ref: n,
    className: te(b.root, s),
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
function po(e, t) {
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
var Zt = "top", Rn = "bottom", Pn = "right", Jt = "left", zp = "auto", tl = [Zt, Rn, Pn, Jt], yi = "start", Ws = "end", jT = "clippingParents", ax = "viewport", Hi = "popper", OT = "reference", eg = /* @__PURE__ */ tl.reduce(function(e, t) {
  return e.concat([t + "-" + yi, t + "-" + Ws]);
}, []), ux = /* @__PURE__ */ [].concat(tl, [zp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + yi, t + "-" + Ws]);
}, []), AT = "beforeRead", NT = "read", LT = "afterRead", zT = "beforeMain", _T = "main", BT = "afterMain", FT = "beforeWrite", DT = "write", WT = "afterWrite", UT = [AT, NT, LT, zT, _T, BT, FT, DT, WT];
function rr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function dn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Co(e) {
  var t = dn(e).Element;
  return e instanceof t || e instanceof Element;
}
function kn(e) {
  var t = dn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function _p(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = dn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function HT(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !kn(i) || !rr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function VT(e) {
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
      !kn(o) || !rr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const KT = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: HT,
  effect: VT,
  requires: ["computeStyles"]
};
function nr(e) {
  return e.split("-")[0];
}
var mo = Math.max, Va = Math.min, vi = Math.round;
function lf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function cx() {
  return !/^((?!chrome|android).)*safari/i.test(lf());
}
function xi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && kn(e) && (o = e.offsetWidth > 0 && vi(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && vi(r.height) / e.offsetHeight || 1);
  var s = Co(e) ? dn(e) : window, l = s.visualViewport, a = !cx() && n, u = (r.left + (a && l ? l.offsetLeft : 0)) / o, c = (r.top + (a && l ? l.offsetTop : 0)) / i, p = r.width / o, v = r.height / i;
  return {
    width: p,
    height: v,
    top: c,
    right: u + p,
    bottom: c + v,
    left: u,
    x: u,
    y: c
  };
}
function Bp(e) {
  var t = xi(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function dx(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && _p(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function br(e) {
  return dn(e).getComputedStyle(e);
}
function YT(e) {
  return ["table", "td", "th"].indexOf(rr(e)) >= 0;
}
function Xr(e) {
  return ((Co(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function rc(e) {
  return rr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (_p(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xr(e)
  );
}
function tg(e) {
  return !kn(e) || // https://github.com/popperjs/popper-core/issues/837
  br(e).position === "fixed" ? null : e.offsetParent;
}
function GT(e) {
  var t = /firefox/i.test(lf()), n = /Trident/i.test(lf());
  if (n && kn(e)) {
    var r = br(e);
    if (r.position === "fixed")
      return null;
  }
  var o = rc(e);
  for (_p(o) && (o = o.host); kn(o) && ["html", "body"].indexOf(rr(o)) < 0; ) {
    var i = br(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function nl(e) {
  for (var t = dn(e), n = tg(e); n && YT(n) && br(n).position === "static"; )
    n = tg(n);
  return n && (rr(n) === "html" || rr(n) === "body" && br(n).position === "static") ? t : n || GT(e) || t;
}
function Fp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fs(e, t, n) {
  return mo(e, Va(t, n));
}
function QT(e, t, n) {
  var r = fs(e, t, n);
  return r > n ? n : r;
}
function fx() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function px(e) {
  return Object.assign({}, fx(), e);
}
function mx(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var XT = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, px(typeof t != "number" ? t : mx(t, tl));
};
function qT(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = nr(n.placement), a = Fp(l), u = [Jt, Pn].indexOf(l) >= 0, c = u ? "height" : "width";
  if (!(!i || !s)) {
    var p = XT(o.padding, n), v = Bp(i), d = a === "y" ? Zt : Jt, x = a === "y" ? Rn : Pn, b = n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c], C = s[a] - n.rects.reference[a], y = nl(i), m = y ? a === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, S = b / 2 - C / 2, w = p[d], T = m - v[c] - p[x], k = m / 2 - v[c] / 2 + S, R = fs(w, k, T), E = a;
    n.modifiersData[r] = (t = {}, t[E] = R, t.centerOffset = R - k, t);
  }
}
function ZT(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || dx(t.elements.popper, o) && (t.elements.arrow = o));
}
const JT = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: qT,
  effect: ZT,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Si(e) {
  return e.split("-")[1];
}
var eE = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function tE(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: vi(n * o) / o || 0,
    y: vi(r * o) / o || 0
  };
}
function ng(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, v = s.x, d = v === void 0 ? 0 : v, x = s.y, b = x === void 0 ? 0 : x, C = typeof c == "function" ? c({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  d = C.x, b = C.y;
  var y = s.hasOwnProperty("x"), m = s.hasOwnProperty("y"), S = Jt, w = Zt, T = window;
  if (u) {
    var k = nl(n), R = "clientHeight", E = "clientWidth";
    if (k === dn(n) && (k = Xr(n), br(k).position !== "static" && l === "absolute" && (R = "scrollHeight", E = "scrollWidth")), k = k, o === Zt || (o === Jt || o === Pn) && i === Ws) {
      w = Rn;
      var M = p && k === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      b -= M - r.height, b *= a ? 1 : -1;
    }
    if (o === Jt || (o === Zt || o === Rn) && i === Ws) {
      S = Pn;
      var N = p && k === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[E]
      );
      d -= N - r.width, d *= a ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: l
  }, u && eE), g = c === !0 ? tE({
    x: d,
    y: b
  }, dn(n)) : {
    x: d,
    y: b
  };
  if (d = g.x, b = g.y, a) {
    var O;
    return Object.assign({}, $, (O = {}, O[w] = m ? "0" : "", O[S] = y ? "0" : "", O.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", O));
  }
  return Object.assign({}, $, (t = {}, t[w] = m ? b + "px" : "", t[S] = y ? d + "px" : "", t.transform = "", t));
}
function nE(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, u = {
    placement: nr(t.placement),
    variation: Si(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ng(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ng(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const rE = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: nE,
  data: {}
};
var Pl = {
  passive: !0
};
function oE(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = dn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Pl);
  }), l && a.addEventListener("resize", n.update, Pl), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Pl);
    }), l && a.removeEventListener("resize", n.update, Pl);
  };
}
const iE = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: oE,
  data: {}
};
var sE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function aa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return sE[t];
  });
}
var lE = {
  start: "end",
  end: "start"
};
function rg(e) {
  return e.replace(/start|end/g, function(t) {
    return lE[t];
  });
}
function Dp(e) {
  var t = dn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Wp(e) {
  return xi(Xr(e)).left + Dp(e).scrollLeft;
}
function aE(e, t) {
  var n = dn(e), r = Xr(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = cx();
    (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Wp(e),
    y: a
  };
}
function uE(e) {
  var t, n = Xr(e), r = Dp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = mo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = mo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Wp(e), a = -r.scrollTop;
  return br(o || n).direction === "rtl" && (l += mo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Up(e) {
  var t = br(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function hx(e) {
  return ["html", "body", "#document"].indexOf(rr(e)) >= 0 ? e.ownerDocument.body : kn(e) && Up(e) ? e : hx(rc(e));
}
function ps(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = hx(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = dn(r), s = o ? [i].concat(i.visualViewport || [], Up(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(ps(rc(s)))
  );
}
function af(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function cE(e, t) {
  var n = xi(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function og(e, t, n) {
  return t === ax ? af(aE(e, n)) : Co(t) ? cE(t, n) : af(uE(Xr(e)));
}
function dE(e) {
  var t = ps(rc(e)), n = ["absolute", "fixed"].indexOf(br(e).position) >= 0, r = n && kn(e) ? nl(e) : e;
  return Co(r) ? t.filter(function(o) {
    return Co(o) && dx(o, r) && rr(o) !== "body";
  }) : [];
}
function fE(e, t, n, r) {
  var o = t === "clippingParents" ? dE(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, u) {
    var c = og(e, u, r);
    return a.top = mo(c.top, a.top), a.right = Va(c.right, a.right), a.bottom = Va(c.bottom, a.bottom), a.left = mo(c.left, a.left), a;
  }, og(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function gx(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? nr(r) : null, i = r ? Si(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case Zt:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Rn:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Pn:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Jt:
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
  var u = o ? Fp(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case yi:
        a[u] = a[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Ws:
        a[u] = a[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return a;
}
function Us(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? jT : l, u = n.rootBoundary, c = u === void 0 ? ax : u, p = n.elementContext, v = p === void 0 ? Hi : p, d = n.altBoundary, x = d === void 0 ? !1 : d, b = n.padding, C = b === void 0 ? 0 : b, y = px(typeof C != "number" ? C : mx(C, tl)), m = v === Hi ? OT : Hi, S = e.rects.popper, w = e.elements[x ? m : v], T = fE(Co(w) ? w : w.contextElement || Xr(e.elements.popper), a, c, s), k = xi(e.elements.reference), R = gx({
    reference: k,
    element: S,
    placement: o
  }), E = af(Object.assign({}, S, R)), M = v === Hi ? E : k, N = {
    top: T.top - M.top + y.top,
    bottom: M.bottom - T.bottom + y.bottom,
    left: T.left - M.left + y.left,
    right: M.right - T.right + y.right
  }, $ = e.modifiersData.offset;
  if (v === Hi && $) {
    var g = $[o];
    Object.keys(N).forEach(function(O) {
      var I = [Pn, Rn].indexOf(O) >= 0 ? 1 : -1, P = [Zt, Rn].indexOf(O) >= 0 ? "y" : "x";
      N[O] += g[P] * I;
    });
  }
  return N;
}
function pE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? ux : a, c = Si(r), p = c ? l ? eg : eg.filter(function(x) {
    return Si(x) === c;
  }) : tl, v = p.filter(function(x) {
    return u.indexOf(x) >= 0;
  });
  v.length === 0 && (v = p);
  var d = v.reduce(function(x, b) {
    return x[b] = Us(e, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[nr(b)], x;
  }, {});
  return Object.keys(d).sort(function(x, b) {
    return d[x] - d[b];
  });
}
function mE(e) {
  if (nr(e) === zp)
    return [];
  var t = aa(e);
  return [rg(e), t, rg(t)];
}
function hE(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, v = n.altBoundary, d = n.flipVariations, x = d === void 0 ? !0 : d, b = n.allowedAutoPlacements, C = t.options.placement, y = nr(C), m = y === C, S = a || (m || !x ? [aa(C)] : mE(C)), w = [C].concat(S).reduce(function(U, q) {
      return U.concat(nr(q) === zp ? pE(t, {
        placement: q,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: x,
        allowedAutoPlacements: b
      }) : q);
    }, []), T = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), E = !0, M = w[0], N = 0; N < w.length; N++) {
      var $ = w[N], g = nr($), O = Si($) === yi, I = [Zt, Rn].indexOf(g) >= 0, P = I ? "width" : "height", L = Us(t, {
        placement: $,
        boundary: c,
        rootBoundary: p,
        altBoundary: v,
        padding: u
      }), A = I ? O ? Pn : Jt : O ? Rn : Zt;
      T[P] > k[P] && (A = aa(A));
      var j = aa(A), z = [];
      if (i && z.push(L[g] <= 0), l && z.push(L[A] <= 0, L[j] <= 0), z.every(function(U) {
        return U;
      })) {
        M = $, E = !1;
        break;
      }
      R.set($, z);
    }
    if (E)
      for (var B = x ? 3 : 1, W = function(q) {
        var G = w.find(function(Q) {
          var D = R.get(Q);
          if (D)
            return D.slice(0, q).every(function(ne) {
              return ne;
            });
        });
        if (G)
          return M = G, "break";
      }, F = B; F > 0; F--) {
        var X = W(F);
        if (X === "break") break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const gE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: hE,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ig(e, t, n) {
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
function sg(e) {
  return [Zt, Pn, Rn, Jt].some(function(t) {
    return e[t] >= 0;
  });
}
function yE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Us(t, {
    elementContext: "reference"
  }), l = Us(t, {
    altBoundary: !0
  }), a = ig(s, r), u = ig(l, o, i), c = sg(a), p = sg(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": p
  });
}
const vE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: yE
};
function xE(e, t, n) {
  var r = nr(e), o = [Jt, Zt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [Jt, Pn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function SE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = ux.reduce(function(c, p) {
    return c[p] = xE(p, t.rects, i), c;
  }, {}), l = s[t.placement], a = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const bE = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: SE
};
function wE(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = gx({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const CE = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: wE,
  data: {}
};
function kE(e) {
  return e === "x" ? "y" : "x";
}
function TE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, v = n.tether, d = v === void 0 ? !0 : v, x = n.tetherOffset, b = x === void 0 ? 0 : x, C = Us(t, {
    boundary: a,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), y = nr(t.placement), m = Si(t.placement), S = !m, w = Fp(y), T = kE(w), k = t.modifiersData.popperOffsets, R = t.rects.reference, E = t.rects.popper, M = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, N = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, g = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var O, I = w === "y" ? Zt : Jt, P = w === "y" ? Rn : Pn, L = w === "y" ? "height" : "width", A = k[w], j = A + C[I], z = A - C[P], B = d ? -E[L] / 2 : 0, W = m === yi ? R[L] : E[L], F = m === yi ? -E[L] : -R[L], X = t.elements.arrow, U = d && X ? Bp(X) : {
        width: 0,
        height: 0
      }, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : fx(), G = q[I], Q = q[P], D = fs(0, R[L], U[L]), ne = S ? R[L] / 2 - B - D - G - N.mainAxis : W - D - G - N.mainAxis, ie = S ? -R[L] / 2 + B + D + Q + N.mainAxis : F + D + Q + N.mainAxis, Ee = t.elements.arrow && nl(t.elements.arrow), be = Ee ? w === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0 : 0, fe = (O = $ == null ? void 0 : $[w]) != null ? O : 0, re = A + ne - fe - be, Y = A + ie - fe, se = fs(d ? Va(j, re) : j, A, d ? mo(z, Y) : z);
      k[w] = se, g[w] = se - A;
    }
    if (l) {
      var ue, ve = w === "x" ? Zt : Jt, le = w === "x" ? Rn : Pn, Ie = k[T], Ue = T === "y" ? "height" : "width", De = Ie + C[ve], He = Ie - C[le], Ve = [Zt, Jt].indexOf(y) !== -1, lt = (ue = $ == null ? void 0 : $[T]) != null ? ue : 0, We = Ve ? De : Ie - R[Ue] - E[Ue] - lt + N.altAxis, Se = Ve ? Ie + R[Ue] + E[Ue] - lt - N.altAxis : He, Ke = d && Ve ? QT(We, Ie, Se) : fs(d ? We : De, Ie, d ? Se : He);
      k[T] = Ke, g[T] = Ke - Ie;
    }
    t.modifiersData[r] = g;
  }
}
const EE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: TE,
  requiresIfExists: ["offset"]
};
function RE(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function PE(e) {
  return e === dn(e) || !kn(e) ? Dp(e) : RE(e);
}
function IE(e) {
  var t = e.getBoundingClientRect(), n = vi(t.width) / e.offsetWidth || 1, r = vi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ME(e, t, n) {
  n === void 0 && (n = !1);
  var r = kn(t), o = kn(t) && IE(t), i = Xr(t), s = xi(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((rr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Up(i)) && (l = PE(t)), kn(t) ? (a = xi(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Wp(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function $E(e) {
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
function jE(e) {
  var t = $E(e);
  return UT.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function OE(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function AE(e) {
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
var lg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ag() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function NE(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? lg : o;
  return function(l, a, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, lg, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, p = [], v = !1, d = {
      state: c,
      setOptions: function(y) {
        var m = typeof y == "function" ? y(c.options) : y;
        b(), c.options = Object.assign({}, i, c.options, m), c.scrollParents = {
          reference: Co(l) ? ps(l) : l.contextElement ? ps(l.contextElement) : [],
          popper: ps(a)
        };
        var S = jE(AE([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = S.filter(function(w) {
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
          var y = c.elements, m = y.reference, S = y.popper;
          if (ag(m, S)) {
            c.rects = {
              reference: ME(m, nl(S), c.options.strategy === "fixed"),
              popper: Bp(S)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(N) {
              return c.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var w = 0; w < c.orderedModifiers.length; w++) {
              if (c.reset === !0) {
                c.reset = !1, w = -1;
                continue;
              }
              var T = c.orderedModifiers[w], k = T.fn, R = T.options, E = R === void 0 ? {} : R, M = T.name;
              typeof k == "function" && (c = k({
                state: c,
                options: E,
                name: M,
                instance: d
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: OE(function() {
        return new Promise(function(C) {
          d.forceUpdate(), C(c);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!ag(l, a))
      return d;
    d.setOptions(u).then(function(C) {
      !v && u.onFirstUpdate && u.onFirstUpdate(C);
    });
    function x() {
      c.orderedModifiers.forEach(function(C) {
        var y = C.name, m = C.options, S = m === void 0 ? {} : m, w = C.effect;
        if (typeof w == "function") {
          var T = w({
            state: c,
            name: y,
            instance: d,
            options: S
          }), k = function() {
          };
          p.push(T || k);
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
var LE = [iE, CE, rE, KT, bE, gE, EE, JT, vE], zE = /* @__PURE__ */ NE({
  defaultModifiers: LE
});
function bi(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : ix(n, r), {
    props: l,
    internalRef: a
  } = sx({
    ...i,
    externalSlotProps: s
  }), u = st(a, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return ox(t, {
    ...l,
    ref: u
  }, r);
}
function Eo(e) {
  var t;
  return parseInt(h.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function _E(e) {
  return typeof e == "function" ? e() : e;
}
const yx = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = h.useState(null), a = st(/* @__PURE__ */ h.isValidElement(r) ? Eo(r) : null, n);
  if (ot(() => {
    i || l(_E(o) || document.body);
  }, [o, i]), ot(() => {
    if (s && !i)
      return tf(n, s), () => {
        tf(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ h.isValidElement(r)) {
      const u = {
        ref: a
      };
      return /* @__PURE__ */ h.cloneElement(r, u);
    }
    return r;
  }
  return s && /* @__PURE__ */ t0.createPortal(r, s);
});
function BE(e) {
  return me("MuiPopper", e);
}
de("MuiPopper", ["root"]);
function FE(e, t) {
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
function vx(e) {
  return typeof e == "function" ? e() : e;
}
function DE(e) {
  return e.nodeType !== void 0;
}
const WE = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, BE, t);
}, UE = {}, HE = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: u,
    popperOptions: c,
    popperRef: p,
    slotProps: v = {},
    slots: d = {},
    TransitionProps: x,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, y = h.useRef(null), m = st(y, n), S = h.useRef(null), w = st(S, p), T = h.useRef(w);
  ot(() => {
    T.current = w;
  }, [w]), h.useImperativeHandle(p, () => S.current, []);
  const k = FE(u, i), [R, E] = h.useState(k), M = h.useMemo(() => vx(r), [r]);
  h.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), ot(() => {
    if (!M || !a)
      return;
    const I = (j) => {
      E(j.placement);
    };
    let P = [{
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
        I(j);
      }
    }];
    l != null && (P = P.concat(l)), c && c.modifiers != null && (P = P.concat(c.modifiers));
    const L = zE(M, y.current, {
      placement: k,
      ...c,
      modifiers: P
    });
    T.current(L);
    const A = y.current;
    return () => {
      if (A) {
        const {
          style: j
        } = A, z = j.position, B = j.top, W = j.left, F = j.transform;
        L.destroy(), j.position = z, j.top = B, j.left = W, j.transform = F;
      } else
        L.destroy();
      T.current(null);
    };
  }, [M, s, l, a, c, k]);
  const N = {
    placement: R
  };
  x !== null && (N.TransitionProps = x);
  const $ = WE(t), g = d.root ?? "div", O = bi({
    elementType: g,
    externalSlotProps: v.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: m
    },
    ownerState: t,
    className: $.root
  });
  return /* @__PURE__ */ f.jsx(g, {
    ...O,
    children: typeof o == "function" ? o(N) : o
  });
}), VE = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: u,
    open: c,
    placement: p = "bottom",
    popperOptions: v = UE,
    popperRef: d,
    style: x,
    transition: b = !1,
    slotProps: C = {},
    slots: y = {},
    ...m
  } = t, [S, w] = h.useState(!0), T = () => {
    w(!1);
  }, k = () => {
    w(!0);
  };
  if (!a && !c && (!b || S))
    return null;
  let R;
  if (i)
    R = i;
  else if (r) {
    const N = vx(r);
    R = N && DE(N) ? ct(N).body : ct(null).body;
  }
  const E = !c && a && (!b || S) ? "none" : void 0, M = b ? {
    in: c,
    onEnter: T,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ f.jsx(yx, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ f.jsx(HE, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: b ? !S : c,
      placement: p,
      popperOptions: v,
      popperRef: d,
      slotProps: C,
      slots: y,
      ...m,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: E,
        ...x
      },
      TransitionProps: M,
      children: o
    })
  });
}), KE = K(VE, {
  name: "MuiPopper",
  slot: "Root"
})({}), xx = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = Gu(), o = ye({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: c,
    open: p,
    placement: v,
    popperOptions: d,
    popperRef: x,
    transition: b,
    slots: C,
    slotProps: y,
    ...m
  } = o, S = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: c,
    open: p,
    placement: v,
    popperOptions: d,
    popperRef: x,
    transition: b,
    ...m
  };
  return /* @__PURE__ */ f.jsx(KE, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: y,
    ...S,
    ref: n
  });
}), YE = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function GE(e) {
  return me("MuiChip", e);
}
const Ae = de("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), QE = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: i,
    clickable: s,
    variant: l
  } = e, a = {
    root: ["root", l, n && "disabled", `size${ce(r)}`, `color${ce(o)}`, s && "clickable", i && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return he(a, GE, t);
}, XE = K("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => hn(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
      [`& .${Ae.avatar}`]: t.avatar
    }, {
      [`& .${Ae.icon}`]: t.icon
    }, {
      [`& .${Ae.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${ce(s)}`], t[`color${ce(r)}`], o && t.clickable, i && t.deletable, t[l]];
  }
})(Te(({
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
    ...mt(e, ["background-color", "box-shadow"]),
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
    [`&.${Ae.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Ae.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Ae.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Ae.deleteIcon}`]: {
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
        [`& .${Ae.avatar}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark
        }
      }
    }, {
      props: {
        color: "secondary"
      },
      style: {
        [`& .${Ae.avatar}`]: {
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
        [`& .${Ae.avatar}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10)
        },
        [`& .${Ae.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Ae.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(wn(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${Ae.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${Ae.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${Ae.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Ae.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(wn(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${Ae.focusVisible}`]: {
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
        [`&.${Ae.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(wn(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Ae.focusVisible}`]: {
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
        [`&.${Ae.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Ae.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Ae.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Ae.icon}`]: {
          marginLeft: 4
        },
        [`& .${Ae.deleteIcon}`]: {
          marginRight: 5
        }
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        [`& .${Ae.avatar}`]: {
          marginLeft: 2
        },
        [`& .${Ae.icon}`]: {
          marginLeft: 2
        },
        [`& .${Ae.deleteIcon}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(wn()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.alpha((e.vars || e).palette[n].main, 0.7)}`,
        [`&.${Ae.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
        },
        [`&.${Ae.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
        },
        [`& .${Ae.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), qE = K("span", {
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
function ug(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Vi = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disabled: c = !1,
    icon: p,
    label: v,
    onClick: d,
    onDelete: x,
    onKeyDown: b,
    onKeyUp: C,
    size: y = "medium",
    variant: m = "filled",
    tabIndex: S,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: T = {},
    slotProps: k = {},
    ...R
  } = r, {
    nativeButton: E,
    ...M
  } = R, N = h.useRef(null), $ = st(N, n), g = (D) => {
    D.stopPropagation(), x(D);
  }, O = (D) => {
    D.currentTarget === D.target && ug(D) && D.preventDefault(), b && b(D);
  }, I = (D) => {
    D.currentTarget === D.target && x && ug(D) && x(D), C && C(D);
  }, P = s !== !1 && d ? !0 : s, L = P || x ? wo : a || "div", A = {
    ...r,
    component: L,
    disabled: c,
    size: y,
    color: l,
    iconColor: /* @__PURE__ */ h.isValidElement(p) && p.props.color || l,
    onDelete: !!x,
    clickable: P,
    variant: m
  }, j = QE(A), z = L === wo ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: j.focusVisible,
    ...x && {
      disableRipple: !0
    },
    ...E !== void 0 && {
      nativeButton: E
    }
  } : {};
  let B = null;
  x && (B = u && /* @__PURE__ */ h.isValidElement(u) ? /* @__PURE__ */ h.cloneElement(u, {
    className: te(u.props.className, j.deleteIcon),
    onClick: g
  }) : /* @__PURE__ */ f.jsx(YE, {
    className: j.deleteIcon,
    onClick: g
  }));
  let W = null;
  o && /* @__PURE__ */ h.isValidElement(o) && (W = /* @__PURE__ */ h.cloneElement(o, {
    className: te(j.avatar, o.props.className)
  }));
  let F = null;
  p && /* @__PURE__ */ h.isValidElement(p) && (F = /* @__PURE__ */ h.cloneElement(p, {
    className: te(j.icon, p.props.className)
  }));
  const X = {
    slots: T,
    slotProps: k
  }, [U, q] = Re("root", {
    elementType: XE,
    externalForwardedProps: {
      ...X,
      ...M
    },
    ownerState: A,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: $,
    className: te(j.root, i),
    additionalProps: {
      disabled: P && c ? !0 : void 0,
      tabIndex: w && c ? -1 : S,
      ...z
    },
    getSlotProps: (D) => ({
      ...D,
      onClick: (ne) => {
        var ie;
        (ie = D.onClick) == null || ie.call(D, ne), d == null || d(ne);
      },
      onKeyDown: (ne) => {
        var ie;
        (ie = D.onKeyDown) == null || ie.call(D, ne), O(ne);
      },
      onKeyUp: (ne) => {
        var ie;
        (ie = D.onKeyUp) == null || ie.call(D, ne), I(ne);
      }
    })
  }), [G, Q] = Re("label", {
    elementType: qE,
    externalForwardedProps: X,
    ownerState: A,
    className: j.label
  });
  return /* @__PURE__ */ f.jsxs(U, {
    as: L,
    ...q,
    children: [W || F, /* @__PURE__ */ f.jsx(G, {
      ...Q,
      children: v
    }), B]
  });
}), ZE = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), JE = {
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
}, eR = {
  opacity: 0,
  visibility: "hidden"
}, Sx = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = Qr(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: u,
    in: c,
    onEnter: p,
    onEntered: v,
    onEntering: d,
    onExit: x,
    onExited: b,
    onExiting: C,
    style: y,
    timeout: m = o,
    ...S
  } = t, w = tc(r.motion.reducedMotion, a), T = h.useRef(null), k = st(T, Eo(l), n), R = Sn(T, d), E = Sn(T, (I, P) => {
    w.shouldReduceMotion || jp(I);
    const L = Fa({
      style: y,
      timeout: m,
      easing: u
    }, {
      mode: "enter"
    }), A = w.getTransitionTiming({
      duration: L.duration,
      delay: L.delay
    });
    I.style.transition = r.transitions.create("opacity", {
      duration: A.duration,
      easing: L.easing,
      delay: A.delay
    }), p && p(I, P);
  }), M = Sn(T, v), N = Sn(T, C), $ = Sn(T, (I) => {
    const P = Fa({
      style: y,
      timeout: m,
      easing: u
    }, {
      mode: "exit"
    }), L = w.getTransitionTiming({
      duration: P.duration,
      delay: P.delay
    });
    I.style.transition = r.transitions.create("opacity", {
      duration: L.duration,
      easing: P.easing,
      delay: L.delay
    }), x && x(I);
  }), g = Sn(T, (I) => {
    I.style.transition = "", b && b(I);
  }), O = i ? (I) => {
    i(T.current, I);
  } : void 0;
  return /* @__PURE__ */ f.jsx(tx, {
    appear: s,
    in: c,
    nodeRef: T,
    onEnter: E,
    onEntered: M,
    onEntering: R,
    onExit: $,
    onExited: g,
    onExiting: N,
    addEndListener: O,
    reduceMotion: w.shouldReduceMotion,
    timeout: m,
    ...S,
    children: (I, {
      ownerState: P,
      ...L
    }) => {
      const A = J0(I, c, JE, eR, y, l.props.style);
      return /* @__PURE__ */ h.cloneElement(l, {
        style: A,
        ref: k,
        ...L
      });
    }
  });
});
function tR(e) {
  return me("MuiBackdrop", e);
}
de("MuiBackdrop", ["root", "invisible"]);
const nR = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return he({
    root: ["root", n && "invisible"]
  }, tR, t);
}, rR = K("div", {
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
}), bx = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    slots: c = {},
    transitionDuration: p,
    ...v
  } = r, d = {
    ...r,
    component: s,
    invisible: l
  }, x = nR(d), b = {
    component: s,
    slots: c,
    slotProps: u
  }, [C, y] = Re("root", {
    elementType: rR,
    externalForwardedProps: b,
    className: te(x.root, i),
    ownerState: d
  }), [m, S] = Re("transition", {
    elementType: Sx,
    externalForwardedProps: b,
    ownerState: d
  });
  return /* @__PURE__ */ f.jsx(m, {
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
}), oR = de("MuiBox", ["root"]), iR = Qu(), Ne = MC({
  themeId: er,
  defaultTheme: iR,
  defaultClassName: oR.root,
  generateClassName: O0.generate
});
function sR(e) {
  return me("MuiButton", e);
}
const eo = de("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), lR = /* @__PURE__ */ h.createContext({}), aR = /* @__PURE__ */ h.createContext(void 0), uR = (e) => {
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
    root: ["root", s && "loading", i, `size${ce(o)}`, `color${ce(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${ce(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, c = he(u, sR, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, wx = [{
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
}], cR = K(wo, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ce(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(Te(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    ...mt(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${eo.disabled}`]: {
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
        [`&.${eo.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${eo.disabled}`]: {
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
        [`&.${eo.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(wn()).map(([r]) => ({
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
        [`&.${eo.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${eo.disabled}`]: {
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
        ...mt(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${eo.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), dR = K("span", {
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
      ...mt(e, ["opacity"], {
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
  }, ...wx]
})), fR = K("span", {
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
      ...mt(e, ["opacity"], {
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
  }, ...wx]
})), pR = K("span", {
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
})), cg = K("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), nn = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = h.useContext(lR), o = h.useContext(aR), i = Fs(r, t), s = ye({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: u = "button",
    className: c,
    disabled: p = !1,
    disableElevation: v = !1,
    disableFocusRipple: d = !1,
    endIcon: x,
    focusVisibleClassName: b,
    fullWidth: C = !1,
    id: y,
    loading: m = null,
    loadingIndicator: S,
    loadingPosition: w = "center",
    size: T = "medium",
    startIcon: k,
    type: R,
    variant: E = "text",
    ...M
  } = s, N = xr(y), $ = S ?? /* @__PURE__ */ f.jsx(ds, {
    "aria-labelledby": N,
    color: "inherit",
    size: 16
  }), g = {
    ...s,
    color: a,
    component: u,
    disabled: p,
    disableElevation: v,
    disableFocusRipple: d,
    fullWidth: C,
    loading: m,
    loadingIndicator: $,
    loadingPosition: w,
    size: T,
    type: R,
    variant: E
  }, O = uR(g), I = (k || m && w === "start") && /* @__PURE__ */ f.jsx(dR, {
    className: O.startIcon,
    ownerState: g,
    children: k || /* @__PURE__ */ f.jsx(cg, {
      className: O.loadingIconPlaceholder,
      ownerState: g
    })
  }), P = (x || m && w === "end") && /* @__PURE__ */ f.jsx(fR, {
    className: O.endIcon,
    ownerState: g,
    children: x || /* @__PURE__ */ f.jsx(cg, {
      className: O.loadingIconPlaceholder,
      ownerState: g
    })
  }), L = o || "", A = typeof m == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ f.jsx("span", {
      className: O.loadingWrapper,
      style: {
        display: "contents"
      },
      children: m && /* @__PURE__ */ f.jsx(pR, {
        className: O.loadingIndicator,
        ownerState: g,
        children: $
      })
    })
  ) : null, {
    root: j,
    ...z
  } = O;
  return /* @__PURE__ */ f.jsxs(cR, {
    ownerState: g,
    className: te(r.className, O.root, c, L),
    component: u,
    disabled: p || m,
    focusRipple: !d,
    focusVisibleClassName: te(O.focusVisible, b),
    ref: n,
    internalNativeButton: !0,
    type: R,
    id: m ? N : y,
    ...M,
    classes: z,
    children: [I, w !== "end" && A, l, w === "end" && A, P]
  });
});
function mR(e) {
  return me("MuiCard", e);
}
de("MuiCard", ["root"]);
const hR = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, mR, t);
}, gR = K(Sr, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Il = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1,
    ...s
  } = r, l = {
    ...r,
    raised: i
  }, a = hR(l);
  return /* @__PURE__ */ f.jsx(gR, {
    className: te(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function yR(e) {
  return me("MuiCardContent", e);
}
de("MuiCardContent", ["root"]);
const vR = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, yR, t);
}, xR = K("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Ml = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = vR(l);
  return /* @__PURE__ */ f.jsx(xR, {
    as: i,
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function dg(e) {
  return e.substring(2).toLowerCase();
}
function SR(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function bR(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, s = h.useRef(!1), l = h.useRef(null), a = h.useRef(!1), u = h.useRef(!1);
  h.useEffect(() => (setTimeout(() => {
    a.current = !0;
  }, 0), () => {
    a.current = !1;
  }), []);
  const c = st(Eo(t), l), p = Xe((x) => {
    const b = u.current;
    u.current = !1;
    const C = ct(l.current);
    if (!a.current || !l.current || "clientX" in x && SR(x, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let y;
    x.composedPath ? y = x.composedPath().includes(l.current) : y = !po(C.documentElement, x.target) || po(l.current, x.target), !y && (n || !b) && o(x);
  }), v = (x) => (b) => {
    u.current = !0;
    const C = t.props[x];
    C && C(b);
  }, d = {
    ref: c
  };
  return i !== !1 && (d[i] = v(i)), h.useEffect(() => {
    if (i !== !1) {
      const x = dg(i), b = ct(l.current), C = () => {
        s.current = !0;
      };
      return b.addEventListener(x, p), b.addEventListener("touchmove", C), () => {
        b.removeEventListener(x, p), b.removeEventListener("touchmove", C);
      };
    }
  }, [p, i]), r !== !1 && (d[r] = v(r)), h.useEffect(() => {
    if (r !== !1) {
      const x = dg(r), b = ct(l.current);
      return b.addEventListener(x, p), () => {
        b.removeEventListener(x, p);
      };
    }
  }, [p, r]), /* @__PURE__ */ h.cloneElement(t, d);
}
function Cx(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function wR(e) {
  const t = ct(e);
  return e === t.body || e === t.documentElement ? Fn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ms(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function fg(e) {
  return parseFloat(Fn(e).getComputedStyle(e).paddingRight) || 0;
}
function CR(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function pg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !CR(s);
    l && a && ms(s, o);
  });
}
function kR(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = ct(r).body;
    else {
      const s = r.parentElement, l = Fn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (wR(i)) {
      const s = Cx(Fn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${fg(i) + s}px`;
      const l = ct(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${fg(a) + s}px`;
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
function TR(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class ER {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ms(t.modalRef, !1);
    const o = TR(n);
    pg(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = kR(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && ms(t.modalRef, n), pg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ms(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const uf = "data-mui-focusable";
function mg(e) {
  return e ? e.hasAttribute(uf) ? e : e.querySelector(`[${uf}]`) : null;
}
const RR = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function kx(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function PR(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function IR(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || PR(e));
}
function MR(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(RR)).forEach((r, o) => {
    const i = kx(r);
    i === -1 || !IR(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function $R() {
  return !0;
}
function jR(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = MR,
    isEnabled: s = $R,
    open: l
  } = e, a = h.useRef(!1), u = h.useRef(null), c = h.useRef(null), p = h.useRef(null), v = h.useRef(null), d = h.useRef(!1), x = h.useRef(null), b = st(Eo(t), x), C = h.useRef(null);
  h.useEffect(() => {
    !l || !x.current || (d.current = !n);
  }, [n, l]), h.useEffect(() => {
    if (a.current = !1, !l || !x.current)
      return;
    const S = ct(x.current), w = Xn(S), T = mg(x.current) ?? x.current;
    return po(x.current, w) || (T.hasAttribute("tabIndex") || T.setAttribute("tabIndex", "-1"), d.current && T.focus()), () => {
      !o && p.current && (a.current = !0, p.current.focus(), p.current = null);
    };
  }, [l]), h.useEffect(() => {
    if (!l || !x.current)
      return;
    const S = ct(x.current), w = (R) => {
      if (C.current = R, r || !s() || R.key !== "Tab")
        return;
      const E = x.current, M = Xn(S);
      if (E === null)
        return;
      const N = mg(E);
      if (M === E || M === N) {
        const g = i(E);
        if (g.length === 0)
          return;
        R.preventDefault(), R.shiftKey ? g[g.length - 1].focus() : g[0].focus();
        return;
      }
      if (po(E, M)) {
        const g = i(E), O = g.indexOf(M);
        if (O === -1 || !g.some((L) => kx(L) > 0))
          return;
        R.preventDefault();
        let P = 0;
        R.shiftKey ? P = O <= 0 ? g.length - 1 : O - 1 : P = O === g.length - 1 ? 0 : O + 1, g[P].focus();
      }
    }, T = () => {
      var N, $;
      const R = x.current;
      if (R === null)
        return;
      const E = Xn(S);
      if (!S.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (po(R, E) || r && E !== u.current && E !== c.current)
        return;
      if (E !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!d.current)
        return;
      let M = [];
      if ((E === u.current || E === c.current) && (M = i(x.current)), M.length > 0) {
        const g = !!((N = C.current) != null && N.shiftKey && (($ = C.current) == null ? void 0 : $.key) === "Tab"), O = M[0], I = M[M.length - 1];
        typeof O != "string" && typeof I != "string" && (g ? I.focus() : O.focus());
      } else
        R.focus();
    };
    S.addEventListener("focusin", T), S.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const R = Xn(S);
      R && R.tagName === "BODY" && T();
    }, 50);
    return () => {
      clearInterval(k), S.removeEventListener("focusin", T), S.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const y = (S) => {
    p.current === null && (p.current = S.relatedTarget), d.current = !0, v.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, m = (S) => {
    p.current === null && (p.current = S.relatedTarget), d.current = !0;
  };
  return /* @__PURE__ */ f.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ f.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: m,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ h.cloneElement(t, {
      ref: b,
      onFocus: y
    }), /* @__PURE__ */ f.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: m,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function OR(e) {
  return typeof e == "function" ? e() : e;
}
function AR(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const hg = () => {
}, $l = new ER();
function NR(e) {
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
  } = e, c = h.useRef({}), p = h.useRef(null), v = h.useRef(null), d = h.useRef(null), x = st(d, u), [b, C] = h.useState(!a), y = AR(s);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const S = () => ct(p.current), w = () => (c.current.modalRef = d.current, c.current.mount = p.current, c.current), T = () => {
    $l.mount(w(), {
      disableScrollLock: n
    }), d.current && (d.current.scrollTop = 0);
  }, k = Xe(() => {
    const L = OR(t) || S().body;
    $l.add(w(), L), d.current && T();
  }), R = () => $l.isTopModal(w()), E = Xe((L) => {
    p.current = L, L && (v.current = L, a && R() ? T() : d.current && ms(d.current, m));
  }), M = h.useCallback(() => {
    $l.remove(w(), m);
  }, [m]);
  h.useEffect(() => () => {
    M();
  }, [M]), h.useEffect(() => {
    a ? k() : (!y || !r) && M();
  }, [a, M, y, r, k]);
  const N = (L) => (A) => {
    var j;
    (j = L.onKeyDown) == null || j.call(L, A), !(A.key !== "Escape" || A.which === 229 || // Wait until IME is settled.
    !R()) && (A.stopPropagation(), l && l(A, "escapeKeyDown"));
  }, $ = (L) => (A) => {
    var j;
    (j = L.onClick) == null || j.call(L, A), A.target === A.currentTarget && l && l(A, "backdropClick");
  }, g = (L = {}) => {
    const A = Wa(e);
    delete A.onTransitionEnter, delete A.onTransitionExited;
    const j = {
      ...A,
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
      onKeyDown: N(j),
      ref: x
    };
  }, O = (L = {}) => {
    const A = L;
    return {
      "aria-hidden": !0,
      ...A,
      onClick: $(A),
      open: a
    };
  }, I = () => {
    const L = () => {
      C(!1), o && o();
    }, A = () => {
      C(!0), i && i(), r && M();
    };
    return {
      onEnter: Kh(L, (s == null ? void 0 : s.props.onEnter) ?? hg),
      onExited: Kh(A, (s == null ? void 0 : s.props.onExited) ?? hg)
    };
  }, P = !a && y && !b ? v.current ?? t : t;
  return {
    getRootProps: g,
    getBackdropProps: O,
    getTransitionProps: I,
    rootRef: x,
    portalRef: E,
    portalContainer: P,
    isTopModal: R,
    exited: b,
    hasTransition: y
  };
}
function LR(e) {
  return me("MuiModal", e);
}
de("MuiModal", ["root", "hidden", "backdrop"]);
const zR = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return he({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, LR, r);
}, _R = K("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Te(({
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
}))), BR = K(bx, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Tx = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disableAutoFocus: c = !1,
    disableEnforceFocus: p = !1,
    disablePortal: v = !1,
    disableRestoreFocus: d = !1,
    disableScrollLock: x = !1,
    hideBackdrop: b = !1,
    keepMounted: C = !1,
    onClose: y,
    onTransitionEnter: m,
    onTransitionExited: S,
    open: w,
    slotProps: T = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: R,
    ...E
  } = r, M = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: c,
    disableEnforceFocus: p,
    disablePortal: v,
    disableRestoreFocus: d,
    disableScrollLock: x,
    hideBackdrop: b,
    keepMounted: C
  }, {
    getRootProps: N,
    getBackdropProps: $,
    getTransitionProps: g,
    portalRef: O,
    portalContainer: I,
    isTopModal: P,
    exited: L,
    hasTransition: A
  } = NR({
    ...M,
    rootRef: n
  }), j = {
    ...M,
    exited: L
  }, z = zR(j), B = {};
  if (l.props.tabIndex === void 0 && (B.tabIndex = "-1"), A) {
    const {
      onEnter: G,
      onExited: Q
    } = g();
    B.onEnter = G, B.onExited = Q;
  }
  const W = {
    slots: k,
    slotProps: T
  }, [F, X] = Re("root", {
    ref: n,
    elementType: _R,
    externalForwardedProps: {
      ...W,
      ...E,
      component: u
    },
    getSlotProps: N,
    ownerState: j,
    className: te(i, z == null ? void 0 : z.root, !j.open && j.exited && (z == null ? void 0 : z.hidden))
  }), [U, q] = Re("backdrop", {
    elementType: BR,
    externalForwardedProps: W,
    shouldForwardComponentProp: !0,
    getSlotProps: (G) => $({
      ...G,
      onClick: (Q) => {
        G != null && G.onClick && G.onClick(Q);
      }
    }),
    className: z == null ? void 0 : z.backdrop,
    ownerState: j
  });
  return !C && !w && (!A || L) ? null : /* @__PURE__ */ f.jsx(yx, {
    ref: O,
    container: I,
    disablePortal: v,
    children: /* @__PURE__ */ f.jsxs(F, {
      ...X,
      children: [b ? null : /* @__PURE__ */ f.jsx(U, {
        ...q
      }), /* @__PURE__ */ f.jsx(jR, {
        disableEnforceFocus: p,
        disableAutoFocus: c,
        disableRestoreFocus: d,
        isEnabled: P,
        open: w,
        children: /* @__PURE__ */ h.cloneElement(l, B)
      })]
    })
  });
});
function FR(e) {
  return me("MuiDialog", e);
}
de("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const Ex = /* @__PURE__ */ h.createContext({}), DR = K(bx, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), WR = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${ce(n)}`],
    paper: ["paper", `paperWidth${ce(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return he(s, FR, t);
}, UR = K(Tx, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), HR = K("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${ce(n.scroll)}`]];
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
}), VR = K(Sr, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${ce(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(Te(({
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
}))), jl = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiDialog"
  }), o = Qr(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: u,
    className: c,
    fullScreen: p = !1,
    fullWidth: v = !1,
    maxWidth: d = "sm",
    onClick: x,
    onClose: b,
    open: C,
    PaperComponent: y = Sr,
    role: m = "dialog",
    scroll: S = "paper",
    slots: w = {},
    slotProps: T = {},
    transitionDuration: k = i,
    ...R
  } = r, E = {
    ...r,
    fullScreen: p,
    fullWidth: v,
    maxWidth: d,
    scroll: S
  }, M = WR(E), N = h.useRef(), $ = (G) => {
    N.current = G.target === G.currentTarget;
  }, g = (G) => {
    x && x(G), N.current && (N.current = null, b && b(G, "backdropClick"));
  }, O = xr(l), I = h.useMemo(() => ({
    titleId: O
  }), [O]), P = {
    slots: w,
    slotProps: T
  }, [L, A] = Re("root", {
    elementType: UR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: E,
    className: te(M.root, c),
    ref: n
  }), [j, z] = Re("backdrop", {
    elementType: DR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: E,
    className: M.backdrop
  }), [B, W] = Re("paper", {
    elementType: VR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: E,
    className: M.paper,
    additionalProps: {
      elevation: 24,
      role: m,
      "aria-describedby": s,
      "aria-labelledby": O,
      "aria-modal": a,
      tabIndex: -1,
      [uf]: ""
    }
  }), [F, X] = Re("container", {
    elementType: HR,
    externalForwardedProps: P,
    ownerState: E,
    className: M.container
  }), [U, q] = Re("transition", {
    elementType: Sx,
    externalForwardedProps: P,
    ownerState: E,
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
    ...A,
    ...R,
    children: /* @__PURE__ */ f.jsx(U, {
      ...q,
      children: /* @__PURE__ */ f.jsx(F, {
        onMouseDown: $,
        ...X,
        children: /* @__PURE__ */ f.jsx(B, {
          as: y,
          ...W,
          children: /* @__PURE__ */ f.jsx(Ex.Provider, {
            value: I,
            children: u
          })
        })
      })
    })
  });
});
function KR(e) {
  return me("MuiDialogActions", e);
}
de("MuiDialogActions", ["root", "spacing"]);
const YR = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return he({
    root: ["root", !n && "spacing"]
  }, KR, t);
}, GR = K("div", {
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
}), Ol = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, l = {
    ...r,
    disableSpacing: i
  }, a = YR(l);
  return /* @__PURE__ */ f.jsx(GR, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function QR(e) {
  return me("MuiDialogContent", e);
}
de("MuiDialogContent", ["root", "dividers"]);
function XR(e) {
  return me("MuiDialogTitle", e);
}
const qR = de("MuiDialogTitle", ["root"]), ZR = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return he({
    root: ["root", n && "dividers"]
  }, QR, t);
}, JR = K("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(Te(({
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
      [`.${qR.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Al = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, l = {
    ...r,
    dividers: i
  }, a = ZR(l);
  return /* @__PURE__ */ f.jsx(JR, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), eP = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, XR, t);
}, tP = K(Me, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Nl = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = eP(l), {
    titleId: u = i
  } = h.useContext(Ex);
  return /* @__PURE__ */ f.jsx(tP, {
    component: "h2",
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
}), gg = de("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function Rx(e) {
  return me("MuiSelect", e);
}
const io = de("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), nP = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: l
  } = e, a = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${ce(i)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = he(a, y2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, rP = K(Ju, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...qu(e, t), !n.disableUnderline && t.underline];
  }
})(Te(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    ...mt(e, "background-color", {
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
    [`&.${Jr.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Jr.disabled}`]: {
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
          ...mt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Jr.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Jr.error}`]: {
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
          ...mt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Jr.disabled}, .${Jr.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Jr.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(wn()).map(([s]) => {
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
        [`&.${io.root}`]: {
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
})), oP = K(ec, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Zu
})(Te(({
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
}))), Hp = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    slotProps: c,
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
  }, b = nP(r), C = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, y = c ? $t(C, c) : C, m = p.root ?? rP, S = p.input ?? oP;
  return /* @__PURE__ */ f.jsx(Ap, {
    slots: {
      root: m,
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
Hp.muiName = "Input";
function iP(e) {
  return me("MuiFormControl", e);
}
de("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const sP = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ce(n)}`, r && "fullWidth"]
  };
  return he(o, iP, t);
}, lP = K("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${ce(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), aP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    focused: c,
    fullWidth: p = !1,
    hiddenLabel: v = !1,
    margin: d = "none",
    required: x = !1,
    size: b = "medium",
    variant: C = "outlined",
    ...y
  } = r, m = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    error: u,
    fullWidth: p,
    hiddenLabel: v,
    margin: d,
    required: x,
    size: b,
    variant: C
  }, S = sP(m), [w, T] = h.useState(() => {
    let P = !1;
    return o && h.Children.forEach(o, (L) => {
      if (!Wc(L, ["Input", "Select"]))
        return;
      const A = Wc(L, ["Select"]) ? L.props.input : L;
      A && c2(A.props) && (P = !0);
    }), P;
  }), [k, R] = h.useState(() => {
    let P = !1;
    return o && h.Children.forEach(o, (L) => {
      Wc(L, ["Input", "Select"]) && (Ba(L.props, !0) || Ba(L.props.inputProps, !0)) && (P = !0);
    }), P;
  }), [E, M] = h.useState(!1);
  a && E && M(!1);
  const N = c !== void 0 && !a ? c : E;
  let $;
  h.useRef(!1);
  const g = h.useCallback(() => {
    R(!0);
  }, []), O = h.useCallback(() => {
    R(!1);
  }, []), I = h.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: T,
    color: s,
    disabled: a,
    error: u,
    filled: k,
    focused: N,
    fullWidth: p,
    hiddenLabel: v,
    size: b,
    onBlur: () => {
      M(!1);
    },
    onFocus: () => {
      M(!0);
    },
    onEmpty: O,
    onFilled: g,
    registerEffect: $,
    required: x,
    variant: C
  }), [w, s, a, u, k, N, p, v, $, O, g, x, b, C]);
  return /* @__PURE__ */ f.jsx(Mp.Provider, {
    value: I,
    children: /* @__PURE__ */ f.jsx(lP, {
      as: l,
      ownerState: m,
      className: te(S.root, i),
      ref: n,
      ...y,
      children: o
    })
  });
});
var yg;
const uP = (e) => {
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
    root: ["root", o && "disabled", i && "error", r && `size${ce(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return he(u, v2, t);
}, cP = K("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ce(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(Te(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Vh.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Vh.error}`]: {
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
}))), dP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    focused: c,
    margin: p,
    required: v,
    variant: d,
    ...x
  } = r, [b] = Ei({
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
  const y = uP(C);
  return /* @__PURE__ */ f.jsx(cP, {
    as: s,
    className: te(y.root, i),
    ref: n,
    ...x,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      yg || (yg = /* @__PURE__ */ f.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), fP = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${ce(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return he(a, x2, t);
}, pP = K("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(Te(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(wn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${cs.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${cs.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${cs.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), mP = K("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(Te(({
  theme: e
}) => ({
  [`&.${cs.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), hP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    filled: c,
    focused: p,
    required: v,
    ...d
  } = r, [x] = Ei({
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
  }, C = fP(b);
  return /* @__PURE__ */ f.jsxs(pP, {
    as: l,
    ownerState: b,
    className: te(C.root, i),
    ref: n,
    ...d,
    children: [o, x.required && /* @__PURE__ */ f.jsxs(mP, {
      ownerState: b,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function hs(e) {
  return `scale(${e}, ${e ** 2})`;
}
const gP = {
  entering: {
    opacity: 1,
    transform: hs(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: hs(0.75)
  },
  exited: {
    opacity: 0,
    transform: hs(0.75)
  }
}, yP = {
  opacity: 0,
  transform: hs(0.75),
  visibility: "hidden"
}, Hs = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: u,
    onEntered: c,
    onEntering: p,
    onExit: v,
    onExited: d,
    onExiting: x,
    style: b,
    timeout: C = "auto",
    ...y
  } = t, m = h.useRef(null), S = Qr(), w = tc(S.motion.reducedMotion, s), T = h.useRef(null), k = st(T, Eo(i), n), R = Sn(T, p), E = Sn(T, (I, P) => {
    w.shouldReduceMotion || jp(I);
    const {
      duration: L,
      delay: A,
      easing: j
    } = Fa({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    C === "auto" && !w.shouldReduceMotion ? (z = S.transitions.getAutoHeightDuration(I.clientHeight), m.current = z) : (z = L, m.current = null);
    const B = w.getTransitionTiming({
      duration: z,
      delay: A
    });
    I.style.transition = [S.transitions.create("opacity", {
      duration: B.duration,
      delay: B.delay
    }), S.transitions.create("transform", {
      duration: typeof B.duration == "string" ? B.duration : B.duration * 0.666,
      delay: B.delay,
      easing: j
    })].join(","), u && u(I, P);
  }), M = Sn(T, c), N = Sn(T, x), $ = Sn(T, (I) => {
    const {
      duration: P,
      delay: L,
      easing: A
    } = Fa({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let j;
    C === "auto" && !w.shouldReduceMotion ? (j = S.transitions.getAutoHeightDuration(I.clientHeight), m.current = j) : (j = P, m.current = null);
    const z = w.getTransitionTiming({
      duration: j,
      delay: L
    });
    I.style.transition = [S.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), S.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: A
    })].join(","), I.style.opacity = 0, I.style.transform = hs(0.75), v && v(I);
  }), g = Sn(T, (I) => {
    I.style.transition = "", d && d(I);
  }), O = r ? (I) => {
    r(T.current, I);
  } : void 0;
  return /* @__PURE__ */ f.jsx(tx, {
    appear: o,
    in: a,
    nodeRef: T,
    onEnter: E,
    onEntered: M,
    onEntering: R,
    onExit: $,
    onExited: g,
    onExiting: N,
    addEndListener: O,
    getAutoTimeout: C === "auto" ? () => m.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...y,
    children: (I, {
      ownerState: P,
      ...L
    }) => {
      const A = J0(I, a, gP, yP, b, i.props.style);
      return /* @__PURE__ */ h.cloneElement(i, {
        style: A,
        ref: k,
        ...L
      });
    }
  });
});
Hs && (Hs.muiSupportAuto = !0);
function vP(e) {
  return me("MuiInputLabel", e);
}
const xP = de("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), SP = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = he({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, S2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, bP = K(Ju, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...qu(e, t), !n.disableUnderline && t.underline];
  }
})(Te(({
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
        [`label + &, .${xP.root} + &`]: {
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
          ...mt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Wi.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Wi.error}`]: {
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
          ...mt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Wi.disabled}, .${Wi.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Wi.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(wn()).map(([r]) => ({
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
})), wP = K(ec, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Zu
})({}), Vp = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    slots: c = {},
    type: p = "text",
    ...v
  } = r, d = SP(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = u ? $t(u, b) : b, y = c.root ?? bP, m = c.input ?? wP;
  return /* @__PURE__ */ f.jsx(Ap, {
    slots: {
      root: y,
      input: m
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
Vp.muiName = "Input";
const Ll = de("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), CP = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${ce(r)}`, s],
    asterisk: [l && "asterisk"]
  }, u = he(a, vP, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, kP = K(hP, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${cs.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(Te(({
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
      ...mt(e, ["color", "transform", "max-width"], {
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
}))), TP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = r, [c, p] = Ei({
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
    size: c.size,
    variant: c.variant,
    required: c.required,
    focused: c.focused
  }, x = CP(d);
  return /* @__PURE__ */ f.jsx(kP, {
    "data-shrink": v,
    ref: n,
    className: te(x.root, a),
    ...u,
    ownerState: d,
    classes: x
  });
}), cf = /* @__PURE__ */ h.createContext({});
function EP(e) {
  return me("MuiList", e);
}
de("MuiList", ["root", "padding", "dense", "subheader"]);
const RP = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return he({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, EP, t);
}, PP = K("ul", {
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
}), IP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    ...c
  } = r, p = h.useMemo(() => ({
    dense: l
  }), [l]), v = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, d = RP(v);
  return /* @__PURE__ */ f.jsx(cf.Provider, {
    value: p,
    children: /* @__PURE__ */ f.jsxs(PP, {
      as: s,
      className: te(d.root, i),
      ref: n,
      ownerState: v,
      ...c,
      children: [u, o]
    })
  });
}), vg = de("MuiListItemIcon", ["root", "alignItemsFlexStart"]), xg = de("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Kp = /* @__PURE__ */ h.createContext(void 0);
function Px() {
  const e = h.useContext(Kp);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const MP = Object.is;
function $P(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !MP(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const jP = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function Ix(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = gs,
    wrap: s = !0
  } = e, [l, a] = h.useState(t), [u, c] = h.useState(t);
  let p = l;
  t !== u && (c(t), t !== void 0 && t !== l && (p = t, a(t)));
  const v = h.useRef(null), d = h.useRef(/* @__PURE__ */ new Map()), [x, b] = h.useState(0), C = h.useMemo(() => df(d.current), [x]), y = Sg(p, C, i, n), m = h.useRef(y);
  m.current = y;
  const S = h.useCallback(() => {
    const g = df(d.current), O = Sg(m.current, g, i, n);
    return Ox(g, O);
  }, [n, i]), w = h.useCallback(() => d.current, []), T = Xe((g) => {
    const O = d.current.get(g.id);
    $P(O ?? null, g) || (d.current.set(g.id, g), b((I) => I + 1));
  }), k = Xe((g) => {
    d.current.delete(g) && b((O) => O + 1);
  }), R = Xe((g) => {
    a(g);
  }), E = h.useCallback((g) => m.current === g, []), M = h.useCallback((g, O, I, P) => {
    var j;
    const L = zl(d.current), A = $x(L, g, O, I, P ?? i);
    return A ? ((j = A.element) == null || j.focus(), a(A.id), A) : null;
  }, [i]), N = h.useCallback((g, O, I) => ({
    onFocus: (A) => {
      O == null || O(A);
      const j = zl(d.current), z = Nx(j, A.target);
      z !== -1 && a(j[z].id);
    },
    onKeyDown: (A) => {
      if (I == null || I(A), A.defaultPrevented || A.altKey || A.shiftKey || A.ctrlKey || A.metaKey || !jP.includes(A.key))
        return;
      let j = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (j = "ArrowRight", z = "ArrowLeft");
      const B = zl(d.current), W = Xn(ct(v.current)), F = W === v.current;
      let X = bg(B, W, m.current), U = "next";
      switch (A.key) {
        case j:
          U = "previous", A.preventDefault(), F && (X = B.length);
          break;
        case z:
          A.preventDefault(), F && (X = -1);
          break;
        case "Home":
          A.preventDefault(), X = -1;
          break;
        case "End":
          A.preventDefault(), U = "previous", X = B.length;
          break;
        default:
          return;
      }
      M(X, U, s);
    },
    ref: LP(g, (A) => {
      v.current = A;
    })
  }), [M, o, r, s]), $ = h.useCallback((g) => {
    var A;
    const O = zl(d.current), I = Xn(ct(v.current)), L = I === v.current ? -1 : bg(O, I, m.current);
    return ((A = M(L, "next", !0, g)) == null ? void 0 : A.id) ?? null;
  }, [M]);
  return h.useMemo(() => ({
    activeItemId: y,
    focusNext: $,
    getActiveItem: S,
    getContainerProps: N,
    getItemMap: w,
    isItemActive: E,
    registerItem: T,
    setActiveItemId: R,
    unregisterItem: k
  }), [y, $, S, N, w, E, T, R, k]);
}
function Mx(e) {
  const t = Px(), {
    activeItemId: n,
    registerItem: r,
    unregisterItem: o
  } = t, i = h.useRef(null), s = h.useMemo(() => ({
    disabled: e.disabled ?? !1,
    element: null,
    focusableWhenDisabled: e.focusableWhenDisabled ?? !1,
    id: e.id,
    selected: e.selected ?? !1,
    textValue: e.textValue
  }), [e.disabled, e.focusableWhenDisabled, e.id, e.selected, e.textValue]), l = h.useRef(s);
  l.current = s;
  const a = h.useCallback((c) => {
    if (i.current = c, c == null) {
      queueMicrotask(() => {
        i.current == null && o(e.id);
      });
      return;
    }
    r({
      ...l.current,
      element: c
    });
  }, [e.id, r, o]), u = st(e.ref, a);
  return ot(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), ot(() => {
    const c = e.id;
    return () => {
      o(c);
    };
  }, [e.id, o]), {
    ref: u,
    tabIndex: n === e.id ? 0 : -1
  };
}
function Sg(e, t, n, r) {
  return e != null ? OP(e, t, n) : AP(t, n, r);
}
function OP(e, t, n) {
  var o;
  const r = Ax(t, e);
  return r === -1 ? jx(t, n) : n(t[r]) ? t[r].id : ((o = $x(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function AP(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = Ox(e, r);
    if (o && t(o))
      return o.id;
  }
  return jx(e, t);
}
function bg(e, t, n) {
  if (t) {
    const r = Nx(e, t);
    if (r !== -1)
      return r;
  }
  return Ax(e, n);
}
function $x(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = wg(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[l];
    if (!u || !o(u))
      l = wg(l, i, n, r);
    else
      return u;
  }
  return null;
}
function jx(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function Ox(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function Ax(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function Nx(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function df(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(ff).sort((o, i) => NP(o.element, i.element)), r = t.filter((o) => !ff(o));
  return [...n, ...r];
}
function zl(e) {
  return df(e).filter(ff);
}
function wg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function gs(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function ff(e) {
  return e.element != null && e.element.isConnected;
}
function NP(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function LP(...e) {
  return (t) => {
    e.forEach((n) => {
      tf(n ?? null, t);
    });
  };
}
function Lx(e, t) {
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
function zP(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function _P(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function ua(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const zx = /* @__PURE__ */ h.createContext(null);
function _x() {
  return h.useContext(zx);
}
const BP = zx.Provider, Bx = /* @__PURE__ */ h.createContext(void 0);
function FP() {
  const e = h.useContext(Bx);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function DP(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function Fx(e, t) {
  if (t === void 0)
    return !0;
  let n = DP(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function WP(e, t) {
  return Fx(e, t) ? gs(e) : !1;
}
function UP(e, t) {
  Lx(e, t);
}
const HP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    onKeyDown: c,
    variant: p = "selectedMenu",
    ...v
  } = t, d = h.useRef(null), x = h.useRef(!1), [b, C] = h.useState(!1), y = _x(), m = h.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), S = h.useCallback((P) => {
    var L, A, j;
    return p === "selectedMenu" ? ((L = P.find((z) => z.selected && gs(z))) == null ? void 0 : L.id) ?? ((A = P.find((z) => gs(z))) == null ? void 0 : A.id) ?? null : ((j = P.find((z) => gs(z))) == null ? void 0 : j.id) ?? null;
  }, [p]), w = Ix({
    activeItemId: void 0,
    getDefaultActiveItemId: S,
    orientation: "vertical",
    wrap: !u
  }), {
    activeItemId: T,
    focusNext: k,
    getActiveItem: R,
    getContainerProps: E,
    getItemMap: M
  } = w, N = Xe((P = !1) => {
    if (!d.current || !P && x.current)
      return null;
    if (i) {
      const L = R();
      if (L != null && L.element) {
        const A = Array.from(M().values()).some((z) => z.selected), j = p === "menu" && A && !L.selected && y == null;
        return C(j), UP(L.element, y), x.current = !0, L.element;
      }
      return o ? (C(!1), d.current.focus(), d.current) : null;
    }
    return o ? (C(!1), d.current.focus(), x.current = !0, d.current) : (C(!1), null);
  });
  ot(() => {
    if (!o && !i) {
      x.current = !1, C(!1);
      return;
    }
    N();
  }, [T, i, o, N]), h.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (P, {
      direction: L
    }) => {
      const A = !d.current.style.width;
      if (P.clientHeight < d.current.clientHeight && A) {
        const j = `${Cx(Fn(P))}px`;
        d.current.style[L === "rtl" ? "paddingLeft" : "paddingRight"] = j, d.current.style.width = `calc(100% + ${j})`;
      }
      return d.current;
    },
    focusInitialTarget: () => {
      if (!d.current)
        return null;
      const P = Xn(ct(d.current));
      return P && po(d.current, P) ? P : N(!0);
    }
  }), [N]);
  const $ = E(void 0, v.onFocus), g = st(d, $.ref, n), O = h.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: b,
    variant: p
  }), [a, b, p]), I = Xe((P) => {
    if (b && C(!1), (P.ctrlKey || P.metaKey || P.altKey) && c) {
      c(P);
      return;
    }
    if ($.onKeyDown(P), P.key.length === 1) {
      const A = m.current, j = P.key.toLowerCase(), z = performance.now();
      A.keys.length > 0 && (z - A.lastTime > 500 ? (A.keys = [], A.repeating = !0, A.previousKeyMatched = !0) : A.repeating && j !== A.keys[0] && (A.repeating = !1)), A.lastTime = z, A.keys.push(j);
      const B = Xn(ct(d.current)), W = B && !A.repeating && Fx(B, A);
      A.previousKeyMatched && (W || k((F) => WP(F, A)) != null) ? P.preventDefault() : A.previousKeyMatched = !1;
    }
    c && c(P);
  });
  return /* @__PURE__ */ f.jsx(IP, {
    role: "menu",
    ref: g,
    className: l,
    onKeyDown: I,
    tabIndex: -1,
    ...v,
    onFocus: $.onFocus,
    children: /* @__PURE__ */ f.jsx(Bx.Provider, {
      value: O,
      children: /* @__PURE__ */ f.jsx(Kp.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function VP(e) {
  return me("MuiPopover", e);
}
de("MuiPopover", ["root", "paper"]);
function Cg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function kg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Tg(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function _l(e) {
  return typeof e == "function" ? e() : e;
}
const KP = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    paper: ["paper"]
  }, VP, t);
}, YP = K(Tx, {
  name: "MuiPopover",
  slot: "Root"
})({}), Dx = K(Sr, {
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
}), GP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    className: c,
    container: p,
    disableAutoFocus: v = !1,
    elevation: d = 8,
    marginThreshold: x = 16,
    open: b,
    slots: C = {},
    slotProps: y = {},
    transformOrigin: m = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: S = "auto",
    disableScrollLock: w = !1,
    ...T
  } = r, k = h.useRef(), R = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: d,
    marginThreshold: x,
    transformOrigin: m,
    transitionDuration: S
  }, E = KP(R), M = h.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const D = _l(i), ie = (D && D.nodeType === 1 ? D : ct(k.current).body).getBoundingClientRect();
    return {
      top: ie.top + Cg(ie, s.vertical),
      left: ie.left + kg(ie, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), N = h.useCallback((D) => ({
    vertical: Cg(D, m.vertical),
    horizontal: kg(D, m.horizontal)
  }), [m.horizontal, m.vertical]), $ = h.useCallback((D) => {
    const ne = {
      width: D.offsetWidth,
      height: D.offsetHeight
    }, ie = N(ne);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Tg(ie)
      };
    const Ee = M();
    let be = Ee.top - ie.vertical, fe = Ee.left - ie.horizontal;
    const re = be + ne.height, Y = fe + ne.width, se = Fn(_l(i)), ue = se.innerHeight - x, ve = se.innerWidth - x;
    if (x != null && be < x) {
      const le = be - x;
      be -= le, ie.vertical += le;
    } else if (x != null && re > ue) {
      const le = re - ue;
      be -= le, ie.vertical += le;
    }
    if (x != null && fe < x) {
      const le = fe - x;
      fe -= le, ie.horizontal += le;
    } else if (Y > ve) {
      const le = Y - ve;
      fe -= le, ie.horizontal += le;
    }
    return {
      top: `${Math.round(be)}px`,
      left: `${Math.round(fe)}px`,
      transformOrigin: Tg(ie)
    };
  }, [i, a, M, N, x]), [g, O] = h.useState(b), I = h.useCallback(() => {
    const D = k.current;
    if (!D)
      return;
    const ne = $(D);
    ne.top != null && D.style.setProperty("top", ne.top), ne.left != null && (D.style.left = ne.left), D.style.transformOrigin = ne.transformOrigin, O(!0);
  }, [$]);
  h.useEffect(() => (w && window.addEventListener("scroll", I), () => window.removeEventListener("scroll", I)), [i, w, I]);
  const P = () => {
    I();
  }, L = () => {
    O(!1);
  };
  h.useEffect(() => {
    b && I();
  }), h.useImperativeHandle(o, () => b ? {
    updatePosition: () => {
      I();
    }
  } : null, [b, I]), h.useEffect(() => {
    if (!b)
      return;
    const D = Xu(() => {
      I();
    }), ne = Fn(_l(i));
    return ne.addEventListener("resize", D), () => {
      D.clear(), ne.removeEventListener("resize", D);
    };
  }, [i, b, I]);
  let A = S;
  const j = {
    slots: C,
    slotProps: y
  }, [z, B] = Re("transition", {
    elementType: Hs,
    externalForwardedProps: j,
    ownerState: R,
    getSlotProps: (D) => ({
      ...D,
      onEntering: (ne, ie) => {
        var Ee;
        (Ee = D.onEntering) == null || Ee.call(D, ne, ie), P();
      },
      onExited: (ne) => {
        var ie;
        (ie = D.onExited) == null || ie.call(D, ne), L();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  S === "auto" && !z.muiSupportAuto && (A = void 0);
  const W = p || (i ? ct(_l(i)).body : void 0), [F, {
    slots: X,
    slotProps: U,
    ...q
  }] = Re("root", {
    ref: n,
    elementType: YP,
    externalForwardedProps: {
      ...j,
      ...T
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: C.backdrop
      },
      slotProps: {
        backdrop: $2(typeof y.backdrop == "function" ? y.backdrop(R) : y.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: b
    },
    ownerState: R,
    className: te(E.root, c)
  }), [G, Q] = Re("paper", {
    ref: k,
    className: E.paper,
    elementType: Dx,
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
  return /* @__PURE__ */ f.jsx(F, {
    ...q,
    ...!_a(F) && {
      slots: X,
      slotProps: U,
      disableAutoFocus: v,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ f.jsx(z, {
      ...B,
      timeout: A,
      children: /* @__PURE__ */ f.jsx(G, {
        ...Q,
        children: u
      })
    })
  });
});
function QP(e) {
  return me("MuiMenu", e);
}
de("MuiMenu", ["root", "paper", "list"]);
const XP = {
  vertical: "top",
  horizontal: "right"
}, qP = {
  vertical: "top",
  horizontal: "left"
}, ZP = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, QP, t);
}, JP = K(GP, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), eI = K(Dx, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), tI = K(HP, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), nI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    PopoverClasses: c,
    transitionDuration: p = "auto",
    variant: v = "selectedMenu",
    slots: d = {},
    slotProps: x = {},
    ...b
  } = r, C = Gu(), y = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: p,
    variant: v
  }, m = ZP(y), S = o && u, w = S && !l, T = h.useRef(null), k = (P, L) => {
    var A, j;
    T.current && (T.current.adjustStyleForScrollbar(P, {
      direction: C ? "rtl" : "ltr"
    }), S && ((j = (A = T.current).focusInitialTarget) == null || j.call(A)));
  }, R = (P) => {
    P.key === "Tab" && (P.preventDefault(), a && a(P, "tabKeyDown"));
  }, E = {
    slots: d,
    slotProps: x
  }, M = bi({
    elementType: d.root,
    externalSlotProps: x.root,
    ownerState: y,
    className: [m.root, s]
  }), [N, $] = Re("paper", {
    className: m.paper,
    elementType: eI,
    externalForwardedProps: E,
    shouldForwardComponentProp: !0,
    ownerState: y
  }), [g, O] = Re("list", {
    className: m.list,
    elementType: tI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: E,
    getSlotProps: (P) => ({
      ...P,
      onKeyDown: (L) => {
        var A;
        R(L), (A = P.onKeyDown) == null || A.call(P, L);
      }
    }),
    ownerState: y
  }), I = typeof x.transition == "function" ? x.transition(y) : x.transition;
  return /* @__PURE__ */ f.jsx(
    JP,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? XP : qP,
      slots: {
        root: d.root,
        paper: N,
        backdrop: d.backdrop,
        transition: d.transition
      },
      slotProps: {
        root: M,
        paper: $,
        backdrop: typeof x.backdrop == "function" ? x.backdrop(y) : x.backdrop,
        transition: {
          ...I,
          onEntering: (...P) => {
            var L;
            k(...P), (L = I == null ? void 0 : I.onEntering) == null || L.call(I, ...P);
          }
        }
      },
      open: u,
      ref: n,
      transitionDuration: p,
      ownerState: y,
      ...b,
      classes: c,
      children: /* @__PURE__ */ f.jsx(g, {
        actions: T,
        autoFocus: S,
        autoFocusItem: w,
        variant: v,
        ...O,
        children: i
      })
    }
  );
}), rI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, oI = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = he({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, b2, s);
  return {
    ...s,
    ...a
  };
}, iI = K(wo, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: rI
})(Te(({
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
  [`&.${Ui.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Ui.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Ui.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Ui.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Ui.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${gg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${gg.inset}`]: {
    marginLeft: 52
  },
  [`& .${xg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${xg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${vg.root}`]: {
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
      [`& .${vg.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Bo = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: i = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: a = !1,
    focusVisibleClassName: u,
    role: c = "menuitem",
    tabIndex: p,
    className: v,
    ...d
  } = r, b = c === "menuitemcheckbox" || c === "menuitemradio" ? !!r.selected : void 0, C = _x(), y = h.useContext(cf), m = h.useMemo(() => ({
    dense: s || y.dense || !1,
    disableGutters: a
  }), [y.dense, s, a]), S = FP(), w = xr(), T = S.suppressInitialFocusVisible, k = S.itemsFocusableWhenDisabled, R = h.useRef(null);
  ot(() => {
    o && R.current && Lx(R.current, C);
  }, [o]);
  const E = {
    ...r,
    dense: m.dense,
    divider: l,
    disableGutters: a
  }, M = oI(r), {
    root: N,
    ...$
  } = M, g = Mx({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), O = st(R, g.ref);
  let I;
  return p !== void 0 ? I = p : S.variant === "selectedMenu" ? I = g.tabIndex : (!r.disabled || k) && (I = -1), /* @__PURE__ */ f.jsx(cf.Provider, {
    value: m,
    children: /* @__PURE__ */ f.jsx(iI, {
      ref: O,
      role: c,
      "aria-checked": b,
      tabIndex: I,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: T,
      focusVisibleClassName: te(M.focusVisible, u),
      className: te(M.root, v),
      ...d,
      ownerState: E,
      classes: $
    })
  });
}), sI = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${ce(n)}`, i && "iconOpen", r && "disabled"]
  };
  return he(l, w2, t);
}, Wx = K("select", {
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
  [`&.${Np.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${Ll.root}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "calc(var(--_caret, 24px) + (var(--_endAdornment, 28px) - 1.5rem)/2)"
    // 1.5rem is the default icon size
  },
  [`.${on.root}:has(> &)`]: {
    "--_endAdornment": "0px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      [`.${on.root}:has(> &)`]: {
        "--_caret": "24px"
      },
      [`.${on.root}:has(> & ~ .${Ll.root})`]: {
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
      [`.${on.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${on.root}:has(> & ~ .${Ll.root})`]: {
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
      [`.${on.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${on.root}:has(> & ~ .${Ll.root})`]: {
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
})), lI = K(Wx, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: hn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Np.multiple}`]: t.multiple
    }];
  }
})({}), Ux = K("svg", {
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
  [`&.${Np.disabled}`]: {
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
})), aI = K(Ux, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ce(n.variant)}`], n.open && t.iconOpen];
  }
})({}), uI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: s,
    inputRef: l,
    variant: a = "standard",
    ...u
  } = t, c = {
    ...t,
    disabled: o,
    variant: a,
    error: i
  }, p = sI(c);
  return /* @__PURE__ */ f.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ f.jsx(lI, {
      ownerState: c,
      className: te(p.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ f.jsx(aI, {
      as: s,
      ownerState: c,
      className: p.icon
    })]
  });
});
var Eg;
const cI = K("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: hn
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
}), dI = K("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: hn
})(Te(({
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
      ...mt(e, "width", {
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
      ...mt(e, "max-width", {
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
      ...mt(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function fI(e) {
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
  return /* @__PURE__ */ f.jsx(cI, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ f.jsx(dI, {
      ownerState: a,
      children: l ? /* @__PURE__ */ f.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Eg || (Eg = /* @__PURE__ */ f.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const pI = (e) => {
  const {
    classes: t
  } = e, r = he({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, C2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, mI = K(Ju, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: qu
})(Te(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Vn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Vn.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${Vn.focused} .${Vn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(wn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Vn.focused} .${Vn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${Vn.error} .${Vn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Vn.disabled} .${Vn.notchedOutline}`]: {
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
        [`&.${io.root}`]: {
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
})), hI = K(fI, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(Te(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), gI = K(ec, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Zu
})(Te(({
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
}))), Yp = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    slotProps: c = {},
    type: p = "text",
    ...v
  } = r, d = pI(r), [x, b] = Ei({
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
  }, y = u.root ?? mI, m = u.input ?? gI, [S, w] = Re("notchedOutline", {
    elementType: hI,
    className: d.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: u,
      slotProps: c
    },
    additionalProps: {
      label: s != null && s !== "" && x.required ? /* @__PURE__ */ f.jsxs(h.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ f.jsx(Ap, {
    slots: {
      root: y,
      input: m
    },
    slotProps: c,
    renderSuffix: (T) => /* @__PURE__ */ f.jsx(S, {
      ...w,
      notched: typeof a < "u" ? a : !!(T.startAdornment || T.filled || T.focused)
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
Yp.muiName = "Input";
function yI(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function Hx(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return h.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ h.isValidElement(n) && (t += Hx(n.props.children));
  }), t;
}
function vI(e, t, n = 0) {
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
function xI(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function SI(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ h.isValidElement(i) || !yI(i) || i.props.disabled)
      continue;
    const s = Hx(i.props.children).trim().toLowerCase();
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
var Rg;
const Bl = 2, bI = 400, Pg = 200, wI = 750, to = " ", CI = "ArrowUp", kI = "ArrowDown", TI = "Enter";
function Ig(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Bl && e.clientX <= r.right + Bl && e.clientY >= r.top - Bl && e.clientY <= r.bottom + Bl;
}
const EI = K(Wx, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${io.select}`]: t.select
      },
      {
        [`&.${io.select}`]: t[n.variant]
      },
      {
        [`&.${io.error}`]: t.error
      },
      {
        [`&.${io.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${io.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), RI = K(Ux, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), PI = K("input", {
  shouldForwardProp: (e) => q0(e) && e !== "classes",
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
}), II = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e;
  return he({
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, Rx, t);
}, MI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var Mi, $o, Xp, qp;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: u,
    defaultValue: c,
    disabled: p,
    displayEmpty: v,
    error: d = !1,
    IconComponent: x,
    inputRef: b,
    labelId: C,
    MenuProps: y = {},
    multiple: m,
    name: S,
    onBlur: w,
    onChange: T,
    onClose: k,
    onFocus: R,
    // eslint-disable-next-line react/prop-types
    onKeyDown: E,
    // eslint-disable-next-line react/prop-types
    onMouseDown: M,
    onOpen: N,
    open: $,
    readOnly: g,
    renderValue: O,
    required: I,
    SelectDisplayProps: P = {},
    tabIndex: L,
    // catching `type` from Input which makes no sense for SelectInput
    type: A,
    value: j,
    variant: z = "standard",
    ...B
  } = t, [W, F] = nf({
    controlled: j,
    default: c,
    name: "Select"
  }), [X, U] = nf({
    controlled: $,
    default: u,
    name: "Select"
  }), q = h.useRef(null), G = h.useRef(null), Q = h.useRef(null), D = h.useRef(!1), ne = h.useRef(!1), ie = h.useRef(null), Ee = h.useRef(!1), be = h.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), fe = h.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), re = qn(), Y = qn(), se = qn(), [ue, ve] = h.useState(null), {
    current: le
  } = h.useRef($ != null), [Ie, Ue] = h.useState(), [De, He] = h.useState(null), Ve = st(n, b), lt = h.useCallback((V) => {
    G.current = V, V && ve(V);
  }, []), We = ue == null ? void 0 : ue.parentNode;
  h.useImperativeHandle(Ve, () => ({
    focus: () => {
      G.current.focus();
    },
    node: q.current,
    value: W
  }), [W]);
  const Se = ue !== null && X, Ke = h.useCallback(() => {
    se.clear(), fe.current.buffer = "", fe.current.previousSearchIndex = null, fe.current.matchedIndex = null;
  }, [se]);
  ot(() => {
    D.current = Se, Se && Ke();
  }, [Se, Ke]);
  const wt = h.useCallback(() => {
    re.clear(), Y.clear();
  }, [re, Y]), oe = h.useCallback(() => {
    wt(), Ee.current = !1, be.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [wt]), xe = h.useCallback(() => {
    ie.current && (ie.current(), ie.current = null);
  }, []);
  h.useEffect(() => {
    Se || (oe(), xe());
  }, [Se, oe, xe]), h.useEffect(() => () => {
    oe(), xe(), Ke();
  }, [oe, xe, Ke]), h.useEffect(() => {
    if (!Se || !We || s || typeof ResizeObserver > "u")
      return;
    const V = new ResizeObserver(() => {
      Ue(We.clientWidth);
    });
    return V.observe(We), () => {
      V.disconnect();
    };
  }, [Se, We, s]), h.useEffect(() => {
    u && X && ue && !le && (Ue(s ? null : We.clientWidth), G.current.focus());
  }, [ue, s]), h.useEffect(() => {
    i && G.current.focus();
  }, [i]), h.useEffect(() => {
    if (!C)
      return;
    const V = ct(G.current).getElementById(C);
    if (V) {
      const ae = () => {
        getSelection().isCollapsed && G.current.focus();
      };
      return V.addEventListener("click", ae), () => {
        V.removeEventListener("click", ae);
      };
    }
  }, [C]);
  const Le = Xe((V, ae) => {
    V || (oe(), xe()), V ? (Ke(), He(zP(ae)), N && N(ae)) : (He(null), k && k(ae)), le || (D.current = V, Ue(s ? null : We.clientWidth), U(V));
  }), dt = () => {
    oe(), ne.current ? Y.start(Pg, () => {
      be.current.allowUnselectedMouseUp = !0, re.start(Pg, () => {
        be.current.allowSelectedMouseUp = !0;
      });
    }) : re.start(bI, () => {
      be.current.allowSelectedMouseUp = !0, be.current.allowUnselectedMouseUp = !0;
    });
  }, Ce = (V) => {
    if (M == null || M(V), V.button !== 0 || (V.preventDefault(), !G.current))
      return;
    G.current.focus();
    const ae = ct(V.currentTarget);
    dt(), xe();
    const ke = (tt) => {
      ie.current = null, G.current && (Ig(tt, G.current) || Ig(tt, Q.current) || !D.current && le || Le(!1, tt));
    };
    ae.addEventListener("mouseup", ke, {
      capture: !0,
      once: !0
    }), ie.current = () => {
      ae.removeEventListener("mouseup", ke, !0);
    }, Le(!0, V);
  }, Cr = (V) => {
    Le(!1, V);
  }, Dn = h.Children.toArray(l), Ri = (V) => {
    const ae = Dn.find((ke) => ke.props.value === V.target.value);
    ae !== void 0 && (F(ae.props.value), T && T(V, ae));
  }, Ro = (V, ae, ke) => {
    if (F(ke), T) {
      const tt = V.nativeEvent || V, _t = new tt.constructor(tt.type, tt);
      Object.defineProperty(_t, "target", {
        writable: !0,
        value: {
          value: ke,
          name: S
        }
      }), T(_t, ae);
    }
  }, pe = (V) => (ae) => {
    Ee.current = !1;
    let ke;
    if (ae.currentTarget.hasAttribute("tabindex")) {
      if (m) {
        ke = Array.isArray(W) ? W.slice() : [];
        const tt = W.indexOf(V.props.value);
        tt === -1 ? ke.push(V.props.value) : ke.splice(tt, 1);
      } else
        ke = V.props.value;
      V.props.onClick && V.props.onClick(ae), W !== ke && Ro(ae, V, ke), m || Le(!1, ae);
    }
  }, Ge = (V, ae) => (ke) => {
    var il, jo;
    if ((jo = (il = V.props).onMouseUp) == null || jo.call(il, ke), Ee.current) {
      Ee.current = !1;
      return;
    }
    const tt = !be.current.allowSelectedMouseUp && ae, _t = !be.current.allowUnselectedMouseUp && !ae;
    tt || _t || ke.currentTarget.click();
  }, tn = (V) => {
    var Zp;
    const ae = fe.current, ke = ae.buffer !== "";
    if (Se || m || p || V.defaultPrevented || (Zp = V.nativeEvent) != null && Zp.isComposing || V.key.length !== 1 || V.ctrlKey || V.metaKey || V.altKey || V.key === to && !ke)
      return !1;
    V.key === to && V.preventDefault();
    const tt = ae.buffer === "", {
      options: _t,
      selectedIndex: il
    } = SI(Dn, W);
    if (_t.length === 0)
      return V.key !== to && Ke(), !0;
    tt && (ae.previousSearchIndex = il);
    const jo = V.key.toLowerCase();
    ae.buffer === jo && xI(_t, jo) && (ae.buffer = "", ae.previousSearchIndex = ae.matchedIndex), ae.buffer += jo, se.start(wI, Ke);
    const lc = vI(_t, ae.buffer, (ae.previousSearchIndex ?? -1) + 1);
    if (lc !== -1) {
      const ac = _t[lc];
      return ae.matchedIndex = lc, ua(W, ac.value) || Ro(V, ac.child, ac.value), !0;
    }
    return V.key !== to && Ke(), !0;
  }, Qp = (V) => {
    if (!g) {
      const ae = tn(V), ke = V.key === to || V.key === CI || V.key === kI || V.key === TI;
      !ae && ke && (V.preventDefault(), Le(!0, V)), E == null || E(V);
    }
  }, ic = (V) => {
    Ke(), !Se && w && (Object.defineProperty(V, "target", {
      writable: !0,
      value: {
        value: W,
        name: S
      }
    }), w(V));
  }, Pi = (V) => (ae) => {
    var ke, tt;
    (tt = (ke = V == null ? void 0 : V.props) == null ? void 0 : ke.onKeyDown) == null || tt.call(ke, ae), ae.key === to && ae.target === ae.currentTarget && !ae.defaultPrevented && (ae.preventDefault(), ae.repeat || ae.currentTarget.click());
  };
  delete B["aria-invalid"];
  let kr, rl;
  const Po = [];
  let Io = !1, Mo = !1;
  (Ba({
    value: W
  }) || v) && (O ? kr = O(W) : Io = !0);
  const sc = Dn.map((V) => {
    if (!/* @__PURE__ */ h.isValidElement(V))
      return null;
    let ae;
    if (m) {
      if (!Array.isArray(W))
        throw new Error(vr(2));
      ae = W.some((ke) => ua(ke, V.props.value)), ae && Io && Po.push(V.props.children);
    } else
      ae = ua(W, V.props.value), ae && Io && (rl = V.props.children);
    return ae && (Mo = !0), /* @__PURE__ */ h.cloneElement(V, {
      "aria-selected": ae ? "true" : "false",
      onMouseDown: (ke) => {
        var tt, _t;
        Ee.current = !0, (_t = (tt = V.props).onMouseDown) == null || _t.call(tt, ke);
      },
      onPointerDown: (ke) => {
        var tt, _t;
        Ee.current = !0, (_t = (tt = V.props).onPointerDown) == null || _t.call(tt, ke);
      },
      onClick: pe(V),
      onMouseUp: Ge(V, ae),
      onKeyUp: (ke) => {
        ke.key === to && ke.preventDefault(), V.props.onKeyUp && V.props.onKeyUp(ke);
      },
      onKeyDown: Pi(V),
      role: "option",
      selected: ae,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": V.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  ot(() => {
    ne.current = Mo, !Se && !m && !Mo && Ke();
  }, [Mo, m, Se, Ke]), Io && (m ? Po.length === 0 ? kr = null : kr = Po.reduce((V, ae, ke) => (V.push(ae), ke < Po.length - 1 && V.push(", "), V), []) : kr = rl);
  let ol = Ie;
  !s && le && ue && (ol = We.clientWidth);
  let Ii;
  typeof L < "u" ? Ii = L : Ii = p ? null : 0;
  const ee = P.id || (S ? `mui-component-select-${S}` : void 0), Z = {
    ...t,
    variant: z,
    value: W,
    open: Se,
    error: d
  }, ge = II(Z), we = typeof ((Mi = y.slotProps) == null ? void 0 : Mi.paper) == "function" ? y.slotProps.paper(Z) : ($o = y.slotProps) == null ? void 0 : $o.paper, ft = st(we == null ? void 0 : we.ref, Q), or = typeof ((Xp = y.slotProps) == null ? void 0 : Xp.list) == "function" ? y.slotProps.list(Z) : (qp = y.slotProps) == null ? void 0 : qp.list, Wn = xr(), qr = xr();
  return /* @__PURE__ */ f.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ f.jsx(EI, {
      as: "div",
      ref: lt,
      tabIndex: Ii,
      role: "combobox",
      "aria-controls": Se ? Wn : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Se ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": g ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": I ? "true" : void 0,
      "aria-invalid": d ? "true" : void 0,
      onKeyDown: Qp,
      onMouseDown: p || g ? null : Ce,
      onBlur: ic,
      onFocus: R,
      ...P,
      ownerState: Z,
      className: te(P.className, ge.select, a),
      id: ee,
      children: _P(kr) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Rg || (Rg = /* @__PURE__ */ f.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : kr
    }), /* @__PURE__ */ f.jsx(PI, {
      "aria-invalid": d,
      value: Array.isArray(W) ? W.join(",") : W,
      name: S,
      ref: q,
      "aria-hidden": !0,
      onChange: Ri,
      tabIndex: -1,
      disabled: p,
      readOnly: g,
      className: ge.nativeInput,
      autoFocus: i,
      required: I,
      ...B,
      id: B.id ?? qr,
      ownerState: Z
    }), /* @__PURE__ */ f.jsx(RI, {
      as: x,
      className: ge.icon,
      ownerState: Z
    }), /* @__PURE__ */ f.jsx(BP, {
      value: De,
      children: /* @__PURE__ */ f.jsx(nI, {
        id: `menu-${S || ""}`,
        anchorEl: We,
        open: Se,
        onClose: Cr,
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
            "aria-multiselectable": m ? "true" : void 0,
            disableListWrap: !0,
            id: Wn,
            ...or
          },
          paper: {
            ...we,
            ref: ft,
            style: {
              minWidth: ol,
              ...we == null ? void 0 : we.style
            }
          }
        },
        children: sc
      })
    })]
  });
}), $I = (e) => {
  const {
    classes: t
  } = e, r = he({
    root: ["root"]
  }, Rx, t);
  return {
    ...t,
    ...r
  };
}, Gp = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => hn(e) && e !== "variant"
}, jI = K(Vp, Gp)(""), OI = K(Yp, Gp)(""), AI = K(Hp, Gp)(""), Ka = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    IconComponent: c = ZE,
    id: p,
    input: v,
    inputProps: d,
    label: x,
    labelId: b,
    MenuProps: C,
    multiple: y = !1,
    native: m = !1,
    onClose: S,
    onOpen: w,
    open: T,
    renderValue: k,
    SelectDisplayProps: R,
    variant: E = "outlined",
    ...M
  } = r, N = m ? uI : MI, [$] = Ei({
    props: r,
    states: ["variant", "error"]
  }), g = $.variant || E, O = {
    ...r,
    variant: g,
    classes: s
  }, I = $I(O), {
    root: P,
    ...L
  } = I, A = v || {
    standard: /* @__PURE__ */ f.jsx(jI, {
      ownerState: O
    }),
    outlined: /* @__PURE__ */ f.jsx(OI, {
      label: x,
      ownerState: O
    }),
    filled: /* @__PURE__ */ f.jsx(AI, {
      ownerState: O
    })
  }[g], j = st(n, Eo(A));
  return /* @__PURE__ */ f.jsx(h.Fragment, {
    children: /* @__PURE__ */ h.cloneElement(A, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: N,
      inputProps: {
        children: i,
        error: $.error,
        IconComponent: c,
        variant: g,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: y,
        ...m ? {
          id: p
        } : {
          autoWidth: o,
          defaultOpen: a,
          displayEmpty: u,
          labelId: b,
          MenuProps: C,
          onClose: S,
          onOpen: w,
          open: T,
          renderValue: k,
          SelectDisplayProps: {
            id: p,
            ...R
          }
        },
        ...d,
        classes: d ? $t(L, d.classes) : L,
        ...v ? v.props.inputProps : {}
      },
      ...(y && m || u) && g === "outlined" ? {
        notched: !0
      } : {},
      ref: j,
      className: te(A.props.className, l, I.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!v && {
        variant: g
      },
      ...M
    })
  });
});
Ka.muiName = "Select";
function NI(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = qn();
  h.useEffect(() => {
    if (!o)
      return;
    function y(m) {
      m.defaultPrevented || m.key === "Escape" && (r == null || r(m, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", y), () => {
      document.removeEventListener("keydown", y);
    };
  }, [o, r]);
  const l = Xe((y, m) => {
    r == null || r(y, m);
  }), a = Xe((y) => {
    !r || y == null || s.start(y, () => {
      l(null, "timeout");
    });
  });
  h.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const u = (y) => {
    r == null || r(y, "clickaway");
  }, c = s.clear, p = h.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), v = (y) => (m) => {
    const S = y.onBlur;
    S == null || S(m), p();
  }, d = (y) => (m) => {
    const S = y.onFocus;
    S == null || S(m), c();
  }, x = (y) => (m) => {
    const S = y.onMouseEnter;
    S == null || S(m), c();
  }, b = (y) => (m) => {
    const S = y.onMouseLeave;
    S == null || S(m), p();
  };
  return h.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", p), window.addEventListener("blur", c), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", c);
      };
  }, [n, o, p, c]), {
    getRootProps: (y = {}) => {
      const m = {
        ...Wa(e),
        ...Wa(y)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...y,
        ...m,
        onBlur: v(m),
        onFocus: d(m),
        onMouseEnter: x(m),
        onMouseLeave: b(m)
      };
    },
    onClickAway: u
  };
}
function LI(e) {
  return me("MuiSnackbarContent", e);
}
de("MuiSnackbarContent", ["root", "message", "action"]);
const zI = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, LI, t);
}, _I = K(Sr, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(Te(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Qd(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Qd(e.palette.background.default, t),
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
})), BI = K("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), FI = K("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), DI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, u = r, c = zI(u);
  return /* @__PURE__ */ f.jsxs(_I, {
    role: l,
    elevation: 6,
    className: te(c.root, i),
    ownerState: u,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ f.jsx(BI, {
      className: c.message,
      ownerState: u,
      children: s
    }), o ? /* @__PURE__ */ f.jsx(FI, {
      className: c.action,
      ownerState: u,
      children: o
    }) : null]
  });
});
function WI(e) {
  return me("MuiSnackbar", e);
}
de("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const UI = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${ce(n.vertical)}${ce(n.horizontal)}`]
  };
  return he(r, WI, t);
}, HI = K("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${ce(n.anchorOrigin.vertical)}${ce(n.anchorOrigin.horizontal)}`]];
  }
})(Te(({
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
}))), VI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiSnackbar"
  }), o = Qr(), i = {
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
    autoHideDuration: u = null,
    children: c,
    className: p,
    disableWindowBlurListener: v = !1,
    message: d,
    onBlur: x,
    onClose: b,
    onFocus: C,
    onMouseEnter: y,
    onMouseLeave: m,
    open: S,
    resumeHideDuration: w,
    slots: T = {},
    slotProps: k = {},
    transitionDuration: R = i,
    ...E
  } = r, M = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    },
    autoHideDuration: u,
    disableWindowBlurListener: v,
    transitionDuration: R
  }, N = UI(M), {
    getRootProps: $,
    onClickAway: g
  } = NI(M), [O, I] = h.useState(!0), P = {
    slots: T,
    slotProps: k
  }, [L, A] = Re("root", {
    ref: n,
    className: [N.root, p],
    elementType: HI,
    getSlotProps: $,
    externalForwardedProps: {
      ...P,
      ...E
    },
    ownerState: M
  }), [j, {
    ownerState: z,
    ...B
  }] = Re("clickAwayListener", {
    elementType: bR,
    externalForwardedProps: P,
    getSlotProps: (q) => ({
      onClickAway: (...G) => {
        var D;
        const Q = G[0];
        (D = q.onClickAway) == null || D.call(q, ...G), !(Q != null && Q.defaultMuiPrevented) && g(...G);
      }
    }),
    ownerState: M
  }), [W, F] = Re("content", {
    elementType: DI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    additionalProps: {
      message: d,
      action: s
    },
    ownerState: M
  }), [X, U] = Re("transition", {
    elementType: Hs,
    externalForwardedProps: P,
    getSlotProps: (q) => ({
      onEnter: (...G) => {
        var Q;
        (Q = q.onEnter) == null || Q.call(q, ...G), I(!1);
      },
      onExited: (...G) => {
        var Q;
        (Q = q.onExited) == null || Q.call(q, ...G), I(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: S,
      timeout: R,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: M
  });
  return !S && O ? null : /* @__PURE__ */ f.jsx(j, {
    ...B,
    ...T.clickAwayListener && {
      ownerState: z
    },
    children: /* @__PURE__ */ f.jsx(L, {
      ...A,
      children: /* @__PURE__ */ f.jsx(X, {
        ...U,
        children: c || /* @__PURE__ */ f.jsx(W, {
          ...F
        })
      })
    })
  });
});
function KI(e) {
  return me("MuiTooltip", e);
}
const gn = de("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function YI(e) {
  return Math.round(e * 1e5) / 1e5;
}
const GI = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${ce(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return he(s, KI, t);
}, QI = K(xx, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(Te(({
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
      [`&[data-popper-placement*="bottom"] .${gn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${gn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${gn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${gn.arrow}`]: {
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
}))), XI = K("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ce(n.placement.split("-")[0])}`]];
  }
})(Te(({
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
  [`.${gn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${gn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${gn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${gn.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${YI(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${gn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${gn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${gn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${gn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), qI = K("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(Te(({
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
let Fl = !1;
const Mg = new nc();
let Ki = {
  x: 0,
  y: 0
};
function Dl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const no = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disableInteractive: c = !1,
    disableTouchListener: p = !1,
    enterDelay: v = 100,
    enterNextDelay: d = 0,
    enterTouchDelay: x = 700,
    followCursor: b = !1,
    id: C,
    leaveDelay: y = 0,
    leaveTouchDelay: m = 1500,
    onClose: S,
    onOpen: w,
    open: T,
    placement: k = "bottom",
    slotProps: R = {},
    slots: E = {},
    title: M,
    ...N
  } = r, $ = /* @__PURE__ */ h.isValidElement(i) ? i : /* @__PURE__ */ f.jsx("span", {
    children: i
  }), g = Qr(), [O, I] = h.useState(), [P, L] = h.useState(null), A = h.useRef(!1), j = c || b, z = qn(), B = qn(), W = qn(), F = qn(), [X, U] = nf({
    controlled: T,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let q = X;
  const G = xr(C), Q = h.useRef(), D = Xe(() => {
    Q.current !== void 0 && (document.body.style.WebkitUserSelect = Q.current, Q.current = void 0), F.clear();
  });
  h.useEffect(() => D, [D]);
  const ne = (pe) => {
    Mg.clear(), Fl = !0, U(!0), w && !q && w(pe);
  }, ie = Xe(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (pe) => {
      Mg.start(800 + y, () => {
        Fl = !1;
      }), U(!1), S && q && S(pe), z.start(g.transitions.duration.shortest, () => {
        A.current = !1;
      });
    }
  ), Ee = (pe) => {
    O != null && O.disabled || A.current && pe.type !== "touchstart" || (O && O.removeAttribute("title"), B.clear(), W.clear(), v || Fl && d ? B.start(Fl ? d : v, () => {
      ne(pe);
    }) : ne(pe));
  }, be = (pe) => {
    B.clear(), W.start(y, () => {
      ie(pe);
    });
  }, [, fe] = h.useState(!1), re = (pe) => {
    const Ge = (pe == null ? void 0 : pe.target) ?? O;
    if (!Ge || Ge.disabled || !Ua(Ge)) {
      fe(!1);
      const tn = pe ?? new Event("blur");
      !pe && Ge && (Object.defineProperty(tn, "target", {
        value: Ge
      }), Object.defineProperty(tn, "currentTarget", {
        value: Ge
      })), be(tn);
    }
  }, Y = (pe) => {
    if (O || I(pe.currentTarget), Ua(pe.target)) {
      const Ge = (tn) => {
        tn.target.disabled && re(tn), tn.target.removeEventListener("blur", Ge);
      };
      pe.target.addEventListener("blur", Ge), fe(!0), Ee(pe);
    }
  }, se = (pe) => {
    A.current = !0;
    const Ge = $.props;
    Ge.onTouchStart && Ge.onTouchStart(pe);
  }, ue = (pe) => {
    se(pe), W.clear(), z.clear(), D(), Q.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", F.start(x, () => {
      document.body.style.WebkitUserSelect = Q.current, Ee(pe);
    });
  }, ve = (pe) => {
    $.props.onTouchEnd && $.props.onTouchEnd(pe), D(), W.start(m, () => {
      ie(pe);
    });
  };
  h.useEffect(() => {
    if (!q)
      return;
    function pe(Ge) {
      Ge.key === "Escape" && ie(Ge);
    }
    return document.addEventListener("keydown", pe), () => {
      document.removeEventListener("keydown", pe);
    };
  }, [ie, q]);
  const le = st(Eo($), I, n);
  !M && M !== 0 && (q = !1);
  const Ie = h.useRef(), Ue = (pe) => {
    const Ge = $.props;
    Ge.onMouseMove && Ge.onMouseMove(pe), Ki = {
      x: pe.clientX,
      y: pe.clientY
    }, Ie.current && Ie.current.update();
  }, De = {}, He = typeof M == "string";
  l ? (De.title = !q && He && !u ? M : null, De["aria-describedby"] = q ? G : null) : (De["aria-label"] = He ? M : null, De["aria-labelledby"] = q && !He ? G : null);
  const Ve = {
    ...De,
    ...N,
    ...$.props,
    className: te(N.className, $.props.className),
    onTouchStart: se,
    ref: le,
    ...b ? {
      onMouseMove: Ue
    } : {}
  }, lt = {};
  p || (Ve.onTouchStart = ue, Ve.onTouchEnd = ve), u || (Ve.onMouseOver = Dl(Ee, Ve.onMouseOver), Ve.onMouseLeave = Dl(be, Ve.onMouseLeave), j || (lt.onMouseOver = Ee, lt.onMouseLeave = be)), a || (Ve.onFocus = Dl(Y, Ve.onFocus), Ve.onBlur = Dl(re, Ve.onBlur), j || (lt.onFocus = Y, lt.onBlur = re));
  const We = {
    ...r,
    arrow: o,
    disableInteractive: j,
    placement: k,
    touch: A.current
  }, Se = typeof R.popper == "function" ? R.popper(We) : R.popper, Ke = h.useMemo(() => {
    var Ge;
    let pe = [{
      name: "arrow",
      enabled: !!P,
      options: {
        element: P,
        padding: 4
      }
    }];
    return (Ge = Se == null ? void 0 : Se.popperOptions) != null && Ge.modifiers && (pe = pe.concat(Se.popperOptions.modifiers)), {
      ...Se == null ? void 0 : Se.popperOptions,
      modifiers: pe
    };
  }, [P, Se == null ? void 0 : Se.popperOptions]), wt = GI(We), oe = {
    slots: E,
    slotProps: {
      arrow: R.arrow,
      popper: Se,
      tooltip: R.tooltip,
      transition: R.transition
    }
  }, [xe, Le] = Re("popper", {
    elementType: QI,
    externalForwardedProps: oe,
    ownerState: We,
    className: wt.popper
  }), [dt, Ce] = Re("transition", {
    elementType: Hs,
    externalForwardedProps: oe,
    ownerState: We
  }), [Cr, Dn] = Re("tooltip", {
    elementType: XI,
    className: wt.tooltip,
    externalForwardedProps: oe,
    ownerState: We
  }), [Ri, Ro] = Re("arrow", {
    elementType: qI,
    className: wt.arrow,
    externalForwardedProps: oe,
    ownerState: We,
    ref: L
  });
  return /* @__PURE__ */ f.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ h.cloneElement($, Ve), /* @__PURE__ */ f.jsx(xe, {
      as: xx,
      placement: k,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: Ki.y,
          left: Ki.x,
          right: Ki.x,
          bottom: Ki.y,
          width: 0,
          height: 0
        })
      } : O,
      popperRef: Ie,
      open: O ? q : !1,
      id: G,
      transition: !0,
      ...lt,
      ...Le,
      popperOptions: Ke,
      children: ({
        TransitionProps: pe
      }) => /* @__PURE__ */ f.jsx(dt, {
        timeout: g.transitions.duration.shorter,
        ...pe,
        ...Ce,
        children: /* @__PURE__ */ f.jsxs(Cr, {
          ...Dn,
          children: [M, o ? /* @__PURE__ */ f.jsx(Ri, {
            ...Ro
          }) : null]
        })
      })
    })]
  });
}), at = Ck({
  createStyledComponent: K("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => ye({
    props: e,
    name: "MuiStack"
  })
});
function ZI(e) {
  return me("MuiTab", e);
}
const On = de("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), JI = (e) => {
  const {
    classes: t,
    textColor: n,
    fullWidth: r,
    wrapped: o,
    icon: i,
    label: s,
    selected: l,
    disabled: a
  } = e, u = {
    root: ["root", i && s && "labelIcon", `textColor${ce(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return he(u, ZI, t);
}, eM = K(wo, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${ce(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${On.icon}`]: t.icon
    }];
  }
})(Te(({
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
      [`& > .${On.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${On.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${On.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${On.icon}`]: {
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
      [`&.${On.selected}`]: {
        opacity: 1
      },
      [`&.${On.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${On.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${On.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${On.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${On.disabled}`]: {
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
}))), Yi = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTab"
  }), {
    className: o,
    disabled: i = !1,
    disableFocusRipple: s = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: l,
    icon: a,
    iconPosition: u = "top",
    // eslint-disable-next-line react/prop-types
    indicator: c,
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
    value: m,
    wrapped: S = !1,
    ...w
  } = r, T = Px(), k = Mx({
    id: m,
    ref: n,
    disabled: i,
    selected: b
  }), E = T.getItemMap().size === 0 && b ? 0 : k.tabIndex, M = {
    ...r,
    disabled: i,
    disableFocusRipple: s,
    selected: b,
    icon: !!a,
    iconPosition: u,
    label: !!p,
    fullWidth: l,
    textColor: y,
    wrapped: S
  }, N = JI(M), $ = a && p && /* @__PURE__ */ h.isValidElement(a) ? /* @__PURE__ */ h.cloneElement(a, {
    className: te(N.icon, a.props.className)
  }) : a, g = (I) => {
    !b && v && v(I, m), d && d(I);
  }, O = (I) => {
    C && !b && v && v(I, m), x && x(I);
  };
  return /* @__PURE__ */ f.jsxs(eM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: te(N.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": b,
    disabled: i,
    onClick: g,
    onFocus: O,
    tabIndex: E,
    ownerState: M,
    ...w,
    children: [u === "top" || u === "start" ? /* @__PURE__ */ f.jsxs(h.Fragment, {
      children: [$, p]
    }) : /* @__PURE__ */ f.jsxs(h.Fragment, {
      children: [p, $]
    }), c]
  });
}), Vx = /* @__PURE__ */ h.createContext();
function tM(e) {
  return me("MuiTable", e);
}
de("MuiTable", ["root", "stickyHeader"]);
const nM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return he({
    root: ["root", n && "stickyHeader"]
  }, tM, t);
}, rM = K("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.stickyHeader && t.stickyHeader];
  }
})(Te(({
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
}))), $g = "table", oM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = $g,
    padding: s = "normal",
    size: l = "medium",
    stickyHeader: a = !1,
    ...u
  } = r, c = {
    ...r,
    component: i,
    padding: s,
    size: l,
    stickyHeader: a
  }, p = nM(c), v = h.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ f.jsx(Vx.Provider, {
    value: v,
    children: /* @__PURE__ */ f.jsx(rM, {
      as: i,
      role: i === $g ? null : "table",
      ref: n,
      className: te(p.root, o),
      ownerState: c,
      ...u
    })
  });
}), oc = /* @__PURE__ */ h.createContext();
function iM(e) {
  return me("MuiTableBody", e);
}
de("MuiTableBody", ["root"]);
const sM = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, iM, t);
}, lM = K("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), aM = {
  variant: "body"
}, jg = "tbody", uM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = jg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = sM(l);
  return /* @__PURE__ */ f.jsx(oc.Provider, {
    value: aM,
    children: /* @__PURE__ */ f.jsx(lM, {
      className: te(a.root, o),
      as: i,
      ref: n,
      role: i === jg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function cM(e) {
  return me("MuiTableCell", e);
}
const dM = de("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), fM = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: o,
    size: i,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${ce(r)}`, o !== "normal" && `padding${ce(o)}`, `size${ce(i)}`]
  };
  return he(l, cM, t);
}, pM = K("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ce(n.size)}`], n.padding !== "normal" && t[`padding${ce(n.padding)}`], n.align !== "inherit" && t[`align${ce(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(Te(({
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
      [`&.${dM.paddingCheckbox}`]: {
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
}))), Bt = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    sortDirection: c,
    variant: p,
    ...v
  } = r, d = h.useContext(Vx), x = h.useContext(oc), b = x && x.variant === "head";
  let C;
  s ? C = s : C = b ? "th" : "td";
  let y = a;
  C === "td" ? y = void 0 : !y && b && (y = "col");
  const m = p || x && x.variant, S = {
    ...r,
    align: o,
    component: C,
    padding: l || (d && d.padding ? d.padding : "normal"),
    size: u || (d && d.size ? d.size : "medium"),
    sortDirection: c,
    stickyHeader: m === "head" && d && d.stickyHeader,
    variant: m
  }, w = fM(S);
  let T = null;
  return c && (T = c === "asc" ? "ascending" : "descending"), /* @__PURE__ */ f.jsx(pM, {
    as: C,
    ref: n,
    className: te(w.root, i),
    "aria-sort": T,
    scope: y,
    ownerState: S,
    ...v
  });
});
function mM(e) {
  return me("MuiTableContainer", e);
}
de("MuiTableContainer", ["root"]);
const hM = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, mM, t);
}, gM = K("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), yM = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = hM(l);
  return /* @__PURE__ */ f.jsx(gM, {
    ref: n,
    as: i,
    className: te(a.root, o),
    ownerState: l,
    ...s
  });
});
function vM(e) {
  return me("MuiTableHead", e);
}
de("MuiTableHead", ["root"]);
const xM = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, vM, t);
}, SM = K("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), bM = {
  variant: "head"
}, Og = "thead", wM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Og,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = xM(l);
  return /* @__PURE__ */ f.jsx(oc.Provider, {
    value: bM,
    children: /* @__PURE__ */ f.jsx(SM, {
      as: i,
      className: te(a.root, o),
      ref: n,
      role: i === Og ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), CM = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), kM = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function TM(e) {
  return me("MuiTableRow", e);
}
const Ag = de("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), EM = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return he({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, TM, t);
}, RM = K("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.head && t.head, n.footer && t.footer];
  }
})(Te(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${Ag.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Ag.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Ng = "tr", Vc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Ng,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, u = h.useContext(oc), c = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: u && u.variant === "head",
    footer: u && u.variant === "footer"
  }, p = EM(c);
  return /* @__PURE__ */ f.jsx(RM, {
    as: i,
    ref: n,
    className: te(p.root, o),
    role: i === Ng ? null : "row",
    ownerState: c,
    ...a
  });
});
function PM(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function IM(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = PM,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let u = !1;
  const c = () => {
    u = !0;
  }, p = (v) => {
    if (u) {
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
  return a === n ? (o(new Error("Element already at target position")), c) : (requestAnimationFrame(p), c);
}
const MM = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function $M(e) {
  const {
    onChange: t,
    ...n
  } = e, r = h.useRef(), o = h.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return ot(() => {
    const s = Xu(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = Fn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), h.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ f.jsx("div", {
    style: MM,
    ...n,
    ref: o
  });
}
function jM(e) {
  return me("MuiTabScrollButton", e);
}
const OM = de("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), AM = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return he({
    root: ["root", n, r && "disabled"]
  }, jM, t);
}, NM = K(wo, {
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
  [`&.${OM.disabled}`]: {
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
}), LM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: o,
    slots: i = {},
    slotProps: s = {},
    direction: l,
    orientation: a,
    disabled: u,
    ...c
  } = r, {
    nativeButton: p,
    ...v
  } = c, d = Gu(), x = {
    isRtl: d,
    ...r
  }, b = AM(x), C = i.StartScrollButtonIcon ?? CM, y = i.EndScrollButtonIcon ?? kM, m = bi({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  }), S = bi({
    elementType: y,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  });
  return /* @__PURE__ */ f.jsx(NM, {
    component: "div",
    className: te(b.root, o),
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
      ...m
    }) : /* @__PURE__ */ f.jsx(y, {
      ...S
    })
  });
});
function zM(e) {
  return me("MuiTabs", e);
}
const Kc = de("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), _M = (e) => {
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
  return he({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", i && "scrollableY"],
    list: ["list", t && "vertical", s && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [o && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, zM, a);
}, BM = K("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Kc.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Kc.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(Te(({
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
      [`& .${Kc.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), FM = K("div", {
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
}), DM = K("div", {
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
}), WM = K("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(Te(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  ...mt(e),
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
}))), UM = K($M)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Lg = {}, HM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTabs"
  }), o = Qr(), i = Gu(), s = tc(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: u,
    centered: c = !1,
    children: p,
    className: v,
    component: d = "div",
    allowScrollButtonsMobile: x = !1,
    indicatorColor: b = "primary",
    onChange: C,
    orientation: y = "horizontal",
    scrollButtons: m = "auto",
    selectionFollowsFocus: S,
    slots: w = {},
    slotProps: T = {},
    textColor: k = "primary",
    value: R,
    variant: E = "standard",
    visibleScrollbar: M = !1,
    ...N
  } = r, $ = E === "scrollable", g = y === "vertical", O = g ? "scrollTop" : "scrollLeft", I = g ? "top" : "left", P = g ? "bottom" : "right", L = g ? "clientHeight" : "clientWidth", A = g ? "height" : "width", j = {
    ...r,
    component: d,
    allowScrollButtonsMobile: x,
    indicatorColor: b,
    orientation: y,
    vertical: g,
    scrollButtons: m,
    textColor: k,
    variant: E,
    visibleScrollbar: M,
    fixed: !$,
    hideScrollbar: $ && !M,
    scrollableX: $ && !g,
    scrollableY: $ && g,
    centered: c && !$,
    scrollButtonsHideMobile: !x
  }, z = _M(j), B = bi({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: T.startScrollButtonIcon,
    ownerState: j
  }), W = bi({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: T.endScrollButtonIcon,
    ownerState: j
  }), [F, X] = h.useState(!1), [U, q] = h.useState(Lg), [G, Q] = h.useState(!1), [D, ne] = h.useState(!1), [ie, Ee] = h.useState(!1), be = R === !1 ? null : R, [fe, re] = h.useState(!1), [Y, se] = h.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), ue = /* @__PURE__ */ new Map(), ve = h.useRef(null), le = h.useRef(null), Ie = {
    slots: w,
    slotProps: T
  }, Ue = () => {
    const ee = ve.current;
    let Z;
    if (ee) {
      const we = ee.getBoundingClientRect();
      Z = {
        clientWidth: ee.clientWidth,
        scrollLeft: ee.scrollLeft,
        scrollTop: ee.scrollTop,
        scrollWidth: ee.scrollWidth,
        top: we.top,
        bottom: we.bottom,
        left: we.left,
        right: we.right
      };
    }
    let ge;
    if (ee && R !== !1) {
      const we = le.current.children;
      if (we.length > 0) {
        const ft = we[ue.get(R)];
        ge = ft ? ft.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: Z,
      tabMeta: ge
    };
  }, De = Xe(() => {
    const {
      tabsMeta: ee,
      tabMeta: Z
    } = Ue();
    let ge = 0, we;
    g ? (we = "top", Z && ee && (ge = Z.top - ee.top + ee.scrollTop)) : (we = i ? "right" : "left", Z && ee && (ge = (i ? -1 : 1) * (Z[we] - ee[we] + ee.scrollLeft)));
    const ft = {
      [we]: ge,
      // May be wrong until the font is loaded.
      [A]: Z ? Z[A] : 0
    };
    if (typeof U[we] != "number" || typeof U[A] != "number")
      q(ft);
    else {
      const or = Math.abs(U[we] - ft[we]), Wn = Math.abs(U[A] - ft[A]);
      (or >= 1 || Wn >= 1) && q(ft);
    }
  }), He = (ee, {
    animation: Z = !0
  } = {}) => {
    Z && !s.shouldReduceMotion ? IM(O, ve.current, ee, {
      duration: o.transitions.duration.standard
    }) : ve.current[O] = ee;
  }, Ve = (ee) => {
    let Z = ve.current[O];
    g ? Z += ee : Z += ee * (i ? -1 : 1), He(Z);
  }, lt = () => {
    const ee = ve.current[L];
    let Z = 0;
    const ge = Array.from(le.current.children);
    for (let we = 0; we < ge.length; we += 1) {
      const ft = ge[we];
      if (Z + ft[L] > ee) {
        we === 0 && (Z = ee);
        break;
      }
      Z += ft[L];
    }
    return Z;
  }, We = () => {
    Ve(-1 * lt());
  }, Se = () => {
    Ve(lt());
  }, [Ke, {
    onChange: wt,
    ...oe
  }] = Re("scrollbar", {
    className: te(z.scrollableX, z.hideScrollbar),
    elementType: UM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Ie,
    ownerState: j
  }), xe = h.useCallback((ee) => {
    wt == null || wt(ee), se({
      overflow: null,
      scrollbarWidth: ee
    });
  }, [wt]), [Le, dt] = Re("scrollButtons", {
    className: z.scrollButtons,
    elementType: LM,
    externalForwardedProps: Ie,
    ownerState: j,
    additionalProps: {
      orientation: y,
      slots: {
        StartScrollButtonIcon: w.startScrollButtonIcon,
        EndScrollButtonIcon: w.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: B,
        endScrollButtonIcon: W
      }
    }
  }), Ce = () => {
    const ee = {};
    ee.scrollbarSizeListener = $ ? /* @__PURE__ */ f.jsx(Ke, {
      ...oe,
      onChange: xe
    }) : null;
    const ge = $ && (m === "auto" && (G || D) || m === !0);
    return ee.scrollButtonStart = ge ? /* @__PURE__ */ f.jsx(Le, {
      direction: i ? "right" : "left",
      onClick: We,
      disabled: !G,
      ...dt
    }) : null, ee.scrollButtonEnd = ge ? /* @__PURE__ */ f.jsx(Le, {
      direction: i ? "left" : "right",
      onClick: Se,
      disabled: !D,
      ...dt
    }) : null, ee;
  }, Cr = Xe((ee) => {
    const {
      tabsMeta: Z,
      tabMeta: ge
    } = Ue();
    if (!(!ge || !Z)) {
      if (ge[I] < Z[I]) {
        const we = Z[O] + (ge[I] - Z[I]);
        He(we, {
          animation: ee
        });
      } else if (ge[P] > Z[P]) {
        const we = Z[O] + (ge[P] - Z[P]);
        He(we, {
          animation: ee
        });
      }
    }
  }), Dn = Xe(() => {
    $ && m !== !1 && Ee(!ie);
  });
  h.useEffect(() => {
    const ee = Xu(() => {
      ve.current && De();
    });
    let Z;
    const ge = (or) => {
      or.forEach((Wn) => {
        Wn.removedNodes.forEach((qr) => {
          Z == null || Z.unobserve(qr);
        }), Wn.addedNodes.forEach((qr) => {
          Z == null || Z.observe(qr);
        });
      }), ee(), Dn();
    }, we = Fn(ve.current);
    we.addEventListener("resize", ee);
    let ft;
    return typeof ResizeObserver < "u" && (Z = new ResizeObserver(ee), Array.from(le.current.children).forEach((or) => {
      Z.observe(or);
    })), typeof MutationObserver < "u" && (ft = new MutationObserver(ge), ft.observe(le.current, {
      childList: !0
    })), () => {
      ee.clear(), we.removeEventListener("resize", ee), ft == null || ft.disconnect(), Z == null || Z.disconnect();
    };
  }, [De, Dn]), h.useEffect(() => {
    const ee = Array.from(le.current.children), Z = ee.length;
    if (typeof IntersectionObserver < "u" && Z > 0 && $ && m !== !1) {
      const ge = ee[0], we = ee[Z - 1], ft = {
        root: ve.current,
        threshold: 0.99
      }, or = ($o) => {
        Q(!$o[0].isIntersecting);
      }, Wn = new IntersectionObserver(or, ft);
      Wn.observe(ge);
      const qr = ($o) => {
        ne(!$o[0].isIntersecting);
      }, Mi = new IntersectionObserver(qr, ft);
      return Mi.observe(we), () => {
        Wn.disconnect(), Mi.disconnect();
      };
    }
  }, [$, m, ie, p == null ? void 0 : p.length]), h.useEffect(() => {
    X(!0);
  }, []), h.useEffect(() => {
    De();
  }), h.useEffect(() => {
    Cr(Lg !== U);
  }, [Cr, U]), h.useImperativeHandle(u, () => ({
    updateIndicator: De,
    updateScrollButtons: Dn
  }), [De, Dn]);
  const [Ri, Ro] = Re("indicator", {
    className: z.indicator,
    elementType: WM,
    externalForwardedProps: Ie,
    ownerState: j,
    additionalProps: {
      style: U
    }
  }), pe = /* @__PURE__ */ f.jsx(Ri, {
    ...Ro
  }), Ge = Ix({
    activeItemId: fe ? void 0 : be,
    orientation: y,
    isRtl: i
  }), tn = Ge.getContainerProps(), ic = h.Children.toArray(p).filter(h.isValidElement).map((ee, Z) => {
    const ge = ee.props.value === void 0 ? Z : ee.props.value;
    return ue.set(ge, Z), {
      child: ee,
      index: Z,
      childValue: ge
    };
  }).map(({
    child: ee,
    childValue: Z
  }) => {
    const ge = Z === R;
    return /* @__PURE__ */ h.cloneElement(ee, {
      fullWidth: E === "fullWidth",
      indicator: ge && !F && pe,
      selected: ge,
      selectionFollowsFocus: S,
      onChange: C,
      textColor: k,
      value: Z
    });
  }), Pi = Ce(), [kr, rl] = Re("root", {
    ref: n,
    className: te(z.root, v),
    elementType: BM,
    externalForwardedProps: {
      ...Ie,
      ...N,
      component: d
    },
    ownerState: j
  }), [Po, Io] = Re("scroller", {
    ref: ve,
    className: z.scroller,
    elementType: FM,
    externalForwardedProps: Ie,
    ownerState: j,
    additionalProps: {
      style: {
        overflow: Y.overflow,
        [g ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: M ? void 0 : -Y.scrollbarWidth
      }
    }
  }), Mo = st(tn.ref, le), sc = (ee) => {
    const Z = le.current, ge = Xn(ct(Z));
    (ge == null ? void 0 : ge.getAttribute("role")) === "tab" && tn.onKeyDown(ee);
  }, [ol, Ii] = Re("list", {
    ref: Mo,
    className: z.list,
    elementType: DM,
    externalForwardedProps: Ie,
    ownerState: j,
    getSlotProps: (ee) => ({
      ...ee,
      onBlur: (Z) => {
        var ge;
        po(Z.currentTarget, Z.relatedTarget) || re(!1), (ge = ee.onBlur) == null || ge.call(ee, Z);
      },
      onKeyDown: (Z) => {
        var ge;
        sc(Z), (ge = ee.onKeyDown) == null || ge.call(ee, Z);
      },
      onFocus: (Z) => {
        var ge;
        re(!0), tn.onFocus(Z), (ge = ee.onFocus) == null || ge.call(ee, Z);
      }
    })
  });
  return /* @__PURE__ */ f.jsxs(kr, {
    ...rl,
    children: [Pi.scrollButtonStart, Pi.scrollbarSizeListener, /* @__PURE__ */ f.jsxs(Po, {
      ...Io,
      children: [/* @__PURE__ */ f.jsx(ol, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": y === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Ii,
        children: /* @__PURE__ */ f.jsx(Kp.Provider, {
          value: Ge,
          children: ic
        })
      }), F && pe]
    }), Pi.scrollButtonEnd]
  });
});
function VM(e) {
  return me("MuiTextField", e);
}
de("MuiTextField", ["root"]);
const KM = {
  standard: Vp,
  filled: Hp,
  outlined: Yp
}, YM = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, VM, t);
}, GM = K(aP, {
  name: "MuiTextField",
  slot: "Root"
})({}), Fo = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disabled: c = !1,
    error: p = !1,
    fullWidth: v = !1,
    helperText: d,
    id: x,
    inputRef: b,
    label: C,
    maxRows: y,
    minRows: m,
    multiline: S = !1,
    name: w,
    onBlur: T,
    onChange: k,
    onFocus: R,
    placeholder: E,
    required: M = !1,
    rows: N,
    select: $ = !1,
    slots: g = {},
    slotProps: O = {},
    type: I,
    value: P,
    variant: L = "outlined",
    ...A
  } = r, j = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: c,
    error: p,
    fullWidth: v,
    multiline: S,
    required: M,
    select: $,
    variant: L
  }, z = YM(j), B = xr(x), W = d && B ? `${B}-helper-text` : void 0, F = C && B ? `${B}-label` : void 0, X = KM[L], U = {
    slots: g,
    slotProps: O
  }, [q, G] = Re("select", {
    elementType: Ka,
    externalForwardedProps: U,
    ownerState: j
  }), Q = $ && G.native, D = {}, ne = U.slotProps.inputLabel;
  L === "outlined" && (ne && typeof ne.shrink < "u" && (D.notched = ne.shrink), D.label = C), $ && (Q || (D.id = void 0), D["aria-describedby"] = void 0);
  const [ie, Ee] = Re("root", {
    elementType: GM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...U,
      ...A
    },
    ownerState: j,
    className: te(z.root, l),
    ref: n,
    additionalProps: {
      disabled: c,
      error: p,
      fullWidth: v,
      required: M,
      color: a,
      variant: L
    }
  }), [be, fe] = Re("input", {
    elementType: X,
    externalForwardedProps: U,
    additionalProps: D,
    ownerState: j
  }), [re, Y] = Re("inputLabel", {
    elementType: TP,
    externalForwardedProps: U,
    ownerState: j
  }), [se, ue] = Re("htmlInput", {
    elementType: "input",
    externalForwardedProps: U,
    ownerState: j
  }), [ve, le] = Re("formHelperText", {
    elementType: dP,
    externalForwardedProps: U,
    ownerState: j
  }), Ie = /* @__PURE__ */ f.jsx(be, {
    "aria-describedby": W,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: v,
    multiline: S,
    name: w,
    rows: N,
    maxRows: y,
    minRows: m,
    type: I,
    value: P,
    id: B,
    inputRef: b,
    onBlur: T,
    onChange: k,
    onFocus: R,
    placeholder: E,
    inputProps: ue,
    slots: {
      input: g.htmlInput ? se : void 0
    },
    ...fe
  });
  return /* @__PURE__ */ f.jsxs(ie, {
    ...Ee,
    children: [C != null && C !== "" && /* @__PURE__ */ f.jsx(re, {
      htmlFor: $ && !Q ? void 0 : B,
      id: F,
      ...$ && !Q && {
        component: "div"
      },
      ...Y,
      children: C
    }), $ ? /* @__PURE__ */ f.jsx(q, {
      "aria-describedby": W,
      id: B,
      labelId: F,
      value: P,
      input: Ie,
      ...G,
      children: s
    }) : Ie, d && /* @__PURE__ */ f.jsx(ve, {
      id: W,
      ...le,
      children: d
    })]
  });
}), QM = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), Yc = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), zg = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), XM = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M8 5v14l11-7z"
})), qM = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M6 6h12v12H6z"
})), ZM = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
})), JM = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M15 21h-2v-2h2zm-2-7h-2v5h2zm8-2h-2v4h2zm-2-2h-2v2h2zM7 12H5v2h2zm-2-2H3v2h2zm7-5h2V3h-2zm-7.5-.5v3h3v-3zM9 9H3V3h6zm-4.5 7.5v3h3v-3zM9 21H3v-6h6zm7.5-16.5v3h3v-3zM21 9h-6V3h6zm-2 10v-3h-4v2h2v3h4v-2zm-2-7h-4v2h4zm-4-2H7v2h2v2h2v-2h2zm1-1V7h-2V5h-2v4zM6.75 5.25h-1.5v1.5h1.5zm0 12h-1.5v1.5h1.5zm12-12h-1.5v1.5h1.5z"
})), Gc = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
})), e5 = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), Qc = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), t5 = gt(/* @__PURE__ */ f.jsx("path", {
  d: "m20.2 5.9.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7m-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M8 18H6v-2h2zm3.5 0h-2v-2h2zm3.5 0h-2v-2h2z"
})), _g = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
})), n5 = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95M12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19"
})), r5 = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"
})), o5 = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
})), Bg = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5z"
})), i5 = gt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
})), xt = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', ur = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function Dt({ children: e, sx: t }) {
  return /* @__PURE__ */ f.jsx(
    Me,
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
function Gi({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ f.jsxs(Sr, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ f.jsxs(
      at,
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
          typeof e == "string" ? /* @__PURE__ */ f.jsx(Dt, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ f.jsx(Ne, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function Wl({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ f.jsxs(Ne, { sx: n, children: [
    /* @__PURE__ */ f.jsxs(at, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ f.jsx(
        Me,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ f.jsx(Me, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function Ft({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ f.jsxs(Ne, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ f.jsx(Dt, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ f.jsx(
      Me,
      {
        sx: {
          fontFamily: n ? xt : void 0,
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
function Fg({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ f.jsx(
    Ne,
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
function s5(e, t) {
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
function l5({ lines: e, running: t }) {
  const n = h.useRef(null), r = h.useRef(null), o = h.useRef(!0);
  return h.useEffect(() => {
    const i = r.current;
    if (!i) return;
    const s = () => {
      o.current = i.scrollHeight - i.scrollTop - i.clientHeight < 40;
    };
    return i.addEventListener("scroll", s), () => i.removeEventListener("scroll", s);
  }, []), h.useEffect(() => {
    var i;
    o.current && ((i = n.current) == null || i.scrollIntoView({ block: "end" }));
  }, [e]), !e.length && !t ? null : /* @__PURE__ */ f.jsxs(
    Sr,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: ur.bg,
        color: ur.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: xt,
        fontSize: 12,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ f.jsx(
          Ne,
          {
            sx: {
              color: i.stream === "stderr" ? ur.err : i.stream === "meta" ? ur.dim : ur.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ f.jsx(Ne, { sx: { color: ur.dim }, children: "▍running…" }),
        /* @__PURE__ */ f.jsx("div", { ref: n })
      ]
    }
  );
}
function a5(e) {
  const n = Array.from({ length: 33 }, () => Array(33).fill(!1));
  function r(s, l) {
    for (let a = 0; a < 7; a++)
      for (let u = 0; u < 7; u++)
        (a === 0 || a === 6 || u === 0 || u === 6 || a >= 2 && a <= 4 && u >= 2 && u <= 4) && (n[s + a][l + u] = !0);
  }
  r(0, 0), r(0, 26), r(26, 0);
  for (let s = 8; s < 25; s++)
    n[6][s] = s % 2 === 0, n[s][6] = s % 2 === 0;
  const o = new TextEncoder().encode(e);
  let i = 0;
  for (let s = 32; s > 0; s -= 2) {
    s === 6 && s--;
    for (let l = 0; l < 33; l++)
      for (let a = 0; a < 2; a++) {
        const u = s - a;
        if (l < 9 && (u < 9 || u >= 25) || l >= 25 && u < 9 || l === 6 || u === 6)
          continue;
        const p = ((o[i % o.length] ?? 0) >> i % 8 & 1) === 1;
        n[l][u] = p, i++;
      }
  }
  return n;
}
function Dg({
  text: e,
  size: t = 220
}) {
  const n = h.useRef(null);
  return h.useEffect(() => {
    const r = n.current;
    if (!r) return;
    const o = r.getContext("2d");
    if (!o) return;
    const i = a5(e), s = i.length, l = t / (s + 4), a = l * 2;
    o.fillStyle = "#ffffff", o.fillRect(0, 0, t, t), o.fillStyle = "#000000";
    for (let u = 0; u < s; u++)
      for (let c = 0; c < s; c++)
        i[u][c] && o.fillRect(
          Math.round(a + c * l),
          Math.round(a + u * l),
          Math.ceil(l),
          Math.ceil(l)
        );
  }, [e, t]), /* @__PURE__ */ f.jsx(
    Ne,
    {
      sx: {
        p: 1.5,
        bgcolor: "#ffffff",
        borderRadius: "8px",
        display: "inline-block",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      },
      children: /* @__PURE__ */ f.jsx("canvas", { ref: n, width: t, height: t, style: { display: "block" } })
    }
  );
}
function Ul(e) {
  if (!e || e === 0) return "0 B";
  const t = 1024, n = ["B", "KB", "MB", "GB", "TB"], r = Math.floor(Math.log(e) / Math.log(t));
  return `${parseFloat((e / Math.pow(t, r)).toFixed(2))} ${n[r]}`;
}
function u5(e) {
  if (!e || e === 0) return "Never";
  const n = Math.floor(Date.now() / 1e3) - e;
  return n < 60 ? `${n}s ago` : n < 3600 ? `${Math.floor(n / 60)}m ago` : n < 86400 ? `${Math.floor(n / 3600)}h ago` : `${Math.floor(n / 86400)}d ago`;
}
const Hl = { p: 2, "&:last-child": { pb: 2 } }, Vl = 2.25;
function c5({ ctx: e }) {
  const t = h.useMemo(() => Qu(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ f.jsx(R2, { theme: t, children: /* @__PURE__ */ f.jsx(d5, { ctx: e }) });
}
function d5({ ctx: e }) {
  const [t, n] = h.useState(0), [r, o] = h.useState(null), [i, s] = h.useState(null), [l, a] = h.useState(null), [u, c] = h.useState([]), [p, v] = h.useState([]), [d, x] = h.useState(!1), [b, C] = h.useState(null), [y, m] = h.useState(!1), [S, w] = h.useState(""), [T, k] = h.useState([]), [R, E] = h.useState(!1), [M, N] = h.useState({
    name: "",
    ip: "",
    allowed_ips: "0.0.0.0/0, ::/0",
    dns: "1.1.1.1, 8.8.8.8",
    preshared_key: ""
  }), [$, g] = h.useState("cloudflare"), [O, I] = h.useState("all"), [P, L] = h.useState(null), [A, j] = h.useState(null), [z, B] = h.useState(""), [W, F] = h.useState(null), X = h.useRef(null);
  h.useEffect(() => () => {
    var Y;
    return (Y = X.current) == null ? void 0 : Y.abort();
  }, []);
  const U = h.useCallback(
    async (Y, se) => {
      const ue = await e.api(Y, se), ve = await ue.json().catch(() => ({}));
      if (!ue.ok) throw new Error(ve.message ?? `HTTP ${ue.status}`);
      return ve;
    },
    [e]
  ), q = h.useCallback(async () => {
    x(!0);
    try {
      const [Y, se, ue, ve, le] = await Promise.all([
        U("/server/status").catch(() => null),
        U("/server/config").catch(() => null),
        U("/peers").catch(() => ({ peers: [] })),
        U("/server/logs").catch(() => ({ logs: [] })),
        U("/meta").catch(() => null)
      ]);
      Y && o(Y), se && s(se), le && a(le), c((ue == null ? void 0 : ue.peers) ?? []), v((ve == null ? void 0 : ve.logs) ?? []);
    } catch (Y) {
      C(Y.message || "Failed to load WireGuard data");
    } finally {
      x(!1);
    }
  }, [U]);
  h.useEffect(() => {
    q();
    const Y = setInterval(q, 15e3);
    return () => clearInterval(Y);
  }, [q]);
  async function G(Y, se, ue, ve) {
    w(Y), k([]), E(!0), m(!0);
    const le = new AbortController();
    X.current = le;
    try {
      for await (const Ie of e.run(se, { method: ue, body: ve, signal: le.signal }))
        k((Ue) => s5(Ue, Ie));
      q();
    } catch (Ie) {
      le.signal.aborted || k((Ue) => [...Ue, { stream: "stderr", text: String(Ie) }]);
    } finally {
      E(!1);
    }
  }
  const Q = () => G("Starting WireGuard Server", "/server/start", "POST"), D = () => G("Stopping WireGuard Server", "/server/stop", "POST"), ne = () => G("Restarting WireGuard Server", "/server/restart", "POST"), ie = async () => {
    var Y;
    if (!M.name.trim()) {
      C("Peer name is required");
      return;
    }
    x(!0);
    try {
      const se = {
        name: M.name.trim(),
        ip: ((Y = M.ip) == null ? void 0 : Y.trim()) || void 0,
        allowed_ips: M.allowed_ips || "0.0.0.0/0, ::/0",
        dns: M.dns || "1.1.1.1, 8.8.8.8",
        preshared_key: M.preshared_key ? M.preshared_key : void 0
      }, ue = await U("/peers/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(se)
      });
      ue != null && ue.peer && (L(ue.peer), n(0), N({
        name: "",
        ip: "",
        allowed_ips: "0.0.0.0/0, ::/0",
        dns: "1.1.1.1, 8.8.8.8",
        preshared_key: ""
      }), q());
    } catch (se) {
      C(se.message || "Failed to create client peer");
    } finally {
      x(!1);
    }
  }, Ee = async (Y) => {
    F(null), await G(`Deleting Peer ${Y.name}`, `/peers/${encodeURIComponent(Y.id)}`, "DELETE");
  }, be = async (Y) => {
    j(Y);
    try {
      const se = await U(`/peers/${encodeURIComponent(Y.id)}/config`);
      B((se == null ? void 0 : se.config) || "");
    } catch {
      B("# Error loading peer configuration");
    }
  }, fe = (Y, se) => {
    const ue = new Blob([se], { type: "text/plain;charset=utf-8" }), ve = URL.createObjectURL(ue), le = document.createElement("a");
    le.href = ve, le.download = `${Y}.conf`, le.click(), URL.revokeObjectURL(ve);
  }, re = (r == null ? void 0 : r.status) === "running";
  return /* @__PURE__ */ f.jsxs(Ne, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ f.jsxs(
      at,
      {
        direction: { xs: "column", sm: "row" },
        sx: {
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ f.jsxs(at, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ f.jsx(QM, { sx: { fontSize: 32, color: "primary.main" } }),
            /* @__PURE__ */ f.jsxs(Ne, { children: [
              /* @__PURE__ */ f.jsx(Me, { variant: "h5", sx: { fontWeight: 700, lineHeight: 1.2 }, children: "WireGuard VPN" }),
              /* @__PURE__ */ f.jsx(Me, { variant: "body2", sx: { color: "text.secondary" }, children: "High-performance kernel VPN tunnels & client access" })
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs(at, { direction: "row", spacing: 1.5, sx: { alignItems: "center", flexWrap: "wrap" }, children: [
            /* @__PURE__ */ f.jsx(
              Vi,
              {
                size: "small",
                label: re ? "RUNNING" : "STOPPED",
                color: re ? "success" : "default",
                sx: { fontWeight: 700, letterSpacing: "0.05em" }
              }
            ),
            /* @__PURE__ */ f.jsx(
              Vi,
              {
                size: "small",
                label: `PORT ${(i == null ? void 0 : i.listen_port) ?? (r == null ? void 0 : r.listen_port) ?? "—"}/UDP`,
                variant: "outlined",
                sx: { fontFamily: xt, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ f.jsx(
              Vi,
              {
                size: "small",
                label: (r == null ? void 0 : r.endpoint) || "127.0.0.1",
                variant: "outlined",
                sx: { fontFamily: xt, fontSize: "0.75rem" }
              }
            )
          ] }),
          /* @__PURE__ */ f.jsxs(at, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ f.jsx(no, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              Er,
              {
                size: "small",
                onClick: q,
                disabled: d,
                sx: { border: "1px solid", borderColor: "divider" },
                children: d ? /* @__PURE__ */ f.jsx(ds, { size: 16, color: "inherit" }) : /* @__PURE__ */ f.jsx(zg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            re ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(no, { title: "Restart WireGuard Server", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
                Er,
                {
                  size: "small",
                  color: "warning",
                  onClick: ne,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ f.jsx(ZM, { sx: { fontSize: 18 } })
                }
              ) }) }),
              /* @__PURE__ */ f.jsx(no, { title: "Stop WireGuard Server", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
                Er,
                {
                  size: "small",
                  color: "error",
                  onClick: D,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ f.jsx(qM, { sx: { fontSize: 18 } })
                }
              ) }) })
            ] }) : /* @__PURE__ */ f.jsx(no, { title: "Start WireGuard Server", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              Er,
              {
                size: "small",
                color: "success",
                onClick: Q,
                sx: { border: "1px solid", borderColor: "success.main", bgcolor: (Y) => Ds(Y.palette.success.main, 0.1) },
                children: /* @__PURE__ */ f.jsx(XM, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(
              nn,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ f.jsx(Yc, {}),
                onClick: () => n(1),
                sx: { ml: 1, whiteSpace: "nowrap" },
                children: "Add Client Peer"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(Ne, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: 2 }, children: [
      /* @__PURE__ */ f.jsx(Il, { variant: "outlined", children: /* @__PURE__ */ f.jsx(Ml, { sx: Hl, children: /* @__PURE__ */ f.jsxs(at, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ f.jsxs(Ne, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ f.jsx(Dt, { children: "VPN Server Status" }),
          /* @__PURE__ */ f.jsxs(at, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
            /* @__PURE__ */ f.jsx(Fg, { ok: re, size: 10 }),
            /* @__PURE__ */ f.jsx(Me, { variant: "h6", sx: { fontWeight: 700 }, children: re ? `Active (${(i == null ? void 0 : i.interface) || "wg0"})` : "Inactive" })
          ] }),
          /* @__PURE__ */ f.jsxs(Me, { variant: "caption", sx: { color: "text.disabled", fontFamily: xt }, children: [
            "Port: ",
            (i == null ? void 0 : i.listen_port) ?? (r == null ? void 0 : r.listen_port) ?? "—",
            " • UDP"
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(Bg, { sx: { color: re ? "success.main" : "text.disabled" } })
      ] }) }) }),
      /* @__PURE__ */ f.jsx(Il, { variant: "outlined", children: /* @__PURE__ */ f.jsx(Ml, { sx: Hl, children: /* @__PURE__ */ f.jsxs(at, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ f.jsxs(Ne, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ f.jsx(Dt, { children: "Connected Peers" }),
          /* @__PURE__ */ f.jsxs(Me, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
            (r == null ? void 0 : r.active_peers_count) ?? 0,
            " ",
            /* @__PURE__ */ f.jsxs(Me, { component: "span", variant: "body2", sx: { color: "text.secondary" }, children: [
              "/ ",
              u.length,
              " Total"
            ] })
          ] }),
          /* @__PURE__ */ f.jsx(Me, { variant: "caption", sx: { color: "text.disabled" }, children: "Active handshakes < 3m" })
        ] }),
        /* @__PURE__ */ f.jsx(_g, { sx: { color: "primary.main" } })
      ] }) }) }),
      /* @__PURE__ */ f.jsx(Il, { variant: "outlined", children: /* @__PURE__ */ f.jsx(Ml, { sx: Hl, children: /* @__PURE__ */ f.jsxs(at, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ f.jsxs(Ne, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ f.jsx(Dt, { children: "Total Bandwidth" }),
          /* @__PURE__ */ f.jsxs(Me, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, fontFamily: xt }, children: [
            "↓ ",
            Ul((r == null ? void 0 : r.total_rx_bytes) ?? 0)
          ] }),
          /* @__PURE__ */ f.jsxs(Me, { variant: "caption", sx: { color: "text.secondary", fontFamily: xt }, children: [
            "↑ ",
            Ul((r == null ? void 0 : r.total_tx_bytes) ?? 0)
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(n5, { sx: { color: "info.main" } })
      ] }) }) }),
      /* @__PURE__ */ f.jsx(Il, { variant: "outlined", children: /* @__PURE__ */ f.jsx(Ml, { sx: Hl, children: /* @__PURE__ */ f.jsxs(at, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ f.jsxs(Ne, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ f.jsx(Dt, { children: "VPN Subnet" }),
          /* @__PURE__ */ f.jsx(Me, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, fontFamily: xt }, children: (i == null ? void 0 : i.subnet) || (r == null ? void 0 : r.subnet) || "—" }),
          /* @__PURE__ */ f.jsxs(Me, { variant: "caption", sx: { color: "text.disabled", fontFamily: xt }, children: [
            "Gateway: ",
            (i == null ? void 0 : i.address) || (r == null ? void 0 : r.address) || "—"
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(t5, { sx: { color: "warning.main" } })
      ] }) }) })
    ] }),
    /* @__PURE__ */ f.jsxs(Sr, { sx: { overflow: "hidden" }, children: [
      /* @__PURE__ */ f.jsxs(
        HM,
        {
          value: t,
          onChange: (Y, se) => n(se),
          variant: "scrollable",
          scrollButtons: "auto",
          sx: {
            borderBottom: "1px solid",
            borderColor: "divider",
            px: 1
          },
          children: [
            /* @__PURE__ */ f.jsx(Yi, { icon: /* @__PURE__ */ f.jsx(_g, { sx: { fontSize: 18 } }), iconPosition: "start", label: "VPN Client Peers" }),
            /* @__PURE__ */ f.jsx(Yi, { icon: /* @__PURE__ */ f.jsx(Yc, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Add Client Peer" }),
            /* @__PURE__ */ f.jsx(Yi, { icon: /* @__PURE__ */ f.jsx(o5, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Server Configuration" }),
            /* @__PURE__ */ f.jsx(Yi, { icon: /* @__PURE__ */ f.jsx(r5, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Live Traffic Logs" }),
            /* @__PURE__ */ f.jsx(Yi, { icon: /* @__PURE__ */ f.jsx(Bg, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Service & Isolation" })
          ]
        }
      ),
      t === 0 && /* @__PURE__ */ f.jsx(Ne, { children: /* @__PURE__ */ f.jsx(yM, { children: /* @__PURE__ */ f.jsxs(oM, { size: "medium", children: [
        /* @__PURE__ */ f.jsx(wM, { children: /* @__PURE__ */ f.jsxs(Vc, { sx: { bgcolor: "action.hover" }, children: [
          /* @__PURE__ */ f.jsx(Bt, { sx: { width: 40 } }),
          /* @__PURE__ */ f.jsx(Bt, { children: /* @__PURE__ */ f.jsx(Dt, { children: "Peer Name" }) }),
          /* @__PURE__ */ f.jsx(Bt, { children: /* @__PURE__ */ f.jsx(Dt, { children: "Assigned IP" }) }),
          /* @__PURE__ */ f.jsx(Bt, { children: /* @__PURE__ */ f.jsx(Dt, { children: "Public Key" }) }),
          /* @__PURE__ */ f.jsx(Bt, { children: /* @__PURE__ */ f.jsx(Dt, { children: "Last Handshake" }) }),
          /* @__PURE__ */ f.jsx(Bt, { children: /* @__PURE__ */ f.jsx(Dt, { children: "Transfer (Rx / Tx)" }) }),
          /* @__PURE__ */ f.jsx(Bt, { align: "right", children: /* @__PURE__ */ f.jsx(Dt, { children: "Actions" }) })
        ] }) }),
        /* @__PURE__ */ f.jsx(uM, { children: u.length === 0 ? /* @__PURE__ */ f.jsx(Vc, { children: /* @__PURE__ */ f.jsxs(Bt, { colSpan: 7, align: "center", sx: { py: 5 }, children: [
          /* @__PURE__ */ f.jsx(Me, { variant: "body2", sx: { color: "text.secondary", mb: 1.5 }, children: "No VPN client peers configured yet." }),
          /* @__PURE__ */ f.jsx(
            nn,
            {
              variant: "outlined",
              size: "small",
              startIcon: /* @__PURE__ */ f.jsx(Yc, {}),
              onClick: () => n(1),
              children: "Create First Peer"
            }
          )
        ] }) }) : u.map((Y) => {
          const se = Y.last_handshake > 0 && Math.floor(Date.now() / 1e3) - Y.last_handshake < 180;
          return /* @__PURE__ */ f.jsxs(Vc, { hover: !0, children: [
            /* @__PURE__ */ f.jsx(Bt, { children: /* @__PURE__ */ f.jsx(Fg, { ok: se, size: 8 }) }),
            /* @__PURE__ */ f.jsxs(Bt, { children: [
              /* @__PURE__ */ f.jsx(Me, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: Y.name }),
              /* @__PURE__ */ f.jsxs(Me, { variant: "caption", sx: { color: "text.disabled", fontFamily: xt }, children: [
                "id: ",
                Y.id
              ] })
            ] }),
            /* @__PURE__ */ f.jsx(Bt, { children: /* @__PURE__ */ f.jsx(
              Vi,
              {
                size: "small",
                label: Y.ip,
                sx: { fontFamily: xt, fontSize: "0.75rem" }
              }
            ) }),
            /* @__PURE__ */ f.jsx(Bt, { children: /* @__PURE__ */ f.jsx(
              Me,
              {
                sx: {
                  fontFamily: xt,
                  fontSize: "0.75rem",
                  color: "text.secondary",
                  maxWidth: 160,
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: Y.public_key
              }
            ) }),
            /* @__PURE__ */ f.jsx(Bt, { children: /* @__PURE__ */ f.jsx(Me, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: u5(Y.last_handshake) }) }),
            /* @__PURE__ */ f.jsx(Bt, { children: /* @__PURE__ */ f.jsxs(Me, { sx: { fontFamily: xt, fontSize: "0.75rem" }, children: [
              "↓ ",
              Ul(Y.rx_bytes),
              " / ↑ ",
              Ul(Y.tx_bytes)
            ] }) }),
            /* @__PURE__ */ f.jsx(Bt, { align: "right", children: /* @__PURE__ */ f.jsxs(at, { direction: "row", spacing: 1, sx: { justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ f.jsx(no, { title: "View QR Code & Config", children: /* @__PURE__ */ f.jsx(
                Er,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => be(Y),
                  children: /* @__PURE__ */ f.jsx(JM, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ f.jsx(no, { title: "Download .conf file", children: /* @__PURE__ */ f.jsx(
                Er,
                {
                  size: "small",
                  onClick: async () => {
                    const ue = await U(
                      `/peers/${encodeURIComponent(Y.id)}/config`
                    );
                    ue != null && ue.config && fe(Y.name, ue.config);
                  },
                  children: /* @__PURE__ */ f.jsx(Gc, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ f.jsx(no, { title: "Delete Peer", children: /* @__PURE__ */ f.jsx(
                Er,
                {
                  size: "small",
                  color: "error",
                  onClick: () => F(Y),
                  children: /* @__PURE__ */ f.jsx(e5, { fontSize: "small" })
                }
              ) })
            ] }) })
          ] }, Y.id);
        }) })
      ] }) }) }),
      t === 1 && /* @__PURE__ */ f.jsxs(Ne, { sx: { p: Vl, maxWidth: 640 }, children: [
        /* @__PURE__ */ f.jsx(Me, { variant: "h6", sx: { fontWeight: 600, mb: 0.5 }, children: "Create New VPN Client Profile" }),
        /* @__PURE__ */ f.jsx(Me, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: "Generates cryptographic Curve25519 keypair, allocates next IP, and renders client QR code." }),
        /* @__PURE__ */ f.jsxs(at, { spacing: 2.5, children: [
          /* @__PURE__ */ f.jsx(Wl, { label: "Peer / Device Name", hint: "Alphanumeric (e.g. phone, macbook, router)", children: /* @__PURE__ */ f.jsx(
            Fo,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "e.g. alice-iphone",
              value: M.name,
              onChange: (Y) => N({ ...M, name: Y.target.value })
            }
          ) }),
          /* @__PURE__ */ f.jsx(Wl, { label: "Assigned Client IP", hint: "Leave empty to auto-allocate next available 10.8.0.x", children: /* @__PURE__ */ f.jsx(
            Fo,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "Auto-allocated (e.g. 10.8.0.2)",
              value: M.ip,
              onChange: (Y) => N({ ...M, ip: Y.target.value })
            }
          ) }),
          /* @__PURE__ */ f.jsx(Wl, { label: "Traffic Routing (Allowed IPs)", hint: "What traffic this client routes through VPN", children: /* @__PURE__ */ f.jsxs(
            Ka,
            {
              fullWidth: !0,
              size: "small",
              value: O,
              onChange: (Y) => {
                const se = Y.target.value;
                I(se), se === "all" ? N({ ...M, allowed_ips: "0.0.0.0/0, ::/0" }) : se === "subnet" && N({ ...M, allowed_ips: "10.8.0.0/24" });
              },
              children: [
                /* @__PURE__ */ f.jsx(Bo, { value: "all", children: "Full Tunnel (All Traffic: 0.0.0.0/0, ::/0)" }),
                /* @__PURE__ */ f.jsx(Bo, { value: "subnet", children: "Split Tunnel (VPN Subnet Only: 10.8.0.0/24)" }),
                /* @__PURE__ */ f.jsx(Bo, { value: "custom", children: "Custom Allowed IPs" })
              ]
            }
          ) }),
          O === "custom" && /* @__PURE__ */ f.jsx(
            Fo,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "0.0.0.0/0, ::/0",
              value: M.allowed_ips,
              onChange: (Y) => N({ ...M, allowed_ips: Y.target.value })
            }
          ),
          /* @__PURE__ */ f.jsx(Wl, { label: "DNS Resolver Preset", children: /* @__PURE__ */ f.jsxs(
            Ka,
            {
              fullWidth: !0,
              size: "small",
              value: $,
              onChange: (Y) => {
                const se = Y.target.value;
                g(se), se === "cloudflare" ? N({ ...M, dns: "1.1.1.1, 1.0.0.1" }) : se === "google" && N({ ...M, dns: "8.8.8.8, 8.8.4.4" });
              },
              children: [
                /* @__PURE__ */ f.jsx(Bo, { value: "cloudflare", children: "Cloudflare DNS (1.1.1.1, 1.0.0.1)" }),
                /* @__PURE__ */ f.jsx(Bo, { value: "google", children: "Google DNS (8.8.8.8, 8.8.4.4)" }),
                /* @__PURE__ */ f.jsx(Bo, { value: "custom", children: "Custom DNS" })
              ]
            }
          ) }),
          $ === "custom" && /* @__PURE__ */ f.jsx(
            Fo,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "1.1.1.1, 8.8.8.8",
              value: M.dns,
              onChange: (Y) => N({ ...M, dns: Y.target.value })
            }
          ),
          /* @__PURE__ */ f.jsx(at, { direction: "row", spacing: 2, sx: { pt: 1 }, children: /* @__PURE__ */ f.jsx(
            nn,
            {
              variant: "contained",
              color: "primary",
              onClick: ie,
              disabled: d || !M.name.trim(),
              startIcon: d ? /* @__PURE__ */ f.jsx(ds, { size: 16 }) : /* @__PURE__ */ f.jsx(i5, {}),
              sx: { fontWeight: 700 },
              children: "Generate Peer Profile & QR Code"
            }
          ) })
        ] })
      ] }),
      t === 2 && /* @__PURE__ */ f.jsxs(Ne, { sx: { p: Vl }, children: [
        /* @__PURE__ */ f.jsx(Me, { variant: "h6", sx: { fontWeight: 600, mb: 2 }, children: "WireGuard Server Parameters" }),
        /* @__PURE__ */ f.jsxs(Ne, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }, children: [
          /* @__PURE__ */ f.jsx(Ne, { children: /* @__PURE__ */ f.jsx(Gi, { label: "Interface & Port", children: /* @__PURE__ */ f.jsxs(at, { spacing: 2, children: [
            /* @__PURE__ */ f.jsx(Ft, { label: "Interface Device", value: (i == null ? void 0 : i.interface) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ft, { label: "Listen Port (UDP)", value: (i == null ? void 0 : i.listen_port) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ft, { label: "Interface IP Address", value: (i == null ? void 0 : i.address) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ft, { label: "Tunnel MTU", value: (i == null ? void 0 : i.mtu) ?? "—" })
          ] }) }) }),
          /* @__PURE__ */ f.jsx(Ne, { children: /* @__PURE__ */ f.jsx(Gi, { label: "Network & Public Keys", children: /* @__PURE__ */ f.jsxs(at, { spacing: 2, children: [
            /* @__PURE__ */ f.jsx(Ft, { label: "Public Endpoint", value: (i == null ? void 0 : i.endpoint) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ft, { label: "VPN Subnet", value: (i == null ? void 0 : i.subnet) ?? "—" }),
            /* @__PURE__ */ f.jsxs(Ne, { children: [
              /* @__PURE__ */ f.jsx(Dt, { children: "Server Public Key" }),
              /* @__PURE__ */ f.jsxs(at, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
                /* @__PURE__ */ f.jsx(
                  Me,
                  {
                    sx: {
                      fontFamily: xt,
                      fontSize: "0.75rem",
                      bgcolor: "action.hover",
                      p: 1,
                      borderRadius: 1,
                      flex: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    },
                    children: (i == null ? void 0 : i.public_key) || "Loading..."
                  }
                ),
                /* @__PURE__ */ f.jsx(
                  Er,
                  {
                    size: "small",
                    onClick: () => {
                      i != null && i.public_key && (navigator.clipboard.writeText(i.public_key), C("Server public key copied to clipboard"));
                    },
                    children: /* @__PURE__ */ f.jsx(Qc, { fontSize: "small" })
                  }
                )
              ] })
            ] })
          ] }) }) }),
          /* @__PURE__ */ f.jsx(Ne, { sx: { gridColumn: { xs: "span 1", sm: "span 2" } }, children: /* @__PURE__ */ f.jsxs(Gi, { label: "Configuration File on Disk", children: [
            /* @__PURE__ */ f.jsx(Me, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "All WireGuard settings and keys live exclusively under HostPanel root:" }),
            /* @__PURE__ */ f.jsx(
              Me,
              {
                sx: {
                  fontFamily: xt,
                  fontSize: "0.8125rem",
                  bgcolor: "action.hover",
                  p: 1.5,
                  borderRadius: 1
                },
                children: (i == null ? void 0 : i.config_path) ?? "—"
              }
            )
          ] }) })
        ] })
      ] }),
      t === 3 && /* @__PURE__ */ f.jsxs(Ne, { sx: { p: Vl }, children: [
        /* @__PURE__ */ f.jsxs(at, { direction: "row", sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
          /* @__PURE__ */ f.jsx(Me, { variant: "h6", sx: { fontWeight: 600 }, children: "WireGuard Tunnel & Handshake Logs" }),
          /* @__PURE__ */ f.jsx(nn, { size: "small", variant: "outlined", startIcon: /* @__PURE__ */ f.jsx(zg, {}), onClick: q, children: "Refresh Logs" })
        ] }),
        /* @__PURE__ */ f.jsx(
          Sr,
          {
            sx: {
              bgcolor: ur.bg,
              p: 2,
              maxHeight: "26rem",
              overflowY: "auto",
              fontFamily: xt,
              fontSize: 12,
              lineHeight: 1.6,
              color: ur.fg
            },
            children: p.length === 0 ? /* @__PURE__ */ f.jsx(Me, { sx: { color: ur.dim, fontFamily: xt }, children: "No recent kernel or handshake events recorded." }) : p.map((Y, se) => /* @__PURE__ */ f.jsx(Ne, { sx: { whiteSpace: "pre-wrap", wordBreak: "break-word" }, children: Y }, se))
          }
        )
      ] }),
      t === 4 && /* @__PURE__ */ f.jsxs(Ne, { sx: { p: Vl }, children: [
        /* @__PURE__ */ f.jsx(Me, { variant: "h6", sx: { fontWeight: 600, mb: 1 }, children: "Strict 100% Isolation Architecture" }),
        /* @__PURE__ */ f.jsxs(Me, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
          "HostPanel v3 enforces full isolation under ",
          /* @__PURE__ */ f.jsx("code", { children: "/opt/hostpanel" }),
          ". No configuration or socket is scattered across system ",
          /* @__PURE__ */ f.jsx("code", { children: "/etc/wireguard" }),
          "."
        ] }),
        /* @__PURE__ */ f.jsxs(Ne, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }, children: [
          /* @__PURE__ */ f.jsx(Ne, { children: /* @__PURE__ */ f.jsx(Gi, { label: "Daemon & Sandbox Specs", children: /* @__PURE__ */ f.jsxs(at, { spacing: 2, children: [
            /* @__PURE__ */ f.jsx(Ft, { label: "Systemd Unit", value: (l == null ? void 0 : l.unit) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ft, { label: "Run As User", value: (l == null ? void 0 : l.run_as) ?? "—" }),
            /* @__PURE__ */ f.jsx(
              Ft,
              {
                label: "Loopback Port",
                value: l != null && l.port ? `${l.port} (${l.host})` : "—"
              }
            ),
            /* @__PURE__ */ f.jsx(Ft, { label: "Root Ops Helper", value: (l == null ? void 0 : l.ops_script) ?? "—" })
          ] }) }) }),
          /* @__PURE__ */ f.jsx(Ne, { children: /* @__PURE__ */ f.jsx(Gi, { label: "Isolated Path Sandboxes", children: /* @__PURE__ */ f.jsxs(at, { spacing: 2, children: [
            /* @__PURE__ */ f.jsx(Ft, { label: "Config Directory", value: (i == null ? void 0 : i.isolation_path) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ft, { label: "Runtime / Sockets", value: (i == null ? void 0 : i.run_path) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ft, { label: "Audit & Traffic Logs", value: (i == null ? void 0 : i.logs_path) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ft, { label: "Client Profiles Dir", value: (i == null ? void 0 : i.peers_path) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ft, { label: "Engine Runtime", value: (i == null ? void 0 : i.runtime_path) ?? "—" })
          ] }) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(
      jl,
      {
        open: !!P,
        onClose: () => L(null),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsxs(Nl, { sx: { fontWeight: 700 }, children: [
            "Client Peer Created: ",
            P == null ? void 0 : P.name
          ] }),
          /* @__PURE__ */ f.jsx(Al, { dividers: !0, children: /* @__PURE__ */ f.jsxs(at, { spacing: 2.5, sx: { alignItems: "center", py: 1 }, children: [
            /* @__PURE__ */ f.jsxs(Me, { variant: "body2", sx: { color: "text.secondary", textAlign: "center" }, children: [
              "Scan this QR code with the WireGuard mobile app (iOS / Android) or download the ",
              /* @__PURE__ */ f.jsx("code", { children: ".conf" }),
              " file for desktop."
            ] }),
            (P == null ? void 0 : P.config) && /* @__PURE__ */ f.jsx(Dg, { text: P.config, size: 220 }),
            /* @__PURE__ */ f.jsx(
              Vi,
              {
                label: `Assigned IP: ${(P == null ? void 0 : P.ip) || "10.8.0.x"}`,
                color: "primary",
                sx: { fontWeight: 700, fontFamily: xt }
              }
            ),
            /* @__PURE__ */ f.jsxs(Ne, { sx: { width: "100%" }, children: [
              /* @__PURE__ */ f.jsx(Dt, { sx: { mb: 0.5 }, children: "Client Configuration File" }),
              /* @__PURE__ */ f.jsx(
                Fo,
                {
                  fullWidth: !0,
                  multiline: !0,
                  rows: 6,
                  value: (P == null ? void 0 : P.config) || "",
                  slotProps: {
                    input: {
                      readOnly: !0,
                      sx: { fontFamily: xt, fontSize: "0.75rem" }
                    }
                  }
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ f.jsxs(Ol, { sx: { p: 2 }, children: [
            /* @__PURE__ */ f.jsx(
              nn,
              {
                startIcon: /* @__PURE__ */ f.jsx(Qc, {}),
                onClick: () => {
                  P != null && P.config && (navigator.clipboard.writeText(P.config), C("Configuration copied to clipboard"));
                },
                children: "Copy Text"
              }
            ),
            /* @__PURE__ */ f.jsx(
              nn,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ f.jsx(Gc, {}),
                onClick: () => {
                  P != null && P.name && (P != null && P.config) && fe(P.name, P.config);
                },
                sx: { fontWeight: 700 },
                children: "Download .conf"
              }
            ),
            /* @__PURE__ */ f.jsx(nn, { onClick: () => L(null), children: "Done" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      jl,
      {
        open: !!A,
        onClose: () => {
          j(null), B("");
        },
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsxs(Nl, { sx: { fontWeight: 700 }, children: [
            "WireGuard Profile: ",
            A == null ? void 0 : A.name,
            " (",
            A == null ? void 0 : A.ip,
            ")"
          ] }),
          /* @__PURE__ */ f.jsx(Al, { dividers: !0, children: /* @__PURE__ */ f.jsxs(at, { spacing: 2, sx: { alignItems: "center", py: 1 }, children: [
            z ? /* @__PURE__ */ f.jsx(Dg, { text: z, size: 220 }) : /* @__PURE__ */ f.jsx(ds, { size: 32 }),
            /* @__PURE__ */ f.jsxs(Ne, { sx: { width: "100%" }, children: [
              /* @__PURE__ */ f.jsx(Dt, { sx: { mb: 0.5 }, children: "Client Configuration (.conf)" }),
              /* @__PURE__ */ f.jsx(
                Fo,
                {
                  fullWidth: !0,
                  multiline: !0,
                  rows: 6,
                  value: z,
                  slotProps: {
                    input: {
                      readOnly: !0,
                      sx: { fontFamily: xt, fontSize: "0.75rem" }
                    }
                  }
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ f.jsxs(Ol, { sx: { p: 2 }, children: [
            /* @__PURE__ */ f.jsx(
              nn,
              {
                startIcon: /* @__PURE__ */ f.jsx(Qc, {}),
                onClick: () => {
                  z && (navigator.clipboard.writeText(z), C("Configuration copied to clipboard"));
                },
                children: "Copy"
              }
            ),
            /* @__PURE__ */ f.jsx(
              nn,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ f.jsx(Gc, {}),
                onClick: () => {
                  A != null && A.name && z && fe(A.name, z);
                },
                sx: { fontWeight: 700 },
                children: "Download .conf"
              }
            ),
            /* @__PURE__ */ f.jsx(
              nn,
              {
                onClick: () => {
                  j(null), B("");
                },
                children: "Close"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      jl,
      {
        open: !!W,
        onClose: () => F(null),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsx(Nl, { sx: { fontWeight: 700 }, children: "Delete Client Peer" }),
          /* @__PURE__ */ f.jsx(Al, { children: /* @__PURE__ */ f.jsxs(Me, { variant: "body2", sx: { color: "text.secondary" }, children: [
            "Are you sure you want to revoke and delete peer",
            " ",
            /* @__PURE__ */ f.jsx("strong", { children: W == null ? void 0 : W.name }),
            " (",
            W == null ? void 0 : W.ip,
            ")? This immediately severs VPN connectivity for this client."
          ] }) }),
          /* @__PURE__ */ f.jsxs(Ol, { sx: { p: 2 }, children: [
            /* @__PURE__ */ f.jsx(nn, { onClick: () => F(null), children: "Cancel" }),
            /* @__PURE__ */ f.jsx(
              nn,
              {
                variant: "contained",
                color: "error",
                onClick: () => W && Ee(W),
                children: "Revoke & Delete"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      jl,
      {
        open: y,
        onClose: () => !R && m(!1),
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsx(Nl, { sx: { fontWeight: 700 }, children: S }),
          /* @__PURE__ */ f.jsx(Al, { dividers: !0, children: /* @__PURE__ */ f.jsx(l5, { lines: T, running: R }) }),
          /* @__PURE__ */ f.jsx(Ol, { sx: { p: 2 }, children: /* @__PURE__ */ f.jsx(nn, { disabled: R, onClick: () => m(!1), children: "Close" }) })
        ]
      }
    ),
    /* @__PURE__ */ f.jsx(
      VI,
      {
        open: !!b,
        autoHideDuration: 4e3,
        onClose: () => C(null),
        message: b
      }
    )
  ] });
}
let Ya = null;
function f5(e, t) {
  Ya = n0(e), Ya.render(
    /* @__PURE__ */ f.jsx(h.StrictMode, { children: /* @__PURE__ */ f.jsx(c5, { ctx: t }) })
  );
}
function p5() {
  const e = Ya;
  Ya = null, e && queueMicrotask(() => e.unmount());
}
const h5 = { mount: f5, unmount: p5 };
export {
  h5 as default,
  f5 as mount,
  p5 as unmount
};
//# sourceMappingURL=main.js.map
