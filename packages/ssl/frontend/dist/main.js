function Hx(e, t) {
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
function Vx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lg = { exports: {} }, Fa = {}, Ng = { exports: {} }, Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hs = Symbol.for("react.element"), Kx = Symbol.for("react.portal"), Yx = Symbol.for("react.fragment"), Gx = Symbol.for("react.strict_mode"), Xx = Symbol.for("react.profiler"), Qx = Symbol.for("react.provider"), qx = Symbol.for("react.context"), Zx = Symbol.for("react.forward_ref"), Jx = Symbol.for("react.suspense"), e1 = Symbol.for("react.memo"), t1 = Symbol.for("react.lazy"), Fp = Symbol.iterator;
function n1(e) {
  return e === null || typeof e != "object" ? null : (e = Fp && e[Fp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var zg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Bg = Object.assign, Fg = {};
function Pi(e, t, n) {
  this.props = e, this.context = t, this.refs = Fg, this.updater = n || zg;
}
Pi.prototype.isReactComponent = {};
Pi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dg() {
}
Dg.prototype = Pi.prototype;
function tf(e, t, n) {
  this.props = e, this.context = t, this.refs = Fg, this.updater = n || zg;
}
var nf = tf.prototype = new Dg();
nf.constructor = tf;
Bg(nf, Pi.prototype);
nf.isPureReactComponent = !0;
var Dp = Array.isArray, _g = Object.prototype.hasOwnProperty, rf = { current: null }, Wg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ug(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) _g.call(t, r) && !Wg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Hs, type: e, key: i, ref: s, props: o, _owner: rf.current };
}
function r1(e, t) {
  return { $$typeof: Hs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function of(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hs;
}
function o1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var _p = /\/+/g;
function tu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? o1("" + e.key) : t.toString(36);
}
function Nl(e, t, n, r, o) {
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
        case Hs:
        case Kx:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + tu(s, 0) : r, Dp(o) ? (n = "", e != null && (n = e.replace(_p, "$&/") + "/"), Nl(o, t, n, "", function(c) {
    return c;
  })) : o != null && (of(o) && (o = r1(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(_p, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Dp(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + tu(i, l);
    s += Nl(i, t, n, a, o);
  }
  else if (a = n1(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + tu(i, l++), s += Nl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function il(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Nl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function i1(e) {
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
var Ht = { current: null }, zl = { transition: null }, s1 = { ReactCurrentDispatcher: Ht, ReactCurrentBatchConfig: zl, ReactCurrentOwner: rf };
function Hg() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ee.Children = { map: il, forEach: function(e, t, n) {
  il(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return il(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return il(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!of(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Ee.Component = Pi;
Ee.Fragment = Yx;
Ee.Profiler = Xx;
Ee.PureComponent = tf;
Ee.StrictMode = Gx;
Ee.Suspense = Jx;
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s1;
Ee.act = Hg;
Ee.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Bg({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = rf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) _g.call(t, a) && !Wg.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Hs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Ee.createContext = function(e) {
  return e = { $$typeof: qx, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Qx, _context: e }, e.Consumer = e;
};
Ee.createElement = Ug;
Ee.createFactory = function(e) {
  var t = Ug.bind(null, e);
  return t.type = e, t;
};
Ee.createRef = function() {
  return { current: null };
};
Ee.forwardRef = function(e) {
  return { $$typeof: Zx, render: e };
};
Ee.isValidElement = of;
Ee.lazy = function(e) {
  return { $$typeof: t1, _payload: { _status: -1, _result: e }, _init: i1 };
};
Ee.memo = function(e, t) {
  return { $$typeof: e1, type: e, compare: t === void 0 ? null : t };
};
Ee.startTransition = function(e) {
  var t = zl.transition;
  zl.transition = {};
  try {
    e();
  } finally {
    zl.transition = t;
  }
};
Ee.unstable_act = Hg;
Ee.useCallback = function(e, t) {
  return Ht.current.useCallback(e, t);
};
Ee.useContext = function(e) {
  return Ht.current.useContext(e);
};
Ee.useDebugValue = function() {
};
Ee.useDeferredValue = function(e) {
  return Ht.current.useDeferredValue(e);
};
Ee.useEffect = function(e, t) {
  return Ht.current.useEffect(e, t);
};
Ee.useId = function() {
  return Ht.current.useId();
};
Ee.useImperativeHandle = function(e, t, n) {
  return Ht.current.useImperativeHandle(e, t, n);
};
Ee.useInsertionEffect = function(e, t) {
  return Ht.current.useInsertionEffect(e, t);
};
Ee.useLayoutEffect = function(e, t) {
  return Ht.current.useLayoutEffect(e, t);
};
Ee.useMemo = function(e, t) {
  return Ht.current.useMemo(e, t);
};
Ee.useReducer = function(e, t, n) {
  return Ht.current.useReducer(e, t, n);
};
Ee.useRef = function(e) {
  return Ht.current.useRef(e);
};
Ee.useState = function(e) {
  return Ht.current.useState(e);
};
Ee.useSyncExternalStore = function(e, t, n) {
  return Ht.current.useSyncExternalStore(e, t, n);
};
Ee.useTransition = function() {
  return Ht.current.useTransition();
};
Ee.version = "18.3.1";
Ng.exports = Ee;
var p = Ng.exports;
const Vg = /* @__PURE__ */ Vx(p), ea = /* @__PURE__ */ Hx({
  __proto__: null,
  default: Vg
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
var l1 = p, a1 = Symbol.for("react.element"), c1 = Symbol.for("react.fragment"), u1 = Object.prototype.hasOwnProperty, d1 = l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kg(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) u1.call(t, r) && !f1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: a1, type: e, key: i, ref: s, props: o, _owner: d1.current };
}
Fa.Fragment = c1;
Fa.jsx = Kg;
Fa.jsxs = Kg;
Lg.exports = Fa;
var f = Lg.exports, Yg = { exports: {} }, hn = {}, Gg = { exports: {} }, Xg = {};
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
  function t(A, z) {
    var F = A.length;
    A.push(z);
    e: for (; 0 < F; ) {
      var W = F - 1 >>> 1, _ = A[W];
      if (0 < o(_, z)) A[W] = z, A[F] = _, F = W;
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var z = A[0], F = A.pop();
    if (F !== z) {
      A[0] = F;
      e: for (var W = 0, _ = A.length, Q = _ >>> 1; W < Q; ) {
        var G = 2 * (W + 1) - 1, X = A[G], V = G + 1, ee = A[V];
        if (0 > o(X, F)) V < _ && 0 > o(ee, X) ? (A[W] = ee, A[V] = F, W = V) : (A[W] = X, A[G] = F, W = G);
        else if (V < _ && 0 > o(ee, F)) A[W] = ee, A[V] = F, W = V;
        else break e;
      }
    }
    return z;
  }
  function o(A, z) {
    var F = A.sortIndex - z.sortIndex;
    return F !== 0 ? F : A.id - z.id;
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
  var a = [], c = [], u = 1, m = null, v = 3, d = !1, S = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(A) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= A) r(c), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(c);
    }
  }
  function w(A) {
    if (b = !1, x(A), !S) if (n(a) !== null) S = !0, L(E);
    else {
      var z = n(c);
      z !== null && N(w, z.startTime - A);
    }
  }
  function E(A, z) {
    S = !1, b && (b = !1, y(P), P = -1), d = !0;
    var F = v;
    try {
      for (x(z), m = n(a); m !== null && (!(m.expirationTime > z) || A && !$()); ) {
        var W = m.callback;
        if (typeof W == "function") {
          m.callback = null, v = m.priorityLevel;
          var _ = W(m.expirationTime <= z);
          z = e.unstable_now(), typeof _ == "function" ? m.callback = _ : m === n(a) && r(a), x(z);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var Q = !0;
      else {
        var G = n(c);
        G !== null && N(w, G.startTime - z), Q = !1;
      }
      return Q;
    } finally {
      m = null, v = F, d = !1;
    }
  }
  var k = !1, T = null, P = -1, R = 5, j = -1;
  function $() {
    return !(e.unstable_now() - j < R);
  }
  function g() {
    if (T !== null) {
      var A = e.unstable_now();
      j = A;
      var z = !0;
      try {
        z = T(!0, A);
      } finally {
        z ? M() : (k = !1, T = null);
      }
    } else k = !1;
  }
  var M;
  if (typeof h == "function") M = function() {
    h(g);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), O = I.port2;
    I.port1.onmessage = g, M = function() {
      O.postMessage(null);
    };
  } else M = function() {
    C(g, 0);
  };
  function L(A) {
    T = A, k || (k = !0, M());
  }
  function N(A, z) {
    P = C(function() {
      A(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    S || d || (S = !0, L(E));
  }, e.unstable_forceFrameRate = function(A) {
    0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < A ? Math.floor(1e3 / A) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(A) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = v;
    }
    var F = v;
    v = z;
    try {
      return A();
    } finally {
      v = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(A, z) {
    switch (A) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        A = 3;
    }
    var F = v;
    v = A;
    try {
      return z();
    } finally {
      v = F;
    }
  }, e.unstable_scheduleCallback = function(A, z, F) {
    var W = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? W + F : W) : F = W, A) {
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
    return _ = F + _, A = { id: u++, callback: z, priorityLevel: A, startTime: F, expirationTime: _, sortIndex: -1 }, F > W ? (A.sortIndex = F, t(c, A), n(a) === null && A === n(c) && (b ? (y(P), P = -1) : b = !0, N(w, F - W))) : (A.sortIndex = _, t(a, A), S || d || (S = !0, L(E))), A;
  }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(A) {
    var z = v;
    return function() {
      var F = v;
      v = z;
      try {
        return A.apply(this, arguments);
      } finally {
        v = F;
      }
    };
  };
})(Xg);
Gg.exports = Xg;
var p1 = Gg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m1 = p, pn = p1;
function H(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Qg = /* @__PURE__ */ new Set(), ys = {};
function Io(e, t) {
  pi(e, t), pi(e + "Capture", t);
}
function pi(e, t) {
  for (ys[e] = t, e = 0; e < t.length; e++) Qg.add(t[e]);
}
var xr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Du = Object.prototype.hasOwnProperty, h1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Wp = {}, Up = {};
function g1(e) {
  return Du.call(Up, e) ? !0 : Du.call(Wp, e) ? !1 : h1.test(e) ? Up[e] = !0 : (Wp[e] = !0, !1);
}
function y1(e, t, n, r) {
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
function v1(e, t, n, r) {
  if (t === null || typeof t > "u" || y1(e, t, n, r)) return !0;
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
function Vt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var $t = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  $t[e] = new Vt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  $t[t] = new Vt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  $t[e] = new Vt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  $t[e] = new Vt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  $t[e] = new Vt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  $t[e] = new Vt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  $t[e] = new Vt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  $t[e] = new Vt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  $t[e] = new Vt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var sf = /[\-:]([a-z])/g;
function lf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    sf,
    lf
  );
  $t[t] = new Vt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(sf, lf);
  $t[t] = new Vt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(sf, lf);
  $t[t] = new Vt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  $t[e] = new Vt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$t.xlinkHref = new Vt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  $t[e] = new Vt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function af(e, t, n, r) {
  var o = $t.hasOwnProperty(t) ? $t[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (v1(t, n, o, r) && (n = null), r || o === null ? g1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tr = m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sl = Symbol.for("react.element"), Ho = Symbol.for("react.portal"), Vo = Symbol.for("react.fragment"), cf = Symbol.for("react.strict_mode"), _u = Symbol.for("react.profiler"), qg = Symbol.for("react.provider"), Zg = Symbol.for("react.context"), uf = Symbol.for("react.forward_ref"), Wu = Symbol.for("react.suspense"), Uu = Symbol.for("react.suspense_list"), df = Symbol.for("react.memo"), $r = Symbol.for("react.lazy"), Jg = Symbol.for("react.offscreen"), Hp = Symbol.iterator;
function Ai(e) {
  return e === null || typeof e != "object" ? null : (e = Hp && e[Hp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var at = Object.assign, nu;
function Xi(e) {
  if (nu === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    nu = t && t[1] || "";
  }
  return `
` + nu + e;
}
var ru = !1;
function ou(e, t) {
  if (!e || ru) return "";
  ru = !0;
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
    ru = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Xi(e) : "";
}
function x1(e) {
  switch (e.tag) {
    case 5:
      return Xi(e.type);
    case 16:
      return Xi("Lazy");
    case 13:
      return Xi("Suspense");
    case 19:
      return Xi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ou(e.type, !1), e;
    case 11:
      return e = ou(e.type.render, !1), e;
    case 1:
      return e = ou(e.type, !0), e;
    default:
      return "";
  }
}
function Hu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vo:
      return "Fragment";
    case Ho:
      return "Portal";
    case _u:
      return "Profiler";
    case cf:
      return "StrictMode";
    case Wu:
      return "Suspense";
    case Uu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Zg:
      return (e.displayName || "Context") + ".Consumer";
    case qg:
      return (e._context.displayName || "Context") + ".Provider";
    case uf:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case df:
      return t = e.displayName || null, t !== null ? t : Hu(e.type) || "Memo";
    case $r:
      t = e._payload, e = e._init;
      try {
        return Hu(e(t));
      } catch {
      }
  }
  return null;
}
function S1(e) {
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
      return Hu(t);
    case 8:
      return t === cf ? "StrictMode" : "Mode";
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
function ey(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function b1(e) {
  var t = ey(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ll(e) {
  e._valueTracker || (e._valueTracker = b1(e));
}
function ty(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ey(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ta(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vu(e, t) {
  var n = t.checked;
  return at({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Vp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Kr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ny(e, t) {
  t = t.checked, t != null && af(e, "checked", t, !1);
}
function Ku(e, t) {
  ny(e, t);
  var n = Kr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Yu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yu(e, t.type, Kr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Kp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Yu(e, t, n) {
  (t !== "number" || ta(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Qi = Array.isArray;
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
function Gu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return at({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Yp(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(H(92));
      if (Qi(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Kr(n) };
}
function ry(e, t) {
  var n = Kr(t.value), r = Kr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Gp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function oy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? oy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var al, iy = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (al = al || document.createElement("div"), al.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = al.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
var ns = {
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
}, w1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ns).forEach(function(e) {
  w1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ns[t] = ns[e];
  });
});
function sy(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ns.hasOwnProperty(e) && ns[e] ? ("" + t).trim() : t + "px";
}
function ly(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = sy(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var C1 = at({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Qu(e, t) {
  if (t) {
    if (C1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(H(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(H(62));
  }
}
function qu(e, t) {
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
var Zu = null;
function ff(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ju = null, ii = null, si = null;
function Xp(e) {
  if (e = Ys(e)) {
    if (typeof Ju != "function") throw Error(H(280));
    var t = e.stateNode;
    t && (t = Ha(t), Ju(e.stateNode, e.type, t));
  }
}
function ay(e) {
  ii ? si ? si.push(e) : si = [e] : ii = e;
}
function cy() {
  if (ii) {
    var e = ii, t = si;
    if (si = ii = null, Xp(e), t) for (e = 0; e < t.length; e++) Xp(t[e]);
  }
}
function uy(e, t) {
  return e(t);
}
function dy() {
}
var iu = !1;
function fy(e, t, n) {
  if (iu) return e(t, n);
  iu = !0;
  try {
    return uy(e, t, n);
  } finally {
    iu = !1, (ii !== null || si !== null) && (dy(), cy());
  }
}
function xs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ha(n);
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
var ed = !1;
if (xr) try {
  var ji = {};
  Object.defineProperty(ji, "passive", { get: function() {
    ed = !0;
  } }), window.addEventListener("test", ji, ji), window.removeEventListener("test", ji, ji);
} catch {
  ed = !1;
}
function k1(e, t, n, r, o, i, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var rs = !1, na = null, ra = !1, td = null, E1 = { onError: function(e) {
  rs = !0, na = e;
} };
function T1(e, t, n, r, o, i, s, l, a) {
  rs = !1, na = null, k1.apply(E1, arguments);
}
function P1(e, t, n, r, o, i, s, l, a) {
  if (T1.apply(this, arguments), rs) {
    if (rs) {
      var c = na;
      rs = !1, na = null;
    } else throw Error(H(198));
    ra || (ra = !0, td = c);
  }
}
function Mo(e) {
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
function py(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Qp(e) {
  if (Mo(e) !== e) throw Error(H(188));
}
function R1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mo(e), t === null) throw Error(H(188));
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
        if (i === n) return Qp(o), e;
        if (i === r) return Qp(o), t;
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
function my(e) {
  return e = R1(e), e !== null ? hy(e) : null;
}
function hy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gy = pn.unstable_scheduleCallback, qp = pn.unstable_cancelCallback, I1 = pn.unstable_shouldYield, M1 = pn.unstable_requestPaint, pt = pn.unstable_now, $1 = pn.unstable_getCurrentPriorityLevel, pf = pn.unstable_ImmediatePriority, yy = pn.unstable_UserBlockingPriority, oa = pn.unstable_NormalPriority, O1 = pn.unstable_LowPriority, vy = pn.unstable_IdlePriority, Da = null, er = null;
function A1(e) {
  if (er && typeof er.onCommitFiberRoot == "function") try {
    er.onCommitFiberRoot(Da, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Fn = Math.clz32 ? Math.clz32 : N1, j1 = Math.log, L1 = Math.LN2;
function N1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (j1(e) / L1 | 0) | 0;
}
var cl = 64, ul = 4194304;
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
function ia(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = qi(l) : (i &= s, i !== 0 && (r = qi(i)));
  } else s = n & ~o, s !== 0 ? r = qi(s) : i !== 0 && (r = qi(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Fn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function z1(e, t) {
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
function B1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Fn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = z1(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function nd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function xy() {
  var e = cl;
  return cl <<= 1, !(cl & 4194240) && (cl = 64), e;
}
function su(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vs(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Fn(t), e[t] = n;
}
function F1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Fn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function mf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Fn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var De = 0;
function Sy(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var by, hf, wy, Cy, ky, rd = !1, dl = [], zr = null, Br = null, Fr = null, Ss = /* @__PURE__ */ new Map(), bs = /* @__PURE__ */ new Map(), Ar = [], D1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Zp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zr = null;
      break;
    case "dragenter":
    case "dragleave":
      Br = null;
      break;
    case "mouseover":
    case "mouseout":
      Fr = null;
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
function Li(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ys(t), t !== null && hf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function _1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return zr = Li(zr, e, t, n, r, o), !0;
    case "dragenter":
      return Br = Li(Br, e, t, n, r, o), !0;
    case "mouseover":
      return Fr = Li(Fr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ss.set(i, Li(Ss.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, bs.set(i, Li(bs.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Ey(e) {
  var t = po(e.target);
  if (t !== null) {
    var n = Mo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = py(n), t !== null) {
          e.blockedOn = t, ky(e.priority, function() {
            wy(n);
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
function Bl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = od(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Zu = r, n.target.dispatchEvent(r), Zu = null;
    } else return t = Ys(n), t !== null && hf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Jp(e, t, n) {
  Bl(e) && n.delete(t);
}
function W1() {
  rd = !1, zr !== null && Bl(zr) && (zr = null), Br !== null && Bl(Br) && (Br = null), Fr !== null && Bl(Fr) && (Fr = null), Ss.forEach(Jp), bs.forEach(Jp);
}
function Ni(e, t) {
  e.blockedOn === t && (e.blockedOn = null, rd || (rd = !0, pn.unstable_scheduleCallback(pn.unstable_NormalPriority, W1)));
}
function ws(e) {
  function t(o) {
    return Ni(o, e);
  }
  if (0 < dl.length) {
    Ni(dl[0], e);
    for (var n = 1; n < dl.length; n++) {
      var r = dl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (zr !== null && Ni(zr, e), Br !== null && Ni(Br, e), Fr !== null && Ni(Fr, e), Ss.forEach(t), bs.forEach(t), n = 0; n < Ar.length; n++) r = Ar[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ar.length && (n = Ar[0], n.blockedOn === null); ) Ey(n), n.blockedOn === null && Ar.shift();
}
var li = Tr.ReactCurrentBatchConfig, sa = !0;
function U1(e, t, n, r) {
  var o = De, i = li.transition;
  li.transition = null;
  try {
    De = 1, gf(e, t, n, r);
  } finally {
    De = o, li.transition = i;
  }
}
function H1(e, t, n, r) {
  var o = De, i = li.transition;
  li.transition = null;
  try {
    De = 4, gf(e, t, n, r);
  } finally {
    De = o, li.transition = i;
  }
}
function gf(e, t, n, r) {
  if (sa) {
    var o = od(e, t, n, r);
    if (o === null) gu(e, t, r, la, n), Zp(e, r);
    else if (_1(o, e, t, n, r)) r.stopPropagation();
    else if (Zp(e, r), t & 4 && -1 < D1.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ys(o);
        if (i !== null && by(i), i = od(e, t, n, r), i === null && gu(e, t, r, la, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else gu(e, t, r, null, n);
  }
}
var la = null;
function od(e, t, n, r) {
  if (la = null, e = ff(r), e = po(e), e !== null) if (t = Mo(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = py(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return la = e, null;
}
function Ty(e) {
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
      switch ($1()) {
        case pf:
          return 1;
        case yy:
          return 4;
        case oa:
        case O1:
          return 16;
        case vy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lr = null, yf = null, Fl = null;
function Py() {
  if (Fl) return Fl;
  var e, t = yf, n = t.length, r, o = "value" in Lr ? Lr.value : Lr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Fl = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Dl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function fl() {
  return !0;
}
function em() {
  return !1;
}
function gn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? fl : em, this.isPropagationStopped = em, this;
  }
  return at(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = fl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = fl);
  }, persist: function() {
  }, isPersistent: fl }), t;
}
var Ri = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, vf = gn(Ri), Ks = at({}, Ri, { view: 0, detail: 0 }), V1 = gn(Ks), lu, au, zi, _a = at({}, Ks, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== zi && (zi && e.type === "mousemove" ? (lu = e.screenX - zi.screenX, au = e.screenY - zi.screenY) : au = lu = 0, zi = e), lu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : au;
} }), tm = gn(_a), K1 = at({}, _a, { dataTransfer: 0 }), Y1 = gn(K1), G1 = at({}, Ks, { relatedTarget: 0 }), cu = gn(G1), X1 = at({}, Ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Q1 = gn(X1), q1 = at({}, Ri, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Z1 = gn(q1), J1 = at({}, Ri, { data: 0 }), nm = gn(J1), eS = {
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
}, tS = {
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
}, nS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function rS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = nS[e]) ? !!t[e] : !1;
}
function xf() {
  return rS;
}
var oS = at({}, Ks, { key: function(e) {
  if (e.key) {
    var t = eS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Dl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xf, charCode: function(e) {
  return e.type === "keypress" ? Dl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Dl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), iS = gn(oS), sS = at({}, _a, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rm = gn(sS), lS = at({}, Ks, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xf }), aS = gn(lS), cS = at({}, Ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), uS = gn(cS), dS = at({}, _a, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), fS = gn(dS), pS = [9, 13, 27, 32], Sf = xr && "CompositionEvent" in window, os = null;
xr && "documentMode" in document && (os = document.documentMode);
var mS = xr && "TextEvent" in window && !os, Ry = xr && (!Sf || os && 8 < os && 11 >= os), om = " ", im = !1;
function Iy(e, t) {
  switch (e) {
    case "keyup":
      return pS.indexOf(t.keyCode) !== -1;
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
function My(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ko = !1;
function hS(e, t) {
  switch (e) {
    case "compositionend":
      return My(t);
    case "keypress":
      return t.which !== 32 ? null : (im = !0, om);
    case "textInput":
      return e = t.data, e === om && im ? null : e;
    default:
      return null;
  }
}
function gS(e, t) {
  if (Ko) return e === "compositionend" || !Sf && Iy(e, t) ? (e = Py(), Fl = yf = Lr = null, Ko = !1, e) : null;
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
      return Ry && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function sm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yS[e.type] : t === "textarea";
}
function $y(e, t, n, r) {
  ay(r), t = aa(t, "onChange"), 0 < t.length && (n = new vf("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var is = null, Cs = null;
function vS(e) {
  Wy(e, 0);
}
function Wa(e) {
  var t = Xo(e);
  if (ty(t)) return e;
}
function xS(e, t) {
  if (e === "change") return t;
}
var Oy = !1;
if (xr) {
  var uu;
  if (xr) {
    var du = "oninput" in document;
    if (!du) {
      var lm = document.createElement("div");
      lm.setAttribute("oninput", "return;"), du = typeof lm.oninput == "function";
    }
    uu = du;
  } else uu = !1;
  Oy = uu && (!document.documentMode || 9 < document.documentMode);
}
function am() {
  is && (is.detachEvent("onpropertychange", Ay), Cs = is = null);
}
function Ay(e) {
  if (e.propertyName === "value" && Wa(Cs)) {
    var t = [];
    $y(t, Cs, e, ff(e)), fy(vS, t);
  }
}
function SS(e, t, n) {
  e === "focusin" ? (am(), is = t, Cs = n, is.attachEvent("onpropertychange", Ay)) : e === "focusout" && am();
}
function bS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wa(Cs);
}
function wS(e, t) {
  if (e === "click") return Wa(t);
}
function CS(e, t) {
  if (e === "input" || e === "change") return Wa(t);
}
function kS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var _n = typeof Object.is == "function" ? Object.is : kS;
function ks(e, t) {
  if (_n(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Du.call(t, o) || !_n(e[o], t[o])) return !1;
  }
  return !0;
}
function cm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function um(e, t) {
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
function jy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ly() {
  for (var e = window, t = ta(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ta(e.document);
  }
  return t;
}
function bf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ES(e) {
  var t = Ly(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && jy(n.ownerDocument.documentElement, n)) {
    if (r !== null && bf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = um(n, i);
        var s = um(
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
var TS = xr && "documentMode" in document && 11 >= document.documentMode, Yo = null, id = null, ss = null, sd = !1;
function dm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sd || Yo == null || Yo !== ta(r) || (r = Yo, "selectionStart" in r && bf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ss && ks(ss, r) || (ss = r, r = aa(id, "onSelect"), 0 < r.length && (t = new vf("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yo)));
}
function pl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Go = { animationend: pl("Animation", "AnimationEnd"), animationiteration: pl("Animation", "AnimationIteration"), animationstart: pl("Animation", "AnimationStart"), transitionend: pl("Transition", "TransitionEnd") }, fu = {}, Ny = {};
xr && (Ny = document.createElement("div").style, "AnimationEvent" in window || (delete Go.animationend.animation, delete Go.animationiteration.animation, delete Go.animationstart.animation), "TransitionEvent" in window || delete Go.transitionend.transition);
function Ua(e) {
  if (fu[e]) return fu[e];
  if (!Go[e]) return e;
  var t = Go[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ny) return fu[e] = t[n];
  return e;
}
var zy = Ua("animationend"), By = Ua("animationiteration"), Fy = Ua("animationstart"), Dy = Ua("transitionend"), _y = /* @__PURE__ */ new Map(), fm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qr(e, t) {
  _y.set(e, t), Io(t, [e]);
}
for (var pu = 0; pu < fm.length; pu++) {
  var mu = fm[pu], PS = mu.toLowerCase(), RS = mu[0].toUpperCase() + mu.slice(1);
  qr(PS, "on" + RS);
}
qr(zy, "onAnimationEnd");
qr(By, "onAnimationIteration");
qr(Fy, "onAnimationStart");
qr("dblclick", "onDoubleClick");
qr("focusin", "onFocus");
qr("focusout", "onBlur");
qr(Dy, "onTransitionEnd");
pi("onMouseEnter", ["mouseout", "mouseover"]);
pi("onMouseLeave", ["mouseout", "mouseover"]);
pi("onPointerEnter", ["pointerout", "pointerover"]);
pi("onPointerLeave", ["pointerout", "pointerover"]);
Io("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Io("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Io("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Io("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Io("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Io("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Zi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), IS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));
function pm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, P1(r, t, void 0, e), e.currentTarget = null;
}
function Wy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, c = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        pm(o, l, c), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, c = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        pm(o, l, c), i = a;
      }
    }
  }
  if (ra) throw e = td, ra = !1, td = null, e;
}
function qe(e, t) {
  var n = t[dd];
  n === void 0 && (n = t[dd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Uy(t, e, 2, !1), n.add(r));
}
function hu(e, t, n) {
  var r = 0;
  t && (r |= 4), Uy(n, e, r, t);
}
var ml = "_reactListening" + Math.random().toString(36).slice(2);
function Es(e) {
  if (!e[ml]) {
    e[ml] = !0, Qg.forEach(function(n) {
      n !== "selectionchange" && (IS.has(n) || hu(n, !1, e), hu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ml] || (t[ml] = !0, hu("selectionchange", !1, t));
  }
}
function Uy(e, t, n, r) {
  switch (Ty(t)) {
    case 1:
      var o = U1;
      break;
    case 4:
      o = H1;
      break;
    default:
      o = gf;
  }
  n = o.bind(null, t, n, e), o = void 0, !ed || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function gu(e, t, n, r, o) {
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
  fy(function() {
    var c = i, u = ff(n), m = [];
    e: {
      var v = _y.get(e);
      if (v !== void 0) {
        var d = vf, S = e;
        switch (e) {
          case "keypress":
            if (Dl(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = iS;
            break;
          case "focusin":
            S = "focus", d = cu;
            break;
          case "focusout":
            S = "blur", d = cu;
            break;
          case "beforeblur":
          case "afterblur":
            d = cu;
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
            d = Y1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = aS;
            break;
          case zy:
          case By:
          case Fy:
            d = Q1;
            break;
          case Dy:
            d = uS;
            break;
          case "scroll":
            d = V1;
            break;
          case "wheel":
            d = fS;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = Z1;
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
        var b = (t & 4) !== 0, C = !b && e === "scroll", y = b ? v !== null ? v + "Capture" : null : v;
        b = [];
        for (var h = c, x; h !== null; ) {
          x = h;
          var w = x.stateNode;
          if (x.tag === 5 && w !== null && (x = w, y !== null && (w = xs(h, y), w != null && b.push(Ts(h, w, x)))), C) break;
          h = h.return;
        }
        0 < b.length && (v = new d(v, S, null, n, u), m.push({ event: v, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", v && n !== Zu && (S = n.relatedTarget || n.fromElement) && (po(S) || S[Sr])) break e;
        if ((d || v) && (v = u.window === u ? u : (v = u.ownerDocument) ? v.defaultView || v.parentWindow : window, d ? (S = n.relatedTarget || n.toElement, d = c, S = S ? po(S) : null, S !== null && (C = Mo(S), S !== C || S.tag !== 5 && S.tag !== 6) && (S = null)) : (d = null, S = c), d !== S)) {
          if (b = tm, w = "onMouseLeave", y = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (b = rm, w = "onPointerLeave", y = "onPointerEnter", h = "pointer"), C = d == null ? v : Xo(d), x = S == null ? v : Xo(S), v = new b(w, h + "leave", d, n, u), v.target = C, v.relatedTarget = x, w = null, po(u) === c && (b = new b(y, h + "enter", S, n, u), b.target = x, b.relatedTarget = C, w = b), C = w, d && S) t: {
            for (b = d, y = S, h = 0, x = b; x; x = No(x)) h++;
            for (x = 0, w = y; w; w = No(w)) x++;
            for (; 0 < h - x; ) b = No(b), h--;
            for (; 0 < x - h; ) y = No(y), x--;
            for (; h--; ) {
              if (b === y || y !== null && b === y.alternate) break t;
              b = No(b), y = No(y);
            }
            b = null;
          }
          else b = null;
          d !== null && mm(m, v, d, b, !1), S !== null && C !== null && mm(m, C, S, b, !0);
        }
      }
      e: {
        if (v = c ? Xo(c) : window, d = v.nodeName && v.nodeName.toLowerCase(), d === "select" || d === "input" && v.type === "file") var E = xS;
        else if (sm(v)) if (Oy) E = CS;
        else {
          E = bS;
          var k = SS;
        }
        else (d = v.nodeName) && d.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = wS);
        if (E && (E = E(e, c))) {
          $y(m, E, n, u);
          break e;
        }
        k && k(e, v, c), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && Yu(v, "number", v.value);
      }
      switch (k = c ? Xo(c) : window, e) {
        case "focusin":
          (sm(k) || k.contentEditable === "true") && (Yo = k, id = c, ss = null);
          break;
        case "focusout":
          ss = id = Yo = null;
          break;
        case "mousedown":
          sd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          sd = !1, dm(m, n, u);
          break;
        case "selectionchange":
          if (TS) break;
        case "keydown":
        case "keyup":
          dm(m, n, u);
      }
      var T;
      if (Sf) e: {
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
      else Ko ? Iy(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Ry && n.locale !== "ko" && (Ko || P !== "onCompositionStart" ? P === "onCompositionEnd" && Ko && (T = Py()) : (Lr = u, yf = "value" in Lr ? Lr.value : Lr.textContent, Ko = !0)), k = aa(c, P), 0 < k.length && (P = new nm(P, e, null, n, u), m.push({ event: P, listeners: k }), T ? P.data = T : (T = My(n), T !== null && (P.data = T)))), (T = mS ? hS(e, n) : gS(e, n)) && (c = aa(c, "onBeforeInput"), 0 < c.length && (u = new nm("onBeforeInput", "beforeinput", null, n, u), m.push({ event: u, listeners: c }), u.data = T));
    }
    Wy(m, t);
  });
}
function Ts(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function aa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = xs(e, n), i != null && r.unshift(Ts(e, i, o)), i = xs(e, t), i != null && r.push(Ts(e, i, o))), e = e.return;
  }
  return r;
}
function No(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && c !== null && (l = c, o ? (a = xs(n, i), a != null && s.unshift(Ts(n, a, l))) : o || (a = xs(n, i), a != null && s.push(Ts(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var MS = /\r\n?/g, $S = /\u0000|\uFFFD/g;
function hm(e) {
  return (typeof e == "string" ? e : "" + e).replace(MS, `
`).replace($S, "");
}
function hl(e, t, n) {
  if (t = hm(t), hm(e) !== t && n) throw Error(H(425));
}
function ca() {
}
var ld = null, ad = null;
function cd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ud = typeof setTimeout == "function" ? setTimeout : void 0, OS = typeof clearTimeout == "function" ? clearTimeout : void 0, gm = typeof Promise == "function" ? Promise : void 0, AS = typeof queueMicrotask == "function" ? queueMicrotask : typeof gm < "u" ? function(e) {
  return gm.resolve(null).then(e).catch(jS);
} : ud;
function jS(e) {
  setTimeout(function() {
    throw e;
  });
}
function yu(e, t) {
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
function Dr(e) {
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
var Ii = Math.random().toString(36).slice(2), qn = "__reactFiber$" + Ii, Ps = "__reactProps$" + Ii, Sr = "__reactContainer$" + Ii, dd = "__reactEvents$" + Ii, LS = "__reactListeners$" + Ii, NS = "__reactHandles$" + Ii;
function po(e) {
  var t = e[qn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Sr] || n[qn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ym(e); e !== null; ) {
        if (n = e[qn]) return n;
        e = ym(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ys(e) {
  return e = e[qn] || e[Sr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Xo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function Ha(e) {
  return e[Ps] || null;
}
var fd = [], Qo = -1;
function Zr(e) {
  return { current: e };
}
function Ze(e) {
  0 > Qo || (e.current = fd[Qo], fd[Qo] = null, Qo--);
}
function Xe(e, t) {
  Qo++, fd[Qo] = e.current, e.current = t;
}
var Yr = {}, zt = Zr(Yr), Qt = Zr(!1), bo = Yr;
function mi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function qt(e) {
  return e = e.childContextTypes, e != null;
}
function ua() {
  Ze(Qt), Ze(zt);
}
function vm(e, t, n) {
  if (zt.current !== Yr) throw Error(H(168));
  Xe(zt, t), Xe(Qt, n);
}
function Hy(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, S1(e) || "Unknown", o));
  return at({}, n, r);
}
function da(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yr, bo = zt.current, Xe(zt, e), Xe(Qt, Qt.current), !0;
}
function xm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n ? (e = Hy(e, t, bo), r.__reactInternalMemoizedMergedChildContext = e, Ze(Qt), Ze(zt), Xe(zt, e)) : Ze(Qt), Xe(Qt, n);
}
var mr = null, Va = !1, vu = !1;
function Vy(e) {
  mr === null ? mr = [e] : mr.push(e);
}
function zS(e) {
  Va = !0, Vy(e);
}
function Jr() {
  if (!vu && mr !== null) {
    vu = !0;
    var e = 0, t = De;
    try {
      var n = mr;
      for (De = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      mr = null, Va = !1;
    } catch (o) {
      throw mr !== null && (mr = mr.slice(e + 1)), gy(pf, Jr), o;
    } finally {
      De = t, vu = !1;
    }
  }
  return null;
}
var qo = [], Zo = 0, fa = null, pa = 0, Sn = [], bn = 0, wo = null, gr = 1, yr = "";
function ao(e, t) {
  qo[Zo++] = pa, qo[Zo++] = fa, fa = e, pa = t;
}
function Ky(e, t, n) {
  Sn[bn++] = gr, Sn[bn++] = yr, Sn[bn++] = wo, wo = e;
  var r = gr;
  e = yr;
  var o = 32 - Fn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Fn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, gr = 1 << 32 - Fn(t) + o | n << o | r, yr = i + e;
  } else gr = 1 << i | n << o | r, yr = e;
}
function wf(e) {
  e.return !== null && (ao(e, 1), Ky(e, 1, 0));
}
function Cf(e) {
  for (; e === fa; ) fa = qo[--Zo], qo[Zo] = null, pa = qo[--Zo], qo[Zo] = null;
  for (; e === wo; ) wo = Sn[--bn], Sn[bn] = null, yr = Sn[--bn], Sn[bn] = null, gr = Sn[--bn], Sn[bn] = null;
}
var dn = null, un = null, tt = !1, Bn = null;
function Yy(e, t) {
  var n = kn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Sm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, dn = e, un = Dr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, dn = e, un = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = wo !== null ? { id: gr, overflow: yr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = kn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, dn = e, un = null, !0) : !1;
    default:
      return !1;
  }
}
function pd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function md(e) {
  if (tt) {
    var t = un;
    if (t) {
      var n = t;
      if (!Sm(e, t)) {
        if (pd(e)) throw Error(H(418));
        t = Dr(n.nextSibling);
        var r = dn;
        t && Sm(e, t) ? Yy(r, n) : (e.flags = e.flags & -4097 | 2, tt = !1, dn = e);
      }
    } else {
      if (pd(e)) throw Error(H(418));
      e.flags = e.flags & -4097 | 2, tt = !1, dn = e;
    }
  }
}
function bm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  dn = e;
}
function gl(e) {
  if (e !== dn) return !1;
  if (!tt) return bm(e), tt = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !cd(e.type, e.memoizedProps)), t && (t = un)) {
    if (pd(e)) throw Gy(), Error(H(418));
    for (; t; ) Yy(e, t), t = Dr(t.nextSibling);
  }
  if (bm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              un = Dr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      un = null;
    }
  } else un = dn ? Dr(e.stateNode.nextSibling) : null;
  return !0;
}
function Gy() {
  for (var e = un; e; ) e = Dr(e.nextSibling);
}
function hi() {
  un = dn = null, tt = !1;
}
function kf(e) {
  Bn === null ? Bn = [e] : Bn.push(e);
}
var BS = Tr.ReactCurrentBatchConfig;
function Bi(e, t, n) {
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
function yl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(H(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function wm(e) {
  var t = e._init;
  return t(e._payload);
}
function Xy(e) {
  function t(y, h) {
    if (e) {
      var x = y.deletions;
      x === null ? (y.deletions = [h], y.flags |= 16) : x.push(h);
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
  function i(y, h, x) {
    return y.index = x, e ? (x = y.alternate, x !== null ? (x = x.index, x < h ? (y.flags |= 2, h) : x) : (y.flags |= 2, h)) : (y.flags |= 1048576, h);
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function l(y, h, x, w) {
    return h === null || h.tag !== 6 ? (h = Eu(x, y.mode, w), h.return = y, h) : (h = o(h, x), h.return = y, h);
  }
  function a(y, h, x, w) {
    var E = x.type;
    return E === Vo ? u(y, h, x.props.children, w, x.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === $r && wm(E) === h.type) ? (w = o(h, x.props), w.ref = Bi(y, h, x), w.return = y, w) : (w = Yl(x.type, x.key, x.props, null, y.mode, w), w.ref = Bi(y, h, x), w.return = y, w);
  }
  function c(y, h, x, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== x.containerInfo || h.stateNode.implementation !== x.implementation ? (h = Tu(x, y.mode, w), h.return = y, h) : (h = o(h, x.children || []), h.return = y, h);
  }
  function u(y, h, x, w, E) {
    return h === null || h.tag !== 7 ? (h = vo(x, y.mode, w, E), h.return = y, h) : (h = o(h, x), h.return = y, h);
  }
  function m(y, h, x) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Eu("" + h, y.mode, x), h.return = y, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case sl:
          return x = Yl(h.type, h.key, h.props, null, y.mode, x), x.ref = Bi(y, null, h), x.return = y, x;
        case Ho:
          return h = Tu(h, y.mode, x), h.return = y, h;
        case $r:
          var w = h._init;
          return m(y, w(h._payload), x);
      }
      if (Qi(h) || Ai(h)) return h = vo(h, y.mode, x, null), h.return = y, h;
      yl(y, h);
    }
    return null;
  }
  function v(y, h, x, w) {
    var E = h !== null ? h.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number") return E !== null ? null : l(y, h, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case sl:
          return x.key === E ? a(y, h, x, w) : null;
        case Ho:
          return x.key === E ? c(y, h, x, w) : null;
        case $r:
          return E = x._init, v(
            y,
            h,
            E(x._payload),
            w
          );
      }
      if (Qi(x) || Ai(x)) return E !== null ? null : u(y, h, x, w, null);
      yl(y, x);
    }
    return null;
  }
  function d(y, h, x, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return y = y.get(x) || null, l(h, y, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case sl:
          return y = y.get(w.key === null ? x : w.key) || null, a(h, y, w, E);
        case Ho:
          return y = y.get(w.key === null ? x : w.key) || null, c(h, y, w, E);
        case $r:
          var k = w._init;
          return d(y, h, x, k(w._payload), E);
      }
      if (Qi(w) || Ai(w)) return y = y.get(x) || null, u(h, y, w, E, null);
      yl(h, w);
    }
    return null;
  }
  function S(y, h, x, w) {
    for (var E = null, k = null, T = h, P = h = 0, R = null; T !== null && P < x.length; P++) {
      T.index > P ? (R = T, T = null) : R = T.sibling;
      var j = v(y, T, x[P], w);
      if (j === null) {
        T === null && (T = R);
        break;
      }
      e && T && j.alternate === null && t(y, T), h = i(j, h, P), k === null ? E = j : k.sibling = j, k = j, T = R;
    }
    if (P === x.length) return n(y, T), tt && ao(y, P), E;
    if (T === null) {
      for (; P < x.length; P++) T = m(y, x[P], w), T !== null && (h = i(T, h, P), k === null ? E = T : k.sibling = T, k = T);
      return tt && ao(y, P), E;
    }
    for (T = r(y, T); P < x.length; P++) R = d(T, y, P, x[P], w), R !== null && (e && R.alternate !== null && T.delete(R.key === null ? P : R.key), h = i(R, h, P), k === null ? E = R : k.sibling = R, k = R);
    return e && T.forEach(function($) {
      return t(y, $);
    }), tt && ao(y, P), E;
  }
  function b(y, h, x, w) {
    var E = Ai(x);
    if (typeof E != "function") throw Error(H(150));
    if (x = E.call(x), x == null) throw Error(H(151));
    for (var k = E = null, T = h, P = h = 0, R = null, j = x.next(); T !== null && !j.done; P++, j = x.next()) {
      T.index > P ? (R = T, T = null) : R = T.sibling;
      var $ = v(y, T, j.value, w);
      if ($ === null) {
        T === null && (T = R);
        break;
      }
      e && T && $.alternate === null && t(y, T), h = i($, h, P), k === null ? E = $ : k.sibling = $, k = $, T = R;
    }
    if (j.done) return n(
      y,
      T
    ), tt && ao(y, P), E;
    if (T === null) {
      for (; !j.done; P++, j = x.next()) j = m(y, j.value, w), j !== null && (h = i(j, h, P), k === null ? E = j : k.sibling = j, k = j);
      return tt && ao(y, P), E;
    }
    for (T = r(y, T); !j.done; P++, j = x.next()) j = d(T, y, P, j.value, w), j !== null && (e && j.alternate !== null && T.delete(j.key === null ? P : j.key), h = i(j, h, P), k === null ? E = j : k.sibling = j, k = j);
    return e && T.forEach(function(g) {
      return t(y, g);
    }), tt && ao(y, P), E;
  }
  function C(y, h, x, w) {
    if (typeof x == "object" && x !== null && x.type === Vo && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case sl:
          e: {
            for (var E = x.key, k = h; k !== null; ) {
              if (k.key === E) {
                if (E = x.type, E === Vo) {
                  if (k.tag === 7) {
                    n(y, k.sibling), h = o(k, x.props.children), h.return = y, y = h;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === $r && wm(E) === k.type) {
                  n(y, k.sibling), h = o(k, x.props), h.ref = Bi(y, k, x), h.return = y, y = h;
                  break e;
                }
                n(y, k);
                break;
              } else t(y, k);
              k = k.sibling;
            }
            x.type === Vo ? (h = vo(x.props.children, y.mode, w, x.key), h.return = y, y = h) : (w = Yl(x.type, x.key, x.props, null, y.mode, w), w.ref = Bi(y, h, x), w.return = y, y = w);
          }
          return s(y);
        case Ho:
          e: {
            for (k = x.key; h !== null; ) {
              if (h.key === k) if (h.tag === 4 && h.stateNode.containerInfo === x.containerInfo && h.stateNode.implementation === x.implementation) {
                n(y, h.sibling), h = o(h, x.children || []), h.return = y, y = h;
                break e;
              } else {
                n(y, h);
                break;
              }
              else t(y, h);
              h = h.sibling;
            }
            h = Tu(x, y.mode, w), h.return = y, y = h;
          }
          return s(y);
        case $r:
          return k = x._init, C(y, h, k(x._payload), w);
      }
      if (Qi(x)) return S(y, h, x, w);
      if (Ai(x)) return b(y, h, x, w);
      yl(y, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, h !== null && h.tag === 6 ? (n(y, h.sibling), h = o(h, x), h.return = y, y = h) : (n(y, h), h = Eu(x, y.mode, w), h.return = y, y = h), s(y)) : n(y, h);
  }
  return C;
}
var gi = Xy(!0), Qy = Xy(!1), ma = Zr(null), ha = null, Jo = null, Ef = null;
function Tf() {
  Ef = Jo = ha = null;
}
function Pf(e) {
  var t = ma.current;
  Ze(ma), e._currentValue = t;
}
function hd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ai(e, t) {
  ha = e, Ef = Jo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Xt = !0), e.firstContext = null);
}
function Pn(e) {
  var t = e._currentValue;
  if (Ef !== e) if (e = { context: e, memoizedValue: t, next: null }, Jo === null) {
    if (ha === null) throw Error(H(308));
    Jo = e, ha.dependencies = { lanes: 0, firstContext: e };
  } else Jo = Jo.next = e;
  return t;
}
var mo = null;
function Rf(e) {
  mo === null ? mo = [e] : mo.push(e);
}
function qy(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Rf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, br(e, r);
}
function br(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Or = !1;
function If(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Zy(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function vr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function _r(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, $e & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, br(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Rf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, br(e, n);
}
function _l(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, mf(e, n);
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
function ga(e, t, n, r) {
  var o = e.updateQueue;
  Or = !1;
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
          var S = e, b = l;
          switch (v = t, d = n, b.tag) {
            case 1:
              if (S = b.payload, typeof S == "function") {
                m = S.call(d, m, v);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = b.payload, v = typeof S == "function" ? S.call(d, m, v) : S, v == null) break e;
              m = at({}, m, v);
              break e;
            case 2:
              Or = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [l] : v.push(l));
      } else d = { eventTime: d, lane: v, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, u === null ? (c = u = d, a = m) : u = u.next = d, s |= v;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
      }
    } while (!0);
    if (u === null && (a = m), o.baseState = a, o.firstBaseUpdate = c, o.lastBaseUpdate = u, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ko |= s, e.lanes = s, e.memoizedState = m;
  }
}
function km(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(H(191, o));
      o.call(r);
    }
  }
}
var Gs = {}, tr = Zr(Gs), Rs = Zr(Gs), Is = Zr(Gs);
function ho(e) {
  if (e === Gs) throw Error(H(174));
  return e;
}
function Mf(e, t) {
  switch (Xe(Is, t), Xe(Rs, e), Xe(tr, Gs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xu(t, e);
  }
  Ze(tr), Xe(tr, t);
}
function yi() {
  Ze(tr), Ze(Rs), Ze(Is);
}
function Jy(e) {
  ho(Is.current);
  var t = ho(tr.current), n = Xu(t, e.type);
  t !== n && (Xe(Rs, e), Xe(tr, n));
}
function $f(e) {
  Rs.current === e && (Ze(tr), Ze(Rs));
}
var ot = Zr(0);
function ya(e) {
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
var xu = [];
function Of() {
  for (var e = 0; e < xu.length; e++) xu[e]._workInProgressVersionPrimary = null;
  xu.length = 0;
}
var Wl = Tr.ReactCurrentDispatcher, Su = Tr.ReactCurrentBatchConfig, Co = 0, it = null, bt = null, kt = null, va = !1, ls = !1, Ms = 0, FS = 0;
function Ot() {
  throw Error(H(321));
}
function Af(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!_n(e[n], t[n])) return !1;
  return !0;
}
function jf(e, t, n, r, o, i) {
  if (Co = i, it = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wl.current = e === null || e.memoizedState === null ? US : HS, e = n(r, o), ls) {
    i = 0;
    do {
      if (ls = !1, Ms = 0, 25 <= i) throw Error(H(301));
      i += 1, kt = bt = null, t.updateQueue = null, Wl.current = VS, e = n(r, o);
    } while (ls);
  }
  if (Wl.current = xa, t = bt !== null && bt.next !== null, Co = 0, kt = bt = it = null, va = !1, t) throw Error(H(300));
  return e;
}
function Lf() {
  var e = Ms !== 0;
  return Ms = 0, e;
}
function Gn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return kt === null ? it.memoizedState = kt = e : kt = kt.next = e, kt;
}
function Rn() {
  if (bt === null) {
    var e = it.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = bt.next;
  var t = kt === null ? it.memoizedState : kt.next;
  if (t !== null) kt = t, bt = e;
  else {
    if (e === null) throw Error(H(310));
    bt = e, e = { memoizedState: bt.memoizedState, baseState: bt.baseState, baseQueue: bt.baseQueue, queue: bt.queue, next: null }, kt === null ? it.memoizedState = kt = e : kt = kt.next = e;
  }
  return kt;
}
function $s(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bu(e) {
  var t = Rn(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = bt, o = r.baseQueue, i = n.pending;
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
        var m = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (l = a = m, s = r) : a = a.next = m, it.lanes |= u, ko |= u;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? s = r : a.next = l, _n(r, t.memoizedState) || (Xt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, it.lanes |= i, ko |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function wu(e) {
  var t = Rn(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    _n(i, t.memoizedState) || (Xt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ev() {
}
function tv(e, t) {
  var n = it, r = Rn(), o = t(), i = !_n(r.memoizedState, o);
  if (i && (r.memoizedState = o, Xt = !0), r = r.queue, Nf(ov.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || kt !== null && kt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Os(9, rv.bind(null, n, r, o, t), void 0, null), Et === null) throw Error(H(349));
    Co & 30 || nv(n, t, o);
  }
  return o;
}
function nv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = it.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, it.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
    return !_n(e, n);
  } catch {
    return !0;
  }
}
function sv(e) {
  var t = br(e, 1);
  t !== null && Dn(t, e, 1, -1);
}
function Em(e) {
  var t = Gn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: $s, lastRenderedState: e }, t.queue = e, e = e.dispatch = WS.bind(null, it, e), [t.memoizedState, e];
}
function Os(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = it.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, it.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function lv() {
  return Rn().memoizedState;
}
function Ul(e, t, n, r) {
  var o = Gn();
  it.flags |= e, o.memoizedState = Os(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ka(e, t, n, r) {
  var o = Rn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (bt !== null) {
    var s = bt.memoizedState;
    if (i = s.destroy, r !== null && Af(r, s.deps)) {
      o.memoizedState = Os(t, n, i, r);
      return;
    }
  }
  it.flags |= e, o.memoizedState = Os(1 | t, n, i, r);
}
function Tm(e, t) {
  return Ul(8390656, 8, e, t);
}
function Nf(e, t) {
  return Ka(2048, 8, e, t);
}
function av(e, t) {
  return Ka(4, 2, e, t);
}
function cv(e, t) {
  return Ka(4, 4, e, t);
}
function uv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function dv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ka(4, 4, uv.bind(null, t, e), n);
}
function zf() {
}
function fv(e, t) {
  var n = Rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Af(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function pv(e, t) {
  var n = Rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Af(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function mv(e, t, n) {
  return Co & 21 ? (_n(n, t) || (n = xy(), it.lanes |= n, ko |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Xt = !0), e.memoizedState = n);
}
function DS(e, t) {
  var n = De;
  De = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Su.transition;
  Su.transition = {};
  try {
    e(!1), t();
  } finally {
    De = n, Su.transition = r;
  }
}
function hv() {
  return Rn().memoizedState;
}
function _S(e, t, n) {
  var r = Ur(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, gv(e)) yv(t, n);
  else if (n = qy(e, t, n, r), n !== null) {
    var o = Ut();
    Dn(n, e, r, o), vv(n, t, r);
  }
}
function WS(e, t, n) {
  var r = Ur(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gv(e)) yv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, _n(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Rf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = qy(e, t, o, r), n !== null && (o = Ut(), Dn(n, e, r, o), vv(n, t, r));
  }
}
function gv(e) {
  var t = e.alternate;
  return e === it || t !== null && t === it;
}
function yv(e, t) {
  ls = va = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function vv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, mf(e, n);
  }
}
var xa = { readContext: Pn, useCallback: Ot, useContext: Ot, useEffect: Ot, useImperativeHandle: Ot, useInsertionEffect: Ot, useLayoutEffect: Ot, useMemo: Ot, useReducer: Ot, useRef: Ot, useState: Ot, useDebugValue: Ot, useDeferredValue: Ot, useTransition: Ot, useMutableSource: Ot, useSyncExternalStore: Ot, useId: Ot, unstable_isNewReconciler: !1 }, US = { readContext: Pn, useCallback: function(e, t) {
  return Gn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Pn, useEffect: Tm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ul(
    4194308,
    4,
    uv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ul(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ul(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Gn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Gn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = _S.bind(null, it, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Gn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Em, useDebugValue: zf, useDeferredValue: function(e) {
  return Gn().memoizedState = e;
}, useTransition: function() {
  var e = Em(!1), t = e[0];
  return e = DS.bind(null, e[1]), Gn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = it, o = Gn();
  if (tt) {
    if (n === void 0) throw Error(H(407));
    n = n();
  } else {
    if (n = t(), Et === null) throw Error(H(349));
    Co & 30 || nv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Tm(ov.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Os(9, rv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Gn(), t = Et.identifierPrefix;
  if (tt) {
    var n = yr, r = gr;
    n = (r & ~(1 << 32 - Fn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ms++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = FS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, HS = {
  readContext: Pn,
  useCallback: fv,
  useContext: Pn,
  useEffect: Nf,
  useImperativeHandle: dv,
  useInsertionEffect: av,
  useLayoutEffect: cv,
  useMemo: pv,
  useReducer: bu,
  useRef: lv,
  useState: function() {
    return bu($s);
  },
  useDebugValue: zf,
  useDeferredValue: function(e) {
    var t = Rn();
    return mv(t, bt.memoizedState, e);
  },
  useTransition: function() {
    var e = bu($s)[0], t = Rn().memoizedState;
    return [e, t];
  },
  useMutableSource: ev,
  useSyncExternalStore: tv,
  useId: hv,
  unstable_isNewReconciler: !1
}, VS = { readContext: Pn, useCallback: fv, useContext: Pn, useEffect: Nf, useImperativeHandle: dv, useInsertionEffect: av, useLayoutEffect: cv, useMemo: pv, useReducer: wu, useRef: lv, useState: function() {
  return wu($s);
}, useDebugValue: zf, useDeferredValue: function(e) {
  var t = Rn();
  return bt === null ? t.memoizedState = e : mv(t, bt.memoizedState, e);
}, useTransition: function() {
  var e = wu($s)[0], t = Rn().memoizedState;
  return [e, t];
}, useMutableSource: ev, useSyncExternalStore: tv, useId: hv, unstable_isNewReconciler: !1 };
function Nn(e, t) {
  if (e && e.defaultProps) {
    t = at({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function gd(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : at({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ya = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ut(), o = Ur(e), i = vr(r, o);
  i.payload = t, n != null && (i.callback = n), t = _r(e, i, o), t !== null && (Dn(t, e, o, r), _l(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ut(), o = Ur(e), i = vr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = _r(e, i, o), t !== null && (Dn(t, e, o, r), _l(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ut(), r = Ur(e), o = vr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = _r(e, o, r), t !== null && (Dn(t, e, r, n), _l(t, e, r));
} };
function Pm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ks(n, r) || !ks(o, i) : !0;
}
function xv(e, t, n) {
  var r = !1, o = Yr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Pn(i) : (o = qt(t) ? bo : zt.current, r = t.contextTypes, i = (r = r != null) ? mi(e, o) : Yr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ya, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Rm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ya.enqueueReplaceState(t, t.state, null);
}
function yd(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, If(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Pn(i) : (i = qt(t) ? bo : zt.current, o.context = mi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (gd(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ya.enqueueReplaceState(o, o.state, null), ga(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function vi(e, t) {
  try {
    var n = "", r = t;
    do
      n += x1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Cu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function vd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var KS = typeof WeakMap == "function" ? WeakMap : Map;
function Sv(e, t, n) {
  n = vr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ba || (ba = !0, Rd = r), vd(e, t);
  }, n;
}
function bv(e, t, n) {
  n = vr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      vd(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    vd(e, t), typeof r != "function" && (Wr === null ? Wr = /* @__PURE__ */ new Set([this]) : Wr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Im(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new KS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = sb.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vr(-1, 1), t.tag = 2, _r(n, t, 1))), n.lanes |= 1), e);
}
var YS = Tr.ReactCurrentOwner, Xt = !1;
function Dt(e, t, n, r) {
  t.child = e === null ? Qy(t, null, n, r) : gi(t, e.child, n, r);
}
function Om(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ai(t, o), r = jf(e, t, n, r, i, o), n = Lf(), e !== null && !Xt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wr(e, t, o)) : (tt && n && wf(t), t.flags |= 1, Dt(e, t, r, o), t.child);
}
function Am(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Vf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, wv(e, t, i, r, o)) : (e = Yl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ks, n(s, r) && e.ref === t.ref) return wr(e, t, o);
  }
  return t.flags |= 1, e = Hr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function wv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ks(i, r) && e.ref === t.ref) if (Xt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Xt = !0);
    else return t.lanes = e.lanes, wr(e, t, o);
  }
  return xd(e, t, n, r, o);
}
function Cv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Xe(ti, ln), ln |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Xe(ti, ln), ln |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Xe(ti, ln), ln |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Xe(ti, ln), ln |= r;
  return Dt(e, t, o, n), t.child;
}
function kv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function xd(e, t, n, r, o) {
  var i = qt(n) ? bo : zt.current;
  return i = mi(t, i), ai(t, o), n = jf(e, t, n, r, i, o), r = Lf(), e !== null && !Xt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wr(e, t, o)) : (tt && r && wf(t), t.flags |= 1, Dt(e, t, n, o), t.child);
}
function jm(e, t, n, r, o) {
  if (qt(n)) {
    var i = !0;
    da(t);
  } else i = !1;
  if (ai(t, o), t.stateNode === null) Hl(e, t), xv(t, n, r), yd(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Pn(c) : (c = qt(n) ? bo : zt.current, c = mi(t, c));
    var u = n.getDerivedStateFromProps, m = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== c) && Rm(t, s, r, c), Or = !1;
    var v = t.memoizedState;
    s.state = v, ga(t, r, s, o), a = t.memoizedState, l !== r || v !== a || Qt.current || Or ? (typeof u == "function" && (gd(t, n, u, r), a = t.memoizedState), (l = Or || Pm(t, n, l, r, v, a, c)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = c, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Zy(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Nn(t.type, l), s.props = c, m = t.pendingProps, v = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Pn(a) : (a = qt(n) ? bo : zt.current, a = mi(t, a));
    var d = n.getDerivedStateFromProps;
    (u = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== m || v !== a) && Rm(t, s, r, a), Or = !1, v = t.memoizedState, s.state = v, ga(t, r, s, o);
    var S = t.memoizedState;
    l !== m || v !== S || Qt.current || Or ? (typeof d == "function" && (gd(t, n, d, r), S = t.memoizedState), (c = Or || Pm(t, n, c, r, v, S, a) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = a, r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Sd(e, t, n, r, i, o);
}
function Sd(e, t, n, r, o, i) {
  kv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && xm(t, n, !1), wr(e, t, i);
  r = t.stateNode, YS.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = gi(t, e.child, null, i), t.child = gi(t, null, l, i)) : Dt(e, t, l, i), t.memoizedState = r.state, o && xm(t, n, !0), t.child;
}
function Ev(e) {
  var t = e.stateNode;
  t.pendingContext ? vm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vm(e, t.context, !1), Mf(e, t.containerInfo);
}
function Lm(e, t, n, r, o) {
  return hi(), kf(o), t.flags |= 256, Dt(e, t, n, r), t.child;
}
var bd = { dehydrated: null, treeContext: null, retryLane: 0 };
function wd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Tv(e, t, n) {
  var r = t.pendingProps, o = ot.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Xe(ot, o & 1), e === null)
    return md(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Qa(s, r, 0, null), e = vo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = wd(n), t.memoizedState = bd, e) : Bf(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return GS(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Hr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Hr(l, i) : (i = vo(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? wd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = bd, r;
  }
  return i = e.child, e = i.sibling, r = Hr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Bf(e, t) {
  return t = Qa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function vl(e, t, n, r) {
  return r !== null && kf(r), gi(t, e.child, null, n), e = Bf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function GS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Cu(Error(H(422))), vl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Qa({ mode: "visible", children: r.children }, o, 0, null), i = vo(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && gi(t, e.child, null, s), t.child.memoizedState = wd(s), t.memoizedState = bd, i);
  if (!(t.mode & 1)) return vl(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(H(419)), r = Cu(i, r, void 0), vl(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, Xt || l) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, br(e, o), Dn(r, e, o, -1));
    }
    return Hf(), r = Cu(Error(H(421))), vl(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = lb.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, un = Dr(o.nextSibling), dn = t, tt = !0, Bn = null, e !== null && (Sn[bn++] = gr, Sn[bn++] = yr, Sn[bn++] = wo, gr = e.id, yr = e.overflow, wo = t), t = Bf(t, r.children), t.flags |= 4096, t);
}
function Nm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), hd(e.return, t, n);
}
function ku(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Pv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Dt(e, t, r.children, n), r = ot.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Nm(e, n, t);
      else if (e.tag === 19) Nm(e, n, t);
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
  if (Xe(ot, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ya(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ku(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && ya(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      ku(t, !0, n, null, i);
      break;
    case "together":
      ku(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Hl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function wr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ko |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (e = t.child, n = Hr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Hr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function XS(e, t, n) {
  switch (t.tag) {
    case 3:
      Ev(t), hi();
      break;
    case 5:
      Jy(t);
      break;
    case 1:
      qt(t.type) && da(t);
      break;
    case 4:
      Mf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Xe(ma, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Xe(ot, ot.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Tv(e, t, n) : (Xe(ot, ot.current & 1), e = wr(e, t, n), e !== null ? e.sibling : null);
      Xe(ot, ot.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Pv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Xe(ot, ot.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Cv(e, t, n);
  }
  return wr(e, t, n);
}
var Rv, Cd, Iv, Mv;
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
Cd = function() {
};
Iv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, ho(tr.current);
    var i = null;
    switch (n) {
      case "input":
        o = Vu(e, o), r = Vu(e, r), i = [];
        break;
      case "select":
        o = at({}, o, { value: void 0 }), r = at({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Gu(e, o), r = Gu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ca);
    }
    Qu(n, r);
    var s;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var l = o[c];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ys.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (l = o?.[c], r.hasOwnProperty(c) && a !== l && (a != null || l != null)) if (c === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ys.hasOwnProperty(c) ? (a != null && c === "onScroll" && qe("scroll", e), i || l === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Mv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fi(e, t) {
  if (!tt) switch (e.tailMode) {
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
function QS(e, t, n) {
  var r = t.pendingProps;
  switch (Cf(t), t.tag) {
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
      return qt(t.type) && ua(), At(t), null;
    case 3:
      return r = t.stateNode, yi(), Ze(Qt), Ze(zt), Of(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (gl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Bn !== null && ($d(Bn), Bn = null))), Cd(e, t), At(t), null;
    case 5:
      $f(t);
      var o = ho(Is.current);
      if (n = t.type, e !== null && t.stateNode != null) Iv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return At(t), null;
        }
        if (e = ho(tr.current), gl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[qn] = t, r[Ps] = i, e = (t.mode & 1) !== 0, n) {
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
              Vp(r, i), qe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, qe("invalid", r);
              break;
            case "textarea":
              Yp(r, i), qe("invalid", r);
          }
          Qu(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && hl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && hl(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : ys.hasOwnProperty(s) && l != null && s === "onScroll" && qe("scroll", r);
          }
          switch (n) {
            case "input":
              ll(r), Kp(r, i, !0);
              break;
            case "textarea":
              ll(r), Gp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ca);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = oy(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[qn] = t, e[Ps] = r, Rv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = qu(n, r), n) {
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
                Vp(e, r), o = Vu(e, r), qe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = at({}, r, { value: void 0 }), qe("invalid", e);
                break;
              case "textarea":
                Yp(e, r), o = Gu(e, r), qe("invalid", e);
                break;
              default:
                o = r;
            }
            Qu(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? ly(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && iy(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && vs(e, a) : typeof a == "number" && vs(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ys.hasOwnProperty(i) ? a != null && i === "onScroll" && qe("scroll", e) : a != null && af(e, i, a, s));
            }
            switch (n) {
              case "input":
                ll(e), Kp(e, r, !1);
                break;
              case "textarea":
                ll(e), Gp(e);
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
                typeof o.onClick == "function" && (e.onclick = ca);
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
      if (e && t.stateNode != null) Mv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (n = ho(Is.current), ho(tr.current), gl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[qn] = t, (i = r.nodeValue !== n) && (e = dn, e !== null)) switch (e.tag) {
            case 3:
              hl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && hl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qn] = t, t.stateNode = r;
      }
      return At(t), null;
    case 13:
      if (Ze(ot), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (tt && un !== null && t.mode & 1 && !(t.flags & 128)) Gy(), hi(), t.flags |= 98560, i = !1;
        else if (i = gl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(H(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(H(317));
            i[qn] = t;
          } else hi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          At(t), i = !1;
        } else Bn !== null && ($d(Bn), Bn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ot.current & 1 ? wt === 0 && (wt = 3) : Hf())), t.updateQueue !== null && (t.flags |= 4), At(t), null);
    case 4:
      return yi(), Cd(e, t), e === null && Es(t.stateNode.containerInfo), At(t), null;
    case 10:
      return Pf(t.type._context), At(t), null;
    case 17:
      return qt(t.type) && ua(), At(t), null;
    case 19:
      if (Ze(ot), i = t.memoizedState, i === null) return At(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Fi(i, !1);
      else {
        if (wt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ya(e), s !== null) {
            for (t.flags |= 128, Fi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Xe(ot, ot.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && pt() > xi && (t.flags |= 128, r = !0, Fi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ya(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Fi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !tt) return At(t), null;
        } else 2 * pt() - i.renderingStartTime > xi && n !== 1073741824 && (t.flags |= 128, r = !0, Fi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = pt(), t.sibling = null, n = ot.current, Xe(ot, r ? n & 1 | 2 : n & 1), t) : (At(t), null);
    case 22:
    case 23:
      return Uf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ln & 1073741824 && (At(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : At(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function qS(e, t) {
  switch (Cf(t), t.tag) {
    case 1:
      return qt(t.type) && ua(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return yi(), Ze(Qt), Ze(zt), Of(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return $f(t), null;
    case 13:
      if (Ze(ot), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(H(340));
        hi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Ze(ot), null;
    case 4:
      return yi(), null;
    case 10:
      return Pf(t.type._context), null;
    case 22:
    case 23:
      return Uf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xl = !1, Nt = !1, ZS = typeof WeakSet == "function" ? WeakSet : Set, te = null;
function ei(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ut(e, t, r);
  }
  else n.current = null;
}
function kd(e, t, n) {
  try {
    n();
  } catch (r) {
    ut(e, t, r);
  }
}
var zm = !1;
function JS(e, t) {
  if (ld = sa, e = Ly(), bf(e)) {
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
        var s = 0, l = -1, a = -1, c = 0, u = 0, m = e, v = null;
        t: for (; ; ) {
          for (var d; m !== n || o !== 0 && m.nodeType !== 3 || (l = s + o), m !== i || r !== 0 && m.nodeType !== 3 || (a = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (d = m.firstChild) !== null; )
            v = m, m = d;
          for (; ; ) {
            if (m === e) break t;
            if (v === n && ++c === o && (l = s), v === i && ++u === r && (a = s), (d = m.nextSibling) !== null) break;
            m = v, v = m.parentNode;
          }
          m = d;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ad = { focusedElem: e, selectionRange: n }, sa = !1, te = t; te !== null; ) if (t = te, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, te = e;
  else for (; te !== null; ) {
    t = te;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var b = S.memoizedProps, C = S.memoizedState, y = t.stateNode, h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? b : Nn(t.type, b), C);
            y.__reactInternalSnapshotBeforeUpdate = h;
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
          throw Error(H(163));
      }
    } catch (w) {
      ut(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, te = e;
      break;
    }
    te = t.return;
  }
  return S = zm, zm = !1, S;
}
function as(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && kd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ga(e, t) {
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
function Ed(e) {
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
  t !== null && (e.alternate = null, $v(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qn], delete t[Ps], delete t[dd], delete t[LS], delete t[NS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ov(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bm(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ov(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Td(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ca));
  else if (r !== 4 && (e = e.child, e !== null)) for (Td(e, t, n), e = e.sibling; e !== null; ) Td(e, t, n), e = e.sibling;
}
function Pd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Pd(e, t, n), e = e.sibling; e !== null; ) Pd(e, t, n), e = e.sibling;
}
var Pt = null, zn = !1;
function Rr(e, t, n) {
  for (n = n.child; n !== null; ) Av(e, t, n), n = n.sibling;
}
function Av(e, t, n) {
  if (er && typeof er.onCommitFiberUnmount == "function") try {
    er.onCommitFiberUnmount(Da, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Nt || ei(n, t);
    case 6:
      var r = Pt, o = zn;
      Pt = null, Rr(e, t, n), Pt = r, zn = o, Pt !== null && (zn ? (e = Pt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pt.removeChild(n.stateNode));
      break;
    case 18:
      Pt !== null && (zn ? (e = Pt, n = n.stateNode, e.nodeType === 8 ? yu(e.parentNode, n) : e.nodeType === 1 && yu(e, n), ws(e)) : yu(Pt, n.stateNode));
      break;
    case 4:
      r = Pt, o = zn, Pt = n.stateNode.containerInfo, zn = !0, Rr(e, t, n), Pt = r, zn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Nt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && kd(n, t, s), o = o.next;
        } while (o !== r);
      }
      Rr(e, t, n);
      break;
    case 1:
      if (!Nt && (ei(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        ut(n, t, l);
      }
      Rr(e, t, n);
      break;
    case 21:
      Rr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Nt = (r = Nt) || n.memoizedState !== null, Rr(e, t, n), Nt = r) : Rr(e, t, n);
      break;
    default:
      Rr(e, t, n);
  }
}
function Fm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ZS()), t.forEach(function(r) {
      var o = ab.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function An(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Pt = l.stateNode, zn = !1;
            break e;
          case 3:
            Pt = l.stateNode.containerInfo, zn = !0;
            break e;
          case 4:
            Pt = l.stateNode.containerInfo, zn = !0;
            break e;
        }
        l = l.return;
      }
      if (Pt === null) throw Error(H(160));
      Av(i, s, o), Pt = null, zn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (c) {
      ut(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) jv(t, e), t = t.sibling;
}
function jv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (An(t, e), Vn(e), r & 4) {
        try {
          as(3, e, e.return), Ga(3, e);
        } catch (b) {
          ut(e, e.return, b);
        }
        try {
          as(5, e, e.return);
        } catch (b) {
          ut(e, e.return, b);
        }
      }
      break;
    case 1:
      An(t, e), Vn(e), r & 512 && n !== null && ei(n, n.return);
      break;
    case 5:
      if (An(t, e), Vn(e), r & 512 && n !== null && ei(n, n.return), e.flags & 32) {
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
          l === "input" && i.type === "radio" && i.name != null && ny(o, i), qu(l, s);
          var c = qu(l, i);
          for (s = 0; s < a.length; s += 2) {
            var u = a[s], m = a[s + 1];
            u === "style" ? ly(o, m) : u === "dangerouslySetInnerHTML" ? iy(o, m) : u === "children" ? vs(o, m) : af(o, u, m, c);
          }
          switch (l) {
            case "input":
              Ku(o, i);
              break;
            case "textarea":
              ry(o, i);
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
          o[Ps] = i;
        } catch (b) {
          ut(e, e.return, b);
        }
      }
      break;
    case 6:
      if (An(t, e), Vn(e), r & 4) {
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
      if (An(t, e), Vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ws(t.containerInfo);
      } catch (b) {
        ut(e, e.return, b);
      }
      break;
    case 4:
      An(t, e), Vn(e);
      break;
    case 13:
      An(t, e), Vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (_f = pt())), r & 4 && Fm(e);
      break;
    case 22:
      if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (Nt = (c = Nt) || u, An(t, e), Nt = c) : An(t, e), Vn(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1) for (te = e, u = e.child; u !== null; ) {
          for (m = te = u; te !== null; ) {
            switch (v = te, d = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                as(4, v, v.return);
                break;
              case 1:
                ei(v, v.return);
                var S = v.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (b) {
                    ut(r, n, b);
                  }
                }
                break;
              case 5:
                ei(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  _m(m);
                  continue;
                }
            }
            d !== null ? (d.return = v, te = d) : _m(m);
          }
          u = u.sibling;
        }
        e: for (u = null, m = e; ; ) {
          if (m.tag === 5) {
            if (u === null) {
              u = m;
              try {
                o = m.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = m.stateNode, a = m.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = sy("display", s));
              } catch (b) {
                ut(e, e.return, b);
              }
            }
          } else if (m.tag === 6) {
            if (u === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (b) {
              ut(e, e.return, b);
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
      An(t, e), Vn(e), r & 4 && Fm(e);
      break;
    case 21:
      break;
    default:
      An(
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
          if (Ov(n)) {
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
          var i = Bm(e);
          Pd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Bm(e);
          Td(e, l, s);
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
function eb(e, t, n) {
  te = e, Lv(e);
}
function Lv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; te !== null; ) {
    var o = te, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || xl;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Nt;
        l = xl;
        var c = Nt;
        if (xl = s, (Nt = a) && !c) for (te = o; te !== null; ) s = te, a = s.child, s.tag === 22 && s.memoizedState !== null ? Wm(o) : a !== null ? (a.return = s, te = a) : Wm(o);
        for (; i !== null; ) te = i, Lv(i), i = i.sibling;
        te = o, xl = l, Nt = c;
      }
      Dm(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, te = i) : Dm(e);
  }
}
function Dm(e) {
  for (; te !== null; ) {
    var t = te;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Nt || Ga(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Nt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Nn(t.type, n.memoizedProps);
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
              var c = t.alternate;
              if (c !== null) {
                var u = c.memoizedState;
                if (u !== null) {
                  var m = u.dehydrated;
                  m !== null && ws(m);
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
        Nt || t.flags & 512 && Ed(t);
      } catch (v) {
        ut(t, t.return, v);
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
function _m(e) {
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
function Wm(e) {
  for (; te !== null; ) {
    var t = te;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ga(4, t);
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
            Ed(t);
          } catch (a) {
            ut(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ed(t);
          } catch (a) {
            ut(t, s, a);
          }
      }
    } catch (a) {
      ut(t, t.return, a);
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
var tb = Math.ceil, Sa = Tr.ReactCurrentDispatcher, Ff = Tr.ReactCurrentOwner, En = Tr.ReactCurrentBatchConfig, $e = 0, Et = null, vt = null, It = 0, ln = 0, ti = Zr(0), wt = 0, As = null, ko = 0, Xa = 0, Df = 0, cs = null, Gt = null, _f = 0, xi = 1 / 0, fr = null, ba = !1, Rd = null, Wr = null, Sl = !1, Nr = null, wa = 0, us = 0, Id = null, Vl = -1, Kl = 0;
function Ut() {
  return $e & 6 ? pt() : Vl !== -1 ? Vl : Vl = pt();
}
function Ur(e) {
  return e.mode & 1 ? $e & 2 && It !== 0 ? It & -It : BS.transition !== null ? (Kl === 0 && (Kl = xy()), Kl) : (e = De, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ty(e.type)), e) : 1;
}
function Dn(e, t, n, r) {
  if (50 < us) throw us = 0, Id = null, Error(H(185));
  Vs(e, n, r), (!($e & 2) || e !== Et) && (e === Et && (!($e & 2) && (Xa |= n), wt === 4 && jr(e, It)), Zt(e, r), n === 1 && $e === 0 && !(t.mode & 1) && (xi = pt() + 500, Va && Jr()));
}
function Zt(e, t) {
  var n = e.callbackNode;
  B1(e, t);
  var r = ia(e, e === Et ? It : 0);
  if (r === 0) n !== null && qp(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && qp(n), t === 1) e.tag === 0 ? zS(Um.bind(null, e)) : Vy(Um.bind(null, e)), AS(function() {
      !($e & 6) && Jr();
    }), n = null;
    else {
      switch (Sy(r)) {
        case 1:
          n = pf;
          break;
        case 4:
          n = yy;
          break;
        case 16:
          n = oa;
          break;
        case 536870912:
          n = vy;
          break;
        default:
          n = oa;
      }
      n = Uv(n, Nv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Nv(e, t) {
  if (Vl = -1, Kl = 0, $e & 6) throw Error(H(327));
  var n = e.callbackNode;
  if (ci() && e.callbackNode !== n) return null;
  var r = ia(e, e === Et ? It : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ca(e, r);
  else {
    t = r;
    var o = $e;
    $e |= 2;
    var i = Bv();
    (Et !== e || It !== t) && (fr = null, xi = pt() + 500, yo(e, t));
    do
      try {
        ob();
        break;
      } catch (l) {
        zv(e, l);
      }
    while (!0);
    Tf(), Sa.current = i, $e = o, vt !== null ? t = 0 : (Et = null, It = 0, t = wt);
  }
  if (t !== 0) {
    if (t === 2 && (o = nd(e), o !== 0 && (r = o, t = Md(e, o))), t === 1) throw n = As, yo(e, 0), jr(e, r), Zt(e, pt()), n;
    if (t === 6) jr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !nb(o) && (t = Ca(e, r), t === 2 && (i = nd(e), i !== 0 && (r = i, t = Md(e, i))), t === 1)) throw n = As, yo(e, 0), jr(e, r), Zt(e, pt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          co(e, Gt, fr);
          break;
        case 3:
          if (jr(e, r), (r & 130023424) === r && (t = _f + 500 - pt(), 10 < t)) {
            if (ia(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ut(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ud(co.bind(null, e, Gt, fr), t);
            break;
          }
          co(e, Gt, fr);
          break;
        case 4:
          if (jr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Fn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = pt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * tb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ud(co.bind(null, e, Gt, fr), r);
            break;
          }
          co(e, Gt, fr);
          break;
        case 5:
          co(e, Gt, fr);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return Zt(e, pt()), e.callbackNode === n ? Nv.bind(null, e) : null;
}
function Md(e, t) {
  var n = cs;
  return e.current.memoizedState.isDehydrated && (yo(e, t).flags |= 256), e = Ca(e, t), e !== 2 && (t = Gt, Gt = n, t !== null && $d(t)), e;
}
function $d(e) {
  Gt === null ? Gt = e : Gt.push.apply(Gt, e);
}
function nb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!_n(i(), o)) return !1;
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
function jr(e, t) {
  for (t &= ~Df, t &= ~Xa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Fn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Um(e) {
  if ($e & 6) throw Error(H(327));
  ci();
  var t = ia(e, 0);
  if (!(t & 1)) return Zt(e, pt()), null;
  var n = Ca(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = nd(e);
    r !== 0 && (t = r, n = Md(e, r));
  }
  if (n === 1) throw n = As, yo(e, 0), jr(e, t), Zt(e, pt()), n;
  if (n === 6) throw Error(H(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, co(e, Gt, fr), Zt(e, pt()), null;
}
function Wf(e, t) {
  var n = $e;
  $e |= 1;
  try {
    return e(t);
  } finally {
    $e = n, $e === 0 && (xi = pt() + 500, Va && Jr());
  }
}
function Eo(e) {
  Nr !== null && Nr.tag === 0 && !($e & 6) && ci();
  var t = $e;
  $e |= 1;
  var n = En.transition, r = De;
  try {
    if (En.transition = null, De = 1, e) return e();
  } finally {
    De = r, En.transition = n, $e = t, !($e & 6) && Jr();
  }
}
function Uf() {
  ln = ti.current, Ze(ti);
}
function yo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, OS(n)), vt !== null) for (n = vt.return; n !== null; ) {
    var r = n;
    switch (Cf(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ua();
        break;
      case 3:
        yi(), Ze(Qt), Ze(zt), Of();
        break;
      case 5:
        $f(r);
        break;
      case 4:
        yi();
        break;
      case 13:
        Ze(ot);
        break;
      case 19:
        Ze(ot);
        break;
      case 10:
        Pf(r.type._context);
        break;
      case 22:
      case 23:
        Uf();
    }
    n = n.return;
  }
  if (Et = e, vt = e = Hr(e.current, null), It = ln = t, wt = 0, As = null, Df = Xa = ko = 0, Gt = cs = null, mo !== null) {
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
function zv(e, t) {
  do {
    var n = vt;
    try {
      if (Tf(), Wl.current = xa, va) {
        for (var r = it.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        va = !1;
      }
      if (Co = 0, kt = bt = it = null, ls = !1, Ms = 0, Ff.current = null, n === null || n.return === null) {
        wt = 1, As = t, vt = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = It, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, u = l, m = u.tag;
          if (!(u.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = u.alternate;
            v ? (u.updateQueue = v.updateQueue, u.memoizedState = v.memoizedState, u.lanes = v.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var d = Mm(s);
          if (d !== null) {
            d.flags &= -257, $m(d, s, l, i, t), d.mode & 1 && Im(i, c, t), t = d, a = c;
            var S = t.updateQueue;
            if (S === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Im(i, c, t), Hf();
              break e;
            }
            a = Error(H(426));
          }
        } else if (tt && l.mode & 1) {
          var C = Mm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), $m(C, s, l, i, t), kf(vi(a, l));
            break e;
          }
        }
        i = a = vi(a, l), wt !== 4 && (wt = 2), cs === null ? cs = [i] : cs.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = Sv(i, a, t);
              Cm(i, y);
              break e;
            case 1:
              l = a;
              var h = i.type, x = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Wr === null || !Wr.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = bv(i, l, t);
                Cm(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Dv(n);
    } catch (E) {
      t = E, vt === n && n !== null && (vt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Bv() {
  var e = Sa.current;
  return Sa.current = xa, e === null ? xa : e;
}
function Hf() {
  (wt === 0 || wt === 3 || wt === 2) && (wt = 4), Et === null || !(ko & 268435455) && !(Xa & 268435455) || jr(Et, It);
}
function Ca(e, t) {
  var n = $e;
  $e |= 2;
  var r = Bv();
  (Et !== e || It !== t) && (fr = null, yo(e, t));
  do
    try {
      rb();
      break;
    } catch (o) {
      zv(e, o);
    }
  while (!0);
  if (Tf(), $e = n, Sa.current = r, vt !== null) throw Error(H(261));
  return Et = null, It = 0, wt;
}
function rb() {
  for (; vt !== null; ) Fv(vt);
}
function ob() {
  for (; vt !== null && !I1(); ) Fv(vt);
}
function Fv(e) {
  var t = Wv(e.alternate, e, ln);
  e.memoizedProps = e.pendingProps, t === null ? Dv(e) : vt = t, Ff.current = null;
}
function Dv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = qS(n, t), n !== null) {
        n.flags &= 32767, vt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        wt = 6, vt = null;
        return;
      }
    } else if (n = QS(n, t, ln), n !== null) {
      vt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      vt = t;
      return;
    }
    vt = t = e;
  } while (t !== null);
  wt === 0 && (wt = 5);
}
function co(e, t, n) {
  var r = De, o = En.transition;
  try {
    En.transition = null, De = 1, ib(e, t, n, r);
  } finally {
    En.transition = o, De = r;
  }
  return null;
}
function ib(e, t, n, r) {
  do
    ci();
  while (Nr !== null);
  if ($e & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(H(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (F1(e, i), e === Et && (vt = Et = null, It = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Sl || (Sl = !0, Uv(oa, function() {
    return ci(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = En.transition, En.transition = null;
    var s = De;
    De = 1;
    var l = $e;
    $e |= 4, Ff.current = null, JS(e, n), jv(n, e), ES(ad), sa = !!ld, ad = ld = null, e.current = n, eb(n), M1(), $e = l, De = s, En.transition = i;
  } else e.current = n;
  if (Sl && (Sl = !1, Nr = e, wa = o), i = e.pendingLanes, i === 0 && (Wr = null), A1(n.stateNode), Zt(e, pt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ba) throw ba = !1, e = Rd, Rd = null, e;
  return wa & 1 && e.tag !== 0 && ci(), i = e.pendingLanes, i & 1 ? e === Id ? us++ : (us = 0, Id = e) : us = 0, Jr(), null;
}
function ci() {
  if (Nr !== null) {
    var e = Sy(wa), t = En.transition, n = De;
    try {
      if (En.transition = null, De = 16 > e ? 16 : e, Nr === null) var r = !1;
      else {
        if (e = Nr, Nr = null, wa = 0, $e & 6) throw Error(H(331));
        var o = $e;
        for ($e |= 4, te = e.current; te !== null; ) {
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
                      as(8, u, i);
                  }
                  var m = u.child;
                  if (m !== null) m.return = u, te = m;
                  else for (; te !== null; ) {
                    u = te;
                    var v = u.sibling, d = u.return;
                    if ($v(u), u === c) {
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
              var S = i.alternate;
              if (S !== null) {
                var b = S.child;
                if (b !== null) {
                  S.child = null;
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
                as(9, i, i.return);
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
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) x.return = s, te = x;
          else e: for (s = h; te !== null; ) {
            if (l = te, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Ga(9, l);
              }
            } catch (E) {
              ut(l, l.return, E);
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
        if ($e = o, Jr(), er && typeof er.onPostCommitFiberRoot == "function") try {
          er.onPostCommitFiberRoot(Da, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      De = n, En.transition = t;
    }
  }
  return !1;
}
function Hm(e, t, n) {
  t = vi(n, t), t = Sv(e, t, 1), e = _r(e, t, 1), t = Ut(), e !== null && (Vs(e, 1, t), Zt(e, t));
}
function ut(e, t, n) {
  if (e.tag === 3) Hm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Hm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wr === null || !Wr.has(r))) {
        e = vi(n, e), e = bv(t, e, 1), t = _r(t, e, 1), e = Ut(), t !== null && (Vs(t, 1, e), Zt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function sb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ut(), e.pingedLanes |= e.suspendedLanes & n, Et === e && (It & n) === n && (wt === 4 || wt === 3 && (It & 130023424) === It && 500 > pt() - _f ? yo(e, 0) : Df |= n), Zt(e, t);
}
function _v(e, t) {
  t === 0 && (e.mode & 1 ? (t = ul, ul <<= 1, !(ul & 130023424) && (ul = 4194304)) : t = 1);
  var n = Ut();
  e = br(e, t), e !== null && (Vs(e, t, n), Zt(e, n));
}
function lb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), _v(e, n);
}
function ab(e, t) {
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
  r !== null && r.delete(t), _v(e, n);
}
var Wv;
Wv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Qt.current) Xt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Xt = !1, XS(e, t, n);
    Xt = !!(e.flags & 131072);
  }
  else Xt = !1, tt && t.flags & 1048576 && Ky(t, pa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Hl(e, t), e = t.pendingProps;
      var o = mi(t, zt.current);
      ai(t, n), o = jf(null, t, r, e, o, n);
      var i = Lf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, qt(r) ? (i = !0, da(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, If(t), o.updater = Ya, t.stateNode = o, o._reactInternals = t, yd(t, r, e, n), t = Sd(null, t, r, !0, i, n)) : (t.tag = 0, tt && i && wf(t), Dt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Hl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = ub(r), e = Nn(r, e), o) {
          case 0:
            t = xd(null, t, r, e, n);
            break e;
          case 1:
            t = jm(null, t, r, e, n);
            break e;
          case 11:
            t = Om(null, t, r, e, n);
            break e;
          case 14:
            t = Am(null, t, r, Nn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Nn(r, o), xd(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Nn(r, o), jm(e, t, r, o, n);
    case 3:
      e: {
        if (Ev(t), e === null) throw Error(H(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Zy(e, t), ga(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = vi(Error(H(423)), t), t = Lm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = vi(Error(H(424)), t), t = Lm(e, t, r, n, o);
          break e;
        } else for (un = Dr(t.stateNode.containerInfo.firstChild), dn = t, tt = !0, Bn = null, n = Qy(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (hi(), r === o) {
            t = wr(e, t, n);
            break e;
          }
          Dt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Jy(t), e === null && md(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, cd(r, o) ? s = null : i !== null && cd(r, i) && (t.flags |= 32), kv(e, t), Dt(e, t, s, n), t.child;
    case 6:
      return e === null && md(t), null;
    case 13:
      return Tv(e, t, n);
    case 4:
      return Mf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gi(t, null, r, n) : Dt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Nn(r, o), Om(e, t, r, o, n);
    case 7:
      return Dt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Dt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Dt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Xe(ma, r._currentValue), r._currentValue = s, i !== null) if (_n(i.value, s)) {
          if (i.children === o.children && !Qt.current) {
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
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), hd(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), hd(s, n, t), s = i.sibling;
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
        Dt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, ai(t, n), o = Pn(o), r = r(o), t.flags |= 1, Dt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Nn(r, t.pendingProps), o = Nn(r.type, o), Am(e, t, r, o, n);
    case 15:
      return wv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Nn(r, o), Hl(e, t), t.tag = 1, qt(r) ? (e = !0, da(t)) : e = !1, ai(t, n), xv(t, r, o), yd(t, r, o, n), Sd(null, t, r, !0, e, n);
    case 19:
      return Pv(e, t, n);
    case 22:
      return Cv(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function Uv(e, t) {
  return gy(e, t);
}
function cb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function kn(e, t, n, r) {
  return new cb(e, t, n, r);
}
function Vf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ub(e) {
  if (typeof e == "function") return Vf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === uf) return 11;
    if (e === df) return 14;
  }
  return 2;
}
function Hr(e, t) {
  var n = e.alternate;
  return n === null ? (n = kn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Yl(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") Vf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Vo:
      return vo(n.children, o, i, t);
    case cf:
      s = 8, o |= 8;
      break;
    case _u:
      return e = kn(12, n, t, o | 2), e.elementType = _u, e.lanes = i, e;
    case Wu:
      return e = kn(13, n, t, o), e.elementType = Wu, e.lanes = i, e;
    case Uu:
      return e = kn(19, n, t, o), e.elementType = Uu, e.lanes = i, e;
    case Jg:
      return Qa(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case qg:
          s = 10;
          break e;
        case Zg:
          s = 9;
          break e;
        case uf:
          s = 11;
          break e;
        case df:
          s = 14;
          break e;
        case $r:
          s = 16, r = null;
          break e;
      }
      throw Error(H(130, e == null ? e : typeof e, ""));
  }
  return t = kn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function vo(e, t, n, r) {
  return e = kn(7, e, r, t), e.lanes = n, e;
}
function Qa(e, t, n, r) {
  return e = kn(22, e, r, t), e.elementType = Jg, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Eu(e, t, n) {
  return e = kn(6, e, null, t), e.lanes = n, e;
}
function Tu(e, t, n) {
  return t = kn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function db(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = su(0), this.expirationTimes = su(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = su(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Kf(e, t, n, r, o, i, s, l, a) {
  return e = new db(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = kn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, If(i), e;
}
function fb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ho, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Hv(e) {
  if (!e) return Yr;
  e = e._reactInternals;
  e: {
    if (Mo(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qt(t.type)) {
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
    if (qt(n)) return Hy(e, n, t);
  }
  return t;
}
function Vv(e, t, n, r, o, i, s, l, a) {
  return e = Kf(n, r, !0, e, o, i, s, l, a), e.context = Hv(null), n = e.current, r = Ut(), o = Ur(n), i = vr(r, o), i.callback = t ?? null, _r(n, i, o), e.current.lanes = o, Vs(e, o, r), Zt(e, r), e;
}
function qa(e, t, n, r) {
  var o = t.current, i = Ut(), s = Ur(o);
  return n = Hv(n), t.context === null ? t.context = n : t.pendingContext = n, t = vr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _r(o, t, s), e !== null && (Dn(e, o, s, i), _l(e, o, s)), s;
}
function ka(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yf(e, t) {
  Vm(e, t), (e = e.alternate) && Vm(e, t);
}
function pb() {
  return null;
}
var Kv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Gf(e) {
  this._internalRoot = e;
}
Za.prototype.render = Gf.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  qa(e, t, null, null);
};
Za.prototype.unmount = Gf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Eo(function() {
      qa(null, e, null, null);
    }), t[Sr] = null;
  }
};
function Za(e) {
  this._internalRoot = e;
}
Za.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Cy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ar.length && t !== 0 && t < Ar[n].priority; n++) ;
    Ar.splice(n, 0, e), n === 0 && Ey(e);
  }
};
function Xf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ja(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Km() {
}
function mb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = ka(s);
        i.call(c);
      };
    }
    var s = Vv(t, r, e, 0, null, !1, !1, "", Km);
    return e._reactRootContainer = s, e[Sr] = s.current, Es(e.nodeType === 8 ? e.parentNode : e), Eo(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var c = ka(a);
      l.call(c);
    };
  }
  var a = Kf(e, 0, !1, null, null, !1, !1, "", Km);
  return e._reactRootContainer = a, e[Sr] = a.current, Es(e.nodeType === 8 ? e.parentNode : e), Eo(function() {
    qa(t, a, n, r);
  }), a;
}
function ec(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = ka(s);
        l.call(a);
      };
    }
    qa(t, s, e, o);
  } else s = mb(n, t, e, o, r);
  return ka(s);
}
by = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qi(t.pendingLanes);
        n !== 0 && (mf(t, n | 1), Zt(t, pt()), !($e & 6) && (xi = pt() + 500, Jr()));
      }
      break;
    case 13:
      Eo(function() {
        var r = br(e, 1);
        if (r !== null) {
          var o = Ut();
          Dn(r, e, 1, o);
        }
      }), Yf(e, 1);
  }
};
hf = function(e) {
  if (e.tag === 13) {
    var t = br(e, 134217728);
    if (t !== null) {
      var n = Ut();
      Dn(t, e, 134217728, n);
    }
    Yf(e, 134217728);
  }
};
wy = function(e) {
  if (e.tag === 13) {
    var t = Ur(e), n = br(e, t);
    if (n !== null) {
      var r = Ut();
      Dn(n, e, t, r);
    }
    Yf(e, t);
  }
};
Cy = function() {
  return De;
};
ky = function(e, t) {
  var n = De;
  try {
    return De = e, t();
  } finally {
    De = n;
  }
};
Ju = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ku(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ha(r);
            if (!o) throw Error(H(90));
            ty(r), Ku(r, o);
          }
        }
      }
      break;
    case "textarea":
      ry(e, n);
      break;
    case "select":
      t = n.value, t != null && oi(e, !!n.multiple, t, !1);
  }
};
uy = Wf;
dy = Eo;
var hb = { usingClientEntryPoint: !1, Events: [Ys, Xo, Ha, ay, cy, Wf] }, Di = { findFiberByHostInstance: po, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gb = { bundleType: Di.bundleType, version: Di.version, rendererPackageName: Di.rendererPackageName, rendererConfig: Di.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Tr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = my(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Di.findFiberByHostInstance || pb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bl.isDisabled && bl.supportsFiber) try {
    Da = bl.inject(gb), er = bl;
  } catch {
  }
}
hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hb;
hn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xf(t)) throw Error(H(200));
  return fb(e, t, null, n);
};
hn.createRoot = function(e, t) {
  if (!Xf(e)) throw Error(H(299));
  var n = !1, r = "", o = Kv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Kf(e, 1, !1, null, null, n, !1, r, o), e[Sr] = t.current, Es(e.nodeType === 8 ? e.parentNode : e), new Gf(t);
};
hn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(H(188)) : (e = Object.keys(e).join(","), Error(H(268, e)));
  return e = my(t), e = e === null ? null : e.stateNode, e;
};
hn.flushSync = function(e) {
  return Eo(e);
};
hn.hydrate = function(e, t, n) {
  if (!Ja(t)) throw Error(H(200));
  return ec(null, e, t, !0, n);
};
hn.hydrateRoot = function(e, t, n) {
  if (!Xf(e)) throw Error(H(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Kv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Vv(t, null, e, 1, n ?? null, o, !1, i, s), e[Sr] = t.current, Es(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Za(t);
};
hn.render = function(e, t, n) {
  if (!Ja(t)) throw Error(H(200));
  return ec(null, e, t, !1, n);
};
hn.unmountComponentAtNode = function(e) {
  if (!Ja(e)) throw Error(H(40));
  return e._reactRootContainer ? (Eo(function() {
    ec(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Sr] = null;
    });
  }), !0) : !1;
};
hn.unstable_batchedUpdates = Wf;
hn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ja(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return ec(e, t, n, !1, r);
};
hn.version = "18.3.1-next-f1338f8080-20240426";
function Yv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv);
    } catch (e) {
      console.error(e);
    }
}
Yv(), Yg.exports = hn;
var Gv = Yg.exports, Xv, Ym = Gv;
Xv = Ym.createRoot, Ym.hydrateRoot;
const js = {
  black: "#000",
  white: "#fff"
}, zo = {
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
}, Do = {
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
}, _i = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, yb = {
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
const nr = "$$material";
function Od() {
  return Od = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Od.apply(null, arguments);
}
function vb(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function xb(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Sb = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xb(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = vb(o);
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
}(), jt = "-ms-", Ea = "-moz-", Ae = "-webkit-", Qv = "comm", Qf = "rule", qf = "decl", bb = "@import", qv = "@keyframes", wb = "@layer", Cb = Math.abs, tc = String.fromCharCode, kb = Object.assign;
function Eb(e, t) {
  return Rt(e, 0) ^ 45 ? (((t << 2 ^ Rt(e, 0)) << 2 ^ Rt(e, 1)) << 2 ^ Rt(e, 2)) << 2 ^ Rt(e, 3) : 0;
}
function Zv(e) {
  return e.trim();
}
function Tb(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function je(e, t, n) {
  return e.replace(t, n);
}
function Ad(e, t) {
  return e.indexOf(t);
}
function Rt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ls(e, t, n) {
  return e.slice(t, n);
}
function Xn(e) {
  return e.length;
}
function Zf(e) {
  return e.length;
}
function wl(e, t) {
  return t.push(e), e;
}
function Pb(e, t) {
  return e.map(t).join("");
}
var nc = 1, Si = 1, Jv = 0, tn = 0, yt = 0, Mi = "";
function rc(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: nc, column: Si, length: s, return: "" };
}
function Wi(e, t) {
  return kb(rc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Rb() {
  return yt;
}
function Ib() {
  return yt = tn > 0 ? Rt(Mi, --tn) : 0, Si--, yt === 10 && (Si = 1, nc--), yt;
}
function fn() {
  return yt = tn < Jv ? Rt(Mi, tn++) : 0, Si++, yt === 10 && (Si = 1, nc++), yt;
}
function rr() {
  return Rt(Mi, tn);
}
function Gl() {
  return tn;
}
function Xs(e, t) {
  return Ls(Mi, e, t);
}
function Ns(e) {
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
function e0(e) {
  return nc = Si = 1, Jv = Xn(Mi = e), tn = 0, [];
}
function t0(e) {
  return Mi = "", e;
}
function Xl(e) {
  return Zv(Xs(tn - 1, jd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Mb(e) {
  for (; (yt = rr()) && yt < 33; )
    fn();
  return Ns(e) > 2 || Ns(yt) > 3 ? "" : " ";
}
function $b(e, t) {
  for (; --t && fn() && !(yt < 48 || yt > 102 || yt > 57 && yt < 65 || yt > 70 && yt < 97); )
    ;
  return Xs(e, Gl() + (t < 6 && rr() == 32 && fn() == 32));
}
function jd(e) {
  for (; fn(); )
    switch (yt) {
      case e:
        return tn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && jd(yt);
        break;
      case 40:
        e === 41 && jd(e);
        break;
      case 92:
        fn();
        break;
    }
  return tn;
}
function Ob(e, t) {
  for (; fn() && e + yt !== 57; )
    if (e + yt === 84 && rr() === 47)
      break;
  return "/*" + Xs(t, tn - 1) + "*" + tc(e === 47 ? e : fn());
}
function Ab(e) {
  for (; !Ns(rr()); )
    fn();
  return Xs(e, tn);
}
function jb(e) {
  return t0(Ql("", null, null, null, [""], e = e0(e), 0, [0], e));
}
function Ql(e, t, n, r, o, i, s, l, a) {
  for (var c = 0, u = 0, m = s, v = 0, d = 0, S = 0, b = 1, C = 1, y = 1, h = 0, x = "", w = o, E = i, k = r, T = x; C; )
    switch (S = h, h = fn()) {
      case 40:
        if (S != 108 && Rt(T, m - 1) == 58) {
          Ad(T += je(Xl(h), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Xl(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Mb(S);
        break;
      case 92:
        T += $b(Gl() - 1, 7);
        continue;
      case 47:
        switch (rr()) {
          case 42:
          case 47:
            wl(Lb(Ob(fn(), Gl()), t, n), a);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * b:
        l[c++] = Xn(T) * y;
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0;
          case 59 + u:
            y == -1 && (T = je(T, /\f/g, "")), d > 0 && Xn(T) - m && wl(d > 32 ? Xm(T + ";", r, n, m - 1) : Xm(je(T, " ", "") + ";", r, n, m - 2), a);
            break;
          case 59:
            T += ";";
          default:
            if (wl(k = Gm(T, t, n, c, u, o, l, x, w = [], E = [], m), i), h === 123)
              if (u === 0)
                Ql(T, t, k, k, w, i, m, l, E);
              else
                switch (v === 99 && Rt(T, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ql(e, k, k, r && wl(Gm(e, k, k, 0, 0, o, l, x, o, w = [], m), E), o, E, m, l, r ? w : E);
                    break;
                  default:
                    Ql(T, k, k, k, [""], E, 0, l, E);
                }
        }
        c = u = d = 0, b = y = 1, x = T = "", m = s;
        break;
      case 58:
        m = 1 + Xn(T), d = S;
      default:
        if (b < 1) {
          if (h == 123)
            --b;
          else if (h == 125 && b++ == 0 && Ib() == 125)
            continue;
        }
        switch (T += tc(h), h * b) {
          case 38:
            y = u > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[c++] = (Xn(T) - 1) * y, y = 1;
            break;
          case 64:
            rr() === 45 && (T += Xl(fn())), v = rr(), u = m = Xn(x = T += Ab(Gl())), h++;
            break;
          case 45:
            S === 45 && Xn(T) == 2 && (b = 0);
        }
    }
  return i;
}
function Gm(e, t, n, r, o, i, s, l, a, c, u) {
  for (var m = o - 1, v = o === 0 ? i : [""], d = Zf(v), S = 0, b = 0, C = 0; S < r; ++S)
    for (var y = 0, h = Ls(e, m + 1, m = Cb(b = s[S])), x = e; y < d; ++y)
      (x = Zv(b > 0 ? v[y] + " " + h : je(h, /&\f/g, v[y]))) && (a[C++] = x);
  return rc(e, t, n, o === 0 ? Qf : l, a, c, u);
}
function Lb(e, t, n) {
  return rc(e, t, n, Qv, tc(Rb()), Ls(e, 2, -2), 0);
}
function Xm(e, t, n, r) {
  return rc(e, t, n, qf, Ls(e, 0, r), Ls(e, r + 1, -1), r);
}
function ui(e, t) {
  for (var n = "", r = Zf(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Nb(e, t, n, r) {
  switch (e.type) {
    case wb:
      if (e.children.length) break;
    case bb:
    case qf:
      return e.return = e.return || e.value;
    case Qv:
      return "";
    case qv:
      return e.return = e.value + "{" + ui(e.children, r) + "}";
    case Qf:
      e.value = e.props.join(",");
  }
  return Xn(n = ui(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function zb(e) {
  var t = Zf(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function Bb(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function n0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Fb = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = rr(), o === 38 && i === 12 && (n[r] = 1), !Ns(i); )
    fn();
  return Xs(t, tn);
}, Db = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ns(o)) {
      case 0:
        o === 38 && rr() === 12 && (n[r] = 1), t[r] += Fb(tn - 1, n, r);
        break;
      case 2:
        t[r] += Xl(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = rr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += tc(o);
    }
  while (o = fn());
  return t;
}, _b = function(t, n) {
  return t0(Db(e0(t), n));
}, Qm = /* @__PURE__ */ new WeakMap(), Wb = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Qm.get(r)) && !o) {
      Qm.set(t, !0);
      for (var i = [], s = _b(n, i), l = r.props, a = 0, c = 0; a < s.length; a++)
        for (var u = 0; u < l.length; u++, c++)
          t.props[c] = i[a] ? s[a].replace(/&\f/g, l[u]) : l[u] + " " + s[a];
    }
  }
}, Ub = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function r0(e, t) {
  switch (Eb(e, t)) {
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
      return Ae + e + Ea + e + jt + e + e;
    case 6828:
    case 4268:
      return Ae + e + jt + e + e;
    case 6165:
      return Ae + e + jt + "flex-" + e + e;
    case 5187:
      return Ae + e + je(e, /(\w+).+(:[^]+)/, Ae + "box-$1$2" + jt + "flex-$1$2") + e;
    case 5443:
      return Ae + e + jt + "flex-item-" + je(e, /flex-|-self/, "") + e;
    case 4675:
      return Ae + e + jt + "flex-line-pack" + je(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ae + e + jt + je(e, "shrink", "negative") + e;
    case 5292:
      return Ae + e + jt + je(e, "basis", "preferred-size") + e;
    case 6060:
      return Ae + "box-" + je(e, "-grow", "") + Ae + e + jt + je(e, "grow", "positive") + e;
    case 4554:
      return Ae + je(e, /([^-])(transform)/g, "$1" + Ae + "$2") + e;
    case 6187:
      return je(je(je(e, /(zoom-|grab)/, Ae + "$1"), /(image-set)/, Ae + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return je(e, /(image-set\([^]*)/, Ae + "$1$`$1");
    case 4968:
      return je(je(e, /(.+:)(flex-)?(.*)/, Ae + "box-pack:$3" + jt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ae + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return je(e, /(.+)-inline(.+)/, Ae + "$1$2") + e;
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
      if (Xn(e) - 1 - t > 6) switch (Rt(e, t + 1)) {
        case 109:
          if (Rt(e, t + 4) !== 45) break;
        case 102:
          return je(e, /(.+:)(.+)-([^]+)/, "$1" + Ae + "$2-$3$1" + Ea + (Rt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Ad(e, "stretch") ? r0(je(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Rt(e, t + 1) !== 115) break;
    case 6444:
      switch (Rt(e, Xn(e) - 3 - (~Ad(e, "!important") && 10))) {
        case 107:
          return je(e, ":", ":" + Ae) + e;
        case 101:
          return je(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ae + (Rt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ae + "$2$3$1" + jt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Rt(e, t + 11)) {
        case 114:
          return Ae + e + jt + je(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ae + e + jt + je(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ae + e + jt + je(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ae + e + jt + e + e;
  }
  return e;
}
var Hb = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case qf:
      t.return = r0(t.value, t.length);
      break;
    case qv:
      return ui([Wi(t, {
        value: je(t.value, "@", "@" + Ae)
      })], o);
    case Qf:
      if (t.length) return Pb(t.props, function(i) {
        switch (Tb(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ui([Wi(t, {
              props: [je(i, /:(read-\w+)/, ":" + Ea + "$1")]
            })], o);
          case "::placeholder":
            return ui([Wi(t, {
              props: [je(i, /:(plac\w+)/, ":" + Ae + "input-$1")]
            }), Wi(t, {
              props: [je(i, /:(plac\w+)/, ":" + Ea + "$1")]
            }), Wi(t, {
              props: [je(i, /:(plac\w+)/, jt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Vb = [Hb], Kb = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var C = b.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Vb, i = {}, s, l = [];
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
  var a, c = [Wb, Ub];
  {
    var u, m = [Nb, Bb(function(b) {
      u.insert(b);
    })], v = zb(c.concat(o, m)), d = function(C) {
      return ui(jb(C), v);
    };
    a = function(C, y, h, x) {
      u = h, d(C ? C + "{" + y.styles + "}" : y.styles), x && (S.inserted[y.name] = !0);
    };
  }
  var S = {
    key: n,
    sheet: new Sb({
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
  return S.sheet.hydrate(l), S;
}, o0 = { exports: {} }, _e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt = typeof Symbol == "function" && Symbol.for, Jf = Tt ? Symbol.for("react.element") : 60103, ep = Tt ? Symbol.for("react.portal") : 60106, oc = Tt ? Symbol.for("react.fragment") : 60107, ic = Tt ? Symbol.for("react.strict_mode") : 60108, sc = Tt ? Symbol.for("react.profiler") : 60114, lc = Tt ? Symbol.for("react.provider") : 60109, ac = Tt ? Symbol.for("react.context") : 60110, tp = Tt ? Symbol.for("react.async_mode") : 60111, cc = Tt ? Symbol.for("react.concurrent_mode") : 60111, uc = Tt ? Symbol.for("react.forward_ref") : 60112, dc = Tt ? Symbol.for("react.suspense") : 60113, Yb = Tt ? Symbol.for("react.suspense_list") : 60120, fc = Tt ? Symbol.for("react.memo") : 60115, pc = Tt ? Symbol.for("react.lazy") : 60116, Gb = Tt ? Symbol.for("react.block") : 60121, Xb = Tt ? Symbol.for("react.fundamental") : 60117, Qb = Tt ? Symbol.for("react.responder") : 60118, qb = Tt ? Symbol.for("react.scope") : 60119;
function yn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Jf:
        switch (e = e.type, e) {
          case tp:
          case cc:
          case oc:
          case sc:
          case ic:
          case dc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ac:
              case uc:
              case pc:
              case fc:
              case lc:
                return e;
              default:
                return t;
            }
        }
      case ep:
        return t;
    }
  }
}
function i0(e) {
  return yn(e) === cc;
}
_e.AsyncMode = tp;
_e.ConcurrentMode = cc;
_e.ContextConsumer = ac;
_e.ContextProvider = lc;
_e.Element = Jf;
_e.ForwardRef = uc;
_e.Fragment = oc;
_e.Lazy = pc;
_e.Memo = fc;
_e.Portal = ep;
_e.Profiler = sc;
_e.StrictMode = ic;
_e.Suspense = dc;
_e.isAsyncMode = function(e) {
  return i0(e) || yn(e) === tp;
};
_e.isConcurrentMode = i0;
_e.isContextConsumer = function(e) {
  return yn(e) === ac;
};
_e.isContextProvider = function(e) {
  return yn(e) === lc;
};
_e.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jf;
};
_e.isForwardRef = function(e) {
  return yn(e) === uc;
};
_e.isFragment = function(e) {
  return yn(e) === oc;
};
_e.isLazy = function(e) {
  return yn(e) === pc;
};
_e.isMemo = function(e) {
  return yn(e) === fc;
};
_e.isPortal = function(e) {
  return yn(e) === ep;
};
_e.isProfiler = function(e) {
  return yn(e) === sc;
};
_e.isStrictMode = function(e) {
  return yn(e) === ic;
};
_e.isSuspense = function(e) {
  return yn(e) === dc;
};
_e.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === oc || e === cc || e === sc || e === ic || e === dc || e === Yb || typeof e == "object" && e !== null && (e.$$typeof === pc || e.$$typeof === fc || e.$$typeof === lc || e.$$typeof === ac || e.$$typeof === uc || e.$$typeof === Xb || e.$$typeof === Qb || e.$$typeof === qb || e.$$typeof === Gb);
};
_e.typeOf = yn;
o0.exports = _e;
var Zb = o0.exports, s0 = Zb, Jb = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ew = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, l0 = {};
l0[s0.ForwardRef] = Jb;
l0[s0.Memo] = ew;
var tw = !0;
function a0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var np = function(t, n, r) {
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
  tw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, rp = function(t, n, r) {
  np(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function nw(e) {
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
var rw = {
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
}, ow = /[A-Z]|^ms/g, iw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, c0 = function(t) {
  return t.charCodeAt(1) === 45;
}, qm = function(t) {
  return t != null && typeof t != "boolean";
}, Pu = /* @__PURE__ */ n0(function(e) {
  return c0(e) ? e : e.replace(ow, "-$&").toLowerCase();
}), Zm = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(iw, function(r, o, i) {
          return Qn = {
            name: o,
            styles: i,
            next: Qn
          }, o;
        });
  }
  return rw[t] !== 1 && !c0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
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
        return Qn = {
          name: o.name,
          styles: o.styles,
          next: Qn
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Qn = {
              name: s.name,
              styles: s.styles,
              next: Qn
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return sw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = Qn, c = n(e);
        return Qn = a, zs(e, t, c);
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
function sw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += zs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : qm(l) && (r += Pu(i) + ":" + Zm(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          qm(s[a]) && (r += Pu(i) + ":" + Zm(i, s[a]) + ";");
      else {
        var c = zs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Pu(i) + ":" + c + ";";
            break;
          }
          default:
            r += i + "{" + c + "}";
        }
      }
    }
  return r;
}
var Jm = /label:\s*([^\s;{]+)\s*(;|$)/g, Qn;
function Qs(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Qn = void 0;
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
  Jm.lastIndex = 0;
  for (var c = "", u; (u = Jm.exec(o)) !== null; )
    c += "-" + u[1];
  var m = nw(o) + c;
  return {
    name: m,
    styles: o,
    next: Qn
  };
}
var lw = function(t) {
  return t();
}, u0 = ea.useInsertionEffect ? ea.useInsertionEffect : !1, d0 = u0 || lw, eh = u0 || p.useLayoutEffect, f0 = /* @__PURE__ */ p.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Kb({
    key: "css"
  }) : null
);
f0.Provider;
var op = function(t) {
  return /* @__PURE__ */ p.forwardRef(function(n, r) {
    var o = p.useContext(f0);
    return t(n, o, r);
  });
}, qs = /* @__PURE__ */ p.createContext({}), ip = {}.hasOwnProperty, Ld = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", aw = function(t, n) {
  var r = {};
  for (var o in n)
    ip.call(n, o) && (r[o] = n[o]);
  return r[Ld] = t, r;
}, cw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return np(n, r, o), d0(function() {
    return rp(n, r, o);
  }), null;
}, uw = /* @__PURE__ */ op(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Ld], i = [r], s = "";
  typeof e.className == "string" ? s = a0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = Qs(i, void 0, p.useContext(qs));
  s += t.key + "-" + l.name;
  var a = {};
  for (var c in e)
    ip.call(e, c) && c !== "css" && c !== Ld && (a[c] = e[c]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(cw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ p.createElement(o, a));
}), dw = uw, th = function(t, n) {
  var r = arguments;
  if (n == null || !ip.call(n, "css"))
    return p.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = dw, i[1] = aw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return p.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(th || (th = {}));
var fw = /* @__PURE__ */ op(function(e, t) {
  var n = e.styles, r = Qs([n], void 0, p.useContext(qs)), o = p.useRef();
  return eh(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), eh(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && rp(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Bs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Qs(t);
}
function Zs() {
  var e = Bs.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var pw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, mw = /* @__PURE__ */ n0(
  function(e) {
    return pw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hw = mw, gw = function(t) {
  return t !== "theme";
}, nh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? hw : gw;
}, rh = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, yw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return np(n, r, o), d0(function() {
    return rp(n, r, o);
  }), null;
}, vw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = rh(t, n, r), a = l || nh(o), c = !a("as");
  return function() {
    var u = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      m.push.apply(m, u);
    else {
      var v = u[0];
      m.push(v[0]);
      for (var d = u.length, S = 1; S < d; S++)
        m.push(u[S], v[S]);
    }
    var b = op(function(C, y, h) {
      var x = c && C.as || o, w = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var T in C)
          k[T] = C[T];
        k.theme = p.useContext(qs);
      }
      typeof C.className == "string" ? w = a0(y.registered, E, C.className) : C.className != null && (w = C.className + " ");
      var P = Qs(m.concat(E), y.registered, k);
      w += y.key + "-" + P.name, s !== void 0 && (w += " " + s);
      var R = c && l === void 0 ? nh(x) : a, j = {};
      for (var $ in C)
        c && $ === "as" || R($) && (j[$] = C[$]);
      return j.className = w, h && (j.ref = h), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(yw, {
        cache: y,
        serialized: P,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ p.createElement(x, j));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = m, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(C, y) {
      var h = e(C, Od({}, n, y, {
        shouldForwardProp: rh(b, y, !0)
      }));
      return h.apply(void 0, m);
    }, b;
  };
}, xw = [
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
], Nd = vw.bind(null);
xw.forEach(function(e) {
  Nd[e] = Nd(e);
});
function Sw(e) {
  return e == null || Object.keys(e).length === 0;
}
function p0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Sw(o) ? n : o) : t;
  return /* @__PURE__ */ f.jsx(fw, {
    styles: r
  });
}
function m0(e, t) {
  return Nd(e, t);
}
function bw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const oh = [];
function Vr(e) {
  return oh[0] = e, Qs(oh);
}
var h0 = { exports: {} }, Ge = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp = Symbol.for("react.transitional.element"), lp = Symbol.for("react.portal"), mc = Symbol.for("react.fragment"), hc = Symbol.for("react.strict_mode"), gc = Symbol.for("react.profiler"), yc = Symbol.for("react.consumer"), vc = Symbol.for("react.context"), xc = Symbol.for("react.forward_ref"), Sc = Symbol.for("react.suspense"), bc = Symbol.for("react.suspense_list"), wc = Symbol.for("react.memo"), Cc = Symbol.for("react.lazy"), ww = Symbol.for("react.view_transition"), Cw = Symbol.for("react.client.reference");
function $n(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case sp:
        switch (e = e.type, e) {
          case mc:
          case gc:
          case hc:
          case Sc:
          case bc:
          case ww:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case vc:
              case xc:
              case Cc:
              case wc:
                return e;
              case yc:
                return e;
              default:
                return t;
            }
        }
      case lp:
        return t;
    }
  }
}
Ge.ContextConsumer = yc;
Ge.ContextProvider = vc;
Ge.Element = sp;
Ge.ForwardRef = xc;
Ge.Fragment = mc;
Ge.Lazy = Cc;
Ge.Memo = wc;
Ge.Portal = lp;
Ge.Profiler = gc;
Ge.StrictMode = hc;
Ge.Suspense = Sc;
Ge.SuspenseList = bc;
Ge.isContextConsumer = function(e) {
  return $n(e) === yc;
};
Ge.isContextProvider = function(e) {
  return $n(e) === vc;
};
Ge.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sp;
};
Ge.isForwardRef = function(e) {
  return $n(e) === xc;
};
Ge.isFragment = function(e) {
  return $n(e) === mc;
};
Ge.isLazy = function(e) {
  return $n(e) === Cc;
};
Ge.isMemo = function(e) {
  return $n(e) === wc;
};
Ge.isPortal = function(e) {
  return $n(e) === lp;
};
Ge.isProfiler = function(e) {
  return $n(e) === gc;
};
Ge.isStrictMode = function(e) {
  return $n(e) === hc;
};
Ge.isSuspense = function(e) {
  return $n(e) === Sc;
};
Ge.isSuspenseList = function(e) {
  return $n(e) === bc;
};
Ge.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === mc || e === gc || e === hc || e === Sc || e === bc || typeof e == "object" && e !== null && (e.$$typeof === Cc || e.$$typeof === wc || e.$$typeof === vc || e.$$typeof === yc || e.$$typeof === xc || e.$$typeof === Cw || e.getModuleId !== void 0);
};
Ge.typeOf = $n;
h0.exports = Ge;
var g0 = h0.exports;
function hr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function y0(e) {
  if (/* @__PURE__ */ p.isValidElement(e) || g0.isValidElementType(e) || !hr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = y0(e[n]);
  }), t;
}
function Mt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return hr(e) && hr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ p.isValidElement(t[o]) || g0.isValidElementType(t[o]) ? r[o] = t[o] : hr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && hr(e[o]) ? r[o] = Mt(e[o], t[o], n) : n.clone ? r[o] = hr(t[o]) ? y0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const kw = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function v0(e) {
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
  } = e, i = kw(t), s = Object.keys(i);
  function l(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function a(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function c(d, S) {
    const b = s.indexOf(S);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : S) - r / 100}${n})`;
  }
  function u(d) {
    return s.indexOf(d) + 1 < s.length ? c(d, s[s.indexOf(d) + 1]) : l(d);
  }
  function m(d) {
    const S = s.indexOf(d);
    return S === 0 ? l(s[1]) : S === s.length - 1 ? a(s[S]) : c(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
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
    not: m,
    unit: n,
    internal_mediaKeys: v,
    ...o
  };
}
const ih = /min-width:\s*([0-9.]+)/;
function sh(e, t) {
  if (!e.containerQueries || !Ew(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => +(o.match(ih)?.[1] || 0) - +(i.match(ih)?.[1] || 0));
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function Ew(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function x0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Tw(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Pw(e) {
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
const Rw = {
  borderRadius: 4
};
function S0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function di(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return Aw(t) ? t : jw(e) ? bi(t) : n && r ? $w(e, t) : n !== r ? bi(t) : Lw(e, t);
}
function Iw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = bi(e[t]);
  return r;
}
function Mw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = bi(e[n]));
  return t;
}
function $w(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = bi(t[r]);
  return e;
}
function Ow(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Aw(e) {
  return typeof e != "object" || e === null;
}
function jw(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function bi(e) {
  return Ow(e) ? Array.isArray(e) ? Iw(e) : Mw(e) : e;
}
function Lw(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = di(e[n], t[n]) : e[n] = bi(t[n]));
  return e;
}
const Nw = {}, kc = {
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
}, Ta = v0({
  values: kc
}), zw = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : kc[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Gr(e, t, n) {
  const r = {};
  return Ec(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : di(r, l);
  });
}
function Ec(e, t, n, r) {
  if (t ??= Nw, Array.isArray(n)) {
    const o = t.breakpoints ?? Ta;
    for (let i = 0; i < n.length; i += 1)
      Ru(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? Ta, i = o.values ?? kc;
    for (const s in n)
      if (x0(o.keys, s)) {
        const l = Tw(t.containerQueries ? t : zw, s);
        l && Ru(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        Ru(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function Ru(e, t, n, r, o) {
  e[t] ??= {}, o(t, n, r);
}
function b0(e = Ta) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function zd(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    S0(t[o]) && delete t[o];
  }
  return t;
}
function Bw(e, ...t) {
  const r = [b0(e), ...t].reduce((o, i) => Mt(o, i), {});
  return zd(e, r);
}
function Fw(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function Iu(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || Fw(t, n), i = Object.keys(o);
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
function Dw(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (x0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function Z(e) {
  if (typeof e != "string")
    throw new Error(Cr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function w0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Tc(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Tc(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = lh(e.vars, o, r);
    if (i != null)
      return i;
  }
  return lh(e, o, r);
}
function lh(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : Z(s)}`;
    return r?.[l];
  }
  return o;
}
function mt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, c = Tc(a, r) || {};
    return Gr(s, l, (m) => {
      const v = w0(c, o, m, t);
      return n === !1 ? v : {
        [n]: v
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const _w = {
  internal_cache: {}
}, Pa = {
  m: "margin",
  p: "padding"
}, ah = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ch = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Fs = {};
for (const e in Pa)
  Fs[e] = [Pa[e]];
for (const e in Pa)
  for (const t in ah) {
    const n = Pa[e], r = ah[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Fs[e + t] = o;
  }
for (const e in ch)
  Fs[e] = Fs[ch[e]];
const ap = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), cp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...ap, ...cp];
function Js(e, t, n, r) {
  const o = Tc(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Pc(e) {
  return Js(e, "spacing", 8);
}
function To(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const uh = [""];
function C0(e, t) {
  const n = e.theme ?? _w, r = n?.internal_cache?.unarySpacing ?? Pc(n), o = {};
  for (const i in e) {
    if (!t.has(i))
      continue;
    const s = Fs[i] ?? (uh[0] = i, uh), l = e[i];
    Ec(o, e.theme, l, (a, c) => {
      const u = a ? o[a] : o;
      for (let m = 0; m < s.length; m += 1)
        u[s[m]] = To(r, c);
    });
  }
  return o;
}
function up(e) {
  return C0(e, ap);
}
up.propTypes = {};
up.filterProps = ap;
const ht = up;
function dp(e) {
  return C0(e, cp);
}
dp.propTypes = {};
dp.filterProps = cp;
const gt = dp;
function k0(e = 8, t = Pc({
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
function Rc(...e) {
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
function wn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function On(e, t) {
  return mt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ww = On("border", wn), Uw = On("borderTop", wn), Hw = On("borderRight", wn), Vw = On("borderBottom", wn), Kw = On("borderLeft", wn), Yw = On("borderColor"), Gw = On("borderTopColor"), Xw = On("borderRightColor"), Qw = On("borderBottomColor"), qw = On("borderLeftColor"), Zw = On("outline", wn), Jw = On("outlineColor"), Ic = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Js(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: To(t, r)
    });
    return Gr(e, e.borderRadius, n);
  }
  return null;
};
Ic.propTypes = {};
Ic.filterProps = ["borderRadius"];
Rc(Ww, Uw, Hw, Vw, Kw, Yw, Gw, Xw, Qw, qw, Ic, Zw, Jw);
const Mc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Js(e.theme, "spacing", 8), n = (r) => ({
      gap: To(t, r)
    });
    return Gr(e, e.gap, n);
  }
  return null;
};
Mc.propTypes = {};
Mc.filterProps = ["gap"];
const $c = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Js(e.theme, "spacing", 8), n = (r) => ({
      columnGap: To(t, r)
    });
    return Gr(e, e.columnGap, n);
  }
  return null;
};
$c.propTypes = {};
$c.filterProps = ["columnGap"];
const Oc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Js(e.theme, "spacing", 8), n = (r) => ({
      rowGap: To(t, r)
    });
    return Gr(e, e.rowGap, n);
  }
  return null;
};
Oc.propTypes = {};
Oc.filterProps = ["rowGap"];
const eC = mt({
  prop: "gridColumn"
}), tC = mt({
  prop: "gridRow"
}), nC = mt({
  prop: "gridAutoFlow"
}), rC = mt({
  prop: "gridAutoColumns"
}), oC = mt({
  prop: "gridAutoRows"
}), iC = mt({
  prop: "gridTemplateColumns"
}), sC = mt({
  prop: "gridTemplateRows"
}), lC = mt({
  prop: "gridTemplateAreas"
}), aC = mt({
  prop: "gridArea"
});
Rc(Mc, $c, Oc, eC, tC, nC, rC, oC, iC, sC, lC, aC);
function fi(e, t) {
  return t === "grey" ? t : e;
}
const cC = mt({
  prop: "color",
  themeKey: "palette",
  transform: fi
}), uC = mt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: fi
}), dC = mt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: fi
});
Rc(cC, uC, dC);
const fC = kc;
function cn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const pC = mt({
  prop: "width",
  transform: cn
}), fp = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      const r = e.theme?.breakpoints?.values?.[n] || fC[n];
      return r ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: cn(n)
      };
    };
    return Gr(e, e.maxWidth, t);
  }
  return null;
};
fp.filterProps = ["maxWidth"];
const mC = mt({
  prop: "minWidth",
  transform: cn
}), hC = mt({
  prop: "height",
  transform: cn
}), gC = mt({
  prop: "maxHeight",
  transform: cn
}), yC = mt({
  prop: "minHeight",
  transform: cn
});
mt({
  prop: "size",
  cssProperty: "width",
  transform: cn
});
mt({
  prop: "size",
  cssProperty: "height",
  transform: cn
});
const vC = mt({
  prop: "boxSizing"
});
Rc(pC, fp, mC, hC, gC, yC, vC);
const Ac = {
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
    style: Ic
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
    style: gt
  },
  pt: {
    style: gt
  },
  pr: {
    style: gt
  },
  pb: {
    style: gt
  },
  pl: {
    style: gt
  },
  px: {
    style: gt
  },
  py: {
    style: gt
  },
  padding: {
    style: gt
  },
  paddingTop: {
    style: gt
  },
  paddingRight: {
    style: gt
  },
  paddingBottom: {
    style: gt
  },
  paddingLeft: {
    style: gt
  },
  paddingX: {
    style: gt
  },
  paddingY: {
    style: gt
  },
  paddingInline: {
    style: gt
  },
  paddingInlineStart: {
    style: gt
  },
  paddingInlineEnd: {
    style: gt
  },
  paddingBlock: {
    style: gt
  },
  paddingBlockStart: {
    style: gt
  },
  paddingBlockEnd: {
    style: gt
  },
  m: {
    style: ht
  },
  mt: {
    style: ht
  },
  mr: {
    style: ht
  },
  mb: {
    style: ht
  },
  ml: {
    style: ht
  },
  mx: {
    style: ht
  },
  my: {
    style: ht
  },
  margin: {
    style: ht
  },
  marginTop: {
    style: ht
  },
  marginRight: {
    style: ht
  },
  marginBottom: {
    style: ht
  },
  marginLeft: {
    style: ht
  },
  marginX: {
    style: ht
  },
  marginY: {
    style: ht
  },
  marginInline: {
    style: ht
  },
  marginInlineStart: {
    style: ht
  },
  marginInlineEnd: {
    style: ht
  },
  marginBlock: {
    style: ht
  },
  marginBlockStart: {
    style: ht
  },
  marginBlockEnd: {
    style: ht
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
    style: Mc
  },
  rowGap: {
    style: Oc
  },
  columnGap: {
    style: $c
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
    transform: cn
  },
  maxWidth: {
    style: fp
  },
  minWidth: {
    transform: cn
  },
  height: {
    transform: cn
  },
  maxHeight: {
    transform: cn
  },
  minHeight: {
    transform: cn
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
}, xC = {};
function SC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = xC,
      nested: o
    } = t, i = r.unstable_sxConfig ?? Ac, s = {
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
      const u = r.breakpoints ?? Ta, m = b0(u);
      for (const v in c) {
        const d = bC(c[v], r);
        if (d != null) {
          if (typeof d != "object") {
            dh(m, v, d, r, i);
            continue;
          }
          if (i[v]) {
            dh(m, v, d, r, i);
            continue;
          }
          Dw(u, d) ? Ec(m, t.theme, d, (S, b) => {
            m[S][v] = b;
          }) : (s.sx = d, m[v] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": sh(r, zd(u, m))
      } : sh(r, zd(u, m));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const Po = SC();
function dh(e, t, n, r, o) {
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
  } = i, u = Tc(r, s);
  Ec(e, r, n, (m, v) => {
    const d = w0(u, c, v, t);
    a === !1 ? di(m ? e[m] : e, d) : m ? e[m][a] = d : e[a] = d;
  });
}
function bC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wC(e, t) {
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
function jc(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = v0(n), a = k0(o);
  let c = Mt({
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
      ...Rw,
      ...i
    }
  }, s);
  return c = Pw(c), c.applyStyles = wC, c = t.reduce((u, m) => Mt(u, m), c), c.unstable_sxConfig = {
    ...Ac,
    ...s?.unstable_sxConfig
  }, c.unstable_sx = function(m) {
    return Po({
      sx: m,
      theme: this
    });
  }, c.internal_cache = {}, c;
}
function CC(e) {
  return Object.keys(e).length === 0;
}
function pp(e = null) {
  const t = p.useContext(qs);
  return !t || CC(t) ? e : t;
}
const kC = jc();
function Lc(e = kC) {
  return pp(e);
}
function Mu(e) {
  const t = Vr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function E0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Lc(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Mu(typeof s == "function" ? s(o) : s)) : i = Mu(i)), /* @__PURE__ */ f.jsx(p0, {
    styles: i
  });
}
const fh = (e) => e, EC = () => {
  let e = fh;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = fh;
    }
  };
}, T0 = EC();
function P0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = P0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function J() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = P0(e)) && (r && (r += " "), r += t);
  return r;
}
function TC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = m0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Po);
  return /* @__PURE__ */ p.forwardRef(function(a, c) {
    const u = Lc(n), {
      className: m,
      component: v = "div",
      ...d
    } = a;
    return /* @__PURE__ */ f.jsx(i, {
      as: v,
      ref: c,
      className: J(m, o ? o(r) : r),
      theme: t && u[t] || u,
      ...d
    });
  });
}
const PC = {
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
function ce(e, t, n = "Mui") {
  const r = PC[t];
  return r ? `${n}-${r}` : `${T0.generate(e)}-${t}`;
}
function ae(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ce(e, o, n);
  }), r;
}
function R0(e) {
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
const RC = jc();
function $u(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function go(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function IC(e) {
  return e ? (t, n) => n[e] : null;
}
function MC(e, t, n) {
  e.theme = S0(e.theme) ? n : e.theme[t] || e.theme;
}
function ql(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => ql(e, o, n));
  if (Array.isArray(r?.variants)) {
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
    return I0(e, r.variants, [o], n);
  }
  return r?.isProcessed ? n ? go(Vr(r.style), n) : r.style : n ? go(Vr(r), n) : r;
}
function I0(e, t, n = [], r = void 0) {
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
    }, n.push(r ? go(Vr(s.style(o)), r) : s.style(o))) : n.push(r ? go(Vr(s.style), r) : s.style);
  }
  return n;
}
function M0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = RC,
    rootShouldForwardProp: r = $u,
    slotShouldForwardProp: o = $u
  } = e;
  function i(l) {
    MC(l, t, n);
  }
  return (l, a = {}) => {
    bw(l, (k) => k.filter((T) => T !== Po));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: m,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = IC(AC(u)),
      ...S
    } = a, b = c && c.startsWith("Mui") || u ? "components" : "custom", C = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), y = v || !1;
    let h = $u;
    u === "Root" || u === "root" ? h = r : u ? h = o : OC(l) && (h = void 0);
    const x = m0(l, {
      shouldForwardProp: h,
      label: $C(),
      ...S
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(P) {
          return ql(P, k, P.theme.modularCssLayers ? b : void 0);
        };
      if (hr(k)) {
        const T = R0(k);
        return function(R) {
          return T.variants ? ql(R, T, R.theme.modularCssLayers ? b : void 0) : R.theme.modularCssLayers ? go(T.style, b) : T.style;
        };
      }
      return k;
    }, E = (...k) => {
      const T = [], P = k.map(w), R = [];
      if (T.push(i), c && d && R.push(function(M) {
        const O = M.theme.components?.[c]?.styleOverrides;
        if (!O)
          return null;
        const L = {};
        for (const N in O)
          L[N] = ql(M, O[N], M.theme.modularCssLayers ? "theme" : void 0);
        return d(M, L);
      }), c && !C && R.push(function(M) {
        const O = M.theme?.components?.[c]?.variants;
        return O ? I0(M, O, [], M.theme.modularCssLayers ? "theme" : void 0) : null;
      }), y || R.push(Po), Array.isArray(P[0])) {
        const g = P.shift(), M = new Array(T.length).fill(""), I = new Array(R.length).fill("");
        let O;
        O = [...M, ...g, ...I], O.raw = [...M, ...g.raw, ...I], T.unshift(O);
      }
      const j = [...T, ...P, ...R], $ = x(...j);
      return l.muiName && ($.muiName = l.muiName), $;
    };
    return x.withConfig && (E.withConfig = x.withConfig), E;
  };
}
function $C(e, t) {
  return void 0;
}
function OC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function AC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const jC = M0();
function Ds(e, t, n = !1) {
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
              r[i][c] = Ds(s[c], l[c], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = J(e?.className, t?.className) : i === "style" && n && t.style ? r.style = {
        ...e?.style,
        ...t?.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function LC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Ds(t.components[n].defaultProps, r);
}
function NC(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Lc(r);
  return o && (i = i[o] || i), LC({
    theme: i,
    name: n,
    props: t
  });
}
const st = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
function zC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function mp(e, t = 0, n = 1) {
  return zC(e, t, n);
}
function BC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xr(BC(e));
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
const FC = (e) => {
  const t = Xr(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, Ji = (e, t) => {
  try {
    return FC(e);
  } catch {
    return e;
  }
};
function Nc(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function $0(e) {
  e = Xr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (c, u = (c + n / 30) % 12) => o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Nc({
    type: l,
    values: a
  });
}
function Bd(e) {
  e = Xr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Xr($0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function DC(e, t) {
  const n = Bd(e), r = Bd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ra(e, t) {
  return e = Xr(e), t = mp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Nc(e);
}
function ro(e, t, n) {
  try {
    return Ra(e, t);
  } catch {
    return e;
  }
}
function zc(e, t) {
  if (e = Xr(e), t = mp(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Nc(e);
}
function Be(e, t, n) {
  try {
    return zc(e, t);
  } catch {
    return e;
  }
}
function Bc(e, t) {
  if (e = Xr(e), t = mp(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Nc(e);
}
function Fe(e, t, n) {
  try {
    return Bc(e, t);
  } catch {
    return e;
  }
}
function Fd(e, t = 0.15) {
  return Bd(e) > 0.5 ? zc(e, t) : Bc(e, t);
}
function Cl(e, t, n) {
  try {
    return Fd(e, t);
  } catch {
    return e;
  }
}
const O0 = /* @__PURE__ */ p.createContext(null);
function hp() {
  return p.useContext(O0);
}
const _C = typeof Symbol == "function" && Symbol.for, WC = _C ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function UC(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function HC(e) {
  const {
    children: t,
    theme: n
  } = e, r = hp(), o = p.useMemo(() => {
    const i = r === null ? {
      ...n
    } : UC(r, n);
    return i != null && (i[WC] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ f.jsx(O0.Provider, {
    value: o,
    children: t
  });
}
const A0 = /* @__PURE__ */ p.createContext();
function VC({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ f.jsx(A0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const Fc = () => p.useContext(A0) ?? !1, j0 = /* @__PURE__ */ p.createContext(void 0);
function KC({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ f.jsx(j0.Provider, {
    value: e,
    children: t
  });
}
function YC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Ds(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Ds(o, r, t.components.mergeClassNameAndStyle) : r;
}
function GC({
  props: e,
  name: t
}) {
  const n = p.useContext(j0);
  return YC({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let ph = 0;
function XC(e) {
  const [t, n] = p.useState(e), r = e || t;
  return p.useEffect(() => {
    t == null && (ph += 1, n(`mui-${ph}`));
  }, [t]), r;
}
const QC = {
  ...ea
}, mh = QC.useId;
function kr(e) {
  if (mh !== void 0) {
    const t = mh();
    return e ?? t;
  }
  return XC(e);
}
function qC(e) {
  const t = pp(), n = kr() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, st(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ f.jsx(E0, {
    styles: o
  }) : null;
}
const hh = {};
function gh(e, t, n, r = !1) {
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
function L0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = pp(hh), i = hp() || hh, s = gh(r, o, n), l = gh(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", c = qC(s);
  return /* @__PURE__ */ f.jsx(HC, {
    theme: l,
    children: /* @__PURE__ */ f.jsx(qs.Provider, {
      value: s,
      children: /* @__PURE__ */ f.jsx(VC, {
        value: a,
        children: /* @__PURE__ */ f.jsxs(KC, {
          value: r ? s[r].components : s.components,
          children: [c, t]
        })
      })
    })
  });
}
const yh = {
  theme: void 0
};
function ZC(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (yh.theme = o.theme, i = R0(e(yh)), t = i, n = o.theme), i;
  };
}
const gp = "mode", yp = "color-scheme", JC = "data-color-scheme";
function ek(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = gp,
    colorSchemeStorageKey: i = yp,
    attribute: s = JC,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let c = "", u = s;
  if (s === "class" && (u = ".%s"), s === "data" && (u = "[data-%s]"), u.startsWith(".")) {
    const v = u.substring(1);
    c += `${l}.classList.remove('${v}'.replace('%s', light), '${v}'.replace('%s', dark));
      ${l}.classList.add('${v}'.replace('%s', colorScheme));`;
  }
  const m = u.match(/\[([^[\]]+)\]/);
  if (m) {
    const [v, d] = m[1].split("=");
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
function tk() {
}
const nk = ({
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
      return tk;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function Ou() {
}
function vh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function N0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function rk(e) {
  return N0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function ok(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = gp,
    colorSchemeStorageKey: s = yp,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = nk,
    noSsr: c = !1
  } = e, u = o.join(","), m = o.length > 1, v = p.useMemo(() => a?.({
    key: i,
    storageWindow: l
  }), [a, i, l]), d = p.useMemo(() => a?.({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), S = p.useMemo(() => a?.({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [b, C] = p.useState(() => {
    const P = v?.get(t) || t, R = d?.get(n) || n, j = S?.get(r) || r;
    return {
      mode: P,
      systemMode: vh(P),
      lightColorScheme: R,
      darkColorScheme: j
    };
  }), [y, h] = p.useState(c || !m);
  p.useEffect(() => {
    h(!0);
  }, []);
  const x = rk(b), w = p.useCallback((P) => {
    C((R) => {
      if (P === R.mode)
        return R;
      const j = P ?? t;
      return v?.set(j), {
        ...R,
        mode: j,
        systemMode: vh(j)
      };
    });
  }, [v, t]), E = p.useCallback((P) => {
    P ? typeof P == "string" ? P && !u.includes(P) ? console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`) : C((R) => {
      const j = {
        ...R
      };
      return N0(R, ($) => {
        $ === "light" && (d?.set(P), j.lightColorScheme = P), $ === "dark" && (S?.set(P), j.darkColorScheme = P);
      }), j;
    }) : C((R) => {
      const j = {
        ...R
      }, $ = P.light === null ? n : P.light, g = P.dark === null ? r : P.dark;
      return $ && (u.includes($) ? (j.lightColorScheme = $, d?.set($)) : console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`)), g && (u.includes(g) ? (j.darkColorScheme = g, S?.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), j;
    }) : C((R) => (d?.set(n), S?.set(r), {
      ...R,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [u, d, S, n, r]), k = p.useCallback((P) => {
    b.mode === "system" && C((R) => {
      const j = P?.matches ? "dark" : "light";
      return R.systemMode === j ? R : {
        ...R,
        systemMode: j
      };
    });
  }, [b.mode]), T = p.useRef(k);
  return T.current = k, p.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const P = (...j) => T.current(...j), R = window.matchMedia("(prefers-color-scheme: dark)");
    return R.addListener(P), P(R), () => {
      R.removeListener(P);
    };
  }, [m]), p.useEffect(() => {
    if (m) {
      const P = v?.subscribe(($) => {
        (!$ || ["light", "dark", "system"].includes($)) && w($ || t);
      }) || Ou, R = d?.subscribe(($) => {
        (!$ || u.match($)) && E({
          light: $
        });
      }) || Ou, j = S?.subscribe(($) => {
        (!$ || u.match($)) && E({
          dark: $
        });
      }) || Ou;
      return () => {
        P(), R(), j();
      };
    }
  }, [E, w, u, t, l, m, v, d, S]), {
    ...b,
    mode: y ? b.mode : void 0,
    systemMode: y ? b.systemMode : void 0,
    colorScheme: y ? x : void 0,
    setMode: w,
    setColorScheme: E
  };
}
const ik = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function sk(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = gp,
    colorSchemeStorageKey: o = yp,
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
  }, c = /* @__PURE__ */ p.createContext(void 0), u = () => p.useContext(c) || a, m = {}, v = {};
  function d(y) {
    const {
      children: h,
      theme: x,
      modeStorageKey: w = r,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: k = i,
      storageManager: T,
      storageWindow: P = typeof window > "u" ? void 0 : window,
      documentNode: R = typeof document > "u" ? void 0 : document,
      colorSchemeNode: j = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: $ = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: M = "system",
      forceThemeRerender: I = !1,
      noSsr: O
    } = y, L = p.useRef(!1), N = hp(), A = p.useContext(c), z = !!A && !$, F = p.useMemo(() => x || (typeof n == "function" ? n() : n), [x]), W = F[t], _ = W || F, {
      colorSchemes: Q = m,
      components: G = v,
      cssVarPrefix: X
    } = _, V = Object.keys(Q).filter((xe) => !!Q[xe]).join(","), ee = p.useMemo(() => V.split(","), [V]), K = typeof s == "string" ? s : s.light, re = typeof s == "string" ? s : s.dark, pe = Q[K] && Q[re] ? M : Q[_.defaultColorScheme]?.palette?.mode || _.palette?.mode, {
      mode: ke,
      setMode: be,
      systemMode: he,
      lightColorScheme: le,
      darkColorScheme: Oe,
      colorScheme: We,
      setColorScheme: Re
    } = ok({
      supportedColorSchemes: ee,
      defaultLightColorScheme: K,
      defaultDarkColorScheme: re,
      modeStorageKey: w,
      colorSchemeStorageKey: E,
      defaultMode: pe,
      storageManager: T,
      storageWindow: P,
      noSsr: O
    });
    let Le = ke, de = We;
    z && (Le = A.mode, de = A.colorScheme);
    let Te = de || _.defaultColorScheme;
    _.vars && !I && (Te = _.defaultColorScheme);
    const Je = p.useMemo(() => {
      const xe = _.generateThemeVars?.() || _.vars, oe = {
        ..._,
        components: G,
        colorSchemes: Q,
        cssVarPrefix: X,
        vars: xe
      };
      if (typeof oe.generateSpacing == "function" && (oe.spacing = oe.generateSpacing()), Te) {
        const Ce = Q[Te];
        Ce && typeof Ce == "object" && Object.keys(Ce).forEach((Ye) => {
          Ce[Ye] && typeof Ce[Ye] == "object" ? oe[Ye] = {
            ...oe[Ye],
            ...Ce[Ye]
          } : oe[Ye] = Ce[Ye];
        });
      }
      return l ? l(oe) : oe;
    }, [_, Te, G, Q, X]), ge = _.colorSchemeSelector;
    st(() => {
      if (de && j && ge && ge !== "media") {
        const xe = ge;
        let oe = ge;
        if (xe === "class" && (oe = ".%s"), xe === "data" && (oe = "[data-%s]"), xe?.startsWith("data-") && !xe.includes("%s") && (oe = `[${xe}="%s"]`), oe.startsWith("."))
          j.classList.remove(...ee.map((Ce) => oe.substring(1).replace("%s", Ce))), j.classList.add(oe.substring(1).replace("%s", de));
        else {
          const Ce = oe.replace("%s", de).match(/\[([^\]]+)\]/);
          if (Ce) {
            const [Ye, fe] = Ce[1].split("=");
            fe || ee.forEach((nt) => {
              j.removeAttribute(Ye.replace(de, nt));
            }), j.setAttribute(Ye, fe ? fe.replace(/"|'/g, "") : "");
          } else
            j.setAttribute(oe, de);
        }
      }
    }, [de, ge, j, ee]), p.useEffect(() => {
      let xe;
      if (k && L.current && R) {
        const oe = R.createElement("style");
        oe.appendChild(R.createTextNode(ik)), R.head.appendChild(oe), window.getComputedStyle(R.body), xe = setTimeout(() => {
          R.head.removeChild(oe);
        }, 1);
      }
      return () => {
        clearTimeout(xe);
      };
    }, [de, k, R]), p.useEffect(() => (L.current = !0, () => {
      L.current = !1;
    }), []);
    const Se = p.useMemo(() => ({
      allColorSchemes: ee,
      colorScheme: de,
      darkColorScheme: Oe,
      lightColorScheme: le,
      mode: Le,
      setColorScheme: Re,
      setMode: be,
      systemMode: he
    }), [ee, de, Oe, le, Le, Re, be, he, Je.colorSchemeSelector]);
    let Ne = !0;
    (g || _.cssVariables === !1 || z && N?.cssVarPrefix === X) && (Ne = !1);
    const Ke = /* @__PURE__ */ f.jsxs(p.Fragment, {
      children: [/* @__PURE__ */ f.jsx(L0, {
        themeId: W ? t : void 0,
        theme: Je,
        children: h
      }), Ne && /* @__PURE__ */ f.jsx(p0, {
        styles: Je.generateStyleSheets?.() || []
      })]
    });
    return z ? Ke : /* @__PURE__ */ f.jsx(c.Provider, {
      value: Se,
      children: Ke
    });
  }
  const S = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: u,
    getInitColorSchemeScript: (y) => ek({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: S,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...y
    })
  };
}
function lk(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const ak = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), xh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (ak.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, ck = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, uk = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Au(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return ck(
    e,
    (l, a, c) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const u = `--${n ? `${n}-` : ""}${l.join("-")}`, m = uk(l, a);
        Object.assign(o, {
          [u]: m
        }), xh(i, l, `var(${u})`, c), xh(s, l, `var(${u}, ${m})`, c);
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
function dk(e, t = {}) {
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
    css: m,
    varsWithDefaults: v
  } = Au(c, t);
  let d = v;
  const S = {}, {
    [a]: b,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([w, E]) => {
    const {
      vars: k,
      css: T,
      varsWithDefaults: P
    } = Au(E, t);
    d = Mt(d, P), S[w] = {
      css: T,
      vars: k
    };
  }), b) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: k
    } = Au(b, t);
    d = Mt(d, k), S[a] = {
      css: w,
      vars: E
    };
  }
  function y(w, E) {
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
    vars: d,
    generateThemeVars: () => {
      let w = {
        ...u
      };
      return Object.entries(S).forEach(([, {
        vars: E
      }]) => {
        w = Mt(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      const w = [], E = e.defaultColorScheme || "light";
      function k(R, j) {
        Object.keys(j).length && w.push(typeof R == "string" ? {
          [R]: {
            ...j
          }
        } : R);
      }
      k(n(void 0, {
        ...m
      }), m);
      const {
        [E]: T,
        ...P
      } = S;
      if (T) {
        const {
          css: R
        } = T, j = s[E]?.palette?.mode, $ = !r && j ? {
          colorScheme: j,
          ...R
        } : {
          ...R
        };
        k(n(E, {
          ...$
        }), $);
      }
      return Object.entries(P).forEach(([R, {
        css: j
      }]) => {
        const $ = s[R]?.palette?.mode, g = !r && $ ? {
          colorScheme: $,
          ...j
        } : {
          ...j
        };
        k(n(R, {
          ...g
        }), g);
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
function fk(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function ue(e, t, n = void 0) {
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
function ju(e, t) {
  return /* @__PURE__ */ p.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? e.type?._payload?.value?.muiName
  ) !== -1;
}
const pk = jc(), mk = jC("div", {
  name: "MuiStack",
  slot: "Root"
});
function hk(e) {
  return NC({
    props: e,
    name: "MuiStack",
    defaultTheme: pk
  });
}
function gk(e, t) {
  const n = p.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ p.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const yk = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], vk = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Gr({
      theme: t
    }, Iu({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Pc(t), o = Object.keys(t.breakpoints.values).reduce((a, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (a[c] = !0), a), {}), i = Iu({
      values: e.direction,
      base: o
    }), s = Iu({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, c, u) => {
      if (!i[a]) {
        const v = c > 0 ? i[u[c - 1]] : "column";
        i[a] = v;
      }
    }), n = Mt(n, Gr({
      theme: t
    }, s, (a, c) => e.useFlexGap ? {
      gap: To(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${yk(c ? i[c] : e.direction)}`]: To(r, a)
      }
    }));
  }
  return n = Bw(t.breakpoints, n), n;
};
function xk(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = mk,
    useThemeProps: n = hk,
    componentName: r = "MuiStack"
  } = e, o = () => ue({
    root: ["root"]
  }, (a) => ce(r, a), {}), i = t(vk);
  return /* @__PURE__ */ p.forwardRef(function(a, c) {
    const u = n(a), {
      component: m = "div",
      direction: v = "column",
      spacing: d = 0,
      divider: S,
      children: b,
      className: C,
      useFlexGap: y = !1,
      ...h
    } = u, x = {
      direction: v,
      spacing: d,
      useFlexGap: y
    }, w = o();
    return /* @__PURE__ */ f.jsx(i, {
      as: m,
      ownerState: x,
      ref: c,
      className: J(w.root, C),
      ...h,
      children: S ? gk(b, S) : b
    });
  });
}
function z0() {
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
      paper: js.white,
      default: js.white
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
const B0 = z0();
function F0() {
  return {
    text: {
      primary: js.white,
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
      active: js.white,
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
const Dd = F0();
function Sh(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Bc(e.main, o) : t === "dark" && (e.dark = zc(e.main, i)));
}
function bh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Sk(e = "light") {
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
function bk(e = "light") {
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
function wk(e = "light") {
  return e === "dark" ? {
    main: zo[500],
    light: zo[300],
    dark: zo[700]
  } : {
    main: zo[700],
    light: zo[400],
    dark: zo[800]
  };
}
function Ck(e = "light") {
  return e === "dark" ? {
    main: Do[400],
    light: Do[300],
    dark: Do[700]
  } : {
    main: Do[700],
    light: Do[500],
    dark: Do[900]
  };
}
function kk(e = "light") {
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
function Ek(e = "light") {
  return e === "dark" ? {
    main: _i[400],
    light: _i[300],
    dark: _i[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _i[500],
    dark: _i[900]
  };
}
function Tk(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function vp(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || Sk(t), l = e.secondary || bk(t), a = e.error || wk(t), c = e.info || Ck(t), u = e.success || kk(t), m = e.warning || Ek(t);
  function v(C) {
    return o ? Tk(C) : DC(C, Dd.text.primary) >= n ? Dd.text.primary : B0.text.primary;
  }
  const d = ({
    color: C,
    name: y,
    mainShade: h = 500,
    lightShade: x = 300,
    darkShade: w = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[h] && (C.main = C[h]), !C.hasOwnProperty("main"))
      throw new Error(Cr(11, y ? ` (${y})` : "", h));
    if (typeof C.main != "string")
      throw new Error(Cr(12, y ? ` (${y})` : "", JSON.stringify(C.main)));
    return o ? (bh(o, C, "light", x, r), bh(o, C, "dark", w, r)) : (Sh(C, "light", x, r), Sh(C, "dark", w, r)), C.contrastText || (C.contrastText = v(C.main)), C;
  };
  let S;
  return t === "light" ? S = z0() : t === "dark" && (S = F0()), Mt({
    // A collection of common colors.
    common: {
      ...js
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
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: yb,
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
    ...S
  }, i);
}
function Pk(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Rk(e, t) {
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
function Ik(e) {
  return Math.round(e * 1e5) / 1e5;
}
const wh = {
  textTransform: "uppercase"
}, Ch = '"Roboto", "Helvetica", "Arial", sans-serif';
function D0(e, t) {
  const {
    fontFamily: n = Ch,
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
  } = typeof t == "function" ? t(e) : t, v = r / 14, d = u || ((C) => `${C / a * v}rem`), S = (C, y, h, x, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: d(y),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Ch ? {
      letterSpacing: `${Ik(x / y)}em`
    } : {},
    ...w,
    ...c
  }), b = {
    h1: S(o, 96, 1.167, -1.5),
    h2: S(o, 60, 1.2, -0.5),
    h3: S(i, 48, 1.167, 0),
    h4: S(i, 34, 1.235, 0.25),
    h5: S(i, 24, 1.334, 0),
    h6: S(s, 20, 1.6, 0.15),
    subtitle1: S(i, 16, 1.75, 0.15),
    subtitle2: S(s, 14, 1.57, 0.1),
    body1: S(i, 16, 1.5, 0.15),
    body2: S(i, 14, 1.43, 0.15),
    button: S(s, 14, 1.75, 0.4, wh),
    caption: S(i, 12, 1.66, 0.4),
    overline: S(i, 12, 2.66, 1, wh),
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
    ...b
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Mk = 0.2, $k = 0.14, Ok = 0.12;
function et(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Mk})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${$k})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ok})`].join(",");
}
const Ak = ["none", et(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), et(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), et(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), et(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), et(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), et(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), et(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), et(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), et(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), et(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), et(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), et(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), et(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), et(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), et(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), et(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), et(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), et(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), et(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), et(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), et(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), et(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), et(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), et(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], jk = ["all"], Lk = {}, Nk = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, zk = {
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
function kh(e) {
  return `${Math.round(e)}ms`;
}
function Bk(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Fk(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...Nk,
    ...t.easing
  }, r = {
    ...zk,
    ...t.duration
  }, o = (s = jk, l = Lk) => {
    const {
      duration: a = r.standard,
      easing: c = n.easeInOut,
      delay: u = 0,
      ...m
    } = l;
    return (Array.isArray(s) ? s : [s]).map((v) => `${v} ${typeof a == "string" ? a : kh(a)} ${c} ${typeof u == "string" ? u : kh(u)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: Bk,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const Dk = {};
function _k(e = Dk) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const Wk = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Uk(e) {
  return hr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function _0(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !Uk(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : hr(l) && (r[s] = {
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
function Eh(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Hk = (e) => {
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
function Vk(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Ra(t, Hk(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Eh(n)})` : Bc(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Eh(n)})` : zc(t, n);
    }
  });
}
function _d(e = {}, ...t) {
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
    throw new Error(Cr(22));
  const v = vp({
    ...i,
    colorSpace: u
  }), d = jc(e);
  let S = Mt(d, {
    mixins: Rk(d.breakpoints, r),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ak.slice(),
    typography: D0(v, a),
    motion: _k(s),
    transitions: Fk(l),
    zIndex: {
      ...Wk
    }
  });
  return S = Mt(S, m), S = t.reduce((b, C) => Mt(b, C), S), delete S.transitions.reducedMotion, S.unstable_sxConfig = {
    ...Ac,
    ...m?.unstable_sxConfig
  }, S.unstable_sx = function(C) {
    return Po({
      sx: C,
      theme: this
    });
  }, S.toRuntimeSource = _0, Vk(S), S;
}
function Wd(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Kk = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Wd(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function W0(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function U0(e) {
  return e === "dark" ? Kk : [];
}
function Yk(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = vp({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...W0(s.mode),
      ...n
    },
    overlays: r || U0(s.mode),
    ...i
  };
}
function Gk(e) {
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Xk = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Qk = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Xk(e.cssVarPrefix).forEach((l) => {
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
function qk(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function B(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function es(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : $0(e);
}
function ur(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ji(es(e[t])));
}
function Zk(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Kn = (e) => {
  try {
    return e();
  } catch {
  }
}, Jk = (e = "mui") => lk(e);
function Lu(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = Yk({
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
  } = _d({
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
      ...W0(i),
      ...n?.opacity
    },
    overlays: n?.overlays || U0(i)
  }, l;
}
function e2(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = Gk,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, m = Object.keys(n)[0], v = r || (n.light && m !== "light" ? "light" : m), d = Jk(i), {
    [v]: S,
    light: b,
    dark: C,
    ...y
  } = n, h = {
    ...y
  };
  let x = S;
  if ((v === "dark" && !("dark" in n) || v === "light" && !("light" in n)) && (x = !0), !x)
    throw new Error(Cr(21, v));
  let w;
  s && (w = "oklch");
  const E = Lu(w, h, x, u, v);
  b && !h.light && Lu(w, h, b, void 0, "light"), C && !h.dark && Lu(w, h, C, void 0, "dark");
  let k = {
    defaultColorScheme: v,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: d,
    colorSchemes: h,
    font: {
      ...Pk(E.typography),
      ...E.font
    },
    spacing: Zk(u.spacing)
  };
  Object.keys(k.colorSchemes).forEach(($) => {
    const g = k.colorSchemes[$].palette, M = (O) => {
      const L = O.split("-"), N = L[1], A = L[2];
      return d(O, g[N][A]);
    };
    g.mode === "light" && (B(g.common, "background", "#fff"), B(g.common, "onBackground", "#000")), g.mode === "dark" && (B(g.common, "background", "#000"), B(g.common, "onBackground", "#fff"));
    function I(O, L, N) {
      if (w) {
        let A;
        return O === ro && (A = `transparent ${((1 - N) * 100).toFixed(0)}%`), O === Be && (A = `#000 ${(N * 100).toFixed(0)}%`), O === Fe && (A = `#fff ${(N * 100).toFixed(0)}%`), `color-mix(in ${w}, ${L}, ${A})`;
      }
      return O(L, N);
    }
    if (qk(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      B(g.Alert, "errorColor", I(Be, s ? d("palette-error-light") : g.error.light, 0.6)), B(g.Alert, "infoColor", I(Be, s ? d("palette-info-light") : g.info.light, 0.6)), B(g.Alert, "successColor", I(Be, s ? d("palette-success-light") : g.success.light, 0.6)), B(g.Alert, "warningColor", I(Be, s ? d("palette-warning-light") : g.warning.light, 0.6)), B(g.Alert, "errorFilledBg", M("palette-error-main")), B(g.Alert, "infoFilledBg", M("palette-info-main")), B(g.Alert, "successFilledBg", M("palette-success-main")), B(g.Alert, "warningFilledBg", M("palette-warning-main")), B(g.Alert, "errorFilledColor", Kn(() => g.getContrastText(g.error.main))), B(g.Alert, "infoFilledColor", Kn(() => g.getContrastText(g.info.main))), B(g.Alert, "successFilledColor", Kn(() => g.getContrastText(g.success.main))), B(g.Alert, "warningFilledColor", Kn(() => g.getContrastText(g.warning.main))), B(g.Alert, "errorStandardBg", I(Fe, s ? d("palette-error-light") : g.error.light, 0.9)), B(g.Alert, "infoStandardBg", I(Fe, s ? d("palette-info-light") : g.info.light, 0.9)), B(g.Alert, "successStandardBg", I(Fe, s ? d("palette-success-light") : g.success.light, 0.9)), B(g.Alert, "warningStandardBg", I(Fe, s ? d("palette-warning-light") : g.warning.light, 0.9)), B(g.Alert, "errorIconColor", M("palette-error-main")), B(g.Alert, "infoIconColor", M("palette-info-main")), B(g.Alert, "successIconColor", M("palette-success-main")), B(g.Alert, "warningIconColor", M("palette-warning-main")), B(g.AppBar, "defaultBg", M("palette-grey-100")), B(g.Avatar, "defaultBg", M("palette-grey-400")), B(g.Button, "inheritContainedBg", M("palette-grey-300")), B(g.Button, "inheritContainedHoverBg", M("palette-grey-A100")), B(g.Chip, "defaultBorder", M("palette-grey-400")), B(g.Chip, "defaultAvatarColor", M("palette-grey-700")), B(g.Chip, "defaultIconColor", M("palette-grey-700")), B(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), B(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), B(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), B(g.LinearProgress, "primaryBg", I(Fe, s ? d("palette-primary-main") : g.primary.main, 0.62)), B(g.LinearProgress, "secondaryBg", I(Fe, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), B(g.LinearProgress, "errorBg", I(Fe, s ? d("palette-error-main") : g.error.main, 0.62)), B(g.LinearProgress, "infoBg", I(Fe, s ? d("palette-info-main") : g.info.main, 0.62)), B(g.LinearProgress, "successBg", I(Fe, s ? d("palette-success-main") : g.success.main, 0.62)), B(g.LinearProgress, "warningBg", I(Fe, s ? d("palette-warning-light") : g.warning.main, 0.62)), B(g.Skeleton, "bg", w ? I(ro, s ? d("palette-text-primary") : g.text.primary, 0.11) : `rgba(${M("palette-text-primaryChannel")} / 0.11)`), B(g.Slider, "primaryTrack", I(Fe, s ? d("palette-primary-main") : g.primary.main, 0.62)), B(g.Slider, "secondaryTrack", I(Fe, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), B(g.Slider, "errorTrack", I(Fe, s ? d("palette-error-main") : g.error.main, 0.62)), B(g.Slider, "infoTrack", I(Fe, s ? d("palette-info-main") : g.info.main, 0.62)), B(g.Slider, "successTrack", I(Fe, s ? d("palette-success-main") : g.success.main, 0.62)), B(g.Slider, "warningTrack", I(Fe, s ? d("palette-warning-main") : g.warning.main, 0.62));
      const O = w ? I(Be, s ? d("palette-background-default") : g.background.default, 0.6825) : Cl(g.background.default, 0.8);
      B(g.SnackbarContent, "bg", O), B(g.SnackbarContent, "color", Kn(() => w ? Dd.text.primary : g.getContrastText(O))), B(g.SpeedDialAction, "fabHoverBg", Cl(g.background.paper, 0.15)), B(g.StepConnector, "border", M("palette-grey-400")), B(g.StepContent, "border", M("palette-grey-400")), B(g.Switch, "defaultColor", M("palette-common-white")), B(g.Switch, "defaultDisabledColor", M("palette-grey-100")), B(g.Switch, "primaryDisabledColor", I(Fe, s ? d("palette-primary-main") : g.primary.main, 0.62)), B(g.Switch, "secondaryDisabledColor", I(Fe, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), B(g.Switch, "errorDisabledColor", I(Fe, s ? d("palette-error-main") : g.error.main, 0.62)), B(g.Switch, "infoDisabledColor", I(Fe, s ? d("palette-info-main") : g.info.main, 0.62)), B(g.Switch, "successDisabledColor", I(Fe, s ? d("palette-success-main") : g.success.main, 0.62)), B(g.Switch, "warningDisabledColor", I(Fe, s ? d("palette-warning-main") : g.warning.main, 0.62)), B(g.TableCell, "border", I(Fe, ro(s ? d("palette-divider") : g.divider, 1), 0.88)), B(g.Tooltip, "bg", I(ro, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      B(g.Alert, "errorColor", I(Fe, s ? d("palette-error-light") : g.error.light, 0.6)), B(g.Alert, "infoColor", I(Fe, s ? d("palette-info-light") : g.info.light, 0.6)), B(g.Alert, "successColor", I(Fe, s ? d("palette-success-light") : g.success.light, 0.6)), B(g.Alert, "warningColor", I(Fe, s ? d("palette-warning-light") : g.warning.light, 0.6)), B(g.Alert, "errorFilledBg", M("palette-error-dark")), B(g.Alert, "infoFilledBg", M("palette-info-dark")), B(g.Alert, "successFilledBg", M("palette-success-dark")), B(g.Alert, "warningFilledBg", M("palette-warning-dark")), B(g.Alert, "errorFilledColor", Kn(() => g.getContrastText(g.error.dark))), B(g.Alert, "infoFilledColor", Kn(() => g.getContrastText(g.info.dark))), B(g.Alert, "successFilledColor", Kn(() => g.getContrastText(g.success.dark))), B(g.Alert, "warningFilledColor", Kn(() => g.getContrastText(g.warning.dark))), B(g.Alert, "errorStandardBg", I(Be, s ? d("palette-error-light") : g.error.light, 0.9)), B(g.Alert, "infoStandardBg", I(Be, s ? d("palette-info-light") : g.info.light, 0.9)), B(g.Alert, "successStandardBg", I(Be, s ? d("palette-success-light") : g.success.light, 0.9)), B(g.Alert, "warningStandardBg", I(Be, s ? d("palette-warning-light") : g.warning.light, 0.9)), B(g.Alert, "errorIconColor", M("palette-error-main")), B(g.Alert, "infoIconColor", M("palette-info-main")), B(g.Alert, "successIconColor", M("palette-success-main")), B(g.Alert, "warningIconColor", M("palette-warning-main")), B(g.AppBar, "defaultBg", M("palette-grey-900")), B(g.AppBar, "darkBg", M("palette-background-paper")), B(g.AppBar, "darkColor", M("palette-text-primary")), B(g.Avatar, "defaultBg", M("palette-grey-600")), B(g.Button, "inheritContainedBg", M("palette-grey-800")), B(g.Button, "inheritContainedHoverBg", M("palette-grey-700")), B(g.Chip, "defaultBorder", M("palette-grey-700")), B(g.Chip, "defaultAvatarColor", M("palette-grey-300")), B(g.Chip, "defaultIconColor", M("palette-grey-300")), B(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), B(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), B(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), B(g.LinearProgress, "primaryBg", I(Be, s ? d("palette-primary-main") : g.primary.main, 0.5)), B(g.LinearProgress, "secondaryBg", I(Be, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), B(g.LinearProgress, "errorBg", I(Be, s ? d("palette-error-main") : g.error.main, 0.5)), B(g.LinearProgress, "infoBg", I(Be, s ? d("palette-info-main") : g.info.main, 0.5)), B(g.LinearProgress, "successBg", I(Be, s ? d("palette-success-main") : g.success.main, 0.5)), B(g.LinearProgress, "warningBg", I(Be, s ? d("palette-warning-main") : g.warning.main, 0.5)), B(g.Skeleton, "bg", w ? I(ro, s ? d("palette-text-primary") : g.text.primary, 0.13) : `rgba(${M("palette-text-primaryChannel")} / 0.13)`), B(g.Slider, "primaryTrack", I(Be, s ? d("palette-primary-main") : g.primary.main, 0.5)), B(g.Slider, "secondaryTrack", I(Be, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), B(g.Slider, "errorTrack", I(Be, s ? d("palette-error-main") : g.error.main, 0.5)), B(g.Slider, "infoTrack", I(Be, s ? d("palette-info-main") : g.info.main, 0.5)), B(g.Slider, "successTrack", I(Be, s ? d("palette-success-main") : g.success.main, 0.5)), B(g.Slider, "warningTrack", I(Be, s ? d("palette-warning-light") : g.warning.main, 0.5));
      const O = w ? I(Fe, s ? d("palette-background-default") : g.background.default, 0.985) : Cl(g.background.default, 0.98);
      B(g.SnackbarContent, "bg", O), B(g.SnackbarContent, "color", Kn(() => w ? B0.text.primary : g.getContrastText(O))), B(g.SpeedDialAction, "fabHoverBg", Cl(g.background.paper, 0.15)), B(g.StepConnector, "border", M("palette-grey-600")), B(g.StepContent, "border", M("palette-grey-600")), B(g.Switch, "defaultColor", M("palette-grey-300")), B(g.Switch, "defaultDisabledColor", M("palette-grey-600")), B(g.Switch, "primaryDisabledColor", I(Be, s ? d("palette-primary-main") : g.primary.main, 0.55)), B(g.Switch, "secondaryDisabledColor", I(Be, s ? d("palette-secondary-main") : g.secondary.main, 0.55)), B(g.Switch, "errorDisabledColor", I(Be, s ? d("palette-error-main") : g.error.main, 0.55)), B(g.Switch, "infoDisabledColor", I(Be, s ? d("palette-info-main") : g.info.main, 0.55)), B(g.Switch, "successDisabledColor", I(Be, s ? d("palette-success-main") : g.success.main, 0.55)), B(g.Switch, "warningDisabledColor", I(Be, s ? d("palette-warning-light") : g.warning.main, 0.55)), B(g.TableCell, "border", I(Be, ro(s ? d("palette-divider") : g.divider, 1), 0.68)), B(g.Tooltip, "bg", I(ro, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    s || (ur(g.background, "default"), ur(g.background, "paper"), ur(g.common, "background"), ur(g.common, "onBackground"), ur(g, "divider")), Object.keys(g).forEach((O) => {
      const L = g[O];
      O !== "tonalOffset" && !s && L && typeof L == "object" && (L.main && B(g[O], "mainChannel", Ji(es(L.main))), L.light && B(g[O], "lightChannel", Ji(es(L.light))), L.dark && B(g[O], "darkChannel", Ji(es(L.dark))), L.contrastText && B(g[O], "contrastTextChannel", Ji(es(L.contrastText))), O === "text" && (ur(g[O], "primary"), ur(g[O], "secondary")), O === "action" && (L.active && ur(g[O], "active"), L.selected && ur(g[O], "selected")));
    });
  }), k = t.reduce(($, g) => Mt($, g), k);
  const T = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: Qk(k),
    enableContrastVars: s
  }, {
    vars: P,
    generateThemeVars: R,
    generateStyleSheets: j
  } = dk(k, T);
  return k.vars = P, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([$, g]) => {
    k[$] = g;
  }), k.generateThemeVars = R, k.generateStyleSheets = j, k.generateSpacing = function() {
    return k0(u.spacing, Pc(this));
  }, k.getColorSchemeSelector = fk(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Ac,
    ...u?.unstable_sxConfig
  }, k.unstable_sx = function(g) {
    return Po({
      sx: g,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = _0, k;
}
function Th(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: vp({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Dc(e = {}, ...t) {
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
      return _d(e, ...t);
    let u = n;
    "palette" in e || c[l] && (c[l] !== !0 ? u = c[l].palette : l === "dark" && (u = {
      mode: "dark"
    }));
    const m = _d({
      ...e,
      palette: u
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = c, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...c.light !== !0 && c.light,
      palette: m.palette
    }, Th(m, "dark", c.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...c.dark !== !0 && c.dark,
      palette: m.palette
    }, Th(m, "light", c.light)), m;
  }
  return !n && !("light" in c) && l === "light" && (c.light = !0), e2({
    ...s,
    colorSchemes: c,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function t2(e) {
  return ce("MuiCheckbox", e);
}
const Nu = ae("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]);
function Ia(e) {
  return typeof e == "string";
}
function _c(e, t = 166) {
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
function ct(...e) {
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
function Qe(e) {
  const t = p.useRef(e);
  return st(() => {
    t.current = e;
  }), p.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function dt(e) {
  return e && e.ownerDocument || document;
}
function Wn(e) {
  return dt(e).defaultView || window;
}
function kl(e) {
  return parseInt(e, 10) || 0;
}
const n2 = {
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
function r2(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ph(e) {
  return r2(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const o2 = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: c
  } = p.useRef(l != null), u = p.useRef(null), m = ct(n, u), v = p.useRef(null), d = p.useRef(null), S = p.useCallback(() => {
    const x = u.current, w = d.current;
    if (!x || !w)
      return;
    const k = Wn(x).getComputedStyle(x);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = x.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const T = k.boxSizing, P = kl(k.paddingBottom) + kl(k.paddingTop), R = kl(k.borderBottomWidth) + kl(k.borderTopWidth), j = w.scrollHeight;
    w.value = "x";
    const $ = w.scrollHeight;
    let g = j;
    i && (g = Math.max(Number(i) * $, g)), o && (g = Math.min(Number(o) * $, g)), g = Math.max(g, $);
    const M = g + (T === "border-box" ? P + R : 0), I = Math.abs(g - j) <= 1;
    return {
      outerHeightStyle: M,
      overflowing: I
    };
  }, [o, i, t.placeholder]), b = Qe(() => {
    const x = u.current, w = S();
    if (!x || !w || Ph(w))
      return !1;
    const E = w.outerHeightStyle;
    return v.current != null && v.current !== E;
  }), C = p.useCallback(() => {
    const x = u.current, w = S();
    if (!x || !w || Ph(w))
      return;
    const E = w.outerHeightStyle;
    v.current !== E && (v.current = E, x.style.height = `${E}px`), x.style.overflow = w.overflowing ? "hidden" : "";
  }, [S]), y = p.useRef(-1);
  st(() => {
    const x = _c(C), w = u?.current;
    if (!w)
      return;
    const E = Wn(w);
    E.addEventListener("resize", x);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(w), cancelAnimationFrame(y.current), C(), y.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      x.clear(), cancelAnimationFrame(y.current), E.removeEventListener("resize", x), k && k.disconnect();
    };
  }, [S, C, b]), st(() => {
    C();
  });
  const h = (x) => {
    c || C();
    const w = x.target, E = w.value.length, k = w.value.endsWith(`
`), T = w.selectionStart === E;
    k && T && w.setSelectionRange(E, E), r && r(x);
  };
  return /* @__PURE__ */ f.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ f.jsx("textarea", {
      value: l,
      onChange: h,
      ref: m,
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
        ...n2.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), el = /* @__PURE__ */ p.createContext(void 0);
function H0() {
  return p.useContext(el);
}
function $o({
  props: e,
  states: t
}) {
  const n = p.useContext(el), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const xp = Dc();
function eo() {
  const e = Lc(xp);
  return e[nr] || e;
}
function i2(e) {
  return /* @__PURE__ */ f.jsx(E0, {
    ...e,
    defaultTheme: xp,
    themeId: nr
  });
}
function V0(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Kt = (e) => V0(e) && e !== "classes", U = M0({
  themeId: nr,
  defaultTheme: xp,
  rootShouldForwardProp: Kt
});
function s2(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ f.jsx(i2, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const ye = ZC;
function me(e) {
  return GC(e);
}
function Zn(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Rh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ma(e, t = !1) {
  return e && (Rh(e.value) && e.value !== "" || t && Rh(e.defaultValue) && e.defaultValue !== "");
}
function l2(e) {
  return e.startAdornment;
}
function a2(e) {
  return ce("MuiInputBase", e);
}
const an = ae("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), c2 = {
  transition: "none"
};
function u2(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Sp = (e) => e.scrollTop, K0 = {}, d2 = ["all"], f2 = {};
function Cn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function Y0(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function $a(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = K0
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function bp(e, t) {
  const n = t ?? c2;
  return u2(e.motion?.reducedMotion, n);
}
function lt(e, t = d2, n = f2) {
  const r = e.transitions?.create?.(t, n), o = bp(e);
  if (r === void 0)
    return o ?? K0;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Ih;
const Ud = "mui-auto-fill", Oa = "mui-auto-fill-cancel", Wc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${Z(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Uc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, p2 = (e) => {
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
    size: v,
    startAdornment: d,
    type: S
  } = e, b = {
    root: ["root", `color${Z(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", v && v !== "medium" && `size${Z(v)}`, u && "multiline", d && "adornedStart", i && "adornedEnd", c && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", S === "search" && "inputTypeSearch", m && "readOnly"]
  };
  return ue(b, a2, t);
}, Hc = U("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Wc
})(ye(({
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
}))), Vc = U("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Uc
})(ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    ...lt(e, "opacity", {
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
        animationName: Oa,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: Ud
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
})), Mh = s2({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${Ud}`]: {
    from: {
      animationName: Ud
    }
  },
  [`@keyframes ${Oa}`]: {
    from: {
      animationName: Oa
    }
  }
}), wp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disableInjectingGlobalStyles: v,
    endAdornment: d,
    error: S,
    fullWidth: b = !1,
    id: C,
    inputComponent: y = "input",
    inputProps: h = {},
    inputRef: x,
    margin: w,
    maxRows: E,
    minRows: k,
    multiline: T = !1,
    name: P,
    onBlur: R,
    onChange: j,
    onClick: $,
    onFocus: g,
    onKeyDown: M,
    onKeyUp: I,
    placeholder: O,
    readOnly: L,
    renderSuffix: N,
    rows: A,
    size: z,
    slotProps: F = {},
    slots: W = {},
    startAdornment: _,
    type: Q = "text",
    value: G,
    ...X
  } = r, V = h.value != null ? h.value : G, {
    current: ee
  } = p.useRef(V != null), K = p.useRef(), re = p.useCallback((fe) => {
  }, []), pe = ct(K, x, h.ref, re), [ke, be] = p.useState(!1), [he, le] = $o({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  he.focused = le ? le.focused : ke, p.useEffect(() => {
    !le && m && ke && (be(!1), R && R());
  }, [le, m, ke, R]);
  const Oe = le && le.onFilled, We = le && le.onEmpty, Re = p.useCallback((fe) => {
    Ma(fe) ? Oe && Oe() : We && We();
  }, [Oe, We]);
  st(() => {
    ee && Re({
      value: V
    });
  }, [V, Re, ee]), st(() => {
    if (!l)
      return;
    const fe = K.current;
    if (!fe)
      return;
    const nt = dt(fe), rt = Zn(nt), vn = rt == null || rt === nt.body || rt === nt.documentElement;
    fe === rt ? le && le.onFocus ? le.onFocus() : be(!0) : vn && fe.focus();
  }, [l]);
  const Le = (fe) => {
    g && g(fe), h.onFocus && h.onFocus(fe), le && le.onFocus ? le.onFocus(fe) : be(!0);
  }, de = (fe) => {
    R && R(fe), h.onBlur && h.onBlur(fe), le && le.onBlur ? le.onBlur(fe) : be(!1);
  }, Te = (fe, ...nt) => {
    if (!ee) {
      const rt = fe.target || K.current;
      if (rt == null)
        throw new Error(Cr(1));
      Re({
        value: rt.value
      });
    }
    h.onChange && h.onChange(fe, ...nt), j && j(fe, ...nt);
  };
  p.useEffect(() => {
    Re(K.current);
  }, []);
  const Je = (fe) => {
    K.current && fe.currentTarget === fe.target && K.current.focus(), $ && $(fe);
  };
  let ge = y, Se = h;
  T && ge === "input" && (A ? Se = {
    type: void 0,
    minRows: A,
    maxRows: A,
    ...Se
  } : Se = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...Se
  }, ge = o2);
  const Ne = (fe) => {
    Re(fe.animationName === Oa ? K.current : {
      value: "x"
    });
  };
  p.useEffect(() => {
    le && le.setAdornedStart(!!_);
  }, [le, _]);
  const Ke = {
    ...r,
    color: he.color || "primary",
    disabled: he.disabled,
    endAdornment: d,
    error: he.error,
    focused: he.focused,
    formControl: le,
    fullWidth: b,
    hiddenLabel: he.hiddenLabel,
    multiline: T,
    size: he.size,
    startAdornment: _,
    type: Q
  }, xe = p2(Ke), oe = W.root || Hc, Ce = F.root || {}, Ye = W.input || Vc;
  return Se = {
    ...Se,
    ...F.input
  }, /* @__PURE__ */ f.jsxs(p.Fragment, {
    children: [!v && typeof Mh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Ih || (Ih = /* @__PURE__ */ f.jsx(Mh, {}))), /* @__PURE__ */ f.jsxs(oe, {
      ...Ce,
      ref: n,
      onClick: Je,
      ...X,
      ...!Ia(oe) && {
        ownerState: {
          ...Ke,
          ...Ce.ownerState
        }
      },
      className: J(xe.root, Ce.className, a, L && "MuiInputBase-readOnly"),
      children: [_, /* @__PURE__ */ f.jsx(el.Provider, {
        value: null,
        children: /* @__PURE__ */ f.jsx(Ye, {
          "aria-invalid": he.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: u,
          disabled: he.disabled,
          id: C,
          onAnimationStart: Ne,
          name: P,
          placeholder: O,
          readOnly: L,
          required: he.required,
          rows: A,
          value: V,
          onKeyDown: M,
          onKeyUp: I,
          type: Q,
          ...Se,
          ...!Ia(Ye) && {
            as: ge,
            ownerState: {
              ...Ke,
              ...Se.ownerState
            }
          },
          ref: pe,
          className: J(xe.input, Se.className, L && "MuiInputBase-readOnly"),
          onBlur: de,
          onChange: Te,
          onFocus: Le
        })
      }), d, N ? N({
        ...he,
        startAdornment: _
      }) : null]
    })]
  });
});
function m2(e) {
  return ce("MuiFilledInput", e);
}
const oo = {
  ...an,
  ...ae("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function h2(e) {
  return ce("MuiFormControlLabel", e);
}
const ts = ae("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementEnd", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function g2(e) {
  return ce("MuiFormHelperText", e);
}
const $h = ae("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function y2(e) {
  return ce("MuiFormLabel", e);
}
const ds = ae("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function v2(e) {
  return ce("MuiInput", e);
}
const Ui = {
  ...an,
  ...ae("MuiInput", ["root", "underline", "input"])
};
function x2(e) {
  return ce("MuiMenuItem", e);
}
const Hi = ae("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function S2(e) {
  return ce("MuiNativeSelect", e);
}
const Cp = ae("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function b2(e) {
  return ce("MuiOutlinedInput", e);
}
const Yn = {
  ...an,
  ...ae("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function w2({
  theme: e,
  ...t
}) {
  const n = nr in e ? e[nr] : void 0;
  return /* @__PURE__ */ f.jsx(L0, {
    ...t,
    themeId: n ? nr : void 0,
    theme: n || e
  });
}
const El = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: C2
} = sk({
  themeId: nr,
  // @ts-ignore ignore module augmentation tests
  theme: () => Dc({
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
      typography: D0(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Po({
        sx: r,
        theme: this
      });
    }, t;
  }
}), k2 = C2;
function E2({
  theme: e,
  ...t
}) {
  const n = p.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = nr in e ? e[nr] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ f.jsx(w2, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ f.jsx(k2, {
    theme: e,
    ...t
  });
}
function Oh(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function T2(e) {
  return ce("MuiSvgIcon", e);
}
ae("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const P2 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Z(t)}`, `fontSize${Z(n)}`]
  };
  return ue(o, T2, r);
}, R2 = U("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Z(n.color)}`], t[`fontSize${Z(n.fontSize)}`]];
  }
})(ye(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  ...lt(e, "fill", {
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
}))), Hd = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    viewBox: v = "0 0 24 24",
    ...d
  } = r, S = /* @__PURE__ */ p.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: u,
    viewBox: v,
    hasSvgAsChild: S
  }, C = {};
  u || (C.viewBox = v);
  const y = P2(b);
  return /* @__PURE__ */ f.jsxs(R2, {
    as: l,
    className: J(y.root, i),
    focusable: "false",
    color: c,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...C,
    ...d,
    ...S && o.props,
    ownerState: b,
    children: [S ? o.props.children : o, m ? /* @__PURE__ */ f.jsx("title", {
      children: m
    }) : null]
  });
});
Hd.muiName = "SvgIcon";
function xt(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ f.jsx(Hd, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = Hd.muiName, /* @__PURE__ */ p.memo(/* @__PURE__ */ p.forwardRef(n));
}
function Vd(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Aa(e) {
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
function G0(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function kp(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((c) => {
      G0(c, l[c]) && typeof s[c] == "function" && (a[c] = (...u) => {
        s[c](...u), l[c](...u);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, c = J(s?.className, l?.className, a?.className), u = n(a, l);
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
  const r = t, o = n(e, r), i = J(r?.className, e?.className);
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
const Ah = {};
function Ep(e, t) {
  const n = p.useRef(Ah);
  return n.current === Ah && (n.current = e(t)), n;
}
function I2(e) {
  const t = Ep(() => M2(e)).current;
  return t.next = e, st(t.effect), t;
}
function M2(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const jh = Vg.createContext(null);
function $2(e) {
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
function O2(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = $2(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function X0(e) {
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
    onEnter: v,
    onEntering: d,
    onEntered: S,
    onExit: b,
    onExiting: C,
    onExited: y,
    children: h,
    ...x
  } = e, w = p.useContext(jh), E = w && !w.isMounting ? r : n, [k, T] = p.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), P = p.useRef(k);
  P.current = k, t && k === "unmounted" && (P.current = "exited", T("exited"));
  const R = p.useRef(t && E), j = p.useRef(!1), $ = p.useRef(null), g = p.useRef(k), M = p.useRef(!1), I = p.useRef(c), O = I2({
    timeout: l,
    addEndListener: a,
    reduceMotion: c,
    getAutoTimeout: u,
    onEnter: v,
    onEntering: d,
    onEntered: S,
    onExit: b,
    onExiting: C,
    onExited: y,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: m,
    parentGroup: w
  }), L = p.useCallback(() => {
    $.current !== null && ($.current.cancel(), $.current = null);
  }, []), N = p.useCallback((_) => {
    let Q = !0;
    const G = () => {
      Q && (Q = !1, $.current = null, _());
    };
    return G.cancel = () => {
      Q = !1;
    }, $.current = G, G;
  }, []), A = p.useCallback((_, Q) => {
    let G;
    const X = () => {
      G !== void 0 && (clearTimeout(G), G = void 0);
    }, V = N(() => {
      X(), P.current = _, T(_);
    }), ee = V.cancel;
    V.cancel = () => {
      X(), ee();
    };
    const K = O.current.nodeRef.current, re = O.current.addEndListener, pe = O.current.getAutoTimeout !== void 0, ke = O.current.getAutoTimeout?.(), be = O2({
      currentStatus: Q,
      isAppearing: M.current,
      timeout: O.current.timeout,
      autoTimeout: ke
    }), he = I.current, le = be ?? (he && pe ? 0 : null), Oe = (We) => {
      G = setTimeout(V, We);
    };
    if (!K) {
      Oe(0);
      return;
    }
    if (re) {
      le != null && Oe(he ? 0 : le), re.length >= 2 ? re(K, V) : re(V);
      return;
    }
    Oe(he ? 0 : be ?? 0);
  }, [N, O]), z = p.useCallback((_) => {
    const Q = O.current, G = Q.parentGroup ? Q.parentGroup.isMounting : _;
    if (M.current = G, !_ && !Q.enter) {
      P.current = "entered", T("entered");
      return;
    }
    I.current = Q.reduceMotion, Q.onEnter?.(G), P.current = "entering", T("entering");
  }, [O]), F = p.useCallback(() => {
    const _ = O.current;
    if (!_.exit) {
      P.current = "exited", T("exited");
      return;
    }
    I.current = _.reduceMotion, _.onExit?.(), P.current = "exiting", T("exiting");
  }, [O]), W = p.useCallback((_, Q) => {
    if (L(), Q === "entering") {
      const G = O.current;
      if (G.mountOnEnter || G.unmountOnExit) {
        const X = G.nodeRef.current;
        X && Sp(X);
      }
      z(_);
    } else
      F();
  }, [L, z, F, O]);
  return st(() => (j.current = !0, R.current && (R.current = !1, W(!0, "entering")), () => {
    j.current = !1, L();
  }), [L, W]), st(() => {
    if (!j.current)
      return;
    const _ = P.current;
    t ? _ !== "entering" && _ !== "entered" && W(!1, "entering") : _ === "entering" || _ === "entered" ? W(!1, "exiting") : _ === "exited" && s && (P.current = "unmounted", T("unmounted"));
  }, [t, k, s, W]), st(() => {
    if (k === "unmounted" || g.current === "unmounted") {
      g.current = k;
      return;
    }
    const Q = g.current !== k;
    Q && (g.current = k);
    const G = O.current;
    k === "entering" ? (Q && G.onEntering?.(M.current), $.current === null && P.current === k && A("entered", "entering")) : k === "exiting" ? (Q && G.onExiting?.(), $.current === null && P.current === k && A("exited", "exiting")) : k === "entered" && Q ? G.onEntered?.(M.current) : k === "exited" && Q && G.onExited?.();
  }, [O, A, k]), k === "unmounted" ? null : /* @__PURE__ */ f.jsx(jh.Provider, {
    value: null,
    children: h(k, x)
  });
}
const Q0 = "(prefers-reduced-motion: reduce)", A2 = 0, j2 = "0ms", L2 = () => {
}, Lh = () => !1, N2 = () => !0, z2 = () => L2;
function B2(e) {
  const [t, n] = p.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), st(() => {
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
    const i = window.matchMedia(Q0), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const F2 = {
  ...ea
}, q0 = F2.useSyncExternalStore;
function D2(e) {
  const t = e ? N2 : Lh, [n, r] = p.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [Lh, z2];
    const o = window.matchMedia(Q0);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return q0(r, n, t);
}
const _2 = q0 !== void 0 ? D2 : B2;
function Kc(e, t) {
  const n = _2(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return p.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: A2,
        delay: j2
      } : o;
    }
  }), [r]);
}
function Z0(e, t, n) {
  return e === void 0 || Ia(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function J0(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function ja(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    G0(n, e[n]) && (t[n] = e[n]);
  return t;
}
function Nh(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ex(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const d = J(n?.className, i, o?.className, r?.className), S = {
      ...n?.style,
      ...o?.style,
      ...r?.style
    }, b = {
      ...n,
      ...o,
      ...r
    };
    return d.length > 0 && (b.className = d), Object.keys(S).length > 0 && (b.style = S), {
      props: b,
      internalRef: void 0
    };
  }
  const s = ja({
    ...o,
    ...r
  }), l = Nh(r), a = Nh(o), c = t(s), u = J(c?.className, n?.className, i, o?.className, r?.className), m = {
    ...c?.style,
    ...n?.style,
    ...o?.style,
    ...r?.style
  }, v = {
    ...c,
    ...n,
    ...a,
    ...l
  };
  return u.length > 0 && (v.className = u), Object.keys(m).length > 0 && (v.style = m), {
    props: v,
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
    ...v
  } = i, d = u[e] || r, S = J0(m[e], o), {
    props: {
      component: b,
      ...C
    },
    internalRef: y
  } = ex({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: S
  }), h = ct(y, S?.ref, t.ref), x = e === "root" ? b || c : b, w = Z0(d, {
    ...e === "root" && !c && !u[e] && s,
    ...e !== "root" && !u[e] && s,
    ...C,
    ...x && !l && {
      as: x
    },
    ...x && l && {
      component: x
    },
    ref: h
  }, o);
  return [d, w];
}
function W2(e) {
  return ce("MuiPaper", e);
}
ae("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const U2 = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ue(i, W2, o);
}, H2 = U("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(ye(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  ...lt(e, "box-shadow"),
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
}))), or = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiPaper"
  }), o = eo(), {
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
  }, v = U2(m);
  return /* @__PURE__ */ f.jsx(H2, {
    as: s,
    ownerState: m,
    className: J(v.root, i),
    ref: n,
    ...u,
    style: {
      ...c === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": o.vars.overlays?.[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ra("#fff", Wd(l))}, ${Ra("#fff", Wd(l))})`
        }
      },
      ...u.style
    }
  });
});
function La(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function V2(e) {
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
const K2 = {};
function Y2(e) {
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
  } = e, u = p.useRef(null), m = s === !0, v = V2({
    focusableWhenDisabled: m,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), d = p.useCallback(() => {
    const C = u.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), S = p.useMemo(() => {
    const C = m ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, m || (C.disabled = n)) : (C.role = "button", !m && n && (C["aria-disabled"] = n)), m ? {
      ...C,
      ...v
    } : C;
  }, [n, m, v, o, t, i, r]);
  return {
    getButtonProps: p.useCallback((C = K2) => {
      const {
        onClick: y,
        onKeyDown: h,
        onKeyUp: x,
        ...w
      } = C;
      return {
        ...S,
        ...w,
        onClick: (P) => {
          if (l && P.stopPropagation(), n) {
            P.preventDefault();
            return;
          }
          y?.(P);
        },
        onKeyDown: (P) => {
          if (m && v.onKeyDown(P), !n && (a?.(P), h?.(P), !(P.target !== P.currentTarget || d()))) {
            if (P.key === " ") {
              P.preventDefault();
              return;
            }
            P.key === "Enter" && (P.preventDefault(), P.currentTarget.click());
          }
        },
        onKeyUp: (P) => {
          n || (c?.(P), x?.(P), P.target === P.currentTarget && !d() && P.key === " " && !P.defaultPrevented && P.currentTarget.click());
        }
      };
    }, [S, n, m, v, d, a, c, l]),
    rootRef: u
  };
}
class Na {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Na();
  }
  static use() {
    const t = Ep(Na.create).current, [n, r] = p.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, p.useEffect(t.mountEffect, [n]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = X2(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function G2() {
  return Na.use();
}
function X2() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const Q2 = [];
function tx(e) {
  p.useEffect(e, Q2);
}
class Yc {
  static create() {
    return new Yc();
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
function Jn() {
  const e = Ep(Yc.create).current;
  return tx(e.disposeEffect), e;
}
function q2(e) {
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
  } = e, [u, m] = p.useState(!1), v = Jn(), d = p.useRef(!1), S = p.useRef(a);
  S.current = a;
  const b = a != null, C = J(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, h = J(n.child, u && n.childLeaving, r && n.childPulsate);
  return !l && !u && m(!0), p.useEffect(() => {
    !l && b ? d.current || (d.current = !0, v.start(c, () => {
      d.current = !1, S.current?.();
    })) : (d.current = !1, v.clear());
  }, [v, b, l, c]), /* @__PURE__ */ f.jsx("span", {
    className: C,
    style: y,
    children: /* @__PURE__ */ f.jsx("span", {
      className: h
    })
  });
}
const _t = ae("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Kd = 550, Z2 = 80, Tl = {}, zh = [], J2 = () => {
};
function zu(e, t) {
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
function eE({
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
const tE = Zs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, nE = Zs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, rE = Zs`
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
function oE(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = Bs`
    &.${_t.rippleVisible} {
      animation-name: ${tE};
      animation-duration: ${Kd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${_t.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${_t.childLeaving} {
      animation-name: ${nE};
      animation-duration: ${Kd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${_t.childPulsate} {
      animation-name: ${rE};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? Bs`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const iE = U("span", {
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
}), sE = U(q2, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${_t.rippleVisible} {
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
  & .${_t.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${_t.childLeaving} {
    opacity: 0;
  }

  & .${_t.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => oE(e)}
`, lE = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTouchRipple"
  }), o = eo(), i = Kc(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Tl,
    className: a,
    ...c
  } = r, [u, m] = p.useState({
    items: zh,
    order: zh
  }), v = u.items, d = p.useRef(0), S = p.useRef(null), b = p.useRef(!1);
  tx(() => (b.current = !0, () => {
    b.current = !1;
  })), p.useEffect(() => {
    S.current && (S.current(), S.current = null);
  }, [v]);
  const C = p.useRef(!1), y = Jn(), h = p.useRef(null), x = p.useRef(null), w = Qe(($) => {
    b.current && m((g) => {
      const M = g.items.filter((O) => O.key !== $), I = zu(g.order.filter((O) => O !== $), M.filter((O) => !O.exiting).map((O) => O.key));
      return {
        items: M,
        order: I
      };
    });
  }), E = Qe(($) => {
    const {
      pulsate: g,
      rippleX: M,
      rippleY: I,
      rippleSize: O,
      cb: L
    } = $, N = d.current;
    d.current += 1, m((A) => {
      const z = [...A.items, {
        key: N,
        pulsate: g,
        rippleX: M,
        rippleY: I,
        rippleSize: O,
        exiting: !1
      }];
      return {
        items: z,
        order: zu(A.order, z.filter((F) => !F.exiting).map((F) => F.key))
      };
    }), S.current = L;
  }), k = Qe(($ = Tl, g = Tl, M = J2) => {
    const {
      pulsate: I = !1,
      center: O = s || g.pulsate,
      fakeElement: L = !1
      // Used only by tests.
    } = g;
    if ($?.type === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    $?.type === "touchstart" && (C.current = !0);
    const N = L ? null : x.current, {
      rippleX: A,
      rippleY: z,
      rippleSize: F
    } = eE({
      event: $,
      element: N,
      center: O
    });
    $?.touches ? h.current === null && (h.current = () => {
      E({
        pulsate: I,
        rippleX: A,
        rippleY: z,
        rippleSize: F,
        cb: M
      });
    }, y.start(Z2, () => {
      h.current && (h.current(), h.current = null);
    })) : E({
      pulsate: I,
      rippleX: A,
      rippleY: z,
      rippleSize: F,
      cb: M
    });
  }), T = Qe(() => {
    k(Tl, {
      pulsate: !0
    });
  }), P = Qe(($, g) => {
    if (y.clear(), $?.type === "touchend" && h.current) {
      h.current(), h.current = null, y.start(0, () => {
        P($, g);
      });
      return;
    }
    h.current = null, m((M) => {
      const I = M.items.findIndex((L) => !L.exiting);
      if (I === -1)
        return M;
      const O = M.items.slice();
      return O[I] = {
        ...O[I],
        exiting: !0
      }, {
        items: O,
        order: zu(M.order, O.filter((L) => !L.exiting).map((L) => L.key))
      };
    }), S.current = g;
  });
  p.useImperativeHandle(n, () => ({
    pulsate: T,
    start: k,
    stop: P
  }), [T, k, P]);
  const R = new Map(v.map(($) => [$.key, $])), j = u.order.map(($) => R.get($)).filter(Boolean);
  return /* @__PURE__ */ f.jsx(iE, {
    className: J(_t.root, l.root, a),
    ref: x,
    ...c,
    children: j.map(($) => /* @__PURE__ */ f.jsx(sE, {
      classes: {
        ripple: J(l.ripple, _t.ripple),
        rippleVisible: J(l.rippleVisible, _t.rippleVisible),
        ripplePulsate: J(l.ripplePulsate, _t.ripplePulsate),
        child: J(l.child, _t.child),
        childLeaving: J(l.childLeaving, _t.childLeaving),
        childPulsate: J(l.childPulsate, _t.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : Kd,
      pulsate: $.pulsate,
      rippleX: $.rippleX,
      rippleY: $.rippleY,
      rippleSize: $.rippleSize,
      in: !$.exiting,
      onExited: () => w($.key)
    }, $.key))
  });
});
function aE(e) {
  return ce("MuiButtonBase", e);
}
const cE = ae("MuiButtonBase", ["root", "disabled", "focusVisible"]), uE = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = ue({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, aE, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, dE = U("button", {
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
  [`&.${cE.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Qr = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    focusRipple: v = !1,
    focusVisibleClassName: d,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: S,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: b = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: C,
    /* eslint-enable react/prop-types */
    LinkComponent: y = "a",
    nativeButton: h,
    onBlur: x,
    onClick: w,
    onContextMenu: E,
    onDragLeave: k,
    onFocus: T,
    onFocusVisible: P,
    onKeyDown: R,
    onKeyUp: j,
    onMouseDown: $,
    onMouseLeave: g,
    onMouseUp: M,
    onTouchEnd: I,
    onTouchMove: O,
    onTouchStart: L,
    tabIndex: N = 0,
    TouchRippleProps: A,
    touchRippleRef: z,
    type: F,
    ...W
  } = r, _ = !!(W.href || W.to), Q = !!W.formAction;
  let G = a;
  G === "button" && _ && (G = y);
  const V = h ?? (typeof G == "string" ? G === "button" : C ?? !1), ee = G2(), K = ct(ee.ref, z), [re, pe] = p.useState(!1);
  (c || b) && re && pe(!1);
  const ke = Qe((Ue) => {
    v && !Ue.repeat && re && Ue.key === " " && ee.stop(Ue, () => {
      ee.start(Ue);
    });
  }), be = Qe((Ue) => {
    v && Ue.key === " " && re && !Ue.defaultPrevented && ee.stop(Ue, () => {
      ee.pulsate(Ue);
    });
  }), {
    getButtonProps: he,
    rootRef: le
  } = Y2({
    nativeButton: V,
    disabled: c,
    type: F,
    hasFormAction: Q,
    tabIndex: N,
    onBeforeKeyDown: ke,
    onBeforeKeyUp: be
  }), {
    onClick: Oe,
    onKeyDown: We,
    onKeyUp: Re,
    ...Le
  } = he({
    onClick: w,
    onKeyDown: R,
    onKeyUp: j
  });
  p.useImperativeHandle(o, () => ({
    focusVisible: () => {
      pe(!0), le.current.focus();
    }
  }), [le]);
  const de = ee.shouldMount && !u && !c;
  p.useEffect(() => {
    re && v && !u && ee.pulsate();
  }, [u, v, re, ee]);
  const Te = dr(ee, "start", $, m), Je = dr(ee, "stop", E, m), ge = dr(ee, "stop", k, m), Se = dr(ee, "stop", M, m), Ne = dr(ee, "stop", (Ue) => {
    re && Ue.preventDefault(), g && g(Ue);
  }, m), Ke = dr(ee, "start", L, m), xe = dr(ee, "stop", I, m), oe = dr(ee, "stop", O, m), Ce = dr(ee, "stop", (Ue) => {
    La(Ue.target) || pe(!1), x && x(Ue);
  }, !1), Ye = Qe((Ue) => {
    le.current || (le.current = Ue.currentTarget), !b && La(Ue.target) && (pe(!0), P && P(Ue)), T && T(Ue);
  }), fe = {};
  _ && (fe.tabIndex = c ? -1 : N, c && (fe["aria-disabled"] = c), fe.type = F);
  const nt = ct(n, le), rt = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: c,
    disableRipple: u,
    disableTouchRipple: m,
    focusRipple: v,
    suppressFocusVisible: b,
    tabIndex: N,
    focusVisible: re
  }, vn = uE(rt);
  return /* @__PURE__ */ f.jsxs(dE, {
    as: G,
    className: J(vn.root, l),
    ownerState: rt,
    onBlur: Ce,
    onClick: Oe,
    onContextMenu: Je,
    onFocus: Ye,
    onKeyDown: We,
    onKeyUp: Re,
    onMouseDown: Te,
    onMouseLeave: Ne,
    onMouseUp: Se,
    onDragLeave: ge,
    onTouchEnd: xe,
    onTouchMove: oe,
    onTouchStart: Ke,
    ref: nt,
    ..._ ? fe : Le,
    ...W,
    children: [s, de ? /* @__PURE__ */ f.jsx(lE, {
      ref: K,
      center: i,
      ...A
    }) : null]
  });
});
function dr(e, t, n, r = !1) {
  return Qe((o) => (n && n(o), r || e[t](o), !0));
}
function fE(e) {
  return typeof e.main == "string";
}
function pE(e, t = []) {
  if (!fE(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Wt(e = []) {
  return ([, t]) => t && pE(t, e);
}
function mE(e) {
  return ce("MuiCircularProgress", e);
}
ae("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const jn = 44, Yd = Zs`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Gd = Zs`
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
`, hE = typeof Yd != "string" ? Bs`
        animation: ${Yd} 1.4s linear infinite;
      ` : null, gE = typeof Gd != "string" ? Bs`
        animation: ${Gd} 1.4s ease-in-out infinite;
      ` : null, yE = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${Z(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return ue(i, mE, t);
}, vE = U("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${Z(n.color)}`]];
  }
})(ye(({
  theme: e
}) => {
  const t = bp(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...lt(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: hE || {
        animation: `${Yd} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Wt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), xE = U("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), SE = U("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(ye(({
  theme: e
}) => {
  const t = bp(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...lt(e, "stroke-dashoffset")
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
      style: gE || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${Gd} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), bE = U("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(ye(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), uo = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    thickness: v = 3.6,
    value: d = r.min ?? 0,
    variant: S = "indeterminate",
    ...b
  } = r, C = a ?? 0, y = c ?? 100, h = {
    ...r,
    color: i,
    disableShrink: s,
    size: u,
    thickness: v,
    value: d,
    variant: S,
    enableTrackSlot: l
  }, x = yE(h), w = {}, E = {}, k = {};
  if (S === "determinate") {
    const T = 2 * Math.PI * ((jn - v) / 2), P = y - C;
    w.strokeDasharray = T.toFixed(3), w.strokeDashoffset = P > 0 ? `${((y - d) / P * T).toFixed(3)}px` : `${T.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = d, k["aria-valuemin"] = C, k["aria-valuemax"] = y;
  }
  return /* @__PURE__ */ f.jsx(vE, {
    className: J(x.root, o),
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
    children: /* @__PURE__ */ f.jsxs(xE, {
      className: x.svg,
      ownerState: h,
      viewBox: `${jn / 2} ${jn / 2} ${jn} ${jn}`,
      children: [l ? /* @__PURE__ */ f.jsx(bE, {
        className: x.track,
        ownerState: h,
        cx: jn,
        cy: jn,
        r: (jn - v) / 2,
        fill: "none",
        strokeWidth: v,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ f.jsx(SE, {
        className: x.circle,
        style: w,
        ownerState: h,
        cx: jn,
        cy: jn,
        r: (jn - v) / 2,
        fill: "none",
        strokeWidth: v
      })]
    })
  });
});
function wE(e) {
  return ce("MuiIconButton", e);
}
const Bh = ae("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), CE = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${Z(r)}`, o && `edge${Z(o)}`, `size${Z(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return ue(l, wE, t);
}, kE = U(Qr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${Z(n.color)}`], n.edge && t[`edge${Z(n.edge)}`], t[`size${Z(n.size)}`]];
  }
})(ye(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  ...lt(e, "background-color", {
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
})), ye(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Wt()).map(([t]) => ({
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
  [`&.${Bh.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Bh.loading}`]: {
    color: "transparent"
  }
}))), EE = U("span", {
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
})), Wo = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    loading: v = null,
    loadingIndicator: d,
    ...S
  } = r, b = kr(m), C = d ?? /* @__PURE__ */ f.jsx(uo, {
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
  }, h = CE(y);
  return /* @__PURE__ */ f.jsxs(kE, {
    id: v ? b : m,
    className: J(h.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !c,
    disabled: a || v,
    ref: n,
    ...S,
    ownerState: y,
    children: [typeof v == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ f.jsx("span", {
      className: h.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ f.jsx(EE, {
        className: h.loadingIndicator,
        ownerState: y,
        children: v && C
      })
    }), i]
  });
});
function TE(e) {
  return ce("MuiTypography", e);
}
ae("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const PE = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${Z(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return ue(s, TE, i);
}, RE = U("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${Z(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(ye(({
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
  })), ...Object.entries(e.palette).filter(Wt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
    props: {
      color: `text${Z(t)}`
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
}))), Fh = {
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
}, Ve = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    variantMapping: m = Fh,
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
    variantMapping: m
  }, S = l || m[u] || Fh[u] || "span", b = PE(d);
  return /* @__PURE__ */ f.jsx(RE, {
    as: S,
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
var Jt = "top", In = "bottom", Mn = "right", en = "left", Tp = "auto", tl = [Jt, In, Mn, en], wi = "start", _s = "end", IE = "clippingParents", nx = "viewport", Vi = "popper", ME = "reference", Dh = /* @__PURE__ */ tl.reduce(function(e, t) {
  return e.concat([t + "-" + wi, t + "-" + _s]);
}, []), rx = /* @__PURE__ */ [].concat(tl, [Tp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + wi, t + "-" + _s]);
}, []), $E = "beforeRead", OE = "read", AE = "afterRead", jE = "beforeMain", LE = "main", NE = "afterMain", zE = "beforeWrite", BE = "write", FE = "afterWrite", DE = [$E, OE, AE, jE, LE, NE, zE, BE, FE];
function sr(e) {
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
function Tn(e) {
  var t = mn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Pp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = mn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function _E(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Tn(i) || !sr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function WE(e) {
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
      !Tn(o) || !sr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const UE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: _E,
  effect: WE,
  requires: ["computeStyles"]
};
function ir(e) {
  return e.split("-")[0];
}
var So = Math.max, za = Math.min, Ci = Math.round;
function Xd() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ox() {
  return !/^((?!chrome|android).)*safari/i.test(Xd());
}
function ki(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Tn(e) && (o = e.offsetWidth > 0 && Ci(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ci(r.height) / e.offsetHeight || 1);
  var s = Ro(e) ? mn(e) : window, l = s.visualViewport, a = !ox() && n, c = (r.left + (a && l ? l.offsetLeft : 0)) / o, u = (r.top + (a && l ? l.offsetTop : 0)) / i, m = r.width / o, v = r.height / i;
  return {
    width: m,
    height: v,
    top: u,
    right: c + m,
    bottom: u + v,
    left: c,
    x: c,
    y: u
  };
}
function Rp(e) {
  var t = ki(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ix(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Pp(n)) {
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
  return mn(e).getComputedStyle(e);
}
function HE(e) {
  return ["table", "td", "th"].indexOf(sr(e)) >= 0;
}
function to(e) {
  return ((Ro(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Gc(e) {
  return sr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Pp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    to(e)
  );
}
function _h(e) {
  return !Tn(e) || // https://github.com/popperjs/popper-core/issues/837
  Er(e).position === "fixed" ? null : e.offsetParent;
}
function VE(e) {
  var t = /firefox/i.test(Xd()), n = /Trident/i.test(Xd());
  if (n && Tn(e)) {
    var r = Er(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Gc(e);
  for (Pp(o) && (o = o.host); Tn(o) && ["html", "body"].indexOf(sr(o)) < 0; ) {
    var i = Er(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function nl(e) {
  for (var t = mn(e), n = _h(e); n && HE(n) && Er(n).position === "static"; )
    n = _h(n);
  return n && (sr(n) === "html" || sr(n) === "body" && Er(n).position === "static") ? t : n || VE(e) || t;
}
function Ip(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fs(e, t, n) {
  return So(e, za(t, n));
}
function KE(e, t, n) {
  var r = fs(e, t, n);
  return r > n ? n : r;
}
function sx() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function lx(e) {
  return Object.assign({}, sx(), e);
}
function ax(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var YE = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, lx(typeof t != "number" ? t : ax(t, tl));
};
function GE(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = ir(n.placement), a = Ip(l), c = [en, Mn].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!i || !s)) {
    var m = YE(o.padding, n), v = Rp(i), d = a === "y" ? Jt : en, S = a === "y" ? In : Mn, b = n.rects.reference[u] + n.rects.reference[a] - s[a] - n.rects.popper[u], C = s[a] - n.rects.reference[a], y = nl(i), h = y ? a === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, x = b / 2 - C / 2, w = m[d], E = h - v[u] - m[S], k = h / 2 - v[u] / 2 + x, T = fs(w, k, E), P = a;
    n.modifiersData[r] = (t = {}, t[P] = T, t.centerOffset = T - k, t);
  }
}
function XE(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || ix(t.elements.popper, o) && (t.elements.arrow = o));
}
const QE = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: GE,
  effect: XE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ei(e) {
  return e.split("-")[1];
}
var qE = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ZE(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ci(n * o) / o || 0,
    y: Ci(r * o) / o || 0
  };
}
function Wh(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, m = e.isFixed, v = s.x, d = v === void 0 ? 0 : v, S = s.y, b = S === void 0 ? 0 : S, C = typeof u == "function" ? u({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  d = C.x, b = C.y;
  var y = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), x = en, w = Jt, E = window;
  if (c) {
    var k = nl(n), T = "clientHeight", P = "clientWidth";
    if (k === mn(n) && (k = to(n), Er(k).position !== "static" && l === "absolute" && (T = "scrollHeight", P = "scrollWidth")), k = k, o === Jt || (o === en || o === Mn) && i === _s) {
      w = In;
      var R = m && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      b -= R - r.height, b *= a ? 1 : -1;
    }
    if (o === en || (o === Jt || o === In) && i === _s) {
      x = Mn;
      var j = m && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[P]
      );
      d -= j - r.width, d *= a ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: l
  }, c && qE), g = u === !0 ? ZE({
    x: d,
    y: b
  }, mn(n)) : {
    x: d,
    y: b
  };
  if (d = g.x, b = g.y, a) {
    var M;
    return Object.assign({}, $, (M = {}, M[w] = h ? "0" : "", M[x] = y ? "0" : "", M.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", M));
  }
  return Object.assign({}, $, (t = {}, t[w] = h ? b + "px" : "", t[x] = y ? d + "px" : "", t.transform = "", t));
}
function JE(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: ir(t.placement),
    variation: Ei(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Wh(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Wh(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const eT = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: JE,
  data: {}
};
var Pl = {
  passive: !0
};
function tT(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = mn(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, Pl);
  }), l && a.addEventListener("resize", n.update, Pl), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, Pl);
    }), l && a.removeEventListener("resize", n.update, Pl);
  };
}
const nT = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: tT,
  data: {}
};
var rT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zl(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return rT[t];
  });
}
var oT = {
  start: "end",
  end: "start"
};
function Uh(e) {
  return e.replace(/start|end/g, function(t) {
    return oT[t];
  });
}
function Mp(e) {
  var t = mn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function $p(e) {
  return ki(to(e)).left + Mp(e).scrollLeft;
}
function iT(e, t) {
  var n = mn(e), r = to(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = ox();
    (c || !c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + $p(e),
    y: a
  };
}
function sT(e) {
  var t, n = to(e), r = Mp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = So(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = So(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + $p(e), a = -r.scrollTop;
  return Er(o || n).direction === "rtl" && (l += So(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Op(e) {
  var t = Er(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function cx(e) {
  return ["html", "body", "#document"].indexOf(sr(e)) >= 0 ? e.ownerDocument.body : Tn(e) && Op(e) ? e : cx(Gc(e));
}
function ps(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = cx(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = mn(r), s = o ? [i].concat(i.visualViewport || [], Op(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(ps(Gc(s)))
  );
}
function Qd(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function lT(e, t) {
  var n = ki(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Hh(e, t, n) {
  return t === nx ? Qd(iT(e, n)) : Ro(t) ? lT(t, n) : Qd(sT(to(e)));
}
function aT(e) {
  var t = ps(Gc(e)), n = ["absolute", "fixed"].indexOf(Er(e).position) >= 0, r = n && Tn(e) ? nl(e) : e;
  return Ro(r) ? t.filter(function(o) {
    return Ro(o) && ix(o, r) && sr(o) !== "body";
  }) : [];
}
function cT(e, t, n, r) {
  var o = t === "clippingParents" ? aT(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, c) {
    var u = Hh(e, c, r);
    return a.top = So(u.top, a.top), a.right = za(u.right, a.right), a.bottom = za(u.bottom, a.bottom), a.left = So(u.left, a.left), a;
  }, Hh(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ux(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ir(r) : null, i = r ? Ei(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case Jt:
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
    case en:
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
  var c = o ? Ip(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case wi:
        a[c] = a[c] - (t[u] / 2 - n[u] / 2);
        break;
      case _s:
        a[c] = a[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return a;
}
function Ws(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? IE : l, c = n.rootBoundary, u = c === void 0 ? nx : c, m = n.elementContext, v = m === void 0 ? Vi : m, d = n.altBoundary, S = d === void 0 ? !1 : d, b = n.padding, C = b === void 0 ? 0 : b, y = lx(typeof C != "number" ? C : ax(C, tl)), h = v === Vi ? ME : Vi, x = e.rects.popper, w = e.elements[S ? h : v], E = cT(Ro(w) ? w : w.contextElement || to(e.elements.popper), a, u, s), k = ki(e.elements.reference), T = ux({
    reference: k,
    element: x,
    placement: o
  }), P = Qd(Object.assign({}, x, T)), R = v === Vi ? P : k, j = {
    top: E.top - R.top + y.top,
    bottom: R.bottom - E.bottom + y.bottom,
    left: E.left - R.left + y.left,
    right: R.right - E.right + y.right
  }, $ = e.modifiersData.offset;
  if (v === Vi && $) {
    var g = $[o];
    Object.keys(j).forEach(function(M) {
      var I = [Mn, In].indexOf(M) >= 0 ? 1 : -1, O = [Jt, In].indexOf(M) >= 0 ? "y" : "x";
      j[M] += g[O] * I;
    });
  }
  return j;
}
function uT(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? rx : a, u = Ei(r), m = u ? l ? Dh : Dh.filter(function(S) {
    return Ei(S) === u;
  }) : tl, v = m.filter(function(S) {
    return c.indexOf(S) >= 0;
  });
  v.length === 0 && (v = m);
  var d = v.reduce(function(S, b) {
    return S[b] = Ws(e, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[ir(b)], S;
  }, {});
  return Object.keys(d).sort(function(S, b) {
    return d[S] - d[b];
  });
}
function dT(e) {
  if (ir(e) === Tp)
    return [];
  var t = Zl(e);
  return [Uh(e), t, Uh(t)];
}
function fT(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, c = n.padding, u = n.boundary, m = n.rootBoundary, v = n.altBoundary, d = n.flipVariations, S = d === void 0 ? !0 : d, b = n.allowedAutoPlacements, C = t.options.placement, y = ir(C), h = y === C, x = a || (h || !S ? [Zl(C)] : dT(C)), w = [C].concat(x).reduce(function(G, X) {
      return G.concat(ir(X) === Tp ? uT(t, {
        placement: X,
        boundary: u,
        rootBoundary: m,
        padding: c,
        flipVariations: S,
        allowedAutoPlacements: b
      }) : X);
    }, []), E = t.rects.reference, k = t.rects.popper, T = /* @__PURE__ */ new Map(), P = !0, R = w[0], j = 0; j < w.length; j++) {
      var $ = w[j], g = ir($), M = Ei($) === wi, I = [Jt, In].indexOf(g) >= 0, O = I ? "width" : "height", L = Ws(t, {
        placement: $,
        boundary: u,
        rootBoundary: m,
        altBoundary: v,
        padding: c
      }), N = I ? M ? Mn : en : M ? In : Jt;
      E[O] > k[O] && (N = Zl(N));
      var A = Zl(N), z = [];
      if (i && z.push(L[g] <= 0), l && z.push(L[N] <= 0, L[A] <= 0), z.every(function(G) {
        return G;
      })) {
        R = $, P = !1;
        break;
      }
      T.set($, z);
    }
    if (P)
      for (var F = S ? 3 : 1, W = function(X) {
        var V = w.find(function(ee) {
          var K = T.get(ee);
          if (K)
            return K.slice(0, X).every(function(re) {
              return re;
            });
        });
        if (V)
          return R = V, "break";
      }, _ = F; _ > 0; _--) {
        var Q = W(_);
        if (Q === "break") break;
      }
    t.placement !== R && (t.modifiersData[r]._skip = !0, t.placement = R, t.reset = !0);
  }
}
const pT = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fT,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Vh(e, t, n) {
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
function Kh(e) {
  return [Jt, Mn, In, en].some(function(t) {
    return e[t] >= 0;
  });
}
function mT(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Ws(t, {
    elementContext: "reference"
  }), l = Ws(t, {
    altBoundary: !0
  }), a = Vh(s, r), c = Vh(l, o, i), u = Kh(a), m = Kh(c);
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
const hT = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: mT
};
function gT(e, t, n) {
  var r = ir(e), o = [en, Jt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [en, Mn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function yT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = rx.reduce(function(u, m) {
    return u[m] = gT(m, t.rects, i), u;
  }, {}), l = s[t.placement], a = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
const vT = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: yT
};
function xT(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ux({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const ST = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: xT,
  data: {}
};
function bT(e) {
  return e === "x" ? "y" : "x";
}
function wT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, c = n.rootBoundary, u = n.altBoundary, m = n.padding, v = n.tether, d = v === void 0 ? !0 : v, S = n.tetherOffset, b = S === void 0 ? 0 : S, C = Ws(t, {
    boundary: a,
    rootBoundary: c,
    padding: m,
    altBoundary: u
  }), y = ir(t.placement), h = Ei(t.placement), x = !h, w = Ip(y), E = bT(w), k = t.modifiersData.popperOffsets, T = t.rects.reference, P = t.rects.popper, R = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, j = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, g = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var M, I = w === "y" ? Jt : en, O = w === "y" ? In : Mn, L = w === "y" ? "height" : "width", N = k[w], A = N + C[I], z = N - C[O], F = d ? -P[L] / 2 : 0, W = h === wi ? T[L] : P[L], _ = h === wi ? -P[L] : -T[L], Q = t.elements.arrow, G = d && Q ? Rp(Q) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sx(), V = X[I], ee = X[O], K = fs(0, T[L], G[L]), re = x ? T[L] / 2 - F - K - V - j.mainAxis : W - K - V - j.mainAxis, pe = x ? -T[L] / 2 + F + K + ee + j.mainAxis : _ + K + ee + j.mainAxis, ke = t.elements.arrow && nl(t.elements.arrow), be = ke ? w === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, he = (M = $?.[w]) != null ? M : 0, le = N + re - he - be, Oe = N + pe - he, We = fs(d ? za(A, le) : A, N, d ? So(z, Oe) : z);
      k[w] = We, g[w] = We - N;
    }
    if (l) {
      var Re, Le = w === "x" ? Jt : en, de = w === "x" ? In : Mn, Te = k[E], Je = E === "y" ? "height" : "width", ge = Te + C[Le], Se = Te - C[de], Ne = [Jt, en].indexOf(y) !== -1, Ke = (Re = $?.[E]) != null ? Re : 0, xe = Ne ? ge : Te - T[Je] - P[Je] - Ke + j.altAxis, oe = Ne ? Te + T[Je] + P[Je] - Ke - j.altAxis : Se, Ce = d && Ne ? KE(xe, Te, oe) : fs(d ? xe : ge, Te, d ? oe : Se);
      k[E] = Ce, g[E] = Ce - Te;
    }
    t.modifiersData[r] = g;
  }
}
const CT = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: wT,
  requiresIfExists: ["offset"]
};
function kT(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ET(e) {
  return e === mn(e) || !Tn(e) ? Mp(e) : kT(e);
}
function TT(e) {
  var t = e.getBoundingClientRect(), n = Ci(t.width) / e.offsetWidth || 1, r = Ci(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function PT(e, t, n) {
  n === void 0 && (n = !1);
  var r = Tn(t), o = Tn(t) && TT(t), i = to(t), s = ki(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((sr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Op(i)) && (l = ET(t)), Tn(t) ? (a = ki(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = $p(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function RT(e) {
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
function IT(e) {
  var t = RT(e);
  return DE.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function MT(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function $T(e) {
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
var Yh = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Gh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function OT(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? Yh : o;
  return function(l, a, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Yh, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, m = [], v = !1, d = {
      state: u,
      setOptions: function(y) {
        var h = typeof y == "function" ? y(u.options) : y;
        b(), u.options = Object.assign({}, i, u.options, h), u.scrollParents = {
          reference: Ro(l) ? ps(l) : l.contextElement ? ps(l.contextElement) : [],
          popper: ps(a)
        };
        var x = IT($T([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = x.filter(function(w) {
          return w.enabled;
        }), S(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var y = u.elements, h = y.reference, x = y.popper;
          if (Gh(h, x)) {
            u.rects = {
              reference: PT(h, nl(x), u.options.strategy === "fixed"),
              popper: Rp(x)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(j) {
              return u.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var w = 0; w < u.orderedModifiers.length; w++) {
              if (u.reset === !0) {
                u.reset = !1, w = -1;
                continue;
              }
              var E = u.orderedModifiers[w], k = E.fn, T = E.options, P = T === void 0 ? {} : T, R = E.name;
              typeof k == "function" && (u = k({
                state: u,
                options: P,
                name: R,
                instance: d
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: MT(function() {
        return new Promise(function(C) {
          d.forceUpdate(), C(u);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Gh(l, a))
      return d;
    d.setOptions(c).then(function(C) {
      !v && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function S() {
      u.orderedModifiers.forEach(function(C) {
        var y = C.name, h = C.options, x = h === void 0 ? {} : h, w = C.effect;
        if (typeof w == "function") {
          var E = w({
            state: u,
            name: y,
            instance: d,
            options: x
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
var AT = [nT, ST, eT, UE, vT, pT, CT, QE, hT], jT = /* @__PURE__ */ OT({
  defaultModifiers: AT
});
function Ti(e) {
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : J0(n, r), {
    props: l,
    internalRef: a
  } = ex({
    ...i,
    externalSlotProps: s
  }), c = ct(a, s?.ref, e.additionalProps?.ref);
  return Z0(t, {
    ...l,
    ref: c
  }, r);
}
function Oo(e) {
  return parseInt(p.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
function LT(e) {
  return typeof e == "function" ? e() : e;
}
const dx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = p.useState(null), a = ct(/* @__PURE__ */ p.isValidElement(r) ? Oo(r) : null, n);
  if (st(() => {
    i || l(LT(o) || document.body);
  }, [o, i]), st(() => {
    if (s && !i)
      return Vd(n, s), () => {
        Vd(n, null);
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
  return s && /* @__PURE__ */ Gv.createPortal(r, s);
});
function NT(e) {
  return ce("MuiPopper", e);
}
ae("MuiPopper", ["root"]);
function zT(e, t) {
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
function fx(e) {
  return typeof e == "function" ? e() : e;
}
function BT(e) {
  return e.nodeType !== void 0;
}
const FT = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, NT, t);
}, DT = {}, _T = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    slotProps: v = {},
    slots: d = {},
    TransitionProps: S,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, y = p.useRef(null), h = ct(y, n), x = p.useRef(null), w = ct(x, m), E = p.useRef(w);
  st(() => {
    E.current = w;
  }, [w]), p.useImperativeHandle(m, () => x.current, []);
  const k = zT(c, i), [T, P] = p.useState(k), R = p.useMemo(() => fx(r), [r]);
  p.useEffect(() => {
    x.current && x.current.forceUpdate();
  }), st(() => {
    if (!R || !a)
      return;
    const I = (A) => {
      P(A.placement);
    };
    let O = [{
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
        state: A
      }) => {
        I(A);
      }
    }];
    l != null && (O = O.concat(l)), u && u.modifiers != null && (O = O.concat(u.modifiers));
    const L = jT(R, y.current, {
      placement: k,
      ...u,
      modifiers: O
    });
    E.current(L);
    const N = y.current;
    return () => {
      if (N) {
        const {
          style: A
        } = N, z = A.position, F = A.top, W = A.left, _ = A.transform;
        L.destroy(), A.position = z, A.top = F, A.left = W, A.transform = _;
      } else
        L.destroy();
      E.current(null);
    };
  }, [R, s, l, a, u, k]);
  const j = {
    placement: T
  };
  S !== null && (j.TransitionProps = S);
  const $ = FT(t), g = d.root ?? "div", M = Ti({
    elementType: g,
    externalSlotProps: v.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: h
    },
    ownerState: t,
    className: $.root
  });
  return /* @__PURE__ */ f.jsx(g, {
    ...M,
    children: typeof o == "function" ? o(j) : o
  });
}), WT = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    popperOptions: v = DT,
    popperRef: d,
    style: S,
    transition: b = !1,
    slotProps: C = {},
    slots: y = {},
    ...h
  } = t, [x, w] = p.useState(!0), E = () => {
    w(!1);
  }, k = () => {
    w(!0);
  };
  if (!a && !u && (!b || x))
    return null;
  let T;
  if (i)
    T = i;
  else if (r) {
    const j = fx(r);
    T = j && BT(j) ? dt(j).body : dt(null).body;
  }
  const P = !u && a && (!b || x) ? "none" : void 0, R = b ? {
    in: u,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ f.jsx(dx, {
    disablePortal: l,
    container: T,
    children: /* @__PURE__ */ f.jsx(_T, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: c,
      ref: n,
      open: b ? !x : u,
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
        display: P,
        ...S
      },
      TransitionProps: R,
      children: o
    })
  });
}), UT = U(WT, {
  name: "MuiPopper",
  slot: "Root"
})({}), px = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = Fc(), o = me({
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
    placement: v,
    popperOptions: d,
    popperRef: S,
    transition: b,
    slots: C,
    slotProps: y,
    ...h
  } = o, x = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: u,
    open: m,
    placement: v,
    popperOptions: d,
    popperRef: S,
    transition: b,
    ...h
  };
  return /* @__PURE__ */ f.jsx(UT, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: y,
    ...x,
    ref: n
  });
}), HT = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function VT(e) {
  return ce("MuiChip", e);
}
const ze = ae("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), KT = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: i,
    clickable: s,
    variant: l
  } = e, a = {
    root: ["root", l, n && "disabled", `size${Z(r)}`, `color${Z(o)}`, s && "clickable", i && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return ue(a, VT, t);
}, YT = U("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => Kt(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
    }, t.root, t[`size${Z(s)}`], t[`color${Z(r)}`], o && t.clickable, i && t.deletable, t[l]];
  }
})(ye(({
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
    ...lt(e, ["background-color", "box-shadow"]),
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
    }, ...Object.entries(e.palette).filter(Wt(["contrastText"])).map(([n]) => ({
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
      style: {
        [`&.${ze.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(Wt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
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
        [`&.${ze.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Wt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${ze.focusVisible}`]: {
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
        [`&.${ze.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${ze.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
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
    }, ...Object.entries(e.palette).filter(Wt()).map(([n]) => ({
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
        [`&.${ze.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
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
})), GT = U("span", {
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
function Xh(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Ki = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    label: v,
    onClick: d,
    onDelete: S,
    onKeyDown: b,
    onKeyUp: C,
    size: y = "medium",
    variant: h = "filled",
    tabIndex: x,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: E = {},
    slotProps: k = {},
    ...T
  } = r, {
    nativeButton: P,
    ...R
  } = T, j = p.useRef(null), $ = ct(j, n), g = (K) => {
    K.stopPropagation(), S(K);
  }, M = (K) => {
    K.currentTarget === K.target && Xh(K) && K.preventDefault(), b && b(K);
  }, I = (K) => {
    K.currentTarget === K.target && S && Xh(K) && S(K), C && C(K);
  }, O = s !== !1 && d ? !0 : s, L = O || S ? Qr : a || "div", N = {
    ...r,
    component: L,
    disabled: u,
    size: y,
    color: l,
    iconColor: /* @__PURE__ */ p.isValidElement(m) && m.props.color || l,
    onDelete: !!S,
    clickable: O,
    variant: h
  }, A = KT(N), z = L === Qr ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: A.focusVisible,
    ...S && {
      disableRipple: !0
    },
    ...P !== void 0 && {
      nativeButton: P
    }
  } : {};
  let F = null;
  S && (F = c && /* @__PURE__ */ p.isValidElement(c) ? /* @__PURE__ */ p.cloneElement(c, {
    className: J(c.props.className, A.deleteIcon),
    onClick: g
  }) : /* @__PURE__ */ f.jsx(HT, {
    className: A.deleteIcon,
    onClick: g
  }));
  let W = null;
  o && /* @__PURE__ */ p.isValidElement(o) && (W = /* @__PURE__ */ p.cloneElement(o, {
    className: J(A.avatar, o.props.className)
  }));
  let _ = null;
  m && /* @__PURE__ */ p.isValidElement(m) && (_ = /* @__PURE__ */ p.cloneElement(m, {
    className: J(A.icon, m.props.className)
  }));
  const Q = {
    slots: E,
    slotProps: k
  }, [G, X] = ve("root", {
    elementType: YT,
    externalForwardedProps: {
      ...Q,
      ...R
    },
    ownerState: N,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: $,
    className: J(A.root, i),
    additionalProps: {
      disabled: O && u ? !0 : void 0,
      tabIndex: w && u ? -1 : x,
      ...z
    },
    getSlotProps: (K) => ({
      ...K,
      onClick: (re) => {
        K.onClick?.(re), d?.(re);
      },
      onKeyDown: (re) => {
        K.onKeyDown?.(re), M(re);
      },
      onKeyUp: (re) => {
        K.onKeyUp?.(re), I(re);
      }
    })
  }), [V, ee] = ve("label", {
    elementType: GT,
    externalForwardedProps: Q,
    ownerState: N,
    className: A.label
  });
  return /* @__PURE__ */ f.jsxs(G, {
    as: L,
    ...X,
    children: [W || _, /* @__PURE__ */ f.jsx(V, {
      ...ee,
      children: v
    }), F]
  });
}), XT = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), QT = {
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
}, qT = {
  opacity: 0,
  visibility: "hidden"
}, mx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = eo(), o = {
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
    onEntered: v,
    onEntering: d,
    onExit: S,
    onExited: b,
    onExiting: C,
    style: y,
    timeout: h = o,
    ...x
  } = t, w = Kc(r.motion.reducedMotion, a), E = p.useRef(null), k = ct(E, Oo(l), n), T = Cn(E, d), P = Cn(E, (I, O) => {
    w.shouldReduceMotion || Sp(I);
    const L = $a({
      style: y,
      timeout: h,
      easing: c
    }, {
      mode: "enter"
    }), N = w.getTransitionTiming({
      duration: L.duration,
      delay: L.delay
    });
    I.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: L.easing,
      delay: N.delay
    }), m && m(I, O);
  }), R = Cn(E, v), j = Cn(E, C), $ = Cn(E, (I) => {
    const O = $a({
      style: y,
      timeout: h,
      easing: c
    }, {
      mode: "exit"
    }), L = w.getTransitionTiming({
      duration: O.duration,
      delay: O.delay
    });
    I.style.transition = r.transitions.create("opacity", {
      duration: L.duration,
      easing: O.easing,
      delay: L.delay
    }), S && S(I);
  }), g = Cn(E, (I) => {
    I.style.transition = "", b && b(I);
  }), M = i ? (I) => {
    i(E.current, I);
  } : void 0;
  return /* @__PURE__ */ f.jsx(X0, {
    appear: s,
    in: u,
    nodeRef: E,
    onEnter: P,
    onEntered: R,
    onEntering: T,
    onExit: $,
    onExited: g,
    onExiting: j,
    addEndListener: M,
    reduceMotion: w.shouldReduceMotion,
    timeout: h,
    ...x,
    children: (I, {
      ownerState: O,
      ...L
    }) => {
      const N = Y0(I, u, QT, qT, y, l.props.style);
      return /* @__PURE__ */ p.cloneElement(l, {
        style: N,
        ref: k,
        ...L
      });
    }
  });
});
function ZT(e) {
  return ce("MuiBackdrop", e);
}
ae("MuiBackdrop", ["root", "invisible"]);
const JT = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ue({
    root: ["root", n && "invisible"]
  }, ZT, t);
}, eP = U("div", {
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
}), hx = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    ...v
  } = r, d = {
    ...r,
    component: s,
    invisible: l
  }, S = JT(d), b = {
    component: s,
    slots: u,
    slotProps: c
  }, [C, y] = ve("root", {
    elementType: eP,
    externalForwardedProps: b,
    className: J(S.root, i),
    ownerState: d
  }), [h, x] = ve("transition", {
    elementType: mx,
    externalForwardedProps: b,
    ownerState: d
  });
  return /* @__PURE__ */ f.jsx(h, {
    in: a,
    timeout: m,
    ...v,
    ...x,
    children: /* @__PURE__ */ f.jsx(C, {
      ...y,
      ref: n,
      children: o
    })
  });
}), tP = ae("MuiBox", ["root"]), nP = Dc(), ft = TC({
  themeId: nr,
  defaultTheme: nP,
  defaultClassName: tP.root,
  generateClassName: T0.generate
});
function rP(e) {
  return ce("MuiButton", e);
}
const io = ae("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), oP = /* @__PURE__ */ p.createContext({}), iP = /* @__PURE__ */ p.createContext(void 0), sP = (e) => {
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
    root: ["root", s && "loading", i, `size${Z(o)}`, `color${Z(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${Z(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, u = ue(c, rP, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...u
  };
}, gx = [{
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
}], lP = U(Qr, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${Z(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    ...lt(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${io.disabled}`]: {
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
        [`&.${io.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${io.disabled}`]: {
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
        [`&.${io.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Wt()).map(([r]) => ({
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
        [`&.${io.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${io.disabled}`]: {
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
        ...lt(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${io.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), aP = U("span", {
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
      ...lt(e, ["opacity"], {
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
  }, ...gx]
})), cP = U("span", {
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
      ...lt(e, ["opacity"], {
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
  }, ...gx]
})), uP = U("span", {
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
})), Qh = U("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Ir = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = p.useContext(oP), o = p.useContext(iP), i = Ds(r, t), s = me({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: c = "button",
    className: u,
    disabled: m = !1,
    disableElevation: v = !1,
    disableFocusRipple: d = !1,
    endIcon: S,
    focusVisibleClassName: b,
    fullWidth: C = !1,
    id: y,
    loading: h = null,
    loadingIndicator: x,
    loadingPosition: w = "center",
    size: E = "medium",
    startIcon: k,
    type: T,
    variant: P = "text",
    ...R
  } = s, j = kr(y), $ = x ?? /* @__PURE__ */ f.jsx(uo, {
    "aria-labelledby": j,
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
    loadingIndicator: $,
    loadingPosition: w,
    size: E,
    type: T,
    variant: P
  }, M = sP(g), I = (k || h && w === "start") && /* @__PURE__ */ f.jsx(aP, {
    className: M.startIcon,
    ownerState: g,
    children: k || /* @__PURE__ */ f.jsx(Qh, {
      className: M.loadingIconPlaceholder,
      ownerState: g
    })
  }), O = (S || h && w === "end") && /* @__PURE__ */ f.jsx(cP, {
    className: M.endIcon,
    ownerState: g,
    children: S || /* @__PURE__ */ f.jsx(Qh, {
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
      children: h && /* @__PURE__ */ f.jsx(uP, {
        className: M.loadingIndicator,
        ownerState: g,
        children: $
      })
    })
  ) : null, {
    root: A,
    ...z
  } = M;
  return /* @__PURE__ */ f.jsxs(lP, {
    ownerState: g,
    className: J(r.className, M.root, u, L),
    component: c,
    disabled: m || h,
    focusRipple: !d,
    focusVisibleClassName: J(M.focusVisible, b),
    ref: n,
    internalNativeButton: !0,
    type: T,
    id: h ? j : y,
    ...R,
    classes: z,
    children: [I, w !== "end" && N, l, w === "end" && N, O]
  });
});
function dP(e) {
  return ce("MuiCard", e);
}
ae("MuiCard", ["root"]);
const fP = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, dP, t);
}, pP = U(or, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Rl = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = fP(l);
  return /* @__PURE__ */ f.jsx(pP, {
    className: J(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function mP(e) {
  return ce("MuiCardContent", e);
}
ae("MuiCardContent", ["root"]);
const hP = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, mP, t);
}, gP = U("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Il = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = hP(l);
  return /* @__PURE__ */ f.jsx(gP, {
    as: i,
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function yP(e) {
  return ce("PrivateSwitchBase", e);
}
ae("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const vP = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: o
  } = e, i = {
    root: ["root", n && "checked", r && "disabled", o && `edge${Z(o)}`],
    input: ["input"]
  };
  return ue(i, yP, t);
}, xP = U(Qr, {
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
}), SP = U("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: Kt
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
}), yx = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    name: v,
    onBlur: d,
    onChange: S,
    onFocus: b,
    readOnly: C,
    required: y = !1,
    tabIndex: h,
    type: x,
    value: w,
    slots: E = {},
    slotProps: k = {},
    ...T
  } = t, {
    nativeButton: P,
    ...R
  } = T, [j, $] = Aa({
    controlled: o,
    default: !!s,
    name: "SwitchBase",
    state: "checked"
  }), g = H0(), M = (X) => {
    b && b(X), g && g.onFocus && g.onFocus(X);
  }, I = (X) => {
    d && d(X), g && g.onBlur && g.onBlur(X);
  }, O = (X) => {
    if (X.nativeEvent.defaultPrevented || C)
      return;
    const V = X.target.checked;
    $(V), S && S(X, V);
  };
  let L = l;
  g && typeof L > "u" && (L = g.disabled);
  const N = x === "checkbox" || x === "radio", A = {
    ...t,
    checked: j,
    disabled: L,
    disableFocusRipple: a,
    edge: c
  }, z = vP(A), F = {
    slots: E,
    slotProps: k
  }, [W, _] = ve("root", {
    ref: n,
    elementType: xP,
    className: z.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...F,
      component: "span",
      ...R
    },
    getSlotProps: (X) => ({
      ...X,
      onFocus: (V) => {
        X.onFocus?.(V), M(V);
      },
      onBlur: (V) => {
        X.onBlur?.(V), I(V);
      }
    }),
    ownerState: A,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !a,
      role: void 0,
      tabIndex: null
    }
  }), [Q, G] = ve("input", {
    elementType: SP,
    className: z.input,
    externalForwardedProps: F,
    getSlotProps: (X) => ({
      ...X,
      onChange: (V) => {
        X.onChange?.(V), O(V);
      }
    }),
    ownerState: A,
    additionalProps: {
      autoFocus: r,
      checked: o,
      defaultChecked: s,
      disabled: L,
      id: N ? m : void 0,
      name: v,
      readOnly: C,
      required: y,
      tabIndex: h,
      type: x,
      ...x === "checkbox" && w === void 0 ? {} : {
        value: w
      }
    }
  });
  return /* @__PURE__ */ f.jsxs(W, {
    ..._,
    children: [/* @__PURE__ */ f.jsx(Q, {
      ...G
    }), j ? i : u]
  });
}), bP = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
})), wP = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
})), CP = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
})), kP = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: o
  } = e, i = {
    root: ["root", n && "indeterminate", `color${Z(r)}`, `size${Z(o)}`]
  }, s = ue(i, t2, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...s
  };
}, EP = U(yx, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${Z(n.size)}`], n.color !== "default" && t[`color${Z(n.color)}`]];
  }
})(ye(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
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
  }, ...Object.entries(e.palette).filter(Wt()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Wt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Nu.checked}, &.${Nu.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Nu.disabled}`]: {
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
}))), TP = /* @__PURE__ */ f.jsx(wP, {}), PP = /* @__PURE__ */ f.jsx(bP, {}), RP = /* @__PURE__ */ f.jsx(CP, {}), qh = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: o = TP,
    color: i = "primary",
    icon: s = PP,
    indeterminate: l = !1,
    indeterminateIcon: a = RP,
    size: c = "medium",
    disableRipple: u = !1,
    className: m,
    slots: v = {},
    slotProps: d = {},
    ...S
  } = r, b = l ? a : s, C = l ? a : o, y = {
    ...r,
    disableRipple: u,
    color: i,
    indeterminate: l,
    size: c
  }, h = kP(y), x = d.input, [w, E] = ve("root", {
    ref: n,
    elementType: EP,
    className: J(h.root, m),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: v,
      slotProps: d,
      ...S
    },
    ownerState: y,
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
      slots: v,
      slotProps: {
        input: kp(typeof x == "function" ? x(y) : x, {
          "data-indeterminate": l,
          "aria-checked": l ? "mixed" : void 0
        })
      }
    }
  });
  return /* @__PURE__ */ f.jsx(w, {
    ...E,
    classes: h
  });
});
function Zh(e) {
  return e.substring(2).toLowerCase();
}
function IP(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function MP(e) {
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
  const u = ct(Oo(t), l), m = Qe((S) => {
    const b = c.current;
    c.current = !1;
    const C = dt(l.current);
    if (!a.current || !l.current || "clientX" in S && IP(S, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let y;
    S.composedPath ? y = S.composedPath().includes(l.current) : y = !xo(C.documentElement, S.target) || xo(l.current, S.target), !y && (n || !b) && o(S);
  }), v = (S) => (b) => {
    c.current = !0;
    const C = t.props[S];
    C && C(b);
  }, d = {
    ref: u
  };
  return i !== !1 && (d[i] = v(i)), p.useEffect(() => {
    if (i !== !1) {
      const S = Zh(i), b = dt(l.current), C = () => {
        s.current = !0;
      };
      return b.addEventListener(S, m), b.addEventListener("touchmove", C), () => {
        b.removeEventListener(S, m), b.removeEventListener("touchmove", C);
      };
    }
  }, [m, i]), r !== !1 && (d[r] = v(r)), p.useEffect(() => {
    if (r !== !1) {
      const S = Zh(r), b = dt(l.current);
      return b.addEventListener(S, m), () => {
        b.removeEventListener(S, m);
      };
    }
  }, [m, r]), /* @__PURE__ */ p.cloneElement(t, d);
}
function vx(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function $P(e) {
  const t = dt(e);
  return e === t.body || e === t.documentElement ? Wn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ms(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Jh(e) {
  return parseFloat(Wn(e).getComputedStyle(e).paddingRight) || 0;
}
function OP(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function eg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !OP(s);
    l && a && ms(s, o);
  });
}
function AP(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = dt(r).body;
    else {
      const s = r.parentElement, l = Wn(r);
      i = s?.nodeName === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if ($P(i)) {
      const s = vx(Wn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${Jh(i) + s}px`;
      const l = dt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${Jh(a) + s}px`;
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
function jP(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class LP {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ms(t.modalRef, !1);
    const o = jP(n);
    eg(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = AP(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && ms(t.modalRef, n), eg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
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
const qd = "data-mui-focusable";
function tg(e) {
  return e ? e.hasAttribute(qd) ? e : e.querySelector(`[${qd}]`) : null;
}
const NP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function xx(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function zP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function BP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || zP(e));
}
function FP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(NP)).forEach((r, o) => {
    const i = xx(r);
    i === -1 || !BP(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function DP() {
  return !0;
}
function _P(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = FP,
    isEnabled: s = DP,
    open: l
  } = e, a = p.useRef(!1), c = p.useRef(null), u = p.useRef(null), m = p.useRef(null), v = p.useRef(null), d = p.useRef(!1), S = p.useRef(null), b = ct(Oo(t), S), C = p.useRef(null);
  p.useEffect(() => {
    !l || !S.current || (d.current = !n);
  }, [n, l]), p.useEffect(() => {
    if (a.current = !1, !l || !S.current)
      return;
    const x = dt(S.current), w = Zn(x), E = tg(S.current) ?? S.current;
    return xo(S.current, w) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), d.current && E.focus()), () => {
      !o && m.current && (a.current = !0, m.current.focus(), m.current = null);
    };
  }, [l]), p.useEffect(() => {
    if (!l || !S.current)
      return;
    const x = dt(S.current), w = (T) => {
      if (C.current = T, r || !s() || T.key !== "Tab")
        return;
      const P = S.current, R = Zn(x);
      if (P === null)
        return;
      const j = tg(P);
      if (R === P || R === j) {
        const g = i(P);
        if (g.length === 0)
          return;
        T.preventDefault(), T.shiftKey ? g[g.length - 1].focus() : g[0].focus();
        return;
      }
      if (xo(P, R)) {
        const g = i(P), M = g.indexOf(R);
        if (M === -1 || !g.some((L) => xx(L) > 0))
          return;
        T.preventDefault();
        let O = 0;
        T.shiftKey ? O = M <= 0 ? g.length - 1 : M - 1 : O = M === g.length - 1 ? 0 : M + 1, g[O].focus();
      }
    }, E = () => {
      const T = S.current;
      if (T === null)
        return;
      const P = Zn(x);
      if (!x.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (xo(T, P) || r && P !== c.current && P !== u.current)
        return;
      if (P !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!d.current)
        return;
      let R = [];
      if ((P === c.current || P === u.current) && (R = i(S.current)), R.length > 0) {
        const j = !!(C.current?.shiftKey && C.current?.key === "Tab"), $ = R[0], g = R[R.length - 1];
        typeof $ != "string" && typeof g != "string" && (j ? g.focus() : $.focus());
      } else
        T.focus();
    };
    x.addEventListener("focusin", E), x.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const T = Zn(x);
      T && T.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), x.removeEventListener("focusin", E), x.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const y = (x) => {
    m.current === null && (m.current = x.relatedTarget), d.current = !0, v.current = x.target;
    const w = t.props.onFocus;
    w && w(x);
  }, h = (x) => {
    m.current === null && (m.current = x.relatedTarget), d.current = !0;
  };
  return /* @__PURE__ */ f.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ f.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: h,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ p.cloneElement(t, {
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
function WP(e) {
  return typeof e == "function" ? e() : e;
}
function UP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ng = () => {
}, Ml = new LP();
function HP(e) {
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
  } = e, u = p.useRef({}), m = p.useRef(null), v = p.useRef(null), d = p.useRef(null), S = ct(d, c), [b, C] = p.useState(!a), y = UP(s);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const x = () => dt(m.current), w = () => (u.current.modalRef = d.current, u.current.mount = m.current, u.current), E = () => {
    Ml.mount(w(), {
      disableScrollLock: n
    }), d.current && (d.current.scrollTop = 0);
  }, k = Qe(() => {
    const L = WP(t) || x().body;
    Ml.add(w(), L), d.current && E();
  }), T = () => Ml.isTopModal(w()), P = Qe((L) => {
    m.current = L, L && (v.current = L, a && T() ? E() : d.current && ms(d.current, h));
  }), R = p.useCallback(() => {
    Ml.remove(w(), h);
  }, [h]);
  p.useEffect(() => () => {
    R();
  }, [R]), p.useEffect(() => {
    a ? k() : (!y || !r) && R();
  }, [a, R, y, r, k]);
  const j = (L) => (N) => {
    L.onKeyDown?.(N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !T()) && (N.stopPropagation(), l && l(N, "escapeKeyDown"));
  }, $ = (L) => (N) => {
    L.onClick?.(N), N.target === N.currentTarget && l && l(N, "backdropClick");
  }, g = (L = {}) => {
    const N = ja(e);
    delete N.onTransitionEnter, delete N.onTransitionExited;
    const A = {
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
      ...A,
      onKeyDown: j(A),
      ref: S
    };
  }, M = (L = {}) => {
    const N = L;
    return {
      "aria-hidden": !0,
      ...N,
      onClick: $(N),
      open: a
    };
  }, I = () => {
    const L = () => {
      C(!1), o && o();
    }, N = () => {
      C(!0), i && i(), r && R();
    };
    return {
      onEnter: Oh(L, s?.props.onEnter ?? ng),
      onExited: Oh(N, s?.props.onExited ?? ng)
    };
  }, O = !a && y && !b ? v.current ?? t : t;
  return {
    getRootProps: g,
    getBackdropProps: M,
    getTransitionProps: I,
    rootRef: S,
    portalRef: P,
    portalContainer: O,
    isTopModal: T,
    exited: b,
    hasTransition: y
  };
}
function VP(e) {
  return ce("MuiModal", e);
}
ae("MuiModal", ["root", "hidden", "backdrop"]);
const KP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ue({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, VP, r);
}, YP = U("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(ye(({
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
}))), GP = U(hx, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Sx = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disablePortal: v = !1,
    disableRestoreFocus: d = !1,
    disableScrollLock: S = !1,
    hideBackdrop: b = !1,
    keepMounted: C = !1,
    onClose: y,
    onTransitionEnter: h,
    onTransitionExited: x,
    open: w,
    slotProps: E = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: T,
    ...P
  } = r, R = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: u,
    disableEnforceFocus: m,
    disablePortal: v,
    disableRestoreFocus: d,
    disableScrollLock: S,
    hideBackdrop: b,
    keepMounted: C
  }, {
    getRootProps: j,
    getBackdropProps: $,
    getTransitionProps: g,
    portalRef: M,
    portalContainer: I,
    isTopModal: O,
    exited: L,
    hasTransition: N
  } = HP({
    ...R,
    rootRef: n
  }), A = {
    ...R,
    exited: L
  }, z = KP(A), F = {};
  if (l.props.tabIndex === void 0 && (F.tabIndex = "-1"), N) {
    const {
      onEnter: V,
      onExited: ee
    } = g();
    F.onEnter = V, F.onExited = ee;
  }
  const W = {
    slots: k,
    slotProps: E
  }, [_, Q] = ve("root", {
    ref: n,
    elementType: YP,
    externalForwardedProps: {
      ...W,
      ...P,
      component: c
    },
    getSlotProps: j,
    ownerState: A,
    className: J(i, z?.root, !A.open && A.exited && z?.hidden)
  }), [G, X] = ve("backdrop", {
    elementType: GP,
    externalForwardedProps: W,
    shouldForwardComponentProp: !0,
    getSlotProps: (V) => $({
      ...V,
      onClick: (ee) => {
        V?.onClick && V.onClick(ee);
      }
    }),
    className: z?.backdrop,
    ownerState: A
  });
  return !C && !w && (!N || L) ? null : /* @__PURE__ */ f.jsx(dx, {
    ref: M,
    container: I,
    disablePortal: v,
    children: /* @__PURE__ */ f.jsxs(_, {
      ...Q,
      children: [b ? null : /* @__PURE__ */ f.jsx(G, {
        ...X
      }), /* @__PURE__ */ f.jsx(_P, {
        disableEnforceFocus: m,
        disableAutoFocus: u,
        disableRestoreFocus: d,
        isEnabled: O,
        open: w,
        children: /* @__PURE__ */ p.cloneElement(l, F)
      })]
    })
  });
});
function XP(e) {
  return ce("MuiDialog", e);
}
ae("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const bx = /* @__PURE__ */ p.createContext({}), QP = U(hx, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), qP = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${Z(n)}`],
    paper: ["paper", `paperWidth${Z(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return ue(s, XP, t);
}, ZP = U(Sx, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), JP = U("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${Z(n.scroll)}`]];
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
}), eR = U(or, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${Z(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(ye(({
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
}))), rg = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialog"
  }), o = eo(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: c,
    className: u,
    fullScreen: m = !1,
    fullWidth: v = !1,
    maxWidth: d = "sm",
    onClick: S,
    onClose: b,
    open: C,
    PaperComponent: y = or,
    role: h = "dialog",
    scroll: x = "paper",
    slots: w = {},
    slotProps: E = {},
    transitionDuration: k = i,
    ...T
  } = r, P = {
    ...r,
    fullScreen: m,
    fullWidth: v,
    maxWidth: d,
    scroll: x
  }, R = qP(P), j = p.useRef(), $ = (V) => {
    j.current = V.target === V.currentTarget;
  }, g = (V) => {
    S && S(V), j.current && (j.current = null, b && b(V, "backdropClick"));
  }, M = kr(l), I = p.useMemo(() => ({
    titleId: M
  }), [M]), O = {
    slots: w,
    slotProps: E
  }, [L, N] = ve("root", {
    elementType: ZP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    ownerState: P,
    className: J(R.root, u),
    ref: n
  }), [A, z] = ve("backdrop", {
    elementType: QP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    ownerState: P,
    className: R.backdrop
  }), [F, W] = ve("paper", {
    elementType: eR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    ownerState: P,
    className: R.paper,
    additionalProps: {
      elevation: 24,
      role: h,
      "aria-describedby": s,
      "aria-labelledby": M,
      "aria-modal": a,
      tabIndex: -1,
      [qd]: ""
    }
  }), [_, Q] = ve("container", {
    elementType: JP,
    externalForwardedProps: O,
    ownerState: P,
    className: R.container
  }), [G, X] = ve("transition", {
    elementType: mx,
    externalForwardedProps: O,
    ownerState: P,
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
      backdrop: A
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
    ...T,
    children: /* @__PURE__ */ f.jsx(G, {
      ...X,
      children: /* @__PURE__ */ f.jsx(_, {
        onMouseDown: $,
        ...Q,
        children: /* @__PURE__ */ f.jsx(F, {
          as: y,
          ...W,
          children: /* @__PURE__ */ f.jsx(bx.Provider, {
            value: I,
            children: c
          })
        })
      })
    })
  });
});
function tR(e) {
  return ce("MuiDialogActions", e);
}
ae("MuiDialogActions", ["root", "spacing"]);
const nR = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return ue({
    root: ["root", !n && "spacing"]
  }, tR, t);
}, rR = U("div", {
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
}), og = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = nR(l);
  return /* @__PURE__ */ f.jsx(rR, {
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function oR(e) {
  return ce("MuiDialogContent", e);
}
ae("MuiDialogContent", ["root", "dividers"]);
function iR(e) {
  return ce("MuiDialogTitle", e);
}
const sR = ae("MuiDialogTitle", ["root"]), lR = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return ue({
    root: ["root", n && "dividers"]
  }, oR, t);
}, aR = U("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(ye(({
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
      [`.${sR.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), ig = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = lR(l);
  return /* @__PURE__ */ f.jsx(aR, {
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), cR = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, iR, t);
}, uR = U(Ve, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), sg = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = cR(l), {
    titleId: c = i
  } = p.useContext(bx);
  return /* @__PURE__ */ f.jsx(uR, {
    component: "h2",
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? c,
    ...s
  });
}), lg = ae("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function wx(e) {
  return ce("MuiSelect", e);
}
const fo = ae("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), dR = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: l
  } = e, a = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${Z(i)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, c = ue(a, m2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...c
  };
}, fR = U(Hc, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Wc(e, t), !n.disableUnderline && t.underline];
  }
})(ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    ...lt(e, "background-color", {
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
    [`&.${oo.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${oo.disabled}`]: {
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
          ...lt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${oo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${oo.error}`]: {
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
          ...lt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${oo.disabled}, .${oo.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${oo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Wt()).map(([s]) => ({
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
})), pR = U(Vc, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Uc
})(ye(({
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
}))), Ap = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    type: v = "text",
    ...d
  } = r, S = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: v
  }, b = dR(r), C = {
    root: {
      ownerState: S
    },
    input: {
      ownerState: S
    }
  }, y = u ? Mt(C, u) : C, h = m.root ?? fR, x = m.input ?? pR;
  return /* @__PURE__ */ f.jsx(wp, {
    slots: {
      root: h,
      input: x
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
Ap.muiName = "Input";
function mR(e) {
  return ce("MuiFormControl", e);
}
ae("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const hR = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${Z(n)}`, r && "fullWidth"]
  };
  return ue(o, mR, t);
}, gR = U("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${Z(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), yR = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    hiddenLabel: v = !1,
    margin: d = "none",
    required: S = !1,
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
    required: S,
    size: b,
    variant: C
  }, x = hR(h), [w, E] = p.useState(() => {
    let O = !1;
    return o && p.Children.forEach(o, (L) => {
      if (!ju(L, ["Input", "Select"]))
        return;
      const N = ju(L, ["Select"]) ? L.props.input : L;
      N && l2(N.props) && (O = !0);
    }), O;
  }), [k, T] = p.useState(() => {
    let O = !1;
    return o && p.Children.forEach(o, (L) => {
      ju(L, ["Input", "Select"]) && (Ma(L.props, !0) || Ma(L.props.inputProps, !0)) && (O = !0);
    }), O;
  }), [P, R] = p.useState(!1);
  a && P && R(!1);
  const j = u !== void 0 && !a ? u : P;
  let $;
  p.useRef(!1);
  const g = p.useCallback(() => {
    T(!0);
  }, []), M = p.useCallback(() => {
    T(!1);
  }, []), I = p.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: c,
    filled: k,
    focused: j,
    fullWidth: m,
    hiddenLabel: v,
    size: b,
    onBlur: () => {
      R(!1);
    },
    onFocus: () => {
      R(!0);
    },
    onEmpty: M,
    onFilled: g,
    registerEffect: $,
    required: S,
    variant: C
  }), [w, s, a, c, k, j, m, v, $, M, g, S, b, C]);
  return /* @__PURE__ */ f.jsx(el.Provider, {
    value: I,
    children: /* @__PURE__ */ f.jsx(gR, {
      as: l,
      ownerState: h,
      className: J(x.root, i),
      ref: n,
      ...y,
      children: o
    })
  });
}), vR = (e) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: r,
    error: o,
    required: i
  } = e, s = {
    root: ["root", n && "disabled", `labelPlacement${Z(r)}`, o && "error", i && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", o && "error"]
  };
  return ue(s, h2, t);
}, xR = U("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ts.label}`]: t.label
    }, t.root, t[`labelPlacement${Z(n.labelPlacement)}`]];
  }
})(ye(({
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
  [`&.${ts.disabled}`]: {
    cursor: "default"
  },
  [`& .${ts.label}`]: {
    [`&.${ts.disabled}`]: {
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
}))), SR = U("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(ye(({
  theme: e
}) => ({
  [`&.${ts.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), ag = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    name: v,
    onChange: d,
    required: S,
    slots: b = {},
    slotProps: C = {},
    value: y,
    ...h
  } = r, [x, w] = $o({
    props: r,
    states: ["error"]
  }), E = l ?? s.props.disabled ?? w?.disabled, k = S ?? s.props.required, T = {
    disabled: E,
    required: k
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((I) => {
    typeof s.props[I] > "u" && typeof r[I] < "u" && (T[I] = r[I]);
  });
  const P = {
    ...r,
    disabled: E,
    labelPlacement: m,
    required: k,
    error: x.error
  }, R = vR(P), j = {
    slots: b,
    slotProps: C
  }, [$, g] = ve("typography", {
    elementType: Ve,
    externalForwardedProps: j,
    ownerState: P
  });
  let M = u;
  return M != null && M.type !== Ve && !a && (M = /* @__PURE__ */ f.jsx($, {
    component: "span",
    ...g,
    className: J(R.label, g?.className),
    children: M
  })), /* @__PURE__ */ f.jsxs(xR, {
    className: J(R.root, i),
    ownerState: P,
    ref: n,
    ...h,
    children: [/* @__PURE__ */ p.cloneElement(s, T), k ? /* @__PURE__ */ f.jsxs("div", {
      children: [M, /* @__PURE__ */ f.jsxs(SR, {
        ownerState: P,
        "aria-hidden": !0,
        className: R.asterisk,
        children: [" ", "*"]
      })]
    }) : M]
  });
});
var cg;
const bR = (e) => {
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
    root: ["root", o && "disabled", i && "error", r && `size${Z(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return ue(c, g2, t);
}, wR = U("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${Z(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(ye(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${$h.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${$h.error}`]: {
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
}))), CR = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    required: v,
    variant: d,
    ...S
  } = r, [b] = $o({
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
  const y = bR(C);
  return /* @__PURE__ */ f.jsx(wR, {
    as: s,
    className: J(y.root, i),
    ref: n,
    ...S,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      cg || (cg = /* @__PURE__ */ f.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), kR = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${Z(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return ue(a, y2, t);
}, ER = U("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(ye(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Wt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${ds.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${ds.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${ds.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), TR = U("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(ye(({
  theme: e
}) => ({
  [`&.${ds.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), PR = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    required: v,
    ...d
  } = r, [S] = $o({
    props: r,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), b = {
    ...r,
    color: S.color || "primary",
    component: l,
    disabled: S.disabled,
    error: S.error,
    filled: S.filled,
    focused: S.focused,
    required: S.required
  }, C = kR(b);
  return /* @__PURE__ */ f.jsxs(ER, {
    as: l,
    ownerState: b,
    className: J(C.root, i),
    ref: n,
    ...d,
    children: [o, S.required && /* @__PURE__ */ f.jsxs(TR, {
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
const RR = {
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
}, IR = {
  opacity: 0,
  transform: hs(0.75),
  visibility: "hidden"
}, Us = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    onExit: v,
    onExited: d,
    onExiting: S,
    style: b,
    timeout: C = "auto",
    ...y
  } = t, h = p.useRef(null), x = eo(), w = Kc(x.motion.reducedMotion, s), E = p.useRef(null), k = ct(E, Oo(i), n), T = Cn(E, m), P = Cn(E, (I, O) => {
    w.shouldReduceMotion || Sp(I);
    const {
      duration: L,
      delay: N,
      easing: A
    } = $a({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    C === "auto" && !w.shouldReduceMotion ? (z = x.transitions.getAutoHeightDuration(I.clientHeight), h.current = z) : (z = L, h.current = null);
    const F = w.getTransitionTiming({
      duration: z,
      delay: N
    });
    I.style.transition = [x.transitions.create("opacity", {
      duration: F.duration,
      delay: F.delay
    }), x.transitions.create("transform", {
      duration: typeof F.duration == "string" ? F.duration : F.duration * 0.666,
      delay: F.delay,
      easing: A
    })].join(","), c && c(I, O);
  }), R = Cn(E, u), j = Cn(E, S), $ = Cn(E, (I) => {
    const {
      duration: O,
      delay: L,
      easing: N
    } = $a({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let A;
    C === "auto" && !w.shouldReduceMotion ? (A = x.transitions.getAutoHeightDuration(I.clientHeight), h.current = A) : (A = O, h.current = null);
    const z = w.getTransitionTiming({
      duration: A,
      delay: L
    });
    I.style.transition = [x.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), x.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: N
    })].join(","), I.style.opacity = 0, I.style.transform = hs(0.75), v && v(I);
  }), g = Cn(E, (I) => {
    I.style.transition = "", d && d(I);
  }), M = r ? (I) => {
    r(E.current, I);
  } : void 0;
  return /* @__PURE__ */ f.jsx(X0, {
    appear: o,
    in: a,
    nodeRef: E,
    onEnter: P,
    onEntered: R,
    onEntering: T,
    onExit: $,
    onExited: g,
    onExiting: j,
    addEndListener: M,
    getAutoTimeout: C === "auto" ? () => h.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...y,
    children: (I, {
      ownerState: O,
      ...L
    }) => {
      const N = Y0(I, a, RR, IR, b, i.props.style);
      return /* @__PURE__ */ p.cloneElement(i, {
        style: N,
        ref: k,
        ...L
      });
    }
  });
});
Us && (Us.muiSupportAuto = !0);
function MR(e) {
  return ce("MuiInputLabel", e);
}
const $R = ae("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), OR = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ue({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, v2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, AR = U(Hc, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Wc(e, t), !n.disableUnderline && t.underline];
  }
})(ye(({
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
        [`label + &, .${$R.root} + &`]: {
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
          ...lt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Ui.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Ui.error}`]: {
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
          ...lt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Ui.disabled}, .${Ui.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Ui.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Wt()).map(([r]) => ({
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
})), jR = U(Vc, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Uc
})({}), jp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    ...v
  } = r, d = OR(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = c ? Mt(c, b) : b, y = u.root ?? AR, h = u.input ?? jR;
  return /* @__PURE__ */ f.jsx(wp, {
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
jp.muiName = "Input";
function LR(e) {
  return ce("MuiInputAdornment", e);
}
const ni = ae("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var ug;
const NR = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${Z(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, zR = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: s
  } = e, l = {
    root: ["root", n && "disablePointerEvents", o && `position${Z(o)}`, s, r && "hiddenLabel", i && `size${Z(i)}`]
  };
  return ue(l, LR, t);
}, BR = U("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: NR
})(ye(({
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
}))), FR = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  } = r, v = H0() || {};
  let d = u;
  u && v.variant, v && !d && (d = v.variant);
  const S = {
    ...r,
    hiddenLabel: v.hiddenLabel,
    size: v.size,
    disablePointerEvents: l,
    position: c,
    variant: d
  }, b = zR(S);
  return /* @__PURE__ */ f.jsx(el.Provider, {
    value: null,
    children: /* @__PURE__ */ f.jsx(BR, {
      as: s,
      ownerState: S,
      className: J(b.root, i),
      ref: n,
      ...m,
      children: typeof o == "string" && !a ? /* @__PURE__ */ f.jsx(Ve, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ f.jsxs(p.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          ug || (ug = /* @__PURE__ */ f.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), DR = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${Z(r)}`, s],
    asterisk: [l && "asterisk"]
  }, c = ue(a, MR, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...c
  };
}, _R = U(PR, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ds.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(ye(({
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
      ...lt(e, ["color", "transform", "max-width"], {
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
}))), WR = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  } = r, [u, m] = $o({
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
    size: u.size,
    variant: u.variant,
    required: u.required,
    focused: u.focused
  }, S = DR(d);
  return /* @__PURE__ */ f.jsx(_R, {
    "data-shrink": v,
    ref: n,
    className: J(S.root, a),
    ...c,
    ownerState: d,
    classes: S
  });
}), Zd = /* @__PURE__ */ p.createContext({});
function UR(e) {
  return ce("MuiList", e);
}
ae("MuiList", ["root", "padding", "dense", "subheader"]);
const HR = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return ue({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, UR, t);
}, VR = U("ul", {
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
}), KR = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }), [l]), v = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, d = HR(v);
  return /* @__PURE__ */ f.jsx(Zd.Provider, {
    value: m,
    children: /* @__PURE__ */ f.jsxs(VR, {
      as: s,
      className: J(d.root, i),
      ref: n,
      ownerState: v,
      ...u,
      children: [c, o]
    })
  });
}), dg = ae("MuiListItemIcon", ["root", "alignItemsFlexStart"]), fg = ae("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Lp = /* @__PURE__ */ p.createContext(void 0);
function Cx() {
  const e = p.useContext(Lp);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const YR = Object.is;
function GR(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !YR(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const XR = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function kx(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = gs,
    wrap: s = !0
  } = e, [l, a] = p.useState(t), [c, u] = p.useState(t);
  let m = l;
  t !== c && (u(t), t !== void 0 && t !== l && (m = t, a(t)));
  const v = p.useRef(null), d = p.useRef(/* @__PURE__ */ new Map()), [S, b] = p.useState(0), C = p.useMemo(() => Jd(d.current), [S]), y = pg(m, C, i, n), h = p.useRef(y);
  h.current = y;
  const x = p.useCallback(() => {
    const g = Jd(d.current), M = pg(h.current, g, i, n);
    return Rx(g, M);
  }, [n, i]), w = p.useCallback(() => d.current, []), E = Qe((g) => {
    const M = d.current.get(g.id);
    GR(M ?? null, g) || (d.current.set(g.id, g), b((I) => I + 1));
  }), k = Qe((g) => {
    d.current.delete(g) && b((M) => M + 1);
  }), T = Qe((g) => {
    a(g);
  }), P = p.useCallback((g) => h.current === g, []), R = p.useCallback((g, M, I, O) => {
    const L = $l(d.current), N = Tx(L, g, M, I, O ?? i);
    return N ? (N.element?.focus(), a(N.id), N) : null;
  }, [i]), j = p.useCallback((g, M, I) => ({
    onFocus: (N) => {
      M?.(N);
      const A = $l(d.current), z = Mx(A, N.target);
      z !== -1 && a(A[z].id);
    },
    onKeyDown: (N) => {
      if (I?.(N), N.defaultPrevented || N.altKey || N.shiftKey || N.ctrlKey || N.metaKey || !XR.includes(N.key))
        return;
      let A = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (A = "ArrowRight", z = "ArrowLeft");
      const F = $l(d.current), W = Zn(dt(v.current)), _ = W === v.current;
      let Q = mg(F, W, h.current), G = "next";
      switch (N.key) {
        case A:
          G = "previous", N.preventDefault(), _ && (Q = F.length);
          break;
        case z:
          N.preventDefault(), _ && (Q = -1);
          break;
        case "Home":
          N.preventDefault(), Q = -1;
          break;
        case "End":
          N.preventDefault(), G = "previous", Q = F.length;
          break;
        default:
          return;
      }
      R(Q, G, s);
    },
    ref: JR(g, (N) => {
      v.current = N;
    })
  }), [R, o, r, s]), $ = p.useCallback((g) => {
    const M = $l(d.current), I = Zn(dt(v.current)), L = I === v.current ? -1 : mg(M, I, h.current);
    return R(L, "next", !0, g)?.id ?? null;
  }, [R]);
  return p.useMemo(() => ({
    activeItemId: y,
    focusNext: $,
    getActiveItem: x,
    getContainerProps: j,
    getItemMap: w,
    isItemActive: P,
    registerItem: E,
    setActiveItemId: T,
    unregisterItem: k
  }), [y, $, x, j, w, P, E, T, k]);
}
function Ex(e) {
  const t = Cx(), {
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
  }, [e.id, r, o]), c = ct(e.ref, a);
  return st(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), st(() => {
    const u = e.id;
    return () => {
      o(u);
    };
  }, [e.id, o]), {
    ref: c,
    tabIndex: n === e.id ? 0 : -1
  };
}
function pg(e, t, n, r) {
  return e != null ? QR(e, t, n) : qR(t, n, r);
}
function QR(e, t, n) {
  const r = Ix(t, e);
  return r === -1 ? Px(t, n) : n(t[r]) ? t[r].id : Tx(t, r, "next", !1, n)?.id ?? null;
}
function qR(e, t, n) {
  const r = n?.(e);
  if (r != null) {
    const o = Rx(e, r);
    if (o && t(o))
      return o.id;
  }
  return Px(e, t);
}
function mg(e, t, n) {
  if (t) {
    const r = Mx(e, t);
    if (r !== -1)
      return r;
  }
  return Ix(e, n);
}
function Tx(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = hg(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const c = e[l];
    if (!c || !o(c))
      l = hg(l, i, n, r);
    else
      return c;
  }
  return null;
}
function Px(e, t) {
  return e.find((n) => t(n))?.id ?? null;
}
function Rx(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function Ix(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function Mx(e, t) {
  return t ? e.findIndex((n) => n.element === t || n.element?.contains(t)) : -1;
}
function Jd(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(ef).sort((o, i) => ZR(o.element, i.element)), r = t.filter((o) => !ef(o));
  return [...n, ...r];
}
function $l(e) {
  return Jd(e).filter(ef);
}
function hg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function gs(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function ef(e) {
  return e.element != null && e.element.isConnected;
}
function ZR(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function JR(...e) {
  return (t) => {
    e.forEach((n) => {
      Vd(n ?? null, t);
    });
  };
}
function $x(e, t) {
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
function eI(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function tI(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function Jl(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Ox = /* @__PURE__ */ p.createContext(null);
function Ax() {
  return p.useContext(Ox);
}
const nI = Ox.Provider, jx = /* @__PURE__ */ p.createContext(void 0);
function rI() {
  const e = p.useContext(jx);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function oI(e) {
  const t = e?.element ?? e;
  if (!t)
    return "";
  if (e?.textValue !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function Lx(e, t) {
  if (t === void 0)
    return !0;
  let n = oI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function iI(e, t) {
  return Lx(e, t) ? gs(e) : !1;
}
function sI(e, t) {
  $x(e, t);
}
const lI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    ...v
  } = t, d = p.useRef(null), S = p.useRef(!1), [b, C] = p.useState(!1), y = Ax(), h = p.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), x = p.useCallback((O) => m === "selectedMenu" ? O.find((L) => L.selected && gs(L))?.id ?? O.find((L) => gs(L))?.id ?? null : O.find((L) => gs(L))?.id ?? null, [m]), w = kx({
    activeItemId: void 0,
    getDefaultActiveItemId: x,
    orientation: "vertical",
    wrap: !c
  }), {
    activeItemId: E,
    focusNext: k,
    getActiveItem: T,
    getContainerProps: P,
    getItemMap: R
  } = w, j = Qe((O = !1) => {
    if (!d.current || !O && S.current)
      return null;
    if (i) {
      const L = T();
      if (L?.element) {
        const N = Array.from(R().values()).some((z) => z.selected), A = m === "menu" && N && !L.selected && y == null;
        return C(A), sI(L.element, y), S.current = !0, L.element;
      }
      return o ? (C(!1), d.current.focus(), d.current) : null;
    }
    return o ? (C(!1), d.current.focus(), S.current = !0, d.current) : (C(!1), null);
  });
  st(() => {
    if (!o && !i) {
      S.current = !1, C(!1);
      return;
    }
    j();
  }, [E, i, o, j]), p.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (O, {
      direction: L
    }) => {
      const N = !d.current.style.width;
      if (O.clientHeight < d.current.clientHeight && N) {
        const A = `${vx(Wn(O))}px`;
        d.current.style[L === "rtl" ? "paddingLeft" : "paddingRight"] = A, d.current.style.width = `calc(100% + ${A})`;
      }
      return d.current;
    },
    focusInitialTarget: () => {
      if (!d.current)
        return null;
      const O = Zn(dt(d.current));
      return O && xo(d.current, O) ? O : j(!0);
    }
  }), [j]);
  const $ = P(void 0, v.onFocus), g = ct(d, $.ref, n), M = p.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: b,
    variant: m
  }), [a, b, m]), I = Qe((O) => {
    if (b && C(!1), (O.ctrlKey || O.metaKey || O.altKey) && u) {
      u(O);
      return;
    }
    if ($.onKeyDown(O), O.key.length === 1) {
      const N = h.current, A = O.key.toLowerCase(), z = performance.now();
      N.keys.length > 0 && (z - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && A !== N.keys[0] && (N.repeating = !1)), N.lastTime = z, N.keys.push(A);
      const F = Zn(dt(d.current)), W = F && !N.repeating && Lx(F, N);
      N.previousKeyMatched && (W || k((_) => iI(_, N)) != null) ? O.preventDefault() : N.previousKeyMatched = !1;
    }
    u && u(O);
  });
  return /* @__PURE__ */ f.jsx(KR, {
    role: "menu",
    ref: g,
    className: l,
    onKeyDown: I,
    tabIndex: -1,
    ...v,
    onFocus: $.onFocus,
    children: /* @__PURE__ */ f.jsx(jx.Provider, {
      value: M,
      children: /* @__PURE__ */ f.jsx(Lp.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function aI(e) {
  return ce("MuiPopover", e);
}
ae("MuiPopover", ["root", "paper"]);
function gg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function yg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function vg(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ol(e) {
  return typeof e == "function" ? e() : e;
}
const cI = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"]
  }, aI, t);
}, uI = U(Sx, {
  name: "MuiPopover",
  slot: "Root"
})({}), Nx = U(or, {
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
}), dI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disableAutoFocus: v = !1,
    elevation: d = 8,
    marginThreshold: S = 16,
    open: b,
    slots: C = {},
    slotProps: y = {},
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: x = "auto",
    disableScrollLock: w = !1,
    ...E
  } = r, k = p.useRef(), T = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: d,
    marginThreshold: S,
    transformOrigin: h,
    transitionDuration: x
  }, P = cI(T), R = p.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const K = Ol(i), pe = (K && K.nodeType === 1 ? K : dt(k.current).body).getBoundingClientRect();
    return {
      top: pe.top + gg(pe, s.vertical),
      left: pe.left + yg(pe, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), j = p.useCallback((K) => ({
    vertical: gg(K, h.vertical),
    horizontal: yg(K, h.horizontal)
  }), [h.horizontal, h.vertical]), $ = p.useCallback((K) => {
    const re = {
      width: K.offsetWidth,
      height: K.offsetHeight
    }, pe = j(re);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: vg(pe)
      };
    const ke = R();
    let be = ke.top - pe.vertical, he = ke.left - pe.horizontal;
    const le = be + re.height, Oe = he + re.width, We = Wn(Ol(i)), Re = We.innerHeight - S, Le = We.innerWidth - S;
    if (S != null && be < S) {
      const de = be - S;
      be -= de, pe.vertical += de;
    } else if (S != null && le > Re) {
      const de = le - Re;
      be -= de, pe.vertical += de;
    }
    if (S != null && he < S) {
      const de = he - S;
      he -= de, pe.horizontal += de;
    } else if (Oe > Le) {
      const de = Oe - Le;
      he -= de, pe.horizontal += de;
    }
    return {
      top: `${Math.round(be)}px`,
      left: `${Math.round(he)}px`,
      transformOrigin: vg(pe)
    };
  }, [i, a, R, j, S]), [g, M] = p.useState(b), I = p.useCallback(() => {
    const K = k.current;
    if (!K)
      return;
    const re = $(K);
    re.top != null && K.style.setProperty("top", re.top), re.left != null && (K.style.left = re.left), K.style.transformOrigin = re.transformOrigin, M(!0);
  }, [$]);
  p.useEffect(() => (w && window.addEventListener("scroll", I), () => window.removeEventListener("scroll", I)), [i, w, I]);
  const O = () => {
    I();
  }, L = () => {
    M(!1);
  };
  p.useEffect(() => {
    b && I();
  }), p.useImperativeHandle(o, () => b ? {
    updatePosition: () => {
      I();
    }
  } : null, [b, I]), p.useEffect(() => {
    if (!b)
      return;
    const K = _c(() => {
      I();
    }), re = Wn(Ol(i));
    return re.addEventListener("resize", K), () => {
      K.clear(), re.removeEventListener("resize", K);
    };
  }, [i, b, I]);
  let N = x;
  const A = {
    slots: C,
    slotProps: y
  }, [z, F] = ve("transition", {
    elementType: Us,
    externalForwardedProps: A,
    ownerState: T,
    getSlotProps: (K) => ({
      ...K,
      onEntering: (re, pe) => {
        K.onEntering?.(re, pe), O();
      },
      onExited: (re) => {
        K.onExited?.(re), L();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  x === "auto" && !z.muiSupportAuto && (N = void 0);
  const W = m || (i ? dt(Ol(i)).body : void 0), [_, {
    slots: Q,
    slotProps: G,
    ...X
  }] = ve("root", {
    ref: n,
    elementType: uI,
    externalForwardedProps: {
      ...A,
      ...E
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: C.backdrop
      },
      slotProps: {
        backdrop: kp(typeof y.backdrop == "function" ? y.backdrop(T) : y.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: b
    },
    ownerState: T,
    className: J(P.root, u)
  }), [V, ee] = ve("paper", {
    ref: k,
    className: P.paper,
    elementType: Nx,
    externalForwardedProps: A,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: d,
      style: g ? void 0 : {
        opacity: 0
      }
    },
    ownerState: T
  });
  return /* @__PURE__ */ f.jsx(_, {
    ...X,
    ...!Ia(_) && {
      slots: Q,
      slotProps: G,
      disableAutoFocus: v,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ f.jsx(z, {
      ...F,
      timeout: N,
      children: /* @__PURE__ */ f.jsx(V, {
        ...ee,
        children: c
      })
    })
  });
});
function fI(e) {
  return ce("MuiMenu", e);
}
ae("MuiMenu", ["root", "paper", "list"]);
const pI = {
  vertical: "top",
  horizontal: "right"
}, mI = {
  vertical: "top",
  horizontal: "left"
}, hI = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, fI, t);
}, gI = U(dI, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), yI = U(Nx, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), vI = U(lI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), xI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    variant: v = "selectedMenu",
    slots: d = {},
    slotProps: S = {},
    ...b
  } = r, C = Fc(), y = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: m,
    variant: v
  }, h = hI(y), x = o && c, w = x && !l, E = p.useRef(null), k = (O, L) => {
    E.current && (E.current.adjustStyleForScrollbar(O, {
      direction: C ? "rtl" : "ltr"
    }), x && E.current.focusInitialTarget?.());
  }, T = (O) => {
    O.key === "Tab" && (O.preventDefault(), a && a(O, "tabKeyDown"));
  }, P = {
    slots: d,
    slotProps: S
  }, R = Ti({
    elementType: d.root,
    externalSlotProps: S.root,
    ownerState: y,
    className: [h.root, s]
  }), [j, $] = ve("paper", {
    className: h.paper,
    elementType: yI,
    externalForwardedProps: P,
    shouldForwardComponentProp: !0,
    ownerState: y
  }), [g, M] = ve("list", {
    className: h.list,
    elementType: vI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    getSlotProps: (O) => ({
      ...O,
      onKeyDown: (L) => {
        T(L), O.onKeyDown?.(L);
      }
    }),
    ownerState: y
  }), I = typeof S.transition == "function" ? S.transition(y) : S.transition;
  return /* @__PURE__ */ f.jsx(
    gI,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? pI : mI,
      slots: {
        root: d.root,
        paper: j,
        backdrop: d.backdrop,
        transition: d.transition
      },
      slotProps: {
        root: R,
        paper: $,
        backdrop: typeof S.backdrop == "function" ? S.backdrop(y) : S.backdrop,
        transition: {
          ...I,
          onEntering: (...O) => {
            k(...O), I?.onEntering?.(...O);
          }
        }
      },
      open: c,
      ref: n,
      transitionDuration: m,
      ownerState: y,
      ...b,
      classes: u,
      children: /* @__PURE__ */ f.jsx(g, {
        actions: E,
        autoFocus: x,
        autoFocusItem: w,
        variant: v,
        ...M,
        children: i
      })
    }
  );
}), SI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, bI = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = ue({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, x2, s);
  return {
    ...s,
    ...a
  };
}, wI = U(Qr, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: SI
})(ye(({
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
  [`&.${Hi.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Hi.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Hi.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Hi.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Hi.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${lg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${lg.inset}`]: {
    marginLeft: 52
  },
  [`& .${fg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${fg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${dg.root}`]: {
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
      [`& .${dg.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), rn = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    className: v,
    ...d
  } = r, b = u === "menuitemcheckbox" || u === "menuitemradio" ? !!r.selected : void 0, C = Ax(), y = p.useContext(Zd), h = p.useMemo(() => ({
    dense: s || y.dense || !1,
    disableGutters: a
  }), [y.dense, s, a]), x = rI(), w = kr(), E = x.suppressInitialFocusVisible, k = x.itemsFocusableWhenDisabled, T = p.useRef(null);
  st(() => {
    o && T.current && $x(T.current, C);
  }, [o]);
  const P = {
    ...r,
    dense: h.dense,
    divider: l,
    disableGutters: a
  }, R = bI(r), {
    root: j,
    ...$
  } = R, g = Ex({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), M = ct(T, g.ref);
  let I;
  return m !== void 0 ? I = m : x.variant === "selectedMenu" ? I = g.tabIndex : (!r.disabled || k) && (I = -1), /* @__PURE__ */ f.jsx(Zd.Provider, {
    value: h,
    children: /* @__PURE__ */ f.jsx(wI, {
      ref: M,
      role: u,
      "aria-checked": b,
      tabIndex: I,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: E,
      focusVisibleClassName: J(R.focusVisible, c),
      className: J(R.root, v),
      ...d,
      ownerState: P,
      classes: $
    })
  });
}), CI = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${Z(n)}`, i && "iconOpen", r && "disabled"]
  };
  return ue(l, S2, t);
}, zx = U("select", {
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
  [`&.${Cp.disabled}`]: {
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
      [`.${an.root}:has(> & ~ .${ni.root})`]: {
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
      [`.${an.root}:has(> & ~ .${ni.root})`]: {
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
      [`.${an.root}:has(> & ~ .${ni.root})`]: {
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
})), kI = U(zx, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Kt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Cp.multiple}`]: t.multiple
    }];
  }
})({}), Bx = U("svg", {
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
  [`&.${Cp.disabled}`]: {
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
})), EI = U(Bx, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Z(n.variant)}`], n.open && t.iconOpen];
  }
})({}), TI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, m = CI(u);
  return /* @__PURE__ */ f.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ f.jsx(kI, {
      ownerState: u,
      className: J(m.select, r),
      disabled: o,
      ref: l || n,
      ...c
    }), t.multiple ? null : /* @__PURE__ */ f.jsx(EI, {
      as: s,
      ownerState: u,
      className: m.icon
    })]
  });
});
var xg;
const PI = U("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Kt
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
}), RI = U("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Kt
})(ye(({
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
      ...lt(e, "width", {
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
      ...lt(e, "max-width", {
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
      ...lt(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function II(e) {
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
  return /* @__PURE__ */ f.jsx(PI, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ f.jsx(RI, {
      ownerState: a,
      children: l ? /* @__PURE__ */ f.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        xg || (xg = /* @__PURE__ */ f.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const MI = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, b2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, $I = U(Hc, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Wc
})(ye(({
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
    variants: [...Object.entries(e.palette).filter(Wt()).map(([n]) => ({
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
})), OI = U(II, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), AI = U(Vc, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Uc
})(ye(({
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
}))), Np = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    ...v
  } = r, d = MI(r), [S, b] = $o({
    props: r,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...r,
    color: S.color || "primary",
    disabled: S.disabled,
    error: S.error,
    focused: S.focused,
    formControl: b,
    fullWidth: o,
    hiddenLabel: S.hiddenLabel,
    multiline: l,
    size: S.size,
    type: m
  }, y = c.root ?? $I, h = c.input ?? AI, [x, w] = ve("notchedOutline", {
    elementType: OI,
    className: d.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: c,
      slotProps: u
    },
    additionalProps: {
      label: s != null && s !== "" && S.required ? /* @__PURE__ */ f.jsxs(p.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ f.jsx(wp, {
    slots: {
      root: y,
      input: h
    },
    slotProps: u,
    renderSuffix: (E) => /* @__PURE__ */ f.jsx(x, {
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
Np.muiName = "Input";
function jI(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function Fx(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return p.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ p.isValidElement(n) && (t += Fx(n.props.children));
  }), t;
}
function LI(e, t, n = 0) {
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
function NI(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function zI(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ p.isValidElement(i) || !jI(i) || i.props.disabled)
      continue;
    const s = Fx(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && Jl(t, i.props.value) && (r = n.length), n.push({
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
var Sg;
const Al = 2, BI = 400, bg = 200, FI = 750, so = " ", DI = "ArrowUp", _I = "ArrowDown", WI = "Enter";
function wg(e, t) {
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || e.target?.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Al && e.clientX <= r.right + Al && e.clientY >= r.top - Al && e.clientY <= r.bottom + Al;
}
const UI = U(zx, {
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
}), HI = U(Bx, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), VI = U("input", {
  shouldForwardProp: (e) => V0(e) && e !== "classes",
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
}), KI = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e;
  return ue({
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, wx, t);
}, YI = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    displayEmpty: v,
    error: d = !1,
    IconComponent: S,
    inputRef: b,
    labelId: C,
    MenuProps: y = {},
    multiple: h,
    name: x,
    onBlur: w,
    onChange: E,
    onClose: k,
    onFocus: T,
    // eslint-disable-next-line react/prop-types
    onKeyDown: P,
    // eslint-disable-next-line react/prop-types
    onMouseDown: R,
    onOpen: j,
    open: $,
    readOnly: g,
    renderValue: M,
    required: I,
    SelectDisplayProps: O = {},
    tabIndex: L,
    // catching `type` from Input which makes no sense for SelectInput
    type: N,
    value: A,
    variant: z = "standard",
    ...F
  } = t, [W, _] = Aa({
    controlled: A,
    default: u,
    name: "Select"
  }), [Q, G] = Aa({
    controlled: $,
    default: c,
    name: "Select"
  }), X = p.useRef(null), V = p.useRef(null), ee = p.useRef(null), K = p.useRef(!1), re = p.useRef(!1), pe = p.useRef(null), ke = p.useRef(!1), be = p.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), he = p.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), le = Jn(), Oe = Jn(), We = Jn(), [Re, Le] = p.useState(null), {
    current: de
  } = p.useRef($ != null), [Te, Je] = p.useState(), [ge, Se] = p.useState(null), Ne = ct(n, b), Ke = p.useCallback((Y) => {
    V.current = Y, Y && Le(Y);
  }, []), xe = Re?.parentNode;
  p.useImperativeHandle(Ne, () => ({
    focus: () => {
      V.current.focus();
    },
    node: X.current,
    value: W
  }), [W]);
  const oe = Re !== null && Q, Ce = p.useCallback(() => {
    We.clear(), he.current.buffer = "", he.current.previousSearchIndex = null, he.current.matchedIndex = null;
  }, [We]);
  st(() => {
    K.current = oe, oe && Ce();
  }, [oe, Ce]);
  const Ye = p.useCallback(() => {
    le.clear(), Oe.clear();
  }, [le, Oe]), fe = p.useCallback(() => {
    Ye(), ke.current = !1, be.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [Ye]), nt = p.useCallback(() => {
    pe.current && (pe.current(), pe.current = null);
  }, []);
  p.useEffect(() => {
    oe || (fe(), nt());
  }, [oe, fe, nt]), p.useEffect(() => () => {
    fe(), nt(), Ce();
  }, [fe, nt, Ce]), p.useEffect(() => {
    if (!oe || !xe || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      Je(xe.clientWidth);
    });
    return Y.observe(xe), () => {
      Y.disconnect();
    };
  }, [oe, xe, s]), p.useEffect(() => {
    c && Q && Re && !de && (Je(s ? null : xe.clientWidth), V.current.focus());
  }, [Re, s]), p.useEffect(() => {
    i && V.current.focus();
  }, [i]), p.useEffect(() => {
    if (!C)
      return;
    const Y = dt(V.current).getElementById(C);
    if (Y) {
      const ie = () => {
        getSelection().isCollapsed && V.current.focus();
      };
      return Y.addEventListener("click", ie), () => {
        Y.removeEventListener("click", ie);
      };
    }
  }, [C]);
  const rt = Qe((Y, ie) => {
    Y || (fe(), nt()), Y ? (Ce(), Se(eI(ie)), j && j(ie)) : (Se(null), k && k(ie)), de || (K.current = Y, Je(s ? null : xe.clientWidth), G(Y));
  }), vn = () => {
    fe(), re.current ? Oe.start(bg, () => {
      be.current.allowUnselectedMouseUp = !0, le.start(bg, () => {
        be.current.allowSelectedMouseUp = !0;
      });
    }) : le.start(BI, () => {
      be.current.allowSelectedMouseUp = !0, be.current.allowUnselectedMouseUp = !0;
    });
  }, Ue = (Y) => {
    if (R?.(Y), Y.button !== 0 || (Y.preventDefault(), !V.current))
      return;
    V.current.focus();
    const ie = dt(Y.currentTarget);
    vn(), nt();
    const Me = (Yt) => {
      pe.current = null, V.current && (wg(Yt, V.current) || wg(Yt, ee.current) || !K.current && de || rt(!1, Yt));
    };
    ie.addEventListener("mouseup", Me, {
      capture: !0,
      once: !0
    }), pe.current = () => {
      ie.removeEventListener("mouseup", Me, !0);
    }, rt(!0, Y);
  }, Un = (Y) => {
    rt(!1, Y);
  }, nn = p.Children.toArray(l), lr = (Y) => {
    const ie = nn.find((Me) => Me.props.value === Y.target.value);
    ie !== void 0 && (_(ie.props.value), E && E(Y, ie));
  }, D = (Y, ie, Me) => {
    if (_(Me), E) {
      const Yt = Y.nativeEvent || Y, cr = new Yt.constructor(Yt.type, Yt);
      Object.defineProperty(cr, "target", {
        writable: !0,
        value: {
          value: Me,
          name: x
        }
      }), E(cr, ie);
    }
  }, q = (Y) => (ie) => {
    ke.current = !1;
    let Me;
    if (ie.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        Me = Array.isArray(W) ? W.slice() : [];
        const Yt = W.indexOf(Y.props.value);
        Yt === -1 ? Me.push(Y.props.value) : Me.splice(Yt, 1);
      } else
        Me = Y.props.value;
      Y.props.onClick && Y.props.onClick(ie), W !== Me && D(ie, Y, Me), h || rt(!1, ie);
    }
  }, we = (Y, ie) => (Me) => {
    if (Y.props.onMouseUp?.(Me), ke.current) {
      ke.current = !1;
      return;
    }
    const Yt = !be.current.allowSelectedMouseUp && ie, cr = !be.current.allowUnselectedMouseUp && !ie;
    Yt || cr || Me.currentTarget.click();
  }, Ct = (Y) => {
    const ie = he.current, Me = ie.buffer !== "";
    if (oe || h || m || Y.defaultPrevented || Y.nativeEvent?.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === so && !Me)
      return !1;
    Y.key === so && Y.preventDefault();
    const Yt = ie.buffer === "", {
      options: cr,
      selectedIndex: Ux
    } = zI(nn, W);
    if (cr.length === 0)
      return Y.key !== so && Ce(), !0;
    Yt && (ie.previousSearchIndex = Ux);
    const Zc = Y.key.toLowerCase();
    ie.buffer === Zc && NI(cr, Zc) && (ie.buffer = "", ie.previousSearchIndex = ie.matchedIndex), ie.buffer += Zc, We.start(FI, Ce);
    const Jc = LI(cr, ie.buffer, (ie.previousSearchIndex ?? -1) + 1);
    if (Jc !== -1) {
      const eu = cr[Jc];
      return ie.matchedIndex = Jc, Jl(W, eu.value) || D(Y, eu.child, eu.value), !0;
    }
    return Y.key !== so && Ce(), !0;
  }, Bp = (Y) => {
    if (!g) {
      const ie = Ct(Y), Me = Y.key === so || Y.key === DI || Y.key === _I || Y.key === WI;
      !ie && Me && (Y.preventDefault(), rt(!0, Y)), P?.(Y);
    }
  }, Qc = (Y) => {
    Ce(), !oe && w && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: W,
        name: x
      }
    }), w(Y));
  }, $i = (Y) => (ie) => {
    Y?.props?.onKeyDown?.(ie), ie.key === so && ie.target === ie.currentTarget && !ie.defaultPrevented && (ie.preventDefault(), ie.repeat || ie.currentTarget.click());
  };
  delete F["aria-invalid"];
  let Pr, rl;
  const Ao = [];
  let jo = !1, Lo = !1;
  (Ma({
    value: W
  }) || v) && (M ? Pr = M(W) : jo = !0);
  const qc = nn.map((Y) => {
    if (!/* @__PURE__ */ p.isValidElement(Y))
      return null;
    let ie;
    if (h) {
      if (!Array.isArray(W))
        throw new Error(Cr(2));
      ie = W.some((Me) => Jl(Me, Y.props.value)), ie && jo && Ao.push(Y.props.children);
    } else
      ie = Jl(W, Y.props.value), ie && jo && (rl = Y.props.children);
    return ie && (Lo = !0), /* @__PURE__ */ p.cloneElement(Y, {
      "aria-selected": ie ? "true" : "false",
      onMouseDown: (Me) => {
        ke.current = !0, Y.props.onMouseDown?.(Me);
      },
      onPointerDown: (Me) => {
        ke.current = !0, Y.props.onPointerDown?.(Me);
      },
      onClick: q(Y),
      onMouseUp: we(Y, ie),
      onKeyUp: (Me) => {
        Me.key === so && Me.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(Me);
      },
      onKeyDown: $i(Y),
      role: "option",
      selected: ie,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  st(() => {
    re.current = Lo, !oe && !h && !Lo && Ce();
  }, [Lo, h, oe, Ce]), jo && (h ? Ao.length === 0 ? Pr = null : Pr = Ao.reduce((Y, ie, Me) => (Y.push(ie), Me < Ao.length - 1 && Y.push(", "), Y), []) : Pr = rl);
  let ol = Te;
  !s && de && Re && (ol = xe.clientWidth);
  let Oi;
  typeof L < "u" ? Oi = L : Oi = m ? null : 0;
  const se = O.id || (x ? `mui-component-select-${x}` : void 0), ne = {
    ...t,
    variant: z,
    value: W,
    open: oe,
    error: d
  }, Ie = KI(ne), Pe = typeof y.slotProps?.paper == "function" ? y.slotProps.paper(ne) : y.slotProps?.paper, St = ct(Pe?.ref, ee), ar = typeof y.slotProps?.list == "function" ? y.slotProps.list(ne) : y.slotProps?.list, Hn = kr(), no = kr();
  return /* @__PURE__ */ f.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ f.jsx(UI, {
      as: "div",
      ref: Ke,
      tabIndex: Oi,
      role: "combobox",
      "aria-controls": oe ? Hn : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": oe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": g ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": I ? "true" : void 0,
      "aria-invalid": d ? "true" : void 0,
      onKeyDown: Bp,
      onMouseDown: m || g ? null : Ue,
      onBlur: Qc,
      onFocus: T,
      ...O,
      ownerState: ne,
      className: J(O.className, Ie.select, a),
      id: se,
      children: tI(Pr) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Sg || (Sg = /* @__PURE__ */ f.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Pr
    }), /* @__PURE__ */ f.jsx(VI, {
      "aria-invalid": d,
      value: Array.isArray(W) ? W.join(",") : W,
      name: x,
      ref: X,
      "aria-hidden": !0,
      onChange: lr,
      tabIndex: -1,
      disabled: m,
      readOnly: g,
      className: Ie.nativeInput,
      autoFocus: i,
      required: I,
      ...F,
      id: F.id ?? no,
      ownerState: ne
    }), /* @__PURE__ */ f.jsx(HI, {
      as: S,
      className: Ie.icon,
      ownerState: ne
    }), /* @__PURE__ */ f.jsx(nI, {
      value: ge,
      children: /* @__PURE__ */ f.jsx(xI, {
        id: `menu-${x || ""}`,
        anchorEl: xe,
        open: oe,
        onClose: Un,
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
            ...ar
          },
          paper: {
            ...Pe,
            ref: St,
            style: {
              minWidth: ol,
              ...Pe?.style
            }
          }
        },
        children: qc
      })
    })]
  });
}), GI = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"]
  }, wx, t);
  return {
    ...t,
    ...r
  };
}, zp = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Kt(e) && e !== "variant"
}, XI = U(jp, zp)(""), QI = U(Np, zp)(""), qI = U(Ap, zp)(""), ri = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    IconComponent: u = XT,
    id: m,
    input: v,
    inputProps: d,
    label: S,
    labelId: b,
    MenuProps: C,
    multiple: y = !1,
    native: h = !1,
    onClose: x,
    onOpen: w,
    open: E,
    renderValue: k,
    SelectDisplayProps: T,
    variant: P = "outlined",
    ...R
  } = r, j = h ? TI : YI, [$] = $o({
    props: r,
    states: ["variant", "error"]
  }), g = $.variant || P, M = {
    ...r,
    variant: g,
    classes: s
  }, I = GI(M), {
    root: O,
    ...L
  } = I, N = v || {
    standard: /* @__PURE__ */ f.jsx(XI, {
      ownerState: M
    }),
    outlined: /* @__PURE__ */ f.jsx(QI, {
      label: S,
      ownerState: M
    }),
    filled: /* @__PURE__ */ f.jsx(qI, {
      ownerState: M
    })
  }[g], A = ct(n, Oo(N));
  return /* @__PURE__ */ f.jsx(p.Fragment, {
    children: /* @__PURE__ */ p.cloneElement(N, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: j,
      inputProps: {
        children: i,
        error: $.error,
        IconComponent: u,
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
          onClose: x,
          onOpen: w,
          open: E,
          renderValue: k,
          SelectDisplayProps: {
            id: m,
            ...T
          }
        },
        ...d,
        classes: d ? Mt(L, d.classes) : L,
        ...v ? v.props.inputProps : {}
      },
      ...(y && h || c) && g === "outlined" ? {
        notched: !0
      } : {},
      ref: A,
      className: J(N.props.className, l, I.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!v && {
        variant: g
      },
      ...R
    })
  });
});
ri.muiName = "Select";
function ZI(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = Jn();
  p.useEffect(() => {
    if (!o)
      return;
    function y(h) {
      h.defaultPrevented || h.key === "Escape" && r?.(h, "escapeKeyDown");
    }
    return document.addEventListener("keydown", y), () => {
      document.removeEventListener("keydown", y);
    };
  }, [o, r]);
  const l = Qe((y, h) => {
    r?.(y, h);
  }), a = Qe((y) => {
    !r || y == null || s.start(y, () => {
      l(null, "timeout");
    });
  });
  p.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const c = (y) => {
    r?.(y, "clickaway");
  }, u = s.clear, m = p.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), v = (y) => (h) => {
    const x = y.onBlur;
    x?.(h), m();
  }, d = (y) => (h) => {
    const x = y.onFocus;
    x?.(h), u();
  }, S = (y) => (h) => {
    const x = y.onMouseEnter;
    x?.(h), u();
  }, b = (y) => (h) => {
    const x = y.onMouseLeave;
    x?.(h), m();
  };
  return p.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", m), window.addEventListener("blur", u), () => {
        window.removeEventListener("focus", m), window.removeEventListener("blur", u);
      };
  }, [n, o, m, u]), {
    getRootProps: (y = {}) => {
      const h = {
        ...ja(e),
        ...ja(y)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...y,
        ...h,
        onBlur: v(h),
        onFocus: d(h),
        onMouseEnter: S(h),
        onMouseLeave: b(h)
      };
    },
    onClickAway: c
  };
}
function JI(e) {
  return ce("MuiSnackbarContent", e);
}
ae("MuiSnackbarContent", ["root", "message", "action"]);
const eM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, JI, t);
}, tM = U(or, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Fd(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Fd(e.palette.background.default, t),
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
})), nM = U("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), rM = U("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), oM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, c = r, u = eM(c);
  return /* @__PURE__ */ f.jsxs(tM, {
    role: l,
    elevation: 6,
    className: J(u.root, i),
    ownerState: c,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ f.jsx(nM, {
      className: u.message,
      ownerState: c,
      children: s
    }), o ? /* @__PURE__ */ f.jsx(rM, {
      className: u.action,
      ownerState: c,
      children: o
    }) : null]
  });
});
function iM(e) {
  return ce("MuiSnackbar", e);
}
ae("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const sM = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${Z(n.vertical)}${Z(n.horizontal)}`]
  };
  return ue(r, iM, t);
}, lM = U("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${Z(n.anchorOrigin.vertical)}${Z(n.anchorOrigin.horizontal)}`]];
  }
})(ye(({
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
}))), aM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiSnackbar"
  }), o = eo(), i = {
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
    disableWindowBlurListener: v = !1,
    message: d,
    onBlur: S,
    onClose: b,
    onFocus: C,
    onMouseEnter: y,
    onMouseLeave: h,
    open: x,
    resumeHideDuration: w,
    slots: E = {},
    slotProps: k = {},
    transitionDuration: T = i,
    ...P
  } = r, R = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    },
    autoHideDuration: c,
    disableWindowBlurListener: v,
    transitionDuration: T
  }, j = sM(R), {
    getRootProps: $,
    onClickAway: g
  } = ZI(R), [M, I] = p.useState(!0), O = {
    slots: E,
    slotProps: k
  }, [L, N] = ve("root", {
    ref: n,
    className: [j.root, m],
    elementType: lM,
    getSlotProps: $,
    externalForwardedProps: {
      ...O,
      ...P
    },
    ownerState: R
  }), [A, {
    ownerState: z,
    ...F
  }] = ve("clickAwayListener", {
    elementType: MP,
    externalForwardedProps: O,
    getSlotProps: (X) => ({
      onClickAway: (...V) => {
        const ee = V[0];
        X.onClickAway?.(...V), !ee?.defaultMuiPrevented && g(...V);
      }
    }),
    ownerState: R
  }), [W, _] = ve("content", {
    elementType: oM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    additionalProps: {
      message: d,
      action: s
    },
    ownerState: R
  }), [Q, G] = ve("transition", {
    elementType: Us,
    externalForwardedProps: O,
    getSlotProps: (X) => ({
      onEnter: (...V) => {
        X.onEnter?.(...V), I(!1);
      },
      onExited: (...V) => {
        X.onExited?.(...V), I(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: x,
      timeout: T,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: R
  });
  return !x && M ? null : /* @__PURE__ */ f.jsx(A, {
    ...F,
    ...E.clickAwayListener && {
      ownerState: z
    },
    children: /* @__PURE__ */ f.jsx(L, {
      ...N,
      children: /* @__PURE__ */ f.jsx(Q, {
        ...G,
        children: u || /* @__PURE__ */ f.jsx(W, {
          ..._
        })
      })
    })
  });
});
function cM(e) {
  return ce("MuiTooltip", e);
}
const xn = ae("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function uM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const dM = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${Z(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return ue(s, cM, t);
}, fM = U(px, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(ye(({
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
}))), pM = U("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${Z(n.placement.split("-")[0])}`]];
  }
})(ye(({
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
      lineHeight: `${uM(16 / 14)}em`,
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
}))), mM = U("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(ye(({
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
let jl = !1;
const Cg = new Yc();
let Yi = {
  x: 0,
  y: 0
};
function Ll(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const Uo = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    enterDelay: v = 100,
    enterNextDelay: d = 0,
    enterTouchDelay: S = 700,
    followCursor: b = !1,
    id: C,
    leaveDelay: y = 0,
    leaveTouchDelay: h = 1500,
    onClose: x,
    onOpen: w,
    open: E,
    placement: k = "bottom",
    slotProps: T = {},
    slots: P = {},
    title: R,
    ...j
  } = r, $ = /* @__PURE__ */ p.isValidElement(i) ? i : /* @__PURE__ */ f.jsx("span", {
    children: i
  }), g = eo(), [M, I] = p.useState(), [O, L] = p.useState(null), N = p.useRef(!1), A = u || b, z = Jn(), F = Jn(), W = Jn(), _ = Jn(), [Q, G] = Aa({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let X = Q;
  const V = kr(C), ee = p.useRef(), K = Qe(() => {
    ee.current !== void 0 && (document.body.style.WebkitUserSelect = ee.current, ee.current = void 0), _.clear();
  });
  p.useEffect(() => K, [K]);
  const re = (q) => {
    Cg.clear(), jl = !0, G(!0), w && !X && w(q);
  }, pe = Qe(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (q) => {
      Cg.start(800 + y, () => {
        jl = !1;
      }), G(!1), x && X && x(q), z.start(g.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), ke = (q) => {
    M?.disabled || N.current && q.type !== "touchstart" || (M && M.removeAttribute("title"), F.clear(), W.clear(), v || jl && d ? F.start(jl ? d : v, () => {
      re(q);
    }) : re(q));
  }, be = (q) => {
    F.clear(), W.start(y, () => {
      pe(q);
    });
  }, [, he] = p.useState(!1), le = (q) => {
    const we = q?.target ?? M;
    if (!we || we.disabled || !La(we)) {
      he(!1);
      const Ct = q ?? new Event("blur");
      !q && we && (Object.defineProperty(Ct, "target", {
        value: we
      }), Object.defineProperty(Ct, "currentTarget", {
        value: we
      })), be(Ct);
    }
  }, Oe = (q) => {
    if (M || I(q.currentTarget), La(q.target)) {
      const we = (Ct) => {
        Ct.target.disabled && le(Ct), Ct.target.removeEventListener("blur", we);
      };
      q.target.addEventListener("blur", we), he(!0), ke(q);
    }
  }, We = (q) => {
    N.current = !0;
    const we = $.props;
    we.onTouchStart && we.onTouchStart(q);
  }, Re = (q) => {
    We(q), W.clear(), z.clear(), K(), ee.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", _.start(S, () => {
      document.body.style.WebkitUserSelect = ee.current, ke(q);
    });
  }, Le = (q) => {
    $.props.onTouchEnd && $.props.onTouchEnd(q), K(), W.start(h, () => {
      pe(q);
    });
  };
  p.useEffect(() => {
    if (!X)
      return;
    function q(we) {
      we.key === "Escape" && pe(we);
    }
    return document.addEventListener("keydown", q), () => {
      document.removeEventListener("keydown", q);
    };
  }, [pe, X]);
  const de = ct(Oo($), I, n);
  !R && R !== 0 && (X = !1);
  const Te = p.useRef(), Je = (q) => {
    const we = $.props;
    we.onMouseMove && we.onMouseMove(q), Yi = {
      x: q.clientX,
      y: q.clientY
    }, Te.current && Te.current.update();
  }, ge = {}, Se = typeof R == "string";
  l ? (ge.title = !X && Se && !c ? R : null, ge["aria-describedby"] = X ? V : null) : (ge["aria-label"] = Se ? R : null, ge["aria-labelledby"] = X && !Se ? V : null);
  const Ne = {
    ...ge,
    ...j,
    ...$.props,
    className: J(j.className, $.props.className),
    onTouchStart: We,
    ref: de,
    ...b ? {
      onMouseMove: Je
    } : {}
  }, Ke = {};
  m || (Ne.onTouchStart = Re, Ne.onTouchEnd = Le), c || (Ne.onMouseOver = Ll(ke, Ne.onMouseOver), Ne.onMouseLeave = Ll(be, Ne.onMouseLeave), A || (Ke.onMouseOver = ke, Ke.onMouseLeave = be)), a || (Ne.onFocus = Ll(Oe, Ne.onFocus), Ne.onBlur = Ll(le, Ne.onBlur), A || (Ke.onFocus = Oe, Ke.onBlur = le));
  const xe = {
    ...r,
    arrow: o,
    disableInteractive: A,
    placement: k,
    touch: N.current
  }, oe = typeof T.popper == "function" ? T.popper(xe) : T.popper, Ce = p.useMemo(() => {
    let q = [{
      name: "arrow",
      enabled: !!O,
      options: {
        element: O,
        padding: 4
      }
    }];
    return oe?.popperOptions?.modifiers && (q = q.concat(oe.popperOptions.modifiers)), {
      ...oe?.popperOptions,
      modifiers: q
    };
  }, [O, oe?.popperOptions]), Ye = dM(xe), fe = {
    slots: P,
    slotProps: {
      arrow: T.arrow,
      popper: oe,
      tooltip: T.tooltip,
      transition: T.transition
    }
  }, [nt, rt] = ve("popper", {
    elementType: fM,
    externalForwardedProps: fe,
    ownerState: xe,
    className: Ye.popper
  }), [vn, Ue] = ve("transition", {
    elementType: Us,
    externalForwardedProps: fe,
    ownerState: xe
  }), [Un, nn] = ve("tooltip", {
    elementType: pM,
    className: Ye.tooltip,
    externalForwardedProps: fe,
    ownerState: xe
  }), [lr, D] = ve("arrow", {
    elementType: mM,
    className: Ye.arrow,
    externalForwardedProps: fe,
    ownerState: xe,
    ref: L
  });
  return /* @__PURE__ */ f.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ p.cloneElement($, Ne), /* @__PURE__ */ f.jsx(nt, {
      as: px,
      placement: k,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: Yi.y,
          left: Yi.x,
          right: Yi.x,
          bottom: Yi.y,
          width: 0,
          height: 0
        })
      } : M,
      popperRef: Te,
      open: M ? X : !1,
      id: V,
      transition: !0,
      ...Ke,
      ...rt,
      popperOptions: Ce,
      children: ({
        TransitionProps: q
      }) => /* @__PURE__ */ f.jsx(vn, {
        timeout: g.transitions.duration.shorter,
        ...q,
        ...Ue,
        children: /* @__PURE__ */ f.jsxs(Un, {
          ...nn,
          children: [R, o ? /* @__PURE__ */ f.jsx(lr, {
            ...D
          }) : null]
        })
      })
    })]
  });
}), He = xk({
  createStyledComponent: U("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => me({
    props: e,
    name: "MuiStack"
  })
});
function hM(e) {
  return ce("MuiSwitch", e);
}
const Ft = ae("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), gM = (e) => {
  const {
    classes: t,
    edge: n,
    size: r,
    color: o,
    checked: i,
    disabled: s
  } = e, l = {
    root: ["root", n && `edge${Z(n)}`, `size${Z(r)}`],
    switchBase: ["switchBase", `color${Z(o)}`, i && "checked", s && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, a = ue(l, hM, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...a
  };
}, yM = U("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.edge && t[`edge${Z(n.edge)}`], t[`size${Z(n.size)}`]];
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
      [`& .${Ft.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${Ft.switchBase}`]: {
        padding: 4,
        [`&.${Ft.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), vM = U(yx, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.switchBase, {
      [`& .${Ft.input}`]: t.input
    }, n.color !== "default" && t[`color${Z(n.color)}`]];
  }
})(ye(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
  ...lt(e, ["left", "transform"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${Ft.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${Ft.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${Ft.checked} + .${Ft.track}`]: {
    opacity: 0.5
  },
  [`&.${Ft.disabled} + .${Ft.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${Ft.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), ye(({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(Wt(["light"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ft.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${Ft.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${Ft.checked} + .${Ft.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
}))), xM = U("span", {
  name: "MuiSwitch",
  slot: "Track"
})(ye(({
  theme: e
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  ...lt(e, ["opacity", "background-color"], {
    duration: e.transitions.duration.shortest
  }),
  "@media (forced-colors: active)": {
    boxSizing: "border-box",
    border: "1px solid ButtonBorder"
  },
  backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
  opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}`
}))), SM = U("span", {
  name: "MuiSwitch",
  slot: "Thumb"
})(ye(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  boxSizing: "border-box",
  border: "1px solid transparent",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), kg = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  } = r, v = {
    ...r,
    color: i,
    edge: s,
    size: l
  }, d = gM(v), S = u.input, b = {
    slots: c,
    slotProps: u
  }, [C, y] = ve("root", {
    className: J(d.root, o),
    elementType: yM,
    externalForwardedProps: b,
    ownerState: v,
    additionalProps: {
      sx: a
    }
  }), [h, x] = ve("thumb", {
    className: d.thumb,
    elementType: SM,
    externalForwardedProps: b,
    ownerState: v
  }), w = /* @__PURE__ */ f.jsx(h, {
    ...x
  }), [E, k] = ve("track", {
    className: d.track,
    elementType: xM,
    externalForwardedProps: b,
    ownerState: v
  });
  return /* @__PURE__ */ f.jsxs(C, {
    ...y,
    children: [/* @__PURE__ */ f.jsx(vM, {
      type: "checkbox",
      icon: w,
      checkedIcon: w,
      ref: n,
      ownerState: v,
      ...m,
      classes: {
        ...d,
        root: d.switchBase
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
          root: typeof u.switchBase == "function" ? u.switchBase(v) : u.switchBase
        },
        input: kp(typeof S == "function" ? S(v) : S, {
          role: "switch"
        })
      }
    }), /* @__PURE__ */ f.jsx(E, {
      ...k
    })]
  });
});
function bM(e) {
  return ce("MuiTab", e);
}
const Ln = ae("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), wM = (e) => {
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
    root: ["root", i && s && "labelIcon", `textColor${Z(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return ue(c, bM, t);
}, CM = U(Qr, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${Z(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${Ln.icon}`]: t.icon
    }];
  }
})(ye(({
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
      [`& > .${Ln.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${Ln.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${Ln.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${Ln.icon}`]: {
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
      [`&.${Ln.selected}`]: {
        opacity: 1
      },
      [`&.${Ln.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Ln.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${Ln.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Ln.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${Ln.disabled}`]: {
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
}))), Gi = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    onChange: v,
    onClick: d,
    onFocus: S,
    // eslint-disable-next-line react/prop-types
    selected: b,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: y = "inherit",
    value: h,
    wrapped: x = !1,
    ...w
  } = r, E = Cx(), k = Ex({
    id: h,
    ref: n,
    disabled: i,
    selected: b
  }), P = E.getItemMap().size === 0 && b ? 0 : k.tabIndex, R = {
    ...r,
    disabled: i,
    disableFocusRipple: s,
    selected: b,
    icon: !!a,
    iconPosition: c,
    label: !!m,
    fullWidth: l,
    textColor: y,
    wrapped: x
  }, j = wM(R), $ = a && m && /* @__PURE__ */ p.isValidElement(a) ? /* @__PURE__ */ p.cloneElement(a, {
    className: J(j.icon, a.props.className)
  }) : a, g = (I) => {
    !b && v && v(I, h), d && d(I);
  }, M = (I) => {
    C && !b && v && v(I, h), S && S(I);
  };
  return /* @__PURE__ */ f.jsxs(CM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: J(j.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": b,
    disabled: i,
    onClick: g,
    onFocus: M,
    tabIndex: P,
    ownerState: R,
    ...w,
    children: [c === "top" || c === "start" ? /* @__PURE__ */ f.jsxs(p.Fragment, {
      children: [$, m]
    }) : /* @__PURE__ */ f.jsxs(p.Fragment, {
      children: [m, $]
    }), u]
  });
}), Dx = /* @__PURE__ */ p.createContext();
function kM(e) {
  return ce("MuiTable", e);
}
ae("MuiTable", ["root", "stickyHeader"]);
const EM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return ue({
    root: ["root", n && "stickyHeader"]
  }, kM, t);
}, TM = U("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.stickyHeader && t.stickyHeader];
  }
})(ye(({
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
}))), Eg = "table", PM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = Eg,
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
  }, m = EM(u), v = p.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ f.jsx(Dx.Provider, {
    value: v,
    children: /* @__PURE__ */ f.jsx(TM, {
      as: i,
      role: i === Eg ? null : "table",
      ref: n,
      className: J(m.root, o),
      ownerState: u,
      ...c
    })
  });
}), Xc = /* @__PURE__ */ p.createContext();
function RM(e) {
  return ce("MuiTableBody", e);
}
ae("MuiTableBody", ["root"]);
const IM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, RM, t);
}, MM = U("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), $M = {
  variant: "body"
}, Tg = "tbody", OM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Tg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = IM(l);
  return /* @__PURE__ */ f.jsx(Xc.Provider, {
    value: $M,
    children: /* @__PURE__ */ f.jsx(MM, {
      className: J(a.root, o),
      as: i,
      ref: n,
      role: i === Tg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function AM(e) {
  return ce("MuiTableCell", e);
}
const jM = ae("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), LM = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: o,
    size: i,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${Z(r)}`, o !== "normal" && `padding${Z(o)}`, `size${Z(i)}`]
  };
  return ue(l, AM, t);
}, NM = U("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${Z(n.size)}`], n.padding !== "normal" && t[`padding${Z(n.padding)}`], n.align !== "inherit" && t[`align${Z(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(ye(({
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
      [`&.${jM.paddingCheckbox}`]: {
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
}))), on = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    ...v
  } = r, d = p.useContext(Dx), S = p.useContext(Xc), b = S && S.variant === "head";
  let C;
  s ? C = s : C = b ? "th" : "td";
  let y = a;
  C === "td" ? y = void 0 : !y && b && (y = "col");
  const h = m || S && S.variant, x = {
    ...r,
    align: o,
    component: C,
    padding: l || (d && d.padding ? d.padding : "normal"),
    size: c || (d && d.size ? d.size : "medium"),
    sortDirection: u,
    stickyHeader: h === "head" && d && d.stickyHeader,
    variant: h
  }, w = LM(x);
  let E = null;
  return u && (E = u === "asc" ? "ascending" : "descending"), /* @__PURE__ */ f.jsx(NM, {
    as: C,
    ref: n,
    className: J(w.root, i),
    "aria-sort": E,
    scope: y,
    ownerState: x,
    ...v
  });
});
function zM(e) {
  return ce("MuiTableContainer", e);
}
ae("MuiTableContainer", ["root"]);
const BM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, zM, t);
}, FM = U("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), DM = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = BM(l);
  return /* @__PURE__ */ f.jsx(FM, {
    ref: n,
    as: i,
    className: J(a.root, o),
    ownerState: l,
    ...s
  });
});
function _M(e) {
  return ce("MuiTableHead", e);
}
ae("MuiTableHead", ["root"]);
const WM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, _M, t);
}, UM = U("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), HM = {
  variant: "head"
}, Pg = "thead", VM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Pg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = WM(l);
  return /* @__PURE__ */ f.jsx(Xc.Provider, {
    value: HM,
    children: /* @__PURE__ */ f.jsx(UM, {
      as: i,
      className: J(a.root, o),
      ref: n,
      role: i === Pg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), KM = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), YM = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function GM(e) {
  return ce("MuiTableRow", e);
}
const Rg = ae("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), XM = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return ue({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, GM, t);
}, QM = U("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.head && t.head, n.footer && t.footer];
  }
})(ye(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${Rg.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Rg.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Ig = "tr", Bu = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Ig,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, c = p.useContext(Xc), u = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: c && c.variant === "head",
    footer: c && c.variant === "footer"
  }, m = XM(u);
  return /* @__PURE__ */ f.jsx(QM, {
    as: i,
    ref: n,
    className: J(m.root, o),
    role: i === Ig ? null : "row",
    ownerState: u,
    ...a
  });
});
function qM(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function ZM(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = qM,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let c = !1;
  const u = () => {
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
  return a === n ? (o(new Error("Element already at target position")), u) : (requestAnimationFrame(m), u);
}
const JM = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function e$(e) {
  const {
    onChange: t,
    ...n
  } = e, r = p.useRef(), o = p.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return st(() => {
    const s = _c(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = Wn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), p.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ f.jsx("div", {
    style: JM,
    ...n,
    ref: o
  });
}
function t$(e) {
  return ce("MuiTabScrollButton", e);
}
const n$ = ae("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), r$ = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return ue({
    root: ["root", n, r && "disabled"]
  }, t$, t);
}, o$ = U(Qr, {
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
  [`&.${n$.disabled}`]: {
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
}), i$ = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    ...v
  } = u, d = Fc(), S = {
    isRtl: d,
    ...r
  }, b = r$(S), C = i.StartScrollButtonIcon ?? KM, y = i.EndScrollButtonIcon ?? YM, h = Ti({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: S
  }), x = Ti({
    elementType: y,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: S
  });
  return /* @__PURE__ */ f.jsx(o$, {
    component: "div",
    className: J(b.root, o),
    ref: n,
    role: null,
    ownerState: S,
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
      ...x
    })
  });
});
function s$(e) {
  return ce("MuiTabs", e);
}
const Fu = ae("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), l$ = (e) => {
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
  return ue({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", i && "scrollableY"],
    list: ["list", t && "vertical", s && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [o && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, s$, a);
}, a$ = U("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Fu.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Fu.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(ye(({
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
      [`& .${Fu.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), c$ = U("div", {
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
}), u$ = U("div", {
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
}), d$ = U("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(ye(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  ...lt(e),
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
}))), f$ = U(e$)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Mg = {}, p$ = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTabs"
  }), o = eo(), i = Fc(), s = Kc(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: c,
    centered: u = !1,
    children: m,
    className: v,
    component: d = "div",
    allowScrollButtonsMobile: S = !1,
    indicatorColor: b = "primary",
    onChange: C,
    orientation: y = "horizontal",
    scrollButtons: h = "auto",
    selectionFollowsFocus: x,
    slots: w = {},
    slotProps: E = {},
    textColor: k = "primary",
    value: T,
    variant: P = "standard",
    visibleScrollbar: R = !1,
    ...j
  } = r, $ = P === "scrollable", g = y === "vertical", M = g ? "scrollTop" : "scrollLeft", I = g ? "top" : "left", O = g ? "bottom" : "right", L = g ? "clientHeight" : "clientWidth", N = g ? "height" : "width", A = {
    ...r,
    component: d,
    allowScrollButtonsMobile: S,
    indicatorColor: b,
    orientation: y,
    vertical: g,
    scrollButtons: h,
    textColor: k,
    variant: P,
    visibleScrollbar: R,
    fixed: !$,
    hideScrollbar: $ && !R,
    scrollableX: $ && !g,
    scrollableY: $ && g,
    centered: u && !$,
    scrollButtonsHideMobile: !S
  }, z = l$(A), F = Ti({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: A
  }), W = Ti({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: A
  }), [_, Q] = p.useState(!1), [G, X] = p.useState(Mg), [V, ee] = p.useState(!1), [K, re] = p.useState(!1), [pe, ke] = p.useState(!1), be = T === !1 ? null : T, [he, le] = p.useState(!1), [Oe, We] = p.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Re = /* @__PURE__ */ new Map(), Le = p.useRef(null), de = p.useRef(null), Te = {
    slots: w,
    slotProps: E
  }, Je = () => {
    const se = Le.current;
    let ne;
    if (se) {
      const Pe = se.getBoundingClientRect();
      ne = {
        clientWidth: se.clientWidth,
        scrollLeft: se.scrollLeft,
        scrollTop: se.scrollTop,
        scrollWidth: se.scrollWidth,
        top: Pe.top,
        bottom: Pe.bottom,
        left: Pe.left,
        right: Pe.right
      };
    }
    let Ie;
    if (se && T !== !1) {
      const Pe = de.current.children;
      if (Pe.length > 0) {
        const St = Pe[Re.get(T)];
        Ie = St ? St.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: ne,
      tabMeta: Ie
    };
  }, ge = Qe(() => {
    const {
      tabsMeta: se,
      tabMeta: ne
    } = Je();
    let Ie = 0, Pe;
    g ? (Pe = "top", ne && se && (Ie = ne.top - se.top + se.scrollTop)) : (Pe = i ? "right" : "left", ne && se && (Ie = (i ? -1 : 1) * (ne[Pe] - se[Pe] + se.scrollLeft)));
    const St = {
      [Pe]: Ie,
      // May be wrong until the font is loaded.
      [N]: ne ? ne[N] : 0
    };
    if (typeof G[Pe] != "number" || typeof G[N] != "number")
      X(St);
    else {
      const ar = Math.abs(G[Pe] - St[Pe]), Hn = Math.abs(G[N] - St[N]);
      (ar >= 1 || Hn >= 1) && X(St);
    }
  }), Se = (se, {
    animation: ne = !0
  } = {}) => {
    ne && !s.shouldReduceMotion ? ZM(M, Le.current, se, {
      duration: o.transitions.duration.standard
    }) : Le.current[M] = se;
  }, Ne = (se) => {
    let ne = Le.current[M];
    g ? ne += se : ne += se * (i ? -1 : 1), Se(ne);
  }, Ke = () => {
    const se = Le.current[L];
    let ne = 0;
    const Ie = Array.from(de.current.children);
    for (let Pe = 0; Pe < Ie.length; Pe += 1) {
      const St = Ie[Pe];
      if (ne + St[L] > se) {
        Pe === 0 && (ne = se);
        break;
      }
      ne += St[L];
    }
    return ne;
  }, xe = () => {
    Ne(-1 * Ke());
  }, oe = () => {
    Ne(Ke());
  }, [Ce, {
    onChange: Ye,
    ...fe
  }] = ve("scrollbar", {
    className: J(z.scrollableX, z.hideScrollbar),
    elementType: f$,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Te,
    ownerState: A
  }), nt = p.useCallback((se) => {
    Ye?.(se), We({
      overflow: null,
      scrollbarWidth: se
    });
  }, [Ye]), [rt, vn] = ve("scrollButtons", {
    className: z.scrollButtons,
    elementType: i$,
    externalForwardedProps: Te,
    ownerState: A,
    additionalProps: {
      orientation: y,
      slots: {
        StartScrollButtonIcon: w.startScrollButtonIcon,
        EndScrollButtonIcon: w.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: F,
        endScrollButtonIcon: W
      }
    }
  }), Ue = () => {
    const se = {};
    se.scrollbarSizeListener = $ ? /* @__PURE__ */ f.jsx(Ce, {
      ...fe,
      onChange: nt
    }) : null;
    const Ie = $ && (h === "auto" && (V || K) || h === !0);
    return se.scrollButtonStart = Ie ? /* @__PURE__ */ f.jsx(rt, {
      direction: i ? "right" : "left",
      onClick: xe,
      disabled: !V,
      ...vn
    }) : null, se.scrollButtonEnd = Ie ? /* @__PURE__ */ f.jsx(rt, {
      direction: i ? "left" : "right",
      onClick: oe,
      disabled: !K,
      ...vn
    }) : null, se;
  }, Un = Qe((se) => {
    const {
      tabsMeta: ne,
      tabMeta: Ie
    } = Je();
    if (!(!Ie || !ne)) {
      if (Ie[I] < ne[I]) {
        const Pe = ne[M] + (Ie[I] - ne[I]);
        Se(Pe, {
          animation: se
        });
      } else if (Ie[O] > ne[O]) {
        const Pe = ne[M] + (Ie[O] - ne[O]);
        Se(Pe, {
          animation: se
        });
      }
    }
  }), nn = Qe(() => {
    $ && h !== !1 && ke(!pe);
  });
  p.useEffect(() => {
    const se = _c(() => {
      Le.current && ge();
    });
    let ne;
    const Ie = (ar) => {
      ar.forEach((Hn) => {
        Hn.removedNodes.forEach((no) => {
          ne?.unobserve(no);
        }), Hn.addedNodes.forEach((no) => {
          ne?.observe(no);
        });
      }), se(), nn();
    }, Pe = Wn(Le.current);
    Pe.addEventListener("resize", se);
    let St;
    return typeof ResizeObserver < "u" && (ne = new ResizeObserver(se), Array.from(de.current.children).forEach((ar) => {
      ne.observe(ar);
    })), typeof MutationObserver < "u" && (St = new MutationObserver(Ie), St.observe(de.current, {
      childList: !0
    })), () => {
      se.clear(), Pe.removeEventListener("resize", se), St?.disconnect(), ne?.disconnect();
    };
  }, [ge, nn]), p.useEffect(() => {
    const se = Array.from(de.current.children), ne = se.length;
    if (typeof IntersectionObserver < "u" && ne > 0 && $ && h !== !1) {
      const Ie = se[0], Pe = se[ne - 1], St = {
        root: Le.current,
        threshold: 0.99
      }, ar = (ie) => {
        ee(!ie[0].isIntersecting);
      }, Hn = new IntersectionObserver(ar, St);
      Hn.observe(Ie);
      const no = (ie) => {
        re(!ie[0].isIntersecting);
      }, Y = new IntersectionObserver(no, St);
      return Y.observe(Pe), () => {
        Hn.disconnect(), Y.disconnect();
      };
    }
  }, [$, h, pe, m?.length]), p.useEffect(() => {
    Q(!0);
  }, []), p.useEffect(() => {
    ge();
  }), p.useEffect(() => {
    Un(Mg !== G);
  }, [Un, G]), p.useImperativeHandle(c, () => ({
    updateIndicator: ge,
    updateScrollButtons: nn
  }), [ge, nn]);
  const [lr, D] = ve("indicator", {
    className: z.indicator,
    elementType: d$,
    externalForwardedProps: Te,
    ownerState: A,
    additionalProps: {
      style: G
    }
  }), q = /* @__PURE__ */ f.jsx(lr, {
    ...D
  }), we = kx({
    activeItemId: he ? void 0 : be,
    orientation: y,
    isRtl: i
  }), Ct = we.getContainerProps(), Qc = p.Children.toArray(m).filter(p.isValidElement).map((se, ne) => {
    const Ie = se.props.value === void 0 ? ne : se.props.value;
    return Re.set(Ie, ne), {
      child: se,
      index: ne,
      childValue: Ie
    };
  }).map(({
    child: se,
    childValue: ne
  }) => {
    const Ie = ne === T;
    return /* @__PURE__ */ p.cloneElement(se, {
      fullWidth: P === "fullWidth",
      indicator: Ie && !_ && q,
      selected: Ie,
      selectionFollowsFocus: x,
      onChange: C,
      textColor: k,
      value: ne
    });
  }), $i = Ue(), [Pr, rl] = ve("root", {
    ref: n,
    className: J(z.root, v),
    elementType: a$,
    externalForwardedProps: {
      ...Te,
      ...j,
      component: d
    },
    ownerState: A
  }), [Ao, jo] = ve("scroller", {
    ref: Le,
    className: z.scroller,
    elementType: c$,
    externalForwardedProps: Te,
    ownerState: A,
    additionalProps: {
      style: {
        overflow: Oe.overflow,
        [g ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: R ? void 0 : -Oe.scrollbarWidth
      }
    }
  }), Lo = ct(Ct.ref, de), qc = (se) => {
    const ne = de.current;
    Zn(dt(ne))?.getAttribute("role") === "tab" && Ct.onKeyDown(se);
  }, [ol, Oi] = ve("list", {
    ref: Lo,
    className: z.list,
    elementType: u$,
    externalForwardedProps: Te,
    ownerState: A,
    getSlotProps: (se) => ({
      ...se,
      onBlur: (ne) => {
        xo(ne.currentTarget, ne.relatedTarget) || le(!1), se.onBlur?.(ne);
      },
      onKeyDown: (ne) => {
        qc(ne), se.onKeyDown?.(ne);
      },
      onFocus: (ne) => {
        le(!0), Ct.onFocus(ne), se.onFocus?.(ne);
      }
    })
  });
  return /* @__PURE__ */ f.jsxs(Pr, {
    ...rl,
    children: [$i.scrollButtonStart, $i.scrollbarSizeListener, /* @__PURE__ */ f.jsxs(Ao, {
      ...jo,
      children: [/* @__PURE__ */ f.jsx(ol, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": y === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Oi,
        children: /* @__PURE__ */ f.jsx(Lp.Provider, {
          value: we,
          children: Qc
        })
      }), _ && q]
    }), $i.scrollButtonEnd]
  });
});
function m$(e) {
  return ce("MuiTextField", e);
}
ae("MuiTextField", ["root"]);
const h$ = {
  standard: jp,
  filled: Ap,
  outlined: Np
}, g$ = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, m$, t);
}, y$ = U(yR, {
  name: "MuiTextField",
  slot: "Root"
})({}), Mr = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    fullWidth: v = !1,
    helperText: d,
    id: S,
    inputRef: b,
    label: C,
    maxRows: y,
    minRows: h,
    multiline: x = !1,
    name: w,
    onBlur: E,
    onChange: k,
    onFocus: T,
    placeholder: P,
    required: R = !1,
    rows: j,
    select: $ = !1,
    slots: g = {},
    slotProps: M = {},
    type: I,
    value: O,
    variant: L = "outlined",
    ...N
  } = r, A = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: u,
    error: m,
    fullWidth: v,
    multiline: x,
    required: R,
    select: $,
    variant: L
  }, z = g$(A), F = kr(S), W = d && F ? `${F}-helper-text` : void 0, _ = C && F ? `${F}-label` : void 0, Q = h$[L], G = {
    slots: g,
    slotProps: M
  }, [X, V] = ve("select", {
    elementType: ri,
    externalForwardedProps: G,
    ownerState: A
  }), ee = $ && V.native, K = {}, re = G.slotProps.inputLabel;
  L === "outlined" && (re && typeof re.shrink < "u" && (K.notched = re.shrink), K.label = C), $ && (ee || (K.id = void 0), K["aria-describedby"] = void 0);
  const [pe, ke] = ve("root", {
    elementType: y$,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...G,
      ...N
    },
    ownerState: A,
    className: J(z.root, l),
    ref: n,
    additionalProps: {
      disabled: u,
      error: m,
      fullWidth: v,
      required: R,
      color: a,
      variant: L
    }
  }), [be, he] = ve("input", {
    elementType: Q,
    externalForwardedProps: G,
    additionalProps: K,
    ownerState: A
  }), [le, Oe] = ve("inputLabel", {
    elementType: WR,
    externalForwardedProps: G,
    ownerState: A
  }), [We, Re] = ve("htmlInput", {
    elementType: "input",
    externalForwardedProps: G,
    ownerState: A
  }), [Le, de] = ve("formHelperText", {
    elementType: CR,
    externalForwardedProps: G,
    ownerState: A
  }), Te = /* @__PURE__ */ f.jsx(be, {
    "aria-describedby": W,
    autoComplete: o,
    autoFocus: i,
    defaultValue: c,
    fullWidth: v,
    multiline: x,
    name: w,
    rows: j,
    maxRows: y,
    minRows: h,
    type: I,
    value: O,
    id: F,
    inputRef: b,
    onBlur: E,
    onChange: k,
    onFocus: T,
    placeholder: P,
    inputProps: Re,
    slots: {
      input: g.htmlInput ? We : void 0
    },
    ...he
  });
  return /* @__PURE__ */ f.jsxs(pe, {
    ...ke,
    children: [C != null && C !== "" && /* @__PURE__ */ f.jsx(le, {
      htmlFor: $ && !ee ? void 0 : F,
      id: _,
      ...$ && !ee && {
        component: "div"
      },
      ...Oe,
      children: C
    }), $ ? /* @__PURE__ */ f.jsx(X, {
      "aria-describedby": W,
      id: F,
      labelId: _,
      value: O,
      input: Te,
      ...V,
      children: s
    }) : Te, d && /* @__PURE__ */ f.jsx(Le, {
      id: W,
      ...de,
      children: d
    })]
  });
}), v$ = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), $g = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6m6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26"
})), x$ = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), Og = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"
})), S$ = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
})), b$ = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
})), w$ = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
})), C$ = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12z"
})), Ag = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), k$ = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), E$ = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"
})), T$ = xt(/* @__PURE__ */ f.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"
})), P$ = xt([/* @__PURE__ */ f.jsx("path", {
  d: "M12 5.99 19.53 19H4.47zM12 2 1 21h22z"
}, "0"), /* @__PURE__ */ f.jsx("path", {
  d: "M13 16h-2v2h2zm0-6h-2v5h2z"
}, "1")]), sn = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', Lt = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function pr({ children: e, sx: t }) {
  return /* @__PURE__ */ f.jsx(
    Ve,
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
function jg({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ f.jsxs(or, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ f.jsxs(
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
          typeof e == "string" ? /* @__PURE__ */ f.jsx(pr, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ f.jsx(ft, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function lo({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ f.jsxs(ft, { sx: n, children: [
    /* @__PURE__ */ f.jsxs(He, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ f.jsx(
        Ve,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ f.jsx(Ve, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function Bt({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ f.jsxs(ft, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ f.jsx(pr, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ f.jsx(
      Ve,
      {
        sx: {
          fontFamily: n ? sn : void 0,
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
function R$(e, t) {
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
function I$({ lines: e, running: t }) {
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
  }, [e]), !e.length && !t ? null : /* @__PURE__ */ f.jsxs(
    or,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: Lt.bg,
        color: Lt.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: sn,
        fontSize: 12,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ f.jsx(
          ft,
          {
            sx: {
              color: i.stream === "stderr" ? Lt.err : i.stream === "meta" ? Lt.dim : Lt.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ f.jsx(ft, { sx: { color: Lt.dim }, children: "▍issuing / communicating with ACME…" }),
        /* @__PURE__ */ f.jsx("div", { ref: n })
      ]
    }
  );
}
function M$({ ctx: e }) {
  const t = p.useMemo(() => Dc(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ f.jsx(E2, { theme: t, children: /* @__PURE__ */ f.jsx($$, { ctx: e }) });
}
function $$({ ctx: e }) {
  const [t, n] = p.useState("certs"), [r, o] = p.useState(null), [i, s] = p.useState(!1), [l, a] = p.useState(!1), [c, u] = p.useState([]), [m, v] = p.useState(""), [d, S] = p.useState("all"), [b, C] = p.useState(""), [y, h] = p.useState(""), [x, w] = p.useState("http-01"), [E, k] = p.useState(!1), [T, P] = p.useState(!0), [R, j] = p.useState(!1), [$, g] = p.useState([]), [M, I] = p.useState(""), [O, L] = p.useState(""), [N, A] = p.useState(""), [z, F] = p.useState(""), [W, _] = p.useState(!1), [Q, G] = p.useState(!1), [X, V] = p.useState(null), [ee, K] = p.useState(!1), [re, pe] = p.useState(!1), [ke, be] = p.useState(null), [he, le] = p.useState("acme"), [Oe, We] = p.useState([]), [Re, Le] = p.useState(50), [de, Te] = p.useState(!1), [Je, ge] = p.useState(null), Se = p.useCallback(
    async (D, q = {}) => {
      const we = await e.api(D, q);
      if (!we.ok) {
        const Ct = await we.json().catch(() => ({ detail: we.statusText }));
        throw new Error(Ct.detail || Ct.message || `Request failed with status ${we.status}`);
      }
      return we.json();
    },
    [e]
  ), Ne = p.useCallback(async () => {
    try {
      s(!0);
      const D = await Se("/engine/status");
      D && D.ok && o(D);
    } catch {
      o(null);
    } finally {
      s(!1);
    }
  }, [Se]), Ke = p.useCallback(async () => {
    try {
      const D = await Se("/certs");
      D && D.ok && Array.isArray(D.certs) && u(D.certs);
    } catch {
      u([]);
    }
  }, [Se]), xe = p.useCallback(async () => {
    Te(!0);
    try {
      const D = await Se(`/engine/logs?lines=${Re}&log_type=${he}`);
      D && D.ok && Array.isArray(D.lines) && We(D.lines);
    } catch (D) {
      ge(D.message);
    } finally {
      Te(!1);
    }
  }, [Se, Re, he]), oe = p.useCallback(async () => {
    await Promise.all([Ne(), Ke()]);
  }, [Ne, Ke]);
  p.useEffect(() => {
    oe();
  }, [oe]), p.useEffect(() => {
    t === "logs" && xe();
  }, [t, xe]);
  const Ce = async () => {
    a(!0);
    try {
      await Se("/certs/renew", { method: "POST" }), ge("ACME auto-renewal check completed for all certificates."), await oe();
    } catch (D) {
      ge(`Renew all failed: ${D.message}`);
    } finally {
      a(!1);
    }
  }, Ye = async (D) => {
    a(!0);
    try {
      await Se(`/certs/${encodeURIComponent(D)}/renew`, { method: "POST" }), ge(`Certificate for ${D} renewed successfully.`), await Ke();
    } catch (q) {
      ge(`Renew failed: ${q.message}`);
    } finally {
      a(!1);
    }
  }, fe = async (D) => {
    const q = !D.force_https;
    try {
      await Se(`/certs/${encodeURIComponent(D.domain)}/force-https`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: q })
      }), ge(`Force HTTPS for ${D.domain} ${q ? "enabled" : "disabled"}.`), await Ke();
    } catch (we) {
      ge(`Failed to update Force HTTPS: ${we.message}`);
    }
  }, nt = async (D) => {
    V(D), G(!0), K(!0);
    try {
      const q = await Se(`/certs/${encodeURIComponent(D.domain)}`);
      q && q.ok && V((we) => we ? { ...we, ...q } : q);
    } catch {
    } finally {
      K(!1);
    }
  }, rt = async () => {
    if (ke)
      try {
        await Se(`/certs/${encodeURIComponent(ke)}`, { method: "DELETE" }), ge(`Certificate for ${ke} deleted.`), pe(!1), be(null), await oe();
      } catch (D) {
        ge(`Delete failed: ${D.message}`);
      }
  }, vn = async () => {
    if (!b.trim()) {
      ge("Domain name is required.");
      return;
    }
    if (!T) {
      ge("You must agree to Let's Encrypt Subscriber Agreement.");
      return;
    }
    j(!0), g([]);
    const D = {
      domain: b.trim(),
      email: y.trim() || void 0,
      challenge_type: x,
      staging: E,
      agree_tos: T
    };
    try {
      if (e.run)
        for await (const q of e.run("/certs/issue", {
          method: "POST",
          body: D
        }))
          g((we) => R$(we, q));
      else
        (await Se("/certs/issue", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(D)
        })).ok && g([
          { stream: "stdout", text: `✓ Certificate issued for ${b}` },
          { stream: "meta", text: "✓ completed" }
        ]);
      ge(`Let's Encrypt certificate issued for ${b}!`), await oe();
    } catch (q) {
      g((we) => [
        ...we,
        { stream: "stderr", text: `Error: ${q.message}` }
      ]), ge(`Issuance failed: ${q.message}`);
    } finally {
      j(!1);
    }
  }, Ue = async () => {
    if (!M.trim() || !O.trim() || !N.trim()) {
      ge("Domain, Certificate PEM, and Private Key PEM are required.");
      return;
    }
    _(!0);
    try {
      await Se("/certs/custom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          domain: M.trim(),
          cert_pem: O,
          key_pem: N,
          ca_bundle: z.trim() || void 0
        })
      }), ge(`Custom SSL certificate for ${M} installed successfully!`), I(""), L(""), A(""), F(""), n("certs"), await oe();
    } catch (D) {
      ge(`Upload failed: ${D.message}`);
    } finally {
      _(!1);
    }
  }, Un = !!(r?.active ?? !0), nn = p.useMemo(() => c.filter((D) => !m || D.domain.toLowerCase().includes(m.toLowerCase()) || D.issuer.toLowerCase().includes(m.toLowerCase()) ? d === "letsencrypt" ? D.issuer.toLowerCase().includes("encrypt") : d === "custom" ? !D.issuer.toLowerCase().includes("encrypt") : d === "expiring" ? D.days_left <= 30 : !0 : !1), [c, m, d]), lr = p.useMemo(
    () => c.filter((D) => D.days_left <= 30).length,
    [c]
  );
  return /* @__PURE__ */ f.jsxs(ft, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ f.jsxs(
      He,
      {
        direction: { xs: "column", sm: "row" },
        spacing: 1.5,
        sx: { justifyContent: "space-between", alignItems: { sm: "center" } },
        children: [
          /* @__PURE__ */ f.jsxs(He, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ f.jsx(
              Ki,
              {
                size: "small",
                label: Un ? "RUNNING" : "STOPPED",
                color: Un ? "success" : "error",
                sx: { fontWeight: 700, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ f.jsx(Ve, { variant: "body2", sx: { color: "text.secondary" }, children: "hostpanel-ssld.service • User hp-ssl • Isolation /opt/hostpanel/etc/ssl" })
          ] }),
          /* @__PURE__ */ f.jsxs(He, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ f.jsx(Uo, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              Wo,
              {
                size: "small",
                onClick: oe,
                disabled: i,
                sx: { border: "1px solid", borderColor: "divider" },
                children: i ? /* @__PURE__ */ f.jsx(uo, { size: 16, color: "inherit" }) : /* @__PURE__ */ f.jsx(Ag, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(Uo, { title: "Renew All Expiring Certificates", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              Wo,
              {
                size: "small",
                color: "warning",
                onClick: Ce,
                disabled: l,
                sx: { border: "1px solid", borderColor: "divider" },
                children: /* @__PURE__ */ f.jsx($g, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(Uo, { title: "Upload Custom Certificate", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              Wo,
              {
                size: "small",
                onClick: () => n("custom"),
                sx: { border: "1px solid", borderColor: "divider" },
                children: /* @__PURE__ */ f.jsx(Og, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(
              Ir,
              {
                variant: "contained",
                color: "primary",
                size: "small",
                startIcon: /* @__PURE__ */ f.jsx(E$, {}),
                onClick: () => n("issue"),
                sx: { ml: 1, whiteSpace: "nowrap" },
                children: "Issue Let's Encrypt"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(He, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
      /* @__PURE__ */ f.jsx(Rl, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ f.jsxs(Il, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ f.jsx(pr, { children: "SSL DAEMON STATUS" }),
        /* @__PURE__ */ f.jsx(Ve, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: Un ? "Online" : "Offline" }),
        /* @__PURE__ */ f.jsx(Ve, { variant: "caption", sx: { color: "text.secondary" }, children: r?.version || "OpenSSL Core" })
      ] }) }),
      /* @__PURE__ */ f.jsx(Rl, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ f.jsxs(Il, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ f.jsx(pr, { children: "ACTIVE CERTIFICATES" }),
        /* @__PURE__ */ f.jsxs(Ve, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
          c.length,
          " Installed"
        ] }),
        /* @__PURE__ */ f.jsxs(Ve, { variant: "caption", sx: { color: "text.secondary" }, children: [
          c.filter((D) => D.issuer.includes("Encrypt")).length,
          " Let's Encrypt /",
          " ",
          c.filter((D) => !D.issuer.includes("Encrypt")).length,
          " Custom"
        ] })
      ] }) }),
      /* @__PURE__ */ f.jsx(Rl, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ f.jsxs(Il, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ f.jsx(pr, { children: "EXPIRING SOON (< 30 DAYS)" }),
        /* @__PURE__ */ f.jsxs(He, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
          /* @__PURE__ */ f.jsx(Ve, { variant: "h6", sx: { fontWeight: 700 }, children: lr }),
          lr > 0 && /* @__PURE__ */ f.jsx(
            Ki,
            {
              size: "small",
              label: "Attention Needed",
              color: "warning",
              icon: /* @__PURE__ */ f.jsx(P$, { sx: { fontSize: "14px !important" } }),
              sx: { height: 20, fontSize: "0.6875rem", fontWeight: 700 }
            }
          )
        ] }),
        /* @__PURE__ */ f.jsx(Ve, { variant: "caption", sx: { color: "text.secondary" }, children: lr === 0 ? "All certificates healthy" : "Certificates need renewal" })
      ] }) }),
      /* @__PURE__ */ f.jsx(Rl, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ f.jsxs(Il, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ f.jsx(pr, { children: "ACME AUTO-RENEWAL" }),
        /* @__PURE__ */ f.jsx(Ve, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, color: "success.main" }, children: "Active" }),
        /* @__PURE__ */ f.jsx(Ve, { variant: "caption", sx: { color: "text.secondary" }, children: "Automated Daily Cron Checks" })
      ] }) })
    ] }),
    /* @__PURE__ */ f.jsxs(or, { sx: { border: "1px solid", borderColor: "divider" }, children: [
      /* @__PURE__ */ f.jsxs(
        p$,
        {
          value: t,
          onChange: (D, q) => n(q),
          sx: {
            borderBottom: "1px solid",
            borderColor: "divider",
            px: 1,
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600, minHeight: 44, fontSize: "0.8125rem" }
          },
          children: [
            /* @__PURE__ */ f.jsx(Gi, { label: `Certificates (${c.length})`, value: "certs" }),
            /* @__PURE__ */ f.jsx(Gi, { label: "Issue Let's Encrypt", value: "issue" }),
            /* @__PURE__ */ f.jsx(Gi, { label: "Upload Custom Cert", value: "custom" }),
            /* @__PURE__ */ f.jsx(Gi, { label: "Live Logs", value: "logs" }),
            /* @__PURE__ */ f.jsx(Gi, { label: "Service & Isolation", value: "service" })
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(ft, { sx: { p: 2.25 }, children: [
        t === "certs" && /* @__PURE__ */ f.jsxs(He, { spacing: 2, children: [
          /* @__PURE__ */ f.jsxs(
            He,
            {
              direction: { xs: "column", sm: "row" },
              spacing: 1.5,
              sx: { justifyContent: "space-between", alignItems: { sm: "center" } },
              children: [
                /* @__PURE__ */ f.jsxs(He, { direction: "row", spacing: 1.5, sx: { flex: 1, maxWidth: { sm: 480 } }, children: [
                  /* @__PURE__ */ f.jsx(
                    Mr,
                    {
                      size: "small",
                      placeholder: "Search by domain or issuer...",
                      value: m,
                      onChange: (D) => v(D.target.value),
                      fullWidth: !0,
                      slotProps: {
                        input: {
                          startAdornment: /* @__PURE__ */ f.jsx(FR, { position: "start", children: /* @__PURE__ */ f.jsx(k$, { sx: { fontSize: 18, color: "text.secondary" } }) })
                        }
                      }
                    }
                  ),
                  /* @__PURE__ */ f.jsxs(
                    ri,
                    {
                      size: "small",
                      value: d,
                      onChange: (D) => S(D.target.value),
                      sx: { minWidth: 140 },
                      children: [
                        /* @__PURE__ */ f.jsx(rn, { value: "all", children: "All Issuers" }),
                        /* @__PURE__ */ f.jsx(rn, { value: "letsencrypt", children: "Let's Encrypt" }),
                        /* @__PURE__ */ f.jsx(rn, { value: "custom", children: "Custom Certs" }),
                        /* @__PURE__ */ f.jsx(rn, { value: "expiring", children: "Expiring Soon" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ f.jsx(He, { direction: "row", spacing: 1, children: /* @__PURE__ */ f.jsx(
                  Ir,
                  {
                    variant: "contained",
                    size: "small",
                    startIcon: /* @__PURE__ */ f.jsx(v$, {}),
                    onClick: () => n("issue"),
                    children: "Issue New Cert"
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ f.jsx(DM, { component: or, variant: "outlined", children: /* @__PURE__ */ f.jsxs(PM, { size: "small", children: [
            /* @__PURE__ */ f.jsx(VM, { children: /* @__PURE__ */ f.jsxs(Bu, { children: [
              /* @__PURE__ */ f.jsx(on, { children: "Domain" }),
              /* @__PURE__ */ f.jsx(on, { children: "Issuer" }),
              /* @__PURE__ */ f.jsx(on, { children: "Valid Until" }),
              /* @__PURE__ */ f.jsx(on, { children: "Auto-Renew" }),
              /* @__PURE__ */ f.jsx(on, { children: "Force HTTPS" }),
              /* @__PURE__ */ f.jsx(on, { align: "right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ f.jsx(OM, { children: nn.length === 0 ? /* @__PURE__ */ f.jsx(Bu, { children: /* @__PURE__ */ f.jsxs(on, { colSpan: 6, align: "center", sx: { py: 5, color: "text.secondary" }, children: [
              /* @__PURE__ */ f.jsx(C$, { sx: { fontSize: 32, mb: 1, color: "text.disabled", display: "block", mx: "auto" } }),
              "No SSL certificates found. Issue a free Let's Encrypt cert or upload a custom certificate."
            ] }) }) : nn.map((D) => {
              const q = D.issuer.toLowerCase().includes("encrypt"), we = D.days_left <= 30 && D.days_left > 0, Ct = D.days_left <= 0;
              return /* @__PURE__ */ f.jsxs(Bu, { hover: !0, children: [
                /* @__PURE__ */ f.jsx(on, { sx: { fontFamily: sn, fontWeight: 600 }, children: /* @__PURE__ */ f.jsxs(He, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
                  /* @__PURE__ */ f.jsx(w$, { sx: { fontSize: 16, color: "success.main" } }),
                  /* @__PURE__ */ f.jsx("span", { children: D.domain })
                ] }) }),
                /* @__PURE__ */ f.jsx(on, { children: /* @__PURE__ */ f.jsx(
                  Ki,
                  {
                    size: "small",
                    label: D.issuer,
                    color: q ? "primary" : "default",
                    icon: q ? /* @__PURE__ */ f.jsx(T$, { sx: { fontSize: "12px !important" } }) : void 0,
                    sx: { height: 22, fontSize: "0.6875rem" }
                  }
                ) }),
                /* @__PURE__ */ f.jsx(on, { children: /* @__PURE__ */ f.jsxs(He, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
                  /* @__PURE__ */ f.jsx(Ve, { variant: "caption", sx: { fontFamily: sn, color: "text.secondary" }, children: D.valid_to || "90 days" }),
                  /* @__PURE__ */ f.jsx(
                    Ki,
                    {
                      size: "small",
                      label: `${D.days_left}d left`,
                      color: Ct ? "error" : we ? "warning" : "success",
                      sx: { height: 18, fontSize: "0.625rem", fontWeight: 700 }
                    }
                  )
                ] }) }),
                /* @__PURE__ */ f.jsx(on, { children: /* @__PURE__ */ f.jsx(
                  kg,
                  {
                    size: "small",
                    checked: D.auto_renew,
                    disabled: !q
                  }
                ) }),
                /* @__PURE__ */ f.jsx(on, { children: /* @__PURE__ */ f.jsxs(He, { direction: "row", spacing: 0.75, sx: { alignItems: "center" }, children: [
                  /* @__PURE__ */ f.jsx(
                    kg,
                    {
                      size: "small",
                      checked: D.force_https,
                      onChange: () => fe(D)
                    }
                  ),
                  /* @__PURE__ */ f.jsx(Ve, { variant: "caption", sx: { color: D.force_https ? "success.main" : "text.secondary" }, children: D.force_https ? "301 Redirect" : "Off" })
                ] }) }),
                /* @__PURE__ */ f.jsx(on, { align: "right", children: /* @__PURE__ */ f.jsxs(He, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
                  /* @__PURE__ */ f.jsx(Uo, { title: "View Certificate Details", children: /* @__PURE__ */ f.jsx(Wo, { size: "small", onClick: () => nt(D), children: /* @__PURE__ */ f.jsx(b$, { sx: { fontSize: 16 } }) }) }),
                  q && /* @__PURE__ */ f.jsx(Uo, { title: "Renew Now", children: /* @__PURE__ */ f.jsx(Wo, { size: "small", color: "primary", onClick: () => Ye(D.domain), children: /* @__PURE__ */ f.jsx($g, { sx: { fontSize: 16 } }) }) }),
                  /* @__PURE__ */ f.jsx(Uo, { title: "Delete Certificate", children: /* @__PURE__ */ f.jsx(
                    Wo,
                    {
                      size: "small",
                      color: "error",
                      onClick: () => {
                        be(D.domain), pe(!0);
                      },
                      children: /* @__PURE__ */ f.jsx(x$, { sx: { fontSize: 16 } })
                    }
                  ) })
                ] }) })
              ] }, D.domain);
            }) })
          ] }) })
        ] }),
        t === "issue" && /* @__PURE__ */ f.jsxs(He, { spacing: 2.5, sx: { maxWidth: 720 }, children: [
          /* @__PURE__ */ f.jsxs(ft, { children: [
            /* @__PURE__ */ f.jsx(Ve, { variant: "subtitle1", sx: { fontWeight: 700 }, children: "Issue Let's Encrypt Certificate" }),
            /* @__PURE__ */ f.jsx(Ve, { variant: "caption", sx: { color: "text.secondary" }, children: "Automated ACME issuance. Certificates are valid for 90 days and auto-renewed automatically." })
          ] }),
          /* @__PURE__ */ f.jsx(lo, { label: "Domain Name", hint: "e.g. example.com or api.example.com", children: /* @__PURE__ */ f.jsx(
            Mr,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "example.com",
              value: b,
              onChange: (D) => C(D.target.value),
              disabled: R,
              slotProps: { htmlInput: { style: { fontFamily: sn, fontSize: "0.875rem" } } }
            }
          ) }),
          /* @__PURE__ */ f.jsx(lo, { label: "Notification Email", hint: "For certificate expiration notices", children: /* @__PURE__ */ f.jsx(
            Mr,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "admin@example.com",
              value: y,
              onChange: (D) => h(D.target.value),
              disabled: R
            }
          ) }),
          /* @__PURE__ */ f.jsx(lo, { label: "ACME Challenge Type", children: /* @__PURE__ */ f.jsxs(
            ri,
            {
              size: "small",
              value: x,
              onChange: (D) => w(D.target.value),
              fullWidth: !0,
              disabled: R,
              children: [
                /* @__PURE__ */ f.jsx(rn, { value: "http-01", children: "HTTP-01 Challenge (Webroot /.well-known/acme-challenge)" }),
                /* @__PURE__ */ f.jsx(rn, { value: "dns-01", children: "DNS-01 Challenge (DNS TXT Record validation)" })
              ]
            }
          ) }),
          /* @__PURE__ */ f.jsxs(He, { spacing: 1, children: [
            /* @__PURE__ */ f.jsx(
              ag,
              {
                control: /* @__PURE__ */ f.jsx(
                  qh,
                  {
                    size: "small",
                    checked: E,
                    onChange: (D) => k(D.target.checked),
                    disabled: R
                  }
                ),
                label: /* @__PURE__ */ f.jsx(Ve, { variant: "body2", children: "Use Let's Encrypt Staging Environment (for testing / dry-run to avoid rate limits)" })
              }
            ),
            /* @__PURE__ */ f.jsx(
              ag,
              {
                control: /* @__PURE__ */ f.jsx(
                  qh,
                  {
                    size: "small",
                    checked: T,
                    onChange: (D) => P(D.target.checked),
                    disabled: R
                  }
                ),
                label: /* @__PURE__ */ f.jsx(Ve, { variant: "body2", children: "I agree to the Let's Encrypt Subscriber Agreement Terms of Service" })
              }
            )
          ] }),
          /* @__PURE__ */ f.jsx(ft, { children: /* @__PURE__ */ f.jsx(
            Ir,
            {
              variant: "contained",
              color: "primary",
              onClick: vn,
              disabled: R || !T || !b.trim(),
              startIcon: R ? /* @__PURE__ */ f.jsx(uo, { size: 16, color: "inherit" }) : /* @__PURE__ */ f.jsx(S$, {}),
              children: R ? "Issuing Certificate..." : "Issue Free Certificate"
            }
          ) }),
          $.length > 0 && /* @__PURE__ */ f.jsxs(ft, { sx: { mt: 2 }, children: [
            /* @__PURE__ */ f.jsx(pr, { sx: { mb: 1 }, children: "ACME ISSUANCE STREAM" }),
            /* @__PURE__ */ f.jsx(I$, { lines: $, running: R })
          ] })
        ] }),
        t === "custom" && /* @__PURE__ */ f.jsxs(He, { spacing: 2.5, sx: { maxWidth: 720 }, children: [
          /* @__PURE__ */ f.jsxs(ft, { children: [
            /* @__PURE__ */ f.jsx(Ve, { variant: "subtitle1", sx: { fontWeight: 700 }, children: "Upload Custom SSL / TLS Certificate" }),
            /* @__PURE__ */ f.jsx(Ve, { variant: "caption", sx: { color: "text.secondary" }, children: "Install commercial SSL certificates (Comodo, DigiCert, Sectigo, Cloudflare Custom, etc.) with OpenSSL key-pair validation." })
          ] }),
          /* @__PURE__ */ f.jsx(lo, { label: "Domain Name", hint: "required", children: /* @__PURE__ */ f.jsx(
            Mr,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "example.com",
              value: M,
              onChange: (D) => I(D.target.value),
              slotProps: { htmlInput: { style: { fontFamily: sn } } }
            }
          ) }),
          /* @__PURE__ */ f.jsx(lo, { label: "Certificate PEM (.crt / .pem)", hint: "-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----", children: /* @__PURE__ */ f.jsx(
            Mr,
            {
              multiline: !0,
              fullWidth: !0,
              minRows: 6,
              maxRows: 12,
              placeholder: `-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----`,
              value: O,
              onChange: (D) => L(D.target.value),
              slotProps: {
                htmlInput: {
                  style: { fontFamily: sn, fontSize: "0.75rem", backgroundColor: Lt.bg, color: Lt.fg }
                }
              }
            }
          ) }),
          /* @__PURE__ */ f.jsx(lo, { label: "Private Key PEM (.key)", hint: "Stored with 0600 permissions in /opt/hostpanel/etc/ssl/private/", children: /* @__PURE__ */ f.jsx(
            Mr,
            {
              multiline: !0,
              fullWidth: !0,
              minRows: 6,
              maxRows: 12,
              placeholder: `-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----`,
              value: N,
              onChange: (D) => A(D.target.value),
              slotProps: {
                htmlInput: {
                  style: { fontFamily: sn, fontSize: "0.75rem", backgroundColor: Lt.bg, color: Lt.fg }
                }
              }
            }
          ) }),
          /* @__PURE__ */ f.jsx(lo, { label: "CA Intermediate Bundle PEM (Optional)", hint: "Intermediate / Chain certificates", children: /* @__PURE__ */ f.jsx(
            Mr,
            {
              multiline: !0,
              fullWidth: !0,
              minRows: 4,
              maxRows: 8,
              placeholder: `-----BEGIN CERTIFICATE-----
... (Intermediate CA)
-----END CERTIFICATE-----`,
              value: z,
              onChange: (D) => F(D.target.value),
              slotProps: {
                htmlInput: {
                  style: { fontFamily: sn, fontSize: "0.75rem", backgroundColor: Lt.bg, color: Lt.fg }
                }
              }
            }
          ) }),
          /* @__PURE__ */ f.jsx(ft, { children: /* @__PURE__ */ f.jsx(
            Ir,
            {
              variant: "contained",
              color: "primary",
              onClick: Ue,
              disabled: W || !M.trim() || !O.trim() || !N.trim(),
              startIcon: W ? /* @__PURE__ */ f.jsx(uo, { size: 16, color: "inherit" }) : /* @__PURE__ */ f.jsx(Og, {}),
              children: W ? "Validating & Installing..." : "Validate & Install Certificate"
            }
          ) })
        ] }),
        t === "logs" && /* @__PURE__ */ f.jsxs(He, { spacing: 2, children: [
          /* @__PURE__ */ f.jsxs(
            He,
            {
              direction: "row",
              spacing: 2,
              sx: { alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1.5 },
              children: [
                /* @__PURE__ */ f.jsxs(He, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
                  /* @__PURE__ */ f.jsxs(
                    ri,
                    {
                      size: "small",
                      value: he,
                      onChange: (D) => le(D.target.value),
                      sx: { minWidth: 140 },
                      children: [
                        /* @__PURE__ */ f.jsx(rn, { value: "acme", children: "ACME Issuance Log" }),
                        /* @__PURE__ */ f.jsx(rn, { value: "renewal", children: "Auto-Renewal Log" }),
                        /* @__PURE__ */ f.jsx(rn, { value: "ssl", children: "SSL Daemon Log" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ f.jsxs(
                    ri,
                    {
                      size: "small",
                      value: Re,
                      onChange: (D) => Le(Number(D.target.value)),
                      sx: { minWidth: 100 },
                      children: [
                        /* @__PURE__ */ f.jsx(rn, { value: 50, children: "50 lines" }),
                        /* @__PURE__ */ f.jsx(rn, { value: 100, children: "100 lines" }),
                        /* @__PURE__ */ f.jsx(rn, { value: 200, children: "200 lines" }),
                        /* @__PURE__ */ f.jsx(rn, { value: 500, children: "500 lines" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ f.jsx(
                  Ir,
                  {
                    variant: "outlined",
                    size: "small",
                    startIcon: /* @__PURE__ */ f.jsx(Ag, {}),
                    onClick: xe,
                    disabled: de,
                    children: de ? "Refreshing..." : "Refresh"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ f.jsx(
            or,
            {
              sx: {
                p: 2,
                bgcolor: Lt.bg,
                color: Lt.fg,
                fontFamily: sn,
                fontSize: "0.75rem",
                lineHeight: 1.55,
                borderRadius: "8px",
                maxHeight: 480,
                overflowY: "auto",
                whiteSpace: "pre-wrap"
              },
              children: de ? /* @__PURE__ */ f.jsx(ft, { sx: { display: "grid", placeItems: "center", py: 4 }, children: /* @__PURE__ */ f.jsx(uo, { size: 20 }) }) : Oe.length === 0 ? /* @__PURE__ */ f.jsxs(
                Ve,
                {
                  variant: "body2",
                  sx: { color: "text.secondary", fontStyle: "italic", textAlign: "center", py: 3 },
                  children: [
                    "No recent log entries in /opt/hostpanel/logs/ssl/",
                    he,
                    ".log"
                  ]
                }
              ) : Oe.map((D, q) => /* @__PURE__ */ f.jsx("div", { style: { lineHeight: 1.55 }, children: D }, q))
            }
          )
        ] }),
        t === "service" && /* @__PURE__ */ f.jsxs(He, { spacing: 2, children: [
          /* @__PURE__ */ f.jsxs(jg, { label: "100% ISOLATION STRUCTURE", padded: !0, children: [
            /* @__PURE__ */ f.jsxs(Ve, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
              "All SSL certificates, private keys, ACME challenges, logs, and PID locks reside strictly under",
              " ",
              /* @__PURE__ */ f.jsx("code", { style: { fontFamily: sn }, children: "/opt/hostpanel" }),
              "."
            ] }),
            /* @__PURE__ */ f.jsxs(He, { spacing: 1.5, children: [
              /* @__PURE__ */ f.jsx(Bt, { label: "CONFIGURATION ROOT", value: "/opt/hostpanel/etc/ssl" }),
              /* @__PURE__ */ f.jsx(Bt, { label: "CERTIFICATES REPOSITORY", value: "/opt/hostpanel/etc/ssl/certs" }),
              /* @__PURE__ */ f.jsx(Bt, { label: "PRIVATE KEYS REPOSITORY", value: "/opt/hostpanel/etc/ssl/private (mode 0700/0600)" }),
              /* @__PURE__ */ f.jsx(Bt, { label: "ACME WORKING & CHALLENGE ROOT", value: "/opt/hostpanel/data/acme" }),
              /* @__PURE__ */ f.jsx(Bt, { label: "LOGS DIRECTORY", value: "/opt/hostpanel/logs/ssl" }),
              /* @__PURE__ */ f.jsx(Bt, { label: "RUN & SOCKETS", value: "/opt/hostpanel/run/ssl" })
            ] })
          ] }),
          /* @__PURE__ */ f.jsx(jg, { label: "SYSTEM SERVICE & CREDENTIALS", padded: !0, children: /* @__PURE__ */ f.jsxs(He, { spacing: 1.5, children: [
            /* @__PURE__ */ f.jsx(Bt, { label: "SYSTEMD SERVICE UNIT", value: "hostpanel-ssld.service" }),
            /* @__PURE__ */ f.jsx(Bt, { label: "SERVICE USER ACCOUNT", value: "hp-ssl" }),
            /* @__PURE__ */ f.jsx(Bt, { label: "INTERNAL API BINDING", value: "Isolated Loopback (127.0.0.1)" }),
            /* @__PURE__ */ f.jsx(Bt, { label: "OPS HELPER SCRIPT", value: "/opt/hostpanel/packages/ssl/ops/hp-ssl" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(
      rg,
      {
        open: Q,
        onClose: () => G(!1),
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsxs(sg, { sx: { pb: 1, fontWeight: 600 }, children: [
            "Certificate Details: ",
            X?.domain
          ] }),
          /* @__PURE__ */ f.jsx(ig, { dividers: !0, sx: { p: 2.5 }, children: ee ? /* @__PURE__ */ f.jsx(ft, { sx: { display: "grid", placeItems: "center", py: 4 }, children: /* @__PURE__ */ f.jsx(uo, { size: 24 }) }) : X ? /* @__PURE__ */ f.jsxs(He, { spacing: 2, children: [
            /* @__PURE__ */ f.jsxs(He, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
              /* @__PURE__ */ f.jsx(ft, { sx: { flex: 1 }, children: /* @__PURE__ */ f.jsx(Bt, { label: "DOMAIN / COMMON NAME", value: X.domain }) }),
              /* @__PURE__ */ f.jsx(ft, { sx: { flex: 1 }, children: /* @__PURE__ */ f.jsx(Bt, { label: "ISSUER", value: X.issuer, mono: !1 }) })
            ] }),
            /* @__PURE__ */ f.jsxs(He, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
              /* @__PURE__ */ f.jsx(ft, { sx: { flex: 1 }, children: /* @__PURE__ */ f.jsx(Bt, { label: "VALID FROM", value: X.valid_from || "N/A" }) }),
              /* @__PURE__ */ f.jsx(ft, { sx: { flex: 1 }, children: /* @__PURE__ */ f.jsx(Bt, { label: "VALID UNTIL", value: X.valid_to || "N/A" }) }),
              /* @__PURE__ */ f.jsx(ft, { sx: { flex: 1 }, children: /* @__PURE__ */ f.jsx(Bt, { label: "DAYS REMAINING", value: `${X.days_left} days` }) })
            ] }),
            /* @__PURE__ */ f.jsxs(ft, { children: [
              /* @__PURE__ */ f.jsx(pr, { sx: { mb: 0.5 }, children: "SUBJECT ALTERNATIVE NAMES (SAN)" }),
              /* @__PURE__ */ f.jsx(He, { direction: "row", spacing: 0.75, sx: { flexWrap: "wrap", gap: 0.5 }, children: (X.san || [X.domain]).map((D) => /* @__PURE__ */ f.jsx(Ki, { label: D, size: "small", sx: { fontFamily: sn, fontSize: "0.75rem" } }, D)) })
            ] }),
            X.cert_pem && /* @__PURE__ */ f.jsxs(ft, { children: [
              /* @__PURE__ */ f.jsx(pr, { sx: { mb: 0.5 }, children: "CERTIFICATE PEM" }),
              /* @__PURE__ */ f.jsx(
                Mr,
                {
                  multiline: !0,
                  fullWidth: !0,
                  minRows: 6,
                  maxRows: 10,
                  value: X.cert_pem,
                  slotProps: {
                    htmlInput: {
                      readOnly: !0,
                      style: { fontFamily: sn, fontSize: "0.6875rem", backgroundColor: Lt.bg, color: Lt.fg }
                    }
                  }
                }
              )
            ] })
          ] }) : null }),
          /* @__PURE__ */ f.jsx(og, { sx: { p: 2 }, children: /* @__PURE__ */ f.jsx(Ir, { onClick: () => G(!1), color: "inherit", children: "Close" }) })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      rg,
      {
        open: re,
        onClose: () => pe(!1),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsx(sg, { sx: { fontWeight: 600 }, children: "Delete SSL Certificate" }),
          /* @__PURE__ */ f.jsx(ig, { sx: { py: 2 }, children: /* @__PURE__ */ f.jsxs(Ve, { variant: "body2", children: [
            "Are you sure you want to permanently delete the SSL certificate and private key for",
            " ",
            /* @__PURE__ */ f.jsx("strong", { children: ke }),
            "?"
          ] }) }),
          /* @__PURE__ */ f.jsxs(og, { sx: { p: 2 }, children: [
            /* @__PURE__ */ f.jsx(Ir, { onClick: () => pe(!1), color: "inherit", children: "Cancel" }),
            /* @__PURE__ */ f.jsx(Ir, { variant: "contained", color: "error", onClick: rt, children: "Delete" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsx(
      aM,
      {
        open: !!Je,
        autoHideDuration: 4e3,
        onClose: () => ge(null),
        message: Je,
        anchorOrigin: { vertical: "bottom", horizontal: "right" }
      }
    )
  ] });
}
let Ba = null;
function _x(e, t) {
  return Ba = Xv(e), Ba.render(
    /* @__PURE__ */ f.jsx(p.StrictMode, { children: /* @__PURE__ */ f.jsx(M$, { ctx: t }) })
  ), () => {
    Wx();
  };
}
function Wx() {
  const e = Ba;
  Ba = null, e && queueMicrotask(() => e.unmount());
}
typeof window < "u" && (window.HostPanelPackage = { mount: _x });
const O$ = { mount: _x, unmount: Wx };
export {
  O$ as default,
  _x as mount,
  Wx as unmount
};
//# sourceMappingURL=main.js.map
