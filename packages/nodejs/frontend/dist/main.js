var i1 = Object.defineProperty;
var s1 = (e, t, n) => t in e ? i1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ui = (e, t, n) => s1(e, typeof t != "symbol" ? t + "" : t, n);
function l1(e, t) {
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
function a1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jg = { exports: {} }, nc = {}, ey = { exports: {} }, Pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tl = Symbol.for("react.element"), c1 = Symbol.for("react.portal"), u1 = Symbol.for("react.fragment"), d1 = Symbol.for("react.strict_mode"), f1 = Symbol.for("react.profiler"), p1 = Symbol.for("react.provider"), m1 = Symbol.for("react.context"), h1 = Symbol.for("react.forward_ref"), g1 = Symbol.for("react.suspense"), y1 = Symbol.for("react.memo"), v1 = Symbol.for("react.lazy"), tm = Symbol.iterator;
function x1(e) {
  return e === null || typeof e != "object" ? null : (e = tm && e[tm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ty = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ny = Object.assign, ry = {};
function zi(e, t, n) {
  this.props = e, this.context = t, this.refs = ry, this.updater = n || ty;
}
zi.prototype.isReactComponent = {};
zi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
zi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function oy() {
}
oy.prototype = zi.prototype;
function vf(e, t, n) {
  this.props = e, this.context = t, this.refs = ry, this.updater = n || ty;
}
var xf = vf.prototype = new oy();
xf.constructor = vf;
ny(xf, zi.prototype);
xf.isPureReactComponent = !0;
var nm = Array.isArray, iy = Object.prototype.hasOwnProperty, Sf = { current: null }, sy = { key: !0, ref: !0, __self: !0, __source: !0 };
function ly(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) iy.call(t, r) && !sy.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: tl, type: e, key: i, ref: s, props: o, _owner: Sf.current };
}
function S1(e, t) {
  return { $$typeof: tl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function bf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tl;
}
function b1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var rm = /\/+/g;
function pu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? b1("" + e.key) : t.toString(36);
}
function ta(e, t, n, r, o) {
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
        case tl:
        case c1:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + pu(s, 0) : r, nm(o) ? (n = "", e != null && (n = e.replace(rm, "$&/") + "/"), ta(o, t, n, "", function(c) {
    return c;
  })) : o != null && (bf(o) && (o = S1(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(rm, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", nm(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + pu(i, l);
    s += ta(i, t, n, a, o);
  }
  else if (a = x1(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + pu(i, l++), s += ta(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function xl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return ta(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function w1(e) {
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
var en = { current: null }, na = { transition: null }, C1 = { ReactCurrentDispatcher: en, ReactCurrentBatchConfig: na, ReactCurrentOwner: Sf };
function ay() {
  throw Error("act(...) is not supported in production builds of React.");
}
Pe.Children = { map: xl, forEach: function(e, t, n) {
  xl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return xl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return xl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!bf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Pe.Component = zi;
Pe.Fragment = u1;
Pe.Profiler = f1;
Pe.PureComponent = vf;
Pe.StrictMode = d1;
Pe.Suspense = g1;
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C1;
Pe.act = ay;
Pe.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ny({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Sf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) iy.call(t, a) && !sy.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: tl, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Pe.createContext = function(e) {
  return e = { $$typeof: m1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: p1, _context: e }, e.Consumer = e;
};
Pe.createElement = ly;
Pe.createFactory = function(e) {
  var t = ly.bind(null, e);
  return t.type = e, t;
};
Pe.createRef = function() {
  return { current: null };
};
Pe.forwardRef = function(e) {
  return { $$typeof: h1, render: e };
};
Pe.isValidElement = bf;
Pe.lazy = function(e) {
  return { $$typeof: v1, _payload: { _status: -1, _result: e }, _init: w1 };
};
Pe.memo = function(e, t) {
  return { $$typeof: y1, type: e, compare: t === void 0 ? null : t };
};
Pe.startTransition = function(e) {
  var t = na.transition;
  na.transition = {};
  try {
    e();
  } finally {
    na.transition = t;
  }
};
Pe.unstable_act = ay;
Pe.useCallback = function(e, t) {
  return en.current.useCallback(e, t);
};
Pe.useContext = function(e) {
  return en.current.useContext(e);
};
Pe.useDebugValue = function() {
};
Pe.useDeferredValue = function(e) {
  return en.current.useDeferredValue(e);
};
Pe.useEffect = function(e, t) {
  return en.current.useEffect(e, t);
};
Pe.useId = function() {
  return en.current.useId();
};
Pe.useImperativeHandle = function(e, t, n) {
  return en.current.useImperativeHandle(e, t, n);
};
Pe.useInsertionEffect = function(e, t) {
  return en.current.useInsertionEffect(e, t);
};
Pe.useLayoutEffect = function(e, t) {
  return en.current.useLayoutEffect(e, t);
};
Pe.useMemo = function(e, t) {
  return en.current.useMemo(e, t);
};
Pe.useReducer = function(e, t, n) {
  return en.current.useReducer(e, t, n);
};
Pe.useRef = function(e) {
  return en.current.useRef(e);
};
Pe.useState = function(e) {
  return en.current.useState(e);
};
Pe.useSyncExternalStore = function(e, t, n) {
  return en.current.useSyncExternalStore(e, t, n);
};
Pe.useTransition = function() {
  return en.current.useTransition();
};
Pe.version = "18.3.1";
ey.exports = Pe;
var p = ey.exports;
const cy = /* @__PURE__ */ a1(p), xa = /* @__PURE__ */ l1({
  __proto__: null,
  default: cy
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
var k1 = p, T1 = Symbol.for("react.element"), E1 = Symbol.for("react.fragment"), R1 = Object.prototype.hasOwnProperty, P1 = k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function uy(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) R1.call(t, r) && !I1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: T1, type: e, key: i, ref: s, props: o, _owner: P1.current };
}
nc.Fragment = E1;
nc.jsx = uy;
nc.jsxs = uy;
Jg.exports = nc;
var u = Jg.exports, dy = { exports: {} }, Cn = {}, fy = { exports: {} }, py = {};
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
      var W = B - 1 >>> 1, _ = M[W];
      if (0 < o(_, z)) M[W] = z, M[B] = _, B = W;
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
      e: for (var W = 0, _ = M.length, Q = _ >>> 1; W < Q; ) {
        var K = 2 * (W + 1) - 1, Z = M[K], G = K + 1, X = M[G];
        if (0 > o(Z, B)) G < _ && 0 > o(X, Z) ? (M[W] = X, M[G] = B, W = G) : (M[W] = Z, M[K] = B, W = K);
        else if (G < _ && 0 > o(X, B)) M[W] = X, M[G] = B, W = G;
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
  var a = [], c = [], f = 1, m = null, v = 3, d = !1, x = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
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
    if (b = !1, S(M), !x) if (n(a) !== null) x = !0, O(E);
    else {
      var z = n(c);
      z !== null && L(w, z.startTime - M);
    }
  }
  function E(M, z) {
    x = !1, b && (b = !1, y(T), T = -1), d = !0;
    var B = v;
    try {
      for (S(z), m = n(a); m !== null && (!(m.expirationTime > z) || M && !I()); ) {
        var W = m.callback;
        if (typeof W == "function") {
          m.callback = null, v = m.priorityLevel;
          var _ = W(m.expirationTime <= z);
          z = e.unstable_now(), typeof _ == "function" ? m.callback = _ : m === n(a) && r(a), S(z);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var Q = !0;
      else {
        var K = n(c);
        K !== null && L(w, K.startTime - z), Q = !1;
      }
      return Q;
    } finally {
      m = null, v = B, d = !1;
    }
  }
  var k = !1, R = null, T = -1, A = 5, N = -1;
  function I() {
    return !(e.unstable_now() - N < A);
  }
  function g() {
    if (R !== null) {
      var M = e.unstable_now();
      N = M;
      var z = !0;
      try {
        z = R(!0, M);
      } finally {
        z ? $() : (k = !1, R = null);
      }
    } else k = !1;
  }
  var $;
  if (typeof h == "function") $ = function() {
    h(g);
  };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(), j = P.port2;
    P.port1.onmessage = g, $ = function() {
      j.postMessage(null);
    };
  } else $ = function() {
    C(g, 0);
  };
  function O(M) {
    R = M, k || (k = !0, $());
  }
  function L(M, z) {
    T = C(function() {
      M(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    x || d || (x = !0, O(E));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(M) {
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
      return M();
    } finally {
      v = B;
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
    var B = v;
    v = M;
    try {
      return z();
    } finally {
      v = B;
    }
  }, e.unstable_scheduleCallback = function(M, z, B) {
    var W = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? W + B : W) : B = W, M) {
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
    return _ = B + _, M = { id: f++, callback: z, priorityLevel: M, startTime: B, expirationTime: _, sortIndex: -1 }, B > W ? (M.sortIndex = B, t(c, M), n(a) === null && M === n(c) && (b ? (y(T), T = -1) : b = !0, L(w, B - W))) : (M.sortIndex = _, t(a, M), x || d || (x = !0, O(E))), M;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(M) {
    var z = v;
    return function() {
      var B = v;
      v = z;
      try {
        return M.apply(this, arguments);
      } finally {
        v = B;
      }
    };
  };
})(py);
fy.exports = py;
var M1 = fy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j1 = p, Sn = M1;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var my = /* @__PURE__ */ new Set(), Ps = {};
function _o(e, t) {
  wi(e, t), wi(e + "Capture", t);
}
function wi(e, t) {
  for (Ps[e] = t, e = 0; e < t.length; e++) my.add(t[e]);
}
var Pr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nd = Object.prototype.hasOwnProperty, $1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, om = {}, im = {};
function A1(e) {
  return nd.call(im, e) ? !0 : nd.call(om, e) ? !1 : $1.test(e) ? im[e] = !0 : (om[e] = !0, !1);
}
function O1(e, t, n, r) {
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
function N1(e, t, n, r) {
  if (t === null || typeof t > "u" || O1(e, t, n, r)) return !0;
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
function tn(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Ut = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ut[e] = new tn(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ut[t] = new tn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ut[e] = new tn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ut[e] = new tn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ut[e] = new tn(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ut[e] = new tn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ut[e] = new tn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ut[e] = new tn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ut[e] = new tn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wf = /[\-:]([a-z])/g;
function Cf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    wf,
    Cf
  );
  Ut[t] = new tn(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(wf, Cf);
  Ut[t] = new tn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(wf, Cf);
  Ut[t] = new tn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ut[e] = new tn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ut.xlinkHref = new tn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ut[e] = new tn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kf(e, t, n, r) {
  var o = Ut.hasOwnProperty(t) ? Ut[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (N1(t, n, o, r) && (n = null), r || o === null ? A1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nr = j1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Sl = Symbol.for("react.element"), Jo = Symbol.for("react.portal"), ei = Symbol.for("react.fragment"), Tf = Symbol.for("react.strict_mode"), rd = Symbol.for("react.profiler"), hy = Symbol.for("react.provider"), gy = Symbol.for("react.context"), Ef = Symbol.for("react.forward_ref"), od = Symbol.for("react.suspense"), id = Symbol.for("react.suspense_list"), Rf = Symbol.for("react.memo"), _r = Symbol.for("react.lazy"), yy = Symbol.for("react.offscreen"), sm = Symbol.iterator;
function Hi(e) {
  return e === null || typeof e != "object" ? null : (e = sm && e[sm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var yt = Object.assign, mu;
function ls(e) {
  if (mu === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    mu = t && t[1] || "";
  }
  return `
` + mu + e;
}
var hu = !1;
function gu(e, t) {
  if (!e || hu) return "";
  hu = !0;
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
    hu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ls(e) : "";
}
function L1(e) {
  switch (e.tag) {
    case 5:
      return ls(e.type);
    case 16:
      return ls("Lazy");
    case 13:
      return ls("Suspense");
    case 19:
      return ls("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = gu(e.type, !1), e;
    case 11:
      return e = gu(e.type.render, !1), e;
    case 1:
      return e = gu(e.type, !0), e;
    default:
      return "";
  }
}
function sd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ei:
      return "Fragment";
    case Jo:
      return "Portal";
    case rd:
      return "Profiler";
    case Tf:
      return "StrictMode";
    case od:
      return "Suspense";
    case id:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case gy:
      return (e.displayName || "Context") + ".Consumer";
    case hy:
      return (e._context.displayName || "Context") + ".Provider";
    case Ef:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Rf:
      return t = e.displayName || null, t !== null ? t : sd(e.type) || "Memo";
    case _r:
      t = e._payload, e = e._init;
      try {
        return sd(e(t));
      } catch {
      }
  }
  return null;
}
function z1(e) {
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
      return sd(t);
    case 8:
      return t === Tf ? "StrictMode" : "Mode";
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
function ro(e) {
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
function vy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function D1(e) {
  var t = vy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function bl(e) {
  e._valueTracker || (e._valueTracker = D1(e));
}
function xy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = vy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Sa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ld(e, t) {
  var n = t.checked;
  return yt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function lm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ro(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Sy(e, t) {
  t = t.checked, t != null && kf(e, "checked", t, !1);
}
function ad(e, t) {
  Sy(e, t);
  var n = ro(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? cd(e, t.type, n) : t.hasOwnProperty("defaultValue") && cd(e, t.type, ro(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function am(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function cd(e, t, n) {
  (t !== "number" || Sa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var as = Array.isArray;
function pi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ro(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ud(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return yt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function cm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(V(92));
      if (as(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ro(n) };
}
function by(e, t) {
  var n = ro(t.value), r = ro(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function um(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function dd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? wy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var wl, Cy = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (wl = wl || document.createElement("div"), wl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = wl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Is(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ps = {
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
}, B1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ps).forEach(function(e) {
  B1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ps[t] = ps[e];
  });
});
function ky(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ps.hasOwnProperty(e) && ps[e] ? ("" + t).trim() : t + "px";
}
function Ty(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = ky(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var F1 = yt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function fd(e, t) {
  if (t) {
    if (F1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function pd(e, t) {
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
var md = null;
function Pf(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var hd = null, mi = null, hi = null;
function dm(e) {
  if (e = ol(e)) {
    if (typeof hd != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = lc(t), hd(e.stateNode, e.type, t));
  }
}
function Ey(e) {
  mi ? hi ? hi.push(e) : hi = [e] : mi = e;
}
function Ry() {
  if (mi) {
    var e = mi, t = hi;
    if (hi = mi = null, dm(e), t) for (e = 0; e < t.length; e++) dm(t[e]);
  }
}
function Py(e, t) {
  return e(t);
}
function Iy() {
}
var yu = !1;
function My(e, t, n) {
  if (yu) return e(t, n);
  yu = !0;
  try {
    return Py(e, t, n);
  } finally {
    yu = !1, (mi !== null || hi !== null) && (Iy(), Ry());
  }
}
function Ms(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = lc(n);
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
  if (n && typeof n != "function") throw Error(V(231, t, typeof n));
  return n;
}
var gd = !1;
if (Pr) try {
  var Vi = {};
  Object.defineProperty(Vi, "passive", { get: function() {
    gd = !0;
  } }), window.addEventListener("test", Vi, Vi), window.removeEventListener("test", Vi, Vi);
} catch {
  gd = !1;
}
function _1(e, t, n, r, o, i, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var ms = !1, ba = null, wa = !1, yd = null, W1 = { onError: function(e) {
  ms = !0, ba = e;
} };
function U1(e, t, n, r, o, i, s, l, a) {
  ms = !1, ba = null, _1.apply(W1, arguments);
}
function H1(e, t, n, r, o, i, s, l, a) {
  if (U1.apply(this, arguments), ms) {
    if (ms) {
      var c = ba;
      ms = !1, ba = null;
    } else throw Error(V(198));
    wa || (wa = !0, yd = c);
  }
}
function Wo(e) {
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
function jy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function fm(e) {
  if (Wo(e) !== e) throw Error(V(188));
}
function V1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wo(e), t === null) throw Error(V(188));
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
        if (i === n) return fm(o), e;
        if (i === r) return fm(o), t;
        i = i.sibling;
      }
      throw Error(V(188));
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
        if (!s) throw Error(V(189));
      }
    }
    if (n.alternate !== r) throw Error(V(190));
  }
  if (n.tag !== 3) throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function $y(e) {
  return e = V1(e), e !== null ? Ay(e) : null;
}
function Ay(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ay(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Oy = Sn.unstable_scheduleCallback, pm = Sn.unstable_cancelCallback, K1 = Sn.unstable_shouldYield, Y1 = Sn.unstable_requestPaint, bt = Sn.unstable_now, G1 = Sn.unstable_getCurrentPriorityLevel, If = Sn.unstable_ImmediatePriority, Ny = Sn.unstable_UserBlockingPriority, Ca = Sn.unstable_NormalPriority, X1 = Sn.unstable_LowPriority, Ly = Sn.unstable_IdlePriority, rc = null, dr = null;
function Q1(e) {
  if (dr && typeof dr.onCommitFiberRoot == "function") try {
    dr.onCommitFiberRoot(rc, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Xn = Math.clz32 ? Math.clz32 : J1, q1 = Math.log, Z1 = Math.LN2;
function J1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (q1(e) / Z1 | 0) | 0;
}
var Cl = 64, kl = 4194304;
function cs(e) {
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
function ka(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = cs(l) : (i &= s, i !== 0 && (r = cs(i)));
  } else s = n & ~o, s !== 0 ? r = cs(s) : i !== 0 && (r = cs(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Xn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function eS(e, t) {
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
function tS(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Xn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = eS(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function vd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function zy() {
  var e = Cl;
  return Cl <<= 1, !(Cl & 4194240) && (Cl = 64), e;
}
function vu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xn(t), e[t] = n;
}
function nS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Xn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Mf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Xe = 0;
function Dy(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var By, jf, Fy, _y, Wy, xd = !1, Tl = [], Gr = null, Xr = null, Qr = null, js = /* @__PURE__ */ new Map(), $s = /* @__PURE__ */ new Map(), Ur = [], rS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function mm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gr = null;
      break;
    case "dragenter":
    case "dragleave":
      Xr = null;
      break;
    case "mouseover":
    case "mouseout":
      Qr = null;
      break;
    case "pointerover":
    case "pointerout":
      js.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $s.delete(t.pointerId);
  }
}
function Ki(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = ol(t), t !== null && jf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function oS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Gr = Ki(Gr, e, t, n, r, o), !0;
    case "dragenter":
      return Xr = Ki(Xr, e, t, n, r, o), !0;
    case "mouseover":
      return Qr = Ki(Qr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return js.set(i, Ki(js.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, $s.set(i, Ki($s.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Uy(e) {
  var t = ko(e.target);
  if (t !== null) {
    var n = Wo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = jy(n), t !== null) {
          e.blockedOn = t, Wy(e.priority, function() {
            Fy(n);
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
function ra(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Sd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      md = r, n.target.dispatchEvent(r), md = null;
    } else return t = ol(n), t !== null && jf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function hm(e, t, n) {
  ra(e) && n.delete(t);
}
function iS() {
  xd = !1, Gr !== null && ra(Gr) && (Gr = null), Xr !== null && ra(Xr) && (Xr = null), Qr !== null && ra(Qr) && (Qr = null), js.forEach(hm), $s.forEach(hm);
}
function Yi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, xd || (xd = !0, Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority, iS)));
}
function As(e) {
  function t(o) {
    return Yi(o, e);
  }
  if (0 < Tl.length) {
    Yi(Tl[0], e);
    for (var n = 1; n < Tl.length; n++) {
      var r = Tl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Gr !== null && Yi(Gr, e), Xr !== null && Yi(Xr, e), Qr !== null && Yi(Qr, e), js.forEach(t), $s.forEach(t), n = 0; n < Ur.length; n++) r = Ur[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ur.length && (n = Ur[0], n.blockedOn === null); ) Uy(n), n.blockedOn === null && Ur.shift();
}
var gi = Nr.ReactCurrentBatchConfig, Ta = !0;
function sS(e, t, n, r) {
  var o = Xe, i = gi.transition;
  gi.transition = null;
  try {
    Xe = 1, $f(e, t, n, r);
  } finally {
    Xe = o, gi.transition = i;
  }
}
function lS(e, t, n, r) {
  var o = Xe, i = gi.transition;
  gi.transition = null;
  try {
    Xe = 4, $f(e, t, n, r);
  } finally {
    Xe = o, gi.transition = i;
  }
}
function $f(e, t, n, r) {
  if (Ta) {
    var o = Sd(e, t, n, r);
    if (o === null) Pu(e, t, r, Ea, n), mm(e, r);
    else if (oS(o, e, t, n, r)) r.stopPropagation();
    else if (mm(e, r), t & 4 && -1 < rS.indexOf(e)) {
      for (; o !== null; ) {
        var i = ol(o);
        if (i !== null && By(i), i = Sd(e, t, n, r), i === null && Pu(e, t, r, Ea, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Pu(e, t, r, null, n);
  }
}
var Ea = null;
function Sd(e, t, n, r) {
  if (Ea = null, e = Pf(r), e = ko(e), e !== null) if (t = Wo(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = jy(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ea = e, null;
}
function Hy(e) {
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
      switch (G1()) {
        case If:
          return 1;
        case Ny:
          return 4;
        case Ca:
        case X1:
          return 16;
        case Ly:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vr = null, Af = null, oa = null;
function Vy() {
  if (oa) return oa;
  var e, t = Af, n = t.length, r, o = "value" in Vr ? Vr.value : Vr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return oa = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ia(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function El() {
  return !0;
}
function gm() {
  return !1;
}
function kn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? El : gm, this.isPropagationStopped = gm, this;
  }
  return yt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = El);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = El);
  }, persist: function() {
  }, isPersistent: El }), t;
}
var Di = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Of = kn(Di), rl = yt({}, Di, { view: 0, detail: 0 }), aS = kn(rl), xu, Su, Gi, oc = yt({}, rl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Gi && (Gi && e.type === "mousemove" ? (xu = e.screenX - Gi.screenX, Su = e.screenY - Gi.screenY) : Su = xu = 0, Gi = e), xu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Su;
} }), ym = kn(oc), cS = yt({}, oc, { dataTransfer: 0 }), uS = kn(cS), dS = yt({}, rl, { relatedTarget: 0 }), bu = kn(dS), fS = yt({}, Di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pS = kn(fS), mS = yt({}, Di, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), hS = kn(mS), gS = yt({}, Di, { data: 0 }), vm = kn(gS), yS = {
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
}, vS = {
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
}, xS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function SS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xS[e]) ? !!t[e] : !1;
}
function Nf() {
  return SS;
}
var bS = yt({}, rl, { key: function(e) {
  if (e.key) {
    var t = yS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ia(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nf, charCode: function(e) {
  return e.type === "keypress" ? ia(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ia(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), wS = kn(bS), CS = yt({}, oc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xm = kn(CS), kS = yt({}, rl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nf }), TS = kn(kS), ES = yt({}, Di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), RS = kn(ES), PS = yt({}, oc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), IS = kn(PS), MS = [9, 13, 27, 32], Lf = Pr && "CompositionEvent" in window, hs = null;
Pr && "documentMode" in document && (hs = document.documentMode);
var jS = Pr && "TextEvent" in window && !hs, Ky = Pr && (!Lf || hs && 8 < hs && 11 >= hs), Sm = " ", bm = !1;
function Yy(e, t) {
  switch (e) {
    case "keyup":
      return MS.indexOf(t.keyCode) !== -1;
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
function Gy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var ti = !1;
function $S(e, t) {
  switch (e) {
    case "compositionend":
      return Gy(t);
    case "keypress":
      return t.which !== 32 ? null : (bm = !0, Sm);
    case "textInput":
      return e = t.data, e === Sm && bm ? null : e;
    default:
      return null;
  }
}
function AS(e, t) {
  if (ti) return e === "compositionend" || !Lf && Yy(e, t) ? (e = Vy(), oa = Af = Vr = null, ti = !1, e) : null;
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
      return Ky && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var OS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function wm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!OS[e.type] : t === "textarea";
}
function Xy(e, t, n, r) {
  Ey(r), t = Ra(t, "onChange"), 0 < t.length && (n = new Of("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var gs = null, Os = null;
function NS(e) {
  sv(e, 0);
}
function ic(e) {
  var t = oi(e);
  if (xy(t)) return e;
}
function LS(e, t) {
  if (e === "change") return t;
}
var Qy = !1;
if (Pr) {
  var wu;
  if (Pr) {
    var Cu = "oninput" in document;
    if (!Cu) {
      var Cm = document.createElement("div");
      Cm.setAttribute("oninput", "return;"), Cu = typeof Cm.oninput == "function";
    }
    wu = Cu;
  } else wu = !1;
  Qy = wu && (!document.documentMode || 9 < document.documentMode);
}
function km() {
  gs && (gs.detachEvent("onpropertychange", qy), Os = gs = null);
}
function qy(e) {
  if (e.propertyName === "value" && ic(Os)) {
    var t = [];
    Xy(t, Os, e, Pf(e)), My(NS, t);
  }
}
function zS(e, t, n) {
  e === "focusin" ? (km(), gs = t, Os = n, gs.attachEvent("onpropertychange", qy)) : e === "focusout" && km();
}
function DS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ic(Os);
}
function BS(e, t) {
  if (e === "click") return ic(t);
}
function FS(e, t) {
  if (e === "input" || e === "change") return ic(t);
}
function _S(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var qn = typeof Object.is == "function" ? Object.is : _S;
function Ns(e, t) {
  if (qn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!nd.call(t, o) || !qn(e[o], t[o])) return !1;
  }
  return !0;
}
function Tm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Em(e, t) {
  var n = Tm(e);
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
    n = Tm(n);
  }
}
function Zy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Jy() {
  for (var e = window, t = Sa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Sa(e.document);
  }
  return t;
}
function zf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function WS(e) {
  var t = Jy(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zy(n.ownerDocument.documentElement, n)) {
    if (r !== null && zf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Em(n, i);
        var s = Em(
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
var US = Pr && "documentMode" in document && 11 >= document.documentMode, ni = null, bd = null, ys = null, wd = !1;
function Rm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wd || ni == null || ni !== Sa(r) || (r = ni, "selectionStart" in r && zf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ys && Ns(ys, r) || (ys = r, r = Ra(bd, "onSelect"), 0 < r.length && (t = new Of("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ni)));
}
function Rl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ri = { animationend: Rl("Animation", "AnimationEnd"), animationiteration: Rl("Animation", "AnimationIteration"), animationstart: Rl("Animation", "AnimationStart"), transitionend: Rl("Transition", "TransitionEnd") }, ku = {}, ev = {};
Pr && (ev = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
function sc(e) {
  if (ku[e]) return ku[e];
  if (!ri[e]) return e;
  var t = ri[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ev) return ku[e] = t[n];
  return e;
}
var tv = sc("animationend"), nv = sc("animationiteration"), rv = sc("animationstart"), ov = sc("transitionend"), iv = /* @__PURE__ */ new Map(), Pm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function lo(e, t) {
  iv.set(e, t), _o(t, [e]);
}
for (var Tu = 0; Tu < Pm.length; Tu++) {
  var Eu = Pm[Tu], HS = Eu.toLowerCase(), VS = Eu[0].toUpperCase() + Eu.slice(1);
  lo(HS, "on" + VS);
}
lo(tv, "onAnimationEnd");
lo(nv, "onAnimationIteration");
lo(rv, "onAnimationStart");
lo("dblclick", "onDoubleClick");
lo("focusin", "onFocus");
lo("focusout", "onBlur");
lo(ov, "onTransitionEnd");
wi("onMouseEnter", ["mouseout", "mouseover"]);
wi("onMouseLeave", ["mouseout", "mouseover"]);
wi("onPointerEnter", ["pointerout", "pointerover"]);
wi("onPointerLeave", ["pointerout", "pointerover"]);
_o("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
_o("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
_o("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_o("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
_o("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
_o("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), KS = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
function Im(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, H1(r, t, void 0, e), e.currentTarget = null;
}
function sv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, c = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Im(o, l, c), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, c = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Im(o, l, c), i = a;
      }
    }
  }
  if (wa) throw e = yd, wa = !1, yd = null, e;
}
function it(e, t) {
  var n = t[Rd];
  n === void 0 && (n = t[Rd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (lv(t, e, 2, !1), n.add(r));
}
function Ru(e, t, n) {
  var r = 0;
  t && (r |= 4), lv(n, e, r, t);
}
var Pl = "_reactListening" + Math.random().toString(36).slice(2);
function Ls(e) {
  if (!e[Pl]) {
    e[Pl] = !0, my.forEach(function(n) {
      n !== "selectionchange" && (KS.has(n) || Ru(n, !1, e), Ru(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pl] || (t[Pl] = !0, Ru("selectionchange", !1, t));
  }
}
function lv(e, t, n, r) {
  switch (Hy(t)) {
    case 1:
      var o = sS;
      break;
    case 4:
      o = lS;
      break;
    default:
      o = $f;
  }
  n = o.bind(null, t, n, e), o = void 0, !gd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Pu(e, t, n, r, o) {
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
        if (s = ko(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  My(function() {
    var c = i, f = Pf(n), m = [];
    e: {
      var v = iv.get(e);
      if (v !== void 0) {
        var d = Of, x = e;
        switch (e) {
          case "keypress":
            if (ia(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = wS;
            break;
          case "focusin":
            x = "focus", d = bu;
            break;
          case "focusout":
            x = "blur", d = bu;
            break;
          case "beforeblur":
          case "afterblur":
            d = bu;
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
            d = ym;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = uS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = TS;
            break;
          case tv:
          case nv:
          case rv:
            d = pS;
            break;
          case ov:
            d = RS;
            break;
          case "scroll":
            d = aS;
            break;
          case "wheel":
            d = IS;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = hS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = xm;
        }
        var b = (t & 4) !== 0, C = !b && e === "scroll", y = b ? v !== null ? v + "Capture" : null : v;
        b = [];
        for (var h = c, S; h !== null; ) {
          S = h;
          var w = S.stateNode;
          if (S.tag === 5 && w !== null && (S = w, y !== null && (w = Ms(h, y), w != null && b.push(zs(h, w, S)))), C) break;
          h = h.return;
        }
        0 < b.length && (v = new d(v, x, null, n, f), m.push({ event: v, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", v && n !== md && (x = n.relatedTarget || n.fromElement) && (ko(x) || x[Ir])) break e;
        if ((d || v) && (v = f.window === f ? f : (v = f.ownerDocument) ? v.defaultView || v.parentWindow : window, d ? (x = n.relatedTarget || n.toElement, d = c, x = x ? ko(x) : null, x !== null && (C = Wo(x), x !== C || x.tag !== 5 && x.tag !== 6) && (x = null)) : (d = null, x = c), d !== x)) {
          if (b = ym, w = "onMouseLeave", y = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (b = xm, w = "onPointerLeave", y = "onPointerEnter", h = "pointer"), C = d == null ? v : oi(d), S = x == null ? v : oi(x), v = new b(w, h + "leave", d, n, f), v.target = C, v.relatedTarget = S, w = null, ko(f) === c && (b = new b(y, h + "enter", x, n, f), b.target = S, b.relatedTarget = C, w = b), C = w, d && x) t: {
            for (b = d, y = x, h = 0, S = b; S; S = Ko(S)) h++;
            for (S = 0, w = y; w; w = Ko(w)) S++;
            for (; 0 < h - S; ) b = Ko(b), h--;
            for (; 0 < S - h; ) y = Ko(y), S--;
            for (; h--; ) {
              if (b === y || y !== null && b === y.alternate) break t;
              b = Ko(b), y = Ko(y);
            }
            b = null;
          }
          else b = null;
          d !== null && Mm(m, v, d, b, !1), x !== null && C !== null && Mm(m, C, x, b, !0);
        }
      }
      e: {
        if (v = c ? oi(c) : window, d = v.nodeName && v.nodeName.toLowerCase(), d === "select" || d === "input" && v.type === "file") var E = LS;
        else if (wm(v)) if (Qy) E = FS;
        else {
          E = DS;
          var k = zS;
        }
        else (d = v.nodeName) && d.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = BS);
        if (E && (E = E(e, c))) {
          Xy(m, E, n, f);
          break e;
        }
        k && k(e, v, c), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && cd(v, "number", v.value);
      }
      switch (k = c ? oi(c) : window, e) {
        case "focusin":
          (wm(k) || k.contentEditable === "true") && (ni = k, bd = c, ys = null);
          break;
        case "focusout":
          ys = bd = ni = null;
          break;
        case "mousedown":
          wd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wd = !1, Rm(m, n, f);
          break;
        case "selectionchange":
          if (US) break;
        case "keydown":
        case "keyup":
          Rm(m, n, f);
      }
      var R;
      if (Lf) e: {
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
      else ti ? Yy(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Ky && n.locale !== "ko" && (ti || T !== "onCompositionStart" ? T === "onCompositionEnd" && ti && (R = Vy()) : (Vr = f, Af = "value" in Vr ? Vr.value : Vr.textContent, ti = !0)), k = Ra(c, T), 0 < k.length && (T = new vm(T, e, null, n, f), m.push({ event: T, listeners: k }), R ? T.data = R : (R = Gy(n), R !== null && (T.data = R)))), (R = jS ? $S(e, n) : AS(e, n)) && (c = Ra(c, "onBeforeInput"), 0 < c.length && (f = new vm("onBeforeInput", "beforeinput", null, n, f), m.push({ event: f, listeners: c }), f.data = R));
    }
    sv(m, t);
  });
}
function zs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ra(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ms(e, n), i != null && r.unshift(zs(e, i, o)), i = Ms(e, t), i != null && r.push(zs(e, i, o))), e = e.return;
  }
  return r;
}
function Ko(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && c !== null && (l = c, o ? (a = Ms(n, i), a != null && s.unshift(zs(n, a, l))) : o || (a = Ms(n, i), a != null && s.push(zs(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var YS = /\r\n?/g, GS = /\u0000|\uFFFD/g;
function jm(e) {
  return (typeof e == "string" ? e : "" + e).replace(YS, `
`).replace(GS, "");
}
function Il(e, t, n) {
  if (t = jm(t), jm(e) !== t && n) throw Error(V(425));
}
function Pa() {
}
var Cd = null, kd = null;
function Td(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ed = typeof setTimeout == "function" ? setTimeout : void 0, XS = typeof clearTimeout == "function" ? clearTimeout : void 0, $m = typeof Promise == "function" ? Promise : void 0, QS = typeof queueMicrotask == "function" ? queueMicrotask : typeof $m < "u" ? function(e) {
  return $m.resolve(null).then(e).catch(qS);
} : Ed;
function qS(e) {
  setTimeout(function() {
    throw e;
  });
}
function Iu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), As(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  As(t);
}
function qr(e) {
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
function Am(e) {
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
var Bi = Math.random().toString(36).slice(2), ar = "__reactFiber$" + Bi, Ds = "__reactProps$" + Bi, Ir = "__reactContainer$" + Bi, Rd = "__reactEvents$" + Bi, ZS = "__reactListeners$" + Bi, JS = "__reactHandles$" + Bi;
function ko(e) {
  var t = e[ar];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ir] || n[ar]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Am(e); e !== null; ) {
        if (n = e[ar]) return n;
        e = Am(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ol(e) {
  return e = e[ar] || e[Ir], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function oi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function lc(e) {
  return e[Ds] || null;
}
var Pd = [], ii = -1;
function ao(e) {
  return { current: e };
}
function st(e) {
  0 > ii || (e.current = Pd[ii], Pd[ii] = null, ii--);
}
function rt(e, t) {
  ii++, Pd[ii] = e.current, e.current = t;
}
var oo = {}, Gt = ao(oo), on = ao(!1), $o = oo;
function Ci(e, t) {
  var n = e.type.contextTypes;
  if (!n) return oo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function sn(e) {
  return e = e.childContextTypes, e != null;
}
function Ia() {
  st(on), st(Gt);
}
function Om(e, t, n) {
  if (Gt.current !== oo) throw Error(V(168));
  rt(Gt, t), rt(on, n);
}
function av(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(V(108, z1(e) || "Unknown", o));
  return yt({}, n, r);
}
function Ma(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || oo, $o = Gt.current, rt(Gt, e), rt(on, on.current), !0;
}
function Nm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = av(e, t, $o), r.__reactInternalMemoizedMergedChildContext = e, st(on), st(Gt), rt(Gt, e)) : st(on), rt(on, n);
}
var Cr = null, ac = !1, Mu = !1;
function cv(e) {
  Cr === null ? Cr = [e] : Cr.push(e);
}
function eb(e) {
  ac = !0, cv(e);
}
function co() {
  if (!Mu && Cr !== null) {
    Mu = !0;
    var e = 0, t = Xe;
    try {
      var n = Cr;
      for (Xe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Cr = null, ac = !1;
    } catch (o) {
      throw Cr !== null && (Cr = Cr.slice(e + 1)), Oy(If, co), o;
    } finally {
      Xe = t, Mu = !1;
    }
  }
  return null;
}
var si = [], li = 0, ja = null, $a = 0, Pn = [], In = 0, Ao = null, Tr = 1, Er = "";
function So(e, t) {
  si[li++] = $a, si[li++] = ja, ja = e, $a = t;
}
function uv(e, t, n) {
  Pn[In++] = Tr, Pn[In++] = Er, Pn[In++] = Ao, Ao = e;
  var r = Tr;
  e = Er;
  var o = 32 - Xn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Xn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Tr = 1 << 32 - Xn(t) + o | n << o | r, Er = i + e;
  } else Tr = 1 << i | n << o | r, Er = e;
}
function Df(e) {
  e.return !== null && (So(e, 1), uv(e, 1, 0));
}
function Bf(e) {
  for (; e === ja; ) ja = si[--li], si[li] = null, $a = si[--li], si[li] = null;
  for (; e === Ao; ) Ao = Pn[--In], Pn[In] = null, Er = Pn[--In], Pn[In] = null, Tr = Pn[--In], Pn[In] = null;
}
var vn = null, yn = null, ut = !1, Gn = null;
function dv(e, t) {
  var n = jn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Lm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, vn = e, yn = qr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, vn = e, yn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ao !== null ? { id: Tr, overflow: Er } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = jn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, vn = e, yn = null, !0) : !1;
    default:
      return !1;
  }
}
function Id(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Md(e) {
  if (ut) {
    var t = yn;
    if (t) {
      var n = t;
      if (!Lm(e, t)) {
        if (Id(e)) throw Error(V(418));
        t = qr(n.nextSibling);
        var r = vn;
        t && Lm(e, t) ? dv(r, n) : (e.flags = e.flags & -4097 | 2, ut = !1, vn = e);
      }
    } else {
      if (Id(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, ut = !1, vn = e;
    }
  }
}
function zm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  vn = e;
}
function Ml(e) {
  if (e !== vn) return !1;
  if (!ut) return zm(e), ut = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Td(e.type, e.memoizedProps)), t && (t = yn)) {
    if (Id(e)) throw fv(), Error(V(418));
    for (; t; ) dv(e, t), t = qr(t.nextSibling);
  }
  if (zm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              yn = qr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      yn = null;
    }
  } else yn = vn ? qr(e.stateNode.nextSibling) : null;
  return !0;
}
function fv() {
  for (var e = yn; e; ) e = qr(e.nextSibling);
}
function ki() {
  yn = vn = null, ut = !1;
}
function Ff(e) {
  Gn === null ? Gn = [e] : Gn.push(e);
}
var tb = Nr.ReactCurrentBatchConfig;
function Xi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(V(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function jl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Dm(e) {
  var t = e._init;
  return t(e._payload);
}
function pv(e) {
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
    return y = to(y, h), y.index = 0, y.sibling = null, y;
  }
  function i(y, h, S) {
    return y.index = S, e ? (S = y.alternate, S !== null ? (S = S.index, S < h ? (y.flags |= 2, h) : S) : (y.flags |= 2, h)) : (y.flags |= 1048576, h);
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function l(y, h, S, w) {
    return h === null || h.tag !== 6 ? (h = zu(S, y.mode, w), h.return = y, h) : (h = o(h, S), h.return = y, h);
  }
  function a(y, h, S, w) {
    var E = S.type;
    return E === ei ? f(y, h, S.props.children, w, S.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === _r && Dm(E) === h.type) ? (w = o(h, S.props), w.ref = Xi(y, h, S), w.return = y, w) : (w = fa(S.type, S.key, S.props, null, y.mode, w), w.ref = Xi(y, h, S), w.return = y, w);
  }
  function c(y, h, S, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== S.containerInfo || h.stateNode.implementation !== S.implementation ? (h = Du(S, y.mode, w), h.return = y, h) : (h = o(h, S.children || []), h.return = y, h);
  }
  function f(y, h, S, w, E) {
    return h === null || h.tag !== 7 ? (h = Io(S, y.mode, w, E), h.return = y, h) : (h = o(h, S), h.return = y, h);
  }
  function m(y, h, S) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = zu("" + h, y.mode, S), h.return = y, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Sl:
          return S = fa(h.type, h.key, h.props, null, y.mode, S), S.ref = Xi(y, null, h), S.return = y, S;
        case Jo:
          return h = Du(h, y.mode, S), h.return = y, h;
        case _r:
          var w = h._init;
          return m(y, w(h._payload), S);
      }
      if (as(h) || Hi(h)) return h = Io(h, y.mode, S, null), h.return = y, h;
      jl(y, h);
    }
    return null;
  }
  function v(y, h, S, w) {
    var E = h !== null ? h.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return E !== null ? null : l(y, h, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Sl:
          return S.key === E ? a(y, h, S, w) : null;
        case Jo:
          return S.key === E ? c(y, h, S, w) : null;
        case _r:
          return E = S._init, v(
            y,
            h,
            E(S._payload),
            w
          );
      }
      if (as(S) || Hi(S)) return E !== null ? null : f(y, h, S, w, null);
      jl(y, S);
    }
    return null;
  }
  function d(y, h, S, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return y = y.get(S) || null, l(h, y, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Sl:
          return y = y.get(w.key === null ? S : w.key) || null, a(h, y, w, E);
        case Jo:
          return y = y.get(w.key === null ? S : w.key) || null, c(h, y, w, E);
        case _r:
          var k = w._init;
          return d(y, h, S, k(w._payload), E);
      }
      if (as(w) || Hi(w)) return y = y.get(S) || null, f(h, y, w, E, null);
      jl(h, w);
    }
    return null;
  }
  function x(y, h, S, w) {
    for (var E = null, k = null, R = h, T = h = 0, A = null; R !== null && T < S.length; T++) {
      R.index > T ? (A = R, R = null) : A = R.sibling;
      var N = v(y, R, S[T], w);
      if (N === null) {
        R === null && (R = A);
        break;
      }
      e && R && N.alternate === null && t(y, R), h = i(N, h, T), k === null ? E = N : k.sibling = N, k = N, R = A;
    }
    if (T === S.length) return n(y, R), ut && So(y, T), E;
    if (R === null) {
      for (; T < S.length; T++) R = m(y, S[T], w), R !== null && (h = i(R, h, T), k === null ? E = R : k.sibling = R, k = R);
      return ut && So(y, T), E;
    }
    for (R = r(y, R); T < S.length; T++) A = d(R, y, T, S[T], w), A !== null && (e && A.alternate !== null && R.delete(A.key === null ? T : A.key), h = i(A, h, T), k === null ? E = A : k.sibling = A, k = A);
    return e && R.forEach(function(I) {
      return t(y, I);
    }), ut && So(y, T), E;
  }
  function b(y, h, S, w) {
    var E = Hi(S);
    if (typeof E != "function") throw Error(V(150));
    if (S = E.call(S), S == null) throw Error(V(151));
    for (var k = E = null, R = h, T = h = 0, A = null, N = S.next(); R !== null && !N.done; T++, N = S.next()) {
      R.index > T ? (A = R, R = null) : A = R.sibling;
      var I = v(y, R, N.value, w);
      if (I === null) {
        R === null && (R = A);
        break;
      }
      e && R && I.alternate === null && t(y, R), h = i(I, h, T), k === null ? E = I : k.sibling = I, k = I, R = A;
    }
    if (N.done) return n(
      y,
      R
    ), ut && So(y, T), E;
    if (R === null) {
      for (; !N.done; T++, N = S.next()) N = m(y, N.value, w), N !== null && (h = i(N, h, T), k === null ? E = N : k.sibling = N, k = N);
      return ut && So(y, T), E;
    }
    for (R = r(y, R); !N.done; T++, N = S.next()) N = d(R, y, T, N.value, w), N !== null && (e && N.alternate !== null && R.delete(N.key === null ? T : N.key), h = i(N, h, T), k === null ? E = N : k.sibling = N, k = N);
    return e && R.forEach(function(g) {
      return t(y, g);
    }), ut && So(y, T), E;
  }
  function C(y, h, S, w) {
    if (typeof S == "object" && S !== null && S.type === ei && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Sl:
          e: {
            for (var E = S.key, k = h; k !== null; ) {
              if (k.key === E) {
                if (E = S.type, E === ei) {
                  if (k.tag === 7) {
                    n(y, k.sibling), h = o(k, S.props.children), h.return = y, y = h;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === _r && Dm(E) === k.type) {
                  n(y, k.sibling), h = o(k, S.props), h.ref = Xi(y, k, S), h.return = y, y = h;
                  break e;
                }
                n(y, k);
                break;
              } else t(y, k);
              k = k.sibling;
            }
            S.type === ei ? (h = Io(S.props.children, y.mode, w, S.key), h.return = y, y = h) : (w = fa(S.type, S.key, S.props, null, y.mode, w), w.ref = Xi(y, h, S), w.return = y, y = w);
          }
          return s(y);
        case Jo:
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
            h = Du(S, y.mode, w), h.return = y, y = h;
          }
          return s(y);
        case _r:
          return k = S._init, C(y, h, k(S._payload), w);
      }
      if (as(S)) return x(y, h, S, w);
      if (Hi(S)) return b(y, h, S, w);
      jl(y, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, h !== null && h.tag === 6 ? (n(y, h.sibling), h = o(h, S), h.return = y, y = h) : (n(y, h), h = zu(S, y.mode, w), h.return = y, y = h), s(y)) : n(y, h);
  }
  return C;
}
var Ti = pv(!0), mv = pv(!1), Aa = ao(null), Oa = null, ai = null, _f = null;
function Wf() {
  _f = ai = Oa = null;
}
function Uf(e) {
  var t = Aa.current;
  st(Aa), e._currentValue = t;
}
function jd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function yi(e, t) {
  Oa = e, _f = ai = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (rn = !0), e.firstContext = null);
}
function On(e) {
  var t = e._currentValue;
  if (_f !== e) if (e = { context: e, memoizedValue: t, next: null }, ai === null) {
    if (Oa === null) throw Error(V(308));
    ai = e, Oa.dependencies = { lanes: 0, firstContext: e };
  } else ai = ai.next = e;
  return t;
}
var To = null;
function Hf(e) {
  To === null ? To = [e] : To.push(e);
}
function hv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Hf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Mr(e, r);
}
function Mr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Wr = !1;
function Vf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function gv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Rr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Zr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Ne & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Mr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Hf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Mr(e, n);
}
function sa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Mf(e, n);
  }
}
function Bm(e, t) {
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
function Na(e, t, n, r) {
  var o = e.updateQueue;
  Wr = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, c = a.next;
    a.next = null, s === null ? i = c : s.next = c, s = a;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, l = f.lastBaseUpdate, l !== s && (l === null ? f.firstBaseUpdate = c : l.next = c, f.lastBaseUpdate = a));
  }
  if (i !== null) {
    var m = o.baseState;
    s = 0, f = c = a = null, l = i;
    do {
      var v = l.lane, d = l.eventTime;
      if ((r & v) === v) {
        f !== null && (f = f.next = {
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
                m = x.call(d, m, v);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = b.payload, v = typeof x == "function" ? x.call(d, m, v) : x, v == null) break e;
              m = yt({}, m, v);
              break e;
            case 2:
              Wr = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [l] : v.push(l));
      } else d = { eventTime: d, lane: v, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, f === null ? (c = f = d, a = m) : f = f.next = d, s |= v;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
      }
    } while (!0);
    if (f === null && (a = m), o.baseState = a, o.firstBaseUpdate = c, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    No |= s, e.lanes = s, e.memoizedState = m;
  }
}
function Fm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(V(191, o));
      o.call(r);
    }
  }
}
var il = {}, fr = ao(il), Bs = ao(il), Fs = ao(il);
function Eo(e) {
  if (e === il) throw Error(V(174));
  return e;
}
function Kf(e, t) {
  switch (rt(Fs, t), rt(Bs, e), rt(fr, il), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : dd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = dd(t, e);
  }
  st(fr), rt(fr, t);
}
function Ei() {
  st(fr), st(Bs), st(Fs);
}
function yv(e) {
  Eo(Fs.current);
  var t = Eo(fr.current), n = dd(t, e.type);
  t !== n && (rt(Bs, e), rt(fr, n));
}
function Yf(e) {
  Bs.current === e && (st(fr), st(Bs));
}
var mt = ao(0);
function La(e) {
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
var ju = [];
function Gf() {
  for (var e = 0; e < ju.length; e++) ju[e]._workInProgressVersionPrimary = null;
  ju.length = 0;
}
var la = Nr.ReactCurrentDispatcher, $u = Nr.ReactCurrentBatchConfig, Oo = 0, ht = null, Pt = null, Mt = null, za = !1, vs = !1, _s = 0, nb = 0;
function Ht() {
  throw Error(V(321));
}
function Xf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!qn(e[n], t[n])) return !1;
  return !0;
}
function Qf(e, t, n, r, o, i) {
  if (Oo = i, ht = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, la.current = e === null || e.memoizedState === null ? sb : lb, e = n(r, o), vs) {
    i = 0;
    do {
      if (vs = !1, _s = 0, 25 <= i) throw Error(V(301));
      i += 1, Mt = Pt = null, t.updateQueue = null, la.current = ab, e = n(r, o);
    } while (vs);
  }
  if (la.current = Da, t = Pt !== null && Pt.next !== null, Oo = 0, Mt = Pt = ht = null, za = !1, t) throw Error(V(300));
  return e;
}
function qf() {
  var e = _s !== 0;
  return _s = 0, e;
}
function or() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Mt === null ? ht.memoizedState = Mt = e : Mt = Mt.next = e, Mt;
}
function Nn() {
  if (Pt === null) {
    var e = ht.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pt.next;
  var t = Mt === null ? ht.memoizedState : Mt.next;
  if (t !== null) Mt = t, Pt = e;
  else {
    if (e === null) throw Error(V(310));
    Pt = e, e = { memoizedState: Pt.memoizedState, baseState: Pt.baseState, baseQueue: Pt.baseQueue, queue: Pt.queue, next: null }, Mt === null ? ht.memoizedState = Mt = e : Mt = Mt.next = e;
  }
  return Mt;
}
function Ws(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Au(e) {
  var t = Nn(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = Pt, o = r.baseQueue, i = n.pending;
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
      var f = c.lane;
      if ((Oo & f) === f) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (l = a = m, s = r) : a = a.next = m, ht.lanes |= f, No |= f;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? s = r : a.next = l, qn(r, t.memoizedState) || (rn = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ht.lanes |= i, No |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ou(e) {
  var t = Nn(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    qn(i, t.memoizedState) || (rn = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function vv() {
}
function xv(e, t) {
  var n = ht, r = Nn(), o = t(), i = !qn(r.memoizedState, o);
  if (i && (r.memoizedState = o, rn = !0), r = r.queue, Zf(wv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Mt !== null && Mt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Us(9, bv.bind(null, n, r, o, t), void 0, null), $t === null) throw Error(V(349));
    Oo & 30 || Sv(n, t, o);
  }
  return o;
}
function Sv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ht.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ht.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function bv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Cv(t) && kv(e);
}
function wv(e, t, n) {
  return n(function() {
    Cv(t) && kv(e);
  });
}
function Cv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qn(e, n);
  } catch {
    return !0;
  }
}
function kv(e) {
  var t = Mr(e, 1);
  t !== null && Qn(t, e, 1, -1);
}
function _m(e) {
  var t = or();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ws, lastRenderedState: e }, t.queue = e, e = e.dispatch = ib.bind(null, ht, e), [t.memoizedState, e];
}
function Us(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ht.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ht.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Tv() {
  return Nn().memoizedState;
}
function aa(e, t, n, r) {
  var o = or();
  ht.flags |= e, o.memoizedState = Us(1 | t, n, void 0, r === void 0 ? null : r);
}
function cc(e, t, n, r) {
  var o = Nn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Pt !== null) {
    var s = Pt.memoizedState;
    if (i = s.destroy, r !== null && Xf(r, s.deps)) {
      o.memoizedState = Us(t, n, i, r);
      return;
    }
  }
  ht.flags |= e, o.memoizedState = Us(1 | t, n, i, r);
}
function Wm(e, t) {
  return aa(8390656, 8, e, t);
}
function Zf(e, t) {
  return cc(2048, 8, e, t);
}
function Ev(e, t) {
  return cc(4, 2, e, t);
}
function Rv(e, t) {
  return cc(4, 4, e, t);
}
function Pv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Iv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, cc(4, 4, Pv.bind(null, t, e), n);
}
function Jf() {
}
function Mv(e, t) {
  var n = Nn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function jv(e, t) {
  var n = Nn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function $v(e, t, n) {
  return Oo & 21 ? (qn(n, t) || (n = zy(), ht.lanes |= n, No |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, rn = !0), e.memoizedState = n);
}
function rb(e, t) {
  var n = Xe;
  Xe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = $u.transition;
  $u.transition = {};
  try {
    e(!1), t();
  } finally {
    Xe = n, $u.transition = r;
  }
}
function Av() {
  return Nn().memoizedState;
}
function ob(e, t, n) {
  var r = eo(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ov(e)) Nv(t, n);
  else if (n = hv(e, t, n, r), n !== null) {
    var o = Jt();
    Qn(n, e, r, o), Lv(n, t, r);
  }
}
function ib(e, t, n) {
  var r = eo(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ov(e)) Nv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, qn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Hf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = hv(e, t, o, r), n !== null && (o = Jt(), Qn(n, e, r, o), Lv(n, t, r));
  }
}
function Ov(e) {
  var t = e.alternate;
  return e === ht || t !== null && t === ht;
}
function Nv(e, t) {
  vs = za = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Lv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Mf(e, n);
  }
}
var Da = { readContext: On, useCallback: Ht, useContext: Ht, useEffect: Ht, useImperativeHandle: Ht, useInsertionEffect: Ht, useLayoutEffect: Ht, useMemo: Ht, useReducer: Ht, useRef: Ht, useState: Ht, useDebugValue: Ht, useDeferredValue: Ht, useTransition: Ht, useMutableSource: Ht, useSyncExternalStore: Ht, useId: Ht, unstable_isNewReconciler: !1 }, sb = { readContext: On, useCallback: function(e, t) {
  return or().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: On, useEffect: Wm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, aa(
    4194308,
    4,
    Pv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return aa(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return aa(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = or();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = or();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ob.bind(null, ht, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = or();
  return e = { current: e }, t.memoizedState = e;
}, useState: _m, useDebugValue: Jf, useDeferredValue: function(e) {
  return or().memoizedState = e;
}, useTransition: function() {
  var e = _m(!1), t = e[0];
  return e = rb.bind(null, e[1]), or().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ht, o = or();
  if (ut) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), $t === null) throw Error(V(349));
    Oo & 30 || Sv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Wm(wv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Us(9, bv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = or(), t = $t.identifierPrefix;
  if (ut) {
    var n = Er, r = Tr;
    n = (r & ~(1 << 32 - Xn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _s++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = nb++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, lb = {
  readContext: On,
  useCallback: Mv,
  useContext: On,
  useEffect: Zf,
  useImperativeHandle: Iv,
  useInsertionEffect: Ev,
  useLayoutEffect: Rv,
  useMemo: jv,
  useReducer: Au,
  useRef: Tv,
  useState: function() {
    return Au(Ws);
  },
  useDebugValue: Jf,
  useDeferredValue: function(e) {
    var t = Nn();
    return $v(t, Pt.memoizedState, e);
  },
  useTransition: function() {
    var e = Au(Ws)[0], t = Nn().memoizedState;
    return [e, t];
  },
  useMutableSource: vv,
  useSyncExternalStore: xv,
  useId: Av,
  unstable_isNewReconciler: !1
}, ab = { readContext: On, useCallback: Mv, useContext: On, useEffect: Zf, useImperativeHandle: Iv, useInsertionEffect: Ev, useLayoutEffect: Rv, useMemo: jv, useReducer: Ou, useRef: Tv, useState: function() {
  return Ou(Ws);
}, useDebugValue: Jf, useDeferredValue: function(e) {
  var t = Nn();
  return Pt === null ? t.memoizedState = e : $v(t, Pt.memoizedState, e);
}, useTransition: function() {
  var e = Ou(Ws)[0], t = Nn().memoizedState;
  return [e, t];
}, useMutableSource: vv, useSyncExternalStore: xv, useId: Av, unstable_isNewReconciler: !1 };
function Kn(e, t) {
  if (e && e.defaultProps) {
    t = yt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function $d(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : yt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var uc = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Jt(), o = eo(e), i = Rr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Zr(e, i, o), t !== null && (Qn(t, e, o, r), sa(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Jt(), o = eo(e), i = Rr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Zr(e, i, o), t !== null && (Qn(t, e, o, r), sa(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Jt(), r = eo(e), o = Rr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Zr(e, o, r), t !== null && (Qn(t, e, r, n), sa(t, e, r));
} };
function Um(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ns(n, r) || !Ns(o, i) : !0;
}
function zv(e, t, n) {
  var r = !1, o = oo, i = t.contextType;
  return typeof i == "object" && i !== null ? i = On(i) : (o = sn(t) ? $o : Gt.current, r = t.contextTypes, i = (r = r != null) ? Ci(e, o) : oo), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = uc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Hm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && uc.enqueueReplaceState(t, t.state, null);
}
function Ad(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Vf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = On(i) : (i = sn(t) ? $o : Gt.current, o.context = Ci(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && ($d(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && uc.enqueueReplaceState(o, o.state, null), Na(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ri(e, t) {
  try {
    var n = "", r = t;
    do
      n += L1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Nu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Od(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cb = typeof WeakMap == "function" ? WeakMap : Map;
function Dv(e, t, n) {
  n = Rr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Fa || (Fa = !0, Hd = r), Od(e, t);
  }, n;
}
function Bv(e, t, n) {
  n = Rr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Od(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Od(e, t), typeof r != "function" && (Jr === null ? Jr = /* @__PURE__ */ new Set([this]) : Jr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Vm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cb();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Cb.bind(null, e, t, n), t.then(e, e));
}
function Km(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ym(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rr(-1, 1), t.tag = 2, Zr(n, t, 1))), n.lanes |= 1), e);
}
var ub = Nr.ReactCurrentOwner, rn = !1;
function Qt(e, t, n, r) {
  t.child = e === null ? mv(t, null, n, r) : Ti(t, e.child, n, r);
}
function Gm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return yi(t, o), r = Qf(e, t, n, r, i, o), n = qf(), e !== null && !rn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jr(e, t, o)) : (ut && n && Df(t), t.flags |= 1, Qt(e, t, r, o), t.child);
}
function Xm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !lp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Fv(e, t, i, r, o)) : (e = fa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ns, n(s, r) && e.ref === t.ref) return jr(e, t, o);
  }
  return t.flags |= 1, e = to(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Fv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ns(i, r) && e.ref === t.ref) if (rn = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (rn = !0);
    else return t.lanes = e.lanes, jr(e, t, o);
  }
  return Nd(e, t, n, r, o);
}
function _v(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, rt(ui, mn), mn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, rt(ui, mn), mn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, rt(ui, mn), mn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, rt(ui, mn), mn |= r;
  return Qt(e, t, o, n), t.child;
}
function Wv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Nd(e, t, n, r, o) {
  var i = sn(n) ? $o : Gt.current;
  return i = Ci(t, i), yi(t, o), n = Qf(e, t, n, r, i, o), r = qf(), e !== null && !rn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jr(e, t, o)) : (ut && r && Df(t), t.flags |= 1, Qt(e, t, n, o), t.child);
}
function Qm(e, t, n, r, o) {
  if (sn(n)) {
    var i = !0;
    Ma(t);
  } else i = !1;
  if (yi(t, o), t.stateNode === null) ca(e, t), zv(t, n, r), Ad(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = On(c) : (c = sn(n) ? $o : Gt.current, c = Ci(t, c));
    var f = n.getDerivedStateFromProps, m = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== c) && Hm(t, s, r, c), Wr = !1;
    var v = t.memoizedState;
    s.state = v, Na(t, r, s, o), a = t.memoizedState, l !== r || v !== a || on.current || Wr ? (typeof f == "function" && ($d(t, n, f, r), a = t.memoizedState), (l = Wr || Um(t, n, l, r, v, a, c)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = c, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, gv(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Kn(t.type, l), s.props = c, m = t.pendingProps, v = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = On(a) : (a = sn(n) ? $o : Gt.current, a = Ci(t, a));
    var d = n.getDerivedStateFromProps;
    (f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== m || v !== a) && Hm(t, s, r, a), Wr = !1, v = t.memoizedState, s.state = v, Na(t, r, s, o);
    var x = t.memoizedState;
    l !== m || v !== x || on.current || Wr ? (typeof d == "function" && ($d(t, n, d, r), x = t.memoizedState), (c = Wr || Um(t, n, c, r, v, x, a) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ld(e, t, n, r, i, o);
}
function Ld(e, t, n, r, o, i) {
  Wv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Nm(t, n, !1), jr(e, t, i);
  r = t.stateNode, ub.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Ti(t, e.child, null, i), t.child = Ti(t, null, l, i)) : Qt(e, t, l, i), t.memoizedState = r.state, o && Nm(t, n, !0), t.child;
}
function Uv(e) {
  var t = e.stateNode;
  t.pendingContext ? Om(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Om(e, t.context, !1), Kf(e, t.containerInfo);
}
function qm(e, t, n, r, o) {
  return ki(), Ff(o), t.flags |= 256, Qt(e, t, n, r), t.child;
}
var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Dd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hv(e, t, n) {
  var r = t.pendingProps, o = mt.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), rt(mt, o & 1), e === null)
    return Md(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = pc(s, r, 0, null), e = Io(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Dd(n), t.memoizedState = zd, e) : ep(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return db(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = to(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = to(l, i) : (i = Io(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Dd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = zd, r;
  }
  return i = e.child, e = i.sibling, r = to(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ep(e, t) {
  return t = pc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function $l(e, t, n, r) {
  return r !== null && Ff(r), Ti(t, e.child, null, n), e = ep(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function db(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Nu(Error(V(422))), $l(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = pc({ mode: "visible", children: r.children }, o, 0, null), i = Io(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ti(t, e.child, null, s), t.child.memoizedState = Dd(s), t.memoizedState = zd, i);
  if (!(t.mode & 1)) return $l(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(V(419)), r = Nu(i, r, void 0), $l(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, rn || l) {
    if (r = $t, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Mr(e, o), Qn(r, e, o, -1));
    }
    return sp(), r = Nu(Error(V(421))), $l(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = kb.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, yn = qr(o.nextSibling), vn = t, ut = !0, Gn = null, e !== null && (Pn[In++] = Tr, Pn[In++] = Er, Pn[In++] = Ao, Tr = e.id, Er = e.overflow, Ao = t), t = ep(t, r.children), t.flags |= 4096, t);
}
function Zm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), jd(e.return, t, n);
}
function Lu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Vv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Qt(e, t, r.children, n), r = mt.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Zm(e, n, t);
      else if (e.tag === 19) Zm(e, n, t);
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
  if (rt(mt, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && La(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Lu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && La(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Lu(t, !0, n, null, i);
      break;
    case "together":
      Lu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ca(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), No |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = to(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = to(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function fb(e, t, n) {
  switch (t.tag) {
    case 3:
      Uv(t), ki();
      break;
    case 5:
      yv(t);
      break;
    case 1:
      sn(t.type) && Ma(t);
      break;
    case 4:
      Kf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      rt(Aa, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (rt(mt, mt.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hv(e, t, n) : (rt(mt, mt.current & 1), e = jr(e, t, n), e !== null ? e.sibling : null);
      rt(mt, mt.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Vv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), rt(mt, mt.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, _v(e, t, n);
  }
  return jr(e, t, n);
}
var Kv, Bd, Yv, Gv;
Kv = function(e, t) {
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
Bd = function() {
};
Yv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Eo(fr.current);
    var i = null;
    switch (n) {
      case "input":
        o = ld(e, o), r = ld(e, r), i = [];
        break;
      case "select":
        o = yt({}, o, { value: void 0 }), r = yt({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ud(e, o), r = ud(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Pa);
    }
    fd(n, r);
    var s;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var l = o[c];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ps.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (l = o != null ? o[c] : void 0, r.hasOwnProperty(c) && a !== l && (a != null || l != null)) if (c === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ps.hasOwnProperty(c) ? (a != null && c === "onScroll" && it("scroll", e), i || l === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Gv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qi(e, t) {
  if (!ut) switch (e.tailMode) {
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
function Vt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function pb(e, t, n) {
  var r = t.pendingProps;
  switch (Bf(t), t.tag) {
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
      return Vt(t), null;
    case 1:
      return sn(t.type) && Ia(), Vt(t), null;
    case 3:
      return r = t.stateNode, Ei(), st(on), st(Gt), Gf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ml(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Gn !== null && (Yd(Gn), Gn = null))), Bd(e, t), Vt(t), null;
    case 5:
      Yf(t);
      var o = Eo(Fs.current);
      if (n = t.type, e !== null && t.stateNode != null) Yv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return Vt(t), null;
        }
        if (e = Eo(fr.current), Ml(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ar] = t, r[Ds] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              it("cancel", r), it("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              it("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < us.length; o++) it(us[o], r);
              break;
            case "source":
              it("error", r);
              break;
            case "img":
            case "image":
            case "link":
              it(
                "error",
                r
              ), it("load", r);
              break;
            case "details":
              it("toggle", r);
              break;
            case "input":
              lm(r, i), it("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, it("invalid", r);
              break;
            case "textarea":
              cm(r, i), it("invalid", r);
          }
          fd(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Il(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Il(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Ps.hasOwnProperty(s) && l != null && s === "onScroll" && it("scroll", r);
          }
          switch (n) {
            case "input":
              bl(r), am(r, i, !0);
              break;
            case "textarea":
              bl(r), um(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Pa);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = wy(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[ar] = t, e[Ds] = r, Kv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = pd(n, r), n) {
              case "dialog":
                it("cancel", e), it("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                it("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < us.length; o++) it(us[o], e);
                o = r;
                break;
              case "source":
                it("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                it(
                  "error",
                  e
                ), it("load", e), o = r;
                break;
              case "details":
                it("toggle", e), o = r;
                break;
              case "input":
                lm(e, r), o = ld(e, r), it("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = yt({}, r, { value: void 0 }), it("invalid", e);
                break;
              case "textarea":
                cm(e, r), o = ud(e, r), it("invalid", e);
                break;
              default:
                o = r;
            }
            fd(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Ty(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Cy(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Is(e, a) : typeof a == "number" && Is(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ps.hasOwnProperty(i) ? a != null && i === "onScroll" && it("scroll", e) : a != null && kf(e, i, a, s));
            }
            switch (n) {
              case "input":
                bl(e), am(e, r, !1);
                break;
              case "textarea":
                bl(e), um(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ro(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? pi(e, !!r.multiple, i, !1) : r.defaultValue != null && pi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Pa);
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
      return Vt(t), null;
    case 6:
      if (e && t.stateNode != null) Gv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = Eo(Fs.current), Eo(fr.current), Ml(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ar] = t, (i = r.nodeValue !== n) && (e = vn, e !== null)) switch (e.tag) {
            case 3:
              Il(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Il(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ar] = t, t.stateNode = r;
      }
      return Vt(t), null;
    case 13:
      if (st(mt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ut && yn !== null && t.mode & 1 && !(t.flags & 128)) fv(), ki(), t.flags |= 98560, i = !1;
        else if (i = Ml(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(V(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(V(317));
            i[ar] = t;
          } else ki(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Vt(t), i = !1;
        } else Gn !== null && (Yd(Gn), Gn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || mt.current & 1 ? It === 0 && (It = 3) : sp())), t.updateQueue !== null && (t.flags |= 4), Vt(t), null);
    case 4:
      return Ei(), Bd(e, t), e === null && Ls(t.stateNode.containerInfo), Vt(t), null;
    case 10:
      return Uf(t.type._context), Vt(t), null;
    case 17:
      return sn(t.type) && Ia(), Vt(t), null;
    case 19:
      if (st(mt), i = t.memoizedState, i === null) return Vt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Qi(i, !1);
      else {
        if (It !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = La(e), s !== null) {
            for (t.flags |= 128, Qi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return rt(mt, mt.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && bt() > Pi && (t.flags |= 128, r = !0, Qi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = La(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ut) return Vt(t), null;
        } else 2 * bt() - i.renderingStartTime > Pi && n !== 1073741824 && (t.flags |= 128, r = !0, Qi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = bt(), t.sibling = null, n = mt.current, rt(mt, r ? n & 1 | 2 : n & 1), t) : (Vt(t), null);
    case 22:
    case 23:
      return ip(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? mn & 1073741824 && (Vt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Vt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function mb(e, t) {
  switch (Bf(t), t.tag) {
    case 1:
      return sn(t.type) && Ia(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ei(), st(on), st(Gt), Gf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Yf(t), null;
    case 13:
      if (st(mt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        ki();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return st(mt), null;
    case 4:
      return Ei(), null;
    case 10:
      return Uf(t.type._context), null;
    case 22:
    case 23:
      return ip(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Al = !1, Yt = !1, hb = typeof WeakSet == "function" ? WeakSet : Set, te = null;
function ci(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    vt(e, t, r);
  }
  else n.current = null;
}
function Fd(e, t, n) {
  try {
    n();
  } catch (r) {
    vt(e, t, r);
  }
}
var Jm = !1;
function gb(e, t) {
  if (Cd = Ta, e = Jy(), zf(e)) {
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
        var s = 0, l = -1, a = -1, c = 0, f = 0, m = e, v = null;
        t: for (; ; ) {
          for (var d; m !== n || o !== 0 && m.nodeType !== 3 || (l = s + o), m !== i || r !== 0 && m.nodeType !== 3 || (a = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (d = m.firstChild) !== null; )
            v = m, m = d;
          for (; ; ) {
            if (m === e) break t;
            if (v === n && ++c === o && (l = s), v === i && ++f === r && (a = s), (d = m.nextSibling) !== null) break;
            m = v, v = m.parentNode;
          }
          m = d;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (kd = { focusedElem: e, selectionRange: n }, Ta = !1, te = t; te !== null; ) if (t = te, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, te = e;
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
            var b = x.memoizedProps, C = x.memoizedState, y = t.stateNode, h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? b : Kn(t.type, b), C);
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
          throw Error(V(163));
      }
    } catch (w) {
      vt(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, te = e;
      break;
    }
    te = t.return;
  }
  return x = Jm, Jm = !1, x;
}
function xs(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Fd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function dc(e, t) {
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
function _d(e) {
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
function Xv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Xv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ar], delete t[Ds], delete t[Rd], delete t[ZS], delete t[JS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function eh(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Pa));
  else if (r !== 4 && (e = e.child, e !== null)) for (Wd(e, t, n), e = e.sibling; e !== null; ) Wd(e, t, n), e = e.sibling;
}
function Ud(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ud(e, t, n), e = e.sibling; e !== null; ) Ud(e, t, n), e = e.sibling;
}
var Bt = null, Yn = !1;
function Br(e, t, n) {
  for (n = n.child; n !== null; ) qv(e, t, n), n = n.sibling;
}
function qv(e, t, n) {
  if (dr && typeof dr.onCommitFiberUnmount == "function") try {
    dr.onCommitFiberUnmount(rc, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Yt || ci(n, t);
    case 6:
      var r = Bt, o = Yn;
      Bt = null, Br(e, t, n), Bt = r, Yn = o, Bt !== null && (Yn ? (e = Bt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Bt.removeChild(n.stateNode));
      break;
    case 18:
      Bt !== null && (Yn ? (e = Bt, n = n.stateNode, e.nodeType === 8 ? Iu(e.parentNode, n) : e.nodeType === 1 && Iu(e, n), As(e)) : Iu(Bt, n.stateNode));
      break;
    case 4:
      r = Bt, o = Yn, Bt = n.stateNode.containerInfo, Yn = !0, Br(e, t, n), Bt = r, Yn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Yt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Fd(n, t, s), o = o.next;
        } while (o !== r);
      }
      Br(e, t, n);
      break;
    case 1:
      if (!Yt && (ci(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        vt(n, t, l);
      }
      Br(e, t, n);
      break;
    case 21:
      Br(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Yt = (r = Yt) || n.memoizedState !== null, Br(e, t, n), Yt = r) : Br(e, t, n);
      break;
    default:
      Br(e, t, n);
  }
}
function th(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hb()), t.forEach(function(r) {
      var o = Tb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function _n(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Bt = l.stateNode, Yn = !1;
            break e;
          case 3:
            Bt = l.stateNode.containerInfo, Yn = !0;
            break e;
          case 4:
            Bt = l.stateNode.containerInfo, Yn = !0;
            break e;
        }
        l = l.return;
      }
      if (Bt === null) throw Error(V(160));
      qv(i, s, o), Bt = null, Yn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (c) {
      vt(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Zv(t, e), t = t.sibling;
}
function Zv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (_n(t, e), tr(e), r & 4) {
        try {
          xs(3, e, e.return), dc(3, e);
        } catch (b) {
          vt(e, e.return, b);
        }
        try {
          xs(5, e, e.return);
        } catch (b) {
          vt(e, e.return, b);
        }
      }
      break;
    case 1:
      _n(t, e), tr(e), r & 512 && n !== null && ci(n, n.return);
      break;
    case 5:
      if (_n(t, e), tr(e), r & 512 && n !== null && ci(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Is(o, "");
        } catch (b) {
          vt(e, e.return, b);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && Sy(o, i), pd(l, s);
          var c = pd(l, i);
          for (s = 0; s < a.length; s += 2) {
            var f = a[s], m = a[s + 1];
            f === "style" ? Ty(o, m) : f === "dangerouslySetInnerHTML" ? Cy(o, m) : f === "children" ? Is(o, m) : kf(o, f, m, c);
          }
          switch (l) {
            case "input":
              ad(o, i);
              break;
            case "textarea":
              by(o, i);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var d = i.value;
              d != null ? pi(o, !!i.multiple, d, !1) : v !== !!i.multiple && (i.defaultValue != null ? pi(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : pi(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Ds] = i;
        } catch (b) {
          vt(e, e.return, b);
        }
      }
      break;
    case 6:
      if (_n(t, e), tr(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (b) {
          vt(e, e.return, b);
        }
      }
      break;
    case 3:
      if (_n(t, e), tr(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        As(t.containerInfo);
      } catch (b) {
        vt(e, e.return, b);
      }
      break;
    case 4:
      _n(t, e), tr(e);
      break;
    case 13:
      _n(t, e), tr(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (rp = bt())), r & 4 && th(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Yt = (c = Yt) || f, _n(t, e), Yt = c) : _n(t, e), tr(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !f && e.mode & 1) for (te = e, f = e.child; f !== null; ) {
          for (m = te = f; te !== null; ) {
            switch (v = te, d = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                xs(4, v, v.return);
                break;
              case 1:
                ci(v, v.return);
                var x = v.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (b) {
                    vt(r, n, b);
                  }
                }
                break;
              case 5:
                ci(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  rh(m);
                  continue;
                }
            }
            d !== null ? (d.return = v, te = d) : rh(m);
          }
          f = f.sibling;
        }
        e: for (f = null, m = e; ; ) {
          if (m.tag === 5) {
            if (f === null) {
              f = m;
              try {
                o = m.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = m.stateNode, a = m.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = ky("display", s));
              } catch (b) {
                vt(e, e.return, b);
              }
            }
          } else if (m.tag === 6) {
            if (f === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (b) {
              vt(e, e.return, b);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            f === m && (f = null), m = m.return;
          }
          f === m && (f = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      _n(t, e), tr(e), r & 4 && th(e);
      break;
    case 21:
      break;
    default:
      _n(
        t,
        e
      ), tr(e);
  }
}
function tr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Is(o, ""), r.flags &= -33);
          var i = eh(e);
          Ud(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = eh(e);
          Wd(e, l, s);
          break;
        default:
          throw Error(V(161));
      }
    } catch (a) {
      vt(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yb(e, t, n) {
  te = e, Jv(e);
}
function Jv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; te !== null; ) {
    var o = te, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Al;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Yt;
        l = Al;
        var c = Yt;
        if (Al = s, (Yt = a) && !c) for (te = o; te !== null; ) s = te, a = s.child, s.tag === 22 && s.memoizedState !== null ? oh(o) : a !== null ? (a.return = s, te = a) : oh(o);
        for (; i !== null; ) te = i, Jv(i), i = i.sibling;
        te = o, Al = l, Yt = c;
      }
      nh(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, te = i) : nh(e);
  }
}
function nh(e) {
  for (; te !== null; ) {
    var t = te;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Yt || dc(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Yt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Kn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Fm(t, i, r);
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
              Fm(t, s, n);
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
                var f = c.memoizedState;
                if (f !== null) {
                  var m = f.dehydrated;
                  m !== null && As(m);
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
            throw Error(V(163));
        }
        Yt || t.flags & 512 && _d(t);
      } catch (v) {
        vt(t, t.return, v);
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
function rh(e) {
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
function oh(e) {
  for (; te !== null; ) {
    var t = te;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            dc(4, t);
          } catch (a) {
            vt(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              vt(t, o, a);
            }
          }
          var i = t.return;
          try {
            _d(t);
          } catch (a) {
            vt(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            _d(t);
          } catch (a) {
            vt(t, s, a);
          }
      }
    } catch (a) {
      vt(t, t.return, a);
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
var vb = Math.ceil, Ba = Nr.ReactCurrentDispatcher, tp = Nr.ReactCurrentOwner, $n = Nr.ReactCurrentBatchConfig, Ne = 0, $t = null, Rt = null, _t = 0, mn = 0, ui = ao(0), It = 0, Hs = null, No = 0, fc = 0, np = 0, Ss = null, nn = null, rp = 0, Pi = 1 / 0, wr = null, Fa = !1, Hd = null, Jr = null, Ol = !1, Kr = null, _a = 0, bs = 0, Vd = null, ua = -1, da = 0;
function Jt() {
  return Ne & 6 ? bt() : ua !== -1 ? ua : ua = bt();
}
function eo(e) {
  return e.mode & 1 ? Ne & 2 && _t !== 0 ? _t & -_t : tb.transition !== null ? (da === 0 && (da = zy()), da) : (e = Xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hy(e.type)), e) : 1;
}
function Qn(e, t, n, r) {
  if (50 < bs) throw bs = 0, Vd = null, Error(V(185));
  nl(e, n, r), (!(Ne & 2) || e !== $t) && (e === $t && (!(Ne & 2) && (fc |= n), It === 4 && Hr(e, _t)), ln(e, r), n === 1 && Ne === 0 && !(t.mode & 1) && (Pi = bt() + 500, ac && co()));
}
function ln(e, t) {
  var n = e.callbackNode;
  tS(e, t);
  var r = ka(e, e === $t ? _t : 0);
  if (r === 0) n !== null && pm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && pm(n), t === 1) e.tag === 0 ? eb(ih.bind(null, e)) : cv(ih.bind(null, e)), QS(function() {
      !(Ne & 6) && co();
    }), n = null;
    else {
      switch (Dy(r)) {
        case 1:
          n = If;
          break;
        case 4:
          n = Ny;
          break;
        case 16:
          n = Ca;
          break;
        case 536870912:
          n = Ly;
          break;
        default:
          n = Ca;
      }
      n = l0(n, e0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function e0(e, t) {
  if (ua = -1, da = 0, Ne & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (vi() && e.callbackNode !== n) return null;
  var r = ka(e, e === $t ? _t : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Wa(e, r);
  else {
    t = r;
    var o = Ne;
    Ne |= 2;
    var i = n0();
    ($t !== e || _t !== t) && (wr = null, Pi = bt() + 500, Po(e, t));
    do
      try {
        bb();
        break;
      } catch (l) {
        t0(e, l);
      }
    while (!0);
    Wf(), Ba.current = i, Ne = o, Rt !== null ? t = 0 : ($t = null, _t = 0, t = It);
  }
  if (t !== 0) {
    if (t === 2 && (o = vd(e), o !== 0 && (r = o, t = Kd(e, o))), t === 1) throw n = Hs, Po(e, 0), Hr(e, r), ln(e, bt()), n;
    if (t === 6) Hr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !xb(o) && (t = Wa(e, r), t === 2 && (i = vd(e), i !== 0 && (r = i, t = Kd(e, i))), t === 1)) throw n = Hs, Po(e, 0), Hr(e, r), ln(e, bt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          bo(e, nn, wr);
          break;
        case 3:
          if (Hr(e, r), (r & 130023424) === r && (t = rp + 500 - bt(), 10 < t)) {
            if (ka(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Jt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ed(bo.bind(null, e, nn, wr), t);
            break;
          }
          bo(e, nn, wr);
          break;
        case 4:
          if (Hr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Xn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = bt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ed(bo.bind(null, e, nn, wr), r);
            break;
          }
          bo(e, nn, wr);
          break;
        case 5:
          bo(e, nn, wr);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return ln(e, bt()), e.callbackNode === n ? e0.bind(null, e) : null;
}
function Kd(e, t) {
  var n = Ss;
  return e.current.memoizedState.isDehydrated && (Po(e, t).flags |= 256), e = Wa(e, t), e !== 2 && (t = nn, nn = n, t !== null && Yd(t)), e;
}
function Yd(e) {
  nn === null ? nn = e : nn.push.apply(nn, e);
}
function xb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!qn(i(), o)) return !1;
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
function Hr(e, t) {
  for (t &= ~np, t &= ~fc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ih(e) {
  if (Ne & 6) throw Error(V(327));
  vi();
  var t = ka(e, 0);
  if (!(t & 1)) return ln(e, bt()), null;
  var n = Wa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vd(e);
    r !== 0 && (t = r, n = Kd(e, r));
  }
  if (n === 1) throw n = Hs, Po(e, 0), Hr(e, t), ln(e, bt()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, bo(e, nn, wr), ln(e, bt()), null;
}
function op(e, t) {
  var n = Ne;
  Ne |= 1;
  try {
    return e(t);
  } finally {
    Ne = n, Ne === 0 && (Pi = bt() + 500, ac && co());
  }
}
function Lo(e) {
  Kr !== null && Kr.tag === 0 && !(Ne & 6) && vi();
  var t = Ne;
  Ne |= 1;
  var n = $n.transition, r = Xe;
  try {
    if ($n.transition = null, Xe = 1, e) return e();
  } finally {
    Xe = r, $n.transition = n, Ne = t, !(Ne & 6) && co();
  }
}
function ip() {
  mn = ui.current, st(ui);
}
function Po(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, XS(n)), Rt !== null) for (n = Rt.return; n !== null; ) {
    var r = n;
    switch (Bf(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ia();
        break;
      case 3:
        Ei(), st(on), st(Gt), Gf();
        break;
      case 5:
        Yf(r);
        break;
      case 4:
        Ei();
        break;
      case 13:
        st(mt);
        break;
      case 19:
        st(mt);
        break;
      case 10:
        Uf(r.type._context);
        break;
      case 22:
      case 23:
        ip();
    }
    n = n.return;
  }
  if ($t = e, Rt = e = to(e.current, null), _t = mn = t, It = 0, Hs = null, np = fc = No = 0, nn = Ss = null, To !== null) {
    for (t = 0; t < To.length; t++) if (n = To[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    To = null;
  }
  return e;
}
function t0(e, t) {
  do {
    var n = Rt;
    try {
      if (Wf(), la.current = Da, za) {
        for (var r = ht.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        za = !1;
      }
      if (Oo = 0, Mt = Pt = ht = null, vs = !1, _s = 0, tp.current = null, n === null || n.return === null) {
        It = 1, Hs = t, Rt = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = _t, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, f = l, m = f.tag;
          if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = f.alternate;
            v ? (f.updateQueue = v.updateQueue, f.memoizedState = v.memoizedState, f.lanes = v.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var d = Km(s);
          if (d !== null) {
            d.flags &= -257, Ym(d, s, l, i, t), d.mode & 1 && Vm(i, c, t), t = d, a = c;
            var x = t.updateQueue;
            if (x === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Vm(i, c, t), sp();
              break e;
            }
            a = Error(V(426));
          }
        } else if (ut && l.mode & 1) {
          var C = Km(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Ym(C, s, l, i, t), Ff(Ri(a, l));
            break e;
          }
        }
        i = a = Ri(a, l), It !== 4 && (It = 2), Ss === null ? Ss = [i] : Ss.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = Dv(i, a, t);
              Bm(i, y);
              break e;
            case 1:
              l = a;
              var h = i.type, S = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (Jr === null || !Jr.has(S)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Bv(i, l, t);
                Bm(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      o0(n);
    } catch (E) {
      t = E, Rt === n && n !== null && (Rt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function n0() {
  var e = Ba.current;
  return Ba.current = Da, e === null ? Da : e;
}
function sp() {
  (It === 0 || It === 3 || It === 2) && (It = 4), $t === null || !(No & 268435455) && !(fc & 268435455) || Hr($t, _t);
}
function Wa(e, t) {
  var n = Ne;
  Ne |= 2;
  var r = n0();
  ($t !== e || _t !== t) && (wr = null, Po(e, t));
  do
    try {
      Sb();
      break;
    } catch (o) {
      t0(e, o);
    }
  while (!0);
  if (Wf(), Ne = n, Ba.current = r, Rt !== null) throw Error(V(261));
  return $t = null, _t = 0, It;
}
function Sb() {
  for (; Rt !== null; ) r0(Rt);
}
function bb() {
  for (; Rt !== null && !K1(); ) r0(Rt);
}
function r0(e) {
  var t = s0(e.alternate, e, mn);
  e.memoizedProps = e.pendingProps, t === null ? o0(e) : Rt = t, tp.current = null;
}
function o0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = mb(n, t), n !== null) {
        n.flags &= 32767, Rt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        It = 6, Rt = null;
        return;
      }
    } else if (n = pb(n, t, mn), n !== null) {
      Rt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Rt = t;
      return;
    }
    Rt = t = e;
  } while (t !== null);
  It === 0 && (It = 5);
}
function bo(e, t, n) {
  var r = Xe, o = $n.transition;
  try {
    $n.transition = null, Xe = 1, wb(e, t, n, r);
  } finally {
    $n.transition = o, Xe = r;
  }
  return null;
}
function wb(e, t, n, r) {
  do
    vi();
  while (Kr !== null);
  if (Ne & 6) throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (nS(e, i), e === $t && (Rt = $t = null, _t = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ol || (Ol = !0, l0(Ca, function() {
    return vi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = $n.transition, $n.transition = null;
    var s = Xe;
    Xe = 1;
    var l = Ne;
    Ne |= 4, tp.current = null, gb(e, n), Zv(n, e), WS(kd), Ta = !!Cd, kd = Cd = null, e.current = n, yb(n), Y1(), Ne = l, Xe = s, $n.transition = i;
  } else e.current = n;
  if (Ol && (Ol = !1, Kr = e, _a = o), i = e.pendingLanes, i === 0 && (Jr = null), Q1(n.stateNode), ln(e, bt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Fa) throw Fa = !1, e = Hd, Hd = null, e;
  return _a & 1 && e.tag !== 0 && vi(), i = e.pendingLanes, i & 1 ? e === Vd ? bs++ : (bs = 0, Vd = e) : bs = 0, co(), null;
}
function vi() {
  if (Kr !== null) {
    var e = Dy(_a), t = $n.transition, n = Xe;
    try {
      if ($n.transition = null, Xe = 16 > e ? 16 : e, Kr === null) var r = !1;
      else {
        if (e = Kr, Kr = null, _a = 0, Ne & 6) throw Error(V(331));
        var o = Ne;
        for (Ne |= 4, te = e.current; te !== null; ) {
          var i = te, s = i.child;
          if (te.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (te = c; te !== null; ) {
                  var f = te;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xs(8, f, i);
                  }
                  var m = f.child;
                  if (m !== null) m.return = f, te = m;
                  else for (; te !== null; ) {
                    f = te;
                    var v = f.sibling, d = f.return;
                    if (Xv(f), f === c) {
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
                xs(9, i, i.return);
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
                  dc(9, l);
              }
            } catch (E) {
              vt(l, l.return, E);
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
        if (Ne = o, co(), dr && typeof dr.onPostCommitFiberRoot == "function") try {
          dr.onPostCommitFiberRoot(rc, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Xe = n, $n.transition = t;
    }
  }
  return !1;
}
function sh(e, t, n) {
  t = Ri(n, t), t = Dv(e, t, 1), e = Zr(e, t, 1), t = Jt(), e !== null && (nl(e, 1, t), ln(e, t));
}
function vt(e, t, n) {
  if (e.tag === 3) sh(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      sh(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Jr === null || !Jr.has(r))) {
        e = Ri(n, e), e = Bv(t, e, 1), t = Zr(t, e, 1), e = Jt(), t !== null && (nl(t, 1, e), ln(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Cb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Jt(), e.pingedLanes |= e.suspendedLanes & n, $t === e && (_t & n) === n && (It === 4 || It === 3 && (_t & 130023424) === _t && 500 > bt() - rp ? Po(e, 0) : np |= n), ln(e, t);
}
function i0(e, t) {
  t === 0 && (e.mode & 1 ? (t = kl, kl <<= 1, !(kl & 130023424) && (kl = 4194304)) : t = 1);
  var n = Jt();
  e = Mr(e, t), e !== null && (nl(e, t, n), ln(e, n));
}
function kb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), i0(e, n);
}
function Tb(e, t) {
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
      throw Error(V(314));
  }
  r !== null && r.delete(t), i0(e, n);
}
var s0;
s0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || on.current) rn = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return rn = !1, fb(e, t, n);
    rn = !!(e.flags & 131072);
  }
  else rn = !1, ut && t.flags & 1048576 && uv(t, $a, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ca(e, t), e = t.pendingProps;
      var o = Ci(t, Gt.current);
      yi(t, n), o = Qf(null, t, r, e, o, n);
      var i = qf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, sn(r) ? (i = !0, Ma(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Vf(t), o.updater = uc, t.stateNode = o, o._reactInternals = t, Ad(t, r, e, n), t = Ld(null, t, r, !0, i, n)) : (t.tag = 0, ut && i && Df(t), Qt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ca(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Rb(r), e = Kn(r, e), o) {
          case 0:
            t = Nd(null, t, r, e, n);
            break e;
          case 1:
            t = Qm(null, t, r, e, n);
            break e;
          case 11:
            t = Gm(null, t, r, e, n);
            break e;
          case 14:
            t = Xm(null, t, r, Kn(r.type, e), n);
            break e;
        }
        throw Error(V(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Kn(r, o), Nd(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Kn(r, o), Qm(e, t, r, o, n);
    case 3:
      e: {
        if (Uv(t), e === null) throw Error(V(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, gv(e, t), Na(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Ri(Error(V(423)), t), t = qm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Ri(Error(V(424)), t), t = qm(e, t, r, n, o);
          break e;
        } else for (yn = qr(t.stateNode.containerInfo.firstChild), vn = t, ut = !0, Gn = null, n = mv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ki(), r === o) {
            t = jr(e, t, n);
            break e;
          }
          Qt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return yv(t), e === null && Md(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Td(r, o) ? s = null : i !== null && Td(r, i) && (t.flags |= 32), Wv(e, t), Qt(e, t, s, n), t.child;
    case 6:
      return e === null && Md(t), null;
    case 13:
      return Hv(e, t, n);
    case 4:
      return Kf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ti(t, null, r, n) : Qt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Kn(r, o), Gm(e, t, r, o, n);
    case 7:
      return Qt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, rt(Aa, r._currentValue), r._currentValue = s, i !== null) if (qn(i.value, s)) {
          if (i.children === o.children && !on.current) {
            t = jr(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Rr(-1, n & -n), a.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var f = c.pending;
                    f === null ? a.next = a : (a.next = f.next, f.next = a), c.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), jd(
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
            if (s = i.return, s === null) throw Error(V(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), jd(s, n, t), s = i.sibling;
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
        Qt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, yi(t, n), o = On(o), r = r(o), t.flags |= 1, Qt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Kn(r, t.pendingProps), o = Kn(r.type, o), Xm(e, t, r, o, n);
    case 15:
      return Fv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Kn(r, o), ca(e, t), t.tag = 1, sn(r) ? (e = !0, Ma(t)) : e = !1, yi(t, n), zv(t, r, o), Ad(t, r, o, n), Ld(null, t, r, !0, e, n);
    case 19:
      return Vv(e, t, n);
    case 22:
      return _v(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function l0(e, t) {
  return Oy(e, t);
}
function Eb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function jn(e, t, n, r) {
  return new Eb(e, t, n, r);
}
function lp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Rb(e) {
  if (typeof e == "function") return lp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ef) return 11;
    if (e === Rf) return 14;
  }
  return 2;
}
function to(e, t) {
  var n = e.alternate;
  return n === null ? (n = jn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function fa(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") lp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case ei:
      return Io(n.children, o, i, t);
    case Tf:
      s = 8, o |= 8;
      break;
    case rd:
      return e = jn(12, n, t, o | 2), e.elementType = rd, e.lanes = i, e;
    case od:
      return e = jn(13, n, t, o), e.elementType = od, e.lanes = i, e;
    case id:
      return e = jn(19, n, t, o), e.elementType = id, e.lanes = i, e;
    case yy:
      return pc(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case hy:
          s = 10;
          break e;
        case gy:
          s = 9;
          break e;
        case Ef:
          s = 11;
          break e;
        case Rf:
          s = 14;
          break e;
        case _r:
          s = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = jn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Io(e, t, n, r) {
  return e = jn(7, e, r, t), e.lanes = n, e;
}
function pc(e, t, n, r) {
  return e = jn(22, e, r, t), e.elementType = yy, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function zu(e, t, n) {
  return e = jn(6, e, null, t), e.lanes = n, e;
}
function Du(e, t, n) {
  return t = jn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Pb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vu(0), this.expirationTimes = vu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ap(e, t, n, r, o, i, s, l, a) {
  return e = new Pb(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = jn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vf(i), e;
}
function Ib(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function a0(e) {
  if (!e) return oo;
  e = e._reactInternals;
  e: {
    if (Wo(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (sn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (sn(n)) return av(e, n, t);
  }
  return t;
}
function c0(e, t, n, r, o, i, s, l, a) {
  return e = ap(n, r, !0, e, o, i, s, l, a), e.context = a0(null), n = e.current, r = Jt(), o = eo(n), i = Rr(r, o), i.callback = t ?? null, Zr(n, i, o), e.current.lanes = o, nl(e, o, r), ln(e, r), e;
}
function mc(e, t, n, r) {
  var o = t.current, i = Jt(), s = eo(o);
  return n = a0(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Zr(o, t, s), e !== null && (Qn(e, o, s, i), sa(e, o, s)), s;
}
function Ua(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function lh(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cp(e, t) {
  lh(e, t), (e = e.alternate) && lh(e, t);
}
function Mb() {
  return null;
}
var u0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function up(e) {
  this._internalRoot = e;
}
hc.prototype.render = up.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  mc(e, t, null, null);
};
hc.prototype.unmount = up.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lo(function() {
      mc(null, e, null, null);
    }), t[Ir] = null;
  }
};
function hc(e) {
  this._internalRoot = e;
}
hc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = _y();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ur.length && t !== 0 && t < Ur[n].priority; n++) ;
    Ur.splice(n, 0, e), n === 0 && Uy(e);
  }
};
function dp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function gc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ah() {
}
function jb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = Ua(s);
        i.call(c);
      };
    }
    var s = c0(t, r, e, 0, null, !1, !1, "", ah);
    return e._reactRootContainer = s, e[Ir] = s.current, Ls(e.nodeType === 8 ? e.parentNode : e), Lo(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var c = Ua(a);
      l.call(c);
    };
  }
  var a = ap(e, 0, !1, null, null, !1, !1, "", ah);
  return e._reactRootContainer = a, e[Ir] = a.current, Ls(e.nodeType === 8 ? e.parentNode : e), Lo(function() {
    mc(t, a, n, r);
  }), a;
}
function yc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = Ua(s);
        l.call(a);
      };
    }
    mc(t, s, e, o);
  } else s = jb(n, t, e, o, r);
  return Ua(s);
}
By = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cs(t.pendingLanes);
        n !== 0 && (Mf(t, n | 1), ln(t, bt()), !(Ne & 6) && (Pi = bt() + 500, co()));
      }
      break;
    case 13:
      Lo(function() {
        var r = Mr(e, 1);
        if (r !== null) {
          var o = Jt();
          Qn(r, e, 1, o);
        }
      }), cp(e, 1);
  }
};
jf = function(e) {
  if (e.tag === 13) {
    var t = Mr(e, 134217728);
    if (t !== null) {
      var n = Jt();
      Qn(t, e, 134217728, n);
    }
    cp(e, 134217728);
  }
};
Fy = function(e) {
  if (e.tag === 13) {
    var t = eo(e), n = Mr(e, t);
    if (n !== null) {
      var r = Jt();
      Qn(n, e, t, r);
    }
    cp(e, t);
  }
};
_y = function() {
  return Xe;
};
Wy = function(e, t) {
  var n = Xe;
  try {
    return Xe = e, t();
  } finally {
    Xe = n;
  }
};
hd = function(e, t, n) {
  switch (t) {
    case "input":
      if (ad(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = lc(r);
            if (!o) throw Error(V(90));
            xy(r), ad(r, o);
          }
        }
      }
      break;
    case "textarea":
      by(e, n);
      break;
    case "select":
      t = n.value, t != null && pi(e, !!n.multiple, t, !1);
  }
};
Py = op;
Iy = Lo;
var $b = { usingClientEntryPoint: !1, Events: [ol, oi, lc, Ey, Ry, op] }, qi = { findFiberByHostInstance: ko, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ab = { bundleType: qi.bundleType, version: qi.version, rendererPackageName: qi.rendererPackageName, rendererConfig: qi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Nr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = $y(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: qi.findFiberByHostInstance || Mb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nl.isDisabled && Nl.supportsFiber) try {
    rc = Nl.inject(Ab), dr = Nl;
  } catch {
  }
}
Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $b;
Cn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dp(t)) throw Error(V(200));
  return Ib(e, t, null, n);
};
Cn.createRoot = function(e, t) {
  if (!dp(e)) throw Error(V(299));
  var n = !1, r = "", o = u0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ap(e, 1, !1, null, null, n, !1, r, o), e[Ir] = t.current, Ls(e.nodeType === 8 ? e.parentNode : e), new up(t);
};
Cn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = $y(t), e = e === null ? null : e.stateNode, e;
};
Cn.flushSync = function(e) {
  return Lo(e);
};
Cn.hydrate = function(e, t, n) {
  if (!gc(t)) throw Error(V(200));
  return yc(null, e, t, !0, n);
};
Cn.hydrateRoot = function(e, t, n) {
  if (!dp(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = u0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = c0(t, null, e, 1, n ?? null, o, !1, i, s), e[Ir] = t.current, Ls(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new hc(t);
};
Cn.render = function(e, t, n) {
  if (!gc(t)) throw Error(V(200));
  return yc(null, e, t, !1, n);
};
Cn.unmountComponentAtNode = function(e) {
  if (!gc(e)) throw Error(V(40));
  return e._reactRootContainer ? (Lo(function() {
    yc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ir] = null;
    });
  }), !0) : !1;
};
Cn.unstable_batchedUpdates = op;
Cn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!gc(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return yc(e, t, n, !1, r);
};
Cn.version = "18.3.1-next-f1338f8080-20240426";
function d0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d0);
    } catch (e) {
      console.error(e);
    }
}
d0(), dy.exports = Cn;
var f0 = dy.exports, p0, ch = f0;
p0 = ch.createRoot, ch.hydrateRoot;
const Vs = {
  black: "#000",
  white: "#fff"
}, Yo = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Go = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Xo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Qo = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, qo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Zi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ob = {
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
function $r(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const pr = "$$material";
function Gd() {
  return Gd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Gd.apply(null, arguments);
}
function Nb(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Lb(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var zb = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Lb(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Nb(o);
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
}(), Kt = "-ms-", Ha = "-moz-", Be = "-webkit-", m0 = "comm", fp = "rule", pp = "decl", Db = "@import", h0 = "@keyframes", Bb = "@layer", Fb = Math.abs, vc = String.fromCharCode, _b = Object.assign;
function Wb(e, t) {
  return Ft(e, 0) ^ 45 ? (((t << 2 ^ Ft(e, 0)) << 2 ^ Ft(e, 1)) << 2 ^ Ft(e, 2)) << 2 ^ Ft(e, 3) : 0;
}
function g0(e) {
  return e.trim();
}
function Ub(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Fe(e, t, n) {
  return e.replace(t, n);
}
function Xd(e, t) {
  return e.indexOf(t);
}
function Ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ks(e, t, n) {
  return e.slice(t, n);
}
function sr(e) {
  return e.length;
}
function mp(e) {
  return e.length;
}
function Ll(e, t) {
  return t.push(e), e;
}
function Hb(e, t) {
  return e.map(t).join("");
}
var xc = 1, Ii = 1, y0 = 0, un = 0, Et = 0, Fi = "";
function Sc(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: xc, column: Ii, length: s, return: "" };
}
function Ji(e, t) {
  return _b(Sc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Vb() {
  return Et;
}
function Kb() {
  return Et = un > 0 ? Ft(Fi, --un) : 0, Ii--, Et === 10 && (Ii = 1, xc--), Et;
}
function xn() {
  return Et = un < y0 ? Ft(Fi, un++) : 0, Ii++, Et === 10 && (Ii = 1, xc++), Et;
}
function mr() {
  return Ft(Fi, un);
}
function pa() {
  return un;
}
function sl(e, t) {
  return Ks(Fi, e, t);
}
function Ys(e) {
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
function v0(e) {
  return xc = Ii = 1, y0 = sr(Fi = e), un = 0, [];
}
function x0(e) {
  return Fi = "", e;
}
function ma(e) {
  return g0(sl(un - 1, Qd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Yb(e) {
  for (; (Et = mr()) && Et < 33; )
    xn();
  return Ys(e) > 2 || Ys(Et) > 3 ? "" : " ";
}
function Gb(e, t) {
  for (; --t && xn() && !(Et < 48 || Et > 102 || Et > 57 && Et < 65 || Et > 70 && Et < 97); )
    ;
  return sl(e, pa() + (t < 6 && mr() == 32 && xn() == 32));
}
function Qd(e) {
  for (; xn(); )
    switch (Et) {
      case e:
        return un;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Qd(Et);
        break;
      case 40:
        e === 41 && Qd(e);
        break;
      case 92:
        xn();
        break;
    }
  return un;
}
function Xb(e, t) {
  for (; xn() && e + Et !== 57; )
    if (e + Et === 84 && mr() === 47)
      break;
  return "/*" + sl(t, un - 1) + "*" + vc(e === 47 ? e : xn());
}
function Qb(e) {
  for (; !Ys(mr()); )
    xn();
  return sl(e, un);
}
function qb(e) {
  return x0(ha("", null, null, null, [""], e = v0(e), 0, [0], e));
}
function ha(e, t, n, r, o, i, s, l, a) {
  for (var c = 0, f = 0, m = s, v = 0, d = 0, x = 0, b = 1, C = 1, y = 1, h = 0, S = "", w = o, E = i, k = r, R = S; C; )
    switch (x = h, h = xn()) {
      case 40:
        if (x != 108 && Ft(R, m - 1) == 58) {
          Xd(R += Fe(ma(h), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += ma(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Yb(x);
        break;
      case 92:
        R += Gb(pa() - 1, 7);
        continue;
      case 47:
        switch (mr()) {
          case 42:
          case 47:
            Ll(Zb(Xb(xn(), pa()), t, n), a);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * b:
        l[c++] = sr(R) * y;
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0;
          case 59 + f:
            y == -1 && (R = Fe(R, /\f/g, "")), d > 0 && sr(R) - m && Ll(d > 32 ? dh(R + ";", r, n, m - 1) : dh(Fe(R, " ", "") + ";", r, n, m - 2), a);
            break;
          case 59:
            R += ";";
          default:
            if (Ll(k = uh(R, t, n, c, f, o, l, S, w = [], E = [], m), i), h === 123)
              if (f === 0)
                ha(R, t, k, k, w, i, m, l, E);
              else
                switch (v === 99 && Ft(R, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ha(e, k, k, r && Ll(uh(e, k, k, 0, 0, o, l, S, o, w = [], m), E), o, E, m, l, r ? w : E);
                    break;
                  default:
                    ha(R, k, k, k, [""], E, 0, l, E);
                }
        }
        c = f = d = 0, b = y = 1, S = R = "", m = s;
        break;
      case 58:
        m = 1 + sr(R), d = x;
      default:
        if (b < 1) {
          if (h == 123)
            --b;
          else if (h == 125 && b++ == 0 && Kb() == 125)
            continue;
        }
        switch (R += vc(h), h * b) {
          case 38:
            y = f > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[c++] = (sr(R) - 1) * y, y = 1;
            break;
          case 64:
            mr() === 45 && (R += ma(xn())), v = mr(), f = m = sr(S = R += Qb(pa())), h++;
            break;
          case 45:
            x === 45 && sr(R) == 2 && (b = 0);
        }
    }
  return i;
}
function uh(e, t, n, r, o, i, s, l, a, c, f) {
  for (var m = o - 1, v = o === 0 ? i : [""], d = mp(v), x = 0, b = 0, C = 0; x < r; ++x)
    for (var y = 0, h = Ks(e, m + 1, m = Fb(b = s[x])), S = e; y < d; ++y)
      (S = g0(b > 0 ? v[y] + " " + h : Fe(h, /&\f/g, v[y]))) && (a[C++] = S);
  return Sc(e, t, n, o === 0 ? fp : l, a, c, f);
}
function Zb(e, t, n) {
  return Sc(e, t, n, m0, vc(Vb()), Ks(e, 2, -2), 0);
}
function dh(e, t, n, r) {
  return Sc(e, t, n, pp, Ks(e, 0, r), Ks(e, r + 1, -1), r);
}
function xi(e, t) {
  for (var n = "", r = mp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Jb(e, t, n, r) {
  switch (e.type) {
    case Bb:
      if (e.children.length) break;
    case Db:
    case pp:
      return e.return = e.return || e.value;
    case m0:
      return "";
    case h0:
      return e.return = e.value + "{" + xi(e.children, r) + "}";
    case fp:
      e.value = e.props.join(",");
  }
  return sr(n = xi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ew(e) {
  var t = mp(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function tw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function S0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var nw = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = mr(), o === 38 && i === 12 && (n[r] = 1), !Ys(i); )
    xn();
  return sl(t, un);
}, rw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ys(o)) {
      case 0:
        o === 38 && mr() === 12 && (n[r] = 1), t[r] += nw(un - 1, n, r);
        break;
      case 2:
        t[r] += ma(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = mr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += vc(o);
    }
  while (o = xn());
  return t;
}, ow = function(t, n) {
  return x0(rw(v0(t), n));
}, fh = /* @__PURE__ */ new WeakMap(), iw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !fh.get(r)) && !o) {
      fh.set(t, !0);
      for (var i = [], s = ow(n, i), l = r.props, a = 0, c = 0; a < s.length; a++)
        for (var f = 0; f < l.length; f++, c++)
          t.props[c] = i[a] ? s[a].replace(/&\f/g, l[f]) : l[f] + " " + s[a];
    }
  }
}, sw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function b0(e, t) {
  switch (Wb(e, t)) {
    case 5103:
      return Be + "print-" + e + e;
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
      return Be + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Be + e + Ha + e + Kt + e + e;
    case 6828:
    case 4268:
      return Be + e + Kt + e + e;
    case 6165:
      return Be + e + Kt + "flex-" + e + e;
    case 5187:
      return Be + e + Fe(e, /(\w+).+(:[^]+)/, Be + "box-$1$2" + Kt + "flex-$1$2") + e;
    case 5443:
      return Be + e + Kt + "flex-item-" + Fe(e, /flex-|-self/, "") + e;
    case 4675:
      return Be + e + Kt + "flex-line-pack" + Fe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Be + e + Kt + Fe(e, "shrink", "negative") + e;
    case 5292:
      return Be + e + Kt + Fe(e, "basis", "preferred-size") + e;
    case 6060:
      return Be + "box-" + Fe(e, "-grow", "") + Be + e + Kt + Fe(e, "grow", "positive") + e;
    case 4554:
      return Be + Fe(e, /([^-])(transform)/g, "$1" + Be + "$2") + e;
    case 6187:
      return Fe(Fe(Fe(e, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Fe(e, /(image-set\([^]*)/, Be + "$1$`$1");
    case 4968:
      return Fe(Fe(e, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + Kt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Fe(e, /(.+)-inline(.+)/, Be + "$1$2") + e;
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
      if (sr(e) - 1 - t > 6) switch (Ft(e, t + 1)) {
        case 109:
          if (Ft(e, t + 4) !== 45) break;
        case 102:
          return Fe(e, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + Ha + (Ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Xd(e, "stretch") ? b0(Fe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ft(e, t + 1) !== 115) break;
    case 6444:
      switch (Ft(e, sr(e) - 3 - (~Xd(e, "!important") && 10))) {
        case 107:
          return Fe(e, ":", ":" + Be) + e;
        case 101:
          return Fe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (Ft(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + Kt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ft(e, t + 11)) {
        case 114:
          return Be + e + Kt + Fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Be + e + Kt + Fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Be + e + Kt + Fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Be + e + Kt + e + e;
  }
  return e;
}
var lw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case pp:
      t.return = b0(t.value, t.length);
      break;
    case h0:
      return xi([Ji(t, {
        value: Fe(t.value, "@", "@" + Be)
      })], o);
    case fp:
      if (t.length) return Hb(t.props, function(i) {
        switch (Ub(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return xi([Ji(t, {
              props: [Fe(i, /:(read-\w+)/, ":" + Ha + "$1")]
            })], o);
          case "::placeholder":
            return xi([Ji(t, {
              props: [Fe(i, /:(plac\w+)/, ":" + Be + "input-$1")]
            }), Ji(t, {
              props: [Fe(i, /:(plac\w+)/, ":" + Ha + "$1")]
            }), Ji(t, {
              props: [Fe(i, /:(plac\w+)/, Kt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, aw = [lw], cw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var C = b.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || aw, i = {}, s, l = [];
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
  var a, c = [iw, sw];
  {
    var f, m = [Jb, tw(function(b) {
      f.insert(b);
    })], v = ew(c.concat(o, m)), d = function(C) {
      return xi(qb(C), v);
    };
    a = function(C, y, h, S) {
      f = h, d(C ? C + "{" + y.styles + "}" : y.styles), S && (x.inserted[y.name] = !0);
    };
  }
  var x = {
    key: n,
    sheet: new zb({
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
}, w0 = { exports: {} }, Qe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At = typeof Symbol == "function" && Symbol.for, hp = At ? Symbol.for("react.element") : 60103, gp = At ? Symbol.for("react.portal") : 60106, bc = At ? Symbol.for("react.fragment") : 60107, wc = At ? Symbol.for("react.strict_mode") : 60108, Cc = At ? Symbol.for("react.profiler") : 60114, kc = At ? Symbol.for("react.provider") : 60109, Tc = At ? Symbol.for("react.context") : 60110, yp = At ? Symbol.for("react.async_mode") : 60111, Ec = At ? Symbol.for("react.concurrent_mode") : 60111, Rc = At ? Symbol.for("react.forward_ref") : 60112, Pc = At ? Symbol.for("react.suspense") : 60113, uw = At ? Symbol.for("react.suspense_list") : 60120, Ic = At ? Symbol.for("react.memo") : 60115, Mc = At ? Symbol.for("react.lazy") : 60116, dw = At ? Symbol.for("react.block") : 60121, fw = At ? Symbol.for("react.fundamental") : 60117, pw = At ? Symbol.for("react.responder") : 60118, mw = At ? Symbol.for("react.scope") : 60119;
function Tn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case hp:
        switch (e = e.type, e) {
          case yp:
          case Ec:
          case bc:
          case Cc:
          case wc:
          case Pc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Tc:
              case Rc:
              case Mc:
              case Ic:
              case kc:
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
function C0(e) {
  return Tn(e) === Ec;
}
Qe.AsyncMode = yp;
Qe.ConcurrentMode = Ec;
Qe.ContextConsumer = Tc;
Qe.ContextProvider = kc;
Qe.Element = hp;
Qe.ForwardRef = Rc;
Qe.Fragment = bc;
Qe.Lazy = Mc;
Qe.Memo = Ic;
Qe.Portal = gp;
Qe.Profiler = Cc;
Qe.StrictMode = wc;
Qe.Suspense = Pc;
Qe.isAsyncMode = function(e) {
  return C0(e) || Tn(e) === yp;
};
Qe.isConcurrentMode = C0;
Qe.isContextConsumer = function(e) {
  return Tn(e) === Tc;
};
Qe.isContextProvider = function(e) {
  return Tn(e) === kc;
};
Qe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hp;
};
Qe.isForwardRef = function(e) {
  return Tn(e) === Rc;
};
Qe.isFragment = function(e) {
  return Tn(e) === bc;
};
Qe.isLazy = function(e) {
  return Tn(e) === Mc;
};
Qe.isMemo = function(e) {
  return Tn(e) === Ic;
};
Qe.isPortal = function(e) {
  return Tn(e) === gp;
};
Qe.isProfiler = function(e) {
  return Tn(e) === Cc;
};
Qe.isStrictMode = function(e) {
  return Tn(e) === wc;
};
Qe.isSuspense = function(e) {
  return Tn(e) === Pc;
};
Qe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === bc || e === Ec || e === Cc || e === wc || e === Pc || e === uw || typeof e == "object" && e !== null && (e.$$typeof === Mc || e.$$typeof === Ic || e.$$typeof === kc || e.$$typeof === Tc || e.$$typeof === Rc || e.$$typeof === fw || e.$$typeof === pw || e.$$typeof === mw || e.$$typeof === dw);
};
Qe.typeOf = Tn;
w0.exports = Qe;
var hw = w0.exports, k0 = hw, gw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, yw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, T0 = {};
T0[k0.ForwardRef] = gw;
T0[k0.Memo] = yw;
var vw = !0;
function E0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var vp = function(t, n, r) {
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
  vw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, xp = function(t, n, r) {
  vp(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function xw(e) {
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
var Sw = {
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
}, bw = /[A-Z]|^ms/g, ww = /_EMO_([^_]+?)_([^]*?)_EMO_/g, R0 = function(t) {
  return t.charCodeAt(1) === 45;
}, ph = function(t) {
  return t != null && typeof t != "boolean";
}, Bu = /* @__PURE__ */ S0(function(e) {
  return R0(e) ? e : e.replace(bw, "-$&").toLowerCase();
}), mh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ww, function(r, o, i) {
          return lr = {
            name: o,
            styles: i,
            next: lr
          }, o;
        });
  }
  return Sw[t] !== 1 && !R0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Gs(e, t, n) {
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
        return lr = {
          name: o.name,
          styles: o.styles,
          next: lr
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            lr = {
              name: s.name,
              styles: s.styles,
              next: lr
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return Cw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = lr, c = n(e);
        return lr = a, Gs(e, t, c);
      }
      break;
    }
  }
  var f = n;
  if (t == null)
    return f;
  var m = t[f];
  return m !== void 0 ? m : f;
}
function Cw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Gs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : ph(l) && (r += Bu(i) + ":" + mh(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          ph(s[a]) && (r += Bu(i) + ":" + mh(i, s[a]) + ";");
      else {
        var c = Gs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Bu(i) + ":" + c + ";";
            break;
          }
          default:
            r += i + "{" + c + "}";
        }
      }
    }
  return r;
}
var hh = /label:\s*([^\s;{]+)\s*(;|$)/g, lr;
function ll(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  lr = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Gs(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Gs(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  hh.lastIndex = 0;
  for (var c = "", f; (f = hh.exec(o)) !== null; )
    c += "-" + f[1];
  var m = xw(o) + c;
  return {
    name: m,
    styles: o,
    next: lr
  };
}
var kw = function(t) {
  return t();
}, P0 = xa.useInsertionEffect ? xa.useInsertionEffect : !1, I0 = P0 || kw, gh = P0 || p.useLayoutEffect, M0 = /* @__PURE__ */ p.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ cw({
    key: "css"
  }) : null
);
M0.Provider;
var Sp = function(t) {
  return /* @__PURE__ */ p.forwardRef(function(n, r) {
    var o = p.useContext(M0);
    return t(n, o, r);
  });
}, al = /* @__PURE__ */ p.createContext({}), bp = {}.hasOwnProperty, qd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Tw = function(t, n) {
  var r = {};
  for (var o in n)
    bp.call(n, o) && (r[o] = n[o]);
  return r[qd] = t, r;
}, Ew = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return vp(n, r, o), I0(function() {
    return xp(n, r, o);
  }), null;
}, Rw = /* @__PURE__ */ Sp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[qd], i = [r], s = "";
  typeof e.className == "string" ? s = E0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = ll(i, void 0, p.useContext(al));
  s += t.key + "-" + l.name;
  var a = {};
  for (var c in e)
    bp.call(e, c) && c !== "css" && c !== qd && (a[c] = e[c]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(Ew, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ p.createElement(o, a));
}), Pw = Rw, yh = function(t, n) {
  var r = arguments;
  if (n == null || !bp.call(n, "css"))
    return p.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Pw, i[1] = Tw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return p.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(yh || (yh = {}));
var Iw = /* @__PURE__ */ Sp(function(e, t) {
  var n = e.styles, r = ll([n], void 0, p.useContext(al)), o = p.useRef();
  return gh(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), gh(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && xp(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Xs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ll(t);
}
function cl() {
  var e = Xs.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Mw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jw = /* @__PURE__ */ S0(
  function(e) {
    return Mw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $w = jw, Aw = function(t) {
  return t !== "theme";
}, vh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? $w : Aw;
}, xh = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Ow = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return vp(n, r, o), I0(function() {
    return xp(n, r, o);
  }), null;
}, Nw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = xh(t, n, r), a = l || vh(o), c = !a("as");
  return function() {
    var f = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      m.push.apply(m, f);
    else {
      var v = f[0];
      m.push(v[0]);
      for (var d = f.length, x = 1; x < d; x++)
        m.push(f[x], v[x]);
    }
    var b = Sp(function(C, y, h) {
      var S = c && C.as || o, w = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var R in C)
          k[R] = C[R];
        k.theme = p.useContext(al);
      }
      typeof C.className == "string" ? w = E0(y.registered, E, C.className) : C.className != null && (w = C.className + " ");
      var T = ll(m.concat(E), y.registered, k);
      w += y.key + "-" + T.name, s !== void 0 && (w += " " + s);
      var A = c && l === void 0 ? vh(S) : a, N = {};
      for (var I in C)
        c && I === "as" || A(I) && (N[I] = C[I]);
      return N.className = w, h && (N.ref = h), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(Ow, {
        cache: y,
        serialized: T,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ p.createElement(S, N));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = m, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(C, y) {
      var h = e(C, Gd({}, n, y, {
        shouldForwardProp: xh(b, y, !0)
      }));
      return h.apply(void 0, m);
    }, b;
  };
}, Lw = [
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
], Zd = Nw.bind(null);
Lw.forEach(function(e) {
  Zd[e] = Zd(e);
});
function zw(e) {
  return e == null || Object.keys(e).length === 0;
}
function j0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(zw(o) ? n : o) : t;
  return /* @__PURE__ */ u.jsx(Iw, {
    styles: r
  });
}
function $0(e, t) {
  return Zd(e, t);
}
function Dw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Sh = [];
function no(e) {
  return Sh[0] = e, ll(Sh);
}
var A0 = { exports: {} }, Ze = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wp = Symbol.for("react.transitional.element"), Cp = Symbol.for("react.portal"), jc = Symbol.for("react.fragment"), $c = Symbol.for("react.strict_mode"), Ac = Symbol.for("react.profiler"), Oc = Symbol.for("react.consumer"), Nc = Symbol.for("react.context"), Lc = Symbol.for("react.forward_ref"), zc = Symbol.for("react.suspense"), Dc = Symbol.for("react.suspense_list"), Bc = Symbol.for("react.memo"), Fc = Symbol.for("react.lazy"), Bw = Symbol.for("react.view_transition"), Fw = Symbol.for("react.client.reference");
function Dn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case wp:
        switch (e = e.type, e) {
          case jc:
          case Ac:
          case $c:
          case zc:
          case Dc:
          case Bw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Nc:
              case Lc:
              case Fc:
              case Bc:
                return e;
              case Oc:
                return e;
              default:
                return t;
            }
        }
      case Cp:
        return t;
    }
  }
}
Ze.ContextConsumer = Oc;
Ze.ContextProvider = Nc;
Ze.Element = wp;
Ze.ForwardRef = Lc;
Ze.Fragment = jc;
Ze.Lazy = Fc;
Ze.Memo = Bc;
Ze.Portal = Cp;
Ze.Profiler = Ac;
Ze.StrictMode = $c;
Ze.Suspense = zc;
Ze.SuspenseList = Dc;
Ze.isContextConsumer = function(e) {
  return Dn(e) === Oc;
};
Ze.isContextProvider = function(e) {
  return Dn(e) === Nc;
};
Ze.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wp;
};
Ze.isForwardRef = function(e) {
  return Dn(e) === Lc;
};
Ze.isFragment = function(e) {
  return Dn(e) === jc;
};
Ze.isLazy = function(e) {
  return Dn(e) === Fc;
};
Ze.isMemo = function(e) {
  return Dn(e) === Bc;
};
Ze.isPortal = function(e) {
  return Dn(e) === Cp;
};
Ze.isProfiler = function(e) {
  return Dn(e) === Ac;
};
Ze.isStrictMode = function(e) {
  return Dn(e) === $c;
};
Ze.isSuspense = function(e) {
  return Dn(e) === zc;
};
Ze.isSuspenseList = function(e) {
  return Dn(e) === Dc;
};
Ze.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === jc || e === Ac || e === $c || e === zc || e === Dc || typeof e == "object" && e !== null && (e.$$typeof === Fc || e.$$typeof === Bc || e.$$typeof === Nc || e.$$typeof === Oc || e.$$typeof === Lc || e.$$typeof === Fw || e.getModuleId !== void 0);
};
Ze.typeOf = Dn;
A0.exports = Ze;
var O0 = A0.exports;
function kr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function N0(e) {
  if (/* @__PURE__ */ p.isValidElement(e) || O0.isValidElementType(e) || !kr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = N0(e[n]);
  }), t;
}
function Wt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return kr(e) && kr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ p.isValidElement(t[o]) || O0.isValidElementType(t[o]) ? r[o] = t[o] : kr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && kr(e[o]) ? r[o] = Wt(e[o], t[o], n) : n.clone ? r[o] = kr(t[o]) ? N0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const _w = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function L0(e) {
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
  } = e, i = _w(t), s = Object.keys(i);
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
  function f(d) {
    return s.indexOf(d) + 1 < s.length ? c(d, s[s.indexOf(d) + 1]) : l(d);
  }
  function m(d) {
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
    only: f,
    not: m,
    unit: n,
    internal_mediaKeys: v,
    ...o
  };
}
const bh = /min-width:\s*([0-9.]+)/;
function wh(e, t) {
  if (!e.containerQueries || !Ww(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(bh)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(bh)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function Ww(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function z0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Uw(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Hw(e) {
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
const Vw = {
  borderRadius: 4
};
function D0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function Si(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return Qw(t) ? t : qw(e) ? Mi(t) : n && r ? Gw(e, t) : n !== r ? Mi(t) : Zw(e, t);
}
function Kw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Mi(e[t]);
  return r;
}
function Yw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Mi(e[n]));
  return t;
}
function Gw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Mi(t[r]);
  return e;
}
function Xw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Qw(e) {
  return typeof e != "object" || e === null;
}
function qw(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Mi(e) {
  return Xw(e) ? Array.isArray(e) ? Kw(e) : Yw(e) : e;
}
function Zw(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = Si(e[n], t[n]) : e[n] = Mi(t[n]));
  return e;
}
const Jw = {}, _c = {
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
}, Va = L0({
  values: _c
}), eC = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : _c[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function io(e, t, n) {
  const r = {};
  return Wc(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : Si(r, l);
  });
}
function Wc(e, t, n, r) {
  if (t ?? (t = Jw), Array.isArray(n)) {
    const o = t.breakpoints ?? Va;
    for (let i = 0; i < n.length; i += 1)
      Fu(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? Va, i = o.values ?? _c;
    for (const s in n)
      if (z0(o.keys, s)) {
        const l = Uw(t.containerQueries ? t : eC, s);
        l && Fu(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        Fu(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function Fu(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function B0(e = Va) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function Jd(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    D0(t[o]) && delete t[o];
  }
  return t;
}
function tC(e, ...t) {
  const r = [B0(e), ...t].reduce((o, i) => Wt(o, i), {});
  return Jd(e, r);
}
function nC(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function _u(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || nC(t, n), i = Object.keys(o);
  if (i.length === 0)
    return t;
  let s;
  return i.reduce((l, a, c) => {
    if (Array.isArray(t))
      l[a] = t[c] != null ? t[c] : t[s], s = c;
    else if (typeof t == "object" && t) {
      const f = t;
      l[a] = f[a] != null ? f[a] : f[s], s = a;
    } else
      l[a] = t;
    return l;
  }, {});
}
function rC(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (z0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function se(e) {
  if (typeof e != "string")
    throw new Error($r(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function F0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Uc(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Uc(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = Ch(e.vars, o, r);
    if (i != null)
      return i;
  }
  return Ch(e, o, r);
}
function Ch(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : se(s)}`;
    return r == null ? void 0 : r[l];
  }
  return o;
}
function Ct(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, c = Uc(a, r) || {};
    return io(s, l, (m) => {
      const v = F0(c, o, m, t);
      return n === !1 ? v : {
        [n]: v
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const oC = {
  internal_cache: {}
}, Ka = {
  m: "margin",
  p: "padding"
}, kh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Th = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Qs = {};
for (const e in Ka)
  Qs[e] = [Ka[e]];
for (const e in Ka)
  for (const t in kh) {
    const n = Ka[e], r = kh[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Qs[e + t] = o;
  }
for (const e in Th)
  Qs[e] = Qs[Th[e]];
const kp = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Tp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...kp, ...Tp];
function ul(e, t, n, r) {
  const o = Uc(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Hc(e) {
  return ul(e, "spacing", 8);
}
function zo(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Eh = [""];
function _0(e, t) {
  var i;
  const n = e.theme ?? oC, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Hc(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = Qs[s] ?? (Eh[0] = s, Eh), a = e[s];
    Wc(o, e.theme, a, (c, f) => {
      const m = c ? o[c] : o;
      for (let v = 0; v < l.length; v += 1)
        m[l[v]] = zo(r, f);
    });
  }
  return o;
}
function Ep(e) {
  return _0(e, kp);
}
Ep.propTypes = {};
Ep.filterProps = kp;
const kt = Ep;
function Rp(e) {
  return _0(e, Tp);
}
Rp.propTypes = {};
Rp.filterProps = Tp;
const Tt = Rp;
function W0(e = 8, t = Hc({
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
function Vc(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && Si(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Mn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Bn(e, t) {
  return Ct({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const iC = Bn("border", Mn), sC = Bn("borderTop", Mn), lC = Bn("borderRight", Mn), aC = Bn("borderBottom", Mn), cC = Bn("borderLeft", Mn), uC = Bn("borderColor"), dC = Bn("borderTopColor"), fC = Bn("borderRightColor"), pC = Bn("borderBottomColor"), mC = Bn("borderLeftColor"), hC = Bn("outline", Mn), gC = Bn("outlineColor"), Kc = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ul(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: zo(t, r)
    });
    return io(e, e.borderRadius, n);
  }
  return null;
};
Kc.propTypes = {};
Kc.filterProps = ["borderRadius"];
Vc(iC, sC, lC, aC, cC, uC, dC, fC, pC, mC, Kc, hC, gC);
const Yc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ul(e.theme, "spacing", 8), n = (r) => ({
      gap: zo(t, r)
    });
    return io(e, e.gap, n);
  }
  return null;
};
Yc.propTypes = {};
Yc.filterProps = ["gap"];
const Gc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ul(e.theme, "spacing", 8), n = (r) => ({
      columnGap: zo(t, r)
    });
    return io(e, e.columnGap, n);
  }
  return null;
};
Gc.propTypes = {};
Gc.filterProps = ["columnGap"];
const Xc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ul(e.theme, "spacing", 8), n = (r) => ({
      rowGap: zo(t, r)
    });
    return io(e, e.rowGap, n);
  }
  return null;
};
Xc.propTypes = {};
Xc.filterProps = ["rowGap"];
const yC = Ct({
  prop: "gridColumn"
}), vC = Ct({
  prop: "gridRow"
}), xC = Ct({
  prop: "gridAutoFlow"
}), SC = Ct({
  prop: "gridAutoColumns"
}), bC = Ct({
  prop: "gridAutoRows"
}), wC = Ct({
  prop: "gridTemplateColumns"
}), CC = Ct({
  prop: "gridTemplateRows"
}), kC = Ct({
  prop: "gridTemplateAreas"
}), TC = Ct({
  prop: "gridArea"
});
Vc(Yc, Gc, Xc, yC, vC, xC, SC, bC, wC, CC, kC, TC);
function bi(e, t) {
  return t === "grey" ? t : e;
}
const EC = Ct({
  prop: "color",
  themeKey: "palette",
  transform: bi
}), RC = Ct({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: bi
}), PC = Ct({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: bi
});
Vc(EC, RC, PC);
const IC = _c;
function gn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const MC = Ct({
  prop: "width",
  transform: gn
}), Pp = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || IC[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: gn(n)
      };
    };
    return io(e, e.maxWidth, t);
  }
  return null;
};
Pp.filterProps = ["maxWidth"];
const jC = Ct({
  prop: "minWidth",
  transform: gn
}), $C = Ct({
  prop: "height",
  transform: gn
}), AC = Ct({
  prop: "maxHeight",
  transform: gn
}), OC = Ct({
  prop: "minHeight",
  transform: gn
});
Ct({
  prop: "size",
  cssProperty: "width",
  transform: gn
});
Ct({
  prop: "size",
  cssProperty: "height",
  transform: gn
});
const NC = Ct({
  prop: "boxSizing"
});
Vc(MC, Pp, jC, $C, AC, OC, NC);
const Qc = {
  // borders
  border: {
    themeKey: "borders",
    transform: Mn
  },
  borderTop: {
    themeKey: "borders",
    transform: Mn
  },
  borderRight: {
    themeKey: "borders",
    transform: Mn
  },
  borderBottom: {
    themeKey: "borders",
    transform: Mn
  },
  borderLeft: {
    themeKey: "borders",
    transform: Mn
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
    transform: Mn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Kc
  },
  // palette
  color: {
    themeKey: "palette",
    transform: bi
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: bi
  },
  backgroundColor: {
    themeKey: "palette",
    transform: bi
  },
  // spacing
  p: {
    style: Tt
  },
  pt: {
    style: Tt
  },
  pr: {
    style: Tt
  },
  pb: {
    style: Tt
  },
  pl: {
    style: Tt
  },
  px: {
    style: Tt
  },
  py: {
    style: Tt
  },
  padding: {
    style: Tt
  },
  paddingTop: {
    style: Tt
  },
  paddingRight: {
    style: Tt
  },
  paddingBottom: {
    style: Tt
  },
  paddingLeft: {
    style: Tt
  },
  paddingX: {
    style: Tt
  },
  paddingY: {
    style: Tt
  },
  paddingInline: {
    style: Tt
  },
  paddingInlineStart: {
    style: Tt
  },
  paddingInlineEnd: {
    style: Tt
  },
  paddingBlock: {
    style: Tt
  },
  paddingBlockStart: {
    style: Tt
  },
  paddingBlockEnd: {
    style: Tt
  },
  m: {
    style: kt
  },
  mt: {
    style: kt
  },
  mr: {
    style: kt
  },
  mb: {
    style: kt
  },
  ml: {
    style: kt
  },
  mx: {
    style: kt
  },
  my: {
    style: kt
  },
  margin: {
    style: kt
  },
  marginTop: {
    style: kt
  },
  marginRight: {
    style: kt
  },
  marginBottom: {
    style: kt
  },
  marginLeft: {
    style: kt
  },
  marginX: {
    style: kt
  },
  marginY: {
    style: kt
  },
  marginInline: {
    style: kt
  },
  marginInlineStart: {
    style: kt
  },
  marginInlineEnd: {
    style: kt
  },
  marginBlock: {
    style: kt
  },
  marginBlockStart: {
    style: kt
  },
  marginBlockEnd: {
    style: kt
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
    style: Yc
  },
  rowGap: {
    style: Xc
  },
  columnGap: {
    style: Gc
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
    transform: gn
  },
  maxWidth: {
    style: Pp
  },
  minWidth: {
    transform: gn
  },
  height: {
    transform: gn
  },
  maxHeight: {
    transform: gn
  },
  minHeight: {
    transform: gn
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
}, LC = {};
function zC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = LC,
      nested: o
    } = t, i = r.unstable_sxConfig ?? Qc, s = {
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
      const f = r.breakpoints ?? Va, m = B0(f);
      for (const v in c) {
        const d = DC(c[v], r);
        if (d != null) {
          if (typeof d != "object") {
            Rh(m, v, d, r, i);
            continue;
          }
          if (i[v]) {
            Rh(m, v, d, r, i);
            continue;
          }
          rC(f, d) ? Wc(m, t.theme, d, (x, b) => {
            m[x][v] = b;
          }) : (s.sx = d, m[v] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": wh(r, Jd(f, m))
      } : wh(r, Jd(f, m));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const Do = zC();
function Rh(e, t, n, r, o) {
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
    Si(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: c
  } = i, f = Uc(r, s);
  Wc(e, r, n, (m, v) => {
    const d = F0(f, c, v, t);
    a === !1 ? Si(m ? e[m] : e, d) : m ? e[m][a] = d : e[a] = d;
  });
}
function DC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function BC(e, t) {
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
function qc(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = L0(n), a = W0(o);
  let c = Wt({
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
      ...Vw,
      ...i
    }
  }, s);
  return c = Hw(c), c.applyStyles = BC, c = t.reduce((f, m) => Wt(f, m), c), c.unstable_sxConfig = {
    ...Qc,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, c.unstable_sx = function(m) {
    return Do({
      sx: m,
      theme: this
    });
  }, c.internal_cache = {}, c;
}
function FC(e) {
  return Object.keys(e).length === 0;
}
function Ip(e = null) {
  const t = p.useContext(al);
  return !t || FC(t) ? e : t;
}
const _C = qc();
function Zc(e = _C) {
  return Ip(e);
}
function Wu(e) {
  const t = no(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function U0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Zc(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Wu(typeof s == "function" ? s(o) : s)) : i = Wu(i)), /* @__PURE__ */ u.jsx(j0, {
    styles: i
  });
}
const Ph = (e) => e, WC = () => {
  let e = Ph;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ph;
    }
  };
}, H0 = WC();
function V0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = V0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function J() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = V0(e)) && (r && (r += " "), r += t);
  return r;
}
function UC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = $0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Do);
  return /* @__PURE__ */ p.forwardRef(function(a, c) {
    const f = Zc(n), {
      className: m,
      component: v = "div",
      ...d
    } = a;
    return /* @__PURE__ */ u.jsx(i, {
      as: v,
      ref: c,
      className: J(m, o ? o(r) : r),
      theme: t && f[t] || f,
      ...d
    });
  });
}
const HC = {
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
  const r = HC[t];
  return r ? `${n}-${r}` : `${H0.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = de(e, o, n);
  }), r;
}
function K0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: no(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = no(o.style));
  }), r;
}
const VC = qc();
function Uu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ro(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function KC(e) {
  return e ? (t, n) => n[e] : null;
}
function YC(e, t, n) {
  e.theme = D0(e.theme) ? n : e.theme[t] || e.theme;
}
function ga(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => ga(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? Ro(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? Ro(no(s), n) : s;
    }
    return Y0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? Ro(no(r.style), n) : r.style : n ? Ro(no(r), n) : r;
}
function Y0(e, t, n = [], r = void 0) {
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
    }), n.push(r ? Ro(no(l.style(o)), r) : l.style(o))) : n.push(r ? Ro(no(l.style), r) : l.style);
  }
  return n;
}
function G0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = VC,
    rootShouldForwardProp: r = Uu,
    slotShouldForwardProp: o = Uu
  } = e;
  function i(l) {
    YC(l, t, n);
  }
  return (l, a = {}) => {
    Dw(l, (k) => k.filter((R) => R !== Do));
    const {
      name: c,
      slot: f,
      skipVariantsResolver: m,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = KC(QC(f)),
      ...x
    } = a, b = c && c.startsWith("Mui") || f ? "components" : "custom", C = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), y = v || !1;
    let h = Uu;
    f === "Root" || f === "root" ? h = r : f ? h = o : XC(l) && (h = void 0);
    const S = $0(l, {
      shouldForwardProp: h,
      label: GC(),
      ...x
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(T) {
          return ga(T, k, T.theme.modularCssLayers ? b : void 0);
        };
      if (kr(k)) {
        const R = K0(k);
        return function(A) {
          return R.variants ? ga(A, R, A.theme.modularCssLayers ? b : void 0) : A.theme.modularCssLayers ? Ro(R.style, b) : R.style;
        };
      }
      return k;
    }, E = (...k) => {
      const R = [], T = k.map(w), A = [];
      if (R.push(i), c && d && A.push(function($) {
        var L, M;
        const j = (M = (L = $.theme.components) == null ? void 0 : L[c]) == null ? void 0 : M.styleOverrides;
        if (!j)
          return null;
        const O = {};
        for (const z in j)
          O[z] = ga($, j[z], $.theme.modularCssLayers ? "theme" : void 0);
        return d($, O);
      }), c && !C && A.push(function($) {
        var O, L;
        const P = $.theme, j = (L = (O = P == null ? void 0 : P.components) == null ? void 0 : O[c]) == null ? void 0 : L.variants;
        return j ? Y0($, j, [], $.theme.modularCssLayers ? "theme" : void 0) : null;
      }), y || A.push(Do), Array.isArray(T[0])) {
        const g = T.shift(), $ = new Array(R.length).fill(""), P = new Array(A.length).fill("");
        let j;
        j = [...$, ...g, ...P], j.raw = [...$, ...g.raw, ...P], R.unshift(j);
      }
      const N = [...R, ...T, ...A], I = S(...N);
      return l.muiName && (I.muiName = l.muiName), I;
    };
    return S.withConfig && (E.withConfig = S.withConfig), E;
  };
}
function GC(e, t) {
  return void 0;
}
function XC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function QC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const qC = G0();
function qs(e, t, n = !1) {
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
              r[i][c] = qs(s[c], l[c], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = J(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function ZC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : qs(t.components[n].defaultProps, r);
}
function JC(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Zc(r);
  return o && (i = i[o] || i), ZC({
    theme: i,
    name: n,
    props: t
  });
}
const gt = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
function e2(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Mp(e, t = 0, n = 1) {
  return e2(e, t, n);
}
function t2(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function so(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return so(t2(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error($r(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error($r(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const n2 = (e) => {
  const t = so(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ds = (e, t) => {
  try {
    return n2(e);
  } catch {
    return e;
  }
};
function Jc(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function X0(e) {
  e = so(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (c, f = (c + n / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Jc({
    type: l,
    values: a
  });
}
function ef(e) {
  e = so(e);
  let t = e.type === "hsl" || e.type === "hsla" ? so(X0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function r2(e, t) {
  const n = ef(e), r = ef(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Yr(e, t) {
  return e = so(e), t = Mp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Jc(e);
}
function mo(e, t, n) {
  try {
    return Yr(e, t);
  } catch {
    return e;
  }
}
function eu(e, t) {
  if (e = so(e), t = Mp(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Jc(e);
}
function Ye(e, t, n) {
  try {
    return eu(e, t);
  } catch {
    return e;
  }
}
function tu(e, t) {
  if (e = so(e), t = Mp(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Jc(e);
}
function Ge(e, t, n) {
  try {
    return tu(e, t);
  } catch {
    return e;
  }
}
function tf(e, t = 0.15) {
  return ef(e) > 0.5 ? eu(e, t) : tu(e, t);
}
function zl(e, t, n) {
  try {
    return tf(e, t);
  } catch {
    return e;
  }
}
const Q0 = /* @__PURE__ */ p.createContext(null);
function jp() {
  return p.useContext(Q0);
}
const o2 = typeof Symbol == "function" && Symbol.for, i2 = o2 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function s2(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function l2(e) {
  const {
    children: t,
    theme: n
  } = e, r = jp(), o = p.useMemo(() => {
    const i = r === null ? {
      ...n
    } : s2(r, n);
    return i != null && (i[i2] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ u.jsx(Q0.Provider, {
    value: o,
    children: t
  });
}
const q0 = /* @__PURE__ */ p.createContext();
function a2({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(q0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const dl = () => p.useContext(q0) ?? !1, Z0 = /* @__PURE__ */ p.createContext(void 0);
function c2({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ u.jsx(Z0.Provider, {
    value: e,
    children: t
  });
}
function u2(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? qs(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? qs(o, r, t.components.mergeClassNameAndStyle) : r;
}
function d2({
  props: e,
  name: t
}) {
  const n = p.useContext(Z0);
  return u2({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Ih = 0;
function f2(e) {
  const [t, n] = p.useState(e), r = e || t;
  return p.useEffect(() => {
    t == null && (Ih += 1, n(`mui-${Ih}`));
  }, [t]), r;
}
const p2 = {
  ...xa
}, Mh = p2.useId;
function Ar(e) {
  if (Mh !== void 0) {
    const t = Mh();
    return e ?? t;
  }
  return f2(e);
}
function m2(e) {
  const t = Ip(), n = Ar() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, gt(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ u.jsx(U0, {
    styles: o
  }) : null;
}
const jh = {};
function $h(e, t, n, r = !1) {
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
function J0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Ip(jh), i = jp() || jh, s = $h(r, o, n), l = $h(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", c = m2(s);
  return /* @__PURE__ */ u.jsx(l2, {
    theme: l,
    children: /* @__PURE__ */ u.jsx(al.Provider, {
      value: s,
      children: /* @__PURE__ */ u.jsx(a2, {
        value: a,
        children: /* @__PURE__ */ u.jsxs(c2, {
          value: r ? s[r].components : s.components,
          children: [c, t]
        })
      })
    })
  });
}
const Ah = {
  theme: void 0
};
function h2(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Ah.theme = o.theme, i = K0(e(Ah)), t = i, n = o.theme), i;
  };
}
const $p = "mode", Ap = "color-scheme", g2 = "data-color-scheme";
function y2(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = $p,
    colorSchemeStorageKey: i = Ap,
    attribute: s = g2,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let c = "", f = s;
  if (s === "class" && (f = ".%s"), s === "data" && (f = "[data-%s]"), f.startsWith(".")) {
    const v = f.substring(1);
    c += `${l}.classList.remove('${v}'.replace('%s', light), '${v}'.replace('%s', dark));
      ${l}.classList.add('${v}'.replace('%s', colorScheme));`;
  }
  const m = f.match(/\[([^[\]]+)\]/);
  if (m) {
    const [v, d] = m[1].split("=");
    d || (c += `${l}.removeAttribute('${v}'.replace('%s', light));
      ${l}.removeAttribute('${v}'.replace('%s', dark));`), c += `
      ${l}.setAttribute('${v}'.replace('%s', colorScheme), ${d ? `${d}.replace('%s', colorScheme)` : '""'});`;
  } else f !== ".%s" && (c += `${l}.setAttribute('${f}', colorScheme);`);
  return /* @__PURE__ */ u.jsx("script", {
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
function v2() {
}
const x2 = ({
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
      return v2;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function Hu() {
}
function Oh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ex(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function S2(e) {
  return ex(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function b2(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = $p,
    colorSchemeStorageKey: s = Ap,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = x2,
    noSsr: c = !1
  } = e, f = o.join(","), m = o.length > 1, v = p.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), d = p.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), x = p.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [b, C] = p.useState(() => {
    const T = (v == null ? void 0 : v.get(t)) || t, A = (d == null ? void 0 : d.get(n)) || n, N = (x == null ? void 0 : x.get(r)) || r;
    return {
      mode: T,
      systemMode: Oh(T),
      lightColorScheme: A,
      darkColorScheme: N
    };
  }), [y, h] = p.useState(c || !m);
  p.useEffect(() => {
    h(!0);
  }, []);
  const S = S2(b), w = p.useCallback((T) => {
    C((A) => {
      if (T === A.mode)
        return A;
      const N = T ?? t;
      return v == null || v.set(N), {
        ...A,
        mode: N,
        systemMode: Oh(N)
      };
    });
  }, [v, t]), E = p.useCallback((T) => {
    T ? typeof T == "string" ? T && !f.includes(T) ? console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`) : C((A) => {
      const N = {
        ...A
      };
      return ex(A, (I) => {
        I === "light" && (d == null || d.set(T), N.lightColorScheme = T), I === "dark" && (x == null || x.set(T), N.darkColorScheme = T);
      }), N;
    }) : C((A) => {
      const N = {
        ...A
      }, I = T.light === null ? n : T.light, g = T.dark === null ? r : T.dark;
      return I && (f.includes(I) ? (N.lightColorScheme = I, d == null || d.set(I)) : console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`)), g && (f.includes(g) ? (N.darkColorScheme = g, x == null || x.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), N;
    }) : C((A) => (d == null || d.set(n), x == null || x.set(r), {
      ...A,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [f, d, x, n, r]), k = p.useCallback((T) => {
    b.mode === "system" && C((A) => {
      const N = T != null && T.matches ? "dark" : "light";
      return A.systemMode === N ? A : {
        ...A,
        systemMode: N
      };
    });
  }, [b.mode]), R = p.useRef(k);
  return R.current = k, p.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const T = (...N) => R.current(...N), A = window.matchMedia("(prefers-color-scheme: dark)");
    return A.addListener(T), T(A), () => {
      A.removeListener(T);
    };
  }, [m]), p.useEffect(() => {
    if (m) {
      const T = (v == null ? void 0 : v.subscribe((I) => {
        (!I || ["light", "dark", "system"].includes(I)) && w(I || t);
      })) || Hu, A = (d == null ? void 0 : d.subscribe((I) => {
        (!I || f.match(I)) && E({
          light: I
        });
      })) || Hu, N = (x == null ? void 0 : x.subscribe((I) => {
        (!I || f.match(I)) && E({
          dark: I
        });
      })) || Hu;
      return () => {
        T(), A(), N();
      };
    }
  }, [E, w, f, t, l, m, v, d, x]), {
    ...b,
    mode: y ? b.mode : void 0,
    systemMode: y ? b.systemMode : void 0,
    colorScheme: y ? S : void 0,
    setMode: w,
    setColorScheme: E
  };
}
const w2 = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function C2(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = $p,
    colorSchemeStorageKey: o = Ap,
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
  }, c = /* @__PURE__ */ p.createContext(void 0), f = () => p.useContext(c) || a, m = {}, v = {};
  function d(y) {
    var ze, Se, Me, dt;
    const {
      children: h,
      theme: S,
      modeStorageKey: w = r,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: k = i,
      storageManager: R,
      storageWindow: T = typeof window > "u" ? void 0 : window,
      documentNode: A = typeof document > "u" ? void 0 : document,
      colorSchemeNode: N = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: I = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: $ = "system",
      forceThemeRerender: P = !1,
      noSsr: j
    } = y, O = p.useRef(!1), L = jp(), M = p.useContext(c), z = !!M && !I, B = p.useMemo(() => S || (typeof n == "function" ? n() : n), [S]), W = B[t], _ = W || B, {
      colorSchemes: Q = m,
      components: K = v,
      cssVarPrefix: Z
    } = _, G = Object.keys(Q).filter((ne) => !!Q[ne]).join(","), X = p.useMemo(() => G.split(","), [G]), U = typeof s == "string" ? s : s.light, re = typeof s == "string" ? s : s.dark, le = Q[U] && Q[re] ? $ : ((Se = (ze = Q[_.defaultColorScheme]) == null ? void 0 : ze.palette) == null ? void 0 : Se.mode) || ((Me = _.palette) == null ? void 0 : Me.mode), {
      mode: ke,
      setMode: ye,
      systemMode: ve,
      lightColorScheme: oe,
      darkColorScheme: Le,
      colorScheme: _e,
      setColorScheme: Ee
    } = b2({
      supportedColorSchemes: X,
      defaultLightColorScheme: U,
      defaultDarkColorScheme: re,
      modeStorageKey: w,
      colorSchemeStorageKey: E,
      defaultMode: le,
      storageManager: R,
      storageWindow: T,
      noSsr: j
    });
    let $e = ke, ue = _e;
    z && ($e = M.mode, ue = M.colorScheme);
    let je = ue || _.defaultColorScheme;
    _.vars && !P && (je = _.defaultColorScheme);
    const Ve = p.useMemo(() => {
      var Oe;
      const ne = ((Oe = _.generateThemeVars) == null ? void 0 : Oe.call(_)) || _.vars, be = {
        ..._,
        components: K,
        colorSchemes: Q,
        cssVarPrefix: Z,
        vars: ne
      };
      if (typeof be.generateSpacing == "function" && (be.spacing = be.generateSpacing()), je) {
        const ft = Q[je];
        ft && typeof ft == "object" && Object.keys(ft).forEach((Te) => {
          ft[Te] && typeof ft[Te] == "object" ? be[Te] = {
            ...be[Te],
            ...ft[Te]
          } : be[Te] = ft[Te];
        });
      }
      return l ? l(be) : be;
    }, [_, je, K, Q, Z]), Ae = _.colorSchemeSelector;
    gt(() => {
      if (ue && N && Ae && Ae !== "media") {
        const ne = Ae;
        let be = Ae;
        if (ne === "class" && (be = ".%s"), ne === "data" && (be = "[data-%s]"), ne != null && ne.startsWith("data-") && !ne.includes("%s") && (be = `[${ne}="%s"]`), be.startsWith("."))
          N.classList.remove(...X.map((Oe) => be.substring(1).replace("%s", Oe))), N.classList.add(be.substring(1).replace("%s", ue));
        else {
          const Oe = be.replace("%s", ue).match(/\[([^\]]+)\]/);
          if (Oe) {
            const [ft, Te] = Oe[1].split("=");
            Te || X.forEach((Zn) => {
              N.removeAttribute(ft.replace(ue, Zn));
            }), N.setAttribute(ft, Te ? Te.replace(/"|'/g, "") : "");
          } else
            N.setAttribute(be, ue);
        }
      }
    }, [ue, Ae, N, X]), p.useEffect(() => {
      let ne;
      if (k && O.current && A) {
        const be = A.createElement("style");
        be.appendChild(A.createTextNode(w2)), A.head.appendChild(be), window.getComputedStyle(A.body), ne = setTimeout(() => {
          A.head.removeChild(be);
        }, 1);
      }
      return () => {
        clearTimeout(ne);
      };
    }, [ue, k, A]), p.useEffect(() => (O.current = !0, () => {
      O.current = !1;
    }), []);
    const Ke = p.useMemo(() => ({
      allColorSchemes: X,
      colorScheme: ue,
      darkColorScheme: Le,
      lightColorScheme: oe,
      mode: $e,
      setColorScheme: Ee,
      setMode: ye,
      systemMode: ve
    }), [X, ue, Le, oe, $e, Ee, ye, ve, Ve.colorSchemeSelector]);
    let We = !0;
    (g || _.cssVariables === !1 || z && (L == null ? void 0 : L.cssVarPrefix) === Z) && (We = !1);
    const et = /* @__PURE__ */ u.jsxs(p.Fragment, {
      children: [/* @__PURE__ */ u.jsx(J0, {
        themeId: W ? t : void 0,
        theme: Ve,
        children: h
      }), We && /* @__PURE__ */ u.jsx(j0, {
        styles: ((dt = Ve.generateStyleSheets) == null ? void 0 : dt.call(Ve)) || []
      })]
    });
    return z ? et : /* @__PURE__ */ u.jsx(c.Provider, {
      value: Ke,
      children: et
    });
  }
  const x = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: f,
    getInitColorSchemeScript: (y) => y2({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...y
    })
  };
}
function k2(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const T2 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Nh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (T2.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, E2 = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, R2 = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Vu(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return E2(
    e,
    (l, a, c) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const f = `--${n ? `${n}-` : ""}${l.join("-")}`, m = R2(l, a);
        Object.assign(o, {
          [f]: m
        }), Nh(i, l, `var(${f})`, c), Nh(s, l, `var(${f}, ${m})`, c);
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
function P2(e, t = {}) {
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
    vars: f,
    css: m,
    varsWithDefaults: v
  } = Vu(c, t);
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
    } = Vu(E, t);
    d = Wt(d, T), x[w] = {
      css: R,
      vars: k
    };
  }), b) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: k
    } = Vu(b, t);
    d = Wt(d, k), x[a] = {
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
        ...f
      };
      return Object.entries(x).forEach(([, {
        vars: E
      }]) => {
        w = Wt(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      var A, N;
      const w = [], E = e.defaultColorScheme || "light";
      function k(I, g) {
        Object.keys(g).length && w.push(typeof I == "string" ? {
          [I]: {
            ...g
          }
        } : I);
      }
      k(n(void 0, {
        ...m
      }), m);
      const {
        [E]: R,
        ...T
      } = x;
      if (R) {
        const {
          css: I
        } = R, g = (N = (A = s[E]) == null ? void 0 : A.palette) == null ? void 0 : N.mode, $ = !r && g ? {
          colorScheme: g,
          ...I
        } : {
          ...I
        };
        k(n(E, {
          ...$
        }), $);
      }
      return Object.entries(T).forEach(([I, {
        css: g
      }]) => {
        var j, O;
        const $ = (O = (j = s[I]) == null ? void 0 : j.palette) == null ? void 0 : O.mode, P = !r && $ ? {
          colorScheme: $,
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
function I2(e) {
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
function Ku(e, t) {
  var n, r, o;
  return /* @__PURE__ */ p.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const M2 = qc(), j2 = qC("div", {
  name: "MuiStack",
  slot: "Root"
});
function $2(e) {
  return JC({
    props: e,
    name: "MuiStack",
    defaultTheme: M2
  });
}
function A2(e, t) {
  const n = p.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ p.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const O2 = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], N2 = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...io({
      theme: t
    }, _u({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Hc(t), o = Object.keys(t.breakpoints.values).reduce((a, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (a[c] = !0), a), {}), i = _u({
      values: e.direction,
      base: o
    }), s = _u({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, c, f) => {
      if (!i[a]) {
        const v = c > 0 ? i[f[c - 1]] : "column";
        i[a] = v;
      }
    }), n = Wt(n, io({
      theme: t
    }, s, (a, c) => e.useFlexGap ? {
      gap: zo(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${O2(c ? i[c] : e.direction)}`]: zo(r, a)
      }
    }));
  }
  return n = tC(t.breakpoints, n), n;
};
function L2(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = j2,
    useThemeProps: n = $2,
    componentName: r = "MuiStack"
  } = e, o = () => fe({
    root: ["root"]
  }, (a) => de(r, a), {}), i = t(N2);
  return /* @__PURE__ */ p.forwardRef(function(a, c) {
    const f = n(a), {
      component: m = "div",
      direction: v = "column",
      spacing: d = 0,
      divider: x,
      children: b,
      className: C,
      useFlexGap: y = !1,
      ...h
    } = f, S = {
      direction: v,
      spacing: d,
      useFlexGap: y
    }, w = o();
    return /* @__PURE__ */ u.jsx(i, {
      as: m,
      ownerState: S,
      ref: c,
      className: J(w.root, C),
      ...h,
      children: x ? A2(b, x) : b
    });
  });
}
function tx() {
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
      paper: Vs.white,
      default: Vs.white
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
const nx = tx();
function rx() {
  return {
    text: {
      primary: Vs.white,
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
      active: Vs.white,
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
const nf = rx();
function Lh(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = tu(e.main, o) : t === "dark" && (e.dark = eu(e.main, i)));
}
function zh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function z2(e = "light") {
  return e === "dark" ? {
    main: Xo[200],
    light: Xo[50],
    dark: Xo[400]
  } : {
    main: Xo[700],
    light: Xo[400],
    dark: Xo[800]
  };
}
function D2(e = "light") {
  return e === "dark" ? {
    main: Go[200],
    light: Go[50],
    dark: Go[400]
  } : {
    main: Go[500],
    light: Go[300],
    dark: Go[700]
  };
}
function B2(e = "light") {
  return e === "dark" ? {
    main: Yo[500],
    light: Yo[300],
    dark: Yo[700]
  } : {
    main: Yo[700],
    light: Yo[400],
    dark: Yo[800]
  };
}
function F2(e = "light") {
  return e === "dark" ? {
    main: Qo[400],
    light: Qo[300],
    dark: Qo[700]
  } : {
    main: Qo[700],
    light: Qo[500],
    dark: Qo[900]
  };
}
function _2(e = "light") {
  return e === "dark" ? {
    main: qo[400],
    light: qo[300],
    dark: qo[700]
  } : {
    main: qo[800],
    light: qo[500],
    dark: qo[900]
  };
}
function W2(e = "light") {
  return e === "dark" ? {
    main: Zi[400],
    light: Zi[300],
    dark: Zi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Zi[500],
    dark: Zi[900]
  };
}
function U2(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Op(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || z2(t), l = e.secondary || D2(t), a = e.error || B2(t), c = e.info || F2(t), f = e.success || _2(t), m = e.warning || W2(t);
  function v(C) {
    return o ? U2(C) : r2(C, nf.text.primary) >= n ? nf.text.primary : nx.text.primary;
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
      throw new Error($r(11, y ? ` (${y})` : "", h));
    if (typeof C.main != "string")
      throw new Error($r(12, y ? ` (${y})` : "", JSON.stringify(C.main)));
    return o ? (zh(o, C, "light", S, r), zh(o, C, "dark", w, r)) : (Lh(C, "light", S, r), Lh(C, "dark", w, r)), C.contrastText || (C.contrastText = v(C.main)), C;
  };
  let x;
  return t === "light" ? x = tx() : t === "dark" && (x = rx()), Wt({
    // A collection of common colors.
    common: {
      ...Vs
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
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Ob,
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
function H2(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function V2(e, t) {
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
function K2(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Dh = {
  textTransform: "uppercase"
}, Bh = '"Roboto", "Helvetica", "Arial", sans-serif';
function ox(e, t) {
  const {
    fontFamily: n = Bh,
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
    pxToRem: f,
    ...m
  } = typeof t == "function" ? t(e) : t, v = r / 14, d = f || ((C) => `${C / a * v}rem`), x = (C, y, h, S, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: d(y),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Bh ? {
      letterSpacing: `${K2(S / y)}em`
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
    button: x(s, 14, 1.75, 0.4, Dh),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, Dh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Wt({
    htmlFontSize: a,
    pxToRem: d,
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
const Y2 = 0.2, G2 = 0.14, X2 = 0.12;
function ct(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Y2})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${G2})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${X2})`].join(",");
}
const Q2 = ["none", ct(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ct(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ct(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ct(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ct(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ct(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ct(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ct(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ct(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ct(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ct(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ct(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ct(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ct(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ct(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ct(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ct(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ct(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ct(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ct(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ct(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ct(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ct(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ct(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], q2 = ["all"], Z2 = {}, J2 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ek = {
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
function Fh(e) {
  return `${Math.round(e)}ms`;
}
function tk(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function nk(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...J2,
    ...t.easing
  }, r = {
    ...ek,
    ...t.duration
  }, o = (s = q2, l = Z2) => {
    const {
      duration: a = r.standard,
      easing: c = n.easeInOut,
      delay: f = 0,
      ...m
    } = l;
    return (Array.isArray(s) ? s : [s]).map((v) => `${v} ${typeof a == "string" ? a : Fh(a)} ${c} ${typeof f == "string" ? f : Fh(f)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: tk,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const rk = {};
function ok(e = rk) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const ik = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function sk(e) {
  return kr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ix(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !sk(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : kr(l) && (r[s] = {
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
function _h(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const lk = (e) => {
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
function ak(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Yr(t, lk(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${_h(n)})` : tu(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${_h(n)})` : eu(t, n);
    }
  });
}
function rf(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    motion: s = {},
    transitions: l = {},
    typography: a = {},
    shape: c,
    colorSpace: f,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error($r(22));
  const v = Op({
    ...i,
    colorSpace: f
  }), d = qc(e);
  let x = Wt(d, {
    mixins: V2(d.breakpoints, r),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Q2.slice(),
    typography: ox(v, a),
    motion: ok(s),
    transitions: nk(l),
    zIndex: {
      ...ik
    }
  });
  return x = Wt(x, m), x = t.reduce((b, C) => Wt(b, C), x), delete x.transitions.reducedMotion, x.unstable_sxConfig = {
    ...Qc,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, x.unstable_sx = function(C) {
    return Do({
      sx: C,
      theme: this
    });
  }, x.toRuntimeSource = ix, ak(x), x;
}
function of(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ck = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = of(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function sx(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function lx(e) {
  return e === "dark" ? ck : [];
}
function uk(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = Op({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...sx(s.mode),
      ...n
    },
    overlays: r || lx(s.mode),
    ...i
  };
}
function dk(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const fk = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], pk = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return fk(e.cssVarPrefix).forEach((l) => {
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
function mk(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function fs(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : X0(e);
}
function xr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ds(fs(e[t])));
}
function hk(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const nr = (e) => {
  try {
    return e();
  } catch {
  }
}, gk = (e = "mui") => k2(e);
function Yu(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = uk({
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
  } = rf({
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
      ...sx(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || lx(i)
  }, l;
}
function yk(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = dk,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...f
  } = e, m = Object.keys(n)[0], v = r || (n.light && m !== "light" ? "light" : m), d = gk(i), {
    [v]: x,
    light: b,
    dark: C,
    ...y
  } = n, h = {
    ...y
  };
  let S = x;
  if ((v === "dark" && !("dark" in n) || v === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error($r(21, v));
  let w;
  s && (w = "oklch");
  const E = Yu(w, h, S, f, v);
  b && !h.light && Yu(w, h, b, void 0, "light"), C && !h.dark && Yu(w, h, C, void 0, "dark");
  let k = {
    defaultColorScheme: v,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: d,
    colorSchemes: h,
    font: {
      ...H2(E.typography),
      ...E.font
    },
    spacing: hk(f.spacing)
  };
  Object.keys(k.colorSchemes).forEach((I) => {
    const g = k.colorSchemes[I].palette, $ = (j) => {
      const O = j.split("-"), L = O[1], M = O[2];
      return d(j, g[L][M]);
    };
    g.mode === "light" && (F(g.common, "background", "#fff"), F(g.common, "onBackground", "#000")), g.mode === "dark" && (F(g.common, "background", "#000"), F(g.common, "onBackground", "#fff"));
    function P(j, O, L) {
      if (w) {
        let M;
        return j === mo && (M = `transparent ${((1 - L) * 100).toFixed(0)}%`), j === Ye && (M = `#000 ${(L * 100).toFixed(0)}%`), j === Ge && (M = `#fff ${(L * 100).toFixed(0)}%`), `color-mix(in ${w}, ${O}, ${M})`;
      }
      return j(O, L);
    }
    if (mk(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      F(g.Alert, "errorColor", P(Ye, s ? d("palette-error-light") : g.error.light, 0.6)), F(g.Alert, "infoColor", P(Ye, s ? d("palette-info-light") : g.info.light, 0.6)), F(g.Alert, "successColor", P(Ye, s ? d("palette-success-light") : g.success.light, 0.6)), F(g.Alert, "warningColor", P(Ye, s ? d("palette-warning-light") : g.warning.light, 0.6)), F(g.Alert, "errorFilledBg", $("palette-error-main")), F(g.Alert, "infoFilledBg", $("palette-info-main")), F(g.Alert, "successFilledBg", $("palette-success-main")), F(g.Alert, "warningFilledBg", $("palette-warning-main")), F(g.Alert, "errorFilledColor", nr(() => g.getContrastText(g.error.main))), F(g.Alert, "infoFilledColor", nr(() => g.getContrastText(g.info.main))), F(g.Alert, "successFilledColor", nr(() => g.getContrastText(g.success.main))), F(g.Alert, "warningFilledColor", nr(() => g.getContrastText(g.warning.main))), F(g.Alert, "errorStandardBg", P(Ge, s ? d("palette-error-light") : g.error.light, 0.9)), F(g.Alert, "infoStandardBg", P(Ge, s ? d("palette-info-light") : g.info.light, 0.9)), F(g.Alert, "successStandardBg", P(Ge, s ? d("palette-success-light") : g.success.light, 0.9)), F(g.Alert, "warningStandardBg", P(Ge, s ? d("palette-warning-light") : g.warning.light, 0.9)), F(g.Alert, "errorIconColor", $("palette-error-main")), F(g.Alert, "infoIconColor", $("palette-info-main")), F(g.Alert, "successIconColor", $("palette-success-main")), F(g.Alert, "warningIconColor", $("palette-warning-main")), F(g.AppBar, "defaultBg", $("palette-grey-100")), F(g.Avatar, "defaultBg", $("palette-grey-400")), F(g.Button, "inheritContainedBg", $("palette-grey-300")), F(g.Button, "inheritContainedHoverBg", $("palette-grey-A100")), F(g.Chip, "defaultBorder", $("palette-grey-400")), F(g.Chip, "defaultAvatarColor", $("palette-grey-700")), F(g.Chip, "defaultIconColor", $("palette-grey-700")), F(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(g.LinearProgress, "primaryBg", P(Ge, s ? d("palette-primary-main") : g.primary.main, 0.62)), F(g.LinearProgress, "secondaryBg", P(Ge, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), F(g.LinearProgress, "errorBg", P(Ge, s ? d("palette-error-main") : g.error.main, 0.62)), F(g.LinearProgress, "infoBg", P(Ge, s ? d("palette-info-main") : g.info.main, 0.62)), F(g.LinearProgress, "successBg", P(Ge, s ? d("palette-success-main") : g.success.main, 0.62)), F(g.LinearProgress, "warningBg", P(Ge, s ? d("palette-warning-light") : g.warning.main, 0.62)), F(g.Skeleton, "bg", w ? P(mo, s ? d("palette-text-primary") : g.text.primary, 0.11) : `rgba(${$("palette-text-primaryChannel")} / 0.11)`), F(g.Slider, "primaryTrack", P(Ge, s ? d("palette-primary-main") : g.primary.main, 0.62)), F(g.Slider, "secondaryTrack", P(Ge, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), F(g.Slider, "errorTrack", P(Ge, s ? d("palette-error-main") : g.error.main, 0.62)), F(g.Slider, "infoTrack", P(Ge, s ? d("palette-info-main") : g.info.main, 0.62)), F(g.Slider, "successTrack", P(Ge, s ? d("palette-success-main") : g.success.main, 0.62)), F(g.Slider, "warningTrack", P(Ge, s ? d("palette-warning-main") : g.warning.main, 0.62));
      const j = w ? P(Ye, s ? d("palette-background-default") : g.background.default, 0.6825) : zl(g.background.default, 0.8);
      F(g.SnackbarContent, "bg", j), F(g.SnackbarContent, "color", nr(() => w ? nf.text.primary : g.getContrastText(j))), F(g.SpeedDialAction, "fabHoverBg", zl(g.background.paper, 0.15)), F(g.StepConnector, "border", $("palette-grey-400")), F(g.StepContent, "border", $("palette-grey-400")), F(g.Switch, "defaultColor", $("palette-common-white")), F(g.Switch, "defaultDisabledColor", $("palette-grey-100")), F(g.Switch, "primaryDisabledColor", P(Ge, s ? d("palette-primary-main") : g.primary.main, 0.62)), F(g.Switch, "secondaryDisabledColor", P(Ge, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), F(g.Switch, "errorDisabledColor", P(Ge, s ? d("palette-error-main") : g.error.main, 0.62)), F(g.Switch, "infoDisabledColor", P(Ge, s ? d("palette-info-main") : g.info.main, 0.62)), F(g.Switch, "successDisabledColor", P(Ge, s ? d("palette-success-main") : g.success.main, 0.62)), F(g.Switch, "warningDisabledColor", P(Ge, s ? d("palette-warning-main") : g.warning.main, 0.62)), F(g.TableCell, "border", P(Ge, mo(s ? d("palette-divider") : g.divider, 1), 0.88)), F(g.Tooltip, "bg", P(mo, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      F(g.Alert, "errorColor", P(Ge, s ? d("palette-error-light") : g.error.light, 0.6)), F(g.Alert, "infoColor", P(Ge, s ? d("palette-info-light") : g.info.light, 0.6)), F(g.Alert, "successColor", P(Ge, s ? d("palette-success-light") : g.success.light, 0.6)), F(g.Alert, "warningColor", P(Ge, s ? d("palette-warning-light") : g.warning.light, 0.6)), F(g.Alert, "errorFilledBg", $("palette-error-dark")), F(g.Alert, "infoFilledBg", $("palette-info-dark")), F(g.Alert, "successFilledBg", $("palette-success-dark")), F(g.Alert, "warningFilledBg", $("palette-warning-dark")), F(g.Alert, "errorFilledColor", nr(() => g.getContrastText(g.error.dark))), F(g.Alert, "infoFilledColor", nr(() => g.getContrastText(g.info.dark))), F(g.Alert, "successFilledColor", nr(() => g.getContrastText(g.success.dark))), F(g.Alert, "warningFilledColor", nr(() => g.getContrastText(g.warning.dark))), F(g.Alert, "errorStandardBg", P(Ye, s ? d("palette-error-light") : g.error.light, 0.9)), F(g.Alert, "infoStandardBg", P(Ye, s ? d("palette-info-light") : g.info.light, 0.9)), F(g.Alert, "successStandardBg", P(Ye, s ? d("palette-success-light") : g.success.light, 0.9)), F(g.Alert, "warningStandardBg", P(Ye, s ? d("palette-warning-light") : g.warning.light, 0.9)), F(g.Alert, "errorIconColor", $("palette-error-main")), F(g.Alert, "infoIconColor", $("palette-info-main")), F(g.Alert, "successIconColor", $("palette-success-main")), F(g.Alert, "warningIconColor", $("palette-warning-main")), F(g.AppBar, "defaultBg", $("palette-grey-900")), F(g.AppBar, "darkBg", $("palette-background-paper")), F(g.AppBar, "darkColor", $("palette-text-primary")), F(g.Avatar, "defaultBg", $("palette-grey-600")), F(g.Button, "inheritContainedBg", $("palette-grey-800")), F(g.Button, "inheritContainedHoverBg", $("palette-grey-700")), F(g.Chip, "defaultBorder", $("palette-grey-700")), F(g.Chip, "defaultAvatarColor", $("palette-grey-300")), F(g.Chip, "defaultIconColor", $("palette-grey-300")), F(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(g.LinearProgress, "primaryBg", P(Ye, s ? d("palette-primary-main") : g.primary.main, 0.5)), F(g.LinearProgress, "secondaryBg", P(Ye, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), F(g.LinearProgress, "errorBg", P(Ye, s ? d("palette-error-main") : g.error.main, 0.5)), F(g.LinearProgress, "infoBg", P(Ye, s ? d("palette-info-main") : g.info.main, 0.5)), F(g.LinearProgress, "successBg", P(Ye, s ? d("palette-success-main") : g.success.main, 0.5)), F(g.LinearProgress, "warningBg", P(Ye, s ? d("palette-warning-main") : g.warning.main, 0.5)), F(g.Skeleton, "bg", w ? P(mo, s ? d("palette-text-primary") : g.text.primary, 0.13) : `rgba(${$("palette-text-primaryChannel")} / 0.13)`), F(g.Slider, "primaryTrack", P(Ye, s ? d("palette-primary-main") : g.primary.main, 0.5)), F(g.Slider, "secondaryTrack", P(Ye, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), F(g.Slider, "errorTrack", P(Ye, s ? d("palette-error-main") : g.error.main, 0.5)), F(g.Slider, "infoTrack", P(Ye, s ? d("palette-info-main") : g.info.main, 0.5)), F(g.Slider, "successTrack", P(Ye, s ? d("palette-success-main") : g.success.main, 0.5)), F(g.Slider, "warningTrack", P(Ye, s ? d("palette-warning-light") : g.warning.main, 0.5));
      const j = w ? P(Ge, s ? d("palette-background-default") : g.background.default, 0.985) : zl(g.background.default, 0.98);
      F(g.SnackbarContent, "bg", j), F(g.SnackbarContent, "color", nr(() => w ? nx.text.primary : g.getContrastText(j))), F(g.SpeedDialAction, "fabHoverBg", zl(g.background.paper, 0.15)), F(g.StepConnector, "border", $("palette-grey-600")), F(g.StepContent, "border", $("palette-grey-600")), F(g.Switch, "defaultColor", $("palette-grey-300")), F(g.Switch, "defaultDisabledColor", $("palette-grey-600")), F(g.Switch, "primaryDisabledColor", P(Ye, s ? d("palette-primary-main") : g.primary.main, 0.55)), F(g.Switch, "secondaryDisabledColor", P(Ye, s ? d("palette-secondary-main") : g.secondary.main, 0.55)), F(g.Switch, "errorDisabledColor", P(Ye, s ? d("palette-error-main") : g.error.main, 0.55)), F(g.Switch, "infoDisabledColor", P(Ye, s ? d("palette-info-main") : g.info.main, 0.55)), F(g.Switch, "successDisabledColor", P(Ye, s ? d("palette-success-main") : g.success.main, 0.55)), F(g.Switch, "warningDisabledColor", P(Ye, s ? d("palette-warning-light") : g.warning.main, 0.55)), F(g.TableCell, "border", P(Ye, mo(s ? d("palette-divider") : g.divider, 1), 0.68)), F(g.Tooltip, "bg", P(mo, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    s || (xr(g.background, "default"), xr(g.background, "paper"), xr(g.common, "background"), xr(g.common, "onBackground"), xr(g, "divider")), Object.keys(g).forEach((j) => {
      const O = g[j];
      j !== "tonalOffset" && !s && O && typeof O == "object" && (O.main && F(g[j], "mainChannel", ds(fs(O.main))), O.light && F(g[j], "lightChannel", ds(fs(O.light))), O.dark && F(g[j], "darkChannel", ds(fs(O.dark))), O.contrastText && F(g[j], "contrastTextChannel", ds(fs(O.contrastText))), j === "text" && (xr(g[j], "primary"), xr(g[j], "secondary")), j === "action" && (O.active && xr(g[j], "active"), O.selected && xr(g[j], "selected")));
    });
  }), k = t.reduce((I, g) => Wt(I, g), k);
  const R = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: pk(k),
    enableContrastVars: s
  }, {
    vars: T,
    generateThemeVars: A,
    generateStyleSheets: N
  } = P2(k, R);
  return k.vars = T, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([I, g]) => {
    k[I] = g;
  }), k.generateThemeVars = A, k.generateStyleSheets = N, k.generateSpacing = function() {
    return W0(f.spacing, Hc(this));
  }, k.getColorSchemeSelector = I2(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Qc,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, k.unstable_sx = function(g) {
    return Do({
      sx: g,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = ix, k;
}
function Wh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Op({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function nu(e = {}, ...t) {
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
      return rf(e, ...t);
    let f = n;
    "palette" in e || c[l] && (c[l] !== !0 ? f = c[l].palette : l === "dark" && (f = {
      mode: "dark"
    }));
    const m = rf({
      ...e,
      palette: f
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = c, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...c.light !== !0 && c.light,
      palette: m.palette
    }, Wh(m, "dark", c.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...c.dark !== !0 && c.dark,
      palette: m.palette
    }, Wh(m, "light", c.light)), m;
  }
  return !n && !("light" in c) && l === "light" && (c.light = !0), yk({
    ...s,
    colorSchemes: c,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Ya(e) {
  return typeof e == "string";
}
function fl(e, t = 166) {
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
function lt(...e) {
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
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return p.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function ot(e) {
  const t = p.useRef(e);
  return gt(() => {
    t.current = e;
  }), p.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function xt(e) {
  return e && e.ownerDocument || document;
}
function bn(e) {
  return xt(e).defaultView || window;
}
function Dl(e) {
  return parseInt(e, 10) || 0;
}
const vk = {
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
function xk(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Uh(e) {
  return xk(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Sk = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: c
  } = p.useRef(l != null), f = p.useRef(null), m = lt(n, f), v = p.useRef(null), d = p.useRef(null), x = p.useCallback(() => {
    const S = f.current, w = d.current;
    if (!S || !w)
      return;
    const k = bn(S).getComputedStyle(S);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = S.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const R = k.boxSizing, T = Dl(k.paddingBottom) + Dl(k.paddingTop), A = Dl(k.borderBottomWidth) + Dl(k.borderTopWidth), N = w.scrollHeight;
    w.value = "x";
    const I = w.scrollHeight;
    let g = N;
    i && (g = Math.max(Number(i) * I, g)), o && (g = Math.min(Number(o) * I, g)), g = Math.max(g, I);
    const $ = g + (R === "border-box" ? T + A : 0), P = Math.abs(g - N) <= 1;
    return {
      outerHeightStyle: $,
      overflowing: P
    };
  }, [o, i, t.placeholder]), b = ot(() => {
    const S = f.current, w = x();
    if (!S || !w || Uh(w))
      return !1;
    const E = w.outerHeightStyle;
    return v.current != null && v.current !== E;
  }), C = p.useCallback(() => {
    const S = f.current, w = x();
    if (!S || !w || Uh(w))
      return;
    const E = w.outerHeightStyle;
    v.current !== E && (v.current = E, S.style.height = `${E}px`), S.style.overflow = w.overflowing ? "hidden" : "";
  }, [x]), y = p.useRef(-1);
  gt(() => {
    const S = fl(C), w = f == null ? void 0 : f.current;
    if (!w)
      return;
    const E = bn(w);
    E.addEventListener("resize", S);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(w), cancelAnimationFrame(y.current), C(), y.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      S.clear(), cancelAnimationFrame(y.current), E.removeEventListener("resize", S), k && k.disconnect();
    };
  }, [x, C, b]), gt(() => {
    C();
  });
  const h = (S) => {
    c || C();
    const w = S.target, E = w.value.length, k = w.value.endsWith(`
`), R = w.selectionStart === E;
    k && R && w.setSelectionRange(E, E), r && r(S);
  };
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ u.jsx("textarea", {
      value: l,
      onChange: h,
      ref: m,
      rows: i,
      style: s,
      ...a
    }), /* @__PURE__ */ u.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: d,
      tabIndex: -1,
      style: {
        ...vk.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), pl = /* @__PURE__ */ p.createContext(void 0);
function bk() {
  return p.useContext(pl);
}
function _i({
  props: e,
  states: t
}) {
  const n = p.useContext(pl), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const Np = nu();
function vr() {
  const e = Zc(Np);
  return e[pr] || e;
}
function wk(e) {
  return /* @__PURE__ */ u.jsx(U0, {
    ...e,
    defaultTheme: Np,
    themeId: pr
  });
}
function ax(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const dn = (e) => ax(e) && e !== "classes", H = G0({
  themeId: pr,
  defaultTheme: Np,
  rootShouldForwardProp: dn
});
function Ck(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ u.jsx(wk, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const xe = h2;
function me(e) {
  return d2(e);
}
function cr(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Hh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ga(e, t = !1) {
  return e && (Hh(e.value) && e.value !== "" || t && Hh(e.defaultValue) && e.defaultValue !== "");
}
function kk(e) {
  return e.startAdornment;
}
function Tk(e) {
  return de("MuiInputBase", e);
}
const hn = ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), Ek = {
  transition: "none"
};
function Rk(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const ru = (e) => e.scrollTop, Gu = {
  offsetX: 0,
  offsetY: 0
}, cx = {}, Pk = ["all"], Ik = {}, Mk = {
  matrix: [4, 5],
  matrix3d: [12, 13],
  translate: [0, 1],
  translate3d: [0, 1],
  translateX: [0, null],
  translateY: [null, 0]
};
function jk(e) {
  const t = parseFloat(e ?? "");
  return Number.isNaN(t) ? 0 : t;
}
function $k(e) {
  const t = e.match(/^(matrix|matrix3d|translate|translate3d|translateX|translateY)\((.+)\)$/);
  return t ? {
    type: t[1],
    values: t[2].split(",").map(jk)
  } : null;
}
function Vh(e, t) {
  return t === null ? 0 : e[t] || 0;
}
function Ak(e) {
  if (!e || e === "none")
    return Gu;
  const t = $k(e);
  if (!t)
    return Gu;
  const {
    type: n,
    values: r
  } = t, o = Mk[n];
  return o ? {
    offsetX: Vh(r, o[0]),
    offsetY: Vh(r, o[1])
  } : Gu;
}
function jt(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function ux(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function ji(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = cx
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Lp(e, t) {
  var r;
  const n = t ?? Ek;
  return Rk((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function wt(e, t = Pk, n = Ik) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = Lp(e);
  if (r === void 0)
    return o ?? cx;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Kh;
const sf = "mui-auto-fill", Xa = "mui-auto-fill-cancel", ou = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${se(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, iu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, Ok = (e) => {
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
    multiline: f,
    readOnly: m,
    size: v,
    startAdornment: d,
    type: x
  } = e, b = {
    root: ["root", `color${se(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", v && v !== "medium" && `size${se(v)}`, f && "multiline", d && "adornedStart", i && "adornedEnd", c && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", x === "search" && "inputTypeSearch", m && "readOnly"]
  };
  return fe(b, Tk, t);
}, su = H("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: ou
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
  [`&.${hn.disabled}`]: {
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
}))), lu = H("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: iu
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
    ...wt(e, "opacity", {
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
    [`label[data-shrink=false] + .${hn.formControl} &`]: {
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
    [`&.${hn.disabled}`]: {
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
        animationName: Xa,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: sf
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
})), Yh = Ck({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${sf}`]: {
    from: {
      animationName: sf
    }
  },
  [`@keyframes ${Xa}`]: {
    from: {
      animationName: Xa
    }
  }
}), zp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    defaultValue: f,
    disabled: m,
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
    onChange: N,
    onClick: I,
    onFocus: g,
    onKeyDown: $,
    onKeyUp: P,
    placeholder: j,
    readOnly: O,
    renderSuffix: L,
    rows: M,
    size: z,
    slotProps: B = {},
    slots: W = {},
    startAdornment: _,
    type: Q = "text",
    value: K,
    ...Z
  } = r, G = h.value != null ? h.value : K, {
    current: X
  } = p.useRef(G != null), U = p.useRef(), re = p.useCallback((ne) => {
  }, []), le = lt(U, S, h.ref, re), [ke, ye] = p.useState(!1), [ve, oe] = _i({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ve.focused = oe ? oe.focused : ke, p.useEffect(() => {
    !oe && m && ke && (ye(!1), A && A());
  }, [oe, m, ke, A]);
  const Le = oe && oe.onFilled, _e = oe && oe.onEmpty, Ee = p.useCallback((ne) => {
    Ga(ne) ? Le && Le() : _e && _e();
  }, [Le, _e]);
  gt(() => {
    X && Ee({
      value: G
    });
  }, [G, Ee, X]), gt(() => {
    if (!l)
      return;
    const ne = U.current;
    if (!ne)
      return;
    const be = xt(ne), Oe = cr(be), ft = Oe == null || Oe === be.body || Oe === be.documentElement;
    ne === Oe ? oe && oe.onFocus ? oe.onFocus() : ye(!0) : ft && ne.focus();
  }, [l]);
  const $e = (ne) => {
    g && g(ne), h.onFocus && h.onFocus(ne), oe && oe.onFocus ? oe.onFocus(ne) : ye(!0);
  }, ue = (ne) => {
    A && A(ne), h.onBlur && h.onBlur(ne), oe && oe.onBlur ? oe.onBlur(ne) : ye(!1);
  }, je = (ne, ...be) => {
    if (!X) {
      const Oe = ne.target || U.current;
      if (Oe == null)
        throw new Error($r(1));
      Ee({
        value: Oe.value
      });
    }
    h.onChange && h.onChange(ne, ...be), N && N(ne, ...be);
  };
  p.useEffect(() => {
    Ee(U.current);
  }, []);
  const Ve = (ne) => {
    U.current && ne.currentTarget === ne.target && U.current.focus(), I && I(ne);
  };
  let Ae = y, Ke = h;
  R && Ae === "input" && (M ? Ke = {
    type: void 0,
    minRows: M,
    maxRows: M,
    ...Ke
  } : Ke = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...Ke
  }, Ae = Sk);
  const We = (ne) => {
    Ee(ne.animationName === Xa ? U.current : {
      value: "x"
    });
  };
  p.useEffect(() => {
    oe && oe.setAdornedStart(!!_);
  }, [oe, _]);
  const et = {
    ...r,
    color: ve.color || "primary",
    disabled: ve.disabled,
    endAdornment: d,
    error: ve.error,
    focused: ve.focused,
    formControl: oe,
    fullWidth: b,
    hiddenLabel: ve.hiddenLabel,
    multiline: R,
    size: ve.size,
    startAdornment: _,
    type: Q
  }, ze = Ok(et), Se = W.root || su, Me = B.root || {}, dt = W.input || lu;
  return Ke = {
    ...Ke,
    ...B.input
  }, /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [!v && typeof Yh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Kh || (Kh = /* @__PURE__ */ u.jsx(Yh, {}))), /* @__PURE__ */ u.jsxs(Se, {
      ...Me,
      ref: n,
      onClick: Ve,
      ...Z,
      ...!Ya(Se) && {
        ownerState: {
          ...et,
          ...Me.ownerState
        }
      },
      className: J(ze.root, Me.className, a, O && "MuiInputBase-readOnly"),
      children: [_, /* @__PURE__ */ u.jsx(pl.Provider, {
        value: null,
        children: /* @__PURE__ */ u.jsx(dt, {
          "aria-invalid": ve.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: f,
          disabled: ve.disabled,
          id: C,
          onAnimationStart: We,
          name: T,
          placeholder: j,
          readOnly: O,
          required: ve.required,
          rows: M,
          value: G,
          onKeyDown: $,
          onKeyUp: P,
          type: Q,
          ...Ke,
          ...!Ya(dt) && {
            as: Ae,
            ownerState: {
              ...et,
              ...Ke.ownerState
            }
          },
          ref: le,
          className: J(ze.input, Ke.className, O && "MuiInputBase-readOnly"),
          onBlur: ue,
          onChange: je,
          onFocus: $e
        })
      }), d, L ? L({
        ...ve,
        startAdornment: _
      }) : null]
    })]
  });
});
function Nk(e) {
  return de("MuiFilledInput", e);
}
const ho = {
  ...hn,
  ...ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function Lk(e) {
  return de("MuiFormHelperText", e);
}
const Gh = ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function zk(e) {
  return de("MuiFormLabel", e);
}
const ws = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function Dk(e) {
  return de("MuiInput", e);
}
const es = {
  ...hn,
  ...ce("MuiInput", ["root", "underline", "input"])
};
function Bk(e) {
  return de("MuiMenuItem", e);
}
const ts = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function Fk(e) {
  return de("MuiNativeSelect", e);
}
const Dp = ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function _k(e) {
  return de("MuiOutlinedInput", e);
}
const rr = {
  ...hn,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function Wk({
  theme: e,
  ...t
}) {
  const n = pr in e ? e[pr] : void 0;
  return /* @__PURE__ */ u.jsx(J0, {
    ...t,
    themeId: n ? pr : void 0,
    theme: n || e
  });
}
const Bl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Uk
} = C2({
  themeId: pr,
  // @ts-ignore ignore module augmentation tests
  theme: () => nu({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Bl.colorSchemeStorageKey,
  modeStorageKey: Bl.modeStorageKey,
  defaultColorScheme: {
    light: Bl.defaultLightColorScheme,
    dark: Bl.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: ox(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Do({
        sx: r,
        theme: this
      });
    }, t;
  }
}), Hk = Uk;
function Vk({
  theme: e,
  ...t
}) {
  const n = p.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = pr in e ? e[pr] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ u.jsx(Wk, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ u.jsx(Hk, {
    theme: e,
    ...t
  });
}
function Xh(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Kk(e) {
  return de("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Yk = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${se(t)}`, `fontSize${se(n)}`]
  };
  return fe(o, Kk, r);
}, Gk = H("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${se(n.color)}`], t[`fontSize${se(n.fontSize)}`]];
  }
})(xe(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, c, f, m, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...wt(e, "fill", {
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
          color: (f = (c = (e.vars ?? e).palette) == null ? void 0 : c.action) == null ? void 0 : f.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (v = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : v.disabled
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
})), lf = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    inheritViewBox: f = !1,
    titleAccess: m,
    viewBox: v = "0 0 24 24",
    ...d
  } = r, x = /* @__PURE__ */ p.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: v,
    hasSvgAsChild: x
  }, C = {};
  f || (C.viewBox = v);
  const y = Yk(b);
  return /* @__PURE__ */ u.jsxs(Gk, {
    as: l,
    className: J(y.root, i),
    focusable: "false",
    color: c,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...C,
    ...d,
    ...x && o.props,
    ownerState: b,
    children: [x ? o.props.children : o, m ? /* @__PURE__ */ u.jsx("title", {
      children: m
    }) : null]
  });
});
lf.muiName = "SvgIcon";
function Je(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ u.jsx(lf, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = lf.muiName, /* @__PURE__ */ p.memo(/* @__PURE__ */ p.forwardRef(n));
}
function af(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function cf(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = p.useRef(t !== void 0), [s, l] = p.useState(n), a = i ? t : s, c = p.useCallback((f) => {
    i || l(f);
  }, []);
  return [a, c];
}
function dx(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function fx(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((c) => {
      dx(c, l[c]) && typeof s[c] == "function" && (a[c] = (...f) => {
        s[c](...f), l[c](...f);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, c = J(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), f = n(a, l);
      return {
        ...l,
        ...a,
        ...f,
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
const Qh = {};
function Bp(e, t) {
  const n = p.useRef(Qh);
  return n.current === Qh && (n.current = e(t)), n;
}
function Xk(e) {
  const t = Bp(() => Qk(e)).current;
  return t.next = e, gt(t.effect), t;
}
function Qk(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const qh = cy.createContext(null);
function qk(e) {
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
function Zk(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = qk(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function Fp(e) {
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
    getAutoTimeout: f,
    nodeRef: m,
    onEnter: v,
    onEntering: d,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: y,
    children: h,
    ...S
  } = e, w = p.useContext(qh), E = w && !w.isMounting ? r : n, [k, R] = p.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), T = p.useRef(k);
  T.current = k, t && k === "unmounted" && (T.current = "exited", R("exited"));
  const A = p.useRef(t && E), N = p.useRef(!1), I = p.useRef(null), g = p.useRef(k), $ = p.useRef(!1), P = p.useRef(c), j = Xk({
    timeout: l,
    addEndListener: a,
    reduceMotion: c,
    getAutoTimeout: f,
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
    nodeRef: m,
    parentGroup: w
  }), O = p.useCallback(() => {
    I.current !== null && (I.current.cancel(), I.current = null);
  }, []), L = p.useCallback((_) => {
    let Q = !0;
    const K = () => {
      Q && (Q = !1, I.current = null, _());
    };
    return K.cancel = () => {
      Q = !1;
    }, I.current = K, K;
  }, []), M = p.useCallback((_, Q) => {
    var _e, Ee;
    let K;
    const Z = () => {
      K !== void 0 && (clearTimeout(K), K = void 0);
    }, G = L(() => {
      Z(), T.current = _, R(_);
    }), X = G.cancel;
    G.cancel = () => {
      Z(), X();
    };
    const U = j.current.nodeRef.current, re = j.current.addEndListener, le = j.current.getAutoTimeout !== void 0, ke = (Ee = (_e = j.current).getAutoTimeout) == null ? void 0 : Ee.call(_e), ye = Zk({
      currentStatus: Q,
      isAppearing: $.current,
      timeout: j.current.timeout,
      autoTimeout: ke
    }), ve = P.current, oe = ye ?? (ve && le ? 0 : null), Le = ($e) => {
      K = setTimeout(G, $e);
    };
    if (!U) {
      Le(0);
      return;
    }
    if (re) {
      oe != null && Le(ve ? 0 : oe), re.length >= 2 ? re(U, G) : re(G);
      return;
    }
    Le(ve ? 0 : ye ?? 0);
  }, [L, j]), z = p.useCallback((_) => {
    var Z;
    const Q = j.current, K = Q.parentGroup ? Q.parentGroup.isMounting : _;
    if ($.current = K, !_ && !Q.enter) {
      T.current = "entered", R("entered");
      return;
    }
    P.current = Q.reduceMotion, (Z = Q.onEnter) == null || Z.call(Q, K), T.current = "entering", R("entering");
  }, [j]), B = p.useCallback(() => {
    var Q;
    const _ = j.current;
    if (!_.exit) {
      T.current = "exited", R("exited");
      return;
    }
    P.current = _.reduceMotion, (Q = _.onExit) == null || Q.call(_), T.current = "exiting", R("exiting");
  }, [j]), W = p.useCallback((_, Q) => {
    if (O(), Q === "entering") {
      const K = j.current;
      if (K.mountOnEnter || K.unmountOnExit) {
        const Z = K.nodeRef.current;
        Z && ru(Z);
      }
      z(_);
    } else
      B();
  }, [O, z, B, j]);
  return gt(() => (N.current = !0, A.current && (A.current = !1, W(!0, "entering")), () => {
    N.current = !1, O();
  }), [O, W]), gt(() => {
    if (!N.current)
      return;
    const _ = T.current;
    t ? _ !== "entering" && _ !== "entered" && W(!1, "entering") : _ === "entering" || _ === "entered" ? W(!1, "exiting") : _ === "exited" && s && (T.current = "unmounted", R("unmounted"));
  }, [t, k, s, W]), gt(() => {
    var Z, G, X, U;
    if (k === "unmounted" || g.current === "unmounted") {
      g.current = k;
      return;
    }
    const Q = g.current !== k;
    Q && (g.current = k);
    const K = j.current;
    k === "entering" ? (Q && ((Z = K.onEntering) == null || Z.call(K, $.current)), I.current === null && T.current === k && M("entered", "entering")) : k === "exiting" ? (Q && ((G = K.onExiting) == null || G.call(K)), I.current === null && T.current === k && M("exited", "exiting")) : k === "entered" && Q ? (X = K.onEntered) == null || X.call(K, $.current) : k === "exited" && Q && ((U = K.onExited) == null || U.call(K));
  }, [j, M, k]), k === "unmounted" ? null : /* @__PURE__ */ u.jsx(qh.Provider, {
    value: null,
    children: h(k, S)
  });
}
const px = "(prefers-reduced-motion: reduce)", Jk = 0, eT = "0ms", tT = () => {
}, Zh = () => !1, nT = () => !0, rT = () => tT;
function oT(e) {
  const [t, n] = p.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), gt(() => {
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
    const i = window.matchMedia(px), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const iT = {
  ...xa
}, mx = iT.useSyncExternalStore;
function sT(e) {
  const t = e ? nT : Zh, [n, r] = p.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [Zh, rT];
    const o = window.matchMedia(px);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return mx(r, n, t);
}
const lT = mx !== void 0 ? sT : oT;
function ml(e, t) {
  const n = lT(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return p.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: Jk,
        delay: eT
      } : o;
    }
  }), [r]);
}
function hx(e, t, n) {
  return e === void 0 || Ya(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function gx(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Qa(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    dx(n, e[n]) && (t[n] = e[n]);
  return t;
}
function Jh(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function yx(e) {
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
  const s = Qa({
    ...o,
    ...r
  }), l = Jh(r), a = Jh(o), c = t(s), f = J(c == null ? void 0 : c.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), m = {
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
  return f.length > 0 && (v.className = f), Object.keys(m).length > 0 && (v.style = m), {
    props: v,
    internalRef: c.ref
  };
}
function ge(e, t) {
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
    slots: f = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...v
  } = i, d = f[e] || r, x = gx(m[e], o), {
    props: {
      component: b,
      ...C
    },
    internalRef: y
  } = yx({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: x
  }), h = lt(y, x == null ? void 0 : x.ref, t.ref), S = e === "root" ? b || c : b, w = hx(d, {
    ...e === "root" && !c && !f[e] && s,
    ...e !== "root" && !f[e] && s,
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
function aT(e) {
  return de("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const cT = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return fe(i, aT, o);
}, uT = H("div", {
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
  ...wt(e, "box-shadow"),
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
}))), gr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var d;
  const r = me({
    props: t,
    name: "MuiPaper"
  }), o = vr(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: c = "elevation",
    ...f
  } = r, m = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: c
  }, v = cT(m);
  return /* @__PURE__ */ u.jsx(uT, {
    as: s,
    ownerState: m,
    className: J(v.root, i),
    ref: n,
    ...f,
    style: {
      ...c === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (d = o.vars.overlays) == null ? void 0 : d[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Yr("#fff", of(l))}, ${Yr("#fff", of(l))})`
        }
      },
      ...f.style
    }
  });
});
function qa(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function dT(e) {
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
      onKeyDown(f) {
        n && t && f.key !== "Tab" && f.preventDefault();
      }
    };
    return r || (c.tabIndex = o, !i && n && (c.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (c["aria-disabled"] = n), i && (!t || l) && (c.disabled = n), c;
  }, [r, n, t, s, l, i, o]);
}
const fT = {};
function pT(e) {
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
  } = e, f = p.useRef(null), m = s === !0, v = dT({
    focusableWhenDisabled: m,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), d = p.useCallback(() => {
    const C = f.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), x = p.useMemo(() => {
    const C = m ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, m || (C.disabled = n)) : (C.role = "button", !m && n && (C["aria-disabled"] = n)), m ? {
      ...C,
      ...v
    } : C;
  }, [n, m, v, o, t, i, r]);
  return {
    getButtonProps: p.useCallback((C = fT) => {
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
          if (m && v.onKeyDown(T), !n && (a == null || a(T), h == null || h(T), !(T.target !== T.currentTarget || d()))) {
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
    }, [x, n, m, v, d, a, c, l]),
    rootRef: f
  };
}
class Za {
  constructor() {
    Ui(this, "mountEffect", () => {
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
    return new Za();
  }
  static use() {
    const t = Bp(Za.create).current, [n, r] = p.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, p.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = hT(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function mT() {
  return Za.use();
}
function hT() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const gT = [];
function vx(e) {
  p.useEffect(e, gT);
}
class au {
  constructor() {
    Ui(this, "currentId", null);
    Ui(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Ui(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new au();
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
function ur() {
  const e = Bp(au.create).current;
  return vx(e.disposeEffect), e;
}
function yT(e) {
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
  } = e, [f, m] = p.useState(!1), v = ur(), d = p.useRef(!1), x = p.useRef(a);
  x.current = a;
  const b = a != null, C = J(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, h = J(n.child, f && n.childLeaving, r && n.childPulsate);
  return !l && !f && m(!0), p.useEffect(() => {
    !l && b ? d.current || (d.current = !0, v.start(c, () => {
      var S;
      d.current = !1, (S = x.current) == null || S.call(x);
    })) : (d.current = !1, v.clear());
  }, [v, b, l, c]), /* @__PURE__ */ u.jsx("span", {
    className: C,
    style: y,
    children: /* @__PURE__ */ u.jsx("span", {
      className: h
    })
  });
}
const qt = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), uf = 550, vT = 80, Fl = {}, eg = [], xT = () => {
};
function Xu(e, t) {
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
function ST({
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
const bT = cl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, wT = cl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, CT = cl`
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
function kT(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = Xs`
    &.${qt.rippleVisible} {
      animation-name: ${bT};
      animation-duration: ${uf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${qt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${qt.childLeaving} {
      animation-name: ${wT};
      animation-duration: ${uf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${qt.childPulsate} {
      animation-name: ${CT};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? Xs`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const TT = H("span", {
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
}), ET = H(yT, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${qt.rippleVisible} {
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
  & .${qt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${qt.childLeaving} {
    opacity: 0;
  }

  & .${qt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => kT(e)}
`, RT = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTouchRipple"
  }), o = vr(), i = ml(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Fl,
    className: a,
    ...c
  } = r, [f, m] = p.useState({
    items: eg,
    order: eg
  }), v = f.items, d = p.useRef(0), x = p.useRef(null), b = p.useRef(!1);
  vx(() => (b.current = !0, () => {
    b.current = !1;
  })), p.useEffect(() => {
    x.current && (x.current(), x.current = null);
  }, [v]);
  const C = p.useRef(!1), y = ur(), h = p.useRef(null), S = p.useRef(null), w = ot((I) => {
    b.current && m((g) => {
      const $ = g.items.filter((j) => j.key !== I), P = Xu(g.order.filter((j) => j !== I), $.filter((j) => !j.exiting).map((j) => j.key));
      return {
        items: $,
        order: P
      };
    });
  }), E = ot((I) => {
    const {
      pulsate: g,
      rippleX: $,
      rippleY: P,
      rippleSize: j,
      cb: O
    } = I, L = d.current;
    d.current += 1, m((M) => {
      const z = [...M.items, {
        key: L,
        pulsate: g,
        rippleX: $,
        rippleY: P,
        rippleSize: j,
        exiting: !1
      }];
      return {
        items: z,
        order: Xu(M.order, z.filter((B) => !B.exiting).map((B) => B.key))
      };
    }), x.current = O;
  }), k = ot((I = Fl, g = Fl, $ = xT) => {
    const {
      pulsate: P = !1,
      center: j = s || g.pulsate,
      fakeElement: O = !1
      // Used only by tests.
    } = g;
    if ((I == null ? void 0 : I.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    (I == null ? void 0 : I.type) === "touchstart" && (C.current = !0);
    const L = O ? null : S.current, {
      rippleX: M,
      rippleY: z,
      rippleSize: B
    } = ST({
      event: I,
      element: L,
      center: j
    });
    I != null && I.touches ? h.current === null && (h.current = () => {
      E({
        pulsate: P,
        rippleX: M,
        rippleY: z,
        rippleSize: B,
        cb: $
      });
    }, y.start(vT, () => {
      h.current && (h.current(), h.current = null);
    })) : E({
      pulsate: P,
      rippleX: M,
      rippleY: z,
      rippleSize: B,
      cb: $
    });
  }), R = ot(() => {
    k(Fl, {
      pulsate: !0
    });
  }), T = ot((I, g) => {
    if (y.clear(), (I == null ? void 0 : I.type) === "touchend" && h.current) {
      h.current(), h.current = null, y.start(0, () => {
        T(I, g);
      });
      return;
    }
    h.current = null, m(($) => {
      const P = $.items.findIndex((O) => !O.exiting);
      if (P === -1)
        return $;
      const j = $.items.slice();
      return j[P] = {
        ...j[P],
        exiting: !0
      }, {
        items: j,
        order: Xu($.order, j.filter((O) => !O.exiting).map((O) => O.key))
      };
    }), x.current = g;
  });
  p.useImperativeHandle(n, () => ({
    pulsate: R,
    start: k,
    stop: T
  }), [R, k, T]);
  const A = new Map(v.map((I) => [I.key, I])), N = f.order.map((I) => A.get(I)).filter(Boolean);
  return /* @__PURE__ */ u.jsx(TT, {
    className: J(qt.root, l.root, a),
    ref: S,
    ...c,
    children: N.map((I) => /* @__PURE__ */ u.jsx(ET, {
      classes: {
        ripple: J(l.ripple, qt.ripple),
        rippleVisible: J(l.rippleVisible, qt.rippleVisible),
        ripplePulsate: J(l.ripplePulsate, qt.ripplePulsate),
        child: J(l.child, qt.child),
        childLeaving: J(l.childLeaving, qt.childLeaving),
        childPulsate: J(l.childPulsate, qt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : uf,
      pulsate: I.pulsate,
      rippleX: I.rippleX,
      rippleY: I.rippleY,
      rippleSize: I.rippleSize,
      in: !I.exiting,
      onExited: () => w(I.key)
    }, I.key))
  });
});
function PT(e) {
  return de("MuiButtonBase", e);
}
const IT = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), MT = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = fe({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, PT, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, jT = H("button", {
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
  [`&.${IT.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Bo = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disableRipple: f = !1,
    disableTouchRipple: m = !1,
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
    onKeyUp: N,
    onMouseDown: I,
    onMouseLeave: g,
    onMouseUp: $,
    onTouchEnd: P,
    onTouchMove: j,
    onTouchStart: O,
    tabIndex: L = 0,
    TouchRippleProps: M,
    touchRippleRef: z,
    type: B,
    ...W
  } = r, _ = !!(W.href || W.to), Q = !!W.formAction;
  let K = a;
  K === "button" && _ && (K = y);
  const G = h ?? (typeof K == "string" ? K === "button" : C ?? !1), X = mT(), U = lt(X.ref, z), [re, le] = p.useState(!1);
  (c || b) && re && le(!1);
  const ke = ot((Te) => {
    v && !Te.repeat && re && Te.key === " " && X.stop(Te, () => {
      X.start(Te);
    });
  }), ye = ot((Te) => {
    v && Te.key === " " && re && !Te.defaultPrevented && X.stop(Te, () => {
      X.pulsate(Te);
    });
  }), {
    getButtonProps: ve,
    rootRef: oe
  } = pT({
    nativeButton: G,
    disabled: c,
    type: B,
    hasFormAction: Q,
    tabIndex: L,
    onBeforeKeyDown: ke,
    onBeforeKeyUp: ye
  }), {
    onClick: Le,
    onKeyDown: _e,
    onKeyUp: Ee,
    ...$e
  } = ve({
    onClick: w,
    onKeyDown: A,
    onKeyUp: N
  });
  p.useImperativeHandle(o, () => ({
    focusVisible: () => {
      le(!0), oe.current.focus();
    }
  }), [oe]);
  const ue = X.shouldMount && !f && !c;
  p.useEffect(() => {
    re && v && !f && X.pulsate();
  }, [f, v, re, X]);
  const je = Sr(X, "start", I, m), Ve = Sr(X, "stop", E, m), Ae = Sr(X, "stop", k, m), Ke = Sr(X, "stop", $, m), We = Sr(X, "stop", (Te) => {
    re && Te.preventDefault(), g && g(Te);
  }, m), et = Sr(X, "start", O, m), ze = Sr(X, "stop", P, m), Se = Sr(X, "stop", j, m), Me = Sr(X, "stop", (Te) => {
    qa(Te.target) || le(!1), S && S(Te);
  }, !1), dt = ot((Te) => {
    oe.current || (oe.current = Te.currentTarget), !b && qa(Te.target) && (le(!0), T && T(Te)), R && R(Te);
  }), ne = {};
  _ && (ne.tabIndex = c ? -1 : L, c && (ne["aria-disabled"] = c), ne.type = B);
  const be = lt(n, oe), Oe = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: c,
    disableRipple: f,
    disableTouchRipple: m,
    focusRipple: v,
    suppressFocusVisible: b,
    tabIndex: L,
    focusVisible: re
  }, ft = MT(Oe);
  return /* @__PURE__ */ u.jsxs(jT, {
    as: K,
    className: J(ft.root, l),
    ownerState: Oe,
    onBlur: Me,
    onClick: Le,
    onContextMenu: Ve,
    onFocus: dt,
    onKeyDown: _e,
    onKeyUp: Ee,
    onMouseDown: je,
    onMouseLeave: We,
    onMouseUp: Ke,
    onDragLeave: Ae,
    onTouchEnd: ze,
    onTouchMove: Se,
    onTouchStart: et,
    ref: be,
    ..._ ? ne : $e,
    ...W,
    children: [s, ue ? /* @__PURE__ */ u.jsx(RT, {
      ref: U,
      center: i,
      ...M
    }) : null]
  });
});
function Sr(e, t, n, r = !1) {
  return ot((o) => (n && n(o), r || e[t](o), !0));
}
function $T(e) {
  return typeof e.main == "string";
}
function AT(e, t = []) {
  if (!$T(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Zt(e = []) {
  return ([, t]) => t && AT(t, e);
}
function OT(e) {
  return de("MuiAlert", e);
}
const tg = ce("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function NT(e) {
  return de("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Wn = 44, df = cl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, ff = cl`
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
`, LT = typeof df != "string" ? Xs`
        animation: ${df} 1.4s linear infinite;
      ` : null, zT = typeof ff != "string" ? Xs`
        animation: ${ff} 1.4s ease-in-out infinite;
      ` : null, DT = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${se(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return fe(i, NT, t);
}, BT = H("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${se(n.color)}`]];
  }
})(xe(({
  theme: e
}) => {
  const t = Lp(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...wt(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: LT || {
        animation: `${df} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Zt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), FT = H("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), _T = H("circle", {
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
  const t = Lp(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...wt(e, "stroke-dashoffset")
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
      style: zT || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${ff} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), WT = H("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(xe(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), wo = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    size: f = 40,
    style: m,
    thickness: v = 3.6,
    value: d = r.min ?? 0,
    variant: x = "indeterminate",
    ...b
  } = r, C = a ?? 0, y = c ?? 100, h = {
    ...r,
    color: i,
    disableShrink: s,
    size: f,
    thickness: v,
    value: d,
    variant: x,
    enableTrackSlot: l
  }, S = DT(h), w = {}, E = {}, k = {};
  if (x === "determinate") {
    const R = 2 * Math.PI * ((Wn - v) / 2), T = y - C;
    w.strokeDasharray = R.toFixed(3), w.strokeDashoffset = T > 0 ? `${((y - d) / T * R).toFixed(3)}px` : `${R.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = d, k["aria-valuemin"] = C, k["aria-valuemax"] = y;
  }
  return /* @__PURE__ */ u.jsx(BT, {
    className: J(S.root, o),
    style: {
      width: f,
      height: f,
      ...E,
      ...m
    },
    ownerState: h,
    ref: n,
    role: "progressbar",
    ...k,
    ...b,
    children: /* @__PURE__ */ u.jsxs(FT, {
      className: S.svg,
      ownerState: h,
      viewBox: `${Wn / 2} ${Wn / 2} ${Wn} ${Wn}`,
      children: [l ? /* @__PURE__ */ u.jsx(WT, {
        className: S.track,
        ownerState: h,
        cx: Wn,
        cy: Wn,
        r: (Wn - v) / 2,
        fill: "none",
        strokeWidth: v,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ u.jsx(_T, {
        className: S.circle,
        style: w,
        ownerState: h,
        cx: Wn,
        cy: Wn,
        r: (Wn - v) / 2,
        fill: "none",
        strokeWidth: v
      })]
    })
  });
});
function UT(e) {
  return de("MuiIconButton", e);
}
const ng = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), HT = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${se(r)}`, o && `edge${se(o)}`, `size${se(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return fe(l, UT, t);
}, VT = H(Bo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${se(n.color)}`], n.edge && t[`edge${se(n.edge)}`], t[`size${se(n.size)}`]];
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
  ...wt(e, "background-color", {
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
  }, ...Object.entries(e.palette).filter(Zt()).map(([t]) => ({
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
  [`&.${ng.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${ng.loading}`]: {
    color: "transparent"
  }
}))), KT = H("span", {
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
})), pn = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    size: f = "medium",
    id: m,
    loading: v = null,
    loadingIndicator: d,
    ...x
  } = r, b = Ar(m), C = d ?? /* @__PURE__ */ u.jsx(wo, {
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
    size: f
  }, h = HT(y);
  return /* @__PURE__ */ u.jsxs(VT, {
    id: v ? b : m,
    className: J(h.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !c,
    disabled: a || v,
    ref: n,
    ...x,
    ownerState: y,
    children: [typeof v == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ u.jsx("span", {
      className: h.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ u.jsx(KT, {
        className: h.loadingIndicator,
        ownerState: y,
        children: v && C
      })
    }), i]
  });
}), YT = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), GT = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), XT = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), QT = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), qT = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), ZT = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${se(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return fe(i, OT, o);
}, JT = H(gr, {
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
    variants: [...Object.entries(e.palette).filter(Zt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${tg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Zt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${tg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Zt(["dark"])).map(([r]) => ({
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
})), eE = H("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), tE = H("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), nE = H("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), rg = {
  success: /* @__PURE__ */ u.jsx(YT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ u.jsx(GT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ u.jsx(XT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ u.jsx(QT, {
    fontSize: "inherit"
  })
}, Qu = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    icon: c,
    iconMapping: f = rg,
    onClose: m,
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
  }, S = ZT(h), w = {
    slots: b,
    slotProps: x
  }, [E, k] = ge("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: J(S.root, s),
    elementType: JT,
    externalForwardedProps: {
      ...w,
      ...y
    },
    ownerState: h,
    additionalProps: {
      role: v,
      elevation: 0
    }
  }), [R, T] = ge("icon", {
    className: S.icon,
    elementType: eE,
    externalForwardedProps: w,
    ownerState: h
  }), [A, N] = ge("message", {
    className: S.message,
    elementType: tE,
    externalForwardedProps: w,
    ownerState: h
  }), [I, g] = ge("action", {
    className: S.action,
    elementType: nE,
    externalForwardedProps: w,
    ownerState: h
  }), [$, P] = ge("closeButton", {
    elementType: pn,
    externalForwardedProps: w,
    ownerState: h
  }), [j, O] = ge("closeIcon", {
    elementType: qT,
    externalForwardedProps: w,
    ownerState: h
  });
  return /* @__PURE__ */ u.jsxs(E, {
    ...k,
    children: [c !== !1 ? /* @__PURE__ */ u.jsx(R, {
      ...T,
      children: c || f[d] || rg[d]
    }) : null, /* @__PURE__ */ u.jsx(A, {
      ...N,
      children: i
    }), o != null ? /* @__PURE__ */ u.jsx(I, {
      ...g,
      children: o
    }) : null, o == null && m ? /* @__PURE__ */ u.jsx(I, {
      ...g,
      children: /* @__PURE__ */ u.jsx($, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: m,
        ...P,
        children: /* @__PURE__ */ u.jsx(j, {
          fontSize: "small",
          ...O
        })
      })
    }) : null]
  });
});
function rE(e) {
  return de("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const oE = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${se(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return fe(s, rE, i);
}, iE = H("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${se(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
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
    })), ...Object.entries(e.palette).filter(Zt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${se(n)}`
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
})), og = {
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
}, Ce = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    variant: f = "body1",
    variantMapping: m = og,
    ...v
  } = r, d = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: c,
    variant: f,
    variantMapping: m
  }, x = l || m[f] || og[f] || "span", b = oE(d);
  return /* @__PURE__ */ u.jsx(iE, {
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
function Mo(e, t) {
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
var an = "top", Ln = "bottom", zn = "right", cn = "left", _p = "auto", hl = [an, Ln, zn, cn], $i = "start", Zs = "end", sE = "clippingParents", xx = "viewport", ns = "popper", lE = "reference", ig = /* @__PURE__ */ hl.reduce(function(e, t) {
  return e.concat([t + "-" + $i, t + "-" + Zs]);
}, []), Sx = /* @__PURE__ */ [].concat(hl, [_p]).reduce(function(e, t) {
  return e.concat([t, t + "-" + $i, t + "-" + Zs]);
}, []), aE = "beforeRead", cE = "read", uE = "afterRead", dE = "beforeMain", fE = "main", pE = "afterMain", mE = "beforeWrite", hE = "write", gE = "afterWrite", yE = [aE, cE, uE, dE, fE, pE, mE, hE, gE];
function yr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Fo(e) {
  var t = wn(e).Element;
  return e instanceof t || e instanceof Element;
}
function An(e) {
  var t = wn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Wp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = wn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function vE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !An(i) || !yr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function xE(e) {
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
      !An(o) || !yr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const SE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: vE,
  effect: xE,
  requires: ["computeStyles"]
};
function hr(e) {
  return e.split("-")[0];
}
var jo = Math.max, Ja = Math.min, Ai = Math.round;
function pf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function bx() {
  return !/^((?!chrome|android).)*safari/i.test(pf());
}
function Oi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && An(e) && (o = e.offsetWidth > 0 && Ai(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ai(r.height) / e.offsetHeight || 1);
  var s = Fo(e) ? wn(e) : window, l = s.visualViewport, a = !bx() && n, c = (r.left + (a && l ? l.offsetLeft : 0)) / o, f = (r.top + (a && l ? l.offsetTop : 0)) / i, m = r.width / o, v = r.height / i;
  return {
    width: m,
    height: v,
    top: f,
    right: c + m,
    bottom: f + v,
    left: c,
    x: c,
    y: f
  };
}
function Up(e) {
  var t = Oi(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function wx(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Wp(n)) {
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
  return wn(e).getComputedStyle(e);
}
function bE(e) {
  return ["table", "td", "th"].indexOf(yr(e)) >= 0;
}
function uo(e) {
  return ((Fo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function cu(e) {
  return yr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Wp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    uo(e)
  );
}
function sg(e) {
  return !An(e) || // https://github.com/popperjs/popper-core/issues/837
  Or(e).position === "fixed" ? null : e.offsetParent;
}
function wE(e) {
  var t = /firefox/i.test(pf()), n = /Trident/i.test(pf());
  if (n && An(e)) {
    var r = Or(e);
    if (r.position === "fixed")
      return null;
  }
  var o = cu(e);
  for (Wp(o) && (o = o.host); An(o) && ["html", "body"].indexOf(yr(o)) < 0; ) {
    var i = Or(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function gl(e) {
  for (var t = wn(e), n = sg(e); n && bE(n) && Or(n).position === "static"; )
    n = sg(n);
  return n && (yr(n) === "html" || yr(n) === "body" && Or(n).position === "static") ? t : n || wE(e) || t;
}
function Hp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cs(e, t, n) {
  return jo(e, Ja(t, n));
}
function CE(e, t, n) {
  var r = Cs(e, t, n);
  return r > n ? n : r;
}
function Cx() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function kx(e) {
  return Object.assign({}, Cx(), e);
}
function Tx(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var kE = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, kx(typeof t != "number" ? t : Tx(t, hl));
};
function TE(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = hr(n.placement), a = Hp(l), c = [cn, zn].indexOf(l) >= 0, f = c ? "height" : "width";
  if (!(!i || !s)) {
    var m = kE(o.padding, n), v = Up(i), d = a === "y" ? an : cn, x = a === "y" ? Ln : zn, b = n.rects.reference[f] + n.rects.reference[a] - s[a] - n.rects.popper[f], C = s[a] - n.rects.reference[a], y = gl(i), h = y ? a === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, S = b / 2 - C / 2, w = m[d], E = h - v[f] - m[x], k = h / 2 - v[f] / 2 + S, R = Cs(w, k, E), T = a;
    n.modifiersData[r] = (t = {}, t[T] = R, t.centerOffset = R - k, t);
  }
}
function EE(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || wx(t.elements.popper, o) && (t.elements.arrow = o));
}
const RE = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: TE,
  effect: EE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ni(e) {
  return e.split("-")[1];
}
var PE = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function IE(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ai(n * o) / o || 0,
    y: Ai(r * o) / o || 0
  };
}
function lg(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, c = e.adaptive, f = e.roundOffsets, m = e.isFixed, v = s.x, d = v === void 0 ? 0 : v, x = s.y, b = x === void 0 ? 0 : x, C = typeof f == "function" ? f({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  d = C.x, b = C.y;
  var y = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), S = cn, w = an, E = window;
  if (c) {
    var k = gl(n), R = "clientHeight", T = "clientWidth";
    if (k === wn(n) && (k = uo(n), Or(k).position !== "static" && l === "absolute" && (R = "scrollHeight", T = "scrollWidth")), k = k, o === an || (o === cn || o === zn) && i === Zs) {
      w = Ln;
      var A = m && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      b -= A - r.height, b *= a ? 1 : -1;
    }
    if (o === cn || (o === an || o === Ln) && i === Zs) {
      S = zn;
      var N = m && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      d -= N - r.width, d *= a ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: l
  }, c && PE), g = f === !0 ? IE({
    x: d,
    y: b
  }, wn(n)) : {
    x: d,
    y: b
  };
  if (d = g.x, b = g.y, a) {
    var $;
    return Object.assign({}, I, ($ = {}, $[w] = h ? "0" : "", $[S] = y ? "0" : "", $.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", $));
  }
  return Object.assign({}, I, (t = {}, t[w] = h ? b + "px" : "", t[S] = y ? d + "px" : "", t.transform = "", t));
}
function ME(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: hr(t.placement),
    variation: Ni(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, lg(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, lg(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const jE = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ME,
  data: {}
};
var _l = {
  passive: !0
};
function $E(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = wn(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, _l);
  }), l && a.addEventListener("resize", n.update, _l), function() {
    i && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, _l);
    }), l && a.removeEventListener("resize", n.update, _l);
  };
}
const AE = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: $E,
  data: {}
};
var OE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ya(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return OE[t];
  });
}
var NE = {
  start: "end",
  end: "start"
};
function ag(e) {
  return e.replace(/start|end/g, function(t) {
    return NE[t];
  });
}
function Vp(e) {
  var t = wn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Kp(e) {
  return Oi(uo(e)).left + Vp(e).scrollLeft;
}
function LE(e, t) {
  var n = wn(e), r = uo(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = bx();
    (c || !c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Kp(e),
    y: a
  };
}
function zE(e) {
  var t, n = uo(e), r = Vp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = jo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = jo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Kp(e), a = -r.scrollTop;
  return Or(o || n).direction === "rtl" && (l += jo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Yp(e) {
  var t = Or(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Ex(e) {
  return ["html", "body", "#document"].indexOf(yr(e)) >= 0 ? e.ownerDocument.body : An(e) && Yp(e) ? e : Ex(cu(e));
}
function ks(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ex(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = wn(r), s = o ? [i].concat(i.visualViewport || [], Yp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(ks(cu(s)))
  );
}
function mf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function DE(e, t) {
  var n = Oi(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function cg(e, t, n) {
  return t === xx ? mf(LE(e, n)) : Fo(t) ? DE(t, n) : mf(zE(uo(e)));
}
function BE(e) {
  var t = ks(cu(e)), n = ["absolute", "fixed"].indexOf(Or(e).position) >= 0, r = n && An(e) ? gl(e) : e;
  return Fo(r) ? t.filter(function(o) {
    return Fo(o) && wx(o, r) && yr(o) !== "body";
  }) : [];
}
function FE(e, t, n, r) {
  var o = t === "clippingParents" ? BE(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, c) {
    var f = cg(e, c, r);
    return a.top = jo(f.top, a.top), a.right = Ja(f.right, a.right), a.bottom = Ja(f.bottom, a.bottom), a.left = jo(f.left, a.left), a;
  }, cg(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Rx(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? hr(r) : null, i = r ? Ni(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case an:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Ln:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case zn:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case cn:
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
  var c = o ? Hp(o) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (i) {
      case $i:
        a[c] = a[c] - (t[f] / 2 - n[f] / 2);
        break;
      case Zs:
        a[c] = a[c] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return a;
}
function Js(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? sE : l, c = n.rootBoundary, f = c === void 0 ? xx : c, m = n.elementContext, v = m === void 0 ? ns : m, d = n.altBoundary, x = d === void 0 ? !1 : d, b = n.padding, C = b === void 0 ? 0 : b, y = kx(typeof C != "number" ? C : Tx(C, hl)), h = v === ns ? lE : ns, S = e.rects.popper, w = e.elements[x ? h : v], E = FE(Fo(w) ? w : w.contextElement || uo(e.elements.popper), a, f, s), k = Oi(e.elements.reference), R = Rx({
    reference: k,
    element: S,
    placement: o
  }), T = mf(Object.assign({}, S, R)), A = v === ns ? T : k, N = {
    top: E.top - A.top + y.top,
    bottom: A.bottom - E.bottom + y.bottom,
    left: E.left - A.left + y.left,
    right: A.right - E.right + y.right
  }, I = e.modifiersData.offset;
  if (v === ns && I) {
    var g = I[o];
    Object.keys(N).forEach(function($) {
      var P = [zn, Ln].indexOf($) >= 0 ? 1 : -1, j = [an, Ln].indexOf($) >= 0 ? "y" : "x";
      N[$] += g[j] * P;
    });
  }
  return N;
}
function _E(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? Sx : a, f = Ni(r), m = f ? l ? ig : ig.filter(function(x) {
    return Ni(x) === f;
  }) : hl, v = m.filter(function(x) {
    return c.indexOf(x) >= 0;
  });
  v.length === 0 && (v = m);
  var d = v.reduce(function(x, b) {
    return x[b] = Js(e, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[hr(b)], x;
  }, {});
  return Object.keys(d).sort(function(x, b) {
    return d[x] - d[b];
  });
}
function WE(e) {
  if (hr(e) === _p)
    return [];
  var t = ya(e);
  return [ag(e), t, ag(t)];
}
function UE(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, c = n.padding, f = n.boundary, m = n.rootBoundary, v = n.altBoundary, d = n.flipVariations, x = d === void 0 ? !0 : d, b = n.allowedAutoPlacements, C = t.options.placement, y = hr(C), h = y === C, S = a || (h || !x ? [ya(C)] : WE(C)), w = [C].concat(S).reduce(function(K, Z) {
      return K.concat(hr(Z) === _p ? _E(t, {
        placement: Z,
        boundary: f,
        rootBoundary: m,
        padding: c,
        flipVariations: x,
        allowedAutoPlacements: b
      }) : Z);
    }, []), E = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), T = !0, A = w[0], N = 0; N < w.length; N++) {
      var I = w[N], g = hr(I), $ = Ni(I) === $i, P = [an, Ln].indexOf(g) >= 0, j = P ? "width" : "height", O = Js(t, {
        placement: I,
        boundary: f,
        rootBoundary: m,
        altBoundary: v,
        padding: c
      }), L = P ? $ ? zn : cn : $ ? Ln : an;
      E[j] > k[j] && (L = ya(L));
      var M = ya(L), z = [];
      if (i && z.push(O[g] <= 0), l && z.push(O[L] <= 0, O[M] <= 0), z.every(function(K) {
        return K;
      })) {
        A = I, T = !1;
        break;
      }
      R.set(I, z);
    }
    if (T)
      for (var B = x ? 3 : 1, W = function(Z) {
        var G = w.find(function(X) {
          var U = R.get(X);
          if (U)
            return U.slice(0, Z).every(function(re) {
              return re;
            });
        });
        if (G)
          return A = G, "break";
      }, _ = B; _ > 0; _--) {
        var Q = W(_);
        if (Q === "break") break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const HE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: UE,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ug(e, t, n) {
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
function dg(e) {
  return [an, zn, Ln, cn].some(function(t) {
    return e[t] >= 0;
  });
}
function VE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Js(t, {
    elementContext: "reference"
  }), l = Js(t, {
    altBoundary: !0
  }), a = ug(s, r), c = ug(l, o, i), f = dg(a), m = dg(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: f,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": m
  });
}
const KE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: VE
};
function YE(e, t, n) {
  var r = hr(e), o = [cn, an].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [cn, zn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function GE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = Sx.reduce(function(f, m) {
    return f[m] = YE(m, t.rects, i), f;
  }, {}), l = s[t.placement], a = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
const XE = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: GE
};
function QE(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Rx({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const qE = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: QE,
  data: {}
};
function ZE(e) {
  return e === "x" ? "y" : "x";
}
function JE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, c = n.rootBoundary, f = n.altBoundary, m = n.padding, v = n.tether, d = v === void 0 ? !0 : v, x = n.tetherOffset, b = x === void 0 ? 0 : x, C = Js(t, {
    boundary: a,
    rootBoundary: c,
    padding: m,
    altBoundary: f
  }), y = hr(t.placement), h = Ni(t.placement), S = !h, w = Hp(y), E = ZE(w), k = t.modifiersData.popperOffsets, R = t.rects.reference, T = t.rects.popper, A = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, N = typeof A == "number" ? {
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
      var $, P = w === "y" ? an : cn, j = w === "y" ? Ln : zn, O = w === "y" ? "height" : "width", L = k[w], M = L + C[P], z = L - C[j], B = d ? -T[O] / 2 : 0, W = h === $i ? R[O] : T[O], _ = h === $i ? -T[O] : -R[O], Q = t.elements.arrow, K = d && Q ? Up(Q) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Cx(), G = Z[P], X = Z[j], U = Cs(0, R[O], K[O]), re = S ? R[O] / 2 - B - U - G - N.mainAxis : W - U - G - N.mainAxis, le = S ? -R[O] / 2 + B + U + X + N.mainAxis : _ + U + X + N.mainAxis, ke = t.elements.arrow && gl(t.elements.arrow), ye = ke ? w === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, ve = ($ = I == null ? void 0 : I[w]) != null ? $ : 0, oe = L + re - ve - ye, Le = L + le - ve, _e = Cs(d ? Ja(M, oe) : M, L, d ? jo(z, Le) : z);
      k[w] = _e, g[w] = _e - L;
    }
    if (l) {
      var Ee, $e = w === "x" ? an : cn, ue = w === "x" ? Ln : zn, je = k[E], Ve = E === "y" ? "height" : "width", Ae = je + C[$e], Ke = je - C[ue], We = [an, cn].indexOf(y) !== -1, et = (Ee = I == null ? void 0 : I[E]) != null ? Ee : 0, ze = We ? Ae : je - R[Ve] - T[Ve] - et + N.altAxis, Se = We ? je + R[Ve] + T[Ve] - et - N.altAxis : Ke, Me = d && We ? CE(ze, je, Se) : Cs(d ? ze : Ae, je, d ? Se : Ke);
      k[E] = Me, g[E] = Me - je;
    }
    t.modifiersData[r] = g;
  }
}
const eR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: JE,
  requiresIfExists: ["offset"]
};
function tR(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function nR(e) {
  return e === wn(e) || !An(e) ? Vp(e) : tR(e);
}
function rR(e) {
  var t = e.getBoundingClientRect(), n = Ai(t.width) / e.offsetWidth || 1, r = Ai(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function oR(e, t, n) {
  n === void 0 && (n = !1);
  var r = An(t), o = An(t) && rR(t), i = uo(t), s = Oi(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((yr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Yp(i)) && (l = nR(t)), An(t) ? (a = Oi(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Kp(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function iR(e) {
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
function sR(e) {
  var t = iR(e);
  return yE.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function lR(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function aR(e) {
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
var fg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function pg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function cR(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? fg : o;
  return function(l, a, c) {
    c === void 0 && (c = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fg, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, m = [], v = !1, d = {
      state: f,
      setOptions: function(y) {
        var h = typeof y == "function" ? y(f.options) : y;
        b(), f.options = Object.assign({}, i, f.options, h), f.scrollParents = {
          reference: Fo(l) ? ks(l) : l.contextElement ? ks(l.contextElement) : [],
          popper: ks(a)
        };
        var S = sR(aR([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = S.filter(function(w) {
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
          var y = f.elements, h = y.reference, S = y.popper;
          if (pg(h, S)) {
            f.rects = {
              reference: oR(h, gl(S), f.options.strategy === "fixed"),
              popper: Up(S)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(N) {
              return f.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var w = 0; w < f.orderedModifiers.length; w++) {
              if (f.reset === !0) {
                f.reset = !1, w = -1;
                continue;
              }
              var E = f.orderedModifiers[w], k = E.fn, R = E.options, T = R === void 0 ? {} : R, A = E.name;
              typeof k == "function" && (f = k({
                state: f,
                options: T,
                name: A,
                instance: d
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: lR(function() {
        return new Promise(function(C) {
          d.forceUpdate(), C(f);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!pg(l, a))
      return d;
    d.setOptions(c).then(function(C) {
      !v && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function x() {
      f.orderedModifiers.forEach(function(C) {
        var y = C.name, h = C.options, S = h === void 0 ? {} : h, w = C.effect;
        if (typeof w == "function") {
          var E = w({
            state: f,
            name: y,
            instance: d,
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
    return d;
  };
}
var uR = [AE, qE, jE, SE, XE, HE, eR, RE, KE], dR = /* @__PURE__ */ cR({
  defaultModifiers: uR
});
function Li(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : gx(n, r), {
    props: l,
    internalRef: a
  } = yx({
    ...i,
    externalSlotProps: s
  }), c = lt(a, s == null ? void 0 : s.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return hx(t, {
    ...l,
    ref: c
  }, r);
}
function fo(e) {
  var t;
  return parseInt(p.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function fR(e) {
  return typeof e == "function" ? e() : e;
}
const Px = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = p.useState(null), a = lt(/* @__PURE__ */ p.isValidElement(r) ? fo(r) : null, n);
  if (gt(() => {
    i || l(fR(o) || document.body);
  }, [o, i]), gt(() => {
    if (s && !i)
      return af(n, s), () => {
        af(n, null);
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
  return s && /* @__PURE__ */ f0.createPortal(r, s);
});
function pR(e) {
  return de("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function mR(e, t) {
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
function Ix(e) {
  return typeof e == "function" ? e() : e;
}
function hR(e) {
  return e.nodeType !== void 0;
}
const gR = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, pR, t);
}, yR = {}, vR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: c,
    popperOptions: f,
    popperRef: m,
    slotProps: v = {},
    slots: d = {},
    TransitionProps: x,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, y = p.useRef(null), h = lt(y, n), S = p.useRef(null), w = lt(S, m), E = p.useRef(w);
  gt(() => {
    E.current = w;
  }, [w]), p.useImperativeHandle(m, () => S.current, []);
  const k = mR(c, i), [R, T] = p.useState(k), A = p.useMemo(() => Ix(r), [r]);
  p.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), gt(() => {
    if (!A || !a)
      return;
    const P = (M) => {
      T(M.placement);
    };
    let j = [{
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
        P(M);
      }
    }];
    l != null && (j = j.concat(l)), f && f.modifiers != null && (j = j.concat(f.modifiers));
    const O = dR(A, y.current, {
      placement: k,
      ...f,
      modifiers: j
    });
    E.current(O);
    const L = y.current;
    return () => {
      if (L) {
        const {
          style: M
        } = L, z = M.position, B = M.top, W = M.left, _ = M.transform;
        O.destroy(), M.position = z, M.top = B, M.left = W, M.transform = _;
      } else
        O.destroy();
      E.current(null);
    };
  }, [A, s, l, a, f, k]);
  const N = {
    placement: R
  };
  x !== null && (N.TransitionProps = x);
  const I = gR(t), g = d.root ?? "div", $ = Li({
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
  return /* @__PURE__ */ u.jsx(g, {
    ...$,
    children: typeof o == "function" ? o(N) : o
  });
}), xR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: c,
    open: f,
    placement: m = "bottom",
    popperOptions: v = yR,
    popperRef: d,
    style: x,
    transition: b = !1,
    slotProps: C = {},
    slots: y = {},
    ...h
  } = t, [S, w] = p.useState(!0), E = () => {
    w(!1);
  }, k = () => {
    w(!0);
  };
  if (!a && !f && (!b || S))
    return null;
  let R;
  if (i)
    R = i;
  else if (r) {
    const N = Ix(r);
    R = N && hR(N) ? xt(N).body : xt(null).body;
  }
  const T = !f && a && (!b || S) ? "none" : void 0, A = b ? {
    in: f,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ u.jsx(Px, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ u.jsx(vR, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: c,
      ref: n,
      open: b ? !S : f,
      placement: m,
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
}), SR = H(xR, {
  name: "MuiPopper",
  slot: "Root"
})({}), Mx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = dl(), o = me({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: f,
    open: m,
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
    modifiers: f,
    open: m,
    placement: v,
    popperOptions: d,
    popperRef: x,
    transition: b,
    ...h
  };
  return /* @__PURE__ */ u.jsx(SR, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: y,
    ...S,
    ref: n
  });
}), bR = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function wR(e) {
  return de("MuiChip", e);
}
const Ue = ce("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), CR = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: i,
    clickable: s,
    variant: l
  } = e, a = {
    root: ["root", l, n && "disabled", `size${se(r)}`, `color${se(o)}`, s && "clickable", i && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return fe(a, wR, t);
}, kR = H("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => dn(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
    }, t.root, t[`size${se(s)}`], t[`color${se(r)}`], o && t.clickable, i && t.deletable, t[l]];
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
    ...wt(e, ["background-color", "box-shadow"]),
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
    }, ...Object.entries(e.palette).filter(Zt(["contrastText"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(Zt(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(Zt(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(Zt()).map(([n]) => ({
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
})), TR = H("span", {
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
function mg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Zo = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disabled: f = !1,
    icon: m,
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
  } = R, N = p.useRef(null), I = lt(N, n), g = (U) => {
    U.stopPropagation(), x(U);
  }, $ = (U) => {
    U.currentTarget === U.target && mg(U) && U.preventDefault(), b && b(U);
  }, P = (U) => {
    U.currentTarget === U.target && x && mg(U) && x(U), C && C(U);
  }, j = s !== !1 && d ? !0 : s, O = j || x ? Bo : a || "div", L = {
    ...r,
    component: O,
    disabled: f,
    size: y,
    color: l,
    iconColor: /* @__PURE__ */ p.isValidElement(m) && m.props.color || l,
    onDelete: !!x,
    clickable: j,
    variant: h
  }, M = CR(L), z = O === Bo ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: M.focusVisible,
    ...x && {
      disableRipple: !0
    },
    ...T !== void 0 && {
      nativeButton: T
    }
  } : {};
  let B = null;
  x && (B = c && /* @__PURE__ */ p.isValidElement(c) ? /* @__PURE__ */ p.cloneElement(c, {
    className: J(c.props.className, M.deleteIcon),
    onClick: g
  }) : /* @__PURE__ */ u.jsx(bR, {
    className: M.deleteIcon,
    onClick: g
  }));
  let W = null;
  o && /* @__PURE__ */ p.isValidElement(o) && (W = /* @__PURE__ */ p.cloneElement(o, {
    className: J(M.avatar, o.props.className)
  }));
  let _ = null;
  m && /* @__PURE__ */ p.isValidElement(m) && (_ = /* @__PURE__ */ p.cloneElement(m, {
    className: J(M.icon, m.props.className)
  }));
  const Q = {
    slots: E,
    slotProps: k
  }, [K, Z] = ge("root", {
    elementType: kR,
    externalForwardedProps: {
      ...Q,
      ...A
    },
    ownerState: L,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: I,
    className: J(M.root, i),
    additionalProps: {
      disabled: j && f ? !0 : void 0,
      tabIndex: w && f ? -1 : S,
      ...z
    },
    getSlotProps: (U) => ({
      ...U,
      onClick: (re) => {
        var le;
        (le = U.onClick) == null || le.call(U, re), d == null || d(re);
      },
      onKeyDown: (re) => {
        var le;
        (le = U.onKeyDown) == null || le.call(U, re), $(re);
      },
      onKeyUp: (re) => {
        var le;
        (le = U.onKeyUp) == null || le.call(U, re), P(re);
      }
    })
  }), [G, X] = ge("label", {
    elementType: TR,
    externalForwardedProps: Q,
    ownerState: L,
    className: M.label
  });
  return /* @__PURE__ */ u.jsxs(K, {
    as: O,
    ...Z,
    children: [W || _, /* @__PURE__ */ u.jsx(G, {
      ...X,
      children: v
    }), B]
  });
}), ER = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), RR = {
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
}, PR = {
  opacity: 0,
  visibility: "hidden"
}, jx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = vr(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: c,
    in: f,
    onEnter: m,
    onEntered: v,
    onEntering: d,
    onExit: x,
    onExited: b,
    onExiting: C,
    style: y,
    timeout: h = o,
    ...S
  } = t, w = ml(r.motion.reducedMotion, a), E = p.useRef(null), k = lt(E, fo(l), n), R = jt(E, d), T = jt(E, (P, j) => {
    w.shouldReduceMotion || ru(P);
    const O = ji({
      style: y,
      timeout: h,
      easing: c
    }, {
      mode: "enter"
    }), L = w.getTransitionTiming({
      duration: O.duration,
      delay: O.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: L.duration,
      easing: O.easing,
      delay: L.delay
    }), m && m(P, j);
  }), A = jt(E, v), N = jt(E, C), I = jt(E, (P) => {
    const j = ji({
      style: y,
      timeout: h,
      easing: c
    }, {
      mode: "exit"
    }), O = w.getTransitionTiming({
      duration: j.duration,
      delay: j.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: O.duration,
      easing: j.easing,
      delay: O.delay
    }), x && x(P);
  }), g = jt(E, (P) => {
    P.style.transition = "", b && b(P);
  }), $ = i ? (P) => {
    i(E.current, P);
  } : void 0;
  return /* @__PURE__ */ u.jsx(Fp, {
    appear: s,
    in: f,
    nodeRef: E,
    onEnter: T,
    onEntered: A,
    onEntering: R,
    onExit: I,
    onExited: g,
    onExiting: N,
    addEndListener: $,
    reduceMotion: w.shouldReduceMotion,
    timeout: h,
    ...S,
    children: (P, {
      ownerState: j,
      ...O
    }) => {
      const L = ux(P, f, RR, PR, y, l.props.style);
      return /* @__PURE__ */ p.cloneElement(l, {
        style: L,
        ref: k,
        ...O
      });
    }
  });
});
function IR(e) {
  return de("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const MR = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return fe({
    root: ["root", n && "invisible"]
  }, IR, t);
}, jR = H("div", {
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
}), $x = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    slots: f = {},
    transitionDuration: m,
    ...v
  } = r, d = {
    ...r,
    component: s,
    invisible: l
  }, x = MR(d), b = {
    component: s,
    slots: f,
    slotProps: c
  }, [C, y] = ge("root", {
    elementType: jR,
    externalForwardedProps: b,
    className: J(x.root, i),
    ownerState: d
  }), [h, S] = ge("transition", {
    elementType: jx,
    externalForwardedProps: b,
    ownerState: d
  });
  return /* @__PURE__ */ u.jsx(h, {
    in: a,
    timeout: m,
    ...v,
    ...S,
    children: /* @__PURE__ */ u.jsx(C, {
      ...y,
      ref: n,
      children: o
    })
  });
}), $R = ce("MuiBox", ["root"]), AR = nu(), He = UC({
  themeId: pr,
  defaultTheme: AR,
  defaultClassName: $R.root,
  generateClassName: H0.generate
});
function OR(e) {
  return de("MuiButton", e);
}
const go = ce("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), NR = /* @__PURE__ */ p.createContext({}), LR = /* @__PURE__ */ p.createContext(void 0), zR = (e) => {
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
    root: ["root", s && "loading", i, `size${se(o)}`, `color${se(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${se(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = fe(c, OR, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, Ax = [{
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
}], DR = H(Bo, {
  shouldForwardProp: (e) => dn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${se(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
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
    ...wt(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${go.disabled}`]: {
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
        [`&.${go.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${go.disabled}`]: {
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
        [`&.${go.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Zt()).map(([r]) => ({
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
        [`&.${go.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${go.disabled}`]: {
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
        ...wt(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${go.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), BR = H("span", {
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
      ...wt(e, ["opacity"], {
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
  }, ...Ax]
})), FR = H("span", {
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
      ...wt(e, ["opacity"], {
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
  }, ...Ax]
})), _R = H("span", {
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
})), hg = H("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), zt = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = p.useContext(NR), o = p.useContext(LR), i = qs(r, t), s = me({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: c = "button",
    className: f,
    disabled: m = !1,
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
  } = s, N = Ar(y), I = S ?? /* @__PURE__ */ u.jsx(wo, {
    "aria-labelledby": N,
    color: "inherit",
    size: 16
  }), g = {
    ...s,
    color: a,
    component: c,
    disabled: m,
    disableElevation: v,
    disableFocusRipple: d,
    fullWidth: C,
    loading: h,
    loadingIndicator: I,
    loadingPosition: w,
    size: E,
    type: R,
    variant: T
  }, $ = zR(g), P = (k || h && w === "start") && /* @__PURE__ */ u.jsx(BR, {
    className: $.startIcon,
    ownerState: g,
    children: k || /* @__PURE__ */ u.jsx(hg, {
      className: $.loadingIconPlaceholder,
      ownerState: g
    })
  }), j = (x || h && w === "end") && /* @__PURE__ */ u.jsx(FR, {
    className: $.endIcon,
    ownerState: g,
    children: x || /* @__PURE__ */ u.jsx(hg, {
      className: $.loadingIconPlaceholder,
      ownerState: g
    })
  }), O = o || "", L = typeof h == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ u.jsx("span", {
      className: $.loadingWrapper,
      style: {
        display: "contents"
      },
      children: h && /* @__PURE__ */ u.jsx(_R, {
        className: $.loadingIndicator,
        ownerState: g,
        children: I
      })
    })
  ) : null, {
    root: M,
    ...z
  } = $;
  return /* @__PURE__ */ u.jsxs(DR, {
    ownerState: g,
    className: J(r.className, $.root, f, O),
    component: c,
    disabled: m || h,
    focusRipple: !d,
    focusVisibleClassName: J($.focusVisible, b),
    ref: n,
    internalNativeButton: !0,
    type: R,
    id: h ? N : y,
    ...A,
    classes: z,
    children: [P, w !== "end" && L, l, w === "end" && L, j]
  });
});
function WR(e) {
  return de("MuiCard", e);
}
ce("MuiCard", ["root"]);
const UR = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, WR, t);
}, HR = H(gr, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), rs = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = UR(l);
  return /* @__PURE__ */ u.jsx(HR, {
    className: J(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function VR(e) {
  return de("MuiCardContent", e);
}
ce("MuiCardContent", ["root"]);
const KR = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, VR, t);
}, YR = H("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), os = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = KR(l);
  return /* @__PURE__ */ u.jsx(YR, {
    as: i,
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function gg(e) {
  return e.substring(2).toLowerCase();
}
function GR(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function XR(e) {
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
  const f = lt(fo(t), l), m = ot((x) => {
    const b = c.current;
    c.current = !1;
    const C = xt(l.current);
    if (!a.current || !l.current || "clientX" in x && GR(x, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let y;
    x.composedPath ? y = x.composedPath().includes(l.current) : y = !Mo(C.documentElement, x.target) || Mo(l.current, x.target), !y && (n || !b) && o(x);
  }), v = (x) => (b) => {
    c.current = !0;
    const C = t.props[x];
    C && C(b);
  }, d = {
    ref: f
  };
  return i !== !1 && (d[i] = v(i)), p.useEffect(() => {
    if (i !== !1) {
      const x = gg(i), b = xt(l.current), C = () => {
        s.current = !0;
      };
      return b.addEventListener(x, m), b.addEventListener("touchmove", C), () => {
        b.removeEventListener(x, m), b.removeEventListener("touchmove", C);
      };
    }
  }, [m, i]), r !== !1 && (d[r] = v(r)), p.useEffect(() => {
    if (r !== !1) {
      const x = gg(r), b = xt(l.current);
      return b.addEventListener(x, m), () => {
        b.removeEventListener(x, m);
      };
    }
  }, [m, r]), /* @__PURE__ */ p.cloneElement(t, d);
}
function Ox(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function QR(e) {
  const t = xt(e);
  return e === t.body || e === t.documentElement ? bn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ts(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function yg(e) {
  return parseFloat(bn(e).getComputedStyle(e).paddingRight) || 0;
}
function qR(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function vg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !qR(s);
    l && a && Ts(s, o);
  });
}
function ZR(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = xt(r).body;
    else {
      const s = r.parentElement, l = bn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (QR(i)) {
      const s = Ox(bn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${yg(i) + s}px`;
      const l = xt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${yg(a) + s}px`;
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
function JR(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class eP {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Ts(t.modalRef, !1);
    const o = JR(n);
    vg(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = ZR(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Ts(t.modalRef, n), vg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Ts(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const ec = "data-mui-focusable";
function xg(e) {
  return e ? e.hasAttribute(ec) ? e : e.querySelector(`[${ec}]`) : null;
}
const tP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Nx(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function nP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function rP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || nP(e));
}
function oP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(tP)).forEach((r, o) => {
    const i = Nx(r);
    i === -1 || !rP(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function iP() {
  return !0;
}
function sP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = oP,
    isEnabled: s = iP,
    open: l
  } = e, a = p.useRef(!1), c = p.useRef(null), f = p.useRef(null), m = p.useRef(null), v = p.useRef(null), d = p.useRef(!1), x = p.useRef(null), b = lt(fo(t), x), C = p.useRef(null);
  p.useEffect(() => {
    !l || !x.current || (d.current = !n);
  }, [n, l]), p.useEffect(() => {
    if (a.current = !1, !l || !x.current)
      return;
    const S = xt(x.current), w = cr(S), E = xg(x.current) ?? x.current;
    return Mo(x.current, w) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), d.current && E.focus()), () => {
      !o && m.current && (a.current = !0, m.current.focus(), m.current = null);
    };
  }, [l]), p.useEffect(() => {
    if (!l || !x.current)
      return;
    const S = xt(x.current), w = (R) => {
      if (C.current = R, r || !s() || R.key !== "Tab")
        return;
      const T = x.current, A = cr(S);
      if (T === null)
        return;
      const N = xg(T);
      if (A === T || A === N) {
        const g = i(T);
        if (g.length === 0)
          return;
        R.preventDefault(), R.shiftKey ? g[g.length - 1].focus() : g[0].focus();
        return;
      }
      if (Mo(T, A)) {
        const g = i(T), $ = g.indexOf(A);
        if ($ === -1 || !g.some((O) => Nx(O) > 0))
          return;
        R.preventDefault();
        let j = 0;
        R.shiftKey ? j = $ <= 0 ? g.length - 1 : $ - 1 : j = $ === g.length - 1 ? 0 : $ + 1, g[j].focus();
      }
    }, E = () => {
      var N, I;
      const R = x.current;
      if (R === null)
        return;
      const T = cr(S);
      if (!S.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (Mo(R, T) || r && T !== c.current && T !== f.current)
        return;
      if (T !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!d.current)
        return;
      let A = [];
      if ((T === c.current || T === f.current) && (A = i(x.current)), A.length > 0) {
        const g = !!((N = C.current) != null && N.shiftKey && ((I = C.current) == null ? void 0 : I.key) === "Tab"), $ = A[0], P = A[A.length - 1];
        typeof $ != "string" && typeof P != "string" && (g ? P.focus() : $.focus());
      } else
        R.focus();
    };
    S.addEventListener("focusin", E), S.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const R = cr(S);
      R && R.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), S.removeEventListener("focusin", E), S.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const y = (S) => {
    m.current === null && (m.current = S.relatedTarget), d.current = !0, v.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, h = (S) => {
    m.current === null && (m.current = S.relatedTarget), d.current = !0;
  };
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ u.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: h,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ p.cloneElement(t, {
      ref: b,
      onFocus: y
    }), /* @__PURE__ */ u.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: h,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
function lP(e) {
  return typeof e == "function" ? e() : e;
}
function aP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Sg = () => {
}, Wl = new eP();
function cP(e) {
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
  } = e, f = p.useRef({}), m = p.useRef(null), v = p.useRef(null), d = p.useRef(null), x = lt(d, c), [b, C] = p.useState(!a), y = aP(s);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const S = () => xt(m.current), w = () => (f.current.modalRef = d.current, f.current.mount = m.current, f.current), E = () => {
    Wl.mount(w(), {
      disableScrollLock: n
    }), d.current && (d.current.scrollTop = 0);
  }, k = ot(() => {
    const O = lP(t) || S().body;
    Wl.add(w(), O), d.current && E();
  }), R = () => Wl.isTopModal(w()), T = ot((O) => {
    m.current = O, O && (v.current = O, a && R() ? E() : d.current && Ts(d.current, h));
  }), A = p.useCallback(() => {
    Wl.remove(w(), h);
  }, [h]);
  p.useEffect(() => () => {
    A();
  }, [A]), p.useEffect(() => {
    a ? k() : (!y || !r) && A();
  }, [a, A, y, r, k]);
  const N = (O) => (L) => {
    var M;
    (M = O.onKeyDown) == null || M.call(O, L), !(L.key !== "Escape" || L.which === 229 || // Wait until IME is settled.
    !R()) && (L.stopPropagation(), l && l(L, "escapeKeyDown"));
  }, I = (O) => (L) => {
    var M;
    (M = O.onClick) == null || M.call(O, L), L.target === L.currentTarget && l && l(L, "backdropClick");
  }, g = (O = {}) => {
    const L = Qa(e);
    delete L.onTransitionEnter, delete L.onTransitionExited;
    const M = {
      ...L,
      ...O
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
      onKeyDown: N(M),
      ref: x
    };
  }, $ = (O = {}) => {
    const L = O;
    return {
      "aria-hidden": !0,
      ...L,
      onClick: I(L),
      open: a
    };
  }, P = () => {
    const O = () => {
      C(!1), o && o();
    }, L = () => {
      C(!0), i && i(), r && A();
    };
    return {
      onEnter: Xh(O, (s == null ? void 0 : s.props.onEnter) ?? Sg),
      onExited: Xh(L, (s == null ? void 0 : s.props.onExited) ?? Sg)
    };
  }, j = !a && y && !b ? v.current ?? t : t;
  return {
    getRootProps: g,
    getBackdropProps: $,
    getTransitionProps: P,
    rootRef: x,
    portalRef: T,
    portalContainer: j,
    isTopModal: R,
    exited: b,
    hasTransition: y
  };
}
function uP(e) {
  return de("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const dP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return fe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, uP, r);
}, fP = H("div", {
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
}))), pP = H($x, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Gp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disableAutoFocus: f = !1,
    disableEnforceFocus: m = !1,
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
    disableAutoFocus: f,
    disableEnforceFocus: m,
    disablePortal: v,
    disableRestoreFocus: d,
    disableScrollLock: x,
    hideBackdrop: b,
    keepMounted: C
  }, {
    getRootProps: N,
    getBackdropProps: I,
    getTransitionProps: g,
    portalRef: $,
    portalContainer: P,
    isTopModal: j,
    exited: O,
    hasTransition: L
  } = cP({
    ...A,
    rootRef: n
  }), M = {
    ...A,
    exited: O
  }, z = dP(M), B = {};
  if (l.props.tabIndex === void 0 && (B.tabIndex = "-1"), L) {
    const {
      onEnter: G,
      onExited: X
    } = g();
    B.onEnter = G, B.onExited = X;
  }
  const W = {
    slots: k,
    slotProps: E
  }, [_, Q] = ge("root", {
    ref: n,
    elementType: fP,
    externalForwardedProps: {
      ...W,
      ...T,
      component: c
    },
    getSlotProps: N,
    ownerState: M,
    className: J(i, z == null ? void 0 : z.root, !M.open && M.exited && (z == null ? void 0 : z.hidden))
  }), [K, Z] = ge("backdrop", {
    elementType: pP,
    externalForwardedProps: W,
    shouldForwardComponentProp: !0,
    getSlotProps: (G) => I({
      ...G,
      onClick: (X) => {
        G != null && G.onClick && G.onClick(X);
      }
    }),
    className: z == null ? void 0 : z.backdrop,
    ownerState: M
  });
  return !C && !w && (!L || O) ? null : /* @__PURE__ */ u.jsx(Px, {
    ref: $,
    container: P,
    disablePortal: v,
    children: /* @__PURE__ */ u.jsxs(_, {
      ...Q,
      children: [b ? null : /* @__PURE__ */ u.jsx(K, {
        ...Z
      }), /* @__PURE__ */ u.jsx(sP, {
        disableEnforceFocus: m,
        disableAutoFocus: f,
        disableRestoreFocus: d,
        isEnabled: j,
        open: w,
        children: /* @__PURE__ */ p.cloneElement(l, B)
      })]
    })
  });
});
function mP(e) {
  return de("MuiDialog", e);
}
ce("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const Lx = /* @__PURE__ */ p.createContext({}), hP = H($x, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), gP = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${se(n)}`],
    paper: ["paper", `paperWidth${se(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return fe(s, mP, t);
}, yP = H(Gp, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), vP = H("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${se(n.scroll)}`]];
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
}), xP = H(gr, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${se(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
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
}))), Ul = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialog"
  }), o = vr(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: c,
    className: f,
    fullScreen: m = !1,
    fullWidth: v = !1,
    maxWidth: d = "sm",
    onClick: x,
    onClose: b,
    open: C,
    PaperComponent: y = gr,
    role: h = "dialog",
    scroll: S = "paper",
    slots: w = {},
    slotProps: E = {},
    transitionDuration: k = i,
    ...R
  } = r, T = {
    ...r,
    fullScreen: m,
    fullWidth: v,
    maxWidth: d,
    scroll: S
  }, A = gP(T), N = p.useRef(), I = (G) => {
    N.current = G.target === G.currentTarget;
  }, g = (G) => {
    x && x(G), N.current && (N.current = null, b && b(G, "backdropClick"));
  }, $ = Ar(l), P = p.useMemo(() => ({
    titleId: $
  }), [$]), j = {
    slots: w,
    slotProps: E
  }, [O, L] = ge("root", {
    elementType: yP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: T,
    className: J(A.root, f),
    ref: n
  }), [M, z] = ge("backdrop", {
    elementType: hP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: T,
    className: A.backdrop
  }), [B, W] = ge("paper", {
    elementType: xP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: T,
    className: A.paper,
    additionalProps: {
      elevation: 24,
      role: h,
      "aria-describedby": s,
      "aria-labelledby": $,
      "aria-modal": a,
      tabIndex: -1,
      [ec]: ""
    }
  }), [_, Q] = ge("container", {
    elementType: vP,
    externalForwardedProps: j,
    ownerState: T,
    className: A.container
  }), [K, Z] = ge("transition", {
    elementType: jx,
    externalForwardedProps: j,
    ownerState: T,
    additionalProps: {
      appear: !0,
      in: C,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ u.jsx(O, {
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
    onClick: g,
    ...L,
    ...R,
    children: /* @__PURE__ */ u.jsx(K, {
      ...Z,
      children: /* @__PURE__ */ u.jsx(_, {
        onMouseDown: I,
        ...Q,
        children: /* @__PURE__ */ u.jsx(B, {
          as: y,
          ...W,
          children: /* @__PURE__ */ u.jsx(Lx.Provider, {
            value: P,
            children: c
          })
        })
      })
    })
  });
});
function SP(e) {
  return de("MuiDialogActions", e);
}
ce("MuiDialogActions", ["root", "spacing"]);
const bP = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return fe({
    root: ["root", !n && "spacing"]
  }, SP, t);
}, wP = H("div", {
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
}), Hl = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = bP(l);
  return /* @__PURE__ */ u.jsx(wP, {
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function CP(e) {
  return de("MuiDialogContent", e);
}
ce("MuiDialogContent", ["root", "dividers"]);
function kP(e) {
  return de("MuiDialogTitle", e);
}
const TP = ce("MuiDialogTitle", ["root"]), EP = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return fe({
    root: ["root", n && "dividers"]
  }, CP, t);
}, RP = H("div", {
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
      [`.${TP.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Vl = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = EP(l);
  return /* @__PURE__ */ u.jsx(RP, {
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), PP = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, kP, t);
}, IP = H(Ce, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Kl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = PP(l), {
    titleId: c = i
  } = p.useContext(Lx);
  return /* @__PURE__ */ u.jsx(IP, {
    component: "h2",
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? c,
    ...s
  });
});
function MP(e) {
  return de("MuiDivider", e);
}
const bg = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), jP = (e) => {
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
  }, MP, r);
}, $P = H("div", {
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
}))), AP = H("span", {
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
}))), OP = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: o = !1,
    children: i,
    className: s,
    orientation: l = "horizontal",
    component: a = i || l === "vertical" ? "div" : "hr",
    flexItem: c = !1,
    role: f = a !== "hr" ? "separator" : void 0,
    textAlign: m = "center",
    variant: v = "fullWidth",
    ...d
  } = r, x = {
    ...r,
    absolute: o,
    component: a,
    flexItem: c,
    orientation: l,
    role: f,
    textAlign: m,
    variant: v
  }, b = jP(x);
  return /* @__PURE__ */ u.jsx($P, {
    as: a,
    className: J(b.root, s),
    role: f,
    ref: n,
    ownerState: x,
    "aria-orientation": f === "separator" && (a !== "hr" || l === "vertical") ? l : void 0,
    ...d,
    children: i ? /* @__PURE__ */ u.jsx(AP, {
      className: b.wrapper,
      ownerState: x,
      children: i
    }) : null
  });
}), NP = {
  visibility: "hidden"
}, LP = {};
function zP(e) {
  return typeof e == "string" && /^translate\(.+,\s*.+\)$/.test(e);
}
function DP(e, t, n, r = LP) {
  const {
    resetInlineTransform: o = !0
  } = r, i = n && n.getBoundingClientRect(), s = bn(t);
  let l, a;
  if (o) {
    const m = t.style.transform, v = t.style.transition;
    t.style.transition = "", t.style.transform = "", l = t.getBoundingClientRect(), a = s.getComputedStyle(t).getPropertyValue("transform"), t.style.transform = m, t.style.transition = v;
  } else
    l = t.getBoundingClientRect(), a = s.getComputedStyle(t).getPropertyValue("transform");
  const {
    offsetX: c,
    offsetY: f
  } = Ak(a);
  return e === "left" ? i ? `translateX(${i.right + c - l.left}px)` : `translateX(${s.innerWidth + c - l.left}px)` : e === "right" ? i ? `translateX(-${l.right - i.left - c}px)` : `translateX(-${l.left + l.width - c}px)` : e === "up" ? i ? `translateY(${i.bottom + f - l.top}px)` : `translateY(${s.innerHeight + f - l.top}px)` : i ? `translateY(-${l.top - i.top + l.height - f}px)` : `translateY(-${l.top + l.height - f}px)`;
}
function BP(e) {
  return typeof e == "function" ? e() : e;
}
function Yl(e, t, n, r) {
  const o = BP(n), i = DP(e, t, o, r);
  i && (t.style.transform = i);
}
const wg = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = vr(), o = {
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
    disablePrefersReducedMotion: f = !1,
    direction: m = "down",
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
  } = t, R = ml(r.motion.reducedMotion, f), T = p.useRef(null), A = p.useRef(!1), N = lt(fo(a), T, n), I = jt(T, (z, B) => {
    Yl(m, z, c), R.shouldReduceMotion || ru(z), x && x(z, B);
  }), g = jt(T, (z, B) => {
    const W = ji({
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
    }), z.style.transform = "none", C && C(z, B);
  }), $ = jt(T, b), P = jt(T, S), j = jt(T, (z) => {
    const B = ji({
      timeout: E,
      style: w,
      easing: v
    }, {
      mode: "exit"
    }), W = R.getTransitionTiming({
      duration: B.duration,
      delay: B.delay
    });
    z.style.transition = r.transitions.create("transform", {
      duration: W.duration,
      easing: B.easing,
      delay: W.delay
    });
    const _ = zP(z.style.transform);
    A.current = _, Yl(m, z, c, {
      resetInlineTransform: !_
    }), y && y(z);
  }), O = jt(T, (z) => {
    A.current = !1, z.style.transition = "", h && h(z);
  }), L = s ? (z) => {
    s(T.current, z);
  } : void 0, M = p.useCallback(() => {
    T.current && Yl(m, T.current, c);
  }, [m, c]);
  return p.useEffect(() => {
    if (d || m === "down" || m === "right")
      return;
    const z = fl(() => {
      T.current && Yl(m, T.current, c);
    }), B = bn(T.current);
    return B.addEventListener("resize", z), () => {
      z.clear(), B.removeEventListener("resize", z);
    };
  }, [m, d, c]), p.useEffect(() => {
    !d && !A.current && M();
  }, [d, M]), /* @__PURE__ */ u.jsx(Fp, {
    nodeRef: T,
    onEnter: I,
    onEntered: $,
    onEntering: g,
    onExit: j,
    onExited: O,
    onExiting: P,
    addEndListener: L,
    appear: l,
    in: d,
    reduceMotion: R.shouldReduceMotion,
    timeout: E,
    ...k,
    children: (z, {
      ownerState: B,
      ...W
    }) => {
      let _;
      return z === "exited" && !d ? _ = w || a.props.style ? {
        visibility: "hidden",
        ...w,
        ...a.props.style
      } : NP : w && a.props.style ? _ = {
        ...w,
        ...a.props.style
      } : _ = w || a.props.style, /* @__PURE__ */ p.cloneElement(a, {
        ref: N,
        style: _,
        ...W
      });
    }
  });
});
function FP(e) {
  return de("MuiDrawer", e);
}
ce("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "modal"]);
const zx = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, n.variant === "temporary" && t.modal];
}, _P = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: r
  } = e, o = {
    root: ["root", `anchor${se(n)}`],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper"]
  };
  return fe(o, FP, t);
}, WP = H(Gp, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: zx
})(xe(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), UP = H("div", {
  shouldForwardProp: dn,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: zx
})({
  flex: "0 0 auto"
}), HP = H(gr, {
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
}))), Dx = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function VP(e) {
  return ["left", "right"].includes(e);
}
function KP({
  direction: e
}, t) {
  return e === "rtl" && VP(t) ? Dx[t] : t;
}
const YP = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDrawer"
  }), o = vr(), i = dl(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    children: a,
    className: c,
    elevation: f = 16,
    hideBackdrop: m = !1,
    ModalProps: v = {},
    onClose: d,
    open: x = !1,
    transitionDuration: b = s,
    variant: C = "temporary",
    slots: y = {},
    slotProps: h = {},
    ...S
  } = r, w = p.useRef(!1), E = p.useRef(null), k = lt(n, E);
  p.useEffect(() => {
    w.current = !0;
  }, []);
  const R = p.useCallback(() => E.current, []), T = KP({
    direction: i ? "rtl" : "ltr"
  }, l), N = {
    ...r,
    anchor: l,
    elevation: f,
    open: x,
    variant: C,
    ...S
  }, I = _P(N), g = {
    slots: y,
    slotProps: {
      ...h,
      backdrop: fx(h.backdrop, {
        transitionDuration: b
      })
    }
  }, [$, P] = ge("root", {
    ref: k,
    elementType: WP,
    className: J(I.root, I.modal, c),
    shouldForwardComponentProp: !0,
    ownerState: N,
    externalForwardedProps: {
      ...g,
      ...S,
      ...v
    },
    additionalProps: {
      closeAfterTransition: !0,
      open: x,
      onClose: d,
      hideBackdrop: m,
      slots: {
        backdrop: g.slots.backdrop
      },
      slotProps: {
        backdrop: g.slotProps.backdrop
      }
    }
  }), [j, O] = ge("paper", {
    elementType: HP,
    shouldForwardComponentProp: !0,
    className: I.paper,
    ownerState: N,
    externalForwardedProps: g,
    additionalProps: {
      elevation: C === "temporary" ? f : 0,
      square: !0,
      ...C === "temporary" && {
        role: "dialog",
        "aria-modal": "true",
        [ec]: "",
        tabIndex: -1
      }
    }
  }), [L, M] = ge("docked", {
    elementType: UP,
    ref: k,
    className: J(I.root, I.docked, c),
    ownerState: N,
    externalForwardedProps: g,
    additionalProps: S
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [z, B] = ge("transition", {
    elementType: wg,
    ownerState: N,
    externalForwardedProps: g,
    additionalProps: {
      in: x,
      direction: Dx[T],
      timeout: b,
      appear: w.current,
      ...C === "temporary" && (y.transition == null || y.transition === wg) && {
        container: R
      }
    }
  }), W = /* @__PURE__ */ u.jsx(j, {
    ...O,
    children: a
  });
  if (C === "permanent")
    return /* @__PURE__ */ u.jsx(L, {
      ...M,
      children: W
    });
  const _ = /* @__PURE__ */ u.jsx(z, {
    ...B,
    children: W
  });
  return C === "persistent" ? /* @__PURE__ */ u.jsx(L, {
    ...M,
    children: _
  }) : /* @__PURE__ */ u.jsx($, {
    ...P,
    children: _
  });
});
function Bx(e) {
  return de("MuiSelect", e);
}
const Co = ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), GP = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: l
  } = e, a = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${se(i)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, c = fe(a, Nk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...c
  };
}, XP = H(su, {
  shouldForwardProp: (e) => dn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...ou(e, t), !n.disableUnderline && t.underline];
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
    ...wt(e, "background-color", {
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
    [`&.${ho.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${ho.disabled}`]: {
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
          ...wt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${ho.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${ho.error}`]: {
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
          ...wt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${ho.disabled}, .${ho.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${ho.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Zt()).map(([s]) => {
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
        [`&.${Co.root}`]: {
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
})), QP = H(lu, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: iu
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
}))), Xp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    slotProps: f,
    slots: m = {},
    type: v = "text",
    ...d
  } = r, x = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: v
  }, b = GP(r), C = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, y = f ? Wt(C, f) : C, h = m.root ?? XP, S = m.input ?? QP;
  return /* @__PURE__ */ u.jsx(zp, {
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
Xp.muiName = "Input";
function qP(e) {
  return de("MuiFormControl", e);
}
ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const ZP = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${se(n)}`, r && "fullWidth"]
  };
  return fe(o, qP, t);
}, JP = H("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${se(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), eI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    focused: f,
    fullWidth: m = !1,
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
    fullWidth: m,
    hiddenLabel: v,
    margin: d,
    required: x,
    size: b,
    variant: C
  }, S = ZP(h), [w, E] = p.useState(() => {
    let j = !1;
    return o && p.Children.forEach(o, (O) => {
      if (!Ku(O, ["Input", "Select"]))
        return;
      const L = Ku(O, ["Select"]) ? O.props.input : O;
      L && kk(L.props) && (j = !0);
    }), j;
  }), [k, R] = p.useState(() => {
    let j = !1;
    return o && p.Children.forEach(o, (O) => {
      Ku(O, ["Input", "Select"]) && (Ga(O.props, !0) || Ga(O.props.inputProps, !0)) && (j = !0);
    }), j;
  }), [T, A] = p.useState(!1);
  a && T && A(!1);
  const N = f !== void 0 && !a ? f : T;
  let I;
  p.useRef(!1);
  const g = p.useCallback(() => {
    R(!0);
  }, []), $ = p.useCallback(() => {
    R(!1);
  }, []), P = p.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: c,
    filled: k,
    focused: N,
    fullWidth: m,
    hiddenLabel: v,
    size: b,
    onBlur: () => {
      A(!1);
    },
    onFocus: () => {
      A(!0);
    },
    onEmpty: $,
    onFilled: g,
    registerEffect: I,
    required: x,
    variant: C
  }), [w, s, a, c, k, N, m, v, I, $, g, x, b, C]);
  return /* @__PURE__ */ u.jsx(pl.Provider, {
    value: P,
    children: /* @__PURE__ */ u.jsx(JP, {
      as: l,
      ownerState: h,
      className: J(S.root, i),
      ref: n,
      ...y,
      children: o
    })
  });
});
var Cg;
const tI = (e) => {
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
    root: ["root", o && "disabled", i && "error", r && `size${se(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return fe(c, Lk, t);
}, nI = H("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${se(n.size)}`], n.contained && t.contained, n.filled && t.filled];
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
  [`&.${Gh.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Gh.error}`]: {
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
}))), rI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    focused: f,
    margin: m,
    required: v,
    variant: d,
    ...x
  } = r, [b] = _i({
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
  const y = tI(C);
  return /* @__PURE__ */ u.jsx(nI, {
    as: s,
    className: J(y.root, i),
    ref: n,
    ...x,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Cg || (Cg = /* @__PURE__ */ u.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), oI = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${se(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return fe(a, zk, t);
}, iI = H("label", {
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
  variants: [...Object.entries(e.palette).filter(Zt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${ws.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${ws.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${ws.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), sI = H("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(xe(({
  theme: e
}) => ({
  [`&.${ws.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), lI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    filled: f,
    focused: m,
    required: v,
    ...d
  } = r, [x] = _i({
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
  }, C = oI(b);
  return /* @__PURE__ */ u.jsxs(iI, {
    as: l,
    ownerState: b,
    className: J(C.root, i),
    ref: n,
    ...d,
    children: [o, x.required && /* @__PURE__ */ u.jsxs(sI, {
      ownerState: b,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Es(e) {
  return `scale(${e}, ${e ** 2})`;
}
const aI = {
  entering: {
    opacity: 1,
    transform: Es(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: Es(0.75)
  },
  exited: {
    opacity: 0,
    transform: Es(0.75)
  }
}, cI = {
  opacity: 0,
  transform: Es(0.75),
  visibility: "hidden"
}, el = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: c,
    onEntered: f,
    onEntering: m,
    onExit: v,
    onExited: d,
    onExiting: x,
    style: b,
    timeout: C = "auto",
    ...y
  } = t, h = p.useRef(null), S = vr(), w = ml(S.motion.reducedMotion, s), E = p.useRef(null), k = lt(E, fo(i), n), R = jt(E, m), T = jt(E, (P, j) => {
    w.shouldReduceMotion || ru(P);
    const {
      duration: O,
      delay: L,
      easing: M
    } = ji({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    C === "auto" && !w.shouldReduceMotion ? (z = S.transitions.getAutoHeightDuration(P.clientHeight), h.current = z) : (z = O, h.current = null);
    const B = w.getTransitionTiming({
      duration: z,
      delay: L
    });
    P.style.transition = [S.transitions.create("opacity", {
      duration: B.duration,
      delay: B.delay
    }), S.transitions.create("transform", {
      duration: typeof B.duration == "string" ? B.duration : B.duration * 0.666,
      delay: B.delay,
      easing: M
    })].join(","), c && c(P, j);
  }), A = jt(E, f), N = jt(E, x), I = jt(E, (P) => {
    const {
      duration: j,
      delay: O,
      easing: L
    } = ji({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let M;
    C === "auto" && !w.shouldReduceMotion ? (M = S.transitions.getAutoHeightDuration(P.clientHeight), h.current = M) : (M = j, h.current = null);
    const z = w.getTransitionTiming({
      duration: M,
      delay: O
    });
    P.style.transition = [S.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), S.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: L
    })].join(","), P.style.opacity = 0, P.style.transform = Es(0.75), v && v(P);
  }), g = jt(E, (P) => {
    P.style.transition = "", d && d(P);
  }), $ = r ? (P) => {
    r(E.current, P);
  } : void 0;
  return /* @__PURE__ */ u.jsx(Fp, {
    appear: o,
    in: a,
    nodeRef: E,
    onEnter: T,
    onEntered: A,
    onEntering: R,
    onExit: I,
    onExited: g,
    onExiting: N,
    addEndListener: $,
    getAutoTimeout: C === "auto" ? () => h.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...y,
    children: (P, {
      ownerState: j,
      ...O
    }) => {
      const L = ux(P, a, aI, cI, b, i.props.style);
      return /* @__PURE__ */ p.cloneElement(i, {
        style: L,
        ref: k,
        ...O
      });
    }
  });
});
el && (el.muiSupportAuto = !0);
function uI(e) {
  return de("MuiInputLabel", e);
}
const dI = ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), fI = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = fe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Dk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, pI = H(su, {
  shouldForwardProp: (e) => dn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...ou(e, t), !n.disableUnderline && t.underline];
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
        [`label + &, .${dI.root} + &`]: {
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
          ...wt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${es.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${es.error}`]: {
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
          ...wt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${es.disabled}, .${es.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${es.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Zt()).map(([r]) => ({
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
})), mI = H(lu, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: iu
})({}), Qp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    slots: f = {},
    type: m = "text",
    ...v
  } = r, d = fI(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = c ? Wt(c, b) : b, y = f.root ?? pI, h = f.input ?? mI;
  return /* @__PURE__ */ u.jsx(zp, {
    slots: {
      root: y,
      input: h
    },
    slotProps: C,
    fullWidth: i,
    inputComponent: s,
    multiline: l,
    ref: n,
    type: m,
    ...v,
    classes: d
  });
});
Qp.muiName = "Input";
function hI(e) {
  return de("MuiInputAdornment", e);
}
const di = ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var kg;
const gI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${se(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, yI = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: s
  } = e, l = {
    root: ["root", n && "disablePointerEvents", o && `position${se(o)}`, s, r && "hiddenLabel", i && `size${se(i)}`]
  };
  return fe(l, hI, t);
}, vI = H("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: gI
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
      [`&.${di.positionStart}&:not(.${di.hiddenLabel})`]: {
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
}))), xI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    variant: f,
    ...m
  } = r, v = bk() || {};
  let d = f;
  f && v.variant, v && !d && (d = v.variant);
  const x = {
    ...r,
    hiddenLabel: v.hiddenLabel,
    size: v.size,
    disablePointerEvents: l,
    position: c,
    variant: d
  }, b = yI(x);
  return /* @__PURE__ */ u.jsx(pl.Provider, {
    value: null,
    children: /* @__PURE__ */ u.jsx(vI, {
      as: s,
      ownerState: x,
      className: J(b.root, i),
      ref: n,
      ...m,
      children: typeof o == "string" && !a ? /* @__PURE__ */ u.jsx(Ce, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ u.jsxs(p.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          kg || (kg = /* @__PURE__ */ u.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), SI = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${se(r)}`, s],
    asterisk: [l && "asterisk"]
  }, c = fe(a, uI, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...c
  };
}, bI = H(lI, {
  shouldForwardProp: (e) => dn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ws.asterisk}`]: t.asterisk
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
      ...wt(e, ["color", "transform", "max-width"], {
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
}))), wI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  } = r, [f, m] = _i({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let v = s;
  typeof v > "u" && m && (v = m.filled || m.focused || m.adornedStart);
  const d = {
    ...r,
    disableAnimation: o,
    formControl: m,
    shrink: v,
    size: f.size,
    variant: f.variant,
    required: f.required,
    focused: f.focused
  }, x = SI(d);
  return /* @__PURE__ */ u.jsx(bI, {
    "data-shrink": v,
    ref: n,
    className: J(x.root, a),
    ...c,
    ownerState: d,
    classes: x
  });
}), hf = /* @__PURE__ */ p.createContext({});
function CI(e) {
  return de("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const kI = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return fe({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, CI, t);
}, TI = H("ul", {
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
}), EI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    ...f
  } = r, m = p.useMemo(() => ({
    dense: l
  }), [l]), v = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, d = kI(v);
  return /* @__PURE__ */ u.jsx(hf.Provider, {
    value: m,
    children: /* @__PURE__ */ u.jsxs(TI, {
      as: s,
      className: J(d.root, i),
      ref: n,
      ownerState: v,
      ...f,
      children: [c, o]
    })
  });
}), Tg = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Eg = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), qp = /* @__PURE__ */ p.createContext(void 0);
function Fx() {
  const e = p.useContext(qp);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const RI = Object.is;
function PI(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !RI(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const II = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function _x(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = Rs,
    wrap: s = !0
  } = e, [l, a] = p.useState(t), [c, f] = p.useState(t);
  let m = l;
  t !== c && (f(t), t !== void 0 && t !== l && (m = t, a(t)));
  const v = p.useRef(null), d = p.useRef(/* @__PURE__ */ new Map()), [x, b] = p.useState(0), C = p.useMemo(() => gf(d.current), [x]), y = Rg(m, C, i, n), h = p.useRef(y);
  h.current = y;
  const S = p.useCallback(() => {
    const g = gf(d.current), $ = Rg(h.current, g, i, n);
    return Vx(g, $);
  }, [n, i]), w = p.useCallback(() => d.current, []), E = ot((g) => {
    const $ = d.current.get(g.id);
    PI($ ?? null, g) || (d.current.set(g.id, g), b((P) => P + 1));
  }), k = ot((g) => {
    d.current.delete(g) && b(($) => $ + 1);
  }), R = ot((g) => {
    a(g);
  }), T = p.useCallback((g) => h.current === g, []), A = p.useCallback((g, $, P, j) => {
    var M;
    const O = Gl(d.current), L = Ux(O, g, $, P, j ?? i);
    return L ? ((M = L.element) == null || M.focus(), a(L.id), L) : null;
  }, [i]), N = p.useCallback((g, $, P) => ({
    onFocus: (L) => {
      $ == null || $(L);
      const M = Gl(d.current), z = Yx(M, L.target);
      z !== -1 && a(M[z].id);
    },
    onKeyDown: (L) => {
      if (P == null || P(L), L.defaultPrevented || L.altKey || L.shiftKey || L.ctrlKey || L.metaKey || !II.includes(L.key))
        return;
      let M = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (M = "ArrowRight", z = "ArrowLeft");
      const B = Gl(d.current), W = cr(xt(v.current)), _ = W === v.current;
      let Q = Pg(B, W, h.current), K = "next";
      switch (L.key) {
        case M:
          K = "previous", L.preventDefault(), _ && (Q = B.length);
          break;
        case z:
          L.preventDefault(), _ && (Q = -1);
          break;
        case "Home":
          L.preventDefault(), Q = -1;
          break;
        case "End":
          L.preventDefault(), K = "previous", Q = B.length;
          break;
        default:
          return;
      }
      A(Q, K, s);
    },
    ref: AI(g, (L) => {
      v.current = L;
    })
  }), [A, o, r, s]), I = p.useCallback((g) => {
    var L;
    const $ = Gl(d.current), P = cr(xt(v.current)), O = P === v.current ? -1 : Pg($, P, h.current);
    return ((L = A(O, "next", !0, g)) == null ? void 0 : L.id) ?? null;
  }, [A]);
  return p.useMemo(() => ({
    activeItemId: y,
    focusNext: I,
    getActiveItem: S,
    getContainerProps: N,
    getItemMap: w,
    isItemActive: T,
    registerItem: E,
    setActiveItemId: R,
    unregisterItem: k
  }), [y, I, S, N, w, T, E, R, k]);
}
function Wx(e) {
  const t = Fx(), {
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
  const a = p.useCallback((f) => {
    if (i.current = f, f == null) {
      queueMicrotask(() => {
        i.current == null && o(e.id);
      });
      return;
    }
    r({
      ...l.current,
      element: f
    });
  }, [e.id, r, o]), c = lt(e.ref, a);
  return gt(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), gt(() => {
    const f = e.id;
    return () => {
      o(f);
    };
  }, [e.id, o]), {
    ref: c,
    tabIndex: n === e.id ? 0 : -1
  };
}
function Rg(e, t, n, r) {
  return e != null ? MI(e, t, n) : jI(t, n, r);
}
function MI(e, t, n) {
  var o;
  const r = Kx(t, e);
  return r === -1 ? Hx(t, n) : n(t[r]) ? t[r].id : ((o = Ux(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function jI(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = Vx(e, r);
    if (o && t(o))
      return o.id;
  }
  return Hx(e, t);
}
function Pg(e, t, n) {
  if (t) {
    const r = Yx(e, t);
    if (r !== -1)
      return r;
  }
  return Kx(e, n);
}
function Ux(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = Ig(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const c = e[l];
    if (!c || !o(c))
      l = Ig(l, i, n, r);
    else
      return c;
  }
  return null;
}
function Hx(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function Vx(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function Kx(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function Yx(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function gf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(yf).sort((o, i) => $I(o.element, i.element)), r = t.filter((o) => !yf(o));
  return [...n, ...r];
}
function Gl(e) {
  return gf(e).filter(yf);
}
function Ig(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function Rs(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function yf(e) {
  return e.element != null && e.element.isConnected;
}
function $I(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function AI(...e) {
  return (t) => {
    e.forEach((n) => {
      af(n ?? null, t);
    });
  };
}
function Gx(e, t) {
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
function OI(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function NI(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function va(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Xx = /* @__PURE__ */ p.createContext(null);
function Qx() {
  return p.useContext(Xx);
}
const LI = Xx.Provider, qx = /* @__PURE__ */ p.createContext(void 0);
function zI() {
  const e = p.useContext(qx);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function DI(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function Zx(e, t) {
  if (t === void 0)
    return !0;
  let n = DI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function BI(e, t) {
  return Zx(e, t) ? Rs(e) : !1;
}
function FI(e, t) {
  Gx(e, t);
}
const _I = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    onKeyDown: f,
    variant: m = "selectedMenu",
    ...v
  } = t, d = p.useRef(null), x = p.useRef(!1), [b, C] = p.useState(!1), y = Qx(), h = p.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), S = p.useCallback((j) => {
    var O, L, M;
    return m === "selectedMenu" ? ((O = j.find((z) => z.selected && Rs(z))) == null ? void 0 : O.id) ?? ((L = j.find((z) => Rs(z))) == null ? void 0 : L.id) ?? null : ((M = j.find((z) => Rs(z))) == null ? void 0 : M.id) ?? null;
  }, [m]), w = _x({
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
  } = w, N = ot((j = !1) => {
    if (!d.current || !j && x.current)
      return null;
    if (i) {
      const O = R();
      if (O != null && O.element) {
        const L = Array.from(A().values()).some((z) => z.selected), M = m === "menu" && L && !O.selected && y == null;
        return C(M), FI(O.element, y), x.current = !0, O.element;
      }
      return o ? (C(!1), d.current.focus(), d.current) : null;
    }
    return o ? (C(!1), d.current.focus(), x.current = !0, d.current) : (C(!1), null);
  });
  gt(() => {
    if (!o && !i) {
      x.current = !1, C(!1);
      return;
    }
    N();
  }, [E, i, o, N]), p.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (j, {
      direction: O
    }) => {
      const L = !d.current.style.width;
      if (j.clientHeight < d.current.clientHeight && L) {
        const M = `${Ox(bn(j))}px`;
        d.current.style[O === "rtl" ? "paddingLeft" : "paddingRight"] = M, d.current.style.width = `calc(100% + ${M})`;
      }
      return d.current;
    },
    focusInitialTarget: () => {
      if (!d.current)
        return null;
      const j = cr(xt(d.current));
      return j && Mo(d.current, j) ? j : N(!0);
    }
  }), [N]);
  const I = T(void 0, v.onFocus), g = lt(d, I.ref, n), $ = p.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: b,
    variant: m
  }), [a, b, m]), P = ot((j) => {
    if (b && C(!1), (j.ctrlKey || j.metaKey || j.altKey) && f) {
      f(j);
      return;
    }
    if (I.onKeyDown(j), j.key.length === 1) {
      const L = h.current, M = j.key.toLowerCase(), z = performance.now();
      L.keys.length > 0 && (z - L.lastTime > 500 ? (L.keys = [], L.repeating = !0, L.previousKeyMatched = !0) : L.repeating && M !== L.keys[0] && (L.repeating = !1)), L.lastTime = z, L.keys.push(M);
      const B = cr(xt(d.current)), W = B && !L.repeating && Zx(B, L);
      L.previousKeyMatched && (W || k((_) => BI(_, L)) != null) ? j.preventDefault() : L.previousKeyMatched = !1;
    }
    f && f(j);
  });
  return /* @__PURE__ */ u.jsx(EI, {
    role: "menu",
    ref: g,
    className: l,
    onKeyDown: P,
    tabIndex: -1,
    ...v,
    onFocus: I.onFocus,
    children: /* @__PURE__ */ u.jsx(qx.Provider, {
      value: $,
      children: /* @__PURE__ */ u.jsx(qp.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function WI(e) {
  return de("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function Mg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function jg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function $g(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Xl(e) {
  return typeof e == "function" ? e() : e;
}
const UI = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    paper: ["paper"]
  }, WI, t);
}, HI = H(Gp, {
  name: "MuiPopover",
  slot: "Root"
})({}), Jx = H(gr, {
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
}), VI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    className: f,
    container: m,
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
  } = r, k = p.useRef(), R = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: d,
    marginThreshold: x,
    transformOrigin: h,
    transitionDuration: S
  }, T = UI(R), A = p.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const U = Xl(i), le = (U && U.nodeType === 1 ? U : xt(k.current).body).getBoundingClientRect();
    return {
      top: le.top + Mg(le, s.vertical),
      left: le.left + jg(le, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), N = p.useCallback((U) => ({
    vertical: Mg(U, h.vertical),
    horizontal: jg(U, h.horizontal)
  }), [h.horizontal, h.vertical]), I = p.useCallback((U) => {
    const re = {
      width: U.offsetWidth,
      height: U.offsetHeight
    }, le = N(re);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: $g(le)
      };
    const ke = A();
    let ye = ke.top - le.vertical, ve = ke.left - le.horizontal;
    const oe = ye + re.height, Le = ve + re.width, _e = bn(Xl(i)), Ee = _e.innerHeight - x, $e = _e.innerWidth - x;
    if (x != null && ye < x) {
      const ue = ye - x;
      ye -= ue, le.vertical += ue;
    } else if (x != null && oe > Ee) {
      const ue = oe - Ee;
      ye -= ue, le.vertical += ue;
    }
    if (x != null && ve < x) {
      const ue = ve - x;
      ve -= ue, le.horizontal += ue;
    } else if (Le > $e) {
      const ue = Le - $e;
      ve -= ue, le.horizontal += ue;
    }
    return {
      top: `${Math.round(ye)}px`,
      left: `${Math.round(ve)}px`,
      transformOrigin: $g(le)
    };
  }, [i, a, A, N, x]), [g, $] = p.useState(b), P = p.useCallback(() => {
    const U = k.current;
    if (!U)
      return;
    const re = I(U);
    re.top != null && U.style.setProperty("top", re.top), re.left != null && (U.style.left = re.left), U.style.transformOrigin = re.transformOrigin, $(!0);
  }, [I]);
  p.useEffect(() => (w && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [i, w, P]);
  const j = () => {
    P();
  }, O = () => {
    $(!1);
  };
  p.useEffect(() => {
    b && P();
  }), p.useImperativeHandle(o, () => b ? {
    updatePosition: () => {
      P();
    }
  } : null, [b, P]), p.useEffect(() => {
    if (!b)
      return;
    const U = fl(() => {
      P();
    }), re = bn(Xl(i));
    return re.addEventListener("resize", U), () => {
      U.clear(), re.removeEventListener("resize", U);
    };
  }, [i, b, P]);
  let L = S;
  const M = {
    slots: C,
    slotProps: y
  }, [z, B] = ge("transition", {
    elementType: el,
    externalForwardedProps: M,
    ownerState: R,
    getSlotProps: (U) => ({
      ...U,
      onEntering: (re, le) => {
        var ke;
        (ke = U.onEntering) == null || ke.call(U, re, le), j();
      },
      onExited: (re) => {
        var le;
        (le = U.onExited) == null || le.call(U, re), O();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  S === "auto" && !z.muiSupportAuto && (L = void 0);
  const W = m || (i ? xt(Xl(i)).body : void 0), [_, {
    slots: Q,
    slotProps: K,
    ...Z
  }] = ge("root", {
    ref: n,
    elementType: HI,
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
        backdrop: fx(typeof y.backdrop == "function" ? y.backdrop(R) : y.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: b
    },
    ownerState: R,
    className: J(T.root, f)
  }), [G, X] = ge("paper", {
    ref: k,
    className: T.paper,
    elementType: Jx,
    externalForwardedProps: M,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: d,
      style: g ? void 0 : {
        opacity: 0
      }
    },
    ownerState: R
  });
  return /* @__PURE__ */ u.jsx(_, {
    ...Z,
    ...!Ya(_) && {
      slots: Q,
      slotProps: K,
      disableAutoFocus: v,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ u.jsx(z, {
      ...B,
      timeout: L,
      children: /* @__PURE__ */ u.jsx(G, {
        ...X,
        children: c
      })
    })
  });
});
function KI(e) {
  return de("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const YI = {
  vertical: "top",
  horizontal: "right"
}, GI = {
  vertical: "top",
  horizontal: "left"
}, XI = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, KI, t);
}, QI = H(VI, {
  shouldForwardProp: (e) => dn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), qI = H(Jx, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), ZI = H(_I, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), JI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    PopoverClasses: f,
    transitionDuration: m = "auto",
    variant: v = "selectedMenu",
    slots: d = {},
    slotProps: x = {},
    ...b
  } = r, C = dl(), y = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: m,
    variant: v
  }, h = XI(y), S = o && c, w = S && !l, E = p.useRef(null), k = (j, O) => {
    var L, M;
    E.current && (E.current.adjustStyleForScrollbar(j, {
      direction: C ? "rtl" : "ltr"
    }), S && ((M = (L = E.current).focusInitialTarget) == null || M.call(L)));
  }, R = (j) => {
    j.key === "Tab" && (j.preventDefault(), a && a(j, "tabKeyDown"));
  }, T = {
    slots: d,
    slotProps: x
  }, A = Li({
    elementType: d.root,
    externalSlotProps: x.root,
    ownerState: y,
    className: [h.root, s]
  }), [N, I] = ge("paper", {
    className: h.paper,
    elementType: qI,
    externalForwardedProps: T,
    shouldForwardComponentProp: !0,
    ownerState: y
  }), [g, $] = ge("list", {
    className: h.list,
    elementType: ZI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: T,
    getSlotProps: (j) => ({
      ...j,
      onKeyDown: (O) => {
        var L;
        R(O), (L = j.onKeyDown) == null || L.call(j, O);
      }
    }),
    ownerState: y
  }), P = typeof x.transition == "function" ? x.transition(y) : x.transition;
  return /* @__PURE__ */ u.jsx(
    QI,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? YI : GI,
      slots: {
        root: d.root,
        paper: N,
        backdrop: d.backdrop,
        transition: d.transition
      },
      slotProps: {
        root: A,
        paper: I,
        backdrop: typeof x.backdrop == "function" ? x.backdrop(y) : x.backdrop,
        transition: {
          ...P,
          onEntering: (...j) => {
            var O;
            k(...j), (O = P == null ? void 0 : P.onEntering) == null || O.call(P, ...j);
          }
        }
      },
      open: c,
      ref: n,
      transitionDuration: m,
      ownerState: y,
      ...b,
      classes: f,
      children: /* @__PURE__ */ u.jsx(g, {
        actions: E,
        autoFocus: S,
        autoFocusItem: w,
        variant: v,
        ...$,
        children: i
      })
    }
  );
}), eM = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, tM = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = fe({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, Bk, s);
  return {
    ...s,
    ...a
  };
}, nM = H(Bo, {
  shouldForwardProp: (e) => dn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: eM
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
  [`&.${ts.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${ts.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${ts.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${ts.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ts.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${bg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${bg.inset}`]: {
    marginLeft: 52
  },
  [`& .${Eg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Eg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Tg.root}`]: {
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
      [`& .${Tg.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), yo = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    role: f = "menuitem",
    tabIndex: m,
    className: v,
    ...d
  } = r, b = f === "menuitemcheckbox" || f === "menuitemradio" ? !!r.selected : void 0, C = Qx(), y = p.useContext(hf), h = p.useMemo(() => ({
    dense: s || y.dense || !1,
    disableGutters: a
  }), [y.dense, s, a]), S = zI(), w = Ar(), E = S.suppressInitialFocusVisible, k = S.itemsFocusableWhenDisabled, R = p.useRef(null);
  gt(() => {
    o && R.current && Gx(R.current, C);
  }, [o]);
  const T = {
    ...r,
    dense: h.dense,
    divider: l,
    disableGutters: a
  }, A = tM(r), {
    root: N,
    ...I
  } = A, g = Wx({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), $ = lt(R, g.ref);
  let P;
  return m !== void 0 ? P = m : S.variant === "selectedMenu" ? P = g.tabIndex : (!r.disabled || k) && (P = -1), /* @__PURE__ */ u.jsx(hf.Provider, {
    value: h,
    children: /* @__PURE__ */ u.jsx(nM, {
      ref: $,
      role: f,
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
}), rM = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${se(n)}`, i && "iconOpen", r && "disabled"]
  };
  return fe(l, Fk, t);
}, e1 = H("select", {
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
  [`&.${Dp.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${di.root}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "calc(var(--_caret, 24px) + (var(--_endAdornment, 28px) - 1.5rem)/2)"
    // 1.5rem is the default icon size
  },
  [`.${hn.root}:has(> &)`]: {
    "--_endAdornment": "0px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      [`.${hn.root}:has(> &)`]: {
        "--_caret": "24px"
      },
      [`.${hn.root}:has(> & ~ .${di.root})`]: {
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
      [`.${hn.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${hn.root}:has(> & ~ .${di.root})`]: {
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
      [`.${hn.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${hn.root}:has(> & ~ .${di.root})`]: {
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
})), oM = H(e1, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: dn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Dp.multiple}`]: t.multiple
    }];
  }
})({}), t1 = H("svg", {
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
  [`&.${Dp.disabled}`]: {
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
})), iM = H(t1, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${se(n.variant)}`], n.open && t.iconOpen];
  }
})({}), sM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: s,
    inputRef: l,
    variant: a = "standard",
    ...c
  } = t, f = {
    ...t,
    disabled: o,
    variant: a,
    error: i
  }, m = rM(f);
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ u.jsx(oM, {
      ownerState: f,
      className: J(m.select, r),
      disabled: o,
      ref: l || n,
      ...c
    }), t.multiple ? null : /* @__PURE__ */ u.jsx(iM, {
      as: s,
      ownerState: f,
      className: m.icon
    })]
  });
});
var Ag;
const lM = H("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: dn
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
}), aM = H("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: dn
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
      ...wt(e, "width", {
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
      ...wt(e, "max-width", {
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
      ...wt(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function cM(e) {
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
  return /* @__PURE__ */ u.jsx(lM, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ u.jsx(aM, {
      ownerState: a,
      children: l ? /* @__PURE__ */ u.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ag || (Ag = /* @__PURE__ */ u.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const uM = (e) => {
  const {
    classes: t
  } = e, r = fe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, _k, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, dM = H(su, {
  shouldForwardProp: (e) => dn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: ou
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${rr.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${rr.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${rr.focused} .${rr.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Zt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${rr.focused} .${rr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${rr.error} .${rr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${rr.disabled} .${rr.notchedOutline}`]: {
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
        [`&.${Co.root}`]: {
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
})), fM = H(cM, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), pM = H(lu, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: iu
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
}))), Zp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    slotProps: f = {},
    type: m = "text",
    ...v
  } = r, d = uM(r), [x, b] = _i({
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
  }, y = c.root ?? dM, h = c.input ?? pM, [S, w] = ge("notchedOutline", {
    elementType: fM,
    className: d.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: c,
      slotProps: f
    },
    additionalProps: {
      label: s != null && s !== "" && x.required ? /* @__PURE__ */ u.jsxs(p.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ u.jsx(zp, {
    slots: {
      root: y,
      input: h
    },
    slotProps: f,
    renderSuffix: (E) => /* @__PURE__ */ u.jsx(S, {
      ...w,
      notched: typeof a < "u" ? a : !!(E.startAdornment || E.filled || E.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: l,
    ref: n,
    type: m,
    ...v,
    classes: {
      ...d,
      notchedOutline: null
    }
  });
});
Zp.muiName = "Input";
function mM(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function n1(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return p.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ p.isValidElement(n) && (t += n1(n.props.children));
  }), t;
}
function hM(e, t, n = 0) {
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
function gM(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function yM(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ p.isValidElement(i) || !mM(i) || i.props.disabled)
      continue;
    const s = n1(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && va(t, i.props.value) && (r = n.length), n.push({
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
var Og;
const Ql = 2, vM = 400, Ng = 200, xM = 750, vo = " ", SM = "ArrowUp", bM = "ArrowDown", wM = "Enter";
function Lg(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Ql && e.clientX <= r.right + Ql && e.clientY >= r.top - Ql && e.clientY <= r.bottom + Ql;
}
const CM = H(e1, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Co.select}`]: t.select
      },
      {
        [`&.${Co.select}`]: t[n.variant]
      },
      {
        [`&.${Co.error}`]: t.error
      },
      {
        [`&.${Co.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Co.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), kM = H(t1, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), TM = H("input", {
  shouldForwardProp: (e) => ax(e) && e !== "classes",
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
}), EM = (e) => {
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
  }, Bx, t);
}, RM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var Ie, nt, fn, yl;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: c,
    defaultValue: f,
    disabled: m,
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
    onOpen: N,
    open: I,
    readOnly: g,
    renderValue: $,
    required: P,
    SelectDisplayProps: j = {},
    tabIndex: O,
    // catching `type` from Input which makes no sense for SelectInput
    type: L,
    value: M,
    variant: z = "standard",
    ...B
  } = t, [W, _] = cf({
    controlled: M,
    default: f,
    name: "Select"
  }), [Q, K] = cf({
    controlled: I,
    default: c,
    name: "Select"
  }), Z = p.useRef(null), G = p.useRef(null), X = p.useRef(null), U = p.useRef(!1), re = p.useRef(!1), le = p.useRef(null), ke = p.useRef(!1), ye = p.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ve = p.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), oe = ur(), Le = ur(), _e = ur(), [Ee, $e] = p.useState(null), {
    current: ue
  } = p.useRef(I != null), [je, Ve] = p.useState(), [Ae, Ke] = p.useState(null), We = lt(n, b), et = p.useCallback((Y) => {
    G.current = Y, Y && $e(Y);
  }, []), ze = Ee == null ? void 0 : Ee.parentNode;
  p.useImperativeHandle(We, () => ({
    focus: () => {
      G.current.focus();
    },
    node: Z.current,
    value: W
  }), [W]);
  const Se = Ee !== null && Q, Me = p.useCallback(() => {
    _e.clear(), ve.current.buffer = "", ve.current.previousSearchIndex = null, ve.current.matchedIndex = null;
  }, [_e]);
  gt(() => {
    U.current = Se, Se && Me();
  }, [Se, Me]);
  const dt = p.useCallback(() => {
    oe.clear(), Le.clear();
  }, [oe, Le]), ne = p.useCallback(() => {
    dt(), ke.current = !1, ye.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [dt]), be = p.useCallback(() => {
    le.current && (le.current(), le.current = null);
  }, []);
  p.useEffect(() => {
    Se || (ne(), be());
  }, [Se, ne, be]), p.useEffect(() => () => {
    ne(), be(), Me();
  }, [ne, be, Me]), p.useEffect(() => {
    if (!Se || !ze || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      Ve(ze.clientWidth);
    });
    return Y.observe(ze), () => {
      Y.disconnect();
    };
  }, [Se, ze, s]), p.useEffect(() => {
    c && Q && Ee && !ue && (Ve(s ? null : ze.clientWidth), G.current.focus());
  }, [Ee, s]), p.useEffect(() => {
    i && G.current.focus();
  }, [i]), p.useEffect(() => {
    if (!C)
      return;
    const Y = xt(G.current).getElementById(C);
    if (Y) {
      const ae = () => {
        getSelection().isCollapsed && G.current.focus();
      };
      return Y.addEventListener("click", ae), () => {
        Y.removeEventListener("click", ae);
      };
    }
  }, [C]);
  const Oe = ot((Y, ae) => {
    Y || (ne(), be()), Y ? (Me(), Ke(OI(ae)), N && N(ae)) : (Ke(null), k && k(ae)), ue || (U.current = Y, Ve(s ? null : ze.clientWidth), K(Y));
  }), ft = () => {
    ne(), re.current ? Le.start(Ng, () => {
      ye.current.allowUnselectedMouseUp = !0, oe.start(Ng, () => {
        ye.current.allowSelectedMouseUp = !0;
      });
    }) : oe.start(vM, () => {
      ye.current.allowSelectedMouseUp = !0, ye.current.allowUnselectedMouseUp = !0;
    });
  }, Te = (Y) => {
    if (A == null || A(Y), Y.button !== 0 || (Y.preventDefault(), !G.current))
      return;
    G.current.focus();
    const ae = xt(Y.currentTarget);
    ft(), be();
    const Re = (pt) => {
      le.current = null, G.current && (Lg(pt, G.current) || Lg(pt, X.current) || !U.current && ue || Oe(!1, pt));
    };
    ae.addEventListener("mouseup", Re, {
      capture: !0,
      once: !0
    }), le.current = () => {
      ae.removeEventListener("mouseup", Re, !0);
    }, Oe(!0, Y);
  }, Zn = (Y) => {
    Oe(!1, Y);
  }, Ot = p.Children.toArray(l), Jn = (Y) => {
    const ae = Ot.find((Re) => Re.props.value === Y.target.value);
    ae !== void 0 && (_(ae.props.value), E && E(Y, ae));
  }, er = (Y, ae, Re) => {
    if (_(Re), E) {
      const pt = Y.nativeEvent || Y, Xt = new pt.constructor(pt.type, pt);
      Object.defineProperty(Xt, "target", {
        writable: !0,
        value: {
          value: Re,
          name: S
        }
      }), E(Xt, ae);
    }
  }, pe = (Y) => (ae) => {
    ke.current = !1;
    let Re;
    if (ae.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        Re = Array.isArray(W) ? W.slice() : [];
        const pt = W.indexOf(Y.props.value);
        pt === -1 ? Re.push(Y.props.value) : Re.splice(pt, 1);
      } else
        Re = Y.props.value;
      Y.props.onClick && Y.props.onClick(ae), W !== Re && er(ae, Y, Re), h || Oe(!1, ae);
    }
  }, De = (Y, ae) => (Re) => {
    var vl, Vo;
    if ((Vo = (vl = Y.props).onMouseUp) == null || Vo.call(vl, Re), ke.current) {
      ke.current = !1;
      return;
    }
    const pt = !ye.current.allowSelectedMouseUp && ae, Xt = !ye.current.allowUnselectedMouseUp && !ae;
    pt || Xt || Re.currentTarget.click();
  }, Nt = (Y) => {
    var em;
    const ae = ve.current, Re = ae.buffer !== "";
    if (Se || h || m || Y.defaultPrevented || (em = Y.nativeEvent) != null && em.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === vo && !Re)
      return !1;
    Y.key === vo && Y.preventDefault();
    const pt = ae.buffer === "", {
      options: Xt,
      selectedIndex: vl
    } = yM(Ot, W);
    if (Xt.length === 0)
      return Y.key !== vo && Me(), !0;
    pt && (ae.previousSearchIndex = vl);
    const Vo = Y.key.toLowerCase();
    ae.buffer === Vo && gM(Xt, Vo) && (ae.buffer = "", ae.previousSearchIndex = ae.matchedIndex), ae.buffer += Vo, _e.start(xM, Me);
    const du = hM(Xt, ae.buffer, (ae.previousSearchIndex ?? -1) + 1);
    if (du !== -1) {
      const fu = Xt[du];
      return ae.matchedIndex = du, va(W, fu.value) || er(Y, fu.child, fu.value), !0;
    }
    return Y.key !== vo && Me(), !0;
  }, at = (Y) => {
    if (!g) {
      const ae = Nt(Y), Re = Y.key === vo || Y.key === SM || Y.key === bM || Y.key === wM;
      !ae && Re && (Y.preventDefault(), Oe(!0, Y)), T == null || T(Y);
    }
  }, St = (Y) => {
    Me(), !Se && w && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: W,
        name: S
      }
    }), w(Y));
  }, Lt = (Y) => (ae) => {
    var Re, pt;
    (pt = (Re = Y == null ? void 0 : Y.props) == null ? void 0 : Re.onKeyDown) == null || pt.call(Re, ae), ae.key === vo && ae.target === ae.currentTarget && !ae.defaultPrevented && (ae.preventDefault(), ae.repeat || ae.currentTarget.click());
  };
  delete B["aria-invalid"];
  let En, Uo;
  const Lr = [];
  let zr = !1, Dr = !1;
  (Ga({
    value: W
  }) || v) && ($ ? En = $(W) : zr = !0);
  const Wi = Ot.map((Y) => {
    if (!/* @__PURE__ */ p.isValidElement(Y))
      return null;
    let ae;
    if (h) {
      if (!Array.isArray(W))
        throw new Error($r(2));
      ae = W.some((Re) => va(Re, Y.props.value)), ae && zr && Lr.push(Y.props.children);
    } else
      ae = va(W, Y.props.value), ae && zr && (Uo = Y.props.children);
    return ae && (Dr = !0), /* @__PURE__ */ p.cloneElement(Y, {
      "aria-selected": ae ? "true" : "false",
      onMouseDown: (Re) => {
        var pt, Xt;
        ke.current = !0, (Xt = (pt = Y.props).onMouseDown) == null || Xt.call(pt, Re);
      },
      onPointerDown: (Re) => {
        var pt, Xt;
        ke.current = !0, (Xt = (pt = Y.props).onPointerDown) == null || Xt.call(pt, Re);
      },
      onClick: pe(Y),
      onMouseUp: De(Y, ae),
      onKeyUp: (Re) => {
        Re.key === vo && Re.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(Re);
      },
      onKeyDown: Lt(Y),
      role: "option",
      selected: ae,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  gt(() => {
    re.current = Dr, !Se && !h && !Dr && Me();
  }, [Dr, h, Se, Me]), zr && (h ? Lr.length === 0 ? En = null : En = Lr.reduce((Y, ae, Re) => (Y.push(ae), Re < Lr.length - 1 && Y.push(", "), Y), []) : En = Uo);
  let Ho = je;
  !s && ue && Ee && (Ho = ze.clientWidth);
  let po;
  typeof O < "u" ? po = O : po = m ? null : 0;
  const ee = j.id || (S ? `mui-component-select-${S}` : void 0), q = {
    ...t,
    variant: z,
    value: W,
    open: Se,
    error: d
  }, he = EM(q), we = typeof ((Ie = y.slotProps) == null ? void 0 : Ie.paper) == "function" ? y.slotProps.paper(q) : (nt = y.slotProps) == null ? void 0 : nt.paper, tt = lt(we == null ? void 0 : we.ref, X), Fn = typeof ((fn = y.slotProps) == null ? void 0 : fn.list) == "function" ? y.slotProps.list(q) : (yl = y.slotProps) == null ? void 0 : yl.list, D = Ar(), ie = Ar();
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ u.jsx(CM, {
      as: "div",
      ref: et,
      tabIndex: po,
      role: "combobox",
      "aria-controls": Se ? D : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": Se ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": g ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": P ? "true" : void 0,
      "aria-invalid": d ? "true" : void 0,
      onKeyDown: at,
      onMouseDown: m || g ? null : Te,
      onBlur: St,
      onFocus: R,
      ...j,
      ownerState: q,
      className: J(j.className, he.select, a),
      id: ee,
      children: NI(En) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Og || (Og = /* @__PURE__ */ u.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : En
    }), /* @__PURE__ */ u.jsx(TM, {
      "aria-invalid": d,
      value: Array.isArray(W) ? W.join(",") : W,
      name: S,
      ref: Z,
      "aria-hidden": !0,
      onChange: Jn,
      tabIndex: -1,
      disabled: m,
      readOnly: g,
      className: he.nativeInput,
      autoFocus: i,
      required: P,
      ...B,
      id: B.id ?? ie,
      ownerState: q
    }), /* @__PURE__ */ u.jsx(kM, {
      as: x,
      className: he.icon,
      ownerState: q
    }), /* @__PURE__ */ u.jsx(LI, {
      value: Ae,
      children: /* @__PURE__ */ u.jsx(JI, {
        id: `menu-${S || ""}`,
        anchorEl: ze,
        open: Se,
        onClose: Zn,
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
            id: D,
            ...Fn
          },
          paper: {
            ...we,
            ref: tt,
            style: {
              minWidth: Ho,
              ...we == null ? void 0 : we.style
            }
          }
        },
        children: Wi
      })
    })]
  });
}), PM = (e) => {
  const {
    classes: t
  } = e, r = fe({
    root: ["root"]
  }, Bx, t);
  return {
    ...t,
    ...r
  };
}, Jp = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => dn(e) && e !== "variant"
}, IM = H(Qp, Jp)(""), MM = H(Zp, Jp)(""), jM = H(Xp, Jp)(""), fi = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    IconComponent: f = ER,
    id: m,
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
  } = r, N = h ? sM : RM, [I] = _i({
    props: r,
    states: ["variant", "error"]
  }), g = I.variant || T, $ = {
    ...r,
    variant: g,
    classes: s
  }, P = PM($), {
    root: j,
    ...O
  } = P, L = v || {
    standard: /* @__PURE__ */ u.jsx(IM, {
      ownerState: $
    }),
    outlined: /* @__PURE__ */ u.jsx(MM, {
      label: x,
      ownerState: $
    }),
    filled: /* @__PURE__ */ u.jsx(jM, {
      ownerState: $
    })
  }[g], M = lt(n, fo(L));
  return /* @__PURE__ */ u.jsx(p.Fragment, {
    children: /* @__PURE__ */ p.cloneElement(L, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: N,
      inputProps: {
        children: i,
        error: I.error,
        IconComponent: f,
        variant: g,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: y,
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
            ...R
          }
        },
        ...d,
        classes: d ? Wt(O, d.classes) : O,
        ...v ? v.props.inputProps : {}
      },
      ...(y && h || c) && g === "outlined" ? {
        notched: !0
      } : {},
      ref: M,
      className: J(L.props.className, l, P.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!v && {
        variant: g
      },
      ...A
    })
  });
});
fi.muiName = "Select";
function $M(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = ur();
  p.useEffect(() => {
    if (!o)
      return;
    function y(h) {
      h.defaultPrevented || h.key === "Escape" && (r == null || r(h, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", y), () => {
      document.removeEventListener("keydown", y);
    };
  }, [o, r]);
  const l = ot((y, h) => {
    r == null || r(y, h);
  }), a = ot((y) => {
    !r || y == null || s.start(y, () => {
      l(null, "timeout");
    });
  });
  p.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const c = (y) => {
    r == null || r(y, "clickaway");
  }, f = s.clear, m = p.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), v = (y) => (h) => {
    const S = y.onBlur;
    S == null || S(h), m();
  }, d = (y) => (h) => {
    const S = y.onFocus;
    S == null || S(h), f();
  }, x = (y) => (h) => {
    const S = y.onMouseEnter;
    S == null || S(h), f();
  }, b = (y) => (h) => {
    const S = y.onMouseLeave;
    S == null || S(h), m();
  };
  return p.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", m), window.addEventListener("blur", f), () => {
        window.removeEventListener("focus", m), window.removeEventListener("blur", f);
      };
  }, [n, o, m, f]), {
    getRootProps: (y = {}) => {
      const h = {
        ...Qa(e),
        ...Qa(y)
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
function AM(e) {
  return de("MuiSnackbarContent", e);
}
ce("MuiSnackbarContent", ["root", "message", "action"]);
const OM = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, AM, t);
}, NM = H(gr, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(tf(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : tf(e.palette.background.default, t),
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
})), LM = H("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), zM = H("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), DM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, c = r, f = OM(c);
  return /* @__PURE__ */ u.jsxs(NM, {
    role: l,
    elevation: 6,
    className: J(f.root, i),
    ownerState: c,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ u.jsx(LM, {
      className: f.message,
      ownerState: c,
      children: s
    }), o ? /* @__PURE__ */ u.jsx(zM, {
      className: f.action,
      ownerState: c,
      children: o
    }) : null]
  });
});
function BM(e) {
  return de("MuiSnackbar", e);
}
ce("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const FM = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${se(n.vertical)}${se(n.horizontal)}`]
  };
  return fe(r, BM, t);
}, _M = H("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${se(n.anchorOrigin.vertical)}${se(n.anchorOrigin.horizontal)}`]];
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
}))), WM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiSnackbar"
  }), o = vr(), i = {
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
    children: f,
    className: m,
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
  }, N = FM(A), {
    getRootProps: I,
    onClickAway: g
  } = $M(A), [$, P] = p.useState(!0), j = {
    slots: E,
    slotProps: k
  }, [O, L] = ge("root", {
    ref: n,
    className: [N.root, m],
    elementType: _M,
    getSlotProps: I,
    externalForwardedProps: {
      ...j,
      ...T
    },
    ownerState: A
  }), [M, {
    ownerState: z,
    ...B
  }] = ge("clickAwayListener", {
    elementType: XR,
    externalForwardedProps: j,
    getSlotProps: (Z) => ({
      onClickAway: (...G) => {
        var U;
        const X = G[0];
        (U = Z.onClickAway) == null || U.call(Z, ...G), !(X != null && X.defaultMuiPrevented) && g(...G);
      }
    }),
    ownerState: A
  }), [W, _] = ge("content", {
    elementType: DM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    additionalProps: {
      message: d,
      action: s
    },
    ownerState: A
  }), [Q, K] = ge("transition", {
    elementType: el,
    externalForwardedProps: j,
    getSlotProps: (Z) => ({
      onEnter: (...G) => {
        var X;
        (X = Z.onEnter) == null || X.call(Z, ...G), P(!1);
      },
      onExited: (...G) => {
        var X;
        (X = Z.onExited) == null || X.call(Z, ...G), P(!0);
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
  return !S && $ ? null : /* @__PURE__ */ u.jsx(M, {
    ...B,
    ...E.clickAwayListener && {
      ownerState: z
    },
    children: /* @__PURE__ */ u.jsx(O, {
      ...L,
      children: /* @__PURE__ */ u.jsx(Q, {
        ...K,
        children: f || /* @__PURE__ */ u.jsx(W, {
          ..._
        })
      })
    })
  });
});
function UM(e) {
  return de("MuiTooltip", e);
}
const Rn = ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function HM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const VM = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${se(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return fe(s, UM, t);
}, KM = H(Mx, {
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
      [`&[data-popper-placement*="bottom"] .${Rn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Rn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Rn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Rn.arrow}`]: {
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
}))), YM = H("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${se(n.placement.split("-")[0])}`]];
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
  [`.${Rn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${Rn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${Rn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Rn.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${HM(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Rn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${Rn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${Rn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${Rn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), GM = H("span", {
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
let ql = !1;
const zg = new au();
let is = {
  x: 0,
  y: 0
};
function Zl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const br = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disableInteractive: f = !1,
    disableTouchListener: m = !1,
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
    ...N
  } = r, I = /* @__PURE__ */ p.isValidElement(i) ? i : /* @__PURE__ */ u.jsx("span", {
    children: i
  }), g = vr(), [$, P] = p.useState(), [j, O] = p.useState(null), L = p.useRef(!1), M = f || b, z = ur(), B = ur(), W = ur(), _ = ur(), [Q, K] = cf({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Z = Q;
  const G = Ar(C), X = p.useRef(), U = ot(() => {
    X.current !== void 0 && (document.body.style.WebkitUserSelect = X.current, X.current = void 0), _.clear();
  });
  p.useEffect(() => U, [U]);
  const re = (pe) => {
    zg.clear(), ql = !0, K(!0), w && !Z && w(pe);
  }, le = ot(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (pe) => {
      zg.start(800 + y, () => {
        ql = !1;
      }), K(!1), S && Z && S(pe), z.start(g.transitions.duration.shortest, () => {
        L.current = !1;
      });
    }
  ), ke = (pe) => {
    $ != null && $.disabled || L.current && pe.type !== "touchstart" || ($ && $.removeAttribute("title"), B.clear(), W.clear(), v || ql && d ? B.start(ql ? d : v, () => {
      re(pe);
    }) : re(pe));
  }, ye = (pe) => {
    B.clear(), W.start(y, () => {
      le(pe);
    });
  }, [, ve] = p.useState(!1), oe = (pe) => {
    const De = (pe == null ? void 0 : pe.target) ?? $;
    if (!De || De.disabled || !qa(De)) {
      ve(!1);
      const Nt = pe ?? new Event("blur");
      !pe && De && (Object.defineProperty(Nt, "target", {
        value: De
      }), Object.defineProperty(Nt, "currentTarget", {
        value: De
      })), ye(Nt);
    }
  }, Le = (pe) => {
    if ($ || P(pe.currentTarget), qa(pe.target)) {
      const De = (Nt) => {
        Nt.target.disabled && oe(Nt), Nt.target.removeEventListener("blur", De);
      };
      pe.target.addEventListener("blur", De), ve(!0), ke(pe);
    }
  }, _e = (pe) => {
    L.current = !0;
    const De = I.props;
    De.onTouchStart && De.onTouchStart(pe);
  }, Ee = (pe) => {
    _e(pe), W.clear(), z.clear(), U(), X.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", _.start(x, () => {
      document.body.style.WebkitUserSelect = X.current, ke(pe);
    });
  }, $e = (pe) => {
    I.props.onTouchEnd && I.props.onTouchEnd(pe), U(), W.start(h, () => {
      le(pe);
    });
  };
  p.useEffect(() => {
    if (!Z)
      return;
    function pe(De) {
      De.key === "Escape" && le(De);
    }
    return document.addEventListener("keydown", pe), () => {
      document.removeEventListener("keydown", pe);
    };
  }, [le, Z]);
  const ue = lt(fo(I), P, n);
  !A && A !== 0 && (Z = !1);
  const je = p.useRef(), Ve = (pe) => {
    const De = I.props;
    De.onMouseMove && De.onMouseMove(pe), is = {
      x: pe.clientX,
      y: pe.clientY
    }, je.current && je.current.update();
  }, Ae = {}, Ke = typeof A == "string";
  l ? (Ae.title = !Z && Ke && !c ? A : null, Ae["aria-describedby"] = Z ? G : null) : (Ae["aria-label"] = Ke ? A : null, Ae["aria-labelledby"] = Z && !Ke ? G : null);
  const We = {
    ...Ae,
    ...N,
    ...I.props,
    className: J(N.className, I.props.className),
    onTouchStart: _e,
    ref: ue,
    ...b ? {
      onMouseMove: Ve
    } : {}
  }, et = {};
  m || (We.onTouchStart = Ee, We.onTouchEnd = $e), c || (We.onMouseOver = Zl(ke, We.onMouseOver), We.onMouseLeave = Zl(ye, We.onMouseLeave), M || (et.onMouseOver = ke, et.onMouseLeave = ye)), a || (We.onFocus = Zl(Le, We.onFocus), We.onBlur = Zl(oe, We.onBlur), M || (et.onFocus = Le, et.onBlur = oe));
  const ze = {
    ...r,
    arrow: o,
    disableInteractive: M,
    placement: k,
    touch: L.current
  }, Se = typeof R.popper == "function" ? R.popper(ze) : R.popper, Me = p.useMemo(() => {
    var De;
    let pe = [{
      name: "arrow",
      enabled: !!j,
      options: {
        element: j,
        padding: 4
      }
    }];
    return (De = Se == null ? void 0 : Se.popperOptions) != null && De.modifiers && (pe = pe.concat(Se.popperOptions.modifiers)), {
      ...Se == null ? void 0 : Se.popperOptions,
      modifiers: pe
    };
  }, [j, Se == null ? void 0 : Se.popperOptions]), dt = VM(ze), ne = {
    slots: T,
    slotProps: {
      arrow: R.arrow,
      popper: Se,
      tooltip: R.tooltip,
      transition: R.transition
    }
  }, [be, Oe] = ge("popper", {
    elementType: KM,
    externalForwardedProps: ne,
    ownerState: ze,
    className: dt.popper
  }), [ft, Te] = ge("transition", {
    elementType: el,
    externalForwardedProps: ne,
    ownerState: ze
  }), [Zn, Ot] = ge("tooltip", {
    elementType: YM,
    className: dt.tooltip,
    externalForwardedProps: ne,
    ownerState: ze
  }), [Jn, er] = ge("arrow", {
    elementType: GM,
    className: dt.arrow,
    externalForwardedProps: ne,
    ownerState: ze,
    ref: O
  });
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ p.cloneElement(I, We), /* @__PURE__ */ u.jsx(be, {
      as: Mx,
      placement: k,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: is.y,
          left: is.x,
          right: is.x,
          bottom: is.y,
          width: 0,
          height: 0
        })
      } : $,
      popperRef: je,
      open: $ ? Z : !1,
      id: G,
      transition: !0,
      ...et,
      ...Oe,
      popperOptions: Me,
      children: ({
        TransitionProps: pe
      }) => /* @__PURE__ */ u.jsx(ft, {
        timeout: g.transitions.duration.shorter,
        ...pe,
        ...Te,
        children: /* @__PURE__ */ u.jsxs(Zn, {
          ...Ot,
          children: [A, o ? /* @__PURE__ */ u.jsx(Jn, {
            ...er
          }) : null]
        })
      })
    })]
  });
}), qe = L2({
  createStyledComponent: H("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => me({
    props: e,
    name: "MuiStack"
  })
});
function XM(e) {
  return de("MuiTab", e);
}
const Un = ce("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), QM = (e) => {
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
    root: ["root", i && s && "labelIcon", `textColor${se(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return fe(c, XM, t);
}, qM = H(Bo, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${se(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${Un.icon}`]: t.icon
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
      [`& > .${Un.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${Un.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${Un.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${Un.icon}`]: {
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
      [`&.${Un.selected}`]: {
        opacity: 1
      },
      [`&.${Un.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Un.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${Un.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Un.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${Un.disabled}`]: {
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
}))), Jl = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    indicator: f,
    label: m,
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
  } = r, E = Fx(), k = Wx({
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
    label: !!m,
    fullWidth: l,
    textColor: y,
    wrapped: S
  }, N = QM(A), I = a && m && /* @__PURE__ */ p.isValidElement(a) ? /* @__PURE__ */ p.cloneElement(a, {
    className: J(N.icon, a.props.className)
  }) : a, g = (P) => {
    !b && v && v(P, h), d && d(P);
  }, $ = (P) => {
    C && !b && v && v(P, h), x && x(P);
  };
  return /* @__PURE__ */ u.jsxs(qM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: J(N.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": b,
    disabled: i,
    onClick: g,
    onFocus: $,
    tabIndex: T,
    ownerState: A,
    ...w,
    children: [c === "top" || c === "start" ? /* @__PURE__ */ u.jsxs(p.Fragment, {
      children: [I, m]
    }) : /* @__PURE__ */ u.jsxs(p.Fragment, {
      children: [m, I]
    }), f]
  });
}), r1 = /* @__PURE__ */ p.createContext();
function ZM(e) {
  return de("MuiTable", e);
}
ce("MuiTable", ["root", "stickyHeader"]);
const JM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return fe({
    root: ["root", n && "stickyHeader"]
  }, ZM, t);
}, e5 = H("table", {
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
}))), Dg = "table", Bg = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = Dg,
    padding: s = "normal",
    size: l = "medium",
    stickyHeader: a = !1,
    ...c
  } = r, f = {
    ...r,
    component: i,
    padding: s,
    size: l,
    stickyHeader: a
  }, m = JM(f), v = p.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ u.jsx(r1.Provider, {
    value: v,
    children: /* @__PURE__ */ u.jsx(e5, {
      as: i,
      role: i === Dg ? null : "table",
      ref: n,
      className: J(m.root, o),
      ownerState: f,
      ...c
    })
  });
}), uu = /* @__PURE__ */ p.createContext();
function t5(e) {
  return de("MuiTableBody", e);
}
ce("MuiTableBody", ["root"]);
const n5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, t5, t);
}, r5 = H("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), o5 = {
  variant: "body"
}, Fg = "tbody", _g = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Fg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = n5(l);
  return /* @__PURE__ */ u.jsx(uu.Provider, {
    value: o5,
    children: /* @__PURE__ */ u.jsx(r5, {
      className: J(a.root, o),
      as: i,
      ref: n,
      role: i === Fg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function i5(e) {
  return de("MuiTableCell", e);
}
const s5 = ce("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), l5 = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: o,
    size: i,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${se(r)}`, o !== "normal" && `padding${se(o)}`, `size${se(i)}`]
  };
  return fe(l, i5, t);
}, a5 = H("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${se(n.size)}`], n.padding !== "normal" && t[`padding${se(n.padding)}`], n.align !== "inherit" && t[`align${se(n.align)}`], n.stickyHeader && t.stickyHeader];
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
      [`&.${s5.paddingCheckbox}`]: {
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
}))), Dt = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    sortDirection: f,
    variant: m,
    ...v
  } = r, d = p.useContext(r1), x = p.useContext(uu), b = x && x.variant === "head";
  let C;
  s ? C = s : C = b ? "th" : "td";
  let y = a;
  C === "td" ? y = void 0 : !y && b && (y = "col");
  const h = m || x && x.variant, S = {
    ...r,
    align: o,
    component: C,
    padding: l || (d && d.padding ? d.padding : "normal"),
    size: c || (d && d.size ? d.size : "medium"),
    sortDirection: f,
    stickyHeader: h === "head" && d && d.stickyHeader,
    variant: h
  }, w = l5(S);
  let E = null;
  return f && (E = f === "asc" ? "ascending" : "descending"), /* @__PURE__ */ u.jsx(a5, {
    as: C,
    ref: n,
    className: J(w.root, i),
    "aria-sort": E,
    scope: y,
    ownerState: S,
    ...v
  });
});
function c5(e) {
  return de("MuiTableContainer", e);
}
ce("MuiTableContainer", ["root"]);
const u5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, c5, t);
}, d5 = H("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), f5 = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = u5(l);
  return /* @__PURE__ */ u.jsx(d5, {
    ref: n,
    as: i,
    className: J(a.root, o),
    ownerState: l,
    ...s
  });
});
function p5(e) {
  return de("MuiTableHead", e);
}
ce("MuiTableHead", ["root"]);
const m5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, p5, t);
}, h5 = H("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), g5 = {
  variant: "head"
}, Wg = "thead", Ug = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Wg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = m5(l);
  return /* @__PURE__ */ u.jsx(uu.Provider, {
    value: g5,
    children: /* @__PURE__ */ u.jsx(h5, {
      as: i,
      className: J(a.root, o),
      ref: n,
      role: i === Wg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), y5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), v5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function x5(e) {
  return de("MuiTableRow", e);
}
const Hg = ce("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), S5 = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return fe({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, x5, t);
}, b5 = H("tr", {
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
  [`&.${Hg.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Hg.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Vg = "tr", ss = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Vg,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, c = p.useContext(uu), f = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: c && c.variant === "head",
    footer: c && c.variant === "footer"
  }, m = S5(f);
  return /* @__PURE__ */ u.jsx(b5, {
    as: i,
    ref: n,
    className: J(m.root, o),
    role: i === Vg ? null : "row",
    ownerState: f,
    ...a
  });
});
function w5(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function C5(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = w5,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let c = !1;
  const f = () => {
    c = !0;
  }, m = (v) => {
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
    requestAnimationFrame(m);
  };
  return a === n ? (o(new Error("Element already at target position")), f) : (requestAnimationFrame(m), f);
}
const k5 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function T5(e) {
  const {
    onChange: t,
    ...n
  } = e, r = p.useRef(), o = p.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return gt(() => {
    const s = fl(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = bn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), p.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ u.jsx("div", {
    style: k5,
    ...n,
    ref: o
  });
}
function E5(e) {
  return de("MuiTabScrollButton", e);
}
const R5 = ce("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), P5 = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return fe({
    root: ["root", n, r && "disabled"]
  }, E5, t);
}, I5 = H(Bo, {
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
  [`&.${R5.disabled}`]: {
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
}), M5 = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    ...f
  } = r, {
    nativeButton: m,
    ...v
  } = f, d = dl(), x = {
    isRtl: d,
    ...r
  }, b = P5(x), C = i.StartScrollButtonIcon ?? y5, y = i.EndScrollButtonIcon ?? v5, h = Li({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  }), S = Li({
    elementType: y,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  });
  return /* @__PURE__ */ u.jsx(I5, {
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
    children: l === "left" ? /* @__PURE__ */ u.jsx(C, {
      ...h
    }) : /* @__PURE__ */ u.jsx(y, {
      ...S
    })
  });
});
function j5(e) {
  return de("MuiTabs", e);
}
const qu = ce("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), $5 = (e) => {
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
  }, j5, a);
}, A5 = H("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${qu.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${qu.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
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
      [`& .${qu.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), O5 = H("div", {
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
}), N5 = H("div", {
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
}), L5 = H("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(xe(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  ...wt(e),
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
}))), z5 = H(T5)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Kg = {}, D5 = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTabs"
  }), o = vr(), i = dl(), s = ml(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: c,
    centered: f = !1,
    children: m,
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
    ...N
  } = r, I = T === "scrollable", g = y === "vertical", $ = g ? "scrollTop" : "scrollLeft", P = g ? "top" : "left", j = g ? "bottom" : "right", O = g ? "clientHeight" : "clientWidth", L = g ? "height" : "width", M = {
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
    centered: f && !I,
    scrollButtonsHideMobile: !x
  }, z = $5(M), B = Li({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: M
  }), W = Li({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: M
  }), [_, Q] = p.useState(!1), [K, Z] = p.useState(Kg), [G, X] = p.useState(!1), [U, re] = p.useState(!1), [le, ke] = p.useState(!1), ye = R === !1 ? null : R, [ve, oe] = p.useState(!1), [Le, _e] = p.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Ee = /* @__PURE__ */ new Map(), $e = p.useRef(null), ue = p.useRef(null), je = {
    slots: w,
    slotProps: E
  }, Ve = () => {
    const ee = $e.current;
    let q;
    if (ee) {
      const we = ee.getBoundingClientRect();
      q = {
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
    let he;
    if (ee && R !== !1) {
      const we = ue.current.children;
      if (we.length > 0) {
        const tt = we[Ee.get(R)];
        he = tt ? tt.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: q,
      tabMeta: he
    };
  }, Ae = ot(() => {
    const {
      tabsMeta: ee,
      tabMeta: q
    } = Ve();
    let he = 0, we;
    g ? (we = "top", q && ee && (he = q.top - ee.top + ee.scrollTop)) : (we = i ? "right" : "left", q && ee && (he = (i ? -1 : 1) * (q[we] - ee[we] + ee.scrollLeft)));
    const tt = {
      [we]: he,
      // May be wrong until the font is loaded.
      [L]: q ? q[L] : 0
    };
    if (typeof K[we] != "number" || typeof K[L] != "number")
      Z(tt);
    else {
      const Fn = Math.abs(K[we] - tt[we]), D = Math.abs(K[L] - tt[L]);
      (Fn >= 1 || D >= 1) && Z(tt);
    }
  }), Ke = (ee, {
    animation: q = !0
  } = {}) => {
    q && !s.shouldReduceMotion ? C5($, $e.current, ee, {
      duration: o.transitions.duration.standard
    }) : $e.current[$] = ee;
  }, We = (ee) => {
    let q = $e.current[$];
    g ? q += ee : q += ee * (i ? -1 : 1), Ke(q);
  }, et = () => {
    const ee = $e.current[O];
    let q = 0;
    const he = Array.from(ue.current.children);
    for (let we = 0; we < he.length; we += 1) {
      const tt = he[we];
      if (q + tt[O] > ee) {
        we === 0 && (q = ee);
        break;
      }
      q += tt[O];
    }
    return q;
  }, ze = () => {
    We(-1 * et());
  }, Se = () => {
    We(et());
  }, [Me, {
    onChange: dt,
    ...ne
  }] = ge("scrollbar", {
    className: J(z.scrollableX, z.hideScrollbar),
    elementType: z5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: je,
    ownerState: M
  }), be = p.useCallback((ee) => {
    dt == null || dt(ee), _e({
      overflow: null,
      scrollbarWidth: ee
    });
  }, [dt]), [Oe, ft] = ge("scrollButtons", {
    className: z.scrollButtons,
    elementType: M5,
    externalForwardedProps: je,
    ownerState: M,
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
  }), Te = () => {
    const ee = {};
    ee.scrollbarSizeListener = I ? /* @__PURE__ */ u.jsx(Me, {
      ...ne,
      onChange: be
    }) : null;
    const he = I && (h === "auto" && (G || U) || h === !0);
    return ee.scrollButtonStart = he ? /* @__PURE__ */ u.jsx(Oe, {
      direction: i ? "right" : "left",
      onClick: ze,
      disabled: !G,
      ...ft
    }) : null, ee.scrollButtonEnd = he ? /* @__PURE__ */ u.jsx(Oe, {
      direction: i ? "left" : "right",
      onClick: Se,
      disabled: !U,
      ...ft
    }) : null, ee;
  }, Zn = ot((ee) => {
    const {
      tabsMeta: q,
      tabMeta: he
    } = Ve();
    if (!(!he || !q)) {
      if (he[P] < q[P]) {
        const we = q[$] + (he[P] - q[P]);
        Ke(we, {
          animation: ee
        });
      } else if (he[j] > q[j]) {
        const we = q[$] + (he[j] - q[j]);
        Ke(we, {
          animation: ee
        });
      }
    }
  }), Ot = ot(() => {
    I && h !== !1 && ke(!le);
  });
  p.useEffect(() => {
    const ee = fl(() => {
      $e.current && Ae();
    });
    let q;
    const he = (Fn) => {
      Fn.forEach((D) => {
        D.removedNodes.forEach((ie) => {
          q == null || q.unobserve(ie);
        }), D.addedNodes.forEach((ie) => {
          q == null || q.observe(ie);
        });
      }), ee(), Ot();
    }, we = bn($e.current);
    we.addEventListener("resize", ee);
    let tt;
    return typeof ResizeObserver < "u" && (q = new ResizeObserver(ee), Array.from(ue.current.children).forEach((Fn) => {
      q.observe(Fn);
    })), typeof MutationObserver < "u" && (tt = new MutationObserver(he), tt.observe(ue.current, {
      childList: !0
    })), () => {
      ee.clear(), we.removeEventListener("resize", ee), tt == null || tt.disconnect(), q == null || q.disconnect();
    };
  }, [Ae, Ot]), p.useEffect(() => {
    const ee = Array.from(ue.current.children), q = ee.length;
    if (typeof IntersectionObserver < "u" && q > 0 && I && h !== !1) {
      const he = ee[0], we = ee[q - 1], tt = {
        root: $e.current,
        threshold: 0.99
      }, Fn = (nt) => {
        X(!nt[0].isIntersecting);
      }, D = new IntersectionObserver(Fn, tt);
      D.observe(he);
      const ie = (nt) => {
        re(!nt[0].isIntersecting);
      }, Ie = new IntersectionObserver(ie, tt);
      return Ie.observe(we), () => {
        D.disconnect(), Ie.disconnect();
      };
    }
  }, [I, h, le, m == null ? void 0 : m.length]), p.useEffect(() => {
    Q(!0);
  }, []), p.useEffect(() => {
    Ae();
  }), p.useEffect(() => {
    Zn(Kg !== K);
  }, [Zn, K]), p.useImperativeHandle(c, () => ({
    updateIndicator: Ae,
    updateScrollButtons: Ot
  }), [Ae, Ot]);
  const [Jn, er] = ge("indicator", {
    className: z.indicator,
    elementType: L5,
    externalForwardedProps: je,
    ownerState: M,
    additionalProps: {
      style: K
    }
  }), pe = /* @__PURE__ */ u.jsx(Jn, {
    ...er
  }), De = _x({
    activeItemId: ve ? void 0 : ye,
    orientation: y,
    isRtl: i
  }), Nt = De.getContainerProps(), St = p.Children.toArray(m).filter(p.isValidElement).map((ee, q) => {
    const he = ee.props.value === void 0 ? q : ee.props.value;
    return Ee.set(he, q), {
      child: ee,
      index: q,
      childValue: he
    };
  }).map(({
    child: ee,
    childValue: q
  }) => {
    const he = q === R;
    return /* @__PURE__ */ p.cloneElement(ee, {
      fullWidth: T === "fullWidth",
      indicator: he && !_ && pe,
      selected: he,
      selectionFollowsFocus: S,
      onChange: C,
      textColor: k,
      value: q
    });
  }), Lt = Te(), [En, Uo] = ge("root", {
    ref: n,
    className: J(z.root, v),
    elementType: A5,
    externalForwardedProps: {
      ...je,
      ...N,
      component: d
    },
    ownerState: M
  }), [Lr, zr] = ge("scroller", {
    ref: $e,
    className: z.scroller,
    elementType: O5,
    externalForwardedProps: je,
    ownerState: M,
    additionalProps: {
      style: {
        overflow: Le.overflow,
        [g ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: A ? void 0 : -Le.scrollbarWidth
      }
    }
  }), Dr = lt(Nt.ref, ue), Wi = (ee) => {
    const q = ue.current, he = cr(xt(q));
    (he == null ? void 0 : he.getAttribute("role")) === "tab" && Nt.onKeyDown(ee);
  }, [Ho, po] = ge("list", {
    ref: Dr,
    className: z.list,
    elementType: N5,
    externalForwardedProps: je,
    ownerState: M,
    getSlotProps: (ee) => ({
      ...ee,
      onBlur: (q) => {
        var he;
        Mo(q.currentTarget, q.relatedTarget) || oe(!1), (he = ee.onBlur) == null || he.call(ee, q);
      },
      onKeyDown: (q) => {
        var he;
        Wi(q), (he = ee.onKeyDown) == null || he.call(ee, q);
      },
      onFocus: (q) => {
        var he;
        oe(!0), Nt.onFocus(q), (he = ee.onFocus) == null || he.call(ee, q);
      }
    })
  });
  return /* @__PURE__ */ u.jsxs(En, {
    ...Uo,
    children: [Lt.scrollButtonStart, Lt.scrollbarSizeListener, /* @__PURE__ */ u.jsxs(Lr, {
      ...zr,
      children: [/* @__PURE__ */ u.jsx(Ho, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": y === "vertical" ? "vertical" : null,
        role: "tablist",
        ...po,
        children: /* @__PURE__ */ u.jsx(qp.Provider, {
          value: De,
          children: St
        })
      }), _ && pe]
    }), Lt.scrollButtonEnd]
  });
});
function B5(e) {
  return de("MuiTextField", e);
}
ce("MuiTextField", ["root"]);
const F5 = {
  standard: Qp,
  filled: Xp,
  outlined: Zp
}, _5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, B5, t);
}, W5 = H(eI, {
  name: "MuiTextField",
  slot: "Root"
})({}), Hn = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disabled: f = !1,
    error: m = !1,
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
    rows: N,
    select: I = !1,
    slots: g = {},
    slotProps: $ = {},
    type: P,
    value: j,
    variant: O = "outlined",
    ...L
  } = r, M = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: f,
    error: m,
    fullWidth: v,
    multiline: S,
    required: A,
    select: I,
    variant: O
  }, z = _5(M), B = Ar(x), W = d && B ? `${B}-helper-text` : void 0, _ = C && B ? `${B}-label` : void 0, Q = F5[O], K = {
    slots: g,
    slotProps: $
  }, [Z, G] = ge("select", {
    elementType: fi,
    externalForwardedProps: K,
    ownerState: M
  }), X = I && G.native, U = {}, re = K.slotProps.inputLabel;
  O === "outlined" && (re && typeof re.shrink < "u" && (U.notched = re.shrink), U.label = C), I && (X || (U.id = void 0), U["aria-describedby"] = void 0);
  const [le, ke] = ge("root", {
    elementType: W5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...K,
      ...L
    },
    ownerState: M,
    className: J(z.root, l),
    ref: n,
    additionalProps: {
      disabled: f,
      error: m,
      fullWidth: v,
      required: A,
      color: a,
      variant: O
    }
  }), [ye, ve] = ge("input", {
    elementType: Q,
    externalForwardedProps: K,
    additionalProps: U,
    ownerState: M
  }), [oe, Le] = ge("inputLabel", {
    elementType: wI,
    externalForwardedProps: K,
    ownerState: M
  }), [_e, Ee] = ge("htmlInput", {
    elementType: "input",
    externalForwardedProps: K,
    ownerState: M
  }), [$e, ue] = ge("formHelperText", {
    elementType: rI,
    externalForwardedProps: K,
    ownerState: M
  }), je = /* @__PURE__ */ u.jsx(ye, {
    "aria-describedby": W,
    autoComplete: o,
    autoFocus: i,
    defaultValue: c,
    fullWidth: v,
    multiline: S,
    name: w,
    rows: N,
    maxRows: y,
    minRows: h,
    type: P,
    value: j,
    id: B,
    inputRef: b,
    onBlur: E,
    onChange: k,
    onFocus: R,
    placeholder: T,
    inputProps: Ee,
    slots: {
      input: g.htmlInput ? _e : void 0
    },
    ...ve
  });
  return /* @__PURE__ */ u.jsxs(le, {
    ...ke,
    children: [C != null && C !== "" && /* @__PURE__ */ u.jsx(oe, {
      htmlFor: I && !X ? void 0 : B,
      id: _,
      ...I && !X && {
        component: "div"
      },
      ...Le,
      children: C
    }), I ? /* @__PURE__ */ u.jsx(Z, {
      "aria-describedby": W,
      id: B,
      labelId: _,
      value: j,
      input: je,
      ...G,
      children: s
    }) : je, d && /* @__PURE__ */ u.jsx($e, {
      id: W,
      ...ue,
      children: d
    })]
  });
}), Yg = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), Zu = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), U5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M8 5v14l11-7z"
})), H5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M6 6h12v12H6z"
})), V5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
})), K5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), Gg = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
})), Y5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
})), G5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
})), Xg = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"
})), Ju = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M15 9H9v6h6zm-2 4h-2v-2h2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2zm-4 6H7V7h10z"
})), X5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"
})), Q5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), q5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), ed = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
})), Z5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), J5 = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"
})), ea = Je(/* @__PURE__ */ u.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), ir = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', Fr = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function o1({
  children: e,
  sx: t
}) {
  return /* @__PURE__ */ u.jsx(
    Ce,
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
function td({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ u.jsxs(gr, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ u.jsxs(
      qe,
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
          typeof e == "string" ? /* @__PURE__ */ u.jsx(o1, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ u.jsx(He, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function Vn({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ u.jsxs(He, { sx: n, children: [
    /* @__PURE__ */ u.jsxs(
      qe,
      {
        direction: "row",
        spacing: 0.75,
        sx: { alignItems: "baseline", mb: 0.75 },
        children: [
          /* @__PURE__ */ u.jsx(
            Ce,
            {
              component: "label",
              sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
              children: e
            }
          ),
          t && /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
        ]
      }
    ),
    r
  ] });
}
function xo({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ u.jsxs(He, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ u.jsx(o1, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ u.jsx(
      Ce,
      {
        sx: {
          fontFamily: n ? ir : void 0,
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
function Qg({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ u.jsx(
    He,
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
function ej(e, t) {
  switch (t == null ? void 0 : t.kind) {
    case "log": {
      const n = t.line ?? "", r = n.trim();
      return r.startsWith("{") && r.endsWith("}") || r.startsWith('{"version"') || r.startsWith('{"ok"') ? e : [
        ...e,
        { stream: t.stream ?? "stdout", text: n }
      ];
    }
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
function qg({
  lines: e,
  running: t
}) {
  const n = p.useRef(null), r = p.useRef(null), o = p.useRef(!0);
  return p.useEffect(() => {
    const i = r.current;
    if (!i) return;
    const s = () => {
      o.current = i.scrollHeight - i.scrollTop - i.clientHeight < 40;
    };
    return i.addEventListener("scroll", s), () => i.removeEventListener("scroll", s);
  }, []), p.useEffect(() => {
    var i;
    o.current && ((i = n.current) == null || i.scrollIntoView({ block: "end" }));
  }, [e]), !e.length && !t ? /* @__PURE__ */ u.jsx(
    gr,
    {
      sx: {
        bgcolor: Fr.bg,
        borderRadius: "8px",
        px: 2,
        py: 3,
        textAlign: "center",
        fontFamily: ir,
        fontSize: 12,
        color: Fr.dim
      },
      children: "No log output recorded yet."
    }
  ) : /* @__PURE__ */ u.jsxs(
    gr,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: Fr.bg,
        color: Fr.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "22rem",
        overflowY: "auto",
        fontFamily: ir,
        fontSize: 12,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ u.jsx(
          He,
          {
            sx: {
              color: i.stream === "stderr" ? Fr.err : i.stream === "meta" ? Fr.dim : Fr.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ u.jsx(He, { sx: { color: Fr.dim }, children: "▍running…" }),
        /* @__PURE__ */ u.jsx("div", { ref: n })
      ]
    }
  );
}
const Zg = {
  18: {
    title: "Node.js 18 LTS (Hydrogen)",
    status: "Active LTS",
    desc: "Stable for legacy frameworks and LTS maintenance"
  },
  20: {
    title: "Node.js 20 LTS (Iron)",
    status: "Active LTS",
    desc: "Enterprise LTS with high performance and security"
  },
  22: {
    title: "Node.js 22 LTS (Jod)",
    status: "Latest LTS",
    desc: "Modern V8 engine with native WebSocket & fetch"
  },
  24: {
    title: "Node.js 24 (Current)",
    status: "Current",
    desc: "Cutting edge features and latest ECMAScript syntax"
  }
};
function tj({ ctx: e }) {
  const t = p.useMemo(
    () => nu(e.theme ?? {}),
    [e.theme]
  );
  return /* @__PURE__ */ u.jsx(Vk, { theme: t, children: /* @__PURE__ */ u.jsx(nj, { ctx: e }) });
}
function nj({ ctx: e }) {
  const [t, n] = p.useState(0), [r, o] = p.useState(!0), [i, s] = p.useState(null), [l, a] = p.useState([]), [c, f] = p.useState([]), [m, v] = p.useState(""), d = p.useMemo(
    () => c.filter((D) => D.installed),
    [c]
  ), [x, b] = p.useState(!1), [C, y] = p.useState(""), [h, S] = p.useState("/opt/hostpanel/data/apps/"), [w, E] = p.useState("22"), [k, R] = p.useState("index.js"), [T, A] = p.useState("0"), [N, I] = p.useState(`NODE_ENV=production
PORT=31000
`), [g, $] = p.useState(!1), [P, j] = p.useState(!1), [O, L] = p.useState(null), [M, z] = p.useState(""), [B, W] = p.useState("22"), [_, Q] = p.useState("index.js"), [K, Z] = p.useState("0"), [G, X] = p.useState(!1), U = (D) => {
    var ie;
    L(D), z(D.directory), W(D.node_version || (((ie = d[0]) == null ? void 0 : ie.major) ?? "22")), Q(D.script || "index.js"), Z(String(D.port || "0")), j(!0);
  };
  p.useEffect(() => {
    d.length > 0 && (d.some((D) => D.major === w) || E(d[0].major));
  }, [d, w]);
  const re = () => {
    d.length > 0 && !d.some((D) => D.major === w) && E(d[0].major), b(!0);
  }, [le, ke] = p.useState(!1), [ye, ve] = p.useState("22"), [oe, Le] = p.useState(!1), [_e, Ee] = p.useState(!1), [$e, ue] = p.useState([]), [je, Ve] = p.useState(!1), [Ae, Ke] = p.useState(""), [We, et] = p.useState(""), [ze, Se] = p.useState(!1), [Me, dt] = p.useState(""), [ne, be] = p.useState("all"), [Oe] = p.useState(100), [ft, Te] = p.useState([]), [Zn] = p.useState(!1), [Ot, Jn] = p.useState(null), [er, pe] = p.useState(!1), [De, Nt] = p.useState(null), at = (D, ie = "success") => {
    Nt({ message: D, severity: ie });
  }, St = p.useCallback(
    async (D, ie) => {
      const Ie = await e.api(D, ie), nt = await Ie.json().catch(() => ({}));
      if (!Ie.ok)
        throw new Error(nt.message || nt.error || `HTTP ${Ie.status}`);
      return nt;
    },
    [e]
  ), Lt = p.useCallback(async () => {
    var D, ie;
    o(!0);
    try {
      const [Ie, nt, fn] = await Promise.allSettled([
        St("/status"),
        St("/apps"),
        St("/runtimes")
      ]);
      Ie.status === "fulfilled" && Ie.value && s(Ie.value), nt.status === "fulfilled" && ((D = nt.value) != null && D.apps) && a(nt.value.apps), fn.status === "fulfilled" && ((ie = fn.value) != null && ie.runtimes) && f(fn.value.runtimes);
    } catch (Ie) {
      at(Ie.message || "Failed to load Node.js service data", "error");
    } finally {
      o(!1);
    }
  }, [St]);
  p.useEffect(() => {
    Lt();
  }, [Lt]), p.useEffect(() => {
    l.length > 0 && !Me && dt(l[0].name);
  }, [l, Me]);
  const En = p.useCallback(
    async (D, ie = 100, Ie = "all") => {
      if (D)
        try {
          const nt = await St(
            `/apps/${encodeURIComponent(D)}/logs?lines=${ie}&type=${Ie}`
          ), fn = Ie === "out" ? nt.stdout : Ie === "err" ? nt.stderr : nt.logs, yl = fn ? fn.split(`
`).map((Y) => ({
            stream: Ie === "err" ? "stderr" : "stdout",
            text: Y
          })) : [];
          Te(yl);
        } catch (nt) {
          console.error("Failed to load logs", nt);
        }
    },
    [St]
  );
  p.useEffect(() => {
    t === 2 && Me && En(Me, Oe, ne);
  }, [t, Me, ne, Oe, En]);
  const Uo = async (D) => {
    try {
      await St(`/apps/${encodeURIComponent(D)}/start`, { method: "POST" }), at(`Application '${D}' started`, "success"), Lt();
    } catch (ie) {
      at(ie.message || `Failed to start ${D}`, "error");
    }
  }, Lr = async (D) => {
    try {
      await St(`/apps/${encodeURIComponent(D)}/stop`, { method: "POST" }), at(`Application '${D}' stopped`, "info"), Lt();
    } catch (ie) {
      at(ie.message || `Failed to stop ${D}`, "error");
    }
  }, zr = async (D) => {
    try {
      await St(`/apps/${encodeURIComponent(D)}/restart`, { method: "POST" }), at(`Application '${D}' restarted`, "success"), Lt();
    } catch (ie) {
      at(ie.message || `Failed to restart ${D}`, "error");
    }
  }, Dr = async () => {
    if (Ot) {
      pe(!0);
      try {
        await St(`/apps/${encodeURIComponent(Ot)}`, {
          method: "DELETE"
        }), at(`Application '${Ot}' deleted`, "success"), Jn(null), Lt();
      } catch (D) {
        at(D.message || `Failed to delete ${Ot}`, "error");
      } finally {
        pe(!1);
      }
    }
  }, Wi = async (D) => {
    Ke(D), Ve(!0), et("");
    try {
      const ie = await St(`/apps/${encodeURIComponent(D)}/env`);
      et(ie.env || "");
    } catch (ie) {
      at(ie.message || "Failed to load environment variables", "error");
    }
  }, Ho = async () => {
    if (Ae) {
      Se(!0);
      try {
        await St(`/apps/${encodeURIComponent(Ae)}/env`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ env: We })
        }), at(`Environment variables updated for '${Ae}'`, "success"), Ve(!1);
      } catch (D) {
        at(D.message || "Failed to save environment variables", "error");
      } finally {
        Se(!1);
      }
    }
  }, po = async (D) => {
    if (D.preventDefault(), !!C) {
      $(!0);
      try {
        const ie = h.endsWith("/") ? `${h}${C}` : h, Ie = await St("/apps", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: C.trim().toLowerCase(),
            directory: ie.trim(),
            node_version: w,
            script: k.trim() || "index.js",
            port: parseInt(T, 10) || 0
          })
        });
        N.trim() && await St(`/apps/${encodeURIComponent(C)}/env`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ env: N })
        }).catch(() => {
        }), at(
          `Application '${C}' deployed on port ${Ie.port || "allocated"}!`,
          "success"
        ), y(""), b(!1), Lt();
      } catch (ie) {
        at(ie.message || "Failed to create application", "error");
      } finally {
        $(!1);
      }
    }
  }, ee = async (D) => {
    if (D.preventDefault(), !!O) {
      X(!0);
      try {
        await St(`/apps/${encodeURIComponent(O.name)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            directory: M.trim(),
            node_version: B,
            script: _.trim() || "index.js",
            port: parseInt(K, 10) || 0
          })
        }), at(`Application '${O.name}' updated successfully!`, "success"), j(!1), Lt();
      } catch (ie) {
        at(ie.message || "Failed to update application", "error");
      } finally {
        X(!1);
      }
    }
  }, q = async (D) => {
    const ie = D || ye;
    ve(ie), Le(!0), Ee(!1), ue([]);
    try {
      if (e.run)
        for await (const Ie of e.run("/runtimes/install", {
          method: "POST",
          body: { version: ie }
        }))
          ue((nt) => ej(nt, Ie));
      else
        await St("/runtimes/install", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ version: ie })
        });
      Ee(!0), at(`Node.js v${ie} installed successfully!`, "success"), Lt();
    } catch (Ie) {
      at(Ie.message || `Failed to install Node.js v${ie}`, "error");
    } finally {
      Le(!1);
    }
  }, he = async (D) => {
    try {
      await St(`/runtimes/${encodeURIComponent(D)}`, {
        method: "DELETE"
      }), at(`Node.js v${D} removed`, "success"), Lt();
    } catch (ie) {
      at(ie.message || `Failed to remove Node.js v${D}`, "error");
    }
  }, we = l.filter(
    (D) => D.name.toLowerCase().includes(m.toLowerCase()) || D.directory.toLowerCase().includes(m.toLowerCase()) || String(D.port).includes(m)
  ), tt = l.filter((D) => D.status === "running").length, Fn = l.reduce(
    (D, ie) => D + (parseFloat(String(ie.memory_mb)) || 0),
    0
  );
  return /* @__PURE__ */ u.jsxs(He, { sx: { display: "flex", flexDirection: "column", gap: 2.5, pb: 4 }, children: [
    /* @__PURE__ */ u.jsxs(
      qe,
      {
        direction: "row",
        spacing: 2,
        sx: {
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ u.jsxs(He, { children: [
            /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ u.jsx(Ce, { sx: { fontWeight: 700, fontSize: "1.25rem" }, children: "Node.js Application Manager" }),
              /* @__PURE__ */ u.jsx(
                Zo,
                {
                  size: "small",
                  icon: /* @__PURE__ */ u.jsx(Qg, { ok: !!(i != null && i.healthy), size: 8 }),
                  label: i != null && i.healthy ? "Daemon Active" : "Daemon Inactive",
                  variant: "outlined",
                  color: i != null && i.healthy ? "success" : "default",
                  sx: { fontWeight: 600, fontSize: "0.75rem" }
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.8125rem", color: "text.secondary", mt: 0.25 }, children: "Process supervisor, isolated runtimes, reverse proxy port allocator (31000–31999)" })
          ] }),
          /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ u.jsx(br, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
              pn,
              {
                size: "small",
                onClick: Lt,
                disabled: r,
                sx: { border: "1px solid", borderColor: "divider" },
                children: r ? /* @__PURE__ */ u.jsx(wo, { size: 16, color: "inherit" }) : /* @__PURE__ */ u.jsx(Yg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ u.jsx(
              zt,
              {
                variant: "contained",
                color: "primary",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(Zu, {}),
                onClick: re,
                sx: { ml: 0.5, whiteSpace: "nowrap" },
                children: "Deploy Application"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      He,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ u.jsx(rs, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ u.jsxs(os, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ u.jsx(
                He,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (D) => Yr(D.palette.primary.main, 0.1),
                    color: "primary.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ u.jsx(Z5, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ u.jsxs(He, { children: [
                /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Node Daemon Status" }),
                /* @__PURE__ */ u.jsx(Ce, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: i != null && i.healthy ? "Active · Running" : "Stopped" })
              ] })
            ] }),
            /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: "Service: hostpanel-nodejsd • User: hp-nodejs" })
          ] }) }),
          /* @__PURE__ */ u.jsx(rs, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ u.jsxs(os, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ u.jsx(
                He,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (D) => Yr(D.palette.success.main, 0.1),
                    color: "success.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ u.jsx(Xg, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ u.jsxs(He, { children: [
                /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Running Apps" }),
                /* @__PURE__ */ u.jsxs(Ce, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  tt,
                  " / ",
                  l.length,
                  " Online"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: l.length === 0 ? "No applications deployed" : `${l.length - tt} stopped or paused` })
          ] }) }),
          /* @__PURE__ */ u.jsx(rs, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ u.jsxs(os, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ u.jsx(
                He,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (D) => Yr(D.palette.warning.main, 0.1),
                    color: "warning.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ u.jsx(J5, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ u.jsxs(He, { children: [
                /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Runtime Versions" }),
                /* @__PURE__ */ u.jsxs(Ce, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  d.length,
                  " Installed"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: d.length > 0 ? d.map((D) => `v${D.major}`).join(", ") + " active" : "No runtimes installed" })
          ] }) }),
          /* @__PURE__ */ u.jsx(rs, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ u.jsxs(os, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ u.jsx(
                He,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (D) => Yr(D.palette.secondary.main, 0.1),
                    color: "secondary.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ u.jsx(Ju, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ u.jsxs(He, { children: [
                /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Total Memory / CPU" }),
                /* @__PURE__ */ u.jsxs(Ce, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  Fn.toFixed(1),
                  " MB"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs(Ce, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: [
              tt,
              " active app process",
              tt === 1 ? "" : "es"
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(td, { padded: !1, children: [
      /* @__PURE__ */ u.jsx(He, { sx: { borderBottom: 1, borderColor: "divider", px: 2 }, children: /* @__PURE__ */ u.jsxs(D5, { value: t, onChange: (D, ie) => n(ie), children: [
        /* @__PURE__ */ u.jsx(Jl, { label: `Applications (${l.length})` }),
        /* @__PURE__ */ u.jsx(Jl, { label: "Node Runtimes" }),
        /* @__PURE__ */ u.jsx(Jl, { label: "Live Console Logs" }),
        /* @__PURE__ */ u.jsx(Jl, { label: "Service & Isolation" })
      ] }) }),
      t === 0 && /* @__PURE__ */ u.jsxs(He, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsx(
          qe,
          {
            direction: "row",
            spacing: 2,
            sx: { justifyContent: "space-between", alignItems: "center", mb: 2 },
            children: /* @__PURE__ */ u.jsx(
              Hn,
              {
                size: "small",
                placeholder: "Search apps by name, path, or port...",
                value: m,
                onChange: (D) => v(D.target.value),
                slotProps: {
                  input: {
                    startAdornment: /* @__PURE__ */ u.jsx(xI, { position: "start", children: /* @__PURE__ */ u.jsx(Q5, { sx: { fontSize: 18, color: "text.disabled" } }) })
                  }
                },
                sx: { maxWidth: 360, width: "100%" }
              }
            )
          }
        ),
        /* @__PURE__ */ u.jsx(f5, { children: /* @__PURE__ */ u.jsxs(Bg, { size: "medium", children: [
          /* @__PURE__ */ u.jsx(Ug, { children: /* @__PURE__ */ u.jsxs(ss, { children: [
            /* @__PURE__ */ u.jsx(Dt, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "App Name & Path" }),
            /* @__PURE__ */ u.jsx(Dt, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Status" }),
            /* @__PURE__ */ u.jsx(Dt, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Runtime" }),
            /* @__PURE__ */ u.jsx(Dt, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Assigned Port" }),
            /* @__PURE__ */ u.jsx(Dt, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Memory / CPU" }),
            /* @__PURE__ */ u.jsx(Dt, { align: "right", sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ u.jsx(_g, { children: we.length === 0 ? /* @__PURE__ */ u.jsx(ss, { children: /* @__PURE__ */ u.jsxs(Dt, { colSpan: 6, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ u.jsx(Xg, { sx: { fontSize: 40, color: "text.disabled", mb: 1 } }),
            /* @__PURE__ */ u.jsx(Ce, { sx: { fontWeight: 600, color: "text.secondary" }, children: "No Node.js Applications Deployed" }),
            /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.8125rem", color: "text.disabled", mb: 2 }, children: "Deploy an Express, Next.js, Fastify, or custom Node.js application to get started." }),
            /* @__PURE__ */ u.jsx(
              zt,
              {
                variant: "contained",
                color: "primary",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(Zu, {}),
                onClick: re,
                children: "Deploy First App"
              }
            )
          ] }) }) : we.map((D) => /* @__PURE__ */ u.jsxs(ss, { hover: !0, children: [
            /* @__PURE__ */ u.jsxs(Dt, { children: [
              /* @__PURE__ */ u.jsx(Ce, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: D.name }),
              /* @__PURE__ */ u.jsxs(
                Ce,
                {
                  sx: {
                    fontFamily: ir,
                    fontSize: "0.75rem",
                    color: "text.disabled"
                  },
                  children: [
                    D.directory,
                    "/",
                    D.script
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx(Dt, { children: /* @__PURE__ */ u.jsx(
              Zo,
              {
                size: "small",
                icon: /* @__PURE__ */ u.jsx(Qg, { ok: D.status === "running", size: 7 }),
                label: D.status === "running" ? `Running (PID ${D.pid})` : "Stopped",
                color: D.status === "running" ? "success" : "default",
                variant: "outlined",
                sx: { fontWeight: 500 }
              }
            ) }),
            /* @__PURE__ */ u.jsx(Dt, { children: /* @__PURE__ */ u.jsx(
              Zo,
              {
                size: "small",
                label: `Node ${D.node_version}`,
                variant: "outlined",
                sx: { fontFamily: ir, fontSize: "0.75rem" }
              }
            ) }),
            /* @__PURE__ */ u.jsx(Dt, { children: /* @__PURE__ */ u.jsx(br, { title: "Copy local reverse proxy address", children: /* @__PURE__ */ u.jsx(
              Zo,
              {
                size: "small",
                label: `http://127.0.0.1:${D.port}`,
                onClick: () => {
                  navigator.clipboard.writeText(`http://127.0.0.1:${D.port}`), at(`Copied http://127.0.0.1:${D.port}`, "info");
                },
                icon: /* @__PURE__ */ u.jsx(q5, { sx: { fontSize: "13px !important" } }),
                sx: {
                  fontFamily: ir,
                  fontSize: "0.75rem",
                  cursor: "pointer"
                }
              }
            ) }) }),
            /* @__PURE__ */ u.jsx(Dt, { sx: { fontFamily: ir, fontSize: "0.8125rem", color: "text.secondary" }, children: D.status === "running" ? `${D.memory_mb} MB • ${D.cpu_pct}%` : "—" }),
            /* @__PURE__ */ u.jsx(Dt, { align: "right", children: /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              D.status === "running" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                /* @__PURE__ */ u.jsx(br, { title: "Restart Application", children: /* @__PURE__ */ u.jsx(pn, { size: "small", onClick: () => zr(D.name), children: /* @__PURE__ */ u.jsx(V5, { sx: { fontSize: 18 } }) }) }),
                /* @__PURE__ */ u.jsx(br, { title: "Stop Application", children: /* @__PURE__ */ u.jsx(pn, { size: "small", color: "warning", onClick: () => Lr(D.name), children: /* @__PURE__ */ u.jsx(H5, { sx: { fontSize: 18 } }) }) })
              ] }) : /* @__PURE__ */ u.jsx(br, { title: "Start Application", children: /* @__PURE__ */ u.jsx(pn, { size: "small", color: "success", onClick: () => Uo(D.name), children: /* @__PURE__ */ u.jsx(U5, { sx: { fontSize: 18 } }) }) }),
              /* @__PURE__ */ u.jsx(br, { title: "Edit Application", children: /* @__PURE__ */ u.jsx(pn, { size: "small", onClick: () => U(D), children: /* @__PURE__ */ u.jsx(Gg, { sx: { fontSize: 18 } }) }) }),
              /* @__PURE__ */ u.jsx(br, { title: "Environment Variables", children: /* @__PURE__ */ u.jsx(pn, { size: "small", onClick: () => Wi(D.name), children: /* @__PURE__ */ u.jsx(G5, { sx: { fontSize: 18 } }) }) }),
              /* @__PURE__ */ u.jsx(br, { title: "View Logs", children: /* @__PURE__ */ u.jsx(
                pn,
                {
                  size: "small",
                  onClick: () => {
                    dt(D.name), n(2);
                  },
                  children: /* @__PURE__ */ u.jsx(Y5, { sx: { fontSize: 18 } })
                }
              ) }),
              /* @__PURE__ */ u.jsx(br, { title: "Delete Application", children: /* @__PURE__ */ u.jsx(
                pn,
                {
                  size: "small",
                  color: "error",
                  onClick: () => Jn(D.name),
                  children: /* @__PURE__ */ u.jsx(K5, { sx: { fontSize: 18 } })
                }
              ) })
            ] }) })
          ] }, D.name)) })
        ] }) })
      ] }),
      t === 1 && /* @__PURE__ */ u.jsxs(He, { sx: { p: 3 }, children: [
        /* @__PURE__ */ u.jsx(qe, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2.5 }, children: /* @__PURE__ */ u.jsxs(He, { children: [
          /* @__PURE__ */ u.jsx(Ce, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: "Node.js Runtimes Manager" }),
          /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: "Isolated standalone binaries under /opt/hostpanel/runtimes/node/" })
        ] }) }),
        /* @__PURE__ */ u.jsx(He, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }, children: [
          { major: "18", title: "Node.js 18 LTS (Hydrogen)", status: "Active LTS", desc: "Stable for legacy frameworks and LTS maintenance" },
          { major: "20", title: "Node.js 20 LTS (Iron)", status: "Active LTS", desc: "Enterprise LTS with high performance and security" },
          { major: "22", title: "Node.js 22 LTS (Jod)", status: "Latest LTS", desc: "Modern V8 engine with native WebSocket & fetch" },
          { major: "24", title: "Node.js 24 (Current)", status: "Current", desc: "Cutting edge features and latest ECMAScript syntax" }
        ].map((D) => {
          const ie = c.find((fn) => fn.major === D.major), Ie = ie ? !!ie.installed : !1, nt = l.filter((fn) => fn.node_version === D.major).length;
          return /* @__PURE__ */ u.jsx(rs, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ u.jsxs(os, { sx: { p: 2.5 }, children: [
            /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1.5, sx: { justifyContent: "space-between", alignItems: "flex-start", mb: 1 }, children: [
              /* @__PURE__ */ u.jsxs(He, { children: [
                /* @__PURE__ */ u.jsx(Ce, { sx: { fontWeight: 700, fontSize: "1rem" }, children: D.title }),
                /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.75rem", color: "text.secondary", mt: 0.25 }, children: D.desc })
              ] }),
              /* @__PURE__ */ u.jsx(
                Zo,
                {
                  size: "small",
                  label: Ie ? "Installed" : "Available",
                  color: Ie ? "success" : "default",
                  variant: "outlined"
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx(OP, { sx: { my: 1.5 } }),
            /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 3, sx: { mb: 2 }, children: [
              /* @__PURE__ */ u.jsx(
                xo,
                {
                  label: "Binary Path",
                  value: Ie ? `/opt/hostpanel/runtimes/node/v${D.major}/bin/node` : /* @__PURE__ */ u.jsx(Ce, { component: "span", sx: { color: "text.disabled", fontStyle: "italic", fontSize: "0.75rem" }, children: "Not installed" })
                }
              ),
              /* @__PURE__ */ u.jsx(
                xo,
                {
                  label: "Active Apps",
                  value: Ie ? `${nt} Apps` : "—",
                  mono: !1
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx(qe, { direction: "row", spacing: 1, children: Ie ? /* @__PURE__ */ u.jsx(
              zt,
              {
                size: "small",
                variant: "outlined",
                color: "error",
                disabled: nt > 0,
                onClick: () => he(D.major),
                children: nt > 0 ? "In Use by Apps" : "Remove"
              }
            ) : /* @__PURE__ */ u.jsxs(
              zt,
              {
                size: "small",
                variant: "contained",
                onClick: () => {
                  ve(D.major), Ee(!1), ue([]), ke(!0);
                },
                children: [
                  "Install v",
                  D.major
                ]
              }
            ) })
          ] }) }, D.major);
        }) })
      ] }),
      t === 2 && /* @__PURE__ */ u.jsxs(He, { sx: { p: 3 }, children: [
        /* @__PURE__ */ u.jsxs(
          qe,
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
              /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
                /* @__PURE__ */ u.jsx(Ce, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: "Application:" }),
                /* @__PURE__ */ u.jsx(
                  fi,
                  {
                    size: "small",
                    value: Me,
                    onChange: (D) => dt(D.target.value),
                    sx: { minWidth: 200 },
                    children: l.map((D) => /* @__PURE__ */ u.jsxs(yo, { value: D.name, children: [
                      D.name,
                      " (",
                      D.status,
                      ")"
                    ] }, D.name))
                  }
                ),
                /* @__PURE__ */ u.jsxs(
                  fi,
                  {
                    size: "small",
                    value: ne,
                    onChange: (D) => be(D.target.value),
                    children: [
                      /* @__PURE__ */ u.jsx(yo, { value: "all", children: "All (Stdout + Stderr)" }),
                      /* @__PURE__ */ u.jsx(yo, { value: "out", children: "Stdout Only" }),
                      /* @__PURE__ */ u.jsx(yo, { value: "err", children: "Stderr Only" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1, children: [
                /* @__PURE__ */ u.jsx(
                  zt,
                  {
                    size: "small",
                    variant: "outlined",
                    startIcon: /* @__PURE__ */ u.jsx(Yg, {}),
                    onClick: () => En(Me, Oe, ne),
                    children: "Refresh"
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  zt,
                  {
                    size: "small",
                    variant: "outlined",
                    color: "secondary",
                    onClick: () => Te([]),
                    children: "Clear"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ u.jsx(qg, { lines: ft, running: Zn })
      ] }),
      t === 3 && /* @__PURE__ */ u.jsxs(He, { sx: { p: 3 }, children: [
        /* @__PURE__ */ u.jsx(Ce, { sx: { fontWeight: 700, fontSize: "1.125rem", mb: 0.5 }, children: "100% HostPanel Isolation Architecture" }),
        /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 3 }, children: "Strict isolation under /opt/hostpanel. No scatter into system /var, /etc, or /tmp." }),
        /* @__PURE__ */ u.jsxs(He, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }, children: [
          /* @__PURE__ */ u.jsx(td, { label: "Filesystem Sandboxes (/opt/hostpanel)", padded: !1, children: /* @__PURE__ */ u.jsxs(Bg, { size: "small", children: [
            /* @__PURE__ */ u.jsx(Ug, { children: /* @__PURE__ */ u.jsxs(ss, { children: [
              /* @__PURE__ */ u.jsx(Dt, { sx: { fontWeight: 600, fontSize: "0.75rem" }, children: "Sandbox Purpose" }),
              /* @__PURE__ */ u.jsx(Dt, { sx: { fontWeight: 600, fontSize: "0.75rem" }, children: "Enforced Path" })
            ] }) }),
            /* @__PURE__ */ u.jsx(_g, { children: [
              { purpose: "Node Runtime Binaries", path: "/opt/hostpanel/runtimes/node/" },
              { purpose: "Application Data & Roots", path: "/opt/hostpanel/data/apps/" },
              { purpose: "Configuration & Env Files", path: "/opt/hostpanel/etc/nodejs/" },
              { purpose: "Application Logs", path: "/opt/hostpanel/logs/nodejs/" },
              { purpose: "Daemon & App PIDs", path: "/opt/hostpanel/run/nodejs/" },
              { purpose: "Reverse Proxy Ports", path: "31000 – 31999 (Allocated)" }
            ].map((D) => /* @__PURE__ */ u.jsxs(ss, { children: [
              /* @__PURE__ */ u.jsx(Dt, { sx: { fontSize: "0.8125rem" }, children: D.purpose }),
              /* @__PURE__ */ u.jsx(Dt, { sx: { fontFamily: ir, fontSize: "0.75rem", color: "text.secondary" }, children: D.path })
            ] }, D.path)) })
          ] }) }),
          /* @__PURE__ */ u.jsx(td, { label: "System Daemon & Security Grant", padded: !0, children: /* @__PURE__ */ u.jsxs(qe, { spacing: 2, children: [
            /* @__PURE__ */ u.jsx(xo, { label: "Service Unit", value: "hostpanel-nodejsd.service" }),
            /* @__PURE__ */ u.jsx(xo, { label: "Service Linux User", value: "hp-nodejs (Unprivileged)" }),
            /* @__PURE__ */ u.jsx(xo, { label: "Service Daemon Binding", value: "Isolated Loopback (127.0.0.1)" }),
            /* @__PURE__ */ u.jsx(xo, { label: "Privileged Root Ops Helper", value: "/opt/hostpanel/packages/nodejs/ops/hp-nodejs" }),
            /* @__PURE__ */ u.jsx(xo, { label: "Sudoers Rule", value: "hp-nodejs ALL=(root) NOPASSWD: /opt/hostpanel/packages/nodejs/ops/hp-nodejs *" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(
      YP,
      {
        anchor: "right",
        open: je,
        onClose: () => Ve(!1),
        slotProps: { paper: { sx: { width: { xs: "100%", sm: 520 }, p: 3 } } },
        children: [
          /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
            /* @__PURE__ */ u.jsxs(Ce, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
              "Environment Variables: ",
              Ae
            ] }),
            /* @__PURE__ */ u.jsx(pn, { size: "small", onClick: () => Ve(!1), children: /* @__PURE__ */ u.jsx(ea, { sx: { fontSize: 18 } }) })
          ] }),
          /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 2 }, children: "Variables are injected into the application process on startup. Format: KEY=VALUE (one per line)." }),
          /* @__PURE__ */ u.jsx(
            Hn,
            {
              fullWidth: !0,
              multiline: !0,
              rows: 16,
              value: We,
              onChange: (D) => et(D.target.value),
              placeholder: `PORT=31000
NODE_ENV=production
DATABASE_URL=mongodb://localhost:27017/app`,
              slotProps: {
                input: {
                  sx: { fontFamily: ir, fontSize: "0.8125rem" }
                }
              },
              sx: { mb: 3 }
            }
          ),
          /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1.5, children: [
            /* @__PURE__ */ u.jsx(
              zt,
              {
                variant: "contained",
                color: "primary",
                onClick: Ho,
                disabled: ze,
                startIcon: ze ? /* @__PURE__ */ u.jsx(wo, { size: 16 }) : /* @__PURE__ */ u.jsx(ed, {}),
                children: ze ? "Saving…" : "Save Variables"
              }
            ),
            /* @__PURE__ */ u.jsx(zt, { variant: "outlined", onClick: () => Ve(!1), children: "Cancel" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      Ul,
      {
        open: x,
        onClose: () => !g && b(!1),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsxs(Kl, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ u.jsx(Zu, { sx: { color: "primary.main" } }),
              /* @__PURE__ */ u.jsx(Ce, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: "Deploy Node.js Application" })
            ] }),
            /* @__PURE__ */ u.jsx(pn, { size: "small", onClick: () => b(!1), disabled: g, children: /* @__PURE__ */ u.jsx(ea, { sx: { fontSize: 18 } }) })
          ] }),
          /* @__PURE__ */ u.jsxs(He, { component: "form", onSubmit: po, children: [
            /* @__PURE__ */ u.jsxs(Vl, { dividers: !0, sx: { display: "flex", flexDirection: "column", gap: 2.5 }, children: [
              /* @__PURE__ */ u.jsx(Ce, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: "Configure application parameters, runtime version, entrypoint, and isolated reverse proxy port." }),
              d.length === 0 && /* @__PURE__ */ u.jsxs(Qu, { severity: "warning", children: [
                "No Node.js runtimes are currently installed. Please install a version from the ",
                /* @__PURE__ */ u.jsx("strong", { children: "Node Runtimes" }),
                " tab first before deploying an application."
              ] }),
              /* @__PURE__ */ u.jsx(Vn, { label: "Application Name", hint: "Unique identifier, e.g. 'my-app' or 'api-service'", children: /* @__PURE__ */ u.jsx(
                Hn,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "e.g. backend-api",
                  value: C,
                  onChange: (D) => {
                    const ie = D.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, "");
                    y(ie), (!h || h.startsWith("/opt/hostpanel/data/apps/")) && S(`/opt/hostpanel/data/apps/${ie}`);
                  },
                  required: !0
                }
              ) }),
              /* @__PURE__ */ u.jsx(Vn, { label: "Application Directory", hint: "Root path containing package.json and entrypoint", children: /* @__PURE__ */ u.jsx(
                Hn,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "/opt/hostpanel/data/apps/my-app",
                  value: h,
                  onChange: (D) => S(D.target.value),
                  required: !0
                }
              ) }),
              /* @__PURE__ */ u.jsxs(qe, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
                /* @__PURE__ */ u.jsx(
                  Vn,
                  {
                    label: "Node.js Version",
                    hint: d.length > 0 ? "Target installed runtime" : "No runtimes installed",
                    sx: { flex: 1 },
                    children: /* @__PURE__ */ u.jsx(
                      fi,
                      {
                        fullWidth: !0,
                        size: "small",
                        value: d.length > 0 ? w : "",
                        onChange: (D) => E(D.target.value),
                        disabled: d.length === 0,
                        displayEmpty: !0,
                        children: d.length === 0 ? /* @__PURE__ */ u.jsx(yo, { value: "", disabled: !0, children: /* @__PURE__ */ u.jsx("em", { children: "No runtimes installed (install via Node Runtimes tab)" }) }) : d.map((D) => {
                          const ie = Zg[D.major], Ie = ie ? ie.title : `Node.js v${D.major}`;
                          return /* @__PURE__ */ u.jsx(yo, { value: D.major, children: Ie }, D.major);
                        })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ u.jsx(Vn, { label: "Start Script / Entrypoint", hint: "e.g. index.js or dist/server.js", sx: { flex: 1 }, children: /* @__PURE__ */ u.jsx(
                  Hn,
                  {
                    fullWidth: !0,
                    size: "small",
                    placeholder: "index.js",
                    value: k,
                    onChange: (D) => R(D.target.value),
                    required: !0
                  }
                ) })
              ] }),
              /* @__PURE__ */ u.jsx(Vn, { label: "Port Assignment (31000–31999)", hint: "Set to 0 for automatic port allocation", children: /* @__PURE__ */ u.jsx(
                Hn,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "0 (Auto-allocate next free port in 31000-31999)",
                  value: T,
                  onChange: (D) => A(D.target.value)
                }
              ) }),
              /* @__PURE__ */ u.jsx(Vn, { label: "Environment Variables", hint: "KEY=VALUE format, one per line", children: /* @__PURE__ */ u.jsx(
                Hn,
                {
                  fullWidth: !0,
                  multiline: !0,
                  rows: 4,
                  size: "small",
                  value: N,
                  onChange: (D) => I(D.target.value),
                  slotProps: {
                    input: {
                      sx: { fontFamily: ir, fontSize: "0.8125rem" }
                    }
                  }
                }
              ) })
            ] }),
            /* @__PURE__ */ u.jsxs(Hl, { sx: { p: 2 }, children: [
              /* @__PURE__ */ u.jsx(zt, { onClick: () => b(!1), disabled: g, children: "Cancel" }),
              /* @__PURE__ */ u.jsx(
                zt,
                {
                  type: "submit",
                  variant: "contained",
                  color: "primary",
                  disabled: g || !C || d.length === 0,
                  startIcon: g ? /* @__PURE__ */ u.jsx(wo, { size: 16 }) : /* @__PURE__ */ u.jsx(ed, {}),
                  children: g ? "Deploying Application…" : "Deploy Application"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      Ul,
      {
        open: P,
        onClose: () => !G && j(!1),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsxs(Kl, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ u.jsx(Gg, { sx: { color: "primary.main" } }),
              /* @__PURE__ */ u.jsxs(Ce, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                "Edit Application: ",
                O == null ? void 0 : O.name
              ] })
            ] }),
            /* @__PURE__ */ u.jsx(pn, { size: "small", onClick: () => j(!1), disabled: G, children: /* @__PURE__ */ u.jsx(ea, { sx: { fontSize: 18 } }) })
          ] }),
          /* @__PURE__ */ u.jsxs(He, { component: "form", onSubmit: ee, children: [
            /* @__PURE__ */ u.jsxs(Vl, { dividers: !0, sx: { display: "flex", flexDirection: "column", gap: 2.5 }, children: [
              /* @__PURE__ */ u.jsxs(Ce, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: [
                "Modify application directory, runtime version, entrypoint script, and allocated reverse proxy port.",
                (O == null ? void 0 : O.status) === "running" && /* @__PURE__ */ u.jsx("span", { style: { color: "#38bdf8", display: "block", marginTop: 4 }, children: "⚡ This application is currently running. Saving changes will automatically restart the process to apply the new configuration." })
              ] }),
              /* @__PURE__ */ u.jsx(Vn, { label: "Application Name", hint: "Unique identifier cannot be modified", children: /* @__PURE__ */ u.jsx(
                Hn,
                {
                  fullWidth: !0,
                  size: "small",
                  value: (O == null ? void 0 : O.name) || "",
                  disabled: !0
                }
              ) }),
              /* @__PURE__ */ u.jsx(Vn, { label: "Application Directory", hint: "Root path containing package.json and entrypoint", children: /* @__PURE__ */ u.jsx(
                Hn,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "/opt/hostpanel/data/apps/my-app",
                  value: M,
                  onChange: (D) => z(D.target.value),
                  required: !0
                }
              ) }),
              /* @__PURE__ */ u.jsxs(qe, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
                /* @__PURE__ */ u.jsx(
                  Vn,
                  {
                    label: "Node.js Version",
                    hint: d.length > 0 ? "Target installed runtime" : "No runtimes installed",
                    sx: { flex: 1 },
                    children: /* @__PURE__ */ u.jsx(
                      fi,
                      {
                        fullWidth: !0,
                        size: "small",
                        value: B,
                        onChange: (D) => W(D.target.value),
                        disabled: d.length === 0,
                        children: d.map((D) => {
                          const ie = Zg[D.major], Ie = ie ? ie.title : `Node.js v${D.major}`;
                          return /* @__PURE__ */ u.jsx(yo, { value: D.major, children: Ie }, D.major);
                        })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ u.jsx(Vn, { label: "Start Script / Entrypoint", hint: "e.g. index.js or dist/server.js", sx: { flex: 1 }, children: /* @__PURE__ */ u.jsx(
                  Hn,
                  {
                    fullWidth: !0,
                    size: "small",
                    placeholder: "index.js",
                    value: _,
                    onChange: (D) => Q(D.target.value),
                    required: !0
                  }
                ) })
              ] }),
              /* @__PURE__ */ u.jsx(Vn, { label: "Assigned Port (31000–31999)", hint: "Reverse proxy port for this application", children: /* @__PURE__ */ u.jsx(
                Hn,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "31000",
                  value: K,
                  onChange: (D) => Z(D.target.value),
                  required: !0
                }
              ) })
            ] }),
            /* @__PURE__ */ u.jsxs(Hl, { sx: { p: 2 }, children: [
              /* @__PURE__ */ u.jsx(zt, { onClick: () => j(!1), disabled: G, children: "Cancel" }),
              /* @__PURE__ */ u.jsx(
                zt,
                {
                  type: "submit",
                  variant: "contained",
                  color: "primary",
                  disabled: G || !M,
                  startIcon: G ? /* @__PURE__ */ u.jsx(wo, { size: 16 }) : /* @__PURE__ */ u.jsx(ed, {}),
                  children: G ? "Saving Changes…" : "Save Changes"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      Ul,
      {
        open: le,
        onClose: () => !oe && ke(!1),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsxs(Kl, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ u.jsxs(qe, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ u.jsx(Ju, { sx: { color: "primary.main" } }),
              /* @__PURE__ */ u.jsxs(Ce, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                "Install Node.js v",
                ye,
                " Runtime"
              ] })
            ] }),
            /* @__PURE__ */ u.jsx(pn, { size: "small", onClick: () => ke(!1), disabled: oe, children: /* @__PURE__ */ u.jsx(ea, { sx: { fontSize: 18 } }) })
          ] }),
          /* @__PURE__ */ u.jsxs(Vl, { dividers: !0, children: [
            /* @__PURE__ */ u.jsxs(Ce, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 2 }, children: [
              "Downloads and provisions standalone Node.js and NPM binaries into ",
              /* @__PURE__ */ u.jsxs("code", { children: [
                "/opt/hostpanel/runtimes/node/v",
                ye,
                "/"
              ] }),
              "."
            ] }),
            /* @__PURE__ */ u.jsx(qe, { direction: "row", spacing: 1, sx: { alignItems: "center", mb: 2 }, children: /* @__PURE__ */ u.jsx(
              Zo,
              {
                icon: /* @__PURE__ */ u.jsx(Ju, { sx: { fontSize: 16 } }),
                label: `Target Runtime: Node.js v${ye}`,
                color: "primary",
                variant: "outlined",
                sx: { fontWeight: 600 }
              }
            ) }),
            _e && /* @__PURE__ */ u.jsxs(Qu, { severity: "success", sx: { mb: 2 }, children: [
              "Node.js v",
              ye,
              " runtime was successfully installed and verified!"
            ] }),
            $e.length > 0 ? /* @__PURE__ */ u.jsx(He, { sx: { mt: 1 }, children: /* @__PURE__ */ u.jsx(qg, { lines: $e, running: oe }) }) : /* @__PURE__ */ u.jsx(He, { sx: { p: 2.5, bgcolor: "background.default", borderRadius: 1.5, textAlign: "center" }, children: /* @__PURE__ */ u.jsxs(Ce, { sx: { fontSize: "0.875rem", color: "text.secondary" }, children: [
              "Ready to download and install ",
              /* @__PURE__ */ u.jsxs("strong", { children: [
                "Node.js v",
                ye
              ] }),
              ". Click below to begin live execution."
            ] }) })
          ] }),
          /* @__PURE__ */ u.jsx(Hl, { sx: { p: 2 }, children: _e ? /* @__PURE__ */ u.jsx(
            zt,
            {
              variant: "contained",
              color: "primary",
              onClick: () => {
                ke(!1), Ee(!1), ue([]);
              },
              children: "Done"
            }
          ) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(zt, { onClick: () => ke(!1), disabled: oe, children: "Cancel" }),
            /* @__PURE__ */ u.jsx(
              zt,
              {
                variant: "contained",
                color: "primary",
                onClick: () => q(ye),
                disabled: oe,
                startIcon: oe ? /* @__PURE__ */ u.jsx(wo, { size: 16 }) : /* @__PURE__ */ u.jsx(X5, {}),
                children: oe ? "Installing…" : `Start Installation (Node ${ye})`
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(Ul, { open: !!Ot, onClose: () => Jn(null), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsx(Kl, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: "Delete Application?" }),
      /* @__PURE__ */ u.jsx(Vl, { children: /* @__PURE__ */ u.jsxs(Ce, { sx: { fontSize: "0.875rem" }, children: [
        "Are you sure you want to stop and delete application ",
        /* @__PURE__ */ u.jsx("strong", { children: Ot }),
        "? This will remove its daemon configuration and process state."
      ] }) }),
      /* @__PURE__ */ u.jsxs(Hl, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsx(zt, { onClick: () => Jn(null), disabled: er, children: "Cancel" }),
        /* @__PURE__ */ u.jsx(
          zt,
          {
            variant: "contained",
            color: "error",
            onClick: Dr,
            disabled: er,
            children: er ? "Deleting…" : "Delete Application"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u.jsx(
      WM,
      {
        open: !!De,
        autoHideDuration: 4e3,
        onClose: () => Nt(null),
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        children: De ? /* @__PURE__ */ u.jsx(Qu, { severity: De.severity, onClose: () => Nt(null), children: De.message }) : void 0
      }
    )
  ] });
}
let tc = null;
function rj(e, t) {
  tc = p0(e), tc.render(
    /* @__PURE__ */ u.jsx(p.StrictMode, { children: /* @__PURE__ */ u.jsx(tj, { ctx: t }) })
  );
}
function oj() {
  const e = tc;
  tc = null, e && queueMicrotask(() => e.unmount());
}
const sj = { mount: rj, unmount: oj };
export {
  sj as default,
  rj as mount,
  oj as unmount
};
//# sourceMappingURL=main.js.map
