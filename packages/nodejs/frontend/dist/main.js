var rx = Object.defineProperty;
var ox = (e, t, n) => t in e ? rx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Bi = (e, t, n) => ox(e, typeof t != "symbol" ? t + "" : t, n);
function ix(e, t) {
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
function sx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qg = { exports: {} }, Ga = {}, Zg = { exports: {} }, Me = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qs = Symbol.for("react.element"), lx = Symbol.for("react.portal"), ax = Symbol.for("react.fragment"), cx = Symbol.for("react.strict_mode"), ux = Symbol.for("react.profiler"), dx = Symbol.for("react.provider"), fx = Symbol.for("react.context"), px = Symbol.for("react.forward_ref"), mx = Symbol.for("react.suspense"), hx = Symbol.for("react.memo"), gx = Symbol.for("react.lazy"), em = Symbol.iterator;
function yx(e) {
  return e === null || typeof e != "object" ? null : (e = em && e[em] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Jg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ey = Object.assign, ty = {};
function $i(e, t, n) {
  this.props = e, this.context = t, this.refs = ty, this.updater = n || Jg;
}
$i.prototype.isReactComponent = {};
$i.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
$i.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ny() {
}
ny.prototype = $i.prototype;
function hf(e, t, n) {
  this.props = e, this.context = t, this.refs = ty, this.updater = n || Jg;
}
var gf = hf.prototype = new ny();
gf.constructor = hf;
ey(gf, $i.prototype);
gf.isPureReactComponent = !0;
var tm = Array.isArray, ry = Object.prototype.hasOwnProperty, yf = { current: null }, oy = { key: !0, ref: !0, __self: !0, __source: !0 };
function iy(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) ry.call(t, r) && !oy.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: qs, type: e, key: i, ref: s, props: o, _owner: yf.current };
}
function vx(e, t) {
  return { $$typeof: qs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function vf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qs;
}
function xx(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var nm = /\/+/g;
function su(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? xx("" + e.key) : t.toString(36);
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
        case lx:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + su(s, 0) : r, tm(o) ? (n = "", e != null && (n = e.replace(nm, "$&/") + "/"), Yl(o, t, n, "", function(c) {
    return c;
  })) : o != null && (vf(o) && (o = vx(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(nm, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", tm(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + su(i, l);
    s += Yl(i, t, n, a, o);
  }
  else if (a = yx(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + su(i, l++), s += Yl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function gl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Yl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Sx(e) {
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
var qt = { current: null }, Gl = { transition: null }, bx = { ReactCurrentDispatcher: qt, ReactCurrentBatchConfig: Gl, ReactCurrentOwner: yf };
function sy() {
  throw Error("act(...) is not supported in production builds of React.");
}
Me.Children = { map: gl, forEach: function(e, t, n) {
  gl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return gl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return gl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!vf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Me.Component = $i;
Me.Fragment = ax;
Me.Profiler = ux;
Me.PureComponent = hf;
Me.StrictMode = cx;
Me.Suspense = mx;
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bx;
Me.act = sy;
Me.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ey({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = yf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) ry.call(t, a) && !oy.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
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
Me.createContext = function(e) {
  return e = { $$typeof: fx, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: dx, _context: e }, e.Consumer = e;
};
Me.createElement = iy;
Me.createFactory = function(e) {
  var t = iy.bind(null, e);
  return t.type = e, t;
};
Me.createRef = function() {
  return { current: null };
};
Me.forwardRef = function(e) {
  return { $$typeof: px, render: e };
};
Me.isValidElement = vf;
Me.lazy = function(e) {
  return { $$typeof: gx, _payload: { _status: -1, _result: e }, _init: Sx };
};
Me.memo = function(e, t) {
  return { $$typeof: hx, type: e, compare: t === void 0 ? null : t };
};
Me.startTransition = function(e) {
  var t = Gl.transition;
  Gl.transition = {};
  try {
    e();
  } finally {
    Gl.transition = t;
  }
};
Me.unstable_act = sy;
Me.useCallback = function(e, t) {
  return qt.current.useCallback(e, t);
};
Me.useContext = function(e) {
  return qt.current.useContext(e);
};
Me.useDebugValue = function() {
};
Me.useDeferredValue = function(e) {
  return qt.current.useDeferredValue(e);
};
Me.useEffect = function(e, t) {
  return qt.current.useEffect(e, t);
};
Me.useId = function() {
  return qt.current.useId();
};
Me.useImperativeHandle = function(e, t, n) {
  return qt.current.useImperativeHandle(e, t, n);
};
Me.useInsertionEffect = function(e, t) {
  return qt.current.useInsertionEffect(e, t);
};
Me.useLayoutEffect = function(e, t) {
  return qt.current.useLayoutEffect(e, t);
};
Me.useMemo = function(e, t) {
  return qt.current.useMemo(e, t);
};
Me.useReducer = function(e, t, n) {
  return qt.current.useReducer(e, t, n);
};
Me.useRef = function(e) {
  return qt.current.useRef(e);
};
Me.useState = function(e) {
  return qt.current.useState(e);
};
Me.useSyncExternalStore = function(e, t, n) {
  return qt.current.useSyncExternalStore(e, t, n);
};
Me.useTransition = function() {
  return qt.current.useTransition();
};
Me.version = "18.3.1";
Zg.exports = Me;
var m = Zg.exports;
const ly = /* @__PURE__ */ sx(m), da = /* @__PURE__ */ ix({
  __proto__: null,
  default: ly
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
var wx = m, Cx = Symbol.for("react.element"), kx = Symbol.for("react.fragment"), Tx = Object.prototype.hasOwnProperty, Ex = wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rx = { key: !0, ref: !0, __self: !0, __source: !0 };
function ay(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Tx.call(t, r) && !Rx.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Cx, type: e, key: i, ref: s, props: o, _owner: Ex.current };
}
Ga.Fragment = kx;
Ga.jsx = ay;
Ga.jsxs = ay;
qg.exports = Ga;
var f = qg.exports, cy = { exports: {} }, vn = {}, uy = { exports: {} }, dy = {};
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
    var D = M.length;
    M.push(z);
    e: for (; 0 < D; ) {
      var W = D - 1 >>> 1, _ = M[W];
      if (0 < o(_, z)) M[W] = z, M[D] = _, D = W;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var z = M[0], D = M.pop();
    if (D !== z) {
      M[0] = D;
      e: for (var W = 0, _ = M.length, Q = _ >>> 1; W < Q; ) {
        var V = 2 * (W + 1) - 1, q = M[V], G = V + 1, X = M[G];
        if (0 > o(q, D)) G < _ && 0 > o(X, q) ? (M[W] = X, M[G] = D, W = G) : (M[W] = q, M[V] = D, W = V);
        else if (G < _ && 0 > o(X, D)) M[W] = X, M[G] = D, W = G;
        else break e;
      }
    }
    return z;
  }
  function o(M, z) {
    var D = M.sortIndex - z.sortIndex;
    return D !== 0 ? D : M.id - z.id;
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
  var a = [], c = [], d = 1, p = null, v = 3, u = !1, x = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
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
    x = !1, b && (b = !1, y(T), T = -1), u = !0;
    var D = v;
    try {
      for (S(z), p = n(a); p !== null && (!(p.expirationTime > z) || M && !I()); ) {
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
        V !== null && L(w, V.startTime - z), Q = !1;
      }
      return Q;
    } finally {
      p = null, v = D, u = !1;
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
    x || u || (x = !0, O(E));
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
    var D = v;
    v = z;
    try {
      return M();
    } finally {
      v = D;
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
    var D = v;
    v = M;
    try {
      return z();
    } finally {
      v = D;
    }
  }, e.unstable_scheduleCallback = function(M, z, D) {
    var W = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? W + D : W) : D = W, M) {
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
    return _ = D + _, M = { id: d++, callback: z, priorityLevel: M, startTime: D, expirationTime: _, sortIndex: -1 }, D > W ? (M.sortIndex = D, t(c, M), n(a) === null && M === n(c) && (b ? (y(T), T = -1) : b = !0, L(w, D - W))) : (M.sortIndex = _, t(a, M), x || u || (x = !0, O(E))), M;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(M) {
    var z = v;
    return function() {
      var D = v;
      v = z;
      try {
        return M.apply(this, arguments);
      } finally {
        v = D;
      }
    };
  };
})(dy);
uy.exports = dy;
var Px = uy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ix = m, hn = Px;
function K(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fy = /* @__PURE__ */ new Set(), ks = {};
function Oo(e, t) {
  gi(e, t), gi(e + "Capture", t);
}
function gi(e, t) {
  for (ks[e] = t, e = 0; e < t.length; e++) fy.add(t[e]);
}
var Sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ju = Object.prototype.hasOwnProperty, Mx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, rm = {}, om = {};
function $x(e) {
  return Ju.call(om, e) ? !0 : Ju.call(rm, e) ? !1 : Mx.test(e) ? om[e] = !0 : (rm[e] = !0, !1);
}
function jx(e, t, n, r) {
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
function Ax(e, t, n, r) {
  if (t === null || typeof t > "u" || jx(e, t, n, r)) return !0;
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
function Zt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Dt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Dt[e] = new Zt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Dt[t] = new Zt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Dt[e] = new Zt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Dt[e] = new Zt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Dt[e] = new Zt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Dt[e] = new Zt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Dt[e] = new Zt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Dt[e] = new Zt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Dt[e] = new Zt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xf = /[\-:]([a-z])/g;
function Sf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    xf,
    Sf
  );
  Dt[t] = new Zt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(xf, Sf);
  Dt[t] = new Zt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(xf, Sf);
  Dt[t] = new Zt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Dt[e] = new Zt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Dt.xlinkHref = new Zt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Dt[e] = new Zt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bf(e, t, n, r) {
  var o = Dt.hasOwnProperty(t) ? Dt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ax(t, n, o, r) && (n = null), r || o === null ? $x(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rr = Ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, yl = Symbol.for("react.element"), Yo = Symbol.for("react.portal"), Go = Symbol.for("react.fragment"), wf = Symbol.for("react.strict_mode"), ed = Symbol.for("react.profiler"), py = Symbol.for("react.provider"), my = Symbol.for("react.context"), Cf = Symbol.for("react.forward_ref"), td = Symbol.for("react.suspense"), nd = Symbol.for("react.suspense_list"), kf = Symbol.for("react.memo"), Or = Symbol.for("react.lazy"), hy = Symbol.for("react.offscreen"), im = Symbol.iterator;
function Di(e) {
  return e === null || typeof e != "object" ? null : (e = im && e[im] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ht = Object.assign, lu;
function ns(e) {
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
  return (e = e ? e.displayName || e.name : "") ? ns(e) : "";
}
function Ox(e) {
  switch (e.tag) {
    case 5:
      return ns(e.type);
    case 16:
      return ns("Lazy");
    case 13:
      return ns("Suspense");
    case 19:
      return ns("SuspenseList");
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
function rd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Go:
      return "Fragment";
    case Yo:
      return "Portal";
    case ed:
      return "Profiler";
    case wf:
      return "StrictMode";
    case td:
      return "Suspense";
    case nd:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case my:
      return (e.displayName || "Context") + ".Consumer";
    case py:
      return (e._context.displayName || "Context") + ".Provider";
    case Cf:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case kf:
      return t = e.displayName || null, t !== null ? t : rd(e.type) || "Memo";
    case Or:
      t = e._payload, e = e._init;
      try {
        return rd(e(t));
      } catch {
      }
  }
  return null;
}
function Nx(e) {
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
      return rd(t);
    case 8:
      return t === wf ? "StrictMode" : "Mode";
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
function Qr(e) {
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
function gy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Lx(e) {
  var t = gy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function vl(e) {
  e._valueTracker || (e._valueTracker = Lx(e));
}
function yy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = gy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function fa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function od(e, t) {
  var n = t.checked;
  return ht({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function sm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Qr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vy(e, t) {
  t = t.checked, t != null && bf(e, "checked", t, !1);
}
function id(e, t) {
  vy(e, t);
  var n = Qr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? sd(e, t.type, n) : t.hasOwnProperty("defaultValue") && sd(e, t.type, Qr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function lm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function sd(e, t, n) {
  (t !== "number" || fa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var rs = Array.isArray;
function li(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Qr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ld(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(K(91));
  return ht({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function am(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(K(92));
      if (rs(n)) {
        if (1 < n.length) throw Error(K(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Qr(n) };
}
function xy(e, t) {
  var n = Qr(t.value), r = Qr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function cm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ad(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Sy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xl, by = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (xl = xl || document.createElement("div"), xl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, zx = ["Webkit", "ms", "Moz", "O"];
Object.keys(as).forEach(function(e) {
  zx.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), as[t] = as[e];
  });
});
function wy(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || as.hasOwnProperty(e) && as[e] ? ("" + t).trim() : t + "px";
}
function Cy(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = wy(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Bx = ht({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function cd(e, t) {
  if (t) {
    if (Bx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(K(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(K(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(K(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(K(62));
  }
}
function ud(e, t) {
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
var dd = null;
function Tf(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fd = null, ai = null, ci = null;
function um(e) {
  if (e = el(e)) {
    if (typeof fd != "function") throw Error(K(280));
    var t = e.stateNode;
    t && (t = Ja(t), fd(e.stateNode, e.type, t));
  }
}
function ky(e) {
  ai ? ci ? ci.push(e) : ci = [e] : ai = e;
}
function Ty() {
  if (ai) {
    var e = ai, t = ci;
    if (ci = ai = null, um(e), t) for (e = 0; e < t.length; e++) um(t[e]);
  }
}
function Ey(e, t) {
  return e(t);
}
function Ry() {
}
var uu = !1;
function Py(e, t, n) {
  if (uu) return e(t, n);
  uu = !0;
  try {
    return Ey(e, t, n);
  } finally {
    uu = !1, (ai !== null || ci !== null) && (Ry(), Ty());
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
var pd = !1;
if (Sr) try {
  var Fi = {};
  Object.defineProperty(Fi, "passive", { get: function() {
    pd = !0;
  } }), window.addEventListener("test", Fi, Fi), window.removeEventListener("test", Fi, Fi);
} catch {
  pd = !1;
}
function Dx(e, t, n, r, o, i, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var cs = !1, pa = null, ma = !1, md = null, Fx = { onError: function(e) {
  cs = !0, pa = e;
} };
function _x(e, t, n, r, o, i, s, l, a) {
  cs = !1, pa = null, Dx.apply(Fx, arguments);
}
function Wx(e, t, n, r, o, i, s, l, a) {
  if (_x.apply(this, arguments), cs) {
    if (cs) {
      var c = pa;
      cs = !1, pa = null;
    } else throw Error(K(198));
    ma || (ma = !0, md = c);
  }
}
function No(e) {
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
function Iy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function dm(e) {
  if (No(e) !== e) throw Error(K(188));
}
function Ux(e) {
  var t = e.alternate;
  if (!t) {
    if (t = No(e), t === null) throw Error(K(188));
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
        if (i === n) return dm(o), e;
        if (i === r) return dm(o), t;
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
function My(e) {
  return e = Ux(e), e !== null ? $y(e) : null;
}
function $y(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $y(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jy = hn.unstable_scheduleCallback, fm = hn.unstable_cancelCallback, Hx = hn.unstable_shouldYield, Vx = hn.unstable_requestPaint, xt = hn.unstable_now, Kx = hn.unstable_getCurrentPriorityLevel, Ef = hn.unstable_ImmediatePriority, Ay = hn.unstable_UserBlockingPriority, ha = hn.unstable_NormalPriority, Yx = hn.unstable_LowPriority, Oy = hn.unstable_IdlePriority, Xa = null, rr = null;
function Gx(e) {
  if (rr && typeof rr.onCommitFiberRoot == "function") try {
    rr.onCommitFiberRoot(Xa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Wn = Math.clz32 ? Math.clz32 : qx, Xx = Math.log, Qx = Math.LN2;
function qx(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Xx(e) / Qx | 0) | 0;
}
var Sl = 64, bl = 4194304;
function os(e) {
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
    l !== 0 ? r = os(l) : (i &= s, i !== 0 && (r = os(i)));
  } else s = n & ~o, s !== 0 ? r = os(s) : i !== 0 && (r = os(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Wn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Zx(e, t) {
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
function Jx(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Wn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = Zx(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function hd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ny() {
  var e = Sl;
  return Sl <<= 1, !(Sl & 4194240) && (Sl = 64), e;
}
function du(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zs(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wn(t), e[t] = n;
}
function eS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Wn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Rf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Wn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Qe = 0;
function Ly(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var zy, Pf, By, Dy, Fy, gd = !1, wl = [], _r = null, Wr = null, Ur = null, Rs = /* @__PURE__ */ new Map(), Ps = /* @__PURE__ */ new Map(), Lr = [], tS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function pm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _r = null;
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
      Rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ps.delete(t.pointerId);
  }
}
function _i(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = el(t), t !== null && Pf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function nS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return _r = _i(_r, e, t, n, r, o), !0;
    case "dragenter":
      return Wr = _i(Wr, e, t, n, r, o), !0;
    case "mouseover":
      return Ur = _i(Ur, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Rs.set(i, _i(Rs.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ps.set(i, _i(Ps.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function _y(e) {
  var t = yo(e.target);
  if (t !== null) {
    var n = No(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Iy(n), t !== null) {
          e.blockedOn = t, Fy(e.priority, function() {
            By(n);
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
    var n = yd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      dd = r, n.target.dispatchEvent(r), dd = null;
    } else return t = el(n), t !== null && Pf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function mm(e, t, n) {
  Xl(e) && n.delete(t);
}
function rS() {
  gd = !1, _r !== null && Xl(_r) && (_r = null), Wr !== null && Xl(Wr) && (Wr = null), Ur !== null && Xl(Ur) && (Ur = null), Rs.forEach(mm), Ps.forEach(mm);
}
function Wi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, gd || (gd = !0, hn.unstable_scheduleCallback(hn.unstable_NormalPriority, rS)));
}
function Is(e) {
  function t(o) {
    return Wi(o, e);
  }
  if (0 < wl.length) {
    Wi(wl[0], e);
    for (var n = 1; n < wl.length; n++) {
      var r = wl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (_r !== null && Wi(_r, e), Wr !== null && Wi(Wr, e), Ur !== null && Wi(Ur, e), Rs.forEach(t), Ps.forEach(t), n = 0; n < Lr.length; n++) r = Lr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Lr.length && (n = Lr[0], n.blockedOn === null); ) _y(n), n.blockedOn === null && Lr.shift();
}
var ui = Rr.ReactCurrentBatchConfig, ya = !0;
function oS(e, t, n, r) {
  var o = Qe, i = ui.transition;
  ui.transition = null;
  try {
    Qe = 1, If(e, t, n, r);
  } finally {
    Qe = o, ui.transition = i;
  }
}
function iS(e, t, n, r) {
  var o = Qe, i = ui.transition;
  ui.transition = null;
  try {
    Qe = 4, If(e, t, n, r);
  } finally {
    Qe = o, ui.transition = i;
  }
}
function If(e, t, n, r) {
  if (ya) {
    var o = yd(e, t, n, r);
    if (o === null) bu(e, t, r, va, n), pm(e, r);
    else if (nS(o, e, t, n, r)) r.stopPropagation();
    else if (pm(e, r), t & 4 && -1 < tS.indexOf(e)) {
      for (; o !== null; ) {
        var i = el(o);
        if (i !== null && zy(i), i = yd(e, t, n, r), i === null && bu(e, t, r, va, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else bu(e, t, r, null, n);
  }
}
var va = null;
function yd(e, t, n, r) {
  if (va = null, e = Tf(r), e = yo(e), e !== null) if (t = No(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Iy(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return va = e, null;
}
function Wy(e) {
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
      switch (Kx()) {
        case Ef:
          return 1;
        case Ay:
          return 4;
        case ha:
        case Yx:
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
var Br = null, Mf = null, Ql = null;
function Uy() {
  if (Ql) return Ql;
  var e, t = Mf, n = t.length, r, o = "value" in Br ? Br.value : Br.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Ql = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ql(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Cl() {
  return !0;
}
function hm() {
  return !1;
}
function xn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Cl : hm, this.isPropagationStopped = hm, this;
  }
  return ht(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Cl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Cl);
  }, persist: function() {
  }, isPersistent: Cl }), t;
}
var ji = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, $f = xn(ji), Js = ht({}, ji, { view: 0, detail: 0 }), sS = xn(Js), fu, pu, Ui, Qa = ht({}, Js, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: jf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ui && (Ui && e.type === "mousemove" ? (fu = e.screenX - Ui.screenX, pu = e.screenY - Ui.screenY) : pu = fu = 0, Ui = e), fu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : pu;
} }), gm = xn(Qa), lS = ht({}, Qa, { dataTransfer: 0 }), aS = xn(lS), cS = ht({}, Js, { relatedTarget: 0 }), mu = xn(cS), uS = ht({}, ji, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), dS = xn(uS), fS = ht({}, ji, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), pS = xn(fS), mS = ht({}, ji, { data: 0 }), ym = xn(mS), hS = {
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
}, gS = {
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
}, yS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yS[e]) ? !!t[e] : !1;
}
function jf() {
  return vS;
}
var xS = ht({}, Js, { key: function(e) {
  if (e.key) {
    var t = hS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ql(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: jf, charCode: function(e) {
  return e.type === "keypress" ? ql(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), SS = xn(xS), bS = ht({}, Qa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), vm = xn(bS), wS = ht({}, Js, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: jf }), CS = xn(wS), kS = ht({}, ji, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), TS = xn(kS), ES = ht({}, Qa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), RS = xn(ES), PS = [9, 13, 27, 32], Af = Sr && "CompositionEvent" in window, us = null;
Sr && "documentMode" in document && (us = document.documentMode);
var IS = Sr && "TextEvent" in window && !us, Hy = Sr && (!Af || us && 8 < us && 11 >= us), xm = " ", Sm = !1;
function Vy(e, t) {
  switch (e) {
    case "keyup":
      return PS.indexOf(t.keyCode) !== -1;
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
function Ky(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Xo = !1;
function MS(e, t) {
  switch (e) {
    case "compositionend":
      return Ky(t);
    case "keypress":
      return t.which !== 32 ? null : (Sm = !0, xm);
    case "textInput":
      return e = t.data, e === xm && Sm ? null : e;
    default:
      return null;
  }
}
function $S(e, t) {
  if (Xo) return e === "compositionend" || !Af && Vy(e, t) ? (e = Uy(), Ql = Mf = Br = null, Xo = !1, e) : null;
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
      return Hy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function bm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jS[e.type] : t === "textarea";
}
function Yy(e, t, n, r) {
  ky(r), t = xa(t, "onChange"), 0 < t.length && (n = new $f("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ds = null, Ms = null;
function AS(e) {
  ov(e, 0);
}
function qa(e) {
  var t = Zo(e);
  if (yy(t)) return e;
}
function OS(e, t) {
  if (e === "change") return t;
}
var Gy = !1;
if (Sr) {
  var hu;
  if (Sr) {
    var gu = "oninput" in document;
    if (!gu) {
      var wm = document.createElement("div");
      wm.setAttribute("oninput", "return;"), gu = typeof wm.oninput == "function";
    }
    hu = gu;
  } else hu = !1;
  Gy = hu && (!document.documentMode || 9 < document.documentMode);
}
function Cm() {
  ds && (ds.detachEvent("onpropertychange", Xy), Ms = ds = null);
}
function Xy(e) {
  if (e.propertyName === "value" && qa(Ms)) {
    var t = [];
    Yy(t, Ms, e, Tf(e)), Py(AS, t);
  }
}
function NS(e, t, n) {
  e === "focusin" ? (Cm(), ds = t, Ms = n, ds.attachEvent("onpropertychange", Xy)) : e === "focusout" && Cm();
}
function LS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return qa(Ms);
}
function zS(e, t) {
  if (e === "click") return qa(t);
}
function BS(e, t) {
  if (e === "input" || e === "change") return qa(t);
}
function DS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Hn = typeof Object.is == "function" ? Object.is : DS;
function $s(e, t) {
  if (Hn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ju.call(t, o) || !Hn(e[o], t[o])) return !1;
  }
  return !0;
}
function km(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tm(e, t) {
  var n = km(e);
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
    n = km(n);
  }
}
function Qy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qy() {
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
function Of(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function FS(e) {
  var t = qy(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Qy(n.ownerDocument.documentElement, n)) {
    if (r !== null && Of(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Tm(n, i);
        var s = Tm(
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
var _S = Sr && "documentMode" in document && 11 >= document.documentMode, Qo = null, vd = null, fs = null, xd = !1;
function Em(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xd || Qo == null || Qo !== fa(r) || (r = Qo, "selectionStart" in r && Of(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fs && $s(fs, r) || (fs = r, r = xa(vd, "onSelect"), 0 < r.length && (t = new $f("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qo)));
}
function kl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var qo = { animationend: kl("Animation", "AnimationEnd"), animationiteration: kl("Animation", "AnimationIteration"), animationstart: kl("Animation", "AnimationStart"), transitionend: kl("Transition", "TransitionEnd") }, yu = {}, Zy = {};
Sr && (Zy = document.createElement("div").style, "AnimationEvent" in window || (delete qo.animationend.animation, delete qo.animationiteration.animation, delete qo.animationstart.animation), "TransitionEvent" in window || delete qo.transitionend.transition);
function Za(e) {
  if (yu[e]) return yu[e];
  if (!qo[e]) return e;
  var t = qo[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zy) return yu[e] = t[n];
  return e;
}
var Jy = Za("animationend"), ev = Za("animationiteration"), tv = Za("animationstart"), nv = Za("transitionend"), rv = /* @__PURE__ */ new Map(), Rm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function eo(e, t) {
  rv.set(e, t), Oo(t, [e]);
}
for (var vu = 0; vu < Rm.length; vu++) {
  var xu = Rm[vu], WS = xu.toLowerCase(), US = xu[0].toUpperCase() + xu.slice(1);
  eo(WS, "on" + US);
}
eo(Jy, "onAnimationEnd");
eo(ev, "onAnimationIteration");
eo(tv, "onAnimationStart");
eo("dblclick", "onDoubleClick");
eo("focusin", "onFocus");
eo("focusout", "onBlur");
eo(nv, "onTransitionEnd");
gi("onMouseEnter", ["mouseout", "mouseover"]);
gi("onMouseLeave", ["mouseout", "mouseover"]);
gi("onPointerEnter", ["pointerout", "pointerover"]);
gi("onPointerLeave", ["pointerout", "pointerover"]);
Oo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Oo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Oo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Oo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Oo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Oo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), HS = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
function Pm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Wx(r, t, void 0, e), e.currentTarget = null;
}
function ov(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, c = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Pm(o, l, c), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, c = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Pm(o, l, c), i = a;
      }
    }
  }
  if (ma) throw e = md, ma = !1, md = null, e;
}
function rt(e, t) {
  var n = t[kd];
  n === void 0 && (n = t[kd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (iv(t, e, 2, !1), n.add(r));
}
function Su(e, t, n) {
  var r = 0;
  t && (r |= 4), iv(n, e, r, t);
}
var Tl = "_reactListening" + Math.random().toString(36).slice(2);
function js(e) {
  if (!e[Tl]) {
    e[Tl] = !0, fy.forEach(function(n) {
      n !== "selectionchange" && (HS.has(n) || Su(n, !1, e), Su(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tl] || (t[Tl] = !0, Su("selectionchange", !1, t));
  }
}
function iv(e, t, n, r) {
  switch (Wy(t)) {
    case 1:
      var o = oS;
      break;
    case 4:
      o = iS;
      break;
    default:
      o = If;
  }
  n = o.bind(null, t, n, e), o = void 0, !pd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
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
        if (s = yo(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Py(function() {
    var c = i, d = Tf(n), p = [];
    e: {
      var v = rv.get(e);
      if (v !== void 0) {
        var u = $f, x = e;
        switch (e) {
          case "keypress":
            if (ql(n) === 0) break e;
          case "keydown":
          case "keyup":
            u = SS;
            break;
          case "focusin":
            x = "focus", u = mu;
            break;
          case "focusout":
            x = "blur", u = mu;
            break;
          case "beforeblur":
          case "afterblur":
            u = mu;
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
            u = gm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            u = aS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            u = CS;
            break;
          case Jy:
          case ev:
          case tv:
            u = dS;
            break;
          case nv:
            u = TS;
            break;
          case "scroll":
            u = sS;
            break;
          case "wheel":
            u = RS;
            break;
          case "copy":
          case "cut":
          case "paste":
            u = pS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            u = vm;
        }
        var b = (t & 4) !== 0, C = !b && e === "scroll", y = b ? v !== null ? v + "Capture" : null : v;
        b = [];
        for (var h = c, S; h !== null; ) {
          S = h;
          var w = S.stateNode;
          if (S.tag === 5 && w !== null && (S = w, y !== null && (w = Es(h, y), w != null && b.push(As(h, w, S)))), C) break;
          h = h.return;
        }
        0 < b.length && (v = new u(v, x, null, n, d), p.push({ event: v, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", u = e === "mouseout" || e === "pointerout", v && n !== dd && (x = n.relatedTarget || n.fromElement) && (yo(x) || x[br])) break e;
        if ((u || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, u ? (x = n.relatedTarget || n.toElement, u = c, x = x ? yo(x) : null, x !== null && (C = No(x), x !== C || x.tag !== 5 && x.tag !== 6) && (x = null)) : (u = null, x = c), u !== x)) {
          if (b = gm, w = "onMouseLeave", y = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (b = vm, w = "onPointerLeave", y = "onPointerEnter", h = "pointer"), C = u == null ? v : Zo(u), S = x == null ? v : Zo(x), v = new b(w, h + "leave", u, n, d), v.target = C, v.relatedTarget = S, w = null, yo(d) === c && (b = new b(y, h + "enter", x, n, d), b.target = S, b.relatedTarget = C, w = b), C = w, u && x) t: {
            for (b = u, y = x, h = 0, S = b; S; S = Bo(S)) h++;
            for (S = 0, w = y; w; w = Bo(w)) S++;
            for (; 0 < h - S; ) b = Bo(b), h--;
            for (; 0 < S - h; ) y = Bo(y), S--;
            for (; h--; ) {
              if (b === y || y !== null && b === y.alternate) break t;
              b = Bo(b), y = Bo(y);
            }
            b = null;
          }
          else b = null;
          u !== null && Im(p, v, u, b, !1), x !== null && C !== null && Im(p, C, x, b, !0);
        }
      }
      e: {
        if (v = c ? Zo(c) : window, u = v.nodeName && v.nodeName.toLowerCase(), u === "select" || u === "input" && v.type === "file") var E = OS;
        else if (bm(v)) if (Gy) E = BS;
        else {
          E = LS;
          var k = NS;
        }
        else (u = v.nodeName) && u.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = zS);
        if (E && (E = E(e, c))) {
          Yy(p, E, n, d);
          break e;
        }
        k && k(e, v, c), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && sd(v, "number", v.value);
      }
      switch (k = c ? Zo(c) : window, e) {
        case "focusin":
          (bm(k) || k.contentEditable === "true") && (Qo = k, vd = c, fs = null);
          break;
        case "focusout":
          fs = vd = Qo = null;
          break;
        case "mousedown":
          xd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xd = !1, Em(p, n, d);
          break;
        case "selectionchange":
          if (_S) break;
        case "keydown":
        case "keyup":
          Em(p, n, d);
      }
      var R;
      if (Af) e: {
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
      else Xo ? Vy(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Hy && n.locale !== "ko" && (Xo || T !== "onCompositionStart" ? T === "onCompositionEnd" && Xo && (R = Uy()) : (Br = d, Mf = "value" in Br ? Br.value : Br.textContent, Xo = !0)), k = xa(c, T), 0 < k.length && (T = new ym(T, e, null, n, d), p.push({ event: T, listeners: k }), R ? T.data = R : (R = Ky(n), R !== null && (T.data = R)))), (R = IS ? MS(e, n) : $S(e, n)) && (c = xa(c, "onBeforeInput"), 0 < c.length && (d = new ym("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: c }), d.data = R));
    }
    ov(p, t);
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
function Bo(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Im(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && c !== null && (l = c, o ? (a = Es(n, i), a != null && s.unshift(As(n, a, l))) : o || (a = Es(n, i), a != null && s.push(As(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var VS = /\r\n?/g, KS = /\u0000|\uFFFD/g;
function Mm(e) {
  return (typeof e == "string" ? e : "" + e).replace(VS, `
`).replace(KS, "");
}
function El(e, t, n) {
  if (t = Mm(t), Mm(e) !== t && n) throw Error(K(425));
}
function Sa() {
}
var Sd = null, bd = null;
function wd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Cd = typeof setTimeout == "function" ? setTimeout : void 0, YS = typeof clearTimeout == "function" ? clearTimeout : void 0, $m = typeof Promise == "function" ? Promise : void 0, GS = typeof queueMicrotask == "function" ? queueMicrotask : typeof $m < "u" ? function(e) {
  return $m.resolve(null).then(e).catch(XS);
} : Cd;
function XS(e) {
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
function Hr(e) {
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
function jm(e) {
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
var Ai = Math.random().toString(36).slice(2), er = "__reactFiber$" + Ai, Os = "__reactProps$" + Ai, br = "__reactContainer$" + Ai, kd = "__reactEvents$" + Ai, QS = "__reactListeners$" + Ai, qS = "__reactHandles$" + Ai;
function yo(e) {
  var t = e[er];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[br] || n[er]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = jm(e); e !== null; ) {
        if (n = e[er]) return n;
        e = jm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function el(e) {
  return e = e[er] || e[br], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Zo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(K(33));
}
function Ja(e) {
  return e[Os] || null;
}
var Td = [], Jo = -1;
function to(e) {
  return { current: e };
}
function it(e) {
  0 > Jo || (e.current = Td[Jo], Td[Jo] = null, Jo--);
}
function et(e, t) {
  Jo++, Td[Jo] = e.current, e.current = t;
}
var qr = {}, Ht = to(qr), tn = to(!1), To = qr;
function yi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function nn(e) {
  return e = e.childContextTypes, e != null;
}
function ba() {
  it(tn), it(Ht);
}
function Am(e, t, n) {
  if (Ht.current !== qr) throw Error(K(168));
  et(Ht, t), et(tn, n);
}
function sv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(K(108, Nx(e) || "Unknown", o));
  return ht({}, n, r);
}
function wa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qr, To = Ht.current, et(Ht, e), et(tn, tn.current), !0;
}
function Om(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(K(169));
  n ? (e = sv(e, t, To), r.__reactInternalMemoizedMergedChildContext = e, it(tn), it(Ht), et(Ht, e)) : it(tn), et(tn, n);
}
var hr = null, ec = !1, Cu = !1;
function lv(e) {
  hr === null ? hr = [e] : hr.push(e);
}
function ZS(e) {
  ec = !0, lv(e);
}
function no() {
  if (!Cu && hr !== null) {
    Cu = !0;
    var e = 0, t = Qe;
    try {
      var n = hr;
      for (Qe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      hr = null, ec = !1;
    } catch (o) {
      throw hr !== null && (hr = hr.slice(e + 1)), jy(Ef, no), o;
    } finally {
      Qe = t, Cu = !1;
    }
  }
  return null;
}
var ei = [], ti = 0, Ca = null, ka = 0, Cn = [], kn = 0, Eo = null, yr = 1, vr = "";
function mo(e, t) {
  ei[ti++] = ka, ei[ti++] = Ca, Ca = e, ka = t;
}
function av(e, t, n) {
  Cn[kn++] = yr, Cn[kn++] = vr, Cn[kn++] = Eo, Eo = e;
  var r = yr;
  e = vr;
  var o = 32 - Wn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Wn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, yr = 1 << 32 - Wn(t) + o | n << o | r, vr = i + e;
  } else yr = 1 << i | n << o | r, vr = e;
}
function Nf(e) {
  e.return !== null && (mo(e, 1), av(e, 1, 0));
}
function Lf(e) {
  for (; e === Ca; ) Ca = ei[--ti], ei[ti] = null, ka = ei[--ti], ei[ti] = null;
  for (; e === Eo; ) Eo = Cn[--kn], Cn[kn] = null, vr = Cn[--kn], Cn[kn] = null, yr = Cn[--kn], Cn[kn] = null;
}
var pn = null, fn = null, ct = !1, _n = null;
function cv(e, t) {
  var n = En(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Nm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, pn = e, fn = Hr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, pn = e, fn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Eo !== null ? { id: yr, overflow: vr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = En(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, pn = e, fn = null, !0) : !1;
    default:
      return !1;
  }
}
function Ed(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Rd(e) {
  if (ct) {
    var t = fn;
    if (t) {
      var n = t;
      if (!Nm(e, t)) {
        if (Ed(e)) throw Error(K(418));
        t = Hr(n.nextSibling);
        var r = pn;
        t && Nm(e, t) ? cv(r, n) : (e.flags = e.flags & -4097 | 2, ct = !1, pn = e);
      }
    } else {
      if (Ed(e)) throw Error(K(418));
      e.flags = e.flags & -4097 | 2, ct = !1, pn = e;
    }
  }
}
function Lm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  pn = e;
}
function Rl(e) {
  if (e !== pn) return !1;
  if (!ct) return Lm(e), ct = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wd(e.type, e.memoizedProps)), t && (t = fn)) {
    if (Ed(e)) throw uv(), Error(K(418));
    for (; t; ) cv(e, t), t = Hr(t.nextSibling);
  }
  if (Lm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(K(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              fn = Hr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      fn = null;
    }
  } else fn = pn ? Hr(e.stateNode.nextSibling) : null;
  return !0;
}
function uv() {
  for (var e = fn; e; ) e = Hr(e.nextSibling);
}
function vi() {
  fn = pn = null, ct = !1;
}
function zf(e) {
  _n === null ? _n = [e] : _n.push(e);
}
var JS = Rr.ReactCurrentBatchConfig;
function Hi(e, t, n) {
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
function Pl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(K(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function zm(e) {
  var t = e._init;
  return t(e._payload);
}
function dv(e) {
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
    return y = Gr(y, h), y.index = 0, y.sibling = null, y;
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
    return E === Go ? d(y, h, S.props.children, w, S.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Or && zm(E) === h.type) ? (w = o(h, S.props), w.ref = Hi(y, h, S), w.return = y, w) : (w = oa(S.type, S.key, S.props, null, y.mode, w), w.ref = Hi(y, h, S), w.return = y, w);
  }
  function c(y, h, S, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== S.containerInfo || h.stateNode.implementation !== S.implementation ? (h = $u(S, y.mode, w), h.return = y, h) : (h = o(h, S.children || []), h.return = y, h);
  }
  function d(y, h, S, w, E) {
    return h === null || h.tag !== 7 ? (h = wo(S, y.mode, w, E), h.return = y, h) : (h = o(h, S), h.return = y, h);
  }
  function p(y, h, S) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Mu("" + h, y.mode, S), h.return = y, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case yl:
          return S = oa(h.type, h.key, h.props, null, y.mode, S), S.ref = Hi(y, null, h), S.return = y, S;
        case Yo:
          return h = $u(h, y.mode, S), h.return = y, h;
        case Or:
          var w = h._init;
          return p(y, w(h._payload), S);
      }
      if (rs(h) || Di(h)) return h = wo(h, y.mode, S, null), h.return = y, h;
      Pl(y, h);
    }
    return null;
  }
  function v(y, h, S, w) {
    var E = h !== null ? h.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return E !== null ? null : l(y, h, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case yl:
          return S.key === E ? a(y, h, S, w) : null;
        case Yo:
          return S.key === E ? c(y, h, S, w) : null;
        case Or:
          return E = S._init, v(
            y,
            h,
            E(S._payload),
            w
          );
      }
      if (rs(S) || Di(S)) return E !== null ? null : d(y, h, S, w, null);
      Pl(y, S);
    }
    return null;
  }
  function u(y, h, S, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return y = y.get(S) || null, l(h, y, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case yl:
          return y = y.get(w.key === null ? S : w.key) || null, a(h, y, w, E);
        case Yo:
          return y = y.get(w.key === null ? S : w.key) || null, c(h, y, w, E);
        case Or:
          var k = w._init;
          return u(y, h, S, k(w._payload), E);
      }
      if (rs(w) || Di(w)) return y = y.get(S) || null, d(h, y, w, E, null);
      Pl(h, w);
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
    if (T === S.length) return n(y, R), ct && mo(y, T), E;
    if (R === null) {
      for (; T < S.length; T++) R = p(y, S[T], w), R !== null && (h = i(R, h, T), k === null ? E = R : k.sibling = R, k = R);
      return ct && mo(y, T), E;
    }
    for (R = r(y, R); T < S.length; T++) A = u(R, y, T, S[T], w), A !== null && (e && A.alternate !== null && R.delete(A.key === null ? T : A.key), h = i(A, h, T), k === null ? E = A : k.sibling = A, k = A);
    return e && R.forEach(function(I) {
      return t(y, I);
    }), ct && mo(y, T), E;
  }
  function b(y, h, S, w) {
    var E = Di(S);
    if (typeof E != "function") throw Error(K(150));
    if (S = E.call(S), S == null) throw Error(K(151));
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
    ), ct && mo(y, T), E;
    if (R === null) {
      for (; !N.done; T++, N = S.next()) N = p(y, N.value, w), N !== null && (h = i(N, h, T), k === null ? E = N : k.sibling = N, k = N);
      return ct && mo(y, T), E;
    }
    for (R = r(y, R); !N.done; T++, N = S.next()) N = u(R, y, T, N.value, w), N !== null && (e && N.alternate !== null && R.delete(N.key === null ? T : N.key), h = i(N, h, T), k === null ? E = N : k.sibling = N, k = N);
    return e && R.forEach(function(g) {
      return t(y, g);
    }), ct && mo(y, T), E;
  }
  function C(y, h, S, w) {
    if (typeof S == "object" && S !== null && S.type === Go && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case yl:
          e: {
            for (var E = S.key, k = h; k !== null; ) {
              if (k.key === E) {
                if (E = S.type, E === Go) {
                  if (k.tag === 7) {
                    n(y, k.sibling), h = o(k, S.props.children), h.return = y, y = h;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Or && zm(E) === k.type) {
                  n(y, k.sibling), h = o(k, S.props), h.ref = Hi(y, k, S), h.return = y, y = h;
                  break e;
                }
                n(y, k);
                break;
              } else t(y, k);
              k = k.sibling;
            }
            S.type === Go ? (h = wo(S.props.children, y.mode, w, S.key), h.return = y, y = h) : (w = oa(S.type, S.key, S.props, null, y.mode, w), w.ref = Hi(y, h, S), w.return = y, y = w);
          }
          return s(y);
        case Yo:
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
        case Or:
          return k = S._init, C(y, h, k(S._payload), w);
      }
      if (rs(S)) return x(y, h, S, w);
      if (Di(S)) return b(y, h, S, w);
      Pl(y, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, h !== null && h.tag === 6 ? (n(y, h.sibling), h = o(h, S), h.return = y, y = h) : (n(y, h), h = Mu(S, y.mode, w), h.return = y, y = h), s(y)) : n(y, h);
  }
  return C;
}
var xi = dv(!0), fv = dv(!1), Ta = to(null), Ea = null, ni = null, Bf = null;
function Df() {
  Bf = ni = Ea = null;
}
function Ff(e) {
  var t = Ta.current;
  it(Ta), e._currentValue = t;
}
function Pd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function di(e, t) {
  Ea = e, Bf = ni = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (en = !0), e.firstContext = null);
}
function In(e) {
  var t = e._currentValue;
  if (Bf !== e) if (e = { context: e, memoizedValue: t, next: null }, ni === null) {
    if (Ea === null) throw Error(K(308));
    ni = e, Ea.dependencies = { lanes: 0, firstContext: e };
  } else ni = ni.next = e;
  return t;
}
var vo = null;
function _f(e) {
  vo === null ? vo = [e] : vo.push(e);
}
function pv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, _f(t)) : (n.next = o.next, o.next = n), t.interleaved = n, wr(e, r);
}
function wr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nr = !1;
function Wf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function mv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function xr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Vr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Oe & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, wr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, _f(r)) : (t.next = o.next, o.next = t), r.interleaved = t, wr(e, n);
}
function Zl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Rf(e, n);
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
function Ra(e, t, n, r) {
  var o = e.updateQueue;
  Nr = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, c = a.next;
    a.next = null, s === null ? i = c : s.next = c, s = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = c : l.next = c, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var p = o.baseState;
    s = 0, d = c = a = null, l = i;
    do {
      var v = l.lane, u = l.eventTime;
      if ((r & v) === v) {
        d !== null && (d = d.next = {
          eventTime: u,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var x = e, b = l;
          switch (v = t, u = n, b.tag) {
            case 1:
              if (x = b.payload, typeof x == "function") {
                p = x.call(u, p, v);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = b.payload, v = typeof x == "function" ? x.call(u, p, v) : x, v == null) break e;
              p = ht({}, p, v);
              break e;
            case 2:
              Nr = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [l] : v.push(l));
      } else u = { eventTime: u, lane: v, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (c = d = u, a = p) : d = d.next = u, s |= v;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = p), o.baseState = a, o.firstBaseUpdate = c, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Po |= s, e.lanes = s, e.memoizedState = p;
  }
}
function Dm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(K(191, o));
      o.call(r);
    }
  }
}
var tl = {}, or = to(tl), Ns = to(tl), Ls = to(tl);
function xo(e) {
  if (e === tl) throw Error(K(174));
  return e;
}
function Uf(e, t) {
  switch (et(Ls, t), et(Ns, e), et(or, tl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ad(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ad(t, e);
  }
  it(or), et(or, t);
}
function Si() {
  it(or), it(Ns), it(Ls);
}
function hv(e) {
  xo(Ls.current);
  var t = xo(or.current), n = ad(t, e.type);
  t !== n && (et(Ns, e), et(or, n));
}
function Hf(e) {
  Ns.current === e && (it(or), it(Ns));
}
var ft = to(0);
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
function Vf() {
  for (var e = 0; e < ku.length; e++) ku[e]._workInProgressVersionPrimary = null;
  ku.length = 0;
}
var Jl = Rr.ReactCurrentDispatcher, Tu = Rr.ReactCurrentBatchConfig, Ro = 0, pt = null, Et = null, It = null, Ia = !1, ps = !1, zs = 0, eb = 0;
function Ft() {
  throw Error(K(321));
}
function Kf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Hn(e[n], t[n])) return !1;
  return !0;
}
function Yf(e, t, n, r, o, i) {
  if (Ro = i, pt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jl.current = e === null || e.memoizedState === null ? ob : ib, e = n(r, o), ps) {
    i = 0;
    do {
      if (ps = !1, zs = 0, 25 <= i) throw Error(K(301));
      i += 1, It = Et = null, t.updateQueue = null, Jl.current = sb, e = n(r, o);
    } while (ps);
  }
  if (Jl.current = Ma, t = Et !== null && Et.next !== null, Ro = 0, It = Et = pt = null, Ia = !1, t) throw Error(K(300));
  return e;
}
function Gf() {
  var e = zs !== 0;
  return zs = 0, e;
}
function Qn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return It === null ? pt.memoizedState = It = e : It = It.next = e, It;
}
function Mn() {
  if (Et === null) {
    var e = pt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Et.next;
  var t = It === null ? pt.memoizedState : It.next;
  if (t !== null) It = t, Et = e;
  else {
    if (e === null) throw Error(K(310));
    Et = e, e = { memoizedState: Et.memoizedState, baseState: Et.baseState, baseQueue: Et.baseQueue, queue: Et.queue, next: null }, It === null ? pt.memoizedState = It = e : It = It.next = e;
  }
  return It;
}
function Bs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Eu(e) {
  var t = Mn(), n = t.queue;
  if (n === null) throw Error(K(311));
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
    var l = s = null, a = null, c = i;
    do {
      var d = c.lane;
      if ((Ro & d) === d) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var p = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (l = a = p, s = r) : a = a.next = p, pt.lanes |= d, Po |= d;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? s = r : a.next = l, Hn(r, t.memoizedState) || (en = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, pt.lanes |= i, Po |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ru(e) {
  var t = Mn(), n = t.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Hn(i, t.memoizedState) || (en = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function gv() {
}
function yv(e, t) {
  var n = pt, r = Mn(), o = t(), i = !Hn(r.memoizedState, o);
  if (i && (r.memoizedState = o, en = !0), r = r.queue, Xf(Sv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || It !== null && It.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ds(9, xv.bind(null, n, r, o, t), void 0, null), $t === null) throw Error(K(349));
    Ro & 30 || vv(n, t, o);
  }
  return o;
}
function vv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function xv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, bv(t) && wv(e);
}
function Sv(e, t, n) {
  return n(function() {
    bv(t) && wv(e);
  });
}
function bv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Hn(e, n);
  } catch {
    return !0;
  }
}
function wv(e) {
  var t = wr(e, 1);
  t !== null && Un(t, e, 1, -1);
}
function Fm(e) {
  var t = Qn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Bs, lastRenderedState: e }, t.queue = e, e = e.dispatch = rb.bind(null, pt, e), [t.memoizedState, e];
}
function Ds(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = pt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Cv() {
  return Mn().memoizedState;
}
function ea(e, t, n, r) {
  var o = Qn();
  pt.flags |= e, o.memoizedState = Ds(1 | t, n, void 0, r === void 0 ? null : r);
}
function tc(e, t, n, r) {
  var o = Mn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Et !== null) {
    var s = Et.memoizedState;
    if (i = s.destroy, r !== null && Kf(r, s.deps)) {
      o.memoizedState = Ds(t, n, i, r);
      return;
    }
  }
  pt.flags |= e, o.memoizedState = Ds(1 | t, n, i, r);
}
function _m(e, t) {
  return ea(8390656, 8, e, t);
}
function Xf(e, t) {
  return tc(2048, 8, e, t);
}
function kv(e, t) {
  return tc(4, 2, e, t);
}
function Tv(e, t) {
  return tc(4, 4, e, t);
}
function Ev(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Rv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, tc(4, 4, Ev.bind(null, t, e), n);
}
function Qf() {
}
function Pv(e, t) {
  var n = Mn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Iv(e, t) {
  var n = Mn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Mv(e, t, n) {
  return Ro & 21 ? (Hn(n, t) || (n = Ny(), pt.lanes |= n, Po |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, en = !0), e.memoizedState = n);
}
function tb(e, t) {
  var n = Qe;
  Qe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Tu.transition;
  Tu.transition = {};
  try {
    e(!1), t();
  } finally {
    Qe = n, Tu.transition = r;
  }
}
function $v() {
  return Mn().memoizedState;
}
function nb(e, t, n) {
  var r = Yr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, jv(e)) Av(t, n);
  else if (n = pv(e, t, n, r), n !== null) {
    var o = Qt();
    Un(n, e, r, o), Ov(n, t, r);
  }
}
function rb(e, t, n) {
  var r = Yr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jv(e)) Av(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Hn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, _f(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = pv(e, t, o, r), n !== null && (o = Qt(), Un(n, e, r, o), Ov(n, t, r));
  }
}
function jv(e) {
  var t = e.alternate;
  return e === pt || t !== null && t === pt;
}
function Av(e, t) {
  ps = Ia = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ov(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Rf(e, n);
  }
}
var Ma = { readContext: In, useCallback: Ft, useContext: Ft, useEffect: Ft, useImperativeHandle: Ft, useInsertionEffect: Ft, useLayoutEffect: Ft, useMemo: Ft, useReducer: Ft, useRef: Ft, useState: Ft, useDebugValue: Ft, useDeferredValue: Ft, useTransition: Ft, useMutableSource: Ft, useSyncExternalStore: Ft, useId: Ft, unstable_isNewReconciler: !1 }, ob = { readContext: In, useCallback: function(e, t) {
  return Qn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: In, useEffect: _m, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ea(
    4194308,
    4,
    Ev.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ea(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ea(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Qn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Qn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = nb.bind(null, pt, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Qn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Fm, useDebugValue: Qf, useDeferredValue: function(e) {
  return Qn().memoizedState = e;
}, useTransition: function() {
  var e = Fm(!1), t = e[0];
  return e = tb.bind(null, e[1]), Qn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = pt, o = Qn();
  if (ct) {
    if (n === void 0) throw Error(K(407));
    n = n();
  } else {
    if (n = t(), $t === null) throw Error(K(349));
    Ro & 30 || vv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, _m(Sv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Ds(9, xv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Qn(), t = $t.identifierPrefix;
  if (ct) {
    var n = vr, r = yr;
    n = (r & ~(1 << 32 - Wn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = zs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = eb++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ib = {
  readContext: In,
  useCallback: Pv,
  useContext: In,
  useEffect: Xf,
  useImperativeHandle: Rv,
  useInsertionEffect: kv,
  useLayoutEffect: Tv,
  useMemo: Iv,
  useReducer: Eu,
  useRef: Cv,
  useState: function() {
    return Eu(Bs);
  },
  useDebugValue: Qf,
  useDeferredValue: function(e) {
    var t = Mn();
    return Mv(t, Et.memoizedState, e);
  },
  useTransition: function() {
    var e = Eu(Bs)[0], t = Mn().memoizedState;
    return [e, t];
  },
  useMutableSource: gv,
  useSyncExternalStore: yv,
  useId: $v,
  unstable_isNewReconciler: !1
}, sb = { readContext: In, useCallback: Pv, useContext: In, useEffect: Xf, useImperativeHandle: Rv, useInsertionEffect: kv, useLayoutEffect: Tv, useMemo: Iv, useReducer: Ru, useRef: Cv, useState: function() {
  return Ru(Bs);
}, useDebugValue: Qf, useDeferredValue: function(e) {
  var t = Mn();
  return Et === null ? t.memoizedState = e : Mv(t, Et.memoizedState, e);
}, useTransition: function() {
  var e = Ru(Bs)[0], t = Mn().memoizedState;
  return [e, t];
}, useMutableSource: gv, useSyncExternalStore: yv, useId: $v, unstable_isNewReconciler: !1 };
function Dn(e, t) {
  if (e && e.defaultProps) {
    t = ht({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Id(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ht({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var nc = { isMounted: function(e) {
  return (e = e._reactInternals) ? No(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = Yr(e), i = xr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Vr(e, i, o), t !== null && (Un(t, e, o, r), Zl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = Yr(e), i = xr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Vr(e, i, o), t !== null && (Un(t, e, o, r), Zl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qt(), r = Yr(e), o = xr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Vr(e, o, r), t !== null && (Un(t, e, r, n), Zl(t, e, r));
} };
function Wm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !$s(n, r) || !$s(o, i) : !0;
}
function Nv(e, t, n) {
  var r = !1, o = qr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = In(i) : (o = nn(t) ? To : Ht.current, r = t.contextTypes, i = (r = r != null) ? yi(e, o) : qr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = nc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Um(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nc.enqueueReplaceState(t, t.state, null);
}
function Md(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Wf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = In(i) : (i = nn(t) ? To : Ht.current, o.context = yi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Id(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && nc.enqueueReplaceState(o, o.state, null), Ra(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function bi(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ox(r), r = r.return;
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
function $d(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var lb = typeof WeakMap == "function" ? WeakMap : Map;
function Lv(e, t, n) {
  n = xr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ja || (ja = !0, _d = r), $d(e, t);
  }, n;
}
function zv(e, t, n) {
  n = xr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      $d(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    $d(e, t), typeof r != "function" && (Kr === null ? Kr = /* @__PURE__ */ new Set([this]) : Kr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Hm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lb();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = bb.bind(null, e, t, n), t.then(e, e));
}
function Vm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Km(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = xr(-1, 1), t.tag = 2, Vr(n, t, 1))), n.lanes |= 1), e);
}
var ab = Rr.ReactCurrentOwner, en = !1;
function Yt(e, t, n, r) {
  t.child = e === null ? fv(t, null, n, r) : xi(t, e.child, n, r);
}
function Ym(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return di(t, o), r = Yf(e, t, n, r, i, o), n = Gf(), e !== null && !en ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Cr(e, t, o)) : (ct && n && Nf(t), t.flags |= 1, Yt(e, t, r, o), t.child);
}
function Gm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !op(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Bv(e, t, i, r, o)) : (e = oa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $s, n(s, r) && e.ref === t.ref) return Cr(e, t, o);
  }
  return t.flags |= 1, e = Gr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Bv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($s(i, r) && e.ref === t.ref) if (en = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (en = !0);
    else return t.lanes = e.lanes, Cr(e, t, o);
  }
  return jd(e, t, n, r, o);
}
function Dv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, et(oi, cn), cn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, et(oi, cn), cn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, et(oi, cn), cn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, et(oi, cn), cn |= r;
  return Yt(e, t, o, n), t.child;
}
function Fv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function jd(e, t, n, r, o) {
  var i = nn(n) ? To : Ht.current;
  return i = yi(t, i), di(t, o), n = Yf(e, t, n, r, i, o), r = Gf(), e !== null && !en ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Cr(e, t, o)) : (ct && r && Nf(t), t.flags |= 1, Yt(e, t, n, o), t.child);
}
function Xm(e, t, n, r, o) {
  if (nn(n)) {
    var i = !0;
    wa(t);
  } else i = !1;
  if (di(t, o), t.stateNode === null) ta(e, t), Nv(t, n, r), Md(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = In(c) : (c = nn(n) ? To : Ht.current, c = yi(t, c));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== c) && Um(t, s, r, c), Nr = !1;
    var v = t.memoizedState;
    s.state = v, Ra(t, r, s, o), a = t.memoizedState, l !== r || v !== a || tn.current || Nr ? (typeof d == "function" && (Id(t, n, d, r), a = t.memoizedState), (l = Nr || Wm(t, n, l, r, v, a, c)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = c, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, mv(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Dn(t.type, l), s.props = c, p = t.pendingProps, v = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = In(a) : (a = nn(n) ? To : Ht.current, a = yi(t, a));
    var u = n.getDerivedStateFromProps;
    (d = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || v !== a) && Um(t, s, r, a), Nr = !1, v = t.memoizedState, s.state = v, Ra(t, r, s, o);
    var x = t.memoizedState;
    l !== p || v !== x || tn.current || Nr ? (typeof u == "function" && (Id(t, n, u, r), x = t.memoizedState), (c = Nr || Wm(t, n, c, r, v, x, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ad(e, t, n, r, i, o);
}
function Ad(e, t, n, r, o, i) {
  Fv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Om(t, n, !1), Cr(e, t, i);
  r = t.stateNode, ab.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = xi(t, e.child, null, i), t.child = xi(t, null, l, i)) : Yt(e, t, l, i), t.memoizedState = r.state, o && Om(t, n, !0), t.child;
}
function _v(e) {
  var t = e.stateNode;
  t.pendingContext ? Am(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Am(e, t.context, !1), Uf(e, t.containerInfo);
}
function Qm(e, t, n, r, o) {
  return vi(), zf(o), t.flags |= 256, Yt(e, t, n, r), t.child;
}
var Od = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wv(e, t, n) {
  var r = t.pendingProps, o = ft.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), et(ft, o & 1), e === null)
    return Rd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = ic(s, r, 0, null), e = wo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Nd(n), t.memoizedState = Od, e) : qf(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return cb(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Gr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Gr(l, i) : (i = wo(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Nd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Od, r;
  }
  return i = e.child, e = i.sibling, r = Gr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function qf(e, t) {
  return t = ic({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Il(e, t, n, r) {
  return r !== null && zf(r), xi(t, e.child, null, n), e = qf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function cb(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Pu(Error(K(422))), Il(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ic({ mode: "visible", children: r.children }, o, 0, null), i = wo(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && xi(t, e.child, null, s), t.child.memoizedState = Nd(s), t.memoizedState = Od, i);
  if (!(t.mode & 1)) return Il(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(K(419)), r = Pu(i, r, void 0), Il(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, en || l) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, wr(e, o), Un(r, e, o, -1));
    }
    return rp(), r = Pu(Error(K(421))), Il(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = wb.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, fn = Hr(o.nextSibling), pn = t, ct = !0, _n = null, e !== null && (Cn[kn++] = yr, Cn[kn++] = vr, Cn[kn++] = Eo, yr = e.id, vr = e.overflow, Eo = t), t = qf(t, r.children), t.flags |= 4096, t);
}
function qm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pd(e.return, t, n);
}
function Iu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Uv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Yt(e, t, r.children, n), r = ft.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && qm(e, n, t);
      else if (e.tag === 19) qm(e, n, t);
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
  if (et(ft, r), !(t.mode & 1)) t.memoizedState = null;
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
function Cr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Po |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(K(153));
  if (t.child !== null) {
    for (e = t.child, n = Gr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Gr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ub(e, t, n) {
  switch (t.tag) {
    case 3:
      _v(t), vi();
      break;
    case 5:
      hv(t);
      break;
    case 1:
      nn(t.type) && wa(t);
      break;
    case 4:
      Uf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      et(Ta, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (et(ft, ft.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wv(e, t, n) : (et(ft, ft.current & 1), e = Cr(e, t, n), e !== null ? e.sibling : null);
      et(ft, ft.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Uv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), et(ft, ft.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dv(e, t, n);
  }
  return Cr(e, t, n);
}
var Hv, Ld, Vv, Kv;
Hv = function(e, t) {
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
Ld = function() {
};
Vv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, xo(or.current);
    var i = null;
    switch (n) {
      case "input":
        o = od(e, o), r = od(e, r), i = [];
        break;
      case "select":
        o = ht({}, o, { value: void 0 }), r = ht({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ld(e, o), r = ld(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Sa);
    }
    cd(n, r);
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
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ks.hasOwnProperty(c) ? (a != null && c === "onScroll" && rt("scroll", e), i || l === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Kv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vi(e, t) {
  if (!ct) switch (e.tailMode) {
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
function db(e, t, n) {
  var r = t.pendingProps;
  switch (Lf(t), t.tag) {
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
      return nn(t.type) && ba(), _t(t), null;
    case 3:
      return r = t.stateNode, Si(), it(tn), it(Ht), Vf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, _n !== null && (Hd(_n), _n = null))), Ld(e, t), _t(t), null;
    case 5:
      Hf(t);
      var o = xo(Ls.current);
      if (n = t.type, e !== null && t.stateNode != null) Vv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(K(166));
          return _t(t), null;
        }
        if (e = xo(or.current), Rl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[er] = t, r[Os] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              rt("cancel", r), rt("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              rt("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < is.length; o++) rt(is[o], r);
              break;
            case "source":
              rt("error", r);
              break;
            case "img":
            case "image":
            case "link":
              rt(
                "error",
                r
              ), rt("load", r);
              break;
            case "details":
              rt("toggle", r);
              break;
            case "input":
              sm(r, i), rt("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, rt("invalid", r);
              break;
            case "textarea":
              am(r, i), rt("invalid", r);
          }
          cd(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && El(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && El(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : ks.hasOwnProperty(s) && l != null && s === "onScroll" && rt("scroll", r);
          }
          switch (n) {
            case "input":
              vl(r), lm(r, i, !0);
              break;
            case "textarea":
              vl(r), cm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Sa);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sy(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[er] = t, e[Os] = r, Hv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = ud(n, r), n) {
              case "dialog":
                rt("cancel", e), rt("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                rt("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < is.length; o++) rt(is[o], e);
                o = r;
                break;
              case "source":
                rt("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                rt(
                  "error",
                  e
                ), rt("load", e), o = r;
                break;
              case "details":
                rt("toggle", e), o = r;
                break;
              case "input":
                sm(e, r), o = od(e, r), rt("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ht({}, r, { value: void 0 }), rt("invalid", e);
                break;
              case "textarea":
                am(e, r), o = ld(e, r), rt("invalid", e);
                break;
              default:
                o = r;
            }
            cd(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Cy(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && by(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ts(e, a) : typeof a == "number" && Ts(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ks.hasOwnProperty(i) ? a != null && i === "onScroll" && rt("scroll", e) : a != null && bf(e, i, a, s));
            }
            switch (n) {
              case "input":
                vl(e), lm(e, r, !1);
                break;
              case "textarea":
                vl(e), cm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Qr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? li(e, !!r.multiple, i, !1) : r.defaultValue != null && li(
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
      return _t(t), null;
    case 6:
      if (e && t.stateNode != null) Kv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(K(166));
        if (n = xo(Ls.current), xo(or.current), Rl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[er] = t, (i = r.nodeValue !== n) && (e = pn, e !== null)) switch (e.tag) {
            case 3:
              El(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && El(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[er] = t, t.stateNode = r;
      }
      return _t(t), null;
    case 13:
      if (it(ft), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ct && fn !== null && t.mode & 1 && !(t.flags & 128)) uv(), vi(), t.flags |= 98560, i = !1;
        else if (i = Rl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(K(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(K(317));
            i[er] = t;
          } else vi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _t(t), i = !1;
        } else _n !== null && (Hd(_n), _n = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ft.current & 1 ? Rt === 0 && (Rt = 3) : rp())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
    case 4:
      return Si(), Ld(e, t), e === null && js(t.stateNode.containerInfo), _t(t), null;
    case 10:
      return Ff(t.type._context), _t(t), null;
    case 17:
      return nn(t.type) && ba(), _t(t), null;
    case 19:
      if (it(ft), i = t.memoizedState, i === null) return _t(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Vi(i, !1);
      else {
        if (Rt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Pa(e), s !== null) {
            for (t.flags |= 128, Vi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return et(ft, ft.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && xt() > wi && (t.flags |= 128, r = !0, Vi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Pa(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ct) return _t(t), null;
        } else 2 * xt() - i.renderingStartTime > wi && n !== 1073741824 && (t.flags |= 128, r = !0, Vi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = xt(), t.sibling = null, n = ft.current, et(ft, r ? n & 1 | 2 : n & 1), t) : (_t(t), null);
    case 22:
    case 23:
      return np(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? cn & 1073741824 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(K(156, t.tag));
}
function fb(e, t) {
  switch (Lf(t), t.tag) {
    case 1:
      return nn(t.type) && ba(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Si(), it(tn), it(Ht), Vf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Hf(t), null;
    case 13:
      if (it(ft), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(K(340));
        vi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return it(ft), null;
    case 4:
      return Si(), null;
    case 10:
      return Ff(t.type._context), null;
    case 22:
    case 23:
      return np(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ml = !1, Ut = !1, pb = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
function ri(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    gt(e, t, r);
  }
  else n.current = null;
}
function zd(e, t, n) {
  try {
    n();
  } catch (r) {
    gt(e, t, r);
  }
}
var Zm = !1;
function mb(e, t) {
  if (Sd = ya, e = qy(), Of(e)) {
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
        var s = 0, l = -1, a = -1, c = 0, d = 0, p = e, v = null;
        t: for (; ; ) {
          for (var u; p !== n || o !== 0 && p.nodeType !== 3 || (l = s + o), p !== i || r !== 0 && p.nodeType !== 3 || (a = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (u = p.firstChild) !== null; )
            v = p, p = u;
          for (; ; ) {
            if (p === e) break t;
            if (v === n && ++c === o && (l = s), v === i && ++d === r && (a = s), (u = p.nextSibling) !== null) break;
            p = v, v = p.parentNode;
          }
          p = u;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bd = { focusedElem: e, selectionRange: n }, ya = !1, ee = t; ee !== null; ) if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
  else for (; ee !== null; ) {
    t = ee;
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
      gt(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, ee = e;
      break;
    }
    ee = t.return;
  }
  return x = Zm, Zm = !1, x;
}
function ms(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && zd(t, n, i);
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
function Bd(e) {
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
function Yv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Yv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[er], delete t[Os], delete t[kd], delete t[QS], delete t[qS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Gv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Jm(e) {
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
function Dd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Sa));
  else if (r !== 4 && (e = e.child, e !== null)) for (Dd(e, t, n), e = e.sibling; e !== null; ) Dd(e, t, n), e = e.sibling;
}
function Fd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Fd(e, t, n), e = e.sibling; e !== null; ) Fd(e, t, n), e = e.sibling;
}
var Nt = null, Fn = !1;
function $r(e, t, n) {
  for (n = n.child; n !== null; ) Xv(e, t, n), n = n.sibling;
}
function Xv(e, t, n) {
  if (rr && typeof rr.onCommitFiberUnmount == "function") try {
    rr.onCommitFiberUnmount(Xa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ut || ri(n, t);
    case 6:
      var r = Nt, o = Fn;
      Nt = null, $r(e, t, n), Nt = r, Fn = o, Nt !== null && (Fn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Nt.removeChild(n.stateNode));
      break;
    case 18:
      Nt !== null && (Fn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? wu(e.parentNode, n) : e.nodeType === 1 && wu(e, n), Is(e)) : wu(Nt, n.stateNode));
      break;
    case 4:
      r = Nt, o = Fn, Nt = n.stateNode.containerInfo, Fn = !0, $r(e, t, n), Nt = r, Fn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ut && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && zd(n, t, s), o = o.next;
        } while (o !== r);
      }
      $r(e, t, n);
      break;
    case 1:
      if (!Ut && (ri(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        gt(n, t, l);
      }
      $r(e, t, n);
      break;
    case 21:
      $r(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ut = (r = Ut) || n.memoizedState !== null, $r(e, t, n), Ut = r) : $r(e, t, n);
      break;
    default:
      $r(e, t, n);
  }
}
function eh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new pb()), t.forEach(function(r) {
      var o = Cb.bind(null, e, r);
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
            Nt = l.stateNode, Fn = !1;
            break e;
          case 3:
            Nt = l.stateNode.containerInfo, Fn = !0;
            break e;
          case 4:
            Nt = l.stateNode.containerInfo, Fn = !0;
            break e;
        }
        l = l.return;
      }
      if (Nt === null) throw Error(K(160));
      Xv(i, s, o), Nt = null, Fn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (c) {
      gt(o, t, c);
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
      if (Nn(t, e), Yn(e), r & 4) {
        try {
          ms(3, e, e.return), rc(3, e);
        } catch (b) {
          gt(e, e.return, b);
        }
        try {
          ms(5, e, e.return);
        } catch (b) {
          gt(e, e.return, b);
        }
      }
      break;
    case 1:
      Nn(t, e), Yn(e), r & 512 && n !== null && ri(n, n.return);
      break;
    case 5:
      if (Nn(t, e), Yn(e), r & 512 && n !== null && ri(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ts(o, "");
        } catch (b) {
          gt(e, e.return, b);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && vy(o, i), ud(l, s);
          var c = ud(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], p = a[s + 1];
            d === "style" ? Cy(o, p) : d === "dangerouslySetInnerHTML" ? by(o, p) : d === "children" ? Ts(o, p) : bf(o, d, p, c);
          }
          switch (l) {
            case "input":
              id(o, i);
              break;
            case "textarea":
              xy(o, i);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var u = i.value;
              u != null ? li(o, !!i.multiple, u, !1) : v !== !!i.multiple && (i.defaultValue != null ? li(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : li(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Os] = i;
        } catch (b) {
          gt(e, e.return, b);
        }
      }
      break;
    case 6:
      if (Nn(t, e), Yn(e), r & 4) {
        if (e.stateNode === null) throw Error(K(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (b) {
          gt(e, e.return, b);
        }
      }
      break;
    case 3:
      if (Nn(t, e), Yn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Is(t.containerInfo);
      } catch (b) {
        gt(e, e.return, b);
      }
      break;
    case 4:
      Nn(t, e), Yn(e);
      break;
    case 13:
      Nn(t, e), Yn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ep = xt())), r & 4 && eh(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ut = (c = Ut) || d, Nn(t, e), Ut = c) : Nn(t, e), Yn(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1) for (ee = e, d = e.child; d !== null; ) {
          for (p = ee = d; ee !== null; ) {
            switch (v = ee, u = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ms(4, v, v.return);
                break;
              case 1:
                ri(v, v.return);
                var x = v.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (b) {
                    gt(r, n, b);
                  }
                }
                break;
              case 5:
                ri(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  nh(p);
                  continue;
                }
            }
            u !== null ? (u.return = v, ee = u) : nh(p);
          }
          d = d.sibling;
        }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                o = p.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode, a = p.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = wy("display", s));
              } catch (b) {
                gt(e, e.return, b);
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = c ? "" : p.memoizedProps;
            } catch (b) {
              gt(e, e.return, b);
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
      Nn(t, e), Yn(e), r & 4 && eh(e);
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
          if (Gv(n)) {
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
          var i = Jm(e);
          Fd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Jm(e);
          Dd(e, l, s);
          break;
        default:
          throw Error(K(161));
      }
    } catch (a) {
      gt(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hb(e, t, n) {
  ee = e, qv(e);
}
function qv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; ee !== null; ) {
    var o = ee, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ml;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Ut;
        l = Ml;
        var c = Ut;
        if (Ml = s, (Ut = a) && !c) for (ee = o; ee !== null; ) s = ee, a = s.child, s.tag === 22 && s.memoizedState !== null ? rh(o) : a !== null ? (a.return = s, ee = a) : rh(o);
        for (; i !== null; ) ee = i, qv(i), i = i.sibling;
        ee = o, Ml = l, Ut = c;
      }
      th(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, ee = i) : th(e);
  }
}
function th(e) {
  for (; ee !== null; ) {
    var t = ee;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ut || rc(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ut) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Dn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Dm(t, i, r);
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
              Dm(t, s, n);
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
                var d = c.memoizedState;
                if (d !== null) {
                  var p = d.dehydrated;
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
        Ut || t.flags & 512 && Bd(t);
      } catch (v) {
        gt(t, t.return, v);
      }
    }
    if (t === e) {
      ee = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, ee = n;
      break;
    }
    ee = t.return;
  }
}
function nh(e) {
  for (; ee !== null; ) {
    var t = ee;
    if (t === e) {
      ee = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, ee = n;
      break;
    }
    ee = t.return;
  }
}
function rh(e) {
  for (; ee !== null; ) {
    var t = ee;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            rc(4, t);
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
            Bd(t);
          } catch (a) {
            gt(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Bd(t);
          } catch (a) {
            gt(t, s, a);
          }
      }
    } catch (a) {
      gt(t, t.return, a);
    }
    if (t === e) {
      ee = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, ee = l;
      break;
    }
    ee = t.return;
  }
}
var gb = Math.ceil, $a = Rr.ReactCurrentDispatcher, Zf = Rr.ReactCurrentOwner, Rn = Rr.ReactCurrentBatchConfig, Oe = 0, $t = null, Tt = null, zt = 0, cn = 0, oi = to(0), Rt = 0, Fs = null, Po = 0, oc = 0, Jf = 0, hs = null, Jt = null, ep = 0, wi = 1 / 0, mr = null, ja = !1, _d = null, Kr = null, $l = !1, Dr = null, Aa = 0, gs = 0, Wd = null, na = -1, ra = 0;
function Qt() {
  return Oe & 6 ? xt() : na !== -1 ? na : na = xt();
}
function Yr(e) {
  return e.mode & 1 ? Oe & 2 && zt !== 0 ? zt & -zt : JS.transition !== null ? (ra === 0 && (ra = Ny()), ra) : (e = Qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wy(e.type)), e) : 1;
}
function Un(e, t, n, r) {
  if (50 < gs) throw gs = 0, Wd = null, Error(K(185));
  Zs(e, n, r), (!(Oe & 2) || e !== $t) && (e === $t && (!(Oe & 2) && (oc |= n), Rt === 4 && zr(e, zt)), rn(e, r), n === 1 && Oe === 0 && !(t.mode & 1) && (wi = xt() + 500, ec && no()));
}
function rn(e, t) {
  var n = e.callbackNode;
  Jx(e, t);
  var r = ga(e, e === $t ? zt : 0);
  if (r === 0) n !== null && fm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && fm(n), t === 1) e.tag === 0 ? ZS(oh.bind(null, e)) : lv(oh.bind(null, e)), GS(function() {
      !(Oe & 6) && no();
    }), n = null;
    else {
      switch (Ly(r)) {
        case 1:
          n = Ef;
          break;
        case 4:
          n = Ay;
          break;
        case 16:
          n = ha;
          break;
        case 536870912:
          n = Oy;
          break;
        default:
          n = ha;
      }
      n = i0(n, Zv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Zv(e, t) {
  if (na = -1, ra = 0, Oe & 6) throw Error(K(327));
  var n = e.callbackNode;
  if (fi() && e.callbackNode !== n) return null;
  var r = ga(e, e === $t ? zt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oa(e, r);
  else {
    t = r;
    var o = Oe;
    Oe |= 2;
    var i = e0();
    ($t !== e || zt !== t) && (mr = null, wi = xt() + 500, bo(e, t));
    do
      try {
        xb();
        break;
      } catch (l) {
        Jv(e, l);
      }
    while (!0);
    Df(), $a.current = i, Oe = o, Tt !== null ? t = 0 : ($t = null, zt = 0, t = Rt);
  }
  if (t !== 0) {
    if (t === 2 && (o = hd(e), o !== 0 && (r = o, t = Ud(e, o))), t === 1) throw n = Fs, bo(e, 0), zr(e, r), rn(e, xt()), n;
    if (t === 6) zr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !yb(o) && (t = Oa(e, r), t === 2 && (i = hd(e), i !== 0 && (r = i, t = Ud(e, i))), t === 1)) throw n = Fs, bo(e, 0), zr(e, r), rn(e, xt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(K(345));
        case 2:
          ho(e, Jt, mr);
          break;
        case 3:
          if (zr(e, r), (r & 130023424) === r && (t = ep + 500 - xt(), 10 < t)) {
            if (ga(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Qt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Cd(ho.bind(null, e, Jt, mr), t);
            break;
          }
          ho(e, Jt, mr);
          break;
        case 4:
          if (zr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Wn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = xt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Cd(ho.bind(null, e, Jt, mr), r);
            break;
          }
          ho(e, Jt, mr);
          break;
        case 5:
          ho(e, Jt, mr);
          break;
        default:
          throw Error(K(329));
      }
    }
  }
  return rn(e, xt()), e.callbackNode === n ? Zv.bind(null, e) : null;
}
function Ud(e, t) {
  var n = hs;
  return e.current.memoizedState.isDehydrated && (bo(e, t).flags |= 256), e = Oa(e, t), e !== 2 && (t = Jt, Jt = n, t !== null && Hd(t)), e;
}
function Hd(e) {
  Jt === null ? Jt = e : Jt.push.apply(Jt, e);
}
function yb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Hn(i(), o)) return !1;
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
function zr(e, t) {
  for (t &= ~Jf, t &= ~oc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Wn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function oh(e) {
  if (Oe & 6) throw Error(K(327));
  fi();
  var t = ga(e, 0);
  if (!(t & 1)) return rn(e, xt()), null;
  var n = Oa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hd(e);
    r !== 0 && (t = r, n = Ud(e, r));
  }
  if (n === 1) throw n = Fs, bo(e, 0), zr(e, t), rn(e, xt()), n;
  if (n === 6) throw Error(K(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ho(e, Jt, mr), rn(e, xt()), null;
}
function tp(e, t) {
  var n = Oe;
  Oe |= 1;
  try {
    return e(t);
  } finally {
    Oe = n, Oe === 0 && (wi = xt() + 500, ec && no());
  }
}
function Io(e) {
  Dr !== null && Dr.tag === 0 && !(Oe & 6) && fi();
  var t = Oe;
  Oe |= 1;
  var n = Rn.transition, r = Qe;
  try {
    if (Rn.transition = null, Qe = 1, e) return e();
  } finally {
    Qe = r, Rn.transition = n, Oe = t, !(Oe & 6) && no();
  }
}
function np() {
  cn = oi.current, it(oi);
}
function bo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, YS(n)), Tt !== null) for (n = Tt.return; n !== null; ) {
    var r = n;
    switch (Lf(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ba();
        break;
      case 3:
        Si(), it(tn), it(Ht), Vf();
        break;
      case 5:
        Hf(r);
        break;
      case 4:
        Si();
        break;
      case 13:
        it(ft);
        break;
      case 19:
        it(ft);
        break;
      case 10:
        Ff(r.type._context);
        break;
      case 22:
      case 23:
        np();
    }
    n = n.return;
  }
  if ($t = e, Tt = e = Gr(e.current, null), zt = cn = t, Rt = 0, Fs = null, Jf = oc = Po = 0, Jt = hs = null, vo !== null) {
    for (t = 0; t < vo.length; t++) if (n = vo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    vo = null;
  }
  return e;
}
function Jv(e, t) {
  do {
    var n = Tt;
    try {
      if (Df(), Jl.current = Ma, Ia) {
        for (var r = pt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ia = !1;
      }
      if (Ro = 0, It = Et = pt = null, ps = !1, zs = 0, Zf.current = null, n === null || n.return === null) {
        Rt = 1, Fs = t, Tt = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = zt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, d = l, p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = d.alternate;
            v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var u = Vm(s);
          if (u !== null) {
            u.flags &= -257, Km(u, s, l, i, t), u.mode & 1 && Hm(i, c, t), t = u, a = c;
            var x = t.updateQueue;
            if (x === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Hm(i, c, t), rp();
              break e;
            }
            a = Error(K(426));
          }
        } else if (ct && l.mode & 1) {
          var C = Vm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Km(C, s, l, i, t), zf(bi(a, l));
            break e;
          }
        }
        i = a = bi(a, l), Rt !== 4 && (Rt = 2), hs === null ? hs = [i] : hs.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = Lv(i, a, t);
              Bm(i, y);
              break e;
            case 1:
              l = a;
              var h = i.type, S = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (Kr === null || !Kr.has(S)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = zv(i, l, t);
                Bm(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      n0(n);
    } catch (E) {
      t = E, Tt === n && n !== null && (Tt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function e0() {
  var e = $a.current;
  return $a.current = Ma, e === null ? Ma : e;
}
function rp() {
  (Rt === 0 || Rt === 3 || Rt === 2) && (Rt = 4), $t === null || !(Po & 268435455) && !(oc & 268435455) || zr($t, zt);
}
function Oa(e, t) {
  var n = Oe;
  Oe |= 2;
  var r = e0();
  ($t !== e || zt !== t) && (mr = null, bo(e, t));
  do
    try {
      vb();
      break;
    } catch (o) {
      Jv(e, o);
    }
  while (!0);
  if (Df(), Oe = n, $a.current = r, Tt !== null) throw Error(K(261));
  return $t = null, zt = 0, Rt;
}
function vb() {
  for (; Tt !== null; ) t0(Tt);
}
function xb() {
  for (; Tt !== null && !Hx(); ) t0(Tt);
}
function t0(e) {
  var t = o0(e.alternate, e, cn);
  e.memoizedProps = e.pendingProps, t === null ? n0(e) : Tt = t, Zf.current = null;
}
function n0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = fb(n, t), n !== null) {
        n.flags &= 32767, Tt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Rt = 6, Tt = null;
        return;
      }
    } else if (n = db(n, t, cn), n !== null) {
      Tt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Tt = t;
      return;
    }
    Tt = t = e;
  } while (t !== null);
  Rt === 0 && (Rt = 5);
}
function ho(e, t, n) {
  var r = Qe, o = Rn.transition;
  try {
    Rn.transition = null, Qe = 1, Sb(e, t, n, r);
  } finally {
    Rn.transition = o, Qe = r;
  }
  return null;
}
function Sb(e, t, n, r) {
  do
    fi();
  while (Dr !== null);
  if (Oe & 6) throw Error(K(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(K(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (eS(e, i), e === $t && (Tt = $t = null, zt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $l || ($l = !0, i0(ha, function() {
    return fi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Rn.transition, Rn.transition = null;
    var s = Qe;
    Qe = 1;
    var l = Oe;
    Oe |= 4, Zf.current = null, mb(e, n), Qv(n, e), FS(bd), ya = !!Sd, bd = Sd = null, e.current = n, hb(n), Vx(), Oe = l, Qe = s, Rn.transition = i;
  } else e.current = n;
  if ($l && ($l = !1, Dr = e, Aa = o), i = e.pendingLanes, i === 0 && (Kr = null), Gx(n.stateNode), rn(e, xt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ja) throw ja = !1, e = _d, _d = null, e;
  return Aa & 1 && e.tag !== 0 && fi(), i = e.pendingLanes, i & 1 ? e === Wd ? gs++ : (gs = 0, Wd = e) : gs = 0, no(), null;
}
function fi() {
  if (Dr !== null) {
    var e = Ly(Aa), t = Rn.transition, n = Qe;
    try {
      if (Rn.transition = null, Qe = 16 > e ? 16 : e, Dr === null) var r = !1;
      else {
        if (e = Dr, Dr = null, Aa = 0, Oe & 6) throw Error(K(331));
        var o = Oe;
        for (Oe |= 4, ee = e.current; ee !== null; ) {
          var i = ee, s = i.child;
          if (ee.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (ee = c; ee !== null; ) {
                  var d = ee;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ms(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) p.return = d, ee = p;
                  else for (; ee !== null; ) {
                    d = ee;
                    var v = d.sibling, u = d.return;
                    if (Yv(d), d === c) {
                      ee = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = u, ee = v;
                      break;
                    }
                    ee = u;
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
              ee = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, ee = s;
          else e: for (; ee !== null; ) {
            if (i = ee, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ms(9, i, i.return);
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, ee = y;
              break e;
            }
            ee = i.return;
          }
        }
        var h = e.current;
        for (ee = h; ee !== null; ) {
          s = ee;
          var S = s.child;
          if (s.subtreeFlags & 2064 && S !== null) S.return = s, ee = S;
          else e: for (s = h; ee !== null; ) {
            if (l = ee, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  rc(9, l);
              }
            } catch (E) {
              gt(l, l.return, E);
            }
            if (l === s) {
              ee = null;
              break e;
            }
            var w = l.sibling;
            if (w !== null) {
              w.return = l.return, ee = w;
              break e;
            }
            ee = l.return;
          }
        }
        if (Oe = o, no(), rr && typeof rr.onPostCommitFiberRoot == "function") try {
          rr.onPostCommitFiberRoot(Xa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Qe = n, Rn.transition = t;
    }
  }
  return !1;
}
function ih(e, t, n) {
  t = bi(n, t), t = Lv(e, t, 1), e = Vr(e, t, 1), t = Qt(), e !== null && (Zs(e, 1, t), rn(e, t));
}
function gt(e, t, n) {
  if (e.tag === 3) ih(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ih(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kr === null || !Kr.has(r))) {
        e = bi(n, e), e = zv(t, e, 1), t = Vr(t, e, 1), e = Qt(), t !== null && (Zs(t, 1, e), rn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function bb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qt(), e.pingedLanes |= e.suspendedLanes & n, $t === e && (zt & n) === n && (Rt === 4 || Rt === 3 && (zt & 130023424) === zt && 500 > xt() - ep ? bo(e, 0) : Jf |= n), rn(e, t);
}
function r0(e, t) {
  t === 0 && (e.mode & 1 ? (t = bl, bl <<= 1, !(bl & 130023424) && (bl = 4194304)) : t = 1);
  var n = Qt();
  e = wr(e, t), e !== null && (Zs(e, t, n), rn(e, n));
}
function wb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), r0(e, n);
}
function Cb(e, t) {
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
  r !== null && r.delete(t), r0(e, n);
}
var o0;
o0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || tn.current) en = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return en = !1, ub(e, t, n);
    en = !!(e.flags & 131072);
  }
  else en = !1, ct && t.flags & 1048576 && av(t, ka, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ta(e, t), e = t.pendingProps;
      var o = yi(t, Ht.current);
      di(t, n), o = Yf(null, t, r, e, o, n);
      var i = Gf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, nn(r) ? (i = !0, wa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Wf(t), o.updater = nc, t.stateNode = o, o._reactInternals = t, Md(t, r, e, n), t = Ad(null, t, r, !0, i, n)) : (t.tag = 0, ct && i && Nf(t), Yt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ta(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Tb(r), e = Dn(r, e), o) {
          case 0:
            t = jd(null, t, r, e, n);
            break e;
          case 1:
            t = Xm(null, t, r, e, n);
            break e;
          case 11:
            t = Ym(null, t, r, e, n);
            break e;
          case 14:
            t = Gm(null, t, r, Dn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Dn(r, o), jd(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Dn(r, o), Xm(e, t, r, o, n);
    case 3:
      e: {
        if (_v(t), e === null) throw Error(K(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, mv(e, t), Ra(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = bi(Error(K(423)), t), t = Qm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = bi(Error(K(424)), t), t = Qm(e, t, r, n, o);
          break e;
        } else for (fn = Hr(t.stateNode.containerInfo.firstChild), pn = t, ct = !0, _n = null, n = fv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (vi(), r === o) {
            t = Cr(e, t, n);
            break e;
          }
          Yt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return hv(t), e === null && Rd(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, wd(r, o) ? s = null : i !== null && wd(r, i) && (t.flags |= 32), Fv(e, t), Yt(e, t, s, n), t.child;
    case 6:
      return e === null && Rd(t), null;
    case 13:
      return Wv(e, t, n);
    case 4:
      return Uf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = xi(t, null, r, n) : Yt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Dn(r, o), Ym(e, t, r, o, n);
    case 7:
      return Yt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Yt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Yt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, et(Ta, r._currentValue), r._currentValue = s, i !== null) if (Hn(i.value, s)) {
          if (i.children === o.children && !tn.current) {
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
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var d = c.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), c.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Pd(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Pd(s, n, t), s = i.sibling;
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
        Yt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, di(t, n), o = In(o), r = r(o), t.flags |= 1, Yt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Dn(r, t.pendingProps), o = Dn(r.type, o), Gm(e, t, r, o, n);
    case 15:
      return Bv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Dn(r, o), ta(e, t), t.tag = 1, nn(r) ? (e = !0, wa(t)) : e = !1, di(t, n), Nv(t, r, o), Md(t, r, o, n), Ad(null, t, r, !0, e, n);
    case 19:
      return Uv(e, t, n);
    case 22:
      return Dv(e, t, n);
  }
  throw Error(K(156, t.tag));
};
function i0(e, t) {
  return jy(e, t);
}
function kb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function En(e, t, n, r) {
  return new kb(e, t, n, r);
}
function op(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Tb(e) {
  if (typeof e == "function") return op(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Cf) return 11;
    if (e === kf) return 14;
  }
  return 2;
}
function Gr(e, t) {
  var n = e.alternate;
  return n === null ? (n = En(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function oa(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") op(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Go:
      return wo(n.children, o, i, t);
    case wf:
      s = 8, o |= 8;
      break;
    case ed:
      return e = En(12, n, t, o | 2), e.elementType = ed, e.lanes = i, e;
    case td:
      return e = En(13, n, t, o), e.elementType = td, e.lanes = i, e;
    case nd:
      return e = En(19, n, t, o), e.elementType = nd, e.lanes = i, e;
    case hy:
      return ic(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case py:
          s = 10;
          break e;
        case my:
          s = 9;
          break e;
        case Cf:
          s = 11;
          break e;
        case kf:
          s = 14;
          break e;
        case Or:
          s = 16, r = null;
          break e;
      }
      throw Error(K(130, e == null ? e : typeof e, ""));
  }
  return t = En(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function wo(e, t, n, r) {
  return e = En(7, e, r, t), e.lanes = n, e;
}
function ic(e, t, n, r) {
  return e = En(22, e, r, t), e.elementType = hy, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Mu(e, t, n) {
  return e = En(6, e, null, t), e.lanes = n, e;
}
function $u(e, t, n) {
  return t = En(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Eb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = du(0), this.expirationTimes = du(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = du(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ip(e, t, n, r, o, i, s, l, a) {
  return e = new Eb(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = En(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wf(i), e;
}
function Rb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Yo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function s0(e) {
  if (!e) return qr;
  e = e._reactInternals;
  e: {
    if (No(e) !== e || e.tag !== 1) throw Error(K(170));
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
    if (nn(n)) return sv(e, n, t);
  }
  return t;
}
function l0(e, t, n, r, o, i, s, l, a) {
  return e = ip(n, r, !0, e, o, i, s, l, a), e.context = s0(null), n = e.current, r = Qt(), o = Yr(n), i = xr(r, o), i.callback = t ?? null, Vr(n, i, o), e.current.lanes = o, Zs(e, o, r), rn(e, r), e;
}
function sc(e, t, n, r) {
  var o = t.current, i = Qt(), s = Yr(o);
  return n = s0(n), t.context === null ? t.context = n : t.pendingContext = n, t = xr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vr(o, t, s), e !== null && (Un(e, o, s, i), Zl(e, o, s)), s;
}
function Na(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function sh(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sp(e, t) {
  sh(e, t), (e = e.alternate) && sh(e, t);
}
function Pb() {
  return null;
}
var a0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function lp(e) {
  this._internalRoot = e;
}
lc.prototype.render = lp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(K(409));
  sc(e, t, null, null);
};
lc.prototype.unmount = lp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Io(function() {
      sc(null, e, null, null);
    }), t[br] = null;
  }
};
function lc(e) {
  this._internalRoot = e;
}
lc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Dy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Lr.length && t !== 0 && t < Lr[n].priority; n++) ;
    Lr.splice(n, 0, e), n === 0 && _y(e);
  }
};
function ap(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ac(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function lh() {
}
function Ib(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = Na(s);
        i.call(c);
      };
    }
    var s = l0(t, r, e, 0, null, !1, !1, "", lh);
    return e._reactRootContainer = s, e[br] = s.current, js(e.nodeType === 8 ? e.parentNode : e), Io(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var c = Na(a);
      l.call(c);
    };
  }
  var a = ip(e, 0, !1, null, null, !1, !1, "", lh);
  return e._reactRootContainer = a, e[br] = a.current, js(e.nodeType === 8 ? e.parentNode : e), Io(function() {
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
        var a = Na(s);
        l.call(a);
      };
    }
    sc(t, s, e, o);
  } else s = Ib(n, t, e, o, r);
  return Na(s);
}
zy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = os(t.pendingLanes);
        n !== 0 && (Rf(t, n | 1), rn(t, xt()), !(Oe & 6) && (wi = xt() + 500, no()));
      }
      break;
    case 13:
      Io(function() {
        var r = wr(e, 1);
        if (r !== null) {
          var o = Qt();
          Un(r, e, 1, o);
        }
      }), sp(e, 1);
  }
};
Pf = function(e) {
  if (e.tag === 13) {
    var t = wr(e, 134217728);
    if (t !== null) {
      var n = Qt();
      Un(t, e, 134217728, n);
    }
    sp(e, 134217728);
  }
};
By = function(e) {
  if (e.tag === 13) {
    var t = Yr(e), n = wr(e, t);
    if (n !== null) {
      var r = Qt();
      Un(n, e, t, r);
    }
    sp(e, t);
  }
};
Dy = function() {
  return Qe;
};
Fy = function(e, t) {
  var n = Qe;
  try {
    return Qe = e, t();
  } finally {
    Qe = n;
  }
};
fd = function(e, t, n) {
  switch (t) {
    case "input":
      if (id(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ja(r);
            if (!o) throw Error(K(90));
            yy(r), id(r, o);
          }
        }
      }
      break;
    case "textarea":
      xy(e, n);
      break;
    case "select":
      t = n.value, t != null && li(e, !!n.multiple, t, !1);
  }
};
Ey = tp;
Ry = Io;
var Mb = { usingClientEntryPoint: !1, Events: [el, Zo, Ja, ky, Ty, tp] }, Ki = { findFiberByHostInstance: yo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $b = { bundleType: Ki.bundleType, version: Ki.version, rendererPackageName: Ki.rendererPackageName, rendererConfig: Ki.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Rr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = My(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ki.findFiberByHostInstance || Pb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jl.isDisabled && jl.supportsFiber) try {
    Xa = jl.inject($b), rr = jl;
  } catch {
  }
}
vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mb;
vn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ap(t)) throw Error(K(200));
  return Rb(e, t, null, n);
};
vn.createRoot = function(e, t) {
  if (!ap(e)) throw Error(K(299));
  var n = !1, r = "", o = a0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ip(e, 1, !1, null, null, n, !1, r, o), e[br] = t.current, js(e.nodeType === 8 ? e.parentNode : e), new lp(t);
};
vn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(K(188)) : (e = Object.keys(e).join(","), Error(K(268, e)));
  return e = My(t), e = e === null ? null : e.stateNode, e;
};
vn.flushSync = function(e) {
  return Io(e);
};
vn.hydrate = function(e, t, n) {
  if (!ac(t)) throw Error(K(200));
  return cc(null, e, t, !0, n);
};
vn.hydrateRoot = function(e, t, n) {
  if (!ap(e)) throw Error(K(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = a0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = l0(t, null, e, 1, n ?? null, o, !1, i, s), e[br] = t.current, js(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new lc(t);
};
vn.render = function(e, t, n) {
  if (!ac(t)) throw Error(K(200));
  return cc(null, e, t, !1, n);
};
vn.unmountComponentAtNode = function(e) {
  if (!ac(e)) throw Error(K(40));
  return e._reactRootContainer ? (Io(function() {
    cc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[br] = null;
    });
  }), !0) : !1;
};
vn.unstable_batchedUpdates = tp;
vn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ac(n)) throw Error(K(200));
  if (e == null || e._reactInternals === void 0) throw Error(K(38));
  return cc(e, t, n, !1, r);
};
vn.version = "18.3.1-next-f1338f8080-20240426";
function c0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c0);
    } catch (e) {
      console.error(e);
    }
}
c0(), cy.exports = vn;
var u0 = cy.exports, d0, ah = u0;
d0 = ah.createRoot, ah.hydrateRoot;
const _s = {
  black: "#000",
  white: "#fff"
}, Do = {
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
}, _o = {
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
}, Yi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, jb = {
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
const ir = "$$material";
function Vd() {
  return Vd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vd.apply(null, arguments);
}
function Ab(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ob(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Nb = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ob(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ab(o);
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
}(), Wt = "-ms-", La = "-moz-", De = "-webkit-", f0 = "comm", cp = "rule", up = "decl", Lb = "@import", p0 = "@keyframes", zb = "@layer", Bb = Math.abs, uc = String.fromCharCode, Db = Object.assign;
function Fb(e, t) {
  return Lt(e, 0) ^ 45 ? (((t << 2 ^ Lt(e, 0)) << 2 ^ Lt(e, 1)) << 2 ^ Lt(e, 2)) << 2 ^ Lt(e, 3) : 0;
}
function m0(e) {
  return e.trim();
}
function _b(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Fe(e, t, n) {
  return e.replace(t, n);
}
function Kd(e, t) {
  return e.indexOf(t);
}
function Lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ws(e, t, n) {
  return e.slice(t, n);
}
function Zn(e) {
  return e.length;
}
function dp(e) {
  return e.length;
}
function Al(e, t) {
  return t.push(e), e;
}
function Wb(e, t) {
  return e.map(t).join("");
}
var dc = 1, Ci = 1, h0 = 0, ln = 0, kt = 0, Oi = "";
function fc(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: dc, column: Ci, length: s, return: "" };
}
function Gi(e, t) {
  return Db(fc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ub() {
  return kt;
}
function Hb() {
  return kt = ln > 0 ? Lt(Oi, --ln) : 0, Ci--, kt === 10 && (Ci = 1, dc--), kt;
}
function mn() {
  return kt = ln < h0 ? Lt(Oi, ln++) : 0, Ci++, kt === 10 && (Ci = 1, dc++), kt;
}
function sr() {
  return Lt(Oi, ln);
}
function ia() {
  return ln;
}
function nl(e, t) {
  return Ws(Oi, e, t);
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
function g0(e) {
  return dc = Ci = 1, h0 = Zn(Oi = e), ln = 0, [];
}
function y0(e) {
  return Oi = "", e;
}
function sa(e) {
  return m0(nl(ln - 1, Yd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Vb(e) {
  for (; (kt = sr()) && kt < 33; )
    mn();
  return Us(e) > 2 || Us(kt) > 3 ? "" : " ";
}
function Kb(e, t) {
  for (; --t && mn() && !(kt < 48 || kt > 102 || kt > 57 && kt < 65 || kt > 70 && kt < 97); )
    ;
  return nl(e, ia() + (t < 6 && sr() == 32 && mn() == 32));
}
function Yd(e) {
  for (; mn(); )
    switch (kt) {
      case e:
        return ln;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yd(kt);
        break;
      case 40:
        e === 41 && Yd(e);
        break;
      case 92:
        mn();
        break;
    }
  return ln;
}
function Yb(e, t) {
  for (; mn() && e + kt !== 57; )
    if (e + kt === 84 && sr() === 47)
      break;
  return "/*" + nl(t, ln - 1) + "*" + uc(e === 47 ? e : mn());
}
function Gb(e) {
  for (; !Us(sr()); )
    mn();
  return nl(e, ln);
}
function Xb(e) {
  return y0(la("", null, null, null, [""], e = g0(e), 0, [0], e));
}
function la(e, t, n, r, o, i, s, l, a) {
  for (var c = 0, d = 0, p = s, v = 0, u = 0, x = 0, b = 1, C = 1, y = 1, h = 0, S = "", w = o, E = i, k = r, R = S; C; )
    switch (x = h, h = mn()) {
      case 40:
        if (x != 108 && Lt(R, p - 1) == 58) {
          Kd(R += Fe(sa(h), "&", "&\f"), "&\f") != -1 && (y = -1);
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
        R += Vb(x);
        break;
      case 92:
        R += Kb(ia() - 1, 7);
        continue;
      case 47:
        switch (sr()) {
          case 42:
          case 47:
            Al(Qb(Yb(mn(), ia()), t, n), a);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * b:
        l[c++] = Zn(R) * y;
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0;
          case 59 + d:
            y == -1 && (R = Fe(R, /\f/g, "")), u > 0 && Zn(R) - p && Al(u > 32 ? uh(R + ";", r, n, p - 1) : uh(Fe(R, " ", "") + ";", r, n, p - 2), a);
            break;
          case 59:
            R += ";";
          default:
            if (Al(k = ch(R, t, n, c, d, o, l, S, w = [], E = [], p), i), h === 123)
              if (d === 0)
                la(R, t, k, k, w, i, p, l, E);
              else
                switch (v === 99 && Lt(R, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    la(e, k, k, r && Al(ch(e, k, k, 0, 0, o, l, S, o, w = [], p), E), o, E, p, l, r ? w : E);
                    break;
                  default:
                    la(R, k, k, k, [""], E, 0, l, E);
                }
        }
        c = d = u = 0, b = y = 1, S = R = "", p = s;
        break;
      case 58:
        p = 1 + Zn(R), u = x;
      default:
        if (b < 1) {
          if (h == 123)
            --b;
          else if (h == 125 && b++ == 0 && Hb() == 125)
            continue;
        }
        switch (R += uc(h), h * b) {
          case 38:
            y = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[c++] = (Zn(R) - 1) * y, y = 1;
            break;
          case 64:
            sr() === 45 && (R += sa(mn())), v = sr(), d = p = Zn(S = R += Gb(ia())), h++;
            break;
          case 45:
            x === 45 && Zn(R) == 2 && (b = 0);
        }
    }
  return i;
}
function ch(e, t, n, r, o, i, s, l, a, c, d) {
  for (var p = o - 1, v = o === 0 ? i : [""], u = dp(v), x = 0, b = 0, C = 0; x < r; ++x)
    for (var y = 0, h = Ws(e, p + 1, p = Bb(b = s[x])), S = e; y < u; ++y)
      (S = m0(b > 0 ? v[y] + " " + h : Fe(h, /&\f/g, v[y]))) && (a[C++] = S);
  return fc(e, t, n, o === 0 ? cp : l, a, c, d);
}
function Qb(e, t, n) {
  return fc(e, t, n, f0, uc(Ub()), Ws(e, 2, -2), 0);
}
function uh(e, t, n, r) {
  return fc(e, t, n, up, Ws(e, 0, r), Ws(e, r + 1, -1), r);
}
function pi(e, t) {
  for (var n = "", r = dp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function qb(e, t, n, r) {
  switch (e.type) {
    case zb:
      if (e.children.length) break;
    case Lb:
    case up:
      return e.return = e.return || e.value;
    case f0:
      return "";
    case p0:
      return e.return = e.value + "{" + pi(e.children, r) + "}";
    case cp:
      e.value = e.props.join(",");
  }
  return Zn(n = pi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Zb(e) {
  var t = dp(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function Jb(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function v0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ew = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = sr(), o === 38 && i === 12 && (n[r] = 1), !Us(i); )
    mn();
  return nl(t, ln);
}, tw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Us(o)) {
      case 0:
        o === 38 && sr() === 12 && (n[r] = 1), t[r] += ew(ln - 1, n, r);
        break;
      case 2:
        t[r] += sa(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = sr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += uc(o);
    }
  while (o = mn());
  return t;
}, nw = function(t, n) {
  return y0(tw(g0(t), n));
}, dh = /* @__PURE__ */ new WeakMap(), rw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !dh.get(r)) && !o) {
      dh.set(t, !0);
      for (var i = [], s = nw(n, i), l = r.props, a = 0, c = 0; a < s.length; a++)
        for (var d = 0; d < l.length; d++, c++)
          t.props[c] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + " " + s[a];
    }
  }
}, ow = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function x0(e, t) {
  switch (Fb(e, t)) {
    case 5103:
      return De + "print-" + e + e;
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
      return De + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return De + e + La + e + Wt + e + e;
    case 6828:
    case 4268:
      return De + e + Wt + e + e;
    case 6165:
      return De + e + Wt + "flex-" + e + e;
    case 5187:
      return De + e + Fe(e, /(\w+).+(:[^]+)/, De + "box-$1$2" + Wt + "flex-$1$2") + e;
    case 5443:
      return De + e + Wt + "flex-item-" + Fe(e, /flex-|-self/, "") + e;
    case 4675:
      return De + e + Wt + "flex-line-pack" + Fe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return De + e + Wt + Fe(e, "shrink", "negative") + e;
    case 5292:
      return De + e + Wt + Fe(e, "basis", "preferred-size") + e;
    case 6060:
      return De + "box-" + Fe(e, "-grow", "") + De + e + Wt + Fe(e, "grow", "positive") + e;
    case 4554:
      return De + Fe(e, /([^-])(transform)/g, "$1" + De + "$2") + e;
    case 6187:
      return Fe(Fe(Fe(e, /(zoom-|grab)/, De + "$1"), /(image-set)/, De + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Fe(e, /(image-set\([^]*)/, De + "$1$`$1");
    case 4968:
      return Fe(Fe(e, /(.+:)(flex-)?(.*)/, De + "box-pack:$3" + Wt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + De + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Fe(e, /(.+)-inline(.+)/, De + "$1$2") + e;
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
      if (Zn(e) - 1 - t > 6) switch (Lt(e, t + 1)) {
        case 109:
          if (Lt(e, t + 4) !== 45) break;
        case 102:
          return Fe(e, /(.+:)(.+)-([^]+)/, "$1" + De + "$2-$3$1" + La + (Lt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Kd(e, "stretch") ? x0(Fe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Lt(e, t + 1) !== 115) break;
    case 6444:
      switch (Lt(e, Zn(e) - 3 - (~Kd(e, "!important") && 10))) {
        case 107:
          return Fe(e, ":", ":" + De) + e;
        case 101:
          return Fe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + De + (Lt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + De + "$2$3$1" + Wt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Lt(e, t + 11)) {
        case 114:
          return De + e + Wt + Fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return De + e + Wt + Fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return De + e + Wt + Fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return De + e + Wt + e + e;
  }
  return e;
}
var iw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case up:
      t.return = x0(t.value, t.length);
      break;
    case p0:
      return pi([Gi(t, {
        value: Fe(t.value, "@", "@" + De)
      })], o);
    case cp:
      if (t.length) return Wb(t.props, function(i) {
        switch (_b(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return pi([Gi(t, {
              props: [Fe(i, /:(read-\w+)/, ":" + La + "$1")]
            })], o);
          case "::placeholder":
            return pi([Gi(t, {
              props: [Fe(i, /:(plac\w+)/, ":" + De + "input-$1")]
            }), Gi(t, {
              props: [Fe(i, /:(plac\w+)/, ":" + La + "$1")]
            }), Gi(t, {
              props: [Fe(i, /:(plac\w+)/, Wt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, sw = [iw], lw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var C = b.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || sw, i = {}, s, l = [];
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
  var a, c = [rw, ow];
  {
    var d, p = [qb, Jb(function(b) {
      d.insert(b);
    })], v = Zb(c.concat(o, p)), u = function(C) {
      return pi(Xb(C), v);
    };
    a = function(C, y, h, S) {
      d = h, u(C ? C + "{" + y.styles + "}" : y.styles), S && (x.inserted[y.name] = !0);
    };
  }
  var x = {
    key: n,
    sheet: new Nb({
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
}, S0 = { exports: {} }, qe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt = typeof Symbol == "function" && Symbol.for, fp = jt ? Symbol.for("react.element") : 60103, pp = jt ? Symbol.for("react.portal") : 60106, pc = jt ? Symbol.for("react.fragment") : 60107, mc = jt ? Symbol.for("react.strict_mode") : 60108, hc = jt ? Symbol.for("react.profiler") : 60114, gc = jt ? Symbol.for("react.provider") : 60109, yc = jt ? Symbol.for("react.context") : 60110, mp = jt ? Symbol.for("react.async_mode") : 60111, vc = jt ? Symbol.for("react.concurrent_mode") : 60111, xc = jt ? Symbol.for("react.forward_ref") : 60112, Sc = jt ? Symbol.for("react.suspense") : 60113, aw = jt ? Symbol.for("react.suspense_list") : 60120, bc = jt ? Symbol.for("react.memo") : 60115, wc = jt ? Symbol.for("react.lazy") : 60116, cw = jt ? Symbol.for("react.block") : 60121, uw = jt ? Symbol.for("react.fundamental") : 60117, dw = jt ? Symbol.for("react.responder") : 60118, fw = jt ? Symbol.for("react.scope") : 60119;
function Sn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fp:
        switch (e = e.type, e) {
          case mp:
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
      case pp:
        return t;
    }
  }
}
function b0(e) {
  return Sn(e) === vc;
}
qe.AsyncMode = mp;
qe.ConcurrentMode = vc;
qe.ContextConsumer = yc;
qe.ContextProvider = gc;
qe.Element = fp;
qe.ForwardRef = xc;
qe.Fragment = pc;
qe.Lazy = wc;
qe.Memo = bc;
qe.Portal = pp;
qe.Profiler = hc;
qe.StrictMode = mc;
qe.Suspense = Sc;
qe.isAsyncMode = function(e) {
  return b0(e) || Sn(e) === mp;
};
qe.isConcurrentMode = b0;
qe.isContextConsumer = function(e) {
  return Sn(e) === yc;
};
qe.isContextProvider = function(e) {
  return Sn(e) === gc;
};
qe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fp;
};
qe.isForwardRef = function(e) {
  return Sn(e) === xc;
};
qe.isFragment = function(e) {
  return Sn(e) === pc;
};
qe.isLazy = function(e) {
  return Sn(e) === wc;
};
qe.isMemo = function(e) {
  return Sn(e) === bc;
};
qe.isPortal = function(e) {
  return Sn(e) === pp;
};
qe.isProfiler = function(e) {
  return Sn(e) === hc;
};
qe.isStrictMode = function(e) {
  return Sn(e) === mc;
};
qe.isSuspense = function(e) {
  return Sn(e) === Sc;
};
qe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === pc || e === vc || e === hc || e === mc || e === Sc || e === aw || typeof e == "object" && e !== null && (e.$$typeof === wc || e.$$typeof === bc || e.$$typeof === gc || e.$$typeof === yc || e.$$typeof === xc || e.$$typeof === uw || e.$$typeof === dw || e.$$typeof === fw || e.$$typeof === cw);
};
qe.typeOf = Sn;
S0.exports = qe;
var pw = S0.exports, w0 = pw, mw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, hw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, C0 = {};
C0[w0.ForwardRef] = mw;
C0[w0.Memo] = hw;
var gw = !0;
function k0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var hp = function(t, n, r) {
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
  gw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, gp = function(t, n, r) {
  hp(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function yw(e) {
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
var vw = {
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
}, xw = /[A-Z]|^ms/g, Sw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, T0 = function(t) {
  return t.charCodeAt(1) === 45;
}, fh = function(t) {
  return t != null && typeof t != "boolean";
}, ju = /* @__PURE__ */ v0(function(e) {
  return T0(e) ? e : e.replace(xw, "-$&").toLowerCase();
}), ph = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Sw, function(r, o, i) {
          return Jn = {
            name: o,
            styles: i,
            next: Jn
          }, o;
        });
  }
  return vw[t] !== 1 && !T0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
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
        return Jn = {
          name: o.name,
          styles: o.styles,
          next: Jn
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Jn = {
              name: s.name,
              styles: s.styles,
              next: Jn
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return bw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = Jn, c = n(e);
        return Jn = a, Hs(e, t, c);
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
function bw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Hs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : fh(l) && (r += ju(i) + ":" + ph(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          fh(s[a]) && (r += ju(i) + ":" + ph(i, s[a]) + ";");
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
var mh = /label:\s*([^\s;{]+)\s*(;|$)/g, Jn;
function rl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Jn = void 0;
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
  mh.lastIndex = 0;
  for (var c = "", d; (d = mh.exec(o)) !== null; )
    c += "-" + d[1];
  var p = yw(o) + c;
  return {
    name: p,
    styles: o,
    next: Jn
  };
}
var ww = function(t) {
  return t();
}, E0 = da.useInsertionEffect ? da.useInsertionEffect : !1, R0 = E0 || ww, hh = E0 || m.useLayoutEffect, P0 = /* @__PURE__ */ m.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ lw({
    key: "css"
  }) : null
);
P0.Provider;
var yp = function(t) {
  return /* @__PURE__ */ m.forwardRef(function(n, r) {
    var o = m.useContext(P0);
    return t(n, o, r);
  });
}, ol = /* @__PURE__ */ m.createContext({}), vp = {}.hasOwnProperty, Gd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Cw = function(t, n) {
  var r = {};
  for (var o in n)
    vp.call(n, o) && (r[o] = n[o]);
  return r[Gd] = t, r;
}, kw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return hp(n, r, o), R0(function() {
    return gp(n, r, o);
  }), null;
}, Tw = /* @__PURE__ */ yp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Gd], i = [r], s = "";
  typeof e.className == "string" ? s = k0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = rl(i, void 0, m.useContext(ol));
  s += t.key + "-" + l.name;
  var a = {};
  for (var c in e)
    vp.call(e, c) && c !== "css" && c !== Gd && (a[c] = e[c]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(kw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ m.createElement(o, a));
}), Ew = Tw, gh = function(t, n) {
  var r = arguments;
  if (n == null || !vp.call(n, "css"))
    return m.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Ew, i[1] = Cw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return m.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(gh || (gh = {}));
var Rw = /* @__PURE__ */ yp(function(e, t) {
  var n = e.styles, r = rl([n], void 0, m.useContext(ol)), o = m.useRef();
  return hh(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), hh(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && gp(t, r.next, !0), s.tags.length) {
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
var Pw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Iw = /* @__PURE__ */ v0(
  function(e) {
    return Pw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Mw = Iw, $w = function(t) {
  return t !== "theme";
}, yh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Mw : $w;
}, vh = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, jw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return hp(n, r, o), R0(function() {
    return gp(n, r, o);
  }), null;
}, Aw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = vh(t, n, r), a = l || yh(o), c = !a("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      var v = d[0];
      p.push(v[0]);
      for (var u = d.length, x = 1; x < u; x++)
        p.push(d[x], v[x]);
    }
    var b = yp(function(C, y, h) {
      var S = c && C.as || o, w = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var R in C)
          k[R] = C[R];
        k.theme = m.useContext(ol);
      }
      typeof C.className == "string" ? w = k0(y.registered, E, C.className) : C.className != null && (w = C.className + " ");
      var T = rl(p.concat(E), y.registered, k);
      w += y.key + "-" + T.name, s !== void 0 && (w += " " + s);
      var A = c && l === void 0 ? yh(S) : a, N = {};
      for (var I in C)
        c && I === "as" || A(I) && (N[I] = C[I]);
      return N.className = w, h && (N.ref = h), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(jw, {
        cache: y,
        serialized: T,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ m.createElement(S, N));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = p, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(C, y) {
      var h = e(C, Vd({}, n, y, {
        shouldForwardProp: vh(b, y, !0)
      }));
      return h.apply(void 0, p);
    }, b;
  };
}, Ow = [
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
], Xd = Aw.bind(null);
Ow.forEach(function(e) {
  Xd[e] = Xd(e);
});
function Nw(e) {
  return e == null || Object.keys(e).length === 0;
}
function I0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Nw(o) ? n : o) : t;
  return /* @__PURE__ */ f.jsx(Rw, {
    styles: r
  });
}
function M0(e, t) {
  return Xd(e, t);
}
function Lw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const xh = [];
function Xr(e) {
  return xh[0] = e, rl(xh);
}
var $0 = { exports: {} }, Je = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xp = Symbol.for("react.transitional.element"), Sp = Symbol.for("react.portal"), Cc = Symbol.for("react.fragment"), kc = Symbol.for("react.strict_mode"), Tc = Symbol.for("react.profiler"), Ec = Symbol.for("react.consumer"), Rc = Symbol.for("react.context"), Pc = Symbol.for("react.forward_ref"), Ic = Symbol.for("react.suspense"), Mc = Symbol.for("react.suspense_list"), $c = Symbol.for("react.memo"), jc = Symbol.for("react.lazy"), zw = Symbol.for("react.view_transition"), Bw = Symbol.for("react.client.reference");
function An(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case xp:
        switch (e = e.type, e) {
          case Cc:
          case Tc:
          case kc:
          case Ic:
          case Mc:
          case zw:
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
      case Sp:
        return t;
    }
  }
}
Je.ContextConsumer = Ec;
Je.ContextProvider = Rc;
Je.Element = xp;
Je.ForwardRef = Pc;
Je.Fragment = Cc;
Je.Lazy = jc;
Je.Memo = $c;
Je.Portal = Sp;
Je.Profiler = Tc;
Je.StrictMode = kc;
Je.Suspense = Ic;
Je.SuspenseList = Mc;
Je.isContextConsumer = function(e) {
  return An(e) === Ec;
};
Je.isContextProvider = function(e) {
  return An(e) === Rc;
};
Je.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xp;
};
Je.isForwardRef = function(e) {
  return An(e) === Pc;
};
Je.isFragment = function(e) {
  return An(e) === Cc;
};
Je.isLazy = function(e) {
  return An(e) === jc;
};
Je.isMemo = function(e) {
  return An(e) === $c;
};
Je.isPortal = function(e) {
  return An(e) === Sp;
};
Je.isProfiler = function(e) {
  return An(e) === Tc;
};
Je.isStrictMode = function(e) {
  return An(e) === kc;
};
Je.isSuspense = function(e) {
  return An(e) === Ic;
};
Je.isSuspenseList = function(e) {
  return An(e) === Mc;
};
Je.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Cc || e === Tc || e === kc || e === Ic || e === Mc || typeof e == "object" && e !== null && (e.$$typeof === jc || e.$$typeof === $c || e.$$typeof === Rc || e.$$typeof === Ec || e.$$typeof === Pc || e.$$typeof === Bw || e.getModuleId !== void 0);
};
Je.typeOf = An;
$0.exports = Je;
var j0 = $0.exports;
function gr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function A0(e) {
  if (/* @__PURE__ */ m.isValidElement(e) || j0.isValidElementType(e) || !gr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = A0(e[n]);
  }), t;
}
function Bt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return gr(e) && gr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ m.isValidElement(t[o]) || j0.isValidElementType(t[o]) ? r[o] = t[o] : gr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && gr(e[o]) ? r[o] = Bt(e[o], t[o], n) : n.clone ? r[o] = gr(t[o]) ? A0(t[o]) : t[o] : r[o] = t[o];
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
  } = e, i = Dw(t), s = Object.keys(i);
  function l(u) {
    return `@media (min-width:${typeof t[u] == "number" ? t[u] : u}${n})`;
  }
  function a(u) {
    return `@media (max-width:${(typeof t[u] == "number" ? t[u] : u) - r / 100}${n})`;
  }
  function c(u, x) {
    const b = s.indexOf(x);
    return `@media (min-width:${typeof t[u] == "number" ? t[u] : u}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : x) - r / 100}${n})`;
  }
  function d(u) {
    return s.indexOf(u) + 1 < s.length ? c(u, s[s.indexOf(u) + 1]) : l(u);
  }
  function p(u) {
    const x = s.indexOf(u);
    return x === 0 ? l(s[1]) : x === s.length - 1 ? a(s[x]) : c(u, s[s.indexOf(u) + 1]).replace("@media", "@media not all and");
  }
  const v = [];
  for (let u = 0; u < s.length; u += 1)
    v.push(l(s[u]));
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: c,
    only: d,
    not: p,
    unit: n,
    internal_mediaKeys: v,
    ...o
  };
}
const Sh = /min-width:\s*([0-9.]+)/;
function bh(e, t) {
  if (!e.containerQueries || !Fw(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(Sh)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(Sh)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function Fw(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function N0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function _w(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Ww(e) {
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
const Uw = {
  borderRadius: 4
};
function L0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function mi(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return Gw(t) ? t : Xw(e) ? ki(t) : n && r ? Kw(e, t) : n !== r ? ki(t) : Qw(e, t);
}
function Hw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = ki(e[t]);
  return r;
}
function Vw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = ki(e[n]));
  return t;
}
function Kw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = ki(t[r]);
  return e;
}
function Yw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Gw(e) {
  return typeof e != "object" || e === null;
}
function Xw(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function ki(e) {
  return Yw(e) ? Array.isArray(e) ? Hw(e) : Vw(e) : e;
}
function Qw(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = mi(e[n], t[n]) : e[n] = ki(t[n]));
  return e;
}
const qw = {}, Ac = {
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
}, za = O0({
  values: Ac
}), Zw = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ac[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Zr(e, t, n) {
  const r = {};
  return Oc(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : mi(r, l);
  });
}
function Oc(e, t, n, r) {
  if (t ?? (t = qw), Array.isArray(n)) {
    const o = t.breakpoints ?? za;
    for (let i = 0; i < n.length; i += 1)
      Au(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? za, i = o.values ?? Ac;
    for (const s in n)
      if (N0(o.keys, s)) {
        const l = _w(t.containerQueries ? t : Zw, s);
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
function z0(e = za) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function Qd(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    L0(t[o]) && delete t[o];
  }
  return t;
}
function Jw(e, ...t) {
  const r = [z0(e), ...t].reduce((o, i) => Bt(o, i), {});
  return Qd(e, r);
}
function eC(e, t) {
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
  } = e, o = r || eC(t, n), i = Object.keys(o);
  if (i.length === 0)
    return t;
  let s;
  return i.reduce((l, a, c) => {
    if (Array.isArray(t))
      l[a] = t[c] != null ? t[c] : t[s], s = c;
    else if (typeof t == "object" && t) {
      const d = t;
      l[a] = d[a] != null ? d[a] : d[s], s = a;
    } else
      l[a] = t;
    return l;
  }, {});
}
function tC(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (N0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function se(e) {
  if (typeof e != "string")
    throw new Error(kr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function B0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Nc(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Nc(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = wh(e.vars, o, r);
    if (i != null)
      return i;
  }
  return wh(e, o, r);
}
function wh(e, t, n = void 0) {
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
function bt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, c = Nc(a, r) || {};
    return Zr(s, l, (p) => {
      const v = B0(c, o, p, t);
      return n === !1 ? v : {
        [n]: v
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const nC = {
  internal_cache: {}
}, Ba = {
  m: "margin",
  p: "padding"
}, Ch = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, kh = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ks = {};
for (const e in Ba)
  Ks[e] = [Ba[e]];
for (const e in Ba)
  for (const t in Ch) {
    const n = Ba[e], r = Ch[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Ks[e + t] = o;
  }
for (const e in kh)
  Ks[e] = Ks[kh[e]];
const bp = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), wp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...bp, ...wp];
function sl(e, t, n, r) {
  const o = Nc(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Lc(e) {
  return sl(e, "spacing", 8);
}
function Mo(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Th = [""];
function D0(e, t) {
  var i;
  const n = e.theme ?? nC, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Lc(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = Ks[s] ?? (Th[0] = s, Th), a = e[s];
    Oc(o, e.theme, a, (c, d) => {
      const p = c ? o[c] : o;
      for (let v = 0; v < l.length; v += 1)
        p[l[v]] = Mo(r, d);
    });
  }
  return o;
}
function Cp(e) {
  return D0(e, bp);
}
Cp.propTypes = {};
Cp.filterProps = bp;
const wt = Cp;
function kp(e) {
  return D0(e, wp);
}
kp.propTypes = {};
kp.filterProps = wp;
const Ct = kp;
function F0(e = 8, t = Lc({
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
      t[i] && mi(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Tn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function On(e, t) {
  return bt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const rC = On("border", Tn), oC = On("borderTop", Tn), iC = On("borderRight", Tn), sC = On("borderBottom", Tn), lC = On("borderLeft", Tn), aC = On("borderColor"), cC = On("borderTopColor"), uC = On("borderRightColor"), dC = On("borderBottomColor"), fC = On("borderLeftColor"), pC = On("outline", Tn), mC = On("outlineColor"), Bc = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = sl(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Mo(t, r)
    });
    return Zr(e, e.borderRadius, n);
  }
  return null;
};
Bc.propTypes = {};
Bc.filterProps = ["borderRadius"];
zc(rC, oC, iC, sC, lC, aC, cC, uC, dC, fC, Bc, pC, mC);
const Dc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = sl(e.theme, "spacing", 8), n = (r) => ({
      gap: Mo(t, r)
    });
    return Zr(e, e.gap, n);
  }
  return null;
};
Dc.propTypes = {};
Dc.filterProps = ["gap"];
const Fc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = sl(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Mo(t, r)
    });
    return Zr(e, e.columnGap, n);
  }
  return null;
};
Fc.propTypes = {};
Fc.filterProps = ["columnGap"];
const _c = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = sl(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Mo(t, r)
    });
    return Zr(e, e.rowGap, n);
  }
  return null;
};
_c.propTypes = {};
_c.filterProps = ["rowGap"];
const hC = bt({
  prop: "gridColumn"
}), gC = bt({
  prop: "gridRow"
}), yC = bt({
  prop: "gridAutoFlow"
}), vC = bt({
  prop: "gridAutoColumns"
}), xC = bt({
  prop: "gridAutoRows"
}), SC = bt({
  prop: "gridTemplateColumns"
}), bC = bt({
  prop: "gridTemplateRows"
}), wC = bt({
  prop: "gridTemplateAreas"
}), CC = bt({
  prop: "gridArea"
});
zc(Dc, Fc, _c, hC, gC, yC, vC, xC, SC, bC, wC, CC);
function hi(e, t) {
  return t === "grey" ? t : e;
}
const kC = bt({
  prop: "color",
  themeKey: "palette",
  transform: hi
}), TC = bt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: hi
}), EC = bt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: hi
});
zc(kC, TC, EC);
const RC = Ac;
function dn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const PC = bt({
  prop: "width",
  transform: dn
}), Tp = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || RC[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: dn(n)
      };
    };
    return Zr(e, e.maxWidth, t);
  }
  return null;
};
Tp.filterProps = ["maxWidth"];
const IC = bt({
  prop: "minWidth",
  transform: dn
}), MC = bt({
  prop: "height",
  transform: dn
}), $C = bt({
  prop: "maxHeight",
  transform: dn
}), jC = bt({
  prop: "minHeight",
  transform: dn
});
bt({
  prop: "size",
  cssProperty: "width",
  transform: dn
});
bt({
  prop: "size",
  cssProperty: "height",
  transform: dn
});
const AC = bt({
  prop: "boxSizing"
});
zc(PC, Tp, IC, MC, $C, jC, AC);
const Wc = {
  // borders
  border: {
    themeKey: "borders",
    transform: Tn
  },
  borderTop: {
    themeKey: "borders",
    transform: Tn
  },
  borderRight: {
    themeKey: "borders",
    transform: Tn
  },
  borderBottom: {
    themeKey: "borders",
    transform: Tn
  },
  borderLeft: {
    themeKey: "borders",
    transform: Tn
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
    transform: Tn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Bc
  },
  // palette
  color: {
    themeKey: "palette",
    transform: hi
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: hi
  },
  backgroundColor: {
    themeKey: "palette",
    transform: hi
  },
  // spacing
  p: {
    style: Ct
  },
  pt: {
    style: Ct
  },
  pr: {
    style: Ct
  },
  pb: {
    style: Ct
  },
  pl: {
    style: Ct
  },
  px: {
    style: Ct
  },
  py: {
    style: Ct
  },
  padding: {
    style: Ct
  },
  paddingTop: {
    style: Ct
  },
  paddingRight: {
    style: Ct
  },
  paddingBottom: {
    style: Ct
  },
  paddingLeft: {
    style: Ct
  },
  paddingX: {
    style: Ct
  },
  paddingY: {
    style: Ct
  },
  paddingInline: {
    style: Ct
  },
  paddingInlineStart: {
    style: Ct
  },
  paddingInlineEnd: {
    style: Ct
  },
  paddingBlock: {
    style: Ct
  },
  paddingBlockStart: {
    style: Ct
  },
  paddingBlockEnd: {
    style: Ct
  },
  m: {
    style: wt
  },
  mt: {
    style: wt
  },
  mr: {
    style: wt
  },
  mb: {
    style: wt
  },
  ml: {
    style: wt
  },
  mx: {
    style: wt
  },
  my: {
    style: wt
  },
  margin: {
    style: wt
  },
  marginTop: {
    style: wt
  },
  marginRight: {
    style: wt
  },
  marginBottom: {
    style: wt
  },
  marginLeft: {
    style: wt
  },
  marginX: {
    style: wt
  },
  marginY: {
    style: wt
  },
  marginInline: {
    style: wt
  },
  marginInlineStart: {
    style: wt
  },
  marginInlineEnd: {
    style: wt
  },
  marginBlock: {
    style: wt
  },
  marginBlockStart: {
    style: wt
  },
  marginBlockEnd: {
    style: wt
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
    style: Dc
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
    transform: dn
  },
  maxWidth: {
    style: Tp
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
}, OC = {};
function NC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = OC,
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
      const d = r.breakpoints ?? za, p = z0(d);
      for (const v in c) {
        const u = LC(c[v], r);
        if (u != null) {
          if (typeof u != "object") {
            Eh(p, v, u, r, i);
            continue;
          }
          if (i[v]) {
            Eh(p, v, u, r, i);
            continue;
          }
          tC(d, u) ? Oc(p, t.theme, u, (x, b) => {
            p[x][v] = b;
          }) : (s.sx = u, p[v] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": bh(r, Qd(d, p))
      } : bh(r, Qd(d, p));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const $o = NC();
function Eh(e, t, n, r, o) {
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
    transform: c
  } = i, d = Nc(r, s);
  Oc(e, r, n, (p, v) => {
    const u = B0(d, c, v, t);
    a === !1 ? mi(p ? e[p] : e, u) : p ? e[p][a] = u : e[a] = u;
  });
}
function LC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zC(e, t) {
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
  } = e, l = O0(n), a = F0(o);
  let c = Bt({
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
      ...Uw,
      ...i
    }
  }, s);
  return c = Ww(c), c.applyStyles = zC, c = t.reduce((d, p) => Bt(d, p), c), c.unstable_sxConfig = {
    ...Wc,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, c.unstable_sx = function(p) {
    return $o({
      sx: p,
      theme: this
    });
  }, c.internal_cache = {}, c;
}
function BC(e) {
  return Object.keys(e).length === 0;
}
function Ep(e = null) {
  const t = m.useContext(ol);
  return !t || BC(t) ? e : t;
}
const DC = Uc();
function Hc(e = DC) {
  return Ep(e);
}
function Nu(e) {
  const t = Xr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function _0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Hc(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Nu(typeof s == "function" ? s(o) : s)) : i = Nu(i)), /* @__PURE__ */ f.jsx(I0, {
    styles: i
  });
}
const Rh = (e) => e, FC = () => {
  let e = Rh;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Rh;
    }
  };
}, W0 = FC();
function U0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = U0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function J() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = U0(e)) && (r && (r += " "), r += t);
  return r;
}
function _C(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = M0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })($o);
  return /* @__PURE__ */ m.forwardRef(function(a, c) {
    const d = Hc(n), {
      className: p,
      component: v = "div",
      ...u
    } = a;
    return /* @__PURE__ */ f.jsx(i, {
      as: v,
      ref: c,
      className: J(p, o ? o(r) : r),
      theme: t && d[t] || d,
      ...u
    });
  });
}
const WC = {
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
  const r = WC[t];
  return r ? `${n}-${r}` : `${W0.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = de(e, o, n);
  }), r;
}
function H0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Xr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Xr(o.style));
  }), r;
}
const UC = Uc();
function Lu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function So(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function HC(e) {
  return e ? (t, n) => n[e] : null;
}
function VC(e, t, n) {
  e.theme = L0(e.theme) ? n : e.theme[t] || e.theme;
}
function aa(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => aa(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? So(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? So(Xr(s), n) : s;
    }
    return V0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? So(Xr(r.style), n) : r.style : n ? So(Xr(r), n) : r;
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
    }), n.push(r ? So(Xr(l.style(o)), r) : l.style(o))) : n.push(r ? So(Xr(l.style), r) : l.style);
  }
  return n;
}
function K0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = UC,
    rootShouldForwardProp: r = Lu,
    slotShouldForwardProp: o = Lu
  } = e;
  function i(l) {
    VC(l, t, n);
  }
  return (l, a = {}) => {
    Lw(l, (k) => k.filter((R) => R !== $o));
    const {
      name: c,
      slot: d,
      skipVariantsResolver: p,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: u = HC(GC(d)),
      ...x
    } = a, b = c && c.startsWith("Mui") || d ? "components" : "custom", C = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), y = v || !1;
    let h = Lu;
    d === "Root" || d === "root" ? h = r : d ? h = o : YC(l) && (h = void 0);
    const S = M0(l, {
      shouldForwardProp: h,
      label: KC(),
      ...x
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(T) {
          return aa(T, k, T.theme.modularCssLayers ? b : void 0);
        };
      if (gr(k)) {
        const R = H0(k);
        return function(A) {
          return R.variants ? aa(A, R, A.theme.modularCssLayers ? b : void 0) : A.theme.modularCssLayers ? So(R.style, b) : R.style;
        };
      }
      return k;
    }, E = (...k) => {
      const R = [], T = k.map(w), A = [];
      if (R.push(i), c && u && A.push(function($) {
        var L, M;
        const j = (M = (L = $.theme.components) == null ? void 0 : L[c]) == null ? void 0 : M.styleOverrides;
        if (!j)
          return null;
        const O = {};
        for (const z in j)
          O[z] = aa($, j[z], $.theme.modularCssLayers ? "theme" : void 0);
        return u($, O);
      }), c && !C && A.push(function($) {
        var O, L;
        const P = $.theme, j = (L = (O = P == null ? void 0 : P.components) == null ? void 0 : O[c]) == null ? void 0 : L.variants;
        return j ? V0($, j, [], $.theme.modularCssLayers ? "theme" : void 0) : null;
      }), y || A.push($o), Array.isArray(T[0])) {
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
function KC(e, t) {
  return void 0;
}
function YC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function GC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const XC = K0();
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
function QC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Ys(t.components[n].defaultProps, r);
}
function qC(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Hc(r);
  return o && (i = i[o] || i), QC({
    theme: i,
    name: n,
    props: t
  });
}
const mt = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function ZC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Rp(e, t = 0, n = 1) {
  return ZC(e, t, n);
}
function JC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Jr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Jr(JC(e));
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
const e2 = (e) => {
  const t = Jr(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ss = (e, t) => {
  try {
    return e2(e);
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
function Y0(e) {
  e = Jr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (c, d = (c + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Vc({
    type: l,
    values: a
  });
}
function qd(e) {
  e = Jr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Jr(Y0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function t2(e, t) {
  const n = qd(e), r = qd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Fr(e, t) {
  return e = Jr(e), t = Rp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Vc(e);
}
function lo(e, t, n) {
  try {
    return Fr(e, t);
  } catch {
    return e;
  }
}
function Kc(e, t) {
  if (e = Jr(e), t = Rp(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Vc(e);
}
function Ye(e, t, n) {
  try {
    return Kc(e, t);
  } catch {
    return e;
  }
}
function Yc(e, t) {
  if (e = Jr(e), t = Rp(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Vc(e);
}
function Ge(e, t, n) {
  try {
    return Yc(e, t);
  } catch {
    return e;
  }
}
function Zd(e, t = 0.15) {
  return qd(e) > 0.5 ? Kc(e, t) : Yc(e, t);
}
function Ol(e, t, n) {
  try {
    return Zd(e, t);
  } catch {
    return e;
  }
}
const G0 = /* @__PURE__ */ m.createContext(null);
function Pp() {
  return m.useContext(G0);
}
const n2 = typeof Symbol == "function" && Symbol.for, r2 = n2 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function o2(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function i2(e) {
  const {
    children: t,
    theme: n
  } = e, r = Pp(), o = m.useMemo(() => {
    const i = r === null ? {
      ...n
    } : o2(r, n);
    return i != null && (i[r2] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ f.jsx(G0.Provider, {
    value: o,
    children: t
  });
}
const X0 = /* @__PURE__ */ m.createContext();
function s2({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ f.jsx(X0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const ll = () => m.useContext(X0) ?? !1, Q0 = /* @__PURE__ */ m.createContext(void 0);
function l2({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ f.jsx(Q0.Provider, {
    value: e,
    children: t
  });
}
function a2(e) {
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
function c2({
  props: e,
  name: t
}) {
  const n = m.useContext(Q0);
  return a2({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Ph = 0;
function u2(e) {
  const [t, n] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (Ph += 1, n(`mui-${Ph}`));
  }, [t]), r;
}
const d2 = {
  ...da
}, Ih = d2.useId;
function Tr(e) {
  if (Ih !== void 0) {
    const t = Ih();
    return e ?? t;
  }
  return u2(e);
}
function f2(e) {
  const t = Ep(), n = Tr() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, mt(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ f.jsx(_0, {
    styles: o
  }) : null;
}
const Mh = {};
function $h(e, t, n, r = !1) {
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
function q0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Ep(Mh), i = Pp() || Mh, s = $h(r, o, n), l = $h(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", c = f2(s);
  return /* @__PURE__ */ f.jsx(i2, {
    theme: l,
    children: /* @__PURE__ */ f.jsx(ol.Provider, {
      value: s,
      children: /* @__PURE__ */ f.jsx(s2, {
        value: a,
        children: /* @__PURE__ */ f.jsxs(l2, {
          value: r ? s[r].components : s.components,
          children: [c, t]
        })
      })
    })
  });
}
const jh = {
  theme: void 0
};
function p2(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (jh.theme = o.theme, i = H0(e(jh)), t = i, n = o.theme), i;
  };
}
const Ip = "mode", Mp = "color-scheme", m2 = "data-color-scheme";
function h2(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Ip,
    colorSchemeStorageKey: i = Mp,
    attribute: s = m2,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let c = "", d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const v = d.substring(1);
    c += `${l}.classList.remove('${v}'.replace('%s', light), '${v}'.replace('%s', dark));
      ${l}.classList.add('${v}'.replace('%s', colorScheme));`;
  }
  const p = d.match(/\[([^[\]]+)\]/);
  if (p) {
    const [v, u] = p[1].split("=");
    u || (c += `${l}.removeAttribute('${v}'.replace('%s', light));
      ${l}.removeAttribute('${v}'.replace('%s', dark));`), c += `
      ${l}.setAttribute('${v}'.replace('%s', colorScheme), ${u ? `${u}.replace('%s', colorScheme)` : '""'});`;
  } else d !== ".%s" && (c += `${l}.setAttribute('${d}', colorScheme);`);
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
function g2() {
}
const y2 = ({
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
      return g2;
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
function Ah(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Z0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function v2(e) {
  return Z0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function x2(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Ip,
    colorSchemeStorageKey: s = Mp,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = y2,
    noSsr: c = !1
  } = e, d = o.join(","), p = o.length > 1, v = m.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), u = m.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), x = m.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [b, C] = m.useState(() => {
    const T = (v == null ? void 0 : v.get(t)) || t, A = (u == null ? void 0 : u.get(n)) || n, N = (x == null ? void 0 : x.get(r)) || r;
    return {
      mode: T,
      systemMode: Ah(T),
      lightColorScheme: A,
      darkColorScheme: N
    };
  }), [y, h] = m.useState(c || !p);
  m.useEffect(() => {
    h(!0);
  }, []);
  const S = v2(b), w = m.useCallback((T) => {
    C((A) => {
      if (T === A.mode)
        return A;
      const N = T ?? t;
      return v == null || v.set(N), {
        ...A,
        mode: N,
        systemMode: Ah(N)
      };
    });
  }, [v, t]), E = m.useCallback((T) => {
    T ? typeof T == "string" ? T && !d.includes(T) ? console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`) : C((A) => {
      const N = {
        ...A
      };
      return Z0(A, (I) => {
        I === "light" && (u == null || u.set(T), N.lightColorScheme = T), I === "dark" && (x == null || x.set(T), N.darkColorScheme = T);
      }), N;
    }) : C((A) => {
      const N = {
        ...A
      }, I = T.light === null ? n : T.light, g = T.dark === null ? r : T.dark;
      return I && (d.includes(I) ? (N.lightColorScheme = I, u == null || u.set(I)) : console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`)), g && (d.includes(g) ? (N.darkColorScheme = g, x == null || x.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), N;
    }) : C((A) => (u == null || u.set(n), x == null || x.set(r), {
      ...A,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [d, u, x, n, r]), k = m.useCallback((T) => {
    b.mode === "system" && C((A) => {
      const N = T != null && T.matches ? "dark" : "light";
      return A.systemMode === N ? A : {
        ...A,
        systemMode: N
      };
    });
  }, [b.mode]), R = m.useRef(k);
  return R.current = k, m.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const T = (...N) => R.current(...N), A = window.matchMedia("(prefers-color-scheme: dark)");
    return A.addListener(T), T(A), () => {
      A.removeListener(T);
    };
  }, [p]), m.useEffect(() => {
    if (p) {
      const T = (v == null ? void 0 : v.subscribe((I) => {
        (!I || ["light", "dark", "system"].includes(I)) && w(I || t);
      })) || zu, A = (u == null ? void 0 : u.subscribe((I) => {
        (!I || d.match(I)) && E({
          light: I
        });
      })) || zu, N = (x == null ? void 0 : x.subscribe((I) => {
        (!I || d.match(I)) && E({
          dark: I
        });
      })) || zu;
      return () => {
        T(), A(), N();
      };
    }
  }, [E, w, d, t, l, p, v, u, x]), {
    ...b,
    mode: y ? b.mode : void 0,
    systemMode: y ? b.systemMode : void 0,
    colorScheme: y ? S : void 0,
    setMode: w,
    setColorScheme: E
  };
}
const S2 = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function b2(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Ip,
    colorSchemeStorageKey: o = Mp,
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
  }, c = /* @__PURE__ */ m.createContext(void 0), d = () => m.useContext(c) || a, p = {}, v = {};
  function u(y) {
    var Le, ie, xe, Ue;
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
    } = y, O = m.useRef(!1), L = Pp(), M = m.useContext(c), z = !!M && !I, D = m.useMemo(() => S || (typeof n == "function" ? n() : n), [S]), W = D[t], _ = W || D, {
      colorSchemes: Q = p,
      components: V = v,
      cssVarPrefix: q
    } = _, G = Object.keys(Q).filter((re) => !!Q[re]).join(","), X = m.useMemo(() => G.split(","), [G]), U = typeof s == "string" ? s : s.light, ne = typeof s == "string" ? s : s.dark, oe = Q[U] && Q[ne] ? $ : ((ie = (Le = Q[_.defaultColorScheme]) == null ? void 0 : Le.palette) == null ? void 0 : ie.mode) || ((xe = _.palette) == null ? void 0 : xe.mode), {
      mode: Te,
      setMode: we,
      systemMode: ue,
      lightColorScheme: ae,
      darkColorScheme: $e,
      colorScheme: Ve,
      setColorScheme: Re
    } = x2({
      supportedColorSchemes: X,
      defaultLightColorScheme: U,
      defaultDarkColorScheme: ne,
      modeStorageKey: w,
      colorSchemeStorageKey: E,
      defaultMode: oe,
      storageManager: R,
      storageWindow: T,
      noSsr: j
    });
    let Ne = Te, pe = Ve;
    z && (Ne = M.mode, pe = M.colorScheme);
    let je = pe || _.defaultColorScheme;
    _.vars && !P && (je = _.defaultColorScheme);
    const _e = m.useMemo(() => {
      var Be;
      const re = ((Be = _.generateThemeVars) == null ? void 0 : Be.call(_)) || _.vars, be = {
        ..._,
        components: V,
        colorSchemes: Q,
        cssVarPrefix: q,
        vars: re
      };
      if (typeof be.generateSpacing == "function" && (be.spacing = be.generateSpacing()), je) {
        const ut = Q[je];
        ut && typeof ut == "object" && Object.keys(ut).forEach((Ce) => {
          ut[Ce] && typeof ut[Ce] == "object" ? be[Ce] = {
            ...be[Ce],
            ...ut[Ce]
          } : be[Ce] = ut[Ce];
        });
      }
      return l ? l(be) : be;
    }, [_, je, V, Q, q]), Ae = _.colorSchemeSelector;
    mt(() => {
      if (pe && N && Ae && Ae !== "media") {
        const re = Ae;
        let be = Ae;
        if (re === "class" && (be = ".%s"), re === "data" && (be = "[data-%s]"), re != null && re.startsWith("data-") && !re.includes("%s") && (be = `[${re}="%s"]`), be.startsWith("."))
          N.classList.remove(...X.map((Be) => be.substring(1).replace("%s", Be))), N.classList.add(be.substring(1).replace("%s", pe));
        else {
          const Be = be.replace("%s", pe).match(/\[([^\]]+)\]/);
          if (Be) {
            const [ut, Ce] = Be[1].split("=");
            Ce || X.forEach((Vn) => {
              N.removeAttribute(ut.replace(pe, Vn));
            }), N.setAttribute(ut, Ce ? Ce.replace(/"|'/g, "") : "");
          } else
            N.setAttribute(be, pe);
        }
      }
    }, [pe, Ae, N, X]), m.useEffect(() => {
      let re;
      if (k && O.current && A) {
        const be = A.createElement("style");
        be.appendChild(A.createTextNode(S2)), A.head.appendChild(be), window.getComputedStyle(A.body), re = setTimeout(() => {
          A.head.removeChild(be);
        }, 1);
      }
      return () => {
        clearTimeout(re);
      };
    }, [pe, k, A]), m.useEffect(() => (O.current = !0, () => {
      O.current = !1;
    }), []);
    const ze = m.useMemo(() => ({
      allColorSchemes: X,
      colorScheme: pe,
      darkColorScheme: $e,
      lightColorScheme: ae,
      mode: Ne,
      setColorScheme: Re,
      setMode: we,
      systemMode: ue
    }), [X, pe, $e, ae, Ne, Re, we, ue, _e.colorSchemeSelector]);
    let We = !0;
    (g || _.cssVariables === !1 || z && (L == null ? void 0 : L.cssVarPrefix) === q) && (We = !1);
    const Ze = /* @__PURE__ */ f.jsxs(m.Fragment, {
      children: [/* @__PURE__ */ f.jsx(q0, {
        themeId: W ? t : void 0,
        theme: _e,
        children: h
      }), We && /* @__PURE__ */ f.jsx(I0, {
        styles: ((Ue = _e.generateStyleSheets) == null ? void 0 : Ue.call(_e)) || []
      })]
    });
    return z ? Ze : /* @__PURE__ */ f.jsx(c.Provider, {
      value: ze,
      children: Ze
    });
  }
  const x = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: u,
    useColorScheme: d,
    getInitColorSchemeScript: (y) => h2({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...y
    })
  };
}
function w2(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const C2 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Oh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (C2.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, k2 = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, T2 = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Bu(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return k2(
    e,
    (l, a, c) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, p = T2(l, a);
        Object.assign(o, {
          [d]: p
        }), Oh(i, l, `var(${d})`, c), Oh(s, l, `var(${d}, ${p})`, c);
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
function E2(e, t = {}) {
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
    vars: d,
    css: p,
    varsWithDefaults: v
  } = Bu(c, t);
  let u = v;
  const x = {}, {
    [a]: b,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([w, E]) => {
    const {
      vars: k,
      css: R,
      varsWithDefaults: T
    } = Bu(E, t);
    u = Bt(u, T), x[w] = {
      css: R,
      vars: k
    };
  }), b) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: k
    } = Bu(b, t);
    u = Bt(u, k), x[a] = {
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
    vars: u,
    generateThemeVars: () => {
      let w = {
        ...d
      };
      return Object.entries(x).forEach(([, {
        vars: E
      }]) => {
        w = Bt(w, E);
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
        ...p
      }), p);
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
function R2(e) {
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
function Du(e, t) {
  var n, r, o;
  return /* @__PURE__ */ m.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const P2 = Uc(), I2 = XC("div", {
  name: "MuiStack",
  slot: "Root"
});
function M2(e) {
  return qC({
    props: e,
    name: "MuiStack",
    defaultTheme: P2
  });
}
function $2(e, t) {
  const n = m.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ m.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const j2 = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], A2 = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Zr({
      theme: t
    }, Ou({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Lc(t), o = Object.keys(t.breakpoints.values).reduce((a, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (a[c] = !0), a), {}), i = Ou({
      values: e.direction,
      base: o
    }), s = Ou({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, c, d) => {
      if (!i[a]) {
        const v = c > 0 ? i[d[c - 1]] : "column";
        i[a] = v;
      }
    }), n = Bt(n, Zr({
      theme: t
    }, s, (a, c) => e.useFlexGap ? {
      gap: Mo(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${j2(c ? i[c] : e.direction)}`]: Mo(r, a)
      }
    }));
  }
  return n = Jw(t.breakpoints, n), n;
};
function O2(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = I2,
    useThemeProps: n = M2,
    componentName: r = "MuiStack"
  } = e, o = () => fe({
    root: ["root"]
  }, (a) => de(r, a), {}), i = t(A2);
  return /* @__PURE__ */ m.forwardRef(function(a, c) {
    const d = n(a), {
      component: p = "div",
      direction: v = "column",
      spacing: u = 0,
      divider: x,
      children: b,
      className: C,
      useFlexGap: y = !1,
      ...h
    } = d, S = {
      direction: v,
      spacing: u,
      useFlexGap: y
    }, w = o();
    return /* @__PURE__ */ f.jsx(i, {
      as: p,
      ownerState: S,
      ref: c,
      className: J(w.root, C),
      ...h,
      children: x ? $2(b, x) : b
    });
  });
}
function J0() {
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
const e1 = J0();
function t1() {
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
const Jd = t1();
function Nh(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Yc(e.main, o) : t === "dark" && (e.dark = Kc(e.main, i)));
}
function Lh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function N2(e = "light") {
  return e === "dark" ? {
    main: _o[200],
    light: _o[50],
    dark: _o[400]
  } : {
    main: _o[700],
    light: _o[400],
    dark: _o[800]
  };
}
function L2(e = "light") {
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
function z2(e = "light") {
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
function B2(e = "light") {
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
function D2(e = "light") {
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
function F2(e = "light") {
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
function _2(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function $p(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || N2(t), l = e.secondary || L2(t), a = e.error || z2(t), c = e.info || B2(t), d = e.success || D2(t), p = e.warning || F2(t);
  function v(C) {
    return o ? _2(C) : t2(C, Jd.text.primary) >= n ? Jd.text.primary : e1.text.primary;
  }
  const u = ({
    color: C,
    name: y,
    mainShade: h = 500,
    lightShade: S = 300,
    darkShade: w = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[h] && (C.main = C[h]), !C.hasOwnProperty("main"))
      throw new Error(kr(11, y ? ` (${y})` : "", h));
    if (typeof C.main != "string")
      throw new Error(kr(12, y ? ` (${y})` : "", JSON.stringify(C.main)));
    return o ? (Lh(o, C, "light", S, r), Lh(o, C, "dark", w, r)) : (Nh(C, "light", S, r), Nh(C, "dark", w, r)), C.contrastText || (C.contrastText = v(C.main)), C;
  };
  let x;
  return t === "light" ? x = J0() : t === "dark" && (x = t1()), Bt({
    // A collection of common colors.
    common: {
      ..._s
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: u({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: u({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: u({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: u({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: u({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: u({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: jb,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: v,
    // Generate a rich color object.
    augmentColor: u,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...x
  }, i);
}
function W2(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function U2(e, t) {
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
function H2(e) {
  return Math.round(e * 1e5) / 1e5;
}
const zh = {
  textTransform: "uppercase"
}, Bh = '"Roboto", "Helvetica", "Arial", sans-serif';
function n1(e, t) {
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
    pxToRem: d,
    ...p
  } = typeof t == "function" ? t(e) : t, v = r / 14, u = d || ((C) => `${C / a * v}rem`), x = (C, y, h, S, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: u(y),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Bh ? {
      letterSpacing: `${H2(S / y)}em`
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
    button: x(s, 14, 1.75, 0.4, zh),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, zh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Bt({
    htmlFontSize: a,
    pxToRem: u,
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
const V2 = 0.2, K2 = 0.14, Y2 = 0.12;
function at(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${V2})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${K2})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Y2})`].join(",");
}
const G2 = ["none", at(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), at(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), at(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), at(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), at(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), at(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), at(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), at(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), at(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), at(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), at(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), at(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), at(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), at(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), at(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), at(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), at(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), at(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), at(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), at(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), at(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), at(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), at(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), at(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], X2 = ["all"], Q2 = {}, q2 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Z2 = {
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
function Dh(e) {
  return `${Math.round(e)}ms`;
}
function J2(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ek(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...q2,
    ...t.easing
  }, r = {
    ...Z2,
    ...t.duration
  }, o = (s = X2, l = Q2) => {
    const {
      duration: a = r.standard,
      easing: c = n.easeInOut,
      delay: d = 0,
      ...p
    } = l;
    return (Array.isArray(s) ? s : [s]).map((v) => `${v} ${typeof a == "string" ? a : Dh(a)} ${c} ${typeof d == "string" ? d : Dh(d)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: J2,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const tk = {};
function nk(e = tk) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const rk = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ok(e) {
  return gr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function r1(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !ok(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : gr(l) && (r[s] = {
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
function Fh(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const ik = (e) => {
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
function sk(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Fr(t, ik(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Fh(n)})` : Yc(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Fh(n)})` : Kc(t, n);
    }
  });
}
function ef(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    motion: s = {},
    transitions: l = {},
    typography: a = {},
    shape: c,
    colorSpace: d,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(kr(22));
  const v = $p({
    ...i,
    colorSpace: d
  }), u = Uc(e);
  let x = Bt(u, {
    mixins: U2(u.breakpoints, r),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: G2.slice(),
    typography: n1(v, a),
    motion: nk(s),
    transitions: ek(l),
    zIndex: {
      ...rk
    }
  });
  return x = Bt(x, p), x = t.reduce((b, C) => Bt(b, C), x), delete x.transitions.reducedMotion, x.unstable_sxConfig = {
    ...Wc,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, x.unstable_sx = function(C) {
    return $o({
      sx: C,
      theme: this
    });
  }, x.toRuntimeSource = r1, sk(x), x;
}
function tf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const lk = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = tf(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function o1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function i1(e) {
  return e === "dark" ? lk : [];
}
function ak(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = $p({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...o1(s.mode),
      ...n
    },
    overlays: r || i1(s.mode),
    ...i
  };
}
function ck(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const uk = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], dk = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return uk(e.cssVarPrefix).forEach((l) => {
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
function fk(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function ls(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Y0(e);
}
function fr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ss(ls(e[t])));
}
function pk(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Gn = (e) => {
  try {
    return e();
  } catch {
  }
}, mk = (e = "mui") => w2(e);
function Fu(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = ak({
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
  } = ef({
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
      ...o1(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || i1(i)
  }, l;
}
function hk(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = ck,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...d
  } = e, p = Object.keys(n)[0], v = r || (n.light && p !== "light" ? "light" : p), u = mk(i), {
    [v]: x,
    light: b,
    dark: C,
    ...y
  } = n, h = {
    ...y
  };
  let S = x;
  if ((v === "dark" && !("dark" in n) || v === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(kr(21, v));
  let w;
  s && (w = "oklch");
  const E = Fu(w, h, S, d, v);
  b && !h.light && Fu(w, h, b, void 0, "light"), C && !h.dark && Fu(w, h, C, void 0, "dark");
  let k = {
    defaultColorScheme: v,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: u,
    colorSchemes: h,
    font: {
      ...W2(E.typography),
      ...E.font
    },
    spacing: pk(d.spacing)
  };
  Object.keys(k.colorSchemes).forEach((I) => {
    const g = k.colorSchemes[I].palette, $ = (j) => {
      const O = j.split("-"), L = O[1], M = O[2];
      return u(j, g[L][M]);
    };
    g.mode === "light" && (F(g.common, "background", "#fff"), F(g.common, "onBackground", "#000")), g.mode === "dark" && (F(g.common, "background", "#000"), F(g.common, "onBackground", "#fff"));
    function P(j, O, L) {
      if (w) {
        let M;
        return j === lo && (M = `transparent ${((1 - L) * 100).toFixed(0)}%`), j === Ye && (M = `#000 ${(L * 100).toFixed(0)}%`), j === Ge && (M = `#fff ${(L * 100).toFixed(0)}%`), `color-mix(in ${w}, ${O}, ${M})`;
      }
      return j(O, L);
    }
    if (fk(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      F(g.Alert, "errorColor", P(Ye, s ? u("palette-error-light") : g.error.light, 0.6)), F(g.Alert, "infoColor", P(Ye, s ? u("palette-info-light") : g.info.light, 0.6)), F(g.Alert, "successColor", P(Ye, s ? u("palette-success-light") : g.success.light, 0.6)), F(g.Alert, "warningColor", P(Ye, s ? u("palette-warning-light") : g.warning.light, 0.6)), F(g.Alert, "errorFilledBg", $("palette-error-main")), F(g.Alert, "infoFilledBg", $("palette-info-main")), F(g.Alert, "successFilledBg", $("palette-success-main")), F(g.Alert, "warningFilledBg", $("palette-warning-main")), F(g.Alert, "errorFilledColor", Gn(() => g.getContrastText(g.error.main))), F(g.Alert, "infoFilledColor", Gn(() => g.getContrastText(g.info.main))), F(g.Alert, "successFilledColor", Gn(() => g.getContrastText(g.success.main))), F(g.Alert, "warningFilledColor", Gn(() => g.getContrastText(g.warning.main))), F(g.Alert, "errorStandardBg", P(Ge, s ? u("palette-error-light") : g.error.light, 0.9)), F(g.Alert, "infoStandardBg", P(Ge, s ? u("palette-info-light") : g.info.light, 0.9)), F(g.Alert, "successStandardBg", P(Ge, s ? u("palette-success-light") : g.success.light, 0.9)), F(g.Alert, "warningStandardBg", P(Ge, s ? u("palette-warning-light") : g.warning.light, 0.9)), F(g.Alert, "errorIconColor", $("palette-error-main")), F(g.Alert, "infoIconColor", $("palette-info-main")), F(g.Alert, "successIconColor", $("palette-success-main")), F(g.Alert, "warningIconColor", $("palette-warning-main")), F(g.AppBar, "defaultBg", $("palette-grey-100")), F(g.Avatar, "defaultBg", $("palette-grey-400")), F(g.Button, "inheritContainedBg", $("palette-grey-300")), F(g.Button, "inheritContainedHoverBg", $("palette-grey-A100")), F(g.Chip, "defaultBorder", $("palette-grey-400")), F(g.Chip, "defaultAvatarColor", $("palette-grey-700")), F(g.Chip, "defaultIconColor", $("palette-grey-700")), F(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(g.LinearProgress, "primaryBg", P(Ge, s ? u("palette-primary-main") : g.primary.main, 0.62)), F(g.LinearProgress, "secondaryBg", P(Ge, s ? u("palette-secondary-main") : g.secondary.main, 0.62)), F(g.LinearProgress, "errorBg", P(Ge, s ? u("palette-error-main") : g.error.main, 0.62)), F(g.LinearProgress, "infoBg", P(Ge, s ? u("palette-info-main") : g.info.main, 0.62)), F(g.LinearProgress, "successBg", P(Ge, s ? u("palette-success-main") : g.success.main, 0.62)), F(g.LinearProgress, "warningBg", P(Ge, s ? u("palette-warning-light") : g.warning.main, 0.62)), F(g.Skeleton, "bg", w ? P(lo, s ? u("palette-text-primary") : g.text.primary, 0.11) : `rgba(${$("palette-text-primaryChannel")} / 0.11)`), F(g.Slider, "primaryTrack", P(Ge, s ? u("palette-primary-main") : g.primary.main, 0.62)), F(g.Slider, "secondaryTrack", P(Ge, s ? u("palette-secondary-main") : g.secondary.main, 0.62)), F(g.Slider, "errorTrack", P(Ge, s ? u("palette-error-main") : g.error.main, 0.62)), F(g.Slider, "infoTrack", P(Ge, s ? u("palette-info-main") : g.info.main, 0.62)), F(g.Slider, "successTrack", P(Ge, s ? u("palette-success-main") : g.success.main, 0.62)), F(g.Slider, "warningTrack", P(Ge, s ? u("palette-warning-main") : g.warning.main, 0.62));
      const j = w ? P(Ye, s ? u("palette-background-default") : g.background.default, 0.6825) : Ol(g.background.default, 0.8);
      F(g.SnackbarContent, "bg", j), F(g.SnackbarContent, "color", Gn(() => w ? Jd.text.primary : g.getContrastText(j))), F(g.SpeedDialAction, "fabHoverBg", Ol(g.background.paper, 0.15)), F(g.StepConnector, "border", $("palette-grey-400")), F(g.StepContent, "border", $("palette-grey-400")), F(g.Switch, "defaultColor", $("palette-common-white")), F(g.Switch, "defaultDisabledColor", $("palette-grey-100")), F(g.Switch, "primaryDisabledColor", P(Ge, s ? u("palette-primary-main") : g.primary.main, 0.62)), F(g.Switch, "secondaryDisabledColor", P(Ge, s ? u("palette-secondary-main") : g.secondary.main, 0.62)), F(g.Switch, "errorDisabledColor", P(Ge, s ? u("palette-error-main") : g.error.main, 0.62)), F(g.Switch, "infoDisabledColor", P(Ge, s ? u("palette-info-main") : g.info.main, 0.62)), F(g.Switch, "successDisabledColor", P(Ge, s ? u("palette-success-main") : g.success.main, 0.62)), F(g.Switch, "warningDisabledColor", P(Ge, s ? u("palette-warning-main") : g.warning.main, 0.62)), F(g.TableCell, "border", P(Ge, lo(s ? u("palette-divider") : g.divider, 1), 0.88)), F(g.Tooltip, "bg", P(lo, s ? u("palette-grey-700") : g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      F(g.Alert, "errorColor", P(Ge, s ? u("palette-error-light") : g.error.light, 0.6)), F(g.Alert, "infoColor", P(Ge, s ? u("palette-info-light") : g.info.light, 0.6)), F(g.Alert, "successColor", P(Ge, s ? u("palette-success-light") : g.success.light, 0.6)), F(g.Alert, "warningColor", P(Ge, s ? u("palette-warning-light") : g.warning.light, 0.6)), F(g.Alert, "errorFilledBg", $("palette-error-dark")), F(g.Alert, "infoFilledBg", $("palette-info-dark")), F(g.Alert, "successFilledBg", $("palette-success-dark")), F(g.Alert, "warningFilledBg", $("palette-warning-dark")), F(g.Alert, "errorFilledColor", Gn(() => g.getContrastText(g.error.dark))), F(g.Alert, "infoFilledColor", Gn(() => g.getContrastText(g.info.dark))), F(g.Alert, "successFilledColor", Gn(() => g.getContrastText(g.success.dark))), F(g.Alert, "warningFilledColor", Gn(() => g.getContrastText(g.warning.dark))), F(g.Alert, "errorStandardBg", P(Ye, s ? u("palette-error-light") : g.error.light, 0.9)), F(g.Alert, "infoStandardBg", P(Ye, s ? u("palette-info-light") : g.info.light, 0.9)), F(g.Alert, "successStandardBg", P(Ye, s ? u("palette-success-light") : g.success.light, 0.9)), F(g.Alert, "warningStandardBg", P(Ye, s ? u("palette-warning-light") : g.warning.light, 0.9)), F(g.Alert, "errorIconColor", $("palette-error-main")), F(g.Alert, "infoIconColor", $("palette-info-main")), F(g.Alert, "successIconColor", $("palette-success-main")), F(g.Alert, "warningIconColor", $("palette-warning-main")), F(g.AppBar, "defaultBg", $("palette-grey-900")), F(g.AppBar, "darkBg", $("palette-background-paper")), F(g.AppBar, "darkColor", $("palette-text-primary")), F(g.Avatar, "defaultBg", $("palette-grey-600")), F(g.Button, "inheritContainedBg", $("palette-grey-800")), F(g.Button, "inheritContainedHoverBg", $("palette-grey-700")), F(g.Chip, "defaultBorder", $("palette-grey-700")), F(g.Chip, "defaultAvatarColor", $("palette-grey-300")), F(g.Chip, "defaultIconColor", $("palette-grey-300")), F(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(g.LinearProgress, "primaryBg", P(Ye, s ? u("palette-primary-main") : g.primary.main, 0.5)), F(g.LinearProgress, "secondaryBg", P(Ye, s ? u("palette-secondary-main") : g.secondary.main, 0.5)), F(g.LinearProgress, "errorBg", P(Ye, s ? u("palette-error-main") : g.error.main, 0.5)), F(g.LinearProgress, "infoBg", P(Ye, s ? u("palette-info-main") : g.info.main, 0.5)), F(g.LinearProgress, "successBg", P(Ye, s ? u("palette-success-main") : g.success.main, 0.5)), F(g.LinearProgress, "warningBg", P(Ye, s ? u("palette-warning-main") : g.warning.main, 0.5)), F(g.Skeleton, "bg", w ? P(lo, s ? u("palette-text-primary") : g.text.primary, 0.13) : `rgba(${$("palette-text-primaryChannel")} / 0.13)`), F(g.Slider, "primaryTrack", P(Ye, s ? u("palette-primary-main") : g.primary.main, 0.5)), F(g.Slider, "secondaryTrack", P(Ye, s ? u("palette-secondary-main") : g.secondary.main, 0.5)), F(g.Slider, "errorTrack", P(Ye, s ? u("palette-error-main") : g.error.main, 0.5)), F(g.Slider, "infoTrack", P(Ye, s ? u("palette-info-main") : g.info.main, 0.5)), F(g.Slider, "successTrack", P(Ye, s ? u("palette-success-main") : g.success.main, 0.5)), F(g.Slider, "warningTrack", P(Ye, s ? u("palette-warning-light") : g.warning.main, 0.5));
      const j = w ? P(Ge, s ? u("palette-background-default") : g.background.default, 0.985) : Ol(g.background.default, 0.98);
      F(g.SnackbarContent, "bg", j), F(g.SnackbarContent, "color", Gn(() => w ? e1.text.primary : g.getContrastText(j))), F(g.SpeedDialAction, "fabHoverBg", Ol(g.background.paper, 0.15)), F(g.StepConnector, "border", $("palette-grey-600")), F(g.StepContent, "border", $("palette-grey-600")), F(g.Switch, "defaultColor", $("palette-grey-300")), F(g.Switch, "defaultDisabledColor", $("palette-grey-600")), F(g.Switch, "primaryDisabledColor", P(Ye, s ? u("palette-primary-main") : g.primary.main, 0.55)), F(g.Switch, "secondaryDisabledColor", P(Ye, s ? u("palette-secondary-main") : g.secondary.main, 0.55)), F(g.Switch, "errorDisabledColor", P(Ye, s ? u("palette-error-main") : g.error.main, 0.55)), F(g.Switch, "infoDisabledColor", P(Ye, s ? u("palette-info-main") : g.info.main, 0.55)), F(g.Switch, "successDisabledColor", P(Ye, s ? u("palette-success-main") : g.success.main, 0.55)), F(g.Switch, "warningDisabledColor", P(Ye, s ? u("palette-warning-light") : g.warning.main, 0.55)), F(g.TableCell, "border", P(Ye, lo(s ? u("palette-divider") : g.divider, 1), 0.68)), F(g.Tooltip, "bg", P(lo, s ? u("palette-grey-700") : g.grey[700], 0.92));
    }
    s || (fr(g.background, "default"), fr(g.background, "paper"), fr(g.common, "background"), fr(g.common, "onBackground"), fr(g, "divider")), Object.keys(g).forEach((j) => {
      const O = g[j];
      j !== "tonalOffset" && !s && O && typeof O == "object" && (O.main && F(g[j], "mainChannel", ss(ls(O.main))), O.light && F(g[j], "lightChannel", ss(ls(O.light))), O.dark && F(g[j], "darkChannel", ss(ls(O.dark))), O.contrastText && F(g[j], "contrastTextChannel", ss(ls(O.contrastText))), j === "text" && (fr(g[j], "primary"), fr(g[j], "secondary")), j === "action" && (O.active && fr(g[j], "active"), O.selected && fr(g[j], "selected")));
    });
  }), k = t.reduce((I, g) => Bt(I, g), k);
  const R = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: dk(k),
    enableContrastVars: s
  }, {
    vars: T,
    generateThemeVars: A,
    generateStyleSheets: N
  } = E2(k, R);
  return k.vars = T, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([I, g]) => {
    k[I] = g;
  }), k.generateThemeVars = A, k.generateStyleSheets = N, k.generateSpacing = function() {
    return F0(d.spacing, Lc(this));
  }, k.getColorSchemeSelector = R2(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Wc,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, k.unstable_sx = function(g) {
    return $o({
      sx: g,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = r1, k;
}
function _h(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: $p({
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
      return ef(e, ...t);
    let d = n;
    "palette" in e || c[l] && (c[l] !== !0 ? d = c[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const p = ef({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = c, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...c.light !== !0 && c.light,
      palette: p.palette
    }, _h(p, "dark", c.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...c.dark !== !0 && c.dark,
      palette: p.palette
    }, _h(p, "light", c.light)), p;
  }
  return !n && !("light" in c) && l === "light" && (c.light = !0), hk({
    ...s,
    colorSchemes: c,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Da(e) {
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
function st(...e) {
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
function tt(e) {
  const t = m.useRef(e);
  return mt(() => {
    t.current = e;
  }), m.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function yt(e) {
  return e && e.ownerDocument || document;
}
function gn(e) {
  return yt(e).defaultView || window;
}
function Nl(e) {
  return parseInt(e, 10) || 0;
}
const gk = {
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
function yk(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Wh(e) {
  return yk(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const vk = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: c
  } = m.useRef(l != null), d = m.useRef(null), p = st(n, d), v = m.useRef(null), u = m.useRef(null), x = m.useCallback(() => {
    const S = d.current, w = u.current;
    if (!S || !w)
      return;
    const k = gn(S).getComputedStyle(S);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = S.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const R = k.boxSizing, T = Nl(k.paddingBottom) + Nl(k.paddingTop), A = Nl(k.borderBottomWidth) + Nl(k.borderTopWidth), N = w.scrollHeight;
    w.value = "x";
    const I = w.scrollHeight;
    let g = N;
    i && (g = Math.max(Number(i) * I, g)), o && (g = Math.min(Number(o) * I, g)), g = Math.max(g, I);
    const $ = g + (R === "border-box" ? T + A : 0), P = Math.abs(g - N) <= 1;
    return {
      outerHeightStyle: $,
      overflowing: P
    };
  }, [o, i, t.placeholder]), b = tt(() => {
    const S = d.current, w = x();
    if (!S || !w || Wh(w))
      return !1;
    const E = w.outerHeightStyle;
    return v.current != null && v.current !== E;
  }), C = m.useCallback(() => {
    const S = d.current, w = x();
    if (!S || !w || Wh(w))
      return;
    const E = w.outerHeightStyle;
    v.current !== E && (v.current = E, S.style.height = `${E}px`), S.style.overflow = w.overflowing ? "hidden" : "";
  }, [x]), y = m.useRef(-1);
  mt(() => {
    const S = al(C), w = d == null ? void 0 : d.current;
    if (!w)
      return;
    const E = gn(w);
    E.addEventListener("resize", S);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(w), cancelAnimationFrame(y.current), C(), y.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      S.clear(), cancelAnimationFrame(y.current), E.removeEventListener("resize", S), k && k.disconnect();
    };
  }, [x, C, b]), mt(() => {
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
      ref: u,
      tabIndex: -1,
      style: {
        ...gk.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), cl = /* @__PURE__ */ m.createContext(void 0);
function xk() {
  return m.useContext(cl);
}
function Ni({
  props: e,
  states: t
}) {
  const n = m.useContext(cl), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const jp = Gc();
function ur() {
  const e = Hc(jp);
  return e[ir] || e;
}
function Sk(e) {
  return /* @__PURE__ */ f.jsx(_0, {
    ...e,
    defaultTheme: jp,
    themeId: ir
  });
}
function s1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const an = (e) => s1(e) && e !== "classes", H = K0({
  themeId: ir,
  defaultTheme: jp,
  rootShouldForwardProp: an
});
function bk(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ f.jsx(Sk, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const Se = p2;
function he(e) {
  return c2(e);
}
function tr(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Uh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Fa(e, t = !1) {
  return e && (Uh(e.value) && e.value !== "" || t && Uh(e.defaultValue) && e.defaultValue !== "");
}
function wk(e) {
  return e.startAdornment;
}
function Ck(e) {
  return de("MuiInputBase", e);
}
const un = ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), kk = {
  transition: "none"
};
function Tk(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Xc = (e) => e.scrollTop, _u = {
  offsetX: 0,
  offsetY: 0
}, l1 = {}, Ek = ["all"], Rk = {}, Pk = {
  matrix: [4, 5],
  matrix3d: [12, 13],
  translate: [0, 1],
  translate3d: [0, 1],
  translateX: [0, null],
  translateY: [null, 0]
};
function Ik(e) {
  const t = parseFloat(e ?? "");
  return Number.isNaN(t) ? 0 : t;
}
function Mk(e) {
  const t = e.match(/^(matrix|matrix3d|translate|translate3d|translateX|translateY)\((.+)\)$/);
  return t ? {
    type: t[1],
    values: t[2].split(",").map(Ik)
  } : null;
}
function Hh(e, t) {
  return t === null ? 0 : e[t] || 0;
}
function $k(e) {
  if (!e || e === "none")
    return _u;
  const t = Mk(e);
  if (!t)
    return _u;
  const {
    type: n,
    values: r
  } = t, o = Pk[n];
  return o ? {
    offsetX: Hh(r, o[0]),
    offsetY: Hh(r, o[1])
  } : _u;
}
function Mt(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function a1(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function Ti(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = l1
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Ap(e, t) {
  var r;
  const n = t ?? kk;
  return Tk((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function St(e, t = Ek, n = Rk) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = Ap(e);
  if (r === void 0)
    return o ?? l1;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Vh;
const nf = "mui-auto-fill", _a = "mui-auto-fill-cancel", Qc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${se(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, qc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, jk = (e) => {
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
    multiline: d,
    readOnly: p,
    size: v,
    startAdornment: u,
    type: x
  } = e, b = {
    root: ["root", `color${se(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", v && v !== "medium" && `size${se(v)}`, d && "multiline", u && "adornedStart", i && "adornedEnd", c && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", x === "search" && "inputTypeSearch", p && "readOnly"]
  };
  return fe(b, Ck, t);
}, Zc = H("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Qc
})(Se(({
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
}))), Jc = H("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: qc
})(Se(({
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
        animationName: _a,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: nf
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
})), Kh = bk({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${nf}`]: {
    from: {
      animationName: nf
    }
  },
  [`@keyframes ${_a}`]: {
    from: {
      animationName: _a
    }
  }
}), Op = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    "aria-label": i,
    autoComplete: s,
    autoFocus: l,
    className: a,
    color: c,
    defaultValue: d,
    disabled: p,
    disableInjectingGlobalStyles: v,
    endAdornment: u,
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
    slotProps: D = {},
    slots: W = {},
    startAdornment: _,
    type: Q = "text",
    value: V,
    ...q
  } = r, G = h.value != null ? h.value : V, {
    current: X
  } = m.useRef(G != null), U = m.useRef(), ne = m.useCallback((re) => {
  }, []), oe = st(U, S, h.ref, ne), [Te, we] = m.useState(!1), [ue, ae] = Ni({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ue.focused = ae ? ae.focused : Te, m.useEffect(() => {
    !ae && p && Te && (we(!1), A && A());
  }, [ae, p, Te, A]);
  const $e = ae && ae.onFilled, Ve = ae && ae.onEmpty, Re = m.useCallback((re) => {
    Fa(re) ? $e && $e() : Ve && Ve();
  }, [$e, Ve]);
  mt(() => {
    X && Re({
      value: G
    });
  }, [G, Re, X]), mt(() => {
    if (!l)
      return;
    const re = U.current;
    if (!re)
      return;
    const be = yt(re), Be = tr(be), ut = Be == null || Be === be.body || Be === be.documentElement;
    re === Be ? ae && ae.onFocus ? ae.onFocus() : we(!0) : ut && re.focus();
  }, [l]);
  const Ne = (re) => {
    g && g(re), h.onFocus && h.onFocus(re), ae && ae.onFocus ? ae.onFocus(re) : we(!0);
  }, pe = (re) => {
    A && A(re), h.onBlur && h.onBlur(re), ae && ae.onBlur ? ae.onBlur(re) : we(!1);
  }, je = (re, ...be) => {
    if (!X) {
      const Be = re.target || U.current;
      if (Be == null)
        throw new Error(kr(1));
      Re({
        value: Be.value
      });
    }
    h.onChange && h.onChange(re, ...be), N && N(re, ...be);
  };
  m.useEffect(() => {
    Re(U.current);
  }, []);
  const _e = (re) => {
    U.current && re.currentTarget === re.target && U.current.focus(), I && I(re);
  };
  let Ae = y, ze = h;
  R && Ae === "input" && (M ? ze = {
    type: void 0,
    minRows: M,
    maxRows: M,
    ...ze
  } : ze = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...ze
  }, Ae = vk);
  const We = (re) => {
    Re(re.animationName === _a ? U.current : {
      value: "x"
    });
  };
  m.useEffect(() => {
    ae && ae.setAdornedStart(!!_);
  }, [ae, _]);
  const Ze = {
    ...r,
    color: ue.color || "primary",
    disabled: ue.disabled,
    endAdornment: u,
    error: ue.error,
    focused: ue.focused,
    formControl: ae,
    fullWidth: b,
    hiddenLabel: ue.hiddenLabel,
    multiline: R,
    size: ue.size,
    startAdornment: _,
    type: Q
  }, Le = jk(Ze), ie = W.root || Zc, xe = D.root || {}, Ue = W.input || Jc;
  return ze = {
    ...ze,
    ...D.input
  }, /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [!v && typeof Kh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Vh || (Vh = /* @__PURE__ */ f.jsx(Kh, {}))), /* @__PURE__ */ f.jsxs(ie, {
      ...xe,
      ref: n,
      onClick: _e,
      ...q,
      ...!Da(ie) && {
        ownerState: {
          ...Ze,
          ...xe.ownerState
        }
      },
      className: J(Le.root, xe.className, a, O && "MuiInputBase-readOnly"),
      children: [_, /* @__PURE__ */ f.jsx(cl.Provider, {
        value: null,
        children: /* @__PURE__ */ f.jsx(Ue, {
          "aria-invalid": ue.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: d,
          disabled: ue.disabled,
          id: C,
          onAnimationStart: We,
          name: T,
          placeholder: j,
          readOnly: O,
          required: ue.required,
          rows: M,
          value: G,
          onKeyDown: $,
          onKeyUp: P,
          type: Q,
          ...ze,
          ...!Da(Ue) && {
            as: Ae,
            ownerState: {
              ...Ze,
              ...ze.ownerState
            }
          },
          ref: oe,
          className: J(Le.input, ze.className, O && "MuiInputBase-readOnly"),
          onBlur: pe,
          onChange: je,
          onFocus: Ne
        })
      }), u, L ? L({
        ...ue,
        startAdornment: _
      }) : null]
    })]
  });
});
function Ak(e) {
  return de("MuiFilledInput", e);
}
const ao = {
  ...un,
  ...ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function Ok(e) {
  return de("MuiFormHelperText", e);
}
const Yh = ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function Nk(e) {
  return de("MuiFormLabel", e);
}
const ys = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function Lk(e) {
  return de("MuiInput", e);
}
const Xi = {
  ...un,
  ...ce("MuiInput", ["root", "underline", "input"])
};
function zk(e) {
  return de("MuiMenuItem", e);
}
const Qi = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function Bk(e) {
  return de("MuiNativeSelect", e);
}
const Np = ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function Dk(e) {
  return de("MuiOutlinedInput", e);
}
const Xn = {
  ...un,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function Fk({
  theme: e,
  ...t
}) {
  const n = ir in e ? e[ir] : void 0;
  return /* @__PURE__ */ f.jsx(q0, {
    ...t,
    themeId: n ? ir : void 0,
    theme: n || e
  });
}
const Ll = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: _k
} = b2({
  themeId: ir,
  // @ts-ignore ignore module augmentation tests
  theme: () => Gc({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ll.colorSchemeStorageKey,
  modeStorageKey: Ll.modeStorageKey,
  defaultColorScheme: {
    light: Ll.defaultLightColorScheme,
    dark: Ll.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: n1(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return $o({
        sx: r,
        theme: this
      });
    }, t;
  }
}), Wk = _k;
function Uk({
  theme: e,
  ...t
}) {
  const n = m.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = ir in e ? e[ir] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ f.jsx(Fk, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ f.jsx(Wk, {
    theme: e,
    ...t
  });
}
function Gh(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Hk(e) {
  return de("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Vk = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${se(t)}`, `fontSize${se(n)}`]
  };
  return fe(o, Hk, r);
}, Kk = H("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${se(n.color)}`], t[`fontSize${se(n.fontSize)}`]];
  }
})(Se(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, c, d, p, v;
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
        props: (u) => !u.hasSvgAsChild,
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
      ...Object.entries((e.vars ?? e).palette).filter(([, u]) => u && u.main).map(([u]) => {
        var x, b;
        return {
          props: {
            color: u
          },
          style: {
            color: (b = (x = (e.vars ?? e).palette) == null ? void 0 : x[u]) == null ? void 0 : b.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (d = (c = (e.vars ?? e).palette) == null ? void 0 : c.action) == null ? void 0 : d.active
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
})), rf = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: a = "medium",
    htmlColor: c,
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: v = "0 0 24 24",
    ...u
  } = r, x = /* @__PURE__ */ m.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: v,
    hasSvgAsChild: x
  }, C = {};
  d || (C.viewBox = v);
  const y = Vk(b);
  return /* @__PURE__ */ f.jsxs(Kk, {
    as: l,
    className: J(y.root, i),
    focusable: "false",
    color: c,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...C,
    ...u,
    ...x && o.props,
    ownerState: b,
    children: [x ? o.props.children : o, p ? /* @__PURE__ */ f.jsx("title", {
      children: p
    }) : null]
  });
});
rf.muiName = "SvgIcon";
function nt(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ f.jsx(rf, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = rf.muiName, /* @__PURE__ */ m.memo(/* @__PURE__ */ m.forwardRef(n));
}
function of(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function sf(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = m.useRef(t !== void 0), [s, l] = m.useState(n), a = i ? t : s, c = m.useCallback((d) => {
    i || l(d);
  }, []);
  return [a, c];
}
function c1(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function u1(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((c) => {
      c1(c, l[c]) && typeof s[c] == "function" && (a[c] = (...d) => {
        s[c](...d), l[c](...d);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, c = J(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), d = n(a, l);
      return {
        ...l,
        ...a,
        ...d,
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
const Xh = {};
function Lp(e, t) {
  const n = m.useRef(Xh);
  return n.current === Xh && (n.current = e(t)), n;
}
function Yk(e) {
  const t = Lp(() => Gk(e)).current;
  return t.next = e, mt(t.effect), t;
}
function Gk(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Qh = ly.createContext(null);
function Xk(e) {
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
function Qk(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = Xk(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function zp(e) {
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
    getAutoTimeout: d,
    nodeRef: p,
    onEnter: v,
    onEntering: u,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: y,
    children: h,
    ...S
  } = e, w = m.useContext(Qh), E = w && !w.isMounting ? r : n, [k, R] = m.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), T = m.useRef(k);
  T.current = k, t && k === "unmounted" && (T.current = "exited", R("exited"));
  const A = m.useRef(t && E), N = m.useRef(!1), I = m.useRef(null), g = m.useRef(k), $ = m.useRef(!1), P = m.useRef(c), j = Yk({
    timeout: l,
    addEndListener: a,
    reduceMotion: c,
    getAutoTimeout: d,
    onEnter: v,
    onEntering: u,
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
  }), O = m.useCallback(() => {
    I.current !== null && (I.current.cancel(), I.current = null);
  }, []), L = m.useCallback((_) => {
    let Q = !0;
    const V = () => {
      Q && (Q = !1, I.current = null, _());
    };
    return V.cancel = () => {
      Q = !1;
    }, I.current = V, V;
  }, []), M = m.useCallback((_, Q) => {
    var Ve, Re;
    let V;
    const q = () => {
      V !== void 0 && (clearTimeout(V), V = void 0);
    }, G = L(() => {
      q(), T.current = _, R(_);
    }), X = G.cancel;
    G.cancel = () => {
      q(), X();
    };
    const U = j.current.nodeRef.current, ne = j.current.addEndListener, oe = j.current.getAutoTimeout !== void 0, Te = (Re = (Ve = j.current).getAutoTimeout) == null ? void 0 : Re.call(Ve), we = Qk({
      currentStatus: Q,
      isAppearing: $.current,
      timeout: j.current.timeout,
      autoTimeout: Te
    }), ue = P.current, ae = we ?? (ue && oe ? 0 : null), $e = (Ne) => {
      V = setTimeout(G, Ne);
    };
    if (!U) {
      $e(0);
      return;
    }
    if (ne) {
      ae != null && $e(ue ? 0 : ae), ne.length >= 2 ? ne(U, G) : ne(G);
      return;
    }
    $e(ue ? 0 : we ?? 0);
  }, [L, j]), z = m.useCallback((_) => {
    var q;
    const Q = j.current, V = Q.parentGroup ? Q.parentGroup.isMounting : _;
    if ($.current = V, !_ && !Q.enter) {
      T.current = "entered", R("entered");
      return;
    }
    P.current = Q.reduceMotion, (q = Q.onEnter) == null || q.call(Q, V), T.current = "entering", R("entering");
  }, [j]), D = m.useCallback(() => {
    var Q;
    const _ = j.current;
    if (!_.exit) {
      T.current = "exited", R("exited");
      return;
    }
    P.current = _.reduceMotion, (Q = _.onExit) == null || Q.call(_), T.current = "exiting", R("exiting");
  }, [j]), W = m.useCallback((_, Q) => {
    if (O(), Q === "entering") {
      const V = j.current;
      if (V.mountOnEnter || V.unmountOnExit) {
        const q = V.nodeRef.current;
        q && Xc(q);
      }
      z(_);
    } else
      D();
  }, [O, z, D, j]);
  return mt(() => (N.current = !0, A.current && (A.current = !1, W(!0, "entering")), () => {
    N.current = !1, O();
  }), [O, W]), mt(() => {
    if (!N.current)
      return;
    const _ = T.current;
    t ? _ !== "entering" && _ !== "entered" && W(!1, "entering") : _ === "entering" || _ === "entered" ? W(!1, "exiting") : _ === "exited" && s && (T.current = "unmounted", R("unmounted"));
  }, [t, k, s, W]), mt(() => {
    var q, G, X, U;
    if (k === "unmounted" || g.current === "unmounted") {
      g.current = k;
      return;
    }
    const Q = g.current !== k;
    Q && (g.current = k);
    const V = j.current;
    k === "entering" ? (Q && ((q = V.onEntering) == null || q.call(V, $.current)), I.current === null && T.current === k && M("entered", "entering")) : k === "exiting" ? (Q && ((G = V.onExiting) == null || G.call(V)), I.current === null && T.current === k && M("exited", "exiting")) : k === "entered" && Q ? (X = V.onEntered) == null || X.call(V, $.current) : k === "exited" && Q && ((U = V.onExited) == null || U.call(V));
  }, [j, M, k]), k === "unmounted" ? null : /* @__PURE__ */ f.jsx(Qh.Provider, {
    value: null,
    children: h(k, S)
  });
}
const d1 = "(prefers-reduced-motion: reduce)", qk = 0, Zk = "0ms", Jk = () => {
}, qh = () => !1, eT = () => !0, tT = () => Jk;
function nT(e) {
  const [t, n] = m.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), mt(() => {
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
    const i = window.matchMedia(d1), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const rT = {
  ...da
}, f1 = rT.useSyncExternalStore;
function oT(e) {
  const t = e ? eT : qh, [n, r] = m.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [qh, tT];
    const o = window.matchMedia(d1);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return f1(r, n, t);
}
const iT = f1 !== void 0 ? oT : nT;
function ul(e, t) {
  const n = iT(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return m.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: qk,
        delay: Zk
      } : o;
    }
  }), [r]);
}
function p1(e, t, n) {
  return e === void 0 || Da(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function m1(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Wa(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    c1(n, e[n]) && (t[n] = e[n]);
  return t;
}
function Zh(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function h1(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const u = J(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), x = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, b = {
      ...n,
      ...o,
      ...r
    };
    return u.length > 0 && (b.className = u), Object.keys(x).length > 0 && (b.style = x), {
      props: b,
      internalRef: void 0
    };
  }
  const s = Wa({
    ...o,
    ...r
  }), l = Zh(r), a = Zh(o), c = t(s), d = J(c == null ? void 0 : c.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
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
  return d.length > 0 && (v.className = d), Object.keys(p).length > 0 && (v.style = p), {
    props: v,
    internalRef: c.ref
  };
}
function ye(e, t) {
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
    slots: d = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...v
  } = i, u = d[e] || r, x = m1(p[e], o), {
    props: {
      component: b,
      ...C
    },
    internalRef: y
  } = h1({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: x
  }), h = st(y, x == null ? void 0 : x.ref, t.ref), S = e === "root" ? b || c : b, w = p1(u, {
    ...e === "root" && !c && !d[e] && s,
    ...e !== "root" && !d[e] && s,
    ...C,
    ...S && !l && {
      as: S
    },
    ...S && l && {
      component: S
    },
    ref: h
  }, o);
  return [u, w];
}
function sT(e) {
  return de("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const lT = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return fe(i, sT, o);
}, aT = H("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Se(({
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
}))), ar = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var u;
  const r = he({
    props: t,
    name: "MuiPaper"
  }), o = ur(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: c = "elevation",
    ...d
  } = r, p = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: c
  }, v = lT(p);
  return /* @__PURE__ */ f.jsx(aT, {
    as: s,
    ownerState: p,
    className: J(v.root, i),
    ref: n,
    ...d,
    style: {
      ...c === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (u = o.vars.overlays) == null ? void 0 : u[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Fr("#fff", tf(l))}, ${Fr("#fff", tf(l))})`
        }
      },
      ...d.style
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
function cT(e) {
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
      onKeyDown(d) {
        n && t && d.key !== "Tab" && d.preventDefault();
      }
    };
    return r || (c.tabIndex = o, !i && n && (c.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (c["aria-disabled"] = n), i && (!t || l) && (c.disabled = n), c;
  }, [r, n, t, s, l, i, o]);
}
const uT = {};
function dT(e) {
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
  } = e, d = m.useRef(null), p = s === !0, v = cT({
    focusableWhenDisabled: p,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), u = m.useCallback(() => {
    const C = d.current;
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
    getButtonProps: m.useCallback((C = uT) => {
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
          if (p && v.onKeyDown(T), !n && (a == null || a(T), h == null || h(T), !(T.target !== T.currentTarget || u()))) {
            if (T.key === " ") {
              T.preventDefault();
              return;
            }
            T.key === "Enter" && (T.preventDefault(), T.currentTarget.click());
          }
        },
        onKeyUp: (T) => {
          n || (c == null || c(T), S == null || S(T), T.target === T.currentTarget && !u() && T.key === " " && !T.defaultPrevented && T.currentTarget.click());
        }
      };
    }, [x, n, p, v, u, a, c, l]),
    rootRef: d
  };
}
class Ha {
  constructor() {
    Bi(this, "mountEffect", () => {
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
    const t = Lp(Ha.create).current, [n, r] = m.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, m.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = pT(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function fT() {
  return Ha.use();
}
function pT() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const mT = [];
function g1(e) {
  m.useEffect(e, mT);
}
class eu {
  constructor() {
    Bi(this, "currentId", null);
    Bi(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Bi(this, "disposeEffect", () => this.clear);
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
function nr() {
  const e = Lp(eu.create).current;
  return g1(e.disposeEffect), e;
}
function hT(e) {
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
  } = e, [d, p] = m.useState(!1), v = nr(), u = m.useRef(!1), x = m.useRef(a);
  x.current = a;
  const b = a != null, C = J(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, h = J(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && p(!0), m.useEffect(() => {
    !l && b ? u.current || (u.current = !0, v.start(c, () => {
      var S;
      u.current = !1, (S = x.current) == null || S.call(x);
    })) : (u.current = !1, v.clear());
  }, [v, b, l, c]), /* @__PURE__ */ f.jsx("span", {
    className: C,
    style: y,
    children: /* @__PURE__ */ f.jsx("span", {
      className: h
    })
  });
}
const Gt = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), lf = 550, gT = 80, zl = {}, Jh = [], yT = () => {
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
function vT({
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
const xT = il`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ST = il`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, bT = il`
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
function wT(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = Vs`
    &.${Gt.rippleVisible} {
      animation-name: ${xT};
      animation-duration: ${lf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Gt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Gt.childLeaving} {
      animation-name: ${ST};
      animation-duration: ${lf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Gt.childPulsate} {
      animation-name: ${bT};
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
const CT = H("span", {
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
}), kT = H(hT, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Gt.rippleVisible} {
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
  & .${Gt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Gt.childLeaving} {
    opacity: 0;
  }

  & .${Gt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => wT(e)}
`, TT = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTouchRipple"
  }), o = ur(), i = ul(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = zl,
    className: a,
    ...c
  } = r, [d, p] = m.useState({
    items: Jh,
    order: Jh
  }), v = d.items, u = m.useRef(0), x = m.useRef(null), b = m.useRef(!1);
  g1(() => (b.current = !0, () => {
    b.current = !1;
  })), m.useEffect(() => {
    x.current && (x.current(), x.current = null);
  }, [v]);
  const C = m.useRef(!1), y = nr(), h = m.useRef(null), S = m.useRef(null), w = tt((I) => {
    b.current && p((g) => {
      const $ = g.items.filter((j) => j.key !== I), P = Wu(g.order.filter((j) => j !== I), $.filter((j) => !j.exiting).map((j) => j.key));
      return {
        items: $,
        order: P
      };
    });
  }), E = tt((I) => {
    const {
      pulsate: g,
      rippleX: $,
      rippleY: P,
      rippleSize: j,
      cb: O
    } = I, L = u.current;
    u.current += 1, p((M) => {
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
        order: Wu(M.order, z.filter((D) => !D.exiting).map((D) => D.key))
      };
    }), x.current = O;
  }), k = tt((I = zl, g = zl, $ = yT) => {
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
      rippleSize: D
    } = vT({
      event: I,
      element: L,
      center: j
    });
    I != null && I.touches ? h.current === null && (h.current = () => {
      E({
        pulsate: P,
        rippleX: M,
        rippleY: z,
        rippleSize: D,
        cb: $
      });
    }, y.start(gT, () => {
      h.current && (h.current(), h.current = null);
    })) : E({
      pulsate: P,
      rippleX: M,
      rippleY: z,
      rippleSize: D,
      cb: $
    });
  }), R = tt(() => {
    k(zl, {
      pulsate: !0
    });
  }), T = tt((I, g) => {
    if (y.clear(), (I == null ? void 0 : I.type) === "touchend" && h.current) {
      h.current(), h.current = null, y.start(0, () => {
        T(I, g);
      });
      return;
    }
    h.current = null, p(($) => {
      const P = $.items.findIndex((O) => !O.exiting);
      if (P === -1)
        return $;
      const j = $.items.slice();
      return j[P] = {
        ...j[P],
        exiting: !0
      }, {
        items: j,
        order: Wu($.order, j.filter((O) => !O.exiting).map((O) => O.key))
      };
    }), x.current = g;
  });
  m.useImperativeHandle(n, () => ({
    pulsate: R,
    start: k,
    stop: T
  }), [R, k, T]);
  const A = new Map(v.map((I) => [I.key, I])), N = d.order.map((I) => A.get(I)).filter(Boolean);
  return /* @__PURE__ */ f.jsx(CT, {
    className: J(Gt.root, l.root, a),
    ref: S,
    ...c,
    children: N.map((I) => /* @__PURE__ */ f.jsx(kT, {
      classes: {
        ripple: J(l.ripple, Gt.ripple),
        rippleVisible: J(l.rippleVisible, Gt.rippleVisible),
        ripplePulsate: J(l.ripplePulsate, Gt.ripplePulsate),
        child: J(l.child, Gt.child),
        childLeaving: J(l.childLeaving, Gt.childLeaving),
        childPulsate: J(l.childPulsate, Gt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : lf,
      pulsate: I.pulsate,
      rippleX: I.rippleX,
      rippleY: I.rippleY,
      rippleSize: I.rippleSize,
      in: !I.exiting,
      onExited: () => w(I.key)
    }, I.key))
  });
});
function ET(e) {
  return de("MuiButtonBase", e);
}
const RT = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), PT = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = fe({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, ET, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, IT = H("button", {
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
  [`&.${RT.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), jo = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: a = "button",
    disabled: c = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: v = !1,
    focusVisibleClassName: u,
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
    type: D,
    ...W
  } = r, _ = !!(W.href || W.to), Q = !!W.formAction;
  let V = a;
  V === "button" && _ && (V = y);
  const G = h ?? (typeof V == "string" ? V === "button" : C ?? !1), X = fT(), U = st(X.ref, z), [ne, oe] = m.useState(!1);
  (c || b) && ne && oe(!1);
  const Te = tt((Ce) => {
    v && !Ce.repeat && ne && Ce.key === " " && X.stop(Ce, () => {
      X.start(Ce);
    });
  }), we = tt((Ce) => {
    v && Ce.key === " " && ne && !Ce.defaultPrevented && X.stop(Ce, () => {
      X.pulsate(Ce);
    });
  }), {
    getButtonProps: ue,
    rootRef: ae
  } = dT({
    nativeButton: G,
    disabled: c,
    type: D,
    hasFormAction: Q,
    tabIndex: L,
    onBeforeKeyDown: Te,
    onBeforeKeyUp: we
  }), {
    onClick: $e,
    onKeyDown: Ve,
    onKeyUp: Re,
    ...Ne
  } = ue({
    onClick: w,
    onKeyDown: A,
    onKeyUp: N
  });
  m.useImperativeHandle(o, () => ({
    focusVisible: () => {
      oe(!0), ae.current.focus();
    }
  }), [ae]);
  const pe = X.shouldMount && !d && !c;
  m.useEffect(() => {
    ne && v && !d && X.pulsate();
  }, [d, v, ne, X]);
  const je = pr(X, "start", I, p), _e = pr(X, "stop", E, p), Ae = pr(X, "stop", k, p), ze = pr(X, "stop", $, p), We = pr(X, "stop", (Ce) => {
    ne && Ce.preventDefault(), g && g(Ce);
  }, p), Ze = pr(X, "start", O, p), Le = pr(X, "stop", P, p), ie = pr(X, "stop", j, p), xe = pr(X, "stop", (Ce) => {
    Ua(Ce.target) || oe(!1), S && S(Ce);
  }, !1), Ue = tt((Ce) => {
    ae.current || (ae.current = Ce.currentTarget), !b && Ua(Ce.target) && (oe(!0), T && T(Ce)), R && R(Ce);
  }), re = {};
  _ && (re.tabIndex = c ? -1 : L, c && (re["aria-disabled"] = c), re.type = D);
  const be = st(n, ae), Be = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: c,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: v,
    suppressFocusVisible: b,
    tabIndex: L,
    focusVisible: ne
  }, ut = PT(Be);
  return /* @__PURE__ */ f.jsxs(IT, {
    as: V,
    className: J(ut.root, l),
    ownerState: Be,
    onBlur: xe,
    onClick: $e,
    onContextMenu: _e,
    onFocus: Ue,
    onKeyDown: Ve,
    onKeyUp: Re,
    onMouseDown: je,
    onMouseLeave: We,
    onMouseUp: ze,
    onDragLeave: Ae,
    onTouchEnd: Le,
    onTouchMove: ie,
    onTouchStart: Ze,
    ref: be,
    ..._ ? re : Ne,
    ...W,
    children: [s, pe ? /* @__PURE__ */ f.jsx(TT, {
      ref: U,
      center: i,
      ...M
    }) : null]
  });
});
function pr(e, t, n, r = !1) {
  return tt((o) => (n && n(o), r || e[t](o), !0));
}
function MT(e) {
  return typeof e.main == "string";
}
function $T(e, t = []) {
  if (!MT(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Xt(e = []) {
  return ([, t]) => t && $T(t, e);
}
function jT(e) {
  return de("MuiAlert", e);
}
const eg = ce("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function AT(e) {
  return de("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Ln = 44, af = il`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, cf = il`
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
`, OT = typeof af != "string" ? Vs`
        animation: ${af} 1.4s linear infinite;
      ` : null, NT = typeof cf != "string" ? Vs`
        animation: ${cf} 1.4s ease-in-out infinite;
      ` : null, LT = (e) => {
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
  return fe(i, AT, t);
}, zT = H("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${se(n.color)}`]];
  }
})(Se(({
  theme: e
}) => {
  const t = Ap(e, {
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
      style: OT || {
        animation: `${af} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Xt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), BT = H("svg", {
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
})(Se(({
  theme: e
}) => {
  const t = Ap(e, {
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
      style: NT || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${cf} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), FT = H("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(Se(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), ii = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    enableTrackSlot: l = !1,
    min: a,
    max: c,
    size: d = 40,
    style: p,
    thickness: v = 3.6,
    value: u = r.min ?? 0,
    variant: x = "indeterminate",
    ...b
  } = r, C = a ?? 0, y = c ?? 100, h = {
    ...r,
    color: i,
    disableShrink: s,
    size: d,
    thickness: v,
    value: u,
    variant: x,
    enableTrackSlot: l
  }, S = LT(h), w = {}, E = {}, k = {};
  if (x === "determinate") {
    const R = 2 * Math.PI * ((Ln - v) / 2), T = y - C;
    w.strokeDasharray = R.toFixed(3), w.strokeDashoffset = T > 0 ? `${((y - u) / T * R).toFixed(3)}px` : `${R.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = u, k["aria-valuemin"] = C, k["aria-valuemax"] = y;
  }
  return /* @__PURE__ */ f.jsx(zT, {
    className: J(S.root, o),
    style: {
      width: d,
      height: d,
      ...E,
      ...p
    },
    ownerState: h,
    ref: n,
    role: "progressbar",
    ...k,
    ...b,
    children: /* @__PURE__ */ f.jsxs(BT, {
      className: S.svg,
      ownerState: h,
      viewBox: `${Ln / 2} ${Ln / 2} ${Ln} ${Ln}`,
      children: [l ? /* @__PURE__ */ f.jsx(FT, {
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
function _T(e) {
  return de("MuiIconButton", e);
}
const tg = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), WT = (e) => {
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
  return fe(l, _T, t);
}, UT = H(jo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${se(n.color)}`], n.edge && t[`edge${se(n.edge)}`], t[`size${se(n.size)}`]];
  }
})(Se(({
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
})), Se(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Xt()).map(([t]) => ({
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
  [`&.${tg.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${tg.loading}`]: {
    color: "transparent"
  }
}))), HT = H("span", {
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
})), Bn = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: l = "default",
    disabled: a = !1,
    disableFocusRipple: c = !1,
    size: d = "medium",
    id: p,
    loading: v = null,
    loadingIndicator: u,
    ...x
  } = r, b = Tr(p), C = u ?? /* @__PURE__ */ f.jsx(ii, {
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
    size: d
  }, h = WT(y);
  return /* @__PURE__ */ f.jsxs(UT, {
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
      children: /* @__PURE__ */ f.jsx(HT, {
        className: h.loadingIndicator,
        ownerState: y,
        children: v && C
      })
    }), i]
  });
}), VT = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), KT = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), YT = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), GT = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), XT = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), QT = (e) => {
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
  return fe(i, jT, o);
}, qT = H(ar, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})(Se(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, n = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(Xt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${eg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Xt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${eg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Xt(["dark"])).map(([r]) => ({
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
})), ZT = H("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), JT = H("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), eE = H("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), ng = {
  success: /* @__PURE__ */ f.jsx(VT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ f.jsx(KT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ f.jsx(YT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ f.jsx(GT, {
    fontSize: "inherit"
  })
}, Uu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    icon: c,
    iconMapping: d = ng,
    onClose: p,
    role: v = "alert",
    severity: u = "success",
    slotProps: x = {},
    slots: b = {},
    variant: C = "standard",
    ...y
  } = r, h = {
    ...r,
    color: a,
    severity: u,
    variant: C,
    colorSeverity: a || u
  }, S = QT(h), w = {
    slots: b,
    slotProps: x
  }, [E, k] = ye("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: J(S.root, s),
    elementType: qT,
    externalForwardedProps: {
      ...w,
      ...y
    },
    ownerState: h,
    additionalProps: {
      role: v,
      elevation: 0
    }
  }), [R, T] = ye("icon", {
    className: S.icon,
    elementType: ZT,
    externalForwardedProps: w,
    ownerState: h
  }), [A, N] = ye("message", {
    className: S.message,
    elementType: JT,
    externalForwardedProps: w,
    ownerState: h
  }), [I, g] = ye("action", {
    className: S.action,
    elementType: eE,
    externalForwardedProps: w,
    ownerState: h
  }), [$, P] = ye("closeButton", {
    elementType: Bn,
    externalForwardedProps: w,
    ownerState: h
  }), [j, O] = ye("closeIcon", {
    elementType: XT,
    externalForwardedProps: w,
    ownerState: h
  });
  return /* @__PURE__ */ f.jsxs(E, {
    ...k,
    children: [c !== !1 ? /* @__PURE__ */ f.jsx(R, {
      ...T,
      children: c || d[u] || ng[u]
    }) : null, /* @__PURE__ */ f.jsx(A, {
      ...N,
      children: i
    }), o != null ? /* @__PURE__ */ f.jsx(I, {
      ...g,
      children: o
    }) : null, o == null && p ? /* @__PURE__ */ f.jsx(I, {
      ...g,
      children: /* @__PURE__ */ f.jsx($, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: p,
        ...P,
        children: /* @__PURE__ */ f.jsx(j, {
          fontSize: "small",
          ...O
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
    root: ["root", o, e.align !== "inherit" && `align${se(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return fe(s, tE, i);
}, rE = H("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${se(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(Se(({
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
    })), ...Object.entries(e.palette).filter(Xt()).map(([n]) => ({
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
})), rg = {
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
}, ke = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTypography"
  }), {
    color: o,
    align: i = "inherit",
    className: s,
    component: l,
    gutterBottom: a = !1,
    noWrap: c = !1,
    variant: d = "body1",
    variantMapping: p = rg,
    ...v
  } = r, u = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: c,
    variant: d,
    variantMapping: p
  }, x = l || p[d] || rg[d] || "span", b = nE(u);
  return /* @__PURE__ */ f.jsx(rE, {
    as: x,
    ref: n,
    className: J(b.root, s),
    ...v,
    ownerState: u,
    style: {
      ...i !== "inherit" && {
        "--Typography-textAlign": i
      },
      ...v.style
    }
  });
});
function Co(e, t) {
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
var on = "top", $n = "bottom", jn = "right", sn = "left", Bp = "auto", dl = [on, $n, jn, sn], Ei = "start", Gs = "end", oE = "clippingParents", y1 = "viewport", qi = "popper", iE = "reference", og = /* @__PURE__ */ dl.reduce(function(e, t) {
  return e.concat([t + "-" + Ei, t + "-" + Gs]);
}, []), v1 = /* @__PURE__ */ [].concat(dl, [Bp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ei, t + "-" + Gs]);
}, []), sE = "beforeRead", lE = "read", aE = "afterRead", cE = "beforeMain", uE = "main", dE = "afterMain", fE = "beforeWrite", pE = "write", mE = "afterWrite", hE = [sE, lE, aE, cE, uE, dE, fE, pE, mE];
function cr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function yn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ao(e) {
  var t = yn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Pn(e) {
  var t = yn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Dp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = yn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function gE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Pn(i) || !cr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
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
      !Pn(o) || !cr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
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
function lr(e) {
  return e.split("-")[0];
}
var ko = Math.max, Va = Math.min, Ri = Math.round;
function uf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function x1() {
  return !/^((?!chrome|android).)*safari/i.test(uf());
}
function Pi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Pn(e) && (o = e.offsetWidth > 0 && Ri(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ri(r.height) / e.offsetHeight || 1);
  var s = Ao(e) ? yn(e) : window, l = s.visualViewport, a = !x1() && n, c = (r.left + (a && l ? l.offsetLeft : 0)) / o, d = (r.top + (a && l ? l.offsetTop : 0)) / i, p = r.width / o, v = r.height / i;
  return {
    width: p,
    height: v,
    top: d,
    right: c + p,
    bottom: d + v,
    left: c,
    x: c,
    y: d
  };
}
function Fp(e) {
  var t = Pi(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function S1(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Dp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Er(e) {
  return yn(e).getComputedStyle(e);
}
function xE(e) {
  return ["table", "td", "th"].indexOf(cr(e)) >= 0;
}
function ro(e) {
  return ((Ao(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function tu(e) {
  return cr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Dp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ro(e)
  );
}
function ig(e) {
  return !Pn(e) || // https://github.com/popperjs/popper-core/issues/837
  Er(e).position === "fixed" ? null : e.offsetParent;
}
function SE(e) {
  var t = /firefox/i.test(uf()), n = /Trident/i.test(uf());
  if (n && Pn(e)) {
    var r = Er(e);
    if (r.position === "fixed")
      return null;
  }
  var o = tu(e);
  for (Dp(o) && (o = o.host); Pn(o) && ["html", "body"].indexOf(cr(o)) < 0; ) {
    var i = Er(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function fl(e) {
  for (var t = yn(e), n = ig(e); n && xE(n) && Er(n).position === "static"; )
    n = ig(n);
  return n && (cr(n) === "html" || cr(n) === "body" && Er(n).position === "static") ? t : n || SE(e) || t;
}
function _p(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vs(e, t, n) {
  return ko(e, Va(t, n));
}
function bE(e, t, n) {
  var r = vs(e, t, n);
  return r > n ? n : r;
}
function b1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function w1(e) {
  return Object.assign({}, b1(), e);
}
function C1(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var wE = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, w1(typeof t != "number" ? t : C1(t, dl));
};
function CE(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = lr(n.placement), a = _p(l), c = [sn, jn].indexOf(l) >= 0, d = c ? "height" : "width";
  if (!(!i || !s)) {
    var p = wE(o.padding, n), v = Fp(i), u = a === "y" ? on : sn, x = a === "y" ? $n : jn, b = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], C = s[a] - n.rects.reference[a], y = fl(i), h = y ? a === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, S = b / 2 - C / 2, w = p[u], E = h - v[d] - p[x], k = h / 2 - v[d] / 2 + S, R = vs(w, k, E), T = a;
    n.modifiersData[r] = (t = {}, t[T] = R, t.centerOffset = R - k, t);
  }
}
function kE(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || S1(t.elements.popper, o) && (t.elements.arrow = o));
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
function Ii(e) {
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
    x: Ri(n * o) / o || 0,
    y: Ri(r * o) / o || 0
  };
}
function sg(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, p = e.isFixed, v = s.x, u = v === void 0 ? 0 : v, x = s.y, b = x === void 0 ? 0 : x, C = typeof d == "function" ? d({
    x: u,
    y: b
  }) : {
    x: u,
    y: b
  };
  u = C.x, b = C.y;
  var y = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), S = sn, w = on, E = window;
  if (c) {
    var k = fl(n), R = "clientHeight", T = "clientWidth";
    if (k === yn(n) && (k = ro(n), Er(k).position !== "static" && l === "absolute" && (R = "scrollHeight", T = "scrollWidth")), k = k, o === on || (o === sn || o === jn) && i === Gs) {
      w = $n;
      var A = p && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      b -= A - r.height, b *= a ? 1 : -1;
    }
    if (o === sn || (o === on || o === $n) && i === Gs) {
      S = jn;
      var N = p && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      u -= N - r.width, u *= a ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: l
  }, c && EE), g = d === !0 ? RE({
    x: u,
    y: b
  }, yn(n)) : {
    x: u,
    y: b
  };
  if (u = g.x, b = g.y, a) {
    var $;
    return Object.assign({}, I, ($ = {}, $[w] = h ? "0" : "", $[S] = y ? "0" : "", $.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + b + "px)" : "translate3d(" + u + "px, " + b + "px, 0)", $));
  }
  return Object.assign({}, I, (t = {}, t[w] = h ? b + "px" : "", t[S] = y ? u + "px" : "", t.transform = "", t));
}
function PE(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: lr(t.placement),
    variation: Ii(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, sg(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, sg(Object.assign({}, c, {
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
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = yn(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, Bl);
  }), l && a.addEventListener("resize", n.update, Bl), function() {
    i && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Bl);
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
function lg(e) {
  return e.replace(/start|end/g, function(t) {
    return AE[t];
  });
}
function Wp(e) {
  var t = yn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Up(e) {
  return Pi(ro(e)).left + Wp(e).scrollLeft;
}
function OE(e, t) {
  var n = yn(e), r = ro(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = x1();
    (c || !c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Up(e),
    y: a
  };
}
function NE(e) {
  var t, n = ro(e), r = Wp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = ko(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = ko(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Up(e), a = -r.scrollTop;
  return Er(o || n).direction === "rtl" && (l += ko(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Hp(e) {
  var t = Er(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function k1(e) {
  return ["html", "body", "#document"].indexOf(cr(e)) >= 0 ? e.ownerDocument.body : Pn(e) && Hp(e) ? e : k1(tu(e));
}
function xs(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = k1(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = yn(r), s = o ? [i].concat(i.visualViewport || [], Hp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(xs(tu(s)))
  );
}
function df(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function LE(e, t) {
  var n = Pi(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ag(e, t, n) {
  return t === y1 ? df(OE(e, n)) : Ao(t) ? LE(t, n) : df(NE(ro(e)));
}
function zE(e) {
  var t = xs(tu(e)), n = ["absolute", "fixed"].indexOf(Er(e).position) >= 0, r = n && Pn(e) ? fl(e) : e;
  return Ao(r) ? t.filter(function(o) {
    return Ao(o) && S1(o, r) && cr(o) !== "body";
  }) : [];
}
function BE(e, t, n, r) {
  var o = t === "clippingParents" ? zE(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, c) {
    var d = ag(e, c, r);
    return a.top = ko(d.top, a.top), a.right = Va(d.right, a.right), a.bottom = Va(d.bottom, a.bottom), a.left = ko(d.left, a.left), a;
  }, ag(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function T1(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? lr(r) : null, i = r ? Ii(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case on:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case $n:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case jn:
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
  var c = o ? _p(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (i) {
      case Ei:
        a[c] = a[c] - (t[d] / 2 - n[d] / 2);
        break;
      case Gs:
        a[c] = a[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return a;
}
function Xs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? oE : l, c = n.rootBoundary, d = c === void 0 ? y1 : c, p = n.elementContext, v = p === void 0 ? qi : p, u = n.altBoundary, x = u === void 0 ? !1 : u, b = n.padding, C = b === void 0 ? 0 : b, y = w1(typeof C != "number" ? C : C1(C, dl)), h = v === qi ? iE : qi, S = e.rects.popper, w = e.elements[x ? h : v], E = BE(Ao(w) ? w : w.contextElement || ro(e.elements.popper), a, d, s), k = Pi(e.elements.reference), R = T1({
    reference: k,
    element: S,
    placement: o
  }), T = df(Object.assign({}, S, R)), A = v === qi ? T : k, N = {
    top: E.top - A.top + y.top,
    bottom: A.bottom - E.bottom + y.bottom,
    left: E.left - A.left + y.left,
    right: A.right - E.right + y.right
  }, I = e.modifiersData.offset;
  if (v === qi && I) {
    var g = I[o];
    Object.keys(N).forEach(function($) {
      var P = [jn, $n].indexOf($) >= 0 ? 1 : -1, j = [on, $n].indexOf($) >= 0 ? "y" : "x";
      N[$] += g[j] * P;
    });
  }
  return N;
}
function DE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? v1 : a, d = Ii(r), p = d ? l ? og : og.filter(function(x) {
    return Ii(x) === d;
  }) : dl, v = p.filter(function(x) {
    return c.indexOf(x) >= 0;
  });
  v.length === 0 && (v = p);
  var u = v.reduce(function(x, b) {
    return x[b] = Xs(e, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[lr(b)], x;
  }, {});
  return Object.keys(u).sort(function(x, b) {
    return u[x] - u[b];
  });
}
function FE(e) {
  if (lr(e) === Bp)
    return [];
  var t = ca(e);
  return [lg(e), t, lg(t)];
}
function _E(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, c = n.padding, d = n.boundary, p = n.rootBoundary, v = n.altBoundary, u = n.flipVariations, x = u === void 0 ? !0 : u, b = n.allowedAutoPlacements, C = t.options.placement, y = lr(C), h = y === C, S = a || (h || !x ? [ca(C)] : FE(C)), w = [C].concat(S).reduce(function(V, q) {
      return V.concat(lr(q) === Bp ? DE(t, {
        placement: q,
        boundary: d,
        rootBoundary: p,
        padding: c,
        flipVariations: x,
        allowedAutoPlacements: b
      }) : q);
    }, []), E = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), T = !0, A = w[0], N = 0; N < w.length; N++) {
      var I = w[N], g = lr(I), $ = Ii(I) === Ei, P = [on, $n].indexOf(g) >= 0, j = P ? "width" : "height", O = Xs(t, {
        placement: I,
        boundary: d,
        rootBoundary: p,
        altBoundary: v,
        padding: c
      }), L = P ? $ ? jn : sn : $ ? $n : on;
      E[j] > k[j] && (L = ca(L));
      var M = ca(L), z = [];
      if (i && z.push(O[g] <= 0), l && z.push(O[L] <= 0, O[M] <= 0), z.every(function(V) {
        return V;
      })) {
        A = I, T = !1;
        break;
      }
      R.set(I, z);
    }
    if (T)
      for (var D = x ? 3 : 1, W = function(q) {
        var G = w.find(function(X) {
          var U = R.get(X);
          if (U)
            return U.slice(0, q).every(function(ne) {
              return ne;
            });
        });
        if (G)
          return A = G, "break";
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
function cg(e, t, n) {
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
function ug(e) {
  return [on, jn, $n, sn].some(function(t) {
    return e[t] >= 0;
  });
}
function UE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Xs(t, {
    elementContext: "reference"
  }), l = Xs(t, {
    altBoundary: !0
  }), a = cg(s, r), c = cg(l, o, i), d = ug(a), p = ug(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
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
  var r = lr(e), o = [sn, on].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [sn, jn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function KE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = v1.reduce(function(d, p) {
    return d[p] = VE(p, t.rects, i), d;
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
  t.modifiersData[n] = T1({
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
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.padding, v = n.tether, u = v === void 0 ? !0 : v, x = n.tetherOffset, b = x === void 0 ? 0 : x, C = Xs(t, {
    boundary: a,
    rootBoundary: c,
    padding: p,
    altBoundary: d
  }), y = lr(t.placement), h = Ii(t.placement), S = !h, w = _p(y), E = QE(w), k = t.modifiersData.popperOffsets, R = t.rects.reference, T = t.rects.popper, A = typeof b == "function" ? b(Object.assign({}, t.rects, {
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
      var $, P = w === "y" ? on : sn, j = w === "y" ? $n : jn, O = w === "y" ? "height" : "width", L = k[w], M = L + C[P], z = L - C[j], D = u ? -T[O] / 2 : 0, W = h === Ei ? R[O] : T[O], _ = h === Ei ? -T[O] : -R[O], Q = t.elements.arrow, V = u && Q ? Fp(Q) : {
        width: 0,
        height: 0
      }, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : b1(), G = q[P], X = q[j], U = vs(0, R[O], V[O]), ne = S ? R[O] / 2 - D - U - G - N.mainAxis : W - U - G - N.mainAxis, oe = S ? -R[O] / 2 + D + U + X + N.mainAxis : _ + U + X + N.mainAxis, Te = t.elements.arrow && fl(t.elements.arrow), we = Te ? w === "y" ? Te.clientTop || 0 : Te.clientLeft || 0 : 0, ue = ($ = I == null ? void 0 : I[w]) != null ? $ : 0, ae = L + ne - ue - we, $e = L + oe - ue, Ve = vs(u ? Va(M, ae) : M, L, u ? ko(z, $e) : z);
      k[w] = Ve, g[w] = Ve - L;
    }
    if (l) {
      var Re, Ne = w === "x" ? on : sn, pe = w === "x" ? $n : jn, je = k[E], _e = E === "y" ? "height" : "width", Ae = je + C[Ne], ze = je - C[pe], We = [on, sn].indexOf(y) !== -1, Ze = (Re = I == null ? void 0 : I[E]) != null ? Re : 0, Le = We ? Ae : je - R[_e] - T[_e] - Ze + N.altAxis, ie = We ? je + R[_e] + T[_e] - Ze - N.altAxis : ze, xe = u && We ? bE(Le, je, ie) : vs(u ? Le : Ae, je, u ? ie : ze);
      k[E] = xe, g[E] = xe - je;
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
  return e === yn(e) || !Pn(e) ? Wp(e) : JE(e);
}
function tR(e) {
  var t = e.getBoundingClientRect(), n = Ri(t.width) / e.offsetWidth || 1, r = Ri(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function nR(e, t, n) {
  n === void 0 && (n = !1);
  var r = Pn(t), o = Pn(t) && tR(t), i = ro(t), s = Pi(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((cr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Hp(i)) && (l = eR(t)), Pn(t) ? (a = Pi(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Up(i))), {
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
var dg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function fg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function lR(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? dg : o;
  return function(l, a, c) {
    c === void 0 && (c = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, dg, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, p = [], v = !1, u = {
      state: d,
      setOptions: function(y) {
        var h = typeof y == "function" ? y(d.options) : y;
        b(), d.options = Object.assign({}, i, d.options, h), d.scrollParents = {
          reference: Ao(l) ? xs(l) : l.contextElement ? xs(l.contextElement) : [],
          popper: xs(a)
        };
        var S = oR(sR([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = S.filter(function(w) {
          return w.enabled;
        }), x(), u.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var y = d.elements, h = y.reference, S = y.popper;
          if (fg(h, S)) {
            d.rects = {
              reference: nR(h, fl(S), d.options.strategy === "fixed"),
              popper: Fp(S)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(N) {
              return d.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var w = 0; w < d.orderedModifiers.length; w++) {
              if (d.reset === !0) {
                d.reset = !1, w = -1;
                continue;
              }
              var E = d.orderedModifiers[w], k = E.fn, R = E.options, T = R === void 0 ? {} : R, A = E.name;
              typeof k == "function" && (d = k({
                state: d,
                options: T,
                name: A,
                instance: u
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: iR(function() {
        return new Promise(function(C) {
          u.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!fg(l, a))
      return u;
    u.setOptions(c).then(function(C) {
      !v && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function x() {
      d.orderedModifiers.forEach(function(C) {
        var y = C.name, h = C.options, S = h === void 0 ? {} : h, w = C.effect;
        if (typeof w == "function") {
          var E = w({
            state: d,
            name: y,
            instance: u,
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
    return u;
  };
}
var aR = [$E, XE, IE, vE, YE, WE, ZE, TE, HE], cR = /* @__PURE__ */ lR({
  defaultModifiers: aR
});
function Mi(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : m1(n, r), {
    props: l,
    internalRef: a
  } = h1({
    ...i,
    externalSlotProps: s
  }), c = st(a, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return p1(t, {
    ...l,
    ref: c
  }, r);
}
function oo(e) {
  var t;
  return parseInt(m.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function uR(e) {
  return typeof e == "function" ? e() : e;
}
const E1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = m.useState(null), a = st(/* @__PURE__ */ m.isValidElement(r) ? oo(r) : null, n);
  if (mt(() => {
    i || l(uR(o) || document.body);
  }, [o, i]), mt(() => {
    if (s && !i)
      return of(n, s), () => {
        of(n, null);
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
  return s && /* @__PURE__ */ u0.createPortal(r, s);
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
function R1(e) {
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
    popperOptions: d,
    popperRef: p,
    slotProps: v = {},
    slots: u = {},
    TransitionProps: x,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, y = m.useRef(null), h = st(y, n), S = m.useRef(null), w = st(S, p), E = m.useRef(w);
  mt(() => {
    E.current = w;
  }, [w]), m.useImperativeHandle(p, () => S.current, []);
  const k = fR(c, i), [R, T] = m.useState(k), A = m.useMemo(() => R1(r), [r]);
  m.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), mt(() => {
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
    l != null && (j = j.concat(l)), d && d.modifiers != null && (j = j.concat(d.modifiers));
    const O = cR(A, y.current, {
      placement: k,
      ...d,
      modifiers: j
    });
    E.current(O);
    const L = y.current;
    return () => {
      if (L) {
        const {
          style: M
        } = L, z = M.position, D = M.top, W = M.left, _ = M.transform;
        O.destroy(), M.position = z, M.top = D, M.left = W, M.transform = _;
      } else
        O.destroy();
      E.current(null);
    };
  }, [A, s, l, a, d, k]);
  const N = {
    placement: R
  };
  x !== null && (N.TransitionProps = x);
  const I = mR(t), g = u.root ?? "div", $ = Mi({
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
    ...$,
    children: typeof o == "function" ? o(N) : o
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
    open: d,
    placement: p = "bottom",
    popperOptions: v = hR,
    popperRef: u,
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
  if (!a && !d && (!b || S))
    return null;
  let R;
  if (i)
    R = i;
  else if (r) {
    const N = R1(r);
    R = N && pR(N) ? yt(N).body : yt(null).body;
  }
  const T = !d && a && (!b || S) ? "none" : void 0, A = b ? {
    in: d,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ f.jsx(E1, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ f.jsx(gR, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: c,
      ref: n,
      open: b ? !S : d,
      placement: p,
      popperOptions: v,
      popperRef: u,
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
})({}), P1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = ll(), o = he({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: d,
    open: p,
    placement: v,
    popperOptions: u,
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
    modifiers: d,
    open: p,
    placement: v,
    popperOptions: u,
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
}), xR = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function SR(e) {
  return de("MuiChip", e);
}
const He = ce("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), bR = (e) => {
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
  return fe(a, SR, t);
}, wR = H("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => an(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
    }, t.root, t[`size${se(s)}`], t[`color${se(r)}`], o && t.clickable, i && t.deletable, t[l]];
  }
})(Se(({
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
    }, ...Object.entries(e.palette).filter(Xt(["contrastText"])).map(([n]) => ({
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
      style: {
        [`&.${He.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(Xt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
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
        [`&.${He.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Xt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${He.focusVisible}`]: {
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
        [`&.${He.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${He.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
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
    }, ...Object.entries(e.palette).filter(Xt()).map(([n]) => ({
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
        [`&.${He.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
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
function pg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Ho = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: s,
    color: l = "default",
    component: a,
    deleteIcon: c,
    disabled: d = !1,
    icon: p,
    label: v,
    onClick: u,
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
  } = R, N = m.useRef(null), I = st(N, n), g = (U) => {
    U.stopPropagation(), x(U);
  }, $ = (U) => {
    U.currentTarget === U.target && pg(U) && U.preventDefault(), b && b(U);
  }, P = (U) => {
    U.currentTarget === U.target && x && pg(U) && x(U), C && C(U);
  }, j = s !== !1 && u ? !0 : s, O = j || x ? jo : a || "div", L = {
    ...r,
    component: O,
    disabled: d,
    size: y,
    color: l,
    iconColor: /* @__PURE__ */ m.isValidElement(p) && p.props.color || l,
    onDelete: !!x,
    clickable: j,
    variant: h
  }, M = bR(L), z = O === jo ? {
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
  let D = null;
  x && (D = c && /* @__PURE__ */ m.isValidElement(c) ? /* @__PURE__ */ m.cloneElement(c, {
    className: J(c.props.className, M.deleteIcon),
    onClick: g
  }) : /* @__PURE__ */ f.jsx(xR, {
    className: M.deleteIcon,
    onClick: g
  }));
  let W = null;
  o && /* @__PURE__ */ m.isValidElement(o) && (W = /* @__PURE__ */ m.cloneElement(o, {
    className: J(M.avatar, o.props.className)
  }));
  let _ = null;
  p && /* @__PURE__ */ m.isValidElement(p) && (_ = /* @__PURE__ */ m.cloneElement(p, {
    className: J(M.icon, p.props.className)
  }));
  const Q = {
    slots: E,
    slotProps: k
  }, [V, q] = ye("root", {
    elementType: wR,
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
      disabled: j && d ? !0 : void 0,
      tabIndex: w && d ? -1 : S,
      ...z
    },
    getSlotProps: (U) => ({
      ...U,
      onClick: (ne) => {
        var oe;
        (oe = U.onClick) == null || oe.call(U, ne), u == null || u(ne);
      },
      onKeyDown: (ne) => {
        var oe;
        (oe = U.onKeyDown) == null || oe.call(U, ne), $(ne);
      },
      onKeyUp: (ne) => {
        var oe;
        (oe = U.onKeyUp) == null || oe.call(U, ne), P(ne);
      }
    })
  }), [G, X] = ye("label", {
    elementType: CR,
    externalForwardedProps: Q,
    ownerState: L,
    className: M.label
  });
  return /* @__PURE__ */ f.jsxs(V, {
    as: O,
    ...q,
    children: [W || _, /* @__PURE__ */ f.jsx(G, {
      ...X,
      children: v
    }), D]
  });
}), kR = nt(/* @__PURE__ */ f.jsx("path", {
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
}, I1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = ur(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: c,
    in: d,
    onEnter: p,
    onEntered: v,
    onEntering: u,
    onExit: x,
    onExited: b,
    onExiting: C,
    style: y,
    timeout: h = o,
    ...S
  } = t, w = ul(r.motion.reducedMotion, a), E = m.useRef(null), k = st(E, oo(l), n), R = Mt(E, u), T = Mt(E, (P, j) => {
    w.shouldReduceMotion || Xc(P);
    const O = Ti({
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
    }), p && p(P, j);
  }), A = Mt(E, v), N = Mt(E, C), I = Mt(E, (P) => {
    const j = Ti({
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
  }), g = Mt(E, (P) => {
    P.style.transition = "", b && b(P);
  }), $ = i ? (P) => {
    i(E.current, P);
  } : void 0;
  return /* @__PURE__ */ f.jsx(zp, {
    appear: s,
    in: d,
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
      const L = a1(P, d, TR, ER, y, l.props.style);
      return /* @__PURE__ */ m.cloneElement(l, {
        style: L,
        ref: k,
        ...O
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
}), M1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: l = !1,
    open: a,
    slotProps: c = {},
    slots: d = {},
    transitionDuration: p,
    ...v
  } = r, u = {
    ...r,
    component: s,
    invisible: l
  }, x = PR(u), b = {
    component: s,
    slots: d,
    slotProps: c
  }, [C, y] = ye("root", {
    elementType: IR,
    externalForwardedProps: b,
    className: J(x.root, i),
    ownerState: u
  }), [h, S] = ye("transition", {
    elementType: I1,
    externalForwardedProps: b,
    ownerState: u
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
}), MR = ce("MuiBox", ["root"]), $R = Gc(), Xe = _C({
  themeId: ir,
  defaultTheme: $R,
  defaultClassName: MR.root,
  generateClassName: W0.generate
});
function jR(e) {
  return de("MuiButton", e);
}
const co = ce("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), AR = /* @__PURE__ */ m.createContext({}), OR = /* @__PURE__ */ m.createContext(void 0), NR = (e) => {
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
  }, d = fe(c, jR, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, $1 = [{
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
}], LR = H(jo, {
  shouldForwardProp: (e) => an(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${se(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(Se(({
  theme: e
}) => {
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
    [`&.${co.disabled}`]: {
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
        [`&.${co.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${co.disabled}`]: {
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
        [`&.${co.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Xt()).map(([r]) => ({
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
        [`&.${co.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${co.disabled}`]: {
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
        [`&.${co.loading}`]: {
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
  }, ...$1]
})), BR = H("span", {
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
  }, ...$1]
})), DR = H("span", {
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
})), mg = H("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Kt = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = m.useContext(AR), o = m.useContext(OR), i = Ys(r, t), s = he({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: c = "button",
    className: d,
    disabled: p = !1,
    disableElevation: v = !1,
    disableFocusRipple: u = !1,
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
  } = s, N = Tr(y), I = S ?? /* @__PURE__ */ f.jsx(ii, {
    "aria-labelledby": N,
    color: "inherit",
    size: 16
  }), g = {
    ...s,
    color: a,
    component: c,
    disabled: p,
    disableElevation: v,
    disableFocusRipple: u,
    fullWidth: C,
    loading: h,
    loadingIndicator: I,
    loadingPosition: w,
    size: E,
    type: R,
    variant: T
  }, $ = NR(g), P = (k || h && w === "start") && /* @__PURE__ */ f.jsx(zR, {
    className: $.startIcon,
    ownerState: g,
    children: k || /* @__PURE__ */ f.jsx(mg, {
      className: $.loadingIconPlaceholder,
      ownerState: g
    })
  }), j = (x || h && w === "end") && /* @__PURE__ */ f.jsx(BR, {
    className: $.endIcon,
    ownerState: g,
    children: x || /* @__PURE__ */ f.jsx(mg, {
      className: $.loadingIconPlaceholder,
      ownerState: g
    })
  }), O = o || "", L = typeof h == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ f.jsx("span", {
      className: $.loadingWrapper,
      style: {
        display: "contents"
      },
      children: h && /* @__PURE__ */ f.jsx(DR, {
        className: $.loadingIndicator,
        ownerState: g,
        children: I
      })
    })
  ) : null, {
    root: M,
    ...z
  } = $;
  return /* @__PURE__ */ f.jsxs(LR, {
    ownerState: g,
    className: J(r.className, $.root, d, O),
    component: c,
    disabled: p || h,
    focusRipple: !u,
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
}, WR = H(ar, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Zi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
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
  const r = he({
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
function hg(e) {
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
  const d = st(oo(t), l), p = tt((x) => {
    const b = c.current;
    c.current = !1;
    const C = yt(l.current);
    if (!a.current || !l.current || "clientX" in x && KR(x, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let y;
    x.composedPath ? y = x.composedPath().includes(l.current) : y = !Co(C.documentElement, x.target) || Co(l.current, x.target), !y && (n || !b) && o(x);
  }), v = (x) => (b) => {
    c.current = !0;
    const C = t.props[x];
    C && C(b);
  }, u = {
    ref: d
  };
  return i !== !1 && (u[i] = v(i)), m.useEffect(() => {
    if (i !== !1) {
      const x = hg(i), b = yt(l.current), C = () => {
        s.current = !0;
      };
      return b.addEventListener(x, p), b.addEventListener("touchmove", C), () => {
        b.removeEventListener(x, p), b.removeEventListener("touchmove", C);
      };
    }
  }, [p, i]), r !== !1 && (u[r] = v(r)), m.useEffect(() => {
    if (r !== !1) {
      const x = hg(r), b = yt(l.current);
      return b.addEventListener(x, p), () => {
        b.removeEventListener(x, p);
      };
    }
  }, [p, r]), /* @__PURE__ */ m.cloneElement(t, u);
}
function j1(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function GR(e) {
  const t = yt(e);
  return e === t.body || e === t.documentElement ? gn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ss(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function gg(e) {
  return parseFloat(gn(e).getComputedStyle(e).paddingRight) || 0;
}
function XR(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function yg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !XR(s);
    l && a && Ss(s, o);
  });
}
function QR(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = yt(r).body;
    else {
      const s = r.parentElement, l = gn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (GR(i)) {
      const s = j1(gn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${gg(i) + s}px`;
      const l = yt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${gg(a) + s}px`;
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
    r = this.modals.length, this.modals.push(t), t.modalRef && Ss(t.modalRef, !1);
    const o = qR(n);
    yg(n, t.mount, t.modalRef, o, !0);
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
      i.restore && i.restore(), t.modalRef && Ss(t.modalRef, n), yg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
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
const Ka = "data-mui-focusable";
function vg(e) {
  return e ? e.hasAttribute(Ka) ? e : e.querySelector(`[${Ka}]`) : null;
}
const JR = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function A1(e) {
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
    const i = A1(r);
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
  } = e, a = m.useRef(!1), c = m.useRef(null), d = m.useRef(null), p = m.useRef(null), v = m.useRef(null), u = m.useRef(!1), x = m.useRef(null), b = st(oo(t), x), C = m.useRef(null);
  m.useEffect(() => {
    !l || !x.current || (u.current = !n);
  }, [n, l]), m.useEffect(() => {
    if (a.current = !1, !l || !x.current)
      return;
    const S = yt(x.current), w = tr(S), E = vg(x.current) ?? x.current;
    return Co(x.current, w) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), u.current && E.focus()), () => {
      !o && p.current && (a.current = !0, p.current.focus(), p.current = null);
    };
  }, [l]), m.useEffect(() => {
    if (!l || !x.current)
      return;
    const S = yt(x.current), w = (R) => {
      if (C.current = R, r || !s() || R.key !== "Tab")
        return;
      const T = x.current, A = tr(S);
      if (T === null)
        return;
      const N = vg(T);
      if (A === T || A === N) {
        const g = i(T);
        if (g.length === 0)
          return;
        R.preventDefault(), R.shiftKey ? g[g.length - 1].focus() : g[0].focus();
        return;
      }
      if (Co(T, A)) {
        const g = i(T), $ = g.indexOf(A);
        if ($ === -1 || !g.some((O) => A1(O) > 0))
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
      const T = tr(S);
      if (!S.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (Co(R, T) || r && T !== c.current && T !== d.current)
        return;
      if (T !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!u.current)
        return;
      let A = [];
      if ((T === c.current || T === d.current) && (A = i(x.current)), A.length > 0) {
        const g = !!((N = C.current) != null && N.shiftKey && ((I = C.current) == null ? void 0 : I.key) === "Tab"), $ = A[0], P = A[A.length - 1];
        typeof $ != "string" && typeof P != "string" && (g ? P.focus() : $.focus());
      } else
        R.focus();
    };
    S.addEventListener("focusin", E), S.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const R = tr(S);
      R && R.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), S.removeEventListener("focusin", E), S.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const y = (S) => {
    p.current === null && (p.current = S.relatedTarget), u.current = !0, v.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, h = (S) => {
    p.current === null && (p.current = S.relatedTarget), u.current = !0;
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
      ref: d,
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
const xg = () => {
}, Dl = new ZR();
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
  } = e, d = m.useRef({}), p = m.useRef(null), v = m.useRef(null), u = m.useRef(null), x = st(u, c), [b, C] = m.useState(!a), y = sP(s);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const S = () => yt(p.current), w = () => (d.current.modalRef = u.current, d.current.mount = p.current, d.current), E = () => {
    Dl.mount(w(), {
      disableScrollLock: n
    }), u.current && (u.current.scrollTop = 0);
  }, k = tt(() => {
    const O = iP(t) || S().body;
    Dl.add(w(), O), u.current && E();
  }), R = () => Dl.isTopModal(w()), T = tt((O) => {
    p.current = O, O && (v.current = O, a && R() ? E() : u.current && Ss(u.current, h));
  }), A = m.useCallback(() => {
    Dl.remove(w(), h);
  }, [h]);
  m.useEffect(() => () => {
    A();
  }, [A]), m.useEffect(() => {
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
    const L = Wa(e);
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
      onEnter: Gh(O, (s == null ? void 0 : s.props.onEnter) ?? xg),
      onExited: Gh(L, (s == null ? void 0 : s.props.onExited) ?? xg)
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
})(Se(({
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
}))), dP = H(M1, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Vp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    name: "MuiModal",
    props: t
  }), {
    classes: o,
    className: i,
    closeAfterTransition: s = !1,
    children: l,
    container: a,
    component: c,
    disableAutoFocus: d = !1,
    disableEnforceFocus: p = !1,
    disablePortal: v = !1,
    disableRestoreFocus: u = !1,
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
    disableAutoFocus: d,
    disableEnforceFocus: p,
    disablePortal: v,
    disableRestoreFocus: u,
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
  } = lP({
    ...A,
    rootRef: n
  }), M = {
    ...A,
    exited: O
  }, z = cP(M), D = {};
  if (l.props.tabIndex === void 0 && (D.tabIndex = "-1"), L) {
    const {
      onEnter: G,
      onExited: X
    } = g();
    D.onEnter = G, D.onExited = X;
  }
  const W = {
    slots: k,
    slotProps: E
  }, [_, Q] = ye("root", {
    ref: n,
    elementType: uP,
    externalForwardedProps: {
      ...W,
      ...T,
      component: c
    },
    getSlotProps: N,
    ownerState: M,
    className: J(i, z == null ? void 0 : z.root, !M.open && M.exited && (z == null ? void 0 : z.hidden))
  }), [V, q] = ye("backdrop", {
    elementType: dP,
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
  return !C && !w && (!L || O) ? null : /* @__PURE__ */ f.jsx(E1, {
    ref: $,
    container: P,
    disablePortal: v,
    children: /* @__PURE__ */ f.jsxs(_, {
      ...Q,
      children: [b ? null : /* @__PURE__ */ f.jsx(V, {
        ...q
      }), /* @__PURE__ */ f.jsx(oP, {
        disableEnforceFocus: p,
        disableAutoFocus: d,
        disableRestoreFocus: u,
        isEnabled: j,
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
const O1 = /* @__PURE__ */ m.createContext({}), pP = H(M1, {
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
    container: ["container", `scroll${se(n)}`],
    paper: ["paper", `paperWidth${se(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return fe(s, fP, t);
}, hP = H(Vp, {
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
}), yP = H(ar, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${se(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(Se(({
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
}))), Hu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiDialog"
  }), o = ur(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: c,
    className: d,
    fullScreen: p = !1,
    fullWidth: v = !1,
    maxWidth: u = "sm",
    onClick: x,
    onClose: b,
    open: C,
    PaperComponent: y = ar,
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
    maxWidth: u,
    scroll: S
  }, A = mP(T), N = m.useRef(), I = (G) => {
    N.current = G.target === G.currentTarget;
  }, g = (G) => {
    x && x(G), N.current && (N.current = null, b && b(G, "backdropClick"));
  }, $ = Tr(l), P = m.useMemo(() => ({
    titleId: $
  }), [$]), j = {
    slots: w,
    slotProps: E
  }, [O, L] = ye("root", {
    elementType: hP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: T,
    className: J(A.root, d),
    ref: n
  }), [M, z] = ye("backdrop", {
    elementType: pP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: T,
    className: A.backdrop
  }), [D, W] = ye("paper", {
    elementType: yP,
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
      [Ka]: ""
    }
  }), [_, Q] = ye("container", {
    elementType: gP,
    externalForwardedProps: j,
    ownerState: T,
    className: A.container
  }), [V, q] = ye("transition", {
    elementType: I1,
    externalForwardedProps: j,
    ownerState: T,
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
    children: /* @__PURE__ */ f.jsx(V, {
      ...q,
      children: /* @__PURE__ */ f.jsx(_, {
        onMouseDown: I,
        ...Q,
        children: /* @__PURE__ */ f.jsx(D, {
          as: y,
          ...W,
          children: /* @__PURE__ */ f.jsx(O1.Provider, {
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
}), Vu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
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
})(Se(({
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
}))), Ku = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
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
}, RP = H(ke, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Yu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = EP(l), {
    titleId: c = i
  } = m.useContext(O1);
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
const Sg = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), IP = (e) => {
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
})(Se(({
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
})(Se(({
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
  const r = he({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: o = !1,
    children: i,
    className: s,
    orientation: l = "horizontal",
    component: a = i || l === "vertical" ? "div" : "hr",
    flexItem: c = !1,
    role: d = a !== "hr" ? "separator" : void 0,
    textAlign: p = "center",
    variant: v = "fullWidth",
    ...u
  } = r, x = {
    ...r,
    absolute: o,
    component: a,
    flexItem: c,
    orientation: l,
    role: d,
    textAlign: p,
    variant: v
  }, b = IP(x);
  return /* @__PURE__ */ f.jsx(MP, {
    as: a,
    className: J(b.root, s),
    role: d,
    ref: n,
    ownerState: x,
    "aria-orientation": d === "separator" && (a !== "hr" || l === "vertical") ? l : void 0,
    ...u,
    children: i ? /* @__PURE__ */ f.jsx($P, {
      className: b.wrapper,
      ownerState: x,
      children: i
    }) : null
  });
}), AP = {
  visibility: "hidden"
}, OP = {};
function NP(e) {
  return typeof e == "string" && /^translate\(.+,\s*.+\)$/.test(e);
}
function LP(e, t, n, r = OP) {
  const {
    resetInlineTransform: o = !0
  } = r, i = n && n.getBoundingClientRect(), s = gn(t);
  let l, a;
  if (o) {
    const p = t.style.transform, v = t.style.transition;
    t.style.transition = "", t.style.transform = "", l = t.getBoundingClientRect(), a = s.getComputedStyle(t).getPropertyValue("transform"), t.style.transform = p, t.style.transition = v;
  } else
    l = t.getBoundingClientRect(), a = s.getComputedStyle(t).getPropertyValue("transform");
  const {
    offsetX: c,
    offsetY: d
  } = $k(a);
  return e === "left" ? i ? `translateX(${i.right + c - l.left}px)` : `translateX(${s.innerWidth + c - l.left}px)` : e === "right" ? i ? `translateX(-${l.right - i.left - c}px)` : `translateX(-${l.left + l.width - c}px)` : e === "up" ? i ? `translateY(${i.bottom + d - l.top}px)` : `translateY(${s.innerHeight + d - l.top}px)` : i ? `translateY(-${l.top - i.top + l.height - d}px)` : `translateY(-${l.top + l.height - d}px)`;
}
function zP(e) {
  return typeof e == "function" ? e() : e;
}
function Fl(e, t, n, r) {
  const o = zP(n), i = LP(e, t, o, r);
  i && (t.style.transform = i);
}
const bg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = ur(), o = {
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
    disablePrefersReducedMotion: d = !1,
    direction: p = "down",
    easing: v = o,
    in: u,
    onEnter: x,
    onEntered: b,
    onEntering: C,
    onExit: y,
    onExited: h,
    onExiting: S,
    style: w,
    timeout: E = i,
    ...k
  } = t, R = ul(r.motion.reducedMotion, d), T = m.useRef(null), A = m.useRef(!1), N = st(oo(a), T, n), I = Mt(T, (z, D) => {
    Fl(p, z, c), R.shouldReduceMotion || Xc(z), x && x(z, D);
  }), g = Mt(T, (z, D) => {
    const W = Ti({
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
  }), $ = Mt(T, b), P = Mt(T, S), j = Mt(T, (z) => {
    const D = Ti({
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
    const _ = NP(z.style.transform);
    A.current = _, Fl(p, z, c, {
      resetInlineTransform: !_
    }), y && y(z);
  }), O = Mt(T, (z) => {
    A.current = !1, z.style.transition = "", h && h(z);
  }), L = s ? (z) => {
    s(T.current, z);
  } : void 0, M = m.useCallback(() => {
    T.current && Fl(p, T.current, c);
  }, [p, c]);
  return m.useEffect(() => {
    if (u || p === "down" || p === "right")
      return;
    const z = al(() => {
      T.current && Fl(p, T.current, c);
    }), D = gn(T.current);
    return D.addEventListener("resize", z), () => {
      z.clear(), D.removeEventListener("resize", z);
    };
  }, [p, u, c]), m.useEffect(() => {
    !u && !A.current && M();
  }, [u, M]), /* @__PURE__ */ f.jsx(zp, {
    nodeRef: T,
    onEnter: I,
    onEntered: $,
    onEntering: g,
    onExit: j,
    onExited: O,
    onExiting: P,
    addEndListener: L,
    appear: l,
    in: u,
    reduceMotion: R.shouldReduceMotion,
    timeout: E,
    ...k,
    children: (z, {
      ownerState: D,
      ...W
    }) => {
      let _;
      return z === "exited" && !u ? _ = w || a.props.style ? {
        visibility: "hidden",
        ...w,
        ...a.props.style
      } : AP : w && a.props.style ? _ = {
        ...w,
        ...a.props.style
      } : _ = w || a.props.style, /* @__PURE__ */ m.cloneElement(a, {
        ref: N,
        style: _,
        ...W
      });
    }
  });
});
function BP(e) {
  return de("MuiDrawer", e);
}
ce("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "modal"]);
const N1 = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, n.variant === "temporary" && t.modal];
}, DP = (e) => {
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
  return fe(o, BP, t);
}, FP = H(Vp, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: N1
})(Se(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), _P = H("div", {
  shouldForwardProp: an,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: N1
})({
  flex: "0 0 auto"
}), WP = H(ar, {
  name: "MuiDrawer",
  slot: "Paper"
})(Se(({
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
  const r = he({
    props: t,
    name: "MuiDrawer"
  }), o = ur(), i = ll(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    children: a,
    className: c,
    elevation: d = 16,
    hideBackdrop: p = !1,
    ModalProps: v = {},
    onClose: u,
    open: x = !1,
    transitionDuration: b = s,
    variant: C = "temporary",
    slots: y = {},
    slotProps: h = {},
    ...S
  } = r, w = m.useRef(!1), E = m.useRef(null), k = st(n, E);
  m.useEffect(() => {
    w.current = !0;
  }, []);
  const R = m.useCallback(() => E.current, []), T = HP({
    direction: i ? "rtl" : "ltr"
  }, l), N = {
    ...r,
    anchor: l,
    elevation: d,
    open: x,
    variant: C,
    ...S
  }, I = DP(N), g = {
    slots: y,
    slotProps: {
      ...h,
      backdrop: u1(h.backdrop, {
        transitionDuration: b
      })
    }
  }, [$, P] = ye("root", {
    ref: k,
    elementType: FP,
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
      onClose: u,
      hideBackdrop: p,
      slots: {
        backdrop: g.slots.backdrop
      },
      slotProps: {
        backdrop: g.slotProps.backdrop
      }
    }
  }), [j, O] = ye("paper", {
    elementType: WP,
    shouldForwardComponentProp: !0,
    className: I.paper,
    ownerState: N,
    externalForwardedProps: g,
    additionalProps: {
      elevation: C === "temporary" ? d : 0,
      square: !0,
      ...C === "temporary" && {
        role: "dialog",
        "aria-modal": "true",
        [Ka]: "",
        tabIndex: -1
      }
    }
  }), [L, M] = ye("docked", {
    elementType: _P,
    ref: k,
    className: J(I.root, I.docked, c),
    ownerState: N,
    externalForwardedProps: g,
    additionalProps: S
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [z, D] = ye("transition", {
    elementType: bg,
    ownerState: N,
    externalForwardedProps: g,
    additionalProps: {
      in: x,
      direction: L1[T],
      timeout: b,
      appear: w.current,
      ...C === "temporary" && (y.transition == null || y.transition === bg) && {
        container: R
      }
    }
  }), W = /* @__PURE__ */ f.jsx(j, {
    ...O,
    children: a
  });
  if (C === "permanent")
    return /* @__PURE__ */ f.jsx(L, {
      ...M,
      children: W
    });
  const _ = /* @__PURE__ */ f.jsx(z, {
    ...D,
    children: W
  });
  return C === "persistent" ? /* @__PURE__ */ f.jsx(L, {
    ...M,
    children: _
  }) : /* @__PURE__ */ f.jsx($, {
    ...P,
    children: _
  });
});
function z1(e) {
  return de("MuiSelect", e);
}
const go = ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), KP = (e) => {
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
  }, c = fe(a, Ak, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...c
  };
}, YP = H(Zc, {
  shouldForwardProp: (e) => an(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Qc(e, t), !n.disableUnderline && t.underline];
  }
})(Se(({
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
    [`&.${ao.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${ao.disabled}`]: {
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
        [`&.${ao.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${ao.error}`]: {
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
        [`&:hover:not(.${ao.disabled}, .${ao.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${ao.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Xt()).map(([s]) => {
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
        [`&.${go.root}`]: {
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
})(Se(({
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
}))), Kp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
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
    slotProps: d,
    slots: p = {},
    type: v = "text",
    ...u
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
  }, y = d ? Bt(C, d) : C, h = p.root ?? YP, S = p.input ?? GP;
  return /* @__PURE__ */ f.jsx(Op, {
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
    ...u,
    classes: b
  });
});
Kp.muiName = "Input";
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
    root: ["root", n !== "none" && `margin${se(n)}`, r && "fullWidth"]
  };
  return fe(o, XP, t);
}, qP = H("div", {
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
}), ZP = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: l = "div",
    disabled: a = !1,
    error: c = !1,
    focused: d,
    fullWidth: p = !1,
    hiddenLabel: v = !1,
    margin: u = "none",
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
    margin: u,
    required: x,
    size: b,
    variant: C
  }, S = QP(h), [w, E] = m.useState(() => {
    let j = !1;
    return o && m.Children.forEach(o, (O) => {
      if (!Du(O, ["Input", "Select"]))
        return;
      const L = Du(O, ["Select"]) ? O.props.input : O;
      L && wk(L.props) && (j = !0);
    }), j;
  }), [k, R] = m.useState(() => {
    let j = !1;
    return o && m.Children.forEach(o, (O) => {
      Du(O, ["Input", "Select"]) && (Fa(O.props, !0) || Fa(O.props.inputProps, !0)) && (j = !0);
    }), j;
  }), [T, A] = m.useState(!1);
  a && T && A(!1);
  const N = d !== void 0 && !a ? d : T;
  let I;
  m.useRef(!1);
  const g = m.useCallback(() => {
    R(!0);
  }, []), $ = m.useCallback(() => {
    R(!1);
  }, []), P = m.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: c,
    filled: k,
    focused: N,
    fullWidth: p,
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
  }), [w, s, a, c, k, N, p, v, I, $, g, x, b, C]);
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
var wg;
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
    root: ["root", o && "disabled", i && "error", r && `size${se(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return fe(c, Ok, t);
}, eI = H("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${se(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(Se(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Yh.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Yh.error}`]: {
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
  const r = he({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: s = "p",
    disabled: l,
    error: a,
    filled: c,
    focused: d,
    margin: p,
    required: v,
    variant: u,
    ...x
  } = r, [b] = Ni({
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
      wg || (wg = /* @__PURE__ */ f.jsx("span", {
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
    root: ["root", `color${se(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return fe(a, Nk, t);
}, rI = H("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(Se(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Xt()).map(([t]) => ({
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
}))), oI = H("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(Se(({
  theme: e
}) => ({
  [`&.${ys.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), iI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    color: s,
    component: l = "label",
    disabled: a,
    error: c,
    filled: d,
    focused: p,
    required: v,
    ...u
  } = r, [x] = Ni({
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
    ...u,
    children: [o, x.required && /* @__PURE__ */ f.jsxs(oI, {
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
const sI = {
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
}, lI = {
  opacity: 0,
  transform: bs(0.75),
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
    onEntered: d,
    onEntering: p,
    onExit: v,
    onExited: u,
    onExiting: x,
    style: b,
    timeout: C = "auto",
    ...y
  } = t, h = m.useRef(null), S = ur(), w = ul(S.motion.reducedMotion, s), E = m.useRef(null), k = st(E, oo(i), n), R = Mt(E, p), T = Mt(E, (P, j) => {
    w.shouldReduceMotion || Xc(P);
    const {
      duration: O,
      delay: L,
      easing: M
    } = Ti({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    C === "auto" && !w.shouldReduceMotion ? (z = S.transitions.getAutoHeightDuration(P.clientHeight), h.current = z) : (z = O, h.current = null);
    const D = w.getTransitionTiming({
      duration: z,
      delay: L
    });
    P.style.transition = [S.transitions.create("opacity", {
      duration: D.duration,
      delay: D.delay
    }), S.transitions.create("transform", {
      duration: typeof D.duration == "string" ? D.duration : D.duration * 0.666,
      delay: D.delay,
      easing: M
    })].join(","), c && c(P, j);
  }), A = Mt(E, d), N = Mt(E, x), I = Mt(E, (P) => {
    const {
      duration: j,
      delay: O,
      easing: L
    } = Ti({
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
    })].join(","), P.style.opacity = 0, P.style.transform = bs(0.75), v && v(P);
  }), g = Mt(E, (P) => {
    P.style.transition = "", u && u(P);
  }), $ = r ? (P) => {
    r(E.current, P);
  } : void 0;
  return /* @__PURE__ */ f.jsx(zp, {
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
      const L = a1(P, a, sI, lI, b, i.props.style);
      return /* @__PURE__ */ m.cloneElement(i, {
        style: L,
        ref: k,
        ...O
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
  shouldForwardProp: (e) => an(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Qc(e, t), !n.disableUnderline && t.underline];
  }
})(Se(({
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
          ...St(e, "transform", {
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
          ...St(e, "border-bottom-color", {
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
    }, ...Object.entries(e.palette).filter(Xt()).map(([r]) => ({
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
})({}), Yp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
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
    slots: d = {},
    type: p = "text",
    ...v
  } = r, u = uI(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = c ? Bt(c, b) : b, y = d.root ?? dI, h = d.input ?? fI;
  return /* @__PURE__ */ f.jsx(Op, {
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
    classes: u
  });
});
Yp.muiName = "Input";
function pI(e) {
  return de("MuiInputAdornment", e);
}
const si = ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var Cg;
const mI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${se(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, hI = (e) => {
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
  return fe(l, pI, t);
}, gI = H("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: mI
})(Se(({
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
      [`&.${si.positionStart}&:not(.${si.hiddenLabel})`]: {
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
  const r = he({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: i,
    component: s = "div",
    disablePointerEvents: l = !1,
    disableTypography: a = !1,
    position: c,
    variant: d,
    ...p
  } = r, v = xk() || {};
  let u = d;
  d && v.variant, v && !u && (u = v.variant);
  const x = {
    ...r,
    hiddenLabel: v.hiddenLabel,
    size: v.size,
    disablePointerEvents: l,
    position: c,
    variant: u
  }, b = hI(x);
  return /* @__PURE__ */ f.jsx(cl.Provider, {
    value: null,
    children: /* @__PURE__ */ f.jsx(gI, {
      as: s,
      ownerState: x,
      className: J(b.root, i),
      ref: n,
      ...p,
      children: typeof o == "string" && !a ? /* @__PURE__ */ f.jsx(ke, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ f.jsxs(m.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Cg || (Cg = /* @__PURE__ */ f.jsx("span", {
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
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${se(r)}`, s],
    asterisk: [l && "asterisk"]
  }, c = fe(a, aI, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...c
  };
}, xI = H(iI, {
  shouldForwardProp: (e) => an(e) || e === "classes",
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
})(Se(({
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
}))), SI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: l,
    className: a,
    ...c
  } = r, [d, p] = Ni({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let v = s;
  typeof v > "u" && p && (v = p.filled || p.focused || p.adornedStart);
  const u = {
    ...r,
    disableAnimation: o,
    formControl: p,
    shrink: v,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }, x = vI(u);
  return /* @__PURE__ */ f.jsx(xI, {
    "data-shrink": v,
    ref: n,
    className: J(x.root, a),
    ...c,
    ownerState: u,
    classes: x
  });
}), ff = /* @__PURE__ */ m.createContext({});
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
  const r = he({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: l = !1,
    disablePadding: a = !1,
    subheader: c,
    ...d
  } = r, p = m.useMemo(() => ({
    dense: l
  }), [l]), v = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, u = wI(v);
  return /* @__PURE__ */ f.jsx(ff.Provider, {
    value: p,
    children: /* @__PURE__ */ f.jsxs(CI, {
      as: s,
      className: J(u.root, i),
      ref: n,
      ownerState: v,
      ...d,
      children: [c, o]
    })
  });
}), kg = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Tg = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Gp = /* @__PURE__ */ m.createContext(void 0);
function B1() {
  const e = m.useContext(Gp);
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
    isItemFocusable: i = ws,
    wrap: s = !0
  } = e, [l, a] = m.useState(t), [c, d] = m.useState(t);
  let p = l;
  t !== c && (d(t), t !== void 0 && t !== l && (p = t, a(t)));
  const v = m.useRef(null), u = m.useRef(/* @__PURE__ */ new Map()), [x, b] = m.useState(0), C = m.useMemo(() => pf(u.current), [x]), y = Eg(p, C, i, n), h = m.useRef(y);
  h.current = y;
  const S = m.useCallback(() => {
    const g = pf(u.current), $ = Eg(h.current, g, i, n);
    return U1(g, $);
  }, [n, i]), w = m.useCallback(() => u.current, []), E = tt((g) => {
    const $ = u.current.get(g.id);
    EI($ ?? null, g) || (u.current.set(g.id, g), b((P) => P + 1));
  }), k = tt((g) => {
    u.current.delete(g) && b(($) => $ + 1);
  }), R = tt((g) => {
    a(g);
  }), T = m.useCallback((g) => h.current === g, []), A = m.useCallback((g, $, P, j) => {
    var M;
    const O = _l(u.current), L = _1(O, g, $, P, j ?? i);
    return L ? ((M = L.element) == null || M.focus(), a(L.id), L) : null;
  }, [i]), N = m.useCallback((g, $, P) => ({
    onFocus: (L) => {
      $ == null || $(L);
      const M = _l(u.current), z = V1(M, L.target);
      z !== -1 && a(M[z].id);
    },
    onKeyDown: (L) => {
      if (P == null || P(L), L.defaultPrevented || L.altKey || L.shiftKey || L.ctrlKey || L.metaKey || !RI.includes(L.key))
        return;
      let M = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (M = "ArrowRight", z = "ArrowLeft");
      const D = _l(u.current), W = tr(yt(v.current)), _ = W === v.current;
      let Q = Rg(D, W, h.current), V = "next";
      switch (L.key) {
        case M:
          V = "previous", L.preventDefault(), _ && (Q = D.length);
          break;
        case z:
          L.preventDefault(), _ && (Q = -1);
          break;
        case "Home":
          L.preventDefault(), Q = -1;
          break;
        case "End":
          L.preventDefault(), V = "previous", Q = D.length;
          break;
        default:
          return;
      }
      A(Q, V, s);
    },
    ref: $I(g, (L) => {
      v.current = L;
    })
  }), [A, o, r, s]), I = m.useCallback((g) => {
    var L;
    const $ = _l(u.current), P = tr(yt(v.current)), O = P === v.current ? -1 : Rg($, P, h.current);
    return ((L = A(O, "next", !0, g)) == null ? void 0 : L.id) ?? null;
  }, [A]);
  return m.useMemo(() => ({
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
function F1(e) {
  const t = B1(), {
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
  const a = m.useCallback((d) => {
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
  }, [e.id, r, o]), c = st(e.ref, a);
  return mt(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), mt(() => {
    const d = e.id;
    return () => {
      o(d);
    };
  }, [e.id, o]), {
    ref: c,
    tabIndex: n === e.id ? 0 : -1
  };
}
function Eg(e, t, n, r) {
  return e != null ? PI(e, t, n) : II(t, n, r);
}
function PI(e, t, n) {
  var o;
  const r = H1(t, e);
  return r === -1 ? W1(t, n) : n(t[r]) ? t[r].id : ((o = _1(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function II(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = U1(e, r);
    if (o && t(o))
      return o.id;
  }
  return W1(e, t);
}
function Rg(e, t, n) {
  if (t) {
    const r = V1(e, t);
    if (r !== -1)
      return r;
  }
  return H1(e, n);
}
function _1(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = Pg(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const c = e[l];
    if (!c || !o(c))
      l = Pg(l, i, n, r);
    else
      return c;
  }
  return null;
}
function W1(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function U1(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function H1(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function V1(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function pf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(mf).sort((o, i) => MI(o.element, i.element)), r = t.filter((o) => !mf(o));
  return [...n, ...r];
}
function _l(e) {
  return pf(e).filter(mf);
}
function Pg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function ws(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function mf(e) {
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
      of(n ?? null, t);
    });
  };
}
function K1(e, t) {
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
const Y1 = /* @__PURE__ */ m.createContext(null);
function G1() {
  return m.useContext(Y1);
}
const OI = Y1.Provider, X1 = /* @__PURE__ */ m.createContext(void 0);
function NI() {
  const e = m.useContext(X1);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function LI(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function Q1(e, t) {
  if (t === void 0)
    return !0;
  let n = LI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function zI(e, t) {
  return Q1(e, t) ? ws(e) : !1;
}
function BI(e, t) {
  K1(e, t);
}
const DI = /* @__PURE__ */ m.forwardRef(function(t, n) {
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
    onKeyDown: d,
    variant: p = "selectedMenu",
    ...v
  } = t, u = m.useRef(null), x = m.useRef(!1), [b, C] = m.useState(!1), y = G1(), h = m.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), S = m.useCallback((j) => {
    var O, L, M;
    return p === "selectedMenu" ? ((O = j.find((z) => z.selected && ws(z))) == null ? void 0 : O.id) ?? ((L = j.find((z) => ws(z))) == null ? void 0 : L.id) ?? null : ((M = j.find((z) => ws(z))) == null ? void 0 : M.id) ?? null;
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
  } = w, N = tt((j = !1) => {
    if (!u.current || !j && x.current)
      return null;
    if (i) {
      const O = R();
      if (O != null && O.element) {
        const L = Array.from(A().values()).some((z) => z.selected), M = p === "menu" && L && !O.selected && y == null;
        return C(M), BI(O.element, y), x.current = !0, O.element;
      }
      return o ? (C(!1), u.current.focus(), u.current) : null;
    }
    return o ? (C(!1), u.current.focus(), x.current = !0, u.current) : (C(!1), null);
  });
  mt(() => {
    if (!o && !i) {
      x.current = !1, C(!1);
      return;
    }
    N();
  }, [E, i, o, N]), m.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (j, {
      direction: O
    }) => {
      const L = !u.current.style.width;
      if (j.clientHeight < u.current.clientHeight && L) {
        const M = `${j1(gn(j))}px`;
        u.current.style[O === "rtl" ? "paddingLeft" : "paddingRight"] = M, u.current.style.width = `calc(100% + ${M})`;
      }
      return u.current;
    },
    focusInitialTarget: () => {
      if (!u.current)
        return null;
      const j = tr(yt(u.current));
      return j && Co(u.current, j) ? j : N(!0);
    }
  }), [N]);
  const I = T(void 0, v.onFocus), g = st(u, I.ref, n), $ = m.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: b,
    variant: p
  }), [a, b, p]), P = tt((j) => {
    if (b && C(!1), (j.ctrlKey || j.metaKey || j.altKey) && d) {
      d(j);
      return;
    }
    if (I.onKeyDown(j), j.key.length === 1) {
      const L = h.current, M = j.key.toLowerCase(), z = performance.now();
      L.keys.length > 0 && (z - L.lastTime > 500 ? (L.keys = [], L.repeating = !0, L.previousKeyMatched = !0) : L.repeating && M !== L.keys[0] && (L.repeating = !1)), L.lastTime = z, L.keys.push(M);
      const D = tr(yt(u.current)), W = D && !L.repeating && Q1(D, L);
      L.previousKeyMatched && (W || k((_) => zI(_, L)) != null) ? j.preventDefault() : L.previousKeyMatched = !1;
    }
    d && d(j);
  });
  return /* @__PURE__ */ f.jsx(kI, {
    role: "menu",
    ref: g,
    className: l,
    onKeyDown: P,
    tabIndex: -1,
    ...v,
    onFocus: I.onFocus,
    children: /* @__PURE__ */ f.jsx(X1.Provider, {
      value: $,
      children: /* @__PURE__ */ f.jsx(Gp.Provider, {
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
function Ig(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Mg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function $g(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Wl(e) {
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
}, WI = H(Vp, {
  name: "MuiPopover",
  slot: "Root"
})({}), q1 = H(ar, {
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
  const r = he({
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
    className: d,
    container: p,
    disableAutoFocus: v = !1,
    elevation: u = 8,
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
    elevation: u,
    marginThreshold: x,
    transformOrigin: h,
    transitionDuration: S
  }, T = _I(R), A = m.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const U = Wl(i), oe = (U && U.nodeType === 1 ? U : yt(k.current).body).getBoundingClientRect();
    return {
      top: oe.top + Ig(oe, s.vertical),
      left: oe.left + Mg(oe, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), N = m.useCallback((U) => ({
    vertical: Ig(U, h.vertical),
    horizontal: Mg(U, h.horizontal)
  }), [h.horizontal, h.vertical]), I = m.useCallback((U) => {
    const ne = {
      width: U.offsetWidth,
      height: U.offsetHeight
    }, oe = N(ne);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: $g(oe)
      };
    const Te = A();
    let we = Te.top - oe.vertical, ue = Te.left - oe.horizontal;
    const ae = we + ne.height, $e = ue + ne.width, Ve = gn(Wl(i)), Re = Ve.innerHeight - x, Ne = Ve.innerWidth - x;
    if (x != null && we < x) {
      const pe = we - x;
      we -= pe, oe.vertical += pe;
    } else if (x != null && ae > Re) {
      const pe = ae - Re;
      we -= pe, oe.vertical += pe;
    }
    if (x != null && ue < x) {
      const pe = ue - x;
      ue -= pe, oe.horizontal += pe;
    } else if ($e > Ne) {
      const pe = $e - Ne;
      ue -= pe, oe.horizontal += pe;
    }
    return {
      top: `${Math.round(we)}px`,
      left: `${Math.round(ue)}px`,
      transformOrigin: $g(oe)
    };
  }, [i, a, A, N, x]), [g, $] = m.useState(b), P = m.useCallback(() => {
    const U = k.current;
    if (!U)
      return;
    const ne = I(U);
    ne.top != null && U.style.setProperty("top", ne.top), ne.left != null && (U.style.left = ne.left), U.style.transformOrigin = ne.transformOrigin, $(!0);
  }, [I]);
  m.useEffect(() => (w && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [i, w, P]);
  const j = () => {
    P();
  }, O = () => {
    $(!1);
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
    }), ne = gn(Wl(i));
    return ne.addEventListener("resize", U), () => {
      U.clear(), ne.removeEventListener("resize", U);
    };
  }, [i, b, P]);
  let L = S;
  const M = {
    slots: C,
    slotProps: y
  }, [z, D] = ye("transition", {
    elementType: Qs,
    externalForwardedProps: M,
    ownerState: R,
    getSlotProps: (U) => ({
      ...U,
      onEntering: (ne, oe) => {
        var Te;
        (Te = U.onEntering) == null || Te.call(U, ne, oe), j();
      },
      onExited: (ne) => {
        var oe;
        (oe = U.onExited) == null || oe.call(U, ne), O();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  S === "auto" && !z.muiSupportAuto && (L = void 0);
  const W = p || (i ? yt(Wl(i)).body : void 0), [_, {
    slots: Q,
    slotProps: V,
    ...q
  }] = ye("root", {
    ref: n,
    elementType: WI,
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
        backdrop: u1(typeof y.backdrop == "function" ? y.backdrop(R) : y.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: b
    },
    ownerState: R,
    className: J(T.root, d)
  }), [G, X] = ye("paper", {
    ref: k,
    className: T.paper,
    elementType: q1,
    externalForwardedProps: M,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: u,
      style: g ? void 0 : {
        opacity: 0
      }
    },
    ownerState: R
  });
  return /* @__PURE__ */ f.jsx(_, {
    ...q,
    ...!Da(_) && {
      slots: Q,
      slotProps: V,
      disableAutoFocus: v,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ f.jsx(z, {
      ...D,
      timeout: L,
      children: /* @__PURE__ */ f.jsx(G, {
        ...X,
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
  shouldForwardProp: (e) => an(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), XI = H(q1, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), QI = H(DI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), qI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: i,
    className: s,
    disableAutoFocusItem: l = !1,
    onClose: a,
    open: c,
    PopoverClasses: d,
    transitionDuration: p = "auto",
    variant: v = "selectedMenu",
    slots: u = {},
    slotProps: x = {},
    ...b
  } = r, C = ll(), y = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: p,
    variant: v
  }, h = YI(y), S = o && c, w = S && !l, E = m.useRef(null), k = (j, O) => {
    var L, M;
    E.current && (E.current.adjustStyleForScrollbar(j, {
      direction: C ? "rtl" : "ltr"
    }), S && ((M = (L = E.current).focusInitialTarget) == null || M.call(L)));
  }, R = (j) => {
    j.key === "Tab" && (j.preventDefault(), a && a(j, "tabKeyDown"));
  }, T = {
    slots: u,
    slotProps: x
  }, A = Mi({
    elementType: u.root,
    externalSlotProps: x.root,
    ownerState: y,
    className: [h.root, s]
  }), [N, I] = ye("paper", {
    className: h.paper,
    elementType: XI,
    externalForwardedProps: T,
    shouldForwardComponentProp: !0,
    ownerState: y
  }), [g, $] = ye("list", {
    className: h.list,
    elementType: QI,
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
        root: u.root,
        paper: N,
        backdrop: u.backdrop,
        transition: u.transition
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
      transitionDuration: p,
      ownerState: y,
      ...b,
      classes: d,
      children: /* @__PURE__ */ f.jsx(g, {
        actions: E,
        autoFocus: S,
        autoFocusItem: w,
        variant: v,
        ...$,
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
  }, zk, s);
  return {
    ...s,
    ...a
  };
}, eM = H(jo, {
  shouldForwardProp: (e) => an(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: ZI
})(Se(({
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
    [`&.${Qi.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Qi.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Qi.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Qi.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Sg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Sg.inset}`]: {
    marginLeft: 52
  },
  [`& .${Tg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Tg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${kg.root}`]: {
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
      [`& .${kg.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Vo = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: i = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: a = !1,
    focusVisibleClassName: c,
    role: d = "menuitem",
    tabIndex: p,
    className: v,
    ...u
  } = r, b = d === "menuitemcheckbox" || d === "menuitemradio" ? !!r.selected : void 0, C = G1(), y = m.useContext(ff), h = m.useMemo(() => ({
    dense: s || y.dense || !1,
    disableGutters: a
  }), [y.dense, s, a]), S = NI(), w = Tr(), E = S.suppressInitialFocusVisible, k = S.itemsFocusableWhenDisabled, R = m.useRef(null);
  mt(() => {
    o && R.current && K1(R.current, C);
  }, [o]);
  const T = {
    ...r,
    dense: h.dense,
    divider: l,
    disableGutters: a
  }, A = JI(r), {
    root: N,
    ...I
  } = A, g = F1({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), $ = st(R, g.ref);
  let P;
  return p !== void 0 ? P = p : S.variant === "selectedMenu" ? P = g.tabIndex : (!r.disabled || k) && (P = -1), /* @__PURE__ */ f.jsx(ff.Provider, {
    value: h,
    children: /* @__PURE__ */ f.jsx(eM, {
      ref: $,
      role: d,
      "aria-checked": b,
      tabIndex: P,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: E,
      focusVisibleClassName: J(A.focusVisible, c),
      className: J(A.root, v),
      ...u,
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
    icon: ["icon", `icon${se(n)}`, i && "iconOpen", r && "disabled"]
  };
  return fe(l, Bk, t);
}, Z1 = H("select", {
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
  [`& ~ .${si.root}`]: {
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
      [`.${un.root}:has(> & ~ .${si.root})`]: {
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
      [`.${un.root}:has(> & ~ .${si.root})`]: {
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
      [`.${un.root}:has(> & ~ .${si.root})`]: {
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
})), nM = H(Z1, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: an,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Np.multiple}`]: t.multiple
    }];
  }
})({}), J1 = H("svg", {
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
})), rM = H(J1, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${se(n.variant)}`], n.open && t.iconOpen];
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
  } = t, d = {
    ...t,
    disabled: o,
    variant: a,
    error: i
  }, p = tM(d);
  return /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ f.jsx(nM, {
      ownerState: d,
      className: J(p.select, r),
      disabled: o,
      ref: l || n,
      ...c
    }), t.multiple ? null : /* @__PURE__ */ f.jsx(rM, {
      as: s,
      ownerState: d,
      className: p.icon
    })]
  });
});
var jg;
const iM = H("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: an
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
  shouldForwardProp: an
})(Se(({
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
        jg || (jg = /* @__PURE__ */ f.jsx("span", {
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
  shouldForwardProp: (e) => an(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Qc
})(Se(({
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
    variants: [...Object.entries(e.palette).filter(Xt()).map(([n]) => ({
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
        [`&.${go.root}`]: {
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
})(Se(({
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
})(Se(({
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
}))), Xp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    fullWidth: o = !1,
    inputComponent: i = "input",
    label: s,
    multiline: l = !1,
    notched: a,
    slots: c = {},
    slotProps: d = {},
    type: p = "text",
    ...v
  } = r, u = aM(r), [x, b] = Ni({
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
  }, y = c.root ?? cM, h = c.input ?? dM, [S, w] = ye("notchedOutline", {
    elementType: uM,
    className: u.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: c,
      slotProps: d
    },
    additionalProps: {
      label: s != null && s !== "" && x.required ? /* @__PURE__ */ f.jsxs(m.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ f.jsx(Op, {
    slots: {
      root: y,
      input: h
    },
    slotProps: d,
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
      ...u,
      notchedOutline: null
    }
  });
});
Xp.muiName = "Input";
function fM(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function ex(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return m.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ m.isValidElement(n) && (t += ex(n.props.children));
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
    const s = ex(i.props.children).trim().toLowerCase();
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
var Ag;
const Ul = 2, gM = 400, Og = 200, yM = 750, uo = " ", vM = "ArrowUp", xM = "ArrowDown", SM = "Enter";
function Ng(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Ul && e.clientX <= r.right + Ul && e.clientY >= r.top - Ul && e.clientY <= r.bottom + Ul;
}
const bM = H(Z1, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${go.select}`]: t.select
      },
      {
        [`&.${go.select}`]: t[n.variant]
      },
      {
        [`&.${go.error}`]: t.error
      },
      {
        [`&.${go.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${go.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), wM = H(J1, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), CM = H("input", {
  shouldForwardProp: (e) => s1(e) && e !== "classes",
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
  }, z1, t);
}, TM = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var zi, Lo, qp, Zp;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: c,
    defaultValue: d,
    disabled: p,
    displayEmpty: v,
    error: u = !1,
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
    ...D
  } = t, [W, _] = sf({
    controlled: M,
    default: d,
    name: "Select"
  }), [Q, V] = sf({
    controlled: I,
    default: c,
    name: "Select"
  }), q = m.useRef(null), G = m.useRef(null), X = m.useRef(null), U = m.useRef(!1), ne = m.useRef(!1), oe = m.useRef(null), Te = m.useRef(!1), we = m.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ue = m.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), ae = nr(), $e = nr(), Ve = nr(), [Re, Ne] = m.useState(null), {
    current: pe
  } = m.useRef(I != null), [je, _e] = m.useState(), [Ae, ze] = m.useState(null), We = st(n, b), Ze = m.useCallback((Y) => {
    G.current = Y, Y && Ne(Y);
  }, []), Le = Re == null ? void 0 : Re.parentNode;
  m.useImperativeHandle(We, () => ({
    focus: () => {
      G.current.focus();
    },
    node: q.current,
    value: W
  }), [W]);
  const ie = Re !== null && Q, xe = m.useCallback(() => {
    Ve.clear(), ue.current.buffer = "", ue.current.previousSearchIndex = null, ue.current.matchedIndex = null;
  }, [Ve]);
  mt(() => {
    U.current = ie, ie && xe();
  }, [ie, xe]);
  const Ue = m.useCallback(() => {
    ae.clear(), $e.clear();
  }, [ae, $e]), re = m.useCallback(() => {
    Ue(), Te.current = !1, we.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [Ue]), be = m.useCallback(() => {
    oe.current && (oe.current(), oe.current = null);
  }, []);
  m.useEffect(() => {
    ie || (re(), be());
  }, [ie, re, be]), m.useEffect(() => () => {
    re(), be(), xe();
  }, [re, be, xe]), m.useEffect(() => {
    if (!ie || !Le || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      _e(Le.clientWidth);
    });
    return Y.observe(Le), () => {
      Y.disconnect();
    };
  }, [ie, Le, s]), m.useEffect(() => {
    c && Q && Re && !pe && (_e(s ? null : Le.clientWidth), G.current.focus());
  }, [Re, s]), m.useEffect(() => {
    i && G.current.focus();
  }, [i]), m.useEffect(() => {
    if (!C)
      return;
    const Y = yt(G.current).getElementById(C);
    if (Y) {
      const le = () => {
        getSelection().isCollapsed && G.current.focus();
      };
      return Y.addEventListener("click", le), () => {
        Y.removeEventListener("click", le);
      };
    }
  }, [C]);
  const Be = tt((Y, le) => {
    Y || (re(), be()), Y ? (xe(), ze(jI(le)), N && N(le)) : (ze(null), k && k(le)), pe || (U.current = Y, _e(s ? null : Le.clientWidth), V(Y));
  }), ut = () => {
    re(), ne.current ? $e.start(Og, () => {
      we.current.allowUnselectedMouseUp = !0, ae.start(Og, () => {
        we.current.allowSelectedMouseUp = !0;
      });
    }) : ae.start(gM, () => {
      we.current.allowSelectedMouseUp = !0, we.current.allowUnselectedMouseUp = !0;
    });
  }, Ce = (Y) => {
    if (A == null || A(Y), Y.button !== 0 || (Y.preventDefault(), !G.current))
      return;
    G.current.focus();
    const le = yt(Y.currentTarget);
    ut(), be();
    const Pe = (dt) => {
      oe.current = null, G.current && (Ng(dt, G.current) || Ng(dt, X.current) || !U.current && pe || Be(!1, dt));
    };
    le.addEventListener("mouseup", Pe, {
      capture: !0,
      once: !0
    }), oe.current = () => {
      le.removeEventListener("mouseup", Pe, !0);
    }, Be(!0, Y);
  }, Vn = (Y) => {
    Be(!1, Y);
  }, bn = m.Children.toArray(l), io = (Y) => {
    const le = bn.find((Pe) => Pe.props.value === Y.target.value);
    le !== void 0 && (_(le.props.value), E && E(Y, le));
  }, Pr = (Y, le, Pe) => {
    if (_(Pe), E) {
      const dt = Y.nativeEvent || Y, Vt = new dt.constructor(dt.type, dt);
      Object.defineProperty(Vt, "target", {
        writable: !0,
        value: {
          value: Pe,
          name: S
        }
      }), E(Vt, le);
    }
  }, ge = (Y) => (le) => {
    Te.current = !1;
    let Pe;
    if (le.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        Pe = Array.isArray(W) ? W.slice() : [];
        const dt = W.indexOf(Y.props.value);
        dt === -1 ? Pe.push(Y.props.value) : Pe.splice(dt, 1);
      } else
        Pe = Y.props.value;
      Y.props.onClick && Y.props.onClick(le), W !== Pe && Pr(le, Y, Pe), h || Be(!1, le);
    }
  }, Ke = (Y, le) => (Pe) => {
    var hl, zo;
    if ((zo = (hl = Y.props).onMouseUp) == null || zo.call(hl, Pe), Te.current) {
      Te.current = !1;
      return;
    }
    const dt = !we.current.allowSelectedMouseUp && le, Vt = !we.current.allowUnselectedMouseUp && !le;
    dt || Vt || Pe.currentTarget.click();
  }, Pt = (Y) => {
    var Jp;
    const le = ue.current, Pe = le.buffer !== "";
    if (ie || h || p || Y.defaultPrevented || (Jp = Y.nativeEvent) != null && Jp.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === uo && !Pe)
      return !1;
    Y.key === uo && Y.preventDefault();
    const dt = le.buffer === "", {
      options: Vt,
      selectedIndex: hl
    } = hM(bn, W);
    if (Vt.length === 0)
      return Y.key !== uo && xe(), !0;
    dt && (le.previousSearchIndex = hl);
    const zo = Y.key.toLowerCase();
    le.buffer === zo && mM(Vt, zo) && (le.buffer = "", le.previousSearchIndex = le.matchedIndex), le.buffer += zo, Ve.start(yM, xe);
    const ou = pM(Vt, le.buffer, (le.previousSearchIndex ?? -1) + 1);
    if (ou !== -1) {
      const iu = Vt[ou];
      return le.matchedIndex = ou, ua(W, iu.value) || Pr(Y, iu.child, iu.value), !0;
    }
    return Y.key !== uo && xe(), !0;
  }, pl = (Y) => {
    if (!g) {
      const le = Pt(Y), Pe = Y.key === uo || Y.key === vM || Y.key === xM || Y.key === SM;
      !le && Pe && (Y.preventDefault(), Be(!0, Y)), T == null || T(Y);
    }
  }, B = (Y) => {
    xe(), !ie && w && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: W,
        name: S
      }
    }), w(Y));
  }, me = (Y) => (le) => {
    var Pe, dt;
    (dt = (Pe = Y == null ? void 0 : Y.props) == null ? void 0 : Pe.onKeyDown) == null || dt.call(Pe, le), le.key === uo && le.target === le.currentTarget && !le.defaultPrevented && (le.preventDefault(), le.repeat || le.currentTarget.click());
  };
  delete D["aria-invalid"];
  let Ie, lt;
  const At = [];
  let Ir = !1, Mr = !1;
  (Fa({
    value: W
  }) || v) && ($ ? Ie = $(W) : Ir = !0);
  const ru = bn.map((Y) => {
    if (!/* @__PURE__ */ m.isValidElement(Y))
      return null;
    let le;
    if (h) {
      if (!Array.isArray(W))
        throw new Error(kr(2));
      le = W.some((Pe) => ua(Pe, Y.props.value)), le && Ir && At.push(Y.props.children);
    } else
      le = ua(W, Y.props.value), le && Ir && (lt = Y.props.children);
    return le && (Mr = !0), /* @__PURE__ */ m.cloneElement(Y, {
      "aria-selected": le ? "true" : "false",
      onMouseDown: (Pe) => {
        var dt, Vt;
        Te.current = !0, (Vt = (dt = Y.props).onMouseDown) == null || Vt.call(dt, Pe);
      },
      onPointerDown: (Pe) => {
        var dt, Vt;
        Te.current = !0, (Vt = (dt = Y.props).onPointerDown) == null || Vt.call(dt, Pe);
      },
      onClick: ge(Y),
      onMouseUp: Ke(Y, le),
      onKeyUp: (Pe) => {
        Pe.key === uo && Pe.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(Pe);
      },
      onKeyDown: me(Y),
      role: "option",
      selected: le,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  mt(() => {
    ne.current = Mr, !ie && !h && !Mr && xe();
  }, [Mr, h, ie, xe]), Ir && (h ? At.length === 0 ? Ie = null : Ie = At.reduce((Y, le, Pe) => (Y.push(le), Pe < At.length - 1 && Y.push(", "), Y), []) : Ie = lt);
  let ml = je;
  !s && pe && Re && (ml = Le.clientWidth);
  let Li;
  typeof O < "u" ? Li = O : Li = p ? null : 0;
  const te = j.id || (S ? `mui-component-select-${S}` : void 0), Z = {
    ...t,
    variant: z,
    value: W,
    open: ie,
    error: u
  }, ve = kM(Z), Ee = typeof ((zi = y.slotProps) == null ? void 0 : zi.paper) == "function" ? y.slotProps.paper(Z) : (Lo = y.slotProps) == null ? void 0 : Lo.paper, vt = st(Ee == null ? void 0 : Ee.ref, X), dr = typeof ((qp = y.slotProps) == null ? void 0 : qp.list) == "function" ? y.slotProps.list(Z) : (Zp = y.slotProps) == null ? void 0 : Zp.list, Kn = Tr(), so = Tr();
  return /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ f.jsx(bM, {
      as: "div",
      ref: Ze,
      tabIndex: Li,
      role: "combobox",
      "aria-controls": ie ? Kn : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": ie ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": g ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": P ? "true" : void 0,
      "aria-invalid": u ? "true" : void 0,
      onKeyDown: pl,
      onMouseDown: p || g ? null : Ce,
      onBlur: B,
      onFocus: R,
      ...j,
      ownerState: Z,
      className: J(j.className, ve.select, a),
      id: te,
      children: AI(Ie) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ag || (Ag = /* @__PURE__ */ f.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Ie
    }), /* @__PURE__ */ f.jsx(CM, {
      "aria-invalid": u,
      value: Array.isArray(W) ? W.join(",") : W,
      name: S,
      ref: q,
      "aria-hidden": !0,
      onChange: io,
      tabIndex: -1,
      disabled: p,
      readOnly: g,
      className: ve.nativeInput,
      autoFocus: i,
      required: P,
      ...D,
      id: D.id ?? so,
      ownerState: Z
    }), /* @__PURE__ */ f.jsx(wM, {
      as: x,
      className: ve.icon,
      ownerState: Z
    }), /* @__PURE__ */ f.jsx(OI, {
      value: Ae,
      children: /* @__PURE__ */ f.jsx(qI, {
        id: `menu-${S || ""}`,
        anchorEl: Le,
        open: ie,
        onClose: Vn,
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
            id: Kn,
            ...dr
          },
          paper: {
            ...Ee,
            ref: vt,
            style: {
              minWidth: ml,
              ...Ee == null ? void 0 : Ee.style
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
  }, z1, t);
  return {
    ...t,
    ...r
  };
}, Qp = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => an(e) && e !== "variant"
}, RM = H(Yp, Qp)(""), PM = H(Xp, Qp)(""), IM = H(Kp, Qp)(""), Cs = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: c = !1,
    IconComponent: d = kR,
    id: p,
    input: v,
    inputProps: u,
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
  } = r, N = h ? oM : TM, [I] = Ni({
    props: r,
    states: ["variant", "error"]
  }), g = I.variant || T, $ = {
    ...r,
    variant: g,
    classes: s
  }, P = EM($), {
    root: j,
    ...O
  } = P, L = v || {
    standard: /* @__PURE__ */ f.jsx(RM, {
      ownerState: $
    }),
    outlined: /* @__PURE__ */ f.jsx(PM, {
      label: x,
      ownerState: $
    }),
    filled: /* @__PURE__ */ f.jsx(IM, {
      ownerState: $
    })
  }[g], M = st(n, oo(L));
  return /* @__PURE__ */ f.jsx(m.Fragment, {
    children: /* @__PURE__ */ m.cloneElement(L, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: N,
      inputProps: {
        children: i,
        error: I.error,
        IconComponent: d,
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
        ...u,
        classes: u ? Bt(O, u.classes) : O,
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
Cs.muiName = "Select";
function MM(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = nr();
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
  const l = tt((y, h) => {
    r == null || r(y, h);
  }), a = tt((y) => {
    !r || y == null || s.start(y, () => {
      l(null, "timeout");
    });
  });
  m.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const c = (y) => {
    r == null || r(y, "clickaway");
  }, d = s.clear, p = m.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), v = (y) => (h) => {
    const S = y.onBlur;
    S == null || S(h), p();
  }, u = (y) => (h) => {
    const S = y.onFocus;
    S == null || S(h), d();
  }, x = (y) => (h) => {
    const S = y.onMouseEnter;
    S == null || S(h), d();
  }, b = (y) => (h) => {
    const S = y.onMouseLeave;
    S == null || S(h), p();
  };
  return m.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", p), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", d);
      };
  }, [n, o, p, d]), {
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
        onFocus: u(h),
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
}, AM = H(ar, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(Se(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Zd(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Zd(e.palette.background.default, t),
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
}), NM = H("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), LM = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, c = r, d = jM(c);
  return /* @__PURE__ */ f.jsxs(AM, {
    role: l,
    elevation: 6,
    className: J(d.root, i),
    ownerState: c,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ f.jsx(OM, {
      className: d.message,
      ownerState: c,
      children: s
    }), o ? /* @__PURE__ */ f.jsx(NM, {
      className: d.action,
      ownerState: c,
      children: o
    }) : null]
  });
});
function zM(e) {
  return de("MuiSnackbar", e);
}
ce("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const BM = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${se(n.vertical)}${se(n.horizontal)}`]
  };
  return fe(r, zM, t);
}, DM = H("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${se(n.anchorOrigin.vertical)}${se(n.anchorOrigin.horizontal)}`]];
  }
})(Se(({
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
  const r = he({
    props: t,
    name: "MuiSnackbar"
  }), o = ur(), i = {
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
    children: d,
    className: p,
    disableWindowBlurListener: v = !1,
    message: u,
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
  }, N = BM(A), {
    getRootProps: I,
    onClickAway: g
  } = MM(A), [$, P] = m.useState(!0), j = {
    slots: E,
    slotProps: k
  }, [O, L] = ye("root", {
    ref: n,
    className: [N.root, p],
    elementType: DM,
    getSlotProps: I,
    externalForwardedProps: {
      ...j,
      ...T
    },
    ownerState: A
  }), [M, {
    ownerState: z,
    ...D
  }] = ye("clickAwayListener", {
    elementType: YR,
    externalForwardedProps: j,
    getSlotProps: (q) => ({
      onClickAway: (...G) => {
        var U;
        const X = G[0];
        (U = q.onClickAway) == null || U.call(q, ...G), !(X != null && X.defaultMuiPrevented) && g(...G);
      }
    }),
    ownerState: A
  }), [W, _] = ye("content", {
    elementType: LM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    additionalProps: {
      message: u,
      action: s
    },
    ownerState: A
  }), [Q, V] = ye("transition", {
    elementType: Qs,
    externalForwardedProps: j,
    getSlotProps: (q) => ({
      onEnter: (...G) => {
        var X;
        (X = q.onEnter) == null || X.call(q, ...G), P(!1);
      },
      onExited: (...G) => {
        var X;
        (X = q.onExited) == null || X.call(q, ...G), P(!0);
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
  return !S && $ ? null : /* @__PURE__ */ f.jsx(M, {
    ...D,
    ...E.clickAwayListener && {
      ownerState: z
    },
    children: /* @__PURE__ */ f.jsx(O, {
      ...L,
      children: /* @__PURE__ */ f.jsx(Q, {
        ...V,
        children: d || /* @__PURE__ */ f.jsx(W, {
          ..._
        })
      })
    })
  });
});
function _M(e) {
  return de("MuiTooltip", e);
}
const wn = ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
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
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${se(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return fe(s, _M, t);
}, HM = H(P1, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(Se(({
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
}))), VM = H("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${se(n.placement.split("-")[0])}`]];
  }
})(Se(({
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
      lineHeight: `${WM(16 / 14)}em`,
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
}))), KM = H("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(Se(({
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
const Lg = new eu();
let es = {
  x: 0,
  y: 0
};
function Vl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const jr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: i,
    classes: s,
    describeChild: l = !1,
    disableFocusListener: a = !1,
    disableHoverListener: c = !1,
    disableInteractive: d = !1,
    disableTouchListener: p = !1,
    enterDelay: v = 100,
    enterNextDelay: u = 0,
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
  } = r, I = /* @__PURE__ */ m.isValidElement(i) ? i : /* @__PURE__ */ f.jsx("span", {
    children: i
  }), g = ur(), [$, P] = m.useState(), [j, O] = m.useState(null), L = m.useRef(!1), M = d || b, z = nr(), D = nr(), W = nr(), _ = nr(), [Q, V] = sf({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let q = Q;
  const G = Tr(C), X = m.useRef(), U = tt(() => {
    X.current !== void 0 && (document.body.style.WebkitUserSelect = X.current, X.current = void 0), _.clear();
  });
  m.useEffect(() => U, [U]);
  const ne = (ge) => {
    Lg.clear(), Hl = !0, V(!0), w && !q && w(ge);
  }, oe = tt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ge) => {
      Lg.start(800 + y, () => {
        Hl = !1;
      }), V(!1), S && q && S(ge), z.start(g.transitions.duration.shortest, () => {
        L.current = !1;
      });
    }
  ), Te = (ge) => {
    $ != null && $.disabled || L.current && ge.type !== "touchstart" || ($ && $.removeAttribute("title"), D.clear(), W.clear(), v || Hl && u ? D.start(Hl ? u : v, () => {
      ne(ge);
    }) : ne(ge));
  }, we = (ge) => {
    D.clear(), W.start(y, () => {
      oe(ge);
    });
  }, [, ue] = m.useState(!1), ae = (ge) => {
    const Ke = (ge == null ? void 0 : ge.target) ?? $;
    if (!Ke || Ke.disabled || !Ua(Ke)) {
      ue(!1);
      const Pt = ge ?? new Event("blur");
      !ge && Ke && (Object.defineProperty(Pt, "target", {
        value: Ke
      }), Object.defineProperty(Pt, "currentTarget", {
        value: Ke
      })), we(Pt);
    }
  }, $e = (ge) => {
    if ($ || P(ge.currentTarget), Ua(ge.target)) {
      const Ke = (Pt) => {
        Pt.target.disabled && ae(Pt), Pt.target.removeEventListener("blur", Ke);
      };
      ge.target.addEventListener("blur", Ke), ue(!0), Te(ge);
    }
  }, Ve = (ge) => {
    L.current = !0;
    const Ke = I.props;
    Ke.onTouchStart && Ke.onTouchStart(ge);
  }, Re = (ge) => {
    Ve(ge), W.clear(), z.clear(), U(), X.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", _.start(x, () => {
      document.body.style.WebkitUserSelect = X.current, Te(ge);
    });
  }, Ne = (ge) => {
    I.props.onTouchEnd && I.props.onTouchEnd(ge), U(), W.start(h, () => {
      oe(ge);
    });
  };
  m.useEffect(() => {
    if (!q)
      return;
    function ge(Ke) {
      Ke.key === "Escape" && oe(Ke);
    }
    return document.addEventListener("keydown", ge), () => {
      document.removeEventListener("keydown", ge);
    };
  }, [oe, q]);
  const pe = st(oo(I), P, n);
  !A && A !== 0 && (q = !1);
  const je = m.useRef(), _e = (ge) => {
    const Ke = I.props;
    Ke.onMouseMove && Ke.onMouseMove(ge), es = {
      x: ge.clientX,
      y: ge.clientY
    }, je.current && je.current.update();
  }, Ae = {}, ze = typeof A == "string";
  l ? (Ae.title = !q && ze && !c ? A : null, Ae["aria-describedby"] = q ? G : null) : (Ae["aria-label"] = ze ? A : null, Ae["aria-labelledby"] = q && !ze ? G : null);
  const We = {
    ...Ae,
    ...N,
    ...I.props,
    className: J(N.className, I.props.className),
    onTouchStart: Ve,
    ref: pe,
    ...b ? {
      onMouseMove: _e
    } : {}
  }, Ze = {};
  p || (We.onTouchStart = Re, We.onTouchEnd = Ne), c || (We.onMouseOver = Vl(Te, We.onMouseOver), We.onMouseLeave = Vl(we, We.onMouseLeave), M || (Ze.onMouseOver = Te, Ze.onMouseLeave = we)), a || (We.onFocus = Vl($e, We.onFocus), We.onBlur = Vl(ae, We.onBlur), M || (Ze.onFocus = $e, Ze.onBlur = ae));
  const Le = {
    ...r,
    arrow: o,
    disableInteractive: M,
    placement: k,
    touch: L.current
  }, ie = typeof R.popper == "function" ? R.popper(Le) : R.popper, xe = m.useMemo(() => {
    var Ke;
    let ge = [{
      name: "arrow",
      enabled: !!j,
      options: {
        element: j,
        padding: 4
      }
    }];
    return (Ke = ie == null ? void 0 : ie.popperOptions) != null && Ke.modifiers && (ge = ge.concat(ie.popperOptions.modifiers)), {
      ...ie == null ? void 0 : ie.popperOptions,
      modifiers: ge
    };
  }, [j, ie == null ? void 0 : ie.popperOptions]), Ue = UM(Le), re = {
    slots: T,
    slotProps: {
      arrow: R.arrow,
      popper: ie,
      tooltip: R.tooltip,
      transition: R.transition
    }
  }, [be, Be] = ye("popper", {
    elementType: HM,
    externalForwardedProps: re,
    ownerState: Le,
    className: Ue.popper
  }), [ut, Ce] = ye("transition", {
    elementType: Qs,
    externalForwardedProps: re,
    ownerState: Le
  }), [Vn, bn] = ye("tooltip", {
    elementType: VM,
    className: Ue.tooltip,
    externalForwardedProps: re,
    ownerState: Le
  }), [io, Pr] = ye("arrow", {
    elementType: KM,
    className: Ue.arrow,
    externalForwardedProps: re,
    ownerState: Le,
    ref: O
  });
  return /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ m.cloneElement(I, We), /* @__PURE__ */ f.jsx(be, {
      as: P1,
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
      } : $,
      popperRef: je,
      open: $ ? q : !1,
      id: G,
      transition: !0,
      ...Ze,
      ...Be,
      popperOptions: xe,
      children: ({
        TransitionProps: ge
      }) => /* @__PURE__ */ f.jsx(ut, {
        timeout: g.transitions.duration.shorter,
        ...ge,
        ...Ce,
        children: /* @__PURE__ */ f.jsxs(Vn, {
          ...bn,
          children: [A, o ? /* @__PURE__ */ f.jsx(io, {
            ...Pr
          }) : null]
        })
      })
    })]
  });
}), ot = O2({
  createStyledComponent: H("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => he({
    props: e,
    name: "MuiStack"
  })
});
function YM(e) {
  return de("MuiTab", e);
}
const zn = ce("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), GM = (e) => {
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
  return fe(c, YM, t);
}, XM = H(jo, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${se(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${zn.icon}`]: t.icon
    }];
  }
})(Se(({
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
      [`& > .${zn.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${zn.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${zn.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${zn.icon}`]: {
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
      [`&.${zn.selected}`]: {
        opacity: 1
      },
      [`&.${zn.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${zn.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${zn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${zn.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${zn.disabled}`]: {
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
}))), Kl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
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
    indicator: d,
    label: p,
    onChange: v,
    onClick: u,
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
  } = r, E = B1(), k = F1({
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
  }, N = GM(A), I = a && p && /* @__PURE__ */ m.isValidElement(a) ? /* @__PURE__ */ m.cloneElement(a, {
    className: J(N.icon, a.props.className)
  }) : a, g = (P) => {
    !b && v && v(P, h), u && u(P);
  }, $ = (P) => {
    C && !b && v && v(P, h), x && x(P);
  };
  return /* @__PURE__ */ f.jsxs(XM, {
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
    children: [c === "top" || c === "start" ? /* @__PURE__ */ f.jsxs(m.Fragment, {
      children: [I, p]
    }) : /* @__PURE__ */ f.jsxs(m.Fragment, {
      children: [p, I]
    }), d]
  });
}), tx = /* @__PURE__ */ m.createContext();
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
})(Se(({
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
}))), zg = "table", Bg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = zg,
    padding: s = "normal",
    size: l = "medium",
    stickyHeader: a = !1,
    ...c
  } = r, d = {
    ...r,
    component: i,
    padding: s,
    size: l,
    stickyHeader: a
  }, p = qM(d), v = m.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ f.jsx(tx.Provider, {
    value: v,
    children: /* @__PURE__ */ f.jsx(ZM, {
      as: i,
      role: i === zg ? null : "table",
      ref: n,
      className: J(p.root, o),
      ownerState: d,
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
}, Dg = "tbody", Fg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Dg,
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
      role: i === Dg ? null : "rowgroup",
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
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${se(r)}`, o !== "normal" && `padding${se(o)}`, `size${se(i)}`]
  };
  return fe(l, r5, t);
}, s5 = H("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${se(n.size)}`], n.padding !== "normal" && t[`padding${se(n.padding)}`], n.align !== "inherit" && t[`align${se(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(Se(({
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
}))), Ot = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTableCell"
  }), {
    align: o = "inherit",
    className: i,
    component: s,
    padding: l,
    scope: a,
    size: c,
    sortDirection: d,
    variant: p,
    ...v
  } = r, u = m.useContext(tx), x = m.useContext(nu), b = x && x.variant === "head";
  let C;
  s ? C = s : C = b ? "th" : "td";
  let y = a;
  C === "td" ? y = void 0 : !y && b && (y = "col");
  const h = p || x && x.variant, S = {
    ...r,
    align: o,
    component: C,
    padding: l || (u && u.padding ? u.padding : "normal"),
    size: c || (u && u.size ? u.size : "medium"),
    sortDirection: d,
    stickyHeader: h === "head" && u && u.stickyHeader,
    variant: h
  }, w = i5(S);
  let E = null;
  return d && (E = d === "asc" ? "ascending" : "descending"), /* @__PURE__ */ f.jsx(s5, {
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
  const r = he({
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
}, _g = "thead", Wg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = _g,
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
      role: i === _g ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), h5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), g5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function y5(e) {
  return de("MuiTableRow", e);
}
const Ug = ce("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), v5 = (e) => {
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
})(Se(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${Ug.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Ug.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Hg = "tr", ts = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Hg,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, c = m.useContext(nu), d = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: c && c.variant === "head",
    footer: c && c.variant === "footer"
  }, p = v5(d);
  return /* @__PURE__ */ f.jsx(x5, {
    as: i,
    ref: n,
    className: J(p.root, o),
    role: i === Hg ? null : "row",
    ownerState: d,
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
  const d = () => {
    c = !0;
  }, p = (v) => {
    if (c) {
      o(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = v);
    const u = Math.min(1, (v - l) / s);
    if (t[e] = i(u) * (n - a) + a, u >= 1) {
      requestAnimationFrame(() => {
        o(null);
      });
      return;
    }
    requestAnimationFrame(p);
  };
  return a === n ? (o(new Error("Element already at target position")), d) : (requestAnimationFrame(p), d);
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
  return mt(() => {
    const s = al(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = gn(o.current);
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
}, R5 = H(jo, {
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
  const r = he({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: o,
    slots: i = {},
    slotProps: s = {},
    direction: l,
    orientation: a,
    disabled: c,
    ...d
  } = r, {
    nativeButton: p,
    ...v
  } = d, u = ll(), x = {
    isRtl: u,
    ...r
  }, b = E5(x), C = i.StartScrollButtonIcon ?? h5, y = i.EndScrollButtonIcon ?? g5, h = Mi({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  }), S = Mi({
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
        "--TabScrollButton-svgRotate": `rotate(${u ? -90 : 90}deg)`
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
const Gu = ce("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), M5 = (e) => {
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
      [`& .${Gu.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Gu.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(Se(({
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
      [`& .${Gu.scrollButtons}`]: {
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
})(Se(({
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
}))), N5 = H(C5)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Vg = {}, L5 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTabs"
  }), o = ur(), i = ll(), s = ul(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: c,
    centered: d = !1,
    children: p,
    className: v,
    component: u = "div",
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
    component: u,
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
    centered: d && !I,
    scrollButtonsHideMobile: !x
  }, z = M5(M), D = Mi({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: M
  }), W = Mi({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: M
  }), [_, Q] = m.useState(!1), [V, q] = m.useState(Vg), [G, X] = m.useState(!1), [U, ne] = m.useState(!1), [oe, Te] = m.useState(!1), we = R === !1 ? null : R, [ue, ae] = m.useState(!1), [$e, Ve] = m.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Re = /* @__PURE__ */ new Map(), Ne = m.useRef(null), pe = m.useRef(null), je = {
    slots: w,
    slotProps: E
  }, _e = () => {
    const te = Ne.current;
    let Z;
    if (te) {
      const Ee = te.getBoundingClientRect();
      Z = {
        clientWidth: te.clientWidth,
        scrollLeft: te.scrollLeft,
        scrollTop: te.scrollTop,
        scrollWidth: te.scrollWidth,
        top: Ee.top,
        bottom: Ee.bottom,
        left: Ee.left,
        right: Ee.right
      };
    }
    let ve;
    if (te && R !== !1) {
      const Ee = pe.current.children;
      if (Ee.length > 0) {
        const vt = Ee[Re.get(R)];
        ve = vt ? vt.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: Z,
      tabMeta: ve
    };
  }, Ae = tt(() => {
    const {
      tabsMeta: te,
      tabMeta: Z
    } = _e();
    let ve = 0, Ee;
    g ? (Ee = "top", Z && te && (ve = Z.top - te.top + te.scrollTop)) : (Ee = i ? "right" : "left", Z && te && (ve = (i ? -1 : 1) * (Z[Ee] - te[Ee] + te.scrollLeft)));
    const vt = {
      [Ee]: ve,
      // May be wrong until the font is loaded.
      [L]: Z ? Z[L] : 0
    };
    if (typeof V[Ee] != "number" || typeof V[L] != "number")
      q(vt);
    else {
      const dr = Math.abs(V[Ee] - vt[Ee]), Kn = Math.abs(V[L] - vt[L]);
      (dr >= 1 || Kn >= 1) && q(vt);
    }
  }), ze = (te, {
    animation: Z = !0
  } = {}) => {
    Z && !s.shouldReduceMotion ? b5($, Ne.current, te, {
      duration: o.transitions.duration.standard
    }) : Ne.current[$] = te;
  }, We = (te) => {
    let Z = Ne.current[$];
    g ? Z += te : Z += te * (i ? -1 : 1), ze(Z);
  }, Ze = () => {
    const te = Ne.current[O];
    let Z = 0;
    const ve = Array.from(pe.current.children);
    for (let Ee = 0; Ee < ve.length; Ee += 1) {
      const vt = ve[Ee];
      if (Z + vt[O] > te) {
        Ee === 0 && (Z = te);
        break;
      }
      Z += vt[O];
    }
    return Z;
  }, Le = () => {
    We(-1 * Ze());
  }, ie = () => {
    We(Ze());
  }, [xe, {
    onChange: Ue,
    ...re
  }] = ye("scrollbar", {
    className: J(z.scrollableX, z.hideScrollbar),
    elementType: N5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: je,
    ownerState: M
  }), be = m.useCallback((te) => {
    Ue == null || Ue(te), Ve({
      overflow: null,
      scrollbarWidth: te
    });
  }, [Ue]), [Be, ut] = ye("scrollButtons", {
    className: z.scrollButtons,
    elementType: P5,
    externalForwardedProps: je,
    ownerState: M,
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
  }), Ce = () => {
    const te = {};
    te.scrollbarSizeListener = I ? /* @__PURE__ */ f.jsx(xe, {
      ...re,
      onChange: be
    }) : null;
    const ve = I && (h === "auto" && (G || U) || h === !0);
    return te.scrollButtonStart = ve ? /* @__PURE__ */ f.jsx(Be, {
      direction: i ? "right" : "left",
      onClick: Le,
      disabled: !G,
      ...ut
    }) : null, te.scrollButtonEnd = ve ? /* @__PURE__ */ f.jsx(Be, {
      direction: i ? "left" : "right",
      onClick: ie,
      disabled: !U,
      ...ut
    }) : null, te;
  }, Vn = tt((te) => {
    const {
      tabsMeta: Z,
      tabMeta: ve
    } = _e();
    if (!(!ve || !Z)) {
      if (ve[P] < Z[P]) {
        const Ee = Z[$] + (ve[P] - Z[P]);
        ze(Ee, {
          animation: te
        });
      } else if (ve[j] > Z[j]) {
        const Ee = Z[$] + (ve[j] - Z[j]);
        ze(Ee, {
          animation: te
        });
      }
    }
  }), bn = tt(() => {
    I && h !== !1 && Te(!oe);
  });
  m.useEffect(() => {
    const te = al(() => {
      Ne.current && Ae();
    });
    let Z;
    const ve = (dr) => {
      dr.forEach((Kn) => {
        Kn.removedNodes.forEach((so) => {
          Z == null || Z.unobserve(so);
        }), Kn.addedNodes.forEach((so) => {
          Z == null || Z.observe(so);
        });
      }), te(), bn();
    }, Ee = gn(Ne.current);
    Ee.addEventListener("resize", te);
    let vt;
    return typeof ResizeObserver < "u" && (Z = new ResizeObserver(te), Array.from(pe.current.children).forEach((dr) => {
      Z.observe(dr);
    })), typeof MutationObserver < "u" && (vt = new MutationObserver(ve), vt.observe(pe.current, {
      childList: !0
    })), () => {
      te.clear(), Ee.removeEventListener("resize", te), vt == null || vt.disconnect(), Z == null || Z.disconnect();
    };
  }, [Ae, bn]), m.useEffect(() => {
    const te = Array.from(pe.current.children), Z = te.length;
    if (typeof IntersectionObserver < "u" && Z > 0 && I && h !== !1) {
      const ve = te[0], Ee = te[Z - 1], vt = {
        root: Ne.current,
        threshold: 0.99
      }, dr = (Lo) => {
        X(!Lo[0].isIntersecting);
      }, Kn = new IntersectionObserver(dr, vt);
      Kn.observe(ve);
      const so = (Lo) => {
        ne(!Lo[0].isIntersecting);
      }, zi = new IntersectionObserver(so, vt);
      return zi.observe(Ee), () => {
        Kn.disconnect(), zi.disconnect();
      };
    }
  }, [I, h, oe, p == null ? void 0 : p.length]), m.useEffect(() => {
    Q(!0);
  }, []), m.useEffect(() => {
    Ae();
  }), m.useEffect(() => {
    Vn(Vg !== V);
  }, [Vn, V]), m.useImperativeHandle(c, () => ({
    updateIndicator: Ae,
    updateScrollButtons: bn
  }), [Ae, bn]);
  const [io, Pr] = ye("indicator", {
    className: z.indicator,
    elementType: O5,
    externalForwardedProps: je,
    ownerState: M,
    additionalProps: {
      style: V
    }
  }), ge = /* @__PURE__ */ f.jsx(io, {
    ...Pr
  }), Ke = D1({
    activeItemId: ue ? void 0 : we,
    orientation: y,
    isRtl: i
  }), Pt = Ke.getContainerProps(), B = m.Children.toArray(p).filter(m.isValidElement).map((te, Z) => {
    const ve = te.props.value === void 0 ? Z : te.props.value;
    return Re.set(ve, Z), {
      child: te,
      index: Z,
      childValue: ve
    };
  }).map(({
    child: te,
    childValue: Z
  }) => {
    const ve = Z === R;
    return /* @__PURE__ */ m.cloneElement(te, {
      fullWidth: T === "fullWidth",
      indicator: ve && !_ && ge,
      selected: ve,
      selectionFollowsFocus: S,
      onChange: C,
      textColor: k,
      value: Z
    });
  }), me = Ce(), [Ie, lt] = ye("root", {
    ref: n,
    className: J(z.root, v),
    elementType: $5,
    externalForwardedProps: {
      ...je,
      ...N,
      component: u
    },
    ownerState: M
  }), [At, Ir] = ye("scroller", {
    ref: Ne,
    className: z.scroller,
    elementType: j5,
    externalForwardedProps: je,
    ownerState: M,
    additionalProps: {
      style: {
        overflow: $e.overflow,
        [g ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: A ? void 0 : -$e.scrollbarWidth
      }
    }
  }), Mr = st(Pt.ref, pe), ru = (te) => {
    const Z = pe.current, ve = tr(yt(Z));
    (ve == null ? void 0 : ve.getAttribute("role")) === "tab" && Pt.onKeyDown(te);
  }, [ml, Li] = ye("list", {
    ref: Mr,
    className: z.list,
    elementType: A5,
    externalForwardedProps: je,
    ownerState: M,
    getSlotProps: (te) => ({
      ...te,
      onBlur: (Z) => {
        var ve;
        Co(Z.currentTarget, Z.relatedTarget) || ae(!1), (ve = te.onBlur) == null || ve.call(te, Z);
      },
      onKeyDown: (Z) => {
        var ve;
        ru(Z), (ve = te.onKeyDown) == null || ve.call(te, Z);
      },
      onFocus: (Z) => {
        var ve;
        ae(!0), Pt.onFocus(Z), (ve = te.onFocus) == null || ve.call(te, Z);
      }
    })
  });
  return /* @__PURE__ */ f.jsxs(Ie, {
    ...lt,
    children: [me.scrollButtonStart, me.scrollbarSizeListener, /* @__PURE__ */ f.jsxs(At, {
      ...Ir,
      children: [/* @__PURE__ */ f.jsx(ml, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": y === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Li,
        children: /* @__PURE__ */ f.jsx(Gp.Provider, {
          value: Ke,
          children: B
        })
      }), _ && ge]
    }), me.scrollButtonEnd]
  });
});
function z5(e) {
  return de("MuiTextField", e);
}
ce("MuiTextField", ["root"]);
const B5 = {
  standard: Yp,
  filled: Kp,
  outlined: Xp
}, D5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, z5, t);
}, F5 = H(ZP, {
  name: "MuiTextField",
  slot: "Root"
})({}), fo = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: i = !1,
    children: s,
    className: l,
    color: a = "primary",
    defaultValue: c,
    disabled: d = !1,
    error: p = !1,
    fullWidth: v = !1,
    helperText: u,
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
    disabled: d,
    error: p,
    fullWidth: v,
    multiline: S,
    required: A,
    select: I,
    variant: O
  }, z = D5(M), D = Tr(x), W = u && D ? `${D}-helper-text` : void 0, _ = C && D ? `${D}-label` : void 0, Q = B5[O], V = {
    slots: g,
    slotProps: $
  }, [q, G] = ye("select", {
    elementType: Cs,
    externalForwardedProps: V,
    ownerState: M
  }), X = I && G.native, U = {}, ne = V.slotProps.inputLabel;
  O === "outlined" && (ne && typeof ne.shrink < "u" && (U.notched = ne.shrink), U.label = C), I && (X || (U.id = void 0), U["aria-describedby"] = void 0);
  const [oe, Te] = ye("root", {
    elementType: F5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...V,
      ...L
    },
    ownerState: M,
    className: J(z.root, l),
    ref: n,
    additionalProps: {
      disabled: d,
      error: p,
      fullWidth: v,
      required: A,
      color: a,
      variant: O
    }
  }), [we, ue] = ye("input", {
    elementType: Q,
    externalForwardedProps: V,
    additionalProps: U,
    ownerState: M
  }), [ae, $e] = ye("inputLabel", {
    elementType: SI,
    externalForwardedProps: V,
    ownerState: M
  }), [Ve, Re] = ye("htmlInput", {
    elementType: "input",
    externalForwardedProps: V,
    ownerState: M
  }), [Ne, pe] = ye("formHelperText", {
    elementType: tI,
    externalForwardedProps: V,
    ownerState: M
  }), je = /* @__PURE__ */ f.jsx(we, {
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
    id: D,
    inputRef: b,
    onBlur: E,
    onChange: k,
    onFocus: R,
    placeholder: T,
    inputProps: Re,
    slots: {
      input: g.htmlInput ? Ve : void 0
    },
    ...ue
  });
  return /* @__PURE__ */ f.jsxs(oe, {
    ...Te,
    children: [C != null && C !== "" && /* @__PURE__ */ f.jsx(ae, {
      htmlFor: I && !X ? void 0 : D,
      id: _,
      ...I && !X && {
        component: "div"
      },
      ...$e,
      children: C
    }), I ? /* @__PURE__ */ f.jsx(q, {
      "aria-describedby": W,
      id: D,
      labelId: _,
      value: j,
      input: je,
      ...G,
      children: s
    }) : je, u && /* @__PURE__ */ f.jsx(Ne, {
      id: W,
      ...pe,
      children: u
    })]
  });
}), Kg = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), Xu = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), _5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M8 5v14l11-7z"
})), W5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M6 6h12v12H6z"
})), U5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
})), H5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), V5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
})), K5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
})), Yg = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"
})), Qu = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M15 9H9v6h6zm-2 4h-2v-2h2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2zm-4 6H7V7h10z"
})), Y5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"
})), G5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), X5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), Gg = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
})), Q5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), q5 = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"
})), qu = nt(/* @__PURE__ */ f.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), qn = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', Ar = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function nx({
  children: e,
  sx: t
}) {
  return /* @__PURE__ */ f.jsx(
    ke,
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
function Zu({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ f.jsxs(ar, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ f.jsxs(
      ot,
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
          typeof e == "string" ? /* @__PURE__ */ f.jsx(nx, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ f.jsx(Xe, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function Ko({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ f.jsxs(Xe, { sx: n, children: [
    /* @__PURE__ */ f.jsxs(
      ot,
      {
        direction: "row",
        spacing: 0.75,
        sx: { alignItems: "baseline", mb: 0.75 },
        children: [
          /* @__PURE__ */ f.jsx(
            ke,
            {
              component: "label",
              sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
              children: e
            }
          ),
          t && /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
        ]
      }
    ),
    r
  ] });
}
function po({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ f.jsxs(Xe, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ f.jsx(nx, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ f.jsx(
      ke,
      {
        sx: {
          fontFamily: n ? qn : void 0,
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
function Xg({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ f.jsx(
    Xe,
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
function Qg({
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
    ar,
    {
      sx: {
        bgcolor: Ar.bg,
        borderRadius: "8px",
        px: 2,
        py: 3,
        textAlign: "center",
        fontFamily: qn,
        fontSize: 12,
        color: Ar.dim
      },
      children: "No log output recorded yet."
    }
  ) : /* @__PURE__ */ f.jsxs(
    ar,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: Ar.bg,
        color: Ar.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "22rem",
        overflowY: "auto",
        fontFamily: qn,
        fontSize: 12,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ f.jsx(
          Xe,
          {
            sx: {
              color: i.stream === "stderr" ? Ar.err : i.stream === "meta" ? Ar.dim : Ar.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ f.jsx(Xe, { sx: { color: Ar.dim }, children: "▍running…" }),
        /* @__PURE__ */ f.jsx("div", { ref: n })
      ]
    }
  );
}
const J5 = {
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
function e$({ ctx: e }) {
  const t = m.useMemo(
    () => Gc(e.theme ?? {}),
    [e.theme]
  );
  return /* @__PURE__ */ f.jsx(Uk, { theme: t, children: /* @__PURE__ */ f.jsx(t$, { ctx: e }) });
}
function t$({ ctx: e }) {
  const [t, n] = m.useState(0), [r, o] = m.useState(!0), [i, s] = m.useState(null), [l, a] = m.useState([]), [c, d] = m.useState([]), [p, v] = m.useState(""), u = m.useMemo(
    () => c.filter((B) => B.installed),
    [c]
  ), [x, b] = m.useState(!1), [C, y] = m.useState(""), [h, S] = m.useState("/opt/hostpanel/data/apps/"), [w, E] = m.useState("22"), [k, R] = m.useState("index.js"), [T, A] = m.useState("0"), [N, I] = m.useState(`NODE_ENV=production
PORT=31000
`), [g, $] = m.useState(!1);
  m.useEffect(() => {
    u.length > 0 && (u.some((B) => B.major === w) || E(u[0].major));
  }, [u, w]);
  const P = () => {
    u.length > 0 && !u.some((B) => B.major === w) && E(u[0].major), b(!0);
  }, [j, O] = m.useState(!1), [L, M] = m.useState("22"), [z, D] = m.useState(!1), [W, _] = m.useState(!1), [Q, V] = m.useState([]), [q, G] = m.useState(!1), [X, U] = m.useState(""), [ne, oe] = m.useState(""), [Te, we] = m.useState(!1), [ue, ae] = m.useState(""), [$e, Ve] = m.useState("all"), [Re] = m.useState(100), [Ne, pe] = m.useState([]), [je] = m.useState(!1), [_e, Ae] = m.useState(null), [ze, We] = m.useState(!1), [Ze, Le] = m.useState(null), ie = (B, me = "success") => {
    Le({ message: B, severity: me });
  }, xe = m.useCallback(
    async (B, me) => {
      const Ie = await e.api(B, me), lt = await Ie.json().catch(() => ({}));
      if (!Ie.ok)
        throw new Error(lt.message || lt.error || `HTTP ${Ie.status}`);
      return lt;
    },
    [e]
  ), Ue = m.useCallback(async () => {
    var B, me;
    o(!0);
    try {
      const [Ie, lt, At] = await Promise.allSettled([
        xe("/status"),
        xe("/apps"),
        xe("/runtimes")
      ]);
      Ie.status === "fulfilled" && Ie.value && s(Ie.value), lt.status === "fulfilled" && ((B = lt.value) != null && B.apps) && a(lt.value.apps), At.status === "fulfilled" && ((me = At.value) != null && me.runtimes) && d(At.value.runtimes);
    } catch (Ie) {
      ie(Ie.message || "Failed to load Node.js service data", "error");
    } finally {
      o(!1);
    }
  }, [xe]);
  m.useEffect(() => {
    Ue();
  }, [Ue]), m.useEffect(() => {
    l.length > 0 && !ue && ae(l[0].name);
  }, [l, ue]);
  const re = m.useCallback(
    async (B, me = 100, Ie = "all") => {
      if (B)
        try {
          const lt = await xe(
            `/apps/${encodeURIComponent(B)}/logs?lines=${me}&type=${Ie}`
          ), At = Ie === "out" ? lt.stdout : Ie === "err" ? lt.stderr : lt.logs, Ir = At ? At.split(`
`).map((Mr) => ({
            stream: Ie === "err" ? "stderr" : "stdout",
            text: Mr
          })) : [];
          pe(Ir);
        } catch (lt) {
          console.error("Failed to load logs", lt);
        }
    },
    [xe]
  );
  m.useEffect(() => {
    t === 2 && ue && re(ue, Re, $e);
  }, [t, ue, $e, Re, re]);
  const be = async (B) => {
    try {
      await xe(`/apps/${encodeURIComponent(B)}/start`, { method: "POST" }), ie(`Application '${B}' started`, "success"), Ue();
    } catch (me) {
      ie(me.message || `Failed to start ${B}`, "error");
    }
  }, Be = async (B) => {
    try {
      await xe(`/apps/${encodeURIComponent(B)}/stop`, { method: "POST" }), ie(`Application '${B}' stopped`, "info"), Ue();
    } catch (me) {
      ie(me.message || `Failed to stop ${B}`, "error");
    }
  }, ut = async (B) => {
    try {
      await xe(`/apps/${encodeURIComponent(B)}/restart`, { method: "POST" }), ie(`Application '${B}' restarted`, "success"), Ue();
    } catch (me) {
      ie(me.message || `Failed to restart ${B}`, "error");
    }
  }, Ce = async () => {
    if (_e) {
      We(!0);
      try {
        await xe(`/apps/${encodeURIComponent(_e)}`, {
          method: "DELETE"
        }), ie(`Application '${_e}' deleted`, "success"), Ae(null), Ue();
      } catch (B) {
        ie(B.message || `Failed to delete ${_e}`, "error");
      } finally {
        We(!1);
      }
    }
  }, Vn = async (B) => {
    U(B), G(!0), oe("");
    try {
      const me = await xe(`/apps/${encodeURIComponent(B)}/env`);
      oe(me.env || "");
    } catch (me) {
      ie(me.message || "Failed to load environment variables", "error");
    }
  }, bn = async () => {
    if (X) {
      we(!0);
      try {
        await xe(`/apps/${encodeURIComponent(X)}/env`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ env: ne })
        }), ie(`Environment variables updated for '${X}'`, "success"), G(!1);
      } catch (B) {
        ie(B.message || "Failed to save environment variables", "error");
      } finally {
        we(!1);
      }
    }
  }, io = async (B) => {
    if (B.preventDefault(), !!C) {
      $(!0);
      try {
        const me = h.endsWith("/") ? `${h}${C}` : h, Ie = await xe("/apps", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: C.trim().toLowerCase(),
            directory: me.trim(),
            node_version: w,
            script: k.trim() || "index.js",
            port: parseInt(T, 10) || 0
          })
        });
        N.trim() && await xe(`/apps/${encodeURIComponent(C)}/env`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ env: N })
        }).catch(() => {
        }), ie(
          `Application '${C}' deployed on port ${Ie.port || "allocated"}!`,
          "success"
        ), y(""), b(!1), Ue();
      } catch (me) {
        ie(me.message || "Failed to create application", "error");
      } finally {
        $(!1);
      }
    }
  }, Pr = async (B) => {
    const me = B || L;
    M(me), D(!0), _(!1), V([]);
    try {
      if (e.run)
        for await (const Ie of e.run("/runtimes/install", {
          method: "POST",
          body: { version: me }
        }))
          V((lt) => Z5(lt, Ie));
      else
        await xe("/runtimes/install", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ version: me })
        });
      _(!0), ie(`Node.js v${me} installed successfully!`, "success"), Ue();
    } catch (Ie) {
      ie(Ie.message || `Failed to install Node.js v${me}`, "error");
    } finally {
      D(!1);
    }
  }, ge = async (B) => {
    try {
      await xe(`/runtimes/${encodeURIComponent(B)}`, {
        method: "DELETE"
      }), ie(`Node.js v${B} removed`, "success"), Ue();
    } catch (me) {
      ie(me.message || `Failed to remove Node.js v${B}`, "error");
    }
  }, Ke = l.filter(
    (B) => B.name.toLowerCase().includes(p.toLowerCase()) || B.directory.toLowerCase().includes(p.toLowerCase()) || String(B.port).includes(p)
  ), Pt = l.filter((B) => B.status === "running").length, pl = l.reduce(
    (B, me) => B + (parseFloat(String(me.memory_mb)) || 0),
    0
  );
  return /* @__PURE__ */ f.jsxs(Xe, { sx: { display: "flex", flexDirection: "column", gap: 2.5, pb: 4 }, children: [
    /* @__PURE__ */ f.jsxs(
      ot,
      {
        direction: "row",
        spacing: 2,
        sx: {
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ f.jsxs(Xe, { children: [
            /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ f.jsx(ke, { sx: { fontWeight: 700, fontSize: "1.25rem" }, children: "Node.js Application Manager" }),
              /* @__PURE__ */ f.jsx(
                Ho,
                {
                  size: "small",
                  icon: /* @__PURE__ */ f.jsx(Xg, { ok: !!(i != null && i.healthy), size: 8 }),
                  label: i != null && i.healthy ? "Daemon Active" : "Daemon Inactive",
                  variant: "outlined",
                  color: i != null && i.healthy ? "success" : "default",
                  sx: { fontWeight: 600, fontSize: "0.75rem" }
                }
              )
            ] }),
            /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.8125rem", color: "text.secondary", mt: 0.25 }, children: "Process supervisor, isolated runtimes, reverse proxy port allocator (31000–31999)" })
          ] }),
          /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ f.jsx(jr, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              Bn,
              {
                size: "small",
                onClick: Ue,
                disabled: r,
                sx: { border: "1px solid", borderColor: "divider" },
                children: r ? /* @__PURE__ */ f.jsx(ii, { size: 16, color: "inherit" }) : /* @__PURE__ */ f.jsx(Kg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(
              Kt,
              {
                variant: "contained",
                color: "primary",
                size: "small",
                startIcon: /* @__PURE__ */ f.jsx(Xu, {}),
                onClick: P,
                sx: { ml: 0.5, whiteSpace: "nowrap" },
                children: "Deploy Application"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      Xe,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                Xe,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (B) => Fr(B.palette.primary.main, 0.1),
                    color: "primary.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(Q5, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(Xe, { children: [
                /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Node Daemon Status" }),
                /* @__PURE__ */ f.jsx(ke, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: i != null && i.healthy ? "Active · Running" : "Stopped" })
              ] })
            ] }),
            /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: "Service: hostpanel-nodejsd • User: hp-nodejs" })
          ] }) }),
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                Xe,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (B) => Fr(B.palette.success.main, 0.1),
                    color: "success.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(Yg, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(Xe, { children: [
                /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Running Apps" }),
                /* @__PURE__ */ f.jsxs(ke, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  Pt,
                  " / ",
                  l.length,
                  " Online"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: l.length === 0 ? "No applications deployed" : `${l.length - Pt} stopped or paused` })
          ] }) }),
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                Xe,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (B) => Fr(B.palette.warning.main, 0.1),
                    color: "warning.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(q5, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(Xe, { children: [
                /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Runtime Versions" }),
                /* @__PURE__ */ f.jsxs(ke, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  u.length,
                  " Installed"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: u.length > 0 ? u.map((B) => `v${B.major}`).join(", ") + " active" : "No runtimes installed" })
          ] }) }),
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                Xe,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (B) => Fr(B.palette.secondary.main, 0.1),
                    color: "secondary.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(Qu, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(Xe, { children: [
                /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Total Memory / CPU" }),
                /* @__PURE__ */ f.jsxs(ke, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  pl.toFixed(1),
                  " MB"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ f.jsxs(ke, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: [
              Pt,
              " active app process",
              Pt === 1 ? "" : "es"
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(Zu, { padded: !1, children: [
      /* @__PURE__ */ f.jsx(Xe, { sx: { borderBottom: 1, borderColor: "divider", px: 2 }, children: /* @__PURE__ */ f.jsxs(L5, { value: t, onChange: (B, me) => n(me), children: [
        /* @__PURE__ */ f.jsx(Kl, { label: `Applications (${l.length})` }),
        /* @__PURE__ */ f.jsx(Kl, { label: "Node Runtimes" }),
        /* @__PURE__ */ f.jsx(Kl, { label: "Live Console Logs" }),
        /* @__PURE__ */ f.jsx(Kl, { label: "Service & Isolation" })
      ] }) }),
      t === 0 && /* @__PURE__ */ f.jsxs(Xe, { sx: { p: 2 }, children: [
        /* @__PURE__ */ f.jsx(
          ot,
          {
            direction: "row",
            spacing: 2,
            sx: { justifyContent: "space-between", alignItems: "center", mb: 2 },
            children: /* @__PURE__ */ f.jsx(
              fo,
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
                sx: { maxWidth: 360, width: "100%" }
              }
            )
          }
        ),
        /* @__PURE__ */ f.jsx(u5, { children: /* @__PURE__ */ f.jsxs(Bg, { size: "medium", children: [
          /* @__PURE__ */ f.jsx(Wg, { children: /* @__PURE__ */ f.jsxs(ts, { children: [
            /* @__PURE__ */ f.jsx(Ot, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "App Name & Path" }),
            /* @__PURE__ */ f.jsx(Ot, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Status" }),
            /* @__PURE__ */ f.jsx(Ot, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Runtime" }),
            /* @__PURE__ */ f.jsx(Ot, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Assigned Port" }),
            /* @__PURE__ */ f.jsx(Ot, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Memory / CPU" }),
            /* @__PURE__ */ f.jsx(Ot, { align: "right", sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ f.jsx(Fg, { children: Ke.length === 0 ? /* @__PURE__ */ f.jsx(ts, { children: /* @__PURE__ */ f.jsxs(Ot, { colSpan: 6, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ f.jsx(Yg, { sx: { fontSize: 40, color: "text.disabled", mb: 1 } }),
            /* @__PURE__ */ f.jsx(ke, { sx: { fontWeight: 600, color: "text.secondary" }, children: "No Node.js Applications Deployed" }),
            /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.8125rem", color: "text.disabled", mb: 2 }, children: "Deploy an Express, Next.js, Fastify, or custom Node.js application to get started." }),
            /* @__PURE__ */ f.jsx(
              Kt,
              {
                variant: "contained",
                color: "primary",
                size: "small",
                startIcon: /* @__PURE__ */ f.jsx(Xu, {}),
                onClick: P,
                children: "Deploy First App"
              }
            )
          ] }) }) : Ke.map((B) => /* @__PURE__ */ f.jsxs(ts, { hover: !0, children: [
            /* @__PURE__ */ f.jsxs(Ot, { children: [
              /* @__PURE__ */ f.jsx(ke, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: B.name }),
              /* @__PURE__ */ f.jsxs(
                ke,
                {
                  sx: {
                    fontFamily: qn,
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
            /* @__PURE__ */ f.jsx(Ot, { children: /* @__PURE__ */ f.jsx(
              Ho,
              {
                size: "small",
                icon: /* @__PURE__ */ f.jsx(Xg, { ok: B.status === "running", size: 7 }),
                label: B.status === "running" ? `Running (PID ${B.pid})` : "Stopped",
                color: B.status === "running" ? "success" : "default",
                variant: "outlined",
                sx: { fontWeight: 500 }
              }
            ) }),
            /* @__PURE__ */ f.jsx(Ot, { children: /* @__PURE__ */ f.jsx(
              Ho,
              {
                size: "small",
                label: `Node ${B.node_version}`,
                variant: "outlined",
                sx: { fontFamily: qn, fontSize: "0.75rem" }
              }
            ) }),
            /* @__PURE__ */ f.jsx(Ot, { children: /* @__PURE__ */ f.jsx(jr, { title: "Copy local reverse proxy address", children: /* @__PURE__ */ f.jsx(
              Ho,
              {
                size: "small",
                label: `http://127.0.0.1:${B.port}`,
                onClick: () => {
                  navigator.clipboard.writeText(`http://127.0.0.1:${B.port}`), ie(`Copied http://127.0.0.1:${B.port}`, "info");
                },
                icon: /* @__PURE__ */ f.jsx(X5, { sx: { fontSize: "13px !important" } }),
                sx: {
                  fontFamily: qn,
                  fontSize: "0.75rem",
                  cursor: "pointer"
                }
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(Ot, { sx: { fontFamily: qn, fontSize: "0.8125rem", color: "text.secondary" }, children: B.status === "running" ? `${B.memory_mb} MB • ${B.cpu_pct}%` : "—" }),
            /* @__PURE__ */ f.jsx(Ot, { align: "right", children: /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              B.status === "running" ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                /* @__PURE__ */ f.jsx(jr, { title: "Restart Application", children: /* @__PURE__ */ f.jsx(Bn, { size: "small", onClick: () => ut(B.name), children: /* @__PURE__ */ f.jsx(U5, { sx: { fontSize: 18 } }) }) }),
                /* @__PURE__ */ f.jsx(jr, { title: "Stop Application", children: /* @__PURE__ */ f.jsx(Bn, { size: "small", color: "warning", onClick: () => Be(B.name), children: /* @__PURE__ */ f.jsx(W5, { sx: { fontSize: 18 } }) }) })
              ] }) : /* @__PURE__ */ f.jsx(jr, { title: "Start Application", children: /* @__PURE__ */ f.jsx(Bn, { size: "small", color: "success", onClick: () => be(B.name), children: /* @__PURE__ */ f.jsx(_5, { sx: { fontSize: 18 } }) }) }),
              /* @__PURE__ */ f.jsx(jr, { title: "Environment Variables", children: /* @__PURE__ */ f.jsx(Bn, { size: "small", onClick: () => Vn(B.name), children: /* @__PURE__ */ f.jsx(K5, { sx: { fontSize: 18 } }) }) }),
              /* @__PURE__ */ f.jsx(jr, { title: "View Logs", children: /* @__PURE__ */ f.jsx(
                Bn,
                {
                  size: "small",
                  onClick: () => {
                    ae(B.name), n(2);
                  },
                  children: /* @__PURE__ */ f.jsx(V5, { sx: { fontSize: 18 } })
                }
              ) }),
              /* @__PURE__ */ f.jsx(jr, { title: "Delete Application", children: /* @__PURE__ */ f.jsx(
                Bn,
                {
                  size: "small",
                  color: "error",
                  onClick: () => Ae(B.name),
                  children: /* @__PURE__ */ f.jsx(H5, { sx: { fontSize: 18 } })
                }
              ) })
            ] }) })
          ] }, B.name)) })
        ] }) })
      ] }),
      t === 1 && /* @__PURE__ */ f.jsxs(Xe, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f.jsx(ot, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2.5 }, children: /* @__PURE__ */ f.jsxs(Xe, { children: [
          /* @__PURE__ */ f.jsx(ke, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: "Node.js Runtimes Manager" }),
          /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: "Isolated standalone binaries under /opt/hostpanel/runtimes/node/" })
        ] }) }),
        /* @__PURE__ */ f.jsx(Xe, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }, children: [
          { major: "18", title: "Node.js 18 LTS (Hydrogen)", status: "Active LTS", desc: "Stable for legacy frameworks and LTS maintenance" },
          { major: "20", title: "Node.js 20 LTS (Iron)", status: "Active LTS", desc: "Enterprise LTS with high performance and security" },
          { major: "22", title: "Node.js 22 LTS (Jod)", status: "Latest LTS", desc: "Modern V8 engine with native WebSocket & fetch" },
          { major: "24", title: "Node.js 24 (Current)", status: "Current", desc: "Cutting edge features and latest ECMAScript syntax" }
        ].map((B) => {
          const me = c.find((At) => At.major === B.major), Ie = me ? !!me.installed : !1, lt = l.filter((At) => At.node_version === B.major).length;
          return /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2.5 }, children: [
            /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1.5, sx: { justifyContent: "space-between", alignItems: "flex-start", mb: 1 }, children: [
              /* @__PURE__ */ f.jsxs(Xe, { children: [
                /* @__PURE__ */ f.jsx(ke, { sx: { fontWeight: 700, fontSize: "1rem" }, children: B.title }),
                /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.75rem", color: "text.secondary", mt: 0.25 }, children: B.desc })
              ] }),
              /* @__PURE__ */ f.jsx(
                Ho,
                {
                  size: "small",
                  label: Ie ? "Installed" : "Available",
                  color: Ie ? "success" : "default",
                  variant: "outlined"
                }
              )
            ] }),
            /* @__PURE__ */ f.jsx(jP, { sx: { my: 1.5 } }),
            /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 3, sx: { mb: 2 }, children: [
              /* @__PURE__ */ f.jsx(
                po,
                {
                  label: "Binary Path",
                  value: Ie ? `/opt/hostpanel/runtimes/node/v${B.major}/bin/node` : /* @__PURE__ */ f.jsx(ke, { component: "span", sx: { color: "text.disabled", fontStyle: "italic", fontSize: "0.75rem" }, children: "Not installed" })
                }
              ),
              /* @__PURE__ */ f.jsx(
                po,
                {
                  label: "Active Apps",
                  value: Ie ? `${lt} Apps` : "—",
                  mono: !1
                }
              )
            ] }),
            /* @__PURE__ */ f.jsx(ot, { direction: "row", spacing: 1, children: Ie ? /* @__PURE__ */ f.jsx(
              Kt,
              {
                size: "small",
                variant: "outlined",
                color: "error",
                disabled: lt > 0,
                onClick: () => ge(B.major),
                children: lt > 0 ? "In Use by Apps" : "Remove"
              }
            ) : /* @__PURE__ */ f.jsxs(
              Kt,
              {
                size: "small",
                variant: "contained",
                onClick: () => {
                  M(B.major), _(!1), V([]), O(!0);
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
      t === 2 && /* @__PURE__ */ f.jsxs(Xe, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f.jsxs(
          ot,
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
              /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
                /* @__PURE__ */ f.jsx(ke, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: "Application:" }),
                /* @__PURE__ */ f.jsx(
                  Cs,
                  {
                    size: "small",
                    value: ue,
                    onChange: (B) => ae(B.target.value),
                    sx: { minWidth: 200 },
                    children: l.map((B) => /* @__PURE__ */ f.jsxs(Vo, { value: B.name, children: [
                      B.name,
                      " (",
                      B.status,
                      ")"
                    ] }, B.name))
                  }
                ),
                /* @__PURE__ */ f.jsxs(
                  Cs,
                  {
                    size: "small",
                    value: $e,
                    onChange: (B) => Ve(B.target.value),
                    children: [
                      /* @__PURE__ */ f.jsx(Vo, { value: "all", children: "All (Stdout + Stderr)" }),
                      /* @__PURE__ */ f.jsx(Vo, { value: "out", children: "Stdout Only" }),
                      /* @__PURE__ */ f.jsx(Vo, { value: "err", children: "Stderr Only" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1, children: [
                /* @__PURE__ */ f.jsx(
                  Kt,
                  {
                    size: "small",
                    variant: "outlined",
                    startIcon: /* @__PURE__ */ f.jsx(Kg, {}),
                    onClick: () => re(ue, Re, $e),
                    children: "Refresh"
                  }
                ),
                /* @__PURE__ */ f.jsx(
                  Kt,
                  {
                    size: "small",
                    variant: "outlined",
                    color: "secondary",
                    onClick: () => pe([]),
                    children: "Clear"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ f.jsx(Qg, { lines: Ne, running: je })
      ] }),
      t === 3 && /* @__PURE__ */ f.jsxs(Xe, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f.jsx(ke, { sx: { fontWeight: 700, fontSize: "1.125rem", mb: 0.5 }, children: "100% HostPanel Isolation Architecture" }),
        /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 3 }, children: "Strict isolation under /opt/hostpanel. No scatter into system /var, /etc, or /tmp." }),
        /* @__PURE__ */ f.jsxs(Xe, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }, children: [
          /* @__PURE__ */ f.jsx(Zu, { label: "Filesystem Sandboxes (/opt/hostpanel)", padded: !1, children: /* @__PURE__ */ f.jsxs(Bg, { size: "small", children: [
            /* @__PURE__ */ f.jsx(Wg, { children: /* @__PURE__ */ f.jsxs(ts, { children: [
              /* @__PURE__ */ f.jsx(Ot, { sx: { fontWeight: 600, fontSize: "0.75rem" }, children: "Sandbox Purpose" }),
              /* @__PURE__ */ f.jsx(Ot, { sx: { fontWeight: 600, fontSize: "0.75rem" }, children: "Enforced Path" })
            ] }) }),
            /* @__PURE__ */ f.jsx(Fg, { children: [
              { purpose: "Node Runtime Binaries", path: "/opt/hostpanel/runtimes/node/" },
              { purpose: "Application Data & Roots", path: "/opt/hostpanel/data/apps/" },
              { purpose: "Configuration & Env Files", path: "/opt/hostpanel/etc/nodejs/" },
              { purpose: "Application Logs", path: "/opt/hostpanel/logs/nodejs/" },
              { purpose: "Daemon & App PIDs", path: "/opt/hostpanel/run/nodejs/" },
              { purpose: "Reverse Proxy Ports", path: "31000 – 31999 (Allocated)" }
            ].map((B) => /* @__PURE__ */ f.jsxs(ts, { children: [
              /* @__PURE__ */ f.jsx(Ot, { sx: { fontSize: "0.8125rem" }, children: B.purpose }),
              /* @__PURE__ */ f.jsx(Ot, { sx: { fontFamily: qn, fontSize: "0.75rem", color: "text.secondary" }, children: B.path })
            ] }, B.path)) })
          ] }) }),
          /* @__PURE__ */ f.jsx(Zu, { label: "System Daemon & Security Grant", padded: !0, children: /* @__PURE__ */ f.jsxs(ot, { spacing: 2, children: [
            /* @__PURE__ */ f.jsx(po, { label: "Service Unit", value: "hostpanel-nodejsd.service" }),
            /* @__PURE__ */ f.jsx(po, { label: "Service Linux User", value: "hp-nodejs (Unprivileged)" }),
            /* @__PURE__ */ f.jsx(po, { label: "Service Daemon Binding", value: "Isolated Loopback (127.0.0.1)" }),
            /* @__PURE__ */ f.jsx(po, { label: "Privileged Root Ops Helper", value: "/opt/hostpanel/packages/nodejs/ops/hp-nodejs" }),
            /* @__PURE__ */ f.jsx(po, { label: "Sudoers Rule", value: "hp-nodejs ALL=(root) NOPASSWD: /opt/hostpanel/packages/nodejs/ops/hp-nodejs *" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(
      VP,
      {
        anchor: "right",
        open: q,
        onClose: () => G(!1),
        slotProps: { paper: { sx: { width: { xs: "100%", sm: 520 }, p: 3 } } },
        children: [
          /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
            /* @__PURE__ */ f.jsxs(ke, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
              "Environment Variables: ",
              X
            ] }),
            /* @__PURE__ */ f.jsx(Bn, { size: "small", onClick: () => G(!1), children: /* @__PURE__ */ f.jsx(qu, { sx: { fontSize: 18 } }) })
          ] }),
          /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 2 }, children: "Variables are injected into the application process on startup. Format: KEY=VALUE (one per line)." }),
          /* @__PURE__ */ f.jsx(
            fo,
            {
              fullWidth: !0,
              multiline: !0,
              rows: 16,
              value: ne,
              onChange: (B) => oe(B.target.value),
              placeholder: `PORT=31000
NODE_ENV=production
DATABASE_URL=mongodb://localhost:27017/app`,
              slotProps: {
                input: {
                  sx: { fontFamily: qn, fontSize: "0.8125rem" }
                }
              },
              sx: { mb: 3 }
            }
          ),
          /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1.5, children: [
            /* @__PURE__ */ f.jsx(
              Kt,
              {
                variant: "contained",
                color: "primary",
                onClick: bn,
                disabled: Te,
                startIcon: Te ? /* @__PURE__ */ f.jsx(ii, { size: 16 }) : /* @__PURE__ */ f.jsx(Gg, {}),
                children: Te ? "Saving…" : "Save Variables"
              }
            ),
            /* @__PURE__ */ f.jsx(Kt, { variant: "outlined", onClick: () => G(!1), children: "Cancel" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      Hu,
      {
        open: x,
        onClose: () => !g && b(!1),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsxs(Yu, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ f.jsx(Xu, { sx: { color: "primary.main" } }),
              /* @__PURE__ */ f.jsx(ke, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: "Deploy Node.js Application" })
            ] }),
            /* @__PURE__ */ f.jsx(Bn, { size: "small", onClick: () => b(!1), disabled: g, children: /* @__PURE__ */ f.jsx(qu, { sx: { fontSize: 18 } }) })
          ] }),
          /* @__PURE__ */ f.jsxs(Xe, { component: "form", onSubmit: io, children: [
            /* @__PURE__ */ f.jsxs(Ku, { dividers: !0, sx: { display: "flex", flexDirection: "column", gap: 2.5 }, children: [
              /* @__PURE__ */ f.jsx(ke, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: "Configure application parameters, runtime version, entrypoint, and isolated reverse proxy port." }),
              u.length === 0 && /* @__PURE__ */ f.jsxs(Uu, { severity: "warning", children: [
                "No Node.js runtimes are currently installed. Please install a version from the ",
                /* @__PURE__ */ f.jsx("strong", { children: "Node Runtimes" }),
                " tab first before deploying an application."
              ] }),
              /* @__PURE__ */ f.jsx(Ko, { label: "Application Name", hint: "Unique identifier, e.g. 'my-app' or 'api-service'", children: /* @__PURE__ */ f.jsx(
                fo,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "e.g. backend-api",
                  value: C,
                  onChange: (B) => {
                    const me = B.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, "");
                    y(me), (!h || h.startsWith("/opt/hostpanel/data/apps/")) && S(`/opt/hostpanel/data/apps/${me}`);
                  },
                  required: !0
                }
              ) }),
              /* @__PURE__ */ f.jsx(Ko, { label: "Application Directory", hint: "Root path containing package.json and entrypoint", children: /* @__PURE__ */ f.jsx(
                fo,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "/opt/hostpanel/data/apps/my-app",
                  value: h,
                  onChange: (B) => S(B.target.value),
                  required: !0
                }
              ) }),
              /* @__PURE__ */ f.jsxs(ot, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
                /* @__PURE__ */ f.jsx(
                  Ko,
                  {
                    label: "Node.js Version",
                    hint: u.length > 0 ? "Target installed runtime" : "No runtimes installed",
                    sx: { flex: 1 },
                    children: /* @__PURE__ */ f.jsx(
                      Cs,
                      {
                        fullWidth: !0,
                        size: "small",
                        value: u.length > 0 ? w : "",
                        onChange: (B) => E(B.target.value),
                        disabled: u.length === 0,
                        displayEmpty: !0,
                        children: u.length === 0 ? /* @__PURE__ */ f.jsx(Vo, { value: "", disabled: !0, children: /* @__PURE__ */ f.jsx("em", { children: "No runtimes installed (install via Node Runtimes tab)" }) }) : u.map((B) => {
                          const me = J5[B.major], Ie = me ? me.title : `Node.js v${B.major}`;
                          return /* @__PURE__ */ f.jsx(Vo, { value: B.major, children: Ie }, B.major);
                        })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ f.jsx(Ko, { label: "Start Script / Entrypoint", hint: "e.g. index.js or dist/server.js", sx: { flex: 1 }, children: /* @__PURE__ */ f.jsx(
                  fo,
                  {
                    fullWidth: !0,
                    size: "small",
                    placeholder: "index.js",
                    value: k,
                    onChange: (B) => R(B.target.value),
                    required: !0
                  }
                ) })
              ] }),
              /* @__PURE__ */ f.jsx(Ko, { label: "Port Assignment (31000–31999)", hint: "Set to 0 for automatic port allocation", children: /* @__PURE__ */ f.jsx(
                fo,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "0 (Auto-allocate next free port in 31000-31999)",
                  value: T,
                  onChange: (B) => A(B.target.value)
                }
              ) }),
              /* @__PURE__ */ f.jsx(Ko, { label: "Environment Variables", hint: "KEY=VALUE format, one per line", children: /* @__PURE__ */ f.jsx(
                fo,
                {
                  fullWidth: !0,
                  multiline: !0,
                  rows: 4,
                  size: "small",
                  value: N,
                  onChange: (B) => I(B.target.value),
                  slotProps: {
                    input: {
                      sx: { fontFamily: qn, fontSize: "0.8125rem" }
                    }
                  }
                }
              ) })
            ] }),
            /* @__PURE__ */ f.jsxs(Vu, { sx: { p: 2 }, children: [
              /* @__PURE__ */ f.jsx(Kt, { onClick: () => b(!1), disabled: g, children: "Cancel" }),
              /* @__PURE__ */ f.jsx(
                Kt,
                {
                  type: "submit",
                  variant: "contained",
                  color: "primary",
                  disabled: g || !C || u.length === 0,
                  startIcon: g ? /* @__PURE__ */ f.jsx(ii, { size: 16 }) : /* @__PURE__ */ f.jsx(Gg, {}),
                  children: g ? "Deploying Application…" : "Deploy Application"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      Hu,
      {
        open: j,
        onClose: () => !z && O(!1),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsxs(Yu, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ f.jsxs(ot, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ f.jsx(Qu, { sx: { color: "primary.main" } }),
              /* @__PURE__ */ f.jsxs(ke, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                "Install Node.js v",
                L,
                " Runtime"
              ] })
            ] }),
            /* @__PURE__ */ f.jsx(Bn, { size: "small", onClick: () => O(!1), disabled: z, children: /* @__PURE__ */ f.jsx(qu, { sx: { fontSize: 18 } }) })
          ] }),
          /* @__PURE__ */ f.jsxs(Ku, { dividers: !0, children: [
            /* @__PURE__ */ f.jsxs(ke, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 2 }, children: [
              "Downloads and provisions standalone Node.js and NPM binaries into ",
              /* @__PURE__ */ f.jsxs("code", { children: [
                "/opt/hostpanel/runtimes/node/v",
                L,
                "/"
              ] }),
              "."
            ] }),
            /* @__PURE__ */ f.jsx(ot, { direction: "row", spacing: 1, sx: { alignItems: "center", mb: 2 }, children: /* @__PURE__ */ f.jsx(
              Ho,
              {
                icon: /* @__PURE__ */ f.jsx(Qu, { sx: { fontSize: 16 } }),
                label: `Target Runtime: Node.js v${L}`,
                color: "primary",
                variant: "outlined",
                sx: { fontWeight: 600 }
              }
            ) }),
            W && /* @__PURE__ */ f.jsxs(Uu, { severity: "success", sx: { mb: 2 }, children: [
              "Node.js v",
              L,
              " runtime was successfully installed and verified!"
            ] }),
            Q.length > 0 ? /* @__PURE__ */ f.jsx(Xe, { sx: { mt: 1 }, children: /* @__PURE__ */ f.jsx(Qg, { lines: Q, running: z }) }) : /* @__PURE__ */ f.jsx(Xe, { sx: { p: 2.5, bgcolor: "background.default", borderRadius: 1.5, textAlign: "center" }, children: /* @__PURE__ */ f.jsxs(ke, { sx: { fontSize: "0.875rem", color: "text.secondary" }, children: [
              "Ready to download and install ",
              /* @__PURE__ */ f.jsxs("strong", { children: [
                "Node.js v",
                L
              ] }),
              ". Click below to begin live execution."
            ] }) })
          ] }),
          /* @__PURE__ */ f.jsx(Vu, { sx: { p: 2 }, children: W ? /* @__PURE__ */ f.jsx(
            Kt,
            {
              variant: "contained",
              color: "primary",
              onClick: () => {
                O(!1), _(!1), V([]);
              },
              children: "Done"
            }
          ) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
            /* @__PURE__ */ f.jsx(Kt, { onClick: () => O(!1), disabled: z, children: "Cancel" }),
            /* @__PURE__ */ f.jsx(
              Kt,
              {
                variant: "contained",
                color: "primary",
                onClick: () => Pr(L),
                disabled: z,
                startIcon: z ? /* @__PURE__ */ f.jsx(ii, { size: 16 }) : /* @__PURE__ */ f.jsx(Y5, {}),
                children: z ? "Installing…" : `Start Installation (Node ${L})`
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(Hu, { open: !!_e, onClose: () => Ae(null), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ f.jsx(Yu, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: "Delete Application?" }),
      /* @__PURE__ */ f.jsx(Ku, { children: /* @__PURE__ */ f.jsxs(ke, { sx: { fontSize: "0.875rem" }, children: [
        "Are you sure you want to stop and delete application ",
        /* @__PURE__ */ f.jsx("strong", { children: _e }),
        "? This will remove its daemon configuration and process state."
      ] }) }),
      /* @__PURE__ */ f.jsxs(Vu, { sx: { p: 2 }, children: [
        /* @__PURE__ */ f.jsx(Kt, { onClick: () => Ae(null), disabled: ze, children: "Cancel" }),
        /* @__PURE__ */ f.jsx(
          Kt,
          {
            variant: "contained",
            color: "error",
            onClick: Ce,
            disabled: ze,
            children: ze ? "Deleting…" : "Delete Application"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f.jsx(
      FM,
      {
        open: !!Ze,
        autoHideDuration: 4e3,
        onClose: () => Le(null),
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        children: Ze ? /* @__PURE__ */ f.jsx(Uu, { severity: Ze.severity, onClose: () => Le(null), children: Ze.message }) : void 0
      }
    )
  ] });
}
let Ya = null;
function n$(e, t) {
  Ya = d0(e), Ya.render(
    /* @__PURE__ */ f.jsx(m.StrictMode, { children: /* @__PURE__ */ f.jsx(e$, { ctx: t }) })
  );
}
function r$() {
  const e = Ya;
  Ya = null, e && queueMicrotask(() => e.unmount());
}
const i$ = { mount: n$, unmount: r$ };
export {
  i$ as default,
  n$ as mount,
  r$ as unmount
};
//# sourceMappingURL=main.js.map
