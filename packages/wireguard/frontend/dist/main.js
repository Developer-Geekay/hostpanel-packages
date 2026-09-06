var sb = Object.defineProperty;
var lb = (e, t, n) => t in e ? sb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Vi = (e, t, n) => lb(e, typeof t != "symbol" ? t + "" : t, n);
function ab(e, t) {
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
function ub(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ny = { exports: {} }, gu = {}, Oy = { exports: {} }, Ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var al = Symbol.for("react.element"), cb = Symbol.for("react.portal"), db = Symbol.for("react.fragment"), fb = Symbol.for("react.strict_mode"), pb = Symbol.for("react.profiler"), hb = Symbol.for("react.provider"), mb = Symbol.for("react.context"), gb = Symbol.for("react.forward_ref"), yb = Symbol.for("react.suspense"), vb = Symbol.for("react.memo"), xb = Symbol.for("react.lazy"), _h = Symbol.iterator;
function bb(e) {
  return e === null || typeof e != "object" ? null : (e = _h && e[_h] || e["@@iterator"], typeof e == "function" ? e : null);
}
var By = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ly = Object.assign, zy = {};
function Bi(e, t, n) {
  this.props = e, this.context = t, this.refs = zy, this.updater = n || By;
}
Bi.prototype.isReactComponent = {};
Bi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Bi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _y() {
}
_y.prototype = Bi.prototype;
function Yf(e, t, n) {
  this.props = e, this.context = t, this.refs = zy, this.updater = n || By;
}
var Qf = Yf.prototype = new _y();
Qf.constructor = Yf;
Ly(Qf, Bi.prototype);
Qf.isPureReactComponent = !0;
var Fh = Array.isArray, Fy = Object.prototype.hasOwnProperty, Xf = { current: null }, Dy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wy(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Fy.call(t, r) && !Dy.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: al, type: e, key: i, ref: s, props: o, _owner: Xf.current };
}
function Sb(e, t) {
  return { $$typeof: al, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function qf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === al;
}
function wb(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Dh = /\/+/g;
function Oc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? wb("" + e.key) : t.toString(36);
}
function da(e, t, n, r, o) {
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
        case al:
        case cb:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Oc(s, 0) : r, Fh(o) ? (n = "", e != null && (n = e.replace(Dh, "$&/") + "/"), da(o, t, n, "", function(u) {
    return u;
  })) : o != null && (qf(o) && (o = Sb(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Dh, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Fh(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + Oc(i, l);
    s += da(i, t, n, a, o);
  }
  else if (a = bb(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + Oc(i, l++), s += da(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Rl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return da(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Cb(e) {
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
var Xt = { current: null }, fa = { transition: null }, kb = { ReactCurrentDispatcher: Xt, ReactCurrentBatchConfig: fa, ReactCurrentOwner: Xf };
function Uy() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ie.Children = { map: Rl, forEach: function(e, t, n) {
  Rl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Rl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Rl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!qf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Ie.Component = Bi;
Ie.Fragment = db;
Ie.Profiler = pb;
Ie.PureComponent = Yf;
Ie.StrictMode = fb;
Ie.Suspense = yb;
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kb;
Ie.act = Uy;
Ie.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ly({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Xf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Fy.call(t, a) && !Dy.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: al, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Ie.createContext = function(e) {
  return e = { $$typeof: mb, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hb, _context: e }, e.Consumer = e;
};
Ie.createElement = Wy;
Ie.createFactory = function(e) {
  var t = Wy.bind(null, e);
  return t.type = e, t;
};
Ie.createRef = function() {
  return { current: null };
};
Ie.forwardRef = function(e) {
  return { $$typeof: gb, render: e };
};
Ie.isValidElement = qf;
Ie.lazy = function(e) {
  return { $$typeof: xb, _payload: { _status: -1, _result: e }, _init: Cb };
};
Ie.memo = function(e, t) {
  return { $$typeof: vb, type: e, compare: t === void 0 ? null : t };
};
Ie.startTransition = function(e) {
  var t = fa.transition;
  fa.transition = {};
  try {
    e();
  } finally {
    fa.transition = t;
  }
};
Ie.unstable_act = Uy;
Ie.useCallback = function(e, t) {
  return Xt.current.useCallback(e, t);
};
Ie.useContext = function(e) {
  return Xt.current.useContext(e);
};
Ie.useDebugValue = function() {
};
Ie.useDeferredValue = function(e) {
  return Xt.current.useDeferredValue(e);
};
Ie.useEffect = function(e, t) {
  return Xt.current.useEffect(e, t);
};
Ie.useId = function() {
  return Xt.current.useId();
};
Ie.useImperativeHandle = function(e, t, n) {
  return Xt.current.useImperativeHandle(e, t, n);
};
Ie.useInsertionEffect = function(e, t) {
  return Xt.current.useInsertionEffect(e, t);
};
Ie.useLayoutEffect = function(e, t) {
  return Xt.current.useLayoutEffect(e, t);
};
Ie.useMemo = function(e, t) {
  return Xt.current.useMemo(e, t);
};
Ie.useReducer = function(e, t, n) {
  return Xt.current.useReducer(e, t, n);
};
Ie.useRef = function(e) {
  return Xt.current.useRef(e);
};
Ie.useState = function(e) {
  return Xt.current.useState(e);
};
Ie.useSyncExternalStore = function(e, t, n) {
  return Xt.current.useSyncExternalStore(e, t, n);
};
Ie.useTransition = function() {
  return Xt.current.useTransition();
};
Ie.version = "18.3.1";
Oy.exports = Ie;
var y = Oy.exports;
const Vy = /* @__PURE__ */ ub(y), Ma = /* @__PURE__ */ ab({
  __proto__: null,
  default: Vy
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
var Eb = y, Tb = Symbol.for("react.element"), Rb = Symbol.for("react.fragment"), Pb = Object.prototype.hasOwnProperty, Ib = Eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Mb = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hy(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Pb.call(t, r) && !Mb.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Tb, type: e, key: i, ref: s, props: o, _owner: Ib.current };
}
gu.Fragment = Rb;
gu.jsx = Hy;
gu.jsxs = Hy;
Ny.exports = gu;
var f = Ny.exports, Ky = { exports: {} }, mn = {}, Gy = { exports: {} }, Yy = {};
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
    var F = $.length;
    $.push(L);
    e: for (; 0 < F; ) {
      var U = F - 1 >>> 1, W = $[U];
      if (0 < o(W, L)) $[U] = L, $[F] = W, F = U;
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var L = $[0], F = $.pop();
    if (F !== L) {
      $[0] = F;
      e: for (var U = 0, W = $.length, Q = W >>> 1; U < Q; ) {
        var G = 2 * (U + 1) - 1, X = $[G], K = G + 1, q = $[K];
        if (0 > o(X, F)) K < W && 0 > o(q, X) ? ($[U] = q, $[K] = F, U = K) : ($[U] = X, $[G] = F, U = G);
        else if (K < W && 0 > o(q, F)) $[U] = q, $[K] = F, U = K;
        else break e;
      }
    }
    return L;
  }
  function o($, L) {
    var F = $.sortIndex - L.sortIndex;
    return F !== 0 ? F : $.id - L.id;
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
  var a = [], u = [], c = 1, h = null, g = 3, d = !1, v = !1, w = !1, C = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
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
    v = !1, w && (w = !1, m(R), R = -1), d = !0;
    var F = g;
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
        var G = n(u);
        G !== null && B(S, G.startTime - L), Q = !1;
      }
      return Q;
    } finally {
      h = null, g = F, d = !1;
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
    v || d || (v = !0, O(E));
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
    var F = g;
    g = L;
    try {
      return $();
    } finally {
      g = F;
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
    var F = g;
    g = $;
    try {
      return L();
    } finally {
      g = F;
    }
  }, e.unstable_scheduleCallback = function($, L, F) {
    var U = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? U + F : U) : F = U, $) {
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
    return W = F + W, $ = { id: c++, callback: L, priorityLevel: $, startTime: F, expirationTime: W, sortIndex: -1 }, F > U ? ($.sortIndex = F, t(u, $), n(a) === null && $ === n(u) && (w ? (m(R), R = -1) : w = !0, B(S, F - U))) : ($.sortIndex = W, t(a, $), v || d || (v = !0, O(E))), $;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function($) {
    var L = g;
    return function() {
      var F = g;
      g = L;
      try {
        return $.apply(this, arguments);
      } finally {
        g = F;
      }
    };
  };
})(Yy);
Gy.exports = Yy;
var $b = Gy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jb = y, pn = $b;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Qy = /* @__PURE__ */ new Set(), Ns = {};
function jo(e, t) {
  yi(e, t), yi(e + "Capture", t);
}
function yi(e, t) {
  for (Ns[e] = t, e = 0; e < t.length; e++) Qy.add(t[e]);
}
var kr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Td = Object.prototype.hasOwnProperty, Ab = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Wh = {}, Uh = {};
function Nb(e) {
  return Td.call(Uh, e) ? !0 : Td.call(Wh, e) ? !1 : Ab.test(e) ? Uh[e] = !0 : (Wh[e] = !0, !1);
}
function Ob(e, t, n, r) {
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
function Bb(e, t, n, r) {
  if (t === null || typeof t > "u" || Ob(e, t, n, r)) return !0;
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
function qt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Bt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Bt[e] = new qt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Bt[t] = new qt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Bt[e] = new qt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Bt[e] = new qt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Bt[e] = new qt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Bt[e] = new qt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Bt[e] = new qt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Bt[e] = new qt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Bt[e] = new qt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jf = /[\-:]([a-z])/g;
function Zf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Jf,
    Zf
  );
  Bt[t] = new qt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Jf, Zf);
  Bt[t] = new qt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Jf, Zf);
  Bt[t] = new qt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Bt[e] = new qt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Bt.xlinkHref = new qt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Bt[e] = new qt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ep(e, t, n, r) {
  var o = Bt.hasOwnProperty(t) ? Bt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bb(t, n, o, r) && (n = null), r || o === null ? Nb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $r = jb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Pl = Symbol.for("react.element"), Xo = Symbol.for("react.portal"), qo = Symbol.for("react.fragment"), tp = Symbol.for("react.strict_mode"), Rd = Symbol.for("react.profiler"), Xy = Symbol.for("react.provider"), qy = Symbol.for("react.context"), np = Symbol.for("react.forward_ref"), Pd = Symbol.for("react.suspense"), Id = Symbol.for("react.suspense_list"), rp = Symbol.for("react.memo"), Nr = Symbol.for("react.lazy"), Jy = Symbol.for("react.offscreen"), Vh = Symbol.iterator;
function Hi(e) {
  return e === null || typeof e != "object" ? null : (e = Vh && e[Vh] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ft = Object.assign, Bc;
function ds(e) {
  if (Bc === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Bc = t && t[1] || "";
  }
  return `
` + Bc + e;
}
var Lc = !1;
function zc(e, t) {
  if (!e || Lc) return "";
  Lc = !0;
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
    Lc = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ds(e) : "";
}
function Lb(e) {
  switch (e.tag) {
    case 5:
      return ds(e.type);
    case 16:
      return ds("Lazy");
    case 13:
      return ds("Suspense");
    case 19:
      return ds("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = zc(e.type, !1), e;
    case 11:
      return e = zc(e.type.render, !1), e;
    case 1:
      return e = zc(e.type, !0), e;
    default:
      return "";
  }
}
function Md(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qo:
      return "Fragment";
    case Xo:
      return "Portal";
    case Rd:
      return "Profiler";
    case tp:
      return "StrictMode";
    case Pd:
      return "Suspense";
    case Id:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case qy:
      return (e.displayName || "Context") + ".Consumer";
    case Xy:
      return (e._context.displayName || "Context") + ".Provider";
    case np:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case rp:
      return t = e.displayName || null, t !== null ? t : Md(e.type) || "Memo";
    case Nr:
      t = e._payload, e = e._init;
      try {
        return Md(e(t));
      } catch {
      }
  }
  return null;
}
function zb(e) {
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
      return Md(t);
    case 8:
      return t === tp ? "StrictMode" : "Mode";
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
function Xr(e) {
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
function Zy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function _b(e) {
  var t = Zy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Il(e) {
  e._valueTracker || (e._valueTracker = _b(e));
}
function e0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Zy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function $a(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function $d(e, t) {
  var n = t.checked;
  return ft({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Hh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Xr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function t0(e, t) {
  t = t.checked, t != null && ep(e, "checked", t, !1);
}
function jd(e, t) {
  t0(e, t);
  var n = Xr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ad(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ad(e, t.type, Xr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Kh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ad(e, t, n) {
  (t !== "number" || $a(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fs = Array.isArray;
function ai(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Xr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Nd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return ft({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Gh(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(V(92));
      if (fs(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Xr(n) };
}
function n0(e, t) {
  var n = Xr(t.value), r = Xr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Yh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function r0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Od(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? r0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ml, o0 = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ml = Ml || document.createElement("div"), Ml.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ml.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Os(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ys = {
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
}, Fb = ["Webkit", "ms", "Moz", "O"];
Object.keys(ys).forEach(function(e) {
  Fb.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ys[t] = ys[e];
  });
});
function i0(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ys.hasOwnProperty(e) && ys[e] ? ("" + t).trim() : t + "px";
}
function s0(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = i0(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Db = ft({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Bd(e, t) {
  if (t) {
    if (Db[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function Ld(e, t) {
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
var zd = null;
function op(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var _d = null, ui = null, ci = null;
function Qh(e) {
  if (e = dl(e)) {
    if (typeof _d != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = Su(t), _d(e.stateNode, e.type, t));
  }
}
function l0(e) {
  ui ? ci ? ci.push(e) : ci = [e] : ui = e;
}
function a0() {
  if (ui) {
    var e = ui, t = ci;
    if (ci = ui = null, Qh(e), t) for (e = 0; e < t.length; e++) Qh(t[e]);
  }
}
function u0(e, t) {
  return e(t);
}
function c0() {
}
var _c = !1;
function d0(e, t, n) {
  if (_c) return e(t, n);
  _c = !0;
  try {
    return u0(e, t, n);
  } finally {
    _c = !1, (ui !== null || ci !== null) && (c0(), a0());
  }
}
function Bs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Su(n);
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
var Fd = !1;
if (kr) try {
  var Ki = {};
  Object.defineProperty(Ki, "passive", { get: function() {
    Fd = !0;
  } }), window.addEventListener("test", Ki, Ki), window.removeEventListener("test", Ki, Ki);
} catch {
  Fd = !1;
}
function Wb(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var vs = !1, ja = null, Aa = !1, Dd = null, Ub = { onError: function(e) {
  vs = !0, ja = e;
} };
function Vb(e, t, n, r, o, i, s, l, a) {
  vs = !1, ja = null, Wb.apply(Ub, arguments);
}
function Hb(e, t, n, r, o, i, s, l, a) {
  if (Vb.apply(this, arguments), vs) {
    if (vs) {
      var u = ja;
      vs = !1, ja = null;
    } else throw Error(V(198));
    Aa || (Aa = !0, Dd = u);
  }
}
function Ao(e) {
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
function f0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Xh(e) {
  if (Ao(e) !== e) throw Error(V(188));
}
function Kb(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ao(e), t === null) throw Error(V(188));
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
        if (i === n) return Xh(o), e;
        if (i === r) return Xh(o), t;
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
function p0(e) {
  return e = Kb(e), e !== null ? h0(e) : null;
}
function h0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = h0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var m0 = pn.unstable_scheduleCallback, qh = pn.unstable_cancelCallback, Gb = pn.unstable_shouldYield, Yb = pn.unstable_requestPaint, vt = pn.unstable_now, Qb = pn.unstable_getCurrentPriorityLevel, ip = pn.unstable_ImmediatePriority, g0 = pn.unstable_UserBlockingPriority, Na = pn.unstable_NormalPriority, Xb = pn.unstable_LowPriority, y0 = pn.unstable_IdlePriority, yu = null, rr = null;
function qb(e) {
  if (rr && typeof rr.onCommitFiberRoot == "function") try {
    rr.onCommitFiberRoot(yu, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Wn = Math.clz32 ? Math.clz32 : eS, Jb = Math.log, Zb = Math.LN2;
function eS(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Jb(e) / Zb | 0) | 0;
}
var $l = 64, jl = 4194304;
function ps(e) {
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
function Oa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = ps(l) : (i &= s, i !== 0 && (r = ps(i)));
  } else s = n & ~o, s !== 0 ? r = ps(s) : i !== 0 && (r = ps(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Wn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function tS(e, t) {
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
function nS(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Wn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = tS(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function Wd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function v0() {
  var e = $l;
  return $l <<= 1, !($l & 4194240) && ($l = 64), e;
}
function Fc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ul(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wn(t), e[t] = n;
}
function rS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Wn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function sp(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Wn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ve = 0;
function x0(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var b0, lp, S0, w0, C0, Ud = !1, Al = [], Dr = null, Wr = null, Ur = null, Ls = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ new Map(), Br = [], oS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Jh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dr = null;
      break;
    case "dragenter":
    case "dragleave":
      Wr = null;
      break;
    case "mouseover":
    case "mouseout":
      Ur = null;
      break;
    case "pointerover":
    case "pointerout":
      Ls.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zs.delete(t.pointerId);
  }
}
function Gi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = dl(t), t !== null && lp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function iS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Dr = Gi(Dr, e, t, n, r, o), !0;
    case "dragenter":
      return Wr = Gi(Wr, e, t, n, r, o), !0;
    case "mouseover":
      return Ur = Gi(Ur, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ls.set(i, Gi(Ls.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, zs.set(i, Gi(zs.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function k0(e) {
  var t = mo(e.target);
  if (t !== null) {
    var n = Ao(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = f0(n), t !== null) {
          e.blockedOn = t, C0(e.priority, function() {
            S0(n);
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
function pa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      zd = r, n.target.dispatchEvent(r), zd = null;
    } else return t = dl(n), t !== null && lp(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Zh(e, t, n) {
  pa(e) && n.delete(t);
}
function sS() {
  Ud = !1, Dr !== null && pa(Dr) && (Dr = null), Wr !== null && pa(Wr) && (Wr = null), Ur !== null && pa(Ur) && (Ur = null), Ls.forEach(Zh), zs.forEach(Zh);
}
function Yi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ud || (Ud = !0, pn.unstable_scheduleCallback(pn.unstable_NormalPriority, sS)));
}
function _s(e) {
  function t(o) {
    return Yi(o, e);
  }
  if (0 < Al.length) {
    Yi(Al[0], e);
    for (var n = 1; n < Al.length; n++) {
      var r = Al[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Dr !== null && Yi(Dr, e), Wr !== null && Yi(Wr, e), Ur !== null && Yi(Ur, e), Ls.forEach(t), zs.forEach(t), n = 0; n < Br.length; n++) r = Br[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Br.length && (n = Br[0], n.blockedOn === null); ) k0(n), n.blockedOn === null && Br.shift();
}
var di = $r.ReactCurrentBatchConfig, Ba = !0;
function lS(e, t, n, r) {
  var o = Ve, i = di.transition;
  di.transition = null;
  try {
    Ve = 1, ap(e, t, n, r);
  } finally {
    Ve = o, di.transition = i;
  }
}
function aS(e, t, n, r) {
  var o = Ve, i = di.transition;
  di.transition = null;
  try {
    Ve = 4, ap(e, t, n, r);
  } finally {
    Ve = o, di.transition = i;
  }
}
function ap(e, t, n, r) {
  if (Ba) {
    var o = Vd(e, t, n, r);
    if (o === null) Xc(e, t, r, La, n), Jh(e, r);
    else if (iS(o, e, t, n, r)) r.stopPropagation();
    else if (Jh(e, r), t & 4 && -1 < oS.indexOf(e)) {
      for (; o !== null; ) {
        var i = dl(o);
        if (i !== null && b0(i), i = Vd(e, t, n, r), i === null && Xc(e, t, r, La, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Xc(e, t, r, null, n);
  }
}
var La = null;
function Vd(e, t, n, r) {
  if (La = null, e = op(r), e = mo(e), e !== null) if (t = Ao(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = f0(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return La = e, null;
}
function E0(e) {
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
      switch (Qb()) {
        case ip:
          return 1;
        case g0:
          return 4;
        case Na:
        case Xb:
          return 16;
        case y0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zr = null, up = null, ha = null;
function T0() {
  if (ha) return ha;
  var e, t = up, n = t.length, r, o = "value" in zr ? zr.value : zr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return ha = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ma(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Nl() {
  return !0;
}
function em() {
  return !1;
}
function gn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Nl : em, this.isPropagationStopped = em, this;
  }
  return ft(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Nl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Nl);
  }, persist: function() {
  }, isPersistent: Nl }), t;
}
var Li = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, cp = gn(Li), cl = ft({}, Li, { view: 0, detail: 0 }), uS = gn(cl), Dc, Wc, Qi, vu = ft({}, cl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: dp, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Qi && (Qi && e.type === "mousemove" ? (Dc = e.screenX - Qi.screenX, Wc = e.screenY - Qi.screenY) : Wc = Dc = 0, Qi = e), Dc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Wc;
} }), tm = gn(vu), cS = ft({}, vu, { dataTransfer: 0 }), dS = gn(cS), fS = ft({}, cl, { relatedTarget: 0 }), Uc = gn(fS), pS = ft({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hS = gn(pS), mS = ft({}, Li, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), gS = gn(mS), yS = ft({}, Li, { data: 0 }), nm = gn(yS), vS = {
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
}, xS = {
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
}, bS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function SS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bS[e]) ? !!t[e] : !1;
}
function dp() {
  return SS;
}
var wS = ft({}, cl, { key: function(e) {
  if (e.key) {
    var t = vS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ma(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: dp, charCode: function(e) {
  return e.type === "keypress" ? ma(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ma(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), CS = gn(wS), kS = ft({}, vu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rm = gn(kS), ES = ft({}, cl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: dp }), TS = gn(ES), RS = ft({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), PS = gn(RS), IS = ft({}, vu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), MS = gn(IS), $S = [9, 13, 27, 32], fp = kr && "CompositionEvent" in window, xs = null;
kr && "documentMode" in document && (xs = document.documentMode);
var jS = kr && "TextEvent" in window && !xs, R0 = kr && (!fp || xs && 8 < xs && 11 >= xs), om = " ", im = !1;
function P0(e, t) {
  switch (e) {
    case "keyup":
      return $S.indexOf(t.keyCode) !== -1;
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
function I0(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Jo = !1;
function AS(e, t) {
  switch (e) {
    case "compositionend":
      return I0(t);
    case "keypress":
      return t.which !== 32 ? null : (im = !0, om);
    case "textInput":
      return e = t.data, e === om && im ? null : e;
    default:
      return null;
  }
}
function NS(e, t) {
  if (Jo) return e === "compositionend" || !fp && P0(e, t) ? (e = T0(), ha = up = zr = null, Jo = !1, e) : null;
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
      return R0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var OS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function sm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!OS[e.type] : t === "textarea";
}
function M0(e, t, n, r) {
  l0(r), t = za(t, "onChange"), 0 < t.length && (n = new cp("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var bs = null, Fs = null;
function BS(e) {
  D0(e, 0);
}
function xu(e) {
  var t = ti(e);
  if (e0(t)) return e;
}
function LS(e, t) {
  if (e === "change") return t;
}
var $0 = !1;
if (kr) {
  var Vc;
  if (kr) {
    var Hc = "oninput" in document;
    if (!Hc) {
      var lm = document.createElement("div");
      lm.setAttribute("oninput", "return;"), Hc = typeof lm.oninput == "function";
    }
    Vc = Hc;
  } else Vc = !1;
  $0 = Vc && (!document.documentMode || 9 < document.documentMode);
}
function am() {
  bs && (bs.detachEvent("onpropertychange", j0), Fs = bs = null);
}
function j0(e) {
  if (e.propertyName === "value" && xu(Fs)) {
    var t = [];
    M0(t, Fs, e, op(e)), d0(BS, t);
  }
}
function zS(e, t, n) {
  e === "focusin" ? (am(), bs = t, Fs = n, bs.attachEvent("onpropertychange", j0)) : e === "focusout" && am();
}
function _S(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return xu(Fs);
}
function FS(e, t) {
  if (e === "click") return xu(t);
}
function DS(e, t) {
  if (e === "input" || e === "change") return xu(t);
}
function WS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Vn = typeof Object.is == "function" ? Object.is : WS;
function Ds(e, t) {
  if (Vn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Td.call(t, o) || !Vn(e[o], t[o])) return !1;
  }
  return !0;
}
function um(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cm(e, t) {
  var n = um(e);
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
    n = um(n);
  }
}
function A0(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? A0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function N0() {
  for (var e = window, t = $a(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $a(e.document);
  }
  return t;
}
function pp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function US(e) {
  var t = N0(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && A0(n.ownerDocument.documentElement, n)) {
    if (r !== null && pp(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = cm(n, i);
        var s = cm(
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
var VS = kr && "documentMode" in document && 11 >= document.documentMode, Zo = null, Hd = null, Ss = null, Kd = !1;
function dm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Kd || Zo == null || Zo !== $a(r) || (r = Zo, "selectionStart" in r && pp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ss && Ds(Ss, r) || (Ss = r, r = za(Hd, "onSelect"), 0 < r.length && (t = new cp("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zo)));
}
function Ol(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ei = { animationend: Ol("Animation", "AnimationEnd"), animationiteration: Ol("Animation", "AnimationIteration"), animationstart: Ol("Animation", "AnimationStart"), transitionend: Ol("Transition", "TransitionEnd") }, Kc = {}, O0 = {};
kr && (O0 = document.createElement("div").style, "AnimationEvent" in window || (delete ei.animationend.animation, delete ei.animationiteration.animation, delete ei.animationstart.animation), "TransitionEvent" in window || delete ei.transitionend.transition);
function bu(e) {
  if (Kc[e]) return Kc[e];
  if (!ei[e]) return e;
  var t = ei[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in O0) return Kc[e] = t[n];
  return e;
}
var B0 = bu("animationend"), L0 = bu("animationiteration"), z0 = bu("animationstart"), _0 = bu("transitionend"), F0 = /* @__PURE__ */ new Map(), fm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function eo(e, t) {
  F0.set(e, t), jo(t, [e]);
}
for (var Gc = 0; Gc < fm.length; Gc++) {
  var Yc = fm[Gc], HS = Yc.toLowerCase(), KS = Yc[0].toUpperCase() + Yc.slice(1);
  eo(HS, "on" + KS);
}
eo(B0, "onAnimationEnd");
eo(L0, "onAnimationIteration");
eo(z0, "onAnimationStart");
eo("dblclick", "onDoubleClick");
eo("focusin", "onFocus");
eo("focusout", "onBlur");
eo(_0, "onTransitionEnd");
yi("onMouseEnter", ["mouseout", "mouseover"]);
yi("onMouseLeave", ["mouseout", "mouseover"]);
yi("onPointerEnter", ["pointerout", "pointerover"]);
yi("onPointerLeave", ["pointerout", "pointerover"]);
jo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var hs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), GS = new Set("cancel close invalid load scroll toggle".split(" ").concat(hs));
function pm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Hb(r, t, void 0, e), e.currentTarget = null;
}
function D0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        pm(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        pm(o, l, u), i = a;
      }
    }
  }
  if (Aa) throw e = Dd, Aa = !1, Dd = null, e;
}
function nt(e, t) {
  var n = t[qd];
  n === void 0 && (n = t[qd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (W0(t, e, 2, !1), n.add(r));
}
function Qc(e, t, n) {
  var r = 0;
  t && (r |= 4), W0(n, e, r, t);
}
var Bl = "_reactListening" + Math.random().toString(36).slice(2);
function Ws(e) {
  if (!e[Bl]) {
    e[Bl] = !0, Qy.forEach(function(n) {
      n !== "selectionchange" && (GS.has(n) || Qc(n, !1, e), Qc(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Bl] || (t[Bl] = !0, Qc("selectionchange", !1, t));
  }
}
function W0(e, t, n, r) {
  switch (E0(t)) {
    case 1:
      var o = lS;
      break;
    case 4:
      o = aS;
      break;
    default:
      o = ap;
  }
  n = o.bind(null, t, n, e), o = void 0, !Fd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Xc(e, t, n, r, o) {
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
        if (s = mo(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  d0(function() {
    var u = i, c = op(n), h = [];
    e: {
      var g = F0.get(e);
      if (g !== void 0) {
        var d = cp, v = e;
        switch (e) {
          case "keypress":
            if (ma(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = CS;
            break;
          case "focusin":
            v = "focus", d = Uc;
            break;
          case "focusout":
            v = "blur", d = Uc;
            break;
          case "beforeblur":
          case "afterblur":
            d = Uc;
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
            d = tm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = dS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = TS;
            break;
          case B0:
          case L0:
          case z0:
            d = hS;
            break;
          case _0:
            d = PS;
            break;
          case "scroll":
            d = uS;
            break;
          case "wheel":
            d = MS;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = gS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = rm;
        }
        var w = (t & 4) !== 0, C = !w && e === "scroll", m = w ? g !== null ? g + "Capture" : null : g;
        w = [];
        for (var p = u, x; p !== null; ) {
          x = p;
          var S = x.stateNode;
          if (x.tag === 5 && S !== null && (x = S, m !== null && (S = Bs(p, m), S != null && w.push(Us(p, S, x)))), C) break;
          p = p.return;
        }
        0 < w.length && (g = new d(g, v, null, n, c), h.push({ event: g, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", g && n !== zd && (v = n.relatedTarget || n.fromElement) && (mo(v) || v[Er])) break e;
        if ((d || g) && (g = c.window === c ? c : (g = c.ownerDocument) ? g.defaultView || g.parentWindow : window, d ? (v = n.relatedTarget || n.toElement, d = u, v = v ? mo(v) : null, v !== null && (C = Ao(v), v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (d = null, v = u), d !== v)) {
          if (w = tm, S = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = rm, S = "onPointerLeave", m = "onPointerEnter", p = "pointer"), C = d == null ? g : ti(d), x = v == null ? g : ti(v), g = new w(S, p + "leave", d, n, c), g.target = C, g.relatedTarget = x, S = null, mo(c) === u && (w = new w(m, p + "enter", v, n, c), w.target = x, w.relatedTarget = C, S = w), C = S, d && v) t: {
            for (w = d, m = v, p = 0, x = w; x; x = Uo(x)) p++;
            for (x = 0, S = m; S; S = Uo(S)) x++;
            for (; 0 < p - x; ) w = Uo(w), p--;
            for (; 0 < x - p; ) m = Uo(m), x--;
            for (; p--; ) {
              if (w === m || m !== null && w === m.alternate) break t;
              w = Uo(w), m = Uo(m);
            }
            w = null;
          }
          else w = null;
          d !== null && hm(h, g, d, w, !1), v !== null && C !== null && hm(h, C, v, w, !0);
        }
      }
      e: {
        if (g = u ? ti(u) : window, d = g.nodeName && g.nodeName.toLowerCase(), d === "select" || d === "input" && g.type === "file") var E = LS;
        else if (sm(g)) if ($0) E = DS;
        else {
          E = _S;
          var k = zS;
        }
        else (d = g.nodeName) && d.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (E = FS);
        if (E && (E = E(e, u))) {
          M0(h, E, n, c);
          break e;
        }
        k && k(e, g, u), e === "focusout" && (k = g._wrapperState) && k.controlled && g.type === "number" && Ad(g, "number", g.value);
      }
      switch (k = u ? ti(u) : window, e) {
        case "focusin":
          (sm(k) || k.contentEditable === "true") && (Zo = k, Hd = u, Ss = null);
          break;
        case "focusout":
          Ss = Hd = Zo = null;
          break;
        case "mousedown":
          Kd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Kd = !1, dm(h, n, c);
          break;
        case "selectionchange":
          if (VS) break;
        case "keydown":
        case "keyup":
          dm(h, n, c);
      }
      var T;
      if (fp) e: {
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
      else Jo ? P0(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (R0 && n.locale !== "ko" && (Jo || R !== "onCompositionStart" ? R === "onCompositionEnd" && Jo && (T = T0()) : (zr = c, up = "value" in zr ? zr.value : zr.textContent, Jo = !0)), k = za(u, R), 0 < k.length && (R = new nm(R, e, null, n, c), h.push({ event: R, listeners: k }), T ? R.data = T : (T = I0(n), T !== null && (R.data = T)))), (T = jS ? AS(e, n) : NS(e, n)) && (u = za(u, "onBeforeInput"), 0 < u.length && (c = new nm("onBeforeInput", "beforeinput", null, n, c), h.push({ event: c, listeners: u }), c.data = T));
    }
    D0(h, t);
  });
}
function Us(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function za(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Bs(e, n), i != null && r.unshift(Us(e, i, o)), i = Bs(e, t), i != null && r.push(Us(e, i, o))), e = e.return;
  }
  return r;
}
function Uo(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = Bs(n, i), a != null && s.unshift(Us(n, a, l))) : o || (a = Bs(n, i), a != null && s.push(Us(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var YS = /\r\n?/g, QS = /\u0000|\uFFFD/g;
function mm(e) {
  return (typeof e == "string" ? e : "" + e).replace(YS, `
`).replace(QS, "");
}
function Ll(e, t, n) {
  if (t = mm(t), mm(e) !== t && n) throw Error(V(425));
}
function _a() {
}
var Gd = null, Yd = null;
function Qd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Xd = typeof setTimeout == "function" ? setTimeout : void 0, XS = typeof clearTimeout == "function" ? clearTimeout : void 0, gm = typeof Promise == "function" ? Promise : void 0, qS = typeof queueMicrotask == "function" ? queueMicrotask : typeof gm < "u" ? function(e) {
  return gm.resolve(null).then(e).catch(JS);
} : Xd;
function JS(e) {
  setTimeout(function() {
    throw e;
  });
}
function qc(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), _s(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  _s(t);
}
function Vr(e) {
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
function ym(e) {
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
var zi = Math.random().toString(36).slice(2), er = "__reactFiber$" + zi, Vs = "__reactProps$" + zi, Er = "__reactContainer$" + zi, qd = "__reactEvents$" + zi, ZS = "__reactListeners$" + zi, ew = "__reactHandles$" + zi;
function mo(e) {
  var t = e[er];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Er] || n[er]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ym(e); e !== null; ) {
        if (n = e[er]) return n;
        e = ym(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function dl(e) {
  return e = e[er] || e[Er], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ti(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function Su(e) {
  return e[Vs] || null;
}
var Jd = [], ni = -1;
function to(e) {
  return { current: e };
}
function rt(e) {
  0 > ni || (e.current = Jd[ni], Jd[ni] = null, ni--);
}
function Ze(e, t) {
  ni++, Jd[ni] = e.current, e.current = t;
}
var qr = {}, Wt = to(qr), en = to(!1), Co = qr;
function vi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function tn(e) {
  return e = e.childContextTypes, e != null;
}
function Fa() {
  rt(en), rt(Wt);
}
function vm(e, t, n) {
  if (Wt.current !== qr) throw Error(V(168));
  Ze(Wt, t), Ze(en, n);
}
function U0(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(V(108, zb(e) || "Unknown", o));
  return ft({}, n, r);
}
function Da(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qr, Co = Wt.current, Ze(Wt, e), Ze(en, en.current), !0;
}
function xm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = U0(e, t, Co), r.__reactInternalMemoizedMergedChildContext = e, rt(en), rt(Wt), Ze(Wt, e)) : rt(en), Ze(en, n);
}
var vr = null, wu = !1, Jc = !1;
function V0(e) {
  vr === null ? vr = [e] : vr.push(e);
}
function tw(e) {
  wu = !0, V0(e);
}
function no() {
  if (!Jc && vr !== null) {
    Jc = !0;
    var e = 0, t = Ve;
    try {
      var n = vr;
      for (Ve = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      vr = null, wu = !1;
    } catch (o) {
      throw vr !== null && (vr = vr.slice(e + 1)), m0(ip, no), o;
    } finally {
      Ve = t, Jc = !1;
    }
  }
  return null;
}
var ri = [], oi = 0, Wa = null, Ua = 0, Sn = [], wn = 0, ko = null, Sr = 1, wr = "";
function fo(e, t) {
  ri[oi++] = Ua, ri[oi++] = Wa, Wa = e, Ua = t;
}
function H0(e, t, n) {
  Sn[wn++] = Sr, Sn[wn++] = wr, Sn[wn++] = ko, ko = e;
  var r = Sr;
  e = wr;
  var o = 32 - Wn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Wn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Sr = 1 << 32 - Wn(t) + o | n << o | r, wr = i + e;
  } else Sr = 1 << i | n << o | r, wr = e;
}
function hp(e) {
  e.return !== null && (fo(e, 1), H0(e, 1, 0));
}
function mp(e) {
  for (; e === Wa; ) Wa = ri[--oi], ri[oi] = null, Ua = ri[--oi], ri[oi] = null;
  for (; e === ko; ) ko = Sn[--wn], Sn[wn] = null, wr = Sn[--wn], Sn[wn] = null, Sr = Sn[--wn], Sn[wn] = null;
}
var dn = null, cn = null, lt = !1, Dn = null;
function K0(e, t) {
  var n = En(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function bm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, dn = e, cn = Vr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, dn = e, cn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ko !== null ? { id: Sr, overflow: wr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = En(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, dn = e, cn = null, !0) : !1;
    default:
      return !1;
  }
}
function Zd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ef(e) {
  if (lt) {
    var t = cn;
    if (t) {
      var n = t;
      if (!bm(e, t)) {
        if (Zd(e)) throw Error(V(418));
        t = Vr(n.nextSibling);
        var r = dn;
        t && bm(e, t) ? K0(r, n) : (e.flags = e.flags & -4097 | 2, lt = !1, dn = e);
      }
    } else {
      if (Zd(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, lt = !1, dn = e;
    }
  }
}
function Sm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  dn = e;
}
function zl(e) {
  if (e !== dn) return !1;
  if (!lt) return Sm(e), lt = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Qd(e.type, e.memoizedProps)), t && (t = cn)) {
    if (Zd(e)) throw G0(), Error(V(418));
    for (; t; ) K0(e, t), t = Vr(t.nextSibling);
  }
  if (Sm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              cn = Vr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      cn = null;
    }
  } else cn = dn ? Vr(e.stateNode.nextSibling) : null;
  return !0;
}
function G0() {
  for (var e = cn; e; ) e = Vr(e.nextSibling);
}
function xi() {
  cn = dn = null, lt = !1;
}
function gp(e) {
  Dn === null ? Dn = [e] : Dn.push(e);
}
var nw = $r.ReactCurrentBatchConfig;
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
function _l(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function wm(e) {
  var t = e._init;
  return t(e._payload);
}
function Y0(e) {
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
    return m = Yr(m, p), m.index = 0, m.sibling = null, m;
  }
  function i(m, p, x) {
    return m.index = x, e ? (x = m.alternate, x !== null ? (x = x.index, x < p ? (m.flags |= 2, p) : x) : (m.flags |= 2, p)) : (m.flags |= 1048576, p);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, x, S) {
    return p === null || p.tag !== 6 ? (p = id(x, m.mode, S), p.return = m, p) : (p = o(p, x), p.return = m, p);
  }
  function a(m, p, x, S) {
    var E = x.type;
    return E === qo ? c(m, p, x.props.children, S, x.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Nr && wm(E) === p.type) ? (S = o(p, x.props), S.ref = Xi(m, p, x), S.return = m, S) : (S = wa(x.type, x.key, x.props, null, m.mode, S), S.ref = Xi(m, p, x), S.return = m, S);
  }
  function u(m, p, x, S) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== x.containerInfo || p.stateNode.implementation !== x.implementation ? (p = sd(x, m.mode, S), p.return = m, p) : (p = o(p, x.children || []), p.return = m, p);
  }
  function c(m, p, x, S, E) {
    return p === null || p.tag !== 7 ? (p = bo(x, m.mode, S, E), p.return = m, p) : (p = o(p, x), p.return = m, p);
  }
  function h(m, p, x) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = id("" + p, m.mode, x), p.return = m, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Pl:
          return x = wa(p.type, p.key, p.props, null, m.mode, x), x.ref = Xi(m, null, p), x.return = m, x;
        case Xo:
          return p = sd(p, m.mode, x), p.return = m, p;
        case Nr:
          var S = p._init;
          return h(m, S(p._payload), x);
      }
      if (fs(p) || Hi(p)) return p = bo(p, m.mode, x, null), p.return = m, p;
      _l(m, p);
    }
    return null;
  }
  function g(m, p, x, S) {
    var E = p !== null ? p.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number") return E !== null ? null : l(m, p, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Pl:
          return x.key === E ? a(m, p, x, S) : null;
        case Xo:
          return x.key === E ? u(m, p, x, S) : null;
        case Nr:
          return E = x._init, g(
            m,
            p,
            E(x._payload),
            S
          );
      }
      if (fs(x) || Hi(x)) return E !== null ? null : c(m, p, x, S, null);
      _l(m, x);
    }
    return null;
  }
  function d(m, p, x, S, E) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return m = m.get(x) || null, l(p, m, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Pl:
          return m = m.get(S.key === null ? x : S.key) || null, a(p, m, S, E);
        case Xo:
          return m = m.get(S.key === null ? x : S.key) || null, u(p, m, S, E);
        case Nr:
          var k = S._init;
          return d(m, p, x, k(S._payload), E);
      }
      if (fs(S) || Hi(S)) return m = m.get(x) || null, c(p, m, S, E, null);
      _l(p, S);
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
    if (R === x.length) return n(m, T), lt && fo(m, R), E;
    if (T === null) {
      for (; R < x.length; R++) T = h(m, x[R], S), T !== null && (p = i(T, p, R), k === null ? E = T : k.sibling = T, k = T);
      return lt && fo(m, R), E;
    }
    for (T = r(m, T); R < x.length; R++) I = d(T, m, R, x[R], S), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? R : I.key), p = i(I, p, R), k === null ? E = I : k.sibling = I, k = I);
    return e && T.forEach(function(M) {
      return t(m, M);
    }), lt && fo(m, R), E;
  }
  function w(m, p, x, S) {
    var E = Hi(x);
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
    ), lt && fo(m, R), E;
    if (T === null) {
      for (; !A.done; R++, A = x.next()) A = h(m, A.value, S), A !== null && (p = i(A, p, R), k === null ? E = A : k.sibling = A, k = A);
      return lt && fo(m, R), E;
    }
    for (T = r(m, T); !A.done; R++, A = x.next()) A = d(T, m, R, A.value, S), A !== null && (e && A.alternate !== null && T.delete(A.key === null ? R : A.key), p = i(A, p, R), k === null ? E = A : k.sibling = A, k = A);
    return e && T.forEach(function(N) {
      return t(m, N);
    }), lt && fo(m, R), E;
  }
  function C(m, p, x, S) {
    if (typeof x == "object" && x !== null && x.type === qo && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Pl:
          e: {
            for (var E = x.key, k = p; k !== null; ) {
              if (k.key === E) {
                if (E = x.type, E === qo) {
                  if (k.tag === 7) {
                    n(m, k.sibling), p = o(k, x.props.children), p.return = m, m = p;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Nr && wm(E) === k.type) {
                  n(m, k.sibling), p = o(k, x.props), p.ref = Xi(m, k, x), p.return = m, m = p;
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            x.type === qo ? (p = bo(x.props.children, m.mode, S, x.key), p.return = m, m = p) : (S = wa(x.type, x.key, x.props, null, m.mode, S), S.ref = Xi(m, p, x), S.return = m, m = S);
          }
          return s(m);
        case Xo:
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
            p = sd(x, m.mode, S), p.return = m, m = p;
          }
          return s(m);
        case Nr:
          return k = x._init, C(m, p, k(x._payload), S);
      }
      if (fs(x)) return v(m, p, x, S);
      if (Hi(x)) return w(m, p, x, S);
      _l(m, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, p !== null && p.tag === 6 ? (n(m, p.sibling), p = o(p, x), p.return = m, m = p) : (n(m, p), p = id(x, m.mode, S), p.return = m, m = p), s(m)) : n(m, p);
  }
  return C;
}
var bi = Y0(!0), Q0 = Y0(!1), Va = to(null), Ha = null, ii = null, yp = null;
function vp() {
  yp = ii = Ha = null;
}
function xp(e) {
  var t = Va.current;
  rt(Va), e._currentValue = t;
}
function tf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function fi(e, t) {
  Ha = e, yp = ii = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Zt = !0), e.firstContext = null);
}
function Pn(e) {
  var t = e._currentValue;
  if (yp !== e) if (e = { context: e, memoizedValue: t, next: null }, ii === null) {
    if (Ha === null) throw Error(V(308));
    ii = e, Ha.dependencies = { lanes: 0, firstContext: e };
  } else ii = ii.next = e;
  return t;
}
var go = null;
function bp(e) {
  go === null ? go = [e] : go.push(e);
}
function X0(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, bp(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Tr(e, r);
}
function Tr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Or = !1;
function Sp(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function q0(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Cr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Hr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Ne & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Tr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, bp(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Tr(e, n);
}
function ga(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, sp(e, n);
  }
}
function Cm(e, t) {
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
function Ka(e, t, n, r) {
  var o = e.updateQueue;
  Or = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var h = o.baseState;
    s = 0, c = u = a = null, l = i;
    do {
      var g = l.lane, d = l.eventTime;
      if ((r & g) === g) {
        c !== null && (c = c.next = {
          eventTime: d,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var v = e, w = l;
          switch (g = t, d = n, w.tag) {
            case 1:
              if (v = w.payload, typeof v == "function") {
                h = v.call(d, h, g);
                break e;
              }
              h = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = w.payload, g = typeof v == "function" ? v.call(d, h, g) : v, g == null) break e;
              h = ft({}, h, g);
              break e;
            case 2:
              Or = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, g = o.effects, g === null ? o.effects = [l] : g.push(l));
      } else d = { eventTime: d, lane: g, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = d, a = h) : c = c.next = d, s |= g;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        g = l, l = g.next, g.next = null, o.lastBaseUpdate = g, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = h), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    To |= s, e.lanes = s, e.memoizedState = h;
  }
}
function km(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(V(191, o));
      o.call(r);
    }
  }
}
var fl = {}, or = to(fl), Hs = to(fl), Ks = to(fl);
function yo(e) {
  if (e === fl) throw Error(V(174));
  return e;
}
function wp(e, t) {
  switch (Ze(Ks, t), Ze(Hs, e), Ze(or, fl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Od(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Od(t, e);
  }
  rt(or), Ze(or, t);
}
function Si() {
  rt(or), rt(Hs), rt(Ks);
}
function J0(e) {
  yo(Ks.current);
  var t = yo(or.current), n = Od(t, e.type);
  t !== n && (Ze(Hs, e), Ze(or, n));
}
function Cp(e) {
  Hs.current === e && (rt(or), rt(Hs));
}
var ut = to(0);
function Ga(e) {
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
var Zc = [];
function kp() {
  for (var e = 0; e < Zc.length; e++) Zc[e]._workInProgressVersionPrimary = null;
  Zc.length = 0;
}
var ya = $r.ReactCurrentDispatcher, ed = $r.ReactCurrentBatchConfig, Eo = 0, ct = null, Et = null, Pt = null, Ya = !1, ws = !1, Gs = 0, rw = 0;
function zt() {
  throw Error(V(321));
}
function Ep(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Vn(e[n], t[n])) return !1;
  return !0;
}
function Tp(e, t, n, r, o, i) {
  if (Eo = i, ct = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ya.current = e === null || e.memoizedState === null ? lw : aw, e = n(r, o), ws) {
    i = 0;
    do {
      if (ws = !1, Gs = 0, 25 <= i) throw Error(V(301));
      i += 1, Pt = Et = null, t.updateQueue = null, ya.current = uw, e = n(r, o);
    } while (ws);
  }
  if (ya.current = Qa, t = Et !== null && Et.next !== null, Eo = 0, Pt = Et = ct = null, Ya = !1, t) throw Error(V(300));
  return e;
}
function Rp() {
  var e = Gs !== 0;
  return Gs = 0, e;
}
function qn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Pt === null ? ct.memoizedState = Pt = e : Pt = Pt.next = e, Pt;
}
function In() {
  if (Et === null) {
    var e = ct.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Et.next;
  var t = Pt === null ? ct.memoizedState : Pt.next;
  if (t !== null) Pt = t, Et = e;
  else {
    if (e === null) throw Error(V(310));
    Et = e, e = { memoizedState: Et.memoizedState, baseState: Et.baseState, baseQueue: Et.baseQueue, queue: Et.queue, next: null }, Pt === null ? ct.memoizedState = Pt = e : Pt = Pt.next = e;
  }
  return Pt;
}
function Ys(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function td(e) {
  var t = In(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = Et, o = r.baseQueue, i = n.pending;
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
      if ((Eo & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = h, s = r) : a = a.next = h, ct.lanes |= c, To |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, Vn(r, t.memoizedState) || (Zt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ct.lanes |= i, To |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function nd(e) {
  var t = In(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Vn(i, t.memoizedState) || (Zt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Z0() {
}
function ev(e, t) {
  var n = ct, r = In(), o = t(), i = !Vn(r.memoizedState, o);
  if (i && (r.memoizedState = o, Zt = !0), r = r.queue, Pp(rv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Pt !== null && Pt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Qs(9, nv.bind(null, n, r, o, t), void 0, null), It === null) throw Error(V(349));
    Eo & 30 || tv(n, t, o);
  }
  return o;
}
function tv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function nv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ov(t) && iv(e);
}
function rv(e, t, n) {
  return n(function() {
    ov(t) && iv(e);
  });
}
function ov(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Vn(e, n);
  } catch {
    return !0;
  }
}
function iv(e) {
  var t = Tr(e, 1);
  t !== null && Un(t, e, 1, -1);
}
function Em(e) {
  var t = qn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ys, lastRenderedState: e }, t.queue = e, e = e.dispatch = sw.bind(null, ct, e), [t.memoizedState, e];
}
function Qs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function sv() {
  return In().memoizedState;
}
function va(e, t, n, r) {
  var o = qn();
  ct.flags |= e, o.memoizedState = Qs(1 | t, n, void 0, r === void 0 ? null : r);
}
function Cu(e, t, n, r) {
  var o = In();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Et !== null) {
    var s = Et.memoizedState;
    if (i = s.destroy, r !== null && Ep(r, s.deps)) {
      o.memoizedState = Qs(t, n, i, r);
      return;
    }
  }
  ct.flags |= e, o.memoizedState = Qs(1 | t, n, i, r);
}
function Tm(e, t) {
  return va(8390656, 8, e, t);
}
function Pp(e, t) {
  return Cu(2048, 8, e, t);
}
function lv(e, t) {
  return Cu(4, 2, e, t);
}
function av(e, t) {
  return Cu(4, 4, e, t);
}
function uv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function cv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Cu(4, 4, uv.bind(null, t, e), n);
}
function Ip() {
}
function dv(e, t) {
  var n = In();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ep(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function fv(e, t) {
  var n = In();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ep(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function pv(e, t, n) {
  return Eo & 21 ? (Vn(n, t) || (n = v0(), ct.lanes |= n, To |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Zt = !0), e.memoizedState = n);
}
function ow(e, t) {
  var n = Ve;
  Ve = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ed.transition;
  ed.transition = {};
  try {
    e(!1), t();
  } finally {
    Ve = n, ed.transition = r;
  }
}
function hv() {
  return In().memoizedState;
}
function iw(e, t, n) {
  var r = Gr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, mv(e)) gv(t, n);
  else if (n = X0(e, t, n, r), n !== null) {
    var o = Qt();
    Un(n, e, r, o), yv(n, t, r);
  }
}
function sw(e, t, n) {
  var r = Gr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mv(e)) gv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Vn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, bp(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = X0(e, t, o, r), n !== null && (o = Qt(), Un(n, e, r, o), yv(n, t, r));
  }
}
function mv(e) {
  var t = e.alternate;
  return e === ct || t !== null && t === ct;
}
function gv(e, t) {
  ws = Ya = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function yv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, sp(e, n);
  }
}
var Qa = { readContext: Pn, useCallback: zt, useContext: zt, useEffect: zt, useImperativeHandle: zt, useInsertionEffect: zt, useLayoutEffect: zt, useMemo: zt, useReducer: zt, useRef: zt, useState: zt, useDebugValue: zt, useDeferredValue: zt, useTransition: zt, useMutableSource: zt, useSyncExternalStore: zt, useId: zt, unstable_isNewReconciler: !1 }, lw = { readContext: Pn, useCallback: function(e, t) {
  return qn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Pn, useEffect: Tm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, va(
    4194308,
    4,
    uv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return va(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return va(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = qn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = qn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = iw.bind(null, ct, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = qn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Em, useDebugValue: Ip, useDeferredValue: function(e) {
  return qn().memoizedState = e;
}, useTransition: function() {
  var e = Em(!1), t = e[0];
  return e = ow.bind(null, e[1]), qn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ct, o = qn();
  if (lt) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), It === null) throw Error(V(349));
    Eo & 30 || tv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Tm(rv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Qs(9, nv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = qn(), t = It.identifierPrefix;
  if (lt) {
    var n = wr, r = Sr;
    n = (r & ~(1 << 32 - Wn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = rw++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, aw = {
  readContext: Pn,
  useCallback: dv,
  useContext: Pn,
  useEffect: Pp,
  useImperativeHandle: cv,
  useInsertionEffect: lv,
  useLayoutEffect: av,
  useMemo: fv,
  useReducer: td,
  useRef: sv,
  useState: function() {
    return td(Ys);
  },
  useDebugValue: Ip,
  useDeferredValue: function(e) {
    var t = In();
    return pv(t, Et.memoizedState, e);
  },
  useTransition: function() {
    var e = td(Ys)[0], t = In().memoizedState;
    return [e, t];
  },
  useMutableSource: Z0,
  useSyncExternalStore: ev,
  useId: hv,
  unstable_isNewReconciler: !1
}, uw = { readContext: Pn, useCallback: dv, useContext: Pn, useEffect: Pp, useImperativeHandle: cv, useInsertionEffect: lv, useLayoutEffect: av, useMemo: fv, useReducer: nd, useRef: sv, useState: function() {
  return nd(Ys);
}, useDebugValue: Ip, useDeferredValue: function(e) {
  var t = In();
  return Et === null ? t.memoizedState = e : pv(t, Et.memoizedState, e);
}, useTransition: function() {
  var e = nd(Ys)[0], t = In().memoizedState;
  return [e, t];
}, useMutableSource: Z0, useSyncExternalStore: ev, useId: hv, unstable_isNewReconciler: !1 };
function _n(e, t) {
  if (e && e.defaultProps) {
    t = ft({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function nf(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ft({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ku = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ao(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = Gr(e), i = Cr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Hr(e, i, o), t !== null && (Un(t, e, o, r), ga(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = Gr(e), i = Cr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Hr(e, i, o), t !== null && (Un(t, e, o, r), ga(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qt(), r = Gr(e), o = Cr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Hr(e, o, r), t !== null && (Un(t, e, r, n), ga(t, e, r));
} };
function Rm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ds(n, r) || !Ds(o, i) : !0;
}
function vv(e, t, n) {
  var r = !1, o = qr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Pn(i) : (o = tn(t) ? Co : Wt.current, r = t.contextTypes, i = (r = r != null) ? vi(e, o) : qr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ku, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Pm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ku.enqueueReplaceState(t, t.state, null);
}
function rf(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Sp(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Pn(i) : (i = tn(t) ? Co : Wt.current, o.context = vi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (nf(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ku.enqueueReplaceState(o, o.state, null), Ka(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function wi(e, t) {
  try {
    var n = "", r = t;
    do
      n += Lb(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function rd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function of(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cw = typeof WeakMap == "function" ? WeakMap : Map;
function xv(e, t, n) {
  n = Cr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    qa || (qa = !0, mf = r), of(e, t);
  }, n;
}
function bv(e, t, n) {
  n = Cr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      of(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    of(e, t), typeof r != "function" && (Kr === null ? Kr = /* @__PURE__ */ new Set([this]) : Kr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Im(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cw();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = kw.bind(null, e, t, n), t.then(e, e));
}
function Mm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $m(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Cr(-1, 1), t.tag = 2, Hr(n, t, 1))), n.lanes |= 1), e);
}
var dw = $r.ReactCurrentOwner, Zt = !1;
function Gt(e, t, n, r) {
  t.child = e === null ? Q0(t, null, n, r) : bi(t, e.child, n, r);
}
function jm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return fi(t, o), r = Tp(e, t, n, r, i, o), n = Rp(), e !== null && !Zt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rr(e, t, o)) : (lt && n && hp(t), t.flags |= 1, Gt(e, t, r, o), t.child);
}
function Am(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Lp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Sv(e, t, i, r, o)) : (e = wa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ds, n(s, r) && e.ref === t.ref) return Rr(e, t, o);
  }
  return t.flags |= 1, e = Yr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Sv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ds(i, r) && e.ref === t.ref) if (Zt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Zt = !0);
    else return t.lanes = e.lanes, Rr(e, t, o);
  }
  return sf(e, t, n, r, o);
}
function wv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(li, ln), ln |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(li, ln), ln |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ze(li, ln), ln |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ze(li, ln), ln |= r;
  return Gt(e, t, o, n), t.child;
}
function Cv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function sf(e, t, n, r, o) {
  var i = tn(n) ? Co : Wt.current;
  return i = vi(t, i), fi(t, o), n = Tp(e, t, n, r, i, o), r = Rp(), e !== null && !Zt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rr(e, t, o)) : (lt && r && hp(t), t.flags |= 1, Gt(e, t, n, o), t.child);
}
function Nm(e, t, n, r, o) {
  if (tn(n)) {
    var i = !0;
    Da(t);
  } else i = !1;
  if (fi(t, o), t.stateNode === null) xa(e, t), vv(t, n, r), rf(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Pn(u) : (u = tn(n) ? Co : Wt.current, u = vi(t, u));
    var c = n.getDerivedStateFromProps, h = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Pm(t, s, r, u), Or = !1;
    var g = t.memoizedState;
    s.state = g, Ka(t, r, s, o), a = t.memoizedState, l !== r || g !== a || en.current || Or ? (typeof c == "function" && (nf(t, n, c, r), a = t.memoizedState), (l = Or || Rm(t, n, l, r, g, a, u)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, q0(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : _n(t.type, l), s.props = u, h = t.pendingProps, g = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Pn(a) : (a = tn(n) ? Co : Wt.current, a = vi(t, a));
    var d = n.getDerivedStateFromProps;
    (c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== h || g !== a) && Pm(t, s, r, a), Or = !1, g = t.memoizedState, s.state = g, Ka(t, r, s, o);
    var v = t.memoizedState;
    l !== h || g !== v || en.current || Or ? (typeof d == "function" && (nf(t, n, d, r), v = t.memoizedState), (u = Or || Rm(t, n, u, r, g, v, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return lf(e, t, n, r, i, o);
}
function lf(e, t, n, r, o, i) {
  Cv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && xm(t, n, !1), Rr(e, t, i);
  r = t.stateNode, dw.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = bi(t, e.child, null, i), t.child = bi(t, null, l, i)) : Gt(e, t, l, i), t.memoizedState = r.state, o && xm(t, n, !0), t.child;
}
function kv(e) {
  var t = e.stateNode;
  t.pendingContext ? vm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vm(e, t.context, !1), wp(e, t.containerInfo);
}
function Om(e, t, n, r, o) {
  return xi(), gp(o), t.flags |= 256, Gt(e, t, n, r), t.child;
}
var af = { dehydrated: null, treeContext: null, retryLane: 0 };
function uf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ev(e, t, n) {
  var r = t.pendingProps, o = ut.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ze(ut, o & 1), e === null)
    return ef(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Ru(s, r, 0, null), e = bo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = uf(n), t.memoizedState = af, e) : Mp(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return fw(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Yr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Yr(l, i) : (i = bo(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? uf(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = af, r;
  }
  return i = e.child, e = i.sibling, r = Yr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Mp(e, t) {
  return t = Ru({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Fl(e, t, n, r) {
  return r !== null && gp(r), bi(t, e.child, null, n), e = Mp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function fw(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = rd(Error(V(422))), Fl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ru({ mode: "visible", children: r.children }, o, 0, null), i = bo(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && bi(t, e.child, null, s), t.child.memoizedState = uf(s), t.memoizedState = af, i);
  if (!(t.mode & 1)) return Fl(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(V(419)), r = rd(i, r, void 0), Fl(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, Zt || l) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Tr(e, o), Un(r, e, o, -1));
    }
    return Bp(), r = rd(Error(V(421))), Fl(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ew.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, cn = Vr(o.nextSibling), dn = t, lt = !0, Dn = null, e !== null && (Sn[wn++] = Sr, Sn[wn++] = wr, Sn[wn++] = ko, Sr = e.id, wr = e.overflow, ko = t), t = Mp(t, r.children), t.flags |= 4096, t);
}
function Bm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), tf(e.return, t, n);
}
function od(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Tv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Gt(e, t, r.children, n), r = ut.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Bm(e, n, t);
      else if (e.tag === 19) Bm(e, n, t);
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
  if (Ze(ut, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ga(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), od(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ga(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      od(t, !0, n, null, i);
      break;
    case "together":
      od(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function xa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Rr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), To |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = Yr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Yr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function pw(e, t, n) {
  switch (t.tag) {
    case 3:
      kv(t), xi();
      break;
    case 5:
      J0(t);
      break;
    case 1:
      tn(t.type) && Da(t);
      break;
    case 4:
      wp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ze(Va, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ze(ut, ut.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ev(e, t, n) : (Ze(ut, ut.current & 1), e = Rr(e, t, n), e !== null ? e.sibling : null);
      Ze(ut, ut.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Tv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ze(ut, ut.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, wv(e, t, n);
  }
  return Rr(e, t, n);
}
var Rv, cf, Pv, Iv;
Rv = function(e, t) {
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
cf = function() {
};
Pv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, yo(or.current);
    var i = null;
    switch (n) {
      case "input":
        o = $d(e, o), r = $d(e, r), i = [];
        break;
      case "select":
        o = ft({}, o, { value: void 0 }), r = ft({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Nd(e, o), r = Nd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _a);
    }
    Bd(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ns.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ns.hasOwnProperty(u) ? (a != null && u === "onScroll" && nt("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Iv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qi(e, t) {
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
function _t(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function hw(e, t, n) {
  var r = t.pendingProps;
  switch (mp(t), t.tag) {
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
      return _t(t), null;
    case 1:
      return tn(t.type) && Fa(), _t(t), null;
    case 3:
      return r = t.stateNode, Si(), rt(en), rt(Wt), kp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Dn !== null && (vf(Dn), Dn = null))), cf(e, t), _t(t), null;
    case 5:
      Cp(t);
      var o = yo(Ks.current);
      if (n = t.type, e !== null && t.stateNode != null) Pv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return _t(t), null;
        }
        if (e = yo(or.current), zl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[er] = t, r[Vs] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              nt("cancel", r), nt("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              nt("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < hs.length; o++) nt(hs[o], r);
              break;
            case "source":
              nt("error", r);
              break;
            case "img":
            case "image":
            case "link":
              nt(
                "error",
                r
              ), nt("load", r);
              break;
            case "details":
              nt("toggle", r);
              break;
            case "input":
              Hh(r, i), nt("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, nt("invalid", r);
              break;
            case "textarea":
              Gh(r, i), nt("invalid", r);
          }
          Bd(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Ll(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Ll(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Ns.hasOwnProperty(s) && l != null && s === "onScroll" && nt("scroll", r);
          }
          switch (n) {
            case "input":
              Il(r), Kh(r, i, !0);
              break;
            case "textarea":
              Il(r), Yh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = _a);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = r0(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[er] = t, e[Vs] = r, Rv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Ld(n, r), n) {
              case "dialog":
                nt("cancel", e), nt("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                nt("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < hs.length; o++) nt(hs[o], e);
                o = r;
                break;
              case "source":
                nt("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                nt(
                  "error",
                  e
                ), nt("load", e), o = r;
                break;
              case "details":
                nt("toggle", e), o = r;
                break;
              case "input":
                Hh(e, r), o = $d(e, r), nt("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ft({}, r, { value: void 0 }), nt("invalid", e);
                break;
              case "textarea":
                Gh(e, r), o = Nd(e, r), nt("invalid", e);
                break;
              default:
                o = r;
            }
            Bd(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? s0(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && o0(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Os(e, a) : typeof a == "number" && Os(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ns.hasOwnProperty(i) ? a != null && i === "onScroll" && nt("scroll", e) : a != null && ep(e, i, a, s));
            }
            switch (n) {
              case "input":
                Il(e), Kh(e, r, !1);
                break;
              case "textarea":
                Il(e), Yh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ai(e, !!r.multiple, i, !1) : r.defaultValue != null && ai(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = _a);
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
      return _t(t), null;
    case 6:
      if (e && t.stateNode != null) Iv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = yo(Ks.current), yo(or.current), zl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[er] = t, (i = r.nodeValue !== n) && (e = dn, e !== null)) switch (e.tag) {
            case 3:
              Ll(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ll(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[er] = t, t.stateNode = r;
      }
      return _t(t), null;
    case 13:
      if (rt(ut), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (lt && cn !== null && t.mode & 1 && !(t.flags & 128)) G0(), xi(), t.flags |= 98560, i = !1;
        else if (i = zl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(V(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(V(317));
            i[er] = t;
          } else xi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _t(t), i = !1;
        } else Dn !== null && (vf(Dn), Dn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ut.current & 1 ? Tt === 0 && (Tt = 3) : Bp())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
    case 4:
      return Si(), cf(e, t), e === null && Ws(t.stateNode.containerInfo), _t(t), null;
    case 10:
      return xp(t.type._context), _t(t), null;
    case 17:
      return tn(t.type) && Fa(), _t(t), null;
    case 19:
      if (rt(ut), i = t.memoizedState, i === null) return _t(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) qi(i, !1);
      else {
        if (Tt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Ga(e), s !== null) {
            for (t.flags |= 128, qi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Ze(ut, ut.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && vt() > Ci && (t.flags |= 128, r = !0, qi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ga(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !lt) return _t(t), null;
        } else 2 * vt() - i.renderingStartTime > Ci && n !== 1073741824 && (t.flags |= 128, r = !0, qi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = vt(), t.sibling = null, n = ut.current, Ze(ut, r ? n & 1 | 2 : n & 1), t) : (_t(t), null);
    case 22:
    case 23:
      return Op(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ln & 1073741824 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function mw(e, t) {
  switch (mp(t), t.tag) {
    case 1:
      return tn(t.type) && Fa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Si(), rt(en), rt(Wt), kp(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Cp(t), null;
    case 13:
      if (rt(ut), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        xi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return rt(ut), null;
    case 4:
      return Si(), null;
    case 10:
      return xp(t.type._context), null;
    case 22:
    case 23:
      return Op(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dl = !1, Dt = !1, gw = typeof WeakSet == "function" ? WeakSet : Set, Z = null;
function si(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    mt(e, t, r);
  }
  else n.current = null;
}
function df(e, t, n) {
  try {
    n();
  } catch (r) {
    mt(e, t, r);
  }
}
var Lm = !1;
function yw(e, t) {
  if (Gd = Ba, e = N0(), pp(e)) {
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
        var s = 0, l = -1, a = -1, u = 0, c = 0, h = e, g = null;
        t: for (; ; ) {
          for (var d; h !== n || o !== 0 && h.nodeType !== 3 || (l = s + o), h !== i || r !== 0 && h.nodeType !== 3 || (a = s + r), h.nodeType === 3 && (s += h.nodeValue.length), (d = h.firstChild) !== null; )
            g = h, h = d;
          for (; ; ) {
            if (h === e) break t;
            if (g === n && ++u === o && (l = s), g === i && ++c === r && (a = s), (d = h.nextSibling) !== null) break;
            h = g, g = h.parentNode;
          }
          h = d;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yd = { focusedElem: e, selectionRange: n }, Ba = !1, Z = t; Z !== null; ) if (t = Z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Z = e;
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
            var w = v.memoizedProps, C = v.memoizedState, m = t.stateNode, p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : _n(t.type, w), C);
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
      mt(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, Z = e;
      break;
    }
    Z = t.return;
  }
  return v = Lm, Lm = !1, v;
}
function Cs(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && df(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Eu(e, t) {
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
function ff(e) {
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
function Mv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Mv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[er], delete t[Vs], delete t[qd], delete t[ZS], delete t[ew])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function $v(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function zm(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || $v(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function pf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _a));
  else if (r !== 4 && (e = e.child, e !== null)) for (pf(e, t, n), e = e.sibling; e !== null; ) pf(e, t, n), e = e.sibling;
}
function hf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (hf(e, t, n), e = e.sibling; e !== null; ) hf(e, t, n), e = e.sibling;
}
var jt = null, Fn = !1;
function jr(e, t, n) {
  for (n = n.child; n !== null; ) jv(e, t, n), n = n.sibling;
}
function jv(e, t, n) {
  if (rr && typeof rr.onCommitFiberUnmount == "function") try {
    rr.onCommitFiberUnmount(yu, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Dt || si(n, t);
    case 6:
      var r = jt, o = Fn;
      jt = null, jr(e, t, n), jt = r, Fn = o, jt !== null && (Fn ? (e = jt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : jt.removeChild(n.stateNode));
      break;
    case 18:
      jt !== null && (Fn ? (e = jt, n = n.stateNode, e.nodeType === 8 ? qc(e.parentNode, n) : e.nodeType === 1 && qc(e, n), _s(e)) : qc(jt, n.stateNode));
      break;
    case 4:
      r = jt, o = Fn, jt = n.stateNode.containerInfo, Fn = !0, jr(e, t, n), jt = r, Fn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Dt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && df(n, t, s), o = o.next;
        } while (o !== r);
      }
      jr(e, t, n);
      break;
    case 1:
      if (!Dt && (si(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        mt(n, t, l);
      }
      jr(e, t, n);
      break;
    case 21:
      jr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Dt = (r = Dt) || n.memoizedState !== null, jr(e, t, n), Dt = r) : jr(e, t, n);
      break;
    default:
      jr(e, t, n);
  }
}
function _m(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gw()), t.forEach(function(r) {
      var o = Tw.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Nn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            jt = l.stateNode, Fn = !1;
            break e;
          case 3:
            jt = l.stateNode.containerInfo, Fn = !0;
            break e;
          case 4:
            jt = l.stateNode.containerInfo, Fn = !0;
            break e;
        }
        l = l.return;
      }
      if (jt === null) throw Error(V(160));
      jv(i, s, o), jt = null, Fn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      mt(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Av(t, e), t = t.sibling;
}
function Av(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Nn(t, e), Yn(e), r & 4) {
        try {
          Cs(3, e, e.return), Eu(3, e);
        } catch (w) {
          mt(e, e.return, w);
        }
        try {
          Cs(5, e, e.return);
        } catch (w) {
          mt(e, e.return, w);
        }
      }
      break;
    case 1:
      Nn(t, e), Yn(e), r & 512 && n !== null && si(n, n.return);
      break;
    case 5:
      if (Nn(t, e), Yn(e), r & 512 && n !== null && si(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Os(o, "");
        } catch (w) {
          mt(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && t0(o, i), Ld(l, s);
          var u = Ld(l, i);
          for (s = 0; s < a.length; s += 2) {
            var c = a[s], h = a[s + 1];
            c === "style" ? s0(o, h) : c === "dangerouslySetInnerHTML" ? o0(o, h) : c === "children" ? Os(o, h) : ep(o, c, h, u);
          }
          switch (l) {
            case "input":
              jd(o, i);
              break;
            case "textarea":
              n0(o, i);
              break;
            case "select":
              var g = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var d = i.value;
              d != null ? ai(o, !!i.multiple, d, !1) : g !== !!i.multiple && (i.defaultValue != null ? ai(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : ai(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Vs] = i;
        } catch (w) {
          mt(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Nn(t, e), Yn(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (w) {
          mt(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Nn(t, e), Yn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        _s(t.containerInfo);
      } catch (w) {
        mt(e, e.return, w);
      }
      break;
    case 4:
      Nn(t, e), Yn(e);
      break;
    case 13:
      Nn(t, e), Yn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ap = vt())), r & 4 && _m(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Dt = (u = Dt) || c, Nn(t, e), Dt = u) : Nn(t, e), Yn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (Z = e, c = e.child; c !== null; ) {
          for (h = Z = c; Z !== null; ) {
            switch (g = Z, d = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Cs(4, g, g.return);
                break;
              case 1:
                si(g, g.return);
                var v = g.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (w) {
                    mt(r, n, w);
                  }
                }
                break;
              case 5:
                si(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Dm(h);
                  continue;
                }
            }
            d !== null ? (d.return = g, Z = d) : Dm(h);
          }
          c = c.sibling;
        }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                o = h.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = h.stateNode, a = h.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = i0("display", s));
              } catch (w) {
                mt(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (c === null) try {
              h.stateNode.nodeValue = u ? "" : h.memoizedProps;
            } catch (w) {
              mt(e, e.return, w);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), h = h.return;
          }
          c === h && (c = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Nn(t, e), Yn(e), r & 4 && _m(e);
      break;
    case 21:
      break;
    default:
      Nn(
        t,
        e
      ), Yn(e);
  }
}
function Yn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($v(n)) {
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
          r.flags & 32 && (Os(o, ""), r.flags &= -33);
          var i = zm(e);
          hf(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = zm(e);
          pf(e, l, s);
          break;
        default:
          throw Error(V(161));
      }
    } catch (a) {
      mt(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vw(e, t, n) {
  Z = e, Nv(e);
}
function Nv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var o = Z, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Dl;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Dt;
        l = Dl;
        var u = Dt;
        if (Dl = s, (Dt = a) && !u) for (Z = o; Z !== null; ) s = Z, a = s.child, s.tag === 22 && s.memoizedState !== null ? Wm(o) : a !== null ? (a.return = s, Z = a) : Wm(o);
        for (; i !== null; ) Z = i, Nv(i), i = i.sibling;
        Z = o, Dl = l, Dt = u;
      }
      Fm(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, Z = i) : Fm(e);
  }
}
function Fm(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Dt || Eu(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Dt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : _n(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && km(t, i, r);
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
              km(t, s, n);
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
                  var h = c.dehydrated;
                  h !== null && _s(h);
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
        Dt || t.flags & 512 && ff(t);
      } catch (g) {
        mt(t, t.return, g);
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
function Dm(e) {
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
function Wm(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Eu(4, t);
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
            ff(t);
          } catch (a) {
            mt(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ff(t);
          } catch (a) {
            mt(t, s, a);
          }
      }
    } catch (a) {
      mt(t, t.return, a);
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
var xw = Math.ceil, Xa = $r.ReactCurrentDispatcher, $p = $r.ReactCurrentOwner, Tn = $r.ReactCurrentBatchConfig, Ne = 0, It = null, kt = null, Ot = 0, ln = 0, li = to(0), Tt = 0, Xs = null, To = 0, Tu = 0, jp = 0, ks = null, Jt = null, Ap = 0, Ci = 1 / 0, gr = null, qa = !1, mf = null, Kr = null, Wl = !1, _r = null, Ja = 0, Es = 0, gf = null, ba = -1, Sa = 0;
function Qt() {
  return Ne & 6 ? vt() : ba !== -1 ? ba : ba = vt();
}
function Gr(e) {
  return e.mode & 1 ? Ne & 2 && Ot !== 0 ? Ot & -Ot : nw.transition !== null ? (Sa === 0 && (Sa = v0()), Sa) : (e = Ve, e !== 0 || (e = window.event, e = e === void 0 ? 16 : E0(e.type)), e) : 1;
}
function Un(e, t, n, r) {
  if (50 < Es) throw Es = 0, gf = null, Error(V(185));
  ul(e, n, r), (!(Ne & 2) || e !== It) && (e === It && (!(Ne & 2) && (Tu |= n), Tt === 4 && Lr(e, Ot)), nn(e, r), n === 1 && Ne === 0 && !(t.mode & 1) && (Ci = vt() + 500, wu && no()));
}
function nn(e, t) {
  var n = e.callbackNode;
  nS(e, t);
  var r = Oa(e, e === It ? Ot : 0);
  if (r === 0) n !== null && qh(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && qh(n), t === 1) e.tag === 0 ? tw(Um.bind(null, e)) : V0(Um.bind(null, e)), qS(function() {
      !(Ne & 6) && no();
    }), n = null;
    else {
      switch (x0(r)) {
        case 1:
          n = ip;
          break;
        case 4:
          n = g0;
          break;
        case 16:
          n = Na;
          break;
        case 536870912:
          n = y0;
          break;
        default:
          n = Na;
      }
      n = Wv(n, Ov.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ov(e, t) {
  if (ba = -1, Sa = 0, Ne & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (pi() && e.callbackNode !== n) return null;
  var r = Oa(e, e === It ? Ot : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Za(e, r);
  else {
    t = r;
    var o = Ne;
    Ne |= 2;
    var i = Lv();
    (It !== e || Ot !== t) && (gr = null, Ci = vt() + 500, xo(e, t));
    do
      try {
        ww();
        break;
      } catch (l) {
        Bv(e, l);
      }
    while (!0);
    vp(), Xa.current = i, Ne = o, kt !== null ? t = 0 : (It = null, Ot = 0, t = Tt);
  }
  if (t !== 0) {
    if (t === 2 && (o = Wd(e), o !== 0 && (r = o, t = yf(e, o))), t === 1) throw n = Xs, xo(e, 0), Lr(e, r), nn(e, vt()), n;
    if (t === 6) Lr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !bw(o) && (t = Za(e, r), t === 2 && (i = Wd(e), i !== 0 && (r = i, t = yf(e, i))), t === 1)) throw n = Xs, xo(e, 0), Lr(e, r), nn(e, vt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          po(e, Jt, gr);
          break;
        case 3:
          if (Lr(e, r), (r & 130023424) === r && (t = Ap + 500 - vt(), 10 < t)) {
            if (Oa(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Qt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Xd(po.bind(null, e, Jt, gr), t);
            break;
          }
          po(e, Jt, gr);
          break;
        case 4:
          if (Lr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Wn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = vt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xw(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Xd(po.bind(null, e, Jt, gr), r);
            break;
          }
          po(e, Jt, gr);
          break;
        case 5:
          po(e, Jt, gr);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return nn(e, vt()), e.callbackNode === n ? Ov.bind(null, e) : null;
}
function yf(e, t) {
  var n = ks;
  return e.current.memoizedState.isDehydrated && (xo(e, t).flags |= 256), e = Za(e, t), e !== 2 && (t = Jt, Jt = n, t !== null && vf(t)), e;
}
function vf(e) {
  Jt === null ? Jt = e : Jt.push.apply(Jt, e);
}
function bw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Vn(i(), o)) return !1;
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
function Lr(e, t) {
  for (t &= ~jp, t &= ~Tu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Wn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Um(e) {
  if (Ne & 6) throw Error(V(327));
  pi();
  var t = Oa(e, 0);
  if (!(t & 1)) return nn(e, vt()), null;
  var n = Za(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wd(e);
    r !== 0 && (t = r, n = yf(e, r));
  }
  if (n === 1) throw n = Xs, xo(e, 0), Lr(e, t), nn(e, vt()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, po(e, Jt, gr), nn(e, vt()), null;
}
function Np(e, t) {
  var n = Ne;
  Ne |= 1;
  try {
    return e(t);
  } finally {
    Ne = n, Ne === 0 && (Ci = vt() + 500, wu && no());
  }
}
function Ro(e) {
  _r !== null && _r.tag === 0 && !(Ne & 6) && pi();
  var t = Ne;
  Ne |= 1;
  var n = Tn.transition, r = Ve;
  try {
    if (Tn.transition = null, Ve = 1, e) return e();
  } finally {
    Ve = r, Tn.transition = n, Ne = t, !(Ne & 6) && no();
  }
}
function Op() {
  ln = li.current, rt(li);
}
function xo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, XS(n)), kt !== null) for (n = kt.return; n !== null; ) {
    var r = n;
    switch (mp(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Fa();
        break;
      case 3:
        Si(), rt(en), rt(Wt), kp();
        break;
      case 5:
        Cp(r);
        break;
      case 4:
        Si();
        break;
      case 13:
        rt(ut);
        break;
      case 19:
        rt(ut);
        break;
      case 10:
        xp(r.type._context);
        break;
      case 22:
      case 23:
        Op();
    }
    n = n.return;
  }
  if (It = e, kt = e = Yr(e.current, null), Ot = ln = t, Tt = 0, Xs = null, jp = Tu = To = 0, Jt = ks = null, go !== null) {
    for (t = 0; t < go.length; t++) if (n = go[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    go = null;
  }
  return e;
}
function Bv(e, t) {
  do {
    var n = kt;
    try {
      if (vp(), ya.current = Qa, Ya) {
        for (var r = ct.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ya = !1;
      }
      if (Eo = 0, Pt = Et = ct = null, ws = !1, Gs = 0, $p.current = null, n === null || n.return === null) {
        Tt = 1, Xs = t, kt = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Ot, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = l, h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var g = c.alternate;
            g ? (c.updateQueue = g.updateQueue, c.memoizedState = g.memoizedState, c.lanes = g.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var d = Mm(s);
          if (d !== null) {
            d.flags &= -257, $m(d, s, l, i, t), d.mode & 1 && Im(i, u, t), t = d, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Im(i, u, t), Bp();
              break e;
            }
            a = Error(V(426));
          }
        } else if (lt && l.mode & 1) {
          var C = Mm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), $m(C, s, l, i, t), gp(wi(a, l));
            break e;
          }
        }
        i = a = wi(a, l), Tt !== 4 && (Tt = 2), ks === null ? ks = [i] : ks.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = xv(i, a, t);
              Cm(i, m);
              break e;
            case 1:
              l = a;
              var p = i.type, x = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Kr === null || !Kr.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = bv(i, l, t);
                Cm(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _v(n);
    } catch (E) {
      t = E, kt === n && n !== null && (kt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lv() {
  var e = Xa.current;
  return Xa.current = Qa, e === null ? Qa : e;
}
function Bp() {
  (Tt === 0 || Tt === 3 || Tt === 2) && (Tt = 4), It === null || !(To & 268435455) && !(Tu & 268435455) || Lr(It, Ot);
}
function Za(e, t) {
  var n = Ne;
  Ne |= 2;
  var r = Lv();
  (It !== e || Ot !== t) && (gr = null, xo(e, t));
  do
    try {
      Sw();
      break;
    } catch (o) {
      Bv(e, o);
    }
  while (!0);
  if (vp(), Ne = n, Xa.current = r, kt !== null) throw Error(V(261));
  return It = null, Ot = 0, Tt;
}
function Sw() {
  for (; kt !== null; ) zv(kt);
}
function ww() {
  for (; kt !== null && !Gb(); ) zv(kt);
}
function zv(e) {
  var t = Dv(e.alternate, e, ln);
  e.memoizedProps = e.pendingProps, t === null ? _v(e) : kt = t, $p.current = null;
}
function _v(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = mw(n, t), n !== null) {
        n.flags &= 32767, kt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Tt = 6, kt = null;
        return;
      }
    } else if (n = hw(n, t, ln), n !== null) {
      kt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      kt = t;
      return;
    }
    kt = t = e;
  } while (t !== null);
  Tt === 0 && (Tt = 5);
}
function po(e, t, n) {
  var r = Ve, o = Tn.transition;
  try {
    Tn.transition = null, Ve = 1, Cw(e, t, n, r);
  } finally {
    Tn.transition = o, Ve = r;
  }
  return null;
}
function Cw(e, t, n, r) {
  do
    pi();
  while (_r !== null);
  if (Ne & 6) throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (rS(e, i), e === It && (kt = It = null, Ot = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Wl || (Wl = !0, Wv(Na, function() {
    return pi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Tn.transition, Tn.transition = null;
    var s = Ve;
    Ve = 1;
    var l = Ne;
    Ne |= 4, $p.current = null, yw(e, n), Av(n, e), US(Yd), Ba = !!Gd, Yd = Gd = null, e.current = n, vw(n), Yb(), Ne = l, Ve = s, Tn.transition = i;
  } else e.current = n;
  if (Wl && (Wl = !1, _r = e, Ja = o), i = e.pendingLanes, i === 0 && (Kr = null), qb(n.stateNode), nn(e, vt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (qa) throw qa = !1, e = mf, mf = null, e;
  return Ja & 1 && e.tag !== 0 && pi(), i = e.pendingLanes, i & 1 ? e === gf ? Es++ : (Es = 0, gf = e) : Es = 0, no(), null;
}
function pi() {
  if (_r !== null) {
    var e = x0(Ja), t = Tn.transition, n = Ve;
    try {
      if (Tn.transition = null, Ve = 16 > e ? 16 : e, _r === null) var r = !1;
      else {
        if (e = _r, _r = null, Ja = 0, Ne & 6) throw Error(V(331));
        var o = Ne;
        for (Ne |= 4, Z = e.current; Z !== null; ) {
          var i = Z, s = i.child;
          if (Z.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (Z = u; Z !== null; ) {
                  var c = Z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cs(8, c, i);
                  }
                  var h = c.child;
                  if (h !== null) h.return = c, Z = h;
                  else for (; Z !== null; ) {
                    c = Z;
                    var g = c.sibling, d = c.return;
                    if (Mv(c), c === u) {
                      Z = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = d, Z = g;
                      break;
                    }
                    Z = d;
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
                Cs(9, i, i.return);
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
                  Eu(9, l);
              }
            } catch (E) {
              mt(l, l.return, E);
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
        if (Ne = o, no(), rr && typeof rr.onPostCommitFiberRoot == "function") try {
          rr.onPostCommitFiberRoot(yu, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Ve = n, Tn.transition = t;
    }
  }
  return !1;
}
function Vm(e, t, n) {
  t = wi(n, t), t = xv(e, t, 1), e = Hr(e, t, 1), t = Qt(), e !== null && (ul(e, 1, t), nn(e, t));
}
function mt(e, t, n) {
  if (e.tag === 3) Vm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Vm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kr === null || !Kr.has(r))) {
        e = wi(n, e), e = bv(t, e, 1), t = Hr(t, e, 1), e = Qt(), t !== null && (ul(t, 1, e), nn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function kw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qt(), e.pingedLanes |= e.suspendedLanes & n, It === e && (Ot & n) === n && (Tt === 4 || Tt === 3 && (Ot & 130023424) === Ot && 500 > vt() - Ap ? xo(e, 0) : jp |= n), nn(e, t);
}
function Fv(e, t) {
  t === 0 && (e.mode & 1 ? (t = jl, jl <<= 1, !(jl & 130023424) && (jl = 4194304)) : t = 1);
  var n = Qt();
  e = Tr(e, t), e !== null && (ul(e, t, n), nn(e, n));
}
function Ew(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Fv(e, n);
}
function Tw(e, t) {
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
  r !== null && r.delete(t), Fv(e, n);
}
var Dv;
Dv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || en.current) Zt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Zt = !1, pw(e, t, n);
    Zt = !!(e.flags & 131072);
  }
  else Zt = !1, lt && t.flags & 1048576 && H0(t, Ua, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      xa(e, t), e = t.pendingProps;
      var o = vi(t, Wt.current);
      fi(t, n), o = Tp(null, t, r, e, o, n);
      var i = Rp();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tn(r) ? (i = !0, Da(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Sp(t), o.updater = ku, t.stateNode = o, o._reactInternals = t, rf(t, r, e, n), t = lf(null, t, r, !0, i, n)) : (t.tag = 0, lt && i && hp(t), Gt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (xa(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Pw(r), e = _n(r, e), o) {
          case 0:
            t = sf(null, t, r, e, n);
            break e;
          case 1:
            t = Nm(null, t, r, e, n);
            break e;
          case 11:
            t = jm(null, t, r, e, n);
            break e;
          case 14:
            t = Am(null, t, r, _n(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), sf(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), Nm(e, t, r, o, n);
    case 3:
      e: {
        if (kv(t), e === null) throw Error(V(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, q0(e, t), Ka(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = wi(Error(V(423)), t), t = Om(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = wi(Error(V(424)), t), t = Om(e, t, r, n, o);
          break e;
        } else for (cn = Vr(t.stateNode.containerInfo.firstChild), dn = t, lt = !0, Dn = null, n = Q0(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (xi(), r === o) {
            t = Rr(e, t, n);
            break e;
          }
          Gt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return J0(t), e === null && ef(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Qd(r, o) ? s = null : i !== null && Qd(r, i) && (t.flags |= 32), Cv(e, t), Gt(e, t, s, n), t.child;
    case 6:
      return e === null && ef(t), null;
    case 13:
      return Ev(e, t, n);
    case 4:
      return wp(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = bi(t, null, r, n) : Gt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), jm(e, t, r, o, n);
    case 7:
      return Gt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Gt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Gt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ze(Va, r._currentValue), r._currentValue = s, i !== null) if (Vn(i.value, s)) {
          if (i.children === o.children && !en.current) {
            t = Rr(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Cr(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), tf(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), tf(s, n, t), s = i.sibling;
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
        Gt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, fi(t, n), o = Pn(o), r = r(o), t.flags |= 1, Gt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = _n(r, t.pendingProps), o = _n(r.type, o), Am(e, t, r, o, n);
    case 15:
      return Sv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), xa(e, t), t.tag = 1, tn(r) ? (e = !0, Da(t)) : e = !1, fi(t, n), vv(t, r, o), rf(t, r, o, n), lf(null, t, r, !0, e, n);
    case 19:
      return Tv(e, t, n);
    case 22:
      return wv(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function Wv(e, t) {
  return m0(e, t);
}
function Rw(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function En(e, t, n, r) {
  return new Rw(e, t, n, r);
}
function Lp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Pw(e) {
  if (typeof e == "function") return Lp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === np) return 11;
    if (e === rp) return 14;
  }
  return 2;
}
function Yr(e, t) {
  var n = e.alternate;
  return n === null ? (n = En(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function wa(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") Lp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case qo:
      return bo(n.children, o, i, t);
    case tp:
      s = 8, o |= 8;
      break;
    case Rd:
      return e = En(12, n, t, o | 2), e.elementType = Rd, e.lanes = i, e;
    case Pd:
      return e = En(13, n, t, o), e.elementType = Pd, e.lanes = i, e;
    case Id:
      return e = En(19, n, t, o), e.elementType = Id, e.lanes = i, e;
    case Jy:
      return Ru(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Xy:
          s = 10;
          break e;
        case qy:
          s = 9;
          break e;
        case np:
          s = 11;
          break e;
        case rp:
          s = 14;
          break e;
        case Nr:
          s = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = En(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function bo(e, t, n, r) {
  return e = En(7, e, r, t), e.lanes = n, e;
}
function Ru(e, t, n, r) {
  return e = En(22, e, r, t), e.elementType = Jy, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function id(e, t, n) {
  return e = En(6, e, null, t), e.lanes = n, e;
}
function sd(e, t, n) {
  return t = En(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Iw(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fc(0), this.expirationTimes = Fc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fc(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function zp(e, t, n, r, o, i, s, l, a) {
  return e = new Iw(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = En(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Sp(i), e;
}
function Mw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Xo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Uv(e) {
  if (!e) return qr;
  e = e._reactInternals;
  e: {
    if (Ao(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (tn(t.type)) {
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
    if (tn(n)) return U0(e, n, t);
  }
  return t;
}
function Vv(e, t, n, r, o, i, s, l, a) {
  return e = zp(n, r, !0, e, o, i, s, l, a), e.context = Uv(null), n = e.current, r = Qt(), o = Gr(n), i = Cr(r, o), i.callback = t ?? null, Hr(n, i, o), e.current.lanes = o, ul(e, o, r), nn(e, r), e;
}
function Pu(e, t, n, r) {
  var o = t.current, i = Qt(), s = Gr(o);
  return n = Uv(n), t.context === null ? t.context = n : t.pendingContext = n, t = Cr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Hr(o, t, s), e !== null && (Un(e, o, s, i), ga(e, o, s)), s;
}
function eu(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _p(e, t) {
  Hm(e, t), (e = e.alternate) && Hm(e, t);
}
function $w() {
  return null;
}
var Hv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Fp(e) {
  this._internalRoot = e;
}
Iu.prototype.render = Fp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  Pu(e, t, null, null);
};
Iu.prototype.unmount = Fp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ro(function() {
      Pu(null, e, null, null);
    }), t[Er] = null;
  }
};
function Iu(e) {
  this._internalRoot = e;
}
Iu.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = w0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Br.length && t !== 0 && t < Br[n].priority; n++) ;
    Br.splice(n, 0, e), n === 0 && k0(e);
  }
};
function Dp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Mu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Km() {
}
function jw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = eu(s);
        i.call(u);
      };
    }
    var s = Vv(t, r, e, 0, null, !1, !1, "", Km);
    return e._reactRootContainer = s, e[Er] = s.current, Ws(e.nodeType === 8 ? e.parentNode : e), Ro(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = eu(a);
      l.call(u);
    };
  }
  var a = zp(e, 0, !1, null, null, !1, !1, "", Km);
  return e._reactRootContainer = a, e[Er] = a.current, Ws(e.nodeType === 8 ? e.parentNode : e), Ro(function() {
    Pu(t, a, n, r);
  }), a;
}
function $u(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = eu(s);
        l.call(a);
      };
    }
    Pu(t, s, e, o);
  } else s = jw(n, t, e, o, r);
  return eu(s);
}
b0 = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ps(t.pendingLanes);
        n !== 0 && (sp(t, n | 1), nn(t, vt()), !(Ne & 6) && (Ci = vt() + 500, no()));
      }
      break;
    case 13:
      Ro(function() {
        var r = Tr(e, 1);
        if (r !== null) {
          var o = Qt();
          Un(r, e, 1, o);
        }
      }), _p(e, 1);
  }
};
lp = function(e) {
  if (e.tag === 13) {
    var t = Tr(e, 134217728);
    if (t !== null) {
      var n = Qt();
      Un(t, e, 134217728, n);
    }
    _p(e, 134217728);
  }
};
S0 = function(e) {
  if (e.tag === 13) {
    var t = Gr(e), n = Tr(e, t);
    if (n !== null) {
      var r = Qt();
      Un(n, e, t, r);
    }
    _p(e, t);
  }
};
w0 = function() {
  return Ve;
};
C0 = function(e, t) {
  var n = Ve;
  try {
    return Ve = e, t();
  } finally {
    Ve = n;
  }
};
_d = function(e, t, n) {
  switch (t) {
    case "input":
      if (jd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Su(r);
            if (!o) throw Error(V(90));
            e0(r), jd(r, o);
          }
        }
      }
      break;
    case "textarea":
      n0(e, n);
      break;
    case "select":
      t = n.value, t != null && ai(e, !!n.multiple, t, !1);
  }
};
u0 = Np;
c0 = Ro;
var Aw = { usingClientEntryPoint: !1, Events: [dl, ti, Su, l0, a0, Np] }, Ji = { findFiberByHostInstance: mo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Nw = { bundleType: Ji.bundleType, version: Ji.version, rendererPackageName: Ji.rendererPackageName, rendererConfig: Ji.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $r.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = p0(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ji.findFiberByHostInstance || $w, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ul.isDisabled && Ul.supportsFiber) try {
    yu = Ul.inject(Nw), rr = Ul;
  } catch {
  }
}
mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Aw;
mn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Dp(t)) throw Error(V(200));
  return Mw(e, t, null, n);
};
mn.createRoot = function(e, t) {
  if (!Dp(e)) throw Error(V(299));
  var n = !1, r = "", o = Hv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = zp(e, 1, !1, null, null, n, !1, r, o), e[Er] = t.current, Ws(e.nodeType === 8 ? e.parentNode : e), new Fp(t);
};
mn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = p0(t), e = e === null ? null : e.stateNode, e;
};
mn.flushSync = function(e) {
  return Ro(e);
};
mn.hydrate = function(e, t, n) {
  if (!Mu(t)) throw Error(V(200));
  return $u(null, e, t, !0, n);
};
mn.hydrateRoot = function(e, t, n) {
  if (!Dp(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Hv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Vv(t, null, e, 1, n ?? null, o, !1, i, s), e[Er] = t.current, Ws(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Iu(t);
};
mn.render = function(e, t, n) {
  if (!Mu(t)) throw Error(V(200));
  return $u(null, e, t, !1, n);
};
mn.unmountComponentAtNode = function(e) {
  if (!Mu(e)) throw Error(V(40));
  return e._reactRootContainer ? (Ro(function() {
    $u(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Er] = null;
    });
  }), !0) : !1;
};
mn.unstable_batchedUpdates = Np;
mn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Mu(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return $u(e, t, n, !1, r);
};
mn.version = "18.3.1-next-f1338f8080-20240426";
function Kv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv);
    } catch (e) {
      console.error(e);
    }
}
Kv(), Ky.exports = mn;
var Gv = Ky.exports, Yv, Gm = Gv;
Yv = Gm.createRoot, Gm.hydrateRoot;
const qs = {
  black: "#000",
  white: "#fff"
}, Vo = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ho = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ko = {
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
}, Yo = {
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
}, Ow = {
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
function Pr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const ir = "$$material";
function xf() {
  return xf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xf.apply(null, arguments);
}
function Bw(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Lw(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var zw = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Lw(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Bw(o);
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
}(), Ft = "-ms-", tu = "-moz-", Be = "-webkit-", Qv = "comm", Wp = "rule", Up = "decl", _w = "@import", Xv = "@keyframes", Fw = "@layer", Dw = Math.abs, ju = String.fromCharCode, Ww = Object.assign;
function Uw(e, t) {
  return At(e, 0) ^ 45 ? (((t << 2 ^ At(e, 0)) << 2 ^ At(e, 1)) << 2 ^ At(e, 2)) << 2 ^ At(e, 3) : 0;
}
function qv(e) {
  return e.trim();
}
function Vw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Le(e, t, n) {
  return e.replace(t, n);
}
function bf(e, t) {
  return e.indexOf(t);
}
function At(e, t) {
  return e.charCodeAt(t) | 0;
}
function Js(e, t, n) {
  return e.slice(t, n);
}
function Jn(e) {
  return e.length;
}
function Vp(e) {
  return e.length;
}
function Vl(e, t) {
  return t.push(e), e;
}
function Hw(e, t) {
  return e.map(t).join("");
}
var Au = 1, ki = 1, Jv = 0, sn = 0, Ct = 0, _i = "";
function Nu(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Au, column: ki, length: s, return: "" };
}
function es(e, t) {
  return Ww(Nu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Kw() {
  return Ct;
}
function Gw() {
  return Ct = sn > 0 ? At(_i, --sn) : 0, ki--, Ct === 10 && (ki = 1, Au--), Ct;
}
function fn() {
  return Ct = sn < Jv ? At(_i, sn++) : 0, ki++, Ct === 10 && (ki = 1, Au++), Ct;
}
function sr() {
  return At(_i, sn);
}
function Ca() {
  return sn;
}
function pl(e, t) {
  return Js(_i, e, t);
}
function Zs(e) {
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
function Zv(e) {
  return Au = ki = 1, Jv = Jn(_i = e), sn = 0, [];
}
function e1(e) {
  return _i = "", e;
}
function ka(e) {
  return qv(pl(sn - 1, Sf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Yw(e) {
  for (; (Ct = sr()) && Ct < 33; )
    fn();
  return Zs(e) > 2 || Zs(Ct) > 3 ? "" : " ";
}
function Qw(e, t) {
  for (; --t && fn() && !(Ct < 48 || Ct > 102 || Ct > 57 && Ct < 65 || Ct > 70 && Ct < 97); )
    ;
  return pl(e, Ca() + (t < 6 && sr() == 32 && fn() == 32));
}
function Sf(e) {
  for (; fn(); )
    switch (Ct) {
      case e:
        return sn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sf(Ct);
        break;
      case 40:
        e === 41 && Sf(e);
        break;
      case 92:
        fn();
        break;
    }
  return sn;
}
function Xw(e, t) {
  for (; fn() && e + Ct !== 57; )
    if (e + Ct === 84 && sr() === 47)
      break;
  return "/*" + pl(t, sn - 1) + "*" + ju(e === 47 ? e : fn());
}
function qw(e) {
  for (; !Zs(sr()); )
    fn();
  return pl(e, sn);
}
function Jw(e) {
  return e1(Ea("", null, null, null, [""], e = Zv(e), 0, [0], e));
}
function Ea(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, c = 0, h = s, g = 0, d = 0, v = 0, w = 1, C = 1, m = 1, p = 0, x = "", S = o, E = i, k = r, T = x; C; )
    switch (v = p, p = fn()) {
      case 40:
        if (v != 108 && At(T, h - 1) == 58) {
          bf(T += Le(ka(p), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += ka(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Yw(v);
        break;
      case 92:
        T += Qw(Ca() - 1, 7);
        continue;
      case 47:
        switch (sr()) {
          case 42:
          case 47:
            Vl(Zw(Xw(fn(), Ca()), t, n), a);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * w:
        l[u++] = Jn(T) * m;
      case 125 * w:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            C = 0;
          case 59 + c:
            m == -1 && (T = Le(T, /\f/g, "")), d > 0 && Jn(T) - h && Vl(d > 32 ? Qm(T + ";", r, n, h - 1) : Qm(Le(T, " ", "") + ";", r, n, h - 2), a);
            break;
          case 59:
            T += ";";
          default:
            if (Vl(k = Ym(T, t, n, u, c, o, l, x, S = [], E = [], h), i), p === 123)
              if (c === 0)
                Ea(T, t, k, k, S, i, h, l, E);
              else
                switch (g === 99 && At(T, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ea(e, k, k, r && Vl(Ym(e, k, k, 0, 0, o, l, x, o, S = [], h), E), o, E, h, l, r ? S : E);
                    break;
                  default:
                    Ea(T, k, k, k, [""], E, 0, l, E);
                }
        }
        u = c = d = 0, w = m = 1, x = T = "", h = s;
        break;
      case 58:
        h = 1 + Jn(T), d = v;
      default:
        if (w < 1) {
          if (p == 123)
            --w;
          else if (p == 125 && w++ == 0 && Gw() == 125)
            continue;
        }
        switch (T += ju(p), p * w) {
          case 38:
            m = c > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[u++] = (Jn(T) - 1) * m, m = 1;
            break;
          case 64:
            sr() === 45 && (T += ka(fn())), g = sr(), c = h = Jn(x = T += qw(Ca())), p++;
            break;
          case 45:
            v === 45 && Jn(T) == 2 && (w = 0);
        }
    }
  return i;
}
function Ym(e, t, n, r, o, i, s, l, a, u, c) {
  for (var h = o - 1, g = o === 0 ? i : [""], d = Vp(g), v = 0, w = 0, C = 0; v < r; ++v)
    for (var m = 0, p = Js(e, h + 1, h = Dw(w = s[v])), x = e; m < d; ++m)
      (x = qv(w > 0 ? g[m] + " " + p : Le(p, /&\f/g, g[m]))) && (a[C++] = x);
  return Nu(e, t, n, o === 0 ? Wp : l, a, u, c);
}
function Zw(e, t, n) {
  return Nu(e, t, n, Qv, ju(Kw()), Js(e, 2, -2), 0);
}
function Qm(e, t, n, r) {
  return Nu(e, t, n, Up, Js(e, 0, r), Js(e, r + 1, -1), r);
}
function hi(e, t) {
  for (var n = "", r = Vp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function eC(e, t, n, r) {
  switch (e.type) {
    case Fw:
      if (e.children.length) break;
    case _w:
    case Up:
      return e.return = e.return || e.value;
    case Qv:
      return "";
    case Xv:
      return e.return = e.value + "{" + hi(e.children, r) + "}";
    case Wp:
      e.value = e.props.join(",");
  }
  return Jn(n = hi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function tC(e) {
  var t = Vp(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function nC(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function t1(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var rC = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = sr(), o === 38 && i === 12 && (n[r] = 1), !Zs(i); )
    fn();
  return pl(t, sn);
}, oC = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Zs(o)) {
      case 0:
        o === 38 && sr() === 12 && (n[r] = 1), t[r] += rC(sn - 1, n, r);
        break;
      case 2:
        t[r] += ka(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = sr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ju(o);
    }
  while (o = fn());
  return t;
}, iC = function(t, n) {
  return e1(oC(Zv(t), n));
}, Xm = /* @__PURE__ */ new WeakMap(), sC = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Xm.get(r)) && !o) {
      Xm.set(t, !0);
      for (var i = [], s = iC(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var c = 0; c < l.length; c++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[c]) : l[c] + " " + s[a];
    }
  }
}, lC = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function n1(e, t) {
  switch (Uw(e, t)) {
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
      return Be + e + tu + e + Ft + e + e;
    case 6828:
    case 4268:
      return Be + e + Ft + e + e;
    case 6165:
      return Be + e + Ft + "flex-" + e + e;
    case 5187:
      return Be + e + Le(e, /(\w+).+(:[^]+)/, Be + "box-$1$2" + Ft + "flex-$1$2") + e;
    case 5443:
      return Be + e + Ft + "flex-item-" + Le(e, /flex-|-self/, "") + e;
    case 4675:
      return Be + e + Ft + "flex-line-pack" + Le(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Be + e + Ft + Le(e, "shrink", "negative") + e;
    case 5292:
      return Be + e + Ft + Le(e, "basis", "preferred-size") + e;
    case 6060:
      return Be + "box-" + Le(e, "-grow", "") + Be + e + Ft + Le(e, "grow", "positive") + e;
    case 4554:
      return Be + Le(e, /([^-])(transform)/g, "$1" + Be + "$2") + e;
    case 6187:
      return Le(Le(Le(e, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Le(e, /(image-set\([^]*)/, Be + "$1$`$1");
    case 4968:
      return Le(Le(e, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + Ft + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Le(e, /(.+)-inline(.+)/, Be + "$1$2") + e;
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
      if (Jn(e) - 1 - t > 6) switch (At(e, t + 1)) {
        case 109:
          if (At(e, t + 4) !== 45) break;
        case 102:
          return Le(e, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + tu + (At(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~bf(e, "stretch") ? n1(Le(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (At(e, t + 1) !== 115) break;
    case 6444:
      switch (At(e, Jn(e) - 3 - (~bf(e, "!important") && 10))) {
        case 107:
          return Le(e, ":", ":" + Be) + e;
        case 101:
          return Le(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (At(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + Ft + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (At(e, t + 11)) {
        case 114:
          return Be + e + Ft + Le(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Be + e + Ft + Le(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Be + e + Ft + Le(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Be + e + Ft + e + e;
  }
  return e;
}
var aC = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Up:
      t.return = n1(t.value, t.length);
      break;
    case Xv:
      return hi([es(t, {
        value: Le(t.value, "@", "@" + Be)
      })], o);
    case Wp:
      if (t.length) return Hw(t.props, function(i) {
        switch (Vw(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return hi([es(t, {
              props: [Le(i, /:(read-\w+)/, ":" + tu + "$1")]
            })], o);
          case "::placeholder":
            return hi([es(t, {
              props: [Le(i, /:(plac\w+)/, ":" + Be + "input-$1")]
            }), es(t, {
              props: [Le(i, /:(plac\w+)/, ":" + tu + "$1")]
            }), es(t, {
              props: [Le(i, /:(plac\w+)/, Ft + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, uC = [aC], cC = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(w) {
      var C = w.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || uC, i = {}, s, l = [];
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
  var a, u = [sC, lC];
  {
    var c, h = [eC, nC(function(w) {
      c.insert(w);
    })], g = tC(u.concat(o, h)), d = function(C) {
      return hi(Jw(C), g);
    };
    a = function(C, m, p, x) {
      c = p, d(C ? C + "{" + m.styles + "}" : m.styles), x && (v.inserted[m.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new zw({
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
}, r1 = { exports: {} }, He = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t = typeof Symbol == "function" && Symbol.for, Hp = $t ? Symbol.for("react.element") : 60103, Kp = $t ? Symbol.for("react.portal") : 60106, Ou = $t ? Symbol.for("react.fragment") : 60107, Bu = $t ? Symbol.for("react.strict_mode") : 60108, Lu = $t ? Symbol.for("react.profiler") : 60114, zu = $t ? Symbol.for("react.provider") : 60109, _u = $t ? Symbol.for("react.context") : 60110, Gp = $t ? Symbol.for("react.async_mode") : 60111, Fu = $t ? Symbol.for("react.concurrent_mode") : 60111, Du = $t ? Symbol.for("react.forward_ref") : 60112, Wu = $t ? Symbol.for("react.suspense") : 60113, dC = $t ? Symbol.for("react.suspense_list") : 60120, Uu = $t ? Symbol.for("react.memo") : 60115, Vu = $t ? Symbol.for("react.lazy") : 60116, fC = $t ? Symbol.for("react.block") : 60121, pC = $t ? Symbol.for("react.fundamental") : 60117, hC = $t ? Symbol.for("react.responder") : 60118, mC = $t ? Symbol.for("react.scope") : 60119;
function yn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Hp:
        switch (e = e.type, e) {
          case Gp:
          case Fu:
          case Ou:
          case Lu:
          case Bu:
          case Wu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case _u:
              case Du:
              case Vu:
              case Uu:
              case zu:
                return e;
              default:
                return t;
            }
        }
      case Kp:
        return t;
    }
  }
}
function o1(e) {
  return yn(e) === Fu;
}
He.AsyncMode = Gp;
He.ConcurrentMode = Fu;
He.ContextConsumer = _u;
He.ContextProvider = zu;
He.Element = Hp;
He.ForwardRef = Du;
He.Fragment = Ou;
He.Lazy = Vu;
He.Memo = Uu;
He.Portal = Kp;
He.Profiler = Lu;
He.StrictMode = Bu;
He.Suspense = Wu;
He.isAsyncMode = function(e) {
  return o1(e) || yn(e) === Gp;
};
He.isConcurrentMode = o1;
He.isContextConsumer = function(e) {
  return yn(e) === _u;
};
He.isContextProvider = function(e) {
  return yn(e) === zu;
};
He.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hp;
};
He.isForwardRef = function(e) {
  return yn(e) === Du;
};
He.isFragment = function(e) {
  return yn(e) === Ou;
};
He.isLazy = function(e) {
  return yn(e) === Vu;
};
He.isMemo = function(e) {
  return yn(e) === Uu;
};
He.isPortal = function(e) {
  return yn(e) === Kp;
};
He.isProfiler = function(e) {
  return yn(e) === Lu;
};
He.isStrictMode = function(e) {
  return yn(e) === Bu;
};
He.isSuspense = function(e) {
  return yn(e) === Wu;
};
He.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ou || e === Fu || e === Lu || e === Bu || e === Wu || e === dC || typeof e == "object" && e !== null && (e.$$typeof === Vu || e.$$typeof === Uu || e.$$typeof === zu || e.$$typeof === _u || e.$$typeof === Du || e.$$typeof === pC || e.$$typeof === hC || e.$$typeof === mC || e.$$typeof === fC);
};
He.typeOf = yn;
r1.exports = He;
var gC = r1.exports, i1 = gC, yC = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vC = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, s1 = {};
s1[i1.ForwardRef] = yC;
s1[i1.Memo] = vC;
var xC = !0;
function l1(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Yp = function(t, n, r) {
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
  xC === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Qp = function(t, n, r) {
  Yp(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function bC(e) {
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
var SC = {
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
}, wC = /[A-Z]|^ms/g, CC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, a1 = function(t) {
  return t.charCodeAt(1) === 45;
}, qm = function(t) {
  return t != null && typeof t != "boolean";
}, ld = /* @__PURE__ */ t1(function(e) {
  return a1(e) ? e : e.replace(wC, "-$&").toLowerCase();
}), Jm = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(CC, function(r, o, i) {
          return Zn = {
            name: o,
            styles: i,
            next: Zn
          }, o;
        });
  }
  return SC[t] !== 1 && !a1(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function el(e, t, n) {
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
        return Zn = {
          name: o.name,
          styles: o.styles,
          next: Zn
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Zn = {
              name: s.name,
              styles: s.styles,
              next: Zn
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return kC(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = Zn, u = n(e);
        return Zn = a, el(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null)
    return c;
  var h = t[c];
  return h !== void 0 ? h : c;
}
function kC(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += el(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : qm(l) && (r += ld(i) + ":" + Jm(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          qm(s[a]) && (r += ld(i) + ":" + Jm(i, s[a]) + ";");
      else {
        var u = el(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += ld(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var Zm = /label:\s*([^\s;{]+)\s*(;|$)/g, Zn;
function hl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Zn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += el(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += el(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  Zm.lastIndex = 0;
  for (var u = "", c; (c = Zm.exec(o)) !== null; )
    u += "-" + c[1];
  var h = bC(o) + u;
  return {
    name: h,
    styles: o,
    next: Zn
  };
}
var EC = function(t) {
  return t();
}, u1 = Ma.useInsertionEffect ? Ma.useInsertionEffect : !1, c1 = u1 || EC, eg = u1 || y.useLayoutEffect, d1 = /* @__PURE__ */ y.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ cC({
    key: "css"
  }) : null
);
d1.Provider;
var Xp = function(t) {
  return /* @__PURE__ */ y.forwardRef(function(n, r) {
    var o = y.useContext(d1);
    return t(n, o, r);
  });
}, ml = /* @__PURE__ */ y.createContext({}), qp = {}.hasOwnProperty, wf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", TC = function(t, n) {
  var r = {};
  for (var o in n)
    qp.call(n, o) && (r[o] = n[o]);
  return r[wf] = t, r;
}, RC = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Yp(n, r, o), c1(function() {
    return Qp(n, r, o);
  }), null;
}, PC = /* @__PURE__ */ Xp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[wf], i = [r], s = "";
  typeof e.className == "string" ? s = l1(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = hl(i, void 0, y.useContext(ml));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e)
    qp.call(e, u) && u !== "css" && u !== wf && (a[u] = e[u]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(RC, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ y.createElement(o, a));
}), IC = PC, tg = function(t, n) {
  var r = arguments;
  if (n == null || !qp.call(n, "css"))
    return y.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = IC, i[1] = TC(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return y.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(tg || (tg = {}));
var MC = /* @__PURE__ */ Xp(function(e, t) {
  var n = e.styles, r = hl([n], void 0, y.useContext(ml)), o = y.useRef();
  return eg(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), eg(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Qp(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function tl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return hl(t);
}
function gl() {
  var e = tl.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var $C = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jC = /* @__PURE__ */ t1(
  function(e) {
    return $C.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), AC = jC, NC = function(t) {
  return t !== "theme";
}, ng = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? AC : NC;
}, rg = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, OC = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Yp(n, r, o), c1(function() {
    return Qp(n, r, o);
  }), null;
}, BC = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = rg(t, n, r), a = l || ng(o), u = !a("as");
  return function() {
    var c = arguments, h = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      h.push.apply(h, c);
    else {
      var g = c[0];
      h.push(g[0]);
      for (var d = c.length, v = 1; v < d; v++)
        h.push(c[v], g[v]);
    }
    var w = Xp(function(C, m, p) {
      var x = u && C.as || o, S = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var T in C)
          k[T] = C[T];
        k.theme = y.useContext(ml);
      }
      typeof C.className == "string" ? S = l1(m.registered, E, C.className) : C.className != null && (S = C.className + " ");
      var R = hl(h.concat(E), m.registered, k);
      S += m.key + "-" + R.name, s !== void 0 && (S += " " + s);
      var I = u && l === void 0 ? ng(x) : a, A = {};
      for (var M in C)
        u && M === "as" || I(M) && (A[M] = C[M]);
      return A.className = S, p && (A.ref = p), /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(OC, {
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
      var p = e(C, xf({}, n, m, {
        shouldForwardProp: rg(w, m, !0)
      }));
      return p.apply(void 0, h);
    }, w;
  };
}, LC = [
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
], Cf = BC.bind(null);
LC.forEach(function(e) {
  Cf[e] = Cf(e);
});
function zC(e) {
  return e == null || Object.keys(e).length === 0;
}
function f1(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(zC(o) ? n : o) : t;
  return /* @__PURE__ */ f.jsx(MC, {
    styles: r
  });
}
function p1(e, t) {
  return Cf(e, t);
}
function _C(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const og = [];
function Qr(e) {
  return og[0] = e, hl(og);
}
var h1 = { exports: {} }, Qe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jp = Symbol.for("react.transitional.element"), Zp = Symbol.for("react.portal"), Hu = Symbol.for("react.fragment"), Ku = Symbol.for("react.strict_mode"), Gu = Symbol.for("react.profiler"), Yu = Symbol.for("react.consumer"), Qu = Symbol.for("react.context"), Xu = Symbol.for("react.forward_ref"), qu = Symbol.for("react.suspense"), Ju = Symbol.for("react.suspense_list"), Zu = Symbol.for("react.memo"), ec = Symbol.for("react.lazy"), FC = Symbol.for("react.view_transition"), DC = Symbol.for("react.client.reference");
function jn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Jp:
        switch (e = e.type, e) {
          case Hu:
          case Gu:
          case Ku:
          case qu:
          case Ju:
          case FC:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Qu:
              case Xu:
              case ec:
              case Zu:
                return e;
              case Yu:
                return e;
              default:
                return t;
            }
        }
      case Zp:
        return t;
    }
  }
}
Qe.ContextConsumer = Yu;
Qe.ContextProvider = Qu;
Qe.Element = Jp;
Qe.ForwardRef = Xu;
Qe.Fragment = Hu;
Qe.Lazy = ec;
Qe.Memo = Zu;
Qe.Portal = Zp;
Qe.Profiler = Gu;
Qe.StrictMode = Ku;
Qe.Suspense = qu;
Qe.SuspenseList = Ju;
Qe.isContextConsumer = function(e) {
  return jn(e) === Yu;
};
Qe.isContextProvider = function(e) {
  return jn(e) === Qu;
};
Qe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jp;
};
Qe.isForwardRef = function(e) {
  return jn(e) === Xu;
};
Qe.isFragment = function(e) {
  return jn(e) === Hu;
};
Qe.isLazy = function(e) {
  return jn(e) === ec;
};
Qe.isMemo = function(e) {
  return jn(e) === Zu;
};
Qe.isPortal = function(e) {
  return jn(e) === Zp;
};
Qe.isProfiler = function(e) {
  return jn(e) === Gu;
};
Qe.isStrictMode = function(e) {
  return jn(e) === Ku;
};
Qe.isSuspense = function(e) {
  return jn(e) === qu;
};
Qe.isSuspenseList = function(e) {
  return jn(e) === Ju;
};
Qe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Hu || e === Gu || e === Ku || e === qu || e === Ju || typeof e == "object" && e !== null && (e.$$typeof === ec || e.$$typeof === Zu || e.$$typeof === Qu || e.$$typeof === Yu || e.$$typeof === Xu || e.$$typeof === DC || e.getModuleId !== void 0);
};
Qe.typeOf = jn;
h1.exports = Qe;
var m1 = h1.exports;
function br(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function g1(e) {
  if (/* @__PURE__ */ y.isValidElement(e) || m1.isValidElementType(e) || !br(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = g1(e[n]);
  }), t;
}
function Mt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return br(e) && br(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ y.isValidElement(t[o]) || m1.isValidElementType(t[o]) ? r[o] = t[o] : br(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && br(e[o]) ? r[o] = Mt(e[o], t[o], n) : n.clone ? r[o] = br(t[o]) ? g1(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const WC = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function y1(e) {
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
  } = e, i = WC(t), s = Object.keys(i);
  function l(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function a(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function u(d, v) {
    const w = s.indexOf(v);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(w !== -1 && typeof t[s[w]] == "number" ? t[s[w]] : v) - r / 100}${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : l(d);
  }
  function h(d) {
    const v = s.indexOf(d);
    return v === 0 ? l(s[1]) : v === s.length - 1 ? a(s[v]) : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  const g = [];
  for (let d = 0; d < s.length; d += 1)
    g.push(l(s[d]));
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: u,
    only: c,
    not: h,
    unit: n,
    internal_mediaKeys: g,
    ...o
  };
}
const ig = /min-width:\s*([0-9.]+)/;
function sg(e, t) {
  if (!e.containerQueries || !UC(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(ig)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(ig)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function UC(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function v1(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function VC(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function HC(e) {
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
const KC = {
  borderRadius: 4
};
function x1(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function mi(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return qC(t) ? t : JC(e) ? Ei(t) : n && r ? QC(e, t) : n !== r ? Ei(t) : ZC(e, t);
}
function GC(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Ei(e[t]);
  return r;
}
function YC(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Ei(e[n]));
  return t;
}
function QC(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Ei(t[r]);
  return e;
}
function XC(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function qC(e) {
  return typeof e != "object" || e === null;
}
function JC(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Ei(e) {
  return XC(e) ? Array.isArray(e) ? GC(e) : YC(e) : e;
}
function ZC(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = mi(e[n], t[n]) : e[n] = Ei(t[n]));
  return e;
}
const e2 = {}, tc = {
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
}, nu = y1({
  values: tc
}), t2 = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : tc[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Jr(e, t, n) {
  const r = {};
  return nc(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : mi(r, l);
  });
}
function nc(e, t, n, r) {
  if (t ?? (t = e2), Array.isArray(n)) {
    const o = t.breakpoints ?? nu;
    for (let i = 0; i < n.length; i += 1)
      ad(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? nu, i = o.values ?? tc;
    for (const s in n)
      if (v1(o.keys, s)) {
        const l = VC(t.containerQueries ? t : t2, s);
        l && ad(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        ad(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function ad(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function b1(e = nu) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function kf(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    x1(t[o]) && delete t[o];
  }
  return t;
}
function n2(e, ...t) {
  const r = [b1(e), ...t].reduce((o, i) => Mt(o, i), {});
  return kf(e, r);
}
function r2(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function ud(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || r2(t, n), i = Object.keys(o);
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
function o2(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (v1(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function ce(e) {
  if (typeof e != "string")
    throw new Error(Pr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function S1(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = rc(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function rc(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = lg(e.vars, o, r);
    if (i != null)
      return i;
  }
  return lg(e, o, r);
}
function lg(e, t, n = void 0) {
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
function bt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, u = rc(a, r) || {};
    return Jr(s, l, (h) => {
      const g = S1(u, o, h, t);
      return n === !1 ? g : {
        [n]: g
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const i2 = {
  internal_cache: {}
}, ru = {
  m: "margin",
  p: "padding"
}, ag = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ug = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, nl = {};
for (const e in ru)
  nl[e] = [ru[e]];
for (const e in ru)
  for (const t in ag) {
    const n = ru[e], r = ag[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    nl[e + t] = o;
  }
for (const e in ug)
  nl[e] = nl[ug[e]];
const eh = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), th = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...eh, ...th];
function yl(e, t, n, r) {
  const o = rc(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function oc(e) {
  return yl(e, "spacing", 8);
}
function Po(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const cg = [""];
function w1(e, t) {
  var i;
  const n = e.theme ?? i2, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? oc(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = nl[s] ?? (cg[0] = s, cg), a = e[s];
    nc(o, e.theme, a, (u, c) => {
      const h = u ? o[u] : o;
      for (let g = 0; g < l.length; g += 1)
        h[l[g]] = Po(r, c);
    });
  }
  return o;
}
function nh(e) {
  return w1(e, eh);
}
nh.propTypes = {};
nh.filterProps = eh;
const St = nh;
function rh(e) {
  return w1(e, th);
}
rh.propTypes = {};
rh.filterProps = th;
const wt = rh;
function C1(e = 8, t = oc({
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
function ic(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && mi(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Cn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function An(e, t) {
  return bt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const s2 = An("border", Cn), l2 = An("borderTop", Cn), a2 = An("borderRight", Cn), u2 = An("borderBottom", Cn), c2 = An("borderLeft", Cn), d2 = An("borderColor"), f2 = An("borderTopColor"), p2 = An("borderRightColor"), h2 = An("borderBottomColor"), m2 = An("borderLeftColor"), g2 = An("outline", Cn), y2 = An("outlineColor"), sc = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = yl(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Po(t, r)
    });
    return Jr(e, e.borderRadius, n);
  }
  return null;
};
sc.propTypes = {};
sc.filterProps = ["borderRadius"];
ic(s2, l2, a2, u2, c2, d2, f2, p2, h2, m2, sc, g2, y2);
const lc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = yl(e.theme, "spacing", 8), n = (r) => ({
      gap: Po(t, r)
    });
    return Jr(e, e.gap, n);
  }
  return null;
};
lc.propTypes = {};
lc.filterProps = ["gap"];
const ac = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = yl(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Po(t, r)
    });
    return Jr(e, e.columnGap, n);
  }
  return null;
};
ac.propTypes = {};
ac.filterProps = ["columnGap"];
const uc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = yl(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Po(t, r)
    });
    return Jr(e, e.rowGap, n);
  }
  return null;
};
uc.propTypes = {};
uc.filterProps = ["rowGap"];
const v2 = bt({
  prop: "gridColumn"
}), x2 = bt({
  prop: "gridRow"
}), b2 = bt({
  prop: "gridAutoFlow"
}), S2 = bt({
  prop: "gridAutoColumns"
}), w2 = bt({
  prop: "gridAutoRows"
}), C2 = bt({
  prop: "gridTemplateColumns"
}), k2 = bt({
  prop: "gridTemplateRows"
}), E2 = bt({
  prop: "gridTemplateAreas"
}), T2 = bt({
  prop: "gridArea"
});
ic(lc, ac, uc, v2, x2, b2, S2, w2, C2, k2, E2, T2);
function gi(e, t) {
  return t === "grey" ? t : e;
}
const R2 = bt({
  prop: "color",
  themeKey: "palette",
  transform: gi
}), P2 = bt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: gi
}), I2 = bt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: gi
});
ic(R2, P2, I2);
const M2 = tc;
function un(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const $2 = bt({
  prop: "width",
  transform: un
}), oh = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || M2[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: un(n)
      };
    };
    return Jr(e, e.maxWidth, t);
  }
  return null;
};
oh.filterProps = ["maxWidth"];
const j2 = bt({
  prop: "minWidth",
  transform: un
}), A2 = bt({
  prop: "height",
  transform: un
}), N2 = bt({
  prop: "maxHeight",
  transform: un
}), O2 = bt({
  prop: "minHeight",
  transform: un
});
bt({
  prop: "size",
  cssProperty: "width",
  transform: un
});
bt({
  prop: "size",
  cssProperty: "height",
  transform: un
});
const B2 = bt({
  prop: "boxSizing"
});
ic($2, oh, j2, A2, N2, O2, B2);
const cc = {
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
    style: sc
  },
  // palette
  color: {
    themeKey: "palette",
    transform: gi
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: gi
  },
  backgroundColor: {
    themeKey: "palette",
    transform: gi
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
    style: St
  },
  mt: {
    style: St
  },
  mr: {
    style: St
  },
  mb: {
    style: St
  },
  ml: {
    style: St
  },
  mx: {
    style: St
  },
  my: {
    style: St
  },
  margin: {
    style: St
  },
  marginTop: {
    style: St
  },
  marginRight: {
    style: St
  },
  marginBottom: {
    style: St
  },
  marginLeft: {
    style: St
  },
  marginX: {
    style: St
  },
  marginY: {
    style: St
  },
  marginInline: {
    style: St
  },
  marginInlineStart: {
    style: St
  },
  marginInlineEnd: {
    style: St
  },
  marginBlock: {
    style: St
  },
  marginBlockStart: {
    style: St
  },
  marginBlockEnd: {
    style: St
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
    style: lc
  },
  rowGap: {
    style: uc
  },
  columnGap: {
    style: ac
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
    transform: un
  },
  maxWidth: {
    style: oh
  },
  minWidth: {
    transform: un
  },
  height: {
    transform: un
  },
  maxHeight: {
    transform: un
  },
  minHeight: {
    transform: un
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
}, L2 = {};
function z2() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = L2,
      nested: o
    } = t, i = r.unstable_sxConfig ?? cc, s = {
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
      const c = r.breakpoints ?? nu, h = b1(c);
      for (const g in u) {
        const d = _2(u[g], r);
        if (d != null) {
          if (typeof d != "object") {
            dg(h, g, d, r, i);
            continue;
          }
          if (i[g]) {
            dg(h, g, d, r, i);
            continue;
          }
          o2(c, d) ? nc(h, t.theme, d, (v, w) => {
            h[v][g] = w;
          }) : (s.sx = d, h[g] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": sg(r, kf(c, h))
      } : sg(r, kf(c, h));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const Io = z2();
function dg(e, t, n, r, o) {
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
    mi(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: u
  } = i, c = rc(r, s);
  nc(e, r, n, (h, g) => {
    const d = S1(c, u, g, t);
    a === !1 ? mi(h ? e[h] : e, d) : h ? e[h][a] = d : e[a] = d;
  });
}
function _2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function F2(e, t) {
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
function dc(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = y1(n), a = C1(o);
  let u = Mt({
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
      ...KC,
      ...i
    }
  }, s);
  return u = HC(u), u.applyStyles = F2, u = t.reduce((c, h) => Mt(c, h), u), u.unstable_sxConfig = {
    ...cc,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(h) {
    return Io({
      sx: h,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function D2(e) {
  return Object.keys(e).length === 0;
}
function ih(e = null) {
  const t = y.useContext(ml);
  return !t || D2(t) ? e : t;
}
const W2 = dc();
function fc(e = W2) {
  return ih(e);
}
function cd(e) {
  const t = Qr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function k1({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = fc(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => cd(typeof s == "function" ? s(o) : s)) : i = cd(i)), /* @__PURE__ */ f.jsx(f1, {
    styles: i
  });
}
const fg = (e) => e, U2 = () => {
  let e = fg;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = fg;
    }
  };
}, E1 = U2();
function T1(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = T1(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function te() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = T1(e)) && (r && (r += " "), r += t);
  return r;
}
function V2(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = p1("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Io);
  return /* @__PURE__ */ y.forwardRef(function(a, u) {
    const c = fc(n), {
      className: h,
      component: g = "div",
      ...d
    } = a;
    return /* @__PURE__ */ f.jsx(i, {
      as: g,
      ref: u,
      className: te(h, o ? o(r) : r),
      theme: t && c[t] || c,
      ...d
    });
  });
}
const H2 = {
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
function ye(e, t, n = "Mui") {
  const r = H2[t];
  return r ? `${n}-${r}` : `${E1.generate(e)}-${t}`;
}
function pe(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ye(e, o, n);
  }), r;
}
function R1(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Qr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Qr(o.style));
  }), r;
}
const K2 = dc();
function dd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function vo(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function G2(e) {
  return e ? (t, n) => n[e] : null;
}
function Y2(e, t, n) {
  e.theme = x1(e.theme) ? n : e.theme[t] || e.theme;
}
function Ta(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => Ta(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? vo(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? vo(Qr(s), n) : s;
    }
    return P1(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? vo(Qr(r.style), n) : r.style : n ? vo(Qr(r), n) : r;
}
function P1(e, t, n = [], r = void 0) {
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
    }), n.push(r ? vo(Qr(l.style(o)), r) : l.style(o))) : n.push(r ? vo(Qr(l.style), r) : l.style);
  }
  return n;
}
function I1(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = K2,
    rootShouldForwardProp: r = dd,
    slotShouldForwardProp: o = dd
  } = e;
  function i(l) {
    Y2(l, t, n);
  }
  return (l, a = {}) => {
    _C(l, (k) => k.filter((T) => T !== Io));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: h,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = G2(q2(c)),
      ...v
    } = a, w = u && u.startsWith("Mui") || c ? "components" : "custom", C = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), m = g || !1;
    let p = dd;
    c === "Root" || c === "root" ? p = r : c ? p = o : X2(l) && (p = void 0);
    const x = p1(l, {
      shouldForwardProp: p,
      label: Q2(),
      ...v
    }), S = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(R) {
          return Ta(R, k, R.theme.modularCssLayers ? w : void 0);
        };
      if (br(k)) {
        const T = R1(k);
        return function(I) {
          return T.variants ? Ta(I, T, I.theme.modularCssLayers ? w : void 0) : I.theme.modularCssLayers ? vo(T.style, w) : T.style;
        };
      }
      return k;
    }, E = (...k) => {
      const T = [], R = k.map(S), I = [];
      if (T.push(i), u && d && I.push(function(b) {
        var B, $;
        const P = ($ = (B = b.theme.components) == null ? void 0 : B[u]) == null ? void 0 : $.styleOverrides;
        if (!P)
          return null;
        const O = {};
        for (const L in P)
          O[L] = Ta(b, P[L], b.theme.modularCssLayers ? "theme" : void 0);
        return d(b, O);
      }), u && !C && I.push(function(b) {
        var O, B;
        const j = b.theme, P = (B = (O = j == null ? void 0 : j.components) == null ? void 0 : O[u]) == null ? void 0 : B.variants;
        return P ? P1(b, P, [], b.theme.modularCssLayers ? "theme" : void 0) : null;
      }), m || I.push(Io), Array.isArray(R[0])) {
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
function Q2(e, t) {
  return void 0;
}
function X2(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function q2(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const J2 = I1();
function Ti(e, t, n = !1) {
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
              const u = a, c = s[u], h = l[u];
              typeof c == "function" || typeof h == "function" ? r[i][u] = (...g) => Ti((typeof c == "function" ? c(...g) : c) ?? {}, (typeof h == "function" ? h(...g) : h) ?? {}, n) : r[i][u] = Ti(c ?? {}, h ?? {}, n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = te(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function Z2(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Ti(t.components[n].defaultProps, r);
}
function ek(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = fc(r);
  return o && (i = i[o] || i), Z2({
    theme: i,
    name: n,
    props: t
  });
}
const dt = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function tk(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function sh(e, t = 0, n = 1) {
  return tk(e, t, n);
}
function nk(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Zr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Zr(nk(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Pr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(Pr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const rk = (e) => {
  const t = Zr(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ms = (e, t) => {
  try {
    return rk(e);
  } catch {
    return e;
  }
};
function pc(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function M1(e) {
  e = Zr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), pc({
    type: l,
    values: a
  });
}
function Ef(e) {
  e = Zr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Zr(M1(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ok(e, t) {
  const n = Ef(e), r = Ef(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function rl(e, t) {
  return e = Zr(e), t = sh(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, pc(e);
}
function ao(e, t, n) {
  try {
    return rl(e, t);
  } catch {
    return e;
  }
}
function hc(e, t) {
  if (e = Zr(e), t = sh(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return pc(e);
}
function We(e, t, n) {
  try {
    return hc(e, t);
  } catch {
    return e;
  }
}
function mc(e, t) {
  if (e = Zr(e), t = sh(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return pc(e);
}
function Ue(e, t, n) {
  try {
    return mc(e, t);
  } catch {
    return e;
  }
}
function Tf(e, t = 0.15) {
  return Ef(e) > 0.5 ? hc(e, t) : mc(e, t);
}
function Hl(e, t, n) {
  try {
    return Tf(e, t);
  } catch {
    return e;
  }
}
const $1 = /* @__PURE__ */ y.createContext(null);
function lh() {
  return y.useContext($1);
}
const ik = typeof Symbol == "function" && Symbol.for, sk = ik ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function lk(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function ak(e) {
  const {
    children: t,
    theme: n
  } = e, r = lh(), o = y.useMemo(() => {
    const i = r === null ? {
      ...n
    } : lk(r, n);
    return i != null && (i[sk] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ f.jsx($1.Provider, {
    value: o,
    children: t
  });
}
const j1 = /* @__PURE__ */ y.createContext();
function uk({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ f.jsx(j1.Provider, {
    value: e ?? !0,
    ...t
  });
}
const gc = () => y.useContext(j1) ?? !1, A1 = /* @__PURE__ */ y.createContext(void 0);
function ck({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ f.jsx(A1.Provider, {
    value: e,
    children: t
  });
}
function dk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Ti(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Ti(o, r, t.components.mergeClassNameAndStyle) : r;
}
function fk({
  props: e,
  name: t
}) {
  const n = y.useContext(A1);
  return dk({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let pg = 0;
function pk(e) {
  const [t, n] = y.useState(e), r = e || t;
  return y.useEffect(() => {
    t == null && (pg += 1, n(`mui-${pg}`));
  }, [t]), r;
}
const hk = {
  ...Ma
}, hg = hk.useId;
function Ir(e) {
  if (hg !== void 0) {
    const t = hg();
    return e ?? t;
  }
  return pk(e);
}
function mk(e) {
  const t = ih(), n = Ir() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, dt(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ f.jsx(k1, {
    styles: o
  }) : null;
}
const mg = {};
function gg(e, t, n, r = !1) {
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
function N1(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = ih(mg), i = lh() || mg, s = gg(r, o, n), l = gg(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", u = mk(s);
  return /* @__PURE__ */ f.jsx(ak, {
    theme: l,
    children: /* @__PURE__ */ f.jsx(ml.Provider, {
      value: s,
      children: /* @__PURE__ */ f.jsx(uk, {
        value: a,
        children: /* @__PURE__ */ f.jsxs(ck, {
          value: r ? s[r].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const yg = {
  theme: void 0
};
function gk(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (yg.theme = o.theme, i = R1(e(yg)), t = i, n = o.theme), i;
  };
}
const ah = "mode", uh = "color-scheme", yk = "data-color-scheme";
function vk(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = ah,
    colorSchemeStorageKey: i = uh,
    attribute: s = yk,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let u = "", c = s;
  if (s === "class" && (c = ".%s"), s === "data" && (c = "[data-%s]"), c.startsWith(".")) {
    const g = c.substring(1);
    u += `${l}.classList.remove('${g}'.replace('%s', light), '${g}'.replace('%s', dark));
      ${l}.classList.add('${g}'.replace('%s', colorScheme));`;
  }
  const h = c.match(/\[([^[\]]+)\]/);
  if (h) {
    const [g, d] = h[1].split("=");
    d || (u += `${l}.removeAttribute('${g}'.replace('%s', light));
      ${l}.removeAttribute('${g}'.replace('%s', dark));`), u += `
      ${l}.setAttribute('${g}'.replace('%s', colorScheme), ${d ? `${d}.replace('%s', colorScheme)` : '""'});`;
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
function xk() {
}
const bk = ({
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
      return xk;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function fd() {
}
function vg(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function O1(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Sk(e) {
  return O1(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function wk(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = ah,
    colorSchemeStorageKey: s = uh,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = bk,
    noSsr: u = !1
  } = e, c = o.join(","), h = o.length > 1, g = y.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), d = y.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), v = y.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [w, C] = y.useState(() => {
    const R = (g == null ? void 0 : g.get(t)) || t, I = (d == null ? void 0 : d.get(n)) || n, A = (v == null ? void 0 : v.get(r)) || r;
    return {
      mode: R,
      systemMode: vg(R),
      lightColorScheme: I,
      darkColorScheme: A
    };
  }), [m, p] = y.useState(u || !h);
  y.useEffect(() => {
    p(!0);
  }, []);
  const x = Sk(w), S = y.useCallback((R) => {
    C((I) => {
      if (R === I.mode)
        return I;
      const A = R ?? t;
      return g == null || g.set(A), {
        ...I,
        mode: A,
        systemMode: vg(A)
      };
    });
  }, [g, t]), E = y.useCallback((R) => {
    R ? typeof R == "string" ? R && !c.includes(R) ? console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`) : C((I) => {
      const A = {
        ...I
      };
      return O1(I, (M) => {
        M === "light" && (d == null || d.set(R), A.lightColorScheme = R), M === "dark" && (v == null || v.set(R), A.darkColorScheme = R);
      }), A;
    }) : C((I) => {
      const A = {
        ...I
      }, M = R.light === null ? n : R.light, N = R.dark === null ? r : R.dark;
      return M && (c.includes(M) ? (A.lightColorScheme = M, d == null || d.set(M)) : console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`)), N && (c.includes(N) ? (A.darkColorScheme = N, v == null || v.set(N)) : console.error(`\`${N}\` does not exist in \`theme.colorSchemes\`.`)), A;
    }) : C((I) => (d == null || d.set(n), v == null || v.set(r), {
      ...I,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [c, d, v, n, r]), k = y.useCallback((R) => {
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
      })) || fd, I = (d == null ? void 0 : d.subscribe((M) => {
        (!M || c.match(M)) && E({
          light: M
        });
      })) || fd, A = (v == null ? void 0 : v.subscribe((M) => {
        (!M || c.match(M)) && E({
          dark: M
        });
      })) || fd;
      return () => {
        R(), I(), A();
      };
    }
  }, [E, S, c, t, l, h, g, d, v]), {
    ...w,
    mode: m ? w.mode : void 0,
    systemMode: m ? w.systemMode : void 0,
    colorScheme: m ? x : void 0,
    setMode: S,
    setColorScheme: E
  };
}
const Ck = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function kk(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = ah,
    colorSchemeStorageKey: o = uh,
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
  }, u = /* @__PURE__ */ y.createContext(void 0), c = () => y.useContext(u) || a, h = {}, g = {};
  function d(m) {
    var le, ie, oe, Oe;
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
    } = m, O = y.useRef(!1), B = lh(), $ = y.useContext(u), L = !!$ && !M, F = y.useMemo(() => x || (typeof n == "function" ? n() : n), [x]), U = F[t], W = U || F, {
      colorSchemes: Q = h,
      components: G = g,
      cssVarPrefix: X
    } = W, K = Object.keys(Q).filter((se) => !!Q[se]).join(","), q = y.useMemo(() => K.split(","), [K]), _ = typeof s == "string" ? s : s.light, ne = typeof s == "string" ? s : s.dark, re = Q[_] && Q[ne] ? b : ((ie = (le = Q[W.defaultColorScheme]) == null ? void 0 : le.palette) == null ? void 0 : ie.mode) || ((oe = W.palette) == null ? void 0 : oe.mode), {
      mode: ke,
      setMode: he,
      systemMode: de,
      lightColorScheme: fe,
      darkColorScheme: Me,
      colorScheme: ze,
      setColorScheme: Pe
    } = wk({
      supportedColorSchemes: q,
      defaultLightColorScheme: _,
      defaultDarkColorScheme: ne,
      modeStorageKey: S,
      colorSchemeStorageKey: E,
      defaultMode: re,
      storageManager: T,
      storageWindow: R,
      noSsr: P
    });
    let $e = ke, me = ze;
    L && ($e = $.mode, me = $.colorScheme);
    let je = me || W.defaultColorScheme;
    W.vars && !j && (je = W.defaultColorScheme);
    const tt = y.useMemo(() => {
      var Ge;
      const se = ((Ge = W.generateThemeVars) == null ? void 0 : Ge.call(W)) || W.vars, ae = {
        ...W,
        components: G,
        colorSchemes: Q,
        cssVarPrefix: X,
        vars: se
      };
      if (typeof ae.generateSpacing == "function" && (ae.spacing = ae.generateSpacing()), je) {
        const ot = Q[je];
        ot && typeof ot == "object" && Object.keys(ot).forEach((ht) => {
          ot[ht] && typeof ot[ht] == "object" ? ae[ht] = {
            ...ae[ht],
            ...ot[ht]
          } : ae[ht] = ot[ht];
        });
      }
      return l ? l(ae) : ae;
    }, [W, je, G, Q, X]), Xe = W.colorSchemeSelector;
    dt(() => {
      if (me && A && Xe && Xe !== "media") {
        const se = Xe;
        let ae = Xe;
        if (se === "class" && (ae = ".%s"), se === "data" && (ae = "[data-%s]"), se != null && se.startsWith("data-") && !se.includes("%s") && (ae = `[${se}="%s"]`), ae.startsWith("."))
          A.classList.remove(...q.map((Ge) => ae.substring(1).replace("%s", Ge))), A.classList.add(ae.substring(1).replace("%s", me));
        else {
          const Ge = ae.replace("%s", me).match(/\[([^\]]+)\]/);
          if (Ge) {
            const [ot, ht] = Ge[1].split("=");
            ht || q.forEach((De) => {
              A.removeAttribute(ot.replace(me, De));
            }), A.setAttribute(ot, ht ? ht.replace(/"|'/g, "") : "");
          } else
            A.setAttribute(ae, me);
        }
      }
    }, [me, Xe, A, q]), y.useEffect(() => {
      let se;
      if (k && O.current && I) {
        const ae = I.createElement("style");
        ae.appendChild(I.createTextNode(Ck)), I.head.appendChild(ae), window.getComputedStyle(I.body), se = setTimeout(() => {
          I.head.removeChild(ae);
        }, 1);
      }
      return () => {
        clearTimeout(se);
      };
    }, [me, k, I]), y.useEffect(() => (O.current = !0, () => {
      O.current = !1;
    }), []);
    const Fe = y.useMemo(() => ({
      allColorSchemes: q,
      colorScheme: me,
      darkColorScheme: Me,
      lightColorScheme: fe,
      mode: $e,
      setColorScheme: Pe,
      setMode: he,
      systemMode: de
    }), [q, me, Me, fe, $e, Pe, he, de, tt.colorSchemeSelector]);
    let qe = !0;
    (N || W.cssVariables === !1 || L && (B == null ? void 0 : B.cssVarPrefix) === X) && (qe = !1);
    const D = /* @__PURE__ */ f.jsxs(y.Fragment, {
      children: [/* @__PURE__ */ f.jsx(N1, {
        themeId: U ? t : void 0,
        theme: tt,
        children: p
      }), qe && /* @__PURE__ */ f.jsx(f1, {
        styles: ((Oe = tt.generateStyleSheets) == null ? void 0 : Oe.call(tt)) || []
      })]
    });
    return L ? D : /* @__PURE__ */ f.jsx(u.Provider, {
      value: Fe,
      children: D
    });
  }
  const v = typeof s == "string" ? s : s.light, w = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: c,
    getInitColorSchemeScript: (m) => vk({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: v,
      defaultDarkColorScheme: w,
      modeStorageKey: r,
      ...m
    })
  };
}
function Ek(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Tk = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), xg = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (Tk.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, Rk = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, Pk = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function pd(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return Rk(
    e,
    (l, a, u) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const c = `--${n ? `${n}-` : ""}${l.join("-")}`, h = Pk(l, a);
        Object.assign(o, {
          [c]: h
        }), xg(i, l, `var(${c})`, u), xg(s, l, `var(${c}, ${h})`, u);
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
function Ik(e, t = {}) {
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
    vars: c,
    css: h,
    varsWithDefaults: g
  } = pd(u, t);
  let d = g;
  const v = {}, {
    [a]: w,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([S, E]) => {
    const {
      vars: k,
      css: T,
      varsWithDefaults: R
    } = pd(E, t);
    d = Mt(d, R), v[S] = {
      css: T,
      vars: k
    };
  }), w) {
    const {
      css: S,
      vars: E,
      varsWithDefaults: k
    } = pd(w, t);
    d = Mt(d, k), v[a] = {
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
    vars: d,
    generateThemeVars: () => {
      let S = {
        ...c
      };
      return Object.entries(v).forEach(([, {
        vars: E
      }]) => {
        S = Mt(S, E);
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
function Mk(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function ve(e, t, n = void 0) {
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
function hd(e, t) {
  var n, r, o;
  return /* @__PURE__ */ y.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const $k = dc(), jk = J2("div", {
  name: "MuiStack",
  slot: "Root"
});
function Ak(e) {
  return ek({
    props: e,
    name: "MuiStack",
    defaultTheme: $k
  });
}
function Nk(e, t) {
  const n = y.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ y.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const Ok = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Bk = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Jr({
      theme: t
    }, ud({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = oc(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = ud({
      values: e.direction,
      base: o
    }), s = ud({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, c) => {
      if (!i[a]) {
        const g = u > 0 ? i[c[u - 1]] : "column";
        i[a] = g;
      }
    }), n = Mt(n, Jr({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: Po(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Ok(u ? i[u] : e.direction)}`]: Po(r, a)
      }
    }));
  }
  return n = n2(t.breakpoints, n), n;
};
function Lk(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = jk,
    useThemeProps: n = Ak,
    componentName: r = "MuiStack"
  } = e, o = () => ve({
    root: ["root"]
  }, (a) => ye(r, a), {}), i = t(Bk);
  return /* @__PURE__ */ y.forwardRef(function(a, u) {
    const c = n(a), {
      component: h = "div",
      direction: g = "column",
      spacing: d = 0,
      divider: v,
      children: w,
      className: C,
      useFlexGap: m = !1,
      ...p
    } = c, x = {
      direction: g,
      spacing: d,
      useFlexGap: m
    }, S = o();
    return /* @__PURE__ */ f.jsx(i, {
      as: h,
      ownerState: x,
      ref: u,
      className: te(S.root, C),
      ...p,
      children: v ? Nk(w, v) : w
    });
  });
}
function B1() {
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
      paper: qs.white,
      default: qs.white
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
const L1 = B1();
function z1() {
  return {
    text: {
      primary: qs.white,
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
      active: qs.white,
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
const Rf = z1();
function bg(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = mc(e.main, o) : t === "dark" && (e.dark = hc(e.main, i)));
}
function Sg(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function zk(e = "light") {
  return e === "dark" ? {
    main: Ko[200],
    light: Ko[50],
    dark: Ko[400]
  } : {
    main: Ko[700],
    light: Ko[400],
    dark: Ko[800]
  };
}
function _k(e = "light") {
  return e === "dark" ? {
    main: Ho[200],
    light: Ho[50],
    dark: Ho[400]
  } : {
    main: Ho[500],
    light: Ho[300],
    dark: Ho[700]
  };
}
function Fk(e = "light") {
  return e === "dark" ? {
    main: Vo[500],
    light: Vo[300],
    dark: Vo[700]
  } : {
    main: Vo[700],
    light: Vo[400],
    dark: Vo[800]
  };
}
function Dk(e = "light") {
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
function Wk(e = "light") {
  return e === "dark" ? {
    main: Yo[400],
    light: Yo[300],
    dark: Yo[700]
  } : {
    main: Yo[800],
    light: Yo[500],
    dark: Yo[900]
  };
}
function Uk(e = "light") {
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
function Vk(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function ch(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || zk(t), l = e.secondary || _k(t), a = e.error || Fk(t), u = e.info || Dk(t), c = e.success || Wk(t), h = e.warning || Uk(t);
  function g(C) {
    return o ? Vk(C) : ok(C, Rf.text.primary) >= n ? Rf.text.primary : L1.text.primary;
  }
  const d = ({
    color: C,
    name: m,
    mainShade: p = 500,
    lightShade: x = 300,
    darkShade: S = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[p] && (C.main = C[p]), !C.hasOwnProperty("main"))
      throw new Error(Pr(11, m ? ` (${m})` : "", p));
    if (typeof C.main != "string")
      throw new Error(Pr(12, m ? ` (${m})` : "", JSON.stringify(C.main)));
    return o ? (Sg(o, C, "light", x, r), Sg(o, C, "dark", S, r)) : (bg(C, "light", x, r), bg(C, "dark", S, r)), C.contrastText || (C.contrastText = g(C.main)), C;
  };
  let v;
  return t === "light" ? v = B1() : t === "dark" && (v = z1()), Mt({
    // A collection of common colors.
    common: {
      ...qs
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
      color: h,
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
    grey: Ow,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...v
  }, i);
}
const vl = "--_focusVisible-offset", yc = "--_focusVisible-behavior", _1 = "--_focusVisible-shadow", Hk = `var(${vl}, 1)`, Kk = `var(${yc}, )`, Gk = {
  [vl]: 1,
  [yc]: "initial"
  // reverts the var to guaranteed-invalid so `var(--_focusVisible-behavior, )` falls back to empty — there is no explicit `outset` keyword.
};
function F1(e) {
  return {
    [_1]: e
  };
}
function D1(e) {
  return {
    [vl]: -e,
    [yc]: "inset"
  };
}
function W1(e, t) {
  return t.reduce((n, r) => r && "focusVisible" in r ? Mt(n, {
    focusVisible: r.focusVisible
  }) : n, {
    focusVisible: e
  }).focusVisible;
}
function Yk(e) {
  return e != null && typeof e == "object" && typeof e.outlineOffset == "string" && e.outlineOffset.includes(vl);
}
function dh(e, t) {
  return Qk({
    outlineStyle: "solid",
    outlineColor: t,
    outlineWidth: 2,
    outlineOffset: 2,
    // invisible shadow for parent component with solid background (AppBar, Snackbar, Alert) can control the ring color.
    boxShadow: `var(${_1}, 0 0)`,
    ...e === !0 ? null : e
  });
}
function Qk(e) {
  const t = e.outlineOffset ?? 0;
  if (typeof t != "string" || !t.includes(vl)) {
    const r = typeof t == "number" ? `${t}px` : t;
    e.outlineOffset = `calc(${Hk} * ${r})`;
  }
  const n = /* @__PURE__ */ new Set(["none", "initial", "inherit", "unset", "revert", "revert-layer"]);
  return typeof e.boxShadow == "string" && !n.has(e.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e.boxShadow) && !e.boxShadow.includes(yc) && (e.boxShadow = `${Kk} ${e.boxShadow}`), e;
}
function Xk(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function qk(e, t) {
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
function Jk(e) {
  return Math.round(e * 1e5) / 1e5;
}
const wg = {
  textTransform: "uppercase"
}, Cg = '"Roboto", "Helvetica", "Arial", sans-serif';
function U1(e, t) {
  const {
    fontFamily: n = Cg,
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
    ...h
  } = typeof t == "function" ? t(e) : t, g = r / 14, d = c || ((C) => `${C / a * g}rem`), v = (C, m, p, x, S) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: d(m),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: p,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Cg ? {
      letterSpacing: `${Jk(x / m)}em`
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
    button: v(s, 14, 1.75, 0.4, wg),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, wg),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Mt({
    htmlFontSize: a,
    pxToRem: d,
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
const Zk = 0.2, eE = 0.14, tE = 0.12;
function it(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Zk})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${eE})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${tE})`].join(",");
}
const nE = ["none", it(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), it(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), it(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), it(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), it(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), it(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), it(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), it(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), it(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), it(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), it(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), it(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), it(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), it(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), it(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), it(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), it(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), it(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), it(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), it(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), it(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), it(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), it(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), it(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], rE = ["all"], oE = {}, iE = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, sE = {
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
function kg(e) {
  return `${Math.round(e)}ms`;
}
function lE(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function aE(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...iE,
    ...t.easing
  }, r = {
    ...sE,
    ...t.duration
  }, o = (s = rE, l = oE) => {
    const {
      duration: a = r.standard,
      easing: u = n.easeInOut,
      delay: c = 0,
      ...h
    } = l;
    return (Array.isArray(s) ? s : [s]).map((g) => `${g} ${typeof a == "string" ? a : kg(a)} ${u} ${typeof c == "string" ? c : kg(c)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: lE,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const uE = {};
function cE(e = uE) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const dE = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function fE(e) {
  return br(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function V1(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !fE(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : br(l) && (r[s] = {
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
function Eg(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const pE = (e) => {
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
function hE(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : rl(t, pE(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Eg(n)})` : mc(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Eg(n)})` : hc(t, n);
    }
  });
}
function Pf(e = {}, ...t) {
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
    ...h
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Pr(22));
  const g = ch({
    ...i,
    colorSpace: c
  }), d = dc(e);
  let v = Mt(d, {
    mixins: qk(d.breakpoints, r),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: nE.slice(),
    typography: U1(g, a),
    motion: cE(s),
    transitions: aE(l),
    zIndex: {
      ...dE
    }
  });
  return v = Mt(v, h), v = t.reduce((w, C) => Mt(w, C), v), delete v.transitions.reducedMotion, v.focusVisible != null && v.focusVisible !== !1 && (v.focusVisible = dh(v.focusVisible, v.palette.primary.main)), v.unstable_sxConfig = {
    ...cc,
    ...h == null ? void 0 : h.unstable_sxConfig
  }, v.unstable_sx = function(C) {
    return Io({
      sx: C,
      theme: this
    });
  }, v.toRuntimeSource = V1, hE(v), v;
}
function If(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const mE = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = If(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function H1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function K1(e) {
  return e === "dark" ? mE : [];
}
function gE(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = ch({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...H1(s.mode),
      ...n
    },
    overlays: r || K1(s.mode),
    ...i
  };
}
function yE(e) {
  var t;
  return e[0] === "motion" || // Keep `focusVisible` inline: its values reference the per-component private vars
  // (`--_focusVisible-offset`/`-behavior`). Hoisted to a `:root` var they resolve where those
  // vars are unset, silently breaking the inner-ring inset.
  e[0] === "focusVisible" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const vE = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], xE = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return vE(e.cssVarPrefix).forEach((l) => {
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
function bE(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function z(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function gs(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : M1(e);
}
function fr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ms(gs(e[t])));
}
function SE(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Qn = (e) => {
  try {
    return e();
  } catch {
  }
}, wE = (e = "mui") => Ek(e);
function md(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = gE({
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
  } = Pf({
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
      ...H1(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || K1(i)
  }, l;
}
function CE(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = yE,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...c
  } = e, h = Object.keys(n)[0], g = r || (n.light && h !== "light" ? "light" : h), d = wE(i), {
    [g]: v,
    light: w,
    dark: C,
    ...m
  } = n, p = {
    ...m
  };
  let x = v;
  if ((g === "dark" && !("dark" in n) || g === "light" && !("light" in n)) && (x = !0), !x)
    throw new Error(Pr(21, g));
  let S;
  s && (S = "oklch");
  const E = md(S, p, x, c, g);
  w && !p.light && md(S, p, w, void 0, "light"), C && !p.dark && md(S, p, C, void 0, "dark");
  let k = {
    defaultColorScheme: g,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: d,
    colorSchemes: p,
    font: {
      ...Xk(E.typography),
      ...E.font
    },
    spacing: SE(c.spacing)
  };
  Object.keys(k.colorSchemes).forEach((N) => {
    const b = k.colorSchemes[N].palette, j = (O) => {
      const B = O.split("-"), $ = B[1], L = B[2];
      return d(O, b[$][L]);
    };
    b.mode === "light" && (z(b.common, "background", "#fff"), z(b.common, "onBackground", "#000")), b.mode === "dark" && (z(b.common, "background", "#000"), z(b.common, "onBackground", "#fff"));
    function P(O, B, $) {
      if (S) {
        let L;
        return O === ao && (L = `transparent ${((1 - $) * 100).toFixed(0)}%`), O === We && (L = `#000 ${($ * 100).toFixed(0)}%`), O === Ue && (L = `#fff ${($ * 100).toFixed(0)}%`), `color-mix(in ${S}, ${B}, ${L})`;
      }
      return O(B, $);
    }
    if (bE(b, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), b.mode === "light") {
      z(b.Alert, "errorColor", P(We, s ? d("palette-error-light") : b.error.light, 0.6)), z(b.Alert, "infoColor", P(We, s ? d("palette-info-light") : b.info.light, 0.6)), z(b.Alert, "successColor", P(We, s ? d("palette-success-light") : b.success.light, 0.6)), z(b.Alert, "warningColor", P(We, s ? d("palette-warning-light") : b.warning.light, 0.6)), z(b.Alert, "errorFilledBg", j("palette-error-main")), z(b.Alert, "infoFilledBg", j("palette-info-main")), z(b.Alert, "successFilledBg", j("palette-success-main")), z(b.Alert, "warningFilledBg", j("palette-warning-main")), z(b.Alert, "errorFilledColor", Qn(() => b.getContrastText(b.error.main))), z(b.Alert, "infoFilledColor", Qn(() => b.getContrastText(b.info.main))), z(b.Alert, "successFilledColor", Qn(() => b.getContrastText(b.success.main))), z(b.Alert, "warningFilledColor", Qn(() => b.getContrastText(b.warning.main))), z(b.Alert, "errorStandardBg", P(Ue, s ? d("palette-error-light") : b.error.light, 0.9)), z(b.Alert, "infoStandardBg", P(Ue, s ? d("palette-info-light") : b.info.light, 0.9)), z(b.Alert, "successStandardBg", P(Ue, s ? d("palette-success-light") : b.success.light, 0.9)), z(b.Alert, "warningStandardBg", P(Ue, s ? d("palette-warning-light") : b.warning.light, 0.9)), z(b.Alert, "errorIconColor", j("palette-error-main")), z(b.Alert, "infoIconColor", j("palette-info-main")), z(b.Alert, "successIconColor", j("palette-success-main")), z(b.Alert, "warningIconColor", j("palette-warning-main")), z(b.AppBar, "defaultBg", j("palette-grey-100")), z(b.Avatar, "defaultBg", j("palette-grey-400")), z(b.Button, "inheritContainedBg", j("palette-grey-300")), z(b.Button, "inheritContainedHoverBg", j("palette-grey-A100")), z(b.Chip, "defaultBorder", j("palette-grey-400")), z(b.Chip, "defaultAvatarColor", j("palette-grey-700")), z(b.Chip, "defaultIconColor", j("palette-grey-700")), z(b.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), z(b.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), z(b.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), z(b.LinearProgress, "primaryBg", P(Ue, s ? d("palette-primary-main") : b.primary.main, 0.62)), z(b.LinearProgress, "secondaryBg", P(Ue, s ? d("palette-secondary-main") : b.secondary.main, 0.62)), z(b.LinearProgress, "errorBg", P(Ue, s ? d("palette-error-main") : b.error.main, 0.62)), z(b.LinearProgress, "infoBg", P(Ue, s ? d("palette-info-main") : b.info.main, 0.62)), z(b.LinearProgress, "successBg", P(Ue, s ? d("palette-success-main") : b.success.main, 0.62)), z(b.LinearProgress, "warningBg", P(Ue, s ? d("palette-warning-light") : b.warning.main, 0.62)), z(b.Skeleton, "bg", S ? P(ao, s ? d("palette-text-primary") : b.text.primary, 0.11) : `rgba(${j("palette-text-primaryChannel")} / 0.11)`), z(b.Slider, "primaryTrack", P(Ue, s ? d("palette-primary-main") : b.primary.main, 0.62)), z(b.Slider, "secondaryTrack", P(Ue, s ? d("palette-secondary-main") : b.secondary.main, 0.62)), z(b.Slider, "errorTrack", P(Ue, s ? d("palette-error-main") : b.error.main, 0.62)), z(b.Slider, "infoTrack", P(Ue, s ? d("palette-info-main") : b.info.main, 0.62)), z(b.Slider, "successTrack", P(Ue, s ? d("palette-success-main") : b.success.main, 0.62)), z(b.Slider, "warningTrack", P(Ue, s ? d("palette-warning-main") : b.warning.main, 0.62));
      const O = S ? P(We, s ? d("palette-background-default") : b.background.default, 0.6825) : Hl(b.background.default, 0.8);
      z(b.SnackbarContent, "bg", O), z(b.SnackbarContent, "color", Qn(() => S ? Rf.text.primary : b.getContrastText(O))), z(b.SpeedDialAction, "fabHoverBg", Hl(b.background.paper, 0.15)), z(b.StepConnector, "border", j("palette-grey-400")), z(b.StepContent, "border", j("palette-grey-400")), z(b.Switch, "defaultColor", j("palette-common-white")), z(b.Switch, "defaultDisabledColor", j("palette-grey-100")), z(b.Switch, "primaryDisabledColor", P(Ue, s ? d("palette-primary-main") : b.primary.main, 0.62)), z(b.Switch, "secondaryDisabledColor", P(Ue, s ? d("palette-secondary-main") : b.secondary.main, 0.62)), z(b.Switch, "errorDisabledColor", P(Ue, s ? d("palette-error-main") : b.error.main, 0.62)), z(b.Switch, "infoDisabledColor", P(Ue, s ? d("palette-info-main") : b.info.main, 0.62)), z(b.Switch, "successDisabledColor", P(Ue, s ? d("palette-success-main") : b.success.main, 0.62)), z(b.Switch, "warningDisabledColor", P(Ue, s ? d("palette-warning-main") : b.warning.main, 0.62)), z(b.TableCell, "border", P(Ue, ao(s ? d("palette-divider") : b.divider, 1), 0.88)), z(b.Tooltip, "bg", P(ao, s ? d("palette-grey-700") : b.grey[700], 0.92));
    }
    if (b.mode === "dark") {
      z(b.Alert, "errorColor", P(Ue, s ? d("palette-error-light") : b.error.light, 0.6)), z(b.Alert, "infoColor", P(Ue, s ? d("palette-info-light") : b.info.light, 0.6)), z(b.Alert, "successColor", P(Ue, s ? d("palette-success-light") : b.success.light, 0.6)), z(b.Alert, "warningColor", P(Ue, s ? d("palette-warning-light") : b.warning.light, 0.6)), z(b.Alert, "errorFilledBg", j("palette-error-dark")), z(b.Alert, "infoFilledBg", j("palette-info-dark")), z(b.Alert, "successFilledBg", j("palette-success-dark")), z(b.Alert, "warningFilledBg", j("palette-warning-dark")), z(b.Alert, "errorFilledColor", Qn(() => b.getContrastText(b.error.dark))), z(b.Alert, "infoFilledColor", Qn(() => b.getContrastText(b.info.dark))), z(b.Alert, "successFilledColor", Qn(() => b.getContrastText(b.success.dark))), z(b.Alert, "warningFilledColor", Qn(() => b.getContrastText(b.warning.dark))), z(b.Alert, "errorStandardBg", P(We, s ? d("palette-error-light") : b.error.light, 0.9)), z(b.Alert, "infoStandardBg", P(We, s ? d("palette-info-light") : b.info.light, 0.9)), z(b.Alert, "successStandardBg", P(We, s ? d("palette-success-light") : b.success.light, 0.9)), z(b.Alert, "warningStandardBg", P(We, s ? d("palette-warning-light") : b.warning.light, 0.9)), z(b.Alert, "errorIconColor", j("palette-error-main")), z(b.Alert, "infoIconColor", j("palette-info-main")), z(b.Alert, "successIconColor", j("palette-success-main")), z(b.Alert, "warningIconColor", j("palette-warning-main")), z(b.AppBar, "defaultBg", j("palette-grey-900")), z(b.AppBar, "darkBg", j("palette-background-paper")), z(b.AppBar, "darkColor", j("palette-text-primary")), z(b.Avatar, "defaultBg", j("palette-grey-600")), z(b.Button, "inheritContainedBg", j("palette-grey-800")), z(b.Button, "inheritContainedHoverBg", j("palette-grey-700")), z(b.Chip, "defaultBorder", j("palette-grey-700")), z(b.Chip, "defaultAvatarColor", j("palette-grey-300")), z(b.Chip, "defaultIconColor", j("palette-grey-300")), z(b.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), z(b.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), z(b.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), z(b.LinearProgress, "primaryBg", P(We, s ? d("palette-primary-main") : b.primary.main, 0.5)), z(b.LinearProgress, "secondaryBg", P(We, s ? d("palette-secondary-main") : b.secondary.main, 0.5)), z(b.LinearProgress, "errorBg", P(We, s ? d("palette-error-main") : b.error.main, 0.5)), z(b.LinearProgress, "infoBg", P(We, s ? d("palette-info-main") : b.info.main, 0.5)), z(b.LinearProgress, "successBg", P(We, s ? d("palette-success-main") : b.success.main, 0.5)), z(b.LinearProgress, "warningBg", P(We, s ? d("palette-warning-main") : b.warning.main, 0.5)), z(b.Skeleton, "bg", S ? P(ao, s ? d("palette-text-primary") : b.text.primary, 0.13) : `rgba(${j("palette-text-primaryChannel")} / 0.13)`), z(b.Slider, "primaryTrack", P(We, s ? d("palette-primary-main") : b.primary.main, 0.5)), z(b.Slider, "secondaryTrack", P(We, s ? d("palette-secondary-main") : b.secondary.main, 0.5)), z(b.Slider, "errorTrack", P(We, s ? d("palette-error-main") : b.error.main, 0.5)), z(b.Slider, "infoTrack", P(We, s ? d("palette-info-main") : b.info.main, 0.5)), z(b.Slider, "successTrack", P(We, s ? d("palette-success-main") : b.success.main, 0.5)), z(b.Slider, "warningTrack", P(We, s ? d("palette-warning-light") : b.warning.main, 0.5));
      const O = S ? P(Ue, s ? d("palette-background-default") : b.background.default, 0.985) : Hl(b.background.default, 0.98);
      z(b.SnackbarContent, "bg", O), z(b.SnackbarContent, "color", Qn(() => S ? L1.text.primary : b.getContrastText(O))), z(b.SpeedDialAction, "fabHoverBg", Hl(b.background.paper, 0.15)), z(b.StepConnector, "border", j("palette-grey-600")), z(b.StepContent, "border", j("palette-grey-600")), z(b.Switch, "defaultColor", j("palette-grey-300")), z(b.Switch, "defaultDisabledColor", j("palette-grey-600")), z(b.Switch, "primaryDisabledColor", P(We, s ? d("palette-primary-main") : b.primary.main, 0.55)), z(b.Switch, "secondaryDisabledColor", P(We, s ? d("palette-secondary-main") : b.secondary.main, 0.55)), z(b.Switch, "errorDisabledColor", P(We, s ? d("palette-error-main") : b.error.main, 0.55)), z(b.Switch, "infoDisabledColor", P(We, s ? d("palette-info-main") : b.info.main, 0.55)), z(b.Switch, "successDisabledColor", P(We, s ? d("palette-success-main") : b.success.main, 0.55)), z(b.Switch, "warningDisabledColor", P(We, s ? d("palette-warning-light") : b.warning.main, 0.55)), z(b.TableCell, "border", P(We, ao(s ? d("palette-divider") : b.divider, 1), 0.68)), z(b.Tooltip, "bg", P(ao, s ? d("palette-grey-700") : b.grey[700], 0.92));
    }
    s || (fr(b.background, "default"), fr(b.background, "paper"), fr(b.common, "background"), fr(b.common, "onBackground"), fr(b, "divider")), Object.keys(b).forEach((O) => {
      const B = b[O];
      O !== "tonalOffset" && !s && B && typeof B == "object" && (B.main && z(b[O], "mainChannel", ms(gs(B.main))), B.light && z(b[O], "lightChannel", ms(gs(B.light))), B.dark && z(b[O], "darkChannel", ms(gs(B.dark))), B.contrastText && z(b[O], "contrastTextChannel", ms(gs(B.contrastText))), O === "text" && (fr(b[O], "primary"), fr(b[O], "secondary")), O === "action" && (B.active && fr(b[O], "active"), B.selected && fr(b[O], "selected")));
    });
  }), k = t.reduce((N, b) => Mt(N, b), k);
  const T = W1(e.focusVisible, t);
  T != null && T !== !1 && (k.focusVisible = dh(T, d("palette-primary-main")));
  const R = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: xE(k),
    enableContrastVars: s
  }, {
    vars: I,
    generateThemeVars: A,
    generateStyleSheets: M
  } = Ik(k, R);
  return k.vars = I, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([N, b]) => {
    k[N] = b;
  }), k.generateThemeVars = A, k.generateStyleSheets = M, k.generateSpacing = function() {
    return C1(c.spacing, oc(this));
  }, k.getColorSchemeSelector = Mk(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...cc,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, k.unstable_sx = function(b) {
    return Io({
      sx: b,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = V1, k;
}
function Tg(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: ch({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function vc(e = {}, ...t) {
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
      return Pf(e, ...t);
    let c = n;
    "palette" in e || u[l] && (u[l] !== !0 ? c = u[l].palette : l === "dark" && (c = {
      mode: "dark"
    }));
    const h = Pf({
      ...e,
      palette: c
    }, ...t);
    if (h.defaultColorScheme = l, h.colorSchemes = u, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: h.palette
    }, Tg(h, "dark", u.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: h.palette
    }, Tg(h, "light", u.light)), h.focusVisible != null && h.focusVisible !== !1) {
      let g = h.focusVisible;
      const d = W1(e.focusVisible, t), v = d && typeof d == "object" ? d.outlineColor : void 0;
      if (!v || Yk(d) && v === h.palette.primary.main) {
        const {
          outlineColor: w,
          ...C
        } = g;
        g = C;
      }
      Object.keys(h.colorSchemes).forEach((w) => {
        var m, p;
        const C = (p = (m = h.colorSchemes) == null ? void 0 : m[w]) == null ? void 0 : p.palette;
        C != null && C.primary && (h.colorSchemes[w].focusVisible = dh(g, C.primary.main));
      });
    }
    return h;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), CE({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function ou(e) {
  return typeof e == "string";
}
function xc(e, t = 166) {
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
function pt(...e) {
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
function et(e) {
  const t = y.useRef(e);
  return dt(() => {
    t.current = e;
  }), y.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function gt(e) {
  return e && e.ownerDocument || document;
}
function Hn(e) {
  return gt(e).defaultView || window;
}
function Kl(e) {
  return parseInt(e, 10) || 0;
}
const kE = {
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
function EE(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Rg(e) {
  return EE(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const TE = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: u
  } = y.useRef(l != null), c = y.useRef(null), h = pt(n, c), g = y.useRef(null), d = y.useRef(null), v = y.useCallback(() => {
    const x = c.current, S = d.current;
    if (!x || !S)
      return;
    const k = Hn(x).getComputedStyle(x);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    S.style.width = k.width, S.value = x.value || t.placeholder || "x", S.value.slice(-1) === `
` && (S.value += " ");
    const T = k.boxSizing, R = Kl(k.paddingBottom) + Kl(k.paddingTop), I = Kl(k.borderBottomWidth) + Kl(k.borderTopWidth), A = S.scrollHeight;
    S.value = "x";
    const M = S.scrollHeight;
    let N = A;
    i && (N = Math.max(Number(i) * M, N)), o && (N = Math.min(Number(o) * M, N)), N = Math.max(N, M);
    const b = N + (T === "border-box" ? R + I : 0), j = Math.abs(N - A) <= 1;
    return {
      outerHeightStyle: b,
      overflowing: j
    };
  }, [o, i, t.placeholder]), w = et(() => {
    const x = c.current, S = v();
    if (!x || !S || Rg(S))
      return !1;
    const E = S.outerHeightStyle;
    return g.current != null && g.current !== E;
  }), C = y.useCallback(() => {
    const x = c.current, S = v();
    if (!x || !S || Rg(S))
      return;
    const E = S.outerHeightStyle;
    g.current !== E && (g.current = E, x.style.height = `${E}px`), x.style.overflow = S.overflowing ? "hidden" : "";
  }, [v]), m = y.useRef(-1);
  dt(() => {
    const x = xc(C), S = c == null ? void 0 : c.current;
    if (!S)
      return;
    const E = Hn(S);
    E.addEventListener("resize", x);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      w() && (k.unobserve(S), cancelAnimationFrame(m.current), C(), m.current = requestAnimationFrame(() => {
        k.observe(S);
      }));
    }), k.observe(S)), () => {
      x.clear(), cancelAnimationFrame(m.current), E.removeEventListener("resize", x), k && k.disconnect();
    };
  }, [v, C, w]), dt(() => {
    C();
  });
  const p = (x) => {
    u || C();
    const S = x.target, E = S.value.length, k = S.value.endsWith(`
`), T = S.selectionStart === E;
    k && T && S.setSelectionRange(E, E), r && r(x);
  };
  return /* @__PURE__ */ f.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ f.jsx("textarea", {
      value: l,
      onChange: p,
      ref: h,
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
        ...kE.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), fh = /* @__PURE__ */ y.createContext(void 0);
function Fi({
  props: e,
  states: t
}) {
  const n = y.useContext(fh), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const ph = vc();
function ro() {
  const e = fc(ph);
  return e[ir] || e;
}
function RE(e) {
  return /* @__PURE__ */ f.jsx(k1, {
    ...e,
    defaultTheme: ph,
    themeId: ir
  });
}
function G1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const vn = (e) => G1(e) && e !== "classes", H = I1({
  themeId: ir,
  defaultTheme: ph,
  rootShouldForwardProp: vn
});
function PE(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ f.jsx(RE, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const we = gk;
function xe(e) {
  return fk(e);
}
function tr(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Pg(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function iu(e, t = !1) {
  return e && (Pg(e.value) && e.value !== "" || t && Pg(e.defaultValue) && e.defaultValue !== "");
}
function IE(e) {
  return e.startAdornment;
}
function ME(e) {
  return ye("MuiInputBase", e);
}
const an = pe("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), $E = {
  transition: "none"
};
function jE(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const hh = (e) => e.scrollTop, Y1 = {}, AE = ["all"], NE = {};
function kn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function Q1(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function su(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = Y1
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function mh(e, t) {
  var r;
  const n = t ?? $E;
  return jE((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function xt(e, t = AE, n = NE) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = mh(e);
  if (r === void 0)
    return o ?? Y1;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Ig;
const Mf = "mui-auto-fill", lu = "mui-auto-fill-cancel", bc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ce(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Sc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, OE = (e) => {
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
    readOnly: h,
    size: g,
    startAdornment: d,
    type: v
  } = e, w = {
    root: ["root", `color${ce(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", g && g !== "medium" && `size${ce(g)}`, c && "multiline", d && "adornedStart", i && "adornedEnd", u && "hiddenLabel", h && "readOnly"],
    input: ["input", r && "disabled", v === "search" && "inputTypeSearch", h && "readOnly"]
  };
  return ve(w, ME, t);
}, wc = H("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: bc
})(we(({
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
  [`&.${an.disabled}`]: {
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
}))), Cc = H("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Sc
})(we(({
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
    [`label[data-shrink=false] + .${an.formControl} &`]: {
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
    [`&.${an.disabled}`]: {
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
        animationName: lu,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: Mf
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
})), Mg = PE({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${Mf}`]: {
    from: {
      animationName: Mf
    }
  },
  [`@keyframes ${lu}`]: {
    from: {
      animationName: lu
    }
  }
}), gh = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    disabled: h,
    disableInjectingGlobalStyles: g,
    endAdornment: d,
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
    slotProps: F = {},
    slots: U = {},
    startAdornment: W,
    type: Q = "text",
    value: G,
    ...X
  } = r, K = p.value != null ? p.value : G, {
    current: q
  } = y.useRef(K != null), _ = y.useRef(), ne = y.useCallback((se) => {
  }, []), re = pt(_, x, p.ref, ne), [ke, he] = y.useState(!1), [de, fe] = Fi({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  de.focused = fe ? fe.focused : ke, y.useEffect(() => {
    !fe && h && ke && (he(!1), I && I());
  }, [fe, h, ke, I]);
  const Me = fe && fe.onFilled, ze = fe && fe.onEmpty, Pe = y.useCallback((se) => {
    iu(se) ? Me && Me() : ze && ze();
  }, [Me, ze]);
  dt(() => {
    q && Pe({
      value: K
    });
  }, [K, Pe, q]), dt(() => {
    if (!l)
      return;
    const se = _.current;
    if (!se)
      return;
    const ae = gt(se), Ge = tr(ae), ot = Ge == null || Ge === ae.body || Ge === ae.documentElement;
    se === Ge ? fe && fe.onFocus ? fe.onFocus() : he(!0) : ot && se.focus();
  }, [l]);
  const $e = (se) => {
    N && N(se), p.onFocus && p.onFocus(se), fe && fe.onFocus ? fe.onFocus(se) : he(!0);
  }, me = (se) => {
    I && I(se), p.onBlur && p.onBlur(se), fe && fe.onBlur ? fe.onBlur(se) : he(!1);
  }, je = (se, ...ae) => {
    if (!q) {
      const Ge = se.target || _.current;
      if (Ge == null)
        throw new Error(Pr(1));
      Pe({
        value: Ge.value
      });
    }
    p.onChange && p.onChange(se, ...ae), A && A(se, ...ae);
  };
  y.useEffect(() => {
    Pe(_.current);
  }, []);
  const tt = (se) => {
    _.current && se.currentTarget === se.target && _.current.focus(), M && M(se);
  };
  let Xe = m, Fe = p;
  T && Xe === "input" && ($ ? Fe = {
    type: void 0,
    minRows: $,
    maxRows: $,
    ...Fe
  } : Fe = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...Fe
  }, Xe = TE);
  const qe = (se) => {
    Pe(se.animationName === lu ? _.current : {
      value: "x"
    });
  };
  y.useEffect(() => {
    fe && fe.setAdornedStart(!!W);
  }, [fe, W]);
  const D = {
    ...r,
    color: de.color || "primary",
    disabled: de.disabled,
    endAdornment: d,
    error: de.error,
    focused: de.focused,
    formControl: fe,
    fullWidth: w,
    hiddenLabel: de.hiddenLabel,
    multiline: T,
    size: de.size,
    startAdornment: W,
    type: Q
  }, le = OE(D), ie = U.root || wc, oe = F.root || {}, Oe = U.input || Cc;
  return Fe = {
    ...Fe,
    ...F.input
  }, /* @__PURE__ */ f.jsxs(y.Fragment, {
    children: [!g && typeof Mg == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Ig || (Ig = /* @__PURE__ */ f.jsx(Mg, {}))), /* @__PURE__ */ f.jsxs(ie, {
      ...oe,
      ref: n,
      onClick: tt,
      ...X,
      ...!ou(ie) && {
        ownerState: {
          ...D,
          ...oe.ownerState
        }
      },
      className: te(le.root, oe.className, a, O && "MuiInputBase-readOnly"),
      children: [W, /* @__PURE__ */ f.jsx(fh.Provider, {
        value: null,
        children: /* @__PURE__ */ f.jsx(Oe, {
          "aria-invalid": de.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: c,
          disabled: de.disabled,
          id: C,
          onAnimationStart: qe,
          name: R,
          placeholder: P,
          readOnly: O,
          required: de.required,
          rows: $,
          value: K,
          onKeyDown: b,
          onKeyUp: j,
          type: Q,
          ...Fe,
          ...!ou(Oe) && {
            as: Xe,
            ownerState: {
              ...D,
              ...Fe.ownerState
            }
          },
          ref: re,
          className: te(le.input, Fe.className, O && "MuiInputBase-readOnly"),
          onBlur: me,
          onChange: je,
          onFocus: $e
        })
      }), d, B ? B({
        ...de,
        startAdornment: W
      }) : null]
    })]
  });
});
function BE(e) {
  return ye("MuiFilledInput", e);
}
const uo = {
  ...an,
  ...pe("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function LE(e) {
  return ye("MuiFormHelperText", e);
}
const $g = pe("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function zE(e) {
  return ye("MuiFormLabel", e);
}
const Ts = pe("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function _E(e) {
  return ye("MuiInput", e);
}
const ts = {
  ...an,
  ...pe("MuiInput", ["root", "underline", "input"])
};
function FE(e) {
  return ye("MuiMenuItem", e);
}
const ns = pe("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function DE(e) {
  return ye("MuiNativeSelect", e);
}
const yh = pe("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function WE(e) {
  return ye("MuiOutlinedInput", e);
}
const Xn = {
  ...an,
  ...pe("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function UE({
  theme: e,
  ...t
}) {
  const n = ir in e ? e[ir] : void 0;
  return /* @__PURE__ */ f.jsx(N1, {
    ...t,
    themeId: n ? ir : void 0,
    theme: n || e
  });
}
const Gl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: VE
} = kk({
  themeId: ir,
  // @ts-ignore ignore module augmentation tests
  theme: () => vc({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Gl.colorSchemeStorageKey,
  modeStorageKey: Gl.modeStorageKey,
  defaultColorScheme: {
    light: Gl.defaultLightColorScheme,
    dark: Gl.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: U1(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Io({
        sx: r,
        theme: this
      });
    }, t;
  }
}), HE = VE;
function KE({
  theme: e,
  ...t
}) {
  const n = y.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = ir in e ? e[ir] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ f.jsx(UE, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ f.jsx(HE, {
    theme: e,
    ...t
  });
}
function jg(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function GE(e) {
  return ye("MuiSvgIcon", e);
}
pe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const YE = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ce(t)}`, `fontSize${ce(n)}`]
  };
  return ve(o, GE, r);
}, QE = H("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ce(n.color)}`], t[`fontSize${ce(n.fontSize)}`]];
  }
})(we(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, u, c, h, g;
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
        var v, w;
        return {
          props: {
            color: d
          },
          style: {
            color: (w = (v = (e.vars ?? e).palette) == null ? void 0 : v[d]) == null ? void 0 : w.main
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
})), $f = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    titleAccess: h,
    viewBox: g = "0 0 24 24",
    ...d
  } = r, v = /* @__PURE__ */ y.isValidElement(o) && o.type === "svg", w = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: g,
    hasSvgAsChild: v
  }, C = {};
  c || (C.viewBox = g);
  const m = YE(w);
  return /* @__PURE__ */ f.jsxs(QE, {
    as: l,
    className: te(m.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: n,
    ...C,
    ...d,
    ...v && o.props,
    ownerState: w,
    children: [v ? o.props.children : o, h ? /* @__PURE__ */ f.jsx("title", {
      children: h
    }) : null]
  });
});
$f.muiName = "SvgIcon";
function Ke(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ f.jsx($f, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = $f.muiName, /* @__PURE__ */ y.memo(/* @__PURE__ */ y.forwardRef(n));
}
function jf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Af(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = y.useRef(t !== void 0), [s, l] = y.useState(n), a = i ? t : s, u = y.useCallback((c) => {
    i || l(c);
  }, []);
  return [a, u];
}
function X1(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function XE(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((u) => {
      X1(u, l[u]) && typeof s[u] == "function" && (a[u] = (...c) => {
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
const Ag = {};
function vh(e, t) {
  const n = y.useRef(Ag);
  return n.current === Ag && (n.current = e(t)), n;
}
function qE(e) {
  const t = vh(() => JE(e)).current;
  return t.next = e, dt(t.effect), t;
}
function JE(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Ng = Vy.createContext(null);
function ZE(e) {
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
function eT(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = ZE(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function q1(e) {
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
    nodeRef: h,
    onEnter: g,
    onEntering: d,
    onEntered: v,
    onExit: w,
    onExiting: C,
    onExited: m,
    children: p,
    ...x
  } = e, S = y.useContext(Ng), E = S && !S.isMounting ? r : n, [k, T] = y.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), R = y.useRef(k);
  R.current = k, t && k === "unmounted" && (R.current = "exited", T("exited"));
  const I = y.useRef(t && E), A = y.useRef(!1), M = y.useRef(null), N = y.useRef(k), b = y.useRef(!1), j = y.useRef(u), P = qE({
    timeout: l,
    addEndListener: a,
    reduceMotion: u,
    getAutoTimeout: c,
    onEnter: g,
    onEntering: d,
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
    const G = () => {
      Q && (Q = !1, M.current = null, W());
    };
    return G.cancel = () => {
      Q = !1;
    }, M.current = G, G;
  }, []), $ = y.useCallback((W, Q) => {
    var ze, Pe;
    let G;
    const X = () => {
      G !== void 0 && (clearTimeout(G), G = void 0);
    }, K = B(() => {
      X(), R.current = W, T(W);
    }), q = K.cancel;
    K.cancel = () => {
      X(), q();
    };
    const _ = P.current.nodeRef.current, ne = P.current.addEndListener, re = P.current.getAutoTimeout !== void 0, ke = (Pe = (ze = P.current).getAutoTimeout) == null ? void 0 : Pe.call(ze), he = eT({
      currentStatus: Q,
      isAppearing: b.current,
      timeout: P.current.timeout,
      autoTimeout: ke
    }), de = j.current, fe = he ?? (de && re ? 0 : null), Me = ($e) => {
      G = setTimeout(K, $e);
    };
    if (!_) {
      Me(0);
      return;
    }
    if (ne) {
      fe != null && Me(de ? 0 : fe), ne.length >= 2 ? ne(_, K) : ne(K);
      return;
    }
    Me(de ? 0 : he ?? 0);
  }, [B, P]), L = y.useCallback((W) => {
    var X;
    const Q = P.current, G = Q.parentGroup ? Q.parentGroup.isMounting : W;
    if (b.current = G, !W && !Q.enter) {
      R.current = "entered", T("entered");
      return;
    }
    j.current = Q.reduceMotion, (X = Q.onEnter) == null || X.call(Q, G), R.current = "entering", T("entering");
  }, [P]), F = y.useCallback(() => {
    var Q;
    const W = P.current;
    if (!W.exit) {
      R.current = "exited", T("exited");
      return;
    }
    j.current = W.reduceMotion, (Q = W.onExit) == null || Q.call(W), R.current = "exiting", T("exiting");
  }, [P]), U = y.useCallback((W, Q) => {
    if (O(), Q === "entering") {
      const G = P.current;
      if (G.mountOnEnter || G.unmountOnExit) {
        const X = G.nodeRef.current;
        X && hh(X);
      }
      L(W);
    } else
      F();
  }, [O, L, F, P]);
  return dt(() => (A.current = !0, I.current && (I.current = !1, U(!0, "entering")), () => {
    A.current = !1, O();
  }), [O, U]), dt(() => {
    if (!A.current)
      return;
    const W = R.current;
    t ? W !== "entering" && W !== "entered" && U(!1, "entering") : W === "entering" || W === "entered" ? U(!1, "exiting") : W === "exited" && s && (R.current = "unmounted", T("unmounted"));
  }, [t, k, s, U]), dt(() => {
    var X, K, q, _;
    if (k === "unmounted" || N.current === "unmounted") {
      N.current = k;
      return;
    }
    const Q = N.current !== k;
    Q && (N.current = k);
    const G = P.current;
    k === "entering" ? (Q && ((X = G.onEntering) == null || X.call(G, b.current)), M.current === null && R.current === k && $("entered", "entering")) : k === "exiting" ? (Q && ((K = G.onExiting) == null || K.call(G)), M.current === null && R.current === k && $("exited", "exiting")) : k === "entered" && Q ? (q = G.onEntered) == null || q.call(G, b.current) : k === "exited" && Q && ((_ = G.onExited) == null || _.call(G));
  }, [P, $, k]), k === "unmounted" ? null : /* @__PURE__ */ f.jsx(Ng.Provider, {
    value: null,
    children: p(k, x)
  });
}
const J1 = "(prefers-reduced-motion: reduce)", tT = 0, nT = "0ms", rT = () => {
}, Og = () => !1, oT = () => !0, iT = () => rT;
function sT(e) {
  const [t, n] = y.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), dt(() => {
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
    const i = window.matchMedia(J1), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const lT = {
  ...Ma
}, Z1 = lT.useSyncExternalStore;
function aT(e) {
  const t = e ? oT : Og, [n, r] = y.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [Og, iT];
    const o = window.matchMedia(J1);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return Z1(r, n, t);
}
const uT = Z1 !== void 0 ? aT : sT;
function kc(e, t) {
  const n = uT(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return y.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: tT,
        delay: nT
      } : o;
    }
  }), [r]);
}
function ex(e, t, n) {
  return e === void 0 || ou(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function tx(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function au(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    X1(n, e[n]) && (t[n] = e[n]);
  return t;
}
function Bg(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function nx(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const d = te(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), v = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, w = {
      ...n,
      ...o,
      ...r
    };
    return d.length > 0 && (w.className = d), Object.keys(v).length > 0 && (w.style = v), {
      props: w,
      internalRef: void 0
    };
  }
  const s = au({
    ...o,
    ...r
  }), l = Bg(r), a = Bg(o), u = t(s), c = te(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = {
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
  return c.length > 0 && (g.className = c), Object.keys(h).length > 0 && (g.style = h), {
    props: g,
    internalRef: u.ref
  };
}
function Se(e, t) {
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
    slotProps: h = {
      [e]: void 0
    },
    ...g
  } = i, d = c[e] || r, v = tx(h[e], o), {
    props: {
      component: w,
      ...C
    },
    internalRef: m
  } = nx({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: v
  }), p = pt(m, v == null ? void 0 : v.ref, t.ref), x = e === "root" ? w || u : w, S = ex(d, {
    ...e === "root" && !u && !c[e] && s,
    ...e !== "root" && !c[e] && s,
    ...C,
    ...x && !l && {
      as: x
    },
    ...x && l && {
      component: x
    },
    ref: p
  }, o);
  return [d, S];
}
function cT(e) {
  return ye("MuiPaper", e);
}
pe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const dT = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ve(i, cT, o);
}, fT = H("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(we(({
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
}))), ar = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var d;
  const r = xe({
    props: t,
    name: "MuiPaper"
  }), o = ro(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: u = "elevation",
    ...c
  } = r, h = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: u
  }, g = dT(h);
  return /* @__PURE__ */ f.jsx(fT, {
    as: s,
    ownerState: h,
    className: te(g.root, i),
    ref: n,
    ...c,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (d = o.vars.overlays) == null ? void 0 : d[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${rl("#fff", If(l))}, ${rl("#fff", If(l))})`
        }
      },
      ...c.style
    }
  });
});
function uu(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function pT(e) {
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
      onKeyDown(c) {
        n && t && c.key !== "Tab" && c.preventDefault();
      }
    };
    return r || (u.tabIndex = o, !i && n && (u.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (u["aria-disabled"] = n), i && (!t || l) && (u.disabled = n), u;
  }, [r, n, t, s, l, i, o]);
}
const hT = {};
function mT(e) {
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
  } = e, c = y.useRef(null), h = s === !0, g = pT({
    focusableWhenDisabled: h,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), d = y.useCallback(() => {
    const C = c.current;
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
    getButtonProps: y.useCallback((C = hT) => {
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
          if (h && g.onKeyDown(R), !n && (a == null || a(R), p == null || p(R), !(R.target !== R.currentTarget || d()))) {
            if (R.key === " ") {
              R.preventDefault();
              return;
            }
            R.key === "Enter" && (R.preventDefault(), R.currentTarget.click());
          }
        },
        onKeyUp: (R) => {
          n || (u == null || u(R), x == null || x(R), R.target === R.currentTarget && !d() && R.key === " " && !R.defaultPrevented && R.currentTarget.click());
        }
      };
    }, [v, n, h, g, d, a, u, l]),
    rootRef: c
  };
}
class cu {
  constructor() {
    Vi(this, "mountEffect", () => {
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
    return new cu();
  }
  static use() {
    const t = vh(cu.create).current, [n, r] = y.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, y.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = yT(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function gT() {
  return cu.use();
}
function yT() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const vT = [];
function rx(e) {
  y.useEffect(e, vT);
}
class Ec {
  constructor() {
    Vi(this, "currentId", null);
    Vi(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Vi(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Ec();
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
function nr() {
  const e = vh(Ec.create).current;
  return rx(e.disposeEffect), e;
}
function xT(e) {
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
  } = e, [c, h] = y.useState(!1), g = nr(), d = y.useRef(!1), v = y.useRef(a);
  v.current = a;
  const w = a != null, C = te(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), m = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, p = te(n.child, c && n.childLeaving, r && n.childPulsate);
  return !l && !c && h(!0), y.useEffect(() => {
    !l && w ? d.current || (d.current = !0, g.start(u, () => {
      var x;
      d.current = !1, (x = v.current) == null || x.call(v);
    })) : (d.current = !1, g.clear());
  }, [g, w, l, u]), /* @__PURE__ */ f.jsx("span", {
    className: C,
    style: m,
    children: /* @__PURE__ */ f.jsx("span", {
      className: p
    })
  });
}
const Yt = pe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Nf = 550, bT = 80, Yl = {}, Lg = [], ST = () => {
};
function gd(e, t) {
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
function wT({
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
const CT = gl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, kT = gl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ET = gl`
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
function TT(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = tl`
    &.${Yt.rippleVisible} {
      animation-name: ${CT};
      animation-duration: ${Nf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Yt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Yt.childLeaving} {
      animation-name: ${kT};
      animation-duration: ${Nf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Yt.childPulsate} {
      animation-name: ${ET};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? tl`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const RT = H("span", {
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
}), PT = H(xT, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Yt.rippleVisible} {
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
  & .${Yt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Yt.childLeaving} {
    opacity: 0;
  }

  & .${Yt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => TT(e)}
`, IT = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTouchRipple"
  }), o = ro(), i = kc(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Yl,
    className: a,
    ...u
  } = r, [c, h] = y.useState({
    items: Lg,
    order: Lg
  }), g = c.items, d = y.useRef(0), v = y.useRef(null), w = y.useRef(!1);
  rx(() => (w.current = !0, () => {
    w.current = !1;
  })), y.useEffect(() => {
    v.current && (v.current(), v.current = null);
  }, [g]);
  const C = y.useRef(!1), m = nr(), p = y.useRef(null), x = y.useRef(null), S = et((M) => {
    w.current && h((N) => {
      const b = N.items.filter((P) => P.key !== M), j = gd(N.order.filter((P) => P !== M), b.filter((P) => !P.exiting).map((P) => P.key));
      return {
        items: b,
        order: j
      };
    });
  }), E = et((M) => {
    const {
      pulsate: N,
      rippleX: b,
      rippleY: j,
      rippleSize: P,
      cb: O
    } = M, B = d.current;
    d.current += 1, h(($) => {
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
        order: gd($.order, L.filter((F) => !F.exiting).map((F) => F.key))
      };
    }), v.current = O;
  }), k = et((M = Yl, N = Yl, b = ST) => {
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
      rippleSize: F
    } = wT({
      event: M,
      element: B,
      center: P
    });
    M != null && M.touches ? p.current === null && (p.current = () => {
      E({
        pulsate: j,
        rippleX: $,
        rippleY: L,
        rippleSize: F,
        cb: b
      });
    }, m.start(bT, () => {
      p.current && (p.current(), p.current = null);
    })) : E({
      pulsate: j,
      rippleX: $,
      rippleY: L,
      rippleSize: F,
      cb: b
    });
  }), T = et(() => {
    k(Yl, {
      pulsate: !0
    });
  }), R = et((M, N) => {
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
        order: gd(b.order, P.filter((O) => !O.exiting).map((O) => O.key))
      };
    }), v.current = N;
  });
  y.useImperativeHandle(n, () => ({
    pulsate: T,
    start: k,
    stop: R
  }), [T, k, R]);
  const I = new Map(g.map((M) => [M.key, M])), A = c.order.map((M) => I.get(M)).filter(Boolean);
  return /* @__PURE__ */ f.jsx(RT, {
    className: te(Yt.root, l.root, a),
    ref: x,
    ...u,
    children: A.map((M) => /* @__PURE__ */ f.jsx(PT, {
      classes: {
        ripple: te(l.ripple, Yt.ripple),
        rippleVisible: te(l.rippleVisible, Yt.rippleVisible),
        ripplePulsate: te(l.ripplePulsate, Yt.ripplePulsate),
        child: te(l.child, Yt.child),
        childLeaving: te(l.childLeaving, Yt.childLeaving),
        childPulsate: te(l.childPulsate, Yt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : Nf,
      pulsate: M.pulsate,
      rippleX: M.rippleX,
      rippleY: M.rippleY,
      rippleSize: M.rippleSize,
      in: !M.exiting,
      onExited: () => S(M.key)
    }, M.key))
  });
});
function MT(e) {
  return ye("MuiButtonBase", e);
}
const Of = pe("MuiButtonBase", ["root", "disabled", "focusVisible"]), $T = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = ve({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, MT, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, jT = H("button", {
  name: "MuiButtonBase",
  slot: "Root"
})(we(({
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
  [`&.${Of.disabled}`]: {
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
      ...Gk,
      [`&.${Of.focusVisible}`]: e.focusVisible
    }
  }]
}))), Mo = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    disableTouchRipple: h = !1,
    focusRipple: g = !1,
    focusVisibleClassName: d,
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
    touchRippleRef: F,
    type: U,
    ...W
  } = r, Q = !!(W.href || W.to), G = !!W.formAction;
  let X = a;
  X === "button" && Q && (X = p);
  const q = x ?? (typeof X == "string" ? X === "button" : C ?? !1), _ = gT(), ne = pt(_.ref, F), [re, ke] = y.useState(!1);
  (u || w) && re && ke(!1);
  const he = et((De) => {
    g && !De.repeat && re && De.key === " " && _.stop(De, () => {
      _.start(De);
    });
  }), de = et((De) => {
    g && De.key === " " && re && !De.defaultPrevented && _.stop(De, () => {
      _.pulsate(De);
    });
  }), {
    getButtonProps: fe,
    rootRef: Me
  } = mT({
    nativeButton: q,
    disabled: u,
    type: U,
    hasFormAction: G,
    tabIndex: $,
    onBeforeKeyDown: he,
    onBeforeKeyUp: de
  }), {
    onClick: ze,
    onKeyDown: Pe,
    onKeyUp: $e,
    ...me
  } = fe({
    onClick: E,
    onKeyDown: A,
    onKeyUp: M
  });
  y.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ke(!0), Me.current.focus();
    }
  }), [Me]);
  const je = _.shouldMount && !c && !u;
  y.useEffect(() => {
    re && g && !c && _.pulsate();
  }, [c, g, re, _]);
  const tt = pr(_, "start", N, h), Xe = pr(_, "stop", k, h), Fe = pr(_, "stop", T, h), qe = pr(_, "stop", j, h), D = pr(_, "stop", (De) => {
    re && De.preventDefault(), b && b(De);
  }, h), le = pr(_, "start", B, h), ie = pr(_, "stop", P, h), oe = pr(_, "stop", O, h), Oe = pr(_, "stop", (De) => {
    uu(De.target) || ke(!1), S && S(De);
  }, !1), se = et((De) => {
    Me.current || (Me.current = De.currentTarget), !w && uu(De.target) && (ke(!0), I && I(De)), R && R(De);
  }), ae = {};
  Q && (ae.tabIndex = u ? -1 : $, u && (ae["aria-disabled"] = u), ae.type = U);
  const Ge = pt(n, Me), ot = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: h,
    focusRipple: g,
    suppressFocusVisible: w,
    tabIndex: $,
    focusVisible: re,
    internalDisabledThemeFocusVisible: m
  }, ht = $T(ot);
  return /* @__PURE__ */ f.jsxs(jT, {
    as: X,
    className: te(ht.root, l),
    ownerState: ot,
    onBlur: Oe,
    onClick: ze,
    onContextMenu: Xe,
    onFocus: se,
    onKeyDown: Pe,
    onKeyUp: $e,
    onMouseDown: tt,
    onMouseLeave: D,
    onMouseUp: qe,
    onDragLeave: Fe,
    onTouchEnd: ie,
    onTouchMove: oe,
    onTouchStart: le,
    ref: Ge,
    ...Q ? ae : me,
    ...W,
    children: [s, je ? /* @__PURE__ */ f.jsx(IT, {
      ref: ne,
      center: i,
      ...L
    }) : null]
  });
});
function pr(e, t, n, r = !1) {
  return et((o) => (n && n(o), r || e[t](o), !0));
}
function AT(e) {
  return typeof e.main == "string";
}
function NT(e, t = []) {
  if (!AT(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Nt(e = []) {
  return ([, t]) => t && NT(t, e);
}
function OT(e) {
  return ye("MuiAlert", e);
}
const zg = pe("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function BT(e) {
  return ye("MuiCircularProgress", e);
}
pe("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const On = 44, Bf = gl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Lf = gl`
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
`, LT = typeof Bf != "string" ? tl`
        animation: ${Bf} 1.4s linear infinite;
      ` : null, zT = typeof Lf != "string" ? tl`
        animation: ${Lf} 1.4s ease-in-out infinite;
      ` : null, _T = (e) => {
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
  return ve(i, BT, t);
}, FT = H("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ce(n.color)}`]];
  }
})(we(({
  theme: e
}) => {
  const t = mh(e, {
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
      style: LT || {
        animation: `${Bf} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Nt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), DT = H("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), WT = H("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(we(({
  theme: e
}) => {
  const t = mh(e, {
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
      style: zT || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${Lf} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), UT = H("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(we(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Rs = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    style: h,
    thickness: g = 3.6,
    value: d = r.min ?? 0,
    variant: v = "indeterminate",
    ...w
  } = r, C = a ?? 0, m = u ?? 100, p = {
    ...r,
    color: i,
    disableShrink: s,
    size: c,
    thickness: g,
    value: d,
    variant: v,
    enableTrackSlot: l
  }, x = _T(p), S = {}, E = {}, k = {};
  if (v === "determinate") {
    const T = 2 * Math.PI * ((On - g) / 2), R = m - C;
    S.strokeDasharray = T.toFixed(3), S.strokeDashoffset = R > 0 ? `${((m - d) / R * T).toFixed(3)}px` : `${T.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = d, k["aria-valuemin"] = C, k["aria-valuemax"] = m;
  }
  return /* @__PURE__ */ f.jsx(FT, {
    className: te(x.root, o),
    style: {
      width: c,
      height: c,
      ...E,
      ...h
    },
    ownerState: p,
    ref: n,
    role: "progressbar",
    ...k,
    ...w,
    children: /* @__PURE__ */ f.jsxs(DT, {
      className: x.svg,
      ownerState: p,
      viewBox: `${On / 2} ${On / 2} ${On} ${On}`,
      children: [l ? /* @__PURE__ */ f.jsx(UT, {
        className: x.track,
        ownerState: p,
        cx: On,
        cy: On,
        r: (On - g) / 2,
        fill: "none",
        strokeWidth: g,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ f.jsx(WT, {
        className: x.circle,
        style: S,
        ownerState: p,
        cx: On,
        cy: On,
        r: (On - g) / 2,
        fill: "none",
        strokeWidth: g
      })]
    })
  });
});
function VT(e) {
  return ye("MuiIconButton", e);
}
const _g = pe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), HT = (e) => {
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
  return ve(l, VT, t);
}, KT = H(Mo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ce(n.color)}`], n.edge && t[`edge${ce(n.edge)}`], t[`size${ce(n.size)}`]];
  }
})(we(({
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
})), we(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
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
  [`&.${_g.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${_g.loading}`]: {
    color: "transparent"
  }
}))), GT = H("span", {
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
})), zn = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    id: h,
    loading: g = null,
    loadingIndicator: d,
    ...v
  } = r, w = Ir(h), C = d ?? /* @__PURE__ */ f.jsx(Rs, {
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
    size: c
  }, p = HT(m);
  return /* @__PURE__ */ f.jsxs(KT, {
    id: g ? w : h,
    className: te(p.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !u,
    disabled: a || g,
    ref: n,
    ...v,
    ownerState: m,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ f.jsx("span", {
      className: p.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ f.jsx(GT, {
        className: p.loadingIndicator,
        ownerState: m,
        children: g && C
      })
    }), i]
  });
}), YT = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), QT = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), XT = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), qT = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), JT = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), ZT = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${ce(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return ve(i, OT, o);
}, eR = H(ar, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})(we(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, n = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(Nt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${zg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Nt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${zg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Nt(["dark"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: {
        ...e.focusVisible && F1(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
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
})), tR = H("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), nR = H("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), rR = H("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Fg = {
  success: /* @__PURE__ */ f.jsx(YT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ f.jsx(QT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ f.jsx(XT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ f.jsx(qT, {
    fontSize: "inherit"
  })
}, Dg = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    icon: u,
    iconMapping: c = Fg,
    onClose: h,
    role: g = "alert",
    severity: d = "success",
    slotProps: v = {},
    slots: w = {},
    variant: C = "standard",
    ...m
  } = r, p = {
    ...r,
    color: a,
    severity: d,
    variant: C,
    colorSeverity: a || d
  }, x = ZT(p), S = {
    slots: w,
    slotProps: v
  }, [E, k] = Se("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: te(x.root, s),
    elementType: eR,
    externalForwardedProps: {
      ...S,
      ...m
    },
    ownerState: p,
    additionalProps: {
      role: g,
      elevation: 0
    }
  }), [T, R] = Se("icon", {
    className: x.icon,
    elementType: tR,
    externalForwardedProps: S,
    ownerState: p
  }), [I, A] = Se("message", {
    className: x.message,
    elementType: nR,
    externalForwardedProps: S,
    ownerState: p
  }), [M, N] = Se("action", {
    className: x.action,
    elementType: rR,
    externalForwardedProps: S,
    ownerState: p
  }), [b, j] = Se("closeButton", {
    elementType: zn,
    externalForwardedProps: S,
    ownerState: p
  }), [P, O] = Se("closeIcon", {
    elementType: JT,
    externalForwardedProps: S,
    ownerState: p
  });
  return /* @__PURE__ */ f.jsxs(E, {
    ...k,
    children: [u !== !1 ? /* @__PURE__ */ f.jsx(T, {
      ...R,
      children: u || c[d] || Fg[d]
    }) : null, /* @__PURE__ */ f.jsx(I, {
      ...A,
      children: i
    }), o != null ? /* @__PURE__ */ f.jsx(M, {
      ...N,
      children: o
    }) : null, o == null && h ? /* @__PURE__ */ f.jsx(M, {
      ...N,
      children: /* @__PURE__ */ f.jsx(b, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: h,
        ...j,
        children: /* @__PURE__ */ f.jsx(P, {
          fontSize: "small",
          ...O
        })
      })
    }) : null]
  });
});
function oR(e) {
  return ye("MuiTypography", e);
}
pe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const iR = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${ce(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return ve(s, oR, i);
}, sR = H("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ce(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(we(({
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
    })), ...Object.entries(e.palette).filter(Nt()).map(([n]) => ({
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
})), Wg = {
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
}, Te = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    variantMapping: h = Wg,
    ...g
  } = r, d = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: u,
    variant: c,
    variantMapping: h
  }, v = l || h[c] || Wg[c] || "span", w = iR(d);
  return /* @__PURE__ */ f.jsx(sR, {
    as: v,
    ref: n,
    className: te(w.root, s),
    ...g,
    ownerState: d,
    style: {
      ...i !== "inherit" && {
        "--Typography-textAlign": i
      },
      ...g.style
    }
  });
});
function So(e, t) {
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
var rn = "top", Mn = "bottom", $n = "right", on = "left", xh = "auto", xl = [rn, Mn, $n, on], Ri = "start", ol = "end", lR = "clippingParents", ox = "viewport", rs = "popper", aR = "reference", Ug = /* @__PURE__ */ xl.reduce(function(e, t) {
  return e.concat([t + "-" + Ri, t + "-" + ol]);
}, []), ix = /* @__PURE__ */ [].concat(xl, [xh]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ri, t + "-" + ol]);
}, []), uR = "beforeRead", cR = "read", dR = "afterRead", fR = "beforeMain", pR = "main", hR = "afterMain", mR = "beforeWrite", gR = "write", yR = "afterWrite", vR = [uR, cR, dR, fR, pR, hR, mR, gR, yR];
function ur(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function hn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function $o(e) {
  var t = hn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Rn(e) {
  var t = hn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function bh(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = hn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function xR(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Rn(i) || !ur(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function bR(e) {
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
      !Rn(o) || !ur(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const SR = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: xR,
  effect: bR,
  requires: ["computeStyles"]
};
function lr(e) {
  return e.split("-")[0];
}
var wo = Math.max, du = Math.min, Pi = Math.round;
function zf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function sx() {
  return !/^((?!chrome|android).)*safari/i.test(zf());
}
function Ii(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Rn(e) && (o = e.offsetWidth > 0 && Pi(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Pi(r.height) / e.offsetHeight || 1);
  var s = $o(e) ? hn(e) : window, l = s.visualViewport, a = !sx() && n, u = (r.left + (a && l ? l.offsetLeft : 0)) / o, c = (r.top + (a && l ? l.offsetTop : 0)) / i, h = r.width / o, g = r.height / i;
  return {
    width: h,
    height: g,
    top: c,
    right: u + h,
    bottom: c + g,
    left: u,
    x: u,
    y: c
  };
}
function Sh(e) {
  var t = Ii(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function lx(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && bh(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Mr(e) {
  return hn(e).getComputedStyle(e);
}
function wR(e) {
  return ["table", "td", "th"].indexOf(ur(e)) >= 0;
}
function oo(e) {
  return (($o(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Tc(e) {
  return ur(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (bh(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    oo(e)
  );
}
function Vg(e) {
  return !Rn(e) || // https://github.com/popperjs/popper-core/issues/837
  Mr(e).position === "fixed" ? null : e.offsetParent;
}
function CR(e) {
  var t = /firefox/i.test(zf()), n = /Trident/i.test(zf());
  if (n && Rn(e)) {
    var r = Mr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Tc(e);
  for (bh(o) && (o = o.host); Rn(o) && ["html", "body"].indexOf(ur(o)) < 0; ) {
    var i = Mr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function bl(e) {
  for (var t = hn(e), n = Vg(e); n && wR(n) && Mr(n).position === "static"; )
    n = Vg(n);
  return n && (ur(n) === "html" || ur(n) === "body" && Mr(n).position === "static") ? t : n || CR(e) || t;
}
function wh(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ps(e, t, n) {
  return wo(e, du(t, n));
}
function kR(e, t, n) {
  var r = Ps(e, t, n);
  return r > n ? n : r;
}
function ax() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ux(e) {
  return Object.assign({}, ax(), e);
}
function cx(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var ER = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ux(typeof t != "number" ? t : cx(t, xl));
};
function TR(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = lr(n.placement), a = wh(l), u = [on, $n].indexOf(l) >= 0, c = u ? "height" : "width";
  if (!(!i || !s)) {
    var h = ER(o.padding, n), g = Sh(i), d = a === "y" ? rn : on, v = a === "y" ? Mn : $n, w = n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c], C = s[a] - n.rects.reference[a], m = bl(i), p = m ? a === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, x = w / 2 - C / 2, S = h[d], E = p - g[c] - h[v], k = p / 2 - g[c] / 2 + x, T = Ps(S, k, E), R = a;
    n.modifiersData[r] = (t = {}, t[R] = T, t.centerOffset = T - k, t);
  }
}
function RR(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || lx(t.elements.popper, o) && (t.elements.arrow = o));
}
const PR = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: TR,
  effect: RR,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Mi(e) {
  return e.split("-")[1];
}
var IR = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function MR(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Pi(n * o) / o || 0,
    y: Pi(r * o) / o || 0
  };
}
function Hg(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, h = e.isFixed, g = s.x, d = g === void 0 ? 0 : g, v = s.y, w = v === void 0 ? 0 : v, C = typeof c == "function" ? c({
    x: d,
    y: w
  }) : {
    x: d,
    y: w
  };
  d = C.x, w = C.y;
  var m = s.hasOwnProperty("x"), p = s.hasOwnProperty("y"), x = on, S = rn, E = window;
  if (u) {
    var k = bl(n), T = "clientHeight", R = "clientWidth";
    if (k === hn(n) && (k = oo(n), Mr(k).position !== "static" && l === "absolute" && (T = "scrollHeight", R = "scrollWidth")), k = k, o === rn || (o === on || o === $n) && i === ol) {
      S = Mn;
      var I = h && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      w -= I - r.height, w *= a ? 1 : -1;
    }
    if (o === on || (o === rn || o === Mn) && i === ol) {
      x = $n;
      var A = h && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      d -= A - r.width, d *= a ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, u && IR), N = c === !0 ? MR({
    x: d,
    y: w
  }, hn(n)) : {
    x: d,
    y: w
  };
  if (d = N.x, w = N.y, a) {
    var b;
    return Object.assign({}, M, (b = {}, b[S] = p ? "0" : "", b[x] = m ? "0" : "", b.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + w + "px)" : "translate3d(" + d + "px, " + w + "px, 0)", b));
  }
  return Object.assign({}, M, (t = {}, t[S] = p ? w + "px" : "", t[x] = m ? d + "px" : "", t.transform = "", t));
}
function $R(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, u = {
    placement: lr(t.placement),
    variation: Mi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Hg(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Hg(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const jR = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: $R,
  data: {}
};
var Ql = {
  passive: !0
};
function AR(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = hn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Ql);
  }), l && a.addEventListener("resize", n.update, Ql), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Ql);
    }), l && a.removeEventListener("resize", n.update, Ql);
  };
}
const NR = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: AR,
  data: {}
};
var OR = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ra(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return OR[t];
  });
}
var BR = {
  start: "end",
  end: "start"
};
function Kg(e) {
  return e.replace(/start|end/g, function(t) {
    return BR[t];
  });
}
function Ch(e) {
  var t = hn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function kh(e) {
  return Ii(oo(e)).left + Ch(e).scrollLeft;
}
function LR(e, t) {
  var n = hn(e), r = oo(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = sx();
    (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + kh(e),
    y: a
  };
}
function zR(e) {
  var t, n = oo(e), r = Ch(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = wo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = wo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + kh(e), a = -r.scrollTop;
  return Mr(o || n).direction === "rtl" && (l += wo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Eh(e) {
  var t = Mr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function dx(e) {
  return ["html", "body", "#document"].indexOf(ur(e)) >= 0 ? e.ownerDocument.body : Rn(e) && Eh(e) ? e : dx(Tc(e));
}
function Is(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = dx(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = hn(r), s = o ? [i].concat(i.visualViewport || [], Eh(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Is(Tc(s)))
  );
}
function _f(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _R(e, t) {
  var n = Ii(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Gg(e, t, n) {
  return t === ox ? _f(LR(e, n)) : $o(t) ? _R(t, n) : _f(zR(oo(e)));
}
function FR(e) {
  var t = Is(Tc(e)), n = ["absolute", "fixed"].indexOf(Mr(e).position) >= 0, r = n && Rn(e) ? bl(e) : e;
  return $o(r) ? t.filter(function(o) {
    return $o(o) && lx(o, r) && ur(o) !== "body";
  }) : [];
}
function DR(e, t, n, r) {
  var o = t === "clippingParents" ? FR(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, u) {
    var c = Gg(e, u, r);
    return a.top = wo(c.top, a.top), a.right = du(c.right, a.right), a.bottom = du(c.bottom, a.bottom), a.left = wo(c.left, a.left), a;
  }, Gg(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function fx(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? lr(r) : null, i = r ? Mi(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case rn:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Mn:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case $n:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case on:
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
  var u = o ? wh(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Ri:
        a[u] = a[u] - (t[c] / 2 - n[c] / 2);
        break;
      case ol:
        a[u] = a[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return a;
}
function il(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? lR : l, u = n.rootBoundary, c = u === void 0 ? ox : u, h = n.elementContext, g = h === void 0 ? rs : h, d = n.altBoundary, v = d === void 0 ? !1 : d, w = n.padding, C = w === void 0 ? 0 : w, m = ux(typeof C != "number" ? C : cx(C, xl)), p = g === rs ? aR : rs, x = e.rects.popper, S = e.elements[v ? p : g], E = DR($o(S) ? S : S.contextElement || oo(e.elements.popper), a, c, s), k = Ii(e.elements.reference), T = fx({
    reference: k,
    element: x,
    placement: o
  }), R = _f(Object.assign({}, x, T)), I = g === rs ? R : k, A = {
    top: E.top - I.top + m.top,
    bottom: I.bottom - E.bottom + m.bottom,
    left: E.left - I.left + m.left,
    right: I.right - E.right + m.right
  }, M = e.modifiersData.offset;
  if (g === rs && M) {
    var N = M[o];
    Object.keys(A).forEach(function(b) {
      var j = [$n, Mn].indexOf(b) >= 0 ? 1 : -1, P = [rn, Mn].indexOf(b) >= 0 ? "y" : "x";
      A[b] += N[P] * j;
    });
  }
  return A;
}
function WR(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? ix : a, c = Mi(r), h = c ? l ? Ug : Ug.filter(function(v) {
    return Mi(v) === c;
  }) : xl, g = h.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  g.length === 0 && (g = h);
  var d = g.reduce(function(v, w) {
    return v[w] = il(e, {
      placement: w,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[lr(w)], v;
  }, {});
  return Object.keys(d).sort(function(v, w) {
    return d[v] - d[w];
  });
}
function UR(e) {
  if (lr(e) === xh)
    return [];
  var t = Ra(e);
  return [Kg(e), t, Kg(t)];
}
function VR(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, c = n.boundary, h = n.rootBoundary, g = n.altBoundary, d = n.flipVariations, v = d === void 0 ? !0 : d, w = n.allowedAutoPlacements, C = t.options.placement, m = lr(C), p = m === C, x = a || (p || !v ? [Ra(C)] : UR(C)), S = [C].concat(x).reduce(function(G, X) {
      return G.concat(lr(X) === xh ? WR(t, {
        placement: X,
        boundary: c,
        rootBoundary: h,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: w
      }) : X);
    }, []), E = t.rects.reference, k = t.rects.popper, T = /* @__PURE__ */ new Map(), R = !0, I = S[0], A = 0; A < S.length; A++) {
      var M = S[A], N = lr(M), b = Mi(M) === Ri, j = [rn, Mn].indexOf(N) >= 0, P = j ? "width" : "height", O = il(t, {
        placement: M,
        boundary: c,
        rootBoundary: h,
        altBoundary: g,
        padding: u
      }), B = j ? b ? $n : on : b ? Mn : rn;
      E[P] > k[P] && (B = Ra(B));
      var $ = Ra(B), L = [];
      if (i && L.push(O[N] <= 0), l && L.push(O[B] <= 0, O[$] <= 0), L.every(function(G) {
        return G;
      })) {
        I = M, R = !1;
        break;
      }
      T.set(M, L);
    }
    if (R)
      for (var F = v ? 3 : 1, U = function(X) {
        var K = S.find(function(q) {
          var _ = T.get(q);
          if (_)
            return _.slice(0, X).every(function(ne) {
              return ne;
            });
        });
        if (K)
          return I = K, "break";
      }, W = F; W > 0; W--) {
        var Q = U(W);
        if (Q === "break") break;
      }
    t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const HR = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: VR,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Yg(e, t, n) {
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
function Qg(e) {
  return [rn, $n, Mn, on].some(function(t) {
    return e[t] >= 0;
  });
}
function KR(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = il(t, {
    elementContext: "reference"
  }), l = il(t, {
    altBoundary: !0
  }), a = Yg(s, r), u = Yg(l, o, i), c = Qg(a), h = Qg(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": h
  });
}
const GR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: KR
};
function YR(e, t, n) {
  var r = lr(e), o = [on, rn].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [on, $n].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function QR(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = ix.reduce(function(c, h) {
    return c[h] = YR(h, t.rects, i), c;
  }, {}), l = s[t.placement], a = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const XR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: QR
};
function qR(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = fx({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const JR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: qR,
  data: {}
};
function ZR(e) {
  return e === "x" ? "y" : "x";
}
function eP(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, u = n.rootBoundary, c = n.altBoundary, h = n.padding, g = n.tether, d = g === void 0 ? !0 : g, v = n.tetherOffset, w = v === void 0 ? 0 : v, C = il(t, {
    boundary: a,
    rootBoundary: u,
    padding: h,
    altBoundary: c
  }), m = lr(t.placement), p = Mi(t.placement), x = !p, S = wh(m), E = ZR(S), k = t.modifiersData.popperOffsets, T = t.rects.reference, R = t.rects.popper, I = typeof w == "function" ? w(Object.assign({}, t.rects, {
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
      var b, j = S === "y" ? rn : on, P = S === "y" ? Mn : $n, O = S === "y" ? "height" : "width", B = k[S], $ = B + C[j], L = B - C[P], F = d ? -R[O] / 2 : 0, U = p === Ri ? T[O] : R[O], W = p === Ri ? -R[O] : -T[O], Q = t.elements.arrow, G = d && Q ? Sh(Q) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ax(), K = X[j], q = X[P], _ = Ps(0, T[O], G[O]), ne = x ? T[O] / 2 - F - _ - K - A.mainAxis : U - _ - K - A.mainAxis, re = x ? -T[O] / 2 + F + _ + q + A.mainAxis : W + _ + q + A.mainAxis, ke = t.elements.arrow && bl(t.elements.arrow), he = ke ? S === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, de = (b = M == null ? void 0 : M[S]) != null ? b : 0, fe = B + ne - de - he, Me = B + re - de, ze = Ps(d ? du($, fe) : $, B, d ? wo(L, Me) : L);
      k[S] = ze, N[S] = ze - B;
    }
    if (l) {
      var Pe, $e = S === "x" ? rn : on, me = S === "x" ? Mn : $n, je = k[E], tt = E === "y" ? "height" : "width", Xe = je + C[$e], Fe = je - C[me], qe = [rn, on].indexOf(m) !== -1, D = (Pe = M == null ? void 0 : M[E]) != null ? Pe : 0, le = qe ? Xe : je - T[tt] - R[tt] - D + A.altAxis, ie = qe ? je + T[tt] + R[tt] - D - A.altAxis : Fe, oe = d && qe ? kR(le, je, ie) : Ps(d ? le : Xe, je, d ? ie : Fe);
      k[E] = oe, N[E] = oe - je;
    }
    t.modifiersData[r] = N;
  }
}
const tP = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: eP,
  requiresIfExists: ["offset"]
};
function nP(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function rP(e) {
  return e === hn(e) || !Rn(e) ? Ch(e) : nP(e);
}
function oP(e) {
  var t = e.getBoundingClientRect(), n = Pi(t.width) / e.offsetWidth || 1, r = Pi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function iP(e, t, n) {
  n === void 0 && (n = !1);
  var r = Rn(t), o = Rn(t) && oP(t), i = oo(t), s = Ii(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ur(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Eh(i)) && (l = rP(t)), Rn(t) ? (a = Ii(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = kh(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function sP(e) {
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
function lP(e) {
  var t = sP(e);
  return vR.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function aP(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function uP(e) {
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
var Xg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function qg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function cP(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? Xg : o;
  return function(l, a, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Xg, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, h = [], g = !1, d = {
      state: c,
      setOptions: function(m) {
        var p = typeof m == "function" ? m(c.options) : m;
        w(), c.options = Object.assign({}, i, c.options, p), c.scrollParents = {
          reference: $o(l) ? Is(l) : l.contextElement ? Is(l.contextElement) : [],
          popper: Is(a)
        };
        var x = lP(uP([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = x.filter(function(S) {
          return S.enabled;
        }), v(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var m = c.elements, p = m.reference, x = m.popper;
          if (qg(p, x)) {
            c.rects = {
              reference: iP(p, bl(x), c.options.strategy === "fixed"),
              popper: Sh(x)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(A) {
              return c.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var S = 0; S < c.orderedModifiers.length; S++) {
              if (c.reset === !0) {
                c.reset = !1, S = -1;
                continue;
              }
              var E = c.orderedModifiers[S], k = E.fn, T = E.options, R = T === void 0 ? {} : T, I = E.name;
              typeof k == "function" && (c = k({
                state: c,
                options: R,
                name: I,
                instance: d
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: aP(function() {
        return new Promise(function(C) {
          d.forceUpdate(), C(c);
        });
      }),
      destroy: function() {
        w(), g = !0;
      }
    };
    if (!qg(l, a))
      return d;
    d.setOptions(u).then(function(C) {
      !g && u.onFirstUpdate && u.onFirstUpdate(C);
    });
    function v() {
      c.orderedModifiers.forEach(function(C) {
        var m = C.name, p = C.options, x = p === void 0 ? {} : p, S = C.effect;
        if (typeof S == "function") {
          var E = S({
            state: c,
            name: m,
            instance: d,
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
    return d;
  };
}
var dP = [NR, JR, jR, SR, XR, HR, tP, PR, GR], fP = /* @__PURE__ */ cP({
  defaultModifiers: dP
});
function $i(e) {
  var h;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : tx(n, r), {
    props: l,
    internalRef: a
  } = nx({
    ...i,
    externalSlotProps: s
  }), u = pt(a, s == null ? void 0 : s.ref, (h = e.additionalProps) == null ? void 0 : h.ref);
  return ex(t, {
    ...l,
    ref: u
  }, r);
}
function No(e) {
  var t;
  return parseInt(y.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function pP(e) {
  return typeof e == "function" ? e() : e;
}
const px = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = y.useState(null), a = pt(/* @__PURE__ */ y.isValidElement(r) ? No(r) : null, n);
  if (dt(() => {
    i || l(pP(o) || document.body);
  }, [o, i]), dt(() => {
    if (s && !i)
      return jf(n, s), () => {
        jf(n, null);
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
  return s && /* @__PURE__ */ Gv.createPortal(r, s);
});
function hP(e) {
  return ye("MuiPopper", e);
}
pe("MuiPopper", ["root"]);
function mP(e, t) {
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
function hx(e) {
  return typeof e == "function" ? e() : e;
}
function gP(e) {
  return e.nodeType !== void 0;
}
const yP = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, hP, t);
}, vP = {}, xP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: u,
    popperOptions: c,
    popperRef: h,
    slotProps: g = {},
    slots: d = {},
    TransitionProps: v,
    // @ts-ignore internal logic
    ownerState: w,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, m = y.useRef(null), p = pt(m, n), x = y.useRef(null), S = pt(x, h), E = y.useRef(S);
  dt(() => {
    E.current = S;
  }, [S]), y.useImperativeHandle(h, () => x.current, []);
  const k = mP(u, i), [T, R] = y.useState(k), I = y.useMemo(() => hx(r), [r]);
  y.useEffect(() => {
    x.current && x.current.forceUpdate();
  }), dt(() => {
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
    l != null && (P = P.concat(l)), c && c.modifiers != null && (P = P.concat(c.modifiers));
    const O = fP(I, m.current, {
      placement: k,
      ...c,
      modifiers: P
    });
    E.current(O);
    const B = m.current;
    return () => {
      if (B) {
        const {
          style: $
        } = B, L = $.position, F = $.top, U = $.left, W = $.transform;
        O.destroy(), $.position = L, $.top = F, $.left = U, $.transform = W;
      } else
        O.destroy();
      E.current(null);
    };
  }, [I, s, l, a, c, k]);
  const A = {
    placement: T
  };
  v !== null && (A.TransitionProps = v);
  const M = yP(t), N = d.root ?? "div", b = $i({
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
  return /* @__PURE__ */ f.jsx(N, {
    ...b,
    children: typeof o == "function" ? o(A) : o
  });
}), bP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: u,
    open: c,
    placement: h = "bottom",
    popperOptions: g = vP,
    popperRef: d,
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
  if (!a && !c && (!w || x))
    return null;
  let T;
  if (i)
    T = i;
  else if (r) {
    const A = hx(r);
    T = A && gP(A) ? gt(A).body : gt(null).body;
  }
  const R = !c && a && (!w || x) ? "none" : void 0, I = w ? {
    in: c,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ f.jsx(px, {
    disablePortal: l,
    container: T,
    children: /* @__PURE__ */ f.jsx(xP, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: w ? !x : c,
      placement: h,
      popperOptions: g,
      popperRef: d,
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
}), SP = H(bP, {
  name: "MuiPopper",
  slot: "Root"
})({}), mx = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = gc(), o = xe({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: c,
    open: h,
    placement: g,
    popperOptions: d,
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
    modifiers: c,
    open: h,
    placement: g,
    popperOptions: d,
    popperRef: v,
    transition: w,
    ...p
  };
  return /* @__PURE__ */ f.jsx(SP, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: m,
    ...x,
    ref: n
  });
}), wP = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function CP(e) {
  return ye("MuiChip", e);
}
const _e = pe("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), kP = (e) => {
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
  return ve(a, CP, t);
}, EP = H("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => vn(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
      [`& .${_e.avatar}`]: t.avatar
    }, {
      [`& .${_e.icon}`]: t.icon
    }, {
      [`& .${_e.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${ce(s)}`], t[`color${ce(r)}`], o && t.clickable, i && t.deletable, t[l]];
  }
})(we(({
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
    [`&.${_e.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${_e.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${_e.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${_e.deleteIcon}`]: {
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
        [`& .${_e.avatar}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark
        }
      }
    }, {
      props: {
        color: "secondary"
      },
      style: {
        [`& .${_e.avatar}`]: {
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
        [`& .${_e.avatar}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10)
        },
        [`& .${_e.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${_e.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Nt(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${_e.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${_e.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${_e.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: !e.focusVisible && {
        [`&.${_e.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(Nt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: !e.focusVisible && {
        [`&.${_e.focusVisible}`]: {
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
          [`&.${_e.focusVisible}`]: {
            backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Nt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        "&:hover": {
          backgroundColor: (e.vars || e).palette[n].dark
        },
        ...!e.focusVisible && {
          [`&.${_e.focusVisible}`]: {
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
        [`&.${_e.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        ...!e.focusVisible && {
          [`&.${_e.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus
          }
        },
        [`& .${_e.avatar}`]: {
          marginLeft: 4
        },
        [`& .${_e.icon}`]: {
          marginLeft: 4
        },
        [`& .${_e.deleteIcon}`]: {
          marginRight: 5
        }
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        [`& .${_e.avatar}`]: {
          marginLeft: 2
        },
        [`& .${_e.icon}`]: {
          marginLeft: 2
        },
        [`& .${_e.deleteIcon}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Nt()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.alpha((e.vars || e).palette[n].main, 0.7)}`,
        [`&.${_e.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
        },
        ...!e.focusVisible && {
          [`&.${_e.focusVisible}`]: {
            backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
          }
        },
        [`& .${_e.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), TP = H("span", {
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
function Jg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const hr = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    icon: h,
    label: g,
    onClick: d,
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
  } = T, A = y.useRef(null), M = pt(A, n), N = (_) => {
    _.stopPropagation(), v(_);
  }, b = (_) => {
    _.currentTarget === _.target && Jg(_) && _.preventDefault(), w && w(_);
  }, j = (_) => {
    _.currentTarget === _.target && v && Jg(_) && v(_), C && C(_);
  }, P = s !== !1 && d ? !0 : s, O = P || v ? Mo : a || "div", B = {
    ...r,
    component: O,
    disabled: c,
    size: m,
    color: l,
    iconColor: /* @__PURE__ */ y.isValidElement(h) && h.props.color || l,
    onDelete: !!v,
    clickable: P,
    variant: p
  }, $ = kP(B), L = O === Mo ? {
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
  let F = null;
  v && (F = u && /* @__PURE__ */ y.isValidElement(u) ? /* @__PURE__ */ y.cloneElement(u, {
    className: te(u.props.className, $.deleteIcon),
    onClick: N
  }) : /* @__PURE__ */ f.jsx(wP, {
    className: $.deleteIcon,
    onClick: N
  }));
  let U = null;
  o && /* @__PURE__ */ y.isValidElement(o) && (U = /* @__PURE__ */ y.cloneElement(o, {
    className: te($.avatar, o.props.className)
  }));
  let W = null;
  h && /* @__PURE__ */ y.isValidElement(h) && (W = /* @__PURE__ */ y.cloneElement(h, {
    className: te($.icon, h.props.className)
  }));
  const Q = {
    slots: E,
    slotProps: k
  }, [G, X] = Se("root", {
    elementType: EP,
    externalForwardedProps: {
      ...Q,
      ...I
    },
    ownerState: B,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: M,
    className: te($.root, i),
    additionalProps: {
      disabled: P && c ? !0 : void 0,
      tabIndex: S && c ? -1 : x,
      ...L
    },
    getSlotProps: (_) => ({
      ..._,
      onClick: (ne) => {
        var re;
        (re = _.onClick) == null || re.call(_, ne), d == null || d(ne);
      },
      onKeyDown: (ne) => {
        var re;
        (re = _.onKeyDown) == null || re.call(_, ne), b(ne);
      },
      onKeyUp: (ne) => {
        var re;
        (re = _.onKeyUp) == null || re.call(_, ne), j(ne);
      }
    })
  }), [K, q] = Se("label", {
    elementType: TP,
    externalForwardedProps: Q,
    ownerState: B,
    className: $.label
  });
  return /* @__PURE__ */ f.jsxs(G, {
    as: O,
    ...X,
    children: [U || W, /* @__PURE__ */ f.jsx(K, {
      ...q,
      children: g
    }), F]
  });
}), RP = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), PP = {
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
}, IP = {
  opacity: 0,
  visibility: "hidden"
}, gx = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = ro(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: u,
    in: c,
    onEnter: h,
    onEntered: g,
    onEntering: d,
    onExit: v,
    onExited: w,
    onExiting: C,
    style: m,
    timeout: p = o,
    ...x
  } = t, S = kc(r.motion.reducedMotion, a), E = y.useRef(null), k = pt(E, No(l), n), T = kn(E, d), R = kn(E, (j, P) => {
    S.shouldReduceMotion || hh(j);
    const O = su({
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
  }), I = kn(E, g), A = kn(E, C), M = kn(E, (j) => {
    const P = su({
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
  }), N = kn(E, (j) => {
    j.style.transition = "", w && w(j);
  }), b = i ? (j) => {
    i(E.current, j);
  } : void 0;
  return /* @__PURE__ */ f.jsx(q1, {
    appear: s,
    in: c,
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
      const B = Q1(j, c, PP, IP, m, l.props.style);
      return /* @__PURE__ */ y.cloneElement(l, {
        style: B,
        ref: k,
        ...O
      });
    }
  });
});
function MP(e) {
  return ye("MuiBackdrop", e);
}
pe("MuiBackdrop", ["root", "invisible"]);
const $P = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ve({
    root: ["root", n && "invisible"]
  }, MP, t);
}, jP = H("div", {
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
}), yx = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    transitionDuration: h,
    ...g
  } = r, d = {
    ...r,
    component: s,
    invisible: l
  }, v = $P(d), w = {
    component: s,
    slots: c,
    slotProps: u
  }, [C, m] = Se("root", {
    elementType: jP,
    externalForwardedProps: w,
    className: te(v.root, i),
    ownerState: d
  }), [p, x] = Se("transition", {
    elementType: gx,
    externalForwardedProps: w,
    ownerState: d
  });
  return /* @__PURE__ */ f.jsx(p, {
    in: a,
    timeout: h,
    ...g,
    ...x,
    children: /* @__PURE__ */ f.jsx(C, {
      ...m,
      ref: n,
      children: o
    })
  });
}), AP = pe("MuiBox", ["root"]), NP = vc(), Ae = V2({
  themeId: ir,
  defaultTheme: NP,
  defaultClassName: AP.root,
  generateClassName: E1.generate
});
function OP(e) {
  return ye("MuiButton", e);
}
const yr = pe("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), vx = /* @__PURE__ */ y.createContext({}), xx = /* @__PURE__ */ y.createContext(void 0), BP = (e) => {
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
  }, c = ve(u, OP, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, bx = [{
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
}], LP = H(Mo, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ce(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(we(({
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
    ...xt(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${yr.disabled}`]: {
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
        [`&.${yr.focusVisible}`]: {
          ...e.focusVisible,
          boxShadow: (r = e.focusVisible) != null && r.boxShadow ? `${(e.vars || e).shadows[6]}, ${e.focusVisible.boxShadow}` : (e.vars || e).shadows[6]
        },
        [`&.${yr.disabled}`]: {
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
        [`&.${yr.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Nt()).map(([i]) => ({
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
        [`&.${yr.focusVisible}`]: {
          boxShadow: ((o = e.focusVisible) == null ? void 0 : o.boxShadow) ?? "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${yr.disabled}`]: {
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
        [`&.${yr.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), zP = H("span", {
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
  }, ...bx]
})), _P = H("span", {
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
  }, ...bx]
})), FP = H("span", {
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
})), Zg = H("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Rt = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = y.useContext(vx), o = y.useContext(xx), i = Ti(r, t), s = xe({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: u = "button",
    className: c,
    disabled: h = !1,
    disableElevation: g = !1,
    disableFocusRipple: d = !1,
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
  } = s, A = Ir(m), M = x ?? /* @__PURE__ */ f.jsx(Rs, {
    "aria-labelledby": A,
    color: "inherit",
    size: 16
  }), N = {
    ...s,
    color: a,
    component: u,
    disabled: h,
    disableElevation: g,
    disableFocusRipple: d,
    fullWidth: C,
    loading: p,
    loadingIndicator: M,
    loadingPosition: S,
    size: E,
    type: T,
    variant: R
  }, b = BP(N), j = (k || p && S === "start") && /* @__PURE__ */ f.jsx(zP, {
    className: b.startIcon,
    ownerState: N,
    children: k || /* @__PURE__ */ f.jsx(Zg, {
      className: b.loadingIconPlaceholder,
      ownerState: N
    })
  }), P = (v || p && S === "end") && /* @__PURE__ */ f.jsx(_P, {
    className: b.endIcon,
    ownerState: N,
    children: v || /* @__PURE__ */ f.jsx(Zg, {
      className: b.loadingIconPlaceholder,
      ownerState: N
    })
  }), O = o || "", B = typeof p == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ f.jsx("span", {
      className: b.loadingWrapper,
      style: {
        display: "contents"
      },
      children: p && /* @__PURE__ */ f.jsx(FP, {
        className: b.loadingIndicator,
        ownerState: N,
        children: M
      })
    })
  ) : null, {
    root: $,
    ...L
  } = b;
  return /* @__PURE__ */ f.jsxs(LP, {
    ownerState: N,
    className: te(r.className, b.root, c, O),
    component: u,
    disabled: h || p,
    focusRipple: !d,
    focusVisibleClassName: te(b.focusVisible, w),
    ref: n,
    internalNativeButton: !0,
    type: T,
    id: p ? A : m,
    ...I,
    classes: L,
    children: [j, S !== "end" && B, l, S === "end" && B, P]
  });
});
function DP(e) {
  return y.Children.toArray(e).filter((t) => /* @__PURE__ */ y.isValidElement(t));
}
function WP(e) {
  return ye("MuiButtonGroup", e);
}
const Ce = pe("MuiButtonGroup", ["root", "contained", "outlined", "text", "disableElevation", "disabled", "firstButton", "fullWidth", "horizontal", "vertical", "colorPrimary", "colorSecondary", "grouped", "lastButton", "middleButton"]), UP = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [{
    [`& .${Ce.grouped}`]: t.grouped
  }, {
    [`& .${Ce.firstButton}`]: t.firstButton
  }, {
    [`& .${Ce.lastButton}`]: t.lastButton
  }, {
    [`& .${Ce.middleButton}`]: t.middleButton
  }, t.root, t[n.variant], n.disableElevation === !0 && t.disableElevation, n.fullWidth && t.fullWidth, n.orientation === "vertical" && t.vertical];
}, VP = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    disableElevation: o,
    fullWidth: i,
    orientation: s,
    variant: l
  } = e, a = {
    root: ["root", l, s, i && "fullWidth", o && "disableElevation", `color${ce(n)}`],
    grouped: ["grouped", r && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return ve(a, WP, t);
}, HP = H("div", {
  name: "MuiButtonGroup",
  slot: "Root",
  overridesResolver: UP
})(we(({
  theme: e
}) => ({
  display: "inline-flex",
  borderRadius: (e.vars || e).shape.borderRadius,
  ...e.focusVisible && {
    // paint the focused item above its siblings so they cannot cover the ring edges
    [`& .${Ce.grouped}.${yr.focusVisible}`]: {
      zIndex: 1
    }
  },
  variants: [{
    props: {
      variant: "contained"
    },
    style: {
      boxShadow: (e.vars || e).shadows[2],
      [`& .${Ce.grouped}`]: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        }
      },
      ...e.focusVisible && {
        [`& .${Ce.grouped}.${yr.focusVisible}`]: {
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
      [`& .${Ce.lastButton},& .${Ce.middleButton}`]: {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      },
      [`& .${Ce.firstButton},& .${Ce.middleButton}`]: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      }
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      [`& .${Ce.firstButton},& .${Ce.middleButton}`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${Ce.lastButton},& .${Ce.middleButton}`]: {
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
      [`& .${Ce.firstButton},& .${Ce.middleButton}`]: {
        borderRight: e.vars ? `1px solid ${e.alpha(e.vars.palette.common.onBackground, 0.23)}` : `1px solid ${e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
        [`&.${Ce.disabled}`]: {
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
      [`& .${Ce.firstButton},& .${Ce.middleButton}`]: {
        borderBottom: e.vars ? `1px solid ${e.alpha(e.vars.palette.common.onBackground, 0.23)}` : `1px solid ${e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
        [`&.${Ce.disabled}`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.action.disabled}`
        }
      }
    }
  }, ...Object.entries(e.palette).filter(Nt()).flatMap(([t]) => [{
    props: {
      variant: "text",
      color: t
    },
    style: {
      [`& .${Ce.firstButton},& .${Ce.middleButton}`]: {
        borderColor: e.alpha((e.vars || e).palette[t].main, 0.5)
      }
    }
  }]), {
    props: {
      variant: "outlined",
      orientation: "horizontal"
    },
    style: {
      [`& .${Ce.firstButton},& .${Ce.middleButton}`]: {
        borderRightColor: "transparent",
        "@media (hover: hover)": {
          "&:hover": {
            borderRightColor: "currentColor"
          }
        }
      },
      [`& .${Ce.lastButton},& .${Ce.middleButton}`]: {
        marginLeft: -1
      }
    }
  }, {
    props: {
      variant: "outlined",
      orientation: "vertical"
    },
    style: {
      [`& .${Ce.firstButton},& .${Ce.middleButton}`]: {
        borderBottomColor: "transparent",
        "@media (hover: hover)": {
          "&:hover": {
            borderBottomColor: "currentColor"
          }
        }
      },
      [`& .${Ce.lastButton},& .${Ce.middleButton}`]: {
        marginTop: -1
      }
    }
  }, {
    props: {
      variant: "contained",
      orientation: "horizontal"
    },
    style: {
      [`& .${Ce.firstButton},& .${Ce.middleButton}`]: {
        borderRight: `1px solid ${(e.vars || e).palette.grey[400]}`,
        [`&.${Ce.disabled}`]: {
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
      [`& .${Ce.firstButton},& .${Ce.middleButton}`]: {
        borderBottom: `1px solid ${(e.vars || e).palette.grey[400]}`,
        [`&.${Ce.disabled}`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.action.disabled}`
        }
      }
    }
  }, ...Object.entries(e.palette).filter(Nt(["dark"])).map(([t]) => ({
    props: {
      variant: "contained",
      color: t
    },
    style: {
      [`& .${Ce.firstButton},& .${Ce.middleButton}`]: {
        borderColor: (e.vars || e).palette[t].dark
      }
    }
  }))],
  [`& .${Ce.grouped}`]: {
    minWidth: 40
  }
}))), KP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiButtonGroup"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: l = "div",
    disabled: a = !1,
    disableElevation: u = !1,
    disableFocusRipple: c = !1,
    disableRipple: h = !1,
    fullWidth: g = !1,
    orientation: d = "horizontal",
    size: v = "medium",
    variant: w = "outlined",
    ...C
  } = r, m = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    disableElevation: u,
    disableFocusRipple: c,
    disableRipple: h,
    fullWidth: g,
    orientation: d,
    size: v,
    variant: w
  }, p = VP(m), x = y.useMemo(() => ({
    className: p.grouped,
    color: s,
    disabled: a,
    disableElevation: u,
    disableFocusRipple: r.disableFocusRipple,
    disableRipple: r.disableRipple,
    fullWidth: g,
    size: v,
    variant: w
  }), [s, a, u, r.disableFocusRipple, r.disableRipple, g, v, w, p.grouped]), S = DP(o), E = S.length, k = (T) => {
    const R = T === 0, I = T === E - 1;
    return R && I ? "" : R ? p.firstButton : I ? p.lastButton : p.middleButton;
  };
  return /* @__PURE__ */ f.jsx(HP, {
    as: l,
    role: "group",
    className: te(p.root, i),
    ref: n,
    ownerState: m,
    ...C,
    children: /* @__PURE__ */ f.jsx(vx.Provider, {
      value: x,
      children: S.map((T, R) => /* @__PURE__ */ f.jsx(xx.Provider, {
        value: k(R),
        children: T
      }, R))
    })
  });
});
function GP(e) {
  return ye("MuiCard", e);
}
pe("MuiCard", ["root"]);
const YP = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, GP, t);
}, QP = H(ar, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Xl = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1,
    ...s
  } = r, l = {
    ...r,
    raised: i
  }, a = YP(l);
  return /* @__PURE__ */ f.jsx(QP, {
    className: te(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function XP(e) {
  return ye("MuiCardContent", e);
}
pe("MuiCardContent", ["root"]);
const qP = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, XP, t);
}, JP = H("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), ql = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = qP(l);
  return /* @__PURE__ */ f.jsx(JP, {
    as: i,
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function ey(e) {
  return e.substring(2).toLowerCase();
}
function ZP(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function e5(e) {
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
  const c = pt(No(t), l), h = et((v) => {
    const w = u.current;
    u.current = !1;
    const C = gt(l.current);
    if (!a.current || !l.current || "clientX" in v && ZP(v, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let m;
    v.composedPath ? m = v.composedPath().includes(l.current) : m = !So(C.documentElement, v.target) || So(l.current, v.target), !m && (n || !w) && o(v);
  }), g = (v) => (w) => {
    u.current = !0;
    const C = t.props[v];
    C && C(w);
  }, d = {
    ref: c
  };
  return i !== !1 && (d[i] = g(i)), y.useEffect(() => {
    if (i !== !1) {
      const v = ey(i), w = gt(l.current), C = () => {
        s.current = !0;
      };
      return w.addEventListener(v, h), w.addEventListener("touchmove", C), () => {
        w.removeEventListener(v, h), w.removeEventListener("touchmove", C);
      };
    }
  }, [h, i]), r !== !1 && (d[r] = g(r)), y.useEffect(() => {
    if (r !== !1) {
      const v = ey(r), w = gt(l.current);
      return w.addEventListener(v, h), () => {
        w.removeEventListener(v, h);
      };
    }
  }, [h, r]), /* @__PURE__ */ y.cloneElement(t, d);
}
function Sx(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function t5(e) {
  const t = gt(e);
  return e === t.body || e === t.documentElement ? Hn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ms(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ty(e) {
  return parseFloat(Hn(e).getComputedStyle(e).paddingRight) || 0;
}
function n5(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function ny(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !n5(s);
    l && a && Ms(s, o);
  });
}
function r5(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = gt(r).body;
    else {
      const s = r.parentElement, l = Hn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (t5(i)) {
      const s = Sx(Hn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${ty(i) + s}px`;
      const l = gt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${ty(a) + s}px`;
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
function o5(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class i5 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Ms(t.modalRef, !1);
    const o = o5(n);
    ny(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = r5(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Ms(t.modalRef, n), ny(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Ms(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Ff = "data-mui-focusable";
function ry(e) {
  return e ? e.hasAttribute(Ff) ? e : e.querySelector(`[${Ff}]`) : null;
}
const s5 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function wx(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function l5(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function a5(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || l5(e));
}
function u5(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(s5)).forEach((r, o) => {
    const i = wx(r);
    i === -1 || !a5(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function c5() {
  return !0;
}
function d5(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = u5,
    isEnabled: s = c5,
    open: l
  } = e, a = y.useRef(!1), u = y.useRef(null), c = y.useRef(null), h = y.useRef(null), g = y.useRef(null), d = y.useRef(!1), v = y.useRef(null), w = pt(No(t), v), C = y.useRef(null);
  y.useEffect(() => {
    !l || !v.current || (d.current = !n);
  }, [n, l]), y.useEffect(() => {
    if (a.current = !1, !l || !v.current)
      return;
    const x = gt(v.current), S = tr(x), E = ry(v.current) ?? v.current;
    return So(v.current, S) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), d.current && E.focus()), () => {
      !o && h.current && (a.current = !0, h.current.focus(), h.current = null);
    };
  }, [l]), y.useEffect(() => {
    if (!l || !v.current)
      return;
    const x = gt(v.current), S = (T) => {
      if (C.current = T, r || !s() || T.key !== "Tab")
        return;
      const R = v.current, I = tr(x);
      if (R === null)
        return;
      const A = ry(R);
      if (I === R || I === A) {
        const N = i(R);
        if (N.length === 0)
          return;
        T.preventDefault(), T.shiftKey ? N[N.length - 1].focus() : N[0].focus();
        return;
      }
      if (So(R, I)) {
        const N = i(R), b = N.indexOf(I);
        if (b === -1 || !N.some((O) => wx(O) > 0))
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
      const R = tr(x);
      if (!x.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (So(T, R) || r && R !== u.current && R !== c.current)
        return;
      if (R !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!d.current)
        return;
      let I = [];
      if ((R === u.current || R === c.current) && (I = i(v.current)), I.length > 0) {
        const N = !!((A = C.current) != null && A.shiftKey && ((M = C.current) == null ? void 0 : M.key) === "Tab"), b = I[0], j = I[I.length - 1];
        typeof b != "string" && typeof j != "string" && (N ? j.focus() : b.focus());
      } else
        T.focus();
    };
    x.addEventListener("focusin", E), x.addEventListener("keydown", S, !0);
    const k = setInterval(() => {
      const T = tr(x);
      T && T.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), x.removeEventListener("focusin", E), x.removeEventListener("keydown", S, !0);
    };
  }, [n, r, o, s, l, i]);
  const m = (x) => {
    h.current === null && (h.current = x.relatedTarget), d.current = !0, g.current = x.target;
    const S = t.props.onFocus;
    S && S(x);
  }, p = (x) => {
    h.current === null && (h.current = x.relatedTarget), d.current = !0;
  };
  return /* @__PURE__ */ f.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ f.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ y.cloneElement(t, {
      ref: w,
      onFocus: m
    }), /* @__PURE__ */ f.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function f5(e) {
  return typeof e == "function" ? e() : e;
}
function p5(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const oy = () => {
}, Jl = new i5();
function h5(e) {
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
  } = e, c = y.useRef({}), h = y.useRef(null), g = y.useRef(null), d = y.useRef(null), v = pt(d, u), [w, C] = y.useState(!a), m = p5(s);
  let p = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (p = !1);
  const x = () => gt(h.current), S = () => (c.current.modalRef = d.current, c.current.mount = h.current, c.current), E = () => {
    Jl.mount(S(), {
      disableScrollLock: n
    }), d.current && (d.current.scrollTop = 0);
  }, k = et(() => {
    const O = f5(t) || x().body;
    Jl.add(S(), O), d.current && E();
  }), T = () => Jl.isTopModal(S()), R = et((O) => {
    h.current = O, O && (g.current = O, a && T() ? E() : d.current && Ms(d.current, p));
  }), I = y.useCallback(() => {
    Jl.remove(S(), p);
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
    const B = au(e);
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
      onEnter: jg(O, (s == null ? void 0 : s.props.onEnter) ?? oy),
      onExited: jg(B, (s == null ? void 0 : s.props.onExited) ?? oy)
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
function m5(e) {
  return ye("MuiModal", e);
}
pe("MuiModal", ["root", "hidden", "backdrop"]);
const g5 = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ve({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, m5, r);
}, y5 = H("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(we(({
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
}))), v5 = H(yx, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Cx = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    disableEnforceFocus: h = !1,
    disablePortal: g = !1,
    disableRestoreFocus: d = !1,
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
    disableAutoFocus: c,
    disableEnforceFocus: h,
    disablePortal: g,
    disableRestoreFocus: d,
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
  } = h5({
    ...I,
    rootRef: n
  }), $ = {
    ...I,
    exited: O
  }, L = g5($), F = {};
  if (l.props.tabIndex === void 0 && (F.tabIndex = "-1"), B) {
    const {
      onEnter: K,
      onExited: q
    } = N();
    F.onEnter = K, F.onExited = q;
  }
  const U = {
    slots: k,
    slotProps: E
  }, [W, Q] = Se("root", {
    ref: n,
    elementType: y5,
    externalForwardedProps: {
      ...U,
      ...R,
      component: u
    },
    getSlotProps: A,
    ownerState: $,
    className: te(i, L == null ? void 0 : L.root, !$.open && $.exited && (L == null ? void 0 : L.hidden))
  }), [G, X] = Se("backdrop", {
    elementType: v5,
    externalForwardedProps: U,
    shouldForwardComponentProp: !0,
    getSlotProps: (K) => M({
      ...K,
      onClick: (q) => {
        K != null && K.onClick && K.onClick(q);
      }
    }),
    className: L == null ? void 0 : L.backdrop,
    ownerState: $
  });
  return !C && !S && (!B || O) ? null : /* @__PURE__ */ f.jsx(px, {
    ref: b,
    container: j,
    disablePortal: g,
    children: /* @__PURE__ */ f.jsxs(W, {
      ...Q,
      children: [w ? null : /* @__PURE__ */ f.jsx(G, {
        ...X
      }), /* @__PURE__ */ f.jsx(d5, {
        disableEnforceFocus: h,
        disableAutoFocus: c,
        disableRestoreFocus: d,
        isEnabled: P,
        open: S,
        children: /* @__PURE__ */ y.cloneElement(l, F)
      })]
    })
  });
});
function x5(e) {
  return ye("MuiDialog", e);
}
pe("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const kx = /* @__PURE__ */ y.createContext({}), b5 = H(yx, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), S5 = (e) => {
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
  return ve(s, x5, t);
}, w5 = H(Cx, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), C5 = H("div", {
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
}), k5 = H(ar, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${ce(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(we(({
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
}))), os = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiDialog"
  }), o = ro(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: u,
    className: c,
    fullScreen: h = !1,
    fullWidth: g = !1,
    maxWidth: d = "sm",
    onClick: v,
    onClose: w,
    open: C,
    PaperComponent: m = ar,
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
    maxWidth: d,
    scroll: x
  }, I = S5(R), A = y.useRef(), M = (K) => {
    A.current = K.target === K.currentTarget;
  }, N = (K) => {
    v && v(K), A.current && (A.current = null, w && w(K, "backdropClick"));
  }, b = Ir(l), j = y.useMemo(() => ({
    titleId: b
  }), [b]), P = {
    slots: S,
    slotProps: E
  }, [O, B] = Se("root", {
    elementType: w5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: R,
    className: te(I.root, c),
    ref: n
  }), [$, L] = Se("backdrop", {
    elementType: b5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: R,
    className: I.backdrop
  }), [F, U] = Se("paper", {
    elementType: k5,
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
      [Ff]: ""
    }
  }), [W, Q] = Se("container", {
    elementType: C5,
    externalForwardedProps: P,
    ownerState: R,
    className: I.container
  }), [G, X] = Se("transition", {
    elementType: gx,
    externalForwardedProps: P,
    ownerState: R,
    additionalProps: {
      appear: !0,
      in: C,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ f.jsx(O, {
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
    children: /* @__PURE__ */ f.jsx(G, {
      ...X,
      children: /* @__PURE__ */ f.jsx(W, {
        onMouseDown: M,
        ...Q,
        children: /* @__PURE__ */ f.jsx(F, {
          as: m,
          ...U,
          children: /* @__PURE__ */ f.jsx(kx.Provider, {
            value: j,
            children: u
          })
        })
      })
    })
  });
});
function E5(e) {
  return ye("MuiDialogActions", e);
}
pe("MuiDialogActions", ["root", "spacing"]);
const T5 = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return ve({
    root: ["root", !n && "spacing"]
  }, E5, t);
}, R5 = H("div", {
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
}), is = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, l = {
    ...r,
    disableSpacing: i
  }, a = T5(l);
  return /* @__PURE__ */ f.jsx(R5, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function P5(e) {
  return ye("MuiDialogContent", e);
}
pe("MuiDialogContent", ["root", "dividers"]);
function I5(e) {
  return ye("MuiDialogTitle", e);
}
const M5 = pe("MuiDialogTitle", ["root"]), $5 = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return ve({
    root: ["root", n && "dividers"]
  }, P5, t);
}, j5 = H("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(we(({
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
      [`.${M5.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), ss = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, l = {
    ...r,
    dividers: i
  }, a = $5(l);
  return /* @__PURE__ */ f.jsx(j5, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), A5 = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, I5, t);
}, N5 = H(Te, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), ls = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = A5(l), {
    titleId: u = i
  } = y.useContext(kx);
  return /* @__PURE__ */ f.jsx(N5, {
    component: "h2",
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
}), iy = pe("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function Ex(e) {
  return ye("MuiSelect", e);
}
const ho = pe("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), O5 = (e) => {
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
  }, u = ve(a, BE, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, B5 = H(wc, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...bc(e, t), !n.disableUnderline && t.underline];
  }
})(we(({
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
    [`&.${uo.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${uo.disabled}`]: {
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
        [`&.${uo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${uo.error}`]: {
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
        [`&:hover:not(.${uo.disabled}, .${uo.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${uo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Nt()).map(([s]) => {
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
        [`&.${ho.root}`]: {
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
})), L5 = H(Cc, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Sc
})(we(({
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
}))), Th = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    slots: h = {},
    type: g = "text",
    ...d
  } = r, v = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: g
  }, w = O5(r), C = {
    root: {
      ownerState: v
    },
    input: {
      ownerState: v
    }
  }, m = c ? Mt(C, c) : C, p = h.root ?? B5, x = h.input ?? L5;
  return /* @__PURE__ */ f.jsx(gh, {
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
    ...d,
    classes: w
  });
});
Th.muiName = "Input";
function z5(e) {
  return ye("MuiFormControl", e);
}
pe("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const _5 = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ce(n)}`, r && "fullWidth"]
  };
  return ve(o, z5, t);
}, F5 = H("div", {
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
}), D5 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    fullWidth: h = !1,
    hiddenLabel: g = !1,
    margin: d = "none",
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
    margin: d,
    required: v,
    size: w,
    variant: C
  }, x = _5(p), [S, E] = y.useState(() => {
    let P = !1;
    return o && y.Children.forEach(o, (O) => {
      if (!hd(O, ["Input", "Select"]))
        return;
      const B = hd(O, ["Select"]) ? O.props.input : O;
      B && IE(B.props) && (P = !0);
    }), P;
  }), [k, T] = y.useState(() => {
    let P = !1;
    return o && y.Children.forEach(o, (O) => {
      hd(O, ["Input", "Select"]) && (iu(O.props, !0) || iu(O.props.inputProps, !0)) && (P = !0);
    }), P;
  }), [R, I] = y.useState(!1);
  a && R && I(!1);
  const A = c !== void 0 && !a ? c : R;
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
  return /* @__PURE__ */ f.jsx(fh.Provider, {
    value: j,
    children: /* @__PURE__ */ f.jsx(F5, {
      as: l,
      ownerState: p,
      className: te(x.root, i),
      ref: n,
      ...m,
      children: o
    })
  });
});
var sy;
const W5 = (e) => {
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
  return ve(u, LE, t);
}, U5 = H("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ce(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(we(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${$g.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${$g.error}`]: {
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
}))), V5 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    margin: h,
    required: g,
    variant: d,
    ...v
  } = r, [w] = Fi({
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
  const m = W5(C);
  return /* @__PURE__ */ f.jsx(U5, {
    as: s,
    className: te(m.root, i),
    ref: n,
    ...v,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      sy || (sy = /* @__PURE__ */ f.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), H5 = (e) => {
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
  return ve(a, zE, t);
}, K5 = H("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(we(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ts.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Ts.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Ts.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), G5 = H("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(we(({
  theme: e
}) => ({
  [`&.${Ts.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Y5 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    focused: h,
    required: g,
    ...d
  } = r, [v] = Fi({
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
  }, C = H5(w);
  return /* @__PURE__ */ f.jsxs(K5, {
    as: l,
    ownerState: w,
    className: te(C.root, i),
    ref: n,
    ...d,
    children: [o, v.required && /* @__PURE__ */ f.jsxs(G5, {
      ownerState: w,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function $s(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Q5 = {
  entering: {
    opacity: 1,
    transform: $s(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: $s(0.75)
  },
  exited: {
    opacity: 0,
    transform: $s(0.75)
  }
}, X5 = {
  opacity: 0,
  transform: $s(0.75),
  visibility: "hidden"
}, sl = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: u,
    onEntered: c,
    onEntering: h,
    onExit: g,
    onExited: d,
    onExiting: v,
    style: w,
    timeout: C = "auto",
    ...m
  } = t, p = y.useRef(null), x = ro(), S = kc(x.motion.reducedMotion, s), E = y.useRef(null), k = pt(E, No(i), n), T = kn(E, h), R = kn(E, (j, P) => {
    S.shouldReduceMotion || hh(j);
    const {
      duration: O,
      delay: B,
      easing: $
    } = su({
      style: w,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let L;
    C === "auto" && !S.shouldReduceMotion ? (L = x.transitions.getAutoHeightDuration(j.clientHeight), p.current = L) : (L = O, p.current = null);
    const F = S.getTransitionTiming({
      duration: L,
      delay: B
    });
    j.style.transition = [x.transitions.create("opacity", {
      duration: F.duration,
      delay: F.delay
    }), x.transitions.create("transform", {
      duration: typeof F.duration == "string" ? F.duration : F.duration * 0.666,
      delay: F.delay,
      easing: $
    })].join(","), u && u(j, P);
  }), I = kn(E, c), A = kn(E, v), M = kn(E, (j) => {
    const {
      duration: P,
      delay: O,
      easing: B
    } = su({
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
    })].join(","), j.style.opacity = 0, j.style.transform = $s(0.75), g && g(j);
  }), N = kn(E, (j) => {
    j.style.transition = "", d && d(j);
  }), b = r ? (j) => {
    r(E.current, j);
  } : void 0;
  return /* @__PURE__ */ f.jsx(q1, {
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
      const B = Q1(j, a, Q5, X5, w, i.props.style);
      return /* @__PURE__ */ y.cloneElement(i, {
        style: B,
        ref: k,
        ...O
      });
    }
  });
});
sl && (sl.muiSupportAuto = !0);
function q5(e) {
  return ye("MuiInputLabel", e);
}
const J5 = pe("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), Z5 = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ve({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, _E, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, eI = H(wc, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...bc(e, t), !n.disableUnderline && t.underline];
  }
})(we(({
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
        [`label + &, .${J5.root} + &`]: {
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
        [`&.${ts.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${ts.error}`]: {
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
        [`&:hover:not(.${ts.disabled}, .${ts.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${ts.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Nt()).map(([r]) => ({
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
})), tI = H(Cc, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Sc
})({}), Rh = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    type: h = "text",
    ...g
  } = r, d = Z5(r), w = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = u ? Mt(u, w) : w, m = c.root ?? eI, p = c.input ?? tI;
  return /* @__PURE__ */ f.jsx(gh, {
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
    classes: d
  });
});
Rh.muiName = "Input";
const Zl = pe("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), nI = (e) => {
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
  }, u = ve(a, q5, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, rI = H(Y5, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Ts.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(we(({
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
}))), oI = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: l,
    className: a,
    ...u
  } = r, [c, h] = Fi({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let g = s;
  typeof g > "u" && h && (g = h.filled || h.focused || h.adornedStart);
  const d = {
    ...r,
    disableAnimation: o,
    formControl: h,
    shrink: g,
    size: c.size,
    variant: c.variant,
    required: c.required,
    focused: c.focused
  }, v = nI(d);
  return /* @__PURE__ */ f.jsx(rI, {
    "data-shrink": g,
    ref: n,
    className: te(v.root, a),
    ...u,
    ownerState: d,
    classes: v
  });
}), Df = /* @__PURE__ */ y.createContext({});
function iI(e) {
  return ye("MuiList", e);
}
pe("MuiList", ["root", "padding", "dense", "subheader"]);
const sI = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return ve({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, iI, t);
}, lI = H("ul", {
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
}), aI = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
  } = r, h = y.useMemo(() => ({
    dense: l
  }), [l]), g = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, d = sI(g);
  return /* @__PURE__ */ f.jsx(Df.Provider, {
    value: h,
    children: /* @__PURE__ */ f.jsxs(lI, {
      as: s,
      className: te(d.root, i),
      ref: n,
      ownerState: g,
      ...c,
      children: [u, o]
    })
  });
}), ly = pe("MuiListItemIcon", ["root", "alignItemsFlexStart"]), ay = pe("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Ph = /* @__PURE__ */ y.createContext(void 0);
function Tx() {
  const e = y.useContext(Ph);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const uI = Object.is;
function cI(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !uI(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const dI = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function Rx(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = js,
    wrap: s = !0
  } = e, [l, a] = y.useState(t), [u, c] = y.useState(t);
  let h = l;
  t !== u && (c(t), t !== void 0 && t !== l && (h = t, a(t)));
  const g = y.useRef(null), d = y.useRef(/* @__PURE__ */ new Map()), [v, w] = y.useState(0), C = y.useMemo(() => Wf(d.current), [v]), m = uy(h, C, i, n), p = y.useRef(m);
  p.current = m;
  const x = y.useCallback(() => {
    const N = Wf(d.current), b = uy(p.current, N, i, n);
    return $x(N, b);
  }, [n, i]), S = y.useCallback(() => d.current, []), E = et((N) => {
    const b = d.current.get(N.id);
    cI(b ?? null, N) || (d.current.set(N.id, N), w((j) => j + 1));
  }), k = et((N) => {
    d.current.delete(N) && w((b) => b + 1);
  }), T = et((N) => {
    a(N);
  }), R = y.useCallback((N) => p.current === N, []), I = y.useCallback((N, b, j, P) => {
    var $;
    const O = ea(d.current), B = Ix(O, N, b, j, P ?? i);
    return B ? (($ = B.element) == null || $.focus(), a(B.id), B) : null;
  }, [i]), A = y.useCallback((N, b, j) => ({
    onFocus: (B) => {
      b == null || b(B);
      const $ = ea(d.current), L = Ax($, B.target);
      L !== -1 && a($[L].id);
    },
    onKeyDown: (B) => {
      if (j == null || j(B), B.defaultPrevented || B.altKey || B.shiftKey || B.ctrlKey || B.metaKey || !dI.includes(B.key))
        return;
      let $ = r === "horizontal" ? "ArrowLeft" : "ArrowUp", L = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && ($ = "ArrowRight", L = "ArrowLeft");
      const F = ea(d.current), U = tr(gt(g.current)), W = U === g.current;
      let Q = cy(F, U, p.current), G = "next";
      switch (B.key) {
        case $:
          G = "previous", B.preventDefault(), W && (Q = F.length);
          break;
        case L:
          B.preventDefault(), W && (Q = -1);
          break;
        case "Home":
          B.preventDefault(), Q = -1;
          break;
        case "End":
          B.preventDefault(), G = "previous", Q = F.length;
          break;
        default:
          return;
      }
      I(Q, G, s);
    },
    ref: mI(N, (B) => {
      g.current = B;
    })
  }), [I, o, r, s]), M = y.useCallback((N) => {
    var B;
    const b = ea(d.current), j = tr(gt(g.current)), O = j === g.current ? -1 : cy(b, j, p.current);
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
function Px(e) {
  const t = Tx(), {
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
  const a = y.useCallback((c) => {
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
  }, [e.id, r, o]), u = pt(e.ref, a);
  return dt(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), dt(() => {
    const c = e.id;
    return () => {
      o(c);
    };
  }, [e.id, o]), {
    ref: u,
    tabIndex: n === e.id ? 0 : -1
  };
}
function uy(e, t, n, r) {
  return e != null ? fI(e, t, n) : pI(t, n, r);
}
function fI(e, t, n) {
  var o;
  const r = jx(t, e);
  return r === -1 ? Mx(t, n) : n(t[r]) ? t[r].id : ((o = Ix(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function pI(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = $x(e, r);
    if (o && t(o))
      return o.id;
  }
  return Mx(e, t);
}
function cy(e, t, n) {
  if (t) {
    const r = Ax(e, t);
    if (r !== -1)
      return r;
  }
  return jx(e, n);
}
function Ix(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = dy(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[l];
    if (!u || !o(u))
      l = dy(l, i, n, r);
    else
      return u;
  }
  return null;
}
function Mx(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function $x(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function jx(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function Ax(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function Wf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(Uf).sort((o, i) => hI(o.element, i.element)), r = t.filter((o) => !Uf(o));
  return [...n, ...r];
}
function ea(e) {
  return Wf(e).filter(Uf);
}
function dy(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function js(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function Uf(e) {
  return e.element != null && e.element.isConnected;
}
function hI(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function mI(...e) {
  return (t) => {
    e.forEach((n) => {
      jf(n ?? null, t);
    });
  };
}
function Nx(e, t) {
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
function gI(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function yI(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function Pa(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Ox = /* @__PURE__ */ y.createContext(null);
function Bx() {
  return y.useContext(Ox);
}
const vI = Ox.Provider, Lx = /* @__PURE__ */ y.createContext(void 0);
function xI() {
  const e = y.useContext(Lx);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function bI(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function zx(e, t) {
  if (t === void 0)
    return !0;
  let n = bI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function SI(e, t) {
  return zx(e, t) ? js(e) : !1;
}
function wI(e, t) {
  Nx(e, t);
}
const CI = /* @__PURE__ */ y.forwardRef(function(t, n) {
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
    variant: h = "selectedMenu",
    ...g
  } = t, d = y.useRef(null), v = y.useRef(!1), [w, C] = y.useState(!1), m = Bx(), p = y.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), x = y.useCallback((P) => {
    var O, B, $;
    return h === "selectedMenu" ? ((O = P.find((L) => L.selected && js(L))) == null ? void 0 : O.id) ?? ((B = P.find((L) => js(L))) == null ? void 0 : B.id) ?? null : (($ = P.find((L) => js(L))) == null ? void 0 : $.id) ?? null;
  }, [h]), S = Rx({
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
  } = S, A = et((P = !1) => {
    if (!d.current || !P && v.current)
      return null;
    if (i) {
      const O = T();
      if (O != null && O.element) {
        const B = Array.from(I().values()).some((L) => L.selected), $ = h === "menu" && B && !O.selected && m == null;
        return C($), wI(O.element, m), v.current = !0, O.element;
      }
      return o ? (C(!1), d.current.focus(), d.current) : null;
    }
    return o ? (C(!1), d.current.focus(), v.current = !0, d.current) : (C(!1), null);
  });
  dt(() => {
    if (!o && !i) {
      v.current = !1, C(!1);
      return;
    }
    A();
  }, [E, i, o, A]), y.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (P, {
      direction: O
    }) => {
      const B = !d.current.style.width;
      if (P.clientHeight < d.current.clientHeight && B) {
        const $ = Hn(P), L = Sx($);
        if (L > 0) {
          const F = `${L}px`, U = O === "rtl" ? "paddingLeft" : "paddingRight", W = parseFloat($.getComputedStyle(d.current)[U]) || 0;
          d.current.style[U] = `${W + L}px`, d.current.style.width = `calc(100% + ${F})`;
        }
      }
      return d.current;
    },
    focusInitialTarget: () => {
      if (!d.current)
        return null;
      const P = tr(gt(d.current));
      return P && So(d.current, P) ? P : A(!0);
    }
  }), [A]);
  const M = R(void 0, g.onFocus), N = pt(d, M.ref, n), b = y.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: w,
    variant: h
  }), [a, w, h]), j = et((P) => {
    if (w && C(!1), (P.ctrlKey || P.metaKey || P.altKey) && c) {
      c(P);
      return;
    }
    if (M.onKeyDown(P), P.key.length === 1) {
      const B = p.current, $ = P.key.toLowerCase(), L = performance.now();
      B.keys.length > 0 && (L - B.lastTime > 500 ? (B.keys = [], B.repeating = !0, B.previousKeyMatched = !0) : B.repeating && $ !== B.keys[0] && (B.repeating = !1)), B.lastTime = L, B.keys.push($);
      const F = tr(gt(d.current)), U = F && !B.repeating && zx(F, B);
      B.previousKeyMatched && (U || k((W) => SI(W, B)) != null) ? P.preventDefault() : B.previousKeyMatched = !1;
    }
    c && c(P);
  });
  return /* @__PURE__ */ f.jsx(aI, {
    role: "menu",
    ref: N,
    className: l,
    onKeyDown: j,
    tabIndex: -1,
    ...g,
    onFocus: M.onFocus,
    children: /* @__PURE__ */ f.jsx(Lx.Provider, {
      value: b,
      children: /* @__PURE__ */ f.jsx(Ph.Provider, {
        value: S,
        children: s
      })
    })
  });
});
function kI(e) {
  return ye("MuiPopover", e);
}
pe("MuiPopover", ["root", "paper"]);
function fy(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function py(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function hy(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function ta(e) {
  return typeof e == "function" ? e() : e;
}
const EI = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"]
  }, kI, t);
}, TI = H(Cx, {
  name: "MuiPopover",
  slot: "Root"
})({}), _x = H(ar, {
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
}), RI = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    container: h,
    disableAutoFocus: g = !1,
    elevation: d = 8,
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
    elevation: d,
    marginThreshold: v,
    transformOrigin: p,
    transitionDuration: x
  }, R = EI(T), I = y.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const _ = ta(i), re = (_ && _.nodeType === 1 ? _ : gt(k.current).body).getBoundingClientRect();
    return {
      top: re.top + fy(re, s.vertical),
      left: re.left + py(re, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), A = y.useCallback((_) => ({
    vertical: fy(_, p.vertical),
    horizontal: py(_, p.horizontal)
  }), [p.horizontal, p.vertical]), M = y.useCallback((_) => {
    const ne = {
      width: _.offsetWidth,
      height: _.offsetHeight
    }, re = A(ne);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: hy(re)
      };
    const ke = I();
    let he = ke.top - re.vertical, de = ke.left - re.horizontal;
    const fe = he + ne.height, Me = de + ne.width, ze = Hn(ta(i)), Pe = ze.innerHeight - v, $e = ze.innerWidth - v;
    if (v != null && he < v) {
      const me = he - v;
      he -= me, re.vertical += me;
    } else if (v != null && fe > Pe) {
      const me = fe - Pe;
      he -= me, re.vertical += me;
    }
    if (v != null && de < v) {
      const me = de - v;
      de -= me, re.horizontal += me;
    } else if (Me > $e) {
      const me = Me - $e;
      de -= me, re.horizontal += me;
    }
    return {
      top: `${Math.round(he)}px`,
      left: `${Math.round(de)}px`,
      transformOrigin: hy(re)
    };
  }, [i, a, I, A, v]), [N, b] = y.useState(w), j = y.useCallback(() => {
    const _ = k.current;
    if (!_)
      return;
    const ne = M(_);
    ne.top != null && _.style.setProperty("top", ne.top), ne.left != null && (_.style.left = ne.left), _.style.transformOrigin = ne.transformOrigin, b(!0);
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
    const _ = xc(() => {
      j();
    }), ne = Hn(ta(i));
    return ne.addEventListener("resize", _), () => {
      _.clear(), ne.removeEventListener("resize", _);
    };
  }, [i, w, j]);
  let B = x;
  const $ = {
    slots: C,
    slotProps: m
  }, [L, F] = Se("transition", {
    elementType: sl,
    externalForwardedProps: $,
    ownerState: T,
    getSlotProps: (_) => ({
      ..._,
      onEntering: (ne, re) => {
        var ke;
        (ke = _.onEntering) == null || ke.call(_, ne, re), P();
      },
      onExited: (ne) => {
        var re;
        (re = _.onExited) == null || re.call(_, ne), O();
      }
    }),
    additionalProps: {
      appear: !0,
      in: w
    }
  });
  x === "auto" && !L.muiSupportAuto && (B = void 0);
  const U = h || (i ? gt(ta(i)).body : void 0), [W, {
    slots: Q,
    slotProps: G,
    ...X
  }] = Se("root", {
    ref: n,
    elementType: TI,
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
        backdrop: XE(typeof m.backdrop == "function" ? m.backdrop(T) : m.backdrop, {
          invisible: !0
        })
      },
      container: U,
      open: w
    },
    ownerState: T,
    className: te(R.root, c)
  }), [K, q] = Se("paper", {
    ref: k,
    className: R.paper,
    elementType: _x,
    externalForwardedProps: $,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: d,
      style: N ? void 0 : {
        opacity: 0
      }
    },
    ownerState: T
  });
  return /* @__PURE__ */ f.jsx(W, {
    ...X,
    ...!ou(W) && {
      slots: Q,
      slotProps: G,
      disableAutoFocus: g,
      disableScrollLock: S
    },
    children: /* @__PURE__ */ f.jsx(L, {
      ...F,
      timeout: B,
      children: /* @__PURE__ */ f.jsx(K, {
        ...q,
        children: u
      })
    })
  });
});
function PI(e) {
  return ye("MuiMenu", e);
}
pe("MuiMenu", ["root", "paper", "list"]);
const II = {
  vertical: "top",
  horizontal: "right"
}, MI = {
  vertical: "top",
  horizontal: "left"
}, $I = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, PI, t);
}, jI = H(RI, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), AI = H(_x, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), NI = H(CI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), OI = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    transitionDuration: h = "auto",
    variant: g = "selectedMenu",
    slots: d = {},
    slotProps: v = {},
    ...w
  } = r, C = gc(), m = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: h,
    variant: g
  }, p = $I(m), x = o && u, S = x && !l, E = y.useRef(null), k = (P, O) => {
    var B, $;
    E.current && (E.current.adjustStyleForScrollbar(P, {
      direction: C ? "rtl" : "ltr"
    }), x && (($ = (B = E.current).focusInitialTarget) == null || $.call(B)));
  }, T = (P) => {
    P.key === "Tab" && (P.preventDefault(), a && a(P, "tabKeyDown"));
  }, R = {
    slots: d,
    slotProps: v
  }, I = $i({
    elementType: d.root,
    externalSlotProps: v.root,
    ownerState: m,
    className: [p.root, s]
  }), [A, M] = Se("paper", {
    className: p.paper,
    elementType: AI,
    externalForwardedProps: R,
    shouldForwardComponentProp: !0,
    ownerState: m
  }), [N, b] = Se("list", {
    className: p.list,
    elementType: NI,
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
  return /* @__PURE__ */ f.jsx(
    jI,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? II : MI,
      slots: {
        root: d.root,
        paper: A,
        backdrop: d.backdrop,
        transition: d.transition
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
      classes: c,
      children: /* @__PURE__ */ f.jsx(N, {
        actions: E,
        autoFocus: x,
        autoFocusItem: S,
        variant: g,
        ...b,
        children: i
      })
    }
  );
}), BI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, LI = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = ve({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, FE, s);
  return {
    ...s,
    ...a
  };
}, zI = H(Mo, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: BI
})(we(({
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
  [`&.${ns.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    ...!e.focusVisible && {
      [`&.${ns.focusVisible}`]: {
        backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
      }
    }
  },
  [`&.${ns.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  ...e.focusVisible ? (
    // Inset the ring: a scrolling Menu/MenuList clips an outset ring.
    D1(1)
  ) : {
    [`&.${ns.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    }
  },
  [`&.${ns.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${iy.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${iy.inset}`]: {
    marginLeft: 52
  },
  [`& .${ay.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${ay.inset}`]: {
    paddingLeft: 36
  },
  [`& .${ly.root}`]: {
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
      [`& .${ly.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), na = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    tabIndex: h,
    className: g,
    ...d
  } = r, w = c === "menuitemcheckbox" || c === "menuitemradio" ? !!r.selected : void 0, C = Bx(), m = y.useContext(Df), p = y.useMemo(() => ({
    dense: s || m.dense || !1,
    disableGutters: a
  }), [m.dense, s, a]), x = xI(), S = Ir(), E = x.suppressInitialFocusVisible, k = x.itemsFocusableWhenDisabled, T = y.useRef(null);
  dt(() => {
    o && T.current && Nx(T.current, C);
  }, [o]);
  const R = {
    ...r,
    dense: p.dense,
    divider: l,
    disableGutters: a
  }, I = LI(r), {
    root: A,
    ...M
  } = I, N = Px({
    id: S,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), b = pt(T, N.ref);
  let j;
  return h !== void 0 ? j = h : x.variant === "selectedMenu" ? j = N.tabIndex : (!r.disabled || k) && (j = -1), /* @__PURE__ */ f.jsx(Df.Provider, {
    value: p,
    children: /* @__PURE__ */ f.jsx(zI, {
      ref: b,
      role: c,
      "aria-checked": w,
      tabIndex: j,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: E,
      focusVisibleClassName: te(I.focusVisible, u),
      className: te(I.root, g),
      ...d,
      ownerState: R,
      classes: M
    })
  });
}), _I = (e) => {
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
  return ve(l, DE, t);
}, Fx = H("select", {
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
  [`&.${yh.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${Zl.root}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "calc(var(--_caret, 24px) + (var(--_endAdornment, 28px) - 1.5rem)/2)"
    // 1.5rem is the default icon size
  },
  [`.${an.root}:has(> &)`]: {
    "--_endAdornment": "0px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      [`.${an.root}:has(> &)`]: {
        "--_caret": "24px"
      },
      [`.${an.root}:has(> & ~ .${Zl.root})`]: {
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
      [`.${an.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${an.root}:has(> & ~ .${Zl.root})`]: {
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
      [`.${an.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${an.root}:has(> & ~ .${Zl.root})`]: {
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
})), FI = H(Fx, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: vn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${yh.multiple}`]: t.multiple
    }];
  }
})({}), Dx = H("svg", {
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
  [`&.${yh.disabled}`]: {
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
})), DI = H(Dx, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ce(n.variant)}`], n.open && t.iconOpen];
  }
})({}), WI = /* @__PURE__ */ y.forwardRef(function(t, n) {
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
  }, h = _I(c);
  return /* @__PURE__ */ f.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ f.jsx(FI, {
      ownerState: c,
      className: te(h.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ f.jsx(DI, {
      as: s,
      ownerState: c,
      className: h.icon
    })]
  });
});
var my;
const UI = H("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: vn
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
}), VI = H("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: vn
})(we(({
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
function HI(e) {
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
  return /* @__PURE__ */ f.jsx(UI, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ f.jsx(VI, {
      ownerState: a,
      children: l ? /* @__PURE__ */ f.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        my || (my = /* @__PURE__ */ f.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const KI = (e) => {
  const {
    classes: t
  } = e, r = ve({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, WE, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, GI = H(wc, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: bc
})(we(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Xn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Xn.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${Xn.focused} .${Xn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Nt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Xn.focused} .${Xn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${Xn.error} .${Xn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Xn.disabled} .${Xn.notchedOutline}`]: {
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
        [`&.${ho.root}`]: {
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
})), YI = H(HI, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(we(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), QI = H(Cc, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Sc
})(we(({
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
}))), Ih = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    type: h = "text",
    ...g
  } = r, d = KI(r), [v, w] = Fi({
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
  }, m = u.root ?? GI, p = u.input ?? QI, [x, S] = Se("notchedOutline", {
    elementType: YI,
    className: d.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: u,
      slotProps: c
    },
    additionalProps: {
      label: s != null && s !== "" && v.required ? /* @__PURE__ */ f.jsxs(y.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ f.jsx(gh, {
    slots: {
      root: m,
      input: p
    },
    slotProps: c,
    renderSuffix: (E) => /* @__PURE__ */ f.jsx(x, {
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
      ...d,
      notchedOutline: null
    }
  });
});
Ih.muiName = "Input";
function XI(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function Wx(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return y.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ y.isValidElement(n) && (t += Wx(n.props.children));
  }), t;
}
function qI(e, t, n = 0) {
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
function JI(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function ZI(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ y.isValidElement(i) || !XI(i) || i.props.disabled)
      continue;
    const s = Wx(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && Pa(t, i.props.value) && (r = n.length), n.push({
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
var gy;
const ra = 2, eM = 400, yy = 200, tM = 750, co = " ", nM = "ArrowUp", rM = "ArrowDown", oM = "Enter";
function vy(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - ra && e.clientX <= r.right + ra && e.clientY >= r.top - ra && e.clientY <= r.bottom + ra;
}
const iM = H(Fx, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${ho.select}`]: t.select
      },
      {
        [`&.${ho.select}`]: t[n.variant]
      },
      {
        [`&.${ho.error}`]: t.error
      },
      {
        [`&.${ho.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${ho.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), sM = H(Dx, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), lM = H("input", {
  shouldForwardProp: (e) => G1(e) && e !== "classes",
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
}), aM = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e;
  return ve({
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, Ex, t);
}, uM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var Ui, Do, Bh, Lh;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: u,
    defaultValue: c,
    disabled: h,
    displayEmpty: g,
    error: d = !1,
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
    ...F
  } = t, [U, W] = Af({
    controlled: $,
    default: c,
    name: "Select"
  }), [Q, G] = Af({
    controlled: M,
    default: u,
    name: "Select"
  }), X = y.useRef(null), K = y.useRef(null), q = y.useRef(null), _ = y.useRef(!1), ne = y.useRef(!1), re = y.useRef(null), ke = y.useRef(!1), he = y.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), de = y.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), fe = nr(), Me = nr(), ze = nr(), [Pe, $e] = y.useState(null), {
    current: me
  } = y.useRef(M != null), [je, tt] = y.useState(), [Xe, Fe] = y.useState(null), qe = pt(n, w), D = y.useCallback((Y) => {
    K.current = Y, Y && $e(Y);
  }, []), le = Pe == null ? void 0 : Pe.parentNode;
  y.useImperativeHandle(qe, () => ({
    focus: () => {
      K.current.focus();
    },
    node: X.current,
    value: U
  }), [U]);
  const ie = Pe !== null && Q, oe = y.useCallback(() => {
    ze.clear(), de.current.buffer = "", de.current.previousSearchIndex = null, de.current.matchedIndex = null;
  }, [ze]);
  dt(() => {
    _.current = ie, ie && oe();
  }, [ie, oe]);
  const Oe = y.useCallback(() => {
    fe.clear(), Me.clear();
  }, [fe, Me]), se = y.useCallback(() => {
    Oe(), ke.current = !1, he.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [Oe]), ae = y.useCallback(() => {
    re.current && (re.current(), re.current = null);
  }, []);
  y.useEffect(() => {
    ie || (se(), ae());
  }, [ie, se, ae]), y.useEffect(() => () => {
    se(), ae(), oe();
  }, [se, ae, oe]), y.useEffect(() => {
    if (!ie || !le || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      tt(le.clientWidth);
    });
    return Y.observe(le), () => {
      Y.disconnect();
    };
  }, [ie, le, s]), y.useEffect(() => {
    u && Q && Pe && !me && (tt(s ? null : le.clientWidth), K.current.focus());
  }, [Pe, s]), y.useEffect(() => {
    i && K.current.focus();
  }, [i]), y.useEffect(() => {
    if (!C)
      return;
    const Y = gt(K.current).getElementById(C);
    if (Y) {
      const ue = () => {
        getSelection().isCollapsed && K.current.focus();
      };
      return Y.addEventListener("click", ue), () => {
        Y.removeEventListener("click", ue);
      };
    }
  }, [C]);
  const Ge = et((Y, ue) => {
    Y || (se(), ae()), Y ? (oe(), Fe(gI(ue)), A && A(ue)) : (Fe(null), k && k(ue)), me || (_.current = Y, tt(s ? null : le.clientWidth), G(Y));
  }), ot = () => {
    se(), ne.current ? Me.start(yy, () => {
      he.current.allowUnselectedMouseUp = !0, fe.start(yy, () => {
        he.current.allowSelectedMouseUp = !0;
      });
    }) : fe.start(eM, () => {
      he.current.allowSelectedMouseUp = !0, he.current.allowUnselectedMouseUp = !0;
    });
  }, ht = (Y) => {
    if (I == null || I(Y), Y.button !== 0 || (Y.preventDefault(), !K.current))
      return;
    K.current.focus();
    const ue = gt(Y.currentTarget);
    ot(), ae();
    const Re = (at) => {
      re.current = null, K.current && (vy(at, K.current) || vy(at, q.current) || !_.current && me || Ge(!1, at));
    };
    ue.addEventListener("mouseup", Re, {
      capture: !0,
      once: !0
    }), re.current = () => {
      ue.removeEventListener("mouseup", Re, !0);
    }, Ge(!0, Y);
  }, De = (Y) => {
    Ge(!1, Y);
  }, Kn = y.Children.toArray(l), Di = (Y) => {
    const ue = Kn.find((Re) => Re.props.value === Y.target.value);
    ue !== void 0 && (W(ue.props.value), E && E(Y, ue));
  }, Oo = (Y, ue, Re) => {
    if (W(Re), E) {
      const at = Y.nativeEvent || Y, Ut = new at.constructor(at.type, at);
      Object.defineProperty(Ut, "target", {
        writable: !0,
        value: {
          value: Re,
          name: x
        }
      }), E(Ut, ue);
    }
  }, Bo = (Y) => (ue) => {
    ke.current = !1;
    let Re;
    if (ue.currentTarget.hasAttribute("tabindex")) {
      if (p) {
        Re = Array.isArray(U) ? U.slice() : [];
        const at = U.indexOf(Y.props.value);
        at === -1 ? Re.push(Y.props.value) : Re.splice(at, 1);
      } else
        Re = Y.props.value;
      Y.props.onClick && Y.props.onClick(ue), U !== Re && Oo(ue, Y, Re), p || Ge(!1, ue);
    }
  }, Lo = (Y, ue) => (Re) => {
    var Tl, Wo;
    if ((Wo = (Tl = Y.props).onMouseUp) == null || Wo.call(Tl, Re), ke.current) {
      ke.current = !1;
      return;
    }
    const at = !he.current.allowSelectedMouseUp && ue, Ut = !he.current.allowUnselectedMouseUp && !ue;
    at || Ut || Re.currentTarget.click();
  }, so = (Y) => {
    var zh;
    const ue = de.current, Re = ue.buffer !== "";
    if (ie || p || h || Y.defaultPrevented || (zh = Y.nativeEvent) != null && zh.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === co && !Re)
      return !1;
    Y.key === co && Y.preventDefault();
    const at = ue.buffer === "", {
      options: Ut,
      selectedIndex: Tl
    } = ZI(Kn, U);
    if (Ut.length === 0)
      return Y.key !== co && oe(), !0;
    at && (ue.previousSearchIndex = Tl);
    const Wo = Y.key.toLowerCase();
    ue.buffer === Wo && JI(Ut, Wo) && (ue.buffer = "", ue.previousSearchIndex = ue.matchedIndex), ue.buffer += Wo, ze.start(tM, oe);
    const Ac = qI(Ut, ue.buffer, (ue.previousSearchIndex ?? -1) + 1);
    if (Ac !== -1) {
      const Nc = Ut[Ac];
      return ue.matchedIndex = Ac, Pa(U, Nc.value) || Oo(Y, Nc.child, Nc.value), !0;
    }
    return Y.key !== co && oe(), !0;
  }, Cl = (Y) => {
    if (!N) {
      const ue = so(Y), Re = Y.key === co || Y.key === nM || Y.key === rM || Y.key === oM;
      !ue && Re && (Y.preventDefault(), Ge(!0, Y)), R == null || R(Y);
    }
  }, ge = (Y) => {
    oe(), !ie && S && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: U,
        name: x
      }
    }), S(Y));
  }, Ye = (Y) => (ue) => {
    var Re, at;
    (at = (Re = Y == null ? void 0 : Y.props) == null ? void 0 : Re.onKeyDown) == null || at.call(Re, ue), ue.key === co && ue.target === ue.currentTarget && !ue.defaultPrevented && (ue.preventDefault(), ue.repeat || ue.currentTarget.click());
  };
  delete F["aria-invalid"];
  let Lt, kl;
  const zo = [];
  let _o = !1, Fo = !1;
  (iu({
    value: U
  }) || g) && (b ? Lt = b(U) : _o = !0);
  const jc = Kn.map((Y) => {
    if (!/* @__PURE__ */ y.isValidElement(Y))
      return null;
    let ue;
    if (p) {
      if (!Array.isArray(U))
        throw new Error(Pr(2));
      ue = U.some((Re) => Pa(Re, Y.props.value)), ue && _o && zo.push(Y.props.children);
    } else
      ue = Pa(U, Y.props.value), ue && _o && (kl = Y.props.children);
    return ue && (Fo = !0), /* @__PURE__ */ y.cloneElement(Y, {
      "aria-selected": ue ? "true" : "false",
      onMouseDown: (Re) => {
        var at, Ut;
        ke.current = !0, (Ut = (at = Y.props).onMouseDown) == null || Ut.call(at, Re);
      },
      onPointerDown: (Re) => {
        var at, Ut;
        ke.current = !0, (Ut = (at = Y.props).onPointerDown) == null || Ut.call(at, Re);
      },
      onClick: Bo(Y),
      onMouseUp: Lo(Y, ue),
      onKeyUp: (Re) => {
        Re.key === co && Re.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(Re);
      },
      onKeyDown: Ye(Y),
      role: "option",
      selected: ue,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  dt(() => {
    ne.current = Fo, !ie && !p && !Fo && oe();
  }, [Fo, p, ie, oe]), _o && (p ? zo.length === 0 ? Lt = null : Lt = zo.reduce((Y, ue, Re) => (Y.push(ue), Re < zo.length - 1 && Y.push(", "), Y), []) : Lt = kl);
  let El = je;
  !s && me && Pe && (El = le.clientWidth);
  let Wi;
  typeof O < "u" ? Wi = O : Wi = h ? null : 0;
  const ee = P.id || (x ? `mui-component-select-${x}` : void 0), J = {
    ...t,
    variant: L,
    value: U,
    open: ie,
    error: d
  }, be = aM(J), Ee = typeof ((Ui = m.slotProps) == null ? void 0 : Ui.paper) == "function" ? m.slotProps.paper(J) : (Do = m.slotProps) == null ? void 0 : Do.paper, yt = pt(Ee == null ? void 0 : Ee.ref, q), dr = typeof ((Bh = m.slotProps) == null ? void 0 : Bh.list) == "function" ? m.slotProps.list(J) : (Lh = m.slotProps) == null ? void 0 : Lh.list, Gn = Ir(), lo = Ir();
  return /* @__PURE__ */ f.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ f.jsx(iM, {
      as: "div",
      ref: D,
      tabIndex: Wi,
      role: "combobox",
      "aria-controls": ie ? Gn : void 0,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": ie ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": N ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": j ? "true" : void 0,
      "aria-invalid": d ? "true" : void 0,
      onKeyDown: Cl,
      onMouseDown: h || N ? null : ht,
      onBlur: ge,
      onFocus: T,
      ...P,
      ownerState: J,
      className: te(P.className, be.select, a),
      id: ee,
      children: yI(Lt) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        gy || (gy = /* @__PURE__ */ f.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Lt
    }), /* @__PURE__ */ f.jsx(lM, {
      "aria-invalid": d,
      value: Array.isArray(U) ? U.join(",") : U,
      name: x,
      ref: X,
      "aria-hidden": !0,
      onChange: Di,
      tabIndex: -1,
      disabled: h,
      readOnly: N,
      className: be.nativeInput,
      autoFocus: i,
      required: j,
      ...F,
      id: F.id ?? lo,
      ownerState: J
    }), /* @__PURE__ */ f.jsx(sM, {
      as: v,
      className: be.icon,
      ownerState: J
    }), /* @__PURE__ */ f.jsx(vI, {
      value: Xe,
      children: /* @__PURE__ */ f.jsx(OI, {
        id: `menu-${x || ""}`,
        anchorEl: le,
        open: ie,
        onClose: De,
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
            id: Gn,
            ...dr
          },
          paper: {
            ...Ee,
            ref: yt,
            style: {
              minWidth: El,
              ...Ee == null ? void 0 : Ee.style
            }
          }
        },
        children: jc
      })
    })]
  });
}), cM = (e) => {
  const {
    classes: t
  } = e, r = ve({
    root: ["root"]
  }, Ex, t);
  return {
    ...t,
    ...r
  };
}, Mh = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => vn(e) && e !== "variant"
}, dM = H(Rh, Mh)(""), fM = H(Ih, Mh)(""), pM = H(Th, Mh)(""), fu = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: u = !1,
    IconComponent: c = RP,
    id: h,
    input: g,
    inputProps: d,
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
  } = r, A = p ? WI : uM, [M] = Fi({
    props: r,
    states: ["variant", "error"]
  }), N = M.variant || R, b = {
    ...r,
    variant: N,
    classes: s
  }, j = cM(b), {
    root: P,
    ...O
  } = j, B = g || {
    standard: /* @__PURE__ */ f.jsx(dM, {
      ownerState: b
    }),
    outlined: /* @__PURE__ */ f.jsx(fM, {
      label: v,
      ownerState: b
    }),
    filled: /* @__PURE__ */ f.jsx(pM, {
      ownerState: b
    })
  }[N], $ = pt(n, No(B));
  return /* @__PURE__ */ f.jsx(y.Fragment, {
    children: /* @__PURE__ */ y.cloneElement(B, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: A,
      inputProps: {
        children: i,
        error: M.error,
        IconComponent: c,
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
        ...d,
        classes: d ? Mt(O, d.classes) : O,
        ...g ? g.props.inputProps : {}
      },
      ...(m && p || u) && N === "outlined" ? {
        notched: !0
      } : {},
      ref: $,
      className: te(B.props.className, l, j.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!g && {
        variant: N
      },
      ...I
    })
  });
});
fu.muiName = "Select";
function hM(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = nr();
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
  const l = et((m, p) => {
    r == null || r(m, p);
  }), a = et((m) => {
    !r || m == null || s.start(m, () => {
      l(null, "timeout");
    });
  });
  y.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const u = (m) => {
    r == null || r(m, "clickaway");
  }, c = s.clear, h = y.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), g = (m) => (p) => {
    const x = m.onBlur;
    x == null || x(p), h();
  }, d = (m) => (p) => {
    const x = m.onFocus;
    x == null || x(p), c();
  }, v = (m) => (p) => {
    const x = m.onMouseEnter;
    x == null || x(p), c();
  }, w = (m) => (p) => {
    const x = m.onMouseLeave;
    x == null || x(p), h();
  };
  return y.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", h), window.addEventListener("blur", c), () => {
        window.removeEventListener("focus", h), window.removeEventListener("blur", c);
      };
  }, [n, o, h, c]), {
    getRootProps: (m = {}) => {
      const p = {
        ...au(e),
        ...au(m)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...m,
        ...p,
        onBlur: g(p),
        onFocus: d(p),
        onMouseEnter: v(p),
        onMouseLeave: w(p)
      };
    },
    onClickAway: u
  };
}
function mM(e) {
  return ye("MuiSnackbarContent", e);
}
pe("MuiSnackbarContent", ["root", "message", "action"]);
const gM = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, mM, t);
}, yM = H(ar, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(we(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.focusVisible && F1(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Tf(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Tf(e.palette.background.default, t),
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
})), vM = H("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), xM = H("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), bM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, u = r, c = gM(u);
  return /* @__PURE__ */ f.jsxs(yM, {
    role: l,
    elevation: 6,
    className: te(c.root, i),
    ownerState: u,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ f.jsx(vM, {
      className: c.message,
      ownerState: u,
      children: s
    }), o ? /* @__PURE__ */ f.jsx(xM, {
      className: c.action,
      ownerState: u,
      children: o
    }) : null]
  });
});
function SM(e) {
  return ye("MuiSnackbar", e);
}
pe("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const wM = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${ce(n.vertical)}${ce(n.horizontal)}`]
  };
  return ve(r, SM, t);
}, CM = H("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${ce(n.anchorOrigin.vertical)}${ce(n.anchorOrigin.horizontal)}`]];
  }
})(we(({
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
}))), kM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiSnackbar"
  }), o = ro(), i = {
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
    className: h,
    disableWindowBlurListener: g = !1,
    message: d,
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
  }, A = wM(I), {
    getRootProps: M,
    onClickAway: N
  } = hM(I), [b, j] = y.useState(!0), P = {
    slots: E,
    slotProps: k
  }, [O, B] = Se("root", {
    ref: n,
    className: [A.root, h],
    elementType: CM,
    getSlotProps: M,
    externalForwardedProps: {
      ...P,
      ...R
    },
    ownerState: I
  }), [$, {
    ownerState: L,
    ...F
  }] = Se("clickAwayListener", {
    elementType: e5,
    externalForwardedProps: P,
    getSlotProps: (X) => ({
      onClickAway: (...K) => {
        var _;
        const q = K[0];
        (_ = X.onClickAway) == null || _.call(X, ...K), !(q != null && q.defaultMuiPrevented) && N(...K);
      }
    }),
    ownerState: I
  }), [U, W] = Se("content", {
    elementType: bM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    additionalProps: {
      message: d,
      action: s
    },
    ownerState: I
  }), [Q, G] = Se("transition", {
    elementType: sl,
    externalForwardedProps: P,
    getSlotProps: (X) => ({
      onEnter: (...K) => {
        var q;
        (q = X.onEnter) == null || q.call(X, ...K), j(!1);
      },
      onExited: (...K) => {
        var q;
        (q = X.onExited) == null || q.call(X, ...K), j(!0);
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
  return !x && b ? null : /* @__PURE__ */ f.jsx($, {
    ...F,
    ...E.clickAwayListener && {
      ownerState: L
    },
    children: /* @__PURE__ */ f.jsx(O, {
      ...B,
      children: /* @__PURE__ */ f.jsx(Q, {
        ...G,
        children: c || /* @__PURE__ */ f.jsx(U, {
          ...W
        })
      })
    })
  });
});
function EM(e) {
  return ye("MuiTooltip", e);
}
const bn = pe("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function TM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const RM = (e) => {
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
  return ve(s, EM, t);
}, PM = H(mx, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(we(({
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
      [`&[data-popper-placement*="bottom"] .${bn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${bn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${bn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${bn.arrow}`]: {
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
}))), IM = H("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ce(n.placement.split("-")[0])}`]];
  }
})(we(({
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
  [`.${bn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${bn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${bn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${bn.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${TM(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${bn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${bn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${bn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${bn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), MM = H("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(we(({
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
let oa = !1;
const xy = new Ec();
let as = {
  x: 0,
  y: 0
};
function ia(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const mr = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    disableTouchListener: h = !1,
    enterDelay: g = 100,
    enterNextDelay: d = 0,
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
  } = r, M = /* @__PURE__ */ y.isValidElement(i) ? i : /* @__PURE__ */ f.jsx("span", {
    children: i
  }), N = ro(), [b, j] = y.useState(), [P, O] = y.useState(null), B = y.useRef(!1), $ = y.useRef(!1), L = c || w, F = nr(), U = nr(), W = nr(), Q = nr(), [G, X] = Af({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let K = G;
  const {
    current: q
  } = y.useRef(E !== void 0), _ = Ir(C), ne = y.useRef(), re = et(() => {
    ne.current !== void 0 && (document.body.style.WebkitUserSelect = ne.current, ne.current = void 0), Q.clear();
  });
  y.useEffect(() => re, [re]);
  const ke = (ge) => {
    xy.clear(), oa = !0, X(!0), S && !K && S(ge);
  }, he = et(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ge) => {
      $.current = !1, xy.start(800 + m, () => {
        oa = !1;
      }), X(!1), x && K && x(ge), F.start(N.transitions.duration.shortest, () => {
        B.current = !1;
      });
    }
  ), de = (ge) => {
    B.current && ge.type !== "touchstart" || (b && b.removeAttribute("title"), U.clear(), W.clear(), g || oa && d ? U.start(oa ? d : g, () => {
      ke(ge);
    }) : ke(ge));
  }, fe = (ge) => {
    if (b != null && b.disabled && !q) {
      if (K && !$.current)
        return;
      $.current = !0;
    } else
      $.current = !1;
    de(ge);
  }, Me = (ge) => {
    b != null && b.disabled && !q && !$.current || de(ge);
  }, ze = (ge) => {
    U.clear(), W.start(m, () => {
      he(ge);
    });
  }, [, Pe] = y.useState(!1), $e = (ge) => {
    const Ye = (ge == null ? void 0 : ge.target) ?? b;
    if (!Ye || Ye.disabled || !uu(Ye)) {
      Pe(!1);
      const Lt = ge ?? new Event("blur");
      !ge && Ye && (Object.defineProperty(Lt, "target", {
        value: Ye
      }), Object.defineProperty(Lt, "currentTarget", {
        value: Ye
      })), ze(Lt);
    }
  }, me = (ge) => {
    if (b || j(ge.currentTarget), $.current = !1, uu(ge.target)) {
      const Ye = (Lt) => {
        Lt.target.disabled && $e(Lt), Lt.target.removeEventListener("blur", Ye);
      };
      ge.target.addEventListener("blur", Ye), Pe(!0), de(ge);
    }
  }, je = (ge) => {
    B.current = !0;
    const Ye = M.props;
    Ye.onTouchStart && Ye.onTouchStart(ge);
  }, tt = (ge) => {
    je(ge), W.clear(), F.clear(), re(), ne.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(v, () => {
      document.body.style.WebkitUserSelect = ne.current, fe(ge);
    });
  }, Xe = (ge) => {
    M.props.onTouchEnd && M.props.onTouchEnd(ge), re(), W.start(p, () => {
      he(ge);
    });
  };
  y.useEffect(() => {
    if (!K)
      return;
    function ge(Ye) {
      Ye.key === "Escape" && he(Ye);
    }
    return document.addEventListener("keydown", ge), () => {
      document.removeEventListener("keydown", ge);
    };
  }, [he, K]);
  const Fe = pt(No(M), j, n);
  !I && I !== 0 && (K = !1);
  const qe = y.useRef(), D = (ge) => {
    const Ye = M.props;
    Ye.onMouseMove && Ye.onMouseMove(ge), as = {
      x: ge.clientX,
      y: ge.clientY
    }, qe.current && qe.current.update();
  }, le = {}, ie = typeof I == "string";
  l ? (le.title = !K && ie && !u ? I : null, le["aria-describedby"] = K ? _ : null) : (le["aria-label"] = ie ? I : null, le["aria-labelledby"] = K && !ie ? _ : null);
  const oe = {
    ...le,
    ...A,
    ...M.props,
    className: te(A.className, M.props.className),
    onTouchStart: je,
    ref: Fe,
    ...w ? {
      onMouseMove: D
    } : {}
  }, Oe = {};
  h || (oe.onTouchStart = tt, oe.onTouchEnd = Xe), u || (oe.onMouseOver = ia(fe, oe.onMouseOver), oe.onMouseLeave = ia(ze, oe.onMouseLeave), L || (Oe.onMouseOver = Me, Oe.onMouseLeave = ze)), a || (oe.onFocus = ia(me, oe.onFocus), oe.onBlur = ia($e, oe.onBlur), L || (Oe.onFocus = me, Oe.onBlur = $e));
  const se = {
    ...r,
    arrow: o,
    disableInteractive: L,
    placement: k,
    touch: B.current
  }, ae = typeof T.popper == "function" ? T.popper(se) : T.popper, Ge = y.useMemo(() => {
    var Ye;
    let ge = [{
      name: "arrow",
      enabled: !!P,
      options: {
        element: P,
        padding: 4
      }
    }];
    return (Ye = ae == null ? void 0 : ae.popperOptions) != null && Ye.modifiers && (ge = ge.concat(ae.popperOptions.modifiers)), {
      ...ae == null ? void 0 : ae.popperOptions,
      modifiers: ge
    };
  }, [P, ae == null ? void 0 : ae.popperOptions]), ot = RM(se), ht = {
    slots: R,
    slotProps: {
      arrow: T.arrow,
      popper: ae,
      tooltip: T.tooltip,
      transition: T.transition
    }
  }, [De, Kn] = Se("popper", {
    elementType: PM,
    externalForwardedProps: ht,
    ownerState: se,
    className: ot.popper
  }), [Di, Oo] = Se("transition", {
    elementType: sl,
    externalForwardedProps: ht,
    ownerState: se
  }), [Bo, Lo] = Se("tooltip", {
    elementType: IM,
    className: ot.tooltip,
    externalForwardedProps: ht,
    ownerState: se
  }), [so, Cl] = Se("arrow", {
    elementType: MM,
    className: ot.arrow,
    externalForwardedProps: ht,
    ownerState: se,
    ref: O
  });
  return /* @__PURE__ */ f.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ y.cloneElement(M, oe), /* @__PURE__ */ f.jsx(De, {
      as: mx,
      placement: k,
      anchorEl: w ? {
        getBoundingClientRect: () => ({
          top: as.y,
          left: as.x,
          right: as.x,
          bottom: as.y,
          width: 0,
          height: 0
        })
      } : b,
      popperRef: qe,
      open: b ? K : !1,
      id: _,
      transition: !0,
      ...Oe,
      ...Kn,
      popperOptions: Ge,
      children: ({
        TransitionProps: ge
      }) => /* @__PURE__ */ f.jsx(Di, {
        timeout: N.transitions.duration.shorter,
        ...ge,
        ...Oo,
        children: /* @__PURE__ */ f.jsxs(Bo, {
          ...Lo,
          children: [I, o ? /* @__PURE__ */ f.jsx(so, {
            ...Cl
          }) : null]
        })
      })
    })]
  });
}), Je = Lk({
  createStyledComponent: H("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => xe({
    props: e,
    name: "MuiStack"
  })
});
function $M(e) {
  return ye("MuiTab", e);
}
const Bn = pe("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), jM = (e) => {
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
  return ve(u, $M, t);
}, AM = H(Mo, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${ce(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${Bn.icon}`]: t.icon
    }];
  }
})(we(({
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
  ...e.focusVisible && D1(3),
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
        [`&.${Of.focusVisible}`]: {
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
}))), us = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    label: h,
    onChange: g,
    onClick: d,
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
  } = r, E = Tx(), k = Px({
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
  }, A = jM(I), M = a && h && /* @__PURE__ */ y.isValidElement(a) ? /* @__PURE__ */ y.cloneElement(a, {
    className: te(A.icon, a.props.className)
  }) : a, N = (j) => {
    !w && g && g(j, p), d && d(j);
  }, b = (j) => {
    C && !w && g && g(j, p), v && v(j);
  };
  return /* @__PURE__ */ f.jsxs(AM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: te(A.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": w,
    disabled: i,
    onClick: N,
    onFocus: b,
    tabIndex: R,
    ownerState: I,
    ...S,
    children: [u === "top" || u === "start" ? /* @__PURE__ */ f.jsxs(y.Fragment, {
      children: [M, h]
    }) : /* @__PURE__ */ f.jsxs(y.Fragment, {
      children: [h, M]
    }), c]
  });
}), Ux = /* @__PURE__ */ y.createContext();
function NM(e) {
  return ye("MuiTable", e);
}
pe("MuiTable", ["root", "stickyHeader"]);
const OM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return ve({
    root: ["root", n && "stickyHeader"]
  }, NM, t);
}, BM = H("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.stickyHeader && t.stickyHeader];
  }
})(we(({
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
}))), by = "table", LM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = by,
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
  }, h = OM(c), g = y.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ f.jsx(Ux.Provider, {
    value: g,
    children: /* @__PURE__ */ f.jsx(BM, {
      as: i,
      role: i === by ? null : "table",
      ref: n,
      className: te(h.root, o),
      ownerState: c,
      ...u
    })
  });
}), Rc = /* @__PURE__ */ y.createContext();
function zM(e) {
  return ye("MuiTableBody", e);
}
pe("MuiTableBody", ["root"]);
const _M = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, zM, t);
}, FM = H("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), DM = {
  variant: "body"
}, Sy = "tbody", WM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Sy,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = _M(l);
  return /* @__PURE__ */ f.jsx(Rc.Provider, {
    value: DM,
    children: /* @__PURE__ */ f.jsx(FM, {
      className: te(a.root, o),
      as: i,
      ref: n,
      role: i === Sy ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function UM(e) {
  return ye("MuiTableCell", e);
}
const VM = pe("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), HM = (e) => {
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
  return ve(l, UM, t);
}, KM = H("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ce(n.size)}`], n.padding !== "normal" && t[`padding${ce(n.padding)}`], n.align !== "inherit" && t[`align${ce(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(we(({
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
      [`&.${VM.paddingCheckbox}`]: {
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
}))), Vt = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    variant: h,
    ...g
  } = r, d = y.useContext(Ux), v = y.useContext(Rc), w = v && v.variant === "head";
  let C;
  s ? C = s : C = w ? "th" : "td";
  let m = a;
  C === "td" ? m = void 0 : !m && w && (m = "col");
  const p = h || v && v.variant, x = {
    ...r,
    align: o,
    component: C,
    padding: l || (d && d.padding ? d.padding : "normal"),
    size: u || (d && d.size ? d.size : "medium"),
    sortDirection: c,
    stickyHeader: p === "head" && d && d.stickyHeader,
    variant: p
  }, S = HM(x);
  let E = null;
  return c && (E = c === "asc" ? "ascending" : "descending"), /* @__PURE__ */ f.jsx(KM, {
    as: C,
    ref: n,
    className: te(S.root, i),
    "aria-sort": E,
    scope: m,
    ownerState: x,
    ...g
  });
});
function GM(e) {
  return ye("MuiTableContainer", e);
}
pe("MuiTableContainer", ["root"]);
const YM = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, GM, t);
}, QM = H("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), XM = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTableContainer"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = YM(l);
  return /* @__PURE__ */ f.jsx(QM, {
    ref: n,
    as: i,
    className: te(a.root, o),
    ownerState: l,
    ...s
  });
});
function qM(e) {
  return ye("MuiTableHead", e);
}
pe("MuiTableHead", ["root"]);
const JM = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, qM, t);
}, ZM = H("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), e4 = {
  variant: "head"
}, wy = "thead", t4 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = wy,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = JM(l);
  return /* @__PURE__ */ f.jsx(Rc.Provider, {
    value: e4,
    children: /* @__PURE__ */ f.jsx(ZM, {
      as: i,
      className: te(a.root, o),
      ref: n,
      role: i === wy ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), n4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), r4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function o4(e) {
  return ye("MuiTableRow", e);
}
const Cy = pe("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), i4 = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return ve({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, o4, t);
}, s4 = H("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.head && t.head, n.footer && t.footer];
  }
})(we(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${Cy.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Cy.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), ky = "tr", yd = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = ky,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, u = y.useContext(Rc), c = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: u && u.variant === "head",
    footer: u && u.variant === "footer"
  }, h = i4(c);
  return /* @__PURE__ */ f.jsx(s4, {
    as: i,
    ref: n,
    className: te(h.root, o),
    role: i === ky ? null : "row",
    ownerState: c,
    ...a
  });
});
function l4(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function a4(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = l4,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let u = !1;
  const c = () => {
    u = !0;
  }, h = (g) => {
    if (u) {
      o(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = g);
    const d = Math.min(1, (g - l) / s);
    if (t[e] = i(d) * (n - a) + a, d >= 1) {
      requestAnimationFrame(() => {
        o(null);
      });
      return;
    }
    requestAnimationFrame(h);
  };
  return a === n ? (o(new Error("Element already at target position")), c) : (requestAnimationFrame(h), c);
}
const u4 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function c4(e) {
  const {
    onChange: t,
    ...n
  } = e, r = y.useRef(), o = y.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return dt(() => {
    const s = xc(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = Hn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), y.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ f.jsx("div", {
    style: u4,
    ...n,
    ref: o
  });
}
function d4(e) {
  return ye("MuiTabScrollButton", e);
}
const f4 = pe("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), p4 = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return ve({
    root: ["root", n, r && "disabled"]
  }, d4, t);
}, h4 = H(Mo, {
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
  [`&.${f4.disabled}`]: {
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
}), m4 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    nativeButton: h,
    ...g
  } = c, d = gc(), v = {
    isRtl: d,
    ...r
  }, w = p4(v), C = i.StartScrollButtonIcon ?? n4, m = i.EndScrollButtonIcon ?? r4, p = $i({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  }), x = $i({
    elementType: m,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  });
  return /* @__PURE__ */ f.jsx(h4, {
    component: "div",
    className: te(w.root, o),
    ref: n,
    role: null,
    ownerState: v,
    tabIndex: null,
    ...g,
    style: {
      ...g.style,
      ...a === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${d ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ f.jsx(C, {
      ...p
    }) : /* @__PURE__ */ f.jsx(m, {
      ...x
    })
  });
});
function g4(e) {
  return ye("MuiTabs", e);
}
const vd = pe("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), y4 = (e) => {
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
  return ve({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", i && "scrollableY"],
    list: ["list", t && "vertical", s && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [o && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, g4, a);
}, v4 = H("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${vd.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${vd.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(we(({
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
      [`& .${vd.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), x4 = H("div", {
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
}), b4 = H("div", {
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
}), S4 = H("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(we(({
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
}))), w4 = H(c4)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Ey = {}, C4 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTabs"
  }), o = ro(), i = gc(), s = kc(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: u,
    centered: c = !1,
    children: h,
    className: g,
    component: d = "div",
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
    component: d,
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
    centered: c && !M,
    scrollButtonsHideMobile: !v
  }, L = y4($), F = $i({
    elementType: S.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: $
  }), U = $i({
    elementType: S.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: $
  }), [W, Q] = y.useState(!1), [G, X] = y.useState(Ey), [K, q] = y.useState(!1), [_, ne] = y.useState(!1), [re, ke] = y.useState(!1), he = T === !1 ? null : T, [de, fe] = y.useState(!1), [Me, ze] = y.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Pe = /* @__PURE__ */ new Map(), $e = y.useRef(null), me = y.useRef(null), je = {
    slots: S,
    slotProps: E
  }, tt = () => {
    const ee = $e.current;
    let J;
    if (ee) {
      const Ee = ee.getBoundingClientRect();
      J = {
        clientWidth: ee.clientWidth,
        scrollLeft: ee.scrollLeft,
        scrollTop: ee.scrollTop,
        scrollWidth: ee.scrollWidth,
        top: Ee.top,
        bottom: Ee.bottom,
        left: Ee.left,
        right: Ee.right
      };
    }
    let be;
    if (ee && T !== !1) {
      const Ee = me.current.children;
      if (Ee.length > 0) {
        const yt = Ee[Pe.get(T)];
        be = yt ? yt.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: J,
      tabMeta: be
    };
  }, Xe = et(() => {
    const {
      tabsMeta: ee,
      tabMeta: J
    } = tt();
    let be = 0, Ee;
    N ? (Ee = "top", J && ee && (be = J.top - ee.top + ee.scrollTop)) : (Ee = i ? "right" : "left", J && ee && (be = (i ? -1 : 1) * (J[Ee] - ee[Ee] + ee.scrollLeft)));
    const yt = {
      [Ee]: be,
      // May be wrong until the font is loaded.
      [B]: J ? J[B] : 0
    };
    if (typeof G[Ee] != "number" || typeof G[B] != "number")
      X(yt);
    else {
      const dr = Math.abs(G[Ee] - yt[Ee]), Gn = Math.abs(G[B] - yt[B]);
      (dr >= 1 || Gn >= 1) && X(yt);
    }
  }), Fe = (ee, {
    animation: J = !0
  } = {}) => {
    J && !s.shouldReduceMotion ? a4(b, $e.current, ee, {
      duration: o.transitions.duration.standard
    }) : $e.current[b] = ee;
  }, qe = (ee) => {
    let J = $e.current[b];
    N ? J += ee : J += ee * (i ? -1 : 1), Fe(J);
  }, D = () => {
    const ee = $e.current[O];
    let J = 0;
    const be = Array.from(me.current.children);
    for (let Ee = 0; Ee < be.length; Ee += 1) {
      const yt = be[Ee];
      if (J + yt[O] > ee) {
        Ee === 0 && (J = ee);
        break;
      }
      J += yt[O];
    }
    return J;
  }, le = () => {
    qe(-1 * D());
  }, ie = () => {
    qe(D());
  }, [oe, {
    onChange: Oe,
    ...se
  }] = Se("scrollbar", {
    className: te(L.scrollableX, L.hideScrollbar),
    elementType: w4,
    shouldForwardComponentProp: !0,
    externalForwardedProps: je,
    ownerState: $
  }), ae = y.useCallback((ee) => {
    Oe == null || Oe(ee), ze({
      overflow: null,
      scrollbarWidth: ee
    });
  }, [Oe]), [Ge, ot] = Se("scrollButtons", {
    className: L.scrollButtons,
    elementType: m4,
    externalForwardedProps: je,
    ownerState: $,
    additionalProps: {
      orientation: m,
      slots: {
        StartScrollButtonIcon: S.startScrollButtonIcon,
        EndScrollButtonIcon: S.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: F,
        endScrollButtonIcon: U
      }
    }
  }), ht = () => {
    const ee = {};
    ee.scrollbarSizeListener = M ? /* @__PURE__ */ f.jsx(oe, {
      ...se,
      onChange: ae
    }) : null;
    const be = M && (p === "auto" && (K || _) || p === !0);
    return ee.scrollButtonStart = be ? /* @__PURE__ */ f.jsx(Ge, {
      direction: i ? "right" : "left",
      onClick: le,
      disabled: !K,
      ...ot
    }) : null, ee.scrollButtonEnd = be ? /* @__PURE__ */ f.jsx(Ge, {
      direction: i ? "left" : "right",
      onClick: ie,
      disabled: !_,
      ...ot
    }) : null, ee;
  }, De = et((ee) => {
    const {
      tabsMeta: J,
      tabMeta: be
    } = tt();
    if (!(!be || !J)) {
      if (be[j] < J[j]) {
        const Ee = J[b] + (be[j] - J[j]);
        Fe(Ee, {
          animation: ee
        });
      } else if (be[P] > J[P]) {
        const Ee = J[b] + (be[P] - J[P]);
        Fe(Ee, {
          animation: ee
        });
      }
    }
  }), Kn = et(() => {
    M && p !== !1 && ke(!re);
  });
  y.useEffect(() => {
    const ee = xc(() => {
      $e.current && Xe();
    });
    let J;
    const be = (dr) => {
      dr.forEach((Gn) => {
        Gn.removedNodes.forEach((lo) => {
          J == null || J.unobserve(lo);
        }), Gn.addedNodes.forEach((lo) => {
          J == null || J.observe(lo);
        });
      }), ee(), Kn();
    }, Ee = Hn($e.current);
    Ee.addEventListener("resize", ee);
    let yt;
    return typeof ResizeObserver < "u" && (J = new ResizeObserver(ee), Array.from(me.current.children).forEach((dr) => {
      J.observe(dr);
    })), typeof MutationObserver < "u" && (yt = new MutationObserver(be), yt.observe(me.current, {
      childList: !0
    })), () => {
      ee.clear(), Ee.removeEventListener("resize", ee), yt == null || yt.disconnect(), J == null || J.disconnect();
    };
  }, [Xe, Kn]), y.useEffect(() => {
    const ee = Array.from(me.current.children), J = ee.length;
    if (typeof IntersectionObserver < "u" && J > 0 && M && p !== !1) {
      const be = ee[0], Ee = ee[J - 1], yt = {
        root: $e.current,
        threshold: 0.99
      }, dr = (Do) => {
        q(!Do[0].isIntersecting);
      }, Gn = new IntersectionObserver(dr, yt);
      Gn.observe(be);
      const lo = (Do) => {
        ne(!Do[0].isIntersecting);
      }, Ui = new IntersectionObserver(lo, yt);
      return Ui.observe(Ee), () => {
        Gn.disconnect(), Ui.disconnect();
      };
    }
  }, [M, p, re, h == null ? void 0 : h.length]), y.useEffect(() => {
    Q(!0);
  }, []), y.useEffect(() => {
    Xe();
  }), y.useEffect(() => {
    De(Ey !== G);
  }, [De, G]), y.useImperativeHandle(u, () => ({
    updateIndicator: Xe,
    updateScrollButtons: Kn
  }), [Xe, Kn]);
  const [Di, Oo] = Se("indicator", {
    className: L.indicator,
    elementType: S4,
    externalForwardedProps: je,
    ownerState: $,
    additionalProps: {
      style: G
    }
  }), Bo = /* @__PURE__ */ f.jsx(Di, {
    ...Oo
  }), Lo = Rx({
    activeItemId: de ? void 0 : he,
    orientation: m,
    isRtl: i
  }), so = Lo.getContainerProps(), ge = y.Children.toArray(h).filter(y.isValidElement).map((ee, J) => {
    const be = ee.props.value === void 0 ? J : ee.props.value;
    return Pe.set(be, J), {
      child: ee,
      index: J,
      childValue: be
    };
  }).map(({
    child: ee,
    childValue: J
  }) => {
    const be = J === T;
    return /* @__PURE__ */ y.cloneElement(ee, {
      fullWidth: R === "fullWidth",
      indicator: be && !W && Bo,
      selected: be,
      selectionFollowsFocus: x,
      onChange: C,
      textColor: k,
      value: J
    });
  }), Ye = ht(), [Lt, kl] = Se("root", {
    ref: n,
    className: te(L.root, g),
    elementType: v4,
    externalForwardedProps: {
      ...je,
      ...A,
      component: d
    },
    ownerState: $
  }), [zo, _o] = Se("scroller", {
    ref: $e,
    className: L.scroller,
    elementType: x4,
    externalForwardedProps: je,
    ownerState: $,
    additionalProps: {
      style: {
        overflow: Me.overflow,
        [N ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: I ? void 0 : -Me.scrollbarWidth
      }
    }
  }), Fo = pt(so.ref, me), jc = (ee) => {
    const J = me.current, be = tr(gt(J));
    (be == null ? void 0 : be.getAttribute("role")) === "tab" && so.onKeyDown(ee);
  }, [El, Wi] = Se("list", {
    ref: Fo,
    className: L.list,
    elementType: b4,
    externalForwardedProps: je,
    ownerState: $,
    getSlotProps: (ee) => ({
      ...ee,
      onBlur: (J) => {
        var be;
        So(J.currentTarget, J.relatedTarget) || fe(!1), (be = ee.onBlur) == null || be.call(ee, J);
      },
      onKeyDown: (J) => {
        var be;
        jc(J), (be = ee.onKeyDown) == null || be.call(ee, J);
      },
      onFocus: (J) => {
        var be;
        fe(!0), so.onFocus(J), (be = ee.onFocus) == null || be.call(ee, J);
      }
    })
  });
  return /* @__PURE__ */ f.jsxs(Lt, {
    ...kl,
    children: [Ye.scrollButtonStart, Ye.scrollbarSizeListener, /* @__PURE__ */ f.jsxs(zo, {
      ..._o,
      children: [/* @__PURE__ */ f.jsx(El, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": m === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Wi,
        children: /* @__PURE__ */ f.jsx(Ph.Provider, {
          value: Lo,
          children: ge
        })
      }), W && Bo]
    }), Ye.scrollButtonEnd]
  });
});
function k4(e) {
  return ye("MuiTextField", e);
}
pe("MuiTextField", ["root"]);
const E4 = {
  standard: Rh,
  filled: Th,
  outlined: Ih
}, T4 = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, k4, t);
}, R4 = H(D5, {
  name: "MuiTextField",
  slot: "Root"
})({}), Ar = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = xe({
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
    error: h = !1,
    fullWidth: g = !1,
    helperText: d,
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
    disabled: c,
    error: h,
    fullWidth: g,
    multiline: x,
    required: I,
    select: M,
    variant: O
  }, L = T4($), F = Ir(v), U = d && F ? `${F}-helper-text` : void 0, W = C && F ? `${F}-label` : void 0, Q = E4[O], G = {
    slots: N,
    slotProps: b
  }, [X, K] = Se("select", {
    elementType: fu,
    externalForwardedProps: G,
    ownerState: $
  }), q = M && K.native, _ = {}, ne = G.slotProps.inputLabel;
  O === "outlined" && (ne && typeof ne.shrink < "u" && (_.notched = ne.shrink), _.label = C), M && (q || (_.id = void 0), _["aria-describedby"] = void 0);
  const [re, ke] = Se("root", {
    elementType: R4,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...G,
      ...B
    },
    ownerState: $,
    className: te(L.root, l),
    ref: n,
    additionalProps: {
      disabled: c,
      error: h,
      fullWidth: g,
      required: I,
      color: a,
      variant: O
    }
  }), [he, de] = Se("input", {
    elementType: Q,
    externalForwardedProps: G,
    additionalProps: _,
    ownerState: $
  }), [fe, Me] = Se("inputLabel", {
    elementType: oI,
    externalForwardedProps: G,
    ownerState: $
  }), [ze, Pe] = Se("htmlInput", {
    elementType: "input",
    externalForwardedProps: G,
    ownerState: $
  }), [$e, me] = Se("formHelperText", {
    elementType: V5,
    externalForwardedProps: G,
    ownerState: $
  }), je = /* @__PURE__ */ f.jsx(he, {
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
    id: F,
    inputRef: w,
    onBlur: E,
    onChange: k,
    onFocus: T,
    placeholder: R,
    inputProps: Pe,
    slots: {
      input: N.htmlInput ? ze : void 0
    },
    ...de
  });
  return /* @__PURE__ */ f.jsxs(re, {
    ...ke,
    children: [C != null && C !== "" && /* @__PURE__ */ f.jsx(fe, {
      htmlFor: M && !q ? void 0 : F,
      id: W,
      ...M && !q && {
        component: "div"
      },
      ...Me,
      children: C
    }), M ? /* @__PURE__ */ f.jsx(X, {
      "aria-describedby": U,
      id: F,
      labelId: W,
      value: P,
      input: je,
      ...K,
      children: s
    }) : je, d && /* @__PURE__ */ f.jsx($e, {
      id: U,
      ...me,
      children: d
    })]
  });
}), P4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), xd = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), Ty = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), I4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M8 5v14l11-7z"
})), M4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M6 6h12v12H6z"
})), $4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
})), j4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M15 21h-2v-2h2zm-2-7h-2v5h2zm8-2h-2v4h2zm-2-2h-2v2h2zM7 12H5v2h2zm-2-2H3v2h2zm7-5h2V3h-2zm-7.5-.5v3h3v-3zM9 9H3V3h6zm-4.5 7.5v3h3v-3zM9 21H3v-6h6zm7.5-16.5v3h3v-3zM21 9h-6V3h6zm-2 10v-3h-4v2h2v3h4v-2zm-2-7h-4v2h4zm-4-2H7v2h2v2h2v-2h2zm1-1V7h-2V5h-2v4zM6.75 5.25h-1.5v1.5h1.5zm0 12h-1.5v1.5h1.5zm12-12h-1.5v1.5h1.5z"
})), Ia = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
})), A4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), N4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
})), O4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
})), B4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5M7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
})), bd = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), L4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "m20.2 5.9.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7m-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M8 18H6v-2h2zm3.5 0h-2v-2h2zm3.5 0h-2v-2h2z"
})), Ry = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
})), z4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95M12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19"
})), _4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"
})), F4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
})), Py = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5z"
})), D4 = Ke(/* @__PURE__ */ f.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
})), Ln = [
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
], st = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', xr = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function Kt({ children: e, sx: t }) {
  return /* @__PURE__ */ f.jsx(
    Te,
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
function cs({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ f.jsxs(ar, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ f.jsxs(
      Je,
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
          typeof e == "string" ? /* @__PURE__ */ f.jsx(Kt, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ f.jsx(Ae, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function Qo({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ f.jsxs(Ae, { sx: n, children: [
    /* @__PURE__ */ f.jsxs(Je, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ f.jsx(
        Te,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ f.jsx(Te, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function Ht({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ f.jsxs(Ae, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ f.jsx(Kt, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ f.jsx(
      Te,
      {
        sx: {
          fontFamily: n ? st : void 0,
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
function Iy({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ f.jsx(
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
function W4(e, t) {
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
function U4({ lines: e, running: t }) {
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
  }, [e]), !e.length && !t ? null : /* @__PURE__ */ f.jsxs(
    ar,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: xr.bg,
        color: xr.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: st,
        fontSize: 12,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ f.jsx(
          Ae,
          {
            sx: {
              color: i.stream === "stderr" ? xr.err : i.stream === "meta" ? xr.dim : xr.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ f.jsx(Ae, { sx: { color: xr.dim }, children: "▍running…" }),
        /* @__PURE__ */ f.jsx("div", { ref: n })
      ]
    }
  );
}
var Sl = {}, V4 = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, Vx = {}, xn = {};
let $h;
const H4 = [
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
xn.getSymbolSize = function(t) {
  if (!t) throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
xn.getSymbolTotalCodewords = function(t) {
  return H4[t];
};
xn.getBCHDigit = function(e) {
  let t = 0;
  for (; e !== 0; )
    t++, e >>>= 1;
  return t;
};
xn.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  $h = t;
};
xn.isKanjiModeEnabled = function() {
  return typeof $h < "u";
};
xn.toSJIS = function(t) {
  return $h(t);
};
var Pc = {};
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
})(Pc);
function Hx() {
  this.buffer = [], this.length = 0;
}
Hx.prototype = {
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
var K4 = Hx;
function wl(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
}
wl.prototype.set = function(e, t, n, r) {
  const o = e * this.size + t;
  this.data[o] = n, r && (this.reservedBit[o] = !0);
};
wl.prototype.get = function(e, t) {
  return this.data[e * this.size + t];
};
wl.prototype.xor = function(e, t, n) {
  this.data[e * this.size + t] ^= n;
};
wl.prototype.isReserved = function(e, t) {
  return this.reservedBit[e * this.size + t];
};
var G4 = wl, Kx = {};
(function(e) {
  const t = xn.getSymbolSize;
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
})(Kx);
var Gx = {};
const Y4 = xn.getSymbolSize, My = 7;
Gx.getPositions = function(t) {
  const n = Y4(t);
  return [
    // top-left
    [0, 0],
    // top-right
    [n - My, 0],
    // bottom-left
    [0, n - My]
  ];
};
var Yx = {};
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
    let s = 0, l = 0, a = 0, u = null, c = null;
    for (let h = 0; h < i; h++) {
      l = a = 0, u = c = null;
      for (let g = 0; g < i; g++) {
        let d = o.get(h, g);
        d === u ? l++ : (l >= 5 && (s += t.N1 + (l - 5)), u = d, l = 1), d = o.get(g, h), d === c ? a++ : (a >= 5 && (s += t.N1 + (a - 5)), c = d, a = 1);
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
      for (let c = 0; c < i; c++)
        l = l << 1 & 2047 | o.get(u, c), c >= 10 && (l === 1488 || l === 93) && s++, a = a << 1 & 2047 | o.get(c, u), c >= 10 && (a === 1488 || a === 93) && s++;
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
      const c = e.getPenaltyN1(o) + e.getPenaltyN2(o) + e.getPenaltyN3(o) + e.getPenaltyN4(o);
      e.applyMask(u, o), c < a && (a = c, l = u);
    }
    return l;
  };
})(Yx);
var Ic = {};
const Fr = Pc, sa = [
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
], la = [
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
Ic.getBlocksCount = function(t, n) {
  switch (n) {
    case Fr.L:
      return sa[(t - 1) * 4 + 0];
    case Fr.M:
      return sa[(t - 1) * 4 + 1];
    case Fr.Q:
      return sa[(t - 1) * 4 + 2];
    case Fr.H:
      return sa[(t - 1) * 4 + 3];
    default:
      return;
  }
};
Ic.getTotalCodewordsCount = function(t, n) {
  switch (n) {
    case Fr.L:
      return la[(t - 1) * 4 + 0];
    case Fr.M:
      return la[(t - 1) * 4 + 1];
    case Fr.Q:
      return la[(t - 1) * 4 + 2];
    case Fr.H:
      return la[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var Qx = {}, Mc = {};
const As = new Uint8Array(512), pu = new Uint8Array(256);
(function() {
  let t = 1;
  for (let n = 0; n < 255; n++)
    As[n] = t, pu[t] = n, t <<= 1, t & 256 && (t ^= 285);
  for (let n = 255; n < 512; n++)
    As[n] = As[n - 255];
})();
Mc.log = function(t) {
  if (t < 1) throw new Error("log(" + t + ")");
  return pu[t];
};
Mc.exp = function(t) {
  return As[t];
};
Mc.mul = function(t, n) {
  return t === 0 || n === 0 ? 0 : As[pu[t] + pu[n]];
};
(function(e) {
  const t = Mc;
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
})(Qx);
const Xx = Qx;
function jh(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
}
jh.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = Xx.generateECPolynomial(this.degree);
};
jh.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const n = new Uint8Array(t.length + this.degree);
  n.set(t);
  const r = Xx.mod(n, this.genPoly), o = this.degree - r.length;
  if (o > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(r, o), i;
  }
  return r;
};
var Q4 = jh, qx = {}, io = {}, Ah = {};
Ah.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var cr = {};
const Jx = "[0-9]+", X4 = "[A-Z $%*+\\-./:]+";
let ll = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
ll = ll.replace(/u/g, "\\u");
const q4 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + ll + `)(?:.|[\r
]))+`;
cr.KANJI = new RegExp(ll, "g");
cr.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
cr.BYTE = new RegExp(q4, "g");
cr.NUMERIC = new RegExp(Jx, "g");
cr.ALPHANUMERIC = new RegExp(X4, "g");
const J4 = new RegExp("^" + ll + "$"), Z4 = new RegExp("^" + Jx + "$"), e3 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
cr.testKanji = function(t) {
  return J4.test(t);
};
cr.testNumeric = function(t) {
  return Z4.test(t);
};
cr.testAlphanumeric = function(t) {
  return e3.test(t);
};
(function(e) {
  const t = Ah, n = cr;
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
})(io);
(function(e) {
  const t = xn, n = Ic, r = Pc, o = io, i = Ah, s = 7973, l = t.getBCHDigit(s);
  function a(g, d, v) {
    for (let w = 1; w <= 40; w++)
      if (d <= e.getCapacity(w, v, g))
        return w;
  }
  function u(g, d) {
    return o.getCharCountIndicator(g, d) + 4;
  }
  function c(g, d) {
    let v = 0;
    return g.forEach(function(w) {
      const C = u(w.mode, d);
      v += C + w.getBitsLength();
    }), v;
  }
  function h(g, d) {
    for (let v = 1; v <= 40; v++)
      if (c(g, v) <= e.getCapacity(v, d, o.MIXED))
        return v;
  }
  e.from = function(d, v) {
    return i.isValid(d) ? parseInt(d, 10) : v;
  }, e.getCapacity = function(d, v, w) {
    if (!i.isValid(d))
      throw new Error("Invalid QR Code version");
    typeof w > "u" && (w = o.BYTE);
    const C = t.getSymbolTotalCodewords(d), m = n.getTotalCodewordsCount(d, v), p = (C - m) * 8;
    if (w === o.MIXED) return p;
    const x = p - u(w, d);
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
  }, e.getBestVersionForData = function(d, v) {
    let w;
    const C = r.from(v, r.M);
    if (Array.isArray(d)) {
      if (d.length > 1)
        return h(d, C);
      if (d.length === 0)
        return 1;
      w = d[0];
    } else
      w = d;
    return a(w.mode, w.getLength(), C);
  }, e.getEncodedBits = function(d) {
    if (!i.isValid(d) || d < 7)
      throw new Error("Invalid QR Code version");
    let v = d << 12;
    for (; t.getBCHDigit(v) - l >= 0; )
      v ^= s << t.getBCHDigit(v) - l;
    return d << 12 | v;
  };
})(qx);
var Zx = {};
const Vf = xn, eb = 1335, t3 = 21522, $y = Vf.getBCHDigit(eb);
Zx.getEncodedBits = function(t, n) {
  const r = t.bit << 3 | n;
  let o = r << 10;
  for (; Vf.getBCHDigit(o) - $y >= 0; )
    o ^= eb << Vf.getBCHDigit(o) - $y;
  return (r << 10 | o) ^ t3;
};
var tb = {};
const n3 = io;
function ji(e) {
  this.mode = n3.NUMERIC, this.data = e.toString();
}
ji.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
ji.prototype.getLength = function() {
  return this.data.length;
};
ji.prototype.getBitsLength = function() {
  return ji.getBitsLength(this.data.length);
};
ji.prototype.write = function(t) {
  let n, r, o;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    r = this.data.substr(n, 3), o = parseInt(r, 10), t.put(o, 10);
  const i = this.data.length - n;
  i > 0 && (r = this.data.substr(n), o = parseInt(r, 10), t.put(o, i * 3 + 1));
};
var r3 = ji;
const o3 = io, Sd = [
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
function Ai(e) {
  this.mode = o3.ALPHANUMERIC, this.data = e;
}
Ai.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
Ai.prototype.getLength = function() {
  return this.data.length;
};
Ai.prototype.getBitsLength = function() {
  return Ai.getBitsLength(this.data.length);
};
Ai.prototype.write = function(t) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let r = Sd.indexOf(this.data[n]) * 45;
    r += Sd.indexOf(this.data[n + 1]), t.put(r, 11);
  }
  this.data.length % 2 && t.put(Sd.indexOf(this.data[n]), 6);
};
var i3 = Ai;
const s3 = io;
function Ni(e) {
  this.mode = s3.BYTE, typeof e == "string" ? this.data = new TextEncoder().encode(e) : this.data = new Uint8Array(e);
}
Ni.getBitsLength = function(t) {
  return t * 8;
};
Ni.prototype.getLength = function() {
  return this.data.length;
};
Ni.prototype.getBitsLength = function() {
  return Ni.getBitsLength(this.data.length);
};
Ni.prototype.write = function(e) {
  for (let t = 0, n = this.data.length; t < n; t++)
    e.put(this.data[t], 8);
};
var l3 = Ni;
const a3 = io, u3 = xn;
function Oi(e) {
  this.mode = a3.KANJI, this.data = e;
}
Oi.getBitsLength = function(t) {
  return t * 13;
};
Oi.prototype.getLength = function() {
  return this.data.length;
};
Oi.prototype.getBitsLength = function() {
  return Oi.getBitsLength(this.data.length);
};
Oi.prototype.write = function(e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let n = u3.toSJIS(this.data[t]);
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
var c3 = Oi, nb = { exports: {} };
(function(e) {
  var t = {
    single_source_shortest_paths: function(n, r, o) {
      var i = {}, s = {};
      s[r] = 0;
      var l = t.PriorityQueue.make();
      l.push(r, 0);
      for (var a, u, c, h, g, d, v, w, C; !l.empty(); ) {
        a = l.pop(), u = a.value, h = a.cost, g = n[u] || {};
        for (c in g)
          g.hasOwnProperty(c) && (d = g[c], v = h + d, w = s[c], C = typeof s[c] > "u", (C || w > v) && (s[c] = v, l.push(c, v), i[c] = u));
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
})(nb);
var d3 = nb.exports;
(function(e) {
  const t = io, n = r3, r = i3, o = l3, i = c3, s = cr, l = xn, a = d3;
  function u(m) {
    return unescape(encodeURIComponent(m)).length;
  }
  function c(m, p, x) {
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
    const p = c(s.NUMERIC, t.NUMERIC, m), x = c(s.ALPHANUMERIC, t.ALPHANUMERIC, m);
    let S, E;
    return l.isKanjiModeEnabled() ? (S = c(s.BYTE, t.BYTE, m), E = c(s.KANJI, t.KANJI, m)) : (S = c(s.BYTE_KANJI, t.BYTE, m), E = []), p.concat(x, S, E).sort(function(T, R) {
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
  function d(m) {
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
    return e.fromArray(d(R));
  }, e.rawSplit = function(p) {
    return e.fromArray(
      h(p, l.isKanjiModeEnabled())
    );
  };
})(tb);
const $c = xn, wd = Pc, f3 = K4, p3 = G4, h3 = Kx, m3 = Gx, Hf = Yx, Kf = Ic, g3 = Q4, hu = qx, y3 = Zx, v3 = io, Cd = tb;
function x3(e, t) {
  const n = e.size, r = m3.getPositions(t);
  for (let o = 0; o < r.length; o++) {
    const i = r[o][0], s = r[o][1];
    for (let l = -1; l <= 7; l++)
      if (!(i + l <= -1 || n <= i + l))
        for (let a = -1; a <= 7; a++)
          s + a <= -1 || n <= s + a || (l >= 0 && l <= 6 && (a === 0 || a === 6) || a >= 0 && a <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && a >= 2 && a <= 4 ? e.set(i + l, s + a, !0, !0) : e.set(i + l, s + a, !1, !0));
  }
}
function b3(e) {
  const t = e.size;
  for (let n = 8; n < t - 8; n++) {
    const r = n % 2 === 0;
    e.set(n, 6, r, !0), e.set(6, n, r, !0);
  }
}
function S3(e, t) {
  const n = h3.getPositions(t);
  for (let r = 0; r < n.length; r++) {
    const o = n[r][0], i = n[r][1];
    for (let s = -2; s <= 2; s++)
      for (let l = -2; l <= 2; l++)
        s === -2 || s === 2 || l === -2 || l === 2 || s === 0 && l === 0 ? e.set(o + s, i + l, !0, !0) : e.set(o + s, i + l, !1, !0);
  }
}
function w3(e, t) {
  const n = e.size, r = hu.getEncodedBits(t);
  let o, i, s;
  for (let l = 0; l < 18; l++)
    o = Math.floor(l / 3), i = l % 3 + n - 8 - 3, s = (r >> l & 1) === 1, e.set(o, i, s, !0), e.set(i, o, s, !0);
}
function kd(e, t, n) {
  const r = e.size, o = y3.getEncodedBits(t, n);
  let i, s;
  for (i = 0; i < 15; i++)
    s = (o >> i & 1) === 1, i < 6 ? e.set(i, 8, s, !0) : i < 8 ? e.set(i + 1, 8, s, !0) : e.set(r - 15 + i, 8, s, !0), i < 8 ? e.set(8, r - i - 1, s, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, s, !0) : e.set(8, 15 - i - 1, s, !0);
  e.set(r - 8, 8, 1, !0);
}
function C3(e, t) {
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
function k3(e, t, n) {
  const r = new f3();
  n.forEach(function(a) {
    r.put(a.mode.bit, 4), r.put(a.getLength(), v3.getCharCountIndicator(a.mode, e)), a.write(r);
  });
  const o = $c.getSymbolTotalCodewords(e), i = Kf.getTotalCodewordsCount(e, t), s = (o - i) * 8;
  for (r.getLengthInBits() + 4 <= s && r.put(0, 4); r.getLengthInBits() % 8 !== 0; )
    r.putBit(0);
  const l = (s - r.getLengthInBits()) / 8;
  for (let a = 0; a < l; a++)
    r.put(a % 2 ? 17 : 236, 8);
  return E3(r, e, t);
}
function E3(e, t, n) {
  const r = $c.getSymbolTotalCodewords(t), o = Kf.getTotalCodewordsCount(t, n), i = r - o, s = Kf.getBlocksCount(t, n), l = r % s, a = s - l, u = Math.floor(r / s), c = Math.floor(i / s), h = c + 1, g = u - c, d = new g3(g);
  let v = 0;
  const w = new Array(s), C = new Array(s);
  let m = 0;
  const p = new Uint8Array(e.buffer);
  for (let T = 0; T < s; T++) {
    const R = T < a ? c : h;
    w[T] = p.slice(v, v + R), C[T] = d.encode(w[T]), v += R, m = Math.max(m, R);
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
function T3(e, t, n, r) {
  let o;
  if (Array.isArray(e))
    o = Cd.fromArray(e);
  else if (typeof e == "string") {
    let u = t;
    if (!u) {
      const c = Cd.rawSplit(e);
      u = hu.getBestVersionForData(c, n);
    }
    o = Cd.fromString(e, u || 40);
  } else
    throw new Error("Invalid data");
  const i = hu.getBestVersionForData(o, n);
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
  const s = k3(t, n, o), l = $c.getSymbolSize(t), a = new p3(l);
  return x3(a, t), b3(a), S3(a, t), kd(a, n, 0), t >= 7 && w3(a, t), C3(a, s), isNaN(r) && (r = Hf.getBestMask(
    a,
    kd.bind(null, a, n)
  )), Hf.applyMask(r, a), kd(a, n, r), {
    modules: a,
    version: t,
    errorCorrectionLevel: n,
    maskPattern: r,
    segments: o
  };
}
Vx.create = function(t, n) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  let r = wd.M, o, i;
  return typeof n < "u" && (r = wd.from(n.errorCorrectionLevel, wd.M), o = hu.from(n.version), i = Hf.from(n.maskPattern), n.toSJISFunc && $c.setToSJISFunction(n.toSJISFunc)), T3(t, o, r, i);
};
var rb = {}, Nh = {};
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
    const s = o.modules.size, l = o.modules.data, a = e.getScale(s, i), u = Math.floor((s + i.margin * 2) * a), c = i.margin * a, h = [i.color.light, i.color.dark];
    for (let g = 0; g < u; g++)
      for (let d = 0; d < u; d++) {
        let v = (g * u + d) * 4, w = i.color.light;
        if (g >= c && d >= c && g < u - c && d < u - c) {
          const C = Math.floor((g - c) / a), m = Math.floor((d - c) / a);
          w = h[l[C * s + m] ? 1 : 0];
        }
        r[v++] = w.r, r[v++] = w.g, r[v++] = w.b, r[v] = w.a;
      }
  };
})(Nh);
(function(e) {
  const t = Nh;
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
    const c = t.getImageWidth(i.modules.size, a), h = u.getContext("2d"), g = h.createImageData(c, c);
    return t.qrToImageData(g.data, i, a), n(h, u, c), h.putImageData(g, 0, 0), u;
  }, e.renderToDataURL = function(i, s, l) {
    let a = l;
    typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), a || (a = {});
    const u = e.render(i, s, a), c = a.type || "image/png", h = a.rendererOpts || {};
    return u.toDataURL(c, h.quality);
  };
})(rb);
var ob = {};
const R3 = Nh;
function jy(e, t) {
  const n = e.a / 255, r = t + '="' + e.hex + '"';
  return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
}
function Ed(e, t, n) {
  let r = e + t;
  return typeof n < "u" && (r += " " + n), r;
}
function P3(e, t, n) {
  let r = "", o = 0, i = !1, s = 0;
  for (let l = 0; l < e.length; l++) {
    const a = Math.floor(l % t), u = Math.floor(l / t);
    !a && !i && (i = !0), e[l] ? (s++, l > 0 && a > 0 && e[l - 1] || (r += i ? Ed("M", a + n, 0.5 + u + n) : Ed("m", o, 0), o = 0, i = !1), a + 1 < t && e[l + 1] || (r += Ed("h", s), s = 0)) : o++;
  }
  return r;
}
ob.render = function(t, n, r) {
  const o = R3.getOptions(n), i = t.modules.size, s = t.modules.data, l = i + o.margin * 2, a = o.color.light.a ? "<path " + jy(o.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "", u = "<path " + jy(o.color.dark, "stroke") + ' d="' + P3(s, i, o.margin) + '"/>', c = 'viewBox="0 0 ' + l + " " + l + '"', g = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + c + ' shape-rendering="crispEdges">' + a + u + `</svg>
`;
  return typeof r == "function" && r(null, g), g;
};
const I3 = V4, Gf = Vx, ib = rb, M3 = ob;
function Oh(e, t, n, r, o) {
  const i = [].slice.call(arguments, 1), s = i.length, l = typeof i[s - 1] == "function";
  if (!l && !I3())
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
        const c = Gf.create(n, r);
        a(e(c, t, r));
      } catch (c) {
        u(c);
      }
    });
  }
  try {
    const a = Gf.create(n, r);
    o(null, e(a, t, r));
  } catch (a) {
    o(a);
  }
}
Sl.create = Gf.create;
Sl.toCanvas = Oh.bind(null, ib.render);
Sl.toDataURL = Oh.bind(null, ib.renderToDataURL);
Sl.toString = Oh.bind(null, function(e, t, n) {
  return M3.render(e, n);
});
function Ay({
  text: e,
  size: t = 240,
  filename: n = "wireguard-tunnel"
}) {
  const r = y.useRef(null), [o, i] = y.useState(null);
  y.useEffect(() => {
    const l = r.current;
    !l || !e || Sl.toCanvas(
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
  return o ? /* @__PURE__ */ f.jsx(Ae, { sx: { p: 2, color: "error.main", textAlign: "center" }, children: /* @__PURE__ */ f.jsx(Te, { variant: "caption", children: o }) }) : /* @__PURE__ */ f.jsxs(Je, { spacing: 1, sx: { alignItems: "center" }, children: [
    /* @__PURE__ */ f.jsx(
      Ae,
      {
        sx: {
          p: 1.5,
          bgcolor: "#ffffff",
          borderRadius: "8px",
          display: "inline-block",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)"
        },
        children: /* @__PURE__ */ f.jsx("canvas", { ref: r, style: { display: "block" } })
      }
    ),
    /* @__PURE__ */ f.jsx(
      Rt,
      {
        size: "small",
        variant: "text",
        startIcon: /* @__PURE__ */ f.jsx(Ia, { sx: { fontSize: 16 } }),
        onClick: s,
        sx: { fontSize: "0.75rem", textTransform: "none", color: "text.secondary" },
        children: "Download QR Image (.png)"
      }
    )
  ] });
}
function aa(e) {
  if (!e || e === 0) return "0 B";
  const t = 1024, n = ["B", "KB", "MB", "GB", "TB"], r = Math.floor(Math.log(e) / Math.log(t));
  return `${parseFloat((e / Math.pow(t, r)).toFixed(2))} ${n[r]}`;
}
function $3(e) {
  if (!e || e === 0) return "Never";
  const n = Math.floor(Date.now() / 1e3) - e;
  return n < 60 ? `${n}s ago` : n < 3600 ? `${Math.floor(n / 60)}m ago` : n < 86400 ? `${Math.floor(n / 3600)}h ago` : `${Math.floor(n / 86400)}d ago`;
}
const ua = { p: 2, "&:last-child": { pb: 2 } }, ca = 2.25;
function j3({ ctx: e }) {
  const t = y.useMemo(() => vc(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ f.jsx(KE, { theme: t, children: /* @__PURE__ */ f.jsx(A3, { ctx: e }) });
}
function A3({ ctx: e }) {
  const [t, n] = y.useState(0), [r, o] = y.useState(null), [i, s] = y.useState(null), [l, a] = y.useState(null), [u, c] = y.useState([]), [h, g] = y.useState([]), [d, v] = y.useState(!1), [w, C] = y.useState(null), [m, p] = y.useState(!1), [x, S] = y.useState(""), [E, k] = y.useState([]), [T, R] = y.useState(!1), [I, A] = y.useState({
    name: "",
    ip: "",
    allowed_ips: "0.0.0.0/0, ::/0",
    dns: Ln[0].servers,
    preshared_key: ""
  }), [M, N] = y.useState(Ln[0].id), [b, j] = y.useState("all"), [P, O] = y.useState("create"), [B, $] = y.useState(""), [L, F] = y.useState(null), [U, W] = y.useState(null), [Q, G] = y.useState(""), [X, K] = y.useState(null), [q, _] = y.useState(null), [ne, re] = y.useState(""), ke = y.useRef(null);
  y.useEffect(() => () => {
    var D;
    return (D = ke.current) == null ? void 0 : D.abort();
  }, []);
  const he = y.useCallback(
    async (D, le) => {
      const ie = await e.api(D, le), oe = await ie.json().catch(() => ({}));
      if (!ie.ok) throw new Error(oe.message ?? `HTTP ${ie.status}`);
      return oe;
    },
    [e]
  ), de = y.useCallback(async () => {
    v(!0);
    try {
      const [D, le, ie, oe, Oe] = await Promise.all([
        he("/server/status").catch(() => null),
        he("/server/config").catch(() => null),
        he("/peers").catch(() => ({ peers: [] })),
        he("/server/logs").catch(() => ({ logs: [] })),
        he("/meta").catch(() => null)
      ]);
      D && o(D), le && s(le), Oe && a(Oe), c((ie == null ? void 0 : ie.peers) ?? []), g((oe == null ? void 0 : oe.logs) ?? []);
    } catch (D) {
      C(D.message || "Failed to load WireGuard data");
    } finally {
      v(!1);
    }
  }, [he]);
  y.useEffect(() => {
    de();
    const D = setInterval(de, 15e3);
    return () => clearInterval(D);
  }, [de]);
  async function fe(D, le, ie, oe) {
    S(D), k([]), R(!0), p(!0);
    const Oe = new AbortController();
    ke.current = Oe;
    try {
      for await (const se of e.run(le, { method: ie, body: oe, signal: Oe.signal }))
        k((ae) => W4(ae, se));
      de();
    } catch (se) {
      Oe.signal.aborted || k((ae) => [...ae, { stream: "stderr", text: String(se) }]);
    } finally {
      R(!1);
    }
  }
  const Me = () => fe("Starting WireGuard Server", "/server/start", "POST"), ze = () => fe("Stopping WireGuard Server", "/server/stop", "POST"), Pe = () => fe("Restarting WireGuard Server", "/server/restart", "POST"), $e = async () => {
    var D, le;
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
        const ie = {
          name: I.name.trim(),
          public_key: B.trim(),
          ip: ((D = I.ip) == null ? void 0 : D.trim()) || void 0,
          allowed_ips: I.allowed_ips || "0.0.0.0/0, ::/0",
          dns: I.dns || "1.1.1.1, 8.8.8.8",
          preshared_key: I.preshared_key ? I.preshared_key : void 0
        }, oe = await he("/peers/import", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ie)
        });
        oe != null && oe.peer && (F(oe.peer), n(0), A({
          name: "",
          ip: "",
          allowed_ips: "0.0.0.0/0, ::/0",
          dns: Ln[0].servers,
          preshared_key: ""
        }), N(Ln[0].id), $(""), de());
      } else {
        const ie = {
          name: I.name.trim(),
          ip: ((le = I.ip) == null ? void 0 : le.trim()) || void 0,
          allowed_ips: I.allowed_ips || "0.0.0.0/0, ::/0",
          dns: I.dns || Ln[0].servers,
          preshared_key: I.preshared_key ? I.preshared_key : void 0
        }, oe = await he("/peers/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ie)
        });
        oe != null && oe.peer && (F(oe.peer), n(0), A({
          name: "",
          ip: "",
          allowed_ips: "0.0.0.0/0, ::/0",
          dns: Ln[0].servers,
          preshared_key: ""
        }), N(Ln[0].id), de());
      }
    } catch (ie) {
      C(ie.message || "Failed to create or import client peer");
    } finally {
      v(!1);
    }
  }, me = async (D) => {
    try {
      await he(`/peers/${encodeURIComponent(D.id)}/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: !D.enabled })
      }), C(`Peer ${D.name} ${D.enabled ? "disabled" : "enabled"}`), de();
    } catch (le) {
      C(le.message || "Failed to toggle peer");
    }
  }, je = async () => {
    if (!(!q || !ne.trim()))
      try {
        await he(`/peers/${encodeURIComponent(q.id)}/rename`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ new_name: ne.trim() })
        }), C(`Peer renamed to ${ne.trim()}`), _(null), re(""), de();
      } catch (D) {
        C(D.message || "Failed to rename peer");
      }
  }, tt = async (D) => {
    K(null), await fe(`Deleting Peer ${D.name}`, `/peers/${encodeURIComponent(D.id)}`, "DELETE");
  }, Xe = async (D) => {
    W(D);
    try {
      const le = await he(`/peers/${encodeURIComponent(D.id)}/config`);
      G((le == null ? void 0 : le.config) || "");
    } catch {
      G("# Error loading peer configuration");
    }
  }, Fe = (D, le) => {
    const ie = new Blob([le], { type: "text/plain;charset=utf-8" }), oe = URL.createObjectURL(ie), Oe = document.createElement("a");
    Oe.href = oe, Oe.download = `${D}.conf`, Oe.click(), URL.revokeObjectURL(oe);
  }, qe = (r == null ? void 0 : r.status) === "running";
  return /* @__PURE__ */ f.jsxs(Ae, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ f.jsxs(
      Je,
      {
        direction: { xs: "column", sm: "row" },
        sx: {
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ f.jsxs(Je, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ f.jsx(P4, { sx: { fontSize: 32, color: "primary.main" } }),
            /* @__PURE__ */ f.jsxs(Ae, { children: [
              /* @__PURE__ */ f.jsx(Te, { variant: "h5", sx: { fontWeight: 700, lineHeight: 1.2 }, children: "WireGuard VPN" }),
              /* @__PURE__ */ f.jsx(Te, { variant: "body2", sx: { color: "text.secondary" }, children: "High-performance kernel VPN tunnels & client access" })
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs(Je, { direction: "row", spacing: 1.5, sx: { alignItems: "center", flexWrap: "wrap" }, children: [
            /* @__PURE__ */ f.jsx(
              hr,
              {
                size: "small",
                label: qe ? "RUNNING" : "STOPPED",
                color: qe ? "success" : "default",
                sx: { fontWeight: 700, letterSpacing: "0.05em" }
              }
            ),
            /* @__PURE__ */ f.jsx(
              hr,
              {
                size: "small",
                label: `PORT ${(i == null ? void 0 : i.listen_port) ?? (r == null ? void 0 : r.listen_port) ?? "—"}/UDP`,
                variant: "outlined",
                sx: { fontFamily: st, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ f.jsx(
              hr,
              {
                size: "small",
                label: (r == null ? void 0 : r.endpoint) || "127.0.0.1",
                variant: "outlined",
                sx: { fontFamily: st, fontSize: "0.75rem" }
              }
            )
          ] }),
          /* @__PURE__ */ f.jsxs(Je, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ f.jsx(mr, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              zn,
              {
                size: "small",
                onClick: de,
                disabled: d,
                sx: { border: "1px solid", borderColor: "divider" },
                children: d ? /* @__PURE__ */ f.jsx(Rs, { size: 16, color: "inherit" }) : /* @__PURE__ */ f.jsx(Ty, { sx: { fontSize: 18 } })
              }
            ) }) }),
            qe ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(mr, { title: "Restart WireGuard Server", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
                zn,
                {
                  size: "small",
                  color: "warning",
                  onClick: Pe,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ f.jsx($4, { sx: { fontSize: 18 } })
                }
              ) }) }),
              /* @__PURE__ */ f.jsx(mr, { title: "Stop WireGuard Server", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
                zn,
                {
                  size: "small",
                  color: "error",
                  onClick: ze,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ f.jsx(M4, { sx: { fontSize: 18 } })
                }
              ) }) })
            ] }) : /* @__PURE__ */ f.jsx(mr, { title: "Start WireGuard Server", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              zn,
              {
                size: "small",
                color: "success",
                onClick: Me,
                sx: { border: "1px solid", borderColor: "success.main", bgcolor: (D) => rl(D.palette.success.main, 0.1) },
                children: /* @__PURE__ */ f.jsx(I4, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(
              Rt,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ f.jsx(xd, {}),
                onClick: () => n(1),
                sx: { ml: 1, whiteSpace: "nowrap" },
                children: "Add Client Peer"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(Ae, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: 2 }, children: [
      /* @__PURE__ */ f.jsx(Xl, { variant: "outlined", children: /* @__PURE__ */ f.jsx(ql, { sx: ua, children: /* @__PURE__ */ f.jsxs(Je, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ f.jsxs(Ae, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ f.jsx(Kt, { children: "VPN Server Status" }),
          /* @__PURE__ */ f.jsxs(Je, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
            /* @__PURE__ */ f.jsx(Iy, { ok: qe, size: 10 }),
            /* @__PURE__ */ f.jsx(Te, { variant: "h6", sx: { fontWeight: 700 }, children: qe ? `Active (${(i == null ? void 0 : i.interface) || "wg0"})` : "Inactive" })
          ] }),
          /* @__PURE__ */ f.jsxs(Te, { variant: "caption", sx: { color: "text.disabled", fontFamily: st }, children: [
            "Port: ",
            (i == null ? void 0 : i.listen_port) ?? (r == null ? void 0 : r.listen_port) ?? "—",
            " • UDP"
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(Py, { sx: { color: qe ? "success.main" : "text.disabled" } })
      ] }) }) }),
      /* @__PURE__ */ f.jsx(Xl, { variant: "outlined", children: /* @__PURE__ */ f.jsx(ql, { sx: ua, children: /* @__PURE__ */ f.jsxs(Je, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ f.jsxs(Ae, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ f.jsx(Kt, { children: "Connected Peers" }),
          /* @__PURE__ */ f.jsxs(Te, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
            (r == null ? void 0 : r.active_peers_count) ?? 0,
            " ",
            /* @__PURE__ */ f.jsxs(Te, { component: "span", variant: "body2", sx: { color: "text.secondary" }, children: [
              "/ ",
              u.length,
              " Total"
            ] })
          ] }),
          /* @__PURE__ */ f.jsx(Te, { variant: "caption", sx: { color: "text.disabled" }, children: "Active handshakes < 3m" })
        ] }),
        /* @__PURE__ */ f.jsx(Ry, { sx: { color: "primary.main" } })
      ] }) }) }),
      /* @__PURE__ */ f.jsx(Xl, { variant: "outlined", children: /* @__PURE__ */ f.jsx(ql, { sx: ua, children: /* @__PURE__ */ f.jsxs(Je, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ f.jsxs(Ae, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ f.jsx(Kt, { children: "Total Bandwidth" }),
          /* @__PURE__ */ f.jsxs(Te, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, fontFamily: st }, children: [
            "↓ ",
            aa((r == null ? void 0 : r.total_rx_bytes) ?? 0)
          ] }),
          /* @__PURE__ */ f.jsxs(Te, { variant: "caption", sx: { color: "text.secondary", fontFamily: st }, children: [
            "↑ ",
            aa((r == null ? void 0 : r.total_tx_bytes) ?? 0)
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(z4, { sx: { color: "info.main" } })
      ] }) }) }),
      /* @__PURE__ */ f.jsx(Xl, { variant: "outlined", children: /* @__PURE__ */ f.jsx(ql, { sx: ua, children: /* @__PURE__ */ f.jsxs(Je, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ f.jsxs(Ae, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ f.jsx(Kt, { children: "VPN Subnet" }),
          /* @__PURE__ */ f.jsx(Te, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, fontFamily: st }, children: (i == null ? void 0 : i.subnet) || (r == null ? void 0 : r.subnet) || "—" }),
          /* @__PURE__ */ f.jsxs(Te, { variant: "caption", sx: { color: "text.disabled", fontFamily: st }, children: [
            "Gateway: ",
            (i == null ? void 0 : i.address) || (r == null ? void 0 : r.address) || "—"
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(L4, { sx: { color: "warning.main" } })
      ] }) }) })
    ] }),
    /* @__PURE__ */ f.jsxs(ar, { sx: { overflow: "hidden" }, children: [
      /* @__PURE__ */ f.jsxs(
        C4,
        {
          value: t,
          onChange: (D, le) => n(le),
          variant: "scrollable",
          scrollButtons: "auto",
          sx: {
            borderBottom: "1px solid",
            borderColor: "divider",
            px: 1
          },
          children: [
            /* @__PURE__ */ f.jsx(us, { icon: /* @__PURE__ */ f.jsx(Ry, { sx: { fontSize: 18 } }), iconPosition: "start", label: "VPN Client Peers" }),
            /* @__PURE__ */ f.jsx(us, { icon: /* @__PURE__ */ f.jsx(xd, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Add Client Peer" }),
            /* @__PURE__ */ f.jsx(us, { icon: /* @__PURE__ */ f.jsx(F4, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Server Configuration" }),
            /* @__PURE__ */ f.jsx(us, { icon: /* @__PURE__ */ f.jsx(_4, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Live Traffic Logs" }),
            /* @__PURE__ */ f.jsx(us, { icon: /* @__PURE__ */ f.jsx(Py, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Service & Isolation" })
          ]
        }
      ),
      t === 0 && /* @__PURE__ */ f.jsx(Ae, { children: /* @__PURE__ */ f.jsx(XM, { children: /* @__PURE__ */ f.jsxs(LM, { size: "medium", children: [
        /* @__PURE__ */ f.jsx(t4, { children: /* @__PURE__ */ f.jsxs(yd, { sx: { bgcolor: "action.hover" }, children: [
          /* @__PURE__ */ f.jsx(Vt, { sx: { width: 40 } }),
          /* @__PURE__ */ f.jsx(Vt, { children: /* @__PURE__ */ f.jsx(Kt, { children: "Peer Name" }) }),
          /* @__PURE__ */ f.jsx(Vt, { children: /* @__PURE__ */ f.jsx(Kt, { children: "Assigned IP" }) }),
          /* @__PURE__ */ f.jsx(Vt, { children: /* @__PURE__ */ f.jsx(Kt, { children: "Public Key" }) }),
          /* @__PURE__ */ f.jsx(Vt, { children: /* @__PURE__ */ f.jsx(Kt, { children: "Last Handshake" }) }),
          /* @__PURE__ */ f.jsx(Vt, { children: /* @__PURE__ */ f.jsx(Kt, { children: "Transfer (Rx / Tx)" }) }),
          /* @__PURE__ */ f.jsx(Vt, { align: "right", children: /* @__PURE__ */ f.jsx(Kt, { children: "Actions" }) })
        ] }) }),
        /* @__PURE__ */ f.jsx(WM, { children: u.length === 0 ? /* @__PURE__ */ f.jsx(yd, { children: /* @__PURE__ */ f.jsxs(Vt, { colSpan: 7, align: "center", sx: { py: 5 }, children: [
          /* @__PURE__ */ f.jsx(Te, { variant: "body2", sx: { color: "text.secondary", mb: 1.5 }, children: "No VPN client peers configured yet." }),
          /* @__PURE__ */ f.jsx(
            Rt,
            {
              variant: "outlined",
              size: "small",
              startIcon: /* @__PURE__ */ f.jsx(xd, {}),
              onClick: () => n(1),
              children: "Create First Peer"
            }
          )
        ] }) }) : u.map((D) => {
          const le = D.last_handshake > 0 && Math.floor(Date.now() / 1e3) - D.last_handshake < 180;
          return /* @__PURE__ */ f.jsxs(yd, { hover: !0, sx: { opacity: D.enabled ? 1 : 0.6 }, children: [
            /* @__PURE__ */ f.jsx(Vt, { children: /* @__PURE__ */ f.jsx(Iy, { ok: D.enabled && le, size: 8 }) }),
            /* @__PURE__ */ f.jsxs(Vt, { children: [
              /* @__PURE__ */ f.jsxs(Je, { direction: "row", spacing: 0.5, sx: { alignItems: "center", flexWrap: "wrap" }, children: [
                /* @__PURE__ */ f.jsx(Te, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: D.name }),
                !D.enabled && /* @__PURE__ */ f.jsx(hr, { size: "small", label: "DISABLED", color: "default", sx: { fontSize: "0.65rem", height: 18 } }),
                D.imported && /* @__PURE__ */ f.jsx(hr, { size: "small", label: "IMPORTED", color: "info", variant: "outlined", sx: { fontSize: "0.65rem", height: 18 } })
              ] }),
              /* @__PURE__ */ f.jsxs(Te, { variant: "caption", sx: { color: "text.disabled", fontFamily: st }, children: [
                "id: ",
                D.id
              ] })
            ] }),
            /* @__PURE__ */ f.jsxs(Vt, { children: [
              /* @__PURE__ */ f.jsx(
                hr,
                {
                  size: "small",
                  label: D.ip,
                  sx: { fontFamily: st, fontSize: "0.75rem" }
                }
              ),
              D.dns ? /* @__PURE__ */ f.jsxs(
                Te,
                {
                  variant: "caption",
                  sx: {
                    display: "block",
                    color: "text.secondary",
                    fontFamily: st,
                    fontSize: "0.6875rem",
                    mt: 0.5,
                    maxWidth: 160,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  title: `DNS: ${D.dns}`,
                  children: [
                    "DNS: ",
                    D.dns
                  ]
                }
              ) : null
            ] }),
            /* @__PURE__ */ f.jsx(Vt, { children: /* @__PURE__ */ f.jsx(
              Te,
              {
                sx: {
                  fontFamily: st,
                  fontSize: "0.75rem",
                  color: "text.secondary",
                  maxWidth: 160,
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: D.public_key
              }
            ) }),
            /* @__PURE__ */ f.jsx(Vt, { children: /* @__PURE__ */ f.jsx(Te, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: $3(D.last_handshake) }) }),
            /* @__PURE__ */ f.jsx(Vt, { children: /* @__PURE__ */ f.jsxs(Te, { sx: { fontFamily: st, fontSize: "0.75rem" }, children: [
              "↓ ",
              aa(D.rx_bytes),
              " / ↑ ",
              aa(D.tx_bytes)
            ] }) }),
            /* @__PURE__ */ f.jsx(Vt, { align: "right", children: /* @__PURE__ */ f.jsxs(Je, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ f.jsx(mr, { title: D.enabled ? "Disable Peer" : "Enable Peer", children: /* @__PURE__ */ f.jsx(
                zn,
                {
                  size: "small",
                  onClick: () => me(D),
                  children: D.enabled ? /* @__PURE__ */ f.jsx(O4, { fontSize: "small", color: "success" }) : /* @__PURE__ */ f.jsx(B4, { fontSize: "small", color: "action" })
                }
              ) }),
              /* @__PURE__ */ f.jsx(mr, { title: "Rename Peer", children: /* @__PURE__ */ f.jsx(
                zn,
                {
                  size: "small",
                  onClick: () => {
                    _(D), re(D.name);
                  },
                  children: /* @__PURE__ */ f.jsx(N4, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ f.jsx(mr, { title: "View QR Code & Config", children: /* @__PURE__ */ f.jsx(
                zn,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => Xe(D),
                  children: /* @__PURE__ */ f.jsx(j4, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ f.jsx(mr, { title: "Download .conf file", children: /* @__PURE__ */ f.jsx(
                zn,
                {
                  size: "small",
                  onClick: async () => {
                    const ie = await he(
                      `/peers/${encodeURIComponent(D.id)}/config`
                    );
                    ie != null && ie.config && Fe(D.name, ie.config);
                  },
                  children: /* @__PURE__ */ f.jsx(Ia, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ f.jsx(mr, { title: "Delete Peer", children: /* @__PURE__ */ f.jsx(
                zn,
                {
                  size: "small",
                  color: "error",
                  onClick: () => K(D),
                  children: /* @__PURE__ */ f.jsx(A4, { fontSize: "small" })
                }
              ) })
            ] }) })
          ] }, D.id);
        }) })
      ] }) }) }),
      t === 1 && /* @__PURE__ */ f.jsxs(Ae, { sx: { p: ca, maxWidth: 640 }, children: [
        /* @__PURE__ */ f.jsx(Te, { variant: "h6", sx: { fontWeight: 600, mb: 0.5 }, children: P === "import" ? "Import Existing VPN Client Profile" : "Create New VPN Client Profile" }),
        /* @__PURE__ */ f.jsx(Te, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: P === "import" ? "Registers an existing client public key without storing private credentials on the server." : "Generates cryptographic Curve25519 keypair, allocates next IP, and renders client QR code." }),
        /* @__PURE__ */ f.jsx(Ae, { sx: { mb: 2.5 }, children: /* @__PURE__ */ f.jsxs(KP, { size: "small", children: [
          /* @__PURE__ */ f.jsx(
            Rt,
            {
              variant: P === "create" ? "contained" : "outlined",
              onClick: () => O("create"),
              children: "Generate New Keys"
            }
          ),
          /* @__PURE__ */ f.jsx(
            Rt,
            {
              variant: P === "import" ? "contained" : "outlined",
              onClick: () => O("import"),
              children: "Import Existing Public Key"
            }
          )
        ] }) }),
        /* @__PURE__ */ f.jsxs(Je, { spacing: 2.5, children: [
          /* @__PURE__ */ f.jsx(Qo, { label: "Peer / Device Name", hint: "Alphanumeric (e.g. phone, macbook, router)", children: /* @__PURE__ */ f.jsx(
            Ar,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "e.g. alice-iphone",
              value: I.name,
              onChange: (D) => A({ ...I, name: D.target.value })
            }
          ) }),
          P === "import" && /* @__PURE__ */ f.jsx(Qo, { label: "Client Public Key", hint: "Base64 Curve25519 public key (44 chars, e.g. from wg pubkey)", children: /* @__PURE__ */ f.jsx(
            Ar,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "e.g. 7XpQ...=",
              value: B,
              onChange: (D) => $(D.target.value),
              slotProps: {
                input: {
                  sx: { fontFamily: st, fontSize: "0.8125rem" }
                }
              }
            }
          ) }),
          /* @__PURE__ */ f.jsx(Qo, { label: "Assigned Client IP", hint: "Leave empty to auto-allocate next available 10.8.0.x", children: /* @__PURE__ */ f.jsx(
            Ar,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "Auto-allocated (e.g. 10.8.0.2)",
              value: I.ip,
              onChange: (D) => A({ ...I, ip: D.target.value })
            }
          ) }),
          /* @__PURE__ */ f.jsx(Qo, { label: "Traffic Routing (Allowed IPs)", hint: "What traffic this client routes through VPN", children: /* @__PURE__ */ f.jsxs(
            fu,
            {
              fullWidth: !0,
              size: "small",
              value: b,
              onChange: (D) => {
                const le = D.target.value;
                j(le), le === "all" ? A({ ...I, allowed_ips: "0.0.0.0/0, ::/0" }) : le === "subnet" && A({ ...I, allowed_ips: "10.8.0.0/24" });
              },
              children: [
                /* @__PURE__ */ f.jsx(na, { value: "all", children: "Full Tunnel (All Traffic: 0.0.0.0/0, ::/0)" }),
                /* @__PURE__ */ f.jsx(na, { value: "subnet", children: "Split Tunnel (VPN Subnet Only: 10.8.0.0/24)" }),
                /* @__PURE__ */ f.jsx(na, { value: "custom", children: "Custom Allowed IPs" })
              ]
            }
          ) }),
          b === "custom" && /* @__PURE__ */ f.jsx(
            Ar,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "0.0.0.0/0, ::/0",
              value: I.allowed_ips,
              onChange: (D) => A({ ...I, allowed_ips: D.target.value })
            }
          ),
          /* @__PURE__ */ f.jsxs(
            Qo,
            {
              label: "DNS Resolver Preset",
              hint: "Curated privacy and security resolver presets or custom addresses",
              children: [
                /* @__PURE__ */ f.jsx(
                  fu,
                  {
                    fullWidth: !0,
                    size: "small",
                    value: M,
                    onChange: (D) => {
                      const le = D.target.value;
                      N(le);
                      const ie = Ln.find((oe) => oe.id === le);
                      ie && ie.id !== "custom" && A({ ...I, dns: ie.servers });
                    },
                    children: Ln.map((D) => /* @__PURE__ */ f.jsx(na, { value: D.id, children: /* @__PURE__ */ f.jsxs(Ae, { sx: { py: 0.5, width: "100%" }, children: [
                      /* @__PURE__ */ f.jsxs(Je, { direction: "row", spacing: 1, sx: { alignItems: "center", justifyContent: "space-between" }, children: [
                        /* @__PURE__ */ f.jsx(Te, { variant: "body2", sx: { fontWeight: 600 }, children: D.name }),
                        D.servers ? /* @__PURE__ */ f.jsx(
                          hr,
                          {
                            size: "small",
                            label: D.servers,
                            variant: "outlined",
                            sx: { fontFamily: st, fontSize: "0.6875rem", height: 18 }
                          }
                        ) : null
                      ] }),
                      /* @__PURE__ */ f.jsx(Te, { variant: "caption", sx: { color: "text.secondary", display: "block", mt: 0.25 }, children: D.description })
                    ] }) }, D.id))
                  }
                ),
                /* @__PURE__ */ f.jsx(Je, { direction: "row", spacing: 0.75, sx: { mt: 1, flexWrap: "wrap", gap: 0.5 }, children: Ln.map((D) => /* @__PURE__ */ f.jsx(
                  hr,
                  {
                    size: "small",
                    label: D.shortLabel,
                    variant: M === D.id ? "filled" : "outlined",
                    color: M === D.id ? "primary" : "default",
                    onClick: () => {
                      N(D.id), D.id !== "custom" && A({ ...I, dns: D.servers });
                    },
                    sx: { cursor: "pointer", fontSize: "0.75rem", height: 22 }
                  },
                  D.id
                )) })
              ]
            }
          ),
          /* @__PURE__ */ f.jsx(
            Qo,
            {
              label: "Client DNS Addresses",
              hint: "Comma-separated DNS server IPs assigned to this client profile",
              children: /* @__PURE__ */ f.jsx(
                Ar,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "e.g. 1.1.1.1, 1.0.0.1",
                  value: I.dns,
                  onChange: (D) => {
                    const le = D.target.value;
                    A({ ...I, dns: le });
                    const ie = Ln.find((oe) => oe.servers === le.trim());
                    N(ie ? ie.id : "custom");
                  },
                  slotProps: {
                    input: {
                      sx: { fontFamily: st, fontSize: "0.8125rem" }
                    }
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ f.jsx(Je, { direction: "row", spacing: 2, sx: { pt: 1 }, children: /* @__PURE__ */ f.jsx(
            Rt,
            {
              variant: "contained",
              color: "primary",
              onClick: $e,
              disabled: d || !I.name.trim() || P === "import" && !B.trim(),
              startIcon: d ? /* @__PURE__ */ f.jsx(Rs, { size: 16 }) : /* @__PURE__ */ f.jsx(D4, {}),
              sx: { fontWeight: 700 },
              children: P === "import" ? "Import Client Profile" : "Generate Peer Profile & QR Code"
            }
          ) })
        ] })
      ] }),
      t === 2 && /* @__PURE__ */ f.jsxs(Ae, { sx: { p: ca }, children: [
        /* @__PURE__ */ f.jsx(Te, { variant: "h6", sx: { fontWeight: 600, mb: 2 }, children: "WireGuard Server Parameters" }),
        /* @__PURE__ */ f.jsxs(Ae, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }, children: [
          /* @__PURE__ */ f.jsx(Ae, { children: /* @__PURE__ */ f.jsx(cs, { label: "Interface & Port", children: /* @__PURE__ */ f.jsxs(Je, { spacing: 2, children: [
            /* @__PURE__ */ f.jsx(Ht, { label: "Interface Device", value: (i == null ? void 0 : i.interface) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ht, { label: "Listen Port (UDP)", value: (i == null ? void 0 : i.listen_port) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ht, { label: "Interface IP Address", value: (i == null ? void 0 : i.address) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ht, { label: "Tunnel MTU", value: (i == null ? void 0 : i.mtu) ?? "—" })
          ] }) }) }),
          /* @__PURE__ */ f.jsx(Ae, { children: /* @__PURE__ */ f.jsx(cs, { label: "Network & Public Keys", children: /* @__PURE__ */ f.jsxs(Je, { spacing: 2, children: [
            /* @__PURE__ */ f.jsx(Ht, { label: "Public Endpoint", value: (i == null ? void 0 : i.endpoint) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ht, { label: "VPN Subnet", value: (i == null ? void 0 : i.subnet) ?? "—" }),
            /* @__PURE__ */ f.jsxs(Ae, { children: [
              /* @__PURE__ */ f.jsx(Kt, { children: "Server Public Key" }),
              /* @__PURE__ */ f.jsxs(Je, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
                /* @__PURE__ */ f.jsx(
                  Te,
                  {
                    sx: {
                      fontFamily: st,
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
                  zn,
                  {
                    size: "small",
                    onClick: () => {
                      i != null && i.public_key && (navigator.clipboard.writeText(i.public_key), C("Server public key copied to clipboard"));
                    },
                    children: /* @__PURE__ */ f.jsx(bd, { fontSize: "small" })
                  }
                )
              ] })
            ] })
          ] }) }) }),
          /* @__PURE__ */ f.jsx(Ae, { sx: { gridColumn: { xs: "span 1", sm: "span 2" } }, children: /* @__PURE__ */ f.jsxs(cs, { label: "Configuration File on Disk", children: [
            /* @__PURE__ */ f.jsx(Te, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "All WireGuard settings and keys live exclusively under HostPanel root:" }),
            /* @__PURE__ */ f.jsx(
              Te,
              {
                sx: {
                  fontFamily: st,
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
      t === 3 && /* @__PURE__ */ f.jsxs(Ae, { sx: { p: ca }, children: [
        /* @__PURE__ */ f.jsxs(Je, { direction: "row", sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
          /* @__PURE__ */ f.jsx(Te, { variant: "h6", sx: { fontWeight: 600 }, children: "WireGuard Tunnel & Handshake Logs" }),
          /* @__PURE__ */ f.jsx(Rt, { size: "small", variant: "outlined", startIcon: /* @__PURE__ */ f.jsx(Ty, {}), onClick: de, children: "Refresh Logs" })
        ] }),
        /* @__PURE__ */ f.jsx(
          ar,
          {
            sx: {
              bgcolor: xr.bg,
              p: 2,
              maxHeight: "26rem",
              overflowY: "auto",
              fontFamily: st,
              fontSize: 12,
              lineHeight: 1.6,
              color: xr.fg
            },
            children: h.length === 0 ? /* @__PURE__ */ f.jsx(Te, { sx: { color: xr.dim, fontFamily: st }, children: "No recent kernel or handshake events recorded." }) : h.map((D, le) => /* @__PURE__ */ f.jsx(Ae, { sx: { whiteSpace: "pre-wrap", wordBreak: "break-word" }, children: D }, le))
          }
        )
      ] }),
      t === 4 && /* @__PURE__ */ f.jsxs(Ae, { sx: { p: ca }, children: [
        /* @__PURE__ */ f.jsx(Te, { variant: "h6", sx: { fontWeight: 600, mb: 1 }, children: "Strict 100% Isolation Architecture" }),
        /* @__PURE__ */ f.jsxs(Te, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
          "HostPanel v3 enforces full isolation under ",
          /* @__PURE__ */ f.jsx("code", { children: "/opt/hostpanel" }),
          ". No configuration or socket is scattered across system ",
          /* @__PURE__ */ f.jsx("code", { children: "/etc/wireguard" }),
          "."
        ] }),
        /* @__PURE__ */ f.jsxs(Ae, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }, children: [
          /* @__PURE__ */ f.jsx(Ae, { children: /* @__PURE__ */ f.jsx(cs, { label: "Daemon & Sandbox Specs", children: /* @__PURE__ */ f.jsxs(Je, { spacing: 2, children: [
            /* @__PURE__ */ f.jsx(Ht, { label: "Systemd Unit", value: (l == null ? void 0 : l.unit) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ht, { label: "Run As User", value: (l == null ? void 0 : l.run_as) ?? "—" }),
            /* @__PURE__ */ f.jsx(
              Ht,
              {
                label: "Loopback Port",
                value: l != null && l.port ? `${l.port} (${l.host})` : "—"
              }
            ),
            /* @__PURE__ */ f.jsx(Ht, { label: "Root Ops Helper", value: (l == null ? void 0 : l.ops_script) ?? "—" })
          ] }) }) }),
          /* @__PURE__ */ f.jsx(Ae, { children: /* @__PURE__ */ f.jsx(cs, { label: "Isolated Path Sandboxes", children: /* @__PURE__ */ f.jsxs(Je, { spacing: 2, children: [
            /* @__PURE__ */ f.jsx(Ht, { label: "Config Directory", value: (i == null ? void 0 : i.isolation_path) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ht, { label: "Runtime / Sockets", value: (i == null ? void 0 : i.run_path) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ht, { label: "Audit & Traffic Logs", value: (i == null ? void 0 : i.logs_path) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ht, { label: "Client Profiles Dir", value: (i == null ? void 0 : i.peers_path) ?? "—" }),
            /* @__PURE__ */ f.jsx(Ht, { label: "Engine Runtime", value: (i == null ? void 0 : i.runtime_path) ?? "—" })
          ] }) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(
      os,
      {
        open: !!L,
        onClose: () => F(null),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsxs(ls, { sx: { fontWeight: 700 }, children: [
            "Client Peer Created: ",
            L == null ? void 0 : L.name
          ] }),
          /* @__PURE__ */ f.jsx(ss, { dividers: !0, children: /* @__PURE__ */ f.jsxs(Je, { spacing: 2.5, sx: { alignItems: "center", py: 1 }, children: [
            /* @__PURE__ */ f.jsxs(Te, { variant: "body2", sx: { color: "text.secondary", textAlign: "center" }, children: [
              "Scan this QR code with the WireGuard mobile app (iOS / Android) or download the ",
              /* @__PURE__ */ f.jsx("code", { children: ".conf" }),
              " file for desktop."
            ] }),
            (L == null ? void 0 : L.imported) && /* @__PURE__ */ f.jsxs(Dg, { severity: "info", sx: { width: "100%", fontSize: "0.8125rem" }, children: [
              /* @__PURE__ */ f.jsx("strong", { children: "Client-Side Keys:" }),
              " This peer was registered using an imported public key. The private key remains exclusively on the client device."
            ] }),
            (L == null ? void 0 : L.config) && /* @__PURE__ */ f.jsx(
              Ay,
              {
                text: L.config,
                size: 240,
                filename: `${L.name || "wireguard"}-profile`
              }
            ),
            /* @__PURE__ */ f.jsx(
              hr,
              {
                label: `Assigned IP: ${(L == null ? void 0 : L.ip) || "10.8.0.x"}`,
                color: "primary",
                sx: { fontWeight: 700, fontFamily: st }
              }
            ),
            /* @__PURE__ */ f.jsxs(Ae, { sx: { width: "100%" }, children: [
              /* @__PURE__ */ f.jsx(Kt, { sx: { mb: 0.5 }, children: "Client Configuration File" }),
              /* @__PURE__ */ f.jsx(
                Ar,
                {
                  fullWidth: !0,
                  multiline: !0,
                  rows: 6,
                  value: (L == null ? void 0 : L.config) || "",
                  slotProps: {
                    input: {
                      readOnly: !0,
                      sx: { fontFamily: st, fontSize: "0.75rem" }
                    }
                  }
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ f.jsxs(is, { sx: { p: 2 }, children: [
            /* @__PURE__ */ f.jsx(
              Rt,
              {
                startIcon: /* @__PURE__ */ f.jsx(bd, {}),
                onClick: () => {
                  L != null && L.config && (navigator.clipboard.writeText(L.config), C("Configuration copied to clipboard"));
                },
                children: "Copy Text"
              }
            ),
            /* @__PURE__ */ f.jsx(
              Rt,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ f.jsx(Ia, {}),
                onClick: () => {
                  L != null && L.name && (L != null && L.config) && Fe(L.name, L.config);
                },
                sx: { fontWeight: 700 },
                children: "Download .conf"
              }
            ),
            /* @__PURE__ */ f.jsx(Rt, { onClick: () => F(null), children: "Done" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      os,
      {
        open: !!U,
        onClose: () => {
          W(null), G("");
        },
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsxs(ls, { sx: { fontWeight: 700 }, children: [
            "WireGuard Profile: ",
            U == null ? void 0 : U.name,
            " (",
            U == null ? void 0 : U.ip,
            ")"
          ] }),
          /* @__PURE__ */ f.jsx(ss, { dividers: !0, children: /* @__PURE__ */ f.jsxs(Je, { spacing: 2, sx: { alignItems: "center", py: 1 }, children: [
            (U == null ? void 0 : U.imported) && /* @__PURE__ */ f.jsxs(Dg, { severity: "info", sx: { width: "100%", fontSize: "0.8125rem" }, children: [
              /* @__PURE__ */ f.jsx("strong", { children: "Client-Side Keys:" }),
              " This peer uses an externally generated keypair. When using the config template below, replace ",
              /* @__PURE__ */ f.jsx("code", { children: "<CLIENT_PRIVATE_KEY>" }),
              " with the client's private key."
            ] }),
            Q ? /* @__PURE__ */ f.jsx(
              Ay,
              {
                text: Q,
                size: 240,
                filename: `${(U == null ? void 0 : U.name) || "wireguard"}-profile`
              }
            ) : /* @__PURE__ */ f.jsx(Rs, { size: 32 }),
            /* @__PURE__ */ f.jsxs(Ae, { sx: { width: "100%" }, children: [
              /* @__PURE__ */ f.jsx(Kt, { sx: { mb: 0.5 }, children: "Client Configuration (.conf)" }),
              /* @__PURE__ */ f.jsx(
                Ar,
                {
                  fullWidth: !0,
                  multiline: !0,
                  rows: 6,
                  value: Q,
                  slotProps: {
                    input: {
                      readOnly: !0,
                      sx: { fontFamily: st, fontSize: "0.75rem" }
                    }
                  }
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ f.jsxs(is, { sx: { p: 2 }, children: [
            /* @__PURE__ */ f.jsx(
              Rt,
              {
                startIcon: /* @__PURE__ */ f.jsx(bd, {}),
                onClick: () => {
                  Q && (navigator.clipboard.writeText(Q), C("Configuration copied to clipboard"));
                },
                children: "Copy"
              }
            ),
            /* @__PURE__ */ f.jsx(
              Rt,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ f.jsx(Ia, {}),
                onClick: () => {
                  U != null && U.name && Q && Fe(U.name, Q);
                },
                sx: { fontWeight: 700 },
                children: "Download .conf"
              }
            ),
            /* @__PURE__ */ f.jsx(
              Rt,
              {
                onClick: () => {
                  W(null), G("");
                },
                children: "Close"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      os,
      {
        open: !!X,
        onClose: () => K(null),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsx(ls, { sx: { fontWeight: 700 }, children: "Delete Client Peer" }),
          /* @__PURE__ */ f.jsx(ss, { children: /* @__PURE__ */ f.jsxs(Te, { variant: "body2", sx: { color: "text.secondary" }, children: [
            "Are you sure you want to revoke and delete peer",
            " ",
            /* @__PURE__ */ f.jsx("strong", { children: X == null ? void 0 : X.name }),
            " (",
            X == null ? void 0 : X.ip,
            ")? This immediately severs VPN connectivity for this client."
          ] }) }),
          /* @__PURE__ */ f.jsxs(is, { sx: { p: 2 }, children: [
            /* @__PURE__ */ f.jsx(Rt, { onClick: () => K(null), children: "Cancel" }),
            /* @__PURE__ */ f.jsx(
              Rt,
              {
                variant: "contained",
                color: "error",
                onClick: () => X && tt(X),
                children: "Revoke & Delete"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      os,
      {
        open: !!q,
        onClose: () => {
          _(null), re("");
        },
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsx(ls, { sx: { fontWeight: 700 }, children: "Rename Client Peer" }),
          /* @__PURE__ */ f.jsxs(ss, { children: [
            /* @__PURE__ */ f.jsxs(Te, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
              "Update display name for peer ",
              /* @__PURE__ */ f.jsx("code", { children: q == null ? void 0 : q.id }),
              " (",
              q == null ? void 0 : q.ip,
              "):"
            ] }),
            /* @__PURE__ */ f.jsx(
              Ar,
              {
                fullWidth: !0,
                autoFocus: !0,
                size: "small",
                label: "New Peer Name",
                value: ne,
                onChange: (D) => re(D.target.value),
                placeholder: "e.g. alice-laptop"
              }
            )
          ] }),
          /* @__PURE__ */ f.jsxs(is, { sx: { p: 2 }, children: [
            /* @__PURE__ */ f.jsx(Rt, { onClick: () => _(null), children: "Cancel" }),
            /* @__PURE__ */ f.jsx(
              Rt,
              {
                variant: "contained",
                onClick: je,
                disabled: !ne.trim() || ne.trim() === (q == null ? void 0 : q.name),
                children: "Save Name"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      os,
      {
        open: m,
        onClose: () => !T && p(!1),
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsx(ls, { sx: { fontWeight: 700 }, children: x }),
          /* @__PURE__ */ f.jsx(ss, { dividers: !0, children: /* @__PURE__ */ f.jsx(U4, { lines: E, running: T }) }),
          /* @__PURE__ */ f.jsx(is, { sx: { p: 2 }, children: /* @__PURE__ */ f.jsx(Rt, { disabled: T, onClick: () => p(!1), children: "Close" }) })
        ]
      }
    ),
    /* @__PURE__ */ f.jsx(
      kM,
      {
        open: !!w,
        autoHideDuration: 4e3,
        onClose: () => C(null),
        message: w
      }
    )
  ] });
}
let mu = null;
function N3(e, t) {
  mu = Yv(e), mu.render(
    /* @__PURE__ */ f.jsx(y.StrictMode, { children: /* @__PURE__ */ f.jsx(j3, { ctx: t }) })
  );
}
function O3() {
  const e = mu;
  mu = null, e && queueMicrotask(() => e.unmount());
}
const L3 = { mount: N3, unmount: O3 };
export {
  L3 as default,
  N3 as mount,
  O3 as unmount
};
//# sourceMappingURL=main.js.map
