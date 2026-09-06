var sx = Object.defineProperty;
var lx = (e, t, n) => t in e ? sx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ni = (e, t, n) => lx(e, typeof t != "symbol" ? t + "" : t, n);
function ax(e, t) {
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
function ux(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xg = { exports: {} }, Za = {}, qg = { exports: {} }, Pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs = Symbol.for("react.element"), cx = Symbol.for("react.portal"), dx = Symbol.for("react.fragment"), fx = Symbol.for("react.strict_mode"), px = Symbol.for("react.profiler"), mx = Symbol.for("react.provider"), hx = Symbol.for("react.context"), gx = Symbol.for("react.forward_ref"), yx = Symbol.for("react.suspense"), vx = Symbol.for("react.memo"), xx = Symbol.for("react.lazy"), om = Symbol.iterator;
function bx(e) {
  return e === null || typeof e != "object" ? null : (e = om && e[om] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Zg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Jg = Object.assign, ey = {};
function Ei(e, t, n) {
  this.props = e, this.context = t, this.refs = ey, this.updater = n || Zg;
}
Ei.prototype.isReactComponent = {};
Ei.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ei.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ty() {
}
ty.prototype = Ei.prototype;
function vf(e, t, n) {
  this.props = e, this.context = t, this.refs = ey, this.updater = n || Zg;
}
var xf = vf.prototype = new ty();
xf.constructor = vf;
Jg(xf, Ei.prototype);
xf.isPureReactComponent = !0;
var im = Array.isArray, ny = Object.prototype.hasOwnProperty, bf = { current: null }, ry = { key: !0, ref: !0, __self: !0, __source: !0 };
function oy(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) ny.call(t, r) && !ry.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Zs, type: e, key: i, ref: s, props: o, _owner: bf.current };
}
function Sx(e, t) {
  return { $$typeof: Zs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Sf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zs;
}
function wx(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var sm = /\/+/g;
function pc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? wx("" + e.key) : t.toString(36);
}
function Xl(e, t, n, r, o) {
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
        case Zs:
        case cx:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + pc(s, 0) : r, im(o) ? (n = "", e != null && (n = e.replace(sm, "$&/") + "/"), Xl(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Sf(o) && (o = Sx(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(sm, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", im(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + pc(i, l);
    s += Xl(i, t, n, a, o);
  }
  else if (a = bx(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + pc(i, l++), s += Xl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function hl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Xl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Cx(e) {
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
var Xt = { current: null }, ql = { transition: null }, kx = { ReactCurrentDispatcher: Xt, ReactCurrentBatchConfig: ql, ReactCurrentOwner: bf };
function iy() {
  throw Error("act(...) is not supported in production builds of React.");
}
Pe.Children = { map: hl, forEach: function(e, t, n) {
  hl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return hl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return hl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Sf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Pe.Component = Ei;
Pe.Fragment = dx;
Pe.Profiler = px;
Pe.PureComponent = vf;
Pe.StrictMode = fx;
Pe.Suspense = yx;
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kx;
Pe.act = iy;
Pe.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Jg({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = bf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) ny.call(t, a) && !ry.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Zs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Pe.createContext = function(e) {
  return e = { $$typeof: hx, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: mx, _context: e }, e.Consumer = e;
};
Pe.createElement = oy;
Pe.createFactory = function(e) {
  var t = oy.bind(null, e);
  return t.type = e, t;
};
Pe.createRef = function() {
  return { current: null };
};
Pe.forwardRef = function(e) {
  return { $$typeof: gx, render: e };
};
Pe.isValidElement = Sf;
Pe.lazy = function(e) {
  return { $$typeof: xx, _payload: { _status: -1, _result: e }, _init: Cx };
};
Pe.memo = function(e, t) {
  return { $$typeof: vx, type: e, compare: t === void 0 ? null : t };
};
Pe.startTransition = function(e) {
  var t = ql.transition;
  ql.transition = {};
  try {
    e();
  } finally {
    ql.transition = t;
  }
};
Pe.unstable_act = iy;
Pe.useCallback = function(e, t) {
  return Xt.current.useCallback(e, t);
};
Pe.useContext = function(e) {
  return Xt.current.useContext(e);
};
Pe.useDebugValue = function() {
};
Pe.useDeferredValue = function(e) {
  return Xt.current.useDeferredValue(e);
};
Pe.useEffect = function(e, t) {
  return Xt.current.useEffect(e, t);
};
Pe.useId = function() {
  return Xt.current.useId();
};
Pe.useImperativeHandle = function(e, t, n) {
  return Xt.current.useImperativeHandle(e, t, n);
};
Pe.useInsertionEffect = function(e, t) {
  return Xt.current.useInsertionEffect(e, t);
};
Pe.useLayoutEffect = function(e, t) {
  return Xt.current.useLayoutEffect(e, t);
};
Pe.useMemo = function(e, t) {
  return Xt.current.useMemo(e, t);
};
Pe.useReducer = function(e, t, n) {
  return Xt.current.useReducer(e, t, n);
};
Pe.useRef = function(e) {
  return Xt.current.useRef(e);
};
Pe.useState = function(e) {
  return Xt.current.useState(e);
};
Pe.useSyncExternalStore = function(e, t, n) {
  return Xt.current.useSyncExternalStore(e, t, n);
};
Pe.useTransition = function() {
  return Xt.current.useTransition();
};
Pe.version = "18.3.1";
qg.exports = Pe;
var h = qg.exports;
const sy = /* @__PURE__ */ ux(h), ma = /* @__PURE__ */ ax({
  __proto__: null,
  default: sy
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
var Tx = h, Rx = Symbol.for("react.element"), Ex = Symbol.for("react.fragment"), Px = Object.prototype.hasOwnProperty, Ix = Tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Mx = { key: !0, ref: !0, __self: !0, __source: !0 };
function ly(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Px.call(t, r) && !Mx.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Rx, type: e, key: i, ref: s, props: o, _owner: Ix.current };
}
Za.Fragment = Ex;
Za.jsx = ly;
Za.jsxs = ly;
Xg.exports = Za;
var c = Xg.exports, ay = { exports: {} }, hn = {}, uy = { exports: {} }, cy = {};
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
    var F = M.length;
    M.push(z);
    e: for (; 0 < F; ) {
      var W = F - 1 >>> 1, D = M[W];
      if (0 < o(D, z)) M[W] = z, M[F] = D, F = W;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var z = M[0], F = M.pop();
    if (F !== z) {
      M[0] = F;
      e: for (var W = 0, D = M.length, Q = D >>> 1; W < Q; ) {
        var G = 2 * (W + 1) - 1, X = M[G], K = G + 1, q = M[K];
        if (0 > o(X, F)) K < D && 0 > o(q, X) ? (M[W] = q, M[K] = F, W = K) : (M[W] = X, M[G] = F, W = G);
        else if (K < D && 0 > o(q, F)) M[W] = q, M[K] = F, W = K;
        else break e;
      }
    }
    return z;
  }
  function o(M, z) {
    var F = M.sortIndex - z.sortIndex;
    return F !== 0 ? F : M.id - z.id;
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
  var a = [], u = [], d = 1, p = null, y = 3, f = !1, v = !1, S = !1, C = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(M) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= M) r(u), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(u);
    }
  }
  function w(M) {
    if (S = !1, b(M), !v) if (n(a) !== null) v = !0, O(E);
    else {
      var z = n(u);
      z !== null && A(w, z.startTime - M);
    }
  }
  function E(M, z) {
    v = !1, S && (S = !1, g(T), T = -1), f = !0;
    var F = y;
    try {
      for (b(z), p = n(a); p !== null && (!(p.expirationTime > z) || M && !$()); ) {
        var W = p.callback;
        if (typeof W == "function") {
          p.callback = null, y = p.priorityLevel;
          var D = W(p.expirationTime <= z);
          z = e.unstable_now(), typeof D == "function" ? p.callback = D : p === n(a) && r(a), b(z);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Q = !0;
      else {
        var G = n(u);
        G !== null && A(w, G.startTime - z), Q = !1;
      }
      return Q;
    } finally {
      p = null, y = F, f = !1;
    }
  }
  var k = !1, R = null, T = -1, I = 5, N = -1;
  function $() {
    return !(e.unstable_now() - N < I);
  }
  function L() {
    if (R !== null) {
      var M = e.unstable_now();
      N = M;
      var z = !0;
      try {
        z = R(!0, M);
      } finally {
        z ? x() : (k = !1, R = null);
      }
    } else k = !1;
  }
  var x;
  if (typeof m == "function") x = function() {
    m(L);
  };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(), P = j.port2;
    j.port1.onmessage = L, x = function() {
      P.postMessage(null);
    };
  } else x = function() {
    C(L, 0);
  };
  function O(M) {
    R = M, k || (k = !0, x());
  }
  function A(M, z) {
    T = C(function() {
      M(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    v || f || (v = !0, O(E));
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
    var F = y;
    y = z;
    try {
      return M();
    } finally {
      y = F;
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
    var F = y;
    y = M;
    try {
      return z();
    } finally {
      y = F;
    }
  }, e.unstable_scheduleCallback = function(M, z, F) {
    var W = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? W + F : W) : F = W, M) {
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
    return D = F + D, M = { id: d++, callback: z, priorityLevel: M, startTime: F, expirationTime: D, sortIndex: -1 }, F > W ? (M.sortIndex = F, t(u, M), n(a) === null && M === n(u) && (S ? (g(T), T = -1) : S = !0, A(w, F - W))) : (M.sortIndex = D, t(a, M), v || f || (v = !0, O(E))), M;
  }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(M) {
    var z = y;
    return function() {
      var F = y;
      y = z;
      try {
        return M.apply(this, arguments);
      } finally {
        y = F;
      }
    };
  };
})(cy);
uy.exports = cy;
var $x = uy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jx = h, pn = $x;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var dy = /* @__PURE__ */ new Set(), Ts = {};
function Eo(e, t) {
  fi(e, t), fi(e + "Capture", t);
}
function fi(e, t) {
  for (Ts[e] = t, e = 0; e < t.length; e++) dy.add(t[e]);
}
var br = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ed = Object.prototype.hasOwnProperty, Ox = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, lm = {}, am = {};
function Ax(e) {
  return ed.call(am, e) ? !0 : ed.call(lm, e) ? !1 : Ox.test(e) ? am[e] = !0 : (lm[e] = !0, !1);
}
function Nx(e, t, n, r) {
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
function Lx(e, t, n, r) {
  if (t === null || typeof t > "u" || Nx(e, t, n, r)) return !0;
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
var Lt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Lt[e] = new qt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Lt[t] = new qt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Lt[e] = new qt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Lt[e] = new qt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Lt[e] = new qt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Lt[e] = new qt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Lt[e] = new qt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Lt[e] = new qt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Lt[e] = new qt(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  Lt[t] = new qt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(wf, Cf);
  Lt[t] = new qt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(wf, Cf);
  Lt[t] = new qt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Lt[e] = new qt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Lt.xlinkHref = new qt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Lt[e] = new qt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kf(e, t, n, r) {
  var o = Lt.hasOwnProperty(t) ? Lt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Lx(t, n, o, r) && (n = null), r || o === null ? Ax(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Er = jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gl = Symbol.for("react.element"), Ho = Symbol.for("react.portal"), Ko = Symbol.for("react.fragment"), Tf = Symbol.for("react.strict_mode"), td = Symbol.for("react.profiler"), fy = Symbol.for("react.provider"), py = Symbol.for("react.context"), Rf = Symbol.for("react.forward_ref"), nd = Symbol.for("react.suspense"), rd = Symbol.for("react.suspense_list"), Ef = Symbol.for("react.memo"), Mr = Symbol.for("react.lazy"), my = Symbol.for("react.offscreen"), um = Symbol.iterator;
function Li(e) {
  return e === null || typeof e != "object" ? null : (e = um && e[um] || e["@@iterator"], typeof e == "function" ? e : null);
}
var dt = Object.assign, mc;
function rs(e) {
  if (mc === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    mc = t && t[1] || "";
  }
  return `
` + mc + e;
}
var hc = !1;
function gc(e, t) {
  if (!e || hc) return "";
  hc = !0;
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
    hc = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? rs(e) : "";
}
function zx(e) {
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
      return e = gc(e.type, !1), e;
    case 11:
      return e = gc(e.type.render, !1), e;
    case 1:
      return e = gc(e.type, !0), e;
    default:
      return "";
  }
}
function od(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ko:
      return "Fragment";
    case Ho:
      return "Portal";
    case td:
      return "Profiler";
    case Tf:
      return "StrictMode";
    case nd:
      return "Suspense";
    case rd:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case py:
      return (e.displayName || "Context") + ".Consumer";
    case fy:
      return (e._context.displayName || "Context") + ".Provider";
    case Rf:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ef:
      return t = e.displayName || null, t !== null ? t : od(e.type) || "Memo";
    case Mr:
      t = e._payload, e = e._init;
      try {
        return od(e(t));
      } catch {
      }
  }
  return null;
}
function Bx(e) {
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
      return od(t);
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
function Hr(e) {
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
function _x(e) {
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
function yl(e) {
  e._valueTracker || (e._valueTracker = _x(e));
}
function gy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = hy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ha(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function id(e, t) {
  var n = t.checked;
  return dt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function cm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Hr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function yy(e, t) {
  t = t.checked, t != null && kf(e, "checked", t, !1);
}
function sd(e, t) {
  yy(e, t);
  var n = Hr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ld(e, t.type, n) : t.hasOwnProperty("defaultValue") && ld(e, t.type, Hr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function dm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ld(e, t, n) {
  (t !== "number" || ha(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var os = Array.isArray;
function ri(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Hr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ad(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return dt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function fm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(V(92));
      if (os(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Hr(n) };
}
function vy(e, t) {
  var n = Hr(t.value), r = Hr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function pm(e) {
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
function ud(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var vl, by = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (vl = vl || document.createElement("div"), vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Rs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var us = {
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
}, Fx = ["Webkit", "ms", "Moz", "O"];
Object.keys(us).forEach(function(e) {
  Fx.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), us[t] = us[e];
  });
});
function Sy(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || us.hasOwnProperty(e) && us[e] ? ("" + t).trim() : t + "px";
}
function wy(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Sy(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Dx = dt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function cd(e, t) {
  if (t) {
    if (Dx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function dd(e, t) {
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
var fd = null;
function Pf(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var pd = null, oi = null, ii = null;
function mm(e) {
  if (e = tl(e)) {
    if (typeof pd != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = ru(t), pd(e.stateNode, e.type, t));
  }
}
function Cy(e) {
  oi ? ii ? ii.push(e) : ii = [e] : oi = e;
}
function ky() {
  if (oi) {
    var e = oi, t = ii;
    if (ii = oi = null, mm(e), t) for (e = 0; e < t.length; e++) mm(t[e]);
  }
}
function Ty(e, t) {
  return e(t);
}
function Ry() {
}
var yc = !1;
function Ey(e, t, n) {
  if (yc) return e(t, n);
  yc = !0;
  try {
    return Ty(e, t, n);
  } finally {
    yc = !1, (oi !== null || ii !== null) && (Ry(), ky());
  }
}
function Es(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ru(n);
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
var md = !1;
if (br) try {
  var zi = {};
  Object.defineProperty(zi, "passive", { get: function() {
    md = !0;
  } }), window.addEventListener("test", zi, zi), window.removeEventListener("test", zi, zi);
} catch {
  md = !1;
}
function Wx(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var cs = !1, ga = null, ya = !1, hd = null, Ux = { onError: function(e) {
  cs = !0, ga = e;
} };
function Vx(e, t, n, r, o, i, s, l, a) {
  cs = !1, ga = null, Wx.apply(Ux, arguments);
}
function Hx(e, t, n, r, o, i, s, l, a) {
  if (Vx.apply(this, arguments), cs) {
    if (cs) {
      var u = ga;
      cs = !1, ga = null;
    } else throw Error(V(198));
    ya || (ya = !0, hd = u);
  }
}
function Po(e) {
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
function hm(e) {
  if (Po(e) !== e) throw Error(V(188));
}
function Kx(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Po(e), t === null) throw Error(V(188));
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
        if (i === n) return hm(o), e;
        if (i === r) return hm(o), t;
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
function Iy(e) {
  return e = Kx(e), e !== null ? My(e) : null;
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
var $y = pn.unstable_scheduleCallback, gm = pn.unstable_cancelCallback, Gx = pn.unstable_shouldYield, Yx = pn.unstable_requestPaint, vt = pn.unstable_now, Qx = pn.unstable_getCurrentPriorityLevel, If = pn.unstable_ImmediatePriority, jy = pn.unstable_UserBlockingPriority, va = pn.unstable_NormalPriority, Xx = pn.unstable_LowPriority, Oy = pn.unstable_IdlePriority, Ja = null, tr = null;
function qx(e) {
  if (tr && typeof tr.onCommitFiberRoot == "function") try {
    tr.onCommitFiberRoot(Ja, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Fn = Math.clz32 ? Math.clz32 : eb, Zx = Math.log, Jx = Math.LN2;
function eb(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Zx(e) / Jx | 0) | 0;
}
var xl = 64, bl = 4194304;
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
function xa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = is(l) : (i &= s, i !== 0 && (r = is(i)));
  } else s = n & ~o, s !== 0 ? r = is(s) : i !== 0 && (r = is(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Fn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function tb(e, t) {
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
function nb(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Fn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = tb(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function gd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ay() {
  var e = xl;
  return xl <<= 1, !(xl & 4194240) && (xl = 64), e;
}
function vc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Js(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Fn(t), e[t] = n;
}
function rb(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Fn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Mf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Fn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ve = 0;
function Ny(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ly, $f, zy, By, _y, yd = !1, Sl = [], Lr = null, zr = null, Br = null, Ps = /* @__PURE__ */ new Map(), Is = /* @__PURE__ */ new Map(), jr = [], ob = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ym(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lr = null;
      break;
    case "dragenter":
    case "dragleave":
      zr = null;
      break;
    case "mouseover":
    case "mouseout":
      Br = null;
      break;
    case "pointerover":
    case "pointerout":
      Ps.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Is.delete(t.pointerId);
  }
}
function Bi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = tl(t), t !== null && $f(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function ib(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Lr = Bi(Lr, e, t, n, r, o), !0;
    case "dragenter":
      return zr = Bi(zr, e, t, n, r, o), !0;
    case "mouseover":
      return Br = Bi(Br, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ps.set(i, Bi(Ps.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Is.set(i, Bi(Is.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Fy(e) {
  var t = uo(e.target);
  if (t !== null) {
    var n = Po(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Py(n), t !== null) {
          e.blockedOn = t, _y(e.priority, function() {
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
function Zl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fd = r, n.target.dispatchEvent(r), fd = null;
    } else return t = tl(n), t !== null && $f(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function vm(e, t, n) {
  Zl(e) && n.delete(t);
}
function sb() {
  yd = !1, Lr !== null && Zl(Lr) && (Lr = null), zr !== null && Zl(zr) && (zr = null), Br !== null && Zl(Br) && (Br = null), Ps.forEach(vm), Is.forEach(vm);
}
function _i(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yd || (yd = !0, pn.unstable_scheduleCallback(pn.unstable_NormalPriority, sb)));
}
function Ms(e) {
  function t(o) {
    return _i(o, e);
  }
  if (0 < Sl.length) {
    _i(Sl[0], e);
    for (var n = 1; n < Sl.length; n++) {
      var r = Sl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Lr !== null && _i(Lr, e), zr !== null && _i(zr, e), Br !== null && _i(Br, e), Ps.forEach(t), Is.forEach(t), n = 0; n < jr.length; n++) r = jr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jr.length && (n = jr[0], n.blockedOn === null); ) Fy(n), n.blockedOn === null && jr.shift();
}
var si = Er.ReactCurrentBatchConfig, ba = !0;
function lb(e, t, n, r) {
  var o = Ve, i = si.transition;
  si.transition = null;
  try {
    Ve = 1, jf(e, t, n, r);
  } finally {
    Ve = o, si.transition = i;
  }
}
function ab(e, t, n, r) {
  var o = Ve, i = si.transition;
  si.transition = null;
  try {
    Ve = 4, jf(e, t, n, r);
  } finally {
    Ve = o, si.transition = i;
  }
}
function jf(e, t, n, r) {
  if (ba) {
    var o = vd(e, t, n, r);
    if (o === null) Pc(e, t, r, Sa, n), ym(e, r);
    else if (ib(o, e, t, n, r)) r.stopPropagation();
    else if (ym(e, r), t & 4 && -1 < ob.indexOf(e)) {
      for (; o !== null; ) {
        var i = tl(o);
        if (i !== null && Ly(i), i = vd(e, t, n, r), i === null && Pc(e, t, r, Sa, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Pc(e, t, r, null, n);
  }
}
var Sa = null;
function vd(e, t, n, r) {
  if (Sa = null, e = Pf(r), e = uo(e), e !== null) if (t = Po(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Py(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Sa = e, null;
}
function Dy(e) {
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
      switch (Qx()) {
        case If:
          return 1;
        case jy:
          return 4;
        case va:
        case Xx:
          return 16;
        case Oy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ar = null, Of = null, Jl = null;
function Wy() {
  if (Jl) return Jl;
  var e, t = Of, n = t.length, r, o = "value" in Ar ? Ar.value : Ar.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Jl = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ea(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function wl() {
  return !0;
}
function xm() {
  return !1;
}
function gn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? wl : xm, this.isPropagationStopped = xm, this;
  }
  return dt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wl);
  }, persist: function() {
  }, isPersistent: wl }), t;
}
var Pi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Af = gn(Pi), el = dt({}, Pi, { view: 0, detail: 0 }), ub = gn(el), xc, bc, Fi, eu = dt({}, el, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Fi && (Fi && e.type === "mousemove" ? (xc = e.screenX - Fi.screenX, bc = e.screenY - Fi.screenY) : bc = xc = 0, Fi = e), xc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : bc;
} }), bm = gn(eu), cb = dt({}, eu, { dataTransfer: 0 }), db = gn(cb), fb = dt({}, el, { relatedTarget: 0 }), Sc = gn(fb), pb = dt({}, Pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mb = gn(pb), hb = dt({}, Pi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), gb = gn(hb), yb = dt({}, Pi, { data: 0 }), Sm = gn(yb), vb = {
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
}, xb = {
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
}, bb = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Sb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bb[e]) ? !!t[e] : !1;
}
function Nf() {
  return Sb;
}
var wb = dt({}, el, { key: function(e) {
  if (e.key) {
    var t = vb[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ea(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xb[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nf, charCode: function(e) {
  return e.type === "keypress" ? ea(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ea(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Cb = gn(wb), kb = dt({}, eu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wm = gn(kb), Tb = dt({}, el, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nf }), Rb = gn(Tb), Eb = dt({}, Pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pb = gn(Eb), Ib = dt({}, eu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Mb = gn(Ib), $b = [9, 13, 27, 32], Lf = br && "CompositionEvent" in window, ds = null;
br && "documentMode" in document && (ds = document.documentMode);
var jb = br && "TextEvent" in window && !ds, Uy = br && (!Lf || ds && 8 < ds && 11 >= ds), Cm = " ", km = !1;
function Vy(e, t) {
  switch (e) {
    case "keyup":
      return $b.indexOf(t.keyCode) !== -1;
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
function Hy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Go = !1;
function Ob(e, t) {
  switch (e) {
    case "compositionend":
      return Hy(t);
    case "keypress":
      return t.which !== 32 ? null : (km = !0, Cm);
    case "textInput":
      return e = t.data, e === Cm && km ? null : e;
    default:
      return null;
  }
}
function Ab(e, t) {
  if (Go) return e === "compositionend" || !Lf && Vy(e, t) ? (e = Wy(), Jl = Of = Ar = null, Go = !1, e) : null;
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
var Nb = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Tm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nb[e.type] : t === "textarea";
}
function Ky(e, t, n, r) {
  Cy(r), t = wa(t, "onChange"), 0 < t.length && (n = new Af("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var fs = null, $s = null;
function Lb(e) {
  rv(e, 0);
}
function tu(e) {
  var t = Xo(e);
  if (gy(t)) return e;
}
function zb(e, t) {
  if (e === "change") return t;
}
var Gy = !1;
if (br) {
  var wc;
  if (br) {
    var Cc = "oninput" in document;
    if (!Cc) {
      var Rm = document.createElement("div");
      Rm.setAttribute("oninput", "return;"), Cc = typeof Rm.oninput == "function";
    }
    wc = Cc;
  } else wc = !1;
  Gy = wc && (!document.documentMode || 9 < document.documentMode);
}
function Em() {
  fs && (fs.detachEvent("onpropertychange", Yy), $s = fs = null);
}
function Yy(e) {
  if (e.propertyName === "value" && tu($s)) {
    var t = [];
    Ky(t, $s, e, Pf(e)), Ey(Lb, t);
  }
}
function Bb(e, t, n) {
  e === "focusin" ? (Em(), fs = t, $s = n, fs.attachEvent("onpropertychange", Yy)) : e === "focusout" && Em();
}
function _b(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return tu($s);
}
function Fb(e, t) {
  if (e === "click") return tu(t);
}
function Db(e, t) {
  if (e === "input" || e === "change") return tu(t);
}
function Wb(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Wn = typeof Object.is == "function" ? Object.is : Wb;
function js(e, t) {
  if (Wn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ed.call(t, o) || !Wn(e[o], t[o])) return !1;
  }
  return !0;
}
function Pm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Im(e, t) {
  var n = Pm(e);
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
    n = Pm(n);
  }
}
function Qy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Xy() {
  for (var e = window, t = ha(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ha(e.document);
  }
  return t;
}
function zf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ub(e) {
  var t = Xy(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Qy(n.ownerDocument.documentElement, n)) {
    if (r !== null && zf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Im(n, i);
        var s = Im(
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
var Vb = br && "documentMode" in document && 11 >= document.documentMode, Yo = null, xd = null, ps = null, bd = !1;
function Mm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bd || Yo == null || Yo !== ha(r) || (r = Yo, "selectionStart" in r && zf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ps && js(ps, r) || (ps = r, r = wa(xd, "onSelect"), 0 < r.length && (t = new Af("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yo)));
}
function Cl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Qo = { animationend: Cl("Animation", "AnimationEnd"), animationiteration: Cl("Animation", "AnimationIteration"), animationstart: Cl("Animation", "AnimationStart"), transitionend: Cl("Transition", "TransitionEnd") }, kc = {}, qy = {};
br && (qy = document.createElement("div").style, "AnimationEvent" in window || (delete Qo.animationend.animation, delete Qo.animationiteration.animation, delete Qo.animationstart.animation), "TransitionEvent" in window || delete Qo.transitionend.transition);
function nu(e) {
  if (kc[e]) return kc[e];
  if (!Qo[e]) return e;
  var t = Qo[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in qy) return kc[e] = t[n];
  return e;
}
var Zy = nu("animationend"), Jy = nu("animationiteration"), ev = nu("animationstart"), tv = nu("transitionend"), nv = /* @__PURE__ */ new Map(), $m = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qr(e, t) {
  nv.set(e, t), Eo(t, [e]);
}
for (var Tc = 0; Tc < $m.length; Tc++) {
  var Rc = $m[Tc], Hb = Rc.toLowerCase(), Kb = Rc[0].toUpperCase() + Rc.slice(1);
  Qr(Hb, "on" + Kb);
}
Qr(Zy, "onAnimationEnd");
Qr(Jy, "onAnimationIteration");
Qr(ev, "onAnimationStart");
Qr("dblclick", "onDoubleClick");
Qr("focusin", "onFocus");
Qr("focusout", "onBlur");
Qr(tv, "onTransitionEnd");
fi("onMouseEnter", ["mouseout", "mouseover"]);
fi("onMouseLeave", ["mouseout", "mouseover"]);
fi("onPointerEnter", ["pointerout", "pointerover"]);
fi("onPointerLeave", ["pointerout", "pointerover"]);
Eo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Eo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Eo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Eo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Eo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Eo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gb = new Set("cancel close invalid load scroll toggle".split(" ").concat(ss));
function jm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Hx(r, t, void 0, e), e.currentTarget = null;
}
function rv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        jm(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        jm(o, l, u), i = a;
      }
    }
  }
  if (ya) throw e = hd, ya = !1, hd = null, e;
}
function tt(e, t) {
  var n = t[Td];
  n === void 0 && (n = t[Td] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ov(t, e, 2, !1), n.add(r));
}
function Ec(e, t, n) {
  var r = 0;
  t && (r |= 4), ov(n, e, r, t);
}
var kl = "_reactListening" + Math.random().toString(36).slice(2);
function Os(e) {
  if (!e[kl]) {
    e[kl] = !0, dy.forEach(function(n) {
      n !== "selectionchange" && (Gb.has(n) || Ec(n, !1, e), Ec(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kl] || (t[kl] = !0, Ec("selectionchange", !1, t));
  }
}
function ov(e, t, n, r) {
  switch (Dy(t)) {
    case 1:
      var o = lb;
      break;
    case 4:
      o = ab;
      break;
    default:
      o = jf;
  }
  n = o.bind(null, t, n, e), o = void 0, !md || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Pc(e, t, n, r, o) {
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
        if (s = uo(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Ey(function() {
    var u = i, d = Pf(n), p = [];
    e: {
      var y = nv.get(e);
      if (y !== void 0) {
        var f = Af, v = e;
        switch (e) {
          case "keypress":
            if (ea(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = Cb;
            break;
          case "focusin":
            v = "focus", f = Sc;
            break;
          case "focusout":
            v = "blur", f = Sc;
            break;
          case "beforeblur":
          case "afterblur":
            f = Sc;
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
            f = bm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = db;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = Rb;
            break;
          case Zy:
          case Jy:
          case ev:
            f = mb;
            break;
          case tv:
            f = Pb;
            break;
          case "scroll":
            f = ub;
            break;
          case "wheel":
            f = Mb;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = gb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = wm;
        }
        var S = (t & 4) !== 0, C = !S && e === "scroll", g = S ? y !== null ? y + "Capture" : null : y;
        S = [];
        for (var m = u, b; m !== null; ) {
          b = m;
          var w = b.stateNode;
          if (b.tag === 5 && w !== null && (b = w, g !== null && (w = Es(m, g), w != null && S.push(As(m, w, b)))), C) break;
          m = m.return;
        }
        0 < S.length && (y = new f(y, v, null, n, d), p.push({ event: y, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", y && n !== fd && (v = n.relatedTarget || n.fromElement) && (uo(v) || v[Sr])) break e;
        if ((f || y) && (y = d.window === d ? d : (y = d.ownerDocument) ? y.defaultView || y.parentWindow : window, f ? (v = n.relatedTarget || n.toElement, f = u, v = v ? uo(v) : null, v !== null && (C = Po(v), v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (f = null, v = u), f !== v)) {
          if (S = bm, w = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (S = wm, w = "onPointerLeave", g = "onPointerEnter", m = "pointer"), C = f == null ? y : Xo(f), b = v == null ? y : Xo(v), y = new S(w, m + "leave", f, n, d), y.target = C, y.relatedTarget = b, w = null, uo(d) === u && (S = new S(g, m + "enter", v, n, d), S.target = b, S.relatedTarget = C, w = S), C = w, f && v) t: {
            for (S = f, g = v, m = 0, b = S; b; b = Bo(b)) m++;
            for (b = 0, w = g; w; w = Bo(w)) b++;
            for (; 0 < m - b; ) S = Bo(S), m--;
            for (; 0 < b - m; ) g = Bo(g), b--;
            for (; m--; ) {
              if (S === g || g !== null && S === g.alternate) break t;
              S = Bo(S), g = Bo(g);
            }
            S = null;
          }
          else S = null;
          f !== null && Om(p, y, f, S, !1), v !== null && C !== null && Om(p, C, v, S, !0);
        }
      }
      e: {
        if (y = u ? Xo(u) : window, f = y.nodeName && y.nodeName.toLowerCase(), f === "select" || f === "input" && y.type === "file") var E = zb;
        else if (Tm(y)) if (Gy) E = Db;
        else {
          E = _b;
          var k = Bb;
        }
        else (f = y.nodeName) && f.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (E = Fb);
        if (E && (E = E(e, u))) {
          Ky(p, E, n, d);
          break e;
        }
        k && k(e, y, u), e === "focusout" && (k = y._wrapperState) && k.controlled && y.type === "number" && ld(y, "number", y.value);
      }
      switch (k = u ? Xo(u) : window, e) {
        case "focusin":
          (Tm(k) || k.contentEditable === "true") && (Yo = k, xd = u, ps = null);
          break;
        case "focusout":
          ps = xd = Yo = null;
          break;
        case "mousedown":
          bd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          bd = !1, Mm(p, n, d);
          break;
        case "selectionchange":
          if (Vb) break;
        case "keydown":
        case "keyup":
          Mm(p, n, d);
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
      else Go ? Vy(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Uy && n.locale !== "ko" && (Go || T !== "onCompositionStart" ? T === "onCompositionEnd" && Go && (R = Wy()) : (Ar = d, Of = "value" in Ar ? Ar.value : Ar.textContent, Go = !0)), k = wa(u, T), 0 < k.length && (T = new Sm(T, e, null, n, d), p.push({ event: T, listeners: k }), R ? T.data = R : (R = Hy(n), R !== null && (T.data = R)))), (R = jb ? Ob(e, n) : Ab(e, n)) && (u = wa(u, "onBeforeInput"), 0 < u.length && (d = new Sm("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: u }), d.data = R));
    }
    rv(p, t);
  });
}
function As(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Es(e, n), i != null && r.unshift(As(e, i, o)), i = Es(e, t), i != null && r.push(As(e, i, o))), e = e.return;
  }
  return r;
}
function Bo(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Om(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = Es(n, i), a != null && s.unshift(As(n, a, l))) : o || (a = Es(n, i), a != null && s.push(As(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Yb = /\r\n?/g, Qb = /\u0000|\uFFFD/g;
function Am(e) {
  return (typeof e == "string" ? e : "" + e).replace(Yb, `
`).replace(Qb, "");
}
function Tl(e, t, n) {
  if (t = Am(t), Am(e) !== t && n) throw Error(V(425));
}
function Ca() {
}
var Sd = null, wd = null;
function Cd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var kd = typeof setTimeout == "function" ? setTimeout : void 0, Xb = typeof clearTimeout == "function" ? clearTimeout : void 0, Nm = typeof Promise == "function" ? Promise : void 0, qb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nm < "u" ? function(e) {
  return Nm.resolve(null).then(e).catch(Zb);
} : kd;
function Zb(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ic(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Ms(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Ms(t);
}
function _r(e) {
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
function Lm(e) {
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
var Ii = Math.random().toString(36).slice(2), Zn = "__reactFiber$" + Ii, Ns = "__reactProps$" + Ii, Sr = "__reactContainer$" + Ii, Td = "__reactEvents$" + Ii, Jb = "__reactListeners$" + Ii, eS = "__reactHandles$" + Ii;
function uo(e) {
  var t = e[Zn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Sr] || n[Zn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Lm(e); e !== null; ) {
        if (n = e[Zn]) return n;
        e = Lm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function tl(e) {
  return e = e[Zn] || e[Sr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Xo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function ru(e) {
  return e[Ns] || null;
}
var Rd = [], qo = -1;
function Xr(e) {
  return { current: e };
}
function nt(e) {
  0 > qo || (e.current = Rd[qo], Rd[qo] = null, qo--);
}
function Ze(e, t) {
  qo++, Rd[qo] = e.current, e.current = t;
}
var Kr = {}, Wt = Xr(Kr), en = Xr(!1), vo = Kr;
function pi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function tn(e) {
  return e = e.childContextTypes, e != null;
}
function ka() {
  nt(en), nt(Wt);
}
function zm(e, t, n) {
  if (Wt.current !== Kr) throw Error(V(168));
  Ze(Wt, t), Ze(en, n);
}
function iv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(V(108, Bx(e) || "Unknown", o));
  return dt({}, n, r);
}
function Ta(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Kr, vo = Wt.current, Ze(Wt, e), Ze(en, en.current), !0;
}
function Bm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = iv(e, t, vo), r.__reactInternalMemoizedMergedChildContext = e, nt(en), nt(Wt), Ze(Wt, e)) : nt(en), Ze(en, n);
}
var mr = null, ou = !1, Mc = !1;
function sv(e) {
  mr === null ? mr = [e] : mr.push(e);
}
function tS(e) {
  ou = !0, sv(e);
}
function qr() {
  if (!Mc && mr !== null) {
    Mc = !0;
    var e = 0, t = Ve;
    try {
      var n = mr;
      for (Ve = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      mr = null, ou = !1;
    } catch (o) {
      throw mr !== null && (mr = mr.slice(e + 1)), $y(If, qr), o;
    } finally {
      Ve = t, Mc = !1;
    }
  }
  return null;
}
var Zo = [], Jo = 0, Ra = null, Ea = 0, bn = [], Sn = 0, xo = null, yr = 1, vr = "";
function so(e, t) {
  Zo[Jo++] = Ea, Zo[Jo++] = Ra, Ra = e, Ea = t;
}
function lv(e, t, n) {
  bn[Sn++] = yr, bn[Sn++] = vr, bn[Sn++] = xo, xo = e;
  var r = yr;
  e = vr;
  var o = 32 - Fn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Fn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, yr = 1 << 32 - Fn(t) + o | n << o | r, vr = i + e;
  } else yr = 1 << i | n << o | r, vr = e;
}
function Bf(e) {
  e.return !== null && (so(e, 1), lv(e, 1, 0));
}
function _f(e) {
  for (; e === Ra; ) Ra = Zo[--Jo], Zo[Jo] = null, Ea = Zo[--Jo], Zo[Jo] = null;
  for (; e === xo; ) xo = bn[--Sn], bn[Sn] = null, vr = bn[--Sn], bn[Sn] = null, yr = bn[--Sn], bn[Sn] = null;
}
var dn = null, cn = null, it = !1, _n = null;
function av(e, t) {
  var n = kn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function _m(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, dn = e, cn = _r(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, dn = e, cn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = xo !== null ? { id: yr, overflow: vr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = kn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, dn = e, cn = null, !0) : !1;
    default:
      return !1;
  }
}
function Ed(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pd(e) {
  if (it) {
    var t = cn;
    if (t) {
      var n = t;
      if (!_m(e, t)) {
        if (Ed(e)) throw Error(V(418));
        t = _r(n.nextSibling);
        var r = dn;
        t && _m(e, t) ? av(r, n) : (e.flags = e.flags & -4097 | 2, it = !1, dn = e);
      }
    } else {
      if (Ed(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, it = !1, dn = e;
    }
  }
}
function Fm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  dn = e;
}
function Rl(e) {
  if (e !== dn) return !1;
  if (!it) return Fm(e), it = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Cd(e.type, e.memoizedProps)), t && (t = cn)) {
    if (Ed(e)) throw uv(), Error(V(418));
    for (; t; ) av(e, t), t = _r(t.nextSibling);
  }
  if (Fm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              cn = _r(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      cn = null;
    }
  } else cn = dn ? _r(e.stateNode.nextSibling) : null;
  return !0;
}
function uv() {
  for (var e = cn; e; ) e = _r(e.nextSibling);
}
function mi() {
  cn = dn = null, it = !1;
}
function Ff(e) {
  _n === null ? _n = [e] : _n.push(e);
}
var nS = Er.ReactCurrentBatchConfig;
function Di(e, t, n) {
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
function El(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Dm(e) {
  var t = e._init;
  return t(e._payload);
}
function cv(e) {
  function t(g, m) {
    if (e) {
      var b = g.deletions;
      b === null ? (g.deletions = [m], g.flags |= 16) : b.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) t(g, m), m = m.sibling;
    return null;
  }
  function r(g, m) {
    for (g = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? g.set(m.key, m) : g.set(m.index, m), m = m.sibling;
    return g;
  }
  function o(g, m) {
    return g = Ur(g, m), g.index = 0, g.sibling = null, g;
  }
  function i(g, m, b) {
    return g.index = b, e ? (b = g.alternate, b !== null ? (b = b.index, b < m ? (g.flags |= 2, m) : b) : (g.flags |= 2, m)) : (g.flags |= 1048576, m);
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, m, b, w) {
    return m === null || m.tag !== 6 ? (m = zc(b, g.mode, w), m.return = g, m) : (m = o(m, b), m.return = g, m);
  }
  function a(g, m, b, w) {
    var E = b.type;
    return E === Ko ? d(g, m, b.props.children, w, b.key) : m !== null && (m.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mr && Dm(E) === m.type) ? (w = o(m, b.props), w.ref = Di(g, m, b), w.return = g, w) : (w = la(b.type, b.key, b.props, null, g.mode, w), w.ref = Di(g, m, b), w.return = g, w);
  }
  function u(g, m, b, w) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== b.containerInfo || m.stateNode.implementation !== b.implementation ? (m = Bc(b, g.mode, w), m.return = g, m) : (m = o(m, b.children || []), m.return = g, m);
  }
  function d(g, m, b, w, E) {
    return m === null || m.tag !== 7 ? (m = ho(b, g.mode, w, E), m.return = g, m) : (m = o(m, b), m.return = g, m);
  }
  function p(g, m, b) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = zc("" + m, g.mode, b), m.return = g, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case gl:
          return b = la(m.type, m.key, m.props, null, g.mode, b), b.ref = Di(g, null, m), b.return = g, b;
        case Ho:
          return m = Bc(m, g.mode, b), m.return = g, m;
        case Mr:
          var w = m._init;
          return p(g, w(m._payload), b);
      }
      if (os(m) || Li(m)) return m = ho(m, g.mode, b, null), m.return = g, m;
      El(g, m);
    }
    return null;
  }
  function y(g, m, b, w) {
    var E = m !== null ? m.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number") return E !== null ? null : l(g, m, "" + b, w);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case gl:
          return b.key === E ? a(g, m, b, w) : null;
        case Ho:
          return b.key === E ? u(g, m, b, w) : null;
        case Mr:
          return E = b._init, y(
            g,
            m,
            E(b._payload),
            w
          );
      }
      if (os(b) || Li(b)) return E !== null ? null : d(g, m, b, w, null);
      El(g, b);
    }
    return null;
  }
  function f(g, m, b, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return g = g.get(b) || null, l(m, g, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case gl:
          return g = g.get(w.key === null ? b : w.key) || null, a(m, g, w, E);
        case Ho:
          return g = g.get(w.key === null ? b : w.key) || null, u(m, g, w, E);
        case Mr:
          var k = w._init;
          return f(g, m, b, k(w._payload), E);
      }
      if (os(w) || Li(w)) return g = g.get(b) || null, d(m, g, w, E, null);
      El(m, w);
    }
    return null;
  }
  function v(g, m, b, w) {
    for (var E = null, k = null, R = m, T = m = 0, I = null; R !== null && T < b.length; T++) {
      R.index > T ? (I = R, R = null) : I = R.sibling;
      var N = y(g, R, b[T], w);
      if (N === null) {
        R === null && (R = I);
        break;
      }
      e && R && N.alternate === null && t(g, R), m = i(N, m, T), k === null ? E = N : k.sibling = N, k = N, R = I;
    }
    if (T === b.length) return n(g, R), it && so(g, T), E;
    if (R === null) {
      for (; T < b.length; T++) R = p(g, b[T], w), R !== null && (m = i(R, m, T), k === null ? E = R : k.sibling = R, k = R);
      return it && so(g, T), E;
    }
    for (R = r(g, R); T < b.length; T++) I = f(R, g, T, b[T], w), I !== null && (e && I.alternate !== null && R.delete(I.key === null ? T : I.key), m = i(I, m, T), k === null ? E = I : k.sibling = I, k = I);
    return e && R.forEach(function($) {
      return t(g, $);
    }), it && so(g, T), E;
  }
  function S(g, m, b, w) {
    var E = Li(b);
    if (typeof E != "function") throw Error(V(150));
    if (b = E.call(b), b == null) throw Error(V(151));
    for (var k = E = null, R = m, T = m = 0, I = null, N = b.next(); R !== null && !N.done; T++, N = b.next()) {
      R.index > T ? (I = R, R = null) : I = R.sibling;
      var $ = y(g, R, N.value, w);
      if ($ === null) {
        R === null && (R = I);
        break;
      }
      e && R && $.alternate === null && t(g, R), m = i($, m, T), k === null ? E = $ : k.sibling = $, k = $, R = I;
    }
    if (N.done) return n(
      g,
      R
    ), it && so(g, T), E;
    if (R === null) {
      for (; !N.done; T++, N = b.next()) N = p(g, N.value, w), N !== null && (m = i(N, m, T), k === null ? E = N : k.sibling = N, k = N);
      return it && so(g, T), E;
    }
    for (R = r(g, R); !N.done; T++, N = b.next()) N = f(R, g, T, N.value, w), N !== null && (e && N.alternate !== null && R.delete(N.key === null ? T : N.key), m = i(N, m, T), k === null ? E = N : k.sibling = N, k = N);
    return e && R.forEach(function(L) {
      return t(g, L);
    }), it && so(g, T), E;
  }
  function C(g, m, b, w) {
    if (typeof b == "object" && b !== null && b.type === Ko && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case gl:
          e: {
            for (var E = b.key, k = m; k !== null; ) {
              if (k.key === E) {
                if (E = b.type, E === Ko) {
                  if (k.tag === 7) {
                    n(g, k.sibling), m = o(k, b.props.children), m.return = g, g = m;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mr && Dm(E) === k.type) {
                  n(g, k.sibling), m = o(k, b.props), m.ref = Di(g, k, b), m.return = g, g = m;
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            b.type === Ko ? (m = ho(b.props.children, g.mode, w, b.key), m.return = g, g = m) : (w = la(b.type, b.key, b.props, null, g.mode, w), w.ref = Di(g, m, b), w.return = g, g = w);
          }
          return s(g);
        case Ho:
          e: {
            for (k = b.key; m !== null; ) {
              if (m.key === k) if (m.tag === 4 && m.stateNode.containerInfo === b.containerInfo && m.stateNode.implementation === b.implementation) {
                n(g, m.sibling), m = o(m, b.children || []), m.return = g, g = m;
                break e;
              } else {
                n(g, m);
                break;
              }
              else t(g, m);
              m = m.sibling;
            }
            m = Bc(b, g.mode, w), m.return = g, g = m;
          }
          return s(g);
        case Mr:
          return k = b._init, C(g, m, k(b._payload), w);
      }
      if (os(b)) return v(g, m, b, w);
      if (Li(b)) return S(g, m, b, w);
      El(g, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, m !== null && m.tag === 6 ? (n(g, m.sibling), m = o(m, b), m.return = g, g = m) : (n(g, m), m = zc(b, g.mode, w), m.return = g, g = m), s(g)) : n(g, m);
  }
  return C;
}
var hi = cv(!0), dv = cv(!1), Pa = Xr(null), Ia = null, ei = null, Df = null;
function Wf() {
  Df = ei = Ia = null;
}
function Uf(e) {
  var t = Pa.current;
  nt(Pa), e._currentValue = t;
}
function Id(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function li(e, t) {
  Ia = e, Df = ei = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Jt = !0), e.firstContext = null);
}
function En(e) {
  var t = e._currentValue;
  if (Df !== e) if (e = { context: e, memoizedValue: t, next: null }, ei === null) {
    if (Ia === null) throw Error(V(308));
    ei = e, Ia.dependencies = { lanes: 0, firstContext: e };
  } else ei = ei.next = e;
  return t;
}
var co = null;
function Vf(e) {
  co === null ? co = [e] : co.push(e);
}
function fv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Vf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, wr(e, r);
}
function wr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var $r = !1;
function Hf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function pv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function xr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Fr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Oe & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, wr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Vf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, wr(e, n);
}
function ta(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Mf(e, n);
  }
}
function Wm(e, t) {
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
function Ma(e, t, n, r) {
  var o = e.updateQueue;
  $r = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var p = o.baseState;
    s = 0, d = u = a = null, l = i;
    do {
      var y = l.lane, f = l.eventTime;
      if ((r & y) === y) {
        d !== null && (d = d.next = {
          eventTime: f,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var v = e, S = l;
          switch (y = t, f = n, S.tag) {
            case 1:
              if (v = S.payload, typeof v == "function") {
                p = v.call(f, p, y);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = S.payload, y = typeof v == "function" ? v.call(f, p, y) : v, y == null) break e;
              p = dt({}, p, y);
              break e;
            case 2:
              $r = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, y = o.effects, y === null ? o.effects = [l] : y.push(l));
      } else f = { eventTime: f, lane: y, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (u = d = f, a = p) : d = d.next = f, s |= y;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        y = l, l = y.next, y.next = null, o.lastBaseUpdate = y, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = p), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    So |= s, e.lanes = s, e.memoizedState = p;
  }
}
function Um(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(V(191, o));
      o.call(r);
    }
  }
}
var nl = {}, nr = Xr(nl), Ls = Xr(nl), zs = Xr(nl);
function fo(e) {
  if (e === nl) throw Error(V(174));
  return e;
}
function Kf(e, t) {
  switch (Ze(zs, t), Ze(Ls, e), Ze(nr, nl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ud(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ud(t, e);
  }
  nt(nr), Ze(nr, t);
}
function gi() {
  nt(nr), nt(Ls), nt(zs);
}
function mv(e) {
  fo(zs.current);
  var t = fo(nr.current), n = ud(t, e.type);
  t !== n && (Ze(Ls, e), Ze(nr, n));
}
function Gf(e) {
  Ls.current === e && (nt(nr), nt(Ls));
}
var at = Xr(0);
function $a(e) {
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
var $c = [];
function Yf() {
  for (var e = 0; e < $c.length; e++) $c[e]._workInProgressVersionPrimary = null;
  $c.length = 0;
}
var na = Er.ReactCurrentDispatcher, jc = Er.ReactCurrentBatchConfig, bo = 0, ut = null, Tt = null, Et = null, ja = !1, ms = !1, Bs = 0, rS = 0;
function Bt() {
  throw Error(V(321));
}
function Qf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Wn(e[n], t[n])) return !1;
  return !0;
}
function Xf(e, t, n, r, o, i) {
  if (bo = i, ut = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, na.current = e === null || e.memoizedState === null ? lS : aS, e = n(r, o), ms) {
    i = 0;
    do {
      if (ms = !1, Bs = 0, 25 <= i) throw Error(V(301));
      i += 1, Et = Tt = null, t.updateQueue = null, na.current = uS, e = n(r, o);
    } while (ms);
  }
  if (na.current = Oa, t = Tt !== null && Tt.next !== null, bo = 0, Et = Tt = ut = null, ja = !1, t) throw Error(V(300));
  return e;
}
function qf() {
  var e = Bs !== 0;
  return Bs = 0, e;
}
function Qn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Et === null ? ut.memoizedState = Et = e : Et = Et.next = e, Et;
}
function Pn() {
  if (Tt === null) {
    var e = ut.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Tt.next;
  var t = Et === null ? ut.memoizedState : Et.next;
  if (t !== null) Et = t, Tt = e;
  else {
    if (e === null) throw Error(V(310));
    Tt = e, e = { memoizedState: Tt.memoizedState, baseState: Tt.baseState, baseQueue: Tt.baseQueue, queue: Tt.queue, next: null }, Et === null ? ut.memoizedState = Et = e : Et = Et.next = e;
  }
  return Et;
}
function _s(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oc(e) {
  var t = Pn(), n = t.queue;
  if (n === null) throw Error(V(311));
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
    var l = s = null, a = null, u = i;
    do {
      var d = u.lane;
      if ((bo & d) === d) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = p, s = r) : a = a.next = p, ut.lanes |= d, So |= d;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, Wn(r, t.memoizedState) || (Jt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ut.lanes |= i, So |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ac(e) {
  var t = Pn(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Wn(i, t.memoizedState) || (Jt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function hv() {
}
function gv(e, t) {
  var n = ut, r = Pn(), o = t(), i = !Wn(r.memoizedState, o);
  if (i && (r.memoizedState = o, Jt = !0), r = r.queue, Zf(xv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Et !== null && Et.memoizedState.tag & 1) {
    if (n.flags |= 2048, Fs(9, vv.bind(null, n, r, o, t), void 0, null), Pt === null) throw Error(V(349));
    bo & 30 || yv(n, t, o);
  }
  return o;
}
function yv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ut.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ut.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function vv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, bv(t) && Sv(e);
}
function xv(e, t, n) {
  return n(function() {
    bv(t) && Sv(e);
  });
}
function bv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Wn(e, n);
  } catch {
    return !0;
  }
}
function Sv(e) {
  var t = wr(e, 1);
  t !== null && Dn(t, e, 1, -1);
}
function Vm(e) {
  var t = Qn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _s, lastRenderedState: e }, t.queue = e, e = e.dispatch = sS.bind(null, ut, e), [t.memoizedState, e];
}
function Fs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ut.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ut.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function wv() {
  return Pn().memoizedState;
}
function ra(e, t, n, r) {
  var o = Qn();
  ut.flags |= e, o.memoizedState = Fs(1 | t, n, void 0, r === void 0 ? null : r);
}
function iu(e, t, n, r) {
  var o = Pn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Tt !== null) {
    var s = Tt.memoizedState;
    if (i = s.destroy, r !== null && Qf(r, s.deps)) {
      o.memoizedState = Fs(t, n, i, r);
      return;
    }
  }
  ut.flags |= e, o.memoizedState = Fs(1 | t, n, i, r);
}
function Hm(e, t) {
  return ra(8390656, 8, e, t);
}
function Zf(e, t) {
  return iu(2048, 8, e, t);
}
function Cv(e, t) {
  return iu(4, 2, e, t);
}
function kv(e, t) {
  return iu(4, 4, e, t);
}
function Tv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Rv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, iu(4, 4, Tv.bind(null, t, e), n);
}
function Jf() {
}
function Ev(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pv(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Iv(e, t, n) {
  return bo & 21 ? (Wn(n, t) || (n = Ay(), ut.lanes |= n, So |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Jt = !0), e.memoizedState = n);
}
function oS(e, t) {
  var n = Ve;
  Ve = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = jc.transition;
  jc.transition = {};
  try {
    e(!1), t();
  } finally {
    Ve = n, jc.transition = r;
  }
}
function Mv() {
  return Pn().memoizedState;
}
function iS(e, t, n) {
  var r = Wr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $v(e)) jv(t, n);
  else if (n = fv(e, t, n, r), n !== null) {
    var o = Qt();
    Dn(n, e, r, o), Ov(n, t, r);
  }
}
function sS(e, t, n) {
  var r = Wr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($v(e)) jv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Wn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Vf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = fv(e, t, o, r), n !== null && (o = Qt(), Dn(n, e, r, o), Ov(n, t, r));
  }
}
function $v(e) {
  var t = e.alternate;
  return e === ut || t !== null && t === ut;
}
function jv(e, t) {
  ms = ja = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ov(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Mf(e, n);
  }
}
var Oa = { readContext: En, useCallback: Bt, useContext: Bt, useEffect: Bt, useImperativeHandle: Bt, useInsertionEffect: Bt, useLayoutEffect: Bt, useMemo: Bt, useReducer: Bt, useRef: Bt, useState: Bt, useDebugValue: Bt, useDeferredValue: Bt, useTransition: Bt, useMutableSource: Bt, useSyncExternalStore: Bt, useId: Bt, unstable_isNewReconciler: !1 }, lS = { readContext: En, useCallback: function(e, t) {
  return Qn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: En, useEffect: Hm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ra(
    4194308,
    4,
    Tv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ra(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ra(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Qn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Qn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = iS.bind(null, ut, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Qn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Vm, useDebugValue: Jf, useDeferredValue: function(e) {
  return Qn().memoizedState = e;
}, useTransition: function() {
  var e = Vm(!1), t = e[0];
  return e = oS.bind(null, e[1]), Qn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ut, o = Qn();
  if (it) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), Pt === null) throw Error(V(349));
    bo & 30 || yv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Hm(xv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Fs(9, vv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Qn(), t = Pt.identifierPrefix;
  if (it) {
    var n = vr, r = yr;
    n = (r & ~(1 << 32 - Fn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Bs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = rS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, aS = {
  readContext: En,
  useCallback: Ev,
  useContext: En,
  useEffect: Zf,
  useImperativeHandle: Rv,
  useInsertionEffect: Cv,
  useLayoutEffect: kv,
  useMemo: Pv,
  useReducer: Oc,
  useRef: wv,
  useState: function() {
    return Oc(_s);
  },
  useDebugValue: Jf,
  useDeferredValue: function(e) {
    var t = Pn();
    return Iv(t, Tt.memoizedState, e);
  },
  useTransition: function() {
    var e = Oc(_s)[0], t = Pn().memoizedState;
    return [e, t];
  },
  useMutableSource: hv,
  useSyncExternalStore: gv,
  useId: Mv,
  unstable_isNewReconciler: !1
}, uS = { readContext: En, useCallback: Ev, useContext: En, useEffect: Zf, useImperativeHandle: Rv, useInsertionEffect: Cv, useLayoutEffect: kv, useMemo: Pv, useReducer: Ac, useRef: wv, useState: function() {
  return Ac(_s);
}, useDebugValue: Jf, useDeferredValue: function(e) {
  var t = Pn();
  return Tt === null ? t.memoizedState = e : Iv(t, Tt.memoizedState, e);
}, useTransition: function() {
  var e = Ac(_s)[0], t = Pn().memoizedState;
  return [e, t];
}, useMutableSource: hv, useSyncExternalStore: gv, useId: Mv, unstable_isNewReconciler: !1 };
function zn(e, t) {
  if (e && e.defaultProps) {
    t = dt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Md(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : dt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var su = { isMounted: function(e) {
  return (e = e._reactInternals) ? Po(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = Wr(e), i = xr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Fr(e, i, o), t !== null && (Dn(t, e, o, r), ta(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = Wr(e), i = xr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Fr(e, i, o), t !== null && (Dn(t, e, o, r), ta(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qt(), r = Wr(e), o = xr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Fr(e, o, r), t !== null && (Dn(t, e, r, n), ta(t, e, r));
} };
function Km(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !js(n, r) || !js(o, i) : !0;
}
function Av(e, t, n) {
  var r = !1, o = Kr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = En(i) : (o = tn(t) ? vo : Wt.current, r = t.contextTypes, i = (r = r != null) ? pi(e, o) : Kr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = su, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Gm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && su.enqueueReplaceState(t, t.state, null);
}
function $d(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Hf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = En(i) : (i = tn(t) ? vo : Wt.current, o.context = pi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Md(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && su.enqueueReplaceState(o, o.state, null), Ma(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function yi(e, t) {
  try {
    var n = "", r = t;
    do
      n += zx(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Nc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function jd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cS = typeof WeakMap == "function" ? WeakMap : Map;
function Nv(e, t, n) {
  n = xr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Na || (Na = !0, Wd = r), jd(e, t);
  }, n;
}
function Lv(e, t, n) {
  n = xr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      jd(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    jd(e, t), typeof r != "function" && (Dr === null ? Dr = /* @__PURE__ */ new Set([this]) : Dr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Ym(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = kS.bind(null, e, t, n), t.then(e, e));
}
function Qm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Xm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = xr(-1, 1), t.tag = 2, Fr(n, t, 1))), n.lanes |= 1), e);
}
var dS = Er.ReactCurrentOwner, Jt = !1;
function Gt(e, t, n, r) {
  t.child = e === null ? dv(t, null, n, r) : hi(t, e.child, n, r);
}
function qm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return li(t, o), r = Xf(e, t, n, r, i, o), n = qf(), e !== null && !Jt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Cr(e, t, o)) : (it && n && Bf(t), t.flags |= 1, Gt(e, t, r, o), t.child);
}
function Zm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !lp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, zv(e, t, i, r, o)) : (e = la(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : js, n(s, r) && e.ref === t.ref) return Cr(e, t, o);
  }
  return t.flags |= 1, e = Ur(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function zv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (js(i, r) && e.ref === t.ref) if (Jt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Jt = !0);
    else return t.lanes = e.lanes, Cr(e, t, o);
  }
  return Od(e, t, n, r, o);
}
function Bv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(ni, ln), ln |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(ni, ln), ln |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ze(ni, ln), ln |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ze(ni, ln), ln |= r;
  return Gt(e, t, o, n), t.child;
}
function _v(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Od(e, t, n, r, o) {
  var i = tn(n) ? vo : Wt.current;
  return i = pi(t, i), li(t, o), n = Xf(e, t, n, r, i, o), r = qf(), e !== null && !Jt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Cr(e, t, o)) : (it && r && Bf(t), t.flags |= 1, Gt(e, t, n, o), t.child);
}
function Jm(e, t, n, r, o) {
  if (tn(n)) {
    var i = !0;
    Ta(t);
  } else i = !1;
  if (li(t, o), t.stateNode === null) oa(e, t), Av(t, n, r), $d(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = En(u) : (u = tn(n) ? vo : Wt.current, u = pi(t, u));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Gm(t, s, r, u), $r = !1;
    var y = t.memoizedState;
    s.state = y, Ma(t, r, s, o), a = t.memoizedState, l !== r || y !== a || en.current || $r ? (typeof d == "function" && (Md(t, n, d, r), a = t.memoizedState), (l = $r || Km(t, n, l, r, y, a, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, pv(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : zn(t.type, l), s.props = u, p = t.pendingProps, y = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = En(a) : (a = tn(n) ? vo : Wt.current, a = pi(t, a));
    var f = n.getDerivedStateFromProps;
    (d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || y !== a) && Gm(t, s, r, a), $r = !1, y = t.memoizedState, s.state = y, Ma(t, r, s, o);
    var v = t.memoizedState;
    l !== p || y !== v || en.current || $r ? (typeof f == "function" && (Md(t, n, f, r), v = t.memoizedState), (u = $r || Km(t, n, u, r, y, v, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ad(e, t, n, r, i, o);
}
function Ad(e, t, n, r, o, i) {
  _v(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Bm(t, n, !1), Cr(e, t, i);
  r = t.stateNode, dS.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = hi(t, e.child, null, i), t.child = hi(t, null, l, i)) : Gt(e, t, l, i), t.memoizedState = r.state, o && Bm(t, n, !0), t.child;
}
function Fv(e) {
  var t = e.stateNode;
  t.pendingContext ? zm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zm(e, t.context, !1), Kf(e, t.containerInfo);
}
function eh(e, t, n, r, o) {
  return mi(), Ff(o), t.flags |= 256, Gt(e, t, n, r), t.child;
}
var Nd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ld(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dv(e, t, n) {
  var r = t.pendingProps, o = at.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ze(at, o & 1), e === null)
    return Pd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = uu(s, r, 0, null), e = ho(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ld(n), t.memoizedState = Nd, e) : ep(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return fS(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Ur(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Ur(l, i) : (i = ho(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Ld(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Nd, r;
  }
  return i = e.child, e = i.sibling, r = Ur(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ep(e, t) {
  return t = uu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Pl(e, t, n, r) {
  return r !== null && Ff(r), hi(t, e.child, null, n), e = ep(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function fS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Nc(Error(V(422))), Pl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = uu({ mode: "visible", children: r.children }, o, 0, null), i = ho(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && hi(t, e.child, null, s), t.child.memoizedState = Ld(s), t.memoizedState = Nd, i);
  if (!(t.mode & 1)) return Pl(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(V(419)), r = Nc(i, r, void 0), Pl(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, Jt || l) {
    if (r = Pt, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, wr(e, o), Dn(r, e, o, -1));
    }
    return sp(), r = Nc(Error(V(421))), Pl(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = TS.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, cn = _r(o.nextSibling), dn = t, it = !0, _n = null, e !== null && (bn[Sn++] = yr, bn[Sn++] = vr, bn[Sn++] = xo, yr = e.id, vr = e.overflow, xo = t), t = ep(t, r.children), t.flags |= 4096, t);
}
function th(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Id(e.return, t, n);
}
function Lc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Wv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Gt(e, t, r.children, n), r = at.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && th(e, n, t);
      else if (e.tag === 19) th(e, n, t);
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
  if (Ze(at, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && $a(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Lc(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && $a(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Lc(t, !0, n, null, i);
      break;
    case "together":
      Lc(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function oa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Cr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), So |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = Ur(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ur(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function pS(e, t, n) {
  switch (t.tag) {
    case 3:
      Fv(t), mi();
      break;
    case 5:
      mv(t);
      break;
    case 1:
      tn(t.type) && Ta(t);
      break;
    case 4:
      Kf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ze(Pa, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ze(at, at.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Dv(e, t, n) : (Ze(at, at.current & 1), e = Cr(e, t, n), e !== null ? e.sibling : null);
      Ze(at, at.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Wv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ze(at, at.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Bv(e, t, n);
  }
  return Cr(e, t, n);
}
var Uv, zd, Vv, Hv;
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
zd = function() {
};
Vv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, fo(nr.current);
    var i = null;
    switch (n) {
      case "input":
        o = id(e, o), r = id(e, r), i = [];
        break;
      case "select":
        o = dt({}, o, { value: void 0 }), r = dt({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ad(e, o), r = ad(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ca);
    }
    cd(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ts.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ts.hasOwnProperty(u) ? (a != null && u === "onScroll" && tt("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Hv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wi(e, t) {
  if (!it) switch (e.tailMode) {
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
function mS(e, t, n) {
  var r = t.pendingProps;
  switch (_f(t), t.tag) {
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
      return tn(t.type) && ka(), _t(t), null;
    case 3:
      return r = t.stateNode, gi(), nt(en), nt(Wt), Yf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, _n !== null && (Hd(_n), _n = null))), zd(e, t), _t(t), null;
    case 5:
      Gf(t);
      var o = fo(zs.current);
      if (n = t.type, e !== null && t.stateNode != null) Vv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return _t(t), null;
        }
        if (e = fo(nr.current), Rl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Zn] = t, r[Ns] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              tt("cancel", r), tt("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              tt("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ss.length; o++) tt(ss[o], r);
              break;
            case "source":
              tt("error", r);
              break;
            case "img":
            case "image":
            case "link":
              tt(
                "error",
                r
              ), tt("load", r);
              break;
            case "details":
              tt("toggle", r);
              break;
            case "input":
              cm(r, i), tt("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, tt("invalid", r);
              break;
            case "textarea":
              fm(r, i), tt("invalid", r);
          }
          cd(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Tl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Tl(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Ts.hasOwnProperty(s) && l != null && s === "onScroll" && tt("scroll", r);
          }
          switch (n) {
            case "input":
              yl(r), dm(r, i, !0);
              break;
            case "textarea":
              yl(r), pm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ca);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xy(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Zn] = t, e[Ns] = r, Uv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = dd(n, r), n) {
              case "dialog":
                tt("cancel", e), tt("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                tt("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ss.length; o++) tt(ss[o], e);
                o = r;
                break;
              case "source":
                tt("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                tt(
                  "error",
                  e
                ), tt("load", e), o = r;
                break;
              case "details":
                tt("toggle", e), o = r;
                break;
              case "input":
                cm(e, r), o = id(e, r), tt("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = dt({}, r, { value: void 0 }), tt("invalid", e);
                break;
              case "textarea":
                fm(e, r), o = ad(e, r), tt("invalid", e);
                break;
              default:
                o = r;
            }
            cd(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? wy(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && by(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Rs(e, a) : typeof a == "number" && Rs(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ts.hasOwnProperty(i) ? a != null && i === "onScroll" && tt("scroll", e) : a != null && kf(e, i, a, s));
            }
            switch (n) {
              case "input":
                yl(e), dm(e, r, !1);
                break;
              case "textarea":
                yl(e), pm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Hr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ri(e, !!r.multiple, i, !1) : r.defaultValue != null && ri(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ca);
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
      if (e && t.stateNode != null) Hv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = fo(zs.current), fo(nr.current), Rl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Zn] = t, (i = r.nodeValue !== n) && (e = dn, e !== null)) switch (e.tag) {
            case 3:
              Tl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Tl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Zn] = t, t.stateNode = r;
      }
      return _t(t), null;
    case 13:
      if (nt(at), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (it && cn !== null && t.mode & 1 && !(t.flags & 128)) uv(), mi(), t.flags |= 98560, i = !1;
        else if (i = Rl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(V(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(V(317));
            i[Zn] = t;
          } else mi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _t(t), i = !1;
        } else _n !== null && (Hd(_n), _n = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || at.current & 1 ? Rt === 0 && (Rt = 3) : sp())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
    case 4:
      return gi(), zd(e, t), e === null && Os(t.stateNode.containerInfo), _t(t), null;
    case 10:
      return Uf(t.type._context), _t(t), null;
    case 17:
      return tn(t.type) && ka(), _t(t), null;
    case 19:
      if (nt(at), i = t.memoizedState, i === null) return _t(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Wi(i, !1);
      else {
        if (Rt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = $a(e), s !== null) {
            for (t.flags |= 128, Wi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Ze(at, at.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && vt() > vi && (t.flags |= 128, r = !0, Wi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = $a(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Wi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !it) return _t(t), null;
        } else 2 * vt() - i.renderingStartTime > vi && n !== 1073741824 && (t.flags |= 128, r = !0, Wi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = vt(), t.sibling = null, n = at.current, Ze(at, r ? n & 1 | 2 : n & 1), t) : (_t(t), null);
    case 22:
    case 23:
      return ip(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ln & 1073741824 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function hS(e, t) {
  switch (_f(t), t.tag) {
    case 1:
      return tn(t.type) && ka(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return gi(), nt(en), nt(Wt), Yf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Gf(t), null;
    case 13:
      if (nt(at), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        mi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return nt(at), null;
    case 4:
      return gi(), null;
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
var Il = !1, Dt = !1, gS = typeof WeakSet == "function" ? WeakSet : Set, J = null;
function ti(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    mt(e, t, r);
  }
  else n.current = null;
}
function Bd(e, t, n) {
  try {
    n();
  } catch (r) {
    mt(e, t, r);
  }
}
var nh = !1;
function yS(e, t) {
  if (Sd = ba, e = Xy(), zf(e)) {
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
        var s = 0, l = -1, a = -1, u = 0, d = 0, p = e, y = null;
        t: for (; ; ) {
          for (var f; p !== n || o !== 0 && p.nodeType !== 3 || (l = s + o), p !== i || r !== 0 && p.nodeType !== 3 || (a = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (f = p.firstChild) !== null; )
            y = p, p = f;
          for (; ; ) {
            if (p === e) break t;
            if (y === n && ++u === o && (l = s), y === i && ++d === r && (a = s), (f = p.nextSibling) !== null) break;
            p = y, y = p.parentNode;
          }
          p = f;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wd = { focusedElem: e, selectionRange: n }, ba = !1, J = t; J !== null; ) if (t = J, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, J = e;
  else for (; J !== null; ) {
    t = J;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var S = v.memoizedProps, C = v.memoizedState, g = t.stateNode, m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? S : zn(t.type, S), C);
            g.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var b = t.stateNode.containerInfo;
          b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
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
      mt(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, J = e;
      break;
    }
    J = t.return;
  }
  return v = nh, nh = !1, v;
}
function hs(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Bd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function lu(e, t) {
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
function Kv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Kv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Zn], delete t[Ns], delete t[Td], delete t[Jb], delete t[eS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Gv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rh(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Gv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ca));
  else if (r !== 4 && (e = e.child, e !== null)) for (Fd(e, t, n), e = e.sibling; e !== null; ) Fd(e, t, n), e = e.sibling;
}
function Dd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Dd(e, t, n), e = e.sibling; e !== null; ) Dd(e, t, n), e = e.sibling;
}
var jt = null, Bn = !1;
function Pr(e, t, n) {
  for (n = n.child; n !== null; ) Yv(e, t, n), n = n.sibling;
}
function Yv(e, t, n) {
  if (tr && typeof tr.onCommitFiberUnmount == "function") try {
    tr.onCommitFiberUnmount(Ja, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Dt || ti(n, t);
    case 6:
      var r = jt, o = Bn;
      jt = null, Pr(e, t, n), jt = r, Bn = o, jt !== null && (Bn ? (e = jt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : jt.removeChild(n.stateNode));
      break;
    case 18:
      jt !== null && (Bn ? (e = jt, n = n.stateNode, e.nodeType === 8 ? Ic(e.parentNode, n) : e.nodeType === 1 && Ic(e, n), Ms(e)) : Ic(jt, n.stateNode));
      break;
    case 4:
      r = jt, o = Bn, jt = n.stateNode.containerInfo, Bn = !0, Pr(e, t, n), jt = r, Bn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Dt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Bd(n, t, s), o = o.next;
        } while (o !== r);
      }
      Pr(e, t, n);
      break;
    case 1:
      if (!Dt && (ti(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? (Dt = (r = Dt) || n.memoizedState !== null, Pr(e, t, n), Dt = r) : Pr(e, t, n);
      break;
    default:
      Pr(e, t, n);
  }
}
function oh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gS()), t.forEach(function(r) {
      var o = RS.bind(null, e, r);
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
      if (jt === null) throw Error(V(160));
      Yv(i, s, o), jt = null, Bn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      mt(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qv(t, e), t = t.sibling;
}
function Qv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (On(t, e), Kn(e), r & 4) {
        try {
          hs(3, e, e.return), lu(3, e);
        } catch (S) {
          mt(e, e.return, S);
        }
        try {
          hs(5, e, e.return);
        } catch (S) {
          mt(e, e.return, S);
        }
      }
      break;
    case 1:
      On(t, e), Kn(e), r & 512 && n !== null && ti(n, n.return);
      break;
    case 5:
      if (On(t, e), Kn(e), r & 512 && n !== null && ti(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Rs(o, "");
        } catch (S) {
          mt(e, e.return, S);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && yy(o, i), dd(l, s);
          var u = dd(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], p = a[s + 1];
            d === "style" ? wy(o, p) : d === "dangerouslySetInnerHTML" ? by(o, p) : d === "children" ? Rs(o, p) : kf(o, d, p, u);
          }
          switch (l) {
            case "input":
              sd(o, i);
              break;
            case "textarea":
              vy(o, i);
              break;
            case "select":
              var y = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var f = i.value;
              f != null ? ri(o, !!i.multiple, f, !1) : y !== !!i.multiple && (i.defaultValue != null ? ri(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : ri(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Ns] = i;
        } catch (S) {
          mt(e, e.return, S);
        }
      }
      break;
    case 6:
      if (On(t, e), Kn(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (S) {
          mt(e, e.return, S);
        }
      }
      break;
    case 3:
      if (On(t, e), Kn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ms(t.containerInfo);
      } catch (S) {
        mt(e, e.return, S);
      }
      break;
    case 4:
      On(t, e), Kn(e);
      break;
    case 13:
      On(t, e), Kn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (rp = vt())), r & 4 && oh(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Dt = (u = Dt) || d, On(t, e), Dt = u) : On(t, e), Kn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (J = e, d = e.child; d !== null; ) {
          for (p = J = d; J !== null; ) {
            switch (y = J, f = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                hs(4, y, y.return);
                break;
              case 1:
                ti(y, y.return);
                var v = y.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (S) {
                    mt(r, n, S);
                  }
                }
                break;
              case 5:
                ti(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  sh(p);
                  continue;
                }
            }
            f !== null ? (f.return = y, J = f) : sh(p);
          }
          d = d.sibling;
        }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                o = p.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode, a = p.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Sy("display", s));
              } catch (S) {
                mt(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (S) {
              mt(e, e.return, S);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), p = p.return;
          }
          d === p && (d = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      On(t, e), Kn(e), r & 4 && oh(e);
      break;
    case 21:
      break;
    default:
      On(
        t,
        e
      ), Kn(e);
  }
}
function Kn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Gv(n)) {
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
          r.flags & 32 && (Rs(o, ""), r.flags &= -33);
          var i = rh(e);
          Dd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = rh(e);
          Fd(e, l, s);
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
function vS(e, t, n) {
  J = e, Xv(e);
}
function Xv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; J !== null; ) {
    var o = J, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Il;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Dt;
        l = Il;
        var u = Dt;
        if (Il = s, (Dt = a) && !u) for (J = o; J !== null; ) s = J, a = s.child, s.tag === 22 && s.memoizedState !== null ? lh(o) : a !== null ? (a.return = s, J = a) : lh(o);
        for (; i !== null; ) J = i, Xv(i), i = i.sibling;
        J = o, Il = l, Dt = u;
      }
      ih(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, J = i) : ih(e);
  }
}
function ih(e) {
  for (; J !== null; ) {
    var t = J;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Dt || lu(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Dt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : zn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Um(t, i, r);
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
              Um(t, s, n);
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
                  var p = d.dehydrated;
                  p !== null && Ms(p);
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
        Dt || t.flags & 512 && _d(t);
      } catch (y) {
        mt(t, t.return, y);
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
function sh(e) {
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
function lh(e) {
  for (; J !== null; ) {
    var t = J;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            lu(4, t);
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
            _d(t);
          } catch (a) {
            mt(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            _d(t);
          } catch (a) {
            mt(t, s, a);
          }
      }
    } catch (a) {
      mt(t, t.return, a);
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
var xS = Math.ceil, Aa = Er.ReactCurrentDispatcher, tp = Er.ReactCurrentOwner, Tn = Er.ReactCurrentBatchConfig, Oe = 0, Pt = null, kt = null, Nt = 0, ln = 0, ni = Xr(0), Rt = 0, Ds = null, So = 0, au = 0, np = 0, gs = null, Zt = null, rp = 0, vi = 1 / 0, fr = null, Na = !1, Wd = null, Dr = null, Ml = !1, Nr = null, La = 0, ys = 0, Ud = null, ia = -1, sa = 0;
function Qt() {
  return Oe & 6 ? vt() : ia !== -1 ? ia : ia = vt();
}
function Wr(e) {
  return e.mode & 1 ? Oe & 2 && Nt !== 0 ? Nt & -Nt : nS.transition !== null ? (sa === 0 && (sa = Ay()), sa) : (e = Ve, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Dy(e.type)), e) : 1;
}
function Dn(e, t, n, r) {
  if (50 < ys) throw ys = 0, Ud = null, Error(V(185));
  Js(e, n, r), (!(Oe & 2) || e !== Pt) && (e === Pt && (!(Oe & 2) && (au |= n), Rt === 4 && Or(e, Nt)), nn(e, r), n === 1 && Oe === 0 && !(t.mode & 1) && (vi = vt() + 500, ou && qr()));
}
function nn(e, t) {
  var n = e.callbackNode;
  nb(e, t);
  var r = xa(e, e === Pt ? Nt : 0);
  if (r === 0) n !== null && gm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && gm(n), t === 1) e.tag === 0 ? tS(ah.bind(null, e)) : sv(ah.bind(null, e)), qb(function() {
      !(Oe & 6) && qr();
    }), n = null;
    else {
      switch (Ny(r)) {
        case 1:
          n = If;
          break;
        case 4:
          n = jy;
          break;
        case 16:
          n = va;
          break;
        case 536870912:
          n = Oy;
          break;
        default:
          n = va;
      }
      n = o0(n, qv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function qv(e, t) {
  if (ia = -1, sa = 0, Oe & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (ai() && e.callbackNode !== n) return null;
  var r = xa(e, e === Pt ? Nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = za(e, r);
  else {
    t = r;
    var o = Oe;
    Oe |= 2;
    var i = Jv();
    (Pt !== e || Nt !== t) && (fr = null, vi = vt() + 500, mo(e, t));
    do
      try {
        wS();
        break;
      } catch (l) {
        Zv(e, l);
      }
    while (!0);
    Wf(), Aa.current = i, Oe = o, kt !== null ? t = 0 : (Pt = null, Nt = 0, t = Rt);
  }
  if (t !== 0) {
    if (t === 2 && (o = gd(e), o !== 0 && (r = o, t = Vd(e, o))), t === 1) throw n = Ds, mo(e, 0), Or(e, r), nn(e, vt()), n;
    if (t === 6) Or(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !bS(o) && (t = za(e, r), t === 2 && (i = gd(e), i !== 0 && (r = i, t = Vd(e, i))), t === 1)) throw n = Ds, mo(e, 0), Or(e, r), nn(e, vt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          lo(e, Zt, fr);
          break;
        case 3:
          if (Or(e, r), (r & 130023424) === r && (t = rp + 500 - vt(), 10 < t)) {
            if (xa(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Qt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = kd(lo.bind(null, e, Zt, fr), t);
            break;
          }
          lo(e, Zt, fr);
          break;
        case 4:
          if (Or(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Fn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = vt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = kd(lo.bind(null, e, Zt, fr), r);
            break;
          }
          lo(e, Zt, fr);
          break;
        case 5:
          lo(e, Zt, fr);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return nn(e, vt()), e.callbackNode === n ? qv.bind(null, e) : null;
}
function Vd(e, t) {
  var n = gs;
  return e.current.memoizedState.isDehydrated && (mo(e, t).flags |= 256), e = za(e, t), e !== 2 && (t = Zt, Zt = n, t !== null && Hd(t)), e;
}
function Hd(e) {
  Zt === null ? Zt = e : Zt.push.apply(Zt, e);
}
function bS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Wn(i(), o)) return !1;
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
function Or(e, t) {
  for (t &= ~np, t &= ~au, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Fn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ah(e) {
  if (Oe & 6) throw Error(V(327));
  ai();
  var t = xa(e, 0);
  if (!(t & 1)) return nn(e, vt()), null;
  var n = za(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gd(e);
    r !== 0 && (t = r, n = Vd(e, r));
  }
  if (n === 1) throw n = Ds, mo(e, 0), Or(e, t), nn(e, vt()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, lo(e, Zt, fr), nn(e, vt()), null;
}
function op(e, t) {
  var n = Oe;
  Oe |= 1;
  try {
    return e(t);
  } finally {
    Oe = n, Oe === 0 && (vi = vt() + 500, ou && qr());
  }
}
function wo(e) {
  Nr !== null && Nr.tag === 0 && !(Oe & 6) && ai();
  var t = Oe;
  Oe |= 1;
  var n = Tn.transition, r = Ve;
  try {
    if (Tn.transition = null, Ve = 1, e) return e();
  } finally {
    Ve = r, Tn.transition = n, Oe = t, !(Oe & 6) && qr();
  }
}
function ip() {
  ln = ni.current, nt(ni);
}
function mo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Xb(n)), kt !== null) for (n = kt.return; n !== null; ) {
    var r = n;
    switch (_f(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ka();
        break;
      case 3:
        gi(), nt(en), nt(Wt), Yf();
        break;
      case 5:
        Gf(r);
        break;
      case 4:
        gi();
        break;
      case 13:
        nt(at);
        break;
      case 19:
        nt(at);
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
  if (Pt = e, kt = e = Ur(e.current, null), Nt = ln = t, Rt = 0, Ds = null, np = au = So = 0, Zt = gs = null, co !== null) {
    for (t = 0; t < co.length; t++) if (n = co[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    co = null;
  }
  return e;
}
function Zv(e, t) {
  do {
    var n = kt;
    try {
      if (Wf(), na.current = Oa, ja) {
        for (var r = ut.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ja = !1;
      }
      if (bo = 0, Et = Tt = ut = null, ms = !1, Bs = 0, tp.current = null, n === null || n.return === null) {
        Rt = 1, Ds = t, kt = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Nt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, d = l, p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var y = d.alternate;
            y ? (d.updateQueue = y.updateQueue, d.memoizedState = y.memoizedState, d.lanes = y.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var f = Qm(s);
          if (f !== null) {
            f.flags &= -257, Xm(f, s, l, i, t), f.mode & 1 && Ym(i, u, t), t = f, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(a), t.updateQueue = S;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ym(i, u, t), sp();
              break e;
            }
            a = Error(V(426));
          }
        } else if (it && l.mode & 1) {
          var C = Qm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Xm(C, s, l, i, t), Ff(yi(a, l));
            break e;
          }
        }
        i = a = yi(a, l), Rt !== 4 && (Rt = 2), gs === null ? gs = [i] : gs.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var g = Nv(i, a, t);
              Wm(i, g);
              break e;
            case 1:
              l = a;
              var m = i.type, b = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Dr === null || !Dr.has(b)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Lv(i, l, t);
                Wm(i, w);
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
  var e = Aa.current;
  return Aa.current = Oa, e === null ? Oa : e;
}
function sp() {
  (Rt === 0 || Rt === 3 || Rt === 2) && (Rt = 4), Pt === null || !(So & 268435455) && !(au & 268435455) || Or(Pt, Nt);
}
function za(e, t) {
  var n = Oe;
  Oe |= 2;
  var r = Jv();
  (Pt !== e || Nt !== t) && (fr = null, mo(e, t));
  do
    try {
      SS();
      break;
    } catch (o) {
      Zv(e, o);
    }
  while (!0);
  if (Wf(), Oe = n, Aa.current = r, kt !== null) throw Error(V(261));
  return Pt = null, Nt = 0, Rt;
}
function SS() {
  for (; kt !== null; ) e0(kt);
}
function wS() {
  for (; kt !== null && !Gx(); ) e0(kt);
}
function e0(e) {
  var t = r0(e.alternate, e, ln);
  e.memoizedProps = e.pendingProps, t === null ? t0(e) : kt = t, tp.current = null;
}
function t0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = hS(n, t), n !== null) {
        n.flags &= 32767, kt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Rt = 6, kt = null;
        return;
      }
    } else if (n = mS(n, t, ln), n !== null) {
      kt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      kt = t;
      return;
    }
    kt = t = e;
  } while (t !== null);
  Rt === 0 && (Rt = 5);
}
function lo(e, t, n) {
  var r = Ve, o = Tn.transition;
  try {
    Tn.transition = null, Ve = 1, CS(e, t, n, r);
  } finally {
    Tn.transition = o, Ve = r;
  }
  return null;
}
function CS(e, t, n, r) {
  do
    ai();
  while (Nr !== null);
  if (Oe & 6) throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (rb(e, i), e === Pt && (kt = Pt = null, Nt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ml || (Ml = !0, o0(va, function() {
    return ai(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Tn.transition, Tn.transition = null;
    var s = Ve;
    Ve = 1;
    var l = Oe;
    Oe |= 4, tp.current = null, yS(e, n), Qv(n, e), Ub(wd), ba = !!Sd, wd = Sd = null, e.current = n, vS(n), Yx(), Oe = l, Ve = s, Tn.transition = i;
  } else e.current = n;
  if (Ml && (Ml = !1, Nr = e, La = o), i = e.pendingLanes, i === 0 && (Dr = null), qx(n.stateNode), nn(e, vt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Na) throw Na = !1, e = Wd, Wd = null, e;
  return La & 1 && e.tag !== 0 && ai(), i = e.pendingLanes, i & 1 ? e === Ud ? ys++ : (ys = 0, Ud = e) : ys = 0, qr(), null;
}
function ai() {
  if (Nr !== null) {
    var e = Ny(La), t = Tn.transition, n = Ve;
    try {
      if (Tn.transition = null, Ve = 16 > e ? 16 : e, Nr === null) var r = !1;
      else {
        if (e = Nr, Nr = null, La = 0, Oe & 6) throw Error(V(331));
        var o = Oe;
        for (Oe |= 4, J = e.current; J !== null; ) {
          var i = J, s = i.child;
          if (J.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (J = u; J !== null; ) {
                  var d = J;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hs(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) p.return = d, J = p;
                  else for (; J !== null; ) {
                    d = J;
                    var y = d.sibling, f = d.return;
                    if (Kv(d), d === u) {
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
              var v = i.alternate;
              if (v !== null) {
                var S = v.child;
                if (S !== null) {
                  v.child = null;
                  do {
                    var C = S.sibling;
                    S.sibling = null, S = C;
                  } while (S !== null);
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
                hs(9, i, i.return);
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, J = g;
              break e;
            }
            J = i.return;
          }
        }
        var m = e.current;
        for (J = m; J !== null; ) {
          s = J;
          var b = s.child;
          if (s.subtreeFlags & 2064 && b !== null) b.return = s, J = b;
          else e: for (s = m; J !== null; ) {
            if (l = J, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  lu(9, l);
              }
            } catch (E) {
              mt(l, l.return, E);
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
        if (Oe = o, qr(), tr && typeof tr.onPostCommitFiberRoot == "function") try {
          tr.onPostCommitFiberRoot(Ja, e);
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
function uh(e, t, n) {
  t = yi(n, t), t = Nv(e, t, 1), e = Fr(e, t, 1), t = Qt(), e !== null && (Js(e, 1, t), nn(e, t));
}
function mt(e, t, n) {
  if (e.tag === 3) uh(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      uh(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Dr === null || !Dr.has(r))) {
        e = yi(n, e), e = Lv(t, e, 1), t = Fr(t, e, 1), e = Qt(), t !== null && (Js(t, 1, e), nn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function kS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qt(), e.pingedLanes |= e.suspendedLanes & n, Pt === e && (Nt & n) === n && (Rt === 4 || Rt === 3 && (Nt & 130023424) === Nt && 500 > vt() - rp ? mo(e, 0) : np |= n), nn(e, t);
}
function n0(e, t) {
  t === 0 && (e.mode & 1 ? (t = bl, bl <<= 1, !(bl & 130023424) && (bl = 4194304)) : t = 1);
  var n = Qt();
  e = wr(e, t), e !== null && (Js(e, t, n), nn(e, n));
}
function TS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), n0(e, n);
}
function RS(e, t) {
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
  r !== null && r.delete(t), n0(e, n);
}
var r0;
r0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || en.current) Jt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Jt = !1, pS(e, t, n);
    Jt = !!(e.flags & 131072);
  }
  else Jt = !1, it && t.flags & 1048576 && lv(t, Ea, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      oa(e, t), e = t.pendingProps;
      var o = pi(t, Wt.current);
      li(t, n), o = Xf(null, t, r, e, o, n);
      var i = qf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tn(r) ? (i = !0, Ta(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Hf(t), o.updater = su, t.stateNode = o, o._reactInternals = t, $d(t, r, e, n), t = Ad(null, t, r, !0, i, n)) : (t.tag = 0, it && i && Bf(t), Gt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (oa(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = PS(r), e = zn(r, e), o) {
          case 0:
            t = Od(null, t, r, e, n);
            break e;
          case 1:
            t = Jm(null, t, r, e, n);
            break e;
          case 11:
            t = qm(null, t, r, e, n);
            break e;
          case 14:
            t = Zm(null, t, r, zn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : zn(r, o), Od(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : zn(r, o), Jm(e, t, r, o, n);
    case 3:
      e: {
        if (Fv(t), e === null) throw Error(V(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, pv(e, t), Ma(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = yi(Error(V(423)), t), t = eh(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = yi(Error(V(424)), t), t = eh(e, t, r, n, o);
          break e;
        } else for (cn = _r(t.stateNode.containerInfo.firstChild), dn = t, it = !0, _n = null, n = dv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (mi(), r === o) {
            t = Cr(e, t, n);
            break e;
          }
          Gt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return mv(t), e === null && Pd(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Cd(r, o) ? s = null : i !== null && Cd(r, i) && (t.flags |= 32), _v(e, t), Gt(e, t, s, n), t.child;
    case 6:
      return e === null && Pd(t), null;
    case 13:
      return Dv(e, t, n);
    case 4:
      return Kf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = hi(t, null, r, n) : Gt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : zn(r, o), qm(e, t, r, o, n);
    case 7:
      return Gt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Gt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Gt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ze(Pa, r._currentValue), r._currentValue = s, i !== null) if (Wn(i.value, s)) {
          if (i.children === o.children && !en.current) {
            t = Cr(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = xr(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Id(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Id(s, n, t), s = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, li(t, n), o = En(o), r = r(o), t.flags |= 1, Gt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = zn(r, t.pendingProps), o = zn(r.type, o), Zm(e, t, r, o, n);
    case 15:
      return zv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : zn(r, o), oa(e, t), t.tag = 1, tn(r) ? (e = !0, Ta(t)) : e = !1, li(t, n), Av(t, r, o), $d(t, r, o, n), Ad(null, t, r, !0, e, n);
    case 19:
      return Wv(e, t, n);
    case 22:
      return Bv(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function o0(e, t) {
  return $y(e, t);
}
function ES(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function kn(e, t, n, r) {
  return new ES(e, t, n, r);
}
function lp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function PS(e) {
  if (typeof e == "function") return lp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Rf) return 11;
    if (e === Ef) return 14;
  }
  return 2;
}
function Ur(e, t) {
  var n = e.alternate;
  return n === null ? (n = kn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function la(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") lp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Ko:
      return ho(n.children, o, i, t);
    case Tf:
      s = 8, o |= 8;
      break;
    case td:
      return e = kn(12, n, t, o | 2), e.elementType = td, e.lanes = i, e;
    case nd:
      return e = kn(13, n, t, o), e.elementType = nd, e.lanes = i, e;
    case rd:
      return e = kn(19, n, t, o), e.elementType = rd, e.lanes = i, e;
    case my:
      return uu(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case fy:
          s = 10;
          break e;
        case py:
          s = 9;
          break e;
        case Rf:
          s = 11;
          break e;
        case Ef:
          s = 14;
          break e;
        case Mr:
          s = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = kn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function ho(e, t, n, r) {
  return e = kn(7, e, r, t), e.lanes = n, e;
}
function uu(e, t, n, r) {
  return e = kn(22, e, r, t), e.elementType = my, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function zc(e, t, n) {
  return e = kn(6, e, null, t), e.lanes = n, e;
}
function Bc(e, t, n) {
  return t = kn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function IS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vc(0), this.expirationTimes = vc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vc(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ap(e, t, n, r, o, i, s, l, a) {
  return e = new IS(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = kn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Hf(i), e;
}
function MS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ho, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function i0(e) {
  if (!e) return Kr;
  e = e._reactInternals;
  e: {
    if (Po(e) !== e || e.tag !== 1) throw Error(V(170));
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
    if (tn(n)) return iv(e, n, t);
  }
  return t;
}
function s0(e, t, n, r, o, i, s, l, a) {
  return e = ap(n, r, !0, e, o, i, s, l, a), e.context = i0(null), n = e.current, r = Qt(), o = Wr(n), i = xr(r, o), i.callback = t ?? null, Fr(n, i, o), e.current.lanes = o, Js(e, o, r), nn(e, r), e;
}
function cu(e, t, n, r) {
  var o = t.current, i = Qt(), s = Wr(o);
  return n = i0(n), t.context === null ? t.context = n : t.pendingContext = n, t = xr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Fr(o, t, s), e !== null && (Dn(e, o, s, i), ta(e, o, s)), s;
}
function Ba(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ch(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function up(e, t) {
  ch(e, t), (e = e.alternate) && ch(e, t);
}
function $S() {
  return null;
}
var l0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function cp(e) {
  this._internalRoot = e;
}
du.prototype.render = cp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  cu(e, t, null, null);
};
du.prototype.unmount = cp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wo(function() {
      cu(null, e, null, null);
    }), t[Sr] = null;
  }
};
function du(e) {
  this._internalRoot = e;
}
du.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = By();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jr.length && t !== 0 && t < jr[n].priority; n++) ;
    jr.splice(n, 0, e), n === 0 && Fy(e);
  }
};
function dp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function fu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function dh() {
}
function jS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Ba(s);
        i.call(u);
      };
    }
    var s = s0(t, r, e, 0, null, !1, !1, "", dh);
    return e._reactRootContainer = s, e[Sr] = s.current, Os(e.nodeType === 8 ? e.parentNode : e), wo(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Ba(a);
      l.call(u);
    };
  }
  var a = ap(e, 0, !1, null, null, !1, !1, "", dh);
  return e._reactRootContainer = a, e[Sr] = a.current, Os(e.nodeType === 8 ? e.parentNode : e), wo(function() {
    cu(t, a, n, r);
  }), a;
}
function pu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = Ba(s);
        l.call(a);
      };
    }
    cu(t, s, e, o);
  } else s = jS(n, t, e, o, r);
  return Ba(s);
}
Ly = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = is(t.pendingLanes);
        n !== 0 && (Mf(t, n | 1), nn(t, vt()), !(Oe & 6) && (vi = vt() + 500, qr()));
      }
      break;
    case 13:
      wo(function() {
        var r = wr(e, 1);
        if (r !== null) {
          var o = Qt();
          Dn(r, e, 1, o);
        }
      }), up(e, 1);
  }
};
$f = function(e) {
  if (e.tag === 13) {
    var t = wr(e, 134217728);
    if (t !== null) {
      var n = Qt();
      Dn(t, e, 134217728, n);
    }
    up(e, 134217728);
  }
};
zy = function(e) {
  if (e.tag === 13) {
    var t = Wr(e), n = wr(e, t);
    if (n !== null) {
      var r = Qt();
      Dn(n, e, t, r);
    }
    up(e, t);
  }
};
By = function() {
  return Ve;
};
_y = function(e, t) {
  var n = Ve;
  try {
    return Ve = e, t();
  } finally {
    Ve = n;
  }
};
pd = function(e, t, n) {
  switch (t) {
    case "input":
      if (sd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ru(r);
            if (!o) throw Error(V(90));
            gy(r), sd(r, o);
          }
        }
      }
      break;
    case "textarea":
      vy(e, n);
      break;
    case "select":
      t = n.value, t != null && ri(e, !!n.multiple, t, !1);
  }
};
Ty = op;
Ry = wo;
var OS = { usingClientEntryPoint: !1, Events: [tl, Xo, ru, Cy, ky, op] }, Ui = { findFiberByHostInstance: uo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, AS = { bundleType: Ui.bundleType, version: Ui.version, rendererPackageName: Ui.rendererPackageName, rendererConfig: Ui.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Er.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Iy(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ui.findFiberByHostInstance || $S, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$l.isDisabled && $l.supportsFiber) try {
    Ja = $l.inject(AS), tr = $l;
  } catch {
  }
}
hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = OS;
hn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dp(t)) throw Error(V(200));
  return MS(e, t, null, n);
};
hn.createRoot = function(e, t) {
  if (!dp(e)) throw Error(V(299));
  var n = !1, r = "", o = l0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ap(e, 1, !1, null, null, n, !1, r, o), e[Sr] = t.current, Os(e.nodeType === 8 ? e.parentNode : e), new cp(t);
};
hn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = Iy(t), e = e === null ? null : e.stateNode, e;
};
hn.flushSync = function(e) {
  return wo(e);
};
hn.hydrate = function(e, t, n) {
  if (!fu(t)) throw Error(V(200));
  return pu(null, e, t, !0, n);
};
hn.hydrateRoot = function(e, t, n) {
  if (!dp(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = l0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = s0(t, null, e, 1, n ?? null, o, !1, i, s), e[Sr] = t.current, Os(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new du(t);
};
hn.render = function(e, t, n) {
  if (!fu(t)) throw Error(V(200));
  return pu(null, e, t, !1, n);
};
hn.unmountComponentAtNode = function(e) {
  if (!fu(e)) throw Error(V(40));
  return e._reactRootContainer ? (wo(function() {
    pu(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Sr] = null;
    });
  }), !0) : !1;
};
hn.unstable_batchedUpdates = op;
hn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!fu(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return pu(e, t, n, !1, r);
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
var u0 = ay.exports, c0, fh = u0;
c0 = fh.createRoot, fh.hydrateRoot;
const Ws = {
  black: "#000",
  white: "#fff"
}, _o = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Fo = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Do = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Wo = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Uo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Vi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, NS = {
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
function kr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const rr = "$$material";
function Kd() {
  return Kd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Kd.apply(null, arguments);
}
function LS(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function zS(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var BS = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(zS(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = LS(o);
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
}(), Ft = "-ms-", _a = "-moz-", Ne = "-webkit-", d0 = "comm", fp = "rule", pp = "decl", _S = "@import", f0 = "@keyframes", FS = "@layer", DS = Math.abs, mu = String.fromCharCode, WS = Object.assign;
function US(e, t) {
  return Ot(e, 0) ^ 45 ? (((t << 2 ^ Ot(e, 0)) << 2 ^ Ot(e, 1)) << 2 ^ Ot(e, 2)) << 2 ^ Ot(e, 3) : 0;
}
function p0(e) {
  return e.trim();
}
function VS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ze(e, t, n) {
  return e.replace(t, n);
}
function Gd(e, t) {
  return e.indexOf(t);
}
function Ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function Us(e, t, n) {
  return e.slice(t, n);
}
function Xn(e) {
  return e.length;
}
function mp(e) {
  return e.length;
}
function jl(e, t) {
  return t.push(e), e;
}
function HS(e, t) {
  return e.map(t).join("");
}
var hu = 1, xi = 1, m0 = 0, sn = 0, Ct = 0, Mi = "";
function gu(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: hu, column: xi, length: s, return: "" };
}
function Hi(e, t) {
  return WS(gu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function KS() {
  return Ct;
}
function GS() {
  return Ct = sn > 0 ? Ot(Mi, --sn) : 0, xi--, Ct === 10 && (xi = 1, hu--), Ct;
}
function fn() {
  return Ct = sn < m0 ? Ot(Mi, sn++) : 0, xi++, Ct === 10 && (xi = 1, hu++), Ct;
}
function or() {
  return Ot(Mi, sn);
}
function aa() {
  return sn;
}
function rl(e, t) {
  return Us(Mi, e, t);
}
function Vs(e) {
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
  return hu = xi = 1, m0 = Xn(Mi = e), sn = 0, [];
}
function g0(e) {
  return Mi = "", e;
}
function ua(e) {
  return p0(rl(sn - 1, Yd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function YS(e) {
  for (; (Ct = or()) && Ct < 33; )
    fn();
  return Vs(e) > 2 || Vs(Ct) > 3 ? "" : " ";
}
function QS(e, t) {
  for (; --t && fn() && !(Ct < 48 || Ct > 102 || Ct > 57 && Ct < 65 || Ct > 70 && Ct < 97); )
    ;
  return rl(e, aa() + (t < 6 && or() == 32 && fn() == 32));
}
function Yd(e) {
  for (; fn(); )
    switch (Ct) {
      case e:
        return sn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yd(Ct);
        break;
      case 40:
        e === 41 && Yd(e);
        break;
      case 92:
        fn();
        break;
    }
  return sn;
}
function XS(e, t) {
  for (; fn() && e + Ct !== 57; )
    if (e + Ct === 84 && or() === 47)
      break;
  return "/*" + rl(t, sn - 1) + "*" + mu(e === 47 ? e : fn());
}
function qS(e) {
  for (; !Vs(or()); )
    fn();
  return rl(e, sn);
}
function ZS(e) {
  return g0(ca("", null, null, null, [""], e = h0(e), 0, [0], e));
}
function ca(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, d = 0, p = s, y = 0, f = 0, v = 0, S = 1, C = 1, g = 1, m = 0, b = "", w = o, E = i, k = r, R = b; C; )
    switch (v = m, m = fn()) {
      case 40:
        if (v != 108 && Ot(R, p - 1) == 58) {
          Gd(R += ze(ua(m), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += ua(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += YS(v);
        break;
      case 92:
        R += QS(aa() - 1, 7);
        continue;
      case 47:
        switch (or()) {
          case 42:
          case 47:
            jl(JS(XS(fn(), aa()), t, n), a);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * S:
        l[u++] = Xn(R) * g;
      case 125 * S:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            C = 0;
          case 59 + d:
            g == -1 && (R = ze(R, /\f/g, "")), f > 0 && Xn(R) - p && jl(f > 32 ? mh(R + ";", r, n, p - 1) : mh(ze(R, " ", "") + ";", r, n, p - 2), a);
            break;
          case 59:
            R += ";";
          default:
            if (jl(k = ph(R, t, n, u, d, o, l, b, w = [], E = [], p), i), m === 123)
              if (d === 0)
                ca(R, t, k, k, w, i, p, l, E);
              else
                switch (y === 99 && Ot(R, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ca(e, k, k, r && jl(ph(e, k, k, 0, 0, o, l, b, o, w = [], p), E), o, E, p, l, r ? w : E);
                    break;
                  default:
                    ca(R, k, k, k, [""], E, 0, l, E);
                }
        }
        u = d = f = 0, S = g = 1, b = R = "", p = s;
        break;
      case 58:
        p = 1 + Xn(R), f = v;
      default:
        if (S < 1) {
          if (m == 123)
            --S;
          else if (m == 125 && S++ == 0 && GS() == 125)
            continue;
        }
        switch (R += mu(m), m * S) {
          case 38:
            g = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[u++] = (Xn(R) - 1) * g, g = 1;
            break;
          case 64:
            or() === 45 && (R += ua(fn())), y = or(), d = p = Xn(b = R += qS(aa())), m++;
            break;
          case 45:
            v === 45 && Xn(R) == 2 && (S = 0);
        }
    }
  return i;
}
function ph(e, t, n, r, o, i, s, l, a, u, d) {
  for (var p = o - 1, y = o === 0 ? i : [""], f = mp(y), v = 0, S = 0, C = 0; v < r; ++v)
    for (var g = 0, m = Us(e, p + 1, p = DS(S = s[v])), b = e; g < f; ++g)
      (b = p0(S > 0 ? y[g] + " " + m : ze(m, /&\f/g, y[g]))) && (a[C++] = b);
  return gu(e, t, n, o === 0 ? fp : l, a, u, d);
}
function JS(e, t, n) {
  return gu(e, t, n, d0, mu(KS()), Us(e, 2, -2), 0);
}
function mh(e, t, n, r) {
  return gu(e, t, n, pp, Us(e, 0, r), Us(e, r + 1, -1), r);
}
function ui(e, t) {
  for (var n = "", r = mp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function ew(e, t, n, r) {
  switch (e.type) {
    case FS:
      if (e.children.length) break;
    case _S:
    case pp:
      return e.return = e.return || e.value;
    case d0:
      return "";
    case f0:
      return e.return = e.value + "{" + ui(e.children, r) + "}";
    case fp:
      e.value = e.props.join(",");
  }
  return Xn(n = ui(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function tw(e) {
  var t = mp(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function nw(e) {
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
var rw = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = or(), o === 38 && i === 12 && (n[r] = 1), !Vs(i); )
    fn();
  return rl(t, sn);
}, ow = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Vs(o)) {
      case 0:
        o === 38 && or() === 12 && (n[r] = 1), t[r] += rw(sn - 1, n, r);
        break;
      case 2:
        t[r] += ua(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = or() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += mu(o);
    }
  while (o = fn());
  return t;
}, iw = function(t, n) {
  return g0(ow(h0(t), n));
}, hh = /* @__PURE__ */ new WeakMap(), sw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !hh.get(r)) && !o) {
      hh.set(t, !0);
      for (var i = [], s = iw(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + " " + s[a];
    }
  }
}, lw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function v0(e, t) {
  switch (US(e, t)) {
    case 5103:
      return Ne + "print-" + e + e;
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
      return Ne + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ne + e + _a + e + Ft + e + e;
    case 6828:
    case 4268:
      return Ne + e + Ft + e + e;
    case 6165:
      return Ne + e + Ft + "flex-" + e + e;
    case 5187:
      return Ne + e + ze(e, /(\w+).+(:[^]+)/, Ne + "box-$1$2" + Ft + "flex-$1$2") + e;
    case 5443:
      return Ne + e + Ft + "flex-item-" + ze(e, /flex-|-self/, "") + e;
    case 4675:
      return Ne + e + Ft + "flex-line-pack" + ze(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ne + e + Ft + ze(e, "shrink", "negative") + e;
    case 5292:
      return Ne + e + Ft + ze(e, "basis", "preferred-size") + e;
    case 6060:
      return Ne + "box-" + ze(e, "-grow", "") + Ne + e + Ft + ze(e, "grow", "positive") + e;
    case 4554:
      return Ne + ze(e, /([^-])(transform)/g, "$1" + Ne + "$2") + e;
    case 6187:
      return ze(ze(ze(e, /(zoom-|grab)/, Ne + "$1"), /(image-set)/, Ne + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ze(e, /(image-set\([^]*)/, Ne + "$1$`$1");
    case 4968:
      return ze(ze(e, /(.+:)(flex-)?(.*)/, Ne + "box-pack:$3" + Ft + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ne + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ze(e, /(.+)-inline(.+)/, Ne + "$1$2") + e;
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
      if (Xn(e) - 1 - t > 6) switch (Ot(e, t + 1)) {
        case 109:
          if (Ot(e, t + 4) !== 45) break;
        case 102:
          return ze(e, /(.+:)(.+)-([^]+)/, "$1" + Ne + "$2-$3$1" + _a + (Ot(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Gd(e, "stretch") ? v0(ze(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ot(e, t + 1) !== 115) break;
    case 6444:
      switch (Ot(e, Xn(e) - 3 - (~Gd(e, "!important") && 10))) {
        case 107:
          return ze(e, ":", ":" + Ne) + e;
        case 101:
          return ze(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ne + (Ot(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ne + "$2$3$1" + Ft + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ot(e, t + 11)) {
        case 114:
          return Ne + e + Ft + ze(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ne + e + Ft + ze(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ne + e + Ft + ze(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ne + e + Ft + e + e;
  }
  return e;
}
var aw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case pp:
      t.return = v0(t.value, t.length);
      break;
    case f0:
      return ui([Hi(t, {
        value: ze(t.value, "@", "@" + Ne)
      })], o);
    case fp:
      if (t.length) return HS(t.props, function(i) {
        switch (VS(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ui([Hi(t, {
              props: [ze(i, /:(read-\w+)/, ":" + _a + "$1")]
            })], o);
          case "::placeholder":
            return ui([Hi(t, {
              props: [ze(i, /:(plac\w+)/, ":" + Ne + "input-$1")]
            }), Hi(t, {
              props: [ze(i, /:(plac\w+)/, ":" + _a + "$1")]
            }), Hi(t, {
              props: [ze(i, /:(plac\w+)/, Ft + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, uw = [aw], cw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(S) {
      var C = S.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || uw, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(S) {
      for (var C = S.getAttribute("data-emotion").split(" "), g = 1; g < C.length; g++)
        i[C[g]] = !0;
      l.push(S);
    }
  );
  var a, u = [sw, lw];
  {
    var d, p = [ew, nw(function(S) {
      d.insert(S);
    })], y = tw(u.concat(o, p)), f = function(C) {
      return ui(ZS(C), y);
    };
    a = function(C, g, m, b) {
      d = m, f(C ? C + "{" + g.styles + "}" : g.styles), b && (v.inserted[g.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new BS({
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
}, x0 = { exports: {} }, He = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt = typeof Symbol == "function" && Symbol.for, hp = Mt ? Symbol.for("react.element") : 60103, gp = Mt ? Symbol.for("react.portal") : 60106, yu = Mt ? Symbol.for("react.fragment") : 60107, vu = Mt ? Symbol.for("react.strict_mode") : 60108, xu = Mt ? Symbol.for("react.profiler") : 60114, bu = Mt ? Symbol.for("react.provider") : 60109, Su = Mt ? Symbol.for("react.context") : 60110, yp = Mt ? Symbol.for("react.async_mode") : 60111, wu = Mt ? Symbol.for("react.concurrent_mode") : 60111, Cu = Mt ? Symbol.for("react.forward_ref") : 60112, ku = Mt ? Symbol.for("react.suspense") : 60113, dw = Mt ? Symbol.for("react.suspense_list") : 60120, Tu = Mt ? Symbol.for("react.memo") : 60115, Ru = Mt ? Symbol.for("react.lazy") : 60116, fw = Mt ? Symbol.for("react.block") : 60121, pw = Mt ? Symbol.for("react.fundamental") : 60117, mw = Mt ? Symbol.for("react.responder") : 60118, hw = Mt ? Symbol.for("react.scope") : 60119;
function yn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case hp:
        switch (e = e.type, e) {
          case yp:
          case wu:
          case yu:
          case xu:
          case vu:
          case ku:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Su:
              case Cu:
              case Ru:
              case Tu:
              case bu:
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
function b0(e) {
  return yn(e) === wu;
}
He.AsyncMode = yp;
He.ConcurrentMode = wu;
He.ContextConsumer = Su;
He.ContextProvider = bu;
He.Element = hp;
He.ForwardRef = Cu;
He.Fragment = yu;
He.Lazy = Ru;
He.Memo = Tu;
He.Portal = gp;
He.Profiler = xu;
He.StrictMode = vu;
He.Suspense = ku;
He.isAsyncMode = function(e) {
  return b0(e) || yn(e) === yp;
};
He.isConcurrentMode = b0;
He.isContextConsumer = function(e) {
  return yn(e) === Su;
};
He.isContextProvider = function(e) {
  return yn(e) === bu;
};
He.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hp;
};
He.isForwardRef = function(e) {
  return yn(e) === Cu;
};
He.isFragment = function(e) {
  return yn(e) === yu;
};
He.isLazy = function(e) {
  return yn(e) === Ru;
};
He.isMemo = function(e) {
  return yn(e) === Tu;
};
He.isPortal = function(e) {
  return yn(e) === gp;
};
He.isProfiler = function(e) {
  return yn(e) === xu;
};
He.isStrictMode = function(e) {
  return yn(e) === vu;
};
He.isSuspense = function(e) {
  return yn(e) === ku;
};
He.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === yu || e === wu || e === xu || e === vu || e === ku || e === dw || typeof e == "object" && e !== null && (e.$$typeof === Ru || e.$$typeof === Tu || e.$$typeof === bu || e.$$typeof === Su || e.$$typeof === Cu || e.$$typeof === pw || e.$$typeof === mw || e.$$typeof === hw || e.$$typeof === fw);
};
He.typeOf = yn;
x0.exports = He;
var gw = x0.exports, S0 = gw, yw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, w0 = {};
w0[S0.ForwardRef] = yw;
w0[S0.Memo] = vw;
var xw = !0;
function C0(e, t, n) {
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
  xw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
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
function bw(e) {
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
}, ww = /[A-Z]|^ms/g, Cw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, k0 = function(t) {
  return t.charCodeAt(1) === 45;
}, gh = function(t) {
  return t != null && typeof t != "boolean";
}, _c = /* @__PURE__ */ y0(function(e) {
  return k0(e) ? e : e.replace(ww, "-$&").toLowerCase();
}), yh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Cw, function(r, o, i) {
          return qn = {
            name: o,
            styles: i,
            next: qn
          }, o;
        });
  }
  return Sw[t] !== 1 && !k0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
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
      return kw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = qn, u = n(e);
        return qn = a, Hs(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function kw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Hs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : gh(l) && (r += _c(i) + ":" + yh(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          gh(s[a]) && (r += _c(i) + ":" + yh(i, s[a]) + ";");
      else {
        var u = Hs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += _c(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var vh = /label:\s*([^\s;{]+)\s*(;|$)/g, qn;
function ol(e, t, n) {
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
  vh.lastIndex = 0;
  for (var u = "", d; (d = vh.exec(o)) !== null; )
    u += "-" + d[1];
  var p = bw(o) + u;
  return {
    name: p,
    styles: o,
    next: qn
  };
}
var Tw = function(t) {
  return t();
}, T0 = ma.useInsertionEffect ? ma.useInsertionEffect : !1, R0 = T0 || Tw, xh = T0 || h.useLayoutEffect, E0 = /* @__PURE__ */ h.createContext(
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
E0.Provider;
var bp = function(t) {
  return /* @__PURE__ */ h.forwardRef(function(n, r) {
    var o = h.useContext(E0);
    return t(n, o, r);
  });
}, il = /* @__PURE__ */ h.createContext({}), Sp = {}.hasOwnProperty, Qd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Rw = function(t, n) {
  var r = {};
  for (var o in n)
    Sp.call(n, o) && (r[o] = n[o]);
  return r[Qd] = t, r;
}, Ew = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return vp(n, r, o), R0(function() {
    return xp(n, r, o);
  }), null;
}, Pw = /* @__PURE__ */ bp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Qd], i = [r], s = "";
  typeof e.className == "string" ? s = C0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = ol(i, void 0, h.useContext(il));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e)
    Sp.call(e, u) && u !== "css" && u !== Qd && (a[u] = e[u]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Ew, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ h.createElement(o, a));
}), Iw = Pw, bh = function(t, n) {
  var r = arguments;
  if (n == null || !Sp.call(n, "css"))
    return h.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Iw, i[1] = Rw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return h.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(bh || (bh = {}));
var Mw = /* @__PURE__ */ bp(function(e, t) {
  var n = e.styles, r = ol([n], void 0, h.useContext(il)), o = h.useRef();
  return xh(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), xh(function() {
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
function Ks() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ol(t);
}
function sl() {
  var e = Ks.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var $w = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jw = /* @__PURE__ */ y0(
  function(e) {
    return $w.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ow = jw, Aw = function(t) {
  return t !== "theme";
}, Sh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Ow : Aw;
}, wh = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Nw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return vp(n, r, o), R0(function() {
    return xp(n, r, o);
  }), null;
}, Lw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = wh(t, n, r), a = l || Sh(o), u = !a("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      var y = d[0];
      p.push(y[0]);
      for (var f = d.length, v = 1; v < f; v++)
        p.push(d[v], y[v]);
    }
    var S = bp(function(C, g, m) {
      var b = u && C.as || o, w = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var R in C)
          k[R] = C[R];
        k.theme = h.useContext(il);
      }
      typeof C.className == "string" ? w = C0(g.registered, E, C.className) : C.className != null && (w = C.className + " ");
      var T = ol(p.concat(E), g.registered, k);
      w += g.key + "-" + T.name, s !== void 0 && (w += " " + s);
      var I = u && l === void 0 ? Sh(b) : a, N = {};
      for (var $ in C)
        u && $ === "as" || I($) && (N[$] = C[$]);
      return N.className = w, m && (N.ref = m), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Nw, {
        cache: g,
        serialized: T,
        isStringTag: typeof b == "string"
      }), /* @__PURE__ */ h.createElement(b, N));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = p, S.__emotion_forwardProp = l, Object.defineProperty(S, "toString", {
      value: function() {
        return "." + s;
      }
    }), S.withComponent = function(C, g) {
      var m = e(C, Kd({}, n, g, {
        shouldForwardProp: wh(S, g, !0)
      }));
      return m.apply(void 0, p);
    }, S;
  };
}, zw = [
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
], Xd = Lw.bind(null);
zw.forEach(function(e) {
  Xd[e] = Xd(e);
});
function Bw(e) {
  return e == null || Object.keys(e).length === 0;
}
function P0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Bw(o) ? n : o) : t;
  return /* @__PURE__ */ c.jsx(Mw, {
    styles: r
  });
}
function I0(e, t) {
  return Xd(e, t);
}
function _w(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Ch = [];
function Vr(e) {
  return Ch[0] = e, ol(Ch);
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
var wp = Symbol.for("react.transitional.element"), Cp = Symbol.for("react.portal"), Eu = Symbol.for("react.fragment"), Pu = Symbol.for("react.strict_mode"), Iu = Symbol.for("react.profiler"), Mu = Symbol.for("react.consumer"), $u = Symbol.for("react.context"), ju = Symbol.for("react.forward_ref"), Ou = Symbol.for("react.suspense"), Au = Symbol.for("react.suspense_list"), Nu = Symbol.for("react.memo"), Lu = Symbol.for("react.lazy"), Fw = Symbol.for("react.view_transition"), Dw = Symbol.for("react.client.reference");
function $n(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case wp:
        switch (e = e.type, e) {
          case Eu:
          case Iu:
          case Pu:
          case Ou:
          case Au:
          case Fw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case $u:
              case ju:
              case Lu:
              case Nu:
                return e;
              case Mu:
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
Qe.ContextConsumer = Mu;
Qe.ContextProvider = $u;
Qe.Element = wp;
Qe.ForwardRef = ju;
Qe.Fragment = Eu;
Qe.Lazy = Lu;
Qe.Memo = Nu;
Qe.Portal = Cp;
Qe.Profiler = Iu;
Qe.StrictMode = Pu;
Qe.Suspense = Ou;
Qe.SuspenseList = Au;
Qe.isContextConsumer = function(e) {
  return $n(e) === Mu;
};
Qe.isContextProvider = function(e) {
  return $n(e) === $u;
};
Qe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wp;
};
Qe.isForwardRef = function(e) {
  return $n(e) === ju;
};
Qe.isFragment = function(e) {
  return $n(e) === Eu;
};
Qe.isLazy = function(e) {
  return $n(e) === Lu;
};
Qe.isMemo = function(e) {
  return $n(e) === Nu;
};
Qe.isPortal = function(e) {
  return $n(e) === Cp;
};
Qe.isProfiler = function(e) {
  return $n(e) === Iu;
};
Qe.isStrictMode = function(e) {
  return $n(e) === Pu;
};
Qe.isSuspense = function(e) {
  return $n(e) === Ou;
};
Qe.isSuspenseList = function(e) {
  return $n(e) === Au;
};
Qe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Eu || e === Iu || e === Pu || e === Ou || e === Au || typeof e == "object" && e !== null && (e.$$typeof === Lu || e.$$typeof === Nu || e.$$typeof === $u || e.$$typeof === Mu || e.$$typeof === ju || e.$$typeof === Dw || e.getModuleId !== void 0);
};
Qe.typeOf = $n;
M0.exports = Qe;
var $0 = M0.exports;
function gr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function j0(e) {
  if (/* @__PURE__ */ h.isValidElement(e) || $0.isValidElementType(e) || !gr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = j0(e[n]);
  }), t;
}
function It(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return gr(e) && gr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ h.isValidElement(t[o]) || $0.isValidElementType(t[o]) ? r[o] = t[o] : gr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && gr(e[o]) ? r[o] = It(e[o], t[o], n) : n.clone ? r[o] = gr(t[o]) ? j0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Ww = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function O0(e) {
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
  } = e, i = Ww(t), s = Object.keys(i);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function a(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function u(f, v) {
    const S = s.indexOf(v);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(S !== -1 && typeof t[s[S]] == "number" ? t[s[S]] : v) - r / 100}${n})`;
  }
  function d(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : l(f);
  }
  function p(f) {
    const v = s.indexOf(f);
    return v === 0 ? l(s[1]) : v === s.length - 1 ? a(s[v]) : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  const y = [];
  for (let f = 0; f < s.length; f += 1)
    y.push(l(s[f]));
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: u,
    only: d,
    not: p,
    unit: n,
    internal_mediaKeys: y,
    ...o
  };
}
const kh = /min-width:\s*([0-9.]+)/;
function Th(e, t) {
  if (!e.containerQueries || !Uw(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(kh)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(kh)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function Uw(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function A0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Vw(e, t) {
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
const Kw = {
  borderRadius: 4
};
function N0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function ci(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return qw(t) ? t : Zw(e) ? bi(t) : n && r ? Qw(e, t) : n !== r ? bi(t) : Jw(e, t);
}
function Gw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = bi(e[t]);
  return r;
}
function Yw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = bi(e[n]));
  return t;
}
function Qw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = bi(t[r]);
  return e;
}
function Xw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function qw(e) {
  return typeof e != "object" || e === null;
}
function Zw(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function bi(e) {
  return Xw(e) ? Array.isArray(e) ? Gw(e) : Yw(e) : e;
}
function Jw(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = ci(e[n], t[n]) : e[n] = bi(t[n]));
  return e;
}
const eC = {}, zu = {
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
}, Fa = O0({
  values: zu
}), tC = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : zu[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Gr(e, t, n) {
  const r = {};
  return Bu(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : ci(r, l);
  });
}
function Bu(e, t, n, r) {
  if (t ?? (t = eC), Array.isArray(n)) {
    const o = t.breakpoints ?? Fa;
    for (let i = 0; i < n.length; i += 1)
      Fc(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? Fa, i = o.values ?? zu;
    for (const s in n)
      if (A0(o.keys, s)) {
        const l = Vw(t.containerQueries ? t : tC, s);
        l && Fc(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        Fc(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function Fc(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function L0(e = Fa) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function qd(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    N0(t[o]) && delete t[o];
  }
  return t;
}
function nC(e, ...t) {
  const r = [L0(e), ...t].reduce((o, i) => It(o, i), {});
  return qd(e, r);
}
function rC(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function Dc(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || rC(t, n), i = Object.keys(o);
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
function oC(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (A0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function ue(e) {
  if (typeof e != "string")
    throw new Error(kr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function z0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = _u(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function _u(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = Rh(e.vars, o, r);
    if (i != null)
      return i;
  }
  return Rh(e, o, r);
}
function Rh(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : ue(s)}`;
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
    const l = s[t], a = s.theme, u = _u(a, r) || {};
    return Gr(s, l, (p) => {
      const y = z0(u, o, p, t);
      return n === !1 ? y : {
        [n]: y
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const iC = {
  internal_cache: {}
}, Da = {
  m: "margin",
  p: "padding"
}, Eh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ph = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Gs = {};
for (const e in Da)
  Gs[e] = [Da[e]];
for (const e in Da)
  for (const t in Eh) {
    const n = Da[e], r = Eh[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Gs[e + t] = o;
  }
for (const e in Ph)
  Gs[e] = Gs[Ph[e]];
const kp = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Tp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...kp, ...Tp];
function ll(e, t, n, r) {
  const o = _u(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Fu(e) {
  return ll(e, "spacing", 8);
}
function Co(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Ih = [""];
function B0(e, t) {
  var i;
  const n = e.theme ?? iC, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Fu(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = Gs[s] ?? (Ih[0] = s, Ih), a = e[s];
    Bu(o, e.theme, a, (u, d) => {
      const p = u ? o[u] : o;
      for (let y = 0; y < l.length; y += 1)
        p[l[y]] = Co(r, d);
    });
  }
  return o;
}
function Rp(e) {
  return B0(e, kp);
}
Rp.propTypes = {};
Rp.filterProps = kp;
const St = Rp;
function Ep(e) {
  return B0(e, Tp);
}
Ep.propTypes = {};
Ep.filterProps = Tp;
const wt = Ep;
function _0(e = 8, t = Fu({
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
function Du(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && ci(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function wn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function jn(e, t) {
  return bt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const sC = jn("border", wn), lC = jn("borderTop", wn), aC = jn("borderRight", wn), uC = jn("borderBottom", wn), cC = jn("borderLeft", wn), dC = jn("borderColor"), fC = jn("borderTopColor"), pC = jn("borderRightColor"), mC = jn("borderBottomColor"), hC = jn("borderLeftColor"), gC = jn("outline", wn), yC = jn("outlineColor"), Wu = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ll(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Co(t, r)
    });
    return Gr(e, e.borderRadius, n);
  }
  return null;
};
Wu.propTypes = {};
Wu.filterProps = ["borderRadius"];
Du(sC, lC, aC, uC, cC, dC, fC, pC, mC, hC, Wu, gC, yC);
const Uu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ll(e.theme, "spacing", 8), n = (r) => ({
      gap: Co(t, r)
    });
    return Gr(e, e.gap, n);
  }
  return null;
};
Uu.propTypes = {};
Uu.filterProps = ["gap"];
const Vu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ll(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Co(t, r)
    });
    return Gr(e, e.columnGap, n);
  }
  return null;
};
Vu.propTypes = {};
Vu.filterProps = ["columnGap"];
const Hu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ll(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Co(t, r)
    });
    return Gr(e, e.rowGap, n);
  }
  return null;
};
Hu.propTypes = {};
Hu.filterProps = ["rowGap"];
const vC = bt({
  prop: "gridColumn"
}), xC = bt({
  prop: "gridRow"
}), bC = bt({
  prop: "gridAutoFlow"
}), SC = bt({
  prop: "gridAutoColumns"
}), wC = bt({
  prop: "gridAutoRows"
}), CC = bt({
  prop: "gridTemplateColumns"
}), kC = bt({
  prop: "gridTemplateRows"
}), TC = bt({
  prop: "gridTemplateAreas"
}), RC = bt({
  prop: "gridArea"
});
Du(Uu, Vu, Hu, vC, xC, bC, SC, wC, CC, kC, TC, RC);
function di(e, t) {
  return t === "grey" ? t : e;
}
const EC = bt({
  prop: "color",
  themeKey: "palette",
  transform: di
}), PC = bt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: di
}), IC = bt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: di
});
Du(EC, PC, IC);
const MC = zu;
function un(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const $C = bt({
  prop: "width",
  transform: un
}), Pp = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || MC[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: un(n)
      };
    };
    return Gr(e, e.maxWidth, t);
  }
  return null;
};
Pp.filterProps = ["maxWidth"];
const jC = bt({
  prop: "minWidth",
  transform: un
}), OC = bt({
  prop: "height",
  transform: un
}), AC = bt({
  prop: "maxHeight",
  transform: un
}), NC = bt({
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
const LC = bt({
  prop: "boxSizing"
});
Du($C, Pp, jC, OC, AC, NC, LC);
const Ku = {
  // borders
  border: {
    themeKey: "borders",
    transform: wn
  },
  borderTop: {
    themeKey: "borders",
    transform: wn
  },
  borderRight: {
    themeKey: "borders",
    transform: wn
  },
  borderBottom: {
    themeKey: "borders",
    transform: wn
  },
  borderLeft: {
    themeKey: "borders",
    transform: wn
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
    transform: wn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Wu
  },
  // palette
  color: {
    themeKey: "palette",
    transform: di
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: di
  },
  backgroundColor: {
    themeKey: "palette",
    transform: di
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
    style: Uu
  },
  rowGap: {
    style: Hu
  },
  columnGap: {
    style: Vu
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
    style: Pp
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
}, zC = {};
function BC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = zC,
      nested: o
    } = t, i = r.unstable_sxConfig ?? Ku, s = {
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
      const d = r.breakpoints ?? Fa, p = L0(d);
      for (const y in u) {
        const f = _C(u[y], r);
        if (f != null) {
          if (typeof f != "object") {
            Mh(p, y, f, r, i);
            continue;
          }
          if (i[y]) {
            Mh(p, y, f, r, i);
            continue;
          }
          oC(d, f) ? Bu(p, t.theme, f, (v, S) => {
            p[v][y] = S;
          }) : (s.sx = f, p[y] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": Th(r, qd(d, p))
      } : Th(r, qd(d, p));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const ko = BC();
function Mh(e, t, n, r, o) {
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
    ci(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: u
  } = i, d = _u(r, s);
  Bu(e, r, n, (p, y) => {
    const f = z0(d, u, y, t);
    a === !1 ? ci(p ? e[p] : e, f) : p ? e[p][a] = f : e[a] = f;
  });
}
function _C(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function FC(e, t) {
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
function Gu(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = O0(n), a = _0(o);
  let u = It({
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
      ...Kw,
      ...i
    }
  }, s);
  return u = Hw(u), u.applyStyles = FC, u = t.reduce((d, p) => It(d, p), u), u.unstable_sxConfig = {
    ...Ku,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(p) {
    return ko({
      sx: p,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function DC(e) {
  return Object.keys(e).length === 0;
}
function Ip(e = null) {
  const t = h.useContext(il);
  return !t || DC(t) ? e : t;
}
const WC = Gu();
function Yu(e = WC) {
  return Ip(e);
}
function Wc(e) {
  const t = Vr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function F0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Yu(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Wc(typeof s == "function" ? s(o) : s)) : i = Wc(i)), /* @__PURE__ */ c.jsx(P0, {
    styles: i
  });
}
const $h = (e) => e, UC = () => {
  let e = $h;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = $h;
    }
  };
}, D0 = UC();
function W0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = W0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function te() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = W0(e)) && (r && (r += " "), r += t);
  return r;
}
function VC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = I0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(ko);
  return /* @__PURE__ */ h.forwardRef(function(a, u) {
    const d = Yu(n), {
      className: p,
      component: y = "div",
      ...f
    } = a;
    return /* @__PURE__ */ c.jsx(i, {
      as: y,
      ref: u,
      className: te(p, o ? o(r) : r),
      theme: t && d[t] || d,
      ...f
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
function ye(e, t, n = "Mui") {
  const r = HC[t];
  return r ? `${n}-${r}` : `${D0.generate(e)}-${t}`;
}
function pe(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ye(e, o, n);
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
const KC = Gu();
function Uc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function po(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function GC(e) {
  return e ? (t, n) => n[e] : null;
}
function YC(e, t, n) {
  e.theme = N0(e.theme) ? n : e.theme[t] || e.theme;
}
function da(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => da(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? po(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? po(Vr(s), n) : s;
    }
    return V0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? po(Vr(r.style), n) : r.style : n ? po(Vr(r), n) : r;
}
function V0(e, t, n = [], r = void 0) {
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
    }), n.push(r ? po(Vr(l.style(o)), r) : l.style(o))) : n.push(r ? po(Vr(l.style), r) : l.style);
  }
  return n;
}
function H0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = KC,
    rootShouldForwardProp: r = Uc,
    slotShouldForwardProp: o = Uc
  } = e;
  function i(l) {
    YC(l, t, n);
  }
  return (l, a = {}) => {
    _w(l, (k) => k.filter((R) => R !== ko));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: p,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = GC(qC(d)),
      ...v
    } = a, S = u && u.startsWith("Mui") || d ? "components" : "custom", C = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), g = y || !1;
    let m = Uc;
    d === "Root" || d === "root" ? m = r : d ? m = o : XC(l) && (m = void 0);
    const b = I0(l, {
      shouldForwardProp: m,
      label: QC(),
      ...v
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(T) {
          return da(T, k, T.theme.modularCssLayers ? S : void 0);
        };
      if (gr(k)) {
        const R = U0(k);
        return function(I) {
          return R.variants ? da(I, R, I.theme.modularCssLayers ? S : void 0) : I.theme.modularCssLayers ? po(R.style, S) : R.style;
        };
      }
      return k;
    }, E = (...k) => {
      const R = [], T = k.map(w), I = [];
      if (R.push(i), u && f && I.push(function(x) {
        var A, M;
        const P = (M = (A = x.theme.components) == null ? void 0 : A[u]) == null ? void 0 : M.styleOverrides;
        if (!P)
          return null;
        const O = {};
        for (const z in P)
          O[z] = da(x, P[z], x.theme.modularCssLayers ? "theme" : void 0);
        return f(x, O);
      }), u && !C && I.push(function(x) {
        var O, A;
        const j = x.theme, P = (A = (O = j == null ? void 0 : j.components) == null ? void 0 : O[u]) == null ? void 0 : A.variants;
        return P ? V0(x, P, [], x.theme.modularCssLayers ? "theme" : void 0) : null;
      }), g || I.push(ko), Array.isArray(T[0])) {
        const L = T.shift(), x = new Array(R.length).fill(""), j = new Array(I.length).fill("");
        let P;
        P = [...x, ...L, ...j], P.raw = [...x, ...L.raw, ...j], R.unshift(P);
      }
      const N = [...R, ...T, ...I], $ = b(...N);
      return l.muiName && ($.muiName = l.muiName), $;
    };
    return b.withConfig && (E.withConfig = b.withConfig), E;
  };
}
function QC(e, t) {
  return void 0;
}
function XC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function qC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const ZC = H0();
function Si(e, t, n = !1) {
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
              const u = a, d = s[u], p = l[u];
              typeof d == "function" || typeof p == "function" ? r[i][u] = (...y) => Si((typeof d == "function" ? d(...y) : d) ?? {}, (typeof p == "function" ? p(...y) : p) ?? {}, n) : r[i][u] = Si(d ?? {}, p ?? {}, n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = te(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function JC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Si(t.components[n].defaultProps, r);
}
function e2(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Yu(r);
  return o && (i = i[o] || i), JC({
    theme: i,
    name: n,
    props: t
  });
}
const ct = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
function t2(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Mp(e, t = 0, n = 1) {
  return t2(e, t, n);
}
function n2(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Yr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Yr(n2(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(kr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(kr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const r2 = (e) => {
  const t = Yr(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ls = (e, t) => {
  try {
    return r2(e);
  } catch {
    return e;
  }
};
function Qu(e) {
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
  e = Yr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, d = (u + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Qu({
    type: l,
    values: a
  });
}
function Zd(e) {
  e = Yr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Yr(K0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function o2(e, t) {
  const n = Zd(e), r = Zd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ys(e, t) {
  return e = Yr(e), t = Mp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Qu(e);
}
function no(e, t, n) {
  try {
    return Ys(e, t);
  } catch {
    return e;
  }
}
function Xu(e, t) {
  if (e = Yr(e), t = Mp(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Qu(e);
}
function We(e, t, n) {
  try {
    return Xu(e, t);
  } catch {
    return e;
  }
}
function qu(e, t) {
  if (e = Yr(e), t = Mp(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Qu(e);
}
function Ue(e, t, n) {
  try {
    return qu(e, t);
  } catch {
    return e;
  }
}
function Jd(e, t = 0.15) {
  return Zd(e) > 0.5 ? Xu(e, t) : qu(e, t);
}
function Ol(e, t, n) {
  try {
    return Jd(e, t);
  } catch {
    return e;
  }
}
const G0 = /* @__PURE__ */ h.createContext(null);
function $p() {
  return h.useContext(G0);
}
const i2 = typeof Symbol == "function" && Symbol.for, s2 = i2 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function l2(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function a2(e) {
  const {
    children: t,
    theme: n
  } = e, r = $p(), o = h.useMemo(() => {
    const i = r === null ? {
      ...n
    } : l2(r, n);
    return i != null && (i[s2] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ c.jsx(G0.Provider, {
    value: o,
    children: t
  });
}
const Y0 = /* @__PURE__ */ h.createContext();
function u2({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(Y0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const Zu = () => h.useContext(Y0) ?? !1, Q0 = /* @__PURE__ */ h.createContext(void 0);
function c2({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ c.jsx(Q0.Provider, {
    value: e,
    children: t
  });
}
function d2(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Si(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Si(o, r, t.components.mergeClassNameAndStyle) : r;
}
function f2({
  props: e,
  name: t
}) {
  const n = h.useContext(Q0);
  return d2({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let jh = 0;
function p2(e) {
  const [t, n] = h.useState(e), r = e || t;
  return h.useEffect(() => {
    t == null && (jh += 1, n(`mui-${jh}`));
  }, [t]), r;
}
const m2 = {
  ...ma
}, Oh = m2.useId;
function Tr(e) {
  if (Oh !== void 0) {
    const t = Oh();
    return e ?? t;
  }
  return p2(e);
}
function h2(e) {
  const t = Ip(), n = Tr() || "", {
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
  }, [o, n]), o ? /* @__PURE__ */ c.jsx(F0, {
    styles: o
  }) : null;
}
const Ah = {};
function Nh(e, t, n, r = !1) {
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
function X0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Ip(Ah), i = $p() || Ah, s = Nh(r, o, n), l = Nh(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", u = h2(s);
  return /* @__PURE__ */ c.jsx(a2, {
    theme: l,
    children: /* @__PURE__ */ c.jsx(il.Provider, {
      value: s,
      children: /* @__PURE__ */ c.jsx(u2, {
        value: a,
        children: /* @__PURE__ */ c.jsxs(c2, {
          value: r ? s[r].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const Lh = {
  theme: void 0
};
function g2(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Lh.theme = o.theme, i = U0(e(Lh)), t = i, n = o.theme), i;
  };
}
const jp = "mode", Op = "color-scheme", y2 = "data-color-scheme";
function v2(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = jp,
    colorSchemeStorageKey: i = Op,
    attribute: s = y2,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let u = "", d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const y = d.substring(1);
    u += `${l}.classList.remove('${y}'.replace('%s', light), '${y}'.replace('%s', dark));
      ${l}.classList.add('${y}'.replace('%s', colorScheme));`;
  }
  const p = d.match(/\[([^[\]]+)\]/);
  if (p) {
    const [y, f] = p[1].split("=");
    f || (u += `${l}.removeAttribute('${y}'.replace('%s', light));
      ${l}.removeAttribute('${y}'.replace('%s', dark));`), u += `
      ${l}.setAttribute('${y}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
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
function x2() {
}
const b2 = ({
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
      return x2;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function Vc() {
}
function zh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function q0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function S2(e) {
  return q0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function w2(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = jp,
    colorSchemeStorageKey: s = Op,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = b2,
    noSsr: u = !1
  } = e, d = o.join(","), p = o.length > 1, y = h.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), f = h.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), v = h.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [S, C] = h.useState(() => {
    const T = (y == null ? void 0 : y.get(t)) || t, I = (f == null ? void 0 : f.get(n)) || n, N = (v == null ? void 0 : v.get(r)) || r;
    return {
      mode: T,
      systemMode: zh(T),
      lightColorScheme: I,
      darkColorScheme: N
    };
  }), [g, m] = h.useState(u || !p);
  h.useEffect(() => {
    m(!0);
  }, []);
  const b = S2(S), w = h.useCallback((T) => {
    C((I) => {
      if (T === I.mode)
        return I;
      const N = T ?? t;
      return y == null || y.set(N), {
        ...I,
        mode: N,
        systemMode: zh(N)
      };
    });
  }, [y, t]), E = h.useCallback((T) => {
    T ? typeof T == "string" ? T && !d.includes(T) ? console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`) : C((I) => {
      const N = {
        ...I
      };
      return q0(I, ($) => {
        $ === "light" && (f == null || f.set(T), N.lightColorScheme = T), $ === "dark" && (v == null || v.set(T), N.darkColorScheme = T);
      }), N;
    }) : C((I) => {
      const N = {
        ...I
      }, $ = T.light === null ? n : T.light, L = T.dark === null ? r : T.dark;
      return $ && (d.includes($) ? (N.lightColorScheme = $, f == null || f.set($)) : console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`)), L && (d.includes(L) ? (N.darkColorScheme = L, v == null || v.set(L)) : console.error(`\`${L}\` does not exist in \`theme.colorSchemes\`.`)), N;
    }) : C((I) => (f == null || f.set(n), v == null || v.set(r), {
      ...I,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [d, f, v, n, r]), k = h.useCallback((T) => {
    S.mode === "system" && C((I) => {
      const N = T != null && T.matches ? "dark" : "light";
      return I.systemMode === N ? I : {
        ...I,
        systemMode: N
      };
    });
  }, [S.mode]), R = h.useRef(k);
  return R.current = k, h.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const T = (...N) => R.current(...N), I = window.matchMedia("(prefers-color-scheme: dark)");
    return I.addListener(T), T(I), () => {
      I.removeListener(T);
    };
  }, [p]), h.useEffect(() => {
    if (p) {
      const T = (y == null ? void 0 : y.subscribe(($) => {
        (!$ || ["light", "dark", "system"].includes($)) && w($ || t);
      })) || Vc, I = (f == null ? void 0 : f.subscribe(($) => {
        (!$ || d.match($)) && E({
          light: $
        });
      })) || Vc, N = (v == null ? void 0 : v.subscribe(($) => {
        (!$ || d.match($)) && E({
          dark: $
        });
      })) || Vc;
      return () => {
        T(), I(), N();
      };
    }
  }, [E, w, d, t, l, p, y, f, v]), {
    ...S,
    mode: g ? S.mode : void 0,
    systemMode: g ? S.systemMode : void 0,
    colorScheme: g ? b : void 0,
    setMode: w,
    setColorScheme: E
  };
}
const C2 = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function k2(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = jp,
    colorSchemeStorageKey: o = Op,
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
  }, u = /* @__PURE__ */ h.createContext(void 0), d = () => h.useContext(u) || a, p = {}, y = {};
  function f(g) {
    var ie, ce, se, Ae;
    const {
      children: m,
      theme: b,
      modeStorageKey: w = r,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: k = i,
      storageManager: R,
      storageWindow: T = typeof window > "u" ? void 0 : window,
      documentNode: I = typeof document > "u" ? void 0 : document,
      colorSchemeNode: N = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: $ = !1,
      disableStyleSheetGeneration: L = !1,
      defaultMode: x = "system",
      forceThemeRerender: j = !1,
      noSsr: P
    } = g, O = h.useRef(!1), A = $p(), M = h.useContext(u), z = !!M && !$, F = h.useMemo(() => b || (typeof n == "function" ? n() : n), [b]), W = F[t], D = W || F, {
      colorSchemes: Q = p,
      components: G = y,
      cssVarPrefix: X
    } = D, K = Object.keys(Q).filter((oe) => !!Q[oe]).join(","), q = h.useMemo(() => K.split(","), [K]), _ = typeof s == "string" ? s : s.light, ne = typeof s == "string" ? s : s.dark, re = Q[_] && Q[ne] ? x : ((ce = (ie = Q[D.defaultColorScheme]) == null ? void 0 : ie.palette) == null ? void 0 : ce.mode) || ((se = D.palette) == null ? void 0 : se.mode), {
      mode: ke,
      setMode: me,
      systemMode: de,
      lightColorScheme: fe,
      darkColorScheme: Me,
      colorScheme: Be,
      setColorScheme: Ee
    } = w2({
      supportedColorSchemes: q,
      defaultLightColorScheme: _,
      defaultDarkColorScheme: ne,
      modeStorageKey: w,
      colorSchemeStorageKey: E,
      defaultMode: re,
      storageManager: R,
      storageWindow: T,
      noSsr: P
    });
    let $e = ke, he = Be;
    z && ($e = M.mode, he = M.colorScheme);
    let je = he || D.defaultColorScheme;
    D.vars && !j && (je = D.defaultColorScheme);
    const et = h.useMemo(() => {
      var Ge;
      const oe = ((Ge = D.generateThemeVars) == null ? void 0 : Ge.call(D)) || D.vars, le = {
        ...D,
        components: G,
        colorSchemes: Q,
        cssVarPrefix: X,
        vars: oe
      };
      if (typeof le.generateSpacing == "function" && (le.spacing = le.generateSpacing()), je) {
        const rt = Q[je];
        rt && typeof rt == "object" && Object.keys(rt).forEach((pt) => {
          rt[pt] && typeof rt[pt] == "object" ? le[pt] = {
            ...le[pt],
            ...rt[pt]
          } : le[pt] = rt[pt];
        });
      }
      return l ? l(le) : le;
    }, [D, je, G, Q, X]), Xe = D.colorSchemeSelector;
    ct(() => {
      if (he && N && Xe && Xe !== "media") {
        const oe = Xe;
        let le = Xe;
        if (oe === "class" && (le = ".%s"), oe === "data" && (le = "[data-%s]"), oe != null && oe.startsWith("data-") && !oe.includes("%s") && (le = `[${oe}="%s"]`), le.startsWith("."))
          N.classList.remove(...q.map((Ge) => le.substring(1).replace("%s", Ge))), N.classList.add(le.substring(1).replace("%s", he));
        else {
          const Ge = le.replace("%s", he).match(/\[([^\]]+)\]/);
          if (Ge) {
            const [rt, pt] = Ge[1].split("=");
            pt || q.forEach((De) => {
              N.removeAttribute(rt.replace(he, De));
            }), N.setAttribute(rt, pt ? pt.replace(/"|'/g, "") : "");
          } else
            N.setAttribute(le, he);
        }
      }
    }, [he, Xe, N, q]), h.useEffect(() => {
      let oe;
      if (k && O.current && I) {
        const le = I.createElement("style");
        le.appendChild(I.createTextNode(C2)), I.head.appendChild(le), window.getComputedStyle(I.body), oe = setTimeout(() => {
          I.head.removeChild(le);
        }, 1);
      }
      return () => {
        clearTimeout(oe);
      };
    }, [he, k, I]), h.useEffect(() => (O.current = !0, () => {
      O.current = !1;
    }), []);
    const Fe = h.useMemo(() => ({
      allColorSchemes: q,
      colorScheme: he,
      darkColorScheme: Me,
      lightColorScheme: fe,
      mode: $e,
      setColorScheme: Ee,
      setMode: me,
      systemMode: de
    }), [q, he, Me, fe, $e, Ee, me, de, et.colorSchemeSelector]);
    let qe = !0;
    (L || D.cssVariables === !1 || z && (A == null ? void 0 : A.cssVarPrefix) === X) && (qe = !1);
    const U = /* @__PURE__ */ c.jsxs(h.Fragment, {
      children: [/* @__PURE__ */ c.jsx(X0, {
        themeId: W ? t : void 0,
        theme: et,
        children: m
      }), qe && /* @__PURE__ */ c.jsx(P0, {
        styles: ((Ae = et.generateStyleSheets) == null ? void 0 : Ae.call(et)) || []
      })]
    });
    return z ? U : /* @__PURE__ */ c.jsx(u.Provider, {
      value: Fe,
      children: U
    });
  }
  const v = typeof s == "string" ? s : s.light, S = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: d,
    getInitColorSchemeScript: (g) => v2({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: v,
      defaultDarkColorScheme: S,
      modeStorageKey: r,
      ...g
    })
  };
}
function T2(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const R2 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Bh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (R2.has(s))
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
}, P2 = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Hc(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return E2(
    e,
    (l, a, u) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, p = P2(l, a);
        Object.assign(o, {
          [d]: p
        }), Bh(i, l, `var(${d})`, u), Bh(s, l, `var(${d}, ${p})`, u);
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
function I2(e, t = {}) {
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
    css: p,
    varsWithDefaults: y
  } = Hc(u, t);
  let f = y;
  const v = {}, {
    [a]: S,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([w, E]) => {
    const {
      vars: k,
      css: R,
      varsWithDefaults: T
    } = Hc(E, t);
    f = It(f, T), v[w] = {
      css: R,
      vars: k
    };
  }), S) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: k
    } = Hc(S, t);
    f = It(f, k), v[a] = {
      css: w,
      vars: E
    };
  }
  function g(w, E) {
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
    vars: f,
    generateThemeVars: () => {
      let w = {
        ...d
      };
      return Object.entries(v).forEach(([, {
        vars: E
      }]) => {
        w = It(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      var I, N;
      const w = [], E = e.defaultColorScheme || "light";
      function k($, L) {
        Object.keys(L).length && w.push(typeof $ == "string" ? {
          [$]: {
            ...L
          }
        } : $);
      }
      k(n(void 0, {
        ...p
      }), p);
      const {
        [E]: R,
        ...T
      } = v;
      if (R) {
        const {
          css: $
        } = R, L = (N = (I = s[E]) == null ? void 0 : I.palette) == null ? void 0 : N.mode, x = !r && L ? {
          colorScheme: L,
          ...$
        } : {
          ...$
        };
        k(n(E, {
          ...x
        }), x);
      }
      return Object.entries(T).forEach(([$, {
        css: L
      }]) => {
        var P, O;
        const x = (O = (P = s[$]) == null ? void 0 : P.palette) == null ? void 0 : O.mode, j = !r && x ? {
          colorScheme: x,
          ...L
        } : {
          ...L
        };
        k(n($, {
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
function M2(e) {
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
function Kc(e, t) {
  var n, r, o;
  return /* @__PURE__ */ h.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const $2 = Gu(), j2 = ZC("div", {
  name: "MuiStack",
  slot: "Root"
});
function O2(e) {
  return e2({
    props: e,
    name: "MuiStack",
    defaultTheme: $2
  });
}
function A2(e, t) {
  const n = h.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ h.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const N2 = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], L2 = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Gr({
      theme: t
    }, Dc({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Fu(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = Dc({
      values: e.direction,
      base: o
    }), s = Dc({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, d) => {
      if (!i[a]) {
        const y = u > 0 ? i[d[u - 1]] : "column";
        i[a] = y;
      }
    }), n = It(n, Gr({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: Co(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${N2(u ? i[u] : e.direction)}`]: Co(r, a)
      }
    }));
  }
  return n = nC(t.breakpoints, n), n;
};
function z2(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = j2,
    useThemeProps: n = O2,
    componentName: r = "MuiStack"
  } = e, o = () => ve({
    root: ["root"]
  }, (a) => ye(r, a), {}), i = t(L2);
  return /* @__PURE__ */ h.forwardRef(function(a, u) {
    const d = n(a), {
      component: p = "div",
      direction: y = "column",
      spacing: f = 0,
      divider: v,
      children: S,
      className: C,
      useFlexGap: g = !1,
      ...m
    } = d, b = {
      direction: y,
      spacing: f,
      useFlexGap: g
    }, w = o();
    return /* @__PURE__ */ c.jsx(i, {
      as: p,
      ownerState: b,
      ref: u,
      className: te(w.root, C),
      ...m,
      children: v ? A2(S, v) : S
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
      paper: Ws.white,
      default: Ws.white
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
      primary: Ws.white,
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
      active: Ws.white,
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
const ef = e1();
function _h(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = qu(e.main, o) : t === "dark" && (e.dark = Xu(e.main, i)));
}
function Fh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function B2(e = "light") {
  return e === "dark" ? {
    main: Do[200],
    light: Do[50],
    dark: Do[400]
  } : {
    main: Do[700],
    light: Do[400],
    dark: Do[800]
  };
}
function _2(e = "light") {
  return e === "dark" ? {
    main: Fo[200],
    light: Fo[50],
    dark: Fo[400]
  } : {
    main: Fo[500],
    light: Fo[300],
    dark: Fo[700]
  };
}
function F2(e = "light") {
  return e === "dark" ? {
    main: _o[500],
    light: _o[300],
    dark: _o[700]
  } : {
    main: _o[700],
    light: _o[400],
    dark: _o[800]
  };
}
function D2(e = "light") {
  return e === "dark" ? {
    main: Wo[400],
    light: Wo[300],
    dark: Wo[700]
  } : {
    main: Wo[700],
    light: Wo[500],
    dark: Wo[900]
  };
}
function W2(e = "light") {
  return e === "dark" ? {
    main: Uo[400],
    light: Uo[300],
    dark: Uo[700]
  } : {
    main: Uo[800],
    light: Uo[500],
    dark: Uo[900]
  };
}
function U2(e = "light") {
  return e === "dark" ? {
    main: Vi[400],
    light: Vi[300],
    dark: Vi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Vi[500],
    dark: Vi[900]
  };
}
function V2(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Ap(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || B2(t), l = e.secondary || _2(t), a = e.error || F2(t), u = e.info || D2(t), d = e.success || W2(t), p = e.warning || U2(t);
  function y(C) {
    return o ? V2(C) : o2(C, ef.text.primary) >= n ? ef.text.primary : J0.text.primary;
  }
  const f = ({
    color: C,
    name: g,
    mainShade: m = 500,
    lightShade: b = 300,
    darkShade: w = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[m] && (C.main = C[m]), !C.hasOwnProperty("main"))
      throw new Error(kr(11, g ? ` (${g})` : "", m));
    if (typeof C.main != "string")
      throw new Error(kr(12, g ? ` (${g})` : "", JSON.stringify(C.main)));
    return o ? (Fh(o, C, "light", b, r), Fh(o, C, "dark", w, r)) : (_h(C, "light", b, r), _h(C, "dark", w, r)), C.contrastText || (C.contrastText = y(C.main)), C;
  };
  let v;
  return t === "light" ? v = Z0() : t === "dark" && (v = e1()), It({
    // A collection of common colors.
    common: {
      ...Ws
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
      color: p,
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
    grey: NS,
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
    ...v
  }, i);
}
const al = "--_focusVisible-offset", Ju = "--_focusVisible-behavior", t1 = "--_focusVisible-shadow", H2 = `var(${al}, 1)`, K2 = `var(${Ju}, )`, G2 = {
  [al]: 1,
  [Ju]: "initial"
  // reverts the var to guaranteed-invalid so `var(--_focusVisible-behavior, )` falls back to empty — there is no explicit `outset` keyword.
};
function n1(e) {
  return {
    [t1]: e
  };
}
function r1(e) {
  return {
    [al]: -e,
    [Ju]: "inset"
  };
}
function o1(e, t) {
  return t.reduce((n, r) => r && "focusVisible" in r ? It(n, {
    focusVisible: r.focusVisible
  }) : n, {
    focusVisible: e
  }).focusVisible;
}
function Y2(e) {
  return e != null && typeof e == "object" && typeof e.outlineOffset == "string" && e.outlineOffset.includes(al);
}
function Np(e, t) {
  return Q2({
    outlineStyle: "solid",
    outlineColor: t,
    outlineWidth: 2,
    outlineOffset: 2,
    // invisible shadow for parent component with solid background (AppBar, Snackbar, Alert) can control the ring color.
    boxShadow: `var(${t1}, 0 0)`,
    ...e === !0 ? null : e
  });
}
function Q2(e) {
  const t = e.outlineOffset ?? 0;
  if (typeof t != "string" || !t.includes(al)) {
    const r = typeof t == "number" ? `${t}px` : t;
    e.outlineOffset = `calc(${H2} * ${r})`;
  }
  const n = /* @__PURE__ */ new Set(["none", "initial", "inherit", "unset", "revert", "revert-layer"]);
  return typeof e.boxShadow == "string" && !n.has(e.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e.boxShadow) && !e.boxShadow.includes(Ju) && (e.boxShadow = `${K2} ${e.boxShadow}`), e;
}
function X2(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function q2(e, t) {
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
function Z2(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Dh = {
  textTransform: "uppercase"
}, Wh = '"Roboto", "Helvetica", "Arial", sans-serif';
function i1(e, t) {
  const {
    fontFamily: n = Wh,
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
    ...p
  } = typeof t == "function" ? t(e) : t, y = r / 14, f = d || ((C) => `${C / a * y}rem`), v = (C, g, m, b, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: f(g),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: m,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Wh ? {
      letterSpacing: `${Z2(b / g)}em`
    } : {},
    ...w,
    ...u
  }), S = {
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
    button: v(s, 14, 1.75, 0.4, Dh),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, Dh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return It({
    htmlFontSize: a,
    pxToRem: f,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...S
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const J2 = 0.2, ek = 0.14, tk = 0.12;
function ot(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${J2})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ek})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${tk})`].join(",");
}
const nk = ["none", ot(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ot(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ot(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ot(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ot(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ot(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ot(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ot(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ot(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ot(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ot(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ot(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ot(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ot(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ot(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ot(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ot(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ot(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ot(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ot(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ot(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ot(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ot(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ot(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], rk = ["all"], ok = {}, ik = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, sk = {
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
function Uh(e) {
  return `${Math.round(e)}ms`;
}
function lk(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ak(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...ik,
    ...t.easing
  }, r = {
    ...sk,
    ...t.duration
  }, o = (s = rk, l = ok) => {
    const {
      duration: a = r.standard,
      easing: u = n.easeInOut,
      delay: d = 0,
      ...p
    } = l;
    return (Array.isArray(s) ? s : [s]).map((y) => `${y} ${typeof a == "string" ? a : Uh(a)} ${u} ${typeof d == "string" ? d : Uh(d)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: lk,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const uk = {};
function ck(e = uk) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const dk = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function fk(e) {
  return gr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function s1(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !fk(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : gr(l) && (r[s] = {
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
function Vh(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const pk = (e) => {
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
function mk(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Ys(t, pk(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Vh(n)})` : qu(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Vh(n)})` : Xu(t, n);
    }
  });
}
function tf(e = {}, ...t) {
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
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(kr(22));
  const y = Ap({
    ...i,
    colorSpace: d
  }), f = Gu(e);
  let v = It(f, {
    mixins: q2(f.breakpoints, r),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: nk.slice(),
    typography: i1(y, a),
    motion: ck(s),
    transitions: ak(l),
    zIndex: {
      ...dk
    }
  });
  return v = It(v, p), v = t.reduce((S, C) => It(S, C), v), delete v.transitions.reducedMotion, v.focusVisible != null && v.focusVisible !== !1 && (v.focusVisible = Np(v.focusVisible, v.palette.primary.main)), v.unstable_sxConfig = {
    ...Ku,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, v.unstable_sx = function(C) {
    return ko({
      sx: C,
      theme: this
    });
  }, v.toRuntimeSource = s1, mk(v), v;
}
function nf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const hk = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = nf(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function l1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function a1(e) {
  return e === "dark" ? hk : [];
}
function gk(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = Ap({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...l1(s.mode),
      ...n
    },
    overlays: r || a1(s.mode),
    ...i
  };
}
function yk(e) {
  var t;
  return e[0] === "motion" || // Keep `focusVisible` inline: its values reference the per-component private vars
  // (`--_focusVisible-offset`/`-behavior`). Hoisted to a `:root` var they resolve where those
  // vars are unset, silently breaking the inner-ring inset.
  e[0] === "focusVisible" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const vk = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], xk = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return vk(e.cssVarPrefix).forEach((l) => {
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
function bk(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function B(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function as(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : K0(e);
}
function ur(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ls(as(e[t])));
}
function Sk(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Gn = (e) => {
  try {
    return e();
  } catch {
  }
}, wk = (e = "mui") => T2(e);
function Gc(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = gk({
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
  } = tf({
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
      ...l1(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || a1(i)
  }, l;
}
function Ck(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = yk,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, p = Object.keys(n)[0], y = r || (n.light && p !== "light" ? "light" : p), f = wk(i), {
    [y]: v,
    light: S,
    dark: C,
    ...g
  } = n, m = {
    ...g
  };
  let b = v;
  if ((y === "dark" && !("dark" in n) || y === "light" && !("light" in n)) && (b = !0), !b)
    throw new Error(kr(21, y));
  let w;
  s && (w = "oklch");
  const E = Gc(w, m, b, d, y);
  S && !m.light && Gc(w, m, S, void 0, "light"), C && !m.dark && Gc(w, m, C, void 0, "dark");
  let k = {
    defaultColorScheme: y,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: f,
    colorSchemes: m,
    font: {
      ...X2(E.typography),
      ...E.font
    },
    spacing: Sk(d.spacing)
  };
  Object.keys(k.colorSchemes).forEach((L) => {
    const x = k.colorSchemes[L].palette, j = (O) => {
      const A = O.split("-"), M = A[1], z = A[2];
      return f(O, x[M][z]);
    };
    x.mode === "light" && (B(x.common, "background", "#fff"), B(x.common, "onBackground", "#000")), x.mode === "dark" && (B(x.common, "background", "#000"), B(x.common, "onBackground", "#fff"));
    function P(O, A, M) {
      if (w) {
        let z;
        return O === no && (z = `transparent ${((1 - M) * 100).toFixed(0)}%`), O === We && (z = `#000 ${(M * 100).toFixed(0)}%`), O === Ue && (z = `#fff ${(M * 100).toFixed(0)}%`), `color-mix(in ${w}, ${A}, ${z})`;
      }
      return O(A, M);
    }
    if (bk(x, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), x.mode === "light") {
      B(x.Alert, "errorColor", P(We, s ? f("palette-error-light") : x.error.light, 0.6)), B(x.Alert, "infoColor", P(We, s ? f("palette-info-light") : x.info.light, 0.6)), B(x.Alert, "successColor", P(We, s ? f("palette-success-light") : x.success.light, 0.6)), B(x.Alert, "warningColor", P(We, s ? f("palette-warning-light") : x.warning.light, 0.6)), B(x.Alert, "errorFilledBg", j("palette-error-main")), B(x.Alert, "infoFilledBg", j("palette-info-main")), B(x.Alert, "successFilledBg", j("palette-success-main")), B(x.Alert, "warningFilledBg", j("palette-warning-main")), B(x.Alert, "errorFilledColor", Gn(() => x.getContrastText(x.error.main))), B(x.Alert, "infoFilledColor", Gn(() => x.getContrastText(x.info.main))), B(x.Alert, "successFilledColor", Gn(() => x.getContrastText(x.success.main))), B(x.Alert, "warningFilledColor", Gn(() => x.getContrastText(x.warning.main))), B(x.Alert, "errorStandardBg", P(Ue, s ? f("palette-error-light") : x.error.light, 0.9)), B(x.Alert, "infoStandardBg", P(Ue, s ? f("palette-info-light") : x.info.light, 0.9)), B(x.Alert, "successStandardBg", P(Ue, s ? f("palette-success-light") : x.success.light, 0.9)), B(x.Alert, "warningStandardBg", P(Ue, s ? f("palette-warning-light") : x.warning.light, 0.9)), B(x.Alert, "errorIconColor", j("palette-error-main")), B(x.Alert, "infoIconColor", j("palette-info-main")), B(x.Alert, "successIconColor", j("palette-success-main")), B(x.Alert, "warningIconColor", j("palette-warning-main")), B(x.AppBar, "defaultBg", j("palette-grey-100")), B(x.Avatar, "defaultBg", j("palette-grey-400")), B(x.Button, "inheritContainedBg", j("palette-grey-300")), B(x.Button, "inheritContainedHoverBg", j("palette-grey-A100")), B(x.Chip, "defaultBorder", j("palette-grey-400")), B(x.Chip, "defaultAvatarColor", j("palette-grey-700")), B(x.Chip, "defaultIconColor", j("palette-grey-700")), B(x.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), B(x.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), B(x.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), B(x.LinearProgress, "primaryBg", P(Ue, s ? f("palette-primary-main") : x.primary.main, 0.62)), B(x.LinearProgress, "secondaryBg", P(Ue, s ? f("palette-secondary-main") : x.secondary.main, 0.62)), B(x.LinearProgress, "errorBg", P(Ue, s ? f("palette-error-main") : x.error.main, 0.62)), B(x.LinearProgress, "infoBg", P(Ue, s ? f("palette-info-main") : x.info.main, 0.62)), B(x.LinearProgress, "successBg", P(Ue, s ? f("palette-success-main") : x.success.main, 0.62)), B(x.LinearProgress, "warningBg", P(Ue, s ? f("palette-warning-light") : x.warning.main, 0.62)), B(x.Skeleton, "bg", w ? P(no, s ? f("palette-text-primary") : x.text.primary, 0.11) : `rgba(${j("palette-text-primaryChannel")} / 0.11)`), B(x.Slider, "primaryTrack", P(Ue, s ? f("palette-primary-main") : x.primary.main, 0.62)), B(x.Slider, "secondaryTrack", P(Ue, s ? f("palette-secondary-main") : x.secondary.main, 0.62)), B(x.Slider, "errorTrack", P(Ue, s ? f("palette-error-main") : x.error.main, 0.62)), B(x.Slider, "infoTrack", P(Ue, s ? f("palette-info-main") : x.info.main, 0.62)), B(x.Slider, "successTrack", P(Ue, s ? f("palette-success-main") : x.success.main, 0.62)), B(x.Slider, "warningTrack", P(Ue, s ? f("palette-warning-main") : x.warning.main, 0.62));
      const O = w ? P(We, s ? f("palette-background-default") : x.background.default, 0.6825) : Ol(x.background.default, 0.8);
      B(x.SnackbarContent, "bg", O), B(x.SnackbarContent, "color", Gn(() => w ? ef.text.primary : x.getContrastText(O))), B(x.SpeedDialAction, "fabHoverBg", Ol(x.background.paper, 0.15)), B(x.StepConnector, "border", j("palette-grey-400")), B(x.StepContent, "border", j("palette-grey-400")), B(x.Switch, "defaultColor", j("palette-common-white")), B(x.Switch, "defaultDisabledColor", j("palette-grey-100")), B(x.Switch, "primaryDisabledColor", P(Ue, s ? f("palette-primary-main") : x.primary.main, 0.62)), B(x.Switch, "secondaryDisabledColor", P(Ue, s ? f("palette-secondary-main") : x.secondary.main, 0.62)), B(x.Switch, "errorDisabledColor", P(Ue, s ? f("palette-error-main") : x.error.main, 0.62)), B(x.Switch, "infoDisabledColor", P(Ue, s ? f("palette-info-main") : x.info.main, 0.62)), B(x.Switch, "successDisabledColor", P(Ue, s ? f("palette-success-main") : x.success.main, 0.62)), B(x.Switch, "warningDisabledColor", P(Ue, s ? f("palette-warning-main") : x.warning.main, 0.62)), B(x.TableCell, "border", P(Ue, no(s ? f("palette-divider") : x.divider, 1), 0.88)), B(x.Tooltip, "bg", P(no, s ? f("palette-grey-700") : x.grey[700], 0.92));
    }
    if (x.mode === "dark") {
      B(x.Alert, "errorColor", P(Ue, s ? f("palette-error-light") : x.error.light, 0.6)), B(x.Alert, "infoColor", P(Ue, s ? f("palette-info-light") : x.info.light, 0.6)), B(x.Alert, "successColor", P(Ue, s ? f("palette-success-light") : x.success.light, 0.6)), B(x.Alert, "warningColor", P(Ue, s ? f("palette-warning-light") : x.warning.light, 0.6)), B(x.Alert, "errorFilledBg", j("palette-error-dark")), B(x.Alert, "infoFilledBg", j("palette-info-dark")), B(x.Alert, "successFilledBg", j("palette-success-dark")), B(x.Alert, "warningFilledBg", j("palette-warning-dark")), B(x.Alert, "errorFilledColor", Gn(() => x.getContrastText(x.error.dark))), B(x.Alert, "infoFilledColor", Gn(() => x.getContrastText(x.info.dark))), B(x.Alert, "successFilledColor", Gn(() => x.getContrastText(x.success.dark))), B(x.Alert, "warningFilledColor", Gn(() => x.getContrastText(x.warning.dark))), B(x.Alert, "errorStandardBg", P(We, s ? f("palette-error-light") : x.error.light, 0.9)), B(x.Alert, "infoStandardBg", P(We, s ? f("palette-info-light") : x.info.light, 0.9)), B(x.Alert, "successStandardBg", P(We, s ? f("palette-success-light") : x.success.light, 0.9)), B(x.Alert, "warningStandardBg", P(We, s ? f("palette-warning-light") : x.warning.light, 0.9)), B(x.Alert, "errorIconColor", j("palette-error-main")), B(x.Alert, "infoIconColor", j("palette-info-main")), B(x.Alert, "successIconColor", j("palette-success-main")), B(x.Alert, "warningIconColor", j("palette-warning-main")), B(x.AppBar, "defaultBg", j("palette-grey-900")), B(x.AppBar, "darkBg", j("palette-background-paper")), B(x.AppBar, "darkColor", j("palette-text-primary")), B(x.Avatar, "defaultBg", j("palette-grey-600")), B(x.Button, "inheritContainedBg", j("palette-grey-800")), B(x.Button, "inheritContainedHoverBg", j("palette-grey-700")), B(x.Chip, "defaultBorder", j("palette-grey-700")), B(x.Chip, "defaultAvatarColor", j("palette-grey-300")), B(x.Chip, "defaultIconColor", j("palette-grey-300")), B(x.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), B(x.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), B(x.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), B(x.LinearProgress, "primaryBg", P(We, s ? f("palette-primary-main") : x.primary.main, 0.5)), B(x.LinearProgress, "secondaryBg", P(We, s ? f("palette-secondary-main") : x.secondary.main, 0.5)), B(x.LinearProgress, "errorBg", P(We, s ? f("palette-error-main") : x.error.main, 0.5)), B(x.LinearProgress, "infoBg", P(We, s ? f("palette-info-main") : x.info.main, 0.5)), B(x.LinearProgress, "successBg", P(We, s ? f("palette-success-main") : x.success.main, 0.5)), B(x.LinearProgress, "warningBg", P(We, s ? f("palette-warning-main") : x.warning.main, 0.5)), B(x.Skeleton, "bg", w ? P(no, s ? f("palette-text-primary") : x.text.primary, 0.13) : `rgba(${j("palette-text-primaryChannel")} / 0.13)`), B(x.Slider, "primaryTrack", P(We, s ? f("palette-primary-main") : x.primary.main, 0.5)), B(x.Slider, "secondaryTrack", P(We, s ? f("palette-secondary-main") : x.secondary.main, 0.5)), B(x.Slider, "errorTrack", P(We, s ? f("palette-error-main") : x.error.main, 0.5)), B(x.Slider, "infoTrack", P(We, s ? f("palette-info-main") : x.info.main, 0.5)), B(x.Slider, "successTrack", P(We, s ? f("palette-success-main") : x.success.main, 0.5)), B(x.Slider, "warningTrack", P(We, s ? f("palette-warning-light") : x.warning.main, 0.5));
      const O = w ? P(Ue, s ? f("palette-background-default") : x.background.default, 0.985) : Ol(x.background.default, 0.98);
      B(x.SnackbarContent, "bg", O), B(x.SnackbarContent, "color", Gn(() => w ? J0.text.primary : x.getContrastText(O))), B(x.SpeedDialAction, "fabHoverBg", Ol(x.background.paper, 0.15)), B(x.StepConnector, "border", j("palette-grey-600")), B(x.StepContent, "border", j("palette-grey-600")), B(x.Switch, "defaultColor", j("palette-grey-300")), B(x.Switch, "defaultDisabledColor", j("palette-grey-600")), B(x.Switch, "primaryDisabledColor", P(We, s ? f("palette-primary-main") : x.primary.main, 0.55)), B(x.Switch, "secondaryDisabledColor", P(We, s ? f("palette-secondary-main") : x.secondary.main, 0.55)), B(x.Switch, "errorDisabledColor", P(We, s ? f("palette-error-main") : x.error.main, 0.55)), B(x.Switch, "infoDisabledColor", P(We, s ? f("palette-info-main") : x.info.main, 0.55)), B(x.Switch, "successDisabledColor", P(We, s ? f("palette-success-main") : x.success.main, 0.55)), B(x.Switch, "warningDisabledColor", P(We, s ? f("palette-warning-light") : x.warning.main, 0.55)), B(x.TableCell, "border", P(We, no(s ? f("palette-divider") : x.divider, 1), 0.68)), B(x.Tooltip, "bg", P(no, s ? f("palette-grey-700") : x.grey[700], 0.92));
    }
    s || (ur(x.background, "default"), ur(x.background, "paper"), ur(x.common, "background"), ur(x.common, "onBackground"), ur(x, "divider")), Object.keys(x).forEach((O) => {
      const A = x[O];
      O !== "tonalOffset" && !s && A && typeof A == "object" && (A.main && B(x[O], "mainChannel", ls(as(A.main))), A.light && B(x[O], "lightChannel", ls(as(A.light))), A.dark && B(x[O], "darkChannel", ls(as(A.dark))), A.contrastText && B(x[O], "contrastTextChannel", ls(as(A.contrastText))), O === "text" && (ur(x[O], "primary"), ur(x[O], "secondary")), O === "action" && (A.active && ur(x[O], "active"), A.selected && ur(x[O], "selected")));
    });
  }), k = t.reduce((L, x) => It(L, x), k);
  const R = o1(e.focusVisible, t);
  R != null && R !== !1 && (k.focusVisible = Np(R, f("palette-primary-main")));
  const T = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: xk(k),
    enableContrastVars: s
  }, {
    vars: I,
    generateThemeVars: N,
    generateStyleSheets: $
  } = I2(k, T);
  return k.vars = I, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([L, x]) => {
    k[L] = x;
  }), k.generateThemeVars = N, k.generateStyleSheets = $, k.generateSpacing = function() {
    return _0(d.spacing, Fu(this));
  }, k.getColorSchemeSelector = M2(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Ku,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, k.unstable_sx = function(x) {
    return ko({
      sx: x,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = s1, k;
}
function Hh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Ap({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ec(e = {}, ...t) {
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
      return tf(e, ...t);
    let d = n;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const p = tf({
      ...e,
      palette: d
    }, ...t);
    if (p.defaultColorScheme = l, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: p.palette
    }, Hh(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: p.palette
    }, Hh(p, "light", u.light)), p.focusVisible != null && p.focusVisible !== !1) {
      let y = p.focusVisible;
      const f = o1(e.focusVisible, t), v = f && typeof f == "object" ? f.outlineColor : void 0;
      if (!v || Y2(f) && v === p.palette.primary.main) {
        const {
          outlineColor: S,
          ...C
        } = y;
        y = C;
      }
      Object.keys(p.colorSchemes).forEach((S) => {
        var g, m;
        const C = (m = (g = p.colorSchemes) == null ? void 0 : g[S]) == null ? void 0 : m.palette;
        C != null && C.primary && (p.colorSchemes[S].focusVisible = Np(y, C.primary.main));
      });
    }
    return p;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), Ck({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Wa(e) {
  return typeof e == "string";
}
function tc(e, t = 166) {
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
function ft(...e) {
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
function Je(e) {
  const t = h.useRef(e);
  return ct(() => {
    t.current = e;
  }), h.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function ht(e) {
  return e && e.ownerDocument || document;
}
function Un(e) {
  return ht(e).defaultView || window;
}
function Al(e) {
  return parseInt(e, 10) || 0;
}
const kk = {
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
function Tk(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Kh(e) {
  return Tk(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Rk = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: u
  } = h.useRef(l != null), d = h.useRef(null), p = ft(n, d), y = h.useRef(null), f = h.useRef(null), v = h.useCallback(() => {
    const b = d.current, w = f.current;
    if (!b || !w)
      return;
    const k = Un(b).getComputedStyle(b);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = b.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const R = k.boxSizing, T = Al(k.paddingBottom) + Al(k.paddingTop), I = Al(k.borderBottomWidth) + Al(k.borderTopWidth), N = w.scrollHeight;
    w.value = "x";
    const $ = w.scrollHeight;
    let L = N;
    i && (L = Math.max(Number(i) * $, L)), o && (L = Math.min(Number(o) * $, L)), L = Math.max(L, $);
    const x = L + (R === "border-box" ? T + I : 0), j = Math.abs(L - N) <= 1;
    return {
      outerHeightStyle: x,
      overflowing: j
    };
  }, [o, i, t.placeholder]), S = Je(() => {
    const b = d.current, w = v();
    if (!b || !w || Kh(w))
      return !1;
    const E = w.outerHeightStyle;
    return y.current != null && y.current !== E;
  }), C = h.useCallback(() => {
    const b = d.current, w = v();
    if (!b || !w || Kh(w))
      return;
    const E = w.outerHeightStyle;
    y.current !== E && (y.current = E, b.style.height = `${E}px`), b.style.overflow = w.overflowing ? "hidden" : "";
  }, [v]), g = h.useRef(-1);
  ct(() => {
    const b = tc(C), w = d == null ? void 0 : d.current;
    if (!w)
      return;
    const E = Un(w);
    E.addEventListener("resize", b);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      S() && (k.unobserve(w), cancelAnimationFrame(g.current), C(), g.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      b.clear(), cancelAnimationFrame(g.current), E.removeEventListener("resize", b), k && k.disconnect();
    };
  }, [v, C, S]), ct(() => {
    C();
  });
  const m = (b) => {
    u || C();
    const w = b.target, E = w.value.length, k = w.value.endsWith(`
`), R = w.selectionStart === E;
    k && R && w.setSelectionRange(E, E), r && r(b);
  };
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ c.jsx("textarea", {
      value: l,
      onChange: m,
      ref: p,
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
        ...kk.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), Lp = /* @__PURE__ */ h.createContext(void 0);
function $i({
  props: e,
  states: t
}) {
  const n = h.useContext(Lp), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const zp = ec();
function Zr() {
  const e = Yu(zp);
  return e[rr] || e;
}
function Ek(e) {
  return /* @__PURE__ */ c.jsx(F0, {
    ...e,
    defaultTheme: zp,
    themeId: rr
  });
}
function u1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const vn = (e) => u1(e) && e !== "classes", H = H0({
  themeId: rr,
  defaultTheme: zp,
  rootShouldForwardProp: vn
});
function Pk(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ c.jsx(Ek, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const we = g2;
function xe(e) {
  return f2(e);
}
function Jn(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Gh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ua(e, t = !1) {
  return e && (Gh(e.value) && e.value !== "" || t && Gh(e.defaultValue) && e.defaultValue !== "");
}
function Ik(e) {
  return e.startAdornment;
}
function Mk(e) {
  return ye("MuiInputBase", e);
}
const an = pe("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), $k = {
  transition: "none"
};
function jk(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Bp = (e) => e.scrollTop, c1 = {}, Ok = ["all"], Ak = {};
function Cn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function d1(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function Va(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = c1
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function _p(e, t) {
  var r;
  const n = t ?? $k;
  return jk((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function xt(e, t = Ok, n = Ak) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = _p(e);
  if (r === void 0)
    return o ?? c1;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Yh;
const rf = "mui-auto-fill", Ha = "mui-auto-fill-cancel", nc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ue(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, rc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, Nk = (e) => {
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
    readOnly: p,
    size: y,
    startAdornment: f,
    type: v
  } = e, S = {
    root: ["root", `color${ue(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", y && y !== "medium" && `size${ue(y)}`, d && "multiline", f && "adornedStart", i && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", v === "search" && "inputTypeSearch", p && "readOnly"]
  };
  return ve(S, Mk, t);
}, oc = H("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: nc
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
}))), ic = H("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: rc
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
        animationName: Ha,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: rf
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
})), Qh = Pk({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${rf}`]: {
    from: {
      animationName: rf
    }
  },
  [`@keyframes ${Ha}`]: {
    from: {
      animationName: Ha
    }
  }
}), Fp = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    defaultValue: d,
    disabled: p,
    disableInjectingGlobalStyles: y,
    endAdornment: f,
    error: v,
    fullWidth: S = !1,
    id: C,
    inputComponent: g = "input",
    inputProps: m = {},
    inputRef: b,
    margin: w,
    maxRows: E,
    minRows: k,
    multiline: R = !1,
    name: T,
    onBlur: I,
    onChange: N,
    onClick: $,
    onFocus: L,
    onKeyDown: x,
    onKeyUp: j,
    placeholder: P,
    readOnly: O,
    renderSuffix: A,
    rows: M,
    size: z,
    slotProps: F = {},
    slots: W = {},
    startAdornment: D,
    type: Q = "text",
    value: G,
    ...X
  } = r, K = m.value != null ? m.value : G, {
    current: q
  } = h.useRef(K != null), _ = h.useRef(), ne = h.useCallback((oe) => {
  }, []), re = ft(_, b, m.ref, ne), [ke, me] = h.useState(!1), [de, fe] = $i({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  de.focused = fe ? fe.focused : ke, h.useEffect(() => {
    !fe && p && ke && (me(!1), I && I());
  }, [fe, p, ke, I]);
  const Me = fe && fe.onFilled, Be = fe && fe.onEmpty, Ee = h.useCallback((oe) => {
    Ua(oe) ? Me && Me() : Be && Be();
  }, [Me, Be]);
  ct(() => {
    q && Ee({
      value: K
    });
  }, [K, Ee, q]), ct(() => {
    if (!l)
      return;
    const oe = _.current;
    if (!oe)
      return;
    const le = ht(oe), Ge = Jn(le), rt = Ge == null || Ge === le.body || Ge === le.documentElement;
    oe === Ge ? fe && fe.onFocus ? fe.onFocus() : me(!0) : rt && oe.focus();
  }, [l]);
  const $e = (oe) => {
    L && L(oe), m.onFocus && m.onFocus(oe), fe && fe.onFocus ? fe.onFocus(oe) : me(!0);
  }, he = (oe) => {
    I && I(oe), m.onBlur && m.onBlur(oe), fe && fe.onBlur ? fe.onBlur(oe) : me(!1);
  }, je = (oe, ...le) => {
    if (!q) {
      const Ge = oe.target || _.current;
      if (Ge == null)
        throw new Error(kr(1));
      Ee({
        value: Ge.value
      });
    }
    m.onChange && m.onChange(oe, ...le), N && N(oe, ...le);
  };
  h.useEffect(() => {
    Ee(_.current);
  }, []);
  const et = (oe) => {
    _.current && oe.currentTarget === oe.target && _.current.focus(), $ && $(oe);
  };
  let Xe = g, Fe = m;
  R && Xe === "input" && (M ? Fe = {
    type: void 0,
    minRows: M,
    maxRows: M,
    ...Fe
  } : Fe = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...Fe
  }, Xe = Rk);
  const qe = (oe) => {
    Ee(oe.animationName === Ha ? _.current : {
      value: "x"
    });
  };
  h.useEffect(() => {
    fe && fe.setAdornedStart(!!D);
  }, [fe, D]);
  const U = {
    ...r,
    color: de.color || "primary",
    disabled: de.disabled,
    endAdornment: f,
    error: de.error,
    focused: de.focused,
    formControl: fe,
    fullWidth: S,
    hiddenLabel: de.hiddenLabel,
    multiline: R,
    size: de.size,
    startAdornment: D,
    type: Q
  }, ie = Nk(U), ce = W.root || oc, se = F.root || {}, Ae = W.input || ic;
  return Fe = {
    ...Fe,
    ...F.input
  }, /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [!y && typeof Qh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Yh || (Yh = /* @__PURE__ */ c.jsx(Qh, {}))), /* @__PURE__ */ c.jsxs(ce, {
      ...se,
      ref: n,
      onClick: et,
      ...X,
      ...!Wa(ce) && {
        ownerState: {
          ...U,
          ...se.ownerState
        }
      },
      className: te(ie.root, se.className, a, O && "MuiInputBase-readOnly"),
      children: [D, /* @__PURE__ */ c.jsx(Lp.Provider, {
        value: null,
        children: /* @__PURE__ */ c.jsx(Ae, {
          "aria-invalid": de.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: d,
          disabled: de.disabled,
          id: C,
          onAnimationStart: qe,
          name: T,
          placeholder: P,
          readOnly: O,
          required: de.required,
          rows: M,
          value: K,
          onKeyDown: x,
          onKeyUp: j,
          type: Q,
          ...Fe,
          ...!Wa(Ae) && {
            as: Xe,
            ownerState: {
              ...U,
              ...Fe.ownerState
            }
          },
          ref: re,
          className: te(ie.input, Fe.className, O && "MuiInputBase-readOnly"),
          onBlur: he,
          onChange: je,
          onFocus: $e
        })
      }), f, A ? A({
        ...de,
        startAdornment: D
      }) : null]
    })]
  });
});
function Lk(e) {
  return ye("MuiFilledInput", e);
}
const ro = {
  ...an,
  ...pe("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function zk(e) {
  return ye("MuiFormHelperText", e);
}
const Xh = pe("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function Bk(e) {
  return ye("MuiFormLabel", e);
}
const vs = pe("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function _k(e) {
  return ye("MuiInput", e);
}
const Ki = {
  ...an,
  ...pe("MuiInput", ["root", "underline", "input"])
};
function Fk(e) {
  return ye("MuiMenuItem", e);
}
const Gi = pe("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function Dk(e) {
  return ye("MuiNativeSelect", e);
}
const Dp = pe("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function Wk(e) {
  return ye("MuiOutlinedInput", e);
}
const Yn = {
  ...an,
  ...pe("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function Uk({
  theme: e,
  ...t
}) {
  const n = rr in e ? e[rr] : void 0;
  return /* @__PURE__ */ c.jsx(X0, {
    ...t,
    themeId: n ? rr : void 0,
    theme: n || e
  });
}
const Nl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Vk
} = k2({
  themeId: rr,
  // @ts-ignore ignore module augmentation tests
  theme: () => ec({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Nl.colorSchemeStorageKey,
  modeStorageKey: Nl.modeStorageKey,
  defaultColorScheme: {
    light: Nl.defaultLightColorScheme,
    dark: Nl.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: i1(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return ko({
        sx: r,
        theme: this
      });
    }, t;
  }
}), Hk = Vk;
function Kk({
  theme: e,
  ...t
}) {
  const n = h.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = rr in e ? e[rr] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ c.jsx(Uk, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ c.jsx(Hk, {
    theme: e,
    ...t
  });
}
function qh(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Gk(e) {
  return ye("MuiSvgIcon", e);
}
pe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Yk = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ue(t)}`, `fontSize${ue(n)}`]
  };
  return ve(o, Gk, r);
}, Qk = H("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ue(n.color)}`], t[`fontSize${ue(n.fontSize)}`]];
  }
})(we(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, u, d, p, y;
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
        var v, S;
        return {
          props: {
            color: f
          },
          style: {
            color: (S = (v = (e.vars ?? e).palette) == null ? void 0 : v[f]) == null ? void 0 : S.main
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
          color: (y = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : y.disabled
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
})), of = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: y = "0 0 24 24",
    ...f
  } = r, v = /* @__PURE__ */ h.isValidElement(o) && o.type === "svg", S = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: y,
    hasSvgAsChild: v
  }, C = {};
  d || (C.viewBox = y);
  const g = Yk(S);
  return /* @__PURE__ */ c.jsxs(Qk, {
    as: l,
    className: te(g.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...C,
    ...f,
    ...v && o.props,
    ownerState: S,
    children: [v ? o.props.children : o, p ? /* @__PURE__ */ c.jsx("title", {
      children: p
    }) : null]
  });
});
of.muiName = "SvgIcon";
function Ke(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ c.jsx(of, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = of.muiName, /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(n));
}
function sf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function lf(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = h.useRef(t !== void 0), [s, l] = h.useState(n), a = i ? t : s, u = h.useCallback((d) => {
    i || l(d);
  }, []);
  return [a, u];
}
function f1(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Xk(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((u) => {
      f1(u, l[u]) && typeof s[u] == "function" && (a[u] = (...d) => {
        s[u](...d), l[u](...d);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, u = te(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), d = n(a, l);
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
const Zh = {};
function Wp(e, t) {
  const n = h.useRef(Zh);
  return n.current === Zh && (n.current = e(t)), n;
}
function qk(e) {
  const t = Wp(() => Zk(e)).current;
  return t.next = e, ct(t.effect), t;
}
function Zk(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Jh = sy.createContext(null);
function Jk(e) {
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
  const t = Jk(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function p1(e) {
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
    nodeRef: p,
    onEnter: y,
    onEntering: f,
    onEntered: v,
    onExit: S,
    onExiting: C,
    onExited: g,
    children: m,
    ...b
  } = e, w = h.useContext(Jh), E = w && !w.isMounting ? r : n, [k, R] = h.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), T = h.useRef(k);
  T.current = k, t && k === "unmounted" && (T.current = "exited", R("exited"));
  const I = h.useRef(t && E), N = h.useRef(!1), $ = h.useRef(null), L = h.useRef(k), x = h.useRef(!1), j = h.useRef(u), P = qk({
    timeout: l,
    addEndListener: a,
    reduceMotion: u,
    getAutoTimeout: d,
    onEnter: y,
    onEntering: f,
    onEntered: v,
    onExit: S,
    onExiting: C,
    onExited: g,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: p,
    parentGroup: w
  }), O = h.useCallback(() => {
    $.current !== null && ($.current.cancel(), $.current = null);
  }, []), A = h.useCallback((D) => {
    let Q = !0;
    const G = () => {
      Q && (Q = !1, $.current = null, D());
    };
    return G.cancel = () => {
      Q = !1;
    }, $.current = G, G;
  }, []), M = h.useCallback((D, Q) => {
    var Be, Ee;
    let G;
    const X = () => {
      G !== void 0 && (clearTimeout(G), G = void 0);
    }, K = A(() => {
      X(), T.current = D, R(D);
    }), q = K.cancel;
    K.cancel = () => {
      X(), q();
    };
    const _ = P.current.nodeRef.current, ne = P.current.addEndListener, re = P.current.getAutoTimeout !== void 0, ke = (Ee = (Be = P.current).getAutoTimeout) == null ? void 0 : Ee.call(Be), me = eT({
      currentStatus: Q,
      isAppearing: x.current,
      timeout: P.current.timeout,
      autoTimeout: ke
    }), de = j.current, fe = me ?? (de && re ? 0 : null), Me = ($e) => {
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
    Me(de ? 0 : me ?? 0);
  }, [A, P]), z = h.useCallback((D) => {
    var X;
    const Q = P.current, G = Q.parentGroup ? Q.parentGroup.isMounting : D;
    if (x.current = G, !D && !Q.enter) {
      T.current = "entered", R("entered");
      return;
    }
    j.current = Q.reduceMotion, (X = Q.onEnter) == null || X.call(Q, G), T.current = "entering", R("entering");
  }, [P]), F = h.useCallback(() => {
    var Q;
    const D = P.current;
    if (!D.exit) {
      T.current = "exited", R("exited");
      return;
    }
    j.current = D.reduceMotion, (Q = D.onExit) == null || Q.call(D), T.current = "exiting", R("exiting");
  }, [P]), W = h.useCallback((D, Q) => {
    if (O(), Q === "entering") {
      const G = P.current;
      if (G.mountOnEnter || G.unmountOnExit) {
        const X = G.nodeRef.current;
        X && Bp(X);
      }
      z(D);
    } else
      F();
  }, [O, z, F, P]);
  return ct(() => (N.current = !0, I.current && (I.current = !1, W(!0, "entering")), () => {
    N.current = !1, O();
  }), [O, W]), ct(() => {
    if (!N.current)
      return;
    const D = T.current;
    t ? D !== "entering" && D !== "entered" && W(!1, "entering") : D === "entering" || D === "entered" ? W(!1, "exiting") : D === "exited" && s && (T.current = "unmounted", R("unmounted"));
  }, [t, k, s, W]), ct(() => {
    var X, K, q, _;
    if (k === "unmounted" || L.current === "unmounted") {
      L.current = k;
      return;
    }
    const Q = L.current !== k;
    Q && (L.current = k);
    const G = P.current;
    k === "entering" ? (Q && ((X = G.onEntering) == null || X.call(G, x.current)), $.current === null && T.current === k && M("entered", "entering")) : k === "exiting" ? (Q && ((K = G.onExiting) == null || K.call(G)), $.current === null && T.current === k && M("exited", "exiting")) : k === "entered" && Q ? (q = G.onEntered) == null || q.call(G, x.current) : k === "exited" && Q && ((_ = G.onExited) == null || _.call(G));
  }, [P, M, k]), k === "unmounted" ? null : /* @__PURE__ */ c.jsx(Jh.Provider, {
    value: null,
    children: m(k, b)
  });
}
const m1 = "(prefers-reduced-motion: reduce)", tT = 0, nT = "0ms", rT = () => {
}, eg = () => !1, oT = () => !0, iT = () => rT;
function sT(e) {
  const [t, n] = h.useState(() => ({
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
    const i = window.matchMedia(m1), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const lT = {
  ...ma
}, h1 = lT.useSyncExternalStore;
function aT(e) {
  const t = e ? oT : eg, [n, r] = h.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [eg, iT];
    const o = window.matchMedia(m1);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return h1(r, n, t);
}
const uT = h1 !== void 0 ? aT : sT;
function sc(e, t) {
  const n = uT(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return h.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: tT,
        delay: nT
      } : o;
    }
  }), [r]);
}
function g1(e, t, n) {
  return e === void 0 || Wa(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function y1(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ka(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    f1(n, e[n]) && (t[n] = e[n]);
  return t;
}
function tg(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function v1(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const f = te(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), v = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, S = {
      ...n,
      ...o,
      ...r
    };
    return f.length > 0 && (S.className = f), Object.keys(v).length > 0 && (S.style = v), {
      props: S,
      internalRef: void 0
    };
  }
  const s = Ka({
    ...o,
    ...r
  }), l = tg(r), a = tg(o), u = t(s), d = te(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, y = {
    ...u,
    ...n,
    ...a,
    ...l
  };
  return d.length > 0 && (y.className = d), Object.keys(p).length > 0 && (y.style = p), {
    props: y,
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
    slots: d = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...y
  } = i, f = d[e] || r, v = y1(p[e], o), {
    props: {
      component: S,
      ...C
    },
    internalRef: g
  } = v1({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? y : void 0,
    externalSlotProps: v
  }), m = ft(g, v == null ? void 0 : v.ref, t.ref), b = e === "root" ? S || u : S, w = g1(f, {
    ...e === "root" && !u && !d[e] && s,
    ...e !== "root" && !d[e] && s,
    ...C,
    ...b && !l && {
      as: b
    },
    ...b && l && {
      component: b
    },
    ref: m
  }, o);
  return [f, w];
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
}))), sr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var f;
  const r = xe({
    props: t,
    name: "MuiPaper"
  }), o = Zr(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: u = "elevation",
    ...d
  } = r, p = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: u
  }, y = dT(p);
  return /* @__PURE__ */ c.jsx(fT, {
    as: s,
    ownerState: p,
    className: te(y.root, i),
    ref: n,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (f = o.vars.overlays) == null ? void 0 : f[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ys("#fff", nf(l))}, ${Ys("#fff", nf(l))})`
        }
      },
      ...d.style
    }
  });
});
function Ga(e) {
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
  return h.useMemo(() => {
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
function hT(e) {
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
  } = e, d = h.useRef(null), p = s === !0, y = pT({
    focusableWhenDisabled: p,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), f = h.useCallback(() => {
    const C = d.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), v = h.useMemo(() => {
    const C = p ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, p || (C.disabled = n)) : (C.role = "button", !p && n && (C["aria-disabled"] = n)), p ? {
      ...C,
      ...y
    } : C;
  }, [n, p, y, o, t, i, r]);
  return {
    getButtonProps: h.useCallback((C = mT) => {
      const {
        onClick: g,
        onKeyDown: m,
        onKeyUp: b,
        ...w
      } = C;
      return {
        ...v,
        ...w,
        onClick: (T) => {
          if (l && T.stopPropagation(), n) {
            T.preventDefault();
            return;
          }
          g == null || g(T);
        },
        onKeyDown: (T) => {
          if (p && y.onKeyDown(T), !n && (a == null || a(T), m == null || m(T), !(T.target !== T.currentTarget || f()))) {
            if (T.key === " ") {
              T.preventDefault();
              return;
            }
            T.key === "Enter" && (T.preventDefault(), T.currentTarget.click());
          }
        },
        onKeyUp: (T) => {
          n || (u == null || u(T), b == null || b(T), T.target === T.currentTarget && !f() && T.key === " " && !T.defaultPrevented && T.currentTarget.click());
        }
      };
    }, [v, n, p, y, f, a, u, l]),
    rootRef: d
  };
}
class Ya {
  constructor() {
    Ni(this, "mountEffect", () => {
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
    return new Ya();
  }
  static use() {
    const t = Wp(Ya.create).current, [n, r] = h.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, h.useEffect(t.mountEffect, [n]), t;
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
  return Ya.use();
}
function yT() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const vT = [];
function x1(e) {
  h.useEffect(e, vT);
}
class lc {
  constructor() {
    Ni(this, "currentId", null);
    Ni(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Ni(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new lc();
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
  const e = Wp(lc.create).current;
  return x1(e.disposeEffect), e;
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
  } = e, [d, p] = h.useState(!1), y = er(), f = h.useRef(!1), v = h.useRef(a);
  v.current = a;
  const S = a != null, C = te(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, m = te(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && p(!0), h.useEffect(() => {
    !l && S ? f.current || (f.current = !0, y.start(u, () => {
      var b;
      f.current = !1, (b = v.current) == null || b.call(v);
    })) : (f.current = !1, y.clear());
  }, [y, S, l, u]), /* @__PURE__ */ c.jsx("span", {
    className: C,
    style: g,
    children: /* @__PURE__ */ c.jsx("span", {
      className: m
    })
  });
}
const Yt = pe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), af = 550, bT = 80, Ll = {}, ng = [], ST = () => {
};
function Yc(e, t) {
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
const CT = sl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, kT = sl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, TT = sl`
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
  const t = Ks`
    &.${Yt.rippleVisible} {
      animation-name: ${CT};
      animation-duration: ${af}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Yt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Yt.childLeaving} {
      animation-name: ${kT};
      animation-duration: ${af}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Yt.childPulsate} {
      animation-name: ${TT};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? Ks`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const ET = H("span", {
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
}) => RT(e)}
`, IT = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTouchRipple"
  }), o = Zr(), i = sc(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Ll,
    className: a,
    ...u
  } = r, [d, p] = h.useState({
    items: ng,
    order: ng
  }), y = d.items, f = h.useRef(0), v = h.useRef(null), S = h.useRef(!1);
  x1(() => (S.current = !0, () => {
    S.current = !1;
  })), h.useEffect(() => {
    v.current && (v.current(), v.current = null);
  }, [y]);
  const C = h.useRef(!1), g = er(), m = h.useRef(null), b = h.useRef(null), w = Je(($) => {
    S.current && p((L) => {
      const x = L.items.filter((P) => P.key !== $), j = Yc(L.order.filter((P) => P !== $), x.filter((P) => !P.exiting).map((P) => P.key));
      return {
        items: x,
        order: j
      };
    });
  }), E = Je(($) => {
    const {
      pulsate: L,
      rippleX: x,
      rippleY: j,
      rippleSize: P,
      cb: O
    } = $, A = f.current;
    f.current += 1, p((M) => {
      const z = [...M.items, {
        key: A,
        pulsate: L,
        rippleX: x,
        rippleY: j,
        rippleSize: P,
        exiting: !1
      }];
      return {
        items: z,
        order: Yc(M.order, z.filter((F) => !F.exiting).map((F) => F.key))
      };
    }), v.current = O;
  }), k = Je(($ = Ll, L = Ll, x = ST) => {
    const {
      pulsate: j = !1,
      center: P = s || L.pulsate,
      fakeElement: O = !1
      // Used only by tests.
    } = L;
    if (($ == null ? void 0 : $.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    ($ == null ? void 0 : $.type) === "touchstart" && (C.current = !0);
    const A = O ? null : b.current, {
      rippleX: M,
      rippleY: z,
      rippleSize: F
    } = wT({
      event: $,
      element: A,
      center: P
    });
    $ != null && $.touches ? m.current === null && (m.current = () => {
      E({
        pulsate: j,
        rippleX: M,
        rippleY: z,
        rippleSize: F,
        cb: x
      });
    }, g.start(bT, () => {
      m.current && (m.current(), m.current = null);
    })) : E({
      pulsate: j,
      rippleX: M,
      rippleY: z,
      rippleSize: F,
      cb: x
    });
  }), R = Je(() => {
    k(Ll, {
      pulsate: !0
    });
  }), T = Je(($, L) => {
    if (g.clear(), ($ == null ? void 0 : $.type) === "touchend" && m.current) {
      m.current(), m.current = null, g.start(0, () => {
        T($, L);
      });
      return;
    }
    m.current = null, p((x) => {
      const j = x.items.findIndex((O) => !O.exiting);
      if (j === -1)
        return x;
      const P = x.items.slice();
      return P[j] = {
        ...P[j],
        exiting: !0
      }, {
        items: P,
        order: Yc(x.order, P.filter((O) => !O.exiting).map((O) => O.key))
      };
    }), v.current = L;
  });
  h.useImperativeHandle(n, () => ({
    pulsate: R,
    start: k,
    stop: T
  }), [R, k, T]);
  const I = new Map(y.map(($) => [$.key, $])), N = d.order.map(($) => I.get($)).filter(Boolean);
  return /* @__PURE__ */ c.jsx(ET, {
    className: te(Yt.root, l.root, a),
    ref: b,
    ...u,
    children: N.map(($) => /* @__PURE__ */ c.jsx(PT, {
      classes: {
        ripple: te(l.ripple, Yt.ripple),
        rippleVisible: te(l.rippleVisible, Yt.rippleVisible),
        ripplePulsate: te(l.ripplePulsate, Yt.ripplePulsate),
        child: te(l.child, Yt.child),
        childLeaving: te(l.childLeaving, Yt.childLeaving),
        childPulsate: te(l.childPulsate, Yt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : af,
      pulsate: $.pulsate,
      rippleX: $.rippleX,
      rippleY: $.rippleY,
      rippleSize: $.rippleSize,
      in: !$.exiting,
      onExited: () => w($.key)
    }, $.key))
  });
});
function MT(e) {
  return ye("MuiButtonBase", e);
}
const uf = pe("MuiButtonBase", ["root", "disabled", "focusVisible"]), $T = (e) => {
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
  [`&.${uf.disabled}`]: {
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
      ...G2,
      [`&.${uf.focusVisible}`]: e.focusVisible
    }
  }]
}))), To = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: y = !1,
    focusVisibleClassName: f,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: v,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: S = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: C,
    // private prop to let a parent (like SwitchBase) control its own focus visible style
    internalDisabledThemeFocusVisible: g = !1,
    /* eslint-enable react/prop-types */
    LinkComponent: m = "a",
    nativeButton: b,
    onBlur: w,
    onClick: E,
    onContextMenu: k,
    onDragLeave: R,
    onFocus: T,
    onFocusVisible: I,
    onKeyDown: N,
    onKeyUp: $,
    onMouseDown: L,
    onMouseLeave: x,
    onMouseUp: j,
    onTouchEnd: P,
    onTouchMove: O,
    onTouchStart: A,
    tabIndex: M = 0,
    TouchRippleProps: z,
    touchRippleRef: F,
    type: W,
    ...D
  } = r, Q = !!(D.href || D.to), G = !!D.formAction;
  let X = a;
  X === "button" && Q && (X = m);
  const q = b ?? (typeof X == "string" ? X === "button" : C ?? !1), _ = gT(), ne = ft(_.ref, F), [re, ke] = h.useState(!1);
  (u || S) && re && ke(!1);
  const me = Je((De) => {
    y && !De.repeat && re && De.key === " " && _.stop(De, () => {
      _.start(De);
    });
  }), de = Je((De) => {
    y && De.key === " " && re && !De.defaultPrevented && _.stop(De, () => {
      _.pulsate(De);
    });
  }), {
    getButtonProps: fe,
    rootRef: Me
  } = hT({
    nativeButton: q,
    disabled: u,
    type: W,
    hasFormAction: G,
    tabIndex: M,
    onBeforeKeyDown: me,
    onBeforeKeyUp: de
  }), {
    onClick: Be,
    onKeyDown: Ee,
    onKeyUp: $e,
    ...he
  } = fe({
    onClick: E,
    onKeyDown: N,
    onKeyUp: $
  });
  h.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ke(!0), Me.current.focus();
    }
  }), [Me]);
  const je = _.shouldMount && !d && !u;
  h.useEffect(() => {
    re && y && !d && _.pulsate();
  }, [d, y, re, _]);
  const et = cr(_, "start", L, p), Xe = cr(_, "stop", k, p), Fe = cr(_, "stop", R, p), qe = cr(_, "stop", j, p), U = cr(_, "stop", (De) => {
    re && De.preventDefault(), x && x(De);
  }, p), ie = cr(_, "start", A, p), ce = cr(_, "stop", P, p), se = cr(_, "stop", O, p), Ae = cr(_, "stop", (De) => {
    Ga(De.target) || ke(!1), w && w(De);
  }, !1), oe = Je((De) => {
    Me.current || (Me.current = De.currentTarget), !S && Ga(De.target) && (ke(!0), I && I(De)), T && T(De);
  }), le = {};
  Q && (le.tabIndex = u ? -1 : M, u && (le["aria-disabled"] = u), le.type = W);
  const Ge = ft(n, Me), rt = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: y,
    suppressFocusVisible: S,
    tabIndex: M,
    focusVisible: re,
    internalDisabledThemeFocusVisible: g
  }, pt = $T(rt);
  return /* @__PURE__ */ c.jsxs(jT, {
    as: X,
    className: te(pt.root, l),
    ownerState: rt,
    onBlur: Ae,
    onClick: Be,
    onContextMenu: Xe,
    onFocus: oe,
    onKeyDown: Ee,
    onKeyUp: $e,
    onMouseDown: et,
    onMouseLeave: U,
    onMouseUp: qe,
    onDragLeave: Fe,
    onTouchEnd: ce,
    onTouchMove: se,
    onTouchStart: ie,
    ref: Ge,
    ...Q ? le : he,
    ...D,
    children: [s, je ? /* @__PURE__ */ c.jsx(IT, {
      ref: ne,
      center: i,
      ...z
    }) : null]
  });
});
function cr(e, t, n, r = !1) {
  return Je((o) => (n && n(o), r || e[t](o), !0));
}
function OT(e) {
  return typeof e.main == "string";
}
function AT(e, t = []) {
  if (!OT(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function At(e = []) {
  return ([, t]) => t && AT(t, e);
}
function NT(e) {
  return ye("MuiAlert", e);
}
const rg = pe("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function LT(e) {
  return ye("MuiCircularProgress", e);
}
pe("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const An = 44, cf = sl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, df = sl`
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
`, zT = typeof cf != "string" ? Ks`
        animation: ${cf} 1.4s linear infinite;
      ` : null, BT = typeof df != "string" ? Ks`
        animation: ${df} 1.4s ease-in-out infinite;
      ` : null, _T = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${ue(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return ve(i, LT, t);
}, FT = H("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ue(n.color)}`]];
  }
})(we(({
  theme: e
}) => {
  const t = _p(e, {
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
      style: zT || {
        animation: `${cf} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(At()).map(([n]) => ({
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
  const t = _p(e, {
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
      style: BT || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${df} 1.4s ease-in-out infinite`
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
}))), xs = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    size: d = 40,
    style: p,
    thickness: y = 3.6,
    value: f = r.min ?? 0,
    variant: v = "indeterminate",
    ...S
  } = r, C = a ?? 0, g = u ?? 100, m = {
    ...r,
    color: i,
    disableShrink: s,
    size: d,
    thickness: y,
    value: f,
    variant: v,
    enableTrackSlot: l
  }, b = _T(m), w = {}, E = {}, k = {};
  if (v === "determinate") {
    const R = 2 * Math.PI * ((An - y) / 2), T = g - C;
    w.strokeDasharray = R.toFixed(3), w.strokeDashoffset = T > 0 ? `${((g - f) / T * R).toFixed(3)}px` : `${R.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = f, k["aria-valuemin"] = C, k["aria-valuemax"] = g;
  }
  return /* @__PURE__ */ c.jsx(FT, {
    className: te(b.root, o),
    style: {
      width: d,
      height: d,
      ...E,
      ...p
    },
    ownerState: m,
    ref: n,
    role: "progressbar",
    ...k,
    ...S,
    children: /* @__PURE__ */ c.jsxs(DT, {
      className: b.svg,
      ownerState: m,
      viewBox: `${An / 2} ${An / 2} ${An} ${An}`,
      children: [l ? /* @__PURE__ */ c.jsx(UT, {
        className: b.track,
        ownerState: m,
        cx: An,
        cy: An,
        r: (An - y) / 2,
        fill: "none",
        strokeWidth: y,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ c.jsx(WT, {
        className: b.circle,
        style: w,
        ownerState: m,
        cx: An,
        cy: An,
        r: (An - y) / 2,
        fill: "none",
        strokeWidth: y
      })]
    })
  });
});
function VT(e) {
  return ye("MuiIconButton", e);
}
const og = pe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), HT = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${ue(r)}`, o && `edge${ue(o)}`, `size${ue(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return ve(l, VT, t);
}, KT = H(To, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ue(n.color)}`], n.edge && t[`edge${ue(n.edge)}`], t[`size${ue(n.size)}`]];
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
  }, ...Object.entries(e.palette).filter(At()).map(([t]) => ({
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
  [`&.${og.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${og.loading}`]: {
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
})), Ln = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    size: d = "medium",
    id: p,
    loading: y = null,
    loadingIndicator: f,
    ...v
  } = r, S = Tr(p), C = f ?? /* @__PURE__ */ c.jsx(xs, {
    "aria-labelledby": S,
    color: "inherit",
    size: 16
  }), g = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: u,
    loading: y,
    loadingIndicator: C,
    size: d
  }, m = HT(g);
  return /* @__PURE__ */ c.jsxs(KT, {
    id: y ? S : p,
    className: te(m.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !u,
    disabled: a || y,
    ref: n,
    ...v,
    ownerState: g,
    children: [typeof y == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ c.jsx("span", {
      className: m.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ c.jsx(GT, {
        className: m.loadingIndicator,
        ownerState: g,
        children: y && C
      })
    }), i]
  });
}), YT = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), QT = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), XT = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), qT = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), ZT = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), JT = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${ue(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return ve(i, NT, o);
}, eR = H(sr, {
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
    variants: [...Object.entries(e.palette).filter(At(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${rg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(At(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${rg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(At(["dark"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: {
        ...e.focusVisible && n1(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
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
}), ig = {
  success: /* @__PURE__ */ c.jsx(YT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ c.jsx(QT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ c.jsx(XT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ c.jsx(qT, {
    fontSize: "inherit"
  })
}, sg = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    iconMapping: d = ig,
    onClose: p,
    role: y = "alert",
    severity: f = "success",
    slotProps: v = {},
    slots: S = {},
    variant: C = "standard",
    ...g
  } = r, m = {
    ...r,
    color: a,
    severity: f,
    variant: C,
    colorSeverity: a || f
  }, b = JT(m), w = {
    slots: S,
    slotProps: v
  }, [E, k] = Se("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: te(b.root, s),
    elementType: eR,
    externalForwardedProps: {
      ...w,
      ...g
    },
    ownerState: m,
    additionalProps: {
      role: y,
      elevation: 0
    }
  }), [R, T] = Se("icon", {
    className: b.icon,
    elementType: tR,
    externalForwardedProps: w,
    ownerState: m
  }), [I, N] = Se("message", {
    className: b.message,
    elementType: nR,
    externalForwardedProps: w,
    ownerState: m
  }), [$, L] = Se("action", {
    className: b.action,
    elementType: rR,
    externalForwardedProps: w,
    ownerState: m
  }), [x, j] = Se("closeButton", {
    elementType: Ln,
    externalForwardedProps: w,
    ownerState: m
  }), [P, O] = Se("closeIcon", {
    elementType: ZT,
    externalForwardedProps: w,
    ownerState: m
  });
  return /* @__PURE__ */ c.jsxs(E, {
    ...k,
    children: [u !== !1 ? /* @__PURE__ */ c.jsx(R, {
      ...T,
      children: u || d[f] || ig[f]
    }) : null, /* @__PURE__ */ c.jsx(I, {
      ...N,
      children: i
    }), o != null ? /* @__PURE__ */ c.jsx($, {
      ...L,
      children: o
    }) : null, o == null && p ? /* @__PURE__ */ c.jsx($, {
      ...L,
      children: /* @__PURE__ */ c.jsx(x, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: p,
        ...j,
        children: /* @__PURE__ */ c.jsx(P, {
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
    root: ["root", o, e.align !== "inherit" && `align${ue(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return ve(s, oR, i);
}, sR = H("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ue(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
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
    })), ...Object.entries(e.palette).filter(At()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${ue(n)}`
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
})), lg = {
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
}, Ie = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    variant: d = "body1",
    variantMapping: p = lg,
    ...y
  } = r, f = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: u,
    variant: d,
    variantMapping: p
  }, v = l || p[d] || lg[d] || "span", S = iR(f);
  return /* @__PURE__ */ c.jsx(sR, {
    as: v,
    ref: n,
    className: te(S.root, s),
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
function go(e, t) {
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
var rn = "top", In = "bottom", Mn = "right", on = "left", Up = "auto", ul = [rn, In, Mn, on], wi = "start", Qs = "end", lR = "clippingParents", b1 = "viewport", Yi = "popper", aR = "reference", ag = /* @__PURE__ */ ul.reduce(function(e, t) {
  return e.concat([t + "-" + wi, t + "-" + Qs]);
}, []), S1 = /* @__PURE__ */ [].concat(ul, [Up]).reduce(function(e, t) {
  return e.concat([t, t + "-" + wi, t + "-" + Qs]);
}, []), uR = "beforeRead", cR = "read", dR = "afterRead", fR = "beforeMain", pR = "main", mR = "afterMain", hR = "beforeWrite", gR = "write", yR = "afterWrite", vR = [uR, cR, dR, fR, pR, mR, hR, gR, yR];
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
function Ro(e) {
  var t = mn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Rn(e) {
  var t = mn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Vp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = mn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function xR(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Rn(i) || !lr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
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
      !Rn(o) || !lr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
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
function ir(e) {
  return e.split("-")[0];
}
var yo = Math.max, Qa = Math.min, Ci = Math.round;
function ff() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function w1() {
  return !/^((?!chrome|android).)*safari/i.test(ff());
}
function ki(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Rn(e) && (o = e.offsetWidth > 0 && Ci(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ci(r.height) / e.offsetHeight || 1);
  var s = Ro(e) ? mn(e) : window, l = s.visualViewport, a = !w1() && n, u = (r.left + (a && l ? l.offsetLeft : 0)) / o, d = (r.top + (a && l ? l.offsetTop : 0)) / i, p = r.width / o, y = r.height / i;
  return {
    width: p,
    height: y,
    top: d,
    right: u + p,
    bottom: d + y,
    left: u,
    x: u,
    y: d
  };
}
function Hp(e) {
  var t = ki(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function C1(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Vp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Rr(e) {
  return mn(e).getComputedStyle(e);
}
function wR(e) {
  return ["table", "td", "th"].indexOf(lr(e)) >= 0;
}
function Jr(e) {
  return ((Ro(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ac(e) {
  return lr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Vp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Jr(e)
  );
}
function ug(e) {
  return !Rn(e) || // https://github.com/popperjs/popper-core/issues/837
  Rr(e).position === "fixed" ? null : e.offsetParent;
}
function CR(e) {
  var t = /firefox/i.test(ff()), n = /Trident/i.test(ff());
  if (n && Rn(e)) {
    var r = Rr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = ac(e);
  for (Vp(o) && (o = o.host); Rn(o) && ["html", "body"].indexOf(lr(o)) < 0; ) {
    var i = Rr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function cl(e) {
  for (var t = mn(e), n = ug(e); n && wR(n) && Rr(n).position === "static"; )
    n = ug(n);
  return n && (lr(n) === "html" || lr(n) === "body" && Rr(n).position === "static") ? t : n || CR(e) || t;
}
function Kp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function bs(e, t, n) {
  return yo(e, Qa(t, n));
}
function kR(e, t, n) {
  var r = bs(e, t, n);
  return r > n ? n : r;
}
function k1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function T1(e) {
  return Object.assign({}, k1(), e);
}
function R1(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var TR = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, T1(typeof t != "number" ? t : R1(t, ul));
};
function RR(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = ir(n.placement), a = Kp(l), u = [on, Mn].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var p = TR(o.padding, n), y = Hp(i), f = a === "y" ? rn : on, v = a === "y" ? In : Mn, S = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], C = s[a] - n.rects.reference[a], g = cl(i), m = g ? a === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = S / 2 - C / 2, w = p[f], E = m - y[d] - p[v], k = m / 2 - y[d] / 2 + b, R = bs(w, k, E), T = a;
    n.modifiersData[r] = (t = {}, t[T] = R, t.centerOffset = R - k, t);
  }
}
function ER(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || C1(t.elements.popper, o) && (t.elements.arrow = o));
}
const PR = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: RR,
  effect: ER,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ti(e) {
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
    x: Ci(n * o) / o || 0,
    y: Ci(r * o) / o || 0
  };
}
function cg(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, y = s.x, f = y === void 0 ? 0 : y, v = s.y, S = v === void 0 ? 0 : v, C = typeof d == "function" ? d({
    x: f,
    y: S
  }) : {
    x: f,
    y: S
  };
  f = C.x, S = C.y;
  var g = s.hasOwnProperty("x"), m = s.hasOwnProperty("y"), b = on, w = rn, E = window;
  if (u) {
    var k = cl(n), R = "clientHeight", T = "clientWidth";
    if (k === mn(n) && (k = Jr(n), Rr(k).position !== "static" && l === "absolute" && (R = "scrollHeight", T = "scrollWidth")), k = k, o === rn || (o === on || o === Mn) && i === Qs) {
      w = In;
      var I = p && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      S -= I - r.height, S *= a ? 1 : -1;
    }
    if (o === on || (o === rn || o === In) && i === Qs) {
      b = Mn;
      var N = p && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      f -= N - r.width, f *= a ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: l
  }, u && IR), L = d === !0 ? MR({
    x: f,
    y: S
  }, mn(n)) : {
    x: f,
    y: S
  };
  if (f = L.x, S = L.y, a) {
    var x;
    return Object.assign({}, $, (x = {}, x[w] = m ? "0" : "", x[b] = g ? "0" : "", x.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + S + "px)" : "translate3d(" + f + "px, " + S + "px, 0)", x));
  }
  return Object.assign({}, $, (t = {}, t[w] = m ? S + "px" : "", t[b] = g ? f + "px" : "", t.transform = "", t));
}
function $R(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, u = {
    placement: ir(t.placement),
    variation: Ti(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, cg(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, cg(Object.assign({}, u, {
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
var zl = {
  passive: !0
};
function OR(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = mn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, zl);
  }), l && a.addEventListener("resize", n.update, zl), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, zl);
    }), l && a.removeEventListener("resize", n.update, zl);
  };
}
const AR = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: OR,
  data: {}
};
var NR = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function fa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return NR[t];
  });
}
var LR = {
  start: "end",
  end: "start"
};
function dg(e) {
  return e.replace(/start|end/g, function(t) {
    return LR[t];
  });
}
function Gp(e) {
  var t = mn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Yp(e) {
  return ki(Jr(e)).left + Gp(e).scrollLeft;
}
function zR(e, t) {
  var n = mn(e), r = Jr(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = w1();
    (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Yp(e),
    y: a
  };
}
function BR(e) {
  var t, n = Jr(e), r = Gp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = yo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = yo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Yp(e), a = -r.scrollTop;
  return Rr(o || n).direction === "rtl" && (l += yo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Qp(e) {
  var t = Rr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function E1(e) {
  return ["html", "body", "#document"].indexOf(lr(e)) >= 0 ? e.ownerDocument.body : Rn(e) && Qp(e) ? e : E1(ac(e));
}
function Ss(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = E1(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = mn(r), s = o ? [i].concat(i.visualViewport || [], Qp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ss(ac(s)))
  );
}
function pf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _R(e, t) {
  var n = ki(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function fg(e, t, n) {
  return t === b1 ? pf(zR(e, n)) : Ro(t) ? _R(t, n) : pf(BR(Jr(e)));
}
function FR(e) {
  var t = Ss(ac(e)), n = ["absolute", "fixed"].indexOf(Rr(e).position) >= 0, r = n && Rn(e) ? cl(e) : e;
  return Ro(r) ? t.filter(function(o) {
    return Ro(o) && C1(o, r) && lr(o) !== "body";
  }) : [];
}
function DR(e, t, n, r) {
  var o = t === "clippingParents" ? FR(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, u) {
    var d = fg(e, u, r);
    return a.top = yo(d.top, a.top), a.right = Qa(d.right, a.right), a.bottom = Qa(d.bottom, a.bottom), a.left = yo(d.left, a.left), a;
  }, fg(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function P1(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ir(r) : null, i = r ? Ti(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case rn:
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
  var u = o ? Kp(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case wi:
        a[u] = a[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Qs:
        a[u] = a[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return a;
}
function Xs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? lR : l, u = n.rootBoundary, d = u === void 0 ? b1 : u, p = n.elementContext, y = p === void 0 ? Yi : p, f = n.altBoundary, v = f === void 0 ? !1 : f, S = n.padding, C = S === void 0 ? 0 : S, g = T1(typeof C != "number" ? C : R1(C, ul)), m = y === Yi ? aR : Yi, b = e.rects.popper, w = e.elements[v ? m : y], E = DR(Ro(w) ? w : w.contextElement || Jr(e.elements.popper), a, d, s), k = ki(e.elements.reference), R = P1({
    reference: k,
    element: b,
    placement: o
  }), T = pf(Object.assign({}, b, R)), I = y === Yi ? T : k, N = {
    top: E.top - I.top + g.top,
    bottom: I.bottom - E.bottom + g.bottom,
    left: E.left - I.left + g.left,
    right: I.right - E.right + g.right
  }, $ = e.modifiersData.offset;
  if (y === Yi && $) {
    var L = $[o];
    Object.keys(N).forEach(function(x) {
      var j = [Mn, In].indexOf(x) >= 0 ? 1 : -1, P = [rn, In].indexOf(x) >= 0 ? "y" : "x";
      N[x] += L[P] * j;
    });
  }
  return N;
}
function WR(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? S1 : a, d = Ti(r), p = d ? l ? ag : ag.filter(function(v) {
    return Ti(v) === d;
  }) : ul, y = p.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  y.length === 0 && (y = p);
  var f = y.reduce(function(v, S) {
    return v[S] = Xs(e, {
      placement: S,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[ir(S)], v;
  }, {});
  return Object.keys(f).sort(function(v, S) {
    return f[v] - f[S];
  });
}
function UR(e) {
  if (ir(e) === Up)
    return [];
  var t = fa(e);
  return [dg(e), t, dg(t)];
}
function VR(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, y = n.altBoundary, f = n.flipVariations, v = f === void 0 ? !0 : f, S = n.allowedAutoPlacements, C = t.options.placement, g = ir(C), m = g === C, b = a || (m || !v ? [fa(C)] : UR(C)), w = [C].concat(b).reduce(function(G, X) {
      return G.concat(ir(X) === Up ? WR(t, {
        placement: X,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: S
      }) : X);
    }, []), E = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), T = !0, I = w[0], N = 0; N < w.length; N++) {
      var $ = w[N], L = ir($), x = Ti($) === wi, j = [rn, In].indexOf(L) >= 0, P = j ? "width" : "height", O = Xs(t, {
        placement: $,
        boundary: d,
        rootBoundary: p,
        altBoundary: y,
        padding: u
      }), A = j ? x ? Mn : on : x ? In : rn;
      E[P] > k[P] && (A = fa(A));
      var M = fa(A), z = [];
      if (i && z.push(O[L] <= 0), l && z.push(O[A] <= 0, O[M] <= 0), z.every(function(G) {
        return G;
      })) {
        I = $, T = !1;
        break;
      }
      R.set($, z);
    }
    if (T)
      for (var F = v ? 3 : 1, W = function(X) {
        var K = w.find(function(q) {
          var _ = R.get(q);
          if (_)
            return _.slice(0, X).every(function(ne) {
              return ne;
            });
        });
        if (K)
          return I = K, "break";
      }, D = F; D > 0; D--) {
        var Q = W(D);
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
function pg(e, t, n) {
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
function mg(e) {
  return [rn, Mn, In, on].some(function(t) {
    return e[t] >= 0;
  });
}
function KR(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Xs(t, {
    elementContext: "reference"
  }), l = Xs(t, {
    altBoundary: !0
  }), a = pg(s, r), u = pg(l, o, i), d = mg(a), p = mg(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": p
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
  var r = ir(e), o = [on, rn].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [on, Mn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function QR(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = S1.reduce(function(d, p) {
    return d[p] = YR(p, t.rects, i), d;
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
  t.modifiersData[n] = P1({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const ZR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: qR,
  data: {}
};
function JR(e) {
  return e === "x" ? "y" : "x";
}
function eE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, y = n.tether, f = y === void 0 ? !0 : y, v = n.tetherOffset, S = v === void 0 ? 0 : v, C = Xs(t, {
    boundary: a,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), g = ir(t.placement), m = Ti(t.placement), b = !m, w = Kp(g), E = JR(w), k = t.modifiersData.popperOffsets, R = t.rects.reference, T = t.rects.popper, I = typeof S == "function" ? S(Object.assign({}, t.rects, {
    placement: t.placement
  })) : S, N = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var x, j = w === "y" ? rn : on, P = w === "y" ? In : Mn, O = w === "y" ? "height" : "width", A = k[w], M = A + C[j], z = A - C[P], F = f ? -T[O] / 2 : 0, W = m === wi ? R[O] : T[O], D = m === wi ? -T[O] : -R[O], Q = t.elements.arrow, G = f && Q ? Hp(Q) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : k1(), K = X[j], q = X[P], _ = bs(0, R[O], G[O]), ne = b ? R[O] / 2 - F - _ - K - N.mainAxis : W - _ - K - N.mainAxis, re = b ? -R[O] / 2 + F + _ + q + N.mainAxis : D + _ + q + N.mainAxis, ke = t.elements.arrow && cl(t.elements.arrow), me = ke ? w === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, de = (x = $ == null ? void 0 : $[w]) != null ? x : 0, fe = A + ne - de - me, Me = A + re - de, Be = bs(f ? Qa(M, fe) : M, A, f ? yo(z, Me) : z);
      k[w] = Be, L[w] = Be - A;
    }
    if (l) {
      var Ee, $e = w === "x" ? rn : on, he = w === "x" ? In : Mn, je = k[E], et = E === "y" ? "height" : "width", Xe = je + C[$e], Fe = je - C[he], qe = [rn, on].indexOf(g) !== -1, U = (Ee = $ == null ? void 0 : $[E]) != null ? Ee : 0, ie = qe ? Xe : je - R[et] - T[et] - U + N.altAxis, ce = qe ? je + R[et] + T[et] - U - N.altAxis : Fe, se = f && qe ? kR(ie, je, ce) : bs(f ? ie : Xe, je, f ? ce : Fe);
      k[E] = se, L[E] = se - je;
    }
    t.modifiersData[r] = L;
  }
}
const tE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: eE,
  requiresIfExists: ["offset"]
};
function nE(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function rE(e) {
  return e === mn(e) || !Rn(e) ? Gp(e) : nE(e);
}
function oE(e) {
  var t = e.getBoundingClientRect(), n = Ci(t.width) / e.offsetWidth || 1, r = Ci(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function iE(e, t, n) {
  n === void 0 && (n = !1);
  var r = Rn(t), o = Rn(t) && oE(t), i = Jr(t), s = ki(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((lr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Qp(i)) && (l = rE(t)), Rn(t) ? (a = ki(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Yp(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function sE(e) {
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
function lE(e) {
  var t = sE(e);
  return vR.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function aE(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function uE(e) {
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
var hg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function gg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function cE(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? hg : o;
  return function(l, a, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, hg, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, p = [], y = !1, f = {
      state: d,
      setOptions: function(g) {
        var m = typeof g == "function" ? g(d.options) : g;
        S(), d.options = Object.assign({}, i, d.options, m), d.scrollParents = {
          reference: Ro(l) ? Ss(l) : l.contextElement ? Ss(l.contextElement) : [],
          popper: Ss(a)
        };
        var b = lE(uE([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = b.filter(function(w) {
          return w.enabled;
        }), v(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var g = d.elements, m = g.reference, b = g.popper;
          if (gg(m, b)) {
            d.rects = {
              reference: iE(m, cl(b), d.options.strategy === "fixed"),
              popper: Hp(b)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(N) {
              return d.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var w = 0; w < d.orderedModifiers.length; w++) {
              if (d.reset === !0) {
                d.reset = !1, w = -1;
                continue;
              }
              var E = d.orderedModifiers[w], k = E.fn, R = E.options, T = R === void 0 ? {} : R, I = E.name;
              typeof k == "function" && (d = k({
                state: d,
                options: T,
                name: I,
                instance: f
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: aE(function() {
        return new Promise(function(C) {
          f.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        S(), y = !0;
      }
    };
    if (!gg(l, a))
      return f;
    f.setOptions(u).then(function(C) {
      !y && u.onFirstUpdate && u.onFirstUpdate(C);
    });
    function v() {
      d.orderedModifiers.forEach(function(C) {
        var g = C.name, m = C.options, b = m === void 0 ? {} : m, w = C.effect;
        if (typeof w == "function") {
          var E = w({
            state: d,
            name: g,
            instance: f,
            options: b
          }), k = function() {
          };
          p.push(E || k);
        }
      });
    }
    function S() {
      p.forEach(function(C) {
        return C();
      }), p = [];
    }
    return f;
  };
}
var dE = [AR, ZR, jR, SR, XR, HR, tE, PR, GR], fE = /* @__PURE__ */ cE({
  defaultModifiers: dE
});
function Ri(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : y1(n, r), {
    props: l,
    internalRef: a
  } = v1({
    ...i,
    externalSlotProps: s
  }), u = ft(a, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return g1(t, {
    ...l,
    ref: u
  }, r);
}
function Io(e) {
  var t;
  return parseInt(h.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function pE(e) {
  return typeof e == "function" ? e() : e;
}
const I1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = h.useState(null), a = ft(/* @__PURE__ */ h.isValidElement(r) ? Io(r) : null, n);
  if (ct(() => {
    i || l(pE(o) || document.body);
  }, [o, i]), ct(() => {
    if (s && !i)
      return sf(n, s), () => {
        sf(n, null);
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
  return s && /* @__PURE__ */ u0.createPortal(r, s);
});
function mE(e) {
  return ye("MuiPopper", e);
}
pe("MuiPopper", ["root"]);
function hE(e, t) {
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
function M1(e) {
  return typeof e == "function" ? e() : e;
}
function gE(e) {
  return e.nodeType !== void 0;
}
const yE = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, mE, t);
}, vE = {}, xE = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: u,
    popperOptions: d,
    popperRef: p,
    slotProps: y = {},
    slots: f = {},
    TransitionProps: v,
    // @ts-ignore internal logic
    ownerState: S,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, g = h.useRef(null), m = ft(g, n), b = h.useRef(null), w = ft(b, p), E = h.useRef(w);
  ct(() => {
    E.current = w;
  }, [w]), h.useImperativeHandle(p, () => b.current, []);
  const k = hE(u, i), [R, T] = h.useState(k), I = h.useMemo(() => M1(r), [r]);
  h.useEffect(() => {
    b.current && b.current.forceUpdate();
  }), ct(() => {
    if (!I || !a)
      return;
    const j = (M) => {
      T(M.placement);
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
        state: M
      }) => {
        j(M);
      }
    }];
    l != null && (P = P.concat(l)), d && d.modifiers != null && (P = P.concat(d.modifiers));
    const O = fE(I, g.current, {
      placement: k,
      ...d,
      modifiers: P
    });
    E.current(O);
    const A = g.current;
    return () => {
      if (A) {
        const {
          style: M
        } = A, z = M.position, F = M.top, W = M.left, D = M.transform;
        O.destroy(), M.position = z, M.top = F, M.left = W, M.transform = D;
      } else
        O.destroy();
      E.current(null);
    };
  }, [I, s, l, a, d, k]);
  const N = {
    placement: R
  };
  v !== null && (N.TransitionProps = v);
  const $ = yE(t), L = f.root ?? "div", x = Ri({
    elementType: L,
    externalSlotProps: y.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: m
    },
    ownerState: t,
    className: $.root
  });
  return /* @__PURE__ */ c.jsx(L, {
    ...x,
    children: typeof o == "function" ? o(N) : o
  });
}), bE = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: u,
    open: d,
    placement: p = "bottom",
    popperOptions: y = vE,
    popperRef: f,
    style: v,
    transition: S = !1,
    slotProps: C = {},
    slots: g = {},
    ...m
  } = t, [b, w] = h.useState(!0), E = () => {
    w(!1);
  }, k = () => {
    w(!0);
  };
  if (!a && !d && (!S || b))
    return null;
  let R;
  if (i)
    R = i;
  else if (r) {
    const N = M1(r);
    R = N && gE(N) ? ht(N).body : ht(null).body;
  }
  const T = !d && a && (!S || b) ? "none" : void 0, I = S ? {
    in: d,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ c.jsx(I1, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ c.jsx(xE, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: S ? !b : d,
      placement: p,
      popperOptions: y,
      popperRef: f,
      slotProps: C,
      slots: g,
      ...m,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: T,
        ...v
      },
      TransitionProps: I,
      children: o
    })
  });
}), SE = H(bE, {
  name: "MuiPopper",
  slot: "Root"
})({}), $1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = Zu(), o = xe({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: d,
    open: p,
    placement: y,
    popperOptions: f,
    popperRef: v,
    transition: S,
    slots: C,
    slotProps: g,
    ...m
  } = o, b = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: d,
    open: p,
    placement: y,
    popperOptions: f,
    popperRef: v,
    transition: S,
    ...m
  };
  return /* @__PURE__ */ c.jsx(SE, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: g,
    ...b,
    ref: n
  });
}), wE = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function CE(e) {
  return ye("MuiChip", e);
}
const _e = pe("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), kE = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: i,
    clickable: s,
    variant: l
  } = e, a = {
    root: ["root", l, n && "disabled", `size${ue(r)}`, `color${ue(o)}`, s && "clickable", i && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return ve(a, CE, t);
}, TE = H("div", {
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
    }, t.root, t[`size${ue(s)}`], t[`color${ue(r)}`], o && t.clickable, i && t.deletable, t[l]];
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
    }, ...Object.entries(e.palette).filter(At(["contrastText"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(At(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(At(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(At()).map(([n]) => ({
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
})), RE = H("span", {
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
function yg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const oo = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disabled: d = !1,
    icon: p,
    label: y,
    onClick: f,
    onDelete: v,
    onKeyDown: S,
    onKeyUp: C,
    size: g = "medium",
    variant: m = "filled",
    tabIndex: b,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: E = {},
    slotProps: k = {},
    ...R
  } = r, {
    nativeButton: T,
    ...I
  } = R, N = h.useRef(null), $ = ft(N, n), L = (_) => {
    _.stopPropagation(), v(_);
  }, x = (_) => {
    _.currentTarget === _.target && yg(_) && _.preventDefault(), S && S(_);
  }, j = (_) => {
    _.currentTarget === _.target && v && yg(_) && v(_), C && C(_);
  }, P = s !== !1 && f ? !0 : s, O = P || v ? To : a || "div", A = {
    ...r,
    component: O,
    disabled: d,
    size: g,
    color: l,
    iconColor: /* @__PURE__ */ h.isValidElement(p) && p.props.color || l,
    onDelete: !!v,
    clickable: P,
    variant: m
  }, M = kE(A), z = O === To ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: M.focusVisible,
    ...v && {
      disableRipple: !0
    },
    ...T !== void 0 && {
      nativeButton: T
    }
  } : {};
  let F = null;
  v && (F = u && /* @__PURE__ */ h.isValidElement(u) ? /* @__PURE__ */ h.cloneElement(u, {
    className: te(u.props.className, M.deleteIcon),
    onClick: L
  }) : /* @__PURE__ */ c.jsx(wE, {
    className: M.deleteIcon,
    onClick: L
  }));
  let W = null;
  o && /* @__PURE__ */ h.isValidElement(o) && (W = /* @__PURE__ */ h.cloneElement(o, {
    className: te(M.avatar, o.props.className)
  }));
  let D = null;
  p && /* @__PURE__ */ h.isValidElement(p) && (D = /* @__PURE__ */ h.cloneElement(p, {
    className: te(M.icon, p.props.className)
  }));
  const Q = {
    slots: E,
    slotProps: k
  }, [G, X] = Se("root", {
    elementType: TE,
    externalForwardedProps: {
      ...Q,
      ...I
    },
    ownerState: A,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: $,
    className: te(M.root, i),
    additionalProps: {
      disabled: P && d ? !0 : void 0,
      tabIndex: w && d ? -1 : b,
      ...z
    },
    getSlotProps: (_) => ({
      ..._,
      onClick: (ne) => {
        var re;
        (re = _.onClick) == null || re.call(_, ne), f == null || f(ne);
      },
      onKeyDown: (ne) => {
        var re;
        (re = _.onKeyDown) == null || re.call(_, ne), x(ne);
      },
      onKeyUp: (ne) => {
        var re;
        (re = _.onKeyUp) == null || re.call(_, ne), j(ne);
      }
    })
  }), [K, q] = Se("label", {
    elementType: RE,
    externalForwardedProps: Q,
    ownerState: A,
    className: M.label
  });
  return /* @__PURE__ */ c.jsxs(G, {
    as: O,
    ...X,
    children: [W || D, /* @__PURE__ */ c.jsx(K, {
      ...q,
      children: y
    }), F]
  });
}), EE = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), PE = {
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
}, IE = {
  opacity: 0,
  visibility: "hidden"
}, j1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = Zr(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: u,
    in: d,
    onEnter: p,
    onEntered: y,
    onEntering: f,
    onExit: v,
    onExited: S,
    onExiting: C,
    style: g,
    timeout: m = o,
    ...b
  } = t, w = sc(r.motion.reducedMotion, a), E = h.useRef(null), k = ft(E, Io(l), n), R = Cn(E, f), T = Cn(E, (j, P) => {
    w.shouldReduceMotion || Bp(j);
    const O = Va({
      style: g,
      timeout: m,
      easing: u
    }, {
      mode: "enter"
    }), A = w.getTransitionTiming({
      duration: O.duration,
      delay: O.delay
    });
    j.style.transition = r.transitions.create("opacity", {
      duration: A.duration,
      easing: O.easing,
      delay: A.delay
    }), p && p(j, P);
  }), I = Cn(E, y), N = Cn(E, C), $ = Cn(E, (j) => {
    const P = Va({
      style: g,
      timeout: m,
      easing: u
    }, {
      mode: "exit"
    }), O = w.getTransitionTiming({
      duration: P.duration,
      delay: P.delay
    });
    j.style.transition = r.transitions.create("opacity", {
      duration: O.duration,
      easing: P.easing,
      delay: O.delay
    }), v && v(j);
  }), L = Cn(E, (j) => {
    j.style.transition = "", S && S(j);
  }), x = i ? (j) => {
    i(E.current, j);
  } : void 0;
  return /* @__PURE__ */ c.jsx(p1, {
    appear: s,
    in: d,
    nodeRef: E,
    onEnter: T,
    onEntered: I,
    onEntering: R,
    onExit: $,
    onExited: L,
    onExiting: N,
    addEndListener: x,
    reduceMotion: w.shouldReduceMotion,
    timeout: m,
    ...b,
    children: (j, {
      ownerState: P,
      ...O
    }) => {
      const A = d1(j, d, PE, IE, g, l.props.style);
      return /* @__PURE__ */ h.cloneElement(l, {
        style: A,
        ref: k,
        ...O
      });
    }
  });
});
function ME(e) {
  return ye("MuiBackdrop", e);
}
pe("MuiBackdrop", ["root", "invisible"]);
const $E = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ve({
    root: ["root", n && "invisible"]
  }, ME, t);
}, jE = H("div", {
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
}), O1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    slots: d = {},
    transitionDuration: p,
    ...y
  } = r, f = {
    ...r,
    component: s,
    invisible: l
  }, v = $E(f), S = {
    component: s,
    slots: d,
    slotProps: u
  }, [C, g] = Se("root", {
    elementType: jE,
    externalForwardedProps: S,
    className: te(v.root, i),
    ownerState: f
  }), [m, b] = Se("transition", {
    elementType: j1,
    externalForwardedProps: S,
    ownerState: f
  });
  return /* @__PURE__ */ c.jsx(m, {
    in: a,
    timeout: p,
    ...y,
    ...b,
    children: /* @__PURE__ */ c.jsx(C, {
      ...g,
      ref: n,
      children: o
    })
  });
}), OE = pe("MuiBox", ["root"]), AE = ec(), Le = VC({
  themeId: rr,
  defaultTheme: AE,
  defaultClassName: OE.root,
  generateClassName: D0.generate
});
function NE(e) {
  return ye("MuiButton", e);
}
const pr = pe("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), A1 = /* @__PURE__ */ h.createContext({}), N1 = /* @__PURE__ */ h.createContext(void 0), LE = (e) => {
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
    root: ["root", s && "loading", i, `size${ue(o)}`, `color${ue(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${ue(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = ve(u, NE, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, L1 = [{
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
}], zE = H(To, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ue(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
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
    [`&.${pr.disabled}`]: {
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
        [`&.${pr.focusVisible}`]: {
          ...e.focusVisible,
          boxShadow: (r = e.focusVisible) != null && r.boxShadow ? `${(e.vars || e).shadows[6]}, ${e.focusVisible.boxShadow}` : (e.vars || e).shadows[6]
        },
        [`&.${pr.disabled}`]: {
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
        [`&.${pr.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(At()).map(([i]) => ({
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
        [`&.${pr.focusVisible}`]: {
          boxShadow: ((o = e.focusVisible) == null ? void 0 : o.boxShadow) ?? "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${pr.disabled}`]: {
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
        [`&.${pr.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), BE = H("span", {
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
  }, ...L1]
})), _E = H("span", {
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
  }, ...L1]
})), FE = H("span", {
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
})), vg = H("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), $t = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = h.useContext(A1), o = h.useContext(N1), i = Si(r, t), s = xe({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: u = "button",
    className: d,
    disabled: p = !1,
    disableElevation: y = !1,
    disableFocusRipple: f = !1,
    endIcon: v,
    focusVisibleClassName: S,
    fullWidth: C = !1,
    id: g,
    loading: m = null,
    loadingIndicator: b,
    loadingPosition: w = "center",
    size: E = "medium",
    startIcon: k,
    type: R,
    variant: T = "text",
    ...I
  } = s, N = Tr(g), $ = b ?? /* @__PURE__ */ c.jsx(xs, {
    "aria-labelledby": N,
    color: "inherit",
    size: 16
  }), L = {
    ...s,
    color: a,
    component: u,
    disabled: p,
    disableElevation: y,
    disableFocusRipple: f,
    fullWidth: C,
    loading: m,
    loadingIndicator: $,
    loadingPosition: w,
    size: E,
    type: R,
    variant: T
  }, x = LE(L), j = (k || m && w === "start") && /* @__PURE__ */ c.jsx(BE, {
    className: x.startIcon,
    ownerState: L,
    children: k || /* @__PURE__ */ c.jsx(vg, {
      className: x.loadingIconPlaceholder,
      ownerState: L
    })
  }), P = (v || m && w === "end") && /* @__PURE__ */ c.jsx(_E, {
    className: x.endIcon,
    ownerState: L,
    children: v || /* @__PURE__ */ c.jsx(vg, {
      className: x.loadingIconPlaceholder,
      ownerState: L
    })
  }), O = o || "", A = typeof m == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ c.jsx("span", {
      className: x.loadingWrapper,
      style: {
        display: "contents"
      },
      children: m && /* @__PURE__ */ c.jsx(FE, {
        className: x.loadingIndicator,
        ownerState: L,
        children: $
      })
    })
  ) : null, {
    root: M,
    ...z
  } = x;
  return /* @__PURE__ */ c.jsxs(zE, {
    ownerState: L,
    className: te(r.className, x.root, d, O),
    component: u,
    disabled: p || m,
    focusRipple: !f,
    focusVisibleClassName: te(x.focusVisible, S),
    ref: n,
    internalNativeButton: !0,
    type: R,
    id: m ? N : g,
    ...I,
    classes: z,
    children: [j, w !== "end" && A, l, w === "end" && A, P]
  });
});
function DE(e) {
  return h.Children.toArray(e).filter((t) => /* @__PURE__ */ h.isValidElement(t));
}
function WE(e) {
  return ye("MuiButtonGroup", e);
}
const Ce = pe("MuiButtonGroup", ["root", "contained", "outlined", "text", "disableElevation", "disabled", "firstButton", "fullWidth", "horizontal", "vertical", "colorPrimary", "colorSecondary", "grouped", "lastButton", "middleButton"]), UE = (e, t) => {
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
}, VE = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    disableElevation: o,
    fullWidth: i,
    orientation: s,
    variant: l
  } = e, a = {
    root: ["root", l, s, i && "fullWidth", o && "disableElevation", `color${ue(n)}`],
    grouped: ["grouped", r && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return ve(a, WE, t);
}, HE = H("div", {
  name: "MuiButtonGroup",
  slot: "Root",
  overridesResolver: UE
})(we(({
  theme: e
}) => ({
  display: "inline-flex",
  borderRadius: (e.vars || e).shape.borderRadius,
  ...e.focusVisible && {
    // paint the focused item above its siblings so they cannot cover the ring edges
    [`& .${Ce.grouped}.${pr.focusVisible}`]: {
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
        [`& .${Ce.grouped}.${pr.focusVisible}`]: {
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
  }, ...Object.entries(e.palette).filter(At()).flatMap(([t]) => [{
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
  }, ...Object.entries(e.palette).filter(At(["dark"])).map(([t]) => ({
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
}))), KE = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disableFocusRipple: d = !1,
    disableRipple: p = !1,
    fullWidth: y = !1,
    orientation: f = "horizontal",
    size: v = "medium",
    variant: S = "outlined",
    ...C
  } = r, g = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    disableElevation: u,
    disableFocusRipple: d,
    disableRipple: p,
    fullWidth: y,
    orientation: f,
    size: v,
    variant: S
  }, m = VE(g), b = h.useMemo(() => ({
    className: m.grouped,
    color: s,
    disabled: a,
    disableElevation: u,
    disableFocusRipple: r.disableFocusRipple,
    disableRipple: r.disableRipple,
    fullWidth: y,
    size: v,
    variant: S
  }), [s, a, u, r.disableFocusRipple, r.disableRipple, y, v, S, m.grouped]), w = DE(o), E = w.length, k = (R) => {
    const T = R === 0, I = R === E - 1;
    return T && I ? "" : T ? m.firstButton : I ? m.lastButton : m.middleButton;
  };
  return /* @__PURE__ */ c.jsx(HE, {
    as: l,
    role: "group",
    className: te(m.root, i),
    ref: n,
    ownerState: g,
    ...C,
    children: /* @__PURE__ */ c.jsx(A1.Provider, {
      value: b,
      children: w.map((R, T) => /* @__PURE__ */ c.jsx(N1.Provider, {
        value: k(T),
        children: R
      }, T))
    })
  });
});
function GE(e) {
  return ye("MuiCard", e);
}
pe("MuiCard", ["root"]);
const YE = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, GE, t);
}, QE = H(sr, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Bl = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = YE(l);
  return /* @__PURE__ */ c.jsx(QE, {
    className: te(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function XE(e) {
  return ye("MuiCardContent", e);
}
pe("MuiCardContent", ["root"]);
const qE = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, XE, t);
}, ZE = H("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), _l = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = qE(l);
  return /* @__PURE__ */ c.jsx(ZE, {
    as: i,
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function xg(e) {
  return e.substring(2).toLowerCase();
}
function JE(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function eP(e) {
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
  const d = ft(Io(t), l), p = Je((v) => {
    const S = u.current;
    u.current = !1;
    const C = ht(l.current);
    if (!a.current || !l.current || "clientX" in v && JE(v, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let g;
    v.composedPath ? g = v.composedPath().includes(l.current) : g = !go(C.documentElement, v.target) || go(l.current, v.target), !g && (n || !S) && o(v);
  }), y = (v) => (S) => {
    u.current = !0;
    const C = t.props[v];
    C && C(S);
  }, f = {
    ref: d
  };
  return i !== !1 && (f[i] = y(i)), h.useEffect(() => {
    if (i !== !1) {
      const v = xg(i), S = ht(l.current), C = () => {
        s.current = !0;
      };
      return S.addEventListener(v, p), S.addEventListener("touchmove", C), () => {
        S.removeEventListener(v, p), S.removeEventListener("touchmove", C);
      };
    }
  }, [p, i]), r !== !1 && (f[r] = y(r)), h.useEffect(() => {
    if (r !== !1) {
      const v = xg(r), S = ht(l.current);
      return S.addEventListener(v, p), () => {
        S.removeEventListener(v, p);
      };
    }
  }, [p, r]), /* @__PURE__ */ h.cloneElement(t, f);
}
function z1(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function tP(e) {
  const t = ht(e);
  return e === t.body || e === t.documentElement ? Un(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ws(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function bg(e) {
  return parseFloat(Un(e).getComputedStyle(e).paddingRight) || 0;
}
function nP(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Sg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !nP(s);
    l && a && ws(s, o);
  });
}
function rP(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = ht(r).body;
    else {
      const s = r.parentElement, l = Un(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (tP(i)) {
      const s = z1(Un(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${bg(i) + s}px`;
      const l = ht(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${bg(a) + s}px`;
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
function oP(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class iP {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ws(t.modalRef, !1);
    const o = oP(n);
    Sg(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = rP(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && ws(t.modalRef, n), Sg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ws(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const mf = "data-mui-focusable";
function wg(e) {
  return e ? e.hasAttribute(mf) ? e : e.querySelector(`[${mf}]`) : null;
}
const sP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function B1(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function lP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function aP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || lP(e));
}
function uP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(sP)).forEach((r, o) => {
    const i = B1(r);
    i === -1 || !aP(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function cP() {
  return !0;
}
function dP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = uP,
    isEnabled: s = cP,
    open: l
  } = e, a = h.useRef(!1), u = h.useRef(null), d = h.useRef(null), p = h.useRef(null), y = h.useRef(null), f = h.useRef(!1), v = h.useRef(null), S = ft(Io(t), v), C = h.useRef(null);
  h.useEffect(() => {
    !l || !v.current || (f.current = !n);
  }, [n, l]), h.useEffect(() => {
    if (a.current = !1, !l || !v.current)
      return;
    const b = ht(v.current), w = Jn(b), E = wg(v.current) ?? v.current;
    return go(v.current, w) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), f.current && E.focus()), () => {
      !o && p.current && (a.current = !0, p.current.focus(), p.current = null);
    };
  }, [l]), h.useEffect(() => {
    if (!l || !v.current)
      return;
    const b = ht(v.current), w = (R) => {
      if (C.current = R, r || !s() || R.key !== "Tab")
        return;
      const T = v.current, I = Jn(b);
      if (T === null)
        return;
      const N = wg(T);
      if (I === T || I === N) {
        const L = i(T);
        if (L.length === 0)
          return;
        R.preventDefault(), R.shiftKey ? L[L.length - 1].focus() : L[0].focus();
        return;
      }
      if (go(T, I)) {
        const L = i(T), x = L.indexOf(I);
        if (x === -1 || !L.some((O) => B1(O) > 0))
          return;
        R.preventDefault();
        let P = 0;
        R.shiftKey ? P = x <= 0 ? L.length - 1 : x - 1 : P = x === L.length - 1 ? 0 : x + 1, L[P].focus();
      }
    }, E = () => {
      var N, $;
      const R = v.current;
      if (R === null)
        return;
      const T = Jn(b);
      if (!b.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (go(R, T) || r && T !== u.current && T !== d.current)
        return;
      if (T !== y.current)
        y.current = null;
      else if (y.current !== null)
        return;
      if (!f.current)
        return;
      let I = [];
      if ((T === u.current || T === d.current) && (I = i(v.current)), I.length > 0) {
        const L = !!((N = C.current) != null && N.shiftKey && (($ = C.current) == null ? void 0 : $.key) === "Tab"), x = I[0], j = I[I.length - 1];
        typeof x != "string" && typeof j != "string" && (L ? j.focus() : x.focus());
      } else
        R.focus();
    };
    b.addEventListener("focusin", E), b.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const R = Jn(b);
      R && R.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), b.removeEventListener("focusin", E), b.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const g = (b) => {
    p.current === null && (p.current = b.relatedTarget), f.current = !0, y.current = b.target;
    const w = t.props.onFocus;
    w && w(b);
  }, m = (b) => {
    p.current === null && (p.current = b.relatedTarget), f.current = !0;
  };
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ c.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: m,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ h.cloneElement(t, {
      ref: S,
      onFocus: g
    }), /* @__PURE__ */ c.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: m,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
function fP(e) {
  return typeof e == "function" ? e() : e;
}
function pP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Cg = () => {
}, Fl = new iP();
function mP(e) {
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
  } = e, d = h.useRef({}), p = h.useRef(null), y = h.useRef(null), f = h.useRef(null), v = ft(f, u), [S, C] = h.useState(!a), g = pP(s);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const b = () => ht(p.current), w = () => (d.current.modalRef = f.current, d.current.mount = p.current, d.current), E = () => {
    Fl.mount(w(), {
      disableScrollLock: n
    }), f.current && (f.current.scrollTop = 0);
  }, k = Je(() => {
    const O = fP(t) || b().body;
    Fl.add(w(), O), f.current && E();
  }), R = () => Fl.isTopModal(w()), T = Je((O) => {
    p.current = O, O && (y.current = O, a && R() ? E() : f.current && ws(f.current, m));
  }), I = h.useCallback(() => {
    Fl.remove(w(), m);
  }, [m]);
  h.useEffect(() => () => {
    I();
  }, [I]), h.useEffect(() => {
    a ? k() : (!g || !r) && I();
  }, [a, I, g, r, k]);
  const N = (O) => (A) => {
    var M;
    (M = O.onKeyDown) == null || M.call(O, A), !(A.key !== "Escape" || A.which === 229 || // Wait until IME is settled.
    !R()) && (A.stopPropagation(), l && l(A, "escapeKeyDown"));
  }, $ = (O) => (A) => {
    var M;
    (M = O.onClick) == null || M.call(O, A), A.target === A.currentTarget && l && l(A, "backdropClick");
  }, L = (O = {}) => {
    const A = Ka(e);
    delete A.onTransitionEnter, delete A.onTransitionExited;
    const M = {
      ...A,
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
      ref: v
    };
  }, x = (O = {}) => {
    const A = O;
    return {
      "aria-hidden": !0,
      ...A,
      onClick: $(A),
      open: a
    };
  }, j = () => {
    const O = () => {
      C(!1), o && o();
    }, A = () => {
      C(!0), i && i(), r && I();
    };
    return {
      onEnter: qh(O, (s == null ? void 0 : s.props.onEnter) ?? Cg),
      onExited: qh(A, (s == null ? void 0 : s.props.onExited) ?? Cg)
    };
  }, P = !a && g && !S ? y.current ?? t : t;
  return {
    getRootProps: L,
    getBackdropProps: x,
    getTransitionProps: j,
    rootRef: v,
    portalRef: T,
    portalContainer: P,
    isTopModal: R,
    exited: S,
    hasTransition: g
  };
}
function hP(e) {
  return ye("MuiModal", e);
}
pe("MuiModal", ["root", "hidden", "backdrop"]);
const gP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ve({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, hP, r);
}, yP = H("div", {
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
}))), vP = H(O1, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), _1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disableAutoFocus: d = !1,
    disableEnforceFocus: p = !1,
    disablePortal: y = !1,
    disableRestoreFocus: f = !1,
    disableScrollLock: v = !1,
    hideBackdrop: S = !1,
    keepMounted: C = !1,
    onClose: g,
    onTransitionEnter: m,
    onTransitionExited: b,
    open: w,
    slotProps: E = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: R,
    ...T
  } = r, I = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: d,
    disableEnforceFocus: p,
    disablePortal: y,
    disableRestoreFocus: f,
    disableScrollLock: v,
    hideBackdrop: S,
    keepMounted: C
  }, {
    getRootProps: N,
    getBackdropProps: $,
    getTransitionProps: L,
    portalRef: x,
    portalContainer: j,
    isTopModal: P,
    exited: O,
    hasTransition: A
  } = mP({
    ...I,
    rootRef: n
  }), M = {
    ...I,
    exited: O
  }, z = gP(M), F = {};
  if (l.props.tabIndex === void 0 && (F.tabIndex = "-1"), A) {
    const {
      onEnter: K,
      onExited: q
    } = L();
    F.onEnter = K, F.onExited = q;
  }
  const W = {
    slots: k,
    slotProps: E
  }, [D, Q] = Se("root", {
    ref: n,
    elementType: yP,
    externalForwardedProps: {
      ...W,
      ...T,
      component: u
    },
    getSlotProps: N,
    ownerState: M,
    className: te(i, z == null ? void 0 : z.root, !M.open && M.exited && (z == null ? void 0 : z.hidden))
  }), [G, X] = Se("backdrop", {
    elementType: vP,
    externalForwardedProps: W,
    shouldForwardComponentProp: !0,
    getSlotProps: (K) => $({
      ...K,
      onClick: (q) => {
        K != null && K.onClick && K.onClick(q);
      }
    }),
    className: z == null ? void 0 : z.backdrop,
    ownerState: M
  });
  return !C && !w && (!A || O) ? null : /* @__PURE__ */ c.jsx(I1, {
    ref: x,
    container: j,
    disablePortal: y,
    children: /* @__PURE__ */ c.jsxs(D, {
      ...Q,
      children: [S ? null : /* @__PURE__ */ c.jsx(G, {
        ...X
      }), /* @__PURE__ */ c.jsx(dP, {
        disableEnforceFocus: p,
        disableAutoFocus: d,
        disableRestoreFocus: f,
        isEnabled: P,
        open: w,
        children: /* @__PURE__ */ h.cloneElement(l, F)
      })]
    })
  });
});
function xP(e) {
  return ye("MuiDialog", e);
}
pe("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const F1 = /* @__PURE__ */ h.createContext({}), bP = H(O1, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), SP = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${ue(n)}`],
    paper: ["paper", `paperWidth${ue(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return ve(s, xP, t);
}, wP = H(_1, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), CP = H("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${ue(n.scroll)}`]];
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
}), kP = H(sr, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${ue(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
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
}))), Qi = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiDialog"
  }), o = Zr(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: u,
    className: d,
    fullScreen: p = !1,
    fullWidth: y = !1,
    maxWidth: f = "sm",
    onClick: v,
    onClose: S,
    open: C,
    PaperComponent: g = sr,
    role: m = "dialog",
    scroll: b = "paper",
    slots: w = {},
    slotProps: E = {},
    transitionDuration: k = i,
    ...R
  } = r, T = {
    ...r,
    fullScreen: p,
    fullWidth: y,
    maxWidth: f,
    scroll: b
  }, I = SP(T), N = h.useRef(), $ = (K) => {
    N.current = K.target === K.currentTarget;
  }, L = (K) => {
    v && v(K), N.current && (N.current = null, S && S(K, "backdropClick"));
  }, x = Tr(l), j = h.useMemo(() => ({
    titleId: x
  }), [x]), P = {
    slots: w,
    slotProps: E
  }, [O, A] = Se("root", {
    elementType: wP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: T,
    className: te(I.root, d),
    ref: n
  }), [M, z] = Se("backdrop", {
    elementType: bP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: T,
    className: I.backdrop
  }), [F, W] = Se("paper", {
    elementType: kP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: T,
    className: I.paper,
    additionalProps: {
      elevation: 24,
      role: m,
      "aria-describedby": s,
      "aria-labelledby": x,
      "aria-modal": a,
      tabIndex: -1,
      [mf]: ""
    }
  }), [D, Q] = Se("container", {
    elementType: CP,
    externalForwardedProps: P,
    ownerState: T,
    className: I.container
  }), [G, X] = Se("transition", {
    elementType: j1,
    externalForwardedProps: P,
    ownerState: T,
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
      backdrop: M
    },
    slotProps: {
      backdrop: {
        transitionDuration: k,
        ...z
      }
    },
    onClose: S,
    open: C,
    onClick: L,
    ...A,
    ...R,
    children: /* @__PURE__ */ c.jsx(G, {
      ...X,
      children: /* @__PURE__ */ c.jsx(D, {
        onMouseDown: $,
        ...Q,
        children: /* @__PURE__ */ c.jsx(F, {
          as: g,
          ...W,
          children: /* @__PURE__ */ c.jsx(F1.Provider, {
            value: j,
            children: u
          })
        })
      })
    })
  });
});
function TP(e) {
  return ye("MuiDialogActions", e);
}
pe("MuiDialogActions", ["root", "spacing"]);
const RP = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return ve({
    root: ["root", !n && "spacing"]
  }, TP, t);
}, EP = H("div", {
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
}), Xi = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = RP(l);
  return /* @__PURE__ */ c.jsx(EP, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function PP(e) {
  return ye("MuiDialogContent", e);
}
pe("MuiDialogContent", ["root", "dividers"]);
function IP(e) {
  return ye("MuiDialogTitle", e);
}
const MP = pe("MuiDialogTitle", ["root"]), $P = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return ve({
    root: ["root", n && "dividers"]
  }, PP, t);
}, jP = H("div", {
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
      [`.${MP.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), qi = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = $P(l);
  return /* @__PURE__ */ c.jsx(jP, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), OP = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, IP, t);
}, AP = H(Ie, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Zi = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = OP(l), {
    titleId: u = i
  } = h.useContext(F1);
  return /* @__PURE__ */ c.jsx(AP, {
    component: "h2",
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
}), kg = pe("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function D1(e) {
  return ye("MuiSelect", e);
}
const ao = pe("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), NP = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: l
  } = e, a = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${ue(i)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = ve(a, Lk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, LP = H(oc, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...nc(e, t), !n.disableUnderline && t.underline];
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
    }, ...Object.entries(e.palette).filter(At()).map(([s]) => {
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
        [`&.${ao.root}`]: {
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
})), zP = H(ic, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: rc
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
}))), Xp = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    slotProps: d,
    slots: p = {},
    type: y = "text",
    ...f
  } = r, v = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: y
  }, S = NP(r), C = {
    root: {
      ownerState: v
    },
    input: {
      ownerState: v
    }
  }, g = d ? It(C, d) : C, m = p.root ?? LP, b = p.input ?? zP;
  return /* @__PURE__ */ c.jsx(Fp, {
    slots: {
      root: m,
      input: b
    },
    slotProps: g,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    ref: n,
    type: y,
    ...f,
    classes: S
  });
});
Xp.muiName = "Input";
function BP(e) {
  return ye("MuiFormControl", e);
}
pe("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const _P = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ue(n)}`, r && "fullWidth"]
  };
  return ve(o, BP, t);
}, FP = H("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${ue(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), DP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    focused: d,
    fullWidth: p = !1,
    hiddenLabel: y = !1,
    margin: f = "none",
    required: v = !1,
    size: S = "medium",
    variant: C = "outlined",
    ...g
  } = r, m = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    error: u,
    fullWidth: p,
    hiddenLabel: y,
    margin: f,
    required: v,
    size: S,
    variant: C
  }, b = _P(m), [w, E] = h.useState(() => {
    let P = !1;
    return o && h.Children.forEach(o, (O) => {
      if (!Kc(O, ["Input", "Select"]))
        return;
      const A = Kc(O, ["Select"]) ? O.props.input : O;
      A && Ik(A.props) && (P = !0);
    }), P;
  }), [k, R] = h.useState(() => {
    let P = !1;
    return o && h.Children.forEach(o, (O) => {
      Kc(O, ["Input", "Select"]) && (Ua(O.props, !0) || Ua(O.props.inputProps, !0)) && (P = !0);
    }), P;
  }), [T, I] = h.useState(!1);
  a && T && I(!1);
  const N = d !== void 0 && !a ? d : T;
  let $;
  h.useRef(!1);
  const L = h.useCallback(() => {
    R(!0);
  }, []), x = h.useCallback(() => {
    R(!1);
  }, []), j = h.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: u,
    filled: k,
    focused: N,
    fullWidth: p,
    hiddenLabel: y,
    size: S,
    onBlur: () => {
      I(!1);
    },
    onFocus: () => {
      I(!0);
    },
    onEmpty: x,
    onFilled: L,
    registerEffect: $,
    required: v,
    variant: C
  }), [w, s, a, u, k, N, p, y, $, x, L, v, S, C]);
  return /* @__PURE__ */ c.jsx(Lp.Provider, {
    value: j,
    children: /* @__PURE__ */ c.jsx(FP, {
      as: l,
      ownerState: m,
      className: te(b.root, i),
      ref: n,
      ...g,
      children: o
    })
  });
});
var Tg;
const WP = (e) => {
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
    root: ["root", o && "disabled", i && "error", r && `size${ue(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return ve(u, zk, t);
}, UP = H("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ue(n.size)}`], n.contained && t.contained, n.filled && t.filled];
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
  [`&.${Xh.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Xh.error}`]: {
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
}))), VP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    focused: d,
    margin: p,
    required: y,
    variant: f,
    ...v
  } = r, [S] = $i({
    props: r,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), C = {
    ...r,
    component: s,
    contained: S.variant === "filled" || S.variant === "outlined",
    variant: S.variant,
    size: S.size,
    disabled: S.disabled,
    error: S.error,
    filled: S.filled,
    focused: S.focused,
    required: S.required
  };
  delete C.ownerState;
  const g = WP(C);
  return /* @__PURE__ */ c.jsx(UP, {
    as: s,
    className: te(g.root, i),
    ref: n,
    ...v,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Tg || (Tg = /* @__PURE__ */ c.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), HP = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${ue(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return ve(a, Bk, t);
}, KP = H("label", {
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
  variants: [...Object.entries(e.palette).filter(At()).map(([t]) => ({
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
}))), GP = H("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(we(({
  theme: e
}) => ({
  [`&.${vs.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), YP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    filled: d,
    focused: p,
    required: y,
    ...f
  } = r, [v] = $i({
    props: r,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), S = {
    ...r,
    color: v.color || "primary",
    component: l,
    disabled: v.disabled,
    error: v.error,
    filled: v.filled,
    focused: v.focused,
    required: v.required
  }, C = HP(S);
  return /* @__PURE__ */ c.jsxs(KP, {
    as: l,
    ownerState: S,
    className: te(C.root, i),
    ref: n,
    ...f,
    children: [o, v.required && /* @__PURE__ */ c.jsxs(GP, {
      ownerState: S,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Cs(e) {
  return `scale(${e}, ${e ** 2})`;
}
const QP = {
  entering: {
    opacity: 1,
    transform: Cs(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: Cs(0.75)
  },
  exited: {
    opacity: 0,
    transform: Cs(0.75)
  }
}, XP = {
  opacity: 0,
  transform: Cs(0.75),
  visibility: "hidden"
}, qs = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: u,
    onEntered: d,
    onEntering: p,
    onExit: y,
    onExited: f,
    onExiting: v,
    style: S,
    timeout: C = "auto",
    ...g
  } = t, m = h.useRef(null), b = Zr(), w = sc(b.motion.reducedMotion, s), E = h.useRef(null), k = ft(E, Io(i), n), R = Cn(E, p), T = Cn(E, (j, P) => {
    w.shouldReduceMotion || Bp(j);
    const {
      duration: O,
      delay: A,
      easing: M
    } = Va({
      style: S,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    C === "auto" && !w.shouldReduceMotion ? (z = b.transitions.getAutoHeightDuration(j.clientHeight), m.current = z) : (z = O, m.current = null);
    const F = w.getTransitionTiming({
      duration: z,
      delay: A
    });
    j.style.transition = [b.transitions.create("opacity", {
      duration: F.duration,
      delay: F.delay
    }), b.transitions.create("transform", {
      duration: typeof F.duration == "string" ? F.duration : F.duration * 0.666,
      delay: F.delay,
      easing: M
    })].join(","), u && u(j, P);
  }), I = Cn(E, d), N = Cn(E, v), $ = Cn(E, (j) => {
    const {
      duration: P,
      delay: O,
      easing: A
    } = Va({
      style: S,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let M;
    C === "auto" && !w.shouldReduceMotion ? (M = b.transitions.getAutoHeightDuration(j.clientHeight), m.current = M) : (M = P, m.current = null);
    const z = w.getTransitionTiming({
      duration: M,
      delay: O
    });
    j.style.transition = [b.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), b.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: A
    })].join(","), j.style.opacity = 0, j.style.transform = Cs(0.75), y && y(j);
  }), L = Cn(E, (j) => {
    j.style.transition = "", f && f(j);
  }), x = r ? (j) => {
    r(E.current, j);
  } : void 0;
  return /* @__PURE__ */ c.jsx(p1, {
    appear: o,
    in: a,
    nodeRef: E,
    onEnter: T,
    onEntered: I,
    onEntering: R,
    onExit: $,
    onExited: L,
    onExiting: N,
    addEndListener: x,
    getAutoTimeout: C === "auto" ? () => m.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...g,
    children: (j, {
      ownerState: P,
      ...O
    }) => {
      const A = d1(j, a, QP, XP, S, i.props.style);
      return /* @__PURE__ */ h.cloneElement(i, {
        style: A,
        ref: k,
        ...O
      });
    }
  });
});
qs && (qs.muiSupportAuto = !0);
function qP(e) {
  return ye("MuiInputLabel", e);
}
const ZP = pe("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), JP = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ve({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, _k, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, eI = H(oc, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...nc(e, t), !n.disableUnderline && t.underline];
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
        [`label + &, .${ZP.root} + &`]: {
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
        [`&.${Ki.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Ki.error}`]: {
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
        [`&:hover:not(.${Ki.disabled}, .${Ki.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Ki.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(At()).map(([r]) => ({
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
})), tI = H(ic, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: rc
})({}), qp = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    slots: d = {},
    type: p = "text",
    ...y
  } = r, f = JP(r), S = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = u ? It(u, S) : S, g = d.root ?? eI, m = d.input ?? tI;
  return /* @__PURE__ */ c.jsx(Fp, {
    slots: {
      root: g,
      input: m
    },
    slotProps: C,
    fullWidth: i,
    inputComponent: s,
    multiline: l,
    ref: n,
    type: p,
    ...y,
    classes: f
  });
});
qp.muiName = "Input";
const Dl = pe("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), nI = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${ue(r)}`, s],
    asterisk: [l && "asterisk"]
  }, u = ve(a, qP, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, rI = H(YP, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
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
}))), oI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = r, [d, p] = $i({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let y = s;
  typeof y > "u" && p && (y = p.filled || p.focused || p.adornedStart);
  const f = {
    ...r,
    disableAnimation: o,
    formControl: p,
    shrink: y,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }, v = nI(f);
  return /* @__PURE__ */ c.jsx(rI, {
    "data-shrink": y,
    ref: n,
    className: te(v.root, a),
    ...u,
    ownerState: f,
    classes: v
  });
}), hf = /* @__PURE__ */ h.createContext({});
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
}), aI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    ...d
  } = r, p = h.useMemo(() => ({
    dense: l
  }), [l]), y = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, f = sI(y);
  return /* @__PURE__ */ c.jsx(hf.Provider, {
    value: p,
    children: /* @__PURE__ */ c.jsxs(lI, {
      as: s,
      className: te(f.root, i),
      ref: n,
      ownerState: y,
      ...d,
      children: [u, o]
    })
  });
}), Rg = pe("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Eg = pe("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Zp = /* @__PURE__ */ h.createContext(void 0);
function W1() {
  const e = h.useContext(Zp);
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
function U1(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = ks,
    wrap: s = !0
  } = e, [l, a] = h.useState(t), [u, d] = h.useState(t);
  let p = l;
  t !== u && (d(t), t !== void 0 && t !== l && (p = t, a(t)));
  const y = h.useRef(null), f = h.useRef(/* @__PURE__ */ new Map()), [v, S] = h.useState(0), C = h.useMemo(() => gf(f.current), [v]), g = Pg(p, C, i, n), m = h.useRef(g);
  m.current = g;
  const b = h.useCallback(() => {
    const L = gf(f.current), x = Pg(m.current, L, i, n);
    return G1(L, x);
  }, [n, i]), w = h.useCallback(() => f.current, []), E = Je((L) => {
    const x = f.current.get(L.id);
    cI(x ?? null, L) || (f.current.set(L.id, L), S((j) => j + 1));
  }), k = Je((L) => {
    f.current.delete(L) && S((x) => x + 1);
  }), R = Je((L) => {
    a(L);
  }), T = h.useCallback((L) => m.current === L, []), I = h.useCallback((L, x, j, P) => {
    var M;
    const O = Wl(f.current), A = H1(O, L, x, j, P ?? i);
    return A ? ((M = A.element) == null || M.focus(), a(A.id), A) : null;
  }, [i]), N = h.useCallback((L, x, j) => ({
    onFocus: (A) => {
      x == null || x(A);
      const M = Wl(f.current), z = Q1(M, A.target);
      z !== -1 && a(M[z].id);
    },
    onKeyDown: (A) => {
      if (j == null || j(A), A.defaultPrevented || A.altKey || A.shiftKey || A.ctrlKey || A.metaKey || !dI.includes(A.key))
        return;
      let M = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (M = "ArrowRight", z = "ArrowLeft");
      const F = Wl(f.current), W = Jn(ht(y.current)), D = W === y.current;
      let Q = Ig(F, W, m.current), G = "next";
      switch (A.key) {
        case M:
          G = "previous", A.preventDefault(), D && (Q = F.length);
          break;
        case z:
          A.preventDefault(), D && (Q = -1);
          break;
        case "Home":
          A.preventDefault(), Q = -1;
          break;
        case "End":
          A.preventDefault(), G = "previous", Q = F.length;
          break;
        default:
          return;
      }
      I(Q, G, s);
    },
    ref: hI(L, (A) => {
      y.current = A;
    })
  }), [I, o, r, s]), $ = h.useCallback((L) => {
    var A;
    const x = Wl(f.current), j = Jn(ht(y.current)), O = j === y.current ? -1 : Ig(x, j, m.current);
    return ((A = I(O, "next", !0, L)) == null ? void 0 : A.id) ?? null;
  }, [I]);
  return h.useMemo(() => ({
    activeItemId: g,
    focusNext: $,
    getActiveItem: b,
    getContainerProps: N,
    getItemMap: w,
    isItemActive: T,
    registerItem: E,
    setActiveItemId: R,
    unregisterItem: k
  }), [g, $, b, N, w, T, E, R, k]);
}
function V1(e) {
  const t = W1(), {
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
  const a = h.useCallback((d) => {
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
  }, [e.id, r, o]), u = ft(e.ref, a);
  return ct(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), ct(() => {
    const d = e.id;
    return () => {
      o(d);
    };
  }, [e.id, o]), {
    ref: u,
    tabIndex: n === e.id ? 0 : -1
  };
}
function Pg(e, t, n, r) {
  return e != null ? fI(e, t, n) : pI(t, n, r);
}
function fI(e, t, n) {
  var o;
  const r = Y1(t, e);
  return r === -1 ? K1(t, n) : n(t[r]) ? t[r].id : ((o = H1(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function pI(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = G1(e, r);
    if (o && t(o))
      return o.id;
  }
  return K1(e, t);
}
function Ig(e, t, n) {
  if (t) {
    const r = Q1(e, t);
    if (r !== -1)
      return r;
  }
  return Y1(e, n);
}
function H1(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = Mg(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[l];
    if (!u || !o(u))
      l = Mg(l, i, n, r);
    else
      return u;
  }
  return null;
}
function K1(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function G1(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function Y1(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function Q1(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function gf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(yf).sort((o, i) => mI(o.element, i.element)), r = t.filter((o) => !yf(o));
  return [...n, ...r];
}
function Wl(e) {
  return gf(e).filter(yf);
}
function Mg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function ks(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function yf(e) {
  return e.element != null && e.element.isConnected;
}
function mI(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function hI(...e) {
  return (t) => {
    e.forEach((n) => {
      sf(n ?? null, t);
    });
  };
}
function X1(e, t) {
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
function pa(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const q1 = /* @__PURE__ */ h.createContext(null);
function Z1() {
  return h.useContext(q1);
}
const vI = q1.Provider, J1 = /* @__PURE__ */ h.createContext(void 0);
function xI() {
  const e = h.useContext(J1);
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
function ex(e, t) {
  if (t === void 0)
    return !0;
  let n = bI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function SI(e, t) {
  return ex(e, t) ? ks(e) : !1;
}
function wI(e, t) {
  X1(e, t);
}
const CI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    variant: p = "selectedMenu",
    ...y
  } = t, f = h.useRef(null), v = h.useRef(!1), [S, C] = h.useState(!1), g = Z1(), m = h.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), b = h.useCallback((P) => {
    var O, A, M;
    return p === "selectedMenu" ? ((O = P.find((z) => z.selected && ks(z))) == null ? void 0 : O.id) ?? ((A = P.find((z) => ks(z))) == null ? void 0 : A.id) ?? null : ((M = P.find((z) => ks(z))) == null ? void 0 : M.id) ?? null;
  }, [p]), w = U1({
    activeItemId: void 0,
    getDefaultActiveItemId: b,
    orientation: "vertical",
    wrap: !u
  }), {
    activeItemId: E,
    focusNext: k,
    getActiveItem: R,
    getContainerProps: T,
    getItemMap: I
  } = w, N = Je((P = !1) => {
    if (!f.current || !P && v.current)
      return null;
    if (i) {
      const O = R();
      if (O != null && O.element) {
        const A = Array.from(I().values()).some((z) => z.selected), M = p === "menu" && A && !O.selected && g == null;
        return C(M), wI(O.element, g), v.current = !0, O.element;
      }
      return o ? (C(!1), f.current.focus(), f.current) : null;
    }
    return o ? (C(!1), f.current.focus(), v.current = !0, f.current) : (C(!1), null);
  });
  ct(() => {
    if (!o && !i) {
      v.current = !1, C(!1);
      return;
    }
    N();
  }, [E, i, o, N]), h.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (P, {
      direction: O
    }) => {
      const A = !f.current.style.width;
      if (P.clientHeight < f.current.clientHeight && A) {
        const M = Un(P), z = z1(M);
        if (z > 0) {
          const F = `${z}px`, W = O === "rtl" ? "paddingLeft" : "paddingRight", D = parseFloat(M.getComputedStyle(f.current)[W]) || 0;
          f.current.style[W] = `${D + z}px`, f.current.style.width = `calc(100% + ${F})`;
        }
      }
      return f.current;
    },
    focusInitialTarget: () => {
      if (!f.current)
        return null;
      const P = Jn(ht(f.current));
      return P && go(f.current, P) ? P : N(!0);
    }
  }), [N]);
  const $ = T(void 0, y.onFocus), L = ft(f, $.ref, n), x = h.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: S,
    variant: p
  }), [a, S, p]), j = Je((P) => {
    if (S && C(!1), (P.ctrlKey || P.metaKey || P.altKey) && d) {
      d(P);
      return;
    }
    if ($.onKeyDown(P), P.key.length === 1) {
      const A = m.current, M = P.key.toLowerCase(), z = performance.now();
      A.keys.length > 0 && (z - A.lastTime > 500 ? (A.keys = [], A.repeating = !0, A.previousKeyMatched = !0) : A.repeating && M !== A.keys[0] && (A.repeating = !1)), A.lastTime = z, A.keys.push(M);
      const F = Jn(ht(f.current)), W = F && !A.repeating && ex(F, A);
      A.previousKeyMatched && (W || k((D) => SI(D, A)) != null) ? P.preventDefault() : A.previousKeyMatched = !1;
    }
    d && d(P);
  });
  return /* @__PURE__ */ c.jsx(aI, {
    role: "menu",
    ref: L,
    className: l,
    onKeyDown: j,
    tabIndex: -1,
    ...y,
    onFocus: $.onFocus,
    children: /* @__PURE__ */ c.jsx(J1.Provider, {
      value: x,
      children: /* @__PURE__ */ c.jsx(Zp.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function kI(e) {
  return ye("MuiPopover", e);
}
pe("MuiPopover", ["root", "paper"]);
function $g(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function jg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Og(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ul(e) {
  return typeof e == "function" ? e() : e;
}
const TI = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"]
  }, kI, t);
}, RI = H(_1, {
  name: "MuiPopover",
  slot: "Root"
})({}), tx = H(sr, {
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
}), EI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    className: d,
    container: p,
    disableAutoFocus: y = !1,
    elevation: f = 8,
    marginThreshold: v = 16,
    open: S,
    slots: C = {},
    slotProps: g = {},
    transformOrigin: m = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: b = "auto",
    disableScrollLock: w = !1,
    ...E
  } = r, k = h.useRef(), R = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: f,
    marginThreshold: v,
    transformOrigin: m,
    transitionDuration: b
  }, T = TI(R), I = h.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const _ = Ul(i), re = (_ && _.nodeType === 1 ? _ : ht(k.current).body).getBoundingClientRect();
    return {
      top: re.top + $g(re, s.vertical),
      left: re.left + jg(re, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), N = h.useCallback((_) => ({
    vertical: $g(_, m.vertical),
    horizontal: jg(_, m.horizontal)
  }), [m.horizontal, m.vertical]), $ = h.useCallback((_) => {
    const ne = {
      width: _.offsetWidth,
      height: _.offsetHeight
    }, re = N(ne);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Og(re)
      };
    const ke = I();
    let me = ke.top - re.vertical, de = ke.left - re.horizontal;
    const fe = me + ne.height, Me = de + ne.width, Be = Un(Ul(i)), Ee = Be.innerHeight - v, $e = Be.innerWidth - v;
    if (v != null && me < v) {
      const he = me - v;
      me -= he, re.vertical += he;
    } else if (v != null && fe > Ee) {
      const he = fe - Ee;
      me -= he, re.vertical += he;
    }
    if (v != null && de < v) {
      const he = de - v;
      de -= he, re.horizontal += he;
    } else if (Me > $e) {
      const he = Me - $e;
      de -= he, re.horizontal += he;
    }
    return {
      top: `${Math.round(me)}px`,
      left: `${Math.round(de)}px`,
      transformOrigin: Og(re)
    };
  }, [i, a, I, N, v]), [L, x] = h.useState(S), j = h.useCallback(() => {
    const _ = k.current;
    if (!_)
      return;
    const ne = $(_);
    ne.top != null && _.style.setProperty("top", ne.top), ne.left != null && (_.style.left = ne.left), _.style.transformOrigin = ne.transformOrigin, x(!0);
  }, [$]);
  h.useEffect(() => (w && window.addEventListener("scroll", j), () => window.removeEventListener("scroll", j)), [i, w, j]);
  const P = () => {
    j();
  }, O = () => {
    x(!1);
  };
  h.useEffect(() => {
    S && j();
  }), h.useImperativeHandle(o, () => S ? {
    updatePosition: () => {
      j();
    }
  } : null, [S, j]), h.useEffect(() => {
    if (!S)
      return;
    const _ = tc(() => {
      j();
    }), ne = Un(Ul(i));
    return ne.addEventListener("resize", _), () => {
      _.clear(), ne.removeEventListener("resize", _);
    };
  }, [i, S, j]);
  let A = b;
  const M = {
    slots: C,
    slotProps: g
  }, [z, F] = Se("transition", {
    elementType: qs,
    externalForwardedProps: M,
    ownerState: R,
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
      in: S
    }
  });
  b === "auto" && !z.muiSupportAuto && (A = void 0);
  const W = p || (i ? ht(Ul(i)).body : void 0), [D, {
    slots: Q,
    slotProps: G,
    ...X
  }] = Se("root", {
    ref: n,
    elementType: RI,
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
        backdrop: Xk(typeof g.backdrop == "function" ? g.backdrop(R) : g.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: S
    },
    ownerState: R,
    className: te(T.root, d)
  }), [K, q] = Se("paper", {
    ref: k,
    className: T.paper,
    elementType: tx,
    externalForwardedProps: M,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: f,
      style: L ? void 0 : {
        opacity: 0
      }
    },
    ownerState: R
  });
  return /* @__PURE__ */ c.jsx(D, {
    ...X,
    ...!Wa(D) && {
      slots: Q,
      slotProps: G,
      disableAutoFocus: y,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ c.jsx(z, {
      ...F,
      timeout: A,
      children: /* @__PURE__ */ c.jsx(K, {
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
}, jI = H(EI, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), OI = H(tx, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), AI = H(CI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), NI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    PopoverClasses: d,
    transitionDuration: p = "auto",
    variant: y = "selectedMenu",
    slots: f = {},
    slotProps: v = {},
    ...S
  } = r, C = Zu(), g = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: p,
    variant: y
  }, m = $I(g), b = o && u, w = b && !l, E = h.useRef(null), k = (P, O) => {
    var A, M;
    E.current && (E.current.adjustStyleForScrollbar(P, {
      direction: C ? "rtl" : "ltr"
    }), b && ((M = (A = E.current).focusInitialTarget) == null || M.call(A)));
  }, R = (P) => {
    P.key === "Tab" && (P.preventDefault(), a && a(P, "tabKeyDown"));
  }, T = {
    slots: f,
    slotProps: v
  }, I = Ri({
    elementType: f.root,
    externalSlotProps: v.root,
    ownerState: g,
    className: [m.root, s]
  }), [N, $] = Se("paper", {
    className: m.paper,
    elementType: OI,
    externalForwardedProps: T,
    shouldForwardComponentProp: !0,
    ownerState: g
  }), [L, x] = Se("list", {
    className: m.list,
    elementType: AI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: T,
    getSlotProps: (P) => ({
      ...P,
      onKeyDown: (O) => {
        var A;
        R(O), (A = P.onKeyDown) == null || A.call(P, O);
      }
    }),
    ownerState: g
  }), j = typeof v.transition == "function" ? v.transition(g) : v.transition;
  return /* @__PURE__ */ c.jsx(
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
        root: f.root,
        paper: N,
        backdrop: f.backdrop,
        transition: f.transition
      },
      slotProps: {
        root: I,
        paper: $,
        backdrop: typeof v.backdrop == "function" ? v.backdrop(g) : v.backdrop,
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
      transitionDuration: p,
      ownerState: g,
      ...S,
      classes: d,
      children: /* @__PURE__ */ c.jsx(L, {
        actions: E,
        autoFocus: b,
        autoFocusItem: w,
        variant: y,
        ...x,
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
  } = e, a = ve({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, Fk, s);
  return {
    ...s,
    ...a
  };
}, BI = H(To, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: LI
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
  [`&.${Gi.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    ...!e.focusVisible && {
      [`&.${Gi.focusVisible}`]: {
        backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
      }
    }
  },
  [`&.${Gi.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  ...e.focusVisible ? (
    // Inset the ring: a scrolling Menu/MenuList clips an outset ring.
    r1(1)
  ) : {
    [`&.${Gi.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    }
  },
  [`&.${Gi.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${kg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${kg.inset}`]: {
    marginLeft: 52
  },
  [`& .${Eg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Eg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Rg.root}`]: {
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
      [`& .${Rg.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Vo = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    role: d = "menuitem",
    tabIndex: p,
    className: y,
    ...f
  } = r, S = d === "menuitemcheckbox" || d === "menuitemradio" ? !!r.selected : void 0, C = Z1(), g = h.useContext(hf), m = h.useMemo(() => ({
    dense: s || g.dense || !1,
    disableGutters: a
  }), [g.dense, s, a]), b = xI(), w = Tr(), E = b.suppressInitialFocusVisible, k = b.itemsFocusableWhenDisabled, R = h.useRef(null);
  ct(() => {
    o && R.current && X1(R.current, C);
  }, [o]);
  const T = {
    ...r,
    dense: m.dense,
    divider: l,
    disableGutters: a
  }, I = zI(r), {
    root: N,
    ...$
  } = I, L = V1({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), x = ft(R, L.ref);
  let j;
  return p !== void 0 ? j = p : b.variant === "selectedMenu" ? j = L.tabIndex : (!r.disabled || k) && (j = -1), /* @__PURE__ */ c.jsx(hf.Provider, {
    value: m,
    children: /* @__PURE__ */ c.jsx(BI, {
      ref: x,
      role: d,
      "aria-checked": S,
      tabIndex: j,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: E,
      focusVisibleClassName: te(I.focusVisible, u),
      className: te(I.root, y),
      ...f,
      ownerState: T,
      classes: $
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
    icon: ["icon", `icon${ue(n)}`, i && "iconOpen", r && "disabled"]
  };
  return ve(l, Dk, t);
}, nx = H("select", {
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
  [`& ~ .${Dl.root}`]: {
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
      [`.${an.root}:has(> & ~ .${Dl.root})`]: {
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
      [`.${an.root}:has(> & ~ .${Dl.root})`]: {
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
      [`.${an.root}:has(> & ~ .${Dl.root})`]: {
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
})), FI = H(nx, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: vn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Dp.multiple}`]: t.multiple
    }];
  }
})({}), rx = H("svg", {
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
})), DI = H(rx, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ue(n.variant)}`], n.open && t.iconOpen];
  }
})({}), WI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, p = _I(d);
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ c.jsx(FI, {
      ownerState: d,
      className: te(p.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ c.jsx(DI, {
      as: s,
      ownerState: d,
      className: p.icon
    })]
  });
});
var Ag;
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
  return /* @__PURE__ */ c.jsx(UI, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ c.jsx(VI, {
      ownerState: a,
      children: l ? /* @__PURE__ */ c.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ag || (Ag = /* @__PURE__ */ c.jsx("span", {
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
  }, Wk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, GI = H(oc, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: nc
})(we(({
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
    variants: [...Object.entries(e.palette).filter(At()).map(([n]) => ({
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
        [`&.${ao.root}`]: {
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
})), QI = H(ic, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: rc
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
}))), Jp = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    slotProps: d = {},
    type: p = "text",
    ...y
  } = r, f = KI(r), [v, S] = $i({
    props: r,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...r,
    color: v.color || "primary",
    disabled: v.disabled,
    error: v.error,
    focused: v.focused,
    formControl: S,
    fullWidth: o,
    hiddenLabel: v.hiddenLabel,
    multiline: l,
    size: v.size,
    type: p
  }, g = u.root ?? GI, m = u.input ?? QI, [b, w] = Se("notchedOutline", {
    elementType: YI,
    className: f.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: u,
      slotProps: d
    },
    additionalProps: {
      label: s != null && s !== "" && v.required ? /* @__PURE__ */ c.jsxs(h.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ c.jsx(Fp, {
    slots: {
      root: g,
      input: m
    },
    slotProps: d,
    renderSuffix: (E) => /* @__PURE__ */ c.jsx(b, {
      ...w,
      notched: typeof a < "u" ? a : !!(E.startAdornment || E.filled || E.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: l,
    ref: n,
    type: p,
    ...y,
    classes: {
      ...f,
      notchedOutline: null
    }
  });
});
Jp.muiName = "Input";
function XI(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function ox(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return h.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ h.isValidElement(n) && (t += ox(n.props.children));
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
function ZI(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function JI(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ h.isValidElement(i) || !XI(i) || i.props.disabled)
      continue;
    const s = ox(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && pa(t, i.props.value) && (r = n.length), n.push({
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
var Ng;
const Vl = 2, eM = 400, Lg = 200, tM = 750, io = " ", nM = "ArrowUp", rM = "ArrowDown", oM = "Enter";
function zg(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Vl && e.clientX <= r.right + Vl && e.clientY >= r.top - Vl && e.clientY <= r.bottom + Vl;
}
const iM = H(nx, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${ao.select}`]: t.select
      },
      {
        [`&.${ao.select}`]: t[n.variant]
      },
      {
        [`&.${ao.error}`]: t.error
      },
      {
        [`&.${ao.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${ao.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), sM = H(rx, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), lM = H("input", {
  shouldForwardProp: (e) => u1(e) && e !== "classes",
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
  }, D1, t);
}, uM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var Ai, Lo, tm, nm;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: u,
    defaultValue: d,
    disabled: p,
    displayEmpty: y,
    error: f = !1,
    IconComponent: v,
    inputRef: S,
    labelId: C,
    MenuProps: g = {},
    multiple: m,
    name: b,
    onBlur: w,
    onChange: E,
    onClose: k,
    onFocus: R,
    // eslint-disable-next-line react/prop-types
    onKeyDown: T,
    // eslint-disable-next-line react/prop-types
    onMouseDown: I,
    onOpen: N,
    open: $,
    readOnly: L,
    renderValue: x,
    required: j,
    SelectDisplayProps: P = {},
    tabIndex: O,
    // catching `type` from Input which makes no sense for SelectInput
    type: A,
    value: M,
    variant: z = "standard",
    ...F
  } = t, [W, D] = lf({
    controlled: M,
    default: d,
    name: "Select"
  }), [Q, G] = lf({
    controlled: $,
    default: u,
    name: "Select"
  }), X = h.useRef(null), K = h.useRef(null), q = h.useRef(null), _ = h.useRef(!1), ne = h.useRef(!1), re = h.useRef(null), ke = h.useRef(!1), me = h.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), de = h.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), fe = er(), Me = er(), Be = er(), [Ee, $e] = h.useState(null), {
    current: he
  } = h.useRef($ != null), [je, et] = h.useState(), [Xe, Fe] = h.useState(null), qe = ft(n, S), U = h.useCallback((Y) => {
    K.current = Y, Y && $e(Y);
  }, []), ie = Ee == null ? void 0 : Ee.parentNode;
  h.useImperativeHandle(qe, () => ({
    focus: () => {
      K.current.focus();
    },
    node: X.current,
    value: W
  }), [W]);
  const ce = Ee !== null && Q, se = h.useCallback(() => {
    Be.clear(), de.current.buffer = "", de.current.previousSearchIndex = null, de.current.matchedIndex = null;
  }, [Be]);
  ct(() => {
    _.current = ce, ce && se();
  }, [ce, se]);
  const Ae = h.useCallback(() => {
    fe.clear(), Me.clear();
  }, [fe, Me]), oe = h.useCallback(() => {
    Ae(), ke.current = !1, me.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [Ae]), le = h.useCallback(() => {
    re.current && (re.current(), re.current = null);
  }, []);
  h.useEffect(() => {
    ce || (oe(), le());
  }, [ce, oe, le]), h.useEffect(() => () => {
    oe(), le(), se();
  }, [oe, le, se]), h.useEffect(() => {
    if (!ce || !ie || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      et(ie.clientWidth);
    });
    return Y.observe(ie), () => {
      Y.disconnect();
    };
  }, [ce, ie, s]), h.useEffect(() => {
    u && Q && Ee && !he && (et(s ? null : ie.clientWidth), K.current.focus());
  }, [Ee, s]), h.useEffect(() => {
    i && K.current.focus();
  }, [i]), h.useEffect(() => {
    if (!C)
      return;
    const Y = ht(K.current).getElementById(C);
    if (Y) {
      const ae = () => {
        getSelection().isCollapsed && K.current.focus();
      };
      return Y.addEventListener("click", ae), () => {
        Y.removeEventListener("click", ae);
      };
    }
  }, [C]);
  const Ge = Je((Y, ae) => {
    Y || (oe(), le()), Y ? (se(), Fe(gI(ae)), N && N(ae)) : (Fe(null), k && k(ae)), he || (_.current = Y, et(s ? null : ie.clientWidth), G(Y));
  }), rt = () => {
    oe(), ne.current ? Me.start(Lg, () => {
      me.current.allowUnselectedMouseUp = !0, fe.start(Lg, () => {
        me.current.allowSelectedMouseUp = !0;
      });
    }) : fe.start(eM, () => {
      me.current.allowSelectedMouseUp = !0, me.current.allowUnselectedMouseUp = !0;
    });
  }, pt = (Y) => {
    if (I == null || I(Y), Y.button !== 0 || (Y.preventDefault(), !K.current))
      return;
    K.current.focus();
    const ae = ht(Y.currentTarget);
    rt(), le();
    const Re = (st) => {
      re.current = null, K.current && (zg(st, K.current) || zg(st, q.current) || !_.current && he || Ge(!1, st));
    };
    ae.addEventListener("mouseup", Re, {
      capture: !0,
      once: !0
    }), re.current = () => {
      ae.removeEventListener("mouseup", Re, !0);
    }, Ge(!0, Y);
  }, De = (Y) => {
    Ge(!1, Y);
  }, Vn = h.Children.toArray(l), ji = (Y) => {
    const ae = Vn.find((Re) => Re.props.value === Y.target.value);
    ae !== void 0 && (D(ae.props.value), E && E(Y, ae));
  }, Mo = (Y, ae, Re) => {
    if (D(Re), E) {
      const st = Y.nativeEvent || Y, Ut = new st.constructor(st.type, st);
      Object.defineProperty(Ut, "target", {
        writable: !0,
        value: {
          value: Re,
          name: b
        }
      }), E(Ut, ae);
    }
  }, $o = (Y) => (ae) => {
    ke.current = !1;
    let Re;
    if (ae.currentTarget.hasAttribute("tabindex")) {
      if (m) {
        Re = Array.isArray(W) ? W.slice() : [];
        const st = W.indexOf(Y.props.value);
        st === -1 ? Re.push(Y.props.value) : Re.splice(st, 1);
      } else
        Re = Y.props.value;
      Y.props.onClick && Y.props.onClick(ae), W !== Re && Mo(ae, Y, Re), m || Ge(!1, ae);
    }
  }, jo = (Y, ae) => (Re) => {
    var ml, zo;
    if ((zo = (ml = Y.props).onMouseUp) == null || zo.call(ml, Re), ke.current) {
      ke.current = !1;
      return;
    }
    const st = !me.current.allowSelectedMouseUp && ae, Ut = !me.current.allowUnselectedMouseUp && !ae;
    st || Ut || Re.currentTarget.click();
  }, eo = (Y) => {
    var rm;
    const ae = de.current, Re = ae.buffer !== "";
    if (ce || m || p || Y.defaultPrevented || (rm = Y.nativeEvent) != null && rm.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === io && !Re)
      return !1;
    Y.key === io && Y.preventDefault();
    const st = ae.buffer === "", {
      options: Ut,
      selectedIndex: ml
    } = JI(Vn, W);
    if (Ut.length === 0)
      return Y.key !== io && se(), !0;
    st && (ae.previousSearchIndex = ml);
    const zo = Y.key.toLowerCase();
    ae.buffer === zo && ZI(Ut, zo) && (ae.buffer = "", ae.previousSearchIndex = ae.matchedIndex), ae.buffer += zo, Be.start(tM, se);
    const dc = qI(Ut, ae.buffer, (ae.previousSearchIndex ?? -1) + 1);
    if (dc !== -1) {
      const fc = Ut[dc];
      return ae.matchedIndex = dc, pa(W, fc.value) || Mo(Y, fc.child, fc.value), !0;
    }
    return Y.key !== io && se(), !0;
  }, dl = (Y) => {
    if (!L) {
      const ae = eo(Y), Re = Y.key === io || Y.key === nM || Y.key === rM || Y.key === oM;
      !ae && Re && (Y.preventDefault(), Ge(!0, Y)), T == null || T(Y);
    }
  }, ge = (Y) => {
    se(), !ce && w && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: W,
        name: b
      }
    }), w(Y));
  }, Ye = (Y) => (ae) => {
    var Re, st;
    (st = (Re = Y == null ? void 0 : Y.props) == null ? void 0 : Re.onKeyDown) == null || st.call(Re, ae), ae.key === io && ae.target === ae.currentTarget && !ae.defaultPrevented && (ae.preventDefault(), ae.repeat || ae.currentTarget.click());
  };
  delete F["aria-invalid"];
  let zt, fl;
  const Oo = [];
  let Ao = !1, No = !1;
  (Ua({
    value: W
  }) || y) && (x ? zt = x(W) : Ao = !0);
  const cc = Vn.map((Y) => {
    if (!/* @__PURE__ */ h.isValidElement(Y))
      return null;
    let ae;
    if (m) {
      if (!Array.isArray(W))
        throw new Error(kr(2));
      ae = W.some((Re) => pa(Re, Y.props.value)), ae && Ao && Oo.push(Y.props.children);
    } else
      ae = pa(W, Y.props.value), ae && Ao && (fl = Y.props.children);
    return ae && (No = !0), /* @__PURE__ */ h.cloneElement(Y, {
      "aria-selected": ae ? "true" : "false",
      onMouseDown: (Re) => {
        var st, Ut;
        ke.current = !0, (Ut = (st = Y.props).onMouseDown) == null || Ut.call(st, Re);
      },
      onPointerDown: (Re) => {
        var st, Ut;
        ke.current = !0, (Ut = (st = Y.props).onPointerDown) == null || Ut.call(st, Re);
      },
      onClick: $o(Y),
      onMouseUp: jo(Y, ae),
      onKeyUp: (Re) => {
        Re.key === io && Re.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(Re);
      },
      onKeyDown: Ye(Y),
      role: "option",
      selected: ae,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  ct(() => {
    ne.current = No, !ce && !m && !No && se();
  }, [No, m, ce, se]), Ao && (m ? Oo.length === 0 ? zt = null : zt = Oo.reduce((Y, ae, Re) => (Y.push(ae), Re < Oo.length - 1 && Y.push(", "), Y), []) : zt = fl);
  let pl = je;
  !s && he && Ee && (pl = ie.clientWidth);
  let Oi;
  typeof O < "u" ? Oi = O : Oi = p ? null : 0;
  const ee = P.id || (b ? `mui-component-select-${b}` : void 0), Z = {
    ...t,
    variant: z,
    value: W,
    open: ce,
    error: f
  }, be = aM(Z), Te = typeof ((Ai = g.slotProps) == null ? void 0 : Ai.paper) == "function" ? g.slotProps.paper(Z) : (Lo = g.slotProps) == null ? void 0 : Lo.paper, gt = ft(Te == null ? void 0 : Te.ref, q), ar = typeof ((tm = g.slotProps) == null ? void 0 : tm.list) == "function" ? g.slotProps.list(Z) : (nm = g.slotProps) == null ? void 0 : nm.list, Hn = Tr(), to = Tr();
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ c.jsx(iM, {
      as: "div",
      ref: U,
      tabIndex: Oi,
      role: "combobox",
      "aria-controls": ce ? Hn : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": ce ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": L ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": j ? "true" : void 0,
      "aria-invalid": f ? "true" : void 0,
      onKeyDown: dl,
      onMouseDown: p || L ? null : pt,
      onBlur: ge,
      onFocus: R,
      ...P,
      ownerState: Z,
      className: te(P.className, be.select, a),
      id: ee,
      children: yI(zt) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ng || (Ng = /* @__PURE__ */ c.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : zt
    }), /* @__PURE__ */ c.jsx(lM, {
      "aria-invalid": f,
      value: Array.isArray(W) ? W.join(",") : W,
      name: b,
      ref: X,
      "aria-hidden": !0,
      onChange: ji,
      tabIndex: -1,
      disabled: p,
      readOnly: L,
      className: be.nativeInput,
      autoFocus: i,
      required: j,
      ...F,
      id: F.id ?? to,
      ownerState: Z
    }), /* @__PURE__ */ c.jsx(sM, {
      as: v,
      className: be.icon,
      ownerState: Z
    }), /* @__PURE__ */ c.jsx(vI, {
      value: Xe,
      children: /* @__PURE__ */ c.jsx(NI, {
        id: `menu-${b || ""}`,
        anchorEl: ie,
        open: ce,
        onClose: De,
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
            "aria-multiselectable": m ? "true" : void 0,
            disableListWrap: !0,
            id: Hn,
            ...ar
          },
          paper: {
            ...Te,
            ref: gt,
            style: {
              minWidth: pl,
              ...Te == null ? void 0 : Te.style
            }
          }
        },
        children: cc
      })
    })]
  });
}), cM = (e) => {
  const {
    classes: t
  } = e, r = ve({
    root: ["root"]
  }, D1, t);
  return {
    ...t,
    ...r
  };
}, em = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => vn(e) && e !== "variant"
}, dM = H(qp, em)(""), fM = H(Jp, em)(""), pM = H(Xp, em)(""), Xa = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    IconComponent: d = EE,
    id: p,
    input: y,
    inputProps: f,
    label: v,
    labelId: S,
    MenuProps: C,
    multiple: g = !1,
    native: m = !1,
    onClose: b,
    onOpen: w,
    open: E,
    renderValue: k,
    SelectDisplayProps: R,
    variant: T = "outlined",
    ...I
  } = r, N = m ? WI : uM, [$] = $i({
    props: r,
    states: ["variant", "error"]
  }), L = $.variant || T, x = {
    ...r,
    variant: L,
    classes: s
  }, j = cM(x), {
    root: P,
    ...O
  } = j, A = y || {
    standard: /* @__PURE__ */ c.jsx(dM, {
      ownerState: x
    }),
    outlined: /* @__PURE__ */ c.jsx(fM, {
      label: v,
      ownerState: x
    }),
    filled: /* @__PURE__ */ c.jsx(pM, {
      ownerState: x
    })
  }[L], M = ft(n, Io(A));
  return /* @__PURE__ */ c.jsx(h.Fragment, {
    children: /* @__PURE__ */ h.cloneElement(A, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: N,
      inputProps: {
        children: i,
        error: $.error,
        IconComponent: d,
        variant: L,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: g,
        ...m ? {
          id: p
        } : {
          autoWidth: o,
          defaultOpen: a,
          displayEmpty: u,
          labelId: S,
          MenuProps: C,
          onClose: b,
          onOpen: w,
          open: E,
          renderValue: k,
          SelectDisplayProps: {
            id: p,
            ...R
          }
        },
        ...f,
        classes: f ? It(O, f.classes) : O,
        ...y ? y.props.inputProps : {}
      },
      ...(g && m || u) && L === "outlined" ? {
        notched: !0
      } : {},
      ref: M,
      className: te(A.props.className, l, j.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!y && {
        variant: L
      },
      ...I
    })
  });
});
Xa.muiName = "Select";
function mM(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = er();
  h.useEffect(() => {
    if (!o)
      return;
    function g(m) {
      m.defaultPrevented || m.key === "Escape" && (r == null || r(m, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", g), () => {
      document.removeEventListener("keydown", g);
    };
  }, [o, r]);
  const l = Je((g, m) => {
    r == null || r(g, m);
  }), a = Je((g) => {
    !r || g == null || s.start(g, () => {
      l(null, "timeout");
    });
  });
  h.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const u = (g) => {
    r == null || r(g, "clickaway");
  }, d = s.clear, p = h.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), y = (g) => (m) => {
    const b = g.onBlur;
    b == null || b(m), p();
  }, f = (g) => (m) => {
    const b = g.onFocus;
    b == null || b(m), d();
  }, v = (g) => (m) => {
    const b = g.onMouseEnter;
    b == null || b(m), d();
  }, S = (g) => (m) => {
    const b = g.onMouseLeave;
    b == null || b(m), p();
  };
  return h.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", p), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", d);
      };
  }, [n, o, p, d]), {
    getRootProps: (g = {}) => {
      const m = {
        ...Ka(e),
        ...Ka(g)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...g,
        ...m,
        onBlur: y(m),
        onFocus: f(m),
        onMouseEnter: v(m),
        onMouseLeave: S(m)
      };
    },
    onClickAway: u
  };
}
function hM(e) {
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
  }, hM, t);
}, yM = H(sr, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(we(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.focusVisible && n1(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Jd(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Jd(e.palette.background.default, t),
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
}), bM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, u = r, d = gM(u);
  return /* @__PURE__ */ c.jsxs(yM, {
    role: l,
    elevation: 6,
    className: te(d.root, i),
    ownerState: u,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ c.jsx(vM, {
      className: d.message,
      ownerState: u,
      children: s
    }), o ? /* @__PURE__ */ c.jsx(xM, {
      className: d.action,
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
    root: ["root", `anchorOrigin${ue(n.vertical)}${ue(n.horizontal)}`]
  };
  return ve(r, SM, t);
}, CM = H("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${ue(n.anchorOrigin.vertical)}${ue(n.anchorOrigin.horizontal)}`]];
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
}))), kM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiSnackbar"
  }), o = Zr(), i = {
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
    className: p,
    disableWindowBlurListener: y = !1,
    message: f,
    onBlur: v,
    onClose: S,
    onFocus: C,
    onMouseEnter: g,
    onMouseLeave: m,
    open: b,
    resumeHideDuration: w,
    slots: E = {},
    slotProps: k = {},
    transitionDuration: R = i,
    ...T
  } = r, I = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    },
    autoHideDuration: u,
    disableWindowBlurListener: y,
    transitionDuration: R
  }, N = wM(I), {
    getRootProps: $,
    onClickAway: L
  } = mM(I), [x, j] = h.useState(!0), P = {
    slots: E,
    slotProps: k
  }, [O, A] = Se("root", {
    ref: n,
    className: [N.root, p],
    elementType: CM,
    getSlotProps: $,
    externalForwardedProps: {
      ...P,
      ...T
    },
    ownerState: I
  }), [M, {
    ownerState: z,
    ...F
  }] = Se("clickAwayListener", {
    elementType: eP,
    externalForwardedProps: P,
    getSlotProps: (X) => ({
      onClickAway: (...K) => {
        var _;
        const q = K[0];
        (_ = X.onClickAway) == null || _.call(X, ...K), !(q != null && q.defaultMuiPrevented) && L(...K);
      }
    }),
    ownerState: I
  }), [W, D] = Se("content", {
    elementType: bM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    additionalProps: {
      message: f,
      action: s
    },
    ownerState: I
  }), [Q, G] = Se("transition", {
    elementType: qs,
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
      in: b,
      timeout: R,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: I
  });
  return !b && x ? null : /* @__PURE__ */ c.jsx(M, {
    ...F,
    ...E.clickAwayListener && {
      ownerState: z
    },
    children: /* @__PURE__ */ c.jsx(O, {
      ...A,
      children: /* @__PURE__ */ c.jsx(Q, {
        ...G,
        children: d || /* @__PURE__ */ c.jsx(W, {
          ...D
        })
      })
    })
  });
});
function TM(e) {
  return ye("MuiTooltip", e);
}
const xn = pe("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function RM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const EM = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${ue(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return ve(s, TM, t);
}, PM = H($1, {
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
      [`&[data-popper-placement*="bottom"] .${xn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${xn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${xn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${xn.arrow}`]: {
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
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ue(n.placement.split("-")[0])}`]];
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
  [`.${xn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${xn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${xn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${xn.popper}[data-popper-placement*="bottom"] &`]: {
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
      [`.${xn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${xn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${xn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${xn.popper}[data-popper-placement*="bottom"] &`]: {
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
let Hl = !1;
const Bg = new lc();
let Ji = {
  x: 0,
  y: 0
};
function Kl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const dr = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disableInteractive: d = !1,
    disableTouchListener: p = !1,
    enterDelay: y = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: v = 700,
    followCursor: S = !1,
    id: C,
    leaveDelay: g = 0,
    leaveTouchDelay: m = 1500,
    onClose: b,
    onOpen: w,
    open: E,
    placement: k = "bottom",
    slotProps: R = {},
    slots: T = {},
    title: I,
    ...N
  } = r, $ = /* @__PURE__ */ h.isValidElement(i) ? i : /* @__PURE__ */ c.jsx("span", {
    children: i
  }), L = Zr(), [x, j] = h.useState(), [P, O] = h.useState(null), A = h.useRef(!1), M = h.useRef(!1), z = d || S, F = er(), W = er(), D = er(), Q = er(), [G, X] = lf({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let K = G;
  const {
    current: q
  } = h.useRef(E !== void 0), _ = Tr(C), ne = h.useRef(), re = Je(() => {
    ne.current !== void 0 && (document.body.style.WebkitUserSelect = ne.current, ne.current = void 0), Q.clear();
  });
  h.useEffect(() => re, [re]);
  const ke = (ge) => {
    Bg.clear(), Hl = !0, X(!0), w && !K && w(ge);
  }, me = Je(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ge) => {
      M.current = !1, Bg.start(800 + g, () => {
        Hl = !1;
      }), X(!1), b && K && b(ge), F.start(L.transitions.duration.shortest, () => {
        A.current = !1;
      });
    }
  ), de = (ge) => {
    A.current && ge.type !== "touchstart" || (x && x.removeAttribute("title"), W.clear(), D.clear(), y || Hl && f ? W.start(Hl ? f : y, () => {
      ke(ge);
    }) : ke(ge));
  }, fe = (ge) => {
    if (x != null && x.disabled && !q) {
      if (K && !M.current)
        return;
      M.current = !0;
    } else
      M.current = !1;
    de(ge);
  }, Me = (ge) => {
    x != null && x.disabled && !q && !M.current || de(ge);
  }, Be = (ge) => {
    W.clear(), D.start(g, () => {
      me(ge);
    });
  }, [, Ee] = h.useState(!1), $e = (ge) => {
    const Ye = (ge == null ? void 0 : ge.target) ?? x;
    if (!Ye || Ye.disabled || !Ga(Ye)) {
      Ee(!1);
      const zt = ge ?? new Event("blur");
      !ge && Ye && (Object.defineProperty(zt, "target", {
        value: Ye
      }), Object.defineProperty(zt, "currentTarget", {
        value: Ye
      })), Be(zt);
    }
  }, he = (ge) => {
    if (x || j(ge.currentTarget), M.current = !1, Ga(ge.target)) {
      const Ye = (zt) => {
        zt.target.disabled && $e(zt), zt.target.removeEventListener("blur", Ye);
      };
      ge.target.addEventListener("blur", Ye), Ee(!0), de(ge);
    }
  }, je = (ge) => {
    A.current = !0;
    const Ye = $.props;
    Ye.onTouchStart && Ye.onTouchStart(ge);
  }, et = (ge) => {
    je(ge), D.clear(), F.clear(), re(), ne.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(v, () => {
      document.body.style.WebkitUserSelect = ne.current, fe(ge);
    });
  }, Xe = (ge) => {
    $.props.onTouchEnd && $.props.onTouchEnd(ge), re(), D.start(m, () => {
      me(ge);
    });
  };
  h.useEffect(() => {
    if (!K)
      return;
    function ge(Ye) {
      Ye.key === "Escape" && me(Ye);
    }
    return document.addEventListener("keydown", ge), () => {
      document.removeEventListener("keydown", ge);
    };
  }, [me, K]);
  const Fe = ft(Io($), j, n);
  !I && I !== 0 && (K = !1);
  const qe = h.useRef(), U = (ge) => {
    const Ye = $.props;
    Ye.onMouseMove && Ye.onMouseMove(ge), Ji = {
      x: ge.clientX,
      y: ge.clientY
    }, qe.current && qe.current.update();
  }, ie = {}, ce = typeof I == "string";
  l ? (ie.title = !K && ce && !u ? I : null, ie["aria-describedby"] = K ? _ : null) : (ie["aria-label"] = ce ? I : null, ie["aria-labelledby"] = K && !ce ? _ : null);
  const se = {
    ...ie,
    ...N,
    ...$.props,
    className: te(N.className, $.props.className),
    onTouchStart: je,
    ref: Fe,
    ...S ? {
      onMouseMove: U
    } : {}
  }, Ae = {};
  p || (se.onTouchStart = et, se.onTouchEnd = Xe), u || (se.onMouseOver = Kl(fe, se.onMouseOver), se.onMouseLeave = Kl(Be, se.onMouseLeave), z || (Ae.onMouseOver = Me, Ae.onMouseLeave = Be)), a || (se.onFocus = Kl(he, se.onFocus), se.onBlur = Kl($e, se.onBlur), z || (Ae.onFocus = he, Ae.onBlur = $e));
  const oe = {
    ...r,
    arrow: o,
    disableInteractive: z,
    placement: k,
    touch: A.current
  }, le = typeof R.popper == "function" ? R.popper(oe) : R.popper, Ge = h.useMemo(() => {
    var Ye;
    let ge = [{
      name: "arrow",
      enabled: !!P,
      options: {
        element: P,
        padding: 4
      }
    }];
    return (Ye = le == null ? void 0 : le.popperOptions) != null && Ye.modifiers && (ge = ge.concat(le.popperOptions.modifiers)), {
      ...le == null ? void 0 : le.popperOptions,
      modifiers: ge
    };
  }, [P, le == null ? void 0 : le.popperOptions]), rt = EM(oe), pt = {
    slots: T,
    slotProps: {
      arrow: R.arrow,
      popper: le,
      tooltip: R.tooltip,
      transition: R.transition
    }
  }, [De, Vn] = Se("popper", {
    elementType: PM,
    externalForwardedProps: pt,
    ownerState: oe,
    className: rt.popper
  }), [ji, Mo] = Se("transition", {
    elementType: qs,
    externalForwardedProps: pt,
    ownerState: oe
  }), [$o, jo] = Se("tooltip", {
    elementType: IM,
    className: rt.tooltip,
    externalForwardedProps: pt,
    ownerState: oe
  }), [eo, dl] = Se("arrow", {
    elementType: MM,
    className: rt.arrow,
    externalForwardedProps: pt,
    ownerState: oe,
    ref: O
  });
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ h.cloneElement($, se), /* @__PURE__ */ c.jsx(De, {
      as: $1,
      placement: k,
      anchorEl: S ? {
        getBoundingClientRect: () => ({
          top: Ji.y,
          left: Ji.x,
          right: Ji.x,
          bottom: Ji.y,
          width: 0,
          height: 0
        })
      } : x,
      popperRef: qe,
      open: x ? K : !1,
      id: _,
      transition: !0,
      ...Ae,
      ...Vn,
      popperOptions: Ge,
      children: ({
        TransitionProps: ge
      }) => /* @__PURE__ */ c.jsx(ji, {
        timeout: L.transitions.duration.shorter,
        ...ge,
        ...Mo,
        children: /* @__PURE__ */ c.jsxs($o, {
          ...jo,
          children: [I, o ? /* @__PURE__ */ c.jsx(eo, {
            ...dl
          }) : null]
        })
      })
    })]
  });
}), lt = z2({
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
const Nn = pe("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), jM = (e) => {
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
    root: ["root", i && s && "labelIcon", `textColor${ue(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return ve(u, $M, t);
}, OM = H(To, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${ue(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${Nn.icon}`]: t.icon
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
  ...e.focusVisible && r1(3),
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
      ...e.focusVisible && {
        [`&.${uf.focusVisible}`]: {
          opacity: 1
        }
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
}))), es = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    indicator: d,
    label: p,
    onChange: y,
    onClick: f,
    onFocus: v,
    // eslint-disable-next-line react/prop-types
    selected: S,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: g = "inherit",
    value: m,
    wrapped: b = !1,
    ...w
  } = r, E = W1(), k = V1({
    id: m,
    ref: n,
    disabled: i,
    selected: S
  }), T = E.getItemMap().size === 0 && S ? 0 : k.tabIndex, I = {
    ...r,
    disabled: i,
    disableFocusRipple: s,
    selected: S,
    icon: !!a,
    iconPosition: u,
    label: !!p,
    fullWidth: l,
    textColor: g,
    wrapped: b
  }, N = jM(I), $ = a && p && /* @__PURE__ */ h.isValidElement(a) ? /* @__PURE__ */ h.cloneElement(a, {
    className: te(N.icon, a.props.className)
  }) : a, L = (j) => {
    !S && y && y(j, m), f && f(j);
  }, x = (j) => {
    C && !S && y && y(j, m), v && v(j);
  };
  return /* @__PURE__ */ c.jsxs(OM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: te(N.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": S,
    disabled: i,
    onClick: L,
    onFocus: x,
    tabIndex: T,
    ownerState: I,
    ...w,
    children: [u === "top" || u === "start" ? /* @__PURE__ */ c.jsxs(h.Fragment, {
      children: [$, p]
    }) : /* @__PURE__ */ c.jsxs(h.Fragment, {
      children: [p, $]
    }), d]
  });
}), ix = /* @__PURE__ */ h.createContext();
function AM(e) {
  return ye("MuiTable", e);
}
pe("MuiTable", ["root", "stickyHeader"]);
const NM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return ve({
    root: ["root", n && "stickyHeader"]
  }, AM, t);
}, LM = H("table", {
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
}))), _g = "table", zM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = _g,
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
  }, p = NM(d), y = h.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ c.jsx(ix.Provider, {
    value: y,
    children: /* @__PURE__ */ c.jsx(LM, {
      as: i,
      role: i === _g ? null : "table",
      ref: n,
      className: te(p.root, o),
      ownerState: d,
      ...u
    })
  });
}), uc = /* @__PURE__ */ h.createContext();
function BM(e) {
  return ye("MuiTableBody", e);
}
pe("MuiTableBody", ["root"]);
const _M = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, BM, t);
}, FM = H("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), DM = {
  variant: "body"
}, Fg = "tbody", WM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Fg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = _M(l);
  return /* @__PURE__ */ c.jsx(uc.Provider, {
    value: DM,
    children: /* @__PURE__ */ c.jsx(FM, {
      className: te(a.root, o),
      as: i,
      ref: n,
      role: i === Fg ? null : "rowgroup",
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
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${ue(r)}`, o !== "normal" && `padding${ue(o)}`, `size${ue(i)}`]
  };
  return ve(l, UM, t);
}, KM = H("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ue(n.size)}`], n.padding !== "normal" && t[`padding${ue(n.padding)}`], n.align !== "inherit" && t[`align${ue(n.align)}`], n.stickyHeader && t.stickyHeader];
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
}))), Vt = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    sortDirection: d,
    variant: p,
    ...y
  } = r, f = h.useContext(ix), v = h.useContext(uc), S = v && v.variant === "head";
  let C;
  s ? C = s : C = S ? "th" : "td";
  let g = a;
  C === "td" ? g = void 0 : !g && S && (g = "col");
  const m = p || v && v.variant, b = {
    ...r,
    align: o,
    component: C,
    padding: l || (f && f.padding ? f.padding : "normal"),
    size: u || (f && f.size ? f.size : "medium"),
    sortDirection: d,
    stickyHeader: m === "head" && f && f.stickyHeader,
    variant: m
  }, w = HM(b);
  let E = null;
  return d && (E = d === "asc" ? "ascending" : "descending"), /* @__PURE__ */ c.jsx(KM, {
    as: C,
    ref: n,
    className: te(w.root, i),
    "aria-sort": E,
    scope: g,
    ownerState: b,
    ...y
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
}), XM = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  return /* @__PURE__ */ c.jsx(QM, {
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
const ZM = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, qM, t);
}, JM = H("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), e5 = {
  variant: "head"
}, Dg = "thead", t5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Dg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = ZM(l);
  return /* @__PURE__ */ c.jsx(uc.Provider, {
    value: e5,
    children: /* @__PURE__ */ c.jsx(JM, {
      as: i,
      className: te(a.root, o),
      ref: n,
      role: i === Dg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), n5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), r5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function o5(e) {
  return ye("MuiTableRow", e);
}
const Wg = pe("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), i5 = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return ve({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, o5, t);
}, s5 = H("tr", {
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
  [`&.${Wg.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Wg.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Ug = "tr", Qc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Ug,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, u = h.useContext(uc), d = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: u && u.variant === "head",
    footer: u && u.variant === "footer"
  }, p = i5(d);
  return /* @__PURE__ */ c.jsx(s5, {
    as: i,
    ref: n,
    className: te(p.root, o),
    role: i === Ug ? null : "row",
    ownerState: d,
    ...a
  });
});
function l5(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function a5(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = l5,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let u = !1;
  const d = () => {
    u = !0;
  }, p = (y) => {
    if (u) {
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
    requestAnimationFrame(p);
  };
  return a === n ? (o(new Error("Element already at target position")), d) : (requestAnimationFrame(p), d);
}
const u5 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function c5(e) {
  const {
    onChange: t,
    ...n
  } = e, r = h.useRef(), o = h.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return ct(() => {
    const s = tc(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = Un(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), h.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ c.jsx("div", {
    style: u5,
    ...n,
    ref: o
  });
}
function d5(e) {
  return ye("MuiTabScrollButton", e);
}
const f5 = pe("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), p5 = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return ve({
    root: ["root", n, r && "disabled"]
  }, d5, t);
}, m5 = H(To, {
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
  [`&.${f5.disabled}`]: {
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
}), h5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    ...d
  } = r, {
    nativeButton: p,
    ...y
  } = d, f = Zu(), v = {
    isRtl: f,
    ...r
  }, S = p5(v), C = i.StartScrollButtonIcon ?? n5, g = i.EndScrollButtonIcon ?? r5, m = Ri({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  }), b = Ri({
    elementType: g,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  });
  return /* @__PURE__ */ c.jsx(m5, {
    component: "div",
    className: te(S.root, o),
    ref: n,
    role: null,
    ownerState: v,
    tabIndex: null,
    ...y,
    style: {
      ...y.style,
      ...a === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${f ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ c.jsx(C, {
      ...m
    }) : /* @__PURE__ */ c.jsx(g, {
      ...b
    })
  });
});
function g5(e) {
  return ye("MuiTabs", e);
}
const Xc = pe("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), y5 = (e) => {
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
  }, g5, a);
}, v5 = H("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Xc.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Xc.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
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
      [`& .${Xc.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), x5 = H("div", {
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
}), b5 = H("div", {
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
}), S5 = H("span", {
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
}))), w5 = H(c5)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Vg = {}, C5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTabs"
  }), o = Zr(), i = Zu(), s = sc(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: u,
    centered: d = !1,
    children: p,
    className: y,
    component: f = "div",
    allowScrollButtonsMobile: v = !1,
    indicatorColor: S = "primary",
    onChange: C,
    orientation: g = "horizontal",
    scrollButtons: m = "auto",
    selectionFollowsFocus: b,
    slots: w = {},
    slotProps: E = {},
    textColor: k = "primary",
    value: R,
    variant: T = "standard",
    visibleScrollbar: I = !1,
    ...N
  } = r, $ = T === "scrollable", L = g === "vertical", x = L ? "scrollTop" : "scrollLeft", j = L ? "top" : "left", P = L ? "bottom" : "right", O = L ? "clientHeight" : "clientWidth", A = L ? "height" : "width", M = {
    ...r,
    component: f,
    allowScrollButtonsMobile: v,
    indicatorColor: S,
    orientation: g,
    vertical: L,
    scrollButtons: m,
    textColor: k,
    variant: T,
    visibleScrollbar: I,
    fixed: !$,
    hideScrollbar: $ && !I,
    scrollableX: $ && !L,
    scrollableY: $ && L,
    centered: d && !$,
    scrollButtonsHideMobile: !v
  }, z = y5(M), F = Ri({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: M
  }), W = Ri({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: M
  }), [D, Q] = h.useState(!1), [G, X] = h.useState(Vg), [K, q] = h.useState(!1), [_, ne] = h.useState(!1), [re, ke] = h.useState(!1), me = R === !1 ? null : R, [de, fe] = h.useState(!1), [Me, Be] = h.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Ee = /* @__PURE__ */ new Map(), $e = h.useRef(null), he = h.useRef(null), je = {
    slots: w,
    slotProps: E
  }, et = () => {
    const ee = $e.current;
    let Z;
    if (ee) {
      const Te = ee.getBoundingClientRect();
      Z = {
        clientWidth: ee.clientWidth,
        scrollLeft: ee.scrollLeft,
        scrollTop: ee.scrollTop,
        scrollWidth: ee.scrollWidth,
        top: Te.top,
        bottom: Te.bottom,
        left: Te.left,
        right: Te.right
      };
    }
    let be;
    if (ee && R !== !1) {
      const Te = he.current.children;
      if (Te.length > 0) {
        const gt = Te[Ee.get(R)];
        be = gt ? gt.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: Z,
      tabMeta: be
    };
  }, Xe = Je(() => {
    const {
      tabsMeta: ee,
      tabMeta: Z
    } = et();
    let be = 0, Te;
    L ? (Te = "top", Z && ee && (be = Z.top - ee.top + ee.scrollTop)) : (Te = i ? "right" : "left", Z && ee && (be = (i ? -1 : 1) * (Z[Te] - ee[Te] + ee.scrollLeft)));
    const gt = {
      [Te]: be,
      // May be wrong until the font is loaded.
      [A]: Z ? Z[A] : 0
    };
    if (typeof G[Te] != "number" || typeof G[A] != "number")
      X(gt);
    else {
      const ar = Math.abs(G[Te] - gt[Te]), Hn = Math.abs(G[A] - gt[A]);
      (ar >= 1 || Hn >= 1) && X(gt);
    }
  }), Fe = (ee, {
    animation: Z = !0
  } = {}) => {
    Z && !s.shouldReduceMotion ? a5(x, $e.current, ee, {
      duration: o.transitions.duration.standard
    }) : $e.current[x] = ee;
  }, qe = (ee) => {
    let Z = $e.current[x];
    L ? Z += ee : Z += ee * (i ? -1 : 1), Fe(Z);
  }, U = () => {
    const ee = $e.current[O];
    let Z = 0;
    const be = Array.from(he.current.children);
    for (let Te = 0; Te < be.length; Te += 1) {
      const gt = be[Te];
      if (Z + gt[O] > ee) {
        Te === 0 && (Z = ee);
        break;
      }
      Z += gt[O];
    }
    return Z;
  }, ie = () => {
    qe(-1 * U());
  }, ce = () => {
    qe(U());
  }, [se, {
    onChange: Ae,
    ...oe
  }] = Se("scrollbar", {
    className: te(z.scrollableX, z.hideScrollbar),
    elementType: w5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: je,
    ownerState: M
  }), le = h.useCallback((ee) => {
    Ae == null || Ae(ee), Be({
      overflow: null,
      scrollbarWidth: ee
    });
  }, [Ae]), [Ge, rt] = Se("scrollButtons", {
    className: z.scrollButtons,
    elementType: h5,
    externalForwardedProps: je,
    ownerState: M,
    additionalProps: {
      orientation: g,
      slots: {
        StartScrollButtonIcon: w.startScrollButtonIcon,
        EndScrollButtonIcon: w.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: F,
        endScrollButtonIcon: W
      }
    }
  }), pt = () => {
    const ee = {};
    ee.scrollbarSizeListener = $ ? /* @__PURE__ */ c.jsx(se, {
      ...oe,
      onChange: le
    }) : null;
    const be = $ && (m === "auto" && (K || _) || m === !0);
    return ee.scrollButtonStart = be ? /* @__PURE__ */ c.jsx(Ge, {
      direction: i ? "right" : "left",
      onClick: ie,
      disabled: !K,
      ...rt
    }) : null, ee.scrollButtonEnd = be ? /* @__PURE__ */ c.jsx(Ge, {
      direction: i ? "left" : "right",
      onClick: ce,
      disabled: !_,
      ...rt
    }) : null, ee;
  }, De = Je((ee) => {
    const {
      tabsMeta: Z,
      tabMeta: be
    } = et();
    if (!(!be || !Z)) {
      if (be[j] < Z[j]) {
        const Te = Z[x] + (be[j] - Z[j]);
        Fe(Te, {
          animation: ee
        });
      } else if (be[P] > Z[P]) {
        const Te = Z[x] + (be[P] - Z[P]);
        Fe(Te, {
          animation: ee
        });
      }
    }
  }), Vn = Je(() => {
    $ && m !== !1 && ke(!re);
  });
  h.useEffect(() => {
    const ee = tc(() => {
      $e.current && Xe();
    });
    let Z;
    const be = (ar) => {
      ar.forEach((Hn) => {
        Hn.removedNodes.forEach((to) => {
          Z == null || Z.unobserve(to);
        }), Hn.addedNodes.forEach((to) => {
          Z == null || Z.observe(to);
        });
      }), ee(), Vn();
    }, Te = Un($e.current);
    Te.addEventListener("resize", ee);
    let gt;
    return typeof ResizeObserver < "u" && (Z = new ResizeObserver(ee), Array.from(he.current.children).forEach((ar) => {
      Z.observe(ar);
    })), typeof MutationObserver < "u" && (gt = new MutationObserver(be), gt.observe(he.current, {
      childList: !0
    })), () => {
      ee.clear(), Te.removeEventListener("resize", ee), gt == null || gt.disconnect(), Z == null || Z.disconnect();
    };
  }, [Xe, Vn]), h.useEffect(() => {
    const ee = Array.from(he.current.children), Z = ee.length;
    if (typeof IntersectionObserver < "u" && Z > 0 && $ && m !== !1) {
      const be = ee[0], Te = ee[Z - 1], gt = {
        root: $e.current,
        threshold: 0.99
      }, ar = (Lo) => {
        q(!Lo[0].isIntersecting);
      }, Hn = new IntersectionObserver(ar, gt);
      Hn.observe(be);
      const to = (Lo) => {
        ne(!Lo[0].isIntersecting);
      }, Ai = new IntersectionObserver(to, gt);
      return Ai.observe(Te), () => {
        Hn.disconnect(), Ai.disconnect();
      };
    }
  }, [$, m, re, p == null ? void 0 : p.length]), h.useEffect(() => {
    Q(!0);
  }, []), h.useEffect(() => {
    Xe();
  }), h.useEffect(() => {
    De(Vg !== G);
  }, [De, G]), h.useImperativeHandle(u, () => ({
    updateIndicator: Xe,
    updateScrollButtons: Vn
  }), [Xe, Vn]);
  const [ji, Mo] = Se("indicator", {
    className: z.indicator,
    elementType: S5,
    externalForwardedProps: je,
    ownerState: M,
    additionalProps: {
      style: G
    }
  }), $o = /* @__PURE__ */ c.jsx(ji, {
    ...Mo
  }), jo = U1({
    activeItemId: de ? void 0 : me,
    orientation: g,
    isRtl: i
  }), eo = jo.getContainerProps(), ge = h.Children.toArray(p).filter(h.isValidElement).map((ee, Z) => {
    const be = ee.props.value === void 0 ? Z : ee.props.value;
    return Ee.set(be, Z), {
      child: ee,
      index: Z,
      childValue: be
    };
  }).map(({
    child: ee,
    childValue: Z
  }) => {
    const be = Z === R;
    return /* @__PURE__ */ h.cloneElement(ee, {
      fullWidth: T === "fullWidth",
      indicator: be && !D && $o,
      selected: be,
      selectionFollowsFocus: b,
      onChange: C,
      textColor: k,
      value: Z
    });
  }), Ye = pt(), [zt, fl] = Se("root", {
    ref: n,
    className: te(z.root, y),
    elementType: v5,
    externalForwardedProps: {
      ...je,
      ...N,
      component: f
    },
    ownerState: M
  }), [Oo, Ao] = Se("scroller", {
    ref: $e,
    className: z.scroller,
    elementType: x5,
    externalForwardedProps: je,
    ownerState: M,
    additionalProps: {
      style: {
        overflow: Me.overflow,
        [L ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: I ? void 0 : -Me.scrollbarWidth
      }
    }
  }), No = ft(eo.ref, he), cc = (ee) => {
    const Z = he.current, be = Jn(ht(Z));
    (be == null ? void 0 : be.getAttribute("role")) === "tab" && eo.onKeyDown(ee);
  }, [pl, Oi] = Se("list", {
    ref: No,
    className: z.list,
    elementType: b5,
    externalForwardedProps: je,
    ownerState: M,
    getSlotProps: (ee) => ({
      ...ee,
      onBlur: (Z) => {
        var be;
        go(Z.currentTarget, Z.relatedTarget) || fe(!1), (be = ee.onBlur) == null || be.call(ee, Z);
      },
      onKeyDown: (Z) => {
        var be;
        cc(Z), (be = ee.onKeyDown) == null || be.call(ee, Z);
      },
      onFocus: (Z) => {
        var be;
        fe(!0), eo.onFocus(Z), (be = ee.onFocus) == null || be.call(ee, Z);
      }
    })
  });
  return /* @__PURE__ */ c.jsxs(zt, {
    ...fl,
    children: [Ye.scrollButtonStart, Ye.scrollbarSizeListener, /* @__PURE__ */ c.jsxs(Oo, {
      ...Ao,
      children: [/* @__PURE__ */ c.jsx(pl, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": g === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Oi,
        children: /* @__PURE__ */ c.jsx(Zp.Provider, {
          value: jo,
          children: ge
        })
      }), D && $o]
    }), Ye.scrollButtonEnd]
  });
});
function k5(e) {
  return ye("MuiTextField", e);
}
pe("MuiTextField", ["root"]);
const T5 = {
  standard: qp,
  filled: Xp,
  outlined: Jp
}, R5 = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, k5, t);
}, E5 = H(DP, {
  name: "MuiTextField",
  slot: "Root"
})({}), Ir = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disabled: d = !1,
    error: p = !1,
    fullWidth: y = !1,
    helperText: f,
    id: v,
    inputRef: S,
    label: C,
    maxRows: g,
    minRows: m,
    multiline: b = !1,
    name: w,
    onBlur: E,
    onChange: k,
    onFocus: R,
    placeholder: T,
    required: I = !1,
    rows: N,
    select: $ = !1,
    slots: L = {},
    slotProps: x = {},
    type: j,
    value: P,
    variant: O = "outlined",
    ...A
  } = r, M = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: d,
    error: p,
    fullWidth: y,
    multiline: b,
    required: I,
    select: $,
    variant: O
  }, z = R5(M), F = Tr(v), W = f && F ? `${F}-helper-text` : void 0, D = C && F ? `${F}-label` : void 0, Q = T5[O], G = {
    slots: L,
    slotProps: x
  }, [X, K] = Se("select", {
    elementType: Xa,
    externalForwardedProps: G,
    ownerState: M
  }), q = $ && K.native, _ = {}, ne = G.slotProps.inputLabel;
  O === "outlined" && (ne && typeof ne.shrink < "u" && (_.notched = ne.shrink), _.label = C), $ && (q || (_.id = void 0), _["aria-describedby"] = void 0);
  const [re, ke] = Se("root", {
    elementType: E5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...G,
      ...A
    },
    ownerState: M,
    className: te(z.root, l),
    ref: n,
    additionalProps: {
      disabled: d,
      error: p,
      fullWidth: y,
      required: I,
      color: a,
      variant: O
    }
  }), [me, de] = Se("input", {
    elementType: Q,
    externalForwardedProps: G,
    additionalProps: _,
    ownerState: M
  }), [fe, Me] = Se("inputLabel", {
    elementType: oI,
    externalForwardedProps: G,
    ownerState: M
  }), [Be, Ee] = Se("htmlInput", {
    elementType: "input",
    externalForwardedProps: G,
    ownerState: M
  }), [$e, he] = Se("formHelperText", {
    elementType: VP,
    externalForwardedProps: G,
    ownerState: M
  }), je = /* @__PURE__ */ c.jsx(me, {
    "aria-describedby": W,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: y,
    multiline: b,
    name: w,
    rows: N,
    maxRows: g,
    minRows: m,
    type: j,
    value: P,
    id: F,
    inputRef: S,
    onBlur: E,
    onChange: k,
    onFocus: R,
    placeholder: T,
    inputProps: Ee,
    slots: {
      input: L.htmlInput ? Be : void 0
    },
    ...de
  });
  return /* @__PURE__ */ c.jsxs(re, {
    ...ke,
    children: [C != null && C !== "" && /* @__PURE__ */ c.jsx(fe, {
      htmlFor: $ && !q ? void 0 : F,
      id: D,
      ...$ && !q && {
        component: "div"
      },
      ...Me,
      children: C
    }), $ ? /* @__PURE__ */ c.jsx(X, {
      "aria-describedby": W,
      id: F,
      labelId: D,
      value: P,
      input: je,
      ...K,
      children: s
    }) : je, f && /* @__PURE__ */ c.jsx($e, {
      id: W,
      ...he,
      children: f
    })]
  });
}), P5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), qc = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), Hg = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), I5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M8 5v14l11-7z"
})), M5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M6 6h12v12H6z"
})), $5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
})), j5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M15 21h-2v-2h2zm-2-7h-2v5h2zm8-2h-2v4h2zm-2-2h-2v2h2zM7 12H5v2h2zm-2-2H3v2h2zm7-5h2V3h-2zm-7.5-.5v3h3v-3zM9 9H3V3h6zm-4.5 7.5v3h3v-3zM9 21H3v-6h6zm7.5-16.5v3h3v-3zM21 9h-6V3h6zm-2 10v-3h-4v2h2v3h4v-2zm-2-7h-4v2h4zm-4-2H7v2h2v2h2v-2h2zm1-1V7h-2V5h-2v4zM6.75 5.25h-1.5v1.5h1.5zm0 12h-1.5v1.5h1.5zm12-12h-1.5v1.5h1.5z"
})), Zc = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
})), O5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), A5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
})), N5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
})), L5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5M7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
})), Jc = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), z5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "m20.2 5.9.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7m-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M8 18H6v-2h2zm3.5 0h-2v-2h2zm3.5 0h-2v-2h2z"
})), Kg = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
})), B5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95M12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19"
})), _5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"
})), F5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
})), Gg = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5z"
})), D5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
})), yt = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', hr = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function Kt({ children: e, sx: t }) {
  return /* @__PURE__ */ c.jsx(
    Ie,
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
function ts({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ c.jsxs(sr, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ c.jsxs(
      lt,
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
          typeof e == "string" ? /* @__PURE__ */ c.jsx(Kt, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(Le, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function ns({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ c.jsxs(Le, { sx: n, children: [
    /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ c.jsx(
        Ie,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ c.jsx(Ie, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function Ht({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ c.jsxs(Le, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ c.jsx(Kt, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ c.jsx(
      Ie,
      {
        sx: {
          fontFamily: n ? yt : void 0,
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
function Yg({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ c.jsx(
    Le,
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
function W5(e, t) {
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
function U5({ lines: e, running: t }) {
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
  }, [e]), !e.length && !t ? null : /* @__PURE__ */ c.jsxs(
    sr,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: hr.bg,
        color: hr.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: yt,
        fontSize: 12,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ c.jsx(
          Le,
          {
            sx: {
              color: i.stream === "stderr" ? hr.err : i.stream === "meta" ? hr.dim : hr.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ c.jsx(Le, { sx: { color: hr.dim }, children: "▍running…" }),
        /* @__PURE__ */ c.jsx("div", { ref: n })
      ]
    }
  );
}
function V5(e) {
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
function Qg({
  text: e,
  size: t = 220
}) {
  const n = h.useRef(null);
  return h.useEffect(() => {
    const r = n.current;
    if (!r) return;
    const o = r.getContext("2d");
    if (!o) return;
    const i = V5(e), s = i.length, l = t / (s + 4), a = l * 2;
    o.fillStyle = "#ffffff", o.fillRect(0, 0, t, t), o.fillStyle = "#000000";
    for (let u = 0; u < s; u++)
      for (let d = 0; d < s; d++)
        i[u][d] && o.fillRect(
          Math.round(a + d * l),
          Math.round(a + u * l),
          Math.ceil(l),
          Math.ceil(l)
        );
  }, [e, t]), /* @__PURE__ */ c.jsx(
    Le,
    {
      sx: {
        p: 1.5,
        bgcolor: "#ffffff",
        borderRadius: "8px",
        display: "inline-block",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      },
      children: /* @__PURE__ */ c.jsx("canvas", { ref: n, width: t, height: t, style: { display: "block" } })
    }
  );
}
function Gl(e) {
  if (!e || e === 0) return "0 B";
  const t = 1024, n = ["B", "KB", "MB", "GB", "TB"], r = Math.floor(Math.log(e) / Math.log(t));
  return `${parseFloat((e / Math.pow(t, r)).toFixed(2))} ${n[r]}`;
}
function H5(e) {
  if (!e || e === 0) return "Never";
  const n = Math.floor(Date.now() / 1e3) - e;
  return n < 60 ? `${n}s ago` : n < 3600 ? `${Math.floor(n / 60)}m ago` : n < 86400 ? `${Math.floor(n / 3600)}h ago` : `${Math.floor(n / 86400)}d ago`;
}
const Yl = { p: 2, "&:last-child": { pb: 2 } }, Ql = 2.25;
function K5({ ctx: e }) {
  const t = h.useMemo(() => ec(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ c.jsx(Kk, { theme: t, children: /* @__PURE__ */ c.jsx(G5, { ctx: e }) });
}
function G5({ ctx: e }) {
  const [t, n] = h.useState(0), [r, o] = h.useState(null), [i, s] = h.useState(null), [l, a] = h.useState(null), [u, d] = h.useState([]), [p, y] = h.useState([]), [f, v] = h.useState(!1), [S, C] = h.useState(null), [g, m] = h.useState(!1), [b, w] = h.useState(""), [E, k] = h.useState([]), [R, T] = h.useState(!1), [I, N] = h.useState({
    name: "",
    ip: "",
    allowed_ips: "0.0.0.0/0, ::/0",
    dns: "1.1.1.1, 8.8.8.8",
    preshared_key: ""
  }), [$, L] = h.useState("cloudflare"), [x, j] = h.useState("all"), [P, O] = h.useState("create"), [A, M] = h.useState(""), [z, F] = h.useState(null), [W, D] = h.useState(null), [Q, G] = h.useState(""), [X, K] = h.useState(null), [q, _] = h.useState(null), [ne, re] = h.useState(""), ke = h.useRef(null);
  h.useEffect(() => () => {
    var U;
    return (U = ke.current) == null ? void 0 : U.abort();
  }, []);
  const me = h.useCallback(
    async (U, ie) => {
      const ce = await e.api(U, ie), se = await ce.json().catch(() => ({}));
      if (!ce.ok) throw new Error(se.message ?? `HTTP ${ce.status}`);
      return se;
    },
    [e]
  ), de = h.useCallback(async () => {
    v(!0);
    try {
      const [U, ie, ce, se, Ae] = await Promise.all([
        me("/server/status").catch(() => null),
        me("/server/config").catch(() => null),
        me("/peers").catch(() => ({ peers: [] })),
        me("/server/logs").catch(() => ({ logs: [] })),
        me("/meta").catch(() => null)
      ]);
      U && o(U), ie && s(ie), Ae && a(Ae), d((ce == null ? void 0 : ce.peers) ?? []), y((se == null ? void 0 : se.logs) ?? []);
    } catch (U) {
      C(U.message || "Failed to load WireGuard data");
    } finally {
      v(!1);
    }
  }, [me]);
  h.useEffect(() => {
    de();
    const U = setInterval(de, 15e3);
    return () => clearInterval(U);
  }, [de]);
  async function fe(U, ie, ce, se) {
    w(U), k([]), T(!0), m(!0);
    const Ae = new AbortController();
    ke.current = Ae;
    try {
      for await (const oe of e.run(ie, { method: ce, body: se, signal: Ae.signal }))
        k((le) => W5(le, oe));
      de();
    } catch (oe) {
      Ae.signal.aborted || k((le) => [...le, { stream: "stderr", text: String(oe) }]);
    } finally {
      T(!1);
    }
  }
  const Me = () => fe("Starting WireGuard Server", "/server/start", "POST"), Be = () => fe("Stopping WireGuard Server", "/server/stop", "POST"), Ee = () => fe("Restarting WireGuard Server", "/server/restart", "POST"), $e = async () => {
    var U, ie;
    if (!I.name.trim()) {
      C("Peer name is required");
      return;
    }
    if (P === "import" && !A.trim()) {
      C("Client public key is required for import");
      return;
    }
    v(!0);
    try {
      if (P === "import") {
        const ce = {
          name: I.name.trim(),
          public_key: A.trim(),
          ip: ((U = I.ip) == null ? void 0 : U.trim()) || void 0,
          allowed_ips: I.allowed_ips || "0.0.0.0/0, ::/0",
          dns: I.dns || "1.1.1.1, 8.8.8.8",
          preshared_key: I.preshared_key ? I.preshared_key : void 0
        }, se = await me("/peers/import", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ce)
        });
        se != null && se.peer && (F(se.peer), n(0), N({
          name: "",
          ip: "",
          allowed_ips: "0.0.0.0/0, ::/0",
          dns: "1.1.1.1, 8.8.8.8",
          preshared_key: ""
        }), M(""), de());
      } else {
        const ce = {
          name: I.name.trim(),
          ip: ((ie = I.ip) == null ? void 0 : ie.trim()) || void 0,
          allowed_ips: I.allowed_ips || "0.0.0.0/0, ::/0",
          dns: I.dns || "1.1.1.1, 8.8.8.8",
          preshared_key: I.preshared_key ? I.preshared_key : void 0
        }, se = await me("/peers/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ce)
        });
        se != null && se.peer && (F(se.peer), n(0), N({
          name: "",
          ip: "",
          allowed_ips: "0.0.0.0/0, ::/0",
          dns: "1.1.1.1, 8.8.8.8",
          preshared_key: ""
        }), de());
      }
    } catch (ce) {
      C(ce.message || "Failed to create or import client peer");
    } finally {
      v(!1);
    }
  }, he = async (U) => {
    try {
      await me(`/peers/${encodeURIComponent(U.id)}/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: !U.enabled })
      }), C(`Peer ${U.name} ${U.enabled ? "disabled" : "enabled"}`), de();
    } catch (ie) {
      C(ie.message || "Failed to toggle peer");
    }
  }, je = async () => {
    if (!(!q || !ne.trim()))
      try {
        await me(`/peers/${encodeURIComponent(q.id)}/rename`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ new_name: ne.trim() })
        }), C(`Peer renamed to ${ne.trim()}`), _(null), re(""), de();
      } catch (U) {
        C(U.message || "Failed to rename peer");
      }
  }, et = async (U) => {
    K(null), await fe(`Deleting Peer ${U.name}`, `/peers/${encodeURIComponent(U.id)}`, "DELETE");
  }, Xe = async (U) => {
    D(U);
    try {
      const ie = await me(`/peers/${encodeURIComponent(U.id)}/config`);
      G((ie == null ? void 0 : ie.config) || "");
    } catch {
      G("# Error loading peer configuration");
    }
  }, Fe = (U, ie) => {
    const ce = new Blob([ie], { type: "text/plain;charset=utf-8" }), se = URL.createObjectURL(ce), Ae = document.createElement("a");
    Ae.href = se, Ae.download = `${U}.conf`, Ae.click(), URL.revokeObjectURL(se);
  }, qe = (r == null ? void 0 : r.status) === "running";
  return /* @__PURE__ */ c.jsxs(Le, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ c.jsxs(
      lt,
      {
        direction: { xs: "column", sm: "row" },
        sx: {
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ c.jsx(P5, { sx: { fontSize: 32, color: "primary.main" } }),
            /* @__PURE__ */ c.jsxs(Le, { children: [
              /* @__PURE__ */ c.jsx(Ie, { variant: "h5", sx: { fontWeight: 700, lineHeight: 1.2 }, children: "WireGuard VPN" }),
              /* @__PURE__ */ c.jsx(Ie, { variant: "body2", sx: { color: "text.secondary" }, children: "High-performance kernel VPN tunnels & client access" })
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1.5, sx: { alignItems: "center", flexWrap: "wrap" }, children: [
            /* @__PURE__ */ c.jsx(
              oo,
              {
                size: "small",
                label: qe ? "RUNNING" : "STOPPED",
                color: qe ? "success" : "default",
                sx: { fontWeight: 700, letterSpacing: "0.05em" }
              }
            ),
            /* @__PURE__ */ c.jsx(
              oo,
              {
                size: "small",
                label: `PORT ${(i == null ? void 0 : i.listen_port) ?? (r == null ? void 0 : r.listen_port) ?? "—"}/UDP`,
                variant: "outlined",
                sx: { fontFamily: yt, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ c.jsx(
              oo,
              {
                size: "small",
                label: (r == null ? void 0 : r.endpoint) || "127.0.0.1",
                variant: "outlined",
                sx: { fontFamily: yt, fontSize: "0.75rem" }
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ c.jsx(dr, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
              Ln,
              {
                size: "small",
                onClick: de,
                disabled: f,
                sx: { border: "1px solid", borderColor: "divider" },
                children: f ? /* @__PURE__ */ c.jsx(xs, { size: 16, color: "inherit" }) : /* @__PURE__ */ c.jsx(Hg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            qe ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsx(dr, { title: "Restart WireGuard Server", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
                Ln,
                {
                  size: "small",
                  color: "warning",
                  onClick: Ee,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ c.jsx($5, { sx: { fontSize: 18 } })
                }
              ) }) }),
              /* @__PURE__ */ c.jsx(dr, { title: "Stop WireGuard Server", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
                Ln,
                {
                  size: "small",
                  color: "error",
                  onClick: Be,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ c.jsx(M5, { sx: { fontSize: 18 } })
                }
              ) }) })
            ] }) : /* @__PURE__ */ c.jsx(dr, { title: "Start WireGuard Server", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
              Ln,
              {
                size: "small",
                color: "success",
                onClick: Me,
                sx: { border: "1px solid", borderColor: "success.main", bgcolor: (U) => Ys(U.palette.success.main, 0.1) },
                children: /* @__PURE__ */ c.jsx(I5, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ c.jsx(
              $t,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(qc, {}),
                onClick: () => n(1),
                sx: { ml: 1, whiteSpace: "nowrap" },
                children: "Add Client Peer"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(Le, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: 2 }, children: [
      /* @__PURE__ */ c.jsx(Bl, { variant: "outlined", children: /* @__PURE__ */ c.jsx(_l, { sx: Yl, children: /* @__PURE__ */ c.jsxs(lt, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Le, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Kt, { children: "VPN Server Status" }),
          /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
            /* @__PURE__ */ c.jsx(Yg, { ok: qe, size: 10 }),
            /* @__PURE__ */ c.jsx(Ie, { variant: "h6", sx: { fontWeight: 700 }, children: qe ? `Active (${(i == null ? void 0 : i.interface) || "wg0"})` : "Inactive" })
          ] }),
          /* @__PURE__ */ c.jsxs(Ie, { variant: "caption", sx: { color: "text.disabled", fontFamily: yt }, children: [
            "Port: ",
            (i == null ? void 0 : i.listen_port) ?? (r == null ? void 0 : r.listen_port) ?? "—",
            " • UDP"
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(Gg, { sx: { color: qe ? "success.main" : "text.disabled" } })
      ] }) }) }),
      /* @__PURE__ */ c.jsx(Bl, { variant: "outlined", children: /* @__PURE__ */ c.jsx(_l, { sx: Yl, children: /* @__PURE__ */ c.jsxs(lt, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Le, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Kt, { children: "Connected Peers" }),
          /* @__PURE__ */ c.jsxs(Ie, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
            (r == null ? void 0 : r.active_peers_count) ?? 0,
            " ",
            /* @__PURE__ */ c.jsxs(Ie, { component: "span", variant: "body2", sx: { color: "text.secondary" }, children: [
              "/ ",
              u.length,
              " Total"
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(Ie, { variant: "caption", sx: { color: "text.disabled" }, children: "Active handshakes < 3m" })
        ] }),
        /* @__PURE__ */ c.jsx(Kg, { sx: { color: "primary.main" } })
      ] }) }) }),
      /* @__PURE__ */ c.jsx(Bl, { variant: "outlined", children: /* @__PURE__ */ c.jsx(_l, { sx: Yl, children: /* @__PURE__ */ c.jsxs(lt, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Le, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Kt, { children: "Total Bandwidth" }),
          /* @__PURE__ */ c.jsxs(Ie, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, fontFamily: yt }, children: [
            "↓ ",
            Gl((r == null ? void 0 : r.total_rx_bytes) ?? 0)
          ] }),
          /* @__PURE__ */ c.jsxs(Ie, { variant: "caption", sx: { color: "text.secondary", fontFamily: yt }, children: [
            "↑ ",
            Gl((r == null ? void 0 : r.total_tx_bytes) ?? 0)
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(B5, { sx: { color: "info.main" } })
      ] }) }) }),
      /* @__PURE__ */ c.jsx(Bl, { variant: "outlined", children: /* @__PURE__ */ c.jsx(_l, { sx: Yl, children: /* @__PURE__ */ c.jsxs(lt, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Le, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Kt, { children: "VPN Subnet" }),
          /* @__PURE__ */ c.jsx(Ie, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, fontFamily: yt }, children: (i == null ? void 0 : i.subnet) || (r == null ? void 0 : r.subnet) || "—" }),
          /* @__PURE__ */ c.jsxs(Ie, { variant: "caption", sx: { color: "text.disabled", fontFamily: yt }, children: [
            "Gateway: ",
            (i == null ? void 0 : i.address) || (r == null ? void 0 : r.address) || "—"
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(z5, { sx: { color: "warning.main" } })
      ] }) }) })
    ] }),
    /* @__PURE__ */ c.jsxs(sr, { sx: { overflow: "hidden" }, children: [
      /* @__PURE__ */ c.jsxs(
        C5,
        {
          value: t,
          onChange: (U, ie) => n(ie),
          variant: "scrollable",
          scrollButtons: "auto",
          sx: {
            borderBottom: "1px solid",
            borderColor: "divider",
            px: 1
          },
          children: [
            /* @__PURE__ */ c.jsx(es, { icon: /* @__PURE__ */ c.jsx(Kg, { sx: { fontSize: 18 } }), iconPosition: "start", label: "VPN Client Peers" }),
            /* @__PURE__ */ c.jsx(es, { icon: /* @__PURE__ */ c.jsx(qc, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Add Client Peer" }),
            /* @__PURE__ */ c.jsx(es, { icon: /* @__PURE__ */ c.jsx(F5, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Server Configuration" }),
            /* @__PURE__ */ c.jsx(es, { icon: /* @__PURE__ */ c.jsx(_5, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Live Traffic Logs" }),
            /* @__PURE__ */ c.jsx(es, { icon: /* @__PURE__ */ c.jsx(Gg, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Service & Isolation" })
          ]
        }
      ),
      t === 0 && /* @__PURE__ */ c.jsx(Le, { children: /* @__PURE__ */ c.jsx(XM, { children: /* @__PURE__ */ c.jsxs(zM, { size: "medium", children: [
        /* @__PURE__ */ c.jsx(t5, { children: /* @__PURE__ */ c.jsxs(Qc, { sx: { bgcolor: "action.hover" }, children: [
          /* @__PURE__ */ c.jsx(Vt, { sx: { width: 40 } }),
          /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Kt, { children: "Peer Name" }) }),
          /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Kt, { children: "Assigned IP" }) }),
          /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Kt, { children: "Public Key" }) }),
          /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Kt, { children: "Last Handshake" }) }),
          /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Kt, { children: "Transfer (Rx / Tx)" }) }),
          /* @__PURE__ */ c.jsx(Vt, { align: "right", children: /* @__PURE__ */ c.jsx(Kt, { children: "Actions" }) })
        ] }) }),
        /* @__PURE__ */ c.jsx(WM, { children: u.length === 0 ? /* @__PURE__ */ c.jsx(Qc, { children: /* @__PURE__ */ c.jsxs(Vt, { colSpan: 7, align: "center", sx: { py: 5 }, children: [
          /* @__PURE__ */ c.jsx(Ie, { variant: "body2", sx: { color: "text.secondary", mb: 1.5 }, children: "No VPN client peers configured yet." }),
          /* @__PURE__ */ c.jsx(
            $t,
            {
              variant: "outlined",
              size: "small",
              startIcon: /* @__PURE__ */ c.jsx(qc, {}),
              onClick: () => n(1),
              children: "Create First Peer"
            }
          )
        ] }) }) : u.map((U) => {
          const ie = U.last_handshake > 0 && Math.floor(Date.now() / 1e3) - U.last_handshake < 180;
          return /* @__PURE__ */ c.jsxs(Qc, { hover: !0, sx: { opacity: U.enabled ? 1 : 0.6 }, children: [
            /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Yg, { ok: U.enabled && ie, size: 8 }) }),
            /* @__PURE__ */ c.jsxs(Vt, { children: [
              /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 0.5, sx: { alignItems: "center", flexWrap: "wrap" }, children: [
                /* @__PURE__ */ c.jsx(Ie, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: U.name }),
                !U.enabled && /* @__PURE__ */ c.jsx(oo, { size: "small", label: "DISABLED", color: "default", sx: { fontSize: "0.65rem", height: 18 } }),
                U.imported && /* @__PURE__ */ c.jsx(oo, { size: "small", label: "IMPORTED", color: "info", variant: "outlined", sx: { fontSize: "0.65rem", height: 18 } })
              ] }),
              /* @__PURE__ */ c.jsxs(Ie, { variant: "caption", sx: { color: "text.disabled", fontFamily: yt }, children: [
                "id: ",
                U.id
              ] })
            ] }),
            /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(
              oo,
              {
                size: "small",
                label: U.ip,
                sx: { fontFamily: yt, fontSize: "0.75rem" }
              }
            ) }),
            /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(
              Ie,
              {
                sx: {
                  fontFamily: yt,
                  fontSize: "0.75rem",
                  color: "text.secondary",
                  maxWidth: 160,
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: U.public_key
              }
            ) }),
            /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Ie, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: H5(U.last_handshake) }) }),
            /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsxs(Ie, { sx: { fontFamily: yt, fontSize: "0.75rem" }, children: [
              "↓ ",
              Gl(U.rx_bytes),
              " / ↑ ",
              Gl(U.tx_bytes)
            ] }) }),
            /* @__PURE__ */ c.jsx(Vt, { align: "right", children: /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ c.jsx(dr, { title: U.enabled ? "Disable Peer" : "Enable Peer", children: /* @__PURE__ */ c.jsx(
                Ln,
                {
                  size: "small",
                  onClick: () => he(U),
                  children: U.enabled ? /* @__PURE__ */ c.jsx(N5, { fontSize: "small", color: "success" }) : /* @__PURE__ */ c.jsx(L5, { fontSize: "small", color: "action" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(dr, { title: "Rename Peer", children: /* @__PURE__ */ c.jsx(
                Ln,
                {
                  size: "small",
                  onClick: () => {
                    _(U), re(U.name);
                  },
                  children: /* @__PURE__ */ c.jsx(A5, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(dr, { title: "View QR Code & Config", children: /* @__PURE__ */ c.jsx(
                Ln,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => Xe(U),
                  children: /* @__PURE__ */ c.jsx(j5, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(dr, { title: "Download .conf file", children: /* @__PURE__ */ c.jsx(
                Ln,
                {
                  size: "small",
                  onClick: async () => {
                    const ce = await me(
                      `/peers/${encodeURIComponent(U.id)}/config`
                    );
                    ce != null && ce.config && Fe(U.name, ce.config);
                  },
                  children: /* @__PURE__ */ c.jsx(Zc, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(dr, { title: "Delete Peer", children: /* @__PURE__ */ c.jsx(
                Ln,
                {
                  size: "small",
                  color: "error",
                  onClick: () => K(U),
                  children: /* @__PURE__ */ c.jsx(O5, { fontSize: "small" })
                }
              ) })
            ] }) })
          ] }, U.id);
        }) })
      ] }) }) }),
      t === 1 && /* @__PURE__ */ c.jsxs(Le, { sx: { p: Ql, maxWidth: 640 }, children: [
        /* @__PURE__ */ c.jsx(Ie, { variant: "h6", sx: { fontWeight: 600, mb: 0.5 }, children: P === "import" ? "Import Existing VPN Client Profile" : "Create New VPN Client Profile" }),
        /* @__PURE__ */ c.jsx(Ie, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: P === "import" ? "Registers an existing client public key without storing private credentials on the server." : "Generates cryptographic Curve25519 keypair, allocates next IP, and renders client QR code." }),
        /* @__PURE__ */ c.jsx(Le, { sx: { mb: 2.5 }, children: /* @__PURE__ */ c.jsxs(KE, { size: "small", children: [
          /* @__PURE__ */ c.jsx(
            $t,
            {
              variant: P === "create" ? "contained" : "outlined",
              onClick: () => O("create"),
              children: "Generate New Keys"
            }
          ),
          /* @__PURE__ */ c.jsx(
            $t,
            {
              variant: P === "import" ? "contained" : "outlined",
              onClick: () => O("import"),
              children: "Import Existing Public Key"
            }
          )
        ] }) }),
        /* @__PURE__ */ c.jsxs(lt, { spacing: 2.5, children: [
          /* @__PURE__ */ c.jsx(ns, { label: "Peer / Device Name", hint: "Alphanumeric (e.g. phone, macbook, router)", children: /* @__PURE__ */ c.jsx(
            Ir,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "e.g. alice-iphone",
              value: I.name,
              onChange: (U) => N({ ...I, name: U.target.value })
            }
          ) }),
          P === "import" && /* @__PURE__ */ c.jsx(ns, { label: "Client Public Key", hint: "Base64 Curve25519 public key (44 chars, e.g. from wg pubkey)", children: /* @__PURE__ */ c.jsx(
            Ir,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "e.g. 7XpQ...=",
              value: A,
              onChange: (U) => M(U.target.value),
              slotProps: {
                input: {
                  sx: { fontFamily: yt, fontSize: "0.8125rem" }
                }
              }
            }
          ) }),
          /* @__PURE__ */ c.jsx(ns, { label: "Assigned Client IP", hint: "Leave empty to auto-allocate next available 10.8.0.x", children: /* @__PURE__ */ c.jsx(
            Ir,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "Auto-allocated (e.g. 10.8.0.2)",
              value: I.ip,
              onChange: (U) => N({ ...I, ip: U.target.value })
            }
          ) }),
          /* @__PURE__ */ c.jsx(ns, { label: "Traffic Routing (Allowed IPs)", hint: "What traffic this client routes through VPN", children: /* @__PURE__ */ c.jsxs(
            Xa,
            {
              fullWidth: !0,
              size: "small",
              value: x,
              onChange: (U) => {
                const ie = U.target.value;
                j(ie), ie === "all" ? N({ ...I, allowed_ips: "0.0.0.0/0, ::/0" }) : ie === "subnet" && N({ ...I, allowed_ips: "10.8.0.0/24" });
              },
              children: [
                /* @__PURE__ */ c.jsx(Vo, { value: "all", children: "Full Tunnel (All Traffic: 0.0.0.0/0, ::/0)" }),
                /* @__PURE__ */ c.jsx(Vo, { value: "subnet", children: "Split Tunnel (VPN Subnet Only: 10.8.0.0/24)" }),
                /* @__PURE__ */ c.jsx(Vo, { value: "custom", children: "Custom Allowed IPs" })
              ]
            }
          ) }),
          x === "custom" && /* @__PURE__ */ c.jsx(
            Ir,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "0.0.0.0/0, ::/0",
              value: I.allowed_ips,
              onChange: (U) => N({ ...I, allowed_ips: U.target.value })
            }
          ),
          /* @__PURE__ */ c.jsx(ns, { label: "DNS Resolver Preset", children: /* @__PURE__ */ c.jsxs(
            Xa,
            {
              fullWidth: !0,
              size: "small",
              value: $,
              onChange: (U) => {
                const ie = U.target.value;
                L(ie), ie === "cloudflare" ? N({ ...I, dns: "1.1.1.1, 1.0.0.1" }) : ie === "google" && N({ ...I, dns: "8.8.8.8, 8.8.4.4" });
              },
              children: [
                /* @__PURE__ */ c.jsx(Vo, { value: "cloudflare", children: "Cloudflare DNS (1.1.1.1, 1.0.0.1)" }),
                /* @__PURE__ */ c.jsx(Vo, { value: "google", children: "Google DNS (8.8.8.8, 8.8.4.4)" }),
                /* @__PURE__ */ c.jsx(Vo, { value: "custom", children: "Custom DNS" })
              ]
            }
          ) }),
          $ === "custom" && /* @__PURE__ */ c.jsx(
            Ir,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "1.1.1.1, 8.8.8.8",
              value: I.dns,
              onChange: (U) => N({ ...I, dns: U.target.value })
            }
          ),
          /* @__PURE__ */ c.jsx(lt, { direction: "row", spacing: 2, sx: { pt: 1 }, children: /* @__PURE__ */ c.jsx(
            $t,
            {
              variant: "contained",
              color: "primary",
              onClick: $e,
              disabled: f || !I.name.trim() || P === "import" && !A.trim(),
              startIcon: f ? /* @__PURE__ */ c.jsx(xs, { size: 16 }) : /* @__PURE__ */ c.jsx(D5, {}),
              sx: { fontWeight: 700 },
              children: P === "import" ? "Import Client Profile" : "Generate Peer Profile & QR Code"
            }
          ) })
        ] })
      ] }),
      t === 2 && /* @__PURE__ */ c.jsxs(Le, { sx: { p: Ql }, children: [
        /* @__PURE__ */ c.jsx(Ie, { variant: "h6", sx: { fontWeight: 600, mb: 2 }, children: "WireGuard Server Parameters" }),
        /* @__PURE__ */ c.jsxs(Le, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }, children: [
          /* @__PURE__ */ c.jsx(Le, { children: /* @__PURE__ */ c.jsx(ts, { label: "Interface & Port", children: /* @__PURE__ */ c.jsxs(lt, { spacing: 2, children: [
            /* @__PURE__ */ c.jsx(Ht, { label: "Interface Device", value: (i == null ? void 0 : i.interface) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "Listen Port (UDP)", value: (i == null ? void 0 : i.listen_port) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "Interface IP Address", value: (i == null ? void 0 : i.address) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "Tunnel MTU", value: (i == null ? void 0 : i.mtu) ?? "—" })
          ] }) }) }),
          /* @__PURE__ */ c.jsx(Le, { children: /* @__PURE__ */ c.jsx(ts, { label: "Network & Public Keys", children: /* @__PURE__ */ c.jsxs(lt, { spacing: 2, children: [
            /* @__PURE__ */ c.jsx(Ht, { label: "Public Endpoint", value: (i == null ? void 0 : i.endpoint) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "VPN Subnet", value: (i == null ? void 0 : i.subnet) ?? "—" }),
            /* @__PURE__ */ c.jsxs(Le, { children: [
              /* @__PURE__ */ c.jsx(Kt, { children: "Server Public Key" }),
              /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
                /* @__PURE__ */ c.jsx(
                  Ie,
                  {
                    sx: {
                      fontFamily: yt,
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
                  Ln,
                  {
                    size: "small",
                    onClick: () => {
                      i != null && i.public_key && (navigator.clipboard.writeText(i.public_key), C("Server public key copied to clipboard"));
                    },
                    children: /* @__PURE__ */ c.jsx(Jc, { fontSize: "small" })
                  }
                )
              ] })
            ] })
          ] }) }) }),
          /* @__PURE__ */ c.jsx(Le, { sx: { gridColumn: { xs: "span 1", sm: "span 2" } }, children: /* @__PURE__ */ c.jsxs(ts, { label: "Configuration File on Disk", children: [
            /* @__PURE__ */ c.jsx(Ie, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "All WireGuard settings and keys live exclusively under HostPanel root:" }),
            /* @__PURE__ */ c.jsx(
              Ie,
              {
                sx: {
                  fontFamily: yt,
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
      t === 3 && /* @__PURE__ */ c.jsxs(Le, { sx: { p: Ql }, children: [
        /* @__PURE__ */ c.jsxs(lt, { direction: "row", sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
          /* @__PURE__ */ c.jsx(Ie, { variant: "h6", sx: { fontWeight: 600 }, children: "WireGuard Tunnel & Handshake Logs" }),
          /* @__PURE__ */ c.jsx($t, { size: "small", variant: "outlined", startIcon: /* @__PURE__ */ c.jsx(Hg, {}), onClick: de, children: "Refresh Logs" })
        ] }),
        /* @__PURE__ */ c.jsx(
          sr,
          {
            sx: {
              bgcolor: hr.bg,
              p: 2,
              maxHeight: "26rem",
              overflowY: "auto",
              fontFamily: yt,
              fontSize: 12,
              lineHeight: 1.6,
              color: hr.fg
            },
            children: p.length === 0 ? /* @__PURE__ */ c.jsx(Ie, { sx: { color: hr.dim, fontFamily: yt }, children: "No recent kernel or handshake events recorded." }) : p.map((U, ie) => /* @__PURE__ */ c.jsx(Le, { sx: { whiteSpace: "pre-wrap", wordBreak: "break-word" }, children: U }, ie))
          }
        )
      ] }),
      t === 4 && /* @__PURE__ */ c.jsxs(Le, { sx: { p: Ql }, children: [
        /* @__PURE__ */ c.jsx(Ie, { variant: "h6", sx: { fontWeight: 600, mb: 1 }, children: "Strict 100% Isolation Architecture" }),
        /* @__PURE__ */ c.jsxs(Ie, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
          "HostPanel v3 enforces full isolation under ",
          /* @__PURE__ */ c.jsx("code", { children: "/opt/hostpanel" }),
          ". No configuration or socket is scattered across system ",
          /* @__PURE__ */ c.jsx("code", { children: "/etc/wireguard" }),
          "."
        ] }),
        /* @__PURE__ */ c.jsxs(Le, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }, children: [
          /* @__PURE__ */ c.jsx(Le, { children: /* @__PURE__ */ c.jsx(ts, { label: "Daemon & Sandbox Specs", children: /* @__PURE__ */ c.jsxs(lt, { spacing: 2, children: [
            /* @__PURE__ */ c.jsx(Ht, { label: "Systemd Unit", value: (l == null ? void 0 : l.unit) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "Run As User", value: (l == null ? void 0 : l.run_as) ?? "—" }),
            /* @__PURE__ */ c.jsx(
              Ht,
              {
                label: "Loopback Port",
                value: l != null && l.port ? `${l.port} (${l.host})` : "—"
              }
            ),
            /* @__PURE__ */ c.jsx(Ht, { label: "Root Ops Helper", value: (l == null ? void 0 : l.ops_script) ?? "—" })
          ] }) }) }),
          /* @__PURE__ */ c.jsx(Le, { children: /* @__PURE__ */ c.jsx(ts, { label: "Isolated Path Sandboxes", children: /* @__PURE__ */ c.jsxs(lt, { spacing: 2, children: [
            /* @__PURE__ */ c.jsx(Ht, { label: "Config Directory", value: (i == null ? void 0 : i.isolation_path) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "Runtime / Sockets", value: (i == null ? void 0 : i.run_path) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "Audit & Traffic Logs", value: (i == null ? void 0 : i.logs_path) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "Client Profiles Dir", value: (i == null ? void 0 : i.peers_path) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "Engine Runtime", value: (i == null ? void 0 : i.runtime_path) ?? "—" })
          ] }) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(
      Qi,
      {
        open: !!z,
        onClose: () => F(null),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsxs(Zi, { sx: { fontWeight: 700 }, children: [
            "Client Peer Created: ",
            z == null ? void 0 : z.name
          ] }),
          /* @__PURE__ */ c.jsx(qi, { dividers: !0, children: /* @__PURE__ */ c.jsxs(lt, { spacing: 2.5, sx: { alignItems: "center", py: 1 }, children: [
            /* @__PURE__ */ c.jsxs(Ie, { variant: "body2", sx: { color: "text.secondary", textAlign: "center" }, children: [
              "Scan this QR code with the WireGuard mobile app (iOS / Android) or download the ",
              /* @__PURE__ */ c.jsx("code", { children: ".conf" }),
              " file for desktop."
            ] }),
            (z == null ? void 0 : z.imported) && /* @__PURE__ */ c.jsxs(sg, { severity: "info", sx: { width: "100%", fontSize: "0.8125rem" }, children: [
              /* @__PURE__ */ c.jsx("strong", { children: "Client-Side Keys:" }),
              " This peer was registered using an imported public key. The private key remains exclusively on the client device."
            ] }),
            (z == null ? void 0 : z.config) && /* @__PURE__ */ c.jsx(Qg, { text: z.config, size: 220 }),
            /* @__PURE__ */ c.jsx(
              oo,
              {
                label: `Assigned IP: ${(z == null ? void 0 : z.ip) || "10.8.0.x"}`,
                color: "primary",
                sx: { fontWeight: 700, fontFamily: yt }
              }
            ),
            /* @__PURE__ */ c.jsxs(Le, { sx: { width: "100%" }, children: [
              /* @__PURE__ */ c.jsx(Kt, { sx: { mb: 0.5 }, children: "Client Configuration File" }),
              /* @__PURE__ */ c.jsx(
                Ir,
                {
                  fullWidth: !0,
                  multiline: !0,
                  rows: 6,
                  value: (z == null ? void 0 : z.config) || "",
                  slotProps: {
                    input: {
                      readOnly: !0,
                      sx: { fontFamily: yt, fontSize: "0.75rem" }
                    }
                  }
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ c.jsxs(Xi, { sx: { p: 2 }, children: [
            /* @__PURE__ */ c.jsx(
              $t,
              {
                startIcon: /* @__PURE__ */ c.jsx(Jc, {}),
                onClick: () => {
                  z != null && z.config && (navigator.clipboard.writeText(z.config), C("Configuration copied to clipboard"));
                },
                children: "Copy Text"
              }
            ),
            /* @__PURE__ */ c.jsx(
              $t,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ c.jsx(Zc, {}),
                onClick: () => {
                  z != null && z.name && (z != null && z.config) && Fe(z.name, z.config);
                },
                sx: { fontWeight: 700 },
                children: "Download .conf"
              }
            ),
            /* @__PURE__ */ c.jsx($t, { onClick: () => F(null), children: "Done" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      Qi,
      {
        open: !!W,
        onClose: () => {
          D(null), G("");
        },
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsxs(Zi, { sx: { fontWeight: 700 }, children: [
            "WireGuard Profile: ",
            W == null ? void 0 : W.name,
            " (",
            W == null ? void 0 : W.ip,
            ")"
          ] }),
          /* @__PURE__ */ c.jsx(qi, { dividers: !0, children: /* @__PURE__ */ c.jsxs(lt, { spacing: 2, sx: { alignItems: "center", py: 1 }, children: [
            (W == null ? void 0 : W.imported) && /* @__PURE__ */ c.jsxs(sg, { severity: "info", sx: { width: "100%", fontSize: "0.8125rem" }, children: [
              /* @__PURE__ */ c.jsx("strong", { children: "Client-Side Keys:" }),
              " This peer uses an externally generated keypair. When using the config template below, replace ",
              /* @__PURE__ */ c.jsx("code", { children: "<CLIENT_PRIVATE_KEY>" }),
              " with the client's private key."
            ] }),
            Q ? /* @__PURE__ */ c.jsx(Qg, { text: Q, size: 220 }) : /* @__PURE__ */ c.jsx(xs, { size: 32 }),
            /* @__PURE__ */ c.jsxs(Le, { sx: { width: "100%" }, children: [
              /* @__PURE__ */ c.jsx(Kt, { sx: { mb: 0.5 }, children: "Client Configuration (.conf)" }),
              /* @__PURE__ */ c.jsx(
                Ir,
                {
                  fullWidth: !0,
                  multiline: !0,
                  rows: 6,
                  value: Q,
                  slotProps: {
                    input: {
                      readOnly: !0,
                      sx: { fontFamily: yt, fontSize: "0.75rem" }
                    }
                  }
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ c.jsxs(Xi, { sx: { p: 2 }, children: [
            /* @__PURE__ */ c.jsx(
              $t,
              {
                startIcon: /* @__PURE__ */ c.jsx(Jc, {}),
                onClick: () => {
                  Q && (navigator.clipboard.writeText(Q), C("Configuration copied to clipboard"));
                },
                children: "Copy"
              }
            ),
            /* @__PURE__ */ c.jsx(
              $t,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ c.jsx(Zc, {}),
                onClick: () => {
                  W != null && W.name && Q && Fe(W.name, Q);
                },
                sx: { fontWeight: 700 },
                children: "Download .conf"
              }
            ),
            /* @__PURE__ */ c.jsx(
              $t,
              {
                onClick: () => {
                  D(null), G("");
                },
                children: "Close"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      Qi,
      {
        open: !!X,
        onClose: () => K(null),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsx(Zi, { sx: { fontWeight: 700 }, children: "Delete Client Peer" }),
          /* @__PURE__ */ c.jsx(qi, { children: /* @__PURE__ */ c.jsxs(Ie, { variant: "body2", sx: { color: "text.secondary" }, children: [
            "Are you sure you want to revoke and delete peer",
            " ",
            /* @__PURE__ */ c.jsx("strong", { children: X == null ? void 0 : X.name }),
            " (",
            X == null ? void 0 : X.ip,
            ")? This immediately severs VPN connectivity for this client."
          ] }) }),
          /* @__PURE__ */ c.jsxs(Xi, { sx: { p: 2 }, children: [
            /* @__PURE__ */ c.jsx($t, { onClick: () => K(null), children: "Cancel" }),
            /* @__PURE__ */ c.jsx(
              $t,
              {
                variant: "contained",
                color: "error",
                onClick: () => X && et(X),
                children: "Revoke & Delete"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      Qi,
      {
        open: !!q,
        onClose: () => {
          _(null), re("");
        },
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsx(Zi, { sx: { fontWeight: 700 }, children: "Rename Client Peer" }),
          /* @__PURE__ */ c.jsxs(qi, { children: [
            /* @__PURE__ */ c.jsxs(Ie, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
              "Update display name for peer ",
              /* @__PURE__ */ c.jsx("code", { children: q == null ? void 0 : q.id }),
              " (",
              q == null ? void 0 : q.ip,
              "):"
            ] }),
            /* @__PURE__ */ c.jsx(
              Ir,
              {
                fullWidth: !0,
                autoFocus: !0,
                size: "small",
                label: "New Peer Name",
                value: ne,
                onChange: (U) => re(U.target.value),
                placeholder: "e.g. alice-laptop"
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs(Xi, { sx: { p: 2 }, children: [
            /* @__PURE__ */ c.jsx($t, { onClick: () => _(null), children: "Cancel" }),
            /* @__PURE__ */ c.jsx(
              $t,
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
    /* @__PURE__ */ c.jsxs(
      Qi,
      {
        open: g,
        onClose: () => !R && m(!1),
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsx(Zi, { sx: { fontWeight: 700 }, children: b }),
          /* @__PURE__ */ c.jsx(qi, { dividers: !0, children: /* @__PURE__ */ c.jsx(U5, { lines: E, running: R }) }),
          /* @__PURE__ */ c.jsx(Xi, { sx: { p: 2 }, children: /* @__PURE__ */ c.jsx($t, { disabled: R, onClick: () => m(!1), children: "Close" }) })
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(
      kM,
      {
        open: !!S,
        autoHideDuration: 4e3,
        onClose: () => C(null),
        message: S
      }
    )
  ] });
}
let qa = null;
function Y5(e, t) {
  qa = c0(e), qa.render(
    /* @__PURE__ */ c.jsx(h.StrictMode, { children: /* @__PURE__ */ c.jsx(K5, { ctx: t }) })
  );
}
function Q5() {
  const e = qa;
  qa = null, e && queueMicrotask(() => e.unmount());
}
const q5 = { mount: Y5, unmount: Q5 };
export {
  q5 as default,
  Y5 as mount,
  Q5 as unmount
};
//# sourceMappingURL=main.js.map
