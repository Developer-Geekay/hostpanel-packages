var z1 = Object.defineProperty;
var _1 = (e, t, n) => t in e ? z1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ci = (e, t, n) => _1(e, typeof t != "symbol" ? t + "" : t, n);
function F1(e, t) {
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
function D1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bg = { exports: {} }, xa = {}, kg = { exports: {} }, Se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cs = Symbol.for("react.element"), B1 = Symbol.for("react.portal"), W1 = Symbol.for("react.fragment"), U1 = Symbol.for("react.strict_mode"), H1 = Symbol.for("react.profiler"), V1 = Symbol.for("react.provider"), K1 = Symbol.for("react.context"), Y1 = Symbol.for("react.forward_ref"), G1 = Symbol.for("react.suspense"), Q1 = Symbol.for("react.memo"), X1 = Symbol.for("react.lazy"), Rp = Symbol.iterator;
function q1(e) {
  return e === null || typeof e != "object" ? null : (e = Rp && e[Rp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Eg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Tg = Object.assign, Rg = {};
function ri(e, t, n) {
  this.props = e, this.context = t, this.refs = Rg, this.updater = n || Eg;
}
ri.prototype.isReactComponent = {};
ri.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ri.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pg() {
}
Pg.prototype = ri.prototype;
function zd(e, t, n) {
  this.props = e, this.context = t, this.refs = Rg, this.updater = n || Eg;
}
var _d = zd.prototype = new Pg();
_d.constructor = zd;
Tg(_d, ri.prototype);
_d.isPureReactComponent = !0;
var Pp = Array.isArray, Ig = Object.prototype.hasOwnProperty, Fd = { current: null }, Mg = { key: !0, ref: !0, __self: !0, __source: !0 };
function $g(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ig.call(t, r) && !Mg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Cs, type: e, key: i, ref: s, props: o, _owner: Fd.current };
}
function Z1(e, t) {
  return { $$typeof: Cs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Dd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cs;
}
function J1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ip = /\/+/g;
function Ou(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? J1("" + e.key) : t.toString(36);
}
function gl(e, t, n, r, o) {
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
        case Cs:
        case B1:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Ou(s, 0) : r, Pp(o) ? (n = "", e != null && (n = e.replace(Ip, "$&/") + "/"), gl(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Dd(o) && (o = Z1(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Ip, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Pp(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + Ou(i, l);
    s += gl(i, t, n, a, o);
  }
  else if (a = q1(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + Ou(i, l++), s += gl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Ds(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return gl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function ex(e) {
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
var At = { current: null }, yl = { transition: null }, tx = { ReactCurrentDispatcher: At, ReactCurrentBatchConfig: yl, ReactCurrentOwner: Fd };
function Og() {
  throw Error("act(...) is not supported in production builds of React.");
}
Se.Children = { map: Ds, forEach: function(e, t, n) {
  Ds(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ds(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ds(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Dd(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Se.Component = ri;
Se.Fragment = W1;
Se.Profiler = H1;
Se.PureComponent = zd;
Se.StrictMode = U1;
Se.Suspense = G1;
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tx;
Se.act = Og;
Se.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Tg({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Fd.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Ig.call(t, a) && !Mg.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Cs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Se.createContext = function(e) {
  return e = { $$typeof: K1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: V1, _context: e }, e.Consumer = e;
};
Se.createElement = $g;
Se.createFactory = function(e) {
  var t = $g.bind(null, e);
  return t.type = e, t;
};
Se.createRef = function() {
  return { current: null };
};
Se.forwardRef = function(e) {
  return { $$typeof: Y1, render: e };
};
Se.isValidElement = Dd;
Se.lazy = function(e) {
  return { $$typeof: X1, _payload: { _status: -1, _result: e }, _init: ex };
};
Se.memo = function(e, t) {
  return { $$typeof: Q1, type: e, compare: t === void 0 ? null : t };
};
Se.startTransition = function(e) {
  var t = yl.transition;
  yl.transition = {};
  try {
    e();
  } finally {
    yl.transition = t;
  }
};
Se.unstable_act = Og;
Se.useCallback = function(e, t) {
  return At.current.useCallback(e, t);
};
Se.useContext = function(e) {
  return At.current.useContext(e);
};
Se.useDebugValue = function() {
};
Se.useDeferredValue = function(e) {
  return At.current.useDeferredValue(e);
};
Se.useEffect = function(e, t) {
  return At.current.useEffect(e, t);
};
Se.useId = function() {
  return At.current.useId();
};
Se.useImperativeHandle = function(e, t, n) {
  return At.current.useImperativeHandle(e, t, n);
};
Se.useInsertionEffect = function(e, t) {
  return At.current.useInsertionEffect(e, t);
};
Se.useLayoutEffect = function(e, t) {
  return At.current.useLayoutEffect(e, t);
};
Se.useMemo = function(e, t) {
  return At.current.useMemo(e, t);
};
Se.useReducer = function(e, t, n) {
  return At.current.useReducer(e, t, n);
};
Se.useRef = function(e) {
  return At.current.useRef(e);
};
Se.useState = function(e) {
  return At.current.useState(e);
};
Se.useSyncExternalStore = function(e, t, n) {
  return At.current.useSyncExternalStore(e, t, n);
};
Se.useTransition = function() {
  return At.current.useTransition();
};
Se.version = "18.3.1";
kg.exports = Se;
var h = kg.exports;
const Ag = /* @__PURE__ */ D1(h), Nl = /* @__PURE__ */ F1({
  __proto__: null,
  default: Ag
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
var nx = h, rx = Symbol.for("react.element"), ox = Symbol.for("react.fragment"), ix = Object.prototype.hasOwnProperty, sx = nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, lx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ng(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) ix.call(t, r) && !lx.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: rx, type: e, key: i, ref: s, props: o, _owner: sx.current };
}
xa.Fragment = ox;
xa.jsx = Ng;
xa.jsxs = Ng;
bg.exports = xa;
var S = bg.exports, Lg = { exports: {} }, tn = {}, jg = { exports: {} }, zg = {};
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
      var H = F - 1 >>> 1, D = A[H];
      if (0 < o(D, z)) A[H] = z, A[F] = D, F = H;
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
      e: for (var H = 0, D = A.length, X = D >>> 1; H < X; ) {
        var Y = 2 * (H + 1) - 1, q = A[Y], Q = Y + 1, G = A[Q];
        if (0 > o(q, F)) Q < D && 0 > o(G, q) ? (A[H] = G, A[Q] = F, H = Q) : (A[H] = q, A[Y] = F, H = Y);
        else if (Q < D && 0 > o(G, F)) A[H] = G, A[Q] = F, H = Q;
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
  var a = [], u = [], c = 1, f = null, y = 3, d = !1, x = !1, w = !1, b = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(A) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= A) r(u), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(u);
    }
  }
  function C(A) {
    if (w = !1, v(A), !x) if (n(a) !== null) x = !0, N(E);
    else {
      var z = n(u);
      z !== null && j(C, z.startTime - A);
    }
  }
  function E(A, z) {
    x = !1, w && (w = !1, m(R), R = -1), d = !0;
    var F = y;
    try {
      for (v(z), f = n(a); f !== null && (!(f.expirationTime > z) || A && !M()); ) {
        var H = f.callback;
        if (typeof H == "function") {
          f.callback = null, y = f.priorityLevel;
          var D = H(f.expirationTime <= z);
          z = e.unstable_now(), typeof D == "function" ? f.callback = D : f === n(a) && r(a), v(z);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var X = !0;
      else {
        var Y = n(u);
        Y !== null && j(C, Y.startTime - z), X = !1;
      }
      return X;
    } finally {
      f = null, y = F, d = !1;
    }
  }
  var k = !1, T = null, R = -1, I = 5, L = -1;
  function M() {
    return !(e.unstable_now() - L < I);
  }
  function g() {
    if (T !== null) {
      var A = e.unstable_now();
      L = A;
      var z = !0;
      try {
        z = T(!0, A);
      } finally {
        z ? $() : (k = !1, T = null);
      }
    } else k = !1;
  }
  var $;
  if (typeof p == "function") $ = function() {
    p(g);
  };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(), O = P.port2;
    P.port1.onmessage = g, $ = function() {
      O.postMessage(null);
    };
  } else $ = function() {
    b(g, 0);
  };
  function N(A) {
    T = A, k || (k = !0, $());
  }
  function j(A, z) {
    R = b(function() {
      A(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    x || d || (x = !0, N(E));
  }, e.unstable_forceFrameRate = function(A) {
    0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < A ? Math.floor(1e3 / A) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(A) {
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
      return A();
    } finally {
      y = F;
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
    var F = y;
    y = A;
    try {
      return z();
    } finally {
      y = F;
    }
  }, e.unstable_scheduleCallback = function(A, z, F) {
    var H = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? H + F : H) : F = H, A) {
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
    return D = F + D, A = { id: c++, callback: z, priorityLevel: A, startTime: F, expirationTime: D, sortIndex: -1 }, F > H ? (A.sortIndex = F, t(u, A), n(a) === null && A === n(u) && (w ? (m(R), R = -1) : w = !0, j(C, F - H))) : (A.sortIndex = D, t(a, A), x || d || (x = !0, N(E))), A;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(A) {
    var z = y;
    return function() {
      var F = y;
      y = z;
      try {
        return A.apply(this, arguments);
      } finally {
        y = F;
      }
    };
  };
})(zg);
jg.exports = zg;
var ax = jg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ux = h, Jt = ax;
function U(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _g = /* @__PURE__ */ new Set(), Gi = {};
function lo(e, t) {
  Ho(e, t), Ho(e + "Capture", t);
}
function Ho(e, t) {
  for (Gi[e] = t, e = 0; e < t.length; e++) _g.add(t[e]);
}
var nr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wc = Object.prototype.hasOwnProperty, cx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Mp = {}, $p = {};
function dx(e) {
  return wc.call($p, e) ? !0 : wc.call(Mp, e) ? !1 : cx.test(e) ? $p[e] = !0 : (Mp[e] = !0, !1);
}
function fx(e, t, n, r) {
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
function px(e, t, n, r) {
  if (t === null || typeof t > "u" || fx(e, t, n, r)) return !0;
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
function Nt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Ct = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ct[e] = new Nt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ct[t] = new Nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ct[e] = new Nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ct[e] = new Nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ct[e] = new Nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ct[e] = new Nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ct[e] = new Nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ct[e] = new Nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ct[e] = new Nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bd = /[\-:]([a-z])/g;
function Wd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Bd,
    Wd
  );
  Ct[t] = new Nt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Bd, Wd);
  Ct[t] = new Nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Bd, Wd);
  Ct[t] = new Nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ct[e] = new Nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ct.xlinkHref = new Nt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ct[e] = new Nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ud(e, t, n, r) {
  var o = Ct.hasOwnProperty(t) ? Ct[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (px(t, n, o, r) && (n = null), r || o === null ? dx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var cr = ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Bs = Symbol.for("react.element"), wo = Symbol.for("react.portal"), Co = Symbol.for("react.fragment"), Hd = Symbol.for("react.strict_mode"), Cc = Symbol.for("react.profiler"), Fg = Symbol.for("react.provider"), Dg = Symbol.for("react.context"), Vd = Symbol.for("react.forward_ref"), bc = Symbol.for("react.suspense"), kc = Symbol.for("react.suspense_list"), Kd = Symbol.for("react.memo"), mr = Symbol.for("react.lazy"), Bg = Symbol.for("react.offscreen"), Op = Symbol.iterator;
function di(e) {
  return e === null || typeof e != "object" ? null : (e = Op && e[Op] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ze = Object.assign, Au;
function Ri(e) {
  if (Au === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Au = t && t[1] || "";
  }
  return `
` + Au + e;
}
var Nu = !1;
function Lu(e, t) {
  if (!e || Nu) return "";
  Nu = !0;
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
    Nu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ri(e) : "";
}
function mx(e) {
  switch (e.tag) {
    case 5:
      return Ri(e.type);
    case 16:
      return Ri("Lazy");
    case 13:
      return Ri("Suspense");
    case 19:
      return Ri("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Lu(e.type, !1), e;
    case 11:
      return e = Lu(e.type.render, !1), e;
    case 1:
      return e = Lu(e.type, !0), e;
    default:
      return "";
  }
}
function Ec(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Co:
      return "Fragment";
    case wo:
      return "Portal";
    case Cc:
      return "Profiler";
    case Hd:
      return "StrictMode";
    case bc:
      return "Suspense";
    case kc:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Dg:
      return (e.displayName || "Context") + ".Consumer";
    case Fg:
      return (e._context.displayName || "Context") + ".Provider";
    case Vd:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Kd:
      return t = e.displayName || null, t !== null ? t : Ec(e.type) || "Memo";
    case mr:
      t = e._payload, e = e._init;
      try {
        return Ec(e(t));
      } catch {
      }
  }
  return null;
}
function hx(e) {
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
      return Ec(t);
    case 8:
      return t === Hd ? "StrictMode" : "Mode";
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
function Ir(e) {
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
function Wg(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function gx(e) {
  var t = Wg(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ws(e) {
  e._valueTracker || (e._valueTracker = gx(e));
}
function Ug(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Wg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ll(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Tc(e, t) {
  var n = t.checked;
  return Ze({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ap(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ir(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Hg(e, t) {
  t = t.checked, t != null && Ud(e, "checked", t, !1);
}
function Rc(e, t) {
  Hg(e, t);
  var n = Ir(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Pc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Pc(e, t.type, Ir(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Np(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Pc(e, t, n) {
  (t !== "number" || Ll(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pi = Array.isArray;
function No(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ir(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ic(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return Ze({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Lp(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(U(92));
      if (Pi(n)) {
        if (1 < n.length) throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ir(n) };
}
function Vg(e, t) {
  var n = Ir(t.value), r = Ir(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function jp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Kg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Mc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Kg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Us, Yg = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Us = Us || document.createElement("div"), Us.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Us.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Qi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ai = {
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
}, yx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ai).forEach(function(e) {
  yx.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ai[t] = Ai[e];
  });
});
function Gg(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ai.hasOwnProperty(e) && Ai[e] ? ("" + t).trim() : t + "px";
}
function Qg(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Gg(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var vx = Ze({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function $c(e, t) {
  if (t) {
    if (vx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function Oc(e, t) {
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
var Ac = null;
function Yd(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Nc = null, Lo = null, jo = null;
function zp(e) {
  if (e = Es(e)) {
    if (typeof Nc != "function") throw Error(U(280));
    var t = e.stateNode;
    t && (t = ka(t), Nc(e.stateNode, e.type, t));
  }
}
function Xg(e) {
  Lo ? jo ? jo.push(e) : jo = [e] : Lo = e;
}
function qg() {
  if (Lo) {
    var e = Lo, t = jo;
    if (jo = Lo = null, zp(e), t) for (e = 0; e < t.length; e++) zp(t[e]);
  }
}
function Zg(e, t) {
  return e(t);
}
function Jg() {
}
var ju = !1;
function ey(e, t, n) {
  if (ju) return e(t, n);
  ju = !0;
  try {
    return Zg(e, t, n);
  } finally {
    ju = !1, (Lo !== null || jo !== null) && (Jg(), qg());
  }
}
function Xi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ka(n);
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
var Lc = !1;
if (nr) try {
  var fi = {};
  Object.defineProperty(fi, "passive", { get: function() {
    Lc = !0;
  } }), window.addEventListener("test", fi, fi), window.removeEventListener("test", fi, fi);
} catch {
  Lc = !1;
}
function xx(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ni = !1, jl = null, zl = !1, jc = null, Sx = { onError: function(e) {
  Ni = !0, jl = e;
} };
function wx(e, t, n, r, o, i, s, l, a) {
  Ni = !1, jl = null, xx.apply(Sx, arguments);
}
function Cx(e, t, n, r, o, i, s, l, a) {
  if (wx.apply(this, arguments), Ni) {
    if (Ni) {
      var u = jl;
      Ni = !1, jl = null;
    } else throw Error(U(198));
    zl || (zl = !0, jc = u);
  }
}
function ao(e) {
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
function ty(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function _p(e) {
  if (ao(e) !== e) throw Error(U(188));
}
function bx(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ao(e), t === null) throw Error(U(188));
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
        if (i === n) return _p(o), e;
        if (i === r) return _p(o), t;
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
function ny(e) {
  return e = bx(e), e !== null ? ry(e) : null;
}
function ry(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ry(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var oy = Jt.unstable_scheduleCallback, Fp = Jt.unstable_cancelCallback, kx = Jt.unstable_shouldYield, Ex = Jt.unstable_requestPaint, nt = Jt.unstable_now, Tx = Jt.unstable_getCurrentPriorityLevel, Gd = Jt.unstable_ImmediatePriority, iy = Jt.unstable_UserBlockingPriority, _l = Jt.unstable_NormalPriority, Rx = Jt.unstable_LowPriority, sy = Jt.unstable_IdlePriority, Sa = null, _n = null;
function Px(e) {
  if (_n && typeof _n.onCommitFiberRoot == "function") try {
    _n.onCommitFiberRoot(Sa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Rn = Math.clz32 ? Math.clz32 : $x, Ix = Math.log, Mx = Math.LN2;
function $x(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ix(e) / Mx | 0) | 0;
}
var Hs = 64, Vs = 4194304;
function Ii(e) {
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
function Fl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = Ii(l) : (i &= s, i !== 0 && (r = Ii(i)));
  } else s = n & ~o, s !== 0 ? r = Ii(s) : i !== 0 && (r = Ii(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Rn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Ox(e, t) {
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
function Ax(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Rn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = Ox(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function zc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ly() {
  var e = Hs;
  return Hs <<= 1, !(Hs & 4194240) && (Hs = 64), e;
}
function zu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bs(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Rn(t), e[t] = n;
}
function Nx(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Rn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Qd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Rn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var $e = 0;
function ay(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var uy, Xd, cy, dy, fy, _c = !1, Ks = [], Sr = null, wr = null, Cr = null, qi = /* @__PURE__ */ new Map(), Zi = /* @__PURE__ */ new Map(), gr = [], Lx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Dp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sr = null;
      break;
    case "dragenter":
    case "dragleave":
      wr = null;
      break;
    case "mouseover":
    case "mouseout":
      Cr = null;
      break;
    case "pointerover":
    case "pointerout":
      qi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zi.delete(t.pointerId);
  }
}
function pi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Es(t), t !== null && Xd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function jx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Sr = pi(Sr, e, t, n, r, o), !0;
    case "dragenter":
      return wr = pi(wr, e, t, n, r, o), !0;
    case "mouseover":
      return Cr = pi(Cr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return qi.set(i, pi(qi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Zi.set(i, pi(Zi.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function py(e) {
  var t = Kr(e.target);
  if (t !== null) {
    var n = ao(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ty(n), t !== null) {
          e.blockedOn = t, fy(e.priority, function() {
            cy(n);
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
function vl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ac = r, n.target.dispatchEvent(r), Ac = null;
    } else return t = Es(n), t !== null && Xd(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Bp(e, t, n) {
  vl(e) && n.delete(t);
}
function zx() {
  _c = !1, Sr !== null && vl(Sr) && (Sr = null), wr !== null && vl(wr) && (wr = null), Cr !== null && vl(Cr) && (Cr = null), qi.forEach(Bp), Zi.forEach(Bp);
}
function mi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, _c || (_c = !0, Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority, zx)));
}
function Ji(e) {
  function t(o) {
    return mi(o, e);
  }
  if (0 < Ks.length) {
    mi(Ks[0], e);
    for (var n = 1; n < Ks.length; n++) {
      var r = Ks[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Sr !== null && mi(Sr, e), wr !== null && mi(wr, e), Cr !== null && mi(Cr, e), qi.forEach(t), Zi.forEach(t), n = 0; n < gr.length; n++) r = gr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gr.length && (n = gr[0], n.blockedOn === null); ) py(n), n.blockedOn === null && gr.shift();
}
var zo = cr.ReactCurrentBatchConfig, Dl = !0;
function _x(e, t, n, r) {
  var o = $e, i = zo.transition;
  zo.transition = null;
  try {
    $e = 1, qd(e, t, n, r);
  } finally {
    $e = o, zo.transition = i;
  }
}
function Fx(e, t, n, r) {
  var o = $e, i = zo.transition;
  zo.transition = null;
  try {
    $e = 4, qd(e, t, n, r);
  } finally {
    $e = o, zo.transition = i;
  }
}
function qd(e, t, n, r) {
  if (Dl) {
    var o = Fc(e, t, n, r);
    if (o === null) Yu(e, t, r, Bl, n), Dp(e, r);
    else if (jx(o, e, t, n, r)) r.stopPropagation();
    else if (Dp(e, r), t & 4 && -1 < Lx.indexOf(e)) {
      for (; o !== null; ) {
        var i = Es(o);
        if (i !== null && uy(i), i = Fc(e, t, n, r), i === null && Yu(e, t, r, Bl, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Yu(e, t, r, null, n);
  }
}
var Bl = null;
function Fc(e, t, n, r) {
  if (Bl = null, e = Yd(r), e = Kr(e), e !== null) if (t = ao(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ty(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Bl = e, null;
}
function my(e) {
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
      switch (Tx()) {
        case Gd:
          return 1;
        case iy:
          return 4;
        case _l:
        case Rx:
          return 16;
        case sy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vr = null, Zd = null, xl = null;
function hy() {
  if (xl) return xl;
  var e, t = Zd, n = t.length, r, o = "value" in vr ? vr.value : vr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return xl = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Sl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ys() {
  return !0;
}
function Wp() {
  return !1;
}
function nn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ys : Wp, this.isPropagationStopped = Wp, this;
  }
  return Ze(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ys);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ys);
  }, persist: function() {
  }, isPersistent: Ys }), t;
}
var oi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Jd = nn(oi), ks = Ze({}, oi, { view: 0, detail: 0 }), Dx = nn(ks), _u, Fu, hi, wa = Ze({}, ks, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ef, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== hi && (hi && e.type === "mousemove" ? (_u = e.screenX - hi.screenX, Fu = e.screenY - hi.screenY) : Fu = _u = 0, hi = e), _u);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fu;
} }), Up = nn(wa), Bx = Ze({}, wa, { dataTransfer: 0 }), Wx = nn(Bx), Ux = Ze({}, ks, { relatedTarget: 0 }), Du = nn(Ux), Hx = Ze({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vx = nn(Hx), Kx = Ze({}, oi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Yx = nn(Kx), Gx = Ze({}, oi, { data: 0 }), Hp = nn(Gx), Qx = {
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
}, Xx = {
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
}, qx = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Zx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qx[e]) ? !!t[e] : !1;
}
function ef() {
  return Zx;
}
var Jx = Ze({}, ks, { key: function(e) {
  if (e.key) {
    var t = Qx[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Sl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xx[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ef, charCode: function(e) {
  return e.type === "keypress" ? Sl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), eS = nn(Jx), tS = Ze({}, wa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Vp = nn(tS), nS = Ze({}, ks, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ef }), rS = nn(nS), oS = Ze({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), iS = nn(oS), sS = Ze({}, wa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), lS = nn(sS), aS = [9, 13, 27, 32], tf = nr && "CompositionEvent" in window, Li = null;
nr && "documentMode" in document && (Li = document.documentMode);
var uS = nr && "TextEvent" in window && !Li, gy = nr && (!tf || Li && 8 < Li && 11 >= Li), Kp = " ", Yp = !1;
function yy(e, t) {
  switch (e) {
    case "keyup":
      return aS.indexOf(t.keyCode) !== -1;
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
function vy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var bo = !1;
function cS(e, t) {
  switch (e) {
    case "compositionend":
      return vy(t);
    case "keypress":
      return t.which !== 32 ? null : (Yp = !0, Kp);
    case "textInput":
      return e = t.data, e === Kp && Yp ? null : e;
    default:
      return null;
  }
}
function dS(e, t) {
  if (bo) return e === "compositionend" || !tf && yy(e, t) ? (e = hy(), xl = Zd = vr = null, bo = !1, e) : null;
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
      return gy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Gp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fS[e.type] : t === "textarea";
}
function xy(e, t, n, r) {
  Xg(r), t = Wl(t, "onChange"), 0 < t.length && (n = new Jd("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ji = null, es = null;
function pS(e) {
  My(e, 0);
}
function Ca(e) {
  var t = To(e);
  if (Ug(t)) return e;
}
function mS(e, t) {
  if (e === "change") return t;
}
var Sy = !1;
if (nr) {
  var Bu;
  if (nr) {
    var Wu = "oninput" in document;
    if (!Wu) {
      var Qp = document.createElement("div");
      Qp.setAttribute("oninput", "return;"), Wu = typeof Qp.oninput == "function";
    }
    Bu = Wu;
  } else Bu = !1;
  Sy = Bu && (!document.documentMode || 9 < document.documentMode);
}
function Xp() {
  ji && (ji.detachEvent("onpropertychange", wy), es = ji = null);
}
function wy(e) {
  if (e.propertyName === "value" && Ca(es)) {
    var t = [];
    xy(t, es, e, Yd(e)), ey(pS, t);
  }
}
function hS(e, t, n) {
  e === "focusin" ? (Xp(), ji = t, es = n, ji.attachEvent("onpropertychange", wy)) : e === "focusout" && Xp();
}
function gS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ca(es);
}
function yS(e, t) {
  if (e === "click") return Ca(t);
}
function vS(e, t) {
  if (e === "input" || e === "change") return Ca(t);
}
function xS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var In = typeof Object.is == "function" ? Object.is : xS;
function ts(e, t) {
  if (In(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wc.call(t, o) || !In(e[o], t[o])) return !1;
  }
  return !0;
}
function qp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Zp(e, t) {
  var n = qp(e);
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
    n = qp(n);
  }
}
function Cy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function by() {
  for (var e = window, t = Ll(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ll(e.document);
  }
  return t;
}
function nf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function SS(e) {
  var t = by(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Cy(n.ownerDocument.documentElement, n)) {
    if (r !== null && nf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Zp(n, i);
        var s = Zp(
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
var wS = nr && "documentMode" in document && 11 >= document.documentMode, ko = null, Dc = null, zi = null, Bc = !1;
function Jp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bc || ko == null || ko !== Ll(r) || (r = ko, "selectionStart" in r && nf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), zi && ts(zi, r) || (zi = r, r = Wl(Dc, "onSelect"), 0 < r.length && (t = new Jd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ko)));
}
function Gs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Eo = { animationend: Gs("Animation", "AnimationEnd"), animationiteration: Gs("Animation", "AnimationIteration"), animationstart: Gs("Animation", "AnimationStart"), transitionend: Gs("Transition", "TransitionEnd") }, Uu = {}, ky = {};
nr && (ky = document.createElement("div").style, "AnimationEvent" in window || (delete Eo.animationend.animation, delete Eo.animationiteration.animation, delete Eo.animationstart.animation), "TransitionEvent" in window || delete Eo.transitionend.transition);
function ba(e) {
  if (Uu[e]) return Uu[e];
  if (!Eo[e]) return e;
  var t = Eo[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ky) return Uu[e] = t[n];
  return e;
}
var Ey = ba("animationend"), Ty = ba("animationiteration"), Ry = ba("animationstart"), Py = ba("transitionend"), Iy = /* @__PURE__ */ new Map(), em = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ar(e, t) {
  Iy.set(e, t), lo(t, [e]);
}
for (var Hu = 0; Hu < em.length; Hu++) {
  var Vu = em[Hu], CS = Vu.toLowerCase(), bS = Vu[0].toUpperCase() + Vu.slice(1);
  Ar(CS, "on" + bS);
}
Ar(Ey, "onAnimationEnd");
Ar(Ty, "onAnimationIteration");
Ar(Ry, "onAnimationStart");
Ar("dblclick", "onDoubleClick");
Ar("focusin", "onFocus");
Ar("focusout", "onBlur");
Ar(Py, "onTransitionEnd");
Ho("onMouseEnter", ["mouseout", "mouseover"]);
Ho("onMouseLeave", ["mouseout", "mouseover"]);
Ho("onPointerEnter", ["pointerout", "pointerover"]);
Ho("onPointerLeave", ["pointerout", "pointerover"]);
lo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
lo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
lo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
lo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
lo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
lo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));
function tm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Cx(r, t, void 0, e), e.currentTarget = null;
}
function My(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        tm(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        tm(o, l, u), i = a;
      }
    }
  }
  if (zl) throw e = jc, zl = !1, jc = null, e;
}
function We(e, t) {
  var n = t[Kc];
  n === void 0 && (n = t[Kc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || ($y(t, e, 2, !1), n.add(r));
}
function Ku(e, t, n) {
  var r = 0;
  t && (r |= 4), $y(n, e, r, t);
}
var Qs = "_reactListening" + Math.random().toString(36).slice(2);
function ns(e) {
  if (!e[Qs]) {
    e[Qs] = !0, _g.forEach(function(n) {
      n !== "selectionchange" && (kS.has(n) || Ku(n, !1, e), Ku(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qs] || (t[Qs] = !0, Ku("selectionchange", !1, t));
  }
}
function $y(e, t, n, r) {
  switch (my(t)) {
    case 1:
      var o = _x;
      break;
    case 4:
      o = Fx;
      break;
    default:
      o = qd;
  }
  n = o.bind(null, t, n, e), o = void 0, !Lc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Yu(e, t, n, r, o) {
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
        if (s = Kr(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  ey(function() {
    var u = i, c = Yd(n), f = [];
    e: {
      var y = Iy.get(e);
      if (y !== void 0) {
        var d = Jd, x = e;
        switch (e) {
          case "keypress":
            if (Sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = eS;
            break;
          case "focusin":
            x = "focus", d = Du;
            break;
          case "focusout":
            x = "blur", d = Du;
            break;
          case "beforeblur":
          case "afterblur":
            d = Du;
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
            d = Up;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = Wx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = rS;
            break;
          case Ey:
          case Ty:
          case Ry:
            d = Vx;
            break;
          case Py:
            d = iS;
            break;
          case "scroll":
            d = Dx;
            break;
          case "wheel":
            d = lS;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = Yx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = Vp;
        }
        var w = (t & 4) !== 0, b = !w && e === "scroll", m = w ? y !== null ? y + "Capture" : null : y;
        w = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var C = v.stateNode;
          if (v.tag === 5 && C !== null && (v = C, m !== null && (C = Xi(p, m), C != null && w.push(rs(p, C, v)))), b) break;
          p = p.return;
        }
        0 < w.length && (y = new d(y, x, null, n, c), f.push({ event: y, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", y && n !== Ac && (x = n.relatedTarget || n.fromElement) && (Kr(x) || x[rr])) break e;
        if ((d || y) && (y = c.window === c ? c : (y = c.ownerDocument) ? y.defaultView || y.parentWindow : window, d ? (x = n.relatedTarget || n.toElement, d = u, x = x ? Kr(x) : null, x !== null && (b = ao(x), x !== b || x.tag !== 5 && x.tag !== 6) && (x = null)) : (d = null, x = u), d !== x)) {
          if (w = Up, C = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = Vp, C = "onPointerLeave", m = "onPointerEnter", p = "pointer"), b = d == null ? y : To(d), v = x == null ? y : To(x), y = new w(C, p + "leave", d, n, c), y.target = b, y.relatedTarget = v, C = null, Kr(c) === u && (w = new w(m, p + "enter", x, n, c), w.target = v, w.relatedTarget = b, C = w), b = C, d && x) t: {
            for (w = d, m = x, p = 0, v = w; v; v = ho(v)) p++;
            for (v = 0, C = m; C; C = ho(C)) v++;
            for (; 0 < p - v; ) w = ho(w), p--;
            for (; 0 < v - p; ) m = ho(m), v--;
            for (; p--; ) {
              if (w === m || m !== null && w === m.alternate) break t;
              w = ho(w), m = ho(m);
            }
            w = null;
          }
          else w = null;
          d !== null && nm(f, y, d, w, !1), x !== null && b !== null && nm(f, b, x, w, !0);
        }
      }
      e: {
        if (y = u ? To(u) : window, d = y.nodeName && y.nodeName.toLowerCase(), d === "select" || d === "input" && y.type === "file") var E = mS;
        else if (Gp(y)) if (Sy) E = vS;
        else {
          E = gS;
          var k = hS;
        }
        else (d = y.nodeName) && d.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (E = yS);
        if (E && (E = E(e, u))) {
          xy(f, E, n, c);
          break e;
        }
        k && k(e, y, u), e === "focusout" && (k = y._wrapperState) && k.controlled && y.type === "number" && Pc(y, "number", y.value);
      }
      switch (k = u ? To(u) : window, e) {
        case "focusin":
          (Gp(k) || k.contentEditable === "true") && (ko = k, Dc = u, zi = null);
          break;
        case "focusout":
          zi = Dc = ko = null;
          break;
        case "mousedown":
          Bc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Bc = !1, Jp(f, n, c);
          break;
        case "selectionchange":
          if (wS) break;
        case "keydown":
        case "keyup":
          Jp(f, n, c);
      }
      var T;
      if (tf) e: {
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
      else bo ? yy(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (gy && n.locale !== "ko" && (bo || R !== "onCompositionStart" ? R === "onCompositionEnd" && bo && (T = hy()) : (vr = c, Zd = "value" in vr ? vr.value : vr.textContent, bo = !0)), k = Wl(u, R), 0 < k.length && (R = new Hp(R, e, null, n, c), f.push({ event: R, listeners: k }), T ? R.data = T : (T = vy(n), T !== null && (R.data = T)))), (T = uS ? cS(e, n) : dS(e, n)) && (u = Wl(u, "onBeforeInput"), 0 < u.length && (c = new Hp("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = T));
    }
    My(f, t);
  });
}
function rs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Xi(e, n), i != null && r.unshift(rs(e, i, o)), i = Xi(e, t), i != null && r.push(rs(e, i, o))), e = e.return;
  }
  return r;
}
function ho(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function nm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = Xi(n, i), a != null && s.unshift(rs(n, a, l))) : o || (a = Xi(n, i), a != null && s.push(rs(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ES = /\r\n?/g, TS = /\u0000|\uFFFD/g;
function rm(e) {
  return (typeof e == "string" ? e : "" + e).replace(ES, `
`).replace(TS, "");
}
function Xs(e, t, n) {
  if (t = rm(t), rm(e) !== t && n) throw Error(U(425));
}
function Ul() {
}
var Wc = null, Uc = null;
function Hc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Vc = typeof setTimeout == "function" ? setTimeout : void 0, RS = typeof clearTimeout == "function" ? clearTimeout : void 0, om = typeof Promise == "function" ? Promise : void 0, PS = typeof queueMicrotask == "function" ? queueMicrotask : typeof om < "u" ? function(e) {
  return om.resolve(null).then(e).catch(IS);
} : Vc;
function IS(e) {
  setTimeout(function() {
    throw e;
  });
}
function Gu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Ji(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Ji(t);
}
function br(e) {
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
function im(e) {
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
var ii = Math.random().toString(36).slice(2), jn = "__reactFiber$" + ii, os = "__reactProps$" + ii, rr = "__reactContainer$" + ii, Kc = "__reactEvents$" + ii, MS = "__reactListeners$" + ii, $S = "__reactHandles$" + ii;
function Kr(e) {
  var t = e[jn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[rr] || n[jn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = im(e); e !== null; ) {
        if (n = e[jn]) return n;
        e = im(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Es(e) {
  return e = e[jn] || e[rr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function To(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function ka(e) {
  return e[os] || null;
}
var Yc = [], Ro = -1;
function Nr(e) {
  return { current: e };
}
function Ue(e) {
  0 > Ro || (e.current = Yc[Ro], Yc[Ro] = null, Ro--);
}
function De(e, t) {
  Ro++, Yc[Ro] = e.current, e.current = t;
}
var Mr = {}, Rt = Nr(Mr), Ft = Nr(!1), Jr = Mr;
function Vo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Dt(e) {
  return e = e.childContextTypes, e != null;
}
function Hl() {
  Ue(Ft), Ue(Rt);
}
function sm(e, t, n) {
  if (Rt.current !== Mr) throw Error(U(168));
  De(Rt, t), De(Ft, n);
}
function Oy(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(U(108, hx(e) || "Unknown", o));
  return Ze({}, n, r);
}
function Vl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mr, Jr = Rt.current, De(Rt, e), De(Ft, Ft.current), !0;
}
function lm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(U(169));
  n ? (e = Oy(e, t, Jr), r.__reactInternalMemoizedMergedChildContext = e, Ue(Ft), Ue(Rt), De(Rt, e)) : Ue(Ft), De(Ft, n);
}
var Qn = null, Ea = !1, Qu = !1;
function Ay(e) {
  Qn === null ? Qn = [e] : Qn.push(e);
}
function OS(e) {
  Ea = !0, Ay(e);
}
function Lr() {
  if (!Qu && Qn !== null) {
    Qu = !0;
    var e = 0, t = $e;
    try {
      var n = Qn;
      for ($e = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Qn = null, Ea = !1;
    } catch (o) {
      throw Qn !== null && (Qn = Qn.slice(e + 1)), oy(Gd, Lr), o;
    } finally {
      $e = t, Qu = !1;
    }
  }
  return null;
}
var Po = [], Io = 0, Kl = null, Yl = 0, an = [], un = 0, eo = null, qn = 1, Zn = "";
function Ur(e, t) {
  Po[Io++] = Yl, Po[Io++] = Kl, Kl = e, Yl = t;
}
function Ny(e, t, n) {
  an[un++] = qn, an[un++] = Zn, an[un++] = eo, eo = e;
  var r = qn;
  e = Zn;
  var o = 32 - Rn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Rn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, qn = 1 << 32 - Rn(t) + o | n << o | r, Zn = i + e;
  } else qn = 1 << i | n << o | r, Zn = e;
}
function rf(e) {
  e.return !== null && (Ur(e, 1), Ny(e, 1, 0));
}
function of(e) {
  for (; e === Kl; ) Kl = Po[--Io], Po[Io] = null, Yl = Po[--Io], Po[Io] = null;
  for (; e === eo; ) eo = an[--un], an[un] = null, Zn = an[--un], an[un] = null, qn = an[--un], an[un] = null;
}
var qt = null, Xt = null, Ke = !1, Tn = null;
function Ly(e, t) {
  var n = fn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function am(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qt = e, Xt = br(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qt = e, Xt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = eo !== null ? { id: qn, overflow: Zn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = fn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qt = e, Xt = null, !0) : !1;
    default:
      return !1;
  }
}
function Gc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qc(e) {
  if (Ke) {
    var t = Xt;
    if (t) {
      var n = t;
      if (!am(e, t)) {
        if (Gc(e)) throw Error(U(418));
        t = br(n.nextSibling);
        var r = qt;
        t && am(e, t) ? Ly(r, n) : (e.flags = e.flags & -4097 | 2, Ke = !1, qt = e);
      }
    } else {
      if (Gc(e)) throw Error(U(418));
      e.flags = e.flags & -4097 | 2, Ke = !1, qt = e;
    }
  }
}
function um(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  qt = e;
}
function qs(e) {
  if (e !== qt) return !1;
  if (!Ke) return um(e), Ke = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Hc(e.type, e.memoizedProps)), t && (t = Xt)) {
    if (Gc(e)) throw jy(), Error(U(418));
    for (; t; ) Ly(e, t), t = br(t.nextSibling);
  }
  if (um(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xt = br(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Xt = null;
    }
  } else Xt = qt ? br(e.stateNode.nextSibling) : null;
  return !0;
}
function jy() {
  for (var e = Xt; e; ) e = br(e.nextSibling);
}
function Ko() {
  Xt = qt = null, Ke = !1;
}
function sf(e) {
  Tn === null ? Tn = [e] : Tn.push(e);
}
var AS = cr.ReactCurrentBatchConfig;
function gi(e, t, n) {
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
function Zs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(U(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function cm(e) {
  var t = e._init;
  return t(e._payload);
}
function zy(e) {
  function t(m, p) {
    if (e) {
      var v = m.deletions;
      v === null ? (m.deletions = [p], m.flags |= 16) : v.push(p);
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
    return m = Rr(m, p), m.index = 0, m.sibling = null, m;
  }
  function i(m, p, v) {
    return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < p ? (m.flags |= 2, p) : v) : (m.flags |= 2, p)) : (m.flags |= 1048576, p);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, v, C) {
    return p === null || p.tag !== 6 ? (p = nc(v, m.mode, C), p.return = m, p) : (p = o(p, v), p.return = m, p);
  }
  function a(m, p, v, C) {
    var E = v.type;
    return E === Co ? c(m, p, v.props.children, C, v.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === mr && cm(E) === p.type) ? (C = o(p, v.props), C.ref = gi(m, p, v), C.return = m, C) : (C = Rl(v.type, v.key, v.props, null, m.mode, C), C.ref = gi(m, p, v), C.return = m, C);
  }
  function u(m, p, v, C) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = rc(v, m.mode, C), p.return = m, p) : (p = o(p, v.children || []), p.return = m, p);
  }
  function c(m, p, v, C, E) {
    return p === null || p.tag !== 7 ? (p = qr(v, m.mode, C, E), p.return = m, p) : (p = o(p, v), p.return = m, p);
  }
  function f(m, p, v) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = nc("" + p, m.mode, v), p.return = m, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Bs:
          return v = Rl(p.type, p.key, p.props, null, m.mode, v), v.ref = gi(m, null, p), v.return = m, v;
        case wo:
          return p = rc(p, m.mode, v), p.return = m, p;
        case mr:
          var C = p._init;
          return f(m, C(p._payload), v);
      }
      if (Pi(p) || di(p)) return p = qr(p, m.mode, v, null), p.return = m, p;
      Zs(m, p);
    }
    return null;
  }
  function y(m, p, v, C) {
    var E = p !== null ? p.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return E !== null ? null : l(m, p, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Bs:
          return v.key === E ? a(m, p, v, C) : null;
        case wo:
          return v.key === E ? u(m, p, v, C) : null;
        case mr:
          return E = v._init, y(
            m,
            p,
            E(v._payload),
            C
          );
      }
      if (Pi(v) || di(v)) return E !== null ? null : c(m, p, v, C, null);
      Zs(m, v);
    }
    return null;
  }
  function d(m, p, v, C, E) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return m = m.get(v) || null, l(p, m, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Bs:
          return m = m.get(C.key === null ? v : C.key) || null, a(p, m, C, E);
        case wo:
          return m = m.get(C.key === null ? v : C.key) || null, u(p, m, C, E);
        case mr:
          var k = C._init;
          return d(m, p, v, k(C._payload), E);
      }
      if (Pi(C) || di(C)) return m = m.get(v) || null, c(p, m, C, E, null);
      Zs(p, C);
    }
    return null;
  }
  function x(m, p, v, C) {
    for (var E = null, k = null, T = p, R = p = 0, I = null; T !== null && R < v.length; R++) {
      T.index > R ? (I = T, T = null) : I = T.sibling;
      var L = y(m, T, v[R], C);
      if (L === null) {
        T === null && (T = I);
        break;
      }
      e && T && L.alternate === null && t(m, T), p = i(L, p, R), k === null ? E = L : k.sibling = L, k = L, T = I;
    }
    if (R === v.length) return n(m, T), Ke && Ur(m, R), E;
    if (T === null) {
      for (; R < v.length; R++) T = f(m, v[R], C), T !== null && (p = i(T, p, R), k === null ? E = T : k.sibling = T, k = T);
      return Ke && Ur(m, R), E;
    }
    for (T = r(m, T); R < v.length; R++) I = d(T, m, R, v[R], C), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? R : I.key), p = i(I, p, R), k === null ? E = I : k.sibling = I, k = I);
    return e && T.forEach(function(M) {
      return t(m, M);
    }), Ke && Ur(m, R), E;
  }
  function w(m, p, v, C) {
    var E = di(v);
    if (typeof E != "function") throw Error(U(150));
    if (v = E.call(v), v == null) throw Error(U(151));
    for (var k = E = null, T = p, R = p = 0, I = null, L = v.next(); T !== null && !L.done; R++, L = v.next()) {
      T.index > R ? (I = T, T = null) : I = T.sibling;
      var M = y(m, T, L.value, C);
      if (M === null) {
        T === null && (T = I);
        break;
      }
      e && T && M.alternate === null && t(m, T), p = i(M, p, R), k === null ? E = M : k.sibling = M, k = M, T = I;
    }
    if (L.done) return n(
      m,
      T
    ), Ke && Ur(m, R), E;
    if (T === null) {
      for (; !L.done; R++, L = v.next()) L = f(m, L.value, C), L !== null && (p = i(L, p, R), k === null ? E = L : k.sibling = L, k = L);
      return Ke && Ur(m, R), E;
    }
    for (T = r(m, T); !L.done; R++, L = v.next()) L = d(T, m, R, L.value, C), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? R : L.key), p = i(L, p, R), k === null ? E = L : k.sibling = L, k = L);
    return e && T.forEach(function(g) {
      return t(m, g);
    }), Ke && Ur(m, R), E;
  }
  function b(m, p, v, C) {
    if (typeof v == "object" && v !== null && v.type === Co && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Bs:
          e: {
            for (var E = v.key, k = p; k !== null; ) {
              if (k.key === E) {
                if (E = v.type, E === Co) {
                  if (k.tag === 7) {
                    n(m, k.sibling), p = o(k, v.props.children), p.return = m, m = p;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === mr && cm(E) === k.type) {
                  n(m, k.sibling), p = o(k, v.props), p.ref = gi(m, k, v), p.return = m, m = p;
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            v.type === Co ? (p = qr(v.props.children, m.mode, C, v.key), p.return = m, m = p) : (C = Rl(v.type, v.key, v.props, null, m.mode, C), C.ref = gi(m, p, v), C.return = m, m = C);
          }
          return s(m);
        case wo:
          e: {
            for (k = v.key; p !== null; ) {
              if (p.key === k) if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                n(m, p.sibling), p = o(p, v.children || []), p.return = m, m = p;
                break e;
              } else {
                n(m, p);
                break;
              }
              else t(m, p);
              p = p.sibling;
            }
            p = rc(v, m.mode, C), p.return = m, m = p;
          }
          return s(m);
        case mr:
          return k = v._init, b(m, p, k(v._payload), C);
      }
      if (Pi(v)) return x(m, p, v, C);
      if (di(v)) return w(m, p, v, C);
      Zs(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, p !== null && p.tag === 6 ? (n(m, p.sibling), p = o(p, v), p.return = m, m = p) : (n(m, p), p = nc(v, m.mode, C), p.return = m, m = p), s(m)) : n(m, p);
  }
  return b;
}
var Yo = zy(!0), _y = zy(!1), Gl = Nr(null), Ql = null, Mo = null, lf = null;
function af() {
  lf = Mo = Ql = null;
}
function uf(e) {
  var t = Gl.current;
  Ue(Gl), e._currentValue = t;
}
function Xc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function _o(e, t) {
  Ql = e, lf = Mo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_t = !0), e.firstContext = null);
}
function hn(e) {
  var t = e._currentValue;
  if (lf !== e) if (e = { context: e, memoizedValue: t, next: null }, Mo === null) {
    if (Ql === null) throw Error(U(308));
    Mo = e, Ql.dependencies = { lanes: 0, firstContext: e };
  } else Mo = Mo.next = e;
  return t;
}
var Yr = null;
function cf(e) {
  Yr === null ? Yr = [e] : Yr.push(e);
}
function Fy(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, cf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, or(e, r);
}
function or(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var hr = !1;
function df(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Dy(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function er(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function kr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ke & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, or(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, cf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, or(e, n);
}
function wl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Qd(e, n);
  }
}
function dm(e, t) {
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
function Xl(e, t, n, r) {
  var o = e.updateQueue;
  hr = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var f = o.baseState;
    s = 0, c = u = a = null, l = i;
    do {
      var y = l.lane, d = l.eventTime;
      if ((r & y) === y) {
        c !== null && (c = c.next = {
          eventTime: d,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var x = e, w = l;
          switch (y = t, d = n, w.tag) {
            case 1:
              if (x = w.payload, typeof x == "function") {
                f = x.call(d, f, y);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = w.payload, y = typeof x == "function" ? x.call(d, f, y) : x, y == null) break e;
              f = Ze({}, f, y);
              break e;
            case 2:
              hr = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, y = o.effects, y === null ? o.effects = [l] : y.push(l));
      } else d = { eventTime: d, lane: y, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = d, a = f) : c = c.next = d, s |= y;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        y = l, l = y.next, y.next = null, o.lastBaseUpdate = y, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    no |= s, e.lanes = s, e.memoizedState = f;
  }
}
function fm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(U(191, o));
      o.call(r);
    }
  }
}
var Ts = {}, Fn = Nr(Ts), is = Nr(Ts), ss = Nr(Ts);
function Gr(e) {
  if (e === Ts) throw Error(U(174));
  return e;
}
function ff(e, t) {
  switch (De(ss, t), De(is, e), De(Fn, Ts), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Mc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Mc(t, e);
  }
  Ue(Fn), De(Fn, t);
}
function Go() {
  Ue(Fn), Ue(is), Ue(ss);
}
function By(e) {
  Gr(ss.current);
  var t = Gr(Fn.current), n = Mc(t, e.type);
  t !== n && (De(is, e), De(Fn, n));
}
function pf(e) {
  is.current === e && (Ue(Fn), Ue(is));
}
var Qe = Nr(0);
function ql(e) {
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
var Xu = [];
function mf() {
  for (var e = 0; e < Xu.length; e++) Xu[e]._workInProgressVersionPrimary = null;
  Xu.length = 0;
}
var Cl = cr.ReactCurrentDispatcher, qu = cr.ReactCurrentBatchConfig, to = 0, qe = null, ft = null, ht = null, Zl = !1, _i = !1, ls = 0, NS = 0;
function bt() {
  throw Error(U(321));
}
function hf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!In(e[n], t[n])) return !1;
  return !0;
}
function gf(e, t, n, r, o, i) {
  if (to = i, qe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Cl.current = e === null || e.memoizedState === null ? _S : FS, e = n(r, o), _i) {
    i = 0;
    do {
      if (_i = !1, ls = 0, 25 <= i) throw Error(U(301));
      i += 1, ht = ft = null, t.updateQueue = null, Cl.current = DS, e = n(r, o);
    } while (_i);
  }
  if (Cl.current = Jl, t = ft !== null && ft.next !== null, to = 0, ht = ft = qe = null, Zl = !1, t) throw Error(U(300));
  return e;
}
function yf() {
  var e = ls !== 0;
  return ls = 0, e;
}
function An() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ht === null ? qe.memoizedState = ht = e : ht = ht.next = e, ht;
}
function gn() {
  if (ft === null) {
    var e = qe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ft.next;
  var t = ht === null ? qe.memoizedState : ht.next;
  if (t !== null) ht = t, ft = e;
  else {
    if (e === null) throw Error(U(310));
    ft = e, e = { memoizedState: ft.memoizedState, baseState: ft.baseState, baseQueue: ft.baseQueue, queue: ft.queue, next: null }, ht === null ? qe.memoizedState = ht = e : ht = ht.next = e;
  }
  return ht;
}
function as(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zu(e) {
  var t = gn(), n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = ft, o = r.baseQueue, i = n.pending;
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
      if ((to & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = f, s = r) : a = a.next = f, qe.lanes |= c, no |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, In(r, t.memoizedState) || (_t = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, qe.lanes |= i, no |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ju(e) {
  var t = gn(), n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    In(i, t.memoizedState) || (_t = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Wy() {
}
function Uy(e, t) {
  var n = qe, r = gn(), o = t(), i = !In(r.memoizedState, o);
  if (i && (r.memoizedState = o, _t = !0), r = r.queue, vf(Ky.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ht !== null && ht.memoizedState.tag & 1) {
    if (n.flags |= 2048, us(9, Vy.bind(null, n, r, o, t), void 0, null), gt === null) throw Error(U(349));
    to & 30 || Hy(n, t, o);
  }
  return o;
}
function Hy(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = qe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, qe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Vy(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Yy(t) && Gy(e);
}
function Ky(e, t, n) {
  return n(function() {
    Yy(t) && Gy(e);
  });
}
function Yy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !In(e, n);
  } catch {
    return !0;
  }
}
function Gy(e) {
  var t = or(e, 1);
  t !== null && Pn(t, e, 1, -1);
}
function pm(e) {
  var t = An();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: as, lastRenderedState: e }, t.queue = e, e = e.dispatch = zS.bind(null, qe, e), [t.memoizedState, e];
}
function us(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = qe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, qe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Qy() {
  return gn().memoizedState;
}
function bl(e, t, n, r) {
  var o = An();
  qe.flags |= e, o.memoizedState = us(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ta(e, t, n, r) {
  var o = gn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ft !== null) {
    var s = ft.memoizedState;
    if (i = s.destroy, r !== null && hf(r, s.deps)) {
      o.memoizedState = us(t, n, i, r);
      return;
    }
  }
  qe.flags |= e, o.memoizedState = us(1 | t, n, i, r);
}
function mm(e, t) {
  return bl(8390656, 8, e, t);
}
function vf(e, t) {
  return Ta(2048, 8, e, t);
}
function Xy(e, t) {
  return Ta(4, 2, e, t);
}
function qy(e, t) {
  return Ta(4, 4, e, t);
}
function Zy(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Jy(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ta(4, 4, Zy.bind(null, t, e), n);
}
function xf() {
}
function ev(e, t) {
  var n = gn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function tv(e, t) {
  var n = gn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function nv(e, t, n) {
  return to & 21 ? (In(n, t) || (n = ly(), qe.lanes |= n, no |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _t = !0), e.memoizedState = n);
}
function LS(e, t) {
  var n = $e;
  $e = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = qu.transition;
  qu.transition = {};
  try {
    e(!1), t();
  } finally {
    $e = n, qu.transition = r;
  }
}
function rv() {
  return gn().memoizedState;
}
function jS(e, t, n) {
  var r = Tr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ov(e)) iv(t, n);
  else if (n = Fy(e, t, n, r), n !== null) {
    var o = Ot();
    Pn(n, e, r, o), sv(n, t, r);
  }
}
function zS(e, t, n) {
  var r = Tr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ov(e)) iv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, In(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, cf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Fy(e, t, o, r), n !== null && (o = Ot(), Pn(n, e, r, o), sv(n, t, r));
  }
}
function ov(e) {
  var t = e.alternate;
  return e === qe || t !== null && t === qe;
}
function iv(e, t) {
  _i = Zl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function sv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Qd(e, n);
  }
}
var Jl = { readContext: hn, useCallback: bt, useContext: bt, useEffect: bt, useImperativeHandle: bt, useInsertionEffect: bt, useLayoutEffect: bt, useMemo: bt, useReducer: bt, useRef: bt, useState: bt, useDebugValue: bt, useDeferredValue: bt, useTransition: bt, useMutableSource: bt, useSyncExternalStore: bt, useId: bt, unstable_isNewReconciler: !1 }, _S = { readContext: hn, useCallback: function(e, t) {
  return An().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: hn, useEffect: mm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, bl(
    4194308,
    4,
    Zy.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return bl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return bl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = An();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = An();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = jS.bind(null, qe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = An();
  return e = { current: e }, t.memoizedState = e;
}, useState: pm, useDebugValue: xf, useDeferredValue: function(e) {
  return An().memoizedState = e;
}, useTransition: function() {
  var e = pm(!1), t = e[0];
  return e = LS.bind(null, e[1]), An().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = qe, o = An();
  if (Ke) {
    if (n === void 0) throw Error(U(407));
    n = n();
  } else {
    if (n = t(), gt === null) throw Error(U(349));
    to & 30 || Hy(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, mm(Ky.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, us(9, Vy.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = An(), t = gt.identifierPrefix;
  if (Ke) {
    var n = Zn, r = qn;
    n = (r & ~(1 << 32 - Rn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ls++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = NS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, FS = {
  readContext: hn,
  useCallback: ev,
  useContext: hn,
  useEffect: vf,
  useImperativeHandle: Jy,
  useInsertionEffect: Xy,
  useLayoutEffect: qy,
  useMemo: tv,
  useReducer: Zu,
  useRef: Qy,
  useState: function() {
    return Zu(as);
  },
  useDebugValue: xf,
  useDeferredValue: function(e) {
    var t = gn();
    return nv(t, ft.memoizedState, e);
  },
  useTransition: function() {
    var e = Zu(as)[0], t = gn().memoizedState;
    return [e, t];
  },
  useMutableSource: Wy,
  useSyncExternalStore: Uy,
  useId: rv,
  unstable_isNewReconciler: !1
}, DS = { readContext: hn, useCallback: ev, useContext: hn, useEffect: vf, useImperativeHandle: Jy, useInsertionEffect: Xy, useLayoutEffect: qy, useMemo: tv, useReducer: Ju, useRef: Qy, useState: function() {
  return Ju(as);
}, useDebugValue: xf, useDeferredValue: function(e) {
  var t = gn();
  return ft === null ? t.memoizedState = e : nv(t, ft.memoizedState, e);
}, useTransition: function() {
  var e = Ju(as)[0], t = gn().memoizedState;
  return [e, t];
}, useMutableSource: Wy, useSyncExternalStore: Uy, useId: rv, unstable_isNewReconciler: !1 };
function bn(e, t) {
  if (e && e.defaultProps) {
    t = Ze({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function qc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ze({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ra = { isMounted: function(e) {
  return (e = e._reactInternals) ? ao(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ot(), o = Tr(e), i = er(r, o);
  i.payload = t, n != null && (i.callback = n), t = kr(e, i, o), t !== null && (Pn(t, e, o, r), wl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ot(), o = Tr(e), i = er(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = kr(e, i, o), t !== null && (Pn(t, e, o, r), wl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ot(), r = Tr(e), o = er(n, r);
  o.tag = 2, t != null && (o.callback = t), t = kr(e, o, r), t !== null && (Pn(t, e, r, n), wl(t, e, r));
} };
function hm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ts(n, r) || !ts(o, i) : !0;
}
function lv(e, t, n) {
  var r = !1, o = Mr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = hn(i) : (o = Dt(t) ? Jr : Rt.current, r = t.contextTypes, i = (r = r != null) ? Vo(e, o) : Mr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ra, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function gm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ra.enqueueReplaceState(t, t.state, null);
}
function Zc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, df(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = hn(i) : (i = Dt(t) ? Jr : Rt.current, o.context = Vo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (qc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ra.enqueueReplaceState(o, o.state, null), Xl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qo(e, t) {
  try {
    var n = "", r = t;
    do
      n += mx(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ec(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Jc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var BS = typeof WeakMap == "function" ? WeakMap : Map;
function av(e, t, n) {
  n = er(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ta || (ta = !0, ud = r), Jc(e, t);
  }, n;
}
function uv(e, t, n) {
  n = er(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Jc(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Jc(e, t), typeof r != "function" && (Er === null ? Er = /* @__PURE__ */ new Set([this]) : Er.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function ym(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new BS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = tw.bind(null, e, t, n), t.then(e, e));
}
function vm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = er(-1, 1), t.tag = 2, kr(n, t, 1))), n.lanes |= 1), e);
}
var WS = cr.ReactCurrentOwner, _t = !1;
function It(e, t, n, r) {
  t.child = e === null ? _y(t, null, n, r) : Yo(t, e.child, n, r);
}
function Sm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return _o(t, o), r = gf(e, t, n, r, i, o), n = yf(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ir(e, t, o)) : (Ke && n && rf(t), t.flags |= 1, It(e, t, r, o), t.child);
}
function wm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Rf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, cv(e, t, i, r, o)) : (e = Rl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ts, n(s, r) && e.ref === t.ref) return ir(e, t, o);
  }
  return t.flags |= 1, e = Rr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function cv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ts(i, r) && e.ref === t.ref) if (_t = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (_t = !0);
    else return t.lanes = e.lanes, ir(e, t, o);
  }
  return ed(e, t, n, r, o);
}
function dv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, De(Oo, Yt), Yt |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, De(Oo, Yt), Yt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, De(Oo, Yt), Yt |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, De(Oo, Yt), Yt |= r;
  return It(e, t, o, n), t.child;
}
function fv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ed(e, t, n, r, o) {
  var i = Dt(n) ? Jr : Rt.current;
  return i = Vo(t, i), _o(t, o), n = gf(e, t, n, r, i, o), r = yf(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ir(e, t, o)) : (Ke && r && rf(t), t.flags |= 1, It(e, t, n, o), t.child);
}
function Cm(e, t, n, r, o) {
  if (Dt(n)) {
    var i = !0;
    Vl(t);
  } else i = !1;
  if (_o(t, o), t.stateNode === null) kl(e, t), lv(t, n, r), Zc(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = hn(u) : (u = Dt(n) ? Jr : Rt.current, u = Vo(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && gm(t, s, r, u), hr = !1;
    var y = t.memoizedState;
    s.state = y, Xl(t, r, s, o), a = t.memoizedState, l !== r || y !== a || Ft.current || hr ? (typeof c == "function" && (qc(t, n, c, r), a = t.memoizedState), (l = hr || hm(t, n, l, r, y, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Dy(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : bn(t.type, l), s.props = u, f = t.pendingProps, y = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = hn(a) : (a = Dt(n) ? Jr : Rt.current, a = Vo(t, a));
    var d = n.getDerivedStateFromProps;
    (c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || y !== a) && gm(t, s, r, a), hr = !1, y = t.memoizedState, s.state = y, Xl(t, r, s, o);
    var x = t.memoizedState;
    l !== f || y !== x || Ft.current || hr ? (typeof d == "function" && (qc(t, n, d, r), x = t.memoizedState), (u = hr || hm(t, n, u, r, y, x, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return td(e, t, n, r, i, o);
}
function td(e, t, n, r, o, i) {
  fv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && lm(t, n, !1), ir(e, t, i);
  r = t.stateNode, WS.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Yo(t, e.child, null, i), t.child = Yo(t, null, l, i)) : It(e, t, l, i), t.memoizedState = r.state, o && lm(t, n, !0), t.child;
}
function pv(e) {
  var t = e.stateNode;
  t.pendingContext ? sm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sm(e, t.context, !1), ff(e, t.containerInfo);
}
function bm(e, t, n, r, o) {
  return Ko(), sf(o), t.flags |= 256, It(e, t, n, r), t.child;
}
var nd = { dehydrated: null, treeContext: null, retryLane: 0 };
function rd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mv(e, t, n) {
  var r = t.pendingProps, o = Qe.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), De(Qe, o & 1), e === null)
    return Qc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Ma(s, r, 0, null), e = qr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = rd(n), t.memoizedState = nd, e) : Sf(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return US(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Rr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Rr(l, i) : (i = qr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? rd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = nd, r;
  }
  return i = e.child, e = i.sibling, r = Rr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Sf(e, t) {
  return t = Ma({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Js(e, t, n, r) {
  return r !== null && sf(r), Yo(t, e.child, null, n), e = Sf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function US(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ec(Error(U(422))), Js(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ma({ mode: "visible", children: r.children }, o, 0, null), i = qr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Yo(t, e.child, null, s), t.child.memoizedState = rd(s), t.memoizedState = nd, i);
  if (!(t.mode & 1)) return Js(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(U(419)), r = ec(i, r, void 0), Js(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, _t || l) {
    if (r = gt, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, or(e, o), Pn(r, e, o, -1));
    }
    return Tf(), r = ec(Error(U(421))), Js(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = nw.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Xt = br(o.nextSibling), qt = t, Ke = !0, Tn = null, e !== null && (an[un++] = qn, an[un++] = Zn, an[un++] = eo, qn = e.id, Zn = e.overflow, eo = t), t = Sf(t, r.children), t.flags |= 4096, t);
}
function km(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xc(e.return, t, n);
}
function tc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function hv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (It(e, t, r.children, n), r = Qe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && km(e, n, t);
      else if (e.tag === 19) km(e, n, t);
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
  if (De(Qe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ql(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), tc(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && ql(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      tc(t, !0, n, null, i);
      break;
    case "together":
      tc(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function kl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ir(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), no |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(U(153));
  if (t.child !== null) {
    for (e = t.child, n = Rr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Rr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function HS(e, t, n) {
  switch (t.tag) {
    case 3:
      pv(t), Ko();
      break;
    case 5:
      By(t);
      break;
    case 1:
      Dt(t.type) && Vl(t);
      break;
    case 4:
      ff(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      De(Gl, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (De(Qe, Qe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? mv(e, t, n) : (De(Qe, Qe.current & 1), e = ir(e, t, n), e !== null ? e.sibling : null);
      De(Qe, Qe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return hv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), De(Qe, Qe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, dv(e, t, n);
  }
  return ir(e, t, n);
}
var gv, od, yv, vv;
gv = function(e, t) {
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
od = function() {
};
yv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Gr(Fn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Tc(e, o), r = Tc(e, r), i = [];
        break;
      case "select":
        o = Ze({}, o, { value: void 0 }), r = Ze({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Ic(e, o), r = Ic(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ul);
    }
    $c(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Gi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Gi.hasOwnProperty(u) ? (a != null && u === "onScroll" && We("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
vv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yi(e, t) {
  if (!Ke) switch (e.tailMode) {
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
function kt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function VS(e, t, n) {
  var r = t.pendingProps;
  switch (of(t), t.tag) {
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
      return kt(t), null;
    case 1:
      return Dt(t.type) && Hl(), kt(t), null;
    case 3:
      return r = t.stateNode, Go(), Ue(Ft), Ue(Rt), mf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (qs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Tn !== null && (fd(Tn), Tn = null))), od(e, t), kt(t), null;
    case 5:
      pf(t);
      var o = Gr(ss.current);
      if (n = t.type, e !== null && t.stateNode != null) yv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166));
          return kt(t), null;
        }
        if (e = Gr(Fn.current), qs(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[jn] = t, r[os] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              We("cancel", r), We("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              We("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Mi.length; o++) We(Mi[o], r);
              break;
            case "source":
              We("error", r);
              break;
            case "img":
            case "image":
            case "link":
              We(
                "error",
                r
              ), We("load", r);
              break;
            case "details":
              We("toggle", r);
              break;
            case "input":
              Ap(r, i), We("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, We("invalid", r);
              break;
            case "textarea":
              Lp(r, i), We("invalid", r);
          }
          $c(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Xs(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Xs(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Gi.hasOwnProperty(s) && l != null && s === "onScroll" && We("scroll", r);
          }
          switch (n) {
            case "input":
              Ws(r), Np(r, i, !0);
              break;
            case "textarea":
              Ws(r), jp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ul);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[jn] = t, e[os] = r, gv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Oc(n, r), n) {
              case "dialog":
                We("cancel", e), We("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                We("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Mi.length; o++) We(Mi[o], e);
                o = r;
                break;
              case "source":
                We("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                We(
                  "error",
                  e
                ), We("load", e), o = r;
                break;
              case "details":
                We("toggle", e), o = r;
                break;
              case "input":
                Ap(e, r), o = Tc(e, r), We("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ze({}, r, { value: void 0 }), We("invalid", e);
                break;
              case "textarea":
                Lp(e, r), o = Ic(e, r), We("invalid", e);
                break;
              default:
                o = r;
            }
            $c(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Qg(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Yg(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Qi(e, a) : typeof a == "number" && Qi(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Gi.hasOwnProperty(i) ? a != null && i === "onScroll" && We("scroll", e) : a != null && Ud(e, i, a, s));
            }
            switch (n) {
              case "input":
                Ws(e), Np(e, r, !1);
                break;
              case "textarea":
                Ws(e), jp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ir(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? No(e, !!r.multiple, i, !1) : r.defaultValue != null && No(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ul);
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
      return kt(t), null;
    case 6:
      if (e && t.stateNode != null) vv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(U(166));
        if (n = Gr(ss.current), Gr(Fn.current), qs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[jn] = t, (i = r.nodeValue !== n) && (e = qt, e !== null)) switch (e.tag) {
            case 3:
              Xs(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Xs(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[jn] = t, t.stateNode = r;
      }
      return kt(t), null;
    case 13:
      if (Ue(Qe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ke && Xt !== null && t.mode & 1 && !(t.flags & 128)) jy(), Ko(), t.flags |= 98560, i = !1;
        else if (i = qs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(U(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(U(317));
            i[jn] = t;
          } else Ko(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          kt(t), i = !1;
        } else Tn !== null && (fd(Tn), Tn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Qe.current & 1 ? pt === 0 && (pt = 3) : Tf())), t.updateQueue !== null && (t.flags |= 4), kt(t), null);
    case 4:
      return Go(), od(e, t), e === null && ns(t.stateNode.containerInfo), kt(t), null;
    case 10:
      return uf(t.type._context), kt(t), null;
    case 17:
      return Dt(t.type) && Hl(), kt(t), null;
    case 19:
      if (Ue(Qe), i = t.memoizedState, i === null) return kt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) yi(i, !1);
      else {
        if (pt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ql(e), s !== null) {
            for (t.flags |= 128, yi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return De(Qe, Qe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && nt() > Xo && (t.flags |= 128, r = !0, yi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ql(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ke) return kt(t), null;
        } else 2 * nt() - i.renderingStartTime > Xo && n !== 1073741824 && (t.flags |= 128, r = !0, yi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = nt(), t.sibling = null, n = Qe.current, De(Qe, r ? n & 1 | 2 : n & 1), t) : (kt(t), null);
    case 22:
    case 23:
      return Ef(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Yt & 1073741824 && (kt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : kt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function KS(e, t) {
  switch (of(t), t.tag) {
    case 1:
      return Dt(t.type) && Hl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Go(), Ue(Ft), Ue(Rt), mf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return pf(t), null;
    case 13:
      if (Ue(Qe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(U(340));
        Ko();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Ue(Qe), null;
    case 4:
      return Go(), null;
    case 10:
      return uf(t.type._context), null;
    case 22:
    case 23:
      return Ef(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var el = !1, Tt = !1, YS = typeof WeakSet == "function" ? WeakSet : Set, Z = null;
function $o(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Je(e, t, r);
  }
  else n.current = null;
}
function id(e, t, n) {
  try {
    n();
  } catch (r) {
    Je(e, t, r);
  }
}
var Em = !1;
function GS(e, t) {
  if (Wc = Dl, e = by(), nf(e)) {
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
        var s = 0, l = -1, a = -1, u = 0, c = 0, f = e, y = null;
        t: for (; ; ) {
          for (var d; f !== n || o !== 0 && f.nodeType !== 3 || (l = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (d = f.firstChild) !== null; )
            y = f, f = d;
          for (; ; ) {
            if (f === e) break t;
            if (y === n && ++u === o && (l = s), y === i && ++c === r && (a = s), (d = f.nextSibling) !== null) break;
            f = y, y = f.parentNode;
          }
          f = d;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Uc = { focusedElem: e, selectionRange: n }, Dl = !1, Z = t; Z !== null; ) if (t = Z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Z = e;
  else for (; Z !== null; ) {
    t = Z;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var w = x.memoizedProps, b = x.memoizedState, m = t.stateNode, p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : bn(t.type, w), b);
            m.__reactInternalSnapshotBeforeUpdate = p;
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
    } catch (C) {
      Je(t, t.return, C);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, Z = e;
      break;
    }
    Z = t.return;
  }
  return x = Em, Em = !1, x;
}
function Fi(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && id(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Pa(e, t) {
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
function sd(e) {
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
function xv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, xv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jn], delete t[os], delete t[Kc], delete t[MS], delete t[$S])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Sv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tm(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ld(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ul));
  else if (r !== 4 && (e = e.child, e !== null)) for (ld(e, t, n), e = e.sibling; e !== null; ) ld(e, t, n), e = e.sibling;
}
function ad(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ad(e, t, n), e = e.sibling; e !== null; ) ad(e, t, n), e = e.sibling;
}
var vt = null, En = !1;
function dr(e, t, n) {
  for (n = n.child; n !== null; ) wv(e, t, n), n = n.sibling;
}
function wv(e, t, n) {
  if (_n && typeof _n.onCommitFiberUnmount == "function") try {
    _n.onCommitFiberUnmount(Sa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Tt || $o(n, t);
    case 6:
      var r = vt, o = En;
      vt = null, dr(e, t, n), vt = r, En = o, vt !== null && (En ? (e = vt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : vt.removeChild(n.stateNode));
      break;
    case 18:
      vt !== null && (En ? (e = vt, n = n.stateNode, e.nodeType === 8 ? Gu(e.parentNode, n) : e.nodeType === 1 && Gu(e, n), Ji(e)) : Gu(vt, n.stateNode));
      break;
    case 4:
      r = vt, o = En, vt = n.stateNode.containerInfo, En = !0, dr(e, t, n), vt = r, En = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Tt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && id(n, t, s), o = o.next;
        } while (o !== r);
      }
      dr(e, t, n);
      break;
    case 1:
      if (!Tt && ($o(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        Je(n, t, l);
      }
      dr(e, t, n);
      break;
    case 21:
      dr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Tt = (r = Tt) || n.memoizedState !== null, dr(e, t, n), Tt = r) : dr(e, t, n);
      break;
    default:
      dr(e, t, n);
  }
}
function Rm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new YS()), t.forEach(function(r) {
      var o = rw.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function wn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            vt = l.stateNode, En = !1;
            break e;
          case 3:
            vt = l.stateNode.containerInfo, En = !0;
            break e;
          case 4:
            vt = l.stateNode.containerInfo, En = !0;
            break e;
        }
        l = l.return;
      }
      if (vt === null) throw Error(U(160));
      wv(i, s, o), vt = null, En = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      Je(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Cv(t, e), t = t.sibling;
}
function Cv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (wn(t, e), Mn(e), r & 4) {
        try {
          Fi(3, e, e.return), Pa(3, e);
        } catch (w) {
          Je(e, e.return, w);
        }
        try {
          Fi(5, e, e.return);
        } catch (w) {
          Je(e, e.return, w);
        }
      }
      break;
    case 1:
      wn(t, e), Mn(e), r & 512 && n !== null && $o(n, n.return);
      break;
    case 5:
      if (wn(t, e), Mn(e), r & 512 && n !== null && $o(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Qi(o, "");
        } catch (w) {
          Je(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && Hg(o, i), Oc(l, s);
          var u = Oc(l, i);
          for (s = 0; s < a.length; s += 2) {
            var c = a[s], f = a[s + 1];
            c === "style" ? Qg(o, f) : c === "dangerouslySetInnerHTML" ? Yg(o, f) : c === "children" ? Qi(o, f) : Ud(o, c, f, u);
          }
          switch (l) {
            case "input":
              Rc(o, i);
              break;
            case "textarea":
              Vg(o, i);
              break;
            case "select":
              var y = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var d = i.value;
              d != null ? No(o, !!i.multiple, d, !1) : y !== !!i.multiple && (i.defaultValue != null ? No(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : No(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[os] = i;
        } catch (w) {
          Je(e, e.return, w);
        }
      }
      break;
    case 6:
      if (wn(t, e), Mn(e), r & 4) {
        if (e.stateNode === null) throw Error(U(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (w) {
          Je(e, e.return, w);
        }
      }
      break;
    case 3:
      if (wn(t, e), Mn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ji(t.containerInfo);
      } catch (w) {
        Je(e, e.return, w);
      }
      break;
    case 4:
      wn(t, e), Mn(e);
      break;
    case 13:
      wn(t, e), Mn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (bf = nt())), r & 4 && Rm(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Tt = (u = Tt) || c, wn(t, e), Tt = u) : wn(t, e), Mn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (Z = e, c = e.child; c !== null; ) {
          for (f = Z = c; Z !== null; ) {
            switch (y = Z, d = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Fi(4, y, y.return);
                break;
              case 1:
                $o(y, y.return);
                var x = y.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (w) {
                    Je(r, n, w);
                  }
                }
                break;
              case 5:
                $o(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  Im(f);
                  continue;
                }
            }
            d !== null ? (d.return = y, Z = d) : Im(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Gg("display", s));
              } catch (w) {
                Je(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (w) {
              Je(e, e.return, w);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      wn(t, e), Mn(e), r & 4 && Rm(e);
      break;
    case 21:
      break;
    default:
      wn(
        t,
        e
      ), Mn(e);
  }
}
function Mn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sv(n)) {
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
          r.flags & 32 && (Qi(o, ""), r.flags &= -33);
          var i = Tm(e);
          ad(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Tm(e);
          ld(e, l, s);
          break;
        default:
          throw Error(U(161));
      }
    } catch (a) {
      Je(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function QS(e, t, n) {
  Z = e, bv(e);
}
function bv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var o = Z, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || el;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Tt;
        l = el;
        var u = Tt;
        if (el = s, (Tt = a) && !u) for (Z = o; Z !== null; ) s = Z, a = s.child, s.tag === 22 && s.memoizedState !== null ? Mm(o) : a !== null ? (a.return = s, Z = a) : Mm(o);
        for (; i !== null; ) Z = i, bv(i), i = i.sibling;
        Z = o, el = l, Tt = u;
      }
      Pm(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, Z = i) : Pm(e);
  }
}
function Pm(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Tt || Pa(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Tt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : bn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && fm(t, i, r);
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
              fm(t, s, n);
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
                  var f = c.dehydrated;
                  f !== null && Ji(f);
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
        Tt || t.flags & 512 && sd(t);
      } catch (y) {
        Je(t, t.return, y);
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
function Im(e) {
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
function Mm(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pa(4, t);
          } catch (a) {
            Je(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Je(t, o, a);
            }
          }
          var i = t.return;
          try {
            sd(t);
          } catch (a) {
            Je(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            sd(t);
          } catch (a) {
            Je(t, s, a);
          }
      }
    } catch (a) {
      Je(t, t.return, a);
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
var XS = Math.ceil, ea = cr.ReactCurrentDispatcher, wf = cr.ReactCurrentOwner, pn = cr.ReactCurrentBatchConfig, ke = 0, gt = null, ut = null, St = 0, Yt = 0, Oo = Nr(0), pt = 0, cs = null, no = 0, Ia = 0, Cf = 0, Di = null, zt = null, bf = 0, Xo = 1 / 0, Gn = null, ta = !1, ud = null, Er = null, tl = !1, xr = null, na = 0, Bi = 0, cd = null, El = -1, Tl = 0;
function Ot() {
  return ke & 6 ? nt() : El !== -1 ? El : El = nt();
}
function Tr(e) {
  return e.mode & 1 ? ke & 2 && St !== 0 ? St & -St : AS.transition !== null ? (Tl === 0 && (Tl = ly()), Tl) : (e = $e, e !== 0 || (e = window.event, e = e === void 0 ? 16 : my(e.type)), e) : 1;
}
function Pn(e, t, n, r) {
  if (50 < Bi) throw Bi = 0, cd = null, Error(U(185));
  bs(e, n, r), (!(ke & 2) || e !== gt) && (e === gt && (!(ke & 2) && (Ia |= n), pt === 4 && yr(e, St)), Bt(e, r), n === 1 && ke === 0 && !(t.mode & 1) && (Xo = nt() + 500, Ea && Lr()));
}
function Bt(e, t) {
  var n = e.callbackNode;
  Ax(e, t);
  var r = Fl(e, e === gt ? St : 0);
  if (r === 0) n !== null && Fp(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Fp(n), t === 1) e.tag === 0 ? OS($m.bind(null, e)) : Ay($m.bind(null, e)), PS(function() {
      !(ke & 6) && Lr();
    }), n = null;
    else {
      switch (ay(r)) {
        case 1:
          n = Gd;
          break;
        case 4:
          n = iy;
          break;
        case 16:
          n = _l;
          break;
        case 536870912:
          n = sy;
          break;
        default:
          n = _l;
      }
      n = $v(n, kv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function kv(e, t) {
  if (El = -1, Tl = 0, ke & 6) throw Error(U(327));
  var n = e.callbackNode;
  if (Fo() && e.callbackNode !== n) return null;
  var r = Fl(e, e === gt ? St : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ra(e, r);
  else {
    t = r;
    var o = ke;
    ke |= 2;
    var i = Tv();
    (gt !== e || St !== t) && (Gn = null, Xo = nt() + 500, Xr(e, t));
    do
      try {
        JS();
        break;
      } catch (l) {
        Ev(e, l);
      }
    while (!0);
    af(), ea.current = i, ke = o, ut !== null ? t = 0 : (gt = null, St = 0, t = pt);
  }
  if (t !== 0) {
    if (t === 2 && (o = zc(e), o !== 0 && (r = o, t = dd(e, o))), t === 1) throw n = cs, Xr(e, 0), yr(e, r), Bt(e, nt()), n;
    if (t === 6) yr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !qS(o) && (t = ra(e, r), t === 2 && (i = zc(e), i !== 0 && (r = i, t = dd(e, i))), t === 1)) throw n = cs, Xr(e, 0), yr(e, r), Bt(e, nt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          Hr(e, zt, Gn);
          break;
        case 3:
          if (yr(e, r), (r & 130023424) === r && (t = bf + 500 - nt(), 10 < t)) {
            if (Fl(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ot(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Vc(Hr.bind(null, e, zt, Gn), t);
            break;
          }
          Hr(e, zt, Gn);
          break;
        case 4:
          if (yr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Rn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = nt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * XS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Vc(Hr.bind(null, e, zt, Gn), r);
            break;
          }
          Hr(e, zt, Gn);
          break;
        case 5:
          Hr(e, zt, Gn);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return Bt(e, nt()), e.callbackNode === n ? kv.bind(null, e) : null;
}
function dd(e, t) {
  var n = Di;
  return e.current.memoizedState.isDehydrated && (Xr(e, t).flags |= 256), e = ra(e, t), e !== 2 && (t = zt, zt = n, t !== null && fd(t)), e;
}
function fd(e) {
  zt === null ? zt = e : zt.push.apply(zt, e);
}
function qS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!In(i(), o)) return !1;
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
function yr(e, t) {
  for (t &= ~Cf, t &= ~Ia, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Rn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function $m(e) {
  if (ke & 6) throw Error(U(327));
  Fo();
  var t = Fl(e, 0);
  if (!(t & 1)) return Bt(e, nt()), null;
  var n = ra(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zc(e);
    r !== 0 && (t = r, n = dd(e, r));
  }
  if (n === 1) throw n = cs, Xr(e, 0), yr(e, t), Bt(e, nt()), n;
  if (n === 6) throw Error(U(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Hr(e, zt, Gn), Bt(e, nt()), null;
}
function kf(e, t) {
  var n = ke;
  ke |= 1;
  try {
    return e(t);
  } finally {
    ke = n, ke === 0 && (Xo = nt() + 500, Ea && Lr());
  }
}
function ro(e) {
  xr !== null && xr.tag === 0 && !(ke & 6) && Fo();
  var t = ke;
  ke |= 1;
  var n = pn.transition, r = $e;
  try {
    if (pn.transition = null, $e = 1, e) return e();
  } finally {
    $e = r, pn.transition = n, ke = t, !(ke & 6) && Lr();
  }
}
function Ef() {
  Yt = Oo.current, Ue(Oo);
}
function Xr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, RS(n)), ut !== null) for (n = ut.return; n !== null; ) {
    var r = n;
    switch (of(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Hl();
        break;
      case 3:
        Go(), Ue(Ft), Ue(Rt), mf();
        break;
      case 5:
        pf(r);
        break;
      case 4:
        Go();
        break;
      case 13:
        Ue(Qe);
        break;
      case 19:
        Ue(Qe);
        break;
      case 10:
        uf(r.type._context);
        break;
      case 22:
      case 23:
        Ef();
    }
    n = n.return;
  }
  if (gt = e, ut = e = Rr(e.current, null), St = Yt = t, pt = 0, cs = null, Cf = Ia = no = 0, zt = Di = null, Yr !== null) {
    for (t = 0; t < Yr.length; t++) if (n = Yr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Yr = null;
  }
  return e;
}
function Ev(e, t) {
  do {
    var n = ut;
    try {
      if (af(), Cl.current = Jl, Zl) {
        for (var r = qe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Zl = !1;
      }
      if (to = 0, ht = ft = qe = null, _i = !1, ls = 0, wf.current = null, n === null || n.return === null) {
        pt = 1, cs = t, ut = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = St, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = l, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var y = c.alternate;
            y ? (c.updateQueue = y.updateQueue, c.memoizedState = y.memoizedState, c.lanes = y.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var d = vm(s);
          if (d !== null) {
            d.flags &= -257, xm(d, s, l, i, t), d.mode & 1 && ym(i, u, t), t = d, a = u;
            var x = t.updateQueue;
            if (x === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ym(i, u, t), Tf();
              break e;
            }
            a = Error(U(426));
          }
        } else if (Ke && l.mode & 1) {
          var b = vm(s);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), xm(b, s, l, i, t), sf(Qo(a, l));
            break e;
          }
        }
        i = a = Qo(a, l), pt !== 4 && (pt = 2), Di === null ? Di = [i] : Di.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = av(i, a, t);
              dm(i, m);
              break e;
            case 1:
              l = a;
              var p = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Er === null || !Er.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var C = uv(i, l, t);
                dm(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Pv(n);
    } catch (E) {
      t = E, ut === n && n !== null && (ut = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Tv() {
  var e = ea.current;
  return ea.current = Jl, e === null ? Jl : e;
}
function Tf() {
  (pt === 0 || pt === 3 || pt === 2) && (pt = 4), gt === null || !(no & 268435455) && !(Ia & 268435455) || yr(gt, St);
}
function ra(e, t) {
  var n = ke;
  ke |= 2;
  var r = Tv();
  (gt !== e || St !== t) && (Gn = null, Xr(e, t));
  do
    try {
      ZS();
      break;
    } catch (o) {
      Ev(e, o);
    }
  while (!0);
  if (af(), ke = n, ea.current = r, ut !== null) throw Error(U(261));
  return gt = null, St = 0, pt;
}
function ZS() {
  for (; ut !== null; ) Rv(ut);
}
function JS() {
  for (; ut !== null && !kx(); ) Rv(ut);
}
function Rv(e) {
  var t = Mv(e.alternate, e, Yt);
  e.memoizedProps = e.pendingProps, t === null ? Pv(e) : ut = t, wf.current = null;
}
function Pv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = KS(n, t), n !== null) {
        n.flags &= 32767, ut = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        pt = 6, ut = null;
        return;
      }
    } else if (n = VS(n, t, Yt), n !== null) {
      ut = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ut = t;
      return;
    }
    ut = t = e;
  } while (t !== null);
  pt === 0 && (pt = 5);
}
function Hr(e, t, n) {
  var r = $e, o = pn.transition;
  try {
    pn.transition = null, $e = 1, ew(e, t, n, r);
  } finally {
    pn.transition = o, $e = r;
  }
  return null;
}
function ew(e, t, n, r) {
  do
    Fo();
  while (xr !== null);
  if (ke & 6) throw Error(U(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(U(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Nx(e, i), e === gt && (ut = gt = null, St = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || tl || (tl = !0, $v(_l, function() {
    return Fo(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = pn.transition, pn.transition = null;
    var s = $e;
    $e = 1;
    var l = ke;
    ke |= 4, wf.current = null, GS(e, n), Cv(n, e), SS(Uc), Dl = !!Wc, Uc = Wc = null, e.current = n, QS(n), Ex(), ke = l, $e = s, pn.transition = i;
  } else e.current = n;
  if (tl && (tl = !1, xr = e, na = o), i = e.pendingLanes, i === 0 && (Er = null), Px(n.stateNode), Bt(e, nt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ta) throw ta = !1, e = ud, ud = null, e;
  return na & 1 && e.tag !== 0 && Fo(), i = e.pendingLanes, i & 1 ? e === cd ? Bi++ : (Bi = 0, cd = e) : Bi = 0, Lr(), null;
}
function Fo() {
  if (xr !== null) {
    var e = ay(na), t = pn.transition, n = $e;
    try {
      if (pn.transition = null, $e = 16 > e ? 16 : e, xr === null) var r = !1;
      else {
        if (e = xr, xr = null, na = 0, ke & 6) throw Error(U(331));
        var o = ke;
        for (ke |= 4, Z = e.current; Z !== null; ) {
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
                      Fi(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, Z = f;
                  else for (; Z !== null; ) {
                    c = Z;
                    var y = c.sibling, d = c.return;
                    if (xv(c), c === u) {
                      Z = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = d, Z = y;
                      break;
                    }
                    Z = d;
                  }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var b = w.sibling;
                    w.sibling = null, w = b;
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
                Fi(9, i, i.return);
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
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) v.return = s, Z = v;
          else e: for (s = p; Z !== null; ) {
            if (l = Z, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Pa(9, l);
              }
            } catch (E) {
              Je(l, l.return, E);
            }
            if (l === s) {
              Z = null;
              break e;
            }
            var C = l.sibling;
            if (C !== null) {
              C.return = l.return, Z = C;
              break e;
            }
            Z = l.return;
          }
        }
        if (ke = o, Lr(), _n && typeof _n.onPostCommitFiberRoot == "function") try {
          _n.onPostCommitFiberRoot(Sa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      $e = n, pn.transition = t;
    }
  }
  return !1;
}
function Om(e, t, n) {
  t = Qo(n, t), t = av(e, t, 1), e = kr(e, t, 1), t = Ot(), e !== null && (bs(e, 1, t), Bt(e, t));
}
function Je(e, t, n) {
  if (e.tag === 3) Om(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Om(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Er === null || !Er.has(r))) {
        e = Qo(n, e), e = uv(t, e, 1), t = kr(t, e, 1), e = Ot(), t !== null && (bs(t, 1, e), Bt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function tw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ot(), e.pingedLanes |= e.suspendedLanes & n, gt === e && (St & n) === n && (pt === 4 || pt === 3 && (St & 130023424) === St && 500 > nt() - bf ? Xr(e, 0) : Cf |= n), Bt(e, t);
}
function Iv(e, t) {
  t === 0 && (e.mode & 1 ? (t = Vs, Vs <<= 1, !(Vs & 130023424) && (Vs = 4194304)) : t = 1);
  var n = Ot();
  e = or(e, t), e !== null && (bs(e, t, n), Bt(e, n));
}
function nw(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Iv(e, n);
}
function rw(e, t) {
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
  r !== null && r.delete(t), Iv(e, n);
}
var Mv;
Mv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ft.current) _t = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return _t = !1, HS(e, t, n);
    _t = !!(e.flags & 131072);
  }
  else _t = !1, Ke && t.flags & 1048576 && Ny(t, Yl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      kl(e, t), e = t.pendingProps;
      var o = Vo(t, Rt.current);
      _o(t, n), o = gf(null, t, r, e, o, n);
      var i = yf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Dt(r) ? (i = !0, Vl(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, df(t), o.updater = Ra, t.stateNode = o, o._reactInternals = t, Zc(t, r, e, n), t = td(null, t, r, !0, i, n)) : (t.tag = 0, Ke && i && rf(t), It(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (kl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = iw(r), e = bn(r, e), o) {
          case 0:
            t = ed(null, t, r, e, n);
            break e;
          case 1:
            t = Cm(null, t, r, e, n);
            break e;
          case 11:
            t = Sm(null, t, r, e, n);
            break e;
          case 14:
            t = wm(null, t, r, bn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bn(r, o), ed(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bn(r, o), Cm(e, t, r, o, n);
    case 3:
      e: {
        if (pv(t), e === null) throw Error(U(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Dy(e, t), Xl(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Qo(Error(U(423)), t), t = bm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Qo(Error(U(424)), t), t = bm(e, t, r, n, o);
          break e;
        } else for (Xt = br(t.stateNode.containerInfo.firstChild), qt = t, Ke = !0, Tn = null, n = _y(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ko(), r === o) {
            t = ir(e, t, n);
            break e;
          }
          It(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return By(t), e === null && Qc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Hc(r, o) ? s = null : i !== null && Hc(r, i) && (t.flags |= 32), fv(e, t), It(e, t, s, n), t.child;
    case 6:
      return e === null && Qc(t), null;
    case 13:
      return mv(e, t, n);
    case 4:
      return ff(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Yo(t, null, r, n) : It(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bn(r, o), Sm(e, t, r, o, n);
    case 7:
      return It(e, t, t.pendingProps, n), t.child;
    case 8:
      return It(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return It(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, De(Gl, r._currentValue), r._currentValue = s, i !== null) if (In(i.value, s)) {
          if (i.children === o.children && !Ft.current) {
            t = ir(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = er(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Xc(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Xc(s, n, t), s = i.sibling;
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
        It(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, _o(t, n), o = hn(o), r = r(o), t.flags |= 1, It(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = bn(r, t.pendingProps), o = bn(r.type, o), wm(e, t, r, o, n);
    case 15:
      return cv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bn(r, o), kl(e, t), t.tag = 1, Dt(r) ? (e = !0, Vl(t)) : e = !1, _o(t, n), lv(t, r, o), Zc(t, r, o, n), td(null, t, r, !0, e, n);
    case 19:
      return hv(e, t, n);
    case 22:
      return dv(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function $v(e, t) {
  return oy(e, t);
}
function ow(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function fn(e, t, n, r) {
  return new ow(e, t, n, r);
}
function Rf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function iw(e) {
  if (typeof e == "function") return Rf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Vd) return 11;
    if (e === Kd) return 14;
  }
  return 2;
}
function Rr(e, t) {
  var n = e.alternate;
  return n === null ? (n = fn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Rl(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") Rf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Co:
      return qr(n.children, o, i, t);
    case Hd:
      s = 8, o |= 8;
      break;
    case Cc:
      return e = fn(12, n, t, o | 2), e.elementType = Cc, e.lanes = i, e;
    case bc:
      return e = fn(13, n, t, o), e.elementType = bc, e.lanes = i, e;
    case kc:
      return e = fn(19, n, t, o), e.elementType = kc, e.lanes = i, e;
    case Bg:
      return Ma(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Fg:
          s = 10;
          break e;
        case Dg:
          s = 9;
          break e;
        case Vd:
          s = 11;
          break e;
        case Kd:
          s = 14;
          break e;
        case mr:
          s = 16, r = null;
          break e;
      }
      throw Error(U(130, e == null ? e : typeof e, ""));
  }
  return t = fn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function qr(e, t, n, r) {
  return e = fn(7, e, r, t), e.lanes = n, e;
}
function Ma(e, t, n, r) {
  return e = fn(22, e, r, t), e.elementType = Bg, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function nc(e, t, n) {
  return e = fn(6, e, null, t), e.lanes = n, e;
}
function rc(e, t, n) {
  return t = fn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function sw(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zu(0), this.expirationTimes = zu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Pf(e, t, n, r, o, i, s, l, a) {
  return e = new sw(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = fn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, df(i), e;
}
function lw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: wo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ov(e) {
  if (!e) return Mr;
  e = e._reactInternals;
  e: {
    if (ao(e) !== e || e.tag !== 1) throw Error(U(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Dt(t.type)) {
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
    if (Dt(n)) return Oy(e, n, t);
  }
  return t;
}
function Av(e, t, n, r, o, i, s, l, a) {
  return e = Pf(n, r, !0, e, o, i, s, l, a), e.context = Ov(null), n = e.current, r = Ot(), o = Tr(n), i = er(r, o), i.callback = t ?? null, kr(n, i, o), e.current.lanes = o, bs(e, o, r), Bt(e, r), e;
}
function $a(e, t, n, r) {
  var o = t.current, i = Ot(), s = Tr(o);
  return n = Ov(n), t.context === null ? t.context = n : t.pendingContext = n, t = er(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = kr(o, t, s), e !== null && (Pn(e, o, s, i), wl(e, o, s)), s;
}
function oa(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Am(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function If(e, t) {
  Am(e, t), (e = e.alternate) && Am(e, t);
}
function aw() {
  return null;
}
var Nv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Mf(e) {
  this._internalRoot = e;
}
Oa.prototype.render = Mf.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(U(409));
  $a(e, t, null, null);
};
Oa.prototype.unmount = Mf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ro(function() {
      $a(null, e, null, null);
    }), t[rr] = null;
  }
};
function Oa(e) {
  this._internalRoot = e;
}
Oa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = dy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gr.length && t !== 0 && t < gr[n].priority; n++) ;
    gr.splice(n, 0, e), n === 0 && py(e);
  }
};
function $f(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Aa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Nm() {
}
function uw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = oa(s);
        i.call(u);
      };
    }
    var s = Av(t, r, e, 0, null, !1, !1, "", Nm);
    return e._reactRootContainer = s, e[rr] = s.current, ns(e.nodeType === 8 ? e.parentNode : e), ro(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = oa(a);
      l.call(u);
    };
  }
  var a = Pf(e, 0, !1, null, null, !1, !1, "", Nm);
  return e._reactRootContainer = a, e[rr] = a.current, ns(e.nodeType === 8 ? e.parentNode : e), ro(function() {
    $a(t, a, n, r);
  }), a;
}
function Na(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = oa(s);
        l.call(a);
      };
    }
    $a(t, s, e, o);
  } else s = uw(n, t, e, o, r);
  return oa(s);
}
uy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ii(t.pendingLanes);
        n !== 0 && (Qd(t, n | 1), Bt(t, nt()), !(ke & 6) && (Xo = nt() + 500, Lr()));
      }
      break;
    case 13:
      ro(function() {
        var r = or(e, 1);
        if (r !== null) {
          var o = Ot();
          Pn(r, e, 1, o);
        }
      }), If(e, 1);
  }
};
Xd = function(e) {
  if (e.tag === 13) {
    var t = or(e, 134217728);
    if (t !== null) {
      var n = Ot();
      Pn(t, e, 134217728, n);
    }
    If(e, 134217728);
  }
};
cy = function(e) {
  if (e.tag === 13) {
    var t = Tr(e), n = or(e, t);
    if (n !== null) {
      var r = Ot();
      Pn(n, e, t, r);
    }
    If(e, t);
  }
};
dy = function() {
  return $e;
};
fy = function(e, t) {
  var n = $e;
  try {
    return $e = e, t();
  } finally {
    $e = n;
  }
};
Nc = function(e, t, n) {
  switch (t) {
    case "input":
      if (Rc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ka(r);
            if (!o) throw Error(U(90));
            Ug(r), Rc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Vg(e, n);
      break;
    case "select":
      t = n.value, t != null && No(e, !!n.multiple, t, !1);
  }
};
Zg = kf;
Jg = ro;
var cw = { usingClientEntryPoint: !1, Events: [Es, To, ka, Xg, qg, kf] }, vi = { findFiberByHostInstance: Kr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, dw = { bundleType: vi.bundleType, version: vi.version, rendererPackageName: vi.rendererPackageName, rendererConfig: vi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: cr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ny(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: vi.findFiberByHostInstance || aw, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!nl.isDisabled && nl.supportsFiber) try {
    Sa = nl.inject(dw), _n = nl;
  } catch {
  }
}
tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cw;
tn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$f(t)) throw Error(U(200));
  return lw(e, t, null, n);
};
tn.createRoot = function(e, t) {
  if (!$f(e)) throw Error(U(299));
  var n = !1, r = "", o = Nv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Pf(e, 1, !1, null, null, n, !1, r, o), e[rr] = t.current, ns(e.nodeType === 8 ? e.parentNode : e), new Mf(t);
};
tn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(U(188)) : (e = Object.keys(e).join(","), Error(U(268, e)));
  return e = ny(t), e = e === null ? null : e.stateNode, e;
};
tn.flushSync = function(e) {
  return ro(e);
};
tn.hydrate = function(e, t, n) {
  if (!Aa(t)) throw Error(U(200));
  return Na(null, e, t, !0, n);
};
tn.hydrateRoot = function(e, t, n) {
  if (!$f(e)) throw Error(U(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Nv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Av(t, null, e, 1, n ?? null, o, !1, i, s), e[rr] = t.current, ns(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Oa(t);
};
tn.render = function(e, t, n) {
  if (!Aa(t)) throw Error(U(200));
  return Na(null, e, t, !1, n);
};
tn.unmountComponentAtNode = function(e) {
  if (!Aa(e)) throw Error(U(40));
  return e._reactRootContainer ? (ro(function() {
    Na(null, null, e, !1, function() {
      e._reactRootContainer = null, e[rr] = null;
    });
  }), !0) : !1;
};
tn.unstable_batchedUpdates = kf;
tn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Aa(n)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return Na(e, t, n, !1, r);
};
tn.version = "18.3.1-next-f1338f8080-20240426";
function Lv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv);
    } catch (e) {
      console.error(e);
    }
}
Lv(), Lg.exports = tn;
var jv = Lg.exports, zv, Lm = jv;
zv = Lm.createRoot, Lm.hydrateRoot;
const ds = {
  black: "#000",
  white: "#fff"
}, go = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, yo = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, vo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, xo = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, So = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, xi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, fw = {
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
function sr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const Dn = "$$material";
function pd() {
  return pd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pd.apply(null, arguments);
}
function pw(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function mw(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var hw = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(mw(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = pw(o);
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
}(), Et = "-ms-", ia = "-moz-", Ee = "-webkit-", _v = "comm", Of = "rule", Af = "decl", gw = "@import", Fv = "@keyframes", yw = "@layer", vw = Math.abs, La = String.fromCharCode, xw = Object.assign;
function Sw(e, t) {
  return xt(e, 0) ^ 45 ? (((t << 2 ^ xt(e, 0)) << 2 ^ xt(e, 1)) << 2 ^ xt(e, 2)) << 2 ^ xt(e, 3) : 0;
}
function Dv(e) {
  return e.trim();
}
function ww(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Te(e, t, n) {
  return e.replace(t, n);
}
function md(e, t) {
  return e.indexOf(t);
}
function xt(e, t) {
  return e.charCodeAt(t) | 0;
}
function fs(e, t, n) {
  return e.slice(t, n);
}
function Nn(e) {
  return e.length;
}
function Nf(e) {
  return e.length;
}
function rl(e, t) {
  return t.push(e), e;
}
function Cw(e, t) {
  return e.map(t).join("");
}
var ja = 1, qo = 1, Bv = 0, Ht = 0, at = 0, si = "";
function za(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ja, column: qo, length: s, return: "" };
}
function Si(e, t) {
  return xw(za("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function bw() {
  return at;
}
function kw() {
  return at = Ht > 0 ? xt(si, --Ht) : 0, qo--, at === 10 && (qo = 1, ja--), at;
}
function Zt() {
  return at = Ht < Bv ? xt(si, Ht++) : 0, qo++, at === 10 && (qo = 1, ja++), at;
}
function Bn() {
  return xt(si, Ht);
}
function Pl() {
  return Ht;
}
function Rs(e, t) {
  return fs(si, e, t);
}
function ps(e) {
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
function Wv(e) {
  return ja = qo = 1, Bv = Nn(si = e), Ht = 0, [];
}
function Uv(e) {
  return si = "", e;
}
function Il(e) {
  return Dv(Rs(Ht - 1, hd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ew(e) {
  for (; (at = Bn()) && at < 33; )
    Zt();
  return ps(e) > 2 || ps(at) > 3 ? "" : " ";
}
function Tw(e, t) {
  for (; --t && Zt() && !(at < 48 || at > 102 || at > 57 && at < 65 || at > 70 && at < 97); )
    ;
  return Rs(e, Pl() + (t < 6 && Bn() == 32 && Zt() == 32));
}
function hd(e) {
  for (; Zt(); )
    switch (at) {
      case e:
        return Ht;
      case 34:
      case 39:
        e !== 34 && e !== 39 && hd(at);
        break;
      case 40:
        e === 41 && hd(e);
        break;
      case 92:
        Zt();
        break;
    }
  return Ht;
}
function Rw(e, t) {
  for (; Zt() && e + at !== 57; )
    if (e + at === 84 && Bn() === 47)
      break;
  return "/*" + Rs(t, Ht - 1) + "*" + La(e === 47 ? e : Zt());
}
function Pw(e) {
  for (; !ps(Bn()); )
    Zt();
  return Rs(e, Ht);
}
function Iw(e) {
  return Uv(Ml("", null, null, null, [""], e = Wv(e), 0, [0], e));
}
function Ml(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, c = 0, f = s, y = 0, d = 0, x = 0, w = 1, b = 1, m = 1, p = 0, v = "", C = o, E = i, k = r, T = v; b; )
    switch (x = p, p = Zt()) {
      case 40:
        if (x != 108 && xt(T, f - 1) == 58) {
          md(T += Te(Il(p), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Il(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Ew(x);
        break;
      case 92:
        T += Tw(Pl() - 1, 7);
        continue;
      case 47:
        switch (Bn()) {
          case 42:
          case 47:
            rl(Mw(Rw(Zt(), Pl()), t, n), a);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * w:
        l[u++] = Nn(T) * m;
      case 125 * w:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            m == -1 && (T = Te(T, /\f/g, "")), d > 0 && Nn(T) - f && rl(d > 32 ? zm(T + ";", r, n, f - 1) : zm(Te(T, " ", "") + ";", r, n, f - 2), a);
            break;
          case 59:
            T += ";";
          default:
            if (rl(k = jm(T, t, n, u, c, o, l, v, C = [], E = [], f), i), p === 123)
              if (c === 0)
                Ml(T, t, k, k, C, i, f, l, E);
              else
                switch (y === 99 && xt(T, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ml(e, k, k, r && rl(jm(e, k, k, 0, 0, o, l, v, o, C = [], f), E), o, E, f, l, r ? C : E);
                    break;
                  default:
                    Ml(T, k, k, k, [""], E, 0, l, E);
                }
        }
        u = c = d = 0, w = m = 1, v = T = "", f = s;
        break;
      case 58:
        f = 1 + Nn(T), d = x;
      default:
        if (w < 1) {
          if (p == 123)
            --w;
          else if (p == 125 && w++ == 0 && kw() == 125)
            continue;
        }
        switch (T += La(p), p * w) {
          case 38:
            m = c > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[u++] = (Nn(T) - 1) * m, m = 1;
            break;
          case 64:
            Bn() === 45 && (T += Il(Zt())), y = Bn(), c = f = Nn(v = T += Pw(Pl())), p++;
            break;
          case 45:
            x === 45 && Nn(T) == 2 && (w = 0);
        }
    }
  return i;
}
function jm(e, t, n, r, o, i, s, l, a, u, c) {
  for (var f = o - 1, y = o === 0 ? i : [""], d = Nf(y), x = 0, w = 0, b = 0; x < r; ++x)
    for (var m = 0, p = fs(e, f + 1, f = vw(w = s[x])), v = e; m < d; ++m)
      (v = Dv(w > 0 ? y[m] + " " + p : Te(p, /&\f/g, y[m]))) && (a[b++] = v);
  return za(e, t, n, o === 0 ? Of : l, a, u, c);
}
function Mw(e, t, n) {
  return za(e, t, n, _v, La(bw()), fs(e, 2, -2), 0);
}
function zm(e, t, n, r) {
  return za(e, t, n, Af, fs(e, 0, r), fs(e, r + 1, -1), r);
}
function Do(e, t) {
  for (var n = "", r = Nf(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function $w(e, t, n, r) {
  switch (e.type) {
    case yw:
      if (e.children.length) break;
    case gw:
    case Af:
      return e.return = e.return || e.value;
    case _v:
      return "";
    case Fv:
      return e.return = e.value + "{" + Do(e.children, r) + "}";
    case Of:
      e.value = e.props.join(",");
  }
  return Nn(n = Do(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ow(e) {
  var t = Nf(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function Aw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Hv(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Nw = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Bn(), o === 38 && i === 12 && (n[r] = 1), !ps(i); )
    Zt();
  return Rs(t, Ht);
}, Lw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (ps(o)) {
      case 0:
        o === 38 && Bn() === 12 && (n[r] = 1), t[r] += Nw(Ht - 1, n, r);
        break;
      case 2:
        t[r] += Il(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Bn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += La(o);
    }
  while (o = Zt());
  return t;
}, jw = function(t, n) {
  return Uv(Lw(Wv(t), n));
}, _m = /* @__PURE__ */ new WeakMap(), zw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !_m.get(r)) && !o) {
      _m.set(t, !0);
      for (var i = [], s = jw(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var c = 0; c < l.length; c++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[c]) : l[c] + " " + s[a];
    }
  }
}, _w = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Vv(e, t) {
  switch (Sw(e, t)) {
    case 5103:
      return Ee + "print-" + e + e;
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
      return Ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + e + ia + e + Et + e + e;
    case 6828:
    case 4268:
      return Ee + e + Et + e + e;
    case 6165:
      return Ee + e + Et + "flex-" + e + e;
    case 5187:
      return Ee + e + Te(e, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + Et + "flex-$1$2") + e;
    case 5443:
      return Ee + e + Et + "flex-item-" + Te(e, /flex-|-self/, "") + e;
    case 4675:
      return Ee + e + Et + "flex-line-pack" + Te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ee + e + Et + Te(e, "shrink", "negative") + e;
    case 5292:
      return Ee + e + Et + Te(e, "basis", "preferred-size") + e;
    case 6060:
      return Ee + "box-" + Te(e, "-grow", "") + Ee + e + Et + Te(e, "grow", "positive") + e;
    case 4554:
      return Ee + Te(e, /([^-])(transform)/g, "$1" + Ee + "$2") + e;
    case 6187:
      return Te(Te(Te(e, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Te(e, /(image-set\([^]*)/, Ee + "$1$`$1");
    case 4968:
      return Te(Te(e, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + Et + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Te(e, /(.+)-inline(.+)/, Ee + "$1$2") + e;
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
      if (Nn(e) - 1 - t > 6) switch (xt(e, t + 1)) {
        case 109:
          if (xt(e, t + 4) !== 45) break;
        case 102:
          return Te(e, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + ia + (xt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~md(e, "stretch") ? Vv(Te(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (xt(e, t + 1) !== 115) break;
    case 6444:
      switch (xt(e, Nn(e) - 3 - (~md(e, "!important") && 10))) {
        case 107:
          return Te(e, ":", ":" + Ee) + e;
        case 101:
          return Te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ee + (xt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + Et + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (xt(e, t + 11)) {
        case 114:
          return Ee + e + Et + Te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ee + e + Et + Te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ee + e + Et + Te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ee + e + Et + e + e;
  }
  return e;
}
var Fw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Af:
      t.return = Vv(t.value, t.length);
      break;
    case Fv:
      return Do([Si(t, {
        value: Te(t.value, "@", "@" + Ee)
      })], o);
    case Of:
      if (t.length) return Cw(t.props, function(i) {
        switch (ww(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Do([Si(t, {
              props: [Te(i, /:(read-\w+)/, ":" + ia + "$1")]
            })], o);
          case "::placeholder":
            return Do([Si(t, {
              props: [Te(i, /:(plac\w+)/, ":" + Ee + "input-$1")]
            }), Si(t, {
              props: [Te(i, /:(plac\w+)/, ":" + ia + "$1")]
            }), Si(t, {
              props: [Te(i, /:(plac\w+)/, Et + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Dw = [Fw], Bw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(w) {
      var b = w.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Dw, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(w) {
      for (var b = w.getAttribute("data-emotion").split(" "), m = 1; m < b.length; m++)
        i[b[m]] = !0;
      l.push(w);
    }
  );
  var a, u = [zw, _w];
  {
    var c, f = [$w, Aw(function(w) {
      c.insert(w);
    })], y = Ow(u.concat(o, f)), d = function(b) {
      return Do(Iw(b), y);
    };
    a = function(b, m, p, v) {
      c = p, d(b ? b + "{" + m.styles + "}" : m.styles), v && (x.inserted[m.name] = !0);
    };
  }
  var x = {
    key: n,
    sheet: new hw({
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
}, Kv = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt = typeof Symbol == "function" && Symbol.for, Lf = yt ? Symbol.for("react.element") : 60103, jf = yt ? Symbol.for("react.portal") : 60106, _a = yt ? Symbol.for("react.fragment") : 60107, Fa = yt ? Symbol.for("react.strict_mode") : 60108, Da = yt ? Symbol.for("react.profiler") : 60114, Ba = yt ? Symbol.for("react.provider") : 60109, Wa = yt ? Symbol.for("react.context") : 60110, zf = yt ? Symbol.for("react.async_mode") : 60111, Ua = yt ? Symbol.for("react.concurrent_mode") : 60111, Ha = yt ? Symbol.for("react.forward_ref") : 60112, Va = yt ? Symbol.for("react.suspense") : 60113, Ww = yt ? Symbol.for("react.suspense_list") : 60120, Ka = yt ? Symbol.for("react.memo") : 60115, Ya = yt ? Symbol.for("react.lazy") : 60116, Uw = yt ? Symbol.for("react.block") : 60121, Hw = yt ? Symbol.for("react.fundamental") : 60117, Vw = yt ? Symbol.for("react.responder") : 60118, Kw = yt ? Symbol.for("react.scope") : 60119;
function rn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Lf:
        switch (e = e.type, e) {
          case zf:
          case Ua:
          case _a:
          case Da:
          case Fa:
          case Va:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Wa:
              case Ha:
              case Ya:
              case Ka:
              case Ba:
                return e;
              default:
                return t;
            }
        }
      case jf:
        return t;
    }
  }
}
function Yv(e) {
  return rn(e) === Ua;
}
Oe.AsyncMode = zf;
Oe.ConcurrentMode = Ua;
Oe.ContextConsumer = Wa;
Oe.ContextProvider = Ba;
Oe.Element = Lf;
Oe.ForwardRef = Ha;
Oe.Fragment = _a;
Oe.Lazy = Ya;
Oe.Memo = Ka;
Oe.Portal = jf;
Oe.Profiler = Da;
Oe.StrictMode = Fa;
Oe.Suspense = Va;
Oe.isAsyncMode = function(e) {
  return Yv(e) || rn(e) === zf;
};
Oe.isConcurrentMode = Yv;
Oe.isContextConsumer = function(e) {
  return rn(e) === Wa;
};
Oe.isContextProvider = function(e) {
  return rn(e) === Ba;
};
Oe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lf;
};
Oe.isForwardRef = function(e) {
  return rn(e) === Ha;
};
Oe.isFragment = function(e) {
  return rn(e) === _a;
};
Oe.isLazy = function(e) {
  return rn(e) === Ya;
};
Oe.isMemo = function(e) {
  return rn(e) === Ka;
};
Oe.isPortal = function(e) {
  return rn(e) === jf;
};
Oe.isProfiler = function(e) {
  return rn(e) === Da;
};
Oe.isStrictMode = function(e) {
  return rn(e) === Fa;
};
Oe.isSuspense = function(e) {
  return rn(e) === Va;
};
Oe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === _a || e === Ua || e === Da || e === Fa || e === Va || e === Ww || typeof e == "object" && e !== null && (e.$$typeof === Ya || e.$$typeof === Ka || e.$$typeof === Ba || e.$$typeof === Wa || e.$$typeof === Ha || e.$$typeof === Hw || e.$$typeof === Vw || e.$$typeof === Kw || e.$$typeof === Uw);
};
Oe.typeOf = rn;
Kv.exports = Oe;
var Yw = Kv.exports, Gv = Yw, Gw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Qw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Qv = {};
Qv[Gv.ForwardRef] = Gw;
Qv[Gv.Memo] = Qw;
var Xw = !0;
function Xv(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var _f = function(t, n, r) {
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
  Xw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Ff = function(t, n, r) {
  _f(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function qw(e) {
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
var Zw = {
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
}, Jw = /[A-Z]|^ms/g, eC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, qv = function(t) {
  return t.charCodeAt(1) === 45;
}, Fm = function(t) {
  return t != null && typeof t != "boolean";
}, oc = /* @__PURE__ */ Hv(function(e) {
  return qv(e) ? e : e.replace(Jw, "-$&").toLowerCase();
}), Dm = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(eC, function(r, o, i) {
          return Ln = {
            name: o,
            styles: i,
            next: Ln
          }, o;
        });
  }
  return Zw[t] !== 1 && !qv(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function ms(e, t, n) {
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
        return Ln = {
          name: o.name,
          styles: o.styles,
          next: Ln
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Ln = {
              name: s.name,
              styles: s.styles,
              next: Ln
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return tC(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = Ln, u = n(e);
        return Ln = a, ms(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null)
    return c;
  var f = t[c];
  return f !== void 0 ? f : c;
}
function tC(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += ms(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : Fm(l) && (r += oc(i) + ":" + Dm(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          Fm(s[a]) && (r += oc(i) + ":" + Dm(i, s[a]) + ";");
      else {
        var u = ms(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += oc(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var Bm = /label:\s*([^\s;{]+)\s*(;|$)/g, Ln;
function Ps(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Ln = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += ms(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += ms(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  Bm.lastIndex = 0;
  for (var u = "", c; (c = Bm.exec(o)) !== null; )
    u += "-" + c[1];
  var f = qw(o) + u;
  return {
    name: f,
    styles: o,
    next: Ln
  };
}
var nC = function(t) {
  return t();
}, Zv = Nl.useInsertionEffect ? Nl.useInsertionEffect : !1, Jv = Zv || nC, Wm = Zv || h.useLayoutEffect, e0 = /* @__PURE__ */ h.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Bw({
    key: "css"
  }) : null
);
e0.Provider;
var Df = function(t) {
  return /* @__PURE__ */ h.forwardRef(function(n, r) {
    var o = h.useContext(e0);
    return t(n, o, r);
  });
}, Is = /* @__PURE__ */ h.createContext({}), Bf = {}.hasOwnProperty, gd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", rC = function(t, n) {
  var r = {};
  for (var o in n)
    Bf.call(n, o) && (r[o] = n[o]);
  return r[gd] = t, r;
}, oC = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return _f(n, r, o), Jv(function() {
    return Ff(n, r, o);
  }), null;
}, iC = /* @__PURE__ */ Df(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[gd], i = [r], s = "";
  typeof e.className == "string" ? s = Xv(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = Ps(i, void 0, h.useContext(Is));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e)
    Bf.call(e, u) && u !== "css" && u !== gd && (a[u] = e[u]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(oC, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ h.createElement(o, a));
}), sC = iC, Um = function(t, n) {
  var r = arguments;
  if (n == null || !Bf.call(n, "css"))
    return h.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = sC, i[1] = rC(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return h.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Um || (Um = {}));
var lC = /* @__PURE__ */ Df(function(e, t) {
  var n = e.styles, r = Ps([n], void 0, h.useContext(Is)), o = h.useRef();
  return Wm(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), Wm(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Ff(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function hs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ps(t);
}
function Ms() {
  var e = hs.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var aC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, uC = /* @__PURE__ */ Hv(
  function(e) {
    return aC.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), cC = uC, dC = function(t) {
  return t !== "theme";
}, Hm = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? cC : dC;
}, Vm = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, fC = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return _f(n, r, o), Jv(function() {
    return Ff(n, r, o);
  }), null;
}, pC = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = Vm(t, n, r), a = l || Hm(o), u = !a("as");
  return function() {
    var c = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      f.push.apply(f, c);
    else {
      var y = c[0];
      f.push(y[0]);
      for (var d = c.length, x = 1; x < d; x++)
        f.push(c[x], y[x]);
    }
    var w = Df(function(b, m, p) {
      var v = u && b.as || o, C = "", E = [], k = b;
      if (b.theme == null) {
        k = {};
        for (var T in b)
          k[T] = b[T];
        k.theme = h.useContext(Is);
      }
      typeof b.className == "string" ? C = Xv(m.registered, E, b.className) : b.className != null && (C = b.className + " ");
      var R = Ps(f.concat(E), m.registered, k);
      C += m.key + "-" + R.name, s !== void 0 && (C += " " + s);
      var I = u && l === void 0 ? Hm(v) : a, L = {};
      for (var M in b)
        u && M === "as" || I(M) && (L[M] = b[M]);
      return L.className = C, p && (L.ref = p), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(fC, {
        cache: m,
        serialized: R,
        isStringTag: typeof v == "string"
      }), /* @__PURE__ */ h.createElement(v, L));
    });
    return w.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = o, w.__emotion_styles = f, w.__emotion_forwardProp = l, Object.defineProperty(w, "toString", {
      value: function() {
        return "." + s;
      }
    }), w.withComponent = function(b, m) {
      var p = e(b, pd({}, n, m, {
        shouldForwardProp: Vm(w, m, !0)
      }));
      return p.apply(void 0, f);
    }, w;
  };
}, mC = [
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
], yd = pC.bind(null);
mC.forEach(function(e) {
  yd[e] = yd(e);
});
function hC(e) {
  return e == null || Object.keys(e).length === 0;
}
function t0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(hC(o) ? n : o) : t;
  return /* @__PURE__ */ S.jsx(lC, {
    styles: r
  });
}
function n0(e, t) {
  return yd(e, t);
}
function gC(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Km = [];
function Pr(e) {
  return Km[0] = e, Ps(Km);
}
var r0 = { exports: {} }, je = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wf = Symbol.for("react.transitional.element"), Uf = Symbol.for("react.portal"), Ga = Symbol.for("react.fragment"), Qa = Symbol.for("react.strict_mode"), Xa = Symbol.for("react.profiler"), qa = Symbol.for("react.consumer"), Za = Symbol.for("react.context"), Ja = Symbol.for("react.forward_ref"), eu = Symbol.for("react.suspense"), tu = Symbol.for("react.suspense_list"), nu = Symbol.for("react.memo"), ru = Symbol.for("react.lazy"), yC = Symbol.for("react.view_transition"), vC = Symbol.for("react.client.reference");
function xn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Wf:
        switch (e = e.type, e) {
          case Ga:
          case Xa:
          case Qa:
          case eu:
          case tu:
          case yC:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Za:
              case Ja:
              case ru:
              case nu:
                return e;
              case qa:
                return e;
              default:
                return t;
            }
        }
      case Uf:
        return t;
    }
  }
}
je.ContextConsumer = qa;
je.ContextProvider = Za;
je.Element = Wf;
je.ForwardRef = Ja;
je.Fragment = Ga;
je.Lazy = ru;
je.Memo = nu;
je.Portal = Uf;
je.Profiler = Xa;
je.StrictMode = Qa;
je.Suspense = eu;
je.SuspenseList = tu;
je.isContextConsumer = function(e) {
  return xn(e) === qa;
};
je.isContextProvider = function(e) {
  return xn(e) === Za;
};
je.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wf;
};
je.isForwardRef = function(e) {
  return xn(e) === Ja;
};
je.isFragment = function(e) {
  return xn(e) === Ga;
};
je.isLazy = function(e) {
  return xn(e) === ru;
};
je.isMemo = function(e) {
  return xn(e) === nu;
};
je.isPortal = function(e) {
  return xn(e) === Uf;
};
je.isProfiler = function(e) {
  return xn(e) === Xa;
};
je.isStrictMode = function(e) {
  return xn(e) === Qa;
};
je.isSuspense = function(e) {
  return xn(e) === eu;
};
je.isSuspenseList = function(e) {
  return xn(e) === tu;
};
je.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ga || e === Xa || e === Qa || e === eu || e === tu || typeof e == "object" && e !== null && (e.$$typeof === ru || e.$$typeof === nu || e.$$typeof === Za || e.$$typeof === qa || e.$$typeof === Ja || e.$$typeof === vC || e.getModuleId !== void 0);
};
je.typeOf = xn;
r0.exports = je;
var o0 = r0.exports;
function Xn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function i0(e) {
  if (/* @__PURE__ */ h.isValidElement(e) || o0.isValidElementType(e) || !Xn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = i0(e[n]);
  }), t;
}
function wt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Xn(e) && Xn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ h.isValidElement(t[o]) || o0.isValidElementType(t[o]) ? r[o] = t[o] : Xn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Xn(e[o]) ? r[o] = wt(e[o], t[o], n) : n.clone ? r[o] = Xn(t[o]) ? i0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const xC = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function s0(e) {
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
  } = e, i = xC(t), s = Object.keys(i);
  function l(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function a(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function u(d, x) {
    const w = s.indexOf(x);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(w !== -1 && typeof t[s[w]] == "number" ? t[s[w]] : x) - r / 100}${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : l(d);
  }
  function f(d) {
    const x = s.indexOf(d);
    return x === 0 ? l(s[1]) : x === s.length - 1 ? a(s[x]) : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  const y = [];
  for (let d = 0; d < s.length; d += 1)
    y.push(l(s[d]));
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: u,
    only: c,
    not: f,
    unit: n,
    internal_mediaKeys: y,
    ...o
  };
}
const Ym = /min-width:\s*([0-9.]+)/;
function Gm(e, t) {
  if (!e.containerQueries || !SC(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(Ym)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(Ym)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function SC(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function l0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function wC(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function CC(e) {
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
const bC = {
  borderRadius: 4
};
function a0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function Bo(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return PC(t) ? t : IC(e) ? Zo(t) : n && r ? TC(e, t) : n !== r ? Zo(t) : MC(e, t);
}
function kC(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Zo(e[t]);
  return r;
}
function EC(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Zo(e[n]));
  return t;
}
function TC(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Zo(t[r]);
  return e;
}
function RC(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function PC(e) {
  return typeof e != "object" || e === null;
}
function IC(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Zo(e) {
  return RC(e) ? Array.isArray(e) ? kC(e) : EC(e) : e;
}
function MC(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = Bo(e[n], t[n]) : e[n] = Zo(t[n]));
  return e;
}
const $C = {}, ou = {
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
}, sa = s0({
  values: ou
}), OC = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : ou[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function $r(e, t, n) {
  const r = {};
  return iu(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : Bo(r, l);
  });
}
function iu(e, t, n, r) {
  if (t ?? (t = $C), Array.isArray(n)) {
    const o = t.breakpoints ?? sa;
    for (let i = 0; i < n.length; i += 1)
      ic(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? sa, i = o.values ?? ou;
    for (const s in n)
      if (l0(o.keys, s)) {
        const l = wC(t.containerQueries ? t : OC, s);
        l && ic(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        ic(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function ic(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function u0(e = sa) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function vd(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    a0(t[o]) && delete t[o];
  }
  return t;
}
function AC(e, ...t) {
  const r = [u0(e), ...t].reduce((o, i) => wt(o, i), {});
  return vd(e, r);
}
function NC(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function sc(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || NC(t, n), i = Object.keys(o);
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
function LC(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (l0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function ie(e) {
  if (typeof e != "string")
    throw new Error(sr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function c0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = su(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function su(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = Qm(e.vars, o, r);
    if (i != null)
      return i;
  }
  return Qm(e, o, r);
}
function Qm(e, t, n = void 0) {
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
function ot(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, u = su(a, r) || {};
    return $r(s, l, (f) => {
      const y = c0(u, o, f, t);
      return n === !1 ? y : {
        [n]: y
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const jC = {
  internal_cache: {}
}, la = {
  m: "margin",
  p: "padding"
}, Xm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, qm = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, gs = {};
for (const e in la)
  gs[e] = [la[e]];
for (const e in la)
  for (const t in Xm) {
    const n = la[e], r = Xm[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    gs[e + t] = o;
  }
for (const e in qm)
  gs[e] = gs[qm[e]];
const Hf = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Vf = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...Hf, ...Vf];
function $s(e, t, n, r) {
  const o = su(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function lu(e) {
  return $s(e, "spacing", 8);
}
function oo(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Zm = [""];
function d0(e, t) {
  var i;
  const n = e.theme ?? jC, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? lu(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = gs[s] ?? (Zm[0] = s, Zm), a = e[s];
    iu(o, e.theme, a, (u, c) => {
      const f = u ? o[u] : o;
      for (let y = 0; y < l.length; y += 1)
        f[l[y]] = oo(r, c);
    });
  }
  return o;
}
function Kf(e) {
  return d0(e, Hf);
}
Kf.propTypes = {};
Kf.filterProps = Hf;
const st = Kf;
function Yf(e) {
  return d0(e, Vf);
}
Yf.propTypes = {};
Yf.filterProps = Vf;
const lt = Yf;
function f0(e = 8, t = lu({
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
function au(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && Bo(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function cn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Sn(e, t) {
  return ot({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const zC = Sn("border", cn), _C = Sn("borderTop", cn), FC = Sn("borderRight", cn), DC = Sn("borderBottom", cn), BC = Sn("borderLeft", cn), WC = Sn("borderColor"), UC = Sn("borderTopColor"), HC = Sn("borderRightColor"), VC = Sn("borderBottomColor"), KC = Sn("borderLeftColor"), YC = Sn("outline", cn), GC = Sn("outlineColor"), uu = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = $s(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: oo(t, r)
    });
    return $r(e, e.borderRadius, n);
  }
  return null;
};
uu.propTypes = {};
uu.filterProps = ["borderRadius"];
au(zC, _C, FC, DC, BC, WC, UC, HC, VC, KC, uu, YC, GC);
const cu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = $s(e.theme, "spacing", 8), n = (r) => ({
      gap: oo(t, r)
    });
    return $r(e, e.gap, n);
  }
  return null;
};
cu.propTypes = {};
cu.filterProps = ["gap"];
const du = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = $s(e.theme, "spacing", 8), n = (r) => ({
      columnGap: oo(t, r)
    });
    return $r(e, e.columnGap, n);
  }
  return null;
};
du.propTypes = {};
du.filterProps = ["columnGap"];
const fu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = $s(e.theme, "spacing", 8), n = (r) => ({
      rowGap: oo(t, r)
    });
    return $r(e, e.rowGap, n);
  }
  return null;
};
fu.propTypes = {};
fu.filterProps = ["rowGap"];
const QC = ot({
  prop: "gridColumn"
}), XC = ot({
  prop: "gridRow"
}), qC = ot({
  prop: "gridAutoFlow"
}), ZC = ot({
  prop: "gridAutoColumns"
}), JC = ot({
  prop: "gridAutoRows"
}), eb = ot({
  prop: "gridTemplateColumns"
}), tb = ot({
  prop: "gridTemplateRows"
}), nb = ot({
  prop: "gridTemplateAreas"
}), rb = ot({
  prop: "gridArea"
});
au(cu, du, fu, QC, XC, qC, ZC, JC, eb, tb, nb, rb);
function Wo(e, t) {
  return t === "grey" ? t : e;
}
const ob = ot({
  prop: "color",
  themeKey: "palette",
  transform: Wo
}), ib = ot({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Wo
}), sb = ot({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Wo
});
au(ob, ib, sb);
const lb = ou;
function Qt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ab = ot({
  prop: "width",
  transform: Qt
}), Gf = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || lb[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Qt(n)
      };
    };
    return $r(e, e.maxWidth, t);
  }
  return null;
};
Gf.filterProps = ["maxWidth"];
const ub = ot({
  prop: "minWidth",
  transform: Qt
}), cb = ot({
  prop: "height",
  transform: Qt
}), db = ot({
  prop: "maxHeight",
  transform: Qt
}), fb = ot({
  prop: "minHeight",
  transform: Qt
});
ot({
  prop: "size",
  cssProperty: "width",
  transform: Qt
});
ot({
  prop: "size",
  cssProperty: "height",
  transform: Qt
});
const pb = ot({
  prop: "boxSizing"
});
au(ab, Gf, ub, cb, db, fb, pb);
const pu = {
  // borders
  border: {
    themeKey: "borders",
    transform: cn
  },
  borderTop: {
    themeKey: "borders",
    transform: cn
  },
  borderRight: {
    themeKey: "borders",
    transform: cn
  },
  borderBottom: {
    themeKey: "borders",
    transform: cn
  },
  borderLeft: {
    themeKey: "borders",
    transform: cn
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
    transform: cn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: uu
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Wo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Wo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Wo
  },
  // spacing
  p: {
    style: lt
  },
  pt: {
    style: lt
  },
  pr: {
    style: lt
  },
  pb: {
    style: lt
  },
  pl: {
    style: lt
  },
  px: {
    style: lt
  },
  py: {
    style: lt
  },
  padding: {
    style: lt
  },
  paddingTop: {
    style: lt
  },
  paddingRight: {
    style: lt
  },
  paddingBottom: {
    style: lt
  },
  paddingLeft: {
    style: lt
  },
  paddingX: {
    style: lt
  },
  paddingY: {
    style: lt
  },
  paddingInline: {
    style: lt
  },
  paddingInlineStart: {
    style: lt
  },
  paddingInlineEnd: {
    style: lt
  },
  paddingBlock: {
    style: lt
  },
  paddingBlockStart: {
    style: lt
  },
  paddingBlockEnd: {
    style: lt
  },
  m: {
    style: st
  },
  mt: {
    style: st
  },
  mr: {
    style: st
  },
  mb: {
    style: st
  },
  ml: {
    style: st
  },
  mx: {
    style: st
  },
  my: {
    style: st
  },
  margin: {
    style: st
  },
  marginTop: {
    style: st
  },
  marginRight: {
    style: st
  },
  marginBottom: {
    style: st
  },
  marginLeft: {
    style: st
  },
  marginX: {
    style: st
  },
  marginY: {
    style: st
  },
  marginInline: {
    style: st
  },
  marginInlineStart: {
    style: st
  },
  marginInlineEnd: {
    style: st
  },
  marginBlock: {
    style: st
  },
  marginBlockStart: {
    style: st
  },
  marginBlockEnd: {
    style: st
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
    style: cu
  },
  rowGap: {
    style: fu
  },
  columnGap: {
    style: du
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
    style: Gf
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
}, mb = {};
function hb() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = mb,
      nested: o
    } = t, i = r.unstable_sxConfig ?? pu, s = {
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
      const c = r.breakpoints ?? sa, f = u0(c);
      for (const y in u) {
        const d = gb(u[y], r);
        if (d != null) {
          if (typeof d != "object") {
            Jm(f, y, d, r, i);
            continue;
          }
          if (i[y]) {
            Jm(f, y, d, r, i);
            continue;
          }
          LC(c, d) ? iu(f, t.theme, d, (x, w) => {
            f[x][y] = w;
          }) : (s.sx = d, f[y] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": Gm(r, vd(c, f))
      } : Gm(r, vd(c, f));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const io = hb();
function Jm(e, t, n, r, o) {
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
    Bo(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: u
  } = i, c = su(r, s);
  iu(e, r, n, (f, y) => {
    const d = c0(c, u, y, t);
    a === !1 ? Bo(f ? e[f] : e, d) : f ? e[f][a] = d : e[a] = d;
  });
}
function gb(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yb(e, t) {
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
function mu(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = s0(n), a = f0(o);
  let u = wt({
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
      ...bC,
      ...i
    }
  }, s);
  return u = CC(u), u.applyStyles = yb, u = t.reduce((c, f) => wt(c, f), u), u.unstable_sxConfig = {
    ...pu,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return io({
      sx: f,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function vb(e) {
  return Object.keys(e).length === 0;
}
function Qf(e = null) {
  const t = h.useContext(Is);
  return !t || vb(t) ? e : t;
}
const xb = mu();
function hu(e = xb) {
  return Qf(e);
}
function lc(e) {
  const t = Pr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function p0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = hu(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => lc(typeof s == "function" ? s(o) : s)) : i = lc(i)), /* @__PURE__ */ S.jsx(t0, {
    styles: i
  });
}
const eh = (e) => e, Sb = () => {
  let e = eh;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = eh;
    }
  };
}, m0 = Sb();
function h0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = h0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function J() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = h0(e)) && (r && (r += " "), r += t);
  return r;
}
function wb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = n0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(io);
  return /* @__PURE__ */ h.forwardRef(function(a, u) {
    const c = hu(n), {
      className: f,
      component: y = "div",
      ...d
    } = a;
    return /* @__PURE__ */ S.jsx(i, {
      as: y,
      ref: u,
      className: J(f, o ? o(r) : r),
      theme: t && c[t] || c,
      ...d
    });
  });
}
const Cb = {
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
function ae(e, t, n = "Mui") {
  const r = Cb[t];
  return r ? `${n}-${r}` : `${m0.generate(e)}-${t}`;
}
function le(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ae(e, o, n);
  }), r;
}
function g0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Pr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Pr(o.style));
  }), r;
}
const bb = mu();
function ac(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Qr(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function kb(e) {
  return e ? (t, n) => n[e] : null;
}
function Eb(e, t, n) {
  e.theme = a0(e.theme) ? n : e.theme[t] || e.theme;
}
function $l(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => $l(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? Qr(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? Qr(Pr(s), n) : s;
    }
    return y0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? Qr(Pr(r.style), n) : r.style : n ? Qr(Pr(r), n) : r;
}
function y0(e, t, n = [], r = void 0) {
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
    }), n.push(r ? Qr(Pr(l.style(o)), r) : l.style(o))) : n.push(r ? Qr(Pr(l.style), r) : l.style);
  }
  return n;
}
function v0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = bb,
    rootShouldForwardProp: r = ac,
    slotShouldForwardProp: o = ac
  } = e;
  function i(l) {
    Eb(l, t, n);
  }
  return (l, a = {}) => {
    gC(l, (k) => k.filter((T) => T !== io));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: f,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = kb(Pb(c)),
      ...x
    } = a, w = u && u.startsWith("Mui") || c ? "components" : "custom", b = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), m = y || !1;
    let p = ac;
    c === "Root" || c === "root" ? p = r : c ? p = o : Rb(l) && (p = void 0);
    const v = n0(l, {
      shouldForwardProp: p,
      label: Tb(),
      ...x
    }), C = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(R) {
          return $l(R, k, R.theme.modularCssLayers ? w : void 0);
        };
      if (Xn(k)) {
        const T = g0(k);
        return function(I) {
          return T.variants ? $l(I, T, I.theme.modularCssLayers ? w : void 0) : I.theme.modularCssLayers ? Qr(T.style, w) : T.style;
        };
      }
      return k;
    }, E = (...k) => {
      const T = [], R = k.map(C), I = [];
      if (T.push(i), u && d && I.push(function($) {
        var j, A;
        const O = (A = (j = $.theme.components) == null ? void 0 : j[u]) == null ? void 0 : A.styleOverrides;
        if (!O)
          return null;
        const N = {};
        for (const z in O)
          N[z] = $l($, O[z], $.theme.modularCssLayers ? "theme" : void 0);
        return d($, N);
      }), u && !b && I.push(function($) {
        var N, j;
        const P = $.theme, O = (j = (N = P == null ? void 0 : P.components) == null ? void 0 : N[u]) == null ? void 0 : j.variants;
        return O ? y0($, O, [], $.theme.modularCssLayers ? "theme" : void 0) : null;
      }), m || I.push(io), Array.isArray(R[0])) {
        const g = R.shift(), $ = new Array(T.length).fill(""), P = new Array(I.length).fill("");
        let O;
        O = [...$, ...g, ...P], O.raw = [...$, ...g.raw, ...P], T.unshift(O);
      }
      const L = [...T, ...R, ...I], M = v(...L);
      return l.muiName && (M.muiName = l.muiName), M;
    };
    return v.withConfig && (E.withConfig = v.withConfig), E;
  };
}
function Tb(e, t) {
  return void 0;
}
function Rb(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Pb(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Ib = v0();
function ys(e, t, n = !1) {
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
              r[i][u] = ys(s[u], l[u], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = J(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function Mb(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : ys(t.components[n].defaultProps, r);
}
function $b(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = hu(r);
  return o && (i = i[o] || i), Mb({
    theme: i,
    name: n,
    props: t
  });
}
const et = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
function Ob(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Xf(e, t = 0, n = 1) {
  return Ob(e, t, n);
}
function Ab(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Or(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Or(Ab(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(sr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(sr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const Nb = (e) => {
  const t = Or(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, $i = (e, t) => {
  try {
    return Nb(e);
  } catch {
    return e;
  }
};
function gu(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function x0(e) {
  e = Or(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), gu({
    type: l,
    values: a
  });
}
function xd(e) {
  e = Or(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Or(x0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Lb(e, t) {
  const n = xd(e), r = xd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function aa(e, t) {
  return e = Or(e), t = Xf(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, gu(e);
}
function Fr(e, t, n) {
  try {
    return aa(e, t);
  } catch {
    return e;
  }
}
function yu(e, t) {
  if (e = Or(e), t = Xf(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return gu(e);
}
function Ie(e, t, n) {
  try {
    return yu(e, t);
  } catch {
    return e;
  }
}
function vu(e, t) {
  if (e = Or(e), t = Xf(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return gu(e);
}
function Me(e, t, n) {
  try {
    return vu(e, t);
  } catch {
    return e;
  }
}
function Sd(e, t = 0.15) {
  return xd(e) > 0.5 ? yu(e, t) : vu(e, t);
}
function ol(e, t, n) {
  try {
    return Sd(e, t);
  } catch {
    return e;
  }
}
const S0 = /* @__PURE__ */ h.createContext(null);
function qf() {
  return h.useContext(S0);
}
const jb = typeof Symbol == "function" && Symbol.for, zb = jb ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function _b(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function Fb(e) {
  const {
    children: t,
    theme: n
  } = e, r = qf(), o = h.useMemo(() => {
    const i = r === null ? {
      ...n
    } : _b(r, n);
    return i != null && (i[zb] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ S.jsx(S0.Provider, {
    value: o,
    children: t
  });
}
const w0 = /* @__PURE__ */ h.createContext();
function Db({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ S.jsx(w0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const C0 = () => h.useContext(w0) ?? !1, b0 = /* @__PURE__ */ h.createContext(void 0);
function Bb({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ S.jsx(b0.Provider, {
    value: e,
    children: t
  });
}
function Wb(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? ys(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? ys(o, r, t.components.mergeClassNameAndStyle) : r;
}
function Ub({
  props: e,
  name: t
}) {
  const n = h.useContext(b0);
  return Wb({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let th = 0;
function Hb(e) {
  const [t, n] = h.useState(e), r = e || t;
  return h.useEffect(() => {
    t == null && (th += 1, n(`mui-${th}`));
  }, [t]), r;
}
const Vb = {
  ...Nl
}, nh = Vb.useId;
function lr(e) {
  if (nh !== void 0) {
    const t = nh();
    return e ?? t;
  }
  return Hb(e);
}
function Kb(e) {
  const t = Qf(), n = lr() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, et(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ S.jsx(p0, {
    styles: o
  }) : null;
}
const rh = {};
function oh(e, t, n, r = !1) {
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
function k0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Qf(rh), i = qf() || rh, s = oh(r, o, n), l = oh(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", u = Kb(s);
  return /* @__PURE__ */ S.jsx(Fb, {
    theme: l,
    children: /* @__PURE__ */ S.jsx(Is.Provider, {
      value: s,
      children: /* @__PURE__ */ S.jsx(Db, {
        value: a,
        children: /* @__PURE__ */ S.jsxs(Bb, {
          value: r ? s[r].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const ih = {
  theme: void 0
};
function Yb(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (ih.theme = o.theme, i = g0(e(ih)), t = i, n = o.theme), i;
  };
}
const Zf = "mode", Jf = "color-scheme", Gb = "data-color-scheme";
function Qb(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Zf,
    colorSchemeStorageKey: i = Jf,
    attribute: s = Gb,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let u = "", c = s;
  if (s === "class" && (c = ".%s"), s === "data" && (c = "[data-%s]"), c.startsWith(".")) {
    const y = c.substring(1);
    u += `${l}.classList.remove('${y}'.replace('%s', light), '${y}'.replace('%s', dark));
      ${l}.classList.add('${y}'.replace('%s', colorScheme));`;
  }
  const f = c.match(/\[([^[\]]+)\]/);
  if (f) {
    const [y, d] = f[1].split("=");
    d || (u += `${l}.removeAttribute('${y}'.replace('%s', light));
      ${l}.removeAttribute('${y}'.replace('%s', dark));`), u += `
      ${l}.setAttribute('${y}'.replace('%s', colorScheme), ${d ? `${d}.replace('%s', colorScheme)` : '""'});`;
  } else c !== ".%s" && (u += `${l}.setAttribute('${c}', colorScheme);`);
  return /* @__PURE__ */ S.jsx("script", {
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
function Xb() {
}
const qb = ({
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
      return Xb;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function uc() {
}
function sh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function E0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Zb(e) {
  return E0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Jb(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Zf,
    colorSchemeStorageKey: s = Jf,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = qb,
    noSsr: u = !1
  } = e, c = o.join(","), f = o.length > 1, y = h.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), d = h.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), x = h.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [w, b] = h.useState(() => {
    const R = (y == null ? void 0 : y.get(t)) || t, I = (d == null ? void 0 : d.get(n)) || n, L = (x == null ? void 0 : x.get(r)) || r;
    return {
      mode: R,
      systemMode: sh(R),
      lightColorScheme: I,
      darkColorScheme: L
    };
  }), [m, p] = h.useState(u || !f);
  h.useEffect(() => {
    p(!0);
  }, []);
  const v = Zb(w), C = h.useCallback((R) => {
    b((I) => {
      if (R === I.mode)
        return I;
      const L = R ?? t;
      return y == null || y.set(L), {
        ...I,
        mode: L,
        systemMode: sh(L)
      };
    });
  }, [y, t]), E = h.useCallback((R) => {
    R ? typeof R == "string" ? R && !c.includes(R) ? console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`) : b((I) => {
      const L = {
        ...I
      };
      return E0(I, (M) => {
        M === "light" && (d == null || d.set(R), L.lightColorScheme = R), M === "dark" && (x == null || x.set(R), L.darkColorScheme = R);
      }), L;
    }) : b((I) => {
      const L = {
        ...I
      }, M = R.light === null ? n : R.light, g = R.dark === null ? r : R.dark;
      return M && (c.includes(M) ? (L.lightColorScheme = M, d == null || d.set(M)) : console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`)), g && (c.includes(g) ? (L.darkColorScheme = g, x == null || x.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), L;
    }) : b((I) => (d == null || d.set(n), x == null || x.set(r), {
      ...I,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [c, d, x, n, r]), k = h.useCallback((R) => {
    w.mode === "system" && b((I) => {
      const L = R != null && R.matches ? "dark" : "light";
      return I.systemMode === L ? I : {
        ...I,
        systemMode: L
      };
    });
  }, [w.mode]), T = h.useRef(k);
  return T.current = k, h.useEffect(() => {
    if (typeof window.matchMedia != "function" || !f)
      return;
    const R = (...L) => T.current(...L), I = window.matchMedia("(prefers-color-scheme: dark)");
    return I.addListener(R), R(I), () => {
      I.removeListener(R);
    };
  }, [f]), h.useEffect(() => {
    if (f) {
      const R = (y == null ? void 0 : y.subscribe((M) => {
        (!M || ["light", "dark", "system"].includes(M)) && C(M || t);
      })) || uc, I = (d == null ? void 0 : d.subscribe((M) => {
        (!M || c.match(M)) && E({
          light: M
        });
      })) || uc, L = (x == null ? void 0 : x.subscribe((M) => {
        (!M || c.match(M)) && E({
          dark: M
        });
      })) || uc;
      return () => {
        R(), I(), L();
      };
    }
  }, [E, C, c, t, l, f, y, d, x]), {
    ...w,
    mode: m ? w.mode : void 0,
    systemMode: m ? w.systemMode : void 0,
    colorScheme: m ? v : void 0,
    setMode: C,
    setColorScheme: E
  };
}
const ek = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function tk(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Zf,
    colorSchemeStorageKey: o = Jf,
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
  }, u = /* @__PURE__ */ h.createContext(void 0), c = () => h.useContext(u) || a, f = {}, y = {};
  function d(m) {
    var _e, he, Be, Lt;
    const {
      children: p,
      theme: v,
      modeStorageKey: C = r,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: k = i,
      storageManager: T,
      storageWindow: R = typeof window > "u" ? void 0 : window,
      documentNode: I = typeof document > "u" ? void 0 : document,
      colorSchemeNode: L = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: M = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: $ = "system",
      forceThemeRerender: P = !1,
      noSsr: O
    } = m, N = h.useRef(!1), j = qf(), A = h.useContext(u), z = !!A && !M, F = h.useMemo(() => v || (typeof n == "function" ? n() : n), [v]), H = F[t], D = H || F, {
      colorSchemes: X = f,
      components: Y = y,
      cssVarPrefix: q
    } = D, Q = Object.keys(X).filter((ne) => !!X[ne]).join(","), G = h.useMemo(() => Q.split(","), [Q]), B = typeof s == "string" ? s : s.light, ee = typeof s == "string" ? s : s.dark, oe = X[B] && X[ee] ? $ : ((he = (_e = X[D.defaultColorScheme]) == null ? void 0 : _e.palette) == null ? void 0 : he.mode) || ((Be = D.palette) == null ? void 0 : Be.mode), {
      mode: Ce,
      setMode: ye,
      systemMode: fe,
      lightColorScheme: se,
      darkColorScheme: Re,
      colorScheme: Ne,
      setColorScheme: be
    } = Jb({
      supportedColorSchemes: G,
      defaultLightColorScheme: B,
      defaultDarkColorScheme: ee,
      modeStorageKey: C,
      colorSchemeStorageKey: E,
      defaultMode: oe,
      storageManager: T,
      storageWindow: R,
      noSsr: O
    });
    let W = Ce, te = Ne;
    z && (W = A.mode, te = A.colorScheme);
    let pe = te || D.defaultColorScheme;
    D.vars && !P && (pe = D.defaultColorScheme);
    const ze = h.useMemo(() => {
      var Fe;
      const ne = ((Fe = D.generateThemeVars) == null ? void 0 : Fe.call(D)) || D.vars, me = {
        ...D,
        components: Y,
        colorSchemes: X,
        cssVarPrefix: q,
        vars: ne
      };
      if (typeof me.generateSpacing == "function" && (me.spacing = me.generateSpacing()), pe) {
        const mt = X[pe];
        mt && typeof mt == "object" && Object.keys(mt).forEach((we) => {
          mt[we] && typeof mt[we] == "object" ? me[we] = {
            ...me[we],
            ...mt[we]
          } : me[we] = mt[we];
        });
      }
      return l ? l(me) : me;
    }, [D, pe, Y, X, q]), Ae = D.colorSchemeSelector;
    et(() => {
      if (te && L && Ae && Ae !== "media") {
        const ne = Ae;
        let me = Ae;
        if (ne === "class" && (me = ".%s"), ne === "data" && (me = "[data-%s]"), ne != null && ne.startsWith("data-") && !ne.includes("%s") && (me = `[${ne}="%s"]`), me.startsWith("."))
          L.classList.remove(...G.map((Fe) => me.substring(1).replace("%s", Fe))), L.classList.add(me.substring(1).replace("%s", te));
        else {
          const Fe = me.replace("%s", te).match(/\[([^\]]+)\]/);
          if (Fe) {
            const [mt, we] = Fe[1].split("=");
            we || G.forEach((ai) => {
              L.removeAttribute(mt.replace(te, ai));
            }), L.setAttribute(mt, we ? we.replace(/"|'/g, "") : "");
          } else
            L.setAttribute(me, te);
        }
      }
    }, [te, Ae, L, G]), h.useEffect(() => {
      let ne;
      if (k && N.current && I) {
        const me = I.createElement("style");
        me.appendChild(I.createTextNode(ek)), I.head.appendChild(me), window.getComputedStyle(I.body), ne = setTimeout(() => {
          I.head.removeChild(me);
        }, 1);
      }
      return () => {
        clearTimeout(ne);
      };
    }, [te, k, I]), h.useEffect(() => (N.current = !0, () => {
      N.current = !1;
    }), []);
    const Le = h.useMemo(() => ({
      allColorSchemes: G,
      colorScheme: te,
      darkColorScheme: Re,
      lightColorScheme: se,
      mode: W,
      setColorScheme: be,
      setMode: ye,
      systemMode: fe
    }), [G, te, Re, se, W, be, ye, fe, ze.colorSchemeSelector]);
    let He = !0;
    (g || D.cssVariables === !1 || z && (j == null ? void 0 : j.cssVarPrefix) === q) && (He = !1);
    const dt = /* @__PURE__ */ S.jsxs(h.Fragment, {
      children: [/* @__PURE__ */ S.jsx(k0, {
        themeId: H ? t : void 0,
        theme: ze,
        children: p
      }), He && /* @__PURE__ */ S.jsx(t0, {
        styles: ((Lt = ze.generateStyleSheets) == null ? void 0 : Lt.call(ze)) || []
      })]
    });
    return z ? dt : /* @__PURE__ */ S.jsx(u.Provider, {
      value: Le,
      children: dt
    });
  }
  const x = typeof s == "string" ? s : s.light, w = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: c,
    getInitColorSchemeScript: (m) => Qb({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: w,
      modeStorageKey: r,
      ...m
    })
  };
}
function nk(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const rk = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), lh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (rk.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, ok = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, ik = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function cc(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return ok(
    e,
    (l, a, u) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const c = `--${n ? `${n}-` : ""}${l.join("-")}`, f = ik(l, a);
        Object.assign(o, {
          [c]: f
        }), lh(i, l, `var(${c})`, u), lh(s, l, `var(${c}, ${f})`, u);
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
function sk(e, t = {}) {
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
    css: f,
    varsWithDefaults: y
  } = cc(u, t);
  let d = y;
  const x = {}, {
    [a]: w,
    ...b
  } = s;
  if (Object.entries(b || {}).forEach(([C, E]) => {
    const {
      vars: k,
      css: T,
      varsWithDefaults: R
    } = cc(E, t);
    d = wt(d, R), x[C] = {
      css: T,
      vars: k
    };
  }), w) {
    const {
      css: C,
      vars: E,
      varsWithDefaults: k
    } = cc(w, t);
    d = wt(d, k), x[a] = {
      css: C,
      vars: E
    };
  }
  function m(C, E) {
    var T, R;
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), C) {
      if (k === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${((R = (T = s[C]) == null ? void 0 : T.palette) == null ? void 0 : R.mode) || C})`]: {
            ":root": E
          }
        };
      if (k)
        return e.defaultColorScheme === C ? `:root, ${k.replace("%s", String(C))}` : k.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: d,
    generateThemeVars: () => {
      let C = {
        ...c
      };
      return Object.entries(x).forEach(([, {
        vars: E
      }]) => {
        C = wt(C, E);
      }), C;
    },
    generateStyleSheets: () => {
      var I, L;
      const C = [], E = e.defaultColorScheme || "light";
      function k(M, g) {
        Object.keys(g).length && C.push(typeof M == "string" ? {
          [M]: {
            ...g
          }
        } : M);
      }
      k(n(void 0, {
        ...f
      }), f);
      const {
        [E]: T,
        ...R
      } = x;
      if (T) {
        const {
          css: M
        } = T, g = (L = (I = s[E]) == null ? void 0 : I.palette) == null ? void 0 : L.mode, $ = !r && g ? {
          colorScheme: g,
          ...M
        } : {
          ...M
        };
        k(n(E, {
          ...$
        }), $);
      }
      return Object.entries(R).forEach(([M, {
        css: g
      }]) => {
        var O, N;
        const $ = (N = (O = s[M]) == null ? void 0 : O.palette) == null ? void 0 : N.mode, P = !r && $ ? {
          colorScheme: $,
          ...g
        } : {
          ...g
        };
        k(n(M, {
          ...P
        }), P);
      }), i && C.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), C;
    }
  };
}
function lk(e) {
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
      const u = i[a];
      u && (s += (l === !0 ? "" : " ") + t(u), l = !1, n && n[u] && (s += " " + n[u]));
    }
    r[o] = s;
  }
  return r;
}
function dc(e, t) {
  var n, r, o;
  return /* @__PURE__ */ h.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const ak = mu(), uk = Ib("div", {
  name: "MuiStack",
  slot: "Root"
});
function ck(e) {
  return $b({
    props: e,
    name: "MuiStack",
    defaultTheme: ak
  });
}
function dk(e, t) {
  const n = h.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ h.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const fk = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], pk = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...$r({
      theme: t
    }, sc({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = lu(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = sc({
      values: e.direction,
      base: o
    }), s = sc({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, c) => {
      if (!i[a]) {
        const y = u > 0 ? i[c[u - 1]] : "column";
        i[a] = y;
      }
    }), n = wt(n, $r({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: oo(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${fk(u ? i[u] : e.direction)}`]: oo(r, a)
      }
    }));
  }
  return n = AC(t.breakpoints, n), n;
};
function mk(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = uk,
    useThemeProps: n = ck,
    componentName: r = "MuiStack"
  } = e, o = () => ue({
    root: ["root"]
  }, (a) => ae(r, a), {}), i = t(pk);
  return /* @__PURE__ */ h.forwardRef(function(a, u) {
    const c = n(a), {
      component: f = "div",
      direction: y = "column",
      spacing: d = 0,
      divider: x,
      children: w,
      className: b,
      useFlexGap: m = !1,
      ...p
    } = c, v = {
      direction: y,
      spacing: d,
      useFlexGap: m
    }, C = o();
    return /* @__PURE__ */ S.jsx(i, {
      as: f,
      ownerState: v,
      ref: u,
      className: J(C.root, b),
      ...p,
      children: x ? dk(w, x) : w
    });
  });
}
function T0() {
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
      paper: ds.white,
      default: ds.white
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
const R0 = T0();
function P0() {
  return {
    text: {
      primary: ds.white,
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
      active: ds.white,
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
const wd = P0();
function ah(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = vu(e.main, o) : t === "dark" && (e.dark = yu(e.main, i)));
}
function uh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function hk(e = "light") {
  return e === "dark" ? {
    main: vo[200],
    light: vo[50],
    dark: vo[400]
  } : {
    main: vo[700],
    light: vo[400],
    dark: vo[800]
  };
}
function gk(e = "light") {
  return e === "dark" ? {
    main: yo[200],
    light: yo[50],
    dark: yo[400]
  } : {
    main: yo[500],
    light: yo[300],
    dark: yo[700]
  };
}
function yk(e = "light") {
  return e === "dark" ? {
    main: go[500],
    light: go[300],
    dark: go[700]
  } : {
    main: go[700],
    light: go[400],
    dark: go[800]
  };
}
function vk(e = "light") {
  return e === "dark" ? {
    main: xo[400],
    light: xo[300],
    dark: xo[700]
  } : {
    main: xo[700],
    light: xo[500],
    dark: xo[900]
  };
}
function xk(e = "light") {
  return e === "dark" ? {
    main: So[400],
    light: So[300],
    dark: So[700]
  } : {
    main: So[800],
    light: So[500],
    dark: So[900]
  };
}
function Sk(e = "light") {
  return e === "dark" ? {
    main: xi[400],
    light: xi[300],
    dark: xi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: xi[500],
    dark: xi[900]
  };
}
function wk(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function ep(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || hk(t), l = e.secondary || gk(t), a = e.error || yk(t), u = e.info || vk(t), c = e.success || xk(t), f = e.warning || Sk(t);
  function y(b) {
    return o ? wk(b) : Lb(b, wd.text.primary) >= n ? wd.text.primary : R0.text.primary;
  }
  const d = ({
    color: b,
    name: m,
    mainShade: p = 500,
    lightShade: v = 300,
    darkShade: C = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[p] && (b.main = b[p]), !b.hasOwnProperty("main"))
      throw new Error(sr(11, m ? ` (${m})` : "", p));
    if (typeof b.main != "string")
      throw new Error(sr(12, m ? ` (${m})` : "", JSON.stringify(b.main)));
    return o ? (uh(o, b, "light", v, r), uh(o, b, "dark", C, r)) : (ah(b, "light", v, r), ah(b, "dark", C, r)), b.contrastText || (b.contrastText = y(b.main)), b;
  };
  let x;
  return t === "light" ? x = T0() : t === "dark" && (x = P0()), wt({
    // A collection of common colors.
    common: {
      ...ds
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
      color: f,
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
    grey: fw,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
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
function Ck(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function bk(e, t) {
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
function kk(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ch = {
  textTransform: "uppercase"
}, dh = '"Roboto", "Helvetica", "Arial", sans-serif';
function I0(e, t) {
  const {
    fontFamily: n = dh,
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
    ...f
  } = typeof t == "function" ? t(e) : t, y = r / 14, d = c || ((b) => `${b / a * y}rem`), x = (b, m, p, v, C) => ({
    fontFamily: n,
    fontWeight: b,
    fontSize: d(m),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: p,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === dh ? {
      letterSpacing: `${kk(v / m)}em`
    } : {},
    ...C,
    ...u
  }), w = {
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
    button: x(s, 14, 1.75, 0.4, ch),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, ch),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return wt({
    htmlFontSize: a,
    pxToRem: d,
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
const Ek = 0.2, Tk = 0.14, Rk = 0.12;
function Ve(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ek})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Tk})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Rk})`].join(",");
}
const Pk = ["none", Ve(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ve(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ve(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ve(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ve(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ve(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ve(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ve(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ve(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ve(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ve(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ve(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ve(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ve(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ve(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ve(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ve(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ve(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ve(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ve(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ve(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ve(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ve(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ve(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ik = ["all"], Mk = {}, $k = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ok = {
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
function fh(e) {
  return `${Math.round(e)}ms`;
}
function Ak(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Nk(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...$k,
    ...t.easing
  }, r = {
    ...Ok,
    ...t.duration
  }, o = (s = Ik, l = Mk) => {
    const {
      duration: a = r.standard,
      easing: u = n.easeInOut,
      delay: c = 0,
      ...f
    } = l;
    return (Array.isArray(s) ? s : [s]).map((y) => `${y} ${typeof a == "string" ? a : fh(a)} ${u} ${typeof c == "string" ? c : fh(c)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: Ak,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const Lk = {};
function jk(e = Lk) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const zk = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function _k(e) {
  return Xn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function M0(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !_k(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : Xn(l) && (r[s] = {
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
function ph(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Fk = (e) => {
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
function Dk(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : aa(t, Fk(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${ph(n)})` : vu(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${ph(n)})` : yu(t, n);
    }
  });
}
function Cd(e = {}, ...t) {
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
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(sr(22));
  const y = ep({
    ...i,
    colorSpace: c
  }), d = mu(e);
  let x = wt(d, {
    mixins: bk(d.breakpoints, r),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Pk.slice(),
    typography: I0(y, a),
    motion: jk(s),
    transitions: Nk(l),
    zIndex: {
      ...zk
    }
  });
  return x = wt(x, f), x = t.reduce((w, b) => wt(w, b), x), delete x.transitions.reducedMotion, x.unstable_sxConfig = {
    ...pu,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, x.unstable_sx = function(b) {
    return io({
      sx: b,
      theme: this
    });
  }, x.toRuntimeSource = M0, Dk(x), x;
}
function bd(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Bk = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = bd(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function $0(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function O0(e) {
  return e === "dark" ? Bk : [];
}
function Wk(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = ep({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...$0(s.mode),
      ...n
    },
    overlays: r || O0(s.mode),
    ...i
  };
}
function Uk(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Hk = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Vk = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Hk(e.cssVarPrefix).forEach((l) => {
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
function Kk(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function _(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Oi(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : x0(e);
}
function Vn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = $i(Oi(e[t])));
}
function Yk(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const $n = (e) => {
  try {
    return e();
  } catch {
  }
}, Gk = (e = "mui") => nk(e);
function fc(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = Wk({
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
  } = Cd({
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
      ...$0(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || O0(i)
  }, l;
}
function Qk(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = Uk,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...c
  } = e, f = Object.keys(n)[0], y = r || (n.light && f !== "light" ? "light" : f), d = Gk(i), {
    [y]: x,
    light: w,
    dark: b,
    ...m
  } = n, p = {
    ...m
  };
  let v = x;
  if ((y === "dark" && !("dark" in n) || y === "light" && !("light" in n)) && (v = !0), !v)
    throw new Error(sr(21, y));
  let C;
  s && (C = "oklch");
  const E = fc(C, p, v, c, y);
  w && !p.light && fc(C, p, w, void 0, "light"), b && !p.dark && fc(C, p, b, void 0, "dark");
  let k = {
    defaultColorScheme: y,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: d,
    colorSchemes: p,
    font: {
      ...Ck(E.typography),
      ...E.font
    },
    spacing: Yk(c.spacing)
  };
  Object.keys(k.colorSchemes).forEach((M) => {
    const g = k.colorSchemes[M].palette, $ = (O) => {
      const N = O.split("-"), j = N[1], A = N[2];
      return d(O, g[j][A]);
    };
    g.mode === "light" && (_(g.common, "background", "#fff"), _(g.common, "onBackground", "#000")), g.mode === "dark" && (_(g.common, "background", "#000"), _(g.common, "onBackground", "#fff"));
    function P(O, N, j) {
      if (C) {
        let A;
        return O === Fr && (A = `transparent ${((1 - j) * 100).toFixed(0)}%`), O === Ie && (A = `#000 ${(j * 100).toFixed(0)}%`), O === Me && (A = `#fff ${(j * 100).toFixed(0)}%`), `color-mix(in ${C}, ${N}, ${A})`;
      }
      return O(N, j);
    }
    if (Kk(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      _(g.Alert, "errorColor", P(Ie, s ? d("palette-error-light") : g.error.light, 0.6)), _(g.Alert, "infoColor", P(Ie, s ? d("palette-info-light") : g.info.light, 0.6)), _(g.Alert, "successColor", P(Ie, s ? d("palette-success-light") : g.success.light, 0.6)), _(g.Alert, "warningColor", P(Ie, s ? d("palette-warning-light") : g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", $("palette-error-main")), _(g.Alert, "infoFilledBg", $("palette-info-main")), _(g.Alert, "successFilledBg", $("palette-success-main")), _(g.Alert, "warningFilledBg", $("palette-warning-main")), _(g.Alert, "errorFilledColor", $n(() => g.getContrastText(g.error.main))), _(g.Alert, "infoFilledColor", $n(() => g.getContrastText(g.info.main))), _(g.Alert, "successFilledColor", $n(() => g.getContrastText(g.success.main))), _(g.Alert, "warningFilledColor", $n(() => g.getContrastText(g.warning.main))), _(g.Alert, "errorStandardBg", P(Me, s ? d("palette-error-light") : g.error.light, 0.9)), _(g.Alert, "infoStandardBg", P(Me, s ? d("palette-info-light") : g.info.light, 0.9)), _(g.Alert, "successStandardBg", P(Me, s ? d("palette-success-light") : g.success.light, 0.9)), _(g.Alert, "warningStandardBg", P(Me, s ? d("palette-warning-light") : g.warning.light, 0.9)), _(g.Alert, "errorIconColor", $("palette-error-main")), _(g.Alert, "infoIconColor", $("palette-info-main")), _(g.Alert, "successIconColor", $("palette-success-main")), _(g.Alert, "warningIconColor", $("palette-warning-main")), _(g.AppBar, "defaultBg", $("palette-grey-100")), _(g.Avatar, "defaultBg", $("palette-grey-400")), _(g.Button, "inheritContainedBg", $("palette-grey-300")), _(g.Button, "inheritContainedHoverBg", $("palette-grey-A100")), _(g.Chip, "defaultBorder", $("palette-grey-400")), _(g.Chip, "defaultAvatarColor", $("palette-grey-700")), _(g.Chip, "defaultIconColor", $("palette-grey-700")), _(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), _(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), _(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), _(g.LinearProgress, "primaryBg", P(Me, s ? d("palette-primary-main") : g.primary.main, 0.62)), _(g.LinearProgress, "secondaryBg", P(Me, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), _(g.LinearProgress, "errorBg", P(Me, s ? d("palette-error-main") : g.error.main, 0.62)), _(g.LinearProgress, "infoBg", P(Me, s ? d("palette-info-main") : g.info.main, 0.62)), _(g.LinearProgress, "successBg", P(Me, s ? d("palette-success-main") : g.success.main, 0.62)), _(g.LinearProgress, "warningBg", P(Me, s ? d("palette-warning-light") : g.warning.main, 0.62)), _(g.Skeleton, "bg", C ? P(Fr, s ? d("palette-text-primary") : g.text.primary, 0.11) : `rgba(${$("palette-text-primaryChannel")} / 0.11)`), _(g.Slider, "primaryTrack", P(Me, s ? d("palette-primary-main") : g.primary.main, 0.62)), _(g.Slider, "secondaryTrack", P(Me, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), _(g.Slider, "errorTrack", P(Me, s ? d("palette-error-main") : g.error.main, 0.62)), _(g.Slider, "infoTrack", P(Me, s ? d("palette-info-main") : g.info.main, 0.62)), _(g.Slider, "successTrack", P(Me, s ? d("palette-success-main") : g.success.main, 0.62)), _(g.Slider, "warningTrack", P(Me, s ? d("palette-warning-main") : g.warning.main, 0.62));
      const O = C ? P(Ie, s ? d("palette-background-default") : g.background.default, 0.6825) : ol(g.background.default, 0.8);
      _(g.SnackbarContent, "bg", O), _(g.SnackbarContent, "color", $n(() => C ? wd.text.primary : g.getContrastText(O))), _(g.SpeedDialAction, "fabHoverBg", ol(g.background.paper, 0.15)), _(g.StepConnector, "border", $("palette-grey-400")), _(g.StepContent, "border", $("palette-grey-400")), _(g.Switch, "defaultColor", $("palette-common-white")), _(g.Switch, "defaultDisabledColor", $("palette-grey-100")), _(g.Switch, "primaryDisabledColor", P(Me, s ? d("palette-primary-main") : g.primary.main, 0.62)), _(g.Switch, "secondaryDisabledColor", P(Me, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), _(g.Switch, "errorDisabledColor", P(Me, s ? d("palette-error-main") : g.error.main, 0.62)), _(g.Switch, "infoDisabledColor", P(Me, s ? d("palette-info-main") : g.info.main, 0.62)), _(g.Switch, "successDisabledColor", P(Me, s ? d("palette-success-main") : g.success.main, 0.62)), _(g.Switch, "warningDisabledColor", P(Me, s ? d("palette-warning-main") : g.warning.main, 0.62)), _(g.TableCell, "border", P(Me, Fr(s ? d("palette-divider") : g.divider, 1), 0.88)), _(g.Tooltip, "bg", P(Fr, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      _(g.Alert, "errorColor", P(Me, s ? d("palette-error-light") : g.error.light, 0.6)), _(g.Alert, "infoColor", P(Me, s ? d("palette-info-light") : g.info.light, 0.6)), _(g.Alert, "successColor", P(Me, s ? d("palette-success-light") : g.success.light, 0.6)), _(g.Alert, "warningColor", P(Me, s ? d("palette-warning-light") : g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", $("palette-error-dark")), _(g.Alert, "infoFilledBg", $("palette-info-dark")), _(g.Alert, "successFilledBg", $("palette-success-dark")), _(g.Alert, "warningFilledBg", $("palette-warning-dark")), _(g.Alert, "errorFilledColor", $n(() => g.getContrastText(g.error.dark))), _(g.Alert, "infoFilledColor", $n(() => g.getContrastText(g.info.dark))), _(g.Alert, "successFilledColor", $n(() => g.getContrastText(g.success.dark))), _(g.Alert, "warningFilledColor", $n(() => g.getContrastText(g.warning.dark))), _(g.Alert, "errorStandardBg", P(Ie, s ? d("palette-error-light") : g.error.light, 0.9)), _(g.Alert, "infoStandardBg", P(Ie, s ? d("palette-info-light") : g.info.light, 0.9)), _(g.Alert, "successStandardBg", P(Ie, s ? d("palette-success-light") : g.success.light, 0.9)), _(g.Alert, "warningStandardBg", P(Ie, s ? d("palette-warning-light") : g.warning.light, 0.9)), _(g.Alert, "errorIconColor", $("palette-error-main")), _(g.Alert, "infoIconColor", $("palette-info-main")), _(g.Alert, "successIconColor", $("palette-success-main")), _(g.Alert, "warningIconColor", $("palette-warning-main")), _(g.AppBar, "defaultBg", $("palette-grey-900")), _(g.AppBar, "darkBg", $("palette-background-paper")), _(g.AppBar, "darkColor", $("palette-text-primary")), _(g.Avatar, "defaultBg", $("palette-grey-600")), _(g.Button, "inheritContainedBg", $("palette-grey-800")), _(g.Button, "inheritContainedHoverBg", $("palette-grey-700")), _(g.Chip, "defaultBorder", $("palette-grey-700")), _(g.Chip, "defaultAvatarColor", $("palette-grey-300")), _(g.Chip, "defaultIconColor", $("palette-grey-300")), _(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), _(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), _(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), _(g.LinearProgress, "primaryBg", P(Ie, s ? d("palette-primary-main") : g.primary.main, 0.5)), _(g.LinearProgress, "secondaryBg", P(Ie, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), _(g.LinearProgress, "errorBg", P(Ie, s ? d("palette-error-main") : g.error.main, 0.5)), _(g.LinearProgress, "infoBg", P(Ie, s ? d("palette-info-main") : g.info.main, 0.5)), _(g.LinearProgress, "successBg", P(Ie, s ? d("palette-success-main") : g.success.main, 0.5)), _(g.LinearProgress, "warningBg", P(Ie, s ? d("palette-warning-main") : g.warning.main, 0.5)), _(g.Skeleton, "bg", C ? P(Fr, s ? d("palette-text-primary") : g.text.primary, 0.13) : `rgba(${$("palette-text-primaryChannel")} / 0.13)`), _(g.Slider, "primaryTrack", P(Ie, s ? d("palette-primary-main") : g.primary.main, 0.5)), _(g.Slider, "secondaryTrack", P(Ie, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), _(g.Slider, "errorTrack", P(Ie, s ? d("palette-error-main") : g.error.main, 0.5)), _(g.Slider, "infoTrack", P(Ie, s ? d("palette-info-main") : g.info.main, 0.5)), _(g.Slider, "successTrack", P(Ie, s ? d("palette-success-main") : g.success.main, 0.5)), _(g.Slider, "warningTrack", P(Ie, s ? d("palette-warning-light") : g.warning.main, 0.5));
      const O = C ? P(Me, s ? d("palette-background-default") : g.background.default, 0.985) : ol(g.background.default, 0.98);
      _(g.SnackbarContent, "bg", O), _(g.SnackbarContent, "color", $n(() => C ? R0.text.primary : g.getContrastText(O))), _(g.SpeedDialAction, "fabHoverBg", ol(g.background.paper, 0.15)), _(g.StepConnector, "border", $("palette-grey-600")), _(g.StepContent, "border", $("palette-grey-600")), _(g.Switch, "defaultColor", $("palette-grey-300")), _(g.Switch, "defaultDisabledColor", $("palette-grey-600")), _(g.Switch, "primaryDisabledColor", P(Ie, s ? d("palette-primary-main") : g.primary.main, 0.55)), _(g.Switch, "secondaryDisabledColor", P(Ie, s ? d("palette-secondary-main") : g.secondary.main, 0.55)), _(g.Switch, "errorDisabledColor", P(Ie, s ? d("palette-error-main") : g.error.main, 0.55)), _(g.Switch, "infoDisabledColor", P(Ie, s ? d("palette-info-main") : g.info.main, 0.55)), _(g.Switch, "successDisabledColor", P(Ie, s ? d("palette-success-main") : g.success.main, 0.55)), _(g.Switch, "warningDisabledColor", P(Ie, s ? d("palette-warning-light") : g.warning.main, 0.55)), _(g.TableCell, "border", P(Ie, Fr(s ? d("palette-divider") : g.divider, 1), 0.68)), _(g.Tooltip, "bg", P(Fr, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    s || (Vn(g.background, "default"), Vn(g.background, "paper"), Vn(g.common, "background"), Vn(g.common, "onBackground"), Vn(g, "divider")), Object.keys(g).forEach((O) => {
      const N = g[O];
      O !== "tonalOffset" && !s && N && typeof N == "object" && (N.main && _(g[O], "mainChannel", $i(Oi(N.main))), N.light && _(g[O], "lightChannel", $i(Oi(N.light))), N.dark && _(g[O], "darkChannel", $i(Oi(N.dark))), N.contrastText && _(g[O], "contrastTextChannel", $i(Oi(N.contrastText))), O === "text" && (Vn(g[O], "primary"), Vn(g[O], "secondary")), O === "action" && (N.active && Vn(g[O], "active"), N.selected && Vn(g[O], "selected")));
    });
  }), k = t.reduce((M, g) => wt(M, g), k);
  const T = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: Vk(k),
    enableContrastVars: s
  }, {
    vars: R,
    generateThemeVars: I,
    generateStyleSheets: L
  } = sk(k, T);
  return k.vars = R, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([M, g]) => {
    k[M] = g;
  }), k.generateThemeVars = I, k.generateStyleSheets = L, k.generateSpacing = function() {
    return f0(c.spacing, lu(this));
  }, k.getColorSchemeSelector = lk(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...pu,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, k.unstable_sx = function(g) {
    return io({
      sx: g,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = M0, k;
}
function mh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: ep({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function xu(e = {}, ...t) {
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
      return Cd(e, ...t);
    let c = n;
    "palette" in e || u[l] && (u[l] !== !0 ? c = u[l].palette : l === "dark" && (c = {
      mode: "dark"
    }));
    const f = Cd({
      ...e,
      palette: c
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, mh(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, mh(f, "light", u.light)), f;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), Qk({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function ua(e) {
  return typeof e == "string";
}
function A0(e, t = 166) {
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
function tt(...e) {
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
  return et(() => {
    t.current = e;
  }), h.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function rt(e) {
  return e && e.ownerDocument || document;
}
function ar(e) {
  return rt(e).defaultView || window;
}
function il(e) {
  return parseInt(e, 10) || 0;
}
const Xk = {
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
function qk(e) {
  for (const t in e)
    return !1;
  return !0;
}
function hh(e) {
  return qk(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Zk = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: u
  } = h.useRef(l != null), c = h.useRef(null), f = tt(n, c), y = h.useRef(null), d = h.useRef(null), x = h.useCallback(() => {
    const v = c.current, C = d.current;
    if (!v || !C)
      return;
    const k = ar(v).getComputedStyle(v);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    C.style.width = k.width, C.value = v.value || t.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
    const T = k.boxSizing, R = il(k.paddingBottom) + il(k.paddingTop), I = il(k.borderBottomWidth) + il(k.borderTopWidth), L = C.scrollHeight;
    C.value = "x";
    const M = C.scrollHeight;
    let g = L;
    i && (g = Math.max(Number(i) * M, g)), o && (g = Math.min(Number(o) * M, g)), g = Math.max(g, M);
    const $ = g + (T === "border-box" ? R + I : 0), P = Math.abs(g - L) <= 1;
    return {
      outerHeightStyle: $,
      overflowing: P
    };
  }, [o, i, t.placeholder]), w = Xe(() => {
    const v = c.current, C = x();
    if (!v || !C || hh(C))
      return !1;
    const E = C.outerHeightStyle;
    return y.current != null && y.current !== E;
  }), b = h.useCallback(() => {
    const v = c.current, C = x();
    if (!v || !C || hh(C))
      return;
    const E = C.outerHeightStyle;
    y.current !== E && (y.current = E, v.style.height = `${E}px`), v.style.overflow = C.overflowing ? "hidden" : "";
  }, [x]), m = h.useRef(-1);
  et(() => {
    const v = A0(b), C = c == null ? void 0 : c.current;
    if (!C)
      return;
    const E = ar(C);
    E.addEventListener("resize", v);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      w() && (k.unobserve(C), cancelAnimationFrame(m.current), b(), m.current = requestAnimationFrame(() => {
        k.observe(C);
      }));
    }), k.observe(C)), () => {
      v.clear(), cancelAnimationFrame(m.current), E.removeEventListener("resize", v), k && k.disconnect();
    };
  }, [x, b, w]), et(() => {
    b();
  });
  const p = (v) => {
    u || b();
    const C = v.target, E = C.value.length, k = C.value.endsWith(`
`), T = C.selectionStart === E;
    k && T && C.setSelectionRange(E, E), r && r(v);
  };
  return /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ S.jsx("textarea", {
      value: l,
      onChange: p,
      ref: f,
      rows: i,
      style: s,
      ...a
    }), /* @__PURE__ */ S.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: d,
      tabIndex: -1,
      style: {
        ...Xk.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), Os = /* @__PURE__ */ h.createContext(void 0);
function Jk() {
  return h.useContext(Os);
}
function li({
  props: e,
  states: t
}) {
  const n = h.useContext(Os), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const tp = xu();
function uo() {
  const e = hu(tp);
  return e[Dn] || e;
}
function e2(e) {
  return /* @__PURE__ */ S.jsx(p0, {
    ...e,
    defaultTheme: tp,
    themeId: Dn
  });
}
function N0(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Vt = (e) => N0(e) && e !== "classes", K = v0({
  themeId: Dn,
  defaultTheme: tp,
  rootShouldForwardProp: Vt
});
function t2(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ S.jsx(e2, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const xe = Yb;
function ce(e) {
  return Ub(e);
}
function Jn(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function gh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ca(e, t = !1) {
  return e && (gh(e.value) && e.value !== "" || t && gh(e.defaultValue) && e.defaultValue !== "");
}
function n2(e) {
  return e.startAdornment;
}
function r2(e) {
  return ae("MuiInputBase", e);
}
const Gt = le("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), o2 = {
  transition: "none"
};
function i2(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const np = (e) => e.scrollTop, L0 = {}, s2 = ["all"], l2 = {};
function dn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function j0(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function da(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = L0
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function rp(e, t) {
  var r;
  const n = t ?? o2;
  return i2((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function ct(e, t = s2, n = l2) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = rp(e);
  if (r === void 0)
    return o ?? L0;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var yh;
const kd = "mui-auto-fill", fa = "mui-auto-fill-cancel", Su = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ie(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, wu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, a2 = (e) => {
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
    readOnly: f,
    size: y,
    startAdornment: d,
    type: x
  } = e, w = {
    root: ["root", `color${ie(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", y && y !== "medium" && `size${ie(y)}`, c && "multiline", d && "adornedStart", i && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", x === "search" && "inputTypeSearch", f && "readOnly"]
  };
  return ue(w, r2, t);
}, Cu = K("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Su
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
}))), bu = K("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: wu
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
    ...ct(e, "opacity", {
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
        animationName: fa,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: kd
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
})), vh = t2({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${kd}`]: {
    from: {
      animationName: kd
    }
  },
  [`@keyframes ${fa}`]: {
    from: {
      animationName: fa
    }
  }
}), op = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    disabled: f,
    disableInjectingGlobalStyles: y,
    endAdornment: d,
    error: x,
    fullWidth: w = !1,
    id: b,
    inputComponent: m = "input",
    inputProps: p = {},
    inputRef: v,
    margin: C,
    maxRows: E,
    minRows: k,
    multiline: T = !1,
    name: R,
    onBlur: I,
    onChange: L,
    onClick: M,
    onFocus: g,
    onKeyDown: $,
    onKeyUp: P,
    placeholder: O,
    readOnly: N,
    renderSuffix: j,
    rows: A,
    size: z,
    slotProps: F = {},
    slots: H = {},
    startAdornment: D,
    type: X = "text",
    value: Y,
    ...q
  } = r, Q = p.value != null ? p.value : Y, {
    current: G
  } = h.useRef(Q != null), B = h.useRef(), ee = h.useCallback((ne) => {
  }, []), oe = tt(B, v, p.ref, ee), [Ce, ye] = h.useState(!1), [fe, se] = li({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fe.focused = se ? se.focused : Ce, h.useEffect(() => {
    !se && f && Ce && (ye(!1), I && I());
  }, [se, f, Ce, I]);
  const Re = se && se.onFilled, Ne = se && se.onEmpty, be = h.useCallback((ne) => {
    ca(ne) ? Re && Re() : Ne && Ne();
  }, [Re, Ne]);
  et(() => {
    G && be({
      value: Q
    });
  }, [Q, be, G]), et(() => {
    if (!l)
      return;
    const ne = B.current;
    if (!ne)
      return;
    const me = rt(ne), Fe = Jn(me), mt = Fe == null || Fe === me.body || Fe === me.documentElement;
    ne === Fe ? se && se.onFocus ? se.onFocus() : ye(!0) : mt && ne.focus();
  }, [l]);
  const W = (ne) => {
    g && g(ne), p.onFocus && p.onFocus(ne), se && se.onFocus ? se.onFocus(ne) : ye(!0);
  }, te = (ne) => {
    I && I(ne), p.onBlur && p.onBlur(ne), se && se.onBlur ? se.onBlur(ne) : ye(!1);
  }, pe = (ne, ...me) => {
    if (!G) {
      const Fe = ne.target || B.current;
      if (Fe == null)
        throw new Error(sr(1));
      be({
        value: Fe.value
      });
    }
    p.onChange && p.onChange(ne, ...me), L && L(ne, ...me);
  };
  h.useEffect(() => {
    be(B.current);
  }, []);
  const ze = (ne) => {
    B.current && ne.currentTarget === ne.target && B.current.focus(), M && M(ne);
  };
  let Ae = m, Le = p;
  T && Ae === "input" && (A ? Le = {
    type: void 0,
    minRows: A,
    maxRows: A,
    ...Le
  } : Le = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...Le
  }, Ae = Zk);
  const He = (ne) => {
    be(ne.animationName === fa ? B.current : {
      value: "x"
    });
  };
  h.useEffect(() => {
    se && se.setAdornedStart(!!D);
  }, [se, D]);
  const dt = {
    ...r,
    color: fe.color || "primary",
    disabled: fe.disabled,
    endAdornment: d,
    error: fe.error,
    focused: fe.focused,
    formControl: se,
    fullWidth: w,
    hiddenLabel: fe.hiddenLabel,
    multiline: T,
    size: fe.size,
    startAdornment: D,
    type: X
  }, _e = a2(dt), he = H.root || Cu, Be = F.root || {}, Lt = H.input || bu;
  return Le = {
    ...Le,
    ...F.input
  }, /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [!y && typeof vh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (yh || (yh = /* @__PURE__ */ S.jsx(vh, {}))), /* @__PURE__ */ S.jsxs(he, {
      ...Be,
      ref: n,
      onClick: ze,
      ...q,
      ...!ua(he) && {
        ownerState: {
          ...dt,
          ...Be.ownerState
        }
      },
      className: J(_e.root, Be.className, a, N && "MuiInputBase-readOnly"),
      children: [D, /* @__PURE__ */ S.jsx(Os.Provider, {
        value: null,
        children: /* @__PURE__ */ S.jsx(Lt, {
          "aria-invalid": fe.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: c,
          disabled: fe.disabled,
          id: b,
          onAnimationStart: He,
          name: R,
          placeholder: O,
          readOnly: N,
          required: fe.required,
          rows: A,
          value: Q,
          onKeyDown: $,
          onKeyUp: P,
          type: X,
          ...Le,
          ...!ua(Lt) && {
            as: Ae,
            ownerState: {
              ...dt,
              ...Le.ownerState
            }
          },
          ref: oe,
          className: J(_e.input, Le.className, N && "MuiInputBase-readOnly"),
          onBlur: te,
          onChange: pe,
          onFocus: W
        })
      }), d, j ? j({
        ...fe,
        startAdornment: D
      }) : null]
    })]
  });
});
function u2(e) {
  return ae("MuiFilledInput", e);
}
const Dr = {
  ...Gt,
  ...le("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function c2(e) {
  return ae("MuiFormHelperText", e);
}
const xh = le("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function d2(e) {
  return ae("MuiFormLabel", e);
}
const Wi = le("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function f2(e) {
  return ae("MuiInput", e);
}
const wi = {
  ...Gt,
  ...le("MuiInput", ["root", "underline", "input"])
};
function p2(e) {
  return ae("MuiMenuItem", e);
}
const Ci = le("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function m2(e) {
  return ae("MuiNativeSelect", e);
}
const ip = le("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function h2(e) {
  return ae("MuiOutlinedInput", e);
}
const On = {
  ...Gt,
  ...le("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function g2({
  theme: e,
  ...t
}) {
  const n = Dn in e ? e[Dn] : void 0;
  return /* @__PURE__ */ S.jsx(k0, {
    ...t,
    themeId: n ? Dn : void 0,
    theme: n || e
  });
}
const sl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: y2
} = tk({
  themeId: Dn,
  // @ts-ignore ignore module augmentation tests
  theme: () => xu({
    cssVariables: !0
  }),
  colorSchemeStorageKey: sl.colorSchemeStorageKey,
  modeStorageKey: sl.modeStorageKey,
  defaultColorScheme: {
    light: sl.defaultLightColorScheme,
    dark: sl.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: I0(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return io({
        sx: r,
        theme: this
      });
    }, t;
  }
}), v2 = y2;
function x2({
  theme: e,
  ...t
}) {
  const n = h.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = Dn in e ? e[Dn] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ S.jsx(g2, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ S.jsx(v2, {
    theme: e,
    ...t
  });
}
function Sh(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function S2(e) {
  return ae("MuiSvgIcon", e);
}
le("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const w2 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ie(t)}`, `fontSize${ie(n)}`]
  };
  return ue(o, S2, r);
}, C2 = K("svg", {
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
  var t, n, r, o, i, s, l, a, u, c, f, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...ct(e, "fill", {
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
        var x, w;
        return {
          props: {
            color: d
          },
          style: {
            color: (w = (x = (e.vars ?? e).palette) == null ? void 0 : x[d]) == null ? void 0 : w.main
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
          color: (y = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : y.disabled
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
})), Ed = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    titleAccess: f,
    viewBox: y = "0 0 24 24",
    ...d
  } = r, x = /* @__PURE__ */ h.isValidElement(o) && o.type === "svg", w = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: y,
    hasSvgAsChild: x
  }, b = {};
  c || (b.viewBox = y);
  const m = w2(w);
  return /* @__PURE__ */ S.jsxs(C2, {
    as: l,
    className: J(m.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n,
    ...b,
    ...d,
    ...x && o.props,
    ownerState: w,
    children: [x ? o.props.children : o, f ? /* @__PURE__ */ S.jsx("title", {
      children: f
    }) : null]
  });
});
Ed.muiName = "SvgIcon";
function it(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ S.jsx(Ed, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = Ed.muiName, /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(n));
}
function Td(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Rd(e) {
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
function z0(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function b2(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((u) => {
      z0(u, l[u]) && typeof s[u] == "function" && (a[u] = (...c) => {
        s[u](...c), l[u](...c);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, u = J(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), c = n(a, l);
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
const wh = {};
function sp(e, t) {
  const n = h.useRef(wh);
  return n.current === wh && (n.current = e(t)), n;
}
function k2(e) {
  const t = sp(() => E2(e)).current;
  return t.next = e, et(t.effect), t;
}
function E2(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Ch = Ag.createContext(null);
function T2(e) {
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
function R2(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = T2(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function _0(e) {
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
    nodeRef: f,
    onEnter: y,
    onEntering: d,
    onEntered: x,
    onExit: w,
    onExiting: b,
    onExited: m,
    children: p,
    ...v
  } = e, C = h.useContext(Ch), E = C && !C.isMounting ? r : n, [k, T] = h.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), R = h.useRef(k);
  R.current = k, t && k === "unmounted" && (R.current = "exited", T("exited"));
  const I = h.useRef(t && E), L = h.useRef(!1), M = h.useRef(null), g = h.useRef(k), $ = h.useRef(!1), P = h.useRef(u), O = k2({
    timeout: l,
    addEndListener: a,
    reduceMotion: u,
    getAutoTimeout: c,
    onEnter: y,
    onEntering: d,
    onEntered: x,
    onExit: w,
    onExiting: b,
    onExited: m,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: f,
    parentGroup: C
  }), N = h.useCallback(() => {
    M.current !== null && (M.current.cancel(), M.current = null);
  }, []), j = h.useCallback((D) => {
    let X = !0;
    const Y = () => {
      X && (X = !1, M.current = null, D());
    };
    return Y.cancel = () => {
      X = !1;
    }, M.current = Y, Y;
  }, []), A = h.useCallback((D, X) => {
    var Ne, be;
    let Y;
    const q = () => {
      Y !== void 0 && (clearTimeout(Y), Y = void 0);
    }, Q = j(() => {
      q(), R.current = D, T(D);
    }), G = Q.cancel;
    Q.cancel = () => {
      q(), G();
    };
    const B = O.current.nodeRef.current, ee = O.current.addEndListener, oe = O.current.getAutoTimeout !== void 0, Ce = (be = (Ne = O.current).getAutoTimeout) == null ? void 0 : be.call(Ne), ye = R2({
      currentStatus: X,
      isAppearing: $.current,
      timeout: O.current.timeout,
      autoTimeout: Ce
    }), fe = P.current, se = ye ?? (fe && oe ? 0 : null), Re = (W) => {
      Y = setTimeout(Q, W);
    };
    if (!B) {
      Re(0);
      return;
    }
    if (ee) {
      se != null && Re(fe ? 0 : se), ee.length >= 2 ? ee(B, Q) : ee(Q);
      return;
    }
    Re(fe ? 0 : ye ?? 0);
  }, [j, O]), z = h.useCallback((D) => {
    var q;
    const X = O.current, Y = X.parentGroup ? X.parentGroup.isMounting : D;
    if ($.current = Y, !D && !X.enter) {
      R.current = "entered", T("entered");
      return;
    }
    P.current = X.reduceMotion, (q = X.onEnter) == null || q.call(X, Y), R.current = "entering", T("entering");
  }, [O]), F = h.useCallback(() => {
    var X;
    const D = O.current;
    if (!D.exit) {
      R.current = "exited", T("exited");
      return;
    }
    P.current = D.reduceMotion, (X = D.onExit) == null || X.call(D), R.current = "exiting", T("exiting");
  }, [O]), H = h.useCallback((D, X) => {
    if (N(), X === "entering") {
      const Y = O.current;
      if (Y.mountOnEnter || Y.unmountOnExit) {
        const q = Y.nodeRef.current;
        q && np(q);
      }
      z(D);
    } else
      F();
  }, [N, z, F, O]);
  return et(() => (L.current = !0, I.current && (I.current = !1, H(!0, "entering")), () => {
    L.current = !1, N();
  }), [N, H]), et(() => {
    if (!L.current)
      return;
    const D = R.current;
    t ? D !== "entering" && D !== "entered" && H(!1, "entering") : D === "entering" || D === "entered" ? H(!1, "exiting") : D === "exited" && s && (R.current = "unmounted", T("unmounted"));
  }, [t, k, s, H]), et(() => {
    var q, Q, G, B;
    if (k === "unmounted" || g.current === "unmounted") {
      g.current = k;
      return;
    }
    const X = g.current !== k;
    X && (g.current = k);
    const Y = O.current;
    k === "entering" ? (X && ((q = Y.onEntering) == null || q.call(Y, $.current)), M.current === null && R.current === k && A("entered", "entering")) : k === "exiting" ? (X && ((Q = Y.onExiting) == null || Q.call(Y)), M.current === null && R.current === k && A("exited", "exiting")) : k === "entered" && X ? (G = Y.onEntered) == null || G.call(Y, $.current) : k === "exited" && X && ((B = Y.onExited) == null || B.call(Y));
  }, [O, A, k]), k === "unmounted" ? null : /* @__PURE__ */ S.jsx(Ch.Provider, {
    value: null,
    children: p(k, v)
  });
}
const F0 = "(prefers-reduced-motion: reduce)", P2 = 0, I2 = "0ms", M2 = () => {
}, bh = () => !1, $2 = () => !0, O2 = () => M2;
function A2(e) {
  const [t, n] = h.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), et(() => {
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
    const i = window.matchMedia(F0), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const N2 = {
  ...Nl
}, D0 = N2.useSyncExternalStore;
function L2(e) {
  const t = e ? $2 : bh, [n, r] = h.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [bh, O2];
    const o = window.matchMedia(F0);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return D0(r, n, t);
}
const j2 = D0 !== void 0 ? L2 : A2;
function lp(e, t) {
  const n = j2(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return h.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: P2,
        delay: I2
      } : o;
    }
  }), [r]);
}
function B0(e, t, n) {
  return e === void 0 || ua(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function W0(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function pa(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    z0(n, e[n]) && (t[n] = e[n]);
  return t;
}
function kh(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function U0(e) {
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
    }, w = {
      ...n,
      ...o,
      ...r
    };
    return d.length > 0 && (w.className = d), Object.keys(x).length > 0 && (w.style = x), {
      props: w,
      internalRef: void 0
    };
  }
  const s = pa({
    ...o,
    ...r
  }), l = kh(r), a = kh(o), u = t(s), c = J(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), f = {
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
  return c.length > 0 && (y.className = c), Object.keys(f).length > 0 && (y.style = f), {
    props: y,
    internalRef: u.ref
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
    component: u,
    slots: c = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    },
    ...y
  } = i, d = c[e] || r, x = W0(f[e], o), {
    props: {
      component: w,
      ...b
    },
    internalRef: m
  } = U0({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? y : void 0,
    externalSlotProps: x
  }), p = tt(m, x == null ? void 0 : x.ref, t.ref), v = e === "root" ? w || u : w, C = B0(d, {
    ...e === "root" && !u && !c[e] && s,
    ...e !== "root" && !c[e] && s,
    ...b,
    ...v && !l && {
      as: v
    },
    ...v && l && {
      component: v
    },
    ref: p
  }, o);
  return [d, C];
}
function z2(e) {
  return ae("MuiPaper", e);
}
le("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const _2 = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ue(i, z2, o);
}, F2 = K("div", {
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
  ...ct(e, "box-shadow"),
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
}))), jr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var d;
  const r = ce({
    props: t,
    name: "MuiPaper"
  }), o = uo(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: u = "elevation",
    ...c
  } = r, f = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: u
  }, y = _2(f);
  return /* @__PURE__ */ S.jsx(F2, {
    as: s,
    ownerState: f,
    className: J(y.root, i),
    ref: n,
    ...c,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (d = o.vars.overlays) == null ? void 0 : d[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${aa("#fff", bd(l))}, ${aa("#fff", bd(l))})`
        }
      },
      ...c.style
    }
  });
});
function ma(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function D2(e) {
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
const B2 = {};
function W2(e) {
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
  } = e, c = h.useRef(null), f = s === !0, y = D2({
    focusableWhenDisabled: f,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), d = h.useCallback(() => {
    const b = c.current;
    return b == null ? t : b.tagName === "BUTTON" ? !0 : !!(b.tagName === "A" && b.href);
  }, [t]), x = h.useMemo(() => {
    const b = f ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (b.type = r === void 0 && !o ? "button" : r, f || (b.disabled = n)) : (b.role = "button", !f && n && (b["aria-disabled"] = n)), f ? {
      ...b,
      ...y
    } : b;
  }, [n, f, y, o, t, i, r]);
  return {
    getButtonProps: h.useCallback((b = B2) => {
      const {
        onClick: m,
        onKeyDown: p,
        onKeyUp: v,
        ...C
      } = b;
      return {
        ...x,
        ...C,
        onClick: (R) => {
          if (l && R.stopPropagation(), n) {
            R.preventDefault();
            return;
          }
          m == null || m(R);
        },
        onKeyDown: (R) => {
          if (f && y.onKeyDown(R), !n && (a == null || a(R), p == null || p(R), !(R.target !== R.currentTarget || d()))) {
            if (R.key === " ") {
              R.preventDefault();
              return;
            }
            R.key === "Enter" && (R.preventDefault(), R.currentTarget.click());
          }
        },
        onKeyUp: (R) => {
          n || (u == null || u(R), v == null || v(R), R.target === R.currentTarget && !d() && R.key === " " && !R.defaultPrevented && R.currentTarget.click());
        }
      };
    }, [x, n, f, y, d, a, u, l]),
    rootRef: c
  };
}
class ha {
  constructor() {
    ci(this, "mountEffect", () => {
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
    return new ha();
  }
  static use() {
    const t = sp(ha.create).current, [n, r] = h.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, h.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = H2(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function U2() {
  return ha.use();
}
function H2() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const V2 = [];
function H0(e) {
  h.useEffect(e, V2);
}
class ku {
  constructor() {
    ci(this, "currentId", null);
    ci(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    ci(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ku();
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
function zn() {
  const e = sp(ku.create).current;
  return H0(e.disposeEffect), e;
}
function K2(e) {
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
  } = e, [c, f] = h.useState(!1), y = zn(), d = h.useRef(!1), x = h.useRef(a);
  x.current = a;
  const w = a != null, b = J(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), m = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, p = J(n.child, c && n.childLeaving, r && n.childPulsate);
  return !l && !c && f(!0), h.useEffect(() => {
    !l && w ? d.current || (d.current = !0, y.start(u, () => {
      var v;
      d.current = !1, (v = x.current) == null || v.call(x);
    })) : (d.current = !1, y.clear());
  }, [y, w, l, u]), /* @__PURE__ */ S.jsx("span", {
    className: b,
    style: m,
    children: /* @__PURE__ */ S.jsx("span", {
      className: p
    })
  });
}
const Mt = le("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Pd = 550, Y2 = 80, ll = {}, Eh = [], G2 = () => {
};
function pc(e, t) {
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
function Q2({
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
const X2 = Ms`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, q2 = Ms`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Z2 = Ms`
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
function J2(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = hs`
    &.${Mt.rippleVisible} {
      animation-name: ${X2};
      animation-duration: ${Pd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Mt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Mt.childLeaving} {
      animation-name: ${q2};
      animation-duration: ${Pd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Mt.childPulsate} {
      animation-name: ${Z2};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? hs`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const eE = K("span", {
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
}), tE = K(K2, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Mt.rippleVisible} {
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
  & .${Mt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Mt.childLeaving} {
    opacity: 0;
  }

  & .${Mt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => J2(e)}
`, nE = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiTouchRipple"
  }), o = uo(), i = lp(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = ll,
    className: a,
    ...u
  } = r, [c, f] = h.useState({
    items: Eh,
    order: Eh
  }), y = c.items, d = h.useRef(0), x = h.useRef(null), w = h.useRef(!1);
  H0(() => (w.current = !0, () => {
    w.current = !1;
  })), h.useEffect(() => {
    x.current && (x.current(), x.current = null);
  }, [y]);
  const b = h.useRef(!1), m = zn(), p = h.useRef(null), v = h.useRef(null), C = Xe((M) => {
    w.current && f((g) => {
      const $ = g.items.filter((O) => O.key !== M), P = pc(g.order.filter((O) => O !== M), $.filter((O) => !O.exiting).map((O) => O.key));
      return {
        items: $,
        order: P
      };
    });
  }), E = Xe((M) => {
    const {
      pulsate: g,
      rippleX: $,
      rippleY: P,
      rippleSize: O,
      cb: N
    } = M, j = d.current;
    d.current += 1, f((A) => {
      const z = [...A.items, {
        key: j,
        pulsate: g,
        rippleX: $,
        rippleY: P,
        rippleSize: O,
        exiting: !1
      }];
      return {
        items: z,
        order: pc(A.order, z.filter((F) => !F.exiting).map((F) => F.key))
      };
    }), x.current = N;
  }), k = Xe((M = ll, g = ll, $ = G2) => {
    const {
      pulsate: P = !1,
      center: O = s || g.pulsate,
      fakeElement: N = !1
      // Used only by tests.
    } = g;
    if ((M == null ? void 0 : M.type) === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    (M == null ? void 0 : M.type) === "touchstart" && (b.current = !0);
    const j = N ? null : v.current, {
      rippleX: A,
      rippleY: z,
      rippleSize: F
    } = Q2({
      event: M,
      element: j,
      center: O
    });
    M != null && M.touches ? p.current === null && (p.current = () => {
      E({
        pulsate: P,
        rippleX: A,
        rippleY: z,
        rippleSize: F,
        cb: $
      });
    }, m.start(Y2, () => {
      p.current && (p.current(), p.current = null);
    })) : E({
      pulsate: P,
      rippleX: A,
      rippleY: z,
      rippleSize: F,
      cb: $
    });
  }), T = Xe(() => {
    k(ll, {
      pulsate: !0
    });
  }), R = Xe((M, g) => {
    if (m.clear(), (M == null ? void 0 : M.type) === "touchend" && p.current) {
      p.current(), p.current = null, m.start(0, () => {
        R(M, g);
      });
      return;
    }
    p.current = null, f(($) => {
      const P = $.items.findIndex((N) => !N.exiting);
      if (P === -1)
        return $;
      const O = $.items.slice();
      return O[P] = {
        ...O[P],
        exiting: !0
      }, {
        items: O,
        order: pc($.order, O.filter((N) => !N.exiting).map((N) => N.key))
      };
    }), x.current = g;
  });
  h.useImperativeHandle(n, () => ({
    pulsate: T,
    start: k,
    stop: R
  }), [T, k, R]);
  const I = new Map(y.map((M) => [M.key, M])), L = c.order.map((M) => I.get(M)).filter(Boolean);
  return /* @__PURE__ */ S.jsx(eE, {
    className: J(Mt.root, l.root, a),
    ref: v,
    ...u,
    children: L.map((M) => /* @__PURE__ */ S.jsx(tE, {
      classes: {
        ripple: J(l.ripple, Mt.ripple),
        rippleVisible: J(l.rippleVisible, Mt.rippleVisible),
        ripplePulsate: J(l.ripplePulsate, Mt.ripplePulsate),
        child: J(l.child, Mt.child),
        childLeaving: J(l.childLeaving, Mt.childLeaving),
        childPulsate: J(l.childPulsate, Mt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : Pd,
      pulsate: M.pulsate,
      rippleX: M.rippleX,
      rippleY: M.rippleY,
      rippleSize: M.rippleSize,
      in: !M.exiting,
      onExited: () => C(M.key)
    }, M.key))
  });
});
function rE(e) {
  return ae("MuiButtonBase", e);
}
const oE = le("MuiButtonBase", ["root", "disabled", "focusVisible"]), iE = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = ue({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, rE, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, sE = K("button", {
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
  [`&.${oE.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), vs = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    disableTouchRipple: f = !1,
    focusRipple: y = !1,
    focusVisibleClassName: d,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: x,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: w = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: b,
    /* eslint-enable react/prop-types */
    LinkComponent: m = "a",
    nativeButton: p,
    onBlur: v,
    onClick: C,
    onContextMenu: E,
    onDragLeave: k,
    onFocus: T,
    onFocusVisible: R,
    onKeyDown: I,
    onKeyUp: L,
    onMouseDown: M,
    onMouseLeave: g,
    onMouseUp: $,
    onTouchEnd: P,
    onTouchMove: O,
    onTouchStart: N,
    tabIndex: j = 0,
    TouchRippleProps: A,
    touchRippleRef: z,
    type: F,
    ...H
  } = r, D = !!(H.href || H.to), X = !!H.formAction;
  let Y = a;
  Y === "button" && D && (Y = m);
  const Q = p ?? (typeof Y == "string" ? Y === "button" : b ?? !1), G = U2(), B = tt(G.ref, z), [ee, oe] = h.useState(!1);
  (u || w) && ee && oe(!1);
  const Ce = Xe((we) => {
    y && !we.repeat && ee && we.key === " " && G.stop(we, () => {
      G.start(we);
    });
  }), ye = Xe((we) => {
    y && we.key === " " && ee && !we.defaultPrevented && G.stop(we, () => {
      G.pulsate(we);
    });
  }), {
    getButtonProps: fe,
    rootRef: se
  } = W2({
    nativeButton: Q,
    disabled: u,
    type: F,
    hasFormAction: X,
    tabIndex: j,
    onBeforeKeyDown: Ce,
    onBeforeKeyUp: ye
  }), {
    onClick: Re,
    onKeyDown: Ne,
    onKeyUp: be,
    ...W
  } = fe({
    onClick: C,
    onKeyDown: I,
    onKeyUp: L
  });
  h.useImperativeHandle(o, () => ({
    focusVisible: () => {
      oe(!0), se.current.focus();
    }
  }), [se]);
  const te = G.shouldMount && !c && !u;
  h.useEffect(() => {
    ee && y && !c && G.pulsate();
  }, [c, y, ee, G]);
  const pe = Kn(G, "start", M, f), ze = Kn(G, "stop", E, f), Ae = Kn(G, "stop", k, f), Le = Kn(G, "stop", $, f), He = Kn(G, "stop", (we) => {
    ee && we.preventDefault(), g && g(we);
  }, f), dt = Kn(G, "start", N, f), _e = Kn(G, "stop", P, f), he = Kn(G, "stop", O, f), Be = Kn(G, "stop", (we) => {
    ma(we.target) || oe(!1), v && v(we);
  }, !1), Lt = Xe((we) => {
    se.current || (se.current = we.currentTarget), !w && ma(we.target) && (oe(!0), R && R(we)), T && T(we);
  }), ne = {};
  D && (ne.tabIndex = u ? -1 : j, u && (ne["aria-disabled"] = u), ne.type = F);
  const me = tt(n, se), Fe = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: f,
    focusRipple: y,
    suppressFocusVisible: w,
    tabIndex: j,
    focusVisible: ee
  }, mt = iE(Fe);
  return /* @__PURE__ */ S.jsxs(sE, {
    as: Y,
    className: J(mt.root, l),
    ownerState: Fe,
    onBlur: Be,
    onClick: Re,
    onContextMenu: ze,
    onFocus: Lt,
    onKeyDown: Ne,
    onKeyUp: be,
    onMouseDown: pe,
    onMouseLeave: He,
    onMouseUp: Le,
    onDragLeave: Ae,
    onTouchEnd: _e,
    onTouchMove: he,
    onTouchStart: dt,
    ref: me,
    ...D ? ne : W,
    ...H,
    children: [s, te ? /* @__PURE__ */ S.jsx(nE, {
      ref: B,
      center: i,
      ...A
    }) : null]
  });
});
function Kn(e, t, n, r = !1) {
  return Xe((o) => (n && n(o), r || e[t](o), !0));
}
function lE(e) {
  return typeof e.main == "string";
}
function aE(e, t = []) {
  if (!lE(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function $t(e = []) {
  return ([, t]) => t && aE(t, e);
}
function uE(e) {
  return ae("MuiAlert", e);
}
const Th = le("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function cE(e) {
  return ae("MuiCircularProgress", e);
}
le("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Cn = 44, Id = Ms`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Md = Ms`
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
`, dE = typeof Id != "string" ? hs`
        animation: ${Id} 1.4s linear infinite;
      ` : null, fE = typeof Md != "string" ? hs`
        animation: ${Md} 1.4s ease-in-out infinite;
      ` : null, pE = (e) => {
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
  return ue(i, cE, t);
}, mE = K("span", {
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
  const t = rp(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...ct(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: dE || {
        animation: `${Id} 1.4s linear infinite`
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
})), hE = K("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), gE = K("circle", {
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
  const t = rp(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...ct(e, "stroke-dashoffset")
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
      style: fE || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${Md} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), yE = K("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(xe(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), ga = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    style: f,
    thickness: y = 3.6,
    value: d = r.min ?? 0,
    variant: x = "indeterminate",
    ...w
  } = r, b = a ?? 0, m = u ?? 100, p = {
    ...r,
    color: i,
    disableShrink: s,
    size: c,
    thickness: y,
    value: d,
    variant: x,
    enableTrackSlot: l
  }, v = pE(p), C = {}, E = {}, k = {};
  if (x === "determinate") {
    const T = 2 * Math.PI * ((Cn - y) / 2), R = m - b;
    C.strokeDasharray = T.toFixed(3), C.strokeDashoffset = R > 0 ? `${((m - d) / R * T).toFixed(3)}px` : `${T.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = d, k["aria-valuemin"] = b, k["aria-valuemax"] = m;
  }
  return /* @__PURE__ */ S.jsx(mE, {
    className: J(v.root, o),
    style: {
      width: c,
      height: c,
      ...E,
      ...f
    },
    ownerState: p,
    ref: n,
    role: "progressbar",
    ...k,
    ...w,
    children: /* @__PURE__ */ S.jsxs(hE, {
      className: v.svg,
      ownerState: p,
      viewBox: `${Cn / 2} ${Cn / 2} ${Cn} ${Cn}`,
      children: [l ? /* @__PURE__ */ S.jsx(yE, {
        className: v.track,
        ownerState: p,
        cx: Cn,
        cy: Cn,
        r: (Cn - y) / 2,
        fill: "none",
        strokeWidth: y,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ S.jsx(gE, {
        className: v.circle,
        style: C,
        ownerState: p,
        cx: Cn,
        cy: Cn,
        r: (Cn - y) / 2,
        fill: "none",
        strokeWidth: y
      })]
    })
  });
});
function vE(e) {
  return ae("MuiIconButton", e);
}
const Rh = le("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), xE = (e) => {
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
  return ue(l, vE, t);
}, SE = K(vs, {
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
  ...ct(e, "background-color", {
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
  [`&.${Rh.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Rh.loading}`]: {
    color: "transparent"
  }
}))), wE = K("span", {
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
})), sn = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    id: f,
    loading: y = null,
    loadingIndicator: d,
    ...x
  } = r, w = lr(f), b = d ?? /* @__PURE__ */ S.jsx(ga, {
    "aria-labelledby": w,
    color: "inherit",
    size: 16
  }), m = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: u,
    loading: y,
    loadingIndicator: b,
    size: c
  }, p = xE(m);
  return /* @__PURE__ */ S.jsxs(SE, {
    id: y ? w : f,
    className: J(p.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !u,
    disabled: a || y,
    ref: n,
    ...x,
    ownerState: m,
    children: [typeof y == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ S.jsx("span", {
      className: p.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ S.jsx(wE, {
        className: p.loadingIndicator,
        ownerState: m,
        children: y && b
      })
    }), i]
  });
}), CE = it(/* @__PURE__ */ S.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), bE = it(/* @__PURE__ */ S.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), kE = it(/* @__PURE__ */ S.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), EE = it(/* @__PURE__ */ S.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), TE = it(/* @__PURE__ */ S.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), RE = (e) => {
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
  return ue(i, uE, o);
}, PE = K(jr, {
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
    variants: [...Object.entries(e.palette).filter($t(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${Th.icon}`]: e.vars ? {
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
        [`& .${Th.icon}`]: e.vars ? {
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
})), IE = K("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), ME = K("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), $E = K("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Ph = {
  success: /* @__PURE__ */ S.jsx(CE, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ S.jsx(bE, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ S.jsx(kE, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ S.jsx(EE, {
    fontSize: "inherit"
  })
}, mc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    icon: u,
    iconMapping: c = Ph,
    onClose: f,
    role: y = "alert",
    severity: d = "success",
    slotProps: x = {},
    slots: w = {},
    variant: b = "standard",
    ...m
  } = r, p = {
    ...r,
    color: a,
    severity: d,
    variant: b,
    colorSeverity: a || d
  }, v = RE(p), C = {
    slots: w,
    slotProps: x
  }, [E, k] = ve("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: J(v.root, s),
    elementType: PE,
    externalForwardedProps: {
      ...C,
      ...m
    },
    ownerState: p,
    additionalProps: {
      role: y,
      elevation: 0
    }
  }), [T, R] = ve("icon", {
    className: v.icon,
    elementType: IE,
    externalForwardedProps: C,
    ownerState: p
  }), [I, L] = ve("message", {
    className: v.message,
    elementType: ME,
    externalForwardedProps: C,
    ownerState: p
  }), [M, g] = ve("action", {
    className: v.action,
    elementType: $E,
    externalForwardedProps: C,
    ownerState: p
  }), [$, P] = ve("closeButton", {
    elementType: sn,
    externalForwardedProps: C,
    ownerState: p
  }), [O, N] = ve("closeIcon", {
    elementType: TE,
    externalForwardedProps: C,
    ownerState: p
  });
  return /* @__PURE__ */ S.jsxs(E, {
    ...k,
    children: [u !== !1 ? /* @__PURE__ */ S.jsx(T, {
      ...R,
      children: u || c[d] || Ph[d]
    }) : null, /* @__PURE__ */ S.jsx(I, {
      ...L,
      children: i
    }), o != null ? /* @__PURE__ */ S.jsx(M, {
      ...g,
      children: o
    }) : null, o == null && f ? /* @__PURE__ */ S.jsx(M, {
      ...g,
      children: /* @__PURE__ */ S.jsx($, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: f,
        ...P,
        children: /* @__PURE__ */ S.jsx(O, {
          fontSize: "small",
          ...N
        })
      })
    }) : null]
  });
});
function OE(e) {
  return ae("MuiTypography", e);
}
le("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const AE = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${ie(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return ue(s, OE, i);
}, NE = K("span", {
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
    })), ...Object.entries(e.palette).filter($t()).map(([n]) => ({
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
})), Ih = {
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
}, tr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    variantMapping: f = Ih,
    ...y
  } = r, d = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: u,
    variant: c,
    variantMapping: f
  }, x = l || f[c] || Ih[c] || "span", w = AE(d);
  return /* @__PURE__ */ S.jsx(NE, {
    as: x,
    ref: n,
    className: J(w.root, s),
    ...y,
    ownerState: d,
    style: {
      ...i !== "inherit" && {
        "--Typography-textAlign": i
      },
      ...y.style
    }
  });
});
function Uo(e, t) {
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
var Wt = "top", yn = "bottom", vn = "right", Ut = "left", ap = "auto", As = [Wt, yn, vn, Ut], Jo = "start", xs = "end", LE = "clippingParents", V0 = "viewport", bi = "popper", jE = "reference", Mh = /* @__PURE__ */ As.reduce(function(e, t) {
  return e.concat([t + "-" + Jo, t + "-" + xs]);
}, []), K0 = /* @__PURE__ */ [].concat(As, [ap]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Jo, t + "-" + xs]);
}, []), zE = "beforeRead", _E = "read", FE = "afterRead", DE = "beforeMain", BE = "main", WE = "afterMain", UE = "beforeWrite", HE = "write", VE = "afterWrite", KE = [zE, _E, FE, DE, BE, WE, UE, HE, VE];
function Un(e) {
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
function so(e) {
  var t = en(e).Element;
  return e instanceof t || e instanceof Element;
}
function mn(e) {
  var t = en(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function up(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = en(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function YE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !mn(i) || !Un(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function GE(e) {
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
      !mn(o) || !Un(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const QE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: YE,
  effect: GE,
  requires: ["computeStyles"]
};
function Wn(e) {
  return e.split("-")[0];
}
var Zr = Math.max, ya = Math.min, ei = Math.round;
function $d() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Y0() {
  return !/^((?!chrome|android).)*safari/i.test($d());
}
function ti(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && mn(e) && (o = e.offsetWidth > 0 && ei(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ei(r.height) / e.offsetHeight || 1);
  var s = so(e) ? en(e) : window, l = s.visualViewport, a = !Y0() && n, u = (r.left + (a && l ? l.offsetLeft : 0)) / o, c = (r.top + (a && l ? l.offsetTop : 0)) / i, f = r.width / o, y = r.height / i;
  return {
    width: f,
    height: y,
    top: c,
    right: u + f,
    bottom: c + y,
    left: u,
    x: u,
    y: c
  };
}
function cp(e) {
  var t = ti(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function G0(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && up(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ur(e) {
  return en(e).getComputedStyle(e);
}
function XE(e) {
  return ["table", "td", "th"].indexOf(Un(e)) >= 0;
}
function zr(e) {
  return ((so(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Eu(e) {
  return Un(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (up(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    zr(e)
  );
}
function $h(e) {
  return !mn(e) || // https://github.com/popperjs/popper-core/issues/837
  ur(e).position === "fixed" ? null : e.offsetParent;
}
function qE(e) {
  var t = /firefox/i.test($d()), n = /Trident/i.test($d());
  if (n && mn(e)) {
    var r = ur(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Eu(e);
  for (up(o) && (o = o.host); mn(o) && ["html", "body"].indexOf(Un(o)) < 0; ) {
    var i = ur(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ns(e) {
  for (var t = en(e), n = $h(e); n && XE(n) && ur(n).position === "static"; )
    n = $h(n);
  return n && (Un(n) === "html" || Un(n) === "body" && ur(n).position === "static") ? t : n || qE(e) || t;
}
function dp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ui(e, t, n) {
  return Zr(e, ya(t, n));
}
function ZE(e, t, n) {
  var r = Ui(e, t, n);
  return r > n ? n : r;
}
function Q0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function X0(e) {
  return Object.assign({}, Q0(), e);
}
function q0(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var JE = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, X0(typeof t != "number" ? t : q0(t, As));
};
function eT(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Wn(n.placement), a = dp(l), u = [Ut, vn].indexOf(l) >= 0, c = u ? "height" : "width";
  if (!(!i || !s)) {
    var f = JE(o.padding, n), y = cp(i), d = a === "y" ? Wt : Ut, x = a === "y" ? yn : vn, w = n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c], b = s[a] - n.rects.reference[a], m = Ns(i), p = m ? a === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, v = w / 2 - b / 2, C = f[d], E = p - y[c] - f[x], k = p / 2 - y[c] / 2 + v, T = Ui(C, k, E), R = a;
    n.modifiersData[r] = (t = {}, t[R] = T, t.centerOffset = T - k, t);
  }
}
function tT(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || G0(t.elements.popper, o) && (t.elements.arrow = o));
}
const nT = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: eT,
  effect: tT,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ni(e) {
  return e.split("-")[1];
}
var rT = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function oT(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ei(n * o) / o || 0,
    y: ei(r * o) / o || 0
  };
}
function Oh(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, y = s.x, d = y === void 0 ? 0 : y, x = s.y, w = x === void 0 ? 0 : x, b = typeof c == "function" ? c({
    x: d,
    y: w
  }) : {
    x: d,
    y: w
  };
  d = b.x, w = b.y;
  var m = s.hasOwnProperty("x"), p = s.hasOwnProperty("y"), v = Ut, C = Wt, E = window;
  if (u) {
    var k = Ns(n), T = "clientHeight", R = "clientWidth";
    if (k === en(n) && (k = zr(n), ur(k).position !== "static" && l === "absolute" && (T = "scrollHeight", R = "scrollWidth")), k = k, o === Wt || (o === Ut || o === vn) && i === xs) {
      C = yn;
      var I = f && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      w -= I - r.height, w *= a ? 1 : -1;
    }
    if (o === Ut || (o === Wt || o === yn) && i === xs) {
      v = vn;
      var L = f && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      d -= L - r.width, d *= a ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, u && rT), g = c === !0 ? oT({
    x: d,
    y: w
  }, en(n)) : {
    x: d,
    y: w
  };
  if (d = g.x, w = g.y, a) {
    var $;
    return Object.assign({}, M, ($ = {}, $[C] = p ? "0" : "", $[v] = m ? "0" : "", $.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + w + "px)" : "translate3d(" + d + "px, " + w + "px, 0)", $));
  }
  return Object.assign({}, M, (t = {}, t[C] = p ? w + "px" : "", t[v] = m ? d + "px" : "", t.transform = "", t));
}
function iT(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, u = {
    placement: Wn(t.placement),
    variation: ni(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Oh(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Oh(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const sT = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: iT,
  data: {}
};
var al = {
  passive: !0
};
function lT(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = en(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, al);
  }), l && a.addEventListener("resize", n.update, al), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, al);
    }), l && a.removeEventListener("resize", n.update, al);
  };
}
const aT = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: lT,
  data: {}
};
var uT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ol(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return uT[t];
  });
}
var cT = {
  start: "end",
  end: "start"
};
function Ah(e) {
  return e.replace(/start|end/g, function(t) {
    return cT[t];
  });
}
function fp(e) {
  var t = en(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function pp(e) {
  return ti(zr(e)).left + fp(e).scrollLeft;
}
function dT(e, t) {
  var n = en(e), r = zr(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = Y0();
    (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + pp(e),
    y: a
  };
}
function fT(e) {
  var t, n = zr(e), r = fp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Zr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Zr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + pp(e), a = -r.scrollTop;
  return ur(o || n).direction === "rtl" && (l += Zr(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function mp(e) {
  var t = ur(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Z0(e) {
  return ["html", "body", "#document"].indexOf(Un(e)) >= 0 ? e.ownerDocument.body : mn(e) && mp(e) ? e : Z0(Eu(e));
}
function Hi(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Z0(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = en(r), s = o ? [i].concat(i.visualViewport || [], mp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Hi(Eu(s)))
  );
}
function Od(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function pT(e, t) {
  var n = ti(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Nh(e, t, n) {
  return t === V0 ? Od(dT(e, n)) : so(t) ? pT(t, n) : Od(fT(zr(e)));
}
function mT(e) {
  var t = Hi(Eu(e)), n = ["absolute", "fixed"].indexOf(ur(e).position) >= 0, r = n && mn(e) ? Ns(e) : e;
  return so(r) ? t.filter(function(o) {
    return so(o) && G0(o, r) && Un(o) !== "body";
  }) : [];
}
function hT(e, t, n, r) {
  var o = t === "clippingParents" ? mT(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, u) {
    var c = Nh(e, u, r);
    return a.top = Zr(c.top, a.top), a.right = ya(c.right, a.right), a.bottom = ya(c.bottom, a.bottom), a.left = Zr(c.left, a.left), a;
  }, Nh(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function J0(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Wn(r) : null, i = r ? ni(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case Wt:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case yn:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case vn:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Ut:
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
  var u = o ? dp(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Jo:
        a[u] = a[u] - (t[c] / 2 - n[c] / 2);
        break;
      case xs:
        a[u] = a[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return a;
}
function Ss(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? LE : l, u = n.rootBoundary, c = u === void 0 ? V0 : u, f = n.elementContext, y = f === void 0 ? bi : f, d = n.altBoundary, x = d === void 0 ? !1 : d, w = n.padding, b = w === void 0 ? 0 : w, m = X0(typeof b != "number" ? b : q0(b, As)), p = y === bi ? jE : bi, v = e.rects.popper, C = e.elements[x ? p : y], E = hT(so(C) ? C : C.contextElement || zr(e.elements.popper), a, c, s), k = ti(e.elements.reference), T = J0({
    reference: k,
    element: v,
    placement: o
  }), R = Od(Object.assign({}, v, T)), I = y === bi ? R : k, L = {
    top: E.top - I.top + m.top,
    bottom: I.bottom - E.bottom + m.bottom,
    left: E.left - I.left + m.left,
    right: I.right - E.right + m.right
  }, M = e.modifiersData.offset;
  if (y === bi && M) {
    var g = M[o];
    Object.keys(L).forEach(function($) {
      var P = [vn, yn].indexOf($) >= 0 ? 1 : -1, O = [Wt, yn].indexOf($) >= 0 ? "y" : "x";
      L[$] += g[O] * P;
    });
  }
  return L;
}
function gT(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? K0 : a, c = ni(r), f = c ? l ? Mh : Mh.filter(function(x) {
    return ni(x) === c;
  }) : As, y = f.filter(function(x) {
    return u.indexOf(x) >= 0;
  });
  y.length === 0 && (y = f);
  var d = y.reduce(function(x, w) {
    return x[w] = Ss(e, {
      placement: w,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[Wn(w)], x;
  }, {});
  return Object.keys(d).sort(function(x, w) {
    return d[x] - d[w];
  });
}
function yT(e) {
  if (Wn(e) === ap)
    return [];
  var t = Ol(e);
  return [Ah(e), t, Ah(t)];
}
function vT(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, c = n.boundary, f = n.rootBoundary, y = n.altBoundary, d = n.flipVariations, x = d === void 0 ? !0 : d, w = n.allowedAutoPlacements, b = t.options.placement, m = Wn(b), p = m === b, v = a || (p || !x ? [Ol(b)] : yT(b)), C = [b].concat(v).reduce(function(Y, q) {
      return Y.concat(Wn(q) === ap ? gT(t, {
        placement: q,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: x,
        allowedAutoPlacements: w
      }) : q);
    }, []), E = t.rects.reference, k = t.rects.popper, T = /* @__PURE__ */ new Map(), R = !0, I = C[0], L = 0; L < C.length; L++) {
      var M = C[L], g = Wn(M), $ = ni(M) === Jo, P = [Wt, yn].indexOf(g) >= 0, O = P ? "width" : "height", N = Ss(t, {
        placement: M,
        boundary: c,
        rootBoundary: f,
        altBoundary: y,
        padding: u
      }), j = P ? $ ? vn : Ut : $ ? yn : Wt;
      E[O] > k[O] && (j = Ol(j));
      var A = Ol(j), z = [];
      if (i && z.push(N[g] <= 0), l && z.push(N[j] <= 0, N[A] <= 0), z.every(function(Y) {
        return Y;
      })) {
        I = M, R = !1;
        break;
      }
      T.set(M, z);
    }
    if (R)
      for (var F = x ? 3 : 1, H = function(q) {
        var Q = C.find(function(G) {
          var B = T.get(G);
          if (B)
            return B.slice(0, q).every(function(ee) {
              return ee;
            });
        });
        if (Q)
          return I = Q, "break";
      }, D = F; D > 0; D--) {
        var X = H(D);
        if (X === "break") break;
      }
    t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const xT = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vT,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Lh(e, t, n) {
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
function jh(e) {
  return [Wt, vn, yn, Ut].some(function(t) {
    return e[t] >= 0;
  });
}
function ST(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Ss(t, {
    elementContext: "reference"
  }), l = Ss(t, {
    altBoundary: !0
  }), a = Lh(s, r), u = Lh(l, o, i), c = jh(a), f = jh(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": f
  });
}
const wT = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ST
};
function CT(e, t, n) {
  var r = Wn(e), o = [Ut, Wt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [Ut, vn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function bT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = K0.reduce(function(c, f) {
    return c[f] = CT(f, t.rects, i), c;
  }, {}), l = s[t.placement], a = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const kT = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: bT
};
function ET(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = J0({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const TT = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ET,
  data: {}
};
function RT(e) {
  return e === "x" ? "y" : "x";
}
function PT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, u = n.rootBoundary, c = n.altBoundary, f = n.padding, y = n.tether, d = y === void 0 ? !0 : y, x = n.tetherOffset, w = x === void 0 ? 0 : x, b = Ss(t, {
    boundary: a,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), m = Wn(t.placement), p = ni(t.placement), v = !p, C = dp(m), E = RT(C), k = t.modifiersData.popperOffsets, T = t.rects.reference, R = t.rects.popper, I = typeof w == "function" ? w(Object.assign({}, t.rects, {
    placement: t.placement
  })) : w, L = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, g = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var $, P = C === "y" ? Wt : Ut, O = C === "y" ? yn : vn, N = C === "y" ? "height" : "width", j = k[C], A = j + b[P], z = j - b[O], F = d ? -R[N] / 2 : 0, H = p === Jo ? T[N] : R[N], D = p === Jo ? -R[N] : -T[N], X = t.elements.arrow, Y = d && X ? cp(X) : {
        width: 0,
        height: 0
      }, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Q0(), Q = q[P], G = q[O], B = Ui(0, T[N], Y[N]), ee = v ? T[N] / 2 - F - B - Q - L.mainAxis : H - B - Q - L.mainAxis, oe = v ? -T[N] / 2 + F + B + G + L.mainAxis : D + B + G + L.mainAxis, Ce = t.elements.arrow && Ns(t.elements.arrow), ye = Ce ? C === "y" ? Ce.clientTop || 0 : Ce.clientLeft || 0 : 0, fe = ($ = M == null ? void 0 : M[C]) != null ? $ : 0, se = j + ee - fe - ye, Re = j + oe - fe, Ne = Ui(d ? ya(A, se) : A, j, d ? Zr(z, Re) : z);
      k[C] = Ne, g[C] = Ne - j;
    }
    if (l) {
      var be, W = C === "x" ? Wt : Ut, te = C === "x" ? yn : vn, pe = k[E], ze = E === "y" ? "height" : "width", Ae = pe + b[W], Le = pe - b[te], He = [Wt, Ut].indexOf(m) !== -1, dt = (be = M == null ? void 0 : M[E]) != null ? be : 0, _e = He ? Ae : pe - T[ze] - R[ze] - dt + L.altAxis, he = He ? pe + T[ze] + R[ze] - dt - L.altAxis : Le, Be = d && He ? ZE(_e, pe, he) : Ui(d ? _e : Ae, pe, d ? he : Le);
      k[E] = Be, g[E] = Be - pe;
    }
    t.modifiersData[r] = g;
  }
}
const IT = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: PT,
  requiresIfExists: ["offset"]
};
function MT(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function $T(e) {
  return e === en(e) || !mn(e) ? fp(e) : MT(e);
}
function OT(e) {
  var t = e.getBoundingClientRect(), n = ei(t.width) / e.offsetWidth || 1, r = ei(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function AT(e, t, n) {
  n === void 0 && (n = !1);
  var r = mn(t), o = mn(t) && OT(t), i = zr(t), s = ti(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Un(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  mp(i)) && (l = $T(t)), mn(t) ? (a = ti(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = pp(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function NT(e) {
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
function LT(e) {
  var t = NT(e);
  return KE.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function jT(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function zT(e) {
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
var zh = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function _h() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function _T(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? zh : o;
  return function(l, a, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, zh, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, f = [], y = !1, d = {
      state: c,
      setOptions: function(m) {
        var p = typeof m == "function" ? m(c.options) : m;
        w(), c.options = Object.assign({}, i, c.options, p), c.scrollParents = {
          reference: so(l) ? Hi(l) : l.contextElement ? Hi(l.contextElement) : [],
          popper: Hi(a)
        };
        var v = LT(zT([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = v.filter(function(C) {
          return C.enabled;
        }), x(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var m = c.elements, p = m.reference, v = m.popper;
          if (_h(p, v)) {
            c.rects = {
              reference: AT(p, Ns(v), c.options.strategy === "fixed"),
              popper: cp(v)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(L) {
              return c.modifiersData[L.name] = Object.assign({}, L.data);
            });
            for (var C = 0; C < c.orderedModifiers.length; C++) {
              if (c.reset === !0) {
                c.reset = !1, C = -1;
                continue;
              }
              var E = c.orderedModifiers[C], k = E.fn, T = E.options, R = T === void 0 ? {} : T, I = E.name;
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
      update: jT(function() {
        return new Promise(function(b) {
          d.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        w(), y = !0;
      }
    };
    if (!_h(l, a))
      return d;
    d.setOptions(u).then(function(b) {
      !y && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function x() {
      c.orderedModifiers.forEach(function(b) {
        var m = b.name, p = b.options, v = p === void 0 ? {} : p, C = b.effect;
        if (typeof C == "function") {
          var E = C({
            state: c,
            name: m,
            instance: d,
            options: v
          }), k = function() {
          };
          f.push(E || k);
        }
      });
    }
    function w() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return d;
  };
}
var FT = [aT, TT, sT, QE, kT, xT, IT, nT, wT], DT = /* @__PURE__ */ _T({
  defaultModifiers: FT
});
function e1(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : W0(n, r), {
    props: l,
    internalRef: a
  } = U0({
    ...i,
    externalSlotProps: s
  }), u = tt(a, s == null ? void 0 : s.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return B0(t, {
    ...l,
    ref: u
  }, r);
}
function co(e) {
  var t;
  return parseInt(h.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function BT(e) {
  return typeof e == "function" ? e() : e;
}
const t1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = h.useState(null), a = tt(/* @__PURE__ */ h.isValidElement(r) ? co(r) : null, n);
  if (et(() => {
    i || l(BT(o) || document.body);
  }, [o, i]), et(() => {
    if (s && !i)
      return Td(n, s), () => {
        Td(n, null);
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
  return s && /* @__PURE__ */ jv.createPortal(r, s);
});
function WT(e) {
  return ae("MuiPopper", e);
}
le("MuiPopper", ["root"]);
function UT(e, t) {
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
function n1(e) {
  return typeof e == "function" ? e() : e;
}
function HT(e) {
  return e.nodeType !== void 0;
}
const VT = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, WT, t);
}, KT = {}, YT = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: u,
    popperOptions: c,
    popperRef: f,
    slotProps: y = {},
    slots: d = {},
    TransitionProps: x,
    // @ts-ignore internal logic
    ownerState: w,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...b
  } = t, m = h.useRef(null), p = tt(m, n), v = h.useRef(null), C = tt(v, f), E = h.useRef(C);
  et(() => {
    E.current = C;
  }, [C]), h.useImperativeHandle(f, () => v.current, []);
  const k = UT(u, i), [T, R] = h.useState(k), I = h.useMemo(() => n1(r), [r]);
  h.useEffect(() => {
    v.current && v.current.forceUpdate();
  }), et(() => {
    if (!I || !a)
      return;
    const P = (A) => {
      R(A.placement);
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
        P(A);
      }
    }];
    l != null && (O = O.concat(l)), c && c.modifiers != null && (O = O.concat(c.modifiers));
    const N = DT(I, m.current, {
      placement: k,
      ...c,
      modifiers: O
    });
    E.current(N);
    const j = m.current;
    return () => {
      if (j) {
        const {
          style: A
        } = j, z = A.position, F = A.top, H = A.left, D = A.transform;
        N.destroy(), A.position = z, A.top = F, A.left = H, A.transform = D;
      } else
        N.destroy();
      E.current(null);
    };
  }, [I, s, l, a, c, k]);
  const L = {
    placement: T
  };
  x !== null && (L.TransitionProps = x);
  const M = VT(t), g = d.root ?? "div", $ = e1({
    elementType: g,
    externalSlotProps: y.root,
    externalForwardedProps: b,
    additionalProps: {
      role: "tooltip",
      ref: p
    },
    ownerState: t,
    className: M.root
  });
  return /* @__PURE__ */ S.jsx(g, {
    ...$,
    children: typeof o == "function" ? o(L) : o
  });
}), GT = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: u,
    open: c,
    placement: f = "bottom",
    popperOptions: y = KT,
    popperRef: d,
    style: x,
    transition: w = !1,
    slotProps: b = {},
    slots: m = {},
    ...p
  } = t, [v, C] = h.useState(!0), E = () => {
    C(!1);
  }, k = () => {
    C(!0);
  };
  if (!a && !c && (!w || v))
    return null;
  let T;
  if (i)
    T = i;
  else if (r) {
    const L = n1(r);
    T = L && HT(L) ? rt(L).body : rt(null).body;
  }
  const R = !c && a && (!w || v) ? "none" : void 0, I = w ? {
    in: c,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ S.jsx(t1, {
    disablePortal: l,
    container: T,
    children: /* @__PURE__ */ S.jsx(YT, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: w ? !v : c,
      placement: f,
      popperOptions: y,
      popperRef: d,
      slotProps: b,
      slots: m,
      ...p,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: R,
        ...x
      },
      TransitionProps: I,
      children: o
    })
  });
}), QT = K(GT, {
  name: "MuiPopper",
  slot: "Root"
})({}), r1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = C0(), o = ce({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: c,
    open: f,
    placement: y,
    popperOptions: d,
    popperRef: x,
    transition: w,
    slots: b,
    slotProps: m,
    ...p
  } = o, v = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: c,
    open: f,
    placement: y,
    popperOptions: d,
    popperRef: x,
    transition: w,
    ...p
  };
  return /* @__PURE__ */ S.jsx(QT, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: b,
    slotProps: m,
    ...v,
    ref: n
  });
}), XT = it(/* @__PURE__ */ S.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function qT(e) {
  return ae("MuiChip", e);
}
const Pe = le("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), ZT = (e) => {
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
  return ue(a, qT, t);
}, JT = K("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => Vt(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
      [`& .${Pe.avatar}`]: t.avatar
    }, {
      [`& .${Pe.icon}`]: t.icon
    }, {
      [`& .${Pe.deleteIcon}`]: t.deleteIcon
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
    ...ct(e, ["background-color", "box-shadow"]),
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
    [`&.${Pe.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Pe.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Pe.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Pe.deleteIcon}`]: {
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
        [`& .${Pe.avatar}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark
        }
      }
    }, {
      props: {
        color: "secondary"
      },
      style: {
        [`& .${Pe.avatar}`]: {
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
        [`& .${Pe.avatar}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10)
        },
        [`& .${Pe.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Pe.deleteIcon}`]: {
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
        [`& .${Pe.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${Pe.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${Pe.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Pe.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter($t(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${Pe.focusVisible}`]: {
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
        [`&.${Pe.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
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
        [`&:hover, &.${Pe.focusVisible}`]: {
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
        [`&.${Pe.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Pe.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Pe.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Pe.icon}`]: {
          marginLeft: 4
        },
        [`& .${Pe.deleteIcon}`]: {
          marginRight: 5
        }
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        [`& .${Pe.avatar}`]: {
          marginLeft: 2
        },
        [`& .${Pe.icon}`]: {
          marginLeft: 2
        },
        [`& .${Pe.deleteIcon}`]: {
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
        [`&.${Pe.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
        },
        [`&.${Pe.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
        },
        [`& .${Pe.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), eR = K("span", {
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
function Fh(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const ki = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    icon: f,
    label: y,
    onClick: d,
    onDelete: x,
    onKeyDown: w,
    onKeyUp: b,
    size: m = "medium",
    variant: p = "filled",
    tabIndex: v,
    skipFocusWhenDisabled: C = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: E = {},
    slotProps: k = {},
    ...T
  } = r, {
    nativeButton: R,
    ...I
  } = T, L = h.useRef(null), M = tt(L, n), g = (B) => {
    B.stopPropagation(), x(B);
  }, $ = (B) => {
    B.currentTarget === B.target && Fh(B) && B.preventDefault(), w && w(B);
  }, P = (B) => {
    B.currentTarget === B.target && x && Fh(B) && x(B), b && b(B);
  }, O = s !== !1 && d ? !0 : s, N = O || x ? vs : a || "div", j = {
    ...r,
    component: N,
    disabled: c,
    size: m,
    color: l,
    iconColor: /* @__PURE__ */ h.isValidElement(f) && f.props.color || l,
    onDelete: !!x,
    clickable: O,
    variant: p
  }, A = ZT(j), z = N === vs ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: A.focusVisible,
    ...x && {
      disableRipple: !0
    },
    ...R !== void 0 && {
      nativeButton: R
    }
  } : {};
  let F = null;
  x && (F = u && /* @__PURE__ */ h.isValidElement(u) ? /* @__PURE__ */ h.cloneElement(u, {
    className: J(u.props.className, A.deleteIcon),
    onClick: g
  }) : /* @__PURE__ */ S.jsx(XT, {
    className: A.deleteIcon,
    onClick: g
  }));
  let H = null;
  o && /* @__PURE__ */ h.isValidElement(o) && (H = /* @__PURE__ */ h.cloneElement(o, {
    className: J(A.avatar, o.props.className)
  }));
  let D = null;
  f && /* @__PURE__ */ h.isValidElement(f) && (D = /* @__PURE__ */ h.cloneElement(f, {
    className: J(A.icon, f.props.className)
  }));
  const X = {
    slots: E,
    slotProps: k
  }, [Y, q] = ve("root", {
    elementType: JT,
    externalForwardedProps: {
      ...X,
      ...I
    },
    ownerState: j,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: M,
    className: J(A.root, i),
    additionalProps: {
      disabled: O && c ? !0 : void 0,
      tabIndex: C && c ? -1 : v,
      ...z
    },
    getSlotProps: (B) => ({
      ...B,
      onClick: (ee) => {
        var oe;
        (oe = B.onClick) == null || oe.call(B, ee), d == null || d(ee);
      },
      onKeyDown: (ee) => {
        var oe;
        (oe = B.onKeyDown) == null || oe.call(B, ee), $(ee);
      },
      onKeyUp: (ee) => {
        var oe;
        (oe = B.onKeyUp) == null || oe.call(B, ee), P(ee);
      }
    })
  }), [Q, G] = ve("label", {
    elementType: eR,
    externalForwardedProps: X,
    ownerState: j,
    className: A.label
  });
  return /* @__PURE__ */ S.jsxs(Y, {
    as: N,
    ...q,
    children: [H || D, /* @__PURE__ */ S.jsx(Q, {
      ...G,
      children: y
    }), F]
  });
}), tR = it(/* @__PURE__ */ S.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), nR = {
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
}, rR = {
  opacity: 0,
  visibility: "hidden"
}, o1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = uo(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: u,
    in: c,
    onEnter: f,
    onEntered: y,
    onEntering: d,
    onExit: x,
    onExited: w,
    onExiting: b,
    style: m,
    timeout: p = o,
    ...v
  } = t, C = lp(r.motion.reducedMotion, a), E = h.useRef(null), k = tt(E, co(l), n), T = dn(E, d), R = dn(E, (P, O) => {
    C.shouldReduceMotion || np(P);
    const N = da({
      style: m,
      timeout: p,
      easing: u
    }, {
      mode: "enter"
    }), j = C.getTransitionTiming({
      duration: N.duration,
      delay: N.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: j.duration,
      easing: N.easing,
      delay: j.delay
    }), f && f(P, O);
  }), I = dn(E, y), L = dn(E, b), M = dn(E, (P) => {
    const O = da({
      style: m,
      timeout: p,
      easing: u
    }, {
      mode: "exit"
    }), N = C.getTransitionTiming({
      duration: O.duration,
      delay: O.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: O.easing,
      delay: N.delay
    }), x && x(P);
  }), g = dn(E, (P) => {
    P.style.transition = "", w && w(P);
  }), $ = i ? (P) => {
    i(E.current, P);
  } : void 0;
  return /* @__PURE__ */ S.jsx(_0, {
    appear: s,
    in: c,
    nodeRef: E,
    onEnter: R,
    onEntered: I,
    onEntering: T,
    onExit: M,
    onExited: g,
    onExiting: L,
    addEndListener: $,
    reduceMotion: C.shouldReduceMotion,
    timeout: p,
    ...v,
    children: (P, {
      ownerState: O,
      ...N
    }) => {
      const j = j0(P, c, nR, rR, m, l.props.style);
      return /* @__PURE__ */ h.cloneElement(l, {
        style: j,
        ref: k,
        ...N
      });
    }
  });
});
function oR(e) {
  return ae("MuiBackdrop", e);
}
le("MuiBackdrop", ["root", "invisible"]);
const iR = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ue({
    root: ["root", n && "invisible"]
  }, oR, t);
}, sR = K("div", {
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
}), i1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    transitionDuration: f,
    ...y
  } = r, d = {
    ...r,
    component: s,
    invisible: l
  }, x = iR(d), w = {
    component: s,
    slots: c,
    slotProps: u
  }, [b, m] = ve("root", {
    elementType: sR,
    externalForwardedProps: w,
    className: J(x.root, i),
    ownerState: d
  }), [p, v] = ve("transition", {
    elementType: o1,
    externalForwardedProps: w,
    ownerState: d
  });
  return /* @__PURE__ */ S.jsx(p, {
    in: a,
    timeout: f,
    ...y,
    ...v,
    children: /* @__PURE__ */ S.jsx(b, {
      ...m,
      ref: n,
      children: o
    })
  });
}), lR = le("MuiBox", ["root"]), aR = xu(), kn = wb({
  themeId: Dn,
  defaultTheme: aR,
  defaultClassName: lR.root,
  generateClassName: m0.generate
});
function uR(e) {
  return ae("MuiButton", e);
}
const Br = le("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), cR = /* @__PURE__ */ h.createContext({}), dR = /* @__PURE__ */ h.createContext(void 0), fR = (e) => {
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
    root: ["root", s && "loading", i, `size${ie(o)}`, `color${ie(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${ie(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, c = ue(u, uR, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, s1 = [{
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
}], pR = K(vs, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
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
    ...ct(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Br.disabled}`]: {
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
        [`&.${Br.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Br.disabled}`]: {
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
        [`&.${Br.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter($t()).map(([r]) => ({
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
        [`&.${Br.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Br.disabled}`]: {
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
        ...ct(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Br.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), mR = K("span", {
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
      ...ct(e, ["opacity"], {
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
  }, ...s1]
})), hR = K("span", {
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
      ...ct(e, ["opacity"], {
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
  }, ...s1]
})), gR = K("span", {
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
})), Dh = K("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), pr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = h.useContext(cR), o = h.useContext(dR), i = ys(r, t), s = ce({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: u = "button",
    className: c,
    disabled: f = !1,
    disableElevation: y = !1,
    disableFocusRipple: d = !1,
    endIcon: x,
    focusVisibleClassName: w,
    fullWidth: b = !1,
    id: m,
    loading: p = null,
    loadingIndicator: v,
    loadingPosition: C = "center",
    size: E = "medium",
    startIcon: k,
    type: T,
    variant: R = "text",
    ...I
  } = s, L = lr(m), M = v ?? /* @__PURE__ */ S.jsx(ga, {
    "aria-labelledby": L,
    color: "inherit",
    size: 16
  }), g = {
    ...s,
    color: a,
    component: u,
    disabled: f,
    disableElevation: y,
    disableFocusRipple: d,
    fullWidth: b,
    loading: p,
    loadingIndicator: M,
    loadingPosition: C,
    size: E,
    type: T,
    variant: R
  }, $ = fR(g), P = (k || p && C === "start") && /* @__PURE__ */ S.jsx(mR, {
    className: $.startIcon,
    ownerState: g,
    children: k || /* @__PURE__ */ S.jsx(Dh, {
      className: $.loadingIconPlaceholder,
      ownerState: g
    })
  }), O = (x || p && C === "end") && /* @__PURE__ */ S.jsx(hR, {
    className: $.endIcon,
    ownerState: g,
    children: x || /* @__PURE__ */ S.jsx(Dh, {
      className: $.loadingIconPlaceholder,
      ownerState: g
    })
  }), N = o || "", j = typeof p == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ S.jsx("span", {
      className: $.loadingWrapper,
      style: {
        display: "contents"
      },
      children: p && /* @__PURE__ */ S.jsx(gR, {
        className: $.loadingIndicator,
        ownerState: g,
        children: M
      })
    })
  ) : null, {
    root: A,
    ...z
  } = $;
  return /* @__PURE__ */ S.jsxs(pR, {
    ownerState: g,
    className: J(r.className, $.root, c, N),
    component: u,
    disabled: f || p,
    focusRipple: !d,
    focusVisibleClassName: J($.focusVisible, w),
    ref: n,
    internalNativeButton: !0,
    type: T,
    id: p ? L : m,
    ...I,
    classes: z,
    children: [P, C !== "end" && j, l, C === "end" && j, O]
  });
});
function yR(e) {
  return ae("MuiCard", e);
}
le("MuiCard", ["root"]);
const vR = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, yR, t);
}, xR = K(jr, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), SR = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1,
    ...s
  } = r, l = {
    ...r,
    raised: i
  }, a = vR(l);
  return /* @__PURE__ */ S.jsx(xR, {
    className: J(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function wR(e) {
  return ae("MuiCardContent", e);
}
le("MuiCardContent", ["root"]);
const CR = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, wR, t);
}, bR = K("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), kR = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = CR(l);
  return /* @__PURE__ */ S.jsx(bR, {
    as: i,
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function Bh(e) {
  return e.substring(2).toLowerCase();
}
function ER(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function TR(e) {
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
  const c = tt(co(t), l), f = Xe((x) => {
    const w = u.current;
    u.current = !1;
    const b = rt(l.current);
    if (!a.current || !l.current || "clientX" in x && ER(x, b))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let m;
    x.composedPath ? m = x.composedPath().includes(l.current) : m = !Uo(b.documentElement, x.target) || Uo(l.current, x.target), !m && (n || !w) && o(x);
  }), y = (x) => (w) => {
    u.current = !0;
    const b = t.props[x];
    b && b(w);
  }, d = {
    ref: c
  };
  return i !== !1 && (d[i] = y(i)), h.useEffect(() => {
    if (i !== !1) {
      const x = Bh(i), w = rt(l.current), b = () => {
        s.current = !0;
      };
      return w.addEventListener(x, f), w.addEventListener("touchmove", b), () => {
        w.removeEventListener(x, f), w.removeEventListener("touchmove", b);
      };
    }
  }, [f, i]), r !== !1 && (d[r] = y(r)), h.useEffect(() => {
    if (r !== !1) {
      const x = Bh(r), w = rt(l.current);
      return w.addEventListener(x, f), () => {
        w.removeEventListener(x, f);
      };
    }
  }, [f, r]), /* @__PURE__ */ h.cloneElement(t, d);
}
function l1(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function RR(e) {
  const t = rt(e);
  return e === t.body || e === t.documentElement ? ar(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Vi(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Wh(e) {
  return parseFloat(ar(e).getComputedStyle(e).paddingRight) || 0;
}
function PR(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Uh(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !PR(s);
    l && a && Vi(s, o);
  });
}
function IR(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = rt(r).body;
    else {
      const s = r.parentElement, l = ar(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (RR(i)) {
      const s = l1(ar(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${Wh(i) + s}px`;
      const l = rt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${Wh(a) + s}px`;
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
function MR(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class $R {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Vi(t.modalRef, !1);
    const o = MR(n);
    Uh(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = IR(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Vi(t.modalRef, n), Uh(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Vi(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Ad = "data-mui-focusable";
function Hh(e) {
  return e ? e.hasAttribute(Ad) ? e : e.querySelector(`[${Ad}]`) : null;
}
const OR = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function a1(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function AR(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function NR(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || AR(e));
}
function LR(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(OR)).forEach((r, o) => {
    const i = a1(r);
    i === -1 || !NR(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function jR() {
  return !0;
}
function zR(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = LR,
    isEnabled: s = jR,
    open: l
  } = e, a = h.useRef(!1), u = h.useRef(null), c = h.useRef(null), f = h.useRef(null), y = h.useRef(null), d = h.useRef(!1), x = h.useRef(null), w = tt(co(t), x), b = h.useRef(null);
  h.useEffect(() => {
    !l || !x.current || (d.current = !n);
  }, [n, l]), h.useEffect(() => {
    if (a.current = !1, !l || !x.current)
      return;
    const v = rt(x.current), C = Jn(v), E = Hh(x.current) ?? x.current;
    return Uo(x.current, C) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), d.current && E.focus()), () => {
      !o && f.current && (a.current = !0, f.current.focus(), f.current = null);
    };
  }, [l]), h.useEffect(() => {
    if (!l || !x.current)
      return;
    const v = rt(x.current), C = (T) => {
      if (b.current = T, r || !s() || T.key !== "Tab")
        return;
      const R = x.current, I = Jn(v);
      if (R === null)
        return;
      const L = Hh(R);
      if (I === R || I === L) {
        const g = i(R);
        if (g.length === 0)
          return;
        T.preventDefault(), T.shiftKey ? g[g.length - 1].focus() : g[0].focus();
        return;
      }
      if (Uo(R, I)) {
        const g = i(R), $ = g.indexOf(I);
        if ($ === -1 || !g.some((N) => a1(N) > 0))
          return;
        T.preventDefault();
        let O = 0;
        T.shiftKey ? O = $ <= 0 ? g.length - 1 : $ - 1 : O = $ === g.length - 1 ? 0 : $ + 1, g[O].focus();
      }
    }, E = () => {
      var L, M;
      const T = x.current;
      if (T === null)
        return;
      const R = Jn(v);
      if (!v.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (Uo(T, R) || r && R !== u.current && R !== c.current)
        return;
      if (R !== y.current)
        y.current = null;
      else if (y.current !== null)
        return;
      if (!d.current)
        return;
      let I = [];
      if ((R === u.current || R === c.current) && (I = i(x.current)), I.length > 0) {
        const g = !!((L = b.current) != null && L.shiftKey && ((M = b.current) == null ? void 0 : M.key) === "Tab"), $ = I[0], P = I[I.length - 1];
        typeof $ != "string" && typeof P != "string" && (g ? P.focus() : $.focus());
      } else
        T.focus();
    };
    v.addEventListener("focusin", E), v.addEventListener("keydown", C, !0);
    const k = setInterval(() => {
      const T = Jn(v);
      T && T.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), v.removeEventListener("focusin", E), v.removeEventListener("keydown", C, !0);
    };
  }, [n, r, o, s, l, i]);
  const m = (v) => {
    f.current === null && (f.current = v.relatedTarget), d.current = !0, y.current = v.target;
    const C = t.props.onFocus;
    C && C(v);
  }, p = (v) => {
    f.current === null && (f.current = v.relatedTarget), d.current = !0;
  };
  return /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ S.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ h.cloneElement(t, {
      ref: w,
      onFocus: m
    }), /* @__PURE__ */ S.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function _R(e) {
  return typeof e == "function" ? e() : e;
}
function FR(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Vh = () => {
}, ul = new $R();
function DR(e) {
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
  } = e, c = h.useRef({}), f = h.useRef(null), y = h.useRef(null), d = h.useRef(null), x = tt(d, u), [w, b] = h.useState(!a), m = FR(s);
  let p = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (p = !1);
  const v = () => rt(f.current), C = () => (c.current.modalRef = d.current, c.current.mount = f.current, c.current), E = () => {
    ul.mount(C(), {
      disableScrollLock: n
    }), d.current && (d.current.scrollTop = 0);
  }, k = Xe(() => {
    const N = _R(t) || v().body;
    ul.add(C(), N), d.current && E();
  }), T = () => ul.isTopModal(C()), R = Xe((N) => {
    f.current = N, N && (y.current = N, a && T() ? E() : d.current && Vi(d.current, p));
  }), I = h.useCallback(() => {
    ul.remove(C(), p);
  }, [p]);
  h.useEffect(() => () => {
    I();
  }, [I]), h.useEffect(() => {
    a ? k() : (!m || !r) && I();
  }, [a, I, m, r, k]);
  const L = (N) => (j) => {
    var A;
    (A = N.onKeyDown) == null || A.call(N, j), !(j.key !== "Escape" || j.which === 229 || // Wait until IME is settled.
    !T()) && (j.stopPropagation(), l && l(j, "escapeKeyDown"));
  }, M = (N) => (j) => {
    var A;
    (A = N.onClick) == null || A.call(N, j), j.target === j.currentTarget && l && l(j, "backdropClick");
  }, g = (N = {}) => {
    const j = pa(e);
    delete j.onTransitionEnter, delete j.onTransitionExited;
    const A = {
      ...j,
      ...N
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
      onKeyDown: L(A),
      ref: x
    };
  }, $ = (N = {}) => {
    const j = N;
    return {
      "aria-hidden": !0,
      ...j,
      onClick: M(j),
      open: a
    };
  }, P = () => {
    const N = () => {
      b(!1), o && o();
    }, j = () => {
      b(!0), i && i(), r && I();
    };
    return {
      onEnter: Sh(N, (s == null ? void 0 : s.props.onEnter) ?? Vh),
      onExited: Sh(j, (s == null ? void 0 : s.props.onExited) ?? Vh)
    };
  }, O = !a && m && !w ? y.current ?? t : t;
  return {
    getRootProps: g,
    getBackdropProps: $,
    getTransitionProps: P,
    rootRef: x,
    portalRef: R,
    portalContainer: O,
    isTopModal: T,
    exited: w,
    hasTransition: m
  };
}
function BR(e) {
  return ae("MuiModal", e);
}
le("MuiModal", ["root", "hidden", "backdrop"]);
const WR = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ue({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, BR, r);
}, UR = K("div", {
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
}))), HR = K(i1, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), u1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    disableEnforceFocus: f = !1,
    disablePortal: y = !1,
    disableRestoreFocus: d = !1,
    disableScrollLock: x = !1,
    hideBackdrop: w = !1,
    keepMounted: b = !1,
    onClose: m,
    onTransitionEnter: p,
    onTransitionExited: v,
    open: C,
    slotProps: E = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: T,
    ...R
  } = r, I = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: c,
    disableEnforceFocus: f,
    disablePortal: y,
    disableRestoreFocus: d,
    disableScrollLock: x,
    hideBackdrop: w,
    keepMounted: b
  }, {
    getRootProps: L,
    getBackdropProps: M,
    getTransitionProps: g,
    portalRef: $,
    portalContainer: P,
    isTopModal: O,
    exited: N,
    hasTransition: j
  } = DR({
    ...I,
    rootRef: n
  }), A = {
    ...I,
    exited: N
  }, z = WR(A), F = {};
  if (l.props.tabIndex === void 0 && (F.tabIndex = "-1"), j) {
    const {
      onEnter: Q,
      onExited: G
    } = g();
    F.onEnter = Q, F.onExited = G;
  }
  const H = {
    slots: k,
    slotProps: E
  }, [D, X] = ve("root", {
    ref: n,
    elementType: UR,
    externalForwardedProps: {
      ...H,
      ...R,
      component: u
    },
    getSlotProps: L,
    ownerState: A,
    className: J(i, z == null ? void 0 : z.root, !A.open && A.exited && (z == null ? void 0 : z.hidden))
  }), [Y, q] = ve("backdrop", {
    elementType: HR,
    externalForwardedProps: H,
    shouldForwardComponentProp: !0,
    getSlotProps: (Q) => M({
      ...Q,
      onClick: (G) => {
        Q != null && Q.onClick && Q.onClick(G);
      }
    }),
    className: z == null ? void 0 : z.backdrop,
    ownerState: A
  });
  return !b && !C && (!j || N) ? null : /* @__PURE__ */ S.jsx(t1, {
    ref: $,
    container: P,
    disablePortal: y,
    children: /* @__PURE__ */ S.jsxs(D, {
      ...X,
      children: [w ? null : /* @__PURE__ */ S.jsx(Y, {
        ...q
      }), /* @__PURE__ */ S.jsx(zR, {
        disableEnforceFocus: f,
        disableAutoFocus: c,
        disableRestoreFocus: d,
        isEnabled: O,
        open: C,
        children: /* @__PURE__ */ h.cloneElement(l, F)
      })]
    })
  });
});
function VR(e) {
  return ae("MuiDialog", e);
}
le("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const c1 = /* @__PURE__ */ h.createContext({}), KR = K(i1, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), YR = (e) => {
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
  return ue(s, VR, t);
}, GR = K(u1, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), QR = K("div", {
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
}), XR = K(jr, {
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
}))), hc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiDialog"
  }), o = uo(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: u,
    className: c,
    fullScreen: f = !1,
    fullWidth: y = !1,
    maxWidth: d = "sm",
    onClick: x,
    onClose: w,
    open: b,
    PaperComponent: m = jr,
    role: p = "dialog",
    scroll: v = "paper",
    slots: C = {},
    slotProps: E = {},
    transitionDuration: k = i,
    ...T
  } = r, R = {
    ...r,
    fullScreen: f,
    fullWidth: y,
    maxWidth: d,
    scroll: v
  }, I = YR(R), L = h.useRef(), M = (Q) => {
    L.current = Q.target === Q.currentTarget;
  }, g = (Q) => {
    x && x(Q), L.current && (L.current = null, w && w(Q, "backdropClick"));
  }, $ = lr(l), P = h.useMemo(() => ({
    titleId: $
  }), [$]), O = {
    slots: C,
    slotProps: E
  }, [N, j] = ve("root", {
    elementType: GR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    ownerState: R,
    className: J(I.root, c),
    ref: n
  }), [A, z] = ve("backdrop", {
    elementType: KR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    ownerState: R,
    className: I.backdrop
  }), [F, H] = ve("paper", {
    elementType: XR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    ownerState: R,
    className: I.paper,
    additionalProps: {
      elevation: 24,
      role: p,
      "aria-describedby": s,
      "aria-labelledby": $,
      "aria-modal": a,
      tabIndex: -1,
      [Ad]: ""
    }
  }), [D, X] = ve("container", {
    elementType: QR,
    externalForwardedProps: O,
    ownerState: R,
    className: I.container
  }), [Y, q] = ve("transition", {
    elementType: o1,
    externalForwardedProps: O,
    ownerState: R,
    additionalProps: {
      appear: !0,
      in: b,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ S.jsx(N, {
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
    onClose: w,
    open: b,
    onClick: g,
    ...j,
    ...T,
    children: /* @__PURE__ */ S.jsx(Y, {
      ...q,
      children: /* @__PURE__ */ S.jsx(D, {
        onMouseDown: M,
        ...X,
        children: /* @__PURE__ */ S.jsx(F, {
          as: m,
          ...H,
          children: /* @__PURE__ */ S.jsx(c1.Provider, {
            value: P,
            children: u
          })
        })
      })
    })
  });
});
function qR(e) {
  return ae("MuiDialogActions", e);
}
le("MuiDialogActions", ["root", "spacing"]);
const ZR = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return ue({
    root: ["root", !n && "spacing"]
  }, qR, t);
}, JR = K("div", {
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
}), gc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, l = {
    ...r,
    disableSpacing: i
  }, a = ZR(l);
  return /* @__PURE__ */ S.jsx(JR, {
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function eP(e) {
  return ae("MuiDialogContent", e);
}
le("MuiDialogContent", ["root", "dividers"]);
function tP(e) {
  return ae("MuiDialogTitle", e);
}
const nP = le("MuiDialogTitle", ["root"]), rP = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return ue({
    root: ["root", n && "dividers"]
  }, eP, t);
}, oP = K("div", {
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
      [`.${nP.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), yc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, l = {
    ...r,
    dividers: i
  }, a = rP(l);
  return /* @__PURE__ */ S.jsx(oP, {
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function iP(e) {
  return ae("MuiDialogContentText", e);
}
le("MuiDialogContentText", ["root"]);
const sP = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"]
  }, iP, t);
  return {
    ...t,
    // forward classes to the Typography
    ...r
  };
}, lP = K(tr, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiDialogContentText",
  slot: "Root"
})({}), vc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiDialogContentText"
  }), {
    children: o,
    className: i,
    ...s
  } = r, l = sP(s);
  return /* @__PURE__ */ S.jsx(lP, {
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: n,
    ownerState: s,
    className: J(l.root, i),
    ...r,
    classes: l
  });
}), aP = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, tP, t);
}, uP = K(tr, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), xc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = aP(l), {
    titleId: u = i
  } = h.useContext(c1);
  return /* @__PURE__ */ S.jsx(uP, {
    component: "h2",
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
}), Kh = le("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function d1(e) {
  return ae("MuiSelect", e);
}
const Vr = le("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), cP = (e) => {
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
  }, u = ue(a, u2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, dP = K(Cu, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Su(e, t), !n.disableUnderline && t.underline];
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
    ...ct(e, "background-color", {
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
    [`&.${Dr.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Dr.disabled}`]: {
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
          ...ct(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Dr.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Dr.error}`]: {
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
          ...ct(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Dr.disabled}, .${Dr.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Dr.disabled}:before`]: {
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
        [`&.${Vr.root}`]: {
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
})), fP = K(bu, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: wu
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
}))), hp = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    slots: f = {},
    type: y = "text",
    ...d
  } = r, x = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: y
  }, w = cP(r), b = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, m = c ? wt(b, c) : b, p = f.root ?? dP, v = f.input ?? fP;
  return /* @__PURE__ */ S.jsx(op, {
    slots: {
      root: p,
      input: v
    },
    slotProps: m,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    ref: n,
    type: y,
    ...d,
    classes: w
  });
});
hp.muiName = "Input";
function pP(e) {
  return ae("MuiFormControl", e);
}
le("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const mP = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ie(n)}`, r && "fullWidth"]
  };
  return ue(o, pP, t);
}, hP = K("div", {
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
}), gP = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    fullWidth: f = !1,
    hiddenLabel: y = !1,
    margin: d = "none",
    required: x = !1,
    size: w = "medium",
    variant: b = "outlined",
    ...m
  } = r, p = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    error: u,
    fullWidth: f,
    hiddenLabel: y,
    margin: d,
    required: x,
    size: w,
    variant: b
  }, v = mP(p), [C, E] = h.useState(() => {
    let O = !1;
    return o && h.Children.forEach(o, (N) => {
      if (!dc(N, ["Input", "Select"]))
        return;
      const j = dc(N, ["Select"]) ? N.props.input : N;
      j && n2(j.props) && (O = !0);
    }), O;
  }), [k, T] = h.useState(() => {
    let O = !1;
    return o && h.Children.forEach(o, (N) => {
      dc(N, ["Input", "Select"]) && (ca(N.props, !0) || ca(N.props.inputProps, !0)) && (O = !0);
    }), O;
  }), [R, I] = h.useState(!1);
  a && R && I(!1);
  const L = c !== void 0 && !a ? c : R;
  let M;
  h.useRef(!1);
  const g = h.useCallback(() => {
    T(!0);
  }, []), $ = h.useCallback(() => {
    T(!1);
  }, []), P = h.useMemo(() => ({
    adornedStart: C,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: u,
    filled: k,
    focused: L,
    fullWidth: f,
    hiddenLabel: y,
    size: w,
    onBlur: () => {
      I(!1);
    },
    onFocus: () => {
      I(!0);
    },
    onEmpty: $,
    onFilled: g,
    registerEffect: M,
    required: x,
    variant: b
  }), [C, s, a, u, k, L, f, y, M, $, g, x, w, b]);
  return /* @__PURE__ */ S.jsx(Os.Provider, {
    value: P,
    children: /* @__PURE__ */ S.jsx(hP, {
      as: l,
      ownerState: p,
      className: J(v.root, i),
      ref: n,
      ...m,
      children: o
    })
  });
});
var Yh;
const yP = (e) => {
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
    root: ["root", o && "disabled", i && "error", r && `size${ie(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return ue(u, c2, t);
}, vP = K("p", {
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
  [`&.${xh.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${xh.error}`]: {
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
}))), xP = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    margin: f,
    required: y,
    variant: d,
    ...x
  } = r, [w] = li({
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
  const m = yP(b);
  return /* @__PURE__ */ S.jsx(vP, {
    as: s,
    className: J(m.root, i),
    ref: n,
    ...x,
    ownerState: b,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Yh || (Yh = /* @__PURE__ */ S.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), SP = (e) => {
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
  return ue(a, d2, t);
}, wP = K("label", {
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
  variants: [...Object.entries(e.palette).filter($t()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Wi.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Wi.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Wi.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), CP = K("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(xe(({
  theme: e
}) => ({
  [`&.${Wi.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), bP = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    focused: f,
    required: y,
    ...d
  } = r, [x] = li({
    props: r,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), w = {
    ...r,
    color: x.color || "primary",
    component: l,
    disabled: x.disabled,
    error: x.error,
    filled: x.filled,
    focused: x.focused,
    required: x.required
  }, b = SP(w);
  return /* @__PURE__ */ S.jsxs(wP, {
    as: l,
    ownerState: w,
    className: J(b.root, i),
    ref: n,
    ...d,
    children: [o, x.required && /* @__PURE__ */ S.jsxs(CP, {
      ownerState: w,
      "aria-hidden": !0,
      className: b.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Ki(e) {
  return `scale(${e}, ${e ** 2})`;
}
const kP = {
  entering: {
    opacity: 1,
    transform: Ki(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: Ki(0.75)
  },
  exited: {
    opacity: 0,
    transform: Ki(0.75)
  }
}, EP = {
  opacity: 0,
  transform: Ki(0.75),
  visibility: "hidden"
}, ws = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: u,
    onEntered: c,
    onEntering: f,
    onExit: y,
    onExited: d,
    onExiting: x,
    style: w,
    timeout: b = "auto",
    ...m
  } = t, p = h.useRef(null), v = uo(), C = lp(v.motion.reducedMotion, s), E = h.useRef(null), k = tt(E, co(i), n), T = dn(E, f), R = dn(E, (P, O) => {
    C.shouldReduceMotion || np(P);
    const {
      duration: N,
      delay: j,
      easing: A
    } = da({
      style: w,
      timeout: b,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    b === "auto" && !C.shouldReduceMotion ? (z = v.transitions.getAutoHeightDuration(P.clientHeight), p.current = z) : (z = N, p.current = null);
    const F = C.getTransitionTiming({
      duration: z,
      delay: j
    });
    P.style.transition = [v.transitions.create("opacity", {
      duration: F.duration,
      delay: F.delay
    }), v.transitions.create("transform", {
      duration: typeof F.duration == "string" ? F.duration : F.duration * 0.666,
      delay: F.delay,
      easing: A
    })].join(","), u && u(P, O);
  }), I = dn(E, c), L = dn(E, x), M = dn(E, (P) => {
    const {
      duration: O,
      delay: N,
      easing: j
    } = da({
      style: w,
      timeout: b,
      easing: l
    }, {
      mode: "exit"
    });
    let A;
    b === "auto" && !C.shouldReduceMotion ? (A = v.transitions.getAutoHeightDuration(P.clientHeight), p.current = A) : (A = O, p.current = null);
    const z = C.getTransitionTiming({
      duration: A,
      delay: N
    });
    P.style.transition = [v.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), v.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: j
    })].join(","), P.style.opacity = 0, P.style.transform = Ki(0.75), y && y(P);
  }), g = dn(E, (P) => {
    P.style.transition = "", d && d(P);
  }), $ = r ? (P) => {
    r(E.current, P);
  } : void 0;
  return /* @__PURE__ */ S.jsx(_0, {
    appear: o,
    in: a,
    nodeRef: E,
    onEnter: R,
    onEntered: I,
    onEntering: T,
    onExit: M,
    onExited: g,
    onExiting: L,
    addEndListener: $,
    getAutoTimeout: b === "auto" ? () => p.current : void 0,
    reduceMotion: C.shouldReduceMotion,
    timeout: b === "auto" ? null : b,
    ...m,
    children: (P, {
      ownerState: O,
      ...N
    }) => {
      const j = j0(P, a, kP, EP, w, i.props.style);
      return /* @__PURE__ */ h.cloneElement(i, {
        style: j,
        ref: k,
        ...N
      });
    }
  });
});
ws && (ws.muiSupportAuto = !0);
function TP(e) {
  return ae("MuiInputLabel", e);
}
const RP = le("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), PP = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ue({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, f2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, IP = K(Cu, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Su(e, t), !n.disableUnderline && t.underline];
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
        [`label + &, .${RP.root} + &`]: {
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
          ...ct(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${wi.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${wi.error}`]: {
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
          ...ct(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${wi.disabled}, .${wi.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${wi.disabled}:before`]: {
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
})), MP = K(bu, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: wu
})({}), gp = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    type: f = "text",
    ...y
  } = r, d = PP(r), w = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, b = u ? wt(u, w) : w, m = c.root ?? IP, p = c.input ?? MP;
  return /* @__PURE__ */ S.jsx(op, {
    slots: {
      root: m,
      input: p
    },
    slotProps: b,
    fullWidth: i,
    inputComponent: s,
    multiline: l,
    ref: n,
    type: f,
    ...y,
    classes: d
  });
});
gp.muiName = "Input";
function $P(e) {
  return ae("MuiInputAdornment", e);
}
const Ao = le("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var Gh;
const OP = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${ie(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, AP = (e) => {
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
  return ue(l, $P, t);
}, NP = K("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: OP
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
      [`&.${Ao.positionStart}&:not(.${Ao.hiddenLabel})`]: {
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
}))), cl = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: i,
    component: s = "div",
    disablePointerEvents: l = !1,
    disableTypography: a = !1,
    position: u,
    variant: c,
    ...f
  } = r, y = Jk() || {};
  let d = c;
  c && y.variant, y && !d && (d = y.variant);
  const x = {
    ...r,
    hiddenLabel: y.hiddenLabel,
    size: y.size,
    disablePointerEvents: l,
    position: u,
    variant: d
  }, w = AP(x);
  return /* @__PURE__ */ S.jsx(Os.Provider, {
    value: null,
    children: /* @__PURE__ */ S.jsx(NP, {
      as: s,
      ownerState: x,
      className: J(w.root, i),
      ref: n,
      ...f,
      children: typeof o == "string" && !a ? /* @__PURE__ */ S.jsx(tr, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ S.jsxs(h.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Gh || (Gh = /* @__PURE__ */ S.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), LP = (e) => {
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
  }, u = ue(a, TP, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, jP = K(bP, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Wi.asterisk}`]: t.asterisk
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
      ...ct(e, ["color", "transform", "max-width"], {
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
}))), zP = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: l,
    className: a,
    ...u
  } = r, [c, f] = li({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let y = s;
  typeof y > "u" && f && (y = f.filled || f.focused || f.adornedStart);
  const d = {
    ...r,
    disableAnimation: o,
    formControl: f,
    shrink: y,
    size: c.size,
    variant: c.variant,
    required: c.required,
    focused: c.focused
  }, x = LP(d);
  return /* @__PURE__ */ S.jsx(jP, {
    "data-shrink": y,
    ref: n,
    className: J(x.root, a),
    ...u,
    ownerState: d,
    classes: x
  });
}), Nd = /* @__PURE__ */ h.createContext({});
function _P(e) {
  return ae("MuiList", e);
}
le("MuiList", ["root", "padding", "dense", "subheader"]);
const FP = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return ue({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, _P, t);
}, DP = K("ul", {
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
}), BP = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
  } = r, f = h.useMemo(() => ({
    dense: l
  }), [l]), y = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, d = FP(y);
  return /* @__PURE__ */ S.jsx(Nd.Provider, {
    value: f,
    children: /* @__PURE__ */ S.jsxs(DP, {
      as: s,
      className: J(d.root, i),
      ref: n,
      ownerState: y,
      ...c,
      children: [u, o]
    })
  });
}), Qh = le("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Xh = le("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), f1 = /* @__PURE__ */ h.createContext(void 0);
function WP() {
  const e = h.useContext(f1);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const UP = Object.is;
function HP(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !UP(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const VP = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function KP(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = Yi,
    wrap: s = !0
  } = e, [l, a] = h.useState(t), [u, c] = h.useState(t);
  let f = l;
  t !== u && (c(t), t !== void 0 && t !== l && (f = t, a(t)));
  const y = h.useRef(null), d = h.useRef(/* @__PURE__ */ new Map()), [x, w] = h.useState(0), b = h.useMemo(() => Ld(d.current), [x]), m = qh(f, b, i, n), p = h.useRef(m);
  p.current = m;
  const v = h.useCallback(() => {
    const g = Ld(d.current), $ = qh(p.current, g, i, n);
    return h1(g, $);
  }, [n, i]), C = h.useCallback(() => d.current, []), E = Xe((g) => {
    const $ = d.current.get(g.id);
    HP($ ?? null, g) || (d.current.set(g.id, g), w((P) => P + 1));
  }), k = Xe((g) => {
    d.current.delete(g) && w(($) => $ + 1);
  }), T = Xe((g) => {
    a(g);
  }), R = h.useCallback((g) => p.current === g, []), I = h.useCallback((g, $, P, O) => {
    var A;
    const N = dl(d.current), j = p1(N, g, $, P, O ?? i);
    return j ? ((A = j.element) == null || A.focus(), a(j.id), j) : null;
  }, [i]), L = h.useCallback((g, $, P) => ({
    onFocus: (j) => {
      $ == null || $(j);
      const A = dl(d.current), z = y1(A, j.target);
      z !== -1 && a(A[z].id);
    },
    onKeyDown: (j) => {
      if (P == null || P(j), j.defaultPrevented || j.altKey || j.shiftKey || j.ctrlKey || j.metaKey || !VP.includes(j.key))
        return;
      let A = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (A = "ArrowRight", z = "ArrowLeft");
      const F = dl(d.current), H = Jn(rt(y.current)), D = H === y.current;
      let X = Zh(F, H, p.current), Y = "next";
      switch (j.key) {
        case A:
          Y = "previous", j.preventDefault(), D && (X = F.length);
          break;
        case z:
          j.preventDefault(), D && (X = -1);
          break;
        case "Home":
          j.preventDefault(), X = -1;
          break;
        case "End":
          j.preventDefault(), Y = "previous", X = F.length;
          break;
        default:
          return;
      }
      I(X, Y, s);
    },
    ref: qP(g, (j) => {
      y.current = j;
    })
  }), [I, o, r, s]), M = h.useCallback((g) => {
    var j;
    const $ = dl(d.current), P = Jn(rt(y.current)), N = P === y.current ? -1 : Zh($, P, p.current);
    return ((j = I(N, "next", !0, g)) == null ? void 0 : j.id) ?? null;
  }, [I]);
  return h.useMemo(() => ({
    activeItemId: m,
    focusNext: M,
    getActiveItem: v,
    getContainerProps: L,
    getItemMap: C,
    isItemActive: R,
    registerItem: E,
    setActiveItemId: T,
    unregisterItem: k
  }), [m, M, v, L, C, R, E, T, k]);
}
function YP(e) {
  const t = WP(), {
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
  }, [e.id, r, o]), u = tt(e.ref, a);
  return et(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), et(() => {
    const c = e.id;
    return () => {
      o(c);
    };
  }, [e.id, o]), {
    ref: u,
    tabIndex: n === e.id ? 0 : -1
  };
}
function qh(e, t, n, r) {
  return e != null ? GP(e, t, n) : QP(t, n, r);
}
function GP(e, t, n) {
  var o;
  const r = g1(t, e);
  return r === -1 ? m1(t, n) : n(t[r]) ? t[r].id : ((o = p1(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function QP(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = h1(e, r);
    if (o && t(o))
      return o.id;
  }
  return m1(e, t);
}
function Zh(e, t, n) {
  if (t) {
    const r = y1(e, t);
    if (r !== -1)
      return r;
  }
  return g1(e, n);
}
function p1(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = Jh(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[l];
    if (!u || !o(u))
      l = Jh(l, i, n, r);
    else
      return u;
  }
  return null;
}
function m1(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function h1(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function g1(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function y1(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function Ld(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(jd).sort((o, i) => XP(o.element, i.element)), r = t.filter((o) => !jd(o));
  return [...n, ...r];
}
function dl(e) {
  return Ld(e).filter(jd);
}
function Jh(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function Yi(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function jd(e) {
  return e.element != null && e.element.isConnected;
}
function XP(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function qP(...e) {
  return (t) => {
    e.forEach((n) => {
      Td(n ?? null, t);
    });
  };
}
function v1(e, t) {
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
function ZP(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function JP(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function Al(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const x1 = /* @__PURE__ */ h.createContext(null);
function S1() {
  return h.useContext(x1);
}
const eI = x1.Provider, w1 = /* @__PURE__ */ h.createContext(void 0);
function tI() {
  const e = h.useContext(w1);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function nI(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function C1(e, t) {
  if (t === void 0)
    return !0;
  let n = nI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function rI(e, t) {
  return C1(e, t) ? Yi(e) : !1;
}
function oI(e, t) {
  v1(e, t);
}
const iI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    variant: f = "selectedMenu",
    ...y
  } = t, d = h.useRef(null), x = h.useRef(!1), [w, b] = h.useState(!1), m = S1(), p = h.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), v = h.useCallback((O) => {
    var N, j, A;
    return f === "selectedMenu" ? ((N = O.find((z) => z.selected && Yi(z))) == null ? void 0 : N.id) ?? ((j = O.find((z) => Yi(z))) == null ? void 0 : j.id) ?? null : ((A = O.find((z) => Yi(z))) == null ? void 0 : A.id) ?? null;
  }, [f]), C = KP({
    activeItemId: void 0,
    getDefaultActiveItemId: v,
    orientation: "vertical",
    wrap: !u
  }), {
    activeItemId: E,
    focusNext: k,
    getActiveItem: T,
    getContainerProps: R,
    getItemMap: I
  } = C, L = Xe((O = !1) => {
    if (!d.current || !O && x.current)
      return null;
    if (i) {
      const N = T();
      if (N != null && N.element) {
        const j = Array.from(I().values()).some((z) => z.selected), A = f === "menu" && j && !N.selected && m == null;
        return b(A), oI(N.element, m), x.current = !0, N.element;
      }
      return o ? (b(!1), d.current.focus(), d.current) : null;
    }
    return o ? (b(!1), d.current.focus(), x.current = !0, d.current) : (b(!1), null);
  });
  et(() => {
    if (!o && !i) {
      x.current = !1, b(!1);
      return;
    }
    L();
  }, [E, i, o, L]), h.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (O, {
      direction: N
    }) => {
      const j = !d.current.style.width;
      if (O.clientHeight < d.current.clientHeight && j) {
        const A = `${l1(ar(O))}px`;
        d.current.style[N === "rtl" ? "paddingLeft" : "paddingRight"] = A, d.current.style.width = `calc(100% + ${A})`;
      }
      return d.current;
    },
    focusInitialTarget: () => {
      if (!d.current)
        return null;
      const O = Jn(rt(d.current));
      return O && Uo(d.current, O) ? O : L(!0);
    }
  }), [L]);
  const M = R(void 0, y.onFocus), g = tt(d, M.ref, n), $ = h.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: w,
    variant: f
  }), [a, w, f]), P = Xe((O) => {
    if (w && b(!1), (O.ctrlKey || O.metaKey || O.altKey) && c) {
      c(O);
      return;
    }
    if (M.onKeyDown(O), O.key.length === 1) {
      const j = p.current, A = O.key.toLowerCase(), z = performance.now();
      j.keys.length > 0 && (z - j.lastTime > 500 ? (j.keys = [], j.repeating = !0, j.previousKeyMatched = !0) : j.repeating && A !== j.keys[0] && (j.repeating = !1)), j.lastTime = z, j.keys.push(A);
      const F = Jn(rt(d.current)), H = F && !j.repeating && C1(F, j);
      j.previousKeyMatched && (H || k((D) => rI(D, j)) != null) ? O.preventDefault() : j.previousKeyMatched = !1;
    }
    c && c(O);
  });
  return /* @__PURE__ */ S.jsx(BP, {
    role: "menu",
    ref: g,
    className: l,
    onKeyDown: P,
    tabIndex: -1,
    ...y,
    onFocus: M.onFocus,
    children: /* @__PURE__ */ S.jsx(w1.Provider, {
      value: $,
      children: /* @__PURE__ */ S.jsx(f1.Provider, {
        value: C,
        children: s
      })
    })
  });
});
function sI(e) {
  return ae("MuiPopover", e);
}
le("MuiPopover", ["root", "paper"]);
function eg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function tg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function ng(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function fl(e) {
  return typeof e == "function" ? e() : e;
}
const lI = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"]
  }, sI, t);
}, aI = K(u1, {
  name: "MuiPopover",
  slot: "Root"
})({}), b1 = K(jr, {
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
}), uI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    container: f,
    disableAutoFocus: y = !1,
    elevation: d = 8,
    marginThreshold: x = 16,
    open: w,
    slots: b = {},
    slotProps: m = {},
    transformOrigin: p = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: v = "auto",
    disableScrollLock: C = !1,
    ...E
  } = r, k = h.useRef(), T = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: d,
    marginThreshold: x,
    transformOrigin: p,
    transitionDuration: v
  }, R = lI(T), I = h.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const B = fl(i), oe = (B && B.nodeType === 1 ? B : rt(k.current).body).getBoundingClientRect();
    return {
      top: oe.top + eg(oe, s.vertical),
      left: oe.left + tg(oe, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), L = h.useCallback((B) => ({
    vertical: eg(B, p.vertical),
    horizontal: tg(B, p.horizontal)
  }), [p.horizontal, p.vertical]), M = h.useCallback((B) => {
    const ee = {
      width: B.offsetWidth,
      height: B.offsetHeight
    }, oe = L(ee);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ng(oe)
      };
    const Ce = I();
    let ye = Ce.top - oe.vertical, fe = Ce.left - oe.horizontal;
    const se = ye + ee.height, Re = fe + ee.width, Ne = ar(fl(i)), be = Ne.innerHeight - x, W = Ne.innerWidth - x;
    if (x != null && ye < x) {
      const te = ye - x;
      ye -= te, oe.vertical += te;
    } else if (x != null && se > be) {
      const te = se - be;
      ye -= te, oe.vertical += te;
    }
    if (x != null && fe < x) {
      const te = fe - x;
      fe -= te, oe.horizontal += te;
    } else if (Re > W) {
      const te = Re - W;
      fe -= te, oe.horizontal += te;
    }
    return {
      top: `${Math.round(ye)}px`,
      left: `${Math.round(fe)}px`,
      transformOrigin: ng(oe)
    };
  }, [i, a, I, L, x]), [g, $] = h.useState(w), P = h.useCallback(() => {
    const B = k.current;
    if (!B)
      return;
    const ee = M(B);
    ee.top != null && B.style.setProperty("top", ee.top), ee.left != null && (B.style.left = ee.left), B.style.transformOrigin = ee.transformOrigin, $(!0);
  }, [M]);
  h.useEffect(() => (C && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [i, C, P]);
  const O = () => {
    P();
  }, N = () => {
    $(!1);
  };
  h.useEffect(() => {
    w && P();
  }), h.useImperativeHandle(o, () => w ? {
    updatePosition: () => {
      P();
    }
  } : null, [w, P]), h.useEffect(() => {
    if (!w)
      return;
    const B = A0(() => {
      P();
    }), ee = ar(fl(i));
    return ee.addEventListener("resize", B), () => {
      B.clear(), ee.removeEventListener("resize", B);
    };
  }, [i, w, P]);
  let j = v;
  const A = {
    slots: b,
    slotProps: m
  }, [z, F] = ve("transition", {
    elementType: ws,
    externalForwardedProps: A,
    ownerState: T,
    getSlotProps: (B) => ({
      ...B,
      onEntering: (ee, oe) => {
        var Ce;
        (Ce = B.onEntering) == null || Ce.call(B, ee, oe), O();
      },
      onExited: (ee) => {
        var oe;
        (oe = B.onExited) == null || oe.call(B, ee), N();
      }
    }),
    additionalProps: {
      appear: !0,
      in: w
    }
  });
  v === "auto" && !z.muiSupportAuto && (j = void 0);
  const H = f || (i ? rt(fl(i)).body : void 0), [D, {
    slots: X,
    slotProps: Y,
    ...q
  }] = ve("root", {
    ref: n,
    elementType: aI,
    externalForwardedProps: {
      ...A,
      ...E
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: b.backdrop
      },
      slotProps: {
        backdrop: b2(typeof m.backdrop == "function" ? m.backdrop(T) : m.backdrop, {
          invisible: !0
        })
      },
      container: H,
      open: w
    },
    ownerState: T,
    className: J(R.root, c)
  }), [Q, G] = ve("paper", {
    ref: k,
    className: R.paper,
    elementType: b1,
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
  return /* @__PURE__ */ S.jsx(D, {
    ...q,
    ...!ua(D) && {
      slots: X,
      slotProps: Y,
      disableAutoFocus: y,
      disableScrollLock: C
    },
    children: /* @__PURE__ */ S.jsx(z, {
      ...F,
      timeout: j,
      children: /* @__PURE__ */ S.jsx(Q, {
        ...G,
        children: u
      })
    })
  });
});
function cI(e) {
  return ae("MuiMenu", e);
}
le("MuiMenu", ["root", "paper", "list"]);
const dI = {
  vertical: "top",
  horizontal: "right"
}, fI = {
  vertical: "top",
  horizontal: "left"
}, pI = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, cI, t);
}, mI = K(uI, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), hI = K(b1, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), gI = K(iI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), yI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    transitionDuration: f = "auto",
    variant: y = "selectedMenu",
    slots: d = {},
    slotProps: x = {},
    ...w
  } = r, b = C0(), m = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: f,
    variant: y
  }, p = pI(m), v = o && u, C = v && !l, E = h.useRef(null), k = (O, N) => {
    var j, A;
    E.current && (E.current.adjustStyleForScrollbar(O, {
      direction: b ? "rtl" : "ltr"
    }), v && ((A = (j = E.current).focusInitialTarget) == null || A.call(j)));
  }, T = (O) => {
    O.key === "Tab" && (O.preventDefault(), a && a(O, "tabKeyDown"));
  }, R = {
    slots: d,
    slotProps: x
  }, I = e1({
    elementType: d.root,
    externalSlotProps: x.root,
    ownerState: m,
    className: [p.root, s]
  }), [L, M] = ve("paper", {
    className: p.paper,
    elementType: hI,
    externalForwardedProps: R,
    shouldForwardComponentProp: !0,
    ownerState: m
  }), [g, $] = ve("list", {
    className: p.list,
    elementType: gI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: R,
    getSlotProps: (O) => ({
      ...O,
      onKeyDown: (N) => {
        var j;
        T(N), (j = O.onKeyDown) == null || j.call(O, N);
      }
    }),
    ownerState: m
  }), P = typeof x.transition == "function" ? x.transition(m) : x.transition;
  return /* @__PURE__ */ S.jsx(
    mI,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: b ? "right" : "left"
      },
      transformOrigin: b ? dI : fI,
      slots: {
        root: d.root,
        paper: L,
        backdrop: d.backdrop,
        transition: d.transition
      },
      slotProps: {
        root: I,
        paper: M,
        backdrop: typeof x.backdrop == "function" ? x.backdrop(m) : x.backdrop,
        transition: {
          ...P,
          onEntering: (...O) => {
            var N;
            k(...O), (N = P == null ? void 0 : P.onEntering) == null || N.call(P, ...O);
          }
        }
      },
      open: u,
      ref: n,
      transitionDuration: f,
      ownerState: m,
      ...w,
      classes: c,
      children: /* @__PURE__ */ S.jsx(g, {
        actions: E,
        autoFocus: v,
        autoFocusItem: C,
        variant: y,
        ...$,
        children: i
      })
    }
  );
}), vI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, xI = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = ue({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, p2, s);
  return {
    ...s,
    ...a
  };
}, SI = K(vs, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: vI
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
  [`&.${Ci.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Ci.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Ci.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Ci.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Ci.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Kh.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Kh.inset}`]: {
    marginLeft: 52
  },
  [`& .${Xh.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Xh.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Qh.root}`]: {
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
      [`& .${Qh.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), wI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    tabIndex: f,
    className: y,
    ...d
  } = r, w = c === "menuitemcheckbox" || c === "menuitemradio" ? !!r.selected : void 0, b = S1(), m = h.useContext(Nd), p = h.useMemo(() => ({
    dense: s || m.dense || !1,
    disableGutters: a
  }), [m.dense, s, a]), v = tI(), C = lr(), E = v.suppressInitialFocusVisible, k = v.itemsFocusableWhenDisabled, T = h.useRef(null);
  et(() => {
    o && T.current && v1(T.current, b);
  }, [o]);
  const R = {
    ...r,
    dense: p.dense,
    divider: l,
    disableGutters: a
  }, I = xI(r), {
    root: L,
    ...M
  } = I, g = YP({
    id: C,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), $ = tt(T, g.ref);
  let P;
  return f !== void 0 ? P = f : v.variant === "selectedMenu" ? P = g.tabIndex : (!r.disabled || k) && (P = -1), /* @__PURE__ */ S.jsx(Nd.Provider, {
    value: p,
    children: /* @__PURE__ */ S.jsx(SI, {
      ref: $,
      role: c,
      "aria-checked": w,
      tabIndex: P,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: E,
      focusVisibleClassName: J(I.focusVisible, u),
      className: J(I.root, y),
      ...d,
      ownerState: R,
      classes: M
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
    icon: ["icon", `icon${ie(n)}`, i && "iconOpen", r && "disabled"]
  };
  return ue(l, m2, t);
}, k1 = K("select", {
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
  [`&.${ip.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${Ao.root}`]: {
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
      [`.${Gt.root}:has(> & ~ .${Ao.root})`]: {
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
      [`.${Gt.root}:has(> & ~ .${Ao.root})`]: {
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
      [`.${Gt.root}:has(> & ~ .${Ao.root})`]: {
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
})), bI = K(k1, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Vt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${ip.multiple}`]: t.multiple
    }];
  }
})({}), E1 = K("svg", {
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
  [`&.${ip.disabled}`]: {
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
})), kI = K(E1, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ie(n.variant)}`], n.open && t.iconOpen];
  }
})({}), EI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, f = CI(c);
  return /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ S.jsx(bI, {
      ownerState: c,
      className: J(f.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ S.jsx(kI, {
      as: s,
      ownerState: c,
      className: f.icon
    })]
  });
});
var rg;
const TI = K("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Vt
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
}), RI = K("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Vt
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
      ...ct(e, "width", {
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
      ...ct(e, "max-width", {
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
      ...ct(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function PI(e) {
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
  return /* @__PURE__ */ S.jsx(TI, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ S.jsx(RI, {
      ownerState: a,
      children: l ? /* @__PURE__ */ S.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        rg || (rg = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const II = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, h2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, MI = K(Cu, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Su
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${On.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${On.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${On.focused} .${On.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter($t()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${On.focused} .${On.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${On.error} .${On.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${On.disabled} .${On.notchedOutline}`]: {
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
        [`&.${Vr.root}`]: {
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
})), $I = K(PI, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), OI = K(bu, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: wu
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
}))), yp = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    type: f = "text",
    ...y
  } = r, d = II(r), [x, w] = li({
    props: r,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), b = {
    ...r,
    color: x.color || "primary",
    disabled: x.disabled,
    error: x.error,
    focused: x.focused,
    formControl: w,
    fullWidth: o,
    hiddenLabel: x.hiddenLabel,
    multiline: l,
    size: x.size,
    type: f
  }, m = u.root ?? MI, p = u.input ?? OI, [v, C] = ve("notchedOutline", {
    elementType: $I,
    className: d.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: b,
    externalForwardedProps: {
      slots: u,
      slotProps: c
    },
    additionalProps: {
      label: s != null && s !== "" && x.required ? /* @__PURE__ */ S.jsxs(h.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ S.jsx(op, {
    slots: {
      root: m,
      input: p
    },
    slotProps: c,
    renderSuffix: (E) => /* @__PURE__ */ S.jsx(v, {
      ...C,
      notched: typeof a < "u" ? a : !!(E.startAdornment || E.filled || E.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: l,
    ref: n,
    type: f,
    ...y,
    classes: {
      ...d,
      notchedOutline: null
    }
  });
});
yp.muiName = "Input";
function AI(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function T1(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return h.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ h.isValidElement(n) && (t += T1(n.props.children));
  }), t;
}
function NI(e, t, n = 0) {
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
function LI(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function jI(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ h.isValidElement(i) || !AI(i) || i.props.disabled)
      continue;
    const s = T1(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && Al(t, i.props.value) && (r = n.length), n.push({
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
var og;
const pl = 2, zI = 400, ig = 200, _I = 750, Wr = " ", FI = "ArrowUp", DI = "ArrowDown", BI = "Enter";
function sg(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - pl && e.clientX <= r.right + pl && e.clientY >= r.top - pl && e.clientY <= r.bottom + pl;
}
const WI = K(k1, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Vr.select}`]: t.select
      },
      {
        [`&.${Vr.select}`]: t[n.variant]
      },
      {
        [`&.${Vr.error}`]: t.error
      },
      {
        [`&.${Vr.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Vr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), UI = K(E1, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), HI = K("input", {
  shouldForwardProp: (e) => N0(e) && e !== "classes",
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
}), VI = (e) => {
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
  }, d1, t);
}, KI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var Cp, bp, kp, Ep;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: u,
    defaultValue: c,
    disabled: f,
    displayEmpty: y,
    error: d = !1,
    IconComponent: x,
    inputRef: w,
    labelId: b,
    MenuProps: m = {},
    multiple: p,
    name: v,
    onBlur: C,
    onChange: E,
    onClose: k,
    onFocus: T,
    // eslint-disable-next-line react/prop-types
    onKeyDown: R,
    // eslint-disable-next-line react/prop-types
    onMouseDown: I,
    onOpen: L,
    open: M,
    readOnly: g,
    renderValue: $,
    required: P,
    SelectDisplayProps: O = {},
    tabIndex: N,
    // catching `type` from Input which makes no sense for SelectInput
    type: j,
    value: A,
    variant: z = "standard",
    ...F
  } = t, [H, D] = Rd({
    controlled: A,
    default: c,
    name: "Select"
  }), [X, Y] = Rd({
    controlled: M,
    default: u,
    name: "Select"
  }), q = h.useRef(null), Q = h.useRef(null), G = h.useRef(null), B = h.useRef(!1), ee = h.useRef(!1), oe = h.useRef(null), Ce = h.useRef(!1), ye = h.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), fe = h.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), se = zn(), Re = zn(), Ne = zn(), [be, W] = h.useState(null), {
    current: te
  } = h.useRef(M != null), [pe, ze] = h.useState(), [Ae, Le] = h.useState(null), He = tt(n, w), dt = h.useCallback((V) => {
    Q.current = V, V && W(V);
  }, []), _e = be == null ? void 0 : be.parentNode;
  h.useImperativeHandle(He, () => ({
    focus: () => {
      Q.current.focus();
    },
    node: q.current,
    value: H
  }), [H]);
  const he = be !== null && X, Be = h.useCallback(() => {
    Ne.clear(), fe.current.buffer = "", fe.current.previousSearchIndex = null, fe.current.matchedIndex = null;
  }, [Ne]);
  et(() => {
    B.current = he, he && Be();
  }, [he, Be]);
  const Lt = h.useCallback(() => {
    se.clear(), Re.clear();
  }, [se, Re]), ne = h.useCallback(() => {
    Lt(), Ce.current = !1, ye.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [Lt]), me = h.useCallback(() => {
    oe.current && (oe.current(), oe.current = null);
  }, []);
  h.useEffect(() => {
    he || (ne(), me());
  }, [he, ne, me]), h.useEffect(() => () => {
    ne(), me(), Be();
  }, [ne, me, Be]), h.useEffect(() => {
    if (!he || !_e || s || typeof ResizeObserver > "u")
      return;
    const V = new ResizeObserver(() => {
      ze(_e.clientWidth);
    });
    return V.observe(_e), () => {
      V.disconnect();
    };
  }, [he, _e, s]), h.useEffect(() => {
    u && X && be && !te && (ze(s ? null : _e.clientWidth), Q.current.focus());
  }, [be, s]), h.useEffect(() => {
    i && Q.current.focus();
  }, [i]), h.useEffect(() => {
    if (!b)
      return;
    const V = rt(Q.current).getElementById(b);
    if (V) {
      const re = () => {
        getSelection().isCollapsed && Q.current.focus();
      };
      return V.addEventListener("click", re), () => {
        V.removeEventListener("click", re);
      };
    }
  }, [b]);
  const Fe = Xe((V, re) => {
    V || (ne(), me()), V ? (Be(), Le(ZP(re)), L && L(re)) : (Le(null), k && k(re)), te || (B.current = V, ze(s ? null : _e.clientWidth), Y(V));
  }), mt = () => {
    ne(), ee.current ? Re.start(ig, () => {
      ye.current.allowUnselectedMouseUp = !0, se.start(ig, () => {
        ye.current.allowSelectedMouseUp = !0;
      });
    }) : se.start(zI, () => {
      ye.current.allowSelectedMouseUp = !0, ye.current.allowUnselectedMouseUp = !0;
    });
  }, we = (V) => {
    if (I == null || I(V), V.button !== 0 || (V.preventDefault(), !Q.current))
      return;
    Q.current.focus();
    const re = rt(V.currentTarget);
    mt(), me();
    const ge = (Ge) => {
      oe.current = null, Q.current && (sg(Ge, Q.current) || sg(Ge, G.current) || !B.current && te || Fe(!1, Ge));
    };
    re.addEventListener("mouseup", ge, {
      capture: !0,
      once: !0
    }), oe.current = () => {
      re.removeEventListener("mouseup", ge, !0);
    }, Fe(!0, V);
  }, ai = (V) => {
    Fe(!1, V);
  }, ui = h.Children.toArray(l), Ru = (V) => {
    const re = ui.find((ge) => ge.props.value === V.target.value);
    re !== void 0 && (D(re.props.value), E && E(V, re));
  }, Ls = (V, re, ge) => {
    if (D(ge), E) {
      const Ge = V.nativeEvent || V, Pt = new Ge.constructor(Ge.type, Ge);
      Object.defineProperty(Pt, "target", {
        writable: !0,
        value: {
          value: ge,
          name: v
        }
      }), E(Pt, re);
    }
  }, de = (V) => (re) => {
    Ce.current = !1;
    let ge;
    if (re.currentTarget.hasAttribute("tabindex")) {
      if (p) {
        ge = Array.isArray(H) ? H.slice() : [];
        const Ge = H.indexOf(V.props.value);
        Ge === -1 ? ge.push(V.props.value) : ge.splice(Ge, 1);
      } else
        ge = V.props.value;
      V.props.onClick && V.props.onClick(re), H !== ge && Ls(re, V, ge), p || Fe(!1, re);
    }
  }, Ye = (V, re) => (ge) => {
    var Fs, mo;
    if ((mo = (Fs = V.props).onMouseUp) == null || mo.call(Fs, ge), Ce.current) {
      Ce.current = !1;
      return;
    }
    const Ge = !ye.current.allowSelectedMouseUp && re, Pt = !ye.current.allowUnselectedMouseUp && !re;
    Ge || Pt || ge.currentTarget.click();
  }, Hn = (V) => {
    var Tp;
    const re = fe.current, ge = re.buffer !== "";
    if (he || p || f || V.defaultPrevented || (Tp = V.nativeEvent) != null && Tp.isComposing || V.key.length !== 1 || V.ctrlKey || V.metaKey || V.altKey || V.key === Wr && !ge)
      return !1;
    V.key === Wr && V.preventDefault();
    const Ge = re.buffer === "", {
      options: Pt,
      selectedIndex: Fs
    } = jI(ui, H);
    if (Pt.length === 0)
      return V.key !== Wr && Be(), !0;
    Ge && (re.previousSearchIndex = Fs);
    const mo = V.key.toLowerCase();
    re.buffer === mo && LI(Pt, mo) && (re.buffer = "", re.previousSearchIndex = re.matchedIndex), re.buffer += mo, Ne.start(_I, Be);
    const Mu = NI(Pt, re.buffer, (re.previousSearchIndex ?? -1) + 1);
    if (Mu !== -1) {
      const $u = Pt[Mu];
      return re.matchedIndex = Mu, Al(H, $u.value) || Ls(V, $u.child, $u.value), !0;
    }
    return V.key !== Wr && Be(), !0;
  }, I1 = (V) => {
    if (!g) {
      const re = Hn(V), ge = V.key === Wr || V.key === FI || V.key === DI || V.key === BI;
      !re && ge && (V.preventDefault(), Fe(!0, V)), R == null || R(V);
    }
  }, M1 = (V) => {
    Be(), !he && C && (Object.defineProperty(V, "target", {
      writable: !0,
      value: {
        value: H,
        name: v
      }
    }), C(V));
  }, $1 = (V) => (re) => {
    var ge, Ge;
    (Ge = (ge = V == null ? void 0 : V.props) == null ? void 0 : ge.onKeyDown) == null || Ge.call(ge, re), re.key === Wr && re.target === re.currentTarget && !re.defaultPrevented && (re.preventDefault(), re.repeat || re.currentTarget.click());
  };
  delete F["aria-invalid"];
  let fo, xp;
  const js = [];
  let zs = !1, _s = !1;
  (ca({
    value: H
  }) || y) && ($ ? fo = $(H) : zs = !0);
  const O1 = ui.map((V) => {
    if (!/* @__PURE__ */ h.isValidElement(V))
      return null;
    let re;
    if (p) {
      if (!Array.isArray(H))
        throw new Error(sr(2));
      re = H.some((ge) => Al(ge, V.props.value)), re && zs && js.push(V.props.children);
    } else
      re = Al(H, V.props.value), re && zs && (xp = V.props.children);
    return re && (_s = !0), /* @__PURE__ */ h.cloneElement(V, {
      "aria-selected": re ? "true" : "false",
      onMouseDown: (ge) => {
        var Ge, Pt;
        Ce.current = !0, (Pt = (Ge = V.props).onMouseDown) == null || Pt.call(Ge, ge);
      },
      onPointerDown: (ge) => {
        var Ge, Pt;
        Ce.current = !0, (Pt = (Ge = V.props).onPointerDown) == null || Pt.call(Ge, ge);
      },
      onClick: de(V),
      onMouseUp: Ye(V, re),
      onKeyUp: (ge) => {
        ge.key === Wr && ge.preventDefault(), V.props.onKeyUp && V.props.onKeyUp(ge);
      },
      onKeyDown: $1(V),
      role: "option",
      selected: re,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": V.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  et(() => {
    ee.current = _s, !he && !p && !_s && Be();
  }, [_s, p, he, Be]), zs && (p ? js.length === 0 ? fo = null : fo = js.reduce((V, re, ge) => (V.push(re), ge < js.length - 1 && V.push(", "), V), []) : fo = xp);
  let Sp = pe;
  !s && te && be && (Sp = _e.clientWidth);
  let Pu;
  typeof N < "u" ? Pu = N : Pu = f ? null : 0;
  const A1 = O.id || (v ? `mui-component-select-${v}` : void 0), po = {
    ...t,
    variant: z,
    value: H,
    open: he,
    error: d
  }, Iu = VI(po), _r = typeof ((Cp = m.slotProps) == null ? void 0 : Cp.paper) == "function" ? m.slotProps.paper(po) : (bp = m.slotProps) == null ? void 0 : bp.paper, N1 = tt(_r == null ? void 0 : _r.ref, G), L1 = typeof ((kp = m.slotProps) == null ? void 0 : kp.list) == "function" ? m.slotProps.list(po) : (Ep = m.slotProps) == null ? void 0 : Ep.list, wp = lr(), j1 = lr();
  return /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ S.jsx(WI, {
      as: "div",
      ref: dt,
      tabIndex: Pu,
      role: "combobox",
      "aria-controls": he ? wp : void 0,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": he ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": g ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": b,
      "aria-describedby": r,
      "aria-required": P ? "true" : void 0,
      "aria-invalid": d ? "true" : void 0,
      onKeyDown: I1,
      onMouseDown: f || g ? null : we,
      onBlur: M1,
      onFocus: T,
      ...O,
      ownerState: po,
      className: J(O.className, Iu.select, a),
      id: A1,
      children: JP(fo) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        og || (og = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : fo
    }), /* @__PURE__ */ S.jsx(HI, {
      "aria-invalid": d,
      value: Array.isArray(H) ? H.join(",") : H,
      name: v,
      ref: q,
      "aria-hidden": !0,
      onChange: Ru,
      tabIndex: -1,
      disabled: f,
      readOnly: g,
      className: Iu.nativeInput,
      autoFocus: i,
      required: P,
      ...F,
      id: F.id ?? j1,
      ownerState: po
    }), /* @__PURE__ */ S.jsx(UI, {
      as: x,
      className: Iu.icon,
      ownerState: po
    }), /* @__PURE__ */ S.jsx(eI, {
      value: Ae,
      children: /* @__PURE__ */ S.jsx(yI, {
        id: `menu-${v || ""}`,
        anchorEl: _e,
        open: he,
        onClose: ai,
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
            "aria-labelledby": b,
            role: "listbox",
            "aria-multiselectable": p ? "true" : void 0,
            disableListWrap: !0,
            id: wp,
            ...L1
          },
          paper: {
            ..._r,
            ref: N1,
            style: {
              minWidth: Sp,
              ..._r == null ? void 0 : _r.style
            }
          }
        },
        children: O1
      })
    })]
  });
}), YI = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"]
  }, d1, t);
  return {
    ...t,
    ...r
  };
}, vp = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Vt(e) && e !== "variant"
}, GI = K(gp, vp)(""), QI = K(yp, vp)(""), XI = K(hp, vp)(""), R1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: u = !1,
    IconComponent: c = tR,
    id: f,
    input: y,
    inputProps: d,
    label: x,
    labelId: w,
    MenuProps: b,
    multiple: m = !1,
    native: p = !1,
    onClose: v,
    onOpen: C,
    open: E,
    renderValue: k,
    SelectDisplayProps: T,
    variant: R = "outlined",
    ...I
  } = r, L = p ? EI : KI, [M] = li({
    props: r,
    states: ["variant", "error"]
  }), g = M.variant || R, $ = {
    ...r,
    variant: g,
    classes: s
  }, P = YI($), {
    root: O,
    ...N
  } = P, j = y || {
    standard: /* @__PURE__ */ S.jsx(GI, {
      ownerState: $
    }),
    outlined: /* @__PURE__ */ S.jsx(QI, {
      label: x,
      ownerState: $
    }),
    filled: /* @__PURE__ */ S.jsx(XI, {
      ownerState: $
    })
  }[g], A = tt(n, co(j));
  return /* @__PURE__ */ S.jsx(h.Fragment, {
    children: /* @__PURE__ */ h.cloneElement(j, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: L,
      inputProps: {
        children: i,
        error: M.error,
        IconComponent: c,
        variant: g,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: m,
        ...p ? {
          id: f
        } : {
          autoWidth: o,
          defaultOpen: a,
          displayEmpty: u,
          labelId: w,
          MenuProps: b,
          onClose: v,
          onOpen: C,
          open: E,
          renderValue: k,
          SelectDisplayProps: {
            id: f,
            ...T
          }
        },
        ...d,
        classes: d ? wt(N, d.classes) : N,
        ...y ? y.props.inputProps : {}
      },
      ...(m && p || u) && g === "outlined" ? {
        notched: !0
      } : {},
      ref: A,
      className: J(j.props.className, l, P.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!y && {
        variant: g
      },
      ...I
    })
  });
});
R1.muiName = "Select";
function qI(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = zn();
  h.useEffect(() => {
    if (!o)
      return;
    function m(p) {
      p.defaultPrevented || p.key === "Escape" && (r == null || r(p, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", m), () => {
      document.removeEventListener("keydown", m);
    };
  }, [o, r]);
  const l = Xe((m, p) => {
    r == null || r(m, p);
  }), a = Xe((m) => {
    !r || m == null || s.start(m, () => {
      l(null, "timeout");
    });
  });
  h.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const u = (m) => {
    r == null || r(m, "clickaway");
  }, c = s.clear, f = h.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), y = (m) => (p) => {
    const v = m.onBlur;
    v == null || v(p), f();
  }, d = (m) => (p) => {
    const v = m.onFocus;
    v == null || v(p), c();
  }, x = (m) => (p) => {
    const v = m.onMouseEnter;
    v == null || v(p), c();
  }, w = (m) => (p) => {
    const v = m.onMouseLeave;
    v == null || v(p), f();
  };
  return h.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", f), window.addEventListener("blur", c), () => {
        window.removeEventListener("focus", f), window.removeEventListener("blur", c);
      };
  }, [n, o, f, c]), {
    getRootProps: (m = {}) => {
      const p = {
        ...pa(e),
        ...pa(m)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...m,
        ...p,
        onBlur: y(p),
        onFocus: d(p),
        onMouseEnter: x(p),
        onMouseLeave: w(p)
      };
    },
    onClickAway: u
  };
}
function ZI(e) {
  return ae("MuiSnackbarContent", e);
}
le("MuiSnackbarContent", ["root", "message", "action"]);
const JI = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, ZI, t);
}, eM = K(jr, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Sd(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Sd(e.palette.background.default, t),
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
})), tM = K("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), nM = K("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), rM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, u = r, c = JI(u);
  return /* @__PURE__ */ S.jsxs(eM, {
    role: l,
    elevation: 6,
    className: J(c.root, i),
    ownerState: u,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ S.jsx(tM, {
      className: c.message,
      ownerState: u,
      children: s
    }), o ? /* @__PURE__ */ S.jsx(nM, {
      className: c.action,
      ownerState: u,
      children: o
    }) : null]
  });
});
function oM(e) {
  return ae("MuiSnackbar", e);
}
le("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const iM = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${ie(n.vertical)}${ie(n.horizontal)}`]
  };
  return ue(r, oM, t);
}, sM = K("div", {
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
}))), lM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiSnackbar"
  }), o = uo(), i = {
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
    className: f,
    disableWindowBlurListener: y = !1,
    message: d,
    onBlur: x,
    onClose: w,
    onFocus: b,
    onMouseEnter: m,
    onMouseLeave: p,
    open: v,
    resumeHideDuration: C,
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
    disableWindowBlurListener: y,
    transitionDuration: T
  }, L = iM(I), {
    getRootProps: M,
    onClickAway: g
  } = qI(I), [$, P] = h.useState(!0), O = {
    slots: E,
    slotProps: k
  }, [N, j] = ve("root", {
    ref: n,
    className: [L.root, f],
    elementType: sM,
    getSlotProps: M,
    externalForwardedProps: {
      ...O,
      ...R
    },
    ownerState: I
  }), [A, {
    ownerState: z,
    ...F
  }] = ve("clickAwayListener", {
    elementType: TR,
    externalForwardedProps: O,
    getSlotProps: (q) => ({
      onClickAway: (...Q) => {
        var B;
        const G = Q[0];
        (B = q.onClickAway) == null || B.call(q, ...Q), !(G != null && G.defaultMuiPrevented) && g(...Q);
      }
    }),
    ownerState: I
  }), [H, D] = ve("content", {
    elementType: rM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    additionalProps: {
      message: d,
      action: s
    },
    ownerState: I
  }), [X, Y] = ve("transition", {
    elementType: ws,
    externalForwardedProps: O,
    getSlotProps: (q) => ({
      onEnter: (...Q) => {
        var G;
        (G = q.onEnter) == null || G.call(q, ...Q), P(!1);
      },
      onExited: (...Q) => {
        var G;
        (G = q.onExited) == null || G.call(q, ...Q), P(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: v,
      timeout: T,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: I
  });
  return !v && $ ? null : /* @__PURE__ */ S.jsx(A, {
    ...F,
    ...E.clickAwayListener && {
      ownerState: z
    },
    children: /* @__PURE__ */ S.jsx(N, {
      ...j,
      children: /* @__PURE__ */ S.jsx(X, {
        ...Y,
        children: c || /* @__PURE__ */ S.jsx(H, {
          ...D
        })
      })
    })
  });
});
function aM(e) {
  return ae("MuiTooltip", e);
}
const ln = le("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function uM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const cM = (e) => {
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
  return ue(s, aM, t);
}, dM = K(r1, {
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
      [`&[data-popper-placement*="bottom"] .${ln.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${ln.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${ln.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${ln.arrow}`]: {
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
}))), fM = K("div", {
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
  [`.${ln.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${ln.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${ln.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${ln.popper}[data-popper-placement*="bottom"] &`]: {
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
      [`.${ln.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${ln.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${ln.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${ln.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), pM = K("span", {
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
let ml = !1;
const lg = new ku();
let Ei = {
  x: 0,
  y: 0
};
function hl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const fr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    disableTouchListener: f = !1,
    enterDelay: y = 100,
    enterNextDelay: d = 0,
    enterTouchDelay: x = 700,
    followCursor: w = !1,
    id: b,
    leaveDelay: m = 0,
    leaveTouchDelay: p = 1500,
    onClose: v,
    onOpen: C,
    open: E,
    placement: k = "bottom",
    slotProps: T = {},
    slots: R = {},
    title: I,
    ...L
  } = r, M = /* @__PURE__ */ h.isValidElement(i) ? i : /* @__PURE__ */ S.jsx("span", {
    children: i
  }), g = uo(), [$, P] = h.useState(), [O, N] = h.useState(null), j = h.useRef(!1), A = c || w, z = zn(), F = zn(), H = zn(), D = zn(), [X, Y] = Rd({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let q = X;
  const Q = lr(b), G = h.useRef(), B = Xe(() => {
    G.current !== void 0 && (document.body.style.WebkitUserSelect = G.current, G.current = void 0), D.clear();
  });
  h.useEffect(() => B, [B]);
  const ee = (de) => {
    lg.clear(), ml = !0, Y(!0), C && !q && C(de);
  }, oe = Xe(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (de) => {
      lg.start(800 + m, () => {
        ml = !1;
      }), Y(!1), v && q && v(de), z.start(g.transitions.duration.shortest, () => {
        j.current = !1;
      });
    }
  ), Ce = (de) => {
    $ != null && $.disabled || j.current && de.type !== "touchstart" || ($ && $.removeAttribute("title"), F.clear(), H.clear(), y || ml && d ? F.start(ml ? d : y, () => {
      ee(de);
    }) : ee(de));
  }, ye = (de) => {
    F.clear(), H.start(m, () => {
      oe(de);
    });
  }, [, fe] = h.useState(!1), se = (de) => {
    const Ye = (de == null ? void 0 : de.target) ?? $;
    if (!Ye || Ye.disabled || !ma(Ye)) {
      fe(!1);
      const Hn = de ?? new Event("blur");
      !de && Ye && (Object.defineProperty(Hn, "target", {
        value: Ye
      }), Object.defineProperty(Hn, "currentTarget", {
        value: Ye
      })), ye(Hn);
    }
  }, Re = (de) => {
    if ($ || P(de.currentTarget), ma(de.target)) {
      const Ye = (Hn) => {
        Hn.target.disabled && se(Hn), Hn.target.removeEventListener("blur", Ye);
      };
      de.target.addEventListener("blur", Ye), fe(!0), Ce(de);
    }
  }, Ne = (de) => {
    j.current = !0;
    const Ye = M.props;
    Ye.onTouchStart && Ye.onTouchStart(de);
  }, be = (de) => {
    Ne(de), H.clear(), z.clear(), B(), G.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", D.start(x, () => {
      document.body.style.WebkitUserSelect = G.current, Ce(de);
    });
  }, W = (de) => {
    M.props.onTouchEnd && M.props.onTouchEnd(de), B(), H.start(p, () => {
      oe(de);
    });
  };
  h.useEffect(() => {
    if (!q)
      return;
    function de(Ye) {
      Ye.key === "Escape" && oe(Ye);
    }
    return document.addEventListener("keydown", de), () => {
      document.removeEventListener("keydown", de);
    };
  }, [oe, q]);
  const te = tt(co(M), P, n);
  !I && I !== 0 && (q = !1);
  const pe = h.useRef(), ze = (de) => {
    const Ye = M.props;
    Ye.onMouseMove && Ye.onMouseMove(de), Ei = {
      x: de.clientX,
      y: de.clientY
    }, pe.current && pe.current.update();
  }, Ae = {}, Le = typeof I == "string";
  l ? (Ae.title = !q && Le && !u ? I : null, Ae["aria-describedby"] = q ? Q : null) : (Ae["aria-label"] = Le ? I : null, Ae["aria-labelledby"] = q && !Le ? Q : null);
  const He = {
    ...Ae,
    ...L,
    ...M.props,
    className: J(L.className, M.props.className),
    onTouchStart: Ne,
    ref: te,
    ...w ? {
      onMouseMove: ze
    } : {}
  }, dt = {};
  f || (He.onTouchStart = be, He.onTouchEnd = W), u || (He.onMouseOver = hl(Ce, He.onMouseOver), He.onMouseLeave = hl(ye, He.onMouseLeave), A || (dt.onMouseOver = Ce, dt.onMouseLeave = ye)), a || (He.onFocus = hl(Re, He.onFocus), He.onBlur = hl(se, He.onBlur), A || (dt.onFocus = Re, dt.onBlur = se));
  const _e = {
    ...r,
    arrow: o,
    disableInteractive: A,
    placement: k,
    touch: j.current
  }, he = typeof T.popper == "function" ? T.popper(_e) : T.popper, Be = h.useMemo(() => {
    var Ye;
    let de = [{
      name: "arrow",
      enabled: !!O,
      options: {
        element: O,
        padding: 4
      }
    }];
    return (Ye = he == null ? void 0 : he.popperOptions) != null && Ye.modifiers && (de = de.concat(he.popperOptions.modifiers)), {
      ...he == null ? void 0 : he.popperOptions,
      modifiers: de
    };
  }, [O, he == null ? void 0 : he.popperOptions]), Lt = cM(_e), ne = {
    slots: R,
    slotProps: {
      arrow: T.arrow,
      popper: he,
      tooltip: T.tooltip,
      transition: T.transition
    }
  }, [me, Fe] = ve("popper", {
    elementType: dM,
    externalForwardedProps: ne,
    ownerState: _e,
    className: Lt.popper
  }), [mt, we] = ve("transition", {
    elementType: ws,
    externalForwardedProps: ne,
    ownerState: _e
  }), [ai, ui] = ve("tooltip", {
    elementType: fM,
    className: Lt.tooltip,
    externalForwardedProps: ne,
    ownerState: _e
  }), [Ru, Ls] = ve("arrow", {
    elementType: pM,
    className: Lt.arrow,
    externalForwardedProps: ne,
    ownerState: _e,
    ref: N
  });
  return /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ h.cloneElement(M, He), /* @__PURE__ */ S.jsx(me, {
      as: r1,
      placement: k,
      anchorEl: w ? {
        getBoundingClientRect: () => ({
          top: Ei.y,
          left: Ei.x,
          right: Ei.x,
          bottom: Ei.y,
          width: 0,
          height: 0
        })
      } : $,
      popperRef: pe,
      open: $ ? q : !1,
      id: Q,
      transition: !0,
      ...dt,
      ...Fe,
      popperOptions: Be,
      children: ({
        TransitionProps: de
      }) => /* @__PURE__ */ S.jsx(mt, {
        timeout: g.transitions.duration.shorter,
        ...de,
        ...we,
        children: /* @__PURE__ */ S.jsxs(ai, {
          ...ui,
          children: [I, o ? /* @__PURE__ */ S.jsx(Ru, {
            ...Ls
          }) : null]
        })
      })
    })]
  });
}), Kt = mk({
  createStyledComponent: K("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => ce({
    props: e,
    name: "MuiStack"
  })
}), P1 = /* @__PURE__ */ h.createContext();
function mM(e) {
  return ae("MuiTable", e);
}
le("MuiTable", ["root", "stickyHeader"]);
const hM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return ue({
    root: ["root", n && "stickyHeader"]
  }, mM, t);
}, gM = K("table", {
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
}))), ag = "table", yM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = ag,
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
  }, f = hM(c), y = h.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ S.jsx(P1.Provider, {
    value: y,
    children: /* @__PURE__ */ S.jsx(gM, {
      as: i,
      role: i === ag ? null : "table",
      ref: n,
      className: J(f.root, o),
      ownerState: c,
      ...u
    })
  });
}), Tu = /* @__PURE__ */ h.createContext();
function vM(e) {
  return ae("MuiTableBody", e);
}
le("MuiTableBody", ["root"]);
const xM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, vM, t);
}, SM = K("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), wM = {
  variant: "body"
}, ug = "tbody", CM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = ug,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = xM(l);
  return /* @__PURE__ */ S.jsx(Tu.Provider, {
    value: wM,
    children: /* @__PURE__ */ S.jsx(SM, {
      className: J(a.root, o),
      as: i,
      ref: n,
      role: i === ug ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function bM(e) {
  return ae("MuiTableCell", e);
}
const kM = le("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), EM = (e) => {
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
  return ue(l, bM, t);
}, TM = K("td", {
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
      [`&.${kM.paddingCheckbox}`]: {
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
}))), on = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    variant: f,
    ...y
  } = r, d = h.useContext(P1), x = h.useContext(Tu), w = x && x.variant === "head";
  let b;
  s ? b = s : b = w ? "th" : "td";
  let m = a;
  b === "td" ? m = void 0 : !m && w && (m = "col");
  const p = f || x && x.variant, v = {
    ...r,
    align: o,
    component: b,
    padding: l || (d && d.padding ? d.padding : "normal"),
    size: u || (d && d.size ? d.size : "medium"),
    sortDirection: c,
    stickyHeader: p === "head" && d && d.stickyHeader,
    variant: p
  }, C = EM(v);
  let E = null;
  return c && (E = c === "asc" ? "ascending" : "descending"), /* @__PURE__ */ S.jsx(TM, {
    as: b,
    ref: n,
    className: J(C.root, i),
    "aria-sort": E,
    scope: m,
    ownerState: v,
    ...y
  });
});
function RM(e) {
  return ae("MuiTableContainer", e);
}
le("MuiTableContainer", ["root"]);
const PM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, RM, t);
}, IM = K("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), MM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiTableContainer"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = PM(l);
  return /* @__PURE__ */ S.jsx(IM, {
    ref: n,
    as: i,
    className: J(a.root, o),
    ownerState: l,
    ...s
  });
});
function $M(e) {
  return ae("MuiTableHead", e);
}
le("MuiTableHead", ["root"]);
const OM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, $M, t);
}, AM = K("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), NM = {
  variant: "head"
}, cg = "thead", LM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = cg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = OM(l);
  return /* @__PURE__ */ S.jsx(Tu.Provider, {
    value: NM,
    children: /* @__PURE__ */ S.jsx(AM, {
      as: i,
      className: J(a.root, o),
      ref: n,
      role: i === cg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function jM(e) {
  return ae("MuiTableRow", e);
}
const dg = le("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), zM = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return ue({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, jM, t);
}, _M = K("tr", {
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
  [`&.${dg.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${dg.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), fg = "tr", pg = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = fg,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, u = h.useContext(Tu), c = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: u && u.variant === "head",
    footer: u && u.variant === "footer"
  }, f = zM(c);
  return /* @__PURE__ */ S.jsx(_M, {
    as: i,
    ref: n,
    className: J(f.root, o),
    role: i === fg ? null : "row",
    ownerState: c,
    ...a
  });
});
function FM(e) {
  return ae("MuiTextField", e);
}
le("MuiTextField", ["root"]);
const DM = {
  standard: gp,
  filled: hp,
  outlined: yp
}, BM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, FM, t);
}, WM = K(gP, {
  name: "MuiTextField",
  slot: "Root"
})({}), Ti = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ce({
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
    error: f = !1,
    fullWidth: y = !1,
    helperText: d,
    id: x,
    inputRef: w,
    label: b,
    maxRows: m,
    minRows: p,
    multiline: v = !1,
    name: C,
    onBlur: E,
    onChange: k,
    onFocus: T,
    placeholder: R,
    required: I = !1,
    rows: L,
    select: M = !1,
    slots: g = {},
    slotProps: $ = {},
    type: P,
    value: O,
    variant: N = "outlined",
    ...j
  } = r, A = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: c,
    error: f,
    fullWidth: y,
    multiline: v,
    required: I,
    select: M,
    variant: N
  }, z = BM(A), F = lr(x), H = d && F ? `${F}-helper-text` : void 0, D = b && F ? `${F}-label` : void 0, X = DM[N], Y = {
    slots: g,
    slotProps: $
  }, [q, Q] = ve("select", {
    elementType: R1,
    externalForwardedProps: Y,
    ownerState: A
  }), G = M && Q.native, B = {}, ee = Y.slotProps.inputLabel;
  N === "outlined" && (ee && typeof ee.shrink < "u" && (B.notched = ee.shrink), B.label = b), M && (G || (B.id = void 0), B["aria-describedby"] = void 0);
  const [oe, Ce] = ve("root", {
    elementType: WM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...Y,
      ...j
    },
    ownerState: A,
    className: J(z.root, l),
    ref: n,
    additionalProps: {
      disabled: c,
      error: f,
      fullWidth: y,
      required: I,
      color: a,
      variant: N
    }
  }), [ye, fe] = ve("input", {
    elementType: X,
    externalForwardedProps: Y,
    additionalProps: B,
    ownerState: A
  }), [se, Re] = ve("inputLabel", {
    elementType: zP,
    externalForwardedProps: Y,
    ownerState: A
  }), [Ne, be] = ve("htmlInput", {
    elementType: "input",
    externalForwardedProps: Y,
    ownerState: A
  }), [W, te] = ve("formHelperText", {
    elementType: xP,
    externalForwardedProps: Y,
    ownerState: A
  }), pe = /* @__PURE__ */ S.jsx(ye, {
    "aria-describedby": H,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: y,
    multiline: v,
    name: C,
    rows: L,
    maxRows: m,
    minRows: p,
    type: P,
    value: O,
    id: F,
    inputRef: w,
    onBlur: E,
    onChange: k,
    onFocus: T,
    placeholder: R,
    inputProps: be,
    slots: {
      input: g.htmlInput ? Ne : void 0
    },
    ...fe
  });
  return /* @__PURE__ */ S.jsxs(oe, {
    ...Ce,
    children: [b != null && b !== "" && /* @__PURE__ */ S.jsx(se, {
      htmlFor: M && !G ? void 0 : F,
      id: D,
      ...M && !G && {
        component: "div"
      },
      ...Re,
      children: b
    }), M ? /* @__PURE__ */ S.jsx(q, {
      "aria-describedby": H,
      id: F,
      labelId: D,
      value: O,
      input: pe,
      ...Q,
      children: s
    }) : pe, d && /* @__PURE__ */ S.jsx(W, {
      id: H,
      ...te,
      children: d
    })]
  });
}), mg = it(/* @__PURE__ */ S.jsx("path", {
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
})), UM = it(/* @__PURE__ */ S.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
})), HM = it(/* @__PURE__ */ S.jsx("path", {
  d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12z"
})), VM = it(/* @__PURE__ */ S.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), hg = it(/* @__PURE__ */ S.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
})), gg = it(/* @__PURE__ */ S.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), yg = it(/* @__PURE__ */ S.jsx("path", {
  d: "m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"
})), KM = it(/* @__PURE__ */ S.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), vg = it(/* @__PURE__ */ S.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), xg = it(/* @__PURE__ */ S.jsx("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
})), YM = it(/* @__PURE__ */ S.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), GM = it(/* @__PURE__ */ S.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), Sg = it(/* @__PURE__ */ S.jsx("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
})), wg = it(/* @__PURE__ */ S.jsx("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
})), Yn = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72",
  meta: "#7ee787",
  accent: "#79c0ff",
  rule: "#21262d"
}, Cg = ["/bin/bash", "/usr/sbin/nologin"], jt = '"SF Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
function QM({ ctx: e }) {
  const t = h.useMemo(
    () => xu(e.theme ?? {}),
    [e.theme]
  );
  return /* @__PURE__ */ S.jsx(x2, { theme: t, children: /* @__PURE__ */ S.jsx(XM, { ctx: e }) });
}
function XM({ ctx: e }) {
  const [t, n] = h.useState([]), [r, o] = h.useState(null), [i, s] = h.useState(!0), [l, a] = h.useState(""), [u, c] = h.useState(Cg[0]), [f, y] = h.useState(""), [d, x] = h.useState(!1), [w, b] = h.useState(""), [m, p] = h.useState("all"), [v, C] = h.useState([]), [E, k] = h.useState(!1), [T, R] = h.useState(null), [I, L] = h.useState(null), [M, g] = h.useState(null), [$, P] = h.useState(""), [O, N] = h.useState(!1), [j, A] = h.useState(null), [z, F] = h.useState(!1), [H, D] = h.useState(null), [X, Y] = h.useState(null), q = h.useRef(null), Q = h.useRef(null), G = h.useCallback(async () => {
    s(!0);
    try {
      const W = await e.api("/users");
      if (!W.ok) {
        const pe = await W.json().catch(() => ({}));
        throw new Error(pe.message ?? `HTTP ${W.status}`);
      }
      const te = await W.json();
      n(te.users ?? []), o(null);
    } catch (W) {
      o(W instanceof Error ? W.message : String(W));
    } finally {
      s(!1);
    }
  }, [e]);
  h.useEffect(() => {
    G();
  }, [G]), h.useEffect(() => {
    var W;
    (W = Q.current) == null || W.scrollIntoView({ block: "end" });
  }, [v]), h.useEffect(() => () => {
    var W;
    return (W = q.current) == null ? void 0 : W.abort();
  }, []);
  async function B(W, te, pe) {
    k(!0), C([]), o(null);
    const ze = new AbortController();
    q.current = ze;
    try {
      for await (const Ae of e.run(W, {
        method: te,
        body: pe,
        signal: ze.signal
      }))
        C((Le) => [...Le, ZM(Ae)]);
    } catch (Ae) {
      ze.signal.aborted || C((Le) => [
        ...Le,
        { stream: "stderr", text: Ae instanceof Error ? Ae.message : String(Ae) }
      ]);
    } finally {
      k(!1), q.current = null, G();
    }
  }
  async function ee(W) {
    W.preventDefault(), await B("/users", "POST", {
      username: l,
      shell: u,
      ...f ? { password: f } : {}
    }), a(""), y(""), D(`Account creation started for "${l}"`);
  }
  async function oe(W, te) {
    R(null), await B(`/users/${W.username}?remove_home=${te}`, "DELETE"), D(`Deleted user "${W.username}"${te ? " and wiped home directory" : ""}`);
  }
  async function Ce(W) {
    const te = W.status === "suspended" ? "unlock" : "lock";
    try {
      const pe = await e.api(`/users/${W.username}/${te}`, { method: "PUT" });
      if (!pe.ok) {
        const ze = await pe.json().catch(() => ({}));
        throw new Error(ze.message ?? `HTTP ${pe.status}`);
      }
      D(`User "${W.username}" ${te === "unlock" ? "unlocked" : "locked"}`), G();
    } catch (pe) {
      o(pe instanceof Error ? pe.message : String(pe));
    }
  }
  async function ye(W) {
    if (W.preventDefault(), !(!M || !$)) {
      F(!0), A(null);
      try {
        const te = await e.api(`/users/${M.username}/password`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: $ })
        });
        if (!te.ok) {
          const pe = await te.json().catch(() => ({}));
          throw new Error(pe.message ?? `HTTP ${te.status}`);
        }
        D(`Password updated successfully for "${M.username}"`), g(null), P("");
      } catch (te) {
        A(te instanceof Error ? te.message : String(te));
      } finally {
        F(!1);
      }
    }
  }
  async function fe(W) {
    L(null), await B(`/users/${W.username}/chown-home`, "POST", { path: W.home }), D(`Permissions restored for "${W.home}"`);
  }
  const se = (W) => {
    navigator.clipboard.writeText(W), Y(W), setTimeout(() => Y(null), 1500);
  }, Re = h.useMemo(() => t.filter((W) => {
    const te = W.username.toLowerCase().includes(w.toLowerCase()) || W.home.toLowerCase().includes(w.toLowerCase()) || String(W.uid).includes(w), pe = m === "all" || W.status === m;
    return te && pe;
  }), [t, w, m]), Ne = h.useMemo(() => t.filter((W) => W.status === "active").length, [t]), be = h.useMemo(() => t.filter((W) => W.status === "suspended").length, [t]);
  return /* @__PURE__ */ S.jsxs(Kt, { spacing: 3, children: [
    r && /* @__PURE__ */ S.jsx(mc, { severity: "error", onClose: () => o(null), children: r }),
    /* @__PURE__ */ S.jsxs(SR, { sx: { bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: "8px" }, children: [
      /* @__PURE__ */ S.jsx(kn, { sx: { px: 2.25, py: 1.5, borderBottom: "1px solid", borderColor: "divider" }, children: /* @__PURE__ */ S.jsxs(Kt, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ S.jsx(mg, { sx: { fontSize: 18, color: "primary.main" } }),
        /* @__PURE__ */ S.jsx(tr, { variant: "h6", sx: { fontSize: "0.9375rem", fontWeight: 700 }, children: "Create Linux User Account" })
      ] }) }),
      /* @__PURE__ */ S.jsx(kR, { sx: { p: 2.25, "&:last-child": { pb: 2.25 } }, children: /* @__PURE__ */ S.jsxs(
        Kt,
        {
          component: "form",
          onSubmit: ee,
          direction: { xs: "column", md: "row" },
          spacing: 2,
          sx: { alignItems: { md: "flex-end" } },
          children: [
            /* @__PURE__ */ S.jsx(Sc, { label: "Username", hint: "required", sx: { flex: 1 }, children: /* @__PURE__ */ S.jsx(
              Ti,
              {
                value: l,
                onChange: (W) => a(W.target.value.toLowerCase()),
                required: !0,
                fullWidth: !0,
                size: "small",
                placeholder: "e.g. appuser",
                slotProps: {
                  htmlInput: {
                    pattern: "[a-z_][a-z0-9_-]{0,31}",
                    title: "lowercase letters, digits, underscore, hyphen; must not start with a digit",
                    style: { fontFamily: jt, fontSize: "0.875rem" }
                  }
                }
              }
            ) }),
            /* @__PURE__ */ S.jsx(Sc, { label: "Login Shell", sx: { flex: 1 }, children: /* @__PURE__ */ S.jsx(
              Ti,
              {
                select: !0,
                size: "small",
                value: u,
                onChange: (W) => c(W.target.value),
                fullWidth: !0,
                children: Cg.map((W) => /* @__PURE__ */ S.jsxs(wI, { value: W, sx: { fontFamily: jt, fontSize: "0.8125rem" }, children: [
                  W,
                  " ",
                  W === "/bin/bash" ? "(Interactive Bash)" : "(No Login / Service)"
                ] }, W))
              }
            ) }),
            /* @__PURE__ */ S.jsx(Sc, { label: "Password", hint: "optional", sx: { flex: 1 }, children: /* @__PURE__ */ S.jsx(
              Ti,
              {
                type: d ? "text" : "password",
                size: "small",
                value: f,
                onChange: (W) => y(W.target.value),
                autoComplete: "new-password",
                fullWidth: !0,
                placeholder: "Leave blank for key-only",
                slotProps: {
                  htmlInput: { style: { fontFamily: jt, fontSize: "0.875rem" } },
                  input: {
                    endAdornment: /* @__PURE__ */ S.jsx(cl, { position: "end", children: /* @__PURE__ */ S.jsx(
                      sn,
                      {
                        size: "small",
                        onClick: () => x(!d),
                        edge: "end",
                        children: d ? /* @__PURE__ */ S.jsx(wg, { sx: { fontSize: 16 } }) : /* @__PURE__ */ S.jsx(Sg, { sx: { fontSize: 16 } })
                      }
                    ) })
                  }
                }
              }
            ) }),
            /* @__PURE__ */ S.jsx(
              pr,
              {
                type: "submit",
                variant: "contained",
                startIcon: /* @__PURE__ */ S.jsx(mg, { sx: { fontSize: 16 } }),
                disabled: E || !l,
                sx: { flexShrink: 0, height: 40, px: 2.5, fontWeight: 600 },
                children: E ? "Creating…" : "Create User"
              }
            )
          ]
        }
      ) })
    ] }),
    (v.length > 0 || E) && /* @__PURE__ */ S.jsx(qM, { lines: v, running: E, endRef: Q, onClear: () => C([]) }),
    /* @__PURE__ */ S.jsxs(kn, { children: [
      /* @__PURE__ */ S.jsxs(Kt, { direction: { xs: "column", sm: "row" }, spacing: 2, sx: { alignItems: { sm: "center" }, justifyContent: "space-between", mb: 2 }, children: [
        /* @__PURE__ */ S.jsxs(Kt, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
          /* @__PURE__ */ S.jsx(tr, { variant: "h6", sx: { fontSize: "1.0625rem", fontWeight: 700 }, children: "System Accounts" }),
          /* @__PURE__ */ S.jsx(
            ki,
            {
              label: `${t.length} total`,
              size: "small",
              sx: { fontFamily: jt, fontSize: "0.75rem", height: 22, bgcolor: "action.hover", fontWeight: 600 }
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs(Kt, { direction: "row", spacing: 1, sx: { alignItems: "center", flexWrap: "wrap", gap: 1 }, children: [
          /* @__PURE__ */ S.jsx(
            Ti,
            {
              size: "small",
              placeholder: "Search users…",
              value: w,
              onChange: (W) => b(W.target.value),
              sx: { width: { xs: "100%", sm: 200 } },
              slotProps: {
                input: {
                  startAdornment: /* @__PURE__ */ S.jsx(cl, { position: "start", children: /* @__PURE__ */ S.jsx(KM, { sx: { fontSize: 16, color: "text.secondary" } }) }),
                  endAdornment: w ? /* @__PURE__ */ S.jsx(cl, { position: "end", children: /* @__PURE__ */ S.jsx(sn, { size: "small", onClick: () => b(""), children: /* @__PURE__ */ S.jsx(GM, { sx: { fontSize: 14 } }) }) }) : null,
                  style: { fontSize: "0.8125rem", height: 34 }
                }
              }
            }
          ),
          /* @__PURE__ */ S.jsxs(Kt, { direction: "row", spacing: 0.5, children: [
            /* @__PURE__ */ S.jsx(
              ki,
              {
                label: "All",
                size: "small",
                onClick: () => p("all"),
                color: m === "all" ? "primary" : "default",
                variant: m === "all" ? "filled" : "outlined",
                sx: { height: 28, fontSize: "0.75rem", cursor: "pointer", fontWeight: 600 }
              }
            ),
            /* @__PURE__ */ S.jsx(
              ki,
              {
                label: `Active (${Ne})`,
                size: "small",
                onClick: () => p("active"),
                color: m === "active" ? "success" : "default",
                variant: m === "active" ? "filled" : "outlined",
                sx: { height: 28, fontSize: "0.75rem", cursor: "pointer", fontWeight: 600 }
              }
            ),
            /* @__PURE__ */ S.jsx(
              ki,
              {
                label: `Suspended (${be})`,
                size: "small",
                onClick: () => p("suspended"),
                color: m === "suspended" ? "warning" : "default",
                variant: m === "suspended" ? "filled" : "outlined",
                sx: { height: 28, fontSize: "0.75rem", cursor: "pointer", fontWeight: 600 }
              }
            )
          ] }),
          /* @__PURE__ */ S.jsx(fr, { title: "Refresh account list", children: /* @__PURE__ */ S.jsx(sn, { size: "small", onClick: G, disabled: i, children: /* @__PURE__ */ S.jsx(YM, { sx: { fontSize: 18 } }) }) })
        ] })
      ] }),
      i && /* @__PURE__ */ S.jsxs(Kt, { direction: "row", spacing: 1.5, sx: { alignItems: "center", py: 3, justifyContent: "center" }, children: [
        /* @__PURE__ */ S.jsx(ga, { size: 20 }),
        /* @__PURE__ */ S.jsx(tr, { variant: "body2", color: "text.secondary", children: "Loading accounts…" })
      ] }),
      !i && Re.length === 0 && /* @__PURE__ */ S.jsx(mc, { severity: "info", variant: "outlined", sx: { borderRadius: "8px" }, children: w || m !== "all" ? "No accounts match the active filter criteria." : "No user accounts found above the minimum UID (1000)." }),
      !i && Re.length > 0 && /* @__PURE__ */ S.jsx(MM, { component: jr, sx: { border: "1px solid", borderColor: "divider", borderRadius: "8px", overflowX: "auto" }, children: /* @__PURE__ */ S.jsxs(yM, { size: "small", children: [
        /* @__PURE__ */ S.jsx(LM, { sx: { bgcolor: "action.hover" }, children: /* @__PURE__ */ S.jsxs(pg, { children: [
          /* @__PURE__ */ S.jsx(on, { sx: { fontWeight: 700, fontSize: "0.75rem" }, children: "USERNAME" }),
          /* @__PURE__ */ S.jsx(on, { sx: { fontWeight: 700, fontSize: "0.75rem" }, children: "UID" }),
          /* @__PURE__ */ S.jsx(on, { sx: { fontWeight: 700, fontSize: "0.75rem" }, children: "HOME DIRECTORY" }),
          /* @__PURE__ */ S.jsx(on, { sx: { fontWeight: 700, fontSize: "0.75rem" }, children: "SHELL" }),
          /* @__PURE__ */ S.jsx(on, { sx: { fontWeight: 700, fontSize: "0.75rem" }, children: "STATUS" }),
          /* @__PURE__ */ S.jsx(on, { align: "right", sx: { fontWeight: 700, fontSize: "0.75rem", pr: 2 }, children: "ACTIONS" })
        ] }) }),
        /* @__PURE__ */ S.jsx(CM, { children: Re.map((W) => /* @__PURE__ */ S.jsxs(pg, { hover: !0, sx: { "&:last-child td, &:last-child th": { border: 0 } }, children: [
          /* @__PURE__ */ S.jsx(on, { children: /* @__PURE__ */ S.jsxs(Kt, { direction: "row", spacing: 0.75, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ S.jsx(kn, { sx: { fontFamily: jt, fontSize: "0.875rem", fontWeight: 700, color: "text.primary" }, children: W.username }),
            /* @__PURE__ */ S.jsx(fr, { title: X === W.username ? "Copied!" : "Copy username", children: /* @__PURE__ */ S.jsx(
              sn,
              {
                size: "small",
                onClick: () => se(W.username),
                sx: { p: 0.25, opacity: 0.6, "&:hover": { opacity: 1 } },
                children: X === W.username ? /* @__PURE__ */ S.jsx(xg, { sx: { fontSize: 13, color: "success.main" } }) : /* @__PURE__ */ S.jsx(vg, { sx: { fontSize: 13 } })
              }
            ) })
          ] }) }),
          /* @__PURE__ */ S.jsx(on, { sx: { fontFamily: jt, fontSize: "0.8125rem", color: "text.secondary" }, children: W.uid }),
          /* @__PURE__ */ S.jsx(on, { children: /* @__PURE__ */ S.jsxs(Kt, { direction: "row", spacing: 0.75, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ S.jsx(kn, { sx: { fontFamily: jt, fontSize: "0.8125rem", color: "text.secondary" }, children: W.home }),
            /* @__PURE__ */ S.jsx(fr, { title: X === W.home ? "Copied!" : "Copy path", children: /* @__PURE__ */ S.jsx(
              sn,
              {
                size: "small",
                onClick: () => se(W.home),
                sx: { p: 0.25, opacity: 0.6, "&:hover": { opacity: 1 } },
                children: X === W.home ? /* @__PURE__ */ S.jsx(xg, { sx: { fontSize: 13, color: "success.main" } }) : /* @__PURE__ */ S.jsx(vg, { sx: { fontSize: 13 } })
              }
            ) })
          ] }) }),
          /* @__PURE__ */ S.jsx(on, { sx: { fontFamily: jt, fontSize: "0.8125rem", color: "text.secondary" }, children: W.shell }),
          /* @__PURE__ */ S.jsx(on, { children: /* @__PURE__ */ S.jsx(
            ki,
            {
              size: "small",
              label: W.status.toUpperCase(),
              color: W.status === "active" ? "success" : "warning",
              sx: { fontSize: "0.6875rem", height: 22, fontWeight: 700 }
            }
          ) }),
          /* @__PURE__ */ S.jsx(on, { align: "right", sx: { pr: 1.5 }, children: /* @__PURE__ */ S.jsxs(Kt, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
            /* @__PURE__ */ S.jsx(fr, { title: "Change Password", children: /* @__PURE__ */ S.jsx("span", { children: /* @__PURE__ */ S.jsx(
              sn,
              {
                size: "small",
                disabled: E,
                onClick: () => {
                  g(W), P(""), A(null);
                },
                sx: { "&:hover": { color: "primary.main" } },
                children: /* @__PURE__ */ S.jsx(gg, { sx: { fontSize: 16 } })
              }
            ) }) }),
            /* @__PURE__ */ S.jsx(fr, { title: "Restore Home Directory Ownership", children: /* @__PURE__ */ S.jsx("span", { children: /* @__PURE__ */ S.jsx(
              sn,
              {
                size: "small",
                disabled: E,
                onClick: () => L(W),
                sx: { "&:hover": { color: "info.main" } },
                children: /* @__PURE__ */ S.jsx(yg, { sx: { fontSize: 16 } })
              }
            ) }) }),
            /* @__PURE__ */ S.jsx(fr, { title: W.status === "suspended" ? "Unlock Account" : "Lock Account", children: /* @__PURE__ */ S.jsx("span", { children: /* @__PURE__ */ S.jsx(
              sn,
              {
                size: "small",
                disabled: E,
                onClick: () => Ce(W),
                sx: { "&:hover": { color: W.status === "suspended" ? "success.main" : "warning.main" } },
                children: W.status === "suspended" ? /* @__PURE__ */ S.jsx(HM, { sx: { fontSize: 16 } }) : /* @__PURE__ */ S.jsx(UM, { sx: { fontSize: 16 } })
              }
            ) }) }),
            /* @__PURE__ */ S.jsx(fr, { title: "Delete account (keep home directory)", children: /* @__PURE__ */ S.jsx("span", { children: /* @__PURE__ */ S.jsx(
              sn,
              {
                size: "small",
                disabled: E,
                onClick: () => oe(W, !1),
                sx: { "&:hover": { color: "error.main" } },
                children: /* @__PURE__ */ S.jsx(VM, { sx: { fontSize: 16 } })
              }
            ) }) }),
            /* @__PURE__ */ S.jsx(fr, { title: "Delete account AND erase home directory", children: /* @__PURE__ */ S.jsx("span", { children: /* @__PURE__ */ S.jsx(
              sn,
              {
                size: "small",
                color: "error",
                disabled: E,
                onClick: () => R(W),
                children: /* @__PURE__ */ S.jsx(hg, { sx: { fontSize: 16 } })
              }
            ) }) })
          ] }) })
        ] }, W.username)) })
      ] }) })
    ] }),
    /* @__PURE__ */ S.jsx(
      hc,
      {
        open: !!M,
        onClose: () => !z && g(null),
        maxWidth: "xs",
        fullWidth: !0,
        children: /* @__PURE__ */ S.jsxs(kn, { component: "form", onSubmit: ye, children: [
          /* @__PURE__ */ S.jsxs(xc, { sx: { fontWeight: 700 }, children: [
            "Change Password: ",
            /* @__PURE__ */ S.jsx("span", { style: { fontFamily: jt }, children: M == null ? void 0 : M.username })
          ] }),
          /* @__PURE__ */ S.jsxs(yc, { children: [
            /* @__PURE__ */ S.jsx(vc, { sx: { mb: 2, fontSize: "0.8125rem" }, children: "Enter a new password for this Linux account. It will be updated securely on stdin via system authentication." }),
            j && /* @__PURE__ */ S.jsx(mc, { severity: "error", sx: { mb: 2, fontSize: "0.8125rem" }, children: j }),
            /* @__PURE__ */ S.jsx(
              Ti,
              {
                autoFocus: !0,
                label: "New Password",
                type: O ? "text" : "password",
                value: $,
                onChange: (W) => P(W.target.value),
                required: !0,
                fullWidth: !0,
                size: "small",
                autoComplete: "new-password",
                placeholder: "••••••••••••",
                slotProps: {
                  htmlInput: { style: { fontFamily: jt } },
                  input: {
                    endAdornment: /* @__PURE__ */ S.jsx(cl, { position: "end", children: /* @__PURE__ */ S.jsx(
                      sn,
                      {
                        size: "small",
                        onClick: () => N(!O),
                        edge: "end",
                        children: O ? /* @__PURE__ */ S.jsx(wg, { sx: { fontSize: 16 } }) : /* @__PURE__ */ S.jsx(Sg, { sx: { fontSize: 16 } })
                      }
                    ) })
                  }
                }
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs(gc, { sx: { px: 3, pb: 2 }, children: [
            /* @__PURE__ */ S.jsx(pr, { onClick: () => g(null), disabled: z, children: "Cancel" }),
            /* @__PURE__ */ S.jsx(
              pr,
              {
                type: "submit",
                variant: "contained",
                disabled: z || !$,
                startIcon: z ? /* @__PURE__ */ S.jsx(ga, { size: 14 }) : /* @__PURE__ */ S.jsx(gg, { sx: { fontSize: 14 } }),
                children: z ? "Updating…" : "Update Password"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ S.jsxs(hc, { open: !!I, onClose: () => L(null), children: [
      /* @__PURE__ */ S.jsxs(xc, { sx: { fontWeight: 700 }, children: [
        "Restore Permissions for ",
        I == null ? void 0 : I.username,
        "?"
      ] }),
      /* @__PURE__ */ S.jsx(yc, { children: /* @__PURE__ */ S.jsxs(vc, { sx: { fontSize: "0.875rem" }, children: [
        "This will recursively fix ownership on",
        " ",
        /* @__PURE__ */ S.jsx(kn, { component: "span", sx: { fontFamily: jt, fontWeight: 700, color: "text.primary" }, children: I == null ? void 0 : I.home }),
        " ",
        "to ",
        /* @__PURE__ */ S.jsxs(kn, { component: "span", sx: { fontFamily: jt }, children: [
          I == null ? void 0 : I.username,
          ":",
          I == null ? void 0 : I.username
        ] }),
        "."
      ] }) }),
      /* @__PURE__ */ S.jsxs(gc, { sx: { px: 3, pb: 2 }, children: [
        /* @__PURE__ */ S.jsx(pr, { onClick: () => L(null), children: "Cancel" }),
        /* @__PURE__ */ S.jsx(
          pr,
          {
            variant: "contained",
            color: "info",
            startIcon: /* @__PURE__ */ S.jsx(yg, { sx: { fontSize: 14 } }),
            onClick: () => I && fe(I),
            children: "Fix Ownership"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs(hc, { open: !!T, onClose: () => R(null), children: [
      /* @__PURE__ */ S.jsxs(xc, { sx: { fontWeight: 700, color: "error.main" }, children: [
        "Erase ",
        T == null ? void 0 : T.username,
        "’s Home Directory?"
      ] }),
      /* @__PURE__ */ S.jsx(yc, { children: /* @__PURE__ */ S.jsxs(vc, { sx: { fontSize: "0.875rem" }, children: [
        "This will permanently delete the Linux user account ",
        /* @__PURE__ */ S.jsx("strong", { children: "and" }),
        " erase all files inside",
        " ",
        /* @__PURE__ */ S.jsx(kn, { component: "span", sx: { fontFamily: jt, fontWeight: 700, color: "error.light" }, children: T == null ? void 0 : T.home }),
        ". This action cannot be undone."
      ] }) }),
      /* @__PURE__ */ S.jsxs(gc, { sx: { px: 3, pb: 2 }, children: [
        /* @__PURE__ */ S.jsx(pr, { onClick: () => R(null), children: "Cancel" }),
        /* @__PURE__ */ S.jsx(
          pr,
          {
            color: "error",
            variant: "contained",
            startIcon: /* @__PURE__ */ S.jsx(hg, { sx: { fontSize: 14 } }),
            onClick: () => T && oe(T, !0),
            children: "Delete & Erase Files"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ S.jsx(
      lM,
      {
        open: !!H,
        autoHideDuration: 3500,
        onClose: () => D(null),
        message: H,
        anchorOrigin: { vertical: "bottom", horizontal: "right" }
      }
    )
  ] });
}
function Sc({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ S.jsxs(kn, { sx: n, children: [
    /* @__PURE__ */ S.jsxs(Kt, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ S.jsx(
        tr,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 600, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ S.jsx(tr, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function qM({
  lines: e,
  running: t,
  endRef: n,
  onClear: r
}) {
  return /* @__PURE__ */ S.jsxs(
    jr,
    {
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: Yn.bg,
        color: Yn.fg,
        border: "1px solid",
        borderColor: Yn.rule,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "20rem",
        overflowY: "auto",
        fontFamily: jt,
        fontSize: 12.5,
        lineHeight: 1.5,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ S.jsxs(Kt, { direction: "row", sx: { justifyContent: "space-between", alignItems: "center", mb: 1, borderBottom: `1px solid ${Yn.rule}`, pb: 0.75 }, children: [
          /* @__PURE__ */ S.jsx(tr, { sx: { fontSize: "0.6875rem", fontWeight: 700, color: Yn.dim, letterSpacing: "0.05em" }, children: "LIVE EXECUTION OUTPUT" }),
          !t && e.length > 0 && /* @__PURE__ */ S.jsx(pr, { size: "small", onClick: r, sx: { fontSize: "0.6875rem", py: 0, minHeight: 20 }, children: "Dismiss" })
        ] }),
        e.map((o, i) => /* @__PURE__ */ S.jsx(
          kn,
          {
            sx: {
              color: o.stream === "stderr" ? Yn.err : o.stream === "meta" ? Yn.meta : Yn.fg
            },
            children: o.text || " "
          },
          i
        )),
        t && /* @__PURE__ */ S.jsx(kn, { sx: { color: Yn.accent, mt: 0.5 }, children: "▍Executing operation…" }),
        /* @__PURE__ */ S.jsx("div", { ref: n })
      ]
    }
  );
}
function ZM(e) {
  switch (e.kind) {
    case "log":
      return { stream: e.stream, text: e.line };
    case "error":
      return { stream: "stderr", text: e.message };
    case "result":
      return {
        stream: "meta",
        text: e.ok ? `✓ completed successfully (${e.code})` : `✗ ${e.code}: ${e.message ?? "operation failed"}` + (e.exit_code !== void 0 ? ` [exit ${e.exit_code}]` : "")
      };
  }
}
let va = null;
function JM(e, t) {
  va = zv(e), va.render(
    /* @__PURE__ */ S.jsx(h.StrictMode, { children: /* @__PURE__ */ S.jsx(QM, { ctx: t }) })
  );
}
function e5() {
  const e = va;
  va = null, e && queueMicrotask(() => e.unmount());
}
const n5 = { mount: JM, unmount: e5 };
export {
  n5 as default,
  JM as mount,
  e5 as unmount
};
//# sourceMappingURL=main.js.map
