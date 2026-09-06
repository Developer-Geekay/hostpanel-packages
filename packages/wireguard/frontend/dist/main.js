var lb = Object.defineProperty;
var ab = (e, t, n) => t in e ? lb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ki = (e, t, n) => ab(e, typeof t != "symbol" ? t + "" : t, n);
function ub(e, t) {
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
function cb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oy = { exports: {} }, yu = {}, By = { exports: {} }, je = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ul = Symbol.for("react.element"), db = Symbol.for("react.portal"), fb = Symbol.for("react.fragment"), pb = Symbol.for("react.strict_mode"), hb = Symbol.for("react.profiler"), mb = Symbol.for("react.provider"), gb = Symbol.for("react.context"), yb = Symbol.for("react.forward_ref"), vb = Symbol.for("react.suspense"), xb = Symbol.for("react.memo"), bb = Symbol.for("react.lazy"), Fh = Symbol.iterator;
function Sb(e) {
  return e === null || typeof e != "object" ? null : (e = Fh && e[Fh] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ly = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, zy = Object.assign, _y = {};
function _i(e, t, n) {
  this.props = e, this.context = t, this.refs = _y, this.updater = n || Ly;
}
_i.prototype.isReactComponent = {};
_i.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
_i.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Fy() {
}
Fy.prototype = _i.prototype;
function Qf(e, t, n) {
  this.props = e, this.context = t, this.refs = _y, this.updater = n || Ly;
}
var Xf = Qf.prototype = new Fy();
Xf.constructor = Qf;
zy(Xf, _i.prototype);
Xf.isPureReactComponent = !0;
var Dh = Array.isArray, Dy = Object.prototype.hasOwnProperty, qf = { current: null }, Wy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uy(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Dy.call(t, r) && !Wy.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: ul, type: e, key: i, ref: s, props: o, _owner: qf.current };
}
function wb(e, t) {
  return { $$typeof: ul, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Jf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ul;
}
function Cb(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Wh = /\/+/g;
function Bc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Cb("" + e.key) : t.toString(36);
}
function fa(e, t, n, r, o) {
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
        case ul:
        case db:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Bc(s, 0) : r, Dh(o) ? (n = "", e != null && (n = e.replace(Wh, "$&/") + "/"), fa(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Jf(o) && (o = wb(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Wh, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Dh(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + Bc(i, l);
    s += fa(i, t, n, a, o);
  }
  else if (a = Sb(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + Bc(i, l++), s += fa(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Pl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return fa(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function kb(e) {
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
var Zt = { current: null }, pa = { transition: null }, Eb = { ReactCurrentDispatcher: Zt, ReactCurrentBatchConfig: pa, ReactCurrentOwner: qf };
function Vy() {
  throw Error("act(...) is not supported in production builds of React.");
}
je.Children = { map: Pl, forEach: function(e, t, n) {
  Pl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Pl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Pl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Jf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
je.Component = _i;
je.Fragment = fb;
je.Profiler = hb;
je.PureComponent = Qf;
je.StrictMode = pb;
je.Suspense = vb;
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Eb;
je.act = Vy;
je.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = zy({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = qf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Dy.call(t, a) && !Wy.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ul, type: e.type, key: o, ref: i, props: r, _owner: s };
};
je.createContext = function(e) {
  return e = { $$typeof: gb, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: mb, _context: e }, e.Consumer = e;
};
je.createElement = Uy;
je.createFactory = function(e) {
  var t = Uy.bind(null, e);
  return t.type = e, t;
};
je.createRef = function() {
  return { current: null };
};
je.forwardRef = function(e) {
  return { $$typeof: yb, render: e };
};
je.isValidElement = Jf;
je.lazy = function(e) {
  return { $$typeof: bb, _payload: { _status: -1, _result: e }, _init: kb };
};
je.memo = function(e, t) {
  return { $$typeof: xb, type: e, compare: t === void 0 ? null : t };
};
je.startTransition = function(e) {
  var t = pa.transition;
  pa.transition = {};
  try {
    e();
  } finally {
    pa.transition = t;
  }
};
je.unstable_act = Vy;
je.useCallback = function(e, t) {
  return Zt.current.useCallback(e, t);
};
je.useContext = function(e) {
  return Zt.current.useContext(e);
};
je.useDebugValue = function() {
};
je.useDeferredValue = function(e) {
  return Zt.current.useDeferredValue(e);
};
je.useEffect = function(e, t) {
  return Zt.current.useEffect(e, t);
};
je.useId = function() {
  return Zt.current.useId();
};
je.useImperativeHandle = function(e, t, n) {
  return Zt.current.useImperativeHandle(e, t, n);
};
je.useInsertionEffect = function(e, t) {
  return Zt.current.useInsertionEffect(e, t);
};
je.useLayoutEffect = function(e, t) {
  return Zt.current.useLayoutEffect(e, t);
};
je.useMemo = function(e, t) {
  return Zt.current.useMemo(e, t);
};
je.useReducer = function(e, t, n) {
  return Zt.current.useReducer(e, t, n);
};
je.useRef = function(e) {
  return Zt.current.useRef(e);
};
je.useState = function(e) {
  return Zt.current.useState(e);
};
je.useSyncExternalStore = function(e, t, n) {
  return Zt.current.useSyncExternalStore(e, t, n);
};
je.useTransition = function() {
  return Zt.current.useTransition();
};
je.version = "18.3.1";
By.exports = je;
var y = By.exports;
const Hy = /* @__PURE__ */ cb(y), $a = /* @__PURE__ */ ub({
  __proto__: null,
  default: Hy
}, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tb = y, Rb = Symbol.for("react.element"), Pb = Symbol.for("react.fragment"), Ib = Object.prototype.hasOwnProperty, Mb = Tb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $b = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ky(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Ib.call(t, r) && !$b.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Rb, type: e, key: i, ref: s, props: o, _owner: Mb.current };
}
yu.Fragment = Pb;
yu.jsx = Ky;
yu.jsxs = Ky;
Oy.exports = yu;
var c = Oy.exports, Gy = { exports: {} }, xn = {}, Yy = { exports: {} }, Qy = {};
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
  function t($, L) {
    var D = $.length;
    $.push(L);
    e: for (; 0 < D; ) {
      var U = D - 1 >>> 1, W = $[U];
      if (0 < o(W, L)) $[U] = L, $[D] = W, D = U;
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var L = $[0], D = $.pop();
    if (D !== L) {
      $[0] = D;
      e: for (var U = 0, W = $.length, Q = W >>> 1; U < Q; ) {
        var K = 2 * (U + 1) - 1, q = $[K], G = K + 1, oe = $[G];
        if (0 > o(q, D)) G < W && 0 > o(oe, q) ? ($[U] = oe, $[G] = D, U = G) : ($[U] = q, $[K] = D, U = K);
        else if (G < W && 0 > o(oe, D)) $[U] = oe, $[G] = D, U = G;
        else break e;
      }
    }
    return L;
  }
  function o($, L) {
    var D = $.sortIndex - L.sortIndex;
    return D !== 0 ? D : $.id - L.id;
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
  var a = [], u = [], d = 1, h = null, g = 3, f = !1, v = !1, w = !1, C = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x($) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= $) r(u), L.sortIndex = L.expirationTime, t(a, L);
      else break;
      L = n(u);
    }
  }
  function S($) {
    if (w = !1, x($), !v) if (n(a) !== null) v = !0, O(E);
    else {
      var L = n(u);
      L !== null && B(S, L.startTime - $);
    }
  }
  function E($, L) {
    v = !1, w && (w = !1, m(R), R = -1), f = !0;
    var D = g;
    try {
      for (x(L), h = n(a); h !== null && (!(h.expirationTime > L) || $ && !M()); ) {
        var U = h.callback;
        if (typeof U == "function") {
          h.callback = null, g = h.priorityLevel;
          var W = U(h.expirationTime <= L);
          L = e.unstable_now(), typeof W == "function" ? h.callback = W : h === n(a) && r(a), x(L);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var Q = !0;
      else {
        var K = n(u);
        K !== null && B(S, K.startTime - L), Q = !1;
      }
      return Q;
    } finally {
      h = null, g = D, f = !1;
    }
  }
  var k = !1, T = null, R = -1, I = 5, A = -1;
  function M() {
    return !(e.unstable_now() - A < I);
  }
  function N() {
    if (T !== null) {
      var $ = e.unstable_now();
      A = $;
      var L = !0;
      try {
        L = T(!0, $);
      } finally {
        L ? b() : (k = !1, T = null);
      }
    } else k = !1;
  }
  var b;
  if (typeof p == "function") b = function() {
    p(N);
  };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(), P = j.port2;
    j.port1.onmessage = N, b = function() {
      P.postMessage(null);
    };
  } else b = function() {
    C(N, 0);
  };
  function O($) {
    T = $, k || (k = !0, b());
  }
  function B($, L) {
    R = C(function() {
      $(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    v || f || (v = !0, O(E));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function($) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = g;
    }
    var D = g;
    g = L;
    try {
      return $();
    } finally {
      g = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function($, L) {
    switch ($) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        $ = 3;
    }
    var D = g;
    g = $;
    try {
      return L();
    } finally {
      g = D;
    }
  }, e.unstable_scheduleCallback = function($, L, D) {
    var U = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? U + D : U) : D = U, $) {
      case 1:
        var W = -1;
        break;
      case 2:
        W = 250;
        break;
      case 5:
        W = 1073741823;
        break;
      case 4:
        W = 1e4;
        break;
      default:
        W = 5e3;
    }
    return W = D + W, $ = { id: d++, callback: L, priorityLevel: $, startTime: D, expirationTime: W, sortIndex: -1 }, D > U ? ($.sortIndex = D, t(u, $), n(a) === null && $ === n(u) && (w ? (m(R), R = -1) : w = !0, B(S, D - U))) : ($.sortIndex = W, t(a, $), v || f || (v = !0, O(E))), $;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function($) {
    var L = g;
    return function() {
      var D = g;
      g = L;
      try {
        return $.apply(this, arguments);
      } finally {
        g = D;
      }
    };
  };
})(Qy);
Yy.exports = Qy;
var jb = Yy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ab = y, yn = jb;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Xy = /* @__PURE__ */ new Set(), Os = {};
function Bo(e, t) {
  bi(e, t), bi(e + "Capture", t);
}
function bi(e, t) {
  for (Os[e] = t, e = 0; e < t.length; e++) Xy.add(t[e]);
}
var Ir = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Rd = Object.prototype.hasOwnProperty, Nb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Uh = {}, Vh = {};
function Ob(e) {
  return Rd.call(Vh, e) ? !0 : Rd.call(Uh, e) ? !1 : Nb.test(e) ? Vh[e] = !0 : (Uh[e] = !0, !1);
}
function Bb(e, t, n, r) {
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
function Lb(e, t, n, r) {
  if (t === null || typeof t > "u" || Bb(e, t, n, r)) return !0;
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
function en(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Dt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Dt[e] = new en(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Dt[t] = new en(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Dt[e] = new en(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Dt[e] = new en(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Dt[e] = new en(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Dt[e] = new en(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Dt[e] = new en(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Dt[e] = new en(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Dt[e] = new en(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zf = /[\-:]([a-z])/g;
function ep(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Zf,
    ep
  );
  Dt[t] = new en(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Zf, ep);
  Dt[t] = new en(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Zf, ep);
  Dt[t] = new en(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Dt[e] = new en(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Dt.xlinkHref = new en("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Dt[e] = new en(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function tp(e, t, n, r) {
  var o = Dt.hasOwnProperty(t) ? Dt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Lb(t, n, o, r) && (n = null), r || o === null ? Ob(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Br = Ab.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Il = Symbol.for("react.element"), Zo = Symbol.for("react.portal"), ei = Symbol.for("react.fragment"), np = Symbol.for("react.strict_mode"), Pd = Symbol.for("react.profiler"), qy = Symbol.for("react.provider"), Jy = Symbol.for("react.context"), rp = Symbol.for("react.forward_ref"), Id = Symbol.for("react.suspense"), Md = Symbol.for("react.suspense_list"), op = Symbol.for("react.memo"), zr = Symbol.for("react.lazy"), Zy = Symbol.for("react.offscreen"), Hh = Symbol.iterator;
function Gi(e) {
  return e === null || typeof e != "object" ? null : (e = Hh && e[Hh] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pt = Object.assign, Lc;
function fs(e) {
  if (Lc === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Lc = t && t[1] || "";
  }
  return `
` + Lc + e;
}
var zc = !1;
function _c(e, t) {
  if (!e || zc) return "";
  zc = !0;
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
    zc = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? fs(e) : "";
}
function zb(e) {
  switch (e.tag) {
    case 5:
      return fs(e.type);
    case 16:
      return fs("Lazy");
    case 13:
      return fs("Suspense");
    case 19:
      return fs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _c(e.type, !1), e;
    case 11:
      return e = _c(e.type.render, !1), e;
    case 1:
      return e = _c(e.type, !0), e;
    default:
      return "";
  }
}
function $d(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ei:
      return "Fragment";
    case Zo:
      return "Portal";
    case Pd:
      return "Profiler";
    case np:
      return "StrictMode";
    case Id:
      return "Suspense";
    case Md:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Jy:
      return (e.displayName || "Context") + ".Consumer";
    case qy:
      return (e._context.displayName || "Context") + ".Provider";
    case rp:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case op:
      return t = e.displayName || null, t !== null ? t : $d(e.type) || "Memo";
    case zr:
      t = e._payload, e = e._init;
      try {
        return $d(e(t));
      } catch {
      }
  }
  return null;
}
function _b(e) {
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
      return $d(t);
    case 8:
      return t === np ? "StrictMode" : "Mode";
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
function eo(e) {
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
function e0(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Fb(e) {
  var t = e0(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ml(e) {
  e._valueTracker || (e._valueTracker = Fb(e));
}
function t0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = e0(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ja(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function jd(e, t) {
  var n = t.checked;
  return pt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Kh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = eo(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function n0(e, t) {
  t = t.checked, t != null && tp(e, "checked", t, !1);
}
function Ad(e, t) {
  n0(e, t);
  var n = eo(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Nd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Nd(e, t.type, eo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Gh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Nd(e, t, n) {
  (t !== "number" || ja(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ps = Array.isArray;
function di(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + eo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Od(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return pt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Yh(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(V(92));
      if (ps(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: eo(n) };
}
function r0(e, t) {
  var n = eo(t.value), r = eo(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Qh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function o0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? o0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var $l, i0 = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for ($l = $l || document.createElement("div"), $l.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = $l.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Bs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vs = {
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
}, Db = ["Webkit", "ms", "Moz", "O"];
Object.keys(vs).forEach(function(e) {
  Db.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), vs[t] = vs[e];
  });
});
function s0(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vs.hasOwnProperty(e) && vs[e] ? ("" + t).trim() : t + "px";
}
function l0(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = s0(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Wb = pt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ld(e, t) {
  if (t) {
    if (Wb[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function zd(e, t) {
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
var _d = null;
function ip(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Fd = null, fi = null, pi = null;
function Xh(e) {
  if (e = fl(e)) {
    if (typeof Fd != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = wu(t), Fd(e.stateNode, e.type, t));
  }
}
function a0(e) {
  fi ? pi ? pi.push(e) : pi = [e] : fi = e;
}
function u0() {
  if (fi) {
    var e = fi, t = pi;
    if (pi = fi = null, Xh(e), t) for (e = 0; e < t.length; e++) Xh(t[e]);
  }
}
function c0(e, t) {
  return e(t);
}
function d0() {
}
var Fc = !1;
function f0(e, t, n) {
  if (Fc) return e(t, n);
  Fc = !0;
  try {
    return c0(e, t, n);
  } finally {
    Fc = !1, (fi !== null || pi !== null) && (d0(), u0());
  }
}
function Ls(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wu(n);
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
var Dd = !1;
if (Ir) try {
  var Yi = {};
  Object.defineProperty(Yi, "passive", { get: function() {
    Dd = !0;
  } }), window.addEventListener("test", Yi, Yi), window.removeEventListener("test", Yi, Yi);
} catch {
  Dd = !1;
}
function Ub(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var xs = !1, Aa = null, Na = !1, Wd = null, Vb = { onError: function(e) {
  xs = !0, Aa = e;
} };
function Hb(e, t, n, r, o, i, s, l, a) {
  xs = !1, Aa = null, Ub.apply(Vb, arguments);
}
function Kb(e, t, n, r, o, i, s, l, a) {
  if (Hb.apply(this, arguments), xs) {
    if (xs) {
      var u = Aa;
      xs = !1, Aa = null;
    } else throw Error(V(198));
    Na || (Na = !0, Wd = u);
  }
}
function Lo(e) {
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
function p0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function qh(e) {
  if (Lo(e) !== e) throw Error(V(188));
}
function Gb(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Lo(e), t === null) throw Error(V(188));
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
        if (i === n) return qh(o), e;
        if (i === r) return qh(o), t;
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
function h0(e) {
  return e = Gb(e), e !== null ? m0(e) : null;
}
function m0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = m0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var g0 = yn.unstable_scheduleCallback, Jh = yn.unstable_cancelCallback, Yb = yn.unstable_shouldYield, Qb = yn.unstable_requestPaint, bt = yn.unstable_now, Xb = yn.unstable_getCurrentPriorityLevel, sp = yn.unstable_ImmediatePriority, y0 = yn.unstable_UserBlockingPriority, Oa = yn.unstable_NormalPriority, qb = yn.unstable_LowPriority, v0 = yn.unstable_IdlePriority, vu = null, ar = null;
function Jb(e) {
  if (ar && typeof ar.onCommitFiberRoot == "function") try {
    ar.onCommitFiberRoot(vu, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Kn = Math.clz32 ? Math.clz32 : tS, Zb = Math.log, eS = Math.LN2;
function tS(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Zb(e) / eS | 0) | 0;
}
var jl = 64, Al = 4194304;
function hs(e) {
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
function Ba(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = hs(l) : (i &= s, i !== 0 && (r = hs(i)));
  } else s = n & ~o, s !== 0 ? r = hs(s) : i !== 0 && (r = hs(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Kn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function nS(e, t) {
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
function rS(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Kn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = nS(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function Ud(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function x0() {
  var e = jl;
  return jl <<= 1, !(jl & 4194240) && (jl = 64), e;
}
function Dc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Kn(t), e[t] = n;
}
function oS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Kn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function lp(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Kn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Xe = 0;
function b0(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var S0, ap, w0, C0, k0, Vd = !1, Nl = [], Hr = null, Kr = null, Gr = null, zs = /* @__PURE__ */ new Map(), _s = /* @__PURE__ */ new Map(), Fr = [], iS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Zh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Hr = null;
      break;
    case "dragenter":
    case "dragleave":
      Kr = null;
      break;
    case "mouseover":
    case "mouseout":
      Gr = null;
      break;
    case "pointerover":
    case "pointerout":
      zs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _s.delete(t.pointerId);
  }
}
function Qi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = fl(t), t !== null && ap(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function sS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Hr = Qi(Hr, e, t, n, r, o), !0;
    case "dragenter":
      return Kr = Qi(Kr, e, t, n, r, o), !0;
    case "mouseover":
      return Gr = Qi(Gr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return zs.set(i, Qi(zs.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, _s.set(i, Qi(_s.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function E0(e) {
  var t = xo(e.target);
  if (t !== null) {
    var n = Lo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = p0(n), t !== null) {
          e.blockedOn = t, k0(e.priority, function() {
            w0(n);
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
function ha(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      _d = r, n.target.dispatchEvent(r), _d = null;
    } else return t = fl(n), t !== null && ap(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function em(e, t, n) {
  ha(e) && n.delete(t);
}
function lS() {
  Vd = !1, Hr !== null && ha(Hr) && (Hr = null), Kr !== null && ha(Kr) && (Kr = null), Gr !== null && ha(Gr) && (Gr = null), zs.forEach(em), _s.forEach(em);
}
function Xi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Vd || (Vd = !0, yn.unstable_scheduleCallback(yn.unstable_NormalPriority, lS)));
}
function Fs(e) {
  function t(o) {
    return Xi(o, e);
  }
  if (0 < Nl.length) {
    Xi(Nl[0], e);
    for (var n = 1; n < Nl.length; n++) {
      var r = Nl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Hr !== null && Xi(Hr, e), Kr !== null && Xi(Kr, e), Gr !== null && Xi(Gr, e), zs.forEach(t), _s.forEach(t), n = 0; n < Fr.length; n++) r = Fr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Fr.length && (n = Fr[0], n.blockedOn === null); ) E0(n), n.blockedOn === null && Fr.shift();
}
var hi = Br.ReactCurrentBatchConfig, La = !0;
function aS(e, t, n, r) {
  var o = Xe, i = hi.transition;
  hi.transition = null;
  try {
    Xe = 1, up(e, t, n, r);
  } finally {
    Xe = o, hi.transition = i;
  }
}
function uS(e, t, n, r) {
  var o = Xe, i = hi.transition;
  hi.transition = null;
  try {
    Xe = 4, up(e, t, n, r);
  } finally {
    Xe = o, hi.transition = i;
  }
}
function up(e, t, n, r) {
  if (La) {
    var o = Hd(e, t, n, r);
    if (o === null) qc(e, t, r, za, n), Zh(e, r);
    else if (sS(o, e, t, n, r)) r.stopPropagation();
    else if (Zh(e, r), t & 4 && -1 < iS.indexOf(e)) {
      for (; o !== null; ) {
        var i = fl(o);
        if (i !== null && S0(i), i = Hd(e, t, n, r), i === null && qc(e, t, r, za, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else qc(e, t, r, null, n);
  }
}
var za = null;
function Hd(e, t, n, r) {
  if (za = null, e = ip(r), e = xo(e), e !== null) if (t = Lo(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = p0(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return za = e, null;
}
function T0(e) {
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
      switch (Xb()) {
        case sp:
          return 1;
        case y0:
          return 4;
        case Oa:
        case qb:
          return 16;
        case v0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wr = null, cp = null, ma = null;
function R0() {
  if (ma) return ma;
  var e, t = cp, n = t.length, r, o = "value" in Wr ? Wr.value : Wr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return ma = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ga(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ol() {
  return !0;
}
function tm() {
  return !1;
}
function bn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ol : tm, this.isPropagationStopped = tm, this;
  }
  return pt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ol);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ol);
  }, persist: function() {
  }, isPersistent: Ol }), t;
}
var Fi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, dp = bn(Fi), dl = pt({}, Fi, { view: 0, detail: 0 }), cS = bn(dl), Wc, Uc, qi, xu = pt({}, dl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fp, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== qi && (qi && e.type === "mousemove" ? (Wc = e.screenX - qi.screenX, Uc = e.screenY - qi.screenY) : Uc = Wc = 0, qi = e), Wc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Uc;
} }), nm = bn(xu), dS = pt({}, xu, { dataTransfer: 0 }), fS = bn(dS), pS = pt({}, dl, { relatedTarget: 0 }), Vc = bn(pS), hS = pt({}, Fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mS = bn(hS), gS = pt({}, Fi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), yS = bn(gS), vS = pt({}, Fi, { data: 0 }), rm = bn(vS), xS = {
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
}, bS = {
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
}, SS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function wS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = SS[e]) ? !!t[e] : !1;
}
function fp() {
  return wS;
}
var CS = pt({}, dl, { key: function(e) {
  if (e.key) {
    var t = xS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ga(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fp, charCode: function(e) {
  return e.type === "keypress" ? ga(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ga(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), kS = bn(CS), ES = pt({}, xu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), om = bn(ES), TS = pt({}, dl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fp }), RS = bn(TS), PS = pt({}, Fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), IS = bn(PS), MS = pt({}, xu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $S = bn(MS), jS = [9, 13, 27, 32], pp = Ir && "CompositionEvent" in window, bs = null;
Ir && "documentMode" in document && (bs = document.documentMode);
var AS = Ir && "TextEvent" in window && !bs, P0 = Ir && (!pp || bs && 8 < bs && 11 >= bs), im = " ", sm = !1;
function I0(e, t) {
  switch (e) {
    case "keyup":
      return jS.indexOf(t.keyCode) !== -1;
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
function M0(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var ti = !1;
function NS(e, t) {
  switch (e) {
    case "compositionend":
      return M0(t);
    case "keypress":
      return t.which !== 32 ? null : (sm = !0, im);
    case "textInput":
      return e = t.data, e === im && sm ? null : e;
    default:
      return null;
  }
}
function OS(e, t) {
  if (ti) return e === "compositionend" || !pp && I0(e, t) ? (e = R0(), ma = cp = Wr = null, ti = !1, e) : null;
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
      return P0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var BS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function lm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!BS[e.type] : t === "textarea";
}
function $0(e, t, n, r) {
  a0(r), t = _a(t, "onChange"), 0 < t.length && (n = new dp("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ss = null, Ds = null;
function LS(e) {
  W0(e, 0);
}
function bu(e) {
  var t = oi(e);
  if (t0(t)) return e;
}
function zS(e, t) {
  if (e === "change") return t;
}
var j0 = !1;
if (Ir) {
  var Hc;
  if (Ir) {
    var Kc = "oninput" in document;
    if (!Kc) {
      var am = document.createElement("div");
      am.setAttribute("oninput", "return;"), Kc = typeof am.oninput == "function";
    }
    Hc = Kc;
  } else Hc = !1;
  j0 = Hc && (!document.documentMode || 9 < document.documentMode);
}
function um() {
  Ss && (Ss.detachEvent("onpropertychange", A0), Ds = Ss = null);
}
function A0(e) {
  if (e.propertyName === "value" && bu(Ds)) {
    var t = [];
    $0(t, Ds, e, ip(e)), f0(LS, t);
  }
}
function _S(e, t, n) {
  e === "focusin" ? (um(), Ss = t, Ds = n, Ss.attachEvent("onpropertychange", A0)) : e === "focusout" && um();
}
function FS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return bu(Ds);
}
function DS(e, t) {
  if (e === "click") return bu(t);
}
function WS(e, t) {
  if (e === "input" || e === "change") return bu(t);
}
function US(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Yn = typeof Object.is == "function" ? Object.is : US;
function Ws(e, t) {
  if (Yn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Rd.call(t, o) || !Yn(e[o], t[o])) return !1;
  }
  return !0;
}
function cm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function dm(e, t) {
  var n = cm(e);
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
    n = cm(n);
  }
}
function N0(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? N0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function O0() {
  for (var e = window, t = ja(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ja(e.document);
  }
  return t;
}
function hp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function VS(e) {
  var t = O0(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && N0(n.ownerDocument.documentElement, n)) {
    if (r !== null && hp(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = dm(n, i);
        var s = dm(
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
var HS = Ir && "documentMode" in document && 11 >= document.documentMode, ni = null, Kd = null, ws = null, Gd = !1;
function fm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gd || ni == null || ni !== ja(r) || (r = ni, "selectionStart" in r && hp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ws && Ws(ws, r) || (ws = r, r = _a(Kd, "onSelect"), 0 < r.length && (t = new dp("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ni)));
}
function Bl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ri = { animationend: Bl("Animation", "AnimationEnd"), animationiteration: Bl("Animation", "AnimationIteration"), animationstart: Bl("Animation", "AnimationStart"), transitionend: Bl("Transition", "TransitionEnd") }, Gc = {}, B0 = {};
Ir && (B0 = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
function Su(e) {
  if (Gc[e]) return Gc[e];
  if (!ri[e]) return e;
  var t = ri[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in B0) return Gc[e] = t[n];
  return e;
}
var L0 = Su("animationend"), z0 = Su("animationiteration"), _0 = Su("animationstart"), F0 = Su("transitionend"), D0 = /* @__PURE__ */ new Map(), pm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function oo(e, t) {
  D0.set(e, t), Bo(t, [e]);
}
for (var Yc = 0; Yc < pm.length; Yc++) {
  var Qc = pm[Yc], KS = Qc.toLowerCase(), GS = Qc[0].toUpperCase() + Qc.slice(1);
  oo(KS, "on" + GS);
}
oo(L0, "onAnimationEnd");
oo(z0, "onAnimationIteration");
oo(_0, "onAnimationStart");
oo("dblclick", "onDoubleClick");
oo("focusin", "onFocus");
oo("focusout", "onBlur");
oo(F0, "onTransitionEnd");
bi("onMouseEnter", ["mouseout", "mouseover"]);
bi("onMouseLeave", ["mouseout", "mouseover"]);
bi("onPointerEnter", ["pointerout", "pointerover"]);
bi("onPointerLeave", ["pointerout", "pointerover"]);
Bo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), YS = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
function hm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Kb(r, t, void 0, e), e.currentTarget = null;
}
function W0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        hm(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        hm(o, l, u), i = a;
      }
    }
  }
  if (Na) throw e = Wd, Na = !1, Wd = null, e;
}
function ot(e, t) {
  var n = t[Jd];
  n === void 0 && (n = t[Jd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (U0(t, e, 2, !1), n.add(r));
}
function Xc(e, t, n) {
  var r = 0;
  t && (r |= 4), U0(n, e, r, t);
}
var Ll = "_reactListening" + Math.random().toString(36).slice(2);
function Us(e) {
  if (!e[Ll]) {
    e[Ll] = !0, Xy.forEach(function(n) {
      n !== "selectionchange" && (YS.has(n) || Xc(n, !1, e), Xc(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ll] || (t[Ll] = !0, Xc("selectionchange", !1, t));
  }
}
function U0(e, t, n, r) {
  switch (T0(t)) {
    case 1:
      var o = aS;
      break;
    case 4:
      o = uS;
      break;
    default:
      o = up;
  }
  n = o.bind(null, t, n, e), o = void 0, !Dd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function qc(e, t, n, r, o) {
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
        if (s = xo(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  f0(function() {
    var u = i, d = ip(n), h = [];
    e: {
      var g = D0.get(e);
      if (g !== void 0) {
        var f = dp, v = e;
        switch (e) {
          case "keypress":
            if (ga(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = kS;
            break;
          case "focusin":
            v = "focus", f = Vc;
            break;
          case "focusout":
            v = "blur", f = Vc;
            break;
          case "beforeblur":
          case "afterblur":
            f = Vc;
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
            f = nm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = fS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = RS;
            break;
          case L0:
          case z0:
          case _0:
            f = mS;
            break;
          case F0:
            f = IS;
            break;
          case "scroll":
            f = cS;
            break;
          case "wheel":
            f = $S;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = yS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = om;
        }
        var w = (t & 4) !== 0, C = !w && e === "scroll", m = w ? g !== null ? g + "Capture" : null : g;
        w = [];
        for (var p = u, x; p !== null; ) {
          x = p;
          var S = x.stateNode;
          if (x.tag === 5 && S !== null && (x = S, m !== null && (S = Ls(p, m), S != null && w.push(Vs(p, S, x)))), C) break;
          p = p.return;
        }
        0 < w.length && (g = new f(g, v, null, n, d), h.push({ event: g, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", g && n !== _d && (v = n.relatedTarget || n.fromElement) && (xo(v) || v[Mr])) break e;
        if ((f || g) && (g = d.window === d ? d : (g = d.ownerDocument) ? g.defaultView || g.parentWindow : window, f ? (v = n.relatedTarget || n.toElement, f = u, v = v ? xo(v) : null, v !== null && (C = Lo(v), v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (f = null, v = u), f !== v)) {
          if (w = nm, S = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = om, S = "onPointerLeave", m = "onPointerEnter", p = "pointer"), C = f == null ? g : oi(f), x = v == null ? g : oi(v), g = new w(S, p + "leave", f, n, d), g.target = C, g.relatedTarget = x, S = null, xo(d) === u && (w = new w(m, p + "enter", v, n, d), w.target = x, w.relatedTarget = C, S = w), C = S, f && v) t: {
            for (w = f, m = v, p = 0, x = w; x; x = Vo(x)) p++;
            for (x = 0, S = m; S; S = Vo(S)) x++;
            for (; 0 < p - x; ) w = Vo(w), p--;
            for (; 0 < x - p; ) m = Vo(m), x--;
            for (; p--; ) {
              if (w === m || m !== null && w === m.alternate) break t;
              w = Vo(w), m = Vo(m);
            }
            w = null;
          }
          else w = null;
          f !== null && mm(h, g, f, w, !1), v !== null && C !== null && mm(h, C, v, w, !0);
        }
      }
      e: {
        if (g = u ? oi(u) : window, f = g.nodeName && g.nodeName.toLowerCase(), f === "select" || f === "input" && g.type === "file") var E = zS;
        else if (lm(g)) if (j0) E = WS;
        else {
          E = FS;
          var k = _S;
        }
        else (f = g.nodeName) && f.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (E = DS);
        if (E && (E = E(e, u))) {
          $0(h, E, n, d);
          break e;
        }
        k && k(e, g, u), e === "focusout" && (k = g._wrapperState) && k.controlled && g.type === "number" && Nd(g, "number", g.value);
      }
      switch (k = u ? oi(u) : window, e) {
        case "focusin":
          (lm(k) || k.contentEditable === "true") && (ni = k, Kd = u, ws = null);
          break;
        case "focusout":
          ws = Kd = ni = null;
          break;
        case "mousedown":
          Gd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gd = !1, fm(h, n, d);
          break;
        case "selectionchange":
          if (HS) break;
        case "keydown":
        case "keyup":
          fm(h, n, d);
      }
      var T;
      if (pp) e: {
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
      else ti ? I0(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (P0 && n.locale !== "ko" && (ti || R !== "onCompositionStart" ? R === "onCompositionEnd" && ti && (T = R0()) : (Wr = d, cp = "value" in Wr ? Wr.value : Wr.textContent, ti = !0)), k = _a(u, R), 0 < k.length && (R = new rm(R, e, null, n, d), h.push({ event: R, listeners: k }), T ? R.data = T : (T = M0(n), T !== null && (R.data = T)))), (T = AS ? NS(e, n) : OS(e, n)) && (u = _a(u, "onBeforeInput"), 0 < u.length && (d = new rm("onBeforeInput", "beforeinput", null, n, d), h.push({ event: d, listeners: u }), d.data = T));
    }
    W0(h, t);
  });
}
function Vs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _a(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ls(e, n), i != null && r.unshift(Vs(e, i, o)), i = Ls(e, t), i != null && r.push(Vs(e, i, o))), e = e.return;
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
function mm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = Ls(n, i), a != null && s.unshift(Vs(n, a, l))) : o || (a = Ls(n, i), a != null && s.push(Vs(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var QS = /\r\n?/g, XS = /\u0000|\uFFFD/g;
function gm(e) {
  return (typeof e == "string" ? e : "" + e).replace(QS, `
`).replace(XS, "");
}
function zl(e, t, n) {
  if (t = gm(t), gm(e) !== t && n) throw Error(V(425));
}
function Fa() {
}
var Yd = null, Qd = null;
function Xd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qd = typeof setTimeout == "function" ? setTimeout : void 0, qS = typeof clearTimeout == "function" ? clearTimeout : void 0, ym = typeof Promise == "function" ? Promise : void 0, JS = typeof queueMicrotask == "function" ? queueMicrotask : typeof ym < "u" ? function(e) {
  return ym.resolve(null).then(e).catch(ZS);
} : qd;
function ZS(e) {
  setTimeout(function() {
    throw e;
  });
}
function Jc(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Fs(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Fs(t);
}
function Yr(e) {
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
function vm(e) {
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
var Di = Math.random().toString(36).slice(2), ir = "__reactFiber$" + Di, Hs = "__reactProps$" + Di, Mr = "__reactContainer$" + Di, Jd = "__reactEvents$" + Di, ew = "__reactListeners$" + Di, tw = "__reactHandles$" + Di;
function xo(e) {
  var t = e[ir];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Mr] || n[ir]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = vm(e); e !== null; ) {
        if (n = e[ir]) return n;
        e = vm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function fl(e) {
  return e = e[ir] || e[Mr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function oi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function wu(e) {
  return e[Hs] || null;
}
var Zd = [], ii = -1;
function io(e) {
  return { current: e };
}
function it(e) {
  0 > ii || (e.current = Zd[ii], Zd[ii] = null, ii--);
}
function nt(e, t) {
  ii++, Zd[ii] = e.current, e.current = t;
}
var to = {}, Gt = io(to), on = io(!1), Ro = to;
function Si(e, t) {
  var n = e.type.contextTypes;
  if (!n) return to;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function sn(e) {
  return e = e.childContextTypes, e != null;
}
function Da() {
  it(on), it(Gt);
}
function xm(e, t, n) {
  if (Gt.current !== to) throw Error(V(168));
  nt(Gt, t), nt(on, n);
}
function V0(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(V(108, _b(e) || "Unknown", o));
  return pt({}, n, r);
}
function Wa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || to, Ro = Gt.current, nt(Gt, e), nt(on, on.current), !0;
}
function bm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = V0(e, t, Ro), r.__reactInternalMemoizedMergedChildContext = e, it(on), it(Gt), nt(Gt, e)) : it(on), nt(on, n);
}
var Cr = null, Cu = !1, Zc = !1;
function H0(e) {
  Cr === null ? Cr = [e] : Cr.push(e);
}
function nw(e) {
  Cu = !0, H0(e);
}
function so() {
  if (!Zc && Cr !== null) {
    Zc = !0;
    var e = 0, t = Xe;
    try {
      var n = Cr;
      for (Xe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Cr = null, Cu = !1;
    } catch (o) {
      throw Cr !== null && (Cr = Cr.slice(e + 1)), g0(sp, so), o;
    } finally {
      Xe = t, Zc = !1;
    }
  }
  return null;
}
var si = [], li = 0, Ua = null, Va = 0, En = [], Tn = 0, Po = null, Tr = 1, Rr = "";
function go(e, t) {
  si[li++] = Va, si[li++] = Ua, Ua = e, Va = t;
}
function K0(e, t, n) {
  En[Tn++] = Tr, En[Tn++] = Rr, En[Tn++] = Po, Po = e;
  var r = Tr;
  e = Rr;
  var o = 32 - Kn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Kn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Tr = 1 << 32 - Kn(t) + o | n << o | r, Rr = i + e;
  } else Tr = 1 << i | n << o | r, Rr = e;
}
function mp(e) {
  e.return !== null && (go(e, 1), K0(e, 1, 0));
}
function gp(e) {
  for (; e === Ua; ) Ua = si[--li], si[li] = null, Va = si[--li], si[li] = null;
  for (; e === Po; ) Po = En[--Tn], En[Tn] = null, Rr = En[--Tn], En[Tn] = null, Tr = En[--Tn], En[Tn] = null;
}
var mn = null, hn = null, lt = !1, Hn = null;
function G0(e, t) {
  var n = In(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Sm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, mn = e, hn = Yr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, mn = e, hn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Po !== null ? { id: Tr, overflow: Rr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = In(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, mn = e, hn = null, !0) : !1;
    default:
      return !1;
  }
}
function ef(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tf(e) {
  if (lt) {
    var t = hn;
    if (t) {
      var n = t;
      if (!Sm(e, t)) {
        if (ef(e)) throw Error(V(418));
        t = Yr(n.nextSibling);
        var r = mn;
        t && Sm(e, t) ? G0(r, n) : (e.flags = e.flags & -4097 | 2, lt = !1, mn = e);
      }
    } else {
      if (ef(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, lt = !1, mn = e;
    }
  }
}
function wm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  mn = e;
}
function _l(e) {
  if (e !== mn) return !1;
  if (!lt) return wm(e), lt = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xd(e.type, e.memoizedProps)), t && (t = hn)) {
    if (ef(e)) throw Y0(), Error(V(418));
    for (; t; ) G0(e, t), t = Yr(t.nextSibling);
  }
  if (wm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              hn = Yr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      hn = null;
    }
  } else hn = mn ? Yr(e.stateNode.nextSibling) : null;
  return !0;
}
function Y0() {
  for (var e = hn; e; ) e = Yr(e.nextSibling);
}
function wi() {
  hn = mn = null, lt = !1;
}
function yp(e) {
  Hn === null ? Hn = [e] : Hn.push(e);
}
var rw = Br.ReactCurrentBatchConfig;
function Ji(e, t, n) {
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
function Fl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Cm(e) {
  var t = e._init;
  return t(e._payload);
}
function Q0(e) {
  function t(m, p) {
    if (e) {
      var x = m.deletions;
      x === null ? (m.deletions = [p], m.flags |= 16) : x.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), p = p.sibling;
    return null;
  }
  function r(m, p) {
    for (m = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
    return m;
  }
  function o(m, p) {
    return m = Jr(m, p), m.index = 0, m.sibling = null, m;
  }
  function i(m, p, x) {
    return m.index = x, e ? (x = m.alternate, x !== null ? (x = x.index, x < p ? (m.flags |= 2, p) : x) : (m.flags |= 2, p)) : (m.flags |= 1048576, p);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, x, S) {
    return p === null || p.tag !== 6 ? (p = sd(x, m.mode, S), p.return = m, p) : (p = o(p, x), p.return = m, p);
  }
  function a(m, p, x, S) {
    var E = x.type;
    return E === ei ? d(m, p, x.props.children, S, x.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === zr && Cm(E) === p.type) ? (S = o(p, x.props), S.ref = Ji(m, p, x), S.return = m, S) : (S = Ca(x.type, x.key, x.props, null, m.mode, S), S.ref = Ji(m, p, x), S.return = m, S);
  }
  function u(m, p, x, S) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== x.containerInfo || p.stateNode.implementation !== x.implementation ? (p = ld(x, m.mode, S), p.return = m, p) : (p = o(p, x.children || []), p.return = m, p);
  }
  function d(m, p, x, S, E) {
    return p === null || p.tag !== 7 ? (p = ko(x, m.mode, S, E), p.return = m, p) : (p = o(p, x), p.return = m, p);
  }
  function h(m, p, x) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = sd("" + p, m.mode, x), p.return = m, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Il:
          return x = Ca(p.type, p.key, p.props, null, m.mode, x), x.ref = Ji(m, null, p), x.return = m, x;
        case Zo:
          return p = ld(p, m.mode, x), p.return = m, p;
        case zr:
          var S = p._init;
          return h(m, S(p._payload), x);
      }
      if (ps(p) || Gi(p)) return p = ko(p, m.mode, x, null), p.return = m, p;
      Fl(m, p);
    }
    return null;
  }
  function g(m, p, x, S) {
    var E = p !== null ? p.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number") return E !== null ? null : l(m, p, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Il:
          return x.key === E ? a(m, p, x, S) : null;
        case Zo:
          return x.key === E ? u(m, p, x, S) : null;
        case zr:
          return E = x._init, g(
            m,
            p,
            E(x._payload),
            S
          );
      }
      if (ps(x) || Gi(x)) return E !== null ? null : d(m, p, x, S, null);
      Fl(m, x);
    }
    return null;
  }
  function f(m, p, x, S, E) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return m = m.get(x) || null, l(p, m, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Il:
          return m = m.get(S.key === null ? x : S.key) || null, a(p, m, S, E);
        case Zo:
          return m = m.get(S.key === null ? x : S.key) || null, u(p, m, S, E);
        case zr:
          var k = S._init;
          return f(m, p, x, k(S._payload), E);
      }
      if (ps(S) || Gi(S)) return m = m.get(x) || null, d(p, m, S, E, null);
      Fl(p, S);
    }
    return null;
  }
  function v(m, p, x, S) {
    for (var E = null, k = null, T = p, R = p = 0, I = null; T !== null && R < x.length; R++) {
      T.index > R ? (I = T, T = null) : I = T.sibling;
      var A = g(m, T, x[R], S);
      if (A === null) {
        T === null && (T = I);
        break;
      }
      e && T && A.alternate === null && t(m, T), p = i(A, p, R), k === null ? E = A : k.sibling = A, k = A, T = I;
    }
    if (R === x.length) return n(m, T), lt && go(m, R), E;
    if (T === null) {
      for (; R < x.length; R++) T = h(m, x[R], S), T !== null && (p = i(T, p, R), k === null ? E = T : k.sibling = T, k = T);
      return lt && go(m, R), E;
    }
    for (T = r(m, T); R < x.length; R++) I = f(T, m, R, x[R], S), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? R : I.key), p = i(I, p, R), k === null ? E = I : k.sibling = I, k = I);
    return e && T.forEach(function(M) {
      return t(m, M);
    }), lt && go(m, R), E;
  }
  function w(m, p, x, S) {
    var E = Gi(x);
    if (typeof E != "function") throw Error(V(150));
    if (x = E.call(x), x == null) throw Error(V(151));
    for (var k = E = null, T = p, R = p = 0, I = null, A = x.next(); T !== null && !A.done; R++, A = x.next()) {
      T.index > R ? (I = T, T = null) : I = T.sibling;
      var M = g(m, T, A.value, S);
      if (M === null) {
        T === null && (T = I);
        break;
      }
      e && T && M.alternate === null && t(m, T), p = i(M, p, R), k === null ? E = M : k.sibling = M, k = M, T = I;
    }
    if (A.done) return n(
      m,
      T
    ), lt && go(m, R), E;
    if (T === null) {
      for (; !A.done; R++, A = x.next()) A = h(m, A.value, S), A !== null && (p = i(A, p, R), k === null ? E = A : k.sibling = A, k = A);
      return lt && go(m, R), E;
    }
    for (T = r(m, T); !A.done; R++, A = x.next()) A = f(T, m, R, A.value, S), A !== null && (e && A.alternate !== null && T.delete(A.key === null ? R : A.key), p = i(A, p, R), k === null ? E = A : k.sibling = A, k = A);
    return e && T.forEach(function(N) {
      return t(m, N);
    }), lt && go(m, R), E;
  }
  function C(m, p, x, S) {
    if (typeof x == "object" && x !== null && x.type === ei && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Il:
          e: {
            for (var E = x.key, k = p; k !== null; ) {
              if (k.key === E) {
                if (E = x.type, E === ei) {
                  if (k.tag === 7) {
                    n(m, k.sibling), p = o(k, x.props.children), p.return = m, m = p;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === zr && Cm(E) === k.type) {
                  n(m, k.sibling), p = o(k, x.props), p.ref = Ji(m, k, x), p.return = m, m = p;
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            x.type === ei ? (p = ko(x.props.children, m.mode, S, x.key), p.return = m, m = p) : (S = Ca(x.type, x.key, x.props, null, m.mode, S), S.ref = Ji(m, p, x), S.return = m, m = S);
          }
          return s(m);
        case Zo:
          e: {
            for (k = x.key; p !== null; ) {
              if (p.key === k) if (p.tag === 4 && p.stateNode.containerInfo === x.containerInfo && p.stateNode.implementation === x.implementation) {
                n(m, p.sibling), p = o(p, x.children || []), p.return = m, m = p;
                break e;
              } else {
                n(m, p);
                break;
              }
              else t(m, p);
              p = p.sibling;
            }
            p = ld(x, m.mode, S), p.return = m, m = p;
          }
          return s(m);
        case zr:
          return k = x._init, C(m, p, k(x._payload), S);
      }
      if (ps(x)) return v(m, p, x, S);
      if (Gi(x)) return w(m, p, x, S);
      Fl(m, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, p !== null && p.tag === 6 ? (n(m, p.sibling), p = o(p, x), p.return = m, m = p) : (n(m, p), p = sd(x, m.mode, S), p.return = m, m = p), s(m)) : n(m, p);
  }
  return C;
}
var Ci = Q0(!0), X0 = Q0(!1), Ha = io(null), Ka = null, ai = null, vp = null;
function xp() {
  vp = ai = Ka = null;
}
function bp(e) {
  var t = Ha.current;
  it(Ha), e._currentValue = t;
}
function nf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function mi(e, t) {
  Ka = e, vp = ai = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (rn = !0), e.firstContext = null);
}
function jn(e) {
  var t = e._currentValue;
  if (vp !== e) if (e = { context: e, memoizedValue: t, next: null }, ai === null) {
    if (Ka === null) throw Error(V(308));
    ai = e, Ka.dependencies = { lanes: 0, firstContext: e };
  } else ai = ai.next = e;
  return t;
}
var bo = null;
function Sp(e) {
  bo === null ? bo = [e] : bo.push(e);
}
function q0(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Sp(t)) : (n.next = o.next, o.next = n), t.interleaved = n, $r(e, r);
}
function $r(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var _r = !1;
function wp(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function J0(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Pr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Le & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, $r(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Sp(r)) : (t.next = o.next, o.next = t), r.interleaved = t, $r(e, n);
}
function ya(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, lp(e, n);
  }
}
function km(e, t) {
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
function Ga(e, t, n, r) {
  var o = e.updateQueue;
  _r = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var h = o.baseState;
    s = 0, d = u = a = null, l = i;
    do {
      var g = l.lane, f = l.eventTime;
      if ((r & g) === g) {
        d !== null && (d = d.next = {
          eventTime: f,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var v = e, w = l;
          switch (g = t, f = n, w.tag) {
            case 1:
              if (v = w.payload, typeof v == "function") {
                h = v.call(f, h, g);
                break e;
              }
              h = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = w.payload, g = typeof v == "function" ? v.call(f, h, g) : v, g == null) break e;
              h = pt({}, h, g);
              break e;
            case 2:
              _r = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, g = o.effects, g === null ? o.effects = [l] : g.push(l));
      } else f = { eventTime: f, lane: g, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (u = d = f, a = h) : d = d.next = f, s |= g;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        g = l, l = g.next, g.next = null, o.lastBaseUpdate = g, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = h), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Mo |= s, e.lanes = s, e.memoizedState = h;
  }
}
function Em(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(V(191, o));
      o.call(r);
    }
  }
}
var pl = {}, ur = io(pl), Ks = io(pl), Gs = io(pl);
function So(e) {
  if (e === pl) throw Error(V(174));
  return e;
}
function Cp(e, t) {
  switch (nt(Gs, t), nt(Ks, e), nt(ur, pl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bd(t, e);
  }
  it(ur), nt(ur, t);
}
function ki() {
  it(ur), it(Ks), it(Gs);
}
function Z0(e) {
  So(Gs.current);
  var t = So(ur.current), n = Bd(t, e.type);
  t !== n && (nt(Ks, e), nt(ur, n));
}
function kp(e) {
  Ks.current === e && (it(ur), it(Ks));
}
var ct = io(0);
function Ya(e) {
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
var ed = [];
function Ep() {
  for (var e = 0; e < ed.length; e++) ed[e]._workInProgressVersionPrimary = null;
  ed.length = 0;
}
var va = Br.ReactCurrentDispatcher, td = Br.ReactCurrentBatchConfig, Io = 0, dt = null, Pt = null, Mt = null, Qa = !1, Cs = !1, Ys = 0, ow = 0;
function Ut() {
  throw Error(V(321));
}
function Tp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Yn(e[n], t[n])) return !1;
  return !0;
}
function Rp(e, t, n, r, o, i) {
  if (Io = i, dt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, va.current = e === null || e.memoizedState === null ? aw : uw, e = n(r, o), Cs) {
    i = 0;
    do {
      if (Cs = !1, Ys = 0, 25 <= i) throw Error(V(301));
      i += 1, Mt = Pt = null, t.updateQueue = null, va.current = cw, e = n(r, o);
    } while (Cs);
  }
  if (va.current = Xa, t = Pt !== null && Pt.next !== null, Io = 0, Mt = Pt = dt = null, Qa = !1, t) throw Error(V(300));
  return e;
}
function Pp() {
  var e = Ys !== 0;
  return Ys = 0, e;
}
function nr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Mt === null ? dt.memoizedState = Mt = e : Mt = Mt.next = e, Mt;
}
function An() {
  if (Pt === null) {
    var e = dt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pt.next;
  var t = Mt === null ? dt.memoizedState : Mt.next;
  if (t !== null) Mt = t, Pt = e;
  else {
    if (e === null) throw Error(V(310));
    Pt = e, e = { memoizedState: Pt.memoizedState, baseState: Pt.baseState, baseQueue: Pt.baseQueue, queue: Pt.queue, next: null }, Mt === null ? dt.memoizedState = Mt = e : Mt = Mt.next = e;
  }
  return Mt;
}
function Qs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function nd(e) {
  var t = An(), n = t.queue;
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
    var l = s = null, a = null, u = i;
    do {
      var d = u.lane;
      if ((Io & d) === d) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var h = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = h, s = r) : a = a.next = h, dt.lanes |= d, Mo |= d;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, Yn(r, t.memoizedState) || (rn = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, dt.lanes |= i, Mo |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function rd(e) {
  var t = An(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Yn(i, t.memoizedState) || (rn = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ev() {
}
function tv(e, t) {
  var n = dt, r = An(), o = t(), i = !Yn(r.memoizedState, o);
  if (i && (r.memoizedState = o, rn = !0), r = r.queue, Ip(ov.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Mt !== null && Mt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Xs(9, rv.bind(null, n, r, o, t), void 0, null), $t === null) throw Error(V(349));
    Io & 30 || nv(n, t, o);
  }
  return o;
}
function nv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = dt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, dt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function rv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, iv(t) && sv(e);
}
function ov(e, t, n) {
  return n(function() {
    iv(t) && sv(e);
  });
}
function iv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Yn(e, n);
  } catch {
    return !0;
  }
}
function sv(e) {
  var t = $r(e, 1);
  t !== null && Gn(t, e, 1, -1);
}
function Tm(e) {
  var t = nr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qs, lastRenderedState: e }, t.queue = e, e = e.dispatch = lw.bind(null, dt, e), [t.memoizedState, e];
}
function Xs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = dt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, dt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function lv() {
  return An().memoizedState;
}
function xa(e, t, n, r) {
  var o = nr();
  dt.flags |= e, o.memoizedState = Xs(1 | t, n, void 0, r === void 0 ? null : r);
}
function ku(e, t, n, r) {
  var o = An();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Pt !== null) {
    var s = Pt.memoizedState;
    if (i = s.destroy, r !== null && Tp(r, s.deps)) {
      o.memoizedState = Xs(t, n, i, r);
      return;
    }
  }
  dt.flags |= e, o.memoizedState = Xs(1 | t, n, i, r);
}
function Rm(e, t) {
  return xa(8390656, 8, e, t);
}
function Ip(e, t) {
  return ku(2048, 8, e, t);
}
function av(e, t) {
  return ku(4, 2, e, t);
}
function uv(e, t) {
  return ku(4, 4, e, t);
}
function cv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function dv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ku(4, 4, cv.bind(null, t, e), n);
}
function Mp() {
}
function fv(e, t) {
  var n = An();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Tp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function pv(e, t) {
  var n = An();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Tp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function hv(e, t, n) {
  return Io & 21 ? (Yn(n, t) || (n = x0(), dt.lanes |= n, Mo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, rn = !0), e.memoizedState = n);
}
function iw(e, t) {
  var n = Xe;
  Xe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = td.transition;
  td.transition = {};
  try {
    e(!1), t();
  } finally {
    Xe = n, td.transition = r;
  }
}
function mv() {
  return An().memoizedState;
}
function sw(e, t, n) {
  var r = qr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, gv(e)) yv(t, n);
  else if (n = q0(e, t, n, r), n !== null) {
    var o = Jt();
    Gn(n, e, r, o), vv(n, t, r);
  }
}
function lw(e, t, n) {
  var r = qr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gv(e)) yv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Yn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Sp(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = q0(e, t, o, r), n !== null && (o = Jt(), Gn(n, e, r, o), vv(n, t, r));
  }
}
function gv(e) {
  var t = e.alternate;
  return e === dt || t !== null && t === dt;
}
function yv(e, t) {
  Cs = Qa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function vv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, lp(e, n);
  }
}
var Xa = { readContext: jn, useCallback: Ut, useContext: Ut, useEffect: Ut, useImperativeHandle: Ut, useInsertionEffect: Ut, useLayoutEffect: Ut, useMemo: Ut, useReducer: Ut, useRef: Ut, useState: Ut, useDebugValue: Ut, useDeferredValue: Ut, useTransition: Ut, useMutableSource: Ut, useSyncExternalStore: Ut, useId: Ut, unstable_isNewReconciler: !1 }, aw = { readContext: jn, useCallback: function(e, t) {
  return nr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: jn, useEffect: Rm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xa(
    4194308,
    4,
    cv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return xa(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return xa(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = nr();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = nr();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = sw.bind(null, dt, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nr();
  return e = { current: e }, t.memoizedState = e;
}, useState: Tm, useDebugValue: Mp, useDeferredValue: function(e) {
  return nr().memoizedState = e;
}, useTransition: function() {
  var e = Tm(!1), t = e[0];
  return e = iw.bind(null, e[1]), nr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = dt, o = nr();
  if (lt) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), $t === null) throw Error(V(349));
    Io & 30 || nv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Rm(ov.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Xs(9, rv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = nr(), t = $t.identifierPrefix;
  if (lt) {
    var n = Rr, r = Tr;
    n = (r & ~(1 << 32 - Kn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ys++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = ow++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, uw = {
  readContext: jn,
  useCallback: fv,
  useContext: jn,
  useEffect: Ip,
  useImperativeHandle: dv,
  useInsertionEffect: av,
  useLayoutEffect: uv,
  useMemo: pv,
  useReducer: nd,
  useRef: lv,
  useState: function() {
    return nd(Qs);
  },
  useDebugValue: Mp,
  useDeferredValue: function(e) {
    var t = An();
    return hv(t, Pt.memoizedState, e);
  },
  useTransition: function() {
    var e = nd(Qs)[0], t = An().memoizedState;
    return [e, t];
  },
  useMutableSource: ev,
  useSyncExternalStore: tv,
  useId: mv,
  unstable_isNewReconciler: !1
}, cw = { readContext: jn, useCallback: fv, useContext: jn, useEffect: Ip, useImperativeHandle: dv, useInsertionEffect: av, useLayoutEffect: uv, useMemo: pv, useReducer: rd, useRef: lv, useState: function() {
  return rd(Qs);
}, useDebugValue: Mp, useDeferredValue: function(e) {
  var t = An();
  return Pt === null ? t.memoizedState = e : hv(t, Pt.memoizedState, e);
}, useTransition: function() {
  var e = rd(Qs)[0], t = An().memoizedState;
  return [e, t];
}, useMutableSource: ev, useSyncExternalStore: tv, useId: mv, unstable_isNewReconciler: !1 };
function Un(e, t) {
  if (e && e.defaultProps) {
    t = pt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function rf(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : pt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Eu = { isMounted: function(e) {
  return (e = e._reactInternals) ? Lo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Jt(), o = qr(e), i = Pr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Qr(e, i, o), t !== null && (Gn(t, e, o, r), ya(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Jt(), o = qr(e), i = Pr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qr(e, i, o), t !== null && (Gn(t, e, o, r), ya(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Jt(), r = qr(e), o = Pr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Qr(e, o, r), t !== null && (Gn(t, e, r, n), ya(t, e, r));
} };
function Pm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ws(n, r) || !Ws(o, i) : !0;
}
function xv(e, t, n) {
  var r = !1, o = to, i = t.contextType;
  return typeof i == "object" && i !== null ? i = jn(i) : (o = sn(t) ? Ro : Gt.current, r = t.contextTypes, i = (r = r != null) ? Si(e, o) : to), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Eu, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Im(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Eu.enqueueReplaceState(t, t.state, null);
}
function of(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, wp(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = jn(i) : (i = sn(t) ? Ro : Gt.current, o.context = Si(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (rf(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Eu.enqueueReplaceState(o, o.state, null), Ga(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ei(e, t) {
  try {
    var n = "", r = t;
    do
      n += zb(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function od(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function sf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var dw = typeof WeakMap == "function" ? WeakMap : Map;
function bv(e, t, n) {
  n = Pr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ja || (Ja = !0, gf = r), sf(e, t);
  }, n;
}
function Sv(e, t, n) {
  n = Pr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      sf(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    sf(e, t), typeof r != "function" && (Xr === null ? Xr = /* @__PURE__ */ new Set([this]) : Xr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Mm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dw();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Ew.bind(null, e, t, n), t.then(e, e));
}
function $m(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function jm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pr(-1, 1), t.tag = 2, Qr(n, t, 1))), n.lanes |= 1), e);
}
var fw = Br.ReactCurrentOwner, rn = !1;
function Xt(e, t, n, r) {
  t.child = e === null ? X0(t, null, n, r) : Ci(t, e.child, n, r);
}
function Am(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return mi(t, o), r = Rp(e, t, n, r, i, o), n = Pp(), e !== null && !rn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jr(e, t, o)) : (lt && n && mp(t), t.flags |= 1, Xt(e, t, r, o), t.child);
}
function Nm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !zp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, wv(e, t, i, r, o)) : (e = Ca(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ws, n(s, r) && e.ref === t.ref) return jr(e, t, o);
  }
  return t.flags |= 1, e = Jr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function wv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ws(i, r) && e.ref === t.ref) if (rn = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (rn = !0);
    else return t.lanes = e.lanes, jr(e, t, o);
  }
  return lf(e, t, n, r, o);
}
function Cv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nt(ci, dn), dn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, nt(ci, dn), dn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, nt(ci, dn), dn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, nt(ci, dn), dn |= r;
  return Xt(e, t, o, n), t.child;
}
function kv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function lf(e, t, n, r, o) {
  var i = sn(n) ? Ro : Gt.current;
  return i = Si(t, i), mi(t, o), n = Rp(e, t, n, r, i, o), r = Pp(), e !== null && !rn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jr(e, t, o)) : (lt && r && mp(t), t.flags |= 1, Xt(e, t, n, o), t.child);
}
function Om(e, t, n, r, o) {
  if (sn(n)) {
    var i = !0;
    Wa(t);
  } else i = !1;
  if (mi(t, o), t.stateNode === null) ba(e, t), xv(t, n, r), of(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = jn(u) : (u = sn(n) ? Ro : Gt.current, u = Si(t, u));
    var d = n.getDerivedStateFromProps, h = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Im(t, s, r, u), _r = !1;
    var g = t.memoizedState;
    s.state = g, Ga(t, r, s, o), a = t.memoizedState, l !== r || g !== a || on.current || _r ? (typeof d == "function" && (rf(t, n, d, r), a = t.memoizedState), (l = _r || Pm(t, n, l, r, g, a, u)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, J0(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Un(t.type, l), s.props = u, h = t.pendingProps, g = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = jn(a) : (a = sn(n) ? Ro : Gt.current, a = Si(t, a));
    var f = n.getDerivedStateFromProps;
    (d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== h || g !== a) && Im(t, s, r, a), _r = !1, g = t.memoizedState, s.state = g, Ga(t, r, s, o);
    var v = t.memoizedState;
    l !== h || g !== v || on.current || _r ? (typeof f == "function" && (rf(t, n, f, r), v = t.memoizedState), (u = _r || Pm(t, n, u, r, g, v, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return af(e, t, n, r, i, o);
}
function af(e, t, n, r, o, i) {
  kv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && bm(t, n, !1), jr(e, t, i);
  r = t.stateNode, fw.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Ci(t, e.child, null, i), t.child = Ci(t, null, l, i)) : Xt(e, t, l, i), t.memoizedState = r.state, o && bm(t, n, !0), t.child;
}
function Ev(e) {
  var t = e.stateNode;
  t.pendingContext ? xm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xm(e, t.context, !1), Cp(e, t.containerInfo);
}
function Bm(e, t, n, r, o) {
  return wi(), yp(o), t.flags |= 256, Xt(e, t, n, r), t.child;
}
var uf = { dehydrated: null, treeContext: null, retryLane: 0 };
function cf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Tv(e, t, n) {
  var r = t.pendingProps, o = ct.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), nt(ct, o & 1), e === null)
    return tf(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Pu(s, r, 0, null), e = ko(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = cf(n), t.memoizedState = uf, e) : $p(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return pw(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Jr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Jr(l, i) : (i = ko(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? cf(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = uf, r;
  }
  return i = e.child, e = i.sibling, r = Jr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function $p(e, t) {
  return t = Pu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Dl(e, t, n, r) {
  return r !== null && yp(r), Ci(t, e.child, null, n), e = $p(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function pw(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = od(Error(V(422))), Dl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Pu({ mode: "visible", children: r.children }, o, 0, null), i = ko(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ci(t, e.child, null, s), t.child.memoizedState = cf(s), t.memoizedState = uf, i);
  if (!(t.mode & 1)) return Dl(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(V(419)), r = od(i, r, void 0), Dl(e, t, s, r);
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, $r(e, o), Gn(r, e, o, -1));
    }
    return Lp(), r = od(Error(V(421))), Dl(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tw.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, hn = Yr(o.nextSibling), mn = t, lt = !0, Hn = null, e !== null && (En[Tn++] = Tr, En[Tn++] = Rr, En[Tn++] = Po, Tr = e.id, Rr = e.overflow, Po = t), t = $p(t, r.children), t.flags |= 4096, t);
}
function Lm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), nf(e.return, t, n);
}
function id(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Rv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Xt(e, t, r.children, n), r = ct.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Lm(e, n, t);
      else if (e.tag === 19) Lm(e, n, t);
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
  if (nt(ct, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ya(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), id(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ya(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      id(t, !0, n, null, i);
      break;
    case "together":
      id(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ba(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Mo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = Jr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Jr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function hw(e, t, n) {
  switch (t.tag) {
    case 3:
      Ev(t), wi();
      break;
    case 5:
      Z0(t);
      break;
    case 1:
      sn(t.type) && Wa(t);
      break;
    case 4:
      Cp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      nt(Ha, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (nt(ct, ct.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Tv(e, t, n) : (nt(ct, ct.current & 1), e = jr(e, t, n), e !== null ? e.sibling : null);
      nt(ct, ct.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Rv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), nt(ct, ct.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Cv(e, t, n);
  }
  return jr(e, t, n);
}
var Pv, df, Iv, Mv;
Pv = function(e, t) {
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
df = function() {
};
Iv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, So(ur.current);
    var i = null;
    switch (n) {
      case "input":
        o = jd(e, o), r = jd(e, r), i = [];
        break;
      case "select":
        o = pt({}, o, { value: void 0 }), r = pt({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Od(e, o), r = Od(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fa);
    }
    Ld(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Os.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Os.hasOwnProperty(u) ? (a != null && u === "onScroll" && ot("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Mv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zi(e, t) {
  if (!lt) switch (e.tailMode) {
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
function mw(e, t, n) {
  var r = t.pendingProps;
  switch (gp(t), t.tag) {
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
      return sn(t.type) && Da(), Vt(t), null;
    case 3:
      return r = t.stateNode, ki(), it(on), it(Gt), Ep(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_l(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Hn !== null && (xf(Hn), Hn = null))), df(e, t), Vt(t), null;
    case 5:
      kp(t);
      var o = So(Gs.current);
      if (n = t.type, e !== null && t.stateNode != null) Iv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return Vt(t), null;
        }
        if (e = So(ur.current), _l(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ir] = t, r[Hs] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ot("cancel", r), ot("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ot("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ms.length; o++) ot(ms[o], r);
              break;
            case "source":
              ot("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ot(
                "error",
                r
              ), ot("load", r);
              break;
            case "details":
              ot("toggle", r);
              break;
            case "input":
              Kh(r, i), ot("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ot("invalid", r);
              break;
            case "textarea":
              Yh(r, i), ot("invalid", r);
          }
          Ld(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && zl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && zl(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Os.hasOwnProperty(s) && l != null && s === "onScroll" && ot("scroll", r);
          }
          switch (n) {
            case "input":
              Ml(r), Gh(r, i, !0);
              break;
            case "textarea":
              Ml(r), Qh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Fa);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = o0(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[ir] = t, e[Hs] = r, Pv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = zd(n, r), n) {
              case "dialog":
                ot("cancel", e), ot("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ot("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ms.length; o++) ot(ms[o], e);
                o = r;
                break;
              case "source":
                ot("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ot(
                  "error",
                  e
                ), ot("load", e), o = r;
                break;
              case "details":
                ot("toggle", e), o = r;
                break;
              case "input":
                Kh(e, r), o = jd(e, r), ot("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = pt({}, r, { value: void 0 }), ot("invalid", e);
                break;
              case "textarea":
                Yh(e, r), o = Od(e, r), ot("invalid", e);
                break;
              default:
                o = r;
            }
            Ld(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? l0(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && i0(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Bs(e, a) : typeof a == "number" && Bs(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Os.hasOwnProperty(i) ? a != null && i === "onScroll" && ot("scroll", e) : a != null && tp(e, i, a, s));
            }
            switch (n) {
              case "input":
                Ml(e), Gh(e, r, !1);
                break;
              case "textarea":
                Ml(e), Qh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + eo(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? di(e, !!r.multiple, i, !1) : r.defaultValue != null && di(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Fa);
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
      if (e && t.stateNode != null) Mv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = So(Gs.current), So(ur.current), _l(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ir] = t, (i = r.nodeValue !== n) && (e = mn, e !== null)) switch (e.tag) {
            case 3:
              zl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && zl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ir] = t, t.stateNode = r;
      }
      return Vt(t), null;
    case 13:
      if (it(ct), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (lt && hn !== null && t.mode & 1 && !(t.flags & 128)) Y0(), wi(), t.flags |= 98560, i = !1;
        else if (i = _l(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(V(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(V(317));
            i[ir] = t;
          } else wi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Vt(t), i = !1;
        } else Hn !== null && (xf(Hn), Hn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ct.current & 1 ? It === 0 && (It = 3) : Lp())), t.updateQueue !== null && (t.flags |= 4), Vt(t), null);
    case 4:
      return ki(), df(e, t), e === null && Us(t.stateNode.containerInfo), Vt(t), null;
    case 10:
      return bp(t.type._context), Vt(t), null;
    case 17:
      return sn(t.type) && Da(), Vt(t), null;
    case 19:
      if (it(ct), i = t.memoizedState, i === null) return Vt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Zi(i, !1);
      else {
        if (It !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Ya(e), s !== null) {
            for (t.flags |= 128, Zi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return nt(ct, ct.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && bt() > Ti && (t.flags |= 128, r = !0, Zi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ya(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !lt) return Vt(t), null;
        } else 2 * bt() - i.renderingStartTime > Ti && n !== 1073741824 && (t.flags |= 128, r = !0, Zi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = bt(), t.sibling = null, n = ct.current, nt(ct, r ? n & 1 | 2 : n & 1), t) : (Vt(t), null);
    case 22:
    case 23:
      return Bp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? dn & 1073741824 && (Vt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Vt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function gw(e, t) {
  switch (gp(t), t.tag) {
    case 1:
      return sn(t.type) && Da(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ki(), it(on), it(Gt), Ep(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return kp(t), null;
    case 13:
      if (it(ct), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        wi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return it(ct), null;
    case 4:
      return ki(), null;
    case 10:
      return bp(t.type._context), null;
    case 22:
    case 23:
      return Bp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wl = !1, Kt = !1, yw = typeof WeakSet == "function" ? WeakSet : Set, Z = null;
function ui(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    gt(e, t, r);
  }
  else n.current = null;
}
function ff(e, t, n) {
  try {
    n();
  } catch (r) {
    gt(e, t, r);
  }
}
var zm = !1;
function vw(e, t) {
  if (Yd = La, e = O0(), hp(e)) {
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
        var s = 0, l = -1, a = -1, u = 0, d = 0, h = e, g = null;
        t: for (; ; ) {
          for (var f; h !== n || o !== 0 && h.nodeType !== 3 || (l = s + o), h !== i || r !== 0 && h.nodeType !== 3 || (a = s + r), h.nodeType === 3 && (s += h.nodeValue.length), (f = h.firstChild) !== null; )
            g = h, h = f;
          for (; ; ) {
            if (h === e) break t;
            if (g === n && ++u === o && (l = s), g === i && ++d === r && (a = s), (f = h.nextSibling) !== null) break;
            h = g, g = h.parentNode;
          }
          h = f;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qd = { focusedElem: e, selectionRange: n }, La = !1, Z = t; Z !== null; ) if (t = Z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Z = e;
  else for (; Z !== null; ) {
    t = Z;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var w = v.memoizedProps, C = v.memoizedState, m = t.stateNode, p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Un(t.type, w), C);
            m.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var x = t.stateNode.containerInfo;
          x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(V(163));
      }
    } catch (S) {
      gt(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, Z = e;
      break;
    }
    Z = t.return;
  }
  return v = zm, zm = !1, v;
}
function ks(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && ff(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Tu(e, t) {
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
function pf(e) {
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
function $v(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, $v(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ir], delete t[Hs], delete t[Jd], delete t[ew], delete t[tw])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function jv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _m(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || jv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function hf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Fa));
  else if (r !== 4 && (e = e.child, e !== null)) for (hf(e, t, n), e = e.sibling; e !== null; ) hf(e, t, n), e = e.sibling;
}
function mf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (mf(e, t, n), e = e.sibling; e !== null; ) mf(e, t, n), e = e.sibling;
}
var Lt = null, Vn = !1;
function Lr(e, t, n) {
  for (n = n.child; n !== null; ) Av(e, t, n), n = n.sibling;
}
function Av(e, t, n) {
  if (ar && typeof ar.onCommitFiberUnmount == "function") try {
    ar.onCommitFiberUnmount(vu, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Kt || ui(n, t);
    case 6:
      var r = Lt, o = Vn;
      Lt = null, Lr(e, t, n), Lt = r, Vn = o, Lt !== null && (Vn ? (e = Lt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Lt.removeChild(n.stateNode));
      break;
    case 18:
      Lt !== null && (Vn ? (e = Lt, n = n.stateNode, e.nodeType === 8 ? Jc(e.parentNode, n) : e.nodeType === 1 && Jc(e, n), Fs(e)) : Jc(Lt, n.stateNode));
      break;
    case 4:
      r = Lt, o = Vn, Lt = n.stateNode.containerInfo, Vn = !0, Lr(e, t, n), Lt = r, Vn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Kt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && ff(n, t, s), o = o.next;
        } while (o !== r);
      }
      Lr(e, t, n);
      break;
    case 1:
      if (!Kt && (ui(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        gt(n, t, l);
      }
      Lr(e, t, n);
      break;
    case 21:
      Lr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Kt = (r = Kt) || n.memoizedState !== null, Lr(e, t, n), Kt = r) : Lr(e, t, n);
      break;
    default:
      Lr(e, t, n);
  }
}
function Fm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yw()), t.forEach(function(r) {
      var o = Rw.bind(null, e, r);
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
            Lt = l.stateNode, Vn = !1;
            break e;
          case 3:
            Lt = l.stateNode.containerInfo, Vn = !0;
            break e;
          case 4:
            Lt = l.stateNode.containerInfo, Vn = !0;
            break e;
        }
        l = l.return;
      }
      if (Lt === null) throw Error(V(160));
      Av(i, s, o), Lt = null, Vn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      gt(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Nv(t, e), t = t.sibling;
}
function Nv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (zn(t, e), Zn(e), r & 4) {
        try {
          ks(3, e, e.return), Tu(3, e);
        } catch (w) {
          gt(e, e.return, w);
        }
        try {
          ks(5, e, e.return);
        } catch (w) {
          gt(e, e.return, w);
        }
      }
      break;
    case 1:
      zn(t, e), Zn(e), r & 512 && n !== null && ui(n, n.return);
      break;
    case 5:
      if (zn(t, e), Zn(e), r & 512 && n !== null && ui(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Bs(o, "");
        } catch (w) {
          gt(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && n0(o, i), zd(l, s);
          var u = zd(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], h = a[s + 1];
            d === "style" ? l0(o, h) : d === "dangerouslySetInnerHTML" ? i0(o, h) : d === "children" ? Bs(o, h) : tp(o, d, h, u);
          }
          switch (l) {
            case "input":
              Ad(o, i);
              break;
            case "textarea":
              r0(o, i);
              break;
            case "select":
              var g = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var f = i.value;
              f != null ? di(o, !!i.multiple, f, !1) : g !== !!i.multiple && (i.defaultValue != null ? di(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : di(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Hs] = i;
        } catch (w) {
          gt(e, e.return, w);
        }
      }
      break;
    case 6:
      if (zn(t, e), Zn(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (w) {
          gt(e, e.return, w);
        }
      }
      break;
    case 3:
      if (zn(t, e), Zn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Fs(t.containerInfo);
      } catch (w) {
        gt(e, e.return, w);
      }
      break;
    case 4:
      zn(t, e), Zn(e);
      break;
    case 13:
      zn(t, e), Zn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Np = bt())), r & 4 && Fm(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Kt = (u = Kt) || d, zn(t, e), Kt = u) : zn(t, e), Zn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (Z = e, d = e.child; d !== null; ) {
          for (h = Z = d; Z !== null; ) {
            switch (g = Z, f = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ks(4, g, g.return);
                break;
              case 1:
                ui(g, g.return);
                var v = g.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (w) {
                    gt(r, n, w);
                  }
                }
                break;
              case 5:
                ui(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Wm(h);
                  continue;
                }
            }
            f !== null ? (f.return = g, Z = f) : Wm(h);
          }
          d = d.sibling;
        }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                o = h.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = h.stateNode, a = h.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = s0("display", s));
              } catch (w) {
                gt(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (d === null) try {
              h.stateNode.nodeValue = u ? "" : h.memoizedProps;
            } catch (w) {
              gt(e, e.return, w);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), h = h.return;
          }
          d === h && (d = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      zn(t, e), Zn(e), r & 4 && Fm(e);
      break;
    case 21:
      break;
    default:
      zn(
        t,
        e
      ), Zn(e);
  }
}
function Zn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jv(n)) {
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
          r.flags & 32 && (Bs(o, ""), r.flags &= -33);
          var i = _m(e);
          mf(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = _m(e);
          hf(e, l, s);
          break;
        default:
          throw Error(V(161));
      }
    } catch (a) {
      gt(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xw(e, t, n) {
  Z = e, Ov(e);
}
function Ov(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var o = Z, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Wl;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Kt;
        l = Wl;
        var u = Kt;
        if (Wl = s, (Kt = a) && !u) for (Z = o; Z !== null; ) s = Z, a = s.child, s.tag === 22 && s.memoizedState !== null ? Um(o) : a !== null ? (a.return = s, Z = a) : Um(o);
        for (; i !== null; ) Z = i, Ov(i), i = i.sibling;
        Z = o, Wl = l, Kt = u;
      }
      Dm(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, Z = i) : Dm(e);
  }
}
function Dm(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Kt || Tu(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Kt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Un(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Em(t, i, r);
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
              Em(t, s, n);
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
                  var h = d.dehydrated;
                  h !== null && Fs(h);
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
        Kt || t.flags & 512 && pf(t);
      } catch (g) {
        gt(t, t.return, g);
      }
    }
    if (t === e) {
      Z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, Z = n;
      break;
    }
    Z = t.return;
  }
}
function Wm(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t === e) {
      Z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, Z = n;
      break;
    }
    Z = t.return;
  }
}
function Um(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Tu(4, t);
          } catch (a) {
            gt(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              gt(t, o, a);
            }
          }
          var i = t.return;
          try {
            pf(t);
          } catch (a) {
            gt(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            pf(t);
          } catch (a) {
            gt(t, s, a);
          }
      }
    } catch (a) {
      gt(t, t.return, a);
    }
    if (t === e) {
      Z = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, Z = l;
      break;
    }
    Z = t.return;
  }
}
var bw = Math.ceil, qa = Br.ReactCurrentDispatcher, jp = Br.ReactCurrentOwner, Mn = Br.ReactCurrentBatchConfig, Le = 0, $t = null, Rt = null, Ft = 0, dn = 0, ci = io(0), It = 0, qs = null, Mo = 0, Ru = 0, Ap = 0, Es = null, nn = null, Np = 0, Ti = 1 / 0, Sr = null, Ja = !1, gf = null, Xr = null, Ul = !1, Ur = null, Za = 0, Ts = 0, yf = null, Sa = -1, wa = 0;
function Jt() {
  return Le & 6 ? bt() : Sa !== -1 ? Sa : Sa = bt();
}
function qr(e) {
  return e.mode & 1 ? Le & 2 && Ft !== 0 ? Ft & -Ft : rw.transition !== null ? (wa === 0 && (wa = x0()), wa) : (e = Xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : T0(e.type)), e) : 1;
}
function Gn(e, t, n, r) {
  if (50 < Ts) throw Ts = 0, yf = null, Error(V(185));
  cl(e, n, r), (!(Le & 2) || e !== $t) && (e === $t && (!(Le & 2) && (Ru |= n), It === 4 && Dr(e, Ft)), ln(e, r), n === 1 && Le === 0 && !(t.mode & 1) && (Ti = bt() + 500, Cu && so()));
}
function ln(e, t) {
  var n = e.callbackNode;
  rS(e, t);
  var r = Ba(e, e === $t ? Ft : 0);
  if (r === 0) n !== null && Jh(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Jh(n), t === 1) e.tag === 0 ? nw(Vm.bind(null, e)) : H0(Vm.bind(null, e)), JS(function() {
      !(Le & 6) && so();
    }), n = null;
    else {
      switch (b0(r)) {
        case 1:
          n = sp;
          break;
        case 4:
          n = y0;
          break;
        case 16:
          n = Oa;
          break;
        case 536870912:
          n = v0;
          break;
        default:
          n = Oa;
      }
      n = Uv(n, Bv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Bv(e, t) {
  if (Sa = -1, wa = 0, Le & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (gi() && e.callbackNode !== n) return null;
  var r = Ba(e, e === $t ? Ft : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = eu(e, r);
  else {
    t = r;
    var o = Le;
    Le |= 2;
    var i = zv();
    ($t !== e || Ft !== t) && (Sr = null, Ti = bt() + 500, Co(e, t));
    do
      try {
        Cw();
        break;
      } catch (l) {
        Lv(e, l);
      }
    while (!0);
    xp(), qa.current = i, Le = o, Rt !== null ? t = 0 : ($t = null, Ft = 0, t = It);
  }
  if (t !== 0) {
    if (t === 2 && (o = Ud(e), o !== 0 && (r = o, t = vf(e, o))), t === 1) throw n = qs, Co(e, 0), Dr(e, r), ln(e, bt()), n;
    if (t === 6) Dr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Sw(o) && (t = eu(e, r), t === 2 && (i = Ud(e), i !== 0 && (r = i, t = vf(e, i))), t === 1)) throw n = qs, Co(e, 0), Dr(e, r), ln(e, bt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          yo(e, nn, Sr);
          break;
        case 3:
          if (Dr(e, r), (r & 130023424) === r && (t = Np + 500 - bt(), 10 < t)) {
            if (Ba(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Jt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = qd(yo.bind(null, e, nn, Sr), t);
            break;
          }
          yo(e, nn, Sr);
          break;
        case 4:
          if (Dr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Kn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = bt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * bw(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qd(yo.bind(null, e, nn, Sr), r);
            break;
          }
          yo(e, nn, Sr);
          break;
        case 5:
          yo(e, nn, Sr);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return ln(e, bt()), e.callbackNode === n ? Bv.bind(null, e) : null;
}
function vf(e, t) {
  var n = Es;
  return e.current.memoizedState.isDehydrated && (Co(e, t).flags |= 256), e = eu(e, t), e !== 2 && (t = nn, nn = n, t !== null && xf(t)), e;
}
function xf(e) {
  nn === null ? nn = e : nn.push.apply(nn, e);
}
function Sw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Yn(i(), o)) return !1;
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
  for (t &= ~Ap, t &= ~Ru, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Kn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Vm(e) {
  if (Le & 6) throw Error(V(327));
  gi();
  var t = Ba(e, 0);
  if (!(t & 1)) return ln(e, bt()), null;
  var n = eu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ud(e);
    r !== 0 && (t = r, n = vf(e, r));
  }
  if (n === 1) throw n = qs, Co(e, 0), Dr(e, t), ln(e, bt()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, yo(e, nn, Sr), ln(e, bt()), null;
}
function Op(e, t) {
  var n = Le;
  Le |= 1;
  try {
    return e(t);
  } finally {
    Le = n, Le === 0 && (Ti = bt() + 500, Cu && so());
  }
}
function $o(e) {
  Ur !== null && Ur.tag === 0 && !(Le & 6) && gi();
  var t = Le;
  Le |= 1;
  var n = Mn.transition, r = Xe;
  try {
    if (Mn.transition = null, Xe = 1, e) return e();
  } finally {
    Xe = r, Mn.transition = n, Le = t, !(Le & 6) && so();
  }
}
function Bp() {
  dn = ci.current, it(ci);
}
function Co(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, qS(n)), Rt !== null) for (n = Rt.return; n !== null; ) {
    var r = n;
    switch (gp(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Da();
        break;
      case 3:
        ki(), it(on), it(Gt), Ep();
        break;
      case 5:
        kp(r);
        break;
      case 4:
        ki();
        break;
      case 13:
        it(ct);
        break;
      case 19:
        it(ct);
        break;
      case 10:
        bp(r.type._context);
        break;
      case 22:
      case 23:
        Bp();
    }
    n = n.return;
  }
  if ($t = e, Rt = e = Jr(e.current, null), Ft = dn = t, It = 0, qs = null, Ap = Ru = Mo = 0, nn = Es = null, bo !== null) {
    for (t = 0; t < bo.length; t++) if (n = bo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    bo = null;
  }
  return e;
}
function Lv(e, t) {
  do {
    var n = Rt;
    try {
      if (xp(), va.current = Xa, Qa) {
        for (var r = dt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Qa = !1;
      }
      if (Io = 0, Mt = Pt = dt = null, Cs = !1, Ys = 0, jp.current = null, n === null || n.return === null) {
        It = 1, qs = t, Rt = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Ft, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, d = l, h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var g = d.alternate;
            g ? (d.updateQueue = g.updateQueue, d.memoizedState = g.memoizedState, d.lanes = g.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var f = $m(s);
          if (f !== null) {
            f.flags &= -257, jm(f, s, l, i, t), f.mode & 1 && Mm(i, u, t), t = f, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Mm(i, u, t), Lp();
              break e;
            }
            a = Error(V(426));
          }
        } else if (lt && l.mode & 1) {
          var C = $m(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), jm(C, s, l, i, t), yp(Ei(a, l));
            break e;
          }
        }
        i = a = Ei(a, l), It !== 4 && (It = 2), Es === null ? Es = [i] : Es.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = bv(i, a, t);
              km(i, m);
              break e;
            case 1:
              l = a;
              var p = i.type, x = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Xr === null || !Xr.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = Sv(i, l, t);
                km(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Fv(n);
    } catch (E) {
      t = E, Rt === n && n !== null && (Rt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zv() {
  var e = qa.current;
  return qa.current = Xa, e === null ? Xa : e;
}
function Lp() {
  (It === 0 || It === 3 || It === 2) && (It = 4), $t === null || !(Mo & 268435455) && !(Ru & 268435455) || Dr($t, Ft);
}
function eu(e, t) {
  var n = Le;
  Le |= 2;
  var r = zv();
  ($t !== e || Ft !== t) && (Sr = null, Co(e, t));
  do
    try {
      ww();
      break;
    } catch (o) {
      Lv(e, o);
    }
  while (!0);
  if (xp(), Le = n, qa.current = r, Rt !== null) throw Error(V(261));
  return $t = null, Ft = 0, It;
}
function ww() {
  for (; Rt !== null; ) _v(Rt);
}
function Cw() {
  for (; Rt !== null && !Yb(); ) _v(Rt);
}
function _v(e) {
  var t = Wv(e.alternate, e, dn);
  e.memoizedProps = e.pendingProps, t === null ? Fv(e) : Rt = t, jp.current = null;
}
function Fv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = gw(n, t), n !== null) {
        n.flags &= 32767, Rt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        It = 6, Rt = null;
        return;
      }
    } else if (n = mw(n, t, dn), n !== null) {
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
function yo(e, t, n) {
  var r = Xe, o = Mn.transition;
  try {
    Mn.transition = null, Xe = 1, kw(e, t, n, r);
  } finally {
    Mn.transition = o, Xe = r;
  }
  return null;
}
function kw(e, t, n, r) {
  do
    gi();
  while (Ur !== null);
  if (Le & 6) throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (oS(e, i), e === $t && (Rt = $t = null, Ft = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ul || (Ul = !0, Uv(Oa, function() {
    return gi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Mn.transition, Mn.transition = null;
    var s = Xe;
    Xe = 1;
    var l = Le;
    Le |= 4, jp.current = null, vw(e, n), Nv(n, e), VS(Qd), La = !!Yd, Qd = Yd = null, e.current = n, xw(n), Qb(), Le = l, Xe = s, Mn.transition = i;
  } else e.current = n;
  if (Ul && (Ul = !1, Ur = e, Za = o), i = e.pendingLanes, i === 0 && (Xr = null), Jb(n.stateNode), ln(e, bt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ja) throw Ja = !1, e = gf, gf = null, e;
  return Za & 1 && e.tag !== 0 && gi(), i = e.pendingLanes, i & 1 ? e === yf ? Ts++ : (Ts = 0, yf = e) : Ts = 0, so(), null;
}
function gi() {
  if (Ur !== null) {
    var e = b0(Za), t = Mn.transition, n = Xe;
    try {
      if (Mn.transition = null, Xe = 16 > e ? 16 : e, Ur === null) var r = !1;
      else {
        if (e = Ur, Ur = null, Za = 0, Le & 6) throw Error(V(331));
        var o = Le;
        for (Le |= 4, Z = e.current; Z !== null; ) {
          var i = Z, s = i.child;
          if (Z.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (Z = u; Z !== null; ) {
                  var d = Z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ks(8, d, i);
                  }
                  var h = d.child;
                  if (h !== null) h.return = d, Z = h;
                  else for (; Z !== null; ) {
                    d = Z;
                    var g = d.sibling, f = d.return;
                    if ($v(d), d === u) {
                      Z = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = f, Z = g;
                      break;
                    }
                    Z = f;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var C = w.sibling;
                    w.sibling = null, w = C;
                  } while (w !== null);
                }
              }
              Z = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, Z = s;
          else e: for (; Z !== null; ) {
            if (i = Z, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ks(9, i, i.return);
            }
            var m = i.sibling;
            if (m !== null) {
              m.return = i.return, Z = m;
              break e;
            }
            Z = i.return;
          }
        }
        var p = e.current;
        for (Z = p; Z !== null; ) {
          s = Z;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) x.return = s, Z = x;
          else e: for (s = p; Z !== null; ) {
            if (l = Z, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Tu(9, l);
              }
            } catch (E) {
              gt(l, l.return, E);
            }
            if (l === s) {
              Z = null;
              break e;
            }
            var S = l.sibling;
            if (S !== null) {
              S.return = l.return, Z = S;
              break e;
            }
            Z = l.return;
          }
        }
        if (Le = o, so(), ar && typeof ar.onPostCommitFiberRoot == "function") try {
          ar.onPostCommitFiberRoot(vu, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Xe = n, Mn.transition = t;
    }
  }
  return !1;
}
function Hm(e, t, n) {
  t = Ei(n, t), t = bv(e, t, 1), e = Qr(e, t, 1), t = Jt(), e !== null && (cl(e, 1, t), ln(e, t));
}
function gt(e, t, n) {
  if (e.tag === 3) Hm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Hm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xr === null || !Xr.has(r))) {
        e = Ei(n, e), e = Sv(t, e, 1), t = Qr(t, e, 1), e = Jt(), t !== null && (cl(t, 1, e), ln(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ew(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Jt(), e.pingedLanes |= e.suspendedLanes & n, $t === e && (Ft & n) === n && (It === 4 || It === 3 && (Ft & 130023424) === Ft && 500 > bt() - Np ? Co(e, 0) : Ap |= n), ln(e, t);
}
function Dv(e, t) {
  t === 0 && (e.mode & 1 ? (t = Al, Al <<= 1, !(Al & 130023424) && (Al = 4194304)) : t = 1);
  var n = Jt();
  e = $r(e, t), e !== null && (cl(e, t, n), ln(e, n));
}
function Tw(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Dv(e, n);
}
function Rw(e, t) {
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
  r !== null && r.delete(t), Dv(e, n);
}
var Wv;
Wv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || on.current) rn = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return rn = !1, hw(e, t, n);
    rn = !!(e.flags & 131072);
  }
  else rn = !1, lt && t.flags & 1048576 && K0(t, Va, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ba(e, t), e = t.pendingProps;
      var o = Si(t, Gt.current);
      mi(t, n), o = Rp(null, t, r, e, o, n);
      var i = Pp();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, sn(r) ? (i = !0, Wa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, wp(t), o.updater = Eu, t.stateNode = o, o._reactInternals = t, of(t, r, e, n), t = af(null, t, r, !0, i, n)) : (t.tag = 0, lt && i && mp(t), Xt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ba(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Iw(r), e = Un(r, e), o) {
          case 0:
            t = lf(null, t, r, e, n);
            break e;
          case 1:
            t = Om(null, t, r, e, n);
            break e;
          case 11:
            t = Am(null, t, r, e, n);
            break e;
          case 14:
            t = Nm(null, t, r, Un(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Un(r, o), lf(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Un(r, o), Om(e, t, r, o, n);
    case 3:
      e: {
        if (Ev(t), e === null) throw Error(V(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, J0(e, t), Ga(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Ei(Error(V(423)), t), t = Bm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Ei(Error(V(424)), t), t = Bm(e, t, r, n, o);
          break e;
        } else for (hn = Yr(t.stateNode.containerInfo.firstChild), mn = t, lt = !0, Hn = null, n = X0(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (wi(), r === o) {
            t = jr(e, t, n);
            break e;
          }
          Xt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Z0(t), e === null && tf(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Xd(r, o) ? s = null : i !== null && Xd(r, i) && (t.flags |= 32), kv(e, t), Xt(e, t, s, n), t.child;
    case 6:
      return e === null && tf(t), null;
    case 13:
      return Tv(e, t, n);
    case 4:
      return Cp(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ci(t, null, r, n) : Xt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Un(r, o), Am(e, t, r, o, n);
    case 7:
      return Xt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Xt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Xt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, nt(Ha, r._currentValue), r._currentValue = s, i !== null) if (Yn(i.value, s)) {
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
                  a = Pr(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), nf(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), nf(s, n, t), s = i.sibling;
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
        Xt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, mi(t, n), o = jn(o), r = r(o), t.flags |= 1, Xt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Un(r, t.pendingProps), o = Un(r.type, o), Nm(e, t, r, o, n);
    case 15:
      return wv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Un(r, o), ba(e, t), t.tag = 1, sn(r) ? (e = !0, Wa(t)) : e = !1, mi(t, n), xv(t, r, o), of(t, r, o, n), af(null, t, r, !0, e, n);
    case 19:
      return Rv(e, t, n);
    case 22:
      return Cv(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function Uv(e, t) {
  return g0(e, t);
}
function Pw(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function In(e, t, n, r) {
  return new Pw(e, t, n, r);
}
function zp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Iw(e) {
  if (typeof e == "function") return zp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === rp) return 11;
    if (e === op) return 14;
  }
  return 2;
}
function Jr(e, t) {
  var n = e.alternate;
  return n === null ? (n = In(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ca(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") zp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case ei:
      return ko(n.children, o, i, t);
    case np:
      s = 8, o |= 8;
      break;
    case Pd:
      return e = In(12, n, t, o | 2), e.elementType = Pd, e.lanes = i, e;
    case Id:
      return e = In(13, n, t, o), e.elementType = Id, e.lanes = i, e;
    case Md:
      return e = In(19, n, t, o), e.elementType = Md, e.lanes = i, e;
    case Zy:
      return Pu(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case qy:
          s = 10;
          break e;
        case Jy:
          s = 9;
          break e;
        case rp:
          s = 11;
          break e;
        case op:
          s = 14;
          break e;
        case zr:
          s = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = In(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function ko(e, t, n, r) {
  return e = In(7, e, r, t), e.lanes = n, e;
}
function Pu(e, t, n, r) {
  return e = In(22, e, r, t), e.elementType = Zy, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function sd(e, t, n) {
  return e = In(6, e, null, t), e.lanes = n, e;
}
function ld(e, t, n) {
  return t = In(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Mw(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Dc(0), this.expirationTimes = Dc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dc(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function _p(e, t, n, r, o, i, s, l, a) {
  return e = new Mw(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = In(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wp(i), e;
}
function $w(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Zo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Vv(e) {
  if (!e) return to;
  e = e._reactInternals;
  e: {
    if (Lo(e) !== e || e.tag !== 1) throw Error(V(170));
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
    if (sn(n)) return V0(e, n, t);
  }
  return t;
}
function Hv(e, t, n, r, o, i, s, l, a) {
  return e = _p(n, r, !0, e, o, i, s, l, a), e.context = Vv(null), n = e.current, r = Jt(), o = qr(n), i = Pr(r, o), i.callback = t ?? null, Qr(n, i, o), e.current.lanes = o, cl(e, o, r), ln(e, r), e;
}
function Iu(e, t, n, r) {
  var o = t.current, i = Jt(), s = qr(o);
  return n = Vv(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qr(o, t, s), e !== null && (Gn(e, o, s, i), ya(e, o, s)), s;
}
function tu(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Km(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fp(e, t) {
  Km(e, t), (e = e.alternate) && Km(e, t);
}
function jw() {
  return null;
}
var Kv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Dp(e) {
  this._internalRoot = e;
}
Mu.prototype.render = Dp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  Iu(e, t, null, null);
};
Mu.prototype.unmount = Dp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $o(function() {
      Iu(null, e, null, null);
    }), t[Mr] = null;
  }
};
function Mu(e) {
  this._internalRoot = e;
}
Mu.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = C0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Fr.length && t !== 0 && t < Fr[n].priority; n++) ;
    Fr.splice(n, 0, e), n === 0 && E0(e);
  }
};
function Wp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function $u(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Gm() {
}
function Aw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = tu(s);
        i.call(u);
      };
    }
    var s = Hv(t, r, e, 0, null, !1, !1, "", Gm);
    return e._reactRootContainer = s, e[Mr] = s.current, Us(e.nodeType === 8 ? e.parentNode : e), $o(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = tu(a);
      l.call(u);
    };
  }
  var a = _p(e, 0, !1, null, null, !1, !1, "", Gm);
  return e._reactRootContainer = a, e[Mr] = a.current, Us(e.nodeType === 8 ? e.parentNode : e), $o(function() {
    Iu(t, a, n, r);
  }), a;
}
function ju(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = tu(s);
        l.call(a);
      };
    }
    Iu(t, s, e, o);
  } else s = Aw(n, t, e, o, r);
  return tu(s);
}
S0 = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hs(t.pendingLanes);
        n !== 0 && (lp(t, n | 1), ln(t, bt()), !(Le & 6) && (Ti = bt() + 500, so()));
      }
      break;
    case 13:
      $o(function() {
        var r = $r(e, 1);
        if (r !== null) {
          var o = Jt();
          Gn(r, e, 1, o);
        }
      }), Fp(e, 1);
  }
};
ap = function(e) {
  if (e.tag === 13) {
    var t = $r(e, 134217728);
    if (t !== null) {
      var n = Jt();
      Gn(t, e, 134217728, n);
    }
    Fp(e, 134217728);
  }
};
w0 = function(e) {
  if (e.tag === 13) {
    var t = qr(e), n = $r(e, t);
    if (n !== null) {
      var r = Jt();
      Gn(n, e, t, r);
    }
    Fp(e, t);
  }
};
C0 = function() {
  return Xe;
};
k0 = function(e, t) {
  var n = Xe;
  try {
    return Xe = e, t();
  } finally {
    Xe = n;
  }
};
Fd = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ad(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = wu(r);
            if (!o) throw Error(V(90));
            t0(r), Ad(r, o);
          }
        }
      }
      break;
    case "textarea":
      r0(e, n);
      break;
    case "select":
      t = n.value, t != null && di(e, !!n.multiple, t, !1);
  }
};
c0 = Op;
d0 = $o;
var Nw = { usingClientEntryPoint: !1, Events: [fl, oi, wu, a0, u0, Op] }, es = { findFiberByHostInstance: xo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ow = { bundleType: es.bundleType, version: es.version, rendererPackageName: es.rendererPackageName, rendererConfig: es.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Br.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = h0(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: es.findFiberByHostInstance || jw, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vl.isDisabled && Vl.supportsFiber) try {
    vu = Vl.inject(Ow), ar = Vl;
  } catch {
  }
}
xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nw;
xn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wp(t)) throw Error(V(200));
  return $w(e, t, null, n);
};
xn.createRoot = function(e, t) {
  if (!Wp(e)) throw Error(V(299));
  var n = !1, r = "", o = Kv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = _p(e, 1, !1, null, null, n, !1, r, o), e[Mr] = t.current, Us(e.nodeType === 8 ? e.parentNode : e), new Dp(t);
};
xn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = h0(t), e = e === null ? null : e.stateNode, e;
};
xn.flushSync = function(e) {
  return $o(e);
};
xn.hydrate = function(e, t, n) {
  if (!$u(t)) throw Error(V(200));
  return ju(null, e, t, !0, n);
};
xn.hydrateRoot = function(e, t, n) {
  if (!Wp(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Kv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Hv(t, null, e, 1, n ?? null, o, !1, i, s), e[Mr] = t.current, Us(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Mu(t);
};
xn.render = function(e, t, n) {
  if (!$u(t)) throw Error(V(200));
  return ju(null, e, t, !1, n);
};
xn.unmountComponentAtNode = function(e) {
  if (!$u(e)) throw Error(V(40));
  return e._reactRootContainer ? ($o(function() {
    ju(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Mr] = null;
    });
  }), !0) : !1;
};
xn.unstable_batchedUpdates = Op;
xn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!$u(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return ju(e, t, n, !1, r);
};
xn.version = "18.3.1-next-f1338f8080-20240426";
function Gv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv);
    } catch (e) {
      console.error(e);
    }
}
Gv(), Gy.exports = xn;
var Yv = Gy.exports, Qv, Ym = Yv;
Qv = Ym.createRoot, Ym.hydrateRoot;
const Js = {
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
}, Go = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Yo = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Qo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, ts = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Bw = {
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
function Ar(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const cr = "$$material";
function bf() {
  return bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bf.apply(null, arguments);
}
function Lw(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function zw(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var _w = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(zw(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Lw(o);
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
}(), Ht = "-ms-", nu = "-moz-", Ue = "-webkit-", Xv = "comm", Up = "rule", Vp = "decl", Fw = "@import", qv = "@keyframes", Dw = "@layer", Ww = Math.abs, Au = String.fromCharCode, Uw = Object.assign;
function Vw(e, t) {
  return zt(e, 0) ^ 45 ? (((t << 2 ^ zt(e, 0)) << 2 ^ zt(e, 1)) << 2 ^ zt(e, 2)) << 2 ^ zt(e, 3) : 0;
}
function Jv(e) {
  return e.trim();
}
function Hw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ve(e, t, n) {
  return e.replace(t, n);
}
function Sf(e, t) {
  return e.indexOf(t);
}
function zt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Zs(e, t, n) {
  return e.slice(t, n);
}
function rr(e) {
  return e.length;
}
function Hp(e) {
  return e.length;
}
function Hl(e, t) {
  return t.push(e), e;
}
function Kw(e, t) {
  return e.map(t).join("");
}
var Nu = 1, Ri = 1, Zv = 0, cn = 0, Tt = 0, Wi = "";
function Ou(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Nu, column: Ri, length: s, return: "" };
}
function ns(e, t) {
  return Uw(Ou("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Gw() {
  return Tt;
}
function Yw() {
  return Tt = cn > 0 ? zt(Wi, --cn) : 0, Ri--, Tt === 10 && (Ri = 1, Nu--), Tt;
}
function gn() {
  return Tt = cn < Zv ? zt(Wi, cn++) : 0, Ri++, Tt === 10 && (Ri = 1, Nu++), Tt;
}
function dr() {
  return zt(Wi, cn);
}
function ka() {
  return cn;
}
function hl(e, t) {
  return Zs(Wi, e, t);
}
function el(e) {
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
function e1(e) {
  return Nu = Ri = 1, Zv = rr(Wi = e), cn = 0, [];
}
function t1(e) {
  return Wi = "", e;
}
function Ea(e) {
  return Jv(hl(cn - 1, wf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qw(e) {
  for (; (Tt = dr()) && Tt < 33; )
    gn();
  return el(e) > 2 || el(Tt) > 3 ? "" : " ";
}
function Xw(e, t) {
  for (; --t && gn() && !(Tt < 48 || Tt > 102 || Tt > 57 && Tt < 65 || Tt > 70 && Tt < 97); )
    ;
  return hl(e, ka() + (t < 6 && dr() == 32 && gn() == 32));
}
function wf(e) {
  for (; gn(); )
    switch (Tt) {
      case e:
        return cn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wf(Tt);
        break;
      case 40:
        e === 41 && wf(e);
        break;
      case 92:
        gn();
        break;
    }
  return cn;
}
function qw(e, t) {
  for (; gn() && e + Tt !== 57; )
    if (e + Tt === 84 && dr() === 47)
      break;
  return "/*" + hl(t, cn - 1) + "*" + Au(e === 47 ? e : gn());
}
function Jw(e) {
  for (; !el(dr()); )
    gn();
  return hl(e, cn);
}
function Zw(e) {
  return t1(Ta("", null, null, null, [""], e = e1(e), 0, [0], e));
}
function Ta(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, d = 0, h = s, g = 0, f = 0, v = 0, w = 1, C = 1, m = 1, p = 0, x = "", S = o, E = i, k = r, T = x; C; )
    switch (v = p, p = gn()) {
      case 40:
        if (v != 108 && zt(T, h - 1) == 58) {
          Sf(T += Ve(Ea(p), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Ea(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Qw(v);
        break;
      case 92:
        T += Xw(ka() - 1, 7);
        continue;
      case 47:
        switch (dr()) {
          case 42:
          case 47:
            Hl(eC(qw(gn(), ka()), t, n), a);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * w:
        l[u++] = rr(T) * m;
      case 125 * w:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            C = 0;
          case 59 + d:
            m == -1 && (T = Ve(T, /\f/g, "")), f > 0 && rr(T) - h && Hl(f > 32 ? Xm(T + ";", r, n, h - 1) : Xm(Ve(T, " ", "") + ";", r, n, h - 2), a);
            break;
          case 59:
            T += ";";
          default:
            if (Hl(k = Qm(T, t, n, u, d, o, l, x, S = [], E = [], h), i), p === 123)
              if (d === 0)
                Ta(T, t, k, k, S, i, h, l, E);
              else
                switch (g === 99 && zt(T, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ta(e, k, k, r && Hl(Qm(e, k, k, 0, 0, o, l, x, o, S = [], h), E), o, E, h, l, r ? S : E);
                    break;
                  default:
                    Ta(T, k, k, k, [""], E, 0, l, E);
                }
        }
        u = d = f = 0, w = m = 1, x = T = "", h = s;
        break;
      case 58:
        h = 1 + rr(T), f = v;
      default:
        if (w < 1) {
          if (p == 123)
            --w;
          else if (p == 125 && w++ == 0 && Yw() == 125)
            continue;
        }
        switch (T += Au(p), p * w) {
          case 38:
            m = d > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[u++] = (rr(T) - 1) * m, m = 1;
            break;
          case 64:
            dr() === 45 && (T += Ea(gn())), g = dr(), d = h = rr(x = T += Jw(ka())), p++;
            break;
          case 45:
            v === 45 && rr(T) == 2 && (w = 0);
        }
    }
  return i;
}
function Qm(e, t, n, r, o, i, s, l, a, u, d) {
  for (var h = o - 1, g = o === 0 ? i : [""], f = Hp(g), v = 0, w = 0, C = 0; v < r; ++v)
    for (var m = 0, p = Zs(e, h + 1, h = Ww(w = s[v])), x = e; m < f; ++m)
      (x = Jv(w > 0 ? g[m] + " " + p : Ve(p, /&\f/g, g[m]))) && (a[C++] = x);
  return Ou(e, t, n, o === 0 ? Up : l, a, u, d);
}
function eC(e, t, n) {
  return Ou(e, t, n, Xv, Au(Gw()), Zs(e, 2, -2), 0);
}
function Xm(e, t, n, r) {
  return Ou(e, t, n, Vp, Zs(e, 0, r), Zs(e, r + 1, -1), r);
}
function yi(e, t) {
  for (var n = "", r = Hp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function tC(e, t, n, r) {
  switch (e.type) {
    case Dw:
      if (e.children.length) break;
    case Fw:
    case Vp:
      return e.return = e.return || e.value;
    case Xv:
      return "";
    case qv:
      return e.return = e.value + "{" + yi(e.children, r) + "}";
    case Up:
      e.value = e.props.join(",");
  }
  return rr(n = yi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function nC(e) {
  var t = Hp(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function rC(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function n1(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var oC = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = dr(), o === 38 && i === 12 && (n[r] = 1), !el(i); )
    gn();
  return hl(t, cn);
}, iC = function(t, n) {
  var r = -1, o = 44;
  do
    switch (el(o)) {
      case 0:
        o === 38 && dr() === 12 && (n[r] = 1), t[r] += oC(cn - 1, n, r);
        break;
      case 2:
        t[r] += Ea(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = dr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Au(o);
    }
  while (o = gn());
  return t;
}, sC = function(t, n) {
  return t1(iC(e1(t), n));
}, qm = /* @__PURE__ */ new WeakMap(), lC = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !qm.get(r)) && !o) {
      qm.set(t, !0);
      for (var i = [], s = sC(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + " " + s[a];
    }
  }
}, aC = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function r1(e, t) {
  switch (Vw(e, t)) {
    case 5103:
      return Ue + "print-" + e + e;
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
      return Ue + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ue + e + nu + e + Ht + e + e;
    case 6828:
    case 4268:
      return Ue + e + Ht + e + e;
    case 6165:
      return Ue + e + Ht + "flex-" + e + e;
    case 5187:
      return Ue + e + Ve(e, /(\w+).+(:[^]+)/, Ue + "box-$1$2" + Ht + "flex-$1$2") + e;
    case 5443:
      return Ue + e + Ht + "flex-item-" + Ve(e, /flex-|-self/, "") + e;
    case 4675:
      return Ue + e + Ht + "flex-line-pack" + Ve(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ue + e + Ht + Ve(e, "shrink", "negative") + e;
    case 5292:
      return Ue + e + Ht + Ve(e, "basis", "preferred-size") + e;
    case 6060:
      return Ue + "box-" + Ve(e, "-grow", "") + Ue + e + Ht + Ve(e, "grow", "positive") + e;
    case 4554:
      return Ue + Ve(e, /([^-])(transform)/g, "$1" + Ue + "$2") + e;
    case 6187:
      return Ve(Ve(Ve(e, /(zoom-|grab)/, Ue + "$1"), /(image-set)/, Ue + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ve(e, /(image-set\([^]*)/, Ue + "$1$`$1");
    case 4968:
      return Ve(Ve(e, /(.+:)(flex-)?(.*)/, Ue + "box-pack:$3" + Ht + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ue + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ve(e, /(.+)-inline(.+)/, Ue + "$1$2") + e;
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
      if (rr(e) - 1 - t > 6) switch (zt(e, t + 1)) {
        case 109:
          if (zt(e, t + 4) !== 45) break;
        case 102:
          return Ve(e, /(.+:)(.+)-([^]+)/, "$1" + Ue + "$2-$3$1" + nu + (zt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Sf(e, "stretch") ? r1(Ve(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (zt(e, t + 1) !== 115) break;
    case 6444:
      switch (zt(e, rr(e) - 3 - (~Sf(e, "!important") && 10))) {
        case 107:
          return Ve(e, ":", ":" + Ue) + e;
        case 101:
          return Ve(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ue + (zt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ue + "$2$3$1" + Ht + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (zt(e, t + 11)) {
        case 114:
          return Ue + e + Ht + Ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ue + e + Ht + Ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ue + e + Ht + Ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ue + e + Ht + e + e;
  }
  return e;
}
var uC = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Vp:
      t.return = r1(t.value, t.length);
      break;
    case qv:
      return yi([ns(t, {
        value: Ve(t.value, "@", "@" + Ue)
      })], o);
    case Up:
      if (t.length) return Kw(t.props, function(i) {
        switch (Hw(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return yi([ns(t, {
              props: [Ve(i, /:(read-\w+)/, ":" + nu + "$1")]
            })], o);
          case "::placeholder":
            return yi([ns(t, {
              props: [Ve(i, /:(plac\w+)/, ":" + Ue + "input-$1")]
            }), ns(t, {
              props: [Ve(i, /:(plac\w+)/, ":" + nu + "$1")]
            }), ns(t, {
              props: [Ve(i, /:(plac\w+)/, Ht + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, cC = [uC], dC = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(w) {
      var C = w.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || cC, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(w) {
      for (var C = w.getAttribute("data-emotion").split(" "), m = 1; m < C.length; m++)
        i[C[m]] = !0;
      l.push(w);
    }
  );
  var a, u = [lC, aC];
  {
    var d, h = [tC, rC(function(w) {
      d.insert(w);
    })], g = nC(u.concat(o, h)), f = function(C) {
      return yi(Zw(C), g);
    };
    a = function(C, m, p, x) {
      d = p, f(C ? C + "{" + m.styles + "}" : m.styles), x && (v.inserted[m.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new _w({
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
  return v.sheet.hydrate(l), v;
}, o1 = { exports: {} }, qe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At = typeof Symbol == "function" && Symbol.for, Kp = At ? Symbol.for("react.element") : 60103, Gp = At ? Symbol.for("react.portal") : 60106, Bu = At ? Symbol.for("react.fragment") : 60107, Lu = At ? Symbol.for("react.strict_mode") : 60108, zu = At ? Symbol.for("react.profiler") : 60114, _u = At ? Symbol.for("react.provider") : 60109, Fu = At ? Symbol.for("react.context") : 60110, Yp = At ? Symbol.for("react.async_mode") : 60111, Du = At ? Symbol.for("react.concurrent_mode") : 60111, Wu = At ? Symbol.for("react.forward_ref") : 60112, Uu = At ? Symbol.for("react.suspense") : 60113, fC = At ? Symbol.for("react.suspense_list") : 60120, Vu = At ? Symbol.for("react.memo") : 60115, Hu = At ? Symbol.for("react.lazy") : 60116, pC = At ? Symbol.for("react.block") : 60121, hC = At ? Symbol.for("react.fundamental") : 60117, mC = At ? Symbol.for("react.responder") : 60118, gC = At ? Symbol.for("react.scope") : 60119;
function Sn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Kp:
        switch (e = e.type, e) {
          case Yp:
          case Du:
          case Bu:
          case zu:
          case Lu:
          case Uu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Fu:
              case Wu:
              case Hu:
              case Vu:
              case _u:
                return e;
              default:
                return t;
            }
        }
      case Gp:
        return t;
    }
  }
}
function i1(e) {
  return Sn(e) === Du;
}
qe.AsyncMode = Yp;
qe.ConcurrentMode = Du;
qe.ContextConsumer = Fu;
qe.ContextProvider = _u;
qe.Element = Kp;
qe.ForwardRef = Wu;
qe.Fragment = Bu;
qe.Lazy = Hu;
qe.Memo = Vu;
qe.Portal = Gp;
qe.Profiler = zu;
qe.StrictMode = Lu;
qe.Suspense = Uu;
qe.isAsyncMode = function(e) {
  return i1(e) || Sn(e) === Yp;
};
qe.isConcurrentMode = i1;
qe.isContextConsumer = function(e) {
  return Sn(e) === Fu;
};
qe.isContextProvider = function(e) {
  return Sn(e) === _u;
};
qe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kp;
};
qe.isForwardRef = function(e) {
  return Sn(e) === Wu;
};
qe.isFragment = function(e) {
  return Sn(e) === Bu;
};
qe.isLazy = function(e) {
  return Sn(e) === Hu;
};
qe.isMemo = function(e) {
  return Sn(e) === Vu;
};
qe.isPortal = function(e) {
  return Sn(e) === Gp;
};
qe.isProfiler = function(e) {
  return Sn(e) === zu;
};
qe.isStrictMode = function(e) {
  return Sn(e) === Lu;
};
qe.isSuspense = function(e) {
  return Sn(e) === Uu;
};
qe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Bu || e === Du || e === zu || e === Lu || e === Uu || e === fC || typeof e == "object" && e !== null && (e.$$typeof === Hu || e.$$typeof === Vu || e.$$typeof === _u || e.$$typeof === Fu || e.$$typeof === Wu || e.$$typeof === hC || e.$$typeof === mC || e.$$typeof === gC || e.$$typeof === pC);
};
qe.typeOf = Sn;
o1.exports = qe;
var yC = o1.exports, s1 = yC, vC = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, xC = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, l1 = {};
l1[s1.ForwardRef] = vC;
l1[s1.Memo] = xC;
var bC = !0;
function a1(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Qp = function(t, n, r) {
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
  bC === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Xp = function(t, n, r) {
  Qp(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function SC(e) {
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
var wC = {
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
}, CC = /[A-Z]|^ms/g, kC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, u1 = function(t) {
  return t.charCodeAt(1) === 45;
}, Jm = function(t) {
  return t != null && typeof t != "boolean";
}, ad = /* @__PURE__ */ n1(function(e) {
  return u1(e) ? e : e.replace(CC, "-$&").toLowerCase();
}), Zm = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(kC, function(r, o, i) {
          return or = {
            name: o,
            styles: i,
            next: or
          }, o;
        });
  }
  return wC[t] !== 1 && !u1(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function tl(e, t, n) {
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
        return or = {
          name: o.name,
          styles: o.styles,
          next: or
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            or = {
              name: s.name,
              styles: s.styles,
              next: or
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return EC(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = or, u = n(e);
        return or = a, tl(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var h = t[d];
  return h !== void 0 ? h : d;
}
function EC(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += tl(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : Jm(l) && (r += ad(i) + ":" + Zm(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          Jm(s[a]) && (r += ad(i) + ":" + Zm(i, s[a]) + ";");
      else {
        var u = tl(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += ad(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var eg = /label:\s*([^\s;{]+)\s*(;|$)/g, or;
function ml(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  or = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += tl(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += tl(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  eg.lastIndex = 0;
  for (var u = "", d; (d = eg.exec(o)) !== null; )
    u += "-" + d[1];
  var h = SC(o) + u;
  return {
    name: h,
    styles: o,
    next: or
  };
}
var TC = function(t) {
  return t();
}, c1 = $a.useInsertionEffect ? $a.useInsertionEffect : !1, d1 = c1 || TC, tg = c1 || y.useLayoutEffect, f1 = /* @__PURE__ */ y.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ dC({
    key: "css"
  }) : null
);
f1.Provider;
var qp = function(t) {
  return /* @__PURE__ */ y.forwardRef(function(n, r) {
    var o = y.useContext(f1);
    return t(n, o, r);
  });
}, gl = /* @__PURE__ */ y.createContext({}), Jp = {}.hasOwnProperty, Cf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", RC = function(t, n) {
  var r = {};
  for (var o in n)
    Jp.call(n, o) && (r[o] = n[o]);
  return r[Cf] = t, r;
}, PC = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Qp(n, r, o), d1(function() {
    return Xp(n, r, o);
  }), null;
}, IC = /* @__PURE__ */ qp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Cf], i = [r], s = "";
  typeof e.className == "string" ? s = a1(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = ml(i, void 0, y.useContext(gl));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e)
    Jp.call(e, u) && u !== "css" && u !== Cf && (a[u] = e[u]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(PC, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ y.createElement(o, a));
}), MC = IC, ng = function(t, n) {
  var r = arguments;
  if (n == null || !Jp.call(n, "css"))
    return y.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = MC, i[1] = RC(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return y.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ng || (ng = {}));
var $C = /* @__PURE__ */ qp(function(e, t) {
  var n = e.styles, r = ml([n], void 0, y.useContext(gl)), o = y.useRef();
  return tg(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), tg(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Xp(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function nl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ml(t);
}
function yl() {
  var e = nl.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var jC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, AC = /* @__PURE__ */ n1(
  function(e) {
    return jC.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), NC = AC, OC = function(t) {
  return t !== "theme";
}, rg = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? NC : OC;
}, og = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, BC = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Qp(n, r, o), d1(function() {
    return Xp(n, r, o);
  }), null;
}, LC = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = og(t, n, r), a = l || rg(o), u = !a("as");
  return function() {
    var d = arguments, h = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      h.push.apply(h, d);
    else {
      var g = d[0];
      h.push(g[0]);
      for (var f = d.length, v = 1; v < f; v++)
        h.push(d[v], g[v]);
    }
    var w = qp(function(C, m, p) {
      var x = u && C.as || o, S = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var T in C)
          k[T] = C[T];
        k.theme = y.useContext(gl);
      }
      typeof C.className == "string" ? S = a1(m.registered, E, C.className) : C.className != null && (S = C.className + " ");
      var R = ml(h.concat(E), m.registered, k);
      S += m.key + "-" + R.name, s !== void 0 && (S += " " + s);
      var I = u && l === void 0 ? rg(x) : a, A = {};
      for (var M in C)
        u && M === "as" || I(M) && (A[M] = C[M]);
      return A.className = S, p && (A.ref = p), /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(BC, {
        cache: m,
        serialized: R,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ y.createElement(x, A));
    });
    return w.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = o, w.__emotion_styles = h, w.__emotion_forwardProp = l, Object.defineProperty(w, "toString", {
      value: function() {
        return "." + s;
      }
    }), w.withComponent = function(C, m) {
      var p = e(C, bf({}, n, m, {
        shouldForwardProp: og(w, m, !0)
      }));
      return p.apply(void 0, h);
    }, w;
  };
}, zC = [
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
], kf = LC.bind(null);
zC.forEach(function(e) {
  kf[e] = kf(e);
});
function _C(e) {
  return e == null || Object.keys(e).length === 0;
}
function p1(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(_C(o) ? n : o) : t;
  return /* @__PURE__ */ c.jsx($C, {
    styles: r
  });
}
function h1(e, t) {
  return kf(e, t);
}
function FC(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const ig = [];
function Zr(e) {
  return ig[0] = e, ml(ig);
}
var m1 = { exports: {} }, tt = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zp = Symbol.for("react.transitional.element"), eh = Symbol.for("react.portal"), Ku = Symbol.for("react.fragment"), Gu = Symbol.for("react.strict_mode"), Yu = Symbol.for("react.profiler"), Qu = Symbol.for("react.consumer"), Xu = Symbol.for("react.context"), qu = Symbol.for("react.forward_ref"), Ju = Symbol.for("react.suspense"), Zu = Symbol.for("react.suspense_list"), ec = Symbol.for("react.memo"), tc = Symbol.for("react.lazy"), DC = Symbol.for("react.view_transition"), WC = Symbol.for("react.client.reference");
function Bn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Zp:
        switch (e = e.type, e) {
          case Ku:
          case Yu:
          case Gu:
          case Ju:
          case Zu:
          case DC:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Xu:
              case qu:
              case tc:
              case ec:
                return e;
              case Qu:
                return e;
              default:
                return t;
            }
        }
      case eh:
        return t;
    }
  }
}
tt.ContextConsumer = Qu;
tt.ContextProvider = Xu;
tt.Element = Zp;
tt.ForwardRef = qu;
tt.Fragment = Ku;
tt.Lazy = tc;
tt.Memo = ec;
tt.Portal = eh;
tt.Profiler = Yu;
tt.StrictMode = Gu;
tt.Suspense = Ju;
tt.SuspenseList = Zu;
tt.isContextConsumer = function(e) {
  return Bn(e) === Qu;
};
tt.isContextProvider = function(e) {
  return Bn(e) === Xu;
};
tt.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zp;
};
tt.isForwardRef = function(e) {
  return Bn(e) === qu;
};
tt.isFragment = function(e) {
  return Bn(e) === Ku;
};
tt.isLazy = function(e) {
  return Bn(e) === tc;
};
tt.isMemo = function(e) {
  return Bn(e) === ec;
};
tt.isPortal = function(e) {
  return Bn(e) === eh;
};
tt.isProfiler = function(e) {
  return Bn(e) === Yu;
};
tt.isStrictMode = function(e) {
  return Bn(e) === Gu;
};
tt.isSuspense = function(e) {
  return Bn(e) === Ju;
};
tt.isSuspenseList = function(e) {
  return Bn(e) === Zu;
};
tt.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ku || e === Yu || e === Gu || e === Ju || e === Zu || typeof e == "object" && e !== null && (e.$$typeof === tc || e.$$typeof === ec || e.$$typeof === Xu || e.$$typeof === Qu || e.$$typeof === qu || e.$$typeof === WC || e.getModuleId !== void 0);
};
tt.typeOf = Bn;
m1.exports = tt;
var g1 = m1.exports;
function Er(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function y1(e) {
  if (/* @__PURE__ */ y.isValidElement(e) || g1.isValidElementType(e) || !Er(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = y1(e[n]);
  }), t;
}
function jt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Er(e) && Er(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ y.isValidElement(t[o]) || g1.isValidElementType(t[o]) ? r[o] = t[o] : Er(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Er(e[o]) ? r[o] = jt(e[o], t[o], n) : n.clone ? r[o] = Er(t[o]) ? y1(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const UC = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function v1(e) {
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
  } = e, i = UC(t), s = Object.keys(i);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function a(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function u(f, v) {
    const w = s.indexOf(v);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(w !== -1 && typeof t[s[w]] == "number" ? t[s[w]] : v) - r / 100}${n})`;
  }
  function d(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : l(f);
  }
  function h(f) {
    const v = s.indexOf(f);
    return v === 0 ? l(s[1]) : v === s.length - 1 ? a(s[v]) : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  const g = [];
  for (let f = 0; f < s.length; f += 1)
    g.push(l(s[f]));
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: u,
    only: d,
    not: h,
    unit: n,
    internal_mediaKeys: g,
    ...o
  };
}
const sg = /min-width:\s*([0-9.]+)/;
function lg(e, t) {
  if (!e.containerQueries || !VC(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(sg)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(sg)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function VC(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function x1(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function HC(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function KC(e) {
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
const GC = {
  borderRadius: 4
};
function b1(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function vi(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return JC(t) ? t : ZC(e) ? Pi(t) : n && r ? XC(e, t) : n !== r ? Pi(t) : e2(e, t);
}
function YC(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Pi(e[t]);
  return r;
}
function QC(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Pi(e[n]));
  return t;
}
function XC(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Pi(t[r]);
  return e;
}
function qC(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function JC(e) {
  return typeof e != "object" || e === null;
}
function ZC(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Pi(e) {
  return qC(e) ? Array.isArray(e) ? YC(e) : QC(e) : e;
}
function e2(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = vi(e[n], t[n]) : e[n] = Pi(t[n]));
  return e;
}
const t2 = {}, nc = {
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
}, ru = v1({
  values: nc
}), n2 = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : nc[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function no(e, t, n) {
  const r = {};
  return rc(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : vi(r, l);
  });
}
function rc(e, t, n, r) {
  if (t ?? (t = t2), Array.isArray(n)) {
    const o = t.breakpoints ?? ru;
    for (let i = 0; i < n.length; i += 1)
      ud(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? ru, i = o.values ?? nc;
    for (const s in n)
      if (x1(o.keys, s)) {
        const l = HC(t.containerQueries ? t : n2, s);
        l && ud(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        ud(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function ud(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function S1(e = ru) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function Ef(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    b1(t[o]) && delete t[o];
  }
  return t;
}
function r2(e, ...t) {
  const r = [S1(e), ...t].reduce((o, i) => jt(o, i), {});
  return Ef(e, r);
}
function o2(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function cd(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || o2(t, n), i = Object.keys(o);
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
function i2(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (x1(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function ae(e) {
  if (typeof e != "string")
    throw new Error(Ar(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function w1(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = oc(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function oc(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = ag(e.vars, o, r);
    if (i != null)
      return i;
  }
  return ag(e, o, r);
}
function ag(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : ae(s)}`;
    return r == null ? void 0 : r[l];
  }
  return o;
}
function wt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, u = oc(a, r) || {};
    return no(s, l, (h) => {
      const g = w1(u, o, h, t);
      return n === !1 ? g : {
        [n]: g
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const s2 = {
  internal_cache: {}
}, ou = {
  m: "margin",
  p: "padding"
}, ug = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, cg = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, rl = {};
for (const e in ou)
  rl[e] = [ou[e]];
for (const e in ou)
  for (const t in ug) {
    const n = ou[e], r = ug[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    rl[e + t] = o;
  }
for (const e in cg)
  rl[e] = rl[cg[e]];
const th = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), nh = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...th, ...nh];
function vl(e, t, n, r) {
  const o = oc(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function ic(e) {
  return vl(e, "spacing", 8);
}
function jo(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const dg = [""];
function C1(e, t) {
  var i;
  const n = e.theme ?? s2, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? ic(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = rl[s] ?? (dg[0] = s, dg), a = e[s];
    rc(o, e.theme, a, (u, d) => {
      const h = u ? o[u] : o;
      for (let g = 0; g < l.length; g += 1)
        h[l[g]] = jo(r, d);
    });
  }
  return o;
}
function rh(e) {
  return C1(e, th);
}
rh.propTypes = {};
rh.filterProps = th;
const kt = rh;
function oh(e) {
  return C1(e, nh);
}
oh.propTypes = {};
oh.filterProps = nh;
const Et = oh;
function k1(e = 8, t = ic({
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
function sc(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && vi(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Rn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ln(e, t) {
  return wt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const l2 = Ln("border", Rn), a2 = Ln("borderTop", Rn), u2 = Ln("borderRight", Rn), c2 = Ln("borderBottom", Rn), d2 = Ln("borderLeft", Rn), f2 = Ln("borderColor"), p2 = Ln("borderTopColor"), h2 = Ln("borderRightColor"), m2 = Ln("borderBottomColor"), g2 = Ln("borderLeftColor"), y2 = Ln("outline", Rn), v2 = Ln("outlineColor"), lc = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = vl(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: jo(t, r)
    });
    return no(e, e.borderRadius, n);
  }
  return null;
};
lc.propTypes = {};
lc.filterProps = ["borderRadius"];
sc(l2, a2, u2, c2, d2, f2, p2, h2, m2, g2, lc, y2, v2);
const ac = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = vl(e.theme, "spacing", 8), n = (r) => ({
      gap: jo(t, r)
    });
    return no(e, e.gap, n);
  }
  return null;
};
ac.propTypes = {};
ac.filterProps = ["gap"];
const uc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = vl(e.theme, "spacing", 8), n = (r) => ({
      columnGap: jo(t, r)
    });
    return no(e, e.columnGap, n);
  }
  return null;
};
uc.propTypes = {};
uc.filterProps = ["columnGap"];
const cc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = vl(e.theme, "spacing", 8), n = (r) => ({
      rowGap: jo(t, r)
    });
    return no(e, e.rowGap, n);
  }
  return null;
};
cc.propTypes = {};
cc.filterProps = ["rowGap"];
const x2 = wt({
  prop: "gridColumn"
}), b2 = wt({
  prop: "gridRow"
}), S2 = wt({
  prop: "gridAutoFlow"
}), w2 = wt({
  prop: "gridAutoColumns"
}), C2 = wt({
  prop: "gridAutoRows"
}), k2 = wt({
  prop: "gridTemplateColumns"
}), E2 = wt({
  prop: "gridTemplateRows"
}), T2 = wt({
  prop: "gridTemplateAreas"
}), R2 = wt({
  prop: "gridArea"
});
sc(ac, uc, cc, x2, b2, S2, w2, C2, k2, E2, T2, R2);
function xi(e, t) {
  return t === "grey" ? t : e;
}
const P2 = wt({
  prop: "color",
  themeKey: "palette",
  transform: xi
}), I2 = wt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: xi
}), M2 = wt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: xi
});
sc(P2, I2, M2);
const $2 = nc;
function pn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const j2 = wt({
  prop: "width",
  transform: pn
}), ih = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || $2[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: pn(n)
      };
    };
    return no(e, e.maxWidth, t);
  }
  return null;
};
ih.filterProps = ["maxWidth"];
const A2 = wt({
  prop: "minWidth",
  transform: pn
}), N2 = wt({
  prop: "height",
  transform: pn
}), O2 = wt({
  prop: "maxHeight",
  transform: pn
}), B2 = wt({
  prop: "minHeight",
  transform: pn
});
wt({
  prop: "size",
  cssProperty: "width",
  transform: pn
});
wt({
  prop: "size",
  cssProperty: "height",
  transform: pn
});
const L2 = wt({
  prop: "boxSizing"
});
sc(j2, ih, A2, N2, O2, B2, L2);
const dc = {
  // borders
  border: {
    themeKey: "borders",
    transform: Rn
  },
  borderTop: {
    themeKey: "borders",
    transform: Rn
  },
  borderRight: {
    themeKey: "borders",
    transform: Rn
  },
  borderBottom: {
    themeKey: "borders",
    transform: Rn
  },
  borderLeft: {
    themeKey: "borders",
    transform: Rn
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
    transform: Rn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: lc
  },
  // palette
  color: {
    themeKey: "palette",
    transform: xi
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: xi
  },
  backgroundColor: {
    themeKey: "palette",
    transform: xi
  },
  // spacing
  p: {
    style: Et
  },
  pt: {
    style: Et
  },
  pr: {
    style: Et
  },
  pb: {
    style: Et
  },
  pl: {
    style: Et
  },
  px: {
    style: Et
  },
  py: {
    style: Et
  },
  padding: {
    style: Et
  },
  paddingTop: {
    style: Et
  },
  paddingRight: {
    style: Et
  },
  paddingBottom: {
    style: Et
  },
  paddingLeft: {
    style: Et
  },
  paddingX: {
    style: Et
  },
  paddingY: {
    style: Et
  },
  paddingInline: {
    style: Et
  },
  paddingInlineStart: {
    style: Et
  },
  paddingInlineEnd: {
    style: Et
  },
  paddingBlock: {
    style: Et
  },
  paddingBlockStart: {
    style: Et
  },
  paddingBlockEnd: {
    style: Et
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
    style: ac
  },
  rowGap: {
    style: cc
  },
  columnGap: {
    style: uc
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
    transform: pn
  },
  maxWidth: {
    style: ih
  },
  minWidth: {
    transform: pn
  },
  height: {
    transform: pn
  },
  maxHeight: {
    transform: pn
  },
  minHeight: {
    transform: pn
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
}, z2 = {};
function _2() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = z2,
      nested: o
    } = t, i = r.unstable_sxConfig ?? dc, s = {
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
      const d = r.breakpoints ?? ru, h = S1(d);
      for (const g in u) {
        const f = F2(u[g], r);
        if (f != null) {
          if (typeof f != "object") {
            fg(h, g, f, r, i);
            continue;
          }
          if (i[g]) {
            fg(h, g, f, r, i);
            continue;
          }
          i2(d, f) ? rc(h, t.theme, f, (v, w) => {
            h[v][g] = w;
          }) : (s.sx = f, h[g] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": lg(r, Ef(d, h))
      } : lg(r, Ef(d, h));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const Ao = _2();
function fg(e, t, n, r, o) {
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
    vi(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: u
  } = i, d = oc(r, s);
  rc(e, r, n, (h, g) => {
    const f = w1(d, u, g, t);
    a === !1 ? vi(h ? e[h] : e, f) : h ? e[h][a] = f : e[a] = f;
  });
}
function F2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function D2(e, t) {
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
function fc(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = v1(n), a = k1(o);
  let u = jt({
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
      ...GC,
      ...i
    }
  }, s);
  return u = KC(u), u.applyStyles = D2, u = t.reduce((d, h) => jt(d, h), u), u.unstable_sxConfig = {
    ...dc,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(h) {
    return Ao({
      sx: h,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function W2(e) {
  return Object.keys(e).length === 0;
}
function sh(e = null) {
  const t = y.useContext(gl);
  return !t || W2(t) ? e : t;
}
const U2 = fc();
function pc(e = U2) {
  return sh(e);
}
function dd(e) {
  const t = Zr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function E1({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = pc(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => dd(typeof s == "function" ? s(o) : s)) : i = dd(i)), /* @__PURE__ */ c.jsx(p1, {
    styles: i
  });
}
const pg = (e) => e, V2 = () => {
  let e = pg;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = pg;
    }
  };
}, T1 = V2();
function R1(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = R1(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ne() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = R1(e)) && (r && (r += " "), r += t);
  return r;
}
function H2(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = h1("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Ao);
  return /* @__PURE__ */ y.forwardRef(function(a, u) {
    const d = pc(n), {
      className: h,
      component: g = "div",
      ...f
    } = a;
    return /* @__PURE__ */ c.jsx(i, {
      as: g,
      ref: u,
      className: ne(h, o ? o(r) : r),
      theme: t && d[t] || d,
      ...f
    });
  });
}
const K2 = {
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
function he(e, t, n = "Mui") {
  const r = K2[t];
  return r ? `${n}-${r}` : `${T1.generate(e)}-${t}`;
}
function de(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = he(e, o, n);
  }), r;
}
function P1(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Zr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Zr(o.style));
  }), r;
}
const G2 = fc();
function fd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function wo(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Y2(e) {
  return e ? (t, n) => n[e] : null;
}
function Q2(e, t, n) {
  e.theme = b1(e.theme) ? n : e.theme[t] || e.theme;
}
function Ra(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => Ra(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? wo(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? wo(Zr(s), n) : s;
    }
    return I1(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? wo(Zr(r.style), n) : r.style : n ? wo(Zr(r), n) : r;
}
function I1(e, t, n = [], r = void 0) {
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
    }), n.push(r ? wo(Zr(l.style(o)), r) : l.style(o))) : n.push(r ? wo(Zr(l.style), r) : l.style);
  }
  return n;
}
function M1(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = G2,
    rootShouldForwardProp: r = fd,
    slotShouldForwardProp: o = fd
  } = e;
  function i(l) {
    Q2(l, t, n);
  }
  return (l, a = {}) => {
    FC(l, (k) => k.filter((T) => T !== Ao));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: h,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = Y2(J2(d)),
      ...v
    } = a, w = u && u.startsWith("Mui") || d ? "components" : "custom", C = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), m = g || !1;
    let p = fd;
    d === "Root" || d === "root" ? p = r : d ? p = o : q2(l) && (p = void 0);
    const x = h1(l, {
      shouldForwardProp: p,
      label: X2(),
      ...v
    }), S = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(R) {
          return Ra(R, k, R.theme.modularCssLayers ? w : void 0);
        };
      if (Er(k)) {
        const T = P1(k);
        return function(I) {
          return T.variants ? Ra(I, T, I.theme.modularCssLayers ? w : void 0) : I.theme.modularCssLayers ? wo(T.style, w) : T.style;
        };
      }
      return k;
    }, E = (...k) => {
      const T = [], R = k.map(S), I = [];
      if (T.push(i), u && f && I.push(function(b) {
        var B, $;
        const P = ($ = (B = b.theme.components) == null ? void 0 : B[u]) == null ? void 0 : $.styleOverrides;
        if (!P)
          return null;
        const O = {};
        for (const L in P)
          O[L] = Ra(b, P[L], b.theme.modularCssLayers ? "theme" : void 0);
        return f(b, O);
      }), u && !C && I.push(function(b) {
        var O, B;
        const j = b.theme, P = (B = (O = j == null ? void 0 : j.components) == null ? void 0 : O[u]) == null ? void 0 : B.variants;
        return P ? I1(b, P, [], b.theme.modularCssLayers ? "theme" : void 0) : null;
      }), m || I.push(Ao), Array.isArray(R[0])) {
        const N = R.shift(), b = new Array(T.length).fill(""), j = new Array(I.length).fill("");
        let P;
        P = [...b, ...N, ...j], P.raw = [...b, ...N.raw, ...j], T.unshift(P);
      }
      const A = [...T, ...R, ...I], M = x(...A);
      return l.muiName && (M.muiName = l.muiName), M;
    };
    return x.withConfig && (E.withConfig = x.withConfig), E;
  };
}
function X2(e, t) {
  return void 0;
}
function q2(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function J2(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Z2 = M1();
function Ii(e, t, n = !1) {
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
              const u = a, d = s[u], h = l[u];
              typeof d == "function" || typeof h == "function" ? r[i][u] = (...g) => Ii((typeof d == "function" ? d(...g) : d) ?? {}, (typeof h == "function" ? h(...g) : h) ?? {}, n) : r[i][u] = Ii(d ?? {}, h ?? {}, n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = ne(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function ek(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Ii(t.components[n].defaultProps, r);
}
function tk(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = pc(r);
  return o && (i = i[o] || i), ek({
    theme: i,
    name: n,
    props: t
  });
}
const ft = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function nk(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function lh(e, t = 0, n = 1) {
  return nk(e, t, n);
}
function rk(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ro(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ro(rk(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Ar(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(Ar(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const ok = (e) => {
  const t = ro(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, gs = (e, t) => {
  try {
    return ok(e);
  } catch {
    return e;
  }
};
function hc(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function $1(e) {
  e = ro(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, d = (u + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), hc({
    type: l,
    values: a
  });
}
function Tf(e) {
  e = ro(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ro($1(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ik(e, t) {
  const n = Tf(e), r = Tf(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ol(e, t) {
  return e = ro(e), t = lh(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, hc(e);
}
function po(e, t, n) {
  try {
    return ol(e, t);
  } catch {
    return e;
  }
}
function mc(e, t) {
  if (e = ro(e), t = lh(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return hc(e);
}
function Ye(e, t, n) {
  try {
    return mc(e, t);
  } catch {
    return e;
  }
}
function gc(e, t) {
  if (e = ro(e), t = lh(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return hc(e);
}
function Qe(e, t, n) {
  try {
    return gc(e, t);
  } catch {
    return e;
  }
}
function Rf(e, t = 0.15) {
  return Tf(e) > 0.5 ? mc(e, t) : gc(e, t);
}
function Kl(e, t, n) {
  try {
    return Rf(e, t);
  } catch {
    return e;
  }
}
const j1 = /* @__PURE__ */ y.createContext(null);
function ah() {
  return y.useContext(j1);
}
const sk = typeof Symbol == "function" && Symbol.for, lk = sk ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ak(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function uk(e) {
  const {
    children: t,
    theme: n
  } = e, r = ah(), o = y.useMemo(() => {
    const i = r === null ? {
      ...n
    } : ak(r, n);
    return i != null && (i[lk] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ c.jsx(j1.Provider, {
    value: o,
    children: t
  });
}
const A1 = /* @__PURE__ */ y.createContext();
function ck({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(A1.Provider, {
    value: e ?? !0,
    ...t
  });
}
const yc = () => y.useContext(A1) ?? !1, N1 = /* @__PURE__ */ y.createContext(void 0);
function dk({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ c.jsx(N1.Provider, {
    value: e,
    children: t
  });
}
function fk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Ii(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Ii(o, r, t.components.mergeClassNameAndStyle) : r;
}
function pk({
  props: e,
  name: t
}) {
  const n = y.useContext(N1);
  return fk({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let hg = 0;
function hk(e) {
  const [t, n] = y.useState(e), r = e || t;
  return y.useEffect(() => {
    t == null && (hg += 1, n(`mui-${hg}`));
  }, [t]), r;
}
const mk = {
  ...$a
}, mg = mk.useId;
function Nr(e) {
  if (mg !== void 0) {
    const t = mg();
    return e ?? t;
  }
  return hk(e);
}
function gk(e) {
  const t = sh(), n = Nr() || "", {
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
      const u = document.createElement("style");
      u.setAttribute("data-mui-layer-order", n), u.textContent = o, i.prepend(u);
    } else
      (a = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || a.remove();
  }, [o, n]), o ? /* @__PURE__ */ c.jsx(E1, {
    styles: o
  }) : null;
}
const gg = {};
function yg(e, t, n, r = !1) {
  return y.useMemo(() => {
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
function O1(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = sh(gg), i = ah() || gg, s = yg(r, o, n), l = yg(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", u = gk(s);
  return /* @__PURE__ */ c.jsx(uk, {
    theme: l,
    children: /* @__PURE__ */ c.jsx(gl.Provider, {
      value: s,
      children: /* @__PURE__ */ c.jsx(ck, {
        value: a,
        children: /* @__PURE__ */ c.jsxs(dk, {
          value: r ? s[r].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const vg = {
  theme: void 0
};
function yk(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (vg.theme = o.theme, i = P1(e(vg)), t = i, n = o.theme), i;
  };
}
const uh = "mode", ch = "color-scheme", vk = "data-color-scheme";
function xk(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = uh,
    colorSchemeStorageKey: i = ch,
    attribute: s = vk,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let u = "", d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const g = d.substring(1);
    u += `${l}.classList.remove('${g}'.replace('%s', light), '${g}'.replace('%s', dark));
      ${l}.classList.add('${g}'.replace('%s', colorScheme));`;
  }
  const h = d.match(/\[([^[\]]+)\]/);
  if (h) {
    const [g, f] = h[1].split("=");
    f || (u += `${l}.removeAttribute('${g}'.replace('%s', light));
      ${l}.removeAttribute('${g}'.replace('%s', dark));`), u += `
      ${l}.setAttribute('${g}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
  } else d !== ".%s" && (u += `${l}.setAttribute('${d}', colorScheme);`);
  return /* @__PURE__ */ c.jsx("script", {
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
function bk() {
}
const Sk = ({
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
      return bk;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function pd() {
}
function xg(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function B1(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function wk(e) {
  return B1(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Ck(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = uh,
    colorSchemeStorageKey: s = ch,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = Sk,
    noSsr: u = !1
  } = e, d = o.join(","), h = o.length > 1, g = y.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), f = y.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), v = y.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [w, C] = y.useState(() => {
    const R = (g == null ? void 0 : g.get(t)) || t, I = (f == null ? void 0 : f.get(n)) || n, A = (v == null ? void 0 : v.get(r)) || r;
    return {
      mode: R,
      systemMode: xg(R),
      lightColorScheme: I,
      darkColorScheme: A
    };
  }), [m, p] = y.useState(u || !h);
  y.useEffect(() => {
    p(!0);
  }, []);
  const x = wk(w), S = y.useCallback((R) => {
    C((I) => {
      if (R === I.mode)
        return I;
      const A = R ?? t;
      return g == null || g.set(A), {
        ...I,
        mode: A,
        systemMode: xg(A)
      };
    });
  }, [g, t]), E = y.useCallback((R) => {
    R ? typeof R == "string" ? R && !d.includes(R) ? console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`) : C((I) => {
      const A = {
        ...I
      };
      return B1(I, (M) => {
        M === "light" && (f == null || f.set(R), A.lightColorScheme = R), M === "dark" && (v == null || v.set(R), A.darkColorScheme = R);
      }), A;
    }) : C((I) => {
      const A = {
        ...I
      }, M = R.light === null ? n : R.light, N = R.dark === null ? r : R.dark;
      return M && (d.includes(M) ? (A.lightColorScheme = M, f == null || f.set(M)) : console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`)), N && (d.includes(N) ? (A.darkColorScheme = N, v == null || v.set(N)) : console.error(`\`${N}\` does not exist in \`theme.colorSchemes\`.`)), A;
    }) : C((I) => (f == null || f.set(n), v == null || v.set(r), {
      ...I,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [d, f, v, n, r]), k = y.useCallback((R) => {
    w.mode === "system" && C((I) => {
      const A = R != null && R.matches ? "dark" : "light";
      return I.systemMode === A ? I : {
        ...I,
        systemMode: A
      };
    });
  }, [w.mode]), T = y.useRef(k);
  return T.current = k, y.useEffect(() => {
    if (typeof window.matchMedia != "function" || !h)
      return;
    const R = (...A) => T.current(...A), I = window.matchMedia("(prefers-color-scheme: dark)");
    return I.addListener(R), R(I), () => {
      I.removeListener(R);
    };
  }, [h]), y.useEffect(() => {
    if (h) {
      const R = (g == null ? void 0 : g.subscribe((M) => {
        (!M || ["light", "dark", "system"].includes(M)) && S(M || t);
      })) || pd, I = (f == null ? void 0 : f.subscribe((M) => {
        (!M || d.match(M)) && E({
          light: M
        });
      })) || pd, A = (v == null ? void 0 : v.subscribe((M) => {
        (!M || d.match(M)) && E({
          dark: M
        });
      })) || pd;
      return () => {
        R(), I(), A();
      };
    }
  }, [E, S, d, t, l, h, g, f, v]), {
    ...w,
    mode: m ? w.mode : void 0,
    systemMode: m ? w.systemMode : void 0,
    colorScheme: m ? x : void 0,
    setMode: S,
    setColorScheme: E
  };
}
const kk = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Ek(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = uh,
    colorSchemeStorageKey: o = ch,
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
  }, u = /* @__PURE__ */ y.createContext(void 0), d = () => y.useContext(u) || a, h = {}, g = {};
  function f(m) {
    var Ge, Oe, Pe, at;
    const {
      children: p,
      theme: x,
      modeStorageKey: S = r,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: k = i,
      storageManager: T,
      storageWindow: R = typeof window > "u" ? void 0 : window,
      documentNode: I = typeof document > "u" ? void 0 : document,
      colorSchemeNode: A = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: M = !1,
      disableStyleSheetGeneration: N = !1,
      defaultMode: b = "system",
      forceThemeRerender: j = !1,
      noSsr: P
    } = m, O = y.useRef(!1), B = ah(), $ = y.useContext(u), L = !!$ && !M, D = y.useMemo(() => x || (typeof n == "function" ? n() : n), [x]), U = D[t], W = U || D, {
      colorSchemes: Q = h,
      components: K = g,
      cssVarPrefix: q
    } = W, G = Object.keys(Q).filter((re) => !!Q[re]).join(","), oe = y.useMemo(() => G.split(","), [G]), F = typeof s == "string" ? s : s.light, ie = typeof s == "string" ? s : s.dark, ee = Q[F] && Q[ie] ? b : ((Oe = (Ge = Q[W.defaultColorScheme]) == null ? void 0 : Ge.palette) == null ? void 0 : Oe.mode) || ((Pe = W.palette) == null ? void 0 : Pe.mode), {
      mode: Ee,
      setMode: be,
      systemMode: ue,
      lightColorScheme: ce,
      darkColorScheme: ve,
      colorScheme: Be,
      setColorScheme: ke
    } = Ck({
      supportedColorSchemes: oe,
      defaultLightColorScheme: F,
      defaultDarkColorScheme: ie,
      modeStorageKey: S,
      colorSchemeStorageKey: E,
      defaultMode: ee,
      storageManager: T,
      storageWindow: R,
      noSsr: P
    });
    let $e = Ee, fe = Be;
    L && ($e = $.mode, fe = $.colorScheme);
    let ye = fe || W.defaultColorScheme;
    W.vars && !j && (ye = W.defaultColorScheme);
    const Ne = y.useMemo(() => {
      var ze;
      const re = ((ze = W.generateThemeVars) == null ? void 0 : ze.call(W)) || W.vars, le = {
        ...W,
        components: K,
        colorSchemes: Q,
        cssVarPrefix: q,
        vars: re
      };
      if (typeof le.generateSpacing == "function" && (le.spacing = le.generateSpacing()), ye) {
        const De = Q[ye];
        De && typeof De == "object" && Object.keys(De).forEach((z) => {
          De[z] && typeof De[z] == "object" ? le[z] = {
            ...le[z],
            ...De[z]
          } : le[z] = De[z];
        });
      }
      return l ? l(le) : le;
    }, [W, ye, K, Q, q]), Ke = W.colorSchemeSelector;
    ft(() => {
      if (fe && A && Ke && Ke !== "media") {
        const re = Ke;
        let le = Ke;
        if (re === "class" && (le = ".%s"), re === "data" && (le = "[data-%s]"), re != null && re.startsWith("data-") && !re.includes("%s") && (le = `[${re}="%s"]`), le.startsWith("."))
          A.classList.remove(...oe.map((ze) => le.substring(1).replace("%s", ze))), A.classList.add(le.substring(1).replace("%s", fe));
        else {
          const ze = le.replace("%s", fe).match(/\[([^\]]+)\]/);
          if (ze) {
            const [De, z] = ze[1].split("=");
            z || oe.forEach((X) => {
              A.removeAttribute(De.replace(fe, X));
            }), A.setAttribute(De, z ? z.replace(/"|'/g, "") : "");
          } else
            A.setAttribute(le, fe);
        }
      }
    }, [fe, Ke, A, oe]), y.useEffect(() => {
      let re;
      if (k && O.current && I) {
        const le = I.createElement("style");
        le.appendChild(I.createTextNode(kk)), I.head.appendChild(le), window.getComputedStyle(I.body), re = setTimeout(() => {
          I.head.removeChild(le);
        }, 1);
      }
      return () => {
        clearTimeout(re);
      };
    }, [fe, k, I]), y.useEffect(() => (O.current = !0, () => {
      O.current = !1;
    }), []);
    const Ze = y.useMemo(() => ({
      allColorSchemes: oe,
      colorScheme: fe,
      darkColorScheme: ve,
      lightColorScheme: ce,
      mode: $e,
      setColorScheme: ke,
      setMode: be,
      systemMode: ue
    }), [oe, fe, ve, ce, $e, ke, be, ue, Ne.colorSchemeSelector]);
    let vt = !0;
    (N || W.cssVariables === !1 || L && (B == null ? void 0 : B.cssVarPrefix) === q) && (vt = !1);
    const Ct = /* @__PURE__ */ c.jsxs(y.Fragment, {
      children: [/* @__PURE__ */ c.jsx(O1, {
        themeId: U ? t : void 0,
        theme: Ne,
        children: p
      }), vt && /* @__PURE__ */ c.jsx(p1, {
        styles: ((at = Ne.generateStyleSheets) == null ? void 0 : at.call(Ne)) || []
      })]
    });
    return L ? Ct : /* @__PURE__ */ c.jsx(u.Provider, {
      value: Ze,
      children: Ct
    });
  }
  const v = typeof s == "string" ? s : s.light, w = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: d,
    getInitColorSchemeScript: (m) => xk({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: v,
      defaultDarkColorScheme: w,
      modeStorageKey: r,
      ...m
    })
  };
}
function Tk(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Rk = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), bg = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (Rk.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, Pk = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, Ik = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function hd(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return Pk(
    e,
    (l, a, u) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, h = Ik(l, a);
        Object.assign(o, {
          [d]: h
        }), bg(i, l, `var(${d})`, u), bg(s, l, `var(${d}, ${h})`, u);
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
function Mk(e, t = {}) {
  const {
    getSelector: n = m,
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
    css: h,
    varsWithDefaults: g
  } = hd(u, t);
  let f = g;
  const v = {}, {
    [a]: w,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([S, E]) => {
    const {
      vars: k,
      css: T,
      varsWithDefaults: R
    } = hd(E, t);
    f = jt(f, R), v[S] = {
      css: T,
      vars: k
    };
  }), w) {
    const {
      css: S,
      vars: E,
      varsWithDefaults: k
    } = hd(w, t);
    f = jt(f, k), v[a] = {
      css: S,
      vars: E
    };
  }
  function m(S, E) {
    var T, R;
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), S) {
      if (k === "media")
        return e.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((R = (T = s[S]) == null ? void 0 : T.palette) == null ? void 0 : R.mode) || S})`]: {
            ":root": E
          }
        };
      if (k)
        return e.defaultColorScheme === S ? `:root, ${k.replace("%s", String(S))}` : k.replace("%s", String(S));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let S = {
        ...d
      };
      return Object.entries(v).forEach(([, {
        vars: E
      }]) => {
        S = jt(S, E);
      }), S;
    },
    generateStyleSheets: () => {
      var I, A;
      const S = [], E = e.defaultColorScheme || "light";
      function k(M, N) {
        Object.keys(N).length && S.push(typeof M == "string" ? {
          [M]: {
            ...N
          }
        } : M);
      }
      k(n(void 0, {
        ...h
      }), h);
      const {
        [E]: T,
        ...R
      } = v;
      if (T) {
        const {
          css: M
        } = T, N = (A = (I = s[E]) == null ? void 0 : I.palette) == null ? void 0 : A.mode, b = !r && N ? {
          colorScheme: N,
          ...M
        } : {
          ...M
        };
        k(n(E, {
          ...b
        }), b);
      }
      return Object.entries(R).forEach(([M, {
        css: N
      }]) => {
        var P, O;
        const b = (O = (P = s[M]) == null ? void 0 : P.palette) == null ? void 0 : O.mode, j = !r && b ? {
          colorScheme: b,
          ...N
        } : {
          ...N
        };
        k(n(M, {
          ...j
        }), j);
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
function $k(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function me(e, t, n = void 0) {
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
function md(e, t) {
  var n, r, o;
  return /* @__PURE__ */ y.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const jk = fc(), Ak = Z2("div", {
  name: "MuiStack",
  slot: "Root"
});
function Nk(e) {
  return tk({
    props: e,
    name: "MuiStack",
    defaultTheme: jk
  });
}
function Ok(e, t) {
  const n = y.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ y.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const Bk = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Lk = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...no({
      theme: t
    }, cd({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = ic(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = cd({
      values: e.direction,
      base: o
    }), s = cd({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, d) => {
      if (!i[a]) {
        const g = u > 0 ? i[d[u - 1]] : "column";
        i[a] = g;
      }
    }), n = jt(n, no({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: jo(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Bk(u ? i[u] : e.direction)}`]: jo(r, a)
      }
    }));
  }
  return n = r2(t.breakpoints, n), n;
};
function zk(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Ak,
    useThemeProps: n = Nk,
    componentName: r = "MuiStack"
  } = e, o = () => me({
    root: ["root"]
  }, (a) => he(r, a), {}), i = t(Lk);
  return /* @__PURE__ */ y.forwardRef(function(a, u) {
    const d = n(a), {
      component: h = "div",
      direction: g = "column",
      spacing: f = 0,
      divider: v,
      children: w,
      className: C,
      useFlexGap: m = !1,
      ...p
    } = d, x = {
      direction: g,
      spacing: f,
      useFlexGap: m
    }, S = o();
    return /* @__PURE__ */ c.jsx(i, {
      as: h,
      ownerState: x,
      ref: u,
      className: ne(S.root, C),
      ...p,
      children: v ? Ok(w, v) : w
    });
  });
}
function L1() {
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
      paper: Js.white,
      default: Js.white
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
const z1 = L1();
function _1() {
  return {
    text: {
      primary: Js.white,
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
      active: Js.white,
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
const Pf = _1();
function Sg(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = gc(e.main, o) : t === "dark" && (e.dark = mc(e.main, i)));
}
function wg(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function _k(e = "light") {
  return e === "dark" ? {
    main: Go[200],
    light: Go[50],
    dark: Go[400]
  } : {
    main: Go[700],
    light: Go[400],
    dark: Go[800]
  };
}
function Fk(e = "light") {
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
function Dk(e = "light") {
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
function Wk(e = "light") {
  return e === "dark" ? {
    main: Yo[400],
    light: Yo[300],
    dark: Yo[700]
  } : {
    main: Yo[700],
    light: Yo[500],
    dark: Yo[900]
  };
}
function Uk(e = "light") {
  return e === "dark" ? {
    main: Qo[400],
    light: Qo[300],
    dark: Qo[700]
  } : {
    main: Qo[800],
    light: Qo[500],
    dark: Qo[900]
  };
}
function Vk(e = "light") {
  return e === "dark" ? {
    main: ts[400],
    light: ts[300],
    dark: ts[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ts[500],
    dark: ts[900]
  };
}
function Hk(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function dh(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || _k(t), l = e.secondary || Fk(t), a = e.error || Dk(t), u = e.info || Wk(t), d = e.success || Uk(t), h = e.warning || Vk(t);
  function g(C) {
    return o ? Hk(C) : ik(C, Pf.text.primary) >= n ? Pf.text.primary : z1.text.primary;
  }
  const f = ({
    color: C,
    name: m,
    mainShade: p = 500,
    lightShade: x = 300,
    darkShade: S = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[p] && (C.main = C[p]), !C.hasOwnProperty("main"))
      throw new Error(Ar(11, m ? ` (${m})` : "", p));
    if (typeof C.main != "string")
      throw new Error(Ar(12, m ? ` (${m})` : "", JSON.stringify(C.main)));
    return o ? (wg(o, C, "light", x, r), wg(o, C, "dark", S, r)) : (Sg(C, "light", x, r), Sg(C, "dark", S, r)), C.contrastText || (C.contrastText = g(C.main)), C;
  };
  let v;
  return t === "light" ? v = L1() : t === "dark" && (v = _1()), jt({
    // A collection of common colors.
    common: {
      ...Js
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
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Bw,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...v
  }, i);
}
const xl = "--_focusVisible-offset", vc = "--_focusVisible-behavior", F1 = "--_focusVisible-shadow", Kk = `var(${xl}, 1)`, Gk = `var(${vc}, )`, Yk = {
  [xl]: 1,
  [vc]: "initial"
  // reverts the var to guaranteed-invalid so `var(--_focusVisible-behavior, )` falls back to empty — there is no explicit `outset` keyword.
};
function D1(e) {
  return {
    [F1]: e
  };
}
function W1(e) {
  return {
    [xl]: -e,
    [vc]: "inset"
  };
}
function U1(e, t) {
  return t.reduce((n, r) => r && "focusVisible" in r ? jt(n, {
    focusVisible: r.focusVisible
  }) : n, {
    focusVisible: e
  }).focusVisible;
}
function Qk(e) {
  return e != null && typeof e == "object" && typeof e.outlineOffset == "string" && e.outlineOffset.includes(xl);
}
function fh(e, t) {
  return Xk({
    outlineStyle: "solid",
    outlineColor: t,
    outlineWidth: 2,
    outlineOffset: 2,
    // invisible shadow for parent component with solid background (AppBar, Snackbar, Alert) can control the ring color.
    boxShadow: `var(${F1}, 0 0)`,
    ...e === !0 ? null : e
  });
}
function Xk(e) {
  const t = e.outlineOffset ?? 0;
  if (typeof t != "string" || !t.includes(xl)) {
    const r = typeof t == "number" ? `${t}px` : t;
    e.outlineOffset = `calc(${Kk} * ${r})`;
  }
  const n = /* @__PURE__ */ new Set(["none", "initial", "inherit", "unset", "revert", "revert-layer"]);
  return typeof e.boxShadow == "string" && !n.has(e.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e.boxShadow) && !e.boxShadow.includes(vc) && (e.boxShadow = `${Gk} ${e.boxShadow}`), e;
}
function qk(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Jk(e, t) {
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
function Zk(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Cg = {
  textTransform: "uppercase"
}, kg = '"Roboto", "Helvetica", "Arial", sans-serif';
function V1(e, t) {
  const {
    fontFamily: n = kg,
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
    ...h
  } = typeof t == "function" ? t(e) : t, g = r / 14, f = d || ((C) => `${C / a * g}rem`), v = (C, m, p, x, S) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: f(m),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: p,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === kg ? {
      letterSpacing: `${Zk(x / m)}em`
    } : {},
    ...S,
    ...u
  }), w = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(i, 48, 1.167, 0),
    h4: v(i, 34, 1.235, 0.25),
    h5: v(i, 24, 1.334, 0),
    h6: v(s, 20, 1.6, 0.15),
    subtitle1: v(i, 16, 1.75, 0.15),
    subtitle2: v(s, 14, 1.57, 0.1),
    body1: v(i, 16, 1.5, 0.15),
    body2: v(i, 14, 1.43, 0.15),
    button: v(s, 14, 1.75, 0.4, Cg),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, Cg),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return jt({
    htmlFontSize: a,
    pxToRem: f,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...w
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const eE = 0.2, tE = 0.14, nE = 0.12;
function st(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${eE})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${tE})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${nE})`].join(",");
}
const rE = ["none", st(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), st(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), st(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), st(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), st(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), st(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), st(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), st(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), st(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), st(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), st(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), st(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), st(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), st(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), st(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), st(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), st(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), st(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), st(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), st(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), st(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), st(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), st(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), st(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], oE = ["all"], iE = {}, sE = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, lE = {
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
function Eg(e) {
  return `${Math.round(e)}ms`;
}
function aE(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function uE(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...sE,
    ...t.easing
  }, r = {
    ...lE,
    ...t.duration
  }, o = (s = oE, l = iE) => {
    const {
      duration: a = r.standard,
      easing: u = n.easeInOut,
      delay: d = 0,
      ...h
    } = l;
    return (Array.isArray(s) ? s : [s]).map((g) => `${g} ${typeof a == "string" ? a : Eg(a)} ${u} ${typeof d == "string" ? d : Eg(d)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: aE,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const cE = {};
function dE(e = cE) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const fE = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function pE(e) {
  return Er(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function H1(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !pE(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : Er(l) && (r[s] = {
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
function Tg(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const hE = (e) => {
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
function mE(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : ol(t, hE(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Tg(n)})` : gc(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Tg(n)})` : mc(t, n);
    }
  });
}
function If(e = {}, ...t) {
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
    ...h
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Ar(22));
  const g = dh({
    ...i,
    colorSpace: d
  }), f = fc(e);
  let v = jt(f, {
    mixins: Jk(f.breakpoints, r),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: rE.slice(),
    typography: V1(g, a),
    motion: dE(s),
    transitions: uE(l),
    zIndex: {
      ...fE
    }
  });
  return v = jt(v, h), v = t.reduce((w, C) => jt(w, C), v), delete v.transitions.reducedMotion, v.focusVisible != null && v.focusVisible !== !1 && (v.focusVisible = fh(v.focusVisible, v.palette.primary.main)), v.unstable_sxConfig = {
    ...dc,
    ...h == null ? void 0 : h.unstable_sxConfig
  }, v.unstable_sx = function(C) {
    return Ao({
      sx: C,
      theme: this
    });
  }, v.toRuntimeSource = H1, mE(v), v;
}
function Mf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const gE = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Mf(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function K1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function G1(e) {
  return e === "dark" ? gE : [];
}
function yE(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = dh({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...K1(s.mode),
      ...n
    },
    overlays: r || G1(s.mode),
    ...i
  };
}
function vE(e) {
  var t;
  return e[0] === "motion" || // Keep `focusVisible` inline: its values reference the per-component private vars
  // (`--_focusVisible-offset`/`-behavior`). Hoisted to a `:root` var they resolve where those
  // vars are unset, silently breaking the inner-ring inset.
  e[0] === "focusVisible" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const xE = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], bE = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return xE(e.cssVarPrefix).forEach((l) => {
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
function SE(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function _(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function ys(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : $1(e);
}
function yr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = gs(ys(e[t])));
}
function wE(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const er = (e) => {
  try {
    return e();
  } catch {
  }
}, CE = (e = "mui") => Tk(e);
function gd(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = yE({
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
  } = If({
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
      ...K1(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || G1(i)
  }, l;
}
function kE(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = vE,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, h = Object.keys(n)[0], g = r || (n.light && h !== "light" ? "light" : h), f = CE(i), {
    [g]: v,
    light: w,
    dark: C,
    ...m
  } = n, p = {
    ...m
  };
  let x = v;
  if ((g === "dark" && !("dark" in n) || g === "light" && !("light" in n)) && (x = !0), !x)
    throw new Error(Ar(21, g));
  let S;
  s && (S = "oklch");
  const E = gd(S, p, x, d, g);
  w && !p.light && gd(S, p, w, void 0, "light"), C && !p.dark && gd(S, p, C, void 0, "dark");
  let k = {
    defaultColorScheme: g,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: f,
    colorSchemes: p,
    font: {
      ...qk(E.typography),
      ...E.font
    },
    spacing: wE(d.spacing)
  };
  Object.keys(k.colorSchemes).forEach((N) => {
    const b = k.colorSchemes[N].palette, j = (O) => {
      const B = O.split("-"), $ = B[1], L = B[2];
      return f(O, b[$][L]);
    };
    b.mode === "light" && (_(b.common, "background", "#fff"), _(b.common, "onBackground", "#000")), b.mode === "dark" && (_(b.common, "background", "#000"), _(b.common, "onBackground", "#fff"));
    function P(O, B, $) {
      if (S) {
        let L;
        return O === po && (L = `transparent ${((1 - $) * 100).toFixed(0)}%`), O === Ye && (L = `#000 ${($ * 100).toFixed(0)}%`), O === Qe && (L = `#fff ${($ * 100).toFixed(0)}%`), `color-mix(in ${S}, ${B}, ${L})`;
      }
      return O(B, $);
    }
    if (SE(b, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), b.mode === "light") {
      _(b.Alert, "errorColor", P(Ye, s ? f("palette-error-light") : b.error.light, 0.6)), _(b.Alert, "infoColor", P(Ye, s ? f("palette-info-light") : b.info.light, 0.6)), _(b.Alert, "successColor", P(Ye, s ? f("palette-success-light") : b.success.light, 0.6)), _(b.Alert, "warningColor", P(Ye, s ? f("palette-warning-light") : b.warning.light, 0.6)), _(b.Alert, "errorFilledBg", j("palette-error-main")), _(b.Alert, "infoFilledBg", j("palette-info-main")), _(b.Alert, "successFilledBg", j("palette-success-main")), _(b.Alert, "warningFilledBg", j("palette-warning-main")), _(b.Alert, "errorFilledColor", er(() => b.getContrastText(b.error.main))), _(b.Alert, "infoFilledColor", er(() => b.getContrastText(b.info.main))), _(b.Alert, "successFilledColor", er(() => b.getContrastText(b.success.main))), _(b.Alert, "warningFilledColor", er(() => b.getContrastText(b.warning.main))), _(b.Alert, "errorStandardBg", P(Qe, s ? f("palette-error-light") : b.error.light, 0.9)), _(b.Alert, "infoStandardBg", P(Qe, s ? f("palette-info-light") : b.info.light, 0.9)), _(b.Alert, "successStandardBg", P(Qe, s ? f("palette-success-light") : b.success.light, 0.9)), _(b.Alert, "warningStandardBg", P(Qe, s ? f("palette-warning-light") : b.warning.light, 0.9)), _(b.Alert, "errorIconColor", j("palette-error-main")), _(b.Alert, "infoIconColor", j("palette-info-main")), _(b.Alert, "successIconColor", j("palette-success-main")), _(b.Alert, "warningIconColor", j("palette-warning-main")), _(b.AppBar, "defaultBg", j("palette-grey-100")), _(b.Avatar, "defaultBg", j("palette-grey-400")), _(b.Button, "inheritContainedBg", j("palette-grey-300")), _(b.Button, "inheritContainedHoverBg", j("palette-grey-A100")), _(b.Chip, "defaultBorder", j("palette-grey-400")), _(b.Chip, "defaultAvatarColor", j("palette-grey-700")), _(b.Chip, "defaultIconColor", j("palette-grey-700")), _(b.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), _(b.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), _(b.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), _(b.LinearProgress, "primaryBg", P(Qe, s ? f("palette-primary-main") : b.primary.main, 0.62)), _(b.LinearProgress, "secondaryBg", P(Qe, s ? f("palette-secondary-main") : b.secondary.main, 0.62)), _(b.LinearProgress, "errorBg", P(Qe, s ? f("palette-error-main") : b.error.main, 0.62)), _(b.LinearProgress, "infoBg", P(Qe, s ? f("palette-info-main") : b.info.main, 0.62)), _(b.LinearProgress, "successBg", P(Qe, s ? f("palette-success-main") : b.success.main, 0.62)), _(b.LinearProgress, "warningBg", P(Qe, s ? f("palette-warning-light") : b.warning.main, 0.62)), _(b.Skeleton, "bg", S ? P(po, s ? f("palette-text-primary") : b.text.primary, 0.11) : `rgba(${j("palette-text-primaryChannel")} / 0.11)`), _(b.Slider, "primaryTrack", P(Qe, s ? f("palette-primary-main") : b.primary.main, 0.62)), _(b.Slider, "secondaryTrack", P(Qe, s ? f("palette-secondary-main") : b.secondary.main, 0.62)), _(b.Slider, "errorTrack", P(Qe, s ? f("palette-error-main") : b.error.main, 0.62)), _(b.Slider, "infoTrack", P(Qe, s ? f("palette-info-main") : b.info.main, 0.62)), _(b.Slider, "successTrack", P(Qe, s ? f("palette-success-main") : b.success.main, 0.62)), _(b.Slider, "warningTrack", P(Qe, s ? f("palette-warning-main") : b.warning.main, 0.62));
      const O = S ? P(Ye, s ? f("palette-background-default") : b.background.default, 0.6825) : Kl(b.background.default, 0.8);
      _(b.SnackbarContent, "bg", O), _(b.SnackbarContent, "color", er(() => S ? Pf.text.primary : b.getContrastText(O))), _(b.SpeedDialAction, "fabHoverBg", Kl(b.background.paper, 0.15)), _(b.StepConnector, "border", j("palette-grey-400")), _(b.StepContent, "border", j("palette-grey-400")), _(b.Switch, "defaultColor", j("palette-common-white")), _(b.Switch, "defaultDisabledColor", j("palette-grey-100")), _(b.Switch, "primaryDisabledColor", P(Qe, s ? f("palette-primary-main") : b.primary.main, 0.62)), _(b.Switch, "secondaryDisabledColor", P(Qe, s ? f("palette-secondary-main") : b.secondary.main, 0.62)), _(b.Switch, "errorDisabledColor", P(Qe, s ? f("palette-error-main") : b.error.main, 0.62)), _(b.Switch, "infoDisabledColor", P(Qe, s ? f("palette-info-main") : b.info.main, 0.62)), _(b.Switch, "successDisabledColor", P(Qe, s ? f("palette-success-main") : b.success.main, 0.62)), _(b.Switch, "warningDisabledColor", P(Qe, s ? f("palette-warning-main") : b.warning.main, 0.62)), _(b.TableCell, "border", P(Qe, po(s ? f("palette-divider") : b.divider, 1), 0.88)), _(b.Tooltip, "bg", P(po, s ? f("palette-grey-700") : b.grey[700], 0.92));
    }
    if (b.mode === "dark") {
      _(b.Alert, "errorColor", P(Qe, s ? f("palette-error-light") : b.error.light, 0.6)), _(b.Alert, "infoColor", P(Qe, s ? f("palette-info-light") : b.info.light, 0.6)), _(b.Alert, "successColor", P(Qe, s ? f("palette-success-light") : b.success.light, 0.6)), _(b.Alert, "warningColor", P(Qe, s ? f("palette-warning-light") : b.warning.light, 0.6)), _(b.Alert, "errorFilledBg", j("palette-error-dark")), _(b.Alert, "infoFilledBg", j("palette-info-dark")), _(b.Alert, "successFilledBg", j("palette-success-dark")), _(b.Alert, "warningFilledBg", j("palette-warning-dark")), _(b.Alert, "errorFilledColor", er(() => b.getContrastText(b.error.dark))), _(b.Alert, "infoFilledColor", er(() => b.getContrastText(b.info.dark))), _(b.Alert, "successFilledColor", er(() => b.getContrastText(b.success.dark))), _(b.Alert, "warningFilledColor", er(() => b.getContrastText(b.warning.dark))), _(b.Alert, "errorStandardBg", P(Ye, s ? f("palette-error-light") : b.error.light, 0.9)), _(b.Alert, "infoStandardBg", P(Ye, s ? f("palette-info-light") : b.info.light, 0.9)), _(b.Alert, "successStandardBg", P(Ye, s ? f("palette-success-light") : b.success.light, 0.9)), _(b.Alert, "warningStandardBg", P(Ye, s ? f("palette-warning-light") : b.warning.light, 0.9)), _(b.Alert, "errorIconColor", j("palette-error-main")), _(b.Alert, "infoIconColor", j("palette-info-main")), _(b.Alert, "successIconColor", j("palette-success-main")), _(b.Alert, "warningIconColor", j("palette-warning-main")), _(b.AppBar, "defaultBg", j("palette-grey-900")), _(b.AppBar, "darkBg", j("palette-background-paper")), _(b.AppBar, "darkColor", j("palette-text-primary")), _(b.Avatar, "defaultBg", j("palette-grey-600")), _(b.Button, "inheritContainedBg", j("palette-grey-800")), _(b.Button, "inheritContainedHoverBg", j("palette-grey-700")), _(b.Chip, "defaultBorder", j("palette-grey-700")), _(b.Chip, "defaultAvatarColor", j("palette-grey-300")), _(b.Chip, "defaultIconColor", j("palette-grey-300")), _(b.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), _(b.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), _(b.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), _(b.LinearProgress, "primaryBg", P(Ye, s ? f("palette-primary-main") : b.primary.main, 0.5)), _(b.LinearProgress, "secondaryBg", P(Ye, s ? f("palette-secondary-main") : b.secondary.main, 0.5)), _(b.LinearProgress, "errorBg", P(Ye, s ? f("palette-error-main") : b.error.main, 0.5)), _(b.LinearProgress, "infoBg", P(Ye, s ? f("palette-info-main") : b.info.main, 0.5)), _(b.LinearProgress, "successBg", P(Ye, s ? f("palette-success-main") : b.success.main, 0.5)), _(b.LinearProgress, "warningBg", P(Ye, s ? f("palette-warning-main") : b.warning.main, 0.5)), _(b.Skeleton, "bg", S ? P(po, s ? f("palette-text-primary") : b.text.primary, 0.13) : `rgba(${j("palette-text-primaryChannel")} / 0.13)`), _(b.Slider, "primaryTrack", P(Ye, s ? f("palette-primary-main") : b.primary.main, 0.5)), _(b.Slider, "secondaryTrack", P(Ye, s ? f("palette-secondary-main") : b.secondary.main, 0.5)), _(b.Slider, "errorTrack", P(Ye, s ? f("palette-error-main") : b.error.main, 0.5)), _(b.Slider, "infoTrack", P(Ye, s ? f("palette-info-main") : b.info.main, 0.5)), _(b.Slider, "successTrack", P(Ye, s ? f("palette-success-main") : b.success.main, 0.5)), _(b.Slider, "warningTrack", P(Ye, s ? f("palette-warning-light") : b.warning.main, 0.5));
      const O = S ? P(Qe, s ? f("palette-background-default") : b.background.default, 0.985) : Kl(b.background.default, 0.98);
      _(b.SnackbarContent, "bg", O), _(b.SnackbarContent, "color", er(() => S ? z1.text.primary : b.getContrastText(O))), _(b.SpeedDialAction, "fabHoverBg", Kl(b.background.paper, 0.15)), _(b.StepConnector, "border", j("palette-grey-600")), _(b.StepContent, "border", j("palette-grey-600")), _(b.Switch, "defaultColor", j("palette-grey-300")), _(b.Switch, "defaultDisabledColor", j("palette-grey-600")), _(b.Switch, "primaryDisabledColor", P(Ye, s ? f("palette-primary-main") : b.primary.main, 0.55)), _(b.Switch, "secondaryDisabledColor", P(Ye, s ? f("palette-secondary-main") : b.secondary.main, 0.55)), _(b.Switch, "errorDisabledColor", P(Ye, s ? f("palette-error-main") : b.error.main, 0.55)), _(b.Switch, "infoDisabledColor", P(Ye, s ? f("palette-info-main") : b.info.main, 0.55)), _(b.Switch, "successDisabledColor", P(Ye, s ? f("palette-success-main") : b.success.main, 0.55)), _(b.Switch, "warningDisabledColor", P(Ye, s ? f("palette-warning-light") : b.warning.main, 0.55)), _(b.TableCell, "border", P(Ye, po(s ? f("palette-divider") : b.divider, 1), 0.68)), _(b.Tooltip, "bg", P(po, s ? f("palette-grey-700") : b.grey[700], 0.92));
    }
    s || (yr(b.background, "default"), yr(b.background, "paper"), yr(b.common, "background"), yr(b.common, "onBackground"), yr(b, "divider")), Object.keys(b).forEach((O) => {
      const B = b[O];
      O !== "tonalOffset" && !s && B && typeof B == "object" && (B.main && _(b[O], "mainChannel", gs(ys(B.main))), B.light && _(b[O], "lightChannel", gs(ys(B.light))), B.dark && _(b[O], "darkChannel", gs(ys(B.dark))), B.contrastText && _(b[O], "contrastTextChannel", gs(ys(B.contrastText))), O === "text" && (yr(b[O], "primary"), yr(b[O], "secondary")), O === "action" && (B.active && yr(b[O], "active"), B.selected && yr(b[O], "selected")));
    });
  }), k = t.reduce((N, b) => jt(N, b), k);
  const T = U1(e.focusVisible, t);
  T != null && T !== !1 && (k.focusVisible = fh(T, f("palette-primary-main")));
  const R = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: bE(k),
    enableContrastVars: s
  }, {
    vars: I,
    generateThemeVars: A,
    generateStyleSheets: M
  } = Mk(k, R);
  return k.vars = I, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([N, b]) => {
    k[N] = b;
  }), k.generateThemeVars = A, k.generateStyleSheets = M, k.generateSpacing = function() {
    return k1(d.spacing, ic(this));
  }, k.getColorSchemeSelector = $k(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...dc,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, k.unstable_sx = function(b) {
    return Ao({
      sx: b,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = H1, k;
}
function Rg(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: dh({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function xc(e = {}, ...t) {
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
      return If(e, ...t);
    let d = n;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const h = If({
      ...e,
      palette: d
    }, ...t);
    if (h.defaultColorScheme = l, h.colorSchemes = u, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: h.palette
    }, Rg(h, "dark", u.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: h.palette
    }, Rg(h, "light", u.light)), h.focusVisible != null && h.focusVisible !== !1) {
      let g = h.focusVisible;
      const f = U1(e.focusVisible, t), v = f && typeof f == "object" ? f.outlineColor : void 0;
      if (!v || Qk(f) && v === h.palette.primary.main) {
        const {
          outlineColor: w,
          ...C
        } = g;
        g = C;
      }
      Object.keys(h.colorSchemes).forEach((w) => {
        var m, p;
        const C = (p = (m = h.colorSchemes) == null ? void 0 : m[w]) == null ? void 0 : p.palette;
        C != null && C.primary && (h.colorSchemes[w].focusVisible = fh(g, C.primary.main));
      });
    }
    return h;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), kE({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function iu(e) {
  return typeof e == "string";
}
function bc(e, t = 166) {
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
function ht(...e) {
  const t = y.useRef(void 0), n = y.useCallback((r) => {
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
  return y.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function rt(e) {
  const t = y.useRef(e);
  return ft(() => {
    t.current = e;
  }), y.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function yt(e) {
  return e && e.ownerDocument || document;
}
function Qn(e) {
  return yt(e).defaultView || window;
}
function Gl(e) {
  return parseInt(e, 10) || 0;
}
const EE = {
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
function TE(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Pg(e) {
  return TE(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const RE = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: u
  } = y.useRef(l != null), d = y.useRef(null), h = ht(n, d), g = y.useRef(null), f = y.useRef(null), v = y.useCallback(() => {
    const x = d.current, S = f.current;
    if (!x || !S)
      return;
    const k = Qn(x).getComputedStyle(x);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    S.style.width = k.width, S.value = x.value || t.placeholder || "x", S.value.slice(-1) === `
` && (S.value += " ");
    const T = k.boxSizing, R = Gl(k.paddingBottom) + Gl(k.paddingTop), I = Gl(k.borderBottomWidth) + Gl(k.borderTopWidth), A = S.scrollHeight;
    S.value = "x";
    const M = S.scrollHeight;
    let N = A;
    i && (N = Math.max(Number(i) * M, N)), o && (N = Math.min(Number(o) * M, N)), N = Math.max(N, M);
    const b = N + (T === "border-box" ? R + I : 0), j = Math.abs(N - A) <= 1;
    return {
      outerHeightStyle: b,
      overflowing: j
    };
  }, [o, i, t.placeholder]), w = rt(() => {
    const x = d.current, S = v();
    if (!x || !S || Pg(S))
      return !1;
    const E = S.outerHeightStyle;
    return g.current != null && g.current !== E;
  }), C = y.useCallback(() => {
    const x = d.current, S = v();
    if (!x || !S || Pg(S))
      return;
    const E = S.outerHeightStyle;
    g.current !== E && (g.current = E, x.style.height = `${E}px`), x.style.overflow = S.overflowing ? "hidden" : "";
  }, [v]), m = y.useRef(-1);
  ft(() => {
    const x = bc(C), S = d == null ? void 0 : d.current;
    if (!S)
      return;
    const E = Qn(S);
    E.addEventListener("resize", x);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      w() && (k.unobserve(S), cancelAnimationFrame(m.current), C(), m.current = requestAnimationFrame(() => {
        k.observe(S);
      }));
    }), k.observe(S)), () => {
      x.clear(), cancelAnimationFrame(m.current), E.removeEventListener("resize", x), k && k.disconnect();
    };
  }, [v, C, w]), ft(() => {
    C();
  });
  const p = (x) => {
    u || C();
    const S = x.target, E = S.value.length, k = S.value.endsWith(`
`), T = S.selectionStart === E;
    k && T && S.setSelectionRange(E, E), r && r(x);
  };
  return /* @__PURE__ */ c.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ c.jsx("textarea", {
      value: l,
      onChange: p,
      ref: h,
      rows: i,
      style: s,
      ...a
    }), /* @__PURE__ */ c.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: f,
      tabIndex: -1,
      style: {
        ...EE.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), ph = /* @__PURE__ */ y.createContext(void 0);
function Ui({
  props: e,
  states: t
}) {
  const n = y.useContext(ph), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const hh = xc();
function lo() {
  const e = pc(hh);
  return e[cr] || e;
}
function PE(e) {
  return /* @__PURE__ */ c.jsx(E1, {
    ...e,
    defaultTheme: hh,
    themeId: cr
  });
}
function Y1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const wn = (e) => Y1(e) && e !== "classes", H = M1({
  themeId: cr,
  defaultTheme: hh,
  rootShouldForwardProp: wn
});
function IE(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ c.jsx(PE, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const Te = yk;
function ge(e) {
  return pk(e);
}
function sr(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Ig(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function su(e, t = !1) {
  return e && (Ig(e.value) && e.value !== "" || t && Ig(e.defaultValue) && e.defaultValue !== "");
}
function ME(e) {
  return e.startAdornment;
}
function $E(e) {
  return he("MuiInputBase", e);
}
const fn = de("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), jE = {
  transition: "none"
};
function AE(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const mh = (e) => e.scrollTop, Q1 = {}, NE = ["all"], OE = {};
function Pn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function X1(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function lu(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = Q1
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function gh(e, t) {
  var r;
  const n = t ?? jE;
  return AE((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function St(e, t = NE, n = OE) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = gh(e);
  if (r === void 0)
    return o ?? Q1;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Mg;
const $f = "mui-auto-fill", au = "mui-auto-fill-cancel", Sc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ae(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, wc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, BE = (e) => {
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
    readOnly: h,
    size: g,
    startAdornment: f,
    type: v
  } = e, w = {
    root: ["root", `color${ae(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", g && g !== "medium" && `size${ae(g)}`, d && "multiline", f && "adornedStart", i && "adornedEnd", u && "hiddenLabel", h && "readOnly"],
    input: ["input", r && "disabled", v === "search" && "inputTypeSearch", h && "readOnly"]
  };
  return me(w, $E, t);
}, Cc = H("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Sc
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
  [`&.${fn.disabled}`]: {
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
}))), kc = H("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: wc
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
    ...St(e, "opacity", {
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
    [`label[data-shrink=false] + .${fn.formControl} &`]: {
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
    [`&.${fn.disabled}`]: {
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
        animationName: au,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: $f
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
})), $g = IE({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${$f}`]: {
    from: {
      animationName: $f
    }
  },
  [`@keyframes ${au}`]: {
    from: {
      animationName: au
    }
  }
}), yh = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    disabled: h,
    disableInjectingGlobalStyles: g,
    endAdornment: f,
    error: v,
    fullWidth: w = !1,
    id: C,
    inputComponent: m = "input",
    inputProps: p = {},
    inputRef: x,
    margin: S,
    maxRows: E,
    minRows: k,
    multiline: T = !1,
    name: R,
    onBlur: I,
    onChange: A,
    onClick: M,
    onFocus: N,
    onKeyDown: b,
    onKeyUp: j,
    placeholder: P,
    readOnly: O,
    renderSuffix: B,
    rows: $,
    size: L,
    slotProps: D = {},
    slots: U = {},
    startAdornment: W,
    type: Q = "text",
    value: K,
    ...q
  } = r, G = p.value != null ? p.value : K, {
    current: oe
  } = y.useRef(G != null), F = y.useRef(), ie = y.useCallback((re) => {
  }, []), ee = ht(F, x, p.ref, ie), [Ee, be] = y.useState(!1), [ue, ce] = Ui({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ue.focused = ce ? ce.focused : Ee, y.useEffect(() => {
    !ce && h && Ee && (be(!1), I && I());
  }, [ce, h, Ee, I]);
  const ve = ce && ce.onFilled, Be = ce && ce.onEmpty, ke = y.useCallback((re) => {
    su(re) ? ve && ve() : Be && Be();
  }, [ve, Be]);
  ft(() => {
    oe && ke({
      value: G
    });
  }, [G, ke, oe]), ft(() => {
    if (!l)
      return;
    const re = F.current;
    if (!re)
      return;
    const le = yt(re), ze = sr(le), De = ze == null || ze === le.body || ze === le.documentElement;
    re === ze ? ce && ce.onFocus ? ce.onFocus() : be(!0) : De && re.focus();
  }, [l]);
  const $e = (re) => {
    N && N(re), p.onFocus && p.onFocus(re), ce && ce.onFocus ? ce.onFocus(re) : be(!0);
  }, fe = (re) => {
    I && I(re), p.onBlur && p.onBlur(re), ce && ce.onBlur ? ce.onBlur(re) : be(!1);
  }, ye = (re, ...le) => {
    if (!oe) {
      const ze = re.target || F.current;
      if (ze == null)
        throw new Error(Ar(1));
      ke({
        value: ze.value
      });
    }
    p.onChange && p.onChange(re, ...le), A && A(re, ...le);
  };
  y.useEffect(() => {
    ke(F.current);
  }, []);
  const Ne = (re) => {
    F.current && re.currentTarget === re.target && F.current.focus(), M && M(re);
  };
  let Ke = m, Ze = p;
  T && Ke === "input" && ($ ? Ze = {
    type: void 0,
    minRows: $,
    maxRows: $,
    ...Ze
  } : Ze = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...Ze
  }, Ke = RE);
  const vt = (re) => {
    ke(re.animationName === au ? F.current : {
      value: "x"
    });
  };
  y.useEffect(() => {
    ce && ce.setAdornedStart(!!W);
  }, [ce, W]);
  const Ct = {
    ...r,
    color: ue.color || "primary",
    disabled: ue.disabled,
    endAdornment: f,
    error: ue.error,
    focused: ue.focused,
    formControl: ce,
    fullWidth: w,
    hiddenLabel: ue.hiddenLabel,
    multiline: T,
    size: ue.size,
    startAdornment: W,
    type: Q
  }, Ge = BE(Ct), Oe = U.root || Cc, Pe = D.root || {}, at = U.input || kc;
  return Ze = {
    ...Ze,
    ...D.input
  }, /* @__PURE__ */ c.jsxs(y.Fragment, {
    children: [!g && typeof $g == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Mg || (Mg = /* @__PURE__ */ c.jsx($g, {}))), /* @__PURE__ */ c.jsxs(Oe, {
      ...Pe,
      ref: n,
      onClick: Ne,
      ...q,
      ...!iu(Oe) && {
        ownerState: {
          ...Ct,
          ...Pe.ownerState
        }
      },
      className: ne(Ge.root, Pe.className, a, O && "MuiInputBase-readOnly"),
      children: [W, /* @__PURE__ */ c.jsx(ph.Provider, {
        value: null,
        children: /* @__PURE__ */ c.jsx(at, {
          "aria-invalid": ue.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: d,
          disabled: ue.disabled,
          id: C,
          onAnimationStart: vt,
          name: R,
          placeholder: P,
          readOnly: O,
          required: ue.required,
          rows: $,
          value: G,
          onKeyDown: b,
          onKeyUp: j,
          type: Q,
          ...Ze,
          ...!iu(at) && {
            as: Ke,
            ownerState: {
              ...Ct,
              ...Ze.ownerState
            }
          },
          ref: ee,
          className: ne(Ge.input, Ze.className, O && "MuiInputBase-readOnly"),
          onBlur: fe,
          onChange: ye,
          onFocus: $e
        })
      }), f, B ? B({
        ...ue,
        startAdornment: W
      }) : null]
    })]
  });
});
function LE(e) {
  return he("MuiFilledInput", e);
}
const ho = {
  ...fn,
  ...de("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function zE(e) {
  return he("MuiFormHelperText", e);
}
const jg = de("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function _E(e) {
  return he("MuiFormLabel", e);
}
const Rs = de("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function FE(e) {
  return he("MuiInput", e);
}
const rs = {
  ...fn,
  ...de("MuiInput", ["root", "underline", "input"])
};
function DE(e) {
  return he("MuiMenuItem", e);
}
const os = de("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function WE(e) {
  return he("MuiNativeSelect", e);
}
const vh = de("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function UE(e) {
  return he("MuiOutlinedInput", e);
}
const tr = {
  ...fn,
  ...de("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function VE({
  theme: e,
  ...t
}) {
  const n = cr in e ? e[cr] : void 0;
  return /* @__PURE__ */ c.jsx(O1, {
    ...t,
    themeId: n ? cr : void 0,
    theme: n || e
  });
}
const Yl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: HE
} = Ek({
  themeId: cr,
  // @ts-ignore ignore module augmentation tests
  theme: () => xc({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Yl.colorSchemeStorageKey,
  modeStorageKey: Yl.modeStorageKey,
  defaultColorScheme: {
    light: Yl.defaultLightColorScheme,
    dark: Yl.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: V1(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Ao({
        sx: r,
        theme: this
      });
    }, t;
  }
}), KE = HE;
function GE({
  theme: e,
  ...t
}) {
  const n = y.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = cr in e ? e[cr] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ c.jsx(VE, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ c.jsx(KE, {
    theme: e,
    ...t
  });
}
function Ag(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function YE(e) {
  return he("MuiSvgIcon", e);
}
de("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const QE = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ae(t)}`, `fontSize${ae(n)}`]
  };
  return me(o, YE, r);
}, XE = H("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ae(n.color)}`], t[`fontSize${ae(n.fontSize)}`]];
  }
})(Te(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, u, d, h, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...St(e, "fill", {
      duration: (n = (t = (e.vars ?? e).transitions) == null ? void 0 : t.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (f) => !f.hasSvgAsChild,
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
      ...Object.entries((e.vars ?? e).palette).filter(([, f]) => f && f.main).map(([f]) => {
        var v, w;
        return {
          props: {
            color: f
          },
          style: {
            color: (w = (v = (e.vars ?? e).palette) == null ? void 0 : v[f]) == null ? void 0 : w.main
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
          color: (g = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : g.disabled
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
})), jf = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    titleAccess: h,
    viewBox: g = "0 0 24 24",
    ...f
  } = r, v = /* @__PURE__ */ y.isValidElement(o) && o.type === "svg", w = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: g,
    hasSvgAsChild: v
  }, C = {};
  d || (C.viewBox = g);
  const m = QE(w);
  return /* @__PURE__ */ c.jsxs(XE, {
    as: l,
    className: ne(m.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: n,
    ...C,
    ...f,
    ...v && o.props,
    ownerState: w,
    children: [v ? o.props.children : o, h ? /* @__PURE__ */ c.jsx("title", {
      children: h
    }) : null]
  });
});
jf.muiName = "SvgIcon";
function Je(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ c.jsx(jf, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = jf.muiName, /* @__PURE__ */ y.memo(/* @__PURE__ */ y.forwardRef(n));
}
function Af(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Nf(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = y.useRef(t !== void 0), [s, l] = y.useState(n), a = i ? t : s, u = y.useCallback((d) => {
    i || l(d);
  }, []);
  return [a, u];
}
function q1(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function qE(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((u) => {
      q1(u, l[u]) && typeof s[u] == "function" && (a[u] = (...d) => {
        s[u](...d), l[u](...d);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, u = ne(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), d = n(a, l);
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
  const r = t, o = n(e, r), i = ne(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
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
const Ng = {};
function xh(e, t) {
  const n = y.useRef(Ng);
  return n.current === Ng && (n.current = e(t)), n;
}
function JE(e) {
  const t = xh(() => ZE(e)).current;
  return t.next = e, ft(t.effect), t;
}
function ZE(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Og = Hy.createContext(null);
function eT(e) {
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
function tT(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = eT(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function J1(e) {
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
    nodeRef: h,
    onEnter: g,
    onEntering: f,
    onEntered: v,
    onExit: w,
    onExiting: C,
    onExited: m,
    children: p,
    ...x
  } = e, S = y.useContext(Og), E = S && !S.isMounting ? r : n, [k, T] = y.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), R = y.useRef(k);
  R.current = k, t && k === "unmounted" && (R.current = "exited", T("exited"));
  const I = y.useRef(t && E), A = y.useRef(!1), M = y.useRef(null), N = y.useRef(k), b = y.useRef(!1), j = y.useRef(u), P = JE({
    timeout: l,
    addEndListener: a,
    reduceMotion: u,
    getAutoTimeout: d,
    onEnter: g,
    onEntering: f,
    onEntered: v,
    onExit: w,
    onExiting: C,
    onExited: m,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: h,
    parentGroup: S
  }), O = y.useCallback(() => {
    M.current !== null && (M.current.cancel(), M.current = null);
  }, []), B = y.useCallback((W) => {
    let Q = !0;
    const K = () => {
      Q && (Q = !1, M.current = null, W());
    };
    return K.cancel = () => {
      Q = !1;
    }, M.current = K, K;
  }, []), $ = y.useCallback((W, Q) => {
    var Be, ke;
    let K;
    const q = () => {
      K !== void 0 && (clearTimeout(K), K = void 0);
    }, G = B(() => {
      q(), R.current = W, T(W);
    }), oe = G.cancel;
    G.cancel = () => {
      q(), oe();
    };
    const F = P.current.nodeRef.current, ie = P.current.addEndListener, ee = P.current.getAutoTimeout !== void 0, Ee = (ke = (Be = P.current).getAutoTimeout) == null ? void 0 : ke.call(Be), be = tT({
      currentStatus: Q,
      isAppearing: b.current,
      timeout: P.current.timeout,
      autoTimeout: Ee
    }), ue = j.current, ce = be ?? (ue && ee ? 0 : null), ve = ($e) => {
      K = setTimeout(G, $e);
    };
    if (!F) {
      ve(0);
      return;
    }
    if (ie) {
      ce != null && ve(ue ? 0 : ce), ie.length >= 2 ? ie(F, G) : ie(G);
      return;
    }
    ve(ue ? 0 : be ?? 0);
  }, [B, P]), L = y.useCallback((W) => {
    var q;
    const Q = P.current, K = Q.parentGroup ? Q.parentGroup.isMounting : W;
    if (b.current = K, !W && !Q.enter) {
      R.current = "entered", T("entered");
      return;
    }
    j.current = Q.reduceMotion, (q = Q.onEnter) == null || q.call(Q, K), R.current = "entering", T("entering");
  }, [P]), D = y.useCallback(() => {
    var Q;
    const W = P.current;
    if (!W.exit) {
      R.current = "exited", T("exited");
      return;
    }
    j.current = W.reduceMotion, (Q = W.onExit) == null || Q.call(W), R.current = "exiting", T("exiting");
  }, [P]), U = y.useCallback((W, Q) => {
    if (O(), Q === "entering") {
      const K = P.current;
      if (K.mountOnEnter || K.unmountOnExit) {
        const q = K.nodeRef.current;
        q && mh(q);
      }
      L(W);
    } else
      D();
  }, [O, L, D, P]);
  return ft(() => (A.current = !0, I.current && (I.current = !1, U(!0, "entering")), () => {
    A.current = !1, O();
  }), [O, U]), ft(() => {
    if (!A.current)
      return;
    const W = R.current;
    t ? W !== "entering" && W !== "entered" && U(!1, "entering") : W === "entering" || W === "entered" ? U(!1, "exiting") : W === "exited" && s && (R.current = "unmounted", T("unmounted"));
  }, [t, k, s, U]), ft(() => {
    var q, G, oe, F;
    if (k === "unmounted" || N.current === "unmounted") {
      N.current = k;
      return;
    }
    const Q = N.current !== k;
    Q && (N.current = k);
    const K = P.current;
    k === "entering" ? (Q && ((q = K.onEntering) == null || q.call(K, b.current)), M.current === null && R.current === k && $("entered", "entering")) : k === "exiting" ? (Q && ((G = K.onExiting) == null || G.call(K)), M.current === null && R.current === k && $("exited", "exiting")) : k === "entered" && Q ? (oe = K.onEntered) == null || oe.call(K, b.current) : k === "exited" && Q && ((F = K.onExited) == null || F.call(K));
  }, [P, $, k]), k === "unmounted" ? null : /* @__PURE__ */ c.jsx(Og.Provider, {
    value: null,
    children: p(k, x)
  });
}
const Z1 = "(prefers-reduced-motion: reduce)", nT = 0, rT = "0ms", oT = () => {
}, Bg = () => !1, iT = () => !0, sT = () => oT;
function lT(e) {
  const [t, n] = y.useState(() => ({
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
    const i = window.matchMedia(Z1), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const aT = {
  ...$a
}, ex = aT.useSyncExternalStore;
function uT(e) {
  const t = e ? iT : Bg, [n, r] = y.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [Bg, sT];
    const o = window.matchMedia(Z1);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return ex(r, n, t);
}
const cT = ex !== void 0 ? uT : lT;
function Ec(e, t) {
  const n = cT(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return y.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: nT,
        delay: rT
      } : o;
    }
  }), [r]);
}
function tx(e, t, n) {
  return e === void 0 || iu(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function nx(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function uu(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    q1(n, e[n]) && (t[n] = e[n]);
  return t;
}
function Lg(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function rx(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const f = ne(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), v = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, w = {
      ...n,
      ...o,
      ...r
    };
    return f.length > 0 && (w.className = f), Object.keys(v).length > 0 && (w.style = v), {
      props: w,
      internalRef: void 0
    };
  }
  const s = uu({
    ...o,
    ...r
  }), l = Lg(r), a = Lg(o), u = t(s), d = ne(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, g = {
    ...u,
    ...n,
    ...a,
    ...l
  };
  return d.length > 0 && (g.className = d), Object.keys(h).length > 0 && (g.style = h), {
    props: g,
    internalRef: u.ref
  };
}
function Ce(e, t) {
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
    slotProps: h = {
      [e]: void 0
    },
    ...g
  } = i, f = d[e] || r, v = nx(h[e], o), {
    props: {
      component: w,
      ...C
    },
    internalRef: m
  } = rx({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: v
  }), p = ht(m, v == null ? void 0 : v.ref, t.ref), x = e === "root" ? w || u : w, S = tx(f, {
    ...e === "root" && !u && !d[e] && s,
    ...e !== "root" && !d[e] && s,
    ...C,
    ...x && !l && {
      as: x
    },
    ...x && l && {
      component: x
    },
    ref: p
  }, o);
  return [f, S];
}
function dT(e) {
  return he("MuiPaper", e);
}
de("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const fT = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return me(i, dT, o);
}, pT = H("div", {
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
  ...St(e, "box-shadow"),
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
}))), pr = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var f;
  const r = ge({
    props: t,
    name: "MuiPaper"
  }), o = lo(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: u = "elevation",
    ...d
  } = r, h = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: u
  }, g = fT(h);
  return /* @__PURE__ */ c.jsx(pT, {
    as: s,
    ownerState: h,
    className: ne(g.root, i),
    ref: n,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (f = o.vars.overlays) == null ? void 0 : f[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${ol("#fff", Mf(l))}, ${ol("#fff", Mf(l))})`
        }
      },
      ...d.style
    }
  });
});
function cu(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function hT(e) {
  const {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: i
  } = e, s = r && t !== !1, l = r && t === !1;
  return y.useMemo(() => {
    const u = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(d) {
        n && t && d.key !== "Tab" && d.preventDefault();
      }
    };
    return r || (u.tabIndex = o, !i && n && (u.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (u["aria-disabled"] = n), i && (!t || l) && (u.disabled = n), u;
  }, [r, n, t, s, l, i, o]);
}
const mT = {};
function gT(e) {
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
  } = e, d = y.useRef(null), h = s === !0, g = hT({
    focusableWhenDisabled: h,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), f = y.useCallback(() => {
    const C = d.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), v = y.useMemo(() => {
    const C = h ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, h || (C.disabled = n)) : (C.role = "button", !h && n && (C["aria-disabled"] = n)), h ? {
      ...C,
      ...g
    } : C;
  }, [n, h, g, o, t, i, r]);
  return {
    getButtonProps: y.useCallback((C = mT) => {
      const {
        onClick: m,
        onKeyDown: p,
        onKeyUp: x,
        ...S
      } = C;
      return {
        ...v,
        ...S,
        onClick: (R) => {
          if (l && R.stopPropagation(), n) {
            R.preventDefault();
            return;
          }
          m == null || m(R);
        },
        onKeyDown: (R) => {
          if (h && g.onKeyDown(R), !n && (a == null || a(R), p == null || p(R), !(R.target !== R.currentTarget || f()))) {
            if (R.key === " ") {
              R.preventDefault();
              return;
            }
            R.key === "Enter" && (R.preventDefault(), R.currentTarget.click());
          }
        },
        onKeyUp: (R) => {
          n || (u == null || u(R), x == null || x(R), R.target === R.currentTarget && !f() && R.key === " " && !R.defaultPrevented && R.currentTarget.click());
        }
      };
    }, [v, n, h, g, f, a, u, l]),
    rootRef: d
  };
}
class du {
  constructor() {
    Ki(this, "mountEffect", () => {
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
    return new du();
  }
  static use() {
    const t = xh(du.create).current, [n, r] = y.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, y.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = vT(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function yT() {
  return du.use();
}
function vT() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const xT = [];
function ox(e) {
  y.useEffect(e, xT);
}
class Tc {
  constructor() {
    Ki(this, "currentId", null);
    Ki(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Ki(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Tc();
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
function lr() {
  const e = xh(Tc.create).current;
  return ox(e.disposeEffect), e;
}
function bT(e) {
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
  } = e, [d, h] = y.useState(!1), g = lr(), f = y.useRef(!1), v = y.useRef(a);
  v.current = a;
  const w = a != null, C = ne(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), m = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, p = ne(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && h(!0), y.useEffect(() => {
    !l && w ? f.current || (f.current = !0, g.start(u, () => {
      var x;
      f.current = !1, (x = v.current) == null || x.call(v);
    })) : (f.current = !1, g.clear());
  }, [g, w, l, u]), /* @__PURE__ */ c.jsx("span", {
    className: C,
    style: m,
    children: /* @__PURE__ */ c.jsx("span", {
      className: p
    })
  });
}
const qt = de("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Of = 550, ST = 80, Ql = {}, zg = [], wT = () => {
};
function yd(e, t) {
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
function CT({
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
const kT = yl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ET = yl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, TT = yl`
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
function RT(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = nl`
    &.${qt.rippleVisible} {
      animation-name: ${kT};
      animation-duration: ${Of}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${qt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${qt.childLeaving} {
      animation-name: ${ET};
      animation-duration: ${Of}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${qt.childPulsate} {
      animation-name: ${TT};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? nl`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const PT = H("span", {
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
}), IT = H(bT, {
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
}) => RT(e)}
`, MT = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTouchRipple"
  }), o = lo(), i = Ec(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Ql,
    className: a,
    ...u
  } = r, [d, h] = y.useState({
    items: zg,
    order: zg
  }), g = d.items, f = y.useRef(0), v = y.useRef(null), w = y.useRef(!1);
  ox(() => (w.current = !0, () => {
    w.current = !1;
  })), y.useEffect(() => {
    v.current && (v.current(), v.current = null);
  }, [g]);
  const C = y.useRef(!1), m = lr(), p = y.useRef(null), x = y.useRef(null), S = rt((M) => {
    w.current && h((N) => {
      const b = N.items.filter((P) => P.key !== M), j = yd(N.order.filter((P) => P !== M), b.filter((P) => !P.exiting).map((P) => P.key));
      return {
        items: b,
        order: j
      };
    });
  }), E = rt((M) => {
    const {
      pulsate: N,
      rippleX: b,
      rippleY: j,
      rippleSize: P,
      cb: O
    } = M, B = f.current;
    f.current += 1, h(($) => {
      const L = [...$.items, {
        key: B,
        pulsate: N,
        rippleX: b,
        rippleY: j,
        rippleSize: P,
        exiting: !1
      }];
      return {
        items: L,
        order: yd($.order, L.filter((D) => !D.exiting).map((D) => D.key))
      };
    }), v.current = O;
  }), k = rt((M = Ql, N = Ql, b = wT) => {
    const {
      pulsate: j = !1,
      center: P = s || N.pulsate,
      fakeElement: O = !1
      // Used only by tests.
    } = N;
    if ((M == null ? void 0 : M.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    (M == null ? void 0 : M.type) === "touchstart" && (C.current = !0);
    const B = O ? null : x.current, {
      rippleX: $,
      rippleY: L,
      rippleSize: D
    } = CT({
      event: M,
      element: B,
      center: P
    });
    M != null && M.touches ? p.current === null && (p.current = () => {
      E({
        pulsate: j,
        rippleX: $,
        rippleY: L,
        rippleSize: D,
        cb: b
      });
    }, m.start(ST, () => {
      p.current && (p.current(), p.current = null);
    })) : E({
      pulsate: j,
      rippleX: $,
      rippleY: L,
      rippleSize: D,
      cb: b
    });
  }), T = rt(() => {
    k(Ql, {
      pulsate: !0
    });
  }), R = rt((M, N) => {
    if (m.clear(), (M == null ? void 0 : M.type) === "touchend" && p.current) {
      p.current(), p.current = null, m.start(0, () => {
        R(M, N);
      });
      return;
    }
    p.current = null, h((b) => {
      const j = b.items.findIndex((O) => !O.exiting);
      if (j === -1)
        return b;
      const P = b.items.slice();
      return P[j] = {
        ...P[j],
        exiting: !0
      }, {
        items: P,
        order: yd(b.order, P.filter((O) => !O.exiting).map((O) => O.key))
      };
    }), v.current = N;
  });
  y.useImperativeHandle(n, () => ({
    pulsate: T,
    start: k,
    stop: R
  }), [T, k, R]);
  const I = new Map(g.map((M) => [M.key, M])), A = d.order.map((M) => I.get(M)).filter(Boolean);
  return /* @__PURE__ */ c.jsx(PT, {
    className: ne(qt.root, l.root, a),
    ref: x,
    ...u,
    children: A.map((M) => /* @__PURE__ */ c.jsx(IT, {
      classes: {
        ripple: ne(l.ripple, qt.ripple),
        rippleVisible: ne(l.rippleVisible, qt.rippleVisible),
        ripplePulsate: ne(l.ripplePulsate, qt.ripplePulsate),
        child: ne(l.child, qt.child),
        childLeaving: ne(l.childLeaving, qt.childLeaving),
        childPulsate: ne(l.childPulsate, qt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : Of,
      pulsate: M.pulsate,
      rippleX: M.rippleX,
      rippleY: M.rippleY,
      rippleSize: M.rippleSize,
      in: !M.exiting,
      onExited: () => S(M.key)
    }, M.key))
  });
});
function $T(e) {
  return he("MuiButtonBase", e);
}
const Bf = de("MuiButtonBase", ["root", "disabled", "focusVisible"]), jT = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = me({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, $T, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, AT = H("button", {
  name: "MuiButtonBase",
  slot: "Root"
})(Te(({
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
  [`&.${Bf.disabled}`]: {
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
      ...Yk,
      [`&.${Bf.focusVisible}`]: e.focusVisible
    }
  }]
}))), No = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    disableTouchRipple: h = !1,
    focusRipple: g = !1,
    focusVisibleClassName: f,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: v,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: w = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: C,
    // private prop to let a parent (like SwitchBase) control its own focus visible style
    internalDisabledThemeFocusVisible: m = !1,
    /* eslint-enable react/prop-types */
    LinkComponent: p = "a",
    nativeButton: x,
    onBlur: S,
    onClick: E,
    onContextMenu: k,
    onDragLeave: T,
    onFocus: R,
    onFocusVisible: I,
    onKeyDown: A,
    onKeyUp: M,
    onMouseDown: N,
    onMouseLeave: b,
    onMouseUp: j,
    onTouchEnd: P,
    onTouchMove: O,
    onTouchStart: B,
    tabIndex: $ = 0,
    TouchRippleProps: L,
    touchRippleRef: D,
    type: U,
    ...W
  } = r, Q = !!(W.href || W.to), K = !!W.formAction;
  let q = a;
  q === "button" && Q && (q = p);
  const oe = x ?? (typeof q == "string" ? q === "button" : C ?? !1), F = yT(), ie = ht(F.ref, D), [ee, Ee] = y.useState(!1);
  (u || w) && ee && Ee(!1);
  const be = rt((X) => {
    g && !X.repeat && ee && X.key === " " && F.stop(X, () => {
      F.start(X);
    });
  }), ue = rt((X) => {
    g && X.key === " " && ee && !X.defaultPrevented && F.stop(X, () => {
      F.pulsate(X);
    });
  }), {
    getButtonProps: ce,
    rootRef: ve
  } = gT({
    nativeButton: oe,
    disabled: u,
    type: U,
    hasFormAction: K,
    tabIndex: $,
    onBeforeKeyDown: be,
    onBeforeKeyUp: ue
  }), {
    onClick: Be,
    onKeyDown: ke,
    onKeyUp: $e,
    ...fe
  } = ce({
    onClick: E,
    onKeyDown: A,
    onKeyUp: M
  });
  y.useImperativeHandle(o, () => ({
    focusVisible: () => {
      Ee(!0), ve.current.focus();
    }
  }), [ve]);
  const ye = F.shouldMount && !d && !u;
  y.useEffect(() => {
    ee && g && !d && F.pulsate();
  }, [d, g, ee, F]);
  const Ne = vr(F, "start", N, h), Ke = vr(F, "stop", k, h), Ze = vr(F, "stop", T, h), vt = vr(F, "stop", j, h), Ct = vr(F, "stop", (X) => {
    ee && X.preventDefault(), b && b(X);
  }, h), Ge = vr(F, "start", B, h), Oe = vr(F, "stop", P, h), Pe = vr(F, "stop", O, h), at = vr(F, "stop", (X) => {
    cu(X.target) || Ee(!1), S && S(X);
  }, !1), re = rt((X) => {
    ve.current || (ve.current = X.currentTarget), !w && cu(X.target) && (Ee(!0), I && I(X)), R && R(X);
  }), le = {};
  Q && (le.tabIndex = u ? -1 : $, u && (le["aria-disabled"] = u), le.type = U);
  const ze = ht(n, ve), De = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: h,
    focusRipple: g,
    suppressFocusVisible: w,
    tabIndex: $,
    focusVisible: ee,
    internalDisabledThemeFocusVisible: m
  }, z = jT(De);
  return /* @__PURE__ */ c.jsxs(AT, {
    as: q,
    className: ne(z.root, l),
    ownerState: De,
    onBlur: at,
    onClick: Be,
    onContextMenu: Ke,
    onFocus: re,
    onKeyDown: ke,
    onKeyUp: $e,
    onMouseDown: Ne,
    onMouseLeave: Ct,
    onMouseUp: vt,
    onDragLeave: Ze,
    onTouchEnd: Oe,
    onTouchMove: Pe,
    onTouchStart: Ge,
    ref: ze,
    ...Q ? le : fe,
    ...W,
    children: [s, ye ? /* @__PURE__ */ c.jsx(MT, {
      ref: ie,
      center: i,
      ...L
    }) : null]
  });
});
function vr(e, t, n, r = !1) {
  return rt((o) => (n && n(o), r || e[t](o), !0));
}
function NT(e) {
  return typeof e.main == "string";
}
function OT(e, t = []) {
  if (!NT(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function _t(e = []) {
  return ([, t]) => t && OT(t, e);
}
function BT(e) {
  return he("MuiAlert", e);
}
const _g = de("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function LT(e) {
  return he("MuiCircularProgress", e);
}
de("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const _n = 44, Lf = yl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, zf = yl`
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
`, zT = typeof Lf != "string" ? nl`
        animation: ${Lf} 1.4s linear infinite;
      ` : null, _T = typeof zf != "string" ? nl`
        animation: ${zf} 1.4s ease-in-out infinite;
      ` : null, FT = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${ae(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return me(i, LT, t);
}, DT = H("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ae(n.color)}`]];
  }
})(Te(({
  theme: e
}) => {
  const t = gh(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...St(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: zT || {
        animation: `${Lf} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(_t()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), WT = H("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), UT = H("circle", {
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
  const t = gh(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...St(e, "stroke-dashoffset")
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
      style: _T || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${zf} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), VT = H("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(Te(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Ps = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    style: h,
    thickness: g = 3.6,
    value: f = r.min ?? 0,
    variant: v = "indeterminate",
    ...w
  } = r, C = a ?? 0, m = u ?? 100, p = {
    ...r,
    color: i,
    disableShrink: s,
    size: d,
    thickness: g,
    value: f,
    variant: v,
    enableTrackSlot: l
  }, x = FT(p), S = {}, E = {}, k = {};
  if (v === "determinate") {
    const T = 2 * Math.PI * ((_n - g) / 2), R = m - C;
    S.strokeDasharray = T.toFixed(3), S.strokeDashoffset = R > 0 ? `${((m - f) / R * T).toFixed(3)}px` : `${T.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = f, k["aria-valuemin"] = C, k["aria-valuemax"] = m;
  }
  return /* @__PURE__ */ c.jsx(DT, {
    className: ne(x.root, o),
    style: {
      width: d,
      height: d,
      ...E,
      ...h
    },
    ownerState: p,
    ref: n,
    role: "progressbar",
    ...k,
    ...w,
    children: /* @__PURE__ */ c.jsxs(WT, {
      className: x.svg,
      ownerState: p,
      viewBox: `${_n / 2} ${_n / 2} ${_n} ${_n}`,
      children: [l ? /* @__PURE__ */ c.jsx(VT, {
        className: x.track,
        ownerState: p,
        cx: _n,
        cy: _n,
        r: (_n - g) / 2,
        fill: "none",
        strokeWidth: g,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ c.jsx(UT, {
        className: x.circle,
        style: S,
        ownerState: p,
        cx: _n,
        cy: _n,
        r: (_n - g) / 2,
        fill: "none",
        strokeWidth: g
      })]
    })
  });
});
function HT(e) {
  return he("MuiIconButton", e);
}
const Fg = de("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), KT = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${ae(r)}`, o && `edge${ae(o)}`, `size${ae(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return me(l, HT, t);
}, GT = H(No, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ae(n.color)}`], n.edge && t[`edge${ae(n.edge)}`], t[`size${ae(n.size)}`]];
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
  ...St(e, "background-color", {
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
  }, ...Object.entries(e.palette).filter(_t()).map(([t]) => ({
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
  [`&.${Fg.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Fg.loading}`]: {
    color: "transparent"
  }
}))), YT = H("span", {
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
})), Wn = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    id: h,
    loading: g = null,
    loadingIndicator: f,
    ...v
  } = r, w = Nr(h), C = f ?? /* @__PURE__ */ c.jsx(Ps, {
    "aria-labelledby": w,
    color: "inherit",
    size: 16
  }), m = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: u,
    loading: g,
    loadingIndicator: C,
    size: d
  }, p = KT(m);
  return /* @__PURE__ */ c.jsxs(GT, {
    id: g ? w : h,
    className: ne(p.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !u,
    disabled: a || g,
    ref: n,
    ...v,
    ownerState: m,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ c.jsx("span", {
      className: p.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ c.jsx(YT, {
        className: p.loadingIndicator,
        ownerState: m,
        children: g && C
      })
    }), i]
  });
}), QT = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), XT = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), qT = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), JT = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), ZT = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), eR = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${ae(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return me(i, BT, o);
}, tR = H(pr, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})(Te(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, n = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(_t(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${_g.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(_t(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${_g.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(_t(["dark"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: {
        ...e.focusVisible && D1(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
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
})), nR = H("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), rR = H("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), oR = H("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Dg = {
  success: /* @__PURE__ */ c.jsx(QT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ c.jsx(XT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ c.jsx(qT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ c.jsx(JT, {
    fontSize: "inherit"
  })
}, Wg = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    icon: u,
    iconMapping: d = Dg,
    onClose: h,
    role: g = "alert",
    severity: f = "success",
    slotProps: v = {},
    slots: w = {},
    variant: C = "standard",
    ...m
  } = r, p = {
    ...r,
    color: a,
    severity: f,
    variant: C,
    colorSeverity: a || f
  }, x = eR(p), S = {
    slots: w,
    slotProps: v
  }, [E, k] = Ce("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: ne(x.root, s),
    elementType: tR,
    externalForwardedProps: {
      ...S,
      ...m
    },
    ownerState: p,
    additionalProps: {
      role: g,
      elevation: 0
    }
  }), [T, R] = Ce("icon", {
    className: x.icon,
    elementType: nR,
    externalForwardedProps: S,
    ownerState: p
  }), [I, A] = Ce("message", {
    className: x.message,
    elementType: rR,
    externalForwardedProps: S,
    ownerState: p
  }), [M, N] = Ce("action", {
    className: x.action,
    elementType: oR,
    externalForwardedProps: S,
    ownerState: p
  }), [b, j] = Ce("closeButton", {
    elementType: Wn,
    externalForwardedProps: S,
    ownerState: p
  }), [P, O] = Ce("closeIcon", {
    elementType: ZT,
    externalForwardedProps: S,
    ownerState: p
  });
  return /* @__PURE__ */ c.jsxs(E, {
    ...k,
    children: [u !== !1 ? /* @__PURE__ */ c.jsx(T, {
      ...R,
      children: u || d[f] || Dg[f]
    }) : null, /* @__PURE__ */ c.jsx(I, {
      ...A,
      children: i
    }), o != null ? /* @__PURE__ */ c.jsx(M, {
      ...N,
      children: o
    }) : null, o == null && h ? /* @__PURE__ */ c.jsx(M, {
      ...N,
      children: /* @__PURE__ */ c.jsx(b, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: h,
        ...j,
        children: /* @__PURE__ */ c.jsx(P, {
          fontSize: "small",
          ...O
        })
      })
    }) : null]
  });
});
function iR(e) {
  return he("MuiTypography", e);
}
de("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const sR = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${ae(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return me(s, iR, i);
}, lR = H("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ae(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
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
    })), ...Object.entries(e.palette).filter(_t()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${ae(n)}`
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
})), Ug = {
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
}, we = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    variantMapping: h = Ug,
    ...g
  } = r, f = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: u,
    variant: d,
    variantMapping: h
  }, v = l || h[d] || Ug[d] || "span", w = sR(f);
  return /* @__PURE__ */ c.jsx(lR, {
    as: v,
    ref: n,
    className: ne(w.root, s),
    ...g,
    ownerState: f,
    style: {
      ...i !== "inherit" && {
        "--Typography-textAlign": i
      },
      ...g.style
    }
  });
});
function Eo(e, t) {
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
var an = "top", Nn = "bottom", On = "right", un = "left", bh = "auto", bl = [an, Nn, On, un], Mi = "start", il = "end", aR = "clippingParents", ix = "viewport", is = "popper", uR = "reference", Vg = /* @__PURE__ */ bl.reduce(function(e, t) {
  return e.concat([t + "-" + Mi, t + "-" + il]);
}, []), sx = /* @__PURE__ */ [].concat(bl, [bh]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Mi, t + "-" + il]);
}, []), cR = "beforeRead", dR = "read", fR = "afterRead", pR = "beforeMain", hR = "main", mR = "afterMain", gR = "beforeWrite", yR = "write", vR = "afterWrite", xR = [cR, dR, fR, pR, hR, mR, gR, yR, vR];
function hr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function vn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Oo(e) {
  var t = vn(e).Element;
  return e instanceof t || e instanceof Element;
}
function $n(e) {
  var t = vn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Sh(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = vn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function bR(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !$n(i) || !hr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function SR(e) {
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
      !$n(o) || !hr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const wR = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: bR,
  effect: SR,
  requires: ["computeStyles"]
};
function fr(e) {
  return e.split("-")[0];
}
var To = Math.max, fu = Math.min, $i = Math.round;
function _f() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function lx() {
  return !/^((?!chrome|android).)*safari/i.test(_f());
}
function ji(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && $n(e) && (o = e.offsetWidth > 0 && $i(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && $i(r.height) / e.offsetHeight || 1);
  var s = Oo(e) ? vn(e) : window, l = s.visualViewport, a = !lx() && n, u = (r.left + (a && l ? l.offsetLeft : 0)) / o, d = (r.top + (a && l ? l.offsetTop : 0)) / i, h = r.width / o, g = r.height / i;
  return {
    width: h,
    height: g,
    top: d,
    right: u + h,
    bottom: d + g,
    left: u,
    x: u,
    y: d
  };
}
function wh(e) {
  var t = ji(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ax(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Sh(n)) {
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
  return vn(e).getComputedStyle(e);
}
function CR(e) {
  return ["table", "td", "th"].indexOf(hr(e)) >= 0;
}
function ao(e) {
  return ((Oo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Rc(e) {
  return hr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Sh(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ao(e)
  );
}
function Hg(e) {
  return !$n(e) || // https://github.com/popperjs/popper-core/issues/837
  Or(e).position === "fixed" ? null : e.offsetParent;
}
function kR(e) {
  var t = /firefox/i.test(_f()), n = /Trident/i.test(_f());
  if (n && $n(e)) {
    var r = Or(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Rc(e);
  for (Sh(o) && (o = o.host); $n(o) && ["html", "body"].indexOf(hr(o)) < 0; ) {
    var i = Or(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Sl(e) {
  for (var t = vn(e), n = Hg(e); n && CR(n) && Or(n).position === "static"; )
    n = Hg(n);
  return n && (hr(n) === "html" || hr(n) === "body" && Or(n).position === "static") ? t : n || kR(e) || t;
}
function Ch(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Is(e, t, n) {
  return To(e, fu(t, n));
}
function ER(e, t, n) {
  var r = Is(e, t, n);
  return r > n ? n : r;
}
function ux() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function cx(e) {
  return Object.assign({}, ux(), e);
}
function dx(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var TR = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, cx(typeof t != "number" ? t : dx(t, bl));
};
function RR(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = fr(n.placement), a = Ch(l), u = [un, On].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var h = TR(o.padding, n), g = wh(i), f = a === "y" ? an : un, v = a === "y" ? Nn : On, w = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], C = s[a] - n.rects.reference[a], m = Sl(i), p = m ? a === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, x = w / 2 - C / 2, S = h[f], E = p - g[d] - h[v], k = p / 2 - g[d] / 2 + x, T = Is(S, k, E), R = a;
    n.modifiersData[r] = (t = {}, t[R] = T, t.centerOffset = T - k, t);
  }
}
function PR(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || ax(t.elements.popper, o) && (t.elements.arrow = o));
}
const IR = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: RR,
  effect: PR,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ai(e) {
  return e.split("-")[1];
}
var MR = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function $R(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: $i(n * o) / o || 0,
    y: $i(r * o) / o || 0
  };
}
function Kg(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, h = e.isFixed, g = s.x, f = g === void 0 ? 0 : g, v = s.y, w = v === void 0 ? 0 : v, C = typeof d == "function" ? d({
    x: f,
    y: w
  }) : {
    x: f,
    y: w
  };
  f = C.x, w = C.y;
  var m = s.hasOwnProperty("x"), p = s.hasOwnProperty("y"), x = un, S = an, E = window;
  if (u) {
    var k = Sl(n), T = "clientHeight", R = "clientWidth";
    if (k === vn(n) && (k = ao(n), Or(k).position !== "static" && l === "absolute" && (T = "scrollHeight", R = "scrollWidth")), k = k, o === an || (o === un || o === On) && i === il) {
      S = Nn;
      var I = h && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      w -= I - r.height, w *= a ? 1 : -1;
    }
    if (o === un || (o === an || o === Nn) && i === il) {
      x = On;
      var A = h && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      f -= A - r.width, f *= a ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, u && MR), N = d === !0 ? $R({
    x: f,
    y: w
  }, vn(n)) : {
    x: f,
    y: w
  };
  if (f = N.x, w = N.y, a) {
    var b;
    return Object.assign({}, M, (b = {}, b[S] = p ? "0" : "", b[x] = m ? "0" : "", b.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + w + "px)" : "translate3d(" + f + "px, " + w + "px, 0)", b));
  }
  return Object.assign({}, M, (t = {}, t[S] = p ? w + "px" : "", t[x] = m ? f + "px" : "", t.transform = "", t));
}
function jR(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, u = {
    placement: fr(t.placement),
    variation: Ai(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Kg(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Kg(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const AR = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: jR,
  data: {}
};
var Xl = {
  passive: !0
};
function NR(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = vn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Xl);
  }), l && a.addEventListener("resize", n.update, Xl), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Xl);
    }), l && a.removeEventListener("resize", n.update, Xl);
  };
}
const OR = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: NR,
  data: {}
};
var BR = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return BR[t];
  });
}
var LR = {
  start: "end",
  end: "start"
};
function Gg(e) {
  return e.replace(/start|end/g, function(t) {
    return LR[t];
  });
}
function kh(e) {
  var t = vn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Eh(e) {
  return ji(ao(e)).left + kh(e).scrollLeft;
}
function zR(e, t) {
  var n = vn(e), r = ao(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = lx();
    (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Eh(e),
    y: a
  };
}
function _R(e) {
  var t, n = ao(e), r = kh(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = To(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = To(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Eh(e), a = -r.scrollTop;
  return Or(o || n).direction === "rtl" && (l += To(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Th(e) {
  var t = Or(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function fx(e) {
  return ["html", "body", "#document"].indexOf(hr(e)) >= 0 ? e.ownerDocument.body : $n(e) && Th(e) ? e : fx(Rc(e));
}
function Ms(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = fx(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = vn(r), s = o ? [i].concat(i.visualViewport || [], Th(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ms(Rc(s)))
  );
}
function Ff(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function FR(e, t) {
  var n = ji(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Yg(e, t, n) {
  return t === ix ? Ff(zR(e, n)) : Oo(t) ? FR(t, n) : Ff(_R(ao(e)));
}
function DR(e) {
  var t = Ms(Rc(e)), n = ["absolute", "fixed"].indexOf(Or(e).position) >= 0, r = n && $n(e) ? Sl(e) : e;
  return Oo(r) ? t.filter(function(o) {
    return Oo(o) && ax(o, r) && hr(o) !== "body";
  }) : [];
}
function WR(e, t, n, r) {
  var o = t === "clippingParents" ? DR(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, u) {
    var d = Yg(e, u, r);
    return a.top = To(d.top, a.top), a.right = fu(d.right, a.right), a.bottom = fu(d.bottom, a.bottom), a.left = To(d.left, a.left), a;
  }, Yg(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function px(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? fr(r) : null, i = r ? Ai(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case an:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Nn:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case On:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case un:
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
  var u = o ? Ch(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Mi:
        a[u] = a[u] - (t[d] / 2 - n[d] / 2);
        break;
      case il:
        a[u] = a[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return a;
}
function sl(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? aR : l, u = n.rootBoundary, d = u === void 0 ? ix : u, h = n.elementContext, g = h === void 0 ? is : h, f = n.altBoundary, v = f === void 0 ? !1 : f, w = n.padding, C = w === void 0 ? 0 : w, m = cx(typeof C != "number" ? C : dx(C, bl)), p = g === is ? uR : is, x = e.rects.popper, S = e.elements[v ? p : g], E = WR(Oo(S) ? S : S.contextElement || ao(e.elements.popper), a, d, s), k = ji(e.elements.reference), T = px({
    reference: k,
    element: x,
    placement: o
  }), R = Ff(Object.assign({}, x, T)), I = g === is ? R : k, A = {
    top: E.top - I.top + m.top,
    bottom: I.bottom - E.bottom + m.bottom,
    left: E.left - I.left + m.left,
    right: I.right - E.right + m.right
  }, M = e.modifiersData.offset;
  if (g === is && M) {
    var N = M[o];
    Object.keys(A).forEach(function(b) {
      var j = [On, Nn].indexOf(b) >= 0 ? 1 : -1, P = [an, Nn].indexOf(b) >= 0 ? "y" : "x";
      A[b] += N[P] * j;
    });
  }
  return A;
}
function UR(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? sx : a, d = Ai(r), h = d ? l ? Vg : Vg.filter(function(v) {
    return Ai(v) === d;
  }) : bl, g = h.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  g.length === 0 && (g = h);
  var f = g.reduce(function(v, w) {
    return v[w] = sl(e, {
      placement: w,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[fr(w)], v;
  }, {});
  return Object.keys(f).sort(function(v, w) {
    return f[v] - f[w];
  });
}
function VR(e) {
  if (fr(e) === bh)
    return [];
  var t = Pa(e);
  return [Gg(e), t, Gg(t)];
}
function HR(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, d = n.boundary, h = n.rootBoundary, g = n.altBoundary, f = n.flipVariations, v = f === void 0 ? !0 : f, w = n.allowedAutoPlacements, C = t.options.placement, m = fr(C), p = m === C, x = a || (p || !v ? [Pa(C)] : VR(C)), S = [C].concat(x).reduce(function(K, q) {
      return K.concat(fr(q) === bh ? UR(t, {
        placement: q,
        boundary: d,
        rootBoundary: h,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: w
      }) : q);
    }, []), E = t.rects.reference, k = t.rects.popper, T = /* @__PURE__ */ new Map(), R = !0, I = S[0], A = 0; A < S.length; A++) {
      var M = S[A], N = fr(M), b = Ai(M) === Mi, j = [an, Nn].indexOf(N) >= 0, P = j ? "width" : "height", O = sl(t, {
        placement: M,
        boundary: d,
        rootBoundary: h,
        altBoundary: g,
        padding: u
      }), B = j ? b ? On : un : b ? Nn : an;
      E[P] > k[P] && (B = Pa(B));
      var $ = Pa(B), L = [];
      if (i && L.push(O[N] <= 0), l && L.push(O[B] <= 0, O[$] <= 0), L.every(function(K) {
        return K;
      })) {
        I = M, R = !1;
        break;
      }
      T.set(M, L);
    }
    if (R)
      for (var D = v ? 3 : 1, U = function(q) {
        var G = S.find(function(oe) {
          var F = T.get(oe);
          if (F)
            return F.slice(0, q).every(function(ie) {
              return ie;
            });
        });
        if (G)
          return I = G, "break";
      }, W = D; W > 0; W--) {
        var Q = U(W);
        if (Q === "break") break;
      }
    t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const KR = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: HR,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Qg(e, t, n) {
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
function Xg(e) {
  return [an, On, Nn, un].some(function(t) {
    return e[t] >= 0;
  });
}
function GR(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = sl(t, {
    elementContext: "reference"
  }), l = sl(t, {
    altBoundary: !0
  }), a = Qg(s, r), u = Qg(l, o, i), d = Xg(a), h = Xg(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": h
  });
}
const YR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: GR
};
function QR(e, t, n) {
  var r = fr(e), o = [un, an].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [un, On].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function XR(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = sx.reduce(function(d, h) {
    return d[h] = QR(h, t.rects, i), d;
  }, {}), l = s[t.placement], a = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const qR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: XR
};
function JR(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = px({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const ZR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: JR,
  data: {}
};
function eP(e) {
  return e === "x" ? "y" : "x";
}
function tP(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, u = n.rootBoundary, d = n.altBoundary, h = n.padding, g = n.tether, f = g === void 0 ? !0 : g, v = n.tetherOffset, w = v === void 0 ? 0 : v, C = sl(t, {
    boundary: a,
    rootBoundary: u,
    padding: h,
    altBoundary: d
  }), m = fr(t.placement), p = Ai(t.placement), x = !p, S = Ch(m), E = eP(S), k = t.modifiersData.popperOffsets, T = t.rects.reference, R = t.rects.popper, I = typeof w == "function" ? w(Object.assign({}, t.rects, {
    placement: t.placement
  })) : w, A = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var b, j = S === "y" ? an : un, P = S === "y" ? Nn : On, O = S === "y" ? "height" : "width", B = k[S], $ = B + C[j], L = B - C[P], D = f ? -R[O] / 2 : 0, U = p === Mi ? T[O] : R[O], W = p === Mi ? -R[O] : -T[O], Q = t.elements.arrow, K = f && Q ? wh(Q) : {
        width: 0,
        height: 0
      }, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ux(), G = q[j], oe = q[P], F = Is(0, T[O], K[O]), ie = x ? T[O] / 2 - D - F - G - A.mainAxis : U - F - G - A.mainAxis, ee = x ? -T[O] / 2 + D + F + oe + A.mainAxis : W + F + oe + A.mainAxis, Ee = t.elements.arrow && Sl(t.elements.arrow), be = Ee ? S === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0 : 0, ue = (b = M == null ? void 0 : M[S]) != null ? b : 0, ce = B + ie - ue - be, ve = B + ee - ue, Be = Is(f ? fu($, ce) : $, B, f ? To(L, ve) : L);
      k[S] = Be, N[S] = Be - B;
    }
    if (l) {
      var ke, $e = S === "x" ? an : un, fe = S === "x" ? Nn : On, ye = k[E], Ne = E === "y" ? "height" : "width", Ke = ye + C[$e], Ze = ye - C[fe], vt = [an, un].indexOf(m) !== -1, Ct = (ke = M == null ? void 0 : M[E]) != null ? ke : 0, Ge = vt ? Ke : ye - T[Ne] - R[Ne] - Ct + A.altAxis, Oe = vt ? ye + T[Ne] + R[Ne] - Ct - A.altAxis : Ze, Pe = f && vt ? ER(Ge, ye, Oe) : Is(f ? Ge : Ke, ye, f ? Oe : Ze);
      k[E] = Pe, N[E] = Pe - ye;
    }
    t.modifiersData[r] = N;
  }
}
const nP = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: tP,
  requiresIfExists: ["offset"]
};
function rP(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function oP(e) {
  return e === vn(e) || !$n(e) ? kh(e) : rP(e);
}
function iP(e) {
  var t = e.getBoundingClientRect(), n = $i(t.width) / e.offsetWidth || 1, r = $i(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function sP(e, t, n) {
  n === void 0 && (n = !1);
  var r = $n(t), o = $n(t) && iP(t), i = ao(t), s = ji(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((hr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Th(i)) && (l = oP(t)), $n(t) ? (a = ji(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Eh(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function lP(e) {
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
function aP(e) {
  var t = lP(e);
  return xR.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function uP(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function cP(e) {
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
var qg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Jg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function dP(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? qg : o;
  return function(l, a, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, qg, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, h = [], g = !1, f = {
      state: d,
      setOptions: function(m) {
        var p = typeof m == "function" ? m(d.options) : m;
        w(), d.options = Object.assign({}, i, d.options, p), d.scrollParents = {
          reference: Oo(l) ? Ms(l) : l.contextElement ? Ms(l.contextElement) : [],
          popper: Ms(a)
        };
        var x = aP(cP([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = x.filter(function(S) {
          return S.enabled;
        }), v(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var m = d.elements, p = m.reference, x = m.popper;
          if (Jg(p, x)) {
            d.rects = {
              reference: sP(p, Sl(x), d.options.strategy === "fixed"),
              popper: wh(x)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(A) {
              return d.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var S = 0; S < d.orderedModifiers.length; S++) {
              if (d.reset === !0) {
                d.reset = !1, S = -1;
                continue;
              }
              var E = d.orderedModifiers[S], k = E.fn, T = E.options, R = T === void 0 ? {} : T, I = E.name;
              typeof k == "function" && (d = k({
                state: d,
                options: R,
                name: I,
                instance: f
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: uP(function() {
        return new Promise(function(C) {
          f.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        w(), g = !0;
      }
    };
    if (!Jg(l, a))
      return f;
    f.setOptions(u).then(function(C) {
      !g && u.onFirstUpdate && u.onFirstUpdate(C);
    });
    function v() {
      d.orderedModifiers.forEach(function(C) {
        var m = C.name, p = C.options, x = p === void 0 ? {} : p, S = C.effect;
        if (typeof S == "function") {
          var E = S({
            state: d,
            name: m,
            instance: f,
            options: x
          }), k = function() {
          };
          h.push(E || k);
        }
      });
    }
    function w() {
      h.forEach(function(C) {
        return C();
      }), h = [];
    }
    return f;
  };
}
var fP = [OR, ZR, AR, wR, qR, KR, nP, IR, YR], pP = /* @__PURE__ */ dP({
  defaultModifiers: fP
});
function Ni(e) {
  var h;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : nx(n, r), {
    props: l,
    internalRef: a
  } = rx({
    ...i,
    externalSlotProps: s
  }), u = ht(a, s == null ? void 0 : s.ref, (h = e.additionalProps) == null ? void 0 : h.ref);
  return tx(t, {
    ...l,
    ref: u
  }, r);
}
function zo(e) {
  var t;
  return parseInt(y.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function hP(e) {
  return typeof e == "function" ? e() : e;
}
const hx = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = y.useState(null), a = ht(/* @__PURE__ */ y.isValidElement(r) ? zo(r) : null, n);
  if (ft(() => {
    i || l(hP(o) || document.body);
  }, [o, i]), ft(() => {
    if (s && !i)
      return Af(n, s), () => {
        Af(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ y.isValidElement(r)) {
      const u = {
        ref: a
      };
      return /* @__PURE__ */ y.cloneElement(r, u);
    }
    return r;
  }
  return s && /* @__PURE__ */ Yv.createPortal(r, s);
});
function mP(e) {
  return he("MuiPopper", e);
}
de("MuiPopper", ["root"]);
function gP(e, t) {
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
function mx(e) {
  return typeof e == "function" ? e() : e;
}
function yP(e) {
  return e.nodeType !== void 0;
}
const vP = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, mP, t);
}, xP = {}, bP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: u,
    popperOptions: d,
    popperRef: h,
    slotProps: g = {},
    slots: f = {},
    TransitionProps: v,
    // @ts-ignore internal logic
    ownerState: w,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, m = y.useRef(null), p = ht(m, n), x = y.useRef(null), S = ht(x, h), E = y.useRef(S);
  ft(() => {
    E.current = S;
  }, [S]), y.useImperativeHandle(h, () => x.current, []);
  const k = gP(u, i), [T, R] = y.useState(k), I = y.useMemo(() => mx(r), [r]);
  y.useEffect(() => {
    x.current && x.current.forceUpdate();
  }), ft(() => {
    if (!I || !a)
      return;
    const j = ($) => {
      R($.placement);
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
        state: $
      }) => {
        j($);
      }
    }];
    l != null && (P = P.concat(l)), d && d.modifiers != null && (P = P.concat(d.modifiers));
    const O = pP(I, m.current, {
      placement: k,
      ...d,
      modifiers: P
    });
    E.current(O);
    const B = m.current;
    return () => {
      if (B) {
        const {
          style: $
        } = B, L = $.position, D = $.top, U = $.left, W = $.transform;
        O.destroy(), $.position = L, $.top = D, $.left = U, $.transform = W;
      } else
        O.destroy();
      E.current(null);
    };
  }, [I, s, l, a, d, k]);
  const A = {
    placement: T
  };
  v !== null && (A.TransitionProps = v);
  const M = vP(t), N = f.root ?? "div", b = Ni({
    elementType: N,
    externalSlotProps: g.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: p
    },
    ownerState: t,
    className: M.root
  });
  return /* @__PURE__ */ c.jsx(N, {
    ...b,
    children: typeof o == "function" ? o(A) : o
  });
}), SP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: u,
    open: d,
    placement: h = "bottom",
    popperOptions: g = xP,
    popperRef: f,
    style: v,
    transition: w = !1,
    slotProps: C = {},
    slots: m = {},
    ...p
  } = t, [x, S] = y.useState(!0), E = () => {
    S(!1);
  }, k = () => {
    S(!0);
  };
  if (!a && !d && (!w || x))
    return null;
  let T;
  if (i)
    T = i;
  else if (r) {
    const A = mx(r);
    T = A && yP(A) ? yt(A).body : yt(null).body;
  }
  const R = !d && a && (!w || x) ? "none" : void 0, I = w ? {
    in: d,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ c.jsx(hx, {
    disablePortal: l,
    container: T,
    children: /* @__PURE__ */ c.jsx(bP, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: w ? !x : d,
      placement: h,
      popperOptions: g,
      popperRef: f,
      slotProps: C,
      slots: m,
      ...p,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: R,
        ...v
      },
      TransitionProps: I,
      children: o
    })
  });
}), wP = H(SP, {
  name: "MuiPopper",
  slot: "Root"
})({}), gx = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = yc(), o = ge({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: d,
    open: h,
    placement: g,
    popperOptions: f,
    popperRef: v,
    transition: w,
    slots: C,
    slotProps: m,
    ...p
  } = o, x = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: d,
    open: h,
    placement: g,
    popperOptions: f,
    popperRef: v,
    transition: w,
    ...p
  };
  return /* @__PURE__ */ c.jsx(wP, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: m,
    ...x,
    ref: n
  });
}), CP = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function kP(e) {
  return he("MuiChip", e);
}
const He = de("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), EP = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: i,
    clickable: s,
    variant: l
  } = e, a = {
    root: ["root", l, n && "disabled", `size${ae(r)}`, `color${ae(o)}`, s && "clickable", i && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return me(a, kP, t);
}, TP = H("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => wn(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
      [`& .${He.avatar}`]: t.avatar
    }, {
      [`& .${He.icon}`]: t.icon
    }, {
      [`& .${He.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${ae(s)}`], t[`color${ae(r)}`], o && t.clickable, i && t.deletable, t[l]];
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
    ...St(e, ["background-color", "box-shadow"]),
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
    [`&.${He.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${He.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${He.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${He.deleteIcon}`]: {
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
        [`& .${He.avatar}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark
        }
      }
    }, {
      props: {
        color: "secondary"
      },
      style: {
        [`& .${He.avatar}`]: {
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
        [`& .${He.avatar}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10)
        },
        [`& .${He.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${He.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(_t(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${He.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${He.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${He.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: !e.focusVisible && {
        [`&.${He.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(_t(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: !e.focusVisible && {
        [`&.${He.focusVisible}`]: {
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
          [`&.${He.focusVisible}`]: {
            backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(_t(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        "&:hover": {
          backgroundColor: (e.vars || e).palette[n].dark
        },
        ...!e.focusVisible && {
          [`&.${He.focusVisible}`]: {
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
        [`&.${He.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        ...!e.focusVisible && {
          [`&.${He.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus
          }
        },
        [`& .${He.avatar}`]: {
          marginLeft: 4
        },
        [`& .${He.icon}`]: {
          marginLeft: 4
        },
        [`& .${He.deleteIcon}`]: {
          marginRight: 5
        }
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        [`& .${He.avatar}`]: {
          marginLeft: 2
        },
        [`& .${He.icon}`]: {
          marginLeft: 2
        },
        [`& .${He.deleteIcon}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(_t()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.alpha((e.vars || e).palette[n].main, 0.7)}`,
        [`&.${He.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
        },
        ...!e.focusVisible && {
          [`&.${He.focusVisible}`]: {
            backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
          }
        },
        [`& .${He.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), RP = H("span", {
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
function Zg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Ot = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    icon: h,
    label: g,
    onClick: f,
    onDelete: v,
    onKeyDown: w,
    onKeyUp: C,
    size: m = "medium",
    variant: p = "filled",
    tabIndex: x,
    skipFocusWhenDisabled: S = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: E = {},
    slotProps: k = {},
    ...T
  } = r, {
    nativeButton: R,
    ...I
  } = T, A = y.useRef(null), M = ht(A, n), N = (F) => {
    F.stopPropagation(), v(F);
  }, b = (F) => {
    F.currentTarget === F.target && Zg(F) && F.preventDefault(), w && w(F);
  }, j = (F) => {
    F.currentTarget === F.target && v && Zg(F) && v(F), C && C(F);
  }, P = s !== !1 && f ? !0 : s, O = P || v ? No : a || "div", B = {
    ...r,
    component: O,
    disabled: d,
    size: m,
    color: l,
    iconColor: /* @__PURE__ */ y.isValidElement(h) && h.props.color || l,
    onDelete: !!v,
    clickable: P,
    variant: p
  }, $ = EP(B), L = O === No ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: $.focusVisible,
    ...v && {
      disableRipple: !0
    },
    ...R !== void 0 && {
      nativeButton: R
    }
  } : {};
  let D = null;
  v && (D = u && /* @__PURE__ */ y.isValidElement(u) ? /* @__PURE__ */ y.cloneElement(u, {
    className: ne(u.props.className, $.deleteIcon),
    onClick: N
  }) : /* @__PURE__ */ c.jsx(CP, {
    className: $.deleteIcon,
    onClick: N
  }));
  let U = null;
  o && /* @__PURE__ */ y.isValidElement(o) && (U = /* @__PURE__ */ y.cloneElement(o, {
    className: ne($.avatar, o.props.className)
  }));
  let W = null;
  h && /* @__PURE__ */ y.isValidElement(h) && (W = /* @__PURE__ */ y.cloneElement(h, {
    className: ne($.icon, h.props.className)
  }));
  const Q = {
    slots: E,
    slotProps: k
  }, [K, q] = Ce("root", {
    elementType: TP,
    externalForwardedProps: {
      ...Q,
      ...I
    },
    ownerState: B,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: M,
    className: ne($.root, i),
    additionalProps: {
      disabled: P && d ? !0 : void 0,
      tabIndex: S && d ? -1 : x,
      ...L
    },
    getSlotProps: (F) => ({
      ...F,
      onClick: (ie) => {
        var ee;
        (ee = F.onClick) == null || ee.call(F, ie), f == null || f(ie);
      },
      onKeyDown: (ie) => {
        var ee;
        (ee = F.onKeyDown) == null || ee.call(F, ie), b(ie);
      },
      onKeyUp: (ie) => {
        var ee;
        (ee = F.onKeyUp) == null || ee.call(F, ie), j(ie);
      }
    })
  }), [G, oe] = Ce("label", {
    elementType: RP,
    externalForwardedProps: Q,
    ownerState: B,
    className: $.label
  });
  return /* @__PURE__ */ c.jsxs(K, {
    as: O,
    ...q,
    children: [U || W, /* @__PURE__ */ c.jsx(G, {
      ...oe,
      children: g
    }), D]
  });
}), PP = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), IP = {
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
}, MP = {
  opacity: 0,
  visibility: "hidden"
}, yx = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = lo(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: u,
    in: d,
    onEnter: h,
    onEntered: g,
    onEntering: f,
    onExit: v,
    onExited: w,
    onExiting: C,
    style: m,
    timeout: p = o,
    ...x
  } = t, S = Ec(r.motion.reducedMotion, a), E = y.useRef(null), k = ht(E, zo(l), n), T = Pn(E, f), R = Pn(E, (j, P) => {
    S.shouldReduceMotion || mh(j);
    const O = lu({
      style: m,
      timeout: p,
      easing: u
    }, {
      mode: "enter"
    }), B = S.getTransitionTiming({
      duration: O.duration,
      delay: O.delay
    });
    j.style.transition = r.transitions.create("opacity", {
      duration: B.duration,
      easing: O.easing,
      delay: B.delay
    }), h && h(j, P);
  }), I = Pn(E, g), A = Pn(E, C), M = Pn(E, (j) => {
    const P = lu({
      style: m,
      timeout: p,
      easing: u
    }, {
      mode: "exit"
    }), O = S.getTransitionTiming({
      duration: P.duration,
      delay: P.delay
    });
    j.style.transition = r.transitions.create("opacity", {
      duration: O.duration,
      easing: P.easing,
      delay: O.delay
    }), v && v(j);
  }), N = Pn(E, (j) => {
    j.style.transition = "", w && w(j);
  }), b = i ? (j) => {
    i(E.current, j);
  } : void 0;
  return /* @__PURE__ */ c.jsx(J1, {
    appear: s,
    in: d,
    nodeRef: E,
    onEnter: R,
    onEntered: I,
    onEntering: T,
    onExit: M,
    onExited: N,
    onExiting: A,
    addEndListener: b,
    reduceMotion: S.shouldReduceMotion,
    timeout: p,
    ...x,
    children: (j, {
      ownerState: P,
      ...O
    }) => {
      const B = X1(j, d, IP, MP, m, l.props.style);
      return /* @__PURE__ */ y.cloneElement(l, {
        style: B,
        ref: k,
        ...O
      });
    }
  });
});
function $P(e) {
  return he("MuiBackdrop", e);
}
de("MuiBackdrop", ["root", "invisible"]);
const jP = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return me({
    root: ["root", n && "invisible"]
  }, $P, t);
}, AP = H("div", {
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
}), vx = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    transitionDuration: h,
    ...g
  } = r, f = {
    ...r,
    component: s,
    invisible: l
  }, v = jP(f), w = {
    component: s,
    slots: d,
    slotProps: u
  }, [C, m] = Ce("root", {
    elementType: AP,
    externalForwardedProps: w,
    className: ne(v.root, i),
    ownerState: f
  }), [p, x] = Ce("transition", {
    elementType: yx,
    externalForwardedProps: w,
    ownerState: f
  });
  return /* @__PURE__ */ c.jsx(p, {
    in: a,
    timeout: h,
    ...g,
    ...x,
    children: /* @__PURE__ */ c.jsx(C, {
      ...m,
      ref: n,
      children: o
    })
  });
}), NP = de("MuiBox", ["root"]), OP = xc(), Ae = H2({
  themeId: cr,
  defaultTheme: OP,
  defaultClassName: NP.root,
  generateClassName: T1.generate
});
function BP(e) {
  return he("MuiButton", e);
}
const wr = de("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), xx = /* @__PURE__ */ y.createContext({}), bx = /* @__PURE__ */ y.createContext(void 0), LP = (e) => {
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
    root: ["root", s && "loading", i, `size${ae(o)}`, `color${ae(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${ae(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = me(u, BP, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, Sx = [{
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
}], zP = H(No, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ae(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(Te(({
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
    ...St(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${wr.disabled}`]: {
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
        [`&.${wr.focusVisible}`]: {
          ...e.focusVisible,
          boxShadow: (r = e.focusVisible) != null && r.boxShadow ? `${(e.vars || e).shadows[6]}, ${e.focusVisible.boxShadow}` : (e.vars || e).shadows[6]
        },
        [`&.${wr.disabled}`]: {
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
        [`&.${wr.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(_t()).map(([i]) => ({
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
        [`&.${wr.focusVisible}`]: {
          boxShadow: ((o = e.focusVisible) == null ? void 0 : o.boxShadow) ?? "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${wr.disabled}`]: {
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
        ...St(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${wr.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), _P = H("span", {
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
      ...St(e, ["opacity"], {
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
  }, ...Sx]
})), FP = H("span", {
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
      ...St(e, ["opacity"], {
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
  }, ...Sx]
})), DP = H("span", {
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
})), ey = H("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), mt = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = y.useContext(xx), o = y.useContext(bx), i = Ii(r, t), s = ge({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: u = "button",
    className: d,
    disabled: h = !1,
    disableElevation: g = !1,
    disableFocusRipple: f = !1,
    endIcon: v,
    focusVisibleClassName: w,
    fullWidth: C = !1,
    id: m,
    loading: p = null,
    loadingIndicator: x,
    loadingPosition: S = "center",
    size: E = "medium",
    startIcon: k,
    type: T,
    variant: R = "text",
    ...I
  } = s, A = Nr(m), M = x ?? /* @__PURE__ */ c.jsx(Ps, {
    "aria-labelledby": A,
    color: "inherit",
    size: 16
  }), N = {
    ...s,
    color: a,
    component: u,
    disabled: h,
    disableElevation: g,
    disableFocusRipple: f,
    fullWidth: C,
    loading: p,
    loadingIndicator: M,
    loadingPosition: S,
    size: E,
    type: T,
    variant: R
  }, b = LP(N), j = (k || p && S === "start") && /* @__PURE__ */ c.jsx(_P, {
    className: b.startIcon,
    ownerState: N,
    children: k || /* @__PURE__ */ c.jsx(ey, {
      className: b.loadingIconPlaceholder,
      ownerState: N
    })
  }), P = (v || p && S === "end") && /* @__PURE__ */ c.jsx(FP, {
    className: b.endIcon,
    ownerState: N,
    children: v || /* @__PURE__ */ c.jsx(ey, {
      className: b.loadingIconPlaceholder,
      ownerState: N
    })
  }), O = o || "", B = typeof p == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ c.jsx("span", {
      className: b.loadingWrapper,
      style: {
        display: "contents"
      },
      children: p && /* @__PURE__ */ c.jsx(DP, {
        className: b.loadingIndicator,
        ownerState: N,
        children: M
      })
    })
  ) : null, {
    root: $,
    ...L
  } = b;
  return /* @__PURE__ */ c.jsxs(zP, {
    ownerState: N,
    className: ne(r.className, b.root, d, O),
    component: u,
    disabled: h || p,
    focusRipple: !f,
    focusVisibleClassName: ne(b.focusVisible, w),
    ref: n,
    internalNativeButton: !0,
    type: T,
    id: p ? A : m,
    ...I,
    classes: L,
    children: [j, S !== "end" && B, l, S === "end" && B, P]
  });
});
function WP(e) {
  return y.Children.toArray(e).filter((t) => /* @__PURE__ */ y.isValidElement(t));
}
function UP(e) {
  return he("MuiButtonGroup", e);
}
const Re = de("MuiButtonGroup", ["root", "contained", "outlined", "text", "disableElevation", "disabled", "firstButton", "fullWidth", "horizontal", "vertical", "colorPrimary", "colorSecondary", "grouped", "lastButton", "middleButton"]), VP = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [{
    [`& .${Re.grouped}`]: t.grouped
  }, {
    [`& .${Re.firstButton}`]: t.firstButton
  }, {
    [`& .${Re.lastButton}`]: t.lastButton
  }, {
    [`& .${Re.middleButton}`]: t.middleButton
  }, t.root, t[n.variant], n.disableElevation === !0 && t.disableElevation, n.fullWidth && t.fullWidth, n.orientation === "vertical" && t.vertical];
}, HP = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    disableElevation: o,
    fullWidth: i,
    orientation: s,
    variant: l
  } = e, a = {
    root: ["root", l, s, i && "fullWidth", o && "disableElevation", `color${ae(n)}`],
    grouped: ["grouped", r && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return me(a, UP, t);
}, KP = H("div", {
  name: "MuiButtonGroup",
  slot: "Root",
  overridesResolver: VP
})(Te(({
  theme: e
}) => ({
  display: "inline-flex",
  borderRadius: (e.vars || e).shape.borderRadius,
  ...e.focusVisible && {
    // paint the focused item above its siblings so they cannot cover the ring edges
    [`& .${Re.grouped}.${wr.focusVisible}`]: {
      zIndex: 1
    }
  },
  variants: [{
    props: {
      variant: "contained"
    },
    style: {
      boxShadow: (e.vars || e).shadows[2],
      [`& .${Re.grouped}`]: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        }
      },
      ...e.focusVisible && {
        [`& .${Re.grouped}.${wr.focusVisible}`]: {
          boxShadow: e.focusVisible.boxShadow
        }
      }
    }
  }, {
    props: {
      disableElevation: !0
    },
    style: {
      boxShadow: "none"
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
      orientation: "vertical"
    },
    style: {
      flexDirection: "column",
      [`& .${Re.lastButton},& .${Re.middleButton}`]: {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      },
      [`& .${Re.firstButton},& .${Re.middleButton}`]: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      }
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      [`& .${Re.firstButton},& .${Re.middleButton}`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${Re.lastButton},& .${Re.middleButton}`]: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }
    }
  }, {
    props: {
      variant: "text",
      orientation: "horizontal"
    },
    style: {
      [`& .${Re.firstButton},& .${Re.middleButton}`]: {
        borderRight: e.vars ? `1px solid ${e.alpha(e.vars.palette.common.onBackground, 0.23)}` : `1px solid ${e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
        [`&.${Re.disabled}`]: {
          borderRight: `1px solid ${(e.vars || e).palette.action.disabled}`
        }
      }
    }
  }, {
    props: {
      variant: "text",
      orientation: "vertical"
    },
    style: {
      [`& .${Re.firstButton},& .${Re.middleButton}`]: {
        borderBottom: e.vars ? `1px solid ${e.alpha(e.vars.palette.common.onBackground, 0.23)}` : `1px solid ${e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
        [`&.${Re.disabled}`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.action.disabled}`
        }
      }
    }
  }, ...Object.entries(e.palette).filter(_t()).flatMap(([t]) => [{
    props: {
      variant: "text",
      color: t
    },
    style: {
      [`& .${Re.firstButton},& .${Re.middleButton}`]: {
        borderColor: e.alpha((e.vars || e).palette[t].main, 0.5)
      }
    }
  }]), {
    props: {
      variant: "outlined",
      orientation: "horizontal"
    },
    style: {
      [`& .${Re.firstButton},& .${Re.middleButton}`]: {
        borderRightColor: "transparent",
        "@media (hover: hover)": {
          "&:hover": {
            borderRightColor: "currentColor"
          }
        }
      },
      [`& .${Re.lastButton},& .${Re.middleButton}`]: {
        marginLeft: -1
      }
    }
  }, {
    props: {
      variant: "outlined",
      orientation: "vertical"
    },
    style: {
      [`& .${Re.firstButton},& .${Re.middleButton}`]: {
        borderBottomColor: "transparent",
        "@media (hover: hover)": {
          "&:hover": {
            borderBottomColor: "currentColor"
          }
        }
      },
      [`& .${Re.lastButton},& .${Re.middleButton}`]: {
        marginTop: -1
      }
    }
  }, {
    props: {
      variant: "contained",
      orientation: "horizontal"
    },
    style: {
      [`& .${Re.firstButton},& .${Re.middleButton}`]: {
        borderRight: `1px solid ${(e.vars || e).palette.grey[400]}`,
        [`&.${Re.disabled}`]: {
          borderRight: `1px solid ${(e.vars || e).palette.action.disabled}`
        }
      }
    }
  }, {
    props: {
      variant: "contained",
      orientation: "vertical"
    },
    style: {
      [`& .${Re.firstButton},& .${Re.middleButton}`]: {
        borderBottom: `1px solid ${(e.vars || e).palette.grey[400]}`,
        [`&.${Re.disabled}`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.action.disabled}`
        }
      }
    }
  }, ...Object.entries(e.palette).filter(_t(["dark"])).map(([t]) => ({
    props: {
      variant: "contained",
      color: t
    },
    style: {
      [`& .${Re.firstButton},& .${Re.middleButton}`]: {
        borderColor: (e.vars || e).palette[t].dark
      }
    }
  }))],
  [`& .${Re.grouped}`]: {
    minWidth: 40
  }
}))), GP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiButtonGroup"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: l = "div",
    disabled: a = !1,
    disableElevation: u = !1,
    disableFocusRipple: d = !1,
    disableRipple: h = !1,
    fullWidth: g = !1,
    orientation: f = "horizontal",
    size: v = "medium",
    variant: w = "outlined",
    ...C
  } = r, m = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    disableElevation: u,
    disableFocusRipple: d,
    disableRipple: h,
    fullWidth: g,
    orientation: f,
    size: v,
    variant: w
  }, p = HP(m), x = y.useMemo(() => ({
    className: p.grouped,
    color: s,
    disabled: a,
    disableElevation: u,
    disableFocusRipple: r.disableFocusRipple,
    disableRipple: r.disableRipple,
    fullWidth: g,
    size: v,
    variant: w
  }), [s, a, u, r.disableFocusRipple, r.disableRipple, g, v, w, p.grouped]), S = WP(o), E = S.length, k = (T) => {
    const R = T === 0, I = T === E - 1;
    return R && I ? "" : R ? p.firstButton : I ? p.lastButton : p.middleButton;
  };
  return /* @__PURE__ */ c.jsx(KP, {
    as: l,
    role: "group",
    className: ne(p.root, i),
    ref: n,
    ownerState: m,
    ...C,
    children: /* @__PURE__ */ c.jsx(xx.Provider, {
      value: x,
      children: S.map((T, R) => /* @__PURE__ */ c.jsx(bx.Provider, {
        value: k(R),
        children: T
      }, R))
    })
  });
});
function YP(e) {
  return he("MuiCard", e);
}
de("MuiCard", ["root"]);
const QP = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, YP, t);
}, XP = H(pr, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), ql = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1,
    ...s
  } = r, l = {
    ...r,
    raised: i
  }, a = QP(l);
  return /* @__PURE__ */ c.jsx(XP, {
    className: ne(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function qP(e) {
  return he("MuiCardContent", e);
}
de("MuiCardContent", ["root"]);
const JP = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, qP, t);
}, ZP = H("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Jl = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = JP(l);
  return /* @__PURE__ */ c.jsx(ZP, {
    as: i,
    className: ne(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function ty(e) {
  return e.substring(2).toLowerCase();
}
function e5(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function t5(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, s = y.useRef(!1), l = y.useRef(null), a = y.useRef(!1), u = y.useRef(!1);
  y.useEffect(() => (setTimeout(() => {
    a.current = !0;
  }, 0), () => {
    a.current = !1;
  }), []);
  const d = ht(zo(t), l), h = rt((v) => {
    const w = u.current;
    u.current = !1;
    const C = yt(l.current);
    if (!a.current || !l.current || "clientX" in v && e5(v, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let m;
    v.composedPath ? m = v.composedPath().includes(l.current) : m = !Eo(C.documentElement, v.target) || Eo(l.current, v.target), !m && (n || !w) && o(v);
  }), g = (v) => (w) => {
    u.current = !0;
    const C = t.props[v];
    C && C(w);
  }, f = {
    ref: d
  };
  return i !== !1 && (f[i] = g(i)), y.useEffect(() => {
    if (i !== !1) {
      const v = ty(i), w = yt(l.current), C = () => {
        s.current = !0;
      };
      return w.addEventListener(v, h), w.addEventListener("touchmove", C), () => {
        w.removeEventListener(v, h), w.removeEventListener("touchmove", C);
      };
    }
  }, [h, i]), r !== !1 && (f[r] = g(r)), y.useEffect(() => {
    if (r !== !1) {
      const v = ty(r), w = yt(l.current);
      return w.addEventListener(v, h), () => {
        w.removeEventListener(v, h);
      };
    }
  }, [h, r]), /* @__PURE__ */ y.cloneElement(t, f);
}
function wx(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function n5(e) {
  const t = yt(e);
  return e === t.body || e === t.documentElement ? Qn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function $s(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ny(e) {
  return parseFloat(Qn(e).getComputedStyle(e).paddingRight) || 0;
}
function r5(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function ry(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !r5(s);
    l && a && $s(s, o);
  });
}
function o5(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = yt(r).body;
    else {
      const s = r.parentElement, l = Qn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (n5(i)) {
      const s = wx(Qn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${ny(i) + s}px`;
      const l = yt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${ny(a) + s}px`;
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
function i5(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class s5 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && $s(t.modalRef, !1);
    const o = i5(n);
    ry(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = o5(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && $s(t.modalRef, n), ry(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && $s(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Df = "data-mui-focusable";
function oy(e) {
  return e ? e.hasAttribute(Df) ? e : e.querySelector(`[${Df}]`) : null;
}
const l5 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Cx(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function a5(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function u5(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || a5(e));
}
function c5(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(l5)).forEach((r, o) => {
    const i = Cx(r);
    i === -1 || !u5(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function d5() {
  return !0;
}
function f5(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = c5,
    isEnabled: s = d5,
    open: l
  } = e, a = y.useRef(!1), u = y.useRef(null), d = y.useRef(null), h = y.useRef(null), g = y.useRef(null), f = y.useRef(!1), v = y.useRef(null), w = ht(zo(t), v), C = y.useRef(null);
  y.useEffect(() => {
    !l || !v.current || (f.current = !n);
  }, [n, l]), y.useEffect(() => {
    if (a.current = !1, !l || !v.current)
      return;
    const x = yt(v.current), S = sr(x), E = oy(v.current) ?? v.current;
    return Eo(v.current, S) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), f.current && E.focus()), () => {
      !o && h.current && (a.current = !0, h.current.focus(), h.current = null);
    };
  }, [l]), y.useEffect(() => {
    if (!l || !v.current)
      return;
    const x = yt(v.current), S = (T) => {
      if (C.current = T, r || !s() || T.key !== "Tab")
        return;
      const R = v.current, I = sr(x);
      if (R === null)
        return;
      const A = oy(R);
      if (I === R || I === A) {
        const N = i(R);
        if (N.length === 0)
          return;
        T.preventDefault(), T.shiftKey ? N[N.length - 1].focus() : N[0].focus();
        return;
      }
      if (Eo(R, I)) {
        const N = i(R), b = N.indexOf(I);
        if (b === -1 || !N.some((O) => Cx(O) > 0))
          return;
        T.preventDefault();
        let P = 0;
        T.shiftKey ? P = b <= 0 ? N.length - 1 : b - 1 : P = b === N.length - 1 ? 0 : b + 1, N[P].focus();
      }
    }, E = () => {
      var A, M;
      const T = v.current;
      if (T === null)
        return;
      const R = sr(x);
      if (!x.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (Eo(T, R) || r && R !== u.current && R !== d.current)
        return;
      if (R !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!f.current)
        return;
      let I = [];
      if ((R === u.current || R === d.current) && (I = i(v.current)), I.length > 0) {
        const N = !!((A = C.current) != null && A.shiftKey && ((M = C.current) == null ? void 0 : M.key) === "Tab"), b = I[0], j = I[I.length - 1];
        typeof b != "string" && typeof j != "string" && (N ? j.focus() : b.focus());
      } else
        T.focus();
    };
    x.addEventListener("focusin", E), x.addEventListener("keydown", S, !0);
    const k = setInterval(() => {
      const T = sr(x);
      T && T.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), x.removeEventListener("focusin", E), x.removeEventListener("keydown", S, !0);
    };
  }, [n, r, o, s, l, i]);
  const m = (x) => {
    h.current === null && (h.current = x.relatedTarget), f.current = !0, g.current = x.target;
    const S = t.props.onFocus;
    S && S(x);
  }, p = (x) => {
    h.current === null && (h.current = x.relatedTarget), f.current = !0;
  };
  return /* @__PURE__ */ c.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ c.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ y.cloneElement(t, {
      ref: w,
      onFocus: m
    }), /* @__PURE__ */ c.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
function p5(e) {
  return typeof e == "function" ? e() : e;
}
function h5(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const iy = () => {
}, Zl = new s5();
function m5(e) {
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
  } = e, d = y.useRef({}), h = y.useRef(null), g = y.useRef(null), f = y.useRef(null), v = ht(f, u), [w, C] = y.useState(!a), m = h5(s);
  let p = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (p = !1);
  const x = () => yt(h.current), S = () => (d.current.modalRef = f.current, d.current.mount = h.current, d.current), E = () => {
    Zl.mount(S(), {
      disableScrollLock: n
    }), f.current && (f.current.scrollTop = 0);
  }, k = rt(() => {
    const O = p5(t) || x().body;
    Zl.add(S(), O), f.current && E();
  }), T = () => Zl.isTopModal(S()), R = rt((O) => {
    h.current = O, O && (g.current = O, a && T() ? E() : f.current && $s(f.current, p));
  }), I = y.useCallback(() => {
    Zl.remove(S(), p);
  }, [p]);
  y.useEffect(() => () => {
    I();
  }, [I]), y.useEffect(() => {
    a ? k() : (!m || !r) && I();
  }, [a, I, m, r, k]);
  const A = (O) => (B) => {
    var $;
    ($ = O.onKeyDown) == null || $.call(O, B), !(B.key !== "Escape" || B.which === 229 || // Wait until IME is settled.
    !T()) && (B.stopPropagation(), l && l(B, "escapeKeyDown"));
  }, M = (O) => (B) => {
    var $;
    ($ = O.onClick) == null || $.call(O, B), B.target === B.currentTarget && l && l(B, "backdropClick");
  }, N = (O = {}) => {
    const B = uu(e);
    delete B.onTransitionEnter, delete B.onTransitionExited;
    const $ = {
      ...B,
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
      ...$,
      onKeyDown: A($),
      ref: v
    };
  }, b = (O = {}) => {
    const B = O;
    return {
      "aria-hidden": !0,
      ...B,
      onClick: M(B),
      open: a
    };
  }, j = () => {
    const O = () => {
      C(!1), o && o();
    }, B = () => {
      C(!0), i && i(), r && I();
    };
    return {
      onEnter: Ag(O, (s == null ? void 0 : s.props.onEnter) ?? iy),
      onExited: Ag(B, (s == null ? void 0 : s.props.onExited) ?? iy)
    };
  }, P = !a && m && !w ? g.current ?? t : t;
  return {
    getRootProps: N,
    getBackdropProps: b,
    getTransitionProps: j,
    rootRef: v,
    portalRef: R,
    portalContainer: P,
    isTopModal: T,
    exited: w,
    hasTransition: m
  };
}
function g5(e) {
  return he("MuiModal", e);
}
de("MuiModal", ["root", "hidden", "backdrop"]);
const y5 = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return me({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, g5, r);
}, v5 = H("div", {
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
}))), x5 = H(vx, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), kx = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    disableEnforceFocus: h = !1,
    disablePortal: g = !1,
    disableRestoreFocus: f = !1,
    disableScrollLock: v = !1,
    hideBackdrop: w = !1,
    keepMounted: C = !1,
    onClose: m,
    onTransitionEnter: p,
    onTransitionExited: x,
    open: S,
    slotProps: E = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: T,
    ...R
  } = r, I = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: d,
    disableEnforceFocus: h,
    disablePortal: g,
    disableRestoreFocus: f,
    disableScrollLock: v,
    hideBackdrop: w,
    keepMounted: C
  }, {
    getRootProps: A,
    getBackdropProps: M,
    getTransitionProps: N,
    portalRef: b,
    portalContainer: j,
    isTopModal: P,
    exited: O,
    hasTransition: B
  } = m5({
    ...I,
    rootRef: n
  }), $ = {
    ...I,
    exited: O
  }, L = y5($), D = {};
  if (l.props.tabIndex === void 0 && (D.tabIndex = "-1"), B) {
    const {
      onEnter: G,
      onExited: oe
    } = N();
    D.onEnter = G, D.onExited = oe;
  }
  const U = {
    slots: k,
    slotProps: E
  }, [W, Q] = Ce("root", {
    ref: n,
    elementType: v5,
    externalForwardedProps: {
      ...U,
      ...R,
      component: u
    },
    getSlotProps: A,
    ownerState: $,
    className: ne(i, L == null ? void 0 : L.root, !$.open && $.exited && (L == null ? void 0 : L.hidden))
  }), [K, q] = Ce("backdrop", {
    elementType: x5,
    externalForwardedProps: U,
    shouldForwardComponentProp: !0,
    getSlotProps: (G) => M({
      ...G,
      onClick: (oe) => {
        G != null && G.onClick && G.onClick(oe);
      }
    }),
    className: L == null ? void 0 : L.backdrop,
    ownerState: $
  });
  return !C && !S && (!B || O) ? null : /* @__PURE__ */ c.jsx(hx, {
    ref: b,
    container: j,
    disablePortal: g,
    children: /* @__PURE__ */ c.jsxs(W, {
      ...Q,
      children: [w ? null : /* @__PURE__ */ c.jsx(K, {
        ...q
      }), /* @__PURE__ */ c.jsx(f5, {
        disableEnforceFocus: h,
        disableAutoFocus: d,
        disableRestoreFocus: f,
        isEnabled: P,
        open: S,
        children: /* @__PURE__ */ y.cloneElement(l, D)
      })]
    })
  });
});
function b5(e) {
  return he("MuiDialog", e);
}
de("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const Ex = /* @__PURE__ */ y.createContext({}), S5 = H(vx, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), w5 = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${ae(n)}`],
    paper: ["paper", `paperWidth${ae(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return me(s, b5, t);
}, C5 = H(kx, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), k5 = H("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${ae(n.scroll)}`]];
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
}), E5 = H(pr, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${ae(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
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
}))), ss = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiDialog"
  }), o = lo(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: u,
    className: d,
    fullScreen: h = !1,
    fullWidth: g = !1,
    maxWidth: f = "sm",
    onClick: v,
    onClose: w,
    open: C,
    PaperComponent: m = pr,
    role: p = "dialog",
    scroll: x = "paper",
    slots: S = {},
    slotProps: E = {},
    transitionDuration: k = i,
    ...T
  } = r, R = {
    ...r,
    fullScreen: h,
    fullWidth: g,
    maxWidth: f,
    scroll: x
  }, I = w5(R), A = y.useRef(), M = (G) => {
    A.current = G.target === G.currentTarget;
  }, N = (G) => {
    v && v(G), A.current && (A.current = null, w && w(G, "backdropClick"));
  }, b = Nr(l), j = y.useMemo(() => ({
    titleId: b
  }), [b]), P = {
    slots: S,
    slotProps: E
  }, [O, B] = Ce("root", {
    elementType: C5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: R,
    className: ne(I.root, d),
    ref: n
  }), [$, L] = Ce("backdrop", {
    elementType: S5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: R,
    className: I.backdrop
  }), [D, U] = Ce("paper", {
    elementType: E5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: R,
    className: I.paper,
    additionalProps: {
      elevation: 24,
      role: p,
      "aria-describedby": s,
      "aria-labelledby": b,
      "aria-modal": a,
      tabIndex: -1,
      [Df]: ""
    }
  }), [W, Q] = Ce("container", {
    elementType: k5,
    externalForwardedProps: P,
    ownerState: R,
    className: I.container
  }), [K, q] = Ce("transition", {
    elementType: yx,
    externalForwardedProps: P,
    ownerState: R,
    additionalProps: {
      appear: !0,
      in: C,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ c.jsx(O, {
    closeAfterTransition: !0,
    slots: {
      backdrop: $
    },
    slotProps: {
      backdrop: {
        transitionDuration: k,
        ...L
      }
    },
    onClose: w,
    open: C,
    onClick: N,
    ...B,
    ...T,
    children: /* @__PURE__ */ c.jsx(K, {
      ...q,
      children: /* @__PURE__ */ c.jsx(W, {
        onMouseDown: M,
        ...Q,
        children: /* @__PURE__ */ c.jsx(D, {
          as: m,
          ...U,
          children: /* @__PURE__ */ c.jsx(Ex.Provider, {
            value: j,
            children: u
          })
        })
      })
    })
  });
});
function T5(e) {
  return he("MuiDialogActions", e);
}
de("MuiDialogActions", ["root", "spacing"]);
const R5 = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return me({
    root: ["root", !n && "spacing"]
  }, T5, t);
}, P5 = H("div", {
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
}), ls = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, l = {
    ...r,
    disableSpacing: i
  }, a = R5(l);
  return /* @__PURE__ */ c.jsx(P5, {
    className: ne(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function I5(e) {
  return he("MuiDialogContent", e);
}
de("MuiDialogContent", ["root", "dividers"]);
function M5(e) {
  return he("MuiDialogTitle", e);
}
const $5 = de("MuiDialogTitle", ["root"]), j5 = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return me({
    root: ["root", n && "dividers"]
  }, I5, t);
}, A5 = H("div", {
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
      [`.${$5.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), as = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, l = {
    ...r,
    dividers: i
  }, a = j5(l);
  return /* @__PURE__ */ c.jsx(A5, {
    className: ne(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), N5 = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, M5, t);
}, O5 = H(we, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), us = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = N5(l), {
    titleId: u = i
  } = y.useContext(Ex);
  return /* @__PURE__ */ c.jsx(O5, {
    component: "h2",
    className: ne(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
}), sy = de("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function Tx(e) {
  return he("MuiSelect", e);
}
const vo = de("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), B5 = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: l
  } = e, a = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${ae(i)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = me(a, LE, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, L5 = H(Cc, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Sc(e, t), !n.disableUnderline && t.underline];
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
    ...St(e, "background-color", {
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
          ...St(e, "transform", {
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
          ...St(e, "border-bottom-color", {
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
    }, ...Object.entries(e.palette).filter(_t()).map(([s]) => {
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
        [`&.${vo.root}`]: {
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
})), z5 = H(kc, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: wc
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
}))), Rh = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    slots: h = {},
    type: g = "text",
    ...f
  } = r, v = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: g
  }, w = B5(r), C = {
    root: {
      ownerState: v
    },
    input: {
      ownerState: v
    }
  }, m = d ? jt(C, d) : C, p = h.root ?? L5, x = h.input ?? z5;
  return /* @__PURE__ */ c.jsx(yh, {
    slots: {
      root: p,
      input: x
    },
    slotProps: m,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    ref: n,
    type: g,
    ...f,
    classes: w
  });
});
Rh.muiName = "Input";
function _5(e) {
  return he("MuiFormControl", e);
}
de("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const F5 = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ae(n)}`, r && "fullWidth"]
  };
  return me(o, _5, t);
}, D5 = H("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${ae(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), W5 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    fullWidth: h = !1,
    hiddenLabel: g = !1,
    margin: f = "none",
    required: v = !1,
    size: w = "medium",
    variant: C = "outlined",
    ...m
  } = r, p = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    error: u,
    fullWidth: h,
    hiddenLabel: g,
    margin: f,
    required: v,
    size: w,
    variant: C
  }, x = F5(p), [S, E] = y.useState(() => {
    let P = !1;
    return o && y.Children.forEach(o, (O) => {
      if (!md(O, ["Input", "Select"]))
        return;
      const B = md(O, ["Select"]) ? O.props.input : O;
      B && ME(B.props) && (P = !0);
    }), P;
  }), [k, T] = y.useState(() => {
    let P = !1;
    return o && y.Children.forEach(o, (O) => {
      md(O, ["Input", "Select"]) && (su(O.props, !0) || su(O.props.inputProps, !0)) && (P = !0);
    }), P;
  }), [R, I] = y.useState(!1);
  a && R && I(!1);
  const A = d !== void 0 && !a ? d : R;
  let M;
  y.useRef(!1);
  const N = y.useCallback(() => {
    T(!0);
  }, []), b = y.useCallback(() => {
    T(!1);
  }, []), j = y.useMemo(() => ({
    adornedStart: S,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: u,
    filled: k,
    focused: A,
    fullWidth: h,
    hiddenLabel: g,
    size: w,
    onBlur: () => {
      I(!1);
    },
    onFocus: () => {
      I(!0);
    },
    onEmpty: b,
    onFilled: N,
    registerEffect: M,
    required: v,
    variant: C
  }), [S, s, a, u, k, A, h, g, M, b, N, v, w, C]);
  return /* @__PURE__ */ c.jsx(ph.Provider, {
    value: j,
    children: /* @__PURE__ */ c.jsx(D5, {
      as: l,
      ownerState: p,
      className: ne(x.root, i),
      ref: n,
      ...m,
      children: o
    })
  });
});
var ly;
const U5 = (e) => {
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
    root: ["root", o && "disabled", i && "error", r && `size${ae(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return me(u, zE, t);
}, V5 = H("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ae(n.size)}`], n.contained && t.contained, n.filled && t.filled];
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
  [`&.${jg.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${jg.error}`]: {
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
}))), H5 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    margin: h,
    required: g,
    variant: f,
    ...v
  } = r, [w] = Ui({
    props: r,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), C = {
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
  delete C.ownerState;
  const m = U5(C);
  return /* @__PURE__ */ c.jsx(V5, {
    as: s,
    className: ne(m.root, i),
    ref: n,
    ...v,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      ly || (ly = /* @__PURE__ */ c.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), K5 = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${ae(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return me(a, _E, t);
}, G5 = H("label", {
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
  variants: [...Object.entries(e.palette).filter(_t()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Rs.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Rs.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Rs.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), Y5 = H("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(Te(({
  theme: e
}) => ({
  [`&.${Rs.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Q5 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    focused: h,
    required: g,
    ...f
  } = r, [v] = Ui({
    props: r,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), w = {
    ...r,
    color: v.color || "primary",
    component: l,
    disabled: v.disabled,
    error: v.error,
    filled: v.filled,
    focused: v.focused,
    required: v.required
  }, C = K5(w);
  return /* @__PURE__ */ c.jsxs(G5, {
    as: l,
    ownerState: w,
    className: ne(C.root, i),
    ref: n,
    ...f,
    children: [o, v.required && /* @__PURE__ */ c.jsxs(Y5, {
      ownerState: w,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function js(e) {
  return `scale(${e}, ${e ** 2})`;
}
const X5 = {
  entering: {
    opacity: 1,
    transform: js(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: js(0.75)
  },
  exited: {
    opacity: 0,
    transform: js(0.75)
  }
}, q5 = {
  opacity: 0,
  transform: js(0.75),
  visibility: "hidden"
}, ll = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: u,
    onEntered: d,
    onEntering: h,
    onExit: g,
    onExited: f,
    onExiting: v,
    style: w,
    timeout: C = "auto",
    ...m
  } = t, p = y.useRef(null), x = lo(), S = Ec(x.motion.reducedMotion, s), E = y.useRef(null), k = ht(E, zo(i), n), T = Pn(E, h), R = Pn(E, (j, P) => {
    S.shouldReduceMotion || mh(j);
    const {
      duration: O,
      delay: B,
      easing: $
    } = lu({
      style: w,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let L;
    C === "auto" && !S.shouldReduceMotion ? (L = x.transitions.getAutoHeightDuration(j.clientHeight), p.current = L) : (L = O, p.current = null);
    const D = S.getTransitionTiming({
      duration: L,
      delay: B
    });
    j.style.transition = [x.transitions.create("opacity", {
      duration: D.duration,
      delay: D.delay
    }), x.transitions.create("transform", {
      duration: typeof D.duration == "string" ? D.duration : D.duration * 0.666,
      delay: D.delay,
      easing: $
    })].join(","), u && u(j, P);
  }), I = Pn(E, d), A = Pn(E, v), M = Pn(E, (j) => {
    const {
      duration: P,
      delay: O,
      easing: B
    } = lu({
      style: w,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let $;
    C === "auto" && !S.shouldReduceMotion ? ($ = x.transitions.getAutoHeightDuration(j.clientHeight), p.current = $) : ($ = P, p.current = null);
    const L = S.getTransitionTiming({
      duration: $,
      delay: O
    });
    j.style.transition = [x.transitions.create("opacity", {
      duration: L.duration,
      delay: L.delay
    }), x.transitions.create("transform", {
      duration: typeof L.duration == "string" ? L.duration : L.duration * 0.666,
      delay: L.delay || (typeof L.duration == "string" ? L.duration : L.duration * 0.333),
      easing: B
    })].join(","), j.style.opacity = 0, j.style.transform = js(0.75), g && g(j);
  }), N = Pn(E, (j) => {
    j.style.transition = "", f && f(j);
  }), b = r ? (j) => {
    r(E.current, j);
  } : void 0;
  return /* @__PURE__ */ c.jsx(J1, {
    appear: o,
    in: a,
    nodeRef: E,
    onEnter: R,
    onEntered: I,
    onEntering: T,
    onExit: M,
    onExited: N,
    onExiting: A,
    addEndListener: b,
    getAutoTimeout: C === "auto" ? () => p.current : void 0,
    reduceMotion: S.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...m,
    children: (j, {
      ownerState: P,
      ...O
    }) => {
      const B = X1(j, a, X5, q5, w, i.props.style);
      return /* @__PURE__ */ y.cloneElement(i, {
        style: B,
        ref: k,
        ...O
      });
    }
  });
});
ll && (ll.muiSupportAuto = !0);
function J5(e) {
  return he("MuiInputLabel", e);
}
const Z5 = de("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), eI = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = me({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, FE, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, tI = H(Cc, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Sc(e, t), !n.disableUnderline && t.underline];
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
        [`label + &, .${Z5.root} + &`]: {
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
          ...St(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${rs.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${rs.error}`]: {
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
          ...St(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${rs.disabled}, .${rs.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${rs.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(_t()).map(([r]) => ({
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
})), nI = H(kc, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: wc
})({}), Ph = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    type: h = "text",
    ...g
  } = r, f = eI(r), w = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = u ? jt(u, w) : w, m = d.root ?? tI, p = d.input ?? nI;
  return /* @__PURE__ */ c.jsx(yh, {
    slots: {
      root: m,
      input: p
    },
    slotProps: C,
    fullWidth: i,
    inputComponent: s,
    multiline: l,
    ref: n,
    type: h,
    ...g,
    classes: f
  });
});
Ph.muiName = "Input";
const ea = de("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), rI = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${ae(r)}`, s],
    asterisk: [l && "asterisk"]
  }, u = me(a, J5, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, oI = H(Q5, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Rs.asterisk}`]: t.asterisk
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
      ...St(e, ["color", "transform", "max-width"], {
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
}))), iI = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: l,
    className: a,
    ...u
  } = r, [d, h] = Ui({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let g = s;
  typeof g > "u" && h && (g = h.filled || h.focused || h.adornedStart);
  const f = {
    ...r,
    disableAnimation: o,
    formControl: h,
    shrink: g,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }, v = rI(f);
  return /* @__PURE__ */ c.jsx(oI, {
    "data-shrink": g,
    ref: n,
    className: ne(v.root, a),
    ...u,
    ownerState: f,
    classes: v
  });
}), Wf = /* @__PURE__ */ y.createContext({});
function sI(e) {
  return he("MuiList", e);
}
de("MuiList", ["root", "padding", "dense", "subheader"]);
const lI = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return me({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, sI, t);
}, aI = H("ul", {
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
}), uI = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
  } = r, h = y.useMemo(() => ({
    dense: l
  }), [l]), g = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, f = lI(g);
  return /* @__PURE__ */ c.jsx(Wf.Provider, {
    value: h,
    children: /* @__PURE__ */ c.jsxs(aI, {
      as: s,
      className: ne(f.root, i),
      ref: n,
      ownerState: g,
      ...d,
      children: [u, o]
    })
  });
}), ay = de("MuiListItemIcon", ["root", "alignItemsFlexStart"]), uy = de("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Ih = /* @__PURE__ */ y.createContext(void 0);
function Rx() {
  const e = y.useContext(Ih);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const cI = Object.is;
function dI(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !cI(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const fI = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function Px(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = As,
    wrap: s = !0
  } = e, [l, a] = y.useState(t), [u, d] = y.useState(t);
  let h = l;
  t !== u && (d(t), t !== void 0 && t !== l && (h = t, a(t)));
  const g = y.useRef(null), f = y.useRef(/* @__PURE__ */ new Map()), [v, w] = y.useState(0), C = y.useMemo(() => Uf(f.current), [v]), m = cy(h, C, i, n), p = y.useRef(m);
  p.current = m;
  const x = y.useCallback(() => {
    const N = Uf(f.current), b = cy(p.current, N, i, n);
    return jx(N, b);
  }, [n, i]), S = y.useCallback(() => f.current, []), E = rt((N) => {
    const b = f.current.get(N.id);
    dI(b ?? null, N) || (f.current.set(N.id, N), w((j) => j + 1));
  }), k = rt((N) => {
    f.current.delete(N) && w((b) => b + 1);
  }), T = rt((N) => {
    a(N);
  }), R = y.useCallback((N) => p.current === N, []), I = y.useCallback((N, b, j, P) => {
    var $;
    const O = ta(f.current), B = Mx(O, N, b, j, P ?? i);
    return B ? (($ = B.element) == null || $.focus(), a(B.id), B) : null;
  }, [i]), A = y.useCallback((N, b, j) => ({
    onFocus: (B) => {
      b == null || b(B);
      const $ = ta(f.current), L = Nx($, B.target);
      L !== -1 && a($[L].id);
    },
    onKeyDown: (B) => {
      if (j == null || j(B), B.defaultPrevented || B.altKey || B.shiftKey || B.ctrlKey || B.metaKey || !fI.includes(B.key))
        return;
      let $ = r === "horizontal" ? "ArrowLeft" : "ArrowUp", L = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && ($ = "ArrowRight", L = "ArrowLeft");
      const D = ta(f.current), U = sr(yt(g.current)), W = U === g.current;
      let Q = dy(D, U, p.current), K = "next";
      switch (B.key) {
        case $:
          K = "previous", B.preventDefault(), W && (Q = D.length);
          break;
        case L:
          B.preventDefault(), W && (Q = -1);
          break;
        case "Home":
          B.preventDefault(), Q = -1;
          break;
        case "End":
          B.preventDefault(), K = "previous", Q = D.length;
          break;
        default:
          return;
      }
      I(Q, K, s);
    },
    ref: gI(N, (B) => {
      g.current = B;
    })
  }), [I, o, r, s]), M = y.useCallback((N) => {
    var B;
    const b = ta(f.current), j = sr(yt(g.current)), O = j === g.current ? -1 : dy(b, j, p.current);
    return ((B = I(O, "next", !0, N)) == null ? void 0 : B.id) ?? null;
  }, [I]);
  return y.useMemo(() => ({
    activeItemId: m,
    focusNext: M,
    getActiveItem: x,
    getContainerProps: A,
    getItemMap: S,
    isItemActive: R,
    registerItem: E,
    setActiveItemId: T,
    unregisterItem: k
  }), [m, M, x, A, S, R, E, T, k]);
}
function Ix(e) {
  const t = Rx(), {
    activeItemId: n,
    registerItem: r,
    unregisterItem: o
  } = t, i = y.useRef(null), s = y.useMemo(() => ({
    disabled: e.disabled ?? !1,
    element: null,
    focusableWhenDisabled: e.focusableWhenDisabled ?? !1,
    id: e.id,
    selected: e.selected ?? !1,
    textValue: e.textValue
  }), [e.disabled, e.focusableWhenDisabled, e.id, e.selected, e.textValue]), l = y.useRef(s);
  l.current = s;
  const a = y.useCallback((d) => {
    if (i.current = d, d == null) {
      queueMicrotask(() => {
        i.current == null && o(e.id);
      });
      return;
    }
    r({
      ...l.current,
      element: d
    });
  }, [e.id, r, o]), u = ht(e.ref, a);
  return ft(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), ft(() => {
    const d = e.id;
    return () => {
      o(d);
    };
  }, [e.id, o]), {
    ref: u,
    tabIndex: n === e.id ? 0 : -1
  };
}
function cy(e, t, n, r) {
  return e != null ? pI(e, t, n) : hI(t, n, r);
}
function pI(e, t, n) {
  var o;
  const r = Ax(t, e);
  return r === -1 ? $x(t, n) : n(t[r]) ? t[r].id : ((o = Mx(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function hI(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = jx(e, r);
    if (o && t(o))
      return o.id;
  }
  return $x(e, t);
}
function dy(e, t, n) {
  if (t) {
    const r = Nx(e, t);
    if (r !== -1)
      return r;
  }
  return Ax(e, n);
}
function Mx(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = fy(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[l];
    if (!u || !o(u))
      l = fy(l, i, n, r);
    else
      return u;
  }
  return null;
}
function $x(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function jx(e, t) {
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
function Uf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(Vf).sort((o, i) => mI(o.element, i.element)), r = t.filter((o) => !Vf(o));
  return [...n, ...r];
}
function ta(e) {
  return Uf(e).filter(Vf);
}
function fy(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function As(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function Vf(e) {
  return e.element != null && e.element.isConnected;
}
function mI(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function gI(...e) {
  return (t) => {
    e.forEach((n) => {
      Af(n ?? null, t);
    });
  };
}
function Ox(e, t) {
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
function yI(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function vI(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function Ia(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Bx = /* @__PURE__ */ y.createContext(null);
function Lx() {
  return y.useContext(Bx);
}
const xI = Bx.Provider, zx = /* @__PURE__ */ y.createContext(void 0);
function bI() {
  const e = y.useContext(zx);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function SI(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function _x(e, t) {
  if (t === void 0)
    return !0;
  let n = SI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function wI(e, t) {
  return _x(e, t) ? As(e) : !1;
}
function CI(e, t) {
  Ox(e, t);
}
const kI = /* @__PURE__ */ y.forwardRef(function(t, n) {
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
    variant: h = "selectedMenu",
    ...g
  } = t, f = y.useRef(null), v = y.useRef(!1), [w, C] = y.useState(!1), m = Lx(), p = y.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), x = y.useCallback((P) => {
    var O, B, $;
    return h === "selectedMenu" ? ((O = P.find((L) => L.selected && As(L))) == null ? void 0 : O.id) ?? ((B = P.find((L) => As(L))) == null ? void 0 : B.id) ?? null : (($ = P.find((L) => As(L))) == null ? void 0 : $.id) ?? null;
  }, [h]), S = Px({
    activeItemId: void 0,
    getDefaultActiveItemId: x,
    orientation: "vertical",
    wrap: !u
  }), {
    activeItemId: E,
    focusNext: k,
    getActiveItem: T,
    getContainerProps: R,
    getItemMap: I
  } = S, A = rt((P = !1) => {
    if (!f.current || !P && v.current)
      return null;
    if (i) {
      const O = T();
      if (O != null && O.element) {
        const B = Array.from(I().values()).some((L) => L.selected), $ = h === "menu" && B && !O.selected && m == null;
        return C($), CI(O.element, m), v.current = !0, O.element;
      }
      return o ? (C(!1), f.current.focus(), f.current) : null;
    }
    return o ? (C(!1), f.current.focus(), v.current = !0, f.current) : (C(!1), null);
  });
  ft(() => {
    if (!o && !i) {
      v.current = !1, C(!1);
      return;
    }
    A();
  }, [E, i, o, A]), y.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (P, {
      direction: O
    }) => {
      const B = !f.current.style.width;
      if (P.clientHeight < f.current.clientHeight && B) {
        const $ = Qn(P), L = wx($);
        if (L > 0) {
          const D = `${L}px`, U = O === "rtl" ? "paddingLeft" : "paddingRight", W = parseFloat($.getComputedStyle(f.current)[U]) || 0;
          f.current.style[U] = `${W + L}px`, f.current.style.width = `calc(100% + ${D})`;
        }
      }
      return f.current;
    },
    focusInitialTarget: () => {
      if (!f.current)
        return null;
      const P = sr(yt(f.current));
      return P && Eo(f.current, P) ? P : A(!0);
    }
  }), [A]);
  const M = R(void 0, g.onFocus), N = ht(f, M.ref, n), b = y.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: w,
    variant: h
  }), [a, w, h]), j = rt((P) => {
    if (w && C(!1), (P.ctrlKey || P.metaKey || P.altKey) && d) {
      d(P);
      return;
    }
    if (M.onKeyDown(P), P.key.length === 1) {
      const B = p.current, $ = P.key.toLowerCase(), L = performance.now();
      B.keys.length > 0 && (L - B.lastTime > 500 ? (B.keys = [], B.repeating = !0, B.previousKeyMatched = !0) : B.repeating && $ !== B.keys[0] && (B.repeating = !1)), B.lastTime = L, B.keys.push($);
      const D = sr(yt(f.current)), U = D && !B.repeating && _x(D, B);
      B.previousKeyMatched && (U || k((W) => wI(W, B)) != null) ? P.preventDefault() : B.previousKeyMatched = !1;
    }
    d && d(P);
  });
  return /* @__PURE__ */ c.jsx(uI, {
    role: "menu",
    ref: N,
    className: l,
    onKeyDown: j,
    tabIndex: -1,
    ...g,
    onFocus: M.onFocus,
    children: /* @__PURE__ */ c.jsx(zx.Provider, {
      value: b,
      children: /* @__PURE__ */ c.jsx(Ih.Provider, {
        value: S,
        children: s
      })
    })
  });
});
function EI(e) {
  return he("MuiPopover", e);
}
de("MuiPopover", ["root", "paper"]);
function py(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function hy(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function my(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function na(e) {
  return typeof e == "function" ? e() : e;
}
const TI = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    paper: ["paper"]
  }, EI, t);
}, RI = H(kx, {
  name: "MuiPopover",
  slot: "Root"
})({}), Fx = H(pr, {
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
}), PI = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    container: h,
    disableAutoFocus: g = !1,
    elevation: f = 8,
    marginThreshold: v = 16,
    open: w,
    slots: C = {},
    slotProps: m = {},
    transformOrigin: p = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: x = "auto",
    disableScrollLock: S = !1,
    ...E
  } = r, k = y.useRef(), T = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: f,
    marginThreshold: v,
    transformOrigin: p,
    transitionDuration: x
  }, R = TI(T), I = y.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const F = na(i), ee = (F && F.nodeType === 1 ? F : yt(k.current).body).getBoundingClientRect();
    return {
      top: ee.top + py(ee, s.vertical),
      left: ee.left + hy(ee, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), A = y.useCallback((F) => ({
    vertical: py(F, p.vertical),
    horizontal: hy(F, p.horizontal)
  }), [p.horizontal, p.vertical]), M = y.useCallback((F) => {
    const ie = {
      width: F.offsetWidth,
      height: F.offsetHeight
    }, ee = A(ie);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: my(ee)
      };
    const Ee = I();
    let be = Ee.top - ee.vertical, ue = Ee.left - ee.horizontal;
    const ce = be + ie.height, ve = ue + ie.width, Be = Qn(na(i)), ke = Be.innerHeight - v, $e = Be.innerWidth - v;
    if (v != null && be < v) {
      const fe = be - v;
      be -= fe, ee.vertical += fe;
    } else if (v != null && ce > ke) {
      const fe = ce - ke;
      be -= fe, ee.vertical += fe;
    }
    if (v != null && ue < v) {
      const fe = ue - v;
      ue -= fe, ee.horizontal += fe;
    } else if (ve > $e) {
      const fe = ve - $e;
      ue -= fe, ee.horizontal += fe;
    }
    return {
      top: `${Math.round(be)}px`,
      left: `${Math.round(ue)}px`,
      transformOrigin: my(ee)
    };
  }, [i, a, I, A, v]), [N, b] = y.useState(w), j = y.useCallback(() => {
    const F = k.current;
    if (!F)
      return;
    const ie = M(F);
    ie.top != null && F.style.setProperty("top", ie.top), ie.left != null && (F.style.left = ie.left), F.style.transformOrigin = ie.transformOrigin, b(!0);
  }, [M]);
  y.useEffect(() => (S && window.addEventListener("scroll", j), () => window.removeEventListener("scroll", j)), [i, S, j]);
  const P = () => {
    j();
  }, O = () => {
    b(!1);
  };
  y.useEffect(() => {
    w && j();
  }), y.useImperativeHandle(o, () => w ? {
    updatePosition: () => {
      j();
    }
  } : null, [w, j]), y.useEffect(() => {
    if (!w)
      return;
    const F = bc(() => {
      j();
    }), ie = Qn(na(i));
    return ie.addEventListener("resize", F), () => {
      F.clear(), ie.removeEventListener("resize", F);
    };
  }, [i, w, j]);
  let B = x;
  const $ = {
    slots: C,
    slotProps: m
  }, [L, D] = Ce("transition", {
    elementType: ll,
    externalForwardedProps: $,
    ownerState: T,
    getSlotProps: (F) => ({
      ...F,
      onEntering: (ie, ee) => {
        var Ee;
        (Ee = F.onEntering) == null || Ee.call(F, ie, ee), P();
      },
      onExited: (ie) => {
        var ee;
        (ee = F.onExited) == null || ee.call(F, ie), O();
      }
    }),
    additionalProps: {
      appear: !0,
      in: w
    }
  });
  x === "auto" && !L.muiSupportAuto && (B = void 0);
  const U = h || (i ? yt(na(i)).body : void 0), [W, {
    slots: Q,
    slotProps: K,
    ...q
  }] = Ce("root", {
    ref: n,
    elementType: RI,
    externalForwardedProps: {
      ...$,
      ...E
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: C.backdrop
      },
      slotProps: {
        backdrop: qE(typeof m.backdrop == "function" ? m.backdrop(T) : m.backdrop, {
          invisible: !0
        })
      },
      container: U,
      open: w
    },
    ownerState: T,
    className: ne(R.root, d)
  }), [G, oe] = Ce("paper", {
    ref: k,
    className: R.paper,
    elementType: Fx,
    externalForwardedProps: $,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: f,
      style: N ? void 0 : {
        opacity: 0
      }
    },
    ownerState: T
  });
  return /* @__PURE__ */ c.jsx(W, {
    ...q,
    ...!iu(W) && {
      slots: Q,
      slotProps: K,
      disableAutoFocus: g,
      disableScrollLock: S
    },
    children: /* @__PURE__ */ c.jsx(L, {
      ...D,
      timeout: B,
      children: /* @__PURE__ */ c.jsx(G, {
        ...oe,
        children: u
      })
    })
  });
});
function II(e) {
  return he("MuiMenu", e);
}
de("MuiMenu", ["root", "paper", "list"]);
const MI = {
  vertical: "top",
  horizontal: "right"
}, $I = {
  vertical: "top",
  horizontal: "left"
}, jI = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, II, t);
}, AI = H(PI, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), NI = H(Fx, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), OI = H(kI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), BI = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    transitionDuration: h = "auto",
    variant: g = "selectedMenu",
    slots: f = {},
    slotProps: v = {},
    ...w
  } = r, C = yc(), m = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: h,
    variant: g
  }, p = jI(m), x = o && u, S = x && !l, E = y.useRef(null), k = (P, O) => {
    var B, $;
    E.current && (E.current.adjustStyleForScrollbar(P, {
      direction: C ? "rtl" : "ltr"
    }), x && (($ = (B = E.current).focusInitialTarget) == null || $.call(B)));
  }, T = (P) => {
    P.key === "Tab" && (P.preventDefault(), a && a(P, "tabKeyDown"));
  }, R = {
    slots: f,
    slotProps: v
  }, I = Ni({
    elementType: f.root,
    externalSlotProps: v.root,
    ownerState: m,
    className: [p.root, s]
  }), [A, M] = Ce("paper", {
    className: p.paper,
    elementType: NI,
    externalForwardedProps: R,
    shouldForwardComponentProp: !0,
    ownerState: m
  }), [N, b] = Ce("list", {
    className: p.list,
    elementType: OI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: R,
    getSlotProps: (P) => ({
      ...P,
      onKeyDown: (O) => {
        var B;
        T(O), (B = P.onKeyDown) == null || B.call(P, O);
      }
    }),
    ownerState: m
  }), j = typeof v.transition == "function" ? v.transition(m) : v.transition;
  return /* @__PURE__ */ c.jsx(
    AI,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? MI : $I,
      slots: {
        root: f.root,
        paper: A,
        backdrop: f.backdrop,
        transition: f.transition
      },
      slotProps: {
        root: I,
        paper: M,
        backdrop: typeof v.backdrop == "function" ? v.backdrop(m) : v.backdrop,
        transition: {
          ...j,
          onEntering: (...P) => {
            var O;
            k(...P), (O = j == null ? void 0 : j.onEntering) == null || O.call(j, ...P);
          }
        }
      },
      open: u,
      ref: n,
      transitionDuration: h,
      ownerState: m,
      ...w,
      classes: d,
      children: /* @__PURE__ */ c.jsx(N, {
        actions: E,
        autoFocus: x,
        autoFocusItem: S,
        variant: g,
        ...b,
        children: i
      })
    }
  );
}), LI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, zI = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = me({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, DE, s);
  return {
    ...s,
    ...a
  };
}, _I = H(No, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: LI
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
  [`&.${os.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    ...!e.focusVisible && {
      [`&.${os.focusVisible}`]: {
        backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
      }
    }
  },
  [`&.${os.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  ...e.focusVisible ? (
    // Inset the ring: a scrolling Menu/MenuList clips an outset ring.
    W1(1)
  ) : {
    [`&.${os.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    }
  },
  [`&.${os.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${sy.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${sy.inset}`]: {
    marginLeft: 52
  },
  [`& .${uy.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${uy.inset}`]: {
    paddingLeft: 36
  },
  [`& .${ay.root}`]: {
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
      [`& .${ay.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), ra = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: i = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: a = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: h,
    className: g,
    ...f
  } = r, w = d === "menuitemcheckbox" || d === "menuitemradio" ? !!r.selected : void 0, C = Lx(), m = y.useContext(Wf), p = y.useMemo(() => ({
    dense: s || m.dense || !1,
    disableGutters: a
  }), [m.dense, s, a]), x = bI(), S = Nr(), E = x.suppressInitialFocusVisible, k = x.itemsFocusableWhenDisabled, T = y.useRef(null);
  ft(() => {
    o && T.current && Ox(T.current, C);
  }, [o]);
  const R = {
    ...r,
    dense: p.dense,
    divider: l,
    disableGutters: a
  }, I = zI(r), {
    root: A,
    ...M
  } = I, N = Ix({
    id: S,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), b = ht(T, N.ref);
  let j;
  return h !== void 0 ? j = h : x.variant === "selectedMenu" ? j = N.tabIndex : (!r.disabled || k) && (j = -1), /* @__PURE__ */ c.jsx(Wf.Provider, {
    value: p,
    children: /* @__PURE__ */ c.jsx(_I, {
      ref: b,
      role: d,
      "aria-checked": w,
      tabIndex: j,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: E,
      focusVisibleClassName: ne(I.focusVisible, u),
      className: ne(I.root, g),
      ...f,
      ownerState: R,
      classes: M
    })
  });
}), FI = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${ae(n)}`, i && "iconOpen", r && "disabled"]
  };
  return me(l, WE, t);
}, Dx = H("select", {
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
  [`&.${vh.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${ea.root}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "calc(var(--_caret, 24px) + (var(--_endAdornment, 28px) - 1.5rem)/2)"
    // 1.5rem is the default icon size
  },
  [`.${fn.root}:has(> &)`]: {
    "--_endAdornment": "0px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      [`.${fn.root}:has(> &)`]: {
        "--_caret": "24px"
      },
      [`.${fn.root}:has(> & ~ .${ea.root})`]: {
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
      [`.${fn.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${fn.root}:has(> & ~ .${ea.root})`]: {
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
      [`.${fn.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${fn.root}:has(> & ~ .${ea.root})`]: {
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
})), DI = H(Dx, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: wn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${vh.multiple}`]: t.multiple
    }];
  }
})({}), Wx = H("svg", {
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
  [`&.${vh.disabled}`]: {
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
})), WI = H(Wx, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ae(n.variant)}`], n.open && t.iconOpen];
  }
})({}), UI = /* @__PURE__ */ y.forwardRef(function(t, n) {
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
  }, h = FI(d);
  return /* @__PURE__ */ c.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ c.jsx(DI, {
      ownerState: d,
      className: ne(h.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ c.jsx(WI, {
      as: s,
      ownerState: d,
      className: h.icon
    })]
  });
});
var gy;
const VI = H("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: wn
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
}), HI = H("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: wn
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
      ...St(e, "width", {
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
      ...St(e, "max-width", {
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
      ...St(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function KI(e) {
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
  return /* @__PURE__ */ c.jsx(VI, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ c.jsx(HI, {
      ownerState: a,
      children: l ? /* @__PURE__ */ c.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        gy || (gy = /* @__PURE__ */ c.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const GI = (e) => {
  const {
    classes: t
  } = e, r = me({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, UE, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, YI = H(Cc, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Sc
})(Te(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${tr.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${tr.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${tr.focused} .${tr.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(_t()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${tr.focused} .${tr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${tr.error} .${tr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${tr.disabled} .${tr.notchedOutline}`]: {
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
        [`&.${vo.root}`]: {
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
})), QI = H(KI, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(Te(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), XI = H(kc, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: wc
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
}))), Mh = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    type: h = "text",
    ...g
  } = r, f = GI(r), [v, w] = Ui({
    props: r,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...r,
    color: v.color || "primary",
    disabled: v.disabled,
    error: v.error,
    focused: v.focused,
    formControl: w,
    fullWidth: o,
    hiddenLabel: v.hiddenLabel,
    multiline: l,
    size: v.size,
    type: h
  }, m = u.root ?? YI, p = u.input ?? XI, [x, S] = Ce("notchedOutline", {
    elementType: QI,
    className: f.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: u,
      slotProps: d
    },
    additionalProps: {
      label: s != null && s !== "" && v.required ? /* @__PURE__ */ c.jsxs(y.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ c.jsx(yh, {
    slots: {
      root: m,
      input: p
    },
    slotProps: d,
    renderSuffix: (E) => /* @__PURE__ */ c.jsx(x, {
      ...S,
      notched: typeof a < "u" ? a : !!(E.startAdornment || E.filled || E.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: l,
    ref: n,
    type: h,
    ...g,
    classes: {
      ...f,
      notchedOutline: null
    }
  });
});
Mh.muiName = "Input";
function qI(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function Ux(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return y.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ y.isValidElement(n) && (t += Ux(n.props.children));
  }), t;
}
function JI(e, t, n = 0) {
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
function ZI(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function eM(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ y.isValidElement(i) || !qI(i) || i.props.disabled)
      continue;
    const s = Ux(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && Ia(t, i.props.value) && (r = n.length), n.push({
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
var yy;
const oa = 2, tM = 400, vy = 200, nM = 750, mo = " ", rM = "ArrowUp", oM = "ArrowDown", iM = "Enter";
function xy(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - oa && e.clientX <= r.right + oa && e.clientY >= r.top - oa && e.clientY <= r.bottom + oa;
}
const sM = H(Dx, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${vo.select}`]: t.select
      },
      {
        [`&.${vo.select}`]: t[n.variant]
      },
      {
        [`&.${vo.error}`]: t.error
      },
      {
        [`&.${vo.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${vo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), lM = H(Wx, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), aM = H("input", {
  shouldForwardProp: (e) => Y1(e) && e !== "classes",
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
}), uM = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e;
  return me({
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, Tx, t);
}, cM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var Hi, Wo, Lh, zh;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: u,
    defaultValue: d,
    disabled: h,
    displayEmpty: g,
    error: f = !1,
    IconComponent: v,
    inputRef: w,
    labelId: C,
    MenuProps: m = {},
    multiple: p,
    name: x,
    onBlur: S,
    onChange: E,
    onClose: k,
    onFocus: T,
    // eslint-disable-next-line react/prop-types
    onKeyDown: R,
    // eslint-disable-next-line react/prop-types
    onMouseDown: I,
    onOpen: A,
    open: M,
    readOnly: N,
    renderValue: b,
    required: j,
    SelectDisplayProps: P = {},
    tabIndex: O,
    // catching `type` from Input which makes no sense for SelectInput
    type: B,
    value: $,
    variant: L = "standard",
    ...D
  } = t, [U, W] = Nf({
    controlled: $,
    default: d,
    name: "Select"
  }), [Q, K] = Nf({
    controlled: M,
    default: u,
    name: "Select"
  }), q = y.useRef(null), G = y.useRef(null), oe = y.useRef(null), F = y.useRef(!1), ie = y.useRef(!1), ee = y.useRef(null), Ee = y.useRef(!1), be = y.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ue = y.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), ce = lr(), ve = lr(), Be = lr(), [ke, $e] = y.useState(null), {
    current: fe
  } = y.useRef(M != null), [ye, Ne] = y.useState(), [Ke, Ze] = y.useState(null), vt = ht(n, w), Ct = y.useCallback((Y) => {
    G.current = Y, Y && $e(Y);
  }, []), Ge = ke == null ? void 0 : ke.parentNode;
  y.useImperativeHandle(vt, () => ({
    focus: () => {
      G.current.focus();
    },
    node: q.current,
    value: U
  }), [U]);
  const Oe = ke !== null && Q, Pe = y.useCallback(() => {
    Be.clear(), ue.current.buffer = "", ue.current.previousSearchIndex = null, ue.current.matchedIndex = null;
  }, [Be]);
  ft(() => {
    F.current = Oe, Oe && Pe();
  }, [Oe, Pe]);
  const at = y.useCallback(() => {
    ce.clear(), ve.clear();
  }, [ce, ve]), re = y.useCallback(() => {
    at(), Ee.current = !1, be.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [at]), le = y.useCallback(() => {
    ee.current && (ee.current(), ee.current = null);
  }, []);
  y.useEffect(() => {
    Oe || (re(), le());
  }, [Oe, re, le]), y.useEffect(() => () => {
    re(), le(), Pe();
  }, [re, le, Pe]), y.useEffect(() => {
    if (!Oe || !Ge || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      Ne(Ge.clientWidth);
    });
    return Y.observe(Ge), () => {
      Y.disconnect();
    };
  }, [Oe, Ge, s]), y.useEffect(() => {
    u && Q && ke && !fe && (Ne(s ? null : Ge.clientWidth), G.current.focus());
  }, [ke, s]), y.useEffect(() => {
    i && G.current.focus();
  }, [i]), y.useEffect(() => {
    if (!C)
      return;
    const Y = yt(G.current).getElementById(C);
    if (Y) {
      const se = () => {
        getSelection().isCollapsed && G.current.focus();
      };
      return Y.addEventListener("click", se), () => {
        Y.removeEventListener("click", se);
      };
    }
  }, [C]);
  const ze = rt((Y, se) => {
    Y || (re(), le()), Y ? (Pe(), Ze(yI(se)), A && A(se)) : (Ze(null), k && k(se)), fe || (F.current = Y, Ne(s ? null : Ge.clientWidth), K(Y));
  }), De = () => {
    re(), ie.current ? ve.start(vy, () => {
      be.current.allowUnselectedMouseUp = !0, ce.start(vy, () => {
        be.current.allowSelectedMouseUp = !0;
      });
    }) : ce.start(tM, () => {
      be.current.allowSelectedMouseUp = !0, be.current.allowUnselectedMouseUp = !0;
    });
  }, z = (Y) => {
    if (I == null || I(Y), Y.button !== 0 || (Y.preventDefault(), !G.current))
      return;
    G.current.focus();
    const se = yt(Y.currentTarget);
    De(), le();
    const Me = (ut) => {
      ee.current = null, G.current && (xy(ut, G.current) || xy(ut, oe.current) || !F.current && fe || ze(!1, ut));
    };
    se.addEventListener("mouseup", Me, {
      capture: !0,
      once: !0
    }), ee.current = () => {
      se.removeEventListener("mouseup", Me, !0);
    }, ze(!0, Y);
  }, X = (Y) => {
    ze(!1, Y);
  }, Se = y.Children.toArray(l), We = (Y) => {
    const se = Se.find((Me) => Me.props.value === Y.target.value);
    se !== void 0 && (W(se.props.value), E && E(Y, se));
  }, Nt = (Y, se, Me) => {
    if (W(Me), E) {
      const ut = Y.nativeEvent || Y, Yt = new ut.constructor(ut.type, ut);
      Object.defineProperty(Yt, "target", {
        writable: !0,
        value: {
          value: Me,
          name: x
        }
      }), E(Yt, se);
    }
  }, Xn = (Y) => (se) => {
    Ee.current = !1;
    let Me;
    if (se.currentTarget.hasAttribute("tabindex")) {
      if (p) {
        Me = Array.isArray(U) ? U.slice() : [];
        const ut = U.indexOf(Y.props.value);
        ut === -1 ? Me.push(Y.props.value) : Me.splice(ut, 1);
      } else
        Me = Y.props.value;
      Y.props.onClick && Y.props.onClick(se), U !== Me && Nt(se, Y, Me), p || ze(!1, se);
    }
  }, qn = (Y, se) => (Me) => {
    var Rl, Uo;
    if ((Uo = (Rl = Y.props).onMouseUp) == null || Uo.call(Rl, Me), Ee.current) {
      Ee.current = !1;
      return;
    }
    const ut = !be.current.allowSelectedMouseUp && se, Yt = !be.current.allowUnselectedMouseUp && !se;
    ut || Yt || Me.currentTarget.click();
  }, co = (Y) => {
    var _h;
    const se = ue.current, Me = se.buffer !== "";
    if (Oe || p || h || Y.defaultPrevented || (_h = Y.nativeEvent) != null && _h.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === mo && !Me)
      return !1;
    Y.key === mo && Y.preventDefault();
    const ut = se.buffer === "", {
      options: Yt,
      selectedIndex: Rl
    } = eM(Se, U);
    if (Yt.length === 0)
      return Y.key !== mo && Pe(), !0;
    ut && (se.previousSearchIndex = Rl);
    const Uo = Y.key.toLowerCase();
    se.buffer === Uo && ZI(Yt, Uo) && (se.buffer = "", se.previousSearchIndex = se.matchedIndex), se.buffer += Uo, Be.start(nM, Pe);
    const Nc = JI(Yt, se.buffer, (se.previousSearchIndex ?? -1) + 1);
    if (Nc !== -1) {
      const Oc = Yt[Nc];
      return se.matchedIndex = Nc, Ia(U, Oc.value) || Nt(Y, Oc.child, Oc.value), !0;
    }
    return Y.key !== mo && Pe(), !0;
  }, kl = (Y) => {
    if (!N) {
      const se = co(Y), Me = Y.key === mo || Y.key === rM || Y.key === oM || Y.key === iM;
      !se && Me && (Y.preventDefault(), ze(!0, Y)), R == null || R(Y);
    }
  }, pe = (Y) => {
    Pe(), !Oe && S && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: U,
        name: x
      }
    }), S(Y));
  }, et = (Y) => (se) => {
    var Me, ut;
    (ut = (Me = Y == null ? void 0 : Y.props) == null ? void 0 : Me.onKeyDown) == null || ut.call(Me, se), se.key === mo && se.target === se.currentTarget && !se.defaultPrevented && (se.preventDefault(), se.repeat || se.currentTarget.click());
  };
  delete D["aria-invalid"];
  let Wt, El;
  const _o = [];
  let Fo = !1, Do = !1;
  (su({
    value: U
  }) || g) && (b ? Wt = b(U) : Fo = !0);
  const Ac = Se.map((Y) => {
    if (!/* @__PURE__ */ y.isValidElement(Y))
      return null;
    let se;
    if (p) {
      if (!Array.isArray(U))
        throw new Error(Ar(2));
      se = U.some((Me) => Ia(Me, Y.props.value)), se && Fo && _o.push(Y.props.children);
    } else
      se = Ia(U, Y.props.value), se && Fo && (El = Y.props.children);
    return se && (Do = !0), /* @__PURE__ */ y.cloneElement(Y, {
      "aria-selected": se ? "true" : "false",
      onMouseDown: (Me) => {
        var ut, Yt;
        Ee.current = !0, (Yt = (ut = Y.props).onMouseDown) == null || Yt.call(ut, Me);
      },
      onPointerDown: (Me) => {
        var ut, Yt;
        Ee.current = !0, (Yt = (ut = Y.props).onPointerDown) == null || Yt.call(ut, Me);
      },
      onClick: Xn(Y),
      onMouseUp: qn(Y, se),
      onKeyUp: (Me) => {
        Me.key === mo && Me.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(Me);
      },
      onKeyDown: et(Y),
      role: "option",
      selected: se,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  ft(() => {
    ie.current = Do, !Oe && !p && !Do && Pe();
  }, [Do, p, Oe, Pe]), Fo && (p ? _o.length === 0 ? Wt = null : Wt = _o.reduce((Y, se, Me) => (Y.push(se), Me < _o.length - 1 && Y.push(", "), Y), []) : Wt = El);
  let Tl = ye;
  !s && fe && ke && (Tl = Ge.clientWidth);
  let Vi;
  typeof O < "u" ? Vi = O : Vi = h ? null : 0;
  const te = P.id || (x ? `mui-component-select-${x}` : void 0), J = {
    ...t,
    variant: L,
    value: U,
    open: Oe,
    error: f
  }, xe = uM(J), Ie = typeof ((Hi = m.slotProps) == null ? void 0 : Hi.paper) == "function" ? m.slotProps.paper(J) : (Wo = m.slotProps) == null ? void 0 : Wo.paper, xt = ht(Ie == null ? void 0 : Ie.ref, oe), gr = typeof ((Lh = m.slotProps) == null ? void 0 : Lh.list) == "function" ? m.slotProps.list(J) : (zh = m.slotProps) == null ? void 0 : zh.list, Jn = Nr(), fo = Nr();
  return /* @__PURE__ */ c.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ c.jsx(sM, {
      as: "div",
      ref: Ct,
      tabIndex: Vi,
      role: "combobox",
      "aria-controls": Oe ? Jn : void 0,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": Oe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": N ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": j ? "true" : void 0,
      "aria-invalid": f ? "true" : void 0,
      onKeyDown: kl,
      onMouseDown: h || N ? null : z,
      onBlur: pe,
      onFocus: T,
      ...P,
      ownerState: J,
      className: ne(P.className, xe.select, a),
      id: te,
      children: vI(Wt) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        yy || (yy = /* @__PURE__ */ c.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Wt
    }), /* @__PURE__ */ c.jsx(aM, {
      "aria-invalid": f,
      value: Array.isArray(U) ? U.join(",") : U,
      name: x,
      ref: q,
      "aria-hidden": !0,
      onChange: We,
      tabIndex: -1,
      disabled: h,
      readOnly: N,
      className: xe.nativeInput,
      autoFocus: i,
      required: j,
      ...D,
      id: D.id ?? fo,
      ownerState: J
    }), /* @__PURE__ */ c.jsx(lM, {
      as: v,
      className: xe.icon,
      ownerState: J
    }), /* @__PURE__ */ c.jsx(xI, {
      value: Ke,
      children: /* @__PURE__ */ c.jsx(BI, {
        id: `menu-${x || ""}`,
        anchorEl: Ge,
        open: Oe,
        onClose: X,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        ...m,
        slotProps: {
          ...m.slotProps,
          list: {
            "aria-labelledby": C,
            role: "listbox",
            "aria-multiselectable": p ? "true" : void 0,
            disableListWrap: !0,
            id: Jn,
            ...gr
          },
          paper: {
            ...Ie,
            ref: xt,
            style: {
              minWidth: Tl,
              ...Ie == null ? void 0 : Ie.style
            }
          }
        },
        children: Ac
      })
    })]
  });
}), dM = (e) => {
  const {
    classes: t
  } = e, r = me({
    root: ["root"]
  }, Tx, t);
  return {
    ...t,
    ...r
  };
}, $h = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => wn(e) && e !== "variant"
}, fM = H(Ph, $h)(""), pM = H(Mh, $h)(""), hM = H(Rh, $h)(""), pu = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: u = !1,
    IconComponent: d = PP,
    id: h,
    input: g,
    inputProps: f,
    label: v,
    labelId: w,
    MenuProps: C,
    multiple: m = !1,
    native: p = !1,
    onClose: x,
    onOpen: S,
    open: E,
    renderValue: k,
    SelectDisplayProps: T,
    variant: R = "outlined",
    ...I
  } = r, A = p ? UI : cM, [M] = Ui({
    props: r,
    states: ["variant", "error"]
  }), N = M.variant || R, b = {
    ...r,
    variant: N,
    classes: s
  }, j = dM(b), {
    root: P,
    ...O
  } = j, B = g || {
    standard: /* @__PURE__ */ c.jsx(fM, {
      ownerState: b
    }),
    outlined: /* @__PURE__ */ c.jsx(pM, {
      label: v,
      ownerState: b
    }),
    filled: /* @__PURE__ */ c.jsx(hM, {
      ownerState: b
    })
  }[N], $ = ht(n, zo(B));
  return /* @__PURE__ */ c.jsx(y.Fragment, {
    children: /* @__PURE__ */ y.cloneElement(B, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: A,
      inputProps: {
        children: i,
        error: M.error,
        IconComponent: d,
        variant: N,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: m,
        ...p ? {
          id: h
        } : {
          autoWidth: o,
          defaultOpen: a,
          displayEmpty: u,
          labelId: w,
          MenuProps: C,
          onClose: x,
          onOpen: S,
          open: E,
          renderValue: k,
          SelectDisplayProps: {
            id: h,
            ...T
          }
        },
        ...f,
        classes: f ? jt(O, f.classes) : O,
        ...g ? g.props.inputProps : {}
      },
      ...(m && p || u) && N === "outlined" ? {
        notched: !0
      } : {},
      ref: $,
      className: ne(B.props.className, l, j.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!g && {
        variant: N
      },
      ...I
    })
  });
});
pu.muiName = "Select";
function mM(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = lr();
  y.useEffect(() => {
    if (!o)
      return;
    function m(p) {
      p.defaultPrevented || p.key === "Escape" && (r == null || r(p, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", m), () => {
      document.removeEventListener("keydown", m);
    };
  }, [o, r]);
  const l = rt((m, p) => {
    r == null || r(m, p);
  }), a = rt((m) => {
    !r || m == null || s.start(m, () => {
      l(null, "timeout");
    });
  });
  y.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const u = (m) => {
    r == null || r(m, "clickaway");
  }, d = s.clear, h = y.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), g = (m) => (p) => {
    const x = m.onBlur;
    x == null || x(p), h();
  }, f = (m) => (p) => {
    const x = m.onFocus;
    x == null || x(p), d();
  }, v = (m) => (p) => {
    const x = m.onMouseEnter;
    x == null || x(p), d();
  }, w = (m) => (p) => {
    const x = m.onMouseLeave;
    x == null || x(p), h();
  };
  return y.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", h), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", h), window.removeEventListener("blur", d);
      };
  }, [n, o, h, d]), {
    getRootProps: (m = {}) => {
      const p = {
        ...uu(e),
        ...uu(m)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...m,
        ...p,
        onBlur: g(p),
        onFocus: f(p),
        onMouseEnter: v(p),
        onMouseLeave: w(p)
      };
    },
    onClickAway: u
  };
}
function gM(e) {
  return he("MuiSnackbarContent", e);
}
de("MuiSnackbarContent", ["root", "message", "action"]);
const yM = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, gM, t);
}, vM = H(pr, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(Te(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.focusVisible && D1(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Rf(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Rf(e.palette.background.default, t),
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
})), xM = H("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), bM = H("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), SM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, u = r, d = yM(u);
  return /* @__PURE__ */ c.jsxs(vM, {
    role: l,
    elevation: 6,
    className: ne(d.root, i),
    ownerState: u,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ c.jsx(xM, {
      className: d.message,
      ownerState: u,
      children: s
    }), o ? /* @__PURE__ */ c.jsx(bM, {
      className: d.action,
      ownerState: u,
      children: o
    }) : null]
  });
});
function wM(e) {
  return he("MuiSnackbar", e);
}
de("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const CM = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${ae(n.vertical)}${ae(n.horizontal)}`]
  };
  return me(r, wM, t);
}, kM = H("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${ae(n.anchorOrigin.vertical)}${ae(n.anchorOrigin.horizontal)}`]];
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
}))), EM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiSnackbar"
  }), o = lo(), i = {
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
    children: d,
    className: h,
    disableWindowBlurListener: g = !1,
    message: f,
    onBlur: v,
    onClose: w,
    onFocus: C,
    onMouseEnter: m,
    onMouseLeave: p,
    open: x,
    resumeHideDuration: S,
    slots: E = {},
    slotProps: k = {},
    transitionDuration: T = i,
    ...R
  } = r, I = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    },
    autoHideDuration: u,
    disableWindowBlurListener: g,
    transitionDuration: T
  }, A = CM(I), {
    getRootProps: M,
    onClickAway: N
  } = mM(I), [b, j] = y.useState(!0), P = {
    slots: E,
    slotProps: k
  }, [O, B] = Ce("root", {
    ref: n,
    className: [A.root, h],
    elementType: kM,
    getSlotProps: M,
    externalForwardedProps: {
      ...P,
      ...R
    },
    ownerState: I
  }), [$, {
    ownerState: L,
    ...D
  }] = Ce("clickAwayListener", {
    elementType: t5,
    externalForwardedProps: P,
    getSlotProps: (q) => ({
      onClickAway: (...G) => {
        var F;
        const oe = G[0];
        (F = q.onClickAway) == null || F.call(q, ...G), !(oe != null && oe.defaultMuiPrevented) && N(...G);
      }
    }),
    ownerState: I
  }), [U, W] = Ce("content", {
    elementType: SM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    additionalProps: {
      message: f,
      action: s
    },
    ownerState: I
  }), [Q, K] = Ce("transition", {
    elementType: ll,
    externalForwardedProps: P,
    getSlotProps: (q) => ({
      onEnter: (...G) => {
        var oe;
        (oe = q.onEnter) == null || oe.call(q, ...G), j(!1);
      },
      onExited: (...G) => {
        var oe;
        (oe = q.onExited) == null || oe.call(q, ...G), j(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: x,
      timeout: T,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: I
  });
  return !x && b ? null : /* @__PURE__ */ c.jsx($, {
    ...D,
    ...E.clickAwayListener && {
      ownerState: L
    },
    children: /* @__PURE__ */ c.jsx(O, {
      ...B,
      children: /* @__PURE__ */ c.jsx(Q, {
        ...K,
        children: d || /* @__PURE__ */ c.jsx(U, {
          ...W
        })
      })
    })
  });
});
function TM(e) {
  return he("MuiTooltip", e);
}
const kn = de("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function RM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const PM = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${ae(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return me(s, TM, t);
}, IM = H(gx, {
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
      [`&[data-popper-placement*="bottom"] .${kn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${kn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${kn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${kn.arrow}`]: {
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
}))), MM = H("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ae(n.placement.split("-")[0])}`]];
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
  [`.${kn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${kn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${kn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${kn.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${RM(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${kn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${kn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${kn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${kn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), $M = H("span", {
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
let ia = !1;
const by = new Tc();
let cs = {
  x: 0,
  y: 0
};
function sa(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const xr = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    disableTouchListener: h = !1,
    enterDelay: g = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: v = 700,
    followCursor: w = !1,
    id: C,
    leaveDelay: m = 0,
    leaveTouchDelay: p = 1500,
    onClose: x,
    onOpen: S,
    open: E,
    placement: k = "bottom",
    slotProps: T = {},
    slots: R = {},
    title: I,
    ...A
  } = r, M = /* @__PURE__ */ y.isValidElement(i) ? i : /* @__PURE__ */ c.jsx("span", {
    children: i
  }), N = lo(), [b, j] = y.useState(), [P, O] = y.useState(null), B = y.useRef(!1), $ = y.useRef(!1), L = d || w, D = lr(), U = lr(), W = lr(), Q = lr(), [K, q] = Nf({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let G = K;
  const {
    current: oe
  } = y.useRef(E !== void 0), F = Nr(C), ie = y.useRef(), ee = rt(() => {
    ie.current !== void 0 && (document.body.style.WebkitUserSelect = ie.current, ie.current = void 0), Q.clear();
  });
  y.useEffect(() => ee, [ee]);
  const Ee = (pe) => {
    by.clear(), ia = !0, q(!0), S && !G && S(pe);
  }, be = rt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (pe) => {
      $.current = !1, by.start(800 + m, () => {
        ia = !1;
      }), q(!1), x && G && x(pe), D.start(N.transitions.duration.shortest, () => {
        B.current = !1;
      });
    }
  ), ue = (pe) => {
    B.current && pe.type !== "touchstart" || (b && b.removeAttribute("title"), U.clear(), W.clear(), g || ia && f ? U.start(ia ? f : g, () => {
      Ee(pe);
    }) : Ee(pe));
  }, ce = (pe) => {
    if (b != null && b.disabled && !oe) {
      if (G && !$.current)
        return;
      $.current = !0;
    } else
      $.current = !1;
    ue(pe);
  }, ve = (pe) => {
    b != null && b.disabled && !oe && !$.current || ue(pe);
  }, Be = (pe) => {
    U.clear(), W.start(m, () => {
      be(pe);
    });
  }, [, ke] = y.useState(!1), $e = (pe) => {
    const et = (pe == null ? void 0 : pe.target) ?? b;
    if (!et || et.disabled || !cu(et)) {
      ke(!1);
      const Wt = pe ?? new Event("blur");
      !pe && et && (Object.defineProperty(Wt, "target", {
        value: et
      }), Object.defineProperty(Wt, "currentTarget", {
        value: et
      })), Be(Wt);
    }
  }, fe = (pe) => {
    if (b || j(pe.currentTarget), $.current = !1, cu(pe.target)) {
      const et = (Wt) => {
        Wt.target.disabled && $e(Wt), Wt.target.removeEventListener("blur", et);
      };
      pe.target.addEventListener("blur", et), ke(!0), ue(pe);
    }
  }, ye = (pe) => {
    B.current = !0;
    const et = M.props;
    et.onTouchStart && et.onTouchStart(pe);
  }, Ne = (pe) => {
    ye(pe), W.clear(), D.clear(), ee(), ie.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(v, () => {
      document.body.style.WebkitUserSelect = ie.current, ce(pe);
    });
  }, Ke = (pe) => {
    M.props.onTouchEnd && M.props.onTouchEnd(pe), ee(), W.start(p, () => {
      be(pe);
    });
  };
  y.useEffect(() => {
    if (!G)
      return;
    function pe(et) {
      et.key === "Escape" && be(et);
    }
    return document.addEventListener("keydown", pe), () => {
      document.removeEventListener("keydown", pe);
    };
  }, [be, G]);
  const Ze = ht(zo(M), j, n);
  !I && I !== 0 && (G = !1);
  const vt = y.useRef(), Ct = (pe) => {
    const et = M.props;
    et.onMouseMove && et.onMouseMove(pe), cs = {
      x: pe.clientX,
      y: pe.clientY
    }, vt.current && vt.current.update();
  }, Ge = {}, Oe = typeof I == "string";
  l ? (Ge.title = !G && Oe && !u ? I : null, Ge["aria-describedby"] = G ? F : null) : (Ge["aria-label"] = Oe ? I : null, Ge["aria-labelledby"] = G && !Oe ? F : null);
  const Pe = {
    ...Ge,
    ...A,
    ...M.props,
    className: ne(A.className, M.props.className),
    onTouchStart: ye,
    ref: Ze,
    ...w ? {
      onMouseMove: Ct
    } : {}
  }, at = {};
  h || (Pe.onTouchStart = Ne, Pe.onTouchEnd = Ke), u || (Pe.onMouseOver = sa(ce, Pe.onMouseOver), Pe.onMouseLeave = sa(Be, Pe.onMouseLeave), L || (at.onMouseOver = ve, at.onMouseLeave = Be)), a || (Pe.onFocus = sa(fe, Pe.onFocus), Pe.onBlur = sa($e, Pe.onBlur), L || (at.onFocus = fe, at.onBlur = $e));
  const re = {
    ...r,
    arrow: o,
    disableInteractive: L,
    placement: k,
    touch: B.current
  }, le = typeof T.popper == "function" ? T.popper(re) : T.popper, ze = y.useMemo(() => {
    var et;
    let pe = [{
      name: "arrow",
      enabled: !!P,
      options: {
        element: P,
        padding: 4
      }
    }];
    return (et = le == null ? void 0 : le.popperOptions) != null && et.modifiers && (pe = pe.concat(le.popperOptions.modifiers)), {
      ...le == null ? void 0 : le.popperOptions,
      modifiers: pe
    };
  }, [P, le == null ? void 0 : le.popperOptions]), De = PM(re), z = {
    slots: R,
    slotProps: {
      arrow: T.arrow,
      popper: le,
      tooltip: T.tooltip,
      transition: T.transition
    }
  }, [X, Se] = Ce("popper", {
    elementType: IM,
    externalForwardedProps: z,
    ownerState: re,
    className: De.popper
  }), [We, Nt] = Ce("transition", {
    elementType: ll,
    externalForwardedProps: z,
    ownerState: re
  }), [Xn, qn] = Ce("tooltip", {
    elementType: MM,
    className: De.tooltip,
    externalForwardedProps: z,
    ownerState: re
  }), [co, kl] = Ce("arrow", {
    elementType: $M,
    className: De.arrow,
    externalForwardedProps: z,
    ownerState: re,
    ref: O
  });
  return /* @__PURE__ */ c.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ y.cloneElement(M, Pe), /* @__PURE__ */ c.jsx(X, {
      as: gx,
      placement: k,
      anchorEl: w ? {
        getBoundingClientRect: () => ({
          top: cs.y,
          left: cs.x,
          right: cs.x,
          bottom: cs.y,
          width: 0,
          height: 0
        })
      } : b,
      popperRef: vt,
      open: b ? G : !1,
      id: F,
      transition: !0,
      ...at,
      ...Se,
      popperOptions: ze,
      children: ({
        TransitionProps: pe
      }) => /* @__PURE__ */ c.jsx(We, {
        timeout: N.transitions.duration.shorter,
        ...pe,
        ...Nt,
        children: /* @__PURE__ */ c.jsxs(Xn, {
          ...qn,
          children: [I, o ? /* @__PURE__ */ c.jsx(co, {
            ...kl
          }) : null]
        })
      })
    })]
  });
}), Fe = zk({
  createStyledComponent: H("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => ge({
    props: e,
    name: "MuiStack"
  })
});
function jM(e) {
  return he("MuiTab", e);
}
const Fn = de("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), AM = (e) => {
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
    root: ["root", i && s && "labelIcon", `textColor${ae(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return me(u, jM, t);
}, NM = H(No, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${ae(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${Fn.icon}`]: t.icon
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
  // Inset the ring: the Tabs scroller clips an outset ring.
  ...e.focusVisible && W1(3),
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
      [`& > .${Fn.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${Fn.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${Fn.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${Fn.icon}`]: {
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
      [`&.${Fn.selected}`]: {
        opacity: 1
      },
      ...e.focusVisible && {
        [`&.${Bf.focusVisible}`]: {
          opacity: 1
        }
      },
      [`&.${Fn.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Fn.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${Fn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Fn.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${Fn.disabled}`]: {
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
}))), ds = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    indicator: d,
    label: h,
    onChange: g,
    onClick: f,
    onFocus: v,
    // eslint-disable-next-line react/prop-types
    selected: w,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: m = "inherit",
    value: p,
    wrapped: x = !1,
    ...S
  } = r, E = Rx(), k = Ix({
    id: p,
    ref: n,
    disabled: i,
    selected: w
  }), R = E.getItemMap().size === 0 && w ? 0 : k.tabIndex, I = {
    ...r,
    disabled: i,
    disableFocusRipple: s,
    selected: w,
    icon: !!a,
    iconPosition: u,
    label: !!h,
    fullWidth: l,
    textColor: m,
    wrapped: x
  }, A = AM(I), M = a && h && /* @__PURE__ */ y.isValidElement(a) ? /* @__PURE__ */ y.cloneElement(a, {
    className: ne(A.icon, a.props.className)
  }) : a, N = (j) => {
    !w && g && g(j, p), f && f(j);
  }, b = (j) => {
    C && !w && g && g(j, p), v && v(j);
  };
  return /* @__PURE__ */ c.jsxs(NM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: ne(A.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": w,
    disabled: i,
    onClick: N,
    onFocus: b,
    tabIndex: R,
    ownerState: I,
    ...S,
    children: [u === "top" || u === "start" ? /* @__PURE__ */ c.jsxs(y.Fragment, {
      children: [M, h]
    }) : /* @__PURE__ */ c.jsxs(y.Fragment, {
      children: [h, M]
    }), d]
  });
}), Vx = /* @__PURE__ */ y.createContext();
function OM(e) {
  return he("MuiTable", e);
}
de("MuiTable", ["root", "stickyHeader"]);
const BM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return me({
    root: ["root", n && "stickyHeader"]
  }, OM, t);
}, LM = H("table", {
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
}))), Sy = "table", zM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = Sy,
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
  }, h = BM(d), g = y.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ c.jsx(Vx.Provider, {
    value: g,
    children: /* @__PURE__ */ c.jsx(LM, {
      as: i,
      role: i === Sy ? null : "table",
      ref: n,
      className: ne(h.root, o),
      ownerState: d,
      ...u
    })
  });
}), Pc = /* @__PURE__ */ y.createContext();
function _M(e) {
  return he("MuiTableBody", e);
}
de("MuiTableBody", ["root"]);
const FM = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, _M, t);
}, DM = H("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), WM = {
  variant: "body"
}, wy = "tbody", UM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = wy,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = FM(l);
  return /* @__PURE__ */ c.jsx(Pc.Provider, {
    value: WM,
    children: /* @__PURE__ */ c.jsx(DM, {
      className: ne(a.root, o),
      as: i,
      ref: n,
      role: i === wy ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function VM(e) {
  return he("MuiTableCell", e);
}
const HM = de("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), KM = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: o,
    size: i,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${ae(r)}`, o !== "normal" && `padding${ae(o)}`, `size${ae(i)}`]
  };
  return me(l, VM, t);
}, GM = H("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ae(n.size)}`], n.padding !== "normal" && t[`padding${ae(n.padding)}`], n.align !== "inherit" && t[`align${ae(n.align)}`], n.stickyHeader && t.stickyHeader];
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
      [`&.${HM.paddingCheckbox}`]: {
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
}))), Qt = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    variant: h,
    ...g
  } = r, f = y.useContext(Vx), v = y.useContext(Pc), w = v && v.variant === "head";
  let C;
  s ? C = s : C = w ? "th" : "td";
  let m = a;
  C === "td" ? m = void 0 : !m && w && (m = "col");
  const p = h || v && v.variant, x = {
    ...r,
    align: o,
    component: C,
    padding: l || (f && f.padding ? f.padding : "normal"),
    size: u || (f && f.size ? f.size : "medium"),
    sortDirection: d,
    stickyHeader: p === "head" && f && f.stickyHeader,
    variant: p
  }, S = KM(x);
  let E = null;
  return d && (E = d === "asc" ? "ascending" : "descending"), /* @__PURE__ */ c.jsx(GM, {
    as: C,
    ref: n,
    className: ne(S.root, i),
    "aria-sort": E,
    scope: m,
    ownerState: x,
    ...g
  });
});
function YM(e) {
  return he("MuiTableContainer", e);
}
de("MuiTableContainer", ["root"]);
const QM = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, YM, t);
}, XM = H("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), qM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTableContainer"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = QM(l);
  return /* @__PURE__ */ c.jsx(XM, {
    ref: n,
    as: i,
    className: ne(a.root, o),
    ownerState: l,
    ...s
  });
});
function JM(e) {
  return he("MuiTableHead", e);
}
de("MuiTableHead", ["root"]);
const ZM = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, JM, t);
}, e4 = H("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), t4 = {
  variant: "head"
}, Cy = "thead", n4 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Cy,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = ZM(l);
  return /* @__PURE__ */ c.jsx(Pc.Provider, {
    value: t4,
    children: /* @__PURE__ */ c.jsx(e4, {
      as: i,
      className: ne(a.root, o),
      ref: n,
      role: i === Cy ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), r4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), o4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function i4(e) {
  return he("MuiTableRow", e);
}
const ky = de("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), s4 = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return me({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, i4, t);
}, l4 = H("tr", {
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
  [`&.${ky.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${ky.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Ey = "tr", vd = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Ey,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, u = y.useContext(Pc), d = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: u && u.variant === "head",
    footer: u && u.variant === "footer"
  }, h = s4(d);
  return /* @__PURE__ */ c.jsx(l4, {
    as: i,
    ref: n,
    className: ne(h.root, o),
    role: i === Ey ? null : "row",
    ownerState: d,
    ...a
  });
});
function a4(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function u4(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = a4,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let u = !1;
  const d = () => {
    u = !0;
  }, h = (g) => {
    if (u) {
      o(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = g);
    const f = Math.min(1, (g - l) / s);
    if (t[e] = i(f) * (n - a) + a, f >= 1) {
      requestAnimationFrame(() => {
        o(null);
      });
      return;
    }
    requestAnimationFrame(h);
  };
  return a === n ? (o(new Error("Element already at target position")), d) : (requestAnimationFrame(h), d);
}
const c4 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function d4(e) {
  const {
    onChange: t,
    ...n
  } = e, r = y.useRef(), o = y.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return ft(() => {
    const s = bc(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = Qn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), y.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ c.jsx("div", {
    style: c4,
    ...n,
    ref: o
  });
}
function f4(e) {
  return he("MuiTabScrollButton", e);
}
const p4 = de("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), h4 = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return me({
    root: ["root", n, r && "disabled"]
  }, f4, t);
}, m4 = H(No, {
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
  [`&.${p4.disabled}`]: {
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
}), g4 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: o,
    slots: i = {},
    slotProps: s = {},
    direction: l,
    orientation: a,
    disabled: u,
    ...d
  } = r, {
    nativeButton: h,
    ...g
  } = d, f = yc(), v = {
    isRtl: f,
    ...r
  }, w = h4(v), C = i.StartScrollButtonIcon ?? r4, m = i.EndScrollButtonIcon ?? o4, p = Ni({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  }), x = Ni({
    elementType: m,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  });
  return /* @__PURE__ */ c.jsx(m4, {
    component: "div",
    className: ne(w.root, o),
    ref: n,
    role: null,
    ownerState: v,
    tabIndex: null,
    ...g,
    style: {
      ...g.style,
      ...a === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${f ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ c.jsx(C, {
      ...p
    }) : /* @__PURE__ */ c.jsx(m, {
      ...x
    })
  });
});
function y4(e) {
  return he("MuiTabs", e);
}
const xd = de("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), v4 = (e) => {
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
  return me({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", i && "scrollableY"],
    list: ["list", t && "vertical", s && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [o && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, y4, a);
}, x4 = H("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${xd.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${xd.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
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
      [`& .${xd.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), b4 = H("div", {
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
}), S4 = H("div", {
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
}), w4 = H("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(Te(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  ...St(e),
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
}))), C4 = H(d4)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Ty = {}, k4 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTabs"
  }), o = lo(), i = yc(), s = Ec(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: u,
    centered: d = !1,
    children: h,
    className: g,
    component: f = "div",
    allowScrollButtonsMobile: v = !1,
    indicatorColor: w = "primary",
    onChange: C,
    orientation: m = "horizontal",
    scrollButtons: p = "auto",
    selectionFollowsFocus: x,
    slots: S = {},
    slotProps: E = {},
    textColor: k = "primary",
    value: T,
    variant: R = "standard",
    visibleScrollbar: I = !1,
    ...A
  } = r, M = R === "scrollable", N = m === "vertical", b = N ? "scrollTop" : "scrollLeft", j = N ? "top" : "left", P = N ? "bottom" : "right", O = N ? "clientHeight" : "clientWidth", B = N ? "height" : "width", $ = {
    ...r,
    component: f,
    allowScrollButtonsMobile: v,
    indicatorColor: w,
    orientation: m,
    vertical: N,
    scrollButtons: p,
    textColor: k,
    variant: R,
    visibleScrollbar: I,
    fixed: !M,
    hideScrollbar: M && !I,
    scrollableX: M && !N,
    scrollableY: M && N,
    centered: d && !M,
    scrollButtonsHideMobile: !v
  }, L = v4($), D = Ni({
    elementType: S.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: $
  }), U = Ni({
    elementType: S.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: $
  }), [W, Q] = y.useState(!1), [K, q] = y.useState(Ty), [G, oe] = y.useState(!1), [F, ie] = y.useState(!1), [ee, Ee] = y.useState(!1), be = T === !1 ? null : T, [ue, ce] = y.useState(!1), [ve, Be] = y.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), ke = /* @__PURE__ */ new Map(), $e = y.useRef(null), fe = y.useRef(null), ye = {
    slots: S,
    slotProps: E
  }, Ne = () => {
    const te = $e.current;
    let J;
    if (te) {
      const Ie = te.getBoundingClientRect();
      J = {
        clientWidth: te.clientWidth,
        scrollLeft: te.scrollLeft,
        scrollTop: te.scrollTop,
        scrollWidth: te.scrollWidth,
        top: Ie.top,
        bottom: Ie.bottom,
        left: Ie.left,
        right: Ie.right
      };
    }
    let xe;
    if (te && T !== !1) {
      const Ie = fe.current.children;
      if (Ie.length > 0) {
        const xt = Ie[ke.get(T)];
        xe = xt ? xt.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: J,
      tabMeta: xe
    };
  }, Ke = rt(() => {
    const {
      tabsMeta: te,
      tabMeta: J
    } = Ne();
    let xe = 0, Ie;
    N ? (Ie = "top", J && te && (xe = J.top - te.top + te.scrollTop)) : (Ie = i ? "right" : "left", J && te && (xe = (i ? -1 : 1) * (J[Ie] - te[Ie] + te.scrollLeft)));
    const xt = {
      [Ie]: xe,
      // May be wrong until the font is loaded.
      [B]: J ? J[B] : 0
    };
    if (typeof K[Ie] != "number" || typeof K[B] != "number")
      q(xt);
    else {
      const gr = Math.abs(K[Ie] - xt[Ie]), Jn = Math.abs(K[B] - xt[B]);
      (gr >= 1 || Jn >= 1) && q(xt);
    }
  }), Ze = (te, {
    animation: J = !0
  } = {}) => {
    J && !s.shouldReduceMotion ? u4(b, $e.current, te, {
      duration: o.transitions.duration.standard
    }) : $e.current[b] = te;
  }, vt = (te) => {
    let J = $e.current[b];
    N ? J += te : J += te * (i ? -1 : 1), Ze(J);
  }, Ct = () => {
    const te = $e.current[O];
    let J = 0;
    const xe = Array.from(fe.current.children);
    for (let Ie = 0; Ie < xe.length; Ie += 1) {
      const xt = xe[Ie];
      if (J + xt[O] > te) {
        Ie === 0 && (J = te);
        break;
      }
      J += xt[O];
    }
    return J;
  }, Ge = () => {
    vt(-1 * Ct());
  }, Oe = () => {
    vt(Ct());
  }, [Pe, {
    onChange: at,
    ...re
  }] = Ce("scrollbar", {
    className: ne(L.scrollableX, L.hideScrollbar),
    elementType: C4,
    shouldForwardComponentProp: !0,
    externalForwardedProps: ye,
    ownerState: $
  }), le = y.useCallback((te) => {
    at == null || at(te), Be({
      overflow: null,
      scrollbarWidth: te
    });
  }, [at]), [ze, De] = Ce("scrollButtons", {
    className: L.scrollButtons,
    elementType: g4,
    externalForwardedProps: ye,
    ownerState: $,
    additionalProps: {
      orientation: m,
      slots: {
        StartScrollButtonIcon: S.startScrollButtonIcon,
        EndScrollButtonIcon: S.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: D,
        endScrollButtonIcon: U
      }
    }
  }), z = () => {
    const te = {};
    te.scrollbarSizeListener = M ? /* @__PURE__ */ c.jsx(Pe, {
      ...re,
      onChange: le
    }) : null;
    const xe = M && (p === "auto" && (G || F) || p === !0);
    return te.scrollButtonStart = xe ? /* @__PURE__ */ c.jsx(ze, {
      direction: i ? "right" : "left",
      onClick: Ge,
      disabled: !G,
      ...De
    }) : null, te.scrollButtonEnd = xe ? /* @__PURE__ */ c.jsx(ze, {
      direction: i ? "left" : "right",
      onClick: Oe,
      disabled: !F,
      ...De
    }) : null, te;
  }, X = rt((te) => {
    const {
      tabsMeta: J,
      tabMeta: xe
    } = Ne();
    if (!(!xe || !J)) {
      if (xe[j] < J[j]) {
        const Ie = J[b] + (xe[j] - J[j]);
        Ze(Ie, {
          animation: te
        });
      } else if (xe[P] > J[P]) {
        const Ie = J[b] + (xe[P] - J[P]);
        Ze(Ie, {
          animation: te
        });
      }
    }
  }), Se = rt(() => {
    M && p !== !1 && Ee(!ee);
  });
  y.useEffect(() => {
    const te = bc(() => {
      $e.current && Ke();
    });
    let J;
    const xe = (gr) => {
      gr.forEach((Jn) => {
        Jn.removedNodes.forEach((fo) => {
          J == null || J.unobserve(fo);
        }), Jn.addedNodes.forEach((fo) => {
          J == null || J.observe(fo);
        });
      }), te(), Se();
    }, Ie = Qn($e.current);
    Ie.addEventListener("resize", te);
    let xt;
    return typeof ResizeObserver < "u" && (J = new ResizeObserver(te), Array.from(fe.current.children).forEach((gr) => {
      J.observe(gr);
    })), typeof MutationObserver < "u" && (xt = new MutationObserver(xe), xt.observe(fe.current, {
      childList: !0
    })), () => {
      te.clear(), Ie.removeEventListener("resize", te), xt == null || xt.disconnect(), J == null || J.disconnect();
    };
  }, [Ke, Se]), y.useEffect(() => {
    const te = Array.from(fe.current.children), J = te.length;
    if (typeof IntersectionObserver < "u" && J > 0 && M && p !== !1) {
      const xe = te[0], Ie = te[J - 1], xt = {
        root: $e.current,
        threshold: 0.99
      }, gr = (Wo) => {
        oe(!Wo[0].isIntersecting);
      }, Jn = new IntersectionObserver(gr, xt);
      Jn.observe(xe);
      const fo = (Wo) => {
        ie(!Wo[0].isIntersecting);
      }, Hi = new IntersectionObserver(fo, xt);
      return Hi.observe(Ie), () => {
        Jn.disconnect(), Hi.disconnect();
      };
    }
  }, [M, p, ee, h == null ? void 0 : h.length]), y.useEffect(() => {
    Q(!0);
  }, []), y.useEffect(() => {
    Ke();
  }), y.useEffect(() => {
    X(Ty !== K);
  }, [X, K]), y.useImperativeHandle(u, () => ({
    updateIndicator: Ke,
    updateScrollButtons: Se
  }), [Ke, Se]);
  const [We, Nt] = Ce("indicator", {
    className: L.indicator,
    elementType: w4,
    externalForwardedProps: ye,
    ownerState: $,
    additionalProps: {
      style: K
    }
  }), Xn = /* @__PURE__ */ c.jsx(We, {
    ...Nt
  }), qn = Px({
    activeItemId: ue ? void 0 : be,
    orientation: m,
    isRtl: i
  }), co = qn.getContainerProps(), pe = y.Children.toArray(h).filter(y.isValidElement).map((te, J) => {
    const xe = te.props.value === void 0 ? J : te.props.value;
    return ke.set(xe, J), {
      child: te,
      index: J,
      childValue: xe
    };
  }).map(({
    child: te,
    childValue: J
  }) => {
    const xe = J === T;
    return /* @__PURE__ */ y.cloneElement(te, {
      fullWidth: R === "fullWidth",
      indicator: xe && !W && Xn,
      selected: xe,
      selectionFollowsFocus: x,
      onChange: C,
      textColor: k,
      value: J
    });
  }), et = z(), [Wt, El] = Ce("root", {
    ref: n,
    className: ne(L.root, g),
    elementType: x4,
    externalForwardedProps: {
      ...ye,
      ...A,
      component: f
    },
    ownerState: $
  }), [_o, Fo] = Ce("scroller", {
    ref: $e,
    className: L.scroller,
    elementType: b4,
    externalForwardedProps: ye,
    ownerState: $,
    additionalProps: {
      style: {
        overflow: ve.overflow,
        [N ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: I ? void 0 : -ve.scrollbarWidth
      }
    }
  }), Do = ht(co.ref, fe), Ac = (te) => {
    const J = fe.current, xe = sr(yt(J));
    (xe == null ? void 0 : xe.getAttribute("role")) === "tab" && co.onKeyDown(te);
  }, [Tl, Vi] = Ce("list", {
    ref: Do,
    className: L.list,
    elementType: S4,
    externalForwardedProps: ye,
    ownerState: $,
    getSlotProps: (te) => ({
      ...te,
      onBlur: (J) => {
        var xe;
        Eo(J.currentTarget, J.relatedTarget) || ce(!1), (xe = te.onBlur) == null || xe.call(te, J);
      },
      onKeyDown: (J) => {
        var xe;
        Ac(J), (xe = te.onKeyDown) == null || xe.call(te, J);
      },
      onFocus: (J) => {
        var xe;
        ce(!0), co.onFocus(J), (xe = te.onFocus) == null || xe.call(te, J);
      }
    })
  });
  return /* @__PURE__ */ c.jsxs(Wt, {
    ...El,
    children: [et.scrollButtonStart, et.scrollbarSizeListener, /* @__PURE__ */ c.jsxs(_o, {
      ...Fo,
      children: [/* @__PURE__ */ c.jsx(Tl, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": m === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Vi,
        children: /* @__PURE__ */ c.jsx(Ih.Provider, {
          value: qn,
          children: pe
        })
      }), W && Xn]
    }), et.scrollButtonEnd]
  });
});
function E4(e) {
  return he("MuiTextField", e);
}
de("MuiTextField", ["root"]);
const T4 = {
  standard: Ph,
  filled: Rh,
  outlined: Mh
}, R4 = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, E4, t);
}, P4 = H(W5, {
  name: "MuiTextField",
  slot: "Root"
})({}), br = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ge({
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
    error: h = !1,
    fullWidth: g = !1,
    helperText: f,
    id: v,
    inputRef: w,
    label: C,
    maxRows: m,
    minRows: p,
    multiline: x = !1,
    name: S,
    onBlur: E,
    onChange: k,
    onFocus: T,
    placeholder: R,
    required: I = !1,
    rows: A,
    select: M = !1,
    slots: N = {},
    slotProps: b = {},
    type: j,
    value: P,
    variant: O = "outlined",
    ...B
  } = r, $ = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: d,
    error: h,
    fullWidth: g,
    multiline: x,
    required: I,
    select: M,
    variant: O
  }, L = R4($), D = Nr(v), U = f && D ? `${D}-helper-text` : void 0, W = C && D ? `${D}-label` : void 0, Q = T4[O], K = {
    slots: N,
    slotProps: b
  }, [q, G] = Ce("select", {
    elementType: pu,
    externalForwardedProps: K,
    ownerState: $
  }), oe = M && G.native, F = {}, ie = K.slotProps.inputLabel;
  O === "outlined" && (ie && typeof ie.shrink < "u" && (F.notched = ie.shrink), F.label = C), M && (oe || (F.id = void 0), F["aria-describedby"] = void 0);
  const [ee, Ee] = Ce("root", {
    elementType: P4,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...K,
      ...B
    },
    ownerState: $,
    className: ne(L.root, l),
    ref: n,
    additionalProps: {
      disabled: d,
      error: h,
      fullWidth: g,
      required: I,
      color: a,
      variant: O
    }
  }), [be, ue] = Ce("input", {
    elementType: Q,
    externalForwardedProps: K,
    additionalProps: F,
    ownerState: $
  }), [ce, ve] = Ce("inputLabel", {
    elementType: iI,
    externalForwardedProps: K,
    ownerState: $
  }), [Be, ke] = Ce("htmlInput", {
    elementType: "input",
    externalForwardedProps: K,
    ownerState: $
  }), [$e, fe] = Ce("formHelperText", {
    elementType: H5,
    externalForwardedProps: K,
    ownerState: $
  }), ye = /* @__PURE__ */ c.jsx(be, {
    "aria-describedby": U,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: g,
    multiline: x,
    name: S,
    rows: A,
    maxRows: m,
    minRows: p,
    type: j,
    value: P,
    id: D,
    inputRef: w,
    onBlur: E,
    onChange: k,
    onFocus: T,
    placeholder: R,
    inputProps: ke,
    slots: {
      input: N.htmlInput ? Be : void 0
    },
    ...ue
  });
  return /* @__PURE__ */ c.jsxs(ee, {
    ...Ee,
    children: [C != null && C !== "" && /* @__PURE__ */ c.jsx(ce, {
      htmlFor: M && !oe ? void 0 : D,
      id: W,
      ...M && !oe && {
        component: "div"
      },
      ...ve,
      children: C
    }), M ? /* @__PURE__ */ c.jsx(q, {
      "aria-describedby": U,
      id: D,
      labelId: W,
      value: P,
      input: ye,
      ...G,
      children: s
    }) : ye, f && /* @__PURE__ */ c.jsx($e, {
      id: U,
      ...fe,
      children: f
    })]
  });
}), I4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), bd = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), Ry = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), M4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M8 5v14l11-7z"
})), $4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M6 6h12v12H6z"
})), j4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
})), A4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M15 21h-2v-2h2zm-2-7h-2v5h2zm8-2h-2v4h2zm-2-2h-2v2h2zM7 12H5v2h2zm-2-2H3v2h2zm7-5h2V3h-2zm-7.5-.5v3h3v-3zM9 9H3V3h6zm-4.5 7.5v3h3v-3zM9 21H3v-6h6zm7.5-16.5v3h3v-3zM21 9h-6V3h6zm-2 10v-3h-4v2h2v3h4v-2zm-2-7h-4v2h4zm-4-2H7v2h2v2h2v-2h2zm1-1V7h-2V5h-2v4zM6.75 5.25h-1.5v1.5h1.5zm0 12h-1.5v1.5h1.5zm12-12h-1.5v1.5h1.5z"
})), Ma = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
})), N4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), O4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
})), B4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
})), L4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5M7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
})), Sd = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), z4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "m20.2 5.9.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7m-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M8 18H6v-2h2zm3.5 0h-2v-2h2zm3.5 0h-2v-2h2z"
})), Py = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
})), _4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95M12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19"
})), F4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"
})), D4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
})), Iy = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5z"
})), W4 = Je(/* @__PURE__ */ c.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
})), Dn = [
  {
    id: "cloudflare",
    name: "Cloudflare (Standard)",
    shortLabel: "Cloudflare",
    servers: "1.1.1.1, 1.0.0.1",
    description: "Fast, privacy-first, zero logs"
  },
  {
    id: "cloudflare-security",
    name: "Cloudflare (Malware Blocking)",
    shortLabel: "Cloudflare Security",
    servers: "1.1.1.2, 1.0.0.2",
    description: "Blocks known malware and phishing domains"
  },
  {
    id: "google",
    name: "Google Public DNS",
    shortLabel: "Google",
    servers: "8.8.8.8, 8.8.4.4",
    description: "Global high-speed anycast resolvers"
  },
  {
    id: "quad9",
    name: "Quad9 (Security & Privacy)",
    shortLabel: "Quad9",
    servers: "9.9.9.9, 149.112.112.112",
    description: "Threat-intelligence blocking, Swiss jurisdiction"
  },
  {
    id: "adguard",
    name: "AdGuard DNS (Ad & Tracker Blocking)",
    shortLabel: "AdGuard",
    servers: "94.140.14.14, 94.140.15.15",
    description: "Blocks advertising and tracking domains network-wide"
  },
  {
    id: "opendns",
    name: "Cisco OpenDNS",
    shortLabel: "OpenDNS",
    servers: "208.67.222.222, 208.67.220.220",
    description: "Anti-phishing intelligence and high reliability"
  },
  {
    id: "custom",
    name: "Custom DNS Server",
    shortLabel: "Custom",
    servers: "",
    description: "Specify private LAN, Pi-hole, or custom DNS addresses"
  }
], _e = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', kr = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function Bt({ children: e, sx: t }) {
  return /* @__PURE__ */ c.jsx(
    we,
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
function Xo({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ c.jsxs(pr, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ c.jsxs(
      Fe,
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
          typeof e == "string" ? /* @__PURE__ */ c.jsx(Bt, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(Ae, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function qo({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ c.jsxs(Ae, { sx: n, children: [
    /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ c.jsx(
        we,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ c.jsx(we, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function tn({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ c.jsxs(Ae, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ c.jsx(Bt, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ c.jsx(
      we,
      {
        sx: {
          fontFamily: n ? _e : void 0,
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
function My({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ c.jsx(
    Ae,
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
function U4(e, t) {
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
function V4({ lines: e, running: t }) {
  const n = y.useRef(null), r = y.useRef(null), o = y.useRef(!0);
  return y.useEffect(() => {
    const i = r.current;
    if (!i) return;
    const s = () => {
      o.current = i.scrollHeight - i.scrollTop - i.clientHeight < 40;
    };
    return i.addEventListener("scroll", s), () => i.removeEventListener("scroll", s);
  }, []), y.useEffect(() => {
    var i;
    o.current && ((i = n.current) == null || i.scrollIntoView({ block: "end" }));
  }, [e]), !e.length && !t ? null : /* @__PURE__ */ c.jsxs(
    pr,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: kr.bg,
        color: kr.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: _e,
        fontSize: 12,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ c.jsx(
          Ae,
          {
            sx: {
              color: i.stream === "stderr" ? kr.err : i.stream === "meta" ? kr.dim : kr.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ c.jsx(Ae, { sx: { color: kr.dim }, children: "▍running…" }),
        /* @__PURE__ */ c.jsx("div", { ref: n })
      ]
    }
  );
}
var wl = {}, H4 = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, Hx = {}, Cn = {};
let jh;
const K4 = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
Cn.getSymbolSize = function(t) {
  if (!t) throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
Cn.getSymbolTotalCodewords = function(t) {
  return K4[t];
};
Cn.getBCHDigit = function(e) {
  let t = 0;
  for (; e !== 0; )
    t++, e >>>= 1;
  return t;
};
Cn.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  jh = t;
};
Cn.isKanjiModeEnabled = function() {
  return typeof jh < "u";
};
Cn.toSJIS = function(t) {
  return jh(t);
};
var Ic = {};
(function(e) {
  e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
  function t(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + n);
    }
  }
  e.isValid = function(r) {
    return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4;
  }, e.from = function(r, o) {
    if (e.isValid(r))
      return r;
    try {
      return t(r);
    } catch {
      return o;
    }
  };
})(Ic);
function Kx() {
  this.buffer = [], this.length = 0;
}
Kx.prototype = {
  get: function(e) {
    const t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) === 1;
  },
  put: function(e, t) {
    for (let n = 0; n < t; n++)
      this.putBit((e >>> t - n - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(e) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
  }
};
var G4 = Kx;
function Cl(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
}
Cl.prototype.set = function(e, t, n, r) {
  const o = e * this.size + t;
  this.data[o] = n, r && (this.reservedBit[o] = !0);
};
Cl.prototype.get = function(e, t) {
  return this.data[e * this.size + t];
};
Cl.prototype.xor = function(e, t, n) {
  this.data[e * this.size + t] ^= n;
};
Cl.prototype.isReserved = function(e, t) {
  return this.reservedBit[e * this.size + t];
};
var Y4 = Cl, Gx = {};
(function(e) {
  const t = Cn.getSymbolSize;
  e.getRowColCoords = function(r) {
    if (r === 1) return [];
    const o = Math.floor(r / 7) + 2, i = t(r), s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * o - 2)) * 2, l = [i - 7];
    for (let a = 1; a < o - 1; a++)
      l[a] = l[a - 1] - s;
    return l.push(6), l.reverse();
  }, e.getPositions = function(r) {
    const o = [], i = e.getRowColCoords(r), s = i.length;
    for (let l = 0; l < s; l++)
      for (let a = 0; a < s; a++)
        l === 0 && a === 0 || // top-left
        l === 0 && a === s - 1 || // bottom-left
        l === s - 1 && a === 0 || o.push([i[l], i[a]]);
    return o;
  };
})(Gx);
var Yx = {};
const Q4 = Cn.getSymbolSize, $y = 7;
Yx.getPositions = function(t) {
  const n = Q4(t);
  return [
    // top-left
    [0, 0],
    // top-right
    [n - $y, 0],
    // bottom-left
    [0, n - $y]
  ];
};
var Qx = {};
(function(e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const t = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  e.isValid = function(o) {
    return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
  }, e.from = function(o) {
    return e.isValid(o) ? parseInt(o, 10) : void 0;
  }, e.getPenaltyN1 = function(o) {
    const i = o.size;
    let s = 0, l = 0, a = 0, u = null, d = null;
    for (let h = 0; h < i; h++) {
      l = a = 0, u = d = null;
      for (let g = 0; g < i; g++) {
        let f = o.get(h, g);
        f === u ? l++ : (l >= 5 && (s += t.N1 + (l - 5)), u = f, l = 1), f = o.get(g, h), f === d ? a++ : (a >= 5 && (s += t.N1 + (a - 5)), d = f, a = 1);
      }
      l >= 5 && (s += t.N1 + (l - 5)), a >= 5 && (s += t.N1 + (a - 5));
    }
    return s;
  }, e.getPenaltyN2 = function(o) {
    const i = o.size;
    let s = 0;
    for (let l = 0; l < i - 1; l++)
      for (let a = 0; a < i - 1; a++) {
        const u = o.get(l, a) + o.get(l, a + 1) + o.get(l + 1, a) + o.get(l + 1, a + 1);
        (u === 4 || u === 0) && s++;
      }
    return s * t.N2;
  }, e.getPenaltyN3 = function(o) {
    const i = o.size;
    let s = 0, l = 0, a = 0;
    for (let u = 0; u < i; u++) {
      l = a = 0;
      for (let d = 0; d < i; d++)
        l = l << 1 & 2047 | o.get(u, d), d >= 10 && (l === 1488 || l === 93) && s++, a = a << 1 & 2047 | o.get(d, u), d >= 10 && (a === 1488 || a === 93) && s++;
    }
    return s * t.N3;
  }, e.getPenaltyN4 = function(o) {
    let i = 0;
    const s = o.data.length;
    for (let a = 0; a < s; a++) i += o.data[a];
    return Math.abs(Math.ceil(i * 100 / s / 5) - 10) * t.N4;
  };
  function n(r, o, i) {
    switch (r) {
      case e.Patterns.PATTERN000:
        return (o + i) % 2 === 0;
      case e.Patterns.PATTERN001:
        return o % 2 === 0;
      case e.Patterns.PATTERN010:
        return i % 3 === 0;
      case e.Patterns.PATTERN011:
        return (o + i) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return o * i % 2 + o * i % 3 === 0;
      case e.Patterns.PATTERN110:
        return (o * i % 2 + o * i % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (o * i % 3 + (o + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r);
    }
  }
  e.applyMask = function(o, i) {
    const s = i.size;
    for (let l = 0; l < s; l++)
      for (let a = 0; a < s; a++)
        i.isReserved(a, l) || i.xor(a, l, n(o, a, l));
  }, e.getBestMask = function(o, i) {
    const s = Object.keys(e.Patterns).length;
    let l = 0, a = 1 / 0;
    for (let u = 0; u < s; u++) {
      i(u), e.applyMask(u, o);
      const d = e.getPenaltyN1(o) + e.getPenaltyN2(o) + e.getPenaltyN3(o) + e.getPenaltyN4(o);
      e.applyMask(u, o), d < a && (a = d, l = u);
    }
    return l;
  };
})(Qx);
var Mc = {};
const Vr = Ic, la = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], aa = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
Mc.getBlocksCount = function(t, n) {
  switch (n) {
    case Vr.L:
      return la[(t - 1) * 4 + 0];
    case Vr.M:
      return la[(t - 1) * 4 + 1];
    case Vr.Q:
      return la[(t - 1) * 4 + 2];
    case Vr.H:
      return la[(t - 1) * 4 + 3];
    default:
      return;
  }
};
Mc.getTotalCodewordsCount = function(t, n) {
  switch (n) {
    case Vr.L:
      return aa[(t - 1) * 4 + 0];
    case Vr.M:
      return aa[(t - 1) * 4 + 1];
    case Vr.Q:
      return aa[(t - 1) * 4 + 2];
    case Vr.H:
      return aa[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var Xx = {}, $c = {};
const Ns = new Uint8Array(512), hu = new Uint8Array(256);
(function() {
  let t = 1;
  for (let n = 0; n < 255; n++)
    Ns[n] = t, hu[t] = n, t <<= 1, t & 256 && (t ^= 285);
  for (let n = 255; n < 512; n++)
    Ns[n] = Ns[n - 255];
})();
$c.log = function(t) {
  if (t < 1) throw new Error("log(" + t + ")");
  return hu[t];
};
$c.exp = function(t) {
  return Ns[t];
};
$c.mul = function(t, n) {
  return t === 0 || n === 0 ? 0 : Ns[hu[t] + hu[n]];
};
(function(e) {
  const t = $c;
  e.mul = function(r, o) {
    const i = new Uint8Array(r.length + o.length - 1);
    for (let s = 0; s < r.length; s++)
      for (let l = 0; l < o.length; l++)
        i[s + l] ^= t.mul(r[s], o[l]);
    return i;
  }, e.mod = function(r, o) {
    let i = new Uint8Array(r);
    for (; i.length - o.length >= 0; ) {
      const s = i[0];
      for (let a = 0; a < o.length; a++)
        i[a] ^= t.mul(o[a], s);
      let l = 0;
      for (; l < i.length && i[l] === 0; ) l++;
      i = i.slice(l);
    }
    return i;
  }, e.generateECPolynomial = function(r) {
    let o = new Uint8Array([1]);
    for (let i = 0; i < r; i++)
      o = e.mul(o, new Uint8Array([1, t.exp(i)]));
    return o;
  };
})(Xx);
const qx = Xx;
function Ah(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
}
Ah.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = qx.generateECPolynomial(this.degree);
};
Ah.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const n = new Uint8Array(t.length + this.degree);
  n.set(t);
  const r = qx.mod(n, this.genPoly), o = this.degree - r.length;
  if (o > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(r, o), i;
  }
  return r;
};
var X4 = Ah, Jx = {}, uo = {}, Nh = {};
Nh.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var mr = {};
const Zx = "[0-9]+", q4 = "[A-Z $%*+\\-./:]+";
let al = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
al = al.replace(/u/g, "\\u");
const J4 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + al + `)(?:.|[\r
]))+`;
mr.KANJI = new RegExp(al, "g");
mr.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
mr.BYTE = new RegExp(J4, "g");
mr.NUMERIC = new RegExp(Zx, "g");
mr.ALPHANUMERIC = new RegExp(q4, "g");
const Z4 = new RegExp("^" + al + "$"), e3 = new RegExp("^" + Zx + "$"), t3 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
mr.testKanji = function(t) {
  return Z4.test(t);
};
mr.testNumeric = function(t) {
  return e3.test(t);
};
mr.testAlphanumeric = function(t) {
  return t3.test(t);
};
(function(e) {
  const t = Nh, n = mr;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, e.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, e.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, e.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, e.MIXED = {
    bit: -1
  }, e.getCharCountIndicator = function(i, s) {
    if (!i.ccBits) throw new Error("Invalid mode: " + i);
    if (!t.isValid(s))
      throw new Error("Invalid version: " + s);
    return s >= 1 && s < 10 ? i.ccBits[0] : s < 27 ? i.ccBits[1] : i.ccBits[2];
  }, e.getBestModeForData = function(i) {
    return n.testNumeric(i) ? e.NUMERIC : n.testAlphanumeric(i) ? e.ALPHANUMERIC : n.testKanji(i) ? e.KANJI : e.BYTE;
  }, e.toString = function(i) {
    if (i && i.id) return i.id;
    throw new Error("Invalid mode");
  }, e.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function r(o) {
    if (typeof o != "string")
      throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  e.from = function(i, s) {
    if (e.isValid(i))
      return i;
    try {
      return r(i);
    } catch {
      return s;
    }
  };
})(uo);
(function(e) {
  const t = Cn, n = Mc, r = Ic, o = uo, i = Nh, s = 7973, l = t.getBCHDigit(s);
  function a(g, f, v) {
    for (let w = 1; w <= 40; w++)
      if (f <= e.getCapacity(w, v, g))
        return w;
  }
  function u(g, f) {
    return o.getCharCountIndicator(g, f) + 4;
  }
  function d(g, f) {
    let v = 0;
    return g.forEach(function(w) {
      const C = u(w.mode, f);
      v += C + w.getBitsLength();
    }), v;
  }
  function h(g, f) {
    for (let v = 1; v <= 40; v++)
      if (d(g, v) <= e.getCapacity(v, f, o.MIXED))
        return v;
  }
  e.from = function(f, v) {
    return i.isValid(f) ? parseInt(f, 10) : v;
  }, e.getCapacity = function(f, v, w) {
    if (!i.isValid(f))
      throw new Error("Invalid QR Code version");
    typeof w > "u" && (w = o.BYTE);
    const C = t.getSymbolTotalCodewords(f), m = n.getTotalCodewordsCount(f, v), p = (C - m) * 8;
    if (w === o.MIXED) return p;
    const x = p - u(w, f);
    switch (w) {
      case o.NUMERIC:
        return Math.floor(x / 10 * 3);
      case o.ALPHANUMERIC:
        return Math.floor(x / 11 * 2);
      case o.KANJI:
        return Math.floor(x / 13);
      case o.BYTE:
      default:
        return Math.floor(x / 8);
    }
  }, e.getBestVersionForData = function(f, v) {
    let w;
    const C = r.from(v, r.M);
    if (Array.isArray(f)) {
      if (f.length > 1)
        return h(f, C);
      if (f.length === 0)
        return 1;
      w = f[0];
    } else
      w = f;
    return a(w.mode, w.getLength(), C);
  }, e.getEncodedBits = function(f) {
    if (!i.isValid(f) || f < 7)
      throw new Error("Invalid QR Code version");
    let v = f << 12;
    for (; t.getBCHDigit(v) - l >= 0; )
      v ^= s << t.getBCHDigit(v) - l;
    return f << 12 | v;
  };
})(Jx);
var eb = {};
const Hf = Cn, tb = 1335, n3 = 21522, jy = Hf.getBCHDigit(tb);
eb.getEncodedBits = function(t, n) {
  const r = t.bit << 3 | n;
  let o = r << 10;
  for (; Hf.getBCHDigit(o) - jy >= 0; )
    o ^= tb << Hf.getBCHDigit(o) - jy;
  return (r << 10 | o) ^ n3;
};
var nb = {};
const r3 = uo;
function Oi(e) {
  this.mode = r3.NUMERIC, this.data = e.toString();
}
Oi.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
Oi.prototype.getLength = function() {
  return this.data.length;
};
Oi.prototype.getBitsLength = function() {
  return Oi.getBitsLength(this.data.length);
};
Oi.prototype.write = function(t) {
  let n, r, o;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    r = this.data.substr(n, 3), o = parseInt(r, 10), t.put(o, 10);
  const i = this.data.length - n;
  i > 0 && (r = this.data.substr(n), o = parseInt(r, 10), t.put(o, i * 3 + 1));
};
var o3 = Oi;
const i3 = uo, wd = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function Bi(e) {
  this.mode = i3.ALPHANUMERIC, this.data = e;
}
Bi.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
Bi.prototype.getLength = function() {
  return this.data.length;
};
Bi.prototype.getBitsLength = function() {
  return Bi.getBitsLength(this.data.length);
};
Bi.prototype.write = function(t) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let r = wd.indexOf(this.data[n]) * 45;
    r += wd.indexOf(this.data[n + 1]), t.put(r, 11);
  }
  this.data.length % 2 && t.put(wd.indexOf(this.data[n]), 6);
};
var s3 = Bi;
const l3 = uo;
function Li(e) {
  this.mode = l3.BYTE, typeof e == "string" ? this.data = new TextEncoder().encode(e) : this.data = new Uint8Array(e);
}
Li.getBitsLength = function(t) {
  return t * 8;
};
Li.prototype.getLength = function() {
  return this.data.length;
};
Li.prototype.getBitsLength = function() {
  return Li.getBitsLength(this.data.length);
};
Li.prototype.write = function(e) {
  for (let t = 0, n = this.data.length; t < n; t++)
    e.put(this.data[t], 8);
};
var a3 = Li;
const u3 = uo, c3 = Cn;
function zi(e) {
  this.mode = u3.KANJI, this.data = e;
}
zi.getBitsLength = function(t) {
  return t * 13;
};
zi.prototype.getLength = function() {
  return this.data.length;
};
zi.prototype.getBitsLength = function() {
  return zi.getBitsLength(this.data.length);
};
zi.prototype.write = function(e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let n = c3.toSJIS(this.data[t]);
    if (n >= 33088 && n <= 40956)
      n -= 33088;
    else if (n >= 57408 && n <= 60351)
      n -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`
      );
    n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13);
  }
};
var d3 = zi, rb = { exports: {} };
(function(e) {
  var t = {
    single_source_shortest_paths: function(n, r, o) {
      var i = {}, s = {};
      s[r] = 0;
      var l = t.PriorityQueue.make();
      l.push(r, 0);
      for (var a, u, d, h, g, f, v, w, C; !l.empty(); ) {
        a = l.pop(), u = a.value, h = a.cost, g = n[u] || {};
        for (d in g)
          g.hasOwnProperty(d) && (f = g[d], v = h + f, w = s[d], C = typeof s[d] > "u", (C || w > v) && (s[d] = v, l.push(d, v), i[d] = u));
      }
      if (typeof o < "u" && typeof s[o] > "u") {
        var m = ["Could not find a path from ", r, " to ", o, "."].join("");
        throw new Error(m);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(n, r) {
      for (var o = [], i = r; i; )
        o.push(i), n[i], i = n[i];
      return o.reverse(), o;
    },
    find_path: function(n, r, o) {
      var i = t.single_source_shortest_paths(n, r, o);
      return t.extract_shortest_path_from_predecessor_list(
        i,
        o
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(n) {
        var r = t.PriorityQueue, o = {}, i;
        n = n || {};
        for (i in r)
          r.hasOwnProperty(i) && (o[i] = r[i]);
        return o.queue = [], o.sorter = n.sorter || r.default_sorter, o;
      },
      default_sorter: function(n, r) {
        return n.cost - r.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(n, r) {
        var o = { value: n, cost: r };
        this.queue.push(o), this.queue.sort(this.sorter);
      },
      /**
       * Return the highest priority element in the queue.
       */
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  e.exports = t;
})(rb);
var f3 = rb.exports;
(function(e) {
  const t = uo, n = o3, r = s3, o = a3, i = d3, s = mr, l = Cn, a = f3;
  function u(m) {
    return unescape(encodeURIComponent(m)).length;
  }
  function d(m, p, x) {
    const S = [];
    let E;
    for (; (E = m.exec(x)) !== null; )
      S.push({
        data: E[0],
        index: E.index,
        mode: p,
        length: E[0].length
      });
    return S;
  }
  function h(m) {
    const p = d(s.NUMERIC, t.NUMERIC, m), x = d(s.ALPHANUMERIC, t.ALPHANUMERIC, m);
    let S, E;
    return l.isKanjiModeEnabled() ? (S = d(s.BYTE, t.BYTE, m), E = d(s.KANJI, t.KANJI, m)) : (S = d(s.BYTE_KANJI, t.BYTE, m), E = []), p.concat(x, S, E).sort(function(T, R) {
      return T.index - R.index;
    }).map(function(T) {
      return {
        data: T.data,
        mode: T.mode,
        length: T.length
      };
    });
  }
  function g(m, p) {
    switch (p) {
      case t.NUMERIC:
        return n.getBitsLength(m);
      case t.ALPHANUMERIC:
        return r.getBitsLength(m);
      case t.KANJI:
        return i.getBitsLength(m);
      case t.BYTE:
        return o.getBitsLength(m);
    }
  }
  function f(m) {
    return m.reduce(function(p, x) {
      const S = p.length - 1 >= 0 ? p[p.length - 1] : null;
      return S && S.mode === x.mode ? (p[p.length - 1].data += x.data, p) : (p.push(x), p);
    }, []);
  }
  function v(m) {
    const p = [];
    for (let x = 0; x < m.length; x++) {
      const S = m[x];
      switch (S.mode) {
        case t.NUMERIC:
          p.push([
            S,
            { data: S.data, mode: t.ALPHANUMERIC, length: S.length },
            { data: S.data, mode: t.BYTE, length: S.length }
          ]);
          break;
        case t.ALPHANUMERIC:
          p.push([
            S,
            { data: S.data, mode: t.BYTE, length: S.length }
          ]);
          break;
        case t.KANJI:
          p.push([
            S,
            { data: S.data, mode: t.BYTE, length: u(S.data) }
          ]);
          break;
        case t.BYTE:
          p.push([
            { data: S.data, mode: t.BYTE, length: u(S.data) }
          ]);
      }
    }
    return p;
  }
  function w(m, p) {
    const x = {}, S = { start: {} };
    let E = ["start"];
    for (let k = 0; k < m.length; k++) {
      const T = m[k], R = [];
      for (let I = 0; I < T.length; I++) {
        const A = T[I], M = "" + k + I;
        R.push(M), x[M] = { node: A, lastCount: 0 }, S[M] = {};
        for (let N = 0; N < E.length; N++) {
          const b = E[N];
          x[b] && x[b].node.mode === A.mode ? (S[b][M] = g(x[b].lastCount + A.length, A.mode) - g(x[b].lastCount, A.mode), x[b].lastCount += A.length) : (x[b] && (x[b].lastCount = A.length), S[b][M] = g(A.length, A.mode) + 4 + t.getCharCountIndicator(A.mode, p));
        }
      }
      E = R;
    }
    for (let k = 0; k < E.length; k++)
      S[E[k]].end = 0;
    return { map: S, table: x };
  }
  function C(m, p) {
    let x;
    const S = t.getBestModeForData(m);
    if (x = t.from(p, S), x !== t.BYTE && x.bit < S.bit)
      throw new Error('"' + m + '" cannot be encoded with mode ' + t.toString(x) + `.
 Suggested mode is: ` + t.toString(S));
    switch (x === t.KANJI && !l.isKanjiModeEnabled() && (x = t.BYTE), x) {
      case t.NUMERIC:
        return new n(m);
      case t.ALPHANUMERIC:
        return new r(m);
      case t.KANJI:
        return new i(m);
      case t.BYTE:
        return new o(m);
    }
  }
  e.fromArray = function(p) {
    return p.reduce(function(x, S) {
      return typeof S == "string" ? x.push(C(S, null)) : S.data && x.push(C(S.data, S.mode)), x;
    }, []);
  }, e.fromString = function(p, x) {
    const S = h(p, l.isKanjiModeEnabled()), E = v(S), k = w(E, x), T = a.find_path(k.map, "start", "end"), R = [];
    for (let I = 1; I < T.length - 1; I++)
      R.push(k.table[T[I]].node);
    return e.fromArray(f(R));
  }, e.rawSplit = function(p) {
    return e.fromArray(
      h(p, l.isKanjiModeEnabled())
    );
  };
})(nb);
const jc = Cn, Cd = Ic, p3 = G4, h3 = Y4, m3 = Gx, g3 = Yx, Kf = Qx, Gf = Mc, y3 = X4, mu = Jx, v3 = eb, x3 = uo, kd = nb;
function b3(e, t) {
  const n = e.size, r = g3.getPositions(t);
  for (let o = 0; o < r.length; o++) {
    const i = r[o][0], s = r[o][1];
    for (let l = -1; l <= 7; l++)
      if (!(i + l <= -1 || n <= i + l))
        for (let a = -1; a <= 7; a++)
          s + a <= -1 || n <= s + a || (l >= 0 && l <= 6 && (a === 0 || a === 6) || a >= 0 && a <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && a >= 2 && a <= 4 ? e.set(i + l, s + a, !0, !0) : e.set(i + l, s + a, !1, !0));
  }
}
function S3(e) {
  const t = e.size;
  for (let n = 8; n < t - 8; n++) {
    const r = n % 2 === 0;
    e.set(n, 6, r, !0), e.set(6, n, r, !0);
  }
}
function w3(e, t) {
  const n = m3.getPositions(t);
  for (let r = 0; r < n.length; r++) {
    const o = n[r][0], i = n[r][1];
    for (let s = -2; s <= 2; s++)
      for (let l = -2; l <= 2; l++)
        s === -2 || s === 2 || l === -2 || l === 2 || s === 0 && l === 0 ? e.set(o + s, i + l, !0, !0) : e.set(o + s, i + l, !1, !0);
  }
}
function C3(e, t) {
  const n = e.size, r = mu.getEncodedBits(t);
  let o, i, s;
  for (let l = 0; l < 18; l++)
    o = Math.floor(l / 3), i = l % 3 + n - 8 - 3, s = (r >> l & 1) === 1, e.set(o, i, s, !0), e.set(i, o, s, !0);
}
function Ed(e, t, n) {
  const r = e.size, o = v3.getEncodedBits(t, n);
  let i, s;
  for (i = 0; i < 15; i++)
    s = (o >> i & 1) === 1, i < 6 ? e.set(i, 8, s, !0) : i < 8 ? e.set(i + 1, 8, s, !0) : e.set(r - 15 + i, 8, s, !0), i < 8 ? e.set(8, r - i - 1, s, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, s, !0) : e.set(8, 15 - i - 1, s, !0);
  e.set(r - 8, 8, 1, !0);
}
function k3(e, t) {
  const n = e.size;
  let r = -1, o = n - 1, i = 7, s = 0;
  for (let l = n - 1; l > 0; l -= 2)
    for (l === 6 && l--; ; ) {
      for (let a = 0; a < 2; a++)
        if (!e.isReserved(o, l - a)) {
          let u = !1;
          s < t.length && (u = (t[s] >>> i & 1) === 1), e.set(o, l - a, u), i--, i === -1 && (s++, i = 7);
        }
      if (o += r, o < 0 || n <= o) {
        o -= r, r = -r;
        break;
      }
    }
}
function E3(e, t, n) {
  const r = new p3();
  n.forEach(function(a) {
    r.put(a.mode.bit, 4), r.put(a.getLength(), x3.getCharCountIndicator(a.mode, e)), a.write(r);
  });
  const o = jc.getSymbolTotalCodewords(e), i = Gf.getTotalCodewordsCount(e, t), s = (o - i) * 8;
  for (r.getLengthInBits() + 4 <= s && r.put(0, 4); r.getLengthInBits() % 8 !== 0; )
    r.putBit(0);
  const l = (s - r.getLengthInBits()) / 8;
  for (let a = 0; a < l; a++)
    r.put(a % 2 ? 17 : 236, 8);
  return T3(r, e, t);
}
function T3(e, t, n) {
  const r = jc.getSymbolTotalCodewords(t), o = Gf.getTotalCodewordsCount(t, n), i = r - o, s = Gf.getBlocksCount(t, n), l = r % s, a = s - l, u = Math.floor(r / s), d = Math.floor(i / s), h = d + 1, g = u - d, f = new y3(g);
  let v = 0;
  const w = new Array(s), C = new Array(s);
  let m = 0;
  const p = new Uint8Array(e.buffer);
  for (let T = 0; T < s; T++) {
    const R = T < a ? d : h;
    w[T] = p.slice(v, v + R), C[T] = f.encode(w[T]), v += R, m = Math.max(m, R);
  }
  const x = new Uint8Array(r);
  let S = 0, E, k;
  for (E = 0; E < m; E++)
    for (k = 0; k < s; k++)
      E < w[k].length && (x[S++] = w[k][E]);
  for (E = 0; E < g; E++)
    for (k = 0; k < s; k++)
      x[S++] = C[k][E];
  return x;
}
function R3(e, t, n, r) {
  let o;
  if (Array.isArray(e))
    o = kd.fromArray(e);
  else if (typeof e == "string") {
    let u = t;
    if (!u) {
      const d = kd.rawSplit(e);
      u = mu.getBestVersionForData(d, n);
    }
    o = kd.fromString(e, u || 40);
  } else
    throw new Error("Invalid data");
  const i = mu.getBestVersionForData(o, n);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t)
    t = i;
  else if (t < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`
    );
  const s = E3(t, n, o), l = jc.getSymbolSize(t), a = new h3(l);
  return b3(a, t), S3(a), w3(a, t), Ed(a, n, 0), t >= 7 && C3(a, t), k3(a, s), isNaN(r) && (r = Kf.getBestMask(
    a,
    Ed.bind(null, a, n)
  )), Kf.applyMask(r, a), Ed(a, n, r), {
    modules: a,
    version: t,
    errorCorrectionLevel: n,
    maskPattern: r,
    segments: o
  };
}
Hx.create = function(t, n) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  let r = Cd.M, o, i;
  return typeof n < "u" && (r = Cd.from(n.errorCorrectionLevel, Cd.M), o = mu.from(n.version), i = Kf.from(n.maskPattern), n.toSJISFunc && jc.setToSJISFunction(n.toSJISFunc)), R3(t, o, r, i);
};
var ob = {}, Oh = {};
(function(e) {
  function t(n) {
    if (typeof n == "number" && (n = n.toString()), typeof n != "string")
      throw new Error("Color should be defined as hex string");
    let r = n.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error("Invalid hex color: " + n);
    (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(i) {
      return [i, i];
    }))), r.length === 6 && r.push("F", "F");
    const o = parseInt(r.join(""), 16);
    return {
      r: o >> 24 & 255,
      g: o >> 16 & 255,
      b: o >> 8 & 255,
      a: o & 255,
      hex: "#" + r.slice(0, 6).join("")
    };
  }
  e.getOptions = function(r) {
    r || (r = {}), r.color || (r.color = {});
    const o = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, i = r.width && r.width >= 21 ? r.width : void 0, s = r.scale || 4;
    return {
      width: i,
      scale: i ? 4 : s,
      margin: o,
      color: {
        dark: t(r.color.dark || "#000000ff"),
        light: t(r.color.light || "#ffffffff")
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {}
    };
  }, e.getScale = function(r, o) {
    return o.width && o.width >= r + o.margin * 2 ? o.width / (r + o.margin * 2) : o.scale;
  }, e.getImageWidth = function(r, o) {
    const i = e.getScale(r, o);
    return Math.floor((r + o.margin * 2) * i);
  }, e.qrToImageData = function(r, o, i) {
    const s = o.modules.size, l = o.modules.data, a = e.getScale(s, i), u = Math.floor((s + i.margin * 2) * a), d = i.margin * a, h = [i.color.light, i.color.dark];
    for (let g = 0; g < u; g++)
      for (let f = 0; f < u; f++) {
        let v = (g * u + f) * 4, w = i.color.light;
        if (g >= d && f >= d && g < u - d && f < u - d) {
          const C = Math.floor((g - d) / a), m = Math.floor((f - d) / a);
          w = h[l[C * s + m] ? 1 : 0];
        }
        r[v++] = w.r, r[v++] = w.g, r[v++] = w.b, r[v] = w.a;
      }
  };
})(Oh);
(function(e) {
  const t = Oh;
  function n(o, i, s) {
    o.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = s, i.width = s, i.style.height = s + "px", i.style.width = s + "px";
  }
  function r() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  e.render = function(i, s, l) {
    let a = l, u = s;
    typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), s || (u = r()), a = t.getOptions(a);
    const d = t.getImageWidth(i.modules.size, a), h = u.getContext("2d"), g = h.createImageData(d, d);
    return t.qrToImageData(g.data, i, a), n(h, u, d), h.putImageData(g, 0, 0), u;
  }, e.renderToDataURL = function(i, s, l) {
    let a = l;
    typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), a || (a = {});
    const u = e.render(i, s, a), d = a.type || "image/png", h = a.rendererOpts || {};
    return u.toDataURL(d, h.quality);
  };
})(ob);
var ib = {};
const P3 = Oh;
function Ay(e, t) {
  const n = e.a / 255, r = t + '="' + e.hex + '"';
  return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
}
function Td(e, t, n) {
  let r = e + t;
  return typeof n < "u" && (r += " " + n), r;
}
function I3(e, t, n) {
  let r = "", o = 0, i = !1, s = 0;
  for (let l = 0; l < e.length; l++) {
    const a = Math.floor(l % t), u = Math.floor(l / t);
    !a && !i && (i = !0), e[l] ? (s++, l > 0 && a > 0 && e[l - 1] || (r += i ? Td("M", a + n, 0.5 + u + n) : Td("m", o, 0), o = 0, i = !1), a + 1 < t && e[l + 1] || (r += Td("h", s), s = 0)) : o++;
  }
  return r;
}
ib.render = function(t, n, r) {
  const o = P3.getOptions(n), i = t.modules.size, s = t.modules.data, l = i + o.margin * 2, a = o.color.light.a ? "<path " + Ay(o.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "", u = "<path " + Ay(o.color.dark, "stroke") + ' d="' + I3(s, i, o.margin) + '"/>', d = 'viewBox="0 0 ' + l + " " + l + '"', g = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + a + u + `</svg>
`;
  return typeof r == "function" && r(null, g), g;
};
const M3 = H4, Yf = Hx, sb = ob, $3 = ib;
function Bh(e, t, n, r, o) {
  const i = [].slice.call(arguments, 1), s = i.length, l = typeof i[s - 1] == "function";
  if (!l && !M3())
    throw new Error("Callback required as last argument");
  if (l) {
    if (s < 2)
      throw new Error("Too few arguments provided");
    s === 2 ? (o = n, n = t, t = r = void 0) : s === 3 && (t.getContext && typeof o > "u" ? (o = r, r = void 0) : (o = r, r = n, n = t, t = void 0));
  } else {
    if (s < 1)
      throw new Error("Too few arguments provided");
    return s === 1 ? (n = t, t = r = void 0) : s === 2 && !t.getContext && (r = n, n = t, t = void 0), new Promise(function(a, u) {
      try {
        const d = Yf.create(n, r);
        a(e(d, t, r));
      } catch (d) {
        u(d);
      }
    });
  }
  try {
    const a = Yf.create(n, r);
    o(null, e(a, t, r));
  } catch (a) {
    o(a);
  }
}
wl.create = Yf.create;
wl.toCanvas = Bh.bind(null, sb.render);
wl.toDataURL = Bh.bind(null, sb.renderToDataURL);
wl.toString = Bh.bind(null, function(e, t, n) {
  return $3.render(e, n);
});
function Ny({
  text: e,
  size: t = 240,
  filename: n = "wireguard-tunnel"
}) {
  const r = y.useRef(null), [o, i] = y.useState(null);
  y.useEffect(() => {
    const l = r.current;
    !l || !e || wl.toCanvas(
      l,
      e,
      {
        width: t,
        margin: 2,
        // Standard quiet zone for crisp edge detection
        errorCorrectionLevel: "M",
        // 15% error recovery: optimal balance of high module contrast and scan reliability
        color: {
          dark: "#000000",
          light: "#ffffff"
        }
      },
      (a) => {
        a ? (console.error("QR Code generation error:", a), i(a.message || "Failed to generate QR code")) : i(null);
      }
    );
  }, [e, t]);
  const s = () => {
    const l = r.current;
    if (l)
      try {
        const a = l.toDataURL("image/png"), u = document.createElement("a");
        u.href = a, u.download = `${n}.png`, u.click();
      } catch (a) {
        console.error("Failed to download QR code image", a);
      }
  };
  return o ? /* @__PURE__ */ c.jsx(Ae, { sx: { p: 2, color: "error.main", textAlign: "center" }, children: /* @__PURE__ */ c.jsx(we, { variant: "caption", children: o }) }) : /* @__PURE__ */ c.jsxs(Fe, { spacing: 1, sx: { alignItems: "center" }, children: [
    /* @__PURE__ */ c.jsx(
      Ae,
      {
        sx: {
          p: 1.5,
          bgcolor: "#ffffff",
          borderRadius: "8px",
          display: "inline-block",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)"
        },
        children: /* @__PURE__ */ c.jsx("canvas", { ref: r, style: { display: "block" } })
      }
    ),
    /* @__PURE__ */ c.jsx(
      mt,
      {
        size: "small",
        variant: "text",
        startIcon: /* @__PURE__ */ c.jsx(Ma, { sx: { fontSize: 16 } }),
        onClick: s,
        sx: { fontSize: "0.75rem", textTransform: "none", color: "text.secondary" },
        children: "Download QR Image (.png)"
      }
    )
  ] });
}
function ua(e) {
  if (!e || e === 0) return "0 B";
  const t = 1024, n = ["B", "KB", "MB", "GB", "TB"], r = Math.floor(Math.log(e) / Math.log(t));
  return `${parseFloat((e / Math.pow(t, r)).toFixed(2))} ${n[r]}`;
}
function j3(e) {
  if (!e || e === 0) return "Never";
  const n = Math.floor(Date.now() / 1e3) - e;
  return n < 60 ? `${n}s ago` : n < 3600 ? `${Math.floor(n / 60)}m ago` : n < 86400 ? `${Math.floor(n / 3600)}h ago` : `${Math.floor(n / 86400)}d ago`;
}
function Jo(e, t) {
  return !e || !t ? e : e.replace(/^Endpoint\s*=\s*[^:\s\r\n]+(:51820)?/gm, `Endpoint = ${t}:51820`);
}
const ca = { p: 2, "&:last-child": { pb: 2 } }, da = 2.25;
function A3({ ctx: e }) {
  const t = y.useMemo(() => xc(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ c.jsx(GE, { theme: t, children: /* @__PURE__ */ c.jsx(N3, { ctx: e }) });
}
function N3({ ctx: e }) {
  const [t, n] = y.useState(0), [r, o] = y.useState(null), [i, s] = y.useState(null), [l, a] = y.useState(null), [u, d] = y.useState([]), [h, g] = y.useState([]), [f, v] = y.useState(!1), [w, C] = y.useState(null), [m, p] = y.useState(!1), [x, S] = y.useState(""), [E, k] = y.useState([]), [T, R] = y.useState(!1), [I, A] = y.useState({
    name: "",
    ip: "",
    allowed_ips: "0.0.0.0/0, ::/0",
    dns: Dn[0].servers,
    preshared_key: ""
  }), [M, N] = y.useState(Dn[0].id), [b, j] = y.useState("all"), [P, O] = y.useState("create"), [B, $] = y.useState(""), [L, D] = y.useState(null), [U, W] = y.useState(null), [Q, K] = y.useState(""), [q, G] = y.useState(""), [oe, F] = y.useState(!1), [ie, ee] = y.useState(""), [Ee, be] = y.useState(""), [ue, ce] = y.useState(null), [ve, Be] = y.useState(null), [ke, $e] = y.useState(""), fe = y.useRef(null);
  y.useEffect(() => () => {
    var z;
    return (z = fe.current) == null ? void 0 : z.abort();
  }, []);
  const ye = y.useCallback(
    async (z, X) => {
      const Se = await e.api(z, X), We = await Se.json().catch(() => ({}));
      if (!Se.ok) throw new Error(We.message ?? `HTTP ${Se.status}`);
      return We;
    },
    [e]
  ), Ne = y.useCallback(async () => {
    v(!0);
    try {
      const [z, X, Se, We, Nt] = await Promise.all([
        ye("/server/status").catch(() => null),
        ye("/server/config").catch(() => null),
        ye("/peers").catch(() => ({ peers: [] })),
        ye("/server/logs").catch(() => ({ logs: [] })),
        ye("/meta").catch(() => null)
      ]);
      z && o(z), X && s(X), Nt && a(Nt), d((Se == null ? void 0 : Se.peers) ?? []), g((We == null ? void 0 : We.logs) ?? []);
    } catch (z) {
      C(z.message || "Failed to load WireGuard data");
    } finally {
      v(!1);
    }
  }, [ye]);
  y.useEffect(() => {
    Ne();
    const z = setInterval(Ne, 15e3);
    return () => clearInterval(z);
  }, [Ne]);
  async function Ke(z, X, Se, We) {
    S(z), k([]), R(!0), p(!0);
    const Nt = new AbortController();
    fe.current = Nt;
    try {
      for await (const Xn of e.run(X, { method: Se, body: We, signal: Nt.signal }))
        k((qn) => U4(qn, Xn));
      Ne();
    } catch (Xn) {
      Nt.signal.aborted || k((qn) => [...qn, { stream: "stderr", text: String(Xn) }]);
    } finally {
      R(!1);
    }
  }
  const Ze = () => Ke("Starting WireGuard Server", "/server/start", "POST"), vt = () => Ke("Stopping WireGuard Server", "/server/stop", "POST"), Ct = () => Ke("Restarting WireGuard Server", "/server/restart", "POST"), Ge = async () => {
    var z, X;
    if (!I.name.trim()) {
      C("Peer name is required");
      return;
    }
    if (P === "import" && !B.trim()) {
      C("Client public key is required for import");
      return;
    }
    v(!0);
    try {
      if (P === "import") {
        const Se = {
          name: I.name.trim(),
          public_key: B.trim(),
          ip: ((z = I.ip) == null ? void 0 : z.trim()) || void 0,
          allowed_ips: I.allowed_ips || "0.0.0.0/0, ::/0",
          dns: I.dns || "1.1.1.1, 8.8.8.8",
          preshared_key: I.preshared_key ? I.preshared_key : void 0
        }, We = await ye("/peers/import", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Se)
        });
        We != null && We.peer && (D(We.peer), ee((i == null ? void 0 : i.endpoint) || ""), n(0), A({
          name: "",
          ip: "",
          allowed_ips: "0.0.0.0/0, ::/0",
          dns: Dn[0].servers,
          preshared_key: ""
        }), N(Dn[0].id), $(""), Ne());
      } else {
        const Se = {
          name: I.name.trim(),
          ip: ((X = I.ip) == null ? void 0 : X.trim()) || void 0,
          allowed_ips: I.allowed_ips || "0.0.0.0/0, ::/0",
          dns: I.dns || Dn[0].servers,
          preshared_key: I.preshared_key ? I.preshared_key : void 0
        }, We = await ye("/peers/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Se)
        });
        We != null && We.peer && (D(We.peer), ee((i == null ? void 0 : i.endpoint) || ""), n(0), A({
          name: "",
          ip: "",
          allowed_ips: "0.0.0.0/0, ::/0",
          dns: Dn[0].servers,
          preshared_key: ""
        }), N(Dn[0].id), Ne());
      }
    } catch (Se) {
      C(Se.message || "Failed to create or import client peer");
    } finally {
      v(!1);
    }
  }, Oe = async (z) => {
    try {
      await ye(`/peers/${encodeURIComponent(z.id)}/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: !z.enabled })
      }), C(`Peer ${z.name} ${z.enabled ? "disabled" : "enabled"}`), Ne();
    } catch (X) {
      C(X.message || "Failed to toggle peer");
    }
  }, Pe = async () => {
    if (!(!ve || !ke.trim()))
      try {
        await ye(`/peers/${encodeURIComponent(ve.id)}/rename`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ new_name: ke.trim() })
        }), C(`Peer renamed to ${ke.trim()}`), Be(null), $e(""), Ne();
      } catch (z) {
        C(z.message || "Failed to rename peer");
      }
  }, at = async (z) => {
    ce(null), await Ke(`Deleting Peer ${z.name}`, `/peers/${encodeURIComponent(z.id)}`, "DELETE");
  }, re = async (z) => {
    F(!0);
    try {
      const X = await ye("/server/endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint: z })
      });
      C(`WireGuard server endpoint set to: ${(X == null ? void 0 : X.endpoint) || z}`), G("");
      const Se = await ye("/server/config");
      Se && s(Se);
    } catch (X) {
      C(X.message || "Failed to update endpoint");
    } finally {
      F(!1);
    }
  }, le = async (z) => {
    W(z), be((i == null ? void 0 : i.endpoint) || "");
    try {
      const X = await ye(`/peers/${encodeURIComponent(z.id)}/config`);
      K((X == null ? void 0 : X.config) || "");
    } catch {
      K("# Error loading peer configuration");
    }
  }, ze = (z, X) => {
    const Se = new Blob([X], { type: "text/plain;charset=utf-8" }), We = URL.createObjectURL(Se), Nt = document.createElement("a");
    Nt.href = We, Nt.download = `${z}.conf`, Nt.click(), URL.revokeObjectURL(We);
  }, De = (r == null ? void 0 : r.status) === "running";
  return /* @__PURE__ */ c.jsxs(Ae, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ c.jsxs(
      Fe,
      {
        direction: { xs: "column", sm: "row" },
        sx: {
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ c.jsx(I4, { sx: { fontSize: 32, color: "primary.main" } }),
            /* @__PURE__ */ c.jsxs(Ae, { children: [
              /* @__PURE__ */ c.jsx(we, { variant: "h5", sx: { fontWeight: 700, lineHeight: 1.2 }, children: "WireGuard VPN" }),
              /* @__PURE__ */ c.jsx(we, { variant: "body2", sx: { color: "text.secondary" }, children: "High-performance kernel VPN tunnels & client access" })
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 1.5, sx: { alignItems: "center", flexWrap: "wrap" }, children: [
            /* @__PURE__ */ c.jsx(
              Ot,
              {
                size: "small",
                label: De ? "RUNNING" : "STOPPED",
                color: De ? "success" : "default",
                sx: { fontWeight: 700, letterSpacing: "0.05em" }
              }
            ),
            /* @__PURE__ */ c.jsx(
              Ot,
              {
                size: "small",
                label: `PORT ${(i == null ? void 0 : i.listen_port) ?? (r == null ? void 0 : r.listen_port) ?? "—"}/UDP`,
                variant: "outlined",
                sx: { fontFamily: _e, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ c.jsx(
              Ot,
              {
                size: "small",
                label: (r == null ? void 0 : r.endpoint) || "127.0.0.1",
                variant: "outlined",
                sx: { fontFamily: _e, fontSize: "0.75rem" }
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ c.jsx(xr, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
              Wn,
              {
                size: "small",
                onClick: Ne,
                disabled: f,
                sx: { border: "1px solid", borderColor: "divider" },
                children: f ? /* @__PURE__ */ c.jsx(Ps, { size: 16, color: "inherit" }) : /* @__PURE__ */ c.jsx(Ry, { sx: { fontSize: 18 } })
              }
            ) }) }),
            De ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsx(xr, { title: "Restart WireGuard Server", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
                Wn,
                {
                  size: "small",
                  color: "warning",
                  onClick: Ct,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ c.jsx(j4, { sx: { fontSize: 18 } })
                }
              ) }) }),
              /* @__PURE__ */ c.jsx(xr, { title: "Stop WireGuard Server", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
                Wn,
                {
                  size: "small",
                  color: "error",
                  onClick: vt,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ c.jsx($4, { sx: { fontSize: 18 } })
                }
              ) }) })
            ] }) : /* @__PURE__ */ c.jsx(xr, { title: "Start WireGuard Server", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
              Wn,
              {
                size: "small",
                color: "success",
                onClick: Ze,
                sx: { border: "1px solid", borderColor: "success.main", bgcolor: (z) => ol(z.palette.success.main, 0.1) },
                children: /* @__PURE__ */ c.jsx(M4, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ c.jsx(
              mt,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(bd, {}),
                onClick: () => n(1),
                sx: { ml: 1, whiteSpace: "nowrap" },
                children: "Add Client Peer"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(Ae, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: 2 }, children: [
      /* @__PURE__ */ c.jsx(ql, { variant: "outlined", children: /* @__PURE__ */ c.jsx(Jl, { sx: ca, children: /* @__PURE__ */ c.jsxs(Fe, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Ae, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Bt, { children: "VPN Server Status" }),
          /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
            /* @__PURE__ */ c.jsx(My, { ok: De, size: 10 }),
            /* @__PURE__ */ c.jsx(we, { variant: "h6", sx: { fontWeight: 700 }, children: De ? `Active (${(i == null ? void 0 : i.interface) || "wg0"})` : "Inactive" })
          ] }),
          /* @__PURE__ */ c.jsxs(we, { variant: "caption", sx: { color: "text.disabled", fontFamily: _e }, children: [
            "Port: ",
            (i == null ? void 0 : i.listen_port) ?? (r == null ? void 0 : r.listen_port) ?? "—",
            " • UDP"
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(Iy, { sx: { color: De ? "success.main" : "text.disabled" } })
      ] }) }) }),
      /* @__PURE__ */ c.jsx(ql, { variant: "outlined", children: /* @__PURE__ */ c.jsx(Jl, { sx: ca, children: /* @__PURE__ */ c.jsxs(Fe, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Ae, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Bt, { children: "Connected Peers" }),
          /* @__PURE__ */ c.jsxs(we, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
            (r == null ? void 0 : r.active_peers_count) ?? 0,
            " ",
            /* @__PURE__ */ c.jsxs(we, { component: "span", variant: "body2", sx: { color: "text.secondary" }, children: [
              "/ ",
              u.length,
              " Total"
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(we, { variant: "caption", sx: { color: "text.disabled" }, children: "Active handshakes < 3m" })
        ] }),
        /* @__PURE__ */ c.jsx(Py, { sx: { color: "primary.main" } })
      ] }) }) }),
      /* @__PURE__ */ c.jsx(ql, { variant: "outlined", children: /* @__PURE__ */ c.jsx(Jl, { sx: ca, children: /* @__PURE__ */ c.jsxs(Fe, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Ae, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Bt, { children: "Total Bandwidth" }),
          /* @__PURE__ */ c.jsxs(we, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, fontFamily: _e }, children: [
            "↓ ",
            ua((r == null ? void 0 : r.total_rx_bytes) ?? 0)
          ] }),
          /* @__PURE__ */ c.jsxs(we, { variant: "caption", sx: { color: "text.secondary", fontFamily: _e }, children: [
            "↑ ",
            ua((r == null ? void 0 : r.total_tx_bytes) ?? 0)
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(_4, { sx: { color: "info.main" } })
      ] }) }) }),
      /* @__PURE__ */ c.jsx(ql, { variant: "outlined", children: /* @__PURE__ */ c.jsx(Jl, { sx: ca, children: /* @__PURE__ */ c.jsxs(Fe, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Ae, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Bt, { children: "VPN Subnet" }),
          /* @__PURE__ */ c.jsx(we, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, fontFamily: _e }, children: (i == null ? void 0 : i.subnet) || (r == null ? void 0 : r.subnet) || "—" }),
          /* @__PURE__ */ c.jsxs(we, { variant: "caption", sx: { color: "text.disabled", fontFamily: _e }, children: [
            "Gateway: ",
            (i == null ? void 0 : i.address) || (r == null ? void 0 : r.address) || "—"
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(z4, { sx: { color: "warning.main" } })
      ] }) }) })
    ] }),
    /* @__PURE__ */ c.jsxs(pr, { sx: { overflow: "hidden" }, children: [
      /* @__PURE__ */ c.jsxs(
        k4,
        {
          value: t,
          onChange: (z, X) => n(X),
          variant: "scrollable",
          scrollButtons: "auto",
          sx: {
            borderBottom: "1px solid",
            borderColor: "divider",
            px: 1
          },
          children: [
            /* @__PURE__ */ c.jsx(ds, { icon: /* @__PURE__ */ c.jsx(Py, { sx: { fontSize: 18 } }), iconPosition: "start", label: "VPN Client Peers" }),
            /* @__PURE__ */ c.jsx(ds, { icon: /* @__PURE__ */ c.jsx(bd, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Add Client Peer" }),
            /* @__PURE__ */ c.jsx(ds, { icon: /* @__PURE__ */ c.jsx(D4, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Server Configuration" }),
            /* @__PURE__ */ c.jsx(ds, { icon: /* @__PURE__ */ c.jsx(F4, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Live Traffic Logs" }),
            /* @__PURE__ */ c.jsx(ds, { icon: /* @__PURE__ */ c.jsx(Iy, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Service & Isolation" })
          ]
        }
      ),
      t === 0 && /* @__PURE__ */ c.jsx(Ae, { children: /* @__PURE__ */ c.jsx(qM, { children: /* @__PURE__ */ c.jsxs(zM, { size: "medium", children: [
        /* @__PURE__ */ c.jsx(n4, { children: /* @__PURE__ */ c.jsxs(vd, { sx: { bgcolor: "action.hover" }, children: [
          /* @__PURE__ */ c.jsx(Qt, { sx: { width: 40 } }),
          /* @__PURE__ */ c.jsx(Qt, { children: /* @__PURE__ */ c.jsx(Bt, { children: "Peer Name" }) }),
          /* @__PURE__ */ c.jsx(Qt, { children: /* @__PURE__ */ c.jsx(Bt, { children: "Assigned IP" }) }),
          /* @__PURE__ */ c.jsx(Qt, { children: /* @__PURE__ */ c.jsx(Bt, { children: "Public Key" }) }),
          /* @__PURE__ */ c.jsx(Qt, { children: /* @__PURE__ */ c.jsx(Bt, { children: "Last Handshake" }) }),
          /* @__PURE__ */ c.jsx(Qt, { children: /* @__PURE__ */ c.jsx(Bt, { children: "Transfer (Rx / Tx)" }) }),
          /* @__PURE__ */ c.jsx(Qt, { align: "right", children: /* @__PURE__ */ c.jsx(Bt, { children: "Actions" }) })
        ] }) }),
        /* @__PURE__ */ c.jsx(UM, { children: u.length === 0 ? /* @__PURE__ */ c.jsx(vd, { children: /* @__PURE__ */ c.jsxs(Qt, { colSpan: 7, align: "center", sx: { py: 5 }, children: [
          /* @__PURE__ */ c.jsx(we, { variant: "body2", sx: { color: "text.secondary", mb: 1.5 }, children: "No VPN client peers configured yet." }),
          /* @__PURE__ */ c.jsx(
            mt,
            {
              variant: "outlined",
              size: "small",
              startIcon: /* @__PURE__ */ c.jsx(bd, {}),
              onClick: () => n(1),
              children: "Create First Peer"
            }
          )
        ] }) }) : u.map((z) => {
          const X = z.last_handshake > 0 && Math.floor(Date.now() / 1e3) - z.last_handshake < 180;
          return /* @__PURE__ */ c.jsxs(vd, { hover: !0, sx: { opacity: z.enabled ? 1 : 0.6 }, children: [
            /* @__PURE__ */ c.jsx(Qt, { children: /* @__PURE__ */ c.jsx(My, { ok: z.enabled && X, size: 8 }) }),
            /* @__PURE__ */ c.jsxs(Qt, { children: [
              /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 0.5, sx: { alignItems: "center", flexWrap: "wrap" }, children: [
                /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: z.name }),
                !z.enabled && /* @__PURE__ */ c.jsx(Ot, { size: "small", label: "DISABLED", color: "default", sx: { fontSize: "0.65rem", height: 18 } }),
                z.imported && /* @__PURE__ */ c.jsx(Ot, { size: "small", label: "IMPORTED", color: "info", variant: "outlined", sx: { fontSize: "0.65rem", height: 18 } })
              ] }),
              /* @__PURE__ */ c.jsxs(we, { variant: "caption", sx: { color: "text.disabled", fontFamily: _e }, children: [
                "id: ",
                z.id
              ] })
            ] }),
            /* @__PURE__ */ c.jsxs(Qt, { children: [
              /* @__PURE__ */ c.jsx(
                Ot,
                {
                  size: "small",
                  label: z.ip,
                  sx: { fontFamily: _e, fontSize: "0.75rem" }
                }
              ),
              z.dns ? /* @__PURE__ */ c.jsxs(
                we,
                {
                  variant: "caption",
                  sx: {
                    display: "block",
                    color: "text.secondary",
                    fontFamily: _e,
                    fontSize: "0.6875rem",
                    mt: 0.5,
                    maxWidth: 160,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  title: `DNS: ${z.dns}`,
                  children: [
                    "DNS: ",
                    z.dns
                  ]
                }
              ) : null
            ] }),
            /* @__PURE__ */ c.jsx(Qt, { children: /* @__PURE__ */ c.jsx(
              we,
              {
                sx: {
                  fontFamily: _e,
                  fontSize: "0.75rem",
                  color: "text.secondary",
                  maxWidth: 160,
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: z.public_key
              }
            ) }),
            /* @__PURE__ */ c.jsx(Qt, { children: /* @__PURE__ */ c.jsx(we, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: j3(z.last_handshake) }) }),
            /* @__PURE__ */ c.jsx(Qt, { children: /* @__PURE__ */ c.jsxs(we, { sx: { fontFamily: _e, fontSize: "0.75rem" }, children: [
              "↓ ",
              ua(z.rx_bytes),
              " / ↑ ",
              ua(z.tx_bytes)
            ] }) }),
            /* @__PURE__ */ c.jsx(Qt, { align: "right", children: /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ c.jsx(xr, { title: z.enabled ? "Disable Peer" : "Enable Peer", children: /* @__PURE__ */ c.jsx(
                Wn,
                {
                  size: "small",
                  onClick: () => Oe(z),
                  children: z.enabled ? /* @__PURE__ */ c.jsx(B4, { fontSize: "small", color: "success" }) : /* @__PURE__ */ c.jsx(L4, { fontSize: "small", color: "action" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(xr, { title: "Rename Peer", children: /* @__PURE__ */ c.jsx(
                Wn,
                {
                  size: "small",
                  onClick: () => {
                    Be(z), $e(z.name);
                  },
                  children: /* @__PURE__ */ c.jsx(O4, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(xr, { title: "View QR Code & Config", children: /* @__PURE__ */ c.jsx(
                Wn,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => le(z),
                  children: /* @__PURE__ */ c.jsx(A4, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(xr, { title: "Download .conf file", children: /* @__PURE__ */ c.jsx(
                Wn,
                {
                  size: "small",
                  onClick: async () => {
                    const Se = await ye(
                      `/peers/${encodeURIComponent(z.id)}/config`
                    );
                    Se != null && Se.config && ze(z.name, Se.config);
                  },
                  children: /* @__PURE__ */ c.jsx(Ma, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(xr, { title: "Delete Peer", children: /* @__PURE__ */ c.jsx(
                Wn,
                {
                  size: "small",
                  color: "error",
                  onClick: () => ce(z),
                  children: /* @__PURE__ */ c.jsx(N4, { fontSize: "small" })
                }
              ) })
            ] }) })
          ] }, z.id);
        }) })
      ] }) }) }),
      t === 1 && /* @__PURE__ */ c.jsxs(Ae, { sx: { p: da, maxWidth: 640 }, children: [
        /* @__PURE__ */ c.jsx(we, { variant: "h6", sx: { fontWeight: 600, mb: 0.5 }, children: P === "import" ? "Import Existing VPN Client Profile" : "Create New VPN Client Profile" }),
        /* @__PURE__ */ c.jsx(we, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: P === "import" ? "Registers an existing client public key without storing private credentials on the server." : "Generates cryptographic Curve25519 keypair, allocates next IP, and renders client QR code." }),
        /* @__PURE__ */ c.jsx(Ae, { sx: { mb: 2.5 }, children: /* @__PURE__ */ c.jsxs(GP, { size: "small", children: [
          /* @__PURE__ */ c.jsx(
            mt,
            {
              variant: P === "create" ? "contained" : "outlined",
              onClick: () => O("create"),
              children: "Generate New Keys"
            }
          ),
          /* @__PURE__ */ c.jsx(
            mt,
            {
              variant: P === "import" ? "contained" : "outlined",
              onClick: () => O("import"),
              children: "Import Existing Public Key"
            }
          )
        ] }) }),
        /* @__PURE__ */ c.jsxs(Fe, { spacing: 2.5, children: [
          /* @__PURE__ */ c.jsx(qo, { label: "Peer / Device Name", hint: "Alphanumeric (e.g. phone, macbook, router)", children: /* @__PURE__ */ c.jsx(
            br,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "e.g. alice-iphone",
              value: I.name,
              onChange: (z) => A({ ...I, name: z.target.value })
            }
          ) }),
          P === "import" && /* @__PURE__ */ c.jsx(qo, { label: "Client Public Key", hint: "Base64 Curve25519 public key (44 chars, e.g. from wg pubkey)", children: /* @__PURE__ */ c.jsx(
            br,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "e.g. 7XpQ...=",
              value: B,
              onChange: (z) => $(z.target.value),
              slotProps: {
                input: {
                  sx: { fontFamily: _e, fontSize: "0.8125rem" }
                }
              }
            }
          ) }),
          /* @__PURE__ */ c.jsx(qo, { label: "Assigned Client IP", hint: "Leave empty to auto-allocate next available 10.8.0.x", children: /* @__PURE__ */ c.jsx(
            br,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "Auto-allocated (e.g. 10.8.0.2)",
              value: I.ip,
              onChange: (z) => A({ ...I, ip: z.target.value })
            }
          ) }),
          /* @__PURE__ */ c.jsx(qo, { label: "Traffic Routing (Allowed IPs)", hint: "What traffic this client routes through VPN", children: /* @__PURE__ */ c.jsxs(
            pu,
            {
              fullWidth: !0,
              size: "small",
              value: b,
              onChange: (z) => {
                const X = z.target.value;
                j(X), X === "all" ? A({ ...I, allowed_ips: "0.0.0.0/0, ::/0" }) : X === "subnet" && A({ ...I, allowed_ips: "10.8.0.0/24" });
              },
              children: [
                /* @__PURE__ */ c.jsx(ra, { value: "all", children: "Full Tunnel (All Traffic: 0.0.0.0/0, ::/0)" }),
                /* @__PURE__ */ c.jsx(ra, { value: "subnet", children: "Split Tunnel (VPN Subnet Only: 10.8.0.0/24)" }),
                /* @__PURE__ */ c.jsx(ra, { value: "custom", children: "Custom Allowed IPs" })
              ]
            }
          ) }),
          b === "custom" && /* @__PURE__ */ c.jsx(
            br,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "0.0.0.0/0, ::/0",
              value: I.allowed_ips,
              onChange: (z) => A({ ...I, allowed_ips: z.target.value })
            }
          ),
          /* @__PURE__ */ c.jsxs(
            qo,
            {
              label: "DNS Resolver Preset",
              hint: "Curated privacy and security resolver presets or custom addresses",
              children: [
                /* @__PURE__ */ c.jsx(
                  pu,
                  {
                    fullWidth: !0,
                    size: "small",
                    value: M,
                    onChange: (z) => {
                      const X = z.target.value;
                      N(X);
                      const Se = Dn.find((We) => We.id === X);
                      Se && Se.id !== "custom" && A({ ...I, dns: Se.servers });
                    },
                    children: Dn.map((z) => /* @__PURE__ */ c.jsx(ra, { value: z.id, children: /* @__PURE__ */ c.jsxs(Ae, { sx: { py: 0.5, width: "100%" }, children: [
                      /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 1, sx: { alignItems: "center", justifyContent: "space-between" }, children: [
                        /* @__PURE__ */ c.jsx(we, { variant: "body2", sx: { fontWeight: 600 }, children: z.name }),
                        z.servers ? /* @__PURE__ */ c.jsx(
                          Ot,
                          {
                            size: "small",
                            label: z.servers,
                            variant: "outlined",
                            sx: { fontFamily: _e, fontSize: "0.6875rem", height: 18 }
                          }
                        ) : null
                      ] }),
                      /* @__PURE__ */ c.jsx(we, { variant: "caption", sx: { color: "text.secondary", display: "block", mt: 0.25 }, children: z.description })
                    ] }) }, z.id))
                  }
                ),
                /* @__PURE__ */ c.jsx(Fe, { direction: "row", spacing: 0.75, sx: { mt: 1, flexWrap: "wrap", gap: 0.5 }, children: Dn.map((z) => /* @__PURE__ */ c.jsx(
                  Ot,
                  {
                    size: "small",
                    label: z.shortLabel,
                    variant: M === z.id ? "filled" : "outlined",
                    color: M === z.id ? "primary" : "default",
                    onClick: () => {
                      N(z.id), z.id !== "custom" && A({ ...I, dns: z.servers });
                    },
                    sx: { cursor: "pointer", fontSize: "0.75rem", height: 22 }
                  },
                  z.id
                )) })
              ]
            }
          ),
          /* @__PURE__ */ c.jsx(
            qo,
            {
              label: "Client DNS Addresses",
              hint: "Comma-separated DNS server IPs assigned to this client profile",
              children: /* @__PURE__ */ c.jsx(
                br,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "e.g. 1.1.1.1, 1.0.0.1",
                  value: I.dns,
                  onChange: (z) => {
                    const X = z.target.value;
                    A({ ...I, dns: X });
                    const Se = Dn.find((We) => We.servers === X.trim());
                    N(Se ? Se.id : "custom");
                  },
                  slotProps: {
                    input: {
                      sx: { fontFamily: _e, fontSize: "0.8125rem" }
                    }
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsx(Fe, { direction: "row", spacing: 2, sx: { pt: 1 }, children: /* @__PURE__ */ c.jsx(
            mt,
            {
              variant: "contained",
              color: "primary",
              onClick: Ge,
              disabled: f || !I.name.trim() || P === "import" && !B.trim(),
              startIcon: f ? /* @__PURE__ */ c.jsx(Ps, { size: 16 }) : /* @__PURE__ */ c.jsx(W4, {}),
              sx: { fontWeight: 700 },
              children: P === "import" ? "Import Client Profile" : "Generate Peer Profile & QR Code"
            }
          ) })
        ] })
      ] }),
      t === 2 && /* @__PURE__ */ c.jsxs(Ae, { sx: { p: da }, children: [
        /* @__PURE__ */ c.jsx(we, { variant: "h6", sx: { fontWeight: 600, mb: 2 }, children: "WireGuard Server Parameters" }),
        /* @__PURE__ */ c.jsxs(Ae, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }, children: [
          /* @__PURE__ */ c.jsx(Ae, { children: /* @__PURE__ */ c.jsx(Xo, { label: "Interface & Port", children: /* @__PURE__ */ c.jsxs(Fe, { spacing: 2, children: [
            /* @__PURE__ */ c.jsx(tn, { label: "Interface Device", value: (i == null ? void 0 : i.interface) ?? "—" }),
            /* @__PURE__ */ c.jsx(tn, { label: "Listen Port (UDP)", value: (i == null ? void 0 : i.listen_port) ?? "—" }),
            /* @__PURE__ */ c.jsx(tn, { label: "Interface IP Address", value: (i == null ? void 0 : i.address) ?? "—" }),
            /* @__PURE__ */ c.jsx(tn, { label: "Tunnel MTU", value: (i == null ? void 0 : i.mtu) ?? "—" })
          ] }) }) }),
          /* @__PURE__ */ c.jsx(Ae, { children: /* @__PURE__ */ c.jsx(Xo, { label: "Network & Public Keys", children: /* @__PURE__ */ c.jsxs(Fe, { spacing: 2, children: [
            /* @__PURE__ */ c.jsx(tn, { label: "VPN Subnet", value: (i == null ? void 0 : i.subnet) ?? "—" }),
            /* @__PURE__ */ c.jsxs(Ae, { children: [
              /* @__PURE__ */ c.jsx(Bt, { children: "Server Public Key" }),
              /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
                /* @__PURE__ */ c.jsx(
                  we,
                  {
                    sx: {
                      fontFamily: _e,
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
                /* @__PURE__ */ c.jsx(
                  Wn,
                  {
                    size: "small",
                    onClick: () => {
                      i != null && i.public_key && (navigator.clipboard.writeText(i.public_key), C("Server public key copied to clipboard"));
                    },
                    children: /* @__PURE__ */ c.jsx(Sd, { fontSize: "small" })
                  }
                )
              ] })
            ] })
          ] }) }) }),
          /* @__PURE__ */ c.jsx(Ae, { sx: { gridColumn: { xs: "span 1", sm: "span 2" } }, children: /* @__PURE__ */ c.jsx(Xo, { label: "Server Public Endpoint & Connection Routing", children: /* @__PURE__ */ c.jsxs(Fe, { spacing: 1.5, children: [
            /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 700, fontSize: "1.1rem", fontFamily: _e }, children: (i == null ? void 0 : i.endpoint) ?? "—" }),
              i != null && i.custom_endpoint ? /* @__PURE__ */ c.jsx(Ot, { label: "Custom Override", size: "small", color: "primary", variant: "outlined" }) : /* @__PURE__ */ c.jsx(Ot, { label: "Auto-Detected", size: "small", color: "default", variant: "outlined" })
            ] }),
            /* @__PURE__ */ c.jsxs(we, { variant: "body2", sx: { color: "text.secondary" }, children: [
              "Endpoint embedded in client profiles & QR codes. When testing on local Wi-Fi without router NAT hairpinning, select ",
              /* @__PURE__ */ c.jsx("strong", { children: "LAN IP" }),
              ". For remote or cellular (4G/5G) connections, select ",
              /* @__PURE__ */ c.jsx("strong", { children: "WAN IP" }),
              " or enter a domain name."
            ] }),
            /* @__PURE__ */ c.jsxs(Fe, { direction: { xs: "column", sm: "row" }, spacing: 1, sx: { mt: 1, flexWrap: "wrap", gap: 1 }, children: [
              (i == null ? void 0 : i.lan_ip) && /* @__PURE__ */ c.jsxs(
                mt,
                {
                  size: "small",
                  variant: i.endpoint === i.lan_ip ? "contained" : "outlined",
                  onClick: () => re(i.lan_ip),
                  disabled: oe,
                  sx: { textTransform: "none", fontWeight: 600 },
                  children: [
                    "Use LAN IP (",
                    i.lan_ip,
                    ")"
                  ]
                }
              ),
              (i == null ? void 0 : i.wan_ip) && i.wan_ip !== i.lan_ip && /* @__PURE__ */ c.jsxs(
                mt,
                {
                  size: "small",
                  variant: i.endpoint === i.wan_ip ? "contained" : "outlined",
                  onClick: () => re(i.wan_ip),
                  disabled: oe,
                  sx: { textTransform: "none", fontWeight: 600 },
                  children: [
                    "Use WAN IP (",
                    i.wan_ip,
                    ")"
                  ]
                }
              ),
              (i == null ? void 0 : i.custom_endpoint) && /* @__PURE__ */ c.jsx(
                mt,
                {
                  size: "small",
                  variant: "text",
                  color: "secondary",
                  onClick: () => re("auto"),
                  disabled: oe,
                  sx: { textTransform: "none" },
                  children: "Reset Auto-Detect"
                }
              )
            ] }),
            /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 1, sx: { mt: 1, maxWidth: 500 }, children: [
              /* @__PURE__ */ c.jsx(
                br,
                {
                  size: "small",
                  placeholder: "Custom IP or Domain (e.g. vpn.example.com)",
                  value: q,
                  onChange: (z) => G(z.target.value),
                  sx: { flex: 1 },
                  slotProps: { input: { sx: { fontFamily: _e, fontSize: "0.8125rem" } } }
                }
              ),
              /* @__PURE__ */ c.jsx(
                mt,
                {
                  variant: "contained",
                  size: "small",
                  disabled: !q.trim() || oe,
                  onClick: () => re(q.trim()),
                  sx: { fontWeight: 600, textTransform: "none" },
                  children: "Set Endpoint"
                }
              )
            ] })
          ] }) }) }),
          /* @__PURE__ */ c.jsx(Ae, { sx: { gridColumn: { xs: "span 1", sm: "span 2" } }, children: /* @__PURE__ */ c.jsxs(Xo, { label: "Configuration File on Disk", children: [
            /* @__PURE__ */ c.jsx(we, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "All WireGuard settings and keys live exclusively under HostPanel root:" }),
            /* @__PURE__ */ c.jsx(
              we,
              {
                sx: {
                  fontFamily: _e,
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
      t === 3 && /* @__PURE__ */ c.jsxs(Ae, { sx: { p: da }, children: [
        /* @__PURE__ */ c.jsxs(Fe, { direction: "row", sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
          /* @__PURE__ */ c.jsx(we, { variant: "h6", sx: { fontWeight: 600 }, children: "WireGuard Tunnel & Handshake Logs" }),
          /* @__PURE__ */ c.jsx(mt, { size: "small", variant: "outlined", startIcon: /* @__PURE__ */ c.jsx(Ry, {}), onClick: Ne, children: "Refresh Logs" })
        ] }),
        /* @__PURE__ */ c.jsx(
          pr,
          {
            sx: {
              bgcolor: kr.bg,
              p: 2,
              maxHeight: "26rem",
              overflowY: "auto",
              fontFamily: _e,
              fontSize: 12,
              lineHeight: 1.6,
              color: kr.fg
            },
            children: h.length === 0 ? /* @__PURE__ */ c.jsx(we, { sx: { color: kr.dim, fontFamily: _e }, children: "No recent kernel or handshake events recorded." }) : h.map((z, X) => /* @__PURE__ */ c.jsx(Ae, { sx: { whiteSpace: "pre-wrap", wordBreak: "break-word" }, children: z }, X))
          }
        )
      ] }),
      t === 4 && /* @__PURE__ */ c.jsxs(Ae, { sx: { p: da }, children: [
        /* @__PURE__ */ c.jsx(we, { variant: "h6", sx: { fontWeight: 600, mb: 1 }, children: "Strict 100% Isolation Architecture" }),
        /* @__PURE__ */ c.jsxs(we, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
          "HostPanel v3 enforces full isolation under ",
          /* @__PURE__ */ c.jsx("code", { children: "/opt/hostpanel" }),
          ". No configuration or socket is scattered across system ",
          /* @__PURE__ */ c.jsx("code", { children: "/etc/wireguard" }),
          "."
        ] }),
        /* @__PURE__ */ c.jsxs(Ae, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }, children: [
          /* @__PURE__ */ c.jsx(Ae, { children: /* @__PURE__ */ c.jsx(Xo, { label: "Daemon & Sandbox Specs", children: /* @__PURE__ */ c.jsxs(Fe, { spacing: 2, children: [
            /* @__PURE__ */ c.jsx(tn, { label: "Systemd Unit", value: (l == null ? void 0 : l.unit) ?? "—" }),
            /* @__PURE__ */ c.jsx(tn, { label: "Run As User", value: (l == null ? void 0 : l.run_as) ?? "—" }),
            /* @__PURE__ */ c.jsx(
              tn,
              {
                label: "Loopback Port",
                value: l != null && l.port ? `${l.port} (${l.host})` : "—"
              }
            ),
            /* @__PURE__ */ c.jsx(tn, { label: "Root Ops Helper", value: (l == null ? void 0 : l.ops_script) ?? "—" })
          ] }) }) }),
          /* @__PURE__ */ c.jsx(Ae, { children: /* @__PURE__ */ c.jsx(Xo, { label: "Isolated Path Sandboxes", children: /* @__PURE__ */ c.jsxs(Fe, { spacing: 2, children: [
            /* @__PURE__ */ c.jsx(tn, { label: "Config Directory", value: (i == null ? void 0 : i.isolation_path) ?? "—" }),
            /* @__PURE__ */ c.jsx(tn, { label: "Runtime / Sockets", value: (i == null ? void 0 : i.run_path) ?? "—" }),
            /* @__PURE__ */ c.jsx(tn, { label: "Audit & Traffic Logs", value: (i == null ? void 0 : i.logs_path) ?? "—" }),
            /* @__PURE__ */ c.jsx(tn, { label: "Client Profiles Dir", value: (i == null ? void 0 : i.peers_path) ?? "—" }),
            /* @__PURE__ */ c.jsx(tn, { label: "Engine Runtime", value: (i == null ? void 0 : i.runtime_path) ?? "—" })
          ] }) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(
      ss,
      {
        open: !!L,
        onClose: () => D(null),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsxs(us, { sx: { fontWeight: 700 }, children: [
            "Client Peer Created: ",
            L == null ? void 0 : L.name
          ] }),
          /* @__PURE__ */ c.jsx(as, { dividers: !0, children: (() => {
            const z = L != null && L.config ? Jo(L.config, ie || (i == null ? void 0 : i.endpoint) || "") : "", X = ie || (i == null ? void 0 : i.endpoint) || "";
            return /* @__PURE__ */ c.jsxs(Fe, { spacing: 2.5, sx: { alignItems: "center", py: 1 }, children: [
              /* @__PURE__ */ c.jsxs(we, { variant: "body2", sx: { color: "text.secondary", textAlign: "center" }, children: [
                "Scan this QR code with the WireGuard mobile app (iOS / Android) or download the ",
                /* @__PURE__ */ c.jsx("code", { children: ".conf" }),
                " file for desktop."
              ] }),
              (L == null ? void 0 : L.imported) && /* @__PURE__ */ c.jsxs(Wg, { severity: "info", sx: { width: "100%", fontSize: "0.8125rem" }, children: [
                /* @__PURE__ */ c.jsx("strong", { children: "Client-Side Keys:" }),
                " This peer was registered using an imported public key. The private key remains exclusively on the client device."
              ] }),
              ((i == null ? void 0 : i.lan_ip) || (i == null ? void 0 : i.wan_ip)) && /* @__PURE__ */ c.jsxs(Ae, { sx: { width: "100%", bgcolor: "action.hover", p: 1.5, borderRadius: 1.5 }, children: [
                /* @__PURE__ */ c.jsx(Bt, { sx: { mb: 0.75 }, children: "Connection Endpoint Destination" }),
                /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 1, sx: { flexWrap: "wrap", gap: 1 }, children: [
                  (i == null ? void 0 : i.lan_ip) && /* @__PURE__ */ c.jsx(
                    Ot,
                    {
                      label: `LAN Wi-Fi: ${i.lan_ip}`,
                      clickable: !0,
                      color: X === i.lan_ip ? "primary" : "default",
                      onClick: () => ee(i.lan_ip),
                      sx: { fontWeight: 600, fontFamily: _e, fontSize: "0.75rem" }
                    }
                  ),
                  (i == null ? void 0 : i.wan_ip) && i.wan_ip !== i.lan_ip && /* @__PURE__ */ c.jsx(
                    Ot,
                    {
                      label: `WAN / 4G / 5G: ${i.wan_ip}`,
                      clickable: !0,
                      color: X === i.wan_ip ? "primary" : "default",
                      onClick: () => ee(i.wan_ip),
                      sx: { fontWeight: 600, fontFamily: _e, fontSize: "0.75rem" }
                    }
                  ),
                  (i == null ? void 0 : i.endpoint) && i.endpoint !== i.lan_ip && i.endpoint !== i.wan_ip && /* @__PURE__ */ c.jsx(
                    Ot,
                    {
                      label: `Custom: ${i.endpoint}`,
                      clickable: !0,
                      color: X === i.endpoint ? "primary" : "default",
                      onClick: () => ee(i.endpoint),
                      sx: { fontWeight: 600, fontFamily: _e, fontSize: "0.75rem" }
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(we, { variant: "caption", sx: { color: "text.secondary", mt: 0.75, display: "block" }, children: X === (i == null ? void 0 : i.lan_ip) ? "✓ Local LAN endpoint: Phone connects directly inside Wi-Fi (bypasses router NAT loopback drops)." : "ℹ WAN IP endpoint: For cellular (4G/5G). Ensure your home router forwards UDP port 51820 to " + ((i == null ? void 0 : i.lan_ip) || "the server") + "." })
              ] }),
              z && /* @__PURE__ */ c.jsx(
                Ny,
                {
                  text: z,
                  size: 240,
                  filename: `${(L == null ? void 0 : L.name) || "wireguard"}-profile`
                }
              ),
              /* @__PURE__ */ c.jsx(
                Ot,
                {
                  label: `Assigned IP: ${(L == null ? void 0 : L.ip) || "10.8.0.x"}`,
                  color: "primary",
                  sx: { fontWeight: 700, fontFamily: _e }
                }
              ),
              /* @__PURE__ */ c.jsxs(Ae, { sx: { width: "100%" }, children: [
                /* @__PURE__ */ c.jsx(Bt, { sx: { mb: 0.5 }, children: "Client Configuration File" }),
                /* @__PURE__ */ c.jsx(
                  br,
                  {
                    fullWidth: !0,
                    multiline: !0,
                    rows: 6,
                    value: z,
                    slotProps: {
                      input: {
                        readOnly: !0,
                        sx: { fontFamily: _e, fontSize: "0.75rem" }
                      }
                    }
                  }
                )
              ] })
            ] });
          })() }),
          /* @__PURE__ */ c.jsxs(ls, { sx: { p: 2 }, children: [
            /* @__PURE__ */ c.jsx(
              mt,
              {
                startIcon: /* @__PURE__ */ c.jsx(Sd, {}),
                onClick: () => {
                  const z = L != null && L.config ? Jo(L.config, ie || (i == null ? void 0 : i.endpoint) || "") : "";
                  z && (navigator.clipboard.writeText(z), C("Configuration copied to clipboard"));
                },
                children: "Copy Text"
              }
            ),
            /* @__PURE__ */ c.jsx(
              mt,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ c.jsx(Ma, {}),
                onClick: () => {
                  const z = L != null && L.config ? Jo(L.config, ie || (i == null ? void 0 : i.endpoint) || "") : "";
                  L != null && L.name && z && ze(L.name, z);
                },
                sx: { fontWeight: 700 },
                children: "Download .conf"
              }
            ),
            /* @__PURE__ */ c.jsx(mt, { onClick: () => D(null), children: "Done" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      ss,
      {
        open: !!U,
        onClose: () => {
          W(null), K("");
        },
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsxs(us, { sx: { fontWeight: 700 }, children: [
            "WireGuard Profile: ",
            U == null ? void 0 : U.name,
            " (",
            U == null ? void 0 : U.ip,
            ")"
          ] }),
          /* @__PURE__ */ c.jsx(as, { dividers: !0, children: (() => {
            const z = Q ? Jo(Q, Ee || (i == null ? void 0 : i.endpoint) || "") : "", X = Ee || (i == null ? void 0 : i.endpoint) || "";
            return /* @__PURE__ */ c.jsxs(Fe, { spacing: 2, sx: { alignItems: "center", py: 1 }, children: [
              (U == null ? void 0 : U.imported) && /* @__PURE__ */ c.jsxs(Wg, { severity: "info", sx: { width: "100%", fontSize: "0.8125rem" }, children: [
                /* @__PURE__ */ c.jsx("strong", { children: "Client-Side Keys:" }),
                " This peer uses an externally generated keypair. When using the config template below, replace ",
                /* @__PURE__ */ c.jsx("code", { children: "<CLIENT_PRIVATE_KEY>" }),
                " with the client's private key."
              ] }),
              ((i == null ? void 0 : i.lan_ip) || (i == null ? void 0 : i.wan_ip)) && /* @__PURE__ */ c.jsxs(Ae, { sx: { width: "100%", bgcolor: "action.hover", p: 1.5, borderRadius: 1.5 }, children: [
                /* @__PURE__ */ c.jsx(Bt, { sx: { mb: 0.75 }, children: "Connection Endpoint Destination" }),
                /* @__PURE__ */ c.jsxs(Fe, { direction: "row", spacing: 1, sx: { flexWrap: "wrap", gap: 1 }, children: [
                  (i == null ? void 0 : i.lan_ip) && /* @__PURE__ */ c.jsx(
                    Ot,
                    {
                      label: `LAN Wi-Fi: ${i.lan_ip}`,
                      clickable: !0,
                      color: X === i.lan_ip ? "primary" : "default",
                      onClick: () => be(i.lan_ip),
                      sx: { fontWeight: 600, fontFamily: _e, fontSize: "0.75rem" }
                    }
                  ),
                  (i == null ? void 0 : i.wan_ip) && i.wan_ip !== i.lan_ip && /* @__PURE__ */ c.jsx(
                    Ot,
                    {
                      label: `WAN / 4G / 5G: ${i.wan_ip}`,
                      clickable: !0,
                      color: X === i.wan_ip ? "primary" : "default",
                      onClick: () => be(i.wan_ip),
                      sx: { fontWeight: 600, fontFamily: _e, fontSize: "0.75rem" }
                    }
                  ),
                  (i == null ? void 0 : i.endpoint) && i.endpoint !== i.lan_ip && i.endpoint !== i.wan_ip && /* @__PURE__ */ c.jsx(
                    Ot,
                    {
                      label: `Custom: ${i.endpoint}`,
                      clickable: !0,
                      color: X === i.endpoint ? "primary" : "default",
                      onClick: () => be(i.endpoint),
                      sx: { fontWeight: 600, fontFamily: _e, fontSize: "0.75rem" }
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(we, { variant: "caption", sx: { color: "text.secondary", mt: 0.75, display: "block" }, children: X === (i == null ? void 0 : i.lan_ip) ? "✓ Local LAN endpoint: Phone connects directly inside Wi-Fi (bypasses router NAT loopback drops)." : "ℹ WAN IP endpoint: For cellular (4G/5G). Ensure your home router forwards UDP port 51820 to " + ((i == null ? void 0 : i.lan_ip) || "the server") + "." })
              ] }),
              z ? /* @__PURE__ */ c.jsx(
                Ny,
                {
                  text: z,
                  size: 240,
                  filename: `${(U == null ? void 0 : U.name) || "wireguard"}-profile`
                }
              ) : /* @__PURE__ */ c.jsx(Ps, { size: 32 }),
              /* @__PURE__ */ c.jsxs(Ae, { sx: { width: "100%" }, children: [
                /* @__PURE__ */ c.jsx(Bt, { sx: { mb: 0.5 }, children: "Client Configuration (.conf)" }),
                /* @__PURE__ */ c.jsx(
                  br,
                  {
                    fullWidth: !0,
                    multiline: !0,
                    rows: 6,
                    value: z,
                    slotProps: {
                      input: {
                        readOnly: !0,
                        sx: { fontFamily: _e, fontSize: "0.75rem" }
                      }
                    }
                  }
                )
              ] })
            ] });
          })() }),
          /* @__PURE__ */ c.jsxs(ls, { sx: { p: 2 }, children: [
            /* @__PURE__ */ c.jsx(
              mt,
              {
                startIcon: /* @__PURE__ */ c.jsx(Sd, {}),
                onClick: () => {
                  const z = Q ? Jo(Q, Ee || (i == null ? void 0 : i.endpoint) || "") : "";
                  z && (navigator.clipboard.writeText(z), C("Configuration copied to clipboard"));
                },
                children: "Copy"
              }
            ),
            /* @__PURE__ */ c.jsx(
              mt,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ c.jsx(Ma, {}),
                onClick: () => {
                  const z = Q ? Jo(Q, Ee || (i == null ? void 0 : i.endpoint) || "") : "";
                  U != null && U.name && z && ze(U.name, z);
                },
                sx: { fontWeight: 700 },
                children: "Download .conf"
              }
            ),
            /* @__PURE__ */ c.jsx(
              mt,
              {
                onClick: () => {
                  W(null), K("");
                },
                children: "Close"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      ss,
      {
        open: !!ue,
        onClose: () => ce(null),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsx(us, { sx: { fontWeight: 700 }, children: "Delete Client Peer" }),
          /* @__PURE__ */ c.jsx(as, { children: /* @__PURE__ */ c.jsxs(we, { variant: "body2", sx: { color: "text.secondary" }, children: [
            "Are you sure you want to revoke and delete peer",
            " ",
            /* @__PURE__ */ c.jsx("strong", { children: ue == null ? void 0 : ue.name }),
            " (",
            ue == null ? void 0 : ue.ip,
            ")? This immediately severs VPN connectivity for this client."
          ] }) }),
          /* @__PURE__ */ c.jsxs(ls, { sx: { p: 2 }, children: [
            /* @__PURE__ */ c.jsx(mt, { onClick: () => ce(null), children: "Cancel" }),
            /* @__PURE__ */ c.jsx(
              mt,
              {
                variant: "contained",
                color: "error",
                onClick: () => ue && at(ue),
                children: "Revoke & Delete"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      ss,
      {
        open: !!ve,
        onClose: () => {
          Be(null), $e("");
        },
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsx(us, { sx: { fontWeight: 700 }, children: "Rename Client Peer" }),
          /* @__PURE__ */ c.jsxs(as, { children: [
            /* @__PURE__ */ c.jsxs(we, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
              "Update display name for peer ",
              /* @__PURE__ */ c.jsx("code", { children: ve == null ? void 0 : ve.id }),
              " (",
              ve == null ? void 0 : ve.ip,
              "):"
            ] }),
            /* @__PURE__ */ c.jsx(
              br,
              {
                fullWidth: !0,
                autoFocus: !0,
                size: "small",
                label: "New Peer Name",
                value: ke,
                onChange: (z) => $e(z.target.value),
                placeholder: "e.g. alice-laptop"
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs(ls, { sx: { p: 2 }, children: [
            /* @__PURE__ */ c.jsx(mt, { onClick: () => Be(null), children: "Cancel" }),
            /* @__PURE__ */ c.jsx(
              mt,
              {
                variant: "contained",
                onClick: Pe,
                disabled: !ke.trim() || ke.trim() === (ve == null ? void 0 : ve.name),
                children: "Save Name"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      ss,
      {
        open: m,
        onClose: () => !T && p(!1),
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsx(us, { sx: { fontWeight: 700 }, children: x }),
          /* @__PURE__ */ c.jsx(as, { dividers: !0, children: /* @__PURE__ */ c.jsx(V4, { lines: E, running: T }) }),
          /* @__PURE__ */ c.jsx(ls, { sx: { p: 2 }, children: /* @__PURE__ */ c.jsx(mt, { disabled: T, onClick: () => p(!1), children: "Close" }) })
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(
      EM,
      {
        open: !!w,
        autoHideDuration: 4e3,
        onClose: () => C(null),
        message: w
      }
    )
  ] });
}
let gu = null;
function O3(e, t) {
  gu = Qv(e), gu.render(
    /* @__PURE__ */ c.jsx(y.StrictMode, { children: /* @__PURE__ */ c.jsx(A3, { ctx: t }) })
  );
}
function B3() {
  const e = gu;
  gu = null, e && queueMicrotask(() => e.unmount());
}
const z3 = { mount: O3, unmount: B3 };
export {
  z3 as default,
  O3 as mount,
  B3 as unmount
};
//# sourceMappingURL=main.js.map
